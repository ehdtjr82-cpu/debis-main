<%@ page import="dbl.cm.fw.constants.*,dbl.cm.bc.comnmgnt.usermgnt.util.*" contentType="text/html;charset=utf-8" %> 
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.dto.LoginDTO" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.util.*" %>

<%!
/** 
* @source  : $Source: /DBL_PROJECT/DBL_PROJECT/DBL_EAR/WEB_ROOT/common/jsp/in_cr_login.jsp,v $
* @date    : $Date: 2008/08/26 09:05:33 $
* @version : $Revision: 1.7 $
* @author  : $Author: 박경석 $ 
*/
%> 

<%
	String sabun	=	request.getParameter("sabun") ==null? "" : request.getParameter("sabun") ; //포르테에서 넘어온값
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>동원로엑스 물류 통합 시스템</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<OBJECT ID="SSOCheck" WIDTH="0" HEIGHT="0" CLASSID="CLSID:9D67EBF0-AF1A-4BCE-BAC9-C84A9383E0B3"></OBJECT>
<link href="/to/in/bulk/tmlbulk/include/css.css" rel="stylesheet" type="text/css">
<script language="javascript" src="/common/script/popupdefine.js"></script>
<script language="javascript" src="/common/script/common.js"></script>
 
<script language="javascript">    

	var g_selected_input_box = "txt_userId";

  	//-------------------------------------------------------------------------
  	// 화면로딩시
  	//-------------------------------------------------------------------------
  	function f_OnLoad() {
        
        document.all.txt_userId.focus();
		
		f_HeaderCreate();  	

		jsSSOLogin();
	
  	} 
  
  	//-------------------------------------------------------------------------
  	// 데이터셋의 헤더를 설정
  	//-------------------------------------------------------------------------
  	function f_HeaderCreate(){

		var GAUCE_DATASET_HEADER = "userId:STRING(8),passwd:STRING(12),passwdCheckCnt:INT(2),authLoginYn:STRING()";
		oGDS_login.ClearAll();
		oGDS_login.SetDataHeader(GAUCE_DATASET_HEADER); 
		oGDS_login.AddRow();     
	 
  	} 
  
  	var PASSWD_CHECK_CNT = 1; 
  	
	//-------------------------------------------------------------------------
	// 
	//-------------------------------------------------------------------------  	
  	function jsLogin() { 
  
		oGDS_login.NameValue(1,"passwdCheckCnt") = PASSWD_CHECK_CNT  ;
        tr_login.UseChangeInfo = false ; 
        tr_login.Action = "/login.do";
        tr_login.Post();  
  	}
  	
  	var SSO_LOGIN_YN = false ;
  
	//-------------------------------------------------------------------------
	// 
	//-------------------------------------------------------------------------  
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
   			//sso_wait.innerHTML = "DEBIS connect. Please wait......";
   		   	cfShowWaitMsg();
     		SSO_LOGIN_YN = true ;
		    
		    if(vSabun==""){
		  		sabun = SSOCheck.GetETC("GROUP","F14");		// 사번      
		  		mailaddr = SSOCheck.GetETC("GROUP","F13");	// 사용자 메일주소   
		  		username = SSOCheck.GetETC("GROUP","F2");		// 사용자 명
      		}else{
      			sabun = vSabun ;
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

	//-------------------------------------------------------------------------
	// 
	//-------------------------------------------------------------------------
  	function jsEnterKey( ){  
    	if ( event.keyCode == 13 ) {     
      		jsLogin();
      		event.returnValue = false ;
    	}
  	}
  	
	//-------------------------------------------------------------------------
	// 
	//-------------------------------------------------------------------------
	function f_keyboard() {
    	window.showModalDialog('/to/in/bulk/tmlbulk/in_202_04_21b.jsp'
             ,window
             ,"dialogWidth:660px; dialogHeight:280px; status:No");
	}

	//-------------------------------------------------------------------------
	// 
	//-------------------------------------------------------------------------
	function f_Check(code) {
		if(code == 'txt_userId'){
			g_selected_input_box = 'txt_userId';
		} else if(code == 'txt_passwd'){	 
			g_selected_input_box = 'txt_passwd';
		}	
	}  	
  	
	//-------------------------------------------------------------------------
	// 
	//-------------------------------------------------------------------------  	
	function f_Click(code) {

	    if(g_selected_input_box == 'txt_userId'){
	    	var value = document.all.txt_userId.value;
				
			value = value + '' + code;

	    	document.all.txt_userId.value = value;
	    } else if(g_selected_input_box == 'txt_passwd'){
	    	var value = document.all.txt_passwd.value;
	    	
			value = value + '' + code;

	    	document.all.txt_passwd.value = value;
	    }				   
	}

	function f_DelClick() {
	
		if(g_selected_input_box == 'txt_userId'){
	    
	    	var value = document.all.txt_userId.value;
	    	
	    	if(value.length != 0){
	      		value = value.substring(0,value.length-1);                
	    	}     

	    	document.all.txt_userId.value=value;
		
		} else if(g_selected_input_box == 'txt_passwd'){
	    
	    	var value = document.all.txt_passwd.value;
	    	
	    	if(value.length != 0){
	      		value = value.substring(0,value.length-1);                
	    	}     
	    	
	    	document.all.txt_passwd.value=value;
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
    
    // 메인 페이지로 이동  
    location.href = "/to/in/bulk/tmlbulk/in_202_04_20b.jsp";
   
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
    
    oGDS_login.NameValue(1,"userId") = userId  ;
    oGDS_login.NameValue(1,"passwd") = decPasswd  ;

    jsLogin();
</script>             
<script language="JavaScript" for="tr_ssologin" event="OnFail()">  
   	cfHideWaitMsg();
   	cfShowError(tr_ssologin);
</script>

</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onkeyup="jsEnterKey()" onload="f_OnLoad()"  scroll="no" > 
<table width="1024" border="0" cellspacing="0" cellpadding="0">
	<tr>
    	<td height="39"><img src="/to/in/bulk/tmlbulk/images/top_title.gif"></td>
  	</tr>
</table>
<!--로그인화면 시작 -->
<table width="1024" border="0" cellspacing="0" cellpadding="0">
  	<tr>
    	<td height="561" valign="top" background="/to/in/bulk/tmlbulk/images/main_bg.jpg">
    		<table width="1024" border="0" cellspacing="0" cellpadding="0">
      			<tr>
        			<td width="741" height="528" valign="top" style="padding-top:92px;padding-left:117px;">
        				<table width="534" border="0" cellspacing="0" cellpadding="0">
          					<tr>
            					<td height="161" valign="top">
            						<img src="/to/in/bulk/tmlbulk/images/title_login.gif" width="534" height="81">
            					</td>
            				</tr>
          					<tr>
            					<td height="117">
            					<!-- 아이디 비밀번호 입력 -->
            						<table width="534" border="0" cellspacing="0" cellpadding="0">
              							<tr>
                							<td width="125" height="65">
                								<img src="/to/in/bulk/tmlbulk/images/title_id.gif" width="96" height="25">
                							</td>
                							<td width="232">
                								<input type="text" class="input-eng48" id="txt_userId" style="width:215px" onfocus="f_Check('txt_userId');">
                							</td>
                							<td width="177" rowspan="2" align="right">
                								<img src="/to/in/bulk/tmlbulk/images/btn_login.gif" width="177" height="128" onclick="jsLogin()">
                							</td>
              							</tr>
              							<tr>
                							<td height="65">
                								<img src="/to/in/bulk/tmlbulk/images/title_pw.gif" width="118" height="25">
                							</td>
                							<td>
                								<input type="text" class="input-eng48" id="txt_passwd" onfocus="f_Check('txt_passwd');" style="width:215px">
                							</td>
                						</tr>
            						</table>
            					</td>
          					</tr>
        				</table>
        			</td>
        			<td width="283" valign="top" style="padding-top:50px;">
        				<!-- 입력버튼 -->
        				<table width="214" border="0" cellspacing="0" cellpadding="0">
          					<tr>
            					<td width="102" height="80" valign="top">
            						<img src="/to/in/bulk/tmlbulk/images/btn_1.gif" width="102" height="72" onclick="f_Click(1)" style='cursor:hand'>
            					</td>
            					<td align="right" valign="top">
            						<img src="/to/in/bulk/tmlbulk/images/btn_2.gif" width="102" height="72" onclick="f_Click(2)" style='cursor:hand'>
            					</td>
          					</tr>
          					<tr>
            					<td height="80" valign="top">
            						<img src="/to/in/bulk/tmlbulk/images/btn_3.gif" width="102" height="72" onclick="f_Click(3)" style='cursor:hand'>
            					</td>
            					<td align="right" valign="top">
            						<img src="/to/in/bulk/tmlbulk/images/btn_4.gif" width="102" height="72" onclick="f_Click(4)" style='cursor:hand'>
            					</td>
          					</tr>
          					<tr>
            					<td height="80" valign="top">
            						<img src="/to/in/bulk/tmlbulk/images/btn_5.gif" width="102" height="72" onclick="f_Click(5)" style='cursor:hand'>
            					</td>
            					<td align="right" valign="top">
            						<img src="/to/in/bulk/tmlbulk/images/btn_6.gif" width="102" height="72" onclick="f_Click(6)" style='cursor:hand'>
            					</td>
          					</tr>
          					<tr>
            					<td height="80" valign="top">
            						<img src="/to/in/bulk/tmlbulk/images/btn_7.gif" width="102" height="72" onclick="f_Click(7)" style='cursor:hand'>
            					</td>
            					<td align="right" valign="top">
            						<img src="/to/in/bulk/tmlbulk/images/btn_8.gif" width="102" height="72" onclick="f_Click(8)" style='cursor:hand'>
            					</td>
          					</tr>
          					<tr>
            					<td height="80" valign="top">
            						<img src="/to/in/bulk/tmlbulk/images/btn_9.gif" width="102" height="72" onclick="f_Click(9)" style='cursor:hand'>
            					</td>
            					<td align="right" valign="top">
            						<img src="/to/in/bulk/tmlbulk/images/btn_0.gif" width="102" height="72" onclick="f_Click(0)" style='cursor:hand'>
            					</td>
          					</tr>
          					<tr>
            					<td height="80" colspan="2" valign="top">
            						<img src="/to/in/bulk/tmlbulk/images/btn_del.gif" width="214" height="72" onclick="f_DelClick()" style='cursor:hand'>
            					</td>
            				</tr>
        				</table>
        			</td>
      			</tr>
		    </table>
	    </td>
  	</tr>
</table>

<input type="hidden" id="txt_vehclNo">
<input type="hidden" id="txt_rsltsQty">

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

</body>
</html>