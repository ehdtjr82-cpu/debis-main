/*amd /cm/xml/contentHeader.xml 13124 0a773d5c8ac6b92031e8e1bed90853e33846dd6295561a76917f09868103fa68 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_fav',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'menuNm',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'menuId',name:'메뉴아이디',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자아이디',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvl',name:'레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmScrPath',name:'경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmId',name:'프로그램아이디',dataType:'text'}},{T:1,N:'w2:column',A:{id:'menuGrpNm',name:'그룹명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmNm',name:'프로그램명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'순번',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_updateFav',action:'/cm.bc.comnmgnt.menumgnt.cmd.SaveMyMenuListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_fav","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.wfTitleFavInit,scwin.setMenuNavi,scwin.generator_insertMenu,scwin.setFavStatus,scwin.showScreenInfo,scwin.reload,scwin.setTitle'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin._titleOverride = "";
scwin.applyTitle = function (title) {
  let nextTitle = title;
  if (typeof scwin._titleOverride === "string" && scwin._titleOverride.trim() !== "") {
    nextTitle = scwin._titleOverride;
  }
  if (typeof nextTitle === "undefined" || nextTitle === null || String(nextTitle).trim() === "") {
    return;
  }
  nextTitle = String(nextTitle);
  txt_h1.setValue(nextTitle);
  if (typeof scwin.param === "object" && scwin.param !== null) {
    scwin.param.popupTitle = nextTitle;
    scwin.param.popupName = nextTitle;
    scwin.param.menuNm = nextTitle;
    scwin.param.pgmNm = nextTitle;
  }
};
scwin.onpageload = function () {
  try {
    if (location.href.indexOf("externalSabunLoginPopup") > -1) {
      let menuInfo;
      try {
        menuInfo = $c.data.getParameter($p, "menuInfo", _F($p.parent()));
      } catch (e) {
        menuInfo = undefined;
      }
      if (typeof menuInfo === "undefined" || menuInfo == null) {
        try {
          menuInfo = $c.data.getParameter($p, "menuInfo", $p.parent().$p);
        } catch (e) {
          menuInfo = undefined;
        }
      }
      if ((typeof menuInfo === "undefined" || menuInfo == null) && typeof $p.top().tac_layout !== "undefined") {
        try {
          const tacLayout = $p.top().tac_layout;
          const selectedIndex = tacLayout.getSelectedTabIndex ? tacLayout.getSelectedTabIndex() : 0;
          const selectedContent = tacLayout.contentsArr[selectedIndex] || tacLayout.contentsArr[0];
          if (selectedContent && selectedContent.dataObject && selectedContent.dataObject.data) {
            menuInfo = selectedContent.dataObject.data.menuInfo;
          }
        } catch (e) {
          menuInfo = undefined;
        }
      }
      if (typeof menuInfo !== "undefined" && menuInfo != null) {
        scwin.param = menuInfo;
        scwin.applyTitle(menuInfo.popupTitle || menuInfo.popupName || menuInfo.pgmNm || menuInfo.menuNm || "");
      }
      return;
    } else {
      if ($p.top().$p.isPopup() || $p.isWFramePopup()) {
        scwin.param = $c.data.getParameter($p, "menuInfo", $p.parent().$p);
      } else {
        scwin.param = $c.data.getParameter($p, "menuInfo", _F($p.parent()));
      }
      if ($p.top().$p.isPopup() || $p.isWFramePopup()) {
        if (typeof scwin.param !== "undefined") {
          scwin.applyTitle(scwin.param.popupTitle || scwin.param.popupName);
        }
      } else {
        let titleNm = scwin.param.pgmNm || scwin.param.menuNm;
        scwin.applyTitle(titleNm);
        let retNavi = scwin.getMenuNm(scwin.param.pgmId);
        if (retNavi.length > 0) {
          if (!$c.data.isMenu1($p, retNavi[retNavi.length - 1])) {
            if ($c.data.getSysNm($p, $p.top().wfm_header.getWindow().dma_userParam.get("sysCd")) != "") {
              gen_navi.insertChild();
              retNavi.push($c.data.getSysNm($p, $p.top().wfm_header.getWindow().dma_userParam.get("sysCd")));
            }
          }
          for (var i = 0, j = retNavi.length - 1; j >= 0; j--, i++) {
            gen_navi.getChild(i, "anc_navi").setValue(retNavi[j]);
            if (j == 0) {
              gen_navi.getChild(j, "grp_genNavi1").addClass("home");
            }
            if (i == retNavi.length - 1) {
              gen_navi.getChild(i, "grp_genNavi1").addClass("on");
            }
          }
        } /*else {
            // 예외처리, 메뉴 데잍터를 가져오기 전에 호출되는 페이지는 메뉴정보를 보여줄수 없어서 처리
            if(scwin.param.pgmId.indexOf("zz_620_01_00b") > -1) { // 환경설정
                retNavi = ['환경설정(Tab/m)', '사용자', '시스템관리', '공통'];
            } 
            
            for(var i=0,j=retNavi.length-1; j >= 0; j--,i++) {
                gen_navi.insertChild();
                gen_navi.getChild(i, "anc_navi").setValue(retNavi[j]);
                if(j == 0) {
                    gen_navi.getChild(j, "grp_genNavi1").addClass("home");
                }
                if(i== (retNavi.length-1)) {
                    gen_navi.getChild(i, "grp_genNavi1").addClass("on");
                }
            }
          }
          */

        scwin.wfTitleFavInit();

        /*
            $('.pg-tit .tit').on('click', function() {
                $(this).children('.bookmark').toggleClass('on');
            });
            */
      }
    }
    function _F(f) {
      if (f.$p.getFrame().getPluginName() !== "wframe") {
        return f.$p;
      } else {
        return _F(f.$p.parent());
      }
    }
  } catch (e) {
    console.log("### contentHeader onpageload ###");
  }
};
scwin.mTitle = [];
scwin.getMenuNm = function (mCd, upperId) {
  //debugger;
  let jData = "";
  if (typeof upperId !== "undefined") {
    // jData = $p.top().wfm_side.getWindow().ds_trvMenu.getMatchedJSON("menuId", upperId);
    jData = $p.top().ds_allMenuList.getMatchedJSON("menuId", upperId);
  } else {
    // jData = $p.top().wfm_side.getWindow().ds_trvMenu.getMatchedJSON("actPgmId", mCd, false);
    jData = $p.top().ds_allMenuList.getMatchedJSON("actPgmId", mCd, false);
  }
  //let retNavi = navi || "";
  let jData1 = "";
  if (jData.length == 1) {
    var idx = gen_navi.insertChild();
    scwin.mTitle.push(jData[0].menuNm);
    var upperId = jData[0].upperMenuId;
    scwin.getMenuNm(mCd, upperId);
  } else if (jData.length > 1) {
    jData1 = $p.top().ds_allMenuList.getMatchedJSON("menuId", scwin.param.menuId);
    if (jData1.length > 0) {
      var idx = gen_navi.insertChild();
      scwin.mTitle.push(jData1[0].menuNm);
      var upperId = jData1[0].upperMenuId;
      scwin.getMenuNm(mCd, upperId);
    }
  }
  return scwin.mTitle;
};

