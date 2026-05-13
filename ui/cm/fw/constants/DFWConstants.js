// DFWConstants.js
window.DFWConstants = window.DFWConstants || {};

var D = window.DFWConstants;

// Static Constants
D.APPLY_AUTH_OK = true;

D.LOGIN_PAGE = "/common/jsp/login.jsp";
D.LOGIN_MAIN_PAGE = "/common/jsp/login_main.jsp";
D.LOGIN_POPUP_PAGE = "/common/jsp/login_popup.jsp";
D.LOGIN_MAPPING = "/cm.au.LoginCMD.do";
D.AUTH_FAILED_PAGE = "/common/jsp/auth_failed.jsp";
D.ERROR_PAGE = "/common/jsp/error.jsp";
D.CONTROL_PAGE = "/common/jsp/control.jsp";
D.SUCCESS_PAGE = "SUCCESS_PAGE";
D.ELE_CONTRACT_PAGE = "ELE_CONTRACT_PAGE";

D.ERROR_DETAIL = "ERROR_DETAIL";
D.ACTION_TYPE = "ACTION_TYPE";
D.REFRESH_SELF = "REFRESH_SELF";
D.REFRESH_PARENT = "REFRESH_PARENT";
D.MESSAGE_ERROR = "MESSAGE_ERROR";
D.TRACE_ERROR = "TRACE_ERROR";
D.ALERT_MESSAGE = "ALERT_MESSAGE";
D.FORWARD_PAGE = "FORWARD_PAGE";

D.LOGIN_PAGE_MAPPING = "LOGIN_PAGE_MAPPING";
D.ERROR_PAGE_MAPPING = "ERROR_PAGE_MAPPING";
D.CONTROL_PAGE_MAPPING = "CONTROL_PAGE_MAPPING";

D.LOGIN_INFO = "LOGIN_INFO";
D.TARGET_URL = "TARGET_URL";

D.FW_CONFIG = "";
D.LOG4J_PROPERTY_FILE_NAME = "";
D.CONFIG_ROOT = "";

D.SYSTEM = "/system";
D.FRAME_WORK_PAGE_ROW_INDEX_COL = "FRAME_WORK_PAGE_ROW_INDEX_COL";
D.MSG_DELIMETER = "@";
D.BIZLOGGER = "BIZLOGGER";
D.FWLOGGER = "FWLOGGER";
D.TRLOGGER = "TRLOGGER";
D.SQLLOGGER = "SQLLOGGER";

D.GAUCE_HEADER_KEY = "GAUCE_HEADER_KEY";
D.GAUCE_PAGING_KEY = "GAUCE_PAGING_KEY";
D.GAUCE_HEADER_MAKE_KEY = "GAUCE_HEADER_MAKE_KEY";

D.FILE_UPLOAD_RESULT = "FILE_UPLOAD_RESULT";
D.FILE_UPLOAD_ERROR = "FILE_UPLOAD_ERROR";
D.FILE_UPLOAD_SYSTEM_PATH = "FILE_UPLOAD_SYSTEM_PATH";
D.FILE_DOWNLOAD_ERROR = "FILE_DOWNLOAD_ERROR";

D.DEFAULT = "default";
D.SUB_SYS_START_POS = 7;
D.SUB_SYS_END_POS = 9;

D.ACTION_MAPPING_TAIL = ".XML";
D.SQL_MAP_TABLE_HEADER = "TB_";
D.SQL_MAP_CONFIG_TAIL = "_CONFIG.XML";
D.SQL_MAP_CONFIG_TAIL_EBC = "EBC.XML";

D.CURRENT_SQL_MAP_INFO_KEY = "CURRENT_SQL_MAP_INFO_KEY";
D.SYMMETRIC_KEY = "dongbuprosperity";

// Dynamic Defaults
D.SCHEDULE_ENABLED = false;
D.SCHEDULE_CMD_CNT = 0;
D.TRACE_LOG_OK = true;
D.JDBC_USAGE_TRACE_LOG_OK = true;
D.SQL_PARAM_VALUE_TRACE_LOG_OK = true;
D.ORG_SQL_TRACE_LOG_OK = true;
D.SQL_TRACE_DELIMETER = "■";
D.DELIMETER = ",";
D.HTTP_REQ_CONVERTER_LOG_OK = true;

D.TIMER_OBSERVER_PERIOD_MIN = 1;
D.TIMER_OBSERVER_OK = true;

D.DBMS_LOG_BUFFER_SIZE = 10000;
D.DBMS_LOG_BUFFER_FLUSH_PERIOD_MIN = 60;
D.TRACE_LOG_TO_DBMS_OK = true;
D.MSG_EXCEPTION_LOG_TO_DBMS_OK = true;
D.FILE_TRANSFER_LOG_TO_DBMS_OK = true;
D.SQL_PARAM_VALUE_TRACE_LOG_TO_DBMS_OK = true;
D.ORG_SQL_TRACE_LOG_TO_DBMS_OK = true;
D.SQL_TRACE_LOG_PART_SIZE = 1000;

