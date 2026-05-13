<%= makeCombo(request) %>
<%!
String makeCombo(HttpServletRequest req) {
	// Combo의 화면 표시를 위해 생성된 HTML 코드를 저장하기 위한 StringBuffer
	StringBuffer sbHtml = new StringBuffer();
	
	// DataSet 생성을 위한 변수
	String DataSetID;
	String DataID;

	// LuxeCombo 생성을 위한 변수
	String ComboID;
	String BindColumn;
	String Height;
	String Width;
	String objType;
	String mandatory;
	String validExp;
	String SearchColumn;
	String SortColumn;
	String Sort;
	String EditExprFormat;
	String ListExprFormat;
	String Index;
	String ComboStyle;
	String UpperCase;
	
	// DataSet Object의 ID
	DataSetID = replaceNull(req.getParameter("DataSetID"), "co_lc_combo");
	
	// DataSet의 DataID 파라미터
	DataID = req.getParameter("DataID");
	
	// DataSet의 Object 태그
	sbHtml.append("<object id=").append(DataSetID).append(" classid=CLSID:3267EA0D-B5D8-11D2-A4F9-00608CEBEE49>\n")
	      .append("  <param name=DataID value=").append(DataID).append(">\n")
	      .append("</object>\n\n");


	// LuxeCombo Object의 ID
	ComboID = replaceNull(req.getParameter("ComboID"), "co_ds_combo");
	
	// LuxeCombo의 Object의 BindColumn 속성
	BindColumn = req.getParameter("BindColumn");
	
	// LuxeCombo의 Object의 height 속성
	Height = req.getParameter("Height");

	// LuxeCombo의 Object의 width 속성
	Width = req.getParameter("Width");

	// Object의 objType 속성
	objType = req.getParameter("objType");

	// Object의 mandatory 속성
	mandatory = req.getParameter("mandatory");
	
	validExp = req.getParameter("validExp");

	// LuxeCombo의 SearchColumn 파라미터
	SearchColumn = req.getParameter("SearchColumn");
	
	// LuxeCombo의 SortColumn 파라미터
	SortColumn = req.getParameter("SortColumn");
	
	// LuxeCombo의 Sort 파라미터
	Sort = req.getParameter("Sort");

	// LuxeCombo의 EditExprFormat 파라미터
	EditExprFormat = req.getParameter("EditExprFormat");

	// LuxeCombo의 ListExprFormat 파라미터
	ListExprFormat = req.getParameter("ListExprFormat");

	// LuxeCombo의 Index 파라미터
	Index = req.getParameter("Index");

	// LuxeCombo의 ComboStyle 파라미터
	ComboStyle = req.getParameter("ComboStyle");

	// LuxeCombo의 UpperCase 파라미터
	UpperCase = req.getParameter("UpperCase");

	// LuxeCombo의 Object 태그
	sbHtml.append("<comment id='__NSID__'><object id=").append(ComboID).append(" classid=CLSID:60109D65-70C0-425C-B3A4-4CB001513C69 ")
	      .append(" width=").append(Width).append(" align='absmiddle'");
	
	if (!isNull(objType))
	    sbHtml.append(" objType=").append(objType);

	if (!isNull(mandatory))
	    sbHtml.append(" mandatory='").append(mandatory).append("'");

	if (!isNull(validExp))
	    sbHtml.append(" validExp='").append(validExp).append("'");

	sbHtml.append(">\n");
	
	sbAppend(sbHtml, "ComboDataID", DataSetID);
	sbAppend(sbHtml, "BindColumn", BindColumn);
	sbAppend(sbHtml, "SearchColumn", SearchColumn);
	sbAppend(sbHtml, "SortColumn", SortColumn);
	sbAppend(sbHtml, "Sort", Sort);
	sbAppend(sbHtml, "EditExprFormat", EditExprFormat);
	sbAppend(sbHtml, "ListExprFormat", ListExprFormat);
	sbAppend(sbHtml, "Index", Index);
	sbAppend(sbHtml, "ComboStyle", ComboStyle);
	sbAppend(sbHtml, "UpperCase", UpperCase);

	sbHtml.append("</object></comment> <script> __ws__(__NSID__); </script>\n\n");

	
	// DataSet에서 바로 데이타 조회하는 스크립트
	sbHtml.append("<script>").append(DataSetID).append(".Reset();</script>\n\n");
	
	return sbHtml.toString();
}

void sbAppend(StringBuffer sb, String paramName, String paramValue) {
	if (paramValue != null) {
		sb.append("  <param name='").append(paramName).append("' value='").append(paramValue).append("'>\n");
	}
}

boolean isNull(String inStr) {
	if (inStr == null || inStr.equals(""))
		return true;
	else
		return false;
}

String replaceNull(String inStr, String defaultStr) {
	if (inStr == null || inStr.equals(""))
		return defaultStr;
	else
		return inStr;
}
%>