/*amd /ui/il/seaout/sobl/se_106_01_01b.xml 152043 aa3528c8fcab1792712a0d870b2e6d6c70cb953d9e07f0a61646d7f19cf64f8c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_combo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'SQL ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라메터1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'파라메터2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'파라메터3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'파라메터4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_code'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'grpCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cd',name:'cd',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{id:'ds_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'kcomcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:key',A:{id:'hhblno',name:'hhblno',dataType:'string',defaultValue:''}},{T:1,N:'w2:key',A:{id:'mhmblno',name:'mhmblno',dataType:'string',defaultValue:''}},{T:1,N:'w2:key',A:{id:'mhno',name:'mhno',dataType:'string',defaultValue:''}},{T:1,N:'w2:key',A:{id:'mhvslcd',name:'mhvslcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:key',A:{id:'mhvsl',name:'mhvsl',dataType:'string',defaultValue:''}},{T:1,N:'w2:key',A:{id:'mhvyg',name:'mhvyg',dataType:'string',defaultValue:''}},{T:1,N:'w2:key',A:{id:'mhio',name:'mhio',dataType:'string',defaultValue:''}},{T:1,N:'w2:key',A:{id:'mhetd',name:'mhetd',dataType:'string',defaultValue:''}},{T:1,N:'w2:key',A:{id:'odrNo',name:'odrNo',dataType:'string',defaultValue:''}},{T:1,N:'w2:key',A:{id:'shipMgntNo',name:'shipMgntNo',dataType:'string',defaultValue:''}}]}]},{T:1,N:'w2:dataMap',A:{id:'ds_retrieve2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'hhmblno',name:'hhmblno',dataType:'string',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_vessel',baseNode:'list',repeatNode:'map','ev:oncelldatachange':'scwin.ds_vessel_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'kcomcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhblno',name:'hhblno',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhno',name:'mhno',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhvslcd',name:'hhvslcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhvsl',name:'hhvsl',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhvyg',name:'hhvyg',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhio',name:'mhio',dataType:'string',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_gridHouseList',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'kcomcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhblno',name:'hhblno',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhio',name:'hhio',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhno',name:'mhno',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhpkg',name:'hhpkg',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhgwgt',name:'hhgwgt',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhmsr',name:'hhmsr',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhbltype',name:'hhbltype',dataType:'string',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_retrieveNo',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mhno',name:'mhno',dataType:'string',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ocHblhList',baseNode:'list',repeatNode:'map','ev:onrowpositionchange':'scwin.ds_ocHblhList_onrowpositionchange','ev:ondataload':'scwin.ds_ocHblhList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'kcomcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhblno',name:'hhblno',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'autono',name:'autono',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhno',name:'mhno',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhmblno',name:'hhmblno',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhio',name:'hhio',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhbkgno',name:'hhbkgno',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhbkgseq',name:'hhbkgseq',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhscd',name:'hhscd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhclosing',name:'hhclosing',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhs1',name:'hhs1',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhs2',name:'hhs2',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhs3',name:'hhs3',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhs4',name:'hhs4',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhs5',name:'hhs5',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhccd',name:'hhccd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhc1',name:'hhc1',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhc2',name:'hhc2',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhc3',name:'hhc3',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhc4',name:'hhc4',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhc5',name:'hhc5',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhncd',name:'hhncd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhn1',name:'hhn1',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhn2',name:'hhn2',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhn3',name:'hhn3',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhn4',name:'hhn4',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhn5',name:'hhn5',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhvslcd',name:'hhvslcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhvsl',name:'hhvsl',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhvyg',name:'hhvyg',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhlodcd',name:'hhlodcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhlodnm',name:'hhlodnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhdisccd',name:'hhdisccd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhdiscnm',name:'hhdiscnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhpkg',name:'hhpkg',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhunitcd',name:'hhunitcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhunit',name:'hhunit',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhgwgt',name:'hhgwgt',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhmsr',name:'hhmsr',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhetd',name:'hhetd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhondt',name:'hhondt',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hheta',name:'hheta',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhisudt',name:'hhisudt',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'creadyDt',name:'creadyDt',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhdanggb',name:'hhdanggb',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhpcgb',name:'hhpcgb',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhbltype',name:'hhbltype',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhisunm',name:'hhisunm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhpaynm',name:'hhpaynm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhprenm',name:'hhprenm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhstype',name:'hhstype',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhincoterm',name:'hhincoterm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhcnt1type',name:'hhcnt1type',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhcnt2type',name:'hhcnt2type',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhcnt3type',name:'hhcnt3type',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhcnt4type',name:'hhcnt4type',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhcnt1',name:'hhcnt1',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhcnt2',name:'hhcnt2',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhcnt3',name:'hhcnt3',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhcnt4',name:'hhcnt4',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhagent',name:'hhagent',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhagentnm',name:'hhagentnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhagentattn',name:'hhagentattn',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhagentattnnm',name:'hhagentattnnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhactcust',name:'hhactcust',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhactcustnm',name:'hhactcustnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhactattn',name:'hhactattn',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhactattnnm',name:'hhactattnnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhsales',name:'hhsales',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhsalesnm',name:'hhsalesnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhliner',name:'hhliner',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhlinernm',name:'hhlinernm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhlinerattn',name:'hhlinerattn',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhlinerattnnm',name:'hhlinerattnnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhbuyer',name:'hhbuyer',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhbuyernm',name:'hhbuyernm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hharea',name:'hharea',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhareanm',name:'hhareanm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhtriange',name:'hhtriange',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhnomi',name:'hhnomi',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhobl',name:'hhobl',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhcoload',name:'hhcoload',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhsubpkg',name:'hhsubpkg',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhunit2',name:'hhunit2',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mark',name:'mark',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'descnm',name:'descnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhp1',name:'hhp1',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhp2',name:'hhp2',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhp3',name:'hhp3',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhp4',name:'hhp4',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhp5',name:'hhp5',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhp6',name:'hhp6',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhsay',name:'hhsay',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhitem',name:'hhitem',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhmitem1',name:'hhmitem1',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhmitem2',name:'hhmitem2',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhrmk1',name:'hhrmk1',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhrmk2',name:'hhrmk2',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhrmk3',name:'hhrmk3',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhrmk4',name:'hhrmk4',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhrmk5',name:'hhrmk5',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhmnfgb',name:'hhmnfgb',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhfvsl',name:'hhfvsl',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhrcvcd',name:'hhrcvcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhrcvnm',name:'hhrcvnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhdlvcd',name:'hhdlvcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhdlvnm',name:'hhdlvnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhfdcd',name:'hhfdcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhfdnm',name:'hhfdnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhpono',name:'hhpono',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhcustvalue',name:'hhcustvalue',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhlcno',name:'hhlcno',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'odrNo',name:'odrNo',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'inpid',name:'inpid',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'inpdt',name:'inpdt',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'updid',name:'updid',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'upddt',name:'upddt',dataType:'string',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ocContList',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'kcomcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mchblno',name:'mchblno',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhno',name:'mhno',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mccntno',name:'mccntno',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mctype',name:'mctype',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mcseal1',name:'mcseal1',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mcseal2',name:'mcseal2',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mcpkg',name:'mcpkg',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mcpkgcd',name:'mcpkgcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mcwgt',name:'mcwgt',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mcmsr',name:'mcmsr',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mciso',name:'mciso',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'inpid',name:'inpid',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'inpdt',name:'inpdt',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'updid',name:'updid',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'upddt',name:'upddt',dataType:'string',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ocMblhList',baseNode:'list',repeatNode:'map','ev:oncelldatachange':'scwin.ds_ocMblhList_oncelldatachange','ev:ondataload':'scwin.ds_ocMblhList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'kcomcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhno',name:'mhno',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhmblno',name:'mhmblno',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhio',name:'mhio',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhmrnno',name:'mhmrnno',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhmsnno',name:'mhmsnno',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhlinercd',name:'mhlinercd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhlinernm',name:'mhlinernm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhlinerattn',name:'mhlinerattn',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhlinerattnnm',name:'mhlinerattnnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhbuyer',name:'mhbuyer',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhbuyernm',name:'mhbuyernm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhscd',name:'mhscd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhsnm',name:'mhsnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhccd',name:'mhccd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhcnm',name:'mhcnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhncd',name:'mhncd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhnnm',name:'mhnnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhfvsl',name:'mhfvsl',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhfvyg',name:'mhfvyg',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhvsl',name:'mhvsl',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhvyg',name:'mhvyg',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhlodcd',name:'mhlodcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhlodnm',name:'mhlodnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhdisccd',name:'mhdisccd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhdiscnm',name:'mhdiscnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhdlvcd',name:'mhdlvcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhdlvnm',name:'mhdlvnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhdescd',name:'mhdescd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhdesnm',name:'mhdesnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhetd',name:'mhetd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mheta',name:'mheta',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhfeta',name:'mhfeta',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhcrdt',name:'mhcrdt',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhpkg',name:'mhpkg',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mhwgt',name:'mhwgt',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mhmsr',name:'mhmsr',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mhexrate',name:'mhexrate',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mhunit',name:'mhunit',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhcur',name:'mhcur',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhcurdt',name:'mhcurdt',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhandt',name:'mhandt',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhattn',name:'mhattn',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhcschk',name:'mhcschk',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhpccd',name:'mhpccd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhusdrate',name:'mhusdrate',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mhediliner',name:'mhediliner',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'groupNo',name:'groupNo',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhflc',name:'mhflc',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhunitcd',name:'mhunitcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mexgb',name:'mexgb',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhbltype',name:'mhbltype',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhlinecd',name:'mhlinecd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhlinenm',name:'mhlinenm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhlineattn',name:'mhlineattn',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhlineattnnm',name:'mhlineattnnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mleta',name:'mleta',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mdetd',name:'mdetd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mlrmk1',name:'mlrmk1',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mdrmk1',name:'mdrmk1',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mdrmk2',name:'mdrmk2',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mharea',name:'mharea',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhareanm',name:'mhareanm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhdanggb',name:'mhdanggb',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhcnt1type',name:'mhcnt1type',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhcnt2type',name:'mhcnt2type',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhcnt3type',name:'mhcnt3type',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhcnt4type',name:'mhcnt4type',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhcnt1',name:'mhcnt1',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mhcnt2',name:'mhcnt2',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mhcnt3',name:'mhcnt3',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mhcnt4',name:'mhcnt4',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'odrNo',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhitem',name:'mhitem',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhitemNm',name:'mhitemNm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'inpid',name:'inpid',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'inpdt',name:'inpdt',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'updid',name:'updid',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'upddt',name:'upddt',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhstdt',name:'mhstdt',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhvslcd',name:'mhvslcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhactcust',name:'mhactcust',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhactcustnm',name:'mhactcustnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'shipMgntNo',name:'shipMgntNo',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhondt',name:'mhondt',dataType:'string',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_scwin.invoiceCheck',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'string',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_departmentInfo',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',name:'CODE',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'NAME',name:'NAME',dataType:'string',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_slipTax',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'hhio',name:'hhio',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhblno',name:'hhblno',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mhno',name:'mhno',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'odrNo',name:'odrNo',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'intendDt',name:'intendDt',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'spplyDt',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'slipNo',name:'slipNo',dataType:'string',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_masterHouseBlList',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'name',name:'NAME',dataType:'string',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ocProfitList',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selling',name:'selling',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'buying',name:'buying',dataType:'decimal',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'profit',name:'profit',dataType:'decimal',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_cndmhmblno',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'CODE',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'name',name:'NAME',dataType:'string',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_DeptChangeParam',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'kcomcd',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'modrNo',name:'modrNo',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hodrNo',name:'hodrNo',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dept',name:'dept',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'deptnm',name:'deptnm',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bulkGb',name:'bulkGb',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'spRtn',name:'spRtn',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'spMsg',name:'spMsg',dataType:'string',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_DeptChangeResult',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spRtn',name:'spRtn',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'spMsg',name:'spMsg',dataType:'string',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_hmhno',baseNode:'list',repeatNode:'map','ev:ondataload':'scwin.ds_hmhno_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'string',defaultValue:''}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'string',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_mmhno',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mhno',name:'mhno',dataType:'string',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_checkMasterBl',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'string',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_invoiceCheck'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_combo',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_combo","key":"IN_DS1"}',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.seaout.sobl.RetrieveSeaExportVesselCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'',ref:'data:json, [{"key":"IN_DS1","id":"ds_retrieve"},{"key":"OUT_DS1","id":"ds_vessel"}]',target:'data:json,[{"id":"ds_vessel","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'','ev:submit':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveHouse',action:'/il.seaout.sobl.RetrieveSeaExportMasterBlCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',ref:'data:json, [{"key":"IN_DS1","id":"ds_vessel"},{"key":"OUT_DS1","id":"ds_ocHblhList"}]',target:'data:json,[{"id":"ds_ocHblhList","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveHouse_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveGridHouse',action:'/il.seaout.sobl.RetrieveSeaExportGridHouseCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',ref:'data:json, [{"key":"IN_DS1","id":"ds_gridHouseList"},{"key":"OUT_DS1","id":"ds_gridHouseList"}]',target:'data:json,[{"id":"ds_gridHouseList","key":"OUT_DS1"}]','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_createMhno',action:'/il.seaout.sobl.RetrieveMhnoCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',ref:'data:json, [{"key":"IN_DS1","id":"ds_retrieve"},{"key":"OUT_DS1","id":"ds_retrieveNo"}]',target:'data:json,[{"id":"ds_retrieveNo","key":"OUT_DS1"}]','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveMhno',action:'/il.seaout.sobl.RetrieveSeaExportMasterBlMhnoCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',abortTrigger:'',ref:'data:json, [{"key":"IN_DS1","id":"ds_retrieve"},{"id":"ds_ocHblhList","key":"OUT_DS1"},{"id":"ds_ocContList","key":"OUT_DS2"},{"id":"ds_ocMblhList","key":"OUT_DS3"},{"id":"ds_slipTax","key":"OUT_DS4"},{"id":"ds_ocProfitList","key":"OUT_DS5"}]',target:'data:json,[{"id":"ds_ocHblhList","key":"OUT_DS1"},{"id":"ds_ocContList","key":"OUT_DS2"},{"id":"ds_ocMblhList","key":"OUT_DS3"},{"id":"ds_slipTax","key":"OUT_DS4"},{"id":"ds_ocProfitList","key":"OUT_DS5"}]','ev:submitdone':'scwin.sbm_retrieveMhno_submitdone','ev:submiterror':'','ev:submit':''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.seaout.sobl.SaveMasterBlCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',ref:'data:json, [{"key":"IN_DS1","id":"ds_ocHblhList"}, {"key":"IN_DS2","id":"ds_ocMblhList"}, {"key":"OUT_DS1","id":"ds_ocContList"} ]',target:'data:json,[{"id":"ds_ocContList","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/il.seaout.sobl.DeleteMasterBlCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',ref:'data:json, [{"key":"IN_DS1","id":"ds_retrieve"}]',target:'data:json, []','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'scwin.sbm_delete_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_DeptChange',action:'/il.comm.util.CoSeaDeptChangeCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',ref:'data:json, [{"key":"IN_DS1","id":"ds_DeptChangeParam"},{"key":"OUT_DS1","id":"ds_DeptChangeResult"}]',target:'data:json,[{"id":"ds_DeptChangeResult","key":"OUT_DS1"}]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDraftBl',action:'/il.seaout.sosr.RetrieveSeaExportDraftMasterBlCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',ref:'data:json, [ {"key":"IN_DS1","id":"ds_retrieve"}, {"key":"OUT_DS1","id":"ds_ocMblhList"}, {"key":"OUT_DS2","id":"ds_ocHblhList"} ]',target:'data:json, [ {"id":"ds_ocMblhList","key":"OUT_DS1"}, {"id":"ds_ocHblhList","key":"OUT_DS2"} ]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDraftMhno',action:'/il.seaout.sosr.RetrieveSeaExportDraftMhnoCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',ref:'data:json, [{"key":"IN_DS1","id":"ds_retrieve"},{"key":"OUT_DS1","id":"ds_mmhno"}]',target:'data:json,[{"id":"ds_mmhno","key":"OUT_DS1"}]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_checkMasterBl',action:'/il.seaout.sobl.CheckDirectBlMasterBlCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',ref:'data:json, [{"key":"IN_DS1","id":"ds_retrieve2"},{"key":"OUT_DS1","id":"ds_checkMasterBl"}]',target:'data:json,[{"id":"ds_checkMasterBl","key":"OUT_DS1"}]','ev:submitdone':'','ev:submiterror':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : se_106_01_01b
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
//==================================================================================================================

// JSP 상수/메시지 그대로 유지
var MSG_LO_WRN_008 = "이미 전표가 생성  되어 있어 삭제가 불가능 합니다.";
var MSG_LO_WRN_009 = "Department 가 변경되었습니다.";
scwin.E_MSG_CM_ERR_041 = "MRN Information alreay exists. First Delete MRN Information.";
scwin.statusFlag = ""; // C:Regist, U:Update, I:Init
scwin.processFlag = "";
scwin.invoiceCheck = "0";
scwin.mhnoFlag = "0"; // 1이면 mhno onloadComplete 후 조회.

scwin.v_linkcheck = "";
scwin.v_kcomcd = "";
scwin.v_blno = "";
scwin.v_mblno = "";
scwin.v_mhno = "";
scwin.v_bkno = "";
scwin.v_vslcd = "";
scwin.v_vsl = "";
scwin.v_vyg = "";
scwin.loaded = 0;
scwin.v_clntNo = ""; // 귀속부서코드 
scwin.v_clntNm = ""; // 귀속부서 

// JSP의 hidden 값 대응
scwin.hd_kcomcd = "DBEX";
scwin.hd_mhio = "O";
scwin.hd_mhvslcd = "";
scwin.hd_mhvsl = "";
scwin.hd_mhvyg = "";

// JSP의 현재일자 strCurDate → 서버일자 사용
scwin.strCurDate = "";
scwin.userId = null; // 사용자 아이디 

scwin.flag = "";

// onpageload
scwin.onpageload = function () {
  // 세션 정보
  var mem = $c.data.getMemInfo($p);
  scwin.userId = mem && mem.userId ? mem.userId : "";
  var p_lobranCd = mem && mem.lobranCd ? mem.lobranCd : ""; // 귀속부서코드 
  var p_lobranNm = mem && mem.lobranNm ? mem.lobranNm : ""; // 귀속부서 명

  /*
  CommonCompanyInfoDTO commonCompanyInfoDTO = ILCommonUtil.getCompanyInfoDTO(p_lobranCd); 
  String p_clntNo = commonCompanyInfoDTO.getClntNo();	
  String p_clntNm = commonCompanyInfoDTO.getName1();		
  */

  // JSP request parameter 치환
  scwin.v_linkcheck = $c.data.getParameter($p, "linkcheck") || "0";
  scwin.v_kcomcd = $c.data.getParameter($p, "kcomcd") || "";
  scwin.v_blno = $c.data.getParameter($p, "blno") || "";
  scwin.v_mblno = $c.data.getParameter($p, "mblno") || "";
  scwin.v_mhno = $c.data.getParameter($p, "mhno") || "";
  scwin.v_bkno = $c.data.getParameter($p, "bkno") || "";
  scwin.v_vslcd = $c.data.getParameter($p, "vslcd") || "";
  scwin.v_vsl = $c.data.getParameter($p, "vsl") || "";
  scwin.v_vyg = $c.data.getParameter($p, "vyg") || "";

  // 서버일자
  scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");

  /*
  const codeOptions = [
      { grpCd: "IL005", compID: "lc_hhincoterm" }     //열위치
    // , { grpCd: "FI006", compID: "gr_region:acctSummaryCd" }  //적요위치
  ];
  $c.data.setCommonCode(codeOptions);
  */
};
/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    // 초기 dataset header 구성 및 화면 초기화
    scwin.f_DefaultValue();
    scwin.f_getParametrSetting(scwin.v_linkcheck);
  }, {
    "delay": 50
  });
};

