/*
Copyright (c) 2012 jqWidgets.
http://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxPanel","",{});a.extend(a.jqx._jqxPanel.prototype,{defineInstance:function(){this.width=null;this.height=null;this.disabled=false;this.scrollBarSize=15;this.sizeMode="fixed";this.autoUpdate=false;this.autoUpdateInterval=10;this.events=["layout",]},createInstance:function(e){var i=this;this.host.addClass(this.toThemeProperty("jqx-panel"));this.host.addClass(this.toThemeProperty("jqx-rc-all"));var d=a("<div tabIndex=0 style='background-color: transparent; -webkit-appearance: none; outline: none; width:100%; height: 100%; align:left; border: 0px; padding: 0px; margin: 0px; left: 0px; top: 0px; valign:top; position: relative;'><div id='panelWrapper' tabIndex=0 style='background-color: transparent; -webkit-appearance: none; outline: none; width:100%; overflow: hidden; height: 100%; padding: 0px; margin: 0px; align:left; left: 0px; top: 0px; valign:top; position: relative;'><div id='panelContent' tabIndex=0 style='background-color: transparent; -webkit-appearance: none; outline: none; border: none; padding: 0px; overflow: hidden; margin: 0px; align:left; valign:top; left: 0px; top: 0px; position: absolute;'/><div id='verticalScrollBar' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'/><div id='horizontalScrollBar' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'/><div id='bottomRight' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'/></div></div>");var b=this.host.css("height");var h=this.host.css("width");if(this.width==null){this.width=h}if(this.height==null){this.height=b}this.host.wrapInner(d);var f=this.host.find("#verticalScrollBar");this.vScrollBar=f.jqxScrollBar({vertical:true,theme:this.theme});var j=this.host.find("#horizontalScrollBar");this.hScrollBar=j.jqxScrollBar({vertical:false,theme:this.theme});this.content=this.host.find("#panelContent");this.bottomRight=this.host.find("#bottomRight").addClass(this.toThemeProperty("jqx-panel-bottomright"));this.vScrollBar.css("visibility","visible");this.hScrollBar.css("visibility","visible");this.vScrollInstance=a.data(this.vScrollBar[0],"jqxScrollBar").instance;this.hScrollInstance=a.data(this.hScrollBar[0],"jqxScrollBar").instance;var g=this;this.propertyChangeMap.disabled=function(k,m,l,n){g.vScrollBar.jqxScrollBar({disabled:g.disabled});g.hScrollBar.jqxScrollBar({disabled:g.disabled})};this.vScrollBar.jqxScrollBar({disabled:this.disabled});this.hScrollBar.jqxScrollBar({disabled:this.disabled});this._addHandlers();this._arrange();a(window).resize(function(){i._arrange()});this.contentWidth=g.content[0].scrollWidth;this.contentHeight=g.content[0].scrollHeight;if(this.autoUpdate){g._autoUpdate()}this.propertyChangeMap.autoUpdate=function(k,m,l,n){if(g.autoUpdate){g._autoUpdate()}else{clearInterval(g.autoUpdateId);g.autoUpdateId=null}};a(window).bind("unload",function(){if(g.autoUpdateId!=null){clearInterval(g.autoUpdateId);g.autoUpdateId=null;g.destroy()}});var c=a.jqx.mobile.isTouchDevice();if(c){a.jqx.mobile.touchScroll(this.element,i.vScrollInstance.max,function(m,l){if(i.vScrollBar.css("visibility")=="visible"){var k=i.vScrollInstance.value;i.vScrollInstance.setPosition(k+l)}if(i.hScrollBar.css("visibility")=="visible"){var k=i.hScrollInstance.value;i.hScrollInstance.setPosition(k+m)}})}},append:function(b){if(b!=null){this.content.append(b);this._arrange()}},prepend:function(b){if(b!=null){this.content.prepend(b);this._arrange()}},clearcontent:function(){this.content.text("");this.content.children().remove();this._arrange()},remove:function(b){if(b!=null){a(b).remove();this._arrange()}},_autoUpdate:function(){var b=this;this.autoUpdateId=setInterval(function(){var d=b.content[0].scrollWidth;var c=b.content[0].scrollHeight;var e=false;if(b.contentWidth!=d){b.contentWidth=d;e=true}if(b.contentHeight!=c){b.contentHeight=c;e=true}if(e){b._arrange()}},this.autoUpdateInterval)},_addHandlers:function(){var b=this;this.addHandler(this.vScrollBar,"valuechanged",function(c){b._render(b)});this.addHandler(this.hScrollBar,"valuechanged",function(c){b._render(b)});this.addHandler(this.host,"mousewheel",function(c){b.wheel(c,b)});this.addHandler(this.content,"mouseleave",function(c){b.focused=false});this.addHandler(this.content,"focus",function(c){b.focused=true});this.addHandler(this.content,"blur",function(c){b.focused=false});this.addHandler(this.content,"mouseenter",function(c){b.focused=true})},_removeHandlers:function(){var b=this;this.removeHandler(this.vScrollBar,"valuechanged");this.removeHandler(this.hScrollBar,"valuechanged");this.removeHandler(this.host,"mousewheel");this.removeHandler(this.content,"mouseleave");this.removeHandler(this.content,"focus");this.removeHandler(this.content,"blur");this.removeHandler(this.content,"mouseenter")},wheel:function(d,c){var e=0;if(!d){d=window.event}if(d.wheelDelta){e=d.wheelDelta/120}else{if(d.detail){e=-d.detail/3}}if(e){var b=c._handleDelta(e);if(!b){if(d.preventDefault){d.preventDefault()}return b}else{return}}if(d.preventDefault){d.preventDefault()}d.returnValue=false},scrollDown:function(){if(this.vScrollBar.css("visibility")=="hidden"){return}var b=this.vScrollInstance;if(b.value+b.largestep<=b.max){b.setPosition(b.value+b.largestep)}else{b.setPosition(b.max)}},scrollUp:function(){if(this.vScrollBar.css("visibility")=="hidden"){return}var b=this.vScrollInstance;if(b.value-b.largestep>=b.min){b.setPosition(b.value-b.largestep)}else{b.setPosition(b.min)}},_handleDelta:function(d){if(this.focused){var c=this.vScrollInstance.value;if(d<0){this.scrollDown()}else{this.scrollUp()}var b=this.vScrollInstance.value;if(c!=b){return false}}return true},_render:function(c){if(c==undefined){c=this}var b=c.vScrollInstance.value;var d=c.hScrollInstance.value;c.content.css({left:-d,top:-b})},scrollTo:function(c,b){if(c==undefined||b==undefined){return}this.vScrollInstance.setPosition(b);this.hScrollInstance.setPosition(c)},getScrollHeight:function(){return this.vScrollInstance.max},getVScrollPosition:function(){return this.vScrollInstance.value},getScrollWidth:function(){return this.hScrollInstance.max},getHScrollPosition:function(){return this.hScrollInstance.value},_arrange:function(){if(this.width!=null&&this.width.toString().indexOf("px")!=-1){this.host.width(this.width)}else{if(this.width!=undefined&&!isNaN(this.width)){this.host.width(this.width)}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){this.host.height(this.height)}else{if(this.height!=undefined&&!isNaN(this.height)){this.host.height(this.height)}}var d=null;var p=null;if(a.browser.msie&&a.browser.version<8){var h=parseInt(this.content.css("left"));this.content.css("left",0)}var c=parseInt(this.content[0].scrollWidth);a.each(this.content.children(),function(){c=Math.max(c,a(this).outerWidth())});if(a.browser.msie&&a.browser.version<8){c-=20;this.content.css("left",h)}if(c<parseInt(this.host.width())){c=parseInt(this.host.width())}var o=parseInt(this.content[0].scrollHeight);if(this.sizeMode=="wrap"){this.host.width(c);this.host.height(o);this.vScrollBar.css("visibility","hidden");this.hScrollBar.css("visibility","hidden");return}var k=4+parseInt(this.scrollBarSize);var j=k+o-parseInt(this.host.height());var g=k+c-parseInt(this.host.width());if(j>k){if(g<=0){j=o-parseInt(this.host.height())}this.vScrollBar.jqxScrollBar({max:j});this.vScrollBar.css("visibility","visible")}else{this.vScrollBar.jqxScrollBar("setPosition",0);this.vScrollBar.css("visibility","hidden")}if(g>k){if(j<=0){g=c-parseInt(this.host.width())}this.hScrollBar.jqxScrollBar({max:g});this.hScrollBar.css("visibility","visible")}else{this.hScrollBar.css("visibility","hidden");if(this.vScrollBar.css("visibility")=="visible"){var l=this;l.content.width(c-k)}}if(this.width!=null&&this.width.toString().indexOf("px")!=-1){d=this.width}else{if(this.width!=undefined&&!isNaN(this.width)){d=this.width}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){p=this.height}else{if(this.height!=undefined&&!isNaN(this.height)){p=this.height}}var n=this.host.css("border-width");if(n==null){n=0}if(d!=null){d=parseInt(d);this.host.width(this.width)}if(p!=null){p=parseInt(p);this.host.height(this.height)}var b=this.scrollBarSize;if(isNaN(b)){b=parseInt(b);if(isNaN(b)){b="17px"}else{b=b+"px"}}b=parseInt(b);var i=4;var r=2;var m=0;if(this.vScrollBar.css("visibility")=="visible"){m=b+i}if(this.hScrollBar.css("visibility")=="visible"){r=b+i}this.hScrollBar.height(b);this.hScrollBar.css({top:p-i-b+"px",left:"0px"});this.hScrollBar.width(d-b-i+"px");if(m==0){this.hScrollBar.width(d-2)}if(this.vScrollBar.css("visibility")!="hidden"){this.vScrollBar.width(b)}else{this.vScrollBar.width(0)}this.vScrollBar.height(parseInt(p)-r+"px");this.vScrollBar.css({left:parseInt(d)-parseInt(b)-i+"px",top:"0px"});var f=this.vScrollInstance;f.disabled=this.disabled;f.refresh();var e=this.hScrollInstance;e.disabled=this.disabled;e.refresh();if((this.vScrollBar.css("visibility")=="visible")&&(this.hScrollBar.css("visibility")=="visible")){this.bottomRight.css("visibility","visible");this.bottomRight.css({left:1+parseInt(this.vScrollBar.css("left")),top:1+parseInt(this.hScrollBar.css("top"))});this.bottomRight.width(parseInt(b)+3);this.bottomRight.height(parseInt(b)+3)}else{this.bottomRight.css("visibility","hidden")}this._raiseevent(0);var q=this},destroy:function(){this._removeHandlers();a(window).unbind("unload")},_raiseevent:function(g,d,f){if(this.isInitialized!=undefined&&this.isInitialized==true){var c=this.events[g];var e=new jQuery.Event(c);e.previousValue=d;e.currentValue=f;e.owner=this;var b=this.host.trigger(e);return b}},beginUpdateLayout:function(){this.updating=true},resumeUpdateLayout:function(){this.updating=false;this.vScrollInstance.value=0;this.hScrollInstance.value=0;this._arrange();this._render()},propertyChangedHandler:function(c,d,b,e){if(!this.isInitialized){return}if(!c.updating){if(d=="scrollBarSize"||d=="width"||d=="height"){this._arrange()}}},refresh:function(){}})})(jQuery);