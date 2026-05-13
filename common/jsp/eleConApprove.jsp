<%@ page contentType="text/html; charset=utf-8" %>
<%@ page import="dbl.cm.bc.apprvmgnt.elecapprv.dto.*, dbl.cm.bc.apprvmgnt.elecapprv.util.*" %>
<%
    ElectronicApproveRequestDTO dto =
        (ElectronicApproveRequestDTO) request.getAttribute("sendApproveInfo");
%>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>전자계약 결재상신</title>

<script>
function f_OnLoad() {
	var rawIf = document.getElementById("ifdata_raw").value;
    var rawLegacy = document.getElementById("legacy_raw").value;

    // XML 선언 + 줄바꿈 제거
    rawIf = rawIf.replace(/<\?xml.*?\?>/, '')
                 .replace(/\n/g, '')
                 .replace(/\r/g, '')
                 .trim();

    rawLegacy = rawLegacy.replace(/<\?xml.*?\?>/, '')
                         .replace(/\n/g, '')
                         .replace(/\r/g, '')
                         .trim();

    document.apprvForm.ifdata.value = rawIf;
    document.apprvForm.legacyout.value = rawLegacy;
    document.apprvForm.submit();
}
</script>
</head>

<body onload="f_OnLoad()">

<form name="apprvForm"
      method="post"
      action="<%=ApprvConfig.getEpApprvPage()%>"
      accept-charset="euc-kr">

    <input name="systemid"   type="hidden" value="<%=dto.getSysId()%>">
    <input name="businessid" type="hidden" value="<%=dto.getTskId()%>">
    <input name="userid"     type="hidden" value="<%=dto.getEpuserId()%>">
    <input name="bodytype"   type="hidden" value="<%=dto.getApprvDtlInfoPattern()%>">
    <input name="title"      type="hidden" value="<%=dto.getApprvTitle()%>">

    <!-- 전송용 -->
	<input type="hidden" name="ifdata">
	<input type="hidden" name="legacyout">
	
	<!-- 원본 저장용 -->
	<textarea id="ifdata_raw" style="display:none;"><%=dto.getSendIfData()%></textarea>
	<textarea id="legacy_raw" style="display:none;"><%=dto.getSendInfo()%></textarea>

    <!-- 상세정보 -->
    <textarea name="bodies" style="display:none;"><%=dto.getApprvDtlInfo()%></textarea>

    <% if(dto.getAttachFile() == null || "undefined".equals(dto.getAttachFile())) { %>
        <input name="attaches" type="hidden" value="">
    <% } else { %>
        <input name="attaches" type="hidden" value="<%=dto.getAttachFile()%>">
    <% } %>

    <input name="bmodifyattach" type="hidden" value="<%=dto.getBmodifyattach()%>">
    <input name="bmodifylines"  type="hidden" value="<%=dto.getBmodifylines()%>">
    <input name="bmodifybody"   type="hidden" value="<%=dto.getBmodifybody()%>">
    <input name="comId"         type="hidden" value="<%=dto.getComId()%>">
    <input name="appattach"     type="hidden" value="<%=dto.getAppattach()%>">

</form>
</body>
</html>