//---------------------------------------------------------------------
// Parameter Setting
//---------------------------------------------------------------------
scwin.f_getParametrSetting = async function (gubun) {
  switch (gubun) {
    case "0":
      break;
    case "1":
      // house Search에서 옴
      cnd_ed_mhmblno.setValue(scwin.v_mblno);
      scwin.hd_kcomcd = scwin.v_kcomcd;
      ed_mhvslcd.setValue(scwin.v_vslcd);
      txt_mhvsl.setValue(scwin.v_vsl);
      ed_mhvyg.setValue(scwin.v_vyg);

      // ds_retrieve 값 세팅
      ds_retrieve.set("kcomcd", scwin.v_kcomcd);
      ds_retrieve.set("mhmblno", scwin.v_mblno);
      ds_retrieve.set("mhno", "");
      ds_retrieve.set("mhio", scwin.hd_mhio);
      ds_retrieve.set("mhvslcd", scwin.v_vslcd);
      ds_retrieve.set("mhvsl", scwin.v_vsl);
      ds_retrieve.set("mhvyg", scwin.v_vyg);
      await $c.sbm.execute($p, sbm_retrieveDraftMhno);
      if (ds_mmhno.getRowCount() == 0 || $c.util.isEmpty($p, ds_mmhno.getValue(0, "mhno"))) {
        scwin.f_RetrieveDraftBl();
        scwin.f_Set("CREATE");
        $c.gus.cfEnableObjects($p, [ed_mhvslcd, txt_mhvsl, ed_mhvyg]); // 조회조건. 						
      } else if (ds_mmhno.getRowCount() > 0 && !$c.util.isEmpty($p, ds_mmhno.getValue(0, "mhno"))) {
        // ds_mmhno.RowPosition
        scwin.f_CndMhmblnoLoading();
        cnd_lc_mhno.setSelectedIndex(0);
        scwin.f_Retrieve();
      }
      break;
    case "3":
      // house Search에서 옴
      scwin.mhnoFlag = "1";
      cnd_ed_hhblno.setValue(scwin.v_blno);
      scwin.hd_kcomcd = scwin.v_kcomcd;
      let row = ds_hmhno.getRowPosition() || 0;
      if (ds_hmhno.getRowCount() === 0) {
        row = ds_hmhno.insertRow(0);
      }
      ds_hmhno.setCellData(row, "code", scwin.v_mhno);
      ds_hmhno.setCellData(row, "name", scwin.v_mhno);
      cnd_lc_mhno.setSelectedIndex(0);
      scwin.f_Retrieve();
      break;
    case "5":
      // House B/L에서 생성(create)
      scwin.f_Create();
      ed_mhvslcd.setValue(scwin.v_vslcd);
      txt_mhvsl.setValue(scwin.v_vsl);
      ed_mhvyg.setValue(scwin.v_vyg);
      scwin.f_RetrieveVessel();
      ed_mhscd.setValue("114403");
      txt_mhsnm.setValue("DONGWON LOEX CO., LTD.");
      scwin.f_MasterSum();
      break;
  }
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_DefaultValue = function () {
  if (ds_hmhno.getRowCount() === 0) ds_hmhno.insertRow(0);
  scwin.f_Set("INIT");
  scwin.f_ContentsDisplay();
  rd_mhdanggb.setValue("N");
};

//---------------------------------------------------------
// 상태별 화면 제어
//---------------------------------------------------------
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      scwin.flag = "INIT";
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_Cancel, btn_Save, btn_Delete, btn_Update, btn_1, btn_3, btn_4, btn_6, btn_8, grbtn_ocHblhList //btn_AddRow1,btn_CancelRow1
      , pu_departmentChange]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_5, btn_7]);
      scwin.f_DisablePopUpObj();

      // 그리드 readOnly : 수정 불가 
      scwin.f_setGridColumnsReadOnly(gr_ocContList, true); // gr_ocContList.Editable  = "false"; 
      gr_ocHblhList.setColumnVisible("chk", false);
      /*
          gr_ocHblhList.ColumnProp("chk", "Show") = "false";
          gr_ocHblhList.ColumnProp("hhblno", "edit") = "none";
          gr_ocHblhList.ColumnProp("hhpkg", "edit") = "none";
          gr_ocHblhList.ColumnProp("hhgwgt", "edit") = "none";
          gr_ocHblhList.ColumnProp("hhmsr", "edit") = "none";
          gr_ocHblhList.ColumnProp("hhbltype", "edit") = "none";
      */
      scwin.f_setGridColumnsReadOnly(gr_ocHblhList, true);
      gr_ocHblhList.setColumnReadOnly("hhbltype", true);
      $c.gus.cfEnableObjects($p, [tbl_search]);
      scwin.statusFlag = "I";
      break;
    case "RETRIEVE":
      //조회모드	
      scwin.flag = "RETRIEVE";
      $c.gus.cfDisableKeyData($p);
      scwin.f_DisablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel, grbtn_ocHblhList // btn_AddRow1,btn_CancelRow1
      ]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Delete, btn_1, btn_3, btn_4, btn_5, btn_6, btn_7, btn_8, pu_departmentChange]);

      // 그리드 readOnly : 수정 불가 
      scwin.f_setGridColumnsReadOnly(gr_ocContList, true);
      scwin.f_setGridColumnsReadOnly(gr_ocHblhList, true);
      gr_ocHblhList.setColumnVisible("chk", false);
      if (scwin.statusFlag === "C") {
        $c.gus.cfDisableBtnOnly($p, [btn_Update]);
      } else {
        $c.gus.cfEnableBtnOnly($p, [btn_Update]);
      }
      // 검색조건 enable
      $c.gus.cfEnableObjects($p, [tbl_search]);
      $c.gus.cfEnableObjects($p, [cnd_ed_mhmblno]); // 조회조건. 
      scwin.statusFlag = "";
      break;
    case "CREATE":
      //신규
      scwin.flag = "CREATE";
      $c.gus.cfEnableKeyData($p);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Delete, btn_1, btn_3, btn_4, btn_6, btn_8, pu_departmentChange]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_5, btn_7, btn_mhvslcd, grbtn_ocHblhList // btn_AddRow1,btn_CancelRow1
      ]);

      // 그리드 편집 가능
      scwin.f_setGridColumnsReadOnly(gr_ocHblhList, false);
      scwin.f_setGridColumnsReadOnly(gr_ocContList, true);
      gr_ocHblhList.setColumnVisible("chk", true);
      gr_ocHblhList.setColumnReadOnly("hhbltype", true);
      /*
          gr_ocHblhList.ColumnProp("chk", "Show") = "true";
          gr_ocHblhList.ColumnProp("chk", "edit") = "true";
          gr_ocHblhList.ColumnProp("hhblno", "edit") = "upper";
          gr_ocHblhList.ColumnProp("hhpkg", "edit") = "none";
          gr_ocHblhList.ColumnProp("hhgwgt", "edit") = "none";
          gr_ocHblhList.ColumnProp("hhmsr", "edit") = "none";
          gr_ocHblhList.ColumnProp("hhbltype", "edit") = "none"; 
      */

      $c.gus.cfDisableObjects($p, [tbl_search]); // 조회조건.  
      $c.gus.cfEnableObjects($p, [cnd_ed_mhmblno]); // 조회조건.        

      scwin.statusFlag = "C";
      break;
    case "UPDATE":
      scwin.flag = "UPDATE";
      $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Create, btn_Delete, btn_1, btn_3, btn_4, btn_6, btn_8]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_5, btn_7, btn_mhvslcd, grbtn_ocHblhList // btn_AddRow1,btn_CancelRow1
      , pu_departmentChange]);
      $c.gus.cfDisableKey($p);
      scwin.f_EnablePopUpObj();

      // 그리드 편집 가능
      gr_ocHblhList.setColumnVisible("chk", true);
      scwin.f_setGridColumnsReadOnly(gr_ocHblhList, false);
      scwin.f_setGridColumnsReadOnly(gr_ocContList, true);
      gr_ocHblhList.setColumnReadOnly("hhbltype", true);
      $c.gus.cfDisableObjects($p, [tbl_search]); // 조회조건.  
      $c.gus.cfEnableObjects($p, [cnd_ed_mhmblno]); // 조회조건.
      ed_mhbuyer.setReadOnly(true);
      img_PopUp3.setDisabled(true);
      scwin.statusFlag = "U";
      break;
    case "SAVE":
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Delete, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Create]);
      scwin.f_Set("RETRIEVE");
      break;
  }
};

//-------------------------------------------------------------------------
// PopUp 이미지 enable/disable
//-------------------------------------------------------------------------
scwin.f_EnablePopUpObj = function () {
  // ed_mhetd, img_Date1 ed_mheta, img_Date2, ed_mhcrdt img_Date3 , ed_mhondt img_Date4
  $c.gus.cfEnableObjects($p, [ed_mhetd, ed_mheta, ed_mhcrdt, ed_mhondt]);
  $c.gus.cfEnableObjects($p, [udc_mhvslcd, btn_mhlinercd, img_PopUp3, btn_mhscd, btn_mhccd, btn_mhncd, btn_mhlodcd, btn_mhactcust, btn_mhdisccd, btn_mhdlvcd, btn_mhitem, btn_mhdlvcd, btn_popMhcnt1type, btn_popMhcnt2type, btn_popMhcnt3type, btn_popMhcnt4type]);
};
scwin.f_DisablePopUpObj = function () {
  $c.gus.cfDisableObjects($p, [ed_mhetd, ed_mheta, ed_mhcrdt, ed_mhondt]);
  $c.gus.cfDisableObjects($p, [btn_mhvslcd, btn_mhlinercd, img_PopUp3, btn_mhscd, btn_mhccd, btn_mhncd, btn_mhlodcd, btn_mhactcust, btn_mhdisccd, btn_mhdlvcd, btn_mhitem, btn_mhdlvcd, btn_popMhcnt1type, btn_popMhcnt2type, btn_popMhcnt3type, btn_popMhcnt4type]);
};

// (추가) 그리드 readonly로 editable 설정하기 
scwin.f_setGridColumnsReadOnly = function (gridObj, readOnly) {
  if (!gridObj) return;
  var cols = gridObj.getColumnIdListMultiRow && gridObj.getColumnIdListMultiRow();
  cols = cols && cols.length > 0 ? cols[0] : null;
  if (!cols) return;
  for (var i = 0; i < cols.length; i++) {
    if (gridObj.setColumnReadOnly) {
      gridObj.setColumnReadOnly(cols[i], !!readOnly);
    }
  }
};

//-------------------------------------------------------------------------
// Contents enable/disable
//-------------------------------------------------------------------------
scwin.f_ContentsDisplay = function () {
  if (scwin.statusFlag == "I" || scwin.statusFlag == "") {
    // 초기화시나 조회때.
    $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
    $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
    $c.gus.cfEnableObj($p, ed_mhvslcd, false);
    $c.gus.cfEnableObj($p, txt_mhvsl, false);
    $c.gus.cfEnableObj($p, ed_mhvyg, false);
  } else if (scwin.statusFlag == "C") {
    $c.gus.cfEnableObj($p, cnd_ed_hhblno, false);
    $c.gus.cfEnableObj($p, cnd_lc_mhno, false);
    $c.gus.cfEnableObj($p, ed_mhvslcd, true);
    $c.gus.cfEnableObj($p, txt_mhvsl, true);
    $c.gus.cfEnableObj($p, ed_mhvyg, true);
  } else if (scwin.statusFlag == "U") {
    $c.gus.cfEnableObj($p, cnd_ed_hhblno, false);
    $c.gus.cfEnableObj($p, cnd_lc_mhno, false);
    $c.gus.cfEnableObj($p, ed_mhvslcd, true);
    $c.gus.cfEnableObj($p, txt_mhvsl, true);
    $c.gus.cfEnableObj($p, ed_mhvyg, true);
  }
};

