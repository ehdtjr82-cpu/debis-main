// DOZConstants.js
window.DOZConstants = window.DOZConstants || {};
var DOZConstants = window.DOZConstants;

DOZConstants.CONNECTION_SERVER = "";
DOZConstants.CONNECTION_PORT = "";
DOZConstants.CONNECTION_SERVLET = "";
DOZConstants.VIEWER_CLSID = "";
DOZConstants.ZTransferX_CLSID = "";
DOZConstants.ZTransferX_CODEBASE = "";
DOZConstants.ZTransferX_DOWNLOAD_SERVER = "";
DOZConstants.ZTransferX_DOWNLOAD_PORT = "";
DOZConstants.ZTransferX_DOWNLOAD_INSTRUCTION = "";
DOZConstants.ZTransferX_INSTALL_BASE = "";
DOZConstants.ZTransferX_INSTALL_NAMESPACE = "";

// Java의 reset() 대신 JS에서 값을 셋팅하는 함수
DOZConstants.reset = function(config, specName = "default") {
    this.CONNECTION_SERVER = config["oz-server.connection.server." + specName] || "";
    this.CONNECTION_PORT = config["oz-server.connection.port." + specName] || "";
    this.CONNECTION_SERVLET = config["oz-server.connection.servlet." + specName] || "";
    this.VIEWER_CLSID = config["oz-server.ozrviewer-CLSID." + specName] || "";
    this.ZTransferX_CLSID = config["oz-server.ZTransferX-CLSID." + specName] || "";
    this.ZTransferX_CODEBASE = config["oz-server.ZTransferX-codebse." + specName] || "";
    this.ZTransferX_DOWNLOAD_SERVER = config["oz-server.ZTransferX-download.Server." + specName] || "";
    this.ZTransferX_DOWNLOAD_PORT = config["oz-server.ZTransferX-download.Port." + specName] || "";
    this.ZTransferX_DOWNLOAD_INSTRUCTION = config["oz-server.ZTransferX-download.Instruction." + specName] || "";
    this.ZTransferX_INSTALL_BASE = config["oz-server.ZTransferX-install.Base." + specName] || "";
    this.ZTransferX_INSTALL_NAMESPACE = config["oz-server.ZTransferX-install.Namespace." + specName] || "";
};

// 사용 예시
// DOZConstants.reset(configObject);  
// console.log(DOZConstants.CONNECTION_SERVER);
