/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_09_03b.xml 65178 6b504f9cc55e953de337c0293e6ed799a1f673c64d474a25fd4e54a269fa4768 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_delYn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'0'}]},{T:1,N:'col2',E:[{T:4,cdata:'미삭제'}]},{T:1,N:'code',E:[{T:4,cdata:'0'}]},{T:1,N:'name',E:[{T:4,cdata:'미삭제'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'1'}]},{T:1,N:'col2',E:[{T:4,cdata:'삭제'}]},{T:1,N:'code',E:[{T:4,cdata:'1'}]},{T:1,N:'name',E:[{T:4,cdata:'삭제'}]}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cardNum',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'occpgrdNm',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNm',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'approveDateFrom',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'approveDateTo',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'name10',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'chkComCostClsCd',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name13',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_card',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNum',name:'카드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dealDate',name:'이용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveTime',name:'이용시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveAmt',name:'금액-이용금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tax',name:'금액-부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'serviceCharge',name:'금액-봉사료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'addSum',name:'금액-합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정과목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnRegYn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorName',name:'상호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmcName',name:'업종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcondNm',name:'업태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqrNm',name:'전표상신자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveNum',name:'승인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorTaxNum',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorPerson',name:'대표자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorZipCode',name:'대표자우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorAddress1',name:'대표자주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorAddress2',name:'대표자주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'address',name:'거래처주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDate',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCollectionNum',name:'매입추신번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'전결자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvGbn',name:'전결위임구분',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'},E:[{T:1,N:'w2:row',E:[{T:1,N:'gubun',E:[{T:4,cdata:'3'}]},{T:1,N:'cardNum',E:[{T:4,cdata:'4670090020888770'}]},{T:1,N:'acctDeptNm',E:[{T:4,cdata:'재경'}]},{T:1,N:'empNo',E:[{T:4,cdata:'350012'}]},{T:1,N:'empNm',E:[{T:4,cdata:'인스웨이브'}]},{T:1,N:'dealDate',E:[{T:4,cdata:'20190106'}]},{T:1,N:'approveTime',E:[{T:4,cdata:'161454'}]},{T:1,N:'approveAmt',E:[{T:4,cdata:'46000'}]},{T:1,N:'tax',E:[{T:4,cdata:'4600'}]},{T:1,N:'serviceCharge',E:[{T:4,cdata:'0'}]},{T:1,N:'addSum',E:[{T:4,cdata:'50600'}]},{T:1,N:'acctNm',E:[{T:4,cdata:'원)소모품비-기타'}]},{T:1,N:'crnRegYn',E:[{T:4,cdata:'등록'}]},{T:1,N:'vendorName',E:[{T:4,cdata:'김해축산업협동조합가야지점'}]},{T:1,N:'mmcName',E:[{T:4,cdata:'농협운영연쇄점'}]},{T:1,N:'bizcondNm',E:[{T:4,cdata:'농협운영연쇄점'}]},{T:1,N:'slipNo',E:[{T:4,cdata:'1012565960'}]},{T:1,N:'apprvReqrNm',E:[{T:4,cdata:'김장열'}]},{T:1,N:'approveNum',E:[{T:4,cdata:'29120118'}]},{T:1,N:'vendorTaxNum',E:[{T:4,cdata:'6158206383'}]},{T:1,N:'vendorPerson',E:[{T:4,cdata:'김종석'}]},{T:1,N:'address',E:[{T:4,cdata:'경남 김해시 삼계동1480-2 1480-2'}]},{T:1,N:'apprvEmpNm',E:[{T:4,cdata:'이동호'}]},{T:1,N:'apprvGbn',E:[{T:4,cdata:'지사팀장/지점장/본사담당팀장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'gubun',E:[{T:4,cdata:'3'}]},{T:1,N:'cardNum',E:[{T:4,cdata:'4670090020888770'}]},{T:1,N:'acctDeptNm',E:[{T:4,cdata:'재경'}]},{T:1,N:'empNo',E:[{T:4,cdata:'350012'}]},{T:1,N:'empNm',E:[{T:4,cdata:'인스웨이브'}]},{T:1,N:'dealDate',E:[{T:4,cdata:'20190111'}]},{T:1,N:'approveTime',E:[{T:4,cdata:'162334'}]},{T:1,N:'approveAmt',E:[{T:4,cdata:'37273'}]},{T:1,N:'tax',E:[{T:4,cdata:'3727'}]},{T:1,N:'serviceCharge',E:[{T:4,cdata:'0'}]},{T:1,N:'addSum',E:[{T:4,cdata:'41000'}]},{T:1,N:'acctNm',E:[{T:4,cdata:'원)차량유지비-유류비'}]},{T:1,N:'crnRegYn',E:[{T:4,cdata:'등록'}]},{T:1,N:'vendorName',E:[{T:4,cdata:'오봉주유소'}]},{T:1,N:'mmcName',E:[{T:4,cdata:'주유소'}]},{T:1,N:'bizcondNm',E:[{T:4,cdata:'석유'}]},{T:1,N:'slipNo',E:[{T:4,cdata:'1012565949'}]},{T:1,N:'apprvReqrNm',E:[{T:4,cdata:'김장열'}]},{T:1,N:'approveNum',E:[{T:4,cdata:'27841119'}]},{T:1,N:'vendorTaxNum',E:[{T:4,cdata:'6061287943'}]},{T:1,N:'vendorPerson',E:[{T:4,cdata:'이성우'}]},{T:1,N:'address',E:[{T:4,cdata:'부산 강서구 죽림동752-2 752-2'}]},{T:1,N:'apprvEmpNm',E:[{T:4,cdata:'이동호'}]},{T:1,N:'apprvGbn',E:[{T:4,cdata:'지사팀장/지점장/본사담당팀장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'gubun',E:[{T:4,cdata:'3'}]},{T:1,N:'cardNum',E:[{T:4,cdata:'4670090020888770'}]},{T:1,N:'acctDeptNm',E:[{T:4,cdata:'재경'}]},{T:1,N:'empNo',E:[{T:4,cdata:'350012'}]},{T:1,N:'empNm',E:[{T:4,cdata:'인스웨이브'}]},{T:1,N:'dealDate',E:[{T:4,cdata:'20190114'}]},{T:1,N:'approveTime',E:[{T:4,cdata:'164419'}]},{T:1,N:'approveAmt',E:[{T:4,cdata:'2691'}]},{T:1,N:'tax',E:[{T:4,cdata:'269'}]},{T:1,N:'serviceCharge',E:[{T:4,cdata:'0'}]},{T:1,N:'addSum',E:[{T:4,cdata:'2960'}]},{T:1,N:'acctNm',E:[{T:4,cdata:'원)통신비-기타'}]},{T:1,N:'crnRegYn',E:[{T:4,cdata:'등록'}]},{T:1,N:'vendorName',E:[{T:4,cdata:'우정사업본부(우체국)'}]},{T:1,N:'mmcName',E:[{T:4,cdata:'우체국서비스'}]},{T:1,N:'bizcondNm',E:[{T:4,cdata:'서비스'}]},{T:1,N:'slipNo',E:[{T:4,cdata:'1012565952'}]},{T:1,N:'apprvReqrNm',E:[{T:4,cdata:'김장열'}]},{T:1,N:'approveNum',E:[{T:4,cdata:'50236120'}]},{T:1,N:'vendorTaxNum',E:[{T:4,cdata:'1018302925'}]},{T:1,N:'vendorPerson',E:[{T:4,cdata:'강성주'}]},{T:1,N:'address',E:[{T:4,cdata:'세종도움5로 19 도움5로 19'}]},{T:1,N:'apprvEmpNm',E:[{T:4,cdata:'이동호'}]},{T:1,N:'apprvGbn',E:[{T:4,cdata:'지사팀장/지점장/본사담당팀장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'gubun',E:[{T:4,cdata:'3'}]},{T:1,N:'cardNum',E:[{T:4,cdata:'4670090020888770'}]},{T:1,N:'acctDeptNm',E:[{T:4,cdata:'재경'}]},{T:1,N:'empNo',E:[{T:4,cdata:'350012'}]},{T:1,N:'empNm',E:[{T:4,cdata:'인스웨이브'}]},{T:1,N:'dealDate',E:[{T:4,cdata:'20190116'}]},{T:1,N:'approveTime',E:[{T:4,cdata:'181354'}]},{T:1,N:'approveAmt',E:[{T:4,cdata:'42028'}]},{T:1,N:'tax',E:[{T:4,cdata:'4202'}]},{T:1,N:'serviceCharge',E:[{T:4,cdata:'0'}]},{T:1,N:'addSum',E:[{T:4,cdata:'46230'}]},{T:1,N:'acctNm',E:[{T:4,cdata:'원)소모품비-기타'}]},{T:1,N:'crnRegYn',E:[{T:4,cdata:'등록'}]},{T:1,N:'vendorName',E:[{T:4,cdata:'김해축협서부지점'}]},{T:1,N:'mmcName',E:[{T:4,cdata:'농협운영연쇄점'}]},{T:1,N:'bizcondNm',E:[{T:4,cdata:'농협운영연쇄점'}]},{T:1,N:'slipNo',E:[{T:4,cdata:'1012565960'}]},{T:1,N:'apprvReqrNm',E:[{T:4,cdata:'김장열'}]},{T:1,N:'approveNum',E:[{T:4,cdata:'34051123'}]},{T:1,N:'vendorTaxNum',E:[{T:4,cdata:'6228201858'}]},{T:1,N:'vendorPerson',E:[{T:4,cdata:'김종석'}]},{T:1,N:'address',E:[{T:4,cdata:'경남 김해시 외동1211-1 외2필지 1211-1 외2필지'}]},{T:1,N:'apprvEmpNm',E:[{T:4,cdata:'이동호'}]},{T:1,N:'apprvGbn',E:[{T:4,cdata:'지사팀장/지점장/본사담당팀장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'gubun',E:[{T:4,cdata:'3'}]},{T:1,N:'cardNum',E:[{T:4,cdata:'4670090020888770'}]},{T:1,N:'acctDeptNm',E:[{T:4,cdata:'재경'}]},{T:1,N:'empNo',E:[{T:4,cdata:'350012'}]},{T:1,N:'empNm',E:[{T:4,cdata:'인스웨이브'}]},{T:1,N:'dealDate',E:[{T:4,cdata:'20190121'}]},{T:1,N:'approveTime',E:[{T:4,cdata:'172815'}]},{T:1,N:'approveAmt',E:[{T:4,cdata:'22273'}]},{T:1,N:'tax',E:[{T:4,cdata:'2227'}]},{T:1,N:'serviceCharge',E:[{T:4,cdata:'0'}]},{T:1,N:'addSum',E:[{T:4,cdata:'24500'}]},{T:1,N:'acctNm',E:[{T:4,cdata:'원)소모품비-기타'}]},{T:1,N:'crnRegYn',E:[{T:4,cdata:'등록'}]},{T:1,N:'vendorName',E:[{T:4,cdata:'매직오피스몰(부산화일)'}]},{T:1,N:'mmcName',E:[{T:4,cdata:'기타신변잡화'}]},{T:1,N:'bizcondNm',E:[{T:4,cdata:'문구'}]},{T:1,N:'slipNo',E:[{T:4,cdata:'1012565960'}]},{T:1,N:'apprvReqrNm',E:[{T:4,cdata:'김장열'}]},{T:1,N:'approveNum',E:[{T:4,cdata:'63297125'}]},{T:1,N:'vendorTaxNum',E:[{T:4,cdata:'6060733934'}]},{T:1,N:'vendorPerson',E:[{T:4,cdata:'김수용'}]},{T:1,N:'address',E:[{T:4,cdata:'부산 강서구 호계로 8매직오피스몰 매직오피스몰'}]},{T:1,N:'apprvEmpNm',E:[{T:4,cdata:'이동호'}]},{T:1,N:'apprvGbn',E:[{T:4,cdata:'지사팀장/지점장/본사담당팀장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'gubun',E:[{T:4,cdata:'3'}]},{T:1,N:'cardNum',E:[{T:4,cdata:'4670090020888770'}]},{T:1,N:'acctDeptNm',E:[{T:4,cdata:'재경'}]},{T:1,N:'empNo',E:[{T:4,cdata:'350012'}]},{T:1,N:'empNm',E:[{T:4,cdata:'인스웨이브'}]},{T:1,N:'dealDate',E:[{T:4,cdata:'20190121'}]},{T:1,N:'approveTime',E:[{T:4,cdata:'165117'}]},{T:1,N:'approveAmt',E:[{T:4,cdata:'27273'}]},{T:1,N:'tax',E:[{T:4,cdata:'2727'}]},{T:1,N:'serviceCharge',E:[{T:4,cdata:'0'}]},{T:1,N:'addSum',E:[{T:4,cdata:'30000'}]},{T:1,N:'acctNm',E:[{T:4,cdata:'원)차량유지비-유류비'}]},{T:1,N:'crnRegYn',E:[{T:4,cdata:'등록'}]},{T:1,N:'vendorName',E:[{T:4,cdata:'오봉주유소'}]},{T:1,N:'mmcName',E:[{T:4,cdata:'주유소'}]},{T:1,N:'bizcondNm',E:[{T:4,cdata:'석유'}]},{T:1,N:'slipNo',E:[{T:4,cdata:'1012565949'}]},{T:1,N:'apprvReqrNm',E:[{T:4,cdata:'김장열'}]},{T:1,N:'approveNum',E:[{T:4,cdata:'62835124'}]},{T:1,N:'vendorTaxNum',E:[{T:4,cdata:'6061287943'}]},{T:1,N:'vendorPerson',E:[{T:4,cdata:'이성우'}]},{T:1,N:'address',E:[{T:4,cdata:'부산 강서구 죽림동752-2 752-2'}]},{T:1,N:'apprvEmpNm',E:[{T:4,cdata:'이동호'}]},{T:1,N:'apprvGbn',E:[{T:4,cdata:'지사팀장/지점장/본사담당팀장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'gubun',E:[{T:4,cdata:'3'}]},{T:1,N:'cardNum',E:[{T:4,cdata:'4670090020888770'}]},{T:1,N:'acctDeptNm',E:[{T:4,cdata:'재경'}]},{T:1,N:'empNo',E:[{T:4,cdata:'350012'}]},{T:1,N:'empNm',E:[{T:4,cdata:'인스웨이브'}]},{T:1,N:'dealDate',E:[{T:4,cdata:'20190124'}]},{T:1,N:'approveTime',E:[{T:4,cdata:'181328'}]},{T:1,N:'approveAmt',E:[{T:4,cdata:'26364'}]},{T:1,N:'tax',E:[{T:4,cdata:'2636'}]},{T:1,N:'serviceCharge',E:[{T:4,cdata:'0'}]},{T:1,N:'addSum',E:[{T:4,cdata:'29000'}]},{T:1,N:'acctNm',E:[{T:4,cdata:'원)차량유지비-유류비'}]},{T:1,N:'crnRegYn',E:[{T:4,cdata:'등록'}]},{T:1,N:'vendorName',E:[{T:4,cdata:'오봉주유소'}]},{T:1,N:'mmcName',E:[{T:4,cdata:'주유소'}]},{T:1,N:'bizcondNm',E:[{T:4,cdata:'석유'}]},{T:1,N:'slipNo',E:[{T:4,cdata:'1012565949'}]},{T:1,N:'apprvReqrNm',E:[{T:4,cdata:'김장열'}]},{T:1,N:'approveNum',E:[{T:4,cdata:'43374126'}]},{T:1,N:'vendorTaxNum',E:[{T:4,cdata:'6061287943'}]},{T:1,N:'vendorPerson',E:[{T:4,cdata:'이성우'}]},{T:1,N:'address',E:[{T:4,cdata:'부산 강서구 죽림동752-2 752-2'}]},{T:1,N:'apprvEmpNm',E:[{T:4,cdata:'이동호'}]},{T:1,N:'apprvGbn',E:[{T:4,cdata:'지사팀장/지점장/본사담당팀장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'gubun',E:[{T:4,cdata:'3'}]},{T:1,N:'cardNum',E:[{T:4,cdata:'4670090020888770'}]},{T:1,N:'acctDeptNm',E:[{T:4,cdata:'재경'}]},{T:1,N:'empNo',E:[{T:4,cdata:'350012'}]},{T:1,N:'empNm',E:[{T:4,cdata:'인스웨이브'}]},{T:1,N:'dealDate',E:[{T:4,cdata:'20190127'}]},{T:1,N:'approveTime',E:[{T:4,cdata:'174751'}]},{T:1,N:'approveAmt',E:[{T:4,cdata:'35837'}]},{T:1,N:'tax',E:[{T:4,cdata:'3583'}]},{T:1,N:'serviceCharge',E:[{T:4,cdata:'0'}]},{T:1,N:'addSum',E:[{T:4,cdata:'39420'}]},{T:1,N:'acctNm',E:[{T:4,cdata:'원)소모품비-기타'}]},{T:1,N:'crnRegYn',E:[{T:4,cdata:'등록'}]},{T:1,N:'vendorName',E:[{T:4,cdata:'빅세일마트'}]},{T:1,N:'mmcName',E:[{T:4,cdata:'슈퍼마켓'}]},{T:1,N:'bizcondNm',E:[{T:4,cdata:'슈퍼마켓'}]},{T:1,N:'slipNo',E:[{T:4,cdata:'1012565960'}]},{T:1,N:'apprvReqrNm',E:[{T:4,cdata:'김장열'}]},{T:1,N:'approveNum',E:[{T:4,cdata:'51603127'}]},{T:1,N:'vendorTaxNum',E:[{T:4,cdata:'5453300383'}]},{T:1,N:'vendorPerson',E:[{T:4,cdata:'손은도'}]},{T:1,N:'address',E:[{T:4,cdata:'경상남도 김해시 경원로11번길 51층 1층'}]},{T:1,N:'apprvEmpNm',E:[{T:4,cdata:'이동호'}]},{T:1,N:'apprvGbn',E:[{T:4,cdata:'지사팀장/지점장/본사담당팀장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'gubun',E:[{T:4,cdata:'3'}]},{T:1,N:'cardNum',E:[{T:4,cdata:'4670090020888770'}]},{T:1,N:'acctDeptNm',E:[{T:4,cdata:'재경'}]},{T:1,N:'empNo',E:[{T:4,cdata:'350012'}]},{T:1,N:'empNm',E:[{T:4,cdata:'인스웨이브'}]},{T:1,N:'dealDate',E:[{T:4,cdata:'20190128'}]},{T:1,N:'approveTime',E:[{T:4,cdata:'123933'}]},{T:1,N:'approveAmt',E:[{T:4,cdata:'63637'}]},{T:1,N:'tax',E:[{T:4,cdata:'6363'}]},{T:1,N:'serviceCharge',E:[{T:4,cdata:'0'}]},{T:1,N:'addSum',E:[{T:4,cdata:'70000'}]},{T:1,N:'acctNm',E:[{T:4,cdata:'원)접대비-법인카드,세금계산서,계산서'}]},{T:1,N:'crnRegYn',E:[{T:4,cdata:'등록'}]},{T:1,N:'vendorName',E:[{T:4,cdata:'죽림가든'}]},{T:1,N:'mmcName',E:[{T:4,cdata:'한식(한정식)'}]},{T:1,N:'bizcondNm',E:[{T:4,cdata:'일반한식'}]},{T:1,N:'slipNo',E:[{T:4,cdata:'1012569911'}]},{T:1,N:'apprvReqrNm',E:[{T:4,cdata:'김장열'}]},{T:1,N:'approveNum',E:[{T:4,cdata:'25903128'}]},{T:1,N:'vendorTaxNum',E:[{T:4,cdata:'6220311540'}]},{T:1,N:'vendorPerson',E:[{T:4,cdata:'이현숙'}]},{T:1,N:'address',E:[{T:4,cdata:'부산 강서구 죽림동781-2 781-2'}]},{T:1,N:'apprvEmpNm',E:[{T:4,cdata:'이동호'}]},{T:1,N:'apprvGbn',E:[{T:4,cdata:'지사팀장/지점장/본사담당팀장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'gubun',E:[{T:4,cdata:'3'}]},{T:1,N:'cardNum',E:[{T:4,cdata:'4670090020888770'}]},{T:1,N:'acctDeptNm',E:[{T:4,cdata:'재경'}]},{T:1,N:'empNo',E:[{T:4,cdata:'350012'}]},{T:1,N:'empNm',E:[{T:4,cdata:'인스웨이브'}]},{T:1,N:'dealDate',E:[{T:4,cdata:'20190130'}]},{T:1,N:'approveTime',E:[{T:4,cdata:'130753'}]},{T:1,N:'approveAmt',E:[{T:4,cdata:'6364'}]},{T:1,N:'tax',E:[{T:4,cdata:'636'}]},{T:1,N:'serviceCharge',E:[{T:4,cdata:'0'}]},{T:1,N:'addSum',E:[{T:4,cdata:'7000'}]},{T:1,N:'acctNm',E:[{T:4,cdata:'원)소모품비-기타'}]},{T:1,N:'crnRegYn',E:[{T:4,cdata:'등록'}]},{T:1,N:'vendorName',E:[{T:4,cdata:'대동슈퍼'}]},{T:1,N:'mmcName',E:[{T:4,cdata:'슈퍼마켓'}]},{T:1,N:'bizcondNm',E:[{T:4,cdata:'슈퍼마켓'}]},{T:1,N:'slipNo',E:[{T:4,cdata:'1012565960'}]},{T:1,N:'apprvReqrNm',E:[{T:4,cdata:'김장열'}]},{T:1,N:'approveNum',E:[{T:4,cdata:'30036129'}]},{T:1,N:'vendorTaxNum',E:[{T:4,cdata:'6220273156'}]},{T:1,N:'vendorPerson',E:[{T:4,cdata:'허태금'}]},{T:1,N:'address',E:[{T:4,cdata:'경남 김해시 외동1251 대동주상가 122,123호 1251 대동주상가 122,123호'}]},{T:1,N:'apprvEmpNm',E:[{T:4,cdata:'이동호'}]},{T:1,N:'apprvGbn',E:[{T:4,cdata:'지사팀장/지점장/본사담당팀장'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_admin',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCdNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name18',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_chkComCostClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'col1_1'}]},{T:1,N:'col2',E:[{T:4,cdata:'col2_1'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'col1_2'}]},{T:1,N:'col2',E:[{T:4,cdata:'col2_2'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bizdiv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCdNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name18',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_compareBranchAggrDeptCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveCorporationCardContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_card","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_card","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_admin',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=FI007&cd=&cdNm=',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_admin","key":"OUT_DS1"}',target:'data:json,{"id":"ds_admin","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_admin_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_bizdiv',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=FI112&cd=&cdNm=',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_bizdiv","key":"OUT_DS1"}',target:'data:json,{"id":"ds_bizdiv","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_bizdiv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_chkComCostClsCd',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_chkComCostClsCd","key":"OUT_DS1"}',target:'data:json,{"id":"ds_chkComCostClsCd","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_chkComCostClsCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_compareBranchAggrDeptCd',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_compareBranchAggrDeptCd","key":"OUT_DS1"}',target:'data:json,{"id":"ds_compareBranchAggrDeptCd","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_compareBranchAggrDeptCd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 개인형법인카드사용내역조회
 * 메뉴경로 : 회계/재무회계/일반회계/전표관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/gnrlaccount/slipmgnt/fi_201_09_03b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-10-17
 * 수정이력  :
 *    - 2025-10-17      정승혜    최초작성
 *    - 2025-11-25      정승혜    준수사항 적용, udc
 *    - 2025-12-30      정승혜    기타수정 / 자회사로직수정
 *    - 2026-01-19      정승혜    submitdone 조건수정
 * 메모 : 
 * cfShowSlipInfo -> fi_201_04_02p
 * 우정사업본부(우체국) 데이터 삭제하여 미등록 클릭테스트할수 있게 해놓음 fi_100_02_01b 팝업
 * 검색조건 : 
 * 이용기간-20190101~20191231 / 카드번호 4670090020886810 / 사번x / 부서x
 * id : 224002 passwd :1111
 */
scwin.slipDt = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin"); // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님  

scwin.branchAggrDeptCd = "";
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사  
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 회사코드
scwin.isSubCompany = false;
scwin.vAcctDeptCd = scwin.memJson.acctDeptCd; //귀속부서
scwin.vEmpNo = scwin.memJson.empNo; // 사번

//hidden
scwin.txtCoClsCd = "";
scwin.txt_empNo = "";
scwin.txt_acctDeptCd = "";
scwin.txt_chkComCostClsCd = "";

//지역변수 전역변수로 옮김
scwin.admin = "";
scwin.empNo = scwin.memJson.empNo;
scwin.bizdiv = "";
scwin.count1 = 0;
scwin.count2 = 0;
scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  scwin.f_setCompanyInfo();
  scwin.f_OnLoad_done();
};

// f_OnLoad에서 실행되지만 onUdcCompleted 에서 호출하여 처리할 작업 모음
scwin.f_OnLoad_done = function () {
  lc_delYn.setSelectedIndex(0);

  //디폴트 날짜 변경(해당월1일 ~ 해당월말일까지)	
  ed_approveDateFrom.setValue(scwin.slipDt.substring(0, 6) + "01");
  ed_approveDateTo.setValue($c.date.getDateAddMonthDirection($p, scwin.slipDt.substring(0, 6), 1, "L"));

  //ds_admin
  $c.sbm.execute($p, sbm_admin);
};

//-------------------------------------------------------------------------
// 지사관리팀여부 확인 및 지사/집계부서 조회
//-------------------------------------------------------------------------
scwin.f_chkComCostClsCd = function () {
  let condition = "";
  condition += "&param1=" + scwin.memJson.empNo;
  sbm_chkComCostClsCd.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=chkComCostClsCd" + condition;
  $c.sbm.execute($p, sbm_chkComCostClsCd);
};

//-------------------------------------------------------------------------
// 팝업 선택 부서 지사/집계부서 일치 여부 확인
//-------------------------------------------------------------------------
scwin.f_compareBranchAggrDeptCd = function () {
  // 호출되는곳 없음
  let condition = "";
  condition += "&param1=" + ed_acctDeptCd.getValue();
  sbm_compareBranchAggrDeptCd.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=compareBranchAggrDeptCd" + condition;
  $c.sbm.execute($p, sbm_compareBranchAggrDeptCd);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ed_approveDateFrom, ed_approveDateTo, lc_delYn]);
  if (!ret) {
    return;
  }

  /* udc
  if(ed_approveDateFrom.getValue() == "" || ed_approveDateTo.getValue() == ""){
      $c.gus.cfAlertMsg("이용기간은 필수 입력 항목입니다.");
      ed_approveDateFrom.focus();
      return;
  } 
  if(ed_approveDateFrom.getValue() == "" || ed_approveDateTo.getValue() == ""){
      $c.gus.cfAlertMsg("이용기간은 필수 입력 항목입니다.");
      ed_approveDateFrom.focus();
      return;
  }
  */
  if (!$c.gus.cfIsAfterDate($p, ed_approveDateFrom.getValue().trim(), ed_approveDateTo.getValue().trim())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return false;
  }

  //부서
  if (scwin.vAcctDeptCd != "00009") {
    if (scwin.vEmpNo == "198015" || scwin.vEmpNo == "198078" || scwin.vEmpNo == "98050" || scwin.vEmpNo == "171577") {
      //BIDC 이재설 과장, 최현주 대리 추가 (박경진대리 퇴사로 최현주 대리 변경), 안재관 과장추가(안중욱 퇴사)
    } else {
      if (ed_acctDeptCd.getValue() == "") {
        await $c.gus.cfAlertMsg($p, "부서코드는 필수 입력 항목입니다.");
        ed_acctDeptCd.focus();
        return;
      }
    }
  }

  //특정 사용자 타부서 조회 권한 추가 
  if (scwin.vEmpNo == "200080" || scwin.vEmpNo == "200085") {
    if (ed_acctDeptCd.getValue() == "01076" || ed_acctDeptCd.getValue() == "01077" || ed_acctDeptCd.getValue() == "01078" || ed_acctDeptCd.getValue() == "01088" || ed_acctDeptCd.getValue() == "01089" || ed_acctDeptCd.getValue() == "01090" || ed_acctDeptCd.getValue() == "01092" || ed_acctDeptCd.getValue() == "01093" || ed_acctDeptCd.getValue() == "01094" || ed_acctDeptCd.getValue() == "01095" || ed_acctDeptCd.getValue() == "01096" || ed_acctDeptCd.getValue() == "01097" || ed_acctDeptCd.getValue() == "01098" || ed_acctDeptCd.getValue() == "01099" || ed_acctDeptCd.getValue() == "01101" || ed_acctDeptCd.getValue() == "01102" || ed_acctDeptCd.getValue() == "01103" || ed_acctDeptCd.getValue() == "01105" || ed_acctDeptCd.getValue() == "01106" || ed_acctDeptCd.getValue() == "01107" || ed_acctDeptCd.getValue() == "01109" || ed_acctDeptCd.getValue() == "01110" || ed_acctDeptCd.getValue() == "01111" || ed_acctDeptCd.getValue() == "01113" || ed_acctDeptCd.getValue() == "01114" || ed_acctDeptCd.getValue() == "01115" || ed_acctDeptCd.getValue() == "01117" || ed_acctDeptCd.getValue() == "01118" || ed_acctDeptCd.getValue() == "01119" || ed_acctDeptCd.getValue() == "01121" || ed_acctDeptCd.getValue() == "01122" || ed_acctDeptCd.getValue() == "01123" || ed_acctDeptCd.getValue() == "01125" || ed_acctDeptCd.getValue() == "01126" || ed_acctDeptCd.getValue() == "01127" || ed_acctDeptCd.getValue() == "01142" || ed_acctDeptCd.getValue() == "01143" || ed_acctDeptCd.getValue() == "01144" || ed_acctDeptCd.getValue() == "01149" || ed_acctDeptCd.getValue() == "01150" || ed_acctDeptCd.getValue() == "01151" || ed_acctDeptCd.getValue() == "01168" || ed_acctDeptCd.getValue() == "01169" || ed_acctDeptCd.getValue() == "01170" || ed_acctDeptCd.getValue() == "01171" || ed_acctDeptCd.getValue() == "01172" || ed_acctDeptCd.getValue() == "01173" || ed_acctDeptCd.getValue() == "01174" || ed_acctDeptCd.getValue() == "01175" || ed_acctDeptCd.getValue() == "01176" || ed_acctDeptCd.getValue() == "01244" || ed_acctDeptCd.getValue() == "01245" || ed_acctDeptCd.getValue() == "01246" || ed_acctDeptCd.getValue() == "01381" || ed_acctDeptCd.getValue() == "01330" || ed_acctDeptCd.getValue() == "01331" || ed_acctDeptCd.getValue() == "01370" || ed_acctDeptCd.getValue() == "01371" || ed_acctDeptCd.getValue() == "01329" || ed_acctDeptCd.getValue() == "01372" || ed_acctDeptCd.getValue() == "01369" || ed_acctDeptCd.getValue() == "01067" || ed_acctDeptCd.getValue() == "01066") {} else {
      await $c.gus.cfAlertMsg($p, "해당부서의 조회 권한이 없습니다.");
      ed_acctDeptCd.setValue("");
      ed_acctDeptNm.setValue("");
      ed_acctDeptCd.focus();
      return;
    }
  }

  //넥스트로 중부지점 북부지점 겸직 인원 조회가능 부서 추가(최재훈 차장 요청)
  if (scwin.vEmpNo == "237006") {
    if (ed_acctDeptCd.getValue() == "01446" || ed_acctDeptCd.getValue() == "01448" || ed_acctDeptCd.getValue() == "01449" || ed_acctDeptCd.getValue() == "01450" || ed_acctDeptCd.getValue() == "01451" || ed_acctDeptCd.getValue() == "01452" || ed_acctDeptCd.getValue() == "01453" || ed_acctDeptCd.getValue() == "01454" || ed_acctDeptCd.getValue() == "01455" || ed_acctDeptCd.getValue() == "01457" || ed_acctDeptCd.getValue() == "01458" || ed_acctDeptCd.getValue() == "01459" || ed_acctDeptCd.getValue() == "01460" || ed_acctDeptCd.getValue() == "01461" || ed_acctDeptCd.getValue() == "01462" || ed_acctDeptCd.getValue() == "01463" || ed_acctDeptCd.getValue() == "01464" || ed_acctDeptCd.getValue() == "01466" || ed_acctDeptCd.getValue() == "01468" || ed_acctDeptCd.getValue() == "01469" || ed_acctDeptCd.getValue() == "01470" || ed_acctDeptCd.getValue() == "01471" || ed_acctDeptCd.getValue() == "01473" || ed_acctDeptCd.getValue() == "01474" || ed_acctDeptCd.getValue() == "01475" || ed_acctDeptCd.getValue() == "01476") {} else {
      await $c.gus.cfAlertMsg($p, "해당부서의 조회 권한이 없습니다.");
      ed_acctDeptCd.setValue("");
      ed_acctDeptNm.setValue("");
      ed_acctDeptCd.focus();
      return;
    }
  }

  //특정 사용자 타부서 조회 권한 추가 
  if (scwin.vEmpNo == "930262") {
    if (ed_acctDeptCd.getValue() == "00769" || ed_acctDeptCd.getValue() == "00240" && ed_empNo.getValue() == "950654") {} else {
      await $c.gus.cfAlertMsg($p, "해당부서의 조회 권한이 없습니다.");
      ed_acctDeptCd.setValue("");
      ed_acctDeptNm.setValue("");
      ed_acctDeptCd.focus();
      return;
    }
  }
  ed_approveDateFrom.setValue(ed_approveDateFrom.getValue().trim());
  ed_approveDateTo.setValue(ed_approveDateTo.getValue().trim());
  dma_search.set("chkComCostClsCd", scwin.txt_chkComCostClsCd);
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 히든값체크
//-------------------------------------------------------------------------
scwin.f_HiddenCheck = function () {
  // 호출되는곳 없음
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  let param = "";
  let rtnList = new Array();
  switch (flag) {
    case '1':
      if (ed_coCd.getValue() != "") {
        ed_acctDeptNm.setValue("");
      }
      // 부서조회 
      param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";

      //확인을 위하여 N
      if (ds_chkComCostClsCd.getCellData(0, "col1") == "Y") {
        udc_acctDeptCd1.setSelectId("retrieveBranchAggrDeptCd");
        rtnList = udc_acctDeptCd1.cfCommonPopUp(scwin.udc_acctDeptCd1_callBackFunc, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), check, null, null, null, null, scwin.branchAggrDeptCd + ",,,,,,,", null, null, null, null);
      } else {
        udc_acctDeptCd1.setSelectId("retrieveAcctDeptCd1");
        rtnList = udc_acctDeptCd1.cfCommonPopUp(scwin.udc_acctDeptCd1_callBackFunc, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), check, null, null, null, null, param + ",,,,,,,", null, null, null, null);
      }
      break;
    case '2':
      if (ed_empNo.getValue() != "") {
        ed_empNm.setValue("");
      }
      // 사원조회 
      param = scwin.vLoginCoCd + "," + scwin.vLoginCoClsCd + ","; //자회사 회계시스템 추가사항
      rtnList = udc_acEmpInfo.cfCommonPopUp(scwin.udc_acEmpInfo_callBackFunc, ed_empNo.getValue(), ed_empNm.getValue(), check, null, null, null, null, param + ",,,,,,,", null, null, null, null, null, "F");
      break;
    default:
      break;
  }
};

// 부서
scwin.udc_acctDeptCd1_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_acctDeptCd.setValue(rtnList[0]);
    ed_acctDeptNm.setValue(rtnList[1]);
    ed_acctDeptCd.options.hidVal = rtnList[0];
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
    ed_acctDeptCd.options.hidVal = "";
  }
};

// 사번
scwin.udc_acEmpInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_empNo.setValue(rtnList[0]);
    ed_empNm.setValue(rtnList[1]);
    ed_empNo.options.hidVal = rtnList[0];
  } else {
    ed_empNo.setValue("");
    ed_empNm.setValue("");
    ed_empNo.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  /* if (strCd.getValue().trim() == strCd.options.hidVal){
      return;
  }
  
  strNm.setValue("");
  strCd.options.hidVal = ""; */

  if (strCd.getValue().trim() != "") {
    scwin.f_openPopUp(flag, 'T');
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function () {
  // udc
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
// 엑셀다운 8+16
scwin.f_Excel = async function () {
  let confirm = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (confirm) {
    const options = {
      fileName: "개인형법인카드사용내역.xlsx",
      sheetName: "개인형법인카드사용내역",
      type: 1
    };
    $c.data.downloadGridViewExcel($p, gr_prov, options);
  }
};

//-------------------------------------------------------------------------
// 엔터쳤을시 조회
//-------------------------------------------------------------------------
scwin.jsEnterKey = function (e) {
  if (e.keyCode == 13) {
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  let rtnList = udc_companyInfo.cfCommonPopUp(scwin.udc_companyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF);
};
scwin.udc_companyInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (ed_coCd.options.hidVal != rtnList[0]) {
      scwin.f_setInitObj();
    }
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    scwin.txtCoClsCd = rtnList[1];
    ed_coCd.options.hidVal = rtnList[0];
    dma_search.set("coClsCd", rtnList[1]);
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStarted == true)
    // 최초 이벤트 여부 (자회사 여부를 최초 한번만 실행-팝업 리턴 시간차)
    {
      if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
        // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
        $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      } else {
        $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      }
      scwin.isStarted = false;
    }
};

// 팝업 클릭 이벤트 함수
scwin.udc_companyInfo_onclickEvent = async function (e) {
  scwin.f_PopUpCompanyInfo('F');
};

/*
* 자회사 회계 시스템 추가에 따라 회사 코드가 변경되면 reset
*/
scwin.f_setInitObj = function () {
  $c.gus.cfInitObjects($p, [ed_acctDeptCd, ed_acctDeptNm]);
  $c.gus.cfInitObjects($p, [ed_empNo, ed_empNm]);
};
scwin.gr_prov_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo") {
    if (ds_card.getCellData(rowIndex, "slipNo") != null && ds_card.getCellData(rowIndex, "slipNo") != "") {
      let slipNo = ds_card.getCellData(rowIndex, "slipNo");
      if (slipNo != "") {
        let rtnList = await $c.gus.cfShowSlipInfo($p, slipNo); // 전표내역조회
      }
    }
  }
  if (columnId == "crnRegYn") {
    if (ds_card.getCellData(rowIndex, "crnRegYn") == "미등록") {
      let valueObject = {
        vendorName: ds_card.getCellData(rowIndex, "vendorName"),
        vendorTaxNum: ds_card.getCellData(rowIndex, "vendorTaxNum"),
        vendorPerson: ds_card.getCellData(rowIndex, "vendorPerson"),
        vendorZipCode: ds_card.getCellData(rowIndex, "vendorZipCode"),
        vendorAddress1: ds_card.getCellData(rowIndex, "vendorAddress1"),
        vendorAddress2: ds_card.getCellData(rowIndex, "vendorAddress2"),
        pcsSellClsCd: "2",
        flag: "Y",
        flag2: "T",
        crnGubun: "Y"
      };
      let opt = {};
      opt.width = "1820";
      opt.height = "1280";
      opt.modal = true;
      opt.title = "title";
      opt.id = "popup";
      opt.popupName = "사업자번호등록";
      $c.win.openPopup($p, "/ui/ac/fi/stdinfomgnt/fi_100_02_01b.xml", opt, valueObject);
    }
  }
};

// 부서
scwin.udc_acctDeptCd1_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_acctDeptCd, ed_acctDeptNm, "1");
};