//---------------------------------------------------------
// 조회
//---------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (cnd_lc_mhno.getValue().trim() == "NONE") {
    // $c.gus.cfAlertMsg(E_MSG_CM_ERR_043, ["Document No"]);  // 유효하지 않는 @ 입니다.\n다시 입력하여주십시요
    $c.win.alert($p, "Document No is not valid. Please input again");
    return;
  }
  cnd_lc_mhno.focus(); // B/L No 빠져나올때 event처리 .

  // ds_retrieve 값 세팅
  ds_retrieve.set("kcomcd", scwin.hd_kcomcd);
  ds_retrieve.set("hhblno", cnd_ed_hhblno.getValue());
  ds_retrieve.set("mhno", cnd_lc_mhno.getValue()); // NONE 	
  ds_retrieve.set("mhio", scwin.hd_mhio);
  $c.sbm.execute($p, sbm_retrieveMhno); // Doc No 로 조회 
};

//---------------------------------------------------------
// Draft BL 조회
//---------------------------------------------------------
scwin.f_RetrieveDraftBl = function () {
  ds_retrieve.set("kcomcd", scwin.hd_kcomcd);
  ds_retrieve.set("mhmblno", cnd_ed_mhmblno.getValue());
  ds_retrieve.set("mhno", "");
  ds_retrieve.set("mhio", scwin.hd_mhio);
  $c.sbm.execute($p, sbm_retrieveDraftBl);
};

//---------------------------------------------------------
// Create 시 조회 (Vessel 로 조회)
//---------------------------------------------------------   
scwin.f_RetrieveVessel = async function () {
  if (scwin.statusFlag == "C") {
    if ($c.util.isEmpty($p, ed_mhvslcd.getValue()) && $c.util.isEmpty($p, txt_mhvsl.getValue()) && $c.util.isEmpty($p, ed_mhvyg.getValue())) {
      ds_ocHblhList.removeAll();
      ds_ocContList.removeAll();
      ds_ocMblhList.removeAll();
      return;
    }
    ds_vessel.setCellData(0, "kcomcd", scwin.hd_kcomcd);
    ds_vessel.setCellData(0, "mhio", scwin.hd_mhio);
    ds_vessel.setCellData(0, "inpid", scwin.userId);
    await $c.sbm.execute($p, sbm_retrieveHouse);
  }
};
//---------------------------------------------------------
// dataset 초기
//---------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [cnd_ed_hhblno, cnd_ed_mhmblno]);
  ds_hmhno.removeAll();
};

//---------------------------------------------------------
// dataset 초기
//---------------------------------------------------------
scwin.f_dataSetClear = function () {
  ds_vessel.removeAll();
  ds_ocHblhList.removeAll();
  ds_ocContList.removeAll();
  ds_ocMblhList.removeAll();
  ds_slipTax.removeAll();
  ds_ocProfitList.removeAll();
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  scwin.f_FieldClear();
  ed_mhvslcd.setValue('');
  txt_mhvsl.setValue('');
  ed_mhvyg.setValue('');
  txt_totalOcContList.setValue(0);
  txt_totalOcHblhList.setValue(0);
  txt_totalOcProfitList.setValue(0);
  txt_totalOcExpHList.setValue(0);

  // dataset초기화		
  scwin.f_dataSetClear();
  ds_vessel.insertRow(0);
  ds_vessel.setRowPosition(0);
  ds_ocMblhList.insertRow(0);
  ds_ocMblhList.setRowPosition(0);
  rd_mhdanggb.setSelectedIndex(1);
  scwin.f_Set("CREATE");
  scwin.f_ContentsDisplay(); // 조건 display
  rd_mhdanggb.setValue("N");
  ed_mhvslcd.focus();
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = async function () {
  if ($c.util.isEmpty($p, ed_mhetd.getValue())) {
    // 등록 화면에 필수인 ETD를 기준으로 잡았음.
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003); //  해당되는 자료가 존재하지 않습니다
    return;
  } else if (cnd_lc_mhno.getValue() == "NONE") {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Master B/L Information"]); //  @이(가) 존재하지 않습니다.
    return;
  }
  scwin.f_Set("UPDATE");
  scwin.f_ContentsDisplay(); // 조건 display	
  // invoice check
  await scwin.f_invoiceCheck(); // invoice Check
  if (scwin.invoiceCheck == "1") {
    $c.gus.cfDisableObjects($p, [txt_mhbuyernm, img_PopUp3]);
    ed_mhbuyer.setReadOnly(true);
  } else {
    $c.gus.cfEnableObjects($p, [txt_mhbuyernm, img_PopUp3]);
    ed_mhbuyer.setReadOnly(false);
  }
  // ed_mhvslcd.focus();
};

//---------------------------------------------------------
// 저장
// 1. DOCUMENT NO를 NUMBERING 하여 가져온다.
//---------------------------------------------------------
scwin.f_Save = async function () {
  var hasUpdate = ds_ocHblhList.getModifiedData().length > 0 || ds_ocMblhList.getModifiedData().length > 0;
  if (!hasUpdate) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_001, ["House B/L"]);
    return;
  }
  if (!(await scwin.f_validate())) {
    return;
  }
  if (!(await $c.win.confirm($p, "Do you wish to save?"))) {
    //저장하시겠습니까?
    return;
  }
  if (scwin.statusFlag === "C") {
    // master b/l 확인.
    if (!$c.util.isEmpty($p, cnd_ed_mhmblno.getValue())) {
      ds_retrieve2.set("hhmblno", cnd_ed_mhmblno.getValue());
      await $c.sbm.execute($p, sbm_checkMasterBl);
      if (ds_checkMasterBl.getCellData(0, "chk") == "F") {
        $c.win.alert($p, "Master B/L [" + cnd_ed_mhmblno.getValue() + "]에 해당하는 Direct B/L이 이미 존재합니다.");
        return false;
      }
    }
    scwin._comboTarget = "MASTER_BL_NO";
    await scwin.f_commCode("SeaExportMasterEBC", "retriveMasterBlListCombo", scwin.hd_kcomcd, cnd_ed_mhmblno.getValue());
    if (ds_cndmhmblno.getRowCount() > 0) {
      await $c.win.alert($p, "이미 존재하는 Master B/L No 입니다.");
      return false;
    }

    // MHNO NO 를 생성및 가져온다. 
    ds_retrieve.set("mhetd", ed_mhetd.getValue());
    ds_retrieve.set("hhblno", "");
    await $c.sbm.execute($p, sbm_createMhno);

    //mhno 넣어 주기.	
    ds_hmhno.removeAll();
    ds_hmhno.insertRow(0);
    ds_hmhno.setCellData(0, "code", ds_retrieveNo.getCellData(0, "mhno"));
    ds_hmhno.setCellData(0, "name", ds_retrieveNo.getCellData(0, "mhno"));
    cnd_lc_mhno.setSelectedIndex(0);

    //House B/L 정보 
    // House B/L 정보
    const mhno = ds_retrieveNo.getCellData(0, "mhno");
    for (let i = 0; i < ds_ocHblhList.getRowCount(); i++) {
      const vChkYn = ds_ocHblhList.getCellData(i, "chk");
      ds_ocHblhList.setCellData(i, "mhno", mhno);
      ds_ocHblhList.setCellData(i, "hhmblno", cnd_ed_mhmblno.getValue());
      ds_ocHblhList.setCellData(i, "chk", vChkYn);
      ds_ocHblhList.setCellData(i, "inpid", scwin.userId);

      // insert 상태로 변경
      ds_ocHblhList.modifyRowStatus(i, "C"); // insert 로 변경.
    }
    const r = ds_ocMblhList.getRowPosition();
    ds_ocMblhList.setCellData(r, "kcomcd", scwin.hd_kcomcd);
    ds_ocMblhList.setCellData(r, "mhio", scwin.hd_mhio);
    ds_ocMblhList.setCellData(r, "mhno", mhno);
    ds_ocMblhList.modifyRowStatus(r, "C");
  } else if (scwin.statusFlag === "U") {
    const mhno = cnd_lc_mhno.getValue(); // 선택된 code 값

    for (let i = 0; i < ds_ocHblhList.getRowCount(); i++) {
      const vChkYn = ds_ocHblhList.getCellData(i, "chk");
      ds_ocHblhList.setCellData(i, "mhno", mhno);
      ds_ocHblhList.setCellData(i, "hhmblno", cnd_ed_mhmblno.getValue());
      ds_ocHblhList.setCellData(i, "chk", vChkYn);
      ds_ocHblhList.setCellData(i, "inpid", scwin.userId);
    }
  }
  await $c.sbm.execute($p, sbm_save);
  // scwin.f_Retrieve();    		
  // scwin.f_Set("SAVE");	
  // scwin.f_ContentsDisplay();// 조건 display	
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_cancelRow = function () {
  ds_ocHblhList.undoAll();
  for (var i = ds_ocHblhList.getTotalRow() - 1; i >= 0; i--) {
    if (ds_ocHblhList.getRowStatus(i) == "C") {
      ds_ocHblhList.removeRow(i);
    }
  }
  scwin.f_MasterSum();
  scwin.f_masterHouseBlList();
};
scwin.f_Cancel = function () {
  if (scwin.statusFlag === "C") {
    scwin.f_Set("INIT");
  } else {
    scwin.f_Set("RETRIEVE");
    // ds_vessel.undoAll();
    scwin.f_cancelRow(1);
    for (var i = 0; i < ds_ocHblhList.getTotalRow(); i++) {
      if (ds_ocHblhList.getRowStatus(i) != "R") ds_ocHblhList.removeRow(i);
    }
    ds_ocContList.undoAll();
    ds_ocMblhList.undoAll();
  }
  scwin.f_ContentsDisplay();
  cnd_ed_hhblno.focus();
};

//---------------------------------------------------------
// 삭제
//---------------------------------------------------------  
scwin.f_Delete = async function () {
  if (cnd_lc_mhno.getValue() == "NONE") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
    return;
  }
  await scwin.f_invoiceCheck();
  if (scwin.invoiceCheck == "1") {
    // await $c.gus.cfAlertMsg(E_MSG_CM_ERR_041, ["Invoice No", "delete"]);
    $c.win.alert($p, scwin.E_MSG_CM_ERR_041);
    return;
  }

  // MRN 있을 경우 MRN내역부터 삭제. 
  if (!$c.util.isEmpty($p, ed_mhmrnno.getValue())) {
    await $c.win.alert($p, "MRN Information alreay exists.</br>First Delete MRN Information.");
    return;
  }
  if (!(await $c.win.confirm($p, E_MSG_CM_CRM_004))) {
    return;
  }
  ds_retrieve.set("odrNo", ds_ocMblhList.getCellData(0, "odrNo"));
  ds_retrieve.set("shipMgntNo", ds_ocMblhList.getCellData(0, "shipMgntNo"));
  // ds_ocHblhList.set(i, "inpid", scwin.userId);
  $c.sbm.execute($p, sbm_delete);
};

//---------------------------------------------------------
//행추가
//--------------------------------------------------------- 
scwin.f_addRow = function (disGubun) {
  disGubun = 1;
  switch (disGubun) {
    case 1:
      // ds_vessel의 hhvslcd, hhvsl, hhvyg 체크
      // if (ds_vessel.getCellData(0, "hhvslcd") == "" && ds_vessel.getCellData(0, "hhvsl") == "" && ds_vessel.getCellData(0, "hhvyg") == "") {
      //     $c.gus.cfAlertMsg(E_MSG_CM_ERR_003); //  해당되는 자료가 존재하지 않습니다
      // } else {
      var r = ds_ocHblhList.insertRow(ds_ocHblhList.getRowCount());
      ds_ocHblhList.setCellData(r, "kcomcd", scwin.hd_kcomcd);
      ds_ocHblhList.setCellData(r, "hhio", scwin.hd_mhio);
      ds_ocHblhList.setCellData(r, "chk", "T");
      // }
      break;
  }
};

//---------------------------------------------------------
// function name : f_validate
// function desc : 
//---------------------------------------------------------
scwin.f_validate = async function () {
  if (!$c.gus.cfValidate($p, [ed_mhetd, ed_mheta, ed_mheta])) {
    //validExp 가 yes일때 check
    return false;
  }
  var etd = ed_mhetd.getValue();
  var eta = ed_mheta.getValue();
  if ($c.util.isEmpty($p, etd)) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["ETD"]);
    return false;
  }
  if (!$c.util.isEmpty($p, eta)) {
    if (etd > eta) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_048, ["ETD", "ETA"]); //@은(는) 보다 작아야 합니다
      ed_mhetd.focus();
      return false;
    }
  }

  //ETD-ETA가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없다.
  if ($c.gus.cfMonthsBetween($p, scwin.strCurDate.toDate(), etd.toDate()) > 3) {
    await $c.win.alert($p, "ETD가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없습니다.");
    ed_mhetd.focus();
    return false;
  }

  //ETD-ETA가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없다.
  if (eta !== "" && $c.gus.cfMonthsBetween($p, scwin.strCurDate.toDate(), eta.toDate()) > 3) {
    await $c.win.alert($p, "ETA가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없습니다.");
    ed_mheta.focus();
    return false;
  }

  //ETD-ETA가 3년 이상의 과거 일 수 없다.
  if ($c.gus.cfYearsBetween($p, etd.toDate(), scwin.strCurDate.toDate()) > 3) {
    await $c.win.alert($p, "ETD가 3년 이상의 과거 일 수 없습니다.");
    ed_mhetd.focus();
    return false;
  }

  //ETD-ETA가 3년 이상의 과거 일 수 없다.
  if (eta !== "" && $c.gus.cfYearsBetween($p, eta.toDate(), scwin.strCurDate.toDate()) > 3) {
    await $c.win.alert($p, "ETA가 3년 이상의 과거 일 수 없습니다.");
    ed_mheta.focus();
    return false;
  }

  //ETA-ETD(transit time)가 150일을 초과할 수 없다.  *150일(총 운항DATE 수) : ETA날짜에서 ETD날짜를 빼고 +1 한 날짜 
  if (eta !== "" && WebSquare.date.dateDiff(etd, eta) > 149) {
    await $c.win.alert($p, "ETA-ETD(transit time)가 150일을 초과할 수 없습니다.");
    ed_mhetd.focus();
    return false;
  }
  if ($c.util.isEmpty($p, ed_mhbuyer.getValue())) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Department"]);
    // scwin.cfViewTab(0);
    ed_mhbuyer.focus();
    return false;
  }
  if ($c.util.isEmpty($p, ed_mhitem.getValue())) {
    // item
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Item"]);
    ed_mhitem.focus();
    return false;
  }
  return true;
};

