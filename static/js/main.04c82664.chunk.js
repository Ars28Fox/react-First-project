(this["webpackJsonpreact-first-project"]=this["webpackJsonpreact-first-project"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(4),r=c.n(n),i=(c(10),c(0));function l(){return Object(i.jsx)("nav",{className:"purple darken-4",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"!#",className:"brand-logo right",children:"React Movies"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"left hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://github.com/Ars28Fox/react-First-project",_target:"blank",rel:"noreferrer",children:"GitHub Repo"})})})]})})}function j(){return Object(i.jsx)("footer",{className:"page-footer purple lighten-4",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/Ars28Fox/react-First-project",_target:"blank",rel:"noreferrer",children:"GitHub Repo"})]})})})}var o=c(2),d=c(5);function h(e){var t=e.Title,c=e.Year,a=e.imbdID,s=e.Type,n=e.Poster;return Object(i.jsxs)("div",{className:"card movie",id:a,children:[Object(i.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:Object(i.jsx)("img",{className:"activator",src:n,alt:""})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(i.jsxs)("p",{children:[c," ",Object(i.jsx)("span",{className:"right",children:s})]})]})]})}function b(e){var t=e.movies,c=void 0===t?[]:t;return Object(i.jsx)("div",{className:"movies",children:c.length?c.map((function(e){return Object(i.jsx)(h,Object(d.a)({},e),e.imdbID)})):Object(i.jsx)("h3",{children:"Nothing found"})})}var p=function(e){var t=e.searchingMovies,c=void 0===t?Function.prototype:t,s=Object(a.useState)(""),n=Object(o.a)(s,2),r=n[0],l=n[1],j=Object(a.useState)("all"),d=Object(o.a)(j,2),h=d[0],b=d[1],p=function(e){b(e.target.dataset.type),c(r,e.target.dataset.type)};return Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col s12",children:[Object(i.jsxs)("div",{className:"input-field",children:[Object(i.jsx)("input",{placeholder:"Search",type:"search",className:"validate",value:r,onChange:function(e){return l(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&c(r,h)}}),Object(i.jsx)("button",{className:"btn search-btn",onClick:function(){return c(r,h)},children:"Search"})]}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("label",{className:"input-label",children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",onChange:p,checked:"all"===h}),Object(i.jsx)("span",{children:"All"})]}),Object(i.jsxs)("label",{className:"input-label",children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:p,checked:"movie"===h}),Object(i.jsx)("span",{children:"Movies only"})]}),Object(i.jsxs)("label",{className:"input-label",children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:p,checked:"series"===h}),Object(i.jsx)("span",{children:"Series only"})]})]})]})})};function u(){return Object(i.jsx)("div",{className:"preloader-wrapper big active",children:Object(i.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(i.jsx)("div",{className:"circle-clipper left",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"gap-patch",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"circle-clipper right",children:Object(i.jsx)("div",{className:"circle"})})]})})}var O="fe28706d";function m(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!0),r=Object(o.a)(n,2),l=r[0],j=r[1];return Object(a.useEffect)((function(){fetch("https://www.omdbapi.com/?apikey=".concat(O,"&s=lord")).then((function(e){return e.json()})).then((function(e){s(e.Search),j(!1)})).catch((function(e){console.error(e),j(!1)}))}),[]),Object(i.jsxs)("main",{className:"container content",children:[Object(i.jsx)(p,{searchingMovies:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";j(!0),fetch("https://www.omdbapi.com/?apikey=".concat(O,"&s=").concat(e).concat("all"!==t?"&type=".concat(t):"")).then((function(e){return e.json()})).then((function(e){j(!1),s(e.Search)})).catch((function(e){console.error(e),j(!1)}))}}),l?Object(i.jsx)(u,{}):Object(i.jsx)(b,{movies:c})]})}var x=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(m,{}),Object(i.jsx)(j,{})]})};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.04c82664.chunk.js.map