<%@ page import="dbl.cm.fw.constants.*,dbl.cm.bc.comnmgnt.usermgnt.util.*" contentType="text/html;charset=utf-8" %> 
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.dto.LoginDTO" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.util.*" %>

<%!
/** 
* @source  : $Source: /CVS/cvs/cvsrepo/DBL_PROJECT/DBL_EAR/WEB_ROOT/common/jsp/pda_coil_login.jsp,v $
* @date    : $Date: 2013/10/08 02:13:26 $
* @version : $Revision: 1.8 $
* @author  : $Author: ryr8128 $ 
*/
%> 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>동원로엑스 코일관리 시스템</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<OBJECT ID="SSOCheck" WIDTH="0" HEIGHT="0" CLASSID="CLSID:9D67EBF0-AF1A-4BCE-BAC9-C84A9383E0B3"></OBJECT>
<LINK HREF="/common/css/tocommon.css" REL="STYLESHEET" type="TEXT/CSS">
<script language="javascript" src="/common/script/popupdefine.js"></script>
<script language="javascript" src="/common/script/common.js"></script>
<%
LoginDTO login = LoginUtil.getLoginDTO( request ) ; // 로그인 정보를 가져온다.

String sabun	=	request.getParameter("sabun") ==null? "" : request.getParameter("sabun") ; //포르테에서 넘어온값

