import{_ as S,f as x,g as le,v as ce,u as t,o as c,c as r,e as i,F as h,h as v,i as W,n as $,t as _,j as be,k as he,b as d,p as ge,d as me,a as N,w as ve,l as re,m as fe,q as we}from"./index-27f1c47a.js";import{u as C}from"./index-c773e233.js";const xe={class:"position-relative"},$e=["onClick"],Ce={__name:"CustomNav",props:["navItems"],emits:["toScroll"],setup(s,{expose:u,emit:f}){const g=s;let n=x(!1),m=x(!0);function e(o){o?n.value=!1:n.value=!0}function p(o){f("toScroll",o)}return u({navItems:g.navItems,navItemsArea:n,navItemsToggle:m,toCloseNavItemsArea:e,toScroll:p}),(o,l)=>le((c(),r("div",xe,[le(i("div",null,[(c(!0),r(h,null,v(s.navItems,(a,w)=>(c(),r("button",{key:w,class:$([a.position,"custom-nav btn"]),onClick:W(b=>p(a.name),["prevent"])},_(a.label),11,$e))),128))],512),[[ce,t(m)]]),i("button",{class:"nav-main-circle",onClick:l[0]||(l[0]=W(a=>be(m)?m.value=!t(m):m=!t(m),["prevent"]))})],512)),[[ce,t(n)]])}},ye=S(Ce,[["__scopeId","data-v-09d7b22a"]]),ke="/powerup-website/assets/logo-font-0c508326.svg";const Ie={},Se={class:"d-flex align-items-center justify-content-center min-vh-100"},Te=he('<div data-v-21bd79db><div class="d-flex justify-content-center" data-v-21bd79db><img src="'+ke+'" class="img-fluid" alt="Logo Font" data-v-21bd79db></div><div class="animate__animated animate__fadeInUp" data-v-21bd79db>POWERUP</div><hr data-v-21bd79db><p class="text-white text-center fs-5 animate__animated animate__fadeIn" data-v-21bd79db> 我們專注於面向使用者與管理者的電動車充電管理服務提供 </p><p class="text-white text-center fs-5 animate__animated animate__fadeIn" data-v-21bd79db> 我們簡單易用的應用程式，讓您能輕鬆管理所有電動車輛的充電工作，且根據各個充電樁選擇最適配的充電接口<br data-v-21bd79db></p><p class="text-white text-center fs-5 animate__animated animate__fadeIn" data-v-21bd79db> 我們也為充電設備生產商與停車場管理方提供精確、即時的後台管理系統，讓您能輕鬆掌握所有充電樁的狀態與使用數據 </p></div>',1),Ee=[Te];function Ae(s,u){return c(),r("div",Se,Ee)}const Ne=S(Ie,[["render",Ae],["__scopeId","data-v-21bd79db"]]),j="/powerup-website/assets/01-cff4d01f.png",L="/powerup-website/assets/02-ccdf7e16.png",O="/powerup-website/assets/03-cffc66f5.png",V="/powerup-website/assets/04-129f2ce9.png",P="/powerup-website/assets/05-95a8dfd5.png",B="/powerup-website/assets/01-5e96da11.png",R="/powerup-website/assets/02-28612577.png",U="/powerup-website/assets/03-e293397c.png",D="/powerup-website/assets/04-3d6311b8.png",M="/powerup-website/assets/05-839efeff.png",F="/powerup-website/assets/01-a09929df.png",q="/powerup-website/assets/02-b0e2b3cd.png",Z="/powerup-website/assets/03-4bd3148a.png",H="/powerup-website/assets/04-29c711c2.png",J="/powerup-website/assets/05-84e2891b.png",z="/powerup-website/assets/location-68a8d2e8.png",Q="/powerup-website/assets/member-f18cda4e.png",G="/powerup-website/assets/notification-099bc2dd.png",K="/powerup-website/assets/overview-0071257e.png",X="/powerup-website/assets/statistic-5dc0434f.png",Y="/powerup-website/assets/system-8b0fed81.png",ee="/powerup-website/assets/logo-font-0c508326.svg",te="/powerup-website/assets/logo-80c496bb.svg",ie="/powerup-website/assets/ccs1-8159c062.png",se="/powerup-website/assets/ccs2-665fcada.png",ne="/powerup-website/assets/chademo-a1ec8a90.png",ae="/powerup-website/assets/j1772-28d0b509.png",oe="/powerup-website/assets/mennekes-12eba06c.png",pe="/powerup-website/assets/tpc-fcb34211.png";const We={class:"segment-container-shape p-1"},je=["onClick"],Le={__name:"Segment",props:["options"],emits:["toChangeLabel"],setup(s,{expose:u,emit:f}){const g=s,m=C().screenWidth;let e=x(g.options[0].label);function p(o,l){e.value=o,f("toChangeLabel",l)}return u({options:g.options,toChangeLabel:p,activeLabel:e}),(o,l)=>(c(),r("div",null,[i("div",We,[(c(!0),r(h,null,v(s.options,(a,w)=>(c(),r("button",{key:w,class:$([[{"active-segment":a.label===t(e)},{"w-100":t(m)<768}],"segment-shape btn btn-dark-gray px-md-5 text-center"]),onClick:W(b=>p(a.label,a.path),["prevent"])},_(a.label),11,je))),128))])]))}},A=S(Le,[["__scopeId","data-v-cd8f5651"]]),T={title:"充電規格",subTitle:"我們將提供各式接口的辨識與設定，讓您能在不同的充電樁間順暢地完成充電",segmentOptions:[{label:"充電規格",path:"spec"}],content:[{image:"plug/j1772.png",label:"J1772",description:"台灣通用性最高的充電介面，大部分品牌電動車／插電式油電車都採用此種慢充規格。",stickers:[["AC","6","69.8"]]},{image:"plug/mennekes.png",label:"Mennekes",description:"為 2017 年至 2021 年 TESLA 特規使用。",stickers:[["AC","20","25.5"]]},{image:"plug/ccs1.png",label:"CCS1",description:"在 J1772 的基礎上增加直流電正負極端子，為主流車款的快充，包含 BMW、PORSCHE、MERCEDES BENZ 等品牌使用。。",stickers:[["DC","400","25.9"]]},{image:"plug/ccs2.png",label:"CCS2",description:"在 Mennekes 的基礎上增加直流電正負極端子，為 2021 年以後 TESLA 使用。",stickers:[["DC","350","32.1"]]},{image:"plug/tpc.png",label:"TPC",description:"為 2017 年以前 TESLA 特規使用，同時支援 AC 慢充與 DC 快充，台灣以 DC 快充為主。",stickers:[["DC","250","36.7"]]},{image:"plug/chademo.png",label:"CHAdeMo",description:"為早期部份日規車所使用，因其整合度不佳，已逐步被淘汰。",stickers:[["DC","50","5.3"]]}]},y={title:"應用程式",subTitle:"面向使用者的電動車充電管理應用程式",segmentOptions:[{label:"地圖",path:"map"},{label:"充電",path:"charge"},{label:"我的",path:"mine"}],segments:{map:{description:["在地圖介面中，您可以很直觀的看到您附近所有有提供充電服務的停車場，並可快速的點開定位地點，查看停車場資訊了解目前該停車場現有的充電樁規格與剩餘數量。","使用者可以直接點擊導航，啟用手機所安裝的導航程式完成路線規劃。","地圖提供了關鍵字搜尋，也提供篩選工具，使用者可以透過選擇距離進行排序，也可透過多選接口類型過濾，再依據過濾結果依距離排序。","蒐藏工具讓使用者儲存常用的停車場。"],image:[{path:"application/map/01.png",alt:"01"},{path:"application/map/02.png",alt:"02"},{path:"application/map/03.png",alt:"03"},{path:"application/map/04.png",alt:"04"},{path:"application/map/05.png",alt:"05"}]},charge:{description:["POWERUP 利用 NFC 感應充電樁資訊。我們也為無 NFC 的充電樁設置 QR Code 掃描連接的方式。","由於充電樁可能含有複數的接口，我們提供使用者選擇接口，使用者可以查看接口相關的充電規格，在選擇後使用者插入接口，完成電動車目前電量資訊的整合。","在獲取電動車的電量資訊後進行充電設置，使用者可依據充電量百分比或需要的充電時間進行設置，並選擇電流大小。","充電中的資訊包含目前電動車的電量、預估可行駛的距離、充電設置的參數、預估剩餘／已充電時間、充電效率與累計充電費用等資訊。","在充電完成後，僅需點擊結束並付款，即可使用預先設定的支付方式完成付款。"],image:[{path:"application/charge/01.png",alt:"01"},{path:"application/charge/02.png",alt:"02"},{path:"application/charge/03.png",alt:"03"},{path:"application/charge/04.png",alt:"04"},{path:"application/charge/05.png",alt:"05"}]},mine:{description:["我的管理頁面中讓使用者可以編輯基本資訊、車輛資訊，並查看充電紀錄。","充電紀錄紀錄過去 30 天的充電總計，包含總時長、總費用與充電表現，使用者同時可查看每一次的充電紀錄了解更詳細的資訊。"],image:[{path:"application/mine/01.png",alt:"01"},{path:"application/mine/02.png",alt:"02"},{path:"application/mine/03.png",alt:"03"},{path:"application/mine/04.png",alt:"04"},{path:"application/mine/05.png",alt:"05"}]}}},k={title:"後台管理",subTitle:"面向管理者的充電樁管理平台",segmentOptions:[{label:"總覽",path:"overview"},{label:"系統管理",path:"system"},{label:"會員資訊",path:"member"},{label:"場域管理",path:"location"},{label:"通知管理",path:"notification"},{label:"統計報表",path:"statistic"}],segments:{overview:{description:["總覽是後台管理的起始點，以儀表盤的方式呈現重要資訊，管理者也可以自行編排與刪減想要呈現的即時統計資訊。"],image:[{path:"dashboard/overview.png",alt:"總覽"}]},system:{description:["系統管理提供管理者可操作系統者的帳號基本資訊與角色設置，依據角色開放不同的權限。帳號可關閉、刪除與修改。未來將開放角色權限的編輯。"],image:[{path:"dashboard/system.png",alt:"系統管理"}]},member:{description:["會員資訊提供管理者可查看註冊會員的基本資訊，包含帳號、手機號碼、電子郵件帳號、綁定的電動車相關資訊等。未來將開放面向企業客戶的會員管理。"],image:[{path:"dashboard/member.png",alt:"會員資訊"}]},location:{description:["場域管理提供管理者可查看所有充電樁與控制器的狀態與參數設定，列表依據停車場呈現。控制器可關閉、刪除與修改。未來將開放停車場的管理。"],image:[{path:"dashboard/location.png",alt:"場域管理"}]},notification:{description:["通知管理提供管理者透過應用程式傳送公告，訊息可關閉、刪除與修改。未來將開放廣告資訊的管理與投放。"],image:[{path:"dashboard/notification.png",alt:"通知管理"}]},statistic:{description:["統計報表目前開放收入與充電的統計資料，管理者可匯出試算表，或著加入總覽中。未來將開放更多種類報表的生成。"],image:[{path:"dashboard/statistic.png",alt:"統計報表"}]}}},I={title:"商務合作",subTitle:"我們尋求更多的合作機會，共創雙贏",segmentOptions:[{label:"設備生產商",path:"manufacturer"},{label:"停車場管理方",path:"owner"},{label:"電動車經銷商",path:"dealer"}],segments:{manufacturer:{description:["我們渴望與更多的控制器、充電樁生產商合作，拓展我們的硬體面服務，只要您的設備符合台灣主流的充電規格，我們樂於將您與停車場管理方搭建合作關係。","請填寫下列表單，我們將儘速與您聯繫。"],image:[]},owner:{description:["如果您的停車場尚未提供充電服務，或著您考慮新的合作機會，我們將是您最好的選擇。Power Up 擁有相當多經驗豐富的充電樁與控制器生產商，我們樂於將您與設備生產商搭建合作關係。","請填寫下列表單，我們將儘速與您聯繫。"],image:[]},dealer:{description:["如果您是電動車經銷商，您可考慮與我們建立長期合作關係，藉由具競爭力的充電折扣與客戶定點服務，提升購車優惠力度。同時我們也將與您分享充電相關數據，讓您可以在銷售過程中導入更精準的數字。","請填寫下列表單，我們將儘速與您聯繫。"],image:[]}}};const de=s=>(ge("data-v-940fcbf1"),s=s(),me(),s),Oe={class:"min-vh-100 mb-5 border-bottom border-white"},Ve={class:"text-main mb-3"},Pe={class:"text-white mb-5"},Be={class:"d-flex overflow-scroll"},Re={class:"w-100 d-flex justify-content-center"},Ue=["alt","src"],De={class:"mb-3 text-white text-center"},Me={class:"d-flex align-items-center mb-3"},Fe={class:"sticker d-flex align-items-center justify-content-center me-3"},qe={class:"d-flex align-items-center mb-3"},Ze={class:"sticker d-flex align-items-center justify-content-center me-3"},He=de(()=>i("span",null,"kWh",-1)),Je={class:"d-flex align-items-center mb-3"},ze={class:"sticker d-flex align-items-center justify-content-center me-3"},Qe=de(()=>i("span",null,"% 市占率",-1)),Ge={__name:"Spec",setup(s,{expose:u}){const g=C().screenWidth;function n(m){return new URL(Object.assign({"../public/img/application/charge/01.png":j,"../public/img/application/charge/02.png":L,"../public/img/application/charge/03.png":O,"../public/img/application/charge/04.png":V,"../public/img/application/charge/05.png":P,"../public/img/application/map/01.png":B,"../public/img/application/map/02.png":R,"../public/img/application/map/03.png":U,"../public/img/application/map/04.png":D,"../public/img/application/map/05.png":M,"../public/img/application/mine/01.png":F,"../public/img/application/mine/02.png":q,"../public/img/application/mine/03.png":Z,"../public/img/application/mine/04.png":H,"../public/img/application/mine/05.png":J,"../public/img/dashboard/location.png":z,"../public/img/dashboard/member.png":Q,"../public/img/dashboard/notification.png":G,"../public/img/dashboard/overview.png":K,"../public/img/dashboard/statistic.png":X,"../public/img/dashboard/system.png":Y,"../public/img/logo-font.svg":ee,"../public/img/logo.svg":te,"../public/img/plug/ccs1.png":ie,"../public/img/plug/ccs2.png":se,"../public/img/plug/chademo.png":ne,"../public/img/plug/j1772.png":ae,"../public/img/plug/mennekes.png":oe,"../public/img/plug/tpc.png":pe})[`../public/img/${m}`],self.location).href}return u({toReturnSrcPath:n}),(m,e)=>(c(),r("div",Oe,[i("h1",Ve,_(t(T).title),1),i("h5",Pe,_(t(T).subTitle),1),d(A,{options:t(T).segmentOptions,class:"mb-5"},null,8,["options"]),i("div",Be,[(c(!0),r(h,null,v(t(T).content,(p,o)=>(c(),r("div",{key:o,class:"col-12 col-md-2 text-white"},[i("div",Re,[i("img",{alt:p.label,src:n(p.image),class:"w-50 mb-3"},null,8,Ue)]),i("div",null,[i("div",De,_(p.label),1),i("p",{class:$(["px-md-3",{"height-rem-10":t(g)>=768}])},_(p.description),3),(c(!0),r(h,null,v(p.stickers,(l,a)=>(c(),r("div",{key:a},[i("div",Me,[i("div",Fe,_(l[0]),1)]),i("div",qe,[i("div",Ze,_(l[1]),1),He]),i("div",Je,[i("div",ze,_(l[2]),1),Qe])]))),128))])]))),128))])]))}},Ke=S(Ge,[["__scopeId","data-v-940fcbf1"]]),Xe={class:"min-vh-100 mb-5 border-bottom border-white"},Ye={class:"text-main mb-3"},et={class:"text-white mb-5"},tt={class:"mb-5 text-white"},it=["alt","src"],st={__name:"Application",setup(s,{expose:u}){const g=C().screenWidth;let n=x(y.segments.map);function m(p){n.value=y.segments[p]}function e(p){return new URL(Object.assign({"../public/img/application/charge/01.png":j,"../public/img/application/charge/02.png":L,"../public/img/application/charge/03.png":O,"../public/img/application/charge/04.png":V,"../public/img/application/charge/05.png":P,"../public/img/application/map/01.png":B,"../public/img/application/map/02.png":R,"../public/img/application/map/03.png":U,"../public/img/application/map/04.png":D,"../public/img/application/map/05.png":M,"../public/img/application/mine/01.png":F,"../public/img/application/mine/02.png":q,"../public/img/application/mine/03.png":Z,"../public/img/application/mine/04.png":H,"../public/img/application/mine/05.png":J,"../public/img/dashboard/location.png":z,"../public/img/dashboard/member.png":Q,"../public/img/dashboard/notification.png":G,"../public/img/dashboard/overview.png":K,"../public/img/dashboard/statistic.png":X,"../public/img/dashboard/system.png":Y,"../public/img/logo-font.svg":ee,"../public/img/logo.svg":te,"../public/img/plug/ccs1.png":ie,"../public/img/plug/ccs2.png":se,"../public/img/plug/chademo.png":ne,"../public/img/plug/j1772.png":ae,"../public/img/plug/mennekes.png":oe,"../public/img/plug/tpc.png":pe})[`../public/img/${p}`],self.location).href}return u({activeSegment:n,toReturnSrcPath:e}),(p,o)=>(c(),r("div",Xe,[i("h1",Ye,_(t(y).title),1),i("h5",et,_(t(y).subTitle),1),d(A,{options:t(y).segmentOptions,class:"mb-5",onToChangeLabel:m},null,8,["options"]),i("div",tt,[(c(!0),r(h,null,v(t(n).description,(l,a)=>(c(),r("div",{key:`1${a}`,class:"mb-1 text-white"},_(l),1))),128))]),i("div",{class:$(["d-flex overflow-scroll",{"d-flex":t(g)>=768}])},[(c(!0),r(h,null,v(t(n).image,(l,a)=>(c(),r("img",{key:`1${a}`,alt:l.alt,src:e(l.path),class:$(["border border-white",[{"me-3":t(g)>=768},{"w-15":t(g)>=768},{"w-75":t(g)<768}]])},null,10,it))),128))],2)]))}},nt={class:"min-vh-100 mb-5 border-bottom border-white"},at={class:"text-main mb-3"},ot={class:"text-white mb-5"},pt={class:"mb-5 text-white"},lt={class:"d-flex"},ct=["alt","src"],rt=i("div",null,null,-1),gt={__name:"Dashboard",setup(s,{expose:u}){const g=C().screenWidth;let n=x(k.segments.overview);function m(p){n.value=k.segments[p]}function e(p){return new URL(Object.assign({"../public/img/application/charge/01.png":j,"../public/img/application/charge/02.png":L,"../public/img/application/charge/03.png":O,"../public/img/application/charge/04.png":V,"../public/img/application/charge/05.png":P,"../public/img/application/map/01.png":B,"../public/img/application/map/02.png":R,"../public/img/application/map/03.png":U,"../public/img/application/map/04.png":D,"../public/img/application/map/05.png":M,"../public/img/application/mine/01.png":F,"../public/img/application/mine/02.png":q,"../public/img/application/mine/03.png":Z,"../public/img/application/mine/04.png":H,"../public/img/application/mine/05.png":J,"../public/img/dashboard/location.png":z,"../public/img/dashboard/member.png":Q,"../public/img/dashboard/notification.png":G,"../public/img/dashboard/overview.png":K,"../public/img/dashboard/statistic.png":X,"../public/img/dashboard/system.png":Y,"../public/img/logo-font.svg":ee,"../public/img/logo.svg":te,"../public/img/plug/ccs1.png":ie,"../public/img/plug/ccs2.png":se,"../public/img/plug/chademo.png":ne,"../public/img/plug/j1772.png":ae,"../public/img/plug/mennekes.png":oe,"../public/img/plug/tpc.png":pe})[`../public/img/${p}`],self.location).href}return u({activeSegment:n,toReturnSrcPath:e}),(p,o)=>(c(),r("div",nt,[i("h1",at,_(t(k).title),1),i("h5",ot,_(t(k).subTitle),1),d(A,{options:t(k).segmentOptions,class:"mb-5",onToChangeLabel:m},null,8,["options"]),i("div",pt,[(c(!0),r(h,null,v(t(n).description,(l,a)=>(c(),r("div",{key:`2${a}`,class:"mb-1 text-white"},_(l),1))),128))]),i("div",lt,[(c(!0),r(h,null,v(t(n).image,(l,a)=>(c(),r("img",{key:`2${a}`,alt:l.alt,src:e(l.path),class:$(["img-fluid border border-white",{"w-75":t(g)>=768}])},null,10,ct))),128))]),rt]))}},E={required(s){return!s||s.length===0?"請填寫此欄位":!0},requiredPhone(s){return!s||s.length===0?"請填寫此欄位":/^[0-9]*$/g.test(s)?!0:"電話號碼格式錯誤"},requiredEmail(s){return!s||s.length===0?"請填寫此欄位":/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(s)?!0:"電子郵件格式錯誤"}};const _e=s=>(ge("data-v-d62c9467"),s=s(),me(),s),mt={class:"min-vh-100"},dt={class:"text-main mb-3"},_t={class:"text-white mb-5"},ut={class:"mb-5 text-white"},bt={class:"mb-3"},ht={class:"mb-3"},vt={class:"mb-3"},ft={class:"mb-3"},wt=_e(()=>i("button",{class:"btn btn-main w-100",type:"submit"},"送出",-1)),xt=_e(()=>i("div",null,null,-1)),$t={__name:"Business",setup(s,{expose:u}){const g=C().screenWidth;let n=x(I.segments.manufacturer);function m(p){n.value=I.segments[p]}let e={name:"",phone:"",email:"",firm:""};return u({activeSegment:n,data:e}),(p,o)=>{const l=N("Field"),a=N("ErrorMessage"),w=N("Form");return c(),r("div",mt,[i("h1",dt,_(t(I).title),1),i("h5",_t,_(t(I).subTitle),1),d(A,{options:t(I).segmentOptions,class:"mb-5",onToChangeLabel:m},null,8,["options"]),i("div",ut,[(c(!0),r(h,null,v(t(n).description,(b,ue)=>(c(),r("div",{key:`3${ue}`,class:"mb-1 text-white"},_(b),1))),128))]),i("div",null,[d(w,{class:$({"w-25":t(g)>=768,"w-100":t(g)<768})},{default:ve(()=>[i("div",bt,[d(l,{id:"name",modelValue:t(e).name,"onUpdate:modelValue":o[0]||(o[0]=b=>t(e).name=b),rules:t(E).required,class:"form-control",name:"name",placeholder:"請輸入您的姓名"},null,8,["modelValue","rules"]),d(a,{class:"ms-2 text-danger",name:"name"})]),i("div",ht,[d(l,{id:"phone",modelValue:t(e).phone,"onUpdate:modelValue":o[1]||(o[1]=b=>t(e).phone=b),rules:t(E).requiredPhone,class:"form-control",name:"phone",placeholder:"請輸入您的電話"},null,8,["modelValue","rules"]),d(a,{class:"ms-2 text-danger",name:"phone"})]),i("div",vt,[d(l,{id:"email",modelValue:t(e).email,"onUpdate:modelValue":o[2]||(o[2]=b=>t(e).email=b),rules:t(E).requiredEmail,class:"form-control",name:"email",placeholder:"請輸入您的電子郵件"},null,8,["modelValue","rules"]),d(a,{class:"ms-2 text-danger",name:"email"})]),i("div",ft,[d(l,{id:"firm",modelValue:t(e).firm,"onUpdate:modelValue":o[3]||(o[3]=b=>t(e).firm=b),rules:t(E).required,class:"form-control",name:"firm",placeholder:"請輸入您的公司名稱"},null,8,["modelValue","rules"]),d(a,{class:"ms-2 text-danger",name:"firm"})]),wt]),_:1},8,["class"])]),xt])}}},Ct=S($t,[["__scopeId","data-v-d62c9467"]]),yt={class:"container-xxl pb-5"},kt={class:"sticky-bottom"},Tt={__name:"MainPage",setup(s,{expose:u}){C().setScreenWidth(document.body.clientWidth);const g=x();let n=re({});fe(()=>{window.addEventListener("scroll",()=>{m(window.scrollY,window.outerHeight)})});function m(o,l){var w;let a=l;document.body.clientWidth<768&&(a=0),o<=n.spec-a?(e[0].position="nav-3",e[1].position="nav-4",e[2].position="nav-5",e[3].position="nav-1",e[4].position="nav-2",(w=g.value)==null||w.toCloseNavItemsArea(!0)):o<=n.application-a?(e[0].position="nav-2",e[1].position="nav-3",e[2].position="nav-4",e[3].position="nav-5",e[4].position="nav-1",g.value.toCloseNavItemsArea(!1)):o<=n.dashboard-a?(e[0].position="nav-1",e[1].position="nav-2",e[2].position="nav-3",e[3].position="nav-4",e[4].position="nav-5",g.value.toCloseNavItemsArea(!1)):o<=n.business-a?(e[0].position="nav-5",e[1].position="nav-1",e[2].position="nav-2",e[3].position="nav-3",e[4].position="nav-4",g.value.toCloseNavItemsArea(!1)):(e[0].position="nav-4",e[1].position="nav-5",e[2].position="nav-1",e[3].position="nav-2",e[4].position="nav-3",g.value.toCloseNavItemsArea(!1))}we(()=>{n={about:document.getElementById("about").offsetTop,spec:document.getElementById("spec").offsetTop,application:document.getElementById("application").offsetTop,dashboard:document.getElementById("dashboard").offsetTop,business:document.getElementById("business").offsetTop}});let e=re([{label:"摘要概覽",name:"about",position:"nav-3"},{label:"充電規格",name:"spec",position:"nav-4"},{label:"應用程式",name:"application",position:"nav-5"},{label:"後台管理",name:"dashboard",position:"nav-1"},{label:"商務合作",name:"business",position:"nav-2"}]);function p(o){window.scrollTo(0,n[o]-20)}return u({customNavComponent:g,position:n,navItems:e,toScroll:p}),(o,l)=>(c(),r("div",null,[i("div",yt,[d(Ne,{id:"about"}),d(Ke,{id:"spec"}),d(st,{id:"application"}),d(gt,{id:"dashboard"}),d(Ct,{id:"business"})]),i("div",kt,[d(ye,{ref_key:"customNavComponent",ref:g,"nav-items":t(e),onToScroll:p},null,8,["nav-items"])])]))}};export{Tt as default};
