// DCSS.js
window.DCSS = window.DCSS || {};
const D = window.DCSS;

D.MANDATORY_COLOR = "";
D.OPTIONAL_COLOR = "";
D.USE_COLOR = "";
D.TABLE_WIDTH = "";
D.TABLE_WIDTH_EXT = "";
D.TABLE_WIDTH_OZ_COND = "";
D.GRID_HEIGHT_LINE_5 = "";
D.GRID_HEIGHT_LINE_10 = "";
D.GRID_HEIGHT_LINE_15 = "";

/**
 * config 객체를 받아 초기화
 * @param {Object} config - config.getStringByLevel1Name(key1, key2, specName) 형태로 값 가져오는 객체
 * @param {String} specName
 */
D.reset = function(config, specName = "default") {
    this.MANDATORY_COLOR = config.getStringByLevel1Name("css", "mandatory-color", specName);
    this.OPTIONAL_COLOR = config.getStringByLevel1Name("css", "optional-color", specName);
    this.USE_COLOR = config.getStringByLevel1Name("css", "use-color", specName);
    this.TABLE_WIDTH = config.getStringByLevel1Name("css", "table-width", specName);
    this.TABLE_WIDTH_EXT = config.getStringByLevel1Name("css", "table-width-ext", specName);
    this.TABLE_WIDTH_OZ_COND = config.getStringByLevel1Name("css", "table-width-oz-cond", specName);
    this.GRID_HEIGHT_LINE_5 = config.getStringByLevel1Name("css", "grid-height-line-5", specName);
    this.GRID_HEIGHT_LINE_10 = config.getStringByLevel1Name("css", "grid-height-line-10", specName);
    this.GRID_HEIGHT_LINE_15 = config.getStringByLevel1Name("css", "grid-height-line-15", specName);
};

// 사용 예시
// DCSS.reset(DFWConfig.getConfig(), "default");
// console.log(DCSS.MANDATORY_COLOR);
