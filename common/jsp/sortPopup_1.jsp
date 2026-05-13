<%--
 화면 - $Id: sortPopup_1.jsp,v 1.1 2006/05/17 02:29:38 임병하 Exp $
 설명 - 정렬 공통 팝업
--%> 
<%@ page contentType="text/html; charset=utf-8" %>
<%@ page import="dbl.cm.fw.constants.*" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> 
<LINK HREF="/common/css/common.css" REL="STYLESHEET" type="TEXT/CSS">
<script language="javascript" src="/common/script/common.js"></script>
<title>정렬 테스트</title>
<script>
var idArr;
var formatArr;
var sortExp;
var dataID;
var oGrid;
var fixCols;

// onLoad시 처리하는 함수
function f_OnLoad() {
	oGrid = window.dialogArguments;
	var gridFormat = oGrid.Format.trim();
	sortExp = oGrid.sortExp;
	dataID = oGrid.DataID;
	fixCols = new Array();

	var listHeader = "colId:STRING(30)," + 
					"colNm:STRING(30)";

	var sortHeader = "colId:STRING(30)," + 
					"colNm:STRING(30)," +
					"ascYn:INT(1),"+
					"subTotal:INT(1)";
	
	ds_list.setDataHeader(listHeader);
	ds_sort.setDataHeader(sortHeader);
	
	gr_list.IndWidth = 0;
	gr_sort.IndWidth = 0;
	
	var gridCols = sortExp.split(","); 
	for (i = 0; i < gridCols.length; i++) {
		var colInfo = gridCols[i].trim().split(":");
		
		if (colInfo.length == 2) {
			ds_list.AddRow();
			ds_list.NameValue(ds_list.RowPosition, "colId") = colInfo[0].trim();
			ds_list.NameValue(ds_list.RowPosition, "colNm") = colInfo[1].trim();
		} else {
			// 그리드의 맨 처음에 고정시켜야 하는 컬럼 정보
			if (colInfo[2] == "fix") {
				fixCols[fixCols.length] = colInfo[0].trim();
			}
		}
	}

	f_ParseFormat(gridFormat);
}

// Grid의 Format 속성값을 쪼개 배열에 저정
function f_ParseFormat(gridFormat) {
	formatArr = new Array();
	idArr = new Array();
	
	var newStr = "";
	var upperFlag = false;
	// 태그 내의 문자만 대문자로 바꾸기
	for (i = 0; i < gridFormat.length; i++) {
		var tempChar = gridFormat.charAt(i);
		switch (tempChar) {
			case "<":
				upperFlag = true;
				newStr += tempChar;
				break;
			case ">":
				upperFlag = false;
				newStr += tempChar;
				break;
			default:
				if (upperFlag == true) newStr += tempChar.toUpperCase();
				else newStr += tempChar;
				break;
		}
	}
	
	while (true) {
		var head = newStr.substring(0,3);
		switch (head) {
			case '<X>':
				formatArr[formatArr.length] = newStr.substring(0, newStr.indexOf('</X>')+4);
				idArr[idArr.length] = null;
				newStr = newStr.substring(newStr.indexOf('</X>')+4).trim();
				break;
			case '<FX':
				formatArr[formatArr.length] = newStr.substring(0, newStr.indexOf('</FX>')+5);
				idArr[idArr.length] = null;
				newStr = newStr.substring(newStr.indexOf('</FX>')+5).trim();
				break;
			case '<R>':
				formatArr[formatArr.length] = newStr.substring(0, newStr.indexOf('</R>')+4);
				idArr[idArr.length] = null;
				newStr = newStr.substring(newStr.indexOf('</R>')+4).trim();
				break;
			case '<G>':
				formatArr[formatArr.length] = newStr.substring(0, newStr.indexOf('</G>')+4);
				idArr[idArr.length] = null;
				newStr = newStr.substring(newStr.indexOf('</G>')+4).trim();
				break;
			case '<FG':
				formatArr[formatArr.length] = newStr.substring(0, newStr.indexOf('</FG>')+5);
				idArr[idArr.length] = null;
				newStr = newStr.substring(newStr.indexOf('</FG>')+5).trim();
				break;
			case '<C>':
				formatArr[formatArr.length] = newStr.substring(0, newStr.indexOf('</C>')+4);
				idArr[idArr.length] = f_GetColId(formatArr[formatArr.length-1]);
				newStr = newStr.substring(newStr.indexOf('</C>')+4).trim();
				break;
			case '<FC':
				formatArr[formatArr.length] = newStr.substring(0, newStr.indexOf('</FC>')+5);
				idArr[idArr.length] = f_GetColId(formatArr[formatArr.length-1]);
				newStr = newStr.substring(newStr.indexOf('</FC>')+5).trim();
				break;
		}

		if (newStr.length == 0)
			break;
	}
}

