<%@ page  import="org.apache.commons.lang.*,org.apache.commons.lang.time.*,dbl.cm.fw.util.*,dbl.cm.fw.constants.*,dbl.cm.bc.comnmgnt.usermgnt.util.*,dbl.cm.bc.comnmgnt.usermgnt.dto.*" contentType="text/html;charset=utf-8" %>
<%@ page import="dbl.ac.am.constants.ACConstants" %>
<%
    LoginDTO dto = LoginUtil.getLoginDTO(request);
    int isAdmin = (int)dto.getSysAdminYn();
    String userClsCd= dto.getUserClsCd();
    String userId = dto.getUserId();
    String lobranCd = dto.getLobranCd();
    String msgConfirmCycCd = dto.getMsgConfirmCycCd();
    String clntNo = DCheckIf.isNullToBlank( StringUtils.strip( dto.getClntNo() ) );
    String clntNm = DCheckIf.isNullToBlank( StringUtils.strip( dto.getClntNm() ) );
    String userKind = userClsCd ;
    
    String userNm = StringUtils.strip( dto.getUserNm()  ); 
    String pstNm = DCheckIf.isNullToBlank( StringUtils.strip( dto.getPstNm() ) ); 
    String currentDate = DateFormatUtils.format( new java.util.Date() , "yyyy/MM/dd hh:mm") ; 
    
    String hostName = request.getHeader ( "Host" ) ;
    hostName = (hostName.split(":"))[0];
     
    String coClsCd =  DCheckIf.isNullToBlank(dto.getCoClsCd()) ;
    String privAdmin = dto.getPrivAdmin(); // ADMIN 권한  CHECK  
%>
<html>
<head>
<title>Untitled Document</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script language="javascript" src="/common/script/common.js"></script>
<script language="javascript" src="/common/script/popupdefine.js"></script>

