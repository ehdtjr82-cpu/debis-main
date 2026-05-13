<%@ page import="dbl.cm.fw.constants.*,dbl.cm.bc.comnmgnt.usermgnt.util.*,java.net.URLEncoder" contentType="text/html;charset=utf-8" %>
<%@ page import="dbl.cm.fw.log.DLog" %>
<%@ page import="javax.servlet.http.HttpServletRequest" %>
<%@ page import="javax.servlet.http.HttpServletResponse" %>

<%@ page import="java.text.DateFormat" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page import="java.util.Date" %>
<%@ page import="dbl.cm.fw.constants.*" contentType="text/html;charset=utf-8" %>
<%@ page import="dbl.ac.am.constants.ACConstants" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.dto.LoginDTO" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.util.*" %>
<%@ page import="dbl.cm.fw.util.*"  %> 

<%!
/**
* @source  : $Source: /DBL_PROJECT/DBL_PROJECT/DBL_EAR/WEB_ROOT/common/jsp/external_interface_go.jsp,v $
* @date    : $Date: 2010/11/23 00:49:59 $
* @version : $Revision: 1.40 $
* @author  : $Author: 오경근 $
* @desc    : 본프로그램은 외부와 Interface를 위하 자동Login을 수행하는 프로그램
*/
%>

