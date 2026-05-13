<%--
 화면 - $Id: zz_620_01_04b_02.jsp,v 1.1 2013/10/10 01:26:38 kimseok Exp $
 설명 - 개인정보변경
--%>
<%@ page import="dbl.cm.fw.constants.*"
	contentType="text/html;charset=utf-8"%>
<%@ page
	import="dbl.cm.bc.comnmgnt.usermgnt.util.LoginUtil,dbl.cm.bc.comnmgnt.usermgnt.dto.*,dbl.cm.bc.comnmgnt.usermgnt.util.*,dbl.cm.fw.util.*"%>
<%String FROM_LOGIN = (String) request.getParameter("FROM_LOGIN");
			String userId = "";
			String passwd = "";
			if (!DCheckIf.isNull(FROM_LOGIN)) {
				userId = (String) request.getParameter("userId");
				passwd = (String) request.getParameter("passWd");
			} else {
				//userId = LoginUtil.getUserId() ; // 사용자ID  
				userId = LoginUtil.getLoginDTO(request).getUserId(); // 사용자ID
			}

			UserDTO userDto = UserUtil.getUserDTO(userId);
			String userNm = userDto.getUserNm();

			%>

<html>
<head>
<title>개인정보변경</title>
<META HTTP-EQUIV="Content-Type" content="text/html; charset=utf-8">
<LINK HREF="/common/css/common.css" REL="STYLESHEET" type="TEXT/CSS">
<script language="javascript" src="/common/script/common.js"></script>

<!-----------------------------------------------------------------------------
  J A V A   S C R I P T   D E C L A R A T I O N
