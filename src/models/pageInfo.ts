class PageInfo {
  public readonly protocol : string;

  public readonly href : string;

  public readonly hostname : string;

  public readonly port : string;

  public readonly pathname : string;

  public readonly queryString : string;

  public readonly hash : string;

  public readonly userAgent: string;

  public readonly isWindows: boolean;

  public readonly isMac: boolean;

  public readonly isLinux: boolean;

  public readonly isiPhone: boolean;

  public readonly isAndroid: boolean;

  public readonly isiPad: boolean;

  public readonly isIE11: boolean;

  public readonly isEdge: boolean;

  public readonly isOpera: boolean;

  public readonly isChrome: boolean;

  public readonly isFireFox: boolean;

  public readonly isSafari: boolean;

  public readonly isMobile: boolean;

  public readonly isTablet: boolean;

  public readonly isPC: boolean;

  constructor() {
    this.protocol = window.location.protocol;
    this.href = window.location.href;
    this.hostname = window.location.hostname;
    this.port = window.location.port;
    this.pathname = window.location.pathname;
    this.queryString = window.location.search?.substring(1);
    this.hash = window.location.hash;
    this.userAgent = navigator.userAgent;
    this.isWindows = this.userAgent.indexOf('Windows NT') > 0;
    this.isMac = this.userAgent.indexOf('Mac OS X') > 0;
    this.isLinux = this.userAgent.indexOf('Linux') > 0;
    this.isiPhone = this.userAgent.indexOf('iPhone') > 0;
    this.isAndroid = this.userAgent.indexOf('Android') > 0;
    this.isiPad = this.userAgent.indexOf('iPad') > 0;
    this.isIE11 = this.userAgent.indexOf('Trident/7.0') > 0;
    this.isEdge = this.userAgent.indexOf('Edg') > 0;
    this.isOpera = this.userAgent.indexOf('OPR') > 0;
    this.isChrome = this.userAgent.indexOf('chrome') > 0 && !this.isEdge && !this.isOpera;
    this.isFireFox = this.userAgent.indexOf('Firefox') > 0;
    this.isSafari = this.userAgent.indexOf('Safari') > 0 && !this.isEdge && !this.isChrome;
    this.isMobile = !!this.userAgent.match(/(iPhone|iPod|Android.*Mobile)/i);
    this.isTablet = !!this.userAgent.match(/(iPad|(?!(Android.*Mobile)+)Android)/i);
    this.isPC = !this.isMobile && !this.isTablet;
  }
}

export default PageInfo;