//---------------------------------------------------------
// 공통팝업 열기
//--------------------------------------------------------- 
scwin.f_PopUp = function (disGubun, chgGubun) {
  // 공통 popup 호출
  const openClntPopup = opts => {
    let udc = opts.comp;
    udc.setSelectId("retrieveEngClntInfo");
    udc.ilCommonPopUp(opts.onReturn, opts.code, opts.name, chgGubun, "10", opts.titles, "140,300,100,100,100,100,100,,,100", "8,9", null, "500", "500", null, null, null, "F", opts.winTitle);
  };
  const commonTitles = {
    Liner: "Liner Code,Liner Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
    Shipper: "Shipper Code,Shipper Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
    Consignee: "Consignee Code,Consignee Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
    Notify: "Notify Code,Notify Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
    Customer: "Customer Code,Customer Name,Address1,Address2,Address3,Address4,Tel,,,CRN"
  };
  const cfg = {
    Liner: {
      comp: () => udc_mhlinercd,
      code: () => (ed_mhlinercd.getValue() || "").trim(),
      name: () => txt_mhlinernm.getValue(),
      titles: commonTitles.Liner,
      winTitle: "Liner search,Liner Code,Liner Name",
      onReturn: ret => {
        $c.gus.cfSetReturnValue($p, ret, ed_mhlinercd, txt_mhlinernm);
        if ((ret?.[6] || "").trim() !== "N/A") {
          ed_mhediliner.setValue(ret[8]);
        }
      }
    },
    Shipper: {
      comp: () => udc_mhscd,
      code: () => (ed_mhscd.getValue() || "").trim(),
      name: () => txt_mhsnm.getValue(),
      titles: commonTitles.Shipper,
      winTitle: "Shipper search,Shipper Code,Shipper Name",
      onReturn: ret => $c.gus.cfSetReturnValue($p, ret, ed_mhscd, txt_mhsnm)
    },
    Consignee: {
      comp: () => udc_mhccd,
      code: () => (ed_mhccd.getValue() || "").trim(),
      name: () => txt_mhcnm.getValue(),
      titles: commonTitles.Consignee,
      winTitle: "Consignee search,Consignee Code,Consignee Name",
      onReturn: ret => {
        $c.gus.cfSetReturnValue($p, ret, ed_mhccd, txt_mhcnm);
        if (!$c.util.isEmpty($p, ed_mhccd.getValue()) && scwin.statusFlag === "C") {
          ed_mhncd.setValue(ed_mhccd.getValue());
          txt_mhnnm.setValue(txt_mhcnm.getValue());
        }
      }
    },
    Notify: {
      comp: () => udc_mhncd,
      code: () => (ed_mhncd.getValue() || "").trim(),
      name: () => txt_mhnnm.getValue(),
      titles: commonTitles.Notify,
      winTitle: "Notify search,Notify Code,Notify Name",
      onReturn: ret => $c.gus.cfSetReturnValue($p, ret, ed_mhncd, txt_mhnnm)
    },
    Customer: {
      comp: () => udc_mhactcust,
      code: () => (ed_mhactcust.getValue() || "").trim(),
      name: () => txt_mhactcustnm.getValue(),
      titles: commonTitles.Customer,
      winTitle: "Customer search,Customer Code,Customer Name",
      onReturn: ret => $c.gus.cfSetReturnValue($p, ret, ed_mhactcust, txt_mhactcustnm)
    }
  };
  const c = cfg[disGubun];
  if (!c) return;
  openClntPopup({
    comp: c.comp(),
    code: c.code(),
    name: c.name(),
    titles: c.titles,
    winTitle: c.winTitle,
    onReturn: c.onReturn
  });
};
//---------------------------------------------------------
// 공통팝업 열기
//---------------------------------------------------------  
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  const openPop = opts => {
    udc_ilcomCode.setSelectId(opts.selectId);
    udc_ilcomCode.ilCommonPopUp(opts.setReturn, opts.code, opts.name, pWinCloseTF, opts.colCount, opts.titles, opts.widths, opts.hiddenCols, opts.whereParam || null, opts.winW || null, opts.winH || null, null, null, null, pAllSearchTF, opts.winTitle, pNoDataCloseTF);
  };
  const portCfg = (titlePrefix, codeComp, nameComp) => ({
    selectId: "retrievePortInfo",
    code: (codeComp.getValue() || "").trim(),
    name: nameComp.getValue(),
    colCount: "6",
    titles: "Code, Name,,,, UNCODE",
    widths: "80,160,,,,80",
    hiddenCols: "3,4,5,7,8,9,10",
    winTitle: `${titlePrefix},Code,Name`,
    setReturn: rtn => $c.gus.cfSetReturnValue($p, rtn, codeComp, nameComp)
  });
  const ctCfg = codeComp => ({
    selectId: "retriveContainerTypeCodeInfo",
    code: (codeComp.getValue() || "").trim(),
    name: "",
    colCount: "2",
    titles: "Code, Name",
    widths: "80,230",
    hiddenCols: "3,4,5,6,7,8,9,10",
    winTitle: "Type,Code,Name",
    setReturn: rtn => $c.gus.cfSetReturnValue($p, rtn, codeComp, "")
  });
  const cfg = {
    Vessel: {
      selectId: "retrieveOrdVsslInfo",
      code: (ed_mhvslcd.getValue() || "").trim(),
      name: txt_mhvsl.getValue(),
      colCount: "2",
      titles: "Code, Name",
      widths: "80,230",
      hiddenCols: "3,4,5,6,7,8,9,10",
      winTitle: "Vessel,Code,Name",
      setReturn: rtn => {
        $c.gus.cfSetReturnValue($p, rtn, ed_mhvslcd, txt_mhvsl);
      }
    },
    DEPT: {
      selectId: "retrieveOpDeptCdInfo",
      code: (ed_mhbuyer.getValue() || "").trim(),
      name: txt_mhbuyernm.getValue(),
      colCount: "2",
      titles: "Code, Name",
      widths: "80,230",
      hiddenCols: "3,4,5,6,7,8,9,10",
      winTitle: "DEPT,Code,Name",
      setReturn: rtn => $c.gus.cfSetReturnValue($p, rtn, ed_mhbuyer, txt_mhbuyernm)
    },
    Loading: portCfg("Loading", ed_mhlodcd, txt_mhlodnm),
    Discharge: portCfg("Discharge", ed_mhdisccd, txt_mhdiscnm),
    Delivery: portCfg("Delivery", ed_mhdlvcd, txt_mhdlvnm),
    Area: portCfg("Area", ed_mharea, txt_mhareanm),
    Item: {
      selectId: "retrieveCommGoodsInfo",
      code: (ed_mhitem.getValue() || "").trim(),
      name: txt_mhitemNm.getValue(),
      colCount: "2",
      titles: "Code, Name",
      widths: "80,230",
      hiddenCols: "3,4,5,6,7,8,9,10",
      winTitle: "Item,Code,Name",
      setReturn: rtn => $c.gus.cfSetReturnValue($p, rtn, ed_mhitem, txt_mhitemNm)
    },
    ContainerType1: ctCfg(ed_mhcnt1type),
    ContainerType2: ctCfg(ed_mhcnt2type),
    ContainerType3: ctCfg(ed_mhcnt3type),
    ContainerType4: ctCfg(ed_mhcnt4type)
  };
  const c = cfg[gubun1];
  if (!c) return;
  openPop(c);
};
scwin.f_OpenCommonPopUp3 = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  udc_mhvslcd.setSelectId("retrieveOrdVsslInfo");
  udc_mhvslcd.ilCommonPopUp(scwin.udc_mhvslcd_callbackFunc, ed_mhvslcd.getValue(), txt_mhvsl.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Vessel,Code,Name", pNoDataCloseTF);
};
scwin.udc_mhvslcd_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_mhvslcd, txt_mhvsl);
};
//-------------------------------------------------------------------------
// 화면이동
//-------------------------------------------------------------------------
scwin.f_openPgm = function (name) {
  const kcomcd = scwin.hd_kcomcd;
  const mhio = scwin.hd_mhio;
  const mhno = cnd_lc_mhno.getValue();
  const mblno = cnd_ed_mhmblno.getValue();
  const hblno = cnd_ed_hhblno.getValue();
  if (name === "Partner") {
    $c.win.openMenu($p, "Partner Invoice", "/ui/il/acc/acpar/ac_104_01_01b.xml", "ac_104_01_01b.jsp", {
      "kcomcd": kcomcd,
      "seaair": "S",
      "iogb": mhio,
      "blno": "",
      "mblno": mblno,
      "mhno": mhno
    });
  } else if (name === "Profit") {
    $c.win.openMenu($p, "Booking Sheet", "/ui/il/pfm/pfbs/pe_101_01_01b.xml", "pe_101_01_01b.jsp", {
      "kcomcd": kcomcd,
      "seaair": "S",
      "iogb": mhio,
      "blno": hblno,
      "mblno": "",
      "mhno": mhno
    });
  } else if (name === "paymentINV") {
    $c.win.openMenu($p, "Payment Invoice", "/ui/il/acc/acpay/ac_106_01_01b.xml", "ac_106_01_01b.jsp", {
      "kcomcd": kcomcd,
      "seaair": "S",
      "iogb": mhio,
      "blno": "",
      "mblno": mblno,
      "mhno": mhno
    });
  } else if (name === "MasterFreight") {
    $c.win.openMenu($p, "Export Master B/L Freight", "/ui/il/seaout/sobl/se_106_01_03b.xml", "se_106_01_03b.jsp", {
      "linkcheck": "6",
      "kcomcd": kcomcd,
      "blno": hblno,
      "mhno": mhno
    });
  } else if (name === "HouseBLFind") {
    $c.win.openMenu($p, "House B/L Search", "/ui/il/seaout/sobl/se_105_01_02b.xml", "se_105_01_02b.jsp", {
      "hhio": mhio
    });
  } else if (name === "SRPrint") {
    $c.win.openMenu($p, "Shipping Request", "/ui/il/seaout/soth/se_109_01_01b.xml", "se_109_01_01b.jsp", {
      "kcomcd": kcomcd,
      "blno": hblno,
      "mhno": mhno
    });
  } else if (name === "MasterBLFind") {
    $c.win.openMenu($p, "Master B/L Search", "/ui/il/seaout/sobl/se_106_01_02b.xml", "se_106_01_02b.jsp", {
      "mhio": mhio
    });
  }
};

//-------------------------------------------------------------------------
//MHNO 가져오기
// HOUSE NO에서 TAB KILL EVENT시 DOCUMENT NO를 가져온다. B/L 전 화면에 있다.
//------------------------------------------------------------------------- 
scwin.f_MhnoLoading = async function () {
  if (!$c.util.isEmpty($p, cnd_ed_hhblno.getValue())) {
    // "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaHouseMhnoListCombo&param1=" + param1;
    scwin._comboTarget = "HMHNO";
    await scwin.f_commCode("ilCommonEBC", "retriveSeaHouseMhnoListCombo", cnd_ed_hhblno.getValue());
  } else {
    // cnd_lc_mhno.CBData = "";
    ds_hmhno.removeAll();
    cnd_lc_mhno.setSelectedIndex(0);
  }
};

//-------------------------------------------------------------------------
//Master 금액 계산
// 왼쪽 그리드의 선택된 금액들의 합을 실시간으로 오른쪽의 MASTER B/L HEADER에 보여준다.
//------------------------------------------------------------------------- 	
scwin.f_MasterSum = function () {
  var hhpkg = 0,
    hhgwgt = 0,
    hhmsr = 0;
  var rowCnt = ds_ocHblhList.getRowCount();
  for (var i = 0; i < rowCnt; i++) {
    var vChkYn = ds_ocHblhList.getCellData(i, "chk");
    if (vChkYn === "T") {
      hhpkg += Number(ds_ocHblhList.getCellData(i, "hhpkg"));
      hhgwgt += Number(ds_ocHblhList.getCellData(i, "hhgwgt"));
      hhmsr += Number(ds_ocHblhList.getCellData(i, "hhmsr"));
    }
  }
  hhpkg = hhpkg == 0 ? "" : hhpkg;
  hhgwgt = hhgwgt == 0 ? "" : hhgwgt;
  hhmsr = hhmsr == 0 ? "" : hhmsr;
  ed_mhpkg.setValue(hhpkg);
  ed_mhwgt.setValue(hhgwgt);
  ed_mhmsr.setValue(hhmsr);
};

//-------------------------------------------------------------------------
//Master 금액 계산
//------------------------------------------------------------------------- 	
scwin.f_masterHouseBlList = async function () {
  var rowCnt = ds_ocHblhList.getRowCount();
  var v_hhblno = "";
  for (var i = 0; i < rowCnt; i++) {
    if (ds_ocHblhList.getCellData(i, "chk") === "T") {
      v_hhblno += ds_ocHblhList.getCellData(i, "hhblno") + "','";
    }
  }
  if (v_hhblno.length > 3) {
    v_hhblno = v_hhblno.substring(0, v_hhblno.length - 3);
  }

  // "/cm.zz.RetrieveComboCMD.do?sysCd=SeaExportMasterEBC&queryId=retrivematerHouseBlList&param1=" + param1 + "&param2=" + param2
  scwin._comboTarget = "MASTER_HOUSE_BL_LIST";
  await scwin.f_commCode("SeaExportMasterEBC", "retrivematerHouseBlList", scwin.hd_kcomcd, v_hhblno);
  if (ds_masterHouseBlList.getRowCount() === 0) {
    ed_mhcnt1type.setValue("");
    ed_mhcnt2type.setValue("");
    ed_mhcnt3type.setValue("");
    ed_mhcnt4type.setValue("");
    ed_mhcnt1.setValue(0);
    ed_mhcnt2.setValue(0);
    ed_mhcnt3.setValue(0);
    ed_mhcnt4.setValue(0);
  } else {
    const v_result = ds_masterHouseBlList.getCellData(0, "name");
    const arry = v_result.split("|");
    ed_mhcnt1type.setValue(arry[0]);
    ed_mhcnt2type.setValue(arry[1]);
    ed_mhcnt3type.setValue(arry[2]);
    ed_mhcnt4type.setValue(arry[3]);
    ed_mhcnt1.setValue(arry[4]);
    ed_mhcnt2.setValue(arry[5]);
    ed_mhcnt3.setValue(arry[6]);
    ed_mhcnt4.setValue(arry[7]);
  }
};

//-------------------------------------------------------------------------
//INVOICE NO 유무
//ON LOAD시 실행됨. 삭제나 저장시 INVOICE의 유무에 따라  삭제가 안됨.
//------------------------------------------------------------------------- 
scwin.f_invoiceCheck = async function () {
  scwin.invoiceCheck = "0";

  // "/cm.zz.RetrieveComboCMD.do?sysCd=SeaExportHouseEBC&queryId=retriveInvoiceCheckCombo&param1=" + param1;
  scwin._comboTarget = "INVOICE_CHECK";
  await scwin.f_commCode("SeaExportHouseEBC", "retriveInvoiceCheckCombo", ed_odrNo.getValue());
  if (ds_invoiceCheck.getRowCount() != 0 && ds_invoiceCheck.getCellData(0, "code") != "0") {
    scwin.invoiceCheck = "1";
  }
};

//-------------------------------------------------------------------------
//Department  가져오기
//------------------------------------------------------------------------- 
scwin.f_departmentInfo = async function () {
  // "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveDepartmentCodeList&param1=" + "C" + "&param2=" + ed_hhactcust.Text;   
  scwin._comboTarget = "DEPT_INFO";
  await scwin.f_commCode("ilCommonEBC", "retriveDepartmentCodeList", "C", ed_hhactcust.getValue());
  if (ds_departmentInfo.getRowCount() == 0) {
    ed_mhbuyer.setValue("");
    txt_mhbuyernm.setValue("");
  } else {
    ed_mhbuyer.setValue(ds_departmentInfo.getCellData(0, "CODE"));
    txt_mhbuyernm.setValue(ds_departmentInfo.getCellData(0, "NAME"));
  }
};

//-------------------------------------------------------------------------
// cnd_ed_hhblno 가져오기
//------------------------------------------------------------------------- 
scwin.f_CndMhmblnoLoading = async function () {
  // "/cm.zz.RetrieveComboCMD.do?sysCd=SeaExportMasterEBC&queryId=retriveMasterBlListCombo&param1=" + param1 + "&param2=" + param2 ;
  scwin._comboTarget = "MASTER_BL_NO";
  await scwin.f_commCode("SeaExportMasterEBC", "retriveMasterBlListCombo", scwin.hd_kcomcd, cnd_ed_mhmblno.getValue());
};