------------------------------------------------------------------------------>
<script language="javascript">
//-------------------------------------------------------------------------
// function name : 
// function desc : 전역변수 선언
//-------------------------------------------------------------------------   
var MSG_LO_ERR_001 = "현재비밀번호를 입력하세요.";
var MSG_LO_ERR_002 = "새비밀번호를 입력하세요.";
var MSG_LO_ERR_003 = "새비밀번호확인을 입력하세요.";
var MSG_LO_ERR_004 = "현재비밀번호와 새비밀번호 값이 같습니다. 다른값을 입력하세요.";
var MSG_LO_ERR_005 = "새비밀번호와 새비밀번호확인 값이 다릅니다. 같은값을 입력하세요.";
var MSG_LO_ERR_006 = "입력하신 비밀번호가 다릅니다. 정확히 입력하세요.";

  //-------------------------------------------------------------------------
  // 화면로딩시
  //-------------------------------------------------------------------------
  function f_OnLoad() {  
    // disable 처리
	cfDisableKeyData();
   
    var GAUCE_DATASET_HEADER_LIST = "userId:STRING(8)"                  
                             + ",userNm:STRING(20)"                 
                             + ",passwd:STRING(12)"       
                             + ",newPasswd:STRING(12)"              
                             + ",decPasswd:STRING(4000)"   
                             + ",email:STRING(60)"                  
                             + ",zip:STRING(6)"                     
                             + ",addr1:STRING(100)"                 
                             + ",addr2:STRING(100)"                 
                             + ",userMpNo:STRING(20)"
                             + ",basisMenuClsCd:STRING(2)"  
                             + ",userBasisPgmId:STRING(100)"  
                             + ",passwdChgCycCd:STRING(2)"  
                             + ",msgConfirmCycCd:STRING(22)" ;        
          
    oGDS_result_list.SetDataHeader(GAUCE_DATASET_HEADER_LIST);
    oGDS_result_list.AddRow();

    document.all.txt_userId.value="<%=userId%>";
    document.all.txt_userNm.value="<%=userNm%>";
    cfDisableKeyData([]);
  } 
  
  //-------------------------------------------------------------------------
  // 저장 : 
  //-------------------------------------------------------------------------
  function f_Update() { 
    if (f_ReqFieldChk()) {
    	window.returnValue = "T";
		if ( cfConfirmMsg(MSG_CM_CRM_001)) {
           tr_saveEmp.Post();
        } 
    } 
  }
  function f_Next()	{
      var GAUCE_DATASET_HEADER = "userId:STRING(8),passwd:STRING(12),passwdCheckCnt:INT(2),isPostponePasswdChg:INT(1)";
	  oGDS_login.ClearAll();
	  oGDS_login.SetDataHeader(GAUCE_DATASET_HEADER); 
	  oGDS_login.AddRow();
	  
	  oGDS_login.NameValue(1,"userId") = txt_userId.value;
	  oGDS_login.NameValue(1,"passwd") = "<%=passwd%>";
    
      oGDS_login.NameValue(1,"passwdCheckCnt") = 1  ;
      oGDS_login.NameValue(1,"isPostponePasswdChg") = 1  ;
      tr_login.UseChangeInfo = false ; 
      tr_login.Action = "/login.do";
      tr_login.Post();  
      
      window.close();
  }
  
  function f_ReqFieldChk() {
		//필수입력항목 체크
	    var passwd = "<%=userDto.getDecPasswd()%>";
	    // var oldPasswd = document.all.txt_oldPasswd.value.trim();
	    var newPasswd = document.all.txt_newPasswd.value.trim();
	    var confirmPasswd = document.all.txt_confirmPasswd.value.trim();
	    
	    //alert( "passwd:"+passwd + " oldPasswd:"+oldPasswd + " newPasswd:"+newPasswd + " confirmPasswd:"+confirmPasswd );
        /*
	    if (oldPasswd == "" ) {
	    	cfAlertMsg(MSG_LO_ERR_001);
	    	return false;
	    }

	    if (oldPasswd != passwd ) {
	    	cfAlertMsg(MSG_LO_ERR_006);
	    	return false;
	    }

	    if (oldPasswd == newPasswd ) {
	    	cfAlertMsg(MSG_LO_ERR_004);
	    	return false;
	    }

 		if ( oldPasswd == newPasswd ){
 			alert("이전비밀번로 변경은 하지 못합니다.");
    		txt_newPasswd.focus();
    		return false;
    	}
    	*/

	    if (newPasswd == "" ) {
	    	cfAlertMsg(MSG_LO_ERR_002);
	    	return false;
	    }
	    
	    if (confirmPasswd == "" ) {
	    	cfAlertMsg(MSG_LO_ERR_003);
	    	return false;
	    }
    
	    if (newPasswd!= confirmPasswd) {
	    	cfAlertMsg(MSG_LO_ERR_005);
	    	return false;
	    }

 		if ( !f_passwordCheck(txt_userId.value,newPasswd) ){
    		txt_newPasswd.focus();
    		return false;
    	}

		return true;

	}

function f_passwordCheck(vUserId,vPassword){
    var iLen = vPassword.length ;	
	var engCnt = cfisEnglishCnt(vPassword) ;
	var numCnt = cfisNumberCnt(vPassword) ;
    
    if ( cfnumChainChk(vPassword) ) {
		alert("비밀번호는 연속 또는 동일한  숫자 3자리 이상  사용할 수 없습니다.");
		return false;
    }
    
	if ( iLen < 10 ){
		alert("비밀번호는 10자리 이상이어야 합니다.");
		return false;
	}

	if ( engCnt == 0 || numCnt == 0 )
	{
		alert("비밀번호는 영어+숫자 조합이어야 합니다.");
		return false;
	} 

	if ( vUserId == vPassword )
	{
		alert("사용자ID를 비밀번호로 사용할  수  없습니다.");
		return false;
	} 
	return true;
}

  function jsLogin() { 
      var GAUCE_DATASET_HEADER = "userId:STRING(8),passwd:STRING(12),passwdCheckCnt:INT(2)";
	  oGDS_login.ClearAll();
	  oGDS_login.SetDataHeader(GAUCE_DATASET_HEADER); 
	  oGDS_login.AddRow();
	  
	  oGDS_login.NameValue(1,"userId") = txt_userId.value;
	  oGDS_login.NameValue(1,"passwd") = txt_newPasswd.value;
    
      oGDS_login.NameValue(1,"passwdCheckCnt") = 1  ;
      tr_login.UseChangeInfo = false ; 
      tr_login.Action = "/login.do";
      tr_login.Post();  
      
      window.close();
  }
