<%--
    Copyright 2004 by  LG CNS 
    All rights reserved.
--%>
<%@ page import="java.util.Calendar, java.util.*, dbl.cm.fw.util.*"%>
<%@ page contentType="text/html; charset=utf-8" %>
<% 
	Calendar calendar = null;

	if(request.getParameter("year")==null && request.getParameter("month")==null){
		calendar = Calendar.getInstance();
		setToday(calendar);
	}else{
		calendar = Calendar.getInstance();
		setOtherToday(calendar, (String)request.getParameter("year"), (String)request.getParameter("month"));
	}

	String strToday = getStrToday();
	int intYear = getIntYear();
	int intMonth = getIntMonth();
	int intDay = getIntDay();
	int dayOfWeek = getDayOfWeek();
	int monthLength = getMonthDay(intYear, intMonth);
	
	// YYYYMM 문자열 만들기
	String yearMonth = String.valueOf(intYear);
	if (intMonth < 10) yearMonth += "0";
	yearMonth += intMonth;
	
	holidays = DDate.getHolidayByMonth(yearMonth);
	/*
	out.println("<script>alert('" + yearMonth + "')</script>");

	Object[] keys = holidays.keySet().toArray();
	for (int i = 0; i < keys.length; i++) {
	    out.println(keys[i] + ":" + (String)holidays.get((String)keys[i]) + "<br>");
	}
	*/
%>
<%!	
	int monthLength = 0;
	int yyyy=0;
	int mm=0;
	int dd=0;
	int dayOfWeek=0;
	String strToday;
	HashMap holidays;
	Calendar today = null;

	void setToday(Calendar c){
		today = c;
		yyyy = today.get(Calendar.YEAR);
		mm = today.get(Calendar.MONTH)+1;
		dd = today.get(Calendar.DATE);
		setStrToday(new Integer(yyyy).toString() +new Integer(mm).toString() +new Integer(dd).toString());
		today.set(Calendar.DAY_OF_MONTH, 1);
		dayOfWeek = today.get(Calendar.DAY_OF_WEEK);
	}
	
	void setOtherToday(Calendar c, String y, String m){
		today = c;
		today.set(Calendar.YEAR, Integer.parseInt(y));
		today.set(Calendar.MONTH, Integer.parseInt(m)-1);
		/*무조건 초기일로 설정해놔야 달 이동시 에러가 발생하지 않음 
		즉, 5/31일에서 4월달로 넘어가면 4/31일이 없기때문에 5/1일로 자동 설정함.
		그래서 무조건 날짜는 모든달이 있는 1일로 설정해놓은것임.
		설정안하면 무조건 오늘날짜로 가져와서 말일때 에러생김 
		*/
		today.set(Calendar.DAY_OF_MONTH, 1);
				
		
		yyyy = today.get(Calendar.YEAR);
		mm = today.get(Calendar.MONTH)+1;	
		dd = today.get(Calendar.DATE);

		dayOfWeek = today.get(Calendar.DAY_OF_WEEK);
	}
	
	int getMonthDay(int yyyy, int mm){
		if(mm == 2)
			monthLength = getLeapYearFebruary(yyyy);
		else if(mm == 4 || mm == 6 || mm == 9 || mm == 11)
			monthLength = 30;
		else
			monthLength = 31;

		return monthLength;
	}
	
	int getLeapYearFebruary(int yyyy){
		if((yyyy % 4 == 0 && yyyy % 100 != 0) || yyyy % 400 == 0)
			return 29;
		else return 28;
	}
	
	int getIntYear(){
		return yyyy;
	}
	
	int getIntMonth(){
		return mm;
	}

	public int getIntDay(){
		return dd;
	}
	
	public int getDayOfWeek(){
		return dayOfWeek;
	}

	String getStrToday(){
		return strToday; 
	}

	void setStrToday(String str){
		this.strToday = str;
	}
	
	String getDateString(String yearMonthStr, int dayOfMonth) {
	    StringBuffer newDateStr = new StringBuffer(yearMonthStr);
	    
	    if (dayOfMonth < 10)
	        newDateStr.append("0");
	    
	    return newDateStr.append(dayOfMonth).toString();
	}
	
	String getHolidayName(String dateString) {
	    // 양력 휴일명
		String solarHolidayName = (String)holidays.get(dateString);
		if (solarHolidayName == null) {
		    return (String)holidays.get("9999." + dateString.substring(5));
		}
		else {
		    // 음력 휴일명
		    String lunarHolidayName = (String)holidays.get("9999." + dateString.substring(5));
		    if (lunarHolidayName == null)
		        return solarHolidayName;
		    // 음력휴일과 양력휴일이 겹쳤을 때
		    else
		        return solarHolidayName + "," + lunarHolidayName;
		}
	}
%>
<HTML>
<head>
<title>달력</title>

<!-- CSS Context -->
<LINK HREF="/common/css/calendarMt.css" REL="stylesheet" TYPE="TEXT/CSS">

<META http-equiv="Cache-Control" content="no-cache; no-store; no-save">

<script language="javascript"> 
function setMonth(month) {
	document.frmCalendar.month.value = month;
	document.frmCalendar.submit();  
}

function setYear(year) {
	document.frmCalendar.year.value = year;
	document.frmCalendar.submit();
}

function setValue(day) {
	var year = document.frmCalendar.year.value;
	var month = document.frmCalendar.month.value;
	if(month < 10){
		month = "0" +month;
	}
	parent.setValue(year+month+day);
}
</script>
</head>


