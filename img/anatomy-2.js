function anatomy2(){const t=".svg5 .g34004",i=".svg5 .g30493",a=".svg5 .g40924",o=".svg5 .g38957",n=".svg5 .text117566-6",r=".svg5 .text117566",u=".svg5 .text117566-7",d=[".svg5 .g175069"],e=".svg5 .text224044",y=".svg5 .text224044-6",c=".svg5 .text224044-6-2",g=".svg5 .text224044-6-2-4",s=".svg5 .text224044-6-2-4-2",p=".svg5 .text224044-4",x=".svg5 .text224044-6-2-4-0",v=".svg5 .g220788",f=".svg5 .g162444",l=".svg5 .g162451",k=".svg5 .g174512",m=".svg5 .path9781",h=".svg5 .path9781-4",_=".svg5 .path9781-8",b=".svg5 .path9781-88",j=".svg5 .path9781-4-9",X=".svg5 .path9781-38",q=[f,l,k,m,h,_,b,j,X],E=".svg5 .g174517",L=".svg5 .text148495",O=[E,L],S=".svg5 .g174522",C=".svg5 .g202236",D=".svg5 .path73723",w=[S,C,D];let z=!1,A=!1;function B(){z=!1;var t=gsap.timeline();J(t,o,{opacity:0,duration:0},0),J(t,a,{opacity:1,duration:0},0),M.resume()}function F(t,i,a){t.set(i.join(", "),{opacity:1},a)}function G(t,i,a){t.set(i.join(", "),{opacity:0},a)}function H(t,i,a,o){t.set(i,{opacity:1,text:a},o)}function I(t,i,a,o){t.to(i,Object.assign({},{opacity:1,duration:.2},a),o)}function J(t,i,a,o){t.to(i,Object.assign({},a),o)}document.querySelector(t).addEventListener("click",(function(){if(!A){var a=gsap.timeline({onComplete:function(){A=!1}});z=!1,A=!0,J(a,t,{opacity:0,duration:0},0),J(a,i,{opacity:1,duration:0},0),J(a,t,{opacity:1,duration:0},.5),J(a,i,{opacity:0,duration:0},.5),B(),M.restart()}})),document.querySelector(a).addEventListener("click",(function(){A||(z?B():function(){z=!0;var t=gsap.timeline();J(t,o,{opacity:1,duration:0},0),J(t,a,{opacity:0,duration:0},0),M.pause()}())}));var K,M=gsap.timeline({repeat:-1,repeatDelay:5}).add((K=gsap.timeline(),G(K,d,0),G(K,[r,n,u,v],0),G(K,q,0),G(K,O,0),G(K,w,0),J(K,k,{x:"-=55",duration:0},0),J(K,E,{scale:"0.1",x:"-=27",y:"+=28",duration:0},0),J(K,X,{x:"+=56",y:"-=8"},0),J(K,m,{x:"-=60",y:"+=8"},0),J(K,h,{x:"-=56",y:"+=8"},0),J(K,_,{x:"-=52",y:"+=8"},0),J(K,b,{x:"-=48",y:"+=8"},0),J(K,j,{x:"-=44",y:"+=8"},0),K)).add(function(){var t=gsap.timeline();return I(t,e,{duration:.5},0),I(t,d,{duration:1},5),F(t,[k],6),J(t,k,{duration:1,x:"+=55",ease:"bounce"},6),F(t,[E],7),J(t,E,{scale:"1",x:"+=27",y:"-=28",duration:1,ease:"bounce"},7),t}(),"+=1").add(function(){var t=gsap.timeline();return G(t,[e],0),I(t,y,{duration:.5},0),F(t,[X],5),J(t,X,{x:"-=30",y:"+=2.5",duration:.3},5),J(t,l,{opacity:1,duration:.5}),J(t,X,{x:"-=13.5",duration:.5},"<"),J(t,X,{y:"+=5.5",duration:.5}),J(t,X,{x:"-=17.5",duration:.5}),J(t,X,{y:"-=5.5",duration:.5}),J(t,X,{x:"-=10",duration:.5}),J(t,X,{x:"-=48",y:"-=2.5",duration:.3}),J(t,l,{opacity:0,duration:.5},"<"),J(t,X,{opacity:0,duration:.5}),J(t,n,{opacity:1,duration:.5},"<"),H(t,r,"_","<"),t}()).add(function(){var t=gsap.timeline();return G(t,[y],0),I(t,c,{duration:.5},0),J(t,f,{opacity:1,duration:.5},5),H(t,r,"l_",5),J(t,m,{opacity:1,x:"+=35",y:"-=2.5"},"<"),J(t,m,{x:"+=12.5",duration:.5},">"),J(t,m,{y:"-=5.5",duration:.5},">"),J(t,m,{x:"+=9",duration:.5},">"),H(t,r,"ls_",5.5),J(t,h,{opacity:1,x:"+=31",y:"-=2.5"},"<"),J(t,h,{x:"+=12.5",duration:.5},">"),J(t,h,{y:"-=5.5",duration:.5},">"),J(t,h,{x:"+=9",opacity:0,duration:.5},">"),J(t,m,{x:"-=0.4",scaleX:"1.2",duration:.5},"<"),H(t,r,"ls _",6),J(t,_,{opacity:1,x:"+=27",y:"-=2.5"},"<"),J(t,_,{x:"+=12.5",duration:.5},">"),J(t,_,{y:"-=5.5",duration:.5},">"),J(t,_,{x:"+=9",opacity:0,duration:.5},">"),J(t,m,{x:"-=0.8",scaleX:"1.4",duration:.5},"<"),H(t,r,"ls -_",6.5),J(t,b,{opacity:1,x:"+=23",y:"-=2.5"},"<"),J(t,b,{x:"+=12.5",duration:.5},">"),J(t,b,{y:"-=5.5",duration:.5},">"),J(t,b,{x:"+=9",opacity:0,duration:.5},">"),J(t,m,{x:"-=0.5",scaleX:"1.6",duration:.5},"<"),H(t,r,"ls -l_",7),J(t,j,{opacity:1,x:"+=19",y:"-=2.5"},"<"),J(t,j,{x:"+=12.5",duration:.5},">"),J(t,j,{y:"-=5.5",duration:.5},">"),J(t,j,{x:"+=9",opacity:0,duration:.5},">"),J(t,m,{x:"-=0.5",scaleX:"1.8",duration:.5},"<"),G(t,[c],">"),I(t,g,{duration:.5},"<"),J(t,u,{opacity:1},">+=5"),H(t,r,"ls -l","<"),J(t,u,{y:"-=10"},">"),J(t,r,{y:"-=10"},"<"),J(t,n,{y:"-=10"},"<"),J(t,m,{x:"+=8.5",duration:.5},">"),J(t,m,{y:"+=5.5",duration:.5},">"),J(t,m,{x:"+=10",duration:.5},">"),t}()).add(function(){var t=gsap.timeline();return J(t,X,{x:"+=120.5"},0),J(t,f,{opacity:0,duration:.5},0),J(t,m,{x:"+=32",y:"+=3",duration:1},0),G(t,[g],0),I(t,s,{duration:.5},0),H(t,L,"forking...",0),J(t,m,{opacity:0,duration:.5},0),H(t,L,"forking.",5.5),J(t,D,{opacity:1,duration:1},6),J(t,C,{opacity:1,duration:1},6),H(t,L,"forking..",6),H(t,L,"forking...",6.5),J(t,S,{opacity:1,ease:"steps(10)",duration:3},7),J(t,C,{opacity:0,duration:0},">"),H(t,L,"forking.",7),H(t,L,"forking..",7.5),H(t,L,"forking...",8),H(t,L,"forking.",8.5),H(t,L,"forking..",9),H(t,L,"forking...",9.5),G(t,[s],10),I(t,p,{duration:.5},10),H(t,L,"forking.",10),H(t,L,"forking..",10.5),H(t,L,"forking...",11),H(t,L,"forking.",11.5),H(t,L,"forking..",12),H(t,L,"forking...",12.5),H(t,L,"forking.",13),H(t,L,"forking..",13.5),H(t,L,"forking...",14),H(t,L,"forking.",14.5),J(t,L,{opacity:0},15),J(t,S,{y:"-=50",x:"+=8",scale:"0.3",duration:1},15),J(t,S,{opacity:0,duration:1},">"),J(t,D,{opacity:0,duration:0},15),t}()).add(function(){var t=gsap.timeline();return G(t,[p],0),I(t,x,{duration:.5},0),J(t,X,{opacity:1},4.5),J(t,X,{x:"-=31.5",y:"+=2.5",duration:.3},5),J(t,l,{opacity:1,duration:.5}),J(t,X,{x:"-=13.5",duration:.5},"<"),J(t,X,{y:"+=5.5",duration:.5}),J(t,X,{x:"-=17.5",duration:.5}),J(t,X,{y:"-=5.5",duration:.5}),J(t,X,{x:"-=10",duration:.5}),J(t,X,{x:"-=34",y:"-=2.5",duration:.3}),J(t,l,{opacity:0,duration:.5},"<"),J(t,X,{opacity:0,duration:.5}),G(t,[x],">"),I(t,".svg5 .text224044-62",{duration:.5},"<"),J(t,v,{opacity:1,duration:1,delay:.2},">+=5"),J(t,r,{y:"-=20",opacity:0,duration:1},"<"),J(t,n,{y:"-=20",opacity:0,duration:1},"<"),J(t,u,{y:"-=20",opacity:0,duration:1},"<"),t}())}anatomy2();