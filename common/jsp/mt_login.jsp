<%@ page import="dbl.cm.fw.constants.*,dbl.cm.bc.comnmgnt.usermgnt.util.*" contentType="text/html;charset=utf-8" %> 
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.dto.LoginDTO" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.util.*" %>

<%!
/** 
* @source  : $Source: /DBL_PROJECT/DBL_PROJECT/DBL_EAR/WEB_ROOT/common/jsp/mt_login.jsp,v $
* @date    : $Date: 2010/10/08 00:17:35 $
* @version : $Revision: 1.10 $
* @author  : $Author: 전영훈 $ 
*/
%> 

<%
	String sabun	=	request.getParameter("sabun") ==null? "" : request.getParameter("sabun") ; //포르테에서 넘어온값
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>동원로엑스 구내 물류 시스템</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<OBJECT ID="SSOCheck" WIDTH="0" HEIGHT="0" CLASSID="CLSID:9D67EBF0-AF1A-4BCE-BAC9-C84A9383E0B3"></OBJECT>
<link href="/mt/al/eqatmt/include/css.css" rel="stylesheet" type="text/css">

<link rel="stylesheet" type="text/css" media="all" href="/jQuery/sexyalertbox.css"/>
<script type="text/javascript" src="/jQuery/jquery.min.js"></script>
<script type="text/javascript" src="/jQuery/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="/jQuery/sexyalertbox.v1.2.jquery.js"></script>

<script language="javascript" src="/common/script/popupdefine.js"></script>
<script language="javascript" src="/common/script/common.js"></script>
<script language="javascript" src="/mt/al/eqatmt/common/mtCommon.js"></script>
 
<script language="javascript">    
	var g_selected_input_box = "txt_userId";

  	//-------------------------------------------------------------------------
  	// 화면로딩시
  	//-------------------------------------------------------------------------
  	function f_OnLoad() {
  	    document.all.txt_userId.focus();
		
		f_HeaderCreate();  	

	    var saveEqCd = GetCookie("SAVE_EQ_CD");
	    //alert( "saveid:"+saveid);
	    if(saveEqCd != '') {
	        document.all.txt_eqCd.value=saveEqCd;
	        document.all.saveEqCd.checked = true;
	        document.all.txt_userId.focus();
	    } else { 
	        document.all.saveEqCd.checked = false;
	        document.all.txt_userId.focus();
	    }
    
		//jsSSOLogin();
	
  	} 
  
  	//-------------------------------------------------------------------------
  	// 데이터셋의 헤더를 설정
  	//-------------------------------------------------------------------------
  	function f_HeaderCreate(){

		var GAUCE_DATASET_HEADER = "userId:STRING(8),passwd:STRING(12),passwdCheckCnt:INT(2),eqCd:STRING(6),authLoginYn:STRING()";
		oGDS_login.ClearAll();
		oGDS_login.SetDataHeader(GAUCE_DATASET_HEADER); 
		oGDS_login.AddRow();     
	    
	    oGDS_login.NameValue(1,"passwd") = "a1245";
  	} 
  
  	var PASSWD_CHECK_CNT = 1; 
  	
	//-------------------------------------------------------------------------
	// 
	//-------------------------------------------------------------------------  	
  	function jsLogin() {
  	    f_twinkleBtn("login",0); 
		if(cfIsNull(txt_eqCd.value.trim())){
            //alert("장비코드는 필수입니다.");
            Sexy.alert('<br><font style="font-size:30px;font-weight:bold;font-family:굴림;">장비코드는 필수입니다.</font>');
            txt_eqCd.focus();
            return;
        }
        
		if(document.all.saveEqCd.checked) {
            SetCookieExpire("SAVE_EQ_CD", document.all.txt_eqCd.value, 365);
		}else {
            DeleteCookie("SAVE_EQ_CD");
		}  
		
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
     
	  		var sabun = SSOCheck.GetETC("GROUP","F14");		// 사번      
	  		var mailaddr = SSOCheck.GetETC("GROUP","F13");	// 사용자 메일주소   
	  		var username = SSOCheck.GetETC("GROUP","F2");		// 사용자 명
      
      		var SSO_GAUCE_DATASET_HEADER = "empNo:STRING(255),empNm:STRING(255),email:STRING(255)";
	  		oGDS_ssologin.ClearAll();
      		oGDS_ssologin.SetDataHeader(SSO_GAUCE_DATASET_HEADER);
      		oGDS_ssologin.AddRow();
      		oGDS_ssologin.NameValue(1,"empNo") = sabun ;
      		oGDS_ssologin.NameValue(1,"empNm") = username ;
      		oGDS_ssologin.NameValue(1,"email") = mailaddr ;
      
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
		} else if(code == 'txt_eqCd'){  
            g_selected_input_box = 'txt_eqCd';
        }
	}  	
  	
	//-------------------------------------------------------------------------
	// 
	//-------------------------------------------------------------------------  	
	function f_Click(code) {
       f_twinkleBtn(code,80);
       
       if(g_selected_input_box == 'txt_userId'){
	        if(document.all.txt_userId.value.length == 6){ //사번은 6자리
	           return;
	        }
	    	var value = document.all.txt_userId.value;
				
			value = value + '' + code;

	    	document.all.txt_userId.value = value;
	    } else if(g_selected_input_box == 'txt_passwd'){
	    	var value = document.all.txt_passwd.value;
	    	
			value = value + '' + code;

	    	document.all.txt_passwd.value = value;
	    } else if(g_selected_input_box == 'txt_eqCd'){
	        if(document.all.txt_eqCd.value.length == 6){ //장비코드 6자리
               return;
            }
            var value = document.all.txt_eqCd.value;
            
            value = value + '' + code;

            document.all.txt_eqCd.value = value;
        }   				   
	}
	
	function f_twinkleBtn(code,time){
	    if(time=="" || time==null) time = 100;
        f_Btn1(code);
        setTimeout("f_Btn2('"+code+"')", time);
	}
	
	function f_Btn1(code){
	   var clickImg =  "/mt/al/eqatmt/images/btn_"+code+"_over.gif";
       eval("btn_"+code).src = "/mt/al/eqatmt/images/btn_"+code+"_over.gif";
	}
	
	function f_Btn2(code){
	   var clickImg =  "/mt/al/eqatmt/images/btn_"+code+".gif";
       eval("btn_"+code).src = "/mt/al/eqatmt/images/btn_"+code+".gif";
	}

	function f_DelClick() {
        f_twinkleBtn("del");
        	
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
		} else if(g_selected_input_box == 'txt_eqCd'){
        
            var value = document.all.txt_eqCd.value;
            
            if(value.length != 0){
                value = value.substring(0,value.length-1);                
            }     
            
            document.all.txt_eqCd.value=value;
        }        	
	}  	
  	
	function saveidWarning() {
		if(document.all.saveEqCd.checked) {
            if(!confirm("[주의] '아이디 저장' 기능은 아이디 정보를 귀하의 컴퓨터에 저장합니다.\n혹 여러 사람이 같이 사용하는 PC라면 본 기능을 사용하지 마십시요.\n'아이디 저장' 기능을 사용하시겠습니까?")){ 
                document.all.saveEqCd.checked = false;
		    }
		}
	}
	
	function f_saveEqCdCheck(){
	   if(document.all.saveEqCd.checked) {
	       document.all.saveEqCd.checked = false;
	   }else{
	       document.all.saveEqCd.checked = true;
	   }     
	}
	
    function f_GoBg(){      //바탕화면 창 띄우기
        window.open("popupBG.jsp","popup","width=1024,height=768 scrollbars=yes"); 
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
	    //cfAlertMsg( MSG_CM_INF_005 , paramArray ) ;
	    Sexy.info('<br><font size=30>'+paramArray[0]+'님 안녕하세요?</font>',{onComplete: 
	       function(returnvalue) { 
		       if(returnvalue)
	           {
		          location.href = "/mt/al/eqatmt/uc_mt_301_01_03b.jsp";
		       }
	       }
        });
    }
    
    // 메인 페이지로 이동  
    //location.href = "/to/in/bulk/tmlbulk/in_202_04_20b.jsp";
    //location.href = "/mt/al/eqatmt/uc_mt_301_01_03b.jsp";
   
