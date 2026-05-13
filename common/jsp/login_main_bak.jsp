<%@ page import="dbl.cm.fw.constants.*,dbl.cm.bc.comnmgnt.usermgnt.util.*" contentType="text/html;charset=utf-8" %> 
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.dto.LoginDTO" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.util.*" %>

<%!
/** 
* @source  : $Source: /DBL_PROJECT/DBL_PROJECT/DBL_EAR/WEB_ROOT/common/jsp/login_main.jsp,v $
* @date    : $Date: 2009/01/13 01:16:48 $
* @version : $Revision: 1.23 $
* @author  : $Author: ����� $ 
*/
%> 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>���� �Ǽ� ���� �ι� ���� �ý���</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link href="common/css/style.css" rel="stylesheet" type="text/css">

<OBJECT ID="SSOCheck" WIDTH="0" HEIGHT="0" CLASSID="CLSID:9D67EBF0-AF1A-4BCE-BAC9-C84A9383E0B3"></OBJECT>

<script language="javascript" src="/common/script/common.js"></script>
<%
LoginDTO login = LoginUtil.getLoginDTO( request ) ; // �α��� ������ �����´�.

  if ( LoginUtil.getLoginDTO(request) != null && !"csssso".equals(login.getUserId()) ) { 
%>
<script language="javascript"> 
location.href = "/main_frame.html";
</script>
<% 
  } else { 
%> 
<script language="javascript">    

  //-------------------------------------------------------------------------
  // ȭ��ε���
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
	        CapsLock.innerHTML = "�빮��";
	        
	        return;

        } else if ( ( myKeyCode >= 97 && myKeyCode <= 122 )  ) {
	        CapsLock.innerHTML = "�ҹ���";
	        return;
        } 
  
    }


  
  //-------------------------------------------------------------------------
  // �����ͼ��� ����� ����
  //-------------------------------------------------------------------------
  function f_HeaderCreate(){

	var GAUCE_DATASET_HEADER = "userId:STRING(8),passwd:STRING(12),passwdCheckCnt:INT(2)";
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
  }
  var SSO_LOGIN_YN = false ;
  
  function jsSSOLogin() {   
   var EXIST_YN = 0 ;
   try { 
      EXIST_YN = SSOCheck.IsExist("GROUP") ;
   } catch ( exception ) { 
     // ignore 
      EXIST_YN = 0 ;
   }
   
   if(EXIST_YN==1) {
   
   	 sso_wait.innerHTML = "DEBIS connect. Please wait......";
     cfShowWaitMsg();
     SSO_LOGIN_YN = true ;
     
	  var sabun = SSOCheck.GetETC("GROUP","F14");		// ���      
	  var mailaddr = SSOCheck.GetETC("GROUP","F13");	// ����� �����ּ�   
	  var username = SSOCheck.GetETC("GROUP","F2");		// ����� ��
      
      var SSO_GAUCE_DATASET_HEADER = "empNo:STRING(255),empNm:STRING(255),email:STRING(255)";
	  oGDS_ssologin.ClearAll();
      oGDS_ssologin.SetDataHeader(SSO_GAUCE_DATASET_HEADER);
      oGDS_ssologin.AddRow();
      oGDS_ssologin.NameValue(1,"empNo") = sabun ;
      oGDS_ssologin.NameValue(1,"empNm") = username ;
      oGDS_ssologin.NameValue(1,"email") = mailaddr ;
      
      //alert( oGDS_ssologin.exportData(1,1,true));
      tr_ssologin.UseChangeInfo = false ; 
      tr_ssologin.Action = "/ssologin.do";
      tr_ssologin.Post();    
   }
   else
   {
     div_ssoLogin.style.display = "block";
   }    
  }
  
  function saveidWarning() {
	  if(document.loginForm.saveid.checked) {
	  if(confirm("[����] '���̵� ����' ����� ���̵� ������ ������ ��ǻ�Ϳ� �����մϴ�.\nȤ ���� ����� ���� ����ϴ� PC��� �� ����� ������� ���ʽÿ�.\n'���̵� ����' ����� ����Ͻðڽ��ϱ�?") == false) 
	    document.loginForm.saveid.checked = false;
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

<!-- �α��� ID / PW �� �ѱ�� ���� DataSet ���� -->
<object id="oGDS_login" classid="<%=DGauceCLSID.DATASET%>">
</object>
  
<!-- �α��� ��� ������ ��� ���� DataSet ���� -->
<object id="oGDS_login_result" classid="<%=DGauceCLSID.DATASET%>">
</object>
<!-- �α��� ����   Event --> 
<script language="JavaScript" for="tr_login" event="OnSuccess()">
    //alert( oGDS_login_result.ExportData( 1 , 1 , true ));
    cfHideWaitMsg();

    if ( !SSO_LOGIN_YN ) { 
	    var userNm = oGDS_login_result.NameValue(1,"userNm") ;
	    var paramArray = new Array();
	    paramArray[0] = userNm ;
	    cfAlertMsg( MSG_CM_INF_005 , paramArray ) ;
    }
    
    // ���� �������� �̵�  
    location.href = "/main_frame.html";
   
</script>             
<script language="JavaScript" for="tr_login" event="OnFail()">  
   cfHideWaitMsg();
    
	var ERR_MSG = tr_login.ErrorMsg;
    cfShowError(tr_login);	 
    if ( ERR_MSG.indexOf("E0009") != -1) { 
       // ��� ��ȣ �Է� ������ ��� 
       // PASSWD_CHECK_CNT ++ ; 
       // alert("���̹���� �������� �ʱ� �н������ �����ID�� �����մϴ�.");      
    } else if ( ERR_MSG.indexOf("E0025") != -1) { 
      // ��� ��ȣ ���� �� ��� ��й�ȣ ���� â OPEN 
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

<!-- �α��� ID / PW �� �ѱ�� ���� DataSet ���� -->
<object id="oGDS_ssologin" classid="<%=DGauceCLSID.DATASET%>">
</object>
  
<!-- �α��� ��� ������ ��� ���� DataSet ���� -->
<object id="oGDS_ssologin_result" classid="<%=DGauceCLSID.DATASET%>">
</object>

<!-- �α��� ����   Event --> 
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
                            <td class="save"><input type="checkbox" onClick="javascript:saveidWarning();" name="saveid" value="save">ID����</td>
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
                <td width="254" align="left"><img src="/common/images/Content_titlebullet.gif" border="0" ><font size="2" color="#707070">���ǻ��׿���ó : </font>&nbsp;<font size="2" color="#208FFF"><b>02-3287-5605</b></font>&nbsp;</td>
              </tr>
            </table></td>
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
    ȭ�鿵�� ����
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