<%
	String pCallUrl  			= ""; 
	String pSYS_CD   			= (request.getParameter("SYS_CD")!=null) ? request.getParameter("SYS_CD") : "";
	String pUserId   			= (request.getParameter("USER_ID")!=null) ? request.getParameter("USER_ID") : "";
	String pPassword 			= (request.getParameter("PASSWORD")!=null) ? request.getParameter("PASSWORD") : "";
	String sabun               = (request.getParameter("sabun")!=null) ? request.getParameter("sabun") : "";
	String nextUrl            = (request.getParameter("nextUrl")!=null) ? request.getParameter("nextUrl") : "";
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

	// DPCT 관련 파라메터
	String strRegNo  = request.getParameter("strRegNo");
	String gubun     = request.getParameter("gubun");
	String strId     = request.getParameter("strId");
	String strEmpNm  = request.getParameter("strEmpNm");
	String strCopNm  = request.getParameter("strCopNm");
	String strTel    = request.getParameter("strTel");
	String strEmc    = request.getParameter("strEmc");
	String stref    = request.getParameter("stref");
	
	String vatNo  = request.getParameter("vatNo");
	String crn  = request.getParameter("crn");
	String fileChk = request.getParameter("fileChk");
	String mainkey = request.getParameter("mainkey");
	String certiOzrFileNm  = request.getParameter("certiOzrFileNm");
	String certiOdiFileNm = request.getParameter("certiOdiFileNm");
	String certiOzParam   = request.getParameter("certiOzParam");

	if ( !"".equals(sabun) && ( "".equals(pSYS_CD) || "TOBE_MAIN".equals(pSYS_CD) || "TOBE_INDEX".equals(pSYS_CD) ) ) {
		String redirectUrl = request.getContextPath() + "/websquare/websquare.html"
			+ "?w2xPath=/ui/cm/zz/externalSabunLoginPopup.xml"
			+ "&sabun=" + URLEncoder.encode(sabun, "UTF-8")
			+ "&persistLogin=" + URLEncoder.encode("Y", "UTF-8")
			+ "&closeYn=" + URLEncoder.encode("N", "UTF-8")
			+ "&fullPageYn=" + URLEncoder.encode("Y", "UTF-8");

		if ( !"".equals(nextUrl) ) {
			redirectUrl += "&nextUrl=" + URLEncoder.encode(nextUrl, "UTF-8");
		}

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
	if ("CYAUTO_RS_P".equals(pSYS_CD)){	/* 리치장비 rs4c02 , /tn/op/transwrkindict/cntr/tn_304_03_01b.jsp*/
		String redirectUrl = request.getContextPath() + "/websquare/websquare.html"
		    + "?w2xPath=/ui/cm/zz/externalSabunLoginPopup.xml"
		    + "&loginUserId=" + URLEncoder.encode("rs4c02", "UTF-8")
		    + "&persistLogin=" + URLEncoder.encode("N", "UTF-8")
		    + "&closeYn=" + URLEncoder.encode("N", "UTF-8")
		    + "&fullPageYn=" + URLEncoder.encode("Y", "UTF-8")
		    + "&messageType=" + URLEncoder.encode("ebiz", "UTF-8")
		    + "&popupName=" + URLEncoder.encode("External Certi File List", "UTF-8")
		    + "&title=" + URLEncoder.encode("External Certi File List", "UTF-8")
		    + "&nextUrl=" + URLEncoder.encode("/ui/tn/op/transwrkindict/cntr/tn_304_03_01b.xml", "UTF-8")
		    + "&vatNo=" + URLEncoder.encode(vatNo == null ? "" : vatNo, "UTF-8")
		    + "&mainkey=" + URLEncoder.encode(mainkey == null ? "" : mainkey, "UTF-8");
		response.sendRedirect(redirectUrl);
		return;
	}
	
	// BL_NO와 컨테이너번호를 EP에서 조회하기 위한 변수
	String blNo  	= (request.getParameter("blNo")!=null) ? request.getParameter("blNo") : "";
	String cntrNo   = (request.getParameter("cntrNo")!=null) ? request.getParameter("cntrNo") : "";
	

	
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
    DLog.debug( "external_interface| strRegNo :"+ strRegNo   );
    DLog.debug( "external_interface| gubun    :"+ gubun      );
    DLog.debug( "external_interface| strId    :"+ strId      );
    DLog.debug( "external_interface| strEmpNm :"+ strEmpNm   );
    DLog.debug( "external_interface| strCopNm :"+ strCopNm   );
    DLog.debug( "external_interface| strTel   :"+ strTel     );
    DLog.debug( "external_interface| =========== END ===============");

    
	if ( "DPCT".equals(pSYS_CD) ){
	    // DPCT
	    pCallUrl = "/ds/op/wrkrslts/cywrkrslts/op_301_02_01b.jsp?strRegNo="+strRegNo+"&gubun="+gubun+"&strId="+strId+"&strEmpNm="+strEmpNm+"&strCopNm="+strCopNm+"&strTel="+strTel;	
	    //pUserId  = "dpctsso"; 
	}else if ( "DPCT01".equals(pSYS_CD) ){
		// DPCT01
		pCallUrl = "/ds/op/wrkrslts/cywrkrslts/op_301_02_22b.jsp?strRegNo="+strRegNo+"&gubun="+gubun+"&strId="+strId+"&strEmpNm="+strEmpNm+"&strCopNm="+strCopNm+"&strTel="+strTel;	
		//pUserId  = "dpctsso"; 
	}else if ( "RENTCAR_RESERVATION".equals(pSYS_CD) ){
	    // 렌터카 단기예약
	    pCallUrl = "/ps/rc/sales/shttermlendmgnt/rc_140_01_01b.jsp";
	    pUserId  = "rcrevsso";
	}else if ( "BOOKING_BL".equals(pSYS_CD) ) {
	    // BOOKING/BL 번호추적
	    pCallUrl = "/ds/as/cstmrsrvc/coafmgnt/as_102_01_03b.jsp?blNo="+blNo;
	    pUserId = "csssso";
	}else if ( "CONTAINER".equals(pSYS_CD) ) {
	    // 컨테이너 화물조회
	    pCallUrl = "/ds/as/cstmrsrvc/coafmgnt/as_102_01_02b.jsp?cntrNo="+cntrNo;
	    pUserId = "csssso";
	}else if ( "PORT_JOB_STATUS".equals(pSYS_CD) ) {
	    // 이트란스 전송데이터 조회
	    pCallUrl = "/ds/op/plism/op_601_01_01b.jsp";
	    pUserId = "csssso";
	}else if ( "SCHEDULE_LIST".equals(pSYS_CD) ) {
	    // 선석배정현황조회
	    pCallUrl = "/ds/op/rscconfirm/transrscconfirm/op_101_02_04b.jsp";
	    pUserId = "csssso";
	}else if ( "EIS_1".equals(pSYS_CD) ) {
	    // EIS_임원용
	    pCallUrl = "/ds/op/wrkrslts/eisprscond/op_310_01_14b.jsp";
	    pUserId = "csssso";
	}else if ( "EIS_2".equals(pSYS_CD) ) {
	    // EIS_팀장용
	    pCallUrl = "/ds/op/wrkrslts/eisprscond/op_310_01_15b.jsp";
	    pUserId = "csssso";
	}else if ( "EIS_3".equals(pSYS_CD) ) {
	    // EIS_임원용(렌터카)
	    pCallUrl = "/ps/rc/eis/rc_eis_01_00b.jsp";
	    pUserId = "csssso";
	}
	else if ( "DASHBOARD01".equals(pSYS_CD) ) {
	    // 대쉬보드1 용(물류 Dashboard)
	    pCallUrl = "/ac/co/rsltsmgnt/rsltsanl/co_404_01_16b.jsp";
	    pUserId = "csssso";
	}else if ( "DASHBOARD02".equals(pSYS_CD) ) {
	    // 대쉬보드1 용(물류 Dashboard)
	    pCallUrl = "/cm/bc/comnmgnt/boardmgnt/core/zz_690_01_02b.jsp";
	    pUserId = "csssso";
	
	    ////////////////////////////////////////////////////////////////////////////////
	    //2007년 3월 5일자 대쉬보드 개발팀에서 인터페이스 16건 요청함 이에 추가 작업함 2007.03.06 by 송규엽
	    //현재 6건 개발중
	    ////////////////////////////////////////////////////////////////////////////////
	}else if ( "DASHBOARD01-1".equals(pSYS_CD) ) {
	    // 대쉬보드1-1 용(매출화율-수주목표)
	    pCallUrl = "/ds/sd/salesactiv/rcvodrmgnt/sd_301_01_08b.jsp?stdDt="+stdDt+"&etdDt="+etdDt;
	    pUserId = "csssso";	    
	}else if ( "DASHBOARD01-2".equals(pSYS_CD) ) {
	    // 대쉬보드1-1 용(매출화율-매출화율)
	    pCallUrl = "/ds/sd/salesactiv/rcvodrmgnt/sd_301_01_09b.jsp?stdDt="+stdDt+"&etdDt="+etdDt;
	    pUserId = "csssso";	    
	}else if ( "DASHBOARD02-1".equals(pSYS_CD) ) {
	    // 대쉬보드2-1 용(CNRT복화율-복화율)
	    pCallUrl = "/ds/op/wrkrslts/transwrkrslts/op_304_01_31b.jsp?stdDt="+stdDt;
	    pUserId = "csssso";
	}else if ( "DASHBOARD02-2".equals(pSYS_CD) ) {
	    // 대쉬보드2-2 용(CNRT복화율-복화기여이익)
	    pCallUrl = "/ds/op/wrkrslts/transwrkrslts/op_304_01_32b.jsp?stdDt="+stdDt;
	    pUserId = "csssso";
	}else if ( "DASHBOARD02-3".equals(pSYS_CD) ) {
	    // 대쉬보드2-3 용(CNRT복화율-복화연계매출)
	    pCallUrl = "/ds/op/wrkrslts/transwrkrslts/op_304_01_32b.jsp?stdDt="+stdDt;
	    pUserId = "csssso";	    	    
	}else if ( "DASHBOARD03-1".equals(pSYS_CD) ) {
	    // 대쉬보드3-1 용(장치율-CNTR/BULK1)
	    pCallUrl = "/ds/op/wrkrslts/eisprscond/op_310_01_22b.jsp?cbclscd="+cbclscd;
	    pUserId = "csssso";
	}else if ( "DASHBOARD03-2".equals(pSYS_CD) ) {
	    // 대쉬보드3-2 용(장치율-CNTR/BULK2)
	    pCallUrl = "/ds/op/wrkrslts/eisprscond/op_310_01_22b.jsp?cbclscd="+cbclscd;
	    pUserId = "csssso";   
	}else if ( "DASHBOARD04-1".equals(pSYS_CD) ) {
	    // 대쉬보드4-1 용(회전율-CNTR/BULK2)
	    pCallUrl = "/ds/op/wrkrslts/eisprscond/op_310_01_23b.jsp?stdDt="+stdDt+"&etdDt="+etdDt+"&cbclscd="+cbclscd;
	    pUserId = "csssso";
	}else if ( "DASHBOARD04-2".equals(pSYS_CD) ) {
	    // 대쉬보드4-2 용(회전율-CNTR/BULK2)
	    pCallUrl = "/ds/op/wrkrslts/eisprscond/op_310_01_23b.jsp?stdDt="+stdDt+"&etdDt="+etdDt+"&cbclscd="+cbclscd;
	    pUserId = "csssso";
	}else if ( "DASHBOARD05".equals(pSYS_CD) ) {
	    // 대쉬보드5 용(고속-탑승률)
	    pCallUrl = "/ps/tr/salesmgnt/tickrsltsmgnt/tr_460_01_05b.jsp?stdDt="+stdDt;
	    pUserId = "csssso";
	}else if ( "DASHBOARD06".equals(pSYS_CD) ) {
	    // 대쉬보드6 용(고속-목표대비군별/권역별 고객수)
	    pCallUrl = "/ps/tr/salesmgnt/tickrsltsmgnt/tr_460_01_05b.jsp?stdDt="+stdDt;
	    pUserId = "csssso";
	}else if ( "DASHBOARD07-1".equals(pSYS_CD) ) {
	    // 대쉬보드7-1 용(물류-선석점유율-1)
	    pCallUrl = "/ds/op/wrkrslts/stvwrkrslts/op_306_06_08b.jsp?branCd="+branCd+"&stdYm="+stdYm;
	    pUserId = "csssso";
	}else if ( "DASHBOARD07-2".equals(pSYS_CD) ) {
	    // 대쉬보드7-2 용(물류 선석점유율-2)
	    pCallUrl = "/ds/op/wrkrslts/stvwrkrslts/op_306_06_08b.jsp?branCd="+branCd+"&stdYm="+stdYm;
	    pUserId = "csssso";
	}else if ( "DASHBOARD08-1".equals(pSYS_CD) ) {
	    // 대쉬보드8-1 용(물류-장비생산성-1)
	    pCallUrl = "/ds/op/wrkrslts/stvwrkrslts/op_306_06_04b.jsp?branCd="+branCd+"&stdYm="+stdYm;
	    pUserId = "csssso";
	}else if ( "DASHBOARD08-2".equals(pSYS_CD) ) {
	    // 대쉬보드8-2 용(물류-장비생산성-2)
	    pCallUrl = "/ds/op/wrkrslts/stvwrkrslts/op_306_06_09b.jsp?branCd="+branCd+"&stvWrkIndictKndCd="+stvWrkIndictKndCd +"&stdYm="+stdYm;
	    pUserId = "csssso";
	}else if ( "DASHBOARD09".equals(pSYS_CD) ) {
	    // 대쉬보드9 용(물류-장비가동율)
	    pCallUrl = "/ds/op/wrkrslts/stvwrkrslts/op_306_06_10b.jsp?branCd="+branCd+"&hveqKndCd="+hveqKndCd +"&stdYm="+stdYm;
	    pUserId = "csssso";	    
	}else if ( "DASHBOARD10".equals(pSYS_CD) ) {
	    // (회사소식 )
	    pCallUrl = "/cm/bc/comnmgnt/boardmgnt/zz_690_02_07b.jsp?boardIdDash="+boardIdDash +"&threadIdDash="+threadIdDash+"&targetRowDash="+targetRowDash+"&currentRowDash="+currentRowDash+"&checkFlagDash="+checkFlagDash;
	    pUserId = "csssso";	
	    
	}else if ( "FIND_PASSWORD".equals(pSYS_CD) ) {	    
	    pCallUrl = "/cm/bc/comnmgnt/usermgnt/zz_620_01_07b.jsp?FROM_LOGIN=TRUE";	
	    pUserId = "csssso";	    
	}else if ( "EVER".equals(pSYS_CD) ){
	    // DPCT
	    pCallUrl = "/ds/op/wrkplan/transwrkplan/op_202_02_36p.jsp?strRegNo="+strRegNo+"&gubun="+gubun+"&strId="+strId+"&strEmpNm="+strEmpNm+"&strCopNm="+strCopNm+"&strTel="+strTel+"&strEmc="+strEmc+"&stref="+stref;	
	    //pUserId  = "dpctsso"; 
	}else if ( "EMC".equals(pSYS_CD) ){
	    // DPCT
	    pCallUrl = "/ds/op/wrkrslts/cywrkrslts/op_405_01_05b.jsp?strRegNo="+strRegNo+"&gubun="+gubun+"&strId="+strId+"&strEmpNm="+strEmpNm+"&strCopNm="+strCopNm+"&strTel="+strTel+"&strEmc="+strEmc;	
	    //pUserId  = "dpctsso"; 
	}else if ("LFZ_TOUCHPC".equals(pSYS_CD)){
        pCallUrl = "/ds/op/wrkrslts/yardwrkrslts/tn_304_02_02b.jsp";
        pUserId  = "csssso";
    }   
	
	////////////////////////////////////////////////////////////////
	//전자세금계산서 외부 거래명세서 출력  OSIDE_CERTI_LIST, OSIDE_CERTI
	///////////////////////////////////////////////////////////////

    //인천북항 홈페이지에서 로그인 없이 호출 관련 추가  2009.1.12 by 김봉조
	else if ( "IN_3080101".equals(pSYS_CD) ) {	    
	    pCallUrl = "/to/in/cntr/tmlcntr/in_308_01_01b.jsp";	
	    pUserId = "csssso";	    
	}else if ( "IN_3080205".equals(pSYS_CD) ) {	    
	    pCallUrl = "/to/in/cntr/tmlcntr/in_308_02_05b.jsp";	
	    pUserId = "csssso";	    
	}else if ( "IN_3080103".equals(pSYS_CD) ) {	    
	    pCallUrl = "/to/in/cntr/tmlcntr/in_308_01_03b.jsp";	
	    pUserId = "csssso";	    
	}else if ( "IN_3020504".equals(pSYS_CD) ) {	    
	    pCallUrl = "/to/in/cntr/tmlcntr/in_302_05_04b.jsp";	
	    pUserId = "csssso";	    
	}else if ( "IN_3080107".equals(pSYS_CD) ) {	    
	    pCallUrl = "/to/in/cntr/tmlcntr/in_308_01_07b.jsp";	
	    pUserId = "csssso";	    
	}else if ( "IN_3020603".equals(pSYS_CD) ) {	    
	    pCallUrl = "/to/in/cntr/tmlcntr/in_302_06_03b.jsp";	
	    pUserId = "csssso";	    
	}else if ( "IN_3010203".equals(pSYS_CD) ) {	    
	    pCallUrl = "/to/in/cntr/tmlcntr/in_301_02_03b.jsp";	
	    pUserId = "csssso";	    
	}else if ( "IN_3080108".equals(pSYS_CD) ) {	    
	    pCallUrl = "/to/in/cntr/tmlcntr/in_308_01_08b.jsp";	
	    pUserId = "csssso";	    
	}else if ( "IN_3010103".equals(pSYS_CD) ) {	    
	    pCallUrl = "/to/in/cntr/tmlcntr/in_301_01_03b.jsp";	
	    pUserId = "csssso";	    
	}else if ( "IN_3010304".equals(pSYS_CD) ) {	    
	    pCallUrl = "/to/in/cntr/tmlcntr/in_301_03_04b.jsp";	
	    pUserId = "csssso";	    
	}
	
	//CAP PDA호출관련
	else if ("CAP_PDA".equals(pSYS_CD)){
        pCallUrl = "/cap/op/cap_100_02_01b.jsp";
        pUserId  = "csssso";
    }
	//한진 상차리스트
	else if ("HJ_CARLIST".equals(pSYS_CD)){
        pCallUrl = "/ds/op/wrkrslts/yardwrkrslts/op_302_01_51b.jsp";
        pUserId  = "csssso";
    } 
	
    //한진 상차리스트2
    else if ("HJ_CARLIST2".equals(pSYS_CD)){
        pCallUrl = "/ds/op/wrkrslts/yardwrkrslts/op_302_01_50b.jsp";
        pUserId  = "csssso";
    } 
	
	//수입화물 비용확인 호출
	else if ("BOND_TRAN".equals(pSYS_CD)){
	    
        pCallUrl = "/ds/as/cstmrsrvc/coafmgnt/as_102_01_04b.jsp";
        pUserId  = "csssso";
    }
	
	// 20260504 NTIS SVN에서 CYAUTO로 시작하는것들만 가져옴
	/*}*/else if ("CYAUTO_RS".equals(pSYS_CD)){
	    pCallUrl = /*"http://" + DFWConfig.getConfig().getString("ntis", "domain" ) + */"/tn/op/transwrkindict/cntr/tn_304_03_01b.jsp";
	    pUserId  = "rs4c02";
	}else if ("CYAUTO_PC".equals(pSYS_CD)){
	    pCallUrl = /*"http://" + DFWConfig.getConfig().getString("ntis", "domain" ) + */"/tn/op/transwrkindict/cntr/tn_304_03_05b.jsp";
	    pUserId  = "cy4c02";
}else if ("CYAUTO_RS_P".equals(pSYS_CD)){	/* 리치장비 */
		pCallUrl = "/tn/op/transwrkindict/cntr/tn_304_03_01b.jsp";
		pUserId  = "rs4c02";
	}else if ("CYAUTO_PC_P".equals(pSYS_CD)){	/* 공용PC */
	    pCallUrl = "/tn/op/transwrkindict/cntr/tn_304_03_05b.jsp";
	    pUserId  = "cy4c02";
	}else if ("CYAUTO_RS1".equals(pSYS_CD)){
	    pCallUrl = /*"http://" + DFWConfig.getConfig().getString("ntis", "domain" ) + */"/tn/op/transwrkindict/cntr/tn_304_03_01b.jsp";
	    pUserId  = "rs4c01";
	}else if ("CYAUTO_PC1".equals(pSYS_CD)){
	    pCallUrl = /*"http://" + DFWConfig.getConfig().getString("ntis", "domain" ) + */"/tn/op/transwrkindict/cntr/tn_304_03_05b.jsp";
	    pUserId  = "cy4c01";
	}else if ("CYAUTO_RS_P1".equals(pSYS_CD)){	/* 리치장비 */
	    pCallUrl = "/tn/op/transwrkindict/cntr/tn_304_03_01b.jsp";
	    pUserId  = "rs4c01";
	}else if ("CYAUTO_PC_P1".equals(pSYS_CD)){	/* 공용PC */
	    pCallUrl = "/tn/op/transwrkindict/cntr/tn_304_03_05b.jsp";
	    pUserId  = "cy4c01";
	}else if ("CYAUTO_RS1".equals(pSYS_CD)){
	    pCallUrl = /*"http://" + DFWConfig.getConfig().getString("ntis", "domain" ) + */"/tn/op/transwrkindict/cntr/tn_304_03_01b.jsp";
	    pUserId  = "rs5c08";
	}else if ("CYAUTO_PC1".equals(pSYS_CD)){
	    pCallUrl = /*"http://" + DFWConfig.getConfig().getString("ntis", "domain" ) + */"/tn/op/transwrkindict/cntr/tn_304_03_05b.jsp";
	    pUserId  = "cy5c08";
	}else if ("CYAUTO_RS_P2".equals(pSYS_CD)){	/* 리치장비 */
	    pCallUrl = "/tn/op/transwrkindict/cntr/tn_304_03_01b.jsp";
	    pUserId  = "rs5c08";
	}else if ("CYAUTO_PC_P2".equals(pSYS_CD)){	/* 공용PC */
	    pCallUrl = "/tn/op/transwrkindict/cntr/tn_304_03_05b.jsp";
	    pUserId  = "cy5c08";
	}else if ("YUHAN_ORDER".equals(pSYS_CD)){  /* 공용PC */
	    pCallUrl = "/ds/tp/kmc/tp_702_01_02b.jsp";
	    pUserId  = "lfz2";
	}else if ("BORAL_ALLOCCAR".equals(pSYS_CD)){  /* 보랄벌크운송지시 */
	    pCallUrl = "/tn/op/bulktransworkmgnt/bulktransworkindication/tn_304_02_03b.jsp";
	    pUserId  = "lfz2";
	}

	// http://ebiz.debis.co.kr/common/jsp/external_interface.jsp?SYS_CD=DPCT&USER_ID=dpctsso&strRegNo=1098196438&gubun=J&strId=ONDOCK&strEmpNm=ONDOCK&strCopNm=DPCT&strTel=1
	// http://localhost:7001/common/jsp/external_interface.jsp?SYS_CD=DPCT&USER_ID=dpctsso&strRegNo=1098196438&gubun=J&strId=ONDOCK&strEmpNm=ONDOCK&strCopNm=DPCT&strTel=1
	// http://172.21.1.4:7001/common/jsp/external_interface.jsp?SYS_CD=DPCT&USER_ID=dpctsso&strRegNo=1098196438&gubun=J&strId=ONDOCK&strEmpNm=ONDOCK&strCopNm=DPCT&strTel=1

%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>동원로엑스 물류 통합 시스템</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link href="common/css/style.css" rel="stylesheet" type="text/css">

<script language="javascript" src="/common/script/common.js"></script>
<script language="javascript">
//동적으로 ShiftCrossBrowser JS를 호출해야 한다.
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
		if ( "<%=pUserId%>" == "" || "<%=pUserId%>" == "null" ) {
			alert("사용자ID : [" + "<%=pUserId%>" + "]를  확인바랍니다." );
			return ;
		}


		f_HeaderCreate();
		oGDS_login.NameValue(1,"userId") = "<%=pUserId%>";
		oGDS_login.NameValue(1,"passwd") = "<%=pPassword%>";
		oGDS_login.NameValue(1,"passwdCheckCnt") = 0;
		oGDS_login.NameValue(1,"ifSsoYn") = "Y" ;
				
		tr_login.UseChangeInfo = false ;
		tr_login.Action = "/login.do";
		tr_login.Post();
	}


	//-------------------------------------------------------------------------
	// 데이터셋의 헤더를 설정
	//-------------------------------------------------------------------------
	function f_HeaderCreate(){
		var GAUCE_DATASET_HEADER = "userId:STRING(8),passwd:STRING(12),passwdCheckCnt:INT(2),ifSsoYn:STRING(1)";
		oGDS_login.ClearAll();
		oGDS_login.SetDataHeader(GAUCE_DATASET_HEADER);
		oGDS_login.AddRow();
		//oGDS_login.NameValue(1,"userId") = "";
		//oGDS_login.NameValue(1,"passwd") = "";
		//alert( oGDS_login.ExportData( 1 , 1 , true ));
	}

