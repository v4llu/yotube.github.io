var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){var g=true,i=null,j=false,k=playnav,l=window,n=_removeclass,aa=parseInt,o=_addclass,ba=get_channel_backend,p=document,q=Array;function s(c,b){return c.display=b}var t="appendChild",u="resizeScrollbox",v="indexOf",w="bind",x="fill",y="length",z="prototype",A="removeEventListener",B="split",C="style",D="body",E="parent",F="call",G="detachEvent",H="getCurrentTabName",I="apply",J="empty",K="event";var L=this,M=function(c,b,e){c=c[B](".");e=e||L;!(c[0]in e)&&e.execScript&&e.execScript("var "+c[0]);for(var f;c[y]&&(f=c.shift());)if(!c[y]&&b!==undefined)e[f]=b;else e=e[f]?e[f]:(e[f]={})},ca=function(c,b){var e=b||L;if(arguments[y]>2){var f=q[z].slice[F](arguments,2);return function(){var a=q[z].slice[F](arguments);q[z].unshift[I](a,f);return c[I](e,a)}}else return function(){return c[I](e,arguments)}},da=Date.now||function(){return+new Date};
Function[z].bind=function(c){if(arguments[y]>1){var b=q[z].slice[F](arguments,1);b.unshift(this,c);return ca[I](i,b)}else return ca(this,c)};M("yt.config_",l.yt&&l.yt.config_||{},void 0);M("yt.globals_",l.yt&&l.yt.globals_||{},void 0);var ea=l.yt&&l.yt.msgs_||{};M("yt.msgs_",ea,void 0);M("yt.timeouts_",l.yt&&l.yt.timeouts_||[],void 0);M("yt.intervals_",l.yt&&l.yt.intervals_||[],void 0);var fa=function(c,b,e){b=b||{};if(c=c in ea?ea[c]:e)for(var f in b)c=c.replace(new RegExp("\\$"+f,"gi"),b[f]);return c};eval("/*@cc_on!@*/false");var ga=q[z],ha=ga[v]?function(c,b,e){return ga[v][F](c,b,e)}:function(c,b,e){e=e==i?0:e<0?Math.max(0,c[y]+e):e;if(typeof c=="string"){if(typeof b!="string"||b[y]!=1)return-1;return c[v](b,e)}for(e=e;e<c[y];e++)if(e in c&&c[e]===b)return e;return-1};var ia=function(c,b,e){for(var f in c)if(b[F](e,c[f],f,c))return f};var ka=function(c,b){var e=0;c=String(c).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")[B](".");b=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")[B](".");for(var f=Math.max(c[y],b[y]),a=0;e==0&&a<f;a++){var d=c[a]||"",h=b[a]||"",m=new RegExp("(\\d*)(\\D*)","g"),r=new RegExp("(\\d*)(\\D*)","g");do{var O=m.exec(d)||["","",""],P=r.exec(h)||["","",""];if(O[0][y]==0&&P[0][y]==0)break;e=ja(O[1][y]==0?0:aa(O[1],10),P[1][y]==0?0:aa(P[1],10))||ja(O[2][y]==0,P[2][y]==0)||ja(O[2],P[2])}while(e==0)}return e},ja=function(c,
b){if(c<b)return-1;else if(c>b)return 1;return 0};da();var N,la,Q,ma,na=function(){return L.navigator?L.navigator.userAgent:i};ma=Q=la=N=j;var R;if(R=na()){var oa=L.navigator;N=R[v]("Opera")==0;la=!N&&R[v]("MSIE")!=-1;Q=!N&&R[v]("WebKit")!=-1;ma=!N&&!Q&&oa.product=="Gecko"}var pa=la,qa=ma,ra=Q,sa="",S;if(N&&L.opera){var ta=L.opera.version;sa=typeof ta=="function"?ta():ta}else{if(qa)S=/rv\:([^\);]+)(\)|;)/;else if(pa)S=/MSIE\s+([^\);]+)(\)|;)/;else if(ra)S=/WebKit\/(\S+)/;if(S){var ua=S.exec(na());sa=ua?ua[1]:""}}var va=sa,wa={};var T=function(c){return typeof c=="string"?p.getElementById(c):c},U=function(c,b,e){e=e||p;c=c&&c!="*"?c.toUpperCase():"";if(e.querySelectorAll&&(c||b)&&(!ra||p.compatMode=="CSS1Compat"||wa["528"]||(wa["528"]=ka(va,"528")>=0)))b=e.querySelectorAll(c+(b?"."+b:""));else if(b&&e.getElementsByClassName){e=e.getElementsByClassName(b);if(c){for(var f={},a=0,d=0,h;h=e[d];d++)if(c==h.nodeName)f[a++]=h;f.length=a;b=f}else b=e}else{e=e.getElementsByTagName(c||"*");if(b){f={};for(d=a=0;h=e[d];d++){c=h.className;
if(typeof c[B]=="function"&&ha(c[B](/\s+/),b)>=0)f[a++]=h}f.length=a;b=f}else b=e}return b},V=function(c){return c&&c.parentNode?c.parentNode.removeChild(c):i};var W={},xa=0,ya=function(c,b,e){return ia(W,function(f){return f[0]==c&&f[1]==b&&f[2]==e})},X=function(){return l.addEventListener?function(c,b,e){var f=++xa+"";W[f]=[c,b,e];c.addEventListener(b,e,j);return f}:l.attachEvent?function(c,b,e){var f=++xa+"";W[f]=[c,b,e];var a=function(){return e[F](c,l[K])};if(!c.h)c.h={};c.h[b]||(c.h[b]={});c.h[b][e]=a;c.attachEvent("on"+b,a);return f}:function(){return""}}(),Y=function(){return l[A]?function(c,b,e){c[A](b,e,j);(c=ya(c,b,e))&&delete W[c]}:l[G]?function(c,
b,e){c.h&&c.h[b]&&c.h[b][e]&&c[G]("on"+b,c.h[b][e]);(c=ya(c,b,e))&&delete W[c]}:function(){}}();(function(){return l[A]?function(c){if(c in W){var b=W[c];b[0][A](b[1],b[2],j);delete W[c]}}:l[G]?function(c){if(c in W){var b=W[c],e=b[0],f=b[1];b=b[2];e.h&&e.h[f]&&e.h[f][b]&&e[G]("on"+f,e.h[f][b]);delete W[c]}}:function(){}})();var Z=function(c){c=c||l[K];c=c.target||c.srcElement;if(c.nodeType==3)c=c.parentNode;return c},$=function(c){c=c||l[K];c.preventDefault&&c.preventDefault();return j};var za={};
(function(){function c(a){var d=a.getElementsByTagName("img");if(d[y]){d=d[0];if(!d.complete){s(a[C],"none");X(d,"load",function(){s(a[C],"")})}}}function b(a,d,h){this.f={G:this.G[w](this),H:this.H[w](this),F:this.F[w](this),D:this.D[w](this),C:this.C[w](this),J:this.J[w](this),I:this.I[w](this)};this.Da=a;this.ja=d;this.l=T("playnav-arranger-"+a);this.Q=[];this.aa={};this.ba=j;this.Ba=this.Aa=this.e=i;this.r={x:0,y:0};this.p={x:0,y:0};this.position=i;k.selectVideo(i);this.qa(h);this.q=T("playnav-body");
a=U("div","pinned",this.q);d=0;for(h=a[y];d<h;d++)s(a[d][C],"none");this.N=b.s(this.q);this.M=T(k.getCurrentScrollboxId());s(this.l[C],"block");this.P=U("select","count-selector",this.l)[0];this.P.value="6";this.d=[];this.ca=U("div","featured",this.l)[0];this.Z(6,1);this.R=j;this.z=new e(0,this);this.d[5].o=this.z;k.setupScrollableItems(this.fa[w](this));X(p[D],"mousemove",this.f.G);X(p[D],"mouseup",this.f.H);X(p[D],"mousedown",this.f.F);l.setTimeout(this.T[w](this),0);this.Ca=[];this.O=j;l.setTimeout(function(){k[u](this.M)}[w](this),
50)}function e(a,d){this.ha=a;this.parent=d;this.b=$ce("div",{c:"handle dropzone"});this.w=$ce("div",{c:"target"},[$ce("div",{c:"number"},$ctn(this.ha)),this.b]);this.t=$ce("div",{c:"target-holder"},this.w);X(this.b,"mouseover",this[E].f.D);X(this.b,"mouseout",this[E].f.C);this.b.j=this;return this}function f(a,d){a.j=this;this.parent=d;this.a=a;this.b=$ce("div",{c:"handle"});this.b.j=this;X(this.b,"mouseover",this[E].f.J);X(this.b,"mouseout",this[E].f.I);this.S();this.a[t](this.b)}b[z].oa=function(){function a(){var d=
b.s(this.l);if(this.position){if(d.x!=this.position.x||d.y!=this.position.y){this.T();this.N=b.s(this.q);this.position=d}}else this.position=d;this.O=j}if(!this.O){this.O=g;l.setTimeout(a[w](this),100)}};b[z].k=function(a){if(this.l){if(a&&this.R)if(!confirm(fa("CONFIRM_UNSAVED_CHANGES_ARRANGER")))return j;s(this.l[C],"none");a=0;for(var d=this.d[y];a<d;a++)this.d[a].k();this.z.k();k.setupScrollableItems(this.ya[w](this));k.setupScrollableItems(i);Y(p[D],"mousemove",this.f.G);Y(p[D],"mouseup",this.f.H);
Y(p[D],"mousedown",this.f.F);var h=U("div","pinned",this.q);a=0;for(d=h[y];a<d;a++)s(h[a][C],"");k[u](this.M);this.ja&&this.ja();return g}};b.pa=$ce("div",{style:"clear:both"});b[z].Z=function(a,d){for(var h=i,m=0;m<a;m++){var r=new e(d+m,this);if(h)h.o=r;h=r;this.ca[t](r.t);this.d.push(r)}this.ca[t](b.pa.cloneNode(j))};b[z].ea=function(){if(this.d[y]==6){this.Z(6,7);this.d[5].o=this.d[6];this.d[11].o=this.z}this.P.value="12";k[u](this.M);this.T()};b[z].xa=function(){if(this.d[y]==12){for(var a=0;a<
6;a++)this.d.pop().k();this.d[5].o=this.z}this.P.value="6";k[u](this.M)};b[z].ka=function(){s(U("div","loading",this.l)[0][C],"block")};b[z].la=function(){s(U("div","loading",this.l)[0][C],"none")};b[z].sa=function(){for(var a=0,d=this.d[y];a<d;a++)if(!this.d[a].n())return this.d[a]};e.g=i;e[z].k=function(){Y(this.b,"mouseover",this[E].f.D);Y(this.b,"mouseout",this[E].f.C);V(this.b);V(this.t)};b[z].T=function(){for(var a=this.d,d=0,h=a[y];d<h;d++)b.ua(a[d].b)};b.ua=function(a){var d=b.s(a.j.w);a[C].width=
a.offsetWidth+"px";a[C].height=a.offsetHeight+"px";a[C].top=d.y+"px";a[C].left=d.x+"px";p[D][t](a)};e[z].n=function(){return!!this.a};e[z].v=function(){e.A();e.g=this;o(this.t,"focused")};e[z].U=function(){e.V();e.u=this};e.A=function(){var a=e.g;if(a){n(a.t,"focused");e.g=i}};e.V=function(){e.u=i};e[z].fill=function(a,d){this.m=a;a=d||this.m.ra();this.m.L();this.a=a;o(this.t,"draggable");o(this.w,"target-filled");this.w[t](a);o(this.b,"dropzone-filled");this.m.wa(this)};e[z].empty=function(){var a=
this.a;V(this.a);this.a=i;n(this.t,"draggable");n(this.w,"target-filled");this.m.ma();this.m=i;n(this.b,"dropzone-filled");return a};e[z].ga=function(a,d){var h=this.m,m=i;if(h)m=this[J]();a&&this[x](a,d);h&&this.o&&this.o.ga(h,m)};e[z].Y=function(a){var d=this.m;if(a){if(d){var h=this[J]();a[x](d,h)}}else d&&this[J]();this.o&&this.o.Y(this)};e[z].B=function(){if(this.n()){var a=k[H]()=="playlists"?"encryptedPlaylistId":"encryptedVideoId";return U("div",a,this.a)[0].innerHTML}};f.g=i;f.i=i;f[z].k=
function(){this.a.j=i;Y(this.b,"mouseover",this[E].f.J);Y(this.b,"mouseout",this[E].f.I);this.K&&this.ma();V(this.b);delete this.b;n(this.a,"draggable");n(this.a,"in-featured")};f[z].B=function(){var a=k[H]()=="playlists"?"encryptedPlaylistId":"encryptedVideoId";return U("div",a,this.a)[0].innerHTML};f[z].v=function(){f.g=this;o(this.a,"focused")};f[z].U=function(){f.u=this};f.A=function(){var a=f.g;if(a){n(a.a,"focused");f.g=i}};f.V=function(){f.u=i};f[z].da=function(){var a=this.a.cloneNode(g),
d=$ce("div",{c:"dragging"},a);c(d);o(d,"inner-box-colors");d.a=a;return d};f[z].ra=function(){var a=this.b;V(this.b);var d=this.a.cloneNode(g);c(d);this.a[t](a);return d};f[z].S=function(){o(this.a,"draggable");this.$=g};f[z].L=function(){n(this.a,"draggable");this.$=j};f[z].wa=function(a){this.K=a;this.L();o(this.a,"in-featured");this.ia=$ce("div",{c:"number"},$ctn(a.ha));this.na=U("div","content",this.a)[0];this.na[t](this.ia)};f[z].ma=function(){this.K=i;this.S();n(this.a,"in-featured");V(this.ia)};
b[z].fa=function(a){a=U("div","playnav-item",a);for(var d=[],h=0,m=a[y];h<m;h++)if(!_hasclass(a[h],"pinned-item")){var r=new f(a[h],this);d.push(r);this.Q.push(r)}this.X();return d};b[z].ya=function(a){a=U("div","playnav-item",a);for(var d=0,h=a[y];d<h;d++){var m=a[d];m&&m.j&&m.j.k()}};b.s=function(a){for(var d={x:0,y:0};a;a=a.offsetParent){d.x+=a.offsetLeft-(a==p[D]?0:a.scrollLeft);d.y+=a.offsetTop-(a==p[D]?0:a.scrollTop)}return d};b[z].G=function(a){var d=a,h={x:0,y:0};d=d||l[K];if(d.pageX||d.pageY)h=
{x:d.pageX,y:d.pageY};else if(d.clientX||d.clientY)h={x:d.clientX+p[D].scrollLeft+p.documentElement.scrollLeft,y:d.clientY+p[D].scrollTop+p.documentElement.scrollTop};this.p=h;if(this.e){this.W();return $(a)}else this.oa()};b[z].H=function(){if(f.i&&e.g){var a=this.sa();a[x](f.i);this.R=g;a!=e.g&&!e.g.n()&&e.A();this.z.n()&&this.z[J]()}if(this.e){V(this.e);this.e=i;f.A();if(f.i){f.i.K||f.i.S();f.i=i}f.u&&f.u.v()}};b[z].D=function(a){a=Z(a).j;if(this.e){a.n()&&a.ga();a.v();o(this.e,"generictheme")}else a.n()&&
a.v();a.U()};b[z].C=function(a){a=Z(a).j;if(this.e){n(this.e,"generictheme");a.n()||a.Y()}e.A()};b[z].J=function(a){a=Z(a).j;a.U();this.e||a.v()};b[z].I=function(){f.V();this.e||f.A()};b[z].W=function(){this.e[C].left=this.p.x-this.N.x-this.r.x+"px";this.e[C].top=this.p.y-this.N.y-this.r.y+"px"};b[z].F=function(a){switch(Z(a).tagName.toLowerCase()){case "select":case "option":case "input":return g}if(f.g){var d=f.g;if(!d.$)return $(a);var h=b.s(d.a);f.i=d;d.L();this.e=d.da();this.q[t](this.e);this.r.x=
this.p.x-h.x;this.r.y=this.p.y-h.y;this.W();return $(a)}else if(e.g){d=e.g;h=b.s(d.w);f.i=d.m;f.i.v();d[J]();this.e=f.i.da();o(this.e,"generictheme");f.i.L();this.q[t](this.e);this.r.x=this.p.x-h.x;this.r.y=this.p.y-h.y;this.W();return $(a)}else if(e.u)return $(a)};b[z].save=function(a){a||this.ka();var d=[],h=[],m=Iter(this.d).collect(function(r){if(r.n())return r.B()}[w](this));if(k[H]()=="playlists")h=m;else d=m;d={playlist_name:k[H](),video_id_list:d,playlist_id_list:h};if(!a){ba().call_box_method(k.getBoxInfo(),
d,"save_arranged_items",this.va[w](this));k[H]()=="uploads"&&k.sort("default")}return d};b[z].va=function(){this.la();this.k();k.invalidateTab("all");k.invalidateTab(k[H]());k.selectTab(k[H]())};b[z].cancel=function(){this.k(j)};b[z].qa=function(a){this.ka();var d=a||{playlist_name:k[H]()};ba().call_box_method(k.getBoxInfo(),d,"get_arranged_items",this.ta[w](this));if(a)this.R=g};b[z].ta=function(a){var d=$ce("div");d.innerHTML=a;a=this.fa(d);a[y]>this.d[y]&&this.ea();for(d=0;d<a[y];d++){var h=a[d];
this.aa[h.B()]=h;this.d[d][x](a[d])}this.ba=g;this.la();this.X()};b[z].X=function(){if(this.ba)for(;this.Q[y];){var a=this.Q.pop(),d;if(d=this.aa[a.B()])if(d=d.K){d[J]();d[x](a)}}};b[z].za=function(a){var d=this.d[y];a=aa(a,10);if(a<d)this.xa();else a>d&&this.ea()};b[z].destruct=b[z].k;b[z].save=b[z].save;b[z].cancel=b[z].cancel;b[z].updateItemCount=b[z].za;za=b})();M("Arranger",za,void 0);M("goog.dom.$",T,void 0);M("goog.dom.$$",U,void 0);M("goog.dom.removeNode",V,void 0);})();


}
/*
     FILE ARCHIVED ON 00:23:23 Feb 12, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:01:48 Dec 16, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.453
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 18.572
  LoadShardBlock: 193.324 (3)
  PetaboxLoader3.datanode: 195.319 (4)
  load_resource: 199.193
  PetaboxLoader3.resolve: 165.232
*/