//-------------------------------------------------------------------------
//부서  Change
// INVOICE가 있어도 부서변경가능 요구에 따라 버튼으로 활성화 시킴.	
//------------------------------------------------------------------------- 	
scwin.f_departmentChange = async function () {
  if ($c.util.isEmpty($p, ed_mhbuyer.getValue())) {
    return;
  }
  let opts = {
    id: "ilCommonDeptChange",
    popupName: "Department Change",
    modal: true,
    type: "browserPopup",
    width: 460,
    height: 280,
    title: "부서"
  };
  const rtnList = await $c.win.openPopup($p, "/ui/il/common/xml/ilCommonDeptChange.xml", opts, {
    pdept: ed_mhbuyer.getValue(),
    pdeptnm: txt_mhbuyernm.getValue()
  });
  if (!rtnList || rtnList.length < 3) return;
  if (rtnList[0] !== "N/A") return;
  if ($c.util.isEmpty($p, String(rtnList[1]).trim()) || $c.util.isEmpty($p, String(rtnList[2]).trim())) return;
  if (!(await $c.win.confirm($p, E_MSG_CM_CRM_001))) return; // 저장하시겠습니까?

  // 파라미터 DS 세팅
  ds_DeptChangeParam.removeAll();
  const r = ds_DeptChangeParam.insertRow(0);
  ds_DeptChangeParam.setCellData(r, "modrNo", ds_ocMblhList.getCellData(0, "odrNo")); // Order No
  ds_DeptChangeParam.setCellData(r, "hodrNo", "");
  ds_DeptChangeParam.setCellData(r, "kcomcd", scwin.hd_kcomcd); // 법인코드
  ds_DeptChangeParam.setCellData(r, "bulkGb", "");
  ds_DeptChangeParam.setCellData(r, "dept", String(rtnList[1]).trim()); // 변경할 부서 코드 
  ds_DeptChangeParam.setCellData(r, "deptnm", String(rtnList[2]).trim()); // 변경할 부서  명

  // submit 실행 (sbm_DeptChange 기준)
  await $c.sbm.execute($p, sbm_DeptChange);
  const spRtn = ds_DeptChangeResult.getCellData(0, "spRtn");
  // const spMsg = ds_DeptChangeResult.getCellData(0, "spMsg");

  if (spRtn == "0") {
    //변경 성공 
    txt_mhbuyernm.setValue(String(rtnList[2]).trim());
    ed_mhbuyer.setValue(String(rtnList[1]).trim());
    await $c.gus.cfAlertMsg($p, MSG_LO_WRN_009);
  } else {
    // 필요하면 spMsg 표시
    await $c.gus.cfAlertMsg($p, MSG_LO_WRN_008);
  }
};

//-------------------------------------------------------------------------
//vsl trim
//------------------------------------------------------------------------- 
scwin.f_trimVsl = function () {
  txt_mhvsl.setValue(txt_mhvsl.getValue().trim());
};

// 공통 코드조회 (param1~4)
// - sysCd 생략 시 "ilCommonEBC" 기본
scwin.f_commCode = async function (sysCd, queryId, param1, param2, param3, param4) {
  // sysCd 생략 호출 허용: f_commCode("queryId", p1, p2 ...)
  if (queryId == undefined) {
    queryId = sysCd;
    sysCd = "ilCommonEBC";
    param1 = param1;
    param2 = param2;
    param3 = param3;
    param4 = param4;
  }
  var params = {
    sysCd: sysCd || "ilCommonEBC",
    queryId: queryId || "",
    param1: param1 == undefined ? "" : param1,
    param2: param2 == undefined ? "" : param2,
    param3: param3 == undefined ? "" : param3,
    param4: param4 == undefined ? "" : param4
  };
  dma_combo.setJSON(params);
  let e = await $c.sbm.execute($p, sbm_combo);
  scwin.sbm_combo_onsubmitdone(e);
};

// dept 
scwin.f_OpenCommonPopUp2 = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  udc_mhactcust.setSelectId("retrieveOpDeptCdInfo");
  udc_mhactcust.ilCommonPopUp(scwin.dept_callbackFunc, ed_mhbuyer.getValue(), txt_mhbuyernm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "DEPT,Code,Name", pNoDataCloseTF);
  //if(typeof(rtnList) != "undefined"){			      	
};
scwin.dept_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_mhbuyer, txt_mhbuyernm);
};
//---------------------------------------------------------------------
// submission 콜백
//---------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_vessel.getRowCount() === 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
    scwin.f_dataSetClear();
    $c.gus.cfInitObjects($p, [tb_masterColumn]);
    scwin.f_Set("INIT");
  } else {
    ds_vessel.setRowPosition(0);
    scwin.f_Set("RETRIEVE");
  }
  scwin.loaded = 1;
};
// 조회 
scwin.sbm_retrieveMhno_submitdone = async function (e) {
  txt_totalOcContList.setValue(ds_ocContList.getRowCount());
  txt_totalOcHblhList.setValue(ds_ocHblhList.getRowCount());
  txt_totalOcProfitList.setValue(ds_ocProfitList.getRowCount());
  txt_totalOcExpHList.setValue(ds_slipTax.getRowCount());
  gr_ocHblhList.setFocusedCell(0, 1);
  gr_ocContList.setFocusedCell(0, 0);
  gr_ocProfitList.setFocusedCell(0, 0);
  gr_ocExpHList.setFocusedCell(0, 0);
  if (ds_ocMblhList.getRowCount() === 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
    scwin.f_dataSetClear();
    $c.gus.cfInitObjects($p, [tb_masterColumn]);
    scwin.f_Set("INIT");
  } else {
    ds_ocMblhList.setRowPosition(0); // 데이터 선택 
    await scwin.f_invoiceCheck();
    scwin.f_Set("RETRIEVE");
  }
};
scwin.sbm_retrieveHouse_submitdone = async function (e) {
  txt_totalOcHblhList.setValue(ds_ocHblhList.getRowCount());
  if (ds_ocHblhList.getRowCount() === 0 && ds_vessel.getRowCount() !== 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
  }
  if (ds_ocHblhList.getRowCount() != 0) {
    ds_ocHblhList.setRowPosition(0);
  }
  ed_mhvslcd.focus();
};
// 저장 후 
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_001);
  scwin.f_Retrieve();
  scwin.f_Set("SAVE");
  scwin.f_ContentsDisplay();
};
// 삭제 후 
scwin.sbm_delete_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_004);
  scwin.f_FieldClear();
  ed_mhvslcd.setValue('');
  txt_mhvsl.setValue('');
  ed_mhvyg.setValue('');

  // dataset초기화		
  scwin.f_dataSetClear();
  $c.gus.cfInitObjects($p, [tb_masterColumn]);
  scwin.f_Set("INIT");
  scwin.f_ContentsDisplay(); // 조건 display	
  cnd_ed_hhblno.focus();
};

//---------------------------------------------------------------------
// 콤보 데이터 
//---------------------------------------------------------------------
scwin.sbm_combo_onsubmitdone = function (e) {
  if (scwin._comboTarget === "HMHNO") {
    ds_hmhno.setJSON(e.responseJSON.GAUCE);
    scwin._comboTarget = "";
    return;
  } else if (scwin._comboTarget === "MASTER_BL_NO") {
    // Master B/L No 
    ds_cndmhmblno.setJSON(e.responseJSON.GAUCE);
    scwin._comboTarget = "";
    ds_hmhno.removeAll();
    if (ds_cndmhmblno.getRowCount() === 0) {
      ds_hmhno.insertRow(0);
      ds_hmhno.setCellData(0, "code", "NONE");
      ds_hmhno.setCellData(0, "name", "NONE");
    } else {
      for (var i = 0; i < ds_cndmhmblno.getRowCount(); i++) {
        ds_hmhno.insertRow(i);
        ds_hmhno.setCellData(i, "code", ds_cndmhmblno.getCellData(i, "code"));
        ds_hmhno.setCellData(i, "name", ds_cndmhmblno.getCellData(i, "name"));
      }
    }
    cnd_lc_mhno.setSelectedIndex(0);
    return;
  } else if (scwin._comboTarget === "MASTER_HOUSE_BL_LIST") {
    ds_masterHouseBlList.setJSON(e.responseJSON.GAUCE);
    scwin._comboTarget = "";
    return;
  } else if (scwin._comboTarget === "INVOICE_CHECK") {
    ds_invoiceCheck.setJSON(e.responseJSON.GAUCE);
    scwin._comboTarget = "";
    return;
  } else if (scwin._comboTarget === "DEPT_INFO") {
    ds_departmentInfo.setJSON(e.responseJSON.GAUCE);
    scwin._comboTarget = "";
    return;
  }
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_RunExcel1 = async function (varGrNm) {
  if (gr_ocHblhList.getTotalRow() == 0) {
    $c.win.alert($p, "조회결과가 존재하지 않습니다.");
    return;
  }
  cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (!cfrm) return;
  filename = "House B/L";
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 2,
    colSpan: 5,
    text: filename,
    textAlign: "center"
    // , fontSize    : "12pt"
    ,
    fontName: "돋움체",
    color: "black",
    fontWeight: "",
    drawBorder: "false",
    borderColor: "",
    borderWidth: "",
    wordWrap: "true",
    bgColor: "#ffffff"
  }];
  const options = {
    fileName: filename + ".xls" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: filename,
    startRowIndex: 2
  };
  $c.data.downloadGridViewExcel($p, gr_ocHblhList, options, infoArr);
};
scwin.f_RunExcel2 = async function (varGrNm) {
  if (gr_ocContList.getTotalRow() == 0) {
    $c.win.alert($p, "조회결과가 존재하지 않습니다.");
    return;
  }
  cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (!cfrm) return;
  filename = "Container";
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 2,
    colSpan: 4,
    text: filename,
    textAlign: "center"
    // , fontSize    : "12pt"
    ,
    fontName: "돋움체",
    color: "black",
    fontWeight: "",
    drawBorder: "false",
    borderColor: "",
    borderWidth: "",
    wordWrap: "true",
    bgColor: "#ffffff"
  }];
  const options = {
    fileName: filename + ".xls" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: filename,
    startRowIndex: 2
  };
  $c.data.downloadGridViewExcel($p, gr_ocContList, options, infoArr);
};
scwin.f_RunExcel3 = async function (varGrNm) {
  if (gr_ocProfitList.getTotalRow() == 0) {
    $c.win.alert($p, "조회결과가 존재하지 않습니다.");
    return;
  }
  cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (!cfrm) return;
  filename = "Performance Information";
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 2,
    colSpan: 3,
    text: filename,
    textAlign: "center"
    // , fontSize    : "12pt"
    ,
    fontName: "돋움체",
    color: "black",
    fontWeight: "",
    drawBorder: "false",
    borderColor: "",
    borderWidth: "",
    wordWrap: "true",
    bgColor: "#ffffff"
  }];
  const options = {
    fileName: filename + ".xls" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: filename,
    startRowIndex: 2
  };
  $c.data.downloadGridViewExcel($p, gr_ocProfitList, options, infoArr);
};
scwin.f_RunExcel4 = async function (varGrNm) {
  if (gr_ocExpHList.getTotalRow() == 0) {
    $c.win.alert($p, "조회결과가 존재하지 않습니다.");
    return;
  }
  cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (!cfrm) return;
  filename = "Slip Tax";
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 2,
    colSpan: 4,
    text: filename,
    textAlign: "center"
    // , fontSize    : "12pt"
    ,
    fontName: "돋움체",
    color: "black",
    fontWeight: "",
    drawBorder: "false",
    borderColor: "",
    borderWidth: "",
    wordWrap: "true",
    bgColor: "#ffffff"
  }];
  const options = {
    fileName: filename + ".xls" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: filename,
    startRowIndex: 2
  };
  $c.data.downloadGridViewExcel($p, gr_ocExpHList, options, infoArr);
};
//---------------------------------------------------------------------
// Grid / DataList 이벤트 (원본 JSP 로직을 주석으로 유지)
//---------------------------------------------------------------------
// [TODO] gr_gridView1, gr_gridView2, gr_gridView3, gr_gridView4의 oncellclick/oncelldblclick/oneditend 등 이벤트에
// scwin.gr_gridViewX_... 핸들러를 연결하고, JSP의 gr_ocHblhList, ds_ocHblhList 이벤트 로직을 이관해야 함.

// VSL/VOY
scwin.udc_mhvslcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp3('Vessel', 'F', 'F', 'F');
};

// ContainerType1
scwin.btn_popMhcnt1type_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType1', 'F', 'F', 'F');
};
// ContainerType2
scwin.btn_popMhcnt2type_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType2', 'F', 'F', 'F');
};
// ContainerType3
scwin.btn_popMhcnt3type_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType3', 'F', 'F', 'F');
};
// ContainerType4
scwin.btn_popMhcnt4type_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType4', 'F', 'F', 'F');
};
// Carrier, img_PopUp2
scwin.udc_mhlinercd_onclickEvent = function (e) {
  // if (!$c.util.isEmpty(ed_mhlinercd.getValue())) {

  scwin.f_PopUp('Liner', 'F');
  // }
};
scwin.img_PopUp3_onclick = function (e) {
  scwin.f_OpenCommonPopUp2('DEPT', 'F', 'F', 'F');
};
// Shipper, img_PopUp4
scwin.udc_mhscd_onclickEvent = function (e) {
  scwin.f_PopUp('Shipper', 'F');
};
// Consignee, img_PopUp5
scwin.udc_mhccd_onclickEvent = function (e) {
  scwin.f_PopUp('Consignee', 'F');
};
// Notify, img_PopUp6
scwin.udc_mhncd_onclickEvent = function (e) {
  scwin.f_PopUp('Notify', 'F');
};
// Loading, img_PopUp7
scwin.udc_mhlodcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Loading', 'F', 'F', 'F');
};
// Discharge, img_PopUp8
scwin.udc_mhdisccd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Discharge', 'F', 'F', 'F');
};
// Delivery, img_PopUp9
scwin.udc_mhdlvcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Delivery', 'F', 'F', 'F');
};
// Customer, img_PopUp11
scwin.udc_mhactcust_onclickEvent = function (e) {
  scwin.f_PopUp('Customer', 'F');
};
// Item, img_PopUp10
scwin.udc_mhitem_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Item', 'F', 'F', 'F');
};
// Partner
scwin.btn_1_onclick = function (e) {
  scwin.f_openPgm('Partner');
};
scwin.btn_3_onclick = function (e) {
  scwin.f_openPgm('Profit');
};
scwin.btn_4_onclick = function (e) {
  scwin.f_openPgm('paymentINV');
};
scwin.btn_8_onclick = function (e) {
  scwin.f_openPgm('MasterFreight');
};
scwin.btn_5_onclick = function (e) {
  scwin.f_openPgm('HouseBLFind');
};
scwin.btn_6_onclick = function (e) {
  scwin.f_openPgm('SRPrint');
};
scwin.btn_7_onclick = function (e) {
  scwin.f_openPgm('MasterBLFind');
};
// ed_blno (MHNO 가져 오기)  change event  onKillFocus()
scwin.cnd_ed_hhblno_onchange = function (info) {
  if (!$c.util.isEmpty($p, cnd_ed_hhblno.getValue())) {
    scwin.f_MhnoLoading();
    cnd_ed_mhmblno.setValue("");
  }
};
// ed_blno (MHNO 가져 오기)  change event  onKillFocus
scwin.cnd_ed_mhmblno_onchange = function (info) {
  if (scwin.statusFlag != "C" && scwin.statusFlag != "U") {
    // 신규시,수정시  제외
    if (!$c.util.isEmpty($p, cnd_ed_mhmblno.getValue())) {
      cnd_ed_hhblno.setValue("");
      scwin.f_CndMhmblnoLoading();
    }
  }
};
// ds_vessel 데이터 변경 
scwin.ds_vessel_oncelldatachange = function (info) {
  const colID = info.colID;
  const newValue = (info.newValue || "").trim();

  //  VSL/VOY SEARCH  change event onKillFocus()
  if (colID == "mhvyg") {
    if (scwin.statusFlag == "C") {
      scwin.f_RetrieveVessel();
    }
  }
  // ed_mhvslcd onKillFocus()
  if (colID == "hhvslcd") {
    // scwin.f_ed_mhvslcd_onKillFocus(newValue);
  }
};
scwin.f_ed_mhvslcd_onKillFocus = function (newValue) {
  txt_mhvsl.setValue("");
  if (!$c.util.isEmpty($p, newValue)) {
    scwin.f_OpenCommonPopUp("Vessel", "T", "F", "F");
  }
};