/**
 * @method
 * @name wfTitleFavInit
 * @description contentHeader의 초기화 로직, 메뉴 정보를 셋팅한다.
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.wfTitleFavInit = function () {
  //debugger;
  //const param = $c.data.getParameter("menuInfo", $p.parent().$p);
  const menuInfoArr = [];
  try {
    let favStatus = "F";

    // 샘플 화면의 메뉴인 경우 즐겨찾기 버튼 비활성화
    if (scwin.param.menuType == "SP") {
      btn_fav.hide();
    }
    if ($p.main().wfm_side.getWindow().scwin.hasFavCode(scwin.param.pgmId) > 0) {
      favStatus = "T";
    }
    scwin.setFavStatus(scwin.param.pgmId, favStatus);
    scwin.setMenuNavi(scwin.param.pgmId, scwin.param.menuNm);
  } catch (ex) {
    //grp_main.hide();
  }
};

/**
 * @method
 * @name setFavStatus
 * @description 즐겨찾기 상태를 설정한다
 * @param {string} menuCode 즐겨찾기 설정의 메뉴 코드
 * @param {string} favStatus 즐겨찾기 상태코드
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.setFavStatus = function (menuCode, favStatus) {
  btn_fav.setUserData("t_menuCode", menuCode);
  btn_fav.setUserData("t_favStatus", favStatus);
  if (favStatus == "T") {
    btn_fav.addClass("on");
  } else {
    btn_fav.removeClass("on");
  }
};

/**
 * @method
 * @name setMenuNavi
 * @description 상단 메뉴 Navi를 구성한다.
 * @param {string} menuCode 메뉴코드
 * @param {string} menuName 메뉴이름
 * @param {string} menuType 메뉴타입
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.setMenuNavi = function (menuCode, menuName, menuType) {
  let naviArr, naviArrLen, naviStr, menuNm;
  try {
    if (typeof menuType !== "undefined" && menuType === "SP") {
      menuNm = menuName;
      naviArr = ["샘플화면", menuName];
    } else {
      naviArr = $p.main().pfm_side.getWindow().scwin.getMenuNavigation(menuCode).split("%|%");
      naviArrLen = parseInt(naviArr.length / 2);
      naviStr = "";
      menuNm = naviArr[0];
      for (let i = naviArrLen; i >= 0; i--) {
        naviStr += naviArr[i * 2];
        if (i < naviArrLen && i > 0) {
          naviStr += " > ";
        }
      }
    }
  } catch (ex) {
    naviStr = "";
    menuNm = menuName;
  } finally {
    scwin.generator_insertMenu(naviArr);
    scwin.applyTitle(menuNm);
  }
};
scwin.setTitle = function (title) {
  if (typeof title === "undefined" || title === null || String(title).trim() === "") {
    return;
  }
  scwin._titleOverride = String(title);
  scwin.applyTitle(scwin._titleOverride);
};
scwin.btn_trigger1_onclick = async function (e) {
  //debugger;
  const menuCode = btn_fav.getUserData("t_menuCode");
  let favStatus = btn_fav.getUserData("t_favStatus");
  let rt = await scwin.updateFav(menuCode, favStatus);
  try {
    if (rt.responseJSON.resultDataSet[0].Msg == "SUCC") {
      $p.top().wfm_side.getWindow().scwin.myMenuSearch();
    }
    if (favStatus == "T") {
      favStatus = "F";
    } else {
      favStatus = "T";
    }
    scwin.setFavStatus(menuCode, favStatus);
  } catch (e) {
    console.log(e);
  }
};

/**

 * 
 * @param {Array} menuCode [[메뉴코드]:[F|T]]업데이트하기 위한 페이지 정보로 메뉴코드와 추가/삭제 여부에 대한 key값. (e.g., "030001:F", "030001:T")
 * @param {String} favStatus 적용시킬 상태 값(T, F)
 * @memberOf scwin
 * @author InswaveSystems
 */
