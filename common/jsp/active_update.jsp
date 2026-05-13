<%@page import="dbl.cm.fw.log.DFWLog"%>
<%@ page import="dbl.cm.fw.constants.*" contentType ="text/html;charset=utf-8" %>
<%@page import= "java.util.Enumeration"%>

<%
	String ls_img_package = "/common/images/";
	String EP_FORWARD = (String)request.getParameter("EP_FORWARD");		 // 고객지원시스템 구분
	String RC_FORWARD = (String)request.getParameter("RC_FORWARD");		 // 렌트카 구분
	String IN_FORWARD = (String)request.getParameter("IN_FORWARD");      // 인천북항 구분
	String MT_FORWARD = (String)request.getParameter("MT_FORWARD");      // 동부메탈 터치피씨 구분
	
	String porteYn = request.getHeader("referer");
	String sabun = (String)request.getParameter("sabun");
	String forward_page = "" ;

/*  	Enumeration<String> em = request.getHeaderNames();
	
	while(em.hasMoreElements()){
		
		String headerName = em.nextElement();
		String headerValue = request.getHeader(headerName);
		
		DFWLog.info("H E A D E R");
		DFWLog.info("headerName : " headerName + "headerValue : " + headerValue);
	} */
	
	
	if ( EP_FORWARD != null && EP_FORWARD.equals("TRUE") )  {
		
		forward_page = "/ep/ep_index_main.jsp?sabun="+sabun;
	
	} else  if ( RC_FORWARD != null && RC_FORWARD.equals("TRUE") )  {
		
		forward_page = "/rentcar/rc_index_main.jsp?sabun="+sabun;
	
	} else  if ( MT_FORWARD != null && MT_FORWARD.equals("TRUE") )  {
		
		forward_page = "/common/jsp/mt_login.jsp?sabun="+sabun;
	
	} else  if ( IN_FORWARD != null && IN_FORWARD.equals("TRUE") )  {
		
		forward_page = "/in/common/in_index_main.jsp?sabun="+sabun;
	
	} else if (porteYn == null) {
		
		forward_page = "/common/jsp/login_main.jsp?porteYn=Y&sabun="+sabun;
	
	/*  else if (porteYn.indexOf("porte=Y") = -1 || porteYn == null){
	
	forward_page = "/common/jsp/login_main.jsp?porte=Y&sabun="+sabun;
	*/
	
	} else {
	
		forward_page = "/common/jsp/login_main.jsp?sabun="+sabun;
	}

%>

<HTML>
<HEAD>
<TITLE>Gauce Component Download</TITLE>
<META HTTP-EQUIV="Content-Type" content="text/html; charset=utf-8">