// 컬럼 정보에서 id 값을 추출
function f_GetColId(colInfo) {
	var tempInfo = colInfo.toUpperCase();
	var start = tempInfo.indexOf('ID=');
	
	if (start < 0)
		return null;
	else {
		var tempStr = colInfo.substring(start);
		return tempStr.substring(3, tempStr.indexOf(' '));
	}
}

// 선택된 정렬 대상을 실제 그리드에 적용
function f_Sort() {
	var sortExpr = "";
	for (i = 1; i <= ds_sort.CountRow; i++) {
		if (ds_sort.NameValue(i, "ascYn") == 0)
			sortExpr += "-";
		else
			sortExpr += "+";
		
		sortExpr += ds_sort.NameValue(i, "colId");
	}

	var subsumExpr =new Array();
	for (i = 0; i < ds_sort.CountRow; i++) {
		if (ds_sort.NameValue(i, "subTotal") == 1)
		{
			subsumExpr[i]= ds_sort.NameValue(i+1, "colId");
		}
	}	
	
	var newFormat = "";
	if (fixCols != null) {
		for (l = 0; l < fixCols.length; l++) {
			var idx = f_GetIdIndex(fixCols[l]);
			
			if (idx != -1) {
				newFormat += formatArr[idx] + "\n";
				formatArr[idx] = null;
			}
		}
	}

	for (j = 1; j <= ds_sort.CountRow; j++) {
		var idx = f_GetIdIndex(ds_sort.NameValue(j, "colId"));
		
		if (idx != -1) {
			newFormat += formatArr[idx] + "\n";
			formatArr[idx] = null;
		}
	}
	
	for (k = 0; k < formatArr.length; k++) {
		if (formatArr[k] != null) {
			newFormat += formatArr[k] + "\n";
		}
	}
	var objReturn = new Object();
	objReturn.format = newFormat;
	objReturn.sortExpr = sortExpr;
	objReturn.subsumExpr = subsumExpr;
	window.returnValue = objReturn;
	window.close();
}

// idArr에서 해당 컬럼ID를 가진 인덱스를 리턴
function f_GetIdIndex(colId) {
	for (i = 0; i < idArr.length; i++) {
		if (colId == idArr[i])
			return i;
	}
	
	if (i == idArr.length)
		return -1;
}

// 리스트를 정렬 대상으로 이동
function f_MoveRight() {
	// Mark된 Row 복사
	for (i = 1; i <= ds_list.CountRow; i++) {
		// Mark된 Row
		if (ds_list.RowMark(i) == 1) {
			ds_sort.AddRow();
			ds_sort.NameValue(ds_sort.RowPosition, "colId") = ds_list.NameValue(i, "colId");
			ds_sort.NameValue(ds_sort.RowPosition, "colNm") = ds_list.NameValue(i, "colNm");
			ds_sort.NameValue(ds_sort.RowPosition, "ascYn") = 1;
			ds_sort.NameValue(ds_sort.RowPosition, "subTotal") = 1;
		}
	}
	
	// Mark된 Row 삭제
	ds_list.DeleteMarked();
}

// 정렬 대상을 리스트로 이동
function f_MoveLeft() {
	// Mark된 Row 복사
	for (i = 1; i <= ds_sort.CountRow; i++) {
		// Mark된 Row
		if (ds_sort.RowMark(i) == 1) {
			ds_list.AddRow();
			ds_list.NameValue(ds_list.RowPosition, "colId") = ds_sort.NameValue(i, "colId");
			ds_list.NameValue(ds_list.RowPosition, "colNm") = ds_sort.NameValue(i, "colNm");
		}
	}
	
	// Mark된 Row 삭제
	ds_sort.DeleteMarked();
}

// 정렬 대상 중 선택된 컬럼을 위로 이동
function f_MoveUp() {
	if (ds_sort.RowPosition <= 1)
		return;
	
	ds_sort.InsertRow(ds_sort.RowPosition-1);
	ds_sort.NameValue(ds_sort.RowPosition, "colId") = ds_sort.NameValue(ds_sort.RowPosition+2, "colId");
	ds_sort.NameValue(ds_sort.RowPosition, "colNm") = ds_sort.NameValue(ds_sort.RowPosition+2, "colNm");
	ds_sort.NameValue(ds_sort.RowPosition, "ascYn") = ds_sort.NameValue(ds_sort.RowPosition+2, "ascYn");
	ds_sort.NameValue(ds_sort.RowPosition, "subTotal") = ds_sort.NameValue(ds_sort.RowPosition+2, "subToatal");	
	ds_sort.DeleteRow(ds_sort.RowPosition+2);
}

