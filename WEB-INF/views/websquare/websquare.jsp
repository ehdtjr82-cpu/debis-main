<%@page contentType="text/html; charset=utf-8" language="java"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
<link rel="shortcut icon" href="../../favicon.ico" />
<title>DEBIS 통합물류 시스템</title>
<script type="text/javascript">
	var contextPath = "${pageContext.request.contextPath}";
	var movePage = "<%=(String) request.getAttribute("movePage")%>";

	var WebSquareExternal = {
		"baseURI" : contextPath + "/websquare/",
		"w2xPath" : contextPath + movePage,
	};
</script>
<script type="text/javascript" src="${pageContext.request.contextPath}/websquare/_websquare_/javascriptLoader.wq"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/websquare/app.js"></script>
</head>
<body>
</body>
</html>