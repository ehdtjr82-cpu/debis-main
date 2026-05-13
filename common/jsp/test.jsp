<% response.setHeader("Cache-control", "no-cache"); %>
<% response.setHeader("Pragma", "no-cache"); %>
<% response.setIntHeader("Expires", 0); %>
<%@ page contentType="text/html;charset=utf-8" %>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" href="/common/css/common.css" type="text/css">
<link rel="stylesheet" href="/_ebill/css/main/css" type="text/css">

<script language="javascript">
	// Get ??
	function f_GetMethod() {
		iframe1.location = "http://test.klnet.co.kr:8080/klnetlink.jsp?cmd=L&S_NO=2208102504&S_ID=TESTSEND&R_NO=2208102504&R_ID=TESTSEND";
	}

	// Post ??
	function f_PostMethod() {
		var f = document.form1;
		f.target = "iframe1"
		f.action = "http://test.klnet.co.kr:8080/klnetsave.jsp";
		f.submit();
	}
</script>

</head>
<body bgcoloer="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" oncontextmenu="return false" ondragstart="return false" onselectstart="return false">

<iframe name="iframe1" frameborder=2 width=800 height=300>
</iframe>

<br><br>
<table border="0" width="100%">
	<tr>
		<td align="center">
		    <input type="button" id="btn_Get" class="button_long" value="Get Method" onclick="f_GetMethod();" objType="ctrlBtn">
		    <input type="button" id="btn_Post" class="button_long" value="Post Method" onclick="f_PostMethod();" objType="ctrlBtn">
	    </td>
	</tr>
</table>

<center>
<form name=form1 method=post>
	<input type="hidden" name="cmd"                value="S">
	<input type="hidden" name="sb_gubun"           value="B">
	���ݰ�꼭��ȣ :
	<input type="input"  name="tax_no"             value="test0000">
	<input type="hidden" name="supply_id_no"       value="2208102504">
	<input type="hidden" name="supply_name"        value="�ѱ������������">
	<input type="hidden" name="supply_ceo"         value="ȫ�浿">
	<input type="hidden" name="supply_admin_email" value="javaeye@klnet.co.kr">
	<input type="hidden" name="supply_admin_id"    value="TESTSEND">
	<input type="hidden" name="auto_yn"            value="Y">
	<input type="hidden" name="receiver_id_no"     value="2208102504">
	<input type="hidden" name="receiver_name"      value="�ѱ������������">
	<input type="hidden" name="receiver_ceo"       value="ȫ�浿">
	<input type="hidden" name="receiver_addr"      value="����">
	<input type="hidden" name="receiver_type"      value="����">
	<input type="hidden" name="receiver_class"     value="����">
	<input type="hidden" name="receiver_email"     value="javaeye@klnet.co.kr">
	<input type="hidden" name="publish_date"       value="20060224">
	<input type="hidden" name="tax_registration"   value="1">
	<input type="hidden" name="total_sum"          value="1000">
	<input type="hidden" name="total_tax"          value="100">
	<input type="hidden" name="dr_gubun"           value="D">
	<input type="hidden" name="sending_count"      value="1">
	<input type="hidden" name="item_date1"         value="20060228">
	<input type="hidden" name="item_name1"         value="1111">
	<input type="hidden" name="item_sum1"          value="1000">
	<input type="hidden" name="item_tax1"          value="100">
</form>
</center>

</body>
</html>