// 정렬 대상 중 선택된 컬럼을 아래로 이동
function f_MoveDn() {
	if (ds_sort.RowPosition >= ds_sort.CountRow)
		return;
	
	var colId = ds_sort.NameValue(ds_sort.RowPosition, "colId");
	var colNm = ds_sort.NameValue(ds_sort.RowPosition, "colNm");
	var ascYn = ds_sort.NameValue(ds_sort.RowPosition, "ascYn");
	var ascYn = ds_sort.NameValue(ds_sort.RowPosition, "subTotal");
	ds_sort.DeleteRow(ds_sort.RowPosition);

	ds_sort.InsertRow(ds_sort.RowPosition+1);
	ds_sort.NameValue(ds_sort.RowPosition, "colId") = colId;
	ds_sort.NameValue(ds_sort.RowPosition, "colNm") = colNm;
	ds_sort.NameValue(ds_sort.RowPosition, "ascYn") = ascYn;
	ds_sort.NameValue(ds_sort.RowPosition, "subTotal") = subTotal;
}
</script>

<!-----------------------------------------------------------------------------
    D A T A S E T   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------>
<!-- 정렬 대상 컬럼 리스트 DataSet -->
<object id="ds_list" classid="<%=DGauceCLSID.DATASET%>">
</object>

<!-- 정렬 컬럼 정보 DataSet -->
<object id="ds_sort" classid="<%=DGauceCLSID.DATASET%>">
</object>

</head>

<body onLoad="f_OnLoad()">
<table width="400" border="0" cellspacing="0" cellpadding="0">
	<tr height=15 valign=top>
		<td colspan=2>
		  <table width=100%><tr><td align=left>
			<img src="/common/images/Content_grouptitle.gif" align="absmiddle">&nbsp;정렬 대상
		  </td></tr></table>
		</td>
		<td colspan=2>
		  <table width=100%>
		   <tr>
		    <td align=left>
			<img src="/common/images/Content_grouptitle.gif" align="absmiddle">&nbsp;정렬 순서
			</td>
			<td align=right>			
			<a href="#" onClick="f_MoveUp()"><img src="/common/images/icon_bigarrowup.gif" ></a>&nbsp;
			<a href="#" onClick="f_MoveDn()"><img src="/common/images/icon_bigarrowdn.gif" ></a>
		    </td>
		   </tr>
		  </table>
		</td>
	<tr>
		<td>
			<comment id='__NSID__'><object id="gr_list" classid="<%=DGauceCLSID.GRID%>" class="comn" style="width:150px;height:200px;">
			  <Param Name="DataID"          value="ds_list">
			  <Param Name="AutoResizing"    value=true>
			  <param name="ColSizing"		value=true>
			  <param name=MultiRowSelect    value="true">
			  <Param Name="Format"      value='
			      <c> id=colNm   name=컬럼명   width=134</c>
			  '>
			</object></comment> <script> __ws__(__NSID__); </script>
		</td>
		<td width=25 align=center valign=middle>
			<a href="#" onClick="f_MoveRight()"><img src="/common/images/icon_bigarrowright.gif"></a><br><br>
			<a href="#" onClick="f_MoveLeft()"><img src="/common/images/icon_bigarrowleft.gif"></a>
		</td>
		<td>
			<comment id='__NSID__'><object id="gr_sort" classid="<%=DGauceCLSID.GRID%>" class="comn" style="width:220px;height:200px;">
			  <Param Name="DataID"          value="ds_sort">
			  <Param Name="AutoResizing"    value=true>
			  <param name="ColSizing"		value=true>
			  <param name="Editable"		value=true>
			  <param name=UsingOneClick     value="1">
			  <param name=MultiRowSelect    value="true">
			  <Param Name="Format"      value='
			      <c> id=colNm    name=컬럼명      width=80   Edit=none</c>
			      <c> id=ascYn    name=오름차순     width=60  EditStyle=CheckBox</c>
			      <c> id=subTotal name=소계            width=60  EditStyle=CheckBox</c>
			  '>
			</object></comment> <script> __ws__(__NSID__); </script>
		</td>		
	</tr>
	<tr>
		<td colspan=4 height=5>
		</td>
	</tr>
	<tr>
		<td colspan=3 align=right>
			<input type="button" class="button_default" onClick="f_Sort()" value="정렬">
		</td>
		<td></td>
	</tr>
</table>
</body>
</html>