D.IBATIS_PAGING_CACHE_ENABLED = true;
D.SQL_MAP_ROOT = "/sqlmap";
D.ACTION_ROOT = "/action";
D.DEFAULT_LOCAL_JNDI_NAME = "db.co.fw.ejb.DCommonSessionLocalEJB";
D.DEFAULT_LONG_LOCAL_JNDI_NAME = "db.co.fw.ejb.DCommonLongSessionLocalEJB";
D.DEFAULT_BMT_LOCAL_JNDI_NAME = "db.co.fw.ejb.DCommonBMTSessionLocalEJB";
D.DEFAULT_NUM_OF_ROW_PER_PAGE = 10;
D.DEFAULT_NUM_OF_INDEX_PER_PAGE = 10;

D.UPLOAD_PATH_ROOT_STR = "/";
D.UPLOAD_TEMP_PATH_STR = "/";
D.DUPLICATE_RETRY_COUNT = 10;
D.UPLOAD_FORWARD_PAGE = "";
D.DOWNLOAD_FORWARD_PAGE = "";

D.COMMON_CODE_CACHE_ENABLED = false;
D.COMMON_CODE_CACHE_ALL_AT_ONCE = false;

D.TIMESTAMP_PATTERN = "";
D.SIZE_MAX = -1;
D.SIZE_THRESHOLD = 1;
D.HEADER_ENCODING = "";
D.FTP_SYNC_MODE = false;
D.FTP_SERVER_IP_LOCAL = "";
D.FTP_SERVER_IP_REMOTE = "";
D.FTP_SERVER_PORT_LOCAL = 21;
D.FTP_SERVER_PORT_REMOTE = 21;
D.FTP_SERVER_USER_LOCAL = "us_ftp";
D.FTP_SERVER_USER_REMOTE = "us_ftp";
D.FTP_SERVER_PASSWORD_LOCAL = "us_ftp";
D.FTP_SERVER_PASSWORD_REMOTE = "us_ftp";
D.FTP_SERVER_SYNC_PATH_LOCAL = "";
D.FTP_SERVER_SYNC_PATH_REMOTE = "";
D.FTP_SERVER_DATA_CONNECTION_MODE_LOCAL = "";
D.FTP_SERVER_DATA_CONNECTION_MODE_REMOTE = "";

D.DRM_ACCESS_KEY1 = "";
D.DRM_ACCESS_KEY2 = "";
D.DRM_URL = "";

