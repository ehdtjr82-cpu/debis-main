<% response.setHeader("Cache-control", "no-cache"); %>
<% response.setHeader("Pragma", "no-cache"); %>
<% response.setIntHeader("Expires", 0); %>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" href="/common/css/common.css" type="text/css">
<link rel="stylesheet" href="/_ebill/css/main/css" type="text/css">

<script language="javascript">
	// Post ??
	function f_PostMethod() {
		var f = document.form1;
		alert( f.supply_admin_id.value );
		//f.target = "iframe1"
		f.action = "http://test.klnet.co.kr:8080/klnetsave.jsp";
		f.submit();
	}
</script>

</head>
<body bgcoloer="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" oncontextmenu="return false" ondragstart="return false" onselectstart="return false">

<form name=form1 method=post>
	<input type="hidden" name="cmd" value="S"> <!-- ???? -->
	<input type="hidden" name="sb_gubun" value="B"> <!-- ?,??? ?? -->
	<input type="hidden" name="tax_no" value="TEST00001"> <!-- ??????? -->
	<input type="hidden" name="supply_id_no" value="2208102504"> <!-- ????? ??????? -->
	<input type="hidden" name="supply_admin_id" value="TESTSEND"> <!-- ????? ??? ID -->
	<input type="hidden" name="auto_yn" value="N"> <!-- ????? ??????(Y/N) -->
	<input type="hidden" name="receiver_id_no" value="2208102504"> <!-- ????? ??????? -->
	<input type="hidden" name="receiver_name" value="�׽�Ʈ����"> <!-- ????? ??/??? -->
	<input type="hidden" name="receiver_ceo" value="ȫ�浿"> <!-- ????? ??? ?? -->
	<input type="hidden" name="receiver_addr" value="����"> <!-- ????? ??? ?? -->
	<input type="hidden" name="receiver_type" value="���񽺾�"> <!-- ????? ?? -->
	<input type="hidden" name="receiver_class" value="��ǻ���Ǹ�"> <!-- ????? ?? -->
	<input type="hidden" name="receiver_email" value="aaa@aaa.com"> <!-- ????? ??? e-mail -->
	<input type="hidden" name="publish_date" value="20060320"> <!-- ????? ???? -->
	<input type="hidden" name="tax_registration" value="1"> <!-- ???/??? -->
	<input type="hidden" name="total_sum" value="1000000"> <!-- ?????? -->
	<input type="hidden" name="total_tax" value="100000"> <!-- ???? -->
	<input type="hidden" name="dr_gubun" value="2"> <!-- ??,?? ?? -->
	<input type="hidden" name="sending_count" value="1"> <!-- ???? -->
	<input type="hidden" name="item_date1" value="20060320"> <!-- ?????1 -->
	<input type="hidden" name="item_name1" value="ǰ��1"> <!-- ???1 -->
	<input type="hidden" name="item_sum1" value="1000000"> <!-- ????1 -->
	<input type="hidden" name="item_tax1" value="100000"> <!-- ??1 -->
</form>

<table border="0" width="100%">
	<tr>
		<td align="center">
		    <input type="button" id="btn_Post" class="button_long" value="Post Method" onclick="f_PostMethod();" objType="ctrlBtn">
	    </td>
	</tr>
</table>

</body>
</html>


	