<%@ page import="dbl.cm.fw.constants.*"  contentType="text/html;charset=utf-8" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.util.*, dbl.cm.bc.comnmgnt.usermgnt.dto.*" %>
<%
	LoginDTO dto = LoginUtil.getLoginDTO(request);
	String userId = dto.getUserId();
%>
<html>
<head>
<META HTTP-EQUIV="Content-Type" content="text/html; charset=utf-8">
<style>
.button_newwin{
	cursor:hand;
	color:#3E3A17;
	height:18px;
	Width: 40px;
	background:#E6E6FA;
	border-width: 1px;
	border-style: solid;
	border-color: #C3C1AD #93917D #93917D #C3C1AD;
	line-height: 14px;
	font-size: 11px;	
}
</style>
<script language="javascript" src="/common/script/common.js"></script>

<script language="JavaScript">
var frameObj = parent.parent.BODY_FRAMESET; 

function f_OnLoad() {

    ds_menuList.DataID = "/cm.bc.comnmgnt.menumgnt.cmd.RetrieveMyMenuListCMD.do?userId=<%=userId%>";
    ds_menuList.Reset();

    ids_tvImage.DataID = "/common/jsp/menuTreeImg.jsp";
    ids_tvImage.Reset();
	f_ChangeWidth(180);
	tv_menu.Focus();
	
} 

function f_ChangeWidth(chgWidth) {
	//var obj = parent.parent.document.all.tags('FRAMESET')[1];
	var obj = parent.parent.BODY_FRAMESET;
	//alert("name : "+obj.id + "/ nodeName : "+obj.nodeName+"/ cols : "+obj.cols+"/ chgWidth: "+chgWidth);

	obj.cols = parseInt(chgWidth) + ",*";
	
	/*
	switch (gubun){
		case 0:
			if(parseInt(obj.cols)-chgWidth >= minWidth)
				obj.cols = (parseInt(obj.cols)-chgWidth) + ",*";
			break;
		case 1:
				obj.cols = (parseInt(obj.cols)+chgWidth) + ",*";
			break;
	}
	*/
	tv_menu.style.width = chgWidth - 10;
}

function f_MenuAreaOnMouseOut()
{
	if ( auto_resize_chk.checked == false ) return ;
	
  	if (window.event == null) return true;
  	var nX= window.event.clientX;
  	var nY= window.event.clientY;
  	//alert(nX + ":" + nY );
  	if ( nX > 330 || nY < 1 ) cfChangeMenuWidth(frameObj, tv_menu, MENU_FRAME_DEFAULT_WIDTH);
}

function f_MenuAreaOnMouseOver()
{
	if ( auto_resize_chk.checked == false ) return ;
	
	//tv_menu.Focus();
    //return ; 
 	if (window.event == null) return true;
  	var nX= window.event.clientX;
  	var nY= window.event.clientY;
  	//alert(nX + ":" + nY );
	cfChangeMenuWidth(frameObj, tv_menu, MENU_FRAME_MAX_WIDTH);  	
}

 
function f_SelectWorkMenuTab_Call()
{
	cfChangeMenuWidth(frameObj, tv_menu, MENU_FRAME_MAX_WIDTH); 
	parent.f_SelectWorkMenuTab(frameObj, tv_menu);
	//alert(MENU_FRAME_EXT_ONOFF);
}

function f_NewScreen_(pUrl)
{
		var w=850; 
		var h=600;			
		var win_left=(screen.width - w) /2 ;
		var win_top =(screen.height- h) /2 ;

		var now		  = new Date();
	    var win_name  = now.getHours().toString() + now.getMinutes().toString() + now.getSeconds().toString();

	    var mOpt = "toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=1,"+"left="+win_left+",top="+win_top+",width="+w+",height="+h ;
		pWin = window.open("", win_name,mOpt) ;
        pWin.location.href = pUrl;
        pWin.focus();
}


function f_NewScreen(pUrl) {

	//var expdate = new Date();
	//expdate.setTime(expdate.getTime() + 1000 * 3600 * 24 * 30);
	var w=0; 
	var h=0;			
	var win_left=screen.width ;
	var win_top =screen.height;
    var stats="toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=1,"+"left="+win_left+",top="+win_top+",width="+w+",height="+h ;

	var isSetCookie = GetCookie("NEW_SCREEN_OPENED") ;
    if ( isSetCookie == "T" )
    {
    	alert("새창이 이미 Open되어 있습니다.");
    	return;
    }
    else
    {
		//SetCookieExpire("NEW_SCREEN_OPENED","T",expdate);
		SetCookie("NEW_SCREEN_OPENED","T");
	}
    newWin=window.open ('','newWin',stats);
    newWin.location.href = "/index.html";
}