<STYLE type="text/css">
/* 기본 */
body {font-family: "Arial", "굴림"; font-size: 12px; color: #333333; line-height:16px;}
body {
	scrollbar-face-color: #DCDCDC;
	scrollbar-shadow-color:#FFFFFF;
	scrollbar-highlight-color:#FFFFFF;
	scrollbar-3dlight-color: #BBBBBB;
	scrollbar-darkshadow-color: #BBBBBB;
	scrollbar-track-color: #EFEFEF;
	scrollbar-arrow-color: #626262;
}

form { margin: 0px; }

/* General Define */
td {color : #333333 ; Font-Family:"arial", "굴림"; Font-Size: 12px; Line-height:16px; text-decoration: none; word-break:break-all;}
a:link {text-decoration: none ; color: #446998;}
a:visited {text-decoration: none ; color: #446998;}
a:active {text-decoration: underline ; color: #446998;}
a:hover {text-decoration: underline ; color: #BD9D64;}
</STYLE>
<script language="JavaScript">

	function f_ebiz_link(){
		
		window.open("http://ebiz.debis.co.kr");
	}
	
	function f_debis_link(){
		
		window.open("http://debis.dongwon.com");
	}
	
	function f_help(){
		
		window.open("https://939.co.kr/dongwon");
	}
	
	
</script>

<script language="JavaScript" for="Manager" event="OnUpdateCompleted()">
	/**
	 * 적용방법:
	 * 1. TrustZone 부분을 수정합니다. (<param name="TrustZone"	value="http://www.shift.co.kr">)
	 * 2. OnUpdateCompleted() event의 location.href 를 변경합니다. (location.href = "main.html";)
	 * 실행되는 구조 :
	 * 1. 서버에서 install.html을 호출됩니다.
	 * 2. install.html 이 기동되고 컴포넌트 다운로드 완료시 OnUpdateCompleted event가 호출이 됩니다.
	 * 3. event에서 location.href에 이동될 URL이 호출되면서 페이지가  변경됩니다.
	 *   - 일반적으로 성공시 main page나 실패시 login page로 이동시킨다.
	 * 주의사항 : 필히 OnUpdateCompleted() Event에서 lopcation 을 바꾸어 사용하셔야 컴포넌트 설치가 정상적으로 됩니다.
	 *  만일 onload 등에서 location을 바꾸는 작업을 하게되면 Error가 발생할 수 있습니다.
	**/
 <%
  System.out.println((String)request.getParameter("IN_FORWARD"));
 %>
	document.location.href = "<%=forward_page%>";

</script>

<script language="JavaScript" for="Manager" event="OnUpdateError(ErrorCode,ErrMsg)">
	alert("OnUpdateError 이벤트 발생!\nError Code: "+ErrorCode+"\nError Message : "+ErrMsg);
</script>

<!-- ActiveUpdate 이벤트 정의 -->
<script language="JavaScript" for="Manager" event="OnDownloadCompleted(FilePath)">
	alert("OnDownloadCompleted 이벤트 발생!\nFile Path: "+FilePath);
</script>

<script language="JavaScript" for="Manager" event="OnDownloadError(ErrorCode,ErrMsg)">
	alert("OnDownloadError 이벤트 발생!\nError Code: "+ErrorCode+"\nError Message : "+ErrMsg);
</script>



</HEAD>

<BODY bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<TABLE width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
	<TR>
		<TD valign="center">
			<TABLE width="815" border="0" cellspacing="0" cellpadding="0">
				<TR>
					<TD width="20" height="5"></TD>
					<TD height="3" align="center"><p>&nbsp;</P>
						<TABLE width="500" border="0" cellspacing="0" cellspacing="4" bgcolor="F4F4F4" align="center">
							<TR>
								<TD align="center"><font size="3px" style="font-weight:bold;color:blue">화면이 멈춘경우 하단의 접속하려는 주소를 클릭해주세요</font></TD>
							</TR>
							<TR>
								<TD align="center"><font size="4px" style="font-weight:bold;color:red" cursor="hand" onClick="f_debis_link()"><a style="cursor: hand">debis.dongwon.com</a></font></TD>
							</TR>
							<TR>
								<TD align="center"><font size="4px" style="font-weight:bold;color:red" onClick="f_ebiz_link()"><a style="cursor: hand">ebiz.debis.co.kr</a></font></TD>
							</TR>
						</TABLE>
						<TABLE width="500" border="0" cellpadding="0" cellspacing="4" bgcolor="F4F4F4">
							<TR>
								<TD bgcolor="#FFFFFF">
									<TABLE width="100%" border="0" cellspacing="0" cellpadding="0">
										<TR>
											<TD width="35%" rowspan="3" valign="top"><IMG src="<%= ls_img_package %>/image_01.gif" width="170" height="143"  onClick="f_help()"></TD>
											<TD width="65%" valign="top"><P><IMG src="<%= ls_img_package %>/letter.gif" width="311" height="72"></P></TD>
										</TR>
										<TR>
											<TD height="10" valign="top"><img src="<%= ls_img_package %>/img_secure_n05.gif" width="292" height="20"></TD>
										</TR>
										<TR>
											<TD height="10" valign="top">1분정도 소요되므로 잠시만 기다려 주시기 바랍니다. <BR> <BR></TD>
										</TR>
										<TR align="center">
											<TD colspan="2" background="<%= ls_img_package %>/bg.gif"><BR>
												<TABLE width="92%" border="0" cellspacing="0" cellpadding="2">
													<TR>
														<TD width="2%"><img src="<%= ls_img_package %>/icon.gif" width="3" height="5"></TD>
														<TD width="98%">만약, 프로그램의 설치여부를 묻는 ' <strong>보안경고</strong>'창이 나타나면 반드시 &quot;<strong>예</strong>&quot;를 선택</td>
													</TR>
													<TR>
														<TD>&nbsp;</TD>
														<TD>하셔야 합니다.</TD>
													</TR>
													<TR>
														<TD><IMG src="<%= ls_img_package %>/icon.gif" width="3" height="5"></TD>
														<TD>설치 완료후 자동으로 페이지가 이동됩니다.</TD>
													</TR>
												</TABLE> <BR>
												<TABLE width="92%" border="0" cellpadding="0" cellspacing="2" bgcolor="EDE9E1">
													<TR>
														<TD align="center" bgcolor="#FFFFFF">
															<TABLE width="95%" border="0" cellspacing="0" cellpadding="2">
																<TR>
																	<TD colspan="2">화면이 멈춘경우 <STRONG>'ctrl'</STRONG>키를 누르신 상태에서<STRONG> 'F5'</STRONG>를 3~5회 정도 눌러보시고,
																	</TD>
																</TR>
																<TR>
																	<TD>그래도 진행이 되지 않을경우 우측의 도움말을 참고해 주세요.</TD>
																	<TD valign="bottom"><A style="COLOR: red" href="http://ebiz.debis.co.kr/ep/download/debis_setup_guide.doc"
																		target=_blank download="데비스 설치 가이드.doc"><IMG src="<%= ls_img_package %>/Content_help.gif"	width="57" height="18"></A></TD>
																</TR>
															</TABLE>
														</TD>
													</TR>
												</TABLE> <BR>
												<TABLE width="92%" cellpadding="0" cellspacing="0">
													<TR>
														<!--TD align="right"><SPAN class="c"><STRONG><IMG src="<%= ls_img_package %>/icon.gif" width="3" height="5"> 문의전화 : 02-508-2093</STRONG></SPAN></TD-->
													</TR>
													<TR>
														<TD align="right">&nbsp;</TD>
													</TR>
												</TABLE></TD>
										</TR>
									</TABLE>
								</TD>
							</TR>
						</TABLE>
						<%-- 
						<TABLE width="500" border="0" cellspacing="0" cellspacing="4"  align="center">
							<tr>
							<td height="10"></td>
							</tr>
							<TR>
								<TD align="center"><a href="https://939.co.kr/dongwon" target=_blank  style="cursor: hand"><IMG src="<%= ls_img_package %>/banner002.gif" style="width:100px; height:40px;"></a></TD>
							</TR>
						</TABLE>
						--%>
					</TD>
				</TR>
			</TABLE>
		</TD>
	</TR>
	<TR>
		<TD height="20">&nbsp;</TD>
	</TR>
	<TR>
		<TD height="39" valign="bottom">
			<TABLE width="100%" border="0" cellspacing="0" cellpadding="0">
				<TR>
					<TD height="15" valign="top"></TD>
				</TR>
			</TABLE>
		</TD>
	</TR>
</TABLE>
<!-- ActiveUpdate 컴포넌트 정의  XMLUrl을 사용하는 경우 BODY TAG 내부에 기술이 되어 있어야 합니다. -->
<OBJECT ID="Manager"
	CLASSID="CLSID:7A868592-7D06-44CF-ADF1-EF7517BD8F3A"
	codebase="/cabfiles/ManagerEx4.cab#version=4,0,3,13">
	<param name="DownloadTitleText" value="파일 다운로드 중...">
	<param name="TrustZone" value="*.debis.co.kr">
	<param name="TrustZoneMessage" value="정상적인 사용을 위하여 아래의 사이트를 신뢰할 수 있는 사이트로 등록하시겠습니까?">
	<param name="WaitMessage" value="잠시만 기다려 주시기 바랍니다...">
	<param name="XMLUrl" value="/cabfiles_cross_test/install.zip">
	<param name="HangRecovery" value="True">
</OBJECT>

</BODY>
</HTML>