// 
scwin.ds_ocMblhList_oncelldatachange = function (info) {
  // 
  return; // 무한루프 돌아서 막아놓음
  const colID = info.colID;
  const newValue = (info.newValue || "").trim();

  // ed_mhlinercd event=onKillFocus()
  if (colID == "mhlinercd") {
    txt_mhlinernm.setValue("");
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_PopUp('Liner', 'F');
    }
  }

  // ed_mhbuyer event=onKillFocus()
  if (colID == "mhbuyer") {
    txt_mhbuyernm.setValue("");
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_OpenCommonPopUp("DEPT", "T", "F", "F");
    }
  }

  // ed_mhscd event=onKillFocus()
  if (colID == "mhscd") {
    txt_mhsnm.setValue("");
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_PopUp('Shipper', 'T');
    }
  }

  // ed_mhccd event=onKillFocus()
  if (colID == "mhccd") {
    txt_mhcnm.setValue("");
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_PopUp('Consignee', 'T');
    }
  }
  // ed_mhncd event=onKillFocus()
  if (colID == "mhncd") {
    txt_mhnnm.setValue("");
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_PopUp('Notify', 'T');
    }
  }
  // ed_mhlodcd event=onKillFocus()
  if (colID == "mhlodcd") {
    txt_mhlodnm.setValue("");
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_OpenCommonPopUp("Loading", "T", "F", "F");
    }
  }
  // ed_mhdisccd event=onKillFocus()
  if (colID == "mhdisccd") {
    txt_mhdiscnm.setValue("");
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_OpenCommonPopUp("Discharge", "T", "F", "F");
    }
  }
  // ed_mhdlvcd event=onKillFocus()
  if (colID == "mhdlvcd") {
    txt_mhdlvnm.setValue("");
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_OpenCommonPopUp("Delivery", "T", "F", "F");
    }
  }
  // ed_mharea event=onKillFocus()
  if (colID == "mharea") {
    txt_mhareanm.setValue("");
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_OpenCommonPopUp("Area", "T", "F", "F");
    }
  }
  // ed_mhitem event=onKillFocus()
  if (colID == "mhitem") {
    txt_mhitemNm.setValue("");
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_OpenCommonPopUp("Item", "T", "F", "F");
    }
  }
  // ed_mhactcust event=onKillFocus()
  if (colID == "mhactcust") {
    txt_mhactcustnm.setValue("");
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_PopUp('Customer', 'T');
    }
  }
  // ed_mhetd event=onKillFocus()
  if (colID == "mhetd") {
    if (scwin.statusFlag == "C") {
      if ($c.util.isEmpty($p, ed_mhcrdt.getValue())) {
        ed_mhcrdt.setValue(newValue);
      }
    }
  }

  // ed_mhcnt1type event=onKillFocus()
  if (colID == "mhcnt1type") {
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_OpenCommonPopUp("ContainerType1", "T", "F", "F");
    }
  }
  // ed_mhcnt2type event=onKillFocus()
  if (colID == "mhcnt2type") {
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_OpenCommonPopUp("ContainerType2", "T", "F", "F");
    }
  }
  // ed_mhcnt3type event=onKillFocus()
  if (colID == "mhcnt3type") {
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_OpenCommonPopUp("ContainerType3", "T", "F", "F");
    }
  }
  // ed_mhcnt4type event=onKillFocus()
  if (colID == "mhcnt4type") {
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_OpenCommonPopUp("ContainerType4", "T", "F", "F");
    }
  }
};
// DATASET EVENT : House B/L ds_ocHblhList에서 onRowPosChanged이벤트 발생시   
// ds_ocHblhList event=onRowPosChanged(row)
scwin.ds_ocHblhList_onrowpositionchange = function (info) {
  var oldRow = info.oldRowIndex;
  var row = info.newRowIndex;
  if (ds_ocHblhList.getRowStatus(row) === "C") {
    // Insert
    gr_ocHblhList.setCellReadOnly(row, "hhblno", false);
    // gr_ocHblhList.setCellReadOnly(row, "hhblno", "upper");
  } else {
    gr_ocHblhList.setCellReadOnly(row, "hhblno", true); // 수정불가
  }
  gr_ocHblhList.setCellReadOnly(row, "hhpkg", true);
  gr_ocHblhList.setCellReadOnly(row, "hhgwgt", true);
  gr_ocHblhList.setCellReadOnly(row, "hhmsr", true);
  gr_ocHblhList.setCellReadOnly(row, "hhbhhbltypelno", true);
  if (scwin.statusFlag != "C") {
    return;
  }

  //BL type
  rd_mhpccd.setValue(ds_ocHblhList.getCellData(row, "hhpcgb"));
  rd_mhflc.setValue(ds_ocHblhList.getCellData(row, "hhbltype"));

  //Carrier
  scwin.f_chkCodeName({
    cd: ds_ocHblhList.getCellData(row, "hhliner"),
    nm: ds_ocHblhList.getCellData(row, "hhlinernm"),
    codeComp: ed_mhlinercd,
    nameComp: txt_mhlinernm,
    popupFn: () => scwin.f_PopUp("Liner", "T")
  });

  //Dept
  scwin.f_chkCodeName({
    cd: ds_ocHblhList.getCellData(row, "hhbuyer"),
    nm: ds_ocHblhList.getCellData(row, "hhbuyernm"),
    codeComp: ed_mhbuyer,
    nameComp: txt_mhbuyernm,
    popupFn: () => scwin.f_OpenCommonPopUp("DEPT", "T", "F", "F")
  });

  // Shipper
  scwin.f_chkCodeName({
    cd: ds_ocHblhList.getCellData(row, "hhscd"),
    nm: ds_ocHblhList.getCellData(row, "hhs1"),
    codeComp: ed_mhscd,
    nameComp: txt_mhsnm,
    popupFn: () => scwin.f_PopUp('Shipper', 'T')
  });

  // Consignee
  scwin.f_chkCodeName({
    cd: ds_ocHblhList.getCellData(row, "hhagent"),
    nm: ds_ocHblhList.getCellData(row, "hhagentnm"),
    codeComp: ed_mhccd,
    nameComp: txt_mhcnm,
    popupFn: () => scwin.f_PopUp('Consignee', 'T')
  });

  // Notify
  scwin.f_chkCodeName({
    cd: ds_ocHblhList.getCellData(row, "hhagent"),
    nm: ds_ocHblhList.getCellData(row, "hhagentnm"),
    codeComp: ed_mhncd,
    nameComp: txt_mhnnm,
    popupFn: () => scwin.f_PopUp('ed_mhncd', 'T')
  });

  // Loading
  scwin.f_chkCodeName({
    cd: ds_ocHblhList.getCellData(row, "hhlodcd"),
    nm: ds_ocHblhList.getCellData(row, "hhlodnm"),
    codeComp: ed_mhlodcd,
    nameComp: txt_mhlodnm,
    popupFn: () => scwin.f_OpenCommonPopUp("Loading", "T", "F", "F")
  });

  // Discharge
  scwin.f_chkCodeName({
    cd: ds_ocHblhList.getCellData(row, "hhdisccd"),
    nm: ds_ocHblhList.getCellData(row, "hhdiscnm"),
    codeComp: ed_mhdisccd,
    nameComp: txt_mhdiscnm,
    popupFn: () => scwin.f_OpenCommonPopUp("Discharge", "T", "F", "F")
  });

  // Delivery
  scwin.f_chkCodeName({
    cd: ds_ocHblhList.getCellData(row, "hhdlvcd"),
    nm: ds_ocHblhList.getCellData(row, "hhdlvnm"),
    codeComp: ed_mhdlvcd,
    nameComp: txt_mhdlvnm,
    popupFn: () => scwin.f_OpenCommonPopUp("Delivery", "T", "F", "F")
  });

  // MRN No
  if (!$c.util.isEmpty($p, ds_ocHblhList.getCellData(row, "hhmrnno"))) {
    ed_mhmrnno.setValue(ds_ocHblhList.getCellData(row, "hhmrnno"));
  }

  // Customer
  scwin.f_chkCodeName({
    cd: ds_ocHblhList.getCellData(row, "hhactcust"),
    nm: ds_ocHblhList.getCellData(row, "hhactcustnm"),
    codeComp: ed_mhactcust,
    nameComp: txt_mhactcustnm,
    popupFn: () => scwin.f_PopUp('Customer', 'T')
  });

  // Dangerous
  rd_mhdanggb.setValue(ds_ocHblhList.getCellData(row, "hhdanggb"));

  // Package
  if (!$c.util.isEmpty($p, ds_ocHblhList.getCellData(row, "hhpkg"))) {
    ed_mhpkg.setValue(ds_ocHblhList.getCellData(row, "hhpkg"));
  }

  // Unit
  if (!$c.util.isEmpty($p, ds_ocHblhList.getCellData(row, "hhunit"))) {
    txt_mhunit.setValue(ds_ocHblhList.getCellData(row, "hhunit"));
  }

  // Weight
  if (!$c.util.isEmpty($p, ds_ocHblhList.getCellData(row, "hhgwgt"))) {
    ed_mhwgt.setValue(ds_ocHblhList.getCellData(row, "hhgwgt"));
  }

  // Measure
  if (!$c.util.isEmpty($p, ds_ocHblhList.getCellData(row, "hhmsr"))) {
    ed_mhmsr.setValue(ds_ocHblhList.getCellData(row, "hhmsr"));
  }

  // Result
  if (!$c.util.isEmpty($p, ds_ocHblhList.getCellData(row, "creadyDt"))) {
    ed_mhcrdt.setValue(ds_ocHblhList.getCellData(row, "creadyDt"));
  }

  // OnBoard
  if (!$c.util.isEmpty($p, ds_ocHblhList.getCellData(row, "hhondt"))) {
    ed_mhondt.setValue(ds_ocHblhList.getCellData(row, "hhondt"));
  }

  // Item
  scwin.f_chkCodeName({
    cd: ds_ocHblhList.getCellData(row, "hhitem"),
    nm: ds_ocHblhList.getCellData(row, "hhmitem1"),
    codeComp: ed_mhitem,
    nameComp: txt_mhitemNm,
    popupFn: () => scwin.f_OpenCommonPopUp("Item", "T", "F", "F")
  });

  // Order No
  if (!$c.util.isEmpty($p, ds_ocHblhList.getCellData(row, "odrNo"))) {
    ed_odrNo.setValue(ds_ocHblhList.getCellData(row, "odrNo"));
  }

  // ETD
  if (!$c.util.isEmpty($p, ds_ocHblhList.getCellData(row, "hhetd"))) {
    ed_mhetd.setValue(ds_ocHblhList.getCellData(row, "hhetd"));
  }

  // ETA
  if (!$c.util.isEmpty($p, ds_ocHblhList.getCellData(row, "hheta"))) {
    ed_mheta.setValue(ds_ocHblhList.getCellData(row, "hheta"));
  }
};

// CodeName 
scwin.f_chkCodeName = function ({
  cd,
  nm,
  codeComp,
  nameComp,
  popupFn
}) {
  cd = (cd || "").trim();
  nm = (nm || "").trim();
  if ($c.util.isEmpty($p, cd) && $c.util.isEmpty($p, nm)) return;

  // 값 먼저 세팅
  if (nameComp) nameComp.setValue(nm);
  if (codeComp) codeComp.setValue(cd);

  // 둘 중 하나라도 없으면 팝업 호출
  if ($c.util.isEmpty($p, cd) || $c.util.isEmpty($p, nm)) {
    if (typeof popupFn === "function") popupFn();
  }
};
// gr_ocHblhList event=OnCheckClick(Row,Colid,Check)
scwin.gr_ocHblhList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId === "chk") {
    scwin.f_MasterSum();
    scwin.f_masterHouseBlList();
  }
};

// gr_ocHblhList OnExit(row,colid,olddata)
scwin.gr_ocHblhList_onafteredit = async function (row, columnIndex, value) {
  // hhblno 컬럼에서만 동작 
  if (columnIndex != 1) {
    return;
  }
  var cnt = ds_ocHblhList.getRowCount();
  for (var i = 0; i < cnt - 1; i++) {
    for (var j = i + 1; j < cnt; j++) {
      if (ds_ocHblhList.getCellData(i, "hhblno") === ds_ocHblhList.getCellData(j, "hhblno")) {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_032, ["House B/L"]);
        gr_ocHblhList.focus();
        gr_ocHblhList.setFocusedCell(row, "hhblno", true);
        return;
      }
    }
  }
  const nRow = ds_gridHouseList.insertRow(ds_gridHouseList.getRowCount());
  ds_gridHouseList.setCellData(nRow, "kcomcd", scwin.hd_kcomcd);
  ds_gridHouseList.setCellData(nRow, "hhio", scwin.hd_mhio);
  ds_gridHouseList.setCellData(nRow, "hhblno", ds_ocHblhList.getCellData(row, "hhblno"));
  await $c.sbm.execute($p, sbm_retrieveGridHouse);
  if (ds_gridHouseList.getRowCount() < 1) return;
  ds_ocHblhList.setCellData(row, "hhpkg", ds_gridHouseList.getCellData(0, "hhpkg"));
  ds_ocHblhList.setCellData(row, "hhgwgt", ds_gridHouseList.getCellData(0, "hhgwgt"));
  ds_ocHblhList.setCellData(row, "hhmsr", ds_gridHouseList.getCellData(0, "hhmsr"));
  ds_ocHblhList.setCellData(row, "hhbltype", ds_gridHouseList.getCellData(0, "hhbltype"));
  ds_gridHouseList.removeAll();
  scwin.f_MasterSum();
  scwin.f_masterHouseBlList();
};

