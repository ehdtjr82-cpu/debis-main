<%@ page import="dbl.cm.fw.constants.*,dbl.cm.bc.comnmgnt.usermgnt.util.*,java.net.URLEncoder" contentType="text/html;charset=utf-8" %>
<%@ page import="dbl.cm.fw.log.DLog" %>
<%@ page import="javax.servlet.http.HttpServletRequest" %>
<%@ page import="javax.servlet.http.HttpServletResponse" %>

<%@ page import="java.text.DateFormat" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page import="java.util.Date" %>

<%!
/**
* @source  : $Source: /CVS/cvs/cvsrepo/DBL_PROJECT/DBL_EAR/WEB_ROOT/common/jsp/external_interface_AC_go.jsp,v $
* @date    : $Date: 2014/11/26 04:15:00 $
* @version : $Revision: 1.1 $
* @author  : $Author: parkbm $
* @desc    : 본프로그램은 외부와 Interface를 위하 자동Login을 수행하는 프로그램
*/
%>

<%
	String pCallUrl  			= ""; 
	String pSYS_CD   			= (request.getParameter("SYS_CD")!=null) ? request.getParameter("SYS_CD") : "";
	String pUserId   			= (request.getParameter("USER_ID")!=null) ? request.getParameter("USER_ID") : "";
	String pPassword 			= (request.getParameter("PASSWORD")!=null) ? request.getParameter("PASSWORD") : "";
	String stdDt   	 			= (request.getParameter("stdDt")!=null) ? request.getParameter("stdDt") : "";
	String etdDt   	 			= (request.getParameter("etdDt")!=null) ? request.getParameter("etdDt") : "";
	String cbclscd   			= (request.getParameter("cbclscd")!=null) ? request.getParameter("cbclscd") : "";
	String branCd    			= (request.getParameter("branCd")!=null) ? request.getParameter("branCd") : "";
	String stdYm     			= (request.getParameter("stdYm")!=null) ? request.getParameter("stdYm") : "";
	String stvWrkIndictKndCd   	= (request.getParameter("stvWrkIndictKndCd")!=null) ? request.getParameter("stvWrkIndictKndCd") : "";
	String hveqKndCd   			= (request.getParameter("hveqKndCd")!=null) ? request.getParameter("hveqKndCd") : "";
	String boardIdDash   		= (request.getParameter("boardIdDash")!=null) ? request.getParameter("boardIdDash") : "";
	String targetRowDash   		= (request.getParameter("targetRowDash")!=null) ? request.getParameter("targetRowDash") : "";
	String threadIdDash   		= (request.getParameter("threadIdDash")!=null) ? request.getParameter("threadIdDash") : "";
	String currentRowDash   	= (request.getParameter("currentRowDash")!=null) ? request.getParameter("currentRowDash") : "";
	String checkFlagDash   		= (request.getParameter("checkFlagDash")!=null) ? request.getParameter("checkFlagDash") : "";	

	// --------------------------------------------------
	// SYSCD : 시스템 OR 업무구분
	//         DPCT : DPTC와 인터페이스를 위한 구분코드 (http://pus.dpct.co.kr)
    // --------------------------------------------------

	
	String vatNo  = request.getParameter("vatNo");
	String crn  = request.getParameter("crn");
	String fileChk  = request.getParameter("fileChk");
	String mainkey  = request.getParameter("mainkey");
	String certiOzrFileNm  = request.getParameter("certiOzrFileNm");
	String certiOdiFileNm = request.getParameter("certiOdiFileNm");
	String certiOzParam   = request.getParameter("certiOzParam");

	if ( "OSIDE_CERTI_LIST".equals(pSYS_CD) ) {
		String redirectUrl = request.getContextPath() + "/websquare/websquare.html"
			+ "?w2xPath=/ui/cm/zz/externalSabunLoginPopup.xml"
			+ "&loginUserId=" + URLEncoder.encode("elecMgr", "UTF-8")
			+ "&persistLogin=" + URLEncoder.encode("N", "UTF-8")
			+ "&closeYn=" + URLEncoder.encode("N", "UTF-8")
			+ "&fullPageYn=" + URLEncoder.encode("Y", "UTF-8")
			+ "&messageType=" + URLEncoder.encode("ebiz", "UTF-8")
			+ "&popupName=" + URLEncoder.encode("External Certi List", "UTF-8")
			+ "&title=" + URLEncoder.encode("External Certi List", "UTF-8")
			+ "&nextUrl=" + URLEncoder.encode("/ui/ac/fi/stdinfomgnt/fi_100_13_02b.xml", "UTF-8")
			+ "&vatNo=" + URLEncoder.encode(vatNo == null ? "" : vatNo, "UTF-8")
			+ "&crn=" + URLEncoder.encode(crn == null ? "" : crn, "UTF-8")
			+ "&fileChk=" + URLEncoder.encode(fileChk == null ? "" : fileChk, "UTF-8")
			+ "&mainkey=" + URLEncoder.encode(mainkey == null ? "" : mainkey, "UTF-8");
		response.sendRedirect(redirectUrl);
		return;
	}

	if ( "OSIDE_CERTI".equals(pSYS_CD) ) {
		String redirectUrl = request.getContextPath() + "/websquare/websquare.html"
			+ "?w2xPath=/ui/cm/zz/externalSabunLoginPopup.xml"
			+ "&loginUserId=" + URLEncoder.encode("elecMgr", "UTF-8")
			+ "&persistLogin=" + URLEncoder.encode("N", "UTF-8")
			+ "&closeYn=" + URLEncoder.encode("N", "UTF-8")
			+ "&fullPageYn=" + URLEncoder.encode("Y", "UTF-8")
			+ "&messageType=" + URLEncoder.encode("ebiz", "UTF-8")
			+ "&popupName=" + URLEncoder.encode("External Certi Report", "UTF-8")
			+ "&title=" + URLEncoder.encode("External Certi Report", "UTF-8")
			+ "&nextUrl=" + URLEncoder.encode("/ui/ac/fi/stdinfomgnt/fi_100_13_01b.xml", "UTF-8")
			+ "&certiOzrFileNm=" + URLEncoder.encode(certiOzrFileNm == null ? "" : certiOzrFileNm, "UTF-8")
			+ "&certiOdiFileNm=" + URLEncoder.encode(certiOdiFileNm == null ? "" : certiOdiFileNm, "UTF-8")
			+ "&certiOzParam=" + URLEncoder.encode(certiOzParam == null ? "" : certiOzParam, "UTF-8");
		response.sendRedirect(redirectUrl);
		return;
	}

	if ( "OSIDE_CERTI_FILE_LIST".equals(pSYS_CD) ) {
		String redirectUrl = request.getContextPath() + "/websquare/websquare.html"
			+ "?w2xPath=/ui/cm/zz/externalSabunLoginPopup.xml"
			+ "&loginUserId=" + URLEncoder.encode("elecMgr", "UTF-8")
			+ "&persistLogin=" + URLEncoder.encode("N", "UTF-8")
			+ "&closeYn=" + URLEncoder.encode("N", "UTF-8")
			+ "&fullPageYn=" + URLEncoder.encode("Y", "UTF-8")
			+ "&messageType=" + URLEncoder.encode("ebiz", "UTF-8")
			+ "&popupName=" + URLEncoder.encode("External Certi File List", "UTF-8")
			+ "&title=" + URLEncoder.encode("External Certi File List", "UTF-8")
			+ "&nextUrl=" + URLEncoder.encode("/ui/ac/fi/stdinfomgnt/fi_100_13_03b.xml", "UTF-8")
			+ "&vatNo=" + URLEncoder.encode(vatNo == null ? "" : vatNo, "UTF-8")
			+ "&mainkey=" + URLEncoder.encode(mainkey == null ? "" : mainkey, "UTF-8");
		response.sendRedirect(redirectUrl);
		return;
	}

    SimpleDateFormat formatter = new SimpleDateFormat ("yyyy/MM/dd HH:mm:ss");
	Date currentTime = new Date();
 	String dateString = formatter.format(currentTime);

    
	//HttpServletRequest request = null ;
    String sIp_addr              = (String)request.getRemoteAddr()                    ;
    String sURL                  = (String)request.getRequestURI()                    ;
    String sHttp_accept_charset  = (String)request.getHeader("Accept-Language")       ;
    String sHttp_accept_language = (String)request.getHeader("Accept-Language")       ;
    String sHttp_host            = (String)request.getHeader("HOST")                  ;
    String sHttp_user_agent      = (String)request.getHeader("User-Agent")            ;
    String sHttp_remote_addr     = (String)request.getRemoteAddr()                    ;
  //String sHttp_referer         = (String)request.getHeader("Referer")               ;
    String sHttp_referer         = (String)request.getHeader("REFERER")               ;
    String sServer_name          = (String)request.getServerName()                    ;
    String sServer_port          = Integer.toString(request.getServerPort())          ;
    String sProxy_ip_addr        = (String)request.getHeader("WL-Proxy-Client-IP")    ;

    DLog.debug( "external_interface| ===========START===============" + dateString);
    DLog.debug( "external_interface| sIp_addr:"+sIp_addr );
    DLog.debug( "external_interface| sURL:"+sURL );
    DLog.debug( "external_interface| sHttp_accept_charset:"+sHttp_accept_charset );
    DLog.debug( "external_interface| sHttp_accept_language:"+sHttp_accept_language );
    DLog.debug( "external_interface| sHttp_host:"+sHttp_host );
    DLog.debug( "external_interface| sHttp_user_agent:"+sHttp_user_agent );
    DLog.debug( "external_interface| sHttp_remote_addr:"+sHttp_remote_addr );
    DLog.debug( "external_interface| sHttp_referer:"+sHttp_referer );
    DLog.debug( "external_interface| sServer_name:"+sServer_name );
    DLog.debug( "external_interface| sServer_port:"+sServer_port );
    DLog.debug( "external_interface| sProxy_ip_addr:"+sProxy_ip_addr ); 
    DLog.debug( "external_interface| -------------------------------");

    String RemoteAddr = request.getRemoteAddr();
    String RequestURI = request.getRequestURI();
    StringBuffer RequestURL = request.getRequestURL();
    String ServletPath = request. getServletPath();

    DLog.debug( "external_interface| "+ RemoteAddr );
    DLog.debug( "external_interface| "+ RequestURI );
    DLog.debug( "external_interface| "+ RequestURL.toString() );
    DLog.debug( "external_interface| pSYS_CD  :"+ pSYS_CD    );
    DLog.debug( "external_interface| pUserId  :"+ pUserId    );
    DLog.debug( "external_interface| =========== END ===============");

    
	
	// http://ebiz.debis.co.kr/common/jsp/external_interface.jsp?SYS_CD=DPCT&USER_ID=dpctsso&strRegNo=1098196438&gubun=J&strId=ONDOCK&strEmpNm=ONDOCK&strCopNm=DPCT&strTel=1
	// http://localhost:7001/common/jsp/external_interface.jsp?SYS_CD=DPCT&USER_ID=dpctsso&strRegNo=1098196438&gubun=J&strId=ONDOCK&strEmpNm=ONDOCK&strCopNm=DPCT&strTel=1
	// http://172.21.1.4:7001/common/jsp/external_interface.jsp?SYS_CD=DPCT&USER_ID=dpctsso&strRegNo=1098196438&gubun=J&strId=ONDOCK&strEmpNm=ONDOCK&strCopNm=DPCT&strTel=1
	DLog.debug( "external_interface_go| ===========START===============" + dateString);
    DLog.debug( "external_interface_go| pCallUrl : "+pCallUrl );
    DLog.debug( "external_interface_go| pUserId : "+pUserId );
    DLog.debug( "external_interface| -------------------------------");