function f_AutoResizeChk()
{
	if ( auto_resize_chk.checked == true )
		MENU_FRAME_EXT_ONOFF = "ON";
	else
		MENU_FRAME_EXT_ONOFF = "OFF";
}

function f_SqlPopup(){
	//expdate.setTime(expdate.getTime() + 1000 * 3600 * 24 * 30);
	var w=1300; 
	var h=900;			
    var stats="toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=1,"+"width="+w+",height="+h ;
	window.open("/cm/zz/sql_popup.jsp","sql",stats); 
}

</script>

<!-----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------>
<!-----------------------------------------------------------------------------
    D A T A S E T   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------>
<object id="ds_menuList" classid="<%=DGauceCLSID.DATASET%>">
	<param name=SyncLoad	value="true">
</object>
<!-- 이미지 데이타셋 -->
<object id=ids_tvImage classid="<%=DGauceCLSID.IMGDATASET%>">
	<param name=SyncLoad	value="true">
</object>

<!-----------------------------------------------------------------------------
    G A U C E   C O M P O N E N T' S   E V E N T S  
------------------------------------------------------------------------------>
<script language=JavaScript for=ds_menuList event=OnLoadCompleted(rowcnt)>
var prevMenuGrpNm = "";

// 메뉴그룹명을 표시할 폴더를 레벨의 첫번째에 삽입
for (var j = 1; j <= ds_menuList.CountRow; j++) {
	if (ds_menuList.NameValue(j, "menuGrpNm") != prevMenuGrpNm) {
		prevMenuGrpNm = ds_menuList.NameValue(j, "menuGrpNm")
		
		ds_menuList.InsertRow(j);
		ds_menuList.NameValue(ds_menuList.RowPosition, "lvl") = 1;
		ds_menuList.NameValue(ds_menuList.RowPosition, "menuNm") = ds_menuList.NameValue(ds_menuList.RowPosition+1, "menuGrpNm");
		j = ds_menuList.RowPosition;
	}
}

// 이미지 컬럼 정보를 입력
for (var i = 1; i <= ds_menuList.CountRow; i++) {
	ds_menuList.NameValue(i, "imgC") = "imgClose";
	ds_menuList.NameValue(i, "imgD") = "imgPage";
	ds_menuList.NameValue(i, "imgO") = "imgOpen";
}	
tv_menu.Focus();
</script>
<script language="javascript" for=ds_menuList event=OnLoadError()>
     cfShowError(ds_menuList);
</script>

<script language="javascript" for=tv_menu event=OnItemClick()>
	var pageUrl = ds_menuList.NameValue(ds_menuList.RowPosition,"pgmScrPath")
				+ ds_menuList.NameValue(ds_menuList.RowPosition,"pgmId");
				
	if (ds_menuList.NameValue(ds_menuList.RowPosition,"actPgmParam") != "") {
		pageUrl += "?" + ds_menuList.NameValue(ds_menuList.RowPosition,"actPgmParam");
		
		if (ds_menuList.NameValue(ds_menuList.RowPosition,"menuParam") != "")
			pageUrl += "&" + ds_menuList.NameValue(ds_menuList.RowPosition,"menuParam");
	}
	else {
		if (ds_menuList.NameValue(ds_menuList.RowPosition,"menuParam") != "")
			pageUrl += "?" + ds_menuList.NameValue(ds_menuList.RowPosition,"menuParam");
	}
		
	var menuNm = ds_menuList.NameValue(ds_menuList.RowPosition,"menuNm");


	if (pageUrl != null && (pageUrl.indexOf(".jsp") != -1 || pageUrl.indexOf(".html") != -1)) {
        //alert("'" + pageUrl + "':" + menuNm);
        cfCommonTabMenuAdd(pageUrl, menuNm);
	}
	else {
		return;
    }
</script>
</head>

<!-----------------------------------------------------------------------------
    화면 영역