// init function for dynamic config
D.init = function(configJson) {
    const cfg = configJson;

    this.APPLY_AUTH_OK = cfg["auth-check"]?.["apply-auth"] ?? this.APPLY_AUTH_OK;
    this.SCHEDULE_ENABLED = cfg["schedule-config"]?.["schedule-enabled"] ?? this.SCHEDULE_ENABLED;
    this.SCHEDULE_CMD_CNT = cfg["schedule-config"]?.["schedule-cmd-cnt"] ?? this.SCHEDULE_CMD_CNT;

    this.TRACE_LOG_OK = cfg["trace"]?.["tier"] ?? this.TRACE_LOG_OK;
    this.JDBC_USAGE_TRACE_LOG_OK = cfg["trace"]?.["jdbc"] ?? this.JDBC_USAGE_TRACE_LOG_OK;
    this.SQL_PARAM_VALUE_TRACE_LOG_OK = cfg["trace"]?.["sql"] ?? this.SQL_PARAM_VALUE_TRACE_LOG_OK;
    this.ORG_SQL_TRACE_LOG_OK = cfg["trace"]?.["org-sql"] ?? this.ORG_SQL_TRACE_LOG_OK;
    this.SQL_TRACE_DELIMETER = cfg["trace"]?.["sql-delim"] ?? this.SQL_TRACE_DELIMETER;
    this.HTTP_REQ_CONVERTER_LOG_OK = cfg["trace"]?.["http-req-converter"] ?? this.HTTP_REQ_CONVERTER_LOG_OK;

    this.TIMER_OBSERVER_OK = cfg["timer"]?.["observer"] ?? this.TIMER_OBSERVER_OK;
    this.TIMER_OBSERVER_PERIOD_MIN = (cfg["timer"]?.["observer-period-min"] ?? 1) * 60 * 1000;

    this.DBMS_LOG_BUFFER_SIZE = cfg["dbms-trace"]?.["buffer-size"] ?? this.DBMS_LOG_BUFFER_SIZE;
    this.DBMS_LOG_BUFFER_FLUSH_PERIOD_MIN = (cfg["dbms-trace"]?.["flush-period-min"] ?? 60) * 60 * 1000;

    this.ACTION_ROOT = (cfg.CONFIG_ROOT ?? "") + (cfg["struts"]?.["action-map-root"] ?? this.ACTION_ROOT);
    this.SQL_MAP_ROOT = (cfg.CONFIG_ROOT ?? "") + (cfg["ibatis"]?.["sql-map-config-root"] ?? this.SQL_MAP_ROOT);

    this.IBATIS_PAGING_CACHE_ENABLED = cfg["ibatis"]?.["paging-cache-enabled"] ?? this.IBATIS_PAGING_CACHE_ENABLED;
    this.DEFAULT_LOCAL_JNDI_NAME = cfg["session-ejb"]?.["local-jndi-name"] ?? this.DEFAULT_LOCAL_JNDI_NAME;

    this.DEFAULT_NUM_OF_ROW_PER_PAGE = cfg["paging"]?.["rows-per-page"] ?? this.DEFAULT_NUM_OF_ROW_PER_PAGE;
    this.DEFAULT_NUM_OF_INDEX_PER_PAGE = cfg["paging"]?.["indexes-per-page"] ?? this.DEFAULT_NUM_OF_INDEX_PER_PAGE;

    this.UPLOAD_PATH_ROOT_STR = cfg["file-upload"]?.["upload-path"] ?? this.UPLOAD_PATH_ROOT_STR;
    this.UPLOAD_TEMP_PATH_STR = cfg["file-upload"]?.["repository-path"] ?? this.UPLOAD_TEMP_PATH_STR;
    this.DUPLICATE_RETRY_COUNT = cfg["file-upload"]?.["duplicate-retry-count"] ?? this.DUPLICATE_RETRY_COUNT;
    this.UPLOAD_FORWARD_PAGE = cfg["file-upload"]?.["upload-forward-page"] ?? this.UPLOAD_FORWARD_PAGE;
    this.DOWNLOAD_FORWARD_PAGE = cfg["file-upload"]?.["download-forward-page"] ?? this.DOWNLOAD_FORWARD_PAGE;

    this.COMMON_CODE_CACHE_ENABLED = cfg["common-code"]?.["cache-enabled"] ?? this.COMMON_CODE_CACHE_ENABLED;
    this.COMMON_CODE_CACHE_ALL_AT_ONCE = cfg["common-code"]?.["cache-all-at-once"] ?? this.COMMON_CODE_CACHE_ALL_AT_ONCE;

    this.TIMESTAMP_PATTERN = cfg["file-upload"]?.["timestamp-pattern"] ?? this.TIMESTAMP_PATTERN;
    this.SIZE_MAX = cfg["file-upload"]?.["size-max"] ?? this.SIZE_MAX;
    this.SIZE_THRESHOLD = cfg["file-upload"]?.["size-threshold"] ?? this.SIZE_THRESHOLD;
    this.HEADER_ENCODING = cfg["file-upload"]?.["header-encoding"] ?? this.HEADER_ENCODING;

    this.FTP_SYNC_MODE = cfg["file-upload"]?.["ftp-sync-mode"] ?? false;
    this.DRM_ACCESS_KEY1 = cfg["drm"]?.["drmAccessKey1"] ?? "";
    this.DRM_ACCESS_KEY2 = cfg["drm"]?.["drmAccessKey2"] ?? "";
    this.DRM_URL = cfg["drm"]?.["drmUrl"] ?? "";

    // FTP 서버 동적 설정
    if (this.FTP_SYNC_MODE) {
        const localIP = cfg.localIP;
        const first = cfg["ftp-sync"]?.first ?? {};
        const second = cfg["ftp-sync"]?.second ?? {};

        if (localIP === first.ip) {
            this.FTP_SERVER_IP_LOCAL = first.ip;
            this.FTP_SERVER_PORT_LOCAL = first.port;
            this.FTP_SERVER_USER_LOCAL = first.user;
            this.FTP_SERVER_PASSWORD_LOCAL = first.password;
            this.FTP_SERVER_SYNC_PATH_LOCAL = first["sync-path"];
            this.FTP_SERVER_DATA_CONNECTION_MODE_LOCAL = first["data-connection-mode"];

            this.FTP_SERVER_IP_REMOTE = second.ip;
            this.FTP_SERVER_PORT_REMOTE = second.port;
            this.FTP_SERVER_USER_REMOTE = second.user;
            this.FTP_SERVER_PASSWORD_REMOTE = second.password;
            this.FTP_SERVER_SYNC_PATH_REMOTE = second["sync-path"];
            this.FTP_SERVER_DATA_CONNECTION_MODE_REMOTE = second["data-connection-mode"];
        } else if (localIP === second.ip) {
            this.FTP_SERVER_IP_LOCAL = second.ip;
            this.FTP_SERVER_PORT_LOCAL = second.port;
            this.FTP_SERVER_USER_LOCAL = second.user;
            this.FTP_SERVER_PASSWORD_LOCAL = second.password;
            this.FTP_SERVER_SYNC_PATH_LOCAL = second["sync-path"];
            this.FTP_SERVER_DATA_CONNECTION_MODE_LOCAL = second["data-connection-mode"];

            this.FTP_SERVER_IP_REMOTE = first.ip;
            this.FTP_SERVER_PORT_REMOTE = first.port;
            this.FTP_SERVER_USER_REMOTE = first.user;
            this.FTP_SERVER_PASSWORD_REMOTE = first.password;
            this.FTP_SERVER_SYNC_PATH_REMOTE = first["sync-path"];
            this.FTP_SERVER_DATA_CONNECTION_MODE_REMOTE = first["data-connection-mode"];
        } else {
            console.error("웹로직 서버 IP와 FTP 설정 IP가 일치하지 않습니다.");
        }
    }
};
