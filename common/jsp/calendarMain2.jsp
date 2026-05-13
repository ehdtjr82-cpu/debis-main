<%--
    Copyright 2004 by  LG CNS 
    All rights reserved.
--%>
<%@ page import="java.util.Calendar, java.util.*, dbl.cm.fw.util.*"%>
<%@ page contentType="text/html; charset=utf-8" %>
<% 
	Calendar calendar = null;
    String year  = ((String)request.getParameter("year")  == null) ? null : (String)request.getParameter("year");
    String month = ((String)request.getParameter("month") == null) ? null : (String)request.getParameter("month");
    String day   = ((String)request.getParameter("day")   == null) ? null : (String)request.getParameter("day");
    
    calendar = Calendar.getInstance();
    
	if(        (year  == null || "undefined".equals(year)  || "null".equals(year)) 
            && (month == null || "undefined".equals(month) || "null".equals(month))  
            && (day   == null || "undefined".equals(day)   || "null".equals(day)) ){
		setToday(calendar);
	}else{ // 3개의 Param이 모두 정상일 때
		setOtherToday(calendar, year, month, day);
	}

	String strToday = getStrToday();
	int intYear = getIntYear();
	int intMonth = getIntMonth();
	
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
	
	void setOtherToday(Calendar c, String y, String m, String day){
		today = c;
		today.set(Calendar.YEAR, Integer.parseInt(y));
		today.set(Calendar.MONTH, Integer.parseInt(m)-1);
		/*무조건 초기일로 설정해놔야 달 이동시 에러가 발생하지 않음 
		즉, 5/31일에서 4월달로 넘어가면 4/31일이 없기때문에 5/1일로 자동 설정함.
		그래서 무조건 날짜는 모든달이 있는 1일로 설정해놓은것임.
		설정안하면 무조건 오늘날짜로 가져와서 말일때 에러생김 
		*/
		
        if( day == null || "null".equals(day) || Integer.parseInt(day) > monthLength ){
            day = "01";
        }
        today.set(Calendar.DAY_OF_MONTH, 1);
        
		
		yyyy = today.get(Calendar.YEAR);
		mm = today.get(Calendar.MONTH)+1;
		dd = Integer.parseInt(day);
        
        setStrToday(new Integer(yyyy).toString() +new Integer(mm).toString() +new Integer(dd).toString());
        
		dayOfWeek = today.get(Calendar.DAY_OF_WEEK);
	}
	
	int getIntYear(){
		return yyyy;
	}
	
	int getIntMonth(){
		return mm;
	}

	String getStrToday(){
		return strToday; 
	}

	void setStrToday(String str){
		this.strToday = str;
	}
	
%>
<HTML>
<head>
<title>달력</title>

<!-- CSS Context -->
<LINK HREF="/common/css/calendar.css" REL="stylesheet" TYPE="TEXT/CSS">

<META http-equiv="Cache-Control" content="no-cache; no-store; no-save">

<script language="javascript"> 

function setMonth(month) {
	var year = document.frmCalendar.year.value;
	if(month < 10){
		month = "0" +month;
	}
	parent.setValue(year+month);
}

function setYear(year) {
	document.frmCalendar.year.value = year;
	document.frmCalendar.action = "calendarMain2.jsp";
	document.frmCalendar.submit();
}

</script>
</head>


<body leftmargin="0" topmargin="0">
<table width="270" height="100" border="0" cellpadding="0" cellspacing="0">
	<tr>
	<td align="center" valign="top">
	<table width="230" height="100%" border="0" cellpadding="0" cellspacing="0">
		<tr>
		<td align="center" valign="top">
		<table width="244" border="0" cellspacing="0" cellpadding="0">
			<tr>
			<td width="244">
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
			<td height="10" align="center"><img src="/common/images/Content_schedule_popupbar02.gif" width="241" height="15"></td>
			</tr>
			<tr>
			<td height="6" align="center">
			<table height="22" border="0" cellpadding="0" cellspacing="1" class="table_bg">
				<tr align="center" bgcolor="#F8F7EE">
				<td width="19" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('1')">1</a></td>
				<td width="19" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('2')">2</a></td>
				<td width="19" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('3')">3</a></td>
				<td width="19" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('4')">4</a></td>
				<td width="19" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('5')">5</a></td>
				<td width="19" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('6')">6</a></td>
				<td width="19" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('7')">7</a></td>
				<td width="19" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('8')">8</a></td>
				<td width="19" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('9')">9</a></td>
				<td width="19" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('10')">10</a></td>
				<td width="19" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('11')">11</a></td>
				<td width="19" class="schedule_number_black" onmouseover=this.style.backgroundColor="#F3F0D2" onmouseout=this.style.backgroundColor="F8F7EE"><a href="javascript:setMonth('12')">12</a></td>
				</tr>
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
