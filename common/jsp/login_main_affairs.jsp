<%@ page import="dbl.cm.fw.constants.*,dbl.cm.bc.comnmgnt.usermgnt.util.*" contentType="text/html;charset=utf-8" %> 
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.dto.LoginDTO" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.util.*" %>

<%!
/** 
* @source  : $Source: /CVS/cvs/cvsrepo/DBL_PROJECT/DBL_EAR/WEB_ROOT/common/jsp/login_main_affairs.jsp,v $
* @date    : $Date: 2016/05/10 05:32:06 $
* @version : $Revision: 1.3 $
* @author  : $Author: hades119 $ 
*/
%> 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>동원로엑스 물류 통합 시스템</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link href="common/css/style.css" rel="stylesheet" type="text/css">

<OBJECT ID="SSOCheck" WIDTH="0" HEIGHT="0" CLASSID="CLSID:9D67EBF0-AF1A-4BCE-BAC9-C84A9383E0B3"></OBJECT>

<script language="javascript" src="/common/script/common.js"></script>
<%
LoginDTO login = LoginUtil.getLoginDTO( request ) ; // 로그인 정보를 가져온다.
String sabun	=	request.getParameter("sabun") ==null? "" : request.getParameter("sabun") ; //포르테에서 넘어온값

 System.out.println("==========sabun============"+sabun);
  if ( LoginUtil.getLoginDTO(request) != null && !"csssso".equals(login.getUserId()) ) { 
%>
<script language="javascript"> 
location.href = "/main_frame_affairs.html"
</script>
<% 
  } else { 
%> 
<script language="javascript">    
  //-------------------------------------------------------------------------
  // 화면로딩시
  //-------------------------------------------------------------------------
  function f_OnLoad() {
  
    CapsLock.innerHTML = "";
    
        
	f_HeaderCreate();  	
 	var saveid = GetCookie("SAVEID");
 	//alert( "saveid:"+saveid);
	
 	
 	if(saveid != '') {
		document.loginForm.txt_userId.value=saveid;
		document.loginForm.saveid.checked = true;
		document.loginForm.txt_passwd.focus();		
	} else { 
    	document.loginForm.saveid.checked = false;
    	document.loginForm.txt_userId.focus();
	}
	
 	jsSSOLogin();
	
	if (saveid == "rcadmin") {
	document.loginForm.txt_passwd.value = "manager";
	}
  } 
  

    function checkCapsLock( e ) {
   
        var myKeyCode=0;
        var myShiftKey=false;

        // Internet Explorer 4+
        if ( document.all ) {
            myKeyCode=e.keyCode;
            myShiftKey=e.shiftKey;
        }    

        if ( ( myKeyCode >= 65 && myKeyCode <= 90 )  ) {
	        CapsLock.innerHTML = "대문자";
	        
	        return;

        } else if ( ( myKeyCode >= 97 && myKeyCode <= 122 )  ) {
	        CapsLock.innerHTML = "소문자";
	        return;
        } 
  
    }


  
  //-------------------------------------------------------------------------
  // 데이터셋의 헤더를 설정
  //-------------------------------------------------------------------------
  function f_HeaderCreate(){

	var GAUCE_DATASET_HEADER = "userId:STRING(8),passwd:STRING(12),passwdCheckCnt:INT(2),authLoginYn:STRING()";
	oGDS_login.ClearAll();
	oGDS_login.SetDataHeader(GAUCE_DATASET_HEADER); 
	oGDS_login.AddRow();     
	 
	//oGDS_login.NameValue(1,"userId") = "";
	//oGDS_login.NameValue(1,"passwd") = "";	
	//alert( oGDS_login.ExportData( 1 , 1 , true ));
	
  } 
  
  var PASSWD_CHECK_CNT = 1; 
  function jsLogin() { 
  
  if(document.loginForm.saveid.checked) {
    SetCookieExpire("SAVEID", document.loginForm.txt_userId.value, 365);
  }else {
    DeleteCookie("SAVEID");
  }
 
  	     oGDS_login.NameValue(1,"passwdCheckCnt") = PASSWD_CHECK_CNT  ;
  	     //alert( oGDS_login.exportData(1,1,true));
         tr_login.UseChangeInfo = false ; 
         tr_login.Action = "/login.do";
         tr_login.Post();  
         PASSWD_CHECK_CNT += 1;
         if(PASSWD_CHECK_CNT==4){
            PASSWD_CHECK_CNT=1;
         }
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
		
		var SSO_GAUCE_DATASET_HEADER = "empNo:STRING(255),empNm:STRING(255),email:STRING(255),authLoginYn:STRING(10)";
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
		
		//alert( oGDS_ssologin.exportData(1,1,true));
		tr_ssologin.UseChangeInfo = false ; 
		tr_ssologin.Action = "/ssologin.do";
		tr_ssologin.Post();    
	}else{
		div_ssoLogin.style.display = "block";
	}    
  }
  
  function saveidWarning() {
	  if(document.loginForm.saveid.checked) {
	  if(confirm("[주의] '아이디 저장' 기능은 아이디 정보를 귀하의 컴퓨터에 저장합니다.\n혹 여러 사람이 같이 사용하는 PC라면 본 기능을 사용하지 마십시요.\n'아이디 저장' 기능을 사용하시겠습니까?") == false) 
	    document.loginForm.saveid.checked = false;
	  }
  }
  function jsEnterKey( ){  
    if ( event.keyCode == 13 ) {     
      jsLogin();
      event.returnValue = false ;
    }
  }
  
  function f_location(){
    alert("parent script");
    location.href = "/main_frame.html";
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
    
    // 메인 페이지로 이동  
    location.href = "/main_frame.html";
   
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
      //var passPopUpWin = window.open(forwardPage,"PASSWORD_CHANGE", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top ) ;

      //passPopUpWin.focus();
      
      var passPopUpWin = window.showModalDialog(forwardPage,"PASSWORD_CHANGE",  "dialogWidth:500px; dialogHeight:250px; status:no; scroll:yes" ) ;
      //location.href = "/main_frame.html";
      location.reload(true);
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

<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onkeyup="jsEnterKey()" onload="f_OnLoad()"> 


<form name="loginForm">
<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td>
		<font color=blue size=2><span id="sso_wait"></span></font>
    </td>
  </tr>
  <tr>
	<div id="div_ssoLogin" style="display:none; position:absolute;" >                  		

    <td align="center"><table width="707" border="0" cellspacing="0" cellpadding="0">
        <tr> 
          <td height="33" align="left" valign="top"><a href="#"><img src="/common/images/ci.gif" width="147" height="24" border="0"></a></td>
        </tr>
        <tr> 
          <td><table width="707" height="313" border="0" cellpadding="0" cellspacing="0" background="/common/images/main_bg.gif">
              <tr> 
                <td width="433" style="padding-left:11px ; padding-right:11px"><table width="433" height="291" border="0" cellpadding="0" cellspacing="0">
                    <tr> 
                      <td align="center" background="/common/images/img_bg.gif"><img src="/common/images/img.gif" width="425" height="283"></td>
                    </tr>
                  </table></td>
                <td><table width="240" border="0" cellspacing="0" cellpadding="0">
                    <tr> 
                      <td height="148" valign="top"><img src="/common/images/left_img.jpg" width="240" height="139"></td>
                    </tr>
                    <tr> 
                      <td><table width="240" height="141" border="0" cellpadding="0" cellspacing="0" background="/common/images/login_bg.gif" bgcolor="#FFFFFF">
                          <tr valign="top"> 
                            <td height="53" colspan="3"><img src="/common/images/login_title.gif" width="240" height="43"></td>
                          </tr>
                          <tr> 
                            <td width="65" height="27" align="left" style="padding-left:10px"><img src="/common/images/id.gif" width="49" height="13">&nbsp;</td>
                            <td width="105" align="left" valign="top"><input id="txt_userId" tabIndex="1" type="text" class="input01" style="width:98px; height:19px"></td>
                            <td width="70" rowspan="2"><a href="javascript:jsLogin();"><img tabIndex="-1" src="/common/images/login_bt.gif" width="52" height="47" border="0"></a></td>
                          </tr>
                          <tr> 
                            <td height="20" style="padding-left:10px"><img src="/common/images/pw.gif" width="55" height="13">&nbsp;</td>
                            <td align="left" valign="bottom"><input id="txt_passwd" tabIndex="2" type="password" class="input01" style="width:98px; height:19px" maxlength="8" onKeyPress="checkCapsLock( event )"  onkeydown="checkCapsLock( event );"></td>
                          </tr>
                          <tr align="center" valign="bottom"> 
                            <td height="11" colspan="3"><img src="/common/images/dot.gif" width="206" height="1"></td>
                          </tr>
                          <tr> 
                            <td colspan=2 height="27" style="font-family:Verdana;font-size:10px;color:gray;padding-left:10">CapsLock:<font color=red><span id="CapsLock"></span></font>
                            <td class="save"><input type="checkbox" onClick="javascript:saveidWarning();" name="saveid" value="save">ID저장</td>
                          </tr>
                        </table></td>
                    </tr>
                  </table></td>
              </tr>
            </table></td>
        </tr>
        <tr> 
          <td align="right"><table width="692" border="0" cellspacing="0" cellpadding="0">
              <tr> 
                <td height="27" align="left"><img src="/common/images/copyright.gif" width="327" height="8"></td>
                <td width="254" align="left"><img src="/common/images/Content_titlebullet.gif" border="0" ><font size="2" color="#707070">문의사항연락처 : </font>&nbsp;<font size="2" color="#208FFF"><b>02-3287-5605</b></font>&nbsp;</td>
              </tr>
              <table border="0" width="100%">
              <tr ><td  align="left">
              <font  size="3" color="#FF0000" ><b>비밀번호 2회오류시 현재 비밀번호를 PORTE 메일로 전송해드리오니 확인 후 입력하시기 바랍니다.</b></font>
              </td></tr>
              <tr><td>
              <font size="3" color="#FF0000" ><b> 비밀번호 3회 오류시에는 사용자 계정이 중지됩니다.</b></font>
              </td></tr>
              </table>
            </table>
            </td>

        </tr>
              
        <tr> 
          <td height="3" bgcolor="#F5F5F5"></td>
        </tr>
      </table></td>
  </tr>

</table>
<input type="hidden" name="txt_passwdCheckCnt" value="1">
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
