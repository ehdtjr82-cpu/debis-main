<%-- 본 프로그램은 전자결재시스템의 이벤트 정보를 받아 기간시스템에 업데이트하고, 그 결과를 전자결재시스템으로 보내 준다 --%>
<%@ page contentType = "text/html; charset=utf-8" %>
<%!
 public String asc2ksc(String strAsc) throws java.io.UnsupportedEncodingException
 {
  if (strAsc == null)
   return null;

  return new String(strAsc.getBytes("ISO-8859-1"), "utf-8");
 }
%>
<%
 String strXML = null;
 
 String strSystemId = asc2ksc(request.getParameter("systemid"));      // 기간계 시스템 아이디
 String strBusinessId = asc2ksc(request.getParameter("businessid"));  // 기간계 업무 아이디
 String strDocId = asc2ksc(request.getParameter("docid"));            // 결재문서 번호
 String strEvent = asc2ksc(request.getParameter("event"));            // 결재 이벤트
 String strLegacyIn = asc2ksc(request.getParameter("legacyin"));      // 기간계 데이터
   
 System.out.println("===================DEBUG CODE in receive_sample.jsp========================");
 System.out.println("======systemid======> : " +  strSystemId );
 System.out.println("======businessid====> : " +  strBusinessId );
 System.out.println("======docid=========> : " +  strDocId );
 System.out.println("======event=========> : " +  strEvent );
 System.out.println("======legacyin======> : " +  request.getParameter("legacyin") );
 System.out.println("======legacyin======> : " +  strLegacyIn );
 System.out.println("===================DEBUG CODE in receive_sample.jsp========================");

 /* 
   TO DO :

   결재에서 넘어온 결재 이벤트를 가지고 기간계 시스템 데이터 Update 
   성공시 : reply_code 1
   실패시 : reply_code 0
 */

 int result = 1;

 strXML = writeResultXML(result, "설명");  
 out.println(strXML);
%>
<%!
public String writeResultXML(int result, String desc) {
    StringBuffer replyXml = new StringBuffer();
    
    replyXml.append("<?xml version=\"1.0\" encoding=\"utf-8\"?>\n")
    		.append("<REPLY>\n")
    		.append("<REPLY_CODE>").append(result).append("</REPLY_CODE>\n")
    		.append("<DESCRIPTION>").append(desc).append("</DESCRIPTION>\n")
    		.append("</REPLY>\n");
    
	String strRet = replyXml.toString();

	if(strRet == null || strRet.equals(""))
		return null;
	else
		return strRet;
}
%> 