</script>

<object id="tr_login" classid="<%=DGauceCLSID.TR%>">
  	<param name="KeyName" value="toinb_dataid4">
  	<param name="KeyValue" value="Servlet(I:IN_GDS1=oGDS_login,O:OUT_GDS1=oGDS_login_result)">
</object>

<!-- 로그인 ID / PW 를 넘기기 위한 DataSet 선언 -->
<object id="oGDS_login" classid="<%=DGauceCLSID.DATASET%>"></object>

<!-- 로그인 결과 정보를 얻기 위한 DataSet 선언 -->
<object id="oGDS_login_result" classid="<%=DGauceCLSID.DATASET%>"></object>

<!-- 로그인 정보   Event -->
<script language="JavaScript" for="tr_login" event="OnSuccess()">

    //alert( oGDS_login_result.ExportData( 1 , 1 , true ));
    //cfHideWaitMsg();
    var userNm = oGDS_login_result.NameValue(1,"userNm") ;
    var paramArray = new Array();
    paramArray[0] = userNm ;
    //cfAlertMsg( MSG_CM_INF_005 , paramArray ) ;
    location.href = "<%=pCallUrl%>";

</script>
<script language="JavaScript" for="tr_login" event="OnFail()">

   	cfHideWaitMsg();
	var ERR_MSG = tr_login.ErrorMsg;
    cfShowError(tr_login);

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
</head>

<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onload="fn_onload()">

<!-----------------------------------------------------------------------------
      B I N D   C O M P O N E N T S   D E F I N I T I O N
------------------------------------------------------------------------------>
<object id=mBind classid="<%=DGauceCLSID.BIND%>">
  	<param name=DataID    value=oGDS_login>
	<param name="BindInfo" value='
	    <C> Col=userId Ctrl=txt_userId Param=value </C>
	    <C> Col=passwd Ctrl=txt_passwd Param=value </C>
	'>
</object>
</body>
</html>
