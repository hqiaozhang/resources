import { Fragment as Te, isVNode as fn, Comment as mu, Text as il, defineComponent as V, reactive as it, getCurrentInstance as Ue, onMounted as ye, onUpdated as pn, onUnmounted as or, watch as Y, computed as I, inject as se, ref as K, shallowRef as N, unref as vt, provide as je, watchEffect as ut, onBeforeUnmount as ze, isRef as al, createVNode as S, h as nn, Transition as at, withDirectives as xt, resolveDirective as bu, cloneVNode as yu, nextTick as te, toRef as wu, withModifiers as ai, vShow as kr, onBeforeMount as Su, Teleport as xu, render as ll, onBeforeUpdate as Cu, toRefs as $u, resolveComponent as Ou, createElementBlock as bn, openBlock as Bt, withCtx as li, createElementVNode as Nt, createBlock as Tu, renderList as Pu, normalizeClass as _u, toDisplayString as Eu } from "vue";
function rn(e) {
  "@babel/helpers - typeof";
  return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rn(e);
}
function Au(e, t) {
  if (rn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (rn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Iu(e) {
  var t = Au(e, "string");
  return rn(t) == "symbol" ? t : t + "";
}
function Mu(e, t, n) {
  return (t = Iu(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function si(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? si(Object(n), !0).forEach(function(r) {
      Mu(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : si(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function f() {
  return f = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, f.apply(null, arguments);
}
const Ru = (e) => typeof e == "function", ju = Array.isArray, Du = (e) => typeof e == "string", zu = (e) => e !== null && typeof e == "object", Bu = /^on[^a-z]/, Nu = (e) => Bu.test(e), sl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Hu = /-(\w)/g, ul = sl((e) => e.replace(Hu, (t, n) => n ? n.toUpperCase() : "")), Fu = /\B([A-Z])/g, Lu = sl((e) => e.replace(Fu, "-$1").toLowerCase()), Wu = Object.prototype.hasOwnProperty, ui = (e, t) => Wu.call(e, t);
function ku(e, t, n, r) {
  const o = e[n];
  if (o != null) {
    const i = ui(o, "default");
    if (i && r === void 0) {
      const a = o.default;
      r = o.type !== Function && Ru(a) ? a() : a;
    }
    o.type === Boolean && (!ui(t, n) && !i ? r = !1 : r === "" && (r = !0));
  }
  return r;
}
function U() {
  const e = [];
  for (let t = 0; t < arguments.length; t++) {
    const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (n) {
      if (Du(n))
        e.push(n);
      else if (ju(n))
        for (let r = 0; r < n.length; r++) {
          const o = U(n[r]);
          o && e.push(o);
        }
      else if (zu(n))
        for (const r in n)
          n[r] && e.push(r);
    }
  }
  return e.join(" ");
}
var cl = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(o, i) {
      return o[0] === n ? (r = i, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n), o = this.__entries__[r];
        return o && o[1];
      }, t.prototype.set = function(n, r) {
        var o = e(this.__entries__, n);
        ~o ? this.__entries__[o][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, o = e(r, n);
        ~o && r.splice(o, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var o = 0, i = this.__entries__; o < i.length; o++) {
          var a = i[o];
          n.call(r, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), Vr = typeof window < "u" && typeof document < "u" && window.document === document, Wn = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Vu = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Wn) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Xu = 2;
function Gu(e, t) {
  var n = !1, r = !1, o = 0;
  function i() {
    n && (n = !1, e()), r && l();
  }
  function a() {
    Vu(i);
  }
  function l() {
    var s = Date.now();
    if (n) {
      if (s - o < Xu)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(a, t);
    o = s;
  }
  return l;
}
var Uu = 20, Yu = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], qu = typeof MutationObserver < "u", Ku = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Gu(this.refresh.bind(this), Uu);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Vr || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), qu ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Vr || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, o = Yu.some(function(i) {
        return !!~r.indexOf(i);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), dl = function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var o = r[n];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Ct = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Wn;
}, fl = ir(0, 0, 0, 0);
function kn(e) {
  return parseFloat(e) || 0;
}
function ci(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, o) {
    var i = e["border-" + o + "-width"];
    return r + kn(i);
  }, 0);
}
function Zu(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, o = t; r < o.length; r++) {
    var i = o[r], a = e["padding-" + i];
    n[i] = kn(a);
  }
  return n;
}
function Qu(e) {
  var t = e.getBBox();
  return ir(0, 0, t.width, t.height);
}
function Ju(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return fl;
  var r = Ct(e).getComputedStyle(e), o = Zu(r), i = o.left + o.right, a = o.top + o.bottom, l = kn(r.width), s = kn(r.height);
  if (r.boxSizing === "border-box" && (Math.round(l + i) !== t && (l -= ci(r, "left", "right") + i), Math.round(s + a) !== n && (s -= ci(r, "top", "bottom") + a)), !tc(e)) {
    var u = Math.round(l + i) - t, d = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (l -= u), Math.abs(d) !== 1 && (s -= d);
  }
  return ir(o.left, o.top, l, s);
}
var ec = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Ct(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Ct(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function tc(e) {
  return e === Ct(e).document.documentElement;
}
function nc(e) {
  return Vr ? ec(e) ? Qu(e) : Ju(e) : fl;
}
function rc(e) {
  var t = e.x, n = e.y, r = e.width, o = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(i.prototype);
  return dl(a, {
    x: t,
    y: n,
    width: r,
    height: o,
    top: n,
    right: t + r,
    bottom: o + n,
    left: t
  }), a;
}
function ir(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var oc = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ir(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = nc(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), ic = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var r = rc(n);
      dl(this, { target: t, contentRect: r });
    }
    return e;
  }()
), ac = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new cl(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Ct(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new oc(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Ct(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new ic(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), pl = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new cl(), hl = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Ku.getInstance(), r = new ac(t, n, this);
      pl.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  hl.prototype[e] = function() {
    var t;
    return (t = pl.get(this))[e].apply(t, arguments);
  };
});
var gl = function() {
  return typeof Wn.ResizeObserver < "u" ? Wn.ResizeObserver : hl;
}(), vl = typeof global == "object" && global && global.Object === Object && global, lc = typeof self == "object" && self && self.Object === Object && self, Le = vl || lc || Function("return this")(), $t = Le.Symbol, ml = Object.prototype, sc = ml.hasOwnProperty, uc = ml.toString, Ht = $t ? $t.toStringTag : void 0;
function cc(e) {
  var t = sc.call(e, Ht), n = e[Ht];
  try {
    e[Ht] = void 0;
    var r = !0;
  } catch {
  }
  var o = uc.call(e);
  return r && (t ? e[Ht] = n : delete e[Ht]), o;
}
var dc = Object.prototype, fc = dc.toString;
function pc(e) {
  return fc.call(e);
}
var hc = "[object Null]", gc = "[object Undefined]", di = $t ? $t.toStringTag : void 0;
function Rt(e) {
  return e == null ? e === void 0 ? gc : hc : di && di in Object(e) ? cc(e) : pc(e);
}
function bl(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var vc = bl(Object.getPrototypeOf, Object);
function Ot(e) {
  return e != null && typeof e == "object";
}
var mc = "[object Object]", bc = Function.prototype, yc = Object.prototype, yl = bc.toString, wc = yc.hasOwnProperty, Sc = yl.call(Object);
function xc(e) {
  if (!Ot(e) || Rt(e) != mc)
    return !1;
  var t = vc(e);
  if (t === null)
    return !0;
  var n = wc.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && yl.call(n) == Sc;
}
const Cc = (e) => e != null && e !== "", hn = (e, t) => {
  const n = f({}, e);
  return Object.keys(t).forEach((r) => {
    const o = n[r];
    if (o)
      o.type || o.default ? o.default = t[r] : o.def ? o.def(t[r]) : n[r] = {
        type: o,
        default: t[r]
      };
    else
      throw new Error(`not have ${r} prop`);
  }), n;
}, $c = (e) => {
  const t = Object.keys(e), n = {}, r = {}, o = {};
  for (let i = 0, a = t.length; i < a; i++) {
    const l = t[i];
    Nu(l) ? (n[l[2].toLowerCase() + l.slice(3)] = e[l], r[l] = e[l]) : o[l] = e[l];
  }
  return {
    onEvents: r,
    events: n,
    extraAttrs: o
  };
}, Oc = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 ? arguments[1] : void 0;
  const n = {}, r = /;(?![^(]*\))/g, o = /:(.+)/;
  return typeof e == "object" ? e : (e.split(r).forEach(function(i) {
    if (i) {
      const a = i.split(o);
      if (a.length > 1) {
        const l = t ? ul(a[0].trim()) : a[0].trim();
        n[l] = a[1].trim();
      }
    }
  }), n);
}, Tc = (e, t) => e[t] !== void 0, Pc = Symbol("skipFlatten"), Ce = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = Array.isArray(e) ? e : [e], r = [];
  return n.forEach((o) => {
    Array.isArray(o) ? r.push(...Ce(o, t)) : o && o.type === Te ? o.key === Pc ? r.push(o) : r.push(...Ce(o.children, t)) : o && fn(o) ? t && !wl(o) ? r.push(o) : t || r.push(o) : Cc(o) && r.push(o);
  }), r;
}, _c = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (fn(e))
    return e.type === Te ? t === "default" ? Ce(e.children) : [] : e.children && e.children[t] ? Ce(e.children[t](n)) : [];
  {
    let r = e.$slots[t] && e.$slots[t](n);
    return Ce(r);
  }
}, ke = (e) => {
  var t;
  let n = ((t = e == null ? void 0 : e.vnode) === null || t === void 0 ? void 0 : t.el) || e && (e.$el || e);
  for (; n && !n.tagName; )
    n = n.nextSibling;
  return n;
}, Ec = (e) => {
  const t = {};
  if (e.$ && e.$.vnode) {
    const n = e.$.vnode.props || {};
    Object.keys(e.$props).forEach((r) => {
      const o = e.$props[r], i = Lu(r);
      (o !== void 0 || i in n) && (t[r] = o);
    });
  } else if (fn(e) && typeof e.type == "object") {
    const n = e.props || {}, r = {};
    Object.keys(n).forEach((i) => {
      r[ul(i)] = n[i];
    });
    const o = e.type.props || {};
    Object.keys(o).forEach((i) => {
      const a = ku(o, r, i, r[i]);
      (a !== void 0 || i in r) && (t[i] = a);
    });
  }
  return t;
}, Ac = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, o;
  if (e.$) {
    const i = e[t];
    if (i !== void 0)
      return typeof i == "function" && r ? i(n) : i;
    o = e.$slots[t], o = r && o ? o(n) : o;
  } else if (fn(e)) {
    const i = e.props && e.props[t];
    if (i !== void 0 && e.props !== null)
      return typeof i == "function" && r ? i(n) : i;
    e.type === Te ? o = e.children : e.children && e.children[t] && (o = e.children[t], o = r && o ? o(n) : o);
  }
  return Array.isArray(o) && (o = Ce(o), o = o.length === 1 ? o[0] : o, o = o.length === 0 ? void 0 : o), o;
};
function fi() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = {};
  return e.$ ? n = f(f({}, n), e.$attrs) : n = f(f({}, n), e.props), $c(n)[t ? "onEvents" : "events"];
}
function Ic(e, t) {
  let r = ((fn(e) ? e.props : e.$attrs) || {}).style || {};
  return typeof r == "string" && (r = Oc(r, t)), r;
}
function Mc(e) {
  return e.length === 1 && e[0].type === Te;
}
function wl(e) {
  return e && (e.type === mu || e.type === Te && e.children.length === 0 || e.type === il && e.children.trim() === "");
}
function ct() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const t = [];
  return e.forEach((n) => {
    Array.isArray(n) ? t.push(...n) : (n == null ? void 0 : n.type) === Te ? t.push(...ct(n.children)) : t.push(n);
  }), t.filter((n) => !wl(n));
}
function Sl(e) {
  return Array.isArray(e) && e.length === 1 && (e = e[0]), e && e.__v_isVNode && typeof e.type != "symbol";
}
function Mn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
  var r, o;
  return (r = t[n]) !== null && r !== void 0 ? r : (o = e[n]) === null || o === void 0 ? void 0 : o.call(e);
}
const Rc = V({
  compatConfig: {
    MODE: 3
  },
  name: "ResizeObserver",
  props: {
    disabled: Boolean,
    onResize: Function
  },
  emits: ["resize"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = it({
      width: 0,
      height: 0,
      offsetHeight: 0,
      offsetWidth: 0
    });
    let o = null, i = null;
    const a = () => {
      i && (i.disconnect(), i = null);
    }, l = (d) => {
      const {
        onResize: c
      } = e, p = d[0].target, {
        width: h,
        height: b
      } = p.getBoundingClientRect(), {
        offsetWidth: m,
        offsetHeight: w
      } = p, v = Math.floor(h), y = Math.floor(b);
      if (r.width !== v || r.height !== y || r.offsetWidth !== m || r.offsetHeight !== w) {
        const C = {
          width: v,
          height: y,
          offsetWidth: m,
          offsetHeight: w
        };
        f(r, C), c && Promise.resolve().then(() => {
          c(f(f({}, C), {
            offsetWidth: m,
            offsetHeight: w
          }), p);
        });
      }
    }, s = Ue(), u = () => {
      const {
        disabled: d
      } = e;
      if (d) {
        a();
        return;
      }
      const c = ke(s);
      c !== o && (a(), o = c), !i && c && (i = new gl(l), i.observe(c));
    };
    return ye(() => {
      u();
    }), pn(() => {
      u();
    }), or(() => {
      a();
    }), Y(() => e.disabled, () => {
      u();
    }, {
      flush: "post"
    }), () => {
      var d;
      return (d = n.default) === null || d === void 0 ? void 0 : d.call(n)[0];
    };
  }
});
let xl = (e) => setTimeout(e, 16), Cl = (e) => clearTimeout(e);
typeof window < "u" && "requestAnimationFrame" in window && (xl = (e) => window.requestAnimationFrame(e), Cl = (e) => window.cancelAnimationFrame(e));
let pi = 0;
const _o = /* @__PURE__ */ new Map();
function $l(e) {
  _o.delete(e);
}
function J(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  pi += 1;
  const n = pi;
  function r(o) {
    if (o === 0)
      $l(n), e();
    else {
      const i = xl(() => {
        r(o - 1);
      });
      _o.set(n, i);
    }
  }
  return r(t), n;
}
J.cancel = (e) => {
  const t = _o.get(e);
  return $l(t), Cl(t);
};
const on = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t;
}, ar = (e) => {
  const t = e;
  return t.install = function(n) {
    n.component(t.displayName || t.name, e);
  }, e;
};
function Vn() {
  return {
    type: [Function, Array]
  };
}
function oe(e) {
  return {
    type: Object,
    default: e
  };
}
function bt(e) {
  return {
    type: Boolean,
    default: e
  };
}
function jc(e) {
  return {
    type: Function,
    default: e
  };
}
function Ie(e, t) {
  const n = {
    validator: () => !0,
    default: e
  };
  return n;
}
function Xr(e) {
  return {
    type: Array,
    default: e
  };
}
function Gr(e) {
  return {
    type: String,
    default: e
  };
}
function Dc(e, t) {
  return e ? {
    type: e,
    default: t
  } : Ie(t);
}
let rt = !1;
try {
  let e = Object.defineProperty({}, "passive", {
    get() {
      rt = !0;
    }
  });
  window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
} catch {
}
function Vt(e, t, n, r) {
  if (e && e.addEventListener) {
    let o = r;
    o === void 0 && rt && (t === "touchstart" || t === "touchmove" || t === "wheel") && (o = {
      passive: !1
    }), e.addEventListener(t, n, o);
  }
  return {
    remove: () => {
      e && e.removeEventListener && e.removeEventListener(t, n);
    }
  };
}
const zc = "anticon", Ol = Symbol("configProvider"), Tl = {
  getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
  iconPrefixCls: I(() => zc),
  getPopupContainer: I(() => () => document.body)
}, Bc = () => se(Ol, Tl), Nc = Symbol("DisabledContextKey"), lr = () => se(Nc, K(void 0)), Hc = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
}, Fc = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
}, Pl = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, hi = {
  lang: f({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, Fc),
  timePickerLocale: f({}, Pl)
}, ce = "${label} is not a valid ${type}", gi = {
  locale: "en",
  Pagination: Hc,
  DatePicker: hi,
  TimePicker: Pl,
  Calendar: hi,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: ce,
        method: ce,
        array: ce,
        object: ce,
        number: ce,
        date: ce,
        boolean: ce,
        integer: ce,
        float: ce,
        regexp: ce,
        email: ce,
        url: ce,
        hex: ce
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh"
  }
}, Lc = V({
  compatConfig: {
    MODE: 3
  },
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = se("localeData", {}), o = I(() => {
      const {
        componentName: a = "global",
        defaultLocale: l
      } = e, s = l || gi[a || "global"], {
        antLocale: u
      } = r, d = a && u ? u[a] : {};
      return f(f({}, typeof s == "function" ? s() : s), d || {});
    }), i = I(() => {
      const {
        antLocale: a
      } = r, l = a && a.locale;
      return a && a.exist && !l ? gi.locale : l;
    });
    return () => {
      const a = e.children || n.default, {
        antLocale: l
      } = r;
      return a == null ? void 0 : a(o.value, i.value, l);
    };
  }
});
function Eo(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
class Wc {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
  }
  get(t) {
    return this.cache.get(Array.isArray(t) ? t.join("%") : t) || null;
  }
  update(t, n) {
    const r = Array.isArray(t) ? t.join("%") : t, o = this.cache.get(r), i = n(o);
    i === null ? this.cache.delete(r) : this.cache.set(r, i);
  }
}
const _l = "data-token-hash", yt = "data-css-hash", kc = "data-dev-cache-path", Ut = "__cssinjs_instance__", Xn = Math.random().toString(12).slice(2);
function El() {
  if (typeof document < "u" && document.head && document.body) {
    const e = document.body.querySelectorAll(`style[${yt}]`) || [], {
      firstChild: t
    } = document.head;
    Array.from(e).forEach((r) => {
      r[Ut] = r[Ut] || Xn, document.head.insertBefore(r, t);
    });
    const n = {};
    Array.from(document.querySelectorAll(`style[${yt}]`)).forEach((r) => {
      var o;
      const i = r.getAttribute(yt);
      n[i] ? r[Ut] === Xn && ((o = r.parentNode) === null || o === void 0 || o.removeChild(r)) : n[i] = !0;
    });
  }
  return new Wc();
}
const Al = Symbol("StyleContextKey"), Ao = {
  cache: El(),
  defaultCache: !0,
  hashPriority: "low"
}, Io = () => se(Al, N(f({}, Ao))), Vc = (e) => {
  const t = Io(), n = N(f({}, Ao));
  return Y([e, t], () => {
    const r = f({}, t.value), o = vt(e);
    Object.keys(o).forEach((a) => {
      const l = o[a];
      o[a] !== void 0 && (r[a] = l);
    });
    const {
      cache: i
    } = o;
    r.cache = r.cache || El(), r.defaultCache = !i && t.value.defaultCache, n.value = r;
  }, {
    immediate: !0
  }), je(Al, n), n;
}, Xc = () => ({
  autoClear: bt(),
  /** @private Test only. Not work in production. */
  mock: Gr(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: oe(),
  /** Tell children that this context is default generated context */
  defaultCache: bt(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: Gr(),
  /** Tell cssinjs where to inject style in */
  container: Dc(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: bt(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: Xr(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: Xr()
});
ar(V({
  name: "AStyleProvider",
  inheritAttrs: !1,
  props: hn(Xc(), Ao),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Vc(e), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
}));
function Gc() {
  return !1;
}
let Ur = !1;
function Uc() {
  return Ur;
}
const Yc = process.env.NODE_ENV === "production" ? Gc : Uc;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot) {
  const e = window;
  if (typeof e.webpackHotUpdate == "function") {
    const t = e.webpackHotUpdate;
    e.webpackHotUpdate = function() {
      return Ur = !0, setTimeout(() => {
        Ur = !1;
      }, 0), t(...arguments);
    };
  }
}
function Il(e, t, n, r) {
  const o = Io(), i = N(""), a = N();
  ut(() => {
    i.value = [e, ...t.value].join("%");
  });
  const l = Yc(), s = (u) => {
    o.value.cache.update(u, (d) => {
      const [c = 0, p] = d || [];
      return c - 1 === 0 ? (r == null || r(p, !1), null) : [c - 1, p];
    });
  };
  return Y(i, (u, d) => {
    d && s(d), o.value.cache.update(u, (c) => {
      const [p = 0, h] = c || [];
      let b = h;
      process.env.NODE_ENV !== "production" && h && l && (r == null || r(b, l), b = null);
      const m = b || n();
      return [p + 1, m];
    }), a.value = o.value.cache.get(i.value)[1];
  }, {
    immediate: !0
  }), ze(() => {
    s(i.value);
  }), a;
}
function gn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function tt(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
const vi = "data-vc-order", qc = "vc-util-key", Yr = /* @__PURE__ */ new Map();
function Ml() {
  let {
    mark: e
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return e ? e.startsWith("data-") ? e : `data-${e}` : qc;
}
function sr(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function Kc(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Rl(e) {
  return Array.from((Yr.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function jl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!gn())
    return null;
  const {
    csp: n,
    prepend: r
  } = t, o = document.createElement("style");
  o.setAttribute(vi, Kc(r)), n != null && n.nonce && (o.nonce = n == null ? void 0 : n.nonce), o.innerHTML = e;
  const i = sr(t), {
    firstChild: a
  } = i;
  if (r) {
    if (r === "queue") {
      const l = Rl(i).filter((s) => ["prepend", "prependQueue"].includes(s.getAttribute(vi)));
      if (l.length)
        return i.insertBefore(o, l[l.length - 1].nextSibling), o;
    }
    i.insertBefore(o, a);
  } else
    i.appendChild(o);
  return o;
}
function Dl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = sr(t);
  return Rl(n).find((r) => r.getAttribute(Ml(t)) === e);
}
function Gn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = Dl(e, t);
  n && sr(t).removeChild(n);
}
function Zc(e, t) {
  const n = Yr.get(e);
  if (!n || !tt(document, n)) {
    const r = jl("", t), {
      parentNode: o
    } = r;
    Yr.set(e, o), e.removeChild(r);
  }
}
function Un(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var r, o, i;
  const a = sr(n);
  Zc(a, n);
  const l = Dl(t, n);
  if (l)
    return !((r = n.csp) === null || r === void 0) && r.nonce && l.nonce !== ((o = n.csp) === null || o === void 0 ? void 0 : o.nonce) && (l.nonce = (i = n.csp) === null || i === void 0 ? void 0 : i.nonce), l.innerHTML !== e && (l.innerHTML = e), l;
  const s = jl(e, n);
  return s.setAttribute(Ml(n), t), s;
}
function Yn(e) {
  let t = "";
  return Object.keys(e).forEach((n) => {
    const r = e[n];
    t += n, r && typeof r == "object" ? t += Yn(r) : t += r;
  }), t;
}
function Qc(e, t) {
  return Eo(`${t}_${Yn(e)}`);
}
const Yt = `layer-${Date.now()}-${Math.random()}`.replace(/\./g, ""), zl = "903px";
function Jc(e, t) {
  var n;
  if (gn()) {
    Un(e, Yt);
    const r = document.createElement("div");
    r.style.position = "fixed", r.style.left = "0", r.style.top = "0", t == null || t(r), document.body.appendChild(r), process.env.NODE_ENV !== "production" && (r.innerHTML = "Test", r.style.zIndex = "9999999");
    const o = getComputedStyle(r).width === zl;
    return (n = r.parentNode) === null || n === void 0 || n.removeChild(r), Gn(Yt), o;
  }
  return !1;
}
let Sr;
function ed() {
  return Sr === void 0 && (Sr = Jc(`@layer ${Yt} { .${Yt} { width: ${zl}!important; } }`, (e) => {
    e.className = Yt;
  })), Sr;
}
const mi = {}, td = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", nt = /* @__PURE__ */ new Map();
function nd(e) {
  nt.set(e, (nt.get(e) || 0) + 1);
}
function rd(e) {
  typeof document < "u" && document.querySelectorAll(`style[${_l}="${e}"]`).forEach((n) => {
    var r;
    n[Ut] === Xn && ((r = n.parentNode) === null || r === void 0 || r.removeChild(n));
  });
}
function od(e) {
  nt.set(e, (nt.get(e) || 0) - 1);
  const t = Array.from(nt.keys()), n = t.filter((r) => (nt.get(r) || 0) <= 0);
  n.length < t.length && n.forEach((r) => {
    rd(r), nt.delete(r);
  });
}
function id(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : K({});
  const r = I(() => f({}, ...t.value)), o = I(() => Yn(r.value)), i = I(() => Yn(n.value.override || mi));
  return Il("token", I(() => [n.value.salt || "", e.value.id, o.value, i.value]), () => {
    const {
      salt: l = "",
      override: s = mi,
      formatToken: u
    } = n.value, d = e.value.getDerivativeToken(r.value);
    let c = f(f({}, d), s);
    u && (c = u(c));
    const p = Qc(c, l);
    c._tokenKey = p, nd(p);
    const h = `${td}-${Eo(p)}`;
    return c._hashId = h, [c, h];
  }, (l) => {
    od(l[0]._tokenKey);
  });
}
var ad = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Bl = "comm", Nl = "rule", Hl = "decl", ld = "@import", sd = "@namespace", ud = "@keyframes", cd = "@layer", Fl = Math.abs, Mo = String.fromCharCode;
function Ll(e) {
  return e.trim();
}
function Rn(e, t, n) {
  return e.replace(t, n);
}
function dd(e, t, n) {
  return e.indexOf(t, n);
}
function wt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Tt(e, t, n) {
  return e.slice(t, n);
}
function Me(e) {
  return e.length;
}
function fd(e) {
  return e.length;
}
function yn(e, t) {
  return t.push(e), e;
}
var ur = 1, Pt = 1, Wl = 0, me = 0, ee = 0, jt = "";
function Ro(e, t, n, r, o, i, a, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: ur, column: Pt, length: a, return: "", siblings: l };
}
function pd() {
  return ee;
}
function hd() {
  return ee = me > 0 ? wt(jt, --me) : 0, Pt--, ee === 10 && (Pt = 1, ur--), ee;
}
function $e() {
  return ee = me < Wl ? wt(jt, me++) : 0, Pt++, ee === 10 && (Pt = 1, ur++), ee;
}
function Ve() {
  return wt(jt, me);
}
function jn() {
  return me;
}
function cr(e, t) {
  return Tt(jt, e, t);
}
function an(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function gd(e) {
  return ur = Pt = 1, Wl = Me(jt = e), me = 0, [];
}
function vd(e) {
  return jt = "", e;
}
function xr(e) {
  return Ll(cr(me - 1, qr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function md(e) {
  for (; (ee = Ve()) && ee < 33; )
    $e();
  return an(e) > 2 || an(ee) > 3 ? "" : " ";
}
function bd(e, t) {
  for (; --t && $e() && !(ee < 48 || ee > 102 || ee > 57 && ee < 65 || ee > 70 && ee < 97); )
    ;
  return cr(e, jn() + (t < 6 && Ve() == 32 && $e() == 32));
}
function qr(e) {
  for (; $e(); )
    switch (ee) {
      // ] ) " '
      case e:
        return me;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && qr(ee);
        break;
      // (
      case 40:
        e === 41 && qr(e);
        break;
      // \
      case 92:
        $e();
        break;
    }
  return me;
}
function yd(e, t) {
  for (; $e() && e + ee !== 57; )
    if (e + ee === 84 && Ve() === 47)
      break;
  return "/*" + cr(t, me - 1) + "*" + Mo(e === 47 ? e : $e());
}
function wd(e) {
  for (; !an(Ve()); )
    $e();
  return cr(e, me);
}
function Sd(e) {
  return vd(Dn("", null, null, null, [""], e = gd(e), 0, [0], e));
}
function Dn(e, t, n, r, o, i, a, l, s) {
  for (var u = 0, d = 0, c = a, p = 0, h = 0, b = 0, m = 1, w = 1, v = 1, y = 0, C = "", P = o, $ = i, x = r, g = C; w; )
    switch (b = y, y = $e()) {
      // (
      case 40:
        if (b != 108 && wt(g, c - 1) == 58) {
          dd(g += Rn(xr(y), "&", "&\f"), "&\f", Fl(u ? l[u - 1] : 0)) != -1 && (v = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        g += xr(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        g += md(b);
        break;
      // \
      case 92:
        g += bd(jn() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ve()) {
          case 42:
          case 47:
            yn(xd(yd($e(), jn()), t, n, s), s), (an(b || 1) == 5 || an(Ve() || 1) == 5) && Me(g) && Tt(g, -1, void 0) !== " " && (g += " ");
            break;
          default:
            g += "/";
        }
        break;
      // {
      case 123 * m:
        l[u++] = Me(g) * v;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (y) {
          // \0 }
          case 0:
          case 125:
            w = 0;
          // ;
          case 59 + d:
            v == -1 && (g = Rn(g, /\f/g, "")), h > 0 && (Me(g) - c || m === 0 && b === 47) && yn(h > 32 ? yi(g + ";", r, n, c - 1, s) : yi(Rn(g, " ", "") + ";", r, n, c - 2, s), s);
            break;
          // @ ;
          case 59:
            g += ";";
          // { rule/at-rule
          default:
            if (yn(x = bi(g, t, n, u, d, o, l, C, P = [], $ = [], c, i), i), y === 123)
              if (d === 0)
                Dn(g, t, x, x, P, i, c, l, $);
              else {
                switch (p) {
                  // c(ontainer)
                  case 99:
                    if (wt(g, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (wt(g, 2) === 97) break;
                  default:
                    d = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                d ? Dn(e, x, x, r && yn(bi(e, x, x, 0, 0, o, l, C, o, P = [], c, $), $), o, $, c, l, r ? P : $) : Dn(g, x, x, x, [""], $, 0, l, $);
              }
        }
        u = d = h = 0, m = v = 1, C = g = "", c = a;
        break;
      // :
      case 58:
        c = 1 + Me(g), h = b;
      default:
        if (m < 1) {
          if (y == 123)
            --m;
          else if (y == 125 && m++ == 0 && hd() == 125)
            continue;
        }
        switch (g += Mo(y), y * m) {
          // &
          case 38:
            v = d > 0 ? 1 : (g += "\f", -1);
            break;
          // ,
          case 44:
            l[u++] = (Me(g) - 1) * v, v = 1;
            break;
          // @
          case 64:
            Ve() === 45 && (g += xr($e())), p = Ve(), d = c = Me(C = g += wd(jn())), y++;
            break;
          // -
          case 45:
            b === 45 && Me(g) == 2 && (m = 0);
        }
    }
  return i;
}
function bi(e, t, n, r, o, i, a, l, s, u, d, c) {
  for (var p = o - 1, h = o === 0 ? i : [""], b = fd(h), m = 0, w = 0, v = 0; m < r; ++m)
    for (var y = 0, C = Tt(e, p + 1, p = Fl(w = a[m])), P = e; y < b; ++y)
      (P = Ll(w > 0 ? h[y] + " " + C : Rn(C, /&\f/g, h[y]))) && (s[v++] = P);
  return Ro(e, t, n, o === 0 ? Nl : l, s, u, d, c);
}
function xd(e, t, n, r) {
  return Ro(e, t, n, Bl, Mo(pd()), Tt(e, 2, -2), 0, r);
}
function yi(e, t, n, r, o) {
  return Ro(e, t, n, Hl, Tt(e, 0, r), Tt(e, r + 1, -1), r, o);
}
function Kr(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Cd(e, t, n, r) {
  switch (e.type) {
    case cd:
      if (e.children.length) break;
    case ld:
    case sd:
    case Hl:
      return e.return = e.return || e.value;
    case Bl:
      return "";
    case ud:
      return e.return = e.value + "{" + Kr(e.children, r) + "}";
    case Nl:
      if (!Me(e.value = e.props.join(","))) return "";
  }
  return Me(n = Kr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
let Zr = {};
function $d(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error(`Warning: ${t}`);
}
function Od() {
  Zr = {};
}
function Td(e, t, n) {
  !t && !Zr[n] && (e(!1, n), Zr[n] = !0);
}
function jo(e, t) {
  Td($d, e, t);
}
function kl(e, t) {
  const {
    path: n,
    parentSelectors: r
  } = t;
  jo(!1, `[Ant Design Vue CSS-in-JS] ${n ? `Error in '${n}': ` : ""}${e}${r.length ? ` Selector info: ${r.join(" -> ")}` : ""}`);
}
const Pd = (e, t, n) => {
  if (e === "content") {
    const r = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    (typeof t != "string" || ["normal", "none", "initial", "inherit", "unset"].indexOf(t) === -1 && !r.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && kl(`You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${t}"'\`.`, n);
  }
}, _d = (e, t, n) => {
  e === "animation" && n.hashId && t !== "none" && kl(`You seem to be using hashed animation '${t}', in which case 'animationName' with Keyframe as value is recommended.`, n);
}, wi = gn(), Vl = "_skip_check_";
function Si(e) {
  return Kr(Sd(e), Cd).replace(/\{%%%\:[^;];}/g, ";");
}
function Ed(e) {
  return typeof e == "object" && e && Vl in e;
}
function Ad(e, t, n) {
  if (!t)
    return e;
  const r = `.${t}`, o = n === "low" ? `:where(${r})` : r;
  return e.split(",").map((a) => {
    var l;
    const s = a.trim().split(/\s+/);
    let u = s[0] || "";
    const d = ((l = u.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return u = `${d}${o}${u.slice(d.length)}`, [u, ...s.slice(1)].join(" ");
  }).join(",");
}
const Qr = /* @__PURE__ */ new Set();
process.env.NODE_ENV;
const Jr = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    root: n,
    injectHash: r,
    parentSelectors: o
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  };
  const {
    hashId: i,
    layer: a,
    path: l,
    hashPriority: s,
    transformers: u = [],
    linters: d = []
  } = t;
  let c = "", p = {};
  function h(w) {
    const v = w.getName(i);
    if (!p[v]) {
      const [y] = Jr(w.style, t, {
        root: !1,
        parentSelectors: o
      });
      p[v] = `@keyframes ${w.getName(i)}${y}`;
    }
  }
  function b(w) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return w.forEach((y) => {
      Array.isArray(y) ? b(y, v) : y && v.push(y);
    }), v;
  }
  if (b(Array.isArray(e) ? e : [e]).forEach((w) => {
    const v = typeof w == "string" && !n ? {} : w;
    if (typeof v == "string")
      c += `${v}
`;
    else if (v._keyframe)
      h(v);
    else {
      const y = u.reduce((C, P) => {
        var $;
        return (($ = P == null ? void 0 : P.visit) === null || $ === void 0 ? void 0 : $.call(P, C)) || C;
      }, v);
      Object.keys(y).forEach((C) => {
        var P;
        const $ = y[C];
        if (typeof $ == "object" && $ && (C !== "animationName" || !$._keyframe) && !Ed($)) {
          let x = !1, g = C.trim(), E = !1;
          (n || r) && i ? g.startsWith("@") ? x = !0 : g = Ad(C, i, s) : n && !i && (g === "&" || g === "") && (g = "", E = !0);
          const [j, T] = Jr($, t, {
            root: E,
            injectHash: x,
            parentSelectors: [...o, g]
          });
          p = f(f({}, p), T), c += `${g}${j}`;
        } else {
          const x = (P = $ == null ? void 0 : $.value) !== null && P !== void 0 ? P : $;
          process.env.NODE_ENV !== "production" && (typeof $ != "object" || !($ != null && $[Vl])) && [Pd, _d, ...d].forEach((j) => j(C, x, {
            path: l,
            hashId: i,
            parentSelectors: o
          }));
          const g = C.replace(/[A-Z]/g, (j) => `-${j.toLowerCase()}`);
          let E = x;
          !ad[C] && typeof E == "number" && E !== 0 && (E = `${E}px`), C === "animationName" && ($ != null && $._keyframe) && (h($), E = $.getName(i)), c += `${g}:${E};`;
        }
      });
    }
  }), !n)
    c = `{${c}}`;
  else if (a && ed()) {
    const w = a.split(",");
    c = `@layer ${w[w.length - 1].trim()} {${c}}`, w.length > 1 && (c = `@layer ${a}{%%%:%}${c}`);
  }
  return [c, p];
};
function Id(e, t) {
  return Eo(`${e.join("%")}${t}`);
}
function xi(e, t) {
  const n = Io(), r = I(() => e.value.token._tokenKey), o = I(() => [r.value, ...e.value.path]);
  let i = wi;
  return process.env.NODE_ENV !== "production" && n.value.mock !== void 0 && (i = n.value.mock === "client"), Il(
    "style",
    o,
    // Create cache if needed
    () => {
      const a = t(), {
        hashPriority: l,
        container: s,
        transformers: u,
        linters: d
      } = n.value, {
        path: c,
        hashId: p,
        layer: h
      } = e.value, [b, m] = Jr(a, {
        hashId: p,
        hashPriority: l,
        layer: h,
        path: c.join("-"),
        transformers: u,
        linters: d
      }), w = Si(b), v = Id(o.value, w);
      if (i) {
        const y = Un(w, v, {
          mark: yt,
          prepend: "queue",
          attachTo: s
        });
        y[Ut] = Xn, y.setAttribute(_l, r.value), process.env.NODE_ENV !== "production" && y.setAttribute(kc, o.value.join("|")), Object.keys(m).forEach((C) => {
          Qr.has(C) || (Qr.add(C), Un(Si(m[C]), `_effect-${C}`, {
            mark: yt,
            prepend: "queue",
            attachTo: s
          }));
        });
      }
      return [w, r.value, v];
    },
    // Remove cache if no need
    (a, l) => {
      let [, , s] = a;
      (l || n.value.autoClear) && wi && Gn(s, {
        mark: yt
      });
    }
  ), (a) => a;
}
class we {
  constructor(t, n) {
    this._keyframe = !0, this.name = t, this.style = n;
  }
  getName() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return t ? `${t}-${this.name}` : this.name;
  }
}
function Md(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
class _t {
  constructor() {
    this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = {
      map: this.cache
    };
    return t.forEach((o) => {
      var i;
      r ? r = (i = r == null ? void 0 : r.map) === null || i === void 0 ? void 0 : i.get(o) : r = void 0;
    }), r != null && r.value && n && (r.value[1] = this.cacheCallTimes++), r == null ? void 0 : r.value;
  }
  get(t) {
    var n;
    return (n = this.internalGet(t, !0)) === null || n === void 0 ? void 0 : n[0];
  }
  has(t) {
    return !!this.internalGet(t);
  }
  set(t, n) {
    if (!this.has(t)) {
      if (this.size() + 1 > _t.MAX_CACHE_SIZE + _t.MAX_CACHE_OFFSET) {
        const [o] = this.keys.reduce((i, a) => {
          const [, l] = i;
          return this.internalGet(a)[1] < l ? [a, this.internalGet(a)[1]] : i;
        }, [this.keys[0], this.cacheCallTimes]);
        this.delete(o);
      }
      this.keys.push(t);
    }
    let r = this.cache;
    t.forEach((o, i) => {
      if (i === t.length - 1)
        r.set(o, {
          value: [n, this.cacheCallTimes++]
        });
      else {
        const a = r.get(o);
        a ? a.map || (a.map = /* @__PURE__ */ new Map()) : r.set(o, {
          map: /* @__PURE__ */ new Map()
        }), r = r.get(o).map;
      }
    });
  }
  deleteByPath(t, n) {
    var r;
    const o = t.get(n[0]);
    if (n.length === 1)
      return o.map ? t.set(n[0], {
        map: o.map
      }) : t.delete(n[0]), (r = o.value) === null || r === void 0 ? void 0 : r[0];
    const i = this.deleteByPath(o.map, n.slice(1));
    return (!o.map || o.map.size === 0) && !o.value && t.delete(n[0]), i;
  }
  delete(t) {
    if (this.has(t))
      return this.keys = this.keys.filter((n) => !Md(n, t)), this.deleteByPath(this.cache, t);
  }
}
_t.MAX_CACHE_SIZE = 20;
_t.MAX_CACHE_OFFSET = 5;
function Rd() {
}
let vn = Rd;
process.env.NODE_ENV !== "production" && (vn = (e, t, n) => {
  jo(e, `[ant-design-vue: ${t}] ${n}`), process.env.NODE_ENV === "test" && Od();
});
let Ci = 0;
class jd {
  constructor(t) {
    this.derivatives = Array.isArray(t) ? t : [t], this.id = Ci, t.length === 0 && vn(t.length > 0, "[Ant Design Vue CSS-in-JS] Theme should have at least one derivative function."), Ci += 1;
  }
  getDerivativeToken(t) {
    return this.derivatives.reduce((n, r) => r(t, n), void 0);
  }
}
const Cr = new _t();
function Dd(e) {
  const t = Array.isArray(e) ? e : [e];
  return Cr.has(t) || Cr.set(t, new jd(t)), Cr.get(t);
}
function gt(e) {
  return e.notSplit = !0, e;
}
gt(["borderTop", "borderBottom"]), gt(["borderTop"]), gt(["borderBottom"]), gt(["borderLeft", "borderRight"]), gt(["borderLeft"]), gt(["borderRight"]);
const zd = "4.0.0-rc.6", qn = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
function re(e, t) {
  Bd(e) && (e = "100%");
  var n = Nd(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function wn(e) {
  return Math.min(1, Math.max(0, e));
}
function Bd(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Nd(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Xl(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Sn(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function ot(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Hd(e, t, n) {
  return {
    r: re(e, 255) * 255,
    g: re(t, 255) * 255,
    b: re(n, 255) * 255
  };
}
function $i(e, t, n) {
  e = re(e, 255), t = re(t, 255), n = re(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), i = 0, a = 0, l = (r + o) / 2;
  if (r === o)
    a = 0, i = 0;
  else {
    var s = r - o;
    switch (a = l > 0.5 ? s / (2 - r - o) : s / (r + o), r) {
      case e:
        i = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / s + 2;
        break;
      case n:
        i = (e - t) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: a, l };
}
function $r(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Fd(e, t, n) {
  var r, o, i;
  if (e = re(e, 360), t = re(t, 100), n = re(n, 100), t === 0)
    o = n, i = n, r = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    r = $r(l, a, e + 1 / 3), o = $r(l, a, e), i = $r(l, a, e - 1 / 3);
  }
  return { r: r * 255, g: o * 255, b: i * 255 };
}
function eo(e, t, n) {
  e = re(e, 255), t = re(t, 255), n = re(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), i = 0, a = r, l = r - o, s = r === 0 ? 0 : l / r;
  if (r === o)
    i = 0;
  else {
    switch (r) {
      case e:
        i = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / l + 2;
        break;
      case n:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s, v: a };
}
function Ld(e, t, n) {
  e = re(e, 360) * 6, t = re(t, 100), n = re(n, 100);
  var r = Math.floor(e), o = e - r, i = n * (1 - t), a = n * (1 - o * t), l = n * (1 - (1 - o) * t), s = r % 6, u = [n, a, i, i, l, n][s], d = [l, n, n, a, i, i][s], c = [i, i, l, n, n, a][s];
  return { r: u * 255, g: d * 255, b: c * 255 };
}
function to(e, t, n, r) {
  var o = [
    ot(Math.round(e).toString(16)),
    ot(Math.round(t).toString(16)),
    ot(Math.round(n).toString(16))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function Wd(e, t, n, r, o) {
  var i = [
    ot(Math.round(e).toString(16)),
    ot(Math.round(t).toString(16)),
    ot(Math.round(n).toString(16)),
    ot(kd(r))
  ];
  return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function kd(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Oi(e) {
  return de(e) / 255;
}
function de(e) {
  return parseInt(e, 16);
}
function Vd(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var no = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function mt(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, o = null, i = null, a = !1, l = !1;
  return typeof e == "string" && (e = Ud(e)), typeof e == "object" && (Be(e.r) && Be(e.g) && Be(e.b) ? (t = Hd(e.r, e.g, e.b), a = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Be(e.h) && Be(e.s) && Be(e.v) ? (r = Sn(e.s), o = Sn(e.v), t = Ld(e.h, r, o), a = !0, l = "hsv") : Be(e.h) && Be(e.s) && Be(e.l) && (r = Sn(e.s), i = Sn(e.l), t = Fd(e.h, r, i), a = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Xl(n), {
    ok: a,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Xd = "[-\\+]?\\d+%?", Gd = "[-\\+]?\\d*\\.\\d+%?", Xe = "(?:".concat(Gd, ")|(?:").concat(Xd, ")"), Or = "[\\s|\\(]+(".concat(Xe, ")[,|\\s]+(").concat(Xe, ")[,|\\s]+(").concat(Xe, ")\\s*\\)?"), Tr = "[\\s|\\(]+(".concat(Xe, ")[,|\\s]+(").concat(Xe, ")[,|\\s]+(").concat(Xe, ")[,|\\s]+(").concat(Xe, ")\\s*\\)?"), xe = {
  CSS_UNIT: new RegExp(Xe),
  rgb: new RegExp("rgb" + Or),
  rgba: new RegExp("rgba" + Tr),
  hsl: new RegExp("hsl" + Or),
  hsla: new RegExp("hsla" + Tr),
  hsv: new RegExp("hsv" + Or),
  hsva: new RegExp("hsva" + Tr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Ud(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (no[e])
    e = no[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = xe.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = xe.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = xe.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = xe.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = xe.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = xe.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = xe.hex8.exec(e), n ? {
    r: de(n[1]),
    g: de(n[2]),
    b: de(n[3]),
    a: Oi(n[4]),
    format: t ? "name" : "hex8"
  } : (n = xe.hex6.exec(e), n ? {
    r: de(n[1]),
    g: de(n[2]),
    b: de(n[3]),
    format: t ? "name" : "hex"
  } : (n = xe.hex4.exec(e), n ? {
    r: de(n[1] + n[1]),
    g: de(n[2] + n[2]),
    b: de(n[3] + n[3]),
    a: Oi(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = xe.hex3.exec(e), n ? {
    r: de(n[1] + n[1]),
    g: de(n[2] + n[2]),
    b: de(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Be(e) {
  return !!xe.CSS_UNIT.exec(String(e));
}
var ae = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Vd(t)), this.originalInput = t;
      var o = mt(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : o.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, o, i = t.r / 255, a = t.g / 255, l = t.b / 255;
      return i <= 0.03928 ? n = i / 12.92 : n = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? r = a / 12.92 : r = Math.pow((a + 0.055) / 1.055, 2.4), l <= 0.03928 ? o = l / 12.92 : o = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Xl(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = eo(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = eo(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = $i(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = $i(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), to(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Wd(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(re(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(re(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + to(this.r, this.g, this.b, !1), n = 0, r = Object.entries(no); n < r.length; n++) {
        var o = r[n], i = o[0], a = o[1];
        if (t === a)
          return i;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, o = this.a < 1 && this.a >= 0, i = !n && o && (t.startsWith("hex") || t === "name");
      return i ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = wn(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = wn(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = wn(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = wn(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), o = new e(t).toRgb(), i = n / 100, a = {
        r: (o.r - r.r) * i + r.r,
        g: (o.g - r.g) * i + r.g,
        b: (o.b - r.b) * i + r.b,
        a: (o.a - r.a) * i + r.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), o = 360 / n, i = [this];
      for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + o) % 360, i.push(new e(r));
      return i;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, o = n.s, i = n.v, a = [], l = 1 / t; t--; )
        a.push(new e({ h: r, s: o, v: i })), i = (i + l) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), o = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, o = [this], i = 360 / t, a = 1; a < t; a++)
        o.push(new e({ h: (r + a * i) % 360, s: n.s, l: n.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), xn = 2, Ti = 0.16, Yd = 0.05, qd = 0.05, Kd = 0.15, Gl = 5, Ul = 4, Zd = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function Pi(e) {
  var t = e.r, n = e.g, r = e.b, o = eo(t, n, r);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function Cn(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(to(t, n, r, !1));
}
function Qd(e, t, n) {
  var r = n / 100, o = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return o;
}
function _i(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - xn * t : Math.round(e.h) + xn * t : r = n ? Math.round(e.h) + xn * t : Math.round(e.h) - xn * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Ei(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - Ti * t : t === Ul ? r = e.s + Ti : r = e.s + Yd * t, r > 1 && (r = 1), n && t === Gl && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function Ai(e, t, n) {
  var r;
  return n ? r = e.v + qd * t : r = e.v - Kd * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function Et(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = mt(e), o = Gl; o > 0; o -= 1) {
    var i = Pi(r), a = Cn(mt({
      h: _i(i, o, !0),
      s: Ei(i, o, !0),
      v: Ai(i, o, !0)
    }));
    n.push(a);
  }
  n.push(Cn(r));
  for (var l = 1; l <= Ul; l += 1) {
    var s = Pi(r), u = Cn(mt({
      h: _i(s, l),
      s: Ei(s, l),
      v: Ai(s, l)
    }));
    n.push(u);
  }
  return t.theme === "dark" ? Zd.map(function(d) {
    var c = d.index, p = d.opacity, h = Cn(Qd(mt(t.backgroundColor || "#141414"), mt(n[c]), p * 100));
    return h;
  }) : n;
}
var Pr = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, zn = {}, _r = {};
Object.keys(Pr).forEach(function(e) {
  zn[e] = Et(Pr[e]), zn[e].primary = zn[e][5], _r[e] = Et(Pr[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), _r[e].primary = _r[e][5];
});
var Jd = zn.blue;
const ef = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function tf(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3)
    // 4
  };
}
const Yl = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, Do = f(f({}, Yl), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1
});
function nf(e, t) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: r
  } = t;
  const {
    colorSuccess: o,
    colorWarning: i,
    colorError: a,
    colorInfo: l,
    colorPrimary: s,
    colorBgBase: u,
    colorTextBase: d
  } = e, c = n(s), p = n(o), h = n(i), b = n(a), m = n(l), w = r(u, d);
  return f(f({}, w), {
    colorPrimaryBg: c[1],
    colorPrimaryBgHover: c[2],
    colorPrimaryBorder: c[3],
    colorPrimaryBorderHover: c[4],
    colorPrimaryHover: c[5],
    colorPrimary: c[6],
    colorPrimaryActive: c[7],
    colorPrimaryTextHover: c[8],
    colorPrimaryText: c[9],
    colorPrimaryTextActive: c[10],
    colorSuccessBg: p[1],
    colorSuccessBgHover: p[2],
    colorSuccessBorder: p[3],
    colorSuccessBorderHover: p[4],
    colorSuccessHover: p[4],
    colorSuccess: p[6],
    colorSuccessActive: p[7],
    colorSuccessTextHover: p[8],
    colorSuccessText: p[9],
    colorSuccessTextActive: p[10],
    colorErrorBg: b[1],
    colorErrorBgHover: b[2],
    colorErrorBorder: b[3],
    colorErrorBorderHover: b[4],
    colorErrorHover: b[5],
    colorError: b[6],
    colorErrorActive: b[7],
    colorErrorTextHover: b[8],
    colorErrorText: b[9],
    colorErrorTextActive: b[10],
    colorWarningBg: h[1],
    colorWarningBgHover: h[2],
    colorWarningBorder: h[3],
    colorWarningBorderHover: h[4],
    colorWarningHover: h[4],
    colorWarning: h[6],
    colorWarningActive: h[7],
    colorWarningTextHover: h[8],
    colorWarningText: h[9],
    colorWarningTextActive: h[10],
    colorInfoBg: m[1],
    colorInfoBgHover: m[2],
    colorInfoBorder: m[3],
    colorInfoBorderHover: m[4],
    colorInfoHover: m[4],
    colorInfo: m[6],
    colorInfoActive: m[7],
    colorInfoTextHover: m[8],
    colorInfoText: m[9],
    colorInfoTextActive: m[10],
    colorBgMask: new ae("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const rf = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function of(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: o
  } = e;
  return f({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, rf(r));
}
const Ne = (e, t) => new ae(e).setAlpha(t).toRgbString(), Ft = (e, t) => new ae(e).darken(t).toHexString(), af = (e) => {
  const t = Et(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, lf = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: Ne(r, 0.88),
    colorTextSecondary: Ne(r, 0.65),
    colorTextTertiary: Ne(r, 0.45),
    colorTextQuaternary: Ne(r, 0.25),
    colorFill: Ne(r, 0.15),
    colorFillSecondary: Ne(r, 0.06),
    colorFillTertiary: Ne(r, 0.04),
    colorFillQuaternary: Ne(r, 0.02),
    colorBgLayout: Ft(n, 4),
    colorBgContainer: Ft(n, 0),
    colorBgElevated: Ft(n, 0),
    colorBgSpotlight: Ne(r, 0.85),
    colorBorder: Ft(n, 15),
    colorBorderSecondary: Ft(n, 6)
  };
};
function sf(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const o = r - 1, i = e * Math.pow(2.71828, o / 5), a = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return t[1] = e, t.map((n) => {
    const r = n + 8;
    return {
      size: n,
      lineHeight: r / n
    };
  });
}
const uf = (e) => {
  const t = sf(e), n = t.map((o) => o.size), r = t.map((o) => o.lineHeight);
  return {
    fontSizeSM: n[0],
    fontSize: n[1],
    fontSizeLG: n[2],
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: r[1],
    lineHeightLG: r[2],
    lineHeightSM: r[0],
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function cf(e) {
  const t = Object.keys(Yl).map((n) => {
    const r = Et(e[n]);
    return new Array(10).fill(1).reduce((o, i, a) => (o[`${n}-${a + 1}`] = r[a], o), {});
  }).reduce((n, r) => (n = f(f({}, n), r), n), {});
  return f(f(f(f(f(f(f({}, e), t), nf(e, {
    generateColorPalettes: af,
    generateNeutralColorPalettes: lf
  })), uf(e.fontSize)), tf(e)), ef(e)), of(e));
}
function Er(e) {
  return e >= 0 && e <= 255;
}
function $n(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = new ae(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: l,
    b: s
  } = new ae(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const d = Math.round((n - a * (1 - u)) / u), c = Math.round((r - l * (1 - u)) / u), p = Math.round((o - s * (1 - u)) / u);
    if (Er(d) && Er(c) && Er(p))
      return new ae({
        r: d,
        g: c,
        b: p,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new ae({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var df = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function ff(e) {
  const {
    override: t
  } = e, n = df(e, ["override"]), r = f({}, t);
  Object.keys(Do).forEach((h) => {
    delete r[h];
  });
  const o = f(f({}, n), r), i = 480, a = 576, l = 768, s = 992, u = 1200, d = 1600, c = 2e3;
  return f(f(f({}, o), {
    colorLink: o.colorInfoText,
    colorLinkHover: o.colorInfoHover,
    colorLinkActive: o.colorInfoActive,
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: $n(o.colorBorderSecondary, o.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: $n(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: $n(o.colorWarningBg, o.colorBgContainer),
    // Font
    fontSizeIcon: o.fontSizeSM,
    // Control
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: $n(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
    boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: i,
    screenXSMin: i,
    screenXSMax: a - 1,
    screenSM: a,
    screenSMMin: a,
    screenSMMax: l - 1,
    screenMD: l,
    screenMDMin: l,
    screenMDMax: s - 1,
    screenLG: s,
    screenLGMin: s,
    screenLGMax: u - 1,
    screenXL: u,
    screenXLMin: u,
    screenXLMax: d - 1,
    screenXXL: d,
    screenXXLMin: d,
    screenXXLMax: c - 1,
    screenXXXL: c,
    screenXXXLMin: c,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
    boxShadowCard: `
      0 1px 2px -2px ${new ae("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ae("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ae("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), r);
}
const pf = (e, t, n, r, o) => {
  const i = e / 2, a = i - n * (Math.sqrt(2) - 1), l = i, s = i + n * (1 - 1 / Math.sqrt(2)), u = i - n * (1 - 1 / Math.sqrt(2)), d = 2 * i - t * (1 / Math.sqrt(2)), c = t * (1 / Math.sqrt(2)), p = 4 * i - d, h = c, b = 4 * i - s, m = u, w = 4 * i - a, v = l;
  return {
    borderRadius: {
      _skip_check_: !0,
      value: `0 0 ${t}px`
    },
    pointerEvents: "none",
    width: e * 2,
    height: e * 2,
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      width: e / Math.sqrt(2),
      height: e / Math.sqrt(2),
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${t}px 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: o,
      zIndex: 0,
      background: "transparent"
    },
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: e * 2,
      height: e / 2,
      background: r,
      clipPath: `path('M ${a} ${l} A ${n} ${n} 0 0 0 ${s} ${u} L ${d} ${c} A ${t} ${t} 0 0 1 ${p} ${h} L ${b} ${m} A ${n} ${n} 0 0 0 ${w} ${v} Z')`,
      content: '""'
    }
  };
};
function hf(e, t) {
  return qn.reduce((n, r) => {
    const o = e[`${r}-1`], i = e[`${r}-3`], a = e[`${r}-6`], l = e[`${r}-7`];
    return f(f({}, n), t(r, {
      lightColor: o,
      lightBorderColor: i,
      darkColor: a,
      textColor: l
    }));
  }, {});
}
const zo = (e) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: e.colorText,
  fontSize: e.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: e.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: e.fontFamily
}), gf = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), vf = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), mf = (e, t) => {
  const {
    fontFamily: n,
    fontSize: r
  } = e, o = `[class^="${t}"], [class*=" ${t}"]`;
  return {
    [o]: {
      fontFamily: n,
      fontSize: r,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [o]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
}, bf = (e) => ({
  outline: `${e.lineWidthBold}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), yf = (e) => ({
  "&:focus-visible": f({}, bf(e))
});
function dt(e, t, n) {
  return (r) => {
    const o = I(() => r == null ? void 0 : r.value), [i, a, l] = dr(), {
      getPrefixCls: s,
      iconPrefixCls: u
    } = Bc(), d = I(() => s()), c = I(() => ({
      theme: i.value,
      token: a.value,
      hashId: l.value,
      path: ["Shared", d.value]
    }));
    xi(c, () => [{
      // Link
      "&": vf(a.value)
    }]);
    const p = I(() => ({
      theme: i.value,
      token: a.value,
      hashId: l.value,
      path: [e, o.value, u.value]
    }));
    return [xi(p, () => {
      const {
        token: h,
        flush: b
      } = Sf(a.value), m = typeof n == "function" ? n(h) : n, w = f(f({}, m), a.value[e]), v = `.${o.value}`, y = be(h, {
        componentCls: v,
        prefixCls: o.value,
        iconCls: `.${u.value}`,
        antCls: `.${d.value}`
      }, w), C = t(y, {
        hashId: l.value,
        prefixCls: o.value,
        rootPrefixCls: d.value,
        iconPrefixCls: u.value,
        overrideComponentToken: a.value[e]
      });
      return b(e, w), [mf(a.value, o.value), C];
    }), l];
  };
}
const ql = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let ro = !0;
function be() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!ql)
    return f({}, ...t);
  ro = !1;
  const r = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((a) => {
      Object.defineProperty(r, a, {
        configurable: !0,
        enumerable: !0,
        get: () => o[a]
      });
    });
  }), ro = !0, r;
}
function wf() {
}
function Sf(e) {
  let t, n = e, r = wf;
  return ql && (t = /* @__PURE__ */ new Set(), n = new Proxy(e, {
    get(o, i) {
      return ro && t.add(i), o[i];
    }
  }), r = (o, i) => {
    Array.from(t);
  }), {
    token: n,
    keys: t,
    flush: r
  };
}
function xf(e) {
  if (!al(e)) return it(e);
  const t = new Proxy({}, {
    get(n, r, o) {
      return Reflect.get(e.value, r, o);
    },
    set(n, r, o) {
      return e.value[r] = o, !0;
    },
    deleteProperty(n, r) {
      return Reflect.deleteProperty(e.value, r);
    },
    has(n, r) {
      return Reflect.has(e.value, r);
    },
    ownKeys() {
      return Object.keys(e.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return it(t);
}
const Cf = Dd(cf), $f = {
  token: Do,
  hashed: !0
}, Kl = Symbol("DesignTokenContext"), Zl = K(), Of = (e) => {
  je(Kl, e), ut(() => {
    Zl.value = e;
  });
};
V({
  props: {
    value: oe()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Of(xf(I(() => e.value))), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
});
function dr() {
  const e = se(Kl, Zl.value || $f), t = I(() => `${zd}-${e.hashed || ""}`), n = I(() => e.theme || Cf), r = id(n, I(() => [Do, e.token]), I(() => ({
    salt: t.value,
    override: f({
      override: e.token
    }, e.components),
    formatToken: ff
  })));
  return [n, I(() => r.value[0]), I(() => e.hashed ? r.value[1] : "")];
}
const Ql = V({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = dr(), t = I(() => new ae(e.value.colorBgBase).toHsl().l < 0.5 ? {
      opacity: 0.65
    } : {});
    return () => S("svg", {
      style: t.value,
      width: "184",
      height: "152",
      viewBox: "0 0 184 152",
      xmlns: "http://www.w3.org/2000/svg"
    }, [S("g", {
      fill: "none",
      "fill-rule": "evenodd"
    }, [S("g", {
      transform: "translate(24 31.67)"
    }, [S("ellipse", {
      "fill-opacity": ".8",
      fill: "#F5F5F7",
      cx: "67.797",
      cy: "106.89",
      rx: "67.797",
      ry: "12.668"
    }, null), S("path", {
      d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      fill: "#AEB8C2"
    }, null), S("path", {
      d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      fill: "url(#linearGradient-1)",
      transform: "translate(13.56)"
    }, null), S("path", {
      d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      fill: "#F5F5F7"
    }, null), S("path", {
      d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      fill: "#DCE0E6"
    }, null)]), S("path", {
      d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      fill: "#DCE0E6"
    }, null), S("g", {
      transform: "translate(149.65 15.383)",
      fill: "#FFF"
    }, [S("ellipse", {
      cx: "20.654",
      cy: "3.167",
      rx: "2.849",
      ry: "2.815"
    }, null), S("path", {
      d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }, null)])])]);
  }
});
Ql.PRESENTED_IMAGE_DEFAULT = !0;
const Jl = V({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = dr(), t = I(() => {
      const {
        colorFill: n,
        colorFillTertiary: r,
        colorFillQuaternary: o,
        colorBgContainer: i
      } = e.value;
      return {
        borderColor: new ae(n).onBackground(i).toHexString(),
        shadowColor: new ae(r).onBackground(i).toHexString(),
        contentColor: new ae(o).onBackground(i).toHexString()
      };
    });
    return () => S("svg", {
      width: "64",
      height: "41",
      viewBox: "0 0 64 41",
      xmlns: "http://www.w3.org/2000/svg"
    }, [S("g", {
      transform: "translate(0 1)",
      fill: "none",
      "fill-rule": "evenodd"
    }, [S("ellipse", {
      fill: t.value.shadowColor,
      cx: "32",
      cy: "33",
      rx: "32",
      ry: "7"
    }, null), S("g", {
      "fill-rule": "nonzero",
      stroke: t.value.borderColor
    }, [S("path", {
      d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }, null), S("path", {
      d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      fill: t.value.contentColor
    }, null)])])]);
  }
});
Jl.PRESENTED_IMAGE_SIMPLE = !0;
const Tf = (e) => {
  const {
    componentCls: t,
    margin: n,
    marginXS: r,
    marginXL: o,
    fontSize: i,
    lineHeight: a
  } = e;
  return {
    [t]: {
      marginInline: r,
      fontSize: i,
      lineHeight: a,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-image`]: {
        height: e.emptyImgHeight,
        marginBottom: r,
        opacity: e.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          height: "100%",
          margin: "auto"
        }
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-footer`]: {
        marginTop: n
      },
      "&-normal": {
        marginBlock: o,
        color: e.colorTextDisabled,
        [`${t}-image`]: {
          height: e.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: r,
        color: e.colorTextDisabled,
        [`${t}-image`]: {
          height: e.emptyImgHeightSM
        }
      }
    }
  };
}, Pf = dt("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n
  } = e, r = be(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: n * 2.5,
    emptyImgHeightMD: n,
    emptyImgHeightSM: n * 0.875
  });
  return [Tf(r)];
});
var _f = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const es = S(Ql, null, null), ts = S(Jl, null, null), Ef = () => ({
  prefixCls: String,
  imageStyle: oe(),
  image: Ie(),
  description: Ie()
}), Bo = V({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: Ef(),
  setup(e, t) {
    let {
      slots: n = {},
      attrs: r
    } = t;
    const {
      direction: o,
      prefixCls: i
    } = pe("empty", e), [a, l] = Pf(i);
    return () => {
      var s, u;
      const d = i.value, c = f(f({}, e), r), {
        image: p = ((s = n.image) === null || s === void 0 ? void 0 : s.call(n)) || es,
        description: h = ((u = n.description) === null || u === void 0 ? void 0 : u.call(n)) || void 0,
        imageStyle: b,
        class: m = ""
      } = c, w = _f(c, ["image", "description", "imageStyle", "class"]);
      return a(S(Lc, {
        componentName: "Empty",
        children: (v) => {
          const y = typeof h < "u" ? h : v.description, C = typeof y == "string" ? y : "empty";
          let P = null;
          return typeof p == "string" ? P = S("img", {
            alt: C,
            src: p
          }, null) : P = p, S("div", W({
            class: U(d, m, l.value, {
              [`${d}-normal`]: p === ts,
              [`${d}-rtl`]: o.value === "rtl"
            })
          }, w), [S("div", {
            class: `${d}-image`,
            style: b
          }, [P]), y && S("p", {
            class: `${d}-description`
          }, [y]), n.default && S("div", {
            class: `${d}-footer`
          }, [ct(n.default())])]);
        }
      }, null));
    };
  }
});
Bo.PRESENTED_IMAGE_DEFAULT = es;
Bo.PRESENTED_IMAGE_SIMPLE = ts;
const Lt = ar(Bo), Af = (e) => {
  const {
    prefixCls: t
  } = pe("empty", e);
  return ((r) => {
    switch (r) {
      case "Table":
      case "List":
        return S(Lt, {
          image: Lt.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return S(Lt, {
          image: Lt.PRESENTED_IMAGE_SIMPLE,
          class: `${t.value}-small`
        }, null);
      default:
        return S(Lt, null, null);
    }
  })(e.componentName);
}, If = Symbol("SizeContextKey"), Mf = () => se(If, K(void 0)), pe = (e, t) => {
  const n = Mf(), r = lr(), o = se(Ol, f(f({}, Tl), {
    renderEmpty: (x) => nn(Af, {
      componentName: x
    })
  })), i = I(() => o.getPrefixCls(e, t.prefixCls)), a = I(() => {
    var x, g;
    return (x = t.direction) !== null && x !== void 0 ? x : (g = o.direction) === null || g === void 0 ? void 0 : g.value;
  }), l = I(() => {
    var x;
    return (x = t.iconPrefixCls) !== null && x !== void 0 ? x : o.iconPrefixCls.value;
  }), s = I(() => o.getPrefixCls()), u = I(() => {
    var x;
    return (x = o.autoInsertSpaceInButton) === null || x === void 0 ? void 0 : x.value;
  }), d = o.renderEmpty, c = o.space, p = o.pageHeader, h = o.form, b = I(() => {
    var x, g;
    return (x = t.getTargetContainer) !== null && x !== void 0 ? x : (g = o.getTargetContainer) === null || g === void 0 ? void 0 : g.value;
  }), m = I(() => {
    var x, g;
    return (x = t.getPopupContainer) !== null && x !== void 0 ? x : (g = o.getPopupContainer) === null || g === void 0 ? void 0 : g.value;
  }), w = I(() => {
    var x, g;
    return (x = t.dropdownMatchSelectWidth) !== null && x !== void 0 ? x : (g = o.dropdownMatchSelectWidth) === null || g === void 0 ? void 0 : g.value;
  }), v = I(() => {
    var x;
    return (t.virtual === void 0 ? ((x = o.virtual) === null || x === void 0 ? void 0 : x.value) !== !1 : t.virtual !== !1) && w.value !== !1;
  }), y = I(() => t.size || n.value), C = I(() => {
    var x, g, E;
    return (x = t.autocomplete) !== null && x !== void 0 ? x : (E = (g = o.input) === null || g === void 0 ? void 0 : g.value) === null || E === void 0 ? void 0 : E.autocomplete;
  }), P = I(() => {
    var x;
    return (x = t.disabled) !== null && x !== void 0 ? x : r.value;
  }), $ = I(() => {
    var x;
    return (x = t.csp) !== null && x !== void 0 ? x : o.csp;
  });
  return {
    configProvider: o,
    prefixCls: i,
    direction: a,
    size: y,
    getTargetContainer: b,
    getPopupContainer: m,
    space: c,
    pageHeader: p,
    form: h,
    autoInsertSpaceInButton: u,
    renderEmpty: d,
    virtual: v,
    dropdownMatchSelectWidth: w,
    rootPrefixCls: s,
    getPrefixCls: o.getPrefixCls,
    autocomplete: C,
    csp: $,
    iconPrefixCls: l,
    disabled: P,
    select: o.select
  };
};
function Pe(e, t) {
  const n = f({}, e);
  for (let r = 0; r < t.length; r += 1) {
    const o = t[r];
    delete n[o];
  }
  return n;
}
function Rf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ns(e, t, n) {
  return n && Rf(e, n), e;
}
function Bn() {
  return (Bn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function rs(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function os(e, t) {
  if (e == null) return {};
  var n, r, o = {}, i = Object.keys(e);
  for (r = 0; r < i.length; r++) t.indexOf(n = i[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function Ii(e) {
  return ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 && Object.prototype.toString.call(e) === "[object Object]";
  var t;
}
var is = Object.prototype, as = is.toString, jf = is.hasOwnProperty, ls = /^\s*function (\w+)/;
function Mi(e) {
  var t, n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    var r = n.toString().match(ls);
    return r ? r[1] : "";
  }
  return "";
}
var lt = function(e) {
  var t, n;
  return Ii(e) !== !1 && typeof (t = e.constructor) == "function" && Ii(n = t.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
}, ss = function(e) {
  return e;
}, le = ss;
if (process.env.NODE_ENV !== "production") {
  var Df = typeof console < "u";
  le = Df ? function(e) {
    console.warn("[VueTypes warn]: " + e);
  } : ss;
}
var ln = function(e, t) {
  return jf.call(e, t);
}, zf = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, At = Array.isArray || function(e) {
  return as.call(e) === "[object Array]";
}, It = function(e) {
  return as.call(e) === "[object Function]";
}, Kn = function(e) {
  return lt(e) && ln(e, "_vueTypes_name");
}, us = function(e) {
  return lt(e) && (ln(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t) {
    return ln(e, t);
  }));
};
function No(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function ft(e, t, n) {
  var r, o = !0, i = "";
  r = lt(e) ? e : { type: e };
  var a = Kn(r) ? r._vueTypes_name + " - " : "";
  if (us(r) && r.type !== null) {
    if (r.type === void 0 || r.type === !0 || !r.required && t === void 0) return o;
    At(r.type) ? (o = r.type.some(function(c) {
      return ft(c, t) === !0;
    }), i = r.type.map(function(c) {
      return Mi(c);
    }).join(" or ")) : o = (i = Mi(r)) === "Array" ? At(t) : i === "Object" ? lt(t) : i === "String" || i === "Number" || i === "Boolean" || i === "Function" ? function(c) {
      if (c == null) return "";
      var p = c.constructor.toString().match(ls);
      return p ? p[1] : "";
    }(t) === i : t instanceof r.type;
  }
  if (!o) {
    var l = a + 'value "' + t + '" should be of type "' + i + '"';
    return l;
  }
  if (ln(r, "validator") && It(r.validator)) {
    var s = le, u = [];
    if (le = function(c) {
      u.push(c);
    }, o = r.validator(t), le = s, !o) {
      var d = (u.length > 1 ? "* " : "") + u.join(`
* `);
      return u.length = 0, d;
    }
  }
  return o;
}
function fe(e, t) {
  var n = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(o) {
    return o !== void 0 || this.default ? It(o) || ft(this, o) === !0 ? (this.default = At(o) ? function() {
      return [].concat(o);
    } : lt(o) ? function() {
      return Object.assign({}, o);
    } : o, this) : (le(this._vueTypes_name + ' - invalid default value: "' + o + '"'), this) : this;
  } } }), r = n.validator;
  return It(r) && (n.validator = No(r, n)), n;
}
function De(e, t) {
  var n = fe(e, t);
  return Object.defineProperty(n, "validate", { value: function(r) {
    return It(this.validator) && le(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = No(r, this), this;
  } });
}
function Ri(e, t, n) {
  var r, o, i = (r = t, o = {}, Object.getOwnPropertyNames(r).forEach(function(c) {
    o[c] = Object.getOwnPropertyDescriptor(r, c);
  }), Object.defineProperties({}, o));
  if (i._vueTypes_name = e, !lt(n)) return i;
  var a, l, s = n.validator, u = os(n, ["validator"]);
  if (It(s)) {
    var d = i.validator;
    d && (d = (l = (a = d).__original) !== null && l !== void 0 ? l : a), i.validator = No(d ? function(c) {
      return d.call(this, c) && s.call(this, c);
    } : s, i);
  }
  return Object.assign(i, u);
}
function fr(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var Bf = function() {
  return De("any", {});
}, Nf = function() {
  return De("function", { type: Function });
}, Hf = function() {
  return De("boolean", { type: Boolean });
}, Ff = function() {
  return De("string", { type: String });
}, Lf = function() {
  return De("number", { type: Number });
}, Wf = function() {
  return De("array", { type: Array });
}, kf = function() {
  return De("object", { type: Object });
}, Vf = function() {
  return fe("integer", { type: Number, validator: function(e) {
    return zf(e);
  } });
}, Xf = function() {
  return fe("symbol", { validator: function(e) {
    return typeof e == "symbol";
  } });
};
function Gf(e, t) {
  if (t === void 0 && (t = "custom validation failed"), typeof e != "function") throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return fe(e.name || "<<anonymous function>>", { validator: function(n) {
    var r = e(n);
    return r || le(this._vueTypes_name + " - " + t), r;
  } });
}
function Uf(e) {
  if (!At(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".', n = e.reduce(function(r, o) {
    if (o != null) {
      var i = o.constructor;
      r.indexOf(i) === -1 && r.push(i);
    }
    return r;
  }, []);
  return fe("oneOf", { type: n.length > 0 ? n : void 0, validator: function(r) {
    var o = e.indexOf(r) !== -1;
    return o || le(t), o;
  } });
}
function Yf(e) {
  if (!At(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t = !1, n = [], r = 0; r < e.length; r += 1) {
    var o = e[r];
    if (us(o)) {
      if (Kn(o) && o._vueTypes_name === "oneOf") {
        n = n.concat(o.type);
        continue;
      }
      if (It(o.validator) && (t = !0), o.type !== !0 && o.type) {
        n = n.concat(o.type);
        continue;
      }
    }
    n.push(o);
  }
  return n = n.filter(function(i, a) {
    return n.indexOf(i) === a;
  }), fe("oneOfType", t ? { type: n, validator: function(i) {
    var a = [], l = e.some(function(s) {
      var u = ft(Kn(s) && s._vueTypes_name === "oneOf" ? s.type || null : s, i);
      return typeof u == "string" && a.push(u), u === !0;
    });
    return l || le("oneOfType - provided value does not match any of the " + a.length + ` passed-in validators:
` + fr(a.join(`
`))), l;
  } } : { type: n });
}
function qf(e) {
  return fe("arrayOf", { type: Array, validator: function(t) {
    var n, r = t.every(function(o) {
      return (n = ft(e, o)) === !0;
    });
    return r || le(`arrayOf - value validation error:
` + fr(n)), r;
  } });
}
function Kf(e) {
  return fe("instanceOf", { type: e });
}
function Zf(e) {
  return fe("objectOf", { type: Object, validator: function(t) {
    var n, r = Object.keys(t).every(function(o) {
      return (n = ft(e, t[o])) === !0;
    });
    return r || le(`objectOf - value validation error:
` + fr(n)), r;
  } });
}
function Qf(e) {
  var t = Object.keys(e), n = t.filter(function(o) {
    var i;
    return !!(!((i = e[o]) === null || i === void 0) && i.required);
  }), r = fe("shape", { type: Object, validator: function(o) {
    var i = this;
    if (!lt(o)) return !1;
    var a = Object.keys(o);
    if (n.length > 0 && n.some(function(s) {
      return a.indexOf(s) === -1;
    })) {
      var l = n.filter(function(s) {
        return a.indexOf(s) === -1;
      });
      return le(l.length === 1 ? 'shape - required property "' + l[0] + '" is not defined.' : 'shape - required properties "' + l.join('", "') + '" are not defined.'), !1;
    }
    return a.every(function(s) {
      if (t.indexOf(s) === -1) return i._vueTypes_isLoose === !0 || (le('shape - shape definition does not include a "' + s + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
      var u = ft(e[s], o[s]);
      return typeof u == "string" && le('shape - "' + s + `" property validation error:
 ` + fr(u)), u === !0;
    });
  } });
  return Object.defineProperty(r, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(r, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), r;
}
var Ae = function() {
  function e() {
  }
  return e.extend = function(t) {
    var n = this;
    if (At(t)) return t.forEach(function(c) {
      return n.extend(c);
    }), this;
    var r = t.name, o = t.validate, i = o !== void 0 && o, a = t.getter, l = a !== void 0 && a, s = os(t, ["name", "validate", "getter"]);
    if (ln(this, r)) throw new TypeError('[VueTypes error]: Type "' + r + '" already defined');
    var u, d = s.type;
    return Kn(d) ? (delete s.type, Object.defineProperty(this, r, l ? { get: function() {
      return Ri(r, d, s);
    } } : { value: function() {
      var c, p = Ri(r, d, s);
      return p.validator && (p.validator = (c = p.validator).bind.apply(c, [p].concat([].slice.call(arguments)))), p;
    } })) : (u = l ? { get: function() {
      var c = Object.assign({}, s);
      return i ? De(r, c) : fe(r, c);
    }, enumerable: !0 } : { value: function() {
      var c, p, h = Object.assign({}, s);
      return c = i ? De(r, h) : fe(r, h), h.validator && (c.validator = (p = h.validator).bind.apply(p, [c].concat([].slice.call(arguments)))), c;
    }, enumerable: !0 }, Object.defineProperty(this, r, u));
  }, ns(e, null, [{ key: "any", get: function() {
    return Bf();
  } }, { key: "func", get: function() {
    return Nf().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return Hf().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return Ff().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return Lf().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return Wf().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return kf().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return Vf().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return Xf();
  } }]), e;
}();
function cs(e) {
  var t;
  return e === void 0 && (e = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (t = function(n) {
    function r() {
      return n.apply(this, arguments) || this;
    }
    return rs(r, n), ns(r, null, [{ key: "sensibleDefaults", get: function() {
      return Bn({}, this.defaults);
    }, set: function(o) {
      this.defaults = o !== !1 ? Bn({}, o !== !0 ? o : e) : {};
    } }]), r;
  }(Ae)).defaults = Bn({}, e), t;
}
Ae.defaults = {}, Ae.custom = Gf, Ae.oneOf = Uf, Ae.instanceOf = Kf, Ae.oneOfType = Yf, Ae.arrayOf = qf, Ae.objectOf = Zf, Ae.shape = Qf, Ae.utils = { validate: function(e, t) {
  return ft(t, e) === !0;
}, toType: function(e, t, n) {
  return n === void 0 && (n = !1), n ? De(e, t) : fe(e, t);
} };
(function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return rs(t, e), t;
})(cs());
const R = cs({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
R.extend([{
  name: "looseBool",
  getter: !0,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: !0,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: !0,
  type: null
}]);
const Zn = (e, t, n) => {
  jo(e, `[ant-design-vue: ${t}] ${n}`);
};
function Jf() {
  return "";
}
function ep(e) {
  return e ? e.ownerDocument : window.document;
}
function ds() {
}
const tp = () => ({
  action: R.oneOfType([R.string, R.arrayOf(R.string)]).def([]),
  showAction: R.any.def([]),
  hideAction: R.any.def([]),
  getPopupClassNameFromAlign: R.any.def(Jf),
  onPopupVisibleChange: Function,
  afterPopupVisibleChange: R.func.def(ds),
  popup: R.any,
  popupStyle: {
    type: Object,
    default: void 0
  },
  prefixCls: R.string.def("rc-trigger-popup"),
  popupClassName: R.string.def(""),
  popupPlacement: String,
  builtinPlacements: R.object,
  popupTransitionName: String,
  popupAnimation: R.any,
  mouseEnterDelay: R.number.def(0),
  mouseLeaveDelay: R.number.def(0.1),
  zIndex: Number,
  focusDelay: R.number.def(0),
  blurDelay: R.number.def(0.15),
  getPopupContainer: Function,
  getDocument: R.func.def(ep),
  forceRender: {
    type: Boolean,
    default: void 0
  },
  destroyPopupOnHide: {
    type: Boolean,
    default: !1
  },
  mask: {
    type: Boolean,
    default: !1
  },
  maskClosable: {
    type: Boolean,
    default: !0
  },
  // onPopupAlign: PropTypes.func.def(noop),
  popupAlign: R.object.def(() => ({})),
  popupVisible: {
    type: Boolean,
    default: void 0
  },
  defaultPopupVisible: {
    type: Boolean,
    default: !1
  },
  maskTransitionName: String,
  maskAnimation: String,
  stretch: String,
  alignPoint: {
    type: Boolean,
    default: void 0
  },
  autoDestroy: {
    type: Boolean,
    default: !1
  },
  mobile: Object,
  getTriggerDOMNode: Function
}), Ho = {
  visible: Boolean,
  prefixCls: String,
  zIndex: Number,
  destroyPopupOnHide: Boolean,
  forceRender: Boolean,
  // Legacy Motion
  animation: [String, Object],
  transitionName: String,
  // Measure
  stretch: {
    type: String
  },
  // Align
  align: {
    type: Object
  },
  point: {
    type: Object
  },
  getRootDomNode: {
    type: Function
  },
  getClassNameFromAlign: {
    type: Function
  },
  onMouseenter: {
    type: Function
  },
  onMouseleave: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
}, np = f(f({}, Ho), {
  mobile: {
    type: Object
  }
}), rp = f(f({}, Ho), {
  mask: Boolean,
  mobile: {
    type: Object
  },
  maskAnimation: String,
  maskTransitionName: String
});
function fs(e) {
  let {
    prefixCls: t,
    animation: n,
    transitionName: r
  } = e;
  return n ? {
    name: `${t}-${n}`
  } : r ? {
    name: r
  } : {};
}
function ps(e) {
  const {
    prefixCls: t,
    visible: n,
    zIndex: r,
    mask: o,
    maskAnimation: i,
    maskTransitionName: a
  } = e;
  if (!o)
    return null;
  let l = {};
  return (a || i) && (l = fs({
    prefixCls: t,
    transitionName: a,
    animation: i
  })), S(at, W({
    appear: !0
  }, l), {
    default: () => [xt(S("div", {
      style: {
        zIndex: r
      },
      class: `${t}-mask`
    }, null), [[bu("if"), n]])]
  });
}
ps.displayName = "Mask";
const op = V({
  compatConfig: {
    MODE: 3
  },
  name: "MobilePopupInner",
  inheritAttrs: !1,
  props: np,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(e, t) {
    let {
      expose: n,
      slots: r
    } = t;
    const o = K();
    return n({
      forceAlign: () => {
      },
      getElement: () => o.value
    }), () => {
      var i;
      const {
        zIndex: a,
        visible: l,
        prefixCls: s,
        mobile: {
          popupClassName: u,
          popupStyle: d,
          popupMotion: c = {},
          popupRender: p
        } = {}
      } = e, h = f({
        zIndex: a
      }, d);
      let b = Ce((i = r.default) === null || i === void 0 ? void 0 : i.call(r));
      b.length > 1 && (b = S("div", {
        class: `${s}-content`
      }, [b])), p && (b = p(b));
      const m = U(s, u);
      return S(at, W({
        ref: o
      }, c), {
        default: () => [l ? S("div", {
          class: m,
          style: h
        }, [b]) : null]
      });
    };
  }
});
var ip = function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function l(d) {
      try {
        u(r.next(d));
      } catch (c) {
        a(c);
      }
    }
    function s(d) {
      try {
        u(r.throw(d));
      } catch (c) {
        a(c);
      }
    }
    function u(d) {
      d.done ? i(d.value) : o(d.value).then(l, s);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const ji = ["measure", "align", null, "motion"], ap = (e, t) => {
  const n = N(null), r = N(), o = N(!1);
  function i(s) {
    o.value || (n.value = s);
  }
  function a() {
    J.cancel(r.value);
  }
  function l(s) {
    a(), r.value = J(() => {
      let u = n.value;
      switch (n.value) {
        case "align":
          u = "motion";
          break;
        case "motion":
          u = "stable";
          break;
      }
      i(u), s == null || s();
    });
  }
  return Y(e, () => {
    i("measure");
  }, {
    immediate: !0,
    flush: "post"
  }), ye(() => {
    Y(n, () => {
      switch (n.value) {
        case "measure":
          t();
          break;
      }
      n.value && (r.value = J(() => ip(void 0, void 0, void 0, function* () {
        const s = ji.indexOf(n.value), u = ji[s + 1];
        u && s !== -1 && i(u);
      })));
    }, {
      immediate: !0,
      flush: "post"
    });
  }), ze(() => {
    o.value = !0, a();
  }), [n, l];
}, lp = (e) => {
  const t = N({
    width: 0,
    height: 0
  });
  function n(o) {
    t.value = {
      width: o.offsetWidth,
      height: o.offsetHeight
    };
  }
  return [I(() => {
    const o = {};
    if (e.value) {
      const {
        width: i,
        height: a
      } = t.value;
      e.value.indexOf("height") !== -1 && a ? o.height = `${a}px` : e.value.indexOf("minHeight") !== -1 && a && (o.minHeight = `${a}px`), e.value.indexOf("width") !== -1 && i ? o.width = `${i}px` : e.value.indexOf("minWidth") !== -1 && i && (o.minWidth = `${i}px`);
    }
    return o;
  }), n];
};
function Di(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function zi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Di(Object(n), !0).forEach(function(r) {
      sp(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Di(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function oo(e) {
  "@babel/helpers - typeof";
  return oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oo(e);
}
function sp(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var Wt, up = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  // IE did it wrong again ...
  ms: "-ms-",
  O: "-o-"
};
function Qn() {
  if (Wt !== void 0)
    return Wt;
  Wt = "";
  var e = document.createElement("p").style, t = "Transform";
  for (var n in up)
    n + t in e && (Wt = n);
  return Wt;
}
function hs() {
  return Qn() ? "".concat(Qn(), "TransitionProperty") : "transitionProperty";
}
function pr() {
  return Qn() ? "".concat(Qn(), "Transform") : "transform";
}
function Bi(e, t) {
  var n = hs();
  n && (e.style[n] = t, n !== "transitionProperty" && (e.style.transitionProperty = t));
}
function Ar(e, t) {
  var n = pr();
  n && (e.style[n] = t, n !== "transform" && (e.style.transform = t));
}
function cp(e) {
  return e.style.transitionProperty || e.style[hs()];
}
function dp(e) {
  var t = window.getComputedStyle(e, null), n = t.getPropertyValue("transform") || t.getPropertyValue(pr());
  if (n && n !== "none") {
    var r = n.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(r[12] || r[4], 0),
      y: parseFloat(r[13] || r[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var fp = /matrix\((.*)\)/, pp = /matrix3d\((.*)\)/;
function hp(e, t) {
  var n = window.getComputedStyle(e, null), r = n.getPropertyValue("transform") || n.getPropertyValue(pr());
  if (r && r !== "none") {
    var o, i = r.match(fp);
    if (i)
      i = i[1], o = i.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), o[4] = t.x, o[5] = t.y, Ar(e, "matrix(".concat(o.join(","), ")"));
    else {
      var a = r.match(pp)[1];
      o = a.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), o[12] = t.x, o[13] = t.y, Ar(e, "matrix3d(".concat(o.join(","), ")"));
    }
  } else
    Ar(e, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"));
}
var gp = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, mn;
function Ni(e) {
  var t = e.style.display;
  e.style.display = "none", e.offsetHeight, e.style.display = t;
}
function St(e, t, n) {
  var r = n;
  if (oo(t) === "object") {
    for (var o in t)
      t.hasOwnProperty(o) && St(e, o, t[o]);
    return;
  }
  if (typeof r < "u") {
    typeof r == "number" && (r = "".concat(r, "px")), e.style[t] = r;
    return;
  }
  return mn(e, t);
}
function vp(e) {
  var t, n, r, o = e.ownerDocument, i = o.body, a = o && o.documentElement;
  return t = e.getBoundingClientRect(), n = Math.floor(t.left), r = Math.floor(t.top), n -= a.clientLeft || i.clientLeft || 0, r -= a.clientTop || i.clientTop || 0, {
    left: n,
    top: r
  };
}
function gs(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")], r = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var o = e.document;
    n = o.documentElement[r], typeof n != "number" && (n = o.body[r]);
  }
  return n;
}
function vs(e) {
  return gs(e);
}
function ms(e) {
  return gs(e, !0);
}
function sn(e) {
  var t = vp(e), n = e.ownerDocument, r = n.defaultView || n.parentWindow;
  return t.left += vs(r), t.top += ms(r), t;
}
function Fo(e) {
  return e != null && e == e.window;
}
function bs(e) {
  return Fo(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
}
function mp(e, t, n) {
  var r = n, o = "", i = bs(e);
  return r = r || i.defaultView.getComputedStyle(e, null), r && (o = r.getPropertyValue(t) || r[t]), o;
}
var bp = new RegExp("^(".concat(gp, ")(?!px)[a-z%]+$"), "i"), yp = /^(top|right|bottom|left)$/, Ir = "currentStyle", Mr = "runtimeStyle", Qe = "left", wp = "px";
function Sp(e, t) {
  var n = e[Ir] && e[Ir][t];
  if (bp.test(n) && !yp.test(t)) {
    var r = e.style, o = r[Qe], i = e[Mr][Qe];
    e[Mr][Qe] = e[Ir][Qe], r[Qe] = t === "fontSize" ? "1em" : n || 0, n = r.pixelLeft + wp, r[Qe] = o, e[Mr][Qe] = i;
  }
  return n === "" ? "auto" : n;
}
typeof window < "u" && (mn = window.getComputedStyle ? mp : Sp);
function On(e, t) {
  return e === "left" ? t.useCssRight ? "right" : e : t.useCssBottom ? "bottom" : e;
}
function Hi(e) {
  if (e === "left")
    return "right";
  if (e === "right")
    return "left";
  if (e === "top")
    return "bottom";
  if (e === "bottom")
    return "top";
}
function Fi(e, t, n) {
  St(e, "position") === "static" && (e.style.position = "relative");
  var r = -999, o = -999, i = On("left", n), a = On("top", n), l = Hi(i), s = Hi(a);
  i !== "left" && (r = 999), a !== "top" && (o = 999);
  var u = "", d = sn(e);
  ("left" in t || "top" in t) && (u = cp(e) || "", Bi(e, "none")), "left" in t && (e.style[l] = "", e.style[i] = "".concat(r, "px")), "top" in t && (e.style[s] = "", e.style[a] = "".concat(o, "px")), Ni(e);
  var c = sn(e), p = {};
  for (var h in t)
    if (t.hasOwnProperty(h)) {
      var b = On(h, n), m = h === "left" ? r : o, w = d[h] - c[h];
      b === h ? p[b] = m + w : p[b] = m - w;
    }
  St(e, p), Ni(e), ("left" in t || "top" in t) && Bi(e, u);
  var v = {};
  for (var y in t)
    if (t.hasOwnProperty(y)) {
      var C = On(y, n), P = t[y] - d[y];
      y === C ? v[C] = p[C] + P : v[C] = p[C] - P;
    }
  St(e, v);
}
function xp(e, t) {
  var n = sn(e), r = dp(e), o = {
    x: r.x,
    y: r.y
  };
  "left" in t && (o.x = r.x + t.left - n.left), "top" in t && (o.y = r.y + t.top - n.top), hp(e, o);
}
function Cp(e, t, n) {
  if (n.ignoreShake) {
    var r = sn(e), o = r.left.toFixed(0), i = r.top.toFixed(0), a = t.left.toFixed(0), l = t.top.toFixed(0);
    if (o === a && i === l)
      return;
  }
  n.useCssRight || n.useCssBottom ? Fi(e, t, n) : n.useCssTransform && pr() in document.body.style ? xp(e, t) : Fi(e, t, n);
}
function Lo(e, t) {
  for (var n = 0; n < e.length; n++)
    t(e[n]);
}
function ys(e) {
  return mn(e, "boxSizing") === "border-box";
}
var $p = ["margin", "border", "padding"], io = -1, Op = 2, ao = 1, Tp = 0;
function Pp(e, t, n) {
  var r = {}, o = e.style, i;
  for (i in t)
    t.hasOwnProperty(i) && (r[i] = o[i], o[i] = t[i]);
  n.call(e);
  for (i in t)
    t.hasOwnProperty(i) && (o[i] = r[i]);
}
function Xt(e, t, n) {
  var r = 0, o, i, a;
  for (i = 0; i < t.length; i++)
    if (o = t[i], o)
      for (a = 0; a < n.length; a++) {
        var l = void 0;
        o === "border" ? l = "".concat(o).concat(n[a], "Width") : l = o + n[a], r += parseFloat(mn(e, l)) || 0;
      }
  return r;
}
var Re = {
  getParent: function(t) {
    var n = t;
    do
      n.nodeType === 11 && n.host ? n = n.host : n = n.parentNode;
    while (n && n.nodeType !== 1 && n.nodeType !== 9);
    return n;
  }
};
Lo(["Width", "Height"], function(e) {
  Re["doc".concat(e)] = function(t) {
    var n = t.document;
    return Math.max(
      // firefox chrome documentElement.scrollHeight< body.scrollHeight
      // ie standard mode : documentElement.scrollHeight> body.scrollHeight
      n.documentElement["scroll".concat(e)],
      // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      n.body["scroll".concat(e)],
      Re["viewport".concat(e)](n)
    );
  }, Re["viewport".concat(e)] = function(t) {
    var n = "client".concat(e), r = t.document, o = r.body, i = r.documentElement, a = i[n];
    return r.compatMode === "CSS1Compat" && a || o && o[n] || a;
  };
});
function Li(e, t, n) {
  var r = n;
  if (Fo(e))
    return t === "width" ? Re.viewportWidth(e) : Re.viewportHeight(e);
  if (e.nodeType === 9)
    return t === "width" ? Re.docWidth(e) : Re.docHeight(e);
  var o = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"], i = Math.floor(t === "width" ? e.getBoundingClientRect().width : e.getBoundingClientRect().height), a = ys(e), l = 0;
  (i == null || i <= 0) && (i = void 0, l = mn(e, t), (l == null || Number(l) < 0) && (l = e.style[t] || 0), l = Math.floor(parseFloat(l)) || 0), r === void 0 && (r = a ? ao : io);
  var s = i !== void 0 || a, u = i || l;
  return r === io ? s ? u - Xt(e, ["border", "padding"], o) : l : s ? r === ao ? u : u + (r === Op ? -Xt(e, ["border"], o) : Xt(e, ["margin"], o)) : l + Xt(e, $p.slice(r), o);
}
var _p = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function Wi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o = t[0];
  return o.offsetWidth !== 0 ? r = Li.apply(void 0, t) : Pp(o, _p, function() {
    r = Li.apply(void 0, t);
  }), r;
}
Lo(["width", "height"], function(e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  Re["outer".concat(t)] = function(r, o) {
    return r && Wi(r, e, o ? Tp : ao);
  };
  var n = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  Re[e] = function(r, o) {
    var i = o;
    if (i !== void 0) {
      if (r) {
        var a = ys(r);
        return a && (i += Xt(r, ["padding", "border"], n)), St(r, e, i);
      }
      return;
    }
    return r && Wi(r, e, io);
  };
});
function ws(e, t) {
  for (var n in t)
    t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
var L = {
  getWindow: function(t) {
    if (t && t.document && t.setTimeout)
      return t;
    var n = t.ownerDocument || t;
    return n.defaultView || n.parentWindow;
  },
  getDocument: bs,
  offset: function(t, n, r) {
    if (typeof n < "u")
      Cp(t, n, r || {});
    else
      return sn(t);
  },
  isWindow: Fo,
  each: Lo,
  css: St,
  clone: function(t) {
    var n, r = {};
    for (n in t)
      t.hasOwnProperty(n) && (r[n] = t[n]);
    var o = t.overflow;
    if (o)
      for (n in t)
        t.hasOwnProperty(n) && (r.overflow[n] = t.overflow[n]);
    return r;
  },
  mix: ws,
  getWindowScrollLeft: function(t) {
    return vs(t);
  },
  getWindowScrollTop: function(t) {
    return ms(t);
  },
  merge: function() {
    for (var t = {}, n = 0; n < arguments.length; n++)
      L.mix(t, n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return t;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
ws(L, Re);
var Rr = L.getParent;
function lo(e) {
  if (L.isWindow(e) || e.nodeType === 9)
    return null;
  var t = L.getDocument(e), n = t.body, r, o = L.css(e, "position"), i = o === "fixed" || o === "absolute";
  if (!i)
    return e.nodeName.toLowerCase() === "html" ? null : Rr(e);
  for (r = Rr(e); r && r !== n && r.nodeType !== 9; r = Rr(r))
    if (o = L.css(r, "position"), o !== "static")
      return r;
  return null;
}
var ki = L.getParent;
function Ep(e) {
  if (L.isWindow(e) || e.nodeType === 9)
    return !1;
  var t = L.getDocument(e), n = t.body, r = null;
  for (
    r = ki(e);
    // 修复元素位于 document.documentElement 下导致崩溃问题
    r && r !== n && r !== t;
    r = ki(r)
  ) {
    var o = L.css(r, "position");
    if (o === "fixed")
      return !0;
  }
  return !1;
}
function Wo(e, t) {
  for (var n = {
    left: 0,
    right: 1 / 0,
    top: 0,
    bottom: 1 / 0
  }, r = lo(e), o = L.getDocument(e), i = o.defaultView || o.parentWindow, a = o.body, l = o.documentElement; r; ) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || r.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    r !== a && r !== l && L.css(r, "overflow") !== "visible") {
      var s = L.offset(r);
      s.left += r.clientLeft, s.top += r.clientTop, n.top = Math.max(n.top, s.top), n.right = Math.min(
        n.right,
        // consider area without scrollBar
        s.left + r.clientWidth
      ), n.bottom = Math.min(n.bottom, s.top + r.clientHeight), n.left = Math.max(n.left, s.left);
    } else if (r === a || r === l)
      break;
    r = lo(r);
  }
  var u = null;
  if (!L.isWindow(e) && e.nodeType !== 9) {
    u = e.style.position;
    var d = L.css(e, "position");
    d === "absolute" && (e.style.position = "fixed");
  }
  var c = L.getWindowScrollLeft(i), p = L.getWindowScrollTop(i), h = L.viewportWidth(i), b = L.viewportHeight(i), m = l.scrollWidth, w = l.scrollHeight, v = window.getComputedStyle(a);
  if (v.overflowX === "hidden" && (m = i.innerWidth), v.overflowY === "hidden" && (w = i.innerHeight), e.style && (e.style.position = u), t || Ep(e))
    n.left = Math.max(n.left, c), n.top = Math.max(n.top, p), n.right = Math.min(n.right, c + h), n.bottom = Math.min(n.bottom, p + b);
  else {
    var y = Math.max(m, c + h);
    n.right = Math.min(n.right, y);
    var C = Math.max(w, p + b);
    n.bottom = Math.min(n.bottom, C);
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left ? n : null;
}
function Ap(e, t, n, r) {
  var o = L.clone(e), i = {
    width: t.width,
    height: t.height
  };
  return r.adjustX && o.left < n.left && (o.left = n.left), r.resizeWidth && o.left >= n.left && o.left + i.width > n.right && (i.width -= o.left + i.width - n.right), r.adjustX && o.left + i.width > n.right && (o.left = Math.max(n.right - i.width, n.left)), r.adjustY && o.top < n.top && (o.top = n.top), r.resizeHeight && o.top >= n.top && o.top + i.height > n.bottom && (i.height -= o.top + i.height - n.bottom), r.adjustY && o.top + i.height > n.bottom && (o.top = Math.max(n.bottom - i.height, n.top)), L.mix(o, i);
}
function ko(e) {
  var t, n, r;
  if (!L.isWindow(e) && e.nodeType !== 9)
    t = L.offset(e), n = L.outerWidth(e), r = L.outerHeight(e);
  else {
    var o = L.getWindow(e);
    t = {
      left: L.getWindowScrollLeft(o),
      top: L.getWindowScrollTop(o)
    }, n = L.viewportWidth(o), r = L.viewportHeight(o);
  }
  return t.width = n, t.height = r, t;
}
function Vi(e, t) {
  var n = t.charAt(0), r = t.charAt(1), o = e.width, i = e.height, a = e.left, l = e.top;
  return n === "c" ? l += i / 2 : n === "b" && (l += i), r === "c" ? a += o / 2 : r === "r" && (a += o), {
    left: a,
    top: l
  };
}
function Tn(e, t, n, r, o) {
  var i = Vi(t, n[1]), a = Vi(e, n[0]), l = [a.left - i.left, a.top - i.top];
  return {
    left: Math.round(e.left - l[0] + r[0] - o[0]),
    top: Math.round(e.top - l[1] + r[1] - o[1])
  };
}
function Xi(e, t, n) {
  return e.left < n.left || e.left + t.width > n.right;
}
function Gi(e, t, n) {
  return e.top < n.top || e.top + t.height > n.bottom;
}
function Ip(e, t, n) {
  return e.left > n.right || e.left + t.width < n.left;
}
function Mp(e, t, n) {
  return e.top > n.bottom || e.top + t.height < n.top;
}
function Pn(e, t, n) {
  var r = [];
  return L.each(e, function(o) {
    r.push(o.replace(t, function(i) {
      return n[i];
    }));
  }), r;
}
function _n(e, t) {
  return e[t] = -e[t], e;
}
function Ui(e, t) {
  var n;
  return /%$/.test(e) ? n = parseInt(e.substring(0, e.length - 1), 10) / 100 * t : n = parseInt(e, 10), n || 0;
}
function Yi(e, t) {
  e[0] = Ui(e[0], t.width), e[1] = Ui(e[1], t.height);
}
function Ss(e, t, n, r) {
  var o = n.points, i = n.offset || [0, 0], a = n.targetOffset || [0, 0], l = n.overflow, s = n.source || e;
  i = [].concat(i), a = [].concat(a), l = l || {};
  var u = {}, d = 0, c = !!(l && l.alwaysByViewport), p = Wo(s, c), h = ko(s);
  Yi(i, h), Yi(a, t);
  var b = Tn(h, t, o, i, a), m = L.merge(h, b);
  if (p && (l.adjustX || l.adjustY) && r) {
    if (l.adjustX && Xi(b, h, p)) {
      var w = Pn(o, /[lr]/gi, {
        l: "r",
        r: "l"
      }), v = _n(i, 0), y = _n(a, 0), C = Tn(h, t, w, v, y);
      Ip(C, h, p) || (d = 1, o = w, i = v, a = y);
    }
    if (l.adjustY && Gi(b, h, p)) {
      var P = Pn(o, /[tb]/gi, {
        t: "b",
        b: "t"
      }), $ = _n(i, 1), x = _n(a, 1), g = Tn(h, t, P, $, x);
      Mp(g, h, p) || (d = 1, o = P, i = $, a = x);
    }
    d && (b = Tn(h, t, o, i, a), L.mix(m, b));
    var E = Xi(b, h, p), j = Gi(b, h, p);
    if (E || j) {
      var T = o;
      E && (T = Pn(o, /[lr]/gi, {
        l: "r",
        r: "l"
      })), j && (T = Pn(o, /[tb]/gi, {
        t: "b",
        b: "t"
      })), o = T, i = n.offset || [0, 0], a = n.targetOffset || [0, 0];
    }
    u.adjustX = l.adjustX && E, u.adjustY = l.adjustY && j, (u.adjustX || u.adjustY) && (m = Ap(b, h, p, u));
  }
  return m.width !== h.width && L.css(s, "width", L.width(s) + m.width - h.width), m.height !== h.height && L.css(s, "height", L.height(s) + m.height - h.height), L.offset(s, {
    left: m.left,
    top: m.top
  }, {
    useCssRight: n.useCssRight,
    useCssBottom: n.useCssBottom,
    useCssTransform: n.useCssTransform,
    ignoreShake: n.ignoreShake
  }), {
    points: o,
    offset: i,
    targetOffset: a,
    overflow: u
  };
}
function Rp(e, t) {
  var n = Wo(e, t), r = ko(e);
  return !n || r.left + r.width <= n.left || r.top + r.height <= n.top || r.left >= n.right || r.top >= n.bottom;
}
function Vo(e, t, n) {
  var r = n.target || t, o = ko(r), i = !Rp(r, n.overflow && n.overflow.alwaysByViewport);
  return Ss(e, o, n, i);
}
Vo.__getOffsetParent = lo;
Vo.__getVisibleRectForElement = Wo;
function jp(e, t, n) {
  var r, o, i = L.getDocument(e), a = i.defaultView || i.parentWindow, l = L.getWindowScrollLeft(a), s = L.getWindowScrollTop(a), u = L.viewportWidth(a), d = L.viewportHeight(a);
  "pageX" in t ? r = t.pageX : r = l + t.clientX, "pageY" in t ? o = t.pageY : o = s + t.clientY;
  var c = {
    left: r,
    top: o,
    width: 0,
    height: 0
  }, p = r >= 0 && r <= l + u && o >= 0 && o <= s + d, h = [n.points[0], "cc"];
  return Ss(e, c, zi(zi({}, n), {}, {
    points: h
  }), p);
}
function Oe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, o = e;
  if (Array.isArray(e) && (o = ct(e)[0]), !o)
    return null;
  const i = yu(o, t, r);
  return i.props = n ? f(f({}, i.props), t) : i.props, vn(typeof i.props.class != "object", "class must be string"), i;
}
const xs = (e) => {
  if (!e)
    return !1;
  if (e.offsetParent)
    return !0;
  if (e.getBBox) {
    const t = e.getBBox();
    if (t.width || t.height)
      return !0;
  }
  if (e.getBoundingClientRect) {
    const t = e.getBoundingClientRect();
    if (t.width || t.height)
      return !0;
  }
  return !1;
};
function Dp(e, t) {
  return e === t ? !0 : !e || !t ? !1 : "pageX" in t && "pageY" in t ? e.pageX === t.pageX && e.pageY === t.pageY : "clientX" in t && "clientY" in t ? e.clientX === t.clientX && e.clientY === t.clientY : !1;
}
function zp(e, t) {
  e !== document.activeElement && tt(t, e) && typeof e.focus == "function" && e.focus();
}
function qi(e, t) {
  let n = null, r = null;
  function o(a) {
    let [{
      target: l
    }] = a;
    if (!document.documentElement.contains(l)) return;
    const {
      width: s,
      height: u
    } = l.getBoundingClientRect(), d = Math.floor(s), c = Math.floor(u);
    (n !== d || r !== c) && Promise.resolve().then(() => {
      t({
        width: d,
        height: c
      });
    }), n = d, r = c;
  }
  const i = new gl(o);
  return e && i.observe(e), () => {
    i.disconnect();
  };
}
const Bp = (e, t) => {
  let n = !1, r = null;
  function o() {
    clearTimeout(r);
  }
  function i(a) {
    if (!n || a === !0) {
      if (e() === !1)
        return;
      n = !0, o(), r = setTimeout(() => {
        n = !1;
      }, t.value);
    } else
      o(), r = setTimeout(() => {
        n = !1, i();
      }, t.value);
  }
  return [i, () => {
    n = !1, o();
  }];
};
function Np() {
  this.__data__ = [], this.size = 0;
}
function Cs(e, t) {
  return e === t || e !== e && t !== t;
}
function hr(e, t) {
  for (var n = e.length; n--; )
    if (Cs(e[n][0], t))
      return n;
  return -1;
}
var Hp = Array.prototype, Fp = Hp.splice;
function Lp(e) {
  var t = this.__data__, n = hr(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Fp.call(t, n, 1), --this.size, !0;
}
function Wp(e) {
  var t = this.__data__, n = hr(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function kp(e) {
  return hr(this.__data__, e) > -1;
}
function Vp(e, t) {
  var n = this.__data__, r = hr(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function We(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
We.prototype.clear = Np;
We.prototype.delete = Lp;
We.prototype.get = Wp;
We.prototype.has = kp;
We.prototype.set = Vp;
function Xp() {
  this.__data__ = new We(), this.size = 0;
}
function Gp(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Up(e) {
  return this.__data__.get(e);
}
function Yp(e) {
  return this.__data__.has(e);
}
function $s(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var qp = "[object AsyncFunction]", Kp = "[object Function]", Zp = "[object GeneratorFunction]", Qp = "[object Proxy]";
function Os(e) {
  if (!$s(e))
    return !1;
  var t = Rt(e);
  return t == Kp || t == Zp || t == qp || t == Qp;
}
var jr = Le["__core-js_shared__"], Ki = function() {
  var e = /[^.]+$/.exec(jr && jr.keys && jr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Jp(e) {
  return !!Ki && Ki in e;
}
var eh = Function.prototype, th = eh.toString;
function pt(e) {
  if (e != null) {
    try {
      return th.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var nh = /[\\^$.*+?()[\]{}|]/g, rh = /^\[object .+?Constructor\]$/, oh = Function.prototype, ih = Object.prototype, ah = oh.toString, lh = ih.hasOwnProperty, sh = RegExp(
  "^" + ah.call(lh).replace(nh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function uh(e) {
  if (!$s(e) || Jp(e))
    return !1;
  var t = Os(e) ? sh : rh;
  return t.test(pt(e));
}
function ch(e, t) {
  return e == null ? void 0 : e[t];
}
function Dt(e, t) {
  var n = ch(e, t);
  return uh(n) ? n : void 0;
}
var un = Dt(Le, "Map"), cn = Dt(Object, "create");
function dh() {
  this.__data__ = cn ? cn(null) : {}, this.size = 0;
}
function fh(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ph = "__lodash_hash_undefined__", hh = Object.prototype, gh = hh.hasOwnProperty;
function vh(e) {
  var t = this.__data__;
  if (cn) {
    var n = t[e];
    return n === ph ? void 0 : n;
  }
  return gh.call(t, e) ? t[e] : void 0;
}
var mh = Object.prototype, bh = mh.hasOwnProperty;
function yh(e) {
  var t = this.__data__;
  return cn ? t[e] !== void 0 : bh.call(t, e);
}
var wh = "__lodash_hash_undefined__";
function Sh(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = cn && t === void 0 ? wh : t, this;
}
function st(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
st.prototype.clear = dh;
st.prototype.delete = fh;
st.prototype.get = vh;
st.prototype.has = yh;
st.prototype.set = Sh;
function xh() {
  this.size = 0, this.__data__ = {
    hash: new st(),
    map: new (un || We)(),
    string: new st()
  };
}
function Ch(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function gr(e, t) {
  var n = e.__data__;
  return Ch(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function $h(e) {
  var t = gr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Oh(e) {
  return gr(this, e).get(e);
}
function Th(e) {
  return gr(this, e).has(e);
}
function Ph(e, t) {
  var n = gr(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function ht(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ht.prototype.clear = xh;
ht.prototype.delete = $h;
ht.prototype.get = Oh;
ht.prototype.has = Th;
ht.prototype.set = Ph;
var _h = 200;
function Eh(e, t) {
  var n = this.__data__;
  if (n instanceof We) {
    var r = n.__data__;
    if (!un || r.length < _h - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new ht(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Ge(e) {
  var t = this.__data__ = new We(e);
  this.size = t.size;
}
Ge.prototype.clear = Xp;
Ge.prototype.delete = Gp;
Ge.prototype.get = Up;
Ge.prototype.has = Yp;
Ge.prototype.set = Eh;
var Ah = "__lodash_hash_undefined__";
function Ih(e) {
  return this.__data__.set(e, Ah), this;
}
function Mh(e) {
  return this.__data__.has(e);
}
function Jn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new ht(); ++t < n; )
    this.add(e[t]);
}
Jn.prototype.add = Jn.prototype.push = Ih;
Jn.prototype.has = Mh;
function Rh(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function jh(e, t) {
  return e.has(t);
}
var Dh = 1, zh = 2;
function Ts(e, t, n, r, o, i) {
  var a = n & Dh, l = e.length, s = t.length;
  if (l != s && !(a && s > l))
    return !1;
  var u = i.get(e), d = i.get(t);
  if (u && d)
    return u == t && d == e;
  var c = -1, p = !0, h = n & zh ? new Jn() : void 0;
  for (i.set(e, t), i.set(t, e); ++c < l; ) {
    var b = e[c], m = t[c];
    if (r)
      var w = a ? r(m, b, c, t, e, i) : r(b, m, c, e, t, i);
    if (w !== void 0) {
      if (w)
        continue;
      p = !1;
      break;
    }
    if (h) {
      if (!Rh(t, function(v, y) {
        if (!jh(h, y) && (b === v || o(b, v, n, r, i)))
          return h.push(y);
      })) {
        p = !1;
        break;
      }
    } else if (!(b === m || o(b, m, n, r, i))) {
      p = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), p;
}
var Zi = Le.Uint8Array;
function Bh(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function Nh(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Hh = 1, Fh = 2, Lh = "[object Boolean]", Wh = "[object Date]", kh = "[object Error]", Vh = "[object Map]", Xh = "[object Number]", Gh = "[object RegExp]", Uh = "[object Set]", Yh = "[object String]", qh = "[object Symbol]", Kh = "[object ArrayBuffer]", Zh = "[object DataView]", Qi = $t ? $t.prototype : void 0, Dr = Qi ? Qi.valueOf : void 0;
function Qh(e, t, n, r, o, i, a) {
  switch (n) {
    case Zh:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Kh:
      return !(e.byteLength != t.byteLength || !i(new Zi(e), new Zi(t)));
    case Lh:
    case Wh:
    case Xh:
      return Cs(+e, +t);
    case kh:
      return e.name == t.name && e.message == t.message;
    case Gh:
    case Yh:
      return e == t + "";
    case Vh:
      var l = Bh;
    case Uh:
      var s = r & Hh;
      if (l || (l = Nh), e.size != t.size && !s)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      r |= Fh, a.set(e, t);
      var d = Ts(l(e), l(t), r, o, i, a);
      return a.delete(e), d;
    case qh:
      if (Dr)
        return Dr.call(e) == Dr.call(t);
  }
  return !1;
}
function Jh(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var dn = Array.isArray;
function eg(e, t, n) {
  var r = t(e);
  return dn(e) ? r : Jh(r, n(e));
}
function tg(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
  }
  return i;
}
function ng() {
  return [];
}
var rg = Object.prototype, og = rg.propertyIsEnumerable, Ji = Object.getOwnPropertySymbols, ig = Ji ? function(e) {
  return e == null ? [] : (e = Object(e), tg(Ji(e), function(t) {
    return og.call(e, t);
  }));
} : ng;
function ag(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var lg = "[object Arguments]";
function ea(e) {
  return Ot(e) && Rt(e) == lg;
}
var Ps = Object.prototype, sg = Ps.hasOwnProperty, ug = Ps.propertyIsEnumerable, _s = ea(/* @__PURE__ */ function() {
  return arguments;
}()) ? ea : function(e) {
  return Ot(e) && sg.call(e, "callee") && !ug.call(e, "callee");
};
function cg() {
  return !1;
}
var Es = typeof exports == "object" && exports && !exports.nodeType && exports, ta = Es && typeof module == "object" && module && !module.nodeType && module, dg = ta && ta.exports === Es, na = dg ? Le.Buffer : void 0, fg = na ? na.isBuffer : void 0, er = fg || cg, pg = 9007199254740991, hg = /^(?:0|[1-9]\d*)$/;
function gg(e, t) {
  var n = typeof e;
  return t = t ?? pg, !!t && (n == "number" || n != "symbol" && hg.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var vg = 9007199254740991;
function As(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= vg;
}
var mg = "[object Arguments]", bg = "[object Array]", yg = "[object Boolean]", wg = "[object Date]", Sg = "[object Error]", xg = "[object Function]", Cg = "[object Map]", $g = "[object Number]", Og = "[object Object]", Tg = "[object RegExp]", Pg = "[object Set]", _g = "[object String]", Eg = "[object WeakMap]", Ag = "[object ArrayBuffer]", Ig = "[object DataView]", Mg = "[object Float32Array]", Rg = "[object Float64Array]", jg = "[object Int8Array]", Dg = "[object Int16Array]", zg = "[object Int32Array]", Bg = "[object Uint8Array]", Ng = "[object Uint8ClampedArray]", Hg = "[object Uint16Array]", Fg = "[object Uint32Array]", q = {};
q[Mg] = q[Rg] = q[jg] = q[Dg] = q[zg] = q[Bg] = q[Ng] = q[Hg] = q[Fg] = !0;
q[mg] = q[bg] = q[Ag] = q[yg] = q[Ig] = q[wg] = q[Sg] = q[xg] = q[Cg] = q[$g] = q[Og] = q[Tg] = q[Pg] = q[_g] = q[Eg] = !1;
function Lg(e) {
  return Ot(e) && As(e.length) && !!q[Rt(e)];
}
function Wg(e) {
  return function(t) {
    return e(t);
  };
}
var Is = typeof exports == "object" && exports && !exports.nodeType && exports, qt = Is && typeof module == "object" && module && !module.nodeType && module, kg = qt && qt.exports === Is, zr = kg && vl.process, ra = function() {
  try {
    var e = qt && qt.require && qt.require("util").types;
    return e || zr && zr.binding && zr.binding("util");
  } catch {
  }
}(), oa = ra && ra.isTypedArray, Xo = oa ? Wg(oa) : Lg, Vg = Object.prototype, Xg = Vg.hasOwnProperty;
function Gg(e, t) {
  var n = dn(e), r = !n && _s(e), o = !n && !r && er(e), i = !n && !r && !o && Xo(e), a = n || r || o || i, l = a ? ag(e.length, String) : [], s = l.length;
  for (var u in e)
    Xg.call(e, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    gg(u, s))) && l.push(u);
  return l;
}
var Ug = Object.prototype;
function Ms(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Ug;
  return e === n;
}
var Yg = bl(Object.keys, Object), qg = Object.prototype, Kg = qg.hasOwnProperty;
function Rs(e) {
  if (!Ms(e))
    return Yg(e);
  var t = [];
  for (var n in Object(e))
    Kg.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function js(e) {
  return e != null && As(e.length) && !Os(e);
}
function Zg(e) {
  return js(e) ? Gg(e) : Rs(e);
}
function ia(e) {
  return eg(e, Zg, ig);
}
var Qg = 1, Jg = Object.prototype, ev = Jg.hasOwnProperty;
function tv(e, t, n, r, o, i) {
  var a = n & Qg, l = ia(e), s = l.length, u = ia(t), d = u.length;
  if (s != d && !a)
    return !1;
  for (var c = s; c--; ) {
    var p = l[c];
    if (!(a ? p in t : ev.call(t, p)))
      return !1;
  }
  var h = i.get(e), b = i.get(t);
  if (h && b)
    return h == t && b == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var w = a; ++c < s; ) {
    p = l[c];
    var v = e[p], y = t[p];
    if (r)
      var C = a ? r(y, v, p, t, e, i) : r(v, y, p, e, t, i);
    if (!(C === void 0 ? v === y || o(v, y, n, r, i) : C)) {
      m = !1;
      break;
    }
    w || (w = p == "constructor");
  }
  if (m && !w) {
    var P = e.constructor, $ = t.constructor;
    P != $ && "constructor" in e && "constructor" in t && !(typeof P == "function" && P instanceof P && typeof $ == "function" && $ instanceof $) && (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var so = Dt(Le, "DataView"), uo = Dt(Le, "Promise"), co = Dt(Le, "Set"), fo = Dt(Le, "WeakMap"), aa = "[object Map]", nv = "[object Object]", la = "[object Promise]", sa = "[object Set]", ua = "[object WeakMap]", ca = "[object DataView]", rv = pt(so), ov = pt(un), iv = pt(uo), av = pt(co), lv = pt(fo), He = Rt;
(so && He(new so(new ArrayBuffer(1))) != ca || un && He(new un()) != aa || uo && He(uo.resolve()) != la || co && He(new co()) != sa || fo && He(new fo()) != ua) && (He = function(e) {
  var t = Rt(e), n = t == nv ? e.constructor : void 0, r = n ? pt(n) : "";
  if (r)
    switch (r) {
      case rv:
        return ca;
      case ov:
        return aa;
      case iv:
        return la;
      case av:
        return sa;
      case lv:
        return ua;
    }
  return t;
});
var sv = 1, da = "[object Arguments]", fa = "[object Array]", En = "[object Object]", uv = Object.prototype, pa = uv.hasOwnProperty;
function cv(e, t, n, r, o, i) {
  var a = dn(e), l = dn(t), s = a ? fa : He(e), u = l ? fa : He(t);
  s = s == da ? En : s, u = u == da ? En : u;
  var d = s == En, c = u == En, p = s == u;
  if (p && er(e)) {
    if (!er(t))
      return !1;
    a = !0, d = !1;
  }
  if (p && !d)
    return i || (i = new Ge()), a || Xo(e) ? Ts(e, t, n, r, o, i) : Qh(e, t, s, n, r, o, i);
  if (!(n & sv)) {
    var h = d && pa.call(e, "__wrapped__"), b = c && pa.call(t, "__wrapped__");
    if (h || b) {
      var m = h ? e.value() : e, w = b ? t.value() : t;
      return i || (i = new Ge()), o(m, w, n, r, i);
    }
  }
  return p ? (i || (i = new Ge()), tv(e, t, n, r, o, i)) : !1;
}
function Ds(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Ot(e) && !Ot(t) ? e !== e && t !== t : cv(e, t, n, r, Ds, o);
}
function dv(e, t) {
  return Ds(e, t);
}
const fv = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function ha(e) {
  return typeof e != "function" ? null : e();
}
function ga(e) {
  return typeof e != "object" || !e ? null : e;
}
const pv = V({
  compatConfig: {
    MODE: 3
  },
  name: "Align",
  props: fv,
  emits: ["align"],
  setup(e, t) {
    let {
      expose: n,
      slots: r
    } = t;
    const o = K({}), i = K(), [a, l] = Bp(() => {
      const {
        disabled: p,
        target: h,
        align: b,
        onAlign: m
      } = e;
      if (!p && h && i.value) {
        const w = i.value;
        let v;
        const y = ha(h), C = ga(h);
        o.value.element = y, o.value.point = C, o.value.align = b;
        const {
          activeElement: P
        } = document;
        return y && xs(y) ? v = Vo(w, y, b) : C && (v = jp(w, C, b)), zp(P, w), m && v && m(w, v), !0;
      }
      return !1;
    }, I(() => e.monitorBufferTime)), s = K({
      cancel: () => {
      }
    }), u = K({
      cancel: () => {
      }
    }), d = () => {
      const p = e.target, h = ha(p), b = ga(p);
      i.value !== u.value.element && (u.value.cancel(), u.value.element = i.value, u.value.cancel = qi(i.value, a)), (o.value.element !== h || !Dp(o.value.point, b) || !dv(o.value.align, e.align)) && (a(), s.value.element !== h && (s.value.cancel(), s.value.element = h, s.value.cancel = qi(h, a)));
    };
    ye(() => {
      te(() => {
        d();
      });
    }), pn(() => {
      te(() => {
        d();
      });
    }), Y(() => e.disabled, (p) => {
      p ? l() : a();
    }, {
      immediate: !0,
      flush: "post"
    });
    const c = K(null);
    return Y(() => e.monitorWindowResize, (p) => {
      p ? c.value || (c.value = Vt(window, "resize", a)) : c.value && (c.value.remove(), c.value = null);
    }, {
      flush: "post"
    }), or(() => {
      s.value.cancel(), u.value.cancel(), c.value && c.value.remove(), l();
    }), n({
      forceAlign: () => a(!0)
    }), () => {
      const p = r == null ? void 0 : r.default();
      return p ? Oe(p[0], {
        ref: i
      }, !0, !0) : null;
    };
  }
});
on("bottomLeft", "bottomRight", "topLeft", "topRight");
const po = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return f(e ? {
    name: e,
    appear: !0,
    // type: 'animation',
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    // appearActiveClass: `antdv-base-transtion`,
    // appearToClass: `${transitionName}-appear ${transitionName}-appear-active`,
    enterFromClass: `${e}-enter ${e}-enter-prepare ${e}-enter-start`,
    enterActiveClass: `${e}-enter ${e}-enter-prepare`,
    enterToClass: `${e}-enter ${e}-enter-active`,
    leaveFromClass: ` ${e}-leave`,
    leaveActiveClass: `${e}-leave ${e}-leave-active`,
    leaveToClass: `${e}-leave ${e}-leave-active`
  } : {
    css: !1
  }, t);
}, ho = (e, t, n) => n !== void 0 ? n : `${e}-${t}`, hv = V({
  compatConfig: {
    MODE: 3
  },
  name: "PopupInner",
  inheritAttrs: !1,
  props: Ho,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(e, t) {
    let {
      expose: n,
      attrs: r,
      slots: o
    } = t;
    const i = N(), a = N(), l = N(), [s, u] = lp(wu(e, "stretch")), d = () => {
      e.stretch && u(e.getRootDomNode());
    }, c = N(!1);
    let p;
    Y(() => e.visible, (x) => {
      clearTimeout(p), x ? p = setTimeout(() => {
        c.value = e.visible;
      }) : c.value = !1;
    }, {
      immediate: !0
    });
    const [h, b] = ap(c, d), m = N(), w = () => e.point ? e.point : e.getRootDomNode, v = () => {
      var x;
      (x = i.value) === null || x === void 0 || x.forceAlign();
    }, y = (x, g) => {
      var E;
      const j = e.getClassNameFromAlign(g), T = l.value;
      l.value !== j && (l.value = j), h.value === "align" && (T !== j ? Promise.resolve().then(() => {
        v();
      }) : b(() => {
        var D;
        (D = m.value) === null || D === void 0 || D.call(m);
      }), (E = e.onAlign) === null || E === void 0 || E.call(e, x, g));
    }, C = I(() => {
      const x = typeof e.animation == "object" ? e.animation : fs(e);
      return ["onAfterEnter", "onAfterLeave"].forEach((g) => {
        const E = x[g];
        x[g] = (j) => {
          b(), h.value = "stable", E == null || E(j);
        };
      }), x;
    }), P = () => new Promise((x) => {
      m.value = x;
    });
    Y([C, h], () => {
      !C.value && h.value === "motion" && b();
    }, {
      immediate: !0
    }), n({
      forceAlign: v,
      getElement: () => a.value.$el || a.value
    });
    const $ = I(() => {
      var x;
      return !(!((x = e.align) === null || x === void 0) && x.points && (h.value === "align" || h.value === "stable"));
    });
    return () => {
      var x;
      const {
        zIndex: g,
        align: E,
        prefixCls: j,
        destroyPopupOnHide: T,
        onMouseenter: D,
        onMouseleave: G,
        onTouchstart: z = () => {
        },
        onMousedown: F
      } = e, M = h.value, B = [f(f({}, s.value), {
        zIndex: g,
        opacity: M === "motion" || M === "stable" || !c.value ? null : 0,
        // pointerEvents: statusValue === 'stable' ? null : 'none',
        pointerEvents: !c.value && M !== "stable" ? "none" : null
      }), r.style];
      let X = Ce((x = o.default) === null || x === void 0 ? void 0 : x.call(o, {
        visible: e.visible
      }));
      X.length > 1 && (X = S("div", {
        class: `${j}-content`
      }, [X]));
      const _ = U(j, r.class, l.value), A = c.value || !e.visible ? po(C.value.name, C.value) : {};
      return S(at, W(W({
        ref: a
      }, A), {}, {
        onBeforeEnter: P
      }), {
        default: () => !T || e.visible ? xt(S(pv, {
          target: w(),
          key: "popup",
          ref: i,
          monitorWindowResize: !0,
          disabled: $.value,
          align: E,
          onAlign: y
        }, {
          default: () => S("div", {
            class: _,
            onMouseenter: D,
            onMouseleave: G,
            onMousedown: ai(F, ["capture"]),
            [rt ? "onTouchstartPassive" : "onTouchstart"]: ai(z, ["capture"]),
            style: B
          }, [X])
        }), [[kr, c.value]]) : null
      });
    };
  }
}), gv = V({
  compatConfig: {
    MODE: 3
  },
  name: "Popup",
  inheritAttrs: !1,
  props: rp,
  setup(e, t) {
    let {
      attrs: n,
      slots: r,
      expose: o
    } = t;
    const i = N(!1), a = N(!1), l = N(), s = N();
    return Y([() => e.visible, () => e.mobile], () => {
      i.value = e.visible, e.visible && e.mobile && (a.value = !0);
    }, {
      immediate: !0,
      flush: "post"
    }), o({
      forceAlign: () => {
        var u;
        (u = l.value) === null || u === void 0 || u.forceAlign();
      },
      getElement: () => {
        var u;
        return (u = l.value) === null || u === void 0 ? void 0 : u.getElement();
      }
    }), () => {
      const u = f(f(f({}, e), n), {
        visible: i.value
      }), d = a.value ? S(op, W(W({}, u), {}, {
        mobile: e.mobile,
        ref: l
      }), {
        default: r.default
      }) : S(hv, W(W({}, u), {}, {
        ref: l
      }), {
        default: r.default
      });
      return S("div", {
        ref: s
      }, [S(ps, u, null), d]);
    };
  }
});
function vv(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function va(e, t, n) {
  const r = e[t] || {};
  return f(f({}, r), n);
}
function mv(e, t, n, r) {
  const {
    points: o
  } = n, i = Object.keys(e);
  for (let a = 0; a < i.length; a += 1) {
    const l = i[a];
    if (vv(e[l].points, o, r))
      return `${t}-placement-${l}`;
  }
  return "";
}
const bv = {
  methods: {
    setState() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = typeof e == "function" ? e(this.$data, this.$props) : e;
      if (this.getDerivedStateFromProps) {
        const r = this.getDerivedStateFromProps(Ec(this), f(f({}, this.$data), n));
        if (r === null)
          return;
        n = f(f({}, n), r || {});
      }
      f(this.$data, n), this._.isMounted && this.$forceUpdate(), te(() => {
        t && t();
      });
    },
    __emit() {
      const e = [].slice.call(arguments, 0);
      let t = e[0];
      t = `on${t[0].toUpperCase()}${t.substring(1)}`;
      const n = this.$props[t] || this.$attrs[t];
      if (e.length && n)
        if (Array.isArray(n))
          for (let r = 0, o = n.length; r < o; r++)
            n[r](...e.slice(1));
        else
          n(...e.slice(1));
    }
  }
}, zs = Symbol("PortalContextKey"), Bs = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: !0
  };
  je(zs, {
    inTriggerContext: t.inTriggerContext,
    shouldRender: I(() => {
      const {
        sPopupVisible: n,
        popupRef: r,
        forceRender: o,
        autoDestroy: i
      } = e || {};
      let a = !1;
      return (n || r || o) && (a = !0), !n && i && (a = !1), a;
    })
  });
}, yv = () => {
  Bs({}, {
    inTriggerContext: !1
  });
  const e = se(zs, {
    shouldRender: I(() => !1),
    inTriggerContext: !1
  });
  return {
    shouldRender: I(() => e.shouldRender.value || e.inTriggerContext === !1)
  };
}, wv = V({
  compatConfig: {
    MODE: 3
  },
  name: "Portal",
  inheritAttrs: !1,
  props: {
    getContainer: R.func.isRequired,
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t, r = !0, o;
    const {
      shouldRender: i
    } = yv();
    Su(() => {
      r = !1, i.value && (o = e.getContainer());
    });
    const a = Y(i, () => {
      i.value && !o && (o = e.getContainer()), o && a();
    });
    return pn(() => {
      te(() => {
        var l;
        i.value && ((l = e.didUpdate) === null || l === void 0 || l.call(e, e));
      });
    }), ze(() => {
      o && o.parentNode && o.parentNode.removeChild(o);
    }), () => {
      var l;
      return i.value ? r ? (l = n.default) === null || l === void 0 ? void 0 : l.call(n) : o ? S(xu, {
        to: o
      }, n) : null : null;
    };
  }
});
let Br;
function Sv(e) {
  if (typeof document > "u")
    return 0;
  if (Br === void 0) {
    const t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    const n = document.createElement("div"), r = n.style;
    r.position = "absolute", r.top = "0", r.left = "0", r.pointerEvents = "none", r.visibility = "hidden", r.width = "200px", r.height = "150px", r.overflow = "hidden", n.appendChild(t), document.body.appendChild(n);
    const o = t.offsetWidth;
    n.style.overflow = "scroll";
    let i = t.offsetWidth;
    o === i && (i = n.clientWidth), document.body.removeChild(n), Br = o - i;
  }
  return Br;
}
const xv = `vc-util-locker-${Date.now()}`;
let ma = 0;
function Cv() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
function $v(e) {
  const t = I(() => !!e && !!e.value);
  ma += 1;
  const n = `${xv}_${ma}`;
  ut((r) => {
    if (t.value) {
      const o = Sv(), i = Cv();
      Un(`
html body {
  overflow-y: hidden;
  ${i ? `width: calc(100% - ${o}px);` : ""}
}`, n);
    } else
      Gn(n);
    r(() => {
      Gn(n);
    });
  }, {
    flush: "post"
  });
}
let Je = 0;
const Nn = gn(), ba = (e) => {
  if (!Nn)
    return null;
  if (e) {
    if (typeof e == "string")
      return document.querySelectorAll(e)[0];
    if (typeof e == "function")
      return e();
    if (typeof e == "object" && e instanceof window.HTMLElement)
      return e;
  }
  return document.body;
}, Ns = V({
  compatConfig: {
    MODE: 3
  },
  name: "PortalWrapper",
  inheritAttrs: !1,
  props: {
    wrapperClassName: String,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getContainer: R.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    autoLock: bt(),
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = N(), o = N(), i = N(), a = () => {
      var h, b;
      (b = (h = r.value) === null || h === void 0 ? void 0 : h.parentNode) === null || b === void 0 || b.removeChild(r.value), r.value = null;
    };
    let l = null;
    const s = function() {
      return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) || r.value && !r.value.parentNode ? (l = ba(e.getContainer), l ? (l.appendChild(r.value), !0) : !1) : !0;
    }, u = document.createElement("div"), d = () => Nn ? (r.value || (r.value = u, s(!0)), c(), r.value) : null, c = () => {
      const {
        wrapperClassName: h
      } = e;
      r.value && h && h !== r.value.className && (r.value.className = h);
    };
    pn(() => {
      c(), s();
    });
    const p = Ue();
    return $v(I(() => e.autoLock && e.visible && gn() && (r.value === document.body || r.value === u))), ye(() => {
      let h = !1;
      Y([() => e.visible, () => e.getContainer], (b, m) => {
        let [w, v] = b, [y, C] = m;
        Nn && (l = ba(e.getContainer), l === document.body && (w && !y ? Je += 1 : h && (Je -= 1))), h && (typeof v == "function" && typeof C == "function" ? v.toString() !== C.toString() : v !== C) && a(), h = !0;
      }, {
        immediate: !0,
        flush: "post"
      }), te(() => {
        s() || (i.value = J(() => {
          p.update();
        }));
      });
    }), ze(() => {
      const {
        visible: h
      } = e;
      Nn && l === document.body && (Je = h && Je ? Je - 1 : Je), a(), J.cancel(i.value);
    }), () => {
      const {
        forceRender: h,
        visible: b
      } = e;
      let m = null;
      const w = {
        getOpenCount: () => Je,
        getContainer: d
      };
      return (h || b || o.value) && (m = S(wv, {
        getContainer: d,
        ref: o,
        didUpdate: e.didUpdate
      }, {
        default: () => {
          var v;
          return (v = n.default) === null || v === void 0 ? void 0 : v.call(n, w);
        }
      })), m;
    };
  }
}), Ov = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"], Tv = V({
  compatConfig: {
    MODE: 3
  },
  name: "Trigger",
  mixins: [bv],
  inheritAttrs: !1,
  props: tp(),
  setup(e) {
    const t = I(() => {
      const {
        popupPlacement: o,
        popupAlign: i,
        builtinPlacements: a
      } = e;
      return o && a ? va(a, o, i) : i;
    }), n = N(null), r = (o) => {
      n.value = o;
    };
    return {
      vcTriggerContext: se("vcTriggerContext", {}),
      popupRef: n,
      setPopupRef: r,
      triggerRef: N(null),
      align: t,
      focusTime: null,
      clickOutsideHandler: null,
      contextmenuOutsideHandler1: null,
      contextmenuOutsideHandler2: null,
      touchOutsideHandler: null,
      attachId: null,
      delayTimer: null,
      hasPopupMouseDown: !1,
      preClickTime: null,
      preTouchTime: null,
      mouseDownTimeout: null,
      childOriginEvents: {}
    };
  },
  data() {
    const e = this.$props;
    let t;
    return this.popupVisible !== void 0 ? t = !!e.popupVisible : t = !!e.defaultPopupVisible, Ov.forEach((n) => {
      this[`fire${n}`] = (r) => {
        this.fireEvents(n, r);
      };
    }), {
      prevPopupVisible: t,
      sPopupVisible: t,
      point: null
    };
  },
  watch: {
    popupVisible(e) {
      e !== void 0 && (this.prevPopupVisible = this.sPopupVisible, this.sPopupVisible = e);
    }
  },
  created() {
    je("vcTriggerContext", {
      onPopupMouseDown: this.onPopupMouseDown,
      onPopupMouseenter: this.onPopupMouseenter,
      onPopupMouseleave: this.onPopupMouseleave
    }), Bs(this);
  },
  deactivated() {
    this.setPopupVisible(!1);
  },
  mounted() {
    this.$nextTick(() => {
      this.updatedCal();
    });
  },
  updated() {
    this.$nextTick(() => {
      this.updatedCal();
    });
  },
  beforeUnmount() {
    this.clearDelayTimer(), this.clearOutsideHandler(), clearTimeout(this.mouseDownTimeout), J.cancel(this.attachId);
  },
  methods: {
    updatedCal() {
      const e = this.$props;
      if (this.$data.sPopupVisible) {
        let n;
        !this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow()) && (n = e.getDocument(this.getRootDomNode()), this.clickOutsideHandler = Vt(n, "mousedown", this.onDocumentClick)), this.touchOutsideHandler || (n = n || e.getDocument(this.getRootDomNode()), this.touchOutsideHandler = Vt(n, "touchstart", this.onDocumentClick, rt ? {
          passive: !1
        } : !1)), !this.contextmenuOutsideHandler1 && this.isContextmenuToShow() && (n = n || e.getDocument(this.getRootDomNode()), this.contextmenuOutsideHandler1 = Vt(n, "scroll", this.onContextmenuClose)), !this.contextmenuOutsideHandler2 && this.isContextmenuToShow() && (this.contextmenuOutsideHandler2 = Vt(window, "blur", this.onContextmenuClose));
      } else
        this.clearOutsideHandler();
    },
    onMouseenter(e) {
      const {
        mouseEnterDelay: t
      } = this.$props;
      this.fireEvents("onMouseenter", e), this.delaySetPopupVisible(!0, t, t ? null : e);
    },
    onMouseMove(e) {
      this.fireEvents("onMousemove", e), this.setPoint(e);
    },
    onMouseleave(e) {
      this.fireEvents("onMouseleave", e), this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
    },
    onPopupMouseenter() {
      const {
        vcTriggerContext: e = {}
      } = this;
      e.onPopupMouseenter && e.onPopupMouseenter(), this.clearDelayTimer();
    },
    onPopupMouseleave(e) {
      var t;
      if (e && e.relatedTarget && !e.relatedTarget.setTimeout && tt((t = this.popupRef) === null || t === void 0 ? void 0 : t.getElement(), e.relatedTarget))
        return;
      this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
      const {
        vcTriggerContext: n = {}
      } = this;
      n.onPopupMouseleave && n.onPopupMouseleave(e);
    },
    onFocus(e) {
      this.fireEvents("onFocus", e), this.clearDelayTimer(), this.isFocusToShow() && (this.focusTime = Date.now(), this.delaySetPopupVisible(!0, this.$props.focusDelay));
    },
    onMousedown(e) {
      this.fireEvents("onMousedown", e), this.preClickTime = Date.now();
    },
    onTouchstart(e) {
      this.fireEvents("onTouchstart", e), this.preTouchTime = Date.now();
    },
    onBlur(e) {
      tt(e.target, e.relatedTarget || document.activeElement) || (this.fireEvents("onBlur", e), this.clearDelayTimer(), this.isBlurToHide() && this.delaySetPopupVisible(!1, this.$props.blurDelay));
    },
    onContextmenu(e) {
      e.preventDefault(), this.fireEvents("onContextmenu", e), this.setPopupVisible(!0, e);
    },
    onContextmenuClose() {
      this.isContextmenuToShow() && this.close();
    },
    onClick(e) {
      if (this.fireEvents("onClick", e), this.focusTime) {
        let n;
        if (this.preClickTime && this.preTouchTime ? n = Math.min(this.preClickTime, this.preTouchTime) : this.preClickTime ? n = this.preClickTime : this.preTouchTime && (n = this.preTouchTime), Math.abs(n - this.focusTime) < 20)
          return;
        this.focusTime = 0;
      }
      this.preClickTime = 0, this.preTouchTime = 0, this.isClickToShow() && (this.isClickToHide() || this.isBlurToHide()) && e && e.preventDefault && e.preventDefault(), e && e.domEvent && e.domEvent.preventDefault();
      const t = !this.$data.sPopupVisible;
      (this.isClickToHide() && !t || t && this.isClickToShow()) && this.setPopupVisible(!this.$data.sPopupVisible, e);
    },
    onPopupMouseDown() {
      const {
        vcTriggerContext: e = {}
      } = this;
      this.hasPopupMouseDown = !0, clearTimeout(this.mouseDownTimeout), this.mouseDownTimeout = setTimeout(() => {
        this.hasPopupMouseDown = !1;
      }, 0), e.onPopupMouseDown && e.onPopupMouseDown(...arguments);
    },
    onDocumentClick(e) {
      if (this.$props.mask && !this.$props.maskClosable)
        return;
      const t = e.target, n = this.getRootDomNode(), r = this.getPopupDomNode();
      // mousedown on the target should also close popup when action is contextMenu.
      // https://github.com/ant-design/ant-design/issues/29853
      (!tt(n, t) || this.isContextMenuOnly()) && !tt(r, t) && !this.hasPopupMouseDown && this.delaySetPopupVisible(!1, 0.1);
    },
    getPopupDomNode() {
      var e;
      return ((e = this.popupRef) === null || e === void 0 ? void 0 : e.getElement()) || null;
    },
    getRootDomNode() {
      var e, t, n, r;
      const {
        getTriggerDOMNode: o
      } = this.$props;
      if (o) {
        const i = ((t = (e = this.triggerRef) === null || e === void 0 ? void 0 : e.$el) === null || t === void 0 ? void 0 : t.nodeName) === "#comment" ? null : ke(this.triggerRef);
        return ke(o(i));
      }
      try {
        const i = ((r = (n = this.triggerRef) === null || n === void 0 ? void 0 : n.$el) === null || r === void 0 ? void 0 : r.nodeName) === "#comment" ? null : ke(this.triggerRef);
        if (i)
          return i;
      } catch {
      }
      return ke(this);
    },
    handleGetPopupClassFromAlign(e) {
      const t = [], n = this.$props, {
        popupPlacement: r,
        builtinPlacements: o,
        prefixCls: i,
        alignPoint: a,
        getPopupClassNameFromAlign: l
      } = n;
      return r && o && t.push(mv(o, i, e, a)), l && t.push(l(e)), t.join(" ");
    },
    getPopupAlign() {
      const e = this.$props, {
        popupPlacement: t,
        popupAlign: n,
        builtinPlacements: r
      } = e;
      return t && r ? va(r, t, n) : n;
    },
    getComponent() {
      const e = {};
      this.isMouseEnterToShow() && (e.onMouseenter = this.onPopupMouseenter), this.isMouseLeaveToHide() && (e.onMouseleave = this.onPopupMouseleave), e.onMousedown = this.onPopupMouseDown, e[rt ? "onTouchstartPassive" : "onTouchstart"] = this.onPopupMouseDown;
      const {
        handleGetPopupClassFromAlign: t,
        getRootDomNode: n,
        $attrs: r
      } = this, {
        prefixCls: o,
        destroyPopupOnHide: i,
        popupClassName: a,
        popupAnimation: l,
        popupTransitionName: s,
        popupStyle: u,
        mask: d,
        maskAnimation: c,
        maskTransitionName: p,
        zIndex: h,
        stretch: b,
        alignPoint: m,
        mobile: w,
        forceRender: v
      } = this.$props, {
        sPopupVisible: y,
        point: C
      } = this.$data, P = f(f({
        prefixCls: o,
        destroyPopupOnHide: i,
        visible: y,
        point: m ? C : null,
        align: this.align,
        animation: l,
        getClassNameFromAlign: t,
        stretch: b,
        getRootDomNode: n,
        mask: d,
        zIndex: h,
        transitionName: s,
        maskAnimation: c,
        maskTransitionName: p,
        class: a,
        style: u,
        onAlign: r.onPopupAlign || ds
      }, e), {
        ref: this.setPopupRef,
        mobile: w,
        forceRender: v
      });
      return S(gv, P, {
        default: this.$slots.popup || (() => Ac(this, "popup"))
      });
    },
    attachParent(e) {
      J.cancel(this.attachId);
      const {
        getPopupContainer: t,
        getDocument: n
      } = this.$props, r = this.getRootDomNode();
      let o;
      t ? (r || t.length === 0) && (o = t(r)) : o = n(this.getRootDomNode()).body, o ? o.appendChild(e) : this.attachId = J(() => {
        this.attachParent(e);
      });
    },
    getContainer() {
      const {
        $props: e
      } = this, {
        getDocument: t
      } = e, n = t(this.getRootDomNode()).createElement("div");
      return n.style.position = "absolute", n.style.top = "0", n.style.left = "0", n.style.width = "100%", this.attachParent(n), n;
    },
    setPopupVisible(e, t) {
      const {
        alignPoint: n,
        sPopupVisible: r,
        onPopupVisibleChange: o
      } = this;
      this.clearDelayTimer(), r !== e && (Tc(this, "popupVisible") || this.setState({
        sPopupVisible: e,
        prevPopupVisible: r
      }), o && o(e)), n && t && e && this.setPoint(t);
    },
    setPoint(e) {
      const {
        alignPoint: t
      } = this.$props;
      !t || !e || this.setState({
        point: {
          pageX: e.pageX,
          pageY: e.pageY
        }
      });
    },
    handlePortalUpdate() {
      this.prevPopupVisible !== this.sPopupVisible && this.afterPopupVisibleChange(this.sPopupVisible);
    },
    delaySetPopupVisible(e, t, n) {
      const r = t * 1e3;
      if (this.clearDelayTimer(), r) {
        const o = n ? {
          pageX: n.pageX,
          pageY: n.pageY
        } : null;
        this.delayTimer = setTimeout(() => {
          this.setPopupVisible(e, o), this.clearDelayTimer();
        }, r);
      } else
        this.setPopupVisible(e, n);
    },
    clearDelayTimer() {
      this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null);
    },
    clearOutsideHandler() {
      this.clickOutsideHandler && (this.clickOutsideHandler.remove(), this.clickOutsideHandler = null), this.contextmenuOutsideHandler1 && (this.contextmenuOutsideHandler1.remove(), this.contextmenuOutsideHandler1 = null), this.contextmenuOutsideHandler2 && (this.contextmenuOutsideHandler2.remove(), this.contextmenuOutsideHandler2 = null), this.touchOutsideHandler && (this.touchOutsideHandler.remove(), this.touchOutsideHandler = null);
    },
    createTwoChains(e) {
      let t = () => {
      };
      const n = fi(this);
      return this.childOriginEvents[e] && n[e] ? this[`fire${e}`] : (t = this.childOriginEvents[e] || n[e] || t, t);
    },
    isClickToShow() {
      const {
        action: e,
        showAction: t
      } = this.$props;
      return e.indexOf("click") !== -1 || t.indexOf("click") !== -1;
    },
    isContextMenuOnly() {
      const {
        action: e
      } = this.$props;
      return e === "contextmenu" || e.length === 1 && e[0] === "contextmenu";
    },
    isContextmenuToShow() {
      const {
        action: e,
        showAction: t
      } = this.$props;
      return e.indexOf("contextmenu") !== -1 || t.indexOf("contextmenu") !== -1;
    },
    isClickToHide() {
      const {
        action: e,
        hideAction: t
      } = this.$props;
      return e.indexOf("click") !== -1 || t.indexOf("click") !== -1;
    },
    isMouseEnterToShow() {
      const {
        action: e,
        showAction: t
      } = this.$props;
      return e.indexOf("hover") !== -1 || t.indexOf("mouseenter") !== -1;
    },
    isMouseLeaveToHide() {
      const {
        action: e,
        hideAction: t
      } = this.$props;
      return e.indexOf("hover") !== -1 || t.indexOf("mouseleave") !== -1;
    },
    isFocusToShow() {
      const {
        action: e,
        showAction: t
      } = this.$props;
      return e.indexOf("focus") !== -1 || t.indexOf("focus") !== -1;
    },
    isBlurToHide() {
      const {
        action: e,
        hideAction: t
      } = this.$props;
      return e.indexOf("focus") !== -1 || t.indexOf("blur") !== -1;
    },
    forcePopupAlign() {
      var e;
      this.$data.sPopupVisible && ((e = this.popupRef) === null || e === void 0 || e.forceAlign());
    },
    fireEvents(e, t) {
      this.childOriginEvents[e] && this.childOriginEvents[e](t);
      const n = this.$props[e] || this.$attrs[e];
      n && n(t);
    },
    close() {
      this.setPopupVisible(!1);
    }
  },
  render() {
    const {
      $attrs: e
    } = this, t = ct(_c(this)), {
      alignPoint: n,
      getPopupContainer: r
    } = this.$props, o = t[0];
    this.childOriginEvents = fi(o);
    const i = {
      key: "trigger"
    };
    this.isContextmenuToShow() ? i.onContextmenu = this.onContextmenu : i.onContextmenu = this.createTwoChains("onContextmenu"), this.isClickToHide() || this.isClickToShow() ? (i.onClick = this.onClick, i.onMousedown = this.onMousedown, i[rt ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart) : (i.onClick = this.createTwoChains("onClick"), i.onMousedown = this.createTwoChains("onMousedown"), i[rt ? "onTouchstartPassive" : "onTouchstart"] = this.createTwoChains("onTouchstart")), this.isMouseEnterToShow() ? (i.onMouseenter = this.onMouseenter, n && (i.onMousemove = this.onMouseMove)) : i.onMouseenter = this.createTwoChains("onMouseenter"), this.isMouseLeaveToHide() ? i.onMouseleave = this.onMouseleave : i.onMouseleave = this.createTwoChains("onMouseleave"), this.isFocusToShow() || this.isBlurToHide() ? (i.onFocus = this.onFocus, i.onBlur = this.onBlur) : (i.onFocus = this.createTwoChains("onFocus"), i.onBlur = (u) => {
      u && (!u.relatedTarget || !tt(u.target, u.relatedTarget)) && this.createTwoChains("onBlur")(u);
    });
    const a = U(o && o.props && o.props.class, e.class);
    a && (i.class = a);
    const l = Oe(o, f(f({}, i), {
      ref: "triggerRef"
    }), !0, !0), s = S(Ns, {
      key: "portal",
      getContainer: r && (() => r(this.getRootDomNode())),
      didUpdate: this.handlePortalUpdate,
      visible: this.$data.sPopupVisible
    }, {
      default: this.getComponent
    });
    return S(Te, null, [l, s]);
  }
}), Pv = {
  /**
   * ESC
   */
  ESC: 27
};
function _v(e) {
  e.target.composing = !0;
}
function ya(e) {
  e.target.composing && (e.target.composing = !1, Ev(e.target, "input"));
}
function Ev(e, t) {
  const n = document.createEvent("HTMLEvents");
  n.initEvent(t, !0, !0), e.dispatchEvent(n);
}
function Nr(e, t, n, r) {
  e.addEventListener(t, n, r);
}
const Hs = {
  created(e, t) {
    (!t.modifiers || !t.modifiers.lazy) && (Nr(e, "compositionstart", _v), Nr(e, "compositionend", ya), Nr(e, "change", ya));
  }
};
function et(e) {
  const t = typeof e == "function" ? e() : e, n = K(t);
  function r(o) {
    n.value = o;
  }
  return [n, r];
}
var wa = [], kt = [], Av = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
function Iv() {
  var e = document.createElement("style");
  return e.setAttribute("type", "text/css"), e;
}
function Mv(e, t) {
  if (t = t || {}, e === void 0)
    throw new Error(Av);
  var n = t.prepend === !0 ? "prepend" : "append", r = t.container !== void 0 ? t.container : document.querySelector("head"), o = wa.indexOf(r);
  o === -1 && (o = wa.push(r) - 1, kt[o] = {});
  var i;
  return kt[o] !== void 0 && kt[o][n] !== void 0 ? i = kt[o][n] : (i = kt[o][n] = Iv(), n === "prepend" ? r.insertBefore(i, r.childNodes[0]) : r.appendChild(i)), e.charCodeAt(0) === 65279 && (e = e.substr(1, e.length)), i.styleSheet ? i.styleSheet.cssText += e : i.textContent += e, i;
}
function Sa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Rv(e, o, n[o]);
    });
  }
  return e;
}
function Rv(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function jv(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function Dv(e, t) {
  jv(e, "[@ant-design/icons-vue] ".concat(t));
}
function xa(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function go(e, t, n) {
  return n ? nn(e.tag, Sa({
    key: t
  }, n, e.attrs), (e.children || []).map(function(r, o) {
    return go(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : nn(e.tag, Sa({
    key: t
  }, e.attrs), (e.children || []).map(function(r, o) {
    return go(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function Fs(e) {
  return Et(e)[0];
}
function Ls(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var zv = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, Ca = !1, Bv = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zv;
  te(function() {
    Ca || (typeof window < "u" && window.document && window.document.documentElement && Mv(t, {
      prepend: !0
    }), Ca = !0);
  });
}, Nv = ["icon", "primaryColor", "secondaryColor"];
function Hv(e, t) {
  if (e == null) return {};
  var n = Fv(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Fv(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Hn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Lv(e, o, n[o]);
    });
  }
  return e;
}
function Lv(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Kt = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Wv(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Kt.primaryColor = t, Kt.secondaryColor = n || Fs(t), Kt.calculated = !!n;
}
function kv() {
  return Hn({}, Kt);
}
var Ye = function(t, n) {
  var r = Hn({}, t, n.attrs), o = r.icon, i = r.primaryColor, a = r.secondaryColor, l = Hv(r, Nv), s = Kt;
  if (i && (s = {
    primaryColor: i,
    secondaryColor: a || Fs(i)
  }), Bv(), Dv(xa(o), "icon should be icon definiton, but got ".concat(o)), !xa(o))
    return null;
  var u = o;
  return u && typeof u.icon == "function" && (u = Hn({}, u, {
    icon: u.icon(s.primaryColor, s.secondaryColor)
  })), go(u.icon, "svg-".concat(u.name), Hn({}, l, {
    "data-icon": u.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
Ye.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
Ye.inheritAttrs = !1;
Ye.displayName = "IconBase";
Ye.getTwoToneColors = kv;
Ye.setTwoToneColors = Wv;
function Vv(e, t) {
  return Yv(e) || Uv(e, t) || Gv(e, t) || Xv();
}
function Xv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gv(e, t) {
  if (e) {
    if (typeof e == "string") return $a(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $a(e, t);
  }
}
function $a(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Uv(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, i = !1, a, l;
    try {
      for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0)
        ;
    } catch (s) {
      i = !0, l = s;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i) throw l;
      }
    }
    return r;
  }
}
function Yv(e) {
  if (Array.isArray(e)) return e;
}
function Ws(e) {
  var t = Ls(e), n = Vv(t, 2), r = n[0], o = n[1];
  return Ye.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function qv() {
  var e = Ye.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Kv = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function Zv(e, t) {
  return tm(e) || em(e, t) || Jv(e, t) || Qv();
}
function Qv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jv(e, t) {
  if (e) {
    if (typeof e == "string") return Oa(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Oa(e, t);
  }
}
function Oa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function em(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, i = !1, a, l;
    try {
      for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0)
        ;
    } catch (s) {
      i = !0, l = s;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i) throw l;
      }
    }
    return r;
  }
}
function tm(e) {
  if (Array.isArray(e)) return e;
}
function Ta(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      vo(e, o, n[o]);
    });
  }
  return e;
}
function vo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function nm(e, t) {
  if (e == null) return {};
  var n = rm(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function rm(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
Ws("#1890ff");
var _e = function(t, n) {
  var r, o = Ta({}, t, n.attrs), i = o.class, a = o.icon, l = o.spin, s = o.rotate, u = o.tabindex, d = o.twoToneColor, c = o.onClick, p = nm(o, Kv), h = (r = {
    anticon: !0
  }, vo(r, "anticon-".concat(a.name), !!a.name), vo(r, i, i), r), b = l === "" || l || a.name === "loading" ? "anticon-spin" : "", m = u;
  m === void 0 && c && (m = -1, p.tabindex = m);
  var w = s ? {
    msTransform: "rotate(".concat(s, "deg)"),
    transform: "rotate(".concat(s, "deg)")
  } : void 0, v = Ls(d), y = Zv(v, 2), C = y[0], P = y[1];
  return S("span", Ta({
    role: "img",
    "aria-label": a.name
  }, p, {
    onClick: c,
    class: h
  }), [S(Ye, {
    class: b,
    icon: a,
    primaryColor: C,
    secondaryColor: P,
    style: w
  }, null)]);
};
_e.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: String
};
_e.displayName = "AntdIcon";
_e.inheritAttrs = !1;
_e.getTwoToneColor = qv;
_e.setTwoToneColor = Ws;
var om = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
function Pa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      im(e, o, n[o]);
    });
  }
  return e;
}
function im(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var tr = function(t, n) {
  var r = Pa({}, t, n.attrs);
  return S(_e, Pa({}, r, {
    icon: om
  }), null);
};
tr.displayName = "LoadingOutlined";
tr.inheritAttrs = !1;
var am = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
function _a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      lm(e, o, n[o]);
    });
  }
  return e;
}
function lm(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Go = function(t, n) {
  var r = _a({}, t, n.attrs);
  return S(_e, _a({}, r, {
    icon: am
  }), null);
};
Go.displayName = "CloseOutlined";
Go.inheritAttrs = !1;
var sm = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
function Ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      um(e, o, n[o]);
    });
  }
  return e;
}
function um(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var vr = function(t, n) {
  var r = Ea({}, t, n.attrs);
  return S(_e, Ea({}, r, {
    icon: sm
  }), null);
};
vr.displayName = "CloseCircleFilled";
vr.inheritAttrs = !1;
var cm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" };
function Aa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      dm(e, o, n[o]);
    });
  }
  return e;
}
function dm(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Uo = function(t, n) {
  var r = Aa({}, t, n.attrs);
  return S(_e, Aa({}, r, {
    icon: cm
  }), null);
};
Uo.displayName = "SearchOutlined";
Uo.inheritAttrs = !1;
function Yo(e) {
  const t = Symbol("contextKey");
  return {
    useProvide: (o, i) => {
      const a = it({});
      return je(t, a), ut(() => {
        f(a, o, i || {});
      }), a;
    },
    useInject: () => se(t, e) || {}
  };
}
const mo = Symbol("ContextProps"), bo = Symbol("InternalContextProps"), yo = {
  id: I(() => {
  }),
  onFieldBlur: () => {
  },
  onFieldChange: () => {
  },
  clearValidate: () => {
  }
}, wo = {
  addFormItemField: () => {
  },
  removeFormItemField: () => {
  }
}, ks = () => {
  const e = se(bo, wo), t = Symbol("FormItemFieldKey"), n = Ue();
  return e.addFormItemField(t, n.type), ze(() => {
    e.removeFormItemField(t);
  }), je(bo, wo), je(mo, yo), se(mo, yo);
};
V({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItemRest",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return je(bo, wo), je(mo, yo), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
});
const Mt = Yo({}), Ia = V({
  name: "NoFormStatus",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Mt.useProvide({}), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
});
function Zt(e, t, n) {
  return U({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  });
}
const qo = (e, t) => t || e, fm = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
}, pm = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${t}-space-item`]: {
        "&:empty": {
          display: "none"
        }
      }
    }
  };
}, hm = dt("Space", (e) => [pm(e), fm(e)]);
var gm = "[object Map]", vm = "[object Set]", mm = Object.prototype, bm = mm.hasOwnProperty;
function Vs(e) {
  if (e == null)
    return !0;
  if (js(e) && (dn(e) || typeof e == "string" || typeof e.splice == "function" || er(e) || Xo(e) || _s(e)))
    return !e.length;
  var t = He(e);
  if (t == gm || t == vm)
    return !e.size;
  if (Ms(e))
    return !Rs(e).length;
  for (var n in e)
    if (bm.call(e, n))
      return !1;
  return !0;
}
const ym = () => ({
  compactSize: String,
  compactDirection: R.oneOf(on("horizontal", "vertical")).def("horizontal"),
  isFirstItem: bt(),
  isLastItem: bt()
}), mr = Yo(null), Xs = (e, t) => {
  const n = mr.useInject(), r = I(() => {
    if (!n || Vs(n)) return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: a
    } = n, l = o === "vertical" ? "-vertical-" : "-";
    return U({
      [`${e.value}-compact${l}item`]: !0,
      [`${e.value}-compact${l}first-item`]: i,
      [`${e.value}-compact${l}last-item`]: a,
      [`${e.value}-compact${l}item-rtl`]: t.value === "rtl"
    });
  });
  return {
    compactSize: I(() => n == null ? void 0 : n.compactSize),
    compactDirection: I(() => n == null ? void 0 : n.compactDirection),
    compactItemClassnames: r
  };
}, So = V({
  name: "NoCompactStyle",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return mr.useProvide(null), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
}), wm = () => ({
  prefixCls: String,
  size: {
    type: String
  },
  direction: R.oneOf(on("horizontal", "vertical")).def("horizontal"),
  align: R.oneOf(on("start", "end", "center", "baseline")),
  block: {
    type: Boolean,
    default: void 0
  }
}), Sm = V({
  name: "CompactItem",
  props: ym(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return mr.useProvide(e), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
});
V({
  name: "ASpaceCompact",
  inheritAttrs: !1,
  props: wm(),
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const {
      prefixCls: o,
      direction: i
    } = pe("space-compact", e), a = mr.useInject(), [l, s] = hm(o), u = I(() => U(o.value, s.value, {
      [`${o.value}-rtl`]: i.value === "rtl",
      [`${o.value}-block`]: e.block,
      [`${o.value}-vertical`]: e.direction === "vertical"
    }));
    return () => {
      var d;
      const c = Ce(((d = r.default) === null || d === void 0 ? void 0 : d.call(r)) || []);
      return c.length === 0 ? null : l(S("div", W(W({}, n), {}, {
        class: [u.value, n.class]
      }), [c.map((p, h) => {
        var b;
        const m = p && p.key || `${o.value}-item-${h}`, w = !a || Vs(a);
        return S(Sm, {
          key: m,
          compactSize: (b = e.size) !== null && b !== void 0 ? b : "middle",
          compactDirection: e.direction,
          isFirstItem: h === 0 && (w || (a == null ? void 0 : a.isFirstItem)),
          isLastItem: h === c.length - 1 && (w || (a == null ? void 0 : a.isLastItem))
        }, {
          default: () => [p]
        });
      })]));
    };
  }
});
const xm = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Cm = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), $m = function(e, t, n, r) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: f(f({}, xm(r)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: f(f({}, Cm(r)), {
      animationPlayState: "paused"
    }),
    [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${i}${e}-leave${e}-leave-active`]: {
      animationName: n,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, Om = new we("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Tm = new we("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Ma = new we("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Ra = new we("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), Pm = new we("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), _m = new we("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), Em = new we("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), Am = new we("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), Im = new we("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), Mm = new we("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), Rm = new we("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), jm = new we("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), Dm = {
  zoom: {
    inKeyframes: Om,
    outKeyframes: Tm
  },
  "zoom-big": {
    inKeyframes: Ma,
    outKeyframes: Ra
  },
  "zoom-big-fast": {
    inKeyframes: Ma,
    outKeyframes: Ra
  },
  "zoom-left": {
    inKeyframes: Em,
    outKeyframes: Am
  },
  "zoom-right": {
    inKeyframes: Im,
    outKeyframes: Mm
  },
  "zoom-up": {
    inKeyframes: Pm,
    outKeyframes: _m
  },
  "zoom-down": {
    inKeyframes: Rm,
    outKeyframes: jm
  }
}, zm = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: i
  } = Dm[t];
  return [$m(r, o, i, e.motionDurationFast), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
};
function Bm(e, t, n) {
  const {
    focusElCls: r,
    focus: o,
    borderElCls: i
  } = n, a = i ? "> *" : "", l = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((s) => `&:${s} ${a}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: -e.lineWidth
    },
    "&-item": f(f({
      [l]: {
        zIndex: 2
      }
    }, r ? {
      [`&${r}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${a}`]: {
        zIndex: 0
      }
    })
  };
}
function Nm(e, t, n) {
  const {
    borderElCls: r
  } = n, o = r ? `> ${r}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function Gs(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: f(f({}, Bm(e, r, t)), Nm(n, r, t))
  };
}
var Hm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const he = {
  adjustX: 1,
  adjustY: 1
}, ge = [0, 0], Us = {
  left: {
    points: ["cr", "cl"],
    overflow: he,
    offset: [-4, 0],
    targetOffset: ge
  },
  right: {
    points: ["cl", "cr"],
    overflow: he,
    offset: [4, 0],
    targetOffset: ge
  },
  top: {
    points: ["bc", "tc"],
    overflow: he,
    offset: [0, -4],
    targetOffset: ge
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: he,
    offset: [0, 4],
    targetOffset: ge
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: he,
    offset: [0, -4],
    targetOffset: ge
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: he,
    offset: [-4, 0],
    targetOffset: ge
  },
  topRight: {
    points: ["br", "tr"],
    overflow: he,
    offset: [0, -4],
    targetOffset: ge
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: he,
    offset: [4, 0],
    targetOffset: ge
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: he,
    offset: [0, 4],
    targetOffset: ge
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: he,
    offset: [4, 0],
    targetOffset: ge
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: he,
    offset: [0, 4],
    targetOffset: ge
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: he,
    offset: [-4, 0],
    targetOffset: ge
  }
}, Fm = {
  prefixCls: String,
  id: String,
  overlayInnerStyle: R.any
}, Lm = V({
  compatConfig: {
    MODE: 3
  },
  name: "Content",
  props: Fm,
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      var r;
      return S("div", {
        class: `${e.prefixCls}-inner`,
        id: e.id,
        role: "tooltip",
        style: e.overlayInnerStyle
      }, [(r = n.overlay) === null || r === void 0 ? void 0 : r.call(n)]);
    };
  }
});
var Wm = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function ja() {
}
const km = V({
  compatConfig: {
    MODE: 3
  },
  name: "Tooltip",
  inheritAttrs: !1,
  props: {
    trigger: R.any.def(["hover"]),
    defaultVisible: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    placement: R.string.def("right"),
    transitionName: String,
    animation: R.any,
    afterVisibleChange: R.func.def(() => {
    }),
    overlayStyle: {
      type: Object,
      default: void 0
    },
    overlayClassName: String,
    prefixCls: R.string.def("rc-tooltip"),
    mouseEnterDelay: R.number.def(0.1),
    mouseLeaveDelay: R.number.def(0.1),
    getPopupContainer: Function,
    destroyTooltipOnHide: {
      type: Boolean,
      default: !1
    },
    align: R.object.def(() => ({})),
    arrowContent: R.any.def(null),
    tipId: String,
    builtinPlacements: R.object,
    overlayInnerStyle: {
      type: Object,
      default: void 0
    },
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    onVisibleChange: Function,
    onPopupAlign: Function
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: r,
      expose: o
    } = t;
    const i = N(), a = () => {
      const {
        prefixCls: d,
        tipId: c,
        overlayInnerStyle: p
      } = e;
      return [S("div", {
        class: `${d}-arrow`,
        key: "arrow"
      }, [Mn(n, e, "arrowContent")]), S(Lm, {
        key: "content",
        prefixCls: d,
        id: c,
        overlayInnerStyle: p
      }, {
        overlay: n.overlay
      })];
    };
    o({
      getPopupDomNode: () => i.value.getPopupDomNode(),
      triggerDOM: i,
      forcePopupAlign: () => {
        var d;
        return (d = i.value) === null || d === void 0 ? void 0 : d.forcePopupAlign();
      }
    });
    const s = N(!1), u = N(!1);
    return ut(() => {
      const {
        destroyTooltipOnHide: d
      } = e;
      if (typeof d == "boolean")
        s.value = d;
      else if (d && typeof d == "object") {
        const {
          keepParent: c
        } = d;
        s.value = c === !0, u.value = c === !1;
      }
    }), () => {
      const {
        overlayClassName: d,
        trigger: c,
        mouseEnterDelay: p,
        mouseLeaveDelay: h,
        overlayStyle: b,
        prefixCls: m,
        afterVisibleChange: w,
        transitionName: v,
        animation: y,
        placement: C,
        align: P,
        destroyTooltipOnHide: $,
        defaultVisible: x
      } = e, g = Wm(e, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible"]), E = f({}, g);
      e.visible !== void 0 && (E.popupVisible = e.visible);
      const j = f(f(f({
        popupClassName: d,
        prefixCls: m,
        action: c,
        builtinPlacements: Us,
        popupPlacement: C,
        popupAlign: P,
        afterPopupVisibleChange: w,
        popupTransitionName: v,
        popupAnimation: y,
        defaultPopupVisible: x,
        destroyPopupOnHide: s.value,
        autoDestroy: u.value,
        mouseLeaveDelay: h,
        popupStyle: b,
        mouseEnterDelay: p
      }, E), r), {
        onPopupVisibleChange: e.onVisibleChange || ja,
        onPopupAlign: e.onPopupAlign || ja,
        ref: i,
        popup: a()
      });
      return S(Tv, j, {
        default: n.default
      });
    };
  }
}), Vm = () => ({
  trigger: [String, Array],
  open: {
    type: Boolean,
    default: void 0
  },
  /** @deprecated Please use `open` instead. */
  visible: {
    type: Boolean,
    default: void 0
  },
  placement: String,
  color: String,
  transitionName: String,
  overlayStyle: oe(),
  overlayInnerStyle: oe(),
  overlayClassName: String,
  openClassName: String,
  prefixCls: String,
  mouseEnterDelay: Number,
  mouseLeaveDelay: Number,
  getPopupContainer: Function,
  arrowPointAtCenter: {
    type: Boolean,
    default: void 0
  },
  autoAdjustOverflow: {
    type: [Boolean, Object],
    default: void 0
  },
  destroyTooltipOnHide: {
    type: Boolean,
    default: void 0
  },
  align: oe(),
  builtinPlacements: oe(),
  children: Array,
  /** @deprecated Please use `onOpenChange` instead. */
  onVisibleChange: Function,
  /** @deprecated Please use `onUpdate:open` instead. */
  "onUpdate:visible": Function,
  onOpenChange: Function,
  "onUpdate:open": Function
}), Xm = {
  adjustX: 1,
  adjustY: 1
}, Da = {
  adjustX: 0,
  adjustY: 0
}, Gm = [0, 0];
function za(e) {
  return typeof e == "boolean" ? e ? Xm : Da : f(f({}, Da), e);
}
function Um(e) {
  const {
    arrowWidth: t = 4,
    horizontalArrowShift: n = 16,
    verticalArrowShift: r = 8,
    autoAdjustOverflow: o,
    arrowPointAtCenter: i
  } = e, a = {
    left: {
      points: ["cr", "cl"],
      offset: [-4, 0]
    },
    right: {
      points: ["cl", "cr"],
      offset: [4, 0]
    },
    top: {
      points: ["bc", "tc"],
      offset: [0, -4]
    },
    bottom: {
      points: ["tc", "bc"],
      offset: [0, 4]
    },
    topLeft: {
      points: ["bl", "tc"],
      offset: [-(n + t), -4]
    },
    leftTop: {
      points: ["tr", "cl"],
      offset: [-4, -(r + t)]
    },
    topRight: {
      points: ["br", "tc"],
      offset: [n + t, -4]
    },
    rightTop: {
      points: ["tl", "cr"],
      offset: [4, -(r + t)]
    },
    bottomRight: {
      points: ["tr", "bc"],
      offset: [n + t, 4]
    },
    rightBottom: {
      points: ["bl", "cr"],
      offset: [4, r + t]
    },
    bottomLeft: {
      points: ["tl", "bc"],
      offset: [-(n + t), 4]
    },
    leftBottom: {
      points: ["br", "cl"],
      offset: [-4, r + t]
    }
  };
  return Object.keys(a).forEach((l) => {
    a[l] = i ? f(f({}, a[l]), {
      overflow: za(o),
      targetOffset: Gm
    }) : f(f({}, Us[l]), {
      overflow: za(o)
    }), a[l].ignoreShake = !0;
  }), a;
}
function Ym() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  for (let t = 0, n = e.length; t < n; t++)
    if (e[t] !== void 0)
      return e[t];
}
const qm = qn.map((e) => `${e}-inverse`);
function Km(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [...qm, ...qn].includes(e) : qn.includes(e);
}
function Zm(e, t) {
  const n = Km(t), r = U({
    [`${e}-${t}`]: t && n
  }), o = {}, i = {};
  return t && !n && (o.background = t, i["--antd-arrow-background-color"] = t), {
    className: r,
    overlayStyle: o,
    arrowStyle: i
  };
}
function An(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return e.map((n) => `${t}${n}`).join(",");
}
const Ys = 8;
function Qm(e) {
  const t = Ys, {
    sizePopupArrow: n,
    contentRadius: r,
    borderRadiusOuter: o
  } = e, i = n / 2 - Math.ceil(o * (Math.sqrt(2) - 1)), a = (r > 12 ? r + 2 : 12) - i, l = t - i;
  return {
    dropdownArrowOffset: a,
    dropdownArrowOffsetVertical: l
  };
}
function Jm(e, t) {
  const {
    componentCls: n,
    sizePopupArrow: r,
    marginXXS: o,
    borderRadiusXS: i,
    borderRadiusOuter: a,
    boxShadowPopoverArrow: l
  } = e, {
    colorBg: s,
    showArrowCls: u,
    contentRadius: d = e.borderRadiusLG
  } = t, {
    dropdownArrowOffsetVertical: c,
    dropdownArrowOffset: p
  } = Qm({
    sizePopupArrow: r,
    contentRadius: d,
    borderRadiusOuter: a
  }), h = r / 2 + o;
  return {
    [n]: {
      // ============================ Basic ============================
      [`${n}-arrow`]: [f(f({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, pf(r, i, a, s, l)), {
        "&:before": {
          background: s
        }
      })],
      // ========================== Placement ==========================
      // Here handle the arrow position and rotate stuff
      // >>>>> Top
      [[`&-placement-top ${n}-arrow`, `&-placement-topLeft ${n}-arrow`, `&-placement-topRight ${n}-arrow`].join(",")]: {
        bottom: 0,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      [`&-placement-topLeft ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: p
        }
      },
      [`&-placement-topRight ${n}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: p
        }
      },
      // >>>>> Bottom
      [[`&-placement-bottom ${n}-arrow`, `&-placement-bottomLeft ${n}-arrow`, `&-placement-bottomRight ${n}-arrow`].join(",")]: {
        top: 0,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      [`&-placement-bottomLeft ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: p
        }
      },
      [`&-placement-bottomRight ${n}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: p
        }
      },
      // >>>>> Left
      [[`&-placement-left ${n}-arrow`, `&-placement-leftTop ${n}-arrow`, `&-placement-leftBottom ${n}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: 0
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop ${n}-arrow`]: {
        top: c
      },
      [`&-placement-leftBottom ${n}-arrow`]: {
        bottom: c
      },
      // >>>>> Right
      [[`&-placement-right ${n}-arrow`, `&-placement-rightTop ${n}-arrow`, `&-placement-rightBottom ${n}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: 0
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop ${n}-arrow`]: {
        top: c
      },
      [`&-placement-rightBottom ${n}-arrow`]: {
        bottom: c
      },
      // =========================== Offset ============================
      // Offset the popover to account for the dropdown arrow
      // >>>>> Top
      [An(["&-placement-topLeft", "&-placement-top", "&-placement-topRight"], u)]: {
        paddingBottom: h
      },
      // >>>>> Bottom
      [An(["&-placement-bottomLeft", "&-placement-bottom", "&-placement-bottomRight"], u)]: {
        paddingTop: h
      },
      // >>>>> Left
      [An(["&-placement-leftTop", "&-placement-left", "&-placement-leftBottom"], u)]: {
        paddingRight: {
          _skip_check_: !0,
          value: h
        }
      },
      // >>>>> Right
      [An(["&-placement-rightTop", "&-placement-right", "&-placement-rightBottom"], u)]: {
        paddingLeft: {
          _skip_check_: !0,
          value: h
        }
      }
    }
  };
}
const e0 = (e) => {
  const {
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: n,
    tooltipColor: r,
    tooltipBg: o,
    tooltipBorderRadius: i,
    zIndexPopup: a,
    controlHeight: l,
    boxShadowSecondary: s,
    paddingSM: u,
    paddingXS: d,
    tooltipRadiusOuter: c
  } = e;
  return [
    {
      [t]: f(f(f(f({}, zo(e)), {
        position: "absolute",
        zIndex: a,
        display: "block",
        "&": [{
          width: "max-content"
        }, {
          width: "intrinsic"
        }],
        maxWidth: n,
        visibility: "visible",
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": o,
        // Wrapper for the tooltip content
        [`${t}-inner`]: {
          minWidth: l,
          minHeight: l,
          padding: `${u / 2}px ${d}px`,
          color: r,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: o,
          borderRadius: i,
          boxShadow: s
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${t}-inner`]: {
            borderRadius: Math.min(i, Ys)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), hf(e, (p, h) => {
        let {
          darkColor: b
        } = h;
        return {
          [`&${t}-${p}`]: {
            [`${t}-inner`]: {
              backgroundColor: b
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": b
            }
          }
        };
      })), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    Jm(be(e, {
      borderRadiusOuter: c
    }), {
      colorBg: "var(--antd-arrow-background-color)",
      showArrowCls: "",
      contentRadius: i
    }),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none"
      }
    }
  ];
}, t0 = (e, t) => dt("Tooltip", (r) => {
  if ((t == null ? void 0 : t.value) === !1)
    return [];
  const {
    borderRadius: o,
    colorTextLightSolid: i,
    colorBgDefault: a,
    borderRadiusOuter: l
  } = r, s = be(r, {
    // default variables
    tooltipMaxWidth: 250,
    tooltipColor: i,
    tooltipBorderRadius: o,
    tooltipBg: a,
    tooltipRadiusOuter: l > 4 ? 4 : l
  });
  return [e0(s), zm(r, "zoom-big-fast")];
}, (r) => {
  let {
    zIndexPopupBase: o,
    colorBgSpotlight: i
  } = r;
  return {
    zIndexPopup: o + 70,
    colorBgDefault: i
  };
})(e), n0 = (e, t) => {
  const n = {}, r = f({}, e);
  return t.forEach((o) => {
    e && o in e && (n[o] = e[o], delete r[o]);
  }), {
    picked: n,
    omitted: r
  };
}, r0 = () => f(f({}, Vm()), {
  title: R.any
}), o0 = V({
  compatConfig: {
    MODE: 3
  },
  name: "ATooltip",
  inheritAttrs: !1,
  props: hn(r0(), {
    trigger: "hover",
    align: {},
    placement: "top",
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: !1,
    autoAdjustOverflow: !0
  }),
  slots: Object,
  // emits: ['update:visible', 'visibleChange'],
  setup(e, t) {
    let {
      slots: n,
      emit: r,
      attrs: o,
      expose: i
    } = t;
    process.env.NODE_ENV !== "production" && [["visible", "open"], ["onVisibleChange", "onOpenChange"]].forEach((T) => {
      let [D, G] = T;
      vn(e[D] === void 0, "Tooltip", `\`${D}\` is deprecated, please use \`${G}\` instead.`);
    });
    const {
      prefixCls: a,
      getPopupContainer: l,
      direction: s,
      rootPrefixCls: u
    } = pe("tooltip", e), d = I(() => {
      var T;
      return (T = e.open) !== null && T !== void 0 ? T : e.visible;
    }), c = K(Ym([e.open, e.visible])), p = K();
    let h;
    Y(d, (T) => {
      J.cancel(h), h = J(() => {
        c.value = !!T;
      });
    });
    const b = () => {
      var T;
      const D = (T = e.title) !== null && T !== void 0 ? T : n.title;
      return !D && D !== 0;
    }, m = (T) => {
      const D = b();
      d.value === void 0 && (c.value = D ? !1 : T), D || (r("update:visible", T), r("visibleChange", T), r("update:open", T), r("openChange", T));
    };
    i({
      getPopupDomNode: () => p.value.getPopupDomNode(),
      open: c,
      forcePopupAlign: () => {
        var T;
        return (T = p.value) === null || T === void 0 ? void 0 : T.forcePopupAlign();
      }
    });
    const v = I(() => {
      const {
        builtinPlacements: T,
        arrowPointAtCenter: D,
        autoAdjustOverflow: G
      } = e;
      return T || Um({
        arrowPointAtCenter: D,
        autoAdjustOverflow: G
      });
    }), y = (T) => T || T === "", C = (T) => {
      const D = T.type;
      if (typeof D == "object" && T.props && ((D.__ANT_BUTTON === !0 || D === "button") && y(T.props.disabled) || D.__ANT_SWITCH === !0 && (y(T.props.disabled) || y(T.props.loading)) || D.__ANT_RADIO === !0 && y(T.props.disabled))) {
        const {
          picked: G,
          omitted: z
        } = n0(Ic(T), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), F = f(f({
          display: "inline-block"
        }, G), {
          cursor: "not-allowed",
          lineHeight: 1,
          width: T.props && T.props.block ? "100%" : void 0
        }), M = f(f({}, z), {
          pointerEvents: "none"
        }), B = Oe(T, {
          style: M
        }, !0);
        return S("span", {
          style: F,
          class: `${a.value}-disabled-compatible-wrapper`
        }, [B]);
      }
      return T;
    }, P = () => {
      var T, D;
      return (T = e.title) !== null && T !== void 0 ? T : (D = n.title) === null || D === void 0 ? void 0 : D.call(n);
    }, $ = (T, D) => {
      const G = v.value, z = Object.keys(G).find((F) => {
        var M, B;
        return G[F].points[0] === ((M = D.points) === null || M === void 0 ? void 0 : M[0]) && G[F].points[1] === ((B = D.points) === null || B === void 0 ? void 0 : B[1]);
      });
      if (z) {
        const F = T.getBoundingClientRect(), M = {
          top: "50%",
          left: "50%"
        };
        z.indexOf("top") >= 0 || z.indexOf("Bottom") >= 0 ? M.top = `${F.height - D.offset[1]}px` : (z.indexOf("Top") >= 0 || z.indexOf("bottom") >= 0) && (M.top = `${-D.offset[1]}px`), z.indexOf("left") >= 0 || z.indexOf("Right") >= 0 ? M.left = `${F.width - D.offset[0]}px` : (z.indexOf("right") >= 0 || z.indexOf("Left") >= 0) && (M.left = `${-D.offset[0]}px`), T.style.transformOrigin = `${M.left} ${M.top}`;
      }
    }, x = I(() => Zm(a.value, e.color)), g = I(() => o["data-popover-inject"]), [E, j] = t0(a, I(() => !g.value));
    return () => {
      var T, D;
      const {
        openClassName: G,
        overlayClassName: z,
        overlayStyle: F,
        overlayInnerStyle: M
      } = e;
      let B = (D = ct((T = n.default) === null || T === void 0 ? void 0 : T.call(n))) !== null && D !== void 0 ? D : null;
      B = B.length === 1 ? B[0] : B;
      let X = c.value;
      if (d.value === void 0 && b() && (X = !1), !B)
        return null;
      const _ = C(Sl(B) && !Mc(B) ? B : S("span", null, [B])), O = U({
        [G || `${a.value}-open`]: !0,
        [_.props && _.props.class]: _.props && _.props.class
      }), A = U(z, {
        [`${a.value}-rtl`]: s.value === "rtl"
      }, x.value.className, j.value), H = f(f({}, x.value.overlayStyle), M), k = x.value.arrowStyle, Z = f(f(f({}, o), e), {
        prefixCls: a.value,
        getPopupContainer: l == null ? void 0 : l.value,
        builtinPlacements: v.value,
        visible: X,
        ref: p,
        overlayClassName: A,
        overlayStyle: f(f({}, k), F),
        overlayInnerStyle: H,
        onVisibleChange: m,
        onPopupAlign: $,
        transitionName: ho(u.value, "zoom-big-fast", e.transitionName)
      });
      return E(S(km, Z, {
        default: () => [c.value ? Oe(_, {
          class: O
        }) : _],
        arrowContent: () => S("span", {
          class: `${a.value}-arrow-content`
        }, null),
        overlay: P
      }));
    };
  }
}), i0 = ar(o0), Ba = (e) => !isNaN(parseFloat(e)) && isFinite(e), a0 = (e) => {
  const {
    componentCls: t,
    colorPrimary: n
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${n})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        }
      }
    }
  };
}, l0 = dt("Wave", (e) => [a0(e)]);
function s0(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function Hr(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && s0(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function u0(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r
  } = getComputedStyle(e);
  return Hr(t) ? t : Hr(n) ? n : Hr(r) ? r : null;
}
function Fr(e) {
  return Number.isNaN(e) ? 0 : e;
}
const c0 = V({
  props: {
    target: oe(),
    className: String
  },
  setup(e) {
    const t = N(null), [n, r] = et(null), [o, i] = et([]), [a, l] = et(0), [s, u] = et(0), [d, c] = et(0), [p, h] = et(0), [b, m] = et(!1);
    function w() {
      const {
        target: g
      } = e, E = getComputedStyle(g);
      r(u0(g));
      const j = E.position === "static", {
        borderLeftWidth: T,
        borderTopWidth: D
      } = E;
      l(j ? g.offsetLeft : Fr(-parseFloat(T))), u(j ? g.offsetTop : Fr(-parseFloat(D))), c(g.offsetWidth), h(g.offsetHeight);
      const {
        borderTopLeftRadius: G,
        borderTopRightRadius: z,
        borderBottomLeftRadius: F,
        borderBottomRightRadius: M
      } = E;
      i([G, z, M, F].map((B) => Fr(parseFloat(B))));
    }
    let v, y, C;
    const P = () => {
      clearTimeout(C), J.cancel(y), v == null || v.disconnect();
    }, $ = () => {
      var g;
      const E = (g = t.value) === null || g === void 0 ? void 0 : g.parentElement;
      E && (ll(null, E), E.parentElement && E.parentElement.removeChild(E));
    };
    ye(() => {
      P(), C = setTimeout(() => {
        $();
      }, 5e3);
      const {
        target: g
      } = e;
      g && (y = J(() => {
        w(), m(!0);
      }), typeof ResizeObserver < "u" && (v = new ResizeObserver(w), v.observe(g)));
    }), ze(() => {
      P();
    });
    const x = (g) => {
      g.propertyName === "opacity" && $();
    };
    return () => {
      if (!b.value)
        return null;
      const g = {
        left: `${a.value}px`,
        top: `${s.value}px`,
        width: `${d.value}px`,
        height: `${p.value}px`,
        borderRadius: o.value.map((E) => `${E}px`).join(" ")
      };
      return n && (g["--wave-color"] = n.value), S(at, {
        appear: !0,
        name: "wave-motion",
        appearFromClass: "wave-motion-appear",
        appearActiveClass: "wave-motion-appear",
        appearToClass: "wave-motion-appear wave-motion-appear-active"
      }, {
        default: () => [S("div", {
          ref: t,
          class: e.className,
          style: g,
          onTransitionend: x
        }, null)]
      });
    };
  }
});
function d0(e, t) {
  const n = document.createElement("div");
  n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", e == null || e.insertBefore(n, e == null ? void 0 : e.firstChild), ll(S(c0, {
    target: e,
    className: t
  }, null), n);
}
function f0(e, t) {
  function n() {
    const r = ke(e);
    d0(r, t.value);
  }
  return n;
}
const p0 = V({
  compatConfig: {
    MODE: 3
  },
  name: "Wave",
  props: {
    disabled: Boolean
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = Ue(), {
      prefixCls: o
    } = pe("wave", e), [, i] = l0(o), a = f0(r, I(() => U(o.value, i.value)));
    let l;
    const s = () => {
      ke(r).removeEventListener("click", l, !0);
    };
    return ye(() => {
      Y(() => e.disabled, () => {
        s(), te(() => {
          const u = ke(r);
          if (!u || u.nodeType !== 1 || e.disabled)
            return;
          const d = (c) => {
            c.target.tagName === "INPUT" || !xs(c.target) || // No need wave
            !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || a();
          };
          u.addEventListener("click", d, !0);
        });
      }, {
        immediate: !0,
        flush: "post"
      });
    }), ze(() => {
      s();
    }), () => {
      var u;
      return (u = n.default) === null || u === void 0 ? void 0 : u.call(n)[0];
    };
  }
}), h0 = () => ({
  prefixCls: String,
  type: String,
  htmlType: {
    type: String,
    default: "button"
  },
  shape: {
    type: String
  },
  size: {
    type: String
  },
  loading: {
    type: [Boolean, Object],
    default: () => !1
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  ghost: {
    type: Boolean,
    default: void 0
  },
  block: {
    type: Boolean,
    default: void 0
  },
  danger: {
    type: Boolean,
    default: void 0
  },
  icon: R.any,
  href: String,
  target: String,
  title: String,
  onClick: Vn(),
  onMousedown: Vn()
}), Na = (e) => {
  e && (e.style.width = "0px", e.style.opacity = "0", e.style.transform = "scale(0)");
}, Ha = (e) => {
  te(() => {
    e && (e.style.width = `${e.scrollWidth}px`, e.style.opacity = "1", e.style.transform = "scale(1)");
  });
}, Fa = (e) => {
  e && e.style && (e.style.width = null, e.style.opacity = null, e.style.transform = null);
}, g0 = V({
  compatConfig: {
    MODE: 3
  },
  name: "LoadingIcon",
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean
  },
  setup(e) {
    return () => {
      const {
        existIcon: t,
        prefixCls: n,
        loading: r
      } = e;
      if (t)
        return S("span", {
          class: `${n}-loading-icon`
        }, [S(tr, null, null)]);
      const o = !!r;
      return S(at, {
        name: `${n}-loading-icon-motion`,
        onBeforeEnter: Na,
        onEnter: Ha,
        onAfterEnter: Fa,
        onBeforeLeave: Ha,
        onLeave: (i) => {
          setTimeout(() => {
            Na(i);
          });
        },
        onAfterLeave: Fa
      }, {
        default: () => [o ? S("span", {
          class: `${n}-loading-icon`
        }, [S(tr, null, null)]) : null]
      });
    };
  }
}), La = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), v0 = (e) => {
  const {
    componentCls: t,
    fontSize: n,
    lineWidth: r,
    colorPrimaryHover: o,
    colorErrorHover: i
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: -r,
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover,\n          &:focus,\n          &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: n
        }
      },
      // Border Color
      La(`${t}-primary`, o),
      La(`${t}-danger`, i)
    ]
  };
};
function m0(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: -e.lineWidth
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function b0(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function y0(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: f(f({}, m0(e, t)), b0(e.componentCls, t))
  };
}
const w0 = (e) => {
  const {
    componentCls: t,
    iconCls: n
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: 400,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      backgroundColor: "transparent",
      border: `${e.lineWidth}px ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      lineHeight: e.lineHeight,
      color: e.colorText,
      "> span": {
        display: "inline-block"
      },
      // Leave a space between icon and text.
      [`> ${n} + span, > span + ${n}`]: {
        marginInlineStart: e.marginXS
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": f({}, yf(e)),
      // make `btn-icon-only` not too narrow
      [`&-icon-only${t}-compact-item`]: {
        flex: "none"
      },
      // Special styles for Primary Button
      [`&-compact-item${t}-primary`]: {
        [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: -e.lineWidth,
            insetInlineStart: -e.lineWidth,
            display: "inline-block",
            width: e.lineWidth,
            height: `calc(100% + ${e.lineWidth * 2}px)`,
            backgroundColor: e.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: -e.lineWidth,
              insetInlineStart: -e.lineWidth,
              display: "inline-block",
              width: `calc(100% + ${e.lineWidth * 2}px)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, Fe = (e, t) => ({
  "&:not(:disabled)": {
    "&:hover": e,
    "&:active": t
  }
}), S0 = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), x0 = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), xo = (e) => ({
  cursor: "not-allowed",
  borderColor: e.colorBorder,
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  boxShadow: "none"
}), nr = (e, t, n, r, o, i, a) => ({
  [`&${e}-background-ghost`]: f(f({
    color: t || void 0,
    backgroundColor: "transparent",
    borderColor: n || void 0,
    boxShadow: "none"
  }, Fe(f({
    backgroundColor: "transparent"
  }, i), f({
    backgroundColor: "transparent"
  }, a))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: r || void 0,
      borderColor: o || void 0
    }
  })
}), Ko = (e) => ({
  "&:disabled": f({}, xo(e))
}), qs = (e) => f({}, Ko(e)), rr = (e) => ({
  "&:disabled": {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Ks = (e) => f(f(f(f(f({}, qs(e)), {
  backgroundColor: e.colorBgContainer,
  borderColor: e.colorBorder,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
}), Fe({
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), nr(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: f(f(f({
    color: e.colorError,
    borderColor: e.colorError
  }, Fe({
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), nr(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), Ko(e))
}), C0 = (e) => f(f(f(f(f({}, qs(e)), {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimary,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
}), Fe({
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryActive
})), nr(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: f(f(f({
    backgroundColor: e.colorError,
    boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
  }, Fe({
    backgroundColor: e.colorErrorHover
  }, {
    backgroundColor: e.colorErrorActive
  })), nr(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Ko(e))
}), $0 = (e) => f(f({}, Ks(e)), {
  borderStyle: "dashed"
}), O0 = (e) => f(f(f({
  color: e.colorLink
}, Fe({
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), rr(e)), {
  [`&${e.componentCls}-dangerous`]: f(f({
    color: e.colorError
  }, Fe({
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), rr(e))
}), T0 = (e) => f(f(f({}, Fe({
  color: e.colorText,
  backgroundColor: e.colorBgTextHover
}, {
  color: e.colorText,
  backgroundColor: e.colorBgTextActive
})), rr(e)), {
  [`&${e.componentCls}-dangerous`]: f(f({
    color: e.colorError
  }, rr(e)), Fe({
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }))
}), P0 = (e) => f(f({}, xo(e)), {
  [`&${e.componentCls}:hover`]: f({}, xo(e))
}), _0 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: Ks(e),
    [`${t}-primary`]: C0(e),
    [`${t}-dashed`]: $0(e),
    [`${t}-link`]: O0(e),
    [`${t}-text`]: T0(e),
    [`${t}-disabled`]: P0(e)
  };
}, Zo = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: n,
    iconCls: r,
    controlHeight: o,
    fontSize: i,
    lineHeight: a,
    lineWidth: l,
    borderRadius: s,
    buttonPaddingHorizontal: u
  } = e, d = Math.max(0, (o - i * a) / 2 - l), c = u - l, p = `${n}-icon-only`;
  return [
    // Size
    {
      [`${n}${t}`]: {
        fontSize: i,
        height: o,
        padding: `${d}px ${c}px`,
        borderRadius: s,
        [`&${p}`]: {
          width: o,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${n}-round`]: {
            width: "auto"
          },
          "> span": {
            transform: "scale(1.143)"
            // 14px -> 16px
          }
        },
        // Loading
        [`&${n}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${n}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        },
        [`&:not(${p}) ${n}-loading-icon > ${r}`]: {
          marginInlineEnd: e.marginXS
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${n}${n}-circle${t}`]: S0(e)
    },
    {
      [`${n}${n}-round${t}`]: x0(e)
    }
  ];
}, E0 = (e) => Zo(e), A0 = (e) => {
  const t = be(e, {
    controlHeight: e.controlHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: e.borderRadiusSM
  });
  return Zo(t, `${e.componentCls}-sm`);
}, I0 = (e) => {
  const t = be(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.fontSizeLG,
    borderRadius: e.borderRadiusLG
  });
  return Zo(t, `${e.componentCls}-lg`);
}, M0 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, R0 = dt("Button", (e) => {
  const {
    controlTmpOutline: t,
    paddingContentHorizontal: n
  } = e, r = be(e, {
    colorOutlineDefault: t,
    buttonPaddingHorizontal: n
  });
  return [
    // Shared
    w0(r),
    // Size
    A0(r),
    E0(r),
    I0(r),
    // Block
    M0(r),
    // Group (type, ghost, danger, disabled, loading)
    _0(r),
    // Button Group
    v0(r),
    // Space Compact
    Gs(e, {
      focus: !1
    }),
    y0(e)
  ];
}), j0 = () => ({
  prefixCls: String,
  size: {
    type: String
  }
}), Zs = Yo(), Co = V({
  compatConfig: {
    MODE: 3
  },
  name: "AButtonGroup",
  props: j0(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      prefixCls: r,
      direction: o
    } = pe("btn-group", e), [, , i] = dr();
    Zs.useProvide(it({
      size: I(() => e.size)
    }));
    const a = I(() => {
      const {
        size: l
      } = e;
      let s = "";
      switch (l) {
        case "large":
          s = "lg";
          break;
        case "small":
          s = "sm";
          break;
        case "middle":
        case void 0:
          break;
        default:
          Zn(!l, "Button.Group", "Invalid prop `size`.");
      }
      return {
        [`${r.value}`]: !0,
        [`${r.value}-${s}`]: s,
        [`${r.value}-rtl`]: o.value === "rtl",
        [i.value]: !0
      };
    });
    return () => {
      var l;
      return S("div", {
        class: a.value
      }, [Ce((l = n.default) === null || l === void 0 ? void 0 : l.call(n))]);
    };
  }
}), Wa = /^[\u4e00-\u9fa5]{2}$/, ka = Wa.test.bind(Wa);
function In(e) {
  return e === "text" || e === "link";
}
const Qt = V({
  compatConfig: {
    MODE: 3
  },
  name: "AButton",
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: hn(h0(), {
    type: "default"
  }),
  slots: Object,
  // emits: ['click', 'mousedown'],
  setup(e, t) {
    let {
      slots: n,
      attrs: r,
      emit: o,
      expose: i
    } = t;
    const {
      prefixCls: a,
      autoInsertSpaceInButton: l,
      direction: s,
      size: u
    } = pe("btn", e), [d, c] = R0(a), p = Zs.useInject(), h = lr(), b = I(() => {
      var M;
      return (M = e.disabled) !== null && M !== void 0 ? M : h.value;
    }), m = N(null), w = N(void 0);
    let v = !1;
    const y = N(!1), C = N(!1), P = I(() => l.value !== !1), {
      compactSize: $,
      compactItemClassnames: x
    } = Xs(a, s), g = I(() => typeof e.loading == "object" && e.loading.delay ? e.loading.delay || !0 : !!e.loading);
    Y(g, (M) => {
      clearTimeout(w.value), typeof g.value == "number" ? w.value = setTimeout(() => {
        y.value = M;
      }, g.value) : y.value = M;
    }, {
      immediate: !0
    });
    const E = I(() => {
      const {
        type: M,
        shape: B = "default",
        ghost: X,
        block: _,
        danger: O
      } = e, A = a.value, H = {
        large: "lg",
        small: "sm",
        middle: void 0
      }, k = $.value || (p == null ? void 0 : p.size) || u.value, Z = k && H[k] || "";
      return [x.value, {
        [c.value]: !0,
        [`${A}`]: !0,
        [`${A}-${B}`]: B !== "default" && B,
        [`${A}-${M}`]: M,
        [`${A}-${Z}`]: Z,
        [`${A}-loading`]: y.value,
        [`${A}-background-ghost`]: X && !In(M),
        [`${A}-two-chinese-chars`]: C.value && P.value,
        [`${A}-block`]: _,
        [`${A}-dangerous`]: !!O,
        [`${A}-rtl`]: s.value === "rtl"
      }];
    }), j = () => {
      const M = m.value;
      if (!M || l.value === !1)
        return;
      const B = M.textContent;
      v && ka(B) ? C.value || (C.value = !0) : C.value && (C.value = !1);
    }, T = (M) => {
      if (y.value || b.value) {
        M.preventDefault();
        return;
      }
      o("click", M);
    }, D = (M) => {
      o("mousedown", M);
    }, G = (M, B) => {
      const X = B ? " " : "";
      if (M.type === il) {
        let _ = M.children.trim();
        return ka(_) && (_ = _.split("").join(X)), S("span", null, [_]);
      }
      return M;
    };
    return ut(() => {
      Zn(!(e.ghost && In(e.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    }), ye(j), pn(j), ze(() => {
      w.value && clearTimeout(w.value);
    }), i({
      focus: () => {
        var M;
        (M = m.value) === null || M === void 0 || M.focus();
      },
      blur: () => {
        var M;
        (M = m.value) === null || M === void 0 || M.blur();
      }
    }), () => {
      var M, B;
      const {
        icon: X = (M = n.icon) === null || M === void 0 ? void 0 : M.call(n)
      } = e, _ = Ce((B = n.default) === null || B === void 0 ? void 0 : B.call(n));
      v = _.length === 1 && !X && !In(e.type);
      const {
        type: O,
        htmlType: A,
        href: H,
        title: k,
        target: Z
      } = e, Se = y.value ? "loading" : X, ie = f(f({}, r), {
        title: k,
        disabled: b.value,
        class: [E.value, r.class, {
          [`${a.value}-icon-only`]: _.length === 0 && !!Se
        }],
        onClick: T,
        onMousedown: D
      });
      b.value || delete ie.disabled;
      const Ee = X && !y.value ? X : S(g0, {
        existIcon: !!X,
        prefixCls: a.value,
        loading: !!y.value
      }, null), ue = _.map((Ze) => G(Ze, v && P.value));
      if (H !== void 0)
        return d(S("a", W(W({}, ie), {}, {
          href: H,
          target: Z,
          ref: m
        }), [Ee, ue]));
      let Ke = S("button", W(W({}, ie), {}, {
        ref: m,
        type: A
      }), [Ee, ue]);
      if (!In(O)) {
        const Ze = /* @__PURE__ */ function() {
          return Ke;
        }();
        Ke = S(p0, {
          ref: "wave",
          disabled: !!y.value
        }, {
          default: () => [Ze]
        });
      }
      return d(Ke);
    };
  }
});
Qt.Group = Co;
Qt.install = function(e) {
  return e.component(Qt.name, Qt), e.component(Co.name, Co), e;
};
const D0 = (e) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: e,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), Qo = (e) => ({
  borderColor: e.inputBorderHoverColor,
  borderInlineEndWidth: e.lineWidth
}), $o = (e) => ({
  borderColor: e.inputBorderHoverColor,
  boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,
  borderInlineEndWidth: e.lineWidth,
  outline: 0
}), z0 = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "&:hover": f({}, Qo(be(e, {
    inputBorderHoverColor: e.colorBorder
  })))
}), Qs = (e) => {
  const {
    inputPaddingVerticalLG: t,
    fontSizeLG: n,
    lineHeightLG: r,
    borderRadiusLG: o,
    inputPaddingHorizontalLG: i
  } = e;
  return {
    padding: `${t}px ${i}px`,
    fontSize: n,
    lineHeight: r,
    borderRadius: o
  };
}, Js = (e) => ({
  padding: `${e.inputPaddingVerticalSM}px ${e.controlPaddingHorizontalSM - 1}px`,
  borderRadius: e.borderRadiusSM
}), eu = (e, t) => {
  const {
    componentCls: n,
    colorError: r,
    colorWarning: o,
    colorErrorOutline: i,
    colorWarningOutline: a,
    colorErrorBorderHover: l,
    colorWarningBorderHover: s
  } = e;
  return {
    [`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]: {
      borderColor: r,
      "&:hover": {
        borderColor: l
      },
      "&:focus, &-focused": f({}, $o(be(e, {
        inputBorderActiveColor: r,
        inputBorderHoverColor: r,
        controlOutline: i
      }))),
      [`${n}-prefix`]: {
        color: r
      }
    },
    [`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]: {
      borderColor: o,
      "&:hover": {
        borderColor: s
      },
      "&:focus, &-focused": f({}, $o(be(e, {
        inputBorderActiveColor: o,
        inputBorderHoverColor: o,
        controlOutline: a
      }))),
      [`${n}-prefix`]: {
        color: o
      }
    }
  };
}, tu = (e) => f(f({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${e.inputPaddingVertical}px ${e.inputPaddingHorizontal}px`,
  color: e.colorText,
  fontSize: e.fontSize,
  lineHeight: e.lineHeight,
  backgroundColor: e.colorBgContainer,
  backgroundImage: "none",
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: e.colorBorder,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, D0(e.colorTextPlaceholder)), {
  "&:hover": f({}, Qo(e)),
  "&:focus, &-focused": f({}, $o(e)),
  "&-disabled, &[disabled]": f({}, z0(e)),
  "&-borderless": {
    "&, &:hover, &:focus, &-focused, &-disabled, &[disabled]": {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none"
    }
  },
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    height: "auto",
    minHeight: e.controlHeight,
    lineHeight: e.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${e.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": f({}, Qs(e)),
  "&-sm": f({}, Js(e)),
  // RTL
  "&-rtl": {
    direction: "rtl"
  },
  "&-textarea-rtl": {
    direction: "rtl"
  }
}), B0 = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: e.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: f({}, Qs(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: f({}, Js(e)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightLG
    },
    [`&-sm ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightSM
    },
    [`> ${t}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${t}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${e.inputPaddingHorizontal}px`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.fontSize,
        textAlign: "center",
        backgroundColor: e.colorFillAlter,
        border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${n}-select`]: {
          margin: `-${e.inputPaddingVertical + 1}px -${e.inputPaddingHorizontal}px`,
          [`&${n}-select-single:not(${n}-select-customize-input)`]: {
            [`${n}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${e.lineWidth}px ${e.lineType} transparent`,
              boxShadow: "none"
            }
          },
          "&-open, &-focused": {
            [`${n}-select-selector`]: {
              color: e.colorPrimary
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${n}-cascader-picker`]: {
          margin: `-9px -${e.inputPaddingHorizontal}px`,
          backgroundColor: "transparent",
          [`${n}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    },
    [`${t}`]: {
      float: "inline-start",
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}-affix-wrapper`]: {
      [`&:not(:first-child) ${t}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${t}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${t}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${t}-search &`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        }
      },
      [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${t}-group-compact`]: f(f({
      display: "block"
    }, gf()), {
      [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: e.lineWidth,
          "&:hover": {
            zIndex: 1
          },
          "&:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-block",
        float: "none",
        verticalAlign: "top",
        borderRadius: 0
      },
      [`& > ${t}-affix-wrapper`]: {
        display: "inline-flex"
      },
      [`& > ${n}-picker-range`]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: -e.lineWidth,
        borderInlineEndWidth: e.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [`${t}`]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover": {
          zIndex: 1
        },
        "&:focus": {
          zIndex: 1
        }
      },
      [`& > ${n}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${n}-select > ${n}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${n}-select-auto-complete ${t}`]: {
        verticalAlign: "top"
      },
      [`${t}-group-wrapper + ${t}-group-wrapper`]: {
        marginInlineStart: -e.lineWidth,
        [`${t}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${t}-group-wrapper:not(:last-child)`]: {
        [`&${t}-search > ${t}-group`]: {
          [`& > ${t}-group-addon > ${t}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: e.borderRadius
          }
        }
      }
    })
  };
}, N0 = (e) => {
  const {
    componentCls: t,
    controlHeightSM: n,
    lineWidth: r
  } = e, i = (n - r * 2 - 16) / 2;
  return {
    [t]: f(f(f(f({}, zo(e)), tu(e)), eu(e, t)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${t}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${t}-sm`]: {
          height: n,
          paddingTop: i,
          paddingBottom: i
        }
      }
    })
  };
}, H0 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ========================= Input =========================
    [`${t}-clear-icon`]: {
      margin: 0,
      color: e.colorTextQuaternary,
      fontSize: e.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      "&:hover": {
        color: e.colorTextTertiary
      },
      "&:active": {
        color: e.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${e.inputAffixPadding}px`
      }
    },
    // ======================= TextArea ========================
    "&-textarea-with-clear-btn": {
      padding: "0 !important",
      border: "0 !important",
      [`${t}-clear-icon`]: {
        position: "absolute",
        insetBlockStart: e.paddingXS,
        insetInlineEnd: e.paddingXS,
        zIndex: 1
      }
    }
  };
}, F0 = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: n,
    colorTextDescription: r,
    motionDurationSlow: o,
    colorIcon: i,
    colorIconHover: a,
    iconCls: l
  } = e;
  return {
    [`${t}-affix-wrapper`]: f(f(f(f(f({}, tu(e)), {
      display: "inline-flex",
      [`&:not(${t}-affix-wrapper-disabled):hover`]: f(f({}, Qo(e)), {
        zIndex: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }),
      "&-focused, &:focus": {
        zIndex: 1
      },
      "&-disabled": {
        [`${t}[disabled]`]: {
          background: "transparent"
        }
      },
      [`> input${t}`]: {
        padding: 0,
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${t}`]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: e.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: r
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: n
        },
        "&-suffix": {
          marginInlineStart: n
        }
      }
    }), H0(e)), {
      // password
      [`${l}${t}-password-icon`]: {
        color: i,
        cursor: "pointer",
        transition: `all ${o}`,
        "&:hover": {
          color: a
        }
      }
    }), eu(e, `${t}-affix-wrapper`))
  };
}, L0 = (e) => {
  const {
    componentCls: t,
    colorError: n,
    colorSuccess: r,
    borderRadiusLG: o,
    borderRadiusSM: i
  } = e;
  return {
    [`${t}-group`]: f(f(f({}, zo(e)), B0(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": {
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${t}-group-addon`]: {
            borderRadius: o
          }
        },
        "&-sm": {
          [`${t}-group-addon`]: {
            borderRadius: i
          }
        },
        // Status
        "&-status-error": {
          [`${t}-group-addon`]: {
            color: n,
            borderColor: n
          }
        },
        "&-status-warning": {
          [`${t}-group-addon:last-child`]: {
            color: r,
            borderColor: r
          }
        }
      }
    })
  };
}, W0 = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e, r = `${t}-search`;
  return {
    [r]: {
      [`${t}`]: {
        "&:hover, &:focus": {
          borderColor: e.colorPrimaryHover,
          [`+ ${t}-group-addon ${r}-button:not(${n}-btn-primary)`]: {
            borderInlineStartColor: e.colorPrimaryHover
          }
        }
      },
      [`${t}-affix-wrapper`]: {
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#components-auto-complete-demo-certain-category
      [`${t}-lg`]: {
        lineHeight: e.lineHeightLG - 2e-4
      },
      [`> ${t}-group`]: {
        [`> ${t}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${r}-button`]: {
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderStartEndRadius: e.borderRadius,
            borderEndEndRadius: e.borderRadius,
            borderEndStartRadius: 0
          },
          [`${r}-button:not(${n}-btn-primary)`]: {
            color: e.colorTextDescription,
            "&:hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${n}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${r}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`&-large ${r}-button`]: {
        height: e.controlHeightLG
      },
      [`&-small ${r}-button`]: {
        height: e.controlHeightSM
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${t}-compact-item`]: {
        [`&:not(${t}-compact-last-item)`]: {
          [`${t}-group-addon`]: {
            [`${t}-search-button`]: {
              marginInlineEnd: -e.lineWidth,
              borderRadius: 0
            }
          }
        },
        [`&:not(${t}-compact-first-item)`]: {
          [`${t},${t}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
          "&:hover,&:focus,&:active": {
            zIndex: 2
          }
        },
        [`> ${t}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
};
function k0(e) {
  return be(e, {
    inputAffixPadding: e.paddingXXS,
    inputPaddingVertical: Math.max(Math.round((e.controlHeight - e.fontSize * e.lineHeight) / 2 * 10) / 10 - e.lineWidth, 3),
    inputPaddingVerticalLG: Math.ceil((e.controlHeightLG - e.fontSizeLG * e.lineHeightLG) / 2 * 10) / 10 - e.lineWidth,
    inputPaddingVerticalSM: Math.max(Math.round((e.controlHeightSM - e.fontSize * e.lineHeight) / 2 * 10) / 10 - e.lineWidth, 0),
    inputPaddingHorizontal: e.paddingSM - e.lineWidth,
    inputPaddingHorizontalSM: e.paddingXS - e.lineWidth,
    inputPaddingHorizontalLG: e.controlPaddingHorizontal - e.lineWidth,
    inputBorderHoverColor: e.colorPrimaryHover,
    inputBorderActiveColor: e.colorPrimaryHover
  });
}
const V0 = (e) => {
  const {
    componentCls: t,
    inputPaddingHorizontal: n,
    paddingLG: r
  } = e, o = `${t}-textarea`;
  return {
    [o]: {
      position: "relative",
      [`${o}-suffix`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: n,
        bottom: 0,
        zIndex: 1,
        display: "inline-flex",
        alignItems: "center",
        margin: "auto"
      },
      "&-status-error,\n        &-status-warning,\n        &-status-success,\n        &-status-validating": {
        [`&${o}-has-feedback`]: {
          [`${t}`]: {
            paddingInlineEnd: r
          }
        }
      },
      "&-show-count": {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${t}`]: {
          height: "100%"
        },
        "&::after": {
          color: e.colorTextDescription,
          whiteSpace: "nowrap",
          content: "attr(data-count)",
          pointerEvents: "none",
          float: "right"
        }
      },
      "&-rtl": {
        "&::after": {
          float: "left"
        }
      }
    }
  };
}, Jo = dt("Input", (e) => {
  const t = k0(e);
  return [
    N0(t),
    V0(t),
    F0(t),
    L0(t),
    W0(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Gs(t)
  ];
});
var X0 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" };
function Va(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      G0(e, o, n[o]);
    });
  }
  return e;
}
function G0(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ei = function(t, n) {
  var r = Va({}, t, n.attrs);
  return S(_e, Va({}, r, {
    icon: X0
  }), null);
};
ei.displayName = "EyeInvisibleOutlined";
ei.inheritAttrs = !1;
var U0 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" };
function Xa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Y0(e, o, n[o]);
    });
  }
  return e;
}
function Y0(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ti = function(t, n) {
  var r = Xa({}, t, n.attrs);
  return S(_e, Xa({}, r, {
    icon: U0
  }), null);
};
ti.displayName = "EyeOutlined";
ti.inheritAttrs = !1;
const nu = () => ({
  prefixCls: String,
  width: R.oneOfType([R.string, R.number]),
  height: R.oneOfType([R.string, R.number]),
  style: {
    type: Object,
    default: void 0
  },
  class: String,
  rootClassName: String,
  rootStyle: oe(),
  placement: {
    type: String
  },
  wrapperClassName: String,
  level: {
    type: [String, Array]
  },
  levelMove: {
    type: [Number, Function, Array]
  },
  duration: String,
  ease: String,
  showMask: {
    type: Boolean,
    default: void 0
  },
  maskClosable: {
    type: Boolean,
    default: void 0
  },
  maskStyle: {
    type: Object,
    default: void 0
  },
  afterVisibleChange: Function,
  keyboard: {
    type: Boolean,
    default: void 0
  },
  contentWrapperStyle: Xr(),
  autofocus: {
    type: Boolean,
    default: void 0
  },
  open: {
    type: Boolean,
    default: void 0
  },
  // Motion
  motion: jc(),
  maskMotion: oe()
}), q0 = () => f(f({}, nu()), {
  forceRender: {
    type: Boolean,
    default: void 0
  },
  getContainer: R.oneOfType([R.string, R.func, R.object, R.looseBool])
}), K0 = () => f(f({}, nu()), {
  getContainer: Function,
  getOpenCount: Function,
  scrollLocker: R.any,
  inline: Boolean
});
function Z0(e) {
  return Array.isArray(e) ? e : [e];
}
const Q0 = {
  transition: "transitionend",
  WebkitTransition: "webkitTransitionEnd",
  MozTransition: "transitionend",
  OTransition: "oTransitionEnd otransitionend"
};
Object.keys(Q0).filter((e) => {
  if (typeof document > "u")
    return !1;
  const t = document.getElementsByTagName("html")[0];
  return e in (t ? t.style : {});
})[0];
const J0 = !(typeof window < "u" && window.document && window.document.createElement);
var eb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Ga = V({
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: K0(),
  emits: ["close", "handleClick", "change"],
  setup(e, t) {
    let {
      emit: n,
      slots: r
    } = t;
    const o = N(), i = N(), a = N(), l = N(), s = N();
    let u = [];
    `${Number((Date.now() + Math.random()).toString().replace(".", Math.round(Math.random() * 9).toString())).toString(16)}`, ye(() => {
      te(() => {
        var v;
        const {
          open: y,
          getContainer: C,
          showMask: P,
          autofocus: $
        } = e, x = C == null ? void 0 : C();
        b(e), y && (x && (x.parentNode, document.body), te(() => {
          $ && d();
        }), P && ((v = e.scrollLocker) === null || v === void 0 || v.lock()));
      });
    }), Y(() => e.level, () => {
      b(e);
    }, {
      flush: "post"
    }), Y(() => e.open, () => {
      const {
        open: v,
        getContainer: y,
        scrollLocker: C,
        showMask: P,
        autofocus: $
      } = e, x = y == null ? void 0 : y();
      x && (x.parentNode, document.body), v ? ($ && d(), P && (C == null || C.lock())) : C == null || C.unLock();
    }, {
      flush: "post"
    }), or(() => {
      var v;
      const {
        open: y
      } = e;
      y && (document.body.style.touchAction = ""), (v = e.scrollLocker) === null || v === void 0 || v.unLock();
    }), Y(() => e.placement, (v) => {
      v && (s.value = null);
    });
    const d = () => {
      var v, y;
      (y = (v = i.value) === null || v === void 0 ? void 0 : v.focus) === null || y === void 0 || y.call(v);
    }, c = (v) => {
      n("close", v);
    }, p = (v) => {
      v.keyCode === Pv.ESC && (v.stopPropagation(), c(v));
    }, h = () => {
      const {
        open: v,
        afterVisibleChange: y
      } = e;
      y && y(!!v);
    }, b = (v) => {
      let {
        level: y,
        getContainer: C
      } = v;
      if (J0)
        return;
      const P = C == null ? void 0 : C(), $ = P ? P.parentNode : null;
      u = [], y === "all" ? ($ ? Array.prototype.slice.call($.children) : []).forEach((g) => {
        g.nodeName !== "SCRIPT" && g.nodeName !== "STYLE" && g.nodeName !== "LINK" && g !== P && u.push(g);
      }) : y && Z0(y).forEach((x) => {
        document.querySelectorAll(x).forEach((g) => {
          u.push(g);
        });
      });
    }, m = (v) => {
      n("handleClick", v);
    }, w = N(!1);
    return Y(i, () => {
      te(() => {
        w.value = !0;
      });
    }), () => {
      var v, y;
      const {
        width: C,
        height: P,
        open: $,
        prefixCls: x,
        placement: g,
        level: E,
        levelMove: j,
        ease: T,
        duration: D,
        getContainer: G,
        onChange: z,
        afterVisibleChange: F,
        showMask: M,
        maskClosable: B,
        maskStyle: X,
        keyboard: _,
        getOpenCount: O,
        scrollLocker: A,
        contentWrapperStyle: H,
        style: k,
        class: Z,
        rootClassName: Se,
        rootStyle: ie,
        maskMotion: Ee,
        motion: ue,
        inline: Ke
      } = e, Ze = eb(e, ["width", "height", "open", "prefixCls", "placement", "level", "levelMove", "ease", "duration", "getContainer", "onChange", "afterVisibleChange", "showMask", "maskClosable", "maskStyle", "keyboard", "getOpenCount", "scrollLocker", "contentWrapperStyle", "style", "class", "rootClassName", "rootStyle", "maskMotion", "motion", "inline"]), Q = $ && w.value, yr = U(x, {
        [`${x}-${g}`]: !0,
        [`${x}-open`]: Q,
        [`${x}-inline`]: Ke,
        "no-mask": !M,
        [Se]: !0
      }), wr = typeof ue == "function" ? ue(g) : ue;
      return S("div", W(W({}, Pe(Ze, ["autofocus"])), {}, {
        tabindex: -1,
        class: yr,
        style: ie,
        ref: i,
        onKeydown: Q && _ ? p : void 0
      }), [S(at, Ee, {
        default: () => [M && xt(S("div", {
          class: `${x}-mask`,
          onClick: B ? c : void 0,
          style: X,
          ref: a
        }, null), [[kr, Q]])]
      }), S(at, W(W({}, wr), {}, {
        onAfterEnter: h,
        onAfterLeave: h
      }), {
        default: () => [xt(S("div", {
          class: `${x}-content-wrapper`,
          style: [H],
          ref: o
        }, [S("div", {
          class: [`${x}-content`, Z],
          style: k,
          ref: s
        }, [(v = r.default) === null || v === void 0 ? void 0 : v.call(r)]), r.handler ? S("div", {
          onClick: m,
          ref: l
        }, [(y = r.handler) === null || y === void 0 ? void 0 : y.call(r)]) : null]), [[kr, Q]])]
      })]);
    };
  }
});
var Ua = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const tb = V({
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: hn(q0(), {
    prefixCls: "drawer",
    placement: "left",
    getContainer: "body",
    level: "all",
    duration: ".3s",
    ease: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    afterVisibleChange: () => {
    },
    showMask: !0,
    maskClosable: !0,
    maskStyle: {},
    wrapperClassName: "",
    keyboard: !0,
    forceRender: !1,
    autofocus: !0
  }),
  emits: ["handleClick", "close"],
  setup(e, t) {
    let {
      emit: n,
      slots: r
    } = t;
    const o = K(null), i = (l) => {
      n("handleClick", l);
    }, a = (l) => {
      n("close", l);
    };
    return () => {
      const {
        getContainer: l,
        wrapperClassName: s,
        rootClassName: u,
        rootStyle: d,
        forceRender: c
      } = e, p = Ua(e, ["getContainer", "wrapperClassName", "rootClassName", "rootStyle", "forceRender"]);
      let h = null;
      if (!l)
        return S(Ga, W(W({}, p), {}, {
          rootClassName: u,
          rootStyle: d,
          open: e.open,
          onClose: a,
          onHandleClick: i,
          inline: !0
        }), r);
      const b = !!r.handler || c;
      return (b || e.open || o.value) && (h = S(Ns, {
        autoLock: !0,
        visible: e.open,
        forceRender: b,
        getContainer: l,
        wrapperClassName: s
      }, {
        default: (m) => {
          var {
            visible: w,
            afterClose: v
          } = m, y = Ua(m, ["visible", "afterClose"]);
          return S(Ga, W(W(W({
            ref: o
          }, p), y), {}, {
            rootClassName: u,
            rootStyle: d,
            open: w !== void 0 ? w : e.open,
            afterVisibleChange: v !== void 0 ? v : e.afterVisibleChange,
            onClose: a,
            onHandleClick: i
          }), r);
        }
      })), h;
    };
  }
}), nb = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: n
  } = e, r = {
    "&-enter, &-appear, &-leave": {
      "&-start": {
        transition: "none"
      },
      "&-active": {
        transition: `all ${n}`
      }
    }
  };
  return {
    [t]: {
      // ======================== Mask ========================
      [`${t}-mask-motion`]: {
        "&-enter, &-appear, &-leave": {
          "&-active": {
            transition: `all ${n}`
          }
        },
        "&-enter, &-appear": {
          opacity: 0,
          "&-active": {
            opacity: 1
          }
        },
        "&-leave": {
          opacity: 1,
          "&-active": {
            opacity: 0
          }
        }
      },
      // ======================= Panel ========================
      [`${t}-panel-motion`]: {
        // Left
        "&-left": [r, {
          "&-enter, &-appear": {
            "&-start": {
              transform: "translateX(-100%) !important"
            },
            "&-active": {
              transform: "translateX(0)"
            }
          },
          "&-leave": {
            transform: "translateX(0)",
            "&-active": {
              transform: "translateX(-100%)"
            }
          }
        }],
        // Right
        "&-right": [r, {
          "&-enter, &-appear": {
            "&-start": {
              transform: "translateX(100%) !important"
            },
            "&-active": {
              transform: "translateX(0)"
            }
          },
          "&-leave": {
            transform: "translateX(0)",
            "&-active": {
              transform: "translateX(100%)"
            }
          }
        }],
        // Top
        "&-top": [r, {
          "&-enter, &-appear": {
            "&-start": {
              transform: "translateY(-100%) !important"
            },
            "&-active": {
              transform: "translateY(0)"
            }
          },
          "&-leave": {
            transform: "translateY(0)",
            "&-active": {
              transform: "translateY(-100%)"
            }
          }
        }],
        // Bottom
        "&-bottom": [r, {
          "&-enter, &-appear": {
            "&-start": {
              transform: "translateY(100%) !important"
            },
            "&-active": {
              transform: "translateY(0)"
            }
          },
          "&-leave": {
            transform: "translateY(0)",
            "&-active": {
              transform: "translateY(100%)"
            }
          }
        }]
      }
    }
  };
}, rb = (e) => {
  const {
    componentCls: t,
    zIndexPopup: n,
    colorBgMask: r,
    colorBgElevated: o,
    motionDurationSlow: i,
    motionDurationMid: a,
    padding: l,
    paddingLG: s,
    fontSizeLG: u,
    lineHeightLG: d,
    lineWidth: c,
    lineType: p,
    colorSplit: h,
    marginSM: b,
    colorIcon: m,
    colorIconHover: w,
    colorText: v,
    fontWeightStrong: y,
    drawerFooterPaddingVertical: C,
    drawerFooterPaddingHorizontal: P
  } = e, $ = `${t}-content-wrapper`;
  return {
    [t]: {
      position: "fixed",
      inset: 0,
      zIndex: n,
      pointerEvents: "none",
      "&-pure": {
        position: "relative",
        background: o,
        [`&${t}-left`]: {
          boxShadow: e.boxShadowDrawerLeft
        },
        [`&${t}-right`]: {
          boxShadow: e.boxShadowDrawerRight
        },
        [`&${t}-top`]: {
          boxShadow: e.boxShadowDrawerUp
        },
        [`&${t}-bottom`]: {
          boxShadow: e.boxShadowDrawerDown
        }
      },
      "&-inline": {
        position: "absolute"
      },
      // ====================== Mask ======================
      [`${t}-mask`]: {
        position: "absolute",
        inset: 0,
        zIndex: n,
        background: r,
        pointerEvents: "auto"
      },
      // ==================== Content =====================
      [$]: {
        position: "absolute",
        zIndex: n,
        transition: `all ${i}`,
        "&-hidden": {
          display: "none"
        }
      },
      // Placement
      [`&-left > ${$}`]: {
        top: 0,
        bottom: 0,
        left: {
          _skip_check_: !0,
          value: 0
        },
        boxShadow: e.boxShadowDrawerLeft
      },
      [`&-right > ${$}`]: {
        top: 0,
        right: {
          _skip_check_: !0,
          value: 0
        },
        bottom: 0,
        boxShadow: e.boxShadowDrawerRight
      },
      [`&-top > ${$}`]: {
        top: 0,
        insetInline: 0,
        boxShadow: e.boxShadowDrawerUp
      },
      [`&-bottom > ${$}`]: {
        bottom: 0,
        insetInline: 0,
        boxShadow: e.boxShadowDrawerDown
      },
      [`${t}-content`]: {
        width: "100%",
        height: "100%",
        overflow: "auto",
        background: o,
        pointerEvents: "auto"
      },
      // ===================== Panel ======================
      [`${t}-wrapper-body`]: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%"
      },
      // Header
      [`${t}-header`]: {
        display: "flex",
        flex: 0,
        alignItems: "center",
        padding: `${l}px ${s}px`,
        fontSize: u,
        lineHeight: d,
        borderBottom: `${c}px ${p} ${h}`,
        "&-title": {
          display: "flex",
          flex: 1,
          alignItems: "center",
          minWidth: 0,
          minHeight: 0
        }
      },
      [`${t}-extra`]: {
        flex: "none"
      },
      [`${t}-close`]: {
        display: "inline-block",
        marginInlineEnd: b,
        color: m,
        fontWeight: y,
        fontSize: u,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        textDecoration: "none",
        background: "transparent",
        border: 0,
        outline: 0,
        cursor: "pointer",
        transition: `color ${a}`,
        textRendering: "auto",
        "&:focus, &:hover": {
          color: w,
          textDecoration: "none"
        }
      },
      [`${t}-title`]: {
        flex: 1,
        margin: 0,
        color: v,
        fontWeight: e.fontWeightStrong,
        fontSize: u,
        lineHeight: d
      },
      // Body
      [`${t}-body`]: {
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        padding: s,
        overflow: "auto"
      },
      // Footer
      [`${t}-footer`]: {
        flexShrink: 0,
        padding: `${C}px ${P}px`,
        borderTop: `${c}px ${p} ${h}`
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl"
      }
    }
  };
}, ob = dt("Drawer", (e) => {
  const t = be(e, {
    drawerFooterPaddingVertical: e.paddingXS,
    drawerFooterPaddingHorizontal: e.padding
  });
  return [rb(t), nb(t)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase
}));
var ib = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const ab = ["top", "right", "bottom", "left"], Ya = {
  distance: 180
}, lb = () => ({
  autofocus: {
    type: Boolean,
    default: void 0
  },
  closable: {
    type: Boolean,
    default: void 0
  },
  closeIcon: R.any,
  destroyOnClose: {
    type: Boolean,
    default: void 0
  },
  forceRender: {
    type: Boolean,
    default: void 0
  },
  getContainer: {
    type: [String, Function, Boolean, Object],
    default: void 0
  },
  maskClosable: {
    type: Boolean,
    default: void 0
  },
  mask: {
    type: Boolean,
    default: void 0
  },
  maskStyle: oe(),
  rootClassName: String,
  rootStyle: oe(),
  size: {
    type: String
  },
  drawerStyle: oe(),
  headerStyle: oe(),
  bodyStyle: oe(),
  contentWrapperStyle: {
    type: Object,
    default: void 0
  },
  title: R.any,
  /** @deprecated Please use `open` instead */
  visible: {
    type: Boolean,
    default: void 0
  },
  open: {
    type: Boolean,
    default: void 0
  },
  width: R.oneOfType([R.string, R.number]),
  height: R.oneOfType([R.string, R.number]),
  zIndex: Number,
  prefixCls: String,
  push: R.oneOfType([R.looseBool, {
    type: Object
  }]),
  placement: R.oneOf(ab),
  keyboard: {
    type: Boolean,
    default: void 0
  },
  extra: R.any,
  footer: R.any,
  footerStyle: oe(),
  level: R.any,
  levelMove: {
    type: [Number, Array, Function]
  },
  handle: R.any,
  /** @deprecated Use `@afterVisibleChange` instead */
  afterVisibleChange: Function,
  /** @deprecated Please use `@afterOpenChange` instead */
  onAfterVisibleChange: Function,
  onAfterOpenChange: Function,
  /** @deprecated Please use `onUpdate:open` instead */
  "onUpdate:visible": Function,
  "onUpdate:open": Function,
  onClose: Function
}), sb = V({
  compatConfig: {
    MODE: 3
  },
  name: "ADrawer",
  inheritAttrs: !1,
  props: hn(lb(), {
    closable: !0,
    placement: "right",
    maskClosable: !0,
    mask: !0,
    level: null,
    keyboard: !0,
    push: Ya
  }),
  slots: Object,
  // emits: ['update:visible', 'close', 'afterVisibleChange'],
  setup(e, t) {
    let {
      emit: n,
      slots: r,
      attrs: o
    } = t;
    const i = N(!1), a = N(!1), l = N(null), s = N(!1), u = N(!1), d = I(() => {
      var O;
      return (O = e.open) !== null && O !== void 0 ? O : e.visible;
    });
    Y(d, () => {
      d.value ? s.value = !0 : u.value = !1;
    }, {
      immediate: !0
    }), Y([d, s], () => {
      d.value && s.value && (u.value = !0);
    }, {
      immediate: !0
    });
    const c = se("parentDrawerOpts", null), {
      prefixCls: p,
      getPopupContainer: h,
      direction: b
    } = pe("drawer", e), [m, w] = ob(p), v = I(() => (
      // 有可能为 false，所以不能直接判断
      e.getContainer === void 0 && (h != null && h.value) ? () => h.value(document.body) : e.getContainer
    ));
    Zn(!e.afterVisibleChange, "Drawer", "`afterVisibleChange` prop is deprecated, please use `@afterVisibleChange` event instead"), process.env.NODE_ENV !== "production" && [["visible", "open"], ["onUpdate:visible", "onUpdate:open"], ["onAfterVisibleChange", "onAfterOpenChange"]].forEach((O) => {
      let [A, H] = O;
      Zn(!e[A], "Drawer", `\`${A}\` is deprecated, please use \`${H}\` instead.`);
    }), je("parentDrawerOpts", {
      setPush: () => {
        i.value = !0;
      },
      setPull: () => {
        i.value = !1, te(() => {
          P();
        });
      }
    }), ye(() => {
      d.value && c && c.setPush();
    }), or(() => {
      c && c.setPull();
    }), Y(u, () => {
      c && (u.value ? c.setPush() : c.setPull());
    }, {
      flush: "post"
    });
    const P = () => {
      var O, A;
      (A = (O = l.value) === null || O === void 0 ? void 0 : O.domFocus) === null || A === void 0 || A.call(O);
    }, $ = (O) => {
      n("update:visible", !1), n("update:open", !1), n("close", O);
    }, x = (O) => {
      var A;
      O || (a.value === !1 && (a.value = !0), e.destroyOnClose && (s.value = !1)), (A = e.afterVisibleChange) === null || A === void 0 || A.call(e, O), n("afterVisibleChange", O), n("afterOpenChange", O);
    }, g = I(() => {
      const {
        push: O,
        placement: A
      } = e;
      let H;
      return typeof O == "boolean" ? H = O ? Ya.distance : 0 : H = O.distance, H = parseFloat(String(H || 0)), A === "left" || A === "right" ? `translateX(${A === "left" ? H : -H}px)` : A === "top" || A === "bottom" ? `translateY(${A === "top" ? H : -H}px)` : null;
    }), E = I(() => {
      var O;
      return (O = e.width) !== null && O !== void 0 ? O : e.size === "large" ? 736 : 378;
    }), j = I(() => {
      var O;
      return (O = e.height) !== null && O !== void 0 ? O : e.size === "large" ? 736 : 378;
    }), T = I(() => {
      const {
        mask: O,
        placement: A
      } = e;
      if (!u.value && !O)
        return {};
      const H = {};
      return A === "left" || A === "right" ? H.width = Ba(E.value) ? `${E.value}px` : E.value : H.height = Ba(j.value) ? `${j.value}px` : j.value, H;
    }), D = I(() => {
      const {
        zIndex: O
      } = e, A = T.value;
      return [{
        zIndex: O,
        transform: i.value ? g.value : void 0
      }, A];
    }), G = (O) => {
      const {
        closable: A,
        headerStyle: H
      } = e, k = Mn(r, e, "extra"), Z = Mn(r, e, "title");
      return !Z && !A ? null : S("div", {
        class: U(`${O}-header`, {
          [`${O}-header-close-only`]: A && !Z && !k
        }),
        style: H
      }, [S("div", {
        class: `${O}-header-title`
      }, [z(O), Z && S("div", {
        class: `${O}-title`
      }, [Z])]), k && S("div", {
        class: `${O}-extra`
      }, [k])]);
    }, z = (O) => {
      var A;
      const {
        closable: H
      } = e, k = r.closeIcon ? (A = r.closeIcon) === null || A === void 0 ? void 0 : A.call(r) : e.closeIcon;
      return H && S("button", {
        key: "closer",
        onClick: $,
        "aria-label": "Close",
        class: `${O}-close`
      }, [k === void 0 ? S(Go, null, null) : k]);
    }, F = (O) => {
      var A;
      if (a.value && !e.forceRender && !s.value)
        return null;
      const {
        bodyStyle: H,
        drawerStyle: k
      } = e;
      return S("div", {
        class: `${O}-wrapper-body`,
        style: k
      }, [G(O), S("div", {
        key: "body",
        class: `${O}-body`,
        style: H
      }, [(A = r.default) === null || A === void 0 ? void 0 : A.call(r)]), M(O)]);
    }, M = (O) => {
      const A = Mn(r, e, "footer");
      if (!A)
        return null;
      const H = `${O}-footer`;
      return S("div", {
        class: H,
        style: e.footerStyle
      }, [A]);
    }, B = I(() => U({
      "no-mask": !e.mask,
      [`${p.value}-rtl`]: b.value === "rtl"
    }, e.rootClassName, w.value)), X = I(() => po(ho(p.value, "mask-motion"))), _ = (O) => po(ho(p.value, `panel-motion-${O}`));
    return () => {
      const {
        width: O,
        height: A,
        placement: H,
        mask: k,
        forceRender: Z
      } = e, Se = ib(e, ["width", "height", "placement", "mask", "forceRender"]), ie = f(f(f({}, o), Pe(Se, ["size", "closeIcon", "closable", "destroyOnClose", "drawerStyle", "headerStyle", "bodyStyle", "title", "push", "onAfterVisibleChange", "onClose", "onUpdate:visible", "onUpdate:open", "visible"])), {
        forceRender: Z,
        onClose: $,
        afterVisibleChange: x,
        handler: !1,
        prefixCls: p.value,
        open: u.value,
        showMask: k,
        placement: H,
        ref: l
      });
      return m(S(So, null, {
        default: () => [S(tb, W(W({}, ie), {}, {
          maskMotion: X.value,
          motion: _,
          width: E.value,
          height: j.value,
          getContainer: v.value,
          rootClassName: B.value,
          rootStyle: e.rootStyle,
          contentWrapperStyle: D.value
        }), {
          handler: e.handle ? () => e.handle : r.handle,
          default: () => F(p.value)
        })]
      }));
    };
  }
}), ub = ar(sb), Jt = (e) => e != null && (Array.isArray(e) ? ct(e).length : !0);
function ni(e) {
  return Jt(e.prefix) || Jt(e.suffix) || Jt(e.allowClear);
}
function Fn(e) {
  return Jt(e.addonBefore) || Jt(e.addonAfter);
}
function Oo(e) {
  return typeof e > "u" || e === null ? "" : String(e);
}
function en(e, t, n, r) {
  if (!n)
    return;
  const o = t;
  if (t.type === "click") {
    Object.defineProperty(o, "target", {
      writable: !0
    }), Object.defineProperty(o, "currentTarget", {
      writable: !0
    });
    const i = e.cloneNode(!0);
    o.target = i, o.currentTarget = i, i.value = "", n(o);
    return;
  }
  if (r !== void 0) {
    Object.defineProperty(o, "target", {
      writable: !0
    }), Object.defineProperty(o, "currentTarget", {
      writable: !0
    }), o.target = e, o.currentTarget = e, e.value = r, n(o);
    return;
  }
  n(o);
}
function ru(e, t) {
  if (!e) return;
  e.focus(t);
  const {
    cursor: n
  } = t || {};
  if (n) {
    const r = e.value.length;
    switch (n) {
      case "start":
        e.setSelectionRange(0, 0);
        break;
      case "end":
        e.setSelectionRange(r, r);
        break;
      default:
        e.setSelectionRange(0, r);
    }
  }
}
const cb = () => ({
  addonBefore: R.any,
  addonAfter: R.any,
  prefix: R.any,
  suffix: R.any,
  clearIcon: R.any,
  affixWrapperClassName: String,
  groupClassName: String,
  wrapperClassName: String,
  inputClassName: String,
  allowClear: {
    type: Boolean,
    default: void 0
  }
}), ou = () => f(f({}, cb()), {
  value: {
    type: [String, Number, Symbol],
    default: void 0
  },
  defaultValue: {
    type: [String, Number, Symbol],
    default: void 0
  },
  inputElement: R.any,
  prefixCls: String,
  disabled: {
    type: Boolean,
    default: void 0
  },
  focused: {
    type: Boolean,
    default: void 0
  },
  triggerFocus: Function,
  readonly: {
    type: Boolean,
    default: void 0
  },
  handleReset: Function,
  hidden: {
    type: Boolean,
    default: void 0
  }
}), iu = () => f(f({}, ou()), {
  id: String,
  placeholder: {
    type: [String, Number]
  },
  autocomplete: String,
  type: Gr("text"),
  name: String,
  size: {
    type: String
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  lazy: {
    type: Boolean,
    default: !0
  },
  maxlength: Number,
  loading: {
    type: Boolean,
    default: void 0
  },
  bordered: {
    type: Boolean,
    default: void 0
  },
  showCount: {
    type: [Boolean, Object]
  },
  htmlSize: Number,
  onPressEnter: Function,
  onKeydown: Function,
  onKeyup: Function,
  onFocus: Function,
  onBlur: Function,
  onChange: Function,
  onInput: Function,
  "onUpdate:value": Function,
  onCompositionstart: Function,
  onCompositionend: Function,
  valueModifiers: Object,
  hidden: {
    type: Boolean,
    default: void 0
  },
  status: String
}), db = V({
  name: "BaseInput",
  inheritAttrs: !1,
  props: ou(),
  setup(e, t) {
    let {
      slots: n,
      attrs: r
    } = t;
    const o = K(), i = (l) => {
      var s;
      if (!((s = o.value) === null || s === void 0) && s.contains(l.target)) {
        const {
          triggerFocus: u
        } = e;
        u == null || u();
      }
    }, a = () => {
      var l;
      const {
        allowClear: s,
        value: u,
        disabled: d,
        readonly: c,
        handleReset: p,
        suffix: h = n.suffix,
        prefixCls: b
      } = e;
      if (!s)
        return null;
      const m = !d && !c && u, w = `${b}-clear-icon`, v = ((l = n.clearIcon) === null || l === void 0 ? void 0 : l.call(n)) || "*";
      return S("span", {
        onClick: p,
        onMousedown: (y) => y.preventDefault(),
        class: U({
          [`${w}-hidden`]: !m,
          [`${w}-has-suffix`]: !!h
        }, w),
        role: "button",
        tabindex: -1
      }, [v]);
    };
    return () => {
      var l, s;
      const {
        focused: u,
        value: d,
        disabled: c,
        allowClear: p,
        readonly: h,
        hidden: b,
        prefixCls: m,
        prefix: w = (l = n.prefix) === null || l === void 0 ? void 0 : l.call(n),
        suffix: v = (s = n.suffix) === null || s === void 0 ? void 0 : s.call(n),
        addonAfter: y = n.addonAfter,
        addonBefore: C = n.addonBefore,
        inputElement: P,
        affixWrapperClassName: $,
        wrapperClassName: x,
        groupClassName: g
      } = e;
      let E = Oe(P, {
        value: d,
        hidden: b
      });
      if (ni({
        prefix: w,
        suffix: v,
        allowClear: p
      })) {
        const j = `${m}-affix-wrapper`, T = U(j, {
          [`${j}-disabled`]: c,
          [`${j}-focused`]: u,
          [`${j}-readonly`]: h,
          [`${j}-input-with-clear-btn`]: v && p && d
        }, !Fn({
          addonAfter: y,
          addonBefore: C
        }) && r.class, $), D = (v || p) && S("span", {
          class: `${m}-suffix`
        }, [a(), v]);
        E = S("span", {
          class: T,
          style: r.style,
          hidden: !Fn({
            addonAfter: y,
            addonBefore: C
          }) && b,
          onMousedown: i,
          ref: o
        }, [w && S("span", {
          class: `${m}-prefix`
        }, [w]), Oe(P, {
          style: null,
          value: d,
          hidden: null
        }), D]);
      }
      if (Fn({
        addonAfter: y,
        addonBefore: C
      })) {
        const j = `${m}-group`, T = `${j}-addon`, D = U(`${m}-wrapper`, j, x), G = U(`${m}-group-wrapper`, r.class, g);
        return S("span", {
          class: G,
          style: r.style,
          hidden: b
        }, [S("span", {
          class: D
        }, [C && S("span", {
          class: T
        }, [C]), Oe(E, {
          style: null,
          hidden: null
        }), y && S("span", {
          class: T
        }, [y])])]);
      }
      return E;
    };
  }
});
var fb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const pb = V({
  name: "VCInput",
  inheritAttrs: !1,
  props: iu(),
  setup(e, t) {
    let {
      slots: n,
      attrs: r,
      expose: o,
      emit: i
    } = t;
    const a = N(e.value === void 0 ? e.defaultValue : e.value), l = N(!1), s = N();
    Y(() => e.value, () => {
      a.value = e.value;
    }), Y(() => e.disabled, () => {
      e.disabled && (l.value = !1);
    });
    const u = (g) => {
      s.value && ru(s.value, g);
    };
    o({
      focus: u,
      blur: () => {
        var g;
        (g = s.value) === null || g === void 0 || g.blur();
      },
      input: s,
      stateValue: a,
      setSelectionRange: (g, E, j) => {
        var T;
        (T = s.value) === null || T === void 0 || T.setSelectionRange(g, E, j);
      },
      select: () => {
        var g;
        (g = s.value) === null || g === void 0 || g.select();
      }
    });
    const h = (g) => {
      i("change", g);
    }, b = Ue(), m = (g, E) => {
      a.value !== g && (e.value === void 0 ? a.value = g : te(() => {
        s.value.value !== a.value && b.update();
      }), te(() => {
        E && E();
      }));
    }, w = (g) => {
      const {
        value: E,
        composing: j
      } = g.target;
      if ((g.isComposing || j) && e.lazy || a.value === E) return;
      const T = g.target.value;
      en(s.value, g, h), m(T);
    }, v = (g) => {
      g.keyCode === 13 && i("pressEnter", g), i("keydown", g);
    }, y = (g) => {
      l.value = !0, i("focus", g);
    }, C = (g) => {
      l.value = !1, i("blur", g);
    }, P = (g) => {
      en(s.value, g, h), m("", () => {
        u();
      });
    }, $ = () => {
      var g, E;
      const {
        addonBefore: j = n.addonBefore,
        addonAfter: T = n.addonAfter,
        disabled: D,
        valueModifiers: G = {},
        htmlSize: z,
        autocomplete: F,
        prefixCls: M,
        inputClassName: B,
        prefix: X = (g = n.prefix) === null || g === void 0 ? void 0 : g.call(n),
        suffix: _ = (E = n.suffix) === null || E === void 0 ? void 0 : E.call(n),
        allowClear: O,
        type: A = "text"
      } = e, H = Pe(e, [
        "prefixCls",
        "onPressEnter",
        "addonBefore",
        "addonAfter",
        "prefix",
        "suffix",
        "allowClear",
        // Input elements must be either controlled or uncontrolled,
        // specify either the value prop, or the defaultValue prop, but not both.
        "defaultValue",
        "size",
        "bordered",
        "htmlSize",
        "lazy",
        "showCount",
        "valueModifiers",
        "showCount",
        "affixWrapperClassName",
        "groupClassName",
        "inputClassName",
        "wrapperClassName"
      ]), k = f(f(f({}, H), r), {
        autocomplete: F,
        onChange: w,
        onInput: w,
        onFocus: y,
        onBlur: C,
        onKeydown: v,
        class: U(M, {
          [`${M}-disabled`]: D
        }, B, !Fn({
          addonAfter: T,
          addonBefore: j
        }) && !ni({
          prefix: X,
          suffix: _,
          allowClear: O
        }) && r.class),
        ref: s,
        key: "ant-input",
        size: z,
        type: A
      });
      G.lazy && delete k.onInput, k.autofocus || delete k.autofocus;
      const Z = S("input", Pe(k, ["size"]), null);
      return xt(Z, [[Hs]]);
    }, x = () => {
      var g;
      const {
        maxlength: E,
        suffix: j = (g = n.suffix) === null || g === void 0 ? void 0 : g.call(n),
        showCount: T,
        prefixCls: D
      } = e, G = Number(E) > 0;
      if (j || T) {
        const z = [...Oo(a.value)].length, F = typeof T == "object" ? T.formatter({
          count: z,
          maxlength: E
        }) : `${z}${G ? ` / ${E}` : ""}`;
        return S(Te, null, [!!T && S("span", {
          class: U(`${D}-show-count-suffix`, {
            [`${D}-show-count-has-suffix`]: !!j
          })
        }, [F]), j]);
      }
      return null;
    };
    return ye(() => {
      process.env.NODE_ENV === "test" && e.autofocus && u();
    }), () => {
      const {
        prefixCls: g,
        disabled: E
      } = e, j = fb(e, ["prefixCls", "disabled"]);
      return S(db, W(W(W({}, j), r), {}, {
        prefixCls: g,
        inputElement: $(),
        handleReset: P,
        value: Oo(a.value),
        focused: l.value,
        triggerFocus: u,
        suffix: x(),
        disabled: E
      }), n);
    };
  }
}), br = () => Pe(iu(), ["wrapperClassName", "groupClassName", "inputClassName", "affixWrapperClassName"]), au = () => f(f({}, Pe(br(), ["prefix", "addonBefore", "addonAfter", "suffix"])), {
  rows: Number,
  autosize: {
    type: [Boolean, Object],
    default: void 0
  },
  autoSize: {
    type: [Boolean, Object],
    default: void 0
  },
  onResize: {
    type: Function
  },
  onCompositionstart: Vn(),
  onCompositionend: Vn(),
  valueModifiers: Object
});
var hb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const ne = V({
  compatConfig: {
    MODE: 3
  },
  name: "AInput",
  inheritAttrs: !1,
  props: br(),
  setup(e, t) {
    let {
      slots: n,
      attrs: r,
      expose: o,
      emit: i
    } = t;
    const a = K(), l = ks(), s = Mt.useInject(), u = I(() => qo(s.status, e.status)), {
      direction: d,
      prefixCls: c,
      size: p,
      autocomplete: h
    } = pe("input", e), {
      compactSize: b,
      compactItemClassnames: m
    } = Xs(c, d), w = I(() => b.value || p.value), [v, y] = Jo(c), C = lr();
    o({
      focus: (z) => {
        var F;
        (F = a.value) === null || F === void 0 || F.focus(z);
      },
      blur: () => {
        var z;
        (z = a.value) === null || z === void 0 || z.blur();
      },
      input: a,
      setSelectionRange: (z, F, M) => {
        var B;
        (B = a.value) === null || B === void 0 || B.setSelectionRange(z, F, M);
      },
      select: () => {
        var z;
        (z = a.value) === null || z === void 0 || z.select();
      }
    });
    const E = K([]), j = () => {
      E.value.push(setTimeout(() => {
        var z, F, M, B;
        !((z = a.value) === null || z === void 0) && z.input && ((F = a.value) === null || F === void 0 ? void 0 : F.input.getAttribute("type")) === "password" && (!((M = a.value) === null || M === void 0) && M.input.hasAttribute("value")) && ((B = a.value) === null || B === void 0 || B.input.removeAttribute("value"));
      }));
    };
    ye(() => {
      j();
    }), Cu(() => {
      E.value.forEach((z) => clearTimeout(z));
    }), ze(() => {
      E.value.forEach((z) => clearTimeout(z));
    });
    const T = (z) => {
      j(), i("blur", z), l.onFieldBlur();
    }, D = (z) => {
      j(), i("focus", z);
    }, G = (z) => {
      i("update:value", z.target.value), i("change", z), i("input", z), l.onFieldChange();
    };
    return () => {
      var z, F, M, B, X, _;
      const {
        hasFeedback: O,
        feedbackIcon: A
      } = s, {
        allowClear: H,
        bordered: k = !0,
        prefix: Z = (z = n.prefix) === null || z === void 0 ? void 0 : z.call(n),
        suffix: Se = (F = n.suffix) === null || F === void 0 ? void 0 : F.call(n),
        addonAfter: ie = (M = n.addonAfter) === null || M === void 0 ? void 0 : M.call(n),
        addonBefore: Ee = (B = n.addonBefore) === null || B === void 0 ? void 0 : B.call(n),
        id: ue = (X = l.id) === null || X === void 0 ? void 0 : X.value
      } = e, Ke = hb(e, ["allowClear", "bordered", "prefix", "suffix", "addonAfter", "addonBefore", "id"]), Ze = (O || Se) && S(Te, null, [Se, O && A]), Q = c.value, yr = ni({
        prefix: Z,
        suffix: Se
      }) || !!O, wr = n.clearIcon || (() => S(vr, null, null));
      return v(S(pb, W(W(W({}, r), Pe(Ke, ["onUpdate:value", "onChange", "onInput"])), {}, {
        onChange: G,
        id: ue,
        disabled: (_ = e.disabled) !== null && _ !== void 0 ? _ : C.value,
        ref: a,
        prefixCls: Q,
        autocomplete: h.value,
        onBlur: T,
        onFocus: D,
        suffix: Ze,
        allowClear: H,
        addonAfter: ie && S(So, null, {
          default: () => [S(Ia, null, {
            default: () => [ie]
          })]
        }),
        addonBefore: Ee && S(So, null, {
          default: () => [S(Ia, null, {
            default: () => [Ee]
          })]
        }),
        class: [r.class, m.value],
        inputClassName: U({
          [`${Q}-sm`]: w.value === "small",
          [`${Q}-lg`]: w.value === "large",
          [`${Q}-rtl`]: d.value === "rtl",
          [`${Q}-borderless`]: !k
        }, !yr && Zt(Q, u.value), y.value),
        affixWrapperClassName: U({
          [`${Q}-affix-wrapper-sm`]: w.value === "small",
          [`${Q}-affix-wrapper-lg`]: w.value === "large",
          [`${Q}-affix-wrapper-rtl`]: d.value === "rtl",
          [`${Q}-affix-wrapper-borderless`]: !k
        }, Zt(`${Q}-affix-wrapper`, u.value, O), y.value),
        wrapperClassName: U({
          [`${Q}-group-rtl`]: d.value === "rtl"
        }, y.value),
        groupClassName: U({
          [`${Q}-group-wrapper-sm`]: w.value === "small",
          [`${Q}-group-wrapper-lg`]: w.value === "large",
          [`${Q}-group-wrapper-rtl`]: d.value === "rtl"
        }, Zt(`${Q}-group-wrapper`, u.value, O), y.value)
      }), f(f({}, n), {
        clearIcon: wr
      })));
    };
  }
}), gb = V({
  compatConfig: {
    MODE: 3
  },
  name: "AInputGroup",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    size: {
      type: String
    },
    compact: {
      type: Boolean,
      default: void 0
    }
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: r
    } = t;
    const {
      prefixCls: o,
      direction: i,
      getPrefixCls: a
    } = pe("input-group", e), l = Mt.useInject();
    Mt.useProvide(l, {
      isFormItemInput: !1
    });
    const s = I(() => a("input")), [u, d] = Jo(s), c = I(() => {
      const p = o.value;
      return {
        [`${p}`]: !0,
        [d.value]: !0,
        [`${p}-lg`]: e.size === "large",
        [`${p}-sm`]: e.size === "small",
        [`${p}-compact`]: e.compact,
        [`${p}-rtl`]: i.value === "rtl"
      };
    });
    return () => {
      var p;
      return u(S("span", W(W({}, r), {}, {
        class: U(c.value, r.class)
      }), [(p = n.default) === null || p === void 0 ? void 0 : p.call(n)]));
    };
  }
});
var vb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const lu = V({
  compatConfig: {
    MODE: 3
  },
  name: "AInputSearch",
  inheritAttrs: !1,
  props: f(f({}, br()), {
    inputPrefixCls: String,
    // 不能设置默认值 https://github.com/vueComponent/ant-design-vue/issues/1916
    enterButton: R.any,
    onSearch: {
      type: Function
    }
  }),
  setup(e, t) {
    let {
      slots: n,
      attrs: r,
      expose: o,
      emit: i
    } = t;
    const a = N(), l = N(!1);
    o({
      focus: () => {
        var $;
        ($ = a.value) === null || $ === void 0 || $.focus();
      },
      blur: () => {
        var $;
        ($ = a.value) === null || $ === void 0 || $.blur();
      }
    });
    const d = ($) => {
      i("update:value", $.target.value), $ && $.target && $.type === "click" && i("search", $.target.value, $), i("change", $);
    }, c = ($) => {
      var x;
      document.activeElement === ((x = a.value) === null || x === void 0 ? void 0 : x.input) && $.preventDefault();
    }, p = ($) => {
      var x, g;
      i("search", (g = (x = a.value) === null || x === void 0 ? void 0 : x.input) === null || g === void 0 ? void 0 : g.stateValue, $);
    }, h = ($) => {
      l.value || e.loading || p($);
    }, b = ($) => {
      l.value = !0, i("compositionstart", $);
    }, m = ($) => {
      l.value = !1, i("compositionend", $);
    }, {
      prefixCls: w,
      getPrefixCls: v,
      direction: y,
      size: C
    } = pe("input-search", e), P = I(() => v("input", e.inputPrefixCls));
    return () => {
      var $, x, g, E;
      const {
        disabled: j,
        loading: T,
        addonAfter: D = ($ = n.addonAfter) === null || $ === void 0 ? void 0 : $.call(n),
        suffix: G = (x = n.suffix) === null || x === void 0 ? void 0 : x.call(n)
      } = e, z = vb(e, ["disabled", "loading", "addonAfter", "suffix"]);
      let {
        enterButton: F = (E = (g = n.enterButton) === null || g === void 0 ? void 0 : g.call(n)) !== null && E !== void 0 ? E : !1
      } = e;
      F = F || F === "";
      const M = typeof F == "boolean" ? S(Uo, null, null) : null, B = `${w.value}-button`, X = Array.isArray(F) ? F[0] : F;
      let _;
      const O = X.type && xc(X.type) && X.type.__ANT_BUTTON;
      if (O || X.tagName === "button")
        _ = Oe(X, f({
          onMousedown: c,
          onClick: p,
          key: "enterButton"
        }, O ? {
          class: B,
          size: C.value
        } : {}), !1);
      else {
        const H = M && !F;
        _ = S(Qt, {
          class: B,
          type: F ? "primary" : void 0,
          size: C.value,
          disabled: j,
          key: "enterButton",
          onMousedown: c,
          onClick: p,
          loading: T,
          icon: H ? M : null
        }, {
          default: () => [H ? null : M || F]
        });
      }
      D && (_ = [_, D]);
      const A = U(w.value, {
        [`${w.value}-rtl`]: y.value === "rtl",
        [`${w.value}-${C.value}`]: !!C.value,
        [`${w.value}-with-button`]: !!F
      }, r.class);
      return S(ne, W(W(W({
        ref: a
      }, Pe(z, ["onUpdate:value", "onSearch", "enterButton"])), r), {}, {
        onPressEnter: h,
        onCompositionstart: b,
        onCompositionend: m,
        size: C.value,
        prefixCls: P.value,
        addonAfter: _,
        suffix: G,
        onChange: d,
        class: A,
        disabled: j
      }), n);
    };
  }
}), qa = (e) => e != null && (Array.isArray(e) ? ct(e).length : !0);
function mb(e) {
  return qa(e.addonBefore) || qa(e.addonAfter);
}
const bb = ["text", "input"], yb = V({
  compatConfig: {
    MODE: 3
  },
  name: "ClearableLabeledInput",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    inputType: R.oneOf(on("text", "input")),
    value: Ie(),
    defaultValue: Ie(),
    allowClear: {
      type: Boolean,
      default: void 0
    },
    element: Ie(),
    handleReset: Function,
    disabled: {
      type: Boolean,
      default: void 0
    },
    direction: {
      type: String
    },
    size: {
      type: String
    },
    suffix: Ie(),
    prefix: Ie(),
    addonBefore: Ie(),
    addonAfter: Ie(),
    readonly: {
      type: Boolean,
      default: void 0
    },
    focused: {
      type: Boolean,
      default: void 0
    },
    bordered: {
      type: Boolean,
      default: !0
    },
    triggerFocus: {
      type: Function
    },
    hidden: Boolean,
    status: String,
    hashId: String
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: r
    } = t;
    const o = Mt.useInject(), i = (l) => {
      const {
        value: s,
        disabled: u,
        readonly: d,
        handleReset: c,
        suffix: p = n.suffix
      } = e, h = !u && !d && s, b = `${l}-clear-icon`;
      return S(vr, {
        onClick: c,
        onMousedown: (m) => m.preventDefault(),
        class: U({
          [`${b}-hidden`]: !h,
          [`${b}-has-suffix`]: !!p
        }, b),
        role: "button"
      }, null);
    }, a = (l, s) => {
      const {
        value: u,
        allowClear: d,
        direction: c,
        bordered: p,
        hidden: h,
        status: b,
        addonAfter: m = n.addonAfter,
        addonBefore: w = n.addonBefore,
        hashId: v
      } = e, {
        status: y,
        hasFeedback: C
      } = o;
      if (!d)
        return Oe(s, {
          value: u,
          disabled: e.disabled
        });
      const P = U(`${l}-affix-wrapper`, `${l}-affix-wrapper-textarea-with-clear-btn`, Zt(`${l}-affix-wrapper`, qo(y, b), C), {
        [`${l}-affix-wrapper-rtl`]: c === "rtl",
        [`${l}-affix-wrapper-borderless`]: !p,
        // className will go to addon wrapper
        [`${r.class}`]: !mb({
          addonAfter: m,
          addonBefore: w
        }) && r.class
      }, v);
      return S("span", {
        class: P,
        style: r.style,
        hidden: h
      }, [Oe(s, {
        style: null,
        value: u,
        disabled: e.disabled
      }), i(l)]);
    };
    return () => {
      var l;
      const {
        prefixCls: s,
        inputType: u,
        element: d = (l = n.element) === null || l === void 0 ? void 0 : l.call(n)
      } = e;
      return u === bb[0] ? a(s, d) : null;
    };
  }
}), wb = `
 min-height:0 !important;
 max-height:none !important;
 height:0 !important;
 visibility:hidden !important;
 overflow:hidden !important;
 position:absolute !important;
 z-index:-1000 !important;
 top:0 !important;
 right:0 !important
`, Sb = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break"], Lr = {};
let ve;
function xb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && Lr[n])
    return Lr[n];
  const r = window.getComputedStyle(e), o = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"), i = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")), a = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")), s = {
    sizingStyle: Sb.map((u) => `${u}:${r.getPropertyValue(u)}`).join(";"),
    paddingSize: i,
    borderSize: a,
    boxSizing: o
  };
  return t && n && (Lr[n] = s), s;
}
function Cb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  ve || (ve = document.createElement("textarea"), ve.setAttribute("tab-index", "-1"), ve.setAttribute("aria-hidden", "true"), document.body.appendChild(ve)), e.getAttribute("wrap") ? ve.setAttribute("wrap", e.getAttribute("wrap")) : ve.removeAttribute("wrap");
  const {
    paddingSize: o,
    borderSize: i,
    boxSizing: a,
    sizingStyle: l
  } = xb(e, t);
  ve.setAttribute("style", `${l};${wb}`), ve.value = e.value || e.placeholder || "";
  let s = Number.MIN_SAFE_INTEGER, u = Number.MAX_SAFE_INTEGER, d = ve.scrollHeight, c;
  if (a === "border-box" ? d += i : a === "content-box" && (d -= o), n !== null || r !== null) {
    ve.value = " ";
    const p = ve.scrollHeight - o;
    n !== null && (s = p * n, a === "border-box" && (s = s + o + i), d = Math.max(s, d)), r !== null && (u = p * r, a === "border-box" && (u = u + o + i), c = d > u ? "" : "hidden", d = Math.min(u, d));
  }
  return {
    height: `${d}px`,
    minHeight: `${s}px`,
    maxHeight: `${u}px`,
    overflowY: c,
    resize: "none"
  };
}
const Wr = 0, Ka = 1, $b = 2, Ob = V({
  compatConfig: {
    MODE: 3
  },
  name: "ResizableTextArea",
  inheritAttrs: !1,
  props: au(),
  setup(e, t) {
    let {
      attrs: n,
      emit: r,
      expose: o
    } = t, i, a;
    const l = K(), s = K({}), u = K(Wr);
    ze(() => {
      J.cancel(i), J.cancel(a);
    });
    const d = () => {
      try {
        if (document.activeElement === l.value) {
          const w = l.value.selectionStart, v = l.value.selectionEnd;
          l.value.setSelectionRange(w, v);
        }
      } catch {
      }
    }, c = () => {
      const w = e.autoSize || e.autosize;
      if (!w || !l.value)
        return;
      const {
        minRows: v,
        maxRows: y
      } = w;
      s.value = Cb(l.value, !1, v, y), u.value = Ka, J.cancel(a), a = J(() => {
        u.value = $b, a = J(() => {
          u.value = Wr, d();
        });
      });
    }, p = () => {
      J.cancel(i), i = J(c);
    }, h = (w) => {
      if (u.value !== Wr)
        return;
      r("resize", w), (e.autoSize || e.autosize) && p();
    };
    vn(e.autosize === void 0, "Input.TextArea", "autosize is deprecated, please use autoSize instead.");
    const b = () => {
      const {
        prefixCls: w,
        autoSize: v,
        autosize: y,
        disabled: C
      } = e, P = Pe(e, ["prefixCls", "onPressEnter", "autoSize", "autosize", "defaultValue", "allowClear", "type", "lazy", "maxlength", "valueModifiers"]), $ = U(w, n.class, {
        [`${w}-disabled`]: C
      }), x = [n.style, s.value, u.value === Ka ? {
        overflowX: "hidden",
        overflowY: "hidden"
      } : null], g = f(f(f({}, P), n), {
        style: x,
        class: $
      });
      return g.autofocus || delete g.autofocus, g.rows === 0 && delete g.rows, S(Rc, {
        onResize: h,
        disabled: !(v || y)
      }, {
        default: () => [xt(S("textarea", W(W({}, g), {}, {
          ref: l
        }), null), [[Hs]])]
      });
    };
    Y(() => e.value, () => {
      te(() => {
        c();
      });
    }), ye(() => {
      te(() => {
        c();
      });
    });
    const m = Ue();
    return o({
      resizeTextarea: c,
      textArea: l,
      instance: m
    }), () => b();
  }
});
function su(e, t) {
  return [...e || ""].slice(0, t).join("");
}
function Za(e, t, n, r) {
  let o = n;
  return e ? o = su(n, r) : [...t || ""].length < n.length && [...n || ""].length > r && (o = t), o;
}
const Tb = V({
  compatConfig: {
    MODE: 3
  },
  name: "ATextarea",
  inheritAttrs: !1,
  props: au(),
  setup(e, t) {
    let {
      attrs: n,
      expose: r,
      emit: o
    } = t;
    const i = ks(), a = Mt.useInject(), l = I(() => qo(a.status, e.status)), s = N(e.value === void 0 ? e.defaultValue : e.value), u = N(), d = N(""), {
      prefixCls: c,
      size: p,
      direction: h
    } = pe("input", e), [b, m] = Jo(c), w = lr(), v = I(() => e.showCount === "" || e.showCount || !1), y = I(() => Number(e.maxlength) > 0), C = N(!1), P = N(), $ = N(0), x = (_) => {
      C.value = !0, P.value = d.value, $.value = _.currentTarget.selectionStart, o("compositionstart", _);
    }, g = (_) => {
      var O;
      C.value = !1;
      let A = _.currentTarget.value;
      if (y.value) {
        const H = $.value >= e.maxlength + 1 || $.value === ((O = P.value) === null || O === void 0 ? void 0 : O.length);
        A = Za(H, P.value, A, e.maxlength);
      }
      A !== d.value && (D(A), en(_.currentTarget, _, F, A)), o("compositionend", _);
    }, E = Ue();
    Y(() => e.value, () => {
      var _;
      "value" in E.vnode.props, s.value = (_ = e.value) !== null && _ !== void 0 ? _ : "";
    });
    const j = (_) => {
      var O;
      ru((O = u.value) === null || O === void 0 ? void 0 : O.textArea, _);
    }, T = () => {
      var _, O;
      (O = (_ = u.value) === null || _ === void 0 ? void 0 : _.textArea) === null || O === void 0 || O.blur();
    }, D = (_, O) => {
      s.value !== _ && (e.value === void 0 ? s.value = _ : te(() => {
        var A, H, k;
        u.value.textArea.value !== d.value && ((k = (A = u.value) === null || A === void 0 ? void 0 : (H = A.instance).update) === null || k === void 0 || k.call(H));
      }), te(() => {
        O && O();
      }));
    }, G = (_) => {
      _.keyCode === 13 && o("pressEnter", _), o("keydown", _);
    }, z = (_) => {
      const {
        onBlur: O
      } = e;
      O == null || O(_), i.onFieldBlur();
    }, F = (_) => {
      o("update:value", _.target.value), o("change", _), o("input", _), i.onFieldChange();
    }, M = (_) => {
      en(u.value.textArea, _, F), D("", () => {
        j();
      });
    }, B = (_) => {
      const {
        composing: O
      } = _.target;
      let A = _.target.value;
      if (C.value = !!(_.isComposing || O), !(C.value && e.lazy || s.value === A)) {
        if (y.value) {
          const H = _.target, k = H.selectionStart >= e.maxlength + 1 || H.selectionStart === A.length || !H.selectionStart;
          A = Za(k, d.value, A, e.maxlength);
        }
        en(_.currentTarget, _, F, A), D(A);
      }
    }, X = () => {
      var _, O;
      const {
        class: A
      } = n, {
        bordered: H = !0
      } = e, k = f(f(f({}, Pe(e, ["allowClear"])), n), {
        class: [{
          [`${c.value}-borderless`]: !H,
          [`${A}`]: A && !v.value,
          [`${c.value}-sm`]: p.value === "small",
          [`${c.value}-lg`]: p.value === "large"
        }, Zt(c.value, l.value), m.value],
        disabled: w.value,
        showCount: null,
        prefixCls: c.value,
        onInput: B,
        onChange: B,
        onBlur: z,
        onKeydown: G,
        onCompositionstart: x,
        onCompositionend: g
      });
      return !((_ = e.valueModifiers) === null || _ === void 0) && _.lazy && delete k.onInput, S(Ob, W(W({}, k), {}, {
        id: (O = k == null ? void 0 : k.id) !== null && O !== void 0 ? O : i.id.value,
        ref: u,
        maxlength: e.maxlength
      }), null);
    };
    return r({
      focus: j,
      blur: T,
      resizableTextArea: u
    }), ut(() => {
      let _ = Oo(s.value);
      !C.value && y.value && (e.value === null || e.value === void 0) && (_ = su(_, e.maxlength)), d.value = _;
    }), () => {
      var _;
      const {
        maxlength: O,
        bordered: A = !0,
        hidden: H
      } = e, {
        style: k,
        class: Z
      } = n, Se = f(f(f({}, e), n), {
        prefixCls: c.value,
        inputType: "text",
        handleReset: M,
        direction: h.value,
        bordered: A,
        style: v.value ? void 0 : k,
        hashId: m.value,
        disabled: (_ = e.disabled) !== null && _ !== void 0 ? _ : w.value
      });
      let ie = S(yb, W(W({}, Se), {}, {
        value: d.value,
        status: e.status
      }), {
        element: X
      });
      if (v.value || a.hasFeedback) {
        const Ee = [...d.value].length;
        let ue = "";
        typeof v.value == "object" ? ue = v.value.formatter({
          value: d.value,
          count: Ee,
          maxlength: O
        }) : ue = `${Ee}${y.value ? ` / ${O}` : ""}`, ie = S("div", {
          hidden: H,
          class: U(`${c.value}-textarea`, {
            [`${c.value}-textarea-rtl`]: h.value === "rtl",
            [`${c.value}-textarea-show-count`]: v.value,
            [`${c.value}-textarea-in-form-item`]: a.isFormItemInput
          }, `${c.value}-textarea-show-count`, Z, m.value),
          style: k,
          "data-count": typeof ue != "object" ? ue : void 0
        }, [ie, a.hasFeedback && S("span", {
          class: `${c.value}-textarea-suffix`
        }, [a.feedbackIcon])]);
      }
      return b(ie);
    };
  }
});
var Pb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const _b = {
  click: "onClick",
  hover: "onMouseover"
}, Eb = (e) => e ? S(ti, null, null) : S(ei, null, null), Ab = V({
  compatConfig: {
    MODE: 3
  },
  name: "AInputPassword",
  inheritAttrs: !1,
  props: f(f({}, br()), {
    prefixCls: String,
    inputPrefixCls: String,
    action: {
      type: String,
      default: "click"
    },
    visibilityToggle: {
      type: Boolean,
      default: !0
    },
    iconRender: Function
  }),
  setup(e, t) {
    let {
      slots: n,
      attrs: r,
      expose: o
    } = t;
    const i = N(!1), a = () => {
      const {
        disabled: m
      } = e;
      m || (i.value = !i.value);
    }, l = N();
    o({
      focus: () => {
        var m;
        (m = l.value) === null || m === void 0 || m.focus();
      },
      blur: () => {
        var m;
        (m = l.value) === null || m === void 0 || m.blur();
      }
    });
    const d = (m) => {
      const {
        action: w,
        iconRender: v = n.iconRender || Eb
      } = e, y = _b[w] || "", C = v(i.value), P = {
        [y]: a,
        class: `${m}-icon`,
        key: "passwordIcon",
        onMousedown: ($) => {
          $.preventDefault();
        },
        onMouseup: ($) => {
          $.preventDefault();
        }
      };
      return Oe(Sl(C) ? C : S("span", null, [C]), P);
    }, {
      prefixCls: c,
      getPrefixCls: p
    } = pe("input-password", e), h = I(() => p("input", e.inputPrefixCls)), b = () => {
      const {
        size: m,
        visibilityToggle: w
      } = e, v = Pb(e, ["size", "visibilityToggle"]), y = w && d(c.value), C = U(c.value, r.class, {
        [`${c.value}-${m}`]: !!m
      }), P = f(f(f({}, Pe(v, ["suffix", "iconRender", "action"])), r), {
        type: i.value ? "text" : "password",
        class: C,
        prefixCls: h.value,
        suffix: y
      });
      return m && (P.size = m), S(ne, W({
        ref: l
      }, P), n);
    };
    return () => b();
  }
});
ne.Group = gb;
ne.Search = lu;
ne.TextArea = Tb;
ne.Password = Ab;
ne.install = function(e) {
  return e.component(ne.name, ne), e.component(ne.Group.name, ne.Group), e.component(ne.Search.name, ne.Search), e.component(ne.TextArea.name, ne.TextArea), e.component(ne.Password.name, ne.Password), e;
};
var Ib = Symbol("iconContext"), uu = function() {
  return se(Ib, {
    prefixCls: K("anticon"),
    rootClassName: K(""),
    csp: K()
  });
};
function ri() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Mb(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
var Qa = "data-vc-order", Rb = "vc-icon-key", To = /* @__PURE__ */ new Map();
function cu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Rb;
}
function oi(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function jb(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function du(e) {
  return Array.from((To.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function fu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!ri())
    return null;
  var n = t.csp, r = t.prepend, o = document.createElement("style");
  o.setAttribute(Qa, jb(r)), n && n.nonce && (o.nonce = n.nonce), o.innerHTML = e;
  var i = oi(t), a = i.firstChild;
  if (r) {
    if (r === "queue") {
      var l = du(i).filter(function(s) {
        return ["prepend", "prependQueue"].includes(s.getAttribute(Qa));
      });
      if (l.length)
        return i.insertBefore(o, l[l.length - 1].nextSibling), o;
    }
    i.insertBefore(o, a);
  } else
    i.appendChild(o);
  return o;
}
function Db(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = oi(t);
  return du(n).find(function(r) {
    return r.getAttribute(cu(t)) === e;
  });
}
function zb(e, t) {
  var n = To.get(e);
  if (!n || !Mb(document, n)) {
    var r = fu("", t), o = r.parentNode;
    To.set(e, o), e.removeChild(r);
  }
}
function Bb(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = oi(n);
  zb(r, n);
  var o = Db(t, n);
  if (o)
    return n.csp && n.csp.nonce && o.nonce !== n.csp.nonce && (o.nonce = n.csp.nonce), o.innerHTML !== e && (o.innerHTML = e), o;
  var i = fu(e, n);
  return i.setAttribute(cu(n), t), i;
}
function Ja(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Nb(e, o, n[o]);
    });
  }
  return e;
}
function Nb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Hb(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function Fb(e, t) {
  Hb(e, "[@ant-design/icons-vue] ".concat(t));
}
function el(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Po(e, t, n) {
  return n ? nn(e.tag, Ja({
    key: t
  }, n, e.attrs), (e.children || []).map(function(r, o) {
    return Po(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : nn(e.tag, Ja({
    key: t
  }, e.attrs), (e.children || []).map(function(r, o) {
    return Po(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function pu(e) {
  return Et(e)[0];
}
function hu(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Lb = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
function gu(e) {
  return e && e.getRootNode && e.getRootNode();
}
function Wb(e) {
  return ri() ? gu(e) instanceof ShadowRoot : !1;
}
function kb(e) {
  return Wb(e) ? gu(e) : null;
}
var Vb = function() {
  var t = uu(), n = t.prefixCls, r = t.csp, o = Ue(), i = Lb;
  n && (i = i.replace(/anticon/g, n.value)), te(function() {
    if (ri()) {
      var a = o.vnode.el, l = kb(a);
      Bb(i, "@ant-design-vue-icons", {
        prepend: !0,
        csp: r.value,
        attachTo: l
      });
    }
  });
}, Xb = ["icon", "primaryColor", "secondaryColor"];
function Gb(e, t) {
  if (e == null) return {};
  var n = Ub(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ub(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Yb(e, o, n[o]);
    });
  }
  return e;
}
function Yb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var tn = it({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function qb(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  tn.primaryColor = t, tn.secondaryColor = n || pu(t), tn.calculated = !!n;
}
function Kb() {
  return Ln({}, tn);
}
var qe = function(t, n) {
  var r = Ln({}, t, n.attrs), o = r.icon, i = r.primaryColor, a = r.secondaryColor, l = Gb(r, Xb), s = tn;
  if (i && (s = {
    primaryColor: i,
    secondaryColor: a || pu(i)
  }), Fb(el(o), "icon should be icon definiton, but got ".concat(o)), !el(o))
    return null;
  var u = o;
  return u && typeof u.icon == "function" && (u = Ln({}, u, {
    icon: u.icon(s.primaryColor, s.secondaryColor)
  })), Po(u.icon, "svg-".concat(u.name), Ln({}, l, {
    "data-icon": u.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
qe.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
qe.inheritAttrs = !1;
qe.displayName = "IconBase";
qe.getTwoToneColors = Kb;
qe.setTwoToneColors = qb;
function Zb(e, t) {
  return ty(e) || ey(e, t) || Jb(e, t) || Qb();
}
function Qb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jb(e, t) {
  if (e) {
    if (typeof e == "string") return tl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tl(e, t);
  }
}
function tl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ey(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, i = !1, a, l;
    try {
      for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0)
        ;
    } catch (s) {
      i = !0, l = s;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i) throw l;
      }
    }
    return r;
  }
}
function ty(e) {
  if (Array.isArray(e)) return e;
}
function vu(e) {
  var t = hu(e), n = Zb(t, 2), r = n[0], o = n[1];
  return qe.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function ny() {
  var e = qe.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var ry = V({
  name: "InsertStyles",
  setup: function() {
    return Vb(), function() {
      return null;
    };
  }
}), oy = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function iy(e, t) {
  return uy(e) || sy(e, t) || ly(e, t) || ay();
}
function ay() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ly(e, t) {
  if (e) {
    if (typeof e == "string") return nl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nl(e, t);
  }
}
function nl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function sy(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, i = !1, a, l;
    try {
      for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0)
        ;
    } catch (s) {
      i = !0, l = s;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i) throw l;
      }
    }
    return r;
  }
}
function uy(e) {
  if (Array.isArray(e)) return e;
}
function rl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Gt(e, o, n[o]);
    });
  }
  return e;
}
function Gt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function cy(e, t) {
  if (e == null) return {};
  var n = dy(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function dy(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
vu(Jd.primary);
var zt = function(t, n) {
  var r, o = rl({}, t, n.attrs), i = o.class, a = o.icon, l = o.spin, s = o.rotate, u = o.tabindex, d = o.twoToneColor, c = o.onClick, p = cy(o, oy), h = uu(), b = h.prefixCls, m = h.rootClassName, w = (r = {}, Gt(r, m.value, !!m.value), Gt(r, b.value, !0), Gt(r, "".concat(b.value, "-").concat(a.name), !!a.name), Gt(r, "".concat(b.value, "-spin"), !!l || a.name === "loading"), r), v = u;
  v === void 0 && c && (v = -1);
  var y = s ? {
    msTransform: "rotate(".concat(s, "deg)"),
    transform: "rotate(".concat(s, "deg)")
  } : void 0, C = hu(d), P = iy(C, 2), $ = P[0], x = P[1];
  return S("span", rl({
    role: "img",
    "aria-label": a.name
  }, p, {
    onClick: c,
    class: [w, i],
    tabindex: v
  }), [S(qe, {
    icon: a,
    primaryColor: $,
    secondaryColor: x,
    style: y
  }, null), S(ry, null, null)]);
};
zt.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
zt.displayName = "AntdIcon";
zt.inheritAttrs = !1;
zt.getTwoToneColor = ny;
zt.setTwoToneColor = vu;
function ol(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      fy(e, o, n[o]);
    });
  }
  return e;
}
function fy(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ii = function(t, n) {
  var r = ol({}, t, n.attrs);
  return S(zt, ol({}, r, {
    icon: Hm
  }), null);
};
ii.displayName = "CheckCircleFilled";
ii.inheritAttrs = !1;
const py = { class: "main" }, hy = {
  key: 0,
  class: "item"
}, gy = { class: "item-list" }, vy = ["onClick"], my = { class: "com-hover" }, by = /* @__PURE__ */ V({
  __name: "SystemMenu",
  props: {
    menus: {}
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, r = it({
      keyword: ""
    }), { keyword: o } = $u(r), i = K(!1), a = t, l = I(() => r.keyword ? n.menus.filter((h) => h.name.indexOf(r.keyword) !== -1) : n.menus), s = window.location.hostname;
    function u(h, b) {
      i.value = !0;
    }
    function d() {
      i.value = !1;
    }
    function c(h) {
      const { currentSystem: b, exteriorUrl: m } = h;
      b || m && m.includes(s) || a("change", h);
    }
    function p(h) {
      const { currentSystem: b, exteriorUrl: m } = h;
      if (m && m.includes(s) || !m && b)
        return !0;
    }
    return (h, b) => {
      const m = Ou("jnpf-empty");
      return Bt(), bn(Te, null, [
        S(vt(i0), {
          title: "应用切换",
          placement: "bottom"
        }, {
          default: li(() => [
            Nt("div", {
              class: "system-action",
              onClick: b[0] || (b[0] = (w) => u(!0, { list: h.menus }))
            }, b[2] || (b[2] = [
              Nt("i", { class: "icon-system-toggle" }, null, -1)
            ]))
          ]),
          _: 1
        }),
        S(vt(ub), {
          title: "切换应用",
          placement: "right",
          open: i.value,
          width: "280px",
          class: "system-toggle-drawer",
          onClose: d
        }, {
          default: li(() => [
            S(vt(lu), {
              placeholder: "搜索：请输入关键词",
              allowClear: "",
              value: vt(o),
              "onUpdate:value": b[1] || (b[1] = (w) => al(o) ? o.value = w : null)
            }, null, 8, ["value"]),
            Nt("div", py, [
              l.value.length ? (Bt(), bn("div", hy, [
                Nt("div", gy, [
                  (Bt(!0), bn(Te, null, Pu(l.value, (w, v) => (Bt(), bn("div", {
                    class: _u(["item-list-item", { active: p(w) }]),
                    key: v,
                    onClick: (y) => c(w)
                  }, [
                    Nt("p", my, Eu(w.name), 1),
                    S(vt(ii), { class: "icon" })
                  ], 10, vy))), 128))
                ])
              ])) : (Bt(), Tu(m, { key: 1 }))
            ])
          ]),
          _: 1
        }, 8, ["open"])
      ], 64);
    };
  }
}), wy = {
  install(e) {
    e.component("ZXAppSwitchNav", by);
  }
};
export {
  wy as default
};