</script>             
<script language="JavaScript" for="tr_login" event="OnFail()">  
   	cfHideWaitMsg();
    
	var ERR_MSG = tr_login.ErrorMsg;
    cfShowErrorMt(tr_login);	 
    
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
   	cfShowErrorMt(tr_ssologin);
</script>

</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onkeyup="jsEnterKey()" onload="f_OnLoad()"  scroll="no" > 
<table width="1024" border="0" cellspacing="0" cellpadding="0">
	<tr>
    	<td height="65"><img src="/mt/al/eqatmt/images/top_title.gif"></td>
  	</tr>
</table>
<!--로그인화면 시작 -->
<table width="1024" border="0" cellspacing="0" cellpadding="0">
  	<tr>
    	<td height="569" valign="top" background="/mt/al/eqatmt/images/main_bg.gif">
    		<table width="1024" border="0" cellspacing="0" cellpadding="0">
      			<tr>
        			<td width="550" height="528" valign="top" style="padding-top:120px;padding-left:50px;">
        				<table border="0" cellspacing="0" cellpadding="0">
          					<tr>
            					<td height="117">
            					<!-- 아이디 비밀번호 입력 -->
            						<table width="500" border="0" cellspacing="0" cellpadding="0">
              							<tr>
                							<td width="141" height="39">
                								<img src="/mt/al/eqatmt/images/title_id.gif" width="141" height="39">
                							</td>
                							<td width="10">&nbsp;</td>
                							<td >
                								<input type="text" class="input-mtLogin" id="txt_userId" style="width:320px;ime-mode:disabled;" onfocus="f_Check('txt_userId');">
                								<input type="hidden" class="input-eng48" id="txt_passwd">
                							</td>
              							</tr>
              							<tr>
                                            <td height="30">&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                        </tr>
                						<tr>
                                            <td height="65">
                                                <img src="/mt/al/eqatmt/images/eq_no.gif" width="141" height="39">
                                            </td>
                                            <td>&nbsp;</td>
                                            <td>
                                                <input type="text" class="input-mtLogin" id="txt_eqCd" onfocus="f_Check('txt_eqCd');" style="width:320px;">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="30">&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td><img id="btn_login" src="/mt/al/eqatmt/images/btn_login.gif" width="228" height="86" onclick="jsLogin()"></td>
                                        </tr>
                                        <tr>
                                            <td height="10">&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                        </tr>
                						<tr>
                						    <td>&nbsp;</td>  
                						    <td>&nbsp;</td>
                						    <td>
                						      <input type="checkbox" name="saveEqCd" value="save" class="login_checkbox">
                						      <img src="/mt/al/eqatmt/images/save_in_computer.gif" width="192" height="17" onclick="f_saveEqCdCheck();">
                						    </td>
                						</tr>
            						</table>
            					</td>
          					</tr>
        				</table>
        			</td>
        			<td width="474" valign="top" style="padding-top:80px;padding-left:20px;">
        				<!-- 입력버튼 -->
        				<table width="420" border="0" cellspacing="0" cellpadding="0">
          					<tr>
            					<td width="115" height="95" align="right" valign="top">
            						<img id="btn_7" src="/mt/al/eqatmt/images/btn_7.gif" width="106" height="76" onclick="f_Click(7);" style='cursor:hand' >
            					</td>
            					<td width="115" height="95" align="right" valign="top">
            						<img id="btn_8" src="/mt/al/eqatmt/images/btn_8.gif" width="106" height="76" onclick="f_Click(8);" style='cursor:hand'>
            					</td>
            					<td width="115" height="95" align="right" valign="top">
                                    <img id="btn_9" src="/mt/al/eqatmt/images/btn_9.gif" width="106" height="76" onclick="f_Click(9);" style='cursor:hand'>
                                </td>
          					</tr>
          					<tr>
            					<td width="115" height="95" align="right" valign="top">
            						<img id="btn_4" src="/mt/al/eqatmt/images/btn_4.gif" width="106" height="76" onclick="f_Click(4);" style='cursor:hand'>
            					</td>
            					<td width="115" height="95" align="right" valign="top">
            						<img id="btn_5" src="/mt/al/eqatmt/images/btn_5.gif" width="106" height="76" onclick="f_Click(5);" style='cursor:hand'>
            					</td>
            					<td width="115" height="95" align="right" valign="top">
                                    <img id="btn_6" src="/mt/al/eqatmt/images/btn_6.gif" width="106" height="76" onclick="f_Click(6);" style='cursor:hand'>
                                </td>
          					</tr>
          					<tr>
            					<td width="115" height="95" align="right" valign="top">
            						<img id="btn_1" src="/mt/al/eqatmt/images/btn_1.gif" width="106" height="76" onclick="f_Click(1);" style='cursor:hand'>
            					</td>
            					<td width="115" height="95" align="right" valign="top">
            						<img id="btn_2" src="/mt/al/eqatmt/images/btn_2.gif" width="106" height="76" onclick="f_Click(2);" style='cursor:hand'>
            					</td>
            					<td width="115" height="95" align="right" valign="top">
                                    <img id="btn_3" src="/mt/al/eqatmt/images/btn_3.gif" width="106" height="76" onclick="f_Click(3);" style='cursor:hand'>
                                </td>
          					</tr>
          					<tr>
          					    <td width="115" height="95" align="right" valign="top">
                                    <img id="btn_R" src="/mt/al/eqatmt/images/btn_R.gif" width="106" height="76" onclick="" style='cursor:hand'>
                                </td>
                                <td width="115" height="95" align="right" valign="top">
                                    <img id="btn_0" src="/mt/al/eqatmt/images/btn_0.gif" width="106" height="76" onclick="f_Click(0);" style='cursor:hand'>
                                </td>
            					<td width="115" height="95" align="right" valign="top">
            						<img id="btn_del" src="/mt/al/eqatmt/images/btn_del.gif" width="106" height="76" onclick="f_DelClick();" style='cursor:hand'>
            					</td>
            				</tr>
            				<tr>
						        <td align="right" colspan=3>
                                <img id="btn_bg" src="/mt/al/eqatmt/images/btbt1.gif" width="106" height="76" onclick="f_GoBg();" style='cursor:hand'>
                                </td>
						    </tr>
        				</table>
        			</td>
      			</tr>
		    </table>
	    </td>
  	</tr>
</table>

<table width="1024" border="0" cellspacing="0" cellpadding="0">
    <tr>
        <td height="46"><img src="/mt/al/eqatmt/images/bottom.gif"></td>
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
	    <C> Col=eqCd               Ctrl=txt_eqCd           Param=value   </C> 
	'> 
</object>

</body>
</html>