</script>

<!-----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------>
<!-- CUD TR -->
<OBJECT id=tr_saveEmp classid="<%=DGauceCLSID.TR%>">
	<param name="KeyName" value="toinb_dataid4">
	<param name="KeyValue" value="JSP(I:IN_DS1=oGDS_result_list)">
	<!--개발시 정정영역-->
	<param name="ServerIP" value="">
	<param name="Action"
		value="/cm.bc.comnmgnt.usermgnt.cmd.UpdateUserPasswordCMD.do">
</OBJECT>

<object id="tr_login" classid="<%=DGauceCLSID.TR%>">
	<param name="KeyName" value="toinb_dataid4">
	<param name="KeyValue"
		value="Servlet(I:IN_GDS1=oGDS_login,O:OUT_GDS1=oGDS_login_result)">
</object>

<!-----------------------------------------------------------------------------
    D A T A S E T   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------>
<!-- 사용자 정보  DataSet -->
<object id="oGDS_result_list" classid="<%=DGauceCLSID.DATASET%>">
	<param name="SyncLoad" value=true>
</object>

<!-- 로그인 ID / PW 를 넘기기 위한 DataSet 선언 -->
<object id="oGDS_login" classid="<%=DGauceCLSID.DATASET%>"> </object>

<!-- 
<object id="oGDS_userInfo" classid="<%=DGauceCLSID.DATASET%>">
	<param name="SyncLoad"	value=true>
</object>
 -->

<!-----------------------------------------------------------------------------
    G A U C E   C O M P O N E N T' S   E V E N T S  
------------------------------------------------------------------------------>
<!-- CUD TR -->
<script language=JavaScript for=tr_saveEmp event=OnSuccess()>
    cfAlertMsg(MSG_CM_INF_001);	// 성공적으로 저장하였습니다
    
    jsLogin();
</script>
<script language=JavaScript for=tr_saveEmp event=OnFail()>
    cfShowError(tr_saveEmp);
</script>

<script language="JavaScript" for="tr_login" event="OnFail()">
	cfShowError(this);
</script>

</head>

<!-----------------------------------------------------------------------------
    화면영역 시작
------------------------------------------------------------------------------>
<body OnLoad="f_OnLoad()">
<table width="450" border="0" cellspacing="0" cellpadding="0">
	<tr>
		<td align="center" valign="top"><!-- 타이틀영역 --> <!-- 타이틀영역 end -->
		<table cellpadding="0" cellspacing="0" border="0" width="100%">
			<tr height="20">
				<td height="10" class="title_sub"><img
					src="/common/images/Content_grouptitle.gif" align="absmiddle">&nbsp;비밀번호변경
				</td>
			</tr>

			<tr>
				<td><!-- 조회영역--> <!-- 조회영역 end--> <!-- 데이타영역 -->
				<table class="table_bg" cellpadding="2" cellspacing="1" border="0"
					width="100%">
					<tr>
						<td width="30%" class="table_header" align="right">&nbsp;사용자ID</td>
						<td width="70%" class="table_bg_bright"><INPUT type="TEXT"
							class=input_text id=txt_userId size=14 objType="data"
							MaxLength=50 validExp="사용자ID:yes:MaxLength=20:key"></td>
					</tr>
					<tr>
						<td width="30%" class="table_header" align="right">&nbsp;사용자명</td>
						<td width="70%" class="table_bg_bright"><INPUT type="TEXT"
							class=input_text id=txt_userNm size=20 objType="data"
							MaxLength=50 validExp="사용자ID:yes:MaxLength=8:key"></td>
					</tr>

					<!--
            <tr> 
              <td width="30%" class="table_header" align="right">&nbsp;현재비밀번호</td>
              <td width="70%" class="table_bg_bright">
                <INPUT type="password" class=input_text id=txt_oldPasswd size=25  mandatory="true"  MaxLength=12 validExp="비밀번호:no:MaxLength=12" >
              </td>
            </tr>
 -->
					<tr>
						<td width="30%" class="table_header" align="right">&nbsp;새비밀번호</td>
						<td width="70%" class="table_bg_bright"><INPUT type="password"
							class=input_text id=txt_newPasswd size=25 mandatory="true"
							MaxLength=12 validExp="새비밀번호:no:MaxLength=12"
							validExp="새비밀번호:no:minLength=6"></td>
					</tr>

					<tr>
						<td width="30%" class="table_header" align="right">&nbsp;새비밀번호확인</td>
						<td width="70%" class="table_bg_bright"><INPUT type="password"
							class=input_text id=txt_confirmPasswd size=25 mandatory="true"
							MaxLength=12 validExp="새비밀번호확인:no:MaxLength=12"
							validExp="새비밀번호확인:no:minLength=6"></td>
					</tr>


				</table>
				<!-- 데이타영역 end--> <!-- 버튼영역 -->
				<table cellpadding="0" cellspacing="0" border="0" width="100%">
					<tr>
						<td height="5"></td>
					</tr>
					<tr>
						<td align="RIGHT">
						<!--  
							<input type="button" class="button_default"	value="다음에" onClick="f_Next()" objType="bUpdate"> 
						-->
							<input type="button" class="button_default" value="수정"onclick="f_Update()" objType="bUpdate"> 
							<%if (!DCheckIf.isNull(FROM_LOGIN)) { %>
						<input type="button" class="button_default" value="닫기"
							onclick="top.close()" objType="bUpdate"> <%}

			%></td>
					</tr>
				</table>
				<!-- 버튼영역 end--></td>
			</tr>
		</table>
		</td>
	</tr>