// ds_hmhno event=OnLoadCompleted(rowcnt)
scwin.ds_hmhno_ondataload = async function () {
  if (ds_hmhno.getRowCount() === 0) {
    if (scwin.statusFlag !== "C") {
      // $c.gus.cfAlertMsg(E_MSG_CM_ERR_049, ["House No"]);
      await $c.win.alert($p, "House No does not exist.");
    }
    var r0 = ds_hmhno.insertRow(0);
    ds_hmhno.setCellData(r0, "code", "NONE");
    ds_hmhno.setCellData(r0, "name", "NONE");
    cnd_lc_mhno.setSelectedIndex(0);
  }
  if (scwin.statusFlag === "C") {
    ds_hmhno.removeAll();
    var r1 = ds_hmhno.insertRow(0);
    ds_hmhno.setCellData(r1, "code", "NONE");
    ds_hmhno.setCellData(r1, "name", "NONE");
    cnd_lc_mhno.setSelectedIndex(0);
  }
  if (scwin.mhnoFlag === "1") {
    scwin.f_Retrieve();
    scwin.mhnoFlag = "0";
  }
};
// OnLoadCompleted(rowcnt)
scwin.ds_ocHblhList_ondataload = function () {
  // scwin.loaded = 0;
  if (scwin.statusFlag != "C") {
    return;
  }
  if (ds_ocHblhList.getRowCount() <= 0) {
    return;
  }
  ed_mhlinercd.setValue(ds_ocHblhList.getCellData(0, "hhliner"));
  if (!$c.util.isEmpty($p, ds_ocHblhList.getCellData(0, "hhliner"))) {
    scwin.f_PopUp('Liner', 'T');
  }
  // PP/CC
  rd_mhpccd.setValue(ds_ocHblhList.getCellData(0, "hhpcgb") == "P" ? "P" : "C");

  // FCL/LCL/BULK/CONSOL
  var fCnt = 0;
  for (var i = 0; i < ds_ocHblhList.getRowCount(); i++) {
    if (ds_ocHblhList.getCellData(i, "hhbltype") === "F") fCnt++;
  }
  if (fCnt === 1) rd_mhflc.setValue("F");else if (fCnt >= 2) rd_mhflc.setValue("C");else rd_mhflc.setValue(ds_ocHblhList.getCellData(0, "hhbltype"));

  // 기본 값 세팅
  ed_mhbuyer.setValue(ds_ocHblhList.getCellData(0, "hhbuyer"));
  txt_mhbuyernm.setValue(ds_ocHblhList.getCellData(0, "hhbuyernm"));

  // JSP 파라미터는 서버에서 값 주입되는 그대로 유지
  ed_mhscd.setValue(scwin.v_clntNo);
  txt_mhsnm.setValue(scwin.v_clntNm);
  ed_mhccd.setValue(ds_ocHblhList.getCellData(0, "hhagent"));
  txt_mhcnm.setValue(ds_ocHblhList.getCellData(0, "hhagentnm"));
  ed_mhncd.setValue(ds_ocHblhList.getCellData(0, "hhagent"));
  txt_mhnnm.setValue(ds_ocHblhList.getCellData(0, "hhagentnm"));
  ed_mhlodcd.setValue(ds_ocHblhList.getCellData(0, "hhlodcd"));
  txt_mhlodnm.setValue(ds_ocHblhList.getCellData(0, "hhlodnm"));
  ed_mhdisccd.setValue(ds_ocHblhList.getCellData(0, "hhdisccd"));
  txt_mhdiscnm.setValue(ds_ocHblhList.getCellData(0, "hhdiscnm"));
  ed_mhdlvcd.setValue(ds_ocHblhList.getCellData(0, "hhdlvcd"));
  txt_mhdlvnm.setValue(ds_ocHblhList.getCellData(0, "hhdlvnm"));
  ed_mharea.setValue(ds_ocHblhList.getCellData(0, "hharea"));
  txt_mhareanm.setValue(ds_ocHblhList.getCellData(0, "hhareanm"));
  txt_mhunit.setValue(ds_ocHblhList.getCellData(0, "hhunit"));
  ed_mhetd.setValue(ds_ocHblhList.getCellData(0, "hhetd"));
  ed_mheta.setValue(ds_ocHblhList.getCellData(0, "hheta"));

  // 컬럼명 확인 필요: 기존은 "cready_dt" (다른 소스는 "creadyDt"도 사용)
  ed_mhcrdt.setValue(ds_ocHblhList.getCellData(0, "creadyDt"));
  ed_mhondt.setValue(ds_ocHblhList.getCellData(0, "hhondt"));
  ed_mhitem.setValue(ds_ocHblhList.getCellData(0, "hhitem"));
  txt_mhitemNm.setValue(ds_ocHblhList.getCellData(0, "hhmitem1"));
  scwin.hd_mhvslcd = ds_ocHblhList.getCellData(0, "hhvslcd");
  scwin.hd_mhvsl = ds_ocHblhList.getCellData(0, "hhvsl");
  scwin.hd_mhvyg = ds_ocHblhList.getCellData(0, "hhvyg");
  ed_mhactcust.setValue(ds_ocHblhList.getCellData(0, "hhactcust"));
  txt_mhactcustnm.setValue(ds_ocHblhList.getCellData(0, "hhactcustnm"));
  scwin.f_MasterSum();
  scwin.f_masterHouseBlList();
};
//  ds_ocMblhList OnLoadCompleted(rowcnt)
scwin.ds_ocMblhList_ondataload = function () {
  data = this.getAllJSON()[0];
  scwin.hd_mhvslcd = data.mhvslcd;
  scwin.hd_mhvsl = data.mhvsl;
  scwin.hd_mhvyg = data.mhvyg;
  if (ds_ocMblhList.getRowCount() != 0) {
    ed_mhvslcd.setValue(scwin.hd_mhvslcd);
    txt_mhvsl.setValue(scwin.hd_mhvsl);
    ed_mhvyg.setValue(scwin.hd_mhvyg);
  }
};
// gr_ocHblhList  OnDblClick(row,colid)
scwin.gr_ocHblhList_oncelldblclick = function (row, columnIndex, columnId) {
  if (scwin.flag == "UPDATE" || scwin.flag == "CREATE") return;
  // console.log({
  //     linkcheck: "2",
  //     kcomcd: scwin.hd_kcomcd,
  //     blno: ds_ocHblhList.getCellData(row, "hhblno"),
  //     mhno: cnd_lc_mhno.getValue()
  // })
  $c.win.openMenu($p, "Export House B/L", "/ui/il/seaout/sobl/se_105_01_01b.xml", "", {
    linkcheck: "2",
    kcomcd: scwin.hd_kcomcd,
    blno: ds_ocHblhList.getCellData(row, "hhblno"),
    mhno: cnd_lc_mhno.getValue()
  });
};

//==========================
// header checkbox 공통 처리
//==========================
scwin._headCheckApply = function (ds, checked) {
  var isOn = checked == true || checked == "1" || String(checked).toLowerCase() == "true";
  var v = isOn ? "T" : "F";
  var rc = ds.getRowCount();
  for (var r = 0; r < rc; r++) {
    ds.setCellData(r, "chk", v);
  }
};

