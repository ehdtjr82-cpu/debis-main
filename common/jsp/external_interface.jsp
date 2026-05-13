<%@ page import="dbl.cm.fw.constants.*,java.net.URLEncoder" contentType ="text/html;charset=utf-8" %>

<%
	String ls_img_package = "/common/images/";
	String forward_page = "" ;  

	String pSYS_CD   = request.getParameter("SYS_CD");
	String pUserId   = request.getParameter("USER_ID") ;
	String pPassword = request.getParameter("PASSWORD") ;
	String sabun     = (request.getParameter("sabun") != null) ? request.getParameter("sabun") : "";
	String nextUrl   = (request.getParameter("nextUrl") != null) ? request.getParameter("nextUrl") : "";
	String targetWindowName = (request.getParameter("targetWindowName") != null) ? request.getParameter("targetWindowName") : "";
	
    String strRegNo  = request.getParameter("strRegNo");  
	String gubun     = request.getParameter("gubun");
	String strId     = request.getParameter("strId");
	String strEmpNm  = request.getParameter("strEmpNm");
	String strCopNm  = request.getParameter("strCopNm");
	String strTel    = request.getParameter("strTel");
	String strEmc    = request.getParameter("strEmc");	
	String stref     = request.getParameter("stref");
	
	//전자세금계산서 param vatNo, certiOzrFileNm, certiOdiFileNm, certiOzParam  
	String vatNo = (request.getParameter("vatNo")!=null) ? request.getParameter("vatNo") : "";
	String crn = (request.getParameter("crn")!=null) ? request.getParameter("crn") : "";
	String fileChk = (request.getParameter("fileChk")!=null) ? request.getParameter("fileChk") : "";
	String mainkey = (request.getParameter("mainkey")!=null) ? request.getParameter("mainkey") : "";
	String certiOzrFileNm = (request.getParameter("certiOzrFileNm")!=null) ? request.getParameter("certiOzrFileNm") : "";
	String certiOdiFileNm = (request.getParameter("certiOdiFileNm")!=null) ? request.getParameter("certiOdiFileNm") : "";
	String certiOzParam   = (request.getParameter("certiOzParam")!=null) ? request.getParameter("certiOzParam") : "";	
	
	String blNo	 = (request.getParameter("blNo")!=null) ? request.getParameter("blNo") : "";
	String cntrNo = (request.getParameter("cntrNo")!=null) ? request.getParameter("cntrNo") : "";

    if (!"".equals(sabun) && (pSYS_CD == null || "".equals(pSYS_CD) || "TOBE_MAIN".equals(pSYS_CD) || "TOBE_INDEX".equals(pSYS_CD))) {
        String redirectUrl = request.getContextPath() + "/websquare/websquare.html"
            + "?w2xPath=/ui/cm/zz/externalSabunLoginPopup.xml"
            + "&sabun=" + URLEncoder.encode(sabun, "UTF-8")
            + "&persistLogin=" + URLEncoder.encode("Y", "UTF-8")
            + "&closeYn=" + URLEncoder.encode("N", "UTF-8")
            + "&fullPageYn=" + URLEncoder.encode("Y", "UTF-8");

        if (!"".equals(nextUrl)) {
            redirectUrl += "&nextUrl=" + URLEncoder.encode(nextUrl, "UTF-8");
        }
        if (!"".equals(targetWindowName)) {
            redirectUrl += "&targetWindowName=" + URLEncoder.encode(targetWindowName, "UTF-8");
        }

        response.sendRedirect(redirectUrl);
        return;
    }

    if ("OSIDE_CERTI".equals(pSYS_CD)) {
        String redirectUrl = request.getContextPath() + "/websquare/websquare.html"
            + "?w2xPath=/ui/cm/zz/externalSabunLoginPopup.xml"
            + "&loginUserId=" + URLEncoder.encode("elecMgr", "UTF-8")
            + "&persistLogin=" + URLEncoder.encode("N", "UTF-8")
            + "&closeYn=" + URLEncoder.encode("N", "UTF-8")
            + "&fullPageYn=" + URLEncoder.encode("Y", "UTF-8")
            + "&messageType=" + URLEncoder.encode("ebiz", "UTF-8")
            + "&popupName=" + URLEncoder.encode("외부 거래명세서 발행", "UTF-8")
            + "&title=" + URLEncoder.encode("외부 거래명세서 발행", "UTF-8")
            + "&nextUrl=" + URLEncoder.encode("/ui/ac/fi/stdinfomgnt/fi_100_13_01b.xml", "UTF-8")
            + "&certiOzrFileNm=" + URLEncoder.encode(certiOzrFileNm, "UTF-8")
            + "&certiOdiFileNm=" + URLEncoder.encode(certiOdiFileNm, "UTF-8")
            + "&certiOzParam=" + URLEncoder.encode(certiOzParam, "UTF-8");

        response.sendRedirect(redirectUrl);
        return;
    }

    if ("OSIDE_CERTI_LIST".equals(pSYS_CD)) {
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
            + "&vatNo=" + URLEncoder.encode(vatNo, "UTF-8")
            + "&crn=" + URLEncoder.encode(crn, "UTF-8")
            + "&fileChk=" + URLEncoder.encode(fileChk, "UTF-8")
            + "&mainkey=" + URLEncoder.encode(mainkey, "UTF-8");

        response.sendRedirect(redirectUrl);
        return;
    }

    if ("OSIDE_CERTI_FILE_LIST".equals(pSYS_CD)) {
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
            + "&vatNo=" + URLEncoder.encode(vatNo, "UTF-8")
            + "&mainkey=" + URLEncoder.encode(mainkey, "UTF-8");

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

    forward_page = "/common/jsp/external_interface_go.jsp";
    String strTmp= "?USER_ID="+pUserId+"&PASSWORD="+pPassword+"&SYS_CD="+pSYS_CD+"&strRegNo="+strRegNo+"&gubun="+gubun+"&strId="+strId+"&strEmpNm="+strEmpNm+"&strCopNm="+strCopNm+"&strTel="+strTel+"&blNo="+blNo+"&cntrNo="+cntrNo+"&strEmc="+strEmc+"&stref="+stref+"&vatNo="+vatNo+"&crn="+crn+"&fileChk="+fileChk+"&mainkey="+mainkey+"&certiOzrFileNm="+certiOzrFileNm+"&certiOdiFileNm="+certiOdiFileNm+"&certiOzParam="+certiOzParam;
    forward_page = forward_page + strTmp ;
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
<script>
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
				document.location.href = "<%=forward_page%>";
			}
		}
	}