<style type="text/css">
body, td, p, br, input, textarea, form, option 
{font-family: "돋움"; font-size: 12px; color: #000000;}

select{ 
    background-color: #F4F4F4;  
    font-family:  dotum, verdana, helvetica, arial;
    font-size:12px;
    color:#555555;
    }

body {
    scrollbar-face-color: #F8F8F8;
    scrollbar-shadow-color:#B3B3B3;
    scrollbar-highlight-color:#B3B3B3;
    scrollbar-3dlight-color: #FFFFFF; 
    scrollbar-darkshadow-color: #FFFFFF;
    scrollbar-track-color: #DDDDDD;
    scrollbar-arrow-color: #8B9EA6;
}
img {border:none;}
a:link {text-decoration: underline ; color: #363891;}
a:visited {text-decoration: underline ; color: #7E49AF;}
a:active {text-decoration: underline ; color: #5A92E4;}
a:hover {text-decoration: underline ; color: #5A92E4;}

/* 숫자 */
.number { color: #FF9900; }
a.:link.number {color:#FF9900; text-decoration:none}
a.:visited.number {color:#FF9900; text-decoration:none}
a.:hover.number {color:#FF0000; text-decoration: underline}
a.:active.number {Color:#FF0000; text-decoration:underline}
</style>
<script language="javascript" src="/common/script/common.js"></script>  
<script language="JavaScript" type="text/JavaScript">

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

// 시스템 메뉴 버튼의 수
var numSys = 7;

// 현재 선택된 시스템
var selected = 0;

// on image : '/common/images/menu01_on.gif'
// off image : '/common/images/menu01_off.gif'

// 마우스가 시스템 버튼 위로 올라 갔을 때
function imgMouseover(menuNum){
    document.all["menuImage"+menuNum].src = "/common/images/menu0" + menuNum + "_on.gif";
}

// 마우스가 시스템 버튼 밖으로 나갔을 때
function imgMouseout(menuNum){
    if (menuNum != selected)
        document.all["menuImage"+menuNum].src = "/common/images/menu0" + menuNum + "_off.gif";
}

// 하나를 제외한 나머지 버튼을 off 상태로
function resetTheOthers(menuNum){ 
    for (i = 1; i <= numSys; i++) {
        if (i != menuNum){        
            document.all["menuImage"+i].src = "/common/images/menu0" + i + "_off.gif";
        } 
    }
}

function cfMenuSelect(menuNum) {
    var sysCd;
     
    switch(menuNum) {
    case 1:
        sysCd = "CM";
        break;
    case 2:
        sysCd = "DS";
        break;
    case 3:
        sysCd = "TR";
        break;
    case 4:
        sysCd = "RC";
        break;
    case 5:
        sysCd = "EQ";
        break;
    case 6:
        sysCd = "AC";
        break;
    case 7:
        sysCd = "FW";
        break;
    case 8:
        sysCd = "SA"; //자회사 회계  
        numSys = 0;
        break;  
    case 9:
        sysCd = "JL"; //자회사 물류  
        break;
    }
    
    while (!parent.menuFrame);
    parent.menuFrame.cfMenuSelect(sysCd);
    parent.TAB_FRAME.f_ExpandMenu(true); // 왼쪽 메뉴 열기
    resetTheOthers(menuNum); 
}

  function jsLogout() { 
      if ( !confirm( "로그아웃 하시겠습니까 ? ") ) return ;
         oGDS_logout_result.DataID = "/logout.do";
         oGDS_logout_result.Reset(); 
         
         /*
         var name = "NEW_SCREEN_OPENED";
         var value= "F";
         var expdate = new Date();         
         expdate.setTime(expdate.getTime() - 1); // 쿠키 삭제조건         
         document.cookie = name + "=" + escape (value) + "; path=/; expires=" + expdate.toGMTString();
         */
  }

  function jsShowBoardDelay() { 
      setTimeout("jsShowBoard()",1000);
  }
  
  function jsShowBoard() {
    var obj = eval(boardSelect)
    jsChangeBoard( obj,"01" ); 
   
    //cfTabMenuAdd( "/cm/bc/comnmgnt/boardmgnt/zz_690_02_01b.jsp", "전체 공지사항" );
  }
  
  function jsShowSystemBoard() {
    var obj = eval(boardSelect)
    jsChangeBoard( obj,"01" ); 
       
    //cfTabMenuAdd( "/cm/bc/comnmgnt/boardmgnt/zz_690_02_01b.jsp", "전체 공지사항" );
  }  
  
  function jsShowEnvSet() { 
     cfTabMenuAdd('/cm/bc/comnmgnt/usermgnt/zz_620_01_00b.jsp', '환경설정');
  } 
       
  function jsShowMessage(type) { 
     var vReceiveMessageCount = txt_receiveMsgCnt.value;

     if(type=="R" && vReceiveMessageCount=="0"){
        alert("수신된 메시지가 없습니다.");    
     }else{
        cfTabMenuAdd('/cm/bc/comnmgnt/msgmgnt/zz_680_01_01b.jsp?type=' +type , '개인메시지');
     }
  }     

  function jsShowInfo(){
    var vLeft = (screen.width-370)/2;
    var vTop =  (screen.height-340)/2;
    var vConf = "width=370,height=340,left=" + vLeft + ",top=" + vTop;

    window.open("/ep/popup.html","",vConf);
  }

  function jsDebis_info(){
    //var sFeatures1 = "dialogWidth:380px; dialogHeight:400px; center:Yes; help:No; resizable:No; status:No; scroll:No"
    var sFeatures1 = "width=360,height=380,left=50,top=100,scrollbars=no";
    var w1 = window.open("/debis_info.html","a",sFeatures1);
    //window.showModalDialog("/debis_info.html","",sFeatures1);  
    
    //var sFeatures2 = "dialogWidth:600px; dialogHeight:500px; center:Yes; help:No; resizable:No; status:No; scroll:No"
    //var sFeatures2 = "width=440,height=470,left=430,top=100,scrollbars=no";
    //var w2 = window.open("/debis_info2.html","b",sFeatures2);
    //window.showModalDialog("/debis_info2.html","",sFeatures2);    
    
    w1.focus();
    //w2.focus();
  }

  function jsHelpDesk(){
    var vLeft = (screen.width-370)/2;
    var vTop =  (screen.height-450)/2;
    var vConf = "width=850,height=660,scrollbar=yes,left=" + vLeft + ",top=" + vTop;

    window.open("/charge.html","전산담당자",vConf);
  }

  // 브라우져 세션 유지 공통 변수 적용 
  var browserSessionMap = new  JsMap() ;

  function putValue(  key , vaue ) {   
      browserSessionMap.put(key , vaue) ;
  }
  
  function getValue(  key   ) { 
     return browserSessionMap.get(key) ;
  }

  function f_OnLoad() { 
    MM_preloadImages('/common/images/util_home_on.gif','/common/images/util_notice_on.gif','/common/images/util_modify_on.gif','/common/images/util_info_on.gif','/common/images/util_logout_on.gif','/common/images/util_man_on.gif','/common/images/menu01_on.gif','/common/images/menu02_on.gif','/common/images/menu03_on.gif','/common/images/menu04_on.gif','/common/images/menu05_on.gif','/common/images/menu06_on.gif','/common/images/left_tap01_off.gif','/common/images/left_tap02_on.gif');      
    // jsShowBoardDelay();
    // jsDebis_info();
    
    // 개인 메시지 주기적으로 호출 
    /*  //20071106  막음 - 송은진 
    var intervalMS = parseInt( <%=msgConfirmCycCd%> * 60 * 1000 );
    if ( intervalMS > 0 ) {
      f_RetrieveReceiveMessageCount();
      setInterval ( "f_RetrieveReceiveMessageCount()" , intervalMS );   
    } else { 
      f_RetrieveReceiveMessageCount();
    }   */
 
    // 설문여부 체크
    var strSurveyStart = "<a href='javascript:jsSurveyCall();'><img src='/common/images/SurveyStart_small.gif' border=0></a>";
    var nCnt = cfGetSurveyCnt();
    
    if ( nCnt > 0 ) {
        survey_links.innerHTML = strSurveyStart;      
    }

    // 자가반출 업무 관련
    // XP 보안패치관련
    //jsNotice();
    <%if( !"91".equals(userClsCd) ){%>
   // jsShowBoard();
    <%}%>
    //공지팝업 - 사용자매뉴얼
    //jsPopupNotice();
    
    // AutoPOP-UP Call(계약자에게 만기가 도래되는 계약현황을 Display시킴(POP-UP))
    //              폭       높이     Exp      pCookieID                   URL
    cfAutoPopUpRun("810","530","1","retrieveExpireContractCnt","/ds/sd/salesactiv/ctrtmgnt/sd_202_01_52b.jsp","<%=userId%>");
    
    // 입찰일정 조회 팝업 Call
    f_BidSchedulePopup() ;
    
    //alert("계약변경팝업");
    //계약변경팝업_아래꺼 사용할꺼임
    cfAutoPopUpRun("810","530","1","retrieveExpireContractCnt","/ds/sd/salesactiv/ctrtmgnt/sd_202_01_53b.jsp","<%=userId%>");
    
  }
  
  //팝업공지
  /* 
     apache web server 4곳에 모두 이미지 올릴것. 
          올린 이미지 퍼미션 모두 777 줄것.  
  */
  function jsPopupNotice(){
    var width = 840;
    var height = 655;
    var win_left = (screen.width - width) /2 ;
    var win_top  = (screen.height- height) /2 ;
    var now    = new Date();
    var win_name = "" ;
    var mOpt = "toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=0,resizable=1,left="+win_left+",top="+win_top+",width="+width+",height="+height ;
    var vCallURL = "";
    var rWin = "";
    var pCookieID = "noticePopup";
    var imgName = "notice_20081125.gif";
    var pCallURL = "/common/jsp/notice.jsp?pImgName=";
    var pExpDay = 1;

    var COOKIE_ST = GetCookie(pCookieID) ;

    if ( COOKIE_ST != "true" ){
        //vCallURL = "/common/jsp/notice.jsp?pImgName=notice_20081125.gif";
        vCallURL = "/common/jsp/AutoPopUp.jsp?pCookieID="+pCookieID+"&pCallURL="+pCallURL+imgName+"&pExpDay="+pExpDay;
        win_name  = now.getHours().toString() + now.getMinutes().toString() + now.getSeconds().toString();
        window.open(vCallURL,win_name,mOpt) ;
        //rWin.focus();
    }
  }
  
  // 입찰 일정 조회 PopUp
  function f_BidSchedulePopup() { 
    cfBidSchedulePopUpRun("530","420","1","retrieveBidScheduleListByLoginInfo","/ds/sd/salesactiv/bidschedulemgnt/sd_203_01_01p.jsp","<%=userId%>", "<%=lobranCd%>");
  }

  function jsSurveyCall() {
    cfTabMenuAdd('/cm/bc/cstmrcardmgnt/cstmrcardmgnt/zz_810_04_02b.jsp', '설문참여');
    return ;
  }  

  function jsNotice() {
    cfTabMenuAdd( "/common/jsp/notice.jsp?pImgName=notice_20081125.gif", "긴급공지" );
  }

  function f_OnUnLoad() { 
    var name = "NEW_SCREEN_OPENED";
    var value= "F";
    var expdate = new Date();         
    expdate.setTime(expdate.getTime() - 1); // 쿠키 삭제조건         
    document.cookie = name + "=" + escape (value) + "; path=/; expires=" + expdate.toGMTString();
    //DeleteCookie("NEW_SCREEN_OPENED");
  }      

  function jsChangeBoardKind() { 
    boardSelect.options[0].selected = true ;
  }
             
  function jsChangeBoard( obj, selectBoardId ) { 
    var boardURL = "" ;
    var boardTitle = "" ;     

    /* 01^내부사용자,
       02^협력_물류,
       03^고객_선사,
       04^고객_화주,
       05^자가운송업체,
       06^고객_렌터카,
       07^협력_정비,
       08^협력_렌터카,
       09^협력_물류/자가,
       10^고객_신대양 ,
       30^협력_국제물류,
       32^고객_국제물류,
       90^EIS(임원-DSS) 
       91^협력_회계 */
    var vUserClsCd = "<%=userKind%>"; 
    var vUserBoardNo = "" ;
    var vUserBoardNm = "" ;

    if ( vUserClsCd == null || vUserClsCd == "" ){
        alert("사용자 구분이 미등록 되었습니다.\n시스템 담당자에게 문의 하십시요.");
        return ;
    }
            
    switch (vUserClsCd) {
        case '01':  
        case '90':  
                    vUserBoardNo = "02"; vUserBoardNm = "내부";   break;
        case '03': 
        case '04': 
        case '06': 
        case '10': 
        case '32':      
                    vUserBoardNo = "03"; vUserBoardNm = "고객";   break;
        case '02': 
        case '05': 
        case '07':  
                    vUserBoardNo = "07"; vUserBoardNm = "협력_정비";   break;    
        case '09': 
        case '30':      
                    vUserBoardNo = "04"; vUserBoardNm = "협력";   break;
        case '08': 
                    vUserBoardNo = "08"; vUserBoardNm = "협력_렌터카";   break;
        case '11': 
                    vUserBoardNo = "11"; vUserBoardNm = "협력_렌터카정비";   break;
        case '91': 
                    vUserBoardNo = "91"; vUserBoardNm = "외부_회계";   break;    
        case '70': 
                    vUserBoardNo = "70"; vUserBoardNm = "용기협회_WMS";   break;                                  
    }

    if ( "<%=isAdmin%>" == "1" || vUserClsCd == "90") {
        vUserBoardNo = boardKind.options[boardKind.selectedIndex].value ; // 02:내부, 03:고객, 04:협력
        if ( vUserBoardNo == "02" ) vUserBoardNm = "내부";
        if ( vUserBoardNo == "03" ) vUserBoardNm = "고객";
        if ( vUserBoardNo == "04" ) vUserBoardNm = "협력";
        if ( vUserBoardNo == "07" ) vUserBoardNm = "협력_정비";
        if ( vUserBoardNo == "08" ) vUserBoardNm = "협력_렌터카";  //20070831 송은진 추가
        if ( vUserBoardNo == "11" ) vUserBoardNm = "협력_렌터카정비";
        if ( vUserBoardNo == "70" ) vUserBoardNm = "용기WMS_공지사항";   //용기협회WMS 공지사항 추가                       
    }

    if ( selectBoardId == '01' ) {
         boardURL = "/cm/bc/comnmgnt/boardmgnt/zz_690_"+vUserBoardNo+"_01b.jsp" ;
         boardTitle = "공지사항-"+vUserBoardNm ; 
    } else if ( selectBoardId == '02' ) {
         boardURL = "/cm/bc/comnmgnt/boardmgnt/zz_690_"+vUserBoardNo+"_02b.jsp" ;
         boardTitle = "F.A.Q-"+vUserBoardNm ; 
    }else if ( selectBoardId == '03' ) {
         boardURL = "/cm/bc/comnmgnt/boardmgnt/zz_690_"+vUserBoardNo+"_03b.jsp" ;
         boardTitle = "Q&A-"+vUserBoardNm ; 
    }else if ( selectBoardId == '04' ) {
         boardURL = "/cm/bc/comnmgnt/boardmgnt/zz_690_"+vUserBoardNo+"_04b.jsp" ;
         boardTitle = "KDB-"+vUserBoardNm ; 
    }else if ( selectBoardId == '05' ) {
         boardURL = "/cm/bc/comnmgnt/boardmgnt/zz_690_"+vUserBoardNo+"_05b.jsp" ;
         boardTitle = "개인문의-"+vUserBoardNm ; 
    }else if ( selectBoardId == '06' ) {
         boardURL = "/cm/bc/comnmgnt/boardmgnt/zz_690_"+vUserBoardNo+"_06b.jsp" ;
         boardTitle = "사용자지침-"+vUserBoardNm ; 
    }else if ( selectBoardId == '07' ) {
         boardURL = "/cm/bc/comnmgnt/boardmgnt/zz_690_"+vUserBoardNo+"_07b.jsp" ;
         boardTitle = "회사소식-"+vUserBoardNm ;      
    }else if ( selectBoardId == '00' ) {
         jsNotice();
         obj.options[0].selected = true ;
         return ;    
    }
    obj.options[0].selected = true ;
    cfTabMenuAdd(boardURL,boardTitle);
  } 
  
  // 개인 메시지 갯수 호출 
  function f_RetrieveReceiveMessageCount() {  
    var vUserId = "<%=userId%>";
    ds_personReceiveMsgCount.DataID = "/cm.bc.comnmgnt.msgmgnt.RetrievePersonReceiveMessageCountCMD.do?userId=" + vUserId; 
    ds_personReceiveMsgCount.Reset();
  }  

</script>

<!-----------------------------------------------------------------------------
    D A T A S E T   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------>
<!-- 로그아웃  결과 정보를 얻기 위한 DataSet 선언 -->
<object id="oGDS_logout_result" classid="<%=DGauceCLSID.DATASET%>">
</object>

<!-- 개인메시지 DataSet -->
<object id="ds_personReceiveMsgCount" classid="<%=DGauceCLSID.DATASET%>">
</object>

<!-----------------------------------------------------------------------------
    G A U C E   C O M P O N E N T' S   E V E N T S  
------------------------------------------------------------------------------>
<script language="JavaScript" for="oGDS_logout_result" event="OnLoadCompleted()">
    cfAlertMsg( MSG_CM_INF_017 ) ;    
    //top.location.href = "/index_main.html" ;
    top.opener = "NOT_NULL";
    top.close();
</script>   

<script language=JavaScript for=ds_personReceiveMsgCount event=OnLoadCompleted(rowCnt)>
    // 조회된 건수를 표시한다.
    var vReceiveMsgCnt = ds_personReceiveMsgCount.NameString(1, "msgCount");

    receiveMsgCnt.innerHTML = vReceiveMsgCnt;
    txt_receiveMsgCnt.value = vReceiveMsgCnt;
</script>

</head>
<!-----------------------------------------------------------------------------
    화면영역 시작
------------------------------------------------------------------------------>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onLoad="f_OnLoad();" onUnload="f_OnUnLoad();" >
<table width="100%" height="65" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td width="1%" valign="top">
      <table width="199" height="6" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td height="15" valign="top"><img src="/common/images/top_line_orange.gif" width="183" height="3"></td>
        </tr>
        <tr>
          <% if ( "01".equals(userKind) || "90".equals(userKind)  ) { %>
          <td><img src="/common/images/dbl.gif"></td>
          <%}else if( "70".equals(userKind)  ){%>
          <td align="left" valign="bottom"><img src="/common/images/kovra_ci.gif" height="25"></td>
          <%}else{%>
          <td><img src="/common/images/cs.gif"></td>
          <%} %>
        </tr>
      </table>
    </td>
    <td width="99%" valign="top">
      <table width="100%" height="65" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td height="20" align="right">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="left" width=400><span id="survey_links"></span></td>
                <td nowrap align="left">
                  <% if ( isAdmin == 1 ) { %>
                  <a href="#" onClick="parent.menuFrame.cfMenuSelect('admin')">전체메뉴</a><font color=#F5F5F5><% out.println( DWebLogicServerRuntime.getListenIP()+":" + DWebLogicServerRuntime.getListenPort() ); %></font>
                  <% } %>   
                </td>
                <td nowrap align="right" width="*">
                  <img src="/common/images/top_line_angle.gif" width="22" height="20"><a href="javascript:jsShowBoard();" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image10','','/common/images/util_home_on.gif',1)"><img src="/common/images/util_home_off.gif" name="Image10" height="20" border="0"></a><a href="javascript:jsShowSystemBoard();" onMouseOut="MM_swapImgRestore()"    onMouseOver="MM_swapImage('Image9','','/common/images/util_notice_on.gif',1)"><img  src="/common/images/util_notice_off.gif" name="Image9"height="20" border="0"></a><a href="javascript:jsShowEnvSet();" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image7','','/common/images/util_modify_on.gif',1)"><img src="/common/images/util_modify_off.gif" name="Image7" height="20" border="0"></a><a href="javascript:jsLogout();" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image5','','/common/images/util_logout_on.gif',1)"><img src="/common/images/util_logout_off.gif" name="Image5" height="20" border="0"></a><a href="javascript:jsHelpDesk();" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image4','','/common/images/util_man_on.gif',1)"><img src="/common/images/util_man_off.gif" name="Image4"  height="20" border="0"></a><a href="javascript:jsShowInfo();" onMouseOut="MM_swapImgRestore()"><img src="/common/images/ci.gif"  width="120" height="20"></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td height="40" valign="bottom">
            <table width="100%" height="41" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td valign="bottom" style="padding-bottom:3">
                  <% if ( "01".equals(userKind) ) { %>
                  <table width="600" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <%  if ( "01".equals(userKind) ) { %>
                      <td><img src="/common/images/cs_img.gif"></td>
                      <% } %>
                      <td>
                      </td>                          
                    </tr>
                  </table>  
                  <% }  %>
                </td>
                <% if ( !"01".equals(userKind) ) { %>
                <td width="200" align="right" style=padding-right:10px>
                  [<font color="#808080"><%=clntNo%> <%=clntNm%></font>]<br>
                  <%=userNm%> <%=pstNm%>
                  <!-- a href="javascript:jsShowMessage('S');"><img src="/common/images/top_memo.gif" width="20" height="12"></a><a href="javascript:jsShowMessage('R')" class="number"><strong><span id="receiveMsgCnt"></span></strong></a>&nbsp;개<br-->
                  <%=currentDate%>
                </td>
                <% }else{ %>
                <td width="180" align="right" style=padding-right:10px><%=userNm%> <%=pstNm%>
                <!-- a href="javascript:jsShowMessage('S');"><img src="/common/images/top_memo.gif" width="20" height="12"></a><a href="javascript:jsShowMessage('R')" class="number"><strong><span id="receiveMsgCnt"></span></strong></a>&nbsp;개<br-->
                <%=currentDate%></td>
                <% } %>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
<input type="hidden" name="txt_receiveMsgCnt" value="">

</body>
</html>
