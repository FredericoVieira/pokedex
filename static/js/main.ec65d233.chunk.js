(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(61)},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"loaded",function(){return u}),a.d(n,"showModal",function(){return d}),a.d(n,"setPokemons",function(){return v}),a.d(n,"setPokemon",function(){return _}),a.d(n,"getPokemons",function(){return j}),a.d(n,"getPokemon",function(){return O});var r=a(0),o=a.n(r),c=a(6),s=a(1),i=a(3),l=a(19);var m=function(e,t,a){var n={state:t,listeners:[]};return n.setState=function(e){var t=this;this.state=Object(s.a)({},this.state,e),this.listeners.forEach(function(e){e(t.state)})}.bind(n),n.actions=function e(t,a){var n={};return Object.keys(a).forEach(function(r){"function"===typeof a[r]&&(n[r]=a[r].bind(null,t)),"object"===typeof a[r]&&(n[r]=e(t,a[r]))}),n}(n,a),function(e){var t=this,a=e.useState()[1];return e.useEffect(function(){return t.listeners.push(a),function(){t.listeners=t.listeners.filter(function(e){return e!==a})}},[]),[this.state,this.actions]}.bind(n,e)},u=function(e,t){return e.setState(Object(s.a)({},e.state,{loaded:t}))},d=function(e,t){return e.setState(Object(s.a)({},e.state,{modal:t}))},p=a(4),f=a.n(p),b=a(5),h=a(7),k=a(20),g=a.n(k),E=function(){var e=Object(b.a)(f.a.mark(function e(t,a){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:t,baseURL:"https://pokeapi.co/api/v2/",url:a},e.abrupt("return",g.a.request(n).then(function(e){return[null,e]}).catch(function(e){return[e]}));case 2:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),v=function(e,t){var a=Object(s.a)({},e.state.pokemons,{collection:t.reduce(function(e,t){var a=t.url,n=a.substring(34,a.length-1);return Object(s.a)({},e,Object(h.a)({},n,Object(s.a)({id:n},t)))},{})});e.setState(Object(s.a)({},e.state,{pokemons:a}))},_=function(e,t){var a=Object(s.a)({},e.state.pokemons,{selected:t});e.actions.showModal(!0),e.setState(Object(s.a)({},e.state,{pokemons:a}))},j=function(){var e=Object(b.a)(f.a.mark(function e(t){var a,n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return 784,t.actions.loaded(!1),e.next=4,E("GET","pokemon/?limit=".concat(784));case 4:a=e.sent,n=Object(i.a)(a,2),n[0],r=n[1],v(t,r.data.results),t.actions.loaded(!0);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(f.a.mark(function e(t,a){var n,r,o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.actions.loaded(!1),e.next=3,E("GET","pokemon/".concat(a));case 3:n=e.sent,r=Object(i.a)(n,2),r[0],o=r[1],_(t,o.data),t.actions.loaded(!0);case 9:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),N={loader:!1,modal:!1,pokemons:{collection:{},selected:{}}},y=m(o.a,N,n),w=a(21),C=a.n(w),S=function(e){var t=e.pokemon,a=y(),n=Object(i.a)(a,2)[1];return o.a.createElement("div",{className:"pokemon"},o.a.createElement(C.a,null,o.a.createElement("button",{type:"button",className:"pokemon__sprite",onClick:function(){return n.getPokemon(t.id)},style:{backgroundImage:"url(".concat("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t.id,".png"),")")}})),o.a.createElement("p",{className:"pokemon__name"},t.name))},P=function(e){var t=e.onChange,a=e.value;return o.a.createElement("input",{type:"text",className:"search",onChange:t,value:a,placeholder:"Enter pokemon name...",autoFocus:!0})},I={normal:"#a8a878",water:"#6890f0",electric:"#f8d030",fighting:"#c03028",ground:"#f0b6bc",psychic:"#f85888",rock:"#b8a038",dark:"#705848",steel:"#b8b8d0",fire:"#f08030",grass:"#78c850",ice:"#98d8d8",poison:"#a040a0",flying:"#a890ef",bug:"#a8b820",ghost:"#705898",dragon:"#7038f8",fairy:"#f0b6bc"},x=function(){var e,t=y(),a=Object(i.a)(t,2),n=a[0],r=a[1],c=n.pokemons.selected,s=c.id,l=c.name,m=c.types,u=c.abilities,d=c.height,p=c.weight,f=[];m&&(f=m.map(function(e){return e.type.name})),1===f.length?e={borderColor:I[f[0]]}:2===f.length&&(e={borderBottomColor:I[f[0]],borderLeftColor:I[f[0]],borderRightColor:I[f[1]],borderTopColor:I[f[1]]});var b=[];return u&&(b=u.map(function(e){return e.ability.name})),o.a.createElement("div",{className:"modal"},o.a.createElement("section",{className:"modal__main"},o.a.createElement("img",{className:"modal__main--image",style:e,src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(s,".png")}),o.a.createElement("li",{className:"modal__list-item"},o.a.createElement("span",{className:"modal__list-item--attribute"},"Name: "),o.a.createElement("span",{className:"modal__list-item--capitalize"},l," "),"(#".concat(s,")")),o.a.createElement("li",{className:"modal__list-item"},o.a.createElement("span",{className:"modal__list-item--attribute"},"Types: "),o.a.createElement("span",{className:"modal__list-item--capitalize"},f.join(", "))),o.a.createElement("li",{className:"modal__list-item"},o.a.createElement("span",{className:"modal__list-item--attribute"},"Abilities: "),o.a.createElement("span",{className:"modal__list-item--capitalize"},b.join(", "))),o.a.createElement("li",{className:"modal__list-item"},o.a.createElement("span",{className:"modal__list-item--attribute"},"Height: "),d," /",o.a.createElement("span",{className:"modal__list-item--attribute"},"Weight: "),p),o.a.createElement("button",{className:"button",onClick:function(){return r.showModal(!1)}},"Close")))},T=a(22),A=a.n(T),z=function(){var e=y(),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)({searchString:"",pokemonsIds:[],error:null}),m=Object(i.a)(c,2),u=m[0],d=m[1],p=u.searchString,f=u.pokemonsIds,b=u.error,h=a.loaded,k=a.modal,g=a.pokemons.collection;Object(r.useEffect)(function(){n.getPokemons()},[]),Object(r.useEffect)(function(){p||d(Object(s.a)({},u,{pokemonsIds:Object.keys(g)}))},[g]);var E=f.map(function(e){var t=g[e];return o.a.createElement("li",{className:"pokemons__item",key:t.id},o.a.createElement(S,{pokemon:t}))});return o.a.createElement("div",{className:"page"},b&&o.a.createElement("div",{className:"page__error"},b),o.a.createElement("div",{className:"page__search"},o.a.createElement(P,{onChange:function(e){var t=e.currentTarget.value.toLowerCase().trim();if(l.a.set("searchString",t,{maxAge:"31536000"}),""===t)return d(Object(s.a)({},u,{pokemonsIds:Object.keys(g),searchString:t}));var a=Object.keys(g).filter(function(e){return g[e].name.includes(t)});d(Object(s.a)({},u,{pokemonsIds:a,searchString:t}))},value:p})),k&&o.a.createElement(x,null),o.a.createElement("ul",{className:"pokemons"},E),o.a.createElement(A.a,{loaded:h,color:"white"}))};a(60);Object(c.render)(o.a.createElement(z,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.ec65d233.chunk.js.map