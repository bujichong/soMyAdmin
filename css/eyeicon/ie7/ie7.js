/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'eyeicon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-glass': '&#xe900;',
		'icon-music': '&#xe901;',
		'icon-search': '&#xe902;',
		'icon-envelope': '&#xe903;',
		'icon-heart': '&#xe904;',
		'icon-star': '&#xe905;',
		'icon-star_empty': '&#xe906;',
		'icon-user': '&#xe907;',
		'icon-film': '&#xe908;',
		'icon-th_large': '&#xe909;',
		'icon-th': '&#xe90a;',
		'icon-th_list': '&#xe90b;',
		'icon-ok': '&#xe90c;',
		'icon-remove': '&#xe90d;',
		'icon-zoom_in': '&#xe90e;',
		'icon-zoom_out': '&#xe90f;',
		'icon-off': '&#xe910;',
		'icon-signal': '&#xe911;',
		'icon-cog': '&#xe912;',
		'icon-trash': '&#xe913;',
		'icon-home2': '&#xe914;',
		'icon-file_alt': '&#xe915;',
		'icon-time': '&#xe916;',
		'icon-road': '&#xe917;',
		'icon-download_alt': '&#xe918;',
		'icon-download2': '&#xe919;',
		'icon-upload2': '&#xe91a;',
		'icon-inbox': '&#xe91b;',
		'icon-play_circle': '&#xe91c;',
		'icon-repeat': '&#xe91d;',
		'icon-refresh': '&#xe91e;',
		'icon-list_alt': '&#xe91f;',
		'icon-lock': '&#xe920;',
		'icon-flag': '&#xe921;',
		'icon-headphones': '&#xe922;',
		'icon-volume_off': '&#xe923;',
		'icon-volume_down': '&#xe924;',
		'icon-volume_up': '&#xe925;',
		'icon-qrcode': '&#xe926;',
		'icon-barcode': '&#xe927;',
		'icon-tag': '&#xe928;',
		'icon-tags': '&#xe929;',
		'icon-book': '&#xe92a;',
		'icon-bookmark': '&#xe92b;',
		'icon-print': '&#xe92c;',
		'icon-camera': '&#xe92d;',
		'icon-font': '&#xe92e;',
		'icon-bold': '&#xe92f;',
		'icon-italic': '&#xe930;',
		'icon-text_height': '&#xe931;',
		'icon-text_width': '&#xe932;',
		'icon-align_left': '&#xe933;',
		'icon-align_center': '&#xe934;',
		'icon-align_right': '&#xe935;',
		'icon-align_justify': '&#xe936;',
		'icon-list': '&#xe937;',
		'icon-indent_left': '&#xe938;',
		'icon-indent_right': '&#xe939;',
		'icon-facetime_video': '&#xe93a;',
		'icon-pencil': '&#xe93c;',
		'icon-map_marker': '&#xe93d;',
		'icon-adjust': '&#xe93e;',
		'icon-tint': '&#xe93f;',
		'icon-edit': '&#xe940;',
		'icon-share': '&#xe941;',
		'icon-check': '&#xe942;',
		'icon-move': '&#xe943;',
		'icon-step_backward': '&#xe944;',
		'icon-fast_backward': '&#xe945;',
		'icon-backward': '&#xe946;',
		'icon-play': '&#xe947;',
		'icon-pause': '&#xe948;',
		'icon-stop': '&#xe949;',
		'icon-forward': '&#xe94a;',
		'icon-fast_forward': '&#xe94b;',
		'icon-step_forward': '&#xe94c;',
		'icon-eject': '&#xe94d;',
		'icon-chevron_left': '&#xe94e;',
		'icon-chevron_right': '&#xe94f;',
		'icon-plus_sign': '&#xe950;',
		'icon-minus_sign': '&#xe951;',
		'icon-remove_sign': '&#xe952;',
		'icon-ok_sign': '&#xe953;',
		'icon-question_sign': '&#xe954;',
		'icon-info_sign': '&#xe955;',
		'icon-screenshot': '&#xe956;',
		'icon-remove_circle': '&#xe957;',
		'icon-ok_circle': '&#xe958;',
		'icon-ban_circle': '&#xe959;',
		'icon-arrow_left': '&#xe95a;',
		'icon-arrow_right': '&#xe95b;',
		'icon-arrow_up': '&#xe95c;',
		'icon-arrow_down': '&#xe95d;',
		'icon-share_alt': '&#xe95e;',
		'icon-resize_full': '&#xe95f;',
		'icon-resize_small': '&#xe960;',
		'icon-plus': '&#xe961;',
		'icon-minus': '&#xe962;',
		'icon-asterisk': '&#xe963;',
		'icon-exclamation_sign': '&#xe964;',
		'icon-gift': '&#xe965;',
		'icon-leaf': '&#xe966;',
		'icon-fire': '&#xe967;',
		'icon-eye_open': '&#xe968;',
		'icon-eye_close': '&#xe969;',
		'icon-warning_sign': '&#xe96a;',
		'icon-plane': '&#xe96b;',
		'icon-calendar': '&#xe96c;',
		'icon-random': '&#xe96d;',
		'icon-comment': '&#xe96e;',
		'icon-magnet': '&#xe96f;',
		'icon-chevron_up': '&#xe970;',
		'icon-chevron_down': '&#xe971;',
		'icon-retweet': '&#xe972;',
		'icon-shopping_cart': '&#xe973;',
		'icon-folder_close': '&#xe974;',
		'icon-folder_open': '&#xe975;',
		'icon-resize_vertical': '&#xe976;',
		'icon-resize_horizontal': '&#xe977;',
		'icon-bar_chart': '&#xe978;',
		'icon-camera_retro': '&#xe979;',
		'icon-key': '&#xe97a;',
		'icon-cogs': '&#xe97b;',
		'icon-comments': '&#xe97c;',
		'icon-thumbs_up_alt': '&#xe97d;',
		'icon-thumbs_down_alt': '&#xe97e;',
		'icon-star_half': '&#xe97f;',
		'icon-heart_empty': '&#xe980;',
		'icon-signout': '&#xe981;',
		'icon-pushpin': '&#xe983;',
		'icon-external_link': '&#xe984;',
		'icon-signin': '&#xe985;',
		'icon-trophy': '&#xe986;',
		'icon-upload_alt': '&#xe987;',
		'icon-lemon': '&#xe988;',
		'icon-phone2': '&#xe989;',
		'icon-check_empty': '&#xe98a;',
		'icon-bookmark_empty': '&#xe98b;',
		'icon-phone_sign': '&#xe98c;',
		'icon-unlock2': '&#xe98d;',
		'icon-credit_card': '&#xe98e;',
		'icon-rss': '&#xe98f;',
		'icon-hdd': '&#xe990;',
		'icon-bullhorn': '&#xe991;',
		'icon-bell': '&#xe992;',
		'icon-certificate': '&#xe993;',
		'icon-hand_right': '&#xe994;',
		'icon-hand_left': '&#xe995;',
		'icon-hand_up': '&#xe996;',
		'icon-hand_down': '&#xe997;',
		'icon-circle_arrow_left': '&#xe998;',
		'icon-circle_arrow_right': '&#xe999;',
		'icon-circle_arrow_up': '&#xe99a;',
		'icon-circle_arrow_down': '&#xe99b;',
		'icon-globe': '&#xe99c;',
		'icon-wrench': '&#xe99d;',
		'icon-tasks': '&#xe99e;',
		'icon-filter': '&#xe99f;',
		'icon-briefcase': '&#xe9a0;',
		'icon-fullscreen': '&#xe9a1;',
		'icon-group': '&#xe9a2;',
		'icon-link': '&#xe9a3;',
		'icon-cloud': '&#xe9a4;',
		'icon-beaker': '&#xe9a5;',
		'icon-cut': '&#xe9a6;',
		'icon-copy': '&#xe9a7;',
		'icon-paper_clip': '&#xe9a8;',
		'icon-save': '&#xe9a9;',
		'icon-sign_blank': '&#xe9aa;',
		'icon-reorder': '&#xe9ab;',
		'icon-ul': '&#xe9ac;',
		'icon-ol': '&#xe9ad;',
		'icon-strikethrough': '&#xe9ae;',
		'icon-underline': '&#xe9af;',
		'icon-table': '&#xe9b0;',
		'icon-magic': '&#xe9b1;',
		'icon-truck': '&#xe9b2;',
		'icon-money': '&#xe9b5;',
		'icon-caret_down': '&#xe9b6;',
		'icon-caret_up': '&#xe9b7;',
		'icon-caret_left': '&#xe9b8;',
		'icon-caret_right': '&#xe9b9;',
		'icon-columns': '&#xe9ba;',
		'icon-sort': '&#xe9bb;',
		'icon-sort_down': '&#xe9bc;',
		'icon-sort_up': '&#xe9bd;',
		'icon-envelope_alt': '&#xe9be;',
		'icon-undo': '&#xe9bf;',
		'icon-legal': '&#xe9c0;',
		'icon-dashboard': '&#xe9c1;',
		'icon-comment_alt': '&#xe9c2;',
		'icon-comments_alt': '&#xe9c3;',
		'icon-bolt': '&#xe9c4;',
		'icon-sitemap': '&#xe9c5;',
		'icon-umbrella': '&#xe9c6;',
		'icon-paste': '&#xe9c7;',
		'icon-light_bulb': '&#xe9c8;',
		'icon-exchange': '&#xe9c9;',
		'icon-cloud_download': '&#xe9ca;',
		'icon-cloud_upload': '&#xe9cb;',
		'icon-user_md': '&#xe9cc;',
		'icon-stethoscope': '&#xe9cd;',
		'icon-suitcase': '&#xe9ce;',
		'icon-bell_alt': '&#xe9cf;',
		'icon-coffee': '&#xe9d0;',
		'icon-food': '&#xe9d1;',
		'icon-file_text_alt': '&#xe9d2;',
		'icon-building': '&#xe9d3;',
		'icon-hospital2': '&#xe9d4;',
		'icon-ambulance': '&#xe9d5;',
		'icon-medkit': '&#xe9d6;',
		'icon-fighter_jet': '&#xe9d7;',
		'icon-beer': '&#xe9d8;',
		'icon-h_sign': '&#xe9d9;',
		'icon-plus-square': '&#xe9da;',
		'icon-double_angle_left': '&#xe9db;',
		'icon-double_angle_right': '&#xe9dc;',
		'icon-double_angle_up': '&#xe9dd;',
		'icon-double_angle_down': '&#xe9de;',
		'icon-angle_left': '&#xe9df;',
		'icon-angle_right': '&#xe9e0;',
		'icon-angle_up': '&#xe9e1;',
		'icon-angle_down': '&#xe9e2;',
		'icon-desktop': '&#xe9e3;',
		'icon-laptop': '&#xe9e4;',
		'icon-tablet': '&#xe9e5;',
		'icon-mobile_phone': '&#xe9e6;',
		'icon-circle_blank': '&#xe9e7;',
		'icon-quote_left': '&#xe9e8;',
		'icon-quote_right': '&#xe9e9;',
		'icon-spinner': '&#xe9ea;',
		'icon-circle': '&#xe9eb;',
		'icon-reply': '&#xe9ec;',
		'icon-github_alt': '&#xe9ed;',
		'icon-folder_close_alt': '&#xe9ee;',
		'icon-folder_open_alt': '&#xe9ef;',
		'icon-smile': '&#xe9f0;',
		'icon-frown': '&#xe9f1;',
		'icon-meh': '&#xe9f2;',
		'icon-gamepad': '&#xe9f3;',
		'icon-keyboard': '&#xe9f4;',
		'icon-flag_alt': '&#xe9f5;',
		'icon-flag_checkered': '&#xe9f6;',
		'icon-terminal': '&#xe9f7;',
		'icon-code': '&#xe9f8;',
		'icon-reply_all': '&#xe9f9;',
		'icon-star_half_empty': '&#xe9fa;',
		'icon-location_arrow': '&#xe9fb;',
		'icon-crop': '&#xe9fc;',
		'icon-code_fork': '&#xe9fd;',
		'icon-unlink': '&#xe9fe;',
		'icon-question': '&#xe9ff;',
		'icon-i': '&#xea00;',
		'icon-exclamation': '&#xea01;',
		'icon-superscript': '&#xea02;',
		'icon-subscript': '&#xea03;',
		'icon-puzzle_piece': '&#xea05;',
		'icon-microphone': '&#xea06;',
		'icon-microphone_off': '&#xea07;',
		'icon-shield': '&#xea08;',
		'icon-calendar_empty': '&#xea09;',
		'icon-fire_extinguisher': '&#xea0a;',
		'icon-rocket': '&#xea0b;',
		'icon-chevron_sign_left': '&#xea0d;',
		'icon-chevron_sign_right': '&#xea0e;',
		'icon-chevron_sign_up': '&#xea0f;',
		'icon-chevron_sign_down': '&#xea10;',
		'icon-anchor': '&#xea13;',
		'icon-unlock_alt': '&#xea14;',
		'icon-bullseye': '&#xea15;',
		'icon-ellipsis_horizontal': '&#xea16;',
		'icon-ellipsis_vertical': '&#xea17;',
		'icon-rss3': '&#xea18;',
		'icon-play_sign': '&#xea19;',
		'icon-ticket': '&#xea1a;',
		'icon-minus_sign_alt': '&#xea1b;',
		'icon-check_minus': '&#xea1c;',
		'icon-level_up': '&#xea1d;',
		'icon-level_down': '&#xea1e;',
		'icon-check_sign': '&#xea1f;',
		'icon-edit_sign': '&#xea20;',
		'icon-out_right': '&#xea21;',
		'icon-share_sign': '&#xea22;',
		'icon-compass': '&#xea23;',
		'icon-collapse': '&#xea24;',
		'icon-collapse_top': '&#xea25;',
		'icon-collapse_right': '&#xea26;',
		'icon-eur': '&#xea27;',
		'icon-gbp': '&#xea28;',
		'icon-usd': '&#xea29;',
		'icon-inr': '&#xea2a;',
		'icon-rmb': '&#xea2b;',
		'icon-rub': '&#xea2c;',
		'icon-krw': '&#xea2d;',
		'icon-btc': '&#xea2e;',
		'icon-file': '&#xea2f;',
		'icon-file_text': '&#xea30;',
		'icon-sort_by_alphabet': '&#xea31;',
		'icon-sort_by_betalpha': '&#xea32;',
		'icon-sort_by_attributes': '&#xea33;',
		'icon-sort_by_attributes_alt': '&#xea34;',
		'icon-sort_by_order': '&#xea35;',
		'icon-sort_by_order_alt': '&#xea36;',
		'icon-zan': '&#xea37;',
		'icon-cai': '&#xea38;',
		'icon-youtube_play': '&#xea3d;',
		'icon-dropbox': '&#xea3e;',
		'icon-instagram': '&#xea40;',
		'icon-flickr': '&#xea41;',
		'icon-adn': '&#xea42;',
		'icon-cap': '&#xea43;',
		'icon-bitbucket_sign': '&#xea44;',
		'icon-tumblr_sign': '&#xea46;',
		'icon-long_arrow_down': '&#xea47;',
		'icon-long_arrow_up': '&#xea48;',
		'icon-long_arrow_left': '&#xea49;',
		'icon-long_arrow_right': '&#xea4a;',
		'icon-apple': '&#xea4b;',
		'icon-windows': '&#xea4c;',
		'icon-android': '&#xea4d;',
		'icon-linux': '&#xea4e;',
		'icon-dribble': '&#xea4f;',
		'icon-trello': '&#xea52;',
		'icon-female': '&#xea53;',
		'icon-male': '&#xea54;',
		'icon-gittip': '&#xea55;',
		'icon-sun': '&#xea56;',
		'icon-_366': '&#xea57;',
		'icon-archive': '&#xea58;',
		'icon-bug': '&#xea59;',
		'icon-weibo': '&#xea5b;',
		'icon-renren': '&#xea5c;',
		'icon-palmleaf': '&#xea5d;',
		'icon-stack_exchange': '&#xea5e;',
		'icon-arrow-cirle-right': '&#xea5f;',
		'icon-arrow_circle_left': '&#xea60;',
		'icon-play-square-prev': '&#xea61;',
		'icon-dot_circle_alt': '&#xea62;',
		'icon-_378': '&#xea63;',
		'icon-plus_square_o': '&#xea66;',
		'icon-jet': '&#xea67;',
		'icon-message': '&#xea69;',
		'icon-whitehouse': '&#xea6c;',
		'icon-dorhat': '&#xea6d;',
		'icon-monster': '&#xea78;',
		'icon-satellite': '&#xea79;',
		'icon-invoice': '&#xea7b;',
		'icon-tallb': '&#xea7c;',
		'icon-cheer': '&#xea7d;',
		'icon-uniF1B1': '&#xea7e;',
		'icon-spoon2': '&#xea7f;',
		'icon-goods': '&#xea80;',
		'icon-goods2': '&#xea81;',
		'icon-recycled': '&#xea86;',
		'icon-car': '&#xea87;',
		'icon-taxi': '&#xea88;',
		'icon-pine': '&#xea89;',
		'icon-database2': '&#xea8d;',
		'icon-file_pdf': '&#xea8e;',
		'icon-file_word': '&#xea8f;',
		'icon-file_excel': '&#xea90;',
		'icon-file_p': '&#xea91;',
		'icon-file_pic': '&#xea92;',
		'icon-file_zip': '&#xea93;',
		'icon-file_sound': '&#xea94;',
		'icon-file_video': '&#xea95;',
		'icon-file_code': '&#xea96;',
		'icon-cube': '&#xea98;',
		'icon-cloud-2': '&#xea99;',
		'icon-lifering': '&#xea9a;',
		'icon-circle-notch': '&#xea9b;',
		'icon-uniF1D0': '&#xea9c;',
		'icon-qqwb': '&#xeaa1;',
		'icon-qq': '&#xeaa2;',
		'icon-weixin': '&#xeaa3;',
		'icon-plane2': '&#xeaa4;',
		'icon-plane2-o': '&#xeaa5;',
		'icon-returntime': '&#xeaa6;',
		'icon-sliders': '&#xeaaa;',
		'icon-share3': '&#xeaab;',
		'icon-share4': '&#xeaac;',
		'icon-bomb': '&#xeaad;',
		'icon-football': '&#xeaae;',
		'icon-tty': '&#xeaaf;',
		'icon-looksee': '&#xeab0;',
		'icon-plug': '&#xeab1;',
		'icon-skip': '&#xeab2;',
		'icon-msg': '&#xeab3;',
		'icon-newspaper2': '&#xeab5;',
		'icon-wifi': '&#xeab6;',
		'icon-calculator2': '&#xeab7;',
		'icon-visa': '&#xeaba;',
		'icon-cocard': '&#xeabb;',
		'icon-_467': '&#xeabc;',
		'icon-bell-slash': '&#xeac0;',
		'icon-bell-slash-o': '&#xeac1;',
		'icon-del': '&#xeac2;',
		'icon-copyright': '&#xeac3;',
		'icon-at': '&#xeac4;',
		'icon-straw': '&#xeac5;',
		'icon-brush': '&#xeac6;',
		'icon-cake': '&#xeac7;',
		'icon-chart-area': '&#xeac8;',
		'icon-chart-pie': '&#xeac9;',
		'icon-chart-line': '&#xeaca;',
		'icon-switch2-o': '&#xeacd;',
		'icon-switch2': '&#xeace;',
		'icon-bike': '&#xeacf;',
		'icon-bus': '&#xead0;',
		'icon-v': '&#xead2;',
		'icon-hexagon': '&#xead7;',
		'icon-wavebat': '&#xead9;',
		'icon-bibook': '&#xeada;',
		'icon-cloud-full': '&#xeadb;',
		'icon-badge': '&#xeadc;',
		'icon-tape': '&#xeadd;',
		'icon-cloud3': '&#xeade;',
		'icon-cart-plus': '&#xeadf;',
		'icon-cart-down': '&#xeae0;',
		'icon-diamond': '&#xeae1;',
		'icon-ship': '&#xeae2;',
		'icon-spy': '&#xeae3;',
		'icon-moto': '&#xeae4;',
		'icon-standpod': '&#xeae5;',
		'icon-heart-beat': '&#xeae6;',
		'icon-venus': '&#xeae7;',
		'icon-mars': '&#xeae8;',
		'icon-venus-double': '&#xeaec;',
		'icon-mars-double': '&#xeaed;',
		'icon-venus-mars': '&#xeaee;',
		'icon-mars-stroke': '&#xeaef;',
		'icon-phonemsg': '&#xeaf6;',
		'icon-disks': '&#xeaf7;',
		'icon-user-add': '&#xeaf8;',
		'icon-user-del': '&#xeaf9;',
		'icon-onbed': '&#xeafa;',
		'icon-subway-1': '&#xeafc;',
		'icon-subway-2': '&#xeafd;',
		'icon-syslocked': '&#xeb02;',
		'icon-battery-4': '&#xeb03;',
		'icon-battery-3': '&#xeb04;',
		'icon-battery-2': '&#xeb05;',
		'icon-battery-1': '&#xeb06;',
		'icon-battery-0': '&#xeb07;',
		'icon-mousearrow': '&#xeb08;',
		'icon-txtselect': '&#xeb09;',
		'icon-area-1': '&#xeb0a;',
		'icon-area-2': '&#xeb0b;',
		'icon-paper': '&#xeb0c;',
		'icon-paper-o': '&#xeb0d;',
		'icon-papers': '&#xeb10;',
		'icon-balance': '&#xeb11;',
		'icon-hourglass-0': '&#xeb12;',
		'icon-hourglass-1': '&#xeb13;',
		'icon-hourglass-2': '&#xeb14;',
		'icon-hourglass-3': '&#xeb15;',
		'icon-hourglass-4': '&#xeb16;',
		'icon-handhold': '&#xeb17;',
		'icon-handraise': '&#xeb18;',
		'icon-handclick': '&#xeb1c;',
		'icon-r': '&#xeb1f;',
		'icon-cc': '&#xeb20;',
		'icon-arrowdown-c': '&#xeb26;',
		'icon-monitor': '&#xeb2d;',
		'icon-calendar-plus': '&#xeb31;',
		'icon-calendar-minus': '&#xeb32;',
		'icon-calendar-wrong': '&#xeb33;',
		'icon-calendar-right': '&#xeb34;',
		'icon-guide': '&#xeb37;',
		'icon-map3': '&#xeb38;',
		'icon-map3-o': '&#xeb39;',
		'icon-message2': '&#xeb3a;',
		'icon-message2-o': '&#xeb3b;',
		'icon-robotdog': '&#xeb40;',
		'icon-card': '&#xeb42;',
		'icon-upan': '&#xeb46;',
		'icon-p': '&#xeb47;',
		'icon-cloudwifi': '&#xeb48;',
		'icon-play-pause': '&#xeb4a;',
		'icon-play-pause-o': '&#xeb4b;',
		'icon-play-stop': '&#xeb4c;',
		'icon-play-stop-o': '&#xeb4d;',
		'icon-bag': '&#xeb4e;',
		'icon-basket': '&#xeb4f;',
		'icon-bluetooth': '&#xeb51;',
		'icon-bluetooth-o': '&#xeb52;',
		'icon-percent': '&#xeb53;',
		'icon-note': '&#xeb56;',
		'icon-leaf3': '&#xeb57;',
		'icon-wheelchair-alt': '&#xeb59;',
		'icon-help': '&#xeb5a;',
		'icon-blind': '&#xeb5b;',
		'icon-phoneon': '&#xeb5d;',
		'icon-uneye': '&#xeb65;',
		'icon-handshake': '&#xeb71;',
		'icon-envelope-open': '&#xeb72;',
		'icon-envelope-open-o': '&#xeb73;',
		'icon-maillist': '&#xeb75;',
		'icon-maillist-o': '&#xeb76;',
		'icon-vcard': '&#xeb77;',
		'icon-vcard-o': '&#xeb78;',
		'icon-user-circle': '&#xeb79;',
		'icon-user-circle-o': '&#xeb7a;',
		'icon-user-o': '&#xeb7b;',
		'icon-phoneuser': '&#xeb7c;',
		'icon-idcard': '&#xeb7d;',
		'icon-idcard-o': '&#xeb7e;',
		'icon-plane-circle': '&#xeb81;',
		'icon-thermometer-4': '&#xeb82;',
		'icon-thermometer-3': '&#xeb83;',
		'icon-thermometer-2': '&#xeb84;',
		'icon-thermometer-1': '&#xeb85;',
		'icon-thermometer-0': '&#xeb86;',
		'icon-shower': '&#xeb87;',
		'icon-bath': '&#xeb88;',
		'icon-print2': '&#xebd0;',
		'icon-denglu': '&#xebd7;',
		'icon-xiugai': '&#xebfd;',
		'icon-home4': '&#xec03;',
		'icon-shoupiaoguanli': '&#xec06;',
		'icon-iconfontshanchu': '&#xec64;',
		'icon-display2': '&#xec81;',
		'icon-download4': '&#xecaa;',
		'icon-favor': '&#xecab;',
		'icon-fill': '&#xecb0;',
		'icon-loading': '&#xecb1;',
		'icon-my': '&#xecb2;',
		'icon-sitting': '&#xecb3;',
		'icon-unlock': '&#xecb4;',
		'icon-upload4': '&#xecb5;',
		'icon-pic': '&#xecb6;',
		'icon-denglu1': '&#xecb7;',
		'icon-clock3': '&#xecb8;',
		'icon-remind': '&#xecb9;',
		'icon-jikediancanicon42': '&#xecba;',
		'icon-bianji': '&#xecbb;',
		'icon-wenjian': '&#xecbc;',
		'icon-discount': '&#xecbd;',
		'icon-box': '&#xecbe;',
		'icon-lights': '&#xecbf;',
		'icon-browse': '&#xecc6;',
		'icon-similarproduct': '&#xecc7;',
		'icon-xinyongguanli': '&#xecc8;',
		'icon-wenjian1': '&#xecc9;',
		'icon-bianji1': '&#xecca;',
		'icon-jiantou': '&#xeccb;',
		'icon-weibiaoti1': '&#xeccc;',
		'icon-raw': '&#xeccd;',
		'icon-office2': '&#xecce;',
		'icon-jifen': '&#xecee;',
		'icon-fenxiang2': '&#xecef;',
		'icon-caozuotongji': '&#xecfc;',
		'icon-cc-arrow-right-circle': '&#xecfd;',
		'icon-cc-bell-o': '&#xecfe;',
		'icon-cc-schema': '&#xecff;',
		'icon-cc-select': '&#xed02;',
		'icon-cc-shield': '&#xed03;',
		'icon-cc-unlink': '&#xed04;',
		'icon-cc-plane': '&#xed05;',
		'icon-wangzhanguanli': '&#xed06;',
		'icon-bianji2': '&#xed07;',
		'icon-wenjian2': '&#xed08;',
		'icon-yiyuan1': '&#xed09;',
		'icon-icon': '&#xed0a;',
		'icon-xitongguanli': '&#xed0b;',
		'icon-iconset0358': '&#xed0c;',
		'icon-wxbbiaowang': '&#xed0d;',
		'icon-wxbmingxingdianpu': '&#xed0e;',
		'icon-wxbpinpaibao': '&#xed0f;',
		'icon-wxbsousuotuiguang': '&#xed10;',
		'icon-wxbdingwei': '&#xed11;',
		'icon-yiyuan2': '&#xed12;',
		'icon-wenjiandocuments4': '&#xed13;',
		'icon-iconfontxiugaioryijian': '&#xed14;',
		'icon-yiyuan': '&#xed15;',
		'icon-duoyuyan': '&#xed16;',
		'icon-mudedi': '&#xed17;',
		'icon-jiesuo': '&#xed18;',
		'icon-xiangji': '&#xed19;',
		'icon-youji': '&#xed1a;',
		'icon-tupian': '&#xed1b;',
		'icon-langman': '&#xed1c;',
		'icon-shanchu': '&#xed1d;',
		'icon-tianqi': '&#xed1e;',
		'icon-zhinengyouhua': '&#xed1f;',
		'icon-fenxiang': '&#xed20;',
		'icon-haoping': '&#xed21;',
		'icon-jianyuede': '&#xed22;',
		'icon-jingjide': '&#xed23;',
		'icon-shushide': '&#xed24;',
		'icon-gaoduande': '&#xed25;',
		'icon-shehuade': '&#xed26;',
		'icon-jinnang': '&#xed27;',
		'icon-matou': '&#xed28;',
		'icon-wancan': '&#xed29;',
		'icon-zaocan': '&#xed2a;',
		'icon-quanbubiaojiweiyidu': '&#xed2b;',
		'icon-alldb': '&#xed2c;',
		'icon-wenjianfile': '&#xed2d;',
		'icon-guanli': '&#xed2e;',
		'icon-wenjian3': '&#xed2f;',
		'icon-guanli1': '&#xed30;',
		'icon-guanli2': '&#xed31;',
		'icon-liwu': '&#xed32;',
		'icon-yuyin': '&#xed33;',
		'icon-shouye': '&#xed34;',
		'icon-libra': '&#xed35;',
		'icon-survey': '&#xed36;',
		'icon-shouye1': '&#xed37;',
		'icon-suoyougongneng': '&#xed38;',
		'icon-hot': '&#xed39;',
		'icon-denglu2': '&#xed3a;',
		'icon-yiyuan3': '&#xed3b;',
		'icon-buoumaotubiao25': '&#xed3c;',
		'icon-wenjianjia': '&#xed3d;',
		'icon-data': '&#xed3e;',
		'icon-tongjiguanli': '&#xed3f;',
		'icon-guanli3': '&#xed40;',
		'icon-tongji': '&#xed41;',
		'icon-xitong2': '&#xed42;',
		'icon-chaoshi': '&#xed43;',
		'icon-optroundaddlight': '&#xed44;',
		'icon-guanli4': '&#xed45;',
		'icon-xitongshouye': '&#xed46;',
		'icon-tongji1': '&#xed47;',
		'icon-repair': '&#xed48;',
		'icon-qitatongji': '&#xed49;',
		'icon-success': '&#xed4a;',
		'icon-attachment2': '&#xed4b;',
		'icon-phone3': '&#xed4c;',
		'icon-wenjianjia1': '&#xed4d;',
		'icon-all': '&#xed4e;',
		'icon-yichaoshi': '&#xed4f;',
		'icon-hospital': '&#xed50;',
		'icon-zichantongji': '&#xed51;',
		'icon-all1': '&#xed52;',
		'icon-xitong': '&#xed53;',
		'icon-keliutongji': '&#xed54;',
		'icon-plus-pic': '&#xed55;',
		'icon-plus-datareport': '&#xed56;',
		'icon-wenjianjia2': '&#xed57;',
		'icon-signboard': '&#xed58;',
		'icon-component': '&#xed59;',
		'icon-color': '&#xed5a;',
		'icon-logistic': '&#xed5b;',
		'icon-Ankerwebicon-': '&#xed5c;',
		'icon-xitong1': '&#xed5d;',
		'icon-manage': '&#xed5e;',
		'icon-wenjian4': '&#xed5f;',
		'icon-banyunfei': '&#xed60;',
		'icon-celiangfuwu': '&#xed61;',
		'icon-tongji-': '&#xed62;',
		'icon-xitong3': '&#xed63;',
		'icon-earth2': '&#xed64;',
		'icon-xiaoxizhongxin': '&#xed65;',
		'icon-shouye-shouye': '&#xed66;',
		'icon-wenjianjia3': '&#xed67;',
		'icon-xuexi': '&#xed68;',
		'icon-wodeerweima': '&#xed69;',
		'icon-statistics_02': '&#xed6a;',
		'icon-dkw_daikuan': '&#xed6b;',
		'icon-dkw_paishe': '&#xed6c;',
		'icon-dkw_wancheng': '&#xed6d;',
		'icon-dkw_shenhezhong': '&#xed6e;',
		'icon-dkw_bangzhu': '&#xed6f;',
		'icon-dkw_ziliaoshenhe': '&#xed70;',
		'icon-icon_zanwutupian_': '&#xed71;',
		'icon-xitongzhuye': '&#xed72;',
		'icon-isoc': '&#xed73;',
		'icon-survey1': '&#xed74;',
		'icon-shuju': '&#xed75;',
		'icon-shuju1': '&#xed76;',
		'icon-home': '&#xe93b;',
		'icon-home22': '&#xe982;',
		'icon-home3': '&#xea0c;',
		'icon-office': '&#xea45;',
		'icon-newspaper': '&#xea50;',
		'icon-pencil2': '&#xea51;',
		'icon-pencil22': '&#xea64;',
		'icon-quill': '&#xea73;',
		'icon-pen': '&#xea75;',
		'icon-blog': '&#xea76;',
		'icon-eyedropper': '&#xea77;',
		'icon-droplet': '&#xea7a;',
		'icon-paint-format': '&#xea82;',
		'icon-image': '&#xea83;',
		'icon-images': '&#xea9e;',
		'icon-camera2': '&#xea9f;',
		'icon-headphones2': '&#xeab8;',
		'icon-music2': '&#xeabe;',
		'icon-play2': '&#xeabf;',
		'icon-film2': '&#xeacc;',
		'icon-video-camera': '&#xead3;',
		'icon-dice': '&#xead4;',
		'icon-pacman': '&#xead5;',
		'icon-spades': '&#xeaf4;',
		'icon-clubs': '&#xeaf5;',
		'icon-diamonds': '&#xeafb;',
		'icon-bullhorn2': '&#xeafe;',
		'icon-connection': '&#xeaff;',
		'icon-podcast': '&#xeb00;',
		'icon-feed': '&#xeb01;',
		'icon-mic': '&#xeb0e;',
		'icon-book2': '&#xeb0f;',
		'icon-books': '&#xeb29;',
		'icon-library': '&#xeb2a;',
		'icon-file-text': '&#xeb2b;',
		'icon-profile': '&#xeb2c;',
		'icon-file-empty': '&#xeb2e;',
		'icon-files-empty': '&#xeb2f;',
		'icon-file-text2': '&#xeb30;',
		'icon-file-picture': '&#xeb3d;',
		'icon-file-music': '&#xeb3f;',
		'icon-file-play': '&#xeb44;',
		'icon-file-video': '&#xeb49;',
		'icon-file-zip': '&#xeb55;',
		'icon-copy2': '&#xeb5c;',
		'icon-paste2': '&#xeb5e;',
		'icon-stack': '&#xeb62;',
		'icon-folder': '&#xeb63;',
		'icon-folder-open': '&#xeb64;',
		'icon-folder-plus': '&#xeb67;',
		'icon-folder-minus': '&#xeb68;',
		'icon-folder-download': '&#xeb69;',
		'icon-folder-upload': '&#xeb6a;',
		'icon-price-tag': '&#xeb6b;',
		'icon-price-tags': '&#xeb6c;',
		'icon-barcode2': '&#xeb6d;',
		'icon-qrcode2': '&#xeb6e;',
		'icon-ticket2': '&#xeb6f;',
		'icon-cart': '&#xeb70;',
		'icon-coin-dollar': '&#xeb74;',
		'icon-coin-euro': '&#xeb7f;',
		'icon-coin-pound': '&#xeb80;',
		'icon-coin-yen': '&#xeb8f;',
		'icon-credit-card': '&#xeb90;',
		'icon-calculator': '&#xeb91;',
		'icon-lifebuoy': '&#xeb92;',
		'icon-phone': '&#xeb93;',
		'icon-phone-hang-up': '&#xeb94;',
		'icon-address-book': '&#xeb95;',
		'icon-envelop': '&#xeb97;',
		'icon-pushpin2': '&#xeb98;',
		'icon-location': '&#xeb99;',
		'icon-location2': '&#xeb9a;',
		'icon-compass2': '&#xeb9b;',
		'icon-compass22': '&#xeb9c;',
		'icon-map': '&#xeb9d;',
		'icon-map2': '&#xeb9e;',
		'icon-history': '&#xeb9f;',
		'icon-clock': '&#xeba0;',
		'icon-clock2': '&#xeba1;',
		'icon-alarm': '&#xeba2;',
		'icon-bell2': '&#xeba3;',
		'icon-stopwatch': '&#xeba4;',
		'icon-calendar2': '&#xeba5;',
		'icon-printer': '&#xeba6;',
		'icon-keyboard2': '&#xeba7;',
		'icon-display': '&#xeba8;',
		'icon-laptop2': '&#xeba9;',
		'icon-mobile': '&#xebaa;',
		'icon-mobile2': '&#xebab;',
		'icon-tablet2': '&#xebac;',
		'icon-tv': '&#xebad;',
		'icon-drawer': '&#xebae;',
		'icon-drawer2': '&#xebaf;',
		'icon-box-add': '&#xebb0;',
		'icon-box-remove': '&#xebb1;',
		'icon-download': '&#xebb2;',
		'icon-upload': '&#xebb3;',
		'icon-floppy-disk': '&#xebb4;',
		'icon-drive': '&#xebb5;',
		'icon-database': '&#xebb6;',
		'icon-undo2': '&#xebb7;',
		'icon-redo': '&#xebb8;',
		'icon-undo22': '&#xebb9;',
		'icon-redo2': '&#xebba;',
		'icon-forward2': '&#xebbb;',
		'icon-reply2': '&#xebbc;',
		'icon-bubble': '&#xebbd;',
		'icon-bubbles': '&#xebbe;',
		'icon-bubbles2': '&#xebbf;',
		'icon-bubble2': '&#xebc0;',
		'icon-bubbles3': '&#xebc1;',
		'icon-bubbles4': '&#xebc2;',
		'icon-user2': '&#xebc3;',
		'icon-users': '&#xebc4;',
		'icon-user-plus': '&#xebc5;',
		'icon-user-minus': '&#xebc6;',
		'icon-user-check': '&#xebc7;',
		'icon-user-tie': '&#xebc8;',
		'icon-quotes-left': '&#xebc9;',
		'icon-quotes-right': '&#xebca;',
		'icon-hour-glass': '&#xebcb;',
		'icon-spinner2': '&#xebcc;',
		'icon-spinner22': '&#xebcd;',
		'icon-spinner3': '&#xebce;',
		'icon-spinner4': '&#xebcf;',
		'icon-spinner6': '&#xebd1;',
		'icon-spinner7': '&#xebd2;',
		'icon-spinner8': '&#xebd3;',
		'icon-spinner9': '&#xebd4;',
		'icon-spinner10': '&#xebd5;',
		'icon-spinner11': '&#xebd6;',
		'icon-search2': '&#xebd8;',
		'icon-zoom-in': '&#xebd9;',
		'icon-zoom-out': '&#xebda;',
		'icon-enlarge': '&#xebdb;',
		'icon-shrink': '&#xebdc;',
		'icon-enlarge2': '&#xebdd;',
		'icon-shrink2': '&#xebde;',
		'icon-key2': '&#xebdf;',
		'icon-key22': '&#xebe0;',
		'icon-lock2': '&#xebe1;',
		'icon-unlocked': '&#xebe2;',
		'icon-wrench2': '&#xebe3;',
		'icon-equalizer': '&#xebe4;',
		'icon-equalizer2': '&#xebe5;',
		'icon-cog2': '&#xebe6;',
		'icon-cogs2': '&#xebe7;',
		'icon-hammer': '&#xebe8;',
		'icon-magic-wand': '&#xebe9;',
		'icon-aid-kit': '&#xebea;',
		'icon-bug2': '&#xebeb;',
		'icon-pie-chart': '&#xebec;',
		'icon-stats-dots': '&#xebed;',
		'icon-stats-bars': '&#xebee;',
		'icon-stats-bars2': '&#xebef;',
		'icon-trophy2': '&#xebf0;',
		'icon-gift2': '&#xebf1;',
		'icon-glass2': '&#xebf2;',
		'icon-glass22': '&#xebf3;',
		'icon-mug': '&#xebf4;',
		'icon-spoon-knife': '&#xebf5;',
		'icon-leaf2': '&#xebf6;',
		'icon-rocket2': '&#xebf7;',
		'icon-meter': '&#xebf8;',
		'icon-meter2': '&#xebf9;',
		'icon-hammer2': '&#xebfa;',
		'icon-fire2': '&#xebfb;',
		'icon-lab': '&#xebfc;',
		'icon-magnet2': '&#xed77;',
		'icon-bin': '&#xebfe;',
		'icon-bin2': '&#xebff;',
		'icon-briefcase2': '&#xec00;',
		'icon-airplane': '&#xec01;',
		'icon-truck2': '&#xec02;',
		'icon-accessibility': '&#xec04;',
		'icon-target': '&#xec05;',
		'icon-power': '&#xec07;',
		'icon-switch': '&#xec08;',
		'icon-power-cord': '&#xec09;',
		'icon-clipboard': '&#xec0a;',
		'icon-list-numbered': '&#xec0b;',
		'icon-list2': '&#xec0c;',
		'icon-list22': '&#xec0d;',
		'icon-tree': '&#xec0e;',
		'icon-menu': '&#xec0f;',
		'icon-menu2': '&#xec10;',
		'icon-menu3': '&#xec11;',
		'icon-menu4': '&#xec12;',
		'icon-cloud2': '&#xec13;',
		'icon-cloud-download': '&#xec14;',
		'icon-cloud-upload': '&#xec15;',
		'icon-cloud-check': '&#xec16;',
		'icon-download22': '&#xec17;',
		'icon-upload22': '&#xec18;',
		'icon-download3': '&#xec19;',
		'icon-upload3': '&#xec1a;',
		'icon-sphere': '&#xec1b;',
		'icon-earth': '&#xec1c;',
		'icon-link2': '&#xec1d;',
		'icon-flag2': '&#xec1e;',
		'icon-attachment': '&#xec1f;',
		'icon-eye': '&#xec20;',
		'icon-eye-plus': '&#xec21;',
		'icon-eye-minus': '&#xec22;',
		'icon-eye-blocked': '&#xec23;',
		'icon-bookmark2': '&#xec24;',
		'icon-bookmarks': '&#xec25;',
		'icon-sun2': '&#xec26;',
		'icon-contrast': '&#xec27;',
		'icon-brightness-contrast': '&#xec28;',
		'icon-star-empty': '&#xec29;',
		'icon-star-half': '&#xec2a;',
		'icon-star-full': '&#xec2b;',
		'icon-heart2': '&#xec2c;',
		'icon-heart-broken': '&#xec2d;',
		'icon-man': '&#xec2e;',
		'icon-woman': '&#xec2f;',
		'icon-man-woman': '&#xec30;',
		'icon-happy': '&#xec31;',
		'icon-happy2': '&#xec32;',
		'icon-smile2': '&#xec33;',
		'icon-smile22': '&#xec34;',
		'icon-tongue': '&#xec35;',
		'icon-tongue2': '&#xec36;',
		'icon-sad': '&#xec37;',
		'icon-sad2': '&#xec38;',
		'icon-wink': '&#xec39;',
		'icon-wink2': '&#xec3a;',
		'icon-grin': '&#xec3b;',
		'icon-grin2': '&#xec3c;',
		'icon-cool': '&#xec3d;',
		'icon-cool2': '&#xec3e;',
		'icon-angry': '&#xec3f;',
		'icon-angry2': '&#xec40;',
		'icon-evil': '&#xec41;',
		'icon-evil2': '&#xec42;',
		'icon-shocked': '&#xec43;',
		'icon-shocked2': '&#xec44;',
		'icon-baffled': '&#xec45;',
		'icon-baffled2': '&#xec46;',
		'icon-confused': '&#xec47;',
		'icon-confused2': '&#xec48;',
		'icon-neutral': '&#xec49;',
		'icon-neutral2': '&#xec4a;',
		'icon-hipster': '&#xec4b;',
		'icon-hipster2': '&#xec4c;',
		'icon-wondering': '&#xec4d;',
		'icon-wondering2': '&#xec4e;',
		'icon-sleepy': '&#xec4f;',
		'icon-sleepy2': '&#xec50;',
		'icon-frustrated': '&#xec51;',
		'icon-frustrated2': '&#xec52;',
		'icon-crying': '&#xec53;',
		'icon-crying2': '&#xec54;',
		'icon-point-up': '&#xec55;',
		'icon-point-right': '&#xec56;',
		'icon-point-down': '&#xec57;',
		'icon-point-left': '&#xec58;',
		'icon-warning': '&#xec59;',
		'icon-notification': '&#xec5a;',
		'icon-question2': '&#xec5b;',
		'icon-plus2': '&#xec5c;',
		'icon-minus2': '&#xec5d;',
		'icon-info': '&#xec5e;',
		'icon-cancel-circle': '&#xec5f;',
		'icon-blocked': '&#xec60;',
		'icon-cross': '&#xec61;',
		'icon-checkmark': '&#xec62;',
		'icon-checkmark2': '&#xec63;',
		'icon-enter': '&#xec65;',
		'icon-exit': '&#xec66;',
		'icon-play22': '&#xec67;',
		'icon-pause2': '&#xec68;',
		'icon-stop2': '&#xec69;',
		'icon-previous': '&#xec6a;',
		'icon-next': '&#xec6b;',
		'icon-backward2': '&#xec6c;',
		'icon-forward22': '&#xec6d;',
		'icon-play3': '&#xec6e;',
		'icon-pause22': '&#xec6f;',
		'icon-stop22': '&#xec70;',
		'icon-backward22': '&#xec71;',
		'icon-forward3': '&#xec72;',
		'icon-first': '&#xec73;',
		'icon-last': '&#xec74;',
		'icon-previous2': '&#xec75;',
		'icon-next2': '&#xec76;',
		'icon-eject2': '&#xec77;',
		'icon-volume-high': '&#xec78;',
		'icon-volume-medium': '&#xec79;',
		'icon-volume-low': '&#xec7a;',
		'icon-volume-mute': '&#xec7b;',
		'icon-volume-mute2': '&#xec7c;',
		'icon-volume-increase': '&#xec7d;',
		'icon-volume-decrease': '&#xec7e;',
		'icon-loop': '&#xec7f;',
		'icon-loop2': '&#xec80;',
		'icon-shuffle': '&#xec82;',
		'icon-arrow-up-left': '&#xec83;',
		'icon-arrow-up': '&#xec84;',
		'icon-arrow-up-right': '&#xec85;',
		'icon-arrow-right': '&#xec86;',
		'icon-arrow-down-right': '&#xec87;',
		'icon-arrow-down': '&#xec88;',
		'icon-arrow-down-left': '&#xec89;',
		'icon-arrow-left': '&#xec8a;',
		'icon-arrow-up-left2': '&#xec8b;',
		'icon-arrow-up2': '&#xec8c;',
		'icon-arrow-up-right2': '&#xec8d;',
		'icon-arrow-right2': '&#xec8e;',
		'icon-arrow-down-right2': '&#xec8f;',
		'icon-arrow-down2': '&#xec90;',
		'icon-arrow-down-left2': '&#xec91;',
		'icon-arrow-left2': '&#xec92;',
		'icon-circle-up': '&#xec93;',
		'icon-circle-right': '&#xec94;',
		'icon-circle-down': '&#xec95;',
		'icon-circle-left': '&#xec96;',
		'icon-tab': '&#xec97;',
		'icon-move-up': '&#xec98;',
		'icon-move-down': '&#xec99;',
		'icon-sort-alpha-asc': '&#xec9a;',
		'icon-sort-alpha-desc': '&#xec9b;',
		'icon-sort-numeric-asc': '&#xec9c;',
		'icon-sort-numberic-desc': '&#xec9d;',
		'icon-sort-amount-asc': '&#xec9e;',
		'icon-sort-amount-desc': '&#xec9f;',
		'icon-command': '&#xeca0;',
		'icon-shift': '&#xeca1;',
		'icon-ctrl': '&#xeca2;',
		'icon-opt': '&#xeca3;',
		'icon-checkbox-checked': '&#xeca4;',
		'icon-checkbox-unchecked': '&#xeca5;',
		'icon-radio-checked': '&#xeca6;',
		'icon-radio-checked2': '&#xeca7;',
		'icon-radio-unchecked': '&#xeca8;',
		'icon-crop2': '&#xeca9;',
		'icon-scissors': '&#xecac;',
		'icon-filter2': '&#xecad;',
		'icon-font2': '&#xecae;',
		'icon-ligature': '&#xecaf;',
		'icon-pagebreak': '&#xecc0;',
		'icon-clear-formatting': '&#xecc1;',
		'icon-table2': '&#xecc2;',
		'icon-table22': '&#xecc3;',
		'icon-insert-template': '&#xecc4;',
		'icon-pilcrow': '&#xecc5;',
		'icon-share2': '&#xeccf;',
		'icon-new-tab': '&#xecd0;',
		'icon-embed': '&#xecd1;',
		'icon-embed2': '&#xecd2;',
		'icon-terminal2': '&#xecd3;',
		'icon-share22': '&#xecd4;',
		'icon-mail4': '&#xecd5;',
		'icon-hangouts': '&#xecd6;',
		'icon-google-drive': '&#xecd7;',
		'icon-instagram2': '&#xecd8;',
		'icon-whatsapp': '&#xecd9;',
		'icon-spotify': '&#xecda;',
		'icon-renren2': '&#xecdb;',
		'icon-sina-weibo': '&#xecdc;',
		'icon-rss2': '&#xecdd;',
		'icon-rss22': '&#xecde;',
		'icon-youtube2': '&#xecdf;',
		'icon-youtube22': '&#xece0;',
		'icon-twitch': '&#xece1;',
		'icon-flickr2': '&#xece2;',
		'icon-flickr22': '&#xece3;',
		'icon-flickr3': '&#xece4;',
		'icon-flickr4': '&#xece5;',
		'icon-dribbble': '&#xece6;',
		'icon-steam': '&#xece7;',
		'icon-steam2': '&#xece8;',
		'icon-dropbox2': '&#xece9;',
		'icon-onedrive': '&#xecea;',
		'icon-appleinc': '&#xeceb;',
		'icon-android2': '&#xecec;',
		'icon-reddit': '&#xeced;',
		'icon-yelp': '&#xecf0;',
		'icon-chrome': '&#xecf1;',
		'icon-firefox': '&#xecf2;',
		'icon-IE': '&#xecf3;',
		'icon-edge': '&#xecf4;',
		'icon-safari': '&#xecf5;',
		'icon-opera': '&#xecf6;',
		'icon-file-pdf': '&#xecf7;',
		'icon-file-openoffice': '&#xecf8;',
		'icon-file-word': '&#xecf9;',
		'icon-file-excel': '&#xecfa;',
		'icon-libreoffice': '&#xecfb;',
		'icon-codepen': '&#xed00;',
		'icon-svg': '&#xed01;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