</script>

<SCRIPT LANGUAGE=javascript FOR=ActiveUpdate EVENT=OnComplete(lStatus)>
	if (0 == lStatus) {
		//Update할 컴포넌트 비교작업후 신규나 업그레이드된 설치할 컴포넌트가 없어서 정상완료한 경우
		//alert("정상완료 : 설치할 컴포넌트가 없음");
		
		document.location.href = "<%=forward_page%>";
	}
	else if (1 == lStatus) {
		//Update할 컴포넌트 비교작업후 신규나 업그레이드된 설치할 컴포넌트가 있는 상태에서 정상 설치완료한 경우
		//alert("정상완료 : 설치된 컴포넌트가 있음");

		document.location.href = "<%=forward_page%>";
	}
</SCRIPT>

<SCRIPT LANGUAGE=javascript FOR=ActiveUpdate EVENT=OnError>
	alert("설치오류 : 컴포넌트 설치중 취소 하였거나, 설치중 오작동으로 오류가 발생하였음["+ActiveUpdate.ErrCode+"], InternetExplorer아이콘을 마우스오른쪽 버튼을 눌러 관리자권한으로 실행 바람.");
</SCRIPT>
</HEAD>

<BODY bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onload = "fn_onload()"> 
<TABLE width="100%" height="100%" border="0" cellpadding="0" cellspacing="0"> 
  <TR> 
    <TD valign="center">
    <TABLE width="815" border="0" cellspacing="0" cellpadding="0">
        <TR>
          <TD width="20" height="5"></TD>
          <TD height="3" align="center"><p>&nbsp;</P>
          <TABLE width="500" border="0" cellpadding="0" cellspacing="4" bgcolor="F4F4F4">
            <TR>
              <TD bgcolor="#FFFFFF">
              <TABLE width="100%" border="0" cellspacing="0" cellpadding="0">
                <TR>
                  <TD width="35%" rowspan="3" valign="top"><IMG src="<%= ls_img_package %>/image_01.gif" width="170" height="143"></TD>
                  <TD width="65%" valign="top"><P><IMG src="<%= ls_img_package %>/letter.gif" width="311" height="72"></P></TD>
                </TR>
                <TR>
                  <TD height="10" valign="top"><img src="<%= ls_img_package %>/img_secure_n05.gif" width="292" height="20"></TD>
                </TR>
                <TR>
                  <TD height="10" valign="top">1분정도 소요되므로 잠시만 기다려 주시기 바랍니다. <BR>
                    <BR></TD>
                </TR>
                <TR align="center" >
                  <TD colspan="2"background="<%= ls_img_package %>/bg.gif"><BR>                    
                  <TABLE width="92%"  border="0" cellspacing="0" cellpadding="2">
                    <TR>
                      <TD width="2%"><img src="<%= ls_img_package %>/icon.gif" width="3" height="5"> </TD>
                      <TD width="98%">만약, 프로그램의 설치여부를 묻는 ' <strong>보안경고</strong>' 창이 나타나면 반드시 &quot;<strong>예</strong>&quot;를 선택</td>
                    </TR>
                    <TR>
                      <TD>&nbsp;</TD>
                      <TD>하셔야  합니다.</TD>
                    </TR>
                    <TR>
                      <TD><IMG src="<%= ls_img_package %>/icon.gif" width="3" height="5"></TD>
                      <TD>설치 완료후 자동으로 페이지가 이동됩니다. </TD>
                    </TR>
                  </TABLE>
                    <BR>
                    <TABLE width="92%"  border="0" cellpadding="0" cellspacing="2" bgcolor="EDE9E1">
                      <TR>
                        <TD align="center" bgcolor="#FFFFFF">                          
                        	<TABLE width="95%"  border="0" cellspacing="0" cellpadding="2">
                              <TR>
                                <TD colspan="2">화면이 멈춘경우 <STRONG>'ctrl' </STRONG>키를 누르신 상태에서<STRONG> 'F5'</STRONG>를 3~5회 정도 눌러보시고, </TD>
                              </TR>
                              <TR>
                                <TD>*화면이 정상적으로 보이지 않을 경우 <STRONG>도구 ->호환성보기설정 ->'debis.co.kr'</STRONG> 추가해 주세요. </TD>
                              </TR>
                              <TR>
                                <TD>*컴퍼넌트 설치가 정상적으로 되지 않을 경우,Internet Explorer 아이콘에서 마우스 오른쪽버튼을 눌러  <STRONG>'관리자 권한으로 실행'</STRONG>으로 실행해 주세요. </TD>
                              </TR>
                              <TR>
                                <TD>그래도 진행이 되지 않을경우 우측의 도움말을 참고해 주세요. </TD>
                              </TR>
                                <TD valign="bottom"><IMG src="<%= ls_img_package %>/Content_help.gif" width="57" height="18"></TD>
                              </TR>
                          </TABLE>
                        </TD>
                      </TR>
                    </TABLE>
                    <BR>                    
                    <TABLE width="92%" cellpadding="0" cellspacing="0">
                      <TR>
                        <TD align="right">&nbsp;</TD> 
                      </TR>
                      <TR>
                        <TD align="right">&nbsp;</TD> 
                      </TR>
                    </TABLE>                    
                  </TD>
                </TR>
              </TABLE>
             </TD>
            </TR>
          </TABLE>          </TD>
        </TR>
      </TABLE>    </TD>
  </TR> 
  <TR> 
    <TD height="20">&nbsp;</TD> 
  </TR> 
  <TR> 
    <TD height="39" valign="bottom">
   	 <TABLE width="100%" border="0" cellspacing="0" cellpadding="0"> 
	    		<TR> 
	      		<TD height="15" valign="top">
	        		
	      		</TD> 
	    		</TR> 
				</TABLE>
			</TD> 
  </TR> 
</TABLE> 
</BODY>    

   <OBJECT ID="ActiveUpdate" CLASSID="<%=DGauceCLSID.ACTIVE_UPDATE_CLSID%>" codebase="<%=DGauceCLSID.ACTIVE_UPDATE_CODEBASE%>">
	<PARAM NAME="ConfigURL"  VALUE="<%=DGauceCLSID.ACTIVE_UPDATE_CONFIG%>">
	<PARAM NAME="CabinetURL" VALUE="<%=DGauceCLSID.ACTIVE_UPDATE_URL%>">
   </OBJECT>

</HTML>
