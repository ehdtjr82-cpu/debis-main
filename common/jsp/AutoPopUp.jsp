<%--
 화면 - $Id: AutoPopUp.jsp,v 1.2 2006/05/01 17:43:09 경기원 Exp $
 설명 - 자동POP-UP Manager
--%>
<%@ page import="dbl.cm.fw.constants.*,dbl.cm.zz.util.*" contentType="text/html;charset=utf-8" %>

<%
	String vCookieID= request.getParameter("pCookieID");
	String vCallURL = request.getParameter("pCallURL") ;
	String vExpDay = request.getParameter("pExpDay") ;
%>

<html>
<head>
<title>Auto-PopUp</title>
<META HTTP-EQUIV="Content-Type" content="text/html; charset=utf-8">
<LINK HREF="/common/css/common.css" REL="STYLESHEET" type="TEXT/CSS">
<script language="javascript" src="/common/script/common.js"></script>

<script language="javascript">

  //-------------------------------------------------------------------------
  // 화면로딩시
  //-------------------------------------------------------------------------
  function f_OnLoad() {
	popIframe.location = "<%=vCallURL%>";
  } 

    
  function setCookie( name, value, expiredays )
  {
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays );
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
  }

  function CloseWin() {
    if (Notice.checked) {
        setCookie("<%=vCookieID%>", "true" , "<%=vExpDay%>");
        self.close();
    }else{
		self.close();
	}
  }

  function resizeHeight(fr)
  {
	fr = typeof fr == 'string' ? document.getElementById(fr) : fr;
	fr.style.height = popIframe.document.body.scrollHeight;
  }

</script>

</head>

<!-----------------------------------------------------------------------------
    화면영역 시작
------------------------------------------------------------------------------>
<body onLoad="f_OnLoad()" style="margin-left:0;margin-top:0;">
<iframe src=""  scrolling=no frameborder="0" name="popIframe" id="popIframe" width='<%=DCSS.TABLE_WIDTH + 10%>' onload="resizeHeight(this)"></iframe>
<table width="590" border="0" cellpadding="0" cellspacing="0" >
	<tr>
		<td width=8>&nbsp;</td>
		<td align=left><input type=checkbox name="Notice">오늘 하루 창을 띄우지 않음</td>
		<td align=right><a href='javascript:CloseWin();'><img src="/common/images/popup_close.gif" border=0 alt=창닫기></a></td>
	</tr>
</table>	
</body>
</html>