// 부서
scwin.udc_acctDeptCd1_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

// 사번
scwin.udc_acEmpInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_empNo, ed_empNm, "2");
};

// 사번
scwin.udc_acEmpInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'F');
};

// 회사코드
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.sbm_admin_after = function () {
  for (let i = 0; i < ds_admin.getRowCount(); i++) {
    scwin.admin = ds_admin.getCellData(i, "cd");
    if (scwin.empNo == scwin.admin) {
      scwin.count1++;
    }
  }
  //ds_bizdiv
  $c.sbm.execute($p, sbm_bizdiv);
};
scwin.sbm_bizdiv_after = function () {
  for (let i = 0; i < ds_bizdiv.getRowCount; i++) {
    scwin.bizdiv = ds_bizdiv.getCellData(i, "cd");
    if (scwin.empNo == scwin.bizdiv) {
      scwin.count2++;
    }
  }
  scwin.f_chkComCostClsCd();
};
scwin.sbm_chkComCostClsCd_after = async function () {
  if (ds_chkComCostClsCd.getCellData(0, "col1") == "Y" && ds_chkComCostClsCd.getCellData(0, "col2") != "") {
    scwin.txt_chkComCostClsCd = ds_chkComCostClsCd.getCellData(0, "col1");
    scwin.branchAggrDeptCd = ds_chkComCostClsCd.getCellData(0, "col2");
  }
  if (scwin.count1 == '0' && scwin.count2 == '0' && ds_chkComCostClsCd.getCellData(0, "col1") == "N") {
    $c.gus.cfDisableObjects($p, [ed_acctDeptCd, ed_acctDeptNm, btn_acctDeptCd]);
    ed_acctDeptCd.setValue(scwin.memJson.acctDeptCd);
    ed_empNo.setValue(scwin.memJson.empNo);
    scwin.f_checkPopEd(ed_acctDeptCd, ed_acctDeptNm, "1");
    scwin.f_checkPopEd(ed_empNo, ed_empNm, "2");
  }
  if (ds_chkComCostClsCd.getCellData(0, "col1") == "Y") {
    if (ds_chkComCostClsCd.getCellData(0, "col2") == "") {
      $c.gus.cfDisableObjects($p, [ed_acctDeptCd, ed_acctDeptNm, btn_acctDeptCd]);
      ed_acctDeptCd.setValue(ds_chkComCostClsCd.getCellData(0, "col4"));
      ed_empNo.setValue(scwin.memJson.empNo);
      ed_acctDeptNm.setValue(ds_chkComCostClsCd.getCellData(0, "col5"));
      scwin.f_checkPopEd(ed_empNo, ed_empNm, "2");
      await $c.win.alert($p, "소속 부서 '" + ed_acctDeptNm.getValue() + "'는 지사공통비 부서 이지만\n" + "지사/집계부서가 등록되지 않았습니다.\n\n" + "경영전략팀에 문의 하여 지사/집계부서 등록 하시기 바랍니다.");
    }
  }
  if (scwin.vAcctDeptCd == "00009" || scwin.vEmpNo == "198015" || scwin.vEmpNo == "198078" || scwin.vEmpNo == "198050" || scwin.vEmpNo == "171577" || scwin.vEmpNo == "200080" || scwin.vEmpNo == "200085" || scwin.vEmpNo == "237006" || scwin.vEmpNo == "930262") {
    $c.gus.cfEnableObjects($p, [ed_acctDeptCd, ed_acctDeptNm, btn_acctDeptCd]);
  }
  ed_empNo.focus();
};

