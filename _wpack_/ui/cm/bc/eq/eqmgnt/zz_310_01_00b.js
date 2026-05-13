/*amd /ui/cm/bc/eq/eqmgnt/zz_310_01_00b.xml 4057 cd480b5a2b90b9540106e9df3296e29ae1e459b59ed7bcf36d82b5297772304e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.parms = $c.data.getParameter($p);
scwin.login = $c.data.getMemInfo($p);
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vSysAdminYn = scwin.login.sysAdminYn;

//param
scwin.vVehclNo = scwin.parms.vehclNo == null ? "" : scwin.parms.vehclNo;
scwin.vVehclNoHomeClsCd = scwin.parms.vehclNoHomeClsCd == null ? "" : scwin.parms.vehclNoHomeClsCd;
scwin.vehclShortCd = scwin.parms.vehclShortCd == null ? "" : scwin.parms.vehclShortCd;
scwin.vEqCd = scwin.parms.eqCd == null ? "" : scwin.parms.eqCd;
scwin.legal = scwin.parms.legal == null ? "" : scwin.parms.legal;
scwin.curDate = WebSquare.date.getCurrentServerDate();

// 부모페이지에서 자식페이지에 파라미터를 보내지 않고, 부모페이지의 전역변수를 공유합니다.
// scwin.parentFrame.전역변수명으로 받으시면 됩니다. (최준용)

scwin.onpageload = function () {
  if (scwin.vVehclNo.trim() != "" && scwin.vVehclNoHomeClsCd.trim() != "") {
    /* if(scwin.vVehclNoHomeClsCd=="RV"){
        tabControl1.setSelectedTabIndex(4);
        // scwin.f_ViewTab(4,'');
    }else */
    if (scwin.vVehclNoHomeClsCd == "LO") {
      tabControl1.setSelectedTabIndex(0);
      // scwin.f_ViewTab(0,'');
    } else if (scwin.vVehclNoHomeClsCd == "TR") {
      tabControl1.setSelectedTabIndex(0);
      // scwin.f_ViewTab(0,'');
    }
  } else {
    if (scwin.vSysAdminYn == "1") {
      tabControl1.setSelectedTabIndex(0);
      // scwin.f_ViewTab(0,'');
    } else if (scwin.legal == "T") {
      tabControl1.setSelectedTabIndex(0);
      // scwin.f_ViewTab(0,'');
    } else if (scwin.vUserHomeClsCd == "EQ" && scwin.vSysAdminYn == "0") {
      tabControl1.setSelectedTabIndex(0);
      // scwin.f_ViewTab(0,'');
    } else if (scwin.vUserHomeClsCd == "DS" && scwin.vSysAdminYn == "0") {
      tabControl1.setSelectedTabIndex(1);
      // scwin.f_ViewTab(1,'');
      // }else if(scwin.vUserHomeClsCd=="TR" && scwin.vSysAdminYn=="0"){
      //     tabControl1.setSelectedTabIndex(3);
      // scwin.f_ViewTab(3,'');
    } /* else if(scwin.vUserHomeClsCd=="RC" && scwin.vSysAdminYn=="0"){
         tabControl1.setSelectedTabIndex(4);
         // scwin.f_ViewTab(4,'');
      } */
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'tabbox ',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'tabControl1',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'정비',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'물류(자차/위수탁/지입)',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs3',label:'물류(중기)'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:'',src:'/ui/cm/bc/eq/eqmgnt/zz_310_01_01b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',src:'/ui/cm/bc/eq/eqmgnt/zz_310_01_02b.xml',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content3',src:'/ui/cm/bc/eq/eqmgnt/zz_310_01_03b.xml'}}]}]}]}]}]}]})