<%@ page import="dbl.cm.fw.constants.*" contentType ="text/html;charset=utf-8" %>

<%
    String ls_img_package = "/common/images/"; 
    String EP_FORWARD = (String)request.getParameter("EP_FORWARD"); 
    String RC_FORWARD = (String)request.getParameter("RC_FORWARD");     
    String IN_FORWARD = (String)request.getParameter("IN_FORWARD");      // 인천북항 구분
    String MT_FORWARD = (String)request.getParameter("MT_FORWARD");      // 동부메탈 터치피씨 구분    
    String TP_FORWARD = (String)request.getParameter("TP_FORWARD");      // 한국용기협회 구분
    
    String forward_page = "" ;  
    
    if ( EP_FORWARD != null && EP_FORWARD.equals("TRUE") )  { 
        System.out.println("가가가.");
        forward_page = "/ep/ep_index_main.jsp" ;
    } else  if ( RC_FORWARD != null && RC_FORWARD.equals("TRUE") )  { 
        System.out.println("나나나.");
        forward_page = "/rentcar/rc_index_main.jsp" ;
    } else  if ( MT_FORWARD != null && MT_FORWARD.equals("TRUE") )  { 
        forward_page = "/common/jsp/mt_login.jsp" ;
    } else  if ( IN_FORWARD != null && IN_FORWARD.equals("TRUE") )  { 
        forward_page = "/in/common/in_index_main.jsp" ;
    } else  if ( TP_FORWARD != null && TP_FORWARD.equals("TRUE") )  { 
        forward_page = "/common/jsp/tp_login_main.jsp" ;
    } else {
        forward_page = "/common/jsp/tp_login_main.jsp";
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


<SCRIPT LANGUAGE=javascript FOR=ActiveUpdate EVENT=OnComplete(lStatus)>
<%
  System.out.println((String)request.getParameter("IN_FORWARD"));
 %>

	if (0 == lStatus) {
		//Update할 컴포넌트 비교작업후 신규나 업그레이드된 설치할 컴포넌트가 없어서 정상완료한 경우
		//alert("정상완료 : 설치할 컴포넌트가 없음");
		//alert("`````11111<%=forward_page%>");
		document.location.href = "<%=forward_page%>";
	}
	else if (1 == lStatus) {
		//Update할 컴포넌트 비교작업후 신규나 업그레이드된 설치할 컴포넌트가 있는 상태에서 정상 설치완료한 경우
		//alert("정상완료 : 설치된 컴포넌트가 있음");
		//alert("`````22222<%=forward_page%>");
		document.location.href = "<%=forward_page%>";
	}
</SCRIPT>

<SCRIPT LANGUAGE=javascript FOR=ActiveUpdate EVENT=OnError>
	alert("설치오류 : 컴포넌트 설치중 취소 하였거나, 설치중 오작동으로 오류가 발생하였음[" + ActiveUpdate.ErrorMsg + "]");
</SCRIPT>
</HEAD>

<BODY bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0"> 
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
                                <TD>그래도 진행이 되지 않을경우 우측의 도움말을 참고해 주세요. </TD>
                                <TD valign="bottom"><IMG src="<%= ls_img_package %>/Content_help.gif" width="57" height="18"></TD>
                              </TR>
                          </TABLE>
                        </TD>
                      </TR>
                    </TABLE>
                    <BR>                    
                    <TABLE width="92%" cellpadding="0" cellspacing="0">
                      <TR>
                        <!--TD align="right"><SPAN class="c"><STRONG><IMG src="<%= ls_img_package %>/icon.gif" width="3" height="5"> 문의전화 : 02-508-2093</STRONG></SPAN></TD-->
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