scwin.updateFav = async function (menuCode, favStatus) {
  // if (favStatus == "F") {
  //     favStatus = "I";
  // } else if (favStatus == "T") {
  //     favStatus = "D"
  // }

  try {
    let dataObj = $p.top().ds_allMenuList.getMatchedJSON("actPgmId", menuCode);
    if (dataObj.length > 0) {
      let jsonData = {
        "menuId": dataObj[0].menuId,
        "menuNm": dataObj[0].menuNm,
        "pgmId": menuCode,
        "lvl": "2",
        "menuGrpNm": "즐겨찾기",
        "sortSeq": dataObj[0].sortSeq,
        "userId": $c.data.getMemInfo($p, "userId")
      };
      if (favStatus == "F") {
        // 추가
        favStatus = "I";
        ds_fav.setJSON($p.top().wfm_side.getWindow().ds_fav.getAllJSON());
        if (ds_fav.getRowCount() > 0) {
          let dsIdx = ds_fav.getRowCount() - 1;
          jsonData.sortSeq = (parseInt(ds_fav.getRowJSON(dsIdx).sortSeq) + 1).toString();
        }
        ds_fav.setJSON([jsonData], true);
      } else if (favStatus == "T") {
        // 삭제
        favStatus = "D";
        ds_fav.setJSON([jsonData], false);
      }
      if (favStatus == "D") {
        ds_fav.modifyAllStatus("D");
      } else {
        ds_fav.modifyAllStatus("C");
      }
      let rt = await $c.sbm.execute($p, sbm_updateFav);
      return rt;
    }
  } catch (e) {
    console.log(e);
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'grp_main',style:''},E:[{T:1,N:'xf:group',A:{id:'grp_group1',class:'pg-tit'},E:[{T:1,N:'xf:group',A:{id:'',class:'tit'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_trigger1_onclick',style:'',id:'btn_fav',type:'button',class:'btn ico bookmark'},E:[{T:1,N:'xf:label'}]},{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'txt_h1',label:'화면타이틀',class:'pgt_tit'}}]},{T:1,N:'xf:trigger',A:{class:'btn ico help',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]}]},{T:1,N:'xf:group',A:{class:'breadcrumb',id:'',style:''},E:[{T:1,N:'w2:generator',A:{style:'',id:'gen_navi',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'grp_genNavi1',style:'',tagname:'li'},E:[{T:1,N:'w2:span',A:{id:'anc_navi',label:'3Depth Menu',style:''}}]}]}]}]}]}]}]})