﻿/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if (!
function(t, e) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
		if (!t.document) throw new Error("jQuery requires a window with a document");
		return e(t)
	}: e(t)
} ("undefined" != typeof window ? window: this,
function(t, e) {
	function i(t) {
		var e = "length" in t && t.length,
		i = st.type(t);
		return "function" === i || st.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
	}
	function n(t, e, i) {
		if (st.isFunction(e)) return st.grep(t,
		function(t, n) {
			return !! e.call(t, n, t) !== i
		});
		if (e.nodeType) return st.grep(t,
		function(t) {
			return t === e !== i
		});
		if ("string" == typeof e) {
			if (dt.test(e)) return st.filter(e, t, i);
			e = st.filter(e, t)
		}
		return st.grep(t,
		function(t) {
			return st.inArray(t, e) >= 0 !== i
		})
	}
	function s(t, e) {
		do t = t[e];
		while (t && 1 !== t.nodeType);
		return t
	}
	function o(t) {
		var e = _t[t] = {};
		return st.each(t.match(yt) || [],
		function(t, i) {
			e[i] = !0
		}),
		e
	}
	function a() {
		ft.addEventListener ? (ft.removeEventListener("DOMContentLoaded", r, !1), t.removeEventListener("load", r, !1)) : (ft.detachEvent("onreadystatechange", r), t.detachEvent("onload", r))
	}
	function r() { (ft.addEventListener || "load" === event.type || "complete" === ft.readyState) && (a(), st.ready())
	}
	function l(t, e, i) {
		if (void 0 === i && 1 === t.nodeType) {
			var n = "data-" + e.replace(Tt, "-$1").toLowerCase();
			if (i = t.getAttribute(n), "string" == typeof i) {
				try {
					i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null: +i + "" === i ? +i: kt.test(i) ? st.parseJSON(i) : i
				} catch(s) {}
				st.data(t, e, i)
			} else i = void 0
		}
		return i
	}
	function h(t) {
		var e;
		for (e in t) if (("data" !== e || !st.isEmptyObject(t[e])) && "toJSON" !== e) return ! 1;
		return ! 0
	}
	function u(t, e, i, n) {
		if (st.acceptData(t)) {
			var s, o, a = st.expando,
			r = t.nodeType,
			l = r ? st.cache: t,
			h = r ? t[a] : t[a] && a;
			if (h && l[h] && (n || l[h].data) || void 0 !== i || "string" != typeof e) return h || (h = r ? t[a] = K.pop() || st.guid++:a),
			l[h] || (l[h] = r ? {}: {
				toJSON: st.noop
			}),
			("object" == typeof e || "function" == typeof e) && (n ? l[h] = st.extend(l[h], e) : l[h].data = st.extend(l[h].data, e)),
			o = l[h],
			n || (o.data || (o.data = {}), o = o.data),
			void 0 !== i && (o[st.camelCase(e)] = i),
			"string" == typeof e ? (s = o[e], null == s && (s = o[st.camelCase(e)])) : s = o,
			s
		}
	}
	function c(t, e, i) {
		if (st.acceptData(t)) {
			var n, s, o = t.nodeType,
			a = o ? st.cache: t,
			r = o ? t[st.expando] : st.expando;
			if (a[r]) {
				if (e && (n = i ? a[r] : a[r].data)) {
					st.isArray(e) ? e = e.concat(st.map(e, st.camelCase)) : e in n ? e = [e] : (e = st.camelCase(e), e = e in n ? [e] : e.split(" ")),
					s = e.length;
					for (; s--;) delete n[e[s]];
					if (i ? !h(n) : !st.isEmptyObject(n)) return
				} (i || (delete a[r].data, h(a[r]))) && (o ? st.cleanData([t], !0) : it.deleteExpando || a != a.window ? delete a[r] : a[r] = null)
			}
		}
	}
	function d() {
		return ! 0
	}
	function p() {
		return ! 1
	}
	function f() {
		try {
			return ft.activeElement
		} catch(t) {}
	}
	function m(t) {
		var e = zt.split("|"),
		i = t.createDocumentFragment();
		if (i.createElement) for (; e.length;) i.createElement(e.pop());
		return i
	}
	function g(t, e) {
		var i, n, s = 0,
		o = typeof t.getElementsByTagName !== Ct ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Ct ? t.querySelectorAll(e || "*") : void 0;
		if (!o) for (o = [], i = t.childNodes || t; null != (n = i[s]); s++) ! e || st.nodeName(n, e) ? o.push(n) : st.merge(o, g(n, e));
		return void 0 === e || e && st.nodeName(t, e) ? st.merge([t], o) : o
	}
	function v(t) {
		Mt.test(t.type) && (t.defaultChecked = t.checked)
	}
	function b(t, e) {
		return st.nodeName(t, "table") && st.nodeName(11 !== e.nodeType ? e: e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
	}
	function y(t) {
		return t.type = (null !== st.find.attr(t, "type")) + "/" + t.type,
		t
	}
	function _(t) {
		var e = Vt.exec(t.type);
		return e ? t.type = e[1] : t.removeAttribute("type"),
		t
	}
	function w(t, e) {
		for (var i, n = 0; null != (i = t[n]); n++) st._data(i, "globalEval", !e || st._data(e[n], "globalEval"))
	}
	function x(t, e) {
		if (1 === e.nodeType && st.hasData(t)) {
			var i, n, s, o = st._data(t),
			a = st._data(e, o),
			r = o.events;
			if (r) {
				delete a.handle,
				a.events = {};
				for (i in r) for (n = 0, s = r[i].length; s > n; n++) st.event.add(e, i, r[i][n])
			}
			a.data && (a.data = st.extend({},
			a.data))
		}
	}
	function C(t, e) {
		var i, n, s;
		if (1 === e.nodeType) {
			if (i = e.nodeName.toLowerCase(), !it.noCloneEvent && e[st.expando]) {
				s = st._data(e);
				for (n in s.events) st.removeEvent(e, n, s.handle);
				e.removeAttribute(st.expando)
			}
			"script" === i && e.text !== t.text ? (y(e).text = t.text, _(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), it.html5Clone && t.innerHTML && !st.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Mt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected: ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
		}
	}
	function k(e, i) {
		var n, s = st(i.createElement(e)).appendTo(i.body),
		o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display: st.css(s[0], "display");
		return s.detach(),
		o
	}
	function T(t) {
		var e = ft,
		i = Zt[t];
		return i || (i = k(t, e), "none" !== i && i || (Jt = (Jt || st("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Jt[0].contentWindow || Jt[0].contentDocument).document, e.write(), e.close(), i = k(t, e), Jt.detach()), Zt[t] = i),
		i
	}
	function D(t, e) {
		return {
			get: function() {
				var i = t();
				return null != i ? i ? void delete this.get: (this.get = e).apply(this, arguments) : void 0
			}
		}
	}
	function S(t, e) {
		if (e in t) return e;
		for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = de.length; s--;) if (e = de[s] + i, e in t) return e;
		return n
	}
	function I(t, e) {
		for (var i, n, s, o = [], a = 0, r = t.length; r > a; a++) n = t[a],
		n.style && (o[a] = st._data(n, "olddisplay"), i = n.style.display, e ? (o[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && It(n) && (o[a] = st._data(n, "olddisplay", T(n.nodeName)))) : (s = It(n), (i && "none" !== i || !s) && st._data(n, "olddisplay", s ? i: st.css(n, "display"))));
		for (a = 0; r > a; a++) n = t[a],
		n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[a] || "": "none"));
		return t
	}
	function E(t, e, i) {
		var n = le.exec(e);
		return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
	}
	function M(t, e, i, n, s) {
		for (var o = i === (n ? "border": "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === i && (a += st.css(t, i + St[o], !0, s)),
		n ? ("content" === i && (a -= st.css(t, "padding" + St[o], !0, s)), "margin" !== i && (a -= st.css(t, "border" + St[o] + "Width", !0, s))) : (a += st.css(t, "padding" + St[o], !0, s), "padding" !== i && (a += st.css(t, "border" + St[o] + "Width", !0, s)));
		return a
	}
	function P(t, e, i) {
		var n = !0,
		s = "width" === e ? t.offsetWidth: t.offsetHeight,
		o = te(t),
		a = it.boxSizing && "border-box" === st.css(t, "boxSizing", !1, o);
		if (0 >= s || null == s) {
			if (s = ee(t, e, o), (0 > s || null == s) && (s = t.style[e]), ne.test(s)) return s;
			n = a && (it.boxSizingReliable() || s === t.style[e]),
			s = parseFloat(s) || 0
		}
		return s + M(t, e, i || (a ? "border": "content"), n, o) + "px"
	}
	function N(t, e, i, n, s) {
		return new N.prototype.init(t, e, i, n, s)
	}
	function A() {
		return setTimeout(function() {
			pe = void 0
		}),
		pe = st.now()
	}
	function H(t, e) {
		var i, n = {
			height: t
		},
		s = 0;
		for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = St[s],
		n["margin" + i] = n["padding" + i] = t;
		return e && (n.opacity = n.width = t),
		n
	}
	function O(t, e, i) {
		for (var n, s = (ye[e] || []).concat(ye["*"]), o = 0, a = s.length; a > o; o++) if (n = s[o].call(i, e, t)) return n
	}
	function z(t, e, i) {
		var n, s, o, a, r, l, h, u, c = this,
		d = {},
		p = t.style,
		f = t.nodeType && It(t),
		m = st._data(t, "fxshow");
		i.queue || (r = st._queueHooks(t, "fx"), null == r.unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function() {
			r.unqueued || l()
		}), r.unqueued++, c.always(function() {
			c.always(function() {
				r.unqueued--,
				st.queue(t, "fx").length || r.empty.fire()
			})
		})),
		1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], h = st.css(t, "display"), u = "none" === h ? st._data(t, "olddisplay") || T(t.nodeName) : h, "inline" === u && "none" === st.css(t, "float") && (it.inlineBlockNeedsLayout && "inline" !== T(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
		i.overflow && (p.overflow = "hidden", it.shrinkWrapBlocks() || c.always(function() {
			p.overflow = i.overflow[0],
			p.overflowX = i.overflow[1],
			p.overflowY = i.overflow[2]
		}));
		for (n in e) if (s = e[n], me.exec(s)) {
			if (delete e[n], o = o || "toggle" === s, s === (f ? "hide": "show")) {
				if ("show" !== s || !m || void 0 === m[n]) continue;
				f = !0
			}
			d[n] = m && m[n] || st.style(t, n)
		} else h = void 0;
		if (st.isEmptyObject(d))"inline" === ("none" === h ? T(t.nodeName) : h) && (p.display = h);
		else {
			m ? "hidden" in m && (f = m.hidden) : m = st._data(t, "fxshow", {}),
			o && (m.hidden = !f),
			f ? st(t).show() : c.done(function() {
				st(t).hide()
			}),
			c.done(function() {
				var e;
				st._removeData(t, "fxshow");
				for (e in d) st.style(t, e, d[e])
			});
			for (n in d) a = O(f ? m[n] : 0, n, c),
			n in m || (m[n] = a.start, f && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
		}
	}
	function j(t, e) {
		var i, n, s, o, a;
		for (i in t) if (n = st.camelCase(i), s = e[n], o = t[i], st.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), a = st.cssHooks[n], a && "expand" in a) {
			o = a.expand(o),
			delete t[n];
			for (i in o) i in t || (t[i] = o[i], e[i] = s)
		} else e[n] = s
	}
	function W(t, e, i) {
		var n, s, o = 0,
		a = be.length,
		r = st.Deferred().always(function() {
			delete l.elem
		}),
		l = function() {
			if (s) return ! 1;
			for (var e = pe || A(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, o = 1 - n, a = 0, l = h.tweens.length; l > a; a++) h.tweens[a].run(o);
			return r.notifyWith(t, [h, o, i]),
			1 > o && l ? i: (r.resolveWith(t, [h]), !1)
		},
		h = r.promise({
			elem: t,
			props: st.extend({},
			e),
			opts: st.extend(!0, {
				specialEasing: {}
			},
			i),
			originalProperties: e,
			originalOptions: i,
			startTime: pe || A(),
			duration: i.duration,
			tweens: [],
			createTween: function(e, i) {
				var n = st.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
				return h.tweens.push(n),
				n
			},
			stop: function(e) {
				var i = 0,
				n = e ? h.tweens.length: 0;
				if (s) return this;
				for (s = !0; n > i; i++) h.tweens[i].run(1);
				return e ? r.resolveWith(t, [h, e]) : r.rejectWith(t, [h, e]),
				this
			}
		}),
		u = h.props;
		for (j(u, h.opts.specialEasing); a > o; o++) if (n = be[o].call(h, t, u, h.opts)) return n;
		return st.map(u, O, h),
		st.isFunction(h.opts.start) && h.opts.start.call(t, h),
		st.fx.timer(st.extend(l, {
			elem: t,
			anim: h,
			queue: h.opts.queue
		})),
		h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
	}
	function F(t) {
		return function(e, i) {
			"string" != typeof e && (i = e, e = "*");
			var n, s = 0,
			o = e.toLowerCase().match(yt) || [];
			if (st.isFunction(i)) for (; n = o[s++];)"+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
		}
	}
	function L(t, e, i, n) {
		function s(r) {
			var l;
			return o[r] = !0,
			st.each(t[r] || [],
			function(t, r) {
				var h = r(e, i, n);
				return "string" != typeof h || a || o[h] ? a ? !(l = h) : void 0 : (e.dataTypes.unshift(h), s(h), !1)
			}),
			l
		}
		var o = {},
		a = t === qe;
		return s(e.dataTypes[0]) || !o["*"] && s("*")
	}
	function $(t, e) {
		var i, n, s = st.ajaxSettings.flatOptions || {};
		for (n in e) void 0 !== e[n] && ((s[n] ? t: i || (i = {}))[n] = e[n]);
		return i && st.extend(!0, t, i),
		t
	}
	function R(t, e, i) {
		for (var n, s, o, a, r = t.contents,
		l = t.dataTypes;
		"*" === l[0];) l.shift(),
		void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
		if (s) for (a in r) if (r[a] && r[a].test(s)) {
			l.unshift(a);
			break
		}
		if (l[0] in i) o = l[0];
		else {
			for (a in i) {
				if (!l[0] || t.converters[a + " " + l[0]]) {
					o = a;
					break
				}
				n || (n = a)
			}
			o = o || n
		}
		return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
	}
	function q(t, e, i, n) {
		var s, o, a, r, l, h = {},
		u = t.dataTypes.slice();
		if (u[1]) for (a in t.converters) h[a.toLowerCase()] = t.converters[a];
		for (o = u.shift(); o;) if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift()) if ("*" === o) o = l;
		else if ("*" !== l && l !== o) {
			if (a = h[l + " " + o] || h["* " + o], !a) for (s in h) if (r = s.split(" "), r[1] === o && (a = h[l + " " + r[0]] || h["* " + r[0]])) {
				a === !0 ? a = h[s] : h[s] !== !0 && (o = r[0], u.unshift(r[1]));
				break
			}
			if (a !== !0) if (a && t["throws"]) e = a(e);
			else try {
				e = a(e)
			} catch(c) {
				return {
					state: "parsererror",
					error: a ? c: "No conversion from " + l + " to " + o
				}
			}
		}
		return {
			state: "success",
			data: e
		}
	}
	function B(t, e, i, n) {
		var s;
		if (st.isArray(e)) st.each(e,
		function(e, s) {
			i || Ve.test(t) ? n(t, s) : B(t + "[" + ("object" == typeof s ? e: "") + "]", s, i, n)
		});
		else if (i || "object" !== st.type(e)) n(t, e);
		else for (s in e) B(t + "[" + s + "]", e[s], i, n)
	}
	function Y() {
		try {
			return new t.XMLHttpRequest
		} catch(e) {}
	}
	function U() {
		try {
			return new t.ActiveXObject("Microsoft.XMLHTTP")
		} catch(e) {}
	}
	function V(t) {
		return st.isWindow(t) ? t: 9 === t.nodeType ? t.defaultView || t.parentWindow: !1
	}
	var K = [],
	X = K.slice,
	Q = K.concat,
	G = K.push,
	J = K.indexOf,
	Z = {},
	tt = Z.toString,
	et = Z.hasOwnProperty,
	it = {},
	nt = "1.11.3",
	st = function(t, e) {
		return new st.fn.init(t, e)
	},
	ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	at = /^-ms-/,
	rt = /-([\da-z])/gi,
	lt = function(t, e) {
		return e.toUpperCase()
	};
	st.fn = st.prototype = {
		jquery: nt,
		constructor: st,
		selector: "",
		length: 0,
		toArray: function() {
			return X.call(this)
		},
		get: function(t) {
			return null != t ? 0 > t ? this[t + this.length] : this[t] : X.call(this)
		},
		pushStack: function(t) {
			var e = st.merge(this.constructor(), t);
			return e.prevObject = this,
			e.context = this.context,
			e
		},
		each: function(t, e) {
			return st.each(this, t, e)
		},
		map: function(t) {
			return this.pushStack(st.map(this,
			function(e, i) {
				return t.call(e, i, e)
			}))
		},
		slice: function() {
			return this.pushStack(X.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq( - 1)
		},
		eq: function(t) {
			var e = this.length,
			i = +t + (0 > t ? e: 0);
			return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: G,
		sort: K.sort,
		splice: K.splice
	},
	st.extend = st.fn.extend = function() {
		var t, e, i, n, s, o, a = arguments[0] || {},
		r = 1,
		l = arguments.length,
		h = !1;
		for ("boolean" == typeof a && (h = a, a = arguments[r] || {},
		r++), "object" == typeof a || st.isFunction(a) || (a = {}), r === l && (a = this, r--); l > r; r++) if (null != (s = arguments[r])) for (n in s) t = a[n],
		i = s[n],
		a !== i && (h && i && (st.isPlainObject(i) || (e = st.isArray(i))) ? (e ? (e = !1, o = t && st.isArray(t) ? t: []) : o = t && st.isPlainObject(t) ? t: {},
		a[n] = st.extend(h, o, i)) : void 0 !== i && (a[n] = i));
		return a
	},
	st.extend({
		expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(t) {
			throw new Error(t)
		},
		noop: function() {},
		isFunction: function(t) {
			return "function" === st.type(t)
		},
		isArray: Array.isArray ||
		function(t) {
			return "array" === st.type(t)
		},
		isWindow: function(t) {
			return null != t && t == t.window
		},
		isNumeric: function(t) {
			return ! st.isArray(t) && t - parseFloat(t) + 1 >= 0
		},
		isEmptyObject: function(t) {
			var e;
			for (e in t) return ! 1;
			return ! 0
		},
		isPlainObject: function(t) {
			var e;
			if (!t || "object" !== st.type(t) || t.nodeType || st.isWindow(t)) return ! 1;
			try {
				if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return ! 1
			} catch(i) {
				return ! 1
			}
			if (it.ownLast) for (e in t) return et.call(t, e);
			for (e in t);
			return void 0 === e || et.call(t, e)
		},
		type: function(t) {
			return null == t ? t + "": "object" == typeof t || "function" == typeof t ? Z[tt.call(t)] || "object": typeof t
		},
		globalEval: function(e) {
			e && st.trim(e) && (t.execScript ||
			function(e) {
				t.eval.call(t, e)
			})(e)
		},
		camelCase: function(t) {
			return t.replace(at, "ms-").replace(rt, lt)
		},
		nodeName: function(t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		},
		each: function(t, e, n) {
			var s, o = 0,
			a = t.length,
			r = i(t);
			if (n) {
				if (r) for (; a > o && (s = e.apply(t[o], n), s !== !1); o++);
				else for (o in t) if (s = e.apply(t[o], n), s === !1) break
			} else if (r) for (; a > o && (s = e.call(t[o], o, t[o]), s !== !1); o++);
			else for (o in t) if (s = e.call(t[o], o, t[o]), s === !1) break;
			return t
		},
		trim: function(t) {
			return null == t ? "": (t + "").replace(ot, "")
		},
		makeArray: function(t, e) {
			var n = e || [];
			return null != t && (i(Object(t)) ? st.merge(n, "string" == typeof t ? [t] : t) : G.call(n, t)),
			n
		},
		inArray: function(t, e, i) {
			var n;
			if (e) {
				if (J) return J.call(e, t, i);
				for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i: 0; n > i; i++) if (i in e && e[i] === t) return i
			}
			return - 1
		},
		merge: function(t, e) {
			for (var i = +e.length,
			n = 0,
			s = t.length; i > n;) t[s++] = e[n++];
			if (i !== i) for (; void 0 !== e[n];) t[s++] = e[n++];
			return t.length = s,
			t
		},
		grep: function(t, e, i) {
			for (var n, s = [], o = 0, a = t.length, r = !i; a > o; o++) n = !e(t[o], o),
			n !== r && s.push(t[o]);
			return s
		},
		map: function(t, e, n) {
			var s, o = 0,
			a = t.length,
			r = i(t),
			l = [];
			if (r) for (; a > o; o++) s = e(t[o], o, n),
			null != s && l.push(s);
			else for (o in t) s = e(t[o], o, n),
			null != s && l.push(s);
			return Q.apply([], l)
		},
		guid: 1,
		proxy: function(t, e) {
			var i, n, s;
			return "string" == typeof e && (s = t[e], e = t, t = s),
			st.isFunction(t) ? (i = X.call(arguments, 2), n = function() {
				return t.apply(e || this, i.concat(X.call(arguments)))
			},
			n.guid = t.guid = t.guid || st.guid++, n) : void 0
		},
		now: function() {
			return + new Date
		},
		support: it
	}),
	st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
	function(t, e) {
		Z["[object " + e + "]"] = e.toLowerCase()
	});
	var ht = function(t) {
		function e(t, e, i, n) {
			var s, o, a, r, l, h, c, p, f, m;
			if ((e ? e.ownerDocument || e: L) !== N && P(e), e = e || N, i = i || [], r = e.nodeType, "string" != typeof t || !t || 1 !== r && 9 !== r && 11 !== r) return i;
			if (!n && H) {
				if (11 !== r && (s = bt.exec(t))) if (a = s[1]) {
					if (9 === r) {
						if (o = e.getElementById(a), !o || !o.parentNode) return i;
						if (o.id === a) return i.push(o),
						i
					} else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && W(e, o) && o.id === a) return i.push(o),
					i
				} else {
					if (s[2]) return J.apply(i, e.getElementsByTagName(t)),
					i;
					if ((a = s[3]) && w.getElementsByClassName) return J.apply(i, e.getElementsByClassName(a)),
					i
				}
				if (w.qsa && (!O || !O.test(t))) {
					if (p = c = F, f = e, m = 1 !== r && t, 1 === r && "object" !== e.nodeName.toLowerCase()) {
						for (h = T(t), (c = e.getAttribute("id")) ? p = c.replace(_t, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = h.length; l--;) h[l] = p + d(h[l]);
						f = yt.test(t) && u(e.parentNode) || e,
						m = h.join(",")
					}
					if (m) try {
						return J.apply(i, f.querySelectorAll(m)),
						i
					} catch(g) {} finally {
						c || e.removeAttribute("id")
					}
				}
			}
			return S(t.replace(lt, "$1"), e, i, n)
		}
		function i() {
			function t(i, n) {
				return e.push(i + " ") > x.cacheLength && delete t[e.shift()],
				t[i + " "] = n
			}
			var e = [];
			return t
		}
		function n(t) {
			return t[F] = !0,
			t
		}
		function s(t) {
			var e = N.createElement("div");
			try {
				return !! t(e)
			} catch(i) {
				return ! 1
			} finally {
				e.parentNode && e.parentNode.removeChild(e),
				e = null
			}
		}
		function o(t, e) {
			for (var i = t.split("|"), n = t.length; n--;) x.attrHandle[i[n]] = e
		}
		function a(t, e) {
			var i = e && t,
			n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
			if (n) return n;
			if (i) for (; i = i.nextSibling;) if (i === e) return - 1;
			return t ? 1 : -1
		}
		function r(t) {
			return function(e) {
				var i = e.nodeName.toLowerCase();
				return "input" === i && e.type === t
			}
		}
		function l(t) {
			return function(e) {
				var i = e.nodeName.toLowerCase();
				return ("input" === i || "button" === i) && e.type === t
			}
		}
		function h(t) {
			return n(function(e) {
				return e = +e,
				n(function(i, n) {
					for (var s, o = t([], i.length, e), a = o.length; a--;) i[s = o[a]] && (i[s] = !(n[s] = i[s]))
				})
			})
		}
		function u(t) {
			return t && "undefined" != typeof t.getElementsByTagName && t
		}
		function c() {}
		function d(t) {
			for (var e = 0,
			i = t.length,
			n = ""; i > e; e++) n += t[e].value;
			return n
		}
		function p(t, e, i) {
			var n = e.dir,
			s = i && "parentNode" === n,
			o = R++;
			return e.first ?
			function(e, i, o) {
				for (; e = e[n];) if (1 === e.nodeType || s) return t(e, i, o)
			}: function(e, i, a) {
				var r, l, h = [$, o];
				if (a) {
					for (; e = e[n];) if ((1 === e.nodeType || s) && t(e, i, a)) return ! 0
				} else for (; e = e[n];) if (1 === e.nodeType || s) {
					if (l = e[F] || (e[F] = {}), (r = l[n]) && r[0] === $ && r[1] === o) return h[2] = r[2];
					if (l[n] = h, h[2] = t(e, i, a)) return ! 0
				}
			}
		}
		function f(t) {
			return t.length > 1 ?
			function(e, i, n) {
				for (var s = t.length; s--;) if (!t[s](e, i, n)) return ! 1;
				return ! 0
			}: t[0]
		}
		function m(t, i, n) {
			for (var s = 0,
			o = i.length; o > s; s++) e(t, i[s], n);
			return n
		}
		function g(t, e, i, n, s) {
			for (var o, a = [], r = 0, l = t.length, h = null != e; l > r; r++)(o = t[r]) && (!i || i(o, n, s)) && (a.push(o), h && e.push(r));
			return a
		}
		function v(t, e, i, s, o, a) {
			return s && !s[F] && (s = v(s)),
			o && !o[F] && (o = v(o, a)),
			n(function(n, a, r, l) {
				var h, u, c, d = [],
				p = [],
				f = a.length,
				v = n || m(e || "*", r.nodeType ? [r] : r, []),
				b = !t || !n && e ? v: g(v, d, t, r, l),
				y = i ? o || (n ? t: f || s) ? [] : a: b;
				if (i && i(b, y, r, l), s) for (h = g(y, p), s(h, [], r, l), u = h.length; u--;)(c = h[u]) && (y[p[u]] = !(b[p[u]] = c));
				if (n) {
					if (o || t) {
						if (o) {
							for (h = [], u = y.length; u--;)(c = y[u]) && h.push(b[u] = c);
							o(null, y = [], h, l)
						}
						for (u = y.length; u--;)(c = y[u]) && (h = o ? tt(n, c) : d[u]) > -1 && (n[h] = !(a[h] = c))
					}
				} else y = g(y === a ? y.splice(f, y.length) : y),
				o ? o(null, a, y, l) : J.apply(a, y)
			})
		}
		function b(t) {
			for (var e, i, n, s = t.length,
			o = x.relative[t[0].type], a = o || x.relative[" "], r = o ? 1 : 0, l = p(function(t) {
				return t === e
			},
			a, !0), h = p(function(t) {
				return tt(e, t) > -1
			},
			a, !0), u = [function(t, i, n) {
				var s = !o && (n || i !== I) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
				return e = null,
				s
			}]; s > r; r++) if (i = x.relative[t[r].type]) u = [p(f(u), i)];
			else {
				if (i = x.filter[t[r].type].apply(null, t[r].matches), i[F]) {
					for (n = ++r; s > n && !x.relative[t[n].type]; n++);
					return v(r > 1 && f(u), r > 1 && d(t.slice(0, r - 1).concat({
						value: " " === t[r - 2].type ? "*": ""
					})).replace(lt, "$1"), i, n > r && b(t.slice(r, n)), s > n && b(t = t.slice(n)), s > n && d(t))
				}
				u.push(i)
			}
			return f(u)
		}
		function y(t, i) {
			var s = i.length > 0,
			o = t.length > 0,
			a = function(n, a, r, l, h) {
				var u, c, d, p = 0,
				f = "0",
				m = n && [],
				v = [],
				b = I,
				y = n || o && x.find.TAG("*", h),
				_ = $ += null == b ? 1 : Math.random() || .1,
				w = y.length;
				for (h && (I = a !== N && a); f !== w && null != (u = y[f]); f++) {
					if (o && u) {
						for (c = 0; d = t[c++];) if (d(u, a, r)) {
							l.push(u);
							break
						}
						h && ($ = _)
					}
					s && ((u = !d && u) && p--, n && m.push(u))
				}
				if (p += f, s && f !== p) {
					for (c = 0; d = i[c++];) d(m, v, a, r);
					if (n) {
						if (p > 0) for (; f--;) m[f] || v[f] || (v[f] = Q.call(l));
						v = g(v)
					}
					J.apply(l, v),
					h && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
				}
				return h && ($ = _, I = b),
				m
			};
			return s ? n(a) : a
		}
		var _, w, x, C, k, T, D, S, I, E, M, P, N, A, H, O, z, j, W, F = "sizzle" + 1 * new Date,
		L = t.document,
		$ = 0,
		R = 0,
		q = i(),
		B = i(),
		Y = i(),
		U = function(t, e) {
			return t === e && (M = !0),
			0
		},
		V = 1 << 31,
		K = {}.hasOwnProperty,
		X = [],
		Q = X.pop,
		G = X.push,
		J = X.push,
		Z = X.slice,
		tt = function(t, e) {
			for (var i = 0,
			n = t.length; n > i; i++) if (t[i] === e) return i;
			return - 1
		},
		et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		it = "[\\x20\\t\\r\\n\\f]",
		nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
		st = nt.replace("w", "w#"),
		ot = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + st + "))|)" + it + "*\\]",
		at = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
		rt = new RegExp(it + "+", "g"),
		lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
		ht = new RegExp("^" + it + "*," + it + "*"),
		ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
		ct = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
		dt = new RegExp(at),
		pt = new RegExp("^" + st + "$"),
		ft = {
			ID: new RegExp("^#(" + nt + ")"),
			CLASS: new RegExp("^\\.(" + nt + ")"),
			TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
			ATTR: new RegExp("^" + ot),
			PSEUDO: new RegExp("^" + at),
			CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
			bool: new RegExp("^(?:" + et + ")$", "i"),
			needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
		},
		mt = /^(?:input|select|textarea|button)$/i,
		gt = /^h\d$/i,
		vt = /^[^{]+\{\s*\[native \w/,
		bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		yt = /[+~]/,
		_t = /'|\\/g,
		wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
		xt = function(t, e, i) {
			var n = "0x" + e - 65536;
			return n !== n || i ? e: 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
		},
		Ct = function() {
			P()
		};
		try {
			J.apply(X = Z.call(L.childNodes), L.childNodes),
			X[L.childNodes.length].nodeType
		} catch(kt) {
			J = {
				apply: X.length ?
				function(t, e) {
					G.apply(t, Z.call(e))
				}: function(t, e) {
					for (var i = t.length,
					n = 0; t[i++] = e[n++];);
					t.length = i - 1
				}
			}
		}
		w = e.support = {},
		k = e.isXML = function(t) {
			var e = t && (t.ownerDocument || t).documentElement;
			return e ? "HTML" !== e.nodeName: !1
		},
		P = e.setDocument = function(t) {
			var e, i, n = t ? t.ownerDocument || t: L;
			return n !== N && 9 === n.nodeType && n.documentElement ? (N = n, A = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Ct, !1) : i.attachEvent && i.attachEvent("onunload", Ct)), H = !k(n), w.attributes = s(function(t) {
				return t.className = "i",
				!t.getAttribute("className")
			}), w.getElementsByTagName = s(function(t) {
				return t.appendChild(n.createComment("")),
				!t.getElementsByTagName("*").length
			}), w.getElementsByClassName = vt.test(n.getElementsByClassName), w.getById = s(function(t) {
				return A.appendChild(t).id = F,
				!n.getElementsByName || !n.getElementsByName(F).length
			}), w.getById ? (x.find.ID = function(t, e) {
				if ("undefined" != typeof e.getElementById && H) {
					var i = e.getElementById(t);
					return i && i.parentNode ? [i] : []
				}
			},
			x.filter.ID = function(t) {
				var e = t.replace(wt, xt);
				return function(t) {
					return t.getAttribute("id") === e
				}
			}) : (delete x.find.ID, x.filter.ID = function(t) {
				var e = t.replace(wt, xt);
				return function(t) {
					var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
					return i && i.value === e
				}
			}), x.find.TAG = w.getElementsByTagName ?
			function(t, e) {
				return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
			}: function(t, e) {
				var i, n = [],
				s = 0,
				o = e.getElementsByTagName(t);
				if ("*" === t) {
					for (; i = o[s++];) 1 === i.nodeType && n.push(i);
					return n
				}
				return o
			},
			x.find.CLASS = w.getElementsByClassName &&
			function(t, e) {
				return H ? e.getElementsByClassName(t) : void 0
			},
			z = [], O = [], (w.qsa = vt.test(n.querySelectorAll)) && (s(function(t) {
				A.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\f]' msallowcapture=''><option selected=''></option></select>",
				t.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + it + "*(?:''|\"\")"),
				t.querySelectorAll("[selected]").length || O.push("\\[" + it + "*(?:value|" + et + ")"),
				t.querySelectorAll("[id~=" + F + "-]").length || O.push("~="),
				t.querySelectorAll(":checked").length || O.push(":checked"),
				t.querySelectorAll("a#" + F + "+*").length || O.push(".#.+[+~]")
			}), s(function(t) {
				var e = n.createElement("input");
				e.setAttribute("type", "hidden"),
				t.appendChild(e).setAttribute("name", "D"),
				t.querySelectorAll("[name=d]").length && O.push("name" + it + "*[*^$|!~]?="),
				t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"),
				t.querySelectorAll("*,:x"),
				O.push(",.*:")
			})), (w.matchesSelector = vt.test(j = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && s(function(t) {
				w.disconnectedMatch = j.call(t, "div"),
				j.call(t, "[s!='']:x"),
				z.push("!=", at)
			}), O = O.length && new RegExp(O.join("|")), z = z.length && new RegExp(z.join("|")), e = vt.test(A.compareDocumentPosition), W = e || vt.test(A.contains) ?
			function(t, e) {
				var i = 9 === t.nodeType ? t.documentElement: t,
				n = e && e.parentNode;
				return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
			}: function(t, e) {
				if (e) for (; e = e.parentNode;) if (e === t) return ! 0;
				return ! 1
			},
			U = e ?
			function(t, e) {
				if (t === e) return M = !0,
				0;
				var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
				return i ? i: (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === L && W(L, t) ? -1 : e === n || e.ownerDocument === L && W(L, e) ? 1 : E ? tt(E, t) - tt(E, e) : 0 : 4 & i ? -1 : 1)
			}: function(t, e) {
				if (t === e) return M = !0,
				0;
				var i, s = 0,
				o = t.parentNode,
				r = e.parentNode,
				l = [t],
				h = [e];
				if (!o || !r) return t === n ? -1 : e === n ? 1 : o ? -1 : r ? 1 : E ? tt(E, t) - tt(E, e) : 0;
				if (o === r) return a(t, e);
				for (i = t; i = i.parentNode;) l.unshift(i);
				for (i = e; i = i.parentNode;) h.unshift(i);
				for (; l[s] === h[s];) s++;
				return s ? a(l[s], h[s]) : l[s] === L ? -1 : h[s] === L ? 1 : 0
			},
			n) : N
		},
		e.matches = function(t, i) {
			return e(t, null, null, i)
		},
		e.matchesSelector = function(t, i) {
			if ((t.ownerDocument || t) !== N && P(t), i = i.replace(ct, "='$1']"), !(!w.matchesSelector || !H || z && z.test(i) || O && O.test(i))) try {
				var n = j.call(t, i);
				if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
			} catch(s) {}
			return e(i, N, null, [t]).length > 0
		},
		e.contains = function(t, e) {
			return (t.ownerDocument || t) !== N && P(t),
			W(t, e)
		},
		e.attr = function(t, e) { (t.ownerDocument || t) !== N && P(t);
			var i = x.attrHandle[e.toLowerCase()],
			n = i && K.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !H) : void 0;
			return void 0 !== n ? n: w.attributes || !H ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value: null
		},
		e.error = function(t) {
			throw new Error("Syntax error, unrecognized expression: " + t)
		},
		e.uniqueSort = function(t) {
			var e, i = [],
			n = 0,
			s = 0;
			if (M = !w.detectDuplicates, E = !w.sortStable && t.slice(0), t.sort(U), M) {
				for (; e = t[s++];) e === t[s] && (n = i.push(s));
				for (; n--;) t.splice(i[n], 1)
			}
			return E = null,
			t
		},
		C = e.getText = function(t) {
			var e, i = "",
			n = 0,
			s = t.nodeType;
			if (s) {
				if (1 === s || 9 === s || 11 === s) {
					if ("string" == typeof t.textContent) return t.textContent;
					for (t = t.firstChild; t; t = t.nextSibling) i += C(t)
				} else if (3 === s || 4 === s) return t.nodeValue
			} else for (; e = t[n++];) i += C(e);
			return i
		},
		x = e.selectors = {
			cacheLength: 50,
			createPseudo: n,
			match: ft,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(t) {
					return t[1] = t[1].replace(wt, xt),
					t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt),
					"~=" === t[2] && (t[3] = " " + t[3] + " "),
					t.slice(0, 4)
				},
				CHILD: function(t) {
					return t[1] = t[1].toLowerCase(),
					"nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
					t
				},
				PSEUDO: function(t) {
					var e, i = !t[6] && t[2];
					return ft.CHILD.test(t[0]) ? null: (t[3] ? t[2] = t[4] || t[5] || "": i && dt.test(i) && (e = T(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
				}
			},
			filter: {
				TAG: function(t) {
					var e = t.replace(wt, xt).toLowerCase();
					return "*" === t ?
					function() {
						return ! 0
					}: function(t) {
						return t.nodeName && t.nodeName.toLowerCase() === e
					}
				},
				CLASS: function(t) {
					var e = q[t + " "];
					return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && q(t,
					function(t) {
						return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
					})
				},
				ATTR: function(t, i, n) {
					return function(s) {
						var o = e.attr(s, t);
						return null == o ? "!=" === i: i ? (o += "", "=" === i ? o === n: "!=" === i ? o !== n: "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice( - n.length) === n: "~=" === i ? (" " + o.replace(rt, " ") + " ").indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-": !1) : !0
					}
				},
				CHILD: function(t, e, i, n, s) {
					var o = "nth" !== t.slice(0, 3),
					a = "last" !== t.slice( - 4),
					r = "of-type" === e;
					return 1 === n && 0 === s ?
					function(t) {
						return !! t.parentNode
					}: function(e, i, l) {
						var h, u, c, d, p, f, m = o !== a ? "nextSibling": "previousSibling",
						g = e.parentNode,
						v = r && e.nodeName.toLowerCase(),
						b = !l && !r;
						if (g) {
							if (o) {
								for (; m;) {
									for (c = e; c = c[m];) if (r ? c.nodeName.toLowerCase() === v: 1 === c.nodeType) return ! 1;
									f = m = "only" === t && !f && "nextSibling"
								}
								return ! 0
							}
							if (f = [a ? g.firstChild: g.lastChild], a && b) {
								for (u = g[F] || (g[F] = {}), h = u[t] || [], p = h[0] === $ && h[1], d = h[0] === $ && h[2], c = p && g.childNodes[p]; c = ++p && c && c[m] || (d = p = 0) || f.pop();) if (1 === c.nodeType && ++d && c === e) {
									u[t] = [$, p, d];
									break
								}
							} else if (b && (h = (e[F] || (e[F] = {}))[t]) && h[0] === $) d = h[1];
							else for (; (c = ++p && c && c[m] || (d = p = 0) || f.pop()) && ((r ? c.nodeName.toLowerCase() !== v: 1 !== c.nodeType) || !++d || (b && ((c[F] || (c[F] = {}))[t] = [$, d]), c !== e)););
							return d -= s,
							d === n || d % n === 0 && d / n >= 0
						}
					}
				},
				PSEUDO: function(t, i) {
					var s, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
					return o[F] ? o(i) : o.length > 1 ? (s = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
						for (var n, s = o(t, i), a = s.length; a--;) n = tt(t, s[a]),
						t[n] = !(e[n] = s[a])
					}) : function(t) {
						return o(t, 0, s)
					}) : o
				}
			},
			pseudos: {
				not: n(function(t) {
					var e = [],
					i = [],
					s = D(t.replace(lt, "$1"));
					return s[F] ? n(function(t, e, i, n) {
						for (var o, a = s(t, null, n, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o))
					}) : function(t, n, o) {
						return e[0] = t,
						s(e, null, o, i),
						e[0] = null,
						!i.pop()
					}
				}),
				has: n(function(t) {
					return function(i) {
						return e(t, i).length > 0
					}
				}),
				contains: n(function(t) {
					return t = t.replace(wt, xt),
					function(e) {
						return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
					}
				}),
				lang: n(function(t) {
					return pt.test(t || "") || e.error("unsupported lang: " + t),
					t = t.replace(wt, xt).toLowerCase(),
					function(e) {
						var i;
						do
						if (i = H ? e.lang: e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(),
						i === t || 0 === i.indexOf(t + "-");
						while ((e = e.parentNode) && 1 === e.nodeType);
						return ! 1
					}
				}),
				target: function(e) {
					var i = t.location && t.location.hash;
					return i && i.slice(1) === e.id
				},
				root: function(t) {
					return t === A
				},
				focus: function(t) {
					return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
				},
				enabled: function(t) {
					return t.disabled === !1
				},
				disabled: function(t) {
					return t.disabled === !0
				},
				checked: function(t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && !!t.checked || "option" === e && !!t.selected
				},
				selected: function(t) {
					return t.parentNode && t.parentNode.selectedIndex,
					t.selected === !0
				},
				empty: function(t) {
					for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return ! 1;
					return ! 0
				},
				parent: function(t) {
					return ! x.pseudos.empty(t)
				},
				header: function(t) {
					return gt.test(t.nodeName)
				},
				input: function(t) {
					return mt.test(t.nodeName)
				},
				button: function(t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && "button" === t.type || "button" === e
				},
				text: function(t) {
					var e;
					return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
				},
				first: h(function() {
					return [0]
				}),
				last: h(function(t, e) {
					return [e - 1]
				}),
				eq: h(function(t, e, i) {
					return [0 > i ? i + e: i]
				}),
				even: h(function(t, e) {
					for (var i = 0; e > i; i += 2) t.push(i);
					return t
				}),
				odd: h(function(t, e) {
					for (var i = 1; e > i; i += 2) t.push(i);
					return t
				}),
				lt: h(function(t, e, i) {
					for (var n = 0 > i ? i + e: i; --n >= 0;) t.push(n);
					return t
				}),
				gt: h(function(t, e, i) {
					for (var n = 0 > i ? i + e: i; ++n < e;) t.push(n);
					return t
				})
			}
		},
		x.pseudos.nth = x.pseudos.eq;
		for (_ in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) x.pseudos[_] = r(_);
		for (_ in {
			submit: !0,
			reset: !0
		}) x.pseudos[_] = l(_);
		return c.prototype = x.filters = x.pseudos,
		x.setFilters = new c,
		T = e.tokenize = function(t, i) {
			var n, s, o, a, r, l, h, u = B[t + " "];
			if (u) return i ? 0 : u.slice(0);
			for (r = t, l = [], h = x.preFilter; r;) { (!n || (s = ht.exec(r))) && (s && (r = r.slice(s[0].length) || r), l.push(o = [])),
				n = !1,
				(s = ut.exec(r)) && (n = s.shift(), o.push({
					value: n,
					type: s[0].replace(lt, " ")
				}), r = r.slice(n.length));
				for (a in x.filter) ! (s = ft[a].exec(r)) || h[a] && !(s = h[a](s)) || (n = s.shift(), o.push({
					value: n,
					type: a,
					matches: s
				}), r = r.slice(n.length));
				if (!n) break
			}
			return i ? r.length: r ? e.error(t) : B(t, l).slice(0)
		},
		D = e.compile = function(t, e) {
			var i, n = [],
			s = [],
			o = Y[t + " "];
			if (!o) {
				for (e || (e = T(t)), i = e.length; i--;) o = b(e[i]),
				o[F] ? n.push(o) : s.push(o);
				o = Y(t, y(s, n)),
				o.selector = t
			}
			return o
		},
		S = e.select = function(t, e, i, n) {
			var s, o, a, r, l, h = "function" == typeof t && t,
			c = !n && T(t = h.selector || t);
			if (i = i || [], 1 === c.length) {
				if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === e.nodeType && H && x.relative[o[1].type]) {
					if (e = (x.find.ID(a.matches[0].replace(wt, xt), e) || [])[0], !e) return i;
					h && (e = e.parentNode),
					t = t.slice(o.shift().value.length)
				}
				for (s = ft.needsContext.test(t) ? 0 : o.length; s--&&(a = o[s], !x.relative[r = a.type]);) if ((l = x.find[r]) && (n = l(a.matches[0].replace(wt, xt), yt.test(o[0].type) && u(e.parentNode) || e))) {
					if (o.splice(s, 1), t = n.length && d(o), !t) return J.apply(i, n),
					i;
					break
				}
			}
			return (h || D(t, c))(n, e, !H, i, yt.test(t) && u(e.parentNode) || e),
			i
		},
		w.sortStable = F.split("").sort(U).join("") === F,
		w.detectDuplicates = !!M,
		P(),
		w.sortDetached = s(function(t) {
			return 1 & t.compareDocumentPosition(N.createElement("div"))
		}),
		s(function(t) {
			return t.innerHTML = "<a href='#'></a>",
			"#" === t.firstChild.getAttribute("href")
		}) || o("type|href|height|width",
		function(t, e, i) {
			return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		}),
		w.attributes && s(function(t) {
			return t.innerHTML = "<input/>",
			t.firstChild.setAttribute("value", ""),
			"" === t.firstChild.getAttribute("value")
		}) || o("value",
		function(t, e, i) {
			return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
		}),
		s(function(t) {
			return null == t.getAttribute("disabled")
		}) || o(et,
		function(t, e, i) {
			var n;
			return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value: null
		}),
		e
	} (t);
	st.find = ht,
	st.expr = ht.selectors,
	st.expr[":"] = st.expr.pseudos,
	st.unique = ht.uniqueSort,
	st.text = ht.getText,
	st.isXMLDoc = ht.isXML,
	st.contains = ht.contains;
	var ut = st.expr.match.needsContext,
	ct = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	dt = /^.[^:#\[\.,]*$/;
	st.filter = function(t, e, i) {
		var n = e[0];
		return i && (t = ":not(" + t + ")"),
		1 === e.length && 1 === n.nodeType ? st.find.matchesSelector(n, t) ? [n] : [] : st.find.matches(t, st.grep(e,
		function(t) {
			return 1 === t.nodeType
		}))
	},
	st.fn.extend({
		find: function(t) {
			var e, i = [],
			n = this,
			s = n.length;
			if ("string" != typeof t) return this.pushStack(st(t).filter(function() {
				for (e = 0; s > e; e++) if (st.contains(n[e], this)) return ! 0
			}));
			for (e = 0; s > e; e++) st.find(t, n[e], i);
			return i = this.pushStack(s > 1 ? st.unique(i) : i),
			i.selector = this.selector ? this.selector + " " + t: t,
			i
		},
		filter: function(t) {
			return this.pushStack(n(this, t || [], !1))
		},
		not: function(t) {
			return this.pushStack(n(this, t || [], !0))
		},
		is: function(t) {
			return !! n(this, "string" == typeof t && ut.test(t) ? st(t) : t || [], !1).length
		}
	});
	var pt, ft = t.document,
	mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	gt = st.fn.init = function(t, e) {
		var i, n;
		if (!t) return this;
		if ("string" == typeof t) {
			if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : mt.exec(t), !i || !i[1] && e) return ! e || e.jquery ? (e || pt).find(t) : this.constructor(e).find(t);
			if (i[1]) {
				if (e = e instanceof st ? e[0] : e, st.merge(this, st.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e: ft, !0)), ct.test(i[1]) && st.isPlainObject(e)) for (i in e) st.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
				return this
			}
			if (n = ft.getElementById(i[2]), n && n.parentNode) {
				if (n.id !== i[2]) return pt.find(t);
				this.length = 1,
				this[0] = n
			}
			return this.context = ft,
			this.selector = t,
			this
		}
		return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : st.isFunction(t) ? "undefined" != typeof pt.ready ? pt.ready(t) : t(st) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), st.makeArray(t, this))
	};
	gt.prototype = st.fn,
	pt = st(ft);
	var vt = /^(?:parents|prev(?:Until|All))/,
	bt = {
		children: !0,
		contents: !0,
		next: !0,
		prev: !0
	};
	st.extend({
		dir: function(t, e, i) {
			for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !st(s).is(i));) 1 === s.nodeType && n.push(s),
			s = s[e];
			return n
		},
		sibling: function(t, e) {
			for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
			return i
		}
	}),
	st.fn.extend({
		has: function(t) {
			var e, i = st(t, this),
			n = i.length;
			return this.filter(function() {
				for (e = 0; n > e; e++) if (st.contains(this, i[e])) return ! 0
			})
		},
		closest: function(t, e) {
			for (var i, n = 0,
			s = this.length,
			o = [], a = ut.test(t) || "string" != typeof t ? st(t, e || this.context) : 0; s > n; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && st.find.matchesSelector(i, t))) {
				o.push(i);
				break
			}
			return this.pushStack(o.length > 1 ? st.unique(o) : o)
		},
		index: function(t) {
			return t ? "string" == typeof t ? st.inArray(this[0], st(t)) : st.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
		},
		add: function(t, e) {
			return this.pushStack(st.unique(st.merge(this.get(), st(t, e))))
		},
		addBack: function(t) {
			return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
		}
	}),
	st.each({
		parent: function(t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e: null
		},
		parents: function(t) {
			return st.dir(t, "parentNode")
		},
		parentsUntil: function(t, e, i) {
			return st.dir(t, "parentNode", i)
		},
		next: function(t) {
			return s(t, "nextSibling")
		},
		prev: function(t) {
			return s(t, "previousSibling")
		},
		nextAll: function(t) {
			return st.dir(t, "nextSibling")
		},
		prevAll: function(t) {
			return st.dir(t, "previousSibling")
		},
		nextUntil: function(t, e, i) {
			return st.dir(t, "nextSibling", i)
		},
		prevUntil: function(t, e, i) {
			return st.dir(t, "previousSibling", i)
		},
		siblings: function(t) {
			return st.sibling((t.parentNode || {}).firstChild, t)
		},
		children: function(t) {
			return st.sibling(t.firstChild)
		},
		contents: function(t) {
			return st.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document: st.merge([], t.childNodes)
		}
	},
	function(t, e) {
		st.fn[t] = function(i, n) {
			var s = st.map(this, e, i);
			return "Until" !== t.slice( - 5) && (n = i),
			n && "string" == typeof n && (s = st.filter(n, s)),
			this.length > 1 && (bt[t] || (s = st.unique(s)), vt.test(t) && (s = s.reverse())),
			this.pushStack(s)
		}
	});
	var yt = /\S+/g,
	_t = {};
	st.Callbacks = function(t) {
		t = "string" == typeof t ? _t[t] || o(t) : st.extend({},
		t);
		var e, i, n, s, a, r, l = [],
		h = !t.once && [],
		u = function(o) {
			for (i = t.memory && o, n = !0, a = r || 0, r = 0, s = l.length, e = !0; l && s > a; a++) if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
				i = !1;
				break
			}
			e = !1,
			l && (h ? h.length && u(h.shift()) : i ? l = [] : c.disable())
		},
		c = {
			add: function() {
				if (l) {
					var n = l.length; !
					function o(e) {
						st.each(e,
						function(e, i) {
							var n = st.type(i);
							"function" === n ? t.unique && c.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
						})
					} (arguments),
					e ? s = l.length: i && (r = n, u(i))
				}
				return this
			},
			remove: function() {
				return l && st.each(arguments,
				function(t, i) {
					for (var n; (n = st.inArray(i, l, n)) > -1;) l.splice(n, 1),
					e && (s >= n && s--, a >= n && a--)
				}),
				this
			},
			has: function(t) {
				return t ? st.inArray(t, l) > -1 : !(!l || !l.length)
			},
			empty: function() {
				return l = [],
				s = 0,
				this
			},
			disable: function() {
				return l = h = i = void 0,
				this
			},
			disabled: function() {
				return ! l
			},
			lock: function() {
				return h = void 0,
				i || c.disable(),
				this
			},
			locked: function() {
				return ! h
			},
			fireWith: function(t, i) {
				return ! l || n && !h || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? h.push(i) : u(i)),
				this
			},
			fire: function() {
				return c.fireWith(this, arguments),
				this
			},
			fired: function() {
				return !! n
			}
		};
		return c
	},
	st.extend({
		Deferred: function(t) {
			var e = [["resolve", "done", st.Callbacks("once memory"), "resolved"], ["reject", "fail", st.Callbacks("once memory"), "rejected"], ["notify", "progress", st.Callbacks("memory")]],
			i = "pending",
			n = {
				state: function() {
					return i
				},
				always: function() {
					return s.done(arguments).fail(arguments),
					this
				},
				then: function() {
					var t = arguments;
					return st.Deferred(function(i) {
						st.each(e,
						function(e, o) {
							var a = st.isFunction(t[e]) && t[e];
							s[o[1]](function() {
								var t = a && a.apply(this, arguments);
								t && st.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
							})
						}),
						t = null
					}).promise()
				},
				promise: function(t) {
					return null != t ? st.extend(t, n) : n
				}
			},
			s = {};
			return n.pipe = n.then,
			st.each(e,
			function(t, o) {
				var a = o[2],
				r = o[3];
				n[o[1]] = a.add,
				r && a.add(function() {
					i = r
				},
				e[1 ^ t][2].disable, e[2][2].lock),
				s[o[0]] = function() {
					return s[o[0] + "With"](this === s ? n: this, arguments),
					this
				},
				s[o[0] + "With"] = a.fireWith
			}),
			n.promise(s),
			t && t.call(s, s),
			s
		},
		when: function(t) {
			var e, i, n, s = 0,
			o = X.call(arguments),
			a = o.length,
			r = 1 !== a || t && st.isFunction(t.promise) ? a: 0,
			l = 1 === r ? t: st.Deferred(),
			h = function(t, i, n) {
				return function(s) {
					i[t] = this,
					n[t] = arguments.length > 1 ? X.call(arguments) : s,
					n === e ? l.notifyWith(i, n) : --r || l.resolveWith(i, n)
				}
			};
			if (a > 1) for (e = new Array(a), i = new Array(a), n = new Array(a); a > s; s++) o[s] && st.isFunction(o[s].promise) ? o[s].promise().done(h(s, n, o)).fail(l.reject).progress(h(s, i, e)) : --r;
			return r || l.resolveWith(n, o),
			l.promise()
		}
	});
	var wt;
	st.fn.ready = function(t) {
		return st.ready.promise().done(t),
		this
	},
	st.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(t) {
			t ? st.readyWait++:st.ready(!0)
		},
		ready: function(t) {
			if (t === !0 ? !--st.readyWait: !st.isReady) {
				if (!ft.body) return setTimeout(st.ready);
				st.isReady = !0,
				t !== !0 && --st.readyWait > 0 || (wt.resolveWith(ft, [st]), st.fn.triggerHandler && (st(ft).triggerHandler("ready"), st(ft).off("ready")))
			}
		}
	}),
	st.ready.promise = function(e) {
		if (!wt) if (wt = st.Deferred(), "complete" === ft.readyState) setTimeout(st.ready);
		else if (ft.addEventListener) ft.addEventListener("DOMContentLoaded", r, !1),
		t.addEventListener("load", r, !1);
		else {
			ft.attachEvent("onreadystatechange", r),
			t.attachEvent("onload", r);
			var i = !1;
			try {
				i = null == t.frameElement && ft.documentElement
			} catch(n) {}
			i && i.doScroll && !
			function s() {
				if (!st.isReady) {
					try {
						i.doScroll("left")
					} catch(t) {
						return setTimeout(s, 50)
					}
					a(),
					st.ready()
				}
			} ()
		}
		return wt.promise(e)
	};
	var xt, Ct = "undefined";
	for (xt in st(it)) break;
	it.ownLast = "0" !== xt,
	it.inlineBlockNeedsLayout = !1,
	st(function() {
		var t, e, i, n;
		i = ft.getElementsByTagName("body")[0],
		i && i.style && (e = ft.createElement("div"), n = ft.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Ct && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", it.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
	}),
	function() {
		var t = ft.createElement("div");
		if (null == it.deleteExpando) {
			it.deleteExpando = !0;
			try {
				delete t.test
			} catch(e) {
				it.deleteExpando = !1
			}
		}
		t = null
	} (),
	st.acceptData = function(t) {
		var e = st.noData[(t.nodeName + " ").toLowerCase()],
		i = +t.nodeType || 1;
		return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
	};
	var kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	Tt = /([A-Z])/g;
	st.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(t) {
			return t = t.nodeType ? st.cache[t[st.expando]] : t[st.expando],
			!!t && !h(t)
		},
		data: function(t, e, i) {
			return u(t, e, i)
		},
		removeData: function(t, e) {
			return c(t, e)
		},
		_data: function(t, e, i) {
			return u(t, e, i, !0)
		},
		_removeData: function(t, e) {
			return c(t, e, !0)
		}
	}),
	st.fn.extend({
		data: function(t, e) {
			var i, n, s, o = this[0],
			a = o && o.attributes;
			if (void 0 === t) {
				if (this.length && (s = st.data(o), 1 === o.nodeType && !st._data(o, "parsedAttrs"))) {
					for (i = a.length; i--;) a[i] && (n = a[i].name, 0 === n.indexOf("data-") && (n = st.camelCase(n.slice(5)), l(o, n, s[n])));
					st._data(o, "parsedAttrs", !0)
				}
				return s
			}
			return "object" == typeof t ? this.each(function() {
				st.data(this, t)
			}) : arguments.length > 1 ? this.each(function() {
				st.data(this, t, e)
			}) : o ? l(o, t, st.data(o, t)) : void 0
		},
		removeData: function(t) {
			return this.each(function() {
				st.removeData(this, t)
			})
		}
	}),
	st.extend({
		queue: function(t, e, i) {
			var n;
			return t ? (e = (e || "fx") + "queue", n = st._data(t, e), i && (!n || st.isArray(i) ? n = st._data(t, e, st.makeArray(i)) : n.push(i)), n || []) : void 0
		},
		dequeue: function(t, e) {
			e = e || "fx";
			var i = st.queue(t, e),
			n = i.length,
			s = i.shift(),
			o = st._queueHooks(t, e),
			a = function() {
				st.dequeue(t, e)
			};
			"inprogress" === s && (s = i.shift(), n--),
			s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, a, o)),
			!n && o && o.empty.fire()
		},
		_queueHooks: function(t, e) {
			var i = e + "queueHooks";
			return st._data(t, i) || st._data(t, i, {
				empty: st.Callbacks("once memory").add(function() {
					st._removeData(t, e + "queue"),
					st._removeData(t, i)
				})
			})
		}
	}),
	st.fn.extend({
		queue: function(t, e) {
			var i = 2;
			return "string" != typeof t && (e = t, t = "fx", i--),
			arguments.length < i ? st.queue(this[0], t) : void 0 === e ? this: this.each(function() {
				var i = st.queue(this, t, e);
				st._queueHooks(this, t),
				"fx" === t && "inprogress" !== i[0] && st.dequeue(this, t)
			})
		},
		dequeue: function(t) {
			return this.each(function() {
				st.dequeue(this, t)
			})
		},
		clearQueue: function(t) {
			return this.queue(t || "fx", [])
		},
		promise: function(t, e) {
			var i, n = 1,
			s = st.Deferred(),
			o = this,
			a = this.length,
			r = function() {--n || s.resolveWith(o, [o])
			};
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) i = st._data(o[a], t + "queueHooks"),
			i && i.empty && (n++, i.empty.add(r));
			return r(),
			s.promise(e)
		}
	});
	var Dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	St = ["Top", "Right", "Bottom", "Left"],
	It = function(t, e) {
		return t = e || t,
		"none" === st.css(t, "display") || !st.contains(t.ownerDocument, t)
	},
	Et = st.access = function(t, e, i, n, s, o, a) {
		var r = 0,
		l = t.length,
		h = null == i;
		if ("object" === st.type(i)) {
			s = !0;
			for (r in i) st.access(t, e, r, i[r], !0, o, a)
		} else if (void 0 !== n && (s = !0, st.isFunction(n) || (a = !0), h && (a ? (e.call(t, n), e = null) : (h = e, e = function(t, e, i) {
			return h.call(st(t), i)
		})), e)) for (; l > r; r++) e(t[r], i, a ? n: n.call(t[r], r, e(t[r], i)));
		return s ? t: h ? e.call(t) : l ? e(t[0], i) : o
	},
	Mt = /^(?:checkbox|radio)$/i; !
	function() {
		var t = ft.createElement("input"),
		e = ft.createElement("div"),
		i = ft.createDocumentFragment();
		if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", it.leadingWhitespace = 3 === e.firstChild.nodeType, it.tbody = !e.getElementsByTagName("tbody").length, it.htmlSerialize = !!e.getElementsByTagName("link").length, it.html5Clone = "<:nav></:nav>" !== ft.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), it.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, it.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick",
		function() {
			it.noCloneEvent = !1
		}), e.cloneNode(!0).click()), null == it.deleteExpando) {
			it.deleteExpando = !0;
			try {
				delete e.test
			} catch(n) {
				it.deleteExpando = !1
			}
		}
	} (),
	function() {
		var e, i, n = ft.createElement("div");
		for (e in {
			submit: !0,
			change: !0,
			focusin: !0
		}) i = "on" + e,
		(it[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), it[e + "Bubbles"] = n.attributes[i].expando === !1);
		n = null
	} ();
	var Pt = /^(?:input|select|textarea)$/i,
	Nt = /^key/,
	At = /^(?:mouse|pointer|contextmenu)|click/,
	Ht = /^(?:focusinfocus|focusoutblur)$/,
	Ot = /^([^.]*)(?:\.(.+)|)$/;
	st.event = {
		global: {},
		add: function(t, e, i, n, s) {
			var o, a, r, l, h, u, c, d, p, f, m, g = st._data(t);
			if (g) {
				for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = st.guid++), (a = g.events) || (a = g.events = {}), (u = g.handle) || (u = g.handle = function(t) {
					return typeof st === Ct || t && st.event.triggered === t.type ? void 0 : st.event.dispatch.apply(u.elem, arguments)
				},
				u.elem = t), e = (e || "").match(yt) || [""], r = e.length; r--;) o = Ot.exec(e[r]) || [],
				p = m = o[1],
				f = (o[2] || "").split(".").sort(),
				p && (h = st.event.special[p] || {},
				p = (s ? h.delegateType: h.bindType) || p, h = st.event.special[p] || {},
				c = st.extend({
					type: p,
					origType: m,
					data: n,
					handler: i,
					guid: i.guid,
					selector: s,
					needsContext: s && st.expr.match.needsContext.test(s),
					namespace: f.join(".")
				},
				l), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, h.setup && h.setup.call(t, n, f, u) !== !1 || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, c) : d.push(c), st.event.global[p] = !0);
				t = null
			}
		},
		remove: function(t, e, i, n, s) {
			var o, a, r, l, h, u, c, d, p, f, m, g = st.hasData(t) && st._data(t);
			if (g && (u = g.events)) {
				for (e = (e || "").match(yt) || [""], h = e.length; h--;) if (r = Ot.exec(e[h]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p) {
					for (c = st.event.special[p] || {},
					p = (n ? c.delegateType: c.bindType) || p, d = u[p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) a = d[o],
					!s && m !== a.origType || i && i.guid !== a.guid || r && !r.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, c.remove && c.remove.call(t, a));
					l && !d.length && (c.teardown && c.teardown.call(t, f, g.handle) !== !1 || st.removeEvent(t, p, g.handle), delete u[p])
				} else for (p in u) st.event.remove(t, p + e[h], i, n, !0);
				st.isEmptyObject(u) && (delete g.handle, st._removeData(t, "events"))
			}
		},
		trigger: function(e, i, n, s) {
			var o, a, r, l, h, u, c, d = [n || ft],
			p = et.call(e, "type") ? e.type: e,
			f = et.call(e, "namespace") ? e.namespace.split(".") : [];
			if (r = u = n = n || ft, 3 !== n.nodeType && 8 !== n.nodeType && !Ht.test(p + st.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[st.expando] ? e: new st.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : st.makeArray(i, [e]), h = st.event.special[p] || {},
			s || !h.trigger || h.trigger.apply(n, i) !== !1)) {
				if (!s && !h.noBubble && !st.isWindow(n)) {
					for (l = h.delegateType || p, Ht.test(l + p) || (r = r.parentNode); r; r = r.parentNode) d.push(r),
					u = r;
					u === (n.ownerDocument || ft) && d.push(u.defaultView || u.parentWindow || t)
				}
				for (c = 0; (r = d[c++]) && !e.isPropagationStopped();) e.type = c > 1 ? l: h.bindType || p,
				o = (st._data(r, "events") || {})[e.type] && st._data(r, "handle"),
				o && o.apply(r, i),
				o = a && r[a],
				o && o.apply && st.acceptData(r) && (e.result = o.apply(r, i), e.result === !1 && e.preventDefault());
				if (e.type = p, !s && !e.isDefaultPrevented() && (!h._default || h._default.apply(d.pop(), i) === !1) && st.acceptData(n) && a && n[p] && !st.isWindow(n)) {
					u = n[a],
					u && (n[a] = null),
					st.event.triggered = p;
					try {
						n[p]()
					} catch(m) {}
					st.event.triggered = void 0,
					u && (n[a] = u)
				}
				return e.result
			}
		},
		dispatch: function(t) {
			t = st.event.fix(t);
			var e, i, n, s, o, a = [],
			r = X.call(arguments),
			l = (st._data(this, "events") || {})[t.type] || [],
			h = st.event.special[t.type] || {};
			if (r[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
				for (a = st.event.handlers.call(this, t, l), e = 0; (s = a[e++]) && !t.isPropagationStopped();) for (t.currentTarget = s.elem, o = 0; (n = s.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((st.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, r), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
				return h.postDispatch && h.postDispatch.call(this, t),
				t.result
			}
		},
		handlers: function(t, e) {
			var i, n, s, o, a = [],
			r = e.delegateCount,
			l = t.target;
			if (r && l.nodeType && (!t.button || "click" !== t.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
				for (s = [], o = 0; r > o; o++) n = e[o],
				i = n.selector + " ",
				void 0 === s[i] && (s[i] = n.needsContext ? st(i, this).index(l) >= 0 : st.find(i, this, null, [l]).length),
				s[i] && s.push(n);
				s.length && a.push({
					elem: l,
					handlers: s
				})
			}
			return r < e.length && a.push({
				elem: this,
				handlers: e.slice(r)
			}),
			a
		},
		fix: function(t) {
			if (t[st.expando]) return t;
			var e, i, n, s = t.type,
			o = t,
			a = this.fixHooks[s];
			for (a || (this.fixHooks[s] = a = At.test(s) ? this.mouseHooks: Nt.test(s) ? this.keyHooks: {}), n = a.props ? this.props.concat(a.props) : this.props, t = new st.Event(o), e = n.length; e--;) i = n[e],
			t[i] = o[i];
			return t.target || (t.target = o.srcElement || ft),
			3 === t.target.nodeType && (t.target = t.target.parentNode),
			t.metaKey = !!t.metaKey,
			a.filter ? a.filter(t, o) : t
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(t, e) {
				return null == t.which && (t.which = null != e.charCode ? e.charCode: e.keyCode),
				t
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(t, e) {
				var i, n, s, o = e.button,
				a = e.fromElement;
				return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || ft, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)),
				!t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement: a),
				t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
				t
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== f() && this.focus) try {
						return this.focus(),
						!1
					} catch(t) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === f() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return st.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function(t) {
					return st.nodeName(t.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(t) {
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		},
		simulate: function(t, e, i, n) {
			var s = st.extend(new st.Event, i, {
				type: t,
				isSimulated: !0,
				originalEvent: {}
			});
			n ? st.event.trigger(s, null, e) : st.event.dispatch.call(e, s),
			s.isDefaultPrevented() && i.preventDefault()
		}
	},
	st.removeEvent = ft.removeEventListener ?
	function(t, e, i) {
		t.removeEventListener && t.removeEventListener(e, i, !1)
	}: function(t, e, i) {
		var n = "on" + e;
		t.detachEvent && (typeof t[n] === Ct && (t[n] = null), t.detachEvent(n, i))
	},
	st.Event = function(t, e) {
		return this instanceof st.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d: p) : this.type = t, e && st.extend(this, e), this.timeStamp = t && t.timeStamp || st.now(), void(this[st.expando] = !0)) : new st.Event(t, e)
	},
	st.Event.prototype = {
		isDefaultPrevented: p,
		isPropagationStopped: p,
		isImmediatePropagationStopped: p,
		preventDefault: function() {
			var t = this.originalEvent;
			this.isDefaultPrevented = d,
			t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
		},
		stopPropagation: function() {
			var t = this.originalEvent;
			this.isPropagationStopped = d,
			t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = d,
			t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
			this.stopPropagation()
		}
	},
	st.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	},
	function(t, e) {
		st.event.special[t] = {
			delegateType: e,
			bindType: e,
			handle: function(t) {
				var i, n = this,
				s = t.relatedTarget,
				o = t.handleObj;
				return (!s || s !== n && !st.contains(n, s)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e),
				i
			}
		}
	}),
	it.submitBubbles || (st.event.special.submit = {
		setup: function() {
			return st.nodeName(this, "form") ? !1 : void st.event.add(this, "click._submit keypress._submit",
			function(t) {
				var e = t.target,
				i = st.nodeName(e, "input") || st.nodeName(e, "button") ? e.form: void 0;
				i && !st._data(i, "submitBubbles") && (st.event.add(i, "submit._submit",
				function(t) {
					t._submit_bubble = !0
				}), st._data(i, "submitBubbles", !0))
			})
		},
		postDispatch: function(t) {
			t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && st.event.simulate("submit", this.parentNode, t, !0))
		},
		teardown: function() {
			return st.nodeName(this, "form") ? !1 : void st.event.remove(this, "._submit")
		}
	}),
	it.changeBubbles || (st.event.special.change = {
		setup: function() {
			return Pt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (st.event.add(this, "propertychange._change",
			function(t) {
				"checked" === t.originalEvent.propertyName && (this._just_changed = !0)
			}), st.event.add(this, "click._change",
			function(t) {
				this._just_changed && !t.isTrigger && (this._just_changed = !1),
				st.event.simulate("change", this, t, !0)
			})), !1) : void st.event.add(this, "beforeactivate._change",
			function(t) {
				var e = t.target;
				Pt.test(e.nodeName) && !st._data(e, "changeBubbles") && (st.event.add(e, "change._change",
				function(t) { ! this.parentNode || t.isSimulated || t.isTrigger || st.event.simulate("change", this.parentNode, t, !0)
				}), st._data(e, "changeBubbles", !0))
			})
		},
		handle: function(t) {
			var e = t.target;
			return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return st.event.remove(this, "._change"),
			!Pt.test(this.nodeName)
		}
	}),
	it.focusinBubbles || st.each({
		focus: "focusin",
		blur: "focusout"
	},
	function(t, e) {
		var i = function(t) {
			st.event.simulate(e, t.target, st.event.fix(t), !0)
		};
		st.event.special[e] = {
			setup: function() {
				var n = this.ownerDocument || this,
				s = st._data(n, e);
				s || n.addEventListener(t, i, !0),
				st._data(n, e, (s || 0) + 1)
			},
			teardown: function() {
				var n = this.ownerDocument || this,
				s = st._data(n, e) - 1;
				s ? st._data(n, e, s) : (n.removeEventListener(t, i, !0), st._removeData(n, e))
			}
		}
	}),
	st.fn.extend({
		on: function(t, e, i, n, s) {
			var o, a;
			if ("object" == typeof t) {
				"string" != typeof e && (i = i || e, e = void 0);
				for (o in t) this.on(o, e, i, t[o], s);
				return this
			}
			if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = p;
			else if (!n) return this;
			return 1 === s && (a = n, n = function(t) {
				return st().off(t),
				a.apply(this, arguments)
			},
			n.guid = a.guid || (a.guid = st.guid++)),
			this.each(function() {
				st.event.add(this, t, n, i, e)
			})
		},
		one: function(t, e, i, n) {
			return this.on(t, e, i, n, 1)
		},
		off: function(t, e, i) {
			var n, s;
			if (t && t.preventDefault && t.handleObj) return n = t.handleObj,
			st(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace: n.origType, n.selector, n.handler),
			this;
			if ("object" == typeof t) {
				for (s in t) this.off(s, e, t[s]);
				return this
			}
			return (e === !1 || "function" == typeof e) && (i = e, e = void 0),
			i === !1 && (i = p),
			this.each(function() {
				st.event.remove(this, t, i, e)
			})
		},
		trigger: function(t, e) {
			return this.each(function() {
				st.event.trigger(t, e, this)
			})
		},
		triggerHandler: function(t, e) {
			var i = this[0];
			return i ? st.event.trigger(t, e, i, !0) : void 0
		}
	});
	var zt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	jt = / jQuery\d+="(?:null|\d+)"/g,
	Wt = new RegExp("<(?:" + zt + ")[\\s/>]", "i"),
	Ft = /^\s+/,
	Lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	$t = /<([\w:]+)/,
	Rt = /<tbody/i,
	qt = /<|&#?\w+;/,
	Bt = /<(?:script|style|link)/i,
	Yt = /checked\s*(?:[^=]|=\s*.checked.)/i,
	Ut = /^$|\/(?:java|ecma)script/i,
	Vt = /^true\/(.*)/,
	Kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	Xt = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: it.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	},
	Qt = m(ft),
	Gt = Qt.appendChild(ft.createElement("div"));
	Xt.optgroup = Xt.option,
	Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead,
	Xt.th = Xt.td,
	st.extend({
		clone: function(t, e, i) {
			var n, s, o, a, r, l = st.contains(t.ownerDocument, t);
			if (it.html5Clone || st.isXMLDoc(t) || !Wt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Gt.innerHTML = t.outerHTML, Gt.removeChild(o = Gt.firstChild)), !(it.noCloneEvent && it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || st.isXMLDoc(t))) for (n = g(o), r = g(t), a = 0; null != (s = r[a]); ++a) n[a] && C(s, n[a]);
			if (e) if (i) for (r = r || g(t), n = n || g(o), a = 0; null != (s = r[a]); a++) x(s, n[a]);
			else x(t, o);
			return n = g(o, "script"),
			n.length > 0 && w(n, !l && g(t, "script")),
			n = r = s = null,
			o
		},
		buildFragment: function(t, e, i, n) {
			for (var s, o, a, r, l, h, u, c = t.length,
			d = m(e), p = [], f = 0; c > f; f++) if (o = t[f], o || 0 === o) if ("object" === st.type(o)) st.merge(p, o.nodeType ? [o] : o);
			else if (qt.test(o)) {
				for (r = r || d.appendChild(e.createElement("div")), l = ($t.exec(o) || ["", ""])[1].toLowerCase(), u = Xt[l] || Xt._default, r.innerHTML = u[1] + o.replace(Lt, "<$1></$2>") + u[2], s = u[0]; s--;) r = r.lastChild;
				if (!it.leadingWhitespace && Ft.test(o) && p.push(e.createTextNode(Ft.exec(o)[0])), !it.tbody) for (o = "table" !== l || Rt.test(o) ? "<table>" !== u[1] || Rt.test(o) ? 0 : r: r.firstChild, s = o && o.childNodes.length; s--;) st.nodeName(h = o.childNodes[s], "tbody") && !h.childNodes.length && o.removeChild(h);
				for (st.merge(p, r.childNodes), r.textContent = ""; r.firstChild;) r.removeChild(r.firstChild);
				r = d.lastChild
			} else p.push(e.createTextNode(o));
			for (r && d.removeChild(r), it.appendChecked || st.grep(g(p, "input"), v), f = 0; o = p[f++];) if ((!n || -1 === st.inArray(o, n)) && (a = st.contains(o.ownerDocument, o), r = g(d.appendChild(o), "script"), a && w(r), i)) for (s = 0; o = r[s++];) Ut.test(o.type || "") && i.push(o);
			return r = null,
			d
		},
		cleanData: function(t, e) {
			for (var i, n, s, o, a = 0,
			r = st.expando,
			l = st.cache,
			h = it.deleteExpando,
			u = st.event.special; null != (i = t[a]); a++) if ((e || st.acceptData(i)) && (s = i[r], o = s && l[s])) {
				if (o.events) for (n in o.events) u[n] ? st.event.remove(i, n) : st.removeEvent(i, n, o.handle);
				l[s] && (delete l[s], h ? delete i[r] : typeof i.removeAttribute !== Ct ? i.removeAttribute(r) : i[r] = null, K.push(s))
			}
		}
	}),
	st.fn.extend({
		text: function(t) {
			return Et(this,
			function(t) {
				return void 0 === t ? st.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ft).createTextNode(t))
			},
			null, t, arguments.length)
		},
		append: function() {
			return this.domManip(arguments,
			function(t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = b(this, t);
					e.appendChild(t)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments,
			function(t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = b(this, t);
					e.insertBefore(t, e.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments,
			function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function() {
			return this.domManip(arguments,
			function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		remove: function(t, e) {
			for (var i, n = t ? st.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || st.cleanData(g(i)),
			i.parentNode && (e && st.contains(i.ownerDocument, i) && w(g(i, "script")), i.parentNode.removeChild(i));
			return this
		},
		empty: function() {
			for (var t, e = 0; null != (t = this[e]); e++) {
				for (1 === t.nodeType && st.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
				t.options && st.nodeName(t, "select") && (t.options.length = 0)
			}
			return this
		},
		clone: function(t, e) {
			return t = null == t ? !1 : t,
			e = null == e ? t: e,
			this.map(function() {
				return st.clone(this, t, e)
			})
		},
		html: function(t) {
			return Et(this,
			function(t) {
				var e = this[0] || {},
				i = 0,
				n = this.length;
				if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(jt, "") : void 0;
				if (! ("string" != typeof t || Bt.test(t) || !it.htmlSerialize && Wt.test(t) || !it.leadingWhitespace && Ft.test(t) || Xt[($t.exec(t) || ["", ""])[1].toLowerCase()])) {
					t = t.replace(Lt, "<$1></$2>");
					try {
						for (; n > i; i++) e = this[i] || {},
						1 === e.nodeType && (st.cleanData(g(e, !1)), e.innerHTML = t);
						e = 0
					} catch(s) {}
				}
				e && this.empty().append(t)
			},
			null, t, arguments.length)
		},
		replaceWith: function() {
			var t = arguments[0];
			return this.domManip(arguments,
			function(e) {
				t = this.parentNode,
				st.cleanData(g(this)),
				t && t.replaceChild(e, this)
			}),
			t && (t.length || t.nodeType) ? this: this.remove()
		},
		detach: function(t) {
			return this.remove(t, !0)
		},
		domManip: function(t, e) {
			t = Q.apply([], t);
			var i, n, s, o, a, r, l = 0,
			h = this.length,
			u = this,
			c = h - 1,
			d = t[0],
			p = st.isFunction(d);
			if (p || h > 1 && "string" == typeof d && !it.checkClone && Yt.test(d)) return this.each(function(i) {
				var n = u.eq(i);
				p && (t[0] = d.call(this, i, n.html())),
				n.domManip(t, e)
			});
			if (h && (r = st.buildFragment(t, this[0].ownerDocument, !1, this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
				for (o = st.map(g(r, "script"), y), s = o.length; h > l; l++) n = r,
				l !== c && (n = st.clone(n, !0, !0), s && st.merge(o, g(n, "script"))),
				e.call(this[l], n, l);
				if (s) for (a = o[o.length - 1].ownerDocument, st.map(o, _), l = 0; s > l; l++) n = o[l],
				Ut.test(n.type || "") && !st._data(n, "globalEval") && st.contains(a, n) && (n.src ? st._evalUrl && st._evalUrl(n.src) : st.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Kt, "")));
				r = i = null
			}
			return this
		}
	}),
	st.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	},
	function(t, e) {
		st.fn[t] = function(t) {
			for (var i, n = 0,
			s = [], o = st(t), a = o.length - 1; a >= n; n++) i = n === a ? this: this.clone(!0),
			st(o[n])[e](i),
			G.apply(s, i.get());
			return this.pushStack(s)
		}
	});
	var Jt, Zt = {}; !
	function() {
		var t;
		it.shrinkWrapBlocks = function() {
			if (null != t) return t;
			t = !1;
			var e, i, n;
			return i = ft.getElementsByTagName("body")[0],
			i && i.style ? (e = ft.createElement("div"), n = ft.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Ct && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ft.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
		}
	} ();
	var te, ee, ie = /^margin/,
	ne = new RegExp("^(" + Dt + ")(?!px)[a-z%]+$", "i"),
	se = /^(top|right|bottom|left)$/;
	t.getComputedStyle ? (te = function(e) {
		return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
	},
	ee = function(t, e, i) {
		var n, s, o, a, r = t.style;
		return i = i || te(t),
		a = i ? i.getPropertyValue(e) || i[e] : void 0,
		i && ("" !== a || st.contains(t.ownerDocument, t) || (a = st.style(t, e)), ne.test(a) && ie.test(e) && (n = r.width, s = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = n, r.minWidth = s, r.maxWidth = o)),
		void 0 === a ? a: a + ""
	}) : ft.documentElement.currentStyle && (te = function(t) {
		return t.currentStyle
	},
	ee = function(t, e, i) {
		var n, s, o, a, r = t.style;
		return i = i || te(t),
		a = i ? i[e] : void 0,
		null == a && r && r[e] && (a = r[e]),
		ne.test(a) && !se.test(e) && (n = r.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), r.left = "fontSize" === e ? "1em": a, a = r.pixelLeft + "px", r.left = n, o && (s.left = o)),
		void 0 === a ? a: a + "" || "auto"
	}),
	!
	function() {
		function e() {
			var e, i, n, s;
			i = ft.getElementsByTagName("body")[0],
			i && i.style && (e = ft.createElement("div"), n = ft.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, a = "4px" === (t.getComputedStyle(e, null) || {
				width: "4px"
			}).width, s = e.appendChild(ft.createElement("div")), s.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", s.style.marginRight = s.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight), e.removeChild(s)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = e.getElementsByTagName("td"), s[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === s[0].offsetHeight, r && (s[0].style.display = "", s[1].style.display = "none", r = 0 === s[0].offsetHeight), i.removeChild(n))
		}
		var i, n, s, o, a, r, l;
		i = ft.createElement("div"),
		i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
		s = i.getElementsByTagName("a")[0],
		(n = s && s.style) && (n.cssText = "float:left;opacity:.5", it.opacity = "0.5" === n.opacity, it.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === i.style.backgroundClip, it.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, st.extend(it, {
			reliableHiddenOffsets: function() {
				return null == r && e(),
				r
			},
			boxSizingReliable: function() {
				return null == a && e(),
				a
			},
			pixelPosition: function() {
				return null == o && e(),
				o
			},
			reliableMarginRight: function() {
				return null == l && e(),
				l
			}
		}))
	} (),
	st.swap = function(t, e, i, n) {
		var s, o, a = {};
		for (o in e) a[o] = t.style[o],
		t.style[o] = e[o];
		s = i.apply(t, n || []);
		for (o in e) t.style[o] = a[o];
		return s
	};
	var oe = /alpha\([^)]*\)/i,
	ae = /opacity\s*=\s*([^)]*)/,
	re = /^(none|table(?!-c[ea]).+)/,
	le = new RegExp("^(" + Dt + ")(.*)$", "i"),
	he = new RegExp("^([+-])=(" + Dt + ")", "i"),
	ue = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	},
	ce = {
		letterSpacing: "0",
		fontWeight: "400"
	},
	de = ["Webkit", "O", "Moz", "ms"];
	st.extend({
		cssHooks: {
			opacity: {
				get: function(t, e) {
					if (e) {
						var i = ee(t, "opacity");
						return "" === i ? "1": i
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": it.cssFloat ? "cssFloat": "styleFloat"
		},
		style: function(t, e, i, n) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var s, o, a, r = st.camelCase(e),
				l = t.style;
				if (e = st.cssProps[r] || (st.cssProps[r] = S(l, r)), a = st.cssHooks[e] || st.cssHooks[r], void 0 === i) return a && "get" in a && void 0 !== (s = a.get(t, !1, n)) ? s: l[e];
				if (o = typeof i, "string" === o && (s = he.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(st.css(t, e)), o = "number"), null != i && i === i && ("number" !== o || st.cssNumber[r] || (i += "px"), it.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (i = a.set(t, i, n))))) try {
					l[e] = i
				} catch(h) {}
			}
		},
		css: function(t, e, i, n) {
			var s, o, a, r = st.camelCase(e);
			return e = st.cssProps[r] || (st.cssProps[r] = S(t.style, r)),
			a = st.cssHooks[e] || st.cssHooks[r],
			a && "get" in a && (o = a.get(t, !0, i)),
			void 0 === o && (o = ee(t, e, n)),
			"normal" === o && e in ce && (o = ce[e]),
			"" === i || i ? (s = parseFloat(o), i === !0 || st.isNumeric(s) ? s || 0 : o) : o
		}
	}),
	st.each(["height", "width"],
	function(t, e) {
		st.cssHooks[e] = {
			get: function(t, i, n) {
				return i ? re.test(st.css(t, "display")) && 0 === t.offsetWidth ? st.swap(t, ue,
				function() {
					return P(t, e, n)
				}) : P(t, e, n) : void 0
			},
			set: function(t, i, n) {
				var s = n && te(t);
				return E(t, i, n ? M(t, e, n, it.boxSizing && "border-box" === st.css(t, "boxSizing", !1, s), s) : 0)
			}
		}
	}),
	it.opacity || (st.cssHooks.opacity = {
		get: function(t, e) {
			return ae.test((e && t.currentStyle ? t.currentStyle.filter: t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": e ? "1": ""
		},
		set: function(t, e) {
			var i = t.style,
			n = t.currentStyle,
			s = st.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")": "",
			o = n && n.filter || i.filter || "";
			i.zoom = 1,
			(e >= 1 || "" === e) && "" === st.trim(o.replace(oe, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = oe.test(o) ? o.replace(oe, s) : o + " " + s)
		}
	}),
	st.cssHooks.marginRight = D(it.reliableMarginRight,
	function(t, e) {
		return e ? st.swap(t, {
			display: "inline-block"
		},
		ee, [t, "marginRight"]) : void 0
	}),
	st.each({
		margin: "",
		padding: "",
		border: "Width"
	},
	function(t, e) {
		st.cssHooks[t + e] = {
			expand: function(i) {
				for (var n = 0,
				s = {},
				o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + St[n] + e] = o[n] || o[n - 2] || o[0];
				return s
			}
		},
		ie.test(t) || (st.cssHooks[t + e].set = E)
	}),
	st.fn.extend({
		css: function(t, e) {
			return Et(this,
			function(t, e, i) {
				var n, s, o = {},
				a = 0;
				if (st.isArray(e)) {
					for (n = te(t), s = e.length; s > a; a++) o[e[a]] = st.css(t, e[a], !1, n);
					return o
				}
				return void 0 !== i ? st.style(t, e, i) : st.css(t, e)
			},
			t, e, arguments.length > 1)
		},
		show: function() {
			return I(this, !0)
		},
		hide: function() {
			return I(this)
		},
		toggle: function(t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
				It(this) ? st(this).show() : st(this).hide()
			})
		}
	}),
	st.Tween = N,
	N.prototype = {
		constructor: N,
		init: function(t, e, i, n, s, o) {
			this.elem = t,
			this.prop = i,
			this.easing = s || "swing",
			this.options = e,
			this.start = this.now = this.cur(),
			this.end = n,
			this.unit = o || (st.cssNumber[i] ? "": "px")
		},
		cur: function() {
			var t = N.propHooks[this.prop];
			return t && t.get ? t.get(this) : N.propHooks._default.get(this)
		},
		run: function(t) {
			var e, i = N.propHooks[this.prop];
			return this.options.duration ? this.pos = e = st.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
			this.now = (this.end - this.start) * e + this.start,
			this.options.step && this.options.step.call(this.elem, this.now, this),
			i && i.set ? i.set(this) : N.propHooks._default.set(this),
			this
		}
	},
	N.prototype.init.prototype = N.prototype,
	N.propHooks = {
		_default: {
			get: function(t) {
				var e;
				return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = st.css(t.elem, t.prop, ""), e && "auto" !== e ? e: 0) : t.elem[t.prop]
			},
			set: function(t) {
				st.fx.step[t.prop] ? st.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[st.cssProps[t.prop]] || st.cssHooks[t.prop]) ? st.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
			}
		}
	},
	N.propHooks.scrollTop = N.propHooks.scrollLeft = {
		set: function(t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	},
	st.easing = {
		linear: function(t) {
			return t
		},
		swing: function(t) {
			return.5 - Math.cos(t * Math.PI) / 2
		}
	},
	st.fx = N.prototype.init,
	st.fx.step = {};
	var pe, fe, me = /^(?:toggle|show|hide)$/,
	ge = new RegExp("^(?:([+-])=|)(" + Dt + ")([a-z%]*)$", "i"),
	ve = /queueHooks$/,
	be = [z],
	ye = {
		"*": [function(t, e) {
			var i = this.createTween(t, e),
			n = i.cur(),
			s = ge.exec(e),
			o = s && s[3] || (st.cssNumber[t] ? "": "px"),
			a = (st.cssNumber[t] || "px" !== o && +n) && ge.exec(st.css(i.elem, t)),
			r = 1,
			l = 20;
			if (a && a[3] !== o) {
				o = o || a[3],
				s = s || [],
				a = +n || 1;
				do r = r || ".5",
				a /= r,
				st.style(i.elem, t, a + o);
				while (r !== (r = i.cur() / n) && 1 !== r && --l)
			}
			return s && (a = i.start = +a || +n || 0, i.unit = o, i.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2]),
			i
		}]
	};
	st.Animation = st.extend(W, {
		tweener: function(t, e) {
			st.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
			for (var i, n = 0,
			s = t.length; s > n; n++) i = t[n],
			ye[i] = ye[i] || [],
			ye[i].unshift(e)
		},
		prefilter: function(t, e) {
			e ? be.unshift(t) : be.push(t)
		}
	}),
	st.speed = function(t, e, i) {
		var n = t && "object" == typeof t ? st.extend({},
		t) : {
			complete: i || !i && e || st.isFunction(t) && t,
			duration: t,
			easing: i && e || e && !st.isFunction(e) && e
		};
		return n.duration = st.fx.off ? 0 : "number" == typeof n.duration ? n.duration: n.duration in st.fx.speeds ? st.fx.speeds[n.duration] : st.fx.speeds._default,
		(null == n.queue || n.queue === !0) && (n.queue = "fx"),
		n.old = n.complete,
		n.complete = function() {
			st.isFunction(n.old) && n.old.call(this),
			n.queue && st.dequeue(this, n.queue)
		},
		n
	},
	st.fn.extend({
		fadeTo: function(t, e, i, n) {
			return this.filter(It).css("opacity", 0).show().end().animate({
				opacity: e
			},
			t, i, n)
		},
		animate: function(t, e, i, n) {
			var s = st.isEmptyObject(t),
			o = st.speed(e, i, n),
			a = function() {
				var e = W(this, st.extend({},
				t), o); (s || st._data(this, "finish")) && e.stop(!0)
			};
			return a.finish = a,
			s || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(t, e, i) {
			var n = function(t) {
				var e = t.stop;
				delete t.stop,
				e(i)
			};
			return "string" != typeof t && (i = e, e = t, t = void 0),
			e && t !== !1 && this.queue(t || "fx", []),
			this.each(function() {
				var e = !0,
				s = null != t && t + "queueHooks",
				o = st.timers,
				a = st._data(this);
				if (s) a[s] && a[s].stop && n(a[s]);
				else for (s in a) a[s] && a[s].stop && ve.test(s) && n(a[s]);
				for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1)); (e || !i) && st.dequeue(this, t)
			})
		},
		finish: function(t) {
			return t !== !1 && (t = t || "fx"),
			this.each(function() {
				var e, i = st._data(this),
				n = i[t + "queue"],
				s = i[t + "queueHooks"],
				o = st.timers,
				a = n ? n.length: 0;
				for (i.finish = !0, st.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
				for (e = 0; a > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
				delete i.finish
			})
		}
	}),
	st.each(["toggle", "show", "hide"],
	function(t, e) {
		var i = st.fn[e];
		st.fn[e] = function(t, n, s) {
			return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(H(e, !0), t, n, s)
		}
	}),
	st.each({
		slideDown: H("show"),
		slideUp: H("hide"),
		slideToggle: H("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	},
	function(t, e) {
		st.fn[t] = function(t, i, n) {
			return this.animate(e, t, i, n)
		}
	}),
	st.timers = [],
	st.fx.tick = function() {
		var t, e = st.timers,
		i = 0;
		for (pe = st.now(); i < e.length; i++) t = e[i],
		t() || e[i] !== t || e.splice(i--, 1);
		e.length || st.fx.stop(),
		pe = void 0
	},
	st.fx.timer = function(t) {
		st.timers.push(t),
		t() ? st.fx.start() : st.timers.pop()
	},
	st.fx.interval = 13,
	st.fx.start = function() {
		fe || (fe = setInterval(st.fx.tick, st.fx.interval))
	},
	st.fx.stop = function() {
		clearInterval(fe),
		fe = null
	},
	st.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	},
	st.fn.delay = function(t, e) {
		return t = st.fx ? st.fx.speeds[t] || t: t,
		e = e || "fx",
		this.queue(e,
		function(e, i) {
			var n = setTimeout(e, t);
			i.stop = function() {
				clearTimeout(n)
			}
		})
	},
	function() {
		var t, e, i, n, s;
		e = ft.createElement("div"),
		e.setAttribute("className", "t"),
		e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
		n = e.getElementsByTagName("a")[0],
		i = ft.createElement("select"),
		s = i.appendChild(ft.createElement("option")),
		t = e.getElementsByTagName("input")[0],
		n.style.cssText = "top:1px",
		it.getSetAttribute = "t" !== e.className,
		it.style = /top/.test(n.getAttribute("style")),
		it.hrefNormalized = "/a" === n.getAttribute("href"),
		it.checkOn = !!t.value,
		it.optSelected = s.selected,
		it.enctype = !!ft.createElement("form").enctype,
		i.disabled = !0,
		it.optDisabled = !s.disabled,
		t = ft.createElement("input"),
		t.setAttribute("value", ""),
		it.input = "" === t.getAttribute("value"),
		t.value = "t",
		t.setAttribute("type", "radio"),
		it.radioValue = "t" === t.value
	} ();
	var _e = /\r/g;
	st.fn.extend({
		val: function(t) {
			var e, i, n, s = this[0];
			return arguments.length ? (n = st.isFunction(t), this.each(function(i) {
				var s;
				1 === this.nodeType && (s = n ? t.call(this, i, st(this).val()) : t, null == s ? s = "": "number" == typeof s ? s += "": st.isArray(s) && (s = st.map(s,
				function(t) {
					return null == t ? "": t + ""
				})), e = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
			})) : s ? (e = st.valHooks[s.type] || st.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i: (i = s.value, "string" == typeof i ? i.replace(_e, "") : null == i ? "": i)) : void 0
		}
	}),
	st.extend({
		valHooks: {
			option: {
				get: function(t) {
					var e = st.find.attr(t, "value");
					return null != e ? e: st.trim(st.text(t))
				}
			},
			select: {
				get: function(t) {
					for (var e, i, n = t.options,
					s = t.selectedIndex,
					o = "select-one" === t.type || 0 > s,
					a = o ? null: [], r = o ? s + 1 : n.length, l = 0 > s ? r: o ? s: 0; r > l; l++) if (i = n[l], !(!i.selected && l !== s || (it.optDisabled ? i.disabled: null !== i.getAttribute("disabled")) || i.parentNode.disabled && st.nodeName(i.parentNode, "optgroup"))) {
						if (e = st(i).val(), o) return e;
						a.push(e)
					}
					return a
				},
				set: function(t, e) {
					for (var i, n, s = t.options,
					o = st.makeArray(e), a = s.length; a--;) if (n = s[a], st.inArray(st.valHooks.option.get(n), o) >= 0) try {
						n.selected = i = !0
					} catch(r) {
						n.scrollHeight
					} else n.selected = !1;
					return i || (t.selectedIndex = -1),
					s
				}
			}
		}
	}),
	st.each(["radio", "checkbox"],
	function() {
		st.valHooks[this] = {
			set: function(t, e) {
				return st.isArray(e) ? t.checked = st.inArray(st(t).val(), e) >= 0 : void 0
			}
		},
		it.checkOn || (st.valHooks[this].get = function(t) {
			return null === t.getAttribute("value") ? "on": t.value
		})
	});
	var we, xe, Ce = st.expr.attrHandle,
	ke = /^(?:checked|selected)$/i,
	Te = it.getSetAttribute,
	De = it.input;
	st.fn.extend({
		attr: function(t, e) {
			return Et(this, st.attr, t, e, arguments.length > 1)
		},
		removeAttr: function(t) {
			return this.each(function() {
				st.removeAttr(this, t)
			})
		}
	}),
	st.extend({
		attr: function(t, e, i) {
			var n, s, o = t.nodeType;
			return t && 3 !== o && 8 !== o && 2 !== o ? typeof t.getAttribute === Ct ? st.prop(t, e, i) : (1 === o && st.isXMLDoc(t) || (e = e.toLowerCase(), n = st.attrHooks[e] || (st.expr.match.bool.test(e) ? xe: we)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s: (s = st.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s: (t.setAttribute(e, i + ""), i) : void st.removeAttr(t, e)) : void 0
		},
		removeAttr: function(t, e) {
			var i, n, s = 0,
			o = e && e.match(yt);
			if (o && 1 === t.nodeType) for (; i = o[s++];) n = st.propFix[i] || i,
			st.expr.match.bool.test(i) ? De && Te || !ke.test(i) ? t[n] = !1 : t[st.camelCase("default-" + i)] = t[n] = !1 : st.attr(t, i, ""),
			t.removeAttribute(Te ? i: n)
		},
		attrHooks: {
			type: {
				set: function(t, e) {
					if (!it.radioValue && "radio" === e && st.nodeName(t, "input")) {
						var i = t.value;
						return t.setAttribute("type", e),
						i && (t.value = i),
						e
					}
				}
			}
		}
	}),
	xe = {
		set: function(t, e, i) {
			return e === !1 ? st.removeAttr(t, i) : De && Te || !ke.test(i) ? t.setAttribute(!Te && st.propFix[i] || i, i) : t[st.camelCase("default-" + i)] = t[i] = !0,
			i
		}
	},
	st.each(st.expr.match.bool.source.match(/\w+/g),
	function(t, e) {
		var i = Ce[e] || st.find.attr;
		Ce[e] = De && Te || !ke.test(e) ?
		function(t, e, n) {
			var s, o;
			return n || (o = Ce[e], Ce[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, Ce[e] = o),
			s
		}: function(t, e, i) {
			return i ? void 0 : t[st.camelCase("default-" + e)] ? e.toLowerCase() : null
		}
	}),
	De && Te || (st.attrHooks.value = {
		set: function(t, e, i) {
			return st.nodeName(t, "input") ? void(t.defaultValue = e) : we && we.set(t, e, i)
		}
	}),
	Te || (we = {
		set: function(t, e, i) {
			var n = t.getAttributeNode(i);
			return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)),
			n.value = e += "",
			"value" === i || e === t.getAttribute(i) ? e: void 0
		}
	},
	Ce.id = Ce.name = Ce.coords = function(t, e, i) {
		var n;
		return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value: null
	},
	st.valHooks.button = {
		get: function(t, e) {
			var i = t.getAttributeNode(e);
			return i && i.specified ? i.value: void 0
		},
		set: we.set
	},
	st.attrHooks.contenteditable = {
		set: function(t, e, i) {
			we.set(t, "" === e ? !1 : e, i)
		}
	},
	st.each(["width", "height"],
	function(t, e) {
		st.attrHooks[e] = {
			set: function(t, i) {
				return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
			}
		}
	})),
	it.style || (st.attrHooks.style = {
		get: function(t) {
			return t.style.cssText || void 0
		},
		set: function(t, e) {
			return t.style.cssText = e + ""
		}
	});
	var Se = /^(?:input|select|textarea|button|object)$/i,
	Ie = /^(?:a|area)$/i;
	st.fn.extend({
		prop: function(t, e) {
			return Et(this, st.prop, t, e, arguments.length > 1)
		},
		removeProp: function(t) {
			return t = st.propFix[t] || t,
			this.each(function() {
				try {
					this[t] = void 0,
					delete this[t]
				} catch(e) {}
			})
		}
	}),
	st.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(t, e, i) {
			var n, s, o, a = t.nodeType;
			return t && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !st.isXMLDoc(t), o && (e = st.propFix[e] || e, s = st.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n: t[e] = i: s && "get" in s && null !== (n = s.get(t, e)) ? n: t[e]) : void 0
		},
		propHooks: {
			tabIndex: {
				get: function(t) {
					var e = st.find.attr(t, "tabindex");
					return e ? parseInt(e, 10) : Se.test(t.nodeName) || Ie.test(t.nodeName) && t.href ? 0 : -1
				}
			}
		}
	}),
	it.hrefNormalized || st.each(["href", "src"],
	function(t, e) {
		st.propHooks[e] = {
			get: function(t) {
				return t.getAttribute(e, 4)
			}
		}
	}),
	it.optSelected || (st.propHooks.selected = {
		get: function(t) {
			var e = t.parentNode;
			return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
			null
		}
	}),
	st.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
	function() {
		st.propFix[this.toLowerCase()] = this
	}),
	it.enctype || (st.propFix.enctype = "encoding");
	var Ee = /[\t\r\n\f]/g;
	st.fn.extend({
		addClass: function(t) {
			var e, i, n, s, o, a, r = 0,
			l = this.length,
			h = "string" == typeof t && t;
			if (st.isFunction(t)) return this.each(function(e) {
				st(this).addClass(t.call(this, e, this.className))
			});
			if (h) for (e = (t || "").match(yt) || []; l > r; r++) if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ee, " ") : " ")) {
				for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
				a = st.trim(n),
				i.className !== a && (i.className = a)
			}
			return this
		},
		removeClass: function(t) {
			var e, i, n, s, o, a, r = 0,
			l = this.length,
			h = 0 === arguments.length || "string" == typeof t && t;
			if (st.isFunction(t)) return this.each(function(e) {
				st(this).removeClass(t.call(this, e, this.className))
			});
			if (h) for (e = (t || "").match(yt) || []; l > r; r++) if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ee, " ") : "")) {
				for (o = 0; s = e[o++];) for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
				a = t ? st.trim(n) : "",
				i.className !== a && (i.className = a)
			}
			return this
		},
		toggleClass: function(t, e) {
			var i = typeof t;
			return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(st.isFunction(t) ?
			function(i) {
				st(this).toggleClass(t.call(this, i, this.className, e), e)
			}: function() {
				if ("string" === i) for (var e, n = 0,
				s = st(this), o = t.match(yt) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
				else(i === Ct || "boolean" === i) && (this.className && st._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "": st._data(this, "__className__") || "")
			})
		},
		hasClass: function(t) {
			for (var e = " " + t + " ",
			i = 0,
			n = this.length; n > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Ee, " ").indexOf(e) >= 0) return ! 0;
			return ! 1
		}
	}),
	st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
	function(t, e) {
		st.fn[e] = function(t, i) {
			return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
		}
	}),
	st.fn.extend({
		hover: function(t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		},
		bind: function(t, e, i) {
			return this.on(t, null, e, i)
		},
		unbind: function(t, e) {
			return this.off(t, null, e)
		},
		delegate: function(t, e, i, n) {
			return this.on(e, t, i, n)
		},
		undelegate: function(t, e, i) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
		}
	});
	var Me = st.now(),
	Pe = /\?/,
	Ne = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	st.parseJSON = function(e) {
		if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
		var i, n = null,
		s = st.trim(e + "");
		return s && !st.trim(s.replace(Ne,
		function(t, e, s, o) {
			return i && e && (n = 0),
			0 === n ? t: (i = s || e, n += !o - !s, "")
		})) ? Function("return " + s)() : st.error("Invalid JSON: " + e)
	},
	st.parseXML = function(e) {
		var i, n;
		if (!e || "string" != typeof e) return null;
		try {
			t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
		} catch(s) {
			i = void 0
		}
		return i && i.documentElement && !i.getElementsByTagName("parsererror").length || st.error("Invalid XML: " + e),
		i
	};
	var Ae, He, Oe = /#.*$/,
	ze = /([?&])_=[^&]*/,
	je = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
	We = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	Fe = /^(?:GET|HEAD)$/,
	Le = /^\/\//,
	$e = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	Re = {},
	qe = {},
	Be = "*/".concat("*");
	try {
		He = location.href
	} catch(Ye) {
		He = ft.createElement("a"),
		He.href = "",
		He = He.href
	}
	Ae = $e.exec(He.toLowerCase()) || [],
	st.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: He,
			type: "GET",
			isLocal: We.test(Ae[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Be,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": st.parseJSON,
				"text xml": st.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(t, e) {
			return e ? $($(t, st.ajaxSettings), e) : $(st.ajaxSettings, t)
		},
		ajaxPrefilter: F(Re),
		ajaxTransport: F(qe),
		ajax: function(t, e) {
			function i(t, e, i, n) {
				var s, u, v, b, _, x = e;
				2 !== y && (y = 2, r && clearTimeout(r), h = void 0, a = n || "", w.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (b = R(c, w, i)), b = q(c, b, w, s), s ? (c.ifModified && (_ = w.getResponseHeader("Last-Modified"), _ && (st.lastModified[o] = _), _ = w.getResponseHeader("etag"), _ && (st.etag[o] = _)), 204 === t || "HEAD" === c.type ? x = "nocontent": 304 === t ? x = "notmodified": (x = b.state, u = b.data, v = b.error, s = !v)) : (v = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", s ? f.resolveWith(d, [u, x, w]) : f.rejectWith(d, [w, x, v]), w.statusCode(g), g = void 0, l && p.trigger(s ? "ajaxSuccess": "ajaxError", [w, c, s ? u: v]), m.fireWith(d, [w, x]), l && (p.trigger("ajaxComplete", [w, c]), --st.active || st.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (e = t, t = void 0),
			e = e || {};
			var n, s, o, a, r, l, h, u, c = st.ajaxSetup({},
			e),
			d = c.context || c,
			p = c.context && (d.nodeType || d.jquery) ? st(d) : st.event,
			f = st.Deferred(),
			m = st.Callbacks("once memory"),
			g = c.statusCode || {},
			v = {},
			b = {},
			y = 0,
			_ = "canceled",
			w = {
				readyState: 0,
				getResponseHeader: function(t) {
					var e;
					if (2 === y) {
						if (!u) for (u = {}; e = je.exec(a);) u[e[1].toLowerCase()] = e[2];
						e = u[t.toLowerCase()]
					}
					return null == e ? null: e
				},
				getAllResponseHeaders: function() {
					return 2 === y ? a: null
				},
				setRequestHeader: function(t, e) {
					var i = t.toLowerCase();
					return y || (t = b[i] = b[i] || t, v[t] = e),
					this
				},
				overrideMimeType: function(t) {
					return y || (c.mimeType = t),
					this
				},
				statusCode: function(t) {
					var e;
					if (t) if (2 > y) for (e in t) g[e] = [g[e], t[e]];
					else w.always(t[w.status]);
					return this
				},
				abort: function(t) {
					var e = t || _;
					return h && h.abort(e),
					i(0, e),
					this
				}
			};
			if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, c.url = ((t || c.url || He) + "").replace(Oe, "").replace(Le, Ae[1] + "//"), c.type = e.method || e.type || c.method || c.type, c.dataTypes = st.trim(c.dataType || "*").toLowerCase().match(yt) || [""], null == c.crossDomain && (n = $e.exec(c.url.toLowerCase()), c.crossDomain = !(!n || n[1] === Ae[1] && n[2] === Ae[2] && (n[3] || ("http:" === n[1] ? "80": "443")) === (Ae[3] || ("http:" === Ae[1] ? "80": "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = st.param(c.data, c.traditional)), L(Re, c, e, w), 2 === y) return w;
			l = st.event && c.global,
			l && 0 === st.active++&&st.event.trigger("ajaxStart"),
			c.type = c.type.toUpperCase(),
			c.hasContent = !Fe.test(c.type),
			o = c.url,
			c.hasContent || (c.data && (o = c.url += (Pe.test(o) ? "&": "?") + c.data, delete c.data), c.cache === !1 && (c.url = ze.test(o) ? o.replace(ze, "$1_=" + Me++) : o + (Pe.test(o) ? "&": "?") + "_=" + Me++)),
			c.ifModified && (st.lastModified[o] && w.setRequestHeader("If-Modified-Since", st.lastModified[o]), st.etag[o] && w.setRequestHeader("If-None-Match", st.etag[o])),
			(c.data && c.hasContent && c.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", c.contentType),
			w.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Be + "; q=0.01": "") : c.accepts["*"]);
			for (s in c.headers) w.setRequestHeader(s, c.headers[s]);
			if (c.beforeSend && (c.beforeSend.call(d, w, c) === !1 || 2 === y)) return w.abort();
			_ = "abort";
			for (s in {
				success: 1,
				error: 1,
				complete: 1
			}) w[s](c[s]);
			if (h = L(qe, c, e, w)) {
				w.readyState = 1,
				l && p.trigger("ajaxSend", [w, c]),
				c.async && c.timeout > 0 && (r = setTimeout(function() {
					w.abort("timeout")
				},
				c.timeout));
				try {
					y = 1,
					h.send(v, i)
				} catch(x) {
					if (! (2 > y)) throw x;
					i( - 1, x)
				}
			} else i( - 1, "No Transport");
			return w
		},
		getJSON: function(t, e, i) {
			return st.get(t, e, i, "json")
		},
		getScript: function(t, e) {
			return st.get(t, void 0, e, "script")
		}
	}),
	st.each(["get", "post"],
	function(t, e) {
		st[e] = function(t, i, n, s) {
			return st.isFunction(i) && (s = s || n, n = i, i = void 0),
			st.ajax({
				url: t,
				type: e,
				dataType: s,
				data: i,
				success: n
			})
		}
	}),
	st._evalUrl = function(t) {
		return st.ajax({
			url: t,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	},
	st.fn.extend({
		wrapAll: function(t) {
			if (st.isFunction(t)) return this.each(function(e) {
				st(this).wrapAll(t.call(this, e))
			});
			if (this[0]) {
				var e = st(t, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && e.insertBefore(this[0]),
				e.map(function() {
					for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
					return t
				}).append(this)
			}
			return this
		},
		wrapInner: function(t) {
			return this.each(st.isFunction(t) ?
			function(e) {
				st(this).wrapInner(t.call(this, e))
			}: function() {
				var e = st(this),
				i = e.contents();
				i.length ? i.wrapAll(t) : e.append(t)
			})
		},
		wrap: function(t) {
			var e = st.isFunction(t);
			return this.each(function(i) {
				st(this).wrapAll(e ? t.call(this, i) : t)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
			}).end()
		}
	}),
	st.expr.filters.hidden = function(t) {
		return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !it.reliableHiddenOffsets() && "none" === (t.style && t.style.display || st.css(t, "display"))
	},
	st.expr.filters.visible = function(t) {
		return ! st.expr.filters.hidden(t)
	};
	var Ue = /%20/g,
	Ve = /\[\]$/,
	Ke = /\r?\n/g,
	Xe = /^(?:submit|button|image|reset|file)$/i,
	Qe = /^(?:input|select|textarea|keygen)/i;
	st.param = function(t, e) {
		var i, n = [],
		s = function(t, e) {
			e = st.isFunction(e) ? e() : null == e ? "": e,
			n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
		};
		if (void 0 === e && (e = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(t) || t.jquery && !st.isPlainObject(t)) st.each(t,
		function() {
			s(this.name, this.value)
		});
		else for (i in t) B(i, t[i], e, s);
		return n.join("&").replace(Ue, "+")
	},
	st.fn.extend({
		serialize: function() {
			return st.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var t = st.prop(this, "elements");
				return t ? st.makeArray(t) : this
			}).filter(function() {
				var t = this.type;
				return this.name && !st(this).is(":disabled") && Qe.test(this.nodeName) && !Xe.test(t) && (this.checked || !Mt.test(t))
			}).map(function(t, e) {
				var i = st(this).val();
				return null == i ? null: st.isArray(i) ? st.map(i,
				function(t) {
					return {
						name: e.name,
						value: t.replace(Ke, "\r\n")
					}
				}) : {
					name: e.name,
					value: i.replace(Ke, "\r\n")
				}
			}).get()
		}
	}),
	st.ajaxSettings.xhr = void 0 !== t.ActiveXObject ?
	function() {
		return ! this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Y() || U()
	}: Y;
	var Ge = 0,
	Je = {},
	Ze = st.ajaxSettings.xhr();
	t.attachEvent && t.attachEvent("onunload",
	function() {
		for (var t in Je) Je[t](void 0, !0)
	}),
	it.cors = !!Ze && "withCredentials" in Ze,
	Ze = it.ajax = !!Ze,
	Ze && st.ajaxTransport(function(t) {
		if (!t.crossDomain || it.cors) {
			var e;
			return {
				send: function(i, n) {
					var s, o = t.xhr(),
					a = ++Ge;
					if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) o[s] = t.xhrFields[s];
					t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType),
					t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
					for (s in i) void 0 !== i[s] && o.setRequestHeader(s, i[s] + "");
					o.send(t.hasContent && t.data || null),
					e = function(i, s) {
						var r, l, h;
						if (e && (s || 4 === o.readyState)) if (delete Je[a], e = void 0, o.onreadystatechange = st.noop, s) 4 !== o.readyState && o.abort();
						else {
							h = {},
							r = o.status,
							"string" == typeof o.responseText && (h.text = o.responseText);
							try {
								l = o.statusText
							} catch(u) {
								l = ""
							}
							r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = h.text ? 200 : 404
						}
						h && n(r, l, h, o.getAllResponseHeaders())
					},
					t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Je[a] = e: e()
				},
				abort: function() {
					e && e(void 0, !0)
				}
			}
		}
	}),
	st.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(t) {
				return st.globalEval(t),
				t
			}
		}
	}),
	st.ajaxPrefilter("script",
	function(t) {
		void 0 === t.cache && (t.cache = !1),
		t.crossDomain && (t.type = "GET", t.global = !1)
	}),
	st.ajaxTransport("script",
	function(t) {
		if (t.crossDomain) {
			var e, i = ft.head || st("head")[0] || ft.documentElement;
			return {
				send: function(n, s) {
					e = ft.createElement("script"),
					e.async = !0,
					t.scriptCharset && (e.charset = t.scriptCharset),
					e.src = t.url,
					e.onload = e.onreadystatechange = function(t, i) { (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
					},
					i.insertBefore(e, i.firstChild)
				},
				abort: function() {
					e && e.onload(void 0, !0)
				}
			}
		}
	});
	var ti = [],
	ei = /(=)\?(?=&|$)|\?\?/;
	st.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var t = ti.pop() || st.expando + "_" + Me++;
			return this[t] = !0,
			t
		}
	}),
	st.ajaxPrefilter("json jsonp",
	function(e, i, n) {
		var s, o, a, r = e.jsonp !== !1 && (ei.test(e.url) ? "url": "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ei.test(e.data) && "data");
		return r || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = st.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(ei, "$1" + s) : e.jsonp !== !1 && (e.url += (Pe.test(e.url) ? "&": "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
			return a || st.error(s + " was not called"),
			a[0]
		},
		e.dataTypes[0] = "json", o = t[s], t[s] = function() {
			a = arguments
		},
		n.always(function() {
			t[s] = o,
			e[s] && (e.jsonpCallback = i.jsonpCallback, ti.push(s)),
			a && st.isFunction(o) && o(a[0]),
			a = o = void 0
		}), "script") : void 0
	}),
	st.parseHTML = function(t, e, i) {
		if (!t || "string" != typeof t) return null;
		"boolean" == typeof e && (i = e, e = !1),
		e = e || ft;
		var n = ct.exec(t),
		s = !i && [];
		return n ? [e.createElement(n[1])] : (n = st.buildFragment([t], e, s), s && s.length && st(s).remove(), st.merge([], n.childNodes))
	};
	var ii = st.fn.load;
	st.fn.load = function(t, e, i) {
		if ("string" != typeof t && ii) return ii.apply(this, arguments);
		var n, s, o, a = this,
		r = t.indexOf(" ");
		return r >= 0 && (n = st.trim(t.slice(r, t.length)), t = t.slice(0, r)),
		st.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"),
		a.length > 0 && st.ajax({
			url: t,
			type: o,
			dataType: "html",
			data: e
		}).done(function(t) {
			s = arguments,
			a.html(n ? st("<div>").append(st.parseHTML(t)).find(n) : t)
		}).complete(i &&
		function(t, e) {
			a.each(i, s || [t.responseText, e, t])
		}),
		this
	},
	st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
	function(t, e) {
		st.fn[e] = function(t) {
			return this.on(e, t)
		}
	}),
	st.expr.filters.animated = function(t) {
		return st.grep(st.timers,
		function(e) {
			return t === e.elem
		}).length
	};
	var ni = t.document.documentElement;
	st.offset = {
		setOffset: function(t, e, i) {
			var n, s, o, a, r, l, h, u = st.css(t, "position"),
			c = st(t),
			d = {};
			"static" === u && (t.style.position = "relative"),
			r = c.offset(),
			o = st.css(t, "top"),
			l = st.css(t, "left"),
			h = ("absolute" === u || "fixed" === u) && st.inArray("auto", [o, l]) > -1,
			h ? (n = c.position(), a = n.top, s = n.left) : (a = parseFloat(o) || 0, s = parseFloat(l) || 0),
			st.isFunction(e) && (e = e.call(t, i, r)),
			null != e.top && (d.top = e.top - r.top + a),
			null != e.left && (d.left = e.left - r.left + s),
			"using" in e ? e.using.call(t, d) : c.css(d)
		}
	},
	st.fn.extend({
		offset: function(t) {
			if (arguments.length) return void 0 === t ? this: this.each(function(e) {
				st.offset.setOffset(this, t, e)
			});
			var e, i, n = {
				top: 0,
				left: 0
			},
			s = this[0],
			o = s && s.ownerDocument;
			return o ? (e = o.documentElement, st.contains(e, s) ? (typeof s.getBoundingClientRect !== Ct && (n = s.getBoundingClientRect()), i = V(o), {
				top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
				left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
			}) : n) : void 0
		},
		position: function() {
			if (this[0]) {
				var t, e, i = {
					top: 0,
					left: 0
				},
				n = this[0];
				return "fixed" === st.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), st.nodeName(t[0], "html") || (i = t.offset()), i.top += st.css(t[0], "borderTopWidth", !0), i.left += st.css(t[0], "borderLeftWidth", !0)),
				{
					top: e.top - i.top - st.css(n, "marginTop", !0),
					left: e.left - i.left - st.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var t = this.offsetParent || ni; t && !st.nodeName(t, "html") && "static" === st.css(t, "position");) t = t.offsetParent;
				return t || ni
			})
		}
	}),
	st.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	},
	function(t, e) {
		var i = /Y/.test(e);
		st.fn[t] = function(n) {
			return Et(this,
			function(t, n, s) {
				var o = V(t);
				return void 0 === s ? o ? e in o ? o[e] : o.document.documentElement[n] : t[n] : void(o ? o.scrollTo(i ? st(o).scrollLeft() : s, i ? s: st(o).scrollTop()) : t[n] = s)
			},
			t, n, arguments.length, null)
		}
	}),
	st.each(["top", "left"],
	function(t, e) {
		st.cssHooks[e] = D(it.pixelPosition,
		function(t, i) {
			return i ? (i = ee(t, e), ne.test(i) ? st(t).position()[e] + "px": i) : void 0
		})
	}),
	st.each({
		Height: "height",
		Width: "width"
	},
	function(t, e) {
		st.each({
			padding: "inner" + t,
			content: e,
			"": "outer" + t
		},
		function(i, n) {
			st.fn[n] = function(n, s) {
				var o = arguments.length && (i || "boolean" != typeof n),
				a = i || (n === !0 || s === !0 ? "margin": "border");
				return Et(this,
				function(e, i, n) {
					var s;
					return st.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? st.css(e, i, a) : st.style(e, i, n, a)
				},
				e, o ? n: void 0, o, null)
			}
		})
	}),
	st.fn.size = function() {
		return this.length
	},
	st.fn.andSelf = st.fn.addBack,
	"function" == typeof define && define.amd && define("jquery", [],
	function() {
		return st
	});
	var si = t.jQuery,
	oi = t.$;
	return st.noConflict = function(e) {
		return t.$ === st && (t.$ = oi),
		e && t.jQuery === st && (t.jQuery = si),
		st
	},
	typeof e === Ct && (t.jQuery = t.$ = st),
	st
}),
function(t, e) {
	"use strict";
	t.rails !== e && t.error("jquery-ujs has already been loaded!");
	var i, n = t(document);
	t.rails = i = {
		linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
		buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
		inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
		formSubmitSelector: "form",
		formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
		disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
		enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
		requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
		fileInputSelector: "input[type=file]:not([disabled])",
		linkDisableSelector: "a[data-disable-with], a[data-disable]",
		buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
		csrfToken: function() {
			return t("meta[name=csrf-token]").attr("content")
		},
		csrfParam: function() {
			return t("meta[name=csrf-param]").attr("content")
		},
		CSRFProtection: function(t) {
			var e = i.csrfToken();
			e && t.setRequestHeader("X-CSRF-Token", e)
		},
		refreshCSRFTokens: function() {
			t('form input[name="' + i.csrfParam() + '"]').val(i.csrfToken());
		},
		fire: function(e, i, n) {
			var s = t.Event(i);
			return e.trigger(s, n),
			s.result !== !1
		},
		confirm: function(t) {
			return confirm(t)
		},
		ajax: function(e) {
			return t.ajax(e)
		},
		href: function(t) {
			return t[0].href
		},
		isRemote: function(t) {
			return t.data("remote") !== e && t.data("remote") !== !1
		},
		handleRemote: function(n) {
			var s, o, a, r, l, h;
			if (i.fire(n, "ajax:before")) {
				if (r = n.data("with-credentials") || null, l = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) {
					s = n.data("ujs:submit-button-formmethod") || n.attr("method"),
					o = n.data("ujs:submit-button-formaction") || n.attr("action"),
					a = t(n[0].elements).serializeArray();
					var u = n.data("ujs:submit-button");
					u && (a.push(u), n.data("ujs:submit-button", null)),
					n.data("ujs:submit-button-formmethod", null),
					n.data("ujs:submit-button-formaction", null)
				} else n.is(i.inputChangeSelector) ? (s = n.data("method"), o = n.data("url"), a = n.serialize(), n.data("params") && (a = a + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (s = n.data("method") || "get", o = n.data("url"), a = n.serialize(), n.data("params") && (a = a + "&" + n.data("params"))) : (s = n.data("method"), o = i.href(n), a = n.data("params") || null);
				return h = {
					type: s || "GET",
					data: a,
					dataType: l,
					beforeSend: function(t, s) {
						return s.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script),
						i.fire(n, "ajax:beforeSend", [t, s]) ? void n.trigger("ajax:send", t) : !1
					},
					success: function(t, e, i) {
						n.trigger("ajax:success", [t, e, i])
					},
					complete: function(t, e) {
						n.trigger("ajax:complete", [t, e])
					},
					error: function(t, e, i) {
						n.trigger("ajax:error", [t, e, i])
					},
					crossDomain: i.isCrossDomain(o)
				},
				r && (h.xhrFields = {
					withCredentials: r
				}),
				o && (h.url = o),
				i.ajax(h)
			}
			return ! 1
		},
		isCrossDomain: function(t) {
			var e = document.createElement("a");
			e.href = location.href;
			var i = document.createElement("a");
			try {
				return i.href = t,
				i.href = i.href,
				!((!i.protocol || ":" === i.protocol) && !i.host || e.protocol + "//" + e.host == i.protocol + "//" + i.host)
			} catch(n) {
				return ! 0
			}
		},
		handleMethod: function(n) {
			var s = i.href(n),
			o = n.data("method"),
			a = n.attr("target"),
			r = i.csrfToken(),
			l = i.csrfParam(),
			h = t('<form method="post" action="' + s + '"></form>'),
			u = '<input name="_method" value="' + o + '" type="hidden" />';
			l === e || r === e || i.isCrossDomain(s) || (u += '<input name="' + l + '" value="' + r + '" type="hidden" />'),
			a && h.attr("target", a),
			h.hide().append(u).appendTo("body"),
			h.submit()
		},
		formElements: function(e, i) {
			return e.is("form") ? t(e[0].elements).filter(i) : e.find(i)
		},
		disableFormElements: function(e) {
			i.formElements(e, i.disableSelector).each(function() {
				i.disableFormElement(t(this))
			})
		},
		disableFormElement: function(t) {
			var i, n;
			i = t.is("button") ? "html": "val",
			n = t.data("disable-with"),
			n !== e && (t.data("ujs:enable-with", t[i]()), t[i](n)),
			t.prop("disabled", !0),
			t.data("ujs:disabled", !0)
		},
		enableFormElements: function(e) {
			i.formElements(e, i.enableSelector).each(function() {
				i.enableFormElement(t(this))
			})
		},
		enableFormElement: function(t) {
			var i = t.is("button") ? "html": "val";
			t.data("ujs:enable-with") !== e && (t[i](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")),
			t.prop("disabled", !1),
			t.removeData("ujs:disabled")
		},
		allowAction: function(t) {
			var e, n = t.data("confirm"),
			s = !1;
			if (!n) return ! 0;
			if (i.fire(t, "confirm")) {
				try {
					s = i.confirm(n)
				} catch(o) { (console.error || console.log).call(console, o.stack || o)
				}
				e = i.fire(t, "confirm:complete", [s])
			}
			return s && e
		},
		blankInputs: function(e, i, n) {
			var s, o, a = t(),
			r = i || "input,textarea",
			l = e.find(r);
			return l.each(function() {
				if (s = t(this), o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : !!s.val(), o === n) {
					if (s.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return ! 0;
					a = a.add(s)
				}
			}),
			a.length ? a: !1
		},
		nonBlankInputs: function(t, e) {
			return i.blankInputs(t, e, !0)
		},
		stopEverything: function(e) {
			return t(e.target).trigger("ujs:everythingStopped"),
			e.stopImmediatePropagation(),
			!1
		},
		disableElement: function(t) {
			var n = t.data("disable-with");
			n !== e && (t.data("ujs:enable-with", t.html()), t.html(n)),
			t.bind("click.railsDisable",
			function(t) {
				return i.stopEverything(t)
			}),
			t.data("ujs:disabled", !0)
		},
		enableElement: function(t) {
			t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")),
			t.unbind("click.railsDisable"),
			t.removeData("ujs:disabled")
		}
	},
	i.fire(n, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, n) {
		t.crossDomain || i.CSRFProtection(n)
	}), t(window).on("pageshow.rails",
	function() {
		t(t.rails.enableSelector).each(function() {
			var e = t(this);
			e.data("ujs:disabled") && t.rails.enableFormElement(e)
		}),
		t(t.rails.linkDisableSelector).each(function() {
			var e = t(this);
			e.data("ujs:disabled") && t.rails.enableElement(e)
		})
	}), n.delegate(i.linkDisableSelector, "ajax:complete",
	function() {
		i.enableElement(t(this))
	}), n.delegate(i.buttonDisableSelector, "ajax:complete",
	function() {
		i.enableFormElement(t(this))
	}), n.delegate(i.linkClickSelector, "click.rails",
	function(e) {
		var n = t(this),
		s = n.data("method"),
		o = n.data("params"),
		a = e.metaKey || e.ctrlKey;
		if (!i.allowAction(n)) return i.stopEverything(e);
		if (!a && n.is(i.linkDisableSelector) && i.disableElement(n), i.isRemote(n)) {
			if (a && (!s || "GET" === s) && !o) return ! 0;
			var r = i.handleRemote(n);
			return r === !1 ? i.enableElement(n) : r.fail(function() {
				i.enableElement(n)
			}),
			!1
		}
		return s ? (i.handleMethod(n), !1) : void 0
	}), n.delegate(i.buttonClickSelector, "click.rails",
	function(e) {
		var n = t(this);
		if (!i.allowAction(n) || !i.isRemote(n)) return i.stopEverything(e);
		n.is(i.buttonDisableSelector) && i.disableFormElement(n);
		var s = i.handleRemote(n);
		return s === !1 ? i.enableFormElement(n) : s.fail(function() {
			i.enableFormElement(n)
		}),
		!1
	}), n.delegate(i.inputChangeSelector, "change.rails",
	function(e) {
		var n = t(this);
		return i.allowAction(n) && i.isRemote(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
	}), n.delegate(i.formSubmitSelector, "submit.rails",
	function(n) {
		var s, o, a = t(this),
		r = i.isRemote(a);
		if (!i.allowAction(a)) return i.stopEverything(n);
		if (a.attr("novalidate") === e) if (a.data("ujs:formnovalidate-button") === e) {
			if (s = i.blankInputs(a, i.requiredInputSelector, !1), s && i.fire(a, "ajax:aborted:required", [s])) return i.stopEverything(n)
		} else a.data("ujs:formnovalidate-button", e);
		if (r) {
			if (o = i.nonBlankInputs(a, i.fileInputSelector)) {
				setTimeout(function() {
					i.disableFormElements(a)
				},
				13);
				var l = i.fire(a, "ajax:aborted:file", [o]);
				return l || setTimeout(function() {
					i.enableFormElements(a)
				},
				13),
				l
			}
			return i.handleRemote(a),
			!1
		}
		setTimeout(function() {
			i.disableFormElements(a)
		},
		13)
	}), n.delegate(i.formInputClickSelector, "click.rails",
	function(e) {
		var n = t(this);
		if (!i.allowAction(n)) return i.stopEverything(e);
		var s = n.attr("name"),
		o = s ? {
			name: s,
			value: n.val()
		}: null,
		a = n.closest("form");
		0 === a.length && (a = t("#" + n.attr("form"))),
		a.data("ujs:submit-button", o),
		a.data("ujs:formnovalidate-button", n.attr("formnovalidate")),
		a.data("ujs:submit-button-formaction", n.attr("formaction")),
		a.data("ujs:submit-button-formmethod", n.attr("formmethod"))
	}), n.delegate(i.formSubmitSelector, "ajax:send.rails",
	function(e) {
		this === e.target && i.disableFormElements(t(this))
	}), n.delegate(i.formSubmitSelector, "ajax:complete.rails",
	function(e) {
		this === e.target && i.enableFormElements(t(this))
	}), t(function() {
		i.refreshCSRFTokens()
	}))
} (jQuery),
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
} (function(t) {
	function e(e, n) {
		var s, o, a, r = e.nodeName.toLowerCase();
		return "area" === r ? (s = e.parentNode, o = s.name, e.href && o && "map" === s.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']")[0], !!a && i(a)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !e.disabled: "a" === r ? e.href || n: n) && i(e)
	}
	function i(e) {
		return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
			return "hidden" === t.css(this, "visibility")
		}).length
	}
	t.ui = t.ui || {},
	t.extend(t.ui, {
		version: "1.11.4",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}),
	t.fn.extend({
		scrollParent: function(e) {
			var i = this.css("position"),
			n = "absolute" === i,
			s = e ? /(auto|scroll|hidden)/: /(auto|scroll)/,
			o = this.parents().filter(function() {
				var e = t(this);
				return n && "static" === e.css("position") ? !1 : s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
			}).eq(0);
			return "fixed" !== i && o.length ? o: t(this[0].ownerDocument || document)
		},
		uniqueId: function() {
			var t = 0;
			return function() {
				return this.each(function() {
					this.id || (this.id = "ui-id-" + ++t)
				})
			}
		} (),
		removeUniqueId: function() {
			return this.each(function() { / ^ui - id - \d + $ / .test(this.id) && t(this).removeAttr("id")
			})
		}
	}),
	t.extend(t.expr[":"], {
		data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
			return function(i) {
				return !! t.data(i, e)
			}
		}) : function(e, i, n) {
			return !! t.data(e, n[3])
		},
		focusable: function(i) {
			return e(i, !isNaN(t.attr(i, "tabindex")))
		},
		tabbable: function(i) {
			var n = t.attr(i, "tabindex"),
			s = isNaN(n);
			return (s || n >= 0) && e(i, !s)
		}
	}),
	t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"],
	function(e, i) {
		function n(e, i, n, o) {
			return t.each(s,
			function() {
				i -= parseFloat(t.css(e, "padding" + this)) || 0,
				n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
				o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
			}),
			i
		}
		var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
		o = i.toLowerCase(),
		a = {
			innerWidth: t.fn.innerWidth,
			innerHeight: t.fn.innerHeight,
			outerWidth: t.fn.outerWidth,
			outerHeight: t.fn.outerHeight
		};
		t.fn["inner" + i] = function(e) {
			return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
				t(this).css(o, n(this, e) + "px")
			})
		},
		t.fn["outer" + i] = function(e, s) {
			return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
				t(this).css(o, n(this, e, !0, s) + "px")
			})
		}
	}),
	t.fn.addBack || (t.fn.addBack = function(t) {
		return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
	}),
	t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
		return function(i) {
			return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
		}
	} (t.fn.removeData)),
	t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
	t.fn.extend({
		focus: function(e) {
			return function(i, n) {
				return "number" == typeof i ? this.each(function() {
					var e = this;
					setTimeout(function() {
						t(e).focus(),
						n && n.call(e)
					},
					i)
				}) : e.apply(this, arguments)
			}
		} (t.fn.focus),
		disableSelection: function() {
			var t = "onselectstart" in document.createElement("div") ? "selectstart": "mousedown";
			return function() {
				return this.bind(t + ".ui-disableSelection",
				function(t) {
					t.preventDefault()
				})
			}
		} (),
		enableSelection: function() {
			return this.unbind(".ui-disableSelection")
		},
		zIndex: function(e) {
			if (void 0 !== e) return this.css("zIndex", e);
			if (this.length) for (var i, n, s = t(this[0]); s.length && s[0] !== document;) {
				if (i = s.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (n = parseInt(s.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
				s = s.parent()
			}
			return 0
		}
	}),
	t.ui.plugin = {
		add: function(e, i, n) {
			var s, o = t.ui[e].prototype;
			for (s in n) o.plugins[s] = o.plugins[s] || [],
			o.plugins[s].push([i, n[s]])
		},
		call: function(t, e, i, n) {
			var s, o = t.plugins[e];
			if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (s = 0; s < o.length; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
		}
	}
}),
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
} (function(t) {
	var e = 0,
	i = Array.prototype.slice;
	return t.cleanData = function(e) {
		return function(i) {
			var n, s, o;
			for (o = 0; null != (s = i[o]); o++) try {
				n = t._data(s, "events"),
				n && n.remove && t(s).triggerHandler("remove")
			} catch(a) {}
			e(i)
		}
	} (t.cleanData),
	t.widget = function(e, i, n) {
		var s, o, a, r, l = {},
		h = e.split(".")[0];
		return e = e.split(".")[1],
		s = h + "-" + e,
		n || (n = i, i = t.Widget),
		t.expr[":"][s.toLowerCase()] = function(e) {
			return !! t.data(e, s)
		},
		t[h] = t[h] || {},
		o = t[h][e],
		a = t[h][e] = function(t, e) {
			return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new a(t, e)
		},
		t.extend(a, o, {
			version: n.version,
			_proto: t.extend({},
			n),
			_childConstructors: []
		}),
		r = new i,
		r.options = t.widget.extend({},
		r.options),
		t.each(n,
		function(e, n) {
			return t.isFunction(n) ? void(l[e] = function() {
				var t = function() {
					return i.prototype[e].apply(this, arguments)
				},
				s = function(t) {
					return i.prototype[e].apply(this, t)
				};
				return function() {
					var e, i = this._super,
					o = this._superApply;
					return this._super = t,
					this._superApply = s,
					e = n.apply(this, arguments),
					this._super = i,
					this._superApply = o,
					e
				}
			} ()) : void(l[e] = n)
		}),
		a.prototype = t.widget.extend(r, {
			widgetEventPrefix: o ? r.widgetEventPrefix || e: e
		},
		l, {
			constructor: a,
			namespace: h,
			widgetName: e,
			widgetFullName: s
		}),
		o ? (t.each(o._childConstructors,
		function(e, i) {
			var n = i.prototype;
			t.widget(n.namespace + "." + n.widgetName, a, i._proto)
		}), delete o._childConstructors) : i._childConstructors.push(a),
		t.widget.bridge(e, a),
		a
	},
	t.widget.extend = function(e) {
		for (var n, s, o = i.call(arguments, 1), a = 0, r = o.length; r > a; a++) for (n in o[a]) s = o[a][n],
		o[a].hasOwnProperty(n) && void 0 !== s && (t.isPlainObject(s) ? e[n] = t.isPlainObject(e[n]) ? t.widget.extend({},
		e[n], s) : t.widget.extend({},
		s) : e[n] = s);
		return e
	},
	t.widget.bridge = function(e, n) {
		var s = n.prototype.widgetFullName || e;
		t.fn[e] = function(o) {
			var a = "string" == typeof o,
			r = i.call(arguments, 1),
			l = this;
			return a ? this.each(function() {
				var i, n = t.data(this, s);
				return "instance" === o ? (l = n, !1) : n ? t.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, r), i !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'")
			}) : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))), this.each(function() {
				var e = t.data(this, s);
				e ? (e.option(o || {}), e._init && e._init()) : t.data(this, s, new n(o, this))
			})),
			l
		}
	},
	t.Widget = function() {},
	t.Widget._childConstructors = [],
	t.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function(i, n) {
			n = t(n || this.defaultElement || this)[0],
			this.element = t(n),
			this.uuid = e++,
			this.eventNamespace = "." + this.widgetName + this.uuid,
			this.bindings = t(),
			this.hoverable = t(),
			this.focusable = t(),
			n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function(t) {
					t.target === n && this.destroy()
				}
			}), this.document = t(n.style ? n.ownerDocument: n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
			this.options = t.widget.extend({},
			this.options, this._getCreateOptions(), i),
			this._create(),
			this._trigger("create", null, this._getCreateEventData()),
			this._init()
		},
		_getCreateOptions: t.noop,
		_getCreateEventData: t.noop,
		_create: t.noop,
		_init: t.noop,
		destroy: function() {
			this._destroy(),
			this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
			this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
			this.bindings.unbind(this.eventNamespace),
			this.hoverable.removeClass("ui-state-hover"),
			this.focusable.removeClass("ui-state-focus")
		},
		_destroy: t.noop,
		widget: function() {
			return this.element
		},
		option: function(e, i) {
			var n, s, o, a = e;
			if (0 === arguments.length) return t.widget.extend({},
			this.options);
			if ("string" == typeof e) if (a = {},
			n = e.split("."), e = n.shift(), n.length) {
				for (s = a[e] = t.widget.extend({},
				this.options[e]), o = 0; o < n.length - 1; o++) s[n[o]] = s[n[o]] || {},
				s = s[n[o]];
				if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null: s[e];
				s[e] = i
			} else {
				if (1 === arguments.length) return void 0 === this.options[e] ? null: this.options[e];
				a[e] = i
			}
			return this._setOptions(a),
			this
		},
		_setOptions: function(t) {
			var e;
			for (e in t) this._setOption(e, t[e]);
			return this
		},
		_setOption: function(t, e) {
			return this.options[t] = e,
			"disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))),
			this
		},
		enable: function() {
			return this._setOptions({
				disabled: !1
			})
		},
		disable: function() {
			return this._setOptions({
				disabled: !0
			})
		},
		_on: function(e, i, n) {
			var s, o = this;
			"boolean" != typeof e && (n = i, i = e, e = !1),
			n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()),
			t.each(n,
			function(n, a) {
				function r() {
					return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
				}
				"string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
				var l = n.match(/^([\w:-]*)\s*(.*)$/),
				h = l[1] + o.eventNamespace,
				u = l[2];
				u ? s.delegate(u, h, r) : i.bind(h, r)
			})
		},
		_off: function(e, i) {
			i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
			e.unbind(i).undelegate(i),
			this.bindings = t(this.bindings.not(e).get()),
			this.focusable = t(this.focusable.not(e).get()),
			this.hoverable = t(this.hoverable.not(e).get())
		},
		_delay: function(t, e) {
			function i() {
				return ("string" == typeof t ? n[t] : t).apply(n, arguments)
			}
			var n = this;
			return setTimeout(i, e || 0)
		},
		_hoverable: function(e) {
			this.hoverable = this.hoverable.add(e),
			this._on(e, {
				mouseenter: function(e) {
					t(e.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function(e) {
					t(e.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function(e) {
			this.focusable = this.focusable.add(e),
			this._on(e, {
				focusin: function(e) {
					t(e.currentTarget).addClass("ui-state-focus")
				},
				focusout: function(e) {
					t(e.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function(e, i, n) {
			var s, o, a = this.options[e];
			if (n = n || {},
			i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e: this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (s in o) s in i || (i[s] = o[s]);
			return this.element.trigger(i, n),
			!(t.isFunction(a) && a.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
		}
	},
	t.each({
		show: "fadeIn",
		hide: "fadeOut"
	},
	function(e, i) {
		t.Widget.prototype["_" + e] = function(n, s, o) {
			"string" == typeof s && (s = {
				effect: s
			});
			var a, r = s ? s === !0 || "number" == typeof s ? i: s.effect || i: e;
			s = s || {},
			"number" == typeof s && (s = {
				duration: s
			}),
			a = !t.isEmptyObject(s),
			s.complete = o,
			s.delay && n.delay(s.delay),
			a && t.effects && t.effects.effect[r] ? n[e](s) : r !== e && n[r] ? n[r](s.duration, s.easing, o) : n.queue(function(i) {
				t(this)[e](),
				o && o.call(n[0]),
				i()
			})
		}
	}),
	t.widget
}),
/*!
 * jQuery UI Accordion 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/accordion/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], t) : t(jQuery)
} (function(t) {
	return t.widget("ui.accordion", {
		version: "1.11.4",
		options: {
			active: 0,
			animate: {},
			collapsible: !1,
			event: "click",
			header: "> li > :first-child,> :not(li):even",
			heightStyle: "auto",
			icons: {
				activeHeader: "ui-icon-triangle-1-s",
				header: "ui-icon-triangle-1-e"
			},
			activate: null,
			beforeActivate: null
		},
		hideProps: {
			borderTopWidth: "hide",
			borderBottomWidth: "hide",
			paddingTop: "hide",
			paddingBottom: "hide",
			height: "hide"
		},
		showProps: {
			borderTopWidth: "show",
			borderBottomWidth: "show",
			paddingTop: "show",
			paddingBottom: "show",
			height: "show"
		},
		_create: function() {
			var e = this.options;
			this.prevShow = this.prevHide = t(),
			this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"),
			e.collapsible || e.active !== !1 && null != e.active || (e.active = 0),
			this._processPanels(),
			e.active < 0 && (e.active += this.headers.length),
			this._refresh()
		},
		_getCreateEventData: function() {
			return {
				header: this.active,
				panel: this.active.length ? this.active.next() : t()
			}
		},
		_createIcons: function() {
			var e = this.options.icons;
			e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
		},
		_destroyIcons: function() {
			this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
		},
		_destroy: function() {
			var t;
			this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
			this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),
			this._destroyIcons(),
			t = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),
			"content" !== this.options.heightStyle && t.css("height", "")
		},
		_setOption: function(t, e) {
			return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void("disabled" === t && (this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e))))
		},
		_keydown: function(e) {
			if (!e.altKey && !e.ctrlKey) {
				var i = t.ui.keyCode,
				n = this.headers.length,
				s = this.headers.index(e.target),
				o = !1;
				switch (e.keyCode) {
				case i.RIGHT:
				case i.DOWN:
					o = this.headers[(s + 1) % n];
					break;
				case i.LEFT:
				case i.UP:
					o = this.headers[(s - 1 + n) % n];
					break;
				case i.SPACE:
				case i.ENTER:
					this._eventHandler(e);
					break;
				case i.HOME:
					o = this.headers[0];
					break;
				case i.END:
					o = this.headers[n - 1]
				}
				o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), o.focus(), e.preventDefault())
			}
		},
		_panelKeyDown: function(e) {
			e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
		},
		refresh: function() {
			var e = this.options;
			this._processPanels(),
			e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active),
			this._destroyIcons(),
			this._refresh()
		},
		_processPanels: function() {
			var t = this.headers,
			e = this.panels;
			this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),
			this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),
			e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
		},
		_refresh: function() {
			var e, i = this.options,
			n = i.heightStyle,
			s = this.element.parent();
			this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),
			this.active.next().addClass("ui-accordion-content-active").show(),
			this.headers.attr("role", "tab").each(function() {
				var e = t(this),
				i = e.uniqueId().attr("id"),
				n = e.next(),
				s = n.uniqueId().attr("id");
				e.attr("aria-controls", s),
				n.attr("aria-labelledby", i)
			}).next().attr("role", "tabpanel"),
			this.headers.not(this.active).attr({
				"aria-selected": "false",
				"aria-expanded": "false",
				tabIndex: -1
			}).next().attr({
				"aria-hidden": "true"
			}).hide(),
			this.active.length ? this.active.attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			}).next().attr({
				"aria-hidden": "false"
			}) : this.headers.eq(0).attr("tabIndex", 0),
			this._createIcons(),
			this._setupEvents(i.event),
			"fill" === n ? (e = s.height(), this.element.siblings(":visible").each(function() {
				var i = t(this),
				n = i.css("position");
				"absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
			}), this.headers.each(function() {
				e -= t(this).outerHeight(!0)
			}), this.headers.next().each(function() {
				t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
			}).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function() {
				e = Math.max(e, t(this).css("height", "").height())
			}).height(e))
		},
		_activate: function(e) {
			var i = this._findActive(e)[0];
			i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: t.noop
			}))
		},
		_findActive: function(e) {
			return "number" == typeof e ? this.headers.eq(e) : t()
		},
		_setupEvents: function(e) {
			var i = {
				keydown: "_keydown"
			};
			e && t.each(e.split(" "),
			function(t, e) {
				i[e] = "_eventHandler"
			}),
			this._off(this.headers.add(this.headers.next())),
			this._on(this.headers, i),
			this._on(this.headers.next(), {
				keydown: "_panelKeyDown"
			}),
			this._hoverable(this.headers),
			this._focusable(this.headers)
		},
		_eventHandler: function(e) {
			var i = this.options,
			n = this.active,
			s = t(e.currentTarget),
			o = s[0] === n[0],
			a = o && i.collapsible,
			r = a ? t() : s.next(),
			l = n.next(),
			h = {
				oldHeader: n,
				oldPanel: l,
				newHeader: a ? t() : s,
				newPanel: r
			};
			e.preventDefault(),
			o && !i.collapsible || this._trigger("beforeActivate", e, h) === !1 || (i.active = a ? !1 : this.headers.index(s), this.active = o ? t() : s, this._toggle(h), n.removeClass("ui-accordion-header-active ui-state-active"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), o || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
		},
		_toggle: function(e) {
			var i = e.newPanel,
			n = this.prevShow.length ? this.prevShow: e.oldPanel;
			this.prevShow.add(this.prevHide).stop(!0, !0),
			this.prevShow = i,
			this.prevHide = n,
			this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)),
			n.attr({
				"aria-hidden": "true"
			}),
			n.prev().attr({
				"aria-selected": "false",
				"aria-expanded": "false"
			}),
			i.length && n.length ? n.prev().attr({
				tabIndex: -1,
				"aria-expanded": "false"
			}) : i.length && this.headers.filter(function() {
				return 0 === parseInt(t(this).attr("tabIndex"), 10)
			}).attr("tabIndex", -1),
			i.attr("aria-hidden", "false").prev().attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			})
		},
		_animate: function(t, e, i) {
			var n, s, o, a = this,
			r = 0,
			l = t.css("box-sizing"),
			h = t.length && (!e.length || t.index() < e.index()),
			u = this.options.animate || {},
			c = h && u.down || u,
			d = function() {
				a._toggleComplete(i)
			};
			return "number" == typeof c && (o = c),
			"string" == typeof c && (s = c),
			s = s || c.easing || u.easing,
			o = o || c.duration || u.duration,
			e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps, {
				duration: o,
				easing: s,
				step: function(t, e) {
					e.now = Math.round(t)
				}
			}), void t.hide().animate(this.showProps, {
				duration: o,
				easing: s,
				complete: d,
				step: function(t, i) {
					i.now = Math.round(t),
					"height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - r), r = 0)
				}
			})) : e.animate(this.hideProps, o, s, d) : t.animate(this.showProps, o, s, d)
		},
		_toggleComplete: function(t) {
			var e = t.oldPanel;
			e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),
			e.length && (e.parent()[0].className = e.parent()[0].className),
			this._trigger("activate", null, t)
		}
	})
}),
/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
} (function(t) {
	return function() {
		function e(t, e, i) {
			return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
		}
		function i(e, i) {
			return parseInt(t.css(e, i), 10) || 0
		}
		function n(e) {
			var i = e[0];
			return 9 === i.nodeType ? {
				width: e.width(),
				height: e.height(),
				offset: {
					top: 0,
					left: 0
				}
			}: t.isWindow(i) ? {
				width: e.width(),
				height: e.height(),
				offset: {
					top: e.scrollTop(),
					left: e.scrollLeft()
				}
			}: i.preventDefault ? {
				width: 0,
				height: 0,
				offset: {
					top: i.pageY,
					left: i.pageX
				}
			}: {
				width: e.outerWidth(),
				height: e.outerHeight(),
				offset: e.offset()
			}
		}
		t.ui = t.ui || {};
		var s, o, a = Math.max,
		r = Math.abs,
		l = Math.round,
		h = /left|center|right/,
		u = /top|center|bottom/,
		c = /[\+\-]\d+(\.[\d]+)?%?/,
		d = /^\w+/,
		p = /%$/,
		f = t.fn.position;
		t.position = {
			scrollbarWidth: function() {
				if (void 0 !== s) return s;
				var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
				o = n.children()[0];
				return t("body").append(n),
				e = o.offsetWidth,
				n.css("overflow", "scroll"),
				i = o.offsetWidth,
				e === i && (i = n[0].clientWidth),
				n.remove(),
				s = e - i
			},
			getScrollInfo: function(e) {
				var i = e.isWindow || e.isDocument ? "": e.element.css("overflow-x"),
				n = e.isWindow || e.isDocument ? "": e.element.css("overflow-y"),
				s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
				o = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
				return {
					width: o ? t.position.scrollbarWidth() : 0,
					height: s ? t.position.scrollbarWidth() : 0
				}
			},
			getWithinInfo: function(e) {
				var i = t(e || window),
				n = t.isWindow(i[0]),
				s = !!i[0] && 9 === i[0].nodeType;
				return {
					element: i,
					isWindow: n,
					isDocument: s,
					offset: i.offset() || {
						left: 0,
						top: 0
					},
					scrollLeft: i.scrollLeft(),
					scrollTop: i.scrollTop(),
					width: n || s ? i.width() : i.outerWidth(),
					height: n || s ? i.height() : i.outerHeight()
				}
			}
		},
		t.fn.position = function(s) {
			if (!s || !s.of) return f.apply(this, arguments);
			s = t.extend({},
			s);
			var p, m, g, v, b, y, _ = t(s.of),
			w = t.position.getWithinInfo(s.within),
			x = t.position.getScrollInfo(w),
			C = (s.collision || "flip").split(" "),
			k = {};
			return y = n(_),
			_[0].preventDefault && (s.at = "left top"),
			m = y.width,
			g = y.height,
			v = y.offset,
			b = t.extend({},
			v),
			t.each(["my", "at"],
			function() {
				var t, e, i = (s[this] || "").split(" ");
				1 === i.length && (i = h.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]),
				i[0] = h.test(i[0]) ? i[0] : "center",
				i[1] = u.test(i[1]) ? i[1] : "center",
				t = c.exec(i[0]),
				e = c.exec(i[1]),
				k[this] = [t ? t[0] : 0, e ? e[0] : 0],
				s[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
			}),
			1 === C.length && (C[1] = C[0]),
			"right" === s.at[0] ? b.left += m: "center" === s.at[0] && (b.left += m / 2),
			"bottom" === s.at[1] ? b.top += g: "center" === s.at[1] && (b.top += g / 2),
			p = e(k.at, m, g),
			b.left += p[0],
			b.top += p[1],
			this.each(function() {
				var n, h, u = t(this),
				c = u.outerWidth(),
				d = u.outerHeight(),
				f = i(this, "marginLeft"),
				y = i(this, "marginTop"),
				T = c + f + i(this, "marginRight") + x.width,
				D = d + y + i(this, "marginBottom") + x.height,
				S = t.extend({},
				b),
				I = e(k.my, u.outerWidth(), u.outerHeight());
				"right" === s.my[0] ? S.left -= c: "center" === s.my[0] && (S.left -= c / 2),
				"bottom" === s.my[1] ? S.top -= d: "center" === s.my[1] && (S.top -= d / 2),
				S.left += I[0],
				S.top += I[1],
				o || (S.left = l(S.left), S.top = l(S.top)),
				n = {
					marginLeft: f,
					marginTop: y
				},
				t.each(["left", "top"],
				function(e, i) {
					t.ui.position[C[e]] && t.ui.position[C[e]][i](S, {
						targetWidth: m,
						targetHeight: g,
						elemWidth: c,
						elemHeight: d,
						collisionPosition: n,
						collisionWidth: T,
						collisionHeight: D,
						offset: [p[0] + I[0], p[1] + I[1]],
						my: s.my,
						at: s.at,
						within: w,
						elem: u
					})
				}),
				s.using && (h = function(t) {
					var e = v.left - S.left,
					i = e + m - c,
					n = v.top - S.top,
					o = n + g - d,
					l = {
						target: {
							element: _,
							left: v.left,
							top: v.top,
							width: m,
							height: g
						},
						element: {
							element: u,
							left: S.left,
							top: S.top,
							width: c,
							height: d
						},
						horizontal: 0 > i ? "left": e > 0 ? "right": "center",
						vertical: 0 > o ? "top": n > 0 ? "bottom": "middle"
					};
					c > m && r(e + i) < m && (l.horizontal = "center"),
					d > g && r(n + o) < g && (l.vertical = "middle"),
					a(r(e), r(i)) > a(r(n), r(o)) ? l.important = "horizontal": l.important = "vertical",
					s.using.call(this, t, l)
				}),
				u.offset(t.extend(S, {
					using: h
				}))
			})
		},
		t.ui.position = {
			fit: {
				left: function(t, e) {
					var i, n = e.within,
					s = n.isWindow ? n.scrollLeft: n.offset.left,
					o = n.width,
					r = t.left - e.collisionPosition.marginLeft,
					l = s - r,
					h = r + e.collisionWidth - o - s;
					e.collisionWidth > o ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - o - s, t.left += l - i) : h > 0 && 0 >= l ? t.left = s: l > h ? t.left = s + o - e.collisionWidth: t.left = s: l > 0 ? t.left += l: h > 0 ? t.left -= h: t.left = a(t.left - r, t.left)
				},
				top: function(t, e) {
					var i, n = e.within,
					s = n.isWindow ? n.scrollTop: n.offset.top,
					o = e.within.height,
					r = t.top - e.collisionPosition.marginTop,
					l = s - r,
					h = r + e.collisionHeight - o - s;
					e.collisionHeight > o ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - o - s, t.top += l - i) : h > 0 && 0 >= l ? t.top = s: l > h ? t.top = s + o - e.collisionHeight: t.top = s: l > 0 ? t.top += l: h > 0 ? t.top -= h: t.top = a(t.top - r, t.top)
				}
			},
			flip: {
				left: function(t, e) {
					var i, n, s = e.within,
					o = s.offset.left + s.scrollLeft,
					a = s.width,
					l = s.isWindow ? s.scrollLeft: s.offset.left,
					h = t.left - e.collisionPosition.marginLeft,
					u = h - l,
					c = h + e.collisionWidth - a - l,
					d = "left" === e.my[0] ? -e.elemWidth: "right" === e.my[0] ? e.elemWidth: 0,
					p = "left" === e.at[0] ? e.targetWidth: "right" === e.at[0] ? -e.targetWidth: 0,
					f = -2 * e.offset[0];
					0 > u ? (i = t.left + d + p + f + e.collisionWidth - a - o, (0 > i || i < r(u)) && (t.left += d + p + f)) : c > 0 && (n = t.left - e.collisionPosition.marginLeft + d + p + f - l, (n > 0 || r(n) < c) && (t.left += d + p + f))
				},
				top: function(t, e) {
					var i, n, s = e.within,
					o = s.offset.top + s.scrollTop,
					a = s.height,
					l = s.isWindow ? s.scrollTop: s.offset.top,
					h = t.top - e.collisionPosition.marginTop,
					u = h - l,
					c = h + e.collisionHeight - a - l,
					d = "top" === e.my[1],
					p = d ? -e.elemHeight: "bottom" === e.my[1] ? e.elemHeight: 0,
					f = "top" === e.at[1] ? e.targetHeight: "bottom" === e.at[1] ? -e.targetHeight: 0,
					m = -2 * e.offset[1];
					0 > u ? (n = t.top + p + f + m + e.collisionHeight - a - o, (0 > n || n < r(u)) && (t.top += p + f + m)) : c > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - l, (i > 0 || r(i) < c) && (t.top += p + f + m))
				}
			},
			flipfit: {
				left: function() {
					t.ui.position.flip.left.apply(this, arguments),
					t.ui.position.fit.left.apply(this, arguments)
				},
				top: function() {
					t.ui.position.flip.top.apply(this, arguments),
					t.ui.position.fit.top.apply(this, arguments)
				}
			}
		},
		function() {
			var e, i, n, s, a, r = document.getElementsByTagName("body")[0],
			l = document.createElement("div");
			e = document.createElement(r ? "div": "body"),
			n = {
				visibility: "hidden",
				width: 0,
				height: 0,
				border: 0,
				margin: 0,
				background: "none"
			},
			r && t.extend(n, {
				position: "absolute",
				left: "-1000px",
				top: "-1000px"
			});
			for (a in n) e.style[a] = n[a];
			e.appendChild(l),
			i = r || document.documentElement,
			i.insertBefore(e, i.firstChild),
			l.style.cssText = "position: absolute; left: 10.7432222px;",
			s = t(l).offset().left,
			o = s > 10 && 11 > s,
			e.innerHTML = "",
			i.removeChild(e)
		} ()
	} (),
	t.ui.position
}),
/*!
 * jQuery UI Menu 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/menu/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./position"], t) : t(jQuery)
} (function(t) {
	return t.widget("ui.menu", {
		version: "1.11.4",
		defaultElement: "<ul>",
		delay: 300,
		options: {
			icons: {
				submenu: "ui-icon-carat-1-e"
			},
			items: "> *",
			menus: "ul",
			position: {
				my: "left-1 top",
				at: "right top"
			},
			role: "menu",
			blur: null,
			focus: null,
			select: null
		},
		_create: function() {
			this.activeMenu = this.element,
			this.mouseHandled = !1,
			this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
				role: this.options.role,
				tabIndex: 0
			}),
			this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"),
			this._on({
				"mousedown .ui-menu-item": function(t) {
					t.preventDefault()
				},
				"click .ui-menu-item": function(e) {
					var i = t(e.target); ! this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
				},
				"mouseenter .ui-menu-item": function(e) {
					if (!this.previousFilter) {
						var i = t(e.currentTarget);
						i.siblings(".ui-state-active").removeClass("ui-state-active"),
						this.focus(e, i)
					}
				},
				mouseleave: "collapseAll",
				"mouseleave .ui-menu": "collapseAll",
				focus: function(t, e) {
					var i = this.active || this.element.find(this.options.items).eq(0);
					e || this.focus(t, i)
				},
				blur: function(e) {
					this._delay(function() {
						t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
					})
				},
				keydown: "_keydown"
			}),
			this.refresh(),
			this._on(this.document, {
				click: function(t) {
					this._closeOnDocumentClick(t) && this.collapseAll(t),
					this.mouseHandled = !1
				}
			})
		},
		_destroy: function() {
			this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
			this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
				var e = t(this);
				e.data("ui-menu-submenu-carat") && e.remove()
			}),
			this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
		},
		_keydown: function(e) {
			var i, n, s, o, a = !0;
			switch (e.keyCode) {
			case t.ui.keyCode.PAGE_UP:
				this.previousPage(e);
				break;
			case t.ui.keyCode.PAGE_DOWN:
				this.nextPage(e);
				break;
			case t.ui.keyCode.HOME:
				this._move("first", "first", e);
				break;
			case t.ui.keyCode.END:
				this._move("last", "last", e);
				break;
			case t.ui.keyCode.UP:
				this.previous(e);
				break;
			case t.ui.keyCode.DOWN:
				this.next(e);
				break;
			case t.ui.keyCode.LEFT:
				this.collapse(e);
				break;
			case t.ui.keyCode.RIGHT:
				this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
				break;
			case t.ui.keyCode.ENTER:
			case t.ui.keyCode.SPACE:
				this._activate(e);
				break;
			case t.ui.keyCode.ESCAPE:
				this.collapse(e);
				break;
			default:
				a = !1,
				n = this.previousFilter || "",
				s = String.fromCharCode(e.keyCode),
				o = !1,
				clearTimeout(this.filterTimer),
				s === n ? o = !0 : s = n + s,
				i = this._filterMenuItems(s),
				i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i,
				i.length || (s = String.fromCharCode(e.keyCode), i = this._filterMenuItems(s)),
				i.length ? (this.focus(e, i), this.previousFilter = s, this.filterTimer = this._delay(function() {
					delete this.previousFilter
				},
				1e3)) : delete this.previousFilter
			}
			a && e.preventDefault()
		},
		_activate: function(t) {
			this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(t) : this.select(t))
		},
		refresh: function() {
			var e, i, n = this,
			s = this.options.icons.submenu,
			o = this.element.find(this.options.menus);
			this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length),
			o.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			}).each(function() {
				var e = t(this),
				i = e.parent(),
				n = t("<span>").addClass("ui-menu-icon ui-icon " + s).data("ui-menu-submenu-carat", !0);
				i.attr("aria-haspopup", "true").prepend(n),
				e.attr("aria-labelledby", i.attr("id"))
			}),
			e = o.add(this.element),
			i = e.find(this.options.items),
			i.not(".ui-menu-item").each(function() {
				var e = t(this);
				n._isDivider(e) && e.addClass("ui-widget-content ui-menu-divider")
			}),
			i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
				tabIndex: -1,
				role: this._itemRole()
			}),
			i.filter(".ui-state-disabled").attr("aria-disabled", "true"),
			this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
		},
		_itemRole: function() {
			return {
				menu: "menuitem",
				listbox: "option"
			} [this.options.role]
		},
		_setOption: function(t, e) {
			"icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),
			"disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e),
			this._super(t, e)
		},
		focus: function(t, e) {
			var i, n;
			this.blur(t, t && "focus" === t.type),
			this._scrollIntoView(e),
			this.active = e.first(),
			n = this.active.addClass("ui-state-focus").removeClass("ui-state-active"),
			this.options.role && this.element.attr("aria-activedescendant", n.attr("id")),
			this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),
			t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
				this._close()
			},
			this.delay),
			i = e.children(".ui-menu"),
			i.length && t && /^mouse/.test(t.type) && this._startOpening(i),
			this.activeMenu = e.parent(),
			this._trigger("focus", t, {
				item: e
			})
		},
		_scrollIntoView: function(e) {
			var i, n, s, o, a, r;
			this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > s ? this.activeMenu.scrollTop(o + s) : s + r > a && this.activeMenu.scrollTop(o + s - a + r))
		},
		blur: function(t, e) {
			e || clearTimeout(this.timer),
			this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
				item: this.active
			}))
		},
		_startOpening: function(t) {
			clearTimeout(this.timer),
			"true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
				this._close(),
				this._open(t)
			},
			this.delay))
		},
		_open: function(e) {
			var i = t.extend({
				of: this.active
			},
			this.options.position);
			clearTimeout(this.timer),
			this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
			e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
		},
		collapseAll: function(e, i) {
			clearTimeout(this.timer),
			this.timer = this._delay(function() {
				var n = i ? this.element: t(e && e.target).closest(this.element.find(".ui-menu"));
				n.length || (n = this.element),
				this._close(n),
				this.blur(e),
				this.activeMenu = n
			},
			this.delay)
		},
		_close: function(t) {
			t || (t = this.active ? this.active.parent() : this.element),
			t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
		},
		_closeOnDocumentClick: function(e) {
			return ! t(e.target).closest(".ui-menu").length
		},
		_isDivider: function(t) {
			return ! /[^\-\u2014\u2013\s]/.test(t.text())
		},
		collapse: function(t) {
			var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
			e && e.length && (this._close(), this.focus(t, e))
		},
		expand: function(t) {
			var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
			e && e.length && (this._open(e.parent()), this._delay(function() {
				this.focus(t, e)
			}))
		},
		next: function(t) {
			this._move("next", "first", t)
		},
		previous: function(t) {
			this._move("prev", "last", t)
		},
		isFirstItem: function() {
			return this.active && !this.active.prevAll(".ui-menu-item").length
		},
		isLastItem: function() {
			return this.active && !this.active.nextAll(".ui-menu-item").length
		},
		_move: function(t, e, i) {
			var n;
			this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll": "nextAll"](".ui-menu-item").eq( - 1) : this.active[t + "All"](".ui-menu-item").eq(0)),
			n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()),
			this.focus(i, n)
		},
		nextPage: function(e) {
			var i, n, s;
			return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
				return i = t(this),
				i.offset().top - n - s < 0
			}), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last": "first"]()))) : void this.next(e)
		},
		previousPage: function(e) {
			var i, n, s;
			return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
				return i = t(this),
				i.offset().top - n + s > 0
			}), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
		},
		_hasScroll: function() {
			return this.element.outerHeight() < this.element.prop("scrollHeight")
		},
		select: function(e) {
			this.active = this.active || t(e.target).closest(".ui-menu-item");
			var i = {
				item: this.active
			};
			this.active.has(".ui-menu").length || this.collapseAll(e, !0),
			this._trigger("select", e, i)
		},
		_filterMenuItems: function(e) {
			var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
			n = new RegExp("^" + i, "i");
			return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
				return n.test(t.trim(t(this).text()))
			})
		}
	})
}),
/*!
 * jQuery UI Autocomplete 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/autocomplete/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./position", "./menu"], t) : t(jQuery)
} (function(t) {
	return t.widget("ui.autocomplete", {
		version: "1.11.4",
		defaultElement: "<input>",
		options: {
			appendTo: null,
			autoFocus: !1,
			delay: 300,
			minLength: 1,
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			response: null,
			search: null,
			select: null
		},
		requestIndex: 0,
		pending: 0,
		_create: function() {
			var e, i, n, s = this.element[0].nodeName.toLowerCase(),
			o = "textarea" === s,
			a = "input" === s;
			this.isMultiLine = o ? !0 : a ? !1 : this.element.prop("isContentEditable"),
			this.valueMethod = this.element[o || a ? "val": "text"],
			this.isNewMenu = !0,
			this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"),
			this._on(this.element, {
				keydown: function(s) {
					if (this.element.prop("readOnly")) return e = !0,
					n = !0,
					void(i = !0);
					e = !1,
					n = !1,
					i = !1;
					var o = t.ui.keyCode;
					switch (s.keyCode) {
					case o.PAGE_UP:
						e = !0,
						this._move("previousPage", s);
						break;
					case o.PAGE_DOWN:
						e = !0,
						this._move("nextPage", s);
						break;
					case o.UP:
						e = !0,
						this._keyEvent("previous", s);
						break;
					case o.DOWN:
						e = !0,
						this._keyEvent("next", s);
						break;
					case o.ENTER:
						this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
						break;
					case o.TAB:
						this.menu.active && this.menu.select(s);
						break;
					case o.ESCAPE:
						this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
						break;
					default:
						i = !0,
						this._searchTimeout(s)
					}
				},
				keypress: function(n) {
					if (e) return e = !1,
					void((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
					if (!i) {
						var s = t.ui.keyCode;
						switch (n.keyCode) {
						case s.PAGE_UP:
							this._move("previousPage", n);
							break;
						case s.PAGE_DOWN:
							this._move("nextPage", n);
							break;
						case s.UP:
							this._keyEvent("previous", n);
							break;
						case s.DOWN:
							this._keyEvent("next", n)
						}
					}
				},
				input: function(t) {
					return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t)
				},
				focus: function() {
					this.selectedItem = null,
					this.previous = this._value()
				},
				blur: function(t) {
					return this.cancelBlur ? void delete this.cancelBlur: (clearTimeout(this.searching), this.close(t), void this._change(t))
				}
			}),
			this._initSource(),
			this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
				role: null
			}).hide().menu("instance"),
			this._on(this.menu.element, {
				mousedown: function(e) {
					e.preventDefault(),
					this.cancelBlur = !0,
					this._delay(function() {
						delete this.cancelBlur
					});
					var i = this.menu.element[0];
					t(e.target).closest(".ui-menu-item").length || this._delay(function() {
						var e = this;
						this.document.one("mousedown",
						function(n) {
							n.target === e.element[0] || n.target === i || t.contains(i, n.target) || e.close()
						})
					})
				},
				menufocus: function(e, i) {
					var n, s;
					return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove",
					function() {
						t(e.target).trigger(e.originalEvent)
					})) : (s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
						item: s
					}) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), n = i.item.attr("aria-label") || s.value, void(n && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion))))
				},
				menuselect: function(t, e) {
					var i = e.item.data("ui-autocomplete-item"),
					n = this.previous;
					this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function() {
						this.previous = n,
						this.selectedItem = i
					})),
					!1 !== this._trigger("select", t, {
						item: i
					}) && this._value(i.value),
					this.term = this._value(),
					this.close(t),
					this.selectedItem = i
				}
			}),
			this.liveRegion = t("<span>", {
				role: "status",
				"aria-live": "assertive",
				"aria-relevant": "additions"
			}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),
			this._on(this.window, {
				beforeunload: function() {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_destroy: function() {
			clearTimeout(this.searching),
			this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),
			this.menu.element.remove(),
			this.liveRegion.remove()
		},
		_setOption: function(t, e) {
			this._super(t, e),
			"source" === t && this._initSource(),
			"appendTo" === t && this.menu.element.appendTo(this._appendTo()),
			"disabled" === t && e && this.xhr && this.xhr.abort()
		},
		_appendTo: function() {
			var e = this.options.appendTo;
			return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
			e && e[0] || (e = this.element.closest(".ui-front")),
			e.length || (e = this.document[0].body),
			e
		},
		_initSource: function() {
			var e, i, n = this;
			t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, n) {
				n(t.ui.autocomplete.filter(e, i.term))
			}) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, s) {
				n.xhr && n.xhr.abort(),
				n.xhr = t.ajax({
					url: i,
					data: e,
					dataType: "json",
					success: function(t) {
						s(t)
					},
					error: function() {
						s([])
					}
				})
			}) : this.source = this.options.source
		},
		_searchTimeout: function(t) {
			clearTimeout(this.searching),
			this.searching = this._delay(function() {
				var e = this.term === this._value(),
				i = this.menu.element.is(":visible"),
				n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey; (!e || e && !i && !n) && (this.selectedItem = null, this.search(null, t))
			},
			this.options.delay)
		},
		search: function(t, e) {
			return t = null != t ? t: this._value(),
			this.term = this._value(),
			t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
		},
		_search: function(t) {
			this.pending++,
			this.element.addClass("ui-autocomplete-loading"),
			this.cancelSearch = !1,
			this.source({
				term: t
			},
			this._response())
		},
		_response: function() {
			var e = ++this.requestIndex;
			return t.proxy(function(t) {
				e === this.requestIndex && this.__response(t),
				this.pending--,
				this.pending || this.element.removeClass("ui-autocomplete-loading")
			},
			this)
		},
		__response: function(t) {
			t && (t = this._normalize(t)),
			this._trigger("response", null, {
				content: t
			}),
			!this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
		},
		close: function(t) {
			this.cancelSearch = !0,
			this._close(t)
		},
		_close: function(t) {
			this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
		},
		_change: function(t) {
			this.previous !== this._value() && this._trigger("change", t, {
				item: this.selectedItem
			})
		},
		_normalize: function(e) {
			return e.length && e[0].label && e[0].value ? e: t.map(e,
			function(e) {
				return "string" == typeof e ? {
					label: e,
					value: e
				}: t.extend({},
				e, {
					label: e.label || e.value,
					value: e.value || e.label
				})
			})
		},
		_suggest: function(e) {
			var i = this.menu.element.empty();
			this._renderMenu(i, e),
			this.isNewMenu = !0,
			this.menu.refresh(),
			i.show(),
			this._resizeMenu(),
			i.position(t.extend({
				of: this.element
			},
			this.options.position)),
			this.options.autoFocus && this.menu.next()
		},
		_resizeMenu: function() {
			var t = this.menu.element;
			t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
		},
		_renderMenu: function(e, i) {
			var n = this;
			t.each(i,
			function(t, i) {
				n._renderItemData(e, i)
			})
		},
		_renderItemData: function(t, e) {
			return this._renderItem(t, e).data("ui-autocomplete-item", e)
		},
		_renderItem: function(e, i) {
			return t("<li>").text(i.label).appendTo(e)
		},
		_move: function(t, e) {
			return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
		},
		widget: function() {
			return this.menu.element
		},
		_value: function() {
			return this.valueMethod.apply(this.element, arguments)
		},
		_keyEvent: function(t, e) { (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
		}
	}),
	t.extend(t.ui.autocomplete, {
		escapeRegex: function(t) {
			return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
		},
		filter: function(e, i) {
			var n = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
			return t.grep(e,
			function(t) {
				return n.test(t.label || t.value || t)
			})
		}
	}),
	t.widget("ui.autocomplete", t.ui.autocomplete, {
		options: {
			messages: {
				noResults: "No search results.",
				results: function(t) {
					return t + (t > 1 ? " results are": " result is") + " available, use up and down arrow keys to navigate."
				}
			}
		},
		__response: function(e) {
			var i;
			this._superApply(arguments),
			this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
		}
	}),
	t.ui.autocomplete
}),
/*!
 * jQuery UI Button 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/button/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], t) : t(jQuery)
} (function(t) {
	var e, i = "ui-button ui-widget ui-state-default ui-corner-all",
	n = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
	s = function() {
		var e = t(this);
		setTimeout(function() {
			e.find(":ui-button").button("refresh")
		},
		1)
	},
	o = function(e) {
		var i = e.name,
		n = e.form,
		s = t([]);
		return i && (i = i.replace(/'/g, "\\'"), s = n ? t(n).find("[name='" + i + "'][type=radio]") : t("[name='" + i + "'][type=radio]", e.ownerDocument).filter(function() {
			return ! this.form
		})),
		s
	};
	return t.widget("ui.button", {
		version: "1.11.4",
		defaultElement: "<button>",
		options: {
			disabled: null,
			text: !0,
			label: null,
			icons: {
				primary: null,
				secondary: null
			}
		},
		_create: function() {
			this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, s),
			"boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled),
			this._determineButtonType(),
			this.hasTitle = !!this.buttonElement.attr("title");
			var n = this,
			a = this.options,
			r = "checkbox" === this.type || "radio" === this.type,
			l = r ? "": "ui-state-active";
			null === a.label && (a.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()),
			this._hoverable(this.buttonElement),
			this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter" + this.eventNamespace,
			function() {
				a.disabled || this === e && t(this).addClass("ui-state-active")
			}).bind("mouseleave" + this.eventNamespace,
			function() {
				a.disabled || t(this).removeClass(l)
			}).bind("click" + this.eventNamespace,
			function(t) {
				a.disabled && (t.preventDefault(), t.stopImmediatePropagation())
			}),
			this._on({
				focus: function() {
					this.buttonElement.addClass("ui-state-focus")
				},
				blur: function() {
					this.buttonElement.removeClass("ui-state-focus")
				}
			}),
			r && this.element.bind("change" + this.eventNamespace,
			function() {
				n.refresh()
			}),
			"checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace,
			function() {
				return a.disabled ? !1 : void 0
			}) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace,
			function() {
				if (a.disabled) return ! 1;
				t(this).addClass("ui-state-active"),
				n.buttonElement.attr("aria-pressed", "true");
				var e = n.element[0];
				o(e).not(e).map(function() {
					return t(this).button("widget")[0]
				}).removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : (this.buttonElement.bind("mousedown" + this.eventNamespace,
			function() {
				return a.disabled ? !1 : (t(this).addClass("ui-state-active"), e = this, void n.document.one("mouseup",
				function() {
					e = null
				}))
			}).bind("mouseup" + this.eventNamespace,
			function() {
				return a.disabled ? !1 : void t(this).removeClass("ui-state-active")
			}).bind("keydown" + this.eventNamespace,
			function(e) {
				return a.disabled ? !1 : void((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"))
			}).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace,
			function() {
				t(this).removeClass("ui-state-active")
			}), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
				e.keyCode === t.ui.keyCode.SPACE && t(this).click()
			})),
			this._setOption("disabled", a.disabled),
			this._resetButton()
		},
		_determineButtonType: function() {
			var t, e, i;
			this.element.is("[type=checkbox]") ? this.type = "checkbox": this.element.is("[type=radio]") ? this.type = "radio": this.element.is("input") ? this.type = "input": this.type = "button",
			"checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
		},
		widget: function() {
			return this.buttonElement
		},
		_destroy: function() {
			this.element.removeClass("ui-helper-hidden-accessible"),
			this.buttonElement.removeClass(i + " ui-state-active " + n).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),
			this.hasTitle || this.buttonElement.removeAttr("title")
		},
		_setOption: function(t, e) {
			return this._super(t, e),
			"disabled" === t ? (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), void(e && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")))) : void this._resetButton()
		},
		refresh: function() {
			var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
			e !== this.options.disabled && this._setOption("disabled", e),
			"radio" === this.type ? o(this.element[0]).each(function() {
				t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
		},
		_resetButton: function() {
			if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
			var e = this.buttonElement.removeClass(n),
			i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
			s = this.options.icons,
			o = s.primary && s.secondary,
			a = [];
			s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (o ? "s": s.primary ? "-primary": "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(o ? "ui-button-icons-only": "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : a.push("ui-button-text-only"),
			e.addClass(a.join(" "))
		}
	}),
	t.widget("ui.buttonset", {
		version: "1.11.4",
		options: {
			items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
		},
		_create: function() {
			this.element.addClass("ui-buttonset")
		},
		_init: function() {
			this.refresh()
		},
		_setOption: function(t, e) {
			"disabled" === t && this.buttons.button("option", t, e),
			this._super(t, e)
		},
		refresh: function() {
			var e = "rtl" === this.element.css("direction"),
			i = this.element.find(this.options.items),
			n = i.filter(":ui-button");
			i.not(":ui-button").button(),
			n.button("refresh"),
			this.buttons = i.map(function() {
				return t(this).button("widget")[0]
			}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right": "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left": "ui-corner-right").end().end()
		},
		_destroy: function() {
			this.element.removeClass("ui-buttonset"),
			this.buttons.map(function() {
				return t(this).button("widget")[0]
			}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
		}
	}),
	t.ui.button
}),
/*!
 * jQuery UI Datepicker 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./core"], t) : t(jQuery)
} (function(t) {
	function e(t) {
		for (var e, i; t.length && t[0] !== document;) {
			if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
			t = t.parent()
		}
		return 0
	}
	function i() {
		this._curInst = null,
		this._keyEvent = !1,
		this._disabledInputs = [],
		this._datepickerShowing = !1,
		this._inDialog = !1,
		this._mainDivId = "ui-datepicker-div",
		this._inlineClass = "ui-datepicker-inline",
		this._appendClass = "ui-datepicker-append",
		this._triggerClass = "ui-datepicker-trigger",
		this._dialogClass = "ui-datepicker-dialog",
		this._disableClass = "ui-datepicker-disabled",
		this._unselectableClass = "ui-datepicker-unselectable",
		this._currentClass = "ui-datepicker-current-day",
		this._dayOverClass = "ui-datepicker-days-cell-over",
		this.regional = [],
		this.regional[""] = {
			closeText: "Done",
			prevText: "Prev",
			nextText: "Next",
			currentText: "Today",
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader: "Wk",
			dateFormat: "mm/dd/yy",
			firstDay: 0,
			isRTL: !1,
			showMonthAfterYear: !1,
			yearSuffix: ""
		},
		this._defaults = {
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions: {},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: !1,
			hideIfNoPrevNext: !1,
			navigationAsDateFormat: !1,
			gotoCurrent: !1,
			changeMonth: !1,
			changeYear: !1,
			yearRange: "c-10:c+10",
			showOtherMonths: !1,
			selectOtherMonths: !1,
			showWeek: !1,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: !0,
			showButtonPanel: !1,
			autoSize: !1,
			disabled: !1
		},
		t.extend(this._defaults, this.regional[""]),
		this.regional.en = t.extend(!0, {},
		this.regional[""]),
		this.regional["en-US"] = t.extend(!0, {},
		this.regional.en),
		this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
	}
	function n(e) {
		var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return e.delegate(i, "mouseout",
		function() {
			t(this).removeClass("ui-state-hover"),
			-1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"),
			-1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
		}).delegate(i, "mouseover", s)
	}
	function s() {
		t.datepicker._isDisabledDatepicker(a.inline ? a.dpDiv.parent()[0] : a.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
	}
	function o(e, i) {
		t.extend(e, i);
		for (var n in i) null == i[n] && (e[n] = i[n]);
		return e
	}
	t.extend(t.ui, {
		datepicker: {
			version: "1.11.4"
		}
	});
	var a;
	return t.extend(i.prototype, {
		markerClassName: "hasDatepicker",
		maxRows: 4,
		_widgetDatepicker: function() {
			return this.dpDiv
		},
		setDefaults: function(t) {
			return o(this._defaults, t || {}),
			this
		},
		_attachDatepicker: function(e, i) {
			var n, s, o;
			n = e.nodeName.toLowerCase(),
			s = "div" === n || "span" === n,
			e.id || (this.uuid += 1, e.id = "dp" + this.uuid),
			o = this._newInst(t(e), s),
			o.settings = t.extend({},
			i || {}),
			"input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o)
		},
		_newInst: function(e, i) {
			var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
			return {
				id: s,
				input: e,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: i,
				dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
			}
		},
		_connectDatepicker: function(e, i) {
			var n = t(e);
			i.append = t([]),
			i.trigger = t([]),
			n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
		},
		_attachments: function(e, i) {
			var n, s, o, a = this._get(i, "appendText"),
			r = this._get(i, "isRTL");
			i.append && i.append.remove(),
			a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before": "after"](i.append)),
			e.unbind("focus", this._showDatepicker),
			i.trigger && i.trigger.remove(),
			n = this._get(i, "showOn"),
			("focus" === n || "both" === n) && e.focus(this._showDatepicker),
			("button" === n || "both" === n) && (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
				src: o,
				alt: s,
				title: s
			}) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
				src: o,
				alt: s,
				title: s
			}) : s)), e[r ? "before": "after"](i.trigger), i.trigger.click(function() {
				return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]),
				!1
			}))
		},
		_autoSize: function(t) {
			if (this._get(t, "autoSize") && !t.inline) {
				var e, i, n, s, o = new Date(2009, 11, 20),
				a = this._get(t, "dateFormat");
				a.match(/[DM]/) && (e = function(t) {
					for (i = 0, n = 0, s = 0; s < t.length; s++) t[s].length > i && (i = t[s].length, n = s);
					return n
				},
				o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames": "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames": "dayNamesShort")) + 20 - o.getDay())),
				t.input.attr("size", this._formatDate(t, o).length)
			}
		},
		_inlineDatepicker: function(e, i) {
			var n = t(e);
			n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
		},
		_dialogDatepicker: function(e, i, n, s, a) {
			var r, l, h, u, c, d = this._dialogInst;
			return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {},
			t.data(this._dialogInput[0], "datepicker", d)),
			o(d.settings, s || {}),
			i = i && i.constructor === Date ? this._formatDate(d, i) : i,
			this._dialogInput.val(i),
			this._pos = a ? a.length ? a: [a.pageX, a.pageY] : null,
			this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, h / 2 - 150 + c]),
			this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
			d.settings.onSelect = n,
			this._inDialog = !0,
			this.dpDiv.addClass(this._dialogClass),
			this._showDatepicker(this._dialogInput[0]),
			t.blockUI && t.blockUI(this.dpDiv),
			t.data(this._dialogInput[0], "datepicker", d),
			this
		},
		_destroyDatepicker: function(e) {
			var i, n = t(e),
			s = t.data(e, "datepicker");
			n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty(), a === s && (a = null))
		},
		_enableDatepicker: function(e) {
			var i, n, s = t(e),
			o = t.data(e, "datepicker");
			s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() {
				this.disabled = !1
			}).end().filter("img").css({
				opacity: "1.0",
				cursor: ""
			})) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs,
			function(t) {
				return t === e ? null: t
			}))
		},
		_disableDatepicker: function(e) {
			var i, n, s = t(e),
			o = t.data(e, "datepicker");
			s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() {
				this.disabled = !0
			}).end().filter("img").css({
				opacity: "0.5",
				cursor: "default"
			})) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs,
			function(t) {
				return t === e ? null: t
			}), this._disabledInputs[this._disabledInputs.length] = e)
		},
		_isDisabledDatepicker: function(t) {
			if (!t) return ! 1;
			for (var e = 0; e < this._disabledInputs.length; e++) if (this._disabledInputs[e] === t) return ! 0;
			return ! 1
		},
		_getInst: function(e) {
			try {
				return t.data(e, "datepicker")
			} catch(i) {
				throw "Missing instance data for this datepicker"
			}
		},
		_optionDatepicker: function(e, i, n) {
			var s, a, r, l, h = this._getInst(e);
			return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({},
			t.datepicker._defaults) : h ? "all" === i ? t.extend({},
			h.settings) : this._get(h, i) : null: (s = i || {},
			"string" == typeof i && (s = {},
			s[i] = n), void(h && (this._curInst === h && this._hideDatepicker(), a = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), o(h.settings, s), null !== r && void 0 !== s.dateFormat && void 0 === s.minDate && (h.settings.minDate = this._formatDate(h, r)), null !== l && void 0 !== s.dateFormat && void 0 === s.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, a), this._updateAlternate(h), this._updateDatepicker(h))))
		},
		_changeDatepicker: function(t, e, i) {
			this._optionDatepicker(t, e, i)
		},
		_refreshDatepicker: function(t) {
			var e = this._getInst(t);
			e && this._updateDatepicker(e)
		},
		_setDateDatepicker: function(t, e) {
			var i = this._getInst(t);
			i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
		},
		_getDateDatepicker: function(t, e) {
			var i = this._getInst(t);
			return i && !i.inline && this._setDateFromField(i, e),
			i ? this._getDate(i) : null
		},
		_doKeyDown: function(e) {
			var i, n, s, o = t.datepicker._getInst(e.target),
			a = !0,
			r = o.dpDiv.is(".ui-datepicker-rtl");
			if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
			case 9:
				t.datepicker._hideDatepicker(),
				a = !1;
				break;
			case 13:
				return s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv),
				s[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]),
				i = t.datepicker._get(o, "onSelect"),
				i ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(),
				!1;
			case 27:
				t.datepicker._hideDatepicker();
				break;
			case 33:
				t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
				break;
			case 34:
				t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
				break;
			case 35:
				(e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
				a = e.ctrlKey || e.metaKey;
				break;
			case 36:
				(e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
				a = e.ctrlKey || e.metaKey;
				break;
			case 37:
				(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"),
				a = e.ctrlKey || e.metaKey,
				e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
				break;
			case 38:
				(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"),
				a = e.ctrlKey || e.metaKey;
				break;
			case 39:
				(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"),
				a = e.ctrlKey || e.metaKey,
				e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
				break;
			case 40:
				(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"),
				a = e.ctrlKey || e.metaKey;
				break;
			default:
				a = !1
			} else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
			a && (e.preventDefault(), e.stopPropagation())
		},
		_doKeyPress: function(e) {
			var i, n, s = t.datepicker._getInst(e.target);
			return t.datepicker._get(s, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode: e.charCode), e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
		},
		_doKeyUp: function(e) {
			var i, n = t.datepicker._getInst(e.target);
			if (n.input.val() !== n.lastVal) try {
				i = t.datepicker.parseDate(t.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, t.datepicker._getFormatConfig(n)),
				i && (t.datepicker._setDateFromField(n), t.datepicker._updateAlternate(n), t.datepicker._updateDatepicker(n))
			} catch(s) {}
			return ! 0
		},
		_showDatepicker: function(i) {
			if (i = i.target || i, "input" !== i.nodeName.toLowerCase() && (i = t("input", i.parentNode)[0]), !t.datepicker._isDisabledDatepicker(i) && t.datepicker._lastInput !== i) {
				var n, s, a, r, l, h, u;
				n = t.datepicker._getInst(i),
				t.datepicker._curInst && t.datepicker._curInst !== n && (t.datepicker._curInst.dpDiv.stop(!0, !0), n && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
				s = t.datepicker._get(n, "beforeShow"),
				a = s ? s.apply(i, [i, n]) : {},
				a !== !1 && (o(n.settings, a), n.lastVal = null, t.datepicker._lastInput = i, t.datepicker._setDateFromField(n), t.datepicker._inDialog && (i.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(i), t.datepicker._pos[1] += i.offsetHeight), r = !1, t(i).parents().each(function() {
					return r |= "fixed" === t(this).css("position"),
					!r
				}), l = {
					left: t.datepicker._pos[0],
					top: t.datepicker._pos[1]
				},
				t.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
					position: "absolute",
					display: "block",
					top: "-1000px"
				}), t.datepicker._updateDatepicker(n), l = t.datepicker._checkOffset(n, l, r), n.dpDiv.css({
					position: t.datepicker._inDialog && t.blockUI ? "static": r ? "fixed": "absolute",
					display: "none",
					left: l.left + "px",
					top: l.top + "px"
				}), n.inline || (h = t.datepicker._get(n, "showAnim"), u = t.datepicker._get(n, "duration"), n.dpDiv.css("z-index", e(t(i)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? n.dpDiv.show(h, t.datepicker._get(n, "showOptions"), u) : n.dpDiv[h || "show"](h ? u: null), t.datepicker._shouldFocusInput(n) && n.input.focus(), t.datepicker._curInst = n))
			}
		},
		_updateDatepicker: function(e) {
			this.maxRows = 4,
			a = e,
			e.dpDiv.empty().append(this._generateHTML(e)),
			this._attachHandlers(e);
			var i, n = this._getNumberOfMonths(e),
			o = n[1],
			r = 17,
			l = e.dpDiv.find("." + this._dayOverClass + " a");
			l.length > 0 && s.apply(l.get(0)),
			e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
			o > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", r * o + "em"),
			e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add": "remove") + "Class"]("ui-datepicker-multi"),
			e.dpDiv[(this._get(e, "isRTL") ? "add": "remove") + "Class"]("ui-datepicker-rtl"),
			e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(),
			e.yearshtml && (i = e.yearshtml, setTimeout(function() {
				i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),
				i = e.yearshtml = null
			},
			0))
		},
		_shouldFocusInput: function(t) {
			return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
		},
		_checkOffset: function(e, i, n) {
			var s = e.dpDiv.outerWidth(),
			o = e.dpDiv.outerHeight(),
			a = e.input ? e.input.outerWidth() : 0,
			r = e.input ? e.input.outerHeight() : 0,
			l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
			h = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
			return i.left -= this._get(e, "isRTL") ? s - a: 0,
			i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0,
			i.top -= n && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0,
			i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0),
			i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + r) : 0),
			i
		},
		_findPos: function(e) {
			for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling": "nextSibling"];
			return i = t(e).offset(),
			[i.left, i.top]
		},
		_hideDatepicker: function(e) {
			var i, n, s, o, a = this._curInst; ! a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), n = this._get(a, "duration"), s = function() {
				t.datepicker._tidyDialog(a)
			},
			t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), n, s) : a.dpDiv["slideDown" === i ? "slideUp": "fadeIn" === i ? "fadeOut": "hide"](i ? n: null, s), i || s(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
				position: "absolute",
				left: "0",
				top: "-100px"
			}), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
		},
		_tidyDialog: function(t) {
			t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
		},
		_checkExternalClick: function(e) {
			if (t.datepicker._curInst) {
				var i = t(e.target),
				n = t.datepicker._getInst(i[0]); (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
			}
		},
		_adjustDate: function(e, i, n) {
			var s = t(e),
			o = this._getInst(s[0]);
			this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o))
		},
		_gotoToday: function(e) {
			var i, n = t(e),
			s = this._getInst(n[0]);
			this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()),
			this._notifyChange(s),
			this._adjustDate(n)
		},
		_selectMonthYear: function(e, i, n) {
			var s = t(e),
			o = this._getInst(s[0]);
			o["selected" + ("M" === n ? "Month": "Year")] = o["draw" + ("M" === n ? "Month": "Year")] = parseInt(i.options[i.selectedIndex].value, 10),
			this._notifyChange(o),
			this._adjustDate(s)
		},
		_selectDay: function(e, i, n, s) {
			var o, a = t(e);
			t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
		},
		_clearDate: function(e) {
			var i = t(e);
			this._selectDate(i, "")
		},
		_selectDate: function(e, i) {
			var n, s = t(e),
			o = this._getInst(s[0]);
			i = null != i ? i: this._formatDate(o),
			o.input && o.input.val(i),
			this._updateAlternate(o),
			n = this._get(o, "onSelect"),
			n ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"),
			o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.focus(), this._lastInput = null)
		},
		_updateAlternate: function(e) {
			var i, n, s, o = this._get(e, "altField");
			o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).each(function() {
				t(this).val(s)
			}))
		},
		noWeekends: function(t) {
			var e = t.getDay();
			return [e > 0 && 6 > e, ""]
		},
		iso8601Week: function(t) {
			var e, i = new Date(t.getTime());
			return i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
			e = i.getTime(),
			i.setMonth(0),
			i.setDate(1),
			Math.floor(Math.round((e - i) / 864e5) / 7) + 1
		},
		parseDate: function(e, i, n) {
			if (null == e || null == i) throw "Invalid arguments";
			if (i = "object" == typeof i ? i.toString() : i + "", "" === i) return null;
			var s, o, a, r, l = 0,
			h = (n ? n.shortYearCutoff: null) || this._defaults.shortYearCutoff,
			u = "string" != typeof h ? h: (new Date).getFullYear() % 100 + parseInt(h, 10),
			c = (n ? n.dayNamesShort: null) || this._defaults.dayNamesShort,
			d = (n ? n.dayNames: null) || this._defaults.dayNames,
			p = (n ? n.monthNamesShort: null) || this._defaults.monthNamesShort,
			f = (n ? n.monthNames: null) || this._defaults.monthNames,
			m = -1,
			g = -1,
			v = -1,
			b = -1,
			y = !1,
			_ = function(t) {
				var i = s + 1 < e.length && e.charAt(s + 1) === t;
				return i && s++,
				i
			},
			w = function(t) {
				var e = _(t),
				n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
				s = "y" === t ? n: 1,
				o = new RegExp("^\\d{" + s + "," + n + "}"),
				a = i.substring(l).match(o);
				if (!a) throw "Missing number at position " + l;
				return l += a[0].length,
				parseInt(a[0], 10)
			},
			x = function(e, n, s) {
				var o = -1,
				a = t.map(_(e) ? s: n,
				function(t, e) {
					return [[e, t]]
				}).sort(function(t, e) {
					return - (t[1].length - e[1].length)
				});
				if (t.each(a,
				function(t, e) {
					var n = e[1];
					return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (o = e[0], l += n.length, !1) : void 0
				}), -1 !== o) return o + 1;
				throw "Unknown name at position " + l
			},
			C = function() {
				if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
				l++
			};
			for (s = 0; s < e.length; s++) if (y)"'" !== e.charAt(s) || _("'") ? C() : y = !1;
			else switch (e.charAt(s)) {
			case "d":
				v = w("d");
				break;
			case "D":
				x("D", c, d);
				break;
			case "o":
				b = w("o");
				break;
			case "m":
				g = w("m");
				break;
			case "M":
				g = x("M", p, f);
				break;
			case "y":
				m = w("y");
				break;
			case "@":
				r = new Date(w("@")),
				m = r.getFullYear(),
				g = r.getMonth() + 1,
				v = r.getDate();
				break;
			case "!":
				r = new Date((w("!") - this._ticksTo1970) / 1e4),
				m = r.getFullYear(),
				g = r.getMonth() + 1,
				v = r.getDate();
				break;
			case "'":
				_("'") ? C() : y = !0;
				break;
			default:
				C()
			}
			if (l < i.length && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
			if ( - 1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), b > -1) for (g = 1, v = b;;) {
				if (o = this._getDaysInMonth(m, g - 1), o >= v) break;
				g++,
				v -= o
			}
			if (r = this._daylightSavingAdjust(new Date(m, g - 1, v)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";
			return r
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
		formatDate: function(t, e, i) {
			if (!e) return "";
			var n, s = (i ? i.dayNamesShort: null) || this._defaults.dayNamesShort,
			o = (i ? i.dayNames: null) || this._defaults.dayNames,
			a = (i ? i.monthNamesShort: null) || this._defaults.monthNamesShort,
			r = (i ? i.monthNames: null) || this._defaults.monthNames,
			l = function(e) {
				var i = n + 1 < t.length && t.charAt(n + 1) === e;
				return i && n++,
				i
			},
			h = function(t, e, i) {
				var n = "" + e;
				if (l(t)) for (; n.length < i;) n = "0" + n;
				return n
			},
			u = function(t, e, i, n) {
				return l(t) ? n[e] : i[e]
			},
			c = "",
			d = !1;
			if (e) for (n = 0; n < t.length; n++) if (d)"'" !== t.charAt(n) || l("'") ? c += t.charAt(n) : d = !1;
			else switch (t.charAt(n)) {
			case "d":
				c += h("d", e.getDate(), 2);
				break;
			case "D":
				c += u("D", e.getDay(), s, o);
				break;
			case "o":
				c += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
				break;
			case "m":
				c += h("m", e.getMonth() + 1, 2);
				break;
			case "M":
				c += u("M", e.getMonth(), a, r);
				break;
			case "y":
				c += l("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0": "") + e.getYear() % 100;
				break;
			case "@":
				c += e.getTime();
				break;
			case "!":
				c += 1e4 * e.getTime() + this._ticksTo1970;
				break;
			case "'":
				l("'") ? c += "'": d = !0;
				break;
			default:
				c += t.charAt(n)
			}
			return c
		},
		_possibleChars: function(t) {
			var e, i = "",
			n = !1,
			s = function(i) {
				var n = e + 1 < t.length && t.charAt(e + 1) === i;
				return n && e++,
				n
			};
			for (e = 0; e < t.length; e++) if (n)"'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
			else switch (t.charAt(e)) {
			case "d":
			case "m":
			case "y":
			case "@":
				i += "0123456789";
				break;
			case "D":
			case "M":
				return null;
			case "'":
				s("'") ? i += "'": n = !0;
				break;
			default:
				i += t.charAt(e)
			}
			return i
		},
		_get: function(t, e) {
			return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
		},
		_setDateFromField: function(t, e) {
			if (t.input.val() !== t.lastVal) {
				var i = this._get(t, "dateFormat"),
				n = t.lastVal = t.input ? t.input.val() : null,
				s = this._getDefaultDate(t),
				o = s,
				a = this._getFormatConfig(t);
				try {
					o = this.parseDate(i, n, a) || s
				} catch(r) {
					n = e ? "": n
				}
				t.selectedDay = o.getDate(),
				t.drawMonth = t.selectedMonth = o.getMonth(),
				t.drawYear = t.selectedYear = o.getFullYear(),
				t.currentDay = n ? o.getDate() : 0,
				t.currentMonth = n ? o.getMonth() : 0,
				t.currentYear = n ? o.getFullYear() : 0,
				this._adjustInstDate(t)
			}
		},
		_getDefaultDate: function(t) {
			return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
		},
		_determineDate: function(e, i, n) {
			var s = function(t) {
				var e = new Date;
				return e.setDate(e.getDate() + t),
				e
			},
			o = function(i) {
				try {
					return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
				} catch(n) {}
				for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = s.getFullYear(), a = s.getMonth(), r = s.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = l.exec(i); h;) {
					switch (h[2] || "d") {
					case "d":
					case "D":
						r += parseInt(h[1], 10);
						break;
					case "w":
					case "W":
						r += 7 * parseInt(h[1], 10);
						break;
					case "m":
					case "M":
						a += parseInt(h[1], 10),
						r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
						break;
					case "y":
					case "Y":
						o += parseInt(h[1], 10),
						r = Math.min(r, t.datepicker._getDaysInMonth(o, a))
					}
					h = l.exec(i)
				}
				return new Date(o, a, r)
			},
			a = null == i || "" === i ? n: "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? n: s(i) : new Date(i.getTime());
			return a = a && "Invalid Date" === a.toString() ? n: a,
			a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)),
			this._daylightSavingAdjust(a)
		},
		_daylightSavingAdjust: function(t) {
			return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
		},
		_setDate: function(t, e, i) {
			var n = !e,
			s = t.selectedMonth,
			o = t.selectedYear,
			a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
			t.selectedDay = t.currentDay = a.getDate(),
			t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(),
			t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(),
			s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t),
			this._adjustInstDate(t),
			t.input && t.input.val(n ? "": this._formatDate(t))
		},
		_getDate: function(t) {
			var e = !t.currentYear || t.input && "" === t.input.val() ? null: this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
			return e
		},
		_attachHandlers: function(e) {
			var i = this._get(e, "stepMonths"),
			n = "#" + e.id.replace(/\\\\/g, "\\");
			e.dpDiv.find("[data-handler]").map(function() {
				var e = {
					prev: function() {
						t.datepicker._adjustDate(n, -i, "M")
					},
					next: function() {
						t.datepicker._adjustDate(n, +i, "M")
					},
					hide: function() {
						t.datepicker._hideDatepicker()
					},
					today: function() {
						t.datepicker._gotoToday(n)
					},
					selectDay: function() {
						return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
						!1
					},
					selectMonth: function() {
						return t.datepicker._selectMonthYear(n, this, "M"),
						!1
					},
					selectYear: function() {
						return t.datepicker._selectMonthYear(n, this, "Y"),
						!1
					}
				};
				t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
			})
		},
		_generateHTML: function(t) {
			var e, i, n, s, o, a, r, l, h, u, c, d, p, f, m, g, v, b, y, _, w, x, C, k, T, D, S, I, E, M, P, N, A, H, O, z, j, W, F, L = new Date,
			$ = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
			R = this._get(t, "isRTL"),
			q = this._get(t, "showButtonPanel"),
			B = this._get(t, "hideIfNoPrevNext"),
			Y = this._get(t, "navigationAsDateFormat"),
			U = this._getNumberOfMonths(t),
			V = this._get(t, "showCurrentAtPos"),
			K = this._get(t, "stepMonths"),
			X = 1 !== U[0] || 1 !== U[1],
			Q = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
			G = this._getMinMaxDate(t, "min"),
			J = this._getMinMaxDate(t, "max"),
			Z = t.drawMonth - V,
			tt = t.drawYear;
			if (0 > Z && (Z += 12, tt--), J) for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = G && G > e ? G: e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) Z--,
			0 > Z && (Z = 11, tt--);
			for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = Y ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - K, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "e": "w") + "'>" + i + "</span></a>": B ? "": "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "e": "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = Y ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, Z + K, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "w": "e") + "'>" + s + "</span></a>": B ? "": "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "w": "e") + "'>" + s + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? Q: $, a = Y ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "": "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (R ? l: "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>": "") + (R ? "": l) + "</div>": "", u = parseInt(this._get(t, "firstDay"), 10), u = isNaN(u) ? 0 : u, c = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), b = this._get(t, "selectOtherMonths"), y = this._getDefaultDate(t), _ = "", x = 0; x < U[0]; x++) {
				for (C = "", this.maxRows = 4, k = 0; k < U[1]; k++) {
					if (T = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), D = " ui-corner-all", S = "", X) {
						if (S += "<div class='ui-datepicker-group", U[1] > 1) switch (k) {
						case 0:
							S += " ui-datepicker-group-first",
							D = " ui-corner-" + (R ? "right": "left");
							break;
						case U[1] - 1 : S += " ui-datepicker-group-last",
							D = " ui-corner-" + (R ? "left": "right");
							break;
						default:
							S += " ui-datepicker-group-middle",
							D = ""
						}
						S += "'>"
					}
					for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + D + "'>" + (/all|left/.test(D) && 0 === x ? R ? o: n: "") + (/all|right/.test(D) && 0 === x ? R ? n: o: "") + this._generateMonthYearHeader(t, Z, tt, G, J, x > 0 || k > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", I = c ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>": "", w = 0; 7 > w; w++) E = (w + u) % 7,
					I += "<th scope='col'" + ((w + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'": "") + "><span title='" + d[E] + "'>" + p[E] + "</span></th>";
					for (S += I + "</tr></thead><tbody>", M = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, M)), P = (this._getFirstDayOfMonth(tt, Z) - u + 7) % 7, N = Math.ceil((P + M) / 7), A = X && this.maxRows > N ? this.maxRows: N, this.maxRows = A, H = this._daylightSavingAdjust(new Date(tt, Z, 1 - P)), O = 0; A > O; O++) {
						for (S += "<tr>", z = c ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(H) + "</td>": "", w = 0; 7 > w; w++) j = g ? g.apply(t.input ? t.input[0] : null, [H]) : [!0, ""],
						W = H.getMonth() !== Z,
						F = W && !b || !j[0] || G && G > H || J && H > J,
						z += "<td class='" + ((w + u + 6) % 7 >= 5 ? " ui-datepicker-week-end": "") + (W ? " ui-datepicker-other-month": "") + (H.getTime() === T.getTime() && Z === t.selectedMonth && t._keyEvent || y.getTime() === H.getTime() && y.getTime() === T.getTime() ? " " + this._dayOverClass: "") + (F ? " " + this._unselectableClass + " ui-state-disabled": "") + (W && !v ? "": " " + j[1] + (H.getTime() === Q.getTime() ? " " + this._currentClass: "") + (H.getTime() === $.getTime() ? " ui-datepicker-today": "")) + "'" + (W && !v || !j[2] ? "": " title='" + j[2].replace(/'/g, "&#39;") + "'") + (F ? "": " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;": F ? "<span class='ui-state-default'>" + H.getDate() + "</span>": "<a class='ui-state-default" + (H.getTime() === $.getTime() ? " ui-state-highlight": "") + (H.getTime() === Q.getTime() ? " ui-state-active": "") + (W ? " ui-priority-secondary": "") + "' href='#'>" + H.getDate() + "</a>") + "</td>",
						H.setDate(H.getDate() + 1),
						H = this._daylightSavingAdjust(H);
						S += z + "</tr>"
					}
					Z++,
					Z > 11 && (Z = 0, tt++),
					S += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && k === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>": "") : ""),
					C += S
				}
				_ += C
			}
			return _ += h,
			t._keyEvent = !1,
			_
		},
		_generateMonthYearHeader: function(t, e, i, n, s, o, a, r) {
			var l, h, u, c, d, p, f, m, g = this._get(t, "changeMonth"),
			v = this._get(t, "changeYear"),
			b = this._get(t, "showMonthAfterYear"),
			y = "<div class='ui-datepicker-title'>",
			_ = "";
			if (o || !g) _ += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
			else {
				for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!l || u >= n.getMonth()) && (!h || u <= s.getMonth()) && (_ += "<option value='" + u + "'" + (u === e ? " selected='selected'": "") + ">" + r[u] + "</option>");
				_ += "</select>"
			}
			if (b || (y += _ + (!o && g && v ? "": "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !v) y += "<span class='ui-datepicker-year'>" + i + "</span>";
			else {
				for (c = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
					var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
					return isNaN(e) ? d: e
				},
				f = p(c[0]), m = Math.max(f, p(c[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, m = s ? Math.min(m, s.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'": "") + ">" + f + "</option>";
				t.yearshtml += "</select>",
				y += t.yearshtml,
				t.yearshtml = null
			}
			return y += this._get(t, "yearSuffix"),
			b && (y += (!o && g && v ? "": "&#xa0;") + _),
			y += "</div>"
		},
		_adjustInstDate: function(t, e, i) {
			var n = t.drawYear + ("Y" === i ? e: 0),
			s = t.drawMonth + ("M" === i ? e: 0),
			o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e: 0),
			a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
			t.selectedDay = a.getDate(),
			t.drawMonth = t.selectedMonth = a.getMonth(),
			t.drawYear = t.selectedYear = a.getFullYear(),
			("M" === i || "Y" === i) && this._notifyChange(t)
		},
		_restrictMinMax: function(t, e) {
			var i = this._getMinMaxDate(t, "min"),
			n = this._getMinMaxDate(t, "max"),
			s = i && i > e ? i: e;
			return n && s > n ? n: s
		},
		_notifyChange: function(t) {
			var e = this._get(t, "onChangeMonthYear");
			e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
		},
		_getNumberOfMonths: function(t) {
			var e = this._get(t, "numberOfMonths");
			return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
		},
		_getMinMaxDate: function(t, e) {
			return this._determineDate(t, this._get(t, e + "Date"), null)
		},
		_getDaysInMonth: function(t, e) {
			return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
		},
		_getFirstDayOfMonth: function(t, e) {
			return new Date(t, e, 1).getDay()
		},
		_canAdjustMonth: function(t, e, i, n) {
			var s = this._getNumberOfMonths(t),
			o = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e: s[0] * s[1]), 1));
			return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
			this._isInRange(t, o)
		},
		_isInRange: function(t, e) {
			var i, n, s = this._getMinMaxDate(t, "min"),
			o = this._getMinMaxDate(t, "max"),
			a = null,
			r = null,
			l = this._get(t, "yearRange");
			return l && (i = l.split(":"), n = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += n), i[1].match(/[+\-].*/) && (r += n)),
			(!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || e.getFullYear() <= r)
		},
		_getFormatConfig: function(t) {
			var e = this._get(t, "shortYearCutoff");
			return e = "string" != typeof e ? e: (new Date).getFullYear() % 100 + parseInt(e, 10),
			{
				shortYearCutoff: e,
				dayNamesShort: this._get(t, "dayNamesShort"),
				dayNames: this._get(t, "dayNames"),
				monthNamesShort: this._get(t, "monthNamesShort"),
				monthNames: this._get(t, "monthNames")
			}
		},
		_formatDate: function(t, e, i, n) {
			e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
			var s = e ? "object" == typeof e ? e: this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
			return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
		}
	}),
	t.fn.datepicker = function(e) {
		if (!this.length) return this;
		t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0),
		0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
		var i = Array.prototype.slice.call(arguments, 1);
		return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
			"string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
		}) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
	},
	t.datepicker = new i,
	t.datepicker.initialized = !1,
	t.datepicker.uuid = (new Date).getTime(),
	t.datepicker.version = "1.11.4",
	t.datepicker
}),
/*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./widget"], t) : t(jQuery)
} (function(t) {
	var e = !1;
	return t(document).mouseup(function() {
		e = !1
	}),
	t.widget("ui.mouse", {
		version: "1.11.4",
		options: {
			cancel: "input,textarea,button,select,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function() {
			var e = this;
			this.element.bind("mousedown." + this.widgetName,
			function(t) {
				return e._mouseDown(t)
			}).bind("click." + this.widgetName,
			function(i) {
				return ! 0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
			}),
			this.started = !1
		},
		_mouseDestroy: function() {
			this.element.unbind("." + this.widgetName),
			this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown: function(i) {
			if (!e) {
				this._mouseMoved = !1,
				this._mouseStarted && this._mouseUp(i),
				this._mouseDownEvent = i;
				var n = this,
				s = 1 === i.which,
				o = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length: !1;
				return s && !o && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
					n.mouseDelayMet = !0
				},
				this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
					return n._mouseMove(t)
				},
				this._mouseUpDelegate = function(t) {
					return n._mouseUp(t)
				},
				this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
			}
		},
		_mouseMove: function(e) {
			if (this._mouseMoved) {
				if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
				if (!e.which) return this._mouseUp(e)
			}
			return (e.which || e.button) && (this._mouseMoved = !0),
			this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
		},
		_mouseUp: function(i) {
			return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
			this._mouseStarted && (this._mouseStarted = !1, i.target === this._mouseDownEvent.target && t.data(i.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(i)),
			e = !1,
			!1
		},
		_mouseDistanceMet: function(t) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function() {
			return this.mouseDelayMet
		},
		_mouseStart: function() {},
		_mouseDrag: function() {},
		_mouseStop: function() {},
		_mouseCapture: function() {
			return ! 0
		}
	})
}),
/*!
 * jQuery UI Draggable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], t) : t(jQuery)
} (function(t) {
	return t.widget("ui.draggable", t.ui.mouse, {
		version: "1.11.4",
		widgetEventPrefix: "drag",
		options: {
			addClasses: !0,
			appendTo: "parent",
			axis: !1,
			connectToSortable: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			iframeFix: !1,
			opacity: !1,
			refreshPositions: !1,
			revert: !1,
			revertDuration: 500,
			scope: "default",
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: !1,
			snapMode: "both",
			snapTolerance: 20,
			stack: !1,
			zIndex: !1,
			drag: null,
			start: null,
			stop: null
		},
		_create: function() {
			"original" === this.options.helper && this._setPositionRelative(),
			this.options.addClasses && this.element.addClass("ui-draggable"),
			this.options.disabled && this.element.addClass("ui-draggable-disabled"),
			this._setHandleClassName(),
			this._mouseInit()
		},
		_setOption: function(t, e) {
			this._super(t, e),
			"handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
		},
		_destroy: function() {
			return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
		},
		_mouseCapture: function(e) {
			var i = this.options;
			return this._blurActiveElement(e),
			this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe": i.iframeFix), !0) : !1)
		},
		_blockFrames: function(e) {
			this.iframeBlocks = this.document.find(e).map(function() {
				var e = t(this);
				return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
			})
		},
		_unblockFrames: function() {
			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
		},
		_blurActiveElement: function(e) {
			var i = this.document[0];
			if (this.handleElement.is(e.target)) try {
				i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && t(i.activeElement).blur()
			} catch(n) {}
		},
		_mouseStart: function(e) {
			var i = this.options;
			return this.helper = this._createHelper(e),
			this.helper.addClass("ui-draggable-dragging"),
			this._cacheHelperProportions(),
			t.ui.ddmanager && (t.ui.ddmanager.current = this),
			this._cacheMargins(),
			this.cssPosition = this.helper.css("position"),
			this.scrollParent = this.helper.scrollParent(!0),
			this.offsetParent = this.helper.offsetParent(),
			this.hasFixedAncestor = this.helper.parents().filter(function() {
				return "fixed" === t(this).css("position")
			}).length > 0,
			this.positionAbs = this.element.offset(),
			this._refreshOffsets(e),
			this.originalPosition = this.position = this._generatePosition(e, !1),
			this.originalPageX = e.pageX,
			this.originalPageY = e.pageY,
			i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
			this._setContainment(),
			this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._normalizeRightBottom(), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
		},
		_refreshOffsets: function(t) {
			this.offset = {
				top: this.positionAbs.top - this.margins.top,
				left: this.positionAbs.left - this.margins.left,
				scroll: !1,
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			},
			this.offset.click = {
				left: t.pageX - this.offset.left,
				top: t.pageY - this.offset.top
			}
		},
		_mouseDrag: function(e, i) {
			if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
				var n = this._uiHash();
				if (this._trigger("drag", e, n) === !1) return this._mouseUp({}),
				!1;
				this.position = n.position
			}
			return this.helper[0].style.left = this.position.left + "px",
			this.helper[0].style.top = this.position.top + "px",
			t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
			!1
		},
		_mouseStop: function(e) {
			var i = this,
			n = !1;
			return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)),
			this.dropped && (n = this.dropped, this.dropped = !1),
			"invalid" === this.options.revert && !n || "valid" === this.options.revert && n || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10),
			function() {
				i._trigger("stop", e) !== !1 && i._clear()
			}) : this._trigger("stop", e) !== !1 && this._clear(),
			!1
		},
		_mouseUp: function(e) {
			return this._unblockFrames(),
			t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
			this.handleElement.is(e.target) && this.element.focus(),
			t.ui.mouse.prototype._mouseUp.call(this, e)
		},
		cancel: function() {
			return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
			this
		},
		_getHandle: function(e) {
			return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length: !0
		},
		_setHandleClassName: function() {
			this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element,
			this.handleElement.addClass("ui-draggable-handle")
		},
		_removeHandleClassName: function() {
			this.handleElement.removeClass("ui-draggable-handle")
		},
		_createHelper: function(e) {
			var i = this.options,
			n = t.isFunction(i.helper),
			s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
			return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode: i.appendTo),
			n && s[0] === this.element[0] && this._setPositionRelative(),
			s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"),
			s
		},
		_setPositionRelative: function() { / ^( ? :r | a | f) / .test(this.element.css("position")) || (this.element[0].style.position = "relative")
		},
		_adjustOffsetFromHelper: function(e) {
			"string" == typeof e && (e = e.split(" ")),
			t.isArray(e) && (e = {
				left: +e[0],
				top: +e[1] || 0
			}),
			"left" in e && (this.offset.click.left = e.left + this.margins.left),
			"right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
			"top" in e && (this.offset.click.top = e.top + this.margins.top),
			"bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_isRootNode: function(t) {
			return /(html|body)/i.test(t.tagName) || t === this.document[0]
		},
		_getParentOffset: function() {
			var e = this.offsetParent.offset(),
			i = this.document[0];
			return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()),
			this._isRootNode(this.offsetParent[0]) && (e = {
				top: 0,
				left: 0
			}),
			{
				top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if ("relative" !== this.cssPosition) return {
				top: 0,
				left: 0
			};
			var t = this.element.position(),
			e = this._isRootNode(this.scrollParent[0]);
			return {
				top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
				left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.element.css("marginLeft"), 10) || 0,
				top: parseInt(this.element.css("marginTop"), 10) || 0,
				right: parseInt(this.element.css("marginRight"), 10) || 0,
				bottom: parseInt(this.element.css("marginBottom"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var e, i, n, s = this.options,
			o = this.document[0];
			return this.relativeContainer = null,
			s.containment ? "window" === s.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), i = t(s.containment), n = i[0], void(n && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
		},
		_convertPositionTo: function(t, e) {
			e || (e = this.position);
			var i = "absolute" === t ? 1 : -1,
			n = this._isRootNode(this.scrollParent[0]);
			return {
				top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top: n ? 0 : this.offset.scroll.top) * i,
				left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left: n ? 0 : this.offset.scroll.left) * i
			}
		},
		_generatePosition: function(t, e) {
			var i, n, s, o, a = this.options,
			r = this._isRootNode(this.scrollParent[0]),
			l = t.pageX,
			h = t.pageY;
			return r && this.offset.scroll || (this.offset.scroll = {
				top: this.scrollParent.scrollTop(),
				left: this.scrollParent.scrollLeft()
			}),
			e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), a.grid && (s = a.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s: s - this.offset.click.top >= i[1] ? s - a.grid[1] : s + a.grid[1] : s, o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o: o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (l = this.originalPageX), "x" === a.axis && (h = this.originalPageY)),
			{
				top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top: r ? 0 : this.offset.scroll.top),
				left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left: r ? 0 : this.offset.scroll.left)
			}
		},
		_clear: function() {
			this.helper.removeClass("ui-draggable-dragging"),
			this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
			this.helper = null,
			this.cancelHelperRemoval = !1,
			this.destroyOnClear && this.destroy()
		},
		_normalizeRightBottom: function() {
			"y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")),
			"x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
		},
		_trigger: function(e, i, n) {
			return n = n || this._uiHash(),
			t.ui.plugin.call(this, e, [i, n, this], !0),
			/^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs),
			t.Widget.prototype._trigger.call(this, e, i, n)
		},
		plugins: {},
		_uiHash: function() {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			}
		}
	}),
	t.ui.plugin.add("draggable", "connectToSortable", {
		start: function(e, i, n) {
			var s = t.extend({},
			i, {
				item: n.element
			});
			n.sortables = [],
			t(n.options.connectToSortable).each(function() {
				var i = t(this).sortable("instance");
				i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s))
			})
		},
		stop: function(e, i, n) {
			var s = t.extend({},
			i, {
				item: n.element
			});
			n.cancelHelperRemoval = !1,
			t.each(n.sortables,
			function() {
				var t = this;
				t.isOver ? (t.isOver = 0, n.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
					position: t.placeholder.css("position"),
					top: t.placeholder.css("top"),
					left: t.placeholder.css("left")
				},
				t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s))
			})
		},
		drag: function(e, i, n) {
			t.each(n.sortables,
			function() {
				var s = !1,
				o = this;
				o.positionAbs = n.positionAbs,
				o.helperProportions = n.helperProportions,
				o.offset.click = n.offset.click,
				o._intersectsWith(o.containerCache) && (s = !0, t.each(n.sortables,
				function() {
					return this.positionAbs = n.positionAbs,
					this.helperProportions = n.helperProportions,
					this.offset.click = n.offset.click,
					this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = !1),
					s
				})),
				s ? (o.isOver || (o.isOver = 1, n._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() {
					return i.helper[0]
				},
				e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, n._trigger("toSortable", e), n.dropped = o.element, t.each(n.sortables,
				function() {
					this.refreshPositions()
				}), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(e), i.position = n._generatePosition(e, !0), n._trigger("fromSortable", e), n.dropped = !1, t.each(n.sortables,
				function() {
					this.refreshPositions()
				}))
			})
		}
	}),
	t.ui.plugin.add("draggable", "cursor", {
		start: function(e, i, n) {
			var s = t("body"),
			o = n.options;
			s.css("cursor") && (o._cursor = s.css("cursor")),
			s.css("cursor", o.cursor)
		},
		stop: function(e, i, n) {
			var s = n.options;
			s._cursor && t("body").css("cursor", s._cursor)
		}
	}),
	t.ui.plugin.add("draggable", "opacity", {
		start: function(e, i, n) {
			var s = t(i.helper),
			o = n.options;
			s.css("opacity") && (o._opacity = s.css("opacity")),
			s.css("opacity", o.opacity)
		},
		stop: function(e, i, n) {
			var s = n.options;
			s._opacity && t(i.helper).css("opacity", s._opacity)
		}
	}),
	t.ui.plugin.add("draggable", "scroll", {
		start: function(t, e, i) {
			i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
			i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
		},
		drag: function(e, i, n) {
			var s = n.options,
			o = !1,
			a = n.scrollParentNotHidden[0],
			r = n.document[0];
			a !== r && "HTML" !== a.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + a.offsetHeight - e.pageY < s.scrollSensitivity ? a.scrollTop = o = a.scrollTop + s.scrollSpeed: e.pageY - n.overflowOffset.top < s.scrollSensitivity && (a.scrollTop = o = a.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + a.offsetWidth - e.pageX < s.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + s.scrollSpeed: e.pageX - n.overflowOffset.left < s.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(r).scrollTop() < s.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < s.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(r).scrollLeft() < s.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < s.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + s.scrollSpeed)))),
			o !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
		}
	}),
	t.ui.plugin.add("draggable", "snap", {
		start: function(e, i, n) {
			var s = n.options;
			n.snapElements = [],
			t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)": s.snap).each(function() {
				var e = t(this),
				i = e.offset();
				this !== n.element[0] && n.snapElements.push({
					item: this,
					width: e.outerWidth(),
					height: e.outerHeight(),
					top: i.top,
					left: i.left
				})
			})
		},
		drag: function(e, i, n) {
			var s, o, a, r, l, h, u, c, d, p, f = n.options,
			m = f.snapTolerance,
			g = i.offset.left,
			v = g + n.helperProportions.width,
			b = i.offset.top,
			y = b + n.helperProportions.height;
			for (d = n.snapElements.length - 1; d >= 0; d--) l = n.snapElements[d].left - n.margins.left,
			h = l + n.snapElements[d].width,
			u = n.snapElements[d].top - n.margins.top,
			c = u + n.snapElements[d].height,
			l - m > v || g > h + m || u - m > y || b > c + m || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
				snapItem: n.snapElements[d].item
			})), n.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (s = Math.abs(u - y) <= m, o = Math.abs(c - b) <= m, a = Math.abs(l - v) <= m, r = Math.abs(h - g) <= m, s && (i.position.top = n._convertPositionTo("relative", {
				top: u - n.helperProportions.height,
				left: 0
			}).top), o && (i.position.top = n._convertPositionTo("relative", {
				top: c,
				left: 0
			}).top), a && (i.position.left = n._convertPositionTo("relative", {
				top: 0,
				left: l - n.helperProportions.width
			}).left), r && (i.position.left = n._convertPositionTo("relative", {
				top: 0,
				left: h
			}).left)), p = s || o || a || r, "outer" !== f.snapMode && (s = Math.abs(u - b) <= m, o = Math.abs(c - y) <= m, a = Math.abs(l - g) <= m, r = Math.abs(h - v) <= m, s && (i.position.top = n._convertPositionTo("relative", {
				top: u,
				left: 0
			}).top), o && (i.position.top = n._convertPositionTo("relative", {
				top: c - n.helperProportions.height,
				left: 0
			}).top), a && (i.position.left = n._convertPositionTo("relative", {
				top: 0,
				left: l
			}).left), r && (i.position.left = n._convertPositionTo("relative", {
				top: 0,
				left: h - n.helperProportions.width
			}).left)), !n.snapElements[d].snapping && (s || o || a || r || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
				snapItem: n.snapElements[d].item
			})), n.snapElements[d].snapping = s || o || a || r || p)
		}
	}),
	t.ui.plugin.add("draggable", "stack", {
		start: function(e, i, n) {
			var s, o = n.options,
			a = t.makeArray(t(o.stack)).sort(function(e, i) {
				return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
			});
			a.length && (s = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) {
				t(this).css("zIndex", s + e)
			}), this.css("zIndex", s + a.length))
		}
	}),
	t.ui.plugin.add("draggable", "zIndex", {
		start: function(e, i, n) {
			var s = t(i.helper),
			o = n.options;
			s.css("zIndex") && (o._zIndex = s.css("zIndex")),
			s.css("zIndex", o.zIndex)
		},
		stop: function(e, i, n) {
			var s = n.options;
			s._zIndex && t(i.helper).css("zIndex", s._zIndex)
		}
	}),
	t.ui.draggable
}),
/*!
 * jQuery UI Resizable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/resizable/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], t) : t(jQuery)
} (function(t) {
	return t.widget("ui.resizable", t.ui.mouse, {
		version: "1.11.4",
		widgetEventPrefix: "resize",
		options: {
			alsoResize: !1,
			animate: !1,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: !1,
			autoHide: !1,
			containment: !1,
			ghost: !1,
			grid: !1,
			handles: "e,s,se",
			helper: !1,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			zIndex: 90,
			resize: null,
			start: null,
			stop: null
		},
		_num: function(t) {
			return parseInt(t, 10) || 0
		},
		_isNumber: function(t) {
			return ! isNaN(parseInt(t, 10))
		},
		_hasScroll: function(e, i) {
			if ("hidden" === t(e).css("overflow")) return ! 1;
			var n = i && "left" === i ? "scrollLeft": "scrollTop",
			s = !1;
			return e[n] > 0 ? !0 : (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
		},
		_create: function() {
			var e, i, n, s, o, a = this,
			r = this.options;
			if (this.element.addClass("ui-resizable"), t.extend(this, {
				_aspectRatio: !!r.aspectRatio,
				aspectRatio: r.aspectRatio,
				originalElement: this.element,
				_proportionallyResizeElements: [],
				_helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper": null
			}), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
				position: this.element.css("position"),
				width: this.element.outerWidth(),
				height: this.element.outerHeight(),
				top: this.element.css("top"),
				left: this.element.css("left")
			})), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
				marginLeft: this.originalElement.css("marginLeft"),
				marginTop: this.originalElement.css("marginTop"),
				marginRight: this.originalElement.css("marginRight"),
				marginBottom: this.originalElement.css("marginBottom")
			}), this.originalElement.css({
				marginLeft: 0,
				marginTop: 0,
				marginRight: 0,
				marginBottom: 0
			}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
				position: "static",
				zoom: 1,
				display: "block"
			})), this.originalElement.css({
				margin: this.originalElement.css("margin")
			}), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
				n: ".ui-resizable-n",
				e: ".ui-resizable-e",
				s: ".ui-resizable-s",
				w: ".ui-resizable-w",
				se: ".ui-resizable-se",
				sw: ".ui-resizable-sw",
				ne: ".ui-resizable-ne",
				nw: ".ui-resizable-nw"
			}: "e,s,se"), this._handles = t(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {},
			i = 0; i < e.length; i++) n = t.trim(e[i]),
			o = "ui-resizable-" + n,
			s = t("<div class='ui-resizable-handle " + o + "'></div>"),
			s.css({
				zIndex: r.zIndex
			}),
			"se" === n && s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
			this.handles[n] = ".ui-resizable-" + n,
			this.element.append(s);
			this._renderAxis = function(e) {
				var i, n, s, o;
				e = e || this.element;
				for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
					mousedown: a._mouseDown
				})),
				this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top": /se|sw|s/.test(i) ? "Bottom": /^e$/.test(i) ? "Right": "Left"].join(""), e.css(s, o), this._proportionallyResize()),
				this._handles = this._handles.add(this.handles[i])
			},
			this._renderAxis(this.element),
			this._handles = this._handles.add(this.element.find(".ui-resizable-handle")),
			this._handles.disableSelection(),
			this._handles.mouseover(function() {
				a.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = s && s[1] ? s[1] : "se")
			}),
			r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
				r.disabled || (t(this).removeClass("ui-resizable-autohide"), a._handles.show())
			}).mouseleave(function() {
				r.disabled || a.resizing || (t(this).addClass("ui-resizable-autohide"), a._handles.hide())
			})),
			this._mouseInit()
		},
		_destroy: function() {
			this._mouseDestroy();
			var e, i = function(e) {
				t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
			};
			return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
				position: e.css("position"),
				width: e.outerWidth(),
				height: e.outerHeight(),
				top: e.css("top"),
				left: e.css("left")
			}).insertAfter(e), e.remove()),
			this.originalElement.css("resize", this.originalResizeStyle),
			i(this.originalElement),
			this
		},
		_mouseCapture: function(e) {
			var i, n, s = !1;
			for (i in this.handles) n = t(this.handles[i])[0],
			(n === e.target || t.contains(n, e.target)) && (s = !0);
			return ! this.options.disabled && s
		},
		_mouseStart: function(e) {
			var i, n, s, o = this.options,
			a = this.element;
			return this.resizing = !0,
			this._renderProxy(),
			i = this._num(this.helper.css("left")),
			n = this._num(this.helper.css("top")),
			o.containment && (i += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0),
			this.offset = this.helper.offset(),
			this.position = {
				left: i,
				top: n
			},
			this.size = this._helper ? {
				width: this.helper.width(),
				height: this.helper.height()
			}: {
				width: a.width(),
				height: a.height()
			},
			this.originalSize = this._helper ? {
				width: a.outerWidth(),
				height: a.outerHeight()
			}: {
				width: a.width(),
				height: a.height()
			},
			this.sizeDiff = {
				width: a.outerWidth() - a.width(),
				height: a.outerHeight() - a.height()
			},
			this.originalPosition = {
				left: i,
				top: n
			},
			this.originalMousePosition = {
				left: e.pageX,
				top: e.pageY
			},
			this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio: this.originalSize.width / this.originalSize.height || 1,
			s = t(".ui-resizable-" + this.axis).css("cursor"),
			t("body").css("cursor", "auto" === s ? this.axis + "-resize": s),
			a.addClass("ui-resizable-resizing"),
			this._propagate("start", e),
			!0
		},
		_mouseDrag: function(e) {
			var i, n, s = this.originalMousePosition,
			o = this.axis,
			a = e.pageX - s.left || 0,
			r = e.pageY - s.top || 0,
			l = this._change[o];
			return this._updatePrevProperties(),
			l ? (i = l.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1
		},
		_mouseStop: function(e) {
			this.resizing = !1;
			var i, n, s, o, a, r, l, h = this.options,
			u = this;
			return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, o = n ? 0 : u.sizeDiff.width, a = {
				width: u.helper.width() - o,
				height: u.helper.height() - s
			},
			r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, l = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, h.animate || this.element.css(t.extend(a, {
				top: l,
				left: r
			})), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !h.animate && this._proportionallyResize()),
			t("body").css("cursor", "auto"),
			this.element.removeClass("ui-resizable-resizing"),
			this._propagate("stop", e),
			this._helper && this.helper.remove(),
			!1
		},
		_updatePrevProperties: function() {
			this.prevPosition = {
				top: this.position.top,
				left: this.position.left
			},
			this.prevSize = {
				width: this.size.width,
				height: this.size.height
			}
		},
		_applyChanges: function() {
			var t = {};
			return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"),
			this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"),
			this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"),
			this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"),
			this.helper.css(t),
			t
		},
		_updateVirtualBoundaries: function(t) {
			var e, i, n, s, o, a = this.options;
			o = {
				minWidth: this._isNumber(a.minWidth) ? a.minWidth: 0,
				maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth: 1 / 0,
				minHeight: this._isNumber(a.minHeight) ? a.minHeight: 0,
				maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight: 1 / 0
			},
			(this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), i < o.maxWidth && (o.maxWidth = i), s < o.maxHeight && (o.maxHeight = s)),
			this._vBoundaries = o
		},
		_updateCache: function(t) {
			this.offset = this.helper.offset(),
			this._isNumber(t.left) && (this.position.left = t.left),
			this._isNumber(t.top) && (this.position.top = t.top),
			this._isNumber(t.height) && (this.size.height = t.height),
			this._isNumber(t.width) && (this.size.width = t.width)
		},
		_updateRatio: function(t) {
			var e = this.position,
			i = this.size,
			n = this.axis;
			return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio: this._isNumber(t.width) && (t.height = t.width / this.aspectRatio),
			"sw" === n && (t.left = e.left + (i.width - t.width), t.top = null),
			"nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)),
			t
		},
		_respectSize: function(t) {
			var e = this._vBoundaries,
			i = this.axis,
			n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
			s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
			o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
			a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
			r = this.originalPosition.left + this.originalSize.width,
			l = this.position.top + this.size.height,
			h = /sw|nw|w/.test(i),
			u = /nw|ne|n/.test(i);
			return o && (t.width = e.minWidth),
			a && (t.height = e.minHeight),
			n && (t.width = e.maxWidth),
			s && (t.height = e.maxHeight),
			o && h && (t.left = r - e.minWidth),
			n && h && (t.left = r - e.maxWidth),
			a && u && (t.top = l - e.minHeight),
			s && u && (t.top = l - e.maxHeight),
			t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null,
			t
		},
		_getPaddingPlusBorderDimensions: function(t) {
			for (var e = 0,
			i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseInt(n[e], 10) || 0,
			i[e] += parseInt(s[e], 10) || 0;
			return {
				height: i[0] + i[2],
				width: i[1] + i[3]
			}
		},
		_proportionallyResize: function() {
			if (this._proportionallyResizeElements.length) for (var t, e = 0,
			i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e],
			this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)),
			t.css({
				height: i.height() - this.outerDimensions.height || 0,
				width: i.width() - this.outerDimensions.width || 0
			})
		},
		_renderProxy: function() {
			var e = this.element,
			i = this.options;
			this.elementOffset = e.offset(),
			this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
				width: this.element.outerWidth() - 1,
				height: this.element.outerHeight() - 1,
				position: "absolute",
				left: this.elementOffset.left + "px",
				top: this.elementOffset.top + "px",
				zIndex: ++i.zIndex
			}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
		},
		_change: {
			e: function(t, e) {
				return {
					width: this.originalSize.width + e
				}
			},
			w: function(t, e) {
				var i = this.originalSize,
				n = this.originalPosition;
				return {
					left: n.left + e,
					width: i.width - e
				}
			},
			n: function(t, e, i) {
				var n = this.originalSize,
				s = this.originalPosition;
				return {
					top: s.top + i,
					height: n.height - i
				}
			},
			s: function(t, e, i) {
				return {
					height: this.originalSize.height + i
				}
			},
			se: function(e, i, n) {
				return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
			},
			sw: function(e, i, n) {
				return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
			},
			ne: function(e, i, n) {
				return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
			},
			nw: function(e, i, n) {
				return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
			}
		},
		_propagate: function(e, i) {
			t.ui.plugin.call(this, e, [i, this.ui()]),
			"resize" !== e && this._trigger(e, i, this.ui())
		},
		plugins: {},
		ui: function() {
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			}
		}
	}),
	t.ui.plugin.add("resizable", "animate", {
		stop: function(e) {
			var i = t(this).resizable("instance"),
			n = i.options,
			s = i._proportionallyResizeElements,
			o = s.length && /textarea/i.test(s[0].nodeName),
			a = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
			r = o ? 0 : i.sizeDiff.width,
			l = {
				width: i.size.width - r,
				height: i.size.height - a
			},
			h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
			u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
			i.element.animate(t.extend(l, u && h ? {
				top: u,
				left: h
			}: {}), {
				duration: n.animateDuration,
				easing: n.animateEasing,
				step: function() {
					var n = {
						width: parseInt(i.element.css("width"), 10),
						height: parseInt(i.element.css("height"), 10),
						top: parseInt(i.element.css("top"), 10),
						left: parseInt(i.element.css("left"), 10)
					};
					s && s.length && t(s[0]).css({
						width: n.width,
						height: n.height
					}),
					i._updateCache(n),
					i._propagate("resize", e)
				}
			})
		}
	}),
	t.ui.plugin.add("resizable", "containment", {
		start: function() {
			var e, i, n, s, o, a, r, l = t(this).resizable("instance"),
			h = l.options,
			u = l.element,
			c = h.containment,
			d = c instanceof t ? c.get(0) : /parent/.test(c) ? u.parent().get(0) : c;
			d && (l.containerElement = t(d), /document/.test(c) || c === document ? (l.containerOffset = {
				left: 0,
				top: 0
			},
			l.containerPosition = {
				left: 0,
				top: 0
			},
			l.parentData = {
				element: t(document),
				left: 0,
				top: 0,
				width: t(document).width(),
				height: t(document).height() || document.body.parentNode.scrollHeight
			}) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) {
				i[t] = l._num(e.css("padding" + n))
			}), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
				height: e.innerHeight() - i[3],
				width: e.innerWidth() - i[1]
			},
			n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, a = l._hasScroll(d, "left") ? d.scrollWidth: o, r = l._hasScroll(d) ? d.scrollHeight: s, l.parentData = {
				element: d,
				left: n.left,
				top: n.top,
				width: a,
				height: r
			}))
		},
		resize: function(e) {
			var i, n, s, o, a = t(this).resizable("instance"),
			r = a.options,
			l = a.containerOffset,
			h = a.position,
			u = a._aspectRatio || e.shiftKey,
			c = {
				top: 0,
				left: 0
			},
			d = a.containerElement,
			p = !0;
			d[0] !== document && /static/.test(d.css("position")) && (c = l),
			h.left < (a._helper ? l.left: 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left: a.position.left - c.left), u && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? l.left: 0),
			h.top < (a._helper ? l.top: 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top: a.position.top), u && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? l.top: 0),
			s = a.containerElement.get(0) === a.element.parent().get(0),
			o = /relative|absolute/.test(a.containerElement.css("position")),
			s && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top),
			i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - c.left: a.offset.left - l.left)),
			n = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - c.top: a.offset.top - l.top)),
			i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, u && (a.size.height = a.size.width / a.aspectRatio, p = !1)),
			n + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - n, u && (a.size.width = a.size.height * a.aspectRatio, p = !1)),
			p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
		},
		stop: function() {
			var e = t(this).resizable("instance"),
			i = e.options,
			n = e.containerOffset,
			s = e.containerPosition,
			o = e.containerElement,
			a = t(e.helper),
			r = a.offset(),
			l = a.outerWidth() - e.sizeDiff.width,
			h = a.outerHeight() - e.sizeDiff.height;
			e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
				left: r.left - s.left - n.left,
				width: l,
				height: h
			}),
			e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
				left: r.left - s.left - n.left,
				width: l,
				height: h
			})
		}
	}),
	t.ui.plugin.add("resizable", "alsoResize", {
		start: function() {
			var e = t(this).resizable("instance"),
			i = e.options;
			t(i.alsoResize).each(function() {
				var e = t(this);
				e.data("ui-resizable-alsoresize", {
					width: parseInt(e.width(), 10),
					height: parseInt(e.height(), 10),
					left: parseInt(e.css("left"), 10),
					top: parseInt(e.css("top"), 10)
				})
			})
		},
		resize: function(e, i) {
			var n = t(this).resizable("instance"),
			s = n.options,
			o = n.originalSize,
			a = n.originalPosition,
			r = {
				height: n.size.height - o.height || 0,
				width: n.size.width - o.width || 0,
				top: n.position.top - a.top || 0,
				left: n.position.left - a.left || 0
			};
			t(s.alsoResize).each(function() {
				var e = t(this),
				n = t(this).data("ui-resizable-alsoresize"),
				s = {},
				o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
				t.each(o,
				function(t, e) {
					var i = (n[e] || 0) + (r[e] || 0);
					i && i >= 0 && (s[e] = i || null)
				}),
				e.css(s)
			})
		},
		stop: function() {
			t(this).removeData("resizable-alsoresize")
		}
	}),
	t.ui.plugin.add("resizable", "ghost", {
		start: function() {
			var e = t(this).resizable("instance"),
			i = e.options,
			n = e.size;
			e.ghost = e.originalElement.clone(),
			e.ghost.css({
				opacity: .25,
				display: "block",
				position: "relative",
				height: n.height,
				width: n.width,
				margin: 0,
				left: 0,
				top: 0
			}).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost: ""),
			e.ghost.appendTo(e.helper)
		},
		resize: function() {
			var e = t(this).resizable("instance");
			e.ghost && e.ghost.css({
				position: "relative",
				height: e.size.height,
				width: e.size.width
			})
		},
		stop: function() {
			var e = t(this).resizable("instance");
			e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
		}
	}),
	t.ui.plugin.add("resizable", "grid", {
		resize: function() {
			var e, i = t(this).resizable("instance"),
			n = i.options,
			s = i.size,
			o = i.originalSize,
			a = i.originalPosition,
			r = i.axis,
			l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
			h = l[0] || 1,
			u = l[1] || 1,
			c = Math.round((s.width - o.width) / h) * h,
			d = Math.round((s.height - o.height) / u) * u,
			p = o.width + c,
			f = o.height + d,
			m = n.maxWidth && n.maxWidth < p,
			g = n.maxHeight && n.maxHeight < f,
			v = n.minWidth && n.minWidth > p,
			b = n.minHeight && n.minHeight > f;
			n.grid = l,
			v && (p += h),
			b && (f += u),
			m && (p -= h),
			g && (f -= u),
			/^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - c) : ((0 >= f - u || 0 >= p - h) && (e = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = u - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - h > 0 ? (i.size.width = p, i.position.left = a.left - c) : (p = h - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
		}
	}),
	t.ui.resizable
}),
/*!
 * jQuery UI Dialog 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./button", "./draggable", "./mouse", "./position", "./resizable"], t) : t(jQuery)
} (function(t) {
	return t.widget("ui.dialog", {
		version: "1.11.4",
		options: {
			appendTo: "body",
			autoOpen: !0,
			buttons: [],
			closeOnEscape: !0,
			closeText: "Close",
			dialogClass: "",
			draggable: !0,
			hide: null,
			height: "auto",
			maxHeight: null,
			maxWidth: null,
			minHeight: 150,
			minWidth: 150,
			modal: !1,
			position: {
				my: "center",
				at: "center",
				of: window,
				collision: "fit",
				using: function(e) {
					var i = t(this).css(e).offset().top;
					0 > i && t(this).css("top", e.top - i)
				}
			},
			resizable: !0,
			show: null,
			title: null,
			width: 300,
			beforeClose: null,
			close: null,
			drag: null,
			dragStart: null,
			dragStop: null,
			focus: null,
			open: null,
			resize: null,
			resizeStart: null,
			resizeStop: null
		},
		sizeRelatedOptions: {
			buttons: !0,
			height: !0,
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0,
			width: !0
		},
		resizableRelatedOptions: {
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0
		},
		_create: function() {
			this.originalCss = {
				display: this.element[0].style.display,
				width: this.element[0].style.width,
				minHeight: this.element[0].style.minHeight,
				maxHeight: this.element[0].style.maxHeight,
				height: this.element[0].style.height
			},
			this.originalPosition = {
				parent: this.element.parent(),
				index: this.element.parent().children().index(this.element)
			},
			this.originalTitle = this.element.attr("title"),
			this.options.title = this.options.title || this.originalTitle,
			this._createWrapper(),
			this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),
			this._createTitlebar(),
			this._createButtonPane(),
			this.options.draggable && t.fn.draggable && this._makeDraggable(),
			this.options.resizable && t.fn.resizable && this._makeResizable(),
			this._isOpen = !1,
			this._trackFocus()
		},
		_init: function() {
			this.options.autoOpen && this.open()
		},
		_appendTo: function() {
			var e = this.options.appendTo;
			return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
		},
		_destroy: function() {
			var t, e = this.originalPosition;
			this._untrackInstance(),
			this._destroyOverlay(),
			this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),
			this.uiDialog.stop(!0, !0).remove(),
			this.originalTitle && this.element.attr("title", this.originalTitle),
			t = e.parent.children().eq(e.index),
			t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
		},
		widget: function() {
			return this.uiDialog
		},
		disable: t.noop,
		enable: t.noop,
		close: function(e) {
			var i, n = this;
			if (this._isOpen && this._trigger("beforeClose", e) !== !1) {
				if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
					i = this.document[0].activeElement,
					i && "body" !== i.nodeName.toLowerCase() && t(i).blur()
				} catch(s) {}
				this._hide(this.uiDialog, this.options.hide,
				function() {
					n._trigger("close", e)
				})
			}
		},
		isOpen: function() {
			return this._isOpen
		},
		moveToTop: function() {
			this._moveToTop()
		},
		_moveToTop: function(e, i) {
			var n = !1,
			s = this.uiDialog.siblings(".ui-front:visible").map(function() {
				return + t(this).css("z-index")
			}).get(),
			o = Math.max.apply(null, s);
			return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), n = !0),
			n && !i && this._trigger("focus", e),
			n
		},
		open: function() {
			var e = this;
			return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show,
			function() {
				e._focusTabbable(),
				e._trigger("focus")
			}), this._makeFocusTarget(), void this._trigger("open"))
		},
		_focusTabbable: function() {
			var t = this._focusedElement;
			t || (t = this.element.find("[autofocus]")),
			t.length || (t = this.element.find(":tabbable")),
			t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
			t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
			t.length || (t = this.uiDialog),
			t.eq(0).focus()
		},
		_keepFocus: function(e) {
			function i() {
				var e = this.document[0].activeElement,
				i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
				i || this._focusTabbable()
			}
			e.preventDefault(),
			i.call(this),
			this._delay(i)
		},
		_createWrapper: function() {
			this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
				tabIndex: -1,
				role: "dialog"
			}).appendTo(this._appendTo()),
			this._on(this.uiDialog, {
				keydown: function(e) {
					if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(),
					void this.close(e);
					if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
						var i = this.uiDialog.find(":tabbable"),
						n = i.filter(":first"),
						s = i.filter(":last");
						e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
							s.focus()
						}), e.preventDefault()) : (this._delay(function() {
							n.focus()
						}), e.preventDefault())
					}
				},
				mousedown: function(t) {
					this._moveToTop(t) && this._focusTabbable()
				}
			}),
			this.element.find("[aria-describedby]").length || this.uiDialog.attr({
				"aria-describedby": this.element.uniqueId().attr("id")
			})
		},
		_createTitlebar: function() {
			var e;
			this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),
			this._on(this.uiDialogTitlebar, {
				mousedown: function(e) {
					t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
				}
			}),
			this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
				label: this.options.closeText,
				icons: {
					primary: "ui-icon-closethick"
				},
				text: !1
			}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),
			this._on(this.uiDialogTitlebarClose, {
				click: function(t) {
					t.preventDefault(),
					this.close(t)
				}
			}),
			e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),
			this._title(e),
			this.uiDialog.attr({
				"aria-labelledby": e.attr("id")
			})
		},
		_title: function(t) {
			this.options.title || t.html("&#160;"),
			t.text(this.options.title)
		},
		_createButtonPane: function() {
			this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
			this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),
			this._createButtons()
		},
		_createButtons: function() {
			var e = this,
			i = this.options.buttons;
			return this.uiDialogButtonPane.remove(),
			this.uiButtonSet.empty(),
			t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (t.each(i,
			function(i, n) {
				var s, o;
				n = t.isFunction(n) ? {
					click: n,
					text: i
				}: n,
				n = t.extend({
					type: "button"
				},
				n),
				s = n.click,
				n.click = function() {
					s.apply(e.element[0], arguments)
				},
				o = {
					icons: n.icons,
					text: n.showText
				},
				delete n.icons,
				delete n.showText,
				t("<button></button>", n).button(o).appendTo(e.uiButtonSet)
			}), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
		},
		_makeDraggable: function() {
			function e(t) {
				return {
					position: t.position,
					offset: t.offset
				}
			}
			var i = this,
			n = this.options;
			this.uiDialog.draggable({
				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle: ".ui-dialog-titlebar",
				containment: "document",
				start: function(n, s) {
					t(this).addClass("ui-dialog-dragging"),
					i._blockFrames(),
					i._trigger("dragStart", n, e(s))
				},
				drag: function(t, n) {
					i._trigger("drag", t, e(n))
				},
				stop: function(s, o) {
					var a = o.offset.left - i.document.scrollLeft(),
					r = o.offset.top - i.document.scrollTop();
					n.position = {
						my: "left top",
						at: "left" + (a >= 0 ? "+": "") + a + " top" + (r >= 0 ? "+": "") + r,
						of: i.window
					},
					t(this).removeClass("ui-dialog-dragging"),
					i._unblockFrames(),
					i._trigger("dragStop", s, e(o))
				}
			})
		},
		_makeResizable: function() {
			function e(t) {
				return {
					originalPosition: t.originalPosition,
					originalSize: t.originalSize,
					position: t.position,
					size: t.size
				}
			}
			var i = this,
			n = this.options,
			s = n.resizable,
			o = this.uiDialog.css("position"),
			a = "string" == typeof s ? s: "n,e,s,w,se,sw,ne,nw";
			this.uiDialog.resizable({
				cancel: ".ui-dialog-content",
				containment: "document",
				alsoResize: this.element,
				maxWidth: n.maxWidth,
				maxHeight: n.maxHeight,
				minWidth: n.minWidth,
				minHeight: this._minHeight(),
				handles: a,
				start: function(n, s) {
					t(this).addClass("ui-dialog-resizing"),
					i._blockFrames(),
					i._trigger("resizeStart", n, e(s))
				},
				resize: function(t, n) {
					i._trigger("resize", t, e(n))
				},
				stop: function(s, o) {
					var a = i.uiDialog.offset(),
					r = a.left - i.document.scrollLeft(),
					l = a.top - i.document.scrollTop();
					n.height = i.uiDialog.height(),
					n.width = i.uiDialog.width(),
					n.position = {
						my: "left top",
						at: "left" + (r >= 0 ? "+": "") + r + " top" + (l >= 0 ? "+": "") + l,
						of: i.window
					},
					t(this).removeClass("ui-dialog-resizing"),
					i._unblockFrames(),
					i._trigger("resizeStop", s, e(o))
				}
			}).css("position", o)
		},
		_trackFocus: function() {
			this._on(this.widget(), {
				focusin: function(e) {
					this._makeFocusTarget(),
					this._focusedElement = t(e.target)
				}
			})
		},
		_makeFocusTarget: function() {
			this._untrackInstance(),
			this._trackingInstances().unshift(this)
		},
		_untrackInstance: function() {
			var e = this._trackingInstances(),
			i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
		},
		_trackingInstances: function() {
			var t = this.document.data("ui-dialog-instances");
			return t || (t = [], this.document.data("ui-dialog-instances", t)),
			t
		},
		_minHeight: function() {
			var t = this.options;
			return "auto" === t.height ? t.minHeight: Math.min(t.minHeight, t.height)
		},
		_position: function() {
			var t = this.uiDialog.is(":visible");
			t || this.uiDialog.show(),
			this.uiDialog.position(this.options.position),
			t || this.uiDialog.hide()
		},
		_setOptions: function(e) {
			var i = this,
			n = !1,
			s = {};
			t.each(e,
			function(t, e) {
				i._setOption(t, e),
				t in i.sizeRelatedOptions && (n = !0),
				t in i.resizableRelatedOptions && (s[t] = e)
			}),
			n && (this._size(), this._position()),
			this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
		},
		_setOption: function(t, e) {
			var i, n, s = this.uiDialog;
			"dialogClass" === t && s.removeClass(this.options.dialogClass).addClass(e),
			"disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
				label: "" + e
			}), "draggable" === t && (i = s.is(":data(ui-draggable)"), i && !e && s.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (n = s.is(":data(ui-resizable)"), n && !e && s.resizable("destroy"), n && "string" == typeof e && s.resizable("option", "handles", e), n || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
		},
		_size: function() {
			var t, e, i, n = this.options;
			this.element.show().css({
				width: "auto",
				minHeight: 0,
				maxHeight: "none",
				height: 0
			}),
			n.minWidth > n.width && (n.width = n.minWidth),
			t = this.uiDialog.css({
				height: "auto",
				width: n.width
			}).outerHeight(),
			e = Math.max(0, n.minHeight - t),
			i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none",
			"auto" === n.height ? this.element.css({
				minHeight: e,
				maxHeight: i,
				height: "auto"
			}) : this.element.height(Math.max(0, n.height - t)),
			this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
		},
		_blockFrames: function() {
			this.iframeBlocks = this.document.find("iframe").map(function() {
				var e = t(this);
				return t("<div>").css({
					position: "absolute",
					width: e.outerWidth(),
					height: e.outerHeight()
				}).appendTo(e.parent()).offset(e.offset())[0]
			})
		},
		_unblockFrames: function() {
			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
		},
		_allowInteraction: function(e) {
			return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
		},
		_createOverlay: function() {
			if (this.options.modal) {
				var e = !0;
				this._delay(function() {
					e = !1
				}),
				this.document.data("ui-dialog-overlays") || this._on(this.document, {
					focusin: function(t) {
						e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
					}
				}),
				this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),
				this._on(this.overlay, {
					mousedown: "_keepFocus"
				}),
				this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
			}
		},
		_destroyOverlay: function() {
			if (this.options.modal && this.overlay) {
				var t = this.document.data("ui-dialog-overlays") - 1;
				t ? this.document.data("ui-dialog-overlays", t) : this.document.unbind("focusin").removeData("ui-dialog-overlays"),
				this.overlay.remove(),
				this.overlay = null
			}
		}
	})
}),
/*!
 * jQuery UI Droppable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/droppable/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./mouse", "./draggable"], t) : t(jQuery)
} (function(t) {
	return t.widget("ui.droppable", {
		version: "1.11.4",
		widgetEventPrefix: "drop",
		options: {
			accept: "*",
			activeClass: !1,
			addClasses: !0,
			greedy: !1,
			hoverClass: !1,
			scope: "default",
			tolerance: "intersect",
			activate: null,
			deactivate: null,
			drop: null,
			out: null,
			over: null
		},
		_create: function() {
			var e, i = this.options,
			n = i.accept;
			this.isover = !1,
			this.isout = !0,
			this.accept = t.isFunction(n) ? n: function(t) {
				return t.is(n)
			},
			this.proportions = function() {
				return arguments.length ? void(e = arguments[0]) : e ? e: e = {
					width: this.element[0].offsetWidth,
					height: this.element[0].offsetHeight
				}
			},
			this._addToManager(i.scope),
			i.addClasses && this.element.addClass("ui-droppable")
		},
		_addToManager: function(e) {
			t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [],
			t.ui.ddmanager.droppables[e].push(this)
		},
		_splice: function(t) {
			for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1)
		},
		_destroy: function() {
			var e = t.ui.ddmanager.droppables[this.options.scope];
			this._splice(e),
			this.element.removeClass("ui-droppable ui-droppable-disabled")
		},
		_setOption: function(e, i) {
			if ("accept" === e) this.accept = t.isFunction(i) ? i: function(t) {
				return t.is(i)
			};
			else if ("scope" === e) {
				var n = t.ui.ddmanager.droppables[this.options.scope];
				this._splice(n),
				this._addToManager(i)
			}
			this._super(e, i)
		},
		_activate: function(e) {
			var i = t.ui.ddmanager.current;
			this.options.activeClass && this.element.addClass(this.options.activeClass),
			i && this._trigger("activate", e, this.ui(i))
		},
		_deactivate: function(e) {
			var i = t.ui.ddmanager.current;
			this.options.activeClass && this.element.removeClass(this.options.activeClass),
			i && this._trigger("deactivate", e, this.ui(i))
		},
		_over: function(e) {
			var i = t.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
		},
		_out: function(e) {
			var i = t.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
		},
		_drop: function(e, i) {
			var n = i || t.ui.ddmanager.current,
			s = !1;
			return n && (n.currentItem || n.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
				var i = t(this).droppable("instance");
				return i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && t.ui.intersect(n, t.extend(i, {
					offset: i.element.offset()
				}), i.options.tolerance, e) ? (s = !0, !1) : void 0
			}), s ? !1 : this.accept.call(this.element[0], n.currentItem || n.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(n)), this.element) : !1) : !1
		},
		ui: function(t) {
			return {
				draggable: t.currentItem || t.element,
				helper: t.helper,
				position: t.position,
				offset: t.positionAbs
			}
		}
	}),
	t.ui.intersect = function() {
		function t(t, e, i) {
			return t >= e && e + i > t
		}
		return function(e, i, n, s) {
			if (!i.offset) return ! 1;
			var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
			a = (e.positionAbs || e.position.absolute).top + e.margins.top,
			r = o + e.helperProportions.width,
			l = a + e.helperProportions.height,
			h = i.offset.left,
			u = i.offset.top,
			c = h + i.proportions().width,
			d = u + i.proportions().height;
			switch (n) {
			case "fit":
				return o >= h && c >= r && a >= u && d >= l;
			case "intersect":
				return h < o + e.helperProportions.width / 2 && r - e.helperProportions.width / 2 < c && u < a + e.helperProportions.height / 2 && l - e.helperProportions.height / 2 < d;
			case "pointer":
				return t(s.pageY, u, i.proportions().height) && t(s.pageX, h, i.proportions().width);
			case "touch":
				return (a >= u && d >= a || l >= u && d >= l || u > a && l > d) && (o >= h && c >= o || r >= h && c >= r || h > o && r > c);
			default:
				return ! 1
			}
		}
	} (),
	t.ui.ddmanager = {
		current: null,
		droppables: {
			"default": []
		},
		prepareOffsets: function(e, i) {
			var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [],
			a = i ? i.type: null,
			r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
			t: for (n = 0; n < o.length; n++) if (! (o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
				for (s = 0; s < r.length; s++) if (r[s] === o[n].element[0]) {
					o[n].proportions().height = 0;
					continue t
				}
				o[n].visible = "none" !== o[n].element.css("display"),
				o[n].visible && ("mousedown" === a && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({
					width: o[n].element[0].offsetWidth,
					height: o[n].element[0].offsetHeight
				}))
			}
		},
		drop: function(e, i) {
			var n = !1;
			return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(),
			function() {
				this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
			}),
			n
		},
		dragStart: function(e, i) {
			e.element.parentsUntil("body").bind("scroll.droppable",
			function() {
				e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
			})
		},
		drag: function(e, i) {
			e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
			t.each(t.ui.ddmanager.droppables[e.options.scope] || [],
			function() {
				if (!this.options.disabled && !this.greedyChild && this.visible) {
					var n, s, o, a = t.ui.intersect(e, this, this.options.tolerance, i),
					r = !a && this.isover ? "isout": a && !this.isover ? "isover": null;
					r && (this.options.greedy && (s = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() {
						return t(this).droppable("instance").options.scope === s
					}), o.length && (n = t(o[0]).droppable("instance"), n.greedyChild = "isover" === r)), n && "isover" === r && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[r] = !0, this["isout" === r ? "isover": "isout"] = !1, this["isover" === r ? "_over": "_out"].call(this, i), n && "isout" === r && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
				}
			})
		},
		dragStop: function(e, i) {
			e.element.parentsUntil("body").unbind("scroll.droppable"),
			e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
		}
	},
	t.ui.droppable
}),
/*!
 * jQuery UI Effects 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
} (function(t) {
	var e = "ui-effects-",
	i = t;
	/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
	return t.effects = {
		effect: {}
	},
	function(t, e) {
		function i(t, e, i) {
			var n = c[e.type] || {};
			return null == t ? i || !e.def ? null: e.def: (t = n.floor ? ~~t: parseFloat(t), isNaN(t) ? e.def: n.mod ? (t + n.mod) % n.mod: 0 > t ? 0 : n.max < t ? n.max: t)
		}
		function n(e) {
			var i = h(),
			n = i._rgba = [];
			return e = e.toLowerCase(),
			f(l,
			function(t, s) {
				var o, a = s.re.exec(e),
				r = a && s.parse(a),
				l = s.space || "rgba";
				return r ? (o = i[l](r), i[u[l].cache] = o[u[l].cache], n = i._rgba = o._rgba, !1) : void 0
			}),
			n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), i) : o[e]
		}
		function s(t, e, i) {
			return i = (i + 1) % 1,
			1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e: 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
		}
		var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
		r = /^([\-+])=\s*(\d+\.?\d*)/,
		l = [{
			re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function(t) {
				return [t[1], t[2], t[3], t[4]]
			}
		},
		{
			re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function(t) {
				return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
			}
		},
		{
			re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
			parse: function(t) {
				return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
			}
		},
		{
			re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
			parse: function(t) {
				return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
			}
		},
		{
			re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			space: "hsla",
			parse: function(t) {
				return [t[1], t[2] / 100, t[3] / 100, t[4]]
			}
		}],
		h = t.Color = function(e, i, n, s) {
			return new t.Color.fn.parse(e, i, n, s)
		},
		u = {
			rgba: {
				props: {
					red: {
						idx: 0,
						type: "byte"
					},
					green: {
						idx: 1,
						type: "byte"
					},
					blue: {
						idx: 2,
						type: "byte"
					}
				}
			},
			hsla: {
				props: {
					hue: {
						idx: 0,
						type: "degrees"
					},
					saturation: {
						idx: 1,
						type: "percent"
					},
					lightness: {
						idx: 2,
						type: "percent"
					}
				}
			}
		},
		c = {
			"byte": {
				floor: !0,
				max: 255
			},
			percent: {
				max: 1
			},
			degrees: {
				mod: 360,
				floor: !0
			}
		},
		d = h.support = {},
		p = t("<p>")[0],
		f = t.each;
		p.style.cssText = "background-color:rgba(1,1,1,.5)",
		d.rgba = p.style.backgroundColor.indexOf("rgba") > -1,
		f(u,
		function(t, e) {
			e.cache = "_" + t,
			e.props.alpha = {
				idx: 3,
				type: "percent",
				def: 1
			}
		}),
		h.fn = t.extend(h.prototype, {
			parse: function(s, a, r, l) {
				if (s === e) return this._rgba = [null, null, null, null],
				this; (s.jquery || s.nodeType) && (s = t(s).css(a), a = e);
				var c = this,
				d = t.type(s),
				p = this._rgba = [];
				return a !== e && (s = [s, a, r, l], d = "array"),
				"string" === d ? this.parse(n(s) || o._default) : "array" === d ? (f(u.rgba.props,
				function(t, e) {
					p[e.idx] = i(s[e.idx], e)
				}), this) : "object" === d ? (s instanceof h ? f(u,
				function(t, e) {
					s[e.cache] && (c[e.cache] = s[e.cache].slice())
				}) : f(u,
				function(e, n) {
					var o = n.cache;
					f(n.props,
					function(t, e) {
						if (!c[o] && n.to) {
							if ("alpha" === t || null == s[t]) return;
							c[o] = n.to(c._rgba)
						}
						c[o][e.idx] = i(s[t], e, !0)
					}),
					c[o] && t.inArray(null, c[o].slice(0, 3)) < 0 && (c[o][3] = 1, n.from && (c._rgba = n.from(c[o])))
				}), this) : void 0
			},
			is: function(t) {
				var e = h(t),
				i = !0,
				n = this;
				return f(u,
				function(t, s) {
					var o, a = e[s.cache];
					return a && (o = n[s.cache] || s.to && s.to(n._rgba) || [], f(s.props,
					function(t, e) {
						return null != a[e.idx] ? i = a[e.idx] === o[e.idx] : void 0
					})),
					i
				}),
				i
			},
			_space: function() {
				var t = [],
				e = this;
				return f(u,
				function(i, n) {
					e[n.cache] && t.push(i)
				}),
				t.pop()
			},
			transition: function(t, e) {
				var n = h(t),
				s = n._space(),
				o = u[s],
				a = 0 === this.alpha() ? h("transparent") : this,
				r = a[o.cache] || o.to(a._rgba),
				l = r.slice();
				return n = n[o.cache],
				f(o.props,
				function(t, s) {
					var o = s.idx,
					a = r[o],
					h = n[o],
					u = c[s.type] || {};
					null !== h && (null === a ? l[o] = h: (u.mod && (h - a > u.mod / 2 ? a += u.mod: a - h > u.mod / 2 && (a -= u.mod)), l[o] = i((h - a) * e + a, s)))
				}),
				this[s](l)
			},
			blend: function(e) {
				if (1 === this._rgba[3]) return this;
				var i = this._rgba.slice(),
				n = i.pop(),
				s = h(e)._rgba;
				return h(t.map(i,
				function(t, e) {
					return (1 - n) * s[e] + n * t
				}))
			},
			toRgbaString: function() {
				var e = "rgba(",
				i = t.map(this._rgba,
				function(t, e) {
					return null == t ? e > 2 ? 1 : 0 : t
				});
				return 1 === i[3] && (i.pop(), e = "rgb("),
				e + i.join() + ")"
			},
			toHslaString: function() {
				var e = "hsla(",
				i = t.map(this.hsla(),
				function(t, e) {
					return null == t && (t = e > 2 ? 1 : 0),
					e && 3 > e && (t = Math.round(100 * t) + "%"),
					t
				});
				return 1 === i[3] && (i.pop(), e = "hsl("),
				e + i.join() + ")"
			},
			toHexString: function(e) {
				var i = this._rgba.slice(),
				n = i.pop();
				return e && i.push(~~ (255 * n)),
				"#" + t.map(i,
				function(t) {
					return t = (t || 0).toString(16),
					1 === t.length ? "0" + t: t
				}).join("")
			},
			toString: function() {
				return 0 === this._rgba[3] ? "transparent": this.toRgbaString()
			}
		}),
		h.fn.parse.prototype = h.fn,
		u.hsla.to = function(t) {
			if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
			var e, i, n = t[0] / 255,
			s = t[1] / 255,
			o = t[2] / 255,
			a = t[3],
			r = Math.max(n, s, o),
			l = Math.min(n, s, o),
			h = r - l,
			u = r + l,
			c = .5 * u;
			return e = l === r ? 0 : n === r ? 60 * (s - o) / h + 360 : s === r ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240,
			i = 0 === h ? 0 : .5 >= c ? h / u: h / (2 - u),
			[Math.round(e) % 360, i, c, null == a ? 1 : a]
		},
		u.hsla.from = function(t) {
			if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
			var e = t[0] / 360,
			i = t[1],
			n = t[2],
			o = t[3],
			a = .5 >= n ? n * (1 + i) : n + i - n * i,
			r = 2 * n - a;
			return [Math.round(255 * s(r, a, e + 1 / 3)), Math.round(255 * s(r, a, e)), Math.round(255 * s(r, a, e - 1 / 3)), o]
		},
		f(u,
		function(n, s) {
			var o = s.props,
			a = s.cache,
			l = s.to,
			u = s.from;
			h.fn[n] = function(n) {
				if (l && !this[a] && (this[a] = l(this._rgba)), n === e) return this[a].slice();
				var s, r = t.type(n),
				c = "array" === r || "object" === r ? n: arguments,
				d = this[a].slice();
				return f(o,
				function(t, e) {
					var n = c["object" === r ? t: e.idx];
					null == n && (n = d[e.idx]),
					d[e.idx] = i(n, e)
				}),
				u ? (s = h(u(d)), s[a] = d, s) : h(d)
			},
			f(o,
			function(e, i) {
				h.fn[e] || (h.fn[e] = function(s) {
					var o, a = t.type(s),
					l = "alpha" === e ? this._hsla ? "hsla": "rgba": n,
					h = this[l](),
					u = h[i.idx];
					return "undefined" === a ? u: ("function" === a && (s = s.call(this, u), a = t.type(s)), null == s && i.empty ? this: ("string" === a && (o = r.exec(s), o && (s = u + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), h[i.idx] = s, this[l](h)))
				})
			})
		}),
		h.hook = function(e) {
			var i = e.split(" ");
			f(i,
			function(e, i) {
				t.cssHooks[i] = {
					set: function(e, s) {
						var o, a, r = "";
						if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
							if (s = h(o || s), !d.rgba && 1 !== s._rgba[3]) {
								for (a = "backgroundColor" === i ? e.parentNode: e; ("" === r || "transparent" === r) && a && a.style;) try {
									r = t.css(a, "backgroundColor"),
									a = a.parentNode
								} catch(l) {}
								s = s.blend(r && "transparent" !== r ? r: "_default")
							}
							s = s.toRgbaString()
						}
						try {
							e.style[i] = s
						} catch(l) {}
					}
				},
				t.fx.step[i] = function(e) {
					e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0),
					t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
				}
			})
		},
		h.hook(a),
		t.cssHooks.borderColor = {
			expand: function(t) {
				var e = {};
				return f(["Top", "Right", "Bottom", "Left"],
				function(i, n) {
					e["border" + n + "Color"] = t
				}),
				e
			}
		},
		o = t.Color.names = {
			aqua: "#00ffff",
			black: "#000000",
			blue: "#0000ff",
			fuchsia: "#ff00ff",
			gray: "#808080",
			green: "#008000",
			lime: "#00ff00",
			maroon: "#800000",
			navy: "#000080",
			olive: "#808000",
			purple: "#800080",
			red: "#ff0000",
			silver: "#c0c0c0",
			teal: "#008080",
			white: "#ffffff",
			yellow: "#ffff00",
			transparent: [null, null, null, 0],
			_default: "#ffffff"
		}
	} (i),
	function() {
		function e(e) {
			var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
			o = {};
			if (s && s.length && s[0] && s[s[0]]) for (n = s.length; n--;) i = s[n],
			"string" == typeof s[i] && (o[t.camelCase(i)] = s[i]);
			else for (i in s)"string" == typeof s[i] && (o[i] = s[i]);
			return o
		}
		function n(e, i) {
			var n, s, a = {};
			for (n in i) s = i[n],
			e[n] !== s && (o[n] || (t.fx.step[n] || !isNaN(parseFloat(s))) && (a[n] = s));
			return a
		}
		var s = ["add", "remove", "toggle"],
		o = {
			border: 1,
			borderBottom: 1,
			borderColor: 1,
			borderLeft: 1,
			borderRight: 1,
			borderTop: 1,
			borderWidth: 1,
			margin: 1,
			padding: 1
		};
		t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"],
		function(e, n) {
			t.fx.step[n] = function(t) { ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (i.style(t.elem, n, t.end), t.setAttr = !0)
			}
		}),
		t.fn.addBack || (t.fn.addBack = function(t) {
			return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
		}),
		t.effects.animateClass = function(i, o, a, r) {
			var l = t.speed(o, a, r);
			return this.queue(function() {
				var o, a = t(this),
				r = a.attr("class") || "",
				h = l.children ? a.find("*").addBack() : a;
				h = h.map(function() {
					var i = t(this);
					return {
						el: i,
						start: e(this)
					}
				}),
				o = function() {
					t.each(s,
					function(t, e) {
						i[e] && a[e + "Class"](i[e])
					})
				},
				o(),
				h = h.map(function() {
					return this.end = e(this.el[0]),
					this.diff = n(this.start, this.end),
					this
				}),
				a.attr("class", r),
				h = h.map(function() {
					var e = this,
					i = t.Deferred(),
					n = t.extend({},
					l, {
						queue: !1,
						complete: function() {
							i.resolve(e)
						}
					});
					return this.el.animate(this.diff, n),
					i.promise()
				}),
				t.when.apply(t, h.get()).done(function() {
					o(),
					t.each(arguments,
					function() {
						var e = this.el;
						t.each(this.diff,
						function(t) {
							e.css(t, "")
						})
					}),
					l.complete.call(a[0])
				})
			})
		},
		t.fn.extend({
			addClass: function(e) {
				return function(i, n, s, o) {
					return n ? t.effects.animateClass.call(this, {
						add: i
					},
					n, s, o) : e.apply(this, arguments)
				}
			} (t.fn.addClass),
			removeClass: function(e) {
				return function(i, n, s, o) {
					return arguments.length > 1 ? t.effects.animateClass.call(this, {
						remove: i
					},
					n, s, o) : e.apply(this, arguments)
				}
			} (t.fn.removeClass),
			toggleClass: function(e) {
				return function(i, n, s, o, a) {
					return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? {
						add: i
					}: {
						remove: i
					},
					s, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
						toggle: i
					},
					n, s, o)
				}
			} (t.fn.toggleClass),
			switchClass: function(e, i, n, s, o) {
				return t.effects.animateClass.call(this, {
					add: i,
					remove: e
				},
				n, s, o)
			}
		})
	} (),
	function() {
		function i(e, i, n, s) {
			return t.isPlainObject(e) && (i = e, e = e.effect),
			e = {
				effect: e
			},
			null == i && (i = {}),
			t.isFunction(i) && (s = i, n = null, i = {}),
			("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}),
			t.isFunction(n) && (s = n, n = null),
			i && t.extend(e, i),
			n = n || i.duration,
			e.duration = t.fx.off ? 0 : "number" == typeof n ? n: n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default,
			e.complete = s || i.complete,
			e
		}
		function n(e) {
			return ! e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
		}
		t.extend(t.effects, {
			version: "1.11.4",
			save: function(t, i) {
				for (var n = 0; n < i.length; n++) null !== i[n] && t.data(e + i[n], t[0].style[i[n]])
			},
			restore: function(t, i) {
				var n, s;
				for (s = 0; s < i.length; s++) null !== i[s] && (n = t.data(e + i[s]), void 0 === n && (n = ""), t.css(i[s], n))
			},
			setMode: function(t, e) {
				return "toggle" === e && (e = t.is(":hidden") ? "show": "hide"),
				e
			},
			getBaseline: function(t, e) {
				var i, n;
				switch (t[0]) {
				case "top":
					i = 0;
					break;
				case "middle":
					i = .5;
					break;
				case "bottom":
					i = 1;
					break;
				default:
					i = t[0] / e.height
				}
				switch (t[1]) {
				case "left":
					n = 0;
					break;
				case "center":
					n = .5;
					break;
				case "right":
					n = 1;
					break;
				default:
					n = t[1] / e.width
				}
				return {
					x: n,
					y: i
				}
			},
			createWrapper: function(e) {
				if (e.parent().is(".ui-effects-wrapper")) return e.parent();
				var i = {
					width: e.outerWidth(!0),
					height: e.outerHeight(!0),
					"float": e.css("float")
				},
				n = t("<div></div>").addClass("ui-effects-wrapper").css({
					fontSize: "100%",
					background: "transparent",
					border: "none",
					margin: 0,
					padding: 0
				}),
				s = {
					width: e.width(),
					height: e.height()
				},
				o = document.activeElement;
				try {
					o.id
				} catch(a) {
					o = document.body
				}
				return e.wrap(n),
				(e[0] === o || t.contains(e[0], o)) && t(o).focus(),
				n = e.parent(),
				"static" === e.css("position") ? (n.css({
					position: "relative"
				}), e.css({
					position: "relative"
				})) : (t.extend(i, {
					position: e.css("position"),
					zIndex: e.css("z-index")
				}), t.each(["top", "left", "bottom", "right"],
				function(t, n) {
					i[n] = e.css(n),
					isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
				}), e.css({
					position: "relative",
					top: 0,
					left: 0,
					right: "auto",
					bottom: "auto"
				})),
				e.css(s),
				n.css(i).show()
			},
			removeWrapper: function(e) {
				var i = document.activeElement;
				return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()),
				e
			},
			setTransition: function(e, i, n, s) {
				return s = s || {},
				t.each(i,
				function(t, i) {
					var o = e.cssUnit(i);
					o[0] > 0 && (s[i] = o[0] * n + o[1])
				}),
				s
			}
		}),
		t.fn.extend({
			effect: function() {
				function e(e) {
					function i() {
						t.isFunction(o) && o.call(s[0]),
						t.isFunction(e) && e()
					}
					var s = t(this),
					o = n.complete,
					r = n.mode; (s.is(":hidden") ? "hide" === r: "show" === r) ? (s[r](), i()) : a.call(s[0], n, i)
				}
				var n = i.apply(this, arguments),
				s = n.mode,
				o = n.queue,
				a = t.effects.effect[n.effect];
				return t.fx.off || !a ? s ? this[s](n.duration, n.complete) : this.each(function() {
					n.complete && n.complete.call(this)
				}) : o === !1 ? this.each(e) : this.queue(o || "fx", e)
			},
			show: function(t) {
				return function(e) {
					if (n(e)) return t.apply(this, arguments);
					var s = i.apply(this, arguments);
					return s.mode = "show",
					this.effect.call(this, s)
				}
			} (t.fn.show),
			hide: function(t) {
				return function(e) {
					if (n(e)) return t.apply(this, arguments);
					var s = i.apply(this, arguments);
					return s.mode = "hide",
					this.effect.call(this, s)
				}
			} (t.fn.hide),
			toggle: function(t) {
				return function(e) {
					if (n(e) || "boolean" == typeof e) return t.apply(this, arguments);
					var s = i.apply(this, arguments);
					return s.mode = "toggle",
					this.effect.call(this, s)
				}
			} (t.fn.toggle),
			cssUnit: function(e) {
				var i = this.css(e),
				n = [];
				return t.each(["em", "px", "%", "pt"],
				function(t, e) {
					i.indexOf(e) > 0 && (n = [parseFloat(i), e])
				}),
				n
			}
		})
	} (),
	function() {
		var e = {};
		t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"],
		function(t, i) {
			e[i] = function(e) {
				return Math.pow(e, t + 2)
			}
		}),
		t.extend(e, {
			Sine: function(t) {
				return 1 - Math.cos(t * Math.PI / 2)
			},
			Circ: function(t) {
				return 1 - Math.sqrt(1 - t * t)
			},
			Elastic: function(t) {
				return 0 === t || 1 === t ? t: -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
			},
			Back: function(t) {
				return t * t * (3 * t - 2)
			},
			Bounce: function(t) {
				for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
				return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
			}
		}),
		t.each(e,
		function(e, i) {
			t.easing["easeIn" + e] = i,
			t.easing["easeOut" + e] = function(t) {
				return 1 - i(1 - t)
			},
			t.easing["easeInOut" + e] = function(t) {
				return.5 > t ? i(2 * t) / 2 : 1 - i( - 2 * t + 2) / 2
			}
		})
	} (),
	t.effects
}),
/*!
 * jQuery UI Effects Blind 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/blind-effect/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
} (function(t) {
	return t.effects.effect.blind = function(e, i) {
		var n, s, o, a = t(this),
		r = /up|down|vertical/,
		l = /up|left|vertical|horizontal/,
		h = ["position", "top", "bottom", "left", "right", "height", "width"],
		u = t.effects.setMode(a, e.mode || "hide"),
		c = e.direction || "up",
		d = r.test(c),
		p = d ? "height": "width",
		f = d ? "top": "left",
		m = l.test(c),
		g = {},
		v = "show" === u;
		a.parent().is(".ui-effects-wrapper") ? t.effects.save(a.parent(), h) : t.effects.save(a, h),
		a.show(),
		n = t.effects.createWrapper(a).css({
			overflow: "hidden"
		}),
		s = n[p](),
		o = parseFloat(n.css(f)) || 0,
		g[p] = v ? s: 0,
		m || (a.css(d ? "bottom": "right", 0).css(d ? "top": "left", "auto").css({
			position: "absolute"
		}), g[f] = v ? o: s + o),
		v && (n.css(p, 0), m || n.css(f, o + s)),
		n.animate(g, {
			duration: e.duration,
			easing: e.easing,
			queue: !1,
			complete: function() {
				"hide" === u && a.hide(),
				t.effects.restore(a, h),
				t.effects.removeWrapper(a),
				i()
			}
		})
	}
}),
/*!
 * jQuery UI Effects Bounce 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/bounce-effect/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
} (function(t) {
	return t.effects.effect.bounce = function(e, i) {
		var n, s, o, a = t(this),
		r = ["position", "top", "bottom", "left", "right", "height", "width"],
		l = t.effects.setMode(a, e.mode || "effect"),
		h = "hide" === l,
		u = "show" === l,
		c = e.direction || "up",
		d = e.distance,
		p = e.times || 5,
		f = 2 * p + (u || h ? 1 : 0),
		m = e.duration / f,
		g = e.easing,
		v = "up" === c || "down" === c ? "top": "left",
		b = "up" === c || "left" === c,
		y = a.queue(),
		_ = y.length;
		for ((u || h) && r.push("opacity"), t.effects.save(a, r), a.show(), t.effects.createWrapper(a), d || (d = a["top" === v ? "outerHeight": "outerWidth"]() / 3), u && (o = {
			opacity: 1
		},
		o[v] = 0, a.css("opacity", 0).css(v, b ? 2 * -d: 2 * d).animate(o, m, g)), h && (d /= Math.pow(2, p - 1)), o = {},
		o[v] = 0, n = 0; p > n; n++) s = {},
		s[v] = (b ? "-=": "+=") + d,
		a.animate(s, m, g).animate(o, m, g),
		d = h ? 2 * d: d / 2;
		h && (s = {
			opacity: 0
		},
		s[v] = (b ? "-=": "+=") + d, a.animate(s, m, g)),
		a.queue(function() {
			h && a.hide(),
			t.effects.restore(a, r),
			t.effects.removeWrapper(a),
			i()
		}),
		_ > 1 && y.splice.apply(y, [1, 0].concat(y.splice(_, f + 1))),
		a.dequeue()
	}
}),
/*!
 * jQuery UI Effects Clip 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/clip-effect/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
} (function(t) {
	return t.effects.effect.clip = function(e, i) {
		var n, s, o, a = t(this),
		r = ["position", "top", "bottom", "left", "right", "height", "width"],
		l = t.effects.setMode(a, e.mode || "hide"),
		h = "show" === l,
		u = e.direction || "vertical",
		c = "vertical" === u,
		d = c ? "height": "width",
		p = c ? "top": "left",
		f = {};
		t.effects.save(a, r),
		a.show(),
		n = t.effects.createWrapper(a).css({
			overflow: "hidden"
		}),
		s = "IMG" === a[0].tagName ? n: a,
		o = s[d](),
		h && (s.css(d, 0), s.css(p, o / 2)),
		f[d] = h ? o: 0,
		f[p] = h ? 0 : o / 2,
		s.animate(f, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function() {
				h || a.hide(),
				t.effects.restore(a, r),
				t.effects.removeWrapper(a),
				i()
			}
		})
	}
}),
/*!
 * jQuery UI Effects Drop 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/drop-effect/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
} (function(t) {
	return t.effects.effect.drop = function(e, i) {
		var n, s = t(this),
		o = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
		a = t.effects.setMode(s, e.mode || "hide"),
		r = "show" === a,
		l = e.direction || "left",
		h = "up" === l || "down" === l ? "top": "left",
		u = "up" === l || "left" === l ? "pos": "neg",
		c = {
			opacity: r ? 1 : 0
		};
		t.effects.save(s, o),
		s.show(),
		t.effects.createWrapper(s),
		n = e.distance || s["top" === h ? "outerHeight": "outerWidth"](!0) / 2,
		r && s.css("opacity", 0).css(h, "pos" === u ? -n: n),
		c[h] = (r ? "pos" === u ? "+=": "-=": "pos" === u ? "-=": "+=") + n,
		s.animate(c, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function() {
				"hide" === a && s.hide(),
				t.effects.restore(s, o),
				t.effects.removeWrapper(s),
				i()
			}
		})
	}
}),
/*!
 * jQuery UI Effects Explode 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/explode-effect/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
} (function(t) {
	return t.effects.effect.explode = function(e, i) {
		function n() {
			y.push(this),
			y.length === c * d && s()
		}
		function s() {
			p.css({
				visibility: "visible"
			}),
			t(y).remove(),
			m || p.hide(),
			i()
		}
		var o, a, r, l, h, u, c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
		d = c,
		p = t(this),
		f = t.effects.setMode(p, e.mode || "hide"),
		m = "show" === f,
		g = p.show().css("visibility", "hidden").offset(),
		v = Math.ceil(p.outerWidth() / d),
		b = Math.ceil(p.outerHeight() / c),
		y = [];
		for (o = 0; c > o; o++) for (l = g.top + o * b, u = o - (c - 1) / 2, a = 0; d > a; a++) r = g.left + a * v,
		h = a - (d - 1) / 2,
		p.clone().appendTo("body").wrap("<div></div>").css({
			position: "absolute",
			visibility: "visible",
			left: -a * v,
			top: -o * b
		}).parent().addClass("ui-effects-explode").css({
			position: "absolute",
			overflow: "hidden",
			width: v,
			height: b,
			left: r + (m ? h * v: 0),
			top: l + (m ? u * b: 0),
			opacity: m ? 0 : 1
		}).animate({
			left: r + (m ? 0 : h * v),
			top: l + (m ? 0 : u * b),
			opacity: m ? 1 : 0
		},
		e.duration || 500, e.easing, n)
	}
}),
/*!
 * jQuery UI Effects Fade 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fade-effect/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
} (function(t) {
	return t.effects.effect.fade = function(e, i) {
		var n = t(this),
		s = t.effects.setMode(n, e.mode || "toggle");
		n.animate({
			opacity: s
		},
		{
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: i
		})
	}
}),
/*!
 * jQuery UI Effects Fold 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fold-effect/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
} (function(t) {
	return t.effects.effect.fold = function(e, i) {
		var n, s, o = t(this),
		a = ["position", "top", "bottom", "left", "right", "height", "width"],
		r = t.effects.setMode(o, e.mode || "hide"),
		l = "show" === r,
		h = "hide" === r,
		u = e.size || 15,
		c = /([0-9]+)%/.exec(u),
		d = !!e.horizFirst,
		p = l !== d,
		f = p ? ["width", "height"] : ["height", "width"],
		m = e.duration / 2,
		g = {},
		v = {};
		t.effects.save(o, a),
		o.show(),
		n = t.effects.createWrapper(o).css({
			overflow: "hidden"
		}),
		s = p ? [n.width(), n.height()] : [n.height(), n.width()],
		c && (u = parseInt(c[1], 10) / 100 * s[h ? 0 : 1]),
		l && n.css(d ? {
			height: 0,
			width: u
		}: {
			height: u,
			width: 0
		}),
		g[f[0]] = l ? s[0] : u,
		v[f[1]] = l ? s[1] : 0,
		n.animate(g, m, e.easing).animate(v, m, e.easing,
		function() {
			h && o.hide(),
			t.effects.restore(o, a),
			t.effects.removeWrapper(o),
			i()
		})
	}
}),
/*!
 * jQuery UI Effects Highlight 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/highlight-effect/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
} (function(t) {
	return t.effects.effect.highlight = function(e, i) {
		var n = t(this),
		s = ["backgroundImage", "backgroundColor", "opacity"],
		o = t.effects.setMode(n, e.mode || "show"),
		a = {
			backgroundColor: n.css("backgroundColor")
		};
		"hide" === o && (a.opacity = 0),
		t.effects.save(n, s),
		n.show().css({
			backgroundImage: "none",
			backgroundColor: e.color || "#ffff99"
		}).animate(a, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function() {
				"hide" === o && n.hide(),
				t.effects.restore(n, s),
				i()
			}
		})
	}
}),
/*!
 * jQuery UI Effects Size 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/size-effect/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
} (function(t) {
	return t.effects.effect.size = function(e, i) {
		var n, s, o, a = t(this),
		r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
		l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
		h = ["width", "height", "overflow"],
		u = ["fontSize"],
		c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
		d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
		p = t.effects.setMode(a, e.mode || "effect"),
		f = e.restore || "effect" !== p,
		m = e.scale || "both",
		g = e.origin || ["middle", "center"],
		v = a.css("position"),
		b = f ? r: l,
		y = {
			height: 0,
			width: 0,
			outerHeight: 0,
			outerWidth: 0
		};
		"show" === p && a.show(),
		n = {
			height: a.height(),
			width: a.width(),
			outerHeight: a.outerHeight(),
			outerWidth: a.outerWidth()
		},
		"toggle" === e.mode && "show" === p ? (a.from = e.to || y, a.to = e.from || n) : (a.from = e.from || ("show" === p ? y: n), a.to = e.to || ("hide" === p ? y: n)),
		o = {
			from: {
				y: a.from.height / n.height,
				x: a.from.width / n.width
			},
			to: {
				y: a.to.height / n.height,
				x: a.to.width / n.width
			}
		},
		("box" === m || "both" === m) && (o.from.y !== o.to.y && (b = b.concat(c), a.from = t.effects.setTransition(a, c, o.from.y, a.from), a.to = t.effects.setTransition(a, c, o.to.y, a.to)), o.from.x !== o.to.x && (b = b.concat(d), a.from = t.effects.setTransition(a, d, o.from.x, a.from), a.to = t.effects.setTransition(a, d, o.to.x, a.to))),
		("content" === m || "both" === m) && o.from.y !== o.to.y && (b = b.concat(u).concat(h), a.from = t.effects.setTransition(a, u, o.from.y, a.from), a.to = t.effects.setTransition(a, u, o.to.y, a.to)),
		t.effects.save(a, b),
		a.show(),
		t.effects.createWrapper(a),
		a.css("overflow", "hidden").css(a.from),
		g && (s = t.effects.getBaseline(g, n), a.from.top = (n.outerHeight - a.outerHeight()) * s.y, a.from.left = (n.outerWidth - a.outerWidth()) * s.x, a.to.top = (n.outerHeight - a.to.outerHeight) * s.y, a.to.left = (n.outerWidth - a.to.outerWidth) * s.x),
		a.css(a.from),
		("content" === m || "both" === m) && (c = c.concat(["marginTop", "marginBottom"]).concat(u), d = d.concat(["marginLeft", "marginRight"]), h = r.concat(c).concat(d), a.find("*[width]").each(function() {
			var i = t(this),
			n = {
				height: i.height(),
				width: i.width(),
				outerHeight: i.outerHeight(),
				outerWidth: i.outerWidth()
			};
			f && t.effects.save(i, h),
			i.from = {
				height: n.height * o.from.y,
				width: n.width * o.from.x,
				outerHeight: n.outerHeight * o.from.y,
				outerWidth: n.outerWidth * o.from.x
			},
			i.to = {
				height: n.height * o.to.y,
				width: n.width * o.to.x,
				outerHeight: n.height * o.to.y,
				outerWidth: n.width * o.to.x
			},
			o.from.y !== o.to.y && (i.from = t.effects.setTransition(i, c, o.from.y, i.from), i.to = t.effects.setTransition(i, c, o.to.y, i.to)),
			o.from.x !== o.to.x && (i.from = t.effects.setTransition(i, d, o.from.x, i.from), i.to = t.effects.setTransition(i, d, o.to.x, i.to)),
			i.css(i.from),
			i.animate(i.to, e.duration, e.easing,
			function() {
				f && t.effects.restore(i, h)
			})
		})),
		a.animate(a.to, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function() {
				0 === a.to.opacity && a.css("opacity", a.from.opacity),
				"hide" === p && a.hide(),
				t.effects.restore(a, b),
				f || ("static" === v ? a.css({
					position: "relative",
					top: a.to.top,
					left: a.to.left
				}) : t.each(["top", "left"],
				function(t, e) {
					a.css(e,
					function(e, i) {
						var n = parseInt(i, 10),
						s = t ? a.to.left: a.to.top;
						return "auto" === i ? s + "px": n + s + "px"
					})
				})),
				t.effects.removeWrapper(a),
				i()
			}
		})
	}
}),
/*!
 * jQuery UI Effects Scale 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/scale-effect/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./effect", "./effect-size"], t) : t(jQuery)
} (function(t) {
	return t.effects.effect.scale = function(e, i) {
		var n = t(this),
		s = t.extend(!0, {},
		e),
		o = t.effects.setMode(n, e.mode || "effect"),
		a = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100),
		r = e.direction || "both",
		l = e.origin,
		h = {
			height: n.height(),
			width: n.width(),
			outerHeight: n.outerHeight(),
			outerWidth: n.outerWidth()
		},
		u = {
			y: "horizontal" !== r ? a / 100 : 1,
			x: "vertical" !== r ? a / 100 : 1
		};
		s.effect = "size",
		s.queue = !1,
		s.complete = i,
		"effect" !== o && (s.origin = l || ["middle", "center"], s.restore = !0),
		s.from = e.from || ("show" === o ? {
			height: 0,
			width: 0,
			outerHeight: 0,
			outerWidth: 0
		}: h),
		s.to = {
			height: h.height * u.y,
			width: h.width * u.x,
			outerHeight: h.outerHeight * u.y,
			outerWidth: h.outerWidth * u.x
		},
		s.fade && ("show" === o && (s.from.opacity = 0, s.to.opacity = 1), "hide" === o && (s.from.opacity = 1, s.to.opacity = 0)),
		n.effect(s)
	}
}),
/*!
 * jQuery UI Effects Puff 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/puff-effect/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./effect", "./effect-scale"], t) : t(jQuery)
} (function(t) {
	return t.effects.effect.puff = function(e, i) {
		var n = t(this),
		s = t.effects.setMode(n, e.mode || "hide"),
		o = "hide" === s,
		a = parseInt(e.percent, 10) || 150,
		r = a / 100,
		l = {
			height: n.height(),
			width: n.width(),
			outerHeight: n.outerHeight(),
			outerWidth: n.outerWidth()
		};
		t.extend(e, {
			effect: "scale",
			queue: !1,
			fade: !0,
			mode: s,
			complete: i,
			percent: o ? a: 100,
			from: o ? l: {
				height: l.height * r,
				width: l.width * r,
				outerHeight: l.outerHeight * r,
				outerWidth: l.outerWidth * r
			}
		}),
		n.effect(e)
	}
}),
/*!
 * jQuery UI Effects Pulsate 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/pulsate-effect/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
} (function(t) {
	return t.effects.effect.pulsate = function(e, i) {
		var n, s = t(this),
		o = t.effects.setMode(s, e.mode || "show"),
		a = "show" === o,
		r = "hide" === o,
		l = a || "hide" === o,
		h = 2 * (e.times || 5) + (l ? 1 : 0),
		u = e.duration / h,
		c = 0,
		d = s.queue(),
		p = d.length;
		for ((a || !s.is(":visible")) && (s.css("opacity", 0).show(), c = 1), n = 1; h > n; n++) s.animate({
			opacity: c
		},
		u, e.easing),
		c = 1 - c;
		s.animate({
			opacity: c
		},
		u, e.easing),
		s.queue(function() {
			r && s.hide(),
			i()
		}),
		p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, h + 1))),
		s.dequeue()
	}
}),
/*!
 * jQuery UI Effects Shake 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/shake-effect/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
} (function(t) {
	return t.effects.effect.shake = function(e, i) {
		var n, s = t(this),
		o = ["position", "top", "bottom", "left", "right", "height", "width"],
		a = t.effects.setMode(s, e.mode || "effect"),
		r = e.direction || "left",
		l = e.distance || 20,
		h = e.times || 3,
		u = 2 * h + 1,
		c = Math.round(e.duration / u),
		d = "up" === r || "down" === r ? "top": "left",
		p = "up" === r || "left" === r,
		f = {},
		m = {},
		g = {},
		v = s.queue(),
		b = v.length;
		for (t.effects.save(s, o), s.show(), t.effects.createWrapper(s), f[d] = (p ? "-=": "+=") + l, m[d] = (p ? "+=": "-=") + 2 * l, g[d] = (p ? "-=": "+=") + 2 * l, s.animate(f, c, e.easing), n = 1; h > n; n++) s.animate(m, c, e.easing).animate(g, c, e.easing);
		s.animate(m, c, e.easing).animate(f, c / 2, e.easing).queue(function() {
			"hide" === a && s.hide(),
			t.effects.restore(s, o),
			t.effects.removeWrapper(s),
			i()
		}),
		b > 1 && v.splice.apply(v, [1, 0].concat(v.splice(b, u + 1))),
		s.dequeue()
	}
}),
/*!
 * jQuery UI Effects Slide 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slide-effect/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
} (function(t) {
	return t.effects.effect.slide = function(e, i) {
		var n, s = t(this),
		o = ["position", "top", "bottom", "left", "right", "width", "height"],
		a = t.effects.setMode(s, e.mode || "show"),
		r = "show" === a,
		l = e.direction || "left",
		h = "up" === l || "down" === l ? "top": "left",
		u = "up" === l || "left" === l,
		c = {};
		t.effects.save(s, o),
		s.show(),
		n = e.distance || s["top" === h ? "outerHeight": "outerWidth"](!0),
		t.effects.createWrapper(s).css({
			overflow: "hidden"
		}),
		r && s.css(h, u ? isNaN(n) ? "-" + n: -n: n),
		c[h] = (r ? u ? "+=": "-=": u ? "-=": "+=") + n,
		s.animate(c, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function() {
				"hide" === a && s.hide(),
				t.effects.restore(s, o),
				t.effects.removeWrapper(s),
				i()
			}
		})
	}
}),
/*!
 * jQuery UI Effects Transfer 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/transfer-effect/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
} (function(t) {
	return t.effects.effect.transfer = function(e, i) {
		var n = t(this),
		s = t(e.to),
		o = "fixed" === s.css("position"),
		a = t("body"),
		r = o ? a.scrollTop() : 0,
		l = o ? a.scrollLeft() : 0,
		h = s.offset(),
		u = {
			top: h.top - r,
			left: h.left - l,
			height: s.innerHeight(),
			width: s.innerWidth()
		},
		c = n.offset(),
		d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
			top: c.top - r,
			left: c.left - l,
			height: n.innerHeight(),
			width: n.innerWidth(),
			position: o ? "fixed": "absolute"
		}).animate(u, e.duration, e.easing,
		function() {
			d.remove(),
			i()
		})
	}
}),
/*!
 * jQuery UI Progressbar 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/progressbar/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], t) : t(jQuery)
} (function(t) {
	return t.widget("ui.progressbar", {
		version: "1.11.4",
		options: {
			max: 100,
			value: 0,
			change: null,
			complete: null
		},
		min: 0,
		_create: function() {
			this.oldValue = this.options.value = this._constrainedValue(),
			this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
				role: "progressbar",
				"aria-valuemin": this.min
			}),
			this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),
			this._refreshValue()
		},
		_destroy: function() {
			this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
			this.valueDiv.remove()
		},
		value: function(t) {
			return void 0 === t ? this.options.value: (this.options.value = this._constrainedValue(t), void this._refreshValue())
		},
		_constrainedValue: function(t) {
			return void 0 === t && (t = this.options.value),
			this.indeterminate = t === !1,
			"number" != typeof t && (t = 0),
			this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
		},
		_setOptions: function(t) {
			var e = t.value;
			delete t.value,
			this._super(t),
			this.options.value = this._constrainedValue(e),
			this._refreshValue()
		},
		_setOption: function(t, e) {
			"max" === t && (e = Math.max(this.min, e)),
			"disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e),
			this._super(t, e)
		},
		_percentage: function() {
			return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
		},
		_refreshValue: function() {
			var e = this.options.value,
			i = this._percentage();
			this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"),
			this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate),
			this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
				"aria-valuemax": this.options.max,
				"aria-valuenow": e
			}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)),
			this.oldValue !== e && (this.oldValue = e, this._trigger("change")),
			e === this.options.max && this._trigger("complete")
		}
	})
}),
/*!
 * jQuery UI Selectable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/selectable/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], t) : t(jQuery)
} (function(t) {
	return t.widget("ui.selectable", t.ui.mouse, {
		version: "1.11.4",
		options: {
			appendTo: "body",
			autoRefresh: !0,
			distance: 0,
			filter: "*",
			tolerance: "touch",
			selected: null,
			selecting: null,
			start: null,
			stop: null,
			unselected: null,
			unselecting: null
		},
		_create: function() {
			var e, i = this;
			this.element.addClass("ui-selectable"),
			this.dragged = !1,
			this.refresh = function() {
				e = t(i.options.filter, i.element[0]),
				e.addClass("ui-selectee"),
				e.each(function() {
					var e = t(this),
					i = e.offset();
					t.data(this, "selectable-item", {
						element: this,
						$element: e,
						left: i.left,
						top: i.top,
						right: i.left + e.outerWidth(),
						bottom: i.top + e.outerHeight(),
						startselected: !1,
						selected: e.hasClass("ui-selected"),
						selecting: e.hasClass("ui-selecting"),
						unselecting: e.hasClass("ui-unselecting")
					})
				})
			},
			this.refresh(),
			this.selectees = e.addClass("ui-selectee"),
			this._mouseInit(),
			this.helper = t("<div class='ui-selectable-helper'></div>")
		},
		_destroy: function() {
			this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
			this.element.removeClass("ui-selectable ui-selectable-disabled"),
			this._mouseDestroy()
		},
		_mouseStart: function(e) {
			var i = this,
			n = this.options;
			this.opos = [e.pageX, e.pageY],
			this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({
				left: e.pageX,
				top: e.pageY,
				width: 0,
				height: 0
			}), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
				var n = t.data(this, "selectable-item");
				n.startselected = !0,
				e.metaKey || e.ctrlKey || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
					unselecting: n.element
				}))
			}), t(e.target).parents().addBack().each(function() {
				var n, s = t.data(this, "selectable-item");
				return s ? (n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), s.$element.removeClass(n ? "ui-unselecting": "ui-selected").addClass(n ? "ui-selecting": "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {
					selecting: s.element
				}) : i._trigger("unselecting", e, {
					unselecting: s.element
				}), !1) : void 0
			}))
		},
		_mouseDrag: function(e) {
			if (this.dragged = !0, !this.options.disabled) {
				var i, n = this,
				s = this.options,
				o = this.opos[0],
				a = this.opos[1],
				r = e.pageX,
				l = e.pageY;
				return o > r && (i = r, r = o, o = i),
				a > l && (i = l, l = a, a = i),
				this.helper.css({
					left: o,
					top: a,
					width: r - o,
					height: l - a
				}),
				this.selectees.each(function() {
					var i = t.data(this, "selectable-item"),
					h = !1;
					i && i.element !== n.element[0] && ("touch" === s.tolerance ? h = !(i.left > r || i.right < o || i.top > l || i.bottom < a) : "fit" === s.tolerance && (h = i.left > o && i.right < r && i.top > a && i.bottom < l), h ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, n._trigger("selecting", e, {
						selecting: i.element
					}))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, {
						unselecting: i.element
					}))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, {
						unselecting: i.element
					})))))
				}),
				!1
			}
		},
		_mouseStop: function(e) {
			var i = this;
			return this.dragged = !1,
			t(".ui-unselecting", this.element[0]).each(function() {
				var n = t.data(this, "selectable-item");
				n.$element.removeClass("ui-unselecting"),
				n.unselecting = !1,
				n.startselected = !1,
				i._trigger("unselected", e, {
					unselected: n.element
				})
			}),
			t(".ui-selecting", this.element[0]).each(function() {
				var n = t.data(this, "selectable-item");
				n.$element.removeClass("ui-selecting").addClass("ui-selected"),
				n.selecting = !1,
				n.selected = !0,
				n.startselected = !0,
				i._trigger("selected", e, {
					selected: n.element
				})
			}),
			this._trigger("stop", e),
			this.helper.remove(),
			!1
		}
	})
}),
/*!
 * jQuery UI Selectmenu 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/selectmenu
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./position", "./menu"], t) : t(jQuery)
} (function(t) {
	return t.widget("ui.selectmenu", {
		version: "1.11.4",
		defaultElement: "<select>",
		options: {
			appendTo: null,
			disabled: null,
			icons: {
				button: "ui-icon-triangle-1-s"
			},
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			width: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			select: null
		},
		_create: function() {
			var t = this.element.uniqueId().attr("id");
			this.ids = {
				element: t,
				button: t + "-button",
				menu: t + "-menu"
			},
			this._drawButton(),
			this._drawMenu(),
			this.options.disabled && this.disable()
		},
		_drawButton: function() {
			var e = this;
			this.label = t("label[for='" + this.ids.element + "']").attr("for", this.ids.button),
			this._on(this.label, {
				click: function(t) {
					this.button.focus(),
					t.preventDefault()
				}
			}),
			this.element.hide(),
			this.button = t("<span>", {
				"class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
				tabindex: this.options.disabled ? -1 : 0,
				id: this.ids.button,
				role: "combobox",
				"aria-expanded": "false",
				"aria-autocomplete": "list",
				"aria-owns": this.ids.menu,
				"aria-haspopup": "true"
			}).insertAfter(this.element),
			t("<span>", {
				"class": "ui-icon " + this.options.icons.button
			}).prependTo(this.button),
			this.buttonText = t("<span>", {
				"class": "ui-selectmenu-text"
			}).appendTo(this.button),
			this._setText(this.buttonText, this.element.find("option:selected").text()),
			this._resizeButton(),
			this._on(this.button, this._buttonEvents),
			this.button.one("focusin",
			function() {
				e.menuItems || e._refreshMenu()
			}),
			this._hoverable(this.button),
			this._focusable(this.button)
		},
		_drawMenu: function() {
			var e = this;
			this.menu = t("<ul>", {
				"aria-hidden": "true",
				"aria-labelledby": this.ids.button,
				id: this.ids.menu
			}),
			this.menuWrap = t("<div>", {
				"class": "ui-selectmenu-menu ui-front"
			}).append(this.menu).appendTo(this._appendTo()),
			this.menuInstance = this.menu.menu({
				role: "listbox",
				select: function(t, i) {
					t.preventDefault(),
					e._setSelection(),
					e._select(i.item.data("ui-selectmenu-item"), t)
				},
				focus: function(t, i) {
					var n = i.item.data("ui-selectmenu-item");
					null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, {
						item: n
					}), e.isOpen || e._select(n, t)),
					e.focusIndex = n.index,
					e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"))
				}
			}).menu("instance"),
			this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),
			this.menuInstance._off(this.menu, "mouseleave"),
			this.menuInstance._closeOnDocumentClick = function() {
				return ! 1
			},
			this.menuInstance._isDivider = function() {
				return ! 1
			}
		},
		refresh: function() {
			this._refreshMenu(),
			this._setText(this.buttonText, this._getSelectedItem().text()),
			this.options.width || this._resizeButton()
		},
		_refreshMenu: function() {
			this.menu.empty();
			var t, e = this.element.find("option");
			e.length && (this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
		},
		open: function(t) {
			this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t))
		},
		_position: function() {
			this.menuWrap.position(t.extend({
				of: this.button
			},
			this.options.position))
		},
		close: function(t) {
			this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
		},
		widget: function() {
			return this.button
		},
		menuWidget: function() {
			return this.menu
		},
		_renderMenu: function(e, i) {
			var n = this,
			s = "";
			t.each(i,
			function(i, o) {
				o.optgroup !== s && (t("<li>", {
					"class": "ui-selectmenu-optgroup ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled": ""),
					text: o.optgroup
				}).appendTo(e), s = o.optgroup),
				n._renderItemData(e, o)
			})
		},
		_renderItemData: function(t, e) {
			return this._renderItem(t, e).data("ui-selectmenu-item", e)
		},
		_renderItem: function(e, i) {
			var n = t("<li>");
			return i.disabled && n.addClass("ui-state-disabled"),
			this._setText(n, i.label),
			n.appendTo(e)
		},
		_setText: function(t, e) {
			e ? t.text(e) : t.html("&#160;")
		},
		_move: function(t, e) {
			var i, n, s = ".ui-menu-item";
			this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), s += ":not(.ui-state-disabled)"),
			n = "first" === t || "last" === t ? i["first" === t ? "prevAll": "nextAll"](s).eq( - 1) : i[t + "All"](s).eq(0),
			n.length && this.menuInstance.focus(e, n)
		},
		_getSelectedItem: function() {
			return this.menuItems.eq(this.element[0].selectedIndex)
		},
		_toggle: function(t) {
			this[this.isOpen ? "close": "open"](t)
		},
		_setSelection: function() {
			var t;
			this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
		},
		_documentClick: {
			mousedown: function(e) {
				this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(e))
			}
		},
		_buttonEvents: {
			mousedown: function() {
				var t;
				window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
			},
			click: function(t) {
				this._setSelection(),
				this._toggle(t)
			},
			keydown: function(e) {
				var i = !0;
				switch (e.keyCode) {
				case t.ui.keyCode.TAB:
				case t.ui.keyCode.ESCAPE:
					this.close(e),
					i = !1;
					break;
				case t.ui.keyCode.ENTER:
					this.isOpen && this._selectFocusedItem(e);
					break;
				case t.ui.keyCode.UP:
					e.altKey ? this._toggle(e) : this._move("prev", e);
					break;
				case t.ui.keyCode.DOWN:
					e.altKey ? this._toggle(e) : this._move("next", e);
					break;
				case t.ui.keyCode.SPACE:
					this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
					break;
				case t.ui.keyCode.LEFT:
					this._move("prev", e);
					break;
				case t.ui.keyCode.RIGHT:
					this._move("next", e);
					break;
				case t.ui.keyCode.HOME:
				case t.ui.keyCode.PAGE_UP:
					this._move("first", e);
					break;
				case t.ui.keyCode.END:
				case t.ui.keyCode.PAGE_DOWN:
					this._move("last", e);
					break;
				default:
					this.menu.trigger(e),
					i = !1
				}
				i && e.preventDefault()
			}
		},
		_selectFocusedItem: function(t) {
			var e = this.menuItems.eq(this.focusIndex);
			e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
		},
		_select: function(t, e) {
			var i = this.element[0].selectedIndex;
			this.element[0].selectedIndex = t.index,
			this._setText(this.buttonText, t.label),
			this._setAria(t),
			this._trigger("select", e, {
				item: t
			}),
			t.index !== i && this._trigger("change", e, {
				item: t
			}),
			this.close(e)
		},
		_setAria: function(t) {
			var e = this.menuItems.eq(t.index).attr("id");
			this.button.attr({
				"aria-labelledby": e,
				"aria-activedescendant": e
			}),
			this.menu.attr("aria-activedescendant", e)
		},
		_setOption: function(t, e) {
			"icons" === t && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(e.button),
			this._super(t, e),
			"appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
			"disabled" === t && (this.menuInstance.option("disabled", e), this.button.toggleClass("ui-state-disabled", e).attr("aria-disabled", e), this.element.prop("disabled", e), e ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)),
			"width" === t && this._resizeButton()
		},
		_appendTo: function() {
			var e = this.options.appendTo;
			return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
			e && e[0] || (e = this.element.closest(".ui-front")),
			e.length || (e = this.document[0].body),
			e
		},
		_toggleAttr: function() {
			this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen),
			this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen),
			this.menu.attr("aria-hidden", !this.isOpen)
		},
		_resizeButton: function() {
			var t = this.options.width;
			t || (t = this.element.show().outerWidth(), this.element.hide()),
			this.button.outerWidth(t)
		},
		_resizeMenu: function() {
			this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
		},
		_getCreateOptions: function() {
			return {
				disabled: this.element.prop("disabled")
			}
		},
		_parseOptions: function(e) {
			var i = [];
			e.each(function(e, n) {
				var s = t(n),
				o = s.parent("optgroup");
				i.push({
					element: s,
					index: e,
					value: s.val(),
					label: s.text(),
					optgroup: o.attr("label") || "",
					disabled: o.prop("disabled") || s.prop("disabled")
				})
			}),
			this.items = i
		},
		_destroy: function() {
			this.menuWrap.remove(),
			this.button.remove(),
			this.element.show(),
			this.element.removeUniqueId(),
			this.label.attr("for", this.ids.element)
		}
	})
}),
/*!
 * jQuery UI Slider 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slider/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], t) : t(jQuery)
} (function(t) {
	return t.widget("ui.slider", t.ui.mouse, {
		version: "1.11.4",
		widgetEventPrefix: "slide",
		options: {
			animate: !1,
			distance: 0,
			max: 100,
			min: 0,
			orientation: "horizontal",
			range: !1,
			step: 1,
			value: 0,
			values: null,
			change: null,
			slide: null,
			start: null,
			stop: null
		},
		numPages: 5,
		_create: function() {
			this._keySliding = !1,
			this._mouseSliding = !1,
			this._animateOff = !0,
			this._handleIndex = null,
			this._detectOrientation(),
			this._mouseInit(),
			this._calculateNewMax(),
			this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"),
			this._refresh(),
			this._setOption("disabled", this.options.disabled),
			this._animateOff = !1
		},
		_refresh: function() {
			this._createRange(),
			this._createHandles(),
			this._setupEvents(),
			this._refreshValue()
		},
		_createHandles: function() {
			var e, i, n = this.options,
			s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
			o = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
			a = [];
			for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; i > e; e++) a.push(o);
			this.handles = s.add(t(a.join("")).appendTo(this.element)),
			this.handle = this.handles.eq(0),
			this.handles.each(function(e) {
				t(this).data("ui-slider-handle-index", e)
			})
		},
		_createRange: function() {
			var e = this.options,
			i = "";
			e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
				left: "",
				bottom: ""
			}) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range: ""))) : (this.range && this.range.remove(), this.range = null)
		},
		_setupEvents: function() {
			this._off(this.handles),
			this._on(this.handles, this._handleEvents),
			this._hoverable(this.handles),
			this._focusable(this.handles)
		},
		_destroy: function() {
			this.handles.remove(),
			this.range && this.range.remove(),
			this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),
			this._mouseDestroy()
		},
		_mouseCapture: function(e) {
			var i, n, s, o, a, r, l, h, u = this,
			c = this.options;
			return c.disabled ? !1 : (this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			},
			this.elementOffset = this.element.offset(), i = {
				x: e.pageX,
				y: e.pageY
			},
			n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
				var i = Math.abs(n - u.values(e)); (s > i || s === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (s = i, o = t(this), a = e)
			}), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, o.addClass("ui-state-active").focus(), l = o.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
				left: 0,
				top: 0
			}: {
				left: e.pageX - l.left - o.width() / 2,
				top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
			},
			this.handles.hasClass("ui-state-hover") || this._slide(e, a, n), this._animateOff = !0, !0))
		},
		_mouseStart: function() {
			return ! 0
		},
		_mouseDrag: function(t) {
			var e = {
				x: t.pageX,
				y: t.pageY
			},
			i = this._normValueFromMouse(e);
			return this._slide(t, this._handleIndex, i),
			!1
		},
		_mouseStop: function(t) {
			return this.handles.removeClass("ui-state-active"),
			this._mouseSliding = !1,
			this._stop(t, this._handleIndex),
			this._change(t, this._handleIndex),
			this._handleIndex = null,
			this._clickOffset = null,
			this._animateOff = !1,
			!1
		},
		_detectOrientation: function() {
			this.orientation = "vertical" === this.options.orientation ? "vertical": "horizontal"
		},
		_normValueFromMouse: function(t) {
			var e, i, n, s, o;
			return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left: 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top: 0)),
			n = i / e,
			n > 1 && (n = 1),
			0 > n && (n = 0),
			"vertical" === this.orientation && (n = 1 - n),
			s = this._valueMax() - this._valueMin(),
			o = this._valueMin() + n * s,
			this._trimAlignValue(o)
		},
		_start: function(t, e) {
			var i = {
				handle: this.handles[e],
				value: this.value()
			};
			return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()),
			this._trigger("start", t, i)
		},
		_slide: function(t, e, i) {
			var n, s, o;
			this.options.values && this.options.values.length ? (n = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > n || 1 === e && n > i) && (i = n), i !== this.values(e) && (s = this.values(), s[e] = i, o = this._trigger("slide", t, {
				handle: this.handles[e],
				value: i,
				values: s
			}), n = this.values(e ? 0 : 1), o !== !1 && this.values(e, i))) : i !== this.value() && (o = this._trigger("slide", t, {
				handle: this.handles[e],
				value: i
			}), o !== !1 && this.value(i))
		},
		_stop: function(t, e) {
			var i = {
				handle: this.handles[e],
				value: this.value()
			};
			this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()),
			this._trigger("stop", t, i)
		},
		_change: function(t, e) {
			if (!this._keySliding && !this._mouseSliding) {
				var i = {
					handle: this.handles[e],
					value: this.value()
				};
				this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()),
				this._lastChangedValue = e,
				this._trigger("change", t, i)
			}
		},
		value: function(t) {
			return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
		},
		values: function(e, i) {
			var n, s, o;
			if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i),
			this._refreshValue(),
			void this._change(null, e);
			if (!arguments.length) return this._values();
			if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
			for (n = this.options.values, s = arguments[0], o = 0; o < n.length; o += 1) n[o] = this._trimAlignValue(s[o]),
			this._change(null, o);
			this._refreshValue()
		},
		_setOption: function(e, i) {
			var n, s = 0;
			switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!i), this._super(e, i), e) {
			case "orientation":
				this._detectOrientation(),
				this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
				this._refreshValue(),
				this.handles.css("horizontal" === i ? "bottom": "left", "");
				break;
			case "value":
				this._animateOff = !0,
				this._refreshValue(),
				this._change(null, 0),
				this._animateOff = !1;
				break;
			case "values":
				for (this._animateOff = !0, this._refreshValue(), n = 0; s > n; n += 1) this._change(null, n);
				this._animateOff = !1;
				break;
			case "step":
			case "min":
			case "max":
				this._animateOff = !0,
				this._calculateNewMax(),
				this._refreshValue(),
				this._animateOff = !1;
				break;
			case "range":
				this._animateOff = !0,
				this._refresh(),
				this._animateOff = !1
			}
		},
		_value: function() {
			var t = this.options.value;
			return t = this._trimAlignValue(t)
		},
		_values: function(t) {
			var e, i, n;
			if (arguments.length) return e = this.options.values[t],
			e = this._trimAlignValue(e);
			if (this.options.values && this.options.values.length) {
				for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
				return i
			}
			return []
		},
		_trimAlignValue: function(t) {
			if (t <= this._valueMin()) return this._valueMin();
			if (t >= this._valueMax()) return this._valueMax();
			var e = this.options.step > 0 ? this.options.step: 1,
			i = (t - this._valueMin()) % e,
			n = t - i;
			return 2 * Math.abs(i) >= e && (n += i > 0 ? e: -e),
			parseFloat(n.toFixed(5))
		},
		_calculateNewMax: function() {
			var t = this.options.max,
			e = this._valueMin(),
			i = this.options.step,
			n = Math.floor( + (t - e).toFixed(this._precision()) / i) * i;
			t = n + e,
			this.max = parseFloat(t.toFixed(this._precision()))
		},
		_precision: function() {
			var t = this._precisionOf(this.options.step);
			return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
			t
		},
		_precisionOf: function(t) {
			var e = t.toString(),
			i = e.indexOf(".");
			return - 1 === i ? 0 : e.length - i - 1
		},
		_valueMin: function() {
			return this.options.min
		},
		_valueMax: function() {
			return this.max
		},
		_refreshValue: function() {
			var e, i, n, s, o, a = this.options.range,
			r = this.options,
			l = this,
			h = this._animateOff ? !1 : r.animate,
			u = {};
			this.options.values && this.options.values.length ? this.handles.each(function(n) {
				i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100,
				u["horizontal" === l.orientation ? "left": "bottom"] = i + "%",
				t(this).stop(1, 1)[h ? "animate": "css"](u, r.animate),
				l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[h ? "animate": "css"]({
					left: i + "%"
				},
				r.animate), 1 === n && l.range[h ? "animate": "css"]({
					width: i - e + "%"
				},
				{
					queue: !1,
					duration: r.animate
				})) : (0 === n && l.range.stop(1, 1)[h ? "animate": "css"]({
					bottom: i + "%"
				},
				r.animate), 1 === n && l.range[h ? "animate": "css"]({
					height: i - e + "%"
				},
				{
					queue: !1,
					duration: r.animate
				}))),
				e = i
			}) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, u["horizontal" === this.orientation ? "left": "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate": "css"](u, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate": "css"]({
				width: i + "%"
			},
			r.animate), "max" === a && "horizontal" === this.orientation && this.range[h ? "animate": "css"]({
				width: 100 - i + "%"
			},
			{
				queue: !1,
				duration: r.animate
			}), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate": "css"]({
				height: i + "%"
			},
			r.animate), "max" === a && "vertical" === this.orientation && this.range[h ? "animate": "css"]({
				height: 100 - i + "%"
			},
			{
				queue: !1,
				duration: r.animate
			}))
		},
		_handleEvents: {
			keydown: function(e) {
				var i, n, s, o, a = t(e.target).data("ui-slider-handle-index");
				switch (e.keyCode) {
				case t.ui.keyCode.HOME:
				case t.ui.keyCode.END:
				case t.ui.keyCode.PAGE_UP:
				case t.ui.keyCode.PAGE_DOWN:
				case t.ui.keyCode.UP:
				case t.ui.keyCode.RIGHT:
				case t.ui.keyCode.DOWN:
				case t.ui.keyCode.LEFT:
					if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, t(e.target).addClass("ui-state-active"), i = this._start(e, a), i === !1)) return
				}
				switch (o = this.options.step, n = s = this.options.values && this.options.values.length ? this.values(a) : this.value(), e.keyCode) {
				case t.ui.keyCode.HOME:
					s = this._valueMin();
					break;
				case t.ui.keyCode.END:
					s = this._valueMax();
					break;
				case t.ui.keyCode.PAGE_UP:
					s = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / this.numPages);
					break;
				case t.ui.keyCode.PAGE_DOWN:
					s = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / this.numPages);
					break;
				case t.ui.keyCode.UP:
				case t.ui.keyCode.RIGHT:
					if (n === this._valueMax()) return;
					s = this._trimAlignValue(n + o);
					break;
				case t.ui.keyCode.DOWN:
				case t.ui.keyCode.LEFT:
					if (n === this._valueMin()) return;
					s = this._trimAlignValue(n - o)
				}
				this._slide(e, a, s)
			},
			keyup: function(e) {
				var i = t(e.target).data("ui-slider-handle-index");
				this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
			}
		}
	})
}),
/*!
 * jQuery UI Sortable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/sortable/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], t) : t(jQuery)
} (function(t) {
	return t.widget("ui.sortable", t.ui.mouse, {
		version: "1.11.4",
		widgetEventPrefix: "sort",
		ready: !1,
		options: {
			appendTo: "parent",
			axis: !1,
			connectWith: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			dropOnEmpty: !0,
			forcePlaceholderSize: !1,
			forceHelperSize: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			items: "> *",
			opacity: !1,
			placeholder: !1,
			revert: !1,
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1e3,
			activate: null,
			beforeStop: null,
			change: null,
			deactivate: null,
			out: null,
			over: null,
			receive: null,
			remove: null,
			sort: null,
			start: null,
			stop: null,
			update: null
		},
		_isOverAxis: function(t, e, i) {
			return t >= e && e + i > t
		},
		_isFloating: function(t) {
			return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
		},
		_create: function() {
			this.containerCache = {},
			this.element.addClass("ui-sortable"),
			this.refresh(),
			this.offset = this.element.offset(),
			this._mouseInit(),
			this._setHandleClassName(),
			this.ready = !0
		},
		_setOption: function(t, e) {
			this._super(t, e),
			"handle" === t && this._setHandleClassName()
		},
		_setHandleClassName: function() {
			this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),
			t.each(this.items,
			function() { (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
			})
		},
		_destroy: function() {
			this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),
			this._mouseDestroy();
			for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
			return this
		},
		_mouseCapture: function(e, i) {
			var n = null,
			s = !1,
			o = this;
			return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
				return t.data(this, o.widgetName + "-item") === o ? (n = t(this), !1) : void 0
			}), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), n && (!this.options.handle || i || (t(this.options.handle, n).find("*").addBack().each(function() {
				this === e.target && (s = !0)
			}), s)) ? (this.currentItem = n, this._removeCurrentsFromItems(), !0) : !1)
		},
		_mouseStart: function(e, i, n) {
			var s, o, a = this.options;
			if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			},
			t.extend(this.offset, {
				click: {
					left: e.pageX - this.offset.left,
					top: e.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
				prev: this.currentItem.prev()[0],
				parent: this.currentItem.parent()[0]
			},
			this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n) for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
			return t.ui.ddmanager && (t.ui.ddmanager.current = this),
			t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
			this.dragging = !0,
			this.helper.addClass("ui-sortable-helper"),
			this._mouseDrag(e),
			!0
		},
		_mouseDrag: function(e) {
			var i, n, s, o, a = this.options,
			r = !1;
			for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed: e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed: e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) if (n = this.items[i], s = n.item[0], o = this._intersectsWithPointer(n), o && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === o ? "next": "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], s) : !0)) {
				if (this.direction = 1 === o ? "down": "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
				this._rearrange(e, n),
				this._trigger("change", e, this._uiHash());
				break
			}
			return this._contactContainers(e),
			t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
			this._trigger("sort", e, this._uiHash()),
			this.lastPositionAbs = this.positionAbs,
			!1
		},
		_mouseStop: function(e, i) {
			if (e) {
				if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
					var n = this,
					s = this.placeholder.offset(),
					o = this.options.axis,
					a = {};
					o && "x" !== o || (a.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)),
					o && "y" !== o || (a.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
					this.reverting = !0,
					t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500,
					function() {
						n._clear(e)
					})
				} else this._clear(e, i);
				return ! 1
			}
		},
		cancel: function() {
			if (this.dragging) {
				this._mouseUp({
					target: null
				}),
				"original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
				for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
				this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
			}
			return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
				helper: null,
				dragging: !1,
				reverting: !1,
				_noFinalSort: null
			}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
			this
		},
		serialize: function(e) {
			var i = this._getItemsAsjQuery(e && e.connected),
			n = [];
			return e = e || {},
			t(i).each(function() {
				var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
				i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
			}),
			!n.length && e.key && n.push(e.key + "="),
			n.join("&")
		},
		toArray: function(e) {
			var i = this._getItemsAsjQuery(e && e.connected),
			n = [];
			return e = e || {},
			i.each(function() {
				n.push(t(e.item || this).attr(e.attribute || "id") || "")
			}),
			n
		},
		_intersectsWith: function(t) {
			var e = this.positionAbs.left,
			i = e + this.helperProportions.width,
			n = this.positionAbs.top,
			s = n + this.helperProportions.height,
			o = t.left,
			a = o + t.width,
			r = t.top,
			l = r + t.height,
			h = this.offset.click.top,
			u = this.offset.click.left,
			c = "x" === this.options.axis || n + h > r && l > n + h,
			d = "y" === this.options.axis || e + u > o && a > e + u,
			p = c && d;
			return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width": "height"] > t[this.floating ? "width": "height"] ? p: o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
		},
		_intersectsWithPointer: function(t) {
			var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
			i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
			n = e && i,
			s = this._getDragVerticalDirection(),
			o = this._getDragHorizontalDirection();
			return n ? this.floating ? o && "right" === o || "down" === s ? 2 : 1 : s && ("down" === s ? 2 : 1) : !1
		},
		_intersectsWithSides: function(t) {
			var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
			i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
			n = this._getDragVerticalDirection(),
			s = this._getDragHorizontalDirection();
			return this.floating && s ? "right" === s && i || "left" === s && !i: n && ("down" === n && e || "up" === n && !e)
		},
		_getDragVerticalDirection: function() {
			var t = this.positionAbs.top - this.lastPositionAbs.top;
			return 0 !== t && (t > 0 ? "down": "up")
		},
		_getDragHorizontalDirection: function() {
			var t = this.positionAbs.left - this.lastPositionAbs.left;
			return 0 !== t && (t > 0 ? "right": "left")
		},
		refresh: function(t) {
			return this._refreshItems(t),
			this._setHandleClassName(),
			this.refreshPositions(),
			this
		},
		_connectWith: function() {
			var t = this.options;
			return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
		},
		_getItemsAsjQuery: function(e) {
			function i() {
				r.push(this)
			}
			var n, s, o, a, r = [],
			l = [],
			h = this._connectWith();
			if (h && e) for (n = h.length - 1; n >= 0; n--) for (o = t(h[n], this.document[0]), s = o.length - 1; s >= 0; s--) a = t.data(o[s], this.widgetFullName),
			a && a !== this && !a.options.disabled && l.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
			for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
				options: this.options,
				item: this.currentItem
			}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
			return t(r)
		},
		_removeCurrentsFromItems: function() {
			var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = t.grep(this.items,
			function(t) {
				for (var i = 0; i < e.length; i++) if (e[i] === t.item[0]) return ! 1;
				return ! 0
			})
		},
		_refreshItems: function(e) {
			this.items = [],
			this.containers = [this];
			var i, n, s, o, a, r, l, h, u = this.items,
			c = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
				item: this.currentItem
			}) : t(this.options.items, this.element), this]],
			d = this._connectWith();
			if (d && this.ready) for (i = d.length - 1; i >= 0; i--) for (s = t(d[i], this.document[0]), n = s.length - 1; n >= 0; n--) o = t.data(s[n], this.widgetFullName),
			o && o !== this && !o.options.disabled && (c.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
				item: this.currentItem
			}) : t(o.options.items, o.element), o]), this.containers.push(o));
			for (i = c.length - 1; i >= 0; i--) for (a = c[i][1], r = c[i][0], n = 0, h = r.length; h > n; n++) l = t(r[n]),
			l.data(this.widgetName + "-item", a),
			u.push({
				item: l,
				instance: a,
				width: 0,
				height: 0,
				left: 0,
				top: 0
			})
		},
		refreshPositions: function(e) {
			this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1,
			this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
			var i, n, s, o;
			for (i = this.items.length - 1; i >= 0; i--) n = this.items[i],
			n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
			if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
			else for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(),
			this.containers[i].containerCache.left = o.left,
			this.containers[i].containerCache.top = o.top,
			this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
			this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
			return this
		},
		_createPlaceholder: function(e) {
			e = e || this;
			var i, n = e.options;
			n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
				element: function() {
					var n = e.currentItem[0].nodeName.toLowerCase(),
					s = t("<" + n + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
					return "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, s) : "img" === n && s.attr("src", e.currentItem.attr("src")),
					i || s.css("visibility", "hidden"),
					s
				},
				update: function(t, s) { (!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
				}
			}),
			e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)),
			e.currentItem.after(e.placeholder),
			n.placeholder.update(e, e.placeholder)
		},
		_createTrPlaceholder: function(e, i) {
			var n = this;
			e.children().each(function() {
				t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
			})
		},
		_contactContainers: function(e) {
			var i, n, s, o, a, r, l, h, u, c, d = null,
			p = null;
			for (i = this.containers.length - 1; i >= 0; i--) if (!t.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
				if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
				d = this.containers[i],
				p = i
			} else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
			if (d) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
			else {
				for (s = 1e4, o = null, u = d.floating || this._isFloating(this.currentItem), a = u ? "left": "top", r = u ? "width": "height", c = u ? "clientX": "clientY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[a], h = !1, e[c] - l > this.items[n][r] / 2 && (h = !0), Math.abs(e[c] - l) < s && (s = Math.abs(e[c] - l), o = this.items[n], this.direction = h ? "up": "down"));
				if (!o && !this.options.dropOnEmpty) return;
				if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
				o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0),
				this._trigger("change", e, this._uiHash()),
				this.containers[p]._trigger("change", e, this._uiHash(this)),
				this.currentContainer = this.containers[p],
				this.options.placeholder.update(this.currentContainer, this.placeholder),
				this.containers[p]._trigger("over", e, this._uiHash(this)),
				this.containers[p].containerCache.over = 1
			}
		},
		_createHelper: function(e) {
			var i = this.options,
			n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
			return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo: this.currentItem[0].parentNode)[0].appendChild(n[0]),
			n[0] === this.currentItem[0] && (this._storedCSS = {
				width: this.currentItem[0].style.width,
				height: this.currentItem[0].style.height,
				position: this.currentItem.css("position"),
				top: this.currentItem.css("top"),
				left: this.currentItem.css("left")
			}),
			(!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()),
			(!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()),
			n
		},
		_adjustOffsetFromHelper: function(e) {
			"string" == typeof e && (e = e.split(" ")),
			t.isArray(e) && (e = {
				left: +e[0],
				top: +e[1] || 0
			}),
			"left" in e && (this.offset.click.left = e.left + this.margins.left),
			"right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
			"top" in e && (this.offset.click.top = e.top + this.margins.top),
			"bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_getParentOffset: function() {
			this.offsetParent = this.helper.offsetParent();
			var e = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()),
			(this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
				top: 0,
				left: 0
			}),
			{
				top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if ("relative" === this.cssPosition) {
				var t = this.currentItem.position();
				return {
					top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
				top: parseInt(this.currentItem.css("marginTop"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var e, i, n, s = this.options;
			"parent" === s.containment && (s.containment = this.helper[0].parentNode),
			("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
			/^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
		},
		_convertPositionTo: function(e, i) {
			i || (i = this.position);
			var n = "absolute" === e ? 1 : -1,
			s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
			o = /(html|body)/i.test(s[0].tagName);
			return {
				top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
				left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
			}
		},
		_generatePosition: function(e) {
			var i, n, s = this.options,
			o = e.pageX,
			a = e.pageY,
			r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
			l = /(html|body)/i.test(r[0].tagName);
			return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
			this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i: i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n: n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)),
			{
				top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
				left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
			}
		},
		_rearrange: function(t, e, i, n) {
			i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
			this.counter = this.counter ? ++this.counter: 1;
			var s = this.counter;
			this._delay(function() {
				s === this.counter && this.refreshPositions(!n)
			})
		},
		_clear: function(t, e) {
			function i(t, e, i) {
				return function(n) {
					i._trigger(t, n, e._uiHash(e))
				}
			}
			this.reverting = !1;
			var n, s = [];
			if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
				for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
			} else this.currentItem.show();
			for (this.fromOutside && !e && s.push(function(t) {
				this._trigger("receive", t, this._uiHash(this.fromOutside))
			}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
				this._trigger("update", t, this._uiHash())
			}), this !== this.currentContainer && (e || (s.push(function(t) {
				this._trigger("remove", t, this._uiHash())
			}), s.push(function(t) {
				return function(e) {
					t._trigger("receive", e, this._uiHash(this))
				}
			}.call(this, this.currentContainer)), s.push(function(t) {
				return function(e) {
					t._trigger("update", e, this._uiHash(this))
				}
			}.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])),
			this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
			if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "": this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
				for (n = 0; n < s.length; n++) s[n].call(this, t);
				this._trigger("stop", t, this._uiHash())
			}
			return this.fromOutside = !1,
			!this.cancelHelperRemoval
		},
		_trigger: function() {
			t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
		},
		_uiHash: function(e) {
			var i = e || this;
			return {
				helper: i.helper,
				placeholder: i.placeholder || t([]),
				position: i.position,
				originalPosition: i.originalPosition,
				offset: i.positionAbs,
				item: i.currentItem,
				sender: e ? e.element: null
			}
		}
	})
}),
/*!
 * jQuery UI Spinner 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/spinner/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./button"], t) : t(jQuery)
} (function(t) {
	function e(t) {
		return function() {
			var e = this.element.val();
			t.apply(this, arguments),
			this._refresh(),
			e !== this.element.val() && this._trigger("change")
		}
	}
	return t.widget("ui.spinner", {
		version: "1.11.4",
		defaultElement: "<input>",
		widgetEventPrefix: "spin",
		options: {
			culture: null,
			icons: {
				down: "ui-icon-triangle-1-s",
				up: "ui-icon-triangle-1-n"
			},
			incremental: !0,
			max: null,
			min: null,
			numberFormat: null,
			page: 10,
			step: 1,
			change: null,
			spin: null,
			start: null,
			stop: null
		},
		_create: function() {
			this._setOption("max", this.options.max),
			this._setOption("min", this.options.min),
			this._setOption("step", this.options.step),
			"" !== this.value() && this._value(this.element.val(), !0),
			this._draw(),
			this._on(this._events),
			this._refresh(),
			this._on(this.window, {
				beforeunload: function() {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_getCreateOptions: function() {
			var e = {},
			i = this.element;
			return t.each(["min", "max", "step"],
			function(t, n) {
				var s = i.attr(n);
				void 0 !== s && s.length && (e[n] = s)
			}),
			e
		},
		_events: {
			keydown: function(t) {
				this._start(t) && this._keydown(t) && t.preventDefault()
			},
			keyup: "_stop",
			focus: function() {
				this.previous = this.element.val()
			},
			blur: function(t) {
				return this.cancelBlur ? void delete this.cancelBlur: (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
			},
			mousewheel: function(t, e) {
				if (e) {
					if (!this.spinning && !this._start(t)) return ! 1;
					this._spin((e > 0 ? 1 : -1) * this.options.step, t),
					clearTimeout(this.mousewheelTimer),
					this.mousewheelTimer = this._delay(function() {
						this.spinning && this._stop(t)
					},
					100),
					t.preventDefault()
				}
			},
			"mousedown .ui-spinner-button": function(e) {
				function i() {
					var t = this.element[0] === this.document[0].activeElement;
					t || (this.element.focus(), this.previous = n, this._delay(function() {
						this.previous = n
					}))
				}
				var n;
				n = this.element[0] === this.document[0].activeElement ? this.previous: this.element.val(),
				e.preventDefault(),
				i.call(this),
				this.cancelBlur = !0,
				this._delay(function() {
					delete this.cancelBlur,
					i.call(this)
				}),
				this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
			},
			"mouseup .ui-spinner-button": "_stop",
			"mouseenter .ui-spinner-button": function(e) {
				return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
			},
			"mouseleave .ui-spinner-button": "_stop"
		},
		_draw: function() {
			var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
			this.element.attr("role", "spinbutton"),
			this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"),
			this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()),
			this.options.disabled && this.disable()
		},
		_keydown: function(e) {
			var i = this.options,
			n = t.ui.keyCode;
			switch (e.keyCode) {
			case n.UP:
				return this._repeat(null, 1, e),
				!0;
			case n.DOWN:
				return this._repeat(null, -1, e),
				!0;
			case n.PAGE_UP:
				return this._repeat(null, i.page, e),
				!0;
			case n.PAGE_DOWN:
				return this._repeat(null, -i.page, e),
				!0
			}
			return ! 1
		},
		_uiSpinnerHtml: function() {
			return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
		},
		_buttonHtml: function() {
			return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
		},
		_start: function(t) {
			return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
		},
		_repeat: function(t, e, i) {
			t = t || 500,
			clearTimeout(this.timer),
			this.timer = this._delay(function() {
				this._repeat(40, e, i)
			},
			t),
			this._spin(e * this.options.step, i)
		},
		_spin: function(t, e) {
			var i = this.value() || 0;
			this.counter || (this.counter = 1),
			i = this._adjustValue(i + t * this._increment(this.counter)),
			this.spinning && this._trigger("spin", e, {
				value: i
			}) === !1 || (this._value(i), this.counter++)
		},
		_increment: function(e) {
			var i = this.options.incremental;
			return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
		},
		_precision: function() {
			var t = this._precisionOf(this.options.step);
			return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
			t
		},
		_precisionOf: function(t) {
			var e = t.toString(),
			i = e.indexOf(".");
			return - 1 === i ? 0 : e.length - i - 1
		},
		_adjustValue: function(t) {
			var e, i, n = this.options;
			return e = null !== n.min ? n.min: 0,
			i = t - e,
			i = Math.round(i / n.step) * n.step,
			t = e + i,
			t = parseFloat(t.toFixed(this._precision())),
			null !== n.max && t > n.max ? n.max: null !== n.min && t < n.min ? n.min: t
		},
		_stop: function(t) {
			this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
		},
		_setOption: function(t, e) {
			if ("culture" === t || "numberFormat" === t) {
				var i = this._parse(this.element.val());
				return this.options[t] = e,
				void this.element.val(this._format(i))
			} ("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)),
			"icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),
			this._super(t, e),
			"disabled" === t && (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), this.buttons.button(e ? "disable": "enable"))
		},
		_setOptions: e(function(t) {
			this._super(t)
		}),
		_parse: function(t) {
			return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t),
			"" === t || isNaN(t) ? null: t
		},
		_format: function(t) {
			return "" === t ? "": window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
		},
		_refresh: function() {
			this.element.attr({
				"aria-valuemin": this.options.min,
				"aria-valuemax": this.options.max,
				"aria-valuenow": this._parse(this.element.val())
			})
		},
		isValid: function() {
			var t = this.value();
			return null === t ? !1 : t === this._adjustValue(t)
		},
		_value: function(t, e) {
			var i;
			"" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))),
			this.element.val(t),
			this._refresh()
		},
		_destroy: function() {
			this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
			this.uiSpinner.replaceWith(this.element)
		},
		stepUp: e(function(t) {
			this._stepUp(t)
		}),
		_stepUp: function(t) {
			this._start() && (this._spin((t || 1) * this.options.step), this._stop())
		},
		stepDown: e(function(t) {
			this._stepDown(t)
		}),
		_stepDown: function(t) {
			this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
		},
		pageUp: e(function(t) {
			this._stepUp((t || 1) * this.options.page)
		}),
		pageDown: e(function(t) {
			this._stepDown((t || 1) * this.options.page)
		}),
		value: function(t) {
			return arguments.length ? void e(this._value).call(this, t) : this._parse(this.element.val())
		},
		widget: function() {
			return this.uiSpinner
		}
	})
}),
/*!
 * jQuery UI Tabs 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tabs/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], t) : t(jQuery)
} (function(t) {
	return t.widget("ui.tabs", {
		version: "1.11.4",
		delay: 300,
		options: {
			active: null,
			collapsible: !1,
			event: "click",
			heightStyle: "content",
			hide: null,
			show: null,
			activate: null,
			beforeActivate: null,
			beforeLoad: null,
			load: null
		},
		_isLocal: function() {
			var t = /#.*$/;
			return function(e) {
				var i, n;
				e = e.cloneNode(!1),
				i = e.href.replace(t, ""),
				n = location.href.replace(t, "");
				try {
					i = decodeURIComponent(i)
				} catch(s) {}
				try {
					n = decodeURIComponent(n)
				} catch(s) {}
				return e.hash.length > 1 && i === n
			}
		} (),
		_create: function() {
			var e = this,
			i = this.options;
			this.running = !1,
			this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible),
			this._processTabs(),
			i.active = this._initialActive(),
			t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),
			function(t) {
				return e.tabs.index(t)
			}))).sort()),
			this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(),
			this._refresh(),
			this.active.length && this.load(i.active)
		},
		_initialActive: function() {
			var e = this.options.active,
			i = this.options.collapsible,
			n = location.hash.substring(1);
			return null === e && (n && this.tabs.each(function(i, s) {
				return t(s).attr("aria-controls") === n ? (e = i, !1) : void 0
			}), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)),
			e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)),
			!i && e === !1 && this.anchors.length && (e = 0),
			e
		},
		_getCreateEventData: function() {
			return {
				tab: this.active,
				panel: this.active.length ? this._getPanelForTab(this.active) : t()
			}
		},
		_tabKeydown: function(e) {
			var i = t(this.document[0].activeElement).closest("li"),
			n = this.tabs.index(i),
			s = !0;
			if (!this._handlePageNav(e)) {
				switch (e.keyCode) {
				case t.ui.keyCode.RIGHT:
				case t.ui.keyCode.DOWN:
					n++;
					break;
				case t.ui.keyCode.UP:
				case t.ui.keyCode.LEFT:
					s = !1,
					n--;
					break;
				case t.ui.keyCode.END:
					n = this.anchors.length - 1;
					break;
				case t.ui.keyCode.HOME:
					n = 0;
					break;
				case t.ui.keyCode.SPACE:
					return e.preventDefault(),
					clearTimeout(this.activating),
					void this._activate(n);
				case t.ui.keyCode.ENTER:
					return e.preventDefault(),
					clearTimeout(this.activating),
					void this._activate(n === this.options.active ? !1 : n);
				default:
					return
				}
				e.preventDefault(),
				clearTimeout(this.activating),
				n = this._focusNextTab(n, s),
				e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
					this.option("active", n)
				},
				this.delay))
			}
		},
		_panelKeydown: function(e) {
			this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
		},
		_handlePageNav: function(e) {
			return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
		},
		_findNextTab: function(e, i) {
			function n() {
				return e > s && (e = 0),
				0 > e && (e = s),
				e
			}
			for (var s = this.tabs.length - 1; - 1 !== t.inArray(n(), this.options.disabled);) e = i ? e + 1 : e - 1;
			return e
		},
		_focusNextTab: function(t, e) {
			return t = this._findNextTab(t, e),
			this.tabs.eq(t).focus(),
			t
		},
		_setOption: function(t, e) {
			return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
		},
		_sanitizeSelector: function(t) {
			return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
		},
		refresh: function() {
			var e = this.options,
			i = this.tablist.children(":has(a[href])");
			e.disabled = t.map(i.filter(".ui-state-disabled"),
			function(t) {
				return i.index(t)
			}),
			this._processTabs(),
			e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()),
			this._refresh()
		},
		_refresh: function() {
			this._setupDisabled(this.options.disabled),
			this._setupEvents(this.options.event),
			this._setupHeightStyle(this.options.heightStyle),
			this.tabs.not(this.active).attr({
				"aria-selected": "false",
				"aria-expanded": "false",
				tabIndex: -1
			}),
			this.panels.not(this._getPanelForTab(this.active)).hide().attr({
				"aria-hidden": "true"
			}),
			this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			}), this._getPanelForTab(this.active).show().attr({
				"aria-hidden": "false"
			})) : this.tabs.eq(0).attr("tabIndex", 0)
		},
		_processTabs: function() {
			var e = this,
			i = this.tabs,
			n = this.anchors,
			s = this.panels;
			this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace,
			function(e) {
				t(this).is(".ui-state-disabled") && e.preventDefault()
			}).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace,
			function() {
				t(this).closest("li").is(".ui-state-disabled") && this.blur()
			}),
			this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
				role: "tab",
				tabIndex: -1
			}),
			this.anchors = this.tabs.map(function() {
				return t("a", this)[0]
			}).addClass("ui-tabs-anchor").attr({
				role: "presentation",
				tabIndex: -1
			}),
			this.panels = t(),
			this.anchors.each(function(i, n) {
				var s, o, a, r = t(n).uniqueId().attr("id"),
				l = t(n).closest("li"),
				h = l.attr("aria-controls");
				e._isLocal(n) ? (s = n.hash, a = s.substring(1), o = e.element.find(e._sanitizeSelector(s))) : (a = l.attr("aria-controls") || t({}).uniqueId()[0].id, s = "#" + a, o = e.element.find(s), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")),
				o.length && (e.panels = e.panels.add(o)),
				h && l.data("ui-tabs-aria-controls", h),
				l.attr({
					"aria-controls": a,
					"aria-labelledby": r
				}),
				o.attr("aria-labelledby", r)
			}),
			this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"),
			i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)))
		},
		_getList: function() {
			return this.tablist || this.element.find("ol,ul").eq(0)
		},
		_createPanel: function(e) {
			return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
		},
		_setupDisabled: function(e) {
			t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
			for (var i, n = 0; i = this.tabs[n]; n++) e === !0 || -1 !== t.inArray(n, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
			this.options.disabled = e
		},
		_setupEvents: function(e) {
			var i = {};
			e && t.each(e.split(" "),
			function(t, e) {
				i[e] = "_eventHandler"
			}),
			this._off(this.anchors.add(this.tabs).add(this.panels)),
			this._on(!0, this.anchors, {
				click: function(t) {
					t.preventDefault()
				}
			}),
			this._on(this.anchors, i),
			this._on(this.tabs, {
				keydown: "_tabKeydown"
			}),
			this._on(this.panels, {
				keydown: "_panelKeydown"
			}),
			this._focusable(this.tabs),
			this._hoverable(this.tabs)
		},
		_setupHeightStyle: function(e) {
			var i, n = this.element.parent();
			"fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
				var e = t(this),
				n = e.css("position");
				"absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
			}), this.element.children().not(this.panels).each(function() {
				i -= t(this).outerHeight(!0)
			}), this.panels.each(function() {
				t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
			}).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
				i = Math.max(i, t(this).height("").height())
			}).height(i))
		},
		_eventHandler: function(e) {
			var i = this.options,
			n = this.active,
			s = t(e.currentTarget),
			o = s.closest("li"),
			a = o[0] === n[0],
			r = a && i.collapsible,
			l = r ? t() : this._getPanelForTab(o),
			h = n.length ? this._getPanelForTab(n) : t(),
			u = {
				oldTab: n,
				oldPanel: h,
				newTab: r ? t() : o,
				newPanel: l
			};
			e.preventDefault(),
			o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, u) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), h.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, u))
		},
		_toggle: function(e, i) {
			function n() {
				o.running = !1,
				o._trigger("activate", e, i)
			}
			function s() {
				i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
				a.length && o.options.show ? o._show(a, o.options.show, n) : (a.show(), n())
			}
			var o = this,
			a = i.newPanel,
			r = i.oldPanel;
			this.running = !0,
			r.length && this.options.hide ? this._hide(r, this.options.hide,
			function() {
				i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
				s()
			}) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), s()),
			r.attr("aria-hidden", "true"),
			i.oldTab.attr({
				"aria-selected": "false",
				"aria-expanded": "false"
			}),
			a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
				return 0 === t(this).attr("tabIndex")
			}).attr("tabIndex", -1),
			a.attr("aria-hidden", "false"),
			i.newTab.attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			})
		},
		_activate: function(e) {
			var i, n = this._findActive(e);
			n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: t.noop
			}))
		},
		_findActive: function(e) {
			return e === !1 ? t() : this.tabs.eq(e)
		},
		_getIndex: function(t) {
			return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))),
			t
		},
		_destroy: function() {
			this.xhr && this.xhr.abort(),
			this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),
			this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),
			this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),
			this.tablist.unbind(this.eventNamespace),
			this.tabs.add(this.panels).each(function() {
				t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
			}),
			this.tabs.each(function() {
				var e = t(this),
				i = e.data("ui-tabs-aria-controls");
				i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
			}),
			this.panels.show(),
			"content" !== this.options.heightStyle && this.panels.css("height", "")
		},
		enable: function(e) {
			var i = this.options.disabled;
			i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i,
			function(t) {
				return t !== e ? t: null
			}) : t.map(this.tabs,
			function(t, i) {
				return i !== e ? i: null
			})), this._setupDisabled(i))
		},
		disable: function(e) {
			var i = this.options.disabled;
			if (i !== !0) {
				if (void 0 === e) i = !0;
				else {
					if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
					i = t.isArray(i) ? t.merge([e], i).sort() : [e]
				}
				this._setupDisabled(i)
			}
		},
		load: function(e, i) {
			e = this._getIndex(e);
			var n = this,
			s = this.tabs.eq(e),
			o = s.find(".ui-tabs-anchor"),
			a = this._getPanelForTab(s),
			r = {
				tab: s,
				panel: a
			},
			l = function(t, e) {
				"abort" === e && n.panels.stop(!1, !0),
				s.removeClass("ui-tabs-loading"),
				a.removeAttr("aria-busy"),
				t === n.xhr && delete n.xhr
			};
			this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (s.addClass("ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function(t, e, s) {
				setTimeout(function() {
					a.html(t),
					n._trigger("load", i, r),
					l(s, e)
				},
				1)
			}).fail(function(t, e) {
				setTimeout(function() {
					l(t, e)
				},
				1)
			})))
		},
		_ajaxSettings: function(e, i, n) {
			var s = this;
			return {
				url: e.attr("href"),
				beforeSend: function(e, o) {
					return s._trigger("beforeLoad", i, t.extend({
						jqXHR: e,
						ajaxSettings: o
					},
					n))
				}
			}
		},
		_getPanelForTab: function(e) {
			var i = t(e).attr("aria-controls");
			return this.element.find(this._sanitizeSelector("#" + i))
		}
	})
}),
/*!
 * jQuery UI Tooltip 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tooltip/
 */
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./position"], t) : t(jQuery)
} (function(t) {
	return t.widget("ui.tooltip", {
		version: "1.11.4",
		options: {
			content: function() {
				var e = t(this).attr("title") || "";
				return t("<a>").text(e).html()
			},
			hide: !0,
			items: "[title]:not([disabled])",
			position: {
				my: "left top+15",
				at: "left bottom",
				collision: "flipfit flip"
			},
			show: !0,
			tooltipClass: null,
			track: !1,
			close: null,
			open: null
		},
		_addDescribedBy: function(e, i) {
			var n = (e.attr("aria-describedby") || "").split(/\s+/);
			n.push(i),
			e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
		},
		_removeDescribedBy: function(e) {
			var i = e.data("ui-tooltip-id"),
			n = (e.attr("aria-describedby") || "").split(/\s+/),
			s = t.inArray(i, n); - 1 !== s && n.splice(s, 1),
			e.removeData("ui-tooltip-id"),
			n = t.trim(n.join(" ")),
			n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
		},
		_create: function() {
			this._on({
				mouseover: "open",
				focusin: "open"
			}),
			this.tooltips = {},
			this.parents = {},
			this.options.disabled && this._disable(),
			this.liveRegion = t("<div>").attr({
				role: "log",
				"aria-live": "assertive",
				"aria-relevant": "additions"
			}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
		},
		_setOption: function(e, i) {
			var n = this;
			return "disabled" === e ? (this[i ? "_disable": "_enable"](), void(this.options[e] = i)) : (this._super(e, i), void("content" === e && t.each(this.tooltips,
			function(t, e) {
				n._updateContent(e.element)
			})))
		},
		_disable: function() {
			var e = this;
			t.each(this.tooltips,
			function(i, n) {
				var s = t.Event("blur");
				s.target = s.currentTarget = n.element[0],
				e.close(s, !0)
			}),
			this.element.find(this.options.items).addBack().each(function() {
				var e = t(this);
				e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).removeAttr("title")
			})
		},
		_enable: function() {
			this.element.find(this.options.items).addBack().each(function() {
				var e = t(this);
				e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
			})
		},
		open: function(e) {
			var i = this,
			n = t(e ? e.target: this.element).closest(this.options.items);
			n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function() {
				var e, n = t(this);
				n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)),
				n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
					element: this,
					title: n.attr("title")
				},
				n.attr("title", ""))
			}), this._registerCloseHandlers(e, n), this._updateContent(n, e))
		},
		_updateContent: function(t, e) {
			var i, n = this.options.content,
			s = this,
			o = e ? e.type: null;
			return "string" == typeof n ? this._open(e, t, n) : (i = n.call(t[0],
			function(i) {
				s._delay(function() {
					t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
				})
			}), void(i && this._open(e, t, i)))
		},
		_open: function(e, i, n) {
			function s(t) {
				h.of = t,
				a.is(":hidden") || a.position(h)
			}
			var o, a, r, l, h = t.extend({},
			this.options.position);
			if (n) {
				if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(n);
				i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")),
				o = this._tooltip(i),
				a = o.tooltip,
				this._addDescribedBy(i, a.attr("id")),
				a.find(".ui-tooltip-content").html(n),
				this.liveRegion.children().hide(),
				n.clone ? (l = n.clone(), l.removeAttr("id").find("[id]").removeAttr("id")) : l = n,
				t("<div>").html(l).appendTo(this.liveRegion),
				this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
					mousemove: s
				}), s(e)) : a.position(t.extend({
					of: i
				},
				this.options.position)),
				a.hide(),
				this._show(a, this.options.show),
				this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
					a.is(":visible") && (s(h.of), clearInterval(r))
				},
				t.fx.interval)),
				this._trigger("open", e, {
					tooltip: a
				})
			}
		},
		_registerCloseHandlers: function(e, i) {
			var n = {
				keyup: function(e) {
					if (e.keyCode === t.ui.keyCode.ESCAPE) {
						var n = t.Event(e);
						n.currentTarget = i[0],
						this.close(n, !0)
					}
				}
			};
			i[0] !== this.element[0] && (n.remove = function() {
				this._removeTooltip(this._find(i).tooltip)
			}),
			e && "mouseover" !== e.type || (n.mouseleave = "close"),
			e && "focusin" !== e.type || (n.focusout = "close"),
			this._on(!0, i, n)
		},
		close: function(e) {
			var i, n = this,
			s = t(e ? e.currentTarget: this.element),
			o = this._find(s);
			return o ? (i = o.tooltip, void(o.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide,
			function() {
				n._removeTooltip(t(this))
			}), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents,
			function(e, i) {
				t(i.element).attr("title", i.title),
				delete n.parents[e]
			}), o.closing = !0, this._trigger("close", e, {
				tooltip: i
			}), o.hiding || (o.closing = !1)))) : void s.removeData("ui-tooltip-open")
		},
		_tooltip: function(e) {
			var i = t("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
			n = i.uniqueId().attr("id");
			return t("<div>").addClass("ui-tooltip-content").appendTo(i),
			i.appendTo(this.document[0].body),
			this.tooltips[n] = {
				element: e,
				tooltip: i
			}
		},
		_find: function(t) {
			var e = t.data("ui-tooltip-id");
			return e ? this.tooltips[e] : null
		},
		_removeTooltip: function(t) {
			t.remove(),
			delete this.tooltips[t.attr("id")]
		},
		_destroy: function() {
			var e = this;
			t.each(this.tooltips,
			function(i, n) {
				var s = t.Event("blur"),
				o = n.element;
				s.target = s.currentTarget = o[0],
				e.close(s, !0),
				t("#" + i).remove(),
				o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
			}),
			this.liveRegion.remove()
		}
	})
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +
function(t) {
	"use strict";
	var e = t.fn.jquery.split(" ")[0].split(".");
	if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
} (jQuery),
/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+
function(t) {
	"use strict";
	function e() {
		var t = document.createElement("bootstrap"),
		e = {
			WebkitTransition: "webkitTransitionEnd",
			MozTransition: "transitionend",
			OTransition: "oTransitionEnd otransitionend",
			transition: "transitionend"
		};
		for (var i in e) if (void 0 !== t.style[i]) return {
			end: e[i]
		};
		return ! 1
	}
	t.fn.emulateTransitionEnd = function(e) {
		var i = !1,
		n = this;
		t(this).one("bsTransitionEnd",
		function() {
			i = !0
		});
		var s = function() {
			i || t(n).trigger(t.support.transition.end)
		};
		return setTimeout(s, e),
		this
	},
	t(function() {
		t.support.transition = e(),
		t.support.transition && (t.event.special.bsTransitionEnd = {
			bindType: t.support.transition.end,
			delegateType: t.support.transition.end,
			handle: function(e) {
				return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
} (jQuery),
/* ========================================================================
 * Bootstrap: alert.js v3.3.5
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+
function(t) {
	"use strict";
	function e(e) {
		return this.each(function() {
			var i = t(this),
			s = i.data("bs.alert");
			s || i.data("bs.alert", s = new n(this)),
			"string" == typeof e && s[e].call(i)
		})
	}
	var i = '[data-dismiss="alert"]',
	n = function(e) {
		t(e).on("click", i, this.close)
	};
	n.VERSION = "3.3.5",
	n.TRANSITION_DURATION = 150,
	n.prototype.close = function(e) {
		function i() {
			a.detach().trigger("closed.bs.alert").remove()
		}
		var s = t(this),
		o = s.attr("data-target");
		o || (o = s.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
		var a = t(o);
		e && e.preventDefault(),
		a.length || (a = s.closest(".alert")),
		a.trigger(e = t.Event("close.bs.alert")),
		e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
	};
	var s = t.fn.alert;
	t.fn.alert = e,
	t.fn.alert.Constructor = n,
	t.fn.alert.noConflict = function() {
		return t.fn.alert = s,
		this
	},
	t(document).on("click.bs.alert.data-api", i, n.prototype.close)
} (jQuery),
/* ========================================================================
 * Bootstrap: button.js v3.3.5
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+
function(t) {
	"use strict";
	function e(e) {
		return this.each(function() {
			var n = t(this),
			s = n.data("bs.button"),
			o = "object" == typeof e && e;
			s || n.data("bs.button", s = new i(this, o)),
			"toggle" == e ? s.toggle() : e && s.setState(e)
		})
	}
	var i = function(e, n) {
		this.$element = t(e),
		this.options = t.extend({},
		i.DEFAULTS, n),
		this.isLoading = !1
	};
	i.VERSION = "3.3.5",
	i.DEFAULTS = {
		loadingText: "loading..."
	},
	i.prototype.setState = function(e) {
		var i = "disabled",
		n = this.$element,
		s = n.is("input") ? "val": "html",
		o = n.data();
		e += "Text",
		null == o.resetText && n.data("resetText", n[s]()),
		setTimeout(t.proxy(function() {
			n[s](null == o[e] ? this.options[e] : o[e]),
			"loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
		},
		this), 0)
	},
	i.prototype.toggle = function() {
		var t = !0,
		e = this.$element.closest('[data-toggle="buttons"]');
		if (e.length) {
			var i = this.$element.find("input");
			"radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")),
			i.prop("checked", this.$element.hasClass("active")),
			t && i.trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
		this.$element.toggleClass("active")
	};
	var n = t.fn.button;
	t.fn.button = e,
	t.fn.button.Constructor = i,
	t.fn.button.noConflict = function() {
		return t.fn.button = n,
		this
	},
	t(document).on("click.bs.button.data-api", '[data-toggle^="button"]',
	function(i) {
		var n = t(i.target);
		n.hasClass("btn") || (n = n.closest(".btn")),
		e.call(n, "toggle"),
		t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]',
	function(e) {
		t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
	})
} (jQuery),
/* ========================================================================
 * Bootstrap: carousel.js v3.3.5
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+
function(t) {
	"use strict";
	function e(e) {
		return this.each(function() {
			var n = t(this),
			s = n.data("bs.carousel"),
			o = t.extend({},
			i.DEFAULTS, n.data(), "object" == typeof e && e),
			a = "string" == typeof e ? e: o.slide;
			s || n.data("bs.carousel", s = new i(this, o)),
			"number" == typeof e ? s.to(e) : a ? s[a]() : o.interval && s.pause().cycle()
		})
	}
	var i = function(e, i) {
		this.$element = t(e),
		this.$indicators = this.$element.find(".carousel-indicators"),
		this.options = i,
		this.paused = null,
		this.sliding = null,
		this.interval = null,
		this.$active = null,
		this.$items = null,
		this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
		"hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
	};
	i.VERSION = "3.3.5",
	i.TRANSITION_DURATION = 600,
	i.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	},
	i.prototype.keydown = function(t) {
		if (!/input|textarea/i.test(t.target.tagName)) {
			switch (t.which) {
			case 37:
				this.prev();
				break;
			case 39:
				this.next();
				break;
			default:
				return
			}
			t.preventDefault()
		}
	},
	i.prototype.cycle = function(e) {
		return e || (this.paused = !1),
		this.interval && clearInterval(this.interval),
		this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
		this
	},
	i.prototype.getItemIndex = function(t) {
		return this.$items = t.parent().children(".item"),
		this.$items.index(t || this.$active)
	},
	i.prototype.getItemForDirection = function(t, e) {
		var i = this.getItemIndex(e),
		n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
		if (n && !this.options.wrap) return e;
		var s = "prev" == t ? -1 : 1,
		o = (i + s) % this.$items.length;
		return this.$items.eq(o)
	},
	i.prototype.to = function(t) {
		var e = this,
		i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel",
		function() {
			e.to(t)
		}) : i == t ? this.pause().cycle() : this.slide(t > i ? "next": "prev", this.$items.eq(t))
	},
	i.prototype.pause = function(e) {
		return e || (this.paused = !0),
		this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
		this.interval = clearInterval(this.interval),
		this
	},
	i.prototype.next = function() {
		return this.sliding ? void 0 : this.slide("next")
	},
	i.prototype.prev = function() {
		return this.sliding ? void 0 : this.slide("prev")
	},
	i.prototype.slide = function(e, n) {
		var s = this.$element.find(".item.active"),
		o = n || this.getItemForDirection(e, s),
		a = this.interval,
		r = "next" == e ? "left": "right",
		l = this;
		if (o.hasClass("active")) return this.sliding = !1;
		var h = o[0],
		u = t.Event("slide.bs.carousel", {
			relatedTarget: h,
			direction: r
		});
		if (this.$element.trigger(u), !u.isDefaultPrevented()) {
			if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var c = t(this.$indicators.children()[this.getItemIndex(o)]);
				c && c.addClass("active")
			}
			var d = t.Event("slid.bs.carousel", {
				relatedTarget: h,
				direction: r
			});
			return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, s.addClass(r), o.addClass(r), s.one("bsTransitionEnd",
			function() {
				o.removeClass([e, r].join(" ")).addClass("active"),
				s.removeClass(["active", r].join(" ")),
				l.sliding = !1,
				setTimeout(function() {
					l.$element.trigger(d)
				},
				0)
			}).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)),
			a && this.cycle(),
			this
		}
	};
	var n = t.fn.carousel;
	t.fn.carousel = e,
	t.fn.carousel.Constructor = i,
	t.fn.carousel.noConflict = function() {
		return t.fn.carousel = n,
		this
	};
	var s = function(i) {
		var n, s = t(this),
		o = t(s.attr("data-target") || (n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
		if (o.hasClass("carousel")) {
			var a = t.extend({},
			o.data(), s.data()),
			r = s.attr("data-slide-to");
			r && (a.interval = !1),
			e.call(o, a),
			r && o.data("bs.carousel").to(r),
			i.preventDefault()
		}
	};
	t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s),
	t(window).on("load",
	function() {
		t('[data-ride="carousel"]').each(function() {
			var i = t(this);
			e.call(i, i.data())
		})
	})
} (jQuery),
/* ========================================================================
 * Bootstrap: collapse.js v3.3.5
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+
function(t) {
	"use strict";
	function e(e) {
		var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
		return t(n)
	}
	function i(e) {
		return this.each(function() {
			var i = t(this),
			s = i.data("bs.collapse"),
			o = t.extend({},
			n.DEFAULTS, i.data(), "object" == typeof e && e); ! s && o.toggle && /show|hide/.test(e) && (o.toggle = !1),
			s || i.data("bs.collapse", s = new n(this, o)),
			"string" == typeof e && s[e]()
		})
	}
	var n = function(e, i) {
		this.$element = t(e),
		this.options = t.extend({},
		n.DEFAULTS, i),
		this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
		this.transitioning = null,
		this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
		this.options.toggle && this.toggle()
	};
	n.VERSION = "3.3.5",
	n.TRANSITION_DURATION = 350,
	n.DEFAULTS = {
		toggle: !0
	},
	n.prototype.dimension = function() {
		var t = this.$element.hasClass("width");
		return t ? "width": "height"
	},
	n.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var e, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (! (s && s.length && (e = s.data("bs.collapse"), e && e.transitioning))) {
				var o = t.Event("show.bs.collapse");
				if (this.$element.trigger(o), !o.isDefaultPrevented()) {
					s && s.length && (i.call(s, "hide"), e || s.data("bs.collapse", null));
					var a = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0),
					this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
					this.transitioning = 1;
					var r = function() {
						this.$element.removeClass("collapsing").addClass("collapse in")[a](""),
						this.transitioning = 0,
						this.$element.trigger("shown.bs.collapse")
					};
					if (!t.support.transition) return r.call(this);
					var l = t.camelCase(["scroll", a].join("-"));
					this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[a](this.$element[0][l])
				}
			}
		}
	},
	n.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var e = t.Event("hide.bs.collapse");
			if (this.$element.trigger(e), !e.isDefaultPrevented()) {
				var i = this.dimension();
				this.$element[i](this.$element[i]())[0].offsetHeight,
				this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
				this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
				this.transitioning = 1;
				var s = function() {
					this.transitioning = 0,
					this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : s.call(this)
			}
		}
	},
	n.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide": "show"]()
	},
	n.prototype.getParent = function() {
		return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
			var s = t(n);
			this.addAriaAndCollapsedClass(e(s), s)
		},
		this)).end()
	},
	n.prototype.addAriaAndCollapsedClass = function(t, e) {
		var i = t.hasClass("in");
		t.attr("aria-expanded", i),
		e.toggleClass("collapsed", !i).attr("aria-expanded", i)
	};
	var s = t.fn.collapse;
	t.fn.collapse = i,
	t.fn.collapse.Constructor = n,
	t.fn.collapse.noConflict = function() {
		return t.fn.collapse = s,
		this
	},
	t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]',
	function(n) {
		var s = t(this);
		s.attr("data-target") || n.preventDefault();
		var o = e(s),
		a = o.data("bs.collapse"),
		r = a ? "toggle": s.data();
		i.call(o, r)
	})
} (jQuery),
/* ========================================================================
 * Bootstrap: dropdown.js v3.3.5
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+
function(t) {
	"use strict";
	function e(e) {
		var i = e.attr("data-target");
		i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
		var n = i && t(i);
		return n && n.length ? n: e.parent()
	}
	function i(i) {
		i && 3 === i.which || (t(s).remove(), t(o).each(function() {
			var n = t(this),
			s = e(n),
			o = {
				relatedTarget: this
			};
			s.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(s[0], i.target) || (s.trigger(i = t.Event("hide.bs.dropdown", o)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), s.removeClass("open").trigger("hidden.bs.dropdown", o))))
		}))
	}
	function n(e) {
		return this.each(function() {
			var i = t(this),
			n = i.data("bs.dropdown");
			n || i.data("bs.dropdown", n = new a(this)),
			"string" == typeof e && n[e].call(i)
		})
	}
	var s = ".dropdown-backdrop",
	o = '[data-toggle="dropdown"]',
	a = function(e) {
		t(e).on("click.bs.dropdown", this.toggle)
	};
	a.VERSION = "3.3.5",
	a.prototype.toggle = function(n) {
		var s = t(this);
		if (!s.is(".disabled, :disabled")) {
			var o = e(s),
			a = o.hasClass("open");
			if (i(), !a) {
				"ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
				var r = {
					relatedTarget: this
				};
				if (o.trigger(n = t.Event("show.bs.dropdown", r)), n.isDefaultPrevented()) return;
				s.trigger("focus").attr("aria-expanded", "true"),
				o.toggleClass("open").trigger("shown.bs.dropdown", r)
			}
			return ! 1
		}
	},
	a.prototype.keydown = function(i) {
		if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
			var n = t(this);
			if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
				var s = e(n),
				a = s.hasClass("open");
				if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && s.find(o).trigger("focus"),
				n.trigger("click");
				var r = " li:not(.disabled):visible a",
				l = s.find(".dropdown-menu" + r);
				if (l.length) {
					var h = l.index(i.target);
					38 == i.which && h > 0 && h--,
					40 == i.which && h < l.length - 1 && h++,
					~h || (h = 0),
					l.eq(h).trigger("focus")
				}
			}
		}
	};
	var r = t.fn.dropdown;
	t.fn.dropdown = n,
	t.fn.dropdown.Constructor = a,
	t.fn.dropdown.noConflict = function() {
		return t.fn.dropdown = r,
		this
	},
	t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form",
	function(t) {
		t.stopPropagation()
	}).on("click.bs.dropdown.data-api", o, a.prototype.toggle).on("keydown.bs.dropdown.data-api", o, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
} (jQuery),
/* ========================================================================
 * Bootstrap: modal.js v3.3.5
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+
function(t) {
	"use strict";
	function e(e, n) {
		return this.each(function() {
			var s = t(this),
			o = s.data("bs.modal"),
			a = t.extend({},
			i.DEFAULTS, s.data(), "object" == typeof e && e);
			o || s.data("bs.modal", o = new i(this, a)),
			"string" == typeof e ? o[e](n) : a.show && o.show(n)
		})
	}
	var i = function(e, i) {
		this.options = i,
		this.$body = t(document.body),
		this.$element = t(e),
		this.$dialog = this.$element.find(".modal-dialog"),
		this.$backdrop = null,
		this.isShown = null,
		this.originalBodyPad = null,
		this.scrollbarWidth = 0,
		this.ignoreBackdropClick = !1,
		this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
			this.$element.trigger("loaded.bs.modal")
		},
		this))
	};
	i.VERSION = "3.3.5",
	i.TRANSITION_DURATION = 300,
	i.BACKDROP_TRANSITION_DURATION = 150,
	i.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	},
	i.prototype.toggle = function(t) {
		return this.isShown ? this.hide() : this.show(t)
	},
	i.prototype.show = function(e) {
		var n = this,
		s = t.Event("show.bs.modal", {
			relatedTarget: e
		});
		this.$element.trigger(s),
		this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal",
		function() {
			n.$element.one("mouseup.dismiss.bs.modal",
			function(e) {
				t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function() {
			var s = t.support.transition && n.$element.hasClass("fade");
			n.$element.parent().length || n.$element.appendTo(n.$body),
			n.$element.show().scrollTop(0),
			n.adjustDialog(),
			s && n.$element[0].offsetWidth,
			n.$element.addClass("in"),
			n.enforceFocus();
			var o = t.Event("shown.bs.modal", {
				relatedTarget: e
			});
			s ? n.$dialog.one("bsTransitionEnd",
			function() {
				n.$element.trigger("focus").trigger(o)
			}).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(o)
		}))
	},
	i.prototype.hide = function(e) {
		e && e.preventDefault(),
		e = t.Event("hide.bs.modal"),
		this.$element.trigger(e),
		this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
	},
	i.prototype.enforceFocus = function() {
		t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
			this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
		},
		this))
	},
	i.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
			27 == t.which && this.hide()
		},
		this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	},
	i.prototype.resize = function() {
		this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
	},
	i.prototype.hideModal = function() {
		var t = this;
		this.$element.hide(),
		this.backdrop(function() {
			t.$body.removeClass("modal-open"),
			t.resetAdjustments(),
			t.resetScrollbar(),
			t.$element.trigger("hidden.bs.modal")
		})
	},
	i.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(),
		this.$backdrop = null
	},
	i.prototype.backdrop = function(e) {
		var n = this,
		s = this.$element.hasClass("fade") ? "fade": "";
		if (this.isShown && this.options.backdrop) {
			var o = t.support.transition && s;
			if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
				return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
			},
			this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
			o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var a = function() {
				n.removeBackdrop(),
				e && e()
			};
			t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
		} else e && e()
	},
	i.prototype.handleUpdate = function() {
		this.adjustDialog()
	},
	i.prototype.adjustDialog = function() {
		var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth: "",
			paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth: ""
		})
	},
	i.prototype.resetAdjustments = function() {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	},
	i.prototype.checkScrollbar = function() {
		var t = window.innerWidth;
		if (!t) {
			var e = document.documentElement.getBoundingClientRect();
			t = e.right - Math.abs(e.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < t,
		this.scrollbarWidth = this.measureScrollbar()
	},
	i.prototype.setScrollbar = function() {
		var t = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "",
		this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
	},
	i.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", this.originalBodyPad)
	},
	i.prototype.measureScrollbar = function() {
		var t = document.createElement("div");
		t.className = "modal-scrollbar-measure",
		this.$body.append(t);
		var e = t.offsetWidth - t.clientWidth;
		return this.$body[0].removeChild(t),
		e
	};
	var n = t.fn.modal;
	t.fn.modal = e,
	t.fn.modal.Constructor = i,
	t.fn.modal.noConflict = function() {
		return t.fn.modal = n,
		this
	},
	t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]',
	function(i) {
		var n = t(this),
		s = n.attr("href"),
		o = t(n.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
		a = o.data("bs.modal") ? "toggle": t.extend({
			remote: !/#/.test(s) && s
		},
		o.data(), n.data());
		n.is("a") && i.preventDefault(),
		o.one("show.bs.modal",
		function(t) {
			t.isDefaultPrevented() || o.one("hidden.bs.modal",
			function() {
				n.is(":visible") && n.trigger("focus")
			})
		}),
		e.call(o, a, this)
	})
} (jQuery),
/* ========================================================================
 * Bootstrap: tooltip.js v3.3.5
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+
function(t) {
	"use strict";
	function e(e) {
		return this.each(function() {
			var n = t(this),
			s = n.data("bs.tooltip"),
			o = "object" == typeof e && e; (s || !/destroy|hide/.test(e)) && (s || n.data("bs.tooltip", s = new i(this, o)), "string" == typeof e && s[e]())
		})
	}
	var i = function(t, e) {
		this.type = null,
		this.options = null,
		this.enabled = null,
		this.timeout = null,
		this.hoverState = null,
		this.$element = null,
		this.inState = null,
		this.init("tooltip", t, e)
	};
	i.VERSION = "3.3.5",
	i.TRANSITION_DURATION = 150,
	i.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	},
	i.prototype.init = function(e, i, n) {
		if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
			click: !1,
			hover: !1,
			focus: !1
		},
		this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var s = this.options.trigger.split(" "), o = s.length; o--;) {
			var a = s[o];
			if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
			else if ("manual" != a) {
				var r = "hover" == a ? "mouseenter": "focusin",
				l = "hover" == a ? "mouseleave": "focusout";
				this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
				this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = t.extend({},
		this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	},
	i.prototype.getDefaults = function() {
		return i.DEFAULTS
	},
	i.prototype.getOptions = function(e) {
		return e = t.extend({},
		this.getDefaults(), this.$element.data(), e),
		e.delay && "number" == typeof e.delay && (e.delay = {
			show: e.delay,
			hide: e.delay
		}),
		e
	},
	i.prototype.getDelegateOptions = function() {
		var e = {},
		i = this.getDefaults();
		return this._options && t.each(this._options,
		function(t, n) {
			i[t] != n && (e[t] = n)
		}),
		e
	},
	i.prototype.enter = function(e) {
		var i = e instanceof this.constructor ? e: t(e.currentTarget).data("bs." + this.type);
		return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)),
		e instanceof t.Event && (i.inState["focusin" == e.type ? "focus": "hover"] = !0),
		i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
			"in" == i.hoverState && i.show()
		},
		i.options.delay.show)) : i.show())
	},
	i.prototype.isInStateTrue = function() {
		for (var t in this.inState) if (this.inState[t]) return ! 0;
		return ! 1
	},
	i.prototype.leave = function(e) {
		var i = e instanceof this.constructor ? e: t(e.currentTarget).data("bs." + this.type);
		return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)),
		e instanceof t.Event && (i.inState["focusout" == e.type ? "focus": "hover"] = !1),
		i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
			"out" == i.hoverState && i.hide()
		},
		i.options.delay.hide)) : i.hide())
	},
	i.prototype.show = function() {
		var e = t.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(e);
			var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (e.isDefaultPrevented() || !n) return;
			var s = this,
			o = this.tip(),
			a = this.getUID(this.type);
			this.setContent(),
			o.attr("id", a),
			this.$element.attr("aria-describedby", a),
			this.options.animation && o.addClass("fade");
			var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
			l = /\s?auto?\s?/i,
			h = l.test(r);
			h && (r = r.replace(l, "") || "top"),
			o.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(r).data("bs." + this.type, this),
			this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element),
			this.$element.trigger("inserted.bs." + this.type);
			var u = this.getPosition(),
			c = o[0].offsetWidth,
			d = o[0].offsetHeight;
			if (h) {
				var p = r,
				f = this.getPosition(this.$viewport);
				r = "bottom" == r && u.bottom + d > f.bottom ? "top": "top" == r && u.top - d < f.top ? "bottom": "right" == r && u.right + c > f.width ? "left": "left" == r && u.left - c < f.left ? "right": r,
				o.removeClass(p).addClass(r)
			}
			var m = this.getCalculatedOffset(r, u, c, d);
			this.applyPlacement(m, r);
			var g = function() {
				var t = s.hoverState;
				s.$element.trigger("shown.bs." + s.type),
				s.hoverState = null,
				"out" == t && s.leave(s)
			};
			t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
		}
	},
	i.prototype.applyPlacement = function(e, i) {
		var n = this.tip(),
		s = n[0].offsetWidth,
		o = n[0].offsetHeight,
		a = parseInt(n.css("margin-top"), 10),
		r = parseInt(n.css("margin-left"), 10);
		isNaN(a) && (a = 0),
		isNaN(r) && (r = 0),
		e.top += a,
		e.left += r,
		t.offset.setOffset(n[0], t.extend({
			using: function(t) {
				n.css({
					top: Math.round(t.top),
					left: Math.round(t.left)
				})
			}
		},
		e), 0),
		n.addClass("in");
		var l = n[0].offsetWidth,
		h = n[0].offsetHeight;
		"top" == i && h != o && (e.top = e.top + o - h);
		var u = this.getViewportAdjustedDelta(i, e, l, h);
		u.left ? e.left += u.left: e.top += u.top;
		var c = /top|bottom/.test(i),
		d = c ? 2 * u.left - s + l: 2 * u.top - o + h,
		p = c ? "offsetWidth": "offsetHeight";
		n.offset(e),
		this.replaceArrow(d, n[0][p], c)
	},
	i.prototype.replaceArrow = function(t, e, i) {
		this.arrow().css(i ? "left": "top", 50 * (1 - t / e) + "%").css(i ? "top": "left", "")
	},
	i.prototype.setContent = function() {
		var t = this.tip(),
		e = this.getTitle();
		t.find(".tooltip-inner")[this.options.html ? "html": "text"](e),
		t.removeClass("fade in top bottom left right")
	},
	i.prototype.hide = function(e) {
		function n() {
			"in" != s.hoverState && o.detach(),
			s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type),
			e && e()
		}
		var s = this,
		o = t(this.$tip),
		a = t.Event("hide.bs." + this.type);
		return this.$element.trigger(a),
		a.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
	},
	i.prototype.fixTitle = function() {
		var t = this.$element; (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
	},
	i.prototype.hasContent = function() {
		return this.getTitle()
	},
	i.prototype.getPosition = function(e) {
		e = e || this.$element;
		var i = e[0],
		n = "BODY" == i.tagName,
		s = i.getBoundingClientRect();
		null == s.width && (s = t.extend({},
		s, {
			width: s.right - s.left,
			height: s.bottom - s.top
		}));
		var o = n ? {
			top: 0,
			left: 0
		}: e.offset(),
		a = {
			scroll: n ? document.documentElement.scrollTop || document.body.scrollTop: e.scrollTop()
		},
		r = n ? {
			width: t(window).width(),
			height: t(window).height()
		}: null;
		return t.extend({},
		s, a, r, o)
	},
	i.prototype.getCalculatedOffset = function(t, e, i, n) {
		return "bottom" == t ? {
			top: e.top + e.height,
			left: e.left + e.width / 2 - i / 2
		}: "top" == t ? {
			top: e.top - n,
			left: e.left + e.width / 2 - i / 2
		}: "left" == t ? {
			top: e.top + e.height / 2 - n / 2,
			left: e.left - i
		}: {
			top: e.top + e.height / 2 - n / 2,
			left: e.left + e.width
		}
	},
	i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
		var s = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return s;
		var o = this.options.viewport && this.options.viewport.padding || 0,
		a = this.getPosition(this.$viewport);
		if (/right|left/.test(t)) {
			var r = e.top - o - a.scroll,
			l = e.top + o - a.scroll + n;
			r < a.top ? s.top = a.top - r: l > a.top + a.height && (s.top = a.top + a.height - l)
		} else {
			var h = e.left - o,
			u = e.left + o + i;
			h < a.left ? s.left = a.left - h: u > a.right && (s.left = a.left + a.width - u)
		}
		return s
	},
	i.prototype.getTitle = function() {
		var t, e = this.$element,
		i = this.options;
		return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
	},
	i.prototype.getUID = function(t) {
		do t += ~~ (1e6 * Math.random());
		while (document.getElementById(t));
		return t
	},
	i.prototype.tip = function() {
		if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	},
	i.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	},
	i.prototype.enable = function() {
		this.enabled = !0
	},
	i.prototype.disable = function() {
		this.enabled = !1
	},
	i.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	},
	i.prototype.toggle = function(e) {
		var i = this;
		e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))),
		e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
	},
	i.prototype.destroy = function() {
		var t = this;
		clearTimeout(this.timeout),
		this.hide(function() {
			t.$element.off("." + t.type).removeData("bs." + t.type),
			t.$tip && t.$tip.detach(),
			t.$tip = null,
			t.$arrow = null,
			t.$viewport = null
		})
	};
	var n = t.fn.tooltip;
	t.fn.tooltip = e,
	t.fn.tooltip.Constructor = i,
	t.fn.tooltip.noConflict = function() {
		return t.fn.tooltip = n,
		this
	}
} (jQuery),
/* ========================================================================
 * Bootstrap: popover.js v3.3.5
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+
function(t) {
	"use strict";
	function e(e) {
		return this.each(function() {
			var n = t(this),
			s = n.data("bs.popover"),
			o = "object" == typeof e && e; (s || !/destroy|hide/.test(e)) && (s || n.data("bs.popover", s = new i(this, o)), "string" == typeof e && s[e]())
		})
	}
	var i = function(t, e) {
		this.init("popover", t, e)
	};
	if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
	i.VERSION = "3.3.5",
	i.DEFAULTS = t.extend({},
	t.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}),
	i.prototype = t.extend({},
	t.fn.tooltip.Constructor.prototype),
	i.prototype.constructor = i,
	i.prototype.getDefaults = function() {
		return i.DEFAULTS
	},
	i.prototype.setContent = function() {
		var t = this.tip(),
		e = this.getTitle(),
		i = this.getContent();
		t.find(".popover-title")[this.options.html ? "html": "text"](e),
		t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html": "append": "text"](i),
		t.removeClass("fade top bottom left right in"),
		t.find(".popover-title").html() || t.find(".popover-title").hide()
	},
	i.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	},
	i.prototype.getContent = function() {
		var t = this.$element,
		e = this.options;
		return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
	},
	i.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var n = t.fn.popover;
	t.fn.popover = e,
	t.fn.popover.Constructor = i,
	t.fn.popover.noConflict = function() {
		return t.fn.popover = n,
		this
	}
} (jQuery),
/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.5
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+
function(t) {
	"use strict";
	function e(i, n) {
		this.$body = t(document.body),
		this.$scrollElement = t(t(i).is(document.body) ? window: i),
		this.options = t.extend({},
		e.DEFAULTS, n),
		this.selector = (this.options.target || "") + " .nav li > a",
		this.offsets = [],
		this.targets = [],
		this.activeTarget = null,
		this.scrollHeight = 0,
		this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
		this.refresh(),
		this.process()
	}
	function i(i) {
		return this.each(function() {
			var n = t(this),
			s = n.data("bs.scrollspy"),
			o = "object" == typeof i && i;
			s || n.data("bs.scrollspy", s = new e(this, o)),
			"string" == typeof i && s[i]()
		})
	}
	e.VERSION = "3.3.5",
	e.DEFAULTS = {
		offset: 10
	},
	e.prototype.getScrollHeight = function() {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	},
	e.prototype.refresh = function() {
		var e = this,
		i = "offset",
		n = 0;
		this.offsets = [],
		this.targets = [],
		this.scrollHeight = this.getScrollHeight(),
		t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()),
		this.$body.find(this.selector).map(function() {
			var e = t(this),
			s = e.data("target") || e.attr("href"),
			o = /^#./.test(s) && t(s);
			return o && o.length && o.is(":visible") && [[o[i]().top + n, s]] || null
		}).sort(function(t, e) {
			return t[0] - e[0]
		}).each(function() {
			e.offsets.push(this[0]),
			e.targets.push(this[1])
		})
	},
	e.prototype.process = function() {
		var t, e = this.$scrollElement.scrollTop() + this.options.offset,
		i = this.getScrollHeight(),
		n = this.options.offset + i - this.$scrollElement.height(),
		s = this.offsets,
		o = this.targets,
		a = this.activeTarget;
		if (this.scrollHeight != i && this.refresh(), e >= n) return a != (t = o[o.length - 1]) && this.activate(t);
		if (a && e < s[0]) return this.activeTarget = null,
		this.clear();
		for (t = s.length; t--;) a != o[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(o[t])
	},
	e.prototype.activate = function(e) {
		this.activeTarget = e,
		this.clear();
		var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
		n = t(i).parents("li").addClass("active");
		n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")),
		n.trigger("activate.bs.scrollspy")
	},
	e.prototype.clear = function() {
		t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var n = t.fn.scrollspy;
	t.fn.scrollspy = i,
	t.fn.scrollspy.Constructor = e,
	t.fn.scrollspy.noConflict = function() {
		return t.fn.scrollspy = n,
		this
	},
	t(window).on("load.bs.scrollspy.data-api",
	function() {
		t('[data-spy="scroll"]').each(function() {
			var e = t(this);
			i.call(e, e.data())
		})
	})
} (jQuery),
/* ========================================================================
 * Bootstrap: tab.js v3.3.5
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+
function(t) {
	"use strict";
	function e(e) {
		return this.each(function() {
			var n = t(this),
			s = n.data("bs.tab");
			s || n.data("bs.tab", s = new i(this)),
			"string" == typeof e && s[e]()
		})
	}
	var i = function(e) {
		this.element = t(e)
	};
	i.VERSION = "3.3.5",
	i.TRANSITION_DURATION = 150,
	i.prototype.show = function() {
		var e = this.element,
		i = e.closest("ul:not(.dropdown-menu)"),
		n = e.data("target");
		if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
			var s = i.find(".active:last a"),
			o = t.Event("hide.bs.tab", {
				relatedTarget: e[0]
			}),
			a = t.Event("show.bs.tab", {
				relatedTarget: s[0]
			});
			if (s.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
				var r = t(n);
				this.activate(e.closest("li"), i),
				this.activate(r, r.parent(),
				function() {
					s.trigger({
						type: "hidden.bs.tab",
						relatedTarget: e[0]
					}),
					e.trigger({
						type: "shown.bs.tab",
						relatedTarget: s[0]
					})
				})
			}
		}
	},
	i.prototype.activate = function(e, n, s) {
		function o() {
			a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
			e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
			r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
			e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
			s && s()
		}
		var a = n.find("> .active"),
		r = s && t.support.transition && (a.length && a.hasClass("fade") || !!n.find("> .fade").length);
		a.length && r ? a.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(),
		a.removeClass("in")
	};
	var n = t.fn.tab;
	t.fn.tab = e,
	t.fn.tab.Constructor = i,
	t.fn.tab.noConflict = function() {
		return t.fn.tab = n,
		this
	};
	var s = function(i) {
		i.preventDefault(),
		e.call(t(this), "show")
	};
	t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
} (jQuery),
/* ========================================================================
 * Bootstrap: affix.js v3.3.5
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+
function(t) {
	"use strict";
	function e(e) {
		return this.each(function() {
			var n = t(this),
			s = n.data("bs.affix"),
			o = "object" == typeof e && e;
			s || n.data("bs.affix", s = new i(this, o)),
			"string" == typeof e && s[e]()
		})
	}
	var i = function(e, n) {
		this.options = t.extend({},
		i.DEFAULTS, n),
		this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
		this.$element = t(e),
		this.affixed = null,
		this.unpin = null,
		this.pinnedOffset = null,
		this.checkPosition()
	};
	i.VERSION = "3.3.5",
	i.RESET = "affix affix-top affix-bottom",
	i.DEFAULTS = {
		offset: 0,
		target: window
	},
	i.prototype.getState = function(t, e, i, n) {
		var s = this.$target.scrollTop(),
		o = this.$element.offset(),
		a = this.$target.height();
		if (null != i && "top" == this.affixed) return i > s ? "top": !1;
		if ("bottom" == this.affixed) return null != i ? s + this.unpin <= o.top ? !1 : "bottom": t - n >= s + a ? !1 : "bottom";
		var r = null == this.affixed,
		l = r ? s: o.top,
		h = r ? a: e;
		return null != i && i >= s ? "top": null != n && l + h >= t - n ? "bottom": !1
	},
	i.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(i.RESET).addClass("affix");
		var t = this.$target.scrollTop(),
		e = this.$element.offset();
		return this.pinnedOffset = e.top - t
	},
	i.prototype.checkPositionWithEventLoop = function() {
		setTimeout(t.proxy(this.checkPosition, this), 1)
	},
	i.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var e = this.$element.height(),
			n = this.options.offset,
			s = n.top,
			o = n.bottom,
			a = Math.max(t(document).height(), t(document.body).height());
			"object" != typeof n && (o = s = n),
			"function" == typeof s && (s = n.top(this.$element)),
			"function" == typeof o && (o = n.bottom(this.$element));
			var r = this.getState(a, e, s, o);
			if (this.affixed != r) {
				null != this.unpin && this.$element.css("top", "");
				var l = "affix" + (r ? "-" + r: ""),
				h = t.Event(l + ".bs.affix");
				if (this.$element.trigger(h), h.isDefaultPrevented()) return;
				this.affixed = r,
				this.unpin = "bottom" == r ? this.getPinnedOffset() : null,
				this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == r && this.$element.offset({
				top: a - e - o
			})
		}
	};
	var n = t.fn.affix;
	t.fn.affix = e,
	t.fn.affix.Constructor = i,
	t.fn.affix.noConflict = function() {
		return t.fn.affix = n,
		this
	},
	t(window).on("load",
	function() {
		t('[data-spy="affix"]').each(function() {
			var i = t(this),
			n = i.data();
			n.offset = n.offset || {},
			null != n.offsetBottom && (n.offset.bottom = n.offsetBottom),
			null != n.offsetTop && (n.offset.top = n.offsetTop),
			e.call(i, n)
		})
	})
} (jQuery),
/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
function() {
	"use strict";
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var t = document.createElement("style");
		t.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),
		document.querySelector("head").appendChild(t)
	}
} (),
/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
function(t) {
	"use strict";
	t.fn.counterUp = function(e) {
		var i = t.extend({
			time: 400,
			delay: 10
		},
		e);
		return this.each(function() {
			var e = t(this),
			n = i,
			s = function() {
				var t = [],
				i = n.time / n.delay,
				s = e.text(),
				o = /[0-9]+,[0-9]+/.test(s);
				s = s.replace(/,/g, "");
				for (var a = (/^[0-9]+$/.test(s), /^[0-9]+\.[0-9]+$/.test(s)), r = a ? (s.split(".")[1] || []).length: 0, l = i; l >= 1; l--) {
					var h = parseInt(s / i * l);
					if (a && (h = parseFloat(s / i * l).toFixed(r)), o) for (;
					/(\d+)(\d{3})/.test(h.toString());) h = h.toString().replace(/(\d+)(\d{3})/, "$1,$2");
					t.unshift(h)
				}
				e.data("counterup-nums", t),
				e.text("0");
				var u = function() {
					e.text(e.data("counterup-nums").shift()),
					e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), n.delay) : (delete e.data("counterup-nums"), e.data("counterup-nums", null), e.data("counterup-func", null))
				};
				e.data("counterup-func", u),
				setTimeout(e.data("counterup-func"), n.delay)
			};
			e.waypoint(s, {
				offset: "100%",
				triggerOnce: !0
			})
		})
	}
} (jQuery),
/*
jQuery Waypoints - v2.0.4
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
function() {
	var t = [].indexOf ||
	function(t) {
		for (var e = 0,
		i = this.length; i > e; e++) if (e in this && this[e] === t) return e;
		return - 1
	},
	e = [].slice; !
	function(t, e) {
		return "function" == typeof define && define.amd ? define("waypoints", ["jquery"],
		function(i) {
			return e(i, t)
		}) : e(t.jQuery, t)
	} (this,
	function(i, n) {
		var s, o, a, r, l, h, u, c, d, p, f, m, g, v, b, y;
		return s = i(n),
		c = t.call(n, "ontouchstart") >= 0,
		r = {
			horizontal: {},
			vertical: {}
		},
		l = 1,
		u = {},
		h = "waypoints-context-id",
		f = "resize.waypoints",
		m = "scroll.waypoints",
		g = 1,
		v = "waypoints-waypoint-ids",
		b = "waypoint",
		y = "waypoints",
		o = function() {
			function t(t) {
				var e = this;
				this.$element = t,
				this.element = t[0],
				this.didResize = !1,
				this.didScroll = !1,
				this.id = "context" + l++,
				this.oldScroll = {
					x: t.scrollLeft(),
					y: t.scrollTop()
				},
				this.waypoints = {
					horizontal: {},
					vertical: {}
				},
				this.element[h] = this.id,
				u[this.id] = this,
				t.bind(m,
				function() {
					var t;
					return e.didScroll || c ? void 0 : (e.didScroll = !0, t = function() {
						return e.doScroll(),
						e.didScroll = !1
					},
					n.setTimeout(t, i[y].settings.scrollThrottle))
				}),
				t.bind(f,
				function() {
					var t;
					return e.didResize ? void 0 : (e.didResize = !0, t = function() {
						return i[y]("refresh"),
						e.didResize = !1
					},
					n.setTimeout(t, i[y].settings.resizeThrottle))
				})
			}
			return t.prototype.doScroll = function() {
				var t, e = this;
				return t = {
					horizontal: {
						newScroll: this.$element.scrollLeft(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left"
					},
					vertical: {
						newScroll: this.$element.scrollTop(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up"
					}
				},
				!c || t.vertical.oldScroll && t.vertical.newScroll || i[y]("refresh"),
				i.each(t,
				function(t, n) {
					var s, o, a;
					return a = [],
					o = n.newScroll > n.oldScroll,
					s = o ? n.forward: n.backward,
					i.each(e.waypoints[t],
					function(t, e) {
						var i, s;
						return n.oldScroll < (i = e.offset) && i <= n.newScroll ? a.push(e) : n.newScroll < (s = e.offset) && s <= n.oldScroll ? a.push(e) : void 0
					}),
					a.sort(function(t, e) {
						return t.offset - e.offset
					}),
					o || a.reverse(),
					i.each(a,
					function(t, e) {
						return e.options.continuous || t === a.length - 1 ? e.trigger([s]) : void 0
					})
				}),
				this.oldScroll = {
					x: t.horizontal.newScroll,
					y: t.vertical.newScroll
				}
			},
			t.prototype.refresh = function() {
				var t, e, n, s = this;
				return n = i.isWindow(this.element),
				e = this.$element.offset(),
				this.doScroll(),
				t = {
					horizontal: {
						contextOffset: n ? 0 : e.left,
						contextScroll: n ? 0 : this.oldScroll.x,
						contextDimension: this.$element.width(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left",
						offsetProp: "left"
					},
					vertical: {
						contextOffset: n ? 0 : e.top,
						contextScroll: n ? 0 : this.oldScroll.y,
						contextDimension: n ? i[y]("viewportHeight") : this.$element.height(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up",
						offsetProp: "top"
					}
				},
				i.each(t,
				function(t, e) {
					return i.each(s.waypoints[t],
					function(t, n) {
						var s, o, a, r, l;
						return s = n.options.offset,
						a = n.offset,
						o = i.isWindow(n.element) ? 0 : n.$element.offset()[e.offsetProp],
						i.isFunction(s) ? s = s.apply(n.element) : "string" == typeof s && (s = parseFloat(s), n.options.offset.indexOf("%") > -1 && (s = Math.ceil(e.contextDimension * s / 100))),
						n.offset = o - e.contextOffset + e.contextScroll - s,
						n.options.onlyOnScroll && null != a || !n.enabled ? void 0 : null !== a && a < (r = e.oldScroll) && r <= n.offset ? n.trigger([e.backward]) : null !== a && a > (l = e.oldScroll) && l >= n.offset ? n.trigger([e.forward]) : null === a && e.oldScroll >= n.offset ? n.trigger([e.forward]) : void 0
					})
				})
			},
			t.prototype.checkEmpty = function() {
				return i.isEmptyObject(this.waypoints.horizontal) && i.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([f, m].join(" ")), delete u[this.id]) : void 0
			},
			t
		} (),
		a = function() {
			function t(t, e, n) {
				var s, o;
				n = i.extend({},
				i.fn[b].defaults, n),
				"bottom-in-view" === n.offset && (n.offset = function() {
					var t;
					return t = i[y]("viewportHeight"),
					i.isWindow(e.element) || (t = e.$element.height()),
					t - i(this).outerHeight()
				}),
				this.$element = t,
				this.element = t[0],
				this.axis = n.horizontal ? "horizontal": "vertical",
				this.callback = n.handler,
				this.context = e,
				this.enabled = n.enabled,
				this.id = "waypoints" + g++,
				this.offset = null,
				this.options = n,
				e.waypoints[this.axis][this.id] = this,
				r[this.axis][this.id] = this,
				s = null != (o = this.element[v]) ? o: [],
				s.push(this.id),
				this.element[v] = s
			}
			return t.prototype.trigger = function(t) {
				return this.enabled ? (null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0) : void 0
			},
			t.prototype.disable = function() {
				return this.enabled = !1
			},
			t.prototype.enable = function() {
				return this.context.refresh(),
				this.enabled = !0
			},
			t.prototype.destroy = function() {
				return delete r[this.axis][this.id],
				delete this.context.waypoints[this.axis][this.id],
				this.context.checkEmpty()
			},
			t.getWaypointsByElement = function(t) {
				var e, n;
				return (n = t[v]) ? (e = i.extend({},
				r.horizontal, r.vertical), i.map(n,
				function(t) {
					return e[t]
				})) : []
			},
			t
		} (),
		p = {
			init: function(t, e) {
				var n;
				return null == e && (e = {}),
				null == (n = e.handler) && (e.handler = t),
				this.each(function() {
					var t, n, s, r;
					return t = i(this),
					s = null != (r = e.context) ? r: i.fn[b].defaults.context,
					i.isWindow(s) || (s = t.closest(s)),
					s = i(s),
					n = u[s[0][h]],
					n || (n = new o(s)),
					new a(t, n, e)
				}),
				i[y]("refresh"),
				this
			},
			disable: function() {
				return p._invoke.call(this, "disable")
			},
			enable: function() {
				return p._invoke.call(this, "enable")
			},
			destroy: function() {
				return p._invoke.call(this, "destroy")
			},
			prev: function(t, e) {
				return p._traverse.call(this, t, e,
				function(t, e, i) {
					return e > 0 ? t.push(i[e - 1]) : void 0
				})
			},
			next: function(t, e) {
				return p._traverse.call(this, t, e,
				function(t, e, i) {
					return e < i.length - 1 ? t.push(i[e + 1]) : void 0
				})
			},
			_traverse: function(t, e, s) {
				var o, a;
				return null == t && (t = "vertical"),
				null == e && (e = n),
				a = d.aggregate(e),
				o = [],
				this.each(function() {
					var e;
					return e = i.inArray(this, a[t]),
					s(o, e, a[t])
				}),
				this.pushStack(o)
			},
			_invoke: function(t) {
				return this.each(function() {
					var e;
					return e = a.getWaypointsByElement(this),
					i.each(e,
					function(e, i) {
						return i[t](),
						!0
					})
				}),
				this
			}
		},
		i.fn[b] = function() {
			var t, n;
			return n = arguments[0],
			t = 2 <= arguments.length ? e.call(arguments, 1) : [],
			p[n] ? p[n].apply(this, t) : i.isFunction(n) ? p.init.apply(this, arguments) : i.isPlainObject(n) ? p.init.apply(this, [null, n]) : n ? i.error("The " + n + " method does not exist in jQuery Waypoints.") : i.error("jQuery Waypoints needs a callback function or handler option.")
		},
		i.fn[b].defaults = {
			context: n,
			continuous: !0,
			enabled: !0,
			horizontal: !1,
			offset: 0,
			triggerOnce: !1
		},
		d = {
			refresh: function() {
				return i.each(u,
				function(t, e) {
					return e.refresh()
				})
			},
			viewportHeight: function() {
				var t;
				return null != (t = n.innerHeight) ? t: s.height()
			},
			aggregate: function(t) {
				var e, n, s;
				return e = r,
				t && (e = null != (s = u[i(t)[0][h]]) ? s.waypoints: void 0),
				e ? (n = {
					horizontal: [],
					vertical: []
				},
				i.each(n,
				function(t, s) {
					return i.each(e[t],
					function(t, e) {
						return s.push(e)
					}),
					s.sort(function(t, e) {
						return t.offset - e.offset
					}),
					n[t] = i.map(s,
					function(t) {
						return t.element
					}),
					n[t] = i.unique(n[t])
				}), n) : []
			},
			above: function(t) {
				return null == t && (t = n),
				d._filter(t, "vertical",
				function(t, e) {
					return e.offset <= t.oldScroll.y
				})
			},
			below: function(t) {
				return null == t && (t = n),
				d._filter(t, "vertical",
				function(t, e) {
					return e.offset > t.oldScroll.y
				})
			},
			left: function(t) {
				return null == t && (t = n),
				d._filter(t, "horizontal",
				function(t, e) {
					return e.offset <= t.oldScroll.x
				})
			},
			right: function(t) {
				return null == t && (t = n),
				d._filter(t, "horizontal",
				function(t, e) {
					return e.offset > t.oldScroll.x
				})
			},
			enable: function() {
				return d._invoke("enable")
			},
			disable: function() {
				return d._invoke("disable")
			},
			destroy: function() {
				return d._invoke("destroy")
			},
			extendFn: function(t, e) {
				return p[t] = e
			},
			_invoke: function(t) {
				var e;
				return e = i.extend({},
				r.vertical, r.horizontal),
				i.each(e,
				function(e, i) {
					return i[t](),
					!0
				})
			},
			_filter: function(t, e, n) {
				var s, o;
				return (s = u[i(t)[0][h]]) ? (o = [], i.each(s.waypoints[e],
				function(t, e) {
					return n(s, e) ? o.push(e) : void 0
				}), o.sort(function(t, e) {
					return t.offset - e.offset
				}), i.map(o,
				function(t) {
					return t.element
				})) : []
			}
		},
		i[y] = function() {
			var t, i;
			return i = arguments[0],
			t = 2 <= arguments.length ? e.call(arguments, 1) : [],
			d[i] ? d[i].apply(null, t) : d.aggregate.call(null, i)
		},
		i[y].settings = {
			resizeThrottle: 100,
			scrollThrottle: 30
		},
		s.load(function() {
			return i[y]("refresh")
		})
	})
}.call(this);