/*! For license information please see ab83463bd1a43fcc1b6a.bundle.js.LICENSE.txt */
            <div class='ui-chart-default-tooltip-content'>            
                ${e.series.xAxis.isDateTime?jl`<span>${this.shortDate(e.series.xAxis.getItemValue(this.asAny(e.item),"dateTimeMemberPath"))}</span>`:jl``}
                ${e.series.xAxis.isDateTime?jl`<br />`:jl``}
                ${!e.series.xAxis.isDateTime&&e.series.xAxis.label?jl`<span>${this.format(e.series.xAxis.getItemValue(this.asAny(e.item),"label"))}</span>`:jl``}
                ${!e.series.xAxis.isDateTime&&e.series.xAxis.label?jl`<br />`:jl``}
                <span style="color: ${this.getBrush(e.series)}">${e.series.title}: </span>
                <span class="ui-tooltip-priority">${this.getAnchoredValue(e.series,e.item)}</span>
            </div>`:jl``,this.financialTooltip=e=>e?jl`
            <div class='ui-chart-default-tooltip-content'>            
                ${e.series.xAxis.isDateTime?jl`<span>${e.itemLabel}</span>`:jl``}
                ${e.series.xAxis.isDateTime?jl`<br />`:jl``}
                ${!e.series.xAxis.isDateTime&&e.series.xAxis.label?jl`<span>${this.format(e.series.xAxis.getItemValue(this.asAny(e.item),"label"))}</span>`:jl``}
                ${!e.series.xAxis.isDateTime&&e.series.xAxis.label?jl`<br />`:jl``}
                <span style="color: ${this.getBrush(e.series)}">${e.series.title}: </span>
                <table>
                    ${this.hasOpen(e.series)?jl`<tr><td>${e.series.actualOpenLabel}:</td><td>${this.getOpenValue(e.series,e.item)}</td></tr>`:jl``}
                    ${this.hasHigh(e.series)?jl`<tr><td>${e.series.actualHighLabel}:</td><td>${this.getHighValue(e.series,e.item)}</td></tr>`:jl``}
                    ${this.hasLow(e.series)?jl`<tr><td>${e.series.actualLowLabel}:</td><td>${this.getLowValue(e.series,e.item)}</td></tr>`:jl``}
                    ${this.hasClose(e.series)?jl`<tr><td>${e.series.actualCloseLabel}:</td><td>${this.getCloseValue(e.series,e.item)}</td></tr>`:jl``}
                    ${this.hasVolume(e.series)?jl`<tr><td>${e.series.actualVolumeLabel}:</td><td>${this.getVolumeValue(e.series,e.item)}</td></tr>`:jl``}
                </table>
            </div>`:jl``,this.afterContentInit()}ensureDefaultTooltip(e){!e.isCategory||e.isVertical||e.isFinancial||e.isRange||(e.showDefaultTooltip?e.tooltipTemplate=this.anchoredCategoryTooltip:e.tooltipTemplate===this.anchoredCategoryTooltip&&(e.tooltipTemplate=null)),e.isFinancial&&(e.showDefaultTooltip?e.tooltipTemplate=this.financialTooltip:e.tooltipTemplate===this.financialTooltip&&(e.tooltipTemplate=null))}format(e){return null==e||null==e?"":e.getTime?this.shortDate(e):e.toString()}shortDate(e){return null==e||null==e?"":e.toLocaleDateString()+" "+e.toLocaleTimeString()}hasOpen(e){return e.openMemberPath}getOpenValue(e,t){return this.getItemValue(e,t,"openMemberPath",e.openMemberPath)}hasHigh(e){return e.highMemberPath}getHighValue(e,t){return this.getItemValue(e,t,"highMemberPath",e.highMemberPath)}hasLow(e){return e.lowMemberPath}getLowValue(e,t){return this.getItemValue(e,t,"lowMemberPath",e.lowMemberPath)}hasClose(e){return e.closeMemberPath}getCloseValue(e,t){return this.getItemValue(e,t,"closeMemberPath",e.closeMemberPath)}hasVolume(e){return e.volumeMemberPath}getVolumeValue(e,t){return this.getItemValue(e,t,"volumeMemberPath",e.volumeMemberPath)}getAnchoredValue(e,t){return this.getItemValue(e,t,"valueMemberPath",e.valueMemberPath)}getXValue(e,t){return this.getItemValue(e,t,"xMemberPath",e.xMemberPath)}getYValue(e,t){return this.getItemValue(e,t,"yMemberPath",e.yMemberPath)}hasRadius(e){return void 0!==e.radiusMemberPath}getRadiusValue(e,t){return this.getItemValue(e,t,"radiusMemberPath",e.radiusMemberPath)}getAngleValue(e,t){return this.getItemValue(e,t,"angleMemberPath",e.angleMemberPath)}hasValue(e){return e.valueMemberPath}getItemValue(e,t,i,r){return e.getItemValue(t,i)}getValue(e,t){return this.getItemValue(e,t,"valueMemberPath",e.valueMemberPath)}getBrush(e){return e.actualBrush}asAny(e){return e}static register(){ve.registerCons("IgcDataChartDefaultTooltipsComponent",ql)}afterContentInit(){this.onContentReady&&this.onContentReady()}}let Wl=(()=>{class e extends l{constructor(){super(...arguments),this.a=0,this.b=0,this.c=0}}return e.$t=y(e,"TouchHistoryItem"),e})(),Ul=(()=>{class e extends l{constructor(){super(...arguments),this.a=0,this.b=0}}return e.$t=y(e,"TouchVelocityReading"),e})(),Kl=(()=>{class e extends l{constructor(){super(...arguments),this.a=new Array(5),this.d=0}g(e,t,i){if(Ge(e)||Ge(t))return;let r=(()=>{let r=new Wl;return r.a=e,r.b=t,r.c=i,r})();this.a[this.d]=r,this.d++,this.d>4&&(this.d=0)}f(){this.d=0;for(let e=0;e<5;e++)this.a[e]=null}b(e){let t=e,i=NaN,r=NaN,n=NaN,s=NaN,a=0,o=0,l=!0;for(let e=0;e<5;e++)null!=this.a[e]&&(this.a[e].c-t>300||(l?(l=!1,i=this.a[e].a,r=this.a[e].a,n=this.a[e].b,s=this.a[e].b,a=this.a[e].c,o=this.a[e].c):(this.a[e].c<a&&(a=this.a[e].c,r=this.a[e].a,s=this.a[e].b),this.a[e].c>o&&(o=this.a[e].c,i=this.a[e].a,n=this.a[e].b))));return a==o||Ge(i)||Ge(r)||Ge(n)||Ge(s)?(()=>{let e=new Ul;return e.a=NaN,e.b=NaN,e})():(()=>{let e=new Ul;return e.a=(i-r)/((o-a)/1e3),e.b=(n-s)/((o-a)/1e3),e})()}}return e.$t=y(e,"TouchVelocityTracker"),e})(),Yl=(()=>{class e extends l{constructor(e){if(super(),this.a=0,this.b=0,0===(e=null==e?0:e)){let e=arguments.length<=1?void 0:arguments[1],t=arguments.length<=2?void 0:arguments[2];this.a=e,this.b=t}}}return e.$t=y(e,"TouchPointInfo"),e})(),Xl=(()=>{class e extends l{constructor(){super(...arguments),this.d=0,this.e=0,this.c=0,this.f=0,this.g=0,this.a=0,this.b=0,this.h=0,this.i=0}}return e.$t=y(e,"TouchGestureEventArgs"),e})(),Ql=(()=>{class e extends l{constructor(e){super(),this.n=0,this.p=new Kl,this.u=0,this.v=0,this.ab=0,this.ac=0,this.w=0,this.x=0,this.an=NaN,this.ao=NaN,this.am=NaN,this.ak=1,this.al=1,this.z=1,this.y=10,this.az=-1,this.ap=0,this.aq=0,this.a0=0,this.ag=1,this.ah=1,this.ad=1,this.ae=NaN,this.af=NaN,this.r=!1,this.o=null,this.av=800,this.ax=-1,this.b=null,this.q=!1,this.ay=-1,this.holdStarting=null,this.holdEnding=null,this.panStarting=null,this.manipulationStarting=null,this.manipulationChanging=null,this.manipulationEnding=null,this.panEnding=null,this.zoomStarting=null,this.zoomEnding=null,this.flingStarting=null,this.doubleTapped=null,this.ai=0,this.aj=0,this.aa=0,this.ar=0,this.as=0,this.a0=500,this.n=0,this.b=e}get aw(){return this.y}set aw(e){this.y=e}get at(){return this.u}get au(){return this.v}bh(){return{$type:pe,x:Math.abs(this.w-this.ab),y:Math.abs(this.x-this.ac)}}bf(e){let t=!1;Ge(this.ab)||Ge(this.ac)||(this.w=e._inner[0].a,this.x=e._inner[0].b,(Math.abs(e._inner[0].a-this.ab)>this.y||Math.abs(e._inner[0].b-this.ac)>this.y)&&(t=!0)),t&&this.be()}a7(e){let t=e.count,i=this.n,r=!1,n=!1,s=!1,a=!1,o=!1,l=!1,h=!1,c=!1,d=0,u=0,g=0,p=this.n;if(t>0&&t<2)switch(this.n){case 5:this.r=!1,i=4,n=!0,h=!0;break;case 0:i=4,n=!0;break;case 2:i=1,h=!0,a=!0}if(t>1)switch(this.n){case 5:this.r=!1,i=2,o=!0,c=!0;break;case 4:s=!0,i=2,o=!0;break;case 0:i=2,o=!0;break;case 1:i=2,l=!0,o=!0}if(0==t)switch(this.n){case 4:this.s(new Yl(0,this.u,this.v))?(i=0,s=!0,null!=this.doubleTapped&&this.doubleTapped(this,this.c())):(s=!0,i=0);break;case 1:i=0,l=!0;break;case 2:i=0,a=!0;break;case 3:i=0,r=!0}(c||this.r)&&(h&&(null!=this.panEnding&&this.panEnding(this,this.c()),null!=this.manipulationEnding&&this.manipulationEnding(this,this.c())),this.a2()),n&&(this.ab=e._inner[0].a,this.ac=e._inner[0].b),4==i&&(Ge(this.ab)||Ge(this.ac)||(this.w=e._inner[0].a,this.x=e._inner[0].b,(Math.abs(e._inner[0].a-this.ab)>this.y||Math.abs(e._inner[0].b-this.ac)>this.y)&&(s=!0,h=!0,i=1)));let m=0,f=0;for(let i=0;i<t;i++)m+=e._inner[i].a,f+=e._inner[i].b;if(m/=t,f/=t,0==t&&(m=this.ae,f=this.af),this.u=m,this.v=f,this.p.g(this.u,this.v,this.a1()),o){let t=e._inner[0].a-e._inner[1].a,i=e._inner[0].b-e._inner[1].b;this.an=Math.abs(t),this.ao=Math.abs(i),this.am=Math.sqrt(t*t+i*i),this.an<1&&(this.an=1),this.ao<1&&(this.ao=1),this.am<1&&(this.am=1)}if(2==i){let t=e._inner[0].a-e._inner[1].a,i=e._inner[0].b-e._inner[1].b;d=Math.abs(t),u=Math.abs(i),g=Math.sqrt(t*t+i*i),d<1&&(d=1),u<1&&(u=1),g<1&&(g=1),this.ak=d/this.an,this.al=u/this.ao,this.z=g/this.am}else this.an=NaN,this.ao=NaN,this.ak=1,this.al=1,this.ai=1,this.aj=1,this.aa=1;this.n=i,(0==p&&1==this.n||2==this.n)&&null!=this.manipulationStarting&&this.manipulationStarting(this,this.c()),a&&this.a6(),l&&this.a5(),r&&this.a4(),s&&this.be(),h&&this.bb(),n&&this.ba(),o&&this.bc(),2==this.n&&(this.ai=this.ak/this.ag,this.aj=this.al/this.ah,this.aa=this.z/this.ad,this.ar=this.u-this.ae,this.as=this.v-this.af,this.ag=this.ag*this.ai,this.ah=this.ah*this.aj,this.ad=this.ad*this.aa,this.ae=this.u,this.af=this.v,null!=this.manipulationChanging&&this.manipulationChanging(this,this.c())),1==this.n&&(this.ar=this.u-this.ae,this.as=this.v-this.af,this.ae=this.u,this.af=this.v,null!=this.manipulationChanging&&this.manipulationChanging(this,this.c())),this.ae=this.u,this.af=this.v,(l||a)&&0==this.n&&null!=this.manipulationEnding&&this.manipulationEnding(this,this.c())}s(e){let t=this.a1();return t-this.az<500&&Math.abs(e.a-this.ap)<50&&Math.abs(e.b-this.aq)<50||(this.ap=e.a,this.aq=e.b,this.az=t,!1)}ba(){this.ay=this.a1(),this.q||(this.q=!0,this.b.executeDelayed(Q(this,this.a3),1e3))}a3(){if(!this.q)return;let e=this.a1();e-this.ay>=this.a0?this.a9():this.b.executeDelayed(Q(this,this.a3),this.a0-(e-this.ay))}be(){this.q=!1}a6(){this.p.f(),null!=this.zoomEnding&&this.zoomEnding(this,this.c())}a9(){null!=this.holdStarting&&this.holdStarting(this,this.c())}bc(){this.p.f(),this.a2(),this.ag=1,this.ah=1,this.ad=1,this.ae=this.u,this.af=this.v,null!=this.zoomStarting&&this.zoomStarting(this,this.c())}a4(){null!=this.holdEnding&&this.holdEnding(this,this.c())}bb(){this.p.f(),this.a2(),this.ae=this.u,this.af=this.v,null!=this.panStarting&&this.panStarting(this,this.c())}bd(){5==this.n&&(this.r=!0)}a2(){this.r=!1,5==this.n&&(this.n=0)}bg(){if(5!=this.n)return void(this.r=!1);if(null==this.o||-1==this.ax)return void this.a2();let e=this.a1(),t=e-this.ax;if(t<16)return void this.a8(Q(this,this.bg));this.ax=e;let i=t/1e3,r=this.av*i,n=this.o;if(n.a>0&&(n.a-=r,n.a<0&&(n.a=0)),n.a<0&&(n.a+=r,n.a>0&&(n.a=0)),n.b>0&&(n.b-=r,n.b<0&&(n.b=0)),n.b<0&&(n.b+=r,n.b>0&&(n.b=0)),0==n.a&&0==n.b||this.r)return this.n=0,null!=this.panEnding&&this.panEnding(this,this.c()),null!=this.manipulationEnding&&this.manipulationEnding(this,this.c()),void this.a2();this.u+=n.a*i,this.v+=n.b*i,this.ar=this.u-this.ae,this.as=this.v-this.af,this.ae=this.u,this.af=this.v,null!=this.manipulationChanging&&this.manipulationChanging(this,this.c()),this.a8(Q(this,this.bg))}t(e){return this.r=!1,5==this.n&&this.a2(),this.ax=this.a1(),this.o=e,this.n=5,this.a8(Q(this,this.bg)),!(null!=this.flingStarting&&!this.flingStarting(this,this.c())&&(this.a2(),1))}a8(e){this.b.enqueueAnimationAction(e)}a5(){let e=this.p.b(this.a1());(e.a>5||e.a<-5||e.b>5||e.b<-5)&&0==this.n?(this.n=1,this.t(e)||0==this.n&&(null!=this.panEnding&&this.panEnding(this,this.c()),null!=this.manipulationEnding&&this.manipulationEnding(this,this.c()))):(null!=this.panEnding&&this.panEnding(this,this.c()),0==this.n&&null!=this.manipulationEnding&&this.manipulationEnding(this,this.c()))}c(){let e=new Xl;return e.a=this.u,e.b=this.v,e.d=this.ai,e.e=this.aj,e.c=this.aa,e.f=this.ar,e.g=this.as,e.h=null!=this.o?this.o.a:this.p.b(this.a1()).a,e.i=null!=this.o?this.o.b:this.p.b(this.a1()).b,e}a1(){return this.b.getCurrentRelativeTime()}}return e.$t=y(e,"TouchGestureRecognizer"),e})(),Zl=(()=>{class e extends gr{constructor(t,i,r){super(),this.dh=0,this.dj="",this.c5=null,this.di=null,this.db=new Re(U,st.$.specialize(X),0),this.d7=null,this.c6=!1,this.dc=new st(W,0),this.dd=new st(pe,0),this.c8=!1,this.de=new st(Yl.$,0),this.bx=r,this.b3=i,this.c5=new Ql(new Xs(i));let n=this.c5;n.holdEnding=Z(n.holdEnding,Q(this,this.dl));let s=this.c5;s.holdStarting=Z(s.holdStarting,Q(this,this.dm));let a=this.c5;a.zoomStarting=Z(a.zoomStarting,Q(this,this.du));let o=this.c5;o.zoomEnding=Z(o.zoomEnding,Q(this,this.dt));let l=this.c5;l.panStarting=Z(l.panStarting,Q(this,this.ds));let h=this.c5;h.panEnding=Z(h.panEnding,Q(this,this.dr));let c=this.c5;c.manipulationStarting=Z(c.manipulationStarting,Q(this,this.dq));let d=this.c5;d.manipulationChanging=Z(d.manipulationChanging,Q(this,this.dn));let u=this.c5;u.manipulationEnding=Z(u.manipulationEnding,Q(this,this.dp));let g=this.c5;g.doubleTapped=Z(g.doubleTapped,Q(this,this.dk));let p=this.c5;p.flingStarting=Z(p.flingStarting,Q(this,this.c7)),this.ap=e=>!0,this.ab=!0,e.dg++,this.dh=e.dg,this.dj=".DOMProxy"+this.dh.toString(),this.bi=0,this.b4=t,gr.bt=!1;try{gr.bt=window.navigator.msPointerEnabled&&void 0!==window.MSGesture}catch(e){}gr.bu=!1;try{gr.bu=void 0!==window.PointerEvent}catch(e){}gr.by&&(this.ab=!1),gr.cc=this.cb(),gr.b9=this.ca(),this.at(this.b4,""),this.ao=e=>!0}d(){let t=new e(this.b4,this.b3,this.bx);return t.ab=this.ab,t.ap=this.ap,t}c7(e,t){return this.ag({$type:pe,x:t.a,y:t.b},t.h,t.i)}dk(e,t){this.a0({$type:pe,x:t.a,y:t.b})}get_an(){return!0}get_ac(){return 5==this.c5.n}au(){super.au(),this.c5.bd()}dp(e,t){0==this.c5.n&&(this.a4({$type:pe,x:t.a,y:t.b},t.d),this.cr())}dn(e,t){2==this.c5.n&&(this.bc({$type:pe,x:t.a,y:t.b},t.d),this.bf({$type:pe,x:t.a,y:t.b},t.d,t.e,t.c)),1!=this.c5.n&&5!=this.c5.n||(this.ay({$type:pe,x:t.a,y:t.b},!0),this.a2({$type:pe,x:t.a,y:t.b}))}dq(e,t){}dr(e,t){this.c6=!1,0==this.c5.n&&(this.ax({$type:pe,x:t.a,y:t.b},!0,!1),this.a1({$type:pe,x:t.a,y:t.b}))}ds(e,t){this.a3({$type:pe,x:t.a,y:t.b})}dt(e,t){this.be({$type:pe,x:t.a,y:t.b},t.d,t.e,t.c)}du(e,t){this.bd({$type:pe,x:t.a,y:t.b},1),this.bg({$type:pe,x:t.a,y:t.b},1,1,1)}dm(e,t){this.c6=!0,this.a5({$type:pe,x:t.a,y:t.b})}dl(e,t){0==this.c5.n&&this.ax({$type:pe,x:t.a,y:t.b},!0,!1)}static c9(){gr.bt=!1;try{gr.bt=window.navigator.msPointerEnabled&&void 0!==window.MSGesture}catch(e){}gr.bu=!1;try{gr.bu=void 0!==window.PointerEvent}catch(e){}return gr.by}dv(e,t,i){}at(e,t){let i=e;if(!this.b3.supportsDOMEvents())return;let r=this.dj+t,n=new st(X,0);if(this.db.addItem(r,n),this.dv(e,t,n),gr.by||(n.add(i.listen("mousemove",Q(this,this.cj))),n.add(i.listen("mouseleave",Q(this,this.ci))),n.add(i.listen("mousedown",Q(this,this.ch))),n.add(i.listen("mouseup",Q(this,this.cl))),n.add(this.b3.globalListen("window","mouseup",Q(this,this.cz)))),n.add(i.listen("keydown",Q(this,this.ce))),n.add(i.listen("keyup",Q(this,this.cg))),gr.by){let e=this.b4.getNativeElement();gr.ct(e),this.b4.getNativeElement(),gr.bu?(n.add(i.listen("pointerdown",Q(this,this.dy))),n.add(i.listen("pointerup",Q(this,this.d1))),n.add(i.listen("pointercancel",Q(this,this.dx))),n.add(i.listen("pointermove",Q(this,this.dz))),n.add(i.listen("pointerleave",Q(this,this.d0))),n.add(i.listen("lostpointercapture",Q(this,this.dw)))):(n.add(i.listen("MSPointerDown",Q(this,this.dy))),n.add(i.listen("MSPointerUp",Q(this,this.d1))),n.add(i.listen("MSPointerCancel",Q(this,this.dx))),n.add(i.listen("MSPointerMove",Q(this,this.dz))),n.add(i.listen("MSPointerLeave",Q(this,this.d0))),n.add(i.listen("MSLostPointerCapture",Q(this,this.dw))))}else n.add(i.listen("touchstart",Q(this,this.d4))),n.add(i.listen("touchmove",Q(this,this.d3))),n.add(i.listen("touchend",Q(this,this.d2)));this.bx?n.add(i.listen("wheel",Q(this,this.cm))):(n.add(i.listen("DOMMouseScroll",Q(this,this.ck))),n.add(i.listen("mousewheel",Q(this,this.ck))))}d1(e){let t=this.br(e),i=this.dc.indexOf(e.originalEvent.pointerId);i>=0&&(this.dc.removeAt(i),this.dd.removeAt(i),this.b8=this.dc.count),t?this.d2(e):this.cl(e)}dw(e){this.br(e)}dx(e){this.br(e);let t=this.dc.indexOf(e.originalEvent.pointerId);t>=0&&(this.dc.removeAt(t),this.dd.removeAt(t),this.b8=this.dc.count)}dy(e){let t=this.br(e);if(gr.cs(e),this.dc.add(e.originalEvent.pointerId),this.dd.add({$type:pe,x:e.pageX,y:e.pageY}),this.b8=this.dc.count,t?this.cy(e):this.cx(e),this.cw(e),!this.c8&&this.ad(this.c3,t,!1)){let t=this.b4.getNativeElement();gr.bu?t.setPointerCapture(e.originalEvent.pointerId):t.msSetPointerCapture(e.originalEvent.pointerId)}t?this.d4(e):this.ch(e)}dz(e){let t=this.br(e);gr.cs(e),this.cw(e),this.cy(e);let i=this.dc.indexOf(e.originalEvent.pointerId);if(i>=0&&(this.dd._inner[i]={$type:pe,x:e.pageX,y:e.pageY}),this.c8&&this.ad(this.c3,t,!1)){let t=this.b4.getNativeElement();gr.bu?t.setPointerCapture(e.originalEvent.pointerId):t.msSetPointerCapture(e.originalEvent.pointerId)}t?this.d3(e):this.cj(e)}d0(e){this.br(e)||this.ci(e)}d4(e){this.bs=!0,this.cw(e),this.cy(e),this.d7=this.c2,this.ad(this.c3,!0,!1)&&(!this.ab||this.b8>1?(this.bw&&(this.bw=!1,this.cd()),this.cu(e)):(this.bw=!0,this.c6=!1),this.ba(this.c3,!1,!0),this.a7(this.c3),this.az(this.c2,!0),this.c5.a7(this.df(e)))}df(e){let t=gr.c4(this.b4),i=this.bl,r=0,n=0;if(Vi.l_op_Inequality(i,null)&&(r=i.left,n=i.top),this.de.clear(),gr.by){let e=this.dc.count;for(let r=0;r<e;r++){this.dc._inner[r];let e=this.dd._inner[r],n=e.x,s=e.y,a=new Yl(1);a.a=n-t.left-i.left,a.b=s-t.top-i.top,this.de.add(a)}}else{let i=e.originalEvent.targetTouches.length;for(let s=0;s<i;s++){let i=e.originalEvent.targetTouches[s].pageX,a=e.originalEvent.targetTouches[s].pageY,o=new Yl(1);o.a=i-t.left-r,o.b=a-t.top-n,this.de.add(o)}}return this.de}d3(e){this.bs=!0,this.cw(e),this.cy(e),this.bw&&(this.ad(this.c3,!0,!1)&&this.da()||1==this.c6||2==this.c5.n)&&(this.bw=!1,this.cd()),!this.c6&&2!=this.c5.n&&!this.ad(this.c3,!0,!1)||this.bw||(this.c6=!0,this.cu(e),this.c5.a7(this.df(e)))}da(){let e={$type:pe,x:this.d7.x-this.c2.x,y:this.d7.y-this.c2.y};return Math.abs(e.x)>Math.abs(e.y)&&(e.y=0),Math.abs(e.y)>Math.abs(e.x)&&(e.x=0),this.ap(e)}d2(e){this.bs=!1,this.cw(e),this.cy(e),this.bw&&(this.bw=!1,this.cd());let t=this.c5.n,i=this.ad(this.c3,!0,!1)||0!=t;2!=this.c5.n&&5!=this.c5.n&&(this.ba(this.c3,!1,!0),this.bb(this.c3));let r=2==this.c5.n;r&&(i=!0,this.ax({$type:pe,x:this.c5.at,y:this.c5.au},!0,!0)),this.c5.a7(this.df(e)),0==this.c5.n&&this.cr(),r||0!=this.c5.n||this.ax({$type:pe,x:this.c5.at,y:this.c5.au},!0,!1),0!=this.c5.n&&(i=!0),i&&this.cu(e)}d5(e){if(this.db.containsKey(e)){let t=this.db.item(e);this.db.removeItem(e);for(let e=0;e<t.count;e++)t._inner[e]();t.clear()}}bh(e,t){let i=this.dj+t;this.d5(i)}av(){null!=this.b4&&(this.d5(this.dj),this.b4=null)}static register(){ve.register("CanvasGestureDOMEventProxy",e.$)}}return e.$t=y(e,"CanvasGestureDOMEventProxy",gr.$),e.dg=0,e})(),Jl=`\n    .ui-tooltip-container {\n        padding: 5px; \n        padding: var(--tooltip-container-padding, 5px);\n        background-color: white; \n        background-color: var(--tooltip-container-background-color, white);\n        border-style: solid; \n        border-style: var(--tooltip-container-border-style, solid);\n        border-width: 1px; \n        border-width: var(--tooltip-container-border-width, 1px);\n        color: ${zi.tooltipLabelsBrush.fill}; \n        color: var(--tooltip-container-text-color, ${zi.tooltipLabelsBrush.fill});\n        font: ${zi.tooltipLabelsFontSize}px ${zi.tooltipLabelsFontFamily};\n        font: var(--tooltip-container-font, ${zi.tooltipLabelsFontSize}px ${zi.tooltipLabelsFontFamily});\n        pointer-events: none;\n        white-space: nowrap;\n        border-color: #666;\n        border-color: var(--tooltip-container-border-color, #666);\n    }\n`,eh=new WeakMap,th=(()=>{class e extends ri{constructor(){super(),this._template=null,this._containerTemplate=null,this._attached=!1,this._context=null,this._id=null,this._isBridged=!1,this.ensureCss(),this.containerTemplate=e=>jl`
        <div class='ui-tooltip-container'
            style="border-color: ${e&&e.isSubContent?"transparent":"#666"}">
            ${e&&this.template?this.template(e):jl``}
        </div>
`}ensureCss(){if(!document)return;if(eh.has(document))return;for(let e=document.head.children.length-1;e>=0;e--){let t=document.head.children[e];if(t.tagName&&"style"==t.tagName.toLowerCase()&&t.hasAttribute("data-ig-tooltip-style"))return}let e=document.createElement("style");e.textContent=Jl,e.setAttribute("data-ig-tooltip-style","true"),document.head.appendChild(e),eh.set(document,!0)}set template(e){var t=this._template;this._template=e,this.onTemplateChanged(t,this._template)}get template(){return this._template}connectedCallback(){this.attachedCallback()}attachedCallback(){this._attached=!0,this.classList.add("ig-tooltip-container"),this.classList.add("igc-tooltip-container"),this.render()}diconnectedCallBack(){this.template&&this.template.___isBridged&&this.teardownBridgedTemplate(this.template)}set containerTemplate(e){this._containerTemplate=e,this._attached&&this.onContainerTemplateChanged()}get containerTemplate(){return this._containerTemplate}set context(e){this._context=e,this.onContextChanged()}get context(){return this._context}onContextChanged(){this.render()}teardownBridgedTemplate(e){e.___onTemplateTeardown(this._template,this,this._template)}setupBridgedTemplate(e){this._id=Me(),e.___onTemplateInit(this._template,this,this._template)}onTemplateChanged(e,t){t&&t.___isBridged&&!this._isBridged&&(this.setupBridgedTemplate(t),this._isBridged=!0),this._attached&&this.render()}onContainerTemplateChanged(){this.render()}render(){this._isBridged&&this.context&&(this.context.___contentId=this._id),this.containerTemplate&&this.context||this.containerTemplate?(Gl(this.containerTemplate(this.context),this),this._isBridged&&this._template.___onTemplateContextChanged(this._template,this,this.context)):this.innerHTML=""}destroy(){}static register(){e._registered||(e._registered=!0,window.customElements?window.customElements.define(e.htmlTagName,e):document.registerElement(e.htmlTagName,e),ve.registerCons("IgcTooltipContainerComponent",e))}}return e._registered=!1,e.htmlTagName="igc-tooltip-container",e})(),ih=(()=>{class e extends ri{constructor(){super(),this._template=null,this._attached=!1,this._context=null,this._isContextPopulated=!1,this._id=null,this._isBridged=!1,this.template=e=>jl`
               <div></div>  
            `}set template(e){var t=this._template;this._template=e,this.onTemplateChanged(t,this._template)}get template(){return this._template}connectedCallback(){this.attachedCallback()}attachedCallback(){this._attached=!0,this.render()}diconnectedCallBack(){this.template&&this.template.___isBridged&&this.teardownBridgedTemplate(this.template)}set context(e){this._isContextPopulated=!0,null==this._context&&null==e||(this._context=e,this.onContextChanged())}get context(){return this._context}markChanged(){this.onContextChanged()}onContextChanged(){this.render()}teardownBridgedTemplate(e){e.___onTemplateTeardown(this._template,this,this._template)}setupBridgedTemplate(e){this._id=Me(),e.___onTemplateInit(this._template,this,this._template)}onTemplateChanged(e,t){t&&t.___isBridged&&!this._isBridged&&(this.setupBridgedTemplate(t),this._isBridged=!0),this._attached&&this.render()}render(){this._isBridged&&this.context&&(this.context.___contentId=this._id),this.context&&this.template||this.template?(Gl(this.template(this.context),this),this._isBridged&&this._isContextPopulated&&this._template.___onTemplateContextChanged(this._template,this,this.context)):this.innerHTML=""}get owner(){return this._owner}set owner(e){this._owner=e}static register(){e._registered||(e._registered=!0,window.customElements?window.customElements.define(e.htmlTagName,e):document.registerElement(e.htmlTagName,e),ve.registerCons("IgcTemplateContentComponent",e))}}return e.htmlTagName="igc-template-content",e._registered=!1,e})();class rh{static register(){ih.register(),ve.registerCons("IgcTemplateContentComponent",ih)}}class nh{static register(){th.register(),rh.register()}}let sh=(()=>{class e extends ri{constructor(){super(),this.tooltip=e=>e?jl`
    <div class='ui-simple-default-tooltip-content'>
        <span  style="white-space: nowrap;font-weight: bold;" >${this.getLabel(e)}</span>
    </div>
`:jl``}ensureDefaultTooltip(e){e.showToolTip?e.tooltipTemplate=this.tooltip:e.tooltipTemplate=null}getLabel(e){if(null==e.itemName){let t=e.label.split(":");return t.length<2?e.label:t[1].trim()}return e.label}render(e){this.tooltip&&Gl(this.tooltip(e),this)}connectedCallback(){this.onContentReady&&this.onContentReady()}static register(){e._registered||(e._registered=!0,window.customElements?window.customElements.define(e.htmlTagName,e):document.registerElement(e.htmlTagName,e),ve.registerCons("IgcSimpleDefaultTooltipComponent",e))}}return e._registered=!1,e.htmlTagName="igc-simple-default-tooltip",e})();class ah{static register(){ve.register("CanvasGestureDOMEventProxy",Zl.$type),nh.register(),sh.register(),ve.registerCons("IgcSimpleDefaultTooltipComponent",sh),sh.register()}}class oh{static register(){ve.register("InteractivityFactoryManager",$l.$type),$l.register(),ql.register(),ve.registerCons("IgcDataChartDefaultTooltipsComponent",ql),ve.registerCons("IgcDataChartDefaultTooltipsComponent",ql),ah.register()}}const lh=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];for(const e of t){const t=e.tagName;t&&!window.customElements.get(t)&&window.customElements.define(t,e)}},hh=window,ch=hh.ShadowRoot&&(void 0===hh.ShadyCSS||hh.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dh=Symbol(),uh=new WeakMap;class gh{constructor(e,t,i){if(this._$cssResult$=!0,i!==dh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ch&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=uh.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&uh.set(t,e))}return e}toString(){return this.cssText}}const ph=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1]),e[0]);return new gh(i,e,dh)},mh=(e,t)=>{ch?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),r=hh.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=t.cssText,e.appendChild(i)}))},fh=ch?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new gh("string"==typeof e?e:e+"",void 0,dh))(t)})(e):e;var vh;const yh=window,xh=yh.trustedTypes,bh=xh?xh.emptyScript:"",wh=yh.reactiveElementPolyfillSupport,_h={toAttribute(e,t){switch(t){case Boolean:e=e?bh:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},Ch=(e,t)=>t!==e&&(t==t||e==e),Sh={attribute:!0,type:String,converter:_h,reflect:!1,hasChanged:Ch};class kh extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const r=this._$Ep(i,t);void 0!==r&&(this._$Ev.set(r,i),e.push(r))})),e}static createProperty(e,t=Sh){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Sh}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(fh(e))}else void 0!==e&&t.push(fh(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return mh(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Sh){var r;const n=this.constructor._$Ep(e,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==(null===(r=i.converter)||void 0===r?void 0:r.toAttribute)?i.converter:_h).toAttribute(t,i.type);this._$El=e,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,n=r._$Ev.get(e);if(void 0!==n&&this._$El!==n){const e=r.getPropertyOptions(n),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:_h;this._$El=n,this[n]=s.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Ch)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var Ih,Dh;kh.finalized=!0,kh.elementProperties=new Map,kh.elementStyles=[],kh.shadowRootOptions={mode:"open"},null==wh||wh({ReactiveElement:kh}),(null!==(vh=yh.reactiveElementVersions)&&void 0!==vh?vh:yh.reactiveElementVersions=[]).push("1.6.1");class Th extends kh{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,Bl.sY)(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return Bl.Jb}}Th.finalized=!0,Th._$litElement$=!0,null===(Ih=globalThis.litElementHydrateSupport)||void 0===Ih||Ih.call(globalThis,{LitElement:Th});const Eh=globalThis.litElementPolyfillSupport;null==Eh||Eh({LitElement:Th}),(null!==(Dh=globalThis.litElementVersions)&&void 0!==Dh?Dh:globalThis.litElementVersions=[]).push("3.3.2");const Ah=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function Mh(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):Ah(e,t)}function Ph(e){return Mh({...e,state:!0})}const zh=({finisher:e,descriptor:t})=>(i,r)=>{var n;if(void 0===r){const r=null!==(n=i.originalKey)&&void 0!==n?n:i.key,s=null!=t?{kind:"method",placement:"prototype",key:r,descriptor:t(i.key)}:{...i,key:r};return null!=e&&(s.finisher=function(t){e(t,r)}),s}{const n=i.constructor;void 0!==t&&Object.defineProperty(i,r,t(r)),null==e||e(n,r)}};function Oh(e,t){return zh({descriptor:i=>{const r={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;r.get=function(){var i,r;return void 0===this[t]&&(this[t]=null!==(r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==r?r:null),this[t]}}return r}})}var Rh;const Vh=null!=(null===(Rh=window.HTMLSlotElement)||void 0===Rh?void 0:Rh.prototype.assignedElements)?(e,t)=>e.assignedElements(t):(e,t)=>e.assignedNodes(t).filter((e=>e.nodeType===Node.ELEMENT_NODE));function Fh(e){const{slot:t,selector:i}=null!=e?e:{};return zh({descriptor:r=>({get(){var r;const n="slot"+(t?`[name=${t}]`:":not([name])"),s=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(n),a=null!=s?Vh(s,e):[];return i?a.filter((e=>e.matches(i))):a},enumerable:!0,configurable:!0})})}function Nh(e,t){return(i,r)=>{const{willUpdate:n}=i;t=Object.assign({waitUntilFirstUpdate:!1},t),i.willUpdate=function(i){if(n.call(this,i),i.has(e)){const n=i.get(e),s=this[e];n!==s&&((null==t?void 0:t.waitUntilFirstUpdate)&&!this.hasUpdated||this[r].call(this,n,s))}}}}let Lh;const $h=()=>{if(!Lh){const[e,t]=Object.entries(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const r=window.getComputedStyle(t,i),n={};return e.forEach((e=>{const t=r.getPropertyValue(e);t&&(n[(e=>e.replace("--","").replace(/-./g,(e=>e.toUpperCase()[1])))(e)]=t.trim())})),n}(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.styleSheets;const t=[];return Array.from(e).forEach((e=>{try{Array.from(e.cssRules).forEach((e=>{e&&e.style&&Array.from(e.style).forEach((e=>{e.startsWith("--")&&-1==t.indexOf(e)&&t.push(e)}))}))}catch(e){}})),t}(),document.documentElement)).find((e=>{let[t]=e;return"igTheme"===t}))||[];Lh=t&&function(e){return["bootstrap","material","indigo","fluent"].includes(e)}(t)?t:"bootstrap"}return Lh},Bh="igc-change-theme";class Hh{constructor(e,t){this.__themingEventHandler=()=>{this.adoptStyles(),this.host.requestUpdate()},this.host=e,this.themes=t}hostConnected(){this.adoptStyles(),window.addEventListener(Bh,this.__themingEventHandler)}hostDisconnected(){window.removeEventListener(Bh,this.__themingEventHandler)}adoptStyles(){this.theme=$h();const e=this.host.constructor,t=window.ShadowRoot&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;let i=ph``;const[r]=Object.entries(this.themes).filter((e=>{let[t]=e;return t===this.theme}));if(r){const[e,t]=r;i=t}t||[...this.host.renderRoot.querySelectorAll("style")].slice(1).forEach((e=>e.remove())),mh(this.host.shadowRoot,[...e.elementStyles,i])}}function jh(e){return t=>(t.addInitializer((t=>{const i=((e,t)=>{const i=new Hh(e,t);return e.addController(i),i})(t,e);"themeAdopted"in t&&t.themeAdopted(i)})),t)}const Gh=ph`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  overflow: hidden;
}

