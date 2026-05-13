/*amd /ui/ds/op/wrkplan/transwrkplan/op_202_02_22b.xml 139850 d7ea58068fc16081e61f533676d0fc30684c37edb18e9b91f2e869d0fff24906 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_conCombo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라미터1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'파라미터2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'파라미터3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_search',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtClsCd',name:'조회일구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendDt',name:'출발예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendDt2',name:'출발예정일2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'배차점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_search1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'vehclNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'eqCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'eqKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'eqKndNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'eqNrmCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'eqNrmNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'clntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'clntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'vehclShortCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'drvEmpNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name11',id:'drvNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name12',id:'mpNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name13',id:'trsNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name14',id:'chassisEqCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name15',id:'chassisNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name16',id:'chassisKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name17',id:'chassisKndNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name18',id:'assgnLobranCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name19',id:'posnClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name20',id:'wrkIndictYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name21',id:'vehclIdCardNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name22',id:'chassisShortCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name23',id:'mbssysVehclYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name24',id:'arvDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name25',id:'spotYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name26',id:'cntrWrkKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name27',id:'wrkStDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name28',id:'wrkEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name29',id:'cntrSizCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name30',id:'cntrTypCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name31',id:'bondTransExpireDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name32',id:'transWrkIndictNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name33',id:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name34',id:'cntrSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name35',id:'odrWrkPathSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name36',id:'odrWrkStpSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name37',id:'wrkStpCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name38',id:'bobtailChassisEqCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name39',id:'bobtailChassisShortCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name40',id:'bobtailChassisNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name41',id:'bobtailChassisKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name42',id:'odrKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name43',id:'dptWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name44',id:'dptWrkPlClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name45',id:'gateInslYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name46',id:'dptWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name47',id:'arvWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name48',id:'crryinEdiFlag'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name49',id:'crryoutEdiFlag'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name50',id:'cntrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name51',id:'crryoutEdiType'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name52',id:'crryinEdiType'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name53',id:'arvWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name54',id:'crryinoutIntendNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name55',id:'dptPicNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name56',id:'dptPicTelNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name57',id:'dptZip'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name58',id:'dptAddr1'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name59',id:'dptAddr2'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name60',id:'vehclYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name61',id:'cntrWrkShapeCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name62',id:'odrCompleteYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name63',id:'wrkStpNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name64',id:'lineCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name65',id:'doorNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name66',id:'sizeAndType'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name67',id:'fullEmptyClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name68',id:'wt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name69',id:'cntrWrkShapeNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name70',id:'rmk'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true','ev:ondataload':'scwin.ds_results_ondataload','ev:onrowpositionchange':'scwin.ds_results_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'name3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'name4',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'name5',dataType:'number'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'name7',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cmpstcrgNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntMpNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd1',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'name40',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cmpstcrgKndCd',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmpstcrgKndNm',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkShapeCd',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkShapeNm',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkKndCd',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkKndNm',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDstClsCd',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransExpireDt',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlClsCd',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlClsCd',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmpstcrgSeq',name:'name59',dataType:'number'}},{T:1,N:'w2:column',A:{id:'realCmpstcrgYn',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclIdCardNo',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'name66',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name70',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvEmpNo',name:'name71',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'name72',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trsNo',name:'name73',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'name74',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisEqCd',name:'name75',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisShortCd',name:'name76',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisNo',name:'name77',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisKndCd',name:'name78',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisKndNm',name:'name79',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgsetNo',name:'name80',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csctPrtYn',name:'name81',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictYn',name:'name82',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name83',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptPicNm',name:'name84',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptPicTelNo',name:'name85',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptZip',name:'name86',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptAddr1',name:'name87',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptAddr2',name:'name88',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvPicNm',name:'name89',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvPicTelNo',name:'name90',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvZip',name:'name91',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvAddr1',name:'name92',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvAddr2',name:'name93',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclYn',name:'name94',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'name95',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'name96',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrDsgYn',name:'name97',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'name98',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'name99',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ploYn',name:'name100',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'name101',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysVehclYn',name:'name102',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carryingOutAdmissionYn',name:'name103',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutEdiFlag',name:'name104',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinEdiFlag',name:'name105',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutEdiType',name:'name106',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinEdiType',name:'name107',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'name108',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gateInslYn',name:'name109',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spotYn',name:'name110',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutIntendNo',name:'name111',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mobileTransWrkIndictNo',name:'name112',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outMgntYn',name:'name113',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inMgntYn',name:'name114',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'name115',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictDt',name:'name116',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictHh',name:'name117',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictRegId',name:'name118',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlPosnClsCd',name:'name119',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlPosnClsCd',name:'name120',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'name121',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptGatelogSndYn',name:'name122',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvGatelogSndYn',name:'name123',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'name124',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'name125',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorNm',name:'name126',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bobtailChassisEqCd',name:'name127',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bobtailChassisNo',name:'name128',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bobtailChassisShortCd',name:'name129',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bobtailChassisKndCd',name:'name130',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results2',saveRemovedData:'true','ev:ondataload':'scwin.ds_results2_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'clntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'clntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'eqKndNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'eqNrmNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'reqVehclCnt'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results1',saveRemovedData:'true','ev:ondataload':'scwin.ds_results1_ondataload','ev:onrowpositionchange':'scwin.ds_results1_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'vehclNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'eqCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'eqKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'eqKndNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'eqNrmCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'eqNrmNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'clntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'clntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'vehclShortCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'drvEmpNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name11',id:'drvNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name12',id:'mpNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name13',id:'trsNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name14',id:'chassisEqCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name15',id:'chassisNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name16',id:'chassisKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name17',id:'chassisKndNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name18',id:'assgnLobranCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name19',id:'posnClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name20',id:'wrkIndictYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name21',id:'vehclIdCardNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name22',id:'chassisShortCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name23',id:'mbssysVehclYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name24',id:'arvDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name25',id:'spotYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name26',id:'cntrWrkKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name27',id:'wrkStDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name28',id:'wrkEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name29',id:'cntrSizCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name30',id:'cntrTypCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name31',id:'bondTransExpireDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name32',id:'transWrkIndictNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name33',id:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name34',id:'cntrSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name35',id:'odrWrkPathSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name36',id:'odrWrkStpSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name37',id:'wrkStpCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name38',id:'bobtailChassisEqCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name39',id:'bobtailChassisShortCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name40',id:'bobtailChassisNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name41',id:'bobtailChassisKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name42',id:'odrKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name43',id:'dptWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name44',id:'dptWrkPlClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name45',id:'gateInslYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name46',id:'dptWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name47',id:'arvWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name48',id:'crryinEdiFlag'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name49',id:'crryoutEdiFlag'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name50',id:'cntrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name51',id:'crryoutEdiType'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name52',id:'crryinEdiType'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name53',id:'arvWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name54',id:'crryinoutIntendNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name55',id:'dptPicNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name56',id:'dptPicTelNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name57',id:'dptZip'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name58',id:'dptAddr1'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name59',id:'dptAddr2'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name60',id:'vehclYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name61',id:'cntrWrkShapeCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name62',id:'odrCompleteYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name63',id:'wrkStpNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name64',id:'lineCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name65',id:'doorNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name66',id:'sizeAndType'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name67',id:'fullEmptyClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name68',id:'wt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name69',id:'cntrWrkShapeNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name70',id:'rmk'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_searchEDI',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'qryClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'transWrkIndictNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'cntrSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'wrkPathSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'wrkStpSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'vehclNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name18',id:'crryoutDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'crryinoutDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'crryinDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'cntrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name11',id:'dptWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name12',id:'arvWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name13',id:'crryoutEdiType'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name14',id:'crryinEdiType'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name15',id:'sndFlag'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name16',id:'delFlag'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_lobranCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_grdCode196',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_combo_sasiKind',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'코드명'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrieve',encoding:'UTF-8',mediatype:'application/json',action:'/ds.op.wrkplan.transwrkplan.RetrieveContainerCustomerTransVolumeCMD.do',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}'}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrieve1',encoding:'UTF-8',mediatype:'application/json',action:'/ds.op.wrkplan.transwrkplan.RetrieveContainerCustomerAllocationOfCarsIndicationCMD.do',ref:'data:json,[{"id":"ds_search1","key":"IN_DS1"},{"id":"ds_results2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results2","key":"OUT_DS1"}'}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_save',encoding:'UTF-8',mediatype:'application/json',action:'/ds.op.wrkplan.transwrkplan.SaveContainerCustomerAllocationOfCarsIndicationCMD.do',ref:'data:json,{"action":"modified","id":"ds_results","key":"IN_DS1"}','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_saveEDI',encoding:'UTF-8',mediatype:'application/json',action:'/ds.lo.edimgnt.SaveAutoCarryInAndCarryOutIntendEdiInformationCMD.do',ref:'data:json,{"action":"modified","id":"ds_searchEDI","key":"IN_DS1"}'}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_loBranCMD',encoding:'UTF-8',mediatype:'application/json',action:'/ds.co.RetreiveLoBranCMD.do',target:'data:json,{"id":"dlt_lobranCd","key":"GAUCE"}','ev:submitdone':'scwin.sbm_loBranCMD_submitdone'}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/cm.zz.RetrieveComboCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',id:'sbm_getSasiKindCode',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,dma_conCombo',replace:'',target:'data:json,{"id":"ds_combo_sasiKind","key":"GAUCE"}',style:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ds/co/constants/SdConstants.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vLobranCd = "";
scwin.vOdrNo = "";
scwin.vCntrNo = "";
scwin.vWrkStDt = "";
scwin.vWrkEndDt = "";
scwin.vClntNo = "";
scwin.vClntNm = "";

// 세션정보 가져오기
// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.gv_userClsCd = scwin.memJson.userClsCd;
scwin.gv_clntNo = scwin.memJson.clntNo;
scwin.gv_clntNm = scwin.memJson.clntNm;
scwin.gv_loabranCd = scwin.memJson.loUpperLobranCd;
scwin.userClsCd = scwin.memJson.userClsCd;

// 현재일자
scwin.vCurDate = $c.date.getServerDateTime($p);
scwin.strStartDate = $c.date.addDate($p, scwin.vCurDate, -2);
scwin.vFirstDate = scwin.vCurDate.substr(0, 6) + "01";
scwin.toDay = $c.date.getDay($p, scwin.vCurDate, "num");
scwin.curDtm = $c.date.getServerDateTime($p, "yyyyMMddHHmm");
scwin.btnFlag = ""; // 신규, 수정 구분자
scwin.rowFlag = ""; // 등록, 수정 후 저장 안하고 다른 master row 선택 불가능 구분자
scwin.pos_groupCode = 0; // 저장전 DataSet의 RowPosition을 저장 변수 
scwin.gv_iCopinoFlag = 0;
scwin.gv_dateStr = scwin.vCurDate;
scwin.gv_firstDateStr = scwin.vFirstDate;
scwin.gv_startDate = scwin.strStartDate;
scwin.pav_lobranCd = "";
scwin.pav_odrNo = "";
scwin.pav_cntrNo = "";
scwin.pav_wrkStDt = "";
scwin.pav_wrkEndDt = "";
scwin.pav_clntNo = "";
scwin.pav_clntNm = "";
scwin.onpageload = function () {
  scwin.vLobranCd = $c.data.getParameter($p, "lobranCd") == null ? "" : $c.data.getParameter($p, "lobranCd");
  scwin.vOdrNo = $c.data.getParameter($p, "odrNo") == null ? "" : $c.data.getParameter($p, "odrNo");
  scwin.vCntrNo = $c.data.getParameter($p, "cntrNo") == null ? "" : $c.data.getParameter($p, "cntrNo");
  scwin.vWrkStDt = $c.data.getParameter($p, "wrkStDt") == null ? "" : $c.data.getParameter($p, "wrkStDt");
  scwin.vWrkEndDt = $c.data.getParameter($p, "wrkEndDt") == null ? "" : $c.data.getParameter($p, "wrkEndDt");
  scwin.vClntNo = $c.data.getParameter($p, "clntNo") == null ? "" : $c.data.getParameter($p, "clntNo");
  scwin.vClntNm = $c.data.getParameter($p, "clntNm") == null ? "" : $c.data.getParameter($p, "clntNm");
  scwin.pav_lobranCd = scwin.vLobranCd;
  scwin.pav_odrNo = scwin.vOdrNo;
  scwin.pav_cntrNo = scwin.vCntrNo;
  scwin.pav_wrkStDt = scwin.vWrkStDt;
  scwin.pav_wrkEndDt = scwin.vWrkEndDt;
  scwin.pav_clntNo = scwin.vClntNo;
  scwin.pav_clntNm = scwin.vClntNm;

  // 배차점소
  const vCBData = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    compID: "acb_lobranCd"
  }];
  $c.data.setGauceUtil($p, vCBData, '');
  const codeOptions = [{
    grpCd: "OP190",
    compID: "acb_cargoClsCd"
  },
  // 작업구분
  {
    grpCd: "OP196",
    compID: "acb_cntrWrkKndCd"
  } // 현ON/BOB구분
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  scwin.f_switchObjMode(1);

  // 작업권역
  const vCBData = [{
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkDistrictCdCombo",
    param3: [DsConstants.WRK_DISTRICT_CD_CMPST],
    compID: "acb_districtCd, acb_districtCd2"
  }];
  $c.data.setGauceUtil($p, vCBData, '');
  if (ds_search.getRowCount() == 0) {
    ds_search.insertRow(0);
  }
  ed_dptIntendDt.setValue(scwin.gv_startDate);
  ed_dptIntendDt2.setValue(scwin.gv_dateStr);

  // 테스트데이터
  // ed_dptIntendDt.setValue('20060417');
  // ed_dptIntendDt2.setValue('20060417');

  // 넘어온 파라미터에 대한 처리
  if (!$c.gus.cfIsNull($p, scwin.pav_odrNo)) {
    ed_orderNo.setValue(scwin.pav_odrNo); //////em_orderNo.Text = scwin.pav_odrNo;
  }
  if (!$c.gus.cfIsNull($p, scwin.pav_cntrNo)) {
    ed_cntrNo.setValue(scwin.pav_cntrNo); //////em_cntrNo.Text = scwin.pav_cntrNo;
  }
  if (!$c.gus.cfIsNull($p, scwin.pav_wrkStDt)) {
    ds_search.set("dptIntendDt", scwin.pav_wrkStDt); //////em_dptIntendDt.Text = scwin.pav_wrkStDt;
  }
  if (!$c.gus.cfIsNull($p, scwin.pav_wrkEndDt)) {
    ds_search.set("dptIntendDt2", scwin.pav_wrkEndDt); //////em_dptIntendDt2.Text = scwin.pav_wrkEndDt;
  }
  if (!$c.gus.cfIsNull($p, scwin.pav_lobranCd)) {
    acb_lobranCd.setValue(scwin.pav_lobranCd); //////lc_lobranCd.BindColVal = scwin.pav_lobranCd;
    scwin.f_Retrieve();
  }

  // 샤시종류
  scwin.f_RetrieveCommonUpperCd();
};
scwin.ondataload = async function () {
  // 작업구분
  acb_cargoClsCd.setValue(DsConstants.CARGO_CLS_CD_CONTAINER);

  // 배차점소
  acb_lobranCd.setValue(scwin.gv_loabranCd);

  // 그리드 ON/BOB 설정으로 복사후 일반(공백) 추가
  $c.gus.cfCopyDataSet($p, dlt_commonCodeOP196, ds_grdCode196);
  ds_grdCode196.insertRow(0);
  ds_grdCode196.setCellAllData(0, "cd", " ");
  ds_grdCode196.setCellAllData(0, "cdNm", "일반");
};

//-------------------------------------------------------------------------
// Function
//-------------------------------------------------------------------------
// 화면구성요소 제어(버튼 입력박스등등 disable, enable)
scwin.f_switchObjMode = function (gubun) {
  switch (gubun) {
    case 1:
      //화면로딩
      scwin.btnFlag = "";
      $c.gus.cfDisableKeyData($p);
      if (scwin.gv_userClsCd != "01") {
        ed_clntNo.setValue(scwin.gv_clntNo);
        ed_clntNm.setValue(scwin.gv_clntNm);
        $c.gus.cfDisableObjects($p, [ed_clntNo, ed_clntNm, btn_clntNo]);
      } else {
        ed_clntNo.focus();
      }
      $c.gus.cfDisableBtnOnly($p, [btn_save, btn_delete]);
      $c.gus.cfDisableObjects($p, [btn_save2, btn_save3, btn_addRow, btn_cancelRow]);
      $c.gus.cfDisableObjects($p, [btn_spot, btn_vehcl, btn_crryout, btn_carryingInOutEDI, btn_print1, btn_print2]);
      break;
    case 2:
      //조회
      break;
    case 3:
      //신규
      break;
    case 4:
      //수정
      break;
    case 5:
      //조회완료
      scwin.btnFlag = "";
      scwin.f_switchObjMode(1); //화면로딩

      if (ds_results.getRowCount() == 0) return;
      $c.gus.cfEnableBtnOnly($p, [btn_save, btn_delete]);
      $c.gus.cfEnableObjects($p, [btn_save2, btn_save3, btn_spot, btn_vehcl, btn_crryout, btn_carryingInOutEDI, btn_print1, btn_print2]);
      $c.gus.cfEnableObjects($p, [btn_addRow, btn_cancelRow]);
      ds_results.setRowPosition(0);
      break;
    case 6:
      //수정불가
      break;
    case 7:
      //행삭제, 행취소
      break;
    case 8:
      //행추가
      break;
    default:
      break;
  }
};

// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      // 선박명
      udc_vsslCd.cfCommonPopUp(scwin.udc_vsslCd_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 출발지
      udc_dptWrkPlCd.cfCommonPopUp(scwin.udc_dptWrkPlCd_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , ",,,,,2" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      //도착지
      udc_arvWrkPlCd.cfCommonPopUp(scwin.udc_arvWrkPlCd_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , ",,,,,2" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // 협력업체(차량매입)
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc, pCode, pName, pClose, null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , DsConstants.PCHS_CLNT_CLS_CD_HIRECAR // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "협력업체,협력업체코드,협력업체명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 6:
      //샤시조회
      var arrParam = new Array();
      arrParam[0] = new Array(ds_results1.getCellData(ds_results1.getRowPosition(), "chassisShortCd"), "", ds_results.getCellData(ds_results.getRowPosition(), "wrkStDt")); //검색조건
      arrParam[1] = new Array(pClose);
      var rtnList = new Array();
      let win_url = "/ui/ds/op/rscconfirm/transrscconfirm/op_101_01_21p.xml";
      let data = {};
      data.param = arrParam;
      let opts = {
        id: "smpPop",
        popupName: "샤시조회",
        modal: true,
        type: "browserPopup",
        width: 820,
        height: 510,
        title: "샤시조회"
      };
      rtnList = await $c.win.openPopup($p, win_url, opts, data);
      if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
        // [컨테이너사이즈<>샤시사이즈] 이면 등록불가
        if (rtnList[7] != "" && ds_results.getCellData(ds_results.getRowPosition(), "cntrSizCd") != "" && rtnList[7] != ds_results.getCellData(ds_results.getRowPosition(), "cntrSizCd")) {
          ds_results1.setCellData(ds_results1.getRowPosition(), "chassisShortCd", "");
          ds_results1.setCellData(ds_results1.getRowPosition(), "chassisNo", "");
          ds_results1.setCellData(ds_results1.getRowPosition(), "chassisKndCd", "");
          ds_results1.setCellData(ds_results1.getRowPosition(), "chassisEqCd", "");
          var v_msg = "[" + ds_results.getCellData(ds_results.getRowPosition(), "cntrSizCd") + "] " + "컨테이너를 " + "[" + rtnList[7] + "] " + "샤시에 연결할 수 없습니다";
          await $c.gus.cfAlertMsg($p, v_msg);
          return;
        }
        // [컨테이너타입=HC,컨테이너타입<>샤시타입] 이면 등록불가
        if (rtnList[8] != "" && ds_results.getCellData(ds_results.getRowPosition(), "cntrTypCd") == DsConstants.CNTR_TYP_CD_HC && rtnList[8] != ds_results.getCellData(ds_results.getRowPosition(), "cntrTypCd")) {
          ds_results1.setCellData(ds_results1.getRowPosition(), "chassisShortCd", "");
          ds_results1.setCellData(ds_results1.getRowPosition(), "chassisNo", "");
          ds_results1.setCellData(ds_results1.getRowPosition(), "chassisKndCd", "");
          ds_results1.setCellData(ds_results1.getRowPosition(), "chassisEqCd", "");
          var v_msg = "[" + ds_results.getCellData(ds_results.getRowPosition(), "cntrTypCd") + "] " + "컨테이너를 " + "[" + rtnList[8] + "] " + "샤시에 연결할 수 없습니다";
          await $c.gus.cfAlertMsg($p, v_msg);
          return;
        }

        // 자차 위수탁은 006630 인 샤시를 붙일수 없다.
        if (rtnList[0] == "006630" && (ds_results1.getCellData(ds_results1.getRowPosition(), "posnClsCd") == "J" || ds_results1.getCellData(ds_results1.getRowPosition(), "posnClsCd") == "W")) {
          ds_results1.setCellData(ds_results1.getRowPosition(), "chassisShortCd", "");
          ds_results1.setCellData(ds_results1.getRowPosition(), "chassisNo", "");
          ds_results1.setCellData(ds_results1.getRowPosition(), "chassisKndCd", "");
          ds_results1.setCellData(ds_results1.getRowPosition(), "chassisEqCd", "");
          var v_msg = "[자차나 위수탁]은 " + "현 샤시에 연결할 수 없습니다";
          await $c.gus.cfAlertMsg($p, v_msg);
          return;
        }
        ds_results1.setCellData(ds_results1.getRowPosition(), "chassisShortCd", rtnList[1]); //샤시단축번호
        ds_results1.setCellData(ds_results1.getRowPosition(), "chassisNo", rtnList[2]);
        ds_results1.setCellData(ds_results1.getRowPosition(), "chassisKndCd", rtnList[3]);
        ds_results1.setCellData(ds_results1.getRowPosition(), "chassisEqCd", rtnList[0]);
        var v_transWrkIndictNo = ds_results1.getCellData(ds_results1.getRowPosition(), "transWrkIndictNo");
      } else {
        ds_results1.setCellData(ds_results1.getRowPosition(), "chassisShortCd", "");
        ds_results1.setCellData(ds_results1.getRowPosition(), "chassisNo", "");
        ds_results1.setCellData(ds_results1.getRowPosition(), "chassisKndCd", "");
        ds_results1.setCellData(ds_results1.getRowPosition(), "chassisEqCd", "");
      }
      break;
    default:
      break;
  }
};

// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    // inObj가 코드 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

// 조회
scwin.f_Retrieve = async function (gubun) {
  if (!(await $c.gus.cfValidate($p, [ed_clntNo]))) {
    return;
  }
  if (gubun == null || gubun == "" || gubun == 0) {
    ds_results1.removeAll();
    ds_results2.removeAll();
    ds_search.setCellData(0, "clntNo", ed_clntNo.getValue().trim());
    ds_search.setCellData(0, "dtClsCd", lc_dtClsCd.getValue());
    ds_search.setCellData(0, "dptIntendDt", ed_dptIntendDt.getValue().trim());
    ds_search.setCellData(0, "dptIntendDt2", ed_dptIntendDt2.getValue().trim());
    ds_search.setCellData(0, "cntrNo", ed_cntrNo.getValue().trim());
    ds_search.setCellData(0, "lobranCd", acb_lobranCd.getValue());
    ds_search.setCellData(0, "dptWrkPlCd", ed_dptWrkPlCd.getValue().trim());
    ds_search.setCellData(0, "arvWrkPlCd", ed_arvWrkPlCd.getValue().trim());
    ds_search.setCellData(0, "blNo", ed_blNo.getValue().trim());
    ds_search.setCellData(0, "vsslCd", ed_vsslCd.getValue().trim());
    ds_search.setCellData(0, "portcnt", ed_portcnt.getValue().trim());
    ds_search.setCellData(0, "odrNo", ed_orderNo.getValue().trim());
    ds_search.setCellData(0, "transWrkIndictNo", ed_transWorkIndictNo.getValue().trim());
    ds_search.setCellData(0, "dptDistrictCd", acb_districtCd.getValue());
    ds_search.setCellData(0, "arvDistrictCd", acb_districtCd2.getValue());

    // 출발예정일 validate 체크
    if (!(await $c.gus.cfValidate($p, ed_dptIntendDt)) || !(await $c.gus.cfValidate($p, ed_dptIntendDt2))) {
      return;
    }
    if (!(await $c.gus.cfIsAfterDate($p, ed_dptIntendDt.getValue(), ed_dptIntendDt2.getValue()))) {
      if (await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039)) {
        // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
        ed_dptIntendDt.focus();
        return;
      }
    }
    let e = await $c.sbm.execute($p, sbm_retrieve);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_retrieve_submitdone(e);
    }
  } else if (gubun == 1) {
    // 조회조건복사
    if (ds_results.getRowCount() == 0) return;
    var v_features = "copyHeader=yes,rowFrom=" + ds_results.getRowPosition() + ",rowCnt=1";
    $c.gus.cfCopyDataSet($p, ds_results, ds_search1, v_features);
    let e = await $c.sbm.execute($p, sbm_retrieve1);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      totalRows2.setValue(ds_results2.getRowCount());
      totalRows3.setValue(ds_results1.getRowCount());
    }
  }
};
scwin.f_emclntExcel = function () {
  const options = {
    fileName: "협력업체차량작업지시등록" + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,

    sheetName: "협력업체차량작업지시등록",
    type: 4 + 8 + 16
  };
  const infoArr = [{}];
  $c.data.downloadGridViewExcel($p, gr_results, options, infoArr);
};

// 저장
scwin.f_Save = async function (iCopinoFlag) {
  // 윤동진대리님 요청사항
  // 내부사용자가 아니면 평일 17시 30분 이후 , 주말 12시이후 KBCTCY 코피노전송불가
  var weekday = scwin.toDay; //요일
  var curDtm = scwin.curDtm; //현재일시
  var curTime = curDtm.substring(8); //현재시간
  var userClsCd = scwin.userClsCd; //사용자구분코드

  if (iCopinoFlag == "2" || iCopinoFlag == "3") {
    if (ds_results.getCellData(ds_results.getRowPosition(), "dptWrkPlCd") == "6C01" || ds_results.getCellData(ds_results.getRowPosition(), "arvWrkPlCd") == "6C01") {
      if (userClsCd != "01") {
        // 사용자구분코드 01:그룹사가 아니면)
        if (weekday == "SUN") {
          // 주말 12시이후 전송안됨
          await $c.gus.cfAlertMsg($p, "일요일엔 COPINO전송을 하실수 없습니다. \n 문의 사항은 담당 배차에게 문의주세요.");
          return false;
        } else if (weekday == "SAT") {
          if (curTime > "1200") {
            await $c.gus.cfAlertMsg($p, "토요일 12시 이후엔 COPINO전송을 하실수 없습니다. \n 문의 사항은 담당 배차에게 문의주세요.");
            return false;
          }
        } else {
          // 평일 17시 30분 이후 전송안됨
          if (curTime > "1730") {
            await $c.gus.cfAlertMsg($p, "평일 17시 30분 이후엔 COPINO전송을 하실수 없습니다. \n 문의 사항은 담당 배차에게 문의주세요.");
            return false;
          }
        }
      }
    }
  }

  // 변경한 데이터가 있는지 체크한다. 
  if (ds_results1.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }

  // 용차(Y)가 아니면 샤시번호, 샤시종류는 필수 입력항목이다.
  // 용차는 샤시종류만 필수
  if (ds_results1.getCellData(0, "posnClsCd") != DsConstants.POSN_CLS_CD_HIRECAR) {
    if ($c.gus.cfIsNull($p, ds_results1.getCellData(0, "chassisNo"))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("운송차량의 샤시번호"));
      return;
    }
    if ($c.gus.cfIsNull($p, ds_results1.getCellData(0, "chassisKndCd"))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("운송차량의 샤시종류"));
      return;
    }
  } else {
    if ($c.gus.cfIsNull($p, ds_results1.getCellData(0, "chassisKndCd"))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("운송차량의 샤시종류"));
      return;
    }
  }
  if (ds_results.getCellData(ds_results.getRowPosition(), 'carryingOutAdmissionYn') == 0 && ds_results.getCellData(ds_results.getRowPosition(), 'odrNo').substr(1, 2) == "C2") {
    if (!(await $c.win.confirm($p, "반출승인이 나지 않은 오더입니다. 계속하시겠습니까?"))) {
      return;
    }
  }

  // 그리드 콤보에 값을 비워주기 위해서 공백을 사용하였으므로 공백을 지운다
  if (ds_results.getCellData(ds_results.getRowPosition(), "wrkStpCd") == DsConstants.WRK_STP_CD_TRANS) {
    // ON/BOB 지정을 하지않았을 경우
    if (ds_results.getCellData(ds_results.getRowPosition(), "cntrWrkKndCd") == "") {
      await $c.gus.cfAlertMsg($p, "ON/BOB 여부를 선택해주십시요");
      return;
      // ON/BOB 일반일 경우
    } else if (ds_results.getCellData(ds_results.getRowPosition(), "cntrWrkKndCd") == " ") {
      var selectWrkIndictNo = ds_results.getCellData(ds_results.getRowPosition(), "transWrkIndictNo");
      var selectOdrNo = ds_results.getCellData(ds_results.getRowPosition(), "odrNo");
      for (var i = 0; i < ds_results.getRowCount(); i++) {
        if (selectOdrNo == ds_results.getCellData(i, "odrNo") && selectWrkIndictNo == ds_results.getCellData(i, "transWrkIndictNo")) {
          ds_results.setCellData(i, "vehclNo", ds_results1.getCellData(0, "vehclNo"));
          ds_results.setCellData(i, "eqCd", ds_results1.getCellData(0, "eqCd"));
          ds_results.setCellData(i, "eqKndCd", ds_results1.getCellData(0, "eqKndCd"));
          ds_results.setCellData(i, "eqKndNm", ds_results1.getCellData(0, "eqKndNm"));
          ds_results.setCellData(i, "eqNrmCd", ds_results1.getCellData(0, "eqNrmCd"));
          ds_results.setCellData(i, "eqNrmNm", ds_results1.getCellData(0, "eqNrmNm"));
          ds_results.setCellData(i, "clntNo", ds_results1.getCellData(0, "clntNo"));
          ds_results.setCellData(i, "clntNm", ds_results1.getCellData(0, "clntNm"));
          ds_results.setCellData(i, "vehclShortCd", ds_results1.getCellData(0, "vehclShortCd"));
          ds_results.setCellData(i, "drvEmpNo", ds_results1.getCellData(0, "drvEmpNo"));
          ds_results.setCellData(i, "drvNm", ds_results1.getCellData(0, "drvNm"));
          ds_results.setCellData(i, "mpNo", ds_results1.getCellData(0, "mpNo"));
          ds_results.setCellData(i, "trsNo", ds_results1.getCellData(0, "trsNo"));
          ds_results.setCellData(i, "chassisEqCd", ds_results1.getCellData(0, "chassisEqCd"));
          ds_results.setCellData(i, "chassisNo", ds_results1.getCellData(0, "chassisNo"));
          ds_results.setCellData(i, "chassisKndCd", ds_results1.getCellData(0, "chassisKndCd"));
          ds_results.setCellData(i, "chassisKndNm", ds_results1.getCellData(0, "chassisKndNm"));
          ds_results.setCellData(i, "assgnLobranCd", ds_results1.getCellData(0, "assgnLobranCd"));
          ds_results.setCellData(i, "posnClsCd", ds_results1.getCellData(0, "posnClsCd"));
          ds_results.setCellData(i, "wrkIndictYn", ds_results1.getCellData(0, "wrkIndictYn"));
          ds_results.setCellData(i, "vehclIdCardNo", ds_results1.getCellData(0, "vehclIdCardNo"));
          ds_results.setCellData(i, "chassisShortCd", ds_results1.getCellData(0, "chassisShortCd"));
          ds_results.setCellData(i, "mbssysVehclYn", ds_results1.getCellData(0, "mbssysVehclYn"));
          ds_results.setCellData(i, "arvDt", ds_results1.getCellData(0, "arvDt"));
        } else {
          ds_results.undoRow(i);
        }
      }
    } else {
      var selectRow = ds_results.getRowPosition();
      for (var i = 0; i < ds_results.getRowCount(); i++) {
        if (i != selectRow) {
          ds_results.undoRow(i);
        }
      }
    }
  }
  if ($c.gus.cfGetByteLength($p, txt_reason.value) > 500) {
    await $c.gus.cfAlertMsg($p, "특이사항은 공백포함 영분500자, 한글250자 만 입력가능합니다.");
    return;
  }
  if (await $c.win.confirm($p, "저장하시겠습니까?")) {
    for (var i = 0; i < ds_results.getRowCount(); i++) {
      // 그리드 콤보에 값을 비워주기 위해서 공백을 사용하였으므로 공백을 지운다
      if (ds_results.getCellData(i, "cntrWrkKndCd") == " ") {
        ds_results.setCellData(i, "cntrWrkKndCd", "");
      }
    }
    scwin.pos_groupCode = ds_results.getRowPosition(); // 저장 전의 위치 저장
    scwin.gv_iCopinoFlag = iCopinoFlag;
    let e = await $c.sbm.execute($p, sbm_save);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_save_submitdone(e);
    }
  }
};

// 삭제
scwin.f_Delete = async function () {
  ds_results1.removeAll();
  ds_results.setCellData(ds_results.getRowPosition(), "spotYn", 0);
  ds_results.setCellData(ds_results.getRowPosition(), "vehclNo", "");
  ds_results.setCellData(ds_results.getRowPosition(), "eqCd", "");
  ds_results.setCellData(ds_results.getRowPosition(), "eqKndCd", "");
  ds_results.setCellData(ds_results.getRowPosition(), "eqKndNm", "");
  ds_results.setCellData(ds_results.getRowPosition(), "eqNrmCd", "");
  ds_results.setCellData(ds_results.getRowPosition(), "eqNrmNm", "");
  ds_results.setCellData(ds_results.getRowPosition(), "clntNo", "");
  ds_results.setCellData(ds_results.getRowPosition(), "clntNm", "");
  ds_results.setCellData(ds_results.getRowPosition(), "vehclShortCd", "");
  ds_results.setCellData(ds_results.getRowPosition(), "drvEmpNo", "");
  ds_results.setCellData(ds_results.getRowPosition(), "drvNm", "");
  ds_results.setCellData(ds_results.getRowPosition(), "mpNo", "");
  ds_results.setCellData(ds_results.getRowPosition(), "trsNo", "");
  ds_results.setCellData(ds_results.getRowPosition(), "chassisEqCd", "");
  ds_results.setCellData(ds_results.getRowPosition(), "chassisNo", "");
  ds_results.setCellData(ds_results.getRowPosition(), "chassisKndCd", "");
  ds_results.setCellData(ds_results.getRowPosition(), "chassisKndNm", "");
  ds_results.setCellData(ds_results.getRowPosition(), "assgnLobranCd", "");
  ds_results.setCellData(ds_results.getRowPosition(), "posnClsCd", "");
  ds_results.setCellData(ds_results.getRowPosition(), "wrkIndictYn", ds_results1.getCellData(ds_results1.getRowPosition(), "wrkIndictYn"));
  ds_results.setCellData(ds_results.getRowPosition(), "vehclIdCardNo", "");
  ds_results.setCellData(ds_results.getRowPosition(), "chassisShortCd", "");
  ds_results.setCellData(ds_results.getRowPosition(), "mbssysVehclYn", 0);
  ds_results.setCellData(ds_results.getRowPosition(), "arvDt", "");
  if (await $c.win.confirm($p, "삭제하시겠습니까?")) {
    scwin.gv_iCopinoFlag = 0;
    let e = await $c.sbm.execute($p, sbm_save);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_save_submitdone(e);
    }
  } else {
    ds_results.undoRow(ds_results.getRowPosition());
  }
};

// 차량조회
scwin.f_vehclSearch = async function (bAddRowFlag, bCloseFlag, bSpotFlag) {
  var v_AddRowFlag = bAddRowFlag == true ? 'T' : 'F';
  var v_CloseFlag = bCloseFlag == true ? 'T' : 'F';
  if (ds_results.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, "선택한 운송물량정보가 없습니다");
  }
  // 합적인경우 차량은 한대만 등록가능
  if (bAddRowFlag && ds_results1.getRowCount() > 0) {
    await $c.gus.cfAlertMsg($p, "차량은 한대만 등록할 수 있습니다");
    return;
  }
  var arrParam = new Array();
  var rtnList = new Array();
  var v_vehclShortCd = "";
  if (ds_results1.getRowCount() > 0 && bCloseFlag) {
    v_vehclShortCd = ds_results1.getCellData(ds_results1.getRowPosition(), "vehclShortCd");
  }
  if (bSpotFlag) {
    var v_bondTransExpireDt = ds_results.getCellData(ds_results.getRowPosition(), "bondTransExpireDt");
    arrParam[0] = new Array(ds_results2.getCellData(ds_results2.getRowPosition(), "clntNo") // 0 협력업체코드
    , ds_results2.getCellData(ds_results2.getRowPosition(), "clntNm") // 1 협력업체명
    , v_vehclShortCd // 2 차량단축번호
    , DsConstants.EQ_KND_CD_TR // 3 차량종류
    ); // 검색조건

    arrParam[1] = new Array(v_bondTransExpireDt, v_CloseFlag); // 보세운송만료일자

    let win_url = "/ui/ds/op/rscconfirm/transrscconfirm/op_101_01_18p.xml";
    let data = {};
    data.param = arrParam;
    let opts = {
      id: "smpPop",
      popupName: "SPOT 차량조회",
      modal: true,
      type: "browserPopup",
      width: 820,
      height: 600,
      title: "SPOT 차량조회"
    };
    rtnList = await $c.win.openPopup($p, win_url, opts, data);
    // var pURL = '/ds/op/rscconfirm/transrscconfirm/op_101_01_18p.jsp';
    // rtnList = window.showModalDialog(pURL,arrParam,"dialogWidth:820px; dialogHeight:600px");
  } else {
    var v_bondTransExpireDt = ds_results.getCellData(ds_results.getRowPosition(), "bondTransExpireDt");
    arrParam[0] = new Array(acb_lobranCd.getValue() // 0 점소
    , DsConstants.WRK_DST_CLS_CD_J // 1 작업구간
    , acb_districtCd.getValue() // 2 권역
    , acb_cargoClsCd.getValue() // 3 화물구분
    , ds_results.getCellAllData(ds_results.getRowPosition(), "wrkStDt") // 4 작업시작일
    , v_vehclShortCd // 5 차량단축번호
    , ds_results2.getCellAllData(ds_results2.getRowPosition(), "clntNo") // 6 협력업체코드
    , ds_results2.getCellAllData(ds_results2.getRowPosition(), "clntNm") // 7 협력업체명
    , "" // 8 조회조건(동부한농 복합비료등 예외조건)
    , DsConstants.EQ_KND_CD_TR // 9 차량종류
    ); // 검색조건

    arrParam[1] = new Array(v_bondTransExpireDt // 보세운송만료일자
    , v_CloseFlag // AutoClose 여부
    , v_AddRowFlag // 전체검색여부
    );
    let win_url = "/ui/ds/op/rscconfirm/transrscconfirm/op_101_01_19p.xml";
    let data = {};
    data.param = arrParam;
    let opts = {
      id: "smpPop",
      popupName: "협력업체관리차량조회",
      modal: true,
      type: "browserPopup",
      width: 820,
      height: 530,
      title: "협력업체관리차량조회"
    };
    rtnList = await $c.win.openPopup($p, win_url, opts, data);
  }
  if (rtnList == null || rtnList[0][0] == null && rtnList[0] == "N/A") {
    //단축번호로 직접 조회한경우 해당로우를 삭제한다
    if (!bAddRowFlag) {
      ds_results1.undoRow(ds_results1.getRowPosition());
    }
    return;
  }
  var firstList = new Array();
  if (bAddRowFlag && ds_results1.getRowCount() == 0) {
    ds_results1.insertRow(0);
  }
  var v_transWrkIndictNo = ds_results.getCellData(ds_results.getRowPosition(), "transWrkIndictNo");
  for (var i = 0; i < rtnList.length; i++) {
    firstList = rtnList[i];
    var Row = ds_results1.getRowPosition();
    if (bSpotFlag) {
      ds_results1.setCellData(Row, "spotYn", 1);
    } else {
      ds_results1.setCellData(Row, "spotYn", 0);
    }
    ds_results1.setCellData(Row, "vehclNo", firstList[0]);
    ds_results1.setCellData(Row, "eqCd", firstList[1]);
    ds_results1.setCellData(Row, "eqKndCd", firstList[2]);
    ds_results1.setCellData(Row, "eqKndNm", firstList[3]);
    ds_results1.setCellData(Row, "eqNrmCd", firstList[4]);
    ds_results1.setCellData(Row, "eqNrmNm", firstList[5]);
    ds_results1.setCellData(Row, "clntNo", firstList[6]);
    ds_results1.setCellData(Row, "clntNm", firstList[7]);
    ds_results1.setCellData(Row, "vehclShortCd", firstList[8]);
    ds_results1.setCellData(Row, "drvEmpNo", firstList[9]);
    ds_results1.setCellData(Row, "drvNm", firstList[10]);
    ds_results1.setCellData(Row, "mpNo", firstList[11]);
    ds_results1.setCellData(Row, "trsNo", firstList[12]);
    ds_results1.setCellData(Row, "chassisEqCd", "");
    ds_results1.setCellData(Row, "chassisNo", "");
    ds_results1.setCellData(Row, "chassisKndCd", "");
    ds_results1.setCellData(Row, "chassisKndNm", "");
    ds_results1.setCellData(Row, "assgnLobranCd", firstList[19]);
    ds_results1.setCellData(Row, "posnClsCd", firstList[20]);
    ds_results1.setCellData(Row, "wrkIndictYn", firstList[21]);
    ds_results1.setCellData(Row, "vehclIdCardNo", firstList[22]);
    ds_results1.setCellData(Row, "chassisShortCd", "");
    ds_results1.setCellData(Row, "mbssysVehclYn", firstList[23]); //회원제차량여부
    ds_results1.setCellData(Row, "arvDt", firstList[25]); //차량도착(예정)일자
    ds_results1.setCellData(Row, "transWrkIndictNo", ds_results.getCellData(ds_results.getRowPosition(), "transWrkIndictNo"));
    ds_results1.setCellData(Row, "odrNo", ds_results.getCellData(ds_results.getRowPosition(), "odrNo"));
    ds_results1.setCellData(Row, "cntrSeq", ds_results.getCellData(ds_results.getRowPosition(), "cntrSeq"));
    ds_results1.setCellData(Row, "odrWrkPathSeq", ds_results.getCellData(ds_results.getRowPosition(), "odrWrkPathSeq"));
    ds_results1.setCellData(Row, "odrWrkStpSeq", ds_results.getCellData(ds_results.getRowPosition(), "odrWrkStpSeq"));

    // 현단계가 회수단계이고 이전운송단계가 BOBTAIL 일경우는 이전운송단계의 샤시정보를 셋팅한다.
    if (ds_results.getCellData(ds_results.getRowPosition(), "wrkStpCd") == DsConstants.WRK_STP_CD_RETRV && ds_results.getCellData(ds_results.getRowPosition(), "bobtailChassisEqCd") != "") {
      ds_results1.setCellData(Row, "chassisShortCd", ds_results.getCellData(ds_results.getRowPosition(), "bobtailChassisShortCd"));
      ds_results1.setCellData(Row, "chassisNo", ds_results.getCellData(ds_results.getRowPosition(), "bobtailChassisNo"));
      ds_results1.setCellData(Row, "chassisKndCd", ds_results.getCellData(ds_results.getRowPosition(), "bobtailChassisKndCd"));
      ds_results1.setCellData(Row, "chassisEqCd", ds_results.getCellData(ds_results.getRowPosition(), "bobtailChassisEqCd"));
    }
    for (var j = ds_results.getRowPosition(); j <= ds_results.getRowPosition(); j++) {
      // 작업지시번호가 다르거나 이미 차량지정을 한경우에는 skip
      if (v_transWrkIndictNo != ds_results.getCellData(j, "transWrkIndictNo") || ds_results.getCellData(j, "vehclNo") != "") {
        continue;
      }
      if (bSpotFlag) {
        ds_results.setCellData(j, "spotYn", 1);
      } else {
        ds_results.setCellData(j, "spotYn", 0);
      }

      // 차량번호를 운송물량 그리드에 넣어준다
      ds_results.setCellData(j, "vehclNo", firstList[0]);
      ds_results.setCellData(j, "eqCd", firstList[1]);
      ds_results.setCellData(j, "eqKndCd", firstList[2]);
      ds_results.setCellData(j, "eqKndNm", firstList[3]);
      ds_results.setCellData(j, "eqNrmCd", firstList[4]);
      ds_results.setCellData(j, "eqNrmNm", firstList[5]);
      ds_results.setCellData(j, "clntNo", firstList[6]);
      ds_results.setCellData(j, "clntNm", firstList[7]);
      ds_results.setCellData(j, "vehclShortCd", firstList[8]);
      ds_results.setCellData(j, "drvEmpNo", firstList[9]);
      ds_results.setCellData(j, "drvNm", firstList[10]);
      ds_results.setCellData(j, "mpNo", firstList[11]);
      ds_results.setCellData(j, "trsNo", firstList[12]);
      ds_results.setCellData(j, "chassisEqCd", "");
      ds_results.setCellData(j, "chassisNo", "");
      ds_results.setCellData(j, "chassisKndCd", "");
      ds_results.setCellData(j, "chassisKndNm", "");
      ds_results.setCellData(j, "assgnLobranCd", firstList[19]);
      ds_results.setCellData(j, "posnClsCd", firstList[20]);
      ds_results.setCellData(j, "wrkIndictYn", firstList[21]);
      ds_results.setCellData(j, "vehclIdCardNo", firstList[22]);
      ds_results.setCellData(j, "chassisShortCd", "");
      ds_results.setCellData(j, "mbssysVehclYn", firstList[24]);
      ds_results.setCellData(j, "arvDt", firstList[25]);
    }
  }
  return false;
};

// 행추가
scwin.f_AddRow = async function (gubun) {
  if (gubun == null || gubun == "" || gubun == 0) {
    // 합적인경우 차량은 한대만 등록가능
    if (ds_results1.getRowCount() > 0) {
      await $c.gus.cfAlertMsg($p, "차량은 한대만 등록할 수 있습니다");
      return;
    }
    ds_results1.insertRow();
  }
  scwin.f_switchObjMode(8); //행추가
};

// 행취소
scwin.f_CancelRow = function (gubun) {
  $c.data.undoRow($p, ds_results1, "Y");
  if (ds_results1.getRowCount() == 0) {
    ds_results.setCellData(ds_results.getRowPosition(), "spotYn", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "vehclNo", "");
    ds_results.setCellData(ds_results.getRowPosition(), "eqCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "eqKndCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "eqKndNm", "");
    ds_results.setCellData(ds_results.getRowPosition(), "eqNrmCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "eqNrmNm", "");
    ds_results.setCellData(ds_results.getRowPosition(), "clntNo", "");
    ds_results.setCellData(ds_results.getRowPosition(), "clntNm", "");
    ds_results.setCellData(ds_results.getRowPosition(), "vehclShortCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "drvEmpNo", "");
    ds_results.setCellData(ds_results.getRowPosition(), "drvNm", "");
    ds_results.setCellData(ds_results.getRowPosition(), "mpNo", "");
    ds_results.setCellData(ds_results.getRowPosition(), "trsNo", "");
    ds_results.setCellData(ds_results.getRowPosition(), "chassisEqCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "chassisNo", "");
    ds_results.setCellData(ds_results.getRowPosition(), "chassisKndCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "chassisKndNm", "");
    ds_results.setCellData(ds_results.getRowPosition(), "assgnLobranCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "posnClsCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "wrkIndictYn", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "vehclIdCardNo", "");
    ds_results.setCellData(ds_results.getRowPosition(), "chassisShortCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "mbssysVehclYn", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "arvDt", "");
  } else {
    if (ds_results1.getCellData(0, "eqCd") == "") {
      ds_results.setCellData(ds_results.getRowPosition(), "spotYn", 1);
    } else {
      ds_results.setCellData(ds_results.getRowPosition(), "spotYn", 0);
    }
    ds_results.setCellData(ds_results.getRowPosition(), "vehclNo", ds_results1.getCellData(0, "vehclNo"));
    ds_results.setCellData(ds_results.getRowPosition(), "eqCd", ds_results1.getCellData(0, "eqCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "eqKndCd", ds_results1.getCellData(0, "eqKndCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "eqKndNm", ds_results1.getCellData(0, "eqKndNm"));
    ds_results.setCellData(ds_results.getRowPosition(), "eqNrmCd", ds_results1.getCellData(0, "eqNrmCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "eqNrmNm", ds_results1.getCellData(0, "eqNrmNm"));
    ds_results.setCellData(ds_results.getRowPosition(), "clntNo", ds_results1.getCellData(0, "clntNo"));
    ds_results.setCellData(ds_results.getRowPosition(), "clntNm", ds_results1.getCellData(0, "clntNm"));
    ds_results.setCellData(ds_results.getRowPosition(), "vehclShortCd", ds_results1.getCellData(0, "vehclShortCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "drvEmpNo", ds_results1.getCellData(0, "drvEmpNo"));
    ds_results.setCellData(ds_results.getRowPosition(), "drvNm", ds_results1.getCellData(0, "drvNm"));
    ds_results.setCellData(ds_results.getRowPosition(), "mpNo", ds_results1.getCellData(0, "mpNo"));
    ds_results.setCellData(ds_results.getRowPosition(), "trsNo", ds_results1.getCellData(0, "trsNo"));
    ds_results.setCellData(ds_results.getRowPosition(), "chassisEqCd", ds_results1.getCellData(0, "chassisEqCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "chassisNo", ds_results1.getCellData(0, "chassisNo"));
    ds_results.setCellData(ds_results.getRowPosition(), "chassisKndCd", ds_results1.getCellData(0, "chassisKndCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "chassisKndNm", ds_results1.getCellData(0, "chassisKndNm"));
    ds_results.setCellData(ds_results.getRowPosition(), "assgnLobranCd", ds_results1.getCellData(0, "assgnLobranCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "posnClsCd", ds_results1.getCellData(0, "posnClsCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "wrkIndictYn", ds_results1.getCellData(0, "wrkIndictYn"));
    ds_results.setCellData(ds_results.getRowPosition(), "vehclIdCardNo", ds_results1.getCellData(0, "vehclIdCardNo"));
    ds_results.setCellData(ds_results.getRowPosition(), "chassisShortCd", ds_results1.getCellData(0, "chassisShortCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "mbssysVehclYn", ds_results1.getCellData(0, "mbssysVehclYn"));
    ds_results.setCellData(ds_results.getRowPosition(), "arvDt", ds_results1.getCellData(0, "arvDt"));
  }
  scwin.f_switchObjMode(7); //행삭제, 취소
};

// 조회조기 필드 Clear
scwin.f_FieldClear = function () {
  if (scwin.gv_userClsCd != "01") {
    $c.gus.cfInitObjects($p, tb_srchCond, [acb_cargoClsCd, ed_dptIntendDt, ed_dptIntendDt2, acb_lobranCd, ed_clntNo, ed_clntNm]);
  } else {
    $c.gus.cfInitObjects($p, tb_srchCond, [acb_cargoClsCd, ed_dptIntendDt, ed_dptIntendDt2, acb_lobranCd]);
  }
};

// GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
scwin.f_orderDetail = async function () {
  var row = ds_results.getRowPosition();
  if (ds_results.getRowCount() > 0) {
    // 선택된 오더 정보 : 오더번호 / 오더유형
    var v_odrNo = ds_results.getCellData(row, "odrNo");
    var v_odrKndCd = ds_results.getCellData(row, "odrKndCd");
    var v_transCargoClsCd = ds_search.getCellData(0, "cargoClsCd");
    var paramObj = {
      odrNo: v_odrNo,
      type: "retrieve"
    };
    let options = {
      "openAction": "exist"
    };
    if (v_transCargoClsCd == DsConstants.ODR_BULK) {
      // 오더 종류가 벌크오더인 경우 - 화물구분(B : 벌크)
      $c.win.openMenu($p, "벌크오더", "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_02t.xml", "sd_402_01_02t.jsp", paramObj, options);
    } else {
      // 오더 종류가 컨테이너 오더인 경우 - 화물구분 (C : 컨테이너)
      $c.win.openMenu($p, "컨테이너오더", "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_06b.xml", "as_102_01_06b.jsp", paramObj, options);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("오더현황"));
    return;
  }
};

// 반출등록
scwin.f_switchTabMenu = async function (gubun) {
  var v_msg = "";
  if (ds_results.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("오더"));
    return;
  } else {
    var v_lobranCd = acb_lobranCd.getValue();
    var v_odrNo = ds_results.getCellData(ds_results.getRowPosition(), "odrNo");
    var v_cntrSeq = ds_results.getCellData(ds_results.getRowPosition(), "cntrSeq");
    var v_cargoClsCd = DsConstants.CARGO_CLS_CD_CONTAINER;
    var v_wrkStDt = ds_results.getCellData(ds_results.getRowPosition(), "wrkStDt");
    var v_wrkEndDt = ds_results.getCellData(ds_results.getRowPosition(), "wrkEndDt");
    var v_dptWrkPlCd = ds_results.getCellData(ds_results.getRowPosition(), "dptWrkPlCd");
    if ($c.gus.cfIsNull($p, v_odrNo)) {
      await $c.gus.cfAlertMsg($p, "오더를 선택하십시요");
      return;
    }
    switch (gubun) {
      case 2:
        if (ds_results.getCellData(ds_results.getRowPosition(), "dptWrkPlClsCd") != DsConstants.WRK_PL_CLS_CD_CY || ds_results.getCellData(ds_results.getRowPosition(), "gateInslYn") != 1) {
          v_msg = "[오더번호 : " + ds_results.getCellData(ds_results.getRowPosition(), "odrNo") + "출발작업장 : " + ds_results.getCellData(ds_results.getRowPosition(), "dptWrkPlNm") + "] \n" + "반출등록을 할 수 없는 오더입니다";
          await $c.gus.cfAlertMsg($p, v_msg);
          return;
        }
        var paramObj = {
          odrNo: v_odrNo,
          lobranCd: v_lobranCd,
          cargoClsCd: v_cargoClsCd,
          dptIntendDt: v_wrkStDt,
          dptIntendDt2: v_lobranCd,
          dptWrkPlCd: v_dptWrkPlCd
        };
        let options = {
          "openAction": "exist"
        };
        $c.win.openMenu($p, "반출등록", "/ui/ds/op/wrkrslts/cywrkrslts/op_301_01_06b.xml", "op_301_01_06b.jsp", paramObj, options);
        break;
    }
  }
};

// 반출입예정정보EDI등록
scwin.f_crryInOutEDI = async function (bAlertFlag, bSaveFlag, bTransferFlag, row, bDeleteFlag) {
  // 윤동진대리님 요청사항
  // 내부사용자가 아니면 평일 18시이후 , 주말 12시이후 KBCTCY 코피노전송불가
  var weekday = scwin.toDay; // 요일
  var curDtm = scwin.curDtm; // 현재일시
  var curTime = curDtm.substring(8); // 현재시간
  var userClsCd = scwin.userClsCd; // 사용자구분코드    

  if (ds_results.getCellData(ds_results.getRowPosition(), "dptWrkPlCd") == "6C01" || ds_results.getCellData(ds_results.getRowPosition(), "arvWrkPlCd") == "6C01") {
    if (userClsCd != "01") {
      // 사용자구분코드 01:그룹사가 아니면)
      if (weekday == "SUN") {
        // 주말 12시이후 전송안됨
        await $c.gus.cfAlertMsg($p, "일요일엔 COPINO전송을 하실수 없습니다. \n 문의 사항은 담당 배차에게 문의주세요.");
        return false;
      } else if (weekday == "SAT") {
        if (curTime > "1200") {
          await $c.gus.cfAlertMsg($p, "토요일 12시 이후엔 COPINO전송을 하실수 없습니다. \n 문의 사항은 담당 배차에게 문의주세요.");
          return false;
        }
      } else {
        // 평일 17시 30분 이후 전송안됨
        if (curTime > "1730") {
          await $c.gus.cfAlertMsg($p, "평일 17시 30분 이후엔 COPINO전송을 하실수 없습니다. \n 문의 사항은 담당 배차에게 문의주세요.");
          return false;
        }
      }
    }
  }
  if (ds_results.getRowCount() == 0) {
    return;
  }
  if (ds_results.getCellData(row, "vehclNo") == "") {
    if (bAlertFlag) {
      await $c.gus.cfAlertMsg($p, "운송차량이 없습니다");
    }
    return false;
  }
  if (ds_results.getCellData(row, "crryinEdiFlag") == "N" && ds_results.getCellData(row, "crryoutEdiFlag") == "N") {
    if (bAlertFlag) {
      await $c.gus.cfAlertMsg($p, "EDI등록 대상이 아닙니다");
    }
    return false;
  }
  var rtnList = new Array();
  var arrParam = new Array();
  var v_wrkDt = "";
  if (ds_results.getCellData(row, "crryoutEdiFlag") == 1) {
    v_wrkDt = ds_results.getCellData(row, "wrkStDt");
  } else {
    v_wrkDt = ds_results.getCellData(row, "wrkEndDt");
  }

  // 저장,전송인경우
  if (bSaveFlag) {
    if (ds_searchEDI.getRowCount() == 0) {}
    ds_searchEDI.removeAll();
    ds_searchEDI.insertRow(0);
    ds_searchEDI.setCellData(0, "qryClsCd", "");
    ds_searchEDI.setCellData(0, "transWrkIndictNo", ds_results.getCellData(row, "transWrkIndictNo"));
    ds_searchEDI.setCellData(0, "odrNo", ds_results.getCellData(row, "odrNo"));
    ds_searchEDI.setCellData(0, "cntrSeq", ds_results.getCellData(row, "cntrSeq"));
    ds_searchEDI.setCellData(0, "wrkPathSeq", ds_results.getCellData(row, "odrWrkPathSeq"));
    ds_searchEDI.setCellData(0, "wrkStpSeq", ds_results.getCellData(row, "odrWrkStpSeq"));
    ds_searchEDI.setCellData(0, "vehclNo", ds_results.getCellData(row, "vehclNo"));
    ds_searchEDI.setCellData(0, "crryinoutDt", ds_results.getCellData(row, "wrkStDt"));
    ds_searchEDI.setCellData(0, "crryinDt", ds_results.getCellData(row, "wrkEndDt"));
    ds_searchEDI.setCellData(0, "cntrNo", ds_results.getCellData(row, "cntrNo"));
    ds_searchEDI.setCellData(0, "dptWrkPlCd", ds_results.getCellData(row, "dptWrkPlCd"));
    ds_searchEDI.setCellData(0, "arvWrkPlCd", ds_results.getCellData(row, "arvWrkPlCd"));
    ds_searchEDI.setCellData(0, "crryoutEdiType", ds_results.getCellData(row, "crryoutEdiType"));
    ds_searchEDI.setCellData(0, "crryinEdiType", ds_results.getCellData(row, "crryinEdiType"));
    ds_searchEDI.setCellData(0, "sndFlag", bTransferFlag == true ? "1" : "0");
    ds_searchEDI.setCellData(0, "delFlag", bDeleteFlag == true ? "1" : "0");

    // 메시지 표시를 위해 저장(작업완료후 전송, 저장여부를 메시지로 표시해줌)
    gv_bEdiTransfer = bTransferFlag;
    scwin.gv_bEdiTransfer = bTransferFlag;
    $c.sbm.execute($p, sbm_saveEDI); //tr_saveEDI.post();
    return true;
  }
  arrParam[0] = new Array("" //조회구분 ("" : 운송작업지시, "1" : 반출입)
  , ds_results.getCellData(row, "transWrkIndictNo"), ds_results.getCellData(row, "odrNo"), ds_results.getCellData(row, "cntrSeq"), ds_results.getCellData(row, "odrWrkPathSeq"), ds_results.getCellData(row, "odrWrkStpSeq"), ds_results.getCellData(row, "vehclShortCd"), ds_results.getCellData(row, "vehclNo"), ds_results.getCellData(row, "vehclIdCardNo"), ds_results.getCellData(row, "wrkStDt"), ds_results.getCellData(row, "wrkEndDt"), ds_results.getCellData(row, "cntrNo"), ds_results.getCellData(row, "dptWrkPlCd"), ds_results.getCellData(row, "arvWrkPlCd"), ds_results.getCellData(row, "dptWrkPlNm"), ds_results.getCellData(row, "arvWrkPlNm"), ds_results.getCellData(row, "crryoutEdiType"), ds_results.getCellData(row, "crryinEdiType"));
  let win_url = "/ui/ds/op/wrkplan/transwrkplan/op_202_02_21p.xml";
  let data = {
    "crryoutEdiType": ds_results.getCellData(row, "crryoutEdiType"),
    "crryinEdiType": ds_results.getCellData(row, "crryinEdiType")
  };
  data.param = arrParam;
  let opts = {
    id: "smpPop",
    popupName: "반출입예정정보EDI등록",
    modal: true,
    type: "browserPopup",
    width: 820,
    height: 660,
    title: "반출입예정정보EDI등록"
  };
  rtnList = await $c.win.openPopup($p, win_url, opts, paramObject);
  return true;
};
scwin.f_print = async function (gubun) {
  var v_msg = "";
  if (ds_results.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("오더"));
    return;
  } else {
    var v_lobranCd = acb_lobranCd.getValue();
    var v_odrNo = ds_results.getCellData(ds_results.getRowPosition(), "odrNo");
    var v_cntrSeq = ds_results.getCellData(ds_results.getRowPosition(), "cntrSeq");
    var v_cntrNo = ds_results.getCellData(ds_results.getRowPosition(), "cntrNo");
    var v_cargoClsCd = DsConstants.CARGO_CLS_CD_CONTAINER;
    var v_wrkStDt = ds_results.getCellData(ds_results.getRowPosition(), "wrkStDt");
    var v_wrkEndDt = ds_results.getCellData(ds_results.getRowPosition(), "wrkEndDt");
    var v_dptWrkPlCd = ds_results.getCellData(ds_results.getRowPosition(), "dptWrkPlCd");
    var v_crryinoutIntendNo = ds_results.getCellData(ds_results.getRowPosition(), "crryinoutIntendNo");
    switch (gubun) {
      case 1:
        if ($c.gus.cfIsNull($p, v_odrNo)) {
          await $c.gus.cfAlertMsg($p, "오더를 선택하십시요");
          return;
        }
        var datas = {
          reportName: "/ds/op/wrkplan/transwrkplan/op_202_02_03r.ozr",
          odiName: "op_202_02_03r",
          odiParam: {
            odrNo: v_odrNo
          },
          viewerParam: {
            zoom: 100
          },
          formParam: {}
        };
        await scwin.openPopup(datas);
        break;
      case 2:
        if ($c.gus.cfIsNull($p, v_crryinoutIntendNo)) {
          await $c.gus.cfAlertMsg($p, "반출입예정번호가 없습니다");
          return;
        }
        var data = {
          reportName: "/ds/op/wrkplan/transwrkplan/op_301_01_05r.ozr",
          odiName: "op_301_01_05r",
          odiParam: {
            crryinoutIntendNo: v_crryinoutIntendNo
          },
          viewerParam: {
            zoom: 100
          },
          formParam: {}
        };
        await scwin.openPopup(data);
        break;
      default:
        break;
    }
  }
};
scwin.openPopup = async function (data) {
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
scwin.f_filter = function () {
  ds_results.clearFilter();
  let fn_tmpDeptFilter = function (cellData, tmpParam, rowIdx) {
    if (acb_vehclYn.getValue() == "0") {
      if (ds_results.getCellData(rowIdx, "vehclYn") != 0) {
        return false;
      }
    } else if (acb_vehclYn.getValue() == "1") {
      if (ds_results.getCellData(rowIdx, "vehclYn") != 1) {
        return false;
      }
    }
    if (acb_wrkStpCd.getValue() == DsConstants.WRK_STP_CD_TRANS) {
      if (ds_results.getCellData(rowIdx, "wrkStpCd") != DsConstants.WRK_STP_CD_TRANS) {
        return false;
      }
    } else if (acb_wrkStpCd.getValue() == DsConstants.WRK_STP_CD_RETRV) {
      if (ds_results.getCellData(rowIdx, "wrkStpCd") != DsConstants.WRK_STP_CD_RETRV) {
        return false;
      }
    } else if (acb_wrkStpCd.getValue() == DsConstants.WRK_STP_CD_SHUTTLE) {
      if (ds_results.getCellData(rowIdx, "wrkStpCd") != DsConstants.WRK_STP_CD_SHUTTLE) {
        return false;
      }
    } else if (acb_wrkStpCd.getValue() == DsConstants.WRK_STP_CD_GROUND_TRANS) {
      if (ds_results.getCellData(rowIdx, "wrkStpCd") != DsConstants.WRK_STP_CD_GROUND_TRANS) {
        return false;
      }
    }

    // ON/BOB 필터링
    if (acb_cntrWrkKndCd.getValue() != "") {
      if (acb_cntrWrkKndCd.getValue() == DsConstants.CNTR_WRK_KND_CD_BOBTAIL && ds_results.getCellData(rowIdx, "cntrWrkShapeCd") != DsConstants.CNTR_WRK_KND_CD_BOBTAIL) {
        return false;
      } else if (acb_cntrWrkKndCd.getValue() == DsConstants.CNTR_WRK_KND_CD_ONGROUND && ds_results.getCellData(rowIdx, "cntrWrkShapeCd") != DsConstants.CNTR_WRK_KND_CD_ONGROUND) {
        return false;
      }
    }
    return true;
  };
  ds_results.setColumnFilter({
    type: "func",
    columnId: "wrkStpCd",
    key: fn_tmpDeptFilter,
    condition: "and"
  });
  totalRows1.setValue(ds_results.getRowCount());
};

// 공통코드 상위코드 join 조회 
scwin.f_RetrieveCommonUpperCd = async function (tbdsid, param1, param2, param3, param4, param5, param6) {
  dma_conCombo.set("sysCd", "CooperationCompanyEquipmentEBC");
  dma_conCombo.set("queryId", "retrivecComboCommonUpperCdList");
  dma_conCombo.set("param1", "ZZ210");
  dma_conCombo.set("param2", "TL");
  dma_conCombo.set("param3", "false");
  let e = await $c.sbm.execute($p, sbm_getSasiKindCode);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_combo_sasiKind.sort("code", 0);
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
scwin.udc_clntNo_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};
scwin.udc_dptWrkPlCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dptWrkPlCd, ed_dptWrkPlNm);
};
scwin.udc_arvWrkPlCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_arvWrkPlCd, ed_arvWrkPlNm);
};
scwin.udc_vsslCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vsslCd, ed_vsslNm);
};

//-------------------------------------------------------------------------
// Event onClick
//-------------------------------------------------------------------------
// 협력업체 찾기 버튼 클릭 이벤트 
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'T');
};

// 출발지 찾기 버튼 클릭 이벤트 
scwin.udc_dptWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_dptWrkPlCd.getValue(), ed_dptWrkPlNm.getValue(), 'F', 'T');
};

// 도착지 찾기 버튼 클릭 이벤트 
scwin.udc_arvWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_arvWrkPlCd.getValue(), ed_arvWrkPlNm.getValue(), 'F', 'T');
};

// 선박명 찾기 버튼 클릭 이벤트 
scwin.udc_vsslCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_vsslCd.getValue(), ed_vsslNm.getValue(), 'F', 'T');
};

// 조회 클릭 이벤트 
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

// 초기화 클릭 이벤트 
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

// 배차지시서 클릭 이벤트
scwin.btn_print2_onclick = function (e) {
  scwin.f_print(2);
};

// 오더SHEET 클릭 이벤트
scwin.btn_print1_onclick = function (e) {
  scwin.f_print(1);
};

// COPINO전송 클릭 이벤트
scwin.btn_carryingInOutEDI_onclick = function (e) {
  scwin.f_crryInOutEDI(true, false, false, ds_results.getRowPosition(), false);
};

// 반출등록 클릭 이벤트
scwin.btn_crryout_onclick = function (e) {
  scwin.f_switchTabMenu(2);
};

// 차량조회 클릭 이벤트
scwin.btn_vehcl_onclick = function (e) {
  scwin.f_vehclSearch(true, false, false);
};

// SPOT차량 클릭 이벤트
scwin.btn_spot_onclick = function (e) {
  scwin.f_vehclSearch(true, false, true);
};

// 저장 A/S 클릭 이벤트
scwin.btn_save2_onclick = function (e) {
  scwin.f_Save(2);
};

// 저장 M/S 클릭 이벤트
scwin.btn_save3_onclick = function (e) {
  scwin.f_Save(3);
};

// 저장 클릭 이벤트
scwin.btn_save_onclick = function (e) {
  scwin.f_Save(1);
};

// 삭제 클릭 이벤트
scwin.btn_delete_onclick = function (e) {
  scwin.f_Delete();
};

//-------------------------------------------------------------------------
// Event onblur
//-------------------------------------------------------------------------
// 협력업체 코드 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 4);
};

// 협력업체 명 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 4, false);
};

// 출발지 코드 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_dptWrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dptWrkPlCd, ed_dptWrkPlNm, 2);
};

// 출발지 명 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_dptWrkPlCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dptWrkPlNm, ed_dptWrkPlCd, 2, false);
};

// 도착지 코드 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_arvWrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_arvWrkPlCd, ed_arvWrkPlNm, 3);
};

// 도착지 명 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_arvWrkPlCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_arvWrkPlNm, ed_arvWrkPlCd, 3, false);
};

// 선박명 코드 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_vsslCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_vsslCd, ed_vsslNm, 1);
};

// 선박명 명 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_vsslCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_vsslNm, ed_vsslCd, 1, false);
};

//-------------------------------------------------------------------------
// Event onchange
//-------------------------------------------------------------------------
// 작업구분
scwin.acb_cargoClsCd_onchange = function (info) {
  if (acb_cargoClsCd.getValue() == DsConstants.CARGO_CLS_CD_BULK) {
    var paramObj = {};
    var options = {
      "openAction": "exist"
    };
    $c.win.openMenu($p, "협력업체차량작업지시등록(벌크)", "/ui/ds/op/wrkplan/transwrkplan/op_202_02_24b.xml", "op_202_02_24b.jsp", paramObj, options);
  }
};

// 작업단계
scwin.acb_wrkStpCd_onchange = function (info) {
  scwin.f_filter();
};

// 현ON/BOB구분
scwin.acb_cntrWrkKndCd_onchange = function (info) {
  scwin.f_filter();
};

//-------------------------------------------------------------------------
// Sbm submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {};
scwin.sbm_save_submitdone = async function (e) {
  scwin.rowFlag = ""; // 초기화	
  if (await $c.gus.cfAlertMsg($p, MSG_CM_INF_001)) {
    // 성공적으로 저장하였습니다
    var v_bDeleteFlag = false;
    var v_transWrkIndictNo = ds_results.getCellData(ds_results.getRowPosition(), "transWrkIndictNo");
    var v_canPopup = true;
    for (var i = 0; i < ds_results.getRowCount(); i++) {
      if (ds_results.getCellData(i, "vehclNo") == "" || ds_results.getCellData(i, "transWrkIndictNo") != v_transWrkIndictNo) {
        continue;
      }
      if (ds_results.getCellData(i, "crryinEdiFlag") == "N" && ds_results.getCellData(i, "crryoutEdiFlag") == "N") {
        continue;
      }

      // 미등록인 경우에만 메시지 출력
      if (ds_results.getCellData(i, "crryinEdiFlag") != "" && ds_results.getCellData(i, "crryoutEdiFlag") != "") {
        continue;
      }
      if (ds_results.getRowStatus(i) == "D") {
        v_bDeleteFlag = true;
      } else {
        v_bDeleteFlag = false;
      }
      if (gv_iCopinoFlag == 2) {
        scwin.f_crryInOutEDI(false, true, true, i, v_bDeleteFlag);
      } else if (gv_iCopinoFlag == 3) {
        if (v_canPopup) {
          v_canPopup = false;
          scwin.f_crryInOutEDI(false, false, false, i, v_bDeleteFlag);
        }
      }
    }
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// InputBox 대문자 설정
//-------------------------------------------------------------------------
scwin.ed_cntrNo_onkeyup = function (e) {
  $c.win.chUpper($p, e);
};
scwin.ed_portcnt_onkeyup = function (e) {
  $c.win.chUpper($p, e);
};
scwin.ed_orderNo_onkeyup = function (e) {
  $c.win.chUpper($p, e);
};
scwin.ed_transWorkIndictNo_onkeyup = function (e) {
  $c.win.chUpper($p, e);
};

//-------------------------------------------------------------------------
// DataSet 이벤트
//-------------------------------------------------------------------------
scwin.ds_results_ondataload = async function () {
  if (ds_results.getRowCount() == 0) {
    totalRows1.setValue(0);
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  totalRows1.setValue(ds_results.getRowCount());

  // 차량정보를 위해 헤더만 복사
  ds_results1.removeAll();
  var v_features = "copyHeader=yes";

  //$c.gus.cfCopyDataSet(ds_results, ds_results1, v_features);

  scwin.f_switchObjMode(5); //조회완료
};
scwin.ds_results2_ondataload = function () {
  if (ds_results.getRowCount() == 0) {
    totalRows2.setValue(0);
    return;
  }
  totalRows2.setValue(ds_results2.getRowCount());
};
scwin.ds_results1_ondataload = function () {
  if (ds_results1.getRowCount() == 0) {
    totalRows3.setValue(0);
    return;
  }
  totalRows3.setValue(ds_results1.getRowCount());
};

// 운송물량 그리드 row 변경시
scwin.ds_results_onrowpositionchange = function (info) {
  var nRow = info.newRowIndex;
  if (ds_results.getRowPosition() < 0) {
    ds_results1.removeAll();
    return;
  }
  if (ds_results.getCellData(nRow, "wrkStpCd") == DsConstants.WRK_STP_CD_TRANS) {
    gr_results.setColumnReadOnly("cntrWrkKndCd", false);
  } else {
    gr_results.setColumnReadOnly("cntrWrkKndCd", true);
  }
  if (scwin.rowFlag != "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_042, ["운송차량", "다른작업"]); // @은(는) 변경된 사항이 있습니다. \n변경사항을 저장 후 @을(를) 수행하십시오.
    return;
  }
  ds_results1.removeAll();

  // 차량정보 그리드를 위해서 복사한다
  if (ds_results.getCellData(ds_results.getRowPosition(), "vehclNo") != "") {
    if (ds_results.getRowStatus(ds_results.getRowPosition()) != "R") {
      var rowIdx = ds_results1.insertRow(0);
      if (ds_results.getCellData(ds_results.getRowPosition(), "eqCd") == "") {
        ds_results1.setCellData(0, "spotYn", 1);
      } else {
        ds_results1.setCellData(0, "spotYn", 0);
      }
      ds_results1.setCellData(0, "vehclNo", ds_results.getCellData(ds_results.getRowPosition(), "vehclNo"));
      ds_results1.setCellData(0, "eqCd", ds_results.getCellData(ds_results.getRowPosition(), "eqCd"));
      ds_results1.setCellData(0, "eqKndCd", ds_results.getCellData(ds_results.getRowPosition(), "eqKndCd"));
      ds_results1.setCellData(0, "eqKndNm", ds_results.getCellData(ds_results.getRowPosition(), "eqKndNm"));
      ds_results1.setCellData(0, "eqNrmCd", ds_results.getCellData(ds_results.getRowPosition(), "eqNrmCd"));
      ds_results1.setCellData(0, "eqNrmNm", ds_results.getCellData(ds_results.getRowPosition(), "eqNrmNm"));
      ds_results1.setCellData(0, "clntNo", ds_results.getCellData(ds_results.getRowPosition(), "clntNo"));
      ds_results1.setCellData(0, "clntNm", ds_results.getCellData(ds_results.getRowPosition(), "clntNm"));
      ds_results1.setCellData(0, "vehclShortCd", ds_results.getCellData(ds_results.getRowPosition(), "vehclShortCd"));
      ds_results1.setCellData(0, "drvEmpNo", ds_results.getCellData(ds_results.getRowPosition(), "drvEmpNo"));
      ds_results1.setCellData(0, "drvNm", ds_results.getCellData(ds_results.getRowPosition(), "drvNm"));
      ds_results1.setCellData(0, "mpNo", ds_results.getCellData(ds_results.getRowPosition(), "mpNo"));
      ds_results1.setCellData(0, "trsNo", ds_results.getCellData(ds_results.getRowPosition(), "trsNo"));
      ds_results1.setCellData(0, "chassisEqCd", ds_results.getCellData(ds_results.getRowPosition(), "chassisEqCd"));
      ds_results1.setCellData(0, "chassisNo", ds_results.getCellData(ds_results.getRowPosition(), "chassisNo"));
      ds_results1.setCellData(0, "chassisKndCd", ds_results.getCellData(ds_results.getRowPosition(), "chassisKndCd"));
      ds_results1.setCellData(0, "chassisKndNm", ds_results.getCellData(ds_results.getRowPosition(), "chassisKndNm"));
      ds_results1.setCellData(0, "assgnLobranCd", ds_results.getCellData(ds_results.getRowPosition(), "assgnLobranCd"));
      ds_results1.setCellData(0, "posnClsCd", ds_results.getCellData(ds_results.getRowPosition(), "posnClsCd"));
      ds_results1.setCellData(0, "wrkIndictYn", ds_results.getCellData(ds_results.getRowPosition(), "wrkIndictYn"));
      ds_results1.setCellData(0, "vehclIdCardNo", ds_results.getCellData(ds_results.getRowPosition(), "vehclIdCardNo"));
      ds_results1.setCellData(0, "chassisShortCd", ds_results.getCellData(ds_results.getRowPosition(), "chassisShortCd"));
      ds_results1.setCellData(0, "mbssysVehclYn", ds_results.getCellData(ds_results.getRowPosition(), "mbssysVehclYn"));
      ds_results1.setCellData(0, "arvDt", ds_results.getCellData(ds_results.getRowPosition(), "arvDt"));
    } else {
      //var v_features1 = "copyHeader=yes,rowFrom=" + ds_results.getRowPosition() + ",rowCnt=1";
      //$c.gus.cfCopyDataSet(ds_results, ds_results1, v_features1);
      var rowData = ds_results.getRowJSON(ds_results.getRowPosition());
      ds_results1.setJSON([rowData]); // 배열 형태로 넣어야 함
    }
  }
  scwin.f_Retrieve(1);
};

// 운송차량 그리드 row 변경시
scwin.ds_results1_onrowpositionchange = function (info) {
  var rowIndex = info.newRowIndex;
  if (ds_results1.getRowCount() == 0) return;
  if (ds_results1.getRowStatus(rowIndex) == "C") {
    gr_results1.setColumnReadOnly("vehclShortCd", false);
  } else {
    gr_results1.setColumnReadOnly("vehclShortCd", true);
  }
};

//-------------------------------------------------------------------------
// 그리드 이벤트
//-------------------------------------------------------------------------
scwin.gr_results_CustomFormatter = function (data, formattedData, rowIndex, colIndex) {
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  let val = data,
    color = "black";
  if (columnId == "vehclYn") {
    if (data == "1") {
      val = "Y";
    } else {
      val = "N";
    }
  } else if (columnId == "odrCompleteYn") {
    if (data == "1") {
      val = "Y";
    } else {
      val = "N";
    }
  } else if (columnId == "wrkStDt") {
    var wrkStDt = data;
    var wrkStHh = ds_results.getCellData(rowIndex, 'wrkStHh');
    val = wrkStDt.substring(2, 4) + "-" + wrkStDt.substring(4, 6) + "-" + wrkStDt.substring(6, 8) + " " + wrkStHh.substring(0, 2) + ":" + wrkStHh.substring(2, 4);
  } else if (columnId == "wrkEndDt") {
    var wrkEndDt = data;
    var wrkEndHh = ds_results.getCellData(rowIndex, 'wrkStHh');
    val = wrkEndDt.substring(2, 4) + "-" + wrkEndDt.substring(4, 6) + "-" + wrkEndDt.substring(6, 8) + " " + wrkEndHh.substring(0, 2) + ":" + wrkEndHh.substring(2, 4);
  } else if (columnId == "sizeAndType") {
    val = ds_results.getCellData(rowIndex, 'cntrSizCd') + ds_results.getCellData(rowIndex, 'cntrTypCd');
  } else if (columnId == "spotYn") {
    var eqCd = ds_results.getCellData(rowIndex, 'eqCd');
    var vehclNo = ds_results.getCellData(rowIndex, 'vehclNo');
    if (eqCd == "") {
      if (vehclNo == "") {
        val = "N";
      } else {
        val = "Y";
      }
    } else {
      val = "N";
    }
  } else if (columnId == "crryoutEdiFlag") {
    var type = ds_results.getCellData(rowIndex, "crryoutEdiType");
    var flagMap = {
      "": "미등록",
      "3": "미전송",
      "1": "전송완료",
      "0": "전송대기",
      "5": "필수항목오류"
    };
    var typeMap = {
      "CO": "(COPINO)",
      "CD": "(COPI_CODECO)"
    };
    val = (flagMap[data] || "") + (typeMap[type] || "");
  } else if (columnId == "crryinEdiFlag") {
    var type = ds_results.getCellData(rowIndex, "crryinEdiType");
    var flagMap = {
      "": "미등록",
      "3": "미전송",
      "1": "전송완료",
      "0": "전송대기",
      "5": "필수항목오류"
    };
    var typeMap = {
      "CO": "(COPINO)",
      "CD": "(COPI_CODECO)"
    };
    val = (flagMap[data] || "") + (typeMap[type] || "");
  }
  return val;
};
scwin.gr_results_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "odrNo") {
    // 오더세부사항 조회 
    scwin.f_orderDetail();
  }
};
scwin.gr_results_onrightbuttonclick = function (rowIndex, columnIndex) {
  let columnId = $c.util.getComponent($p, this.id).getColumnID(columnIndex);
  var v_menudata = "";
  if (columnId == "dptWrkPlNm") {
    // var v_dptPicNm 		= ds_results.NameValue(Row, "dptPicNm"		);
    // var v_dptPicTelNo 	= ds_results.NameValue(Row, "dptPicTelNo"	);
    // var v_dptZip 		= ds_results.NameValue(Row, "dptZip"		);
    // var v_dptAddr1 		= ds_results.NameValue(Row, "dptAddr1"		);
    // var v_dptAddr2 		= ds_results.NameValue(Row, "dptAddr2"		);

    // if (v_dptPicNm == "" && v_dptPicTelNo == "" && v_dptZip == "" && v_dptAddr1 == "" && v_dptAddr2 == "") {
    // 	v_menudata = "출발지정보가 없습니다^1^1^1";
    // } else {
    // 	if (v_dptZip.length == 6) {
    // 		v_dptZip = cfGetFormatStr(v_dtpZip, "###-###");
    // 	}

    // 	//Text^Level^Code^Enable
    // 	v_menudata = v_dptPicNm + "^1^1^1"
    // 			   + "," + v_dptPicTelNo + "^1^1^1"
    // 			   + ",[" + v_dptZip + "]" + v_dptAddr1 + " " + v_dptAddr2 + "^1^1^1"
    // 			   ;
    // }
    // gr_results.MenuData = v_menudata;
    // gr_results.TrackPopupMenu (xpos, ypos);
  } else if (columnId == "arvWrkPlNm") {
    // var v_arvPicNm 		= ds_results.NameValue(Row, "arvPicNm"		);
    // var v_arvPicTelNo 	= ds_results.NameValue(Row, "arvPicTelNo"	);
    // var v_arvZip 		= ds_results.NameValue(Row, "arvZip"		);
    // var v_arvAddr1 		= ds_results.NameValue(Row, "arvAddr1"		);
    // var v_arvAddr2 		= ds_results.NameValue(Row, "arvAddr2"		);

    // if (v_arvPicNm == "" && v_arvPicTelNo == "" && v_arvZip == "" && v_arvAddr1 == "" && v_arvAddr2 == "") {
    // 	v_menudata = "도착지정보가 없습니다^1^1^1";
    // } else {
    // 	if (v_arvZip.length == 6) {
    // 		v_arvZip = cfGetFormatStr(v_arvZip, "###-###");
    // 	}

    // 	//Text^Level^Code^Enable
    // 	v_menudata = v_arvPicNm + "^1^1^1"
    // 			   + "," + v_arvPicTelNo + "^1^1^1"
    // 			   + ",[" + v_arvZip + "]" + v_arvAddr1 + " " + v_arvAddr2 + "^1^1^1"
    // 			   ;
    // }
    // gr_results.MenuData = v_menudata;
    // gr_results.TrackPopupMenu (xpos, ypos); 
  }
};
scwin.gr_results1_ontextimageclick = function (rowIndex, columnIndex) {
  let columnId = $c.util.getComponent($p, this.id).getColumnID(columnIndex);
  switch (columnId) {
    case "vehclShortCd":
      if (ds_results1.getCellData(ds_results1.getRowPosition(), 'spotYn') == 1) {
        scwin.f_vehclSearch(false, false, true);
      } else {
        scwin.f_vehclSearch(false, false, false);
      }
      break;
    case "chassisShortCd":
      scwin.f_openCommonPopUp(6, null, null, 'F', 'T');
      break;
  }
};
scwin.gr_results1_onviewchange = function (info) {
  var row = info.rowIndex;
  var colidx = info.colIndex;
  var colid = info.colId;
  var olddata = info.oldValue;
  switch (colid) {
    case "vehclShortCd":
      // 단축번호
      if (ds_results1.getCellData(row, colid) != "" && ds_results1.getCellData(row, colid) != olddata) {
        if (ds_results1.getCellData(ds_results1.getRowPosition(), 'spotYn') == 1) {
          scwin.f_vehclSearch(false, true, true);
        } else {
          scwin.f_vehclSearch(false, true, false);
        }
      } else if (ds_results1.getCellData(row, colid) == "" && ds_results1.getCellData(row, "vehclNo") != "") {
        ds_results1.undoRow(row);
      }
      break;
    case "chassisShortCd":
      //샤시번호
      if (ds_results1.getCellData(row, "chassisShortCd") != "") {
        if (ds_results1.getCellData(row, colid) != olddata) {
          scwin.f_openCommonPopUp(6, null, null, 'T', 'T');
        }
      } else {
        ds_results1.setCellData(row, "chassisNo", "");
        ds_results1.setCellData(row, "chassisKndCd", "");
        ds_results1.setCellData(row, "chassisEqCd", "");
      }
      break;
  }
  if (ds_results1.getRowCount() == 0 || ds_results1.getRowStatus(row) == "D") {
    // 행이 삭제된 경우
    ds_results.setCellData(ds_results.getRowPosition(), "spotYn", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "vehclNo", "");
    ds_results.setCellData(ds_results.getRowPosition(), "eqCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "eqKndCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "eqKndNm", "");
    ds_results.setCellData(ds_results.getRowPosition(), "eqNrmCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "eqNrmNm", "");
    ds_results.setCellData(ds_results.getRowPosition(), "clntNo", "");
    ds_results.setCellData(ds_results.getRowPosition(), "clntNm", "");
    ds_results.setCellData(ds_results.getRowPosition(), "vehclShortCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "drvEmpNo", "");
    ds_results.setCellData(ds_results.getRowPosition(), "drvNm", "");
    ds_results.setCellData(ds_results.getRowPosition(), "mpNo", "");
    ds_results.setCellData(ds_results.getRowPosition(), "trsNo", "");
    ds_results.setCellData(ds_results.getRowPosition(), "chassisEqCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "chassisNo", "");
    ds_results.setCellData(ds_results.getRowPosition(), "chassisKndCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "chassisKndNm", "");
    ds_results.setCellData(ds_results.getRowPosition(), "assgnLobranCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "posnClsCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "vehclIdCardNo", "");
    ds_results.setCellData(ds_results.getRowPosition(), "chassisShortCd", "");
    ds_results.setCellData(ds_results.getRowPosition(), "mbssysVehclYn", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "arvDt", "");
  } else {
    if (ds_results1.getCellData(1, "eqCd") == "") {
      ds_results.setCellData(ds_results.getRowPosition(), "spotYn", 1);
    } else {
      ds_results.setCellData(ds_results.getRowPosition(), "spotYn", 0);
    }
    ds_results.setCellData(ds_results.getRowPosition(), "vehclNo", ds_results1.getCellData(0, "vehclNo"));
    ds_results.setCellData(ds_results.getRowPosition(), "eqCd", ds_results1.getCellData(0, "eqCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "eqKndCd", ds_results1.getCellData(0, "eqKndCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "eqKndNm", ds_results1.getCellData(0, "eqKndNm"));
    ds_results.setCellData(ds_results.getRowPosition(), "eqNrmCd", ds_results1.getCellData(0, "eqNrmCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "eqNrmNm", ds_results1.getCellData(0, "eqNrmNm"));
    ds_results.setCellData(ds_results.getRowPosition(), "clntNo", ds_results1.getCellData(0, "clntNo"));
    ds_results.setCellData(ds_results.getRowPosition(), "clntNm", ds_results1.getCellData(0, "clntNm"));
    ds_results.setCellData(ds_results.getRowPosition(), "vehclShortCd", ds_results1.getCellData(0, "vehclShortCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "drvEmpNo", ds_results1.getCellData(0, "drvEmpNo"));
    ds_results.setCellData(ds_results.getRowPosition(), "drvNm", ds_results1.getCellData(0, "drvNm"));
    ds_results.setCellData(ds_results.getRowPosition(), "mpNo", ds_results1.getCellData(0, "mpNo"));
    ds_results.setCellData(ds_results.getRowPosition(), "trsNo", ds_results1.getCellData(0, "trsNo"));
    ds_results.setCellData(ds_results.getRowPosition(), "chassisEqCd", ds_results1.getCellData(0, "chassisEqCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "chassisNo", ds_results1.getCellData(0, "chassisNo"));
    ds_results.setCellData(ds_results.getRowPosition(), "chassisKndCd", ds_results1.getCellData(0, "chassisKndCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "chassisKndNm", ds_results1.getCellData(0, "chassisKndNm"));
    ds_results.setCellData(ds_results.getRowPosition(), "assgnLobranCd", ds_results1.getCellData(0, "assgnLobranCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "posnClsCd", ds_results1.getCellData(0, "posnClsCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "wrkIndictYn", ds_results1.getCellData(0, "wrkIndictYn"));
    ds_results.setCellData(ds_results.getRowPosition(), "vehclIdCardNo", ds_results1.getCellData(0, "vehclIdCardNo"));
    ds_results.setCellData(ds_results.getRowPosition(), "chassisShortCd", ds_results1.getCellData(0, "chassisShortCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "mbssysVehclYn", ds_results1.getCellData(0, "mbssysVehclYn"));
    ds_results.setCellData(ds_results.getRowPosition(), "arvDt", ds_results1.getCellData(0, "arvDt"));
  }
};
scwin.gr_results1_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId != "wrkIndictYn") {
    return;
  }
  var rowIdx = ds_results.getRowPosition(); // 현재 선택된 행 인덱스 가져오기
  if (ds_results1.getRowCount() == 0 || ds_results1.getRowStatus(rowIndex) == "D") {
    // 행이 삭제된 경우
    ds_results.setCellData(rowIdx, "eqCd", 0);
    ds_results.setCellData(rowIdx, "vehclNo", "");
    ds_results.setCellData(rowIdx, "eqKndCd", "");
    ds_results.setCellData(rowIdx, "eqKndNm", "");
    ds_results.setCellData(rowIdx, "eqNrmCd", "");
    ds_results.setCellData(rowIdx, "eqNrmNm", "");
    ds_results.setCellData(rowIdx, "clntNo", "");
    ds_results.setCellData(rowIdx, "clntNm", "");
    ds_results.setCellData(rowIdx, "vehclShortCd", "");
    ds_results.setCellData(rowIdx, "drvEmpNo", "");
    ds_results.setCellData(rowIdx, "drvNm", "");
    ds_results.setCellData(rowIdx, "mpNo", "");
    ds_results.setCellData(rowIdx, "trsNo", "");
    ds_results.setCellData(rowIdx, "chassisEqCd", "");
    ds_results.setCellData(rowIdx, "chassisNo", "");
    ds_results.setCellData(rowIdx, "chassisKndCd", "");
    ds_results.setCellData(rowIdx, "chassisKndNm", "");
    ds_results.setCellData(rowIdx, "assgnLobranCd", "");
    ds_results.setCellData(rowIdx, "posnClsCd", "");
    ds_results.setCellData(rowIdx, "vehclIdCardNo", "");
    ds_results.setCellData(rowIdx, "chassisShortCd", "");
    ds_results.setCellData(rowIdx, "mbssysVehclYn", 0);
    ds_results.setCellData(rowIdx, "arvDt", "");
  } else {
    // 현재 ds_results의 포지션(인덱스) 변수 처리
    var rowIdx = ds_results.getRowPosition();
    if (ds_results1.getCellData(0, "eqCd") == "") {
      ds_results.setCellData(rowIdx, "spotYn", "1");
    } else {
      ds_results.setCellData(rowIdx, "spotYn", "0");
    }
    ds_results.setCellData(rowIdx, "vehclNo", ds_results1.getCellData(0, "vehclNo"));
    ds_results.setCellData(rowIdx, "eqCd", ds_results1.getCellData(0, "eqCd"));
    ds_results.setCellData(rowIdx, "eqKndCd", ds_results1.getCellData(0, "eqKndCd"));
    ds_results.setCellData(rowIdx, "eqKndNm", ds_results1.getCellData(0, "eqKndNm"));
    ds_results.setCellData(rowIdx, "eqNrmCd", ds_results1.getCellData(0, "eqNrmCd"));
    ds_results.setCellData(rowIdx, "eqNrmNm", ds_results1.getCellData(0, "eqNrmNm"));
    ds_results.setCellData(rowIdx, "clntNo", ds_results1.getCellData(0, "clntNo"));
    ds_results.setCellData(rowIdx, "clntNm", ds_results1.getCellData(0, "clntNm"));
    ds_results.setCellData(rowIdx, "vehclShortCd", ds_results1.getCellData(0, "vehclShortCd"));
    ds_results.setCellData(rowIdx, "drvEmpNo", ds_results1.getCellData(0, "drvEmpNo"));
    ds_results.setCellData(rowIdx, "drvNm", ds_results1.getCellData(0, "drvNm"));
    ds_results.setCellData(rowIdx, "mpNo", ds_results1.getCellData(0, "mpNo"));
    ds_results.setCellData(rowIdx, "trsNo", ds_results1.getCellData(0, "trsNo"));
    ds_results.setCellData(rowIdx, "chassisEqCd", ds_results1.getCellData(0, "chassisEqCd"));
    ds_results.setCellData(rowIdx, "chassisNo", ds_results1.getCellData(0, "chassisNo"));
    ds_results.setCellData(rowIdx, "chassisKndCd", ds_results1.getCellData(0, "chassisKndCd"));
    ds_results.setCellData(rowIdx, "chassisKndNm", ds_results1.getCellData(0, "chassisKndNm"));
    ds_results.setCellData(rowIdx, "assgnLobranCd", ds_results1.getCellData(0, "assgnLobranCd"));
    ds_results.setCellData(rowIdx, "posnClsCd", ds_results1.getCellData(0, "posnClsCd"));
    ds_results.setCellData(rowIdx, "wrkIndictYn", ds_results1.getCellData(0, "wrkIndictYn"));
    ds_results.setCellData(rowIdx, "vehclIdCardNo", ds_results1.getCellData(0, "vehclIdCardNo"));
    ds_results.setCellData(rowIdx, "chassisShortCd", ds_results1.getCellData(0, "chassisShortCd"));
    ds_results.setCellData(rowIdx, "mbssysVehclYn", ds_results1.getCellData(0, "mbssysVehclYn"));
    ds_results.setCellData(rowIdx, "arvDt", ds_results1.getCellData(0, "arvDt"));
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:' w110',editType:'select',id:'acb_cargoClsCd',search:'start',style:'',submenuSize:'auto','ev:onchange':'scwin.acb_cargoClsCd_onchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'협력업체 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveCarKindClntInfoPopup',selectID:'retrieveCarKindClntInfo',codeId:'ed_clntNo',popupTitle:'',nameId:'ed_clntNm',style:'',btnId:'btn_clntNo',UpperFlagCode:'1',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',id:'udc_clntNo',validExpCode:'협력업체:yes',mandatoryCode:'true',validExpName:'협력업체:yes',validTitle:'협력업체','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w100 req',editType:'select',id:'lc_dtClsCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'출발예정일'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'배차지시일'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_dptIntendDt',refDataMap:'',refEdDt:'dptIntendDt2',refStDt:'dptIntendDt',style:'',edFromId:'ed_dptIntendDt',edToId:'ed_dptIntendDt2'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',style:'width:150px;',maxByteLength:'11',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_cntrNo_onkeyup'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobranCd',search:'start',style:'width: 230px;',submenuSize:'fixed',ref:'',allOption:'',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_lobranCd'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발지 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveWrkPlInfoPopup',style:'',code:'dptWrkPlCd',selectID:'retrieveWrkPlInfo',codeId:'ed_dptWrkPlCd',nameId:'ed_dptWrkPlNm',id:'udc_dptWrkPlCd',btnId:'btn_dptWrkPlCd',maxlengthCode:'6','ev:onclickEvent':'scwin.udc_dptWrkPlCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_dptWrkPlCd_onblurNameEvent','ev:onblurCodeEvent':'scwin.udc_dptWrkPlCd_onblurCodeEvent',name:'dptWrkPlNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착지 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveWrkPlInfoPopup2',style:'',code:'arvWrkPlCd',selectID:'retrieveWrkPlInfo',btnId:'btn_arvWrkPlCd',codeId:'ed_arvWrkPlCd',nameId:'ed_arvWrkPlNm',id:'udc_arvWrkPlCd',maxlengthCode:'6',name:'arvWrkPlNm','ev:onclickEvent':'scwin.udc_arvWrkPlCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_arvWrkPlCd_onblurNameEvent','ev:onblurCodeEvent':'scwin.udc_arvWrkPlCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_blNo',style:'width:150px;',maxByteLength:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박명 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveVsslCdInfoPopup',style:'',code:'vsslCd',codeId:'ed_vsslCd',nameId:'ed_vsslNm',id:'udc_vsslCd',btnId:'btn_vsslCd',maxlengthCode:'4',selectID:'retrieveVsslCdInfo',name:'vsslNm',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_vsslCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_vsslCd_onblurNameEvent','ev:onblurCodeEvent':'scwin.udc_vsslCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w110',id:'ed_portcnt',style:'',maxByteLength:'4',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_portcnt_onkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w110',id:'ed_orderNo',style:'',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_orderNo_onkeyup',maxByteLength:'13'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업지시번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_transWorkIndictNo',style:'width:150px;','ev:onkeyup':'scwin.ed_transWorkIndictNo_onkeyup',allowChar:'a-zA-Z0-9',maxByteLength:'12'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w110',editType:'select',id:'acb_vehclYn',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미배차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'배차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업단계 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w110',editType:'select',id:'acb_wrkStpCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'전체','ev:onchange':'scwin.acb_wrkStpCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'셔틀'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0001'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0002'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0003'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'육송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0047'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업권역 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'acb_districtCd',class:' w110',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'acb_districtCd2',class:' w110',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'현ON/BOB구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cntrWrkKndCd',search:'start',style:'width: 150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'전체','ev:onchange':'scwin.acb_cntrWrkKndCd_onchange'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'운송물량',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_results',gridDownFn:'scwin.f_emclntExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNum:'5',visibleRowNumFix:'true',fixedColumn:'5',autoFitMinWidth:'1700','ev:oncelldblclick':'scwin.gr_results_oncelldblclick','ev:onrightbuttonclick':'scwin.gr_results_onrightbuttonclick',rowStatusWidth:'30',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'배차<br/>여부',width:'60',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'완료<br/>여부',width:'60',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'단계',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'지시번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'오더번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'LINE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'출발지',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'도착지',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'Door명',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'출발예정<br/>일시',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',value:'도착예정<br/>일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'컨테이너',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',value:'S/T',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',value:'F/E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'컨테이너<br/>작업형태',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'ON/BOB',displayMode:'label',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'SPOT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'차량번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',value:'반출EDI',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'반입EDI',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclYn',inputType:'text',width:'60',customFormatter:'scwin.gr_results_CustomFormatter',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrCompleteYn',inputType:'text',width:'60',readOnly:'true',customFormatter:'scwin.gr_results_CustomFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpNm',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transWrkIndictNo',inputType:'text',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',readOnly:'true',textAlign:'left',class:'underline txt-blue',style:';cursor:default;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'doorNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'text',width:'100',readOnly:'true',customFormatter:'scwin.gr_results_CustomFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndDt',displayMode:'label',readOnly:'true',customFormatter:'scwin.gr_results_CustomFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sizeAndType',displayMode:'label',textAlign:'left',readOnly:'true',customFormatter:'scwin.gr_results_CustomFormatter'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fullEmptyClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',displayFormat:'#,###.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrWrkShapeNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'cntrWrkKndCd',displayMode:'value delim label',textAlign:'left',readOnly:'true',chooseOption:'',allOption:'',ref:'',selectedData:'false',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_grdCode196'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'spotYn',displayMode:'label',readOnly:'true',customFormatter:'scwin.gr_results_CustomFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryoutEdiFlag',displayMode:'label',textAlign:'left',class:'txt-red',readOnly:'true',customFormatter:'scwin.gr_results_CustomFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryinEdiFlag',displayMode:'label',textAlign:'left',class:'txt-red',readOnly:'true',customFormatter:'scwin.gr_results_CustomFormatter'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows1',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'협력업체',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_results2',style:'',autoFit:'allColumn',id:'gr_results2',visibleRowNum:'3',class:'wq_gvw',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column1',value:'협력업체',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'차량종류',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'규격',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column11',value:'댓수',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column30',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'이름',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'eqKndNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'eqNrmNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqVehclCnt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows2',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox mt32 h-full'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb h-full'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'특이사항',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:textarea',A:{style:'height: 150px;',id:'txt_reason',class:'',ref:'data:ds_results.rmk',readOnly:'true'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'운송차량',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print2',style:'',type:'button','ev:onclick':'scwin.btn_print2_onclick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배차지시서'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print1',style:'',type:'button','ev:onclick':'scwin.btn_print1_onclick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더SHEET'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_carryingInOutEDI',style:'',type:'button','ev:onclick':'scwin.btn_carryingInOutEDI_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'COPINO전송'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_crryout',style:'',type:'button','ev:onclick':'scwin.btn_crryout_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'반출등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_vehcl',style:'',type:'button','ev:onclick':'scwin.btn_vehcl_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차량조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_spot',style:'',type:'button','ev:onclick':'scwin.btn_spot_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'SPOT차량'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results1',id:'gr_results1',style:'',visibleRowNum:'3',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_results1_ontextimageclick','ev:onviewchange':'scwin.gr_results1_onviewchange','ev:oncellclick':'scwin.gr_results1_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'SPOT',width:'70',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'단축번호',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'차량종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'규격',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'협력업체',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'기사',width:'70',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'TRS No',width:'80',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'Tel',width:'80',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'샤시단축',width:'100',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'샤시번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'샤시종류',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'SMS',displayMode:'label',class:'txt-blue',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'spotYn',inputType:'checkbox',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclShortCd',inputType:'textImage',width:'100',style:';cursor:pointer;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmNm',inputType:'text',width:'80',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trsNo',inputType:'text',width:'80',allowChar:'0-9',maxByteLength:'8'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mpNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassisShortCd',inputType:'textImage',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'chassisNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'chassisKndCd',displayMode:'label',textAlign:'left',allOption:'',chooseOption:'',ref:'',selectedData:'true',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo_sasiKind'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'wrkIndictYn',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows3',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',EngYn:'N',btnRowDelYn:'N',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',btnRowAddObj:'btn_addRow',btnCancelObj:'btn_cancelRow',cancelFunction:'scwin.f_CancelRow',rowAddFunction:'scwin.f_AddRow',rowAddUserAuth:'C'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save2',style:'',type:'button','ev:onclick':'scwin.btn_save2_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장(A/S)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save3',style:'',type:'button','ev:onclick':'scwin.btn_save3_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장(M/S)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_delete_onclick',userAuth:'D',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]}]}]}]})