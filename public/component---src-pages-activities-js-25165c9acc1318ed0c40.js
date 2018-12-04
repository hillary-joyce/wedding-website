(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{175:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(189),l=(a(188),a(195)),o=(a(185),a(192)),s=a.n(o),c=a(200),d=a.n(c),u=a(201),m=a.n(u),p=a(202),h=a.n(p),f=a(203),b=a.n(f),g=a(204),v=a.n(g),E=a(205),N=a.n(E);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(l.a,{id:"activities-pg",imgSrc:s.a,title:"Welcome to DC"}),i.a.createElement("div",{style:{height:"100vh"},className:"container"},i.a.createElement("div",{className:"grid-title"},i.a.createElement("h1",null,"Things to Do")),i.a.createElement("div",{className:"two info-grid"},i.a.createElement("div",{className:"grid-cell"},i.a.createElement("img",{className:"activity-img",src:d.a}),i.a.createElement("h3",null,"The National Mall"),i.a.createElement("p",null,"In the shadow of the Washington Monument is a place that truly captures the spirit of America - for on those grass fields is the spot that Hillary and Mark met playing soccer. Stretching nearly 2 miles from the Capitol Building to the Lincoln Memorial, the mall is home to some of America’s greatest monuments, and a great place to take a stroll through history.")),i.a.createElement("div",{className:"grid-cell"},i.a.createElement("img",{className:"activity-img",src:m.a}),i.a.createElement("h3",null,"Smithsonian Museums"),i.a.createElement("p",null,"The Smithsonian Air & Space Museum boasts the honor of being the location of one of Hillary and Mark’s first dates. It is also the most visited museum in the world. Spend an afternoon with the Spirit of St. Louis and the Lunar Module, or visit one of the other 16 world-class Smithsonian museums. Admission is always free, and subjects range from American craft to Natural History.")),i.a.createElement("div",{className:"grid-cell"},i.a.createElement("img",{className:"activity-img",src:h.a}),i.a.createElement("h3",null,"Georgetown"),i.a.createElement("p",null,"Early into dating, Mark took Hillary to Georgetown to see his wonderfully talented sister Lena sing. Afterwards they went to the Georgetown Piano Bar and watched two of Mark’s favorite teams (Wizards and Capitals) get destroyed in important playoff games. It was a low moment, but Hillary’s company made it a little bit brighter, and Mark realized if she still wanted to hang out after this she was special. Georgetown is also home to great shopping, delicious eats, and regular street festivals. ")),i.a.createElement("div",{className:"grid-cell"},i.a.createElement("img",{className:"activity-img",src:b.a}),i.a.createElement("h3",null,"Escape Rooms"),i.a.createElement("p",null,"Hillary and Mark love escape rooms. An activity which involves being trapped in a room with 1 hour to escape, with themes like “serial killer” and “find the bomb”, this romantic setting was the perfect place for Mark to propose. After escaping with 22 minutes to spare, the couple entered a space Mark had decorated with flowers and pictures and got down on one knee. Experience an escape room for yourself at Escape Quest in Georgetown, Alexandria or Takoma Park.")),i.a.createElement("div",{className:"grid-cell"},i.a.createElement("img",{className:"activity-img",src:v.a}),i.a.createElement("h3",null,"Virginia Parks"),i.a.createElement("p",null,"Hiking in Northern Virginia is one of Mark & Hillary’s favorite things. On any warm Saturday, you can find the two of them and their dog, Lando, out on the trails. Check out Great Falls Park or Teddy Roosevelt Island, and explore the Virginia wilderness the two of them love so much.")),i.a.createElement("div",{className:"grid-cell"},i.a.createElement("img",{className:"activity-img",src:N.a}),i.a.createElement("h3",null,"Arlington"),i.a.createElement("p",null,"Step outside DC and get a closer look at the city Mark and Hillary call home. With its many neighborhoods, there’s plenty to do and see. Visit Clarendon and enjoy some of the city’s nightlife at Don Tito’s and Clarendon Grill, or spend an afternoon at the newly opened Ballston Quarter."))),i.a.createElement("div",{className:"grid-title"},i.a.createElement("h1",null,"Food & Drink")),i.a.createElement("div",{className:"three info-grid"},i.a.createElement("div",{className:"grid-cell"},i.a.createElement("h3",null,"Penn Social"),i.a.createElement("p",null,"Located in the heart of DC, this bar has arcade basketball, cornhole, and plenty of arcade games.")),i.a.createElement("div",{className:"grid-cell"},i.a.createElement("h3",null,"Good Stuff Eatery"),i.a.createElement("p",null,"Mark’s favorite burger joint in DC, with fresh ingredients and delicious sauces.")),i.a.createElement("div",{className:"grid-cell"},i.a.createElement("h3",null,"Board Room"),i.a.createElement("p",null,"Spend an afternoon at this bar playing one of their dozens of board games that you can rent for just $1.")),i.a.createElement("div",{className:"grid-cell"},i.a.createElement("h3",null,"Ambar"),i.a.createElement("p",null,"Looking for something different? Ambar serves delicious authentic Balkan food.")),i.a.createElement("div",{className:"grid-cell"},i.a.createElement("h3",null,"Falafel Inc."),i.a.createElement("p",null,"Tucked back on a side street in Georgetown, this little restaurant serves amazing Mediterranian food.")),i.a.createElement("div",{className:"grid-cell"},i.a.createElement("h3",null,"Tony & Joe’s"),i.a.createElement("p",null,"Tony & Joe’s serves some of the freshest seafood in all of DC. Try the local blue crab, a staple of the area!")))))}},182:function(e,t,a){"use strict";var n=a(9);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var i=n(a(190)),r=n(a(191)),l=n(a(7)),o=n(a(53)),s=n(a(54)),c=n(a(4)),d=n(a(0)),u=a(14),m=a(183);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},f=function(e){function t(t){var a;a=e.call(this)||this,(0,s.default)((0,o.default)((0,o.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,r.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,m.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,m.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,i=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,m.parsePath)(i.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,l=void 0===n?this.defaultGetProps:n,o=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,f=(0,i.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),b=p(a);return d.default.createElement(u.Link,(0,r.default)({to:b,state:c,getProps:l,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,m.parsePath)(a).pathname)},onClick:function(t){return o&&o(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:c,replace:h})),!0}},f))},t}(d.default.Component);f.propTypes=(0,r.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var b=f;t.default=b;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var v=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=v;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),v(e)}},183:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(182),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(184),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(34);a.d(t,"parsePath",function(){return u.a});var m=i.a.createContext({}),p=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},184:function(e,t,a){var n;e.exports=(n=a(186))&&n.default||n},185:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},187:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAACXBIWXMAAC4jAAAuIwF4pT92AAAKmmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTExLTE0VDE5OjIxOjQyLTA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTExLTE2VDA3OjMzOjQ2LTA1OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0xMS0xNlQwNzozMzo0Ni0wNTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MGRjYjlmZTctYzg2OS00MTE4LTllOTEtY2I5OWVlODA5YzlkIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Y2NhNmY2ZGEtNjY5ZC1iMzQxLWJjY2QtZmRmZWRlNDRjMDg1IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MzgzYjc5MTctYjdhZS00YTc1LWIxN2ItNGM3ZTA2YjVjODQwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjE1MCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjE1MCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MzgzYjc5MTctYjdhZS00YTc1LWIxN2ItNGM3ZTA2YjVjODQwIiBzdEV2dDp3aGVuPSIyMDE4LTExLTE0VDE5OjIxOjQyLTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjM5MzNhNWIxLTg1OGUtNDdlYy04YjBlLTg2ZWNlYWNmNGExMiIgc3RFdnQ6d2hlbj0iMjAxOC0xMS0xNlQwNzozMzozMi0wNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozNTcyNmRiNS0yN2UwLTQwMmYtYWJkMy0yYjljN2U1NTlhOWIiIHN0RXZ0OndoZW49IjIwMTgtMTEtMTZUMDc6MzM6NDYtMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGRjYjlmZTctYzg2OS00MTE4LTllOTEtY2I5OWVlODA5YzlkIiBzdEV2dDp3aGVuPSIyMDE4LTExLTE2VDA3OjMzOjQ2LTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM1NzI2ZGI1LTI3ZTAtNDAyZi1hYmQzLTJiOWM3ZTU1OWE5YiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmVhZjg0MmUzLWE4YjMtZjY0NC1hYWY3LTM5YzE2YzdhNmY0NyIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjM4M2I3OTE3LWI3YWUtNGE3NS1iMTdiLTRj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"},188:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(193);t.a=function(e){return i.a.createElement(r.b.Provider,{value:{size:e.size,color:"#001D4A"}},i.a.createElement("div",null,e.children))}},189:function(e,t,a){"use strict";var n=a(7),i=a.n(n),r=a(0),l=a.n(r),o=a(183),s=function(e){return l.a.createElement("button",{className:"toggle-button"},l.a.createElement("div",{className:"toggle-buttton-line"}),l.a.createElement("div",{className:"toggle-buttton-line"}),l.a.createElement("div",{className:"toggle-buttton-line"}))},c=a(187),d=a.n(c),u=function(e){return l.a.createElement("header",{className:"menu"},l.a.createElement("div",{className:"menu-navigation"},l.a.createElement("div",{className:"sidebar-toggle-btn-div",onClick:e.toggleMenu},l.a.createElement(s,null)),l.a.createElement("div",{className:"constellation-icon"},l.a.createElement("img",{src:d.a})),l.a.createElement("div",{className:"spacer"}),l.a.createElement("div",{className:"menu-navigation-items"},l.a.createElement("ul",null,l.a.createElement("li",{className:"menu-item"},l.a.createElement(o.Link,{to:"/"},"Home")),l.a.createElement("li",{className:"menu-item"},l.a.createElement(o.Link,{to:"/travel"},"Travel")),l.a.createElement("li",{className:"menu-item"},l.a.createElement(o.Link,{to:"/activities"},"Activities"))))))},m=function(e){var t="sidebar";return e.show&&(t="sidebar open"),l.a.createElement("nav",{className:t},l.a.createElement("div",{onClick:e.hideSidebar,className:"sidebar-close-btn"},"x"),l.a.createElement("ul",null,l.a.createElement("li",{className:"sidebar-menu-item"},l.a.createElement(o.Link,{to:"/"},"Home")),l.a.createElement("li",{className:"sidebar-menu-item"},l.a.createElement(o.Link,{to:"/travel"},"Travel")),l.a.createElement("li",{className:"sidebar-menu-item"},l.a.createElement(o.Link,{to:"/activities"},"Things to Do"))))},p=function(e){return l.a.createElement("div",{onClick:e.hideSidebar,className:"backdrop"})},h=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={sidebarOpen:!1},t.sidebarToggleClickHandler=function(){t.setState(function(e){return{sidebarOpen:!e.sidebarOpen}})},t.backdropClickHandler=function(){t.setState({sidebarOpen:!1})},t}return i()(t,e),t.prototype.render=function(){var e;return this.state.sidebarOpen&&(e=l.a.createElement(p,{hideSidebar:this.backdropClickHandler})),l.a.createElement("div",{style:{height:"100%"}},l.a.createElement(u,{toggleMenu:this.sidebarToggleClickHandler}),l.a.createElement(m,{show:this.state.sidebarOpen,hideSidebar:this.backdropClickHandler}),e,this.props.children)},t}(l.a.Component);t.a=h},190:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}},191:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},192:function(e,t,a){e.exports=a.p+"static/travel_star_map-f7a7c5ddb3361d05755fcf079e197b22.png"},193:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return l});var n=a(0),i=a.n(n),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=i.a.createContext&&i.a.createContext(r)},195:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){return i.a.createElement("div",{className:"header",id:e.id,style:{backgroundImage:"url("+e.imgSrc+")"}},i.a.createElement("h1",{className:"header-title"},e.title))}},200:function(e,t,a){e.exports=a.p+"static/national_mall-9ed9a14882ab499e29b86009b77923af.jpg"},201:function(e,t,a){e.exports=a.p+"static/smithsonian_museum-031915a925fc97302f29d853457541f0.jpg"},202:function(e,t,a){e.exports=a.p+"static/georgetown-a3ff6904f5abd40d180a2834001a6cfb.jpg"},203:function(e,t,a){e.exports=a.p+"static/escape_room_2-117dee772bc070ca018b2f7eae1b9016.jpg"},204:function(e,t,a){e.exports=a.p+"static/great_falls-f8562115f189e94e377d5667559cf7db.jpg"},205:function(e,t,a){e.exports=a.p+"static/arlington-65c76da3fb9182b278657ab8aa290d9b.jpg"}}]);
//# sourceMappingURL=component---src-pages-activities-js-25165c9acc1318ed0c40.js.map