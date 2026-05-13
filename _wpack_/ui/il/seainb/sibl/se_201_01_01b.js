/*amd /ui/il/seainb/sibl/se_201_01_01b.xml 220381 69f03d15dd160d655951777973bfd0208ca41e7ac5ed93b1a11e05c5ddeb5846 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_combo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'SQL ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라메터1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'파라메터2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'파라메터3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'파라메터4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_code'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'grpCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cd',name:'cd',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{id:'ds_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'kcomcd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhblno',name:'hhblno',dataType:'text'}},{T:1,N:'w2:key',A:{id:'autono',name:'autono',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'mhno',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhmblno',name:'hhmblno',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhio',name:'hhio',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hheta',name:'hheta',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpid',name:'inpid',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpdt',name:'inpdt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'updid',name:'updid',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upddt',name:'upddt',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_houseblList',baseNode:'list',repeatNode:'map',saveRemovedData:'true','ev:ondataload':'scwin.ds_houseblList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'kcomcd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'hhblno',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autono',name:'autono',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'mhno',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmblno',name:'hhmblno',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhio',name:'hhio',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbkgno',name:'hhbkgno',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbkgseq',name:'hhbkgseq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhscd',name:'hhscd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhclosing',name:'hhclosing',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhs1',name:'hhs1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs2',name:'hhs2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs3',name:'hhs3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs4',name:'hhs4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhs5',name:'hhs5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhccd',name:'hhccd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc1',name:'hhc1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc2',name:'hhc2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc3',name:'hhc3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc4',name:'hhc4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc5',name:'hhc5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhncd',name:'hhncd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn1',name:'hhn1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn2',name:'hhn2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn3',name:'hhn3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn4',name:'hhn4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhn5',name:'hhn5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhvslcd',name:'hhvslcd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhvsl',name:'hhvsl',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhvyg',name:'hhvyg',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlodcd',name:'hhlodcd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlodnm',name:'hhlodnm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhdisccd',name:'hhdisccd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhdiscnm',name:'hhdiscnm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhwarecd',name:'hhwarecd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhwarenm',name:'hhwarenm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhwaregb',name:'hhwaregb',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhpkg',name:'hhpkg',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhunitcd',name:'hhunitcd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhunit',name:'hhunit',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhgwgt',name:'hhgwgt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhmsr',name:'hhmsr',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhetd',name:'hhetd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhondt',name:'hhondt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hheta',name:'hheta',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhisudt',name:'hhisudt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'creadyDt',name:'creadyDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhdanggb',name:'hhdanggb',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhpcgb',name:'hhpcgb',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbltype',name:'hhbltype',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhprenm',name:'hhprenm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhstype',name:'hhstype',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhincoterm',name:'hhincoterm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt1type',name:'hhcnt1type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt2type',name:'hhcnt2type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt3type',name:'hhcnt3type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt4type',name:'hhcnt4type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt1',name:'hhcnt1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhcnt2',name:'hhcnt2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhcnt3',name:'hhcnt3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhcnt4',name:'hhcnt4',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhagent',name:'hhagent',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhagentnm',name:'hhagentnm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhagentattn',name:'hhagentattn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhagentattnnm',name:'hhagentattnnm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhactcust',name:'hhactcust',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhactcustnm',name:'hhactcustnm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhactattn',name:'hhactattn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhactattnnm',name:'hhactattnnm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhsales',name:'hhsales',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhsalesnm',name:'hhsalesnm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhliner',name:'hhliner',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlinernm',name:'hhlinernm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlinerattn',name:'hhlinerattn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlinerattnnm',name:'hhlinerattnnm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbuyer',name:'hhbuyer',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbuyernm',name:'hhbuyernm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hharea',name:'hharea',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhareanm',name:'hhareanm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhtriange',name:'hhtriange',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhnomi',name:'hhnomi',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhobl',name:'hhobl',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcoload',name:'hhcoload',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhitem',name:'hhitem',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmitem1',name:'hhmitem1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmitem2',name:'hhmitem2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk1',name:'hhrmk1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk2',name:'hhrmk2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk3',name:'hhrmk3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk4',name:'hhrmk4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrmk5',name:'hhrmk5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmnfgb',name:'hhmnfgb',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhfvsl',name:'hhfvsl',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrcvcd',name:'hhrcvcd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhrcvnm',name:'hhrcvnm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhdlvcd',name:'hhdlvcd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhdlvnm',name:'hhdlvnm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhfdcd',name:'hhfdcd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhfdnm',name:'hhfdnm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhpono',name:'hhpono',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcustvalue',name:'hhcustvalue',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhlcno',name:'hhlcno',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'odrNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'inpid',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'inpdt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'updid',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'upddt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnrggb',name:'hhcnrggb',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnrgno',name:'hhcnrgno',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhntrggb',name:'hhntrggb',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhntrgno',name:'hhntrgno',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pickupdt',name:'pickupdt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pathCd',name:'pathCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pic',name:'pic',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cino',name:'cino',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{id:'ds_houseblMap',baseNode:'map'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'kcomcd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhblno',name:'hhblno',dataType:'text'}},{T:1,N:'w2:key',A:{id:'autono',name:'autono',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'mhno',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhmblno',name:'hhmblno',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhio',name:'hhio',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhbkgno',name:'hhbkgno',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhbkgseq',name:'hhbkgseq',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhscd',name:'hhscd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhclosing',name:'hhclosing',dataType:'number'}},{T:1,N:'w2:key',A:{id:'hhs1',name:'hhs1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhs2',name:'hhs2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhs3',name:'hhs3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhs4',name:'hhs4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhs5',name:'hhs5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhccd',name:'hhccd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhc1',name:'hhc1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhc2',name:'hhc2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhc3',name:'hhc3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhc4',name:'hhc4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhc5',name:'hhc5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhncd',name:'hhncd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhn1',name:'hhn1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhn2',name:'hhn2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhn3',name:'hhn3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhn4',name:'hhn4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhn5',name:'hhn5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhvslcd',name:'hhvslcd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhvsl',name:'hhvsl',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhvyg',name:'hhvyg',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhlodcd',name:'hhlodcd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhlodnm',name:'hhlodnm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhdisccd',name:'hhdisccd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhdiscnm',name:'hhdiscnm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhwarecd',name:'hhwarecd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhwarenm',name:'hhwarenm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhwaregb',name:'hhwaregb',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhpkg',name:'hhpkg',dataType:'number'}},{T:1,N:'w2:key',A:{id:'hhunitcd',name:'hhunitcd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhunit',name:'hhunit',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhgwgt',name:'hhgwgt',dataType:'number'}},{T:1,N:'w2:key',A:{id:'hhmsr',name:'hhmsr',dataType:'number'}},{T:1,N:'w2:key',A:{id:'hhetd',name:'hhetd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhondt',name:'hhondt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hheta',name:'hheta',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhisudt',name:'hhisudt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'creadyDt',name:'creadyDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhdanggb',name:'hhdanggb',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhpcgb',name:'hhpcgb',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhbltype',name:'hhbltype',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhprenm',name:'hhprenm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhstype',name:'hhstype',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhincoterm',name:'hhincoterm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhcnt1type',name:'hhcnt1type',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhcnt2type',name:'hhcnt2type',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhcnt3type',name:'hhcnt3type',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhcnt4type',name:'hhcnt4type',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhcnt1',name:'hhcnt1',dataType:'number'}},{T:1,N:'w2:key',A:{id:'hhcnt2',name:'hhcnt2',dataType:'number'}},{T:1,N:'w2:key',A:{id:'hhcnt3',name:'hhcnt3',dataType:'number'}},{T:1,N:'w2:key',A:{id:'hhcnt4',name:'hhcnt4',dataType:'number'}},{T:1,N:'w2:key',A:{id:'hhagent',name:'hhagent',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhagentnm',name:'hhagentnm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhagentattn',name:'hhagentattn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhagentattnnm',name:'hhagentattnnm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhactcust',name:'hhactcust',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhactcustnm',name:'hhactcustnm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhactattn',name:'hhactattn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhactattnnm',name:'hhactattnnm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhsales',name:'hhsales',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhsalesnm',name:'hhsalesnm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhliner',name:'hhliner',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhlinernm',name:'hhlinernm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhlinerattn',name:'hhlinerattn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhlinerattnnm',name:'hhlinerattnnm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhbuyer',name:'hhbuyer',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhbuyernm',name:'hhbuyernm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hharea',name:'hharea',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhareanm',name:'hhareanm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhtriange',name:'hhtriange',dataType:'number'}},{T:1,N:'w2:key',A:{id:'hhnomi',name:'hhnomi',dataType:'number'}},{T:1,N:'w2:key',A:{id:'hhobl',name:'hhobl',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhcoload',name:'hhcoload',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhitem',name:'hhitem',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhmitem1',name:'hhmitem1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhmitem2',name:'hhmitem2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhrmk1',name:'hhrmk1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhrmk2',name:'hhrmk2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhrmk3',name:'hhrmk3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhrmk4',name:'hhrmk4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhrmk5',name:'hhrmk5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhmnfgb',name:'hhmnfgb',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhfvsl',name:'hhfvsl',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhrcvcd',name:'hhrcvcd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhrcvnm',name:'hhrcvnm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhdlvcd',name:'hhdlvcd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhdlvnm',name:'hhdlvnm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhfdcd',name:'hhfdcd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhfdnm',name:'hhfdnm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhpono',name:'hhpono',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhcustvalue',name:'hhcustvalue',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhlcno',name:'hhlcno',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'odrNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpid',name:'inpid',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpdt',name:'inpdt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'updid',name:'updid',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upddt',name:'upddt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhcnrggb',name:'hhcnrggb',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhcnrgno',name:'hhcnrgno',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhntrggb',name:'hhntrggb',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhntrgno',name:'hhntrgno',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pickupdt',name:'pickupdt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pathCd',name:'pathCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pic',name:'pic',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cino',name:'cino',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ocContList',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'kcomcd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchblno',name:'mchblno',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'mhno',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mccntno',name:'mccntno',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mctype',name:'mctype',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcseal1',name:'mcseal1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcseal2',name:'mcseal2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcpkg',name:'mcpkg',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcpkgcd',name:'mcpkgcd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcwgt',name:'mcwgt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcmsr',name:'mcmsr',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mciso',name:'mciso',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'inpid',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'inpdt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'updid',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'upddt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcpart',name:'mcpart',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_slipTax',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'hhio',name:'hhio',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'hhblno',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'mhno',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'odrNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'intendDt',name:'intendDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'spplyDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'slipNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ocProfitList',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selling',name:'selling',dataType:'number'}},{T:1,N:'w2:column',A:{id:'buying',name:'buying',dataType:'number'}},{T:1,N:'w2:column',A:{id:'profit',name:'profit',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_hitekContents',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'zfblno',name:'zfblno',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_booking',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'docCd',name:'docCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custCd',name:'custCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custNm',name:'custNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custSeq',name:'custSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custMan',name:'custMan',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liner',name:'liner',dataType:'text'}},{T:1,N:'w2:column',A:{id:'linernm',name:'linernm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'linerattn',name:'linerattn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'linerattnnm',name:'linerattnnm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dept',name:'dept',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptnm',name:'deptnm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vslCd',name:'vslCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vslNm',name:'vslNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'voy',name:'voy',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesCd',name:'salesCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesNm',name:'salesNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lodCd',name:'lodCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lodNm',name:'lodNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'disCd',name:'disCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'disNm',name:'disNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dlvCd',name:'dlvCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dlvNm',name:'dlvNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkArea',name:'bkArea',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkAreanm',name:'bkAreanm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkEtd',name:'bkEtd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkEta',name:'bkEta',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payTerm',name:'payTerm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfs',name:'cfs',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcType',name:'svcType',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemCd',name:'itemCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemNm',name:'itemNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pkg',name:'pkg',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unit',name:'unit',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitnm',name:'unitnm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wgt',name:'wgt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'msr',name:'msr',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cnttype1',name:'cnttype1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnttype2',name:'cnttype2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnttype3',name:'cnttype3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnttype4',name:'cnttype4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntqty1',name:'cntqty1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntqty2',name:'cntqty2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntqty3',name:'cntqty3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntqty4',name:'cntqty4',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_bookingNo',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'kcomcd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'bkNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_bookingContainer',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'kcomcd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'bkNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbkgseq',name:'hhbkgseq',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_bkseq',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_hmhno',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_containerType',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_invoiceCheck',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_departmentInfo',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',name:'CODE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NAME',name:'NAME',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_containerReceive',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',name:'CODE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NAME',name:'NAME',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_DeptChangeParam',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'kcomcd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modrNo',name:'modrNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hodrNo',name:'hodrNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dept',name:'dept',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptnm',name:'deptnm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkGb',name:'bulkGb',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'spRtn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'spMsg',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_DeptChangeResult',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spRtn',name:'spRtn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'spMsg',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{id:'ds_condition_path',baseNode:'map'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'hblNo',name:'hblNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhactcust',name:'hhactcust',dataType:'text'}},{T:1,N:'w2:key',A:{id:'path',name:'path',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_result_path',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pathCd',name:'pathCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pathNm',name:'pathNm',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_liner',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cdNm',name:'cdNm',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_tmp',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mccntno',name:'mccntno',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mctype',name:'mctype',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcseal1',name:'mcseal1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcseal2',name:'mcseal2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcpkg',name:'mcpkg',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcpkgcd',name:'mcpkgcd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcwgt',name:'mcwgt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcmsr',name:'mcmsr',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcpart',name:'mcpart',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ExcelInformation',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mccntno',name:'mccntno',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mctype',name:'mctype',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcseal1',name:'mcseal1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcseal2',name:'mcseal2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcpkg',name:'mcpkg',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcpkgcd',name:'mcpkgcd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcwgt',name:'mcwgt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcmsr',name:'mcmsr',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcpart',name:'mcpart',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'filePath',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_customerInfo',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'col2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'col3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'col4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'fileUploadGDS',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'filePath',name:'filePath',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_code_hhstype',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'label',dataType:'string'}},{T:1,N:'w2:column',A:{id:'value',name:'value',dataType:'string'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'value',E:[{T:4,cdata:'CY/CY'}]},{T:1,N:'label',E:[{T:4,cdata:'CY/CY'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'value',E:[{T:4,cdata:'CY/CFS'}]},{T:1,N:'label',E:[{T:4,cdata:'CY/CFS'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'value',E:[{T:4,cdata:'CY/DOOR'}]},{T:1,N:'label',E:[{T:4,cdata:'CY/DOOR'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'value',E:[{T:4,cdata:'CFS/CY'}]},{T:1,N:'label',E:[{T:4,cdata:'CFS/CY'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'value',E:[{T:4,cdata:'CFS/CFS'}]},{T:1,N:'label',E:[{T:4,cdata:'CFS/CFS'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'value',E:[{T:4,cdata:'CFS/DOOR'}]},{T:1,N:'label',E:[{T:4,cdata:'CFS/DOOR'}]}]}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_combo',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_combo","key":"IN_DS1"}',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_code',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_code","key":"IN_DS1"}',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_code_onsubmitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.seainb.sibl.RetrieveSeaImportHouseBlCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',ref:'data:json,[{"key":"IN_DS1","id":"ds_retrieve"},{"key":"OUT_DS1","id":"ds_houseblList"},{"key":"OUT_DS2","id":"ds_ocContList"},{"key":"OUT_DS3","id":"ds_slipTax"},{"key":"OUT_DS4","id":"ds_ocProfitList"},{"key":"OUT_DS5","id":"ds_hitekContents"}]',target:'data:json,[{"key":"OUT_DS1","id":"ds_houseblList"},{"key":"OUT_DS2","id":"ds_ocContList"},{"key":"OUT_DS3","id":"ds_slipTax"},{"key":"OUT_DS4","id":"ds_ocProfitList"},{"key":"OUT_DS5","id":"ds_hitekContents"}                 ]','ev:submitdone':'scwin.sbm_retrieve_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBooking',action:'/il.seainb.sibl.RetrieveBookingCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',ref:'data:json,[{"key":"IN_DS1","id":"ds_bookingNo"},{"key":"OUT_DS1","id":"ds_booking"}]',target:'data:json,[{"key":"OUT_DS1","id":"ds_booking"}]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveContainer',action:'/il.seainb.sibl.RetrieveBookingContainerCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',ref:'data:json,[{"key":"IN_DS1","id":"ds_bookingContainer"},{"key":"OUT_DS1","id":"ds_ocContList"}]',target:'data:json,[{"key":"OUT_DS1","id":"ds_ocContList"}]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.seainb.sibl.SaveHouseBlCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',ref:'data:json,[{"key":"IN_DS1","id":"ds_houseblList"},{"key":"IN_DS2","id":"ds_ocContList"}]',target:'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/il.seainb.sibl.DeleteHouseBlCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',ref:'data:json,[{"key":"IN_DS1","id":"ds_houseblList"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_deptChange',action:'/il.comm.util.CoSeaDeptChangeCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',ref:'data:json,[{"key":"IN_DS1","id":"ds_DeptChangeParam"},{"key":"OUT_DS1","id":"ds_DeptChangeResult"}]',target:'data:json,[{"key":"OUT_DS1","id":"ds_DeptChangeResult"}]','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_path',action:'/il.seaout.sobl.RetrievePathCdByHblnoCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',ref:'data:json,[{"key":"IN_DS1","id":"ds_condition_path"},{"key":"OUT_DS1","id":"ds_result_path"}]',target:'data:json,[{"key":"OUT_DS1","id":"ds_result_path"}]','ev:submiterror':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/js/il/ilcommon.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : se_201_01_01b
// 이름     : House B/L Regist
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

scwin.statusFlag = ""; // C:Regist, U:Update, I:Init
scwin.processFlag = "";
scwin.invoiceCheck = "0";
scwin.mhnoFlag = "0";
scwin.v_linkcheck = null;
scwin.v_kcomcd = null;
scwin.v_blno = null;
scwin.v_mhno = null;
scwin.v_bkno = null;
scwin.tab_gb = "";
scwin.strCurDate = ""; // 서버일자
scwin.userId = "";
scwin.hd_kcomcd = "DBEX";
scwin.hd_hhio = "I";

// Gauce 메시지 상수
var MSG_LO_WRN_007 = "Customer와 Dept가 일치하지 않습니다. \n운송처리 담당과 해당 화면에서 내용을 확인하십시오.";
var MSG_LO_WRN_008 = "이미 처리된 전표로 변경이 불가능 합니다.";
var MSG_LO_WRN_009 = "Department 가 변경되었습니다.";

// onpageload
scwin.onpageload = function () {};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  var codeOptions = [
  // 예: Incoterms
  {
    grpCd: "IL005",
    compID: "lc_hhincoterm"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $p.setTimeout(function () {
    scwin.v_linkcheck = $c.data.getParameter($p, "linkcheck") || "0";
    scwin.v_kcomcd = $c.data.getParameter($p, "kcomcd") || "DBEX";
    scwin.v_blno = $c.data.getParameter($p, "blno") || "";
    scwin.v_mhno = $c.data.getParameter($p, "mhno") || "";
    scwin.v_bkno = $c.data.getParameter($p, "bkno") || "";
    // 서버일자
    scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");

    // 세션 사용자
    scwin.userId = $c.data.getMemInfo($p, "userId") || "";
    scwin.f_initSetTab();
    scwin.f_DefaultValue();
    scwin.f_Check();
    scwin.f_ContainerTypeLoading();
    scwin.f_getParametrSetting(scwin.v_linkcheck);
    // scwin.f_header();
  }, {
    "delay": 50
  });
};

// Parameter Setting
scwin.f_getParametrSetting = function (gubun) {
  switch (gubun) {
    case "0":
      break;
    case "1": // Booking에서 Search Grid
    case "2":
      // House Search
      scwin.mhnoFlag = "1";
      if ($c.util.isEmpty($p, scwin.v_blno)) {
        cnd_ed_hhblno.setValue("");
        cnd_ed_hhblno.focus();
        return false;
      }
      scwin.hd_kcomcd = scwin.v_kcomcd;
      cnd_ed_hhblno.setValue(scwin.v_blno);
      if (ds_hmhno.getRowCount() === 0) {
        ds_hmhno.insertRow(0);
        ds_hmhno.setRowPosition(0);
      }
      ds_hmhno.setCellData(0, "code", scwin.v_mhno);
      ds_hmhno.setCellData(0, "name", scwin.v_mhno);
      scwin.ds_hmhno_ondataload();
      cnd_lc_mhno.focus();
      break;
    case "4":
      // Booking 화면에서 h b/l 버튼 (create)
      scwin.f_Create();
      ed_hhbkgno.setValue(scwin.v_bkno);
      cnd_ed_hhblno.focus();
      scwin.cfViewTab(0); // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
      ed_hhbkgno.focus(); // 값 넣어주기 위해.
      ed_hheta.focus(); // etd값 반영.
      lc_hhbkgseq.focus();

      //2020.02.27 국제영업3팀 개선사항 : 부킹에 등록된 ITEM 없을 경우 자동으로 30000000 (일반화물) 으로 기입 처리
      if ($c.util.isEmpty($p, ed_hhitem.getValue())) {
        ed_hhitem.setValue("30000000");
        scwin.f_OpenCommonPopUp("Item", "T", "F", "F");
      }

      // B/L PIC code input
      txt_blpic.setValue("");
      if ($c.util.isEmpty($p, ed_blpic.getValue())) {
        ed_blpic.setValue(scwin.userId);
        scwin.f_PopUp("B/L PIC", "T");
      }
      break;
  }
};

// Object Check
scwin.f_Check = function () {
  function setDefaults() {
    cnd_lc_autono.setSelectedIndex(1); //1);
    cnd_lc_mhno.setSelectedIndex(0);
    lc_hhbltype.setSelectedIndex(0);
    lc_hhpcgb.setSelectedIndex(0);
    lc_hhstype.setSelectedIndex(0);
    lc_hhcoload.setSelectedIndex(0);
    ed_hhcnt1type.setValue("22GP");
    ed_hhcnt2type.setValue("42GP");
    ed_hhcnt3type.setValue("45GP");
    ed_hhobl.setValue("3");
    chb_hhtriange.setValue("N");
    chb_hhnomi.setValue("N");
    rd_hhdanggb.setValue("N");
    rd_hhmnfgb.setValue("I");
    rd_hhcnrggb.setValue("I");
    rd_hhntrggb.setValue("I");
  }
  if (scwin.statusFlag === "I" || scwin.statusFlag === "C") {
    setDefaults();
  }
};

// 초기값 세팅
scwin.f_DefaultValue = function () {
  if (ds_bookingNo.getRowCount() === 0) ds_bookingNo.insertRow(0);
  if (ds_bookingContainer.getRowCount() === 0) ds_bookingContainer.insertRow(0);
  if (ds_hmhno.getRowCount() === 0) ds_hmhno.insertRow(0);
  if (ds_tmp.getRowCount() === 0) ds_tmp.insertRow(0);
  scwin.f_Set("INIT");
  scwin.cfViewTab(0); // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
  cnd_ed_hhblno.focus();
};

// Tab 초기화
scwin.f_initSetTab = function () {
  // JSP: cfEnableObjects([tr_tab_center0, tr_tab_center1]); cfViewTab(0);
  scwin.cfViewTab(0);
};
scwin.cfViewTab = function (idx) {
  tbc_main.setSelectedTabIndex(idx);
};

// Tab 선택
scwin.f_selectTabMenu = function (idx) {
  scwin.tab_gb = idx;
  scwin.cfViewTab(idx);
  if (idx === 1) {
    scwin.f_divDefault();
  } else {
    scwin.f_divDefault();
  }
};
scwin.f_setDisabledComp = function (flag) {
  lc_hhbkgseq.setDisabled(flag);
  lc_hhincoterm.setDisabled(flag);
  lc_pathCd.setDisabled(flag);
  ed_hhpkg.setDisabled(flag);
  ed_hhetd.setDisabled(flag);
  lc_hhpcgb.setDisabled(flag);
  lc_hhbltype.setDisabled(flag);
  lc_hhstype.setDisabled(flag);
  txt_cino.setDisabled(flag);
  lc_hhincoterm.setDisabled(flag);
  rd_hhdanggb.setDisabled(flag);
  ed_hhobl.setDisabled(flag);
};

// 화면 상태 세팅
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      $c.gus.cfDisableKeyData($p);
      scwin.f_setDisabledComp(true);
      $c.gus.cfDisableBtnOnly($p, [btn_Copy, btn_Cancel, btn_FileDownload, btn_Save, btn_Delete, btn_Update, btn_1, btn_2, btn_3, btn_4, btn_5, btn_6, btn_7, btn_8, btn_11, btn_blpic, btn_AddRow1, btn_AddCntr, btn_DelRow1, btn_DelRow2, btn_CancelRow1, pu_departmentChange, txt_hhmitem1]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_9]);
      scwin.f_DisablePopUpObj();
      $c.gus.cfEnableObjects($p, [tbl_search]);
      scwin.statusFlag = "I";
      break;
    case "RETRIEVE":
      $c.gus.cfDisableKeyData($p);
      scwin.f_DisablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel, btn_AddRow1, btn_AddCntr, btn_DelRow1, btn_DelRow2, btn_CancelRow1, txt_hhmitem1]);
      $c.gus.cfEnableBtnOnly($p, [btn_search, btn_Clear, btn_Copy, btn_Create, btn_Delete, btn_FileDownload, btn_4, btn_5, btn_6, btn_7, btn_8, btn_9, btn_10, btn_11, pu_departmentChange]);

      // 그리드 readOnly : 수정 불가 
      scwin.f_setGridColumnsReadOnly(gr_ocContList, true);
      if (scwin.statusFlag === "C") {
        $c.gus.cfDisableBtnOnly($p, [btn_Update]);
      } else {
        $c.gus.cfEnableBtnOnly($p, [btn_Update]);
      }
      $c.gus.cfEnableObjects($p, [tbl_search]);
      scwin.statusFlag = "";
      break;
    case "CREATE":
      $c.gus.cfEnableKeyData && $c.gus.cfEnableKeyData($p);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Copy, btn_Create, btn_Update, btn_Delete, btn_4, btn_5, btn_6, btn_7, btn_8, btn_11, pu_departmentChange, txt_hhmitem1]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_FileDownload, btn_1, btn_2, btn_3, btn_9, btn_AddRow1, btn_AddCntr, btn_DelRow1, btn_DelRow2, btn_CancelRow1]);
      // 그리드 editable
      scwin.f_setGridColumnsReadOnly(gr_ocContList, false);
      $c.gus.cfDisableObjects($p, [tbl_search]);
      // 검색조건 일부 enable
      $c.gus.cfEnableObjects($p, [cnd_ed_hhblno, cnd_lc_autono, lc_hhbkgseq]);
      scwin.statusFlag = "C";
      break;
    case "UPDATE":
      $c.gus.cfDisableBtnOnly($p, [btn_Copy, btn_Update, btn_Create, btn_Delete, btn_4, btn_5, btn_6, btn_7, btn_8, btn_11, btn_search, txt_hhmitem1, pu_departmentChange]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_FileDownload, btn_1, btn_2, btn_3, btn_9, btn_AddRow1, btn_AddCntr, btn_DelRow1, btn_DelRow2, btn_CancelRow1]);
      $c.gus.cfDisableKey($p);
      scwin.f_EnablePopUpObj();
      // 그리드 editable
      // scwin.f_setGridColumnsReadOnly(gr_ocContList, false);
      // dsObj = gr_ocContList.dataList;
      // for (var i = 0; i < dsObj.getTotalRow(); i++) {
      //     if (dsObj.getRowStatus(i) == "R") gr_ocContList.setCellReadOnly(i, "mccntno", true);
      // }

      $c.gus.cfDisableObjects($p, [udc_hhbuyer, btn_Clear]);

      // mccntno
      $c.gus.cfDisableObjects($p, [tbl_search]);
      scwin.statusFlag = "U";
      break;
    case "SAVE":
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Delete, btn_Cancel, btn_FileDownload]);
      $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Create]);
      scwin.f_Set("RETRIEVE");
      break;
  }
};
//-------------------------------------------------------------------------
// PopUp 이미지를 활성화 시킨다.
//-------------------------------------------------------------------------
scwin.f_EnablePopUpObj = function () {
  $c.gus.cfEnableObjects($p, [ed_pickupdt, ed_hhondt, ed_hheta, ed_hhisudt, ed_creadyDt]);
  $c.gus.cfEnableObjects($p, [btn_popHhscd, btn_popHhscd, btn_popHhncd, btn_hhvslcd, btn_hhlodcd, btn_hhdisccd, btn_hhunitcd, btn_blpic, btn_hhagent, btn_hhagentattn, btn_hhactcust, btn_hhactattn, btn_hhsales, btn_hhliner, btn_hhlinerattn, btn_hhbuyer, btn_hhwarecd, btn_hhitem, btn_hhrcvcd, btn_hhdlvcd, btn_hhfdcd, btn_popHhcnt1type, btn_popHhcnt2type, btn_popHhcnt3type, btn_popHhcnt4type]);
};

// PopUp 이미지 disable
scwin.f_DisablePopUpObj = function () {
  $c.gus.cfDisableObjects($p, [ed_pickupdt, ed_hhondt, ed_hheta, ed_hhisudt, ed_creadyDt]);
  $c.gus.cfDisableObjects($p, [btn_popHhscd, btn_popHhscd, btn_popHhncd, btn_hhvslcd, btn_hhlodcd, btn_hhdisccd, btn_hhunitcd, btn_hhagent, btn_hhagentattn, btn_hhactcust, btn_hhactattn, btn_hhsales, btn_hhliner, btn_hhlinerattn, btn_hhbuyer, btn_hhwarecd, btn_hhitem, btn_hhrcvcd, btn_hhdlvcd, btn_hhfdcd, btn_popHhcnt1type, btn_popHhcnt2type, btn_popHhcnt3type, btn_popHhcnt4type]);
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

//---------------------------------------------------------
// 조회
//---------------------------------------------------------
scwin.f_Retrieve = async function () {
  if ($c.util.isEmpty($p, cnd_ed_hhblno.getValue())) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["House No"]);
    return;
  }
  cnd_lc_mhno.focus(); // B/L No 빠져나올때 event처리 .

  ds_retrieve.set("kcomcd", scwin.hd_kcomcd);
  ds_retrieve.set("mhno", cnd_lc_mhno.getValue());
  ds_retrieve.set("hhio", scwin.hd_hhio);

  // Booking Seq 초기화
  ds_bkseq.removeAll();
  ds_bkseq.insertRow(0);
  ds_bkseq.setRowPosition(0);
  await $c.sbm.execute($p, sbm_retrieve);
};

// 조회 후 필드 클리어
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [cnd_ed_hhblno, cnd_ed_hhmblno]);
  cnd_lc_autono.setSelectedIndex(1); //입력 COMBO
  ds_hmhno.removeAll(); // DATASET COMBO
};

// 신규
scwin.f_Create = async function () {
  scwin.f_FieldClear();
  ds_hmhno.removeAll();
  ds_hmhno.insertRow(0);
  ds_houseblList.setJSON([]);
  ds_houseblList.insertRow();
  ds_ocContList.removeAll();
  ds_slipTax.removeAll();
  ds_ocProfitList.removeAll();
  ds_hitekContents.removeAll();
  ds_bkseq.removeAll();

  // 검색조건 enable
  $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
  $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
  scwin.f_Set("CREATE");
  scwin.f_Check();
  cnd_ed_hhblno.focus();
  ed_hhcnt1.setValue("0");
  ed_hhcnt2.setValue("0");
  ed_hhcnt3.setValue("0");
  ed_hhcnt4.setValue("0");
  ed_hhitem.setValue("30000000");
  await scwin.f_OpenCommonPopUp("Item", "T", "F", "F");
  txt_blpic.setValue("");
  //기본으로 등록자 ID 기입 처리
  if ($c.util.isEmpty($p, txt_blpic.getValue())) {
    ed_blpic.setValue(scwin.userId);
    scwin.f_PopUp("B/L PIC", "T");
  }
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = async function () {
  if ($c.util.isEmpty($p, ed_hhetd.getValue())) {
    // 등록 화면에 필수인 ETD를 기준으로 잡았음.
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003); //  해당되는 자료가 존재하지 않습니다
    return;
  }
  scwin.f_Set("UPDATE");
  await scwin.f_invoiceCheck();
  // btn_hhbuyer
  $c.gus.cfDisableObjects($p, [ed_hhbuyer, txt_hhbuyernm, btn_hhbuyer]);
};

//---------------------------------------------------------
// 저장
//---------------------------------------------------------
scwin.bJson = null;
scwin.f_Save = async function () {
  // 변경 여부 체크: WebSquare에서는 dataList.isUpdated() 사용
  if (scwin.bJson == null) scwin.bJson = ds_houseblList.getRowJSON(0);
  ds_houseblList.setRowJSON(0, ds_houseblMap.getJSON(), true);
  if (JSON.stringify(scwin.bJson) == JSON.stringify(ds_houseblList.getRowJSON(0)) && ds_ocContList.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_001, ["House B/L"]); // @은(는) 변경된 사항이 없습니다
    return;
  }
  if (!(await scwin.f_validate())) {
    return;
  }
  if (scwin.statusFlag === "U" && ds_hitekContents.getRowCount() > 0) {
    await $c.gus.cfAlertMsg($p, cnd_ed_hhblno.getValue() + " : " + '동부하이텍 인터페이스');
  }
  if (!(await $c.win.confirm($p, E_MSG_CM_CRM_001))) {
    // "저장하시겠습니까?"
    return;
  }
  if (scwin.statusFlag === "C") {
    // DBEX
    if ($c.util.isEmpty($p, cnd_ed_hhblno.getValue())) {
      $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["House No"]); // @은(는) 필수 입력 항목입니다.
      return;
    }
    var r = ds_houseblList.getRowPosition() || 0;
    ds_houseblList.setCellData(r, "kcomcd", scwin.hd_kcomcd || "DBEX");
    ds_houseblList.setCellData(r, "hhblno", cnd_ed_hhblno.getValue());
    ds_houseblList.setCellData(r, "hhbkgseq", lc_hhbkgseq.getValue());
    ds_houseblList.setCellData(r, "mhno", cnd_lc_mhno.getValue());
    ds_houseblList.setCellData(r, "hhio", scwin.hd_hhio);
    ds_houseblList.setCellData(r, "inpid", scwin.userId);
    for (var i = 0; i < ds_ocContList.getRowCount(); i++) {
      ds_ocContList.setCellData(i, "kcomcd", scwin.hd_kcomcd || "DBEX");
      ds_ocContList.setCellData(i, "mchblno", cnd_ed_hhblno.getValue()); //update일때.
      ds_ocContList.setCellData(i, "mhno", cnd_lc_mhno.getValue()); //update일때.
      ds_ocContList.setCellData(i, "inpid", scwin.userId);
      ds_ocContList.modifyRowStatus(i, "C"); // 1;  // insert 로 변경.
    }

    // 특정 customer 에 대한 Hitek 필수 체크
    var customer = ds_houseblList.getCellData(r, "hhactcust");
    if (customer === "125305" || customer === "125283") {
      if (!scwin.f_HiDataCheck()) return;
    }
  }

  // Booking Seq 필수
  if ($c.util.isEmpty($p, lc_hhbkgseq.getValue())) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Booking Seq"]);
    return;
  }

  // Shipper/Consignee/Notify 길이 체크
  if (txt_hhs1.getValue().length > 100) {
    await $c.win.alert($p, "Shipper명을 100자리를 초과하여 입력하면 EDI전송이 안됩니다. 100자리 이하로 맞춰주세요 \n 현재 자리수 : " + txt_hhs1.getValue().length);
    txt_hhs1.focus();
    return;
  }
  if (txt_hhc1.getValue().length > 100) {
    await $c.win.alert($p, "Consignee명을 100자리를 초과하여 입력하면 EDI전송이 안됩니다. 100자리 이하로 맞춰주세요 \n 현재 자리수 : " + txt_hhc1.getValue().length);
    txt_hhc1.focus();
    return;
  }
  if (txt_hhn1.getValue().length > 100) {
    await $c.win.alert($p, "Notify명을 100자리를 초과하여 입력하면 EDI전송이 안됩니다. 100자리 이하로 맞춰주세요 \n 현재 자리수 : " + txt_hhn1.getValue().length);
    txt_hhn1.focus();
    return;
  }

  //두줄이 글자가 쓰여있어야 EDI전송이 가능하므로 체크  sh1004dd
  if ($c.util.isEmpty($p, txt_hhs1.getValue()) || $c.util.isEmpty($p, txt_hhs2.getValue())) {
    await $c.win.alert($p, "Shipper명을 두 줄로 입력하지 않으면 EDI전송이 안됩니다. \n 두줄에 입력해주세요");
    txt_hhs1.focus();
    return false;
  }
  if ($c.util.isEmpty($p, txt_hhc1.getValue()) || $c.util.isEmpty($p, txt_hhc2.getValue())) {
    await $c.win.alert($p, "Consignee명을 두 줄로 입력하지 않으면 EDI전송이 안됩니다. \n 두줄에 입력해주세요");
    txt_hhc1.focus();
    return false;
  }

  // B/L PIC값이 없을때 등록자 아이디로 입력(PIC값이 null되는걸 방지)
  if ($c.util.isEmpty($p, ed_blpic.getValue())) {
    txt_blpic.setValue("");
    ds_houseblList.setCellData(0, "pic", scwin.userId);
  }
  await $c.sbm.execute($p, sbm_save);
};

//-------------------------------------------------------------------------
// 동부하이텍 필수항목 체크
//-------------------------------------------------------------------------
scwin.f_HiDataCheck = async function () {
  if ($c.util.isEmpty($p, ed_hheta.getValue())) {
    // ETA
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Dongbu Hitek : ETA"]);
    ed_hheta.focus();
    return false;
  }
  if ($c.util.isEmpty($p, ed_hhetd.getValue())) {
    // ETD
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Dongbu Hitek : ETD"]);
    ed_hhetd.focus();
    return false;
  }
  if ($c.util.isEmpty($p, ed_pickupdt.getValue())) {
    // PICKUP
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Dongbu Hitek : PICKUP DATE"]);
    ed_pickupdt.focus();
    return false;
  }
  if ($c.util.isEmpty($p, txt_hhpono.getValue())) {
    // Purchase Order NO
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Dongbu Hitek : Purchase Order NO"]);
    cfViewTab(1);
    txt_hhpono.focus();
    return false;
  }
  if ($c.util.isEmpty($p, ed_hhdisccd.getValue())) {
    // Discharge Code
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Dongbu Hitek : Discharge Code"]);
    ed_hhdisccd.focus();
    return false;
  }
  if ($c.util.isEmpty($p, ed_hhlodcd.getValue())) {
    // Loading Code
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Dongbu Hitek : Loading Code"]);
    ed_hhlodcd.focus();
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  // 검색조건 enable
  $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
  $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
  cnd_ed_hhblno.focus();
  if (scwin.statusFlag === "C") {
    scwin.f_Set("INIT");
  } else {
    scwin.f_Set("RETRIEVE");
    ds_houseblList.undoAll();
    scwin.f_cancelRow(1);
  }
};

//-------------------------------------------------------------------------------
//  Copy
//-------------------------------------------------------------------------------
scwin.f_Copy = function () {
  scwin.f_FieldClear();
  ds_hmhno.removeAll();
  ds_hmhno.insertRow(0);
  $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
  $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
  scwin.f_Set("CREATE");
  scwin.f_Check();
  if (ds_houseblList.getRowCount() != 0) {
    // UserStatus=1 → 신규로 간주
    ds_houseblList.modifyRowStatus(0, "C"); // insert 로 변경.
  }
  if ($c.util.isEmpty($p, ed_hhactcust.getValue())) {
    if (!$c.util.isEmpty($p, ed_hhccd.getValue())) {
      ed_hhactcust.setValue(ed_hhccd.getValue());
      scwin.f_PopUp('Customer', 'T');
    } else if (!$c.util.isEmpty($p, ed_hhncd.getValue())) {
      ed_hhactcust.setValue(ed_hhncd.getValue());
      scwin.f_PopUp('Customer', 'T');
    }
  }
  txt_blpic.setValue("");
  ed_creadyDt.setValue("");

  //기본으로 등록자 ID 기입 처리
  if ($c.util.isEmpty($p, ed_blpic.getValue())) {
    ed_blpic.setValue(scwin.userId);
    scwin.f_PopUp("B/L PIC", "T");
  }
};

//---------------------------------------------------------
// 삭제
//---------------------------------------------------------
scwin.f_Delete = async function () {
  // await scwin.f_invoiceCheck();
  if (scwin.invoiceCheck === "1") {
    // $c.gus.cfAlertMsg(E_MSG_CM_ERR_041, ["Invoice No", "delete"]);
    $c.win.alert($p, "Invoice No operation cannot be performed for delete.");
    return;
  }

  //동부 하이텍 인터페이스의 경우 수정에는 에러메세지만 뿌림
  if (ds_hitekContents.getRowCount() > 0) {
    await $c.gus.cfAlertMsg($p, cnd_ed_hhblno.getValue() + " : " + '동부하이텍 인터페이스');
  }
  var ok = await $c.win.confirm($p, E_MSG_CM_CRM_004); //삭제하시겠습니까?
  if (!ok) return;
  if (cnd_lc_mhno.getValue() != "NONE") {
    $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_011, ["Document No"]); // 이미 존재하는 @입니다.
    return;
  }
  $c.sbm.execute($p, sbm_delete);
};

// null 체크 helper
scwin.isEmpty = function (value) {
  if (value == null || value === "") return 0;
  return parseFloat(value);
};

// 파일 다운로드 (첨부 조회 팝업)
scwin.f_FileDownload = async function () {
  // JSP: window.showModalDialog("/il/common/jsp/ilCommonFilePopup.jsp?houseNo="+cnd_ed_hhblno.Text,...)

  var url = "/ui/il/common/xml/ilCommonFilePopup.xml";
  var opts = {
    id: "ilCommonFilePopup",
    popupName: "첨부파일관리",
    modal: true,
    type: "browserPopup",
    width: 870,
    height: 630,
    title: "첨부파일관리"
  };
  await $c.win.openPopup($p, url, opts, {
    houseNo: cnd_ed_hhblno.getValue()
  });
};

// Auto Container Info
scwin.f_addCntr = function () {
  var hhcnt1 = scwin.isEmpty(ed_hhcnt1.getValue());
  var hhcnt2 = scwin.isEmpty(ed_hhcnt2.getValue());
  var hhcnt3 = scwin.isEmpty(ed_hhcnt3.getValue());
  var hhcnt4 = scwin.isEmpty(ed_hhcnt4.getValue());
  var hhcnt = parseInt(hhcnt1 + hhcnt2 + hhcnt3 + hhcnt4, 10);
  var hhpkg = parseInt(scwin.isEmpty(ed_hhpkg.getValue()) / hhcnt);
  var hhgwgt = (scwin.isEmpty(ed_hhgwgt.getValue()) / hhcnt).toFixed(3);
  var hhmsr = (scwin.isEmpty(ed_hhmsr.getValue()) / hhcnt).toFixed(3);
  var hhpkgSum = 0,
    hhgwgtSum = 0,
    hhmsrSum = 0,
    cntSum = 1;
  function addRows(cnt, typeVal) {
    for (var i = 0; i < cnt; i++) {
      var r = ds_ocContList.insertRow(ds_ocContList.getRowCount());
      ds_ocContList.setCellData(r, "kcomcd", scwin.hd_kcomcd);
      ds_ocContList.setCellData(r, "mchblno", cnd_ed_hhblno.getValue());
      ds_ocContList.setCellData(r, "mhno", cnd_lc_mhno.getValue());
      ds_ocContList.setCellData(r, "inpid", scwin.userId);
      ds_ocContList.setCellData(r, "mctype", typeVal);
      ds_ocContList.setCellData(r, "mcpkgcd", ed_hhunitcd.getValue());
      ds_ocContList.setCellData(r, "mcpkg", hhpkg);
      ds_ocContList.setCellData(r, "mcwgt", hhgwgt);
      ds_ocContList.setCellData(r, "mcmsr", hhmsr);
      gr_ocContList.setCellReadOnly(r, "mccntno", false);
      gr_ocContList.setCellReadOnly(r, "mctype", false);
      gr_ocContList.setCellReadOnly(r, "mcseal1", false);
      gr_ocContList.setCellReadOnly(r, "mcseal2", false);
      gr_ocContList.setCellReadOnly(r, "mcpkg", false);
      gr_ocContList.setCellReadOnly(r, "mcpkgcd", false);
      gr_ocContList.setCellReadOnly(r, "mcwgt", false);
      gr_ocContList.setCellReadOnly(r, "mcmsr", false);
      gr_ocContList.setCellReadOnly(r, "mciso", false);
      if (cntSum !== hhcnt) {
        hhpkgSum += scwin.isEmpty(hhpkg);
        hhgwgtSum += scwin.isEmpty(hhgwgt);
        hhmsrSum += scwin.isEmpty(hhmsr);
      }
      cntSum++;
    }
  }
  if (ed_hhcnt1type.getValue() != "") addRows(hhcnt1, ed_hhcnt1type.getValue());
  if (ed_hhcnt2type.getValue() != "") addRows(hhcnt2, ed_hhcnt2type.getValue());
  if (ed_hhcnt3type.getValue() != "") addRows(hhcnt3, ed_hhcnt3type.getValue());
  if (ed_hhcnt4type.getValue() != "") addRows(hhcnt4, ed_hhcnt4type.getValue());
  var last = ds_ocContList.getRowCount() - 1;
  if (last >= 0) {
    ds_ocContList.setCellData(last, "mcpkg", scwin.isEmpty(ed_hhpkg.getValue()) - hhpkgSum);
    ds_ocContList.setCellData(last, "mcwgt", scwin.isEmpty(ed_hhgwgt.getValue()) - hhgwgtSum);
    ds_ocContList.setCellData(last, "mcmsr", scwin.isEmpty(ed_hhmsr.getValue()) - hhmsrSum);
  }
};

// Dataset Debug
scwin.dataSetDebug = function (dataList, isDebug) {
  if (!isDebug) return;
  var obj = dataList;
  var str = "[[[[" + obj.id + "]]]]\n";
  for (var r = 0; r < obj.getRowCount(); r++) {
    var cols = obj.getColumnNames();
    for (var i = 0; i < cols.length; i++) {
      var cid = cols[i];
      str += "[" + cid + "] " + obj.getValue(r, cid) + ", ";
    }
    str += "\n\n";
  }
  $c.win.alert($p, str);
};

//---------------------------------------------------------
//행추가
//---------------------------------------------------------
scwin.f_addRow = function () {
  var disGubun = 1;
  switch (disGubun) {
    case 1:
      if ($c.util.isEmpty($p, cnd_ed_hhblno.getValue())) {
        $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
        return;
      }
      var r = ds_ocContList.insertRow(ds_ocContList.getRowCount());
      for (var i = 0; i < gr_ocContList.getTotalCol(); i++) {
        gr_ocContList.setCellReadOnly(r, i, false);
      }
      ds_ocContList.setCellData(r, "kcomcd", scwin.hd_kcomcd);
      ds_ocContList.setCellData(r, "mchblno", cnd_ed_hhblno.getValue());
      ds_ocContList.setCellData(r, "mhno", cnd_lc_mhno.getValue() || "");
      ds_ocContList.setCellData(r, "inpid", scwin.userId);
      ds_ocContList.setCellData(r, "mcpkg", 0);
      ds_ocContList.setCellData(r, "mcwgt", 0);
      ds_ocContList.setCellData(r, "mcmsr", 0);
      ds_ocContList.setCellData(r, "mcpkgcd", ed_hhunitcd.getValue());
      gr_ocContList.setFocusedCell(r, "mccntno", true);
      break;
  }
};

//---------------------------------------------------------
// 행삭제
//---------------------------------------------------------
scwin.f_deleteRow = function (disGubun) {
  switch (disGubun) {
    case 1:
      var r = ds_ocContList.getRowPosition() || 0;
      if (r >= 0) {
        if (ds_ocContList.getRowStatus(r) == "C") {
          ds_ocContList.removeRow(r);
        } else {
          ds_ocContList.deleteRow(r);
        }
      }
      break;
    case 2:
      for (var i = 0; i < ds_ocContList.getTotalRow(); i++) {
        if (ds_ocContList.getRowStatus(i) == "C") {
          ds_ocContList.removeRow(i);
        } else {
          ds_ocContList.deleteRow(i);
        }
      }
      break;
  }
};
// 행삭제 한건
scwin.f_deleteRow1 = function () {
  scwin.f_deleteRow(1);
};
// 행삭제 전체
scwin.f_deleteRowAll = function () {
  scwin.f_deleteRow(2);
};
//---------------------------------------------------------
// 행취소
//---------------------------------------------------------
scwin.f_cancelRow = function () {
  var disGubun = 1;
  if (disGubun === 1) {
    ds_ocContList.undoAll();
    for (var i = ds_ocContList.getTotalRow() - 1; i >= 0; i--) {
      if (ds_ocContList.getRowStatus(i) == "C") {
        ds_ocContList.removeRow(i);
      }
    }
  }
};

//---------------------------------------------------------
// function name : f_validate
// function desc :
//---------------------------------------------------------
scwin.f_validate = async function () {
  // VALIDATE
  if (!(await $c.gus.cfValidate($p, [ed_hhetd, ed_hhondt, ed_hheta, ed_hhisudt]))) {
    //validExp 가 yes일때 check , ed_creadyDt
    return false;
  }

  // Booking No
  if ($c.util.isEmpty($p, ed_hhbkgno.getValue())) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Booking No"]);
    scwin.cfViewTab(0); // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
    ed_hhbkgno.focus();
    return false;
  }
  if ($c.util.isEmpty($p, lc_hhbkgseq.getValue())) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Seq"]);
    scwin.cfViewTab(0);
    lc_hhbkgseq.focus();
    return false;
  }
  if ($c.util.isEmpty($p, ed_hheta.getValue())) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["ETA"]);
    scwin.cfViewTab(0);
    ed_hheta.focus();
    return false;
  }
  if ($c.util.isEmpty($p, ed_creadyDt.getValue())) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Result Date"]);
    scwin.cfViewTab(0);
    ed_creadyDt.focus();
    return false;
  }

  // ETD가 저장일로부터 3개월 초과 미래 불가
  if ($c.gus.cfMonthsBetween($p, scwin.strCurDate.toDate(), ed_hhetd.getValue().toDate()) > 3) {
    await $c.win.alert($p, "ETD가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없습니다.");
    scwin.cfViewTab(0);
    ed_hhetd.focus();
    return false;
  }

  // ETA가 저장일로부터 3개월 초과 미래 불가
  if ($c.gus.cfMonthsBetween($p, scwin.strCurDate.toDate(), ed_hheta.getValue().toDate()) > 3) {
    await $c.win.alert($p, "ETA가 저장하는 날짜로 부터 3개월 이상의 미래일 수 없습니다.");
    scwin.cfViewTab(0);
    ed_hheta.focus();
    return false;
  }

  // ETD가 3년 초과 과거 불가
  if ($c.gus.cfYearsBetween($p, ed_hhetd.getValue().toDate(), scwin.strCurDate.toDate()) > 3) {
    await $c.win.alert($p, "ETD가 3년 이상의 과거 일 수 없습니다.");
    scwin.cfViewTab(0);
    ed_hhetd.focus();
    return false;
  }

  // ETA가 3년 초과 과거 불가
  if ($c.gus.cfYearsBetween($p, ed_hheta.getValue().toDate(), scwin.strCurDate.toDate()) > 3) {
    await $c.win.alert($p, "ETA가 3년 이상의 과거 일 수 없습니다.");
    scwin.cfViewTab(0);
    ed_hheta.focus();
    return false;
  }

  // ETA-ETD(transit time) 150일 초과 불가 (ETA-ETD + 1 <= 150  =>  (ETA-ETD) <= 149)
  if (WebSquare.date.dateDiff(ed_hhetd.getValue(), ed_hheta.getValue()) > 149) {
    await $c.win.alert($p, "ETA-ETD(transit time)가 150일을 초과할 수 없습니다.");
    scwin.cfViewTab(0);
    ed_hhetd.focus();
    return false;
  }
  if ($c.util.isEmpty($p, ed_hhbuyer.getValue())) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Department"]);
    scwin.cfViewTab(0);
    ed_hhbuyer.focus();
    return false;
  }
  if ($c.util.isEmpty($p, ed_hhitem.getValue())) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Item"]);
    scwin.cfViewTab(0);
    ed_hhitem.focus();
    return false;
  }
  if ($c.util.isEmpty($p, txt_hhmitem1.getValue())) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Item Name"]);
    scwin.cfViewTab(0);
    txt_hhmitem1.focus();
    return false;
  }
  if ($c.util.isEmpty($p, txt_hhmitem2.getValue())) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["EDI Item"]);
    scwin.cfViewTab(1);
    txt_hhmitem2.focus();
    return false;
  }

  // 신규시 DBEX가 아닌 DBEXxxxxx로 생성 못함.
  // if (scwin.statusFlag == "C"){
  //     if(cnd_ed_hhblno.getValue().length >= 4 && cnd_ed_hhblno.getValue().substring(0, 4) === "DBEX"){ // !=4 에서 수정
  //         await $c.gus.cfAlertMsg(E_MSG_CM_ERR_026, ["Auto Create","DBEX"]);   // @은(는) '@' 형식이어야 합니다.
  //         cnd_ed_hhblno.focus();
  //         return false;
  //     }
  // }    

  // 거래처별 매출귀속 일치여부 확인
  // "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveCustomerInfo&param1=" + ed_hhactcust.Text.trim(); 
  scwin._comboTarget = "CUSTOMER_INFO";
  await scwin.f_commCode("ilCommonEBC", "retriveCustomerInfo", ed_hhactcust.getValue());
  if (ds_customerInfo.getRowCount() > 0) {
    if (ed_hhbuyer.getValue() !== ds_customerInfo.getCellData(0, "col1")) {
      await $c.gus.cfAlertMsg($p, MSG_LO_WRN_007);
      scwin.cfViewTab(0);
      ed_hhbuyer.focus();
      return false;
    }
  }
  flag = await scwin.f_containerDualCheck();
  // Container Type 중복 체크
  if (!flag) {
    return false;
  }
  // Container/EL 필수값 체크는 [TODO] ds_ocContList/ds_ocElList 루프 구현
  // Container Type value check
  const cntTypeEdits = [ed_hhcnt1type, ed_hhcnt2type, ed_hhcnt3type, ed_hhcnt4type];
  for (const ed of cntTypeEdits) {
    const v = ed.getValue();
    if (!$c.util.isEmpty($p, v)) {
      const tmp = ds_containerType.getMatchedColumnData("code", v, "code");
      if (!tmp || tmp.length < 1) {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Container Type"]);
        scwin.cfViewTab(0);
        ed.focus();
        return false;
      }
    }
  }

  // Container
  for (var i = 0; i < ds_ocContList.getRowCount(); i++) {
    if ($c.util.isEmpty($p, ds_ocContList.getCellData(i, "mccntno"))) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Container"]); //@는 필수입력항목입니다.
      gr_ocContList.focus();
      gr_ocContList.setFocusedCell(i, "mccntno", true); // mccntno
      return false;
    }
  }

  // EDI ITEM 글자수 및 특수문자 여부 CHECK
  if (!ilcommon.cf_ChkInputOnlyNumberAndAlphabet(txt_hhmitem2.getValue())) {
    await $c.win.alert($p, "EDI ITEM에 특수문자만 입력은 불가능합니다.");
    return false;
  }
  if ($c.gus.cfGetByteLength($p, txt_hhmitem2.getValue()) < 2) {
    await $c.win.alert($p, "EDI ITEM에 2글자 이상을 입력하셔야합니다.");
    return false;
  }
  return true;
};

//---------------------------------------------------------
// 공통팝업 열기
//---------------------------------------------------------
scwin.f_PopUp = function (disGubun, chgGubun) {
  switch (disGubun) {
    case "Shipper":
      udc_hhagentattn.setSelectId("retrieveEngClntInfo"); // XML상의 SELECT ID 
      udc_hhagentattn.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhscd, txt_hhs1, [txt_hhs2, txt_hhs3, txt_hhs4, txt_hhs5]);
      }, ed_hhscd.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value
      txt_hhs1.getValue(),
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
      udc_hhagentattn.setSelectId("retrieveEngClntInfo");
      udc_hhagentattn.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhccd, txt_hhc1, [txt_hhc2, txt_hhc3, txt_hhc4, txt_hhc5]);
        $c.gus.cfSetReturnValue($p, ret, ed_hhactcust, txt_hhactcustnm);
      }, ed_hhccd.getValue().trim(), txt_hhc1.getValue(), chgGubun, '10',
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
      udc_hhagentattn.setSelectId("retrieveEngClntInfo");
      udc_hhagentattn.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhncd, txt_hhn1, [txt_hhn2, txt_hhn3, txt_hhn4, txt_hhn5]);
        if ($c.util.isEmpty($p, ed_hhccd.getValue())) {
          $c.gus.cfSetReturnValue($p, ret, ed_hhactcust, txt_hhactcustnm);
        }
      }, ed_hhncd.getValue().trim(), txt_hhn1.getValue(), chgGubun, '10',
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
    case "Partner":
      udc_hhagentattn.setSelectId("retrieveEngClntInfo");
      udc_hhagentattn.ilCommonPopUp(function (ret) {
        var oldValue = ed_hhagent.getValue();
        $c.gus.cfSetReturnValue($p, ret, ed_hhagent, txt_hhagentnm);
        if (oldValue !== ed_hhagent.getValue()) {
          ed_hhlinerattn.setValue('');
          txt_hhlinerattnnm.setValue('');
        }
      }, ed_hhagent.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value
      txt_hhagentnm.getValue(),
      // 화면에서의 ??? Name Element의	Value
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      '10',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Partner Code,Partner Name,Address1,Address2,Address3,Address4,Tel,,,CRN',
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
      'Partner search,Partner Code,Partner Name'); // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      break;
    case "PartnerPic":
      var pParam = ed_hhagent.getValue().trim();
      udc_hhagentattn.setSelectId("retrieveClntPicInfo");
      udc_hhagentattn.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhagentattn, txt_hhagentattnnm, ed_hhagent);
      }, ed_hhagentattn.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value
      txt_hhagentattnnm.getValue(),
      // 화면에서의 ??? Name Element의	Value
      chgGubun,
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
    case "Customer":
      udc_hhactcust.setSelectId("retrieveEngClntInfo");
      udc_hhactcust.ilCommonPopUp(function (ret) {
        var oldValue = ed_hhactcust.getValue();
        $c.gus.cfSetReturnValue($p, ret, ed_hhactcust, txt_hhactcustnm);
        if (oldValue !== ed_hhactcust.getValue()) {
          ed_hhactattn.setValue('');
          txt_hhactattnnm.setValue('');
          //2020.05.13 최우성 대리 요청 사항 : 거래처 (CUSTOMER) 에 해당하는 부서 및 영업사원 자돋 지정
          if (!$c.util.isEmpty($p, ed_hhactcust.getValue())) {
            scwin.f_customerInfo(ed_hhactcust.getValue().trim());
          }
        }
      }, ed_hhactcust.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value
      txt_hhactcustnm.getValue(),
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
    case "CustomerPic":
      var pParam = ed_hhactcust.getValue().trim();
      udc_hhactattn.setSelectId("retrieveClntPicInfo");
      udc_hhactattn.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhactattn, txt_hhactattnnm, ed_hhactcust);
      }, ed_hhactattn.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value
      txt_hhactattnnm.getValue(),
      // 화면에서의 ??? Name Element의	Value
      chgGubun,
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
    case "Liner":
      udc_hhliner.setSelectId("retrieveEngClntInfo");
      udc_hhliner.ilCommonPopUp(function (ret) {
        var oldValue = ed_hhliner.getValue();
        $c.gus.cfSetReturnValue($p, ret, ed_hhliner, txt_hhlinernm);
        if (oldValue != ed_hhliner.getValue()) {
          ed_hhlinerattn.setValue("");
          txt_hhlinerattnnm.setValue("");
        }
      }, ed_hhliner.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value
      txt_hhlinernm.getValue(),
      // 화면에서의 ??? Name Element의	Value
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      '10',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Liner Code,Liner Name,Address1,Address2,Address3,Address4,Tel,,,CRN',
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
      'Liner search,Liner Code,Liner Name');
      break;
    case "LinerPic":
      var pParam = ed_hhliner.getValue().trim();
      udc_hhlinerattn.setSelectId("retrieveClntPicInfo");
      udc_hhlinerattn.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhlinerattn, txt_hhlinerattnnm, ed_hhliner);
      }, ed_hhlinerattn.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value
      txt_hhlinerattnnm.getValue(),
      // 화면에서의 ??? Name Element의	Value
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      '4',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      "Liner PIC",
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
      udc_blpic.setSelectId("retrieveEmpInfo");
      udc_blpic.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_blpic, txt_blpic);
      }, ed_blpic.getValue().trim(),
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
      null); // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      break;
  }
};

// 공통 팝업 (Vessel/Port/Unit 등)
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  switch (gubun1) {
    case "Vessel":
      udc_hhvslcd.setSelectId("retrieveOrdVsslInfo"); // XML상의 SELECT ID
      udc_hhvslcd.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhvslcd, txt_hhvsl);
      }, ed_hhvslcd.getValue().trim(), txt_hhvsl.getValue(), pWinCloseTF, '2', 'Code, Name', '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, 'Vessel,Code,Name', pNoDataCloseTF);
      break;
    case "Loading":
      udc_hhlodcd.setSelectId("retrievePortInfo"); // XML상의 SELECT ID
      udc_hhlodcd.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhlodcd, txt_hhlodnm);
      }, ed_hhlodcd.getValue().trim(), txt_hhlodnm.getValue(), pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, 'Loading,Code,Name', pNoDataCloseTF);
      break;
    case "Discharge":
      udc_hhdisccd.setSelectId("retrievePortInfo");
      udc_hhdisccd.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhdisccd, txt_hhdiscnm);
      }, ed_hhdisccd.getValue().trim(), txt_hhdiscnm.getValue(), pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Discharge,Code,Name", pNoDataCloseTF);
      break;
    case "Unit":
      udc_hhunitcd.setSelectId("retrieveCommCdInfo");
      udc_hhunitcd.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhunitcd, txt_hhunit);
      }, ed_hhunitcd.getValue().trim(), txt_hhunit.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", 'IL002', null, null, null, null, null, pAllSearchTF, "Unit,Code,Name", pNoDataCloseTF);
      break;
    case "Salesman":
      udc_hhsales.setSelectId("retrieveEmpInfo");
      udc_hhsales.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhsales, txt_hhsalesnm);
      }, ed_hhsales.getValue().trim(), txt_hhsalesnm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Salesman,Code,Name", pNoDataCloseTF);
      break;
    case "DEPT":
      udc_hhbuyer.setSelectId("retrieveOpDeptCdInfo");
      udc_hhbuyer.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhbuyer, txt_hhbuyernm);
      }, ed_hhbuyer.getValue().trim(), txt_hhbuyernm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "DEPT,Code,Name", pNoDataCloseTF);
      break;
    case "Receipt":
      udc_hhrcvcd.setSelectId("retrievePortInfo");
      udc_hhrcvcd.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhrcvcd, txt_hhrcvnm);
      }, ed_hhrcvcd.getValue().trim(), txt_hhrcvnm.getValue(), pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Receipt,Code,Name", pNoDataCloseTF);
      break;
    case "Delivery":
      udc_hhdlvcd.setSelectId("retrievePortInfo");
      udc_hhdlvcd.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhdlvcd, txt_hhdlvnm);
      }, ed_hhdlvcd.getValue().trim(), txt_hhdlvnm.getValue(), pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Delivery,Code,Name", pNoDataCloseTF);
      break;
    case "Destination":
      udc_hhfdcd.setSelectId("retrievePortInfo");
      udc_hhfdcd.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhfdcd, txt_hhfdnm);
      }, ed_hhfdcd.getValue().trim(), txt_hhfdnm.getValue(), pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Destination,Code,Name", pNoDataCloseTF);
      break;
    case "Item":
      udc_hhitem.setSelectId("retrieveCommGoodsInfo");
      udc_hhitem.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhitem, txt_hhmitem1);
      }, ed_hhitem.getValue().trim(), txt_hhmitem1.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Item,Code,Name", pNoDataCloseTF);
      break;
    case "Warehouse":
      udc_hhwarecd.setSelectId("retrieveBondZoneRound");
      udc_hhwarecd.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhwarecd, txt_hhwarenm);
      }, ed_hhwarecd.getValue().trim(), txt_hhwarenm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Warehouse,Code,Name", pNoDataCloseTF);
      break;
    case "ContainerType1":
      pCode = ed_hhcnt1type.getValue();
      ed_hhcnt1type.setValue("");
      udc_commonType.setSelectId("retriveContainerTypeCodeInfo");
      udc_commonType.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhcnt1type);
      }, pCode.trim() //코드
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
      , null, null, ed_hhcnt1type // 
      , null // 
      );
      break;
    case "ContainerType2":
      pCode = ed_hhcnt2type.getValue();
      ed_hhcnt2type.setValue("");
      udc_commonType.setSelectId("retriveContainerTypeCodeInfo");
      udc_commonType.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhcnt2type);
      }, pCode.trim() //코드
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
      , null, null, ed_hhcnt2type // 
      , null // 
      );
      break;
    case "ContainerType3":
      pCode = ed_hhcnt3type.getValue();
      ed_hhcnt3type.setValue("");
      udc_commonType.setSelectId("retriveContainerTypeCodeInfo");
      udc_commonType.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhcnt3type);
      }, pCode.trim() //코드
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
      , null, null, ed_hhcnt3type // 
      , null // 
      );
      break;
    case "ContainerType4":
      pCode = ed_hhcnt4type.getValue();
      ed_hhcnt4type.setValue("");
      udc_commonType.setSelectId("retriveContainerTypeCodeInfo");
      udc_commonType.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_hhcnt4type);
      }, pCode.trim() //코드
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
      , null, null, ed_hhcnt4type // 
      , null // 
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 화면이동
//-------------------------------------------------------------------------
scwin.f_openPgm = async function (name) {
  if (name === "MasterBL") {
    if (cnd_lc_mhno.getValue() === "NONE") {
      $c.win.openMenu($p, "Import Master B/L", "/ui/il/seainb/sibl/se_202_01_01b.xml", "se_202_01_01b.jsp", {
        linkcheck: "5",
        kcomcd: scwin.hd_kcomcd,
        vslcd: ed_hhvslcd.getValue(),
        vsl: txt_hhvsl.getValue(),
        vyg: txt_hhvyg.getValue()
      });
    } else {
      $c.win.openMenu($p, "Import Master B/L", "/ui/il/seainb/sibl/se_202_01_01b.xml", "se_202_01_01b.jsp", {
        linkcheck: "3",
        kcomcd: scwin.hd_kcomcd,
        blno: cnd_ed_hhblno.getValue(),
        mhno: cnd_lc_mhno.getValue()
      });
    }
  } else if (name === "Partner") {
    $c.win.openMenu($p, "Partner Statement", "/ui/il/acc/acpar/ac_104_01_01b.xml", "ac_104_01_01b.jsp", {
      kcomcd: scwin.hd_kcomcd,
      seaair: "S",
      iogb: scwin.hd_hhio,
      blno: cnd_ed_hhblno.getValue(),
      mblno: "",
      mhno: cnd_lc_mhno.getValue()
    });
  } else if (name === "Invoice") {
    $c.win.openMenu($p, "Invoice", "/ui/il/acc/acinv/ac_101_01_01b.xml", "ac_101_01_01b.jsp", {
      kcomcd: scwin.hd_kcomcd,
      seaair: "S",
      iogb: scwin.hd_hhio,
      blno: cnd_ed_hhblno.getValue(),
      mblno: "",
      mhno: cnd_lc_mhno.getValue()
    });
  } else if (name === "Profit") {
    $c.win.openMenu($p, "Booking Sheet", "/ui/il/pfm/pfbs/pe_101_01_01b.xml", "pe_101_01_01b.jsp", {
      kcomcd: scwin.hd_kcomcd,
      seaair: "S",
      iogb: scwin.hd_hhio,
      blno: cnd_ed_hhblno.getValue(),
      mblno: cnd_ed_hhblno.getValue(),
      mhno: cnd_lc_mhno.getValue()
    });
  } else if (name === "Freight") {
    $c.win.openMenu($p, "Import House B/L Freight", "/ui/il/seainb/sibl/se_201_01_02b.xml", "se_201_01_02b.jsp", {
      linkcheck: "5",
      kcomcd: scwin.hd_kcomcd,
      blno: cnd_ed_hhblno.getValue(),
      mhno: cnd_lc_mhno.getValue()
    });
  } else if (name === "HouseBLFind") {
    $c.win.openMenu($p, "House B/L Search", "/ui/il/seaout/sobl/se_105_01_02b.xml", "se_105_01_02b.jsp", {
      hhio: scwin.hd_hhio
    });
  } else if (name === "ArrivalNotice") {
    $c.win.openMenu($p, "Arrival Notice", "/ui/il/seainb/sith/se_204_01_01b.xml", "se_204_01_01b.jsp", {
      kcomcd: scwin.hd_kcomcd,
      seaair: "S",
      blno: cnd_ed_hhblno.getValue(),
      mhno: cnd_lc_mhno.getValue(),
      eta: ed_hheta.getValue()
    });
  } else if (name === "HouseBLPrint") {
    $c.win.openMenu($p, "House B/L Print", "/ui/il/seaout/sobl/se_105_01_03b.xml", "se_105_01_03b.jsp", {
      linkcheck: "5",
      kcomcd: scwin.hd_kcomcd,
      blno: cnd_ed_hhblno.getValue(),
      mhno: cnd_lc_mhno.getValue()
    });
  }
};

//---------------------------------------------------------
// 공통 코드/컨테이너 타입 로딩
//---------------------------------------------------------
scwin.f_ContainerTypeLoading = function () {
  scwin._comboTarget = "CONTAINER_TYPE";
  scwin.f_commCode("ilCommonEBC", "retriveContainerTypeList");
};
//---------------------------------------------------------
// MHNO 로딩
//---------------------------------------------------------
scwin.f_MhnoLoading = async function (gubun) {
  if (gubun == "1") {
    blno = String(cnd_ed_hhblno.getValue() || "").trim();
    if (!$c.util.isEmpty($p, blno)) {
      scwin._comboTarget = "HMHNO1";
      await scwin.f_commCode("ilCommonEBC", "retriveSeaHouseMhnoListCombo", blno);
    } else {
      ds_hmhno.removeAll();
      cnd_lc_mhno.setValue("");
    }
    return;
  }
};
//---------------------------------------------------------
// Booking Seq 로딩
//---------------------------------------------------------
scwin.f_BkSeqLoading = async function () {
  var param2 = String(ed_hhbkgno.getValue() || "").trim();
  if (param2.length > 0) {
    scwin._comboTarget = "BK_SEQ";
    await scwin.f_commCode("SeaExportHouseEBC", "retriveBookingSeqListCombo", scwin.hd_kcomcd, param2);
  } else {
    ds_bkseq.removeAll();
    lc_hhbkgseq.setValue("");
    scwin.f_afterBookingLoading2(); // 이벤트 처리
  }
};

//---------------------------------------------------------
// Booking Loading
//---------------------------------------------------------
scwin.f_BookingLoading = async function () {
  ds_bookingNo.setCellData(0, "kcomcd", scwin.hd_kcomcd);
  ds_bookingNo.setCellData(0, "bkNo", ed_hhbkgno.getValue());
  await $c.sbm.execute($p, sbm_retrieveBooking).then(function (rtn) {
    scwin.f_afterBookingLoading1();
  });
};
scwin.f_afterBookingLoading1 = async function () {
  if (ds_booking.getRowCount() === 0) {
    ds_bkseq.removeAll();
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003); //  해당되는 자료가 존재하지 않습니다
    return;
  } else {
    ds_booking.setRowPosition(0);
  }
  await scwin.f_BkSeqLoading();
};
scwin.f_afterBookingLoading2 = async function () {
  const r = ds_booking.getRowPosition() < 0 ? 0 : ds_booking.getRowPosition();

  // shipper 코드(docCd 없으면 custCd)
  const docCd = ds_booking.getCellData(r, "docCd");
  const custCd = ds_booking.getCellData(r, "custCd");
  ed_hhccd.setValue(!$c.util.isEmpty($p, docCd) ? docCd : custCd);
  scwin.ed_hhccd_onviewchange({
    newValue: ed_hhccd.getValue()
  });
  if (!$c.util.isEmpty($p, ed_hhccd.getValue())) {
    scwin.f_PopUp("ds_booking.getRowPosition()", "T");
  }

  // Actual Customer
  ed_hhactcust.setValue(custCd);
  txt_hhactcustnm.setValue(ds_booking.getCellData(r, "custNm"));
  ed_hhactattn.setValue(ds_booking.getCellData(r, "custSeq"));
  txt_hhactattnnm.setValue(ds_booking.getCellData(r, "custMan"));

  // Liner
  ed_hhliner.setValue(ds_booking.getCellData(r, "liner"));
  txt_hhlinernm.setValue(ds_booking.getCellData(r, "linernm"));
  ed_hhlinerattn.setValue(ds_booking.getCellData(r, "linerattn"));
  txt_hhlinerattnnm.setValue(ds_booking.getCellData(r, "linerattnnm"));

  // Buyer/Dept
  ed_hhbuyer.setValue(ds_booking.getCellData(r, "dept"));
  txt_hhbuyernm.setValue(ds_booking.getCellData(r, "deptnm"));

  // Vessel/Voy
  ed_hhvslcd.setValue(ds_booking.getCellData(r, "vslCd"));
  txt_hhvsl.setValue(ds_booking.getCellData(r, "vslNm"));
  txt_hhvyg.setValue(ds_booking.getCellData(r, "voy"));

  // Sales
  ed_hhsales.setValue(ds_booking.getCellData(r, "salesCd"));
  txt_hhsalesnm.setValue(ds_booking.getCellData(r, "salesNm"));

  // LOD / DISC / DLV
  ed_hhlodcd.setValue(ds_booking.getCellData(r, "lodCd"));
  txt_hhlodnm.setValue(ds_booking.getCellData(r, "lodNm"));
  ed_hhdisccd.setValue(ds_booking.getCellData(r, "disCd"));
  txt_hhdiscnm.setValue(ds_booking.getCellData(r, "disNm"));
  ed_hhdlvcd.setValue(ds_booking.getCellData(r, "dlvCd"));
  txt_hhdlvnm.setValue(ds_booking.getCellData(r, "dlvNm"));

  // Area
  ed_hharea.setValue(ds_booking.getCellData(r, "bkArea"));
  txt_hhareanm.setValue(ds_booking.getCellData(r, "bkAreanm"));

  // ETD / ETA
  ed_hhetd.setValue(ds_booking.getCellData(r, "bkEtd"));
  ed_hheta.setValue(ds_booking.getCellData(r, "bkEta"));

  // Combo
  lc_hhpcgb.setValue(ds_booking.getCellData(r, "payTerm"));
  lc_hhbltype.setValue(ds_booking.getCellData(r, "cfs"));
  lc_hhstype.setValue(ds_booking.getCellData(r, "svcType"));

  // Item
  ed_hhitem.setValue(ds_booking.getCellData(r, "itemCd"));
  txt_hhmitem1.setValue(ds_booking.getCellData(r, "itemNm"));

  // Package / Unit
  ed_hhpkg.setValue(ds_booking.getCellData(r, "pkg"));
  ed_hhunitcd.setValue(ds_booking.getCellData(r, "unit"));
  txt_hhunit.setValue(ds_booking.getCellData(r, "unitnm"));

  // Weight / Measure
  ed_hhgwgt.setValue(ds_booking.getCellData(r, "wgt"));
  ed_hhmsr.setValue(ds_booking.getCellData(r, "msr"));

  // Container
  ed_hhcnt1type.setValue(ds_booking.getCellData(r, "cnttype1"));
  ed_hhcnt2type.setValue(ds_booking.getCellData(r, "cnttype2"));
  ed_hhcnt3type.setValue(ds_booking.getCellData(r, "cnttype3"));
  ed_hhcnt4type.setValue(ds_booking.getCellData(r, "cnttype4"));
  ed_hhcnt1.setValue(ds_booking.getCellData(r, "cntqty1"));
  ed_hhcnt2.setValue(ds_booking.getCellData(r, "cntqty2"));
  ed_hhcnt3.setValue(ds_booking.getCellData(r, "cntqty3"));
  ed_hhcnt4.setValue(ds_booking.getCellData(r, "cntqty4"));
};
//-------------------------------------------------------------------------
//Booking Container 정보  가져오기
//-------------------------------------------------------------------------
scwin.f_ContainerLoading = async function () {
  var row = 0; // ds_bookingContainer.getRowPosition();

  ds_bookingContainer.setCellData(row, "kcomcd", scwin.hd_kcomcd); // hd_kcomcd.value;
  ds_bookingContainer.setCellData(row, "bkNo", ed_hhbkgno.getValue());
  ds_bookingContainer.setCellData(row, "hhbkgseq", lc_hhbkgseq.getValue()); //lc_hhbkgseq.ValueOfIndex("code",lc_hhbkgseq.Index);

  // tr_retrieveContainer.Post();
  $c.sbm.execute($p, sbm_retrieveContainer).then(function (rtn) {
    txt_totalOcContList.setValue(ds_ocContList.getRowCount());
    if (ds_ocContList.getRowCount() > 0) {
      ds_ocContList.setRowPosition(0);
    }
  });
};
//-------------------------------------------------------------------------
//Notify Copy
//-------------------------------------------------------------------------
scwin.f_cCopy = function () {
  ed_hhccd.setValue(ed_hhncd.getValue());
  txt_hhc1.setValue(txt_hhn1.getValue());
  txt_hhc2.setValue(txt_hhn2.getValue());
  txt_hhc3.setValue(txt_hhn3.getValue());
  txt_hhc4.setValue(txt_hhn4.getValue());
  txt_hhc5.setValue(txt_hhn5.getValue());
  ed_hhncd.focus();
};
//-------------------------------------------------------------------------
//Same
//-------------------------------------------------------------------------
scwin.f_same = function () {
  ed_hhncd.setValue(ed_hhccd.getValue());
  txt_hhn1.setValue("SAME AS CONSIGNEE");
  txt_hhn2.setValue("");
  txt_hhn3.setValue("");
  txt_hhn4.setValue("");
  txt_hhn5.setValue("");
  txt_hhn2.focus();
};
//-------------------------------------------------------------------------
// Copy
//-------------------------------------------------------------------------
scwin.f_nCopy = function () {
  ed_hhncd.setValue(ed_hhccd.getValue());
  txt_hhn1.setValue(txt_hhc1.getValue());
  txt_hhn2.setValue(txt_hhc2.getValue());
  txt_hhn3.setValue(txt_hhc3.getValue());
  txt_hhn4.setValue(txt_hhc4.getValue());
  txt_hhn5.setValue(txt_hhc5.getValue());
  ed_hhvslcd.focus();
};
//---------------------------------------------------------
// Booking Search Popup
//---------------------------------------------------------
scwin.f_bookingSearchPopup = async function () {
  let opts = {
    id: "se_103_01_01p",
    popupName: "Booking Search",
    modal: true,
    type: "browserPopup",
    width: 1170,
    height: 800,
    title: "Booking Search"
  };
  let data = {
    v_hhio: scwin.hd_hhio
  };
  const ret = await $c.win.openPopup($p, "/ui/il/seaout/sobk/se_103_01_01p.xml", opts, data);

  // 팝업 리턴값 기준(프로젝트 규격에 맞게 key 조정)
  ed_hhbkgno.setValue(ret ?? "");
  scwin.cfViewTab(0);
  if (!$c.util.isEmpty($p, ed_hhbkgno.getValue())) {
    ed_hhbkgno.focus();
  } else {
    lc_hhbkgseq.focus();
  }
  return false;
};
//---------------------------------------------------------
// Container Type 중복 체크
//---------------------------------------------------------
scwin.f_containerDualCheck = async function () {
  // Container Type 중복 체크
  const types = [ed_hhcnt1type.getValue(), ed_hhcnt2type.getValue(), ed_hhcnt3type.getValue(), ed_hhcnt4type.getValue()].filter(v => !$c.util.isEmpty($p, v));
  const hasDup = new Set(types).size !== types.length;
  if (hasDup) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_032, ["Container Type"]); // @은(는) 중복될 수 없습니다.
    return false;
  }
  return true;
};

//---------------------------------------------------------
//INVOICE NO 유무
//---------------------------------------------------------
scwin.f_invoiceCheck = async function () {
  scwin.invoiceCheck = "0";
  ds_invoiceCheck.removeAll();
  var strClntNo = String(ed_odrNo.getValue() || "").trim();

  // ds_invoiceCheck.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=SeaImportHouseEBC&queryId=retriveInvoiceCheckCombo&param1=" + strClntNo;
  scwin._comboTarget = "INVOICE_CHECK";
  await scwin.f_commCode("SeaImportHouseEBC", "retriveInvoiceCheckCombo", strClntNo);
};

//---------------------------------------------------------
// departmentInfo
//---------------------------------------------------------
scwin.f_departmentInfo = async function () {
  // "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveDepartmentCodeList&param1=" + "C" + "&param2=" + ed_hhactcust.Text;

  ds_departmentInfo.removeAll();
  scwin._comboTarget = "DEPARTMENT_INFO";
  await scwin.f_commCode("ilCommonEBC", "retriveDepartmentCodeList", "C", ed_hhactcust.getValue());
  if (ds_departmentInfo.getRowCount() === 0) {
    ed_hhbuyer.setValue("");
    txt_hhbuyernm.setValue("");
  } else {
    const r = 0; // ds_departmentInfo.getRowPosition();
    ed_hhbuyer.setValue(ds_departmentInfo.getCellData(r, "CODE"));
    txt_hhbuyernm.setValue(ds_departmentInfo.getCellData(r, "NAME"));
  }
};

//---------------------------------------------------------
// Container Receive  가져오기
//---------------------------------------------------------
scwin.f_cntrReceive = async function () {
  ds_containerReceive.removeAll();

  // "/cm.zz.RetrieveComboCMD.do?sysCd=SeaImportHouseEBC&queryId=retriveContainerHouseReceive&param1=" + ed_hhbkgno.Text+lc_hhbkgseq.BindColVal ;
  scwin._comboTarget = "CONTAINER_RECEIVE";
  await scwin.f_commCode("SeaImportHouseEBC", "retriveContainerHouseReceive", ed_hhbkgno.getValue() + lc_hhbkgseq.getValue());
  if (ds_containerReceive.getRowCount() !== 0) {
    if (ds_ocContList.getRowCount() === 0) {
      // Container Receive
      for (let i = 0; i < ds_containerReceive.getRowCount(); i++) {
        scwin.f_addRow(1);
        ds_ocContList.setCellData(i, "mccntno", ds_containerReceive.getCellData(i, "CODE"));
        ds_ocContList.setCellData(i, "mctype", ds_containerReceive.getCellData(i, "NAME"));
      }
    }
  }
};
//---------------------------------------------------------
//부서  Change
//---------------------------------------------------------
scwin.f_departmentChange = async function () {
  const dept = (ed_hhbuyer.getValue() || "").trim();
  const deptNm = (txt_hhbuyernm.getValue() || "").trim();
  if ($c.util.isEmpty($p, dept)) {
    return;
  }
  let opts = {
    id: "ilCommonDeptChange",
    popupName: "ilCommonDeptChange",
    modal: true,
    type: "browserPopup",
    width: 460,
    height: 280,
    title: "Dept Change",
    callbackFn: "scwin.f_departmentChange_callback"
  };

  // 팝업 호출 (프로젝트 팝업 규격에 맞게 openPopup 사용)
  $c.win.openPopup($p, "/ui/il/common/xml/ilCommonDeptChange.xml",
  // 실제 팝업 xml로 교체
  opts,
  // OPTS
  {
    pdept: dept,
    pdeptnm: deptNm
  } // data 
  );
};
scwin.f_departmentChange_callback = async function (ret) {
  // ret: [0]="N/A", [1]=newDept, [2]=newDeptNm  
  if (!ret || typeof ret === "undefined") {
    return;
  }
  const flag = (ret[0] || "").trim();
  const newDept = (ret[1] || "").trim();
  const newDeptNm = (ret[2] || "").trim();
  if (!(flag === "N/A" && !$c.util.isEmpty($p, newDept) && !$c.util.isEmpty($p, newDeptNm))) {
    return;
  }

  // 파라미터 DS 세팅
  const ds = ds_DeptChangeParam;
  ds.removeAll(); // 컬럼 만들어져 있음. 

  const row = ds.insertRow(0);
  ds.setCellData(row, "modrNo", "");
  ds.setCellData(row, "hodrNo", ds_houseblList.getCellData(ds_houseblList.getRowPosition(), "odrNo"));
  ds.setCellData(row, "kcomcd", scwin.hd_kcomcd); // 법인코드
  ds.setCellData(row, "bulkGb", ""); // bulk여부
  ds.setCellData(row, "dept", newDept); // 변경할 부서 코드
  ds.setCellData(row, "deptnm", newDeptNm); // 변경할 부서  명

  // 저장 확인
  const ok = await $c.win.confirm($p, E_MSG_CM_CRM_001); // "저장하시겠습니까?"
  if (!ok) {
    return;
  }
  $c.sbm.execute($p, sbm_deptChange).then(function (rtn) {
    var spMsg = ds_DeptChangeResult.getRowCount() > 0 ? ds_DeptChangeResult.getCellData(0, "spMsg") : "";
    var spRtn = ds_DeptChangeResult.getRowCount() > 0 ? ds_DeptChangeResult.getCellData(0, "spRtn") : "-1";
    if (spRtn == "0") {
      txt_hhbuyernm.setValue(newDeptNm);
      ed_hhbuyer.setValue(newDept);
      $c.gus.cfAlertMsg($p, MSG_LO_WRN_009);
    } else if (spRtn == "-2") {
      $c.gus.cfAlertMsg($p, MSG_LO_WRN_007);
    } else {
      $c.gus.cfAlertMsg($p, MSG_LO_WRN_008);
    }
  });
};
//---------------------------------------------------------
// vsl/vyg trim
//---------------------------------------------------------
scwin.f_trimVsl = function () {
  txt_hhvsl.setValue(txt_hhvsl.getValue().trim());
};
//-------------------------------------------------------------------------
//vyg trim
//-------------------------------------------------------------------------
scwin.f_trimVyg = function () {
  txt_hhvyg.setValue(txt_hhvyg.getValue().trim());
};

// Excel 다운로드
scwin.f_RunExcel = async function (varGrNm) {
  cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm == false) return;
  const infoArr = [];
  filename = "Container List_" + cnd_ed_hhblno.getValue();
  const options = {
    fileName: filename + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,

    sheetName: filename
  };
  $c.data.downloadGridViewExcel($p, gr_ocContList, options, infoArr);
};

//---------------------------------------------------------
// 선사 트래킹
//---------------------------------------------------------
scwin.f_Tracking = async function () {
  if (ds_houseblList.getRowCount() === 0) {
    await $c.win.alert($p, "선사 Tracking 할 Direct B/L을 조회해 주세요.");
    return;
  }

  // const vjob = "blsearch";
  const r = ds_houseblList.getRowPosition();
  const vlinerCd = ds_houseblList.getCellData(r, "hhliner");
  const vparm = ds_houseblList.getCellData(r, "hhmblno");

  // liner명 조회(예: 공통코드 트랜잭션으로 ds_liner 채움)
  ds_liner.removeAll();
  dma_code.setJSON({
    grpCd: "IL052",
    cd: vlinerCd
  });
  // await $c.sbm.execute(sbm_code); // onsubmitdone에서 ds_liner.setJSON 처리
  await $c.sbm.execute($p, sbm_code).then(function (e) {
    ds_liner.setJSON(e.responseJSON.GAUCE);
    const vline = ds_liner.getRowCount() > 0 ? ds_liner.getCellData(0, "cdNm") || "" : "";

    // var objWSH = new ActiveXObject("WScript.Shell");
    // var retval = objWSH.Run("C:\dbexp_scrap1\\upgrade.exe job=" + vjob + "&linecode=" + vline + "&no=" + vparm + "&",1,true);
  });
  const vline = ds_liner.getRowCount() > 0 ? ds_liner.getCellData(0, "cdNm") || "" : "";

  // var objWSH = new ActiveXObject("WScript.Shell");
  // var retval = objWSH.Run("C:\dbexp_scrap1\\upgrade.exe job=" + vjob + "&linecode=" + vline + "&no=" + vparm + "&",1,true);
};

//---------------------------------------------------------
// 선사 트래킹 프로그램 다운로드
//---------------------------------------------------------
scwin.f_ProgramDownload = function () {
  // var sURL = "ftp://172.21.1.42:7000/Home/Setup/Setup_CarrierAPI.exe";
  // window.open(sURL);
  var sURL = "http://172.21.1.42:7000/Home/Setup/Setup_CarrierAPI.exe";
  window.open(sURL);
};

// ISO6346 컨테이너 번호 체크
scwin.ISO6346Check = function (con) {
  if (!con || con === "" || con.length !== 11) return false;
  con = con.toUpperCase();
  var re = /^[A-Z]{4}\d{7}/;
  if (re.test(con)) {
    var sum = 0;
    for (var i = 0; i < 10; i++) {
      var n = con.substr(i, 1);
      if (i < 4) {
        n = "0123456789A?BCDEFGHIJK?LMNOPQRSTU?VWXYZ".indexOf(con.substr(i, 1));
      }
      n *= Math.pow(2, i);
      sum += n;
    }
    if (con.substr(0, 4) === "HLCU") {
      sum -= 2;
    }
    sum %= 11;
    sum %= 10;
    return sum == con.substr(10);
  } else {
    return false;
  }
};

// DRM 파일 업로드
scwin.drmFileSubmit = function () {
  // JSP: cfDrmUploadFile(formObj , fileUploadGDS, "f_Upload");
  // WebSquare: [TODO] 공통 DRM 업로드 모듈과 연계
};

// 업로드 완료 후 처리
scwin.f_Upload = function () {
  // JSP: ds_ExcelInformation.DataId = fileUploadGDS.NameValue(0,"filePath");
  // WebSquare: fileUploadGDS 첫 row의 filePath 를 사용해 서버에서 엑셀 파싱 후 ds_ExcelInformation 채움
  // [TODO] 서버측 파싱 submission 설계 필요
  scwin.f_Import();
};

// 엑셀 Import
scwin.f_Import = function () {
  ds_ocContList.removeAll();
  ds_tmp.removeAll();

  // JSP: ds_tmp.ImportData(ds_ExcelInformation.ExportData(...));
  // WebSquare: ds_ExcelInformation 내용을 ds_tmp 로 복사
  for (var i = 0; i < ds_ExcelInformation.getRowCount(); i++) {
    var r = ds_tmp.insertRow(i);
    var cols = ds_tmp.getColumnNames();
    for (var c = 0; c < cols.length; c++) {
      var cid = cols[c];
      ds_tmp.setValue(r, cid, ds_ExcelInformation.getValue(i, cid));
    }
  }
  for (var j = 0; j < ds_tmp.getRowCount(); j++) {
    var row = ds_ocContList.insertRow(j);
    var cols2 = ds_tmp.getColumnNames();
    for (var k = 0; k < cols2.length; k++) {
      var cid2 = cols2[k];
      ds_ocContList.setCellData(row, cid2, ds_tmp.getValue(j, cid2));
    }
    ds_ocContList.setCellData(row, "kcomcd", scwin.hd_kcomcd);
    // [TODO] mchblno, mhno, inpid 세팅
    ds_ocContList.setCellData(row, "inpid", scwin.userId);
  }
  ds_tmp.removeAll();
};

// 파일 확장자 체크
scwin.f_CheckFileExt = function (ext, path) {
  ext = (ext || "").toUpperCase();
  path = (path || "").toUpperCase();
  var elen = ext.length;
  var flen = path.length;
  return ext === path.substring(flen - elen, flen);
};

//-------------------------------------------------------------------------
// 그리드 크기 증가
//-------------------------------------------------------------------------
scwin.f_divPlus = function (gridId) {
  // [TODO] gridId 에 해당하는 gridView 높이 조정 및 레이아웃 조정
};

//-------------------------------------------------------------------------
// 그리드 크기 감소
//-------------------------------------------------------------------------
scwin.f_divMinus = function (gridId) {
  // [TODO] gridId 에 해당하는 gridView 높이 조정 및 레이아웃 조정
};
//-------------------------------------------------------------------------
// 탭 이동시 그리드 크기 원상태로 복구
//-------------------------------------------------------------------------
scwin.f_divDefault = function () {};
//---------------------------------------------------------
// customerInfo  가져오기
//---------------------------------------------------------
scwin.f_customerInfo = async function (param) {
  scwin._comboTarget = "CUSTOMER_INFO";
  await scwin.f_commCode("ilCommonEBC", "retriveCustomerInfo", param);
  if (ds_customerInfo.getRowCount() !== 0) {
    const r = 0; // ds_customerInfo.getRowPosition();

    if ($c.util.isEmpty($p, ed_hhbuyer.getValue())) {
      ed_hhbuyer.setValue(ds_customerInfo.getCellData(r, "col1"));
      txt_hhbuyernm.setValue(ds_customerInfo.getCellData(r, "col2"));
    }
    ed_hhsales.setValue(ds_customerInfo.getCellData(r, "col3"));
    txt_hhsalesnm.setValue(ds_customerInfo.getCellData(r, "col4"));
  }
};

//-------------------------------------------------------------------------
// function	name : f_PopUpGrid
// function	desc : Grid popup
//-------------------------------------------------------------------------
scwin.f_PopUpGrid = function (disGubun, row, pWinCloseTF, pAllSearchTF) {
  const cfgMap = {
    mctype: {
      popupId: "retriveContainerTypeCodeInfo",
      ds: ds_ocContList,
      col: "mctype",
      codeCol: "mctype",
      title: "Type,Code,Name",
      where: null
    },
    mcpkgcd: {
      popupId: "retrieveCommCdInfo",
      ds: ds_ocContList,
      col: "mcpkgcd",
      codeCol: "mcpkgcd",
      title: "Unit,Code,Name",
      where: "IL002"
    }
  };
  const cfg = cfgMap[disGubun];
  if (!cfg) return;
  const code = (cfg.ds.getCellData(row, cfg.codeCol) || "").trim();
  udc_hhvslcd.setSelectId(cfg.popupId);
  udc_hhvslcd.ilCommonPopUp(function (ret) {
    $c.gus.cfSetGridReturnValue($p, ret, cfg.ds, row, cfg.col, "");
  }, code,
  // 코드
  "",
  // 코드명
  pWinCloseTF,
  // AutoClose (T/F)
  "2",
  // 표시 컬럼 수
  "Code, Name",
  // 컬럼 타이틀
  "80,230",
  // 컬럼 폭
  "3,4,5,6,7,8,9,10",
  // 숨김 컬럼
  cfg.where,
  // WHERE(그룹코드 등)
  null, null, null, null, null,
  // 중복체크
  pAllSearchTF,
  // 전체검색 허용
  cfg.title,
  // 팝업 타이틀/검색어
  "F" // 0건이면 N/A 리턴
  );
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
  await scwin.sbm_combo_onsubmitdone(e);
};

//------------------------------------------------------------------------------
// Submission 콜백
//------------------------------------------------------------------------------
//-------------------------------------------------------------------------
// sbm_combo onsubmitdone (WebSquare)
//-------------------------------------------------------------------------
scwin.sbm_combo_onsubmitdone = async function (e) {
  if (scwin._comboTarget === "HMHNO1") {
    ds_hmhno.setJSON(e.responseJSON.GAUCE);
    if (ds_hmhno.getRowCount() === 0) {
      if (scwin.statusFlag !== "C") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["House No"]);
      }
      var r0 = ds_hmhno.insertRow(0);
      ds_hmhno.setCellData(r0, "code", "NONE");
      ds_hmhno.setCellData(r0, "name", "NONE");
      cnd_lc_mhno.setSelectedIndex(0);
    }
    scwin._comboTarget = "";
    return;
  } else if (scwin._comboTarget === "CONTAINER_TYPE") {
    ds_containerType.setJSON(e.responseJSON.GAUCE);
    scwin._comboTarget = "";
    return;
  } else if (scwin._comboTarget === "BK_SEQ") {
    ds_bkseq.setJSON(e.responseJSON.GAUCE);
    scwin._comboTarget = "";
    scwin.f_afterBookingLoading2(); // 이벤트 처리 
    return;
  } else if (scwin._comboTarget === "CUSTOMER_INFO") {
    ds_customerInfo.setJSON(e.responseJSON.GAUCE);
    scwin._comboTarget = "";
    return;
  } else if (scwin._comboTarget === "INVOICE_CHECK") {
    ds_invoiceCheck.setJSON(e.responseJSON.GAUCE);
    scwin._comboTarget = "";
    if (ds_invoiceCheck.getCellData(0, "code") != "0") {
      scwin.invoiceCheck = "1";
    }
    return;
  } else if (scwin._comboTarget === "DEPARTMENT_INFO") {
    ds_departmentInfo.setJSON(e.responseJSON.GAUCE);
    scwin._comboTarget = "";
    return;
  } else if (scwin._comboTarget === "CONTAINER_RECEIVE") {
    ds_containerReceive.setJSON(e.responseJSON.GAUCE);
    scwin._comboTarget = "";
    return;
  }
};
// 조회 tr 
scwin.sbm_retrieve_submitdone = async function (e) {
  sbm_retrieve_path.processMsg = "";
  if (ds_houseblList.getCellData(ds_houseblList.getRowPosition() || 0, "pathCd") != "") {
    ds_condition_path.set("hhactcust", ed_hhactcust.getValue());
    ds_condition_path.set("path", "");
    ds_condition_path.set("hhblno", "");
    await $c.sbm.execute($p, sbm_retrieve_path);
  }
  setTimeout(async function () {
    // 기존 tr 조회 후
    cnd_lc_autono.setValue(ds_houseblList.getCellData(0, "autono"));
    var hhbkgseq = ds_houseblList.getRowPosition() >= 0 ? ds_houseblList.getCellData(0, "hhbkgseq") : "";
    if (hhbkgseq) {
      ds_bkseq.setCellData(0, "code", hhbkgseq);
      ds_bkseq.setCellData(0, "name", " ");
    }
    lc_hhbkgseq.setSelectedIndex(0);
    $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
    $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
    txt_blpic.setValue("");
    // 추가 코드 
    txt_totalSlipTax.setValue(ds_slipTax.getRowCount());
    txt_totalOcContList.setValue(ds_ocContList.getRowCount());
    txt_totalOcProfitList.setValue(ds_ocProfitList.getRowCount());

    // tr_retrieve" event="OnSuccess()"
    if (ds_houseblList.getRowCount() === 0) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003);
      scwin.f_Set("INIT");
      scwin.f_Check();
    } else {
      ds_houseblList.setRowPosition(0);
      ds_ocContList.setRowPosition(0);
      ds_slipTax.setRowPosition(0);
      ds_ocProfitList.setRowPosition(0);

      // 컨테이너 합계
      var v_totPkg = 0,
        v_totWgt = 0,
        v_totMsr = 0;
      for (var i = 0; i < ds_ocContList.getRowCount(); i++) {
        v_totPkg += +scwin.isEmpty(ds_ocContList.getCellData(i, "mcpkg"));
        v_totWgt += +scwin.isEmpty(ds_ocContList.getCellData(i, "mcwgt"));
        v_totMsr += +scwin.isEmpty(ds_ocContList.getCellData(i, "mcmsr"));
      }
      ed_totpkg.setValue(v_totPkg);
      ed_totwgt.setValue(v_totWgt);
      ed_totmsr.setValue(v_totMsr);
      scwin.f_invoiceCheck();
      scwin.f_Set("RETRIEVE");
      if (!$c.util.isEmpty($p, ed_blpic.getValue())) {
        scwin.f_PopUp("B/L PIC", "T");
      }
    }
    scwin.f_invoiceCheck();
  }, 100);
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_001);
  scwin.bJson = null;
  // 검색조건 enable
  $c.gus.cfEnableObjects($p, ["cnd_ed_hhblno", "cnd_lc_mhno"]);
  scwin.f_Retrieve();
  scwin.f_Set("SAVE");
};
//----------------------------------------------------------------------------
//    C O M P O N E N T' S   E V E N T S
// ----------------------------------------------------------------------------

// 상단 링크 버튼들
scwin.btn_masterBL_onclick = function () {
  scwin.f_openPgm("MasterBL");
};
scwin.btn_partner_onclick = function () {
  scwin.f_openPgm("Partner");
};
scwin.btn_invoice_onclick = function () {
  scwin.f_openPgm("Invoice");
};
scwin.btn_profit_onclick = function () {
  scwin.f_openPgm("Profit");
}; // btn_7
scwin.btn_freight_onclick = function () {
  scwin.f_openPgm("Freight");
}; // btn_8 
scwin.btn_houseBLFind_onclick = function () {
  scwin.f_openPgm("HouseBLFind");
}; // btn_9
scwin.btn_houseBLPrint_onclick = function () {
  scwin.f_openPgm("HouseBLPrint");
}; // btn_10
scwin.btn_10_onclick = function (e) {
  scwin.f_openPgm("ArrivalNotice");
};

// scwin.btn_trigger36_onclick = function() { scwin.f_Tracking(); }; // btn_10 으로 아이디 동일 
// scwin.btn_trigger37_onclick = function() { scwin.f_ProgramDownload(); };  // btn_10 으로 아이디 동일 

// gr_ocContList OnExit(row,colid,olddata) 2개
scwin.ds_ocContList_oncelldatachange = async function (info) {
  const rowIndex = info.rowIndex;
  const colID = info.colID;
  const newValue = (info.newValue || "").trim();

  // mccntno 변경시에만 체크
  if (colID === "mccntno") {
    if ($c.util.isEmpty($p, newValue)) {
      // 빈값 허용
      return;
    }

    // 중복 체크
    const rowCnt = ds_ocContList.getRowCount();
    for (let i = 1; i <= rowCnt; i++) {
      if (i === rowIndex) {
        continue;
      }
      const v = (ds_ocContList.getCellData(i, "mccntno") || "").trim();
      if ($c.util.isEmpty($p, v)) {
        continue;
      }
      if (v === newValue) {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_032, ["Container"]); // 중복 불가
        gr_ocContList.focus();
        gr_ocContList.setFocusedCell(rowIndex, "mccntno", true);
        ds_ocContList.setCellData(rowIndex, "mccntno", info.oldValue || ""); // 이전값으로 
        return;
      }
    }
  } else if (colID === "mctype") {
    if ($c.util.isEmpty($p, newValue)) {
      // 빈값 허용
      return;
    }
    const tmp = ds_containerType.getMatchedColumnData("code", newValue, "code");
    if (!tmp || tmp.length < 1) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Container Type"]);
      gr_ocContList.focus();
      gr_ocContList.setFocusedCell(row, "mctype", true);
      ds_ocContList.setCellData(rowIndex, "mctype", info.oldValue || ""); // 이전값으로 
      return false;
    }
  }
};

// OnLoadCompleted(rowcnt)
scwin.ds_hmhno_ondataload = async function () {
  const isCreate = scwin.statusFlag === "C";
  // ds_hmhno 비었을 때: NONE 추가
  if (ds_hmhno.getRowCount() === 0) {
    if (!isCreate) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["House No"]);
    }
    const r = ds_hmhno.insertRow(0);
    ds_hmhno.setCellData(r, "code", "NONE");
    ds_hmhno.setCellData(r, "name", "NONE");
    cnd_lc_mhno.setSelectedIndex(0);
  }

  // 신규(C)면 무조건 NONE만 유지
  if (isCreate) {
    ds_hmhno.removeAll();
    const r = ds_hmhno.insertRow(0);
    ds_hmhno.setCellData(r, "code", "NONE");
    ds_hmhno.setCellData(r, "name", "NONE");
    cnd_lc_mhno.setSelectedIndex(0);
  }

  // mhnoFlag 처리
  if (scwin.mhnoFlag == "1") {
    scwin.f_Retrieve();
    scwin.mhnoFlag = "0";
  }
};

// ed_hhcnt1type (Container Type 가져 오기)  change event 
// scwin.handle_ed_hhcnttype_onchange = async function (info) {
//     scwin.f_containerDualCheck();

//     // 이벤트 발생 컴포넌트
//     var comp = info.target || info.object || info.component;
//     var v = !comp ? "" : String(comp.getValue() || "");

//     if (v != "") {
//         var STR = ds_containerType.getCellData(0, v);
//         if (STR == "0") { // 값 없을 때 
//             await $c.gus.cfAlertMsg(E_MSG_CM_ERR_049, ["Container Type"]);
//         } else {
//             scwin.f_cargoControl();
//         }
//     }
// };

// Shipper Popup
scwin.btn_popHhscd_onclick = function (e) {
  scwin.f_PopUp('Shipper', 'F');
};
// Consignee Popup
scwin.btn_popHhccd_onclick = function (e) {
  scwin.f_PopUp('Consignee', 'F');
};
// Notify Popup
scwin.btn_popHhncd_onclick = function (e) {
  scwin.f_PopUp('Notify', 'F');
};

// ContainerType1
scwin.btn_popHhcnt1type_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType1', 'F', 'F', 'F');
};
// ContainerType2
scwin.btn_popHhcnt2type_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType2', 'F', 'F', 'F');
};
// ContainerType3
scwin.btn_popHhcnt3type_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType3', 'F', 'F', 'F');
};
// ContainerType4
scwin.btn_popHhcnt4type_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType4', 'F', 'F', 'F');
};
// vsl code
scwin.udc_hhvslcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Vessel', 'F', 'F', 'F');
};
// 이벤트 처리
scwin.ed_hhcnt1type_onviewchange = function (info) {
  if (info.oldValue != info.newValue && !$c.util.isEmpty($p, info.newValue)) {
    scwin.f_OpenCommonPopUp("ContainerType1", "T", "F", "F");
  }
};
scwin.ed_hhcnt2type_onviewchange = function (info) {
  if (info.oldValue != info.newValue && !$c.util.isEmpty($p, info.newValue)) {
    scwin.f_OpenCommonPopUp("ContainerType2", "T", "F", "F");
  }
};
scwin.ed_hhcnt3type_onviewchange = function (info) {
  if (info.oldValue != info.newValue && !$c.util.isEmpty($p, info.newValue)) {
    scwin.f_OpenCommonPopUp("ContainerType3", "T", "F", "F");
  }
};
scwin.ed_hhcnt4type_onviewchange = function (info) {
  if (info.oldValue != info.newValue && !$c.util.isEmpty($p, info.newValue)) {
    scwin.f_OpenCommonPopUp("ContainerType4", "T", "F", "F");
  }
};

// ed_blno (MHNO 가져 오기)  change event onKillFocus()
scwin.cnd_ed_hhblno_onblur = function (e) {
  if (cnd_ed_hhblno.options.hidVal === cnd_ed_hhblno.getValue()) {
    return;
  }
  if (!$c.util.isEmpty($p, cnd_ed_hhblno.getValue())) {
    scwin.f_MhnoLoading("1");
  }
};
scwin.cnd_ed_hhblno_onfocus = function (e) {
  cnd_ed_hhblno.options.hidVal = cnd_ed_hhblno.getValue();
};

// ed_hhbkgno (Booking 정보 가져 오기)  change event onKillFocus()
scwin.ed_hhbkgno_onblur = function (info) {
  if (scwin.statusFlag === "C") {
    if ($c.util.isEmpty($p, ed_hhbkgno.getValue())) {
      scwin.f_bookingSearchPopup();
    } else {
      scwin.f_BookingLoading();
    }
  }
};
// Booking Seq event=OnSelChange : Index가 변경되었을때 발생  OnSelChange()
scwin.lc_hhbkgseq_onviewchange = function (info) {
  if (scwin.statusFlag === "C") {
    if ($c.util.isEmpty($p, ed_hhbkgno.getValue())) {
      scwin.cfViewTab(0); // 1번째 탭
      lc_hhbkgseq.focus();
    } else {
      scwin.f_ContainerLoading();
    }
  }
};
// PP/CC event=OnSelChange : Index가 변경되었을때 발생 OnSelChange()
scwin.lc_hhpcgb_onviewchange = function (info) {
  if (scwin.statusFlag === "C") {
    if (lc_hhpcgb.getValue() == "P") {
      // info.newValue
      lc_hhpaynm.setValue(lc_hhisunm.getValue());
      lc_hhprenm.setSelectedIndex(0);
    } else {
      lc_hhpaynm.setSelectedIndex(3);
      lc_hhprenm.setSelectedIndex(1);
    }
  }
};
// "ed_hhscd" event="onKillFocus()
scwin.ed_hhscd_onviewchange = function (info) {
  const newValue = info.newValue;
  if (scwin.statusFlag === "C") {
    // 신규
    txt_hhs1.setValue("");
    txt_hhs2.setValue("");
    txt_hhs3.setValue("");
    txt_hhs4.setValue("");
    txt_hhs5.setValue("");
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_PopUp("Shipper", "T");
    }
  } else if (scwin.statusFlag === "U") {
    // 수정
    if ($c.util.isEmpty($p, txt_hhs1.getValue())) {
      txt_hhs1.setValue("");
      txt_hhs2.setValue("");
      txt_hhs3.setValue("");
      txt_hhs4.setValue("");
      txt_hhs5.setValue("");
      if (!$c.util.isEmpty($p, newValue)) {
        scwin.f_PopUp("Shipper", "T");
      }
    }
  }
};
// ed_hhccd" event="onKillFocus()"
scwin.ed_hhccd_onviewchange = function (info) {
  const newValue = info.newValue;
  if (scwin.statusFlag === "C") {
    // 신규
    txt_hhc1.setValue("");
    txt_hhc2.setValue("");
    txt_hhc3.setValue("");
    txt_hhc4.setValue("");
    txt_hhc5.setValue("");
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_PopUp("Consignee", "T");
    }
  } else if (scwin.statusFlag === "U") {
    // 수정
    if ($c.util.isEmpty($p, txt_hhc1.getValue())) {
      txt_hhc1.setValue("");
      txt_hhc2.setValue("");
      txt_hhc3.setValue("");
      txt_hhc4.setValue("");
      txt_hhc5.setValue("");
      if (!$c.util.isEmpty($p, newValue)) {
        scwin.f_PopUp("Consignee", "T");
      }
    }
  }
};
// ed_hhncd" event="onKillFocus()"
scwin.ed_hhncd_onviewchange = function (info) {
  const newValue = info.newValue;
  if (scwin.statusFlag === "C") {
    // 신규
    txt_hhn1.setValue("");
    txt_hhn2.setValue("");
    txt_hhn3.setValue("");
    txt_hhn4.setValue("");
    txt_hhn5.setValue("");
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_PopUp("Notify", "T");
    }
  } else if (scwin.statusFlag === "U") {
    // 수정
    if ($c.util.isEmpty($p, txt_hhn1.getValue())) {
      txt_hhn1.setValue("");
      txt_hhn2.setValue("");
      txt_hhn3.setValue("");
      txt_hhn4.setValue("");
      txt_hhn5.setValue("");
      if (!$c.util.isEmpty($p, newValue)) {
        scwin.f_PopUp("Notify", "T");
      }
    }
  }
};
// ed_hhvslcd event=onKillFocus()
scwin.udc_hhvslcd_onviewchangeCodeEvent = function (info) {
  const newValue = info.newValue;
  const oldValue = info.oldValue;
  if (newValue != oldValue) {
    txt_hhvsl.setValue("");
    if (!$c.util.isEmpty($p, newValue)) {
      scwin.f_OpenCommonPopUp("Vessel", "T", "F", "F");
    }
  }
};
scwin.udc_hhlodcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Loading', 'F', 'F', 'F');
};
// ed_hhlodcd event=onKillFocus()
scwin.udc_hhlodcd_onviewchangeCodeEvent = function (info) {
  if (!$c.util.isEmpty($p, ed_hhlodcd.getValue())) {
    txt_hhlodnm.setValue("");
    scwin.f_OpenCommonPopUp("Loading", "T", "F", "F");
  }
};
scwin.udc_hhlodcd_onviewchangeNameEvent = function (info) {
  const newValue = info.newValue;
  const oldValue = info.oldValue;
  if (newValue != oldValue) {
    if (!$c.util.isEmpty($p, ed_hhlodcd.getValue())) {
      scwin.f_OpenCommonPopUp("Loading", "F", "F", "F");
    }
  }
};
scwin.udc_hhdisccd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Discharge', 'F', 'F', 'F');
};
// ed_hhdisccd event=onKillFocus()
scwin.udc_hhdisccd_onviewchangeCodeEvent = function (info) {
  txt_hhdiscnm.setValue("");
  if (!$c.util.isEmpty($p, ed_hhdisccd.getValue())) {
    scwin.f_OpenCommonPopUp("Discharge", "T", "F", "F");
  }
};
scwin.udc_hhdisccd_onviewchangeNameEvent = function (info) {
  if ($c.util.isEmpty($p, ed_hhdisccd.getValue())) {
    scwin.f_OpenCommonPopUp("Discharge", "F", "F", "F");
  }
};
scwin.udc_hhunitcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Unit', 'F', 'F', 'F');
};

// ed_hhunitcd event=onKillFocus()
scwin.udc_hhunitcd_onviewchangeCodeEvent = function (info) {
  txt_hhunit.setValue("");
  if (!$c.util.isEmpty($p, ed_hhunitcd.getValue())) {
    scwin.f_OpenCommonPopUp("Unit", "T", "F", "F");
  }
};
scwin.udc_hhunitcd_onviewchangeNameEvent = function (info) {
  if ($c.util.isEmpty($p, ed_hhunitcd.getValue())) {
    scwin.f_OpenCommonPopUp("Unit", "F", "F", "F");
  }
};
// Partner code
scwin.udc_hhagent_onclickEvent = function (e) {
  scwin.f_PopUp('Partner', 'F');
};
// ed_hhagent event=onKillFocus()
scwin.udc_hhagent_onviewchangeCodeEvent = function (info) {
  txt_hhagentnm.setValue("");
  if (!$c.util.isEmpty($p, ed_hhagent.getValue())) {
    scwin.f_PopUp('Partner', 'T');
  }
};
scwin.udc_hhagent_onviewchangeNameEvent = function (info) {
  if ($c.util.isEmpty($p, ed_hhagent.getValue())) {
    scwin.f_PopUp('Partner', 'F');
  }
};
// Partner PIC code
scwin.udc_hhagentattn_onclickEvent = function (e) {
  scwin.f_PopUp('PartnerPic', 'F');
};
// ed_hhagentattn event=onKillFocus()
scwin.udc_hhagentattn_onviewchangeCodeEvent = function (info) {
  txt_hhagentattnnm.setValue("");
  if (!$c.util.isEmpty($p, ed_hhagentattn.getValue())) {
    scwin.f_PopUp('PartnerPic', 'T');
  }
};
scwin.udc_hhagentattn_onviewchangeNameEvent = function (info) {
  if ($c.util.isEmpty($p, ed_hhagentattn.getValue())) {
    scwin.f_PopUp('PartnerPic', 'F');
  }
};
// Customer code
scwin.udc_hhactcust_onclickEvent = function (e) {
  scwin.f_PopUp('Customer', 'F');
};
// ed_hhactcust event=onKillFocus()
scwin.udc_hhactcust_onviewchangeCodeEvent = function (info) {
  txt_hhactcustnm.setValue("");
  if (!$c.util.isEmpty($p, ed_hhactcust.getValue())) {
    scwin.f_PopUp('Customer', 'T');
  }
};
scwin.udc_hhactcust_onviewchangeNameEvent = function (info) {
  if ($c.util.isEmpty($p, ed_hhactcust.getValue())) {
    scwin.f_PopUp('Customer', 'F');
  }
};
// CustomerPic code
scwin.udc_hhactattn_onclickEvent = function (e) {
  scwin.f_PopUp('CustomerPic', 'F');
};
// ed_hhactattn event=onKillFocus()
scwin.udc_hhactattn_onviewchangeCodeEvent = function (info) {
  txt_hhactattnnm.setValue("");
  if (!$c.util.isEmpty($p, ed_hhactattn.getValue())) {
    scwin.f_PopUp('CustomerPic', 'T');
  }
};
scwin.udc_hhactattn_onviewchangeNameEvent = function (info) {
  if ($c.util.isEmpty($p, ed_hhactattn.getValue())) {
    scwin.f_PopUp('CustomerPic', 'F');
  }
};
// Salesman code
scwin.udc_hhsales_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Salesman', 'F', 'F', 'F');
};
// ed_hhsales event=onKillFocus()
scwin.udc_hhsales_onviewchangeCodeEvent = function (info) {
  txt_hhsalesnm.setValue("");
  if (!$c.util.isEmpty($p, ed_hhsales.getValue())) {
    scwin.f_OpenCommonPopUp("Salesman", "T", "F", "F");
  }
};
scwin.udc_hhsales_onviewchangeNameEvent = function (info) {
  if ($c.util.isEmpty($p, ed_hhsales.getValue())) {
    scwin.f_OpenCommonPopUp("Salesman", "F", "F", "F");
  }
};
// carrier - Liner code
scwin.udc_hhliner_onclickEvent = function (e) {
  scwin.f_PopUp('Liner', 'F');
};
// ed_hhliner event=onKillFocus()
scwin.udc_hhliner_onviewchangeCodeEvent = function (info) {
  txt_hhlinernm.setValue("");
  if (!$c.util.isEmpty($p, ed_hhliner.getValue())) {
    scwin.f_PopUp('Liner', 'T');
  }
};
scwin.udc_hhliner_onviewchangeNameEvent = function (info) {
  if ($c.util.isEmpty($p, ed_hhliner.getValue())) {
    scwin.f_PopUp('Liner', 'F');
  }
};
// carrier - LinerPIC code
scwin.udc_hhlinerattn_onclickEvent = function (e) {
  scwin.f_PopUp('LinerPic', 'F');
};
// ed_hhlinerattn event=onKillFocus()
scwin.udc_hhlinerattn_onviewchangeCodeEvent = function (info) {
  txt_hhlinerattnnm.setValue("");
  if (!$c.util.isEmpty($p, ed_hhlinerattn.getValue())) {
    scwin.f_PopUp('LinerPic', 'T');
  }
};
scwin.udc_hhlinerattn_onviewchangeNameEvent = function (info) {
  if ($c.util.isEmpty($p, ed_hhlinerattn.getValue())) {
    scwin.f_PopUp('LinerPic', 'F');
  }
};
// DEPT code
scwin.udc_hhbuyer_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('DEPT', 'F', 'F', 'F');
};
// ed_hhbuyer event=onKillFocus()
scwin.udc_hhbuyer_onviewchangeCodeEvent = function (info) {
  txt_hhbuyernm.setValue("");
  if (!$c.util.isEmpty($p, ed_hhbuyer.getValue())) {
    scwin.f_OpenCommonPopUp("DEPT", "T", "F", "F");
  }
};
scwin.udc_hhbuyer_onviewchangeNameEvent = function (info) {
  if ($c.util.isEmpty($p, ed_hhbuyer.getValue())) {
    scwin.f_OpenCommonPopUp("DEPT", "F", "F", "F");
  }
};
// Item code => 명칭 숨기기
scwin.udc_hhitem_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Item', 'F', 'F', 'F');
};
// ed_hhitem event=onKillFocus()
scwin.udc_hhitem_onviewchangeCodeEvent = function (info) {
  txt_hhmitem1.setValue("");
  if (!$c.util.isEmpty($p, ed_hhitem.getValue())) {
    scwin.f_OpenCommonPopUp("Item", "T", "F", "F");
  }
};
scwin.udc_hhitem_onviewchangeNameEvent = function (info) {
  if ($c.util.isEmpty($p, ed_hhitem.getValue())) {
    scwin.f_OpenCommonPopUp("Item", "F", "F", "F");
  }
};
// Place of Receipt code
scwin.udc_hhrcvcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Receipt', 'F', 'F', 'F');
};
// ed_hhrcvcd event=onKillFocus()
scwin.udc_hhrcvcd_onviewchangeCodeEvent = function (info) {
  txt_hhrcvnm.setValue("");
  if (!$c.util.isEmpty($p, ed_hhrcvcd.getValue())) {
    scwin.f_OpenCommonPopUp("Receipt", "T", "F", "F");
  }
};
// ed_hhrcvcd event=onKillFocus()
scwin.udc_hhrcvcd_onviewchangeNameEvent = function (info) {
  if ($c.util.isEmpty($p, ed_hhrcvcd.getValue())) {
    scwin.f_OpenCommonPopUp("Receipt", "F", "F", "F");
  }
};
scwin.udc_hhdlvcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Delivery', 'F', 'F', 'F');
};
// ed_hhdlvcd event=onKillFocus()
scwin.udc_hhdlvcd_onviewchangeCodeEvent = function (info) {
  txt_hhdlvnm.setValue("");
  if (!$c.util.isEmpty($p, ed_hhdlvcd.getValue())) {
    scwin.f_OpenCommonPopUp("Delivery", "T", "F", "F");
  }
};
scwin.udc_hhdlvcd_onviewchangeNameEvent = function (info) {
  txt_hhdlvnm.setValue("");
  if (!$c.util.isEmpty($p, ed_hhdlvcd.getValue())) {
    scwin.f_OpenCommonPopUp("Delivery", "F", "F", "F");
  }
};
scwin.udc_hhfdcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Destination', 'F', 'F', 'F');
};
// ed_hhfdcd event=onKillFocus()>
scwin.udc_hhfdcd_onviewchangeCodeEvent = function (info) {
  txt_hhfdnm.setValue("");
  if (!$c.util.isEmpty($p, ed_hhfdcd.getValue())) {
    scwin.f_OpenCommonPopUp("Destination", "T", "F", "F");
  }
};
scwin.udc_hhfdcd_onviewchangeNameEvent = function (info) {
  if ($c.util.isEmpty($p, ed_hhfdcd.getValue())) {
    scwin.f_OpenCommonPopUp("Destination", "F", "F", "F");
  }
};
// ed_mwarecd event=onKillFocus()
scwin.udc_mwarecd_onviewchangeCodeEvent = function (info) {
  txt_mwarenm.setValue("");
  if (!$c.util.isEmpty($p, ed_hhfdcd.getValue())) {
    scwin.f_OpenCommonPopUp("Mware", "T", "F", "F");
  }
};
// ed_hhetd event=onKillFocus()
scwin.ed_hhetd_onviewchange = function (info) {
  const newValue = info.newValue;
  const oldValue = info.oldValue;
  if (scwin.statusFlag === "C" || scwin.statusFlag === "U") {
    ed_hhondt.setValue(newValue);
    ed_hhisudt.setValue(newValue);
  }
};

// B/L PIC code
scwin.udc_blpic_onclickEvent = function (e) {
  scwin.f_PopUp('B/L PIC', 'F');
};

// ed_blpic event=onKillFocus()
scwin.udc_blpic_onviewchangeCodeEvent = function (info) {
  txt_blpic.setValue("");
  if (!$c.util.isEmpty($p, ed_blpic.getValue())) {
    scwin.f_PopUp("B/L PIC", "T");
  }
};
scwin.udc_blpic_onviewchangeNameEvent = function (info) {
  if ($c.util.isEmpty($p, ed_blpic.getValue())) {
    scwin.f_PopUp("B/L PIC", "F");
  }
};
// Warehouse
scwin.udc_hhwarecd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Warehouse', 'F', 'F', 'F');
};
// ed_hhwarecd event=onKillFocus()
scwin.udc_hhwarecd_onviewchangeCodeEvent = function (info) {
  txt_hhwarenm.setValue("");
  if (!$c.util.isEmpty($p, ed_hhwarecd.getValue())) {
    scwin.f_OpenCommonPopUp('Warehouse', 'T', 'F', 'F');
  }
};
scwin.udc_hhwarecd_onviewchangeNameEvent = function (info) {
  if ($c.util.isEmpty($p, ed_hhwarecd.getValue())) {
    scwin.f_OpenCommonPopUp('Warehouse', 'F', 'F', 'F');
  }
};

// 그리드 팝업
scwin.gr_ocContList_ontextimageclick = function (rowIndex, columnIndex) {
  var row = rowIndex;
  var col = gr_ocContList.getColumnID(columnIndex);
  switch (col) {
    case "mctype":
      scwin.f_PopUpGrid("mctype", row, "F");
      break;
    case "mcpkgcd":
      scwin.f_PopUpGrid("mcpkgcd", row, "F");
      break;
  }
};

// gr_ocContList event=OnExit(row,colid,olddata) : v
scwin.gr_ocContList_onviewchange = function (info) {
  const row = info.rowIndex;
  const colid = info.colId;
  const olddata = info.oldValue;
  if (!$c.util.isEmpty($p, ds_ocContList.getCellData(row, "mctype"))) {
    var STR = ds_containerType.getMatchedData("code", ds_ocContList.getCellData(row, "mctype"));
    if (STR.length < 1) {
      // 값이 없을때 == 0
      $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Container Type"]); //  @이(가) 존재하지 않습니다.
      gr_ocContList.focus();
      gr_ocContList.setFocusedCell(row, "mctype", false);
      return;
    } else {
      return true;
    }
  }
  switch (colid) {
    case "mccntno":
      // 3269
      for (var i = 0; i < ds_ocContList.getRowCount() - 1; i++) {
        for (var j = i + 1; j <= ds_ocContList.getRowCount(); j++) {
          var v1 = ds_ocContList.getCellData(i, "mccntno");
          var v2 = ds_ocContList.getCellData(j, "mccntno");

          // AUTO 생성 시(둘 다 빈값이면 skip)
          if ($c.util.isEmpty($p, v1) && $c.util.isEmpty($p, v2)) {
            continue;
          }
          if (v1 === v2) {
            $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_032, ["Container"]); // @은(는) 중복될 수 없습니다.

            // 그리드 포커스 + 컬럼 포커스
            gr_ocContList.focus();
            gr_ocContList.setFocusedCell(j, "mccntno", true);
            return;
          }
        }
      }
      break;
    case "mctype":
      //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
      if (!$c.util.isEmpty($p, ds_ocContList.getCellData(row, colid))) {
        scwin.f_PopUpGrid("mctype", row, "T");
        //Name field 존재시 check.
        //Name Value 가 Blank 일경우 코드값을 Blank 한다.
      } else {
        // if(ds_ocContList.NameValue(Row,Colid).trim() == "") {
        ds_ocContList.setCellData(row, "mctype", "");
        //ds_ocContList.NameValue(Row,"transnm") = "";
      }
      break;
    case "mcpkgcd":
      //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
      if (!$c.util.isEmpty($p, ds_ocContList.getCellData(row, colid))) {
        //ds_bulkDoorOrder.NameValue(Row,"transcd") = "";
        scwin.f_PopUpGrid("mcpkgcd", Row, "T");
        //Name field 존재시 check.
        //Name Value 가 Blank 일경우 코드값을 Blank 한다.
      } else {
        // if(ds_ocContList.NameValue(Row,Colid).trim() == "") {
        ds_ocContList.setCellData(row, "mcpkgcd", "");
        //ds_containerDoorOrder.NameValue(Row,"transnm") = "";
      }
      break;
    default:
      break;
  }
};
scwin.oneditkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.oneditkeyup2 = function (info, e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.gr_ocContList_onfilereadend = function (value) {
  ds_ocContList.modifyAllStatus("C");
  if (scwin.statusFlag == "U" || scwin.statusFlag == "C") {
    for (var i = 0; i < ds_ocContList.getTotalRow(); i++) {
      gr_ocContList.setCellReadOnly(i, "mccntno", false);
      gr_ocContList.setCellReadOnly(i, "mctype", false);
      gr_ocContList.setCellReadOnly(i, "mcseal1", false);
      gr_ocContList.setCellReadOnly(i, "mcseal2", false);
      gr_ocContList.setCellReadOnly(i, "mcpkg", false);
      gr_ocContList.setCellReadOnly(i, "mcpkgcd", false);
      gr_ocContList.setCellReadOnly(i, "mcwgt", false);
      gr_ocContList.setCellReadOnly(i, "mcmsr", false);
      gr_ocContList.setCellReadOnly(i, "mciso", false);
    }
  }
};
scwin.udc_hhvslcd_onblurCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = ed_hhvslcd.getValue();
  if (strClntNo.length > 0) {
    txt_hhvsl.setValue("");
    scwin.f_OpenCommonPopUp("Vessel", "T", "F", "F");
  } else {
    txt_hhvsl.setValue("");
  }
};
scwin.ed_hheta_onviewchange = function (info) {
  if (scwin.statusFlag === "C") {
    if ($c.util.isEmpty($p, ed_creadyDt.getValue())) {
      ed_creadyDt.setValue(ed_hheta.getValue());
    }
  }
};
scwin.sbm_delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_004);
  cnd_ed_hhblno.setValue("");
  ds_houseblList.removeAll();
  ds_ocContList.removeAll();
  ds_slipTax.removeAll();
  ds_ocProfitList.removeAll();
  ds_hitekContents.removeAll();
  $c.gus.cfEnableObj($p, cnd_ed_hhblno, true);
  $c.gus.cfEnableObj($p, cnd_lc_mhno, true);
  cnd_ed_hhblno.focus();
  scwin.f_Set("INIT");

  // onsubmitdone
};
scwin.lc_pathCd_ontoggleclick = async function (beforeOpen) {
  ds_condition_path.set("hhactcust", ed_hhactcust.getValue());
  ds_condition_path.set("path", "");
  ds_condition_path.set("hhblno", "");
  sbm_retrieve_path.processMsg = "";
  await $c.sbm.execute($p, sbm_retrieve_path);
};
scwin.ds_houseblList_ondataload = function () {
  ds_houseblMap.setJSON(ds_houseblList.getRowJSON(0));
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w200',id:'cnd_ed_hhblno',placeholder:'',style:'',mandatory:'true',ref:'data:ds_retrieve.hhblno',maxlength:'20',allowChar:'0-9|a-z|A-Z','ev:oneditkeyup':'scwin.oneditkeyup2','ev:onblur':'scwin.cnd_ed_hhblno_onblur','ev:onfocus':'scwin.cnd_ed_hhblno_onfocus',title:'House No'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'cnd_lc_autono',chooseOption:'',class:'w150',style:'',submenuSize:'auto',displayMode:'value delim label',objType:'data',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',title:'B/L Type'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Original'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ORIGINAL'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Surrender'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'SURRENDER'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Direct'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DIRECT'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DOC No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{class:' w150',editType:'select',id:'cnd_lc_mhno',search:'start',style:'',submenuSize:'auto',objType:'data',chooseOptionLabel:'',displayMode:'label',searchTarget:'code',allOption:'',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',title:'Document No'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_hmhno'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w200',id:'cnd_ed_hhmblno',placeholder:'',style:'',maxByteLength:'20',disabled:'true',objType:'data',readOnly:'true',ref:'data:ds_houseblMap.hhmblno',title:'Master B/L'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'clear'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',userAuth:'R',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tabbox ',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',class:'wq_tab',id:'tbc_main',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'Header',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'Other',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content1',style:'height: auto;'},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'height:56px;'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Booking',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhbkgno','ev:onblur':'scwin.ed_hhbkgno_onblur',maxByteLength:'16','ev:onkeyup':'scwin.oneditkeyup',style:'',id:'ed_hhbkgno',placeholder:'',allowChar:'a-zA-Z0-9',title:'Booking',class:'',objType:'data',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Seq',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{submenuSize:'auto',chooseOptionLabel:'$blank',chooseOption:'',allOption:'',title:'Booking Seq',displayMode:'value delim label',search:'start',ref:'','ev:onviewchange':'scwin.lc_hhbkgseq_onviewchange',editType:'select',style:'width:85px;',id:'lc_hhbkgseq',class:'',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_bkseq'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Shipper',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhscd',maxlength:'6',inputMode:'numeric','ev:onviewchange':'scwin.ed_hhscd_onviewchange',style:'width:85px;',id:'ed_hhscd',allowChar:'0-9',title:'Shipper',class:'',objType:'data',mandatory:'false'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_popHhscd_onclick',style:'',id:'btn_popHhscd',type:'button',class:'btn ico sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'height:141px;'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-4'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhs1',maxlength:'100',style:'',id:'txt_hhs1',placeholder:'',title:'Shipper1',class:'',objType:'data'}},{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhs2',maxlength:'50',style:'',id:'txt_hhs2',placeholder:'',title:'Shipper2',class:'',objType:'data'}},{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhs3',maxlength:'50',style:'',id:'txt_hhs3',placeholder:'',title:'Shipper3',class:'',objType:'data'}},{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhs4',maxlength:'50',style:'',id:'txt_hhs4',placeholder:'',title:'Shipper4',class:'',objType:'data'}},{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhs5',maxlength:'50',style:'',id:'txt_hhs5',placeholder:'',title:'Shipper5',class:'',objType:'data'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Consignee',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhccd',maxlength:'6',inputMode:'numeric','ev:onviewchange':'scwin.ed_hhccd_onviewchange',style:'width:50px;',id:'ed_hhccd',placeholder:'',allowChar:'0-9',title:'Consignee',class:'',objType:'data'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_popHhccd_onclick',style:'',id:'btn_popHhccd',type:'button',class:'btn ico sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'U','ev:onclick':'scwin.f_cCopy',style:'',id:'btn_1',type:'button',class:'btn sm link '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Notify Copy'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'height:140px;'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-4'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhc1',maxlength:'100',style:'',id:'txt_hhc1',title:'Consignee1',class:'',objType:'data'}},{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhc2',maxlength:'50',style:'',id:'txt_hhc2',title:'Consignee2',class:'',objType:'data'}},{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhc3',maxlength:'50',style:'',id:'txt_hhc3',title:'Consignee3',class:'',objType:'data'}},{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhc4',maxlength:'50',style:'',id:'txt_hhc4',title:'Consignee4',class:'',objType:'data'}},{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhc5',maxlength:'50',style:'',id:'txt_hhc5',title:'Consignee5',class:'',objType:'data'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Notify',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhncd',maxlength:'6',inputMode:'numeric','ev:onviewchange':'scwin.ed_hhncd_onviewchange',style:'width: 50px;',id:'ed_hhncd',placeholder:'',allowChar:'0-9',title:'Notify',class:'',objType:'data'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_popHhncd_onclick',style:'',id:'btn_popHhncd',type:'button',class:'btn ico sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'U','ev:onclick':'scwin.f_same',style:'',id:'btn_2',type:'button',class:'btn sm link '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Same'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'U','ev:onclick':'scwin.f_nCopy',style:'',id:'btn_3',type:'button',class:'btn sm link '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Copy'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'height:155px;'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-4'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhn1',maxlength:'100',style:'',id:'txt_hhn1',title:'Notify1',class:'',objType:'data'}},{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhn2',maxlength:'50',style:'',id:'txt_hhn2',title:'Notify2',class:'',objType:'data'}},{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhn3',maxlength:'50',style:'',id:'txt_hhn3',title:'Notify3',class:'',objType:'data'}},{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhn4',maxlength:'50',style:'',id:'txt_hhn4',title:'Notify4',class:'',objType:'data'}},{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhn5',maxlength:'50',style:'',id:'txt_hhn5',title:'Notify5',class:'',objType:'data'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'VSL/VOY',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'row-gap-4',id:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',btnId:'btn_hhvslcd',code:'hhvslcd',codeId:'ed_hhvslcd','ev:onblurCodeEvent':'scwin.udc_hhvslcd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_hhvslcd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_hhvslcd_onviewchangeCodeEvent',id:'udc_hhvslcd',maxlengthCode:'6',name:'hhvsl',nameId:'txt_hhvsl',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_houseblMap',style:'',validTitle:'Vessel'}},{T:1,N:'xf:input',A:{class:'',id:'txt_hhvyg',maxByteLength:'11',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhvyg',style:'max-width:150px;',title:'Voyage'}}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',codeId:'','ev:onclickEvent':'scwin.udc_hhagent_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_hhagent_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_hhagent_onviewchangeNameEvent',id:'udc_common',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',style:'display : none;',validTitle:'Partner'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Loading',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'a-z|A-Z',btnId:'btn_hhlodcd',code:'hhlodcd',codeId:'ed_hhlodcd','ev:onblurCodeEvent':'scwin.udc_hhlodcd_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_hhlodcd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhlodcd_onviewchangeNameEvent',id:'udc_hhlodcd',maxlengthCode:'5',maxlengthName:'35',name:'hhlodnm',nameId:'txt_hhlodnm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_houseblMap',style:'',validTitle:'Loading'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Discharge',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'a-z|A-Z',btnId:'btn_hhdisccd',code:'hhdisccd',codeId:'ed_hhdisccd','ev:onblurCodeEvent':'scwin.udc_hhdisccd_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_hhdisccd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhdisccd_onviewchangeNameEvent',id:'udc_hhdisccd',maxlengthCode:'5',name:'hhdiscnm',nameId:'txt_hhdiscnm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_houseblMap',style:'',validTitle:'Discharge'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Delivery',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'a-z|A-Z',btnId:'btn_hhdlvcd',code:'hhdlvcd',codeId:'ed_hhdlvcd','ev:onblurCodeEvent':'scwin.udc_hhdlvcd_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_hhdlvcd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhdlvcd_onviewchangeNameEvent',id:'udc_hhdlvcd',maxlengthCode:'5',name:'hhdlvnm',nameId:'txt_hhdlvnm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_houseblMap',style:'',validTitle:'Place of Delivery'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Destination',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'a-z|A-Z',btnId:'btn_hhfdcd',code:'hhfdcd',codeId:'ed_hhfdcd','ev:onblurCodeEvent':'scwin.udc_hhfdcd_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_hhfdcd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhfdcd_onviewchangeNameEvent',id:'udc_hhfdcd',maxlengthCode:'5',name:'hhfdnm',nameId:'txt_hhfdnm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_houseblMap',style:'',validTitle:'Final Destination'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Package',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'',dataType:'number',displayFormat:'#,###','ev:onviewchange':'scwin.ed_hhpkg_onviewchange',id:'ed_hhpkg',inputMode:'numeric',maxByteLength:'10',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhpkg',style:'width:90px;text-align:right;',title:'Fackage'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Unit',ref:'',style:'',userData2:''}},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'0-9|a-z|A-Z',btnId:'btn_hhunitcd',code:'hhunitcd',codeId:'ed_hhunitcd',codeWidth:'50','ev:onblurCodeEvent':'scwin.udc_hhunitcd_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_hhunitcd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhunitcd_onviewchangeNameEvent',id:'udc_hhunitcd',maxlengthCode:'2',name:'hhunit',nameId:'txt_hhunit',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_houseblMap',style:'',validTitle:'Unit'}}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Weight',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',dataType:'number',id:'ed_hhgwgt',inputMode:'numeric',maxlength:'13',numberMask:'#,###.###',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhgwgt',style:'width:110px;text-align:right;',title:'Weight'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Measure',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{allowChar:'0-9',class:'',dataType:'number',displayFormat:'#,###',id:'ed_hhmsr',inputMode:'numeric',maxlength:'11',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhmsr',style:'width:110px;text-align:right;',title:'Measure'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'ETA',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',displayFormat:'yyyy/MM/dd','ev:onchange':'scwin.ed_hheta_onviewchange',fixLength:'8',id:'ed_hheta',isDate:'true',mandatory:'true',pickerType:'dynamic',ref:'data:ds_houseblMap.hheta',style:'',title:'ETD'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Onboard',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',displayFormat:'yyyy/MM/dd',fixLength:'8',id:'ed_hhondt',isDate:'true',pickerType:'dynamic',ref:'data:ds_houseblMap.hhondt',style:'',title:'Onboard'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETD',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',displayFormat:'yyyy/MM/dd','ev:onviewchange':'scwin.ed_hhetd_onviewchange',id:'ed_hhetd',mandatory:'false',objType:'data',pickerType:'dynamic',ref:'data:ds_houseblMap.hhetd',style:'',title:'ETD'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Issued Date',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',displayFormat:'yyyy/MM/dd',id:'ed_hhisudt',pickerType:'dynamic',ref:'data:ds_houseblMap.hhisudt',style:'',title:'Issued Date'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Result Date',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',displayFormat:'yyyy/MM/dd',id:'ed_creadyDt',mandatory:'true',pickerType:'dynamic',ref:'data:ds_houseblMap.creadyDt',style:'',title:'Result Date'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Dangerous',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_hhdanggb',objType:'data',ref:'data:ds_houseblMap.hhdanggb',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',title:'Dangerous'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PP/CC',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabledClass:'w2selectbox_disabled',displayMode:'label',editType:'select',emptyItem:'true','ev:onviewchange':'scwin.lc_hhpcgb_onviewchange',id:'lc_hhpcgb',objType:'data',ref:'data:ds_houseblMap.hhpcgb',search:'start',style:'width:110px;',submenuSize:'auto',title:'PP/CC'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:value',E:[{T:4,cdata:'P'}]},{T:1,N:'xf:label',E:[{T:4,cdata:'Prepaid'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]},{T:1,N:'xf:label',E:[{T:4,cdata:'Collect'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PickUp Date',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',displayFormat:'yyyy/MM/dd',id:'ed_pickupdt',pickerType:'dynamic',ref:'data:ds_houseblMap.pickupdt',style:'',title:'Pickup Date'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Cargo Type',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',chooseOptionLabel:'$blank',class:'',direction:'auto',disabledClass:'w2selectbox_disabled',displayMode:'label',editType:'select','ev:onviewchange':'scwin.lc_hhbltype_onviewchange',id:'lc_hhbltype',objType:'data',ref:'data:ds_houseblMap.hhbltype',search:'start',style:'width:150px;',submenuSize:'auto',title:'Cargo Type',visibleRowNum:'6'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FCL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'LCL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Bulk'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Service Term',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',chooseOptionLabel:'$blank',class:'',direction:'auto',disabledClass:'w2selectbox_disabled',displayMode:'label',editType:'select',emptyItem:'true',id:'lc_hhstype',objType:'data',ref:'data:ds_houseblMap.hhstype',search:'start',searchTarget:'value',style:'',submenuSize:'auto',title:'Service Term',visibleRowNum:'6'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_code_hhstype'},E:[{T:1,N:'xf:label',A:{ref:'label'}},{T:1,N:'xf:value',A:{ref:'value'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Container ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'0-9|a-z|A-Z',btnId:'',code:'',codeId:'','ev:onblurCodeEvent':'','ev:onclickEvent':'','ev:onviewchangeNameEvent':'',id:'udc_commonType',mandatory:'true',mandatoryCode:'true',maxlengthCode:'6',name:'',nameId:'',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'',style:'display : none;',validTitle:''}},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{UpperFlag:'1',allowChar:'a-zA-Z0-9',class:'','ev:onviewchange':'scwin.ed_hhcnt1type_onviewchange',id:'ed_hhcnt1type',maxByteLength:'4',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhcnt1type',style:'width: 50px;',title:'Container Type1'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch','ev:onclick':'scwin.btn_popHhcnt1type_onclick',id:'btn_popHhcnt1type',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{UpperFlag:'1',allowChar:'a-zA-Z0-9',class:'','ev:onviewchange':'scwin.ed_hhcnt2type_onviewchange',id:'ed_hhcnt2type',maxByteLength:'4',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhcnt2type',style:'width: 50px;',title:'Container Type2'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch','ev:onclick':'scwin.btn_popHhcnt2type_onclick',id:'btn_popHhcnt2type',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{UpperFlag:'1',allowChar:'a-zA-Z0-9',class:'','ev:onviewchange':'scwin.ed_hhcnt3type_onviewchange',id:'ed_hhcnt3type',maxByteLength:'4',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhcnt3type',style:'width: 50px;',title:'Container Type3'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch','ev:onclick':'scwin.btn_popHhcnt3type_onclick',id:'btn_popHhcnt3type',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{UpperFlag:'1',allowChar:'a-zA-Z0-9',class:'','ev:onviewchange':'scwin.ed_hhcnt4type_onviewchange',id:'ed_hhcnt4type',maxByteLength:'4',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhcnt4type',style:'width: 50px;',title:'Container Type4'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch','ev:onclick':'scwin.btn_popHhcnt4type_onclick',id:'btn_popHhcnt4type',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CNTR QTY',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',dataType:'number',id:'ed_hhcnt1',inputMode:'numeric',maxlength:'3',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhcnt1',style:'width:75px;text-align:right;',title:'Container Quantity1'}},{T:1,N:'xf:input',A:{class:'',dataType:'number',id:'ed_hhcnt2',inputMode:'numeric',maxlength:'3',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhcnt2',style:'width:75px;text-align:right;',title:'Container Quantity2'}},{T:1,N:'xf:input',A:{class:'',dataType:'number',id:'ed_hhcnt3',inputMode:'numeric',maxlength:'3',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhcnt3',style:'width:75px;text-align:right;',title:'Container Quantity3'}},{T:1,N:'xf:input',A:{class:'',dataType:'number',id:'ed_hhcnt4',inputMode:'numeric',maxlength:'3',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhcnt4',style:'width:75px;text-align:right;',title:'Container Quantity4'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'height:46px;'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Item',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'0-9|a-z|A-Z',btnId:'btn_hhitem',code:'hhitem',codeId:'ed_hhitem','ev:onblurCodeEvent':'scwin.udc_hhitem_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_hhitem_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhitem_onviewchangeNameEvent',id:'udc_hhitem',mandatory:'true',mandatoryCode:'true',maxlengthCode:'8',name:'hhmitem1',nameId:'txt_hhmitem1',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_houseblMap',validTitle:'Item'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th bg-req',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'EDI ITEM',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'txt_hhmitem2',mandatory:'true',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhmitem2',style:'width:200px;',title:'hhmitem2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L PIC',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',btnId:'btn_blpic',code:'pic',codeId:'ed_blpic','ev:onblurCodeEvent':'scwin.udc_blpic_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_blpic_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_blpic_onviewchangeNameEvent',id:'udc_blpic',maxlengthCode:'7',nameId:'txt_blpic',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_houseblMap',style:'',validTitle:'B/L PIC'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Invoice No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_cino',objType:'data',ref:'data:ds_houseblMap.cino',style:'max-width:150px;'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Partner',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',btnId:'btn_hhagent',code:'hhagent',codeId:'ed_hhagent','ev:onblurCodeEvent':'scwin.udc_hhagent_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_hhagent_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhagent_onviewchangeNameEvent',id:'udc_hhagent',maxlengthCode:'6',name:'hhagentnm',nameId:'txt_hhagentnm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_houseblMap',style:'',validTitle:'Partner'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PIC',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',btnId:'btn_hhagentattn',code:'hhagentattn',codeId:'ed_hhagentattn','ev:onblurCodeEvent':'scwin.udc_hhagentattn_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_hhagentattn_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhagentattn_onviewchangeNameEvent',id:'udc_hhagentattn',maxlengthCode:'2',name:'hhagentattnnm',nameId:'txt_hhagentattnnm',objType:'data',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_houseblMap',selectID:'retrieveEngClntInfo',style:'',validTitle:'Partner PIC'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',btnId:'btn_hhactcust',code:'hhactcust',codeId:'ed_hhactcust','ev:onblurCodeEvent':'scwin.udc_hhactcust_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_hhactcust_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhactcust_onviewchangeNameEvent',id:'udc_hhactcust',maxlengthCode:'6',name:'hhactcustnm',nameId:'txt_hhactcustnm',objType:'data',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_houseblMap',style:'',validTitle:'Customer'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PIC',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',btnId:'btn_hhactattn',code:'hhactattn',codeId:'ed_hhactattn','ev:onblurCodeEvent':'scwin.udc_hhactattn_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_hhactattn_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhactattn_onviewchangeNameEvent',id:'udc_hhactattn',maxlengthCode:'2',name:'hhactattnnm',nameId:'txt_hhactattnnm',objType:'data',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_houseblMap',style:'',validTitle:'Customer PIC'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Salesman',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',btnId:'btn_hhsales',code:'hhsales',codeId:'ed_hhsales','ev:onblurCodeEvent':'scwin.udc_hhsales_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_hhsales_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhsales_onviewchangeNameEvent',id:'udc_hhsales',maxlengthCode:'8',name:'hhsalesnm',nameId:'txt_hhsalesnm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_houseblMap',validTitle:'Salesman'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Carrier',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',btnId:'btn_hhliner',code:'hhliner',codeId:'ed_hhliner','ev:onblurCodeEvent':'scwin.udc_hhliner_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_hhliner_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhliner_onviewchangeNameEvent',id:'udc_hhliner',maxlengthCode:'6',name:'hhlinernm',nameId:'txt_hhlinernm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_houseblMap',validTitle:'Carrier'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PIC',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',btnId:'btn_hhlinerattn',code:'hhlinerattn',codeId:'ed_hhlinerattn','ev:onblurCodeEvent':'scwin.udc_hhlinerattn_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_hhlinerattn_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhlinerattn_onviewchangeNameEvent',id:'udc_hhlinerattn',maxlengthCode:'2',name:'hhlinerattnnm',nameId:'txt_hhlinerattnnm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_houseblMap',validTitle:'Carrier PIC'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{class:'btn sm link ','ev:onclick':'scwin.f_departmentChange',id:'pu_departmentChange',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Dept'}]}]},{T:1,N:'w2:textbox',A:{class:'req',escape:'false',id:'',label:' &nbsp;',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'0-9|a-z|A-Z',btnId:'btn_hhbuyer',code:'hhbuyer',codeId:'ed_hhbuyer','ev:onblurCodeEvent':'scwin.udc_hhbuyer_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_hhbuyer_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhbuyer_onviewchangeNameEvent',id:'udc_hhbuyer',mandatory:'true',mandatoryCode:'true',maxlengthCode:'6',name:'hhbuyernm',nameId:'txt_hhbuyernm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_houseblMap',validTitle:'DEPT'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Incoterms',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',class:'',editType:'select',id:'lc_hhincoterm',objType:'data',ref:'data:ds_houseblListMap.hhincoterm',search:'start',style:'width: 150px;',submenuSize:'auto',title:'Incoterms'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Path',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',class:'',displayMode:'value delim label',editType:'select','ev:ontoggleclick':'scwin.lc_pathCd_ontoggleclick',id:'lc_pathCd',objType:'data',ref:'data:ds_houseblMap.pathCd',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'20'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_result_path'},E:[{T:1,N:'w2:label',A:{ref:'pathNm'}},{T:1,N:'w2:value',A:{ref:'pathCd'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_hhtriange',objType:'data',ref:'data:ds_houseblMap.hhtriange',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'Triangle'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Triangle'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_hhnomi',objType:'data',ref:'data:ds_houseblMap.hhnomi',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'NOMI'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NOMI'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'O B/L',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_hhobl',maxByteLength:'1',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhobl',style:'width: 50px;',title:'Old B/L'}}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Co-Load',ref:'',style:'',userData2:''}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',chooseOptionLabel:'$blank',class:'',direction:'auto',disabled:'true',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'lc_hhcoload',ref:'data:ds_houseblMap.hhcoload',style:'width: 80px;',submenuSize:'auto',title:'Co-Load'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'R'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'R'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'8'}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group13',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_slipTax',id:'gr_slipTax',readOnly:'true',style:'',visibleRowNum:'2',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{dataField:'clntNo',displayMode:'label',id:'column1',inputType:'text',value:'Customer',width:'100'}},{T:1,N:'w2:column',A:{dataField:'intendDt',displayMode:'label',id:'column17',inputType:'text',value:'Billing Date',width:'100'}},{T:1,N:'w2:column',A:{dataField:'spplyDt',displayMode:'label',id:'column15',inputType:'text',value:'Tax Date',width:'100'}},{T:1,N:'w2:column',A:{dataField:'slipNo',displayMode:'label',id:'column19',inputType:'text',value:'Slip No',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'text',displayMode:'label',id:'clntNo',removeBorderStyle:'false',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'text',displayFormat:'####/##/##',displayMode:'label',id:'intendDt',inputType:'text',removeBorderStyle:'false',textAlign:'center',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'text',displayFormat:'####/##/##',displayMode:'label',id:'spplyDt',inputType:'text',removeBorderStyle:'false',textAlign:'center',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'text',displayMode:'label',id:'slipNo',removeBorderStyle:'false',textAlign:'left',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalSlipTax',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox mt0',id:'grp_group14',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_ocProfitList',id:'gr_ocProfitList',readOnly:'true',style:'',visibleRowNum:'2',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{dataField:'selling',displayMode:'label',id:'column1',inputType:'text',value:'Selling',width:'90'}},{T:1,N:'w2:column',A:{dataField:'buying',displayMode:'label',id:'column17',inputType:'text',value:'Buying',width:'90'}},{T:1,N:'w2:column',A:{dataField:'profit',displayMode:'label',id:'column15',inputType:'text',value:'Profit',width:'90'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayFormat:'#,###.##',displayMode:'label',id:'selling',removeBorderStyle:'false',textAlign:'right',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayFormat:'#,###.##',displayMode:'label',id:'buying',removeBorderStyle:'false',textAlign:'right',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayFormat:'#,###.##',displayMode:'label',id:'profit',removeBorderStyle:'false',textAlign:'right',width:'90'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalOcProfitList',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'}},{T:1,N:'xf:group',A:{tagname:'tr'}},{T:1,N:'xf:group',A:{tagname:'tr'}},{T:1,N:'xf:group',A:{tagname:'tr'}},{T:1,N:'xf:group',A:{tagname:'tr'}},{T:1,N:'xf:group',A:{tagname:'tr'}},{T:1,N:'xf:group',A:{tagname:'tr'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Container',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_AddCntr',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.f_addCntr'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Auto Container Info'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_ocContList',id:'grbtn_ocContList',btnPlusYn:'Y',gridUpYn:'Y',gridDownFn:'scwin.f_RunExcel',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_ocContList',id:'gr_ocContList',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_ocContList_ontextimageclick','ev:onviewchange':'scwin.gr_ocContList_onviewchange',rowStatusVisible:'true',readOnly:'true','ev:onfilereadend':'scwin.gr_ocContList_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'Container',width:'120',class:'txt-red',dataField:'mccntno'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Type',width:'100',class:'txt-blue',dataField:'mctype'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'Seal No1',width:'120',class:'txt-blue',dataField:'mcseal1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Seal No2',width:'120',class:'txt-blue',dataField:'mcseal2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'PKG',width:'100',class:'txt-blue',dataField:'mcpkg'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'Unit',width:'120',class:'txt-blue',dataField:'mcpkgcd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'Weight',width:'120',class:'txt-blue',dataField:'mcwgt'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'Measure',width:'120',class:'txt-blue',dataField:'mcmsr'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'ISO',width:'100',class:'txt-blue',dataField:'mciso'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'mccntno',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mctype',inputType:'textImage',width:'80',textAlign:'center',editModeEvent:'onclick',editModeEventIcon:'onclick',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mcseal1',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mcseal2',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mcpkg',inputType:'text',width:'90',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mcpkgcd',inputType:'textImage',width:'70',textAlign:'center',editModeEvent:'onclick',editModeEventIcon:'onclick',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mcwgt',inputType:'text',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###.###',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mcmsr',inputType:'text',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###.###',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mciso',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalOcContList',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'amt-wrap',id:'',tagname:'ul',style:''},E:[{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PKG',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:' amt',id:'ed_totpkg',placeholder:'',style:'text-align:right;',objType:'data',inputMode:'numeric',maxByteLength:'12',displayFormat:'#,###.###',readOnly:'true',title:'PKG'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'WGT',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_totwgt',placeholder:'',style:'text-align:right;',objType:'data',displayFormat:'#,###.###',title:'Weight',allowChar:'0-9|.',dataType:'float',maxlength:'13.3'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MSR',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:' amt',id:'ed_totmsr',placeholder:'',style:'text-align:right;',objType:'data',displayFormat:'#,###.###',title:'Measure',allowChar:'0-9|.',dataType:'float',maxlength:'12.3'}}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_DelRow2',style:'',type:'button',objType:'ctrlBtn',userAuth:'D','ev:onclick':'scwin.f_deleteRowAll'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Delete All'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddUserAuth:'C',btnRowAddObj:'btn_AddRow1',btnRowDelObj:'btn_DelRow1',rowDelUserAuth:'D',btnCancelObj:'btn_CancelRow1',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',gridID:'gr_ocContList',id:'btn_grd1',rowAddFunction:'scwin.f_addRow',EngYn:'Y',rowDelFunction:'scwin.f_deleteRow1',cancelFunction:'scwin.f_cancelRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix gap0'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'height:140px;'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Remark',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-4'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhrmk1',maxByteLength:'50',style:'',id:'txt_hhrmk1',placeholder:'',title:'Remark1',class:'',objType:'data'}},{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhrmk2',maxByteLength:'50',style:'',id:'txt_hhrmk2',placeholder:'',title:'Remark2',class:'',objType:'data'}},{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhrmk3',maxByteLength:'50',style:'',id:'txt_hhrmk3',placeholder:'',title:'Remark3',class:'',objType:'data'}},{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhrmk4',maxByteLength:'50',style:'',id:'txt_hhrmk4',placeholder:'',title:'Remark4',class:'',objType:'data'}},{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhrmk5',maxByteLength:'50',style:'',id:'txt_hhrmk5',placeholder:'',title:'Remark5',class:'',objType:'data'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Shipment Type',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{ref:'data:ds_houseblMap.hhmnfgb',appearance:'full',style:'',id:'rd_hhmnfgb',renderType:'radiogroup',rows:'',title:'Shipment Type',class:'',cols:'',objType:'data',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Transhipment'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Pre-Vessel/Voyage',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{ref:'data:ds_houseblMap.hhfvsl',maxByteLength:'25',style:'width:150px;',id:'txt_hhfvsl',placeholder:'',title:'Pre-Vessel/Voyage',class:'',objType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th bl1',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Place of Receipt',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'a-z|A-Z',btnId:'btn_hhrcvcd',code:'hhrcvcd',codeId:'ed_hhrcvcd','ev:onblurCodeEvent':'scwin.udc_hhrcvcd_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_hhrcvcd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhrcvcd_onviewchangeNameEvent',id:'udc_hhrcvcd',maxlengthCode:'5',name:'hhrcvnm',nameId:'txt_hhrcvnm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_houseblMap',style:'',validTitle:'Place of Receipt'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th bl1',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Purchase Order No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_hhpono',maxByteLength:'30',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhpono',style:'width:150px;',title:'Purchase Order No'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Invoice Value',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_hhcustvalue',maxByteLength:'30',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhcustvalue',style:'width:150px;',title:'Invoice Value'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th bl1',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'L/C No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_hhlcno',maxByteLength:'20',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhlcno',style:'width:150px;',title:'L/C No'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Order No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{allowChar:'a-zA-Z0-9',class:'',id:'ed_odrNo',maxByteLength:'13',placeholder:'',readOnly:'true',ref:'data:ds_houseblMap.odrNo',style:'width:150px;',title:'Order No'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th bl1',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Warehouse',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',btnId:'btn_hhwarecd',code:'hhwarecd',codeId:'ed_hhwarecd','ev:onblurCodeEvent':'scwin.udc_hhwarecd_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_hhwarecd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_hhwarecd_onviewchangeNameEvent',id:'udc_hhwarecd',maxlengthCode:'8',name:'hhwarenm',nameId:'txt_hhwarenm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_houseblMap',style:'',validTitle:'Warehouse'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th bl1',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Allocation',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',class:'',editType:'select',id:'lc_hhwaregb',objType:'data',ref:'data:ds_houseblMap.hhwaregb',search:'start',style:'width:300px;',submenuSize:'auto',title:'보세'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입항전사전수입신고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'차상반출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부두 직통관'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부두 보운'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'해상 간이 보운'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부두경유 간이 보운'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'보세운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'의왕 ICD'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'H'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CY경유 간이보운'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'내장 통관'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'J'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CFS경유 간이보운'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'K'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CFS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자가 보세장치장'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'M'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/S'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'내품 T/S'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자선'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'P'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'타소장치'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Q'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Empty 컨테이너'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'R'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부두창고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th bl1',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consignee',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_hhcnrggb',objType:'data',ref:'data:ds_houseblMap.hhcnrggb',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',title:'Person/Company'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Company'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]},{T:1,N:'xf:input',A:{UpperFlag:'1',allowChar:'a-zA-Z0-9',class:'','ev:oneditkeyup':'scwin.oneditkeyup',id:'ed_hhcnrgno',maxByteLength:'13',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhcnrgno',style:'width:150px;',title:'Consignee'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th bl1',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Notify',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_hhntrggb',objType:'data',ref:'data:ds_houseblMap.hhntrggb',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',title:'Person/Company'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Company'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]},{T:1,N:'xf:input',A:{UpperFlag:'1',allowChar:'a-zA-Z0-9',class:'','ev:oneditkeyup':'scwin.oneditkeyup',id:'ed_hhntrgno',maxByteLength:'13',objType:'data',placeholder:'',ref:'data:ds_houseblMap.hhntrgno',style:'width:150px;',title:'Notify'}}]}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{class:'btn link ',id:'btn_4',style:'',type:'button','ev:onclick':'scwin.btn_masterBL_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'M B/L'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_5',style:'',type:'button','ev:onclick':'scwin.btn_partner_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Partner'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_6',style:'',type:'button','ev:onclick':'scwin.btn_invoice_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Invoice'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_7',style:'',type:'button','ev:onclick':'scwin.btn_profit_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Profit'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'btn_8',style:'',type:'button','ev:onclick':'scwin.btn_freight_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Freight'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'btn_9',style:'',type:'button','ev:onclick':'scwin.btn_houseBLFind_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Find'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_10',style:'',type:'button','ev:onclick':'scwin.btn_10_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'A/N'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_11',style:'',type:'button','ev:onclick':'scwin.btn_houseBLPrint_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Print'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'btn_tracking',style:'display : none;',type:'button','ev:onclick':'scwin.f_Tracking'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선사 Tracking'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'btn_programDownload',style:'',type:'button','ev:onclick':'scwin.f_ProgramDownload'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'API Setup'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Copy',label:'Copy',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.f_Copy'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Copy'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',label:'Cancel',style:'',type:'button',userAuth:'R',objType:'bCancel','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',label:'Create',style:'',type:'button',userAuth:'C',objType:'bCreate','ev:onclick':'scwin.f_Create'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',label:'Update',style:'',type:'button',userAuth:'U',objType:'bUpdate','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button',userAuth:'U',objType:'bSave','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',label:'Delete',style:'',type:'button',userAuth:'D',objType:'bDelete','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_FileDownload',label:'Upload',style:'',type:'button',userAuth:'U',objType:'bUpdate','ev:onclick':'scwin.f_FileDownload'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Upload'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'dsN'},E:[{T:1,N:'xf:input',A:{ref:'',style:'',id:'ed_hharea',class:'',objType:'data'}},{T:1,N:'xf:input',A:{class:'',id:'txt_hhareanm',objType:'data',ref:'',style:''}}]}]}]}]}]}]})