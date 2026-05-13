
<%@ page import="dbl.cm.fw.constants.*,dbl.cm.zz.util.*,org.apache.commons.lang.time.*" contentType="text/html;charset=utf-8" %>
<%@ page import="dbl.ds.co.util.DsCommonUtil" %>
<%@ page import="dbl.cm.zz.util.*" %>

<html> 
<head>
<title>리스트 입력</title>
<META HTTP-EQUIV="Content-Type" content="text/html; charset=utf-8">
<LINK HREF="/common/css/common.css" REL="STYLESHEET" type="TEXT/CSS">
<script language="javascript" src="/common/script/common.js"></script>
<script language="javascript" src="/common/script/t_popupdefine.js"></script>
<style type="text/css">
	body {
		margin-left: 5px;
		margin-top: 5px;
		margin-right: 0px;
	}
</style>
<script language="javascript">
var args = window.dialogArguments;
var odrList = args[0].trim();  //오더리스트
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
	function f_OnLoad() {  

		txa_rmk.Text = odrList;  

  	}
  	
  	function f_Close() {  

		var arrRtnVal = new Array();
		txa_rmk.Text = txa_rmk.Text.replace(/\n/g,"") ; //계행문자 ,로 치환
		txa_rmk.Text = txa_rmk.Text.replace(/\r/g,",") ; //계행문자 ,로 치환
		txa_rmk.Text = txa_rmk.Text.replace(/\s/g,"").trim(); //공백제거
		arrRtnVal[0] = txa_rmk.Text;
		window.returnValue = arrRtnVal;

  	}


</script>

</head>

<!-----------------------------------------------------------------------------
    화면영역 시작
------------------------------------------------------------------------------>
<body OnLoad="f_OnLoad();"  Onbeforeunload="f_Close();" >
<table border="0" cellspacing="0" cellpadding="0">
  <tr> 
    <td align="center" valign="top">
    <comment id='__NSID__'><object id=txa_rmk class="comn"
			classid="CLSID:91B0A4F0-3206-4564-9BB4-AF9055DEF8A1" height=190 width=230 objType="data" >
			<param name=Modified value="true"> 
			<param name=Enable value="true">
			<param name=WantReturn value="true">
		</object></comment> <script> __ws__(__NSID__); </script>

    </td>
  </tr>
</table>
<!-----------------------------------------------------------------------------
    화면영역 종료
------------------------------------------------------------------------------>
<!-----------------------------------------------------------------------------
      H I D D E N   D E F I N I T I O N
------------------------------------------------------------------------------>

<!------- EDI 맵핑 조회조건 용 Hidden 값 ---------->
<INPUT type="hidden" id="hid_docCd" >	<!-- 문서코드 -->
<INPUT type="hidden" id="hid_wrkPlCd" >	<!-- 작업장코드 -->
<INPUT type="hidden" id="hid_itemCd" >	<!-- 항목코드 -->
<INPUT type="hidden" id="hid_osideCd" >	<!-- 외부코드 -->

<!------- 조회조건 용 Hidden 값 ---------->
<INPUT type="hidden" id="hid_repClntNo"  >	<!-- 대표거래처번호 -->


<!-----------------------------------------------------------------------------
      B I N D   C O M P O N E N T S   D E F I N I T I O N
------------------------------------------------------------------------------>
<object id=bd_condition classid="<%=DGauceCLSID.BIND%>">
  <param name=DataID    value=ds_Query>
  <param name=BindInfo  value='
  
  <c> Col=reqClntNo	        Ctrl=ed_clntNo			Param=text			</c>
  <c> Col=reqClntNo2        Ctrl=ed_clntNo2         Param=text          </c>
  <c> Col=wrkStDtFm         Ctrl=ed_outFromDt		Param=text  		</c>
  <c> Col=wrkStDtTo         Ctrl=ed_outToDt			Param=text  		</c>  
  <c> Col=sndYn        		Ctrl=lc_odrCreatCls		Param=BindColVal  	</c>
  <c> Col=mchtOdrNo         Ctrl=ed_mchtOdrNo		Param=text  		</c>
  <C> Col=odrNo  			Ctrl=ed_odrNo     		Param=Text   </C>	<!-- 동부 작업장코드 -->
 '>
</object>


</body>
</html>