<%@ page contentType="text/html; charset=utf-8" %>
<%@ page import="dbl.cm.bc.apprvmgnt.elecapprv.dto.*, dbl.cm.bc.apprvmgnt.elecapprv.util.*" %>
<%
    ElectronicApproveRequestDTO dto =
        (ElectronicApproveRequestDTO) request.getAttribute("sendApproveInfo");
%>
<html>
<head>
    <title>결재상신</title>
    <script>
        function f_OnLoad() {
            document.apprvForm.submit();
        }
    </script>
</head>

<body onload="f_OnLoad()">
<form name="apprvForm"
      method="post"
      action="<%=ApprvConfig.getEpApprvPage()%>"
      accept-charset="euc-kr">

    <input name="systemid"      type="hidden" value="<%=dto.getSysId()%>">
    <input name="businessid"    type="hidden" value="<%=dto.getTskId()%>">
    <input name="userid"        type="hidden" value="<%=dto.getEpuserId()%>">
    <input name="bodytype"      type="hidden" value="<%=dto.getApprvDtlInfoPattern()%>">
    <input name="title"         type="hidden" value="<%=dto.getApprvTitle()%>">

    <!-- 핵심: IE용 LegacyXML.xml 제거, textarea로 원문 그대로 -->
    <textarea name="legacyout" style="display:none;"><%=dto.getSendInfo()%></textarea>

    <!-- bodies도 길고 특수문자 많으면 textarea가 안전 -->
    <textarea name="bodies" style="display:none;"><%=dto.getApprvDtlInfo()%></textarea>

    <%
        if (dto.getAttachFile() == null || "undefined".equals(dto.getAttachFile())) {
    %>
        <input name="attaches" type="hidden" value="">
    <%
        } else {
    %>
        <input name="attaches" type="hidden" value="<%=dto.getAttachFile()%>">
    <%
        }
    %>

    <input name="bmodifyattach" type="hidden" value="<%=dto.getBmodifyattach()%>">
    <input name="bmodifylines"  type="hidden" value="<%=dto.getBmodifylines()%>">
    <input name="bmodifybody"   type="hidden" value="<%=dto.getBmodifybody()%>">
    <input name="comId"         type="hidden" value="<%=dto.getComId()%>">
    <input name="appattach"     type="hidden" value="<%=dto.getAppattach()%>">
</form>
</body>
</html>
