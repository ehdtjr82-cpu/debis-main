// DGauceCLSID.js
window.DGauceCLSID = window.DGauceCLSID || {};
var D = window.DGauceCLSID;

D.BIND = "";
D.XCHART = "";
D.LUXECOMBO = "";
D.DATASET = "";
D.INPUTFILE = "";
D.GRID = "";
D.IMGDATASET = "";
D.TR = "";
D.EMEDIT = "";
D.MENU = "";
D.RADIO = "";
D.TAB = "";
D.TEXTAREA = "";
D.TREEVIEW = "";
D.REPORTS = "";

D.ACTIVE_UPDATE = "";
D.ACTIVE_UPDATE_CLSID = "";
D.ACTIVE_UPDATE_CODEBASE = "";
D.ACTIVE_UPDATE_CONFIG = "";
D.ACTIVE_UPDATE_URL = "";

/**
 * config 객체를 받아 초기화
 * @param {Object} config - config.getStringByLevel1Name(key1, key2, specName) 형태로 값 가져오는 객체
 * @param {String} specName
 */
D.reset = function(config, specName = "default") {
    this.BIND = config.getStringByLevel1Name("gauce", "bind", specName);
    this.XCHART = config.getStringByLevel1Name("gauce", "xchart", specName);
    this.LUXECOMBO = config.getStringByLevel1Name("gauce", "luxecombo", specName);
    this.DATASET = config.getStringByLevel1Name("gauce", "dataset", specName);
    this.INPUTFILE = config.getStringByLevel1Name("gauce", "inputfile", specName);
    this.GRID = config.getStringByLevel1Name("gauce", "grid", specName);
    this.IMGDATASET = config.getStringByLevel1Name("gauce", "imgdataset", specName);
    this.TR = config.getStringByLevel1Name("gauce", "tr", specName);
    this.EMEDIT = config.getStringByLevel1Name("gauce", "emedit", specName);
    this.MENU = config.getStringByLevel1Name("gauce", "menu", specName);
    this.RADIO = config.getStringByLevel1Name("gauce", "radio", specName);
    this.TAB = config.getStringByLevel1Name("gauce", "tab", specName);
    this.TEXTAREA = config.getStringByLevel1Name("gauce", "textarea", specName);
    this.TREEVIEW = config.getStringByLevel1Name("gauce", "treeview", specName);
    this.REPORTS = config.getStringByLevel1Name("gauce", "reports", specName);

    this.ACTIVE_UPDATE = config.getStringByLevel1Name("gauce-server", "active-update", specName);
    this.ACTIVE_UPDATE_CLSID = config.getStringByLevel1Name("gauce-server", "active-update-CLSID", specName);
    this.ACTIVE_UPDATE_CODEBASE = this.ACTIVE_UPDATE + config.getStringByLevel1Name("gauce-server", "active-update-codebase", specName);
    this.ACTIVE_UPDATE_CONFIG = this.ACTIVE_UPDATE + config.getStringByLevel1Name("gauce-server", "active-update-config", specName);
    this.ACTIVE_UPDATE_URL = this.ACTIVE_UPDATE + config.getStringByLevel1Name("gauce-server", "active-update-url", specName);
};

// 사용 예시
// DGauceCLSID.reset(DFWConfig.getConfig(), "default");
// console.log(DGauceCLSID.BIND);
