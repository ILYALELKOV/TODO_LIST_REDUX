;(function () {
	const e = document.createElement('link').relList
	if (e && e.supports && e.supports('modulepreload')) return
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
	new MutationObserver((i) => {
		for (const s of i)
			if (s.type === 'childList')
				for (const o of s.addedNodes)
					o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o)
	}).observe(document, { childList: !0, subtree: !0 })
	function n(i) {
		const s = {}
		return (
			i.integrity && (s.integrity = i.integrity),
			i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === 'use-credentials'
				? (s.credentials = 'include')
				: i.crossOrigin === 'anonymous'
				? (s.credentials = 'omit')
				: (s.credentials = 'same-origin'),
			s
		)
	}
	function r(i) {
		if (i.ep) return
		i.ep = !0
		const s = n(i)
		fetch(i.href, s)
	}
})()
function uf(t) {
	return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
		? t.default
		: t
}
var cf = { exports: {} },
	eo = {},
	df = { exports: {} },
	L = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ki = Symbol.for('react.element'),
	cg = Symbol.for('react.portal'),
	dg = Symbol.for('react.fragment'),
	fg = Symbol.for('react.strict_mode'),
	hg = Symbol.for('react.profiler'),
	pg = Symbol.for('react.provider'),
	mg = Symbol.for('react.context'),
	gg = Symbol.for('react.forward_ref'),
	_g = Symbol.for('react.suspense'),
	yg = Symbol.for('react.memo'),
	vg = Symbol.for('react.lazy'),
	ac = Symbol.iterator
function Cg(t) {
	return t === null || typeof t != 'object'
		? null
		: ((t = (ac && t[ac]) || t['@@iterator']),
		  typeof t == 'function' ? t : null)
}
var ff = {
		isMounted: function () {
			return !1
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {}
	},
	hf = Object.assign,
	pf = {}
function dr(t, e, n) {
	;(this.props = t),
		(this.context = e),
		(this.refs = pf),
		(this.updater = n || ff)
}
dr.prototype.isReactComponent = {}
dr.prototype.setState = function (t, e) {
	if (typeof t != 'object' && typeof t != 'function' && t != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		)
	this.updater.enqueueSetState(this, t, e, 'setState')
}
dr.prototype.forceUpdate = function (t) {
	this.updater.enqueueForceUpdate(this, t, 'forceUpdate')
}
function mf() {}
mf.prototype = dr.prototype
function xa(t, e, n) {
	;(this.props = t),
		(this.context = e),
		(this.refs = pf),
		(this.updater = n || ff)
}
var Ra = (xa.prototype = new mf())
Ra.constructor = xa
hf(Ra, dr.prototype)
Ra.isPureReactComponent = !0
var uc = Array.isArray,
	gf = Object.prototype.hasOwnProperty,
	Pa = { current: null },
	_f = { key: !0, ref: !0, __self: !0, __source: !0 }
function yf(t, e, n) {
	var r,
		i = {},
		s = null,
		o = null
	if (e != null)
		for (r in (e.ref !== void 0 && (o = e.ref),
		e.key !== void 0 && (s = '' + e.key),
		e))
			gf.call(e, r) && !_f.hasOwnProperty(r) && (i[r] = e[r])
	var l = arguments.length - 2
	if (l === 1) i.children = n
	else if (1 < l) {
		for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2]
		i.children = a
	}
	if (t && t.defaultProps)
		for (r in ((l = t.defaultProps), l)) i[r] === void 0 && (i[r] = l[r])
	return { $$typeof: ki, type: t, key: s, ref: o, props: i, _owner: Pa.current }
}
function wg(t, e) {
	return {
		$$typeof: ki,
		type: t.type,
		key: e,
		ref: t.ref,
		props: t.props,
		_owner: t._owner
	}
}
function Da(t) {
	return typeof t == 'object' && t !== null && t.$$typeof === ki
}
function Eg(t) {
	var e = { '=': '=0', ':': '=2' }
	return (
		'$' +
		t.replace(/[=:]/g, function (n) {
			return e[n]
		})
	)
}
var cc = /\/+/g
function Oo(t, e) {
	return typeof t == 'object' && t !== null && t.key != null
		? Eg('' + t.key)
		: e.toString(36)
}
function ns(t, e, n, r, i) {
	var s = typeof t
	;(s === 'undefined' || s === 'boolean') && (t = null)
	var o = !1
	if (t === null) o = !0
	else
		switch (s) {
			case 'string':
			case 'number':
				o = !0
				break
			case 'object':
				switch (t.$$typeof) {
					case ki:
					case cg:
						o = !0
				}
		}
	if (o)
		return (
			(o = t),
			(i = i(o)),
			(t = r === '' ? '.' + Oo(o, 0) : r),
			uc(i)
				? ((n = ''),
				  t != null && (n = t.replace(cc, '$&/') + '/'),
				  ns(i, e, n, '', function (u) {
						return u
				  }))
				: i != null &&
				  (Da(i) &&
						(i = wg(
							i,
							n +
								(!i.key || (o && o.key === i.key)
									? ''
									: ('' + i.key).replace(cc, '$&/') + '/') +
								t
						)),
				  e.push(i)),
			1
		)
	if (((o = 0), (r = r === '' ? '.' : r + ':'), uc(t)))
		for (var l = 0; l < t.length; l++) {
			s = t[l]
			var a = r + Oo(s, l)
			o += ns(s, e, n, a, i)
		}
	else if (((a = Cg(t)), typeof a == 'function'))
		for (t = a.call(t), l = 0; !(s = t.next()).done; )
			(s = s.value), (a = r + Oo(s, l++)), (o += ns(s, e, n, a, i))
	else if (s === 'object')
		throw (
			((e = String(t)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(e === '[object Object]'
						? 'object with keys {' + Object.keys(t).join(', ') + '}'
						: e) +
					'). If you meant to render a collection of children, use an array instead.'
			))
		)
	return o
}
function zi(t, e, n) {
	if (t == null) return t
	var r = [],
		i = 0
	return (
		ns(t, r, '', '', function (s) {
			return e.call(n, s, i++)
		}),
		r
	)
}
function Sg(t) {
	if (t._status === -1) {
		var e = t._result
		;(e = e()),
			e.then(
				function (n) {
					;(t._status === 0 || t._status === -1) &&
						((t._status = 1), (t._result = n))
				},
				function (n) {
					;(t._status === 0 || t._status === -1) &&
						((t._status = 2), (t._result = n))
				}
			),
			t._status === -1 && ((t._status = 0), (t._result = e))
	}
	if (t._status === 1) return t._result.default
	throw t._result
}
var Te = { current: null },
	rs = { transition: null },
	kg = {
		ReactCurrentDispatcher: Te,
		ReactCurrentBatchConfig: rs,
		ReactCurrentOwner: Pa
	}
L.Children = {
	map: zi,
	forEach: function (t, e, n) {
		zi(
			t,
			function () {
				e.apply(this, arguments)
			},
			n
		)
	},
	count: function (t) {
		var e = 0
		return (
			zi(t, function () {
				e++
			}),
			e
		)
	},
	toArray: function (t) {
		return (
			zi(t, function (e) {
				return e
			}) || []
		)
	},
	only: function (t) {
		if (!Da(t))
			throw Error(
				'React.Children.only expected to receive a single React element child.'
			)
		return t
	}
}
L.Component = dr
L.Fragment = dg
L.Profiler = hg
L.PureComponent = xa
L.StrictMode = fg
L.Suspense = _g
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kg
L.cloneElement = function (t, e, n) {
	if (t == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				t +
				'.'
		)
	var r = hf({}, t.props),
		i = t.key,
		s = t.ref,
		o = t._owner
	if (e != null) {
		if (
			(e.ref !== void 0 && ((s = e.ref), (o = Pa.current)),
			e.key !== void 0 && (i = '' + e.key),
			t.type && t.type.defaultProps)
		)
			var l = t.type.defaultProps
		for (a in e)
			gf.call(e, a) &&
				!_f.hasOwnProperty(a) &&
				(r[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a])
	}
	var a = arguments.length - 2
	if (a === 1) r.children = n
	else if (1 < a) {
		l = Array(a)
		for (var u = 0; u < a; u++) l[u] = arguments[u + 2]
		r.children = l
	}
	return { $$typeof: ki, type: t.type, key: i, ref: s, props: r, _owner: o }
}
L.createContext = function (t) {
	return (
		(t = {
			$$typeof: mg,
			_currentValue: t,
			_currentValue2: t,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null
		}),
		(t.Provider = { $$typeof: pg, _context: t }),
		(t.Consumer = t)
	)
}
L.createElement = yf
L.createFactory = function (t) {
	var e = yf.bind(null, t)
	return (e.type = t), e
}
L.createRef = function () {
	return { current: null }
}
L.forwardRef = function (t) {
	return { $$typeof: gg, render: t }
}
L.isValidElement = Da
L.lazy = function (t) {
	return { $$typeof: vg, _payload: { _status: -1, _result: t }, _init: Sg }
}
L.memo = function (t, e) {
	return { $$typeof: yg, type: t, compare: e === void 0 ? null : e }
}
L.startTransition = function (t) {
	var e = rs.transition
	rs.transition = {}
	try {
		t()
	} finally {
		rs.transition = e
	}
}
L.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.')
}
L.useCallback = function (t, e) {
	return Te.current.useCallback(t, e)
}
L.useContext = function (t) {
	return Te.current.useContext(t)
}
L.useDebugValue = function () {}
L.useDeferredValue = function (t) {
	return Te.current.useDeferredValue(t)
}
L.useEffect = function (t, e) {
	return Te.current.useEffect(t, e)
}
L.useId = function () {
	return Te.current.useId()
}
L.useImperativeHandle = function (t, e, n) {
	return Te.current.useImperativeHandle(t, e, n)
}
L.useInsertionEffect = function (t, e) {
	return Te.current.useInsertionEffect(t, e)
}
L.useLayoutEffect = function (t, e) {
	return Te.current.useLayoutEffect(t, e)
}
L.useMemo = function (t, e) {
	return Te.current.useMemo(t, e)
}
L.useReducer = function (t, e, n) {
	return Te.current.useReducer(t, e, n)
}
L.useRef = function (t) {
	return Te.current.useRef(t)
}
L.useState = function (t) {
	return Te.current.useState(t)
}
L.useSyncExternalStore = function (t, e, n) {
	return Te.current.useSyncExternalStore(t, e, n)
}
L.useTransition = function () {
	return Te.current.useTransition()
}
L.version = '18.2.0'
df.exports = L
var Ve = df.exports
const Tg = uf(Ve)
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ig = Ve,
	Ng = Symbol.for('react.element'),
	xg = Symbol.for('react.fragment'),
	Rg = Object.prototype.hasOwnProperty,
	Pg = Ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Dg = { key: !0, ref: !0, __self: !0, __source: !0 }
function vf(t, e, n) {
	var r,
		i = {},
		s = null,
		o = null
	n !== void 0 && (s = '' + n),
		e.key !== void 0 && (s = '' + e.key),
		e.ref !== void 0 && (o = e.ref)
	for (r in e) Rg.call(e, r) && !Dg.hasOwnProperty(r) && (i[r] = e[r])
	if (t && t.defaultProps)
		for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r])
	return { $$typeof: Ng, type: t, key: s, ref: o, props: i, _owner: Pg.current }
}
eo.Fragment = xg
eo.jsx = vf
eo.jsxs = vf
cf.exports = eo
var j = cf.exports,
	ml = {},
	Cf = { exports: {} },
	Be = {},
	wf = { exports: {} },
	Ef = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (t) {
	function e(k, P) {
		var D = k.length
		k.push(P)
		e: for (; 0 < D; ) {
			var ne = (D - 1) >>> 1,
				ae = k[ne]
			if (0 < i(ae, P)) (k[ne] = P), (k[D] = ae), (D = ne)
			else break e
		}
	}
	function n(k) {
		return k.length === 0 ? null : k[0]
	}
	function r(k) {
		if (k.length === 0) return null
		var P = k[0],
			D = k.pop()
		if (D !== P) {
			k[0] = D
			e: for (var ne = 0, ae = k.length, Li = ae >>> 1; ne < Li; ) {
				var Zt = 2 * (ne + 1) - 1,
					Do = k[Zt],
					en = Zt + 1,
					Fi = k[en]
				if (0 > i(Do, D))
					en < ae && 0 > i(Fi, Do)
						? ((k[ne] = Fi), (k[en] = D), (ne = en))
						: ((k[ne] = Do), (k[Zt] = D), (ne = Zt))
				else if (en < ae && 0 > i(Fi, D)) (k[ne] = Fi), (k[en] = D), (ne = en)
				else break e
			}
		}
		return P
	}
	function i(k, P) {
		var D = k.sortIndex - P.sortIndex
		return D !== 0 ? D : k.id - P.id
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var s = performance
		t.unstable_now = function () {
			return s.now()
		}
	} else {
		var o = Date,
			l = o.now()
		t.unstable_now = function () {
			return o.now() - l
		}
	}
	var a = [],
		u = [],
		f = 1,
		c = null,
		d = 3,
		g = !1,
		_ = !1,
		y = !1,
		R = typeof setTimeout == 'function' ? setTimeout : null,
		p = typeof clearTimeout == 'function' ? clearTimeout : null,
		h = typeof setImmediate < 'u' ? setImmediate : null
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling)
	function m(k) {
		for (var P = n(u); P !== null; ) {
			if (P.callback === null) r(u)
			else if (P.startTime <= k) r(u), (P.sortIndex = P.expirationTime), e(a, P)
			else break
			P = n(u)
		}
	}
	function v(k) {
		if (((y = !1), m(k), !_))
			if (n(a) !== null) (_ = !0), Ro(S)
			else {
				var P = n(u)
				P !== null && Po(v, P.startTime - k)
			}
	}
	function S(k, P) {
		;(_ = !1), y && ((y = !1), p(N), (N = -1)), (g = !0)
		var D = d
		try {
			for (
				m(P), c = n(a);
				c !== null && (!(c.expirationTime > P) || (k && !Ye()));

			) {
				var ne = c.callback
				if (typeof ne == 'function') {
					;(c.callback = null), (d = c.priorityLevel)
					var ae = ne(c.expirationTime <= P)
					;(P = t.unstable_now()),
						typeof ae == 'function' ? (c.callback = ae) : c === n(a) && r(a),
						m(P)
				} else r(a)
				c = n(a)
			}
			if (c !== null) var Li = !0
			else {
				var Zt = n(u)
				Zt !== null && Po(v, Zt.startTime - P), (Li = !1)
			}
			return Li
		} finally {
			;(c = null), (d = D), (g = !1)
		}
	}
	var T = !1,
		I = null,
		N = -1,
		te = 5,
		F = -1
	function Ye() {
		return !(t.unstable_now() - F < te)
	}
	function vr() {
		if (I !== null) {
			var k = t.unstable_now()
			F = k
			var P = !0
			try {
				P = I(!0, k)
			} finally {
				P ? Cr() : ((T = !1), (I = null))
			}
		} else T = !1
	}
	var Cr
	if (typeof h == 'function')
		Cr = function () {
			h(vr)
		}
	else if (typeof MessageChannel < 'u') {
		var lc = new MessageChannel(),
			ug = lc.port2
		;(lc.port1.onmessage = vr),
			(Cr = function () {
				ug.postMessage(null)
			})
	} else
		Cr = function () {
			R(vr, 0)
		}
	function Ro(k) {
		;(I = k), T || ((T = !0), Cr())
	}
	function Po(k, P) {
		N = R(function () {
			k(t.unstable_now())
		}, P)
	}
	;(t.unstable_IdlePriority = 5),
		(t.unstable_ImmediatePriority = 1),
		(t.unstable_LowPriority = 4),
		(t.unstable_NormalPriority = 3),
		(t.unstable_Profiling = null),
		(t.unstable_UserBlockingPriority = 2),
		(t.unstable_cancelCallback = function (k) {
			k.callback = null
		}),
		(t.unstable_continueExecution = function () {
			_ || g || ((_ = !0), Ro(S))
		}),
		(t.unstable_forceFrameRate = function (k) {
			0 > k || 125 < k
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: (te = 0 < k ? Math.floor(1e3 / k) : 5)
		}),
		(t.unstable_getCurrentPriorityLevel = function () {
			return d
		}),
		(t.unstable_getFirstCallbackNode = function () {
			return n(a)
		}),
		(t.unstable_next = function (k) {
			switch (d) {
				case 1:
				case 2:
				case 3:
					var P = 3
					break
				default:
					P = d
			}
			var D = d
			d = P
			try {
				return k()
			} finally {
				d = D
			}
		}),
		(t.unstable_pauseExecution = function () {}),
		(t.unstable_requestPaint = function () {}),
		(t.unstable_runWithPriority = function (k, P) {
			switch (k) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break
				default:
					k = 3
			}
			var D = d
			d = k
			try {
				return P()
			} finally {
				d = D
			}
		}),
		(t.unstable_scheduleCallback = function (k, P, D) {
			var ne = t.unstable_now()
			switch (
				(typeof D == 'object' && D !== null
					? ((D = D.delay), (D = typeof D == 'number' && 0 < D ? ne + D : ne))
					: (D = ne),
				k)
			) {
				case 1:
					var ae = -1
					break
				case 2:
					ae = 250
					break
				case 5:
					ae = 1073741823
					break
				case 4:
					ae = 1e4
					break
				default:
					ae = 5e3
			}
			return (
				(ae = D + ae),
				(k = {
					id: f++,
					callback: P,
					priorityLevel: k,
					startTime: D,
					expirationTime: ae,
					sortIndex: -1
				}),
				D > ne
					? ((k.sortIndex = D),
					  e(u, k),
					  n(a) === null &&
							k === n(u) &&
							(y ? (p(N), (N = -1)) : (y = !0), Po(v, D - ne)))
					: ((k.sortIndex = ae), e(a, k), _ || g || ((_ = !0), Ro(S))),
				k
			)
		}),
		(t.unstable_shouldYield = Ye),
		(t.unstable_wrapCallback = function (k) {
			var P = d
			return function () {
				var D = d
				d = P
				try {
					return k.apply(this, arguments)
				} finally {
					d = D
				}
			}
		})
})(Ef)
wf.exports = Ef
var Og = wf.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sf = Ve,
	je = Og
function C(t) {
	for (
		var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t, n = 1;
		n < arguments.length;
		n++
	)
		e += '&args[]=' + encodeURIComponent(arguments[n])
	return (
		'Minified React error #' +
		t +
		'; visit ' +
		e +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	)
}
var kf = new Set(),
	qr = {}
function kn(t, e) {
	Zn(t, e), Zn(t + 'Capture', e)
}
function Zn(t, e) {
	for (qr[t] = e, t = 0; t < e.length; t++) kf.add(e[t])
}
var vt = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	gl = Object.prototype.hasOwnProperty,
	Ag =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	dc = {},
	fc = {}
function Mg(t) {
	return gl.call(fc, t)
		? !0
		: gl.call(dc, t)
		? !1
		: Ag.test(t)
		? (fc[t] = !0)
		: ((dc[t] = !0), !1)
}
function Lg(t, e, n, r) {
	if (n !== null && n.type === 0) return !1
	switch (typeof e) {
		case 'function':
		case 'symbol':
			return !0
		case 'boolean':
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((t = t.toLowerCase().slice(0, 5)), t !== 'data-' && t !== 'aria-')
		default:
			return !1
	}
}
function Fg(t, e, n, r) {
	if (e === null || typeof e > 'u' || Lg(t, e, n, r)) return !0
	if (r) return !1
	if (n !== null)
		switch (n.type) {
			case 3:
				return !e
			case 4:
				return e === !1
			case 5:
				return isNaN(e)
			case 6:
				return isNaN(e) || 1 > e
		}
	return !1
}
function Ie(t, e, n, r, i, s, o) {
	;(this.acceptsBooleans = e === 2 || e === 3 || e === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = t),
		(this.type = e),
		(this.sanitizeURL = s),
		(this.removeEmptyString = o)
}
var _e = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (t) {
		_e[t] = new Ie(t, 0, !1, t, null, !1, !1)
	})
;[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv']
].forEach(function (t) {
	var e = t[0]
	_e[e] = new Ie(e, 1, !1, t[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (t) {
	_e[t] = new Ie(t, 2, !1, t.toLowerCase(), null, !1, !1)
})
;[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha'
].forEach(function (t) {
	_e[t] = new Ie(t, 2, !1, t, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (t) {
		_e[t] = new Ie(t, 3, !1, t.toLowerCase(), null, !1, !1)
	})
;['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
	_e[t] = new Ie(t, 3, !0, t, null, !1, !1)
})
;['capture', 'download'].forEach(function (t) {
	_e[t] = new Ie(t, 4, !1, t, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (t) {
	_e[t] = new Ie(t, 6, !1, t, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (t) {
	_e[t] = new Ie(t, 5, !1, t.toLowerCase(), null, !1, !1)
})
var Oa = /[\-:]([a-z])/g
function Aa(t) {
	return t[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (t) {
		var e = t.replace(Oa, Aa)
		_e[e] = new Ie(e, 1, !1, t, null, !1, !1)
	})
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (t) {
		var e = t.replace(Oa, Aa)
		_e[e] = new Ie(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1)
	})
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
	var e = t.replace(Oa, Aa)
	_e[e] = new Ie(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (t) {
	_e[t] = new Ie(t, 1, !1, t.toLowerCase(), null, !1, !1)
})
_e.xlinkHref = new Ie(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1
)
;['src', 'href', 'action', 'formAction'].forEach(function (t) {
	_e[t] = new Ie(t, 1, !1, t.toLowerCase(), null, !0, !0)
})
function Ma(t, e, n, r) {
	var i = _e.hasOwnProperty(e) ? _e[e] : null
	;(i !== null
		? i.type !== 0
		: r ||
		  !(2 < e.length) ||
		  (e[0] !== 'o' && e[0] !== 'O') ||
		  (e[1] !== 'n' && e[1] !== 'N')) &&
		(Fg(e, n, i, r) && (n = null),
		r || i === null
			? Mg(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
			: i.mustUseProperty
			? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
			: ((e = i.attributeName),
			  (r = i.attributeNamespace),
			  n === null
					? t.removeAttribute(e)
					: ((i = i.type),
					  (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
					  r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var Tt = Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Ui = Symbol.for('react.element'),
	Rn = Symbol.for('react.portal'),
	Pn = Symbol.for('react.fragment'),
	La = Symbol.for('react.strict_mode'),
	_l = Symbol.for('react.profiler'),
	Tf = Symbol.for('react.provider'),
	If = Symbol.for('react.context'),
	Fa = Symbol.for('react.forward_ref'),
	yl = Symbol.for('react.suspense'),
	vl = Symbol.for('react.suspense_list'),
	za = Symbol.for('react.memo'),
	Rt = Symbol.for('react.lazy'),
	Nf = Symbol.for('react.offscreen'),
	hc = Symbol.iterator
function wr(t) {
	return t === null || typeof t != 'object'
		? null
		: ((t = (hc && t[hc]) || t['@@iterator']),
		  typeof t == 'function' ? t : null)
}
var J = Object.assign,
	Ao
function Ar(t) {
	if (Ao === void 0)
		try {
			throw Error()
		} catch (n) {
			var e = n.stack.trim().match(/\n( *(at )?)/)
			Ao = (e && e[1]) || ''
		}
	return (
		`
` +
		Ao +
		t
	)
}
var Mo = !1
function Lo(t, e) {
	if (!t || Mo) return ''
	Mo = !0
	var n = Error.prepareStackTrace
	Error.prepareStackTrace = void 0
	try {
		if (e)
			if (
				((e = function () {
					throw Error()
				}),
				Object.defineProperty(e.prototype, 'props', {
					set: function () {
						throw Error()
					}
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(e, [])
				} catch (u) {
					var r = u
				}
				Reflect.construct(t, [], e)
			} else {
				try {
					e.call()
				} catch (u) {
					r = u
				}
				t.call(e.prototype)
			}
		else {
			try {
				throw Error()
			} catch (u) {
				r = u
			}
			t()
		}
	} catch (u) {
		if (u && r && typeof u.stack == 'string') {
			for (
				var i = u.stack.split(`
`),
					s = r.stack.split(`
`),
					o = i.length - 1,
					l = s.length - 1;
				1 <= o && 0 <= l && i[o] !== s[l];

			)
				l--
			for (; 1 <= o && 0 <= l; o--, l--)
				if (i[o] !== s[l]) {
					if (o !== 1 || l !== 1)
						do
							if ((o--, l--, 0 > l || i[o] !== s[l])) {
								var a =
									`
` + i[o].replace(' at new ', ' at ')
								return (
									t.displayName &&
										a.includes('<anonymous>') &&
										(a = a.replace('<anonymous>', t.displayName)),
									a
								)
							}
						while (1 <= o && 0 <= l)
					break
				}
		}
	} finally {
		;(Mo = !1), (Error.prepareStackTrace = n)
	}
	return (t = t ? t.displayName || t.name : '') ? Ar(t) : ''
}
function zg(t) {
	switch (t.tag) {
		case 5:
			return Ar(t.type)
		case 16:
			return Ar('Lazy')
		case 13:
			return Ar('Suspense')
		case 19:
			return Ar('SuspenseList')
		case 0:
		case 2:
		case 15:
			return (t = Lo(t.type, !1)), t
		case 11:
			return (t = Lo(t.type.render, !1)), t
		case 1:
			return (t = Lo(t.type, !0)), t
		default:
			return ''
	}
}
function Cl(t) {
	if (t == null) return null
	if (typeof t == 'function') return t.displayName || t.name || null
	if (typeof t == 'string') return t
	switch (t) {
		case Pn:
			return 'Fragment'
		case Rn:
			return 'Portal'
		case _l:
			return 'Profiler'
		case La:
			return 'StrictMode'
		case yl:
			return 'Suspense'
		case vl:
			return 'SuspenseList'
	}
	if (typeof t == 'object')
		switch (t.$$typeof) {
			case If:
				return (t.displayName || 'Context') + '.Consumer'
			case Tf:
				return (t._context.displayName || 'Context') + '.Provider'
			case Fa:
				var e = t.render
				return (
					(t = t.displayName),
					t ||
						((t = e.displayName || e.name || ''),
						(t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
					t
				)
			case za:
				return (
					(e = t.displayName || null), e !== null ? e : Cl(t.type) || 'Memo'
				)
			case Rt:
				;(e = t._payload), (t = t._init)
				try {
					return Cl(t(e))
				} catch {}
		}
	return null
}
function Ug(t) {
	var e = t.type
	switch (t.tag) {
		case 24:
			return 'Cache'
		case 9:
			return (e.displayName || 'Context') + '.Consumer'
		case 10:
			return (e._context.displayName || 'Context') + '.Provider'
		case 18:
			return 'DehydratedFragment'
		case 11:
			return (
				(t = e.render),
				(t = t.displayName || t.name || ''),
				e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
			)
		case 7:
			return 'Fragment'
		case 5:
			return e
		case 4:
			return 'Portal'
		case 3:
			return 'Root'
		case 6:
			return 'Text'
		case 16:
			return Cl(e)
		case 8:
			return e === La ? 'StrictMode' : 'Mode'
		case 22:
			return 'Offscreen'
		case 12:
			return 'Profiler'
		case 21:
			return 'Scope'
		case 13:
			return 'Suspense'
		case 19:
			return 'SuspenseList'
		case 25:
			return 'TracingMarker'
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof e == 'function') return e.displayName || e.name || null
			if (typeof e == 'string') return e
	}
	return null
}
function Qt(t) {
	switch (typeof t) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return t
		case 'object':
			return t
		default:
			return ''
	}
}
function xf(t) {
	var e = t.type
	return (
		(t = t.nodeName) &&
		t.toLowerCase() === 'input' &&
		(e === 'checkbox' || e === 'radio')
	)
}
function jg(t) {
	var e = xf(t) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
		r = '' + t[e]
	if (
		!t.hasOwnProperty(e) &&
		typeof n < 'u' &&
		typeof n.get == 'function' &&
		typeof n.set == 'function'
	) {
		var i = n.get,
			s = n.set
		return (
			Object.defineProperty(t, e, {
				configurable: !0,
				get: function () {
					return i.call(this)
				},
				set: function (o) {
					;(r = '' + o), s.call(this, o)
				}
			}),
			Object.defineProperty(t, e, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r
				},
				setValue: function (o) {
					r = '' + o
				},
				stopTracking: function () {
					;(t._valueTracker = null), delete t[e]
				}
			}
		)
	}
}
function ji(t) {
	t._valueTracker || (t._valueTracker = jg(t))
}
function Rf(t) {
	if (!t) return !1
	var e = t._valueTracker
	if (!e) return !0
	var n = e.getValue(),
		r = ''
	return (
		t && (r = xf(t) ? (t.checked ? 'true' : 'false') : t.value),
		(t = r),
		t !== n ? (e.setValue(t), !0) : !1
	)
}
function ps(t) {
	if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u'))
		return null
	try {
		return t.activeElement || t.body
	} catch {
		return t.body
	}
}
function wl(t, e) {
	var n = e.checked
	return J({}, e, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? t._wrapperState.initialChecked
	})
}
function pc(t, e) {
	var n = e.defaultValue == null ? '' : e.defaultValue,
		r = e.checked != null ? e.checked : e.defaultChecked
	;(n = Qt(e.value != null ? e.value : n)),
		(t._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				e.type === 'checkbox' || e.type === 'radio'
					? e.checked != null
					: e.value != null
		})
}
function Pf(t, e) {
	;(e = e.checked), e != null && Ma(t, 'checked', e, !1)
}
function El(t, e) {
	Pf(t, e)
	var n = Qt(e.value),
		r = e.type
	if (n != null)
		r === 'number'
			? ((n === 0 && t.value === '') || t.value != n) && (t.value = '' + n)
			: t.value !== '' + n && (t.value = '' + n)
	else if (r === 'submit' || r === 'reset') {
		t.removeAttribute('value')
		return
	}
	e.hasOwnProperty('value')
		? Sl(t, e.type, n)
		: e.hasOwnProperty('defaultValue') && Sl(t, e.type, Qt(e.defaultValue)),
		e.checked == null &&
			e.defaultChecked != null &&
			(t.defaultChecked = !!e.defaultChecked)
}
function mc(t, e, n) {
	if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
		var r = e.type
		if (
			!(
				(r !== 'submit' && r !== 'reset') ||
				(e.value !== void 0 && e.value !== null)
			)
		)
			return
		;(e = '' + t._wrapperState.initialValue),
			n || e === t.value || (t.value = e),
			(t.defaultValue = e)
	}
	;(n = t.name),
		n !== '' && (t.name = ''),
		(t.defaultChecked = !!t._wrapperState.initialChecked),
		n !== '' && (t.name = n)
}
function Sl(t, e, n) {
	;(e !== 'number' || ps(t.ownerDocument) !== t) &&
		(n == null
			? (t.defaultValue = '' + t._wrapperState.initialValue)
			: t.defaultValue !== '' + n && (t.defaultValue = '' + n))
}
var Mr = Array.isArray
function Vn(t, e, n, r) {
	if (((t = t.options), e)) {
		e = {}
		for (var i = 0; i < n.length; i++) e['$' + n[i]] = !0
		for (n = 0; n < t.length; n++)
			(i = e.hasOwnProperty('$' + t[n].value)),
				t[n].selected !== i && (t[n].selected = i),
				i && r && (t[n].defaultSelected = !0)
	} else {
		for (n = '' + Qt(n), e = null, i = 0; i < t.length; i++) {
			if (t[i].value === n) {
				;(t[i].selected = !0), r && (t[i].defaultSelected = !0)
				return
			}
			e !== null || t[i].disabled || (e = t[i])
		}
		e !== null && (e.selected = !0)
	}
}
function kl(t, e) {
	if (e.dangerouslySetInnerHTML != null) throw Error(C(91))
	return J({}, e, {
		value: void 0,
		defaultValue: void 0,
		children: '' + t._wrapperState.initialValue
	})
}
function gc(t, e) {
	var n = e.value
	if (n == null) {
		if (((n = e.children), (e = e.defaultValue), n != null)) {
			if (e != null) throw Error(C(92))
			if (Mr(n)) {
				if (1 < n.length) throw Error(C(93))
				n = n[0]
			}
			e = n
		}
		e == null && (e = ''), (n = e)
	}
	t._wrapperState = { initialValue: Qt(n) }
}
function Df(t, e) {
	var n = Qt(e.value),
		r = Qt(e.defaultValue)
	n != null &&
		((n = '' + n),
		n !== t.value && (t.value = n),
		e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
		r != null && (t.defaultValue = '' + r)
}
function _c(t) {
	var e = t.textContent
	e === t._wrapperState.initialValue && e !== '' && e !== null && (t.value = e)
}
function Of(t) {
	switch (t) {
		case 'svg':
			return 'http://www.w3.org/2000/svg'
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML'
		default:
			return 'http://www.w3.org/1999/xhtml'
	}
}
function Tl(t, e) {
	return t == null || t === 'http://www.w3.org/1999/xhtml'
		? Of(e)
		: t === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: t
}
var Bi,
	Af = (function (t) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (e, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return t(e, n, r, i)
					})
			  }
			: t
	})(function (t, e) {
		if (t.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in t)
			t.innerHTML = e
		else {
			for (
				Bi = Bi || document.createElement('div'),
					Bi.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
					e = Bi.firstChild;
				t.firstChild;

			)
				t.removeChild(t.firstChild)
			for (; e.firstChild; ) t.appendChild(e.firstChild)
		}
	})
function Xr(t, e) {
	if (e) {
		var n = t.firstChild
		if (n && n === t.lastChild && n.nodeType === 3) {
			n.nodeValue = e
			return
		}
	}
	t.textContent = e
}
var zr = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	},
	Bg = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(zr).forEach(function (t) {
	Bg.forEach(function (e) {
		;(e = e + t.charAt(0).toUpperCase() + t.substring(1)), (zr[e] = zr[t])
	})
})
function Mf(t, e, n) {
	return e == null || typeof e == 'boolean' || e === ''
		? ''
		: n || typeof e != 'number' || e === 0 || (zr.hasOwnProperty(t) && zr[t])
		? ('' + e).trim()
		: e + 'px'
}
function Lf(t, e) {
	t = t.style
	for (var n in e)
		if (e.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				i = Mf(n, e[n], r)
			n === 'float' && (n = 'cssFloat'), r ? t.setProperty(n, i) : (t[n] = i)
		}
}
var Wg = J(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	}
)
function Il(t, e) {
	if (e) {
		if (Wg[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
			throw Error(C(137, t))
		if (e.dangerouslySetInnerHTML != null) {
			if (e.children != null) throw Error(C(60))
			if (
				typeof e.dangerouslySetInnerHTML != 'object' ||
				!('__html' in e.dangerouslySetInnerHTML)
			)
				throw Error(C(61))
		}
		if (e.style != null && typeof e.style != 'object') throw Error(C(62))
	}
}
function Nl(t, e) {
	if (t.indexOf('-') === -1) return typeof e.is == 'string'
	switch (t) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1
		default:
			return !0
	}
}
var xl = null
function Ua(t) {
	return (
		(t = t.target || t.srcElement || window),
		t.correspondingUseElement && (t = t.correspondingUseElement),
		t.nodeType === 3 ? t.parentNode : t
	)
}
var Rl = null,
	Hn = null,
	$n = null
function yc(t) {
	if ((t = Ni(t))) {
		if (typeof Rl != 'function') throw Error(C(280))
		var e = t.stateNode
		e && ((e = so(e)), Rl(t.stateNode, t.type, e))
	}
}
function Ff(t) {
	Hn ? ($n ? $n.push(t) : ($n = [t])) : (Hn = t)
}
function zf() {
	if (Hn) {
		var t = Hn,
			e = $n
		if ((($n = Hn = null), yc(t), e)) for (t = 0; t < e.length; t++) yc(e[t])
	}
}
function Uf(t, e) {
	return t(e)
}
function jf() {}
var Fo = !1
function Bf(t, e, n) {
	if (Fo) return t(e, n)
	Fo = !0
	try {
		return Uf(t, e, n)
	} finally {
		;(Fo = !1), (Hn !== null || $n !== null) && (jf(), zf())
	}
}
function Jr(t, e) {
	var n = t.stateNode
	if (n === null) return null
	var r = so(n)
	if (r === null) return null
	n = r[e]
	e: switch (e) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			;(r = !r.disabled) ||
				((t = t.type),
				(r = !(
					t === 'button' ||
					t === 'input' ||
					t === 'select' ||
					t === 'textarea'
				))),
				(t = !r)
			break e
		default:
			t = !1
	}
	if (t) return null
	if (n && typeof n != 'function') throw Error(C(231, e, typeof n))
	return n
}
var Pl = !1
if (vt)
	try {
		var Er = {}
		Object.defineProperty(Er, 'passive', {
			get: function () {
				Pl = !0
			}
		}),
			window.addEventListener('test', Er, Er),
			window.removeEventListener('test', Er, Er)
	} catch {
		Pl = !1
	}
function Vg(t, e, n, r, i, s, o, l, a) {
	var u = Array.prototype.slice.call(arguments, 3)
	try {
		e.apply(n, u)
	} catch (f) {
		this.onError(f)
	}
}
var Ur = !1,
	ms = null,
	gs = !1,
	Dl = null,
	Hg = {
		onError: function (t) {
			;(Ur = !0), (ms = t)
		}
	}
function $g(t, e, n, r, i, s, o, l, a) {
	;(Ur = !1), (ms = null), Vg.apply(Hg, arguments)
}
function bg(t, e, n, r, i, s, o, l, a) {
	if (($g.apply(this, arguments), Ur)) {
		if (Ur) {
			var u = ms
			;(Ur = !1), (ms = null)
		} else throw Error(C(198))
		gs || ((gs = !0), (Dl = u))
	}
}
function Tn(t) {
	var e = t,
		n = t
	if (t.alternate) for (; e.return; ) e = e.return
	else {
		t = e
		do (e = t), e.flags & 4098 && (n = e.return), (t = e.return)
		while (t)
	}
	return e.tag === 3 ? n : null
}
function Wf(t) {
	if (t.tag === 13) {
		var e = t.memoizedState
		if (
			(e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
			e !== null)
		)
			return e.dehydrated
	}
	return null
}
function vc(t) {
	if (Tn(t) !== t) throw Error(C(188))
}
function Qg(t) {
	var e = t.alternate
	if (!e) {
		if (((e = Tn(t)), e === null)) throw Error(C(188))
		return e !== t ? null : t
	}
	for (var n = t, r = e; ; ) {
		var i = n.return
		if (i === null) break
		var s = i.alternate
		if (s === null) {
			if (((r = i.return), r !== null)) {
				n = r
				continue
			}
			break
		}
		if (i.child === s.child) {
			for (s = i.child; s; ) {
				if (s === n) return vc(i), t
				if (s === r) return vc(i), e
				s = s.sibling
			}
			throw Error(C(188))
		}
		if (n.return !== r.return) (n = i), (r = s)
		else {
			for (var o = !1, l = i.child; l; ) {
				if (l === n) {
					;(o = !0), (n = i), (r = s)
					break
				}
				if (l === r) {
					;(o = !0), (r = i), (n = s)
					break
				}
				l = l.sibling
			}
			if (!o) {
				for (l = s.child; l; ) {
					if (l === n) {
						;(o = !0), (n = s), (r = i)
						break
					}
					if (l === r) {
						;(o = !0), (r = s), (n = i)
						break
					}
					l = l.sibling
				}
				if (!o) throw Error(C(189))
			}
		}
		if (n.alternate !== r) throw Error(C(190))
	}
	if (n.tag !== 3) throw Error(C(188))
	return n.stateNode.current === n ? t : e
}
function Vf(t) {
	return (t = Qg(t)), t !== null ? Hf(t) : null
}
function Hf(t) {
	if (t.tag === 5 || t.tag === 6) return t
	for (t = t.child; t !== null; ) {
		var e = Hf(t)
		if (e !== null) return e
		t = t.sibling
	}
	return null
}
var $f = je.unstable_scheduleCallback,
	Cc = je.unstable_cancelCallback,
	Gg = je.unstable_shouldYield,
	Kg = je.unstable_requestPaint,
	re = je.unstable_now,
	Yg = je.unstable_getCurrentPriorityLevel,
	ja = je.unstable_ImmediatePriority,
	bf = je.unstable_UserBlockingPriority,
	_s = je.unstable_NormalPriority,
	qg = je.unstable_LowPriority,
	Qf = je.unstable_IdlePriority,
	to = null,
	ct = null
function Xg(t) {
	if (ct && typeof ct.onCommitFiberRoot == 'function')
		try {
			ct.onCommitFiberRoot(to, t, void 0, (t.current.flags & 128) === 128)
		} catch {}
}
var rt = Math.clz32 ? Math.clz32 : e_,
	Jg = Math.log,
	Zg = Math.LN2
function e_(t) {
	return (t >>>= 0), t === 0 ? 32 : (31 - ((Jg(t) / Zg) | 0)) | 0
}
var Wi = 64,
	Vi = 4194304
function Lr(t) {
	switch (t & -t) {
		case 1:
			return 1
		case 2:
			return 2
		case 4:
			return 4
		case 8:
			return 8
		case 16:
			return 16
		case 32:
			return 32
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t & 4194240
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return t & 130023424
		case 134217728:
			return 134217728
		case 268435456:
			return 268435456
		case 536870912:
			return 536870912
		case 1073741824:
			return 1073741824
		default:
			return t
	}
}
function ys(t, e) {
	var n = t.pendingLanes
	if (n === 0) return 0
	var r = 0,
		i = t.suspendedLanes,
		s = t.pingedLanes,
		o = n & 268435455
	if (o !== 0) {
		var l = o & ~i
		l !== 0 ? (r = Lr(l)) : ((s &= o), s !== 0 && (r = Lr(s)))
	} else (o = n & ~i), o !== 0 ? (r = Lr(o)) : s !== 0 && (r = Lr(s))
	if (r === 0) return 0
	if (
		e !== 0 &&
		e !== r &&
		!(e & i) &&
		((i = r & -r), (s = e & -e), i >= s || (i === 16 && (s & 4194240) !== 0))
	)
		return e
	if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
		for (t = t.entanglements, e &= r; 0 < e; )
			(n = 31 - rt(e)), (i = 1 << n), (r |= t[n]), (e &= ~i)
	return r
}
function t_(t, e) {
	switch (t) {
		case 1:
		case 2:
		case 4:
			return e + 250
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e + 5e3
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1
		default:
			return -1
	}
}
function n_(t, e) {
	for (
		var n = t.suspendedLanes,
			r = t.pingedLanes,
			i = t.expirationTimes,
			s = t.pendingLanes;
		0 < s;

	) {
		var o = 31 - rt(s),
			l = 1 << o,
			a = i[o]
		a === -1
			? (!(l & n) || l & r) && (i[o] = t_(l, e))
			: a <= e && (t.expiredLanes |= l),
			(s &= ~l)
	}
}
function Ol(t) {
	return (
		(t = t.pendingLanes & -1073741825),
		t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
	)
}
function Gf() {
	var t = Wi
	return (Wi <<= 1), !(Wi & 4194240) && (Wi = 64), t
}
function zo(t) {
	for (var e = [], n = 0; 31 > n; n++) e.push(t)
	return e
}
function Ti(t, e, n) {
	;(t.pendingLanes |= e),
		e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
		(t = t.eventTimes),
		(e = 31 - rt(e)),
		(t[e] = n)
}
function r_(t, e) {
	var n = t.pendingLanes & ~e
	;(t.pendingLanes = e),
		(t.suspendedLanes = 0),
		(t.pingedLanes = 0),
		(t.expiredLanes &= e),
		(t.mutableReadLanes &= e),
		(t.entangledLanes &= e),
		(e = t.entanglements)
	var r = t.eventTimes
	for (t = t.expirationTimes; 0 < n; ) {
		var i = 31 - rt(n),
			s = 1 << i
		;(e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s)
	}
}
function Ba(t, e) {
	var n = (t.entangledLanes |= e)
	for (t = t.entanglements; n; ) {
		var r = 31 - rt(n),
			i = 1 << r
		;(i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i)
	}
}
var B = 0
function Kf(t) {
	return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1
}
var Yf,
	Wa,
	qf,
	Xf,
	Jf,
	Al = !1,
	Hi = [],
	Lt = null,
	Ft = null,
	zt = null,
	Zr = new Map(),
	ei = new Map(),
	Dt = [],
	i_ =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		)
function wc(t, e) {
	switch (t) {
		case 'focusin':
		case 'focusout':
			Lt = null
			break
		case 'dragenter':
		case 'dragleave':
			Ft = null
			break
		case 'mouseover':
		case 'mouseout':
			zt = null
			break
		case 'pointerover':
		case 'pointerout':
			Zr.delete(e.pointerId)
			break
		case 'gotpointercapture':
		case 'lostpointercapture':
			ei.delete(e.pointerId)
	}
}
function Sr(t, e, n, r, i, s) {
	return t === null || t.nativeEvent !== s
		? ((t = {
				blockedOn: e,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: s,
				targetContainers: [i]
		  }),
		  e !== null && ((e = Ni(e)), e !== null && Wa(e)),
		  t)
		: ((t.eventSystemFlags |= r),
		  (e = t.targetContainers),
		  i !== null && e.indexOf(i) === -1 && e.push(i),
		  t)
}
function s_(t, e, n, r, i) {
	switch (e) {
		case 'focusin':
			return (Lt = Sr(Lt, t, e, n, r, i)), !0
		case 'dragenter':
			return (Ft = Sr(Ft, t, e, n, r, i)), !0
		case 'mouseover':
			return (zt = Sr(zt, t, e, n, r, i)), !0
		case 'pointerover':
			var s = i.pointerId
			return Zr.set(s, Sr(Zr.get(s) || null, t, e, n, r, i)), !0
		case 'gotpointercapture':
			return (
				(s = i.pointerId), ei.set(s, Sr(ei.get(s) || null, t, e, n, r, i)), !0
			)
	}
	return !1
}
function Zf(t) {
	var e = on(t.target)
	if (e !== null) {
		var n = Tn(e)
		if (n !== null) {
			if (((e = n.tag), e === 13)) {
				if (((e = Wf(n)), e !== null)) {
					;(t.blockedOn = e),
						Jf(t.priority, function () {
							qf(n)
						})
					return
				}
			} else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
				return
			}
		}
	}
	t.blockedOn = null
}
function is(t) {
	if (t.blockedOn !== null) return !1
	for (var e = t.targetContainers; 0 < e.length; ) {
		var n = Ml(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent)
		if (n === null) {
			n = t.nativeEvent
			var r = new n.constructor(n.type, n)
			;(xl = r), n.target.dispatchEvent(r), (xl = null)
		} else return (e = Ni(n)), e !== null && Wa(e), (t.blockedOn = n), !1
		e.shift()
	}
	return !0
}
function Ec(t, e, n) {
	is(t) && n.delete(e)
}
function o_() {
	;(Al = !1),
		Lt !== null && is(Lt) && (Lt = null),
		Ft !== null && is(Ft) && (Ft = null),
		zt !== null && is(zt) && (zt = null),
		Zr.forEach(Ec),
		ei.forEach(Ec)
}
function kr(t, e) {
	t.blockedOn === e &&
		((t.blockedOn = null),
		Al ||
			((Al = !0), je.unstable_scheduleCallback(je.unstable_NormalPriority, o_)))
}
function ti(t) {
	function e(i) {
		return kr(i, t)
	}
	if (0 < Hi.length) {
		kr(Hi[0], t)
		for (var n = 1; n < Hi.length; n++) {
			var r = Hi[n]
			r.blockedOn === t && (r.blockedOn = null)
		}
	}
	for (
		Lt !== null && kr(Lt, t),
			Ft !== null && kr(Ft, t),
			zt !== null && kr(zt, t),
			Zr.forEach(e),
			ei.forEach(e),
			n = 0;
		n < Dt.length;
		n++
	)
		(r = Dt[n]), r.blockedOn === t && (r.blockedOn = null)
	for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
		Zf(n), n.blockedOn === null && Dt.shift()
}
var bn = Tt.ReactCurrentBatchConfig,
	vs = !0
function l_(t, e, n, r) {
	var i = B,
		s = bn.transition
	bn.transition = null
	try {
		;(B = 1), Va(t, e, n, r)
	} finally {
		;(B = i), (bn.transition = s)
	}
}
function a_(t, e, n, r) {
	var i = B,
		s = bn.transition
	bn.transition = null
	try {
		;(B = 4), Va(t, e, n, r)
	} finally {
		;(B = i), (bn.transition = s)
	}
}
function Va(t, e, n, r) {
	if (vs) {
		var i = Ml(t, e, n, r)
		if (i === null) Go(t, e, r, Cs, n), wc(t, r)
		else if (s_(i, t, e, n, r)) r.stopPropagation()
		else if ((wc(t, r), e & 4 && -1 < i_.indexOf(t))) {
			for (; i !== null; ) {
				var s = Ni(i)
				if (
					(s !== null && Yf(s),
					(s = Ml(t, e, n, r)),
					s === null && Go(t, e, r, Cs, n),
					s === i)
				)
					break
				i = s
			}
			i !== null && r.stopPropagation()
		} else Go(t, e, r, null, n)
	}
}
var Cs = null
function Ml(t, e, n, r) {
	if (((Cs = null), (t = Ua(r)), (t = on(t)), t !== null))
		if (((e = Tn(t)), e === null)) t = null
		else if (((n = e.tag), n === 13)) {
			if (((t = Wf(e)), t !== null)) return t
			t = null
		} else if (n === 3) {
			if (e.stateNode.current.memoizedState.isDehydrated)
				return e.tag === 3 ? e.stateNode.containerInfo : null
			t = null
		} else e !== t && (t = null)
	return (Cs = t), null
}
function eh(t) {
	switch (t) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4
		case 'message':
			switch (Yg()) {
				case ja:
					return 1
				case bf:
					return 4
				case _s:
				case qg:
					return 16
				case Qf:
					return 536870912
				default:
					return 16
			}
		default:
			return 16
	}
}
var At = null,
	Ha = null,
	ss = null
function th() {
	if (ss) return ss
	var t,
		e = Ha,
		n = e.length,
		r,
		i = 'value' in At ? At.value : At.textContent,
		s = i.length
	for (t = 0; t < n && e[t] === i[t]; t++);
	var o = n - t
	for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
	return (ss = i.slice(t, 1 < r ? 1 - r : void 0))
}
function os(t) {
	var e = t.keyCode
	return (
		'charCode' in t
			? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
			: (t = e),
		t === 10 && (t = 13),
		32 <= t || t === 13 ? t : 0
	)
}
function $i() {
	return !0
}
function Sc() {
	return !1
}
function We(t) {
	function e(n, r, i, s, o) {
		;(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = s),
			(this.target = o),
			(this.currentTarget = null)
		for (var l in t)
			t.hasOwnProperty(l) && ((n = t[l]), (this[l] = n ? n(s) : s[l]))
		return (
			(this.isDefaultPrevented = (
				s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
			)
				? $i
				: Sc),
			(this.isPropagationStopped = Sc),
			this
		)
	}
	return (
		J(e.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0
				var n = this.nativeEvent
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = $i))
			},
			stopPropagation: function () {
				var n = this.nativeEvent
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = $i))
			},
			persist: function () {},
			isPersistent: $i
		}),
		e
	)
}
var fr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (t) {
			return t.timeStamp || Date.now()
		},
		defaultPrevented: 0,
		isTrusted: 0
	},
	$a = We(fr),
	Ii = J({}, fr, { view: 0, detail: 0 }),
	u_ = We(Ii),
	Uo,
	jo,
	Tr,
	no = J({}, Ii, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: ba,
		button: 0,
		buttons: 0,
		relatedTarget: function (t) {
			return t.relatedTarget === void 0
				? t.fromElement === t.srcElement
					? t.toElement
					: t.fromElement
				: t.relatedTarget
		},
		movementX: function (t) {
			return 'movementX' in t
				? t.movementX
				: (t !== Tr &&
						(Tr && t.type === 'mousemove'
							? ((Uo = t.screenX - Tr.screenX), (jo = t.screenY - Tr.screenY))
							: (jo = Uo = 0),
						(Tr = t)),
				  Uo)
		},
		movementY: function (t) {
			return 'movementY' in t ? t.movementY : jo
		}
	}),
	kc = We(no),
	c_ = J({}, no, { dataTransfer: 0 }),
	d_ = We(c_),
	f_ = J({}, Ii, { relatedTarget: 0 }),
	Bo = We(f_),
	h_ = J({}, fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	p_ = We(h_),
	m_ = J({}, fr, {
		clipboardData: function (t) {
			return 'clipboardData' in t ? t.clipboardData : window.clipboardData
		}
	}),
	g_ = We(m_),
	__ = J({}, fr, { data: 0 }),
	Tc = We(__),
	y_ = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified'
	},
	v_ = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta'
	},
	C_ = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function w_(t) {
	var e = this.nativeEvent
	return e.getModifierState ? e.getModifierState(t) : (t = C_[t]) ? !!e[t] : !1
}
function ba() {
	return w_
}
var E_ = J({}, Ii, {
		key: function (t) {
			if (t.key) {
				var e = y_[t.key] || t.key
				if (e !== 'Unidentified') return e
			}
			return t.type === 'keypress'
				? ((t = os(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
				: t.type === 'keydown' || t.type === 'keyup'
				? v_[t.keyCode] || 'Unidentified'
				: ''
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: ba,
		charCode: function (t) {
			return t.type === 'keypress' ? os(t) : 0
		},
		keyCode: function (t) {
			return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0
		},
		which: function (t) {
			return t.type === 'keypress'
				? os(t)
				: t.type === 'keydown' || t.type === 'keyup'
				? t.keyCode
				: 0
		}
	}),
	S_ = We(E_),
	k_ = J({}, no, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	}),
	Ic = We(k_),
	T_ = J({}, Ii, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: ba
	}),
	I_ = We(T_),
	N_ = J({}, fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	x_ = We(N_),
	R_ = J({}, no, {
		deltaX: function (t) {
			return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0
		},
		deltaY: function (t) {
			return 'deltaY' in t
				? t.deltaY
				: 'wheelDeltaY' in t
				? -t.wheelDeltaY
				: 'wheelDelta' in t
				? -t.wheelDelta
				: 0
		},
		deltaZ: 0,
		deltaMode: 0
	}),
	P_ = We(R_),
	D_ = [9, 13, 27, 32],
	Qa = vt && 'CompositionEvent' in window,
	jr = null
vt && 'documentMode' in document && (jr = document.documentMode)
var O_ = vt && 'TextEvent' in window && !jr,
	nh = vt && (!Qa || (jr && 8 < jr && 11 >= jr)),
	Nc = String.fromCharCode(32),
	xc = !1
function rh(t, e) {
	switch (t) {
		case 'keyup':
			return D_.indexOf(e.keyCode) !== -1
		case 'keydown':
			return e.keyCode !== 229
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0
		default:
			return !1
	}
}
function ih(t) {
	return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null
}
var Dn = !1
function A_(t, e) {
	switch (t) {
		case 'compositionend':
			return ih(e)
		case 'keypress':
			return e.which !== 32 ? null : ((xc = !0), Nc)
		case 'textInput':
			return (t = e.data), t === Nc && xc ? null : t
		default:
			return null
	}
}
function M_(t, e) {
	if (Dn)
		return t === 'compositionend' || (!Qa && rh(t, e))
			? ((t = th()), (ss = Ha = At = null), (Dn = !1), t)
			: null
	switch (t) {
		case 'paste':
			return null
		case 'keypress':
			if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
				if (e.char && 1 < e.char.length) return e.char
				if (e.which) return String.fromCharCode(e.which)
			}
			return null
		case 'compositionend':
			return nh && e.locale !== 'ko' ? null : e.data
		default:
			return null
	}
}
var L_ = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0
}
function Rc(t) {
	var e = t && t.nodeName && t.nodeName.toLowerCase()
	return e === 'input' ? !!L_[t.type] : e === 'textarea'
}
function sh(t, e, n, r) {
	Ff(r),
		(e = ws(e, 'onChange')),
		0 < e.length &&
			((n = new $a('onChange', 'change', null, n, r)),
			t.push({ event: n, listeners: e }))
}
var Br = null,
	ni = null
function F_(t) {
	gh(t, 0)
}
function ro(t) {
	var e = Mn(t)
	if (Rf(e)) return t
}
function z_(t, e) {
	if (t === 'change') return e
}
var oh = !1
if (vt) {
	var Wo
	if (vt) {
		var Vo = 'oninput' in document
		if (!Vo) {
			var Pc = document.createElement('div')
			Pc.setAttribute('oninput', 'return;'),
				(Vo = typeof Pc.oninput == 'function')
		}
		Wo = Vo
	} else Wo = !1
	oh = Wo && (!document.documentMode || 9 < document.documentMode)
}
function Dc() {
	Br && (Br.detachEvent('onpropertychange', lh), (ni = Br = null))
}
function lh(t) {
	if (t.propertyName === 'value' && ro(ni)) {
		var e = []
		sh(e, ni, t, Ua(t)), Bf(F_, e)
	}
}
function U_(t, e, n) {
	t === 'focusin'
		? (Dc(), (Br = e), (ni = n), Br.attachEvent('onpropertychange', lh))
		: t === 'focusout' && Dc()
}
function j_(t) {
	if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return ro(ni)
}
function B_(t, e) {
	if (t === 'click') return ro(e)
}
function W_(t, e) {
	if (t === 'input' || t === 'change') return ro(e)
}
function V_(t, e) {
	return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e)
}
var ot = typeof Object.is == 'function' ? Object.is : V_
function ri(t, e) {
	if (ot(t, e)) return !0
	if (typeof t != 'object' || t === null || typeof e != 'object' || e === null)
		return !1
	var n = Object.keys(t),
		r = Object.keys(e)
	if (n.length !== r.length) return !1
	for (r = 0; r < n.length; r++) {
		var i = n[r]
		if (!gl.call(e, i) || !ot(t[i], e[i])) return !1
	}
	return !0
}
function Oc(t) {
	for (; t && t.firstChild; ) t = t.firstChild
	return t
}
function Ac(t, e) {
	var n = Oc(t)
	t = 0
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = t + n.textContent.length), t <= e && r >= e))
				return { node: n, offset: e - t }
			t = r
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling
					break e
				}
				n = n.parentNode
			}
			n = void 0
		}
		n = Oc(n)
	}
}
function ah(t, e) {
	return t && e
		? t === e
			? !0
			: t && t.nodeType === 3
			? !1
			: e && e.nodeType === 3
			? ah(t, e.parentNode)
			: 'contains' in t
			? t.contains(e)
			: t.compareDocumentPosition
			? !!(t.compareDocumentPosition(e) & 16)
			: !1
		: !1
}
function uh() {
	for (var t = window, e = ps(); e instanceof t.HTMLIFrameElement; ) {
		try {
			var n = typeof e.contentWindow.location.href == 'string'
		} catch {
			n = !1
		}
		if (n) t = e.contentWindow
		else break
		e = ps(t.document)
	}
	return e
}
function Ga(t) {
	var e = t && t.nodeName && t.nodeName.toLowerCase()
	return (
		e &&
		((e === 'input' &&
			(t.type === 'text' ||
				t.type === 'search' ||
				t.type === 'tel' ||
				t.type === 'url' ||
				t.type === 'password')) ||
			e === 'textarea' ||
			t.contentEditable === 'true')
	)
}
function H_(t) {
	var e = uh(),
		n = t.focusedElem,
		r = t.selectionRange
	if (
		e !== n &&
		n &&
		n.ownerDocument &&
		ah(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Ga(n)) {
			if (
				((e = r.start),
				(t = r.end),
				t === void 0 && (t = e),
				'selectionStart' in n)
			)
				(n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length))
			else if (
				((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
				t.getSelection)
			) {
				t = t.getSelection()
				var i = n.textContent.length,
					s = Math.min(r.start, i)
				;(r = r.end === void 0 ? s : Math.min(r.end, i)),
					!t.extend && s > r && ((i = r), (r = s), (s = i)),
					(i = Ac(n, s))
				var o = Ac(n, r)
				i &&
					o &&
					(t.rangeCount !== 1 ||
						t.anchorNode !== i.node ||
						t.anchorOffset !== i.offset ||
						t.focusNode !== o.node ||
						t.focusOffset !== o.offset) &&
					((e = e.createRange()),
					e.setStart(i.node, i.offset),
					t.removeAllRanges(),
					s > r
						? (t.addRange(e), t.extend(o.node, o.offset))
						: (e.setEnd(o.node, o.offset), t.addRange(e)))
			}
		}
		for (e = [], t = n; (t = t.parentNode); )
			t.nodeType === 1 &&
				e.push({ element: t, left: t.scrollLeft, top: t.scrollTop })
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < e.length; n++)
			(t = e[n]), (t.element.scrollLeft = t.left), (t.element.scrollTop = t.top)
	}
}
var $_ = vt && 'documentMode' in document && 11 >= document.documentMode,
	On = null,
	Ll = null,
	Wr = null,
	Fl = !1
function Mc(t, e, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
	Fl ||
		On == null ||
		On !== ps(r) ||
		((r = On),
		'selectionStart' in r && Ga(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset
			  })),
		(Wr && ri(Wr, r)) ||
			((Wr = r),
			(r = ws(Ll, 'onSelect')),
			0 < r.length &&
				((e = new $a('onSelect', 'select', null, e, n)),
				t.push({ event: e, listeners: r }),
				(e.target = On))))
}
function bi(t, e) {
	var n = {}
	return (
		(n[t.toLowerCase()] = e.toLowerCase()),
		(n['Webkit' + t] = 'webkit' + e),
		(n['Moz' + t] = 'moz' + e),
		n
	)
}
var An = {
		animationend: bi('Animation', 'AnimationEnd'),
		animationiteration: bi('Animation', 'AnimationIteration'),
		animationstart: bi('Animation', 'AnimationStart'),
		transitionend: bi('Transition', 'TransitionEnd')
	},
	Ho = {},
	ch = {}
vt &&
	((ch = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete An.animationend.animation,
		delete An.animationiteration.animation,
		delete An.animationstart.animation),
	'TransitionEvent' in window || delete An.transitionend.transition)
function io(t) {
	if (Ho[t]) return Ho[t]
	if (!An[t]) return t
	var e = An[t],
		n
	for (n in e) if (e.hasOwnProperty(n) && n in ch) return (Ho[t] = e[n])
	return t
}
var dh = io('animationend'),
	fh = io('animationiteration'),
	hh = io('animationstart'),
	ph = io('transitionend'),
	mh = new Map(),
	Lc =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		)
function qt(t, e) {
	mh.set(t, e), kn(e, [t])
}
for (var $o = 0; $o < Lc.length; $o++) {
	var bo = Lc[$o],
		b_ = bo.toLowerCase(),
		Q_ = bo[0].toUpperCase() + bo.slice(1)
	qt(b_, 'on' + Q_)
}
qt(dh, 'onAnimationEnd')
qt(fh, 'onAnimationIteration')
qt(hh, 'onAnimationStart')
qt('dblclick', 'onDoubleClick')
qt('focusin', 'onFocus')
qt('focusout', 'onBlur')
qt(ph, 'onTransitionEnd')
Zn('onMouseEnter', ['mouseout', 'mouseover'])
Zn('onMouseLeave', ['mouseout', 'mouseover'])
Zn('onPointerEnter', ['pointerout', 'pointerover'])
Zn('onPointerLeave', ['pointerout', 'pointerover'])
kn(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
kn(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' '
	)
)
kn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
kn(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
kn(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
kn(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var Fr =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	G_ = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Fr))
function Fc(t, e, n) {
	var r = t.type || 'unknown-event'
	;(t.currentTarget = n), bg(r, e, void 0, t), (t.currentTarget = null)
}
function gh(t, e) {
	e = (e & 4) !== 0
	for (var n = 0; n < t.length; n++) {
		var r = t[n],
			i = r.event
		r = r.listeners
		e: {
			var s = void 0
			if (e)
				for (var o = r.length - 1; 0 <= o; o--) {
					var l = r[o],
						a = l.instance,
						u = l.currentTarget
					if (((l = l.listener), a !== s && i.isPropagationStopped())) break e
					Fc(i, l, u), (s = a)
				}
			else
				for (o = 0; o < r.length; o++) {
					if (
						((l = r[o]),
						(a = l.instance),
						(u = l.currentTarget),
						(l = l.listener),
						a !== s && i.isPropagationStopped())
					)
						break e
					Fc(i, l, u), (s = a)
				}
		}
	}
	if (gs) throw ((t = Dl), (gs = !1), (Dl = null), t)
}
function b(t, e) {
	var n = e[Wl]
	n === void 0 && (n = e[Wl] = new Set())
	var r = t + '__bubble'
	n.has(r) || (_h(e, t, 2, !1), n.add(r))
}
function Qo(t, e, n) {
	var r = 0
	e && (r |= 4), _h(n, t, r, e)
}
var Qi = '_reactListening' + Math.random().toString(36).slice(2)
function ii(t) {
	if (!t[Qi]) {
		;(t[Qi] = !0),
			kf.forEach(function (n) {
				n !== 'selectionchange' && (G_.has(n) || Qo(n, !1, t), Qo(n, !0, t))
			})
		var e = t.nodeType === 9 ? t : t.ownerDocument
		e === null || e[Qi] || ((e[Qi] = !0), Qo('selectionchange', !1, e))
	}
}
function _h(t, e, n, r) {
	switch (eh(e)) {
		case 1:
			var i = l_
			break
		case 4:
			i = a_
			break
		default:
			i = Va
	}
	;(n = i.bind(null, e, n, t)),
		(i = void 0),
		!Pl ||
			(e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
			(i = !0),
		r
			? i !== void 0
				? t.addEventListener(e, n, { capture: !0, passive: i })
				: t.addEventListener(e, n, !0)
			: i !== void 0
			? t.addEventListener(e, n, { passive: i })
			: t.addEventListener(e, n, !1)
}
function Go(t, e, n, r, i) {
	var s = r
	if (!(e & 1) && !(e & 2) && r !== null)
		e: for (;;) {
			if (r === null) return
			var o = r.tag
			if (o === 3 || o === 4) {
				var l = r.stateNode.containerInfo
				if (l === i || (l.nodeType === 8 && l.parentNode === i)) break
				if (o === 4)
					for (o = r.return; o !== null; ) {
						var a = o.tag
						if (
							(a === 3 || a === 4) &&
							((a = o.stateNode.containerInfo),
							a === i || (a.nodeType === 8 && a.parentNode === i))
						)
							return
						o = o.return
					}
				for (; l !== null; ) {
					if (((o = on(l)), o === null)) return
					if (((a = o.tag), a === 5 || a === 6)) {
						r = s = o
						continue e
					}
					l = l.parentNode
				}
			}
			r = r.return
		}
	Bf(function () {
		var u = s,
			f = Ua(n),
			c = []
		e: {
			var d = mh.get(t)
			if (d !== void 0) {
				var g = $a,
					_ = t
				switch (t) {
					case 'keypress':
						if (os(n) === 0) break e
					case 'keydown':
					case 'keyup':
						g = S_
						break
					case 'focusin':
						;(_ = 'focus'), (g = Bo)
						break
					case 'focusout':
						;(_ = 'blur'), (g = Bo)
						break
					case 'beforeblur':
					case 'afterblur':
						g = Bo
						break
					case 'click':
						if (n.button === 2) break e
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						g = kc
						break
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						g = d_
						break
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						g = I_
						break
					case dh:
					case fh:
					case hh:
						g = p_
						break
					case ph:
						g = x_
						break
					case 'scroll':
						g = u_
						break
					case 'wheel':
						g = P_
						break
					case 'copy':
					case 'cut':
					case 'paste':
						g = g_
						break
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						g = Ic
				}
				var y = (e & 4) !== 0,
					R = !y && t === 'scroll',
					p = y ? (d !== null ? d + 'Capture' : null) : d
				y = []
				for (var h = u, m; h !== null; ) {
					m = h
					var v = m.stateNode
					if (
						(m.tag === 5 &&
							v !== null &&
							((m = v),
							p !== null && ((v = Jr(h, p)), v != null && y.push(si(h, v, m)))),
						R)
					)
						break
					h = h.return
				}
				0 < y.length &&
					((d = new g(d, _, null, n, f)), c.push({ event: d, listeners: y }))
			}
		}
		if (!(e & 7)) {
			e: {
				if (
					((d = t === 'mouseover' || t === 'pointerover'),
					(g = t === 'mouseout' || t === 'pointerout'),
					d &&
						n !== xl &&
						(_ = n.relatedTarget || n.fromElement) &&
						(on(_) || _[Ct]))
				)
					break e
				if (
					(g || d) &&
					((d =
						f.window === f
							? f
							: (d = f.ownerDocument)
							? d.defaultView || d.parentWindow
							: window),
					g
						? ((_ = n.relatedTarget || n.toElement),
						  (g = u),
						  (_ = _ ? on(_) : null),
						  _ !== null &&
								((R = Tn(_)), _ !== R || (_.tag !== 5 && _.tag !== 6)) &&
								(_ = null))
						: ((g = null), (_ = u)),
					g !== _)
				) {
					if (
						((y = kc),
						(v = 'onMouseLeave'),
						(p = 'onMouseEnter'),
						(h = 'mouse'),
						(t === 'pointerout' || t === 'pointerover') &&
							((y = Ic),
							(v = 'onPointerLeave'),
							(p = 'onPointerEnter'),
							(h = 'pointer')),
						(R = g == null ? d : Mn(g)),
						(m = _ == null ? d : Mn(_)),
						(d = new y(v, h + 'leave', g, n, f)),
						(d.target = R),
						(d.relatedTarget = m),
						(v = null),
						on(f) === u &&
							((y = new y(p, h + 'enter', _, n, f)),
							(y.target = m),
							(y.relatedTarget = R),
							(v = y)),
						(R = v),
						g && _)
					)
						t: {
							for (y = g, p = _, h = 0, m = y; m; m = Nn(m)) h++
							for (m = 0, v = p; v; v = Nn(v)) m++
							for (; 0 < h - m; ) (y = Nn(y)), h--
							for (; 0 < m - h; ) (p = Nn(p)), m--
							for (; h--; ) {
								if (y === p || (p !== null && y === p.alternate)) break t
								;(y = Nn(y)), (p = Nn(p))
							}
							y = null
						}
					else y = null
					g !== null && zc(c, d, g, y, !1),
						_ !== null && R !== null && zc(c, R, _, y, !0)
				}
			}
			e: {
				if (
					((d = u ? Mn(u) : window),
					(g = d.nodeName && d.nodeName.toLowerCase()),
					g === 'select' || (g === 'input' && d.type === 'file'))
				)
					var S = z_
				else if (Rc(d))
					if (oh) S = W_
					else {
						S = j_
						var T = U_
					}
				else
					(g = d.nodeName) &&
						g.toLowerCase() === 'input' &&
						(d.type === 'checkbox' || d.type === 'radio') &&
						(S = B_)
				if (S && (S = S(t, u))) {
					sh(c, S, n, f)
					break e
				}
				T && T(t, d, u),
					t === 'focusout' &&
						(T = d._wrapperState) &&
						T.controlled &&
						d.type === 'number' &&
						Sl(d, 'number', d.value)
			}
			switch (((T = u ? Mn(u) : window), t)) {
				case 'focusin':
					;(Rc(T) || T.contentEditable === 'true') &&
						((On = T), (Ll = u), (Wr = null))
					break
				case 'focusout':
					Wr = Ll = On = null
					break
				case 'mousedown':
					Fl = !0
					break
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					;(Fl = !1), Mc(c, n, f)
					break
				case 'selectionchange':
					if ($_) break
				case 'keydown':
				case 'keyup':
					Mc(c, n, f)
			}
			var I
			if (Qa)
				e: {
					switch (t) {
						case 'compositionstart':
							var N = 'onCompositionStart'
							break e
						case 'compositionend':
							N = 'onCompositionEnd'
							break e
						case 'compositionupdate':
							N = 'onCompositionUpdate'
							break e
					}
					N = void 0
				}
			else
				Dn
					? rh(t, n) && (N = 'onCompositionEnd')
					: t === 'keydown' && n.keyCode === 229 && (N = 'onCompositionStart')
			N &&
				(nh &&
					n.locale !== 'ko' &&
					(Dn || N !== 'onCompositionStart'
						? N === 'onCompositionEnd' && Dn && (I = th())
						: ((At = f),
						  (Ha = 'value' in At ? At.value : At.textContent),
						  (Dn = !0))),
				(T = ws(u, N)),
				0 < T.length &&
					((N = new Tc(N, t, null, n, f)),
					c.push({ event: N, listeners: T }),
					I ? (N.data = I) : ((I = ih(n)), I !== null && (N.data = I)))),
				(I = O_ ? A_(t, n) : M_(t, n)) &&
					((u = ws(u, 'onBeforeInput')),
					0 < u.length &&
						((f = new Tc('onBeforeInput', 'beforeinput', null, n, f)),
						c.push({ event: f, listeners: u }),
						(f.data = I)))
		}
		gh(c, e)
	})
}
function si(t, e, n) {
	return { instance: t, listener: e, currentTarget: n }
}
function ws(t, e) {
	for (var n = e + 'Capture', r = []; t !== null; ) {
		var i = t,
			s = i.stateNode
		i.tag === 5 &&
			s !== null &&
			((i = s),
			(s = Jr(t, n)),
			s != null && r.unshift(si(t, s, i)),
			(s = Jr(t, e)),
			s != null && r.push(si(t, s, i))),
			(t = t.return)
	}
	return r
}
function Nn(t) {
	if (t === null) return null
	do t = t.return
	while (t && t.tag !== 5)
	return t || null
}
function zc(t, e, n, r, i) {
	for (var s = e._reactName, o = []; n !== null && n !== r; ) {
		var l = n,
			a = l.alternate,
			u = l.stateNode
		if (a !== null && a === r) break
		l.tag === 5 &&
			u !== null &&
			((l = u),
			i
				? ((a = Jr(n, s)), a != null && o.unshift(si(n, a, l)))
				: i || ((a = Jr(n, s)), a != null && o.push(si(n, a, l)))),
			(n = n.return)
	}
	o.length !== 0 && t.push({ event: e, listeners: o })
}
var K_ = /\r\n?/g,
	Y_ = /\u0000|\uFFFD/g
function Uc(t) {
	return (typeof t == 'string' ? t : '' + t)
		.replace(
			K_,
			`
`
		)
		.replace(Y_, '')
}
function Gi(t, e, n) {
	if (((e = Uc(e)), Uc(t) !== e && n)) throw Error(C(425))
}
function Es() {}
var zl = null,
	Ul = null
function jl(t, e) {
	return (
		t === 'textarea' ||
		t === 'noscript' ||
		typeof e.children == 'string' ||
		typeof e.children == 'number' ||
		(typeof e.dangerouslySetInnerHTML == 'object' &&
			e.dangerouslySetInnerHTML !== null &&
			e.dangerouslySetInnerHTML.__html != null)
	)
}
var Bl = typeof setTimeout == 'function' ? setTimeout : void 0,
	q_ = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	jc = typeof Promise == 'function' ? Promise : void 0,
	X_ =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof jc < 'u'
			? function (t) {
					return jc.resolve(null).then(t).catch(J_)
			  }
			: Bl
function J_(t) {
	setTimeout(function () {
		throw t
	})
}
function Ko(t, e) {
	var n = e,
		r = 0
	do {
		var i = n.nextSibling
		if ((t.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === '/$')) {
				if (r === 0) {
					t.removeChild(i), ti(e)
					return
				}
				r--
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++
		n = i
	} while (n)
	ti(e)
}
function Ut(t) {
	for (; t != null; t = t.nextSibling) {
		var e = t.nodeType
		if (e === 1 || e === 3) break
		if (e === 8) {
			if (((e = t.data), e === '$' || e === '$!' || e === '$?')) break
			if (e === '/$') return null
		}
	}
	return t
}
function Bc(t) {
	t = t.previousSibling
	for (var e = 0; t; ) {
		if (t.nodeType === 8) {
			var n = t.data
			if (n === '$' || n === '$!' || n === '$?') {
				if (e === 0) return t
				e--
			} else n === '/$' && e++
		}
		t = t.previousSibling
	}
	return null
}
var hr = Math.random().toString(36).slice(2),
	ut = '__reactFiber$' + hr,
	oi = '__reactProps$' + hr,
	Ct = '__reactContainer$' + hr,
	Wl = '__reactEvents$' + hr,
	Z_ = '__reactListeners$' + hr,
	ey = '__reactHandles$' + hr
function on(t) {
	var e = t[ut]
	if (e) return e
	for (var n = t.parentNode; n; ) {
		if ((e = n[Ct] || n[ut])) {
			if (
				((n = e.alternate),
				e.child !== null || (n !== null && n.child !== null))
			)
				for (t = Bc(t); t !== null; ) {
					if ((n = t[ut])) return n
					t = Bc(t)
				}
			return e
		}
		;(t = n), (n = t.parentNode)
	}
	return null
}
function Ni(t) {
	return (
		(t = t[ut] || t[Ct]),
		!t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
	)
}
function Mn(t) {
	if (t.tag === 5 || t.tag === 6) return t.stateNode
	throw Error(C(33))
}
function so(t) {
	return t[oi] || null
}
var Vl = [],
	Ln = -1
function Xt(t) {
	return { current: t }
}
function G(t) {
	0 > Ln || ((t.current = Vl[Ln]), (Vl[Ln] = null), Ln--)
}
function $(t, e) {
	Ln++, (Vl[Ln] = t.current), (t.current = e)
}
var Gt = {},
	Ee = Xt(Gt),
	De = Xt(!1),
	pn = Gt
function er(t, e) {
	var n = t.type.contextTypes
	if (!n) return Gt
	var r = t.stateNode
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
		return r.__reactInternalMemoizedMaskedChildContext
	var i = {},
		s
	for (s in n) i[s] = e[s]
	return (
		r &&
			((t = t.stateNode),
			(t.__reactInternalMemoizedUnmaskedChildContext = e),
			(t.__reactInternalMemoizedMaskedChildContext = i)),
		i
	)
}
function Oe(t) {
	return (t = t.childContextTypes), t != null
}
function Ss() {
	G(De), G(Ee)
}
function Wc(t, e, n) {
	if (Ee.current !== Gt) throw Error(C(168))
	$(Ee, e), $(De, n)
}
function yh(t, e, n) {
	var r = t.stateNode
	if (((e = e.childContextTypes), typeof r.getChildContext != 'function'))
		return n
	r = r.getChildContext()
	for (var i in r) if (!(i in e)) throw Error(C(108, Ug(t) || 'Unknown', i))
	return J({}, n, r)
}
function ks(t) {
	return (
		(t =
			((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Gt),
		(pn = Ee.current),
		$(Ee, t),
		$(De, De.current),
		!0
	)
}
function Vc(t, e, n) {
	var r = t.stateNode
	if (!r) throw Error(C(169))
	n
		? ((t = yh(t, e, pn)),
		  (r.__reactInternalMemoizedMergedChildContext = t),
		  G(De),
		  G(Ee),
		  $(Ee, t))
		: G(De),
		$(De, n)
}
var ht = null,
	oo = !1,
	Yo = !1
function vh(t) {
	ht === null ? (ht = [t]) : ht.push(t)
}
function ty(t) {
	;(oo = !0), vh(t)
}
function Jt() {
	if (!Yo && ht !== null) {
		Yo = !0
		var t = 0,
			e = B
		try {
			var n = ht
			for (B = 1; t < n.length; t++) {
				var r = n[t]
				do r = r(!0)
				while (r !== null)
			}
			;(ht = null), (oo = !1)
		} catch (i) {
			throw (ht !== null && (ht = ht.slice(t + 1)), $f(ja, Jt), i)
		} finally {
			;(B = e), (Yo = !1)
		}
	}
	return null
}
var Fn = [],
	zn = 0,
	Ts = null,
	Is = 0,
	He = [],
	$e = 0,
	mn = null,
	pt = 1,
	mt = ''
function tn(t, e) {
	;(Fn[zn++] = Is), (Fn[zn++] = Ts), (Ts = t), (Is = e)
}
function Ch(t, e, n) {
	;(He[$e++] = pt), (He[$e++] = mt), (He[$e++] = mn), (mn = t)
	var r = pt
	t = mt
	var i = 32 - rt(r) - 1
	;(r &= ~(1 << i)), (n += 1)
	var s = 32 - rt(e) + i
	if (30 < s) {
		var o = i - (i % 5)
		;(s = (r & ((1 << o) - 1)).toString(32)),
			(r >>= o),
			(i -= o),
			(pt = (1 << (32 - rt(e) + i)) | (n << i) | r),
			(mt = s + t)
	} else (pt = (1 << s) | (n << i) | r), (mt = t)
}
function Ka(t) {
	t.return !== null && (tn(t, 1), Ch(t, 1, 0))
}
function Ya(t) {
	for (; t === Ts; )
		(Ts = Fn[--zn]), (Fn[zn] = null), (Is = Fn[--zn]), (Fn[zn] = null)
	for (; t === mn; )
		(mn = He[--$e]),
			(He[$e] = null),
			(mt = He[--$e]),
			(He[$e] = null),
			(pt = He[--$e]),
			(He[$e] = null)
}
var Ue = null,
	ze = null,
	K = !1,
	Ze = null
function wh(t, e) {
	var n = be(5, null, null, 0)
	;(n.elementType = 'DELETED'),
		(n.stateNode = e),
		(n.return = t),
		(e = t.deletions),
		e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n)
}
function Hc(t, e) {
	switch (t.tag) {
		case 5:
			var n = t.type
			return (
				(e =
					e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
						? null
						: e),
				e !== null
					? ((t.stateNode = e), (Ue = t), (ze = Ut(e.firstChild)), !0)
					: !1
			)
		case 6:
			return (
				(e = t.pendingProps === '' || e.nodeType !== 3 ? null : e),
				e !== null ? ((t.stateNode = e), (Ue = t), (ze = null), !0) : !1
			)
		case 13:
			return (
				(e = e.nodeType !== 8 ? null : e),
				e !== null
					? ((n = mn !== null ? { id: pt, overflow: mt } : null),
					  (t.memoizedState = {
							dehydrated: e,
							treeContext: n,
							retryLane: 1073741824
					  }),
					  (n = be(18, null, null, 0)),
					  (n.stateNode = e),
					  (n.return = t),
					  (t.child = n),
					  (Ue = t),
					  (ze = null),
					  !0)
					: !1
			)
		default:
			return !1
	}
}
function Hl(t) {
	return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function $l(t) {
	if (K) {
		var e = ze
		if (e) {
			var n = e
			if (!Hc(t, e)) {
				if (Hl(t)) throw Error(C(418))
				e = Ut(n.nextSibling)
				var r = Ue
				e && Hc(t, e)
					? wh(r, n)
					: ((t.flags = (t.flags & -4097) | 2), (K = !1), (Ue = t))
			}
		} else {
			if (Hl(t)) throw Error(C(418))
			;(t.flags = (t.flags & -4097) | 2), (K = !1), (Ue = t)
		}
	}
}
function $c(t) {
	for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
		t = t.return
	Ue = t
}
function Ki(t) {
	if (t !== Ue) return !1
	if (!K) return $c(t), (K = !0), !1
	var e
	if (
		((e = t.tag !== 3) &&
			!(e = t.tag !== 5) &&
			((e = t.type),
			(e = e !== 'head' && e !== 'body' && !jl(t.type, t.memoizedProps))),
		e && (e = ze))
	) {
		if (Hl(t)) throw (Eh(), Error(C(418)))
		for (; e; ) wh(t, e), (e = Ut(e.nextSibling))
	}
	if (($c(t), t.tag === 13)) {
		if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
			throw Error(C(317))
		e: {
			for (t = t.nextSibling, e = 0; t; ) {
				if (t.nodeType === 8) {
					var n = t.data
					if (n === '/$') {
						if (e === 0) {
							ze = Ut(t.nextSibling)
							break e
						}
						e--
					} else (n !== '$' && n !== '$!' && n !== '$?') || e++
				}
				t = t.nextSibling
			}
			ze = null
		}
	} else ze = Ue ? Ut(t.stateNode.nextSibling) : null
	return !0
}
function Eh() {
	for (var t = ze; t; ) t = Ut(t.nextSibling)
}
function tr() {
	;(ze = Ue = null), (K = !1)
}
function qa(t) {
	Ze === null ? (Ze = [t]) : Ze.push(t)
}
var ny = Tt.ReactCurrentBatchConfig
function Xe(t, e) {
	if (t && t.defaultProps) {
		;(e = J({}, e)), (t = t.defaultProps)
		for (var n in t) e[n] === void 0 && (e[n] = t[n])
		return e
	}
	return e
}
var Ns = Xt(null),
	xs = null,
	Un = null,
	Xa = null
function Ja() {
	Xa = Un = xs = null
}
function Za(t) {
	var e = Ns.current
	G(Ns), (t._currentValue = e)
}
function bl(t, e, n) {
	for (; t !== null; ) {
		var r = t.alternate
		if (
			((t.childLanes & e) !== e
				? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
				: r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
			t === n)
		)
			break
		t = t.return
	}
}
function Qn(t, e) {
	;(xs = t),
		(Xa = Un = null),
		(t = t.dependencies),
		t !== null &&
			t.firstContext !== null &&
			(t.lanes & e && (xe = !0), (t.firstContext = null))
}
function Ge(t) {
	var e = t._currentValue
	if (Xa !== t)
		if (((t = { context: t, memoizedValue: e, next: null }), Un === null)) {
			if (xs === null) throw Error(C(308))
			;(Un = t), (xs.dependencies = { lanes: 0, firstContext: t })
		} else Un = Un.next = t
	return e
}
var ln = null
function eu(t) {
	ln === null ? (ln = [t]) : ln.push(t)
}
function Sh(t, e, n, r) {
	var i = e.interleaved
	return (
		i === null ? ((n.next = n), eu(e)) : ((n.next = i.next), (i.next = n)),
		(e.interleaved = n),
		wt(t, r)
	)
}
function wt(t, e) {
	t.lanes |= e
	var n = t.alternate
	for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
		(t.childLanes |= e),
			(n = t.alternate),
			n !== null && (n.childLanes |= e),
			(n = t),
			(t = t.return)
	return n.tag === 3 ? n.stateNode : null
}
var Pt = !1
function tu(t) {
	t.updateQueue = {
		baseState: t.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null
	}
}
function kh(t, e) {
	;(t = t.updateQueue),
		e.updateQueue === t &&
			(e.updateQueue = {
				baseState: t.baseState,
				firstBaseUpdate: t.firstBaseUpdate,
				lastBaseUpdate: t.lastBaseUpdate,
				shared: t.shared,
				effects: t.effects
			})
}
function _t(t, e) {
	return {
		eventTime: t,
		lane: e,
		tag: 0,
		payload: null,
		callback: null,
		next: null
	}
}
function jt(t, e, n) {
	var r = t.updateQueue
	if (r === null) return null
	if (((r = r.shared), z & 2)) {
		var i = r.pending
		return (
			i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
			(r.pending = e),
			wt(t, n)
		)
	}
	return (
		(i = r.interleaved),
		i === null ? ((e.next = e), eu(r)) : ((e.next = i.next), (i.next = e)),
		(r.interleaved = e),
		wt(t, n)
	)
}
function ls(t, e, n) {
	if (
		((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
	) {
		var r = e.lanes
		;(r &= t.pendingLanes), (n |= r), (e.lanes = n), Ba(t, n)
	}
}
function bc(t, e) {
	var n = t.updateQueue,
		r = t.alternate
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			s = null
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var o = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null
				}
				s === null ? (i = s = o) : (s = s.next = o), (n = n.next)
			} while (n !== null)
			s === null ? (i = s = e) : (s = s.next = e)
		} else i = s = e
		;(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: s,
			shared: r.shared,
			effects: r.effects
		}),
			(t.updateQueue = n)
		return
	}
	;(t = n.lastBaseUpdate),
		t === null ? (n.firstBaseUpdate = e) : (t.next = e),
		(n.lastBaseUpdate = e)
}
function Rs(t, e, n, r) {
	var i = t.updateQueue
	Pt = !1
	var s = i.firstBaseUpdate,
		o = i.lastBaseUpdate,
		l = i.shared.pending
	if (l !== null) {
		i.shared.pending = null
		var a = l,
			u = a.next
		;(a.next = null), o === null ? (s = u) : (o.next = u), (o = a)
		var f = t.alternate
		f !== null &&
			((f = f.updateQueue),
			(l = f.lastBaseUpdate),
			l !== o &&
				(l === null ? (f.firstBaseUpdate = u) : (l.next = u),
				(f.lastBaseUpdate = a)))
	}
	if (s !== null) {
		var c = i.baseState
		;(o = 0), (f = u = a = null), (l = s)
		do {
			var d = l.lane,
				g = l.eventTime
			if ((r & d) === d) {
				f !== null &&
					(f = f.next =
						{
							eventTime: g,
							lane: 0,
							tag: l.tag,
							payload: l.payload,
							callback: l.callback,
							next: null
						})
				e: {
					var _ = t,
						y = l
					switch (((d = e), (g = n), y.tag)) {
						case 1:
							if (((_ = y.payload), typeof _ == 'function')) {
								c = _.call(g, c, d)
								break e
							}
							c = _
							break e
						case 3:
							_.flags = (_.flags & -65537) | 128
						case 0:
							if (
								((_ = y.payload),
								(d = typeof _ == 'function' ? _.call(g, c, d) : _),
								d == null)
							)
								break e
							c = J({}, c, d)
							break e
						case 2:
							Pt = !0
					}
				}
				l.callback !== null &&
					l.lane !== 0 &&
					((t.flags |= 64),
					(d = i.effects),
					d === null ? (i.effects = [l]) : d.push(l))
			} else
				(g = {
					eventTime: g,
					lane: d,
					tag: l.tag,
					payload: l.payload,
					callback: l.callback,
					next: null
				}),
					f === null ? ((u = f = g), (a = c)) : (f = f.next = g),
					(o |= d)
			if (((l = l.next), l === null)) {
				if (((l = i.shared.pending), l === null)) break
				;(d = l),
					(l = d.next),
					(d.next = null),
					(i.lastBaseUpdate = d),
					(i.shared.pending = null)
			}
		} while (1)
		if (
			(f === null && (a = c),
			(i.baseState = a),
			(i.firstBaseUpdate = u),
			(i.lastBaseUpdate = f),
			(e = i.shared.interleaved),
			e !== null)
		) {
			i = e
			do (o |= i.lane), (i = i.next)
			while (i !== e)
		} else s === null && (i.shared.lanes = 0)
		;(_n |= o), (t.lanes = o), (t.memoizedState = c)
	}
}
function Qc(t, e, n) {
	if (((t = e.effects), (e.effects = null), t !== null))
		for (e = 0; e < t.length; e++) {
			var r = t[e],
				i = r.callback
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != 'function'))
					throw Error(C(191, i))
				i.call(r)
			}
		}
}
var Th = new Sf.Component().refs
function Ql(t, e, n, r) {
	;(e = t.memoizedState),
		(n = n(r, e)),
		(n = n == null ? e : J({}, e, n)),
		(t.memoizedState = n),
		t.lanes === 0 && (t.updateQueue.baseState = n)
}
var lo = {
	isMounted: function (t) {
		return (t = t._reactInternals) ? Tn(t) === t : !1
	},
	enqueueSetState: function (t, e, n) {
		t = t._reactInternals
		var r = ke(),
			i = Wt(t),
			s = _t(r, i)
		;(s.payload = e),
			n != null && (s.callback = n),
			(e = jt(t, s, i)),
			e !== null && (it(e, t, i, r), ls(e, t, i))
	},
	enqueueReplaceState: function (t, e, n) {
		t = t._reactInternals
		var r = ke(),
			i = Wt(t),
			s = _t(r, i)
		;(s.tag = 1),
			(s.payload = e),
			n != null && (s.callback = n),
			(e = jt(t, s, i)),
			e !== null && (it(e, t, i, r), ls(e, t, i))
	},
	enqueueForceUpdate: function (t, e) {
		t = t._reactInternals
		var n = ke(),
			r = Wt(t),
			i = _t(n, r)
		;(i.tag = 2),
			e != null && (i.callback = e),
			(e = jt(t, i, r)),
			e !== null && (it(e, t, r, n), ls(e, t, r))
	}
}
function Gc(t, e, n, r, i, s, o) {
	return (
		(t = t.stateNode),
		typeof t.shouldComponentUpdate == 'function'
			? t.shouldComponentUpdate(r, s, o)
			: e.prototype && e.prototype.isPureReactComponent
			? !ri(n, r) || !ri(i, s)
			: !0
	)
}
function Ih(t, e, n) {
	var r = !1,
		i = Gt,
		s = e.contextType
	return (
		typeof s == 'object' && s !== null
			? (s = Ge(s))
			: ((i = Oe(e) ? pn : Ee.current),
			  (r = e.contextTypes),
			  (s = (r = r != null) ? er(t, i) : Gt)),
		(e = new e(n, s)),
		(t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
		(e.updater = lo),
		(t.stateNode = e),
		(e._reactInternals = t),
		r &&
			((t = t.stateNode),
			(t.__reactInternalMemoizedUnmaskedChildContext = i),
			(t.__reactInternalMemoizedMaskedChildContext = s)),
		e
	)
}
function Kc(t, e, n, r) {
	;(t = e.state),
		typeof e.componentWillReceiveProps == 'function' &&
			e.componentWillReceiveProps(n, r),
		typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
			e.UNSAFE_componentWillReceiveProps(n, r),
		e.state !== t && lo.enqueueReplaceState(e, e.state, null)
}
function Gl(t, e, n, r) {
	var i = t.stateNode
	;(i.props = n), (i.state = t.memoizedState), (i.refs = Th), tu(t)
	var s = e.contextType
	typeof s == 'object' && s !== null
		? (i.context = Ge(s))
		: ((s = Oe(e) ? pn : Ee.current), (i.context = er(t, s))),
		(i.state = t.memoizedState),
		(s = e.getDerivedStateFromProps),
		typeof s == 'function' && (Ql(t, e, s, n), (i.state = t.memoizedState)),
		typeof e.getDerivedStateFromProps == 'function' ||
			typeof i.getSnapshotBeforeUpdate == 'function' ||
			(typeof i.UNSAFE_componentWillMount != 'function' &&
				typeof i.componentWillMount != 'function') ||
			((e = i.state),
			typeof i.componentWillMount == 'function' && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == 'function' &&
				i.UNSAFE_componentWillMount(),
			e !== i.state && lo.enqueueReplaceState(i, i.state, null),
			Rs(t, n, i, r),
			(i.state = t.memoizedState)),
		typeof i.componentDidMount == 'function' && (t.flags |= 4194308)
}
function Ir(t, e, n) {
	if (
		((t = n.ref), t !== null && typeof t != 'function' && typeof t != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(C(309))
				var r = n.stateNode
			}
			if (!r) throw Error(C(147, t))
			var i = r,
				s = '' + t
			return e !== null &&
				e.ref !== null &&
				typeof e.ref == 'function' &&
				e.ref._stringRef === s
				? e.ref
				: ((e = function (o) {
						var l = i.refs
						l === Th && (l = i.refs = {}), o === null ? delete l[s] : (l[s] = o)
				  }),
				  (e._stringRef = s),
				  e)
		}
		if (typeof t != 'string') throw Error(C(284))
		if (!n._owner) throw Error(C(290, t))
	}
	return t
}
function Yi(t, e) {
	throw (
		((t = Object.prototype.toString.call(e)),
		Error(
			C(
				31,
				t === '[object Object]'
					? 'object with keys {' + Object.keys(e).join(', ') + '}'
					: t
			)
		))
	)
}
function Yc(t) {
	var e = t._init
	return e(t._payload)
}
function Nh(t) {
	function e(p, h) {
		if (t) {
			var m = p.deletions
			m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h)
		}
	}
	function n(p, h) {
		if (!t) return null
		for (; h !== null; ) e(p, h), (h = h.sibling)
		return null
	}
	function r(p, h) {
		for (p = new Map(); h !== null; )
			h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling)
		return p
	}
	function i(p, h) {
		return (p = Vt(p, h)), (p.index = 0), (p.sibling = null), p
	}
	function s(p, h, m) {
		return (
			(p.index = m),
			t
				? ((m = p.alternate),
				  m !== null
						? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
						: ((p.flags |= 2), h))
				: ((p.flags |= 1048576), h)
		)
	}
	function o(p) {
		return t && p.alternate === null && (p.flags |= 2), p
	}
	function l(p, h, m, v) {
		return h === null || h.tag !== 6
			? ((h = nl(m, p.mode, v)), (h.return = p), h)
			: ((h = i(h, m)), (h.return = p), h)
	}
	function a(p, h, m, v) {
		var S = m.type
		return S === Pn
			? f(p, h, m.props.children, v, m.key)
			: h !== null &&
			  (h.elementType === S ||
					(typeof S == 'object' &&
						S !== null &&
						S.$$typeof === Rt &&
						Yc(S) === h.type))
			? ((v = i(h, m.props)), (v.ref = Ir(p, h, m)), (v.return = p), v)
			: ((v = hs(m.type, m.key, m.props, null, p.mode, v)),
			  (v.ref = Ir(p, h, m)),
			  (v.return = p),
			  v)
	}
	function u(p, h, m, v) {
		return h === null ||
			h.tag !== 4 ||
			h.stateNode.containerInfo !== m.containerInfo ||
			h.stateNode.implementation !== m.implementation
			? ((h = rl(m, p.mode, v)), (h.return = p), h)
			: ((h = i(h, m.children || [])), (h.return = p), h)
	}
	function f(p, h, m, v, S) {
		return h === null || h.tag !== 7
			? ((h = fn(m, p.mode, v, S)), (h.return = p), h)
			: ((h = i(h, m)), (h.return = p), h)
	}
	function c(p, h, m) {
		if ((typeof h == 'string' && h !== '') || typeof h == 'number')
			return (h = nl('' + h, p.mode, m)), (h.return = p), h
		if (typeof h == 'object' && h !== null) {
			switch (h.$$typeof) {
				case Ui:
					return (
						(m = hs(h.type, h.key, h.props, null, p.mode, m)),
						(m.ref = Ir(p, null, h)),
						(m.return = p),
						m
					)
				case Rn:
					return (h = rl(h, p.mode, m)), (h.return = p), h
				case Rt:
					var v = h._init
					return c(p, v(h._payload), m)
			}
			if (Mr(h) || wr(h)) return (h = fn(h, p.mode, m, null)), (h.return = p), h
			Yi(p, h)
		}
		return null
	}
	function d(p, h, m, v) {
		var S = h !== null ? h.key : null
		if ((typeof m == 'string' && m !== '') || typeof m == 'number')
			return S !== null ? null : l(p, h, '' + m, v)
		if (typeof m == 'object' && m !== null) {
			switch (m.$$typeof) {
				case Ui:
					return m.key === S ? a(p, h, m, v) : null
				case Rn:
					return m.key === S ? u(p, h, m, v) : null
				case Rt:
					return (S = m._init), d(p, h, S(m._payload), v)
			}
			if (Mr(m) || wr(m)) return S !== null ? null : f(p, h, m, v, null)
			Yi(p, m)
		}
		return null
	}
	function g(p, h, m, v, S) {
		if ((typeof v == 'string' && v !== '') || typeof v == 'number')
			return (p = p.get(m) || null), l(h, p, '' + v, S)
		if (typeof v == 'object' && v !== null) {
			switch (v.$$typeof) {
				case Ui:
					return (p = p.get(v.key === null ? m : v.key) || null), a(h, p, v, S)
				case Rn:
					return (p = p.get(v.key === null ? m : v.key) || null), u(h, p, v, S)
				case Rt:
					var T = v._init
					return g(p, h, m, T(v._payload), S)
			}
			if (Mr(v) || wr(v)) return (p = p.get(m) || null), f(h, p, v, S, null)
			Yi(h, v)
		}
		return null
	}
	function _(p, h, m, v) {
		for (
			var S = null, T = null, I = h, N = (h = 0), te = null;
			I !== null && N < m.length;
			N++
		) {
			I.index > N ? ((te = I), (I = null)) : (te = I.sibling)
			var F = d(p, I, m[N], v)
			if (F === null) {
				I === null && (I = te)
				break
			}
			t && I && F.alternate === null && e(p, I),
				(h = s(F, h, N)),
				T === null ? (S = F) : (T.sibling = F),
				(T = F),
				(I = te)
		}
		if (N === m.length) return n(p, I), K && tn(p, N), S
		if (I === null) {
			for (; N < m.length; N++)
				(I = c(p, m[N], v)),
					I !== null &&
						((h = s(I, h, N)), T === null ? (S = I) : (T.sibling = I), (T = I))
			return K && tn(p, N), S
		}
		for (I = r(p, I); N < m.length; N++)
			(te = g(I, p, N, m[N], v)),
				te !== null &&
					(t && te.alternate !== null && I.delete(te.key === null ? N : te.key),
					(h = s(te, h, N)),
					T === null ? (S = te) : (T.sibling = te),
					(T = te))
		return (
			t &&
				I.forEach(function (Ye) {
					return e(p, Ye)
				}),
			K && tn(p, N),
			S
		)
	}
	function y(p, h, m, v) {
		var S = wr(m)
		if (typeof S != 'function') throw Error(C(150))
		if (((m = S.call(m)), m == null)) throw Error(C(151))
		for (
			var T = (S = null), I = h, N = (h = 0), te = null, F = m.next();
			I !== null && !F.done;
			N++, F = m.next()
		) {
			I.index > N ? ((te = I), (I = null)) : (te = I.sibling)
			var Ye = d(p, I, F.value, v)
			if (Ye === null) {
				I === null && (I = te)
				break
			}
			t && I && Ye.alternate === null && e(p, I),
				(h = s(Ye, h, N)),
				T === null ? (S = Ye) : (T.sibling = Ye),
				(T = Ye),
				(I = te)
		}
		if (F.done) return n(p, I), K && tn(p, N), S
		if (I === null) {
			for (; !F.done; N++, F = m.next())
				(F = c(p, F.value, v)),
					F !== null &&
						((h = s(F, h, N)), T === null ? (S = F) : (T.sibling = F), (T = F))
			return K && tn(p, N), S
		}
		for (I = r(p, I); !F.done; N++, F = m.next())
			(F = g(I, p, N, F.value, v)),
				F !== null &&
					(t && F.alternate !== null && I.delete(F.key === null ? N : F.key),
					(h = s(F, h, N)),
					T === null ? (S = F) : (T.sibling = F),
					(T = F))
		return (
			t &&
				I.forEach(function (vr) {
					return e(p, vr)
				}),
			K && tn(p, N),
			S
		)
	}
	function R(p, h, m, v) {
		if (
			(typeof m == 'object' &&
				m !== null &&
				m.type === Pn &&
				m.key === null &&
				(m = m.props.children),
			typeof m == 'object' && m !== null)
		) {
			switch (m.$$typeof) {
				case Ui:
					e: {
						for (var S = m.key, T = h; T !== null; ) {
							if (T.key === S) {
								if (((S = m.type), S === Pn)) {
									if (T.tag === 7) {
										n(p, T.sibling),
											(h = i(T, m.props.children)),
											(h.return = p),
											(p = h)
										break e
									}
								} else if (
									T.elementType === S ||
									(typeof S == 'object' &&
										S !== null &&
										S.$$typeof === Rt &&
										Yc(S) === T.type)
								) {
									n(p, T.sibling),
										(h = i(T, m.props)),
										(h.ref = Ir(p, T, m)),
										(h.return = p),
										(p = h)
									break e
								}
								n(p, T)
								break
							} else e(p, T)
							T = T.sibling
						}
						m.type === Pn
							? ((h = fn(m.props.children, p.mode, v, m.key)),
							  (h.return = p),
							  (p = h))
							: ((v = hs(m.type, m.key, m.props, null, p.mode, v)),
							  (v.ref = Ir(p, h, m)),
							  (v.return = p),
							  (p = v))
					}
					return o(p)
				case Rn:
					e: {
						for (T = m.key; h !== null; ) {
							if (h.key === T)
								if (
									h.tag === 4 &&
									h.stateNode.containerInfo === m.containerInfo &&
									h.stateNode.implementation === m.implementation
								) {
									n(p, h.sibling),
										(h = i(h, m.children || [])),
										(h.return = p),
										(p = h)
									break e
								} else {
									n(p, h)
									break
								}
							else e(p, h)
							h = h.sibling
						}
						;(h = rl(m, p.mode, v)), (h.return = p), (p = h)
					}
					return o(p)
				case Rt:
					return (T = m._init), R(p, h, T(m._payload), v)
			}
			if (Mr(m)) return _(p, h, m, v)
			if (wr(m)) return y(p, h, m, v)
			Yi(p, m)
		}
		return (typeof m == 'string' && m !== '') || typeof m == 'number'
			? ((m = '' + m),
			  h !== null && h.tag === 6
					? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
					: (n(p, h), (h = nl(m, p.mode, v)), (h.return = p), (p = h)),
			  o(p))
			: n(p, h)
	}
	return R
}
var nr = Nh(!0),
	xh = Nh(!1),
	xi = {},
	dt = Xt(xi),
	li = Xt(xi),
	ai = Xt(xi)
function an(t) {
	if (t === xi) throw Error(C(174))
	return t
}
function nu(t, e) {
	switch (($(ai, e), $(li, t), $(dt, xi), (t = e.nodeType), t)) {
		case 9:
		case 11:
			e = (e = e.documentElement) ? e.namespaceURI : Tl(null, '')
			break
		default:
			;(t = t === 8 ? e.parentNode : e),
				(e = t.namespaceURI || null),
				(t = t.tagName),
				(e = Tl(e, t))
	}
	G(dt), $(dt, e)
}
function rr() {
	G(dt), G(li), G(ai)
}
function Rh(t) {
	an(ai.current)
	var e = an(dt.current),
		n = Tl(e, t.type)
	e !== n && ($(li, t), $(dt, n))
}
function ru(t) {
	li.current === t && (G(dt), G(li))
}
var q = Xt(0)
function Ps(t) {
	for (var e = t; e !== null; ) {
		if (e.tag === 13) {
			var n = e.memoizedState
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
			)
				return e
		} else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
			if (e.flags & 128) return e
		} else if (e.child !== null) {
			;(e.child.return = e), (e = e.child)
			continue
		}
		if (e === t) break
		for (; e.sibling === null; ) {
			if (e.return === null || e.return === t) return null
			e = e.return
		}
		;(e.sibling.return = e.return), (e = e.sibling)
	}
	return null
}
var qo = []
function iu() {
	for (var t = 0; t < qo.length; t++) qo[t]._workInProgressVersionPrimary = null
	qo.length = 0
}
var as = Tt.ReactCurrentDispatcher,
	Xo = Tt.ReactCurrentBatchConfig,
	gn = 0,
	X = null,
	se = null,
	ce = null,
	Ds = !1,
	Vr = !1,
	ui = 0,
	ry = 0
function ye() {
	throw Error(C(321))
}
function su(t, e) {
	if (e === null) return !1
	for (var n = 0; n < e.length && n < t.length; n++)
		if (!ot(t[n], e[n])) return !1
	return !0
}
function ou(t, e, n, r, i, s) {
	if (
		((gn = s),
		(X = e),
		(e.memoizedState = null),
		(e.updateQueue = null),
		(e.lanes = 0),
		(as.current = t === null || t.memoizedState === null ? ly : ay),
		(t = n(r, i)),
		Vr)
	) {
		s = 0
		do {
			if (((Vr = !1), (ui = 0), 25 <= s)) throw Error(C(301))
			;(s += 1),
				(ce = se = null),
				(e.updateQueue = null),
				(as.current = uy),
				(t = n(r, i))
		} while (Vr)
	}
	if (
		((as.current = Os),
		(e = se !== null && se.next !== null),
		(gn = 0),
		(ce = se = X = null),
		(Ds = !1),
		e)
	)
		throw Error(C(300))
	return t
}
function lu() {
	var t = ui !== 0
	return (ui = 0), t
}
function at() {
	var t = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null
	}
	return ce === null ? (X.memoizedState = ce = t) : (ce = ce.next = t), ce
}
function Ke() {
	if (se === null) {
		var t = X.alternate
		t = t !== null ? t.memoizedState : null
	} else t = se.next
	var e = ce === null ? X.memoizedState : ce.next
	if (e !== null) (ce = e), (se = t)
	else {
		if (t === null) throw Error(C(310))
		;(se = t),
			(t = {
				memoizedState: se.memoizedState,
				baseState: se.baseState,
				baseQueue: se.baseQueue,
				queue: se.queue,
				next: null
			}),
			ce === null ? (X.memoizedState = ce = t) : (ce = ce.next = t)
	}
	return ce
}
function ci(t, e) {
	return typeof e == 'function' ? e(t) : e
}
function Jo(t) {
	var e = Ke(),
		n = e.queue
	if (n === null) throw Error(C(311))
	n.lastRenderedReducer = t
	var r = se,
		i = r.baseQueue,
		s = n.pending
	if (s !== null) {
		if (i !== null) {
			var o = i.next
			;(i.next = s.next), (s.next = o)
		}
		;(r.baseQueue = i = s), (n.pending = null)
	}
	if (i !== null) {
		;(s = i.next), (r = r.baseState)
		var l = (o = null),
			a = null,
			u = s
		do {
			var f = u.lane
			if ((gn & f) === f)
				a !== null &&
					(a = a.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null
						}),
					(r = u.hasEagerState ? u.eagerState : t(r, u.action))
			else {
				var c = {
					lane: f,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}
				a === null ? ((l = a = c), (o = r)) : (a = a.next = c),
					(X.lanes |= f),
					(_n |= f)
			}
			u = u.next
		} while (u !== null && u !== s)
		a === null ? (o = r) : (a.next = l),
			ot(r, e.memoizedState) || (xe = !0),
			(e.memoizedState = r),
			(e.baseState = o),
			(e.baseQueue = a),
			(n.lastRenderedState = r)
	}
	if (((t = n.interleaved), t !== null)) {
		i = t
		do (s = i.lane), (X.lanes |= s), (_n |= s), (i = i.next)
		while (i !== t)
	} else i === null && (n.lanes = 0)
	return [e.memoizedState, n.dispatch]
}
function Zo(t) {
	var e = Ke(),
		n = e.queue
	if (n === null) throw Error(C(311))
	n.lastRenderedReducer = t
	var r = n.dispatch,
		i = n.pending,
		s = e.memoizedState
	if (i !== null) {
		n.pending = null
		var o = (i = i.next)
		do (s = t(s, o.action)), (o = o.next)
		while (o !== i)
		ot(s, e.memoizedState) || (xe = !0),
			(e.memoizedState = s),
			e.baseQueue === null && (e.baseState = s),
			(n.lastRenderedState = s)
	}
	return [s, r]
}
function Ph() {}
function Dh(t, e) {
	var n = X,
		r = Ke(),
		i = e(),
		s = !ot(r.memoizedState, i)
	if (
		(s && ((r.memoizedState = i), (xe = !0)),
		(r = r.queue),
		au(Mh.bind(null, n, r, t), [t]),
		r.getSnapshot !== e || s || (ce !== null && ce.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			di(9, Ah.bind(null, n, r, i, e), void 0, null),
			he === null)
		)
			throw Error(C(349))
		gn & 30 || Oh(n, e, i)
	}
	return i
}
function Oh(t, e, n) {
	;(t.flags |= 16384),
		(t = { getSnapshot: e, value: n }),
		(e = X.updateQueue),
		e === null
			? ((e = { lastEffect: null, stores: null }),
			  (X.updateQueue = e),
			  (e.stores = [t]))
			: ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t))
}
function Ah(t, e, n, r) {
	;(e.value = n), (e.getSnapshot = r), Lh(e) && Fh(t)
}
function Mh(t, e, n) {
	return n(function () {
		Lh(e) && Fh(t)
	})
}
function Lh(t) {
	var e = t.getSnapshot
	t = t.value
	try {
		var n = e()
		return !ot(t, n)
	} catch {
		return !0
	}
}
function Fh(t) {
	var e = wt(t, 1)
	e !== null && it(e, t, 1, -1)
}
function qc(t) {
	var e = at()
	return (
		typeof t == 'function' && (t = t()),
		(e.memoizedState = e.baseState = t),
		(t = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ci,
			lastRenderedState: t
		}),
		(e.queue = t),
		(t = t.dispatch = oy.bind(null, X, t)),
		[e.memoizedState, t]
	)
}
function di(t, e, n, r) {
	return (
		(t = { tag: t, create: e, destroy: n, deps: r, next: null }),
		(e = X.updateQueue),
		e === null
			? ((e = { lastEffect: null, stores: null }),
			  (X.updateQueue = e),
			  (e.lastEffect = t.next = t))
			: ((n = e.lastEffect),
			  n === null
					? (e.lastEffect = t.next = t)
					: ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
		t
	)
}
function zh() {
	return Ke().memoizedState
}
function us(t, e, n, r) {
	var i = at()
	;(X.flags |= t),
		(i.memoizedState = di(1 | e, n, void 0, r === void 0 ? null : r))
}
function ao(t, e, n, r) {
	var i = Ke()
	r = r === void 0 ? null : r
	var s = void 0
	if (se !== null) {
		var o = se.memoizedState
		if (((s = o.destroy), r !== null && su(r, o.deps))) {
			i.memoizedState = di(e, n, s, r)
			return
		}
	}
	;(X.flags |= t), (i.memoizedState = di(1 | e, n, s, r))
}
function Xc(t, e) {
	return us(8390656, 8, t, e)
}
function au(t, e) {
	return ao(2048, 8, t, e)
}
function Uh(t, e) {
	return ao(4, 2, t, e)
}
function jh(t, e) {
	return ao(4, 4, t, e)
}
function Bh(t, e) {
	if (typeof e == 'function')
		return (
			(t = t()),
			e(t),
			function () {
				e(null)
			}
		)
	if (e != null)
		return (
			(t = t()),
			(e.current = t),
			function () {
				e.current = null
			}
		)
}
function Wh(t, e, n) {
	return (
		(n = n != null ? n.concat([t]) : null), ao(4, 4, Bh.bind(null, e, t), n)
	)
}
function uu() {}
function Vh(t, e) {
	var n = Ke()
	e = e === void 0 ? null : e
	var r = n.memoizedState
	return r !== null && e !== null && su(e, r[1])
		? r[0]
		: ((n.memoizedState = [t, e]), t)
}
function Hh(t, e) {
	var n = Ke()
	e = e === void 0 ? null : e
	var r = n.memoizedState
	return r !== null && e !== null && su(e, r[1])
		? r[0]
		: ((t = t()), (n.memoizedState = [t, e]), t)
}
function $h(t, e, n) {
	return gn & 21
		? (ot(n, e) || ((n = Gf()), (X.lanes |= n), (_n |= n), (t.baseState = !0)),
		  e)
		: (t.baseState && ((t.baseState = !1), (xe = !0)), (t.memoizedState = n))
}
function iy(t, e) {
	var n = B
	;(B = n !== 0 && 4 > n ? n : 4), t(!0)
	var r = Xo.transition
	Xo.transition = {}
	try {
		t(!1), e()
	} finally {
		;(B = n), (Xo.transition = r)
	}
}
function bh() {
	return Ke().memoizedState
}
function sy(t, e, n) {
	var r = Wt(t)
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}),
		Qh(t))
	)
		Gh(e, n)
	else if (((n = Sh(t, e, n, r)), n !== null)) {
		var i = ke()
		it(n, t, r, i), Kh(n, e, r)
	}
}
function oy(t, e, n) {
	var r = Wt(t),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
	if (Qh(t)) Gh(e, i)
	else {
		var s = t.alternate
		if (
			t.lanes === 0 &&
			(s === null || s.lanes === 0) &&
			((s = e.lastRenderedReducer), s !== null)
		)
			try {
				var o = e.lastRenderedState,
					l = s(o, n)
				if (((i.hasEagerState = !0), (i.eagerState = l), ot(l, o))) {
					var a = e.interleaved
					a === null
						? ((i.next = i), eu(e))
						: ((i.next = a.next), (a.next = i)),
						(e.interleaved = i)
					return
				}
			} catch {
			} finally {
			}
		;(n = Sh(t, e, i, r)),
			n !== null && ((i = ke()), it(n, t, r, i), Kh(n, e, r))
	}
}
function Qh(t) {
	var e = t.alternate
	return t === X || (e !== null && e === X)
}
function Gh(t, e) {
	Vr = Ds = !0
	var n = t.pending
	n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e)
}
function Kh(t, e, n) {
	if (n & 4194240) {
		var r = e.lanes
		;(r &= t.pendingLanes), (n |= r), (e.lanes = n), Ba(t, n)
	}
}
var Os = {
		readContext: Ge,
		useCallback: ye,
		useContext: ye,
		useEffect: ye,
		useImperativeHandle: ye,
		useInsertionEffect: ye,
		useLayoutEffect: ye,
		useMemo: ye,
		useReducer: ye,
		useRef: ye,
		useState: ye,
		useDebugValue: ye,
		useDeferredValue: ye,
		useTransition: ye,
		useMutableSource: ye,
		useSyncExternalStore: ye,
		useId: ye,
		unstable_isNewReconciler: !1
	},
	ly = {
		readContext: Ge,
		useCallback: function (t, e) {
			return (at().memoizedState = [t, e === void 0 ? null : e]), t
		},
		useContext: Ge,
		useEffect: Xc,
		useImperativeHandle: function (t, e, n) {
			return (
				(n = n != null ? n.concat([t]) : null),
				us(4194308, 4, Bh.bind(null, e, t), n)
			)
		},
		useLayoutEffect: function (t, e) {
			return us(4194308, 4, t, e)
		},
		useInsertionEffect: function (t, e) {
			return us(4, 2, t, e)
		},
		useMemo: function (t, e) {
			var n = at()
			return (
				(e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
			)
		},
		useReducer: function (t, e, n) {
			var r = at()
			return (
				(e = n !== void 0 ? n(e) : e),
				(r.memoizedState = r.baseState = e),
				(t = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: t,
					lastRenderedState: e
				}),
				(r.queue = t),
				(t = t.dispatch = sy.bind(null, X, t)),
				[r.memoizedState, t]
			)
		},
		useRef: function (t) {
			var e = at()
			return (t = { current: t }), (e.memoizedState = t)
		},
		useState: qc,
		useDebugValue: uu,
		useDeferredValue: function (t) {
			return (at().memoizedState = t)
		},
		useTransition: function () {
			var t = qc(!1),
				e = t[0]
			return (t = iy.bind(null, t[1])), (at().memoizedState = t), [e, t]
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (t, e, n) {
			var r = X,
				i = at()
			if (K) {
				if (n === void 0) throw Error(C(407))
				n = n()
			} else {
				if (((n = e()), he === null)) throw Error(C(349))
				gn & 30 || Oh(r, e, n)
			}
			i.memoizedState = n
			var s = { value: n, getSnapshot: e }
			return (
				(i.queue = s),
				Xc(Mh.bind(null, r, s, t), [t]),
				(r.flags |= 2048),
				di(9, Ah.bind(null, r, s, n, e), void 0, null),
				n
			)
		},
		useId: function () {
			var t = at(),
				e = he.identifierPrefix
			if (K) {
				var n = mt,
					r = pt
				;(n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
					(e = ':' + e + 'R' + n),
					(n = ui++),
					0 < n && (e += 'H' + n.toString(32)),
					(e += ':')
			} else (n = ry++), (e = ':' + e + 'r' + n.toString(32) + ':')
			return (t.memoizedState = e)
		},
		unstable_isNewReconciler: !1
	},
	ay = {
		readContext: Ge,
		useCallback: Vh,
		useContext: Ge,
		useEffect: au,
		useImperativeHandle: Wh,
		useInsertionEffect: Uh,
		useLayoutEffect: jh,
		useMemo: Hh,
		useReducer: Jo,
		useRef: zh,
		useState: function () {
			return Jo(ci)
		},
		useDebugValue: uu,
		useDeferredValue: function (t) {
			var e = Ke()
			return $h(e, se.memoizedState, t)
		},
		useTransition: function () {
			var t = Jo(ci)[0],
				e = Ke().memoizedState
			return [t, e]
		},
		useMutableSource: Ph,
		useSyncExternalStore: Dh,
		useId: bh,
		unstable_isNewReconciler: !1
	},
	uy = {
		readContext: Ge,
		useCallback: Vh,
		useContext: Ge,
		useEffect: au,
		useImperativeHandle: Wh,
		useInsertionEffect: Uh,
		useLayoutEffect: jh,
		useMemo: Hh,
		useReducer: Zo,
		useRef: zh,
		useState: function () {
			return Zo(ci)
		},
		useDebugValue: uu,
		useDeferredValue: function (t) {
			var e = Ke()
			return se === null ? (e.memoizedState = t) : $h(e, se.memoizedState, t)
		},
		useTransition: function () {
			var t = Zo(ci)[0],
				e = Ke().memoizedState
			return [t, e]
		},
		useMutableSource: Ph,
		useSyncExternalStore: Dh,
		useId: bh,
		unstable_isNewReconciler: !1
	}
function ir(t, e) {
	try {
		var n = '',
			r = e
		do (n += zg(r)), (r = r.return)
		while (r)
		var i = n
	} catch (s) {
		i =
			`
Error generating stack: ` +
			s.message +
			`
` +
			s.stack
	}
	return { value: t, source: e, stack: i, digest: null }
}
function el(t, e, n) {
	return { value: t, source: null, stack: n ?? null, digest: e ?? null }
}
function Kl(t, e) {
	try {
		console.error(e.value)
	} catch (n) {
		setTimeout(function () {
			throw n
		})
	}
}
var cy = typeof WeakMap == 'function' ? WeakMap : Map
function Yh(t, e, n) {
	;(n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null })
	var r = e.value
	return (
		(n.callback = function () {
			Ms || ((Ms = !0), (ia = r)), Kl(t, e)
		}),
		n
	)
}
function qh(t, e, n) {
	;(n = _t(-1, n)), (n.tag = 3)
	var r = t.type.getDerivedStateFromError
	if (typeof r == 'function') {
		var i = e.value
		;(n.payload = function () {
			return r(i)
		}),
			(n.callback = function () {
				Kl(t, e)
			})
	}
	var s = t.stateNode
	return (
		s !== null &&
			typeof s.componentDidCatch == 'function' &&
			(n.callback = function () {
				Kl(t, e),
					typeof r != 'function' &&
						(Bt === null ? (Bt = new Set([this])) : Bt.add(this))
				var o = e.stack
				this.componentDidCatch(e.value, { componentStack: o !== null ? o : '' })
			}),
		n
	)
}
function Jc(t, e, n) {
	var r = t.pingCache
	if (r === null) {
		r = t.pingCache = new cy()
		var i = new Set()
		r.set(e, i)
	} else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i))
	i.has(n) || (i.add(n), (t = ky.bind(null, t, e, n)), e.then(t, t))
}
function Zc(t) {
	do {
		var e
		if (
			((e = t.tag === 13) &&
				((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
			e)
		)
			return t
		t = t.return
	} while (t !== null)
	return null
}
function ed(t, e, n, r, i) {
	return t.mode & 1
		? ((t.flags |= 65536), (t.lanes = i), t)
		: (t === e
				? (t.flags |= 65536)
				: ((t.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((e = _t(-1, 1)), (e.tag = 2), jt(n, e, 1))),
				  (n.lanes |= 1)),
		  t)
}
var dy = Tt.ReactCurrentOwner,
	xe = !1
function Se(t, e, n, r) {
	e.child = t === null ? xh(e, null, n, r) : nr(e, t.child, n, r)
}
function td(t, e, n, r, i) {
	n = n.render
	var s = e.ref
	return (
		Qn(e, i),
		(r = ou(t, e, n, r, s, i)),
		(n = lu()),
		t !== null && !xe
			? ((e.updateQueue = t.updateQueue),
			  (e.flags &= -2053),
			  (t.lanes &= ~i),
			  Et(t, e, i))
			: (K && n && Ka(e), (e.flags |= 1), Se(t, e, r, i), e.child)
	)
}
function nd(t, e, n, r, i) {
	if (t === null) {
		var s = n.type
		return typeof s == 'function' &&
			!_u(s) &&
			s.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((e.tag = 15), (e.type = s), Xh(t, e, s, r, i))
			: ((t = hs(n.type, null, r, e, e.mode, i)),
			  (t.ref = e.ref),
			  (t.return = e),
			  (e.child = t))
	}
	if (((s = t.child), !(t.lanes & i))) {
		var o = s.memoizedProps
		if (
			((n = n.compare), (n = n !== null ? n : ri), n(o, r) && t.ref === e.ref)
		)
			return Et(t, e, i)
	}
	return (
		(e.flags |= 1),
		(t = Vt(s, r)),
		(t.ref = e.ref),
		(t.return = e),
		(e.child = t)
	)
}
function Xh(t, e, n, r, i) {
	if (t !== null) {
		var s = t.memoizedProps
		if (ri(s, r) && t.ref === e.ref)
			if (((xe = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0))
				t.flags & 131072 && (xe = !0)
			else return (e.lanes = t.lanes), Et(t, e, i)
	}
	return Yl(t, e, n, r, i)
}
function Jh(t, e, n) {
	var r = e.pendingProps,
		i = r.children,
		s = t !== null ? t.memoizedState : null
	if (r.mode === 'hidden')
		if (!(e.mode & 1))
			(e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				$(Bn, Fe),
				(Fe |= n)
		else {
			if (!(n & 1073741824))
				return (
					(t = s !== null ? s.baseLanes | n : n),
					(e.lanes = e.childLanes = 1073741824),
					(e.memoizedState = {
						baseLanes: t,
						cachePool: null,
						transitions: null
					}),
					(e.updateQueue = null),
					$(Bn, Fe),
					(Fe |= t),
					null
				)
			;(e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = s !== null ? s.baseLanes : n),
				$(Bn, Fe),
				(Fe |= r)
		}
	else
		s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n),
			$(Bn, Fe),
			(Fe |= r)
	return Se(t, e, i, n), e.child
}
function Zh(t, e) {
	var n = e.ref
	;((t === null && n !== null) || (t !== null && t.ref !== n)) &&
		((e.flags |= 512), (e.flags |= 2097152))
}
function Yl(t, e, n, r, i) {
	var s = Oe(n) ? pn : Ee.current
	return (
		(s = er(e, s)),
		Qn(e, i),
		(n = ou(t, e, n, r, s, i)),
		(r = lu()),
		t !== null && !xe
			? ((e.updateQueue = t.updateQueue),
			  (e.flags &= -2053),
			  (t.lanes &= ~i),
			  Et(t, e, i))
			: (K && r && Ka(e), (e.flags |= 1), Se(t, e, n, i), e.child)
	)
}
function rd(t, e, n, r, i) {
	if (Oe(n)) {
		var s = !0
		ks(e)
	} else s = !1
	if ((Qn(e, i), e.stateNode === null))
		cs(t, e), Ih(e, n, r), Gl(e, n, r, i), (r = !0)
	else if (t === null) {
		var o = e.stateNode,
			l = e.memoizedProps
		o.props = l
		var a = o.context,
			u = n.contextType
		typeof u == 'object' && u !== null
			? (u = Ge(u))
			: ((u = Oe(n) ? pn : Ee.current), (u = er(e, u)))
		var f = n.getDerivedStateFromProps,
			c =
				typeof f == 'function' || typeof o.getSnapshotBeforeUpdate == 'function'
		c ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((l !== r || a !== u) && Kc(e, o, r, u)),
			(Pt = !1)
		var d = e.memoizedState
		;(o.state = d),
			Rs(e, r, o, i),
			(a = e.memoizedState),
			l !== r || d !== a || De.current || Pt
				? (typeof f == 'function' && (Ql(e, n, f, r), (a = e.memoizedState)),
				  (l = Pt || Gc(e, n, l, r, d, a, u))
						? (c ||
								(typeof o.UNSAFE_componentWillMount != 'function' &&
									typeof o.componentWillMount != 'function') ||
								(typeof o.componentWillMount == 'function' &&
									o.componentWillMount(),
								typeof o.UNSAFE_componentWillMount == 'function' &&
									o.UNSAFE_componentWillMount()),
						  typeof o.componentDidMount == 'function' && (e.flags |= 4194308))
						: (typeof o.componentDidMount == 'function' && (e.flags |= 4194308),
						  (e.memoizedProps = r),
						  (e.memoizedState = a)),
				  (o.props = r),
				  (o.state = a),
				  (o.context = u),
				  (r = l))
				: (typeof o.componentDidMount == 'function' && (e.flags |= 4194308),
				  (r = !1))
	} else {
		;(o = e.stateNode),
			kh(t, e),
			(l = e.memoizedProps),
			(u = e.type === e.elementType ? l : Xe(e.type, l)),
			(o.props = u),
			(c = e.pendingProps),
			(d = o.context),
			(a = n.contextType),
			typeof a == 'object' && a !== null
				? (a = Ge(a))
				: ((a = Oe(n) ? pn : Ee.current), (a = er(e, a)))
		var g = n.getDerivedStateFromProps
		;(f =
			typeof g == 'function' ||
			typeof o.getSnapshotBeforeUpdate == 'function') ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((l !== c || d !== a) && Kc(e, o, r, a)),
			(Pt = !1),
			(d = e.memoizedState),
			(o.state = d),
			Rs(e, r, o, i)
		var _ = e.memoizedState
		l !== c || d !== _ || De.current || Pt
			? (typeof g == 'function' && (Ql(e, n, g, r), (_ = e.memoizedState)),
			  (u = Pt || Gc(e, n, u, r, d, _, a) || !1)
					? (f ||
							(typeof o.UNSAFE_componentWillUpdate != 'function' &&
								typeof o.componentWillUpdate != 'function') ||
							(typeof o.componentWillUpdate == 'function' &&
								o.componentWillUpdate(r, _, a),
							typeof o.UNSAFE_componentWillUpdate == 'function' &&
								o.UNSAFE_componentWillUpdate(r, _, a)),
					  typeof o.componentDidUpdate == 'function' && (e.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
					: (typeof o.componentDidUpdate != 'function' ||
							(l === t.memoizedProps && d === t.memoizedState) ||
							(e.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate != 'function' ||
							(l === t.memoizedProps && d === t.memoizedState) ||
							(e.flags |= 1024),
					  (e.memoizedProps = r),
					  (e.memoizedState = _)),
			  (o.props = r),
			  (o.state = _),
			  (o.context = a),
			  (r = u))
			: (typeof o.componentDidUpdate != 'function' ||
					(l === t.memoizedProps && d === t.memoizedState) ||
					(e.flags |= 4),
			  typeof o.getSnapshotBeforeUpdate != 'function' ||
					(l === t.memoizedProps && d === t.memoizedState) ||
					(e.flags |= 1024),
			  (r = !1))
	}
	return ql(t, e, n, r, s, i)
}
function ql(t, e, n, r, i, s) {
	Zh(t, e)
	var o = (e.flags & 128) !== 0
	if (!r && !o) return i && Vc(e, n, !1), Et(t, e, s)
	;(r = e.stateNode), (dy.current = e)
	var l =
		o && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
	return (
		(e.flags |= 1),
		t !== null && o
			? ((e.child = nr(e, t.child, null, s)), (e.child = nr(e, null, l, s)))
			: Se(t, e, l, s),
		(e.memoizedState = r.state),
		i && Vc(e, n, !0),
		e.child
	)
}
function ep(t) {
	var e = t.stateNode
	e.pendingContext
		? Wc(t, e.pendingContext, e.pendingContext !== e.context)
		: e.context && Wc(t, e.context, !1),
		nu(t, e.containerInfo)
}
function id(t, e, n, r, i) {
	return tr(), qa(i), (e.flags |= 256), Se(t, e, n, r), e.child
}
var Xl = { dehydrated: null, treeContext: null, retryLane: 0 }
function Jl(t) {
	return { baseLanes: t, cachePool: null, transitions: null }
}
function tp(t, e, n) {
	var r = e.pendingProps,
		i = q.current,
		s = !1,
		o = (e.flags & 128) !== 0,
		l
	if (
		((l = o) ||
			(l = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
		l
			? ((s = !0), (e.flags &= -129))
			: (t === null || t.memoizedState !== null) && (i |= 1),
		$(q, i & 1),
		t === null)
	)
		return (
			$l(e),
			(t = e.memoizedState),
			t !== null && ((t = t.dehydrated), t !== null)
				? (e.mode & 1
						? t.data === '$!'
							? (e.lanes = 8)
							: (e.lanes = 1073741824)
						: (e.lanes = 1),
				  null)
				: ((o = r.children),
				  (t = r.fallback),
				  s
						? ((r = e.mode),
						  (s = e.child),
						  (o = { mode: 'hidden', children: o }),
						  !(r & 1) && s !== null
								? ((s.childLanes = 0), (s.pendingProps = o))
								: (s = fo(o, r, 0, null)),
						  (t = fn(t, r, n, null)),
						  (s.return = e),
						  (t.return = e),
						  (s.sibling = t),
						  (e.child = s),
						  (e.child.memoizedState = Jl(n)),
						  (e.memoizedState = Xl),
						  t)
						: cu(e, o))
		)
	if (((i = t.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
		return fy(t, e, o, r, l, i, n)
	if (s) {
		;(s = r.fallback), (o = e.mode), (i = t.child), (l = i.sibling)
		var a = { mode: 'hidden', children: r.children }
		return (
			!(o & 1) && e.child !== i
				? ((r = e.child),
				  (r.childLanes = 0),
				  (r.pendingProps = a),
				  (e.deletions = null))
				: ((r = Vt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			l !== null ? (s = Vt(l, s)) : ((s = fn(s, o, n, null)), (s.flags |= 2)),
			(s.return = e),
			(r.return = e),
			(r.sibling = s),
			(e.child = r),
			(r = s),
			(s = e.child),
			(o = t.child.memoizedState),
			(o =
				o === null
					? Jl(n)
					: {
							baseLanes: o.baseLanes | n,
							cachePool: null,
							transitions: o.transitions
					  }),
			(s.memoizedState = o),
			(s.childLanes = t.childLanes & ~n),
			(e.memoizedState = Xl),
			r
		)
	}
	return (
		(s = t.child),
		(t = s.sibling),
		(r = Vt(s, { mode: 'visible', children: r.children })),
		!(e.mode & 1) && (r.lanes = n),
		(r.return = e),
		(r.sibling = null),
		t !== null &&
			((n = e.deletions),
			n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
		(e.child = r),
		(e.memoizedState = null),
		r
	)
}
function cu(t, e) {
	return (
		(e = fo({ mode: 'visible', children: e }, t.mode, 0, null)),
		(e.return = t),
		(t.child = e)
	)
}
function qi(t, e, n, r) {
	return (
		r !== null && qa(r),
		nr(e, t.child, null, n),
		(t = cu(e, e.pendingProps.children)),
		(t.flags |= 2),
		(e.memoizedState = null),
		t
	)
}
function fy(t, e, n, r, i, s, o) {
	if (n)
		return e.flags & 256
			? ((e.flags &= -257), (r = el(Error(C(422)))), qi(t, e, o, r))
			: e.memoizedState !== null
			? ((e.child = t.child), (e.flags |= 128), null)
			: ((s = r.fallback),
			  (i = e.mode),
			  (r = fo({ mode: 'visible', children: r.children }, i, 0, null)),
			  (s = fn(s, i, o, null)),
			  (s.flags |= 2),
			  (r.return = e),
			  (s.return = e),
			  (r.sibling = s),
			  (e.child = r),
			  e.mode & 1 && nr(e, t.child, null, o),
			  (e.child.memoizedState = Jl(o)),
			  (e.memoizedState = Xl),
			  s)
	if (!(e.mode & 1)) return qi(t, e, o, null)
	if (i.data === '$!') {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst
		return (r = l), (s = Error(C(419))), (r = el(s, r, void 0)), qi(t, e, o, r)
	}
	if (((l = (o & t.childLanes) !== 0), xe || l)) {
		if (((r = he), r !== null)) {
			switch (o & -o) {
				case 4:
					i = 2
					break
				case 16:
					i = 8
					break
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32
					break
				case 536870912:
					i = 268435456
					break
				default:
					i = 0
			}
			;(i = i & (r.suspendedLanes | o) ? 0 : i),
				i !== 0 &&
					i !== s.retryLane &&
					((s.retryLane = i), wt(t, i), it(r, t, i, -1))
		}
		return gu(), (r = el(Error(C(421)))), qi(t, e, o, r)
	}
	return i.data === '$?'
		? ((e.flags |= 128),
		  (e.child = t.child),
		  (e = Ty.bind(null, t)),
		  (i._reactRetry = e),
		  null)
		: ((t = s.treeContext),
		  (ze = Ut(i.nextSibling)),
		  (Ue = e),
		  (K = !0),
		  (Ze = null),
		  t !== null &&
				((He[$e++] = pt),
				(He[$e++] = mt),
				(He[$e++] = mn),
				(pt = t.id),
				(mt = t.overflow),
				(mn = e)),
		  (e = cu(e, r.children)),
		  (e.flags |= 4096),
		  e)
}
function sd(t, e, n) {
	t.lanes |= e
	var r = t.alternate
	r !== null && (r.lanes |= e), bl(t.return, e, n)
}
function tl(t, e, n, r, i) {
	var s = t.memoizedState
	s === null
		? (t.memoizedState = {
				isBackwards: e,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i
		  })
		: ((s.isBackwards = e),
		  (s.rendering = null),
		  (s.renderingStartTime = 0),
		  (s.last = r),
		  (s.tail = n),
		  (s.tailMode = i))
}
function np(t, e, n) {
	var r = e.pendingProps,
		i = r.revealOrder,
		s = r.tail
	if ((Se(t, e, r.children, n), (r = q.current), r & 2))
		(r = (r & 1) | 2), (e.flags |= 128)
	else {
		if (t !== null && t.flags & 128)
			e: for (t = e.child; t !== null; ) {
				if (t.tag === 13) t.memoizedState !== null && sd(t, n, e)
				else if (t.tag === 19) sd(t, n, e)
				else if (t.child !== null) {
					;(t.child.return = t), (t = t.child)
					continue
				}
				if (t === e) break e
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === e) break e
					t = t.return
				}
				;(t.sibling.return = t.return), (t = t.sibling)
			}
		r &= 1
	}
	if (($(q, r), !(e.mode & 1))) e.memoizedState = null
	else
		switch (i) {
			case 'forwards':
				for (n = e.child, i = null; n !== null; )
					(t = n.alternate),
						t !== null && Ps(t) === null && (i = n),
						(n = n.sibling)
				;(n = i),
					n === null
						? ((i = e.child), (e.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					tl(e, !1, i, n, s)
				break
			case 'backwards':
				for (n = null, i = e.child, e.child = null; i !== null; ) {
					if (((t = i.alternate), t !== null && Ps(t) === null)) {
						e.child = i
						break
					}
					;(t = i.sibling), (i.sibling = n), (n = i), (i = t)
				}
				tl(e, !0, n, null, s)
				break
			case 'together':
				tl(e, !1, null, null, void 0)
				break
			default:
				e.memoizedState = null
		}
	return e.child
}
function cs(t, e) {
	!(e.mode & 1) &&
		t !== null &&
		((t.alternate = null), (e.alternate = null), (e.flags |= 2))
}
function Et(t, e, n) {
	if (
		(t !== null && (e.dependencies = t.dependencies),
		(_n |= e.lanes),
		!(n & e.childLanes))
	)
		return null
	if (t !== null && e.child !== t.child) throw Error(C(153))
	if (e.child !== null) {
		for (
			t = e.child, n = Vt(t, t.pendingProps), e.child = n, n.return = e;
			t.sibling !== null;

		)
			(t = t.sibling), (n = n.sibling = Vt(t, t.pendingProps)), (n.return = e)
		n.sibling = null
	}
	return e.child
}
function hy(t, e, n) {
	switch (e.tag) {
		case 3:
			ep(e), tr()
			break
		case 5:
			Rh(e)
			break
		case 1:
			Oe(e.type) && ks(e)
			break
		case 4:
			nu(e, e.stateNode.containerInfo)
			break
		case 10:
			var r = e.type._context,
				i = e.memoizedProps.value
			$(Ns, r._currentValue), (r._currentValue = i)
			break
		case 13:
			if (((r = e.memoizedState), r !== null))
				return r.dehydrated !== null
					? ($(q, q.current & 1), (e.flags |= 128), null)
					: n & e.child.childLanes
					? tp(t, e, n)
					: ($(q, q.current & 1),
					  (t = Et(t, e, n)),
					  t !== null ? t.sibling : null)
			$(q, q.current & 1)
			break
		case 19:
			if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
				if (r) return np(t, e, n)
				e.flags |= 128
			}
			if (
				((i = e.memoizedState),
				i !== null &&
					((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				$(q, q.current),
				r)
			)
				break
			return null
		case 22:
		case 23:
			return (e.lanes = 0), Jh(t, e, n)
	}
	return Et(t, e, n)
}
var rp, Zl, ip, sp
rp = function (t, e) {
	for (var n = e.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode)
		else if (n.tag !== 4 && n.child !== null) {
			;(n.child.return = n), (n = n.child)
			continue
		}
		if (n === e) break
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === e) return
			n = n.return
		}
		;(n.sibling.return = n.return), (n = n.sibling)
	}
}
Zl = function () {}
ip = function (t, e, n, r) {
	var i = t.memoizedProps
	if (i !== r) {
		;(t = e.stateNode), an(dt.current)
		var s = null
		switch (n) {
			case 'input':
				;(i = wl(t, i)), (r = wl(t, r)), (s = [])
				break
			case 'select':
				;(i = J({}, i, { value: void 0 })),
					(r = J({}, r, { value: void 0 })),
					(s = [])
				break
			case 'textarea':
				;(i = kl(t, i)), (r = kl(t, r)), (s = [])
				break
			default:
				typeof i.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(t.onclick = Es)
		}
		Il(n, r)
		var o
		n = null
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === 'style') {
					var l = i[u]
					for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''))
				} else
					u !== 'dangerouslySetInnerHTML' &&
						u !== 'children' &&
						u !== 'suppressContentEditableWarning' &&
						u !== 'suppressHydrationWarning' &&
						u !== 'autoFocus' &&
						(qr.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null))
		for (u in r) {
			var a = r[u]
			if (
				((l = i != null ? i[u] : void 0),
				r.hasOwnProperty(u) && a !== l && (a != null || l != null))
			)
				if (u === 'style')
					if (l) {
						for (o in l)
							!l.hasOwnProperty(o) ||
								(a && a.hasOwnProperty(o)) ||
								(n || (n = {}), (n[o] = ''))
						for (o in a)
							a.hasOwnProperty(o) &&
								l[o] !== a[o] &&
								(n || (n = {}), (n[o] = a[o]))
					} else n || (s || (s = []), s.push(u, n)), (n = a)
				else
					u === 'dangerouslySetInnerHTML'
						? ((a = a ? a.__html : void 0),
						  (l = l ? l.__html : void 0),
						  a != null && l !== a && (s = s || []).push(u, a))
						: u === 'children'
						? (typeof a != 'string' && typeof a != 'number') ||
						  (s = s || []).push(u, '' + a)
						: u !== 'suppressContentEditableWarning' &&
						  u !== 'suppressHydrationWarning' &&
						  (qr.hasOwnProperty(u)
								? (a != null && u === 'onScroll' && b('scroll', t),
								  s || l === a || (s = []))
								: (s = s || []).push(u, a))
		}
		n && (s = s || []).push('style', n)
		var u = s
		;(e.updateQueue = u) && (e.flags |= 4)
	}
}
sp = function (t, e, n, r) {
	n !== r && (e.flags |= 4)
}
function Nr(t, e) {
	if (!K)
		switch (t.tailMode) {
			case 'hidden':
				e = t.tail
				for (var n = null; e !== null; )
					e.alternate !== null && (n = e), (e = e.sibling)
				n === null ? (t.tail = null) : (n.sibling = null)
				break
			case 'collapsed':
				n = t.tail
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling)
				r === null
					? e || t.tail === null
						? (t.tail = null)
						: (t.tail.sibling = null)
					: (r.sibling = null)
		}
}
function ve(t) {
	var e = t.alternate !== null && t.alternate.child === t.child,
		n = 0,
		r = 0
	if (e)
		for (var i = t.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = t),
				(i = i.sibling)
	else
		for (i = t.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = t),
				(i = i.sibling)
	return (t.subtreeFlags |= r), (t.childLanes = n), e
}
function py(t, e, n) {
	var r = e.pendingProps
	switch ((Ya(e), e.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return ve(e), null
		case 1:
			return Oe(e.type) && Ss(), ve(e), null
		case 3:
			return (
				(r = e.stateNode),
				rr(),
				G(De),
				G(Ee),
				iu(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(t === null || t.child === null) &&
					(Ki(e)
						? (e.flags |= 4)
						: t === null ||
						  (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
						  ((e.flags |= 1024), Ze !== null && (la(Ze), (Ze = null)))),
				Zl(t, e),
				ve(e),
				null
			)
		case 5:
			ru(e)
			var i = an(ai.current)
			if (((n = e.type), t !== null && e.stateNode != null))
				ip(t, e, n, r, i),
					t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152))
			else {
				if (!r) {
					if (e.stateNode === null) throw Error(C(166))
					return ve(e), null
				}
				if (((t = an(dt.current)), Ki(e))) {
					;(r = e.stateNode), (n = e.type)
					var s = e.memoizedProps
					switch (((r[ut] = e), (r[oi] = s), (t = (e.mode & 1) !== 0), n)) {
						case 'dialog':
							b('cancel', r), b('close', r)
							break
						case 'iframe':
						case 'object':
						case 'embed':
							b('load', r)
							break
						case 'video':
						case 'audio':
							for (i = 0; i < Fr.length; i++) b(Fr[i], r)
							break
						case 'source':
							b('error', r)
							break
						case 'img':
						case 'image':
						case 'link':
							b('error', r), b('load', r)
							break
						case 'details':
							b('toggle', r)
							break
						case 'input':
							pc(r, s), b('invalid', r)
							break
						case 'select':
							;(r._wrapperState = { wasMultiple: !!s.multiple }),
								b('invalid', r)
							break
						case 'textarea':
							gc(r, s), b('invalid', r)
					}
					Il(n, s), (i = null)
					for (var o in s)
						if (s.hasOwnProperty(o)) {
							var l = s[o]
							o === 'children'
								? typeof l == 'string'
									? r.textContent !== l &&
									  (s.suppressHydrationWarning !== !0 &&
											Gi(r.textContent, l, t),
									  (i = ['children', l]))
									: typeof l == 'number' &&
									  r.textContent !== '' + l &&
									  (s.suppressHydrationWarning !== !0 &&
											Gi(r.textContent, l, t),
									  (i = ['children', '' + l]))
								: qr.hasOwnProperty(o) &&
								  l != null &&
								  o === 'onScroll' &&
								  b('scroll', r)
						}
					switch (n) {
						case 'input':
							ji(r), mc(r, s, !0)
							break
						case 'textarea':
							ji(r), _c(r)
							break
						case 'select':
						case 'option':
							break
						default:
							typeof s.onClick == 'function' && (r.onclick = Es)
					}
					;(r = i), (e.updateQueue = r), r !== null && (e.flags |= 4)
				} else {
					;(o = i.nodeType === 9 ? i : i.ownerDocument),
						t === 'http://www.w3.org/1999/xhtml' && (t = Of(n)),
						t === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((t = o.createElement('div')),
								  (t.innerHTML = '<script></script>'),
								  (t = t.removeChild(t.firstChild)))
								: typeof r.is == 'string'
								? (t = o.createElement(n, { is: r.is }))
								: ((t = o.createElement(n)),
								  n === 'select' &&
										((o = t),
										r.multiple
											? (o.multiple = !0)
											: r.size && (o.size = r.size)))
							: (t = o.createElementNS(t, n)),
						(t[ut] = e),
						(t[oi] = r),
						rp(t, e, !1, !1),
						(e.stateNode = t)
					e: {
						switch (((o = Nl(n, r)), n)) {
							case 'dialog':
								b('cancel', t), b('close', t), (i = r)
								break
							case 'iframe':
							case 'object':
							case 'embed':
								b('load', t), (i = r)
								break
							case 'video':
							case 'audio':
								for (i = 0; i < Fr.length; i++) b(Fr[i], t)
								i = r
								break
							case 'source':
								b('error', t), (i = r)
								break
							case 'img':
							case 'image':
							case 'link':
								b('error', t), b('load', t), (i = r)
								break
							case 'details':
								b('toggle', t), (i = r)
								break
							case 'input':
								pc(t, r), (i = wl(t, r)), b('invalid', t)
								break
							case 'option':
								i = r
								break
							case 'select':
								;(t._wrapperState = { wasMultiple: !!r.multiple }),
									(i = J({}, r, { value: void 0 })),
									b('invalid', t)
								break
							case 'textarea':
								gc(t, r), (i = kl(t, r)), b('invalid', t)
								break
							default:
								i = r
						}
						Il(n, i), (l = i)
						for (s in l)
							if (l.hasOwnProperty(s)) {
								var a = l[s]
								s === 'style'
									? Lf(t, a)
									: s === 'dangerouslySetInnerHTML'
									? ((a = a ? a.__html : void 0), a != null && Af(t, a))
									: s === 'children'
									? typeof a == 'string'
										? (n !== 'textarea' || a !== '') && Xr(t, a)
										: typeof a == 'number' && Xr(t, '' + a)
									: s !== 'suppressContentEditableWarning' &&
									  s !== 'suppressHydrationWarning' &&
									  s !== 'autoFocus' &&
									  (qr.hasOwnProperty(s)
											? a != null && s === 'onScroll' && b('scroll', t)
											: a != null && Ma(t, s, a, o))
							}
						switch (n) {
							case 'input':
								ji(t), mc(t, r, !1)
								break
							case 'textarea':
								ji(t), _c(t)
								break
							case 'option':
								r.value != null && t.setAttribute('value', '' + Qt(r.value))
								break
							case 'select':
								;(t.multiple = !!r.multiple),
									(s = r.value),
									s != null
										? Vn(t, !!r.multiple, s, !1)
										: r.defaultValue != null &&
										  Vn(t, !!r.multiple, r.defaultValue, !0)
								break
							default:
								typeof i.onClick == 'function' && (t.onclick = Es)
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus
								break e
							case 'img':
								r = !0
								break e
							default:
								r = !1
						}
					}
					r && (e.flags |= 4)
				}
				e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152))
			}
			return ve(e), null
		case 6:
			if (t && e.stateNode != null) sp(t, e, t.memoizedProps, r)
			else {
				if (typeof r != 'string' && e.stateNode === null) throw Error(C(166))
				if (((n = an(ai.current)), an(dt.current), Ki(e))) {
					if (
						((r = e.stateNode),
						(n = e.memoizedProps),
						(r[ut] = e),
						(s = r.nodeValue !== n) && ((t = Ue), t !== null))
					)
						switch (t.tag) {
							case 3:
								Gi(r.nodeValue, n, (t.mode & 1) !== 0)
								break
							case 5:
								t.memoizedProps.suppressHydrationWarning !== !0 &&
									Gi(r.nodeValue, n, (t.mode & 1) !== 0)
						}
					s && (e.flags |= 4)
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[ut] = e),
						(e.stateNode = r)
			}
			return ve(e), null
		case 13:
			if (
				(G(q),
				(r = e.memoizedState),
				t === null ||
					(t.memoizedState !== null && t.memoizedState.dehydrated !== null))
			) {
				if (K && ze !== null && e.mode & 1 && !(e.flags & 128))
					Eh(), tr(), (e.flags |= 98560), (s = !1)
				else if (((s = Ki(e)), r !== null && r.dehydrated !== null)) {
					if (t === null) {
						if (!s) throw Error(C(318))
						if (
							((s = e.memoizedState),
							(s = s !== null ? s.dehydrated : null),
							!s)
						)
							throw Error(C(317))
						s[ut] = e
					} else
						tr(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4)
					ve(e), (s = !1)
				} else Ze !== null && (la(Ze), (Ze = null)), (s = !0)
				if (!s) return e.flags & 65536 ? e : null
			}
			return e.flags & 128
				? ((e.lanes = n), e)
				: ((r = r !== null),
				  r !== (t !== null && t.memoizedState !== null) &&
						r &&
						((e.child.flags |= 8192),
						e.mode & 1 &&
							(t === null || q.current & 1 ? le === 0 && (le = 3) : gu())),
				  e.updateQueue !== null && (e.flags |= 4),
				  ve(e),
				  null)
		case 4:
			return (
				rr(), Zl(t, e), t === null && ii(e.stateNode.containerInfo), ve(e), null
			)
		case 10:
			return Za(e.type._context), ve(e), null
		case 17:
			return Oe(e.type) && Ss(), ve(e), null
		case 19:
			if ((G(q), (s = e.memoizedState), s === null)) return ve(e), null
			if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
				if (r) Nr(s, !1)
				else {
					if (le !== 0 || (t !== null && t.flags & 128))
						for (t = e.child; t !== null; ) {
							if (((o = Ps(t)), o !== null)) {
								for (
									e.flags |= 128,
										Nr(s, !1),
										r = o.updateQueue,
										r !== null && ((e.updateQueue = r), (e.flags |= 4)),
										e.subtreeFlags = 0,
										r = n,
										n = e.child;
									n !== null;

								)
									(s = n),
										(t = r),
										(s.flags &= 14680066),
										(o = s.alternate),
										o === null
											? ((s.childLanes = 0),
											  (s.lanes = t),
											  (s.child = null),
											  (s.subtreeFlags = 0),
											  (s.memoizedProps = null),
											  (s.memoizedState = null),
											  (s.updateQueue = null),
											  (s.dependencies = null),
											  (s.stateNode = null))
											: ((s.childLanes = o.childLanes),
											  (s.lanes = o.lanes),
											  (s.child = o.child),
											  (s.subtreeFlags = 0),
											  (s.deletions = null),
											  (s.memoizedProps = o.memoizedProps),
											  (s.memoizedState = o.memoizedState),
											  (s.updateQueue = o.updateQueue),
											  (s.type = o.type),
											  (t = o.dependencies),
											  (s.dependencies =
													t === null
														? null
														: {
																lanes: t.lanes,
																firstContext: t.firstContext
														  })),
										(n = n.sibling)
								return $(q, (q.current & 1) | 2), e.child
							}
							t = t.sibling
						}
					s.tail !== null &&
						re() > sr &&
						((e.flags |= 128), (r = !0), Nr(s, !1), (e.lanes = 4194304))
				}
			else {
				if (!r)
					if (((t = Ps(o)), t !== null)) {
						if (
							((e.flags |= 128),
							(r = !0),
							(n = t.updateQueue),
							n !== null && ((e.updateQueue = n), (e.flags |= 4)),
							Nr(s, !0),
							s.tail === null && s.tailMode === 'hidden' && !o.alternate && !K)
						)
							return ve(e), null
					} else
						2 * re() - s.renderingStartTime > sr &&
							n !== 1073741824 &&
							((e.flags |= 128), (r = !0), Nr(s, !1), (e.lanes = 4194304))
				s.isBackwards
					? ((o.sibling = e.child), (e.child = o))
					: ((n = s.last),
					  n !== null ? (n.sibling = o) : (e.child = o),
					  (s.last = o))
			}
			return s.tail !== null
				? ((e = s.tail),
				  (s.rendering = e),
				  (s.tail = e.sibling),
				  (s.renderingStartTime = re()),
				  (e.sibling = null),
				  (n = q.current),
				  $(q, r ? (n & 1) | 2 : n & 1),
				  e)
				: (ve(e), null)
		case 22:
		case 23:
			return (
				mu(),
				(r = e.memoizedState !== null),
				t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
				r && e.mode & 1
					? Fe & 1073741824 && (ve(e), e.subtreeFlags & 6 && (e.flags |= 8192))
					: ve(e),
				null
			)
		case 24:
			return null
		case 25:
			return null
	}
	throw Error(C(156, e.tag))
}
function my(t, e) {
	switch ((Ya(e), e.tag)) {
		case 1:
			return (
				Oe(e.type) && Ss(),
				(t = e.flags),
				t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
			)
		case 3:
			return (
				rr(),
				G(De),
				G(Ee),
				iu(),
				(t = e.flags),
				t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
			)
		case 5:
			return ru(e), null
		case 13:
			if ((G(q), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
				if (e.alternate === null) throw Error(C(340))
				tr()
			}
			return (
				(t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
			)
		case 19:
			return G(q), null
		case 4:
			return rr(), null
		case 10:
			return Za(e.type._context), null
		case 22:
		case 23:
			return mu(), null
		case 24:
			return null
		default:
			return null
	}
}
var Xi = !1,
	Ce = !1,
	gy = typeof WeakSet == 'function' ? WeakSet : Set,
	E = null
function jn(t, e) {
	var n = t.ref
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null)
			} catch (r) {
				Z(t, e, r)
			}
		else n.current = null
}
function ea(t, e, n) {
	try {
		n()
	} catch (r) {
		Z(t, e, r)
	}
}
var od = !1
function _y(t, e) {
	if (((zl = vs), (t = uh()), Ga(t))) {
		if ('selectionStart' in t)
			var n = { start: t.selectionStart, end: t.selectionEnd }
		else
			e: {
				n = ((n = t.ownerDocument) && n.defaultView) || window
				var r = n.getSelection && n.getSelection()
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode
					var i = r.anchorOffset,
						s = r.focusNode
					r = r.focusOffset
					try {
						n.nodeType, s.nodeType
					} catch {
						n = null
						break e
					}
					var o = 0,
						l = -1,
						a = -1,
						u = 0,
						f = 0,
						c = t,
						d = null
					t: for (;;) {
						for (
							var g;
							c !== n || (i !== 0 && c.nodeType !== 3) || (l = o + i),
								c !== s || (r !== 0 && c.nodeType !== 3) || (a = o + r),
								c.nodeType === 3 && (o += c.nodeValue.length),
								(g = c.firstChild) !== null;

						)
							(d = c), (c = g)
						for (;;) {
							if (c === t) break t
							if (
								(d === n && ++u === i && (l = o),
								d === s && ++f === r && (a = o),
								(g = c.nextSibling) !== null)
							)
								break
							;(c = d), (d = c.parentNode)
						}
						c = g
					}
					n = l === -1 || a === -1 ? null : { start: l, end: a }
				} else n = null
			}
		n = n || { start: 0, end: 0 }
	} else n = null
	for (Ul = { focusedElem: t, selectionRange: n }, vs = !1, E = e; E !== null; )
		if (((e = E), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
			(t.return = e), (E = t)
		else
			for (; E !== null; ) {
				e = E
				try {
					var _ = e.alternate
					if (e.flags & 1024)
						switch (e.tag) {
							case 0:
							case 11:
							case 15:
								break
							case 1:
								if (_ !== null) {
									var y = _.memoizedProps,
										R = _.memoizedState,
										p = e.stateNode,
										h = p.getSnapshotBeforeUpdate(
											e.elementType === e.type ? y : Xe(e.type, y),
											R
										)
									p.__reactInternalSnapshotBeforeUpdate = h
								}
								break
							case 3:
								var m = e.stateNode.containerInfo
								m.nodeType === 1
									? (m.textContent = '')
									: m.nodeType === 9 &&
									  m.documentElement &&
									  m.removeChild(m.documentElement)
								break
							case 5:
							case 6:
							case 4:
							case 17:
								break
							default:
								throw Error(C(163))
						}
				} catch (v) {
					Z(e, e.return, v)
				}
				if (((t = e.sibling), t !== null)) {
					;(t.return = e.return), (E = t)
					break
				}
				E = e.return
			}
	return (_ = od), (od = !1), _
}
function Hr(t, e, n) {
	var r = e.updateQueue
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next)
		do {
			if ((i.tag & t) === t) {
				var s = i.destroy
				;(i.destroy = void 0), s !== void 0 && ea(e, n, s)
			}
			i = i.next
		} while (i !== r)
	}
}
function uo(t, e) {
	if (
		((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
	) {
		var n = (e = e.next)
		do {
			if ((n.tag & t) === t) {
				var r = n.create
				n.destroy = r()
			}
			n = n.next
		} while (n !== e)
	}
}
function ta(t) {
	var e = t.ref
	if (e !== null) {
		var n = t.stateNode
		switch (t.tag) {
			case 5:
				t = n
				break
			default:
				t = n
		}
		typeof e == 'function' ? e(t) : (e.current = t)
	}
}
function op(t) {
	var e = t.alternate
	e !== null && ((t.alternate = null), op(e)),
		(t.child = null),
		(t.deletions = null),
		(t.sibling = null),
		t.tag === 5 &&
			((e = t.stateNode),
			e !== null &&
				(delete e[ut], delete e[oi], delete e[Wl], delete e[Z_], delete e[ey])),
		(t.stateNode = null),
		(t.return = null),
		(t.dependencies = null),
		(t.memoizedProps = null),
		(t.memoizedState = null),
		(t.pendingProps = null),
		(t.stateNode = null),
		(t.updateQueue = null)
}
function lp(t) {
	return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function ld(t) {
	e: for (;;) {
		for (; t.sibling === null; ) {
			if (t.return === null || lp(t.return)) return null
			t = t.return
		}
		for (
			t.sibling.return = t.return, t = t.sibling;
			t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

		) {
			if (t.flags & 2 || t.child === null || t.tag === 4) continue e
			;(t.child.return = t), (t = t.child)
		}
		if (!(t.flags & 2)) return t.stateNode
	}
}
function na(t, e, n) {
	var r = t.tag
	if (r === 5 || r === 6)
		(t = t.stateNode),
			e
				? n.nodeType === 8
					? n.parentNode.insertBefore(t, e)
					: n.insertBefore(t, e)
				: (n.nodeType === 8
						? ((e = n.parentNode), e.insertBefore(t, n))
						: ((e = n), e.appendChild(t)),
				  (n = n._reactRootContainer),
				  n != null || e.onclick !== null || (e.onclick = Es))
	else if (r !== 4 && ((t = t.child), t !== null))
		for (na(t, e, n), t = t.sibling; t !== null; ) na(t, e, n), (t = t.sibling)
}
function ra(t, e, n) {
	var r = t.tag
	if (r === 5 || r === 6)
		(t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t)
	else if (r !== 4 && ((t = t.child), t !== null))
		for (ra(t, e, n), t = t.sibling; t !== null; ) ra(t, e, n), (t = t.sibling)
}
var pe = null,
	Je = !1
function xt(t, e, n) {
	for (n = n.child; n !== null; ) ap(t, e, n), (n = n.sibling)
}
function ap(t, e, n) {
	if (ct && typeof ct.onCommitFiberUnmount == 'function')
		try {
			ct.onCommitFiberUnmount(to, n)
		} catch {}
	switch (n.tag) {
		case 5:
			Ce || jn(n, e)
		case 6:
			var r = pe,
				i = Je
			;(pe = null),
				xt(t, e, n),
				(pe = r),
				(Je = i),
				pe !== null &&
					(Je
						? ((t = pe),
						  (n = n.stateNode),
						  t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
						: pe.removeChild(n.stateNode))
			break
		case 18:
			pe !== null &&
				(Je
					? ((t = pe),
					  (n = n.stateNode),
					  t.nodeType === 8
							? Ko(t.parentNode, n)
							: t.nodeType === 1 && Ko(t, n),
					  ti(t))
					: Ko(pe, n.stateNode))
			break
		case 4:
			;(r = pe),
				(i = Je),
				(pe = n.stateNode.containerInfo),
				(Je = !0),
				xt(t, e, n),
				(pe = r),
				(Je = i)
			break
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!Ce &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next
				do {
					var s = i,
						o = s.destroy
					;(s = s.tag),
						o !== void 0 && (s & 2 || s & 4) && ea(n, e, o),
						(i = i.next)
				} while (i !== r)
			}
			xt(t, e, n)
			break
		case 1:
			if (
				!Ce &&
				(jn(n, e),
				(r = n.stateNode),
				typeof r.componentWillUnmount == 'function')
			)
				try {
					;(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount()
				} catch (l) {
					Z(n, e, l)
				}
			xt(t, e, n)
			break
		case 21:
			xt(t, e, n)
			break
		case 22:
			n.mode & 1
				? ((Ce = (r = Ce) || n.memoizedState !== null), xt(t, e, n), (Ce = r))
				: xt(t, e, n)
			break
		default:
			xt(t, e, n)
	}
}
function ad(t) {
	var e = t.updateQueue
	if (e !== null) {
		t.updateQueue = null
		var n = t.stateNode
		n === null && (n = t.stateNode = new gy()),
			e.forEach(function (r) {
				var i = Iy.bind(null, t, r)
				n.has(r) || (n.add(r), r.then(i, i))
			})
	}
}
function qe(t, e) {
	var n = e.deletions
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r]
			try {
				var s = t,
					o = e,
					l = o
				e: for (; l !== null; ) {
					switch (l.tag) {
						case 5:
							;(pe = l.stateNode), (Je = !1)
							break e
						case 3:
							;(pe = l.stateNode.containerInfo), (Je = !0)
							break e
						case 4:
							;(pe = l.stateNode.containerInfo), (Je = !0)
							break e
					}
					l = l.return
				}
				if (pe === null) throw Error(C(160))
				ap(s, o, i), (pe = null), (Je = !1)
				var a = i.alternate
				a !== null && (a.return = null), (i.return = null)
			} catch (u) {
				Z(i, e, u)
			}
		}
	if (e.subtreeFlags & 12854)
		for (e = e.child; e !== null; ) up(e, t), (e = e.sibling)
}
function up(t, e) {
	var n = t.alternate,
		r = t.flags
	switch (t.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((qe(e, t), lt(t), r & 4)) {
				try {
					Hr(3, t, t.return), uo(3, t)
				} catch (y) {
					Z(t, t.return, y)
				}
				try {
					Hr(5, t, t.return)
				} catch (y) {
					Z(t, t.return, y)
				}
			}
			break
		case 1:
			qe(e, t), lt(t), r & 512 && n !== null && jn(n, n.return)
			break
		case 5:
			if (
				(qe(e, t),
				lt(t),
				r & 512 && n !== null && jn(n, n.return),
				t.flags & 32)
			) {
				var i = t.stateNode
				try {
					Xr(i, '')
				} catch (y) {
					Z(t, t.return, y)
				}
			}
			if (r & 4 && ((i = t.stateNode), i != null)) {
				var s = t.memoizedProps,
					o = n !== null ? n.memoizedProps : s,
					l = t.type,
					a = t.updateQueue
				if (((t.updateQueue = null), a !== null))
					try {
						l === 'input' && s.type === 'radio' && s.name != null && Pf(i, s),
							Nl(l, o)
						var u = Nl(l, s)
						for (o = 0; o < a.length; o += 2) {
							var f = a[o],
								c = a[o + 1]
							f === 'style'
								? Lf(i, c)
								: f === 'dangerouslySetInnerHTML'
								? Af(i, c)
								: f === 'children'
								? Xr(i, c)
								: Ma(i, f, c, u)
						}
						switch (l) {
							case 'input':
								El(i, s)
								break
							case 'textarea':
								Df(i, s)
								break
							case 'select':
								var d = i._wrapperState.wasMultiple
								i._wrapperState.wasMultiple = !!s.multiple
								var g = s.value
								g != null
									? Vn(i, !!s.multiple, g, !1)
									: d !== !!s.multiple &&
									  (s.defaultValue != null
											? Vn(i, !!s.multiple, s.defaultValue, !0)
											: Vn(i, !!s.multiple, s.multiple ? [] : '', !1))
						}
						i[oi] = s
					} catch (y) {
						Z(t, t.return, y)
					}
			}
			break
		case 6:
			if ((qe(e, t), lt(t), r & 4)) {
				if (t.stateNode === null) throw Error(C(162))
				;(i = t.stateNode), (s = t.memoizedProps)
				try {
					i.nodeValue = s
				} catch (y) {
					Z(t, t.return, y)
				}
			}
			break
		case 3:
			if (
				(qe(e, t), lt(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					ti(e.containerInfo)
				} catch (y) {
					Z(t, t.return, y)
				}
			break
		case 4:
			qe(e, t), lt(t)
			break
		case 13:
			qe(e, t),
				lt(t),
				(i = t.child),
				i.flags & 8192 &&
					((s = i.memoizedState !== null),
					(i.stateNode.isHidden = s),
					!s ||
						(i.alternate !== null && i.alternate.memoizedState !== null) ||
						(hu = re())),
				r & 4 && ad(t)
			break
		case 22:
			if (
				((f = n !== null && n.memoizedState !== null),
				t.mode & 1 ? ((Ce = (u = Ce) || f), qe(e, t), (Ce = u)) : qe(e, t),
				lt(t),
				r & 8192)
			) {
				if (
					((u = t.memoizedState !== null),
					(t.stateNode.isHidden = u) && !f && t.mode & 1)
				)
					for (E = t, f = t.child; f !== null; ) {
						for (c = E = f; E !== null; ) {
							switch (((d = E), (g = d.child), d.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Hr(4, d, d.return)
									break
								case 1:
									jn(d, d.return)
									var _ = d.stateNode
									if (typeof _.componentWillUnmount == 'function') {
										;(r = d), (n = d.return)
										try {
											;(e = r),
												(_.props = e.memoizedProps),
												(_.state = e.memoizedState),
												_.componentWillUnmount()
										} catch (y) {
											Z(r, n, y)
										}
									}
									break
								case 5:
									jn(d, d.return)
									break
								case 22:
									if (d.memoizedState !== null) {
										cd(c)
										continue
									}
							}
							g !== null ? ((g.return = d), (E = g)) : cd(c)
						}
						f = f.sibling
					}
				e: for (f = null, c = t; ; ) {
					if (c.tag === 5) {
						if (f === null) {
							f = c
							try {
								;(i = c.stateNode),
									u
										? ((s = i.style),
										  typeof s.setProperty == 'function'
												? s.setProperty('display', 'none', 'important')
												: (s.display = 'none'))
										: ((l = c.stateNode),
										  (a = c.memoizedProps.style),
										  (o =
												a != null && a.hasOwnProperty('display')
													? a.display
													: null),
										  (l.style.display = Mf('display', o)))
							} catch (y) {
								Z(t, t.return, y)
							}
						}
					} else if (c.tag === 6) {
						if (f === null)
							try {
								c.stateNode.nodeValue = u ? '' : c.memoizedProps
							} catch (y) {
								Z(t, t.return, y)
							}
					} else if (
						((c.tag !== 22 && c.tag !== 23) ||
							c.memoizedState === null ||
							c === t) &&
						c.child !== null
					) {
						;(c.child.return = c), (c = c.child)
						continue
					}
					if (c === t) break e
					for (; c.sibling === null; ) {
						if (c.return === null || c.return === t) break e
						f === c && (f = null), (c = c.return)
					}
					f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling)
				}
			}
			break
		case 19:
			qe(e, t), lt(t), r & 4 && ad(t)
			break
		case 21:
			break
		default:
			qe(e, t), lt(t)
	}
}
function lt(t) {
	var e = t.flags
	if (e & 2) {
		try {
			e: {
				for (var n = t.return; n !== null; ) {
					if (lp(n)) {
						var r = n
						break e
					}
					n = n.return
				}
				throw Error(C(160))
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode
					r.flags & 32 && (Xr(i, ''), (r.flags &= -33))
					var s = ld(t)
					ra(t, s, i)
					break
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						l = ld(t)
					na(t, l, o)
					break
				default:
					throw Error(C(161))
			}
		} catch (a) {
			Z(t, t.return, a)
		}
		t.flags &= -3
	}
	e & 4096 && (t.flags &= -4097)
}
function yy(t, e, n) {
	;(E = t), cp(t)
}
function cp(t, e, n) {
	for (var r = (t.mode & 1) !== 0; E !== null; ) {
		var i = E,
			s = i.child
		if (i.tag === 22 && r) {
			var o = i.memoizedState !== null || Xi
			if (!o) {
				var l = i.alternate,
					a = (l !== null && l.memoizedState !== null) || Ce
				l = Xi
				var u = Ce
				if (((Xi = o), (Ce = a) && !u))
					for (E = i; E !== null; )
						(o = E),
							(a = o.child),
							o.tag === 22 && o.memoizedState !== null
								? dd(i)
								: a !== null
								? ((a.return = o), (E = a))
								: dd(i)
				for (; s !== null; ) (E = s), cp(s), (s = s.sibling)
				;(E = i), (Xi = l), (Ce = u)
			}
			ud(t)
		} else
			i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (E = s)) : ud(t)
	}
}
function ud(t) {
	for (; E !== null; ) {
		var e = E
		if (e.flags & 8772) {
			var n = e.alternate
			try {
				if (e.flags & 8772)
					switch (e.tag) {
						case 0:
						case 11:
						case 15:
							Ce || uo(5, e)
							break
						case 1:
							var r = e.stateNode
							if (e.flags & 4 && !Ce)
								if (n === null) r.componentDidMount()
								else {
									var i =
										e.elementType === e.type
											? n.memoizedProps
											: Xe(e.type, n.memoizedProps)
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									)
								}
							var s = e.updateQueue
							s !== null && Qc(e, s, r)
							break
						case 3:
							var o = e.updateQueue
							if (o !== null) {
								if (((n = null), e.child !== null))
									switch (e.child.tag) {
										case 5:
											n = e.child.stateNode
											break
										case 1:
											n = e.child.stateNode
									}
								Qc(e, o, n)
							}
							break
						case 5:
							var l = e.stateNode
							if (n === null && e.flags & 4) {
								n = l
								var a = e.memoizedProps
								switch (e.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										a.autoFocus && n.focus()
										break
									case 'img':
										a.src && (n.src = a.src)
								}
							}
							break
						case 6:
							break
						case 4:
							break
						case 12:
							break
						case 13:
							if (e.memoizedState === null) {
								var u = e.alternate
								if (u !== null) {
									var f = u.memoizedState
									if (f !== null) {
										var c = f.dehydrated
										c !== null && ti(c)
									}
								}
							}
							break
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break
						default:
							throw Error(C(163))
					}
				Ce || (e.flags & 512 && ta(e))
			} catch (d) {
				Z(e, e.return, d)
			}
		}
		if (e === t) {
			E = null
			break
		}
		if (((n = e.sibling), n !== null)) {
			;(n.return = e.return), (E = n)
			break
		}
		E = e.return
	}
}
function cd(t) {
	for (; E !== null; ) {
		var e = E
		if (e === t) {
			E = null
			break
		}
		var n = e.sibling
		if (n !== null) {
			;(n.return = e.return), (E = n)
			break
		}
		E = e.return
	}
}
function dd(t) {
	for (; E !== null; ) {
		var e = E
		try {
			switch (e.tag) {
				case 0:
				case 11:
				case 15:
					var n = e.return
					try {
						uo(4, e)
					} catch (a) {
						Z(e, n, a)
					}
					break
				case 1:
					var r = e.stateNode
					if (typeof r.componentDidMount == 'function') {
						var i = e.return
						try {
							r.componentDidMount()
						} catch (a) {
							Z(e, i, a)
						}
					}
					var s = e.return
					try {
						ta(e)
					} catch (a) {
						Z(e, s, a)
					}
					break
				case 5:
					var o = e.return
					try {
						ta(e)
					} catch (a) {
						Z(e, o, a)
					}
			}
		} catch (a) {
			Z(e, e.return, a)
		}
		if (e === t) {
			E = null
			break
		}
		var l = e.sibling
		if (l !== null) {
			;(l.return = e.return), (E = l)
			break
		}
		E = e.return
	}
}
var vy = Math.ceil,
	As = Tt.ReactCurrentDispatcher,
	du = Tt.ReactCurrentOwner,
	Qe = Tt.ReactCurrentBatchConfig,
	z = 0,
	he = null,
	ie = null,
	ge = 0,
	Fe = 0,
	Bn = Xt(0),
	le = 0,
	fi = null,
	_n = 0,
	co = 0,
	fu = 0,
	$r = null,
	Ne = null,
	hu = 0,
	sr = 1 / 0,
	ft = null,
	Ms = !1,
	ia = null,
	Bt = null,
	Ji = !1,
	Mt = null,
	Ls = 0,
	br = 0,
	sa = null,
	ds = -1,
	fs = 0
function ke() {
	return z & 6 ? re() : ds !== -1 ? ds : (ds = re())
}
function Wt(t) {
	return t.mode & 1
		? z & 2 && ge !== 0
			? ge & -ge
			: ny.transition !== null
			? (fs === 0 && (fs = Gf()), fs)
			: ((t = B),
			  t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : eh(t.type))),
			  t)
		: 1
}
function it(t, e, n, r) {
	if (50 < br) throw ((br = 0), (sa = null), Error(C(185)))
	Ti(t, n, r),
		(!(z & 2) || t !== he) &&
			(t === he && (!(z & 2) && (co |= n), le === 4 && Ot(t, ge)),
			Ae(t, r),
			n === 1 && z === 0 && !(e.mode & 1) && ((sr = re() + 500), oo && Jt()))
}
function Ae(t, e) {
	var n = t.callbackNode
	n_(t, e)
	var r = ys(t, t === he ? ge : 0)
	if (r === 0)
		n !== null && Cc(n), (t.callbackNode = null), (t.callbackPriority = 0)
	else if (((e = r & -r), t.callbackPriority !== e)) {
		if ((n != null && Cc(n), e === 1))
			t.tag === 0 ? ty(fd.bind(null, t)) : vh(fd.bind(null, t)),
				X_(function () {
					!(z & 6) && Jt()
				}),
				(n = null)
		else {
			switch (Kf(r)) {
				case 1:
					n = ja
					break
				case 4:
					n = bf
					break
				case 16:
					n = _s
					break
				case 536870912:
					n = Qf
					break
				default:
					n = _s
			}
			n = yp(n, dp.bind(null, t))
		}
		;(t.callbackPriority = e), (t.callbackNode = n)
	}
}
function dp(t, e) {
	if (((ds = -1), (fs = 0), z & 6)) throw Error(C(327))
	var n = t.callbackNode
	if (Gn() && t.callbackNode !== n) return null
	var r = ys(t, t === he ? ge : 0)
	if (r === 0) return null
	if (r & 30 || r & t.expiredLanes || e) e = Fs(t, r)
	else {
		e = r
		var i = z
		z |= 2
		var s = hp()
		;(he !== t || ge !== e) && ((ft = null), (sr = re() + 500), dn(t, e))
		do
			try {
				Ey()
				break
			} catch (l) {
				fp(t, l)
			}
		while (1)
		Ja(),
			(As.current = s),
			(z = i),
			ie !== null ? (e = 0) : ((he = null), (ge = 0), (e = le))
	}
	if (e !== 0) {
		if (
			(e === 2 && ((i = Ol(t)), i !== 0 && ((r = i), (e = oa(t, i)))), e === 1)
		)
			throw ((n = fi), dn(t, 0), Ot(t, r), Ae(t, re()), n)
		if (e === 6) Ot(t, r)
		else {
			if (
				((i = t.current.alternate),
				!(r & 30) &&
					!Cy(i) &&
					((e = Fs(t, r)),
					e === 2 && ((s = Ol(t)), s !== 0 && ((r = s), (e = oa(t, s)))),
					e === 1))
			)
				throw ((n = fi), dn(t, 0), Ot(t, r), Ae(t, re()), n)
			switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
				case 0:
				case 1:
					throw Error(C(345))
				case 2:
					nn(t, Ne, ft)
					break
				case 3:
					if (
						(Ot(t, r), (r & 130023424) === r && ((e = hu + 500 - re()), 10 < e))
					) {
						if (ys(t, 0) !== 0) break
						if (((i = t.suspendedLanes), (i & r) !== r)) {
							ke(), (t.pingedLanes |= t.suspendedLanes & i)
							break
						}
						t.timeoutHandle = Bl(nn.bind(null, t, Ne, ft), e)
						break
					}
					nn(t, Ne, ft)
					break
				case 4:
					if ((Ot(t, r), (r & 4194240) === r)) break
					for (e = t.eventTimes, i = -1; 0 < r; ) {
						var o = 31 - rt(r)
						;(s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s)
					}
					if (
						((r = i),
						(r = re() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * vy(r / 1960)) - r),
						10 < r)
					) {
						t.timeoutHandle = Bl(nn.bind(null, t, Ne, ft), r)
						break
					}
					nn(t, Ne, ft)
					break
				case 5:
					nn(t, Ne, ft)
					break
				default:
					throw Error(C(329))
			}
		}
	}
	return Ae(t, re()), t.callbackNode === n ? dp.bind(null, t) : null
}
function oa(t, e) {
	var n = $r
	return (
		t.current.memoizedState.isDehydrated && (dn(t, e).flags |= 256),
		(t = Fs(t, e)),
		t !== 2 && ((e = Ne), (Ne = n), e !== null && la(e)),
		t
	)
}
function la(t) {
	Ne === null ? (Ne = t) : Ne.push.apply(Ne, t)
}
function Cy(t) {
	for (var e = t; ; ) {
		if (e.flags & 16384) {
			var n = e.updateQueue
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						s = i.getSnapshot
					i = i.value
					try {
						if (!ot(s(), i)) return !1
					} catch {
						return !1
					}
				}
		}
		if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
			(n.return = e), (e = n)
		else {
			if (e === t) break
			for (; e.sibling === null; ) {
				if (e.return === null || e.return === t) return !0
				e = e.return
			}
			;(e.sibling.return = e.return), (e = e.sibling)
		}
	}
	return !0
}
function Ot(t, e) {
	for (
		e &= ~fu,
			e &= ~co,
			t.suspendedLanes |= e,
			t.pingedLanes &= ~e,
			t = t.expirationTimes;
		0 < e;

	) {
		var n = 31 - rt(e),
			r = 1 << n
		;(t[n] = -1), (e &= ~r)
	}
}
function fd(t) {
	if (z & 6) throw Error(C(327))
	Gn()
	var e = ys(t, 0)
	if (!(e & 1)) return Ae(t, re()), null
	var n = Fs(t, e)
	if (t.tag !== 0 && n === 2) {
		var r = Ol(t)
		r !== 0 && ((e = r), (n = oa(t, r)))
	}
	if (n === 1) throw ((n = fi), dn(t, 0), Ot(t, e), Ae(t, re()), n)
	if (n === 6) throw Error(C(345))
	return (
		(t.finishedWork = t.current.alternate),
		(t.finishedLanes = e),
		nn(t, Ne, ft),
		Ae(t, re()),
		null
	)
}
function pu(t, e) {
	var n = z
	z |= 1
	try {
		return t(e)
	} finally {
		;(z = n), z === 0 && ((sr = re() + 500), oo && Jt())
	}
}
function yn(t) {
	Mt !== null && Mt.tag === 0 && !(z & 6) && Gn()
	var e = z
	z |= 1
	var n = Qe.transition,
		r = B
	try {
		if (((Qe.transition = null), (B = 1), t)) return t()
	} finally {
		;(B = r), (Qe.transition = n), (z = e), !(z & 6) && Jt()
	}
}
function mu() {
	;(Fe = Bn.current), G(Bn)
}
function dn(t, e) {
	;(t.finishedWork = null), (t.finishedLanes = 0)
	var n = t.timeoutHandle
	if ((n !== -1 && ((t.timeoutHandle = -1), q_(n)), ie !== null))
		for (n = ie.return; n !== null; ) {
			var r = n
			switch ((Ya(r), r.tag)) {
				case 1:
					;(r = r.type.childContextTypes), r != null && Ss()
					break
				case 3:
					rr(), G(De), G(Ee), iu()
					break
				case 5:
					ru(r)
					break
				case 4:
					rr()
					break
				case 13:
					G(q)
					break
				case 19:
					G(q)
					break
				case 10:
					Za(r.type._context)
					break
				case 22:
				case 23:
					mu()
			}
			n = n.return
		}
	if (
		((he = t),
		(ie = t = Vt(t.current, null)),
		(ge = Fe = e),
		(le = 0),
		(fi = null),
		(fu = co = _n = 0),
		(Ne = $r = null),
		ln !== null)
	) {
		for (e = 0; e < ln.length; e++)
			if (((n = ln[e]), (r = n.interleaved), r !== null)) {
				n.interleaved = null
				var i = r.next,
					s = n.pending
				if (s !== null) {
					var o = s.next
					;(s.next = i), (r.next = o)
				}
				n.pending = r
			}
		ln = null
	}
	return t
}
function fp(t, e) {
	do {
		var n = ie
		try {
			if ((Ja(), (as.current = Os), Ds)) {
				for (var r = X.memoizedState; r !== null; ) {
					var i = r.queue
					i !== null && (i.pending = null), (r = r.next)
				}
				Ds = !1
			}
			if (
				((gn = 0),
				(ce = se = X = null),
				(Vr = !1),
				(ui = 0),
				(du.current = null),
				n === null || n.return === null)
			) {
				;(le = 1), (fi = e), (ie = null)
				break
			}
			e: {
				var s = t,
					o = n.return,
					l = n,
					a = e
				if (
					((e = ge),
					(l.flags |= 32768),
					a !== null && typeof a == 'object' && typeof a.then == 'function')
				) {
					var u = a,
						f = l,
						c = f.tag
					if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
						var d = f.alternate
						d
							? ((f.updateQueue = d.updateQueue),
							  (f.memoizedState = d.memoizedState),
							  (f.lanes = d.lanes))
							: ((f.updateQueue = null), (f.memoizedState = null))
					}
					var g = Zc(o)
					if (g !== null) {
						;(g.flags &= -257),
							ed(g, o, l, s, e),
							g.mode & 1 && Jc(s, u, e),
							(e = g),
							(a = u)
						var _ = e.updateQueue
						if (_ === null) {
							var y = new Set()
							y.add(a), (e.updateQueue = y)
						} else _.add(a)
						break e
					} else {
						if (!(e & 1)) {
							Jc(s, u, e), gu()
							break e
						}
						a = Error(C(426))
					}
				} else if (K && l.mode & 1) {
					var R = Zc(o)
					if (R !== null) {
						!(R.flags & 65536) && (R.flags |= 256),
							ed(R, o, l, s, e),
							qa(ir(a, l))
						break e
					}
				}
				;(s = a = ir(a, l)),
					le !== 4 && (le = 2),
					$r === null ? ($r = [s]) : $r.push(s),
					(s = o)
				do {
					switch (s.tag) {
						case 3:
							;(s.flags |= 65536), (e &= -e), (s.lanes |= e)
							var p = Yh(s, a, e)
							bc(s, p)
							break e
						case 1:
							l = a
							var h = s.type,
								m = s.stateNode
							if (
								!(s.flags & 128) &&
								(typeof h.getDerivedStateFromError == 'function' ||
									(m !== null &&
										typeof m.componentDidCatch == 'function' &&
										(Bt === null || !Bt.has(m))))
							) {
								;(s.flags |= 65536), (e &= -e), (s.lanes |= e)
								var v = qh(s, l, e)
								bc(s, v)
								break e
							}
					}
					s = s.return
				} while (s !== null)
			}
			mp(n)
		} catch (S) {
			;(e = S), ie === n && n !== null && (ie = n = n.return)
			continue
		}
		break
	} while (1)
}
function hp() {
	var t = As.current
	return (As.current = Os), t === null ? Os : t
}
function gu() {
	;(le === 0 || le === 3 || le === 2) && (le = 4),
		he === null || (!(_n & 268435455) && !(co & 268435455)) || Ot(he, ge)
}
function Fs(t, e) {
	var n = z
	z |= 2
	var r = hp()
	;(he !== t || ge !== e) && ((ft = null), dn(t, e))
	do
		try {
			wy()
			break
		} catch (i) {
			fp(t, i)
		}
	while (1)
	if ((Ja(), (z = n), (As.current = r), ie !== null)) throw Error(C(261))
	return (he = null), (ge = 0), le
}
function wy() {
	for (; ie !== null; ) pp(ie)
}
function Ey() {
	for (; ie !== null && !Gg(); ) pp(ie)
}
function pp(t) {
	var e = _p(t.alternate, t, Fe)
	;(t.memoizedProps = t.pendingProps),
		e === null ? mp(t) : (ie = e),
		(du.current = null)
}
function mp(t) {
	var e = t
	do {
		var n = e.alternate
		if (((t = e.return), e.flags & 32768)) {
			if (((n = my(n, e)), n !== null)) {
				;(n.flags &= 32767), (ie = n)
				return
			}
			if (t !== null)
				(t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null)
			else {
				;(le = 6), (ie = null)
				return
			}
		} else if (((n = py(n, e, Fe)), n !== null)) {
			ie = n
			return
		}
		if (((e = e.sibling), e !== null)) {
			ie = e
			return
		}
		ie = e = t
	} while (e !== null)
	le === 0 && (le = 5)
}
function nn(t, e, n) {
	var r = B,
		i = Qe.transition
	try {
		;(Qe.transition = null), (B = 1), Sy(t, e, n, r)
	} finally {
		;(Qe.transition = i), (B = r)
	}
	return null
}
function Sy(t, e, n, r) {
	do Gn()
	while (Mt !== null)
	if (z & 6) throw Error(C(327))
	n = t.finishedWork
	var i = t.finishedLanes
	if (n === null) return null
	if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
		throw Error(C(177))
	;(t.callbackNode = null), (t.callbackPriority = 0)
	var s = n.lanes | n.childLanes
	if (
		(r_(t, s),
		t === he && ((ie = he = null), (ge = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Ji ||
			((Ji = !0),
			yp(_s, function () {
				return Gn(), null
			})),
		(s = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || s)
	) {
		;(s = Qe.transition), (Qe.transition = null)
		var o = B
		B = 1
		var l = z
		;(z |= 4),
			(du.current = null),
			_y(t, n),
			up(n, t),
			H_(Ul),
			(vs = !!zl),
			(Ul = zl = null),
			(t.current = n),
			yy(n),
			Kg(),
			(z = l),
			(B = o),
			(Qe.transition = s)
	} else t.current = n
	if (
		(Ji && ((Ji = !1), (Mt = t), (Ls = i)),
		(s = t.pendingLanes),
		s === 0 && (Bt = null),
		Xg(n.stateNode),
		Ae(t, re()),
		e !== null)
	)
		for (r = t.onRecoverableError, n = 0; n < e.length; n++)
			(i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
	if (Ms) throw ((Ms = !1), (t = ia), (ia = null), t)
	return (
		Ls & 1 && t.tag !== 0 && Gn(),
		(s = t.pendingLanes),
		s & 1 ? (t === sa ? br++ : ((br = 0), (sa = t))) : (br = 0),
		Jt(),
		null
	)
}
function Gn() {
	if (Mt !== null) {
		var t = Kf(Ls),
			e = Qe.transition,
			n = B
		try {
			if (((Qe.transition = null), (B = 16 > t ? 16 : t), Mt === null))
				var r = !1
			else {
				if (((t = Mt), (Mt = null), (Ls = 0), z & 6)) throw Error(C(331))
				var i = z
				for (z |= 4, E = t.current; E !== null; ) {
					var s = E,
						o = s.child
					if (E.flags & 16) {
						var l = s.deletions
						if (l !== null) {
							for (var a = 0; a < l.length; a++) {
								var u = l[a]
								for (E = u; E !== null; ) {
									var f = E
									switch (f.tag) {
										case 0:
										case 11:
										case 15:
											Hr(8, f, s)
									}
									var c = f.child
									if (c !== null) (c.return = f), (E = c)
									else
										for (; E !== null; ) {
											f = E
											var d = f.sibling,
												g = f.return
											if ((op(f), f === u)) {
												E = null
												break
											}
											if (d !== null) {
												;(d.return = g), (E = d)
												break
											}
											E = g
										}
								}
							}
							var _ = s.alternate
							if (_ !== null) {
								var y = _.child
								if (y !== null) {
									_.child = null
									do {
										var R = y.sibling
										;(y.sibling = null), (y = R)
									} while (y !== null)
								}
							}
							E = s
						}
					}
					if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (E = o)
					else
						e: for (; E !== null; ) {
							if (((s = E), s.flags & 2048))
								switch (s.tag) {
									case 0:
									case 11:
									case 15:
										Hr(9, s, s.return)
								}
							var p = s.sibling
							if (p !== null) {
								;(p.return = s.return), (E = p)
								break e
							}
							E = s.return
						}
				}
				var h = t.current
				for (E = h; E !== null; ) {
					o = E
					var m = o.child
					if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (E = m)
					else
						e: for (o = h; E !== null; ) {
							if (((l = E), l.flags & 2048))
								try {
									switch (l.tag) {
										case 0:
										case 11:
										case 15:
											uo(9, l)
									}
								} catch (S) {
									Z(l, l.return, S)
								}
							if (l === o) {
								E = null
								break e
							}
							var v = l.sibling
							if (v !== null) {
								;(v.return = l.return), (E = v)
								break e
							}
							E = l.return
						}
				}
				if (
					((z = i), Jt(), ct && typeof ct.onPostCommitFiberRoot == 'function')
				)
					try {
						ct.onPostCommitFiberRoot(to, t)
					} catch {}
				r = !0
			}
			return r
		} finally {
			;(B = n), (Qe.transition = e)
		}
	}
	return !1
}
function hd(t, e, n) {
	;(e = ir(n, e)),
		(e = Yh(t, e, 1)),
		(t = jt(t, e, 1)),
		(e = ke()),
		t !== null && (Ti(t, 1, e), Ae(t, e))
}
function Z(t, e, n) {
	if (t.tag === 3) hd(t, t, n)
	else
		for (; e !== null; ) {
			if (e.tag === 3) {
				hd(e, t, n)
				break
			} else if (e.tag === 1) {
				var r = e.stateNode
				if (
					typeof e.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(Bt === null || !Bt.has(r)))
				) {
					;(t = ir(n, t)),
						(t = qh(e, t, 1)),
						(e = jt(e, t, 1)),
						(t = ke()),
						e !== null && (Ti(e, 1, t), Ae(e, t))
					break
				}
			}
			e = e.return
		}
}
function ky(t, e, n) {
	var r = t.pingCache
	r !== null && r.delete(e),
		(e = ke()),
		(t.pingedLanes |= t.suspendedLanes & n),
		he === t &&
			(ge & n) === n &&
			(le === 4 || (le === 3 && (ge & 130023424) === ge && 500 > re() - hu)
				? dn(t, 0)
				: (fu |= n)),
		Ae(t, e)
}
function gp(t, e) {
	e === 0 &&
		(t.mode & 1
			? ((e = Vi), (Vi <<= 1), !(Vi & 130023424) && (Vi = 4194304))
			: (e = 1))
	var n = ke()
	;(t = wt(t, e)), t !== null && (Ti(t, e, n), Ae(t, n))
}
function Ty(t) {
	var e = t.memoizedState,
		n = 0
	e !== null && (n = e.retryLane), gp(t, n)
}
function Iy(t, e) {
	var n = 0
	switch (t.tag) {
		case 13:
			var r = t.stateNode,
				i = t.memoizedState
			i !== null && (n = i.retryLane)
			break
		case 19:
			r = t.stateNode
			break
		default:
			throw Error(C(314))
	}
	r !== null && r.delete(e), gp(t, n)
}
var _p
_p = function (t, e, n) {
	if (t !== null)
		if (t.memoizedProps !== e.pendingProps || De.current) xe = !0
		else {
			if (!(t.lanes & n) && !(e.flags & 128)) return (xe = !1), hy(t, e, n)
			xe = !!(t.flags & 131072)
		}
	else (xe = !1), K && e.flags & 1048576 && Ch(e, Is, e.index)
	switch (((e.lanes = 0), e.tag)) {
		case 2:
			var r = e.type
			cs(t, e), (t = e.pendingProps)
			var i = er(e, Ee.current)
			Qn(e, n), (i = ou(null, e, r, t, i, n))
			var s = lu()
			return (
				(e.flags |= 1),
				typeof i == 'object' &&
				i !== null &&
				typeof i.render == 'function' &&
				i.$$typeof === void 0
					? ((e.tag = 1),
					  (e.memoizedState = null),
					  (e.updateQueue = null),
					  Oe(r) ? ((s = !0), ks(e)) : (s = !1),
					  (e.memoizedState =
							i.state !== null && i.state !== void 0 ? i.state : null),
					  tu(e),
					  (i.updater = lo),
					  (e.stateNode = i),
					  (i._reactInternals = e),
					  Gl(e, r, t, n),
					  (e = ql(null, e, r, !0, s, n)))
					: ((e.tag = 0), K && s && Ka(e), Se(null, e, i, n), (e = e.child)),
				e
			)
		case 16:
			r = e.elementType
			e: {
				switch (
					(cs(t, e),
					(t = e.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(e.type = r),
					(i = e.tag = xy(r)),
					(t = Xe(r, t)),
					i)
				) {
					case 0:
						e = Yl(null, e, r, t, n)
						break e
					case 1:
						e = rd(null, e, r, t, n)
						break e
					case 11:
						e = td(null, e, r, t, n)
						break e
					case 14:
						e = nd(null, e, r, Xe(r.type, t), n)
						break e
				}
				throw Error(C(306, r, ''))
			}
			return e
		case 0:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : Xe(r, i)),
				Yl(t, e, r, i, n)
			)
		case 1:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : Xe(r, i)),
				rd(t, e, r, i, n)
			)
		case 3:
			e: {
				if ((ep(e), t === null)) throw Error(C(387))
				;(r = e.pendingProps),
					(s = e.memoizedState),
					(i = s.element),
					kh(t, e),
					Rs(e, r, null, n)
				var o = e.memoizedState
				if (((r = o.element), s.isDehydrated))
					if (
						((s = {
							element: r,
							isDehydrated: !1,
							cache: o.cache,
							pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
							transitions: o.transitions
						}),
						(e.updateQueue.baseState = s),
						(e.memoizedState = s),
						e.flags & 256)
					) {
						;(i = ir(Error(C(423)), e)), (e = id(t, e, r, n, i))
						break e
					} else if (r !== i) {
						;(i = ir(Error(C(424)), e)), (e = id(t, e, r, n, i))
						break e
					} else
						for (
							ze = Ut(e.stateNode.containerInfo.firstChild),
								Ue = e,
								K = !0,
								Ze = null,
								n = xh(e, null, r, n),
								e.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling)
				else {
					if ((tr(), r === i)) {
						e = Et(t, e, n)
						break e
					}
					Se(t, e, r, n)
				}
				e = e.child
			}
			return e
		case 5:
			return (
				Rh(e),
				t === null && $l(e),
				(r = e.type),
				(i = e.pendingProps),
				(s = t !== null ? t.memoizedProps : null),
				(o = i.children),
				jl(r, i) ? (o = null) : s !== null && jl(r, s) && (e.flags |= 32),
				Zh(t, e),
				Se(t, e, o, n),
				e.child
			)
		case 6:
			return t === null && $l(e), null
		case 13:
			return tp(t, e, n)
		case 4:
			return (
				nu(e, e.stateNode.containerInfo),
				(r = e.pendingProps),
				t === null ? (e.child = nr(e, null, r, n)) : Se(t, e, r, n),
				e.child
			)
		case 11:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : Xe(r, i)),
				td(t, e, r, i, n)
			)
		case 7:
			return Se(t, e, e.pendingProps, n), e.child
		case 8:
			return Se(t, e, e.pendingProps.children, n), e.child
		case 12:
			return Se(t, e, e.pendingProps.children, n), e.child
		case 10:
			e: {
				if (
					((r = e.type._context),
					(i = e.pendingProps),
					(s = e.memoizedProps),
					(o = i.value),
					$(Ns, r._currentValue),
					(r._currentValue = o),
					s !== null)
				)
					if (ot(s.value, o)) {
						if (s.children === i.children && !De.current) {
							e = Et(t, e, n)
							break e
						}
					} else
						for (s = e.child, s !== null && (s.return = e); s !== null; ) {
							var l = s.dependencies
							if (l !== null) {
								o = s.child
								for (var a = l.firstContext; a !== null; ) {
									if (a.context === r) {
										if (s.tag === 1) {
											;(a = _t(-1, n & -n)), (a.tag = 2)
											var u = s.updateQueue
											if (u !== null) {
												u = u.shared
												var f = u.pending
												f === null
													? (a.next = a)
													: ((a.next = f.next), (f.next = a)),
													(u.pending = a)
											}
										}
										;(s.lanes |= n),
											(a = s.alternate),
											a !== null && (a.lanes |= n),
											bl(s.return, n, e),
											(l.lanes |= n)
										break
									}
									a = a.next
								}
							} else if (s.tag === 10) o = s.type === e.type ? null : s.child
							else if (s.tag === 18) {
								if (((o = s.return), o === null)) throw Error(C(341))
								;(o.lanes |= n),
									(l = o.alternate),
									l !== null && (l.lanes |= n),
									bl(o, n, e),
									(o = s.sibling)
							} else o = s.child
							if (o !== null) o.return = s
							else
								for (o = s; o !== null; ) {
									if (o === e) {
										o = null
										break
									}
									if (((s = o.sibling), s !== null)) {
										;(s.return = o.return), (o = s)
										break
									}
									o = o.return
								}
							s = o
						}
				Se(t, e, i.children, n), (e = e.child)
			}
			return e
		case 9:
			return (
				(i = e.type),
				(r = e.pendingProps.children),
				Qn(e, n),
				(i = Ge(i)),
				(r = r(i)),
				(e.flags |= 1),
				Se(t, e, r, n),
				e.child
			)
		case 14:
			return (
				(r = e.type),
				(i = Xe(r, e.pendingProps)),
				(i = Xe(r.type, i)),
				nd(t, e, r, i, n)
			)
		case 15:
			return Xh(t, e, e.type, e.pendingProps, n)
		case 17:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : Xe(r, i)),
				cs(t, e),
				(e.tag = 1),
				Oe(r) ? ((t = !0), ks(e)) : (t = !1),
				Qn(e, n),
				Ih(e, r, i),
				Gl(e, r, i, n),
				ql(null, e, r, !0, t, n)
			)
		case 19:
			return np(t, e, n)
		case 22:
			return Jh(t, e, n)
	}
	throw Error(C(156, e.tag))
}
function yp(t, e) {
	return $f(t, e)
}
function Ny(t, e, n, r) {
	;(this.tag = t),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = e),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null)
}
function be(t, e, n, r) {
	return new Ny(t, e, n, r)
}
function _u(t) {
	return (t = t.prototype), !(!t || !t.isReactComponent)
}
function xy(t) {
	if (typeof t == 'function') return _u(t) ? 1 : 0
	if (t != null) {
		if (((t = t.$$typeof), t === Fa)) return 11
		if (t === za) return 14
	}
	return 2
}
function Vt(t, e) {
	var n = t.alternate
	return (
		n === null
			? ((n = be(t.tag, e, t.key, t.mode)),
			  (n.elementType = t.elementType),
			  (n.type = t.type),
			  (n.stateNode = t.stateNode),
			  (n.alternate = t),
			  (t.alternate = n))
			: ((n.pendingProps = e),
			  (n.type = t.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = t.flags & 14680064),
		(n.childLanes = t.childLanes),
		(n.lanes = t.lanes),
		(n.child = t.child),
		(n.memoizedProps = t.memoizedProps),
		(n.memoizedState = t.memoizedState),
		(n.updateQueue = t.updateQueue),
		(e = t.dependencies),
		(n.dependencies =
			e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
		(n.sibling = t.sibling),
		(n.index = t.index),
		(n.ref = t.ref),
		n
	)
}
function hs(t, e, n, r, i, s) {
	var o = 2
	if (((r = t), typeof t == 'function')) _u(t) && (o = 1)
	else if (typeof t == 'string') o = 5
	else
		e: switch (t) {
			case Pn:
				return fn(n.children, i, s, e)
			case La:
				;(o = 8), (i |= 8)
				break
			case _l:
				return (t = be(12, n, e, i | 2)), (t.elementType = _l), (t.lanes = s), t
			case yl:
				return (t = be(13, n, e, i)), (t.elementType = yl), (t.lanes = s), t
			case vl:
				return (t = be(19, n, e, i)), (t.elementType = vl), (t.lanes = s), t
			case Nf:
				return fo(n, i, s, e)
			default:
				if (typeof t == 'object' && t !== null)
					switch (t.$$typeof) {
						case Tf:
							o = 10
							break e
						case If:
							o = 9
							break e
						case Fa:
							o = 11
							break e
						case za:
							o = 14
							break e
						case Rt:
							;(o = 16), (r = null)
							break e
					}
				throw Error(C(130, t == null ? t : typeof t, ''))
		}
	return (
		(e = be(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e
	)
}
function fn(t, e, n, r) {
	return (t = be(7, t, r, e)), (t.lanes = n), t
}
function fo(t, e, n, r) {
	return (
		(t = be(22, t, r, e)),
		(t.elementType = Nf),
		(t.lanes = n),
		(t.stateNode = { isHidden: !1 }),
		t
	)
}
function nl(t, e, n) {
	return (t = be(6, t, null, e)), (t.lanes = n), t
}
function rl(t, e, n) {
	return (
		(e = be(4, t.children !== null ? t.children : [], t.key, e)),
		(e.lanes = n),
		(e.stateNode = {
			containerInfo: t.containerInfo,
			pendingChildren: null,
			implementation: t.implementation
		}),
		e
	)
}
function Ry(t, e, n, r, i) {
	;(this.tag = e),
		(this.containerInfo = t),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = zo(0)),
		(this.expirationTimes = zo(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = zo(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null)
}
function yu(t, e, n, r, i, s, o, l, a) {
	return (
		(t = new Ry(t, e, n, l, a)),
		e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
		(s = be(3, null, null, e)),
		(t.current = s),
		(s.stateNode = t),
		(s.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		}),
		tu(s),
		t
	)
}
function Py(t, e, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
	return {
		$$typeof: Rn,
		key: r == null ? null : '' + r,
		children: t,
		containerInfo: e,
		implementation: n
	}
}
function vp(t) {
	if (!t) return Gt
	t = t._reactInternals
	e: {
		if (Tn(t) !== t || t.tag !== 1) throw Error(C(170))
		var e = t
		do {
			switch (e.tag) {
				case 3:
					e = e.stateNode.context
					break e
				case 1:
					if (Oe(e.type)) {
						e = e.stateNode.__reactInternalMemoizedMergedChildContext
						break e
					}
			}
			e = e.return
		} while (e !== null)
		throw Error(C(171))
	}
	if (t.tag === 1) {
		var n = t.type
		if (Oe(n)) return yh(t, n, e)
	}
	return e
}
function Cp(t, e, n, r, i, s, o, l, a) {
	return (
		(t = yu(n, r, !0, t, i, s, o, l, a)),
		(t.context = vp(null)),
		(n = t.current),
		(r = ke()),
		(i = Wt(n)),
		(s = _t(r, i)),
		(s.callback = e ?? null),
		jt(n, s, i),
		(t.current.lanes = i),
		Ti(t, i, r),
		Ae(t, r),
		t
	)
}
function ho(t, e, n, r) {
	var i = e.current,
		s = ke(),
		o = Wt(i)
	return (
		(n = vp(n)),
		e.context === null ? (e.context = n) : (e.pendingContext = n),
		(e = _t(s, o)),
		(e.payload = { element: t }),
		(r = r === void 0 ? null : r),
		r !== null && (e.callback = r),
		(t = jt(i, e, o)),
		t !== null && (it(t, i, o, s), ls(t, i, o)),
		o
	)
}
function zs(t) {
	if (((t = t.current), !t.child)) return null
	switch (t.child.tag) {
		case 5:
			return t.child.stateNode
		default:
			return t.child.stateNode
	}
}
function pd(t, e) {
	if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
		var n = t.retryLane
		t.retryLane = n !== 0 && n < e ? n : e
	}
}
function vu(t, e) {
	pd(t, e), (t = t.alternate) && pd(t, e)
}
function Dy() {
	return null
}
var wp =
	typeof reportError == 'function'
		? reportError
		: function (t) {
				console.error(t)
		  }
function Cu(t) {
	this._internalRoot = t
}
po.prototype.render = Cu.prototype.render = function (t) {
	var e = this._internalRoot
	if (e === null) throw Error(C(409))
	ho(t, e, null, null)
}
po.prototype.unmount = Cu.prototype.unmount = function () {
	var t = this._internalRoot
	if (t !== null) {
		this._internalRoot = null
		var e = t.containerInfo
		yn(function () {
			ho(null, t, null, null)
		}),
			(e[Ct] = null)
	}
}
function po(t) {
	this._internalRoot = t
}
po.prototype.unstable_scheduleHydration = function (t) {
	if (t) {
		var e = Xf()
		t = { blockedOn: null, target: t, priority: e }
		for (var n = 0; n < Dt.length && e !== 0 && e < Dt[n].priority; n++);
		Dt.splice(n, 0, t), n === 0 && Zf(t)
	}
}
function wu(t) {
	return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
}
function mo(t) {
	return !(
		!t ||
		(t.nodeType !== 1 &&
			t.nodeType !== 9 &&
			t.nodeType !== 11 &&
			(t.nodeType !== 8 || t.nodeValue !== ' react-mount-point-unstable '))
	)
}
function md() {}
function Oy(t, e, n, r, i) {
	if (i) {
		if (typeof r == 'function') {
			var s = r
			r = function () {
				var u = zs(o)
				s.call(u)
			}
		}
		var o = Cp(e, r, t, 0, null, !1, !1, '', md)
		return (
			(t._reactRootContainer = o),
			(t[Ct] = o.current),
			ii(t.nodeType === 8 ? t.parentNode : t),
			yn(),
			o
		)
	}
	for (; (i = t.lastChild); ) t.removeChild(i)
	if (typeof r == 'function') {
		var l = r
		r = function () {
			var u = zs(a)
			l.call(u)
		}
	}
	var a = yu(t, 0, !1, null, null, !1, !1, '', md)
	return (
		(t._reactRootContainer = a),
		(t[Ct] = a.current),
		ii(t.nodeType === 8 ? t.parentNode : t),
		yn(function () {
			ho(e, a, n, r)
		}),
		a
	)
}
function go(t, e, n, r, i) {
	var s = n._reactRootContainer
	if (s) {
		var o = s
		if (typeof i == 'function') {
			var l = i
			i = function () {
				var a = zs(o)
				l.call(a)
			}
		}
		ho(e, o, t, i)
	} else o = Oy(n, e, t, i, r)
	return zs(o)
}
Yf = function (t) {
	switch (t.tag) {
		case 3:
			var e = t.stateNode
			if (e.current.memoizedState.isDehydrated) {
				var n = Lr(e.pendingLanes)
				n !== 0 &&
					(Ba(e, n | 1), Ae(e, re()), !(z & 6) && ((sr = re() + 500), Jt()))
			}
			break
		case 13:
			yn(function () {
				var r = wt(t, 1)
				if (r !== null) {
					var i = ke()
					it(r, t, 1, i)
				}
			}),
				vu(t, 1)
	}
}
Wa = function (t) {
	if (t.tag === 13) {
		var e = wt(t, 134217728)
		if (e !== null) {
			var n = ke()
			it(e, t, 134217728, n)
		}
		vu(t, 134217728)
	}
}
qf = function (t) {
	if (t.tag === 13) {
		var e = Wt(t),
			n = wt(t, e)
		if (n !== null) {
			var r = ke()
			it(n, t, e, r)
		}
		vu(t, e)
	}
}
Xf = function () {
	return B
}
Jf = function (t, e) {
	var n = B
	try {
		return (B = t), e()
	} finally {
		B = n
	}
}
Rl = function (t, e, n) {
	switch (e) {
		case 'input':
			if ((El(t, n), (e = n.name), n.type === 'radio' && e != null)) {
				for (n = t; n.parentNode; ) n = n.parentNode
				for (
					n = n.querySelectorAll(
						'input[name=' + JSON.stringify('' + e) + '][type="radio"]'
					),
						e = 0;
					e < n.length;
					e++
				) {
					var r = n[e]
					if (r !== t && r.form === t.form) {
						var i = so(r)
						if (!i) throw Error(C(90))
						Rf(r), El(r, i)
					}
				}
			}
			break
		case 'textarea':
			Df(t, n)
			break
		case 'select':
			;(e = n.value), e != null && Vn(t, !!n.multiple, e, !1)
	}
}
Uf = pu
jf = yn
var Ay = { usingClientEntryPoint: !1, Events: [Ni, Mn, so, Ff, zf, pu] },
	xr = {
		findFiberByHostInstance: on,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom'
	},
	My = {
		bundleType: xr.bundleType,
		version: xr.version,
		rendererPackageName: xr.rendererPackageName,
		rendererConfig: xr.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: Tt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (t) {
			return (t = Vf(t)), t === null ? null : t.stateNode
		},
		findFiberByHostInstance: xr.findFiberByHostInstance || Dy,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
	}
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var Zi = __REACT_DEVTOOLS_GLOBAL_HOOK__
	if (!Zi.isDisabled && Zi.supportsFiber)
		try {
			;(to = Zi.inject(My)), (ct = Zi)
		} catch {}
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ay
Be.createPortal = function (t, e) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
	if (!wu(e)) throw Error(C(200))
	return Py(t, e, null, n)
}
Be.createRoot = function (t, e) {
	if (!wu(t)) throw Error(C(299))
	var n = !1,
		r = '',
		i = wp
	return (
		e != null &&
			(e.unstable_strictMode === !0 && (n = !0),
			e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
			e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
		(e = yu(t, 1, !1, null, null, n, !1, r, i)),
		(t[Ct] = e.current),
		ii(t.nodeType === 8 ? t.parentNode : t),
		new Cu(e)
	)
}
Be.findDOMNode = function (t) {
	if (t == null) return null
	if (t.nodeType === 1) return t
	var e = t._reactInternals
	if (e === void 0)
		throw typeof t.render == 'function'
			? Error(C(188))
			: ((t = Object.keys(t).join(',')), Error(C(268, t)))
	return (t = Vf(e)), (t = t === null ? null : t.stateNode), t
}
Be.flushSync = function (t) {
	return yn(t)
}
Be.hydrate = function (t, e, n) {
	if (!mo(e)) throw Error(C(200))
	return go(null, t, e, !0, n)
}
Be.hydrateRoot = function (t, e, n) {
	if (!wu(t)) throw Error(C(405))
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		s = '',
		o = wp
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
		(e = Cp(e, null, t, 1, n ?? null, i, !1, s, o)),
		(t[Ct] = e.current),
		ii(t),
		r)
	)
		for (t = 0; t < r.length; t++)
			(n = r[t]),
				(i = n._getVersion),
				(i = i(n._source)),
				e.mutableSourceEagerHydrationData == null
					? (e.mutableSourceEagerHydrationData = [n, i])
					: e.mutableSourceEagerHydrationData.push(n, i)
	return new po(e)
}
Be.render = function (t, e, n) {
	if (!mo(e)) throw Error(C(200))
	return go(null, t, e, !1, n)
}
Be.unmountComponentAtNode = function (t) {
	if (!mo(t)) throw Error(C(40))
	return t._reactRootContainer
		? (yn(function () {
				go(null, null, t, !1, function () {
					;(t._reactRootContainer = null), (t[Ct] = null)
				})
		  }),
		  !0)
		: !1
}
Be.unstable_batchedUpdates = pu
Be.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
	if (!mo(n)) throw Error(C(200))
	if (t == null || t._reactInternals === void 0) throw Error(C(38))
	return go(t, e, n, !1, r)
}
Be.version = '18.2.0-next-9e3b772b8-20220608'
function Ep() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ep)
		} catch (t) {
			console.error(t)
		}
}
Ep(), (Cf.exports = Be)
var Ly = Cf.exports,
	gd = Ly
;(ml.createRoot = gd.createRoot), (ml.hydrateRoot = gd.hydrateRoot)
var Sp = { exports: {} },
	Fy = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
	zy = Fy,
	Uy = zy
function kp() {}
function Tp() {}
Tp.resetWarningCache = kp
var jy = function () {
	function t(r, i, s, o, l, a) {
		if (a !== Uy) {
			var u = new Error(
				'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
			)
			throw ((u.name = 'Invariant Violation'), u)
		}
	}
	t.isRequired = t
	function e() {
		return t
	}
	var n = {
		array: t,
		bigint: t,
		bool: t,
		func: t,
		number: t,
		object: t,
		string: t,
		symbol: t,
		any: t,
		arrayOf: e,
		element: t,
		elementType: t,
		instanceOf: e,
		node: t,
		objectOf: e,
		oneOf: e,
		oneOfType: e,
		shape: e,
		exact: e,
		checkPropTypes: Tp,
		resetWarningCache: kp
	}
	return (n.PropTypes = n), n
}
Sp.exports = jy()
var By = Sp.exports
const Y = uf(By),
	hi = ({ children: t, className: e, onClick: n, inputValue: r, todos: i }) =>
		j.jsx('button', {
			disabled: e === 'sort' && Object.keys(i).length < 2,
			className: e,
			onClick: () => n(r),
			children: t
		})
hi.propTypes = {
	children: Y.node,
	className: Y.string,
	onClick: Y.func,
	todos: Y.oneOfType([Y.array, Y.object]),
	inputValue: Y.oneOfType([Y.string, Y.number])
}
const Ip = ({ inputValue: t, setInputValue: e, onClick: n }) =>
	j.jsxs('form', {
		className: 'add_container',
		children: [
			j.jsx('input', {
				value: t,
				type: 'text',
				className: 'add_task',
				placeholder: 'Please enter a task...',
				onChange: (r) => e(r.target.value)
			}),
			j.jsx(hi, {
				className: 'add_button',
				onClick: n,
				inputValue: t,
				children: 'Add task'
			})
		]
	})
Ip.propTypes = { setInputValue: Y.func, onClick: Y.func, inputValue: Y.string }
const Np = ({ isModalOpen: t, setIsModalOpen: e, requestChangeTask: n }) =>
	j.jsx('div', {
		className: 'modal',
		children: j.jsxs('div', {
			className: 'modal-content',
			children: [
				j.jsx('h2', { children: 'Change Task' }),
				j.jsx('textarea', {
					className: 'text_area_task',
					value: t.taskValue,
					onChange: (r) => e({ ...t, taskValue: r.target.value })
				}),
				j.jsx('button', {
					className: 'change_button_area',
					onClick: n,
					children: 'Save changes'
				}),
				j.jsx('button', {
					className: 'close-button',
					onClick: () => e({ ...t, isOpen: !1 }),
					children: 'Close window'
				})
			]
		})
	})
Np.propTypes = {
	isModalOpen: Y.object,
	setIsModalOpen: Y.func,
	requestChangeTask: Y.func
}
const xp = ({ searchValue: t, setSearchValue: e, todos: n }) =>
	j.jsx('form', {
		className: 'search_container',
		children: j.jsx('input', {
			disabled: Object.keys(n).length <= 0,
			value: t,
			type: 'text',
			className: 'search_input',
			placeholder: 'Search task...',
			onChange: (r) => e(r.target.value)
		})
	})
xp.propTypes = {
	searchValue: Y.string,
	setSearchValue: Y.func,
	todos: Y.oneOfType([Y.array, Y.object])
}
const Rp = ({ todo: t, onClickChange: e, onClickDelete: n }) =>
	j.jsxs('div', {
		className: 'todo_container',
		children: [
			j.jsx('p', { children: t[1].title }),
			j.jsxs('div', {
				className: 'button_container',
				children: [
					j.jsx(hi, {
						className: 'change_button',
						onClick: () => e(t[0], t[1].title),
						children: 'Change task'
					}),
					j.jsx(hi, {
						className: 'delete_button',
						onClick: () => n(t[0]),
						inputValue: t[0],
						children: 'Delete task'
					})
				]
			})
		]
	})
Rp.propTypes = { todo: Y.array, onClickChange: Y.func, onClickDelete: Y.func }
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Pp = {
	NODE_CLIENT: !1,
	NODE_ADMIN: !1,
	SDK_VERSION: '${JSCORE_VERSION}'
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const w = function (t, e) {
		if (!t) throw pr(e)
	},
	pr = function (t) {
		return new Error(
			'Firebase Database (' + Pp.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + t
		)
	}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Dp = function (t) {
		const e = []
		let n = 0
		for (let r = 0; r < t.length; r++) {
			let i = t.charCodeAt(r)
			i < 128
				? (e[n++] = i)
				: i < 2048
				? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
				: (i & 64512) === 55296 &&
				  r + 1 < t.length &&
				  (t.charCodeAt(r + 1) & 64512) === 56320
				? ((i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023)),
				  (e[n++] = (i >> 18) | 240),
				  (e[n++] = ((i >> 12) & 63) | 128),
				  (e[n++] = ((i >> 6) & 63) | 128),
				  (e[n++] = (i & 63) | 128))
				: ((e[n++] = (i >> 12) | 224),
				  (e[n++] = ((i >> 6) & 63) | 128),
				  (e[n++] = (i & 63) | 128))
		}
		return e
	},
	Wy = function (t) {
		const e = []
		let n = 0,
			r = 0
		for (; n < t.length; ) {
			const i = t[n++]
			if (i < 128) e[r++] = String.fromCharCode(i)
			else if (i > 191 && i < 224) {
				const s = t[n++]
				e[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63))
			} else if (i > 239 && i < 365) {
				const s = t[n++],
					o = t[n++],
					l = t[n++],
					a =
						(((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (l & 63)) -
						65536
				;(e[r++] = String.fromCharCode(55296 + (a >> 10))),
					(e[r++] = String.fromCharCode(56320 + (a & 1023)))
			} else {
				const s = t[n++],
					o = t[n++]
				e[r++] = String.fromCharCode(
					((i & 15) << 12) | ((s & 63) << 6) | (o & 63)
				)
			}
		}
		return e.join('')
	},
	Eu = {
		byteToCharMap_: null,
		charToByteMap_: null,
		byteToCharMapWebSafe_: null,
		charToByteMapWebSafe_: null,
		ENCODED_VALS_BASE:
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
		get ENCODED_VALS() {
			return this.ENCODED_VALS_BASE + '+/='
		},
		get ENCODED_VALS_WEBSAFE() {
			return this.ENCODED_VALS_BASE + '-_.'
		},
		HAS_NATIVE_SUPPORT: typeof atob == 'function',
		encodeByteArray(t, e) {
			if (!Array.isArray(t))
				throw Error('encodeByteArray takes an array as a parameter')
			this.init_()
			const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
				r = []
			for (let i = 0; i < t.length; i += 3) {
				const s = t[i],
					o = i + 1 < t.length,
					l = o ? t[i + 1] : 0,
					a = i + 2 < t.length,
					u = a ? t[i + 2] : 0,
					f = s >> 2,
					c = ((s & 3) << 4) | (l >> 4)
				let d = ((l & 15) << 2) | (u >> 6),
					g = u & 63
				a || ((g = 64), o || (d = 64)), r.push(n[f], n[c], n[d], n[g])
			}
			return r.join('')
		},
		encodeString(t, e) {
			return this.HAS_NATIVE_SUPPORT && !e
				? btoa(t)
				: this.encodeByteArray(Dp(t), e)
		},
		decodeString(t, e) {
			return this.HAS_NATIVE_SUPPORT && !e
				? atob(t)
				: Wy(this.decodeStringToByteArray(t, e))
		},
		decodeStringToByteArray(t, e) {
			this.init_()
			const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
				r = []
			for (let i = 0; i < t.length; ) {
				const s = n[t.charAt(i++)],
					l = i < t.length ? n[t.charAt(i)] : 0
				++i
				const u = i < t.length ? n[t.charAt(i)] : 64
				++i
				const c = i < t.length ? n[t.charAt(i)] : 64
				if ((++i, s == null || l == null || u == null || c == null))
					throw new Vy()
				const d = (s << 2) | (l >> 4)
				if ((r.push(d), u !== 64)) {
					const g = ((l << 4) & 240) | (u >> 2)
					if ((r.push(g), c !== 64)) {
						const _ = ((u << 6) & 192) | c
						r.push(_)
					}
				}
			}
			return r
		},
		init_() {
			if (!this.byteToCharMap_) {
				;(this.byteToCharMap_ = {}),
					(this.charToByteMap_ = {}),
					(this.byteToCharMapWebSafe_ = {}),
					(this.charToByteMapWebSafe_ = {})
				for (let t = 0; t < this.ENCODED_VALS.length; t++)
					(this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
						(this.charToByteMap_[this.byteToCharMap_[t]] = t),
						(this.byteToCharMapWebSafe_[t] =
							this.ENCODED_VALS_WEBSAFE.charAt(t)),
						(this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
						t >= this.ENCODED_VALS_BASE.length &&
							((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
							(this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t))
			}
		}
	}
class Vy extends Error {
	constructor() {
		super(...arguments), (this.name = 'DecodeBase64StringError')
	}
}
const Op = function (t) {
		const e = Dp(t)
		return Eu.encodeByteArray(e, !0)
	},
	Us = function (t) {
		return Op(t).replace(/\./g, '')
	},
	aa = function (t) {
		try {
			return Eu.decodeString(t, !0)
		} catch (e) {
			console.error('base64Decode failed: ', e)
		}
		return null
	}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Hy(t) {
	return Ap(void 0, t)
}
function Ap(t, e) {
	if (!(e instanceof Object)) return e
	switch (e.constructor) {
		case Date:
			const n = e
			return new Date(n.getTime())
		case Object:
			t === void 0 && (t = {})
			break
		case Array:
			t = []
			break
		default:
			return e
	}
	for (const n in e) !e.hasOwnProperty(n) || !$y(n) || (t[n] = Ap(t[n], e[n]))
	return t
}
function $y(t) {
	return t !== '__proto__'
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function by() {
	if (typeof self < 'u') return self
	if (typeof window < 'u') return window
	if (typeof global < 'u') return global
	throw new Error('Unable to locate global object.')
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qy = () => by().__FIREBASE_DEFAULTS__,
	Gy = () => {
		if (typeof process > 'u' || typeof process.env > 'u') return
		const t = {}.__FIREBASE_DEFAULTS__
		if (t) return JSON.parse(t)
	},
	Ky = () => {
		if (typeof document > 'u') return
		let t
		try {
			t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
		} catch {
			return
		}
		const e = t && aa(t[1])
		return e && JSON.parse(e)
	},
	Mp = () => {
		try {
			return Qy() || Gy() || Ky()
		} catch (t) {
			console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)
			return
		}
	},
	Yy = (t) => {
		var e, n
		return (n =
			(e = Mp()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
			null || n === void 0
			? void 0
			: n[t]
	},
	qy = (t) => {
		const e = Yy(t)
		if (!e) return
		const n = e.lastIndexOf(':')
		if (n <= 0 || n + 1 === e.length)
			throw new Error(`Invalid host ${e} with no separate hostname and port!`)
		const r = parseInt(e.substring(n + 1), 10)
		return e[0] === '[' ? [e.substring(1, n - 1), r] : [e.substring(0, n), r]
	},
	Lp = () => {
		var t
		return (t = Mp()) === null || t === void 0 ? void 0 : t.config
	}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _o {
	constructor() {
		;(this.reject = () => {}),
			(this.resolve = () => {}),
			(this.promise = new Promise((e, n) => {
				;(this.resolve = e), (this.reject = n)
			}))
	}
	wrapCallback(e) {
		return (n, r) => {
			n ? this.reject(n) : this.resolve(r),
				typeof e == 'function' &&
					(this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r))
		}
	}
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Xy(t, e) {
	if (t.uid)
		throw new Error(
			'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
		)
	const n = { alg: 'none', type: 'JWT' },
		r = e || 'demo-project',
		i = t.iat || 0,
		s = t.sub || t.user_id
	if (!s)
		throw new Error("mockUserToken must contain 'sub' or 'user_id' field!")
	const o = Object.assign(
			{
				iss: `https://securetoken.google.com/${r}`,
				aud: r,
				iat: i,
				exp: i + 3600,
				auth_time: i,
				sub: s,
				user_id: s,
				firebase: { sign_in_provider: 'custom', identities: {} }
			},
			t
		),
		l = ''
	return [Us(JSON.stringify(n)), Us(JSON.stringify(o)), l].join('.')
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Jy() {
	return typeof navigator < 'u' && typeof navigator.userAgent == 'string'
		? navigator.userAgent
		: ''
}
function Fp() {
	return (
		typeof window < 'u' &&
		!!(window.cordova || window.phonegap || window.PhoneGap) &&
		/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Jy())
	)
}
function Zy() {
	return typeof navigator == 'object' && navigator.product === 'ReactNative'
}
function zp() {
	return Pp.NODE_ADMIN === !0
}
function ev() {
	try {
		return typeof indexedDB == 'object'
	} catch {
		return !1
	}
}
function tv() {
	return new Promise((t, e) => {
		try {
			let n = !0
			const r = 'validate-browser-context-for-indexeddb-analytics-module',
				i = self.indexedDB.open(r)
			;(i.onsuccess = () => {
				i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0)
			}),
				(i.onupgradeneeded = () => {
					n = !1
				}),
				(i.onerror = () => {
					var s
					e(((s = i.error) === null || s === void 0 ? void 0 : s.message) || '')
				})
		} catch (n) {
			e(n)
		}
	})
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nv = 'FirebaseError'
class Ri extends Error {
	constructor(e, n, r) {
		super(n),
			(this.code = e),
			(this.customData = r),
			(this.name = nv),
			Object.setPrototypeOf(this, Ri.prototype),
			Error.captureStackTrace &&
				Error.captureStackTrace(this, Up.prototype.create)
	}
}
class Up {
	constructor(e, n, r) {
		;(this.service = e), (this.serviceName = n), (this.errors = r)
	}
	create(e, ...n) {
		const r = n[0] || {},
			i = `${this.service}/${e}`,
			s = this.errors[e],
			o = s ? rv(s, r) : 'Error',
			l = `${this.serviceName}: ${o} (${i}).`
		return new Ri(i, l, r)
	}
}
function rv(t, e) {
	return t.replace(iv, (n, r) => {
		const i = e[r]
		return i != null ? String(i) : `<${r}?>`
	})
}
const iv = /\{\$([^}]+)}/g
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pi(t) {
	return JSON.parse(t)
}
function fe(t) {
	return JSON.stringify(t)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const jp = function (t) {
		let e = {},
			n = {},
			r = {},
			i = ''
		try {
			const s = t.split('.')
			;(e = pi(aa(s[0]) || '')),
				(n = pi(aa(s[1]) || '')),
				(i = s[2]),
				(r = n.d || {}),
				delete n.d
		} catch {}
		return { header: e, claims: n, data: r, signature: i }
	},
	sv = function (t) {
		const e = jp(t),
			n = e.claims
		return !!n && typeof n == 'object' && n.hasOwnProperty('iat')
	},
	ov = function (t) {
		const e = jp(t).claims
		return typeof e == 'object' && e.admin === !0
	}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function It(t, e) {
	return Object.prototype.hasOwnProperty.call(t, e)
}
function or(t, e) {
	if (Object.prototype.hasOwnProperty.call(t, e)) return t[e]
}
function _d(t) {
	for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1
	return !0
}
function js(t, e, n) {
	const r = {}
	for (const i in t)
		Object.prototype.hasOwnProperty.call(t, i) && (r[i] = e.call(n, t[i], i, t))
	return r
}
function ua(t, e) {
	if (t === e) return !0
	const n = Object.keys(t),
		r = Object.keys(e)
	for (const i of n) {
		if (!r.includes(i)) return !1
		const s = t[i],
			o = e[i]
		if (yd(s) && yd(o)) {
			if (!ua(s, o)) return !1
		} else if (s !== o) return !1
	}
	for (const i of r) if (!n.includes(i)) return !1
	return !0
}
function yd(t) {
	return t !== null && typeof t == 'object'
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function lv(t) {
	const e = []
	for (const [n, r] of Object.entries(t))
		Array.isArray(r)
			? r.forEach((i) => {
					e.push(encodeURIComponent(n) + '=' + encodeURIComponent(i))
			  })
			: e.push(encodeURIComponent(n) + '=' + encodeURIComponent(r))
	return e.length ? '&' + e.join('&') : ''
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class av {
	constructor() {
		;(this.chain_ = []),
			(this.buf_ = []),
			(this.W_ = []),
			(this.pad_ = []),
			(this.inbuf_ = 0),
			(this.total_ = 0),
			(this.blockSize = 512 / 8),
			(this.pad_[0] = 128)
		for (let e = 1; e < this.blockSize; ++e) this.pad_[e] = 0
		this.reset()
	}
	reset() {
		;(this.chain_[0] = 1732584193),
			(this.chain_[1] = 4023233417),
			(this.chain_[2] = 2562383102),
			(this.chain_[3] = 271733878),
			(this.chain_[4] = 3285377520),
			(this.inbuf_ = 0),
			(this.total_ = 0)
	}
	compress_(e, n) {
		n || (n = 0)
		const r = this.W_
		if (typeof e == 'string')
			for (let c = 0; c < 16; c++)
				(r[c] =
					(e.charCodeAt(n) << 24) |
					(e.charCodeAt(n + 1) << 16) |
					(e.charCodeAt(n + 2) << 8) |
					e.charCodeAt(n + 3)),
					(n += 4)
		else
			for (let c = 0; c < 16; c++)
				(r[c] = (e[n] << 24) | (e[n + 1] << 16) | (e[n + 2] << 8) | e[n + 3]),
					(n += 4)
		for (let c = 16; c < 80; c++) {
			const d = r[c - 3] ^ r[c - 8] ^ r[c - 14] ^ r[c - 16]
			r[c] = ((d << 1) | (d >>> 31)) & 4294967295
		}
		let i = this.chain_[0],
			s = this.chain_[1],
			o = this.chain_[2],
			l = this.chain_[3],
			a = this.chain_[4],
			u,
			f
		for (let c = 0; c < 80; c++) {
			c < 40
				? c < 20
					? ((u = l ^ (s & (o ^ l))), (f = 1518500249))
					: ((u = s ^ o ^ l), (f = 1859775393))
				: c < 60
				? ((u = (s & o) | (l & (s | o))), (f = 2400959708))
				: ((u = s ^ o ^ l), (f = 3395469782))
			const d = (((i << 5) | (i >>> 27)) + u + a + f + r[c]) & 4294967295
			;(a = l),
				(l = o),
				(o = ((s << 30) | (s >>> 2)) & 4294967295),
				(s = i),
				(i = d)
		}
		;(this.chain_[0] = (this.chain_[0] + i) & 4294967295),
			(this.chain_[1] = (this.chain_[1] + s) & 4294967295),
			(this.chain_[2] = (this.chain_[2] + o) & 4294967295),
			(this.chain_[3] = (this.chain_[3] + l) & 4294967295),
			(this.chain_[4] = (this.chain_[4] + a) & 4294967295)
	}
	update(e, n) {
		if (e == null) return
		n === void 0 && (n = e.length)
		const r = n - this.blockSize
		let i = 0
		const s = this.buf_
		let o = this.inbuf_
		for (; i < n; ) {
			if (o === 0) for (; i <= r; ) this.compress_(e, i), (i += this.blockSize)
			if (typeof e == 'string') {
				for (; i < n; )
					if (((s[o] = e.charCodeAt(i)), ++o, ++i, o === this.blockSize)) {
						this.compress_(s), (o = 0)
						break
					}
			} else
				for (; i < n; )
					if (((s[o] = e[i]), ++o, ++i, o === this.blockSize)) {
						this.compress_(s), (o = 0)
						break
					}
		}
		;(this.inbuf_ = o), (this.total_ += n)
	}
	digest() {
		const e = []
		let n = this.total_ * 8
		this.inbuf_ < 56
			? this.update(this.pad_, 56 - this.inbuf_)
			: this.update(this.pad_, this.blockSize - (this.inbuf_ - 56))
		for (let i = this.blockSize - 1; i >= 56; i--)
			(this.buf_[i] = n & 255), (n /= 256)
		this.compress_(this.buf_)
		let r = 0
		for (let i = 0; i < 5; i++)
			for (let s = 24; s >= 0; s -= 8) (e[r] = (this.chain_[i] >> s) & 255), ++r
		return e
	}
}
function Su(t, e) {
	return `${t} failed: ${e} argument `
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const uv = function (t) {
		const e = []
		let n = 0
		for (let r = 0; r < t.length; r++) {
			let i = t.charCodeAt(r)
			if (i >= 55296 && i <= 56319) {
				const s = i - 55296
				r++, w(r < t.length, 'Surrogate pair missing trail surrogate.')
				const o = t.charCodeAt(r) - 56320
				i = 65536 + (s << 10) + o
			}
			i < 128
				? (e[n++] = i)
				: i < 2048
				? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
				: i < 65536
				? ((e[n++] = (i >> 12) | 224),
				  (e[n++] = ((i >> 6) & 63) | 128),
				  (e[n++] = (i & 63) | 128))
				: ((e[n++] = (i >> 18) | 240),
				  (e[n++] = ((i >> 12) & 63) | 128),
				  (e[n++] = ((i >> 6) & 63) | 128),
				  (e[n++] = (i & 63) | 128))
		}
		return e
	},
	yo = function (t) {
		let e = 0
		for (let n = 0; n < t.length; n++) {
			const r = t.charCodeAt(n)
			r < 128
				? e++
				: r < 2048
				? (e += 2)
				: r >= 55296 && r <= 56319
				? ((e += 4), n++)
				: (e += 3)
		}
		return e
	}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function mr(t) {
	return t && t._delegate ? t._delegate : t
}
class mi {
	constructor(e, n, r) {
		;(this.name = e),
			(this.instanceFactory = n),
			(this.type = r),
			(this.multipleInstances = !1),
			(this.serviceProps = {}),
			(this.instantiationMode = 'LAZY'),
			(this.onInstanceCreated = null)
	}
	setInstantiationMode(e) {
		return (this.instantiationMode = e), this
	}
	setMultipleInstances(e) {
		return (this.multipleInstances = e), this
	}
	setServiceProps(e) {
		return (this.serviceProps = e), this
	}
	setInstanceCreatedCallback(e) {
		return (this.onInstanceCreated = e), this
	}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const rn = '[DEFAULT]'
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cv {
	constructor(e, n) {
		;(this.name = e),
			(this.container = n),
			(this.component = null),
			(this.instances = new Map()),
			(this.instancesDeferred = new Map()),
			(this.instancesOptions = new Map()),
			(this.onInitCallbacks = new Map())
	}
	get(e) {
		const n = this.normalizeInstanceIdentifier(e)
		if (!this.instancesDeferred.has(n)) {
			const r = new _o()
			if (
				(this.instancesDeferred.set(n, r),
				this.isInitialized(n) || this.shouldAutoInitialize())
			)
				try {
					const i = this.getOrInitializeService({ instanceIdentifier: n })
					i && r.resolve(i)
				} catch {}
		}
		return this.instancesDeferred.get(n).promise
	}
	getImmediate(e) {
		var n
		const r = this.normalizeInstanceIdentifier(
				e == null ? void 0 : e.identifier
			),
			i =
				(n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1
		if (this.isInitialized(r) || this.shouldAutoInitialize())
			try {
				return this.getOrInitializeService({ instanceIdentifier: r })
			} catch (s) {
				if (i) return null
				throw s
			}
		else {
			if (i) return null
			throw Error(`Service ${this.name} is not available`)
		}
	}
	getComponent() {
		return this.component
	}
	setComponent(e) {
		if (e.name !== this.name)
			throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`)
		if (this.component)
			throw Error(`Component for ${this.name} has already been provided`)
		if (((this.component = e), !!this.shouldAutoInitialize())) {
			if (fv(e))
				try {
					this.getOrInitializeService({ instanceIdentifier: rn })
				} catch {}
			for (const [n, r] of this.instancesDeferred.entries()) {
				const i = this.normalizeInstanceIdentifier(n)
				try {
					const s = this.getOrInitializeService({ instanceIdentifier: i })
					r.resolve(s)
				} catch {}
			}
		}
	}
	clearInstance(e = rn) {
		this.instancesDeferred.delete(e),
			this.instancesOptions.delete(e),
			this.instances.delete(e)
	}
	async delete() {
		const e = Array.from(this.instances.values())
		await Promise.all([
			...e.filter((n) => 'INTERNAL' in n).map((n) => n.INTERNAL.delete()),
			...e.filter((n) => '_delete' in n).map((n) => n._delete())
		])
	}
	isComponentSet() {
		return this.component != null
	}
	isInitialized(e = rn) {
		return this.instances.has(e)
	}
	getOptions(e = rn) {
		return this.instancesOptions.get(e) || {}
	}
	initialize(e = {}) {
		const { options: n = {} } = e,
			r = this.normalizeInstanceIdentifier(e.instanceIdentifier)
		if (this.isInitialized(r))
			throw Error(`${this.name}(${r}) has already been initialized`)
		if (!this.isComponentSet())
			throw Error(`Component ${this.name} has not been registered yet`)
		const i = this.getOrInitializeService({ instanceIdentifier: r, options: n })
		for (const [s, o] of this.instancesDeferred.entries()) {
			const l = this.normalizeInstanceIdentifier(s)
			r === l && o.resolve(i)
		}
		return i
	}
	onInit(e, n) {
		var r
		const i = this.normalizeInstanceIdentifier(n),
			s =
				(r = this.onInitCallbacks.get(i)) !== null && r !== void 0
					? r
					: new Set()
		s.add(e), this.onInitCallbacks.set(i, s)
		const o = this.instances.get(i)
		return (
			o && e(o, i),
			() => {
				s.delete(e)
			}
		)
	}
	invokeOnInitCallbacks(e, n) {
		const r = this.onInitCallbacks.get(n)
		if (r)
			for (const i of r)
				try {
					i(e, n)
				} catch {}
	}
	getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
		let r = this.instances.get(e)
		if (
			!r &&
			this.component &&
			((r = this.component.instanceFactory(this.container, {
				instanceIdentifier: dv(e),
				options: n
			})),
			this.instances.set(e, r),
			this.instancesOptions.set(e, n),
			this.invokeOnInitCallbacks(r, e),
			this.component.onInstanceCreated)
		)
			try {
				this.component.onInstanceCreated(this.container, e, r)
			} catch {}
		return r || null
	}
	normalizeInstanceIdentifier(e = rn) {
		return this.component ? (this.component.multipleInstances ? e : rn) : e
	}
	shouldAutoInitialize() {
		return !!this.component && this.component.instantiationMode !== 'EXPLICIT'
	}
}
function dv(t) {
	return t === rn ? void 0 : t
}
function fv(t) {
	return t.instantiationMode === 'EAGER'
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hv {
	constructor(e) {
		;(this.name = e), (this.providers = new Map())
	}
	addComponent(e) {
		const n = this.getProvider(e.name)
		if (n.isComponentSet())
			throw new Error(
				`Component ${e.name} has already been registered with ${this.name}`
			)
		n.setComponent(e)
	}
	addOrOverwriteComponent(e) {
		this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
			this.addComponent(e)
	}
	getProvider(e) {
		if (this.providers.has(e)) return this.providers.get(e)
		const n = new cv(e, this)
		return this.providers.set(e, n), n
	}
	getProviders() {
		return Array.from(this.providers.values())
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var V
;(function (t) {
	;(t[(t.DEBUG = 0)] = 'DEBUG'),
		(t[(t.VERBOSE = 1)] = 'VERBOSE'),
		(t[(t.INFO = 2)] = 'INFO'),
		(t[(t.WARN = 3)] = 'WARN'),
		(t[(t.ERROR = 4)] = 'ERROR'),
		(t[(t.SILENT = 5)] = 'SILENT')
})(V || (V = {}))
const pv = {
		debug: V.DEBUG,
		verbose: V.VERBOSE,
		info: V.INFO,
		warn: V.WARN,
		error: V.ERROR,
		silent: V.SILENT
	},
	mv = V.INFO,
	gv = {
		[V.DEBUG]: 'log',
		[V.VERBOSE]: 'log',
		[V.INFO]: 'info',
		[V.WARN]: 'warn',
		[V.ERROR]: 'error'
	},
	_v = (t, e, ...n) => {
		if (e < t.logLevel) return
		const r = new Date().toISOString(),
			i = gv[e]
		if (i) console[i](`[${r}]  ${t.name}:`, ...n)
		else
			throw new Error(
				`Attempted to log a message with an invalid logType (value: ${e})`
			)
	}
class Bp {
	constructor(e) {
		;(this.name = e),
			(this._logLevel = mv),
			(this._logHandler = _v),
			(this._userLogHandler = null)
	}
	get logLevel() {
		return this._logLevel
	}
	set logLevel(e) {
		if (!(e in V))
			throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``)
		this._logLevel = e
	}
	setLogLevel(e) {
		this._logLevel = typeof e == 'string' ? pv[e] : e
	}
	get logHandler() {
		return this._logHandler
	}
	set logHandler(e) {
		if (typeof e != 'function')
			throw new TypeError('Value assigned to `logHandler` must be a function')
		this._logHandler = e
	}
	get userLogHandler() {
		return this._userLogHandler
	}
	set userLogHandler(e) {
		this._userLogHandler = e
	}
	debug(...e) {
		this._userLogHandler && this._userLogHandler(this, V.DEBUG, ...e),
			this._logHandler(this, V.DEBUG, ...e)
	}
	log(...e) {
		this._userLogHandler && this._userLogHandler(this, V.VERBOSE, ...e),
			this._logHandler(this, V.VERBOSE, ...e)
	}
	info(...e) {
		this._userLogHandler && this._userLogHandler(this, V.INFO, ...e),
			this._logHandler(this, V.INFO, ...e)
	}
	warn(...e) {
		this._userLogHandler && this._userLogHandler(this, V.WARN, ...e),
			this._logHandler(this, V.WARN, ...e)
	}
	error(...e) {
		this._userLogHandler && this._userLogHandler(this, V.ERROR, ...e),
			this._logHandler(this, V.ERROR, ...e)
	}
}
const yv = (t, e) => e.some((n) => t instanceof n)
let vd, Cd
function vv() {
	return (
		vd ||
		(vd = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
	)
}
function Cv() {
	return (
		Cd ||
		(Cd = [
			IDBCursor.prototype.advance,
			IDBCursor.prototype.continue,
			IDBCursor.prototype.continuePrimaryKey
		])
	)
}
const Wp = new WeakMap(),
	ca = new WeakMap(),
	Vp = new WeakMap(),
	il = new WeakMap(),
	ku = new WeakMap()
function wv(t) {
	const e = new Promise((n, r) => {
		const i = () => {
				t.removeEventListener('success', s), t.removeEventListener('error', o)
			},
			s = () => {
				n(Ht(t.result)), i()
			},
			o = () => {
				r(t.error), i()
			}
		t.addEventListener('success', s), t.addEventListener('error', o)
	})
	return (
		e
			.then((n) => {
				n instanceof IDBCursor && Wp.set(n, t)
			})
			.catch(() => {}),
		ku.set(e, t),
		e
	)
}
function Ev(t) {
	if (ca.has(t)) return
	const e = new Promise((n, r) => {
		const i = () => {
				t.removeEventListener('complete', s),
					t.removeEventListener('error', o),
					t.removeEventListener('abort', o)
			},
			s = () => {
				n(), i()
			},
			o = () => {
				r(t.error || new DOMException('AbortError', 'AbortError')), i()
			}
		t.addEventListener('complete', s),
			t.addEventListener('error', o),
			t.addEventListener('abort', o)
	})
	ca.set(t, e)
}
let da = {
	get(t, e, n) {
		if (t instanceof IDBTransaction) {
			if (e === 'done') return ca.get(t)
			if (e === 'objectStoreNames') return t.objectStoreNames || Vp.get(t)
			if (e === 'store')
				return n.objectStoreNames[1]
					? void 0
					: n.objectStore(n.objectStoreNames[0])
		}
		return Ht(t[e])
	},
	set(t, e, n) {
		return (t[e] = n), !0
	},
	has(t, e) {
		return t instanceof IDBTransaction && (e === 'done' || e === 'store')
			? !0
			: e in t
	}
}
function Sv(t) {
	da = t(da)
}
function kv(t) {
	return t === IDBDatabase.prototype.transaction &&
		!('objectStoreNames' in IDBTransaction.prototype)
		? function (e, ...n) {
				const r = t.call(sl(this), e, ...n)
				return Vp.set(r, e.sort ? e.sort() : [e]), Ht(r)
		  }
		: Cv().includes(t)
		? function (...e) {
				return t.apply(sl(this), e), Ht(Wp.get(this))
		  }
		: function (...e) {
				return Ht(t.apply(sl(this), e))
		  }
}
function Tv(t) {
	return typeof t == 'function'
		? kv(t)
		: (t instanceof IDBTransaction && Ev(t), yv(t, vv()) ? new Proxy(t, da) : t)
}
function Ht(t) {
	if (t instanceof IDBRequest) return wv(t)
	if (il.has(t)) return il.get(t)
	const e = Tv(t)
	return e !== t && (il.set(t, e), ku.set(e, t)), e
}
const sl = (t) => ku.get(t)
function Iv(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
	const o = indexedDB.open(t, e),
		l = Ht(o)
	return (
		r &&
			o.addEventListener('upgradeneeded', (a) => {
				r(Ht(o.result), a.oldVersion, a.newVersion, Ht(o.transaction), a)
			}),
		n && o.addEventListener('blocked', (a) => n(a.oldVersion, a.newVersion, a)),
		l
			.then((a) => {
				s && a.addEventListener('close', () => s()),
					i &&
						a.addEventListener('versionchange', (u) =>
							i(u.oldVersion, u.newVersion, u)
						)
			})
			.catch(() => {}),
		l
	)
}
const Nv = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
	xv = ['put', 'add', 'delete', 'clear'],
	ol = new Map()
function wd(t, e) {
	if (!(t instanceof IDBDatabase && !(e in t) && typeof e == 'string')) return
	if (ol.get(e)) return ol.get(e)
	const n = e.replace(/FromIndex$/, ''),
		r = e !== n,
		i = xv.includes(n)
	if (
		!(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
		!(i || Nv.includes(n))
	)
		return
	const s = async function (o, ...l) {
		const a = this.transaction(o, i ? 'readwrite' : 'readonly')
		let u = a.store
		return (
			r && (u = u.index(l.shift())),
			(await Promise.all([u[n](...l), i && a.done]))[0]
		)
	}
	return ol.set(e, s), s
}
Sv((t) => ({
	...t,
	get: (e, n, r) => wd(e, n) || t.get(e, n, r),
	has: (e, n) => !!wd(e, n) || t.has(e, n)
}))
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rv {
	constructor(e) {
		this.container = e
	}
	getPlatformInfoString() {
		return this.container
			.getProviders()
			.map((n) => {
				if (Pv(n)) {
					const r = n.getImmediate()
					return `${r.library}/${r.version}`
				} else return null
			})
			.filter((n) => n)
			.join(' ')
	}
}
function Pv(t) {
	const e = t.getComponent()
	return (e == null ? void 0 : e.type) === 'VERSION'
}
const fa = '@firebase/app',
	Ed = '0.9.20'
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vn = new Bp('@firebase/app'),
	Dv = '@firebase/app-compat',
	Ov = '@firebase/analytics-compat',
	Av = '@firebase/analytics',
	Mv = '@firebase/app-check-compat',
	Lv = '@firebase/app-check',
	Fv = '@firebase/auth',
	zv = '@firebase/auth-compat',
	Uv = '@firebase/database',
	jv = '@firebase/database-compat',
	Bv = '@firebase/utils',
	Wv = '@firebase/utils-compat',
	Vv = '@firebase/installations',
	Hv = '@firebase/installations-compat',
	$v = '@firebase/messaging',
	bv = '@firebase/messaging-compat',
	Qv = '@firebase/performance',
	Gv = '@firebase/performance-compat',
	Kv = '@firebase/remote-config',
	Yv = '@firebase/remote-config-compat',
	qv = '@firebase/storage',
	Xv = '@firebase/storage-compat',
	Jv = '@firebase/firestore',
	Zv = '@firebase/firestore-compat',
	e0 = 'firebase',
	t0 = '10.5.0'
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ha = '[DEFAULT]',
	n0 = {
		[fa]: 'fire-core',
		[Dv]: 'fire-core-compat',
		[Av]: 'fire-analytics',
		[Ov]: 'fire-analytics-compat',
		[Lv]: 'fire-app-check',
		[Mv]: 'fire-app-check-compat',
		[Fv]: 'fire-auth',
		[zv]: 'fire-auth-compat',
		[Uv]: 'fire-rtdb',
		[jv]: 'fire-rtdb-compat',
		[Bv]: 'fire-fn',
		[Wv]: 'fire-fn-compat',
		[Vv]: 'fire-iid',
		[Hv]: 'fire-iid-compat',
		[$v]: 'fire-fcm',
		[bv]: 'fire-fcm-compat',
		[Qv]: 'fire-perf',
		[Gv]: 'fire-perf-compat',
		[Kv]: 'fire-rc',
		[Yv]: 'fire-rc-compat',
		[qv]: 'fire-gcs',
		[Xv]: 'fire-gcs-compat',
		[Jv]: 'fire-fst',
		[Zv]: 'fire-fst-compat',
		'fire-js': 'fire-js',
		[e0]: 'fire-js-all'
	}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Bs = new Map(),
	pa = new Map()
function r0(t, e) {
	try {
		t.container.addComponent(e)
	} catch (n) {
		vn.debug(
			`Component ${e.name} failed to register with FirebaseApp ${t.name}`,
			n
		)
	}
}
function Ws(t) {
	const e = t.name
	if (pa.has(e))
		return (
			vn.debug(`There were multiple attempts to register component ${e}.`), !1
		)
	pa.set(e, t)
	for (const n of Bs.values()) r0(n, t)
	return !0
}
function i0(t, e) {
	const n = t.container.getProvider('heartbeat').getImmediate({ optional: !0 })
	return n && n.triggerHeartbeat(), t.container.getProvider(e)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const s0 = {
		'no-app':
			"No Firebase App '{$appName}' has been created - call initializeApp() first",
		'bad-app-name': "Illegal App name: '{$appName}",
		'duplicate-app':
			"Firebase App named '{$appName}' already exists with different options or config",
		'app-deleted': "Firebase App named '{$appName}' already deleted",
		'no-options':
			'Need to provide options, when not being deployed to hosting via source.',
		'invalid-app-argument':
			'firebase.{$appName}() takes either no argument or a Firebase App instance.',
		'invalid-log-argument':
			'First argument to `onLog` must be null or a function.',
		'idb-open':
			'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
		'idb-get':
			'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
		'idb-set':
			'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
		'idb-delete':
			'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.'
	},
	$t = new Up('app', 'Firebase', s0)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o0 {
	constructor(e, n, r) {
		;(this._isDeleted = !1),
			(this._options = Object.assign({}, e)),
			(this._config = Object.assign({}, n)),
			(this._name = n.name),
			(this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
			(this._container = r),
			this.container.addComponent(new mi('app', () => this, 'PUBLIC'))
	}
	get automaticDataCollectionEnabled() {
		return this.checkDestroyed(), this._automaticDataCollectionEnabled
	}
	set automaticDataCollectionEnabled(e) {
		this.checkDestroyed(), (this._automaticDataCollectionEnabled = e)
	}
	get name() {
		return this.checkDestroyed(), this._name
	}
	get options() {
		return this.checkDestroyed(), this._options
	}
	get config() {
		return this.checkDestroyed(), this._config
	}
	get container() {
		return this._container
	}
	get isDeleted() {
		return this._isDeleted
	}
	set isDeleted(e) {
		this._isDeleted = e
	}
	checkDestroyed() {
		if (this.isDeleted) throw $t.create('app-deleted', { appName: this._name })
	}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const l0 = t0
function Hp(t, e = {}) {
	let n = t
	typeof e != 'object' && (e = { name: e })
	const r = Object.assign({ name: ha, automaticDataCollectionEnabled: !1 }, e),
		i = r.name
	if (typeof i != 'string' || !i)
		throw $t.create('bad-app-name', { appName: String(i) })
	if ((n || (n = Lp()), !n)) throw $t.create('no-options')
	const s = Bs.get(i)
	if (s) {
		if (ua(n, s.options) && ua(r, s.config)) return s
		throw $t.create('duplicate-app', { appName: i })
	}
	const o = new hv(i)
	for (const a of pa.values()) o.addComponent(a)
	const l = new o0(n, r, o)
	return Bs.set(i, l), l
}
function a0(t = ha) {
	const e = Bs.get(t)
	if (!e && t === ha && Lp()) return Hp()
	if (!e) throw $t.create('no-app', { appName: t })
	return e
}
function Kn(t, e, n) {
	var r
	let i = (r = n0[t]) !== null && r !== void 0 ? r : t
	n && (i += `-${n}`)
	const s = i.match(/\s|\//),
		o = e.match(/\s|\//)
	if (s || o) {
		const l = [`Unable to register library "${i}" with version "${e}":`]
		s &&
			l.push(
				`library name "${i}" contains illegal characters (whitespace or "/")`
			),
			s && o && l.push('and'),
			o &&
				l.push(
					`version name "${e}" contains illegal characters (whitespace or "/")`
				),
			vn.warn(l.join(' '))
		return
	}
	Ws(new mi(`${i}-version`, () => ({ library: i, version: e }), 'VERSION'))
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const u0 = 'firebase-heartbeat-database',
	c0 = 1,
	gi = 'firebase-heartbeat-store'
let ll = null
function $p() {
	return (
		ll ||
			(ll = Iv(u0, c0, {
				upgrade: (t, e) => {
					switch (e) {
						case 0:
							t.createObjectStore(gi)
					}
				}
			}).catch((t) => {
				throw $t.create('idb-open', { originalErrorMessage: t.message })
			})),
		ll
	)
}
async function d0(t) {
	try {
		return await (await $p()).transaction(gi).objectStore(gi).get(bp(t))
	} catch (e) {
		if (e instanceof Ri) vn.warn(e.message)
		else {
			const n = $t.create('idb-get', {
				originalErrorMessage: e == null ? void 0 : e.message
			})
			vn.warn(n.message)
		}
	}
}
async function Sd(t, e) {
	try {
		const r = (await $p()).transaction(gi, 'readwrite')
		await r.objectStore(gi).put(e, bp(t)), await r.done
	} catch (n) {
		if (n instanceof Ri) vn.warn(n.message)
		else {
			const r = $t.create('idb-set', {
				originalErrorMessage: n == null ? void 0 : n.message
			})
			vn.warn(r.message)
		}
	}
}
function bp(t) {
	return `${t.name}!${t.options.appId}`
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const f0 = 1024,
	h0 = 30 * 24 * 60 * 60 * 1e3
class p0 {
	constructor(e) {
		;(this.container = e), (this._heartbeatsCache = null)
		const n = this.container.getProvider('app').getImmediate()
		;(this._storage = new g0(n)),
			(this._heartbeatsCachePromise = this._storage
				.read()
				.then((r) => ((this._heartbeatsCache = r), r)))
	}
	async triggerHeartbeat() {
		const n = this.container
				.getProvider('platform-logger')
				.getImmediate()
				.getPlatformInfoString(),
			r = kd()
		if (
			(this._heartbeatsCache === null &&
				(this._heartbeatsCache = await this._heartbeatsCachePromise),
			!(
				this._heartbeatsCache.lastSentHeartbeatDate === r ||
				this._heartbeatsCache.heartbeats.some((i) => i.date === r)
			))
		)
			return (
				this._heartbeatsCache.heartbeats.push({ date: r, agent: n }),
				(this._heartbeatsCache.heartbeats =
					this._heartbeatsCache.heartbeats.filter((i) => {
						const s = new Date(i.date).valueOf()
						return Date.now() - s <= h0
					})),
				this._storage.overwrite(this._heartbeatsCache)
			)
	}
	async getHeartbeatsHeader() {
		if (
			(this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
			this._heartbeatsCache === null ||
				this._heartbeatsCache.heartbeats.length === 0)
		)
			return ''
		const e = kd(),
			{ heartbeatsToSend: n, unsentEntries: r } = m0(
				this._heartbeatsCache.heartbeats
			),
			i = Us(JSON.stringify({ version: 2, heartbeats: n }))
		return (
			(this._heartbeatsCache.lastSentHeartbeatDate = e),
			r.length > 0
				? ((this._heartbeatsCache.heartbeats = r),
				  await this._storage.overwrite(this._heartbeatsCache))
				: ((this._heartbeatsCache.heartbeats = []),
				  this._storage.overwrite(this._heartbeatsCache)),
			i
		)
	}
}
function kd() {
	return new Date().toISOString().substring(0, 10)
}
function m0(t, e = f0) {
	const n = []
	let r = t.slice()
	for (const i of t) {
		const s = n.find((o) => o.agent === i.agent)
		if (s) {
			if ((s.dates.push(i.date), Td(n) > e)) {
				s.dates.pop()
				break
			}
		} else if ((n.push({ agent: i.agent, dates: [i.date] }), Td(n) > e)) {
			n.pop()
			break
		}
		r = r.slice(1)
	}
	return { heartbeatsToSend: n, unsentEntries: r }
}
class g0 {
	constructor(e) {
		;(this.app = e),
			(this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck())
	}
	async runIndexedDBEnvironmentCheck() {
		return ev()
			? tv()
					.then(() => !0)
					.catch(() => !1)
			: !1
	}
	async read() {
		return (await this._canUseIndexedDBPromise)
			? (await d0(this.app)) || { heartbeats: [] }
			: { heartbeats: [] }
	}
	async overwrite(e) {
		var n
		if (await this._canUseIndexedDBPromise) {
			const i = await this.read()
			return Sd(this.app, {
				lastSentHeartbeatDate:
					(n = e.lastSentHeartbeatDate) !== null && n !== void 0
						? n
						: i.lastSentHeartbeatDate,
				heartbeats: e.heartbeats
			})
		} else return
	}
	async add(e) {
		var n
		if (await this._canUseIndexedDBPromise) {
			const i = await this.read()
			return Sd(this.app, {
				lastSentHeartbeatDate:
					(n = e.lastSentHeartbeatDate) !== null && n !== void 0
						? n
						: i.lastSentHeartbeatDate,
				heartbeats: [...i.heartbeats, ...e.heartbeats]
			})
		} else return
	}
}
function Td(t) {
	return Us(JSON.stringify({ version: 2, heartbeats: t })).length
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _0(t) {
	Ws(new mi('platform-logger', (e) => new Rv(e), 'PRIVATE')),
		Ws(new mi('heartbeat', (e) => new p0(e), 'PRIVATE')),
		Kn(fa, Ed, t),
		Kn(fa, Ed, 'esm2017'),
		Kn('fire-js', '')
}
_0('')
const Id = '@firebase/database',
	Nd = '1.0.1'
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Qp = ''
function y0(t) {
	Qp = t
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class v0 {
	constructor(e) {
		;(this.domStorage_ = e), (this.prefix_ = 'firebase:')
	}
	set(e, n) {
		n == null
			? this.domStorage_.removeItem(this.prefixedName_(e))
			: this.domStorage_.setItem(this.prefixedName_(e), fe(n))
	}
	get(e) {
		const n = this.domStorage_.getItem(this.prefixedName_(e))
		return n == null ? null : pi(n)
	}
	remove(e) {
		this.domStorage_.removeItem(this.prefixedName_(e))
	}
	prefixedName_(e) {
		return this.prefix_ + e
	}
	toString() {
		return this.domStorage_.toString()
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class C0 {
	constructor() {
		;(this.cache_ = {}), (this.isInMemoryStorage = !0)
	}
	set(e, n) {
		n == null ? delete this.cache_[e] : (this.cache_[e] = n)
	}
	get(e) {
		return It(this.cache_, e) ? this.cache_[e] : null
	}
	remove(e) {
		delete this.cache_[e]
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Gp = function (t) {
		try {
			if (typeof window < 'u' && typeof window[t] < 'u') {
				const e = window[t]
				return (
					e.setItem('firebase:sentinel', 'cache'),
					e.removeItem('firebase:sentinel'),
					new v0(e)
				)
			}
		} catch {}
		return new C0()
	},
	un = Gp('localStorage'),
	ma = Gp('sessionStorage')
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Yn = new Bp('@firebase/database'),
	w0 = (function () {
		let t = 1
		return function () {
			return t++
		}
	})(),
	Kp = function (t) {
		const e = uv(t),
			n = new av()
		n.update(e)
		const r = n.digest()
		return Eu.encodeByteArray(r)
	},
	Pi = function (...t) {
		let e = ''
		for (let n = 0; n < t.length; n++) {
			const r = t[n]
			Array.isArray(r) ||
			(r && typeof r == 'object' && typeof r.length == 'number')
				? (e += Pi.apply(null, r))
				: typeof r == 'object'
				? (e += fe(r))
				: (e += r),
				(e += ' ')
		}
		return e
	}
let hn = null,
	xd = !0
const E0 = function (t, e) {
		w(!e || t === !0 || t === !1, "Can't turn on custom loggers persistently."),
			t === !0
				? ((Yn.logLevel = V.VERBOSE),
				  (hn = Yn.log.bind(Yn)),
				  e && ma.set('logging_enabled', !0))
				: typeof t == 'function'
				? (hn = t)
				: ((hn = null), ma.remove('logging_enabled'))
	},
	we = function (...t) {
		if (
			(xd === !0 &&
				((xd = !1), hn === null && ma.get('logging_enabled') === !0 && E0(!0)),
			hn)
		) {
			const e = Pi.apply(null, t)
			hn(e)
		}
	},
	Di = function (t) {
		return function (...e) {
			we(t, ...e)
		}
	},
	ga = function (...t) {
		const e = 'FIREBASE INTERNAL ERROR: ' + Pi(...t)
		Yn.error(e)
	},
	St = function (...t) {
		const e = `FIREBASE FATAL ERROR: ${Pi(...t)}`
		throw (Yn.error(e), new Error(e))
	},
	Me = function (...t) {
		const e = 'FIREBASE WARNING: ' + Pi(...t)
		Yn.warn(e)
	},
	S0 = function () {
		typeof window < 'u' &&
			window.location &&
			window.location.protocol &&
			window.location.protocol.indexOf('https:') !== -1 &&
			Me(
				'Insecure Firebase access from a secure page. Please use https in calls to new Firebase().'
			)
	},
	Yp = function (t) {
		return (
			typeof t == 'number' &&
			(t !== t ||
				t === Number.POSITIVE_INFINITY ||
				t === Number.NEGATIVE_INFINITY)
		)
	},
	k0 = function (t) {
		if (document.readyState === 'complete') t()
		else {
			let e = !1
			const n = function () {
				if (!document.body) {
					setTimeout(n, Math.floor(10))
					return
				}
				e || ((e = !0), t())
			}
			document.addEventListener
				? (document.addEventListener('DOMContentLoaded', n, !1),
				  window.addEventListener('load', n, !1))
				: document.attachEvent &&
				  (document.attachEvent('onreadystatechange', () => {
						document.readyState === 'complete' && n()
				  }),
				  window.attachEvent('onload', n))
		}
	},
	lr = '[MIN_NAME]',
	Cn = '[MAX_NAME]',
	gr = function (t, e) {
		if (t === e) return 0
		if (t === lr || e === Cn) return -1
		if (e === lr || t === Cn) return 1
		{
			const n = Rd(t),
				r = Rd(e)
			return n !== null
				? r !== null
					? n - r === 0
						? t.length - e.length
						: n - r
					: -1
				: r !== null
				? 1
				: t < e
				? -1
				: 1
		}
	},
	T0 = function (t, e) {
		return t === e ? 0 : t < e ? -1 : 1
	},
	Rr = function (t, e) {
		if (e && t in e) return e[t]
		throw new Error('Missing required key (' + t + ') in object: ' + fe(e))
	},
	Tu = function (t) {
		if (typeof t != 'object' || t === null) return fe(t)
		const e = []
		for (const r in t) e.push(r)
		e.sort()
		let n = '{'
		for (let r = 0; r < e.length; r++)
			r !== 0 && (n += ','), (n += fe(e[r])), (n += ':'), (n += Tu(t[e[r]]))
		return (n += '}'), n
	},
	qp = function (t, e) {
		const n = t.length
		if (n <= e) return [t]
		const r = []
		for (let i = 0; i < n; i += e)
			i + e > n ? r.push(t.substring(i, n)) : r.push(t.substring(i, i + e))
		return r
	}
function Le(t, e) {
	for (const n in t) t.hasOwnProperty(n) && e(n, t[n])
}
const Xp = function (t) {
		w(!Yp(t), 'Invalid JSON number')
		const e = 11,
			n = 52,
			r = (1 << (e - 1)) - 1
		let i, s, o, l, a
		t === 0
			? ((s = 0), (o = 0), (i = 1 / t === -1 / 0 ? 1 : 0))
			: ((i = t < 0),
			  (t = Math.abs(t)),
			  t >= Math.pow(2, 1 - r)
					? ((l = Math.min(Math.floor(Math.log(t) / Math.LN2), r)),
					  (s = l + r),
					  (o = Math.round(t * Math.pow(2, n - l) - Math.pow(2, n))))
					: ((s = 0), (o = Math.round(t / Math.pow(2, 1 - r - n)))))
		const u = []
		for (a = n; a; a -= 1) u.push(o % 2 ? 1 : 0), (o = Math.floor(o / 2))
		for (a = e; a; a -= 1) u.push(s % 2 ? 1 : 0), (s = Math.floor(s / 2))
		u.push(i ? 1 : 0), u.reverse()
		const f = u.join('')
		let c = ''
		for (a = 0; a < 64; a += 8) {
			let d = parseInt(f.substr(a, 8), 2).toString(16)
			d.length === 1 && (d = '0' + d), (c = c + d)
		}
		return c.toLowerCase()
	},
	I0 = function () {
		return !!(
			typeof window == 'object' &&
			window.chrome &&
			window.chrome.extension &&
			!/^chrome/.test(window.location.href)
		)
	},
	N0 = function () {
		return typeof Windows == 'object' && typeof Windows.UI == 'object'
	}
function x0(t, e) {
	let n = 'Unknown Error'
	t === 'too_big'
		? (n =
				'The data requested exceeds the maximum size that can be accessed with a single request.')
		: t === 'permission_denied'
		? (n = "Client doesn't have permission to access the desired data.")
		: t === 'unavailable' && (n = 'The service is unavailable')
	const r = new Error(t + ' at ' + e._path.toString() + ': ' + n)
	return (r.code = t.toUpperCase()), r
}
const R0 = new RegExp('^-?(0*)\\d{1,10}$'),
	P0 = -2147483648,
	D0 = 2147483647,
	Rd = function (t) {
		if (R0.test(t)) {
			const e = Number(t)
			if (e >= P0 && e <= D0) return e
		}
		return null
	},
	_r = function (t) {
		try {
			t()
		} catch (e) {
			setTimeout(() => {
				const n = e.stack || ''
				throw (Me('Exception was thrown by user callback.', n), e)
			}, Math.floor(0))
		}
	},
	O0 = function () {
		return (
			(
				(typeof window == 'object' &&
					window.navigator &&
					window.navigator.userAgent) ||
				''
			).search(
				/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
			) >= 0
		)
	},
	Qr = function (t, e) {
		const n = setTimeout(t, e)
		return (
			typeof n == 'number' && typeof Deno < 'u' && Deno.unrefTimer
				? Deno.unrefTimer(n)
				: typeof n == 'object' && n.unref && n.unref(),
			n
		)
	}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class A0 {
	constructor(e, n) {
		;(this.appName_ = e),
			(this.appCheckProvider = n),
			(this.appCheck = n == null ? void 0 : n.getImmediate({ optional: !0 })),
			this.appCheck || n == null || n.get().then((r) => (this.appCheck = r))
	}
	getToken(e) {
		return this.appCheck
			? this.appCheck.getToken(e)
			: new Promise((n, r) => {
					setTimeout(() => {
						this.appCheck ? this.getToken(e).then(n, r) : n(null)
					}, 0)
			  })
	}
	addTokenChangeListener(e) {
		var n
		;(n = this.appCheckProvider) === null ||
			n === void 0 ||
			n.get().then((r) => r.addTokenListener(e))
	}
	notifyForInvalidToken() {
		Me(
			`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`
		)
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class M0 {
	constructor(e, n, r) {
		;(this.appName_ = e),
			(this.firebaseOptions_ = n),
			(this.authProvider_ = r),
			(this.auth_ = null),
			(this.auth_ = r.getImmediate({ optional: !0 })),
			this.auth_ || r.onInit((i) => (this.auth_ = i))
	}
	getToken(e) {
		return this.auth_
			? this.auth_
					.getToken(e)
					.catch((n) =>
						n && n.code === 'auth/token-not-initialized'
							? (we(
									'Got auth/token-not-initialized error.  Treating as null token.'
							  ),
							  null)
							: Promise.reject(n)
					)
			: new Promise((n, r) => {
					setTimeout(() => {
						this.auth_ ? this.getToken(e).then(n, r) : n(null)
					}, 0)
			  })
	}
	addTokenChangeListener(e) {
		this.auth_
			? this.auth_.addAuthTokenListener(e)
			: this.authProvider_.get().then((n) => n.addAuthTokenListener(e))
	}
	removeTokenChangeListener(e) {
		this.authProvider_.get().then((n) => n.removeAuthTokenListener(e))
	}
	notifyForInvalidToken() {
		let e =
			'Provided authentication credentials for the app named "' +
			this.appName_ +
			'" are invalid. This usually indicates your app was not initialized correctly. '
		'credential' in this.firebaseOptions_
			? (e +=
					'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
			: 'serviceAccount' in this.firebaseOptions_
			? (e +=
					'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
			: (e +=
					'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
			Me(e)
	}
}
class qn {
	constructor(e) {
		this.accessToken = e
	}
	getToken(e) {
		return Promise.resolve({ accessToken: this.accessToken })
	}
	addTokenChangeListener(e) {
		e(this.accessToken)
	}
	removeTokenChangeListener(e) {}
	notifyForInvalidToken() {}
}
qn.OWNER = 'owner'
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Iu = '5',
	Jp = 'v',
	Zp = 's',
	em = 'r',
	tm = 'f',
	nm =
		/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
	rm = 'ls',
	im = 'p',
	_a = 'ac',
	sm = 'websocket',
	om = 'long_polling'
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lm {
	constructor(e, n, r, i, s = !1, o = '', l = !1, a = !1) {
		;(this.secure = n),
			(this.namespace = r),
			(this.webSocketOnly = i),
			(this.nodeAdmin = s),
			(this.persistenceKey = o),
			(this.includeNamespaceInQueryParams = l),
			(this.isUsingEmulator = a),
			(this._host = e.toLowerCase()),
			(this._domain = this._host.substr(this._host.indexOf('.') + 1)),
			(this.internalHost = un.get('host:' + e) || this._host)
	}
	isCacheableHost() {
		return this.internalHost.substr(0, 2) === 's-'
	}
	isCustomHost() {
		return (
			this._domain !== 'firebaseio.com' &&
			this._domain !== 'firebaseio-demo.com'
		)
	}
	get host() {
		return this._host
	}
	set host(e) {
		e !== this.internalHost &&
			((this.internalHost = e),
			this.isCacheableHost() && un.set('host:' + this._host, this.internalHost))
	}
	toString() {
		let e = this.toURLString()
		return this.persistenceKey && (e += '<' + this.persistenceKey + '>'), e
	}
	toURLString() {
		const e = this.secure ? 'https://' : 'http://',
			n = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : ''
		return `${e}${this.host}/${n}`
	}
}
function L0(t) {
	return (
		t.host !== t.internalHost ||
		t.isCustomHost() ||
		t.includeNamespaceInQueryParams
	)
}
function am(t, e, n) {
	w(typeof e == 'string', 'typeof type must == string'),
		w(typeof n == 'object', 'typeof params must == object')
	let r
	if (e === sm) r = (t.secure ? 'wss://' : 'ws://') + t.internalHost + '/.ws?'
	else if (e === om)
		r = (t.secure ? 'https://' : 'http://') + t.internalHost + '/.lp?'
	else throw new Error('Unknown connection type: ' + e)
	L0(t) && (n.ns = t.namespace)
	const i = []
	return (
		Le(n, (s, o) => {
			i.push(s + '=' + o)
		}),
		r + i.join('&')
	)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class F0 {
	constructor() {
		this.counters_ = {}
	}
	incrementCounter(e, n = 1) {
		It(this.counters_, e) || (this.counters_[e] = 0), (this.counters_[e] += n)
	}
	get() {
		return Hy(this.counters_)
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const al = {},
	ul = {}
function Nu(t) {
	const e = t.toString()
	return al[e] || (al[e] = new F0()), al[e]
}
function z0(t, e) {
	const n = t.toString()
	return ul[n] || (ul[n] = e()), ul[n]
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class U0 {
	constructor(e) {
		;(this.onMessage_ = e),
			(this.pendingResponses = []),
			(this.currentResponseNum = 0),
			(this.closeAfterResponse = -1),
			(this.onClose = null)
	}
	closeAfter(e, n) {
		;(this.closeAfterResponse = e),
			(this.onClose = n),
			this.closeAfterResponse < this.currentResponseNum &&
				(this.onClose(), (this.onClose = null))
	}
	handleResponse(e, n) {
		for (
			this.pendingResponses[e] = n;
			this.pendingResponses[this.currentResponseNum];

		) {
			const r = this.pendingResponses[this.currentResponseNum]
			delete this.pendingResponses[this.currentResponseNum]
			for (let i = 0; i < r.length; ++i)
				r[i] &&
					_r(() => {
						this.onMessage_(r[i])
					})
			if (this.currentResponseNum === this.closeAfterResponse) {
				this.onClose && (this.onClose(), (this.onClose = null))
				break
			}
			this.currentResponseNum++
		}
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Pd = 'start',
	j0 = 'close',
	B0 = 'pLPCommand',
	W0 = 'pRTLPCB',
	um = 'id',
	cm = 'pw',
	dm = 'ser',
	V0 = 'cb',
	H0 = 'seg',
	$0 = 'ts',
	b0 = 'd',
	Q0 = 'dframe',
	fm = 1870,
	hm = 30,
	G0 = fm - hm,
	K0 = 25e3,
	Y0 = 3e4
class Wn {
	constructor(e, n, r, i, s, o, l) {
		;(this.connId = e),
			(this.repoInfo = n),
			(this.applicationId = r),
			(this.appCheckToken = i),
			(this.authToken = s),
			(this.transportSessionId = o),
			(this.lastSessionId = l),
			(this.bytesSent = 0),
			(this.bytesReceived = 0),
			(this.everConnected_ = !1),
			(this.log_ = Di(e)),
			(this.stats_ = Nu(n)),
			(this.urlFn = (a) => (
				this.appCheckToken && (a[_a] = this.appCheckToken), am(n, om, a)
			))
	}
	open(e, n) {
		;(this.curSegmentNum = 0),
			(this.onDisconnect_ = n),
			(this.myPacketOrderer = new U0(e)),
			(this.isClosed_ = !1),
			(this.connectTimeoutTimer_ = setTimeout(() => {
				this.log_('Timed out trying to connect.'),
					this.onClosed_(),
					(this.connectTimeoutTimer_ = null)
			}, Math.floor(Y0))),
			k0(() => {
				if (this.isClosed_) return
				this.scriptTagHolder = new xu(
					(...s) => {
						const [o, l, a, u, f] = s
						if ((this.incrementIncomingBytes_(s), !!this.scriptTagHolder))
							if (
								(this.connectTimeoutTimer_ &&
									(clearTimeout(this.connectTimeoutTimer_),
									(this.connectTimeoutTimer_ = null)),
								(this.everConnected_ = !0),
								o === Pd)
							)
								(this.id = l), (this.password = a)
							else if (o === j0)
								l
									? ((this.scriptTagHolder.sendNewPolls = !1),
									  this.myPacketOrderer.closeAfter(l, () => {
											this.onClosed_()
									  }))
									: this.onClosed_()
							else throw new Error('Unrecognized command received: ' + o)
					},
					(...s) => {
						const [o, l] = s
						this.incrementIncomingBytes_(s),
							this.myPacketOrderer.handleResponse(o, l)
					},
					() => {
						this.onClosed_()
					},
					this.urlFn
				)
				const r = {}
				;(r[Pd] = 't'),
					(r[dm] = Math.floor(Math.random() * 1e8)),
					this.scriptTagHolder.uniqueCallbackIdentifier &&
						(r[V0] = this.scriptTagHolder.uniqueCallbackIdentifier),
					(r[Jp] = Iu),
					this.transportSessionId && (r[Zp] = this.transportSessionId),
					this.lastSessionId && (r[rm] = this.lastSessionId),
					this.applicationId && (r[im] = this.applicationId),
					this.appCheckToken && (r[_a] = this.appCheckToken),
					typeof location < 'u' &&
						location.hostname &&
						nm.test(location.hostname) &&
						(r[em] = tm)
				const i = this.urlFn(r)
				this.log_('Connecting via long-poll to ' + i),
					this.scriptTagHolder.addTag(i, () => {})
			})
	}
	start() {
		this.scriptTagHolder.startLongPoll(this.id, this.password),
			this.addDisconnectPingFrame(this.id, this.password)
	}
	static forceAllow() {
		Wn.forceAllow_ = !0
	}
	static forceDisallow() {
		Wn.forceDisallow_ = !0
	}
	static isAvailable() {
		return Wn.forceAllow_
			? !0
			: !Wn.forceDisallow_ &&
					typeof document < 'u' &&
					document.createElement != null &&
					!I0() &&
					!N0()
	}
	markConnectionHealthy() {}
	shutdown_() {
		;(this.isClosed_ = !0),
			this.scriptTagHolder &&
				(this.scriptTagHolder.close(), (this.scriptTagHolder = null)),
			this.myDisconnFrame &&
				(document.body.removeChild(this.myDisconnFrame),
				(this.myDisconnFrame = null)),
			this.connectTimeoutTimer_ &&
				(clearTimeout(this.connectTimeoutTimer_),
				(this.connectTimeoutTimer_ = null))
	}
	onClosed_() {
		this.isClosed_ ||
			(this.log_('Longpoll is closing itself'),
			this.shutdown_(),
			this.onDisconnect_ &&
				(this.onDisconnect_(this.everConnected_), (this.onDisconnect_ = null)))
	}
	close() {
		this.isClosed_ || (this.log_('Longpoll is being closed.'), this.shutdown_())
	}
	send(e) {
		const n = fe(e)
		;(this.bytesSent += n.length),
			this.stats_.incrementCounter('bytes_sent', n.length)
		const r = Op(n),
			i = qp(r, G0)
		for (let s = 0; s < i.length; s++)
			this.scriptTagHolder.enqueueSegment(this.curSegmentNum, i.length, i[s]),
				this.curSegmentNum++
	}
	addDisconnectPingFrame(e, n) {
		this.myDisconnFrame = document.createElement('iframe')
		const r = {}
		;(r[Q0] = 't'),
			(r[um] = e),
			(r[cm] = n),
			(this.myDisconnFrame.src = this.urlFn(r)),
			(this.myDisconnFrame.style.display = 'none'),
			document.body.appendChild(this.myDisconnFrame)
	}
	incrementIncomingBytes_(e) {
		const n = fe(e).length
		;(this.bytesReceived += n),
			this.stats_.incrementCounter('bytes_received', n)
	}
}
class xu {
	constructor(e, n, r, i) {
		;(this.onDisconnect = r),
			(this.urlFn = i),
			(this.outstandingRequests = new Set()),
			(this.pendingSegs = []),
			(this.currentSerial = Math.floor(Math.random() * 1e8)),
			(this.sendNewPolls = !0)
		{
			;(this.uniqueCallbackIdentifier = w0()),
				(window[B0 + this.uniqueCallbackIdentifier] = e),
				(window[W0 + this.uniqueCallbackIdentifier] = n),
				(this.myIFrame = xu.createIFrame_())
			let s = ''
			this.myIFrame.src &&
				this.myIFrame.src.substr(0, 11) === 'javascript:' &&
				(s = '<script>document.domain="' + document.domain + '";</script>')
			const o = '<html><body>' + s + '</body></html>'
			try {
				this.myIFrame.doc.open(),
					this.myIFrame.doc.write(o),
					this.myIFrame.doc.close()
			} catch (l) {
				we('frame writing exception'), l.stack && we(l.stack), we(l)
			}
		}
	}
	static createIFrame_() {
		const e = document.createElement('iframe')
		if (((e.style.display = 'none'), document.body)) {
			document.body.appendChild(e)
			try {
				e.contentWindow.document || we('No IE domain setting required')
			} catch {
				const r = document.domain
				e.src =
					"javascript:void((function(){document.open();document.domain='" +
					r +
					"';document.close();})())"
			}
		} else
			throw 'Document body has not initialized. Wait to initialize Firebase until after the document is ready.'
		return (
			e.contentDocument
				? (e.doc = e.contentDocument)
				: e.contentWindow
				? (e.doc = e.contentWindow.document)
				: e.document && (e.doc = e.document),
			e
		)
	}
	close() {
		;(this.alive = !1),
			this.myIFrame &&
				((this.myIFrame.doc.body.textContent = ''),
				setTimeout(() => {
					this.myIFrame !== null &&
						(document.body.removeChild(this.myIFrame), (this.myIFrame = null))
				}, Math.floor(0)))
		const e = this.onDisconnect
		e && ((this.onDisconnect = null), e())
	}
	startLongPoll(e, n) {
		for (this.myID = e, this.myPW = n, this.alive = !0; this.newRequest_(); );
	}
	newRequest_() {
		if (
			this.alive &&
			this.sendNewPolls &&
			this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)
		) {
			this.currentSerial++
			const e = {}
			;(e[um] = this.myID), (e[cm] = this.myPW), (e[dm] = this.currentSerial)
			let n = this.urlFn(e),
				r = '',
				i = 0
			for (
				;
				this.pendingSegs.length > 0 &&
				this.pendingSegs[0].d.length + hm + r.length <= fm;

			) {
				const o = this.pendingSegs.shift()
				;(r =
					r +
					'&' +
					H0 +
					i +
					'=' +
					o.seg +
					'&' +
					$0 +
					i +
					'=' +
					o.ts +
					'&' +
					b0 +
					i +
					'=' +
					o.d),
					i++
			}
			return (n = n + r), this.addLongPollTag_(n, this.currentSerial), !0
		} else return !1
	}
	enqueueSegment(e, n, r) {
		this.pendingSegs.push({ seg: e, ts: n, d: r }),
			this.alive && this.newRequest_()
	}
	addLongPollTag_(e, n) {
		this.outstandingRequests.add(n)
		const r = () => {
				this.outstandingRequests.delete(n), this.newRequest_()
			},
			i = setTimeout(r, Math.floor(K0)),
			s = () => {
				clearTimeout(i), r()
			}
		this.addTag(e, s)
	}
	addTag(e, n) {
		setTimeout(() => {
			try {
				if (!this.sendNewPolls) return
				const r = this.myIFrame.doc.createElement('script')
				;(r.type = 'text/javascript'),
					(r.async = !0),
					(r.src = e),
					(r.onload = r.onreadystatechange =
						function () {
							const i = r.readyState
							;(!i || i === 'loaded' || i === 'complete') &&
								((r.onload = r.onreadystatechange = null),
								r.parentNode && r.parentNode.removeChild(r),
								n())
						}),
					(r.onerror = () => {
						we('Long-poll script failed to load: ' + e),
							(this.sendNewPolls = !1),
							this.close()
					}),
					this.myIFrame.doc.body.appendChild(r)
			} catch {}
		}, Math.floor(1))
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const q0 = 16384,
	X0 = 45e3
let Vs = null
typeof MozWebSocket < 'u'
	? (Vs = MozWebSocket)
	: typeof WebSocket < 'u' && (Vs = WebSocket)
class et {
	constructor(e, n, r, i, s, o, l) {
		;(this.connId = e),
			(this.applicationId = r),
			(this.appCheckToken = i),
			(this.authToken = s),
			(this.keepaliveTimer = null),
			(this.frames = null),
			(this.totalFrames = 0),
			(this.bytesSent = 0),
			(this.bytesReceived = 0),
			(this.log_ = Di(this.connId)),
			(this.stats_ = Nu(n)),
			(this.connURL = et.connectionURL_(n, o, l, i, r)),
			(this.nodeAdmin = n.nodeAdmin)
	}
	static connectionURL_(e, n, r, i, s) {
		const o = {}
		return (
			(o[Jp] = Iu),
			typeof location < 'u' &&
				location.hostname &&
				nm.test(location.hostname) &&
				(o[em] = tm),
			n && (o[Zp] = n),
			r && (o[rm] = r),
			i && (o[_a] = i),
			s && (o[im] = s),
			am(e, sm, o)
		)
	}
	open(e, n) {
		;(this.onDisconnect = n),
			(this.onMessage = e),
			this.log_('Websocket connecting to ' + this.connURL),
			(this.everConnected_ = !1),
			un.set('previous_websocket_failure', !0)
		try {
			let r
			zp(), (this.mySock = new Vs(this.connURL, [], r))
		} catch (r) {
			this.log_('Error instantiating WebSocket.')
			const i = r.message || r.data
			i && this.log_(i), this.onClosed_()
			return
		}
		;(this.mySock.onopen = () => {
			this.log_('Websocket connected.'), (this.everConnected_ = !0)
		}),
			(this.mySock.onclose = () => {
				this.log_('Websocket connection was disconnected.'),
					(this.mySock = null),
					this.onClosed_()
			}),
			(this.mySock.onmessage = (r) => {
				this.handleIncomingFrame(r)
			}),
			(this.mySock.onerror = (r) => {
				this.log_('WebSocket error.  Closing connection.')
				const i = r.message || r.data
				i && this.log_(i), this.onClosed_()
			})
	}
	start() {}
	static forceDisallow() {
		et.forceDisallow_ = !0
	}
	static isAvailable() {
		let e = !1
		if (typeof navigator < 'u' && navigator.userAgent) {
			const n = /Android ([0-9]{0,}\.[0-9]{0,})/,
				r = navigator.userAgent.match(n)
			r && r.length > 1 && parseFloat(r[1]) < 4.4 && (e = !0)
		}
		return !e && Vs !== null && !et.forceDisallow_
	}
	static previouslyFailed() {
		return un.isInMemoryStorage || un.get('previous_websocket_failure') === !0
	}
	markConnectionHealthy() {
		un.remove('previous_websocket_failure')
	}
	appendFrame_(e) {
		if ((this.frames.push(e), this.frames.length === this.totalFrames)) {
			const n = this.frames.join('')
			this.frames = null
			const r = pi(n)
			this.onMessage(r)
		}
	}
	handleNewFrameCount_(e) {
		;(this.totalFrames = e), (this.frames = [])
	}
	extractFrameCount_(e) {
		if (
			(w(this.frames === null, 'We already have a frame buffer'), e.length <= 6)
		) {
			const n = Number(e)
			if (!isNaN(n)) return this.handleNewFrameCount_(n), null
		}
		return this.handleNewFrameCount_(1), e
	}
	handleIncomingFrame(e) {
		if (this.mySock === null) return
		const n = e.data
		if (
			((this.bytesReceived += n.length),
			this.stats_.incrementCounter('bytes_received', n.length),
			this.resetKeepAlive(),
			this.frames !== null)
		)
			this.appendFrame_(n)
		else {
			const r = this.extractFrameCount_(n)
			r !== null && this.appendFrame_(r)
		}
	}
	send(e) {
		this.resetKeepAlive()
		const n = fe(e)
		;(this.bytesSent += n.length),
			this.stats_.incrementCounter('bytes_sent', n.length)
		const r = qp(n, q0)
		r.length > 1 && this.sendString_(String(r.length))
		for (let i = 0; i < r.length; i++) this.sendString_(r[i])
	}
	shutdown_() {
		;(this.isClosed_ = !0),
			this.keepaliveTimer &&
				(clearInterval(this.keepaliveTimer), (this.keepaliveTimer = null)),
			this.mySock && (this.mySock.close(), (this.mySock = null))
	}
	onClosed_() {
		this.isClosed_ ||
			(this.log_('WebSocket is closing itself'),
			this.shutdown_(),
			this.onDisconnect &&
				(this.onDisconnect(this.everConnected_), (this.onDisconnect = null)))
	}
	close() {
		this.isClosed_ || (this.log_('WebSocket is being closed'), this.shutdown_())
	}
	resetKeepAlive() {
		clearInterval(this.keepaliveTimer),
			(this.keepaliveTimer = setInterval(() => {
				this.mySock && this.sendString_('0'), this.resetKeepAlive()
			}, Math.floor(X0)))
	}
	sendString_(e) {
		try {
			this.mySock.send(e)
		} catch (n) {
			this.log_(
				'Exception thrown from WebSocket.send():',
				n.message || n.data,
				'Closing connection.'
			),
				setTimeout(this.onClosed_.bind(this), 0)
		}
	}
}
et.responsesRequiredToBeHealthy = 2
et.healthyTimeout = 3e4
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _i {
	constructor(e) {
		this.initTransports_(e)
	}
	static get ALL_TRANSPORTS() {
		return [Wn, et]
	}
	static get IS_TRANSPORT_INITIALIZED() {
		return this.globalTransportInitialized_
	}
	initTransports_(e) {
		const n = et && et.isAvailable()
		let r = n && !et.previouslyFailed()
		if (
			(e.webSocketOnly &&
				(n ||
					Me(
						"wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
					),
				(r = !0)),
			r)
		)
			this.transports_ = [et]
		else {
			const i = (this.transports_ = [])
			for (const s of _i.ALL_TRANSPORTS) s && s.isAvailable() && i.push(s)
			_i.globalTransportInitialized_ = !0
		}
	}
	initialTransport() {
		if (this.transports_.length > 0) return this.transports_[0]
		throw new Error('No transports available')
	}
	upgradeTransport() {
		return this.transports_.length > 1 ? this.transports_[1] : null
	}
}
_i.globalTransportInitialized_ = !1
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const J0 = 6e4,
	Z0 = 5e3,
	eC = 10 * 1024,
	tC = 100 * 1024,
	cl = 't',
	Dd = 'd',
	nC = 's',
	Od = 'r',
	rC = 'e',
	Ad = 'o',
	Md = 'a',
	Ld = 'n',
	Fd = 'p',
	iC = 'h'
class sC {
	constructor(e, n, r, i, s, o, l, a, u, f) {
		;(this.id = e),
			(this.repoInfo_ = n),
			(this.applicationId_ = r),
			(this.appCheckToken_ = i),
			(this.authToken_ = s),
			(this.onMessage_ = o),
			(this.onReady_ = l),
			(this.onDisconnect_ = a),
			(this.onKill_ = u),
			(this.lastSessionId = f),
			(this.connectionCount = 0),
			(this.pendingDataMessages = []),
			(this.state_ = 0),
			(this.log_ = Di('c:' + this.id + ':')),
			(this.transportManager_ = new _i(n)),
			this.log_('Connection created'),
			this.start_()
	}
	start_() {
		const e = this.transportManager_.initialTransport()
		;(this.conn_ = new e(
			this.nextTransportId_(),
			this.repoInfo_,
			this.applicationId_,
			this.appCheckToken_,
			this.authToken_,
			null,
			this.lastSessionId
		)),
			(this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0)
		const n = this.connReceiver_(this.conn_),
			r = this.disconnReceiver_(this.conn_)
		;(this.tx_ = this.conn_),
			(this.rx_ = this.conn_),
			(this.secondaryConn_ = null),
			(this.isHealthy_ = !1),
			setTimeout(() => {
				this.conn_ && this.conn_.open(n, r)
			}, Math.floor(0))
		const i = e.healthyTimeout || 0
		i > 0 &&
			(this.healthyTimeout_ = Qr(() => {
				;(this.healthyTimeout_ = null),
					this.isHealthy_ ||
						(this.conn_ && this.conn_.bytesReceived > tC
							? (this.log_(
									'Connection exceeded healthy timeout but has received ' +
										this.conn_.bytesReceived +
										' bytes.  Marking connection healthy.'
							  ),
							  (this.isHealthy_ = !0),
							  this.conn_.markConnectionHealthy())
							: this.conn_ && this.conn_.bytesSent > eC
							? this.log_(
									'Connection exceeded healthy timeout but has sent ' +
										this.conn_.bytesSent +
										' bytes.  Leaving connection alive.'
							  )
							: (this.log_('Closing unhealthy connection after timeout.'),
							  this.close()))
			}, Math.floor(i)))
	}
	nextTransportId_() {
		return 'c:' + this.id + ':' + this.connectionCount++
	}
	disconnReceiver_(e) {
		return (n) => {
			e === this.conn_
				? this.onConnectionLost_(n)
				: e === this.secondaryConn_
				? (this.log_('Secondary connection lost.'),
				  this.onSecondaryConnectionLost_())
				: this.log_('closing an old connection')
		}
	}
	connReceiver_(e) {
		return (n) => {
			this.state_ !== 2 &&
				(e === this.rx_
					? this.onPrimaryMessageReceived_(n)
					: e === this.secondaryConn_
					? this.onSecondaryMessageReceived_(n)
					: this.log_('message on old connection'))
		}
	}
	sendRequest(e) {
		const n = { t: 'd', d: e }
		this.sendData_(n)
	}
	tryCleanupConnection() {
		this.tx_ === this.secondaryConn_ &&
			this.rx_ === this.secondaryConn_ &&
			(this.log_(
				'cleaning up and promoting a connection: ' + this.secondaryConn_.connId
			),
			(this.conn_ = this.secondaryConn_),
			(this.secondaryConn_ = null))
	}
	onSecondaryControl_(e) {
		if (cl in e) {
			const n = e[cl]
			n === Md
				? this.upgradeIfSecondaryHealthy_()
				: n === Od
				? (this.log_('Got a reset on secondary, closing it'),
				  this.secondaryConn_.close(),
				  (this.tx_ === this.secondaryConn_ ||
						this.rx_ === this.secondaryConn_) &&
						this.close())
				: n === Ad &&
				  (this.log_('got pong on secondary.'),
				  this.secondaryResponsesRequired_--,
				  this.upgradeIfSecondaryHealthy_())
		}
	}
	onSecondaryMessageReceived_(e) {
		const n = Rr('t', e),
			r = Rr('d', e)
		if (n === 'c') this.onSecondaryControl_(r)
		else if (n === 'd') this.pendingDataMessages.push(r)
		else throw new Error('Unknown protocol layer: ' + n)
	}
	upgradeIfSecondaryHealthy_() {
		this.secondaryResponsesRequired_ <= 0
			? (this.log_('Secondary connection is healthy.'),
			  (this.isHealthy_ = !0),
			  this.secondaryConn_.markConnectionHealthy(),
			  this.proceedWithUpgrade_())
			: (this.log_('sending ping on secondary.'),
			  this.secondaryConn_.send({ t: 'c', d: { t: Fd, d: {} } }))
	}
	proceedWithUpgrade_() {
		this.secondaryConn_.start(),
			this.log_('sending client ack on secondary'),
			this.secondaryConn_.send({ t: 'c', d: { t: Md, d: {} } }),
			this.log_('Ending transmission on primary'),
			this.conn_.send({ t: 'c', d: { t: Ld, d: {} } }),
			(this.tx_ = this.secondaryConn_),
			this.tryCleanupConnection()
	}
	onPrimaryMessageReceived_(e) {
		const n = Rr('t', e),
			r = Rr('d', e)
		n === 'c' ? this.onControl_(r) : n === 'd' && this.onDataMessage_(r)
	}
	onDataMessage_(e) {
		this.onPrimaryResponse_(), this.onMessage_(e)
	}
	onPrimaryResponse_() {
		this.isHealthy_ ||
			(this.primaryResponsesRequired_--,
			this.primaryResponsesRequired_ <= 0 &&
				(this.log_('Primary connection is healthy.'),
				(this.isHealthy_ = !0),
				this.conn_.markConnectionHealthy()))
	}
	onControl_(e) {
		const n = Rr(cl, e)
		if (Dd in e) {
			const r = e[Dd]
			if (n === iC) {
				const i = Object.assign({}, r)
				this.repoInfo_.isUsingEmulator && (i.h = this.repoInfo_.host),
					this.onHandshake_(i)
			} else if (n === Ld) {
				this.log_('recvd end transmission on primary'),
					(this.rx_ = this.secondaryConn_)
				for (let i = 0; i < this.pendingDataMessages.length; ++i)
					this.onDataMessage_(this.pendingDataMessages[i])
				;(this.pendingDataMessages = []), this.tryCleanupConnection()
			} else
				n === nC
					? this.onConnectionShutdown_(r)
					: n === Od
					? this.onReset_(r)
					: n === rC
					? ga('Server Error: ' + r)
					: n === Ad
					? (this.log_('got pong on primary.'),
					  this.onPrimaryResponse_(),
					  this.sendPingOnPrimaryIfNecessary_())
					: ga('Unknown control packet command: ' + n)
		}
	}
	onHandshake_(e) {
		const n = e.ts,
			r = e.v,
			i = e.h
		;(this.sessionId = e.s),
			(this.repoInfo_.host = i),
			this.state_ === 0 &&
				(this.conn_.start(),
				this.onConnectionEstablished_(this.conn_, n),
				Iu !== r && Me('Protocol version mismatch detected'),
				this.tryStartUpgrade_())
	}
	tryStartUpgrade_() {
		const e = this.transportManager_.upgradeTransport()
		e && this.startUpgrade_(e)
	}
	startUpgrade_(e) {
		;(this.secondaryConn_ = new e(
			this.nextTransportId_(),
			this.repoInfo_,
			this.applicationId_,
			this.appCheckToken_,
			this.authToken_,
			this.sessionId
		)),
			(this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0)
		const n = this.connReceiver_(this.secondaryConn_),
			r = this.disconnReceiver_(this.secondaryConn_)
		this.secondaryConn_.open(n, r),
			Qr(() => {
				this.secondaryConn_ &&
					(this.log_('Timed out trying to upgrade.'),
					this.secondaryConn_.close())
			}, Math.floor(J0))
	}
	onReset_(e) {
		this.log_('Reset packet received.  New host: ' + e),
			(this.repoInfo_.host = e),
			this.state_ === 1
				? this.close()
				: (this.closeConnections_(), this.start_())
	}
	onConnectionEstablished_(e, n) {
		this.log_('Realtime connection established.'),
			(this.conn_ = e),
			(this.state_ = 1),
			this.onReady_ &&
				(this.onReady_(n, this.sessionId), (this.onReady_ = null)),
			this.primaryResponsesRequired_ === 0
				? (this.log_('Primary connection is healthy.'), (this.isHealthy_ = !0))
				: Qr(() => {
						this.sendPingOnPrimaryIfNecessary_()
				  }, Math.floor(Z0))
	}
	sendPingOnPrimaryIfNecessary_() {
		!this.isHealthy_ &&
			this.state_ === 1 &&
			(this.log_('sending ping on primary.'),
			this.sendData_({ t: 'c', d: { t: Fd, d: {} } }))
	}
	onSecondaryConnectionLost_() {
		const e = this.secondaryConn_
		;(this.secondaryConn_ = null),
			(this.tx_ === e || this.rx_ === e) && this.close()
	}
	onConnectionLost_(e) {
		;(this.conn_ = null),
			!e && this.state_ === 0
				? (this.log_('Realtime connection failed.'),
				  this.repoInfo_.isCacheableHost() &&
						(un.remove('host:' + this.repoInfo_.host),
						(this.repoInfo_.internalHost = this.repoInfo_.host)))
				: this.state_ === 1 && this.log_('Realtime connection lost.'),
			this.close()
	}
	onConnectionShutdown_(e) {
		this.log_('Connection shutdown command received. Shutting down...'),
			this.onKill_ && (this.onKill_(e), (this.onKill_ = null)),
			(this.onDisconnect_ = null),
			this.close()
	}
	sendData_(e) {
		if (this.state_ !== 1) throw 'Connection is not connected'
		this.tx_.send(e)
	}
	close() {
		this.state_ !== 2 &&
			(this.log_('Closing realtime connection.'),
			(this.state_ = 2),
			this.closeConnections_(),
			this.onDisconnect_ && (this.onDisconnect_(), (this.onDisconnect_ = null)))
	}
	closeConnections_() {
		this.log_('Shutting down all connections'),
			this.conn_ && (this.conn_.close(), (this.conn_ = null)),
			this.secondaryConn_ &&
				(this.secondaryConn_.close(), (this.secondaryConn_ = null)),
			this.healthyTimeout_ &&
				(clearTimeout(this.healthyTimeout_), (this.healthyTimeout_ = null))
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pm {
	put(e, n, r, i) {}
	merge(e, n, r, i) {}
	refreshAuthToken(e) {}
	refreshAppCheckToken(e) {}
	onDisconnectPut(e, n, r) {}
	onDisconnectMerge(e, n, r) {}
	onDisconnectCancel(e, n) {}
	reportStats(e) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mm {
	constructor(e) {
		;(this.allowedEvents_ = e),
			(this.listeners_ = {}),
			w(Array.isArray(e) && e.length > 0, 'Requires a non-empty array')
	}
	trigger(e, ...n) {
		if (Array.isArray(this.listeners_[e])) {
			const r = [...this.listeners_[e]]
			for (let i = 0; i < r.length; i++) r[i].callback.apply(r[i].context, n)
		}
	}
	on(e, n, r) {
		this.validateEventType_(e),
			(this.listeners_[e] = this.listeners_[e] || []),
			this.listeners_[e].push({ callback: n, context: r })
		const i = this.getInitialEvent(e)
		i && n.apply(r, i)
	}
	off(e, n, r) {
		this.validateEventType_(e)
		const i = this.listeners_[e] || []
		for (let s = 0; s < i.length; s++)
			if (i[s].callback === n && (!r || r === i[s].context)) {
				i.splice(s, 1)
				return
			}
	}
	validateEventType_(e) {
		w(
			this.allowedEvents_.find((n) => n === e),
			'Unknown event: ' + e
		)
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hs extends mm {
	constructor() {
		super(['online']),
			(this.online_ = !0),
			typeof window < 'u' &&
				typeof window.addEventListener < 'u' &&
				!Fp() &&
				(window.addEventListener(
					'online',
					() => {
						this.online_ || ((this.online_ = !0), this.trigger('online', !0))
					},
					!1
				),
				window.addEventListener(
					'offline',
					() => {
						this.online_ && ((this.online_ = !1), this.trigger('online', !1))
					},
					!1
				))
	}
	static getInstance() {
		return new Hs()
	}
	getInitialEvent(e) {
		return w(e === 'online', 'Unknown event type: ' + e), [this.online_]
	}
	currentlyOnline() {
		return this.online_
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const zd = 32,
	Ud = 768
class W {
	constructor(e, n) {
		if (n === void 0) {
			this.pieces_ = e.split('/')
			let r = 0
			for (let i = 0; i < this.pieces_.length; i++)
				this.pieces_[i].length > 0 && ((this.pieces_[r] = this.pieces_[i]), r++)
			;(this.pieces_.length = r), (this.pieceNum_ = 0)
		} else (this.pieces_ = e), (this.pieceNum_ = n)
	}
	toString() {
		let e = ''
		for (let n = this.pieceNum_; n < this.pieces_.length; n++)
			this.pieces_[n] !== '' && (e += '/' + this.pieces_[n])
		return e || '/'
	}
}
function U() {
	return new W('')
}
function O(t) {
	return t.pieceNum_ >= t.pieces_.length ? null : t.pieces_[t.pieceNum_]
}
function Kt(t) {
	return t.pieces_.length - t.pieceNum_
}
function H(t) {
	let e = t.pieceNum_
	return e < t.pieces_.length && e++, new W(t.pieces_, e)
}
function gm(t) {
	return t.pieceNum_ < t.pieces_.length ? t.pieces_[t.pieces_.length - 1] : null
}
function oC(t) {
	let e = ''
	for (let n = t.pieceNum_; n < t.pieces_.length; n++)
		t.pieces_[n] !== '' && (e += '/' + encodeURIComponent(String(t.pieces_[n])))
	return e || '/'
}
function _m(t, e = 0) {
	return t.pieces_.slice(t.pieceNum_ + e)
}
function ym(t) {
	if (t.pieceNum_ >= t.pieces_.length) return null
	const e = []
	for (let n = t.pieceNum_; n < t.pieces_.length - 1; n++) e.push(t.pieces_[n])
	return new W(e, 0)
}
function oe(t, e) {
	const n = []
	for (let r = t.pieceNum_; r < t.pieces_.length; r++) n.push(t.pieces_[r])
	if (e instanceof W)
		for (let r = e.pieceNum_; r < e.pieces_.length; r++) n.push(e.pieces_[r])
	else {
		const r = e.split('/')
		for (let i = 0; i < r.length; i++) r[i].length > 0 && n.push(r[i])
	}
	return new W(n, 0)
}
function M(t) {
	return t.pieceNum_ >= t.pieces_.length
}
function Re(t, e) {
	const n = O(t),
		r = O(e)
	if (n === null) return e
	if (n === r) return Re(H(t), H(e))
	throw new Error(
		'INTERNAL ERROR: innerPath (' + e + ') is not within outerPath (' + t + ')'
	)
}
function Ru(t, e) {
	if (Kt(t) !== Kt(e)) return !1
	for (let n = t.pieceNum_, r = e.pieceNum_; n <= t.pieces_.length; n++, r++)
		if (t.pieces_[n] !== e.pieces_[r]) return !1
	return !0
}
function tt(t, e) {
	let n = t.pieceNum_,
		r = e.pieceNum_
	if (Kt(t) > Kt(e)) return !1
	for (; n < t.pieces_.length; ) {
		if (t.pieces_[n] !== e.pieces_[r]) return !1
		++n, ++r
	}
	return !0
}
class lC {
	constructor(e, n) {
		;(this.errorPrefix_ = n),
			(this.parts_ = _m(e, 0)),
			(this.byteLength_ = Math.max(1, this.parts_.length))
		for (let r = 0; r < this.parts_.length; r++)
			this.byteLength_ += yo(this.parts_[r])
		vm(this)
	}
}
function aC(t, e) {
	t.parts_.length > 0 && (t.byteLength_ += 1),
		t.parts_.push(e),
		(t.byteLength_ += yo(e)),
		vm(t)
}
function uC(t) {
	const e = t.parts_.pop()
	;(t.byteLength_ -= yo(e)), t.parts_.length > 0 && (t.byteLength_ -= 1)
}
function vm(t) {
	if (t.byteLength_ > Ud)
		throw new Error(
			t.errorPrefix_ +
				'has a key path longer than ' +
				Ud +
				' bytes (' +
				t.byteLength_ +
				').'
		)
	if (t.parts_.length > zd)
		throw new Error(
			t.errorPrefix_ +
				'path specified exceeds the maximum depth that can be written (' +
				zd +
				') or object contains a cycle ' +
				sn(t)
		)
}
function sn(t) {
	return t.parts_.length === 0 ? '' : "in property '" + t.parts_.join('.') + "'"
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pu extends mm {
	constructor() {
		super(['visible'])
		let e, n
		typeof document < 'u' &&
			typeof document.addEventListener < 'u' &&
			(typeof document.hidden < 'u'
				? ((n = 'visibilitychange'), (e = 'hidden'))
				: typeof document.mozHidden < 'u'
				? ((n = 'mozvisibilitychange'), (e = 'mozHidden'))
				: typeof document.msHidden < 'u'
				? ((n = 'msvisibilitychange'), (e = 'msHidden'))
				: typeof document.webkitHidden < 'u' &&
				  ((n = 'webkitvisibilitychange'), (e = 'webkitHidden'))),
			(this.visible_ = !0),
			n &&
				document.addEventListener(
					n,
					() => {
						const r = !document[e]
						r !== this.visible_ &&
							((this.visible_ = r), this.trigger('visible', r))
					},
					!1
				)
	}
	static getInstance() {
		return new Pu()
	}
	getInitialEvent(e) {
		return w(e === 'visible', 'Unknown event type: ' + e), [this.visible_]
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Pr = 1e3,
	cC = 60 * 5 * 1e3,
	jd = 30 * 1e3,
	dC = 1.3,
	fC = 3e4,
	hC = 'server_kill',
	Bd = 3
class yt extends pm {
	constructor(e, n, r, i, s, o, l, a) {
		if (
			(super(),
			(this.repoInfo_ = e),
			(this.applicationId_ = n),
			(this.onDataUpdate_ = r),
			(this.onConnectStatus_ = i),
			(this.onServerInfoUpdate_ = s),
			(this.authTokenProvider_ = o),
			(this.appCheckTokenProvider_ = l),
			(this.authOverride_ = a),
			(this.id = yt.nextPersistentConnectionId_++),
			(this.log_ = Di('p:' + this.id + ':')),
			(this.interruptReasons_ = {}),
			(this.listens = new Map()),
			(this.outstandingPuts_ = []),
			(this.outstandingGets_ = []),
			(this.outstandingPutCount_ = 0),
			(this.outstandingGetCount_ = 0),
			(this.onDisconnectRequestQueue_ = []),
			(this.connected_ = !1),
			(this.reconnectDelay_ = Pr),
			(this.maxReconnectDelay_ = cC),
			(this.securityDebugCallback_ = null),
			(this.lastSessionId = null),
			(this.establishConnectionTimer_ = null),
			(this.visible_ = !1),
			(this.requestCBHash_ = {}),
			(this.requestNumber_ = 0),
			(this.realtime_ = null),
			(this.authToken_ = null),
			(this.appCheckToken_ = null),
			(this.forceTokenRefresh_ = !1),
			(this.invalidAuthTokenCount_ = 0),
			(this.invalidAppCheckTokenCount_ = 0),
			(this.firstConnection_ = !0),
			(this.lastConnectionAttemptTime_ = null),
			(this.lastConnectionEstablishedTime_ = null),
			a && !zp())
		)
			throw new Error(
				'Auth override specified in options, but not supported on non Node.js platforms'
			)
		Pu.getInstance().on('visible', this.onVisible_, this),
			e.host.indexOf('fblocal') === -1 &&
				Hs.getInstance().on('online', this.onOnline_, this)
	}
	sendRequest(e, n, r) {
		const i = ++this.requestNumber_,
			s = { r: i, a: e, b: n }
		this.log_(fe(s)),
			w(
				this.connected_,
				"sendRequest call when we're not connected not allowed."
			),
			this.realtime_.sendRequest(s),
			r && (this.requestCBHash_[i] = r)
	}
	get(e) {
		this.initConnection_()
		const n = new _o(),
			i = {
				action: 'g',
				request: { p: e._path.toString(), q: e._queryObject },
				onComplete: (o) => {
					const l = o.d
					o.s === 'ok' ? n.resolve(l) : n.reject(l)
				}
			}
		this.outstandingGets_.push(i), this.outstandingGetCount_++
		const s = this.outstandingGets_.length - 1
		return this.connected_ && this.sendGet_(s), n.promise
	}
	listen(e, n, r, i) {
		this.initConnection_()
		const s = e._queryIdentifier,
			o = e._path.toString()
		this.log_('Listen called for ' + o + ' ' + s),
			this.listens.has(o) || this.listens.set(o, new Map()),
			w(
				e._queryParams.isDefault() || !e._queryParams.loadsAllData(),
				'listen() called for non-default but complete query'
			),
			w(
				!this.listens.get(o).has(s),
				'listen() called twice for same path/queryId.'
			)
		const l = { onComplete: i, hashFn: n, query: e, tag: r }
		this.listens.get(o).set(s, l), this.connected_ && this.sendListen_(l)
	}
	sendGet_(e) {
		const n = this.outstandingGets_[e]
		this.sendRequest('g', n.request, (r) => {
			delete this.outstandingGets_[e],
				this.outstandingGetCount_--,
				this.outstandingGetCount_ === 0 && (this.outstandingGets_ = []),
				n.onComplete && n.onComplete(r)
		})
	}
	sendListen_(e) {
		const n = e.query,
			r = n._path.toString(),
			i = n._queryIdentifier
		this.log_('Listen on ' + r + ' for ' + i)
		const s = { p: r },
			o = 'q'
		e.tag && ((s.q = n._queryObject), (s.t = e.tag)),
			(s.h = e.hashFn()),
			this.sendRequest(o, s, (l) => {
				const a = l.d,
					u = l.s
				yt.warnOnListenWarnings_(a, n),
					(this.listens.get(r) && this.listens.get(r).get(i)) === e &&
						(this.log_('listen response', l),
						u !== 'ok' && this.removeListen_(r, i),
						e.onComplete && e.onComplete(u, a))
			})
	}
	static warnOnListenWarnings_(e, n) {
		if (e && typeof e == 'object' && It(e, 'w')) {
			const r = or(e, 'w')
			if (Array.isArray(r) && ~r.indexOf('no_index')) {
				const i = '".indexOn": "' + n._queryParams.getIndex().toString() + '"',
					s = n._path.toString()
				Me(
					`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`
				)
			}
		}
	}
	refreshAuthToken(e) {
		;(this.authToken_ = e),
			this.log_('Auth token refreshed'),
			this.authToken_
				? this.tryAuth()
				: this.connected_ && this.sendRequest('unauth', {}, () => {}),
			this.reduceReconnectDelayIfAdminCredential_(e)
	}
	reduceReconnectDelayIfAdminCredential_(e) {
		;((e && e.length === 40) || ov(e)) &&
			(this.log_(
				'Admin auth credential detected.  Reducing max reconnect time.'
			),
			(this.maxReconnectDelay_ = jd))
	}
	refreshAppCheckToken(e) {
		;(this.appCheckToken_ = e),
			this.log_('App check token refreshed'),
			this.appCheckToken_
				? this.tryAppCheck()
				: this.connected_ && this.sendRequest('unappeck', {}, () => {})
	}
	tryAuth() {
		if (this.connected_ && this.authToken_) {
			const e = this.authToken_,
				n = sv(e) ? 'auth' : 'gauth',
				r = { cred: e }
			this.authOverride_ === null
				? (r.noauth = !0)
				: typeof this.authOverride_ == 'object' &&
				  (r.authvar = this.authOverride_),
				this.sendRequest(n, r, (i) => {
					const s = i.s,
						o = i.d || 'error'
					this.authToken_ === e &&
						(s === 'ok'
							? (this.invalidAuthTokenCount_ = 0)
							: this.onAuthRevoked_(s, o))
				})
		}
	}
	tryAppCheck() {
		this.connected_ &&
			this.appCheckToken_ &&
			this.sendRequest('appcheck', { token: this.appCheckToken_ }, (e) => {
				const n = e.s,
					r = e.d || 'error'
				n === 'ok'
					? (this.invalidAppCheckTokenCount_ = 0)
					: this.onAppCheckRevoked_(n, r)
			})
	}
	unlisten(e, n) {
		const r = e._path.toString(),
			i = e._queryIdentifier
		this.log_('Unlisten called for ' + r + ' ' + i),
			w(
				e._queryParams.isDefault() || !e._queryParams.loadsAllData(),
				'unlisten() called for non-default but complete query'
			),
			this.removeListen_(r, i) &&
				this.connected_ &&
				this.sendUnlisten_(r, i, e._queryObject, n)
	}
	sendUnlisten_(e, n, r, i) {
		this.log_('Unlisten on ' + e + ' for ' + n)
		const s = { p: e },
			o = 'n'
		i && ((s.q = r), (s.t = i)), this.sendRequest(o, s)
	}
	onDisconnectPut(e, n, r) {
		this.initConnection_(),
			this.connected_
				? this.sendOnDisconnect_('o', e, n, r)
				: this.onDisconnectRequestQueue_.push({
						pathString: e,
						action: 'o',
						data: n,
						onComplete: r
				  })
	}
	onDisconnectMerge(e, n, r) {
		this.initConnection_(),
			this.connected_
				? this.sendOnDisconnect_('om', e, n, r)
				: this.onDisconnectRequestQueue_.push({
						pathString: e,
						action: 'om',
						data: n,
						onComplete: r
				  })
	}
	onDisconnectCancel(e, n) {
		this.initConnection_(),
			this.connected_
				? this.sendOnDisconnect_('oc', e, null, n)
				: this.onDisconnectRequestQueue_.push({
						pathString: e,
						action: 'oc',
						data: null,
						onComplete: n
				  })
	}
	sendOnDisconnect_(e, n, r, i) {
		const s = { p: n, d: r }
		this.log_('onDisconnect ' + e, s),
			this.sendRequest(e, s, (o) => {
				i &&
					setTimeout(() => {
						i(o.s, o.d)
					}, Math.floor(0))
			})
	}
	put(e, n, r, i) {
		this.putInternal('p', e, n, r, i)
	}
	merge(e, n, r, i) {
		this.putInternal('m', e, n, r, i)
	}
	putInternal(e, n, r, i, s) {
		this.initConnection_()
		const o = { p: n, d: r }
		s !== void 0 && (o.h = s),
			this.outstandingPuts_.push({ action: e, request: o, onComplete: i }),
			this.outstandingPutCount_++
		const l = this.outstandingPuts_.length - 1
		this.connected_ ? this.sendPut_(l) : this.log_('Buffering put: ' + n)
	}
	sendPut_(e) {
		const n = this.outstandingPuts_[e].action,
			r = this.outstandingPuts_[e].request,
			i = this.outstandingPuts_[e].onComplete
		;(this.outstandingPuts_[e].queued = this.connected_),
			this.sendRequest(n, r, (s) => {
				this.log_(n + ' response', s),
					delete this.outstandingPuts_[e],
					this.outstandingPutCount_--,
					this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = []),
					i && i(s.s, s.d)
			})
	}
	reportStats(e) {
		if (this.connected_) {
			const n = { c: e }
			this.log_('reportStats', n),
				this.sendRequest('s', n, (r) => {
					if (r.s !== 'ok') {
						const s = r.d
						this.log_('reportStats', 'Error sending stats: ' + s)
					}
				})
		}
	}
	onDataMessage_(e) {
		if ('r' in e) {
			this.log_('from server: ' + fe(e))
			const n = e.r,
				r = this.requestCBHash_[n]
			r && (delete this.requestCBHash_[n], r(e.b))
		} else {
			if ('error' in e) throw 'A server-side error has occurred: ' + e.error
			'a' in e && this.onDataPush_(e.a, e.b)
		}
	}
	onDataPush_(e, n) {
		this.log_('handleServerMessage', e, n),
			e === 'd'
				? this.onDataUpdate_(n.p, n.d, !1, n.t)
				: e === 'm'
				? this.onDataUpdate_(n.p, n.d, !0, n.t)
				: e === 'c'
				? this.onListenRevoked_(n.p, n.q)
				: e === 'ac'
				? this.onAuthRevoked_(n.s, n.d)
				: e === 'apc'
				? this.onAppCheckRevoked_(n.s, n.d)
				: e === 'sd'
				? this.onSecurityDebugPacket_(n)
				: ga(
						'Unrecognized action received from server: ' +
							fe(e) +
							`
Are you using the latest client?`
				  )
	}
	onReady_(e, n) {
		this.log_('connection ready'),
			(this.connected_ = !0),
			(this.lastConnectionEstablishedTime_ = new Date().getTime()),
			this.handleTimestamp_(e),
			(this.lastSessionId = n),
			this.firstConnection_ && this.sendConnectStats_(),
			this.restoreState_(),
			(this.firstConnection_ = !1),
			this.onConnectStatus_(!0)
	}
	scheduleConnect_(e) {
		w(
			!this.realtime_,
			"Scheduling a connect when we're already connected/ing?"
		),
			this.establishConnectionTimer_ &&
				clearTimeout(this.establishConnectionTimer_),
			(this.establishConnectionTimer_ = setTimeout(() => {
				;(this.establishConnectionTimer_ = null), this.establishConnection_()
			}, Math.floor(e)))
	}
	initConnection_() {
		!this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0)
	}
	onVisible_(e) {
		e &&
			!this.visible_ &&
			this.reconnectDelay_ === this.maxReconnectDelay_ &&
			(this.log_('Window became visible.  Reducing delay.'),
			(this.reconnectDelay_ = Pr),
			this.realtime_ || this.scheduleConnect_(0)),
			(this.visible_ = e)
	}
	onOnline_(e) {
		e
			? (this.log_('Browser went online.'),
			  (this.reconnectDelay_ = Pr),
			  this.realtime_ || this.scheduleConnect_(0))
			: (this.log_('Browser went offline.  Killing connection.'),
			  this.realtime_ && this.realtime_.close())
	}
	onRealtimeDisconnect_() {
		if (
			(this.log_('data client disconnected'),
			(this.connected_ = !1),
			(this.realtime_ = null),
			this.cancelSentTransactions_(),
			(this.requestCBHash_ = {}),
			this.shouldReconnect_())
		) {
			this.visible_
				? this.lastConnectionEstablishedTime_ &&
				  (new Date().getTime() - this.lastConnectionEstablishedTime_ > fC &&
						(this.reconnectDelay_ = Pr),
				  (this.lastConnectionEstablishedTime_ = null))
				: (this.log_("Window isn't visible.  Delaying reconnect."),
				  (this.reconnectDelay_ = this.maxReconnectDelay_),
				  (this.lastConnectionAttemptTime_ = new Date().getTime()))
			const e = new Date().getTime() - this.lastConnectionAttemptTime_
			let n = Math.max(0, this.reconnectDelay_ - e)
			;(n = Math.random() * n),
				this.log_('Trying to reconnect in ' + n + 'ms'),
				this.scheduleConnect_(n),
				(this.reconnectDelay_ = Math.min(
					this.maxReconnectDelay_,
					this.reconnectDelay_ * dC
				))
		}
		this.onConnectStatus_(!1)
	}
	async establishConnection_() {
		if (this.shouldReconnect_()) {
			this.log_('Making a connection attempt'),
				(this.lastConnectionAttemptTime_ = new Date().getTime()),
				(this.lastConnectionEstablishedTime_ = null)
			const e = this.onDataMessage_.bind(this),
				n = this.onReady_.bind(this),
				r = this.onRealtimeDisconnect_.bind(this),
				i = this.id + ':' + yt.nextConnectionId_++,
				s = this.lastSessionId
			let o = !1,
				l = null
			const a = function () {
					l ? l.close() : ((o = !0), r())
				},
				u = function (c) {
					w(l, "sendRequest call when we're not connected not allowed."),
						l.sendRequest(c)
				}
			this.realtime_ = { close: a, sendRequest: u }
			const f = this.forceTokenRefresh_
			this.forceTokenRefresh_ = !1
			try {
				const [c, d] = await Promise.all([
					this.authTokenProvider_.getToken(f),
					this.appCheckTokenProvider_.getToken(f)
				])
				o
					? we('getToken() completed but was canceled')
					: (we('getToken() completed. Creating connection.'),
					  (this.authToken_ = c && c.accessToken),
					  (this.appCheckToken_ = d && d.token),
					  (l = new sC(
							i,
							this.repoInfo_,
							this.applicationId_,
							this.appCheckToken_,
							this.authToken_,
							e,
							n,
							r,
							(g) => {
								Me(g + ' (' + this.repoInfo_.toString() + ')'),
									this.interrupt(hC)
							},
							s
					  )))
			} catch (c) {
				this.log_('Failed to get token: ' + c),
					o || (this.repoInfo_.nodeAdmin && Me(c), a())
			}
		}
	}
	interrupt(e) {
		we('Interrupting connection for reason: ' + e),
			(this.interruptReasons_[e] = !0),
			this.realtime_
				? this.realtime_.close()
				: (this.establishConnectionTimer_ &&
						(clearTimeout(this.establishConnectionTimer_),
						(this.establishConnectionTimer_ = null)),
				  this.connected_ && this.onRealtimeDisconnect_())
	}
	resume(e) {
		we('Resuming connection for reason: ' + e),
			delete this.interruptReasons_[e],
			_d(this.interruptReasons_) &&
				((this.reconnectDelay_ = Pr),
				this.realtime_ || this.scheduleConnect_(0))
	}
	handleTimestamp_(e) {
		const n = e - new Date().getTime()
		this.onServerInfoUpdate_({ serverTimeOffset: n })
	}
	cancelSentTransactions_() {
		for (let e = 0; e < this.outstandingPuts_.length; e++) {
			const n = this.outstandingPuts_[e]
			n &&
				'h' in n.request &&
				n.queued &&
				(n.onComplete && n.onComplete('disconnect'),
				delete this.outstandingPuts_[e],
				this.outstandingPutCount_--)
		}
		this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = [])
	}
	onListenRevoked_(e, n) {
		let r
		n ? (r = n.map((s) => Tu(s)).join('$')) : (r = 'default')
		const i = this.removeListen_(e, r)
		i && i.onComplete && i.onComplete('permission_denied')
	}
	removeListen_(e, n) {
		const r = new W(e).toString()
		let i
		if (this.listens.has(r)) {
			const s = this.listens.get(r)
			;(i = s.get(n)), s.delete(n), s.size === 0 && this.listens.delete(r)
		} else i = void 0
		return i
	}
	onAuthRevoked_(e, n) {
		we('Auth token revoked: ' + e + '/' + n),
			(this.authToken_ = null),
			(this.forceTokenRefresh_ = !0),
			this.realtime_.close(),
			(e === 'invalid_token' || e === 'permission_denied') &&
				(this.invalidAuthTokenCount_++,
				this.invalidAuthTokenCount_ >= Bd &&
					((this.reconnectDelay_ = jd),
					this.authTokenProvider_.notifyForInvalidToken()))
	}
	onAppCheckRevoked_(e, n) {
		we('App check token revoked: ' + e + '/' + n),
			(this.appCheckToken_ = null),
			(this.forceTokenRefresh_ = !0),
			(e === 'invalid_token' || e === 'permission_denied') &&
				(this.invalidAppCheckTokenCount_++,
				this.invalidAppCheckTokenCount_ >= Bd &&
					this.appCheckTokenProvider_.notifyForInvalidToken())
	}
	onSecurityDebugPacket_(e) {
		this.securityDebugCallback_
			? this.securityDebugCallback_(e)
			: 'msg' in e &&
			  console.log(
					'FIREBASE: ' +
						e.msg.replace(
							`
`,
							`
FIREBASE: `
						)
			  )
	}
	restoreState_() {
		this.tryAuth(), this.tryAppCheck()
		for (const e of this.listens.values())
			for (const n of e.values()) this.sendListen_(n)
		for (let e = 0; e < this.outstandingPuts_.length; e++)
			this.outstandingPuts_[e] && this.sendPut_(e)
		for (; this.onDisconnectRequestQueue_.length; ) {
			const e = this.onDisconnectRequestQueue_.shift()
			this.sendOnDisconnect_(e.action, e.pathString, e.data, e.onComplete)
		}
		for (let e = 0; e < this.outstandingGets_.length; e++)
			this.outstandingGets_[e] && this.sendGet_(e)
	}
	sendConnectStats_() {
		const e = {}
		let n = 'js'
		;(e['sdk.' + n + '.' + Qp.replace(/\./g, '-')] = 1),
			Fp()
				? (e['framework.cordova'] = 1)
				: Zy() && (e['framework.reactnative'] = 1),
			this.reportStats(e)
	}
	shouldReconnect_() {
		const e = Hs.getInstance().currentlyOnline()
		return _d(this.interruptReasons_) && e
	}
}
yt.nextPersistentConnectionId_ = 0
yt.nextConnectionId_ = 0
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class A {
	constructor(e, n) {
		;(this.name = e), (this.node = n)
	}
	static Wrap(e, n) {
		return new A(e, n)
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vo {
	getCompare() {
		return this.compare.bind(this)
	}
	indexedValueChanged(e, n) {
		const r = new A(lr, e),
			i = new A(lr, n)
		return this.compare(r, i) !== 0
	}
	minPost() {
		return A.MIN
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let es
class Cm extends vo {
	static get __EMPTY_NODE() {
		return es
	}
	static set __EMPTY_NODE(e) {
		es = e
	}
	compare(e, n) {
		return gr(e.name, n.name)
	}
	isDefinedOn(e) {
		throw pr('KeyIndex.isDefinedOn not expected to be called.')
	}
	indexedValueChanged(e, n) {
		return !1
	}
	minPost() {
		return A.MIN
	}
	maxPost() {
		return new A(Cn, es)
	}
	makePost(e, n) {
		return (
			w(typeof e == 'string', 'KeyIndex indexValue must always be a string.'),
			new A(e, es)
		)
	}
	toString() {
		return '.key'
	}
}
const Xn = new Cm()
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ts {
	constructor(e, n, r, i, s = null) {
		;(this.isReverse_ = i), (this.resultGenerator_ = s), (this.nodeStack_ = [])
		let o = 1
		for (; !e.isEmpty(); )
			if (((e = e), (o = n ? r(e.key, n) : 1), i && (o *= -1), o < 0))
				this.isReverse_ ? (e = e.left) : (e = e.right)
			else if (o === 0) {
				this.nodeStack_.push(e)
				break
			} else
				this.nodeStack_.push(e), this.isReverse_ ? (e = e.right) : (e = e.left)
	}
	getNext() {
		if (this.nodeStack_.length === 0) return null
		let e = this.nodeStack_.pop(),
			n
		if (
			(this.resultGenerator_
				? (n = this.resultGenerator_(e.key, e.value))
				: (n = { key: e.key, value: e.value }),
			this.isReverse_)
		)
			for (e = e.left; !e.isEmpty(); ) this.nodeStack_.push(e), (e = e.right)
		else for (e = e.right; !e.isEmpty(); ) this.nodeStack_.push(e), (e = e.left)
		return n
	}
	hasNext() {
		return this.nodeStack_.length > 0
	}
	peek() {
		if (this.nodeStack_.length === 0) return null
		const e = this.nodeStack_[this.nodeStack_.length - 1]
		return this.resultGenerator_
			? this.resultGenerator_(e.key, e.value)
			: { key: e.key, value: e.value }
	}
}
class de {
	constructor(e, n, r, i, s) {
		;(this.key = e),
			(this.value = n),
			(this.color = r ?? de.RED),
			(this.left = i ?? Pe.EMPTY_NODE),
			(this.right = s ?? Pe.EMPTY_NODE)
	}
	copy(e, n, r, i, s) {
		return new de(
			e ?? this.key,
			n ?? this.value,
			r ?? this.color,
			i ?? this.left,
			s ?? this.right
		)
	}
	count() {
		return this.left.count() + 1 + this.right.count()
	}
	isEmpty() {
		return !1
	}
	inorderTraversal(e) {
		return (
			this.left.inorderTraversal(e) ||
			!!e(this.key, this.value) ||
			this.right.inorderTraversal(e)
		)
	}
	reverseTraversal(e) {
		return (
			this.right.reverseTraversal(e) ||
			e(this.key, this.value) ||
			this.left.reverseTraversal(e)
		)
	}
	min_() {
		return this.left.isEmpty() ? this : this.left.min_()
	}
	minKey() {
		return this.min_().key
	}
	maxKey() {
		return this.right.isEmpty() ? this.key : this.right.maxKey()
	}
	insert(e, n, r) {
		let i = this
		const s = r(e, i.key)
		return (
			s < 0
				? (i = i.copy(null, null, null, i.left.insert(e, n, r), null))
				: s === 0
				? (i = i.copy(null, n, null, null, null))
				: (i = i.copy(null, null, null, null, i.right.insert(e, n, r))),
			i.fixUp_()
		)
	}
	removeMin_() {
		if (this.left.isEmpty()) return Pe.EMPTY_NODE
		let e = this
		return (
			!e.left.isRed_() && !e.left.left.isRed_() && (e = e.moveRedLeft_()),
			(e = e.copy(null, null, null, e.left.removeMin_(), null)),
			e.fixUp_()
		)
	}
	remove(e, n) {
		let r, i
		if (((r = this), n(e, r.key) < 0))
			!r.left.isEmpty() &&
				!r.left.isRed_() &&
				!r.left.left.isRed_() &&
				(r = r.moveRedLeft_()),
				(r = r.copy(null, null, null, r.left.remove(e, n), null))
		else {
			if (
				(r.left.isRed_() && (r = r.rotateRight_()),
				!r.right.isEmpty() &&
					!r.right.isRed_() &&
					!r.right.left.isRed_() &&
					(r = r.moveRedRight_()),
				n(e, r.key) === 0)
			) {
				if (r.right.isEmpty()) return Pe.EMPTY_NODE
				;(i = r.right.min_()),
					(r = r.copy(i.key, i.value, null, null, r.right.removeMin_()))
			}
			r = r.copy(null, null, null, null, r.right.remove(e, n))
		}
		return r.fixUp_()
	}
	isRed_() {
		return this.color
	}
	fixUp_() {
		let e = this
		return (
			e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()),
			e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()),
			e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()),
			e
		)
	}
	moveRedLeft_() {
		let e = this.colorFlip_()
		return (
			e.right.left.isRed_() &&
				((e = e.copy(null, null, null, null, e.right.rotateRight_())),
				(e = e.rotateLeft_()),
				(e = e.colorFlip_())),
			e
		)
	}
	moveRedRight_() {
		let e = this.colorFlip_()
		return (
			e.left.left.isRed_() && ((e = e.rotateRight_()), (e = e.colorFlip_())), e
		)
	}
	rotateLeft_() {
		const e = this.copy(null, null, de.RED, null, this.right.left)
		return this.right.copy(null, null, this.color, e, null)
	}
	rotateRight_() {
		const e = this.copy(null, null, de.RED, this.left.right, null)
		return this.left.copy(null, null, this.color, null, e)
	}
	colorFlip_() {
		const e = this.left.copy(null, null, !this.left.color, null, null),
			n = this.right.copy(null, null, !this.right.color, null, null)
		return this.copy(null, null, !this.color, e, n)
	}
	checkMaxDepth_() {
		const e = this.check_()
		return Math.pow(2, e) <= this.count() + 1
	}
	check_() {
		if (this.isRed_() && this.left.isRed_())
			throw new Error(
				'Red node has red child(' + this.key + ',' + this.value + ')'
			)
		if (this.right.isRed_())
			throw new Error(
				'Right child of (' + this.key + ',' + this.value + ') is red'
			)
		const e = this.left.check_()
		if (e !== this.right.check_()) throw new Error('Black depths differ')
		return e + (this.isRed_() ? 0 : 1)
	}
}
de.RED = !0
de.BLACK = !1
class pC {
	copy(e, n, r, i, s) {
		return this
	}
	insert(e, n, r) {
		return new de(e, n, null)
	}
	remove(e, n) {
		return this
	}
	count() {
		return 0
	}
	isEmpty() {
		return !0
	}
	inorderTraversal(e) {
		return !1
	}
	reverseTraversal(e) {
		return !1
	}
	minKey() {
		return null
	}
	maxKey() {
		return null
	}
	check_() {
		return 0
	}
	isRed_() {
		return !1
	}
}
class Pe {
	constructor(e, n = Pe.EMPTY_NODE) {
		;(this.comparator_ = e), (this.root_ = n)
	}
	insert(e, n) {
		return new Pe(
			this.comparator_,
			this.root_
				.insert(e, n, this.comparator_)
				.copy(null, null, de.BLACK, null, null)
		)
	}
	remove(e) {
		return new Pe(
			this.comparator_,
			this.root_
				.remove(e, this.comparator_)
				.copy(null, null, de.BLACK, null, null)
		)
	}
	get(e) {
		let n,
			r = this.root_
		for (; !r.isEmpty(); ) {
			if (((n = this.comparator_(e, r.key)), n === 0)) return r.value
			n < 0 ? (r = r.left) : n > 0 && (r = r.right)
		}
		return null
	}
	getPredecessorKey(e) {
		let n,
			r = this.root_,
			i = null
		for (; !r.isEmpty(); )
			if (((n = this.comparator_(e, r.key)), n === 0)) {
				if (r.left.isEmpty()) return i ? i.key : null
				for (r = r.left; !r.right.isEmpty(); ) r = r.right
				return r.key
			} else n < 0 ? (r = r.left) : n > 0 && ((i = r), (r = r.right))
		throw new Error(
			'Attempted to find predecessor key for a nonexistent key.  What gives?'
		)
	}
	isEmpty() {
		return this.root_.isEmpty()
	}
	count() {
		return this.root_.count()
	}
	minKey() {
		return this.root_.minKey()
	}
	maxKey() {
		return this.root_.maxKey()
	}
	inorderTraversal(e) {
		return this.root_.inorderTraversal(e)
	}
	reverseTraversal(e) {
		return this.root_.reverseTraversal(e)
	}
	getIterator(e) {
		return new ts(this.root_, null, this.comparator_, !1, e)
	}
	getIteratorFrom(e, n) {
		return new ts(this.root_, e, this.comparator_, !1, n)
	}
	getReverseIteratorFrom(e, n) {
		return new ts(this.root_, e, this.comparator_, !0, n)
	}
	getReverseIterator(e) {
		return new ts(this.root_, null, this.comparator_, !0, e)
	}
}
Pe.EMPTY_NODE = new pC()
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function mC(t, e) {
	return gr(t.name, e.name)
}
function Du(t, e) {
	return gr(t, e)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ya
function gC(t) {
	ya = t
}
const wm = function (t) {
		return typeof t == 'number' ? 'number:' + Xp(t) : 'string:' + t
	},
	Em = function (t) {
		if (t.isLeafNode()) {
			const e = t.val()
			w(
				typeof e == 'string' ||
					typeof e == 'number' ||
					(typeof e == 'object' && It(e, '.sv')),
				'Priority must be a string or number.'
			)
		} else w(t === ya || t.isEmpty(), 'priority of unexpected type.')
		w(
			t === ya || t.getPriority().isEmpty(),
			"Priority nodes can't have a priority of their own."
		)
	}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Wd
class ue {
	constructor(e, n = ue.__childrenNodeConstructor.EMPTY_NODE) {
		;(this.value_ = e),
			(this.priorityNode_ = n),
			(this.lazyHash_ = null),
			w(
				this.value_ !== void 0 && this.value_ !== null,
				"LeafNode shouldn't be created with null/undefined value."
			),
			Em(this.priorityNode_)
	}
	static set __childrenNodeConstructor(e) {
		Wd = e
	}
	static get __childrenNodeConstructor() {
		return Wd
	}
	isLeafNode() {
		return !0
	}
	getPriority() {
		return this.priorityNode_
	}
	updatePriority(e) {
		return new ue(this.value_, e)
	}
	getImmediateChild(e) {
		return e === '.priority'
			? this.priorityNode_
			: ue.__childrenNodeConstructor.EMPTY_NODE
	}
	getChild(e) {
		return M(e)
			? this
			: O(e) === '.priority'
			? this.priorityNode_
			: ue.__childrenNodeConstructor.EMPTY_NODE
	}
	hasChild() {
		return !1
	}
	getPredecessorChildName(e, n) {
		return null
	}
	updateImmediateChild(e, n) {
		return e === '.priority'
			? this.updatePriority(n)
			: n.isEmpty() && e !== '.priority'
			? this
			: ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
					e,
					n
			  ).updatePriority(this.priorityNode_)
	}
	updateChild(e, n) {
		const r = O(e)
		return r === null
			? n
			: n.isEmpty() && r !== '.priority'
			? this
			: (w(
					r !== '.priority' || Kt(e) === 1,
					'.priority must be the last token in a path'
			  ),
			  this.updateImmediateChild(
					r,
					ue.__childrenNodeConstructor.EMPTY_NODE.updateChild(H(e), n)
			  ))
	}
	isEmpty() {
		return !1
	}
	numChildren() {
		return 0
	}
	forEachChild(e, n) {
		return !1
	}
	val(e) {
		return e && !this.getPriority().isEmpty()
			? { '.value': this.getValue(), '.priority': this.getPriority().val() }
			: this.getValue()
	}
	hash() {
		if (this.lazyHash_ === null) {
			let e = ''
			this.priorityNode_.isEmpty() ||
				(e += 'priority:' + wm(this.priorityNode_.val()) + ':')
			const n = typeof this.value_
			;(e += n + ':'),
				n === 'number' ? (e += Xp(this.value_)) : (e += this.value_),
				(this.lazyHash_ = Kp(e))
		}
		return this.lazyHash_
	}
	getValue() {
		return this.value_
	}
	compareTo(e) {
		return e === ue.__childrenNodeConstructor.EMPTY_NODE
			? 1
			: e instanceof ue.__childrenNodeConstructor
			? -1
			: (w(e.isLeafNode(), 'Unknown node type'), this.compareToLeafNode_(e))
	}
	compareToLeafNode_(e) {
		const n = typeof e.value_,
			r = typeof this.value_,
			i = ue.VALUE_TYPE_ORDER.indexOf(n),
			s = ue.VALUE_TYPE_ORDER.indexOf(r)
		return (
			w(i >= 0, 'Unknown leaf type: ' + n),
			w(s >= 0, 'Unknown leaf type: ' + r),
			i === s
				? r === 'object'
					? 0
					: this.value_ < e.value_
					? -1
					: this.value_ === e.value_
					? 0
					: 1
				: s - i
		)
	}
	withIndex() {
		return this
	}
	isIndexed() {
		return !0
	}
	equals(e) {
		if (e === this) return !0
		if (e.isLeafNode()) {
			const n = e
			return (
				this.value_ === n.value_ && this.priorityNode_.equals(n.priorityNode_)
			)
		} else return !1
	}
}
ue.VALUE_TYPE_ORDER = ['object', 'boolean', 'number', 'string']
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Sm, km
function _C(t) {
	Sm = t
}
function yC(t) {
	km = t
}
class vC extends vo {
	compare(e, n) {
		const r = e.node.getPriority(),
			i = n.node.getPriority(),
			s = r.compareTo(i)
		return s === 0 ? gr(e.name, n.name) : s
	}
	isDefinedOn(e) {
		return !e.getPriority().isEmpty()
	}
	indexedValueChanged(e, n) {
		return !e.getPriority().equals(n.getPriority())
	}
	minPost() {
		return A.MIN
	}
	maxPost() {
		return new A(Cn, new ue('[PRIORITY-POST]', km))
	}
	makePost(e, n) {
		const r = Sm(e)
		return new A(n, new ue('[PRIORITY-POST]', r))
	}
	toString() {
		return '.priority'
	}
}
const ee = new vC()
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const CC = Math.log(2)
class wC {
	constructor(e) {
		const n = (s) => parseInt(Math.log(s) / CC, 10),
			r = (s) => parseInt(Array(s + 1).join('1'), 2)
		;(this.count = n(e + 1)), (this.current_ = this.count - 1)
		const i = r(this.count)
		this.bits_ = (e + 1) & i
	}
	nextBitIsOne() {
		const e = !(this.bits_ & (1 << this.current_))
		return this.current_--, e
	}
}
const $s = function (t, e, n, r) {
	t.sort(e)
	const i = function (a, u) {
			const f = u - a
			let c, d
			if (f === 0) return null
			if (f === 1)
				return (
					(c = t[a]),
					(d = n ? n(c) : c),
					new de(d, c.node, de.BLACK, null, null)
				)
			{
				const g = parseInt(f / 2, 10) + a,
					_ = i(a, g),
					y = i(g + 1, u)
				return (c = t[g]), (d = n ? n(c) : c), new de(d, c.node, de.BLACK, _, y)
			}
		},
		s = function (a) {
			let u = null,
				f = null,
				c = t.length
			const d = function (_, y) {
					const R = c - _,
						p = c
					c -= _
					const h = i(R + 1, p),
						m = t[R],
						v = n ? n(m) : m
					g(new de(v, m.node, y, null, h))
				},
				g = function (_) {
					u ? ((u.left = _), (u = _)) : ((f = _), (u = _))
				}
			for (let _ = 0; _ < a.count; ++_) {
				const y = a.nextBitIsOne(),
					R = Math.pow(2, a.count - (_ + 1))
				y ? d(R, de.BLACK) : (d(R, de.BLACK), d(R, de.RED))
			}
			return f
		},
		o = new wC(t.length),
		l = s(o)
	return new Pe(r || e, l)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let dl
const xn = {}
class gt {
	constructor(e, n) {
		;(this.indexes_ = e), (this.indexSet_ = n)
	}
	static get Default() {
		return (
			w(xn && ee, 'ChildrenNode.ts has not been loaded'),
			(dl = dl || new gt({ '.priority': xn }, { '.priority': ee })),
			dl
		)
	}
	get(e) {
		const n = or(this.indexes_, e)
		if (!n) throw new Error('No index defined for ' + e)
		return n instanceof Pe ? n : null
	}
	hasIndex(e) {
		return It(this.indexSet_, e.toString())
	}
	addIndex(e, n) {
		w(
			e !== Xn,
			"KeyIndex always exists and isn't meant to be added to the IndexMap."
		)
		const r = []
		let i = !1
		const s = n.getIterator(A.Wrap)
		let o = s.getNext()
		for (; o; ) (i = i || e.isDefinedOn(o.node)), r.push(o), (o = s.getNext())
		let l
		i ? (l = $s(r, e.getCompare())) : (l = xn)
		const a = e.toString(),
			u = Object.assign({}, this.indexSet_)
		u[a] = e
		const f = Object.assign({}, this.indexes_)
		return (f[a] = l), new gt(f, u)
	}
	addToIndexes(e, n) {
		const r = js(this.indexes_, (i, s) => {
			const o = or(this.indexSet_, s)
			if ((w(o, 'Missing index implementation for ' + s), i === xn))
				if (o.isDefinedOn(e.node)) {
					const l = [],
						a = n.getIterator(A.Wrap)
					let u = a.getNext()
					for (; u; ) u.name !== e.name && l.push(u), (u = a.getNext())
					return l.push(e), $s(l, o.getCompare())
				} else return xn
			else {
				const l = n.get(e.name)
				let a = i
				return l && (a = a.remove(new A(e.name, l))), a.insert(e, e.node)
			}
		})
		return new gt(r, this.indexSet_)
	}
	removeFromIndexes(e, n) {
		const r = js(this.indexes_, (i) => {
			if (i === xn) return i
			{
				const s = n.get(e.name)
				return s ? i.remove(new A(e.name, s)) : i
			}
		})
		return new gt(r, this.indexSet_)
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Dr
class x {
	constructor(e, n, r) {
		;(this.children_ = e),
			(this.priorityNode_ = n),
			(this.indexMap_ = r),
			(this.lazyHash_ = null),
			this.priorityNode_ && Em(this.priorityNode_),
			this.children_.isEmpty() &&
				w(
					!this.priorityNode_ || this.priorityNode_.isEmpty(),
					'An empty node cannot have a priority'
				)
	}
	static get EMPTY_NODE() {
		return Dr || (Dr = new x(new Pe(Du), null, gt.Default))
	}
	isLeafNode() {
		return !1
	}
	getPriority() {
		return this.priorityNode_ || Dr
	}
	updatePriority(e) {
		return this.children_.isEmpty()
			? this
			: new x(this.children_, e, this.indexMap_)
	}
	getImmediateChild(e) {
		if (e === '.priority') return this.getPriority()
		{
			const n = this.children_.get(e)
			return n === null ? Dr : n
		}
	}
	getChild(e) {
		const n = O(e)
		return n === null ? this : this.getImmediateChild(n).getChild(H(e))
	}
	hasChild(e) {
		return this.children_.get(e) !== null
	}
	updateImmediateChild(e, n) {
		if ((w(n, 'We should always be passing snapshot nodes'), e === '.priority'))
			return this.updatePriority(n)
		{
			const r = new A(e, n)
			let i, s
			n.isEmpty()
				? ((i = this.children_.remove(e)),
				  (s = this.indexMap_.removeFromIndexes(r, this.children_)))
				: ((i = this.children_.insert(e, n)),
				  (s = this.indexMap_.addToIndexes(r, this.children_)))
			const o = i.isEmpty() ? Dr : this.priorityNode_
			return new x(i, o, s)
		}
	}
	updateChild(e, n) {
		const r = O(e)
		if (r === null) return n
		{
			w(
				O(e) !== '.priority' || Kt(e) === 1,
				'.priority must be the last token in a path'
			)
			const i = this.getImmediateChild(r).updateChild(H(e), n)
			return this.updateImmediateChild(r, i)
		}
	}
	isEmpty() {
		return this.children_.isEmpty()
	}
	numChildren() {
		return this.children_.count()
	}
	val(e) {
		if (this.isEmpty()) return null
		const n = {}
		let r = 0,
			i = 0,
			s = !0
		if (
			(this.forEachChild(ee, (o, l) => {
				;(n[o] = l.val(e)),
					r++,
					s && x.INTEGER_REGEXP_.test(o)
						? (i = Math.max(i, Number(o)))
						: (s = !1)
			}),
			!e && s && i < 2 * r)
		) {
			const o = []
			for (const l in n) o[l] = n[l]
			return o
		} else
			return (
				e &&
					!this.getPriority().isEmpty() &&
					(n['.priority'] = this.getPriority().val()),
				n
			)
	}
	hash() {
		if (this.lazyHash_ === null) {
			let e = ''
			this.getPriority().isEmpty() ||
				(e += 'priority:' + wm(this.getPriority().val()) + ':'),
				this.forEachChild(ee, (n, r) => {
					const i = r.hash()
					i !== '' && (e += ':' + n + ':' + i)
				}),
				(this.lazyHash_ = e === '' ? '' : Kp(e))
		}
		return this.lazyHash_
	}
	getPredecessorChildName(e, n, r) {
		const i = this.resolveIndex_(r)
		if (i) {
			const s = i.getPredecessorKey(new A(e, n))
			return s ? s.name : null
		} else return this.children_.getPredecessorKey(e)
	}
	getFirstChildName(e) {
		const n = this.resolveIndex_(e)
		if (n) {
			const r = n.minKey()
			return r && r.name
		} else return this.children_.minKey()
	}
	getFirstChild(e) {
		const n = this.getFirstChildName(e)
		return n ? new A(n, this.children_.get(n)) : null
	}
	getLastChildName(e) {
		const n = this.resolveIndex_(e)
		if (n) {
			const r = n.maxKey()
			return r && r.name
		} else return this.children_.maxKey()
	}
	getLastChild(e) {
		const n = this.getLastChildName(e)
		return n ? new A(n, this.children_.get(n)) : null
	}
	forEachChild(e, n) {
		const r = this.resolveIndex_(e)
		return r
			? r.inorderTraversal((i) => n(i.name, i.node))
			: this.children_.inorderTraversal(n)
	}
	getIterator(e) {
		return this.getIteratorFrom(e.minPost(), e)
	}
	getIteratorFrom(e, n) {
		const r = this.resolveIndex_(n)
		if (r) return r.getIteratorFrom(e, (i) => i)
		{
			const i = this.children_.getIteratorFrom(e.name, A.Wrap)
			let s = i.peek()
			for (; s != null && n.compare(s, e) < 0; ) i.getNext(), (s = i.peek())
			return i
		}
	}
	getReverseIterator(e) {
		return this.getReverseIteratorFrom(e.maxPost(), e)
	}
	getReverseIteratorFrom(e, n) {
		const r = this.resolveIndex_(n)
		if (r) return r.getReverseIteratorFrom(e, (i) => i)
		{
			const i = this.children_.getReverseIteratorFrom(e.name, A.Wrap)
			let s = i.peek()
			for (; s != null && n.compare(s, e) > 0; ) i.getNext(), (s = i.peek())
			return i
		}
	}
	compareTo(e) {
		return this.isEmpty()
			? e.isEmpty()
				? 0
				: -1
			: e.isLeafNode() || e.isEmpty()
			? 1
			: e === Oi
			? -1
			: 0
	}
	withIndex(e) {
		if (e === Xn || this.indexMap_.hasIndex(e)) return this
		{
			const n = this.indexMap_.addIndex(e, this.children_)
			return new x(this.children_, this.priorityNode_, n)
		}
	}
	isIndexed(e) {
		return e === Xn || this.indexMap_.hasIndex(e)
	}
	equals(e) {
		if (e === this) return !0
		if (e.isLeafNode()) return !1
		{
			const n = e
			if (this.getPriority().equals(n.getPriority()))
				if (this.children_.count() === n.children_.count()) {
					const r = this.getIterator(ee),
						i = n.getIterator(ee)
					let s = r.getNext(),
						o = i.getNext()
					for (; s && o; ) {
						if (s.name !== o.name || !s.node.equals(o.node)) return !1
						;(s = r.getNext()), (o = i.getNext())
					}
					return s === null && o === null
				} else return !1
			else return !1
		}
	}
	resolveIndex_(e) {
		return e === Xn ? null : this.indexMap_.get(e.toString())
	}
}
x.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/
class EC extends x {
	constructor() {
		super(new Pe(Du), x.EMPTY_NODE, gt.Default)
	}
	compareTo(e) {
		return e === this ? 0 : 1
	}
	equals(e) {
		return e === this
	}
	getPriority() {
		return this
	}
	getImmediateChild(e) {
		return x.EMPTY_NODE
	}
	isEmpty() {
		return !1
	}
}
const Oi = new EC()
Object.defineProperties(A, {
	MIN: { value: new A(lr, x.EMPTY_NODE) },
	MAX: { value: new A(Cn, Oi) }
})
Cm.__EMPTY_NODE = x.EMPTY_NODE
ue.__childrenNodeConstructor = x
gC(Oi)
yC(Oi)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const SC = !0
function me(t, e = null) {
	if (t === null) return x.EMPTY_NODE
	if (
		(typeof t == 'object' && '.priority' in t && (e = t['.priority']),
		w(
			e === null ||
				typeof e == 'string' ||
				typeof e == 'number' ||
				(typeof e == 'object' && '.sv' in e),
			'Invalid priority type found: ' + typeof e
		),
		typeof t == 'object' &&
			'.value' in t &&
			t['.value'] !== null &&
			(t = t['.value']),
		typeof t != 'object' || '.sv' in t)
	) {
		const n = t
		return new ue(n, me(e))
	}
	if (!(t instanceof Array) && SC) {
		const n = []
		let r = !1
		if (
			(Le(t, (o, l) => {
				if (o.substring(0, 1) !== '.') {
					const a = me(l)
					a.isEmpty() ||
						((r = r || !a.getPriority().isEmpty()), n.push(new A(o, a)))
				}
			}),
			n.length === 0)
		)
			return x.EMPTY_NODE
		const s = $s(n, mC, (o) => o.name, Du)
		if (r) {
			const o = $s(n, ee.getCompare())
			return new x(s, me(e), new gt({ '.priority': o }, { '.priority': ee }))
		} else return new x(s, me(e), gt.Default)
	} else {
		let n = x.EMPTY_NODE
		return (
			Le(t, (r, i) => {
				if (It(t, r) && r.substring(0, 1) !== '.') {
					const s = me(i)
					;(s.isLeafNode() || !s.isEmpty()) &&
						(n = n.updateImmediateChild(r, s))
				}
			}),
			n.updatePriority(me(e))
		)
	}
}
_C(me)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kC extends vo {
	constructor(e) {
		super(),
			(this.indexPath_ = e),
			w(
				!M(e) && O(e) !== '.priority',
				"Can't create PathIndex with empty path or .priority key"
			)
	}
	extractChild(e) {
		return e.getChild(this.indexPath_)
	}
	isDefinedOn(e) {
		return !e.getChild(this.indexPath_).isEmpty()
	}
	compare(e, n) {
		const r = this.extractChild(e.node),
			i = this.extractChild(n.node),
			s = r.compareTo(i)
		return s === 0 ? gr(e.name, n.name) : s
	}
	makePost(e, n) {
		const r = me(e),
			i = x.EMPTY_NODE.updateChild(this.indexPath_, r)
		return new A(n, i)
	}
	maxPost() {
		const e = x.EMPTY_NODE.updateChild(this.indexPath_, Oi)
		return new A(Cn, e)
	}
	toString() {
		return _m(this.indexPath_, 0).join('/')
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class TC extends vo {
	compare(e, n) {
		const r = e.node.compareTo(n.node)
		return r === 0 ? gr(e.name, n.name) : r
	}
	isDefinedOn(e) {
		return !0
	}
	indexedValueChanged(e, n) {
		return !e.equals(n)
	}
	minPost() {
		return A.MIN
	}
	maxPost() {
		return A.MAX
	}
	makePost(e, n) {
		const r = me(e)
		return new A(n, r)
	}
	toString() {
		return '.value'
	}
}
const IC = new TC()
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Tm(t) {
	return { type: 'value', snapshotNode: t }
}
function ar(t, e) {
	return { type: 'child_added', snapshotNode: e, childName: t }
}
function yi(t, e) {
	return { type: 'child_removed', snapshotNode: e, childName: t }
}
function vi(t, e, n) {
	return { type: 'child_changed', snapshotNode: e, childName: t, oldSnap: n }
}
function NC(t, e) {
	return { type: 'child_moved', snapshotNode: e, childName: t }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ou {
	constructor(e) {
		this.index_ = e
	}
	updateChild(e, n, r, i, s, o) {
		w(
			e.isIndexed(this.index_),
			'A node must be indexed if only a child is updated'
		)
		const l = e.getImmediateChild(n)
		return (l.getChild(i).equals(r.getChild(i)) &&
			l.isEmpty() === r.isEmpty()) ||
			(o != null &&
				(r.isEmpty()
					? e.hasChild(n)
						? o.trackChildChange(yi(n, l))
						: w(
								e.isLeafNode(),
								'A child remove without an old child only makes sense on a leaf node'
						  )
					: l.isEmpty()
					? o.trackChildChange(ar(n, r))
					: o.trackChildChange(vi(n, r, l))),
			e.isLeafNode() && r.isEmpty())
			? e
			: e.updateImmediateChild(n, r).withIndex(this.index_)
	}
	updateFullNode(e, n, r) {
		return (
			r != null &&
				(e.isLeafNode() ||
					e.forEachChild(ee, (i, s) => {
						n.hasChild(i) || r.trackChildChange(yi(i, s))
					}),
				n.isLeafNode() ||
					n.forEachChild(ee, (i, s) => {
						if (e.hasChild(i)) {
							const o = e.getImmediateChild(i)
							o.equals(s) || r.trackChildChange(vi(i, s, o))
						} else r.trackChildChange(ar(i, s))
					})),
			n.withIndex(this.index_)
		)
	}
	updatePriority(e, n) {
		return e.isEmpty() ? x.EMPTY_NODE : e.updatePriority(n)
	}
	filtersNodes() {
		return !1
	}
	getIndexedFilter() {
		return this
	}
	getIndex() {
		return this.index_
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ci {
	constructor(e) {
		;(this.indexedFilter_ = new Ou(e.getIndex())),
			(this.index_ = e.getIndex()),
			(this.startPost_ = Ci.getStartPost_(e)),
			(this.endPost_ = Ci.getEndPost_(e)),
			(this.startIsInclusive_ = !e.startAfterSet_),
			(this.endIsInclusive_ = !e.endBeforeSet_)
	}
	getStartPost() {
		return this.startPost_
	}
	getEndPost() {
		return this.endPost_
	}
	matches(e) {
		const n = this.startIsInclusive_
				? this.index_.compare(this.getStartPost(), e) <= 0
				: this.index_.compare(this.getStartPost(), e) < 0,
			r = this.endIsInclusive_
				? this.index_.compare(e, this.getEndPost()) <= 0
				: this.index_.compare(e, this.getEndPost()) < 0
		return n && r
	}
	updateChild(e, n, r, i, s, o) {
		return (
			this.matches(new A(n, r)) || (r = x.EMPTY_NODE),
			this.indexedFilter_.updateChild(e, n, r, i, s, o)
		)
	}
	updateFullNode(e, n, r) {
		n.isLeafNode() && (n = x.EMPTY_NODE)
		let i = n.withIndex(this.index_)
		i = i.updatePriority(x.EMPTY_NODE)
		const s = this
		return (
			n.forEachChild(ee, (o, l) => {
				s.matches(new A(o, l)) || (i = i.updateImmediateChild(o, x.EMPTY_NODE))
			}),
			this.indexedFilter_.updateFullNode(e, i, r)
		)
	}
	updatePriority(e, n) {
		return e
	}
	filtersNodes() {
		return !0
	}
	getIndexedFilter() {
		return this.indexedFilter_
	}
	getIndex() {
		return this.index_
	}
	static getStartPost_(e) {
		if (e.hasStart()) {
			const n = e.getIndexStartName()
			return e.getIndex().makePost(e.getIndexStartValue(), n)
		} else return e.getIndex().minPost()
	}
	static getEndPost_(e) {
		if (e.hasEnd()) {
			const n = e.getIndexEndName()
			return e.getIndex().makePost(e.getIndexEndValue(), n)
		} else return e.getIndex().maxPost()
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xC {
	constructor(e) {
		;(this.withinDirectionalStart = (n) =>
			this.reverse_ ? this.withinEndPost(n) : this.withinStartPost(n)),
			(this.withinDirectionalEnd = (n) =>
				this.reverse_ ? this.withinStartPost(n) : this.withinEndPost(n)),
			(this.withinStartPost = (n) => {
				const r = this.index_.compare(this.rangedFilter_.getStartPost(), n)
				return this.startIsInclusive_ ? r <= 0 : r < 0
			}),
			(this.withinEndPost = (n) => {
				const r = this.index_.compare(n, this.rangedFilter_.getEndPost())
				return this.endIsInclusive_ ? r <= 0 : r < 0
			}),
			(this.rangedFilter_ = new Ci(e)),
			(this.index_ = e.getIndex()),
			(this.limit_ = e.getLimit()),
			(this.reverse_ = !e.isViewFromLeft()),
			(this.startIsInclusive_ = !e.startAfterSet_),
			(this.endIsInclusive_ = !e.endBeforeSet_)
	}
	updateChild(e, n, r, i, s, o) {
		return (
			this.rangedFilter_.matches(new A(n, r)) || (r = x.EMPTY_NODE),
			e.getImmediateChild(n).equals(r)
				? e
				: e.numChildren() < this.limit_
				? this.rangedFilter_.getIndexedFilter().updateChild(e, n, r, i, s, o)
				: this.fullLimitUpdateChild_(e, n, r, s, o)
		)
	}
	updateFullNode(e, n, r) {
		let i
		if (n.isLeafNode() || n.isEmpty()) i = x.EMPTY_NODE.withIndex(this.index_)
		else if (this.limit_ * 2 < n.numChildren() && n.isIndexed(this.index_)) {
			i = x.EMPTY_NODE.withIndex(this.index_)
			let s
			this.reverse_
				? (s = n.getReverseIteratorFrom(
						this.rangedFilter_.getEndPost(),
						this.index_
				  ))
				: (s = n.getIteratorFrom(
						this.rangedFilter_.getStartPost(),
						this.index_
				  ))
			let o = 0
			for (; s.hasNext() && o < this.limit_; ) {
				const l = s.getNext()
				if (this.withinDirectionalStart(l))
					if (this.withinDirectionalEnd(l))
						(i = i.updateImmediateChild(l.name, l.node)), o++
					else break
				else continue
			}
		} else {
			;(i = n.withIndex(this.index_)), (i = i.updatePriority(x.EMPTY_NODE))
			let s
			this.reverse_
				? (s = i.getReverseIterator(this.index_))
				: (s = i.getIterator(this.index_))
			let o = 0
			for (; s.hasNext(); ) {
				const l = s.getNext()
				o < this.limit_ &&
				this.withinDirectionalStart(l) &&
				this.withinDirectionalEnd(l)
					? o++
					: (i = i.updateImmediateChild(l.name, x.EMPTY_NODE))
			}
		}
		return this.rangedFilter_.getIndexedFilter().updateFullNode(e, i, r)
	}
	updatePriority(e, n) {
		return e
	}
	filtersNodes() {
		return !0
	}
	getIndexedFilter() {
		return this.rangedFilter_.getIndexedFilter()
	}
	getIndex() {
		return this.index_
	}
	fullLimitUpdateChild_(e, n, r, i, s) {
		let o
		if (this.reverse_) {
			const c = this.index_.getCompare()
			o = (d, g) => c(g, d)
		} else o = this.index_.getCompare()
		const l = e
		w(l.numChildren() === this.limit_, '')
		const a = new A(n, r),
			u = this.reverse_
				? l.getFirstChild(this.index_)
				: l.getLastChild(this.index_),
			f = this.rangedFilter_.matches(a)
		if (l.hasChild(n)) {
			const c = l.getImmediateChild(n)
			let d = i.getChildAfterChild(this.index_, u, this.reverse_)
			for (; d != null && (d.name === n || l.hasChild(d.name)); )
				d = i.getChildAfterChild(this.index_, d, this.reverse_)
			const g = d == null ? 1 : o(d, a)
			if (f && !r.isEmpty() && g >= 0)
				return (
					s != null && s.trackChildChange(vi(n, r, c)),
					l.updateImmediateChild(n, r)
				)
			{
				s != null && s.trackChildChange(yi(n, c))
				const y = l.updateImmediateChild(n, x.EMPTY_NODE)
				return d != null && this.rangedFilter_.matches(d)
					? (s != null && s.trackChildChange(ar(d.name, d.node)),
					  y.updateImmediateChild(d.name, d.node))
					: y
			}
		} else
			return r.isEmpty()
				? e
				: f && o(u, a) >= 0
				? (s != null &&
						(s.trackChildChange(yi(u.name, u.node)),
						s.trackChildChange(ar(n, r))),
				  l
						.updateImmediateChild(n, r)
						.updateImmediateChild(u.name, x.EMPTY_NODE))
				: e
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Au {
	constructor() {
		;(this.limitSet_ = !1),
			(this.startSet_ = !1),
			(this.startNameSet_ = !1),
			(this.startAfterSet_ = !1),
			(this.endSet_ = !1),
			(this.endNameSet_ = !1),
			(this.endBeforeSet_ = !1),
			(this.limit_ = 0),
			(this.viewFrom_ = ''),
			(this.indexStartValue_ = null),
			(this.indexStartName_ = ''),
			(this.indexEndValue_ = null),
			(this.indexEndName_ = ''),
			(this.index_ = ee)
	}
	hasStart() {
		return this.startSet_
	}
	isViewFromLeft() {
		return this.viewFrom_ === '' ? this.startSet_ : this.viewFrom_ === 'l'
	}
	getIndexStartValue() {
		return (
			w(this.startSet_, 'Only valid if start has been set'),
			this.indexStartValue_
		)
	}
	getIndexStartName() {
		return (
			w(this.startSet_, 'Only valid if start has been set'),
			this.startNameSet_ ? this.indexStartName_ : lr
		)
	}
	hasEnd() {
		return this.endSet_
	}
	getIndexEndValue() {
		return (
			w(this.endSet_, 'Only valid if end has been set'), this.indexEndValue_
		)
	}
	getIndexEndName() {
		return (
			w(this.endSet_, 'Only valid if end has been set'),
			this.endNameSet_ ? this.indexEndName_ : Cn
		)
	}
	hasLimit() {
		return this.limitSet_
	}
	hasAnchoredLimit() {
		return this.limitSet_ && this.viewFrom_ !== ''
	}
	getLimit() {
		return w(this.limitSet_, 'Only valid if limit has been set'), this.limit_
	}
	getIndex() {
		return this.index_
	}
	loadsAllData() {
		return !(this.startSet_ || this.endSet_ || this.limitSet_)
	}
	isDefault() {
		return this.loadsAllData() && this.index_ === ee
	}
	copy() {
		const e = new Au()
		return (
			(e.limitSet_ = this.limitSet_),
			(e.limit_ = this.limit_),
			(e.startSet_ = this.startSet_),
			(e.startAfterSet_ = this.startAfterSet_),
			(e.indexStartValue_ = this.indexStartValue_),
			(e.startNameSet_ = this.startNameSet_),
			(e.indexStartName_ = this.indexStartName_),
			(e.endSet_ = this.endSet_),
			(e.endBeforeSet_ = this.endBeforeSet_),
			(e.indexEndValue_ = this.indexEndValue_),
			(e.endNameSet_ = this.endNameSet_),
			(e.indexEndName_ = this.indexEndName_),
			(e.index_ = this.index_),
			(e.viewFrom_ = this.viewFrom_),
			e
		)
	}
}
function RC(t) {
	return t.loadsAllData()
		? new Ou(t.getIndex())
		: t.hasLimit()
		? new xC(t)
		: new Ci(t)
}
function Vd(t) {
	const e = {}
	if (t.isDefault()) return e
	let n
	if (
		(t.index_ === ee
			? (n = '$priority')
			: t.index_ === IC
			? (n = '$value')
			: t.index_ === Xn
			? (n = '$key')
			: (w(t.index_ instanceof kC, 'Unrecognized index type!'),
			  (n = t.index_.toString())),
		(e.orderBy = fe(n)),
		t.startSet_)
	) {
		const r = t.startAfterSet_ ? 'startAfter' : 'startAt'
		;(e[r] = fe(t.indexStartValue_)),
			t.startNameSet_ && (e[r] += ',' + fe(t.indexStartName_))
	}
	if (t.endSet_) {
		const r = t.endBeforeSet_ ? 'endBefore' : 'endAt'
		;(e[r] = fe(t.indexEndValue_)),
			t.endNameSet_ && (e[r] += ',' + fe(t.indexEndName_))
	}
	return (
		t.limitSet_ &&
			(t.isViewFromLeft()
				? (e.limitToFirst = t.limit_)
				: (e.limitToLast = t.limit_)),
		e
	)
}
function Hd(t) {
	const e = {}
	if (
		(t.startSet_ &&
			((e.sp = t.indexStartValue_),
			t.startNameSet_ && (e.sn = t.indexStartName_),
			(e.sin = !t.startAfterSet_)),
		t.endSet_ &&
			((e.ep = t.indexEndValue_),
			t.endNameSet_ && (e.en = t.indexEndName_),
			(e.ein = !t.endBeforeSet_)),
		t.limitSet_)
	) {
		e.l = t.limit_
		let n = t.viewFrom_
		n === '' && (t.isViewFromLeft() ? (n = 'l') : (n = 'r')), (e.vf = n)
	}
	return t.index_ !== ee && (e.i = t.index_.toString()), e
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bs extends pm {
	constructor(e, n, r, i) {
		super(),
			(this.repoInfo_ = e),
			(this.onDataUpdate_ = n),
			(this.authTokenProvider_ = r),
			(this.appCheckTokenProvider_ = i),
			(this.log_ = Di('p:rest:')),
			(this.listens_ = {})
	}
	reportStats(e) {
		throw new Error('Method not implemented.')
	}
	static getListenId_(e, n) {
		return n !== void 0
			? 'tag$' + n
			: (w(
					e._queryParams.isDefault(),
					"should have a tag if it's not a default query."
			  ),
			  e._path.toString())
	}
	listen(e, n, r, i) {
		const s = e._path.toString()
		this.log_('Listen called for ' + s + ' ' + e._queryIdentifier)
		const o = bs.getListenId_(e, r),
			l = {}
		this.listens_[o] = l
		const a = Vd(e._queryParams)
		this.restRequest_(s + '.json', a, (u, f) => {
			let c = f
			if (
				(u === 404 && ((c = null), (u = null)),
				u === null && this.onDataUpdate_(s, c, !1, r),
				or(this.listens_, o) === l)
			) {
				let d
				u
					? u === 401
						? (d = 'permission_denied')
						: (d = 'rest_error:' + u)
					: (d = 'ok'),
					i(d, null)
			}
		})
	}
	unlisten(e, n) {
		const r = bs.getListenId_(e, n)
		delete this.listens_[r]
	}
	get(e) {
		const n = Vd(e._queryParams),
			r = e._path.toString(),
			i = new _o()
		return (
			this.restRequest_(r + '.json', n, (s, o) => {
				let l = o
				s === 404 && ((l = null), (s = null)),
					s === null
						? (this.onDataUpdate_(r, l, !1, null), i.resolve(l))
						: i.reject(new Error(l))
			}),
			i.promise
		)
	}
	refreshAuthToken(e) {}
	restRequest_(e, n = {}, r) {
		return (
			(n.format = 'export'),
			Promise.all([
				this.authTokenProvider_.getToken(!1),
				this.appCheckTokenProvider_.getToken(!1)
			]).then(([i, s]) => {
				i && i.accessToken && (n.auth = i.accessToken),
					s && s.token && (n.ac = s.token)
				const o =
					(this.repoInfo_.secure ? 'https://' : 'http://') +
					this.repoInfo_.host +
					e +
					'?ns=' +
					this.repoInfo_.namespace +
					lv(n)
				this.log_('Sending REST request for ' + o)
				const l = new XMLHttpRequest()
				;(l.onreadystatechange = () => {
					if (r && l.readyState === 4) {
						this.log_(
							'REST Response for ' + o + ' received. status:',
							l.status,
							'response:',
							l.responseText
						)
						let a = null
						if (l.status >= 200 && l.status < 300) {
							try {
								a = pi(l.responseText)
							} catch {
								Me(
									'Failed to parse JSON response for ' +
										o +
										': ' +
										l.responseText
								)
							}
							r(null, a)
						} else
							l.status !== 401 &&
								l.status !== 404 &&
								Me(
									'Got unsuccessful REST response for ' +
										o +
										' Status: ' +
										l.status
								),
								r(l.status)
						r = null
					}
				}),
					l.open('GET', o, !0),
					l.send()
			})
		)
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class PC {
	constructor() {
		this.rootNode_ = x.EMPTY_NODE
	}
	getNode(e) {
		return this.rootNode_.getChild(e)
	}
	updateSnapshot(e, n) {
		this.rootNode_ = this.rootNode_.updateChild(e, n)
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Qs() {
	return { value: null, children: new Map() }
}
function Im(t, e, n) {
	if (M(e)) (t.value = n), t.children.clear()
	else if (t.value !== null) t.value = t.value.updateChild(e, n)
	else {
		const r = O(e)
		t.children.has(r) || t.children.set(r, Qs())
		const i = t.children.get(r)
		;(e = H(e)), Im(i, e, n)
	}
}
function va(t, e, n) {
	t.value !== null
		? n(e, t.value)
		: DC(t, (r, i) => {
				const s = new W(e.toString() + '/' + r)
				va(i, s, n)
		  })
}
function DC(t, e) {
	t.children.forEach((n, r) => {
		e(r, n)
	})
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class OC {
	constructor(e) {
		;(this.collection_ = e), (this.last_ = null)
	}
	get() {
		const e = this.collection_.get(),
			n = Object.assign({}, e)
		return (
			this.last_ &&
				Le(this.last_, (r, i) => {
					n[r] = n[r] - i
				}),
			(this.last_ = e),
			n
		)
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $d = 10 * 1e3,
	AC = 30 * 1e3,
	MC = 5 * 60 * 1e3
class LC {
	constructor(e, n) {
		;(this.server_ = n),
			(this.statsToReport_ = {}),
			(this.statsListener_ = new OC(e))
		const r = $d + (AC - $d) * Math.random()
		Qr(this.reportStats_.bind(this), Math.floor(r))
	}
	reportStats_() {
		const e = this.statsListener_.get(),
			n = {}
		let r = !1
		Le(e, (i, s) => {
			s > 0 && It(this.statsToReport_, i) && ((n[i] = s), (r = !0))
		}),
			r && this.server_.reportStats(n),
			Qr(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * MC))
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var nt
;(function (t) {
	;(t[(t.OVERWRITE = 0)] = 'OVERWRITE'),
		(t[(t.MERGE = 1)] = 'MERGE'),
		(t[(t.ACK_USER_WRITE = 2)] = 'ACK_USER_WRITE'),
		(t[(t.LISTEN_COMPLETE = 3)] = 'LISTEN_COMPLETE')
})(nt || (nt = {}))
function Nm() {
	return { fromUser: !0, fromServer: !1, queryId: null, tagged: !1 }
}
function Mu() {
	return { fromUser: !1, fromServer: !0, queryId: null, tagged: !1 }
}
function Lu(t) {
	return { fromUser: !1, fromServer: !0, queryId: t, tagged: !0 }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gs {
	constructor(e, n, r) {
		;(this.path = e),
			(this.affectedTree = n),
			(this.revert = r),
			(this.type = nt.ACK_USER_WRITE),
			(this.source = Nm())
	}
	operationForChild(e) {
		if (M(this.path)) {
			if (this.affectedTree.value != null)
				return (
					w(
						this.affectedTree.children.isEmpty(),
						'affectedTree should not have overlapping affected paths.'
					),
					this
				)
			{
				const n = this.affectedTree.subtree(new W(e))
				return new Gs(U(), n, this.revert)
			}
		} else
			return (
				w(O(this.path) === e, 'operationForChild called for unrelated child.'),
				new Gs(H(this.path), this.affectedTree, this.revert)
			)
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wi {
	constructor(e, n) {
		;(this.source = e), (this.path = n), (this.type = nt.LISTEN_COMPLETE)
	}
	operationForChild(e) {
		return M(this.path)
			? new wi(this.source, U())
			: new wi(this.source, H(this.path))
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wn {
	constructor(e, n, r) {
		;(this.source = e),
			(this.path = n),
			(this.snap = r),
			(this.type = nt.OVERWRITE)
	}
	operationForChild(e) {
		return M(this.path)
			? new wn(this.source, U(), this.snap.getImmediateChild(e))
			: new wn(this.source, H(this.path), this.snap)
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ei {
	constructor(e, n, r) {
		;(this.source = e),
			(this.path = n),
			(this.children = r),
			(this.type = nt.MERGE)
	}
	operationForChild(e) {
		if (M(this.path)) {
			const n = this.children.subtree(new W(e))
			return n.isEmpty()
				? null
				: n.value
				? new wn(this.source, U(), n.value)
				: new Ei(this.source, U(), n)
		} else
			return (
				w(
					O(this.path) === e,
					"Can't get a merge for a child not on the path of the operation"
				),
				new Ei(this.source, H(this.path), this.children)
			)
	}
	toString() {
		return (
			'Operation(' +
			this.path +
			': ' +
			this.source.toString() +
			' merge: ' +
			this.children.toString() +
			')'
		)
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class En {
	constructor(e, n, r) {
		;(this.node_ = e), (this.fullyInitialized_ = n), (this.filtered_ = r)
	}
	isFullyInitialized() {
		return this.fullyInitialized_
	}
	isFiltered() {
		return this.filtered_
	}
	isCompleteForPath(e) {
		if (M(e)) return this.isFullyInitialized() && !this.filtered_
		const n = O(e)
		return this.isCompleteForChild(n)
	}
	isCompleteForChild(e) {
		return (
			(this.isFullyInitialized() && !this.filtered_) || this.node_.hasChild(e)
		)
	}
	getNode() {
		return this.node_
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FC {
	constructor(e) {
		;(this.query_ = e), (this.index_ = this.query_._queryParams.getIndex())
	}
}
function zC(t, e, n, r) {
	const i = [],
		s = []
	return (
		e.forEach((o) => {
			o.type === 'child_changed' &&
				t.index_.indexedValueChanged(o.oldSnap, o.snapshotNode) &&
				s.push(NC(o.childName, o.snapshotNode))
		}),
		Or(t, i, 'child_removed', e, r, n),
		Or(t, i, 'child_added', e, r, n),
		Or(t, i, 'child_moved', s, r, n),
		Or(t, i, 'child_changed', e, r, n),
		Or(t, i, 'value', e, r, n),
		i
	)
}
function Or(t, e, n, r, i, s) {
	const o = r.filter((l) => l.type === n)
	o.sort((l, a) => jC(t, l, a)),
		o.forEach((l) => {
			const a = UC(t, l, s)
			i.forEach((u) => {
				u.respondsTo(l.type) && e.push(u.createEvent(a, t.query_))
			})
		})
}
function UC(t, e, n) {
	return (
		e.type === 'value' ||
			e.type === 'child_removed' ||
			(e.prevName = n.getPredecessorChildName(
				e.childName,
				e.snapshotNode,
				t.index_
			)),
		e
	)
}
function jC(t, e, n) {
	if (e.childName == null || n.childName == null)
		throw pr('Should only compare child_ events.')
	const r = new A(e.childName, e.snapshotNode),
		i = new A(n.childName, n.snapshotNode)
	return t.index_.compare(r, i)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Co(t, e) {
	return { eventCache: t, serverCache: e }
}
function Gr(t, e, n, r) {
	return Co(new En(e, n, r), t.serverCache)
}
function xm(t, e, n, r) {
	return Co(t.eventCache, new En(e, n, r))
}
function Ca(t) {
	return t.eventCache.isFullyInitialized() ? t.eventCache.getNode() : null
}
function Sn(t) {
	return t.serverCache.isFullyInitialized() ? t.serverCache.getNode() : null
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let fl
const BC = () => (fl || (fl = new Pe(T0)), fl)
class Q {
	constructor(e, n = BC()) {
		;(this.value = e), (this.children = n)
	}
	static fromObject(e) {
		let n = new Q(null)
		return (
			Le(e, (r, i) => {
				n = n.set(new W(r), i)
			}),
			n
		)
	}
	isEmpty() {
		return this.value === null && this.children.isEmpty()
	}
	findRootMostMatchingPathAndValue(e, n) {
		if (this.value != null && n(this.value))
			return { path: U(), value: this.value }
		if (M(e)) return null
		{
			const r = O(e),
				i = this.children.get(r)
			if (i !== null) {
				const s = i.findRootMostMatchingPathAndValue(H(e), n)
				return s != null ? { path: oe(new W(r), s.path), value: s.value } : null
			} else return null
		}
	}
	findRootMostValueAndPath(e) {
		return this.findRootMostMatchingPathAndValue(e, () => !0)
	}
	subtree(e) {
		if (M(e)) return this
		{
			const n = O(e),
				r = this.children.get(n)
			return r !== null ? r.subtree(H(e)) : new Q(null)
		}
	}
	set(e, n) {
		if (M(e)) return new Q(n, this.children)
		{
			const r = O(e),
				s = (this.children.get(r) || new Q(null)).set(H(e), n),
				o = this.children.insert(r, s)
			return new Q(this.value, o)
		}
	}
	remove(e) {
		if (M(e))
			return this.children.isEmpty() ? new Q(null) : new Q(null, this.children)
		{
			const n = O(e),
				r = this.children.get(n)
			if (r) {
				const i = r.remove(H(e))
				let s
				return (
					i.isEmpty()
						? (s = this.children.remove(n))
						: (s = this.children.insert(n, i)),
					this.value === null && s.isEmpty()
						? new Q(null)
						: new Q(this.value, s)
				)
			} else return this
		}
	}
	get(e) {
		if (M(e)) return this.value
		{
			const n = O(e),
				r = this.children.get(n)
			return r ? r.get(H(e)) : null
		}
	}
	setTree(e, n) {
		if (M(e)) return n
		{
			const r = O(e),
				s = (this.children.get(r) || new Q(null)).setTree(H(e), n)
			let o
			return (
				s.isEmpty()
					? (o = this.children.remove(r))
					: (o = this.children.insert(r, s)),
				new Q(this.value, o)
			)
		}
	}
	fold(e) {
		return this.fold_(U(), e)
	}
	fold_(e, n) {
		const r = {}
		return (
			this.children.inorderTraversal((i, s) => {
				r[i] = s.fold_(oe(e, i), n)
			}),
			n(e, this.value, r)
		)
	}
	findOnPath(e, n) {
		return this.findOnPath_(e, U(), n)
	}
	findOnPath_(e, n, r) {
		const i = this.value ? r(n, this.value) : !1
		if (i) return i
		if (M(e)) return null
		{
			const s = O(e),
				o = this.children.get(s)
			return o ? o.findOnPath_(H(e), oe(n, s), r) : null
		}
	}
	foreachOnPath(e, n) {
		return this.foreachOnPath_(e, U(), n)
	}
	foreachOnPath_(e, n, r) {
		if (M(e)) return this
		{
			this.value && r(n, this.value)
			const i = O(e),
				s = this.children.get(i)
			return s ? s.foreachOnPath_(H(e), oe(n, i), r) : new Q(null)
		}
	}
	foreach(e) {
		this.foreach_(U(), e)
	}
	foreach_(e, n) {
		this.children.inorderTraversal((r, i) => {
			i.foreach_(oe(e, r), n)
		}),
			this.value && n(e, this.value)
	}
	foreachChild(e) {
		this.children.inorderTraversal((n, r) => {
			r.value && e(n, r.value)
		})
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class st {
	constructor(e) {
		this.writeTree_ = e
	}
	static empty() {
		return new st(new Q(null))
	}
}
function Kr(t, e, n) {
	if (M(e)) return new st(new Q(n))
	{
		const r = t.writeTree_.findRootMostValueAndPath(e)
		if (r != null) {
			const i = r.path
			let s = r.value
			const o = Re(i, e)
			return (s = s.updateChild(o, n)), new st(t.writeTree_.set(i, s))
		} else {
			const i = new Q(n),
				s = t.writeTree_.setTree(e, i)
			return new st(s)
		}
	}
}
function bd(t, e, n) {
	let r = t
	return (
		Le(n, (i, s) => {
			r = Kr(r, oe(e, i), s)
		}),
		r
	)
}
function Qd(t, e) {
	if (M(e)) return st.empty()
	{
		const n = t.writeTree_.setTree(e, new Q(null))
		return new st(n)
	}
}
function wa(t, e) {
	return In(t, e) != null
}
function In(t, e) {
	const n = t.writeTree_.findRootMostValueAndPath(e)
	return n != null ? t.writeTree_.get(n.path).getChild(Re(n.path, e)) : null
}
function Gd(t) {
	const e = [],
		n = t.writeTree_.value
	return (
		n != null
			? n.isLeafNode() ||
			  n.forEachChild(ee, (r, i) => {
					e.push(new A(r, i))
			  })
			: t.writeTree_.children.inorderTraversal((r, i) => {
					i.value != null && e.push(new A(r, i.value))
			  }),
		e
	)
}
function bt(t, e) {
	if (M(e)) return t
	{
		const n = In(t, e)
		return n != null ? new st(new Q(n)) : new st(t.writeTree_.subtree(e))
	}
}
function Ea(t) {
	return t.writeTree_.isEmpty()
}
function ur(t, e) {
	return Rm(U(), t.writeTree_, e)
}
function Rm(t, e, n) {
	if (e.value != null) return n.updateChild(t, e.value)
	{
		let r = null
		return (
			e.children.inorderTraversal((i, s) => {
				i === '.priority'
					? (w(s.value !== null, 'Priority writes must always be leaf nodes'),
					  (r = s.value))
					: (n = Rm(oe(t, i), s, n))
			}),
			!n.getChild(t).isEmpty() &&
				r !== null &&
				(n = n.updateChild(oe(t, '.priority'), r)),
			n
		)
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Fu(t, e) {
	return Am(e, t)
}
function WC(t, e, n, r, i) {
	w(r > t.lastWriteId, 'Stacking an older write on top of newer ones'),
		i === void 0 && (i = !0),
		t.allWrites.push({ path: e, snap: n, writeId: r, visible: i }),
		i && (t.visibleWrites = Kr(t.visibleWrites, e, n)),
		(t.lastWriteId = r)
}
function VC(t, e) {
	for (let n = 0; n < t.allWrites.length; n++) {
		const r = t.allWrites[n]
		if (r.writeId === e) return r
	}
	return null
}
function HC(t, e) {
	const n = t.allWrites.findIndex((l) => l.writeId === e)
	w(n >= 0, 'removeWrite called with nonexistent writeId.')
	const r = t.allWrites[n]
	t.allWrites.splice(n, 1)
	let i = r.visible,
		s = !1,
		o = t.allWrites.length - 1
	for (; i && o >= 0; ) {
		const l = t.allWrites[o]
		l.visible &&
			(o >= n && $C(l, r.path) ? (i = !1) : tt(r.path, l.path) && (s = !0)),
			o--
	}
	if (i) {
		if (s) return bC(t), !0
		if (r.snap) t.visibleWrites = Qd(t.visibleWrites, r.path)
		else {
			const l = r.children
			Le(l, (a) => {
				t.visibleWrites = Qd(t.visibleWrites, oe(r.path, a))
			})
		}
		return !0
	} else return !1
}
function $C(t, e) {
	if (t.snap) return tt(t.path, e)
	for (const n in t.children)
		if (t.children.hasOwnProperty(n) && tt(oe(t.path, n), e)) return !0
	return !1
}
function bC(t) {
	;(t.visibleWrites = Pm(t.allWrites, QC, U())),
		t.allWrites.length > 0
			? (t.lastWriteId = t.allWrites[t.allWrites.length - 1].writeId)
			: (t.lastWriteId = -1)
}
function QC(t) {
	return t.visible
}
function Pm(t, e, n) {
	let r = st.empty()
	for (let i = 0; i < t.length; ++i) {
		const s = t[i]
		if (e(s)) {
			const o = s.path
			let l
			if (s.snap)
				tt(n, o)
					? ((l = Re(n, o)), (r = Kr(r, l, s.snap)))
					: tt(o, n) && ((l = Re(o, n)), (r = Kr(r, U(), s.snap.getChild(l))))
			else if (s.children) {
				if (tt(n, o)) (l = Re(n, o)), (r = bd(r, l, s.children))
				else if (tt(o, n))
					if (((l = Re(o, n)), M(l))) r = bd(r, U(), s.children)
					else {
						const a = or(s.children, O(l))
						if (a) {
							const u = a.getChild(H(l))
							r = Kr(r, U(), u)
						}
					}
			} else throw pr('WriteRecord should have .snap or .children')
		}
	}
	return r
}
function Dm(t, e, n, r, i) {
	if (!r && !i) {
		const s = In(t.visibleWrites, e)
		if (s != null) return s
		{
			const o = bt(t.visibleWrites, e)
			if (Ea(o)) return n
			if (n == null && !wa(o, U())) return null
			{
				const l = n || x.EMPTY_NODE
				return ur(o, l)
			}
		}
	} else {
		const s = bt(t.visibleWrites, e)
		if (!i && Ea(s)) return n
		if (!i && n == null && !wa(s, U())) return null
		{
			const o = function (u) {
					return (
						(u.visible || i) &&
						(!r || !~r.indexOf(u.writeId)) &&
						(tt(u.path, e) || tt(e, u.path))
					)
				},
				l = Pm(t.allWrites, o, e),
				a = n || x.EMPTY_NODE
			return ur(l, a)
		}
	}
}
function GC(t, e, n) {
	let r = x.EMPTY_NODE
	const i = In(t.visibleWrites, e)
	if (i)
		return (
			i.isLeafNode() ||
				i.forEachChild(ee, (s, o) => {
					r = r.updateImmediateChild(s, o)
				}),
			r
		)
	if (n) {
		const s = bt(t.visibleWrites, e)
		return (
			n.forEachChild(ee, (o, l) => {
				const a = ur(bt(s, new W(o)), l)
				r = r.updateImmediateChild(o, a)
			}),
			Gd(s).forEach((o) => {
				r = r.updateImmediateChild(o.name, o.node)
			}),
			r
		)
	} else {
		const s = bt(t.visibleWrites, e)
		return (
			Gd(s).forEach((o) => {
				r = r.updateImmediateChild(o.name, o.node)
			}),
			r
		)
	}
}
function KC(t, e, n, r, i) {
	w(r || i, 'Either existingEventSnap or existingServerSnap must exist')
	const s = oe(e, n)
	if (wa(t.visibleWrites, s)) return null
	{
		const o = bt(t.visibleWrites, s)
		return Ea(o) ? i.getChild(n) : ur(o, i.getChild(n))
	}
}
function YC(t, e, n, r) {
	const i = oe(e, n),
		s = In(t.visibleWrites, i)
	if (s != null) return s
	if (r.isCompleteForChild(n)) {
		const o = bt(t.visibleWrites, i)
		return ur(o, r.getNode().getImmediateChild(n))
	} else return null
}
function qC(t, e) {
	return In(t.visibleWrites, e)
}
function XC(t, e, n, r, i, s, o) {
	let l
	const a = bt(t.visibleWrites, e),
		u = In(a, U())
	if (u != null) l = u
	else if (n != null) l = ur(a, n)
	else return []
	if (((l = l.withIndex(o)), !l.isEmpty() && !l.isLeafNode())) {
		const f = [],
			c = o.getCompare(),
			d = s ? l.getReverseIteratorFrom(r, o) : l.getIteratorFrom(r, o)
		let g = d.getNext()
		for (; g && f.length < i; ) c(g, r) !== 0 && f.push(g), (g = d.getNext())
		return f
	} else return []
}
function JC() {
	return { visibleWrites: st.empty(), allWrites: [], lastWriteId: -1 }
}
function Ks(t, e, n, r) {
	return Dm(t.writeTree, t.treePath, e, n, r)
}
function zu(t, e) {
	return GC(t.writeTree, t.treePath, e)
}
function Kd(t, e, n, r) {
	return KC(t.writeTree, t.treePath, e, n, r)
}
function Ys(t, e) {
	return qC(t.writeTree, oe(t.treePath, e))
}
function ZC(t, e, n, r, i, s) {
	return XC(t.writeTree, t.treePath, e, n, r, i, s)
}
function Uu(t, e, n) {
	return YC(t.writeTree, t.treePath, e, n)
}
function Om(t, e) {
	return Am(oe(t.treePath, e), t.writeTree)
}
function Am(t, e) {
	return { treePath: t, writeTree: e }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ew {
	constructor() {
		this.changeMap = new Map()
	}
	trackChildChange(e) {
		const n = e.type,
			r = e.childName
		w(
			n === 'child_added' || n === 'child_changed' || n === 'child_removed',
			'Only child changes supported for tracking'
		),
			w(r !== '.priority', 'Only non-priority child changes can be tracked.')
		const i = this.changeMap.get(r)
		if (i) {
			const s = i.type
			if (n === 'child_added' && s === 'child_removed')
				this.changeMap.set(r, vi(r, e.snapshotNode, i.snapshotNode))
			else if (n === 'child_removed' && s === 'child_added')
				this.changeMap.delete(r)
			else if (n === 'child_removed' && s === 'child_changed')
				this.changeMap.set(r, yi(r, i.oldSnap))
			else if (n === 'child_changed' && s === 'child_added')
				this.changeMap.set(r, ar(r, e.snapshotNode))
			else if (n === 'child_changed' && s === 'child_changed')
				this.changeMap.set(r, vi(r, e.snapshotNode, i.oldSnap))
			else
				throw pr(
					'Illegal combination of changes: ' + e + ' occurred after ' + i
				)
		} else this.changeMap.set(r, e)
	}
	getChanges() {
		return Array.from(this.changeMap.values())
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tw {
	getCompleteChild(e) {
		return null
	}
	getChildAfterChild(e, n, r) {
		return null
	}
}
const Mm = new tw()
class ju {
	constructor(e, n, r = null) {
		;(this.writes_ = e),
			(this.viewCache_ = n),
			(this.optCompleteServerCache_ = r)
	}
	getCompleteChild(e) {
		const n = this.viewCache_.eventCache
		if (n.isCompleteForChild(e)) return n.getNode().getImmediateChild(e)
		{
			const r =
				this.optCompleteServerCache_ != null
					? new En(this.optCompleteServerCache_, !0, !1)
					: this.viewCache_.serverCache
			return Uu(this.writes_, e, r)
		}
	}
	getChildAfterChild(e, n, r) {
		const i =
				this.optCompleteServerCache_ != null
					? this.optCompleteServerCache_
					: Sn(this.viewCache_),
			s = ZC(this.writes_, i, n, 1, r, e)
		return s.length === 0 ? null : s[0]
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nw(t) {
	return { filter: t }
}
function rw(t, e) {
	w(
		e.eventCache.getNode().isIndexed(t.filter.getIndex()),
		'Event snap not indexed'
	),
		w(
			e.serverCache.getNode().isIndexed(t.filter.getIndex()),
			'Server snap not indexed'
		)
}
function iw(t, e, n, r, i) {
	const s = new ew()
	let o, l
	if (n.type === nt.OVERWRITE) {
		const u = n
		u.source.fromUser
			? (o = Sa(t, e, u.path, u.snap, r, i, s))
			: (w(u.source.fromServer, 'Unknown source.'),
			  (l = u.source.tagged || (e.serverCache.isFiltered() && !M(u.path))),
			  (o = qs(t, e, u.path, u.snap, r, i, l, s)))
	} else if (n.type === nt.MERGE) {
		const u = n
		u.source.fromUser
			? (o = ow(t, e, u.path, u.children, r, i, s))
			: (w(u.source.fromServer, 'Unknown source.'),
			  (l = u.source.tagged || e.serverCache.isFiltered()),
			  (o = ka(t, e, u.path, u.children, r, i, l, s)))
	} else if (n.type === nt.ACK_USER_WRITE) {
		const u = n
		u.revert
			? (o = uw(t, e, u.path, r, i, s))
			: (o = lw(t, e, u.path, u.affectedTree, r, i, s))
	} else if (n.type === nt.LISTEN_COMPLETE) o = aw(t, e, n.path, r, s)
	else throw pr('Unknown operation type: ' + n.type)
	const a = s.getChanges()
	return sw(e, o, a), { viewCache: o, changes: a }
}
function sw(t, e, n) {
	const r = e.eventCache
	if (r.isFullyInitialized()) {
		const i = r.getNode().isLeafNode() || r.getNode().isEmpty(),
			s = Ca(t)
		;(n.length > 0 ||
			!t.eventCache.isFullyInitialized() ||
			(i && !r.getNode().equals(s)) ||
			!r.getNode().getPriority().equals(s.getPriority())) &&
			n.push(Tm(Ca(e)))
	}
}
function Lm(t, e, n, r, i, s) {
	const o = e.eventCache
	if (Ys(r, n) != null) return e
	{
		let l, a
		if (M(n))
			if (
				(w(
					e.serverCache.isFullyInitialized(),
					'If change path is empty, we must have complete server data'
				),
				e.serverCache.isFiltered())
			) {
				const u = Sn(e),
					f = u instanceof x ? u : x.EMPTY_NODE,
					c = zu(r, f)
				l = t.filter.updateFullNode(e.eventCache.getNode(), c, s)
			} else {
				const u = Ks(r, Sn(e))
				l = t.filter.updateFullNode(e.eventCache.getNode(), u, s)
			}
		else {
			const u = O(n)
			if (u === '.priority') {
				w(Kt(n) === 1, "Can't have a priority with additional path components")
				const f = o.getNode()
				a = e.serverCache.getNode()
				const c = Kd(r, n, f, a)
				c != null ? (l = t.filter.updatePriority(f, c)) : (l = o.getNode())
			} else {
				const f = H(n)
				let c
				if (o.isCompleteForChild(u)) {
					a = e.serverCache.getNode()
					const d = Kd(r, n, o.getNode(), a)
					d != null
						? (c = o.getNode().getImmediateChild(u).updateChild(f, d))
						: (c = o.getNode().getImmediateChild(u))
				} else c = Uu(r, u, e.serverCache)
				c != null
					? (l = t.filter.updateChild(o.getNode(), u, c, f, i, s))
					: (l = o.getNode())
			}
		}
		return Gr(e, l, o.isFullyInitialized() || M(n), t.filter.filtersNodes())
	}
}
function qs(t, e, n, r, i, s, o, l) {
	const a = e.serverCache
	let u
	const f = o ? t.filter : t.filter.getIndexedFilter()
	if (M(n)) u = f.updateFullNode(a.getNode(), r, null)
	else if (f.filtersNodes() && !a.isFiltered()) {
		const g = a.getNode().updateChild(n, r)
		u = f.updateFullNode(a.getNode(), g, null)
	} else {
		const g = O(n)
		if (!a.isCompleteForPath(n) && Kt(n) > 1) return e
		const _ = H(n),
			R = a.getNode().getImmediateChild(g).updateChild(_, r)
		g === '.priority'
			? (u = f.updatePriority(a.getNode(), R))
			: (u = f.updateChild(a.getNode(), g, R, _, Mm, null))
	}
	const c = xm(e, u, a.isFullyInitialized() || M(n), f.filtersNodes()),
		d = new ju(i, c, s)
	return Lm(t, c, n, i, d, l)
}
function Sa(t, e, n, r, i, s, o) {
	const l = e.eventCache
	let a, u
	const f = new ju(i, e, s)
	if (M(n))
		(u = t.filter.updateFullNode(e.eventCache.getNode(), r, o)),
			(a = Gr(e, u, !0, t.filter.filtersNodes()))
	else {
		const c = O(n)
		if (c === '.priority')
			(u = t.filter.updatePriority(e.eventCache.getNode(), r)),
				(a = Gr(e, u, l.isFullyInitialized(), l.isFiltered()))
		else {
			const d = H(n),
				g = l.getNode().getImmediateChild(c)
			let _
			if (M(d)) _ = r
			else {
				const y = f.getCompleteChild(c)
				y != null
					? gm(d) === '.priority' && y.getChild(ym(d)).isEmpty()
						? (_ = y)
						: (_ = y.updateChild(d, r))
					: (_ = x.EMPTY_NODE)
			}
			if (g.equals(_)) a = e
			else {
				const y = t.filter.updateChild(l.getNode(), c, _, d, f, o)
				a = Gr(e, y, l.isFullyInitialized(), t.filter.filtersNodes())
			}
		}
	}
	return a
}
function Yd(t, e) {
	return t.eventCache.isCompleteForChild(e)
}
function ow(t, e, n, r, i, s, o) {
	let l = e
	return (
		r.foreach((a, u) => {
			const f = oe(n, a)
			Yd(e, O(f)) && (l = Sa(t, l, f, u, i, s, o))
		}),
		r.foreach((a, u) => {
			const f = oe(n, a)
			Yd(e, O(f)) || (l = Sa(t, l, f, u, i, s, o))
		}),
		l
	)
}
function qd(t, e, n) {
	return (
		n.foreach((r, i) => {
			e = e.updateChild(r, i)
		}),
		e
	)
}
function ka(t, e, n, r, i, s, o, l) {
	if (e.serverCache.getNode().isEmpty() && !e.serverCache.isFullyInitialized())
		return e
	let a = e,
		u
	M(n) ? (u = r) : (u = new Q(null).setTree(n, r))
	const f = e.serverCache.getNode()
	return (
		u.children.inorderTraversal((c, d) => {
			if (f.hasChild(c)) {
				const g = e.serverCache.getNode().getImmediateChild(c),
					_ = qd(t, g, d)
				a = qs(t, a, new W(c), _, i, s, o, l)
			}
		}),
		u.children.inorderTraversal((c, d) => {
			const g = !e.serverCache.isCompleteForChild(c) && d.value === null
			if (!f.hasChild(c) && !g) {
				const _ = e.serverCache.getNode().getImmediateChild(c),
					y = qd(t, _, d)
				a = qs(t, a, new W(c), y, i, s, o, l)
			}
		}),
		a
	)
}
function lw(t, e, n, r, i, s, o) {
	if (Ys(i, n) != null) return e
	const l = e.serverCache.isFiltered(),
		a = e.serverCache
	if (r.value != null) {
		if ((M(n) && a.isFullyInitialized()) || a.isCompleteForPath(n))
			return qs(t, e, n, a.getNode().getChild(n), i, s, l, o)
		if (M(n)) {
			let u = new Q(null)
			return (
				a.getNode().forEachChild(Xn, (f, c) => {
					u = u.set(new W(f), c)
				}),
				ka(t, e, n, u, i, s, l, o)
			)
		} else return e
	} else {
		let u = new Q(null)
		return (
			r.foreach((f, c) => {
				const d = oe(n, f)
				a.isCompleteForPath(d) && (u = u.set(f, a.getNode().getChild(d)))
			}),
			ka(t, e, n, u, i, s, l, o)
		)
	}
}
function aw(t, e, n, r, i) {
	const s = e.serverCache,
		o = xm(e, s.getNode(), s.isFullyInitialized() || M(n), s.isFiltered())
	return Lm(t, o, n, r, Mm, i)
}
function uw(t, e, n, r, i, s) {
	let o
	if (Ys(r, n) != null) return e
	{
		const l = new ju(r, e, i),
			a = e.eventCache.getNode()
		let u
		if (M(n) || O(n) === '.priority') {
			let f
			if (e.serverCache.isFullyInitialized()) f = Ks(r, Sn(e))
			else {
				const c = e.serverCache.getNode()
				w(c instanceof x, 'serverChildren would be complete if leaf node'),
					(f = zu(r, c))
			}
			;(f = f), (u = t.filter.updateFullNode(a, f, s))
		} else {
			const f = O(n)
			let c = Uu(r, f, e.serverCache)
			c == null &&
				e.serverCache.isCompleteForChild(f) &&
				(c = a.getImmediateChild(f)),
				c != null
					? (u = t.filter.updateChild(a, f, c, H(n), l, s))
					: e.eventCache.getNode().hasChild(f)
					? (u = t.filter.updateChild(a, f, x.EMPTY_NODE, H(n), l, s))
					: (u = a),
				u.isEmpty() &&
					e.serverCache.isFullyInitialized() &&
					((o = Ks(r, Sn(e))),
					o.isLeafNode() && (u = t.filter.updateFullNode(u, o, s)))
		}
		return (
			(o = e.serverCache.isFullyInitialized() || Ys(r, U()) != null),
			Gr(e, u, o, t.filter.filtersNodes())
		)
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cw {
	constructor(e, n) {
		;(this.query_ = e), (this.eventRegistrations_ = [])
		const r = this.query_._queryParams,
			i = new Ou(r.getIndex()),
			s = RC(r)
		this.processor_ = nw(s)
		const o = n.serverCache,
			l = n.eventCache,
			a = i.updateFullNode(x.EMPTY_NODE, o.getNode(), null),
			u = s.updateFullNode(x.EMPTY_NODE, l.getNode(), null),
			f = new En(a, o.isFullyInitialized(), i.filtersNodes()),
			c = new En(u, l.isFullyInitialized(), s.filtersNodes())
		;(this.viewCache_ = Co(c, f)), (this.eventGenerator_ = new FC(this.query_))
	}
	get query() {
		return this.query_
	}
}
function dw(t) {
	return t.viewCache_.serverCache.getNode()
}
function fw(t, e) {
	const n = Sn(t.viewCache_)
	return n &&
		(t.query._queryParams.loadsAllData() ||
			(!M(e) && !n.getImmediateChild(O(e)).isEmpty()))
		? n.getChild(e)
		: null
}
function Xd(t) {
	return t.eventRegistrations_.length === 0
}
function hw(t, e) {
	t.eventRegistrations_.push(e)
}
function Jd(t, e, n) {
	const r = []
	if (n) {
		w(e == null, 'A cancel should cancel all event registrations.')
		const i = t.query._path
		t.eventRegistrations_.forEach((s) => {
			const o = s.createCancelEvent(n, i)
			o && r.push(o)
		})
	}
	if (e) {
		let i = []
		for (let s = 0; s < t.eventRegistrations_.length; ++s) {
			const o = t.eventRegistrations_[s]
			if (!o.matches(e)) i.push(o)
			else if (e.hasAnyCallback()) {
				i = i.concat(t.eventRegistrations_.slice(s + 1))
				break
			}
		}
		t.eventRegistrations_ = i
	} else t.eventRegistrations_ = []
	return r
}
function Zd(t, e, n, r) {
	e.type === nt.MERGE &&
		e.source.queryId !== null &&
		(w(
			Sn(t.viewCache_),
			'We should always have a full cache before handling merges'
		),
		w(
			Ca(t.viewCache_),
			'Missing event cache, even though we have a server cache'
		))
	const i = t.viewCache_,
		s = iw(t.processor_, i, e, n, r)
	return (
		rw(t.processor_, s.viewCache),
		w(
			s.viewCache.serverCache.isFullyInitialized() ||
				!i.serverCache.isFullyInitialized(),
			'Once a server snap is complete, it should never go back'
		),
		(t.viewCache_ = s.viewCache),
		Fm(t, s.changes, s.viewCache.eventCache.getNode(), null)
	)
}
function pw(t, e) {
	const n = t.viewCache_.eventCache,
		r = []
	return (
		n.getNode().isLeafNode() ||
			n.getNode().forEachChild(ee, (s, o) => {
				r.push(ar(s, o))
			}),
		n.isFullyInitialized() && r.push(Tm(n.getNode())),
		Fm(t, r, n.getNode(), e)
	)
}
function Fm(t, e, n, r) {
	const i = r ? [r] : t.eventRegistrations_
	return zC(t.eventGenerator_, e, n, i)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Xs
class mw {
	constructor() {
		this.views = new Map()
	}
}
function gw(t) {
	w(!Xs, '__referenceConstructor has already been defined'), (Xs = t)
}
function _w() {
	return w(Xs, 'Reference.ts has not been loaded'), Xs
}
function yw(t) {
	return t.views.size === 0
}
function Bu(t, e, n, r) {
	const i = e.source.queryId
	if (i !== null) {
		const s = t.views.get(i)
		return (
			w(s != null, 'SyncTree gave us an op for an invalid query.'),
			Zd(s, e, n, r)
		)
	} else {
		let s = []
		for (const o of t.views.values()) s = s.concat(Zd(o, e, n, r))
		return s
	}
}
function vw(t, e, n, r, i) {
	const s = e._queryIdentifier,
		o = t.views.get(s)
	if (!o) {
		let l = Ks(n, i ? r : null),
			a = !1
		l
			? (a = !0)
			: r instanceof x
			? ((l = zu(n, r)), (a = !1))
			: ((l = x.EMPTY_NODE), (a = !1))
		const u = Co(new En(l, a, !1), new En(r, i, !1))
		return new cw(e, u)
	}
	return o
}
function Cw(t, e, n, r, i, s) {
	const o = vw(t, e, r, i, s)
	return (
		t.views.has(e._queryIdentifier) || t.views.set(e._queryIdentifier, o),
		hw(o, n),
		pw(o, n)
	)
}
function ww(t, e, n, r) {
	const i = e._queryIdentifier,
		s = []
	let o = []
	const l = Yt(t)
	if (i === 'default')
		for (const [a, u] of t.views.entries())
			(o = o.concat(Jd(u, n, r))),
				Xd(u) &&
					(t.views.delete(a),
					u.query._queryParams.loadsAllData() || s.push(u.query))
	else {
		const a = t.views.get(i)
		a &&
			((o = o.concat(Jd(a, n, r))),
			Xd(a) &&
				(t.views.delete(i),
				a.query._queryParams.loadsAllData() || s.push(a.query)))
	}
	return (
		l && !Yt(t) && s.push(new (_w())(e._repo, e._path)),
		{ removed: s, events: o }
	)
}
function zm(t) {
	const e = []
	for (const n of t.views.values())
		n.query._queryParams.loadsAllData() || e.push(n)
	return e
}
function Jn(t, e) {
	let n = null
	for (const r of t.views.values()) n = n || fw(r, e)
	return n
}
function Um(t, e) {
	if (e._queryParams.loadsAllData()) return wo(t)
	{
		const r = e._queryIdentifier
		return t.views.get(r)
	}
}
function jm(t, e) {
	return Um(t, e) != null
}
function Yt(t) {
	return wo(t) != null
}
function wo(t) {
	for (const e of t.views.values())
		if (e.query._queryParams.loadsAllData()) return e
	return null
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Js
function Ew(t) {
	w(!Js, '__referenceConstructor has already been defined'), (Js = t)
}
function Sw() {
	return w(Js, 'Reference.ts has not been loaded'), Js
}
let kw = 1
class ef {
	constructor(e) {
		;(this.listenProvider_ = e),
			(this.syncPointTree_ = new Q(null)),
			(this.pendingWriteTree_ = JC()),
			(this.tagToQueryMap = new Map()),
			(this.queryToTagMap = new Map())
	}
}
function Bm(t, e, n, r, i) {
	return WC(t.pendingWriteTree_, e, n, r, i), i ? Ai(t, new wn(Nm(), e, n)) : []
}
function cn(t, e, n = !1) {
	const r = VC(t.pendingWriteTree_, e)
	if (HC(t.pendingWriteTree_, e)) {
		let s = new Q(null)
		return (
			r.snap != null
				? (s = s.set(U(), !0))
				: Le(r.children, (o) => {
						s = s.set(new W(o), !0)
				  }),
			Ai(t, new Gs(r.path, s, n))
		)
	} else return []
}
function Eo(t, e, n) {
	return Ai(t, new wn(Mu(), e, n))
}
function Tw(t, e, n) {
	const r = Q.fromObject(n)
	return Ai(t, new Ei(Mu(), e, r))
}
function Iw(t, e) {
	return Ai(t, new wi(Mu(), e))
}
function Nw(t, e, n) {
	const r = Vu(t, n)
	if (r) {
		const i = Hu(r),
			s = i.path,
			o = i.queryId,
			l = Re(s, e),
			a = new wi(Lu(o), l)
		return $u(t, s, a)
	} else return []
}
function Ta(t, e, n, r, i = !1) {
	const s = e._path,
		o = t.syncPointTree_.get(s)
	let l = []
	if (o && (e._queryIdentifier === 'default' || jm(o, e))) {
		const a = ww(o, e, n, r)
		yw(o) && (t.syncPointTree_ = t.syncPointTree_.remove(s))
		const u = a.removed
		if (((l = a.events), !i)) {
			const f = u.findIndex((d) => d._queryParams.loadsAllData()) !== -1,
				c = t.syncPointTree_.findOnPath(s, (d, g) => Yt(g))
			if (f && !c) {
				const d = t.syncPointTree_.subtree(s)
				if (!d.isEmpty()) {
					const g = Pw(d)
					for (let _ = 0; _ < g.length; ++_) {
						const y = g[_],
							R = y.query,
							p = Hm(t, y)
						t.listenProvider_.startListening(
							Yr(R),
							Zs(t, R),
							p.hashFn,
							p.onComplete
						)
					}
				}
			}
			!c &&
				u.length > 0 &&
				!r &&
				(f
					? t.listenProvider_.stopListening(Yr(e), null)
					: u.forEach((d) => {
							const g = t.queryToTagMap.get(So(d))
							t.listenProvider_.stopListening(Yr(d), g)
					  }))
		}
		Dw(t, u)
	}
	return l
}
function xw(t, e, n, r) {
	const i = Vu(t, r)
	if (i != null) {
		const s = Hu(i),
			o = s.path,
			l = s.queryId,
			a = Re(o, e),
			u = new wn(Lu(l), a, n)
		return $u(t, o, u)
	} else return []
}
function Rw(t, e, n, r) {
	const i = Vu(t, r)
	if (i) {
		const s = Hu(i),
			o = s.path,
			l = s.queryId,
			a = Re(o, e),
			u = Q.fromObject(n),
			f = new Ei(Lu(l), a, u)
		return $u(t, o, f)
	} else return []
}
function tf(t, e, n, r = !1) {
	const i = e._path
	let s = null,
		o = !1
	t.syncPointTree_.foreachOnPath(i, (d, g) => {
		const _ = Re(d, i)
		;(s = s || Jn(g, _)), (o = o || Yt(g))
	})
	let l = t.syncPointTree_.get(i)
	l
		? ((o = o || Yt(l)), (s = s || Jn(l, U())))
		: ((l = new mw()), (t.syncPointTree_ = t.syncPointTree_.set(i, l)))
	let a
	s != null
		? (a = !0)
		: ((a = !1),
		  (s = x.EMPTY_NODE),
		  t.syncPointTree_.subtree(i).foreachChild((g, _) => {
				const y = Jn(_, U())
				y && (s = s.updateImmediateChild(g, y))
		  }))
	const u = jm(l, e)
	if (!u && !e._queryParams.loadsAllData()) {
		const d = So(e)
		w(!t.queryToTagMap.has(d), 'View does not exist, but we have a tag')
		const g = Ow()
		t.queryToTagMap.set(d, g), t.tagToQueryMap.set(g, d)
	}
	const f = Fu(t.pendingWriteTree_, i)
	let c = Cw(l, e, n, f, s, a)
	if (!u && !o && !r) {
		const d = Um(l, e)
		c = c.concat(Aw(t, e, d))
	}
	return c
}
function Wu(t, e, n) {
	const i = t.pendingWriteTree_,
		s = t.syncPointTree_.findOnPath(e, (o, l) => {
			const a = Re(o, e),
				u = Jn(l, a)
			if (u) return u
		})
	return Dm(i, e, s, n, !0)
}
function Ai(t, e) {
	return Wm(e, t.syncPointTree_, null, Fu(t.pendingWriteTree_, U()))
}
function Wm(t, e, n, r) {
	if (M(t.path)) return Vm(t, e, n, r)
	{
		const i = e.get(U())
		n == null && i != null && (n = Jn(i, U()))
		let s = []
		const o = O(t.path),
			l = t.operationForChild(o),
			a = e.children.get(o)
		if (a && l) {
			const u = n ? n.getImmediateChild(o) : null,
				f = Om(r, o)
			s = s.concat(Wm(l, a, u, f))
		}
		return i && (s = s.concat(Bu(i, t, r, n))), s
	}
}
function Vm(t, e, n, r) {
	const i = e.get(U())
	n == null && i != null && (n = Jn(i, U()))
	let s = []
	return (
		e.children.inorderTraversal((o, l) => {
			const a = n ? n.getImmediateChild(o) : null,
				u = Om(r, o),
				f = t.operationForChild(o)
			f && (s = s.concat(Vm(f, l, a, u)))
		}),
		i && (s = s.concat(Bu(i, t, r, n))),
		s
	)
}
function Hm(t, e) {
	const n = e.query,
		r = Zs(t, n)
	return {
		hashFn: () => (dw(e) || x.EMPTY_NODE).hash(),
		onComplete: (i) => {
			if (i === 'ok') return r ? Nw(t, n._path, r) : Iw(t, n._path)
			{
				const s = x0(i, n)
				return Ta(t, n, null, s)
			}
		}
	}
}
function Zs(t, e) {
	const n = So(e)
	return t.queryToTagMap.get(n)
}
function So(t) {
	return t._path.toString() + '$' + t._queryIdentifier
}
function Vu(t, e) {
	return t.tagToQueryMap.get(e)
}
function Hu(t) {
	const e = t.indexOf('$')
	return (
		w(e !== -1 && e < t.length - 1, 'Bad queryKey.'),
		{ queryId: t.substr(e + 1), path: new W(t.substr(0, e)) }
	)
}
function $u(t, e, n) {
	const r = t.syncPointTree_.get(e)
	w(r, "Missing sync point for query tag that we're tracking")
	const i = Fu(t.pendingWriteTree_, e)
	return Bu(r, n, i, null)
}
function Pw(t) {
	return t.fold((e, n, r) => {
		if (n && Yt(n)) return [wo(n)]
		{
			let i = []
			return (
				n && (i = zm(n)),
				Le(r, (s, o) => {
					i = i.concat(o)
				}),
				i
			)
		}
	})
}
function Yr(t) {
	return t._queryParams.loadsAllData() && !t._queryParams.isDefault()
		? new (Sw())(t._repo, t._path)
		: t
}
function Dw(t, e) {
	for (let n = 0; n < e.length; ++n) {
		const r = e[n]
		if (!r._queryParams.loadsAllData()) {
			const i = So(r),
				s = t.queryToTagMap.get(i)
			t.queryToTagMap.delete(i), t.tagToQueryMap.delete(s)
		}
	}
}
function Ow() {
	return kw++
}
function Aw(t, e, n) {
	const r = e._path,
		i = Zs(t, e),
		s = Hm(t, n),
		o = t.listenProvider_.startListening(Yr(e), i, s.hashFn, s.onComplete),
		l = t.syncPointTree_.subtree(r)
	if (i) w(!Yt(l.value), "If we're adding a query, it shouldn't be shadowed")
	else {
		const a = l.fold((u, f, c) => {
			if (!M(u) && f && Yt(f)) return [wo(f).query]
			{
				let d = []
				return (
					f && (d = d.concat(zm(f).map((g) => g.query))),
					Le(c, (g, _) => {
						d = d.concat(_)
					}),
					d
				)
			}
		})
		for (let u = 0; u < a.length; ++u) {
			const f = a[u]
			t.listenProvider_.stopListening(Yr(f), Zs(t, f))
		}
	}
	return o
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bu {
	constructor(e) {
		this.node_ = e
	}
	getImmediateChild(e) {
		const n = this.node_.getImmediateChild(e)
		return new bu(n)
	}
	node() {
		return this.node_
	}
}
class Qu {
	constructor(e, n) {
		;(this.syncTree_ = e), (this.path_ = n)
	}
	getImmediateChild(e) {
		const n = oe(this.path_, e)
		return new Qu(this.syncTree_, n)
	}
	node() {
		return Wu(this.syncTree_, this.path_)
	}
}
const Mw = function (t) {
		return (t = t || {}), (t.timestamp = t.timestamp || new Date().getTime()), t
	},
	nf = function (t, e, n) {
		if (!t || typeof t != 'object') return t
		if (
			(w('.sv' in t, 'Unexpected leaf node or priority contents'),
			typeof t['.sv'] == 'string')
		)
			return Lw(t['.sv'], e, n)
		if (typeof t['.sv'] == 'object') return Fw(t['.sv'], e)
		w(!1, 'Unexpected server value: ' + JSON.stringify(t, null, 2))
	},
	Lw = function (t, e, n) {
		switch (t) {
			case 'timestamp':
				return n.timestamp
			default:
				w(!1, 'Unexpected server value: ' + t)
		}
	},
	Fw = function (t, e, n) {
		t.hasOwnProperty('increment') ||
			w(!1, 'Unexpected server value: ' + JSON.stringify(t, null, 2))
		const r = t.increment
		typeof r != 'number' && w(!1, 'Unexpected increment value: ' + r)
		const i = e.node()
		if (
			(w(
				i !== null && typeof i < 'u',
				'Expected ChildrenNode.EMPTY_NODE for nulls'
			),
			!i.isLeafNode())
		)
			return r
		const o = i.getValue()
		return typeof o != 'number' ? r : o + r
	},
	zw = function (t, e, n, r) {
		return Gu(e, new Qu(n, t), r)
	},
	$m = function (t, e, n) {
		return Gu(t, new bu(e), n)
	}
function Gu(t, e, n) {
	const r = t.getPriority().val(),
		i = nf(r, e.getImmediateChild('.priority'), n)
	let s
	if (t.isLeafNode()) {
		const o = t,
			l = nf(o.getValue(), e, n)
		return l !== o.getValue() || i !== o.getPriority().val()
			? new ue(l, me(i))
			: t
	} else {
		const o = t
		return (
			(s = o),
			i !== o.getPriority().val() && (s = s.updatePriority(new ue(i))),
			o.forEachChild(ee, (l, a) => {
				const u = Gu(a, e.getImmediateChild(l), n)
				u !== a && (s = s.updateImmediateChild(l, u))
			}),
			s
		)
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ku {
	constructor(e = '', n = null, r = { children: {}, childCount: 0 }) {
		;(this.name = e), (this.parent = n), (this.node = r)
	}
}
function Yu(t, e) {
	let n = e instanceof W ? e : new W(e),
		r = t,
		i = O(n)
	for (; i !== null; ) {
		const s = or(r.node.children, i) || { children: {}, childCount: 0 }
		;(r = new Ku(i, r, s)), (n = H(n)), (i = O(n))
	}
	return r
}
function yr(t) {
	return t.node.value
}
function bm(t, e) {
	;(t.node.value = e), Ia(t)
}
function Qm(t) {
	return t.node.childCount > 0
}
function Uw(t) {
	return yr(t) === void 0 && !Qm(t)
}
function ko(t, e) {
	Le(t.node.children, (n, r) => {
		e(new Ku(n, t, r))
	})
}
function Gm(t, e, n, r) {
	n && !r && e(t),
		ko(t, (i) => {
			Gm(i, e, !0, r)
		}),
		n && r && e(t)
}
function jw(t, e, n) {
	let r = n ? t : t.parent
	for (; r !== null; ) {
		if (e(r)) return !0
		r = r.parent
	}
	return !1
}
function Mi(t) {
	return new W(t.parent === null ? t.name : Mi(t.parent) + '/' + t.name)
}
function Ia(t) {
	t.parent !== null && Bw(t.parent, t.name, t)
}
function Bw(t, e, n) {
	const r = Uw(n),
		i = It(t.node.children, e)
	r && i
		? (delete t.node.children[e], t.node.childCount--, Ia(t))
		: !r && !i && ((t.node.children[e] = n.node), t.node.childCount++, Ia(t))
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ww = /[\[\].#$\/\u0000-\u001F\u007F]/,
	Vw = /[\[\].#$\u0000-\u001F\u007F]/,
	hl = 10 * 1024 * 1024,
	Km = function (t) {
		return typeof t == 'string' && t.length !== 0 && !Ww.test(t)
	},
	Ym = function (t) {
		return typeof t == 'string' && t.length !== 0 && !Vw.test(t)
	},
	Hw = function (t) {
		return t && (t = t.replace(/^\/*\.info(\/|$)/, '/')), Ym(t)
	},
	qm = function (t, e, n, r) {
		;(r && e === void 0) || qu(Su(t, 'value'), e, n)
	},
	qu = function (t, e, n) {
		const r = n instanceof W ? new lC(n, t) : n
		if (e === void 0) throw new Error(t + 'contains undefined ' + sn(r))
		if (typeof e == 'function')
			throw new Error(
				t + 'contains a function ' + sn(r) + ' with contents = ' + e.toString()
			)
		if (Yp(e)) throw new Error(t + 'contains ' + e.toString() + ' ' + sn(r))
		if (typeof e == 'string' && e.length > hl / 3 && yo(e) > hl)
			throw new Error(
				t +
					'contains a string greater than ' +
					hl +
					' utf8 bytes ' +
					sn(r) +
					" ('" +
					e.substring(0, 50) +
					"...')"
			)
		if (e && typeof e == 'object') {
			let i = !1,
				s = !1
			if (
				(Le(e, (o, l) => {
					if (o === '.value') i = !0
					else if (o !== '.priority' && o !== '.sv' && ((s = !0), !Km(o)))
						throw new Error(
							t +
								' contains an invalid key (' +
								o +
								') ' +
								sn(r) +
								`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`
						)
					aC(r, o), qu(t, l, r), uC(r)
				}),
				i && s)
			)
				throw new Error(
					t +
						' contains ".value" child ' +
						sn(r) +
						' in addition to actual children.'
				)
		}
	},
	Xm = function (t, e, n, r) {
		if (!(r && n === void 0) && !Ym(n))
			throw new Error(
				Su(t, e) +
					'was an invalid path = "' +
					n +
					`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`
			)
	},
	$w = function (t, e, n, r) {
		n && (n = n.replace(/^\/*\.info(\/|$)/, '/')), Xm(t, e, n, r)
	},
	Xu = function (t, e) {
		if (O(e) === '.info')
			throw new Error(t + " failed = Can't modify data under /.info/")
	},
	bw = function (t, e) {
		const n = e.path.toString()
		if (
			typeof e.repoInfo.host != 'string' ||
			e.repoInfo.host.length === 0 ||
			(!Km(e.repoInfo.namespace) &&
				e.repoInfo.host.split(':')[0] !== 'localhost') ||
			(n.length !== 0 && !Hw(n))
		)
			throw new Error(
				Su(t, 'url') +
					`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`
			)
	}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qw {
	constructor() {
		;(this.eventLists_ = []), (this.recursionDepth_ = 0)
	}
}
function Ju(t, e) {
	let n = null
	for (let r = 0; r < e.length; r++) {
		const i = e[r],
			s = i.getPath()
		n !== null && !Ru(s, n.path) && (t.eventLists_.push(n), (n = null)),
			n === null && (n = { events: [], path: s }),
			n.events.push(i)
	}
	n && t.eventLists_.push(n)
}
function Jm(t, e, n) {
	Ju(t, n), Zm(t, (r) => Ru(r, e))
}
function kt(t, e, n) {
	Ju(t, n), Zm(t, (r) => tt(r, e) || tt(e, r))
}
function Zm(t, e) {
	t.recursionDepth_++
	let n = !0
	for (let r = 0; r < t.eventLists_.length; r++) {
		const i = t.eventLists_[r]
		if (i) {
			const s = i.path
			e(s) ? (Gw(t.eventLists_[r]), (t.eventLists_[r] = null)) : (n = !1)
		}
	}
	n && (t.eventLists_ = []), t.recursionDepth_--
}
function Gw(t) {
	for (let e = 0; e < t.events.length; e++) {
		const n = t.events[e]
		if (n !== null) {
			t.events[e] = null
			const r = n.getEventRunner()
			hn && we('event: ' + n.toString()), _r(r)
		}
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Kw = 'repo_interrupt',
	Yw = 25
class qw {
	constructor(e, n, r, i) {
		;(this.repoInfo_ = e),
			(this.forceRestClient_ = n),
			(this.authTokenProvider_ = r),
			(this.appCheckProvider_ = i),
			(this.dataUpdateCount = 0),
			(this.statsListener_ = null),
			(this.eventQueue_ = new Qw()),
			(this.nextWriteId_ = 1),
			(this.interceptServerDataCallback_ = null),
			(this.onDisconnect_ = Qs()),
			(this.transactionQueueTree_ = new Ku()),
			(this.persistentConnection_ = null),
			(this.key = this.repoInfo_.toURLString())
	}
	toString() {
		return (
			(this.repoInfo_.secure ? 'https://' : 'http://') + this.repoInfo_.host
		)
	}
}
function Xw(t, e, n) {
	if (((t.stats_ = Nu(t.repoInfo_)), t.forceRestClient_ || O0()))
		(t.server_ = new bs(
			t.repoInfo_,
			(r, i, s, o) => {
				rf(t, r, i, s, o)
			},
			t.authTokenProvider_,
			t.appCheckProvider_
		)),
			setTimeout(() => sf(t, !0), 0)
	else {
		if (typeof n < 'u' && n !== null) {
			if (typeof n != 'object')
				throw new Error(
					'Only objects are supported for option databaseAuthVariableOverride'
				)
			try {
				fe(n)
			} catch (r) {
				throw new Error('Invalid authOverride provided: ' + r)
			}
		}
		;(t.persistentConnection_ = new yt(
			t.repoInfo_,
			e,
			(r, i, s, o) => {
				rf(t, r, i, s, o)
			},
			(r) => {
				sf(t, r)
			},
			(r) => {
				Jw(t, r)
			},
			t.authTokenProvider_,
			t.appCheckProvider_,
			n
		)),
			(t.server_ = t.persistentConnection_)
	}
	t.authTokenProvider_.addTokenChangeListener((r) => {
		t.server_.refreshAuthToken(r)
	}),
		t.appCheckProvider_.addTokenChangeListener((r) => {
			t.server_.refreshAppCheckToken(r.token)
		}),
		(t.statsReporter_ = z0(t.repoInfo_, () => new LC(t.stats_, t.server_))),
		(t.infoData_ = new PC()),
		(t.infoSyncTree_ = new ef({
			startListening: (r, i, s, o) => {
				let l = []
				const a = t.infoData_.getNode(r._path)
				return (
					a.isEmpty() ||
						((l = Eo(t.infoSyncTree_, r._path, a)),
						setTimeout(() => {
							o('ok')
						}, 0)),
					l
				)
			},
			stopListening: () => {}
		})),
		ec(t, 'connected', !1),
		(t.serverSyncTree_ = new ef({
			startListening: (r, i, s, o) => (
				t.server_.listen(r, s, i, (l, a) => {
					const u = o(l, a)
					kt(t.eventQueue_, r._path, u)
				}),
				[]
			),
			stopListening: (r, i) => {
				t.server_.unlisten(r, i)
			}
		}))
}
function eg(t) {
	const n = t.infoData_.getNode(new W('.info/serverTimeOffset')).val() || 0
	return new Date().getTime() + n
}
function Zu(t) {
	return Mw({ timestamp: eg(t) })
}
function rf(t, e, n, r, i) {
	t.dataUpdateCount++
	const s = new W(e)
	n = t.interceptServerDataCallback_ ? t.interceptServerDataCallback_(e, n) : n
	let o = []
	if (i)
		if (r) {
			const a = js(n, (u) => me(u))
			o = Rw(t.serverSyncTree_, s, a, i)
		} else {
			const a = me(n)
			o = xw(t.serverSyncTree_, s, a, i)
		}
	else if (r) {
		const a = js(n, (u) => me(u))
		o = Tw(t.serverSyncTree_, s, a)
	} else {
		const a = me(n)
		o = Eo(t.serverSyncTree_, s, a)
	}
	let l = s
	o.length > 0 && (l = To(t, s)), kt(t.eventQueue_, l, o)
}
function sf(t, e) {
	ec(t, 'connected', e), e === !1 && eE(t)
}
function Jw(t, e) {
	Le(e, (n, r) => {
		ec(t, n, r)
	})
}
function ec(t, e, n) {
	const r = new W('/.info/' + e),
		i = me(n)
	t.infoData_.updateSnapshot(r, i)
	const s = Eo(t.infoSyncTree_, r, i)
	kt(t.eventQueue_, r, s)
}
function tg(t) {
	return t.nextWriteId_++
}
function Zw(t, e, n, r, i) {
	tc(t, 'set', { path: e.toString(), value: n, priority: r })
	const s = Zu(t),
		o = me(n, r),
		l = Wu(t.serverSyncTree_, e),
		a = $m(o, l, s),
		u = tg(t),
		f = Bm(t.serverSyncTree_, e, a, u, !0)
	Ju(t.eventQueue_, f),
		t.server_.put(e.toString(), o.val(!0), (d, g) => {
			const _ = d === 'ok'
			_ || Me('set at ' + e + ' failed: ' + d)
			const y = cn(t.serverSyncTree_, u, !_)
			kt(t.eventQueue_, e, y), rE(t, i, d, g)
		})
	const c = og(t, e)
	To(t, c), kt(t.eventQueue_, c, [])
}
function eE(t) {
	tc(t, 'onDisconnectEvents')
	const e = Zu(t),
		n = Qs()
	va(t.onDisconnect_, U(), (i, s) => {
		const o = zw(i, s, t.serverSyncTree_, e)
		Im(n, i, o)
	})
	let r = []
	va(n, U(), (i, s) => {
		r = r.concat(Eo(t.serverSyncTree_, i, s))
		const o = og(t, i)
		To(t, o)
	}),
		(t.onDisconnect_ = Qs()),
		kt(t.eventQueue_, U(), r)
}
function tE(t, e, n) {
	let r
	O(e._path) === '.info'
		? (r = tf(t.infoSyncTree_, e, n))
		: (r = tf(t.serverSyncTree_, e, n)),
		Jm(t.eventQueue_, e._path, r)
}
function of(t, e, n) {
	let r
	O(e._path) === '.info'
		? (r = Ta(t.infoSyncTree_, e, n))
		: (r = Ta(t.serverSyncTree_, e, n)),
		Jm(t.eventQueue_, e._path, r)
}
function nE(t) {
	t.persistentConnection_ && t.persistentConnection_.interrupt(Kw)
}
function tc(t, ...e) {
	let n = ''
	t.persistentConnection_ && (n = t.persistentConnection_.id + ':'), we(n, ...e)
}
function rE(t, e, n, r) {
	e &&
		_r(() => {
			if (n === 'ok') e(null)
			else {
				const i = (n || 'error').toUpperCase()
				let s = i
				r && (s += ': ' + r)
				const o = new Error(s)
				;(o.code = i), e(o)
			}
		})
}
function ng(t, e, n) {
	return Wu(t.serverSyncTree_, e, n) || x.EMPTY_NODE
}
function nc(t, e = t.transactionQueueTree_) {
	if ((e || Io(t, e), yr(e))) {
		const n = ig(t, e)
		w(n.length > 0, 'Sending zero length transaction queue'),
			n.every((i) => i.status === 0) && iE(t, Mi(e), n)
	} else
		Qm(e) &&
			ko(e, (n) => {
				nc(t, n)
			})
}
function iE(t, e, n) {
	const r = n.map((u) => u.currentWriteId),
		i = ng(t, e, r)
	let s = i
	const o = i.hash()
	for (let u = 0; u < n.length; u++) {
		const f = n[u]
		w(
			f.status === 0,
			'tryToSendTransactionQueue_: items in queue should all be run.'
		),
			(f.status = 1),
			f.retryCount++
		const c = Re(e, f.path)
		s = s.updateChild(c, f.currentOutputSnapshotRaw)
	}
	const l = s.val(!0),
		a = e
	t.server_.put(
		a.toString(),
		l,
		(u) => {
			tc(t, 'transaction put response', { path: a.toString(), status: u })
			let f = []
			if (u === 'ok') {
				const c = []
				for (let d = 0; d < n.length; d++)
					(n[d].status = 2),
						(f = f.concat(cn(t.serverSyncTree_, n[d].currentWriteId))),
						n[d].onComplete &&
							c.push(() =>
								n[d].onComplete(null, !0, n[d].currentOutputSnapshotResolved)
							),
						n[d].unwatcher()
				Io(t, Yu(t.transactionQueueTree_, e)),
					nc(t, t.transactionQueueTree_),
					kt(t.eventQueue_, e, f)
				for (let d = 0; d < c.length; d++) _r(c[d])
			} else {
				if (u === 'datastale')
					for (let c = 0; c < n.length; c++)
						n[c].status === 3 ? (n[c].status = 4) : (n[c].status = 0)
				else {
					Me('transaction at ' + a.toString() + ' failed: ' + u)
					for (let c = 0; c < n.length; c++)
						(n[c].status = 4), (n[c].abortReason = u)
				}
				To(t, e)
			}
		},
		o
	)
}
function To(t, e) {
	const n = rg(t, e),
		r = Mi(n),
		i = ig(t, n)
	return sE(t, i, r), r
}
function sE(t, e, n) {
	if (e.length === 0) return
	const r = []
	let i = []
	const o = e.filter((l) => l.status === 0).map((l) => l.currentWriteId)
	for (let l = 0; l < e.length; l++) {
		const a = e[l],
			u = Re(n, a.path)
		let f = !1,
			c
		if (
			(w(
				u !== null,
				'rerunTransactionsUnderNode_: relativePath should not be null.'
			),
			a.status === 4)
		)
			(f = !0),
				(c = a.abortReason),
				(i = i.concat(cn(t.serverSyncTree_, a.currentWriteId, !0)))
		else if (a.status === 0)
			if (a.retryCount >= Yw)
				(f = !0),
					(c = 'maxretry'),
					(i = i.concat(cn(t.serverSyncTree_, a.currentWriteId, !0)))
			else {
				const d = ng(t, a.path, o)
				a.currentInputSnapshot = d
				const g = e[l].update(d.val())
				if (g !== void 0) {
					qu('transaction failed: Data returned ', g, a.path)
					let _ = me(g)
					;(typeof g == 'object' && g != null && It(g, '.priority')) ||
						(_ = _.updatePriority(d.getPriority()))
					const R = a.currentWriteId,
						p = Zu(t),
						h = $m(_, d, p)
					;(a.currentOutputSnapshotRaw = _),
						(a.currentOutputSnapshotResolved = h),
						(a.currentWriteId = tg(t)),
						o.splice(o.indexOf(R), 1),
						(i = i.concat(
							Bm(t.serverSyncTree_, a.path, h, a.currentWriteId, a.applyLocally)
						)),
						(i = i.concat(cn(t.serverSyncTree_, R, !0)))
				} else
					(f = !0),
						(c = 'nodata'),
						(i = i.concat(cn(t.serverSyncTree_, a.currentWriteId, !0)))
			}
		kt(t.eventQueue_, n, i),
			(i = []),
			f &&
				((e[l].status = 2),
				(function (d) {
					setTimeout(d, Math.floor(0))
				})(e[l].unwatcher),
				e[l].onComplete &&
					(c === 'nodata'
						? r.push(() => e[l].onComplete(null, !1, e[l].currentInputSnapshot))
						: r.push(() => e[l].onComplete(new Error(c), !1, null))))
	}
	Io(t, t.transactionQueueTree_)
	for (let l = 0; l < r.length; l++) _r(r[l])
	nc(t, t.transactionQueueTree_)
}
function rg(t, e) {
	let n,
		r = t.transactionQueueTree_
	for (n = O(e); n !== null && yr(r) === void 0; )
		(r = Yu(r, n)), (e = H(e)), (n = O(e))
	return r
}
function ig(t, e) {
	const n = []
	return sg(t, e, n), n.sort((r, i) => r.order - i.order), n
}
function sg(t, e, n) {
	const r = yr(e)
	if (r) for (let i = 0; i < r.length; i++) n.push(r[i])
	ko(e, (i) => {
		sg(t, i, n)
	})
}
function Io(t, e) {
	const n = yr(e)
	if (n) {
		let r = 0
		for (let i = 0; i < n.length; i++) n[i].status !== 2 && ((n[r] = n[i]), r++)
		;(n.length = r), bm(e, n.length > 0 ? n : void 0)
	}
	ko(e, (r) => {
		Io(t, r)
	})
}
function og(t, e) {
	const n = Mi(rg(t, e)),
		r = Yu(t.transactionQueueTree_, e)
	return (
		jw(r, (i) => {
			pl(t, i)
		}),
		pl(t, r),
		Gm(r, (i) => {
			pl(t, i)
		}),
		n
	)
}
function pl(t, e) {
	const n = yr(e)
	if (n) {
		const r = []
		let i = [],
			s = -1
		for (let o = 0; o < n.length; o++)
			n[o].status === 3 ||
				(n[o].status === 1
					? (w(s === o - 1, 'All SENT items should be at beginning of queue.'),
					  (s = o),
					  (n[o].status = 3),
					  (n[o].abortReason = 'set'))
					: (w(n[o].status === 0, 'Unexpected transaction status in abort'),
					  n[o].unwatcher(),
					  (i = i.concat(cn(t.serverSyncTree_, n[o].currentWriteId, !0))),
					  n[o].onComplete &&
							r.push(n[o].onComplete.bind(null, new Error('set'), !1, null))))
		s === -1 ? bm(e, void 0) : (n.length = s + 1), kt(t.eventQueue_, Mi(e), i)
		for (let o = 0; o < r.length; o++) _r(r[o])
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function oE(t) {
	let e = ''
	const n = t.split('/')
	for (let r = 0; r < n.length; r++)
		if (n[r].length > 0) {
			let i = n[r]
			try {
				i = decodeURIComponent(i.replace(/\+/g, ' '))
			} catch {}
			e += '/' + i
		}
	return e
}
function lE(t) {
	const e = {}
	t.charAt(0) === '?' && (t = t.substring(1))
	for (const n of t.split('&')) {
		if (n.length === 0) continue
		const r = n.split('=')
		r.length === 2
			? (e[decodeURIComponent(r[0])] = decodeURIComponent(r[1]))
			: Me(`Invalid query segment '${n}' in query '${t}'`)
	}
	return e
}
const lf = function (t, e) {
		const n = aE(t),
			r = n.namespace
		n.domain === 'firebase.com' &&
			St(
				n.host +
					' is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead'
			),
			(!r || r === 'undefined') &&
				n.domain !== 'localhost' &&
				St(
					'Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com'
				),
			n.secure || S0()
		const i = n.scheme === 'ws' || n.scheme === 'wss'
		return {
			repoInfo: new lm(n.host, n.secure, r, i, e, '', r !== n.subdomain),
			path: new W(n.pathString)
		}
	},
	aE = function (t) {
		let e = '',
			n = '',
			r = '',
			i = '',
			s = '',
			o = !0,
			l = 'https',
			a = 443
		if (typeof t == 'string') {
			let u = t.indexOf('//')
			u >= 0 && ((l = t.substring(0, u - 1)), (t = t.substring(u + 2)))
			let f = t.indexOf('/')
			f === -1 && (f = t.length)
			let c = t.indexOf('?')
			c === -1 && (c = t.length),
				(e = t.substring(0, Math.min(f, c))),
				f < c && (i = oE(t.substring(f, c)))
			const d = lE(t.substring(Math.min(t.length, c)))
			;(u = e.indexOf(':')),
				u >= 0
					? ((o = l === 'https' || l === 'wss'),
					  (a = parseInt(e.substring(u + 1), 10)))
					: (u = e.length)
			const g = e.slice(0, u)
			if (g.toLowerCase() === 'localhost') n = 'localhost'
			else if (g.split('.').length <= 2) n = g
			else {
				const _ = e.indexOf('.')
				;(r = e.substring(0, _).toLowerCase()),
					(n = e.substring(_ + 1)),
					(s = r)
			}
			'ns' in d && (s = d.ns)
		}
		return {
			host: e,
			port: a,
			domain: n,
			subdomain: r,
			secure: o,
			scheme: l,
			pathString: i,
			namespace: s
		}
	}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const af =
		'-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz',
	uE = (function () {
		let t = 0
		const e = []
		return function (n) {
			const r = n === t
			t = n
			let i
			const s = new Array(8)
			for (i = 7; i >= 0; i--)
				(s[i] = af.charAt(n % 64)), (n = Math.floor(n / 64))
			w(n === 0, 'Cannot push at time == 0')
			let o = s.join('')
			if (r) {
				for (i = 11; i >= 0 && e[i] === 63; i--) e[i] = 0
				e[i]++
			} else for (i = 0; i < 12; i++) e[i] = Math.floor(Math.random() * 64)
			for (i = 0; i < 12; i++) o += af.charAt(e[i])
			return w(o.length === 20, 'nextPushId: Length should be 20.'), o
		}
	})()
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lg {
	constructor(e, n, r, i) {
		;(this.eventType = e),
			(this.eventRegistration = n),
			(this.snapshot = r),
			(this.prevName = i)
	}
	getPath() {
		const e = this.snapshot.ref
		return this.eventType === 'value' ? e._path : e.parent._path
	}
	getEventType() {
		return this.eventType
	}
	getEventRunner() {
		return this.eventRegistration.getEventRunner(this)
	}
	toString() {
		return (
			this.getPath().toString() +
			':' +
			this.eventType +
			':' +
			fe(this.snapshot.exportVal())
		)
	}
}
class ag {
	constructor(e, n, r) {
		;(this.eventRegistration = e), (this.error = n), (this.path = r)
	}
	getPath() {
		return this.path
	}
	getEventType() {
		return 'cancel'
	}
	getEventRunner() {
		return this.eventRegistration.getEventRunner(this)
	}
	toString() {
		return this.path.toString() + ':cancel'
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cE {
	constructor(e, n) {
		;(this.snapshotCallback = e), (this.cancelCallback = n)
	}
	onValue(e, n) {
		this.snapshotCallback.call(null, e, n)
	}
	onCancel(e) {
		return (
			w(
				this.hasCancelCallback,
				'Raising a cancel event on a listener with no cancel callback'
			),
			this.cancelCallback.call(null, e)
		)
	}
	get hasCancelCallback() {
		return !!this.cancelCallback
	}
	matches(e) {
		return (
			this.snapshotCallback === e.snapshotCallback ||
			(this.snapshotCallback.userCallback !== void 0 &&
				this.snapshotCallback.userCallback ===
					e.snapshotCallback.userCallback &&
				this.snapshotCallback.context === e.snapshotCallback.context)
		)
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rc {
	constructor(e, n, r, i) {
		;(this._repo = e),
			(this._path = n),
			(this._queryParams = r),
			(this._orderByCalled = i)
	}
	get key() {
		return M(this._path) ? null : gm(this._path)
	}
	get ref() {
		return new Nt(this._repo, this._path)
	}
	get _queryIdentifier() {
		const e = Hd(this._queryParams),
			n = Tu(e)
		return n === '{}' ? 'default' : n
	}
	get _queryObject() {
		return Hd(this._queryParams)
	}
	isEqual(e) {
		if (((e = mr(e)), !(e instanceof rc))) return !1
		const n = this._repo === e._repo,
			r = Ru(this._path, e._path),
			i = this._queryIdentifier === e._queryIdentifier
		return n && r && i
	}
	toJSON() {
		return this.toString()
	}
	toString() {
		return this._repo.toString() + oC(this._path)
	}
}
class Nt extends rc {
	constructor(e, n) {
		super(e, n, new Au(), !1)
	}
	get parent() {
		const e = ym(this._path)
		return e === null ? null : new Nt(this._repo, e)
	}
	get root() {
		let e = this
		for (; e.parent !== null; ) e = e.parent
		return e
	}
}
class Si {
	constructor(e, n, r) {
		;(this._node = e), (this.ref = n), (this._index = r)
	}
	get priority() {
		return this._node.getPriority().val()
	}
	get key() {
		return this.ref.key
	}
	get size() {
		return this._node.numChildren()
	}
	child(e) {
		const n = new W(e),
			r = cr(this.ref, e)
		return new Si(this._node.getChild(n), r, ee)
	}
	exists() {
		return !this._node.isEmpty()
	}
	exportVal() {
		return this._node.val(!0)
	}
	forEach(e) {
		return this._node.isLeafNode()
			? !1
			: !!this._node.forEachChild(this._index, (r, i) =>
					e(new Si(i, cr(this.ref, r), ee))
			  )
	}
	hasChild(e) {
		const n = new W(e)
		return !this._node.getChild(n).isEmpty()
	}
	hasChildren() {
		return this._node.isLeafNode() ? !1 : !this._node.isEmpty()
	}
	toJSON() {
		return this.exportVal()
	}
	val() {
		return this._node.val()
	}
}
function No(t, e) {
	return (
		(t = mr(t)),
		t._checkNotDeleted('ref'),
		e !== void 0 ? cr(t._root, e) : t._root
	)
}
function cr(t, e) {
	return (
		(t = mr(t)),
		O(t._path) === null
			? $w('child', 'path', e, !1)
			: Xm('child', 'path', e, !1),
		new Nt(t._repo, oe(t._path, e))
	)
}
function dE(t, e) {
	;(t = mr(t)), Xu('push', t._path), qm('push', e, t._path, !0)
	const n = eg(t._repo),
		r = uE(n),
		i = cr(t, r),
		s = cr(t, r)
	let o
	return (
		e != null ? (o = ic(s, e).then(() => s)) : (o = Promise.resolve(s)),
		(i.then = o.then.bind(o)),
		(i.catch = o.then.bind(o, void 0)),
		i
	)
}
function fE(t) {
	return Xu('remove', t._path), ic(t, null)
}
function ic(t, e) {
	;(t = mr(t)), Xu('set', t._path), qm('set', e, t._path, !1)
	const n = new _o()
	return (
		Zw(
			t._repo,
			t._path,
			e,
			null,
			n.wrapCallback(() => {})
		),
		n.promise
	)
}
class sc {
	constructor(e) {
		this.callbackContext = e
	}
	respondsTo(e) {
		return e === 'value'
	}
	createEvent(e, n) {
		const r = n._queryParams.getIndex()
		return new lg(
			'value',
			this,
			new Si(e.snapshotNode, new Nt(n._repo, n._path), r)
		)
	}
	getEventRunner(e) {
		return e.getEventType() === 'cancel'
			? () => this.callbackContext.onCancel(e.error)
			: () => this.callbackContext.onValue(e.snapshot, null)
	}
	createCancelEvent(e, n) {
		return this.callbackContext.hasCancelCallback ? new ag(this, e, n) : null
	}
	matches(e) {
		return e instanceof sc
			? !e.callbackContext || !this.callbackContext
				? !0
				: e.callbackContext.matches(this.callbackContext)
			: !1
	}
	hasAnyCallback() {
		return this.callbackContext !== null
	}
}
class oc {
	constructor(e, n) {
		;(this.eventType = e), (this.callbackContext = n)
	}
	respondsTo(e) {
		let n = e === 'children_added' ? 'child_added' : e
		return (
			(n = n === 'children_removed' ? 'child_removed' : n), this.eventType === n
		)
	}
	createCancelEvent(e, n) {
		return this.callbackContext.hasCancelCallback ? new ag(this, e, n) : null
	}
	createEvent(e, n) {
		w(e.childName != null, 'Child events should have a childName.')
		const r = cr(new Nt(n._repo, n._path), e.childName),
			i = n._queryParams.getIndex()
		return new lg(e.type, this, new Si(e.snapshotNode, r, i), e.prevName)
	}
	getEventRunner(e) {
		return e.getEventType() === 'cancel'
			? () => this.callbackContext.onCancel(e.error)
			: () => this.callbackContext.onValue(e.snapshot, e.prevName)
	}
	matches(e) {
		return e instanceof oc
			? this.eventType === e.eventType &&
					(!this.callbackContext ||
						!e.callbackContext ||
						this.callbackContext.matches(e.callbackContext))
			: !1
	}
	hasAnyCallback() {
		return !!this.callbackContext
	}
}
function hE(t, e, n, r, i) {
	let s
	if (
		(typeof r == 'object' && ((s = void 0), (i = r)),
		typeof r == 'function' && (s = r),
		i && i.onlyOnce)
	) {
		const a = n,
			u = (f, c) => {
				of(t._repo, t, l), a(f, c)
			}
		;(u.userCallback = n.userCallback), (u.context = n.context), (n = u)
	}
	const o = new cE(n, s || void 0),
		l = e === 'value' ? new sc(o) : new oc(e, o)
	return tE(t._repo, t, l), () => of(t._repo, t, l)
}
function pE(t, e, n, r) {
	return hE(t, 'value', e, n, r)
}
gw(Nt)
Ew(Nt)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mE = 'FIREBASE_DATABASE_EMULATOR_HOST',
	Na = {}
let gE = !1
function _E(t, e, n, r) {
	;(t.repoInfo_ = new lm(
		`${e}:${n}`,
		!1,
		t.repoInfo_.namespace,
		t.repoInfo_.webSocketOnly,
		t.repoInfo_.nodeAdmin,
		t.repoInfo_.persistenceKey,
		t.repoInfo_.includeNamespaceInQueryParams,
		!0
	)),
		r && (t.authTokenProvider_ = r)
}
function yE(t, e, n, r, i) {
	let s = r || t.options.databaseURL
	s === void 0 &&
		(t.options.projectId ||
			St(
				"Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."
			),
		we('Using default host for project ', t.options.projectId),
		(s = `${t.options.projectId}-default-rtdb.firebaseio.com`))
	let o = lf(s, i),
		l = o.repoInfo,
		a,
		u
	typeof process < 'u' && process.env && (u = process.env[mE]),
		u
			? ((a = !0),
			  (s = `http://${u}?ns=${l.namespace}`),
			  (o = lf(s, i)),
			  (l = o.repoInfo))
			: (a = !o.repoInfo.secure)
	const f = i && a ? new qn(qn.OWNER) : new M0(t.name, t.options, e)
	bw('Invalid Firebase Database URL', o),
		M(o.path) ||
			St(
				'Database URL must point to the root of a Firebase Database (not including a child path).'
			)
	const c = CE(l, t, f, new A0(t.name, n))
	return new wE(c, t)
}
function vE(t, e) {
	const n = Na[e]
	;(!n || n[t.key] !== t) &&
		St(`Database ${e}(${t.repoInfo_}) has already been deleted.`),
		nE(t),
		delete n[t.key]
}
function CE(t, e, n, r) {
	let i = Na[e.name]
	i || ((i = {}), (Na[e.name] = i))
	let s = i[t.toURLString()]
	return (
		s &&
			St(
				'Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.'
			),
		(s = new qw(t, gE, n, r)),
		(i[t.toURLString()] = s),
		s
	)
}
class wE {
	constructor(e, n) {
		;(this._repoInternal = e),
			(this.app = n),
			(this.type = 'database'),
			(this._instanceStarted = !1)
	}
	get _repo() {
		return (
			this._instanceStarted ||
				(Xw(
					this._repoInternal,
					this.app.options.appId,
					this.app.options.databaseAuthVariableOverride
				),
				(this._instanceStarted = !0)),
			this._repoInternal
		)
	}
	get _root() {
		return (
			this._rootInternal || (this._rootInternal = new Nt(this._repo, U())),
			this._rootInternal
		)
	}
	_delete() {
		return (
			this._rootInternal !== null &&
				(vE(this._repo, this.app.name),
				(this._repoInternal = null),
				(this._rootInternal = null)),
			Promise.resolve()
		)
	}
	_checkNotDeleted(e) {
		this._rootInternal === null &&
			St('Cannot call ' + e + ' on a deleted database.')
	}
}
function EE(t = a0(), e) {
	const n = i0(t, 'database').getImmediate({ identifier: e })
	if (!n._instanceStarted) {
		const r = qy('database')
		r && SE(n, ...r)
	}
	return n
}
function SE(t, e, n, r = {}) {
	;(t = mr(t)),
		t._checkNotDeleted('useEmulator'),
		t._instanceStarted &&
			St(
				'Cannot call useEmulator() after instance has already been initialized.'
			)
	const i = t._repoInternal
	let s
	if (i.repoInfo_.nodeAdmin)
		r.mockUserToken &&
			St(
				'mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'
			),
			(s = new qn(qn.OWNER))
	else if (r.mockUserToken) {
		const o =
			typeof r.mockUserToken == 'string'
				? r.mockUserToken
				: Xy(r.mockUserToken, t.app.options.projectId)
		s = new qn(o)
	}
	_E(i, e, n, s)
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function kE(t) {
	y0(l0),
		Ws(
			new mi(
				'database',
				(e, { instanceIdentifier: n }) => {
					const r = e.getProvider('app').getImmediate(),
						i = e.getProvider('auth-internal'),
						s = e.getProvider('app-check-internal')
					return yE(r, i, s, n)
				},
				'PUBLIC'
			).setMultipleInstances(!0)
		),
		Kn(Id, Nd, t),
		Kn(Id, Nd, 'esm2017')
}
yt.prototype.simpleListen = function (t, e) {
	this.sendRequest('q', { p: t }, e)
}
yt.prototype.echo = function (t, e) {
	this.sendRequest('echo', { d: t }, e)
}
kE()
var TE = 'firebase',
	IE = '10.5.0'
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Kn(TE, IE, 'app')
const NE = {
		apiKey: 'AIzaSyCjCnFYzapWYkm3VKMQfi2GERTEPp2OMlw',
		authDomain: 'todoproject-14755.firebaseapp.com',
		projectId: 'todoproject-14755',
		storageBucket: 'todoproject-14755.appspot.com',
		messagingSenderId: '131062559848',
		appId: '1:131062559848:web:5535efe131fb58bd41f7dd',
		databaseURL:
			'https://todoproject-14755-default-rtdb.europe-west1.firebasedatabase.app/'
	},
	xE = Hp(NE),
	xo = EE(xE),
	RE = (t) => ({
		requestAddTask: (n) => {
			if ((event.preventDefault(), (n = n.trim()), n.length > 0)) {
				const r = No(xo, 'posts')
				dE(r, { title: n }).then(() => t(''))
			}
		}
	}),
	PE = (t) => ({
		requestChangeTask: () => {
			if (((t.taskValue = t.taskValue.trim()), t.taskValue.length > 0)) {
				const n = No(xo, `posts/${t.idTask}`)
				ic(n, { title: t.taskValue })
			}
		}
	}),
	DE = () => ({
		requestDeleteTask: (e) => {
			const n = No(xo, `posts/${e}`)
			fE(n)
		}
	}),
	OE = (t) => {
		const [e, n] = Ve.useState([])
		return (
			Ve.useEffect(() => {
				const r = No(xo, 'posts')
				return pE(r, (i) => {
					const s = i.val() || {}
					n(s), t(!1)
				})
			}, []),
			{ todos: e, setTodos: n }
		)
	},
	AE = () => {
		const [t, e] = Ve.useState({ isOpen: !1, taskValue: '', idTask: '' })
		return {
			handleClickChangeTask: (r, i) => {
				e({ ...t, isOpen: !0, taskValue: i, idTask: r })
			},
			isModalOpen: t,
			setIsModalOpen: e
		}
	},
	ME = (t, e) => ({
		filteredTodos: Object.entries(t).filter(([r, { title: i }]) =>
			i.toLowerCase().includes(e.toLowerCase())
		)
	}),
	LE = (t, e, n) => ({
		handleSortTasks: (i) => {
			const s = { ...i },
				o = !e,
				l = Object.entries(s).sort(([u, { title: f }], [c, { title: d }]) =>
					o ? f.localeCompare(d) : d.localeCompare(f)
				),
				a = Object.fromEntries(l)
			t(o), n(a)
		}
	}),
	FE = () =>
		j.jsx('div', {
			className: 'circle-loader',
			children: j.jsx('div', { className: 'circle' })
		}),
	zE = () => {
		const [t, e] = Ve.useState(!0),
			[n, r] = Ve.useState(''),
			[i, s] = Ve.useState(''),
			[, o] = Ve.useState(''),
			[l, a] = Ve.useState(!1),
			{ handleClickChangeTask: u, isModalOpen: f, setIsModalOpen: c } = AE(),
			{ requestDeleteTask: d } = DE(),
			{ requestAddTask: g } = RE(r),
			{ requestChangeTask: _ } = PE(f),
			{ todos: y, setTodos: R } = OE(e),
			{ handleSortTasks: p } = LE(a, l, R),
			{ filteredTodos: h } = ME(y, i)
		return (
			Ve.useEffect(() => {
				const m = setTimeout(() => {
					o(i)
				}, 300)
				return () => {
					clearTimeout(m)
				}
			}, [i]),
			j.jsxs('div', {
				className: 'container',
				children: [
					f.isOpen &&
						j.jsx(Np, {
							isModalOpen: f,
							setIsModalOpen: c,
							requestChangeTask: _
						}),
					j.jsx('h1', { children: 'TODOS LIST' }),
					j.jsx(Ip, { inputValue: n, setInputValue: r, onClick: g }),
					j.jsx(xp, { searchValue: i, setSearchValue: s, todos: y }),
					j.jsx(hi, {
						className: 'sort',
						todos: y,
						onClick: () => p(y),
						children: 'Sort todos'
					}),
					t
						? j.jsx(FE, {})
						: h.length > 0
						? h.map((m) =>
								j.jsx(Rp, { todo: m, onClickChange: u, onClickDelete: d }, m[0])
						  )
						: j.jsx('div', {
								className: 'no_tasks',
								children: 'The task list is empty('
						  })
				]
			})
		)
	}
ml.createRoot(document.getElementById('root')).render(
	j.jsx(Tg.StrictMode, { children: j.jsx(zE, {}) })
)