// 서브미션
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_card.getRowCount());
  if (ds_card.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    $c.gus.cfGoPrevPosition($p, gr_prov, 0);
  }
};

// 서브미션
scwin.sbm_admin_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_admin.setJSON(e.responseJSON.GAUCE);
  scwin.sbm_admin_after();
};

// 서브미션
scwin.sbm_bizdiv_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_bizdiv.setJSON(e.responseJSON.GAUCE);
  scwin.sbm_bizdiv_after();
};

// 서브미션
scwin.sbm_chkComCostClsCd_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_chkComCostClsCd.setJSON(e.responseJSON.GAUCE);
  scwin.sbm_chkComCostClsCd_after();
};

// 서브미션
scwin.sbm_compareBranchAggrDeptCd_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_compareBranchAggrDeptCd.setJSON(e.responseJSON.GAUCE);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_coCd',nameId:'ed_coNm',mandatoryCode:'true',validExpCode:'회사코드:yes',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'3','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent',refDataCollection:'dma_search',code:'coCd',name:'coNm',objTypeName:'data',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',popupTitle:'회사조회,회사코드,법인명',editTypeCode:'focus',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',editTypeName:'focus','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent',validTitle:'회사코드',btnId:'btn_company'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'이용기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'approveDateFrom',style:'',id:'udc_fromToCalendar1',refEdDt:'approveDateTo',refDataMap:'dma_search',mandatory:'true',objTypeTo:'data',objTypeFrom:'data',edFromId:'ed_approveDateFrom',edToId:'ed_approveDateTo',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'이용기간',titleTo:'이용기간'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'col8',popupID:'',style:'',codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',objTypeCode:'data',validExpCode:'부서:no:format=00000',allowCharCode:'0-9',UpperFlagCode:'1',objTypeName:'data',selectID:'retrieveAcctDeptCd1',maxlengthCode:'5',popupGridHeadTitle:'귀속코드,부서명',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',id:'udc_acctDeptCd1','ev:onblurCodeEvent':'scwin.udc_acctDeptCd1_onblurCodeEvent',refDataCollection:'dma_search',code:'acctDeptCd',name:'acctDeptNm',btnId:'btn_acctDeptCd','ev:onclickEvent':'scwin.udc_acctDeptCd1_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사번',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'col8',popupID:'',style:'',codeId:'ed_empNo',nameId:'ed_empNm',objTypeCode:'data',validExpCode:'사번:no:format=000000',allowCharCode:'0-9',UpperFlagCode:'1',objTypeName:'data',selectID:'retrieveAcEmpInfo',maxlengthCode:'6',popupGridHeadTitle:'사원코드,사원명',popupTitle:'사원조회,사원코드,사원명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',id:'udc_acEmpInfo','ev:onblurCodeEvent':'scwin.udc_acEmpInfo_onblurCodeEvent',refDataCollection:'dma_search',code:'empNo',name:'empNm',btnId:'btn_empNo','ev:onclickEvent':'scwin.udc_acEmpInfo_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'카드번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control col7',id:'ed_cardNum',placeholder:' ',style:'',objType:'Data',displayFormat:'####-####-####-####','ev:oneditenter':'scwin.jsEnterKey(event)',ref:'data:dma_search.cardNum',allowChar:'0-9',maxlength:'16'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'삭제여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabledClass:'w2selectbox_disabled',id:'lc_delYn',ref:'data:dma_search.delYn',renderType:'',style:'width: 230px;',submenuSize:'auto',objType:'data',title:'삭제여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_delYn'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'f_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'개인형법인카드 사용내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_Excel',gridID:'gr_prov',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',dataList:'data:ds_card',scrollByColumn:'false',style:'',id:'gr_prov',visibleRowNum:'14',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true','ev:oncellclick':'scwin.gr_prov_oncellclick',enterKeyMove:'edit'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column12',value:'구분',blockSelect:'false',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'200',inputType:'text',id:'column11',value:'카드번호',blockSelect:'false',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column10',value:'부서',blockSelect:'false',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column9',value:'사번',blockSelect:'false',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column8',value:'성명',blockSelect:'false',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column7',value:'이용일자',blockSelect:'false',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column6',value:'이용시간',blockSelect:'false',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'280',inputType:'text',id:'column5',value:'금액',blockSelect:'false',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column32',value:'계정과목',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'사업자번호<br/>등록여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column26',value:'상호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column29',value:'업종',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column53',value:'업태',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'전표번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column47',value:'전표상신자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'승인번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column41',value:'사업자번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'대표자명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'column56',value:'거래처주소',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column97',value:'전송일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column93',value:'매입추신번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column89',value:'삭제여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column59',value:'전결자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column62',value:'전결위임구분',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'이용금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column14',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column13',value:'봉사료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column36',value:'합계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'select',id:'gubun',blockSelect:'false',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인취소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매입취소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'청구'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]}]}]},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'200',inputType:'text',id:'cardNum',blockSelect:'false',displayMode:'label',displayFormat:'####-####-####-####'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'acctDeptNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'empNo',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'empNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'dealDate',blockSelect:'false',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'approveTime',blockSelect:'false',displayMode:'label',displayFormat:'##:##:##'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'approveAmt',blockSelect:'false',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'tax',blockSelect:'false',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'serviceCharge',blockSelect:'false',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'addSum',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'color:blue;',id:'crnRegYn',value:'',displayMode:'label',class:'underline'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'vendorName',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'mmcName',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'bizcondNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'color:blue;',id:'slipNo',value:'',displayMode:'label',class:'underline'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'apprvReqrNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'approveNum',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'vendorTaxNum',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vendorPerson',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'address',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'transDate',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'buyCollectionNum',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'delYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'apprvEmpNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'apprvGbn',value:'',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column88',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column86',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column83',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column81',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'approveAmt\')',displayFormat:'#,##0',maskFormat:'reverse',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column80',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'tax\')',displayFormat:'#,##0',maskFormat:'reverse',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column79',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'serviceCharge\')',displayFormat:'#,##0',maskFormat:'reverse',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column78',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'addSum\')',displayFormat:'#,##0',maskFormat:'reverse',dataType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column100',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]}]}]})