var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let m;function p(t){m=t}const g=[],y=[],$=[],b=[],v=Promise.resolve();let x=!1;function _(t){$.push(t)}let w=!1;const T=new Set;function E(){if(!w){w=!0;do{for(let t=0;t<g.length;t+=1){const n=g[t];p(n),C(n.$$)}for(g.length=0;y.length;)y.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];T.has(n)||(T.add(n),n())}$.length=0}while(g.length);for(;b.length;)b.pop()();x=!1,w=!1,T.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const k=new Set;function A(t,n){-1===t.$$.dirty[0]&&(g.push(t),x||(x=!0,v.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function N(c,l,u,s,i,f,d=[-1]){const h=m;p(c);const g=l.props||{},y=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:e(),dirty:d};let $=!1;if(y.ctx=u?u(c,g,((t,n,...e)=>{const o=e.length?e[0]:n;return y.ctx&&i(y.ctx[t],y.ctx[t]=o)&&(y.bound[t]&&y.bound[t](o),$&&A(c,t)),n})):[],y.update(),$=!0,o(y.before_update),y.fragment=!!s&&s(y.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);y.fragment&&y.fragment.l(t),t.forEach(a)}else y.fragment&&y.fragment.c();l.intro&&((b=c.$$.fragment)&&b.i&&(k.delete(b),b.i(v))),function(t,e,c){const{fragment:l,on_mount:u,on_destroy:a,after_update:s}=t.$$;l&&l.m(e,c),_((()=>{const e=u.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),s.forEach(_)}(c,l.target,l.anchor),E()}var b,v;p(h)}function O(t,n,e){const o=t.slice();return o[4]=n[e],o}function S(t){let n;return{c(){n=s("p"),n.textContent="loading..."},m(t,e){u(t,n,e)},d(t){t&&a(n)}}}function j(t){let n,e,o,r,c,m,p,g,y,$,b=t[4].Timestamp+"",v=t[4].Content+"";function x(...n){return t[2](t[4],...n)}return{c(){n=s("tr"),e=s("td"),o=i(b),r=f(),c=s("td"),m=i(v),g=f(),d(e,"class","date svelte-1y9dxbv"),d(c,"id",p=t[4].Timestamp),d(c,"class","svelte-1y9dxbv")},m(t,a){var s,i,f,d;u(t,n,a),l(n,e),l(e,o),l(n,r),l(n,c),l(c,m),l(n,g),y||(i="click",f=x,(s=c).addEventListener(i,f,d),$=()=>s.removeEventListener(i,f,d),y=!0)},p(n,e){t=n,1&e&&b!==(b=t[4].Timestamp+"")&&h(o,b),1&e&&v!==(v=t[4].Content+"")&&h(m,v),1&e&&p!==(p=t[4].Timestamp)&&d(c,"id",p)},d(t){t&&a(n),y=!1,$()}}}function L(n){let e,o,r,c,i,h=n[0],m=[];for(let t=0;t<h.length;t+=1)m[t]=j(O(n,h,t));let p=null;return h.length||(p=S()),{c(){e=s("div"),o=s("table"),r=s("thead"),r.innerHTML='<tr><th class="date svelte-1y9dxbv">date</th> \n        <th class="svelte-1y9dxbv">entry</th></tr>',c=f(),i=s("tbody");for(let t=0;t<m.length;t+=1)m[t].c();p&&p.c(),d(o,"class","svelte-1y9dxbv"),d(e,"class","svelte-1y9dxbv")},m(t,n){u(t,e,n),l(e,o),l(o,r),l(o,c),l(o,i);for(let t=0;t<m.length;t+=1)m[t].m(i,null);p&&p.m(i,null)},p(t,[n]){if(3&n){let e;for(h=t[0],e=0;e<h.length;e+=1){const o=O(t,h,e);m[e]?m[e].p(o,n):(m[e]=j(o),m[e].c(),m[e].m(i,null))}for(;e<m.length;e+=1)m[e].d(1);m.length=h.length,h.length?p&&(p.d(1),p=null):p||(p=S(),p.c(),p.m(i,null))}},i:t,o:t,d(t){t&&a(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(m,t),p&&p.d()}}}function M(t,n,e){let o=[];const r=async()=>{const t=await fetch("/content");e(0,o=await t.json())},c=async function(t,n){try{await fetch("/content",{method:"POST",body:JSON.stringify(n)})}catch(t){console.log(t)}};r(),setInterval(r,500);return[o,c,(t,n)=>c(0,t)]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),N(this,t,M,L,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
