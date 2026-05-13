<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@page import="java.net.URLDecoder"%>
<%= makeCombo(request) %>
<%!
String makeCombo(HttpServletRequest req) {
	// Combo��횉 횊짯쨍챕 횉짜쩍횄쨍짝 ��짠횉횠 쨩첵쩌쨘쨉횊 HTML 횆횣쨉책쨍짝 ��첬��책횉횕짹창 ��짠횉횗 StringBuffer
	StringBuffer sbHtml = new StringBuffer();
	
	// DataSet 쨩첵쩌쨘��쨩 ��짠횉횗 쨘짱쩌철
	String DataSetID;
	String DataID;

	// LuxeCombo 쨩첵쩌쨘��쨩 ��짠횉횗 쨘짱쩌철
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
	String encText; 
	
	// DataSet Object��횉 ID
	DataSetID = replaceNull(req.getParameter("DataSetID"), "co_lc_combo");
	
	// DataSet��횉 DataID 횈횆쨋처쨔횑횇횒
	DataID = req.getParameter("DataID");
	
	// DataSet��횉 Object 횇횂짹횞
	sbHtml.append("<object id=").append(DataSetID).append(" classid=CLSID:3267EA0D-B5D8-11D2-A4F9-00608CEBEE49>\n")
	      .append("  <param name=DataID value=").append(DataID).append(">\n")
	      .append("</object>\n\n");


	// LuxeCombo Object��횉 ID
	ComboID = replaceNull(req.getParameter("ComboID"), "co_ds_combo");
	
	// LuxeCombo��횉 Object��횉 BindColumn 쩌횙쩌쨘
	BindColumn = req.getParameter("BindColumn");
	
	// LuxeCombo��횉 Object��횉 height 쩌횙쩌쨘
	Height = req.getParameter("Height");

	// LuxeCombo��횉 Object��횉 width 쩌횙쩌쨘
	Width = req.getParameter("Width");

	// Object��횉 objType 쩌횙쩌쨘
	objType = req.getParameter("objType");

	// Object��횉 mandatory 쩌횙쩌쨘
	mandatory = req.getParameter("mandatory");
		
	validExp = req.getParameter("validExp");
		
	// LuxeCombo��횉 SearchColumn 횈횆쨋처쨔횑횇횒
	SearchColumn = req.getParameter("SearchColumn");
	
	// LuxeCombo��횉 SortColumn 횈횆쨋처쨔횑횇횒
	SortColumn = req.getParameter("SortColumn");
	
	// LuxeCombo��횉 Sort 횈횆쨋처쨔횑횇횒
	Sort = req.getParameter("Sort");

	// LuxeCombo��횉 EditExprFormat 횈횆쨋처쨔횑횇횒
	EditExprFormat = req.getParameter("EditExprFormat");

	// LuxeCombo��횉 ListExprFormat 횈횆쨋처쨔횑횇횒
	ListExprFormat = req.getParameter("ListExprFormat");

	// LuxeCombo��횉 Index 횈횆쨋처쨔횑횇횒
	Index = req.getParameter("Index");

	// LuxeCombo��횉 ComboStyle 횈횆쨋처쨔횑횇횒
	ComboStyle = req.getParameter("ComboStyle");

	// LuxeCombo��횉 UpperCase 횈횆쨋처쨔횑횇횒
	UpperCase = req.getParameter("UpperCase");

	// LuxeCombo��횉 Object 횇횂짹횞
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