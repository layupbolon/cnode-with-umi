webpackJsonp([3],{303:function(e,t,n){"use strict";function r(e){switch(e){case"\u5168\u90e8":return"all";case"\u7cbe\u534e":return"good";case"\u5206\u4eab":return"share";case"\u95ee\u7b54":return"ask";case"\u62db\u8058":return"job";case"\u6d4b\u8bd5":return"dev";default:return"all"}}function o(e){var t=e.dispatch,n=e.selectedIndex;return w.a.createElement(B,{selectedIndex:n,className:V.a.head,values:["\u5168\u90e8","\u7cbe\u534e","\u5206\u4eab","\u95ee\u7b54","\u62db\u8058","\u6d4b\u8bd5"],onChange:function(e){t({type:"topicList/initState"}),t({type:"topicList/changeState",payload:{key:"headSelectedIndex",value:e.nativeEvent.selectedSegmentIndex}});var n=r(e.nativeEvent.value);t({type:"topicList/tabChange",payload:{tab:n}})}})}function i(e){return{selectedIndex:e.topicList.headSelectedIndex}}function a(e,t,n){return e[t][n]}function s(e,t){return e[t]}function c(e){for(var t=0,n=0;n<e.length;n++){t+=e[n].length}return t}function l(e){if(K()(e))return{};for(var t={},n=0;n<e.length;n++){var r=e[n];Z()(!t[r],"Value appears more than once in array: "+r),t[r]=!0}return t}function d(e){var t=0;do{isNaN(e.offsetTop)||(t+=e.offsetTop)}while(e=e.offsetParent);return t}function u(e){return e.touches&&e.touches.length?e.touches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}function h(e,t){var n=!0,r=!0;return function(o){n&&(n=!1,setTimeout(function(){n=!0,e(o)},t),r&&(e(o),r=!1))}}function p(e){window.document.body.scrollTop=e,window.document.documentElement.scrollTop=e}function f(e,t){var n=e.renderHeader,r=e.renderFooter,o=e.renderSectionHeader,i=e.renderBodyComponent,a=fe(e,["renderHeader","renderFooter","renderSectionHeader","renderBodyComponent"]),s=e.listPrefixCls,c={renderHeader:null,renderFooter:null,renderSectionHeader:null,renderBodyComponent:i||function(){return w.a.createElement("div",{className:s+"-body"})}};return n&&(c.renderHeader=function(){return w.a.createElement("div",{className:s+"-header"},n())}),r&&(c.renderFooter=function(){return w.a.createElement("div",{className:s+"-footer"},r())}),o&&(c.renderSectionHeader=t?function(e,t){return w.a.createElement("div",null,w.a.createElement(ve,{prefixCls:s},o(e,t)))}:function(e,t){return w.a.createElement(ve,{prefixCls:s},o(e,t))}),{restProps:a,extraProps:c}}function v(e){return{dataSource:e.topicList.topicDatasource}}function g(e){return w.a.createElement(De.a,{to:"/topicDetail/".concat(e.id)},w.a.createElement("div",{className:ze.a.listitem_wrap},w.a.createElement("div",{className:ze.a.listitem_up},w.a.createElement(Be.c,{iconType:e.top?"top":e.good?"good":e.tab,iconClassName:"icon"}),w.a.createElement("h4",{className:ze.a.listitem_up_h4},e.title)),w.a.createElement("div",{className:ze.a.listitem_down},w.a.createElement("div",{className:ze.a.left},w.a.createElement(Be.g,{imageUrl:e.author.avatar_url}),w.a.createElement("div",{className:ze.a.autherInfo},w.a.createElement("p",null,e.author.loginname),w.a.createElement("p",null,Object(Oe.a)(e.create_at)))),w.a.createElement("div",{className:ze.a.right},w.a.createElement("p",null,e.reply_count,"/",e.visit_count),w.a.createElement("p",null,Object(Oe.a)(e.last_reply_at))))))}function m(){return Me}Object.defineProperty(t,"__esModule",{value:!0});var S=n(0),w=n.n(S),_=n(57),y=(n(320),n(58),n(321),n(56)),C=n.n(y),R=n(8),E=n.n(R),b=n(9),I=n.n(b),k=n(11),L=n.n(k),x=n(12),H=n.n(x),T=n(41),N=n.n(T),P=n(149),D=function(e){function t(e){E()(this,t);var n=L()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selectedIndex:e.selectedIndex},n}return H()(t,e),I()(t,[{key:"componentWillReceiveProps",value:function(e){e.selectedIndex!==this.state.selectedIndex&&this.setState({selectedIndex:e.selectedIndex})}},{key:"onClick",value:function(e,t,n){var r=this.props,o=r.disabled,i=r.onChange,a=r.onValueChange;o||this.state.selectedIndex===t||(e.nativeEvent=e.nativeEvent?e.nativeEvent:{},e.nativeEvent.selectedSegmentIndex=t,e.nativeEvent.value=n,i&&i(e),a&&a(n),this.setState({selectedIndex:t}))}},{key:"renderSegmentItem",value:function(e,t,n){var r=this,o=this.props,i=o.prefixCls,a=o.disabled,s=o.tintColor,c=N()(i+"-item",C()({},i+"-item-selected",n)),l={color:n?"#fff":s,backgroundColor:n?s:"transparent",borderColor:s},d=s?{backgroundColor:s}:{};return w.a.createElement(P.a,{key:e,disabled:a,activeClassName:i+"-item-active"},w.a.createElement("div",{className:c,style:l,role:"tab","aria-selected":n&&!a,"aria-disabled":a,onClick:a?void 0:function(n){return r.onClick(n,e,t)}},w.a.createElement("div",{className:i+"-item-inner",style:d}),t))}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.prefixCls,o=t.style,i=t.disabled,a=t.values,s=void 0===a?[]:a,c=N()(n,r,C()({},r+"-disabled",i));return w.a.createElement("div",{className:c,style:o,role:"tablist"},s.map(function(t,n){return e.renderSegmentItem(n,t,n===e.state.selectedIndex)}))}}]),t}(w.a.Component),B=D;D.defaultProps={prefixCls:"am-segment",selectedIndex:0,disabled:!1,values:[],onChange:function(){},onValueChange:function(){},style:{},tintColor:""};var O=n(322),V=n.n(O),z=Object(_.connect)(i)(o),q=(n(150),n(323),n(4)),M=n.n(q),W=n(306),j=n.n(W),F=n(5),Q=n.n(F),A=n(84),U=n.n(A),Y=n(147),J=n.n(Y),X=n(324),K=n.n(X),G=n(2),Z=n.n(G),$=function(){function e(t){E()(this,e),J()(t&&"function"==typeof t.rowHasChanged,"Must provide a rowHasChanged function."),this._rowHasChanged=t.rowHasChanged,this._getRowData=t.getRowData||a,this._sectionHeaderHasChanged=t.sectionHeaderHasChanged,this._getSectionHeaderData=t.getSectionHeaderData||s,this._dataBlob=null,this._dirtyRows=[],this._dirtySections=[],this._cachedRowCount=0,this.rowIdentities=[],this.sectionIdentities=[]}return I()(e,[{key:"cloneWithRows",value:function(e,t){var n=t?[t]:null;return this._sectionHeaderHasChanged||(this._sectionHeaderHasChanged=function(){return!1}),this.cloneWithRowsAndSections({s1:e},["s1"],n)}},{key:"cloneWithRowsAndSections",value:function(t,n,r){J()("function"==typeof this._sectionHeaderHasChanged,"Must provide a sectionHeaderHasChanged function with section data."),J()(!n||!r||n.length===r.length,"row and section ids lengths must be the same");var o=new e({getRowData:this._getRowData,getSectionHeaderData:this._getSectionHeaderData,rowHasChanged:this._rowHasChanged,sectionHeaderHasChanged:this._sectionHeaderHasChanged});return o._dataBlob=t,o.sectionIdentities=n||Object.keys(t),r?o.rowIdentities=r:(o.rowIdentities=[],o.sectionIdentities.forEach(function(e){o.rowIdentities.push(Object.keys(t[e]))})),o._cachedRowCount=c(o.rowIdentities),o._calculateDirtyArrays(this._dataBlob,this.sectionIdentities,this.rowIdentities),o}},{key:"getRowCount",value:function(){return this._cachedRowCount}},{key:"getRowAndSectionCount",value:function(){return this._cachedRowCount+this.sectionIdentities.length}},{key:"rowShouldUpdate",value:function(e,t){var n=this._dirtyRows[e][t];return Z()(void 0!==n,"missing dirtyBit for section, row: "+e+", "+t),n}},{key:"getRowData",value:function(e,t){var n=this.sectionIdentities[e],r=this.rowIdentities[e][t];return Z()(void 0!==n&&void 0!==r,"rendering invalid section, row: "+e+", "+t),this._getRowData(this._dataBlob,n,r)}},{key:"getRowIDForFlatIndex",value:function(e){for(var t=e,n=0;n<this.sectionIdentities.length;n++){if(!(t>=this.rowIdentities[n].length))return this.rowIdentities[n][t];t-=this.rowIdentities[n].length}return null}},{key:"getSectionIDForFlatIndex",value:function(e){for(var t=e,n=0;n<this.sectionIdentities.length;n++){if(!(t>=this.rowIdentities[n].length))return this.sectionIdentities[n];t-=this.rowIdentities[n].length}return null}},{key:"getSectionLengths",value:function(){for(var e=[],t=0;t<this.sectionIdentities.length;t++)e.push(this.rowIdentities[t].length);return e}},{key:"sectionHeaderShouldUpdate",value:function(e){var t=this._dirtySections[e];return Z()(void 0!==t,"missing dirtyBit for section: "+e),t}},{key:"getSectionHeaderData",value:function(e){if(!this._getSectionHeaderData)return null;var t=this.sectionIdentities[e];return Z()(void 0!==t,"renderSection called on invalid section: "+e),this._getSectionHeaderData(this._dataBlob,t)}},{key:"_calculateDirtyArrays",value:function(e,t,n){for(var r=l(t),o={},i=0;i<n.length;i++){var a=t[i];Z()(!o[a],"SectionID appears more than once: "+a),o[a]=l(n[i])}this._dirtySections=[],this._dirtyRows=[];for(var s,c=0;c<this.sectionIdentities.length;c++){var a=this.sectionIdentities[c];s=!r[a];var d=this._sectionHeaderHasChanged;!s&&d&&(s=d(this._getSectionHeaderData(e,a),this._getSectionHeaderData(this._dataBlob,a))),this._dirtySections.push(!!s),this._dirtyRows[c]=[];for(var u=0;u<this.rowIdentities[c].length;u++){var h=this.rowIdentities[c][u];s=!r[a]||!o[a][h]||this._rowHasChanged(this._getRowData(e,a,h),this._getRowData(this._dataBlob,a,h)),this._dirtyRows[c].push(!!s)}}}}]),e}(),ee=$,te={className:Q.a.string,prefixCls:Q.a.string,listPrefixCls:Q.a.string,listViewPrefixCls:Q.a.string,style:Q.a.object,contentContainerStyle:Q.a.object,onScroll:Q.a.func},ne=function(e){function t(){var e,n,r,o;E()(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=r=L()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),re.call(r),o=n,L()(r,o)}return H()(t,e),I()(t,[{key:"componentWillUpdate",value:function(e){this.props.dataSource===e.dataSource&&this.props.initialListSize===e.initialListSize||!this.handleScroll||(this.props.useBodyScroll?window.removeEventListener("scroll",this.handleScroll):this.ScrollViewRef.removeEventListener("scroll",this.handleScroll))}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.dataSource===e.dataSource&&this.props.initialListSize===e.initialListSize||!this.handleScroll||setTimeout(function(){t.props.useBodyScroll?window.addEventListener("scroll",t.handleScroll):t.ScrollViewRef.addEventListener("scroll",t.handleScroll)},0)}},{key:"componentDidMount",value:function(){var e=this,t=function(t){return e.props.onScroll&&e.props.onScroll(t,e.getMetrics())};this.props.scrollEventThrottle&&(t=h(t,this.props.scrollEventThrottle)),this.handleScroll=t,this.onLayout=function(){return e.props.onLayout({nativeEvent:{layout:{width:window.innerWidth,height:window.innerHeight}}})},this.props.useBodyScroll?(window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.onLayout)):this.ScrollViewRef.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){this.props.useBodyScroll?(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.onLayout)):this.ScrollViewRef.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.className,o=t.prefixCls,i=t.listPrefixCls,a=t.listViewPrefixCls,s=t.style,c=void 0===s?{}:s,l=t.contentContainerStyle,d=void 0===l?{}:l,u=t.useBodyScroll,h=t.pullToRefresh,p={position:"relative",overflow:"auto",WebkitOverflowScrolling:"touch"},f=o||a||"",v={ref:function(t){return e.ScrollViewRef=t||e.ScrollViewRef},style:M()({},u?{}:p,c),className:N()(r,f+"-scrollview")},g={ref:function(t){return e.InnerScrollViewRef=t},style:M()({position:"absolute",minWidth:"100%"},d),className:N()(f+"-scrollview-content",i)},m=function(t){return w.a.cloneElement(h,{getScrollContainer:t?function(){return document.body}:function(){return e.ScrollViewRef}},n)};return u?h?w.a.createElement("div",v,m(!0)):w.a.createElement("div",v,n):h?w.a.createElement("div",v,w.a.createElement("div",g,m())):w.a.createElement("div",v,w.a.createElement("div",g,n))}}]),t}(w.a.Component);ne.propTypes=te;var re=function(){var e=this;this.getMetrics=function(){var t=!e.props.horizontal;if(e.props.useBodyScroll){var n=document.scrollingElement?document.scrollingElement:document.body;return{visibleLength:window[t?"innerHeight":"innerWidth"],contentLength:e.ScrollViewRef?e.ScrollViewRef[t?"scrollHeight":"scrollWidth"]:0,offset:n[t?"scrollTop":"scrollLeft"]}}return{visibleLength:e.ScrollViewRef[t?"offsetHeight":"offsetWidth"],contentLength:e.ScrollViewRef[t?"scrollHeight":"scrollWidth"],offset:e.ScrollViewRef[t?"scrollTop":"scrollLeft"]}},this.getInnerViewNode=function(){return e.InnerScrollViewRef},this.scrollTo=function(){if(e.props.useBodyScroll){var t;(t=window).scrollTo.apply(t,arguments)}else e.ScrollViewRef.scrollLeft=arguments.length<=0?void 0:arguments[0],e.ScrollViewRef.scrollTop=arguments.length<=1?void 0:arguments[1]}},oe=ne,ie=function(e){function t(){return E()(this,t),L()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return H()(t,e),I()(t,[{key:"shouldComponentUpdate",value:function(e){return e.shouldUpdate}},{key:"render",value:function(){return this.props.render()}}]),t}(w.a.Component),ae=function(e){function t(){var e,n,r,o;E()(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=r=L()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),se.call(r),o=n,L()(r,o)}return H()(t,e),I()(t,[{key:"componentWillMount",value:function(){this.scrollProperties={visibleLength:null,contentLength:null,offset:0},this._childFrames=[],this._visibleRows={},this._prevRenderedRowsCount=0,this._sentEndForContentLength=null}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.props.dataSource===e.dataSource&&this.props.initialListSize===e.initialListSize||this.setState(function(n,r){return t._prevRenderedRowsCount=0,{curRenderedRowsCount:Math.min(Math.max(n.curRenderedRowsCount,e.initialListSize),e.dataSource.getRowCount())}},function(){return t._renderMoreRowsIfNeeded()})}},{key:"render",value:function(){for(var e=this,t=this.props.dataSource,n=t.rowIdentities,r=[],o=0,i=0;i<n.length;i++){var a=t.sectionIdentities[i],s=n[i];if(0!==s.length){var c=void 0;if(this.props.renderSectionHeader){var l=o>=this._prevRenderedRowsCount&&t.sectionHeaderShouldUpdate(i);c=w.a.createElement(ie,{key:"s_"+a,shouldUpdate:!!l,render:this.props.renderSectionHeader.bind(null,t.getSectionHeaderData(i),a)})}for(var d=[],u=0;u<s.length;u++){var h=s[u],p=a+"_"+h,f=o>=this._prevRenderedRowsCount&&t.rowShouldUpdate(i,u),v=w.a.createElement(ie,{key:"r_"+p,shouldUpdate:!!f,render:this.props.renderRow.bind(null,t.getRowData(i,u),a,h,this.onRowHighlighted)});if(d.push(v),this.props.renderSeparator&&(u!==s.length-1||i===n.length-1)){var g=this.state.highlightedRow.sectionID===a&&(this.state.highlightedRow.rowID===h||this.state.highlightedRow.rowID===s[u+1]),m=this.props.renderSeparator(a,h,g);m&&d.push(m)}if(++o===this.state.curRenderedRowsCount)break}var S=w.a.cloneElement(this.props.renderSectionBodyWrapper(a),{className:this.props.sectionBodyClassName},d);if(this.props.renderSectionWrapper?r.push(w.a.cloneElement(this.props.renderSectionWrapper(a),{},c,S)):(r.push(c),r.push(S)),o>=this.state.curRenderedRowsCount)break}}var _=this.props,y=_.renderScrollComponent,C=j()(_,["renderScrollComponent"]);return w.a.cloneElement(y(M()({},C,{onScroll:this._onScroll})),{ref:function(t){return e.ListViewRef=t},onContentSizeChange:this._onContentSizeChange,onLayout:this._onLayout},this.props.renderHeader?this.props.renderHeader():null,w.a.cloneElement(C.renderBodyComponent(),{},r),this.props.renderFooter?this.props.renderFooter():null,C.children)}}]),t}(w.a.Component);ae.DataSource=ee,ae.propTypes=M()({},oe.propTypes,{dataSource:Q.a.instanceOf(ee).isRequired,renderSeparator:Q.a.func,renderRow:Q.a.func.isRequired,initialListSize:Q.a.number,onEndReached:Q.a.func,onEndReachedThreshold:Q.a.number,pageSize:Q.a.number,renderFooter:Q.a.func,renderHeader:Q.a.func,renderSectionHeader:Q.a.func,renderScrollComponent:Q.a.func,scrollRenderAheadDistance:Q.a.number,onChangeVisibleRows:Q.a.func,scrollEventThrottle:Q.a.number,renderBodyComponent:Q.a.func,renderSectionWrapper:Q.a.func,renderSectionBodyWrapper:Q.a.func,sectionBodyClassName:Q.a.string,listViewPrefixCls:Q.a.string,useBodyScroll:Q.a.bool}),ae.defaultProps={initialListSize:10,pageSize:1,renderScrollComponent:function(e){return w.a.createElement(oe,e)},renderBodyComponent:function(){return w.a.createElement("div",null)},renderSectionBodyWrapper:function(e){return w.a.createElement("div",{key:e})},sectionBodyClassName:"list-view-section-body",listViewPrefixCls:"rmc-list-view",scrollRenderAheadDistance:1e3,onEndReachedThreshold:1e3,scrollEventThrottle:50,scrollerOptions:{}};var se=function(){var e=this;this.state={curRenderedRowsCount:this.props.initialListSize,highlightedRow:{}},this.getMetrics=function(){return{contentLength:e.scrollProperties.contentLength,totalRows:e.props.dataSource.getRowCount(),renderedRows:e.state.curRenderedRowsCount,visibleRows:Object.keys(e._visibleRows).length}},this.getInnerViewNode=function(){return e.ListViewRef.getInnerViewNode()},this.scrollTo=function(){var t;e.ListViewRef&&e.ListViewRef.scrollTo&&(t=e.ListViewRef).scrollTo.apply(t,arguments)},this.onRowHighlighted=function(t,n){e.setState({highlightedRow:{sectionID:t,rowID:n}})},this._onContentSizeChange=function(t,n){var r=e.props.horizontal?t:n;r!==e.scrollProperties.contentLength&&(e.scrollProperties.contentLength=r,e._renderMoreRowsIfNeeded()),e.props.onContentSizeChange&&e.props.onContentSizeChange(t,n)},this._onLayout=function(t){var n=t.nativeEvent.layout,r=n.width,o=n.height,i=e.props.horizontal?r:o;i!==e.scrollProperties.visibleLength&&(e.scrollProperties.visibleLength=i,e._renderMoreRowsIfNeeded()),e.props.onLayout&&e.props.onLayout(t)},this._maybeCallOnEndReached=function(t){return!!(e.props.onEndReached&&e.scrollProperties.contentLength!==e._sentEndForContentLength&&e._getDistanceFromEnd(e.scrollProperties)<e.props.onEndReachedThreshold&&e.state.curRenderedRowsCount===e.props.dataSource.getRowCount())&&(e._sentEndForContentLength=e.scrollProperties.contentLength,e.props.onEndReached(t),!0)},this._renderMoreRowsIfNeeded=function(){if(null===e.scrollProperties.contentLength||null===e.scrollProperties.visibleLength||e.state.curRenderedRowsCount===e.props.dataSource.getRowCount())return void e._maybeCallOnEndReached();e._getDistanceFromEnd(e.scrollProperties)<e.props.scrollRenderAheadDistance&&e._pageInNewRows()},this._pageInNewRows=function(){e.setState(function(t,n){var r=Math.min(t.curRenderedRowsCount+n.pageSize,n.dataSource.getRowCount());return e._prevRenderedRowsCount=t.curRenderedRowsCount,{curRenderedRowsCount:r}},function(){e._prevRenderedRowsCount=e.state.curRenderedRowsCount})},this._getDistanceFromEnd=function(e){return e.contentLength-e.visibleLength-e.offset},this._onScroll=function(t,n){e.ListViewRef&&(e.scrollProperties=n,e._maybeCallOnEndReached(t)||e._renderMoreRowsIfNeeded(),e.props.onEndReached&&e._getDistanceFromEnd(e.scrollProperties)>e.props.onEndReachedThreshold&&(e._sentEndForContentLength=null),e.props.onScroll&&e.props.onScroll(t))}},ce=ae,le=function(e){function t(e){E()(this,t);var n=L()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return de.call(n),n.state={pageSize:e.pageSize,_delay:!1},n}return H()(t,e),I()(t,[{key:"componentDidMount",value:function(){this.dataChange(this.props),this.getQsInfo()}},{key:"componentWillReceiveProps",value:function(e){this.props.dataSource!==e.dataSource&&this.dataChange(e)}},{key:"componentDidUpdate",value:function(){this.getQsInfo()}},{key:"componentWillUnmount",value:function(){this._timer&&clearTimeout(this._timer),this._hCache=null}},{key:"renderQuickSearchBar",value:function(e,t){var n=this,r=this.props,o=r.dataSource,i=r.prefixCls,a=o.sectionIdentities.map(function(e){return{value:e,label:o._getSectionHeaderData(o._dataBlob,e)}});return w.a.createElement("ul",{ref:function(e){return n.quickSearchBarRef=e},className:i+"-quick-search-bar",style:t,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd},w.a.createElement("li",{"data-qf-target":e.value,onClick:function(){return n.onQuickSearchTop(void 0,e.value)}},e.label),a.map(function(e){return w.a.createElement("li",{key:e.value,"data-qf-target":e.value,onClick:function(){return n.onQuickSearch(e.value)}},e.label)}))}},{key:"render",value:function(){var e,t=this,n=this.state,r=n._delay,o=n.pageSize,i=this.props,a=i.className,s=i.prefixCls,c=i.children,l=i.quickSearchBarTop,d=i.quickSearchBarStyle,u=i.initialListSize,h=void 0===u?Math.min(20,this.props.dataSource.getRowCount()):u,p=i.showQuickSearchIndicator,f=i.renderSectionHeader,v=i.sectionHeaderClassName,g=j()(i,["className","prefixCls","children","quickSearchBarTop","quickSearchBarStyle","initialListSize","showQuickSearchIndicator","renderSectionHeader","sectionHeaderClassName"]);return w.a.createElement("div",{className:s+"-container"},r&&this.props.delayActivityIndicator,w.a.createElement(ce,M()({},g,{ref:function(e){return t.indexedListViewRef=e},className:N()(s,a),initialListSize:h,pageSize:o,renderSectionHeader:function(e,n){return w.a.cloneElement(f(e,n),{ref:function(e){return t.sectionComponents[n]=e},className:v||s+"-section-header"})}}),c),this.renderQuickSearchBar(l,d),p?w.a.createElement("div",{className:N()((e={},C()(e,s+"-qsindicator",!0),C()(e,s+"-qsindicator-hide",!p||!this.state.showQuickSearchIndicator),e)),ref:function(e){return t.qsIndicatorRef=e}}):null)}}]),t}(w.a.Component);le.propTypes=M()({},ce.propTypes,{children:Q.a.any,prefixCls:Q.a.string,className:Q.a.string,sectionHeaderClassName:Q.a.string,quickSearchBarTop:Q.a.object,quickSearchBarStyle:Q.a.object,onQuickSearch:Q.a.func,showQuickSearchIndicator:Q.a.bool}),le.defaultProps={prefixCls:"rmc-indexed-list",quickSearchBarTop:{value:"#",label:"#"},onQuickSearch:function(){},showQuickSearchIndicator:!1,delayTime:100,delayActivityIndicator:""};var de=function(){var e=this;this.onQuickSearchTop=function(t,n){e.props.useBodyScroll?p(0):U.a.findDOMNode(e.indexedListViewRef.ListViewRef).scrollTop=0,e.props.onQuickSearch(t,n)},this.onQuickSearch=function(t){var n=U.a.findDOMNode(e.indexedListViewRef.ListViewRef),r=U.a.findDOMNode(e.sectionComponents[t]);e.props.useBodyScroll?p(r.getBoundingClientRect().top-n.getBoundingClientRect().top+d(n)):n.scrollTop+=r.getBoundingClientRect().top-n.getBoundingClientRect().top,e.props.onQuickSearch(t)},this.onTouchStart=function(t){e._target=t.target,e._basePos=e.quickSearchBarRef.getBoundingClientRect(),document.addEventListener("touchmove",e._disableParent,!1),document.body.className=document.body.className+" "+e.props.prefixCls+"-qsb-moving",e.updateIndicator(e._target)},this.onTouchMove=function(t){if(t.preventDefault(),e._target){var n=u(t),r=e._basePos,o=void 0;if(n.clientY>=r.top&&n.clientY<=r.top+e._qsHeight){o=Math.floor((n.clientY-r.top)/e._avgH);var i=void 0;if(o in e._hCache&&(i=e._hCache[o][0]),i){var a=i.getAttribute("data-qf-target");e._target!==i&&(e.props.quickSearchBarTop.value===a?e.onQuickSearchTop(void 0,a):e.onQuickSearch(a),e.updateIndicator(i)),e._target=i}}}},this.onTouchEnd=function(){e._target&&(document.removeEventListener("touchmove",e._disableParent,!1),document.body.className=document.body.className.replace(new RegExp("\\s*"+e.props.prefixCls+"-qsb-moving","g"),""),e.updateIndicator(e._target,!0),e._target=null)},this.getQsInfo=function(){var t=e.quickSearchBarRef,n=t.offsetHeight,r=[];[].slice.call(t.querySelectorAll("[data-qf-target]")).forEach(function(e){r.push([e])});for(var o=n/r.length,i=0,a=0,s=r.length;a<s;a++)i=a*o,r[a][1]=[i,i+o];e._qsHeight=n,e._avgH=o,e._hCache=r},this.sectionComponents={},this.dataChange=function(t){var n=t.dataSource.getRowCount();n&&(e.setState({_delay:!0}),e._timer&&clearTimeout(e._timer),e._timer=setTimeout(function(){e.setState({pageSize:n,_delay:!1},function(){return e.indexedListViewRef._pageInNewRows()})},t.delayTime))},this.updateIndicator=function(t,n){var r=t;r.getAttribute("data-qf-target")||(r=r.parentNode),e.props.showQuickSearchIndicator&&(e.qsIndicatorRef.innerText=r.innerText.trim(),e.setState({showQuickSearchIndicator:!0}),e._indicatorTimer&&clearTimeout(e._indicatorTimer),e._indicatorTimer=setTimeout(function(){e.setState({showQuickSearchIndicator:!1})},1e3));var o=e.props.prefixCls+"-quick-search-bar-over";e._hCache.forEach(function(e){e[0].className=e[0].className.replace(o,"")}),n||(r.className=r.className+" "+o)},this._disableParent=function(e){e.preventDefault(),e.stopPropagation()}},ue=le;ce.IndexedList=ue;var he=(ce.DataSource,ce),pe=n(151),fe=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]]);return n},ve=pe.a.Item,ge=he.IndexedList,me=function(e){function t(){return E()(this,t),L()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return H()(t,e),I()(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,r=t.listPrefixCls,o=f(this.props,!0),i=o.restProps,a=o.extraProps;return w.a.createElement(ge,M()({ref:function(t){return e.indexedListRef=t},sectionHeaderClassName:n+"-section-header "+r+"-body",sectionBodyClassName:n+"-section-body "+r+"-body"},i,a),this.props.children)}}]),t}(w.a.Component),Se=me;me.defaultProps={prefixCls:"am-indexed-list",listPrefixCls:"am-list",listViewPrefixCls:"am-list-view"};var we=function(e){function t(){E()(this,t);var e=L()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.scrollTo=function(){var t;return(t=e.listviewRef).scrollTo.apply(t,arguments)},e.getInnerViewNode=function(){return e.listviewRef.getInnerViewNode()},e}return H()(t,e),I()(t,[{key:"render",value:function(){var e=this,t=f(this.props,!1),n=t.restProps,r=t.extraProps;return w.a.createElement(he,M()({ref:function(t){return e.listviewRef=t}},n,r))}}]),t}(w.a.Component),_e=we;we.defaultProps={prefixCls:"am-list-view",listPrefixCls:"am-list"},we.DataSource=he.DataSource,we.IndexedList=Se;var ye=n(85),Ce=n.n(ye),Re=n(86),Ee=n.n(Re),be=n(87),Ie=n.n(be),ke=n(88),Le=n.n(ke),xe=n(89),He=n.n(xe),Te=function(e){function t(e){var n;Ee()(this,t),n=Le()(this,(t.__proto__||Ce()(t)).call(this,e)),n.onEndReached=function(e){n.state.isLoading||(n.setState({isLoading:!0}),setTimeout(function(){n.props.dispatch({type:"topicList/getNextPageTopicData"}),n.setState({isLoading:!1})},300))};var r=new _e.DataSource({rowHasChanged:function(e,t){return e!==t}}),o=r.cloneWithRows(n.props.dataSource);return n.state={dataSource:o,isLoading:!0,height:3*document.documentElement.clientHeight/4},n}return He()(t,e),Ie()(t,[{key:"componentDidMount",value:function(){var e=this,t=document.documentElement.clientHeight-U.a.findDOMNode(this.lv).parentNode.offsetTop;setTimeout(function(){e.setState({dataSource:e.state.dataSource.cloneWithRows(e.props.dataSource),isLoading:!1,height:t})},600)}},{key:"componentWillReceiveProps",value:function(e){e.dataSource!==this.props.dataSource&&this.setState({dataSource:this.state.dataSource.cloneWithRows(e.dataSource)})}},{key:"render",value:function(){var e=this,t=function(e,t){return w.a.createElement("div",{key:"".concat(e,"-").concat(t),style:{backgroundColor:"#F5F5F9",height:3,borderTop:"1px solid #ECECED",borderBottom:"1px solid #ECECED"}})};return w.a.createElement(_e,{ref:function(t){return e.lv=t},dataSource:this.state.dataSource,renderRow:qe,renderSeparator:t,pageSize:10,onScroll:function(){},style:{marginTop:"2.5rem"},useBodyScroll:!0,className:"am-list",scrollRenderAheadDistance:300,onEndReached:this.onEndReached,onEndReachedThreshold:10})}}]),t}(w.a.PureComponent),Ne=Object(_.connect)(v)(Te),Pe=n(148),De=n.n(Pe),Be=n(146),Oe=n(43),Ve=n(325),ze=n.n(Ve),qe=g,Me=w.a.createElement("div",null,w.a.createElement(z,null),w.a.createElement(Ne,null),w.a.createElement(Be.b,{selectedIndex:0}));t.default=Object(_.connect)()(m)},306:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},320:function(e,t){e.exports={clear:"clear___2SXbw"}},321:function(e,t){},322:function(e,t){e.exports={head:"head___wwBLw"}},323:function(e,t){},324:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return 0===e.length;if("object"==typeof e){if(e){o(e)&&void 0!==e.size&&i(!1);for(var t in e)return!1}return!0}return!e}function o(e){return"undefined"!=typeof Symbol&&e[Symbol.iterator]}var i=n(147);e.exports=r},325:function(e,t){e.exports={listitem_wrap:"listitem_wrap___3FKB1",listitem_up:"listitem_up___20Mwb",listitem_up_h4:"listitem_up_h4___3bNzX",listitem_down:"listitem_down___338AM",left:"left___3wl77",autherInfo:"autherInfo___5qI2i",right:"right___DvnJR"}}});