<body leftmargin="0" topmargin="0">
<table width="370" height="365" border="0" cellpadding="0" cellspacing="0">
	<tr>
	<td align="center" valign="top">
	<table width="370" height="100%" border="0" cellpadding="0" cellspacing="0">
		<tr>
		<td align="center" valign="top">
		<table width="354" border="0" cellspacing="0" cellpadding="0">
			<tr>
			<td width="354">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
				<td width="88">&nbsp;</td>
				<td width="14"><a href="javascript:setYear('<%=(intYear-1)%>')"><img src="/common/images/Content_icon_arrowleft.gif" width="14" height="28" border="0"></a></td>
				<td width="50" height="28" align="center" valign="bottom" class="schedule_title_red"><%=intYear%></td>
				<td width="13"><a href="javascript:setYear('<%=(intYear+1)%>')"><img src="/common/images/Content_icon_arrowright.gif" width="14" height="28" border="0"></a></td>
				<td width="89">&nbsp;</td>
				</tr>
			</table>
			</td>
			</tr>
			<tr>
			<td height="10" align="center"><img src="/common/images/Content_schedule_popupbar02.gif" width="271" height="15"></td>
			</tr>
			<tr>
			<td height="6" align="center">
			<table height="33" border="0" cellpadding="0" cellspacing="1" class="table_bg">
				<tr align="center" bgcolor="#F8F7EE">
				<td width="40" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('1')">1</a></td>
				<td width="40" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('2')">2</a></td>
				<td width="40" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('3')">3</a></td>
				<td width="40" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('4')">4</a></td>
				<td width="40" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('5')">5</a></td>
				<td width="40" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('6')">6</a></td>
				<td width="40" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('7')">7</a></td>
				<td width="40" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('8')">8</a></td>
				<td width="40" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('9')">9</a></td>
				<td width="40" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('10')">10</a></td>
				<td width="40" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('11')">11</a></td>
				<td width="40" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('12')">12</a></td>
				</tr>
			</table>
			</td>
			</tr>
			<tr>
			<td height="10" align="center"><img src="/common/images/Content_schedule_popupbar02.gif" width="271" height="15"></td>
			</tr>
			<tr>
			<td align="center" class="schedule_month"><%=intMonth%>월</td>
			</tr>
			<tr>
			<td height="10" align="center"><img src="/common/images/Content_schedule_popupbar02.gif" width="271" height="15"></td>
			</tr>
		</table>
		<table width="280" border="0" cellspacing="0" cellpadding="0">
			<tr>
			<td class="table_bg">
			<table width="100%" border="0" cellspacing="1" cellpadding="0">
				<tr height="32" align="center">
				<td class="schedule_table_header_center_sun"><font color="#740000">일</font></td>
				<td class="schedule_table_header_center">월</td>
				<td class="schedule_table_header_center">화</td>
				<td class="schedule_table_header_center">수</td>
				<td class="schedule_table_header_center">목</td>
				<td class="schedule_table_header_center">금</td>
				<td class="schedule_table_header_center_sat"><font color="#1B1464"></font>토</td>
				</tr>
			<%  
				int index = (dayOfWeek*-1) +2;
				while(index <= monthLength){
					out.print("<tr height=\"32\" align=\"center\">");
					out.println("\n");
					for(int j=0; j<=6; j++){
						String sum = new Integer(intYear).toString()+new Integer(intMonth).toString()+new Integer(index).toString();
						if(strToday.equals(sum)){
							out.print("<td bgcolor=\"#FFEFD5\" class=\"schedule_number_today\"");
						}
						
						// 일요일
						/*if(j == 0) { 
							out.print("<td bgcolor=\"#FAF2F2\" class=\"schedule_number_red\"");
						}*/
						
						// 일요일을 포함한 공휴일
						if (index > 0 && DDate.isHoliday(getDateString(yearMonth, index))) {
							out.print("<td bgcolor=\"#FAF2F2\" class=\"schedule_number_red\"");
							
							// 마우스를 올렸을 때 공휴일 명 표시
							String holidayName = getHolidayName(DDate.toBaseDate(getDateString(yearMonth, index)));
							if (holidayName != null) out.print(" title='" + holidayName + "'");
						}
						// 토요일
						else if(j == 6){ 
							out.print("<td bgcolor=\"#E7F9FF\" class=\"schedule_number_blue\"");
						}else {
							out.print("<td bgcolor=\"#FFFFFF\" class=\"schedule_number_gray\"");
						}
						
					   if(index > 0 && index <= monthLength){
							out.print(" onmouseover=this.style.backgroundColor=\"#F3F0D2\" onmouseout=this.style.backgroundColor=\"\">" 
							+"<a href=\"#\" onClick=\"javascript:setValue('");
							if(index < 10){
								out.print("0");
							}
							out.print(index);
							out.print("')\">");
							out.print(index);
							out.print("</a></td>");
							out.println("\n");
						}else{
						out.print("></td>");
						out.println("\n");
						}
					index++;
					}
				out.print("</tr>");
				out.println("\n");
			}%>
			</table>
			</td>
			</tr>
		</table>
		</td>
		</tr>
	</table>
	</td>
	</tr>
</table>
<form name="frmCalendar" METHOD="post">
<input type="hidden" name="year" value="<%=intYear%>">
<input type="hidden" name="month" value="<%=intMonth%>">
</form>
</body>
</HTML>