%>
	
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>동원로엑스 물류 통합 시스템</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link href="common/css/style.css" rel="stylesheet" type="text/css">

<script language="javascript" src="/common/script/common.js"></script>
<script language="javascript">
	var scbHeadTag = document.getElementsByTagName("head")[0];     
	var scbScript = document.createElement('script');
	scbScript.type = 'text/javascript';
	var scbRandom = (Math.random().toString(36).slice(-8)).toUpperCase();
	scbScript.src = '/js/ShiftCrossBrowser_ver.2.2.min.js?1='+scbRandom;
	scbHeadTag.appendChild(scbScript);
	
	function fn_onload(){
		window.setTimeout("fn_check()",1000);
	}
	
	function fn_check(){
		if(typeof ShiftCrossBrowser_BrowserDetect != "undefined"){
			if(ShiftCrossBrowser_BrowserDetect.browser == "Explorer" && ShiftCrossBrowser_BrowserDetect.browserVersion == "x86"){
				f_OnLoad();
			}
		}
	}
	
	//-------------------------------------------------------------------------
	// 화면로딩시
	//-------------------------------------------------------------------------
	function f_OnLoad() {
		
		if ( "<%=pSYS_CD%>" == "" || "<%=pSYS_CD%>" == "null" ) {
			alert("시스템구분코드  : [" + "<%=pSYS_CD%>" + "]를  확인바랍니다." );
			return ;
		}
		location.href = "<%=pCallUrl%>";
	}

</script>

</head>

<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onload="fn_onload()">

</body>
</html>