:host([alignment=start]) [part=headers-scroll] ::slotted(igc-tab:last-of-type) {
  -webkit-margin-end: auto;
          margin-inline-end: auto;
}

:host([alignment=end]) [part=headers-scroll] ::slotted(igc-tab:first-of-type) {
  -webkit-margin-start: auto;
          margin-inline-start: auto;
}

:host([alignment=center]) [part=headers-scroll] ::slotted(igc-tab:first-of-type) {
  -webkit-margin-start: auto;
          margin-inline-start: auto;
}
:host([alignment=center]) [part=headers-scroll] ::slotted(igc-tab:last-of-type) {
  -webkit-margin-end: auto;
          margin-inline-end: auto;
}

:host([alignment=justify]) [part=headers-scroll] ::slotted(igc-tab) {
  -ms-flex-preferred-size: 100px;
      flex-basis: 100px;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  max-width: 100%;
}

[part=headers] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  min-height: 2.625rem;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  -webkit-box-flex: 0;
      -ms-flex: none;
          flex: none;
}

[part=headers-content] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  scroll-behavior: smooth;
  overflow: hidden;
}

[part=headers-wrapper] {
  position: relative;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}

[part=headers-scroll] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
}

[part=content] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  overflow: hidden;
}

[part=selected-indicator] {
  position: absolute;
  inset-inline-start: 0;
  bottom: 0;
  -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
          transform: translateX(0);
  height: 0.125rem;
  min-width: 5.625rem;
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-transition: width 0.2s cubic-bezier(0.35, 0, 0.25, 1), -webkit-transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  transition: width 0.2s cubic-bezier(0.35, 0, 0.25, 1), -webkit-transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  -o-transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1), width 0.2s cubic-bezier(0.35, 0, 0.25, 1);
  transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1), width 0.2s cubic-bezier(0.35, 0, 0.25, 1);
  transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1), width 0.2s cubic-bezier(0.35, 0, 0.25, 1), -webkit-transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
}