//  gr_ocHblhList  OnHeadCheckClick(Col,Colid,bCheck)
scwin.gr_ocHblhList_onheaderclick = function (headerId) {
  var colId = headerId;
  var checked = gr_ocHblhList.getHeaderValue(headerId);
  if (colId == "chk") {
    scwin._headCheckApply(ds_ocHblhList, checked);
    scwin.f_MasterSum();
    scwin.f_masterHouseBlList();
  }
};
scwin.ed_mhbuyer_onviewchange = function (info) {
  var strClntNo = "";
  strClntNo = ed_mhbuyer.getValue();
  if (strClntNo.length > 0) {
    txt_mhbuyernm.setValue("");
    scwin.f_OpenCommonPopUp("DEPT", "T", "F", "F");
  } else {
    txt_mhbuyernm.setValue("");
  }
};
scwin.udc_mhlinercd_onviewchangeCodeEvent = function (info) {
  var strClntNo = "";
  strClntNo = ed_mhlinercd.getValue();
  if (strClntNo.length > 0) {
    txt_mhlinernm.setValue("");
    scwin.f_PopUp('Liner', 'T');
  } else {
    txt_mhlinernm.setValue("");
  }
};
scwin.udc_mhscd_onviewchangeCodeEvent = function (info) {
  var strClntNo = "";
  strClntNo = ed_mhscd.getValue();
  if (strClntNo.length > 0) {
    txt_mhsnm.setValue("");
    scwin.f_PopUp('Shipper', 'T');
  } else {
    txt_mhsnm.setValue("");
  }
};
scwin.udc_mhccd_onviewchangeCodeEvent = function (info) {
  var strClntNo = "";
  strClntNo = ed_mhccd.getValue();
  if (strClntNo.length > 0) {
    txt_mhcnm.setValue("");
    scwin.f_PopUp('Consignee', 'T');
  } else {
    txt_mhcnm.setValue("");
  }
};
scwin.udc_mhncd_onviewchangeCodeEvent = function (info) {
  var strClntNo = "";
  strClntNo = ed_mhncd.getValue();
  if (strClntNo.length > 0) {
    txt_mhnnm.setValue("");
    scwin.f_PopUp('Notify', 'T');
  } else {
    txt_mhnnm.setValue("");
  }
};
scwin.udc_mhlodcd_onviewchangeCodeEvent = function (info) {
  var strClntNo = "";
  strClntNo = ed_mhlodcd.getValue();
  if (strClntNo.length > 0) {
    txt_mhlodnm.setValue("");
    scwin.f_OpenCommonPopUp("Loading", "T", "F", "F");
  } else {
    txt_mhlodnm.setValue("");
  }
};
scwin.udc_mhdisccd_onviewchangeCodeEvent = function (info) {
  var strClntNo = "";
  strClntNo = ed_mhdisccd.getValue();
  if (strClntNo.length > 0) {
    txt_mhdiscnm.setValue("");
    scwin.f_OpenCommonPopUp("Discharge", "T", "F", "F");
  } else {
    txt_mhdiscnm.setValue("");
  }
};
scwin.udc_mhdlvcd_onviewchangeCodeEvent = function (info) {
  var strClntNo = "";
  strClntNo = ed_mhdlvcd.getValue();
  if (strClntNo.length > 0) {
    txt_mhdlvnm.setValue("");
    scwin.f_OpenCommonPopUp("Delivery", "T", "F", "F");
  } else {
    txt_mhdlvnm.setValue("");
  }
};
scwin.udc_mhactcust_onviewchangeCodeEvent = function (info) {
  var strClntNo = "";
  strClntNo = ed_mhactcust.getValue();
  if (strClntNo.length > 0) {
    txt_mhactcustnm.setValue("");
    scwin.f_PopUp('Customer', 'T');
  } else {
    txt_mhactcustnm.setValue("");
  }
};
scwin.udc_mhitem_onviewchangeCodeEvent = function (info) {
  var strClntNo = "";
  strClntNo = ed_mhitem.getValue();
  if (strClntNo.length > 0) {
    txt_mhitemNm.setValue("");
    scwin.f_OpenCommonPopUp("Item", "T", "F", "F");
  } else {
    txt_mhitemNm.setValue("");
  }
};
scwin.udc_mhvslcd_onviewchangeCodeEvent = function (info) {
  var strClntNo = "";
  strClntNo = ed_mhvslcd.getValue();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp3("Vessel", "T", "F", "F");
    txt_mhvsl.setValue("");
  } else {
    if (scwin.flag != "UPDATE") txt_mhvsl.setValue("");
  }
};
scwin.ed_mhcnt1type_onviewchange = function (info) {
  var strClntNo = "";
  strClntNo = ed_mhcnt1type.getValue();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("ContainerType1", "T", "F", "F");
  }
};
scwin.ed_mhcnt2type_onviewchange = function (info) {
  var strClntNo = "";
  strClntNo = ed_mhcnt2type.getValue();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("ContainerType2", "T", "F", "F");
  }
};
scwin.ed_mhcnt3type_onviewchange = function (info) {
  var strClntNo = "";
  strClntNo = ed_mhcnt3type.getValue();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("ContainerType3", "T", "F", "F");
  }
};
scwin.ed_mhcnt4type_onviewchange = function (info) {
  var strClntNo = "";
  strClntNo = ed_mhcnt4type.getValue();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("ContainerType4", "T", "F", "F");
  }
};
scwin.udc_mhvslcd_onblurCodeEvent = function (e) {
  let strClntNo = "";
  strClntNo = ed_mhvslcd.getValue();
  if (ed_mhvslcd.originalValue != ed_mhvslcd.getValue()) {
    if (strClntNo.length > 0) {
      txt_mhvsl.setValue("");
      scwin.f_OpenCommonPopUp3("Vessel", "T", "F", "F");
    } else {
      txt_mhvsl.setValue("");
    }
  }
};
scwin.ed_shipMgntNo_oneditkeyup = function (info, e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.oneditkeyup = function (info, e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.udc_mhlinercd_onblurCodeEvent = function (e) {
  let strClntNo = ed_mhlinercd.getValue().trim();
  if (strClntNo.length > 0) {
    scwin.f_PopUp('Liner', 'T');
    ed_mhlinercd.setValue("");
  } else {
    ed_mhlinercd.setValue("");
  }
};
scwin.udc_mhscd_onblurCodeEvent = function (e) {
  let strClntNo = ed_mhscd.getValue().trim();
  if (strClntNo.length > 0) {
    scwin.f_PopUp('Shipper', 'T');
    txt_mhsnm.setValue("");
  } else {
    txt_mhsnm.setValue("");
  }
};
scwin.udc_mhccd_onblurCodeEvent = function (e) {
  let strClntNo = ed_mhccd.getValue().trim();
  if (strClntNo.length > 0) {
    scwin.f_PopUp('Consignee', 'T');
    txt_mhcnm.setValue("");
  } else {
    txt_mhcnm.setValue("");
  }
};
scwin.udc_mhncd_onblurCodeEvent = function (e) {
  let strClntNo = ed_mhncd.getValue().trim();
  if (strClntNo.length > 0) {
    scwin.f_PopUp('Notify', 'T');
    txt_mhnnm.setValue("");
  } else {
    txt_mhnnm.setValue("");
  }
};
scwin.udc_mhlodcd_onblurCodeEvent = function (e) {
  let strClntNo = ed_mhlodcd.getValue().trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("Loading", "T", "F", "F");
    txt_mhlodnm.setValue("");
  } else {
    txt_mhlodnm.setValue("");
  }
};
scwin.udc_mhdisccd_onblurCodeEvent = function (e) {
  let strClntNo = ed_mhdisccd.getValue().trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("Discharge", "T", "F", "F");
    txt_mhdiscnm.setValue("");
  } else {
    txt_mhdiscnm.setValue("");
  }
};
scwin.udc_mhdlvcd_onblurCodeEvent = function (e) {
  let strClntNo = ed_mhdlvcd.getValue().trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("Delivery", "T", "F", "F");
    txt_mhdlvnm.setValue("");
  } else {
    txt_mhdlvnm.setValue("");
  }
};
scwin.udc_mhactcust_onblurCodeEvent = function (e) {
  let strClntNo = ed_mhactcust.getValue().trim();
  if (strClntNo.length > 0) {
    scwin.f_PopUp('Customer', 'T');
    txt_mhactcustnm.setValue("");
  } else {
    txt_mhactcustnm.setValue("");
  }
};
scwin.udc_mhitem_onblurCodeEvent = function (e) {
  let strClntNo = ed_mhitem.getValue().trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("Item", "T", "F", "F");
    txt_mhitemNm.setValue("");
  } else {
    txt_mhitemNm.setValue("");
  }
};
scwin.ed_mhbuyer_onblur = function (e) {
  let strClntNo = ed_mhbuyer.getValue().trim();
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("DEPT", "T", "F", "F");
    txt_mhbuyernm.setValue("");
  } else {
    txt_mhbuyernm.setValue("");
  }
};
scwin.ed_mhvyg_onblur = function (e) {
  if (scwin.statusFlag == "C") {
    scwin.f_RetrieveVessel();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_hhblno',placeholder:'',style:'width:150px;',allowChar:'A-Z|0-9|a-z',maxlength:'20','ev:oneditkeyup':'scwin.oneditkeyup','ev:onblur':'scwin.cnd_ed_hhblno_onchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DOC No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_mhno',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_hmhno'},E:[{T:1,N:'w2:label',A:{ref:'code'}},{T:1,N:'w2:value',A:{ref:'name'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_mhmblno',placeholder:'',style:'width:150px;',ref:'data:ds_ocMblhList.mhmblno',allowChar:'A-Z|0-9|a-z',maxlength:'20','ev:onblur':'scwin.cnd_ed_mhmblno_onchange','ev:oneditkeyup':'scwin.oneditkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'VSL/VOY',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_mhvslcd',selectID:'',popupID:'',validTitle:'',nameId:'txt_mhvsl',style:'',btnId:'btn_mhvslcd',id:'udc_mhvslcd',refDataCollection:'ds_vessel',code:'hhvslcd',name:'hhvsl','ev:onclickEvent':'scwin.udc_mhvslcd_onclickEvent',UpperFlagCode:'1',allowCharCode:'a-z|A-Z|0-9',maxlengthCode:'6','ev:onviewchangeCodeEvent':'scwin.udc_mhvslcd_onviewchangeCodeEvent','ev:onblurCodeEvent':'scwin.udc_mhvslcd_onblurCodeEvent'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_mhvyg',placeholder:'',class:'',UpperFlag:'1',ref:'data:ds_vessel.hhvyg','ev:onblur':'scwin.ed_mhvyg_onblur'}},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',code:'hhvslcd',codeId:'',id:'udc_ilcomCode',maxlengthCode:'6',name:'hhvsl',nameId:'',popupID:'',refDataCollection:'ds_vessel',selectID:'',style:'display : none;',validTitle:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'House B/L',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',btnUser:'Y',gridID:'gr_ocHblhList',btnPlusYn:'Y',grdDownOpts:'{"fileName":"House B/L.xls","sheetName":"House B/L","type":"8 + 16"}',gridDownFn:'scwin.f_RunExcel1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_ocHblhList',style:'',autoFit:'allColumn',id:'gr_ocHblhList',visibleRowNum:'4',class:'wq_gvw','ev:onheaderclick':'scwin.gr_ocHblhList_onheaderclick','ev:oncellclick':'scwin.gr_ocHblhList_oncellclick','ev:onafteredit':'scwin.gr_ocHblhList_onafteredit','ev:oncelldblclick':'scwin.gr_ocHblhList_oncelldblclick',columnMove:'false',rowStatusVisible:'true',rowStatusWidth:'25'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',id:'column1',displayMode:'label',dataField:'chk',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'House No',displayMode:'label',dataField:'hhblno'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column15',value:'Package',displayMode:'label',dataField:'hhpkg',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column13',value:'Weight',displayMode:'label',dataField:'hhgwgt',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'Measure',displayMode:'label',dataField:'hhmsr',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column9',value:'F/L',displayMode:'label',dataField:'hhbltype',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',id:'chk',displayMode:'label',fixColumnWidth:'true',dataType:'text',textAlign:'center',trueValue:'T',hiddenCol:'true',valueType:'other',falseValue:'F'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hhblno',displayMode:'label',textAlign:'left',validateOnInput:'true',allowChar:'0-9|a-z|A-Z'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'hhpkg',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'hhgwgt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.##',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hhmsr',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'autoComplete',id:'hhbltype',displayMode:'label',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'LCL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'FCL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Bulk'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'txt_totalOcHblhList',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',id:'grbtn_ocHblhList',gridID:'gr_ocHblhList',rowAddUserAuth:'C',userAuth:'C',EngYn:'Y',btnCancelYn:'Y',btnRowDelYn:'N',rowAddFunction:'scwin.f_addRow',cancelFunction:'scwin.f_cancelRow'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Container',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',btnUser:'Y',gridID:'gr_ocContList',templateYn:'N',btnPlusYn:'Y',grdDownOpts:'{"fileName":"Container.xls","sheetName":"Container","type":"8 + 16"}',gridDownFn:'scwin.f_RunExcel2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_ocContList',style:'',autoFit:'allColumn',id:'gr_ocContList',visibleRowNum:'4',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',dataField:'mccntno',value:'Container',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column17',dataField:'mctype',value:'Type',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',dataField:'mcseal1',value:'Seal No1',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',dataField:'mcseal2',value:'Seal No2',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mccntno',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mctype',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcseal1',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcseal2',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'txt_totalOcContList',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Container',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhcnt1type',placeholder:'',style:'width: 50px;',maxlength:'4',allowChar:'a-zA-Z0-9',objType:'data',ref:'data:ds_ocMblhList.mhcnt1type','ev:onviewchange':'scwin.ed_mhcnt1type_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_popMhcnt1type',style:'',type:'button','ev:onclick':'scwin.btn_popMhcnt1type_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhcnt2type',placeholder:'',style:'width: 50px;',maxlength:'4',allowChar:'a-zA-Z0-9',objType:'data',ref:'data:ds_ocMblhList.mhcnt2type','ev:onviewchange':'scwin.ed_mhcnt2type_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_popMhcnt2type',style:'',type:'button','ev:onclick':'scwin.btn_popMhcnt2type_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhcnt3type',placeholder:'',style:'width: 50px;',maxlength:'4',allowChar:'a-zA-Z0-9',objType:'data',ref:'data:ds_ocMblhList.mhcnt3type','ev:onviewchange':'scwin.ed_mhcnt3type_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_popMhcnt3type',style:'',type:'button','ev:onclick':'scwin.btn_popMhcnt3type_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhcnt4type',placeholder:'',style:'width: 50px;',maxlength:'4',allowChar:'a-zA-Z0-9',objType:'data',ref:'data:ds_ocMblhList.mhcnt4type','ev:onviewchange':'scwin.ed_mhcnt4type_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_popMhcnt4type',style:'',type:'button','ev:onclick':'scwin.btn_popMhcnt4type_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CNTR QTY',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhcnt1',placeholder:'',style:'width:75px;text-align:right;',dataType:'number',maxlength:'3',objType:'data',ref:'data:ds_ocMblhList.mhcnt1'}},{T:1,N:'xf:input',A:{class:'',id:'ed_mhcnt2',placeholder:'',style:'width:75px;text-align:right;',dataType:'number',maxlength:'3',objType:'data',ref:'data:ds_ocMblhList.mhcnt2'}},{T:1,N:'xf:input',A:{class:'',id:'ed_mhcnt3',placeholder:'',style:'width:75px;text-align:right;',dataType:'number',maxlength:'3',objType:'data',ref:'data:ds_ocMblhList.mhcnt3'}},{T:1,N:'xf:input',A:{class:'',id:'ed_mhcnt4',placeholder:'',style:'width:75px;text-align:right;',dataType:'number',maxlength:'3',objType:'data',ref:'data:ds_ocMblhList.mhcnt4'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Performance Information',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridUpYn:'N',btnUser:'Y',gridID:'gr_ocProfitList',btnPlusYn:'Y',grdDownOpts:'{"fileName":"Performance Information.xls","sheetName":"Performance Information","type":"8 + 16"}',gridDownFn:'scwin.f_RunExcel3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_ocProfitList',style:'',autoFit:'allColumn',id:'gr_ocProfitList',visibleRowNum:'4',class:'wq_gvw',sortable:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption4',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'Selling',displayMode:'label',dataField:'selling',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'Buying',displayMode:'label',dataField:'buying',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'Profit',displayMode:'label',dataField:'profit',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'selling',displayMode:'label',dataType:'number',displayFormat:'#,##0.##',textAlign:'right',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'buying',displayMode:'label',dataType:'number',displayFormat:'#,##0.##',textAlign:'right',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'profit',displayMode:'label',dataType:'number',displayFormat:'#,##0.##',textAlign:'right',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'txt_totalOcProfitList',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'tb_masterColumn',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{ref:'data:ds_ocMblhList.mhpccd',appearance:'full',style:'',id:'rd_mhpccd',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'-1',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'PrePaid'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'P'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Collect'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{ref:'data:ds_ocMblhList.mhflc',appearance:'full',style:'',id:'rd_mhflc',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'-1',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FCL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'LCL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Bulk'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Consol'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Carrier',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_mhlinercd',selectID:'',popupID:'',validTitle:'',nameId:'txt_mhlinernm',style:'',btnId:'btn_mhlinercd',UpperFlagCode:'1',maxlengthCode:'6',objTypeCode:'data',objTypeName:'data',id:'udc_mhlinercd',refDataCollection:'ds_ocMblhList',code:'mhlinercd','ev:onclickEvent':'scwin.udc_mhlinercd_onclickEvent',allowCharCode:'0-9','ev:onviewchangeCodeEvent':'scwin.udc_mhlinercd_onviewchangeCodeEvent',UpperFlagName:'1',skipOnBlurNameValueEmpty:'N',name:'mhlinernm','ev:onblurCodeEvent':'scwin.udc_mhlinercd_onblurCodeEvent'}},{T:1,N:'xf:input',A:{ref:'data:ds_ocMblhList.mhediliner',maxByteLength:'8',style:'width:80px;',id:'ed_mhediliner',placeholder:'',allowChar:'a-zA-Z0-9',class:'',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'pu_departmentChange',type:'button',class:'btn link','ev:onclick':'scwin.f_departmentChange'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Dept'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:' &nbsp;',class:'req',escape:'false'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 50px;',id:'ed_mhbuyer',placeholder:'',class:'',maxlength:'8',UpperFlag:'1',allowChar:'a-zA-Z0-9',objType:'data',ref:'data:ds_ocMblhList.mhbuyer','ev:onviewchange':'scwin.ed_mhbuyer_onviewchange',readOnly:'true',mandatory:'true','ev:onblur':'scwin.ed_mhbuyer_onblur'}},{T:1,N:'xf:trigger',A:{style:'',id:'img_PopUp3',type:'button',class:'btn ico sch','ev:onclick':'scwin.img_PopUp3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Shipper',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_mhscd',selectID:'',popupID:'',validTitle:'',nameId:'txt_mhsnm',style:'',maxlengthCode:'6',allowCharCode:'0-9',UpperFlagCode:'1',objTypeCode:'data',objTypeName:'data',refDataCollection:'ds_ocMblhList',code:'mhscd',name:'mhsnm',id:'udc_mhscd',btnId:'btn_mhscd','ev:onclickEvent':'scwin.udc_mhscd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_mhscd_onviewchangeCodeEvent','ev:onblurCodeEvent':'scwin.udc_mhscd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_mhbuyernm',placeholder:'',class:'',objType:'data',ref:'data:ds_ocMblhList.mhbuyernm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consignee',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_mhccd',selectID:'',popupID:'',validTitle:'',nameId:'txt_mhcnm',style:'',id:'udc_mhccd',btnId:'btn_mhccd',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',refDataCollection:'ds_ocMblhList',code:'mhccd',name:'mhcnm',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_mhccd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_mhccd_onviewchangeCodeEvent','ev:onblurCodeEvent':'scwin.udc_mhccd_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Notify',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_mhncd',selectID:'',popupID:'',validTitle:'',nameId:'txt_mhnnm',style:'',btnId:'btn_mhncd',id:'udc_mhncd',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',refDataCollection:'ds_ocMblhList',code:'mhncd',name:'mhnnm',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_mhncd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_mhncd_onviewchangeCodeEvent','ev:onblurCodeEvent':'scwin.udc_mhncd_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Loading',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_mhlodcd',selectID:'',popupID:'',validTitle:'',nameId:'txt_mhlodnm',style:'',btnId:'btn_mhlodcd',id:'udc_mhlodcd',UpperFlagCode:'1',allowCharCode:'a-zA-Z',maxlengthCode:'5',refDataCollection:'ds_ocMblhList',code:'mhlodcd',name:'mhlodnm',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_mhlodcd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_mhlodcd_onviewchangeCodeEvent','ev:onblurCodeEvent':'scwin.udc_mhlodcd_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Discharge',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_mhdisccd',selectID:'',popupID:'',validTitle:'',nameId:'txt_mhdiscnm',style:'',btnId:'btn_mhdisccd',id:'udc_mhdisccd',UpperFlagCode:'1',maxlengthCode:'5',refDataCollection:'ds_ocMblhList',code:'mhdisccd',name:'mhdiscnm',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_mhdisccd_onclickEvent',UpperFlagName:'1','ev:onviewchangeCodeEvent':'scwin.udc_mhdisccd_onviewchangeCodeEvent',allowCharCode:'a-zA-Z','ev:onblurCodeEvent':'scwin.udc_mhdisccd_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Delivery ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_mhdlvcd',selectID:'',popupID:'',validTitle:'',nameId:'txt_mhdlvnm',style:'',btnId:'btn_mhdlvcd',id:'udc_mhdlvcd',UpperFlagCode:'1',allowCharCode:'a-zA-Z',maxlengthCode:'5',refDataCollection:'ds_ocMblhList',code:'mhdlvcd',name:'mhdlvnm',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_mhdlvcd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_mhdlvcd_onviewchangeCodeEvent','ev:onblurCodeEvent':'scwin.udc_mhdlvcd_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_mhmrnno',placeholder:'',style:'width:150px;',allowChar:'a-zA-Z0-9',maxByteLength:'11',objType:'data',UpperFlag:'1',ref:'data:ds_ocMblhList.mhmrnno'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'MSN No ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mhmsnno',placeholder:'',style:'width:150px;',allowChar:'a-zA-Z0-9',maxByteLength:'4',objType:'data',UpperFlag:'1',ref:'data:ds_ocMblhList.mhmsnno'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_mhactcust',nameId:'txt_mhactcustnm',popupID:'',selectID:'',style:'',validTitle:'',btnId:'btn_mhactcust',id:'udc_mhactcust',UpperFlagCode:'1',allowCharCode:'0-9',refDataCollection:'ds_ocMblhList',code:'mhactcust',name:'mhactcustnm',maxlengthCode:'6',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_mhactcust_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_mhactcust_onviewchangeCodeEvent','ev:onblurCodeEvent':'scwin.udc_mhactcust_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Dangerous ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_mhdanggb',ref:'data:ds_ocMblhList.mhdanggb',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Order No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;',allowChar:'a-zA-Z0-9',ref:'data:ds_ocMblhList.odrNo',objType:'data',readOnly:'true'}},{T:1,N:'xf:input',A:{class:'',id:'ed_mharea',placeholder:'',style:'display:none;',ref:'data:ds_ocMblhList.mharea'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mhareanm',placeholder:'',style:'display:none;',ref:'data:ds_ocMblhList.mhareanm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Package ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mhpkg',placeholder:'',style:'width:150px;text-align:right;',maxlength:'10',objType:'data',ref:'data:ds_ocMblhList.mhpkg',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Unit ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_mhunit',placeholder:'',style:'width:150px;',objType:'data',ref:'data:ds_ocMblhList.mhunit'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Weight ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mhwgt',placeholder:'',style:'width:150px;text-align: right;',objType:'data',maxlength:'13',ref:'data:ds_ocMblhList.mhwgt',dataType:'number',displayFormat:'#,###.##'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Measure ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mhmsr',placeholder:'',style:'width:150px;text-align:right;',objType:'data',dataType:'number',maskFormat:'#,###',maxlength:'11',ref:'data:ds_ocMblhList.mhmsr'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETD',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_mhetd',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:ds_ocMblhList.mhetd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETA ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_mheta',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:ds_ocMblhList.mheta'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Result',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_mhcrdt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:ds_ocMblhList.mhcrdt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Item',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_mhitem',nameId:'txt_mhitemNm',popupID:'',selectID:'',style:'',validTitle:'',btnId:'btn_mhitem',id:'udc_mhitem',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'8',refDataCollection:'ds_ocMblhList',code:'mhitem',name:'mhitemNm',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_mhitem_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_mhitem_onviewchangeCodeEvent','ev:onblurCodeEvent':'scwin.udc_mhitem_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Onboard',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_mhondt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:ds_ocMblhList.mhondt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선적번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_shipMgntNo',placeholder:'',style:'width:150px;',maxByteLength:'12',allowChar:'a-zA-Z0-9',objType:'data',ref:'data:ds_ocMblhList.shipMgntNo','ev:oneditkeyup':'scwin.ed_shipMgntNo_oneditkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Slip Tax',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridUpYn:'N',btnPlusYn:'Y',gridID:'gr_ocExpHList',grdDownOpts:'{"fileName":"Slip Tax.xls","sheetName":"Slip Tax","type":"8 + 16"}',gridDownFn:'scwin.f_RunExcel4'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group6',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_slipTax',id:'gr_ocExpHList',style:'',visibleRowNum:'8',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'Customer',width:'120',dataField:'clntNo',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Billing Date',width:'100',dataField:'intendDt',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'Tax Date',width:'100',dataField:'spplyDt',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Slip No',width:'120',dataField:'slipNo',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'intendDt',inputType:'text',width:'100',dataType:'text',displayFormat:'####/##/##',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyDt',inputType:'text',width:'100',dataType:'text',displayFormat:'####/##/##',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'120',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalOcExpHList',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_1',style:'',type:'button','ev:onclick':'scwin.btn_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Partner'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_3',style:'',type:'button','ev:onclick':'scwin.btn_3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Profit'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_4',style:'',type:'button','ev:onclick':'scwin.btn_4_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Payment INV'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_8',style:'',type:'button','ev:onclick':'scwin.btn_8_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Freight'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_5',style:'',type:'button','ev:onclick':'scwin.btn_5_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'HBL Find'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_6',style:'',type:'button','ev:onclick':'scwin.btn_6_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'S/R Print'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_7',style:'',type:'button','ev:onclick':'scwin.btn_7_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'MBL FInd'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Cancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Cancel',userAuth:'R',objType:'bCancel'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',label:'저장',style:'',type:'button',userAuth:'C',objType:'bCreate','ev:onclick':'scwin.f_Create'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Update',label:'저장',style:'',type:'button',userAuth:'U',objType:'bUpdate','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Save',label:'저장',style:'',type:'button',userAuth:'U',objType:'bSave','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Delete',label:'저장',style:'',type:'button',userAuth:'D',objType:'bDelete','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]}]}]}]}]})