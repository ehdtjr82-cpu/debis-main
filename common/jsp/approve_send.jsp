<%@ page contentType = "text/html; charset=utf-8" %>
<%@ page session="true" %>
<%
 String strLegacyDocumentURL = "http://eptest.dongbu.com/acubecn/legacy/CN_LegacyDocument.jsp";

 String strUserID = "db02test1";
 String strVersion = "2.0";
 String strSystemID = "db02_logis";
 String strBusinessID = "bizid1";
 String strFormVersion = "1.0";
 String strBodyType = "html";
 String strTitle = "메모결재(html) 연동 입니다.";

 String strBorderColor = "#a3a3a3";
%>
<HTML>
<XML id="LegacyXML">
<XML_DATA>
 <KEY_ID>
      3DSDF3SDFS-SDSFSD-SDFSDF-0003
 </KEY_ID>
</XML_DATA>
</XML>

<XML id="AttachesXML">
 <GENERAL_ATTACHES>
  <GENERAL_ATTACH METHOD="add">
   <CASE_NUMBER>1</CASE_NUMBER>
   <DISPLAY_NAME>DBL로고</DISPLAY_NAME>
   <FILE_NAME>left_img.jpg</FILE_NAME>
   <FILE_SIZE>55202</FILE_SIZE>
   <PAGE_COUNT></PAGE_COUNT>
   <IMAGE_WIDTH>240</IMAGE_WIDTH>
   <IMAGE_HEIGHT>139</IMAGE_HEIGHT>
   <LOCATION></LOCATION>
   <URL>http://210.127.48.4:7001/common/images/left_img.jpg</URL>
  </GENERAL_ATTACH>
 </GENERAL_ATTACHES>
</XML>

<HEAD>
 <TITLE><%=strTitle%></TITLE>
 <STYLE type="text/css">
  BODY {margin:0 0 0 0}
 </STYLE>

<SCRIPT language="javascript">
 function onLoad()
 { 
  document.LegacyForm.legacyout.value = LegacyXML.xml; 	
      document.LegacyForm.bodies.value = "HTML TAG 가 들어가는 곳 입니다.\n<a href='http://192.168.150.224:7001/cm/bc/comnmgnt/codemgnt/zz_630_02_01b.jsp?grpCd=TR' target='_blank'>공통코드관리</a>";
      document.LegacyForm.attaches.value = AttachesXML.xml;
 }

 function onSubmit()
 {
  document.LegacyForm.submit();
 }
</SCRIPT>
</HEAD>
<BODY onload="javascript:onLoad();return(false);">
<center>
<FORM name="LegacyForm" method="post" action="<%=strLegacyDocumentURL%>" target="_blank">
<TABLE width="950" height="100%" cellpadding="0" cellspacing="0" border="0" >
 <TR>
  <TD width="950" height="100%" valign="middle" style="font-size:9pt;">

   <TABLE width="100%" height="100%" cellpadding="0" cellspacing="0">
    <TR><TD width="10">&nbsp;</TD>
     <TD align="center">
      <DIV style="width:950;height:100%;overflow:auto;border:1pt solid <%=strBorderColor%>;">
       <TABLE width="100%" height="80%" cellpadding="0" cellspacing="1" border="0">

        <TR><TD class="tb_tit_center" colspan='2'><b>Legacy System - Sample</b></TD>
        </TR>
        <TR><TD class="tb_tit_center"><b><font color='blue'>userid(login id)</font></b></TD>
         <TD class="tb_left" width="80%" align="left"><INPUT name="userid" type="text" value="<%=strUserID%>"></INPUT></TD>
        </TR>
        <TR><TD class="tb_tit_center">version(2.0)</TD>
         <TD class="tb_left" width="80%" align="left"><INPUT name="version" type="text" value="<%=strVersion%>" readonly='true'></INPUT></TD>
        </TR>
        <TR><TD class="tb_tit_center"><b><font color='blue'>systemid</font></b></TD>
         <TD class="tb_left" width="80%" align="left"><INPUT name="systemid" type="text" value="<%=strSystemID%>"></INPUT></TD>
        </TR>
        <TR><TD class="tb_tit_center"><b><font color='blue'>businessid</font></b></TD>
         <TD class="tb_left" width="80%" align="left"><INPUT name="businessid" type="text" value="<%=strBusinessID%>"></INPUT></TD>
        </TR>
        <TR><TD class="tb_tit_center">formversion</TD>
         <TD class="tb_left" width="80%" align="left"><INPUT name="formversion" type="text" value="<%=strFormVersion%>" readonly='true'></INPUT></TD>
        </TR>
        <TR><TD class="tb_tit_center">bodytype</TD>
         <TD class="tb_left" width="80%" align="left"><INPUT name="bodytype" type="text" value="<%=strBodyType%>" readonly='true'></INPUT></TD>
        </TR>
        <TR><TD class="tb_tit_center"><b><font color='blue'>title</font></b></TD>
         <TD class="tb_left" width="80%" align="left"><INPUT name="title" type="text" style="width:100%" value="<%=strTitle%>"></INPUT></TD>
        </TR>
        <TR><TD class="tb_tit_center"><b><font color='blue'>legacyout</font></b></TD>
         <TD class="tb_left" width="80%" align="left"><TEXTAREA name="legacyout" rows="10" style="width:100%" value=""></TEXTAREA></TD>
        </TR>
        <TR><TD class="tb_tit_center"><b><font color='blue'>bodies</font></b></TD>
         <TD class="tb_left" width="80%" align="left">
         	<TEXTAREA name="bodies" rows="10" style="width:100%" value=""></TEXTAREA>
        </TD>
        </TR>
        <TR><TD class="tb_tit_center"><b><font color='blue'>attaches</font></b></TD>
         <TD class="tb_left" width="80%" align="left"><TEXTAREA name="attaches" rows="15" style="width:100%" value=""></TEXTAREA></TD>
        </TR>
        <TR><TD colspan='2' align='center'><input type="button" onClick="onSubmit();" value="결재 상신"></TD></TR>
       </TABLE>
      </DIV>
     </TD>
     <TD width="10">&nbsp;</TD>
    </TR>
   </TABLE>
  </TD>
 </TR>
 <TR>
  <TD height="10" colspan="2"><BR/></TD>
 </TR>
 <TR>
  <TD align="right" valign="top" colspan="2" style="font-size:8pt;color:#333333;border-top:1pt solid #333333;">
   <BR/>developed by ACUBE
  </TD>
 </TR>
</TABLE>
</FORM>
</center>
</BODY>
</HTML>