[part=start-scroll-button],
[part=end-scroll-button] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  z-index: 1;
  border: none;
  padding: 0;
  min-width: 3rem;
  width: 3rem;
  cursor: pointer;
  position: relative;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
}
[part=start-scroll-button]:hover, [part=start-scroll-button]:focus,
[part=end-scroll-button]:hover,
[part=end-scroll-button]:focus {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
[part=start-scroll-button] ::slotted(*),
[part=end-scroll-button] ::slotted(*) {
  -webkit-box-shadow: none;
          box-shadow: none;
}

igc-icon-button::part(base) {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}
igc-icon-button::part(base):hover, igc-icon-button::part(base):focus-within {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  background: transparent;
  -webkit-box-shadow: none;
          box-shadow: none;
}

igc-icon-button[disabled]::part(base) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([dir=rtl]) [part=start-scroll-button],
:host([dir=rtl]) [part=end-scroll-button] {
  -webkit-transform: scaleX(-1);
      -ms-transform: scaleX(-1);
          transform: scaleX(-1);
}`,qh=ph`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=headers] {
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

[part=headers-wrapper]::after {
  content: "";
  position: absolute;
  bottom: 0;
  inset-inline-start: 0;
  width: 100%;
  height: 0.0625rem;
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  z-index: 0;
}

igc-icon-button::part(base) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
igc-icon-button::part(base):hover, igc-icon-button::part(base):focus-within {
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

igc-icon-button[disabled]::part(base) {
  color: hsla(var(--ig-primary-500), 0.5);
}

[part=selected-indicator] {
  display: none;
}`,Wh=ph`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
igc-icon-button::part(base) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
igc-icon-button::part(base):hover, igc-icon-button::part(base):focus-within {
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

igc-icon-button[disabled]::part(base) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  background: inherit;
}`,Uh=ph`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=headers] {
  background: transparent;
}

[part=start-scroll-button],
[part=end-scroll-button] {
  background: transparent;
}
[part=start-scroll-button]:hover, [part=start-scroll-button]:focus,
[part=end-scroll-button]:hover,
[part=end-scroll-button]:focus {
  background: transparent;
}

[part=selected-indicator] {
  background: hsla(var(--ig-primary-400), var(--ig-primary-a));
}`;function Kh(e){return class extends e{addEventListener(e,t,i){super.addEventListener(e,t,i)}removeEventListener(e,t,i){super.removeEventListener(e,t,i)}emitEvent(e,t){return this.dispatchEvent(new CustomEvent(e,Object.assign({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t)))}}}function Yh(e,t){const{top:i,left:r,bottom:n,right:s}=e.getBoundingClientRect(),{top:a,left:o,bottom:l,right:h}=t.getBoundingClientRect();return{top:Math.round(i-a),left:Math.round(r-o),right:Math.round(s-h),bottom:Math.round(n-l)}}function Xh(){let e=0;return function(){return e++,e}}function Qh(e){return"ltr"===getComputedStyle(e).getPropertyValue("direction")}const Zh={attributes:!0,attributeFilter:["selected"],childList:!0,subtree:!0};function Jh(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return!i||i.includes(e.nodeName.toLowerCase())}const ec=ph`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  min-width: 5.625rem;
  max-width: 22.5rem;
  word-wrap: break-word;
  padding: 0.75rem 1rem;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  -webkit-transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  -o-transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host(:hover),
:host(:focus-within) {
  background: var(--hover-background, hsla(var(--ig-gray-200), var(--ig-gray-a)));
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host([selected]) {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host([selected]) ::slotted(igc-icon) {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([selected]:hover),
:host([selected]:focus-within) {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([disabled]) {
  pointer-events: none;
  cursor: initial;
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

[part=base] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  outline-style: none;
  gap: 0.5rem;
}

[part=content] {
  font-family: var(--ig-button-font-family, var(--ig-font-family));
  font-size: var(--ig-button-font-size);
  font-weight: var(--ig-button-font-weight);
  font-style: var(--ig-button-font-style);
  line-height: var(--ig-button-line-height);
  letter-spacing: var(--ig-button-letter-spacing);
  text-transform: var(--ig-button-text-transform);
  margin-top: var(--ig-button-margin-top);
  margin-bottom: var(--ig-button-margin-bottom);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  text-align: center;
  outline-style: none;
  gap: 0.5rem;
}
[part=content] ::slotted(*) {
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

::slotted(igc-icon) {
  --size: 1.5rem;
}`,tc=ph`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  background: transparent;
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
  border-start-start-radius: 0.25rem;
  border-start-end-radius: 0.25rem;
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host(:hover) {
  background: transparent;
  color: var(--hover-color, hsla(var(--ig-primary-700), var(--ig-primary-a)));
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-200), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-200), var(--ig-gray-a));
}

:host([selected]) {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  position: relative;
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([selected]) ::slotted(igc-icon) {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}
:host([selected])::after {
  content: "";
  position: absolute;
  bottom: 0;
  inset-inline-start: 0;
  width: 100%;
  height: 0.0625rem;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  z-index: 1;
}

:host([selected]:hover) {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  border-top-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-inline-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

:host(:focus-within),
:host([selected]:focus-within) {
  color: var(--hover-color, hsla(var(--ig-primary-700), var(--ig-primary-a)));
  background: transparent;
  -webkit-box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-primary-700), var(--ig-primary-a));
          box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-primary-700), var(--ig-primary-a));
  border-radius: 0.25rem;
  z-index: 1;
}
:host(:focus-within)::after,
:host([selected]:focus-within)::after {
  display: none;
}

:host([selected]:focus-within) {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

:host([disabled]) {
  color: hsla(var(--ig-primary-500), 0.5);
}`,ic=ph`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host ::slotted(igc-icon) {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host(:hover),
:host(:focus-within) {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

:host([disabled]) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) ::slotted(igc-icon) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,rc=ph`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  background: transparent;
}

:host(:hover),
:host(:focus-within) {
  background: transparent;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

:host([selected]) {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host([selected]) ::slotted(igc-icon) {
  color: hsla(var(--ig-primary-400), var(--ig-primary-a));
}

:host([selected]:hover),
:host([selected]:focus-within) {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}`;var nc,sc=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let ac=nc=class extends Th{constructor(){super(...arguments),this.panel="",this.selected=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.id=this.getAttribute("id")||`igc-tab-${nc.increment()}`}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return Bl.dy`
      <div
        part="base"
        role="tab"
        aria-disabled=${this.disabled?"true":"false"}
        aria-selected=${this.selected?"true":"false"}
        tabindex=${this.disabled||!this.selected?-1:0}
      >
        <slot name="prefix" part="prefix"></slot>
        <div part="content">
          <slot></slot>
        </div>
        <slot name="suffix" part="suffix"></slot>
      </div>
    `}};ac.tagName="igc-tab",ac.styles=ec,ac.increment=Xh(),sc([Oh('[part="base"]',!0)],ac.prototype,"tab",void 0),sc([Mh()],ac.prototype,"panel",void 0),sc([Mh({type:Boolean,reflect:!0})],ac.prototype,"selected",void 0),sc([Mh({type:Boolean,reflect:!0})],ac.prototype,"disabled",void 0),ac=nc=sc([jh({bootstrap:tc,fluent:ic,indigo:rc})],ac);const oc=ac,lc=ph`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
}

:host(:not([hidden])) {
  display: block;
}`;class hc extends Th{connectedCallback(){super.connectedCallback(),this.setAttribute("role","tabpanel"),this.tabIndex=this.hasAttribute("tabindex")?this.tabIndex:0,this.slot=this.slot.length>0?this.slot:"panel",this.id=this.getAttribute("id")||`igc-tab-panel-${hc.increment()}`}render(){return Bl.dy`<slot></slot>`}}hc.tagName="igc-tab-panel",hc.styles=lc,hc.increment=Xh();const cc=e=>null!=e?e:Bl.Ld;class dc{static instance(){return dc._instance||(dc._instance=new dc),dc._instance}constructor(){this.iconsRegistry=new Map,this.callbacks=new Set,this.iconsRegistry.set("internal",pc)}subscribe(e){this.callbacks.add(e)}unsubscribe(e){this.callbacks.delete(e)}registerIcon(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";const r=document.createElement("div");r.innerHTML=t;const n=r.querySelector("svg");if(!n)throw new Error("SVG element not found.");{n.setAttribute("fit",""),n.setAttribute("preserveAspectRatio","xMidYMid meet");const t=n.outerHTML;this.getOrCreateIconCollection(i)[e]=t,this.callbacks.forEach((t=>t(e,i)))}}getIcon(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";if(this.iconsRegistry.has(t))return this.iconsRegistry.get(t)[e]}getOrCreateIconCollection(e){let t;return this.iconsRegistry.has(e)?t=this.iconsRegistry.get(e):(t={},this.iconsRegistry.set(e,t)),t}}const uc=async function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";const r=await fetch(t);if(!r.ok)throw new Error(`Icon request failed. Status: ${r.status}.`);{const t=await r.text();dc.instance().registerIcon(e,t,i)}},gc=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";dc.instance().registerIcon(e,t,i)},pc={navigate_before:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"/></svg>',navigate_next:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/></svg>',keyboard_arrow_up:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>',keyboard_arrow_down:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>',keyboard_arrow_right:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>',chip_cancel:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>',chip_select:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',star_border:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>',case_sensitive:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M21.2 16.5c0-.2-.1-.5-.1-.7v-4.4c0-.4-.1-.8-.3-1.2-.2-.3-.5-.6-.8-.7-.3-.2-.7-.3-1.1-.3-.4-.1-.8-.1-1.2-.1-.5 0-.9 0-1.4.1-.4.1-.8.3-1.2.5-.3.2-.6.5-.8.9s-.3.9-.3 1.3h1.4c0-.5.2-1 .7-1.3.5-.2 1-.4 1.5-.3.2 0 .5 0 .7.1.2 0 .4.1.6.2.2.1.3.2.5.4.1.2.2.5.2.7s-.1.4-.2.6c-.2.2-.4.3-.6.3-.3.1-.6.1-.9.2-.4 0-.7.1-1.1.2-.4.1-.7.1-1.1.2-.3.1-.7.2-1 .4s-.5.5-.7.8c-.2.4-.3.8-.3 1.2s.1.8.2 1.1c.1.3.4.5.6.7.3.2.6.3.9.4.9.2 1.9.2 2.8-.2.5-.2 1-.6 1.4-1 0 .4.1.7.3 1 .2.2.6.3.9.3.4 0 .7-.1 1-.2v-1.1c-.1 0-.3.1-.4.1-.1.1-.2 0-.2-.2zm-1.5-1.7c0 .2-.1.4-.2.6-.1.2-.3.5-.5.6-.2.2-.5.4-.8.5-.4.1-.8.2-1.2.2-.2 0-.4 0-.6-.1-.2 0-.4-.1-.5-.2-.2-.1-.3-.2-.4-.4-.1-.2-.2-.4-.1-.6 0-.3.1-.6.2-.8.2-.2.4-.4.6-.5.3-.1.6-.2.9-.2s.7-.1 1-.1.6-.1.9-.1.5-.1.7-.3v1.4zm-9.6-.4l1.3 3.6h1.8L8.5 6H6.7L2 18h1.7L5 14.4h5.1zm-2.5-7l2.1 5.5H5.5l2.1-5.5z"></path></svg>',clear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',arrow_drop_up:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14l5-5 5 5z"/></svg>',arrow_drop_down:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>',arrow_downward:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>',arrow_upward:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>'},mc=e=>function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return{_$litDirective$:e,values:i}};class fc{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const vc=mc(class extends fc{constructor(e){var t;if(super(e),1!==e.type||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,t){let[i]=t;var r,n;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in i)i[e]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(e))&&this.it.add(e);return this.render(i)}const s=e.element.classList;this.it.forEach((e=>{e in i||(s.remove(e),this.it.delete(e))}));for(const e in i){const t=!!i[e];t===this.it.has(e)||(null===(n=this.nt)||void 0===n?void 0:n.has(e))||(t?(s.add(e),this.it.add(e)):(s.remove(e),this.it.delete(e)))}return Bl.Jb}});const yc=e=>{class t extends e{constructor(){super(...arguments),this.size="large"}}return function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);s>3&&a&&Object.defineProperty(t,i,a)}([Mh({reflect:!0})],t.prototype,"size",void 0),t};var xc=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let bc=class extends(yc(Kh(Th))){constructor(){super(...arguments),this.disabled=!1}set ariaLabel(e){const t=this._ariaLabel;this._ariaLabel=e,this.hasAttribute("aria-label")&&this.removeAttribute("aria-label"),this.requestUpdate("ariaLabel",t)}get ariaLabel(){return this._ariaLabel}focus(e){this.nativeElement.focus(e)}blur(){this.nativeElement.blur()}handleFocus(){this.emitEvent("igcFocus")}handleBlur(){this.emitEvent("igcBlur")}get classes(){return{}}renderButton(){return Bl.dy`
      <button
        part="base"
        aria-label=${cc(this.ariaLabel)}
        .disabled=${this.disabled}
        class=${vc(this.classes)}
        type=${cc(this.type)}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
      >
        ${this.renderContent()}
      </button>
    `}renderLinkButton(){return Bl.dy`
      <a
        part="base"
        role="button"
        href=${cc(this.href)}
        target=${cc(this.target)}
        download=${cc(this.download)}
        rel=${cc(this.rel)}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label=${cc(this.ariaLabel)}
        class=${vc(this.classes)}
        @focus=${!this.disabled&&this.handleFocus}
        @blur=${!this.disabled&&this.handleBlur}
      >
        ${this.renderContent()}
      </a>
    `}render(){return void 0!==this.href?this.renderLinkButton():this.renderButton()}};bc.shadowRootOptions={...Th.shadowRootOptions,delegatesFocus:!0},xc([Oh('[part="base"]',!0)],bc.prototype,"nativeElement",void 0),xc([(e,t)=>{},Mh()],bc.prototype,"type",void 0),xc([Mh()],bc.prototype,"href",void 0),xc([Mh()],bc.prototype,"download",void 0),xc([Mh()],bc.prototype,"target",void 0),xc([Mh()],bc.prototype,"rel",void 0),xc([Mh({type:Boolean,reflect:!0})],bc.prototype,"disabled",void 0),xc([Mh({attribute:"aria-label"})],bc.prototype,"ariaLabel",null),xc([(e,t)=>{}],bc.prototype,"focus",null),xc([(e,t)=>{}],bc.prototype,"blur",null),bc=xc([function(e){}],bc);const wc=ph`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --icon-size: 1.125rem;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
}

::slotted(:not(igc-ripple)) {
  --icon-size: 1.125rem;
  font-size: var(--icon-size) !important;
  vertical-align: middle;
  pointer-events: none;
}

[part=icon] {
  --size: 1.125rem;
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 50%), 50%);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  border: none;
  outline-style: none;
  background: transparent;
  padding: max(var(--is-large, 1) * max(6px, -1 * 6px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(5px, -1 * 5px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(4px, -1 * 4px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  -webkit-transition: background 0.15s ease-out, -webkit-box-shadow 0.2s ease-in;
  transition: background 0.15s ease-out, -webkit-box-shadow 0.2s ease-in;
  -o-transition: box-shadow 0.2s ease-in, background 0.15s ease-out;
  transition: box-shadow 0.2s ease-in, background 0.15s ease-out;
  transition: box-shadow 0.2s ease-in, background 0.15s ease-out, -webkit-box-shadow 0.2s ease-in;
  -webkit-transition-delay: 0.05s;
       -o-transition-delay: 0.05s;
          transition-delay: 0.05s;
  font-size: var(--icon-size);
  line-height: 1;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host([disabled]) {
  pointer-events: none;
}`,_c=ph`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(3rem, -1 * 3rem), var(--is-medium, 1) * max(2.375rem, -1 * 2.375rem), var(--is-small, 1) * max(1.9375rem, -1 * 1.9375rem));
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  width: var(--size);
  height: var(--size);
  -webkit-transition: color 0.15s ease-out, background 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  transition: color 0.15s ease-out, background 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  -o-transition: box-shadow 0.15s ease-out, color 0.15s ease-out, background 0.15s ease-out;
  transition: box-shadow 0.15s ease-out, color 0.15s ease-out, background 0.15s ease-out;
  transition: box-shadow 0.15s ease-out, color 0.15s ease-out, background 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  padding: max(var(--is-large, 1) * max(12px, -1 * 12px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(9px, -1 * 9px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(7.5px, -1 * 7.5px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
[part=base]:hover {
  color: hsla(var(--ig-primary-800), var(--ig-primary-a));
}
[part=base]:focus, [part=base]:active {
  color: hsla(var(--ig-primary-600), var(--ig-primary-a));
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  -webkit-box-shadow: none;
          box-shadow: none;
}

:host([variant=contained]) [part=base] {
  color: var(--ig-primary-600-contrast);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host([variant=contained]) [part=base]:hover {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
}
:host([variant=contained]) [part=base]:focus, :host([variant=contained]) [part=base]:active {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
}

:host([variant=outlined]) [part=base] {
  -webkit-box-shadow: 0 0 0 0.0625rem hsla(var(--ig-primary-500), var(--ig-primary-a));
          box-shadow: 0 0 0 0.0625rem hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host([variant=outlined]) [part=base]:hover {
  color: var(--ig-primary-600-contrast);
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
}
:host([variant=outlined]) [part=base]:focus, :host([variant=outlined]) [part=base]:active {
  color: var(--ig-primary-600-contrast);
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
}

:host([disabled]) [part=base] {
  color: hsla(var(--ig-primary-100), var(--ig-primary-a));
  background: transparent;
}

:host([disabled][variant=contained]) [part=base] {
  background: hsla(var(--ig-primary-100), var(--ig-primary-a));
  color: hsla(var(--ig-primary-300), var(--ig-primary-a));
}

:host([disabled][variant=outlined]) [part=base] {
  color: hsla(var(--ig-primary-100), var(--ig-primary-a));
  -webkit-box-shadow: 0 0 0 0.0625rem hsla(var(--ig-primary-100), var(--ig-primary-a));
          box-shadow: 0 0 0 0.0625rem hsla(var(--ig-primary-100), var(--ig-primary-a));
}`,Cc=ph`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(2.375rem, -1 * 2.375rem), var(--is-medium, 1) * max(2rem, -1 * 2rem), var(--is-small, 1) * max(1.5rem, -1 * 1.5rem));
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  background: transparent;
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-transition: color 0.15s ease-out, background 0.15s ease-out;
  -o-transition: color 0.15s ease-out, background 0.15s ease-out;
  transition: color 0.15s ease-out, background 0.15s ease-out;
  -webkit-box-shadow: none;
          box-shadow: none;
  width: var(--size);
  height: var(--size);
  padding: max(var(--is-large, 1) * max(7px, -1 * 7px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(6px, -1 * 6px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(4px, -1 * 4px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
[part=base]::after {
  position: absolute;
  content: "";
  pointer-events: none;
  top: 2px;
  left: 2px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
}
[part=base]:hover {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
[part=base]:active {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
[part=base]:focus-visible::after {
  -webkit-box-shadow: 0 0 0 0.0625rem hsla(var(--ig-gray-500), var(--ig-gray-a));
          box-shadow: 0 0 0 0.0625rem hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([variant=contained]) [part=base] {
  color: var(--text-color, var(--ig-primary-600-contrast));
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host([variant=contained]) [part=base]:hover {
  background: var(--hover-background, hsla(var(--ig-primary-600), var(--ig-primary-a)));
}
:host([variant=contained]) [part=base]:active {
  color: var(--ig-primary-800-contrast);
  background: hsla(var(--ig-primary-800), var(--ig-primary-a));
}
:host([variant=contained]) [part=base]:focus-visible::after {
  -webkit-box-shadow: 0 0 0 0.0625rem var(--ig-primary-600-contrast);
          box-shadow: 0 0 0 0.0625rem var(--ig-primary-600-contrast);
}

:host([variant=outlined]) [part=base] {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  -webkit-box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
          box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
}
:host([variant=outlined]) [part=base]:focus {
  background: transparent;
}
:host([variant=outlined]) [part=base]:hover, :host([variant=outlined]) [part=base]:focus:hover {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
:host([variant=outlined]) [part=base]:focus:active {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

:host([disabled]) [part=base] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host([disabled][variant=contained]) [part=base],
:host([disabled][variant=outlined]) [part=base] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}`,Sc=ph`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(2.25rem, -1 * 2.25rem), var(--is-medium, 1) * max(2rem, -1 * 2rem), var(--is-small, 1) * max(1.75rem, -1 * 1.75rem));
}

[part=base] {
  -webkit-transition: color 0.15s ease-in-out, background 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  -o-transition: color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  width: var(--size);
  height: var(--size);
  padding: max(var(--is-large, 1) * max(6px, -1 * 6px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(6px, -1 * 6px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(6px, -1 * 6px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
[part=base]:hover {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  background: transparent;
}
[part=base]:focus, [part=base]:active {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  background: transparent;
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([variant=contained]) [part=base] {
  color: var(--ig-primary-600-contrast);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host([variant=contained]) [part=base]:hover {
  background: hsla(var(--ig-primary-400), var(--ig-primary-a));
}
:host([variant=contained]) [part=base]:focus, :host([variant=contained]) [part=base]:active {
  background: hsla(var(--ig-primary-400), var(--ig-primary-a));
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-primary-200), var(--ig-primary-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-primary-200), var(--ig-primary-a));
}

:host([variant=outlined]) [part=base] {
  -webkit-box-shadow: none;
          box-shadow: none;
}
:host([variant=outlined]) [part=base]::after {
  position: absolute;
  content: "";
  -webkit-box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-gray-500), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-gray-500), var(--ig-gray-a));
  width: 100%;
  height: 100%;
  border-radius: inherit;
}
:host([variant=outlined]) [part=base]:hover {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
:host([variant=outlined]) [part=base]:focus, :host([variant=outlined]) [part=base]:active {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([disabled]) [part=base] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  background: transparent;
  -webkit-box-shadow: none;
          box-shadow: none;
}

:host([disabled][variant=contained]) [part=base] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,kc=ph`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(2.25rem, -1 * 2.25rem), var(--is-medium, 1) * max(1.875rem, -1 * 1.875rem), var(--is-small, 1) * max(1.5rem, -1 * 1.5rem));
}

[part=base] {
  width: var(--size);
  height: var(--size);
  padding: max(var(--is-large, 1) * max(6px, -1 * 6px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(6px, -1 * 6px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(6px, -1 * 6px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

:host([variant=contained]) [part=base] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

:host([variant=outlined]) [part=base] {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host(:focus-within) [part=base] {
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-400), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host([variant=contained]:focus-within) [part=base] {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([disabled]) [part=base] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([disabled][variant=contained]) [part=base] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host([disabled][variant=outlined]) [part=base] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-100), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-100), var(--ig-gray-a));
}`;class Ic extends fc{constructor(e){if(super(e),this.et=Bl.Ld,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Bl.Ld||null==e)return this.ft=void 0,this.et=e;if(e===Bl.Jb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Ic.directiveName="unsafeHTML",Ic.resultType=1,mc(Ic);class Dc extends Ic{}Dc.directiveName="unsafeSVG",Dc.resultType=2;const Tc=mc(Dc),Ec=ph`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
svg {
  height: var(--size);
  width: var(--size);
}

:host {
  --size: max(var(--is-large, 1) * max(1.5rem, -1 * 1.5rem), var(--is-medium, 1) * max(1.25rem, -1 * 1.25rem), var(--is-small, 1) * max(1rem, -1 * 1rem));
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: var(--size);
  height: var(--size);
  fill: currentcolor;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host([mirrored]) {
  -webkit-transform: scaleX(-1);
      -ms-transform: scaleX(-1);
          transform: scaleX(-1);
}`;var Ac=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};class Mc extends(yc(Th)){constructor(){super(),this.svg="",this.name="",this.collection="default",this.mirrored=!1,this.iconLoaded=(e,t)=>{this.name===e&&this.collection===t&&this.getIcon()},this.size="medium"}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","img"),dc.instance().subscribe(this.iconLoaded)}disconnectedCallback(){dc.instance().unsubscribe(this.iconLoaded),super.disconnectedCallback()}iconChanged(e,t){e!==t&&this.getIcon()}getIcon(){const e=this.name&&this.collection?dc.instance().getIcon(this.name,this.collection):"";this.svg=null!=e?e:""}render(){return Bl.dy` ${Tc(this.svg)} `}async registerIcon(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";await uc(e,t,i)}registerIconFromText(e,t){gc(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default")}}Mc.tagName="igc-icon",Mc.styles=Ec,Ac([Ph()],Mc.prototype,"svg",void 0),Ac([Mh(),(e,t)=>{}],Mc.prototype,"name",void 0),Ac([Mh()],Mc.prototype,"collection",void 0),Ac([Mh({type:Boolean,reflect:!0})],Mc.prototype,"mirrored",void 0),Ac([Nh("name"),Nh("collection")],Mc.prototype,"iconChanged",null),Ac([(e,t)=>{}],Mc.prototype,"registerIcon",null),Ac([(e,t)=>{}],Mc.prototype,"registerIconFromText",null);var Pc=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};lh(Mc);let zc=class extends bc{constructor(){super(...arguments),this.mirrored=!1,this.variant="contained"}renderContent(){return Bl.dy`
      ${this.name||this.mirrored?Bl.dy`
            <igc-icon
              part="icon"
              name=${cc(this.name)}
              collection=${cc(this.collection)}
              .mirrored=${this.mirrored}
              size="small"
              aria-hidden="true"
            ></igc-icon>
            <slot></slot>
          `:Bl.dy`<slot></slot>`}
    `}async registerIcon(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";await uc(e,t,i)}registerIconFromText(e,t){gc(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default")}};zc.tagName="igc-icon-button",zc.styles=wc,Pc([(e,t)=>{},Mh()],zc.prototype,"name",void 0),Pc([Mh()],zc.prototype,"collection",void 0),Pc([Mh({type:Boolean})],zc.prototype,"mirrored",void 0),Pc([Mh({reflect:!0})],zc.prototype,"variant",void 0),Pc([(e,t)=>{}],zc.prototype,"registerIcon",null),Pc([(e,t)=>{}],zc.prototype,"registerIconFromText",null),zc=Pc([jh({bootstrap:_c,material:kc,fluent:Cc,indigo:Sc})],zc);var Oc,Rc=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};lh(oc,hc,zc);let Vc=Oc=class extends(Kh(Th)){constructor(){super(...arguments),this.showScrollButtons=!1,this.disableStartScrollButton=!0,this.disableEndScrollButton=!1,this.alignment="start",this.activation="auto",this.handleKeyDown=e=>{var t;const{key:i}=e,r=this.enabledTabs,n=Qh(this);let s=r.indexOf(null===(t=document.activeElement)||void 0===t?void 0:t.closest("igc-tab"));switch(i){case"ArrowLeft":s=n?(r.length+s-1)%r.length:(s+1)%r.length;break;case"ArrowRight":s=n?(s+1)%r.length:(r.length+s-1)%r.length;break;case"Home":s=0;break;case"End":s=r.length-1;break;case"Enter":case" ":this.setSelectedTab(r[s]);break;default:return}r[s].focus({preventScroll:!0}),"auto"===this.activation?(this.setSelectedTab(r[s]),this.emitEvent("igcChange",{detail:this.activeTab})):r[s].scrollIntoView({block:"nearest"}),e.preventDefault()}}get enabledTabs(){return this.tabs.filter((e=>!e.disabled))}get selected(){var e,t;return null!==(t=null===(e=this.activeTab)||void 0===e?void 0:e.panel)&&void 0!==t?t:""}alignIndicator(){const e={visibility:this.activeTab?"visible":"hidden",transitionDuration:"0.3s"};this.activeTab&&Object.assign(e,{width:`${this.activeTab.offsetWidth}px`,transform:`translate(${Qh(this)?Yh(this.activeTab,this.wrapper).left:Yh(this.activeTab,this.wrapper).right}px)`}),Object.assign(this.selectedIndicator.style,e)}async firstUpdated(){var e;this.showScrollButtons=this.container.scrollWidth>this.container.clientWidth,await this.updateComplete,this.syncAttributes(),this.setupObserver(),this.setSelectedTab(null!==(e=this.tabs.filter((e=>e.selected)).at(-1))&&void 0!==e?e:this.enabledTabs.at(0)),this.updateSelectedTab()}disconnectedCallback(){var e,t;null===(e=this.resizeObserver)||void 0===e||e.disconnect(),null===(t=this.mutationObserver)||void 0===t||t.disconnect(),super.disconnectedCallback()}updateButtonsOnResize(){this.showScrollButtons=!1,this.performUpdate(),this.showScrollButtons=this.container.scrollWidth>this.container.clientWidth,this.updateScrollButtons()}updateScrollButtons(){const{scrollLeft:e,offsetWidth:t}=this.container,{scrollWidth:i}=this.wrapper;this.disableEndScrollButton=i<=Math.abs(e)+t,this.disableStartScrollButton=0===e}setupObserver(){this.resizeObserver=new ResizeObserver((()=>{this.updateButtonsOnResize(),this.alignIndicator()})),[this.container,this.wrapper,...this.tabs].forEach((e=>this.resizeObserver.observe(e))),this.mutationObserver=new MutationObserver((async(e,t)=>{var i;t.disconnect();const r=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return e.filter((e=>{let{type:t,target:r}=e;return"attributes"===t&&Jh(r,...i)})).map((e=>{let{target:t}=e;return t}))}(e,"igc-tab"),n=function(e,t){for(var i=arguments.length,r=new Array(i>2?i-2:0),n=2;n<i;n++)r[n-2]=arguments[n];const s={addedNodes:[],removedNodes:[]};return e.filter((e=>{let{type:i,target:r}=e;return"childList"===i&&(!t||r.isSameNode(t))})).reduce(((e,t)=>(e.addedNodes=e.addedNodes.concat(Array.from(t.addedNodes).filter((e=>Jh(e,...r))).map((e=>e))),e.removedNodes=e.removedNodes.concat(Array.from(t.removedNodes).filter((e=>Jh(e,...r))).map((e=>e))),e)),s),s.addedNodes.length||s.removedNodes.length?s:null}(e,this,"igc-tab");r.length>0&&(this.activeTab=r.find((e=>e.selected))),n&&(n.addedNodes.forEach((e=>{this.resizeObserver.observe(e),e.selected&&(this.activeTab=e)})),n.removedNodes.forEach((e=>{this.resizeObserver.unobserve(e),(e.selected||this.activeTab===e)&&(this.activeTab=void 0)})),this.syncAttributes()),this.updateSelectedTab(),null===(i=this.activeTab)||void 0===i||i.scrollIntoView({block:"nearest"}),this.alignIndicator(),await this.updateComplete,t.observe(this,Zh)})),this.mutationObserver.observe(this,Zh)}updateSelectedTab(){this.tabs.forEach((e=>e.selected=e===this.activeTab)),this.panels.forEach((e=>{var t;e.hidden=e.id!==(null===(t=this.activeTab)||void 0===t?void 0:t.panel)}))}syncAttributes(){const e=this.id?`${this.id}-`:"";this.tabs.forEach(((t,i)=>{var r,n,s;t.panel||(t.panel=null!==(n=null===(r=this.panels.at(i))||void 0===r?void 0:r.id)&&void 0!==n?n:`${e}tab-${Oc.increment()}`),null===(s=this.panels.find((e=>e.id===t.panel)))||void 0===s||s.setAttribute("aria-labelledby",t.id)}))}setSelectedTab(e){e&&e!==this.activeTab&&(this.activeTab&&(this.activeTab.selected=!1),this.activeTab=e,this.activeTab.selected=!0)}scrollByTabOffset(e){const{scrollLeft:t,offsetWidth:i}=this.container,r=Qh(this),n="end"===e,s=Math.abs(n?i+t:t);let a=this.tabs.map((e=>({start:r?Yh(e,this.wrapper).left:Math.abs(Yh(e,this.wrapper).right),width:e.offsetWidth}))).filter((e=>n?e.start+e.width>s:e.start<s)).at(n?0:-1).width;a*=n?1:-1,this.container.scrollBy({left:r?a:-a})}handleClick(e){const t=e.target.closest("igc-tab");t&&this.contains(t)&&!t.disabled&&(t.focus(),this.setSelectedTab(t),this.emitEvent("igcChange",{detail:this.activeTab}))}handleScroll(){this.updateScrollButtons()}select(e){this.setSelectedTab(this.tabs.find((t=>t.panel===e)))}renderScrollButton(e){const t="start"===e;return this.showScrollButtons?Bl.dy`<igc-icon-button
          tabindex="-1"
          aria-hidden="true"
          size="large"
          variant="flat"
          collection="internal"
          part="${e}-scroll-button"
          name="navigate_${t?"before":"next"}"
          .disabled=${t?this.disableStartScrollButton:this.disableEndScrollButton}
          @click=${()=>this.scrollByTabOffset(e)}
        ></igc-icon-button>`:Bl.Ld}render(){return Bl.dy`
      <div part="headers">
        ${this.renderScrollButton("start")}
        <div part="headers-content" @scroll=${this.handleScroll}>
          <div part="headers-wrapper">
            <div
              part="headers-scroll"
              role="tablist"
              @click=${this.handleClick}
              @keydown=${this.handleKeyDown}
            >
              <slot></slot>
            </div>
            <div part="selected-indicator"></div>
          </div>
        </div>
        ${this.renderScrollButton("end")}
      </div>
      <div part="content">
        <slot name="panel"></slot>
      </div>
    `}};var Fc;Vc.tagName="igc-tabs",Vc.styles=Gh,Vc.increment=Xh(),Rc([Fh({selector:"igc-tab"})],Vc.prototype,"tabs",void 0),Rc([Fh({slot:"panel"})],Vc.prototype,"panels",void 0),Rc([Oh('[part="headers-wrapper"]',!0)],Vc.prototype,"wrapper",void 0),Rc([Oh('[part="headers-content"]',!0)],Vc.prototype,"container",void 0),Rc([Oh('[part="selected-indicator"]',!0)],Vc.prototype,"selectedIndicator",void 0),Rc([Ph()],Vc.prototype,"showScrollButtons",void 0),Rc([Ph()],Vc.prototype,"disableStartScrollButton",void 0),Rc([Ph()],Vc.prototype,"disableEndScrollButton",void 0),Rc([Ph()],Vc.prototype,"activeTab",void 0),Rc([Mh({reflect:!0})],Vc.prototype,"alignment",void 0),Rc([Mh()],Vc.prototype,"activation",void 0),Rc([Nh("alignment",{waitUntilFirstUpdate:!0})],Vc.prototype,"alignIndicator",null),Rc([(Fc={passive:!0},zh({finisher:(e,t)=>{Object.assign(e.prototype[t],Fc)}}))],Vc.prototype,"handleScroll",null),Vc=Oc=Rc([jh({bootstrap:qh,fluent:Wh,indigo:Uh}),e=>e],Vc);const Nc=Vc,Lc=ph`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(5.5rem, -1 * 5.5rem), var(--is-medium, 1) * max(4rem, -1 * 4rem), var(--is-small, 1) * max(2.5rem, -1 * 2.5rem));
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
}

[part=base] {
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
  border-radius: 0;
  outline-style: none;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  overflow: hidden;
  font-family: var(--ig-font-family);
  width: var(--size);
  height: var(--size);
}
[part=base] [part=initials] {
  font-size: calc(var(--size) / 2);
  line-height: calc(var(--size) / 2);
}

img {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: inherit;
  -o-object-fit: cover;
     object-fit: cover;
}

[part=initials] {
  text-transform: uppercase;
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([shape=rounded]) [part=base] {
  border-radius: 0.5rem;
}

:host([shape=circle]) [part=base] {
  border-radius: calc(var(--size) / 2);
}`,$c=ph`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host([shape=square]) [part=base],
:host([shape=rounded]) [part=base] {
  border-radius: 0.25rem;
}`;var Bc=function(e,t,i,r){var n,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let Hc=class extends(yc(Th)){get classes(){const{size:e,shape:t}=this;return{circle:"circle"===t,rounded:"rounded"===t,square:"square"===t,small:"small"===e,medium:"medium"===e,large:"large"===e}}constructor(){super(),this.hasError=!1,this.shape="square",this.size="small"}handleErrorState(){this.hasError=!1}render(){return Bl.dy`
      <div
        part="base"
        role="img"
        aria-label="avatar"
        aria-roledescription=${this.size+" "+this.shape}
        class=${vc(this.classes)}
      >
        ${this.initials?Bl.dy`<span part="initials">${this.initials}</span>`:Bl.dy` <slot></slot> `}
        ${this.src&&!this.hasError?Bl.dy`
              <img
                part="image"
                alt=${cc(this.alt)}
                src=${cc(this.src)}
                @error="${()=>this.hasError=!0}"
              />
            `:""}
      </div>
    `}};Hc.tagName="igc-avatar",Hc.styles=Lc,Bc([Mh()],Hc.prototype,"src",void 0),Bc([Ph()],Hc.prototype,"hasError",void 0),Bc([Mh()],Hc.prototype,"alt",void 0),Bc([Mh()],Hc.prototype,"initials",void 0),Bc([Mh({reflect:!0})],Hc.prototype,"shape",void 0),Bc([Nh("src")],Hc.prototype,"handleErrorState",null),Hc=Bc([jh({bootstrap:$c})],Hc);const jc=Hc;i(9019),i(6794),i(6739),lh(Nc,jc),class{static register(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];for(let e of t)e.register&&e.register();r.force()}}.register(class{static register(){cs.register(),oh.register()}}),new class{constructor(){t(this,"grid",void 0),t(this,"column1",void 0),t(this,"_bind",void 0),t(this,"detailTemplate",(e=>{const t=e.$implicit;return Bl.dy`
            <igc-tabs>
                <igc-tab>
                    Details
                </igc-tab>
                <igc-tab>
                    Deals
                </igc-tab>
                <igc-tab-panel>
                    <h3>${t.CustomerName}</h3>
                    <ul>
                        <li>CustomerID: ${t.CustomerID}</li>
                        <li>CustomerAddress: ${t.CustomerAddress}</li>
                    </ul>
                </igc-tab-panel>
                <igc-tab-panel>
                    <igc-pie-chart
                        class="details-chart"
                        .dataSource="${this.getPieData(t)}"
                        .formatLabel="${this.formatPieLabel}"
                        outlines="transparent"
                        labels-position="insideEnd"
                        leader-line-visibility="collapsed"
                        label-member-path="Label"
                        value-member-path="Value"
                    >
                    </igc-pie-chart>
                </igc-tab-panel>
            </igc-tabs>
        `})),t(this,"formatPieLabel",(e=>e.item.Value+" "+e.item.Label)),t(this,"_invoicesData",null),t(this,"webGridGroupByRowTemplate",(e=>{const t=e.implicit,i=t.records,r=new Date("1/1/2022"),n=new Date("12/31/2022");var s=i.filter((e=>new Date(e.orderDate)>=r&&new Date(e.orderDate)<=n)).length;return Bl.dy`<div>
    <span style="color:#09f;">${t.expression.fieldName} :</span>
    <span>${t.value}</span>
    <igc-badge>${t.records.length}</igc-badge>
    <span style="color:#09f;"> Ordered in 2022:</span><span>${s}</span>
    </div>`})),t(this,"webGridBooleanCellTemplate",(e=>e.cell.value?Bl.dy`<img src="https://www.infragistics.com/angular-demos-lob/assets/images/grid/active.png" title="Continued" alt="Continued" />`:Bl.dy`<img src="https://www.infragistics.com/angular-demos-lob/assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />`));var e=this.grid=document.getElementById("grid"),i=this.column1=document.getElementById("column1");this._bind=()=>{e.data=this.invoicesData,e.groupRowTemplate=this.webGridGroupByRowTemplate,i.bodyTemplate=this.webGridBooleanCellTemplate,e.detailTemplate=this.detailTemplate},this._bind()}getPieData(e){return[{Label:"UnitPrice",Value:e.UnitPrice},{Label:"ExtendedPrice",Value:e.ExtendedPrice}]}get invoicesData(){return null==this._invoicesData&&(this._invoicesData=new s),this._invoicesData}}})()})();
//# sourceMappingURL=ab83463bd1a43fcc1b6a.bundle.js.map