</table>
<!-----------------------------------------------------------------------------
    화면영역 종료
------------------------------------------------------------------------------>

<!-----------------------------------------------------------------------------
      B I N D   C O M P O N E N T S   D E F I N I T I O N
------------------------------------------------------------------------------>
<object id=resultBind classid="<%=DGauceCLSID.BIND%>">
	<param name=DataID value=oGDS_result_list>
	<param name="BindInfo"
		value='
    <C> Col=userId                    Ctrl=txt_userId                    Param=value        </C> <!-- 사용자ID -->
    <C> Col=userNm                    Ctrl=txt_userNm                    Param=value        </C> <!-- 사용자명 -->
    <C> Col=decPasswd                 Ctrl=txt_passwd                    Param=value        </C> <!-- 비밀번호 -->
    <C> Col=newPasswd                 Ctrl=txt_newPasswd                 Param=value        </C> <!-- 신규비밀번호 -->    
    <C> Col=oldPasswd                 Ctrl=txt_oldPasswd                 Param=value        </C> <!-- 신규비밀번호 -->  
    <C> Col=email                     Ctrl=txt_email                     Param=value        </C> <!-- EMAIL -->
    <C> Col=zip                       Ctrl=ed_zip                        Param=text         </C> <!-- 우편번호 -->
    <C> Col=addr1                     Ctrl=txt_addr1                     Param=value        </C> <!-- 주소1 -->
    <C> Col=addr2                     Ctrl=txt_addr2                     Param=value        </C> <!-- 주소2 -->
    <C> Col=userMpNo                  Ctrl=txt_userMpNo                  Param=value        </C> <!-- 사용자핸드폰번호 -->
    <C> Col=basisMenuClsCd            Ctrl=txt_basisMenuClsCd            Param=value        </C> <!-- 기본메뉴기본코드 -->
    <C> Col=userBasisPgmId            Ctrl=txt_userBasisPgmId            Param=value        </C> <!-- 사용자기본프로그램ID -->
    <C> Col=passwdChgCycCd            Ctrl=txt_passwdChgCycCd            Param=value        </C> <!-- 비밀번호변경주기코드 -->
    <C> Col=msgConfirmCycCd           Ctrl=txt_msgConfirmCycCd           Param=value        </C> <!-- 메시지확인주기코드 -->
    '>
</object>


</body>
</html>