String userId = "";
  if(LoginUtil.getLoginDTO(request) != null){
      userId = login.getUserId();    
  }

  if("9".equals(userId)||"8".equals(userId)){
%>
<script language="javascript"> 
location.href = "/cap/op/cap_100_04_01b.jsp"; 
</script>
<% 
  }else if ("11".equals(userId)||"12".equals(userId)) { 
%>
<script language="javascript"> 
location.href = "/ds/tp/specialsteel/tp_801_01_01b.jsp"; 
</script>
<% 
  }else if ( LoginUtil.getLoginDTO(request) != null && !"csssso".equals(login.getUserId()) ) { 
%>
<script language="javascript"> 
location.href = "/ds/op/wrkrslts/stvwrkrslts/op_306_11_01b.jsp"; 
</script>
<% 
  } else { 
%> 
<script language="javascript">    

  //-------------------------------------------------------------------------
  // 화면로딩시
  //-------------------------------------------------------------------------
  function f_OnLoad() {
  
        
	f_HeaderCreate();  	

	jsSSOLogin();
	
  } 


  
  //-------------------------------------------------------------------------
  // 데이터셋의 헤더를 설정
  //-------------------------------------------------------------------------
  function f_HeaderCreate(){

	var GAUCE_DATASET_HEADER = "userId:STRING(8),passwd:STRING(12),passwdCheckCnt:INT(2),passwdCheckCnt:INT(2),authLoginYn:STRING()";
	oGDS_login.ClearAll();
	oGDS_login.SetDataHeader(GAUCE_DATASET_HEADER); 
	oGDS_login.AddRow();     
	 
  } 
  
  var PASSWD_CHECK_CNT = 1; 
  function jsLogin() { 
  
  	     oGDS_login.NameValue(1,"passwdCheckCnt") = PASSWD_CHECK_CNT  ;
         tr_login.UseChangeInfo = false ; 
         tr_login.Action = "/login.do";
         tr_login.Post();  
  }
  var SSO_LOGIN_YN = false ;
  
  function jsSSOLogin() {  
	var vSabun = "<%=sabun%>"; 
	var sabun = ""; 
	var mailaddr ="";
	var username ="";
	var EXIST_YN = 0 ;
	
	if(vSabun != ""){
		EXIST_YN = 1;
	}else{
		try { 
		   EXIST_YN = SSOCheck.IsExist("GROUP") ;
		} catch ( exception ) { 
		  // ignore 
		   EXIST_YN = 0 ;
		}
   }
   
   if(EXIST_YN==1) {
   
		sso_wait.innerHTML = "DEBIS connect. Please wait......";
		cfShowWaitMsg();
		SSO_LOGIN_YN = true ;
	     
		if(vSabun==""){
			sabun = SSOCheck.GetETC("GROUP","F14");		// 사번      
			mailaddr = SSOCheck.GetETC("GROUP","F13");	// 사용자 메일주소   
			username = SSOCheck.GetETC("GROUP","F2");		// 사용자 명
		}else{
			sabun = vSabun;
		} 
		
		var SSO_GAUCE_DATASET_HEADER = "empNo:STRING(255),empNm:STRING(255),email:STRING(255)";
		oGDS_ssologin.ClearAll();
		oGDS_ssologin.SetDataHeader(SSO_GAUCE_DATASET_HEADER);
		oGDS_ssologin.AddRow();
		oGDS_ssologin.NameValue(1,"empNo") = sabun ;
		oGDS_ssologin.NameValue(1,"empNm") = username ;
		oGDS_ssologin.NameValue(1,"email") = mailaddr ;
		
		if(vSabun == ""){
			oGDS_ssologin.NameValue(1,"authLoginYn") = "1" ;
		}else{
			oGDS_ssologin.NameValue(1,"authLoginYn") = "0" ;
		}
				
		tr_ssologin.UseChangeInfo = false ; 
		tr_ssologin.Action = "/ssologin.do";
		tr_ssologin.Post();    
	} 
  }
  

  function jsEnterKey( ){  
    if ( event.keyCode == 13 ) {     
      jsLogin();
      event.returnValue = false ;
    }
  }
</script>

<object id="tr_login" classid="<%=DGauceCLSID.TR%>">
  <param name="KeyName" value="toinb_dataid4">
  <param name="KeyValue" value="Servlet(I:IN_GDS1=oGDS_login,O:OUT_GDS1=oGDS_login_result)">      
</object>   

<!-- 로그인 ID / PW 를 넘기기 위한 DataSet 선언 -->
<object id="oGDS_login" classid="<%=DGauceCLSID.DATASET%>">
</object>
  
<!-- 로그인 결과 정보를 얻기 위한 DataSet 선언 -->
<object id="oGDS_login_result" classid="<%=DGauceCLSID.DATASET%>">
</object>
<!-- 로그인 정보   Event --> 
<script language="JavaScript" for="tr_login" event="OnSuccess()">
    //alert( oGDS_login_result.ExportData( 1 , 1 , true ));
    cfHideWaitMsg();

    if ( !SSO_LOGIN_YN ) { 
	    var userNm = oGDS_login_result.NameValue(1,"userNm") ;
	    var paramArray = new Array();
	    paramArray[0] = userNm ;
	    cfAlertMsg( MSG_CM_INF_005 , paramArray ) ;
    }
    
    if(oGDS_login.NameValue(1, "userId" )=="9"||oGDS_login.NameValue(1, "userId" )=="8"){
	    // 메인 페이지로 이동  
	    location.href = "/cap/op/cap_100_04_01b.jsp";
	}else if(oGDS_login.NameValue(1, "userId" )=="11"||oGDS_login.NameValue(1, "userId" )=="12"){
	    // 메인 페이지로 이동  
	    location.href = "/ds/tp/specialsteel/tp_801_01_01b.jsp";
	}else{
		// 메인 페이지로 이동  
	    location.href = "/ds/op/wrkrslts/stvwrkrslts/op_306_11_01b.jsp";
	}
   
</script>             
<script language="JavaScript" for="tr_login" event="OnFail()">  
   cfHideWaitMsg();
    
	var ERR_MSG = tr_login.ErrorMsg;
    cfShowError(tr_login);	 
    if ( ERR_MSG.indexOf("E0009") != -1) { 
       // 비밀 번호 입력 오류인 경우 
       // PASSWD_CHECK_CNT ++ ; 
       // alert("사이버운송 고객분의 초기 패스워드는 사용자ID와 동일합니다.");      
    } else if ( ERR_MSG.indexOf("E0025") != -1) { 
      // 비밀 번호 변경 인 경우 비밀번호 변경 창 OPEN 
  	  var width = 500; 
	  var height = 200; 	 
   	  var left = (screen.availWidth - width) / 2;
	  var top = (screen.availHeight - height) / 2;
	  var forwardPage = "/cm/bc/comnmgnt/usermgnt/zz_620_01_04b.jsp?FROM_LOGIN=TRUE&userId="+document.loginForm.txt_userId.value ;
      var passPopUpWin = window.open(forwardPage,"PASSWORD_CHANGE", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top ) ;
      passPopUpWin.focus();  	   
	}   

</script>

<object id="tr_ssologin" classid="<%=DGauceCLSID.TR%>">
  <param name="KeyName" value="toinb_dataid4">
  <param name="KeyValue" value="Servlet(I:IN_GDS1=oGDS_ssologin,O:OUT_GDS1=oGDS_ssologin_result)">      
</object>  

<!-- 로그인 ID / PW 를 넘기기 위한 DataSet 선언 -->
<object id="oGDS_ssologin" classid="<%=DGauceCLSID.DATASET%>">
</object>
  
<!-- 로그인 결과 정보를 얻기 위한 DataSet 선언 -->
<object id="oGDS_ssologin_result" classid="<%=DGauceCLSID.DATASET%>">
</object>

<!-- 로그인 정보   Event --> 
<script language="JavaScript" for="tr_ssologin" event="OnSuccess()">
    //alert( oGDS_ssologin_result.ExportData( 1 , 1 , true ));
    var userId = oGDS_ssologin_result.NameValue(1,"userId") ;
    var decPasswd = oGDS_ssologin_result.NameValue(1,"decPasswd") ;
    document.loginForm.txt_userId.value = userId; 
	document.loginForm.txt_passwd.value = decPasswd; 
    jsLogin();
</script>             
<script language="JavaScript" for="tr_ssologin" event="OnFail()">  
   cfHideWaitMsg();
   cfShowError(tr_ssologin);
</script>
  

<style type="text/css">
<!--
.save {
	font-family: "dotum";
	font-size: 11px;
	color: #666666;
}
.input01{	
    border-color: #C0C4C7; 
	background-color: #ffffff;  
	border-style: solid; 
	border-top-width: 1px; 
	border-right-width: 1px; 
	border-bottom-width: 1px; 
	border-left-width: 1px;  
	font-family:  dotum, verdana, helvetica, arial;
	font-size:9pt;
	color:#555555;
	padding-left:5px; padding-top:2px; padding-bottom:0px;}
-->
</style>

</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onkeyup="jsEnterKey()" onload="f_OnLoad()"  scroll="no" > 
<form name="loginForm">
<table width="230" height="299"  border="1" cellspacing="0" cellpadding="0" >
  <tr> 
    <td align="center" valign="top">
      <!-- 타이틀영역 -->
      <table width="100%"  height="10%" border="0" cellpadding="0" cellspacing="0" bgcolor="32cd32">
        <tr>
          <td>&nbsp;
          	<span class="title_default">동부익스프레스(주) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          	<INPUT id=btn_cancel type=button style="width:15;height=15;border-style=ridge;border-width=0;;font-size=15;" onclick="window.close;" value="X">
          	
          </td>
         
        </tr>
        <tr>
          <td  height="40%" background="/common/images/title_back_line01.gif"><font color=blue size=0><span id="sso_wait"></span></font></td>
          
          
        </tr>
      </table>
      <!-- 타이틀영역 end -->
      <!-- 데이타영역 -->
      <table width="100%"  height="80%" cellpadding="0" cellspacing="0" border="0" >
        <tr> 
          <td height="25%" align="center" style="font-size=15;font-weight=bolder;">
          	동부익스프레스PDA시스템
 	      </td>
 	    </tr>
 	    <tr>
		   <td height="20%" align="right">
		    	Ver 1.0 &nbsp; 
		   </td> 	
	   </tr> 	    
 	    <tr>
		   <td height="10%" align="center" style="font-size=15;font-weight=bolder;">
				아  이  디&nbsp;:&nbsp; <input TYPE="text" class=input_text id="txt_userId"  style="width:70;height=20;border-style=ridge;border-width=1;;font-size=15;">
		   </td> 	
	   </tr>	         
 	    <tr>
		   <td height="10%" align="center" style="font-size=15;font-weight=bolder;">
				비밀번호&nbsp;: <input TYPE="text" class=input_text id="txt_passwd" style="width:70;height=20;border-style=ridge;border-width=1;;font-size=15;">
		   </td> 	
	   </tr>
 	    <tr>
		   <td height="30%" align="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		   <a href="javascript:jsLogin();"><img tabIndex="-1" src="/common/images/login_bt.gif" width="100" height="47" border="0"></a>
		   </td> 	
	   </tr>	  	   	   
 	  </table>
      <table width="100%"  height="10%" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td  height="10%" background="/common/images/title_back_line01.gif"></td>
        </tr>   
        <tr>     
          <td><img src="/common/images/Content_titlearrow.gif" align="absmiddle">&nbsp;
          	<span class="title_default">PDA </span>
          </td>
        </tr>
      </table>  	  
 	</td>
  </tr>
</table>
</form>
<!-----------------------------------------------------------------------------
    화면영역 종료
------------------------------------------------------------------------------>

<!-----------------------------------------------------------------------------
      B I N D   C O M P O N E N T S   D E F I N I T I O N
------------------------------------------------------------------------------>
<object id=mBind classid="<%=DGauceCLSID.BIND%>">
  	<param name=DataID    value=oGDS_login>
	<param name="BindInfo" value='
	    <C> Col=userId             Ctrl=txt_userId         Param=value   </C>
	    <C> Col=passwd             Ctrl=txt_passwd         Param=value   </C> 
	'> 
</object>
  <%}%>
</body>
</html>