------------------------------------------------------------------------------>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onLoad="f_OnLoad()" onMouseOver="f_MenuAreaOnMouseOver();" onMouseOut="f_MenuAreaOnMouseOut();">
<table height="100%" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<!--
		<td height="35" bgcolor=#E3E3E3 colspan=3 background="/common/images/menu_back.gif">
		-->
		<td height="35" bgcolor=#E3E3E3 colspan=3>
		<table width="180" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td><a href="#" onClick="f_SelectWorkMenuTab_Call();" onfocus="this.blur()"><img
					src="/common/images/left_tap01_off.gif" name="Image21"  border="0"></a></td>
				<td><img src="/common/images/left_tap02_on.gif" name="Image22" usemap="#mymenu"  border="0"></td>
				
			</tr>
		</table>
		</td>
	</tr>
	<tr height=10 valign=center>
		<td width=1 bgcolor=#E3E3E3>&nbsp;</td>		
		<td align=left>

		<input type="button" class="button_newwin" value="새창" onclick="f_NewScreen('');">&nbsp;
		<a href="#" onClick="cfChangeMenuWidth(frameObj, tv_menu, MENU_FRAME_DEFAULT_WIDTH,'Y');" onfocus="this.blur()"><img src="/common/images/lmenu_minus.gif" border="0"></a>
		<a href="#" onClick="cfChangeMenuWidth(frameObj, tv_menu, MENU_FRAME_MAX_WIDTH,'Y');" 
			onfocus="this.blur()"><img src="/common/images/lmenu_plus.gif" border="0"></a><input type="checkbox" id="auto_resize_chk" onClick="f_AutoResizeChk('');"><font size=1 color="#20B2AD">AutoResize</font>

		</td>
		<td width=1 bgcolor=#E3E3E3>&nbsp;</td>										
	</tr>		
	<tr height="100%">
		<td width=1 bgcolor=#E3E3E3>&nbsp;</td>		
		<td align="center" valign="top">
		<comment id='__NSID__'><object id=tv_menu classid="<%=DGauceCLSID.TREEVIEW%>" style="height:100%; width:340;">
			<param name="FontSize"   value="10">
			<param name="FontName"   value="돋움">
			<param name=SingleExpand value="true">
			<param name=ExpandLevel  value="0">
			<param name=BorderStyle  value="0">
			<param name=DataID       value="ds_menuList">
			<param name=ImgDataID	 value="ids_tvImage">
			<param name=TextColumn   value="menuNm">
			<param name=LevelColumn  value="lvl">
			<param name=ImgDColumn	 value="imgD">
			<param name=ImgOColumn	 value="imgO">
			<param name=ImgCColumn	 value="imgC">
			<param name=UseImage     value="true">
			<param name=BackImage    value="/common/images/left_bottom_back.jpg">
		</object></comment> <script> __ws__(__NSID__); </script>
		</td>
		<td width=1 bgcolor=lavender>&nbsp;</td>			
	</tr>
	<tr>
		<% if("hades119".equals(userId)||"281807".equals(userId)||"281963".equals(userId)||"290060".equals(userId)||"290146".equals(userId)||"cmh0313".equals(userId)||"273772".equals(userId)){ %>
			<td colspan=3><input type="button" id="sqlpop" value="쿼리팝" onClick="f_SqlPopup();"></td>
		<%}else{%>
			<td colspan=3></td>
		<%}%>
	</tr>
	<!-- tr height=10 valign=center>
		<td width=1 bgcolor=lavender>&nbsp;</td>		
		<td align=left>
		<a href="#" onClick="cfChangeMenuWidth(frameObj, tv_menu, MENU_FRAME_DEFAULT_WIDTH);" onfocus="this.blur()"><img src="/common/images/lmenu_minus.gif" border="0"></a>
		<a href="#" onClick="cfChangeMenuWidth(frameObj, tv_menu, MENU_FRAME_MAX_WIDTH);" onfocus="this.blur()"><img src="/common/images/lmenu_plus.gif" border="0"></a>&nbsp;
		</td>
		<td width=1 bgcolor=lavender>&nbsp;</td>										
	</tr-->	
	<!-- 
	<tr>
		<td valign="bottom" background="/common/images/left_back.gif"><img
			src="/common/images/left_bottom.gif" width="180" height="6"></td>
	</tr>
	-->

</table>
<map name="mymenu">
	<area shape="rect" coords="65,11,81,27" alt="사용자즐겨찾기 관리"
		href="javascript:cfCommonTabMenuAdd('/cm/bc/comnmgnt/menumgnt/zz_611_01_02b.jsp', '사용자즐겨찾기');">
</map>

</body>
</html>
