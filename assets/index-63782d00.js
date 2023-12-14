function Eg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function ip(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var op = { exports: {} },
  Vl = {},
  lp = { exports: {} },
  le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var io = Symbol.for("react.element"),
  kg = Symbol.for("react.portal"),
  Cg = Symbol.for("react.fragment"),
  _g = Symbol.for("react.strict_mode"),
  Pg = Symbol.for("react.profiler"),
  Tg = Symbol.for("react.provider"),
  Og = Symbol.for("react.context"),
  Ng = Symbol.for("react.forward_ref"),
  Lg = Symbol.for("react.suspense"),
  jg = Symbol.for("react.memo"),
  Ig = Symbol.for("react.lazy"),
  sd = Symbol.iterator;
function Mg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (sd && e[sd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var sp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ap = Object.assign,
  up = {};
function Hr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = up),
    (this.updater = n || sp);
}
Hr.prototype.isReactComponent = {};
Hr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function cp() {}
cp.prototype = Hr.prototype;
function Cu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = up),
    (this.updater = n || sp);
}
var _u = (Cu.prototype = new cp());
_u.constructor = Cu;
ap(_u, Hr.prototype);
_u.isPureReactComponent = !0;
var ad = Array.isArray,
  dp = Object.prototype.hasOwnProperty,
  Pu = { current: null },
  fp = { key: !0, ref: !0, __self: !0, __source: !0 };
function pp(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      dp.call(t, r) && !fp.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var a = Array(s), c = 0; c < s; c++) a[c] = arguments[c + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: io,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Pu.current,
  };
}
function Rg(e, t) {
  return {
    $$typeof: io,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Tu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === io;
}
function Ag(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ud = /\/+/g;
function Is(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ag("" + e.key)
    : t.toString(36);
}
function Bo(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case io:
          case kg:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + Is(l, 0) : r),
      ad(i)
        ? ((n = ""),
          e != null && (n = e.replace(ud, "$&/") + "/"),
          Bo(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (Tu(i) &&
            (i = Rg(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ud, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), ad(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var a = r + Is(o, s);
      l += Bo(o, t, n, a, i);
    }
  else if (((a = Mg(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Is(o, s++)), (l += Bo(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Eo(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Bo(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Fg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var rt = { current: null },
  Wo = { transition: null },
  $g = {
    ReactCurrentDispatcher: rt,
    ReactCurrentBatchConfig: Wo,
    ReactCurrentOwner: Pu,
  };
le.Children = {
  map: Eo,
  forEach: function (e, t, n) {
    Eo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Eo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Eo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Tu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
le.Component = Hr;
le.Fragment = Cg;
le.Profiler = Pg;
le.PureComponent = Cu;
le.StrictMode = _g;
le.Suspense = Lg;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $g;
le.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ap({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = Pu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      dp.call(t, a) &&
        !fp.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var c = 0; c < a; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: io, type: e.type, key: i, ref: o, props: r, _owner: l };
};
le.createContext = function (e) {
  return (
    (e = {
      $$typeof: Og,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Tg, _context: e }),
    (e.Consumer = e)
  );
};
le.createElement = pp;
le.createFactory = function (e) {
  var t = pp.bind(null, e);
  return (t.type = e), t;
};
le.createRef = function () {
  return { current: null };
};
le.forwardRef = function (e) {
  return { $$typeof: Ng, render: e };
};
le.isValidElement = Tu;
le.lazy = function (e) {
  return { $$typeof: Ig, _payload: { _status: -1, _result: e }, _init: Fg };
};
le.memo = function (e, t) {
  return { $$typeof: jg, type: e, compare: t === void 0 ? null : t };
};
le.startTransition = function (e) {
  var t = Wo.transition;
  Wo.transition = {};
  try {
    e();
  } finally {
    Wo.transition = t;
  }
};
le.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
le.useCallback = function (e, t) {
  return rt.current.useCallback(e, t);
};
le.useContext = function (e) {
  return rt.current.useContext(e);
};
le.useDebugValue = function () {};
le.useDeferredValue = function (e) {
  return rt.current.useDeferredValue(e);
};
le.useEffect = function (e, t) {
  return rt.current.useEffect(e, t);
};
le.useId = function () {
  return rt.current.useId();
};
le.useImperativeHandle = function (e, t, n) {
  return rt.current.useImperativeHandle(e, t, n);
};
le.useInsertionEffect = function (e, t) {
  return rt.current.useInsertionEffect(e, t);
};
le.useLayoutEffect = function (e, t) {
  return rt.current.useLayoutEffect(e, t);
};
le.useMemo = function (e, t) {
  return rt.current.useMemo(e, t);
};
le.useReducer = function (e, t, n) {
  return rt.current.useReducer(e, t, n);
};
le.useRef = function (e) {
  return rt.current.useRef(e);
};
le.useState = function (e) {
  return rt.current.useState(e);
};
le.useSyncExternalStore = function (e, t, n) {
  return rt.current.useSyncExternalStore(e, t, n);
};
le.useTransition = function () {
  return rt.current.useTransition();
};
le.version = "18.2.0";
lp.exports = le;
var N = lp.exports;
const H = ip(N),
  Dg = Eg({ __proto__: null, default: H }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zg = N,
  Vg = Symbol.for("react.element"),
  Ug = Symbol.for("react.fragment"),
  bg = Object.prototype.hasOwnProperty,
  Bg = zg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Wg = { key: !0, ref: !0, __self: !0, __source: !0 };
function hp(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) bg.call(t, r) && !Wg.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Vg,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Bg.current,
  };
}
Vl.Fragment = Ug;
Vl.jsx = hp;
Vl.jsxs = hp;
op.exports = Vl;
var T = op.exports;
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ai() {
  return (
    (Ai = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ai.apply(this, arguments)
  );
}
var En;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(En || (En = {}));
const cd = "popstate";
function Qg(e) {
  e === void 0 && (e = {});
  function t(i, o) {
    let {
      pathname: l = "/",
      search: s = "",
      hash: a = "",
    } = sr(i.location.hash.substr(1));
    return (
      !l.startsWith("/") && !l.startsWith(".") && (l = "/" + l),
      va(
        "",
        { pathname: l, search: s, hash: a },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default"
      )
    );
  }
  function n(i, o) {
    let l = i.document.querySelector("base"),
      s = "";
    if (l && l.getAttribute("href")) {
      let a = i.location.href,
        c = a.indexOf("#");
      s = c === -1 ? a : a.slice(0, c);
    }
    return s + "#" + (typeof o == "string" ? o : sl(o));
  }
  function r(i, o) {
    Ul(
      i.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(o) +
        ")"
    );
  }
  return qg(t, n, r, e);
}
function Ae(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ul(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Hg() {
  return Math.random().toString(36).substr(2, 8);
}
function dd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function va(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ai(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? sr(t) : t,
      { state: n, key: (t && t.key) || r || Hg() }
    )
  );
}
function sl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function sr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function qg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    s = En.Pop,
    a = null,
    c = p();
  c == null && ((c = 0), l.replaceState(Ai({}, l.state, { idx: c }), ""));
  function p() {
    return (l.state || { idx: null }).idx;
  }
  function v() {
    s = En.Pop;
    let D = p(),
      m = D == null ? null : D - c;
    (c = D), a && a({ action: s, location: k.location, delta: m });
  }
  function w(D, m) {
    s = En.Push;
    let f = va(k.location, D, m);
    n && n(f, D), (c = p() + 1);
    let g = dd(f, c),
      P = k.createHref(f);
    try {
      l.pushState(g, "", P);
    } catch (I) {
      if (I instanceof DOMException && I.name === "DataCloneError") throw I;
      i.location.assign(P);
    }
    o && a && a({ action: s, location: k.location, delta: 1 });
  }
  function E(D, m) {
    s = En.Replace;
    let f = va(k.location, D, m);
    n && n(f, D), (c = p());
    let g = dd(f, c),
      P = k.createHref(f);
    l.replaceState(g, "", P),
      o && a && a({ action: s, location: k.location, delta: 0 });
  }
  function S(D) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      f = typeof D == "string" ? D : sl(D);
    return (
      Ae(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, m)
    );
  }
  let k = {
    get action() {
      return s;
    },
    get location() {
      return e(i, l);
    },
    listen(D) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(cd, v),
        (a = D),
        () => {
          i.removeEventListener(cd, v), (a = null);
        }
      );
    },
    createHref(D) {
      return t(i, D);
    },
    createURL: S,
    encodeLocation(D) {
      let m = S(D);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: w,
    replace: E,
    go(D) {
      return l.go(D);
    },
  };
  return k;
}
var fd;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(fd || (fd = {}));
function Kg(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? sr(t) : t,
    i = Ou(r.pathname || "/", n);
  if (i == null) return null;
  let o = mp(e);
  Gg(o);
  let l = null;
  for (let s = 0; l == null && s < o.length; ++s) l = iv(o[s], sv(i));
  return l;
}
function mp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, l, s) => {
    let a = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (Ae(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let c = Tn([r, a.relativePath]),
      p = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (Ae(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      mp(o.children, t, p, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: nv(c, o.index), routesMeta: p });
  };
  return (
    e.forEach((o, l) => {
      var s;
      if (o.path === "" || !((s = o.path) != null && s.includes("?"))) i(o, l);
      else for (let a of gp(o.path)) i(o, l, a);
    }),
    t
  );
}
function gp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let l = gp(r.join("/")),
    s = [];
  return (
    s.push(...l.map((a) => (a === "" ? o : [o, a].join("/")))),
    i && s.push(...l),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Gg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : rv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Yg = /^:\w+$/,
  Xg = 3,
  Jg = 2,
  Zg = 1,
  ev = 10,
  tv = -2,
  pd = (e) => e === "*";
function nv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(pd) && (r += tv),
    t && (r += Jg),
    n
      .filter((i) => !pd(i))
      .reduce((i, o) => i + (Yg.test(o) ? Xg : o === "" ? Zg : ev), r)
  );
}
function rv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function iv(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      a = l === n.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      p = ov(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        c
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let v = s.route;
    o.push({
      params: r,
      pathname: Tn([i, p.pathname]),
      pathnameBase: dv(Tn([i, p.pathnameBase])),
      route: v,
    }),
      p.pathnameBase !== "/" && (i = Tn([i, p.pathnameBase]));
  }
  return o;
}
function ov(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = lv(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, "$1"),
    s = i.slice(1);
  return {
    params: r.reduce((c, p, v) => {
      if (p === "*") {
        let w = s[v] || "";
        l = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      return (c[p] = av(s[v] || "", p)), c;
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function lv(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ul(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (l, s) => (r.push(s), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function sv(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Ul(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function av(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Ul(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Ou(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function uv(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? sr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : cv(n, t)) : t,
    search: fv(r),
    hash: pv(i),
  };
}
function cv(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ms(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function vp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function yp(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = sr(e))
    : ((i = Ai({}, e)),
      Ae(
        !i.pathname || !i.pathname.includes("?"),
        Ms("?", "pathname", "search", i)
      ),
      Ae(
        !i.pathname || !i.pathname.includes("#"),
        Ms("#", "pathname", "hash", i)
      ),
      Ae(!i.search || !i.search.includes("#"), Ms("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    l = o ? "/" : i.pathname,
    s;
  if (r || l == null) s = n;
  else {
    let v = t.length - 1;
    if (l.startsWith("..")) {
      let w = l.split("/");
      for (; w[0] === ".."; ) w.shift(), (v -= 1);
      i.pathname = w.join("/");
    }
    s = v >= 0 ? t[v] : "/";
  }
  let a = uv(i, s),
    c = l && l !== "/" && l.endsWith("/"),
    p = (o || l === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (c || p) && (a.pathname += "/"), a;
}
const Tn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  dv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  fv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  pv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function hv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const wp = ["post", "put", "patch", "delete"];
new Set(wp);
const mv = ["get", ...wp];
new Set(mv);
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function al() {
  return (
    (al = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    al.apply(this, arguments)
  );
}
const Nu = N.createContext(null),
  gv = N.createContext(null),
  qr = N.createContext(null),
  bl = N.createContext(null),
  ar = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  xp = N.createContext(null);
function vv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  oo() || Ae(!1);
  let { basename: r, navigator: i } = N.useContext(qr),
    { hash: o, pathname: l, search: s } = Ep(e, { relative: n }),
    a = l;
  return (
    r !== "/" && (a = l === "/" ? r : Tn([r, l])),
    i.createHref({ pathname: a, search: s, hash: o })
  );
}
function oo() {
  return N.useContext(bl) != null;
}
function Bl() {
  return oo() || Ae(!1), N.useContext(bl).location;
}
function Sp(e) {
  N.useContext(qr).static || N.useLayoutEffect(e);
}
function yv() {
  let { isDataRoute: e } = N.useContext(ar);
  return e ? jv() : wv();
}
function wv() {
  oo() || Ae(!1);
  let e = N.useContext(Nu),
    { basename: t, navigator: n } = N.useContext(qr),
    { matches: r } = N.useContext(ar),
    { pathname: i } = Bl(),
    o = JSON.stringify(vp(r).map((a) => a.pathnameBase)),
    l = N.useRef(!1);
  return (
    Sp(() => {
      l.current = !0;
    }),
    N.useCallback(
      function (a, c) {
        if ((c === void 0 && (c = {}), !l.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let p = yp(a, JSON.parse(o), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : Tn([t, p.pathname])),
          (c.replace ? n.replace : n.push)(p, c.state, c);
      },
      [t, n, o, i, e]
    )
  );
}
function Ep(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = N.useContext(ar),
    { pathname: i } = Bl(),
    o = JSON.stringify(vp(r).map((l) => l.pathnameBase));
  return N.useMemo(() => yp(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function xv(e, t) {
  return Sv(e, t);
}
function Sv(e, t, n) {
  oo() || Ae(!1);
  let { navigator: r } = N.useContext(qr),
    { matches: i } = N.useContext(ar),
    o = i[i.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : "/";
  o && o.route;
  let a = Bl(),
    c;
  if (t) {
    var p;
    let k = typeof t == "string" ? sr(t) : t;
    s === "/" || ((p = k.pathname) != null && p.startsWith(s)) || Ae(!1),
      (c = k);
  } else c = a;
  let v = c.pathname || "/",
    w = s === "/" ? v : v.slice(s.length) || "/",
    E = Kg(e, { pathname: w }),
    S = Pv(
      E &&
        E.map((k) =>
          Object.assign({}, k, {
            params: Object.assign({}, l, k.params),
            pathname: Tn([
              s,
              r.encodeLocation
                ? r.encodeLocation(k.pathname).pathname
                : k.pathname,
            ]),
            pathnameBase:
              k.pathnameBase === "/"
                ? s
                : Tn([
                    s,
                    r.encodeLocation
                      ? r.encodeLocation(k.pathnameBase).pathname
                      : k.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && S
    ? N.createElement(
        bl.Provider,
        {
          value: {
            location: al(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: En.Pop,
          },
        },
        S
      )
    : S;
}
function Ev() {
  let e = Lv(),
    t = hv(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? N.createElement("pre", { style: i }, n) : null,
    o
  );
}
const kv = N.createElement(Ev, null);
class Cv extends N.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? N.createElement(
          ar.Provider,
          { value: this.props.routeContext },
          N.createElement(xp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function _v(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = N.useContext(Nu);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(ar.Provider, { value: t }, r)
  );
}
function Pv(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    l = (r = n) == null ? void 0 : r.errors;
  if (l != null) {
    let s = o.findIndex(
      (a) => a.route.id && (l == null ? void 0 : l[a.route.id])
    );
    s >= 0 || Ae(!1), (o = o.slice(0, Math.min(o.length, s + 1)));
  }
  return o.reduceRight((s, a, c) => {
    let p = a.route.id ? (l == null ? void 0 : l[a.route.id]) : null,
      v = null;
    n && (v = a.route.errorElement || kv);
    let w = t.concat(o.slice(0, c + 1)),
      E = () => {
        let S;
        return (
          p
            ? (S = v)
            : a.route.Component
            ? (S = N.createElement(a.route.Component, null))
            : a.route.element
            ? (S = a.route.element)
            : (S = s),
          N.createElement(_v, {
            match: a,
            routeContext: { outlet: s, matches: w, isDataRoute: n != null },
            children: S,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || c === 0)
      ? N.createElement(Cv, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: p,
          children: E(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
        })
      : E();
  }, null);
}
var kp = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(kp || {}),
  ul = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ul || {});
function Tv(e) {
  let t = N.useContext(Nu);
  return t || Ae(!1), t;
}
function Ov(e) {
  let t = N.useContext(gv);
  return t || Ae(!1), t;
}
function Nv(e) {
  let t = N.useContext(ar);
  return t || Ae(!1), t;
}
function Cp(e) {
  let t = Nv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ae(!1), n.route.id;
}
function Lv() {
  var e;
  let t = N.useContext(xp),
    n = Ov(ul.UseRouteError),
    r = Cp(ul.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function jv() {
  let { router: e } = Tv(kp.UseNavigateStable),
    t = Cp(ul.UseNavigateStable),
    n = N.useRef(!1);
  return (
    Sp(() => {
      n.current = !0;
    }),
    N.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, al({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function ya(e) {
  Ae(!1);
}
function Iv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = En.Pop,
    navigator: o,
    static: l = !1,
  } = e;
  oo() && Ae(!1);
  let s = t.replace(/^\/*/, "/"),
    a = N.useMemo(() => ({ basename: s, navigator: o, static: l }), [s, o, l]);
  typeof r == "string" && (r = sr(r));
  let {
      pathname: c = "/",
      search: p = "",
      hash: v = "",
      state: w = null,
      key: E = "default",
    } = r,
    S = N.useMemo(() => {
      let k = Ou(c, s);
      return k == null
        ? null
        : {
            location: { pathname: k, search: p, hash: v, state: w, key: E },
            navigationType: i,
          };
    }, [s, c, p, v, w, E, i]);
  return S == null
    ? null
    : N.createElement(
        qr.Provider,
        { value: a },
        N.createElement(bl.Provider, { children: n, value: S })
      );
}
function Mv(e) {
  let { children: t, location: n } = e;
  return xv(wa(t), n);
}
new Promise(() => {});
function wa(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    N.Children.forEach(e, (r, i) => {
      if (!N.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === N.Fragment) {
        n.push.apply(n, wa(r.props.children, o));
        return;
      }
      r.type !== ya && Ae(!1), !r.props.index || !r.props.children || Ae(!1);
      let l = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = wa(r.props.children, o)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xa() {
  return (
    (xa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xa.apply(this, arguments)
  );
}
function Rv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Av(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Fv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Av(e);
}
const $v = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  Dv = "startTransition",
  hd = Dg[Dv];
function zv(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = N.useRef();
  o.current == null && (o.current = Qg({ window: i, v5Compat: !0 }));
  let l = o.current,
    [s, a] = N.useState({ action: l.action, location: l.location }),
    { v7_startTransition: c } = r || {},
    p = N.useCallback(
      (v) => {
        c && hd ? hd(() => a(v)) : a(v);
      },
      [a, c]
    );
  return (
    N.useLayoutEffect(() => l.listen(p), [l, p]),
    N.createElement(Iv, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: l,
    })
  );
}
const Vv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Uv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  bv = N.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: l,
        state: s,
        target: a,
        to: c,
        preventScrollReset: p,
      } = t,
      v = Rv(t, $v),
      { basename: w } = N.useContext(qr),
      E,
      S = !1;
    if (typeof c == "string" && Uv.test(c) && ((E = c), Vv))
      try {
        let f = new URL(window.location.href),
          g = c.startsWith("//") ? new URL(f.protocol + c) : new URL(c),
          P = Ou(g.pathname, w);
        g.origin === f.origin && P != null
          ? (c = P + g.search + g.hash)
          : (S = !0);
      } catch {}
    let k = vv(c, { relative: i }),
      D = Bv(c, {
        replace: l,
        state: s,
        target: a,
        preventScrollReset: p,
        relative: i,
      });
    function m(f) {
      r && r(f), f.defaultPrevented || D(f);
    }
    return N.createElement(
      "a",
      xa({}, v, { href: E || k, onClick: S || o ? r : m, ref: n, target: a })
    );
  });
var md;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(md || (md = {}));
var gd;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(gd || (gd = {}));
function Bv(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: l,
    } = t === void 0 ? {} : t,
    s = yv(),
    a = Bl(),
    c = Ep(e, { relative: l });
  return N.useCallback(
    (p) => {
      if (Fv(p, n)) {
        p.preventDefault();
        let v = r !== void 0 ? r : sl(a) === sl(c);
        s(e, { replace: v, state: i, preventScrollReset: o, relative: l });
      }
    },
    [a, s, c, r, i, n, e, o, l]
  );
}
var _p = {};
function Wv(e) {
  if (!e || typeof window > "u") return;
  const t = document.createElement("style");
  return (
    t.setAttribute("type", "text/css"),
    (t.innerHTML = e),
    document.head.appendChild(t),
    e
  );
}
Object.defineProperty(_p, "__esModule", { value: !0 });
var Te = N;
function Qv(e) {
  return e && typeof e == "object" && "default" in e ? e : { default: e };
}
var gn = Qv(Te);
Wv(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), transparent);
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);
const Hv = Te.forwardRef(function (
  {
    style: t = {},
    className: n = "",
    autoFill: r = !1,
    play: i = !0,
    pauseOnHover: o = !1,
    pauseOnClick: l = !1,
    direction: s = "left",
    speed: a = 50,
    delay: c = 0,
    loop: p = 0,
    gradient: v = !1,
    gradientColor: w = "white",
    gradientWidth: E = 200,
    onFinish: S,
    onCycleComplete: k,
    onMount: D,
    children: m,
  },
  f
) {
  const [g, P] = Te.useState(0),
    [I, _] = Te.useState(0),
    [L, R] = Te.useState(1),
    [J, W] = Te.useState(!1),
    xe = Te.useRef(null),
    Pe = f || xe,
    Fe = Te.useRef(null),
    xt = Te.useCallback(() => {
      if (Fe.current && Pe.current) {
        const Q = Pe.current.getBoundingClientRect(),
          oe = Fe.current.getBoundingClientRect();
        let ge = Q.width,
          pe = oe.width;
        (s === "up" || s === "down") && ((ge = Q.height), (pe = oe.height)),
          R(r && ge && pe && pe < ge ? Math.ceil(ge / pe) : 1),
          P(ge),
          _(pe);
      }
    }, [r, Pe, s]);
  Te.useEffect(() => {
    if (J && (xt(), Fe.current && Pe.current)) {
      const Q = new ResizeObserver(() => xt());
      return (
        Q.observe(Pe.current),
        Q.observe(Fe.current),
        () => {
          Q && Q.disconnect();
        }
      );
    }
  }, [xt, Pe, J]),
    Te.useEffect(() => {
      xt();
    }, [xt, m]),
    Te.useEffect(() => {
      W(!0);
    }, []),
    Te.useEffect(() => {
      typeof D == "function" && D();
    }, []);
  const pn = Te.useMemo(
      () => (r ? (I * L) / a : I < g ? g / a : I / a),
      [r, g, I, L, a]
    ),
    qe = Te.useMemo(
      () =>
        Object.assign(Object.assign({}, t), {
          "--pause-on-hover": !i || o ? "paused" : "running",
          "--pause-on-click": !i || (o && !l) || l ? "paused" : "running",
          "--width": s === "up" || s === "down" ? "100vh" : "100%",
          "--transform":
            s === "up"
              ? "rotate(-90deg)"
              : s === "down"
              ? "rotate(90deg)"
              : "none",
        }),
      [t, i, o, l, s]
    ),
    F = Te.useMemo(
      () => ({
        "--gradient-color": w,
        "--gradient-width": typeof E == "number" ? `${E}px` : E,
      }),
      [w, E]
    ),
    x = Te.useMemo(
      () => ({
        "--play": i ? "running" : "paused",
        "--direction": s === "left" ? "normal" : "reverse",
        "--duration": `${pn}s`,
        "--delay": `${c}s`,
        "--iteration-count": p ? `${p}` : "infinite",
        "--min-width": r ? "auto" : "100%",
      }),
      [i, s, pn, c, p, r]
    ),
    M = Te.useMemo(
      () => ({
        "--transform":
          s === "up"
            ? "rotate(90deg)"
            : s === "down"
            ? "rotate(-90deg)"
            : "none",
      }),
      [s]
    ),
    U = Te.useCallback(
      (Q) =>
        [...Array(Number.isFinite(Q) && Q >= 0 ? Q : 0)].map((oe, ge) =>
          gn.default.createElement(
            Te.Fragment,
            { key: ge },
            Te.Children.map(m, (pe) =>
              gn.default.createElement(
                "div",
                { style: M, className: "rfm-child" },
                pe
              )
            )
          )
        ),
      [M, m]
    );
  return J
    ? gn.default.createElement(
        "div",
        { ref: Pe, style: qe, className: "rfm-marquee-container " + n },
        v &&
          gn.default.createElement("div", {
            style: F,
            className: "rfm-overlay",
          }),
        gn.default.createElement(
          "div",
          {
            className: "rfm-marquee",
            style: x,
            onAnimationIteration: k,
            onAnimationEnd: S,
          },
          gn.default.createElement(
            "div",
            { className: "rfm-initial-child-container", ref: Fe },
            Te.Children.map(m, (Q) =>
              gn.default.createElement(
                "div",
                { style: M, className: "rfm-child" },
                Q
              )
            )
          ),
          U(L - 1)
        ),
        gn.default.createElement(
          "div",
          { className: "rfm-marquee", style: x },
          U(L)
        )
      )
    : null;
});
var Pp = (_p.default = Hv),
  qv = function () {
    var e = document.getSelection();
    if (!e.rangeCount) return function () {};
    for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++)
      n.push(e.getRangeAt(r));
    switch (t.tagName.toUpperCase()) {
      case "INPUT":
      case "TEXTAREA":
        t.blur();
        break;
      default:
        t = null;
        break;
    }
    return (
      e.removeAllRanges(),
      function () {
        e.type === "Caret" && e.removeAllRanges(),
          e.rangeCount ||
            n.forEach(function (i) {
              e.addRange(i);
            }),
          t && t.focus();
      }
    );
  },
  Kv = qv,
  vd = { "text/plain": "Text", "text/html": "Url", default: "Text" },
  Gv = "Copy to clipboard: #{key}, Enter";
function Yv(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t);
}
function Xv(e, t) {
  var n,
    r,
    i,
    o,
    l,
    s,
    a = !1;
  t || (t = {}), (n = t.debug || !1);
  try {
    (i = Kv()),
      (o = document.createRange()),
      (l = document.getSelection()),
      (s = document.createElement("span")),
      (s.textContent = e),
      (s.ariaHidden = "true"),
      (s.style.all = "unset"),
      (s.style.position = "fixed"),
      (s.style.top = 0),
      (s.style.clip = "rect(0, 0, 0, 0)"),
      (s.style.whiteSpace = "pre"),
      (s.style.webkitUserSelect = "text"),
      (s.style.MozUserSelect = "text"),
      (s.style.msUserSelect = "text"),
      (s.style.userSelect = "text"),
      s.addEventListener("copy", function (p) {
        if ((p.stopPropagation(), t.format))
          if ((p.preventDefault(), typeof p.clipboardData > "u")) {
            n && console.warn("unable to use e.clipboardData"),
              n && console.warn("trying IE specific stuff"),
              window.clipboardData.clearData();
            var v = vd[t.format] || vd.default;
            window.clipboardData.setData(v, e);
          } else
            p.clipboardData.clearData(), p.clipboardData.setData(t.format, e);
        t.onCopy && (p.preventDefault(), t.onCopy(p.clipboardData));
      }),
      document.body.appendChild(s),
      o.selectNodeContents(s),
      l.addRange(o);
    var c = document.execCommand("copy");
    if (!c) throw new Error("copy command was unsuccessful");
    a = !0;
  } catch (p) {
    n && console.error("unable to copy using execCommand: ", p),
      n && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t.format || "text", e),
        t.onCopy && t.onCopy(window.clipboardData),
        (a = !0);
    } catch (v) {
      n && console.error("unable to copy using clipboardData: ", v),
        n && console.error("falling back to prompt"),
        (r = Yv("message" in t ? t.message : Gv)),
        window.prompt(r, e);
    }
  } finally {
    l &&
      (typeof l.removeRange == "function"
        ? l.removeRange(o)
        : l.removeAllRanges()),
      s && document.body.removeChild(s),
      i();
  }
  return a;
}
var Jv = Xv;
const Zv = ip(Jv);
function ey(e, t) {
  var n = N.useState(!1),
    r = n[0],
    i = n[1],
    o = t && t.successDuration;
  return (
    N.useEffect(
      function () {
        if (r && o) {
          var l = setTimeout(function () {
            i(!1);
          }, o);
          return function () {
            clearTimeout(l);
          };
        }
      },
      [r, o]
    ),
    [
      r,
      function () {
        var l = Zv(e);
        i(l);
      },
    ]
  );
}
function ty() {
  const e = "w-18 h-18";
  return T.jsx(T.Fragment, {
    children: T.jsx("div", {
      className: "absolute left-0 right-0 bottom-0 bg-black z-20",
      children: T.jsxs("div", {
        className: "flex justify-center",
        children: [
          T.jsx("a", {
            className: `flex items-center justify-center rounded-lg bg-black px-8 py-2.5 text-white hover:bg-green-600 hover:bg-yellow-300 focus:ring-[#ff084f] ${e}`,
            href: "chartlink",
            children: T.jsx("img", {
              className: "h-6 w-6",
              src: "/dextools-logo.svg",
              alt: "dextools logo",
            }),
          }),
          T.jsx("a", {
            className: `hover-bg-pink-300 flex items-center justify-center rounded-lg bg-black px-8 py-2.5 text-white hover:bg-yellow-300 focus:outline-none focus:ring-[#ff084f] ${e}`,
            href: "https://app.uniswap.org/swap?outputCurrency=0x00000000000000000000000&chain=ethereum",
            children: T.jsx("img", {
              className: "h-7 w-7 mb-1",
              src: "/uniswap-logo.svg",
              alt: "uniswap logo",
            }),
          }),
          T.jsx("a", {
            className: `hover-bg-pink-300 flex items-center justify-center rounded-lg bg-black px-8 py-2.5 text-white hover:bg-yellow-300 focus:outline-none focus:ring-[#ff084f] ${e}`,
            href: "http://t.me/allmyfellaseth",
            children: T.jsx("img", {
              className: "h-6 w-6",
              src: "/tg-logo.svg",
              alt: "telegram logo",
            }),
          }),
          T.jsx("a", {
            className: `hover-bg-pink-300 flex items-center justify-center rounded-lg bg-black px-8 py-2.5 text-white hover:bg-yellow-300 focus:outline-none focus:ring-[#ff084f] ${e}`,
            href: "https://twitter.com/AllMyFellasErc",
            children: T.jsx("img", {
              className: "h-6 w-6",
              src: "/logo.svg",
              alt: "x logo",
            }),
          }),
        ],
      }),
    }),
  });
}
const ny = "/assets/fire-176ac38b.mp4";
function Fi(e) {
  "@babel/helpers - typeof";
  return (
    (Fi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Fi(e)
  );
}
function ry(e, t) {
  if (Fi(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Fi(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function iy(e) {
  var t = ry(e, "string");
  return Fi(t) === "symbol" ? t : String(t);
}
function b(e, t, n) {
  return (
    (t = iy(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
const Ei = /^[a-z0-9]+(-[a-z0-9]+)*$/,
  Wl = (e, t, n, r = "") => {
    const i = e.split(":");
    if (e.slice(0, 1) === "@") {
      if (i.length < 2 || i.length > 3) return null;
      r = i.shift().slice(1);
    }
    if (i.length > 3 || !i.length) return null;
    if (i.length > 1) {
      const s = i.pop(),
        a = i.pop(),
        c = { provider: i.length > 0 ? i[0] : r, prefix: a, name: s };
      return t && !Qo(c) ? null : c;
    }
    const o = i[0],
      l = o.split("-");
    if (l.length > 1) {
      const s = { provider: r, prefix: l.shift(), name: l.join("-") };
      return t && !Qo(s) ? null : s;
    }
    if (n && r === "") {
      const s = { provider: r, prefix: "", name: o };
      return t && !Qo(s, n) ? null : s;
    }
    return null;
  },
  Qo = (e, t) =>
    e
      ? !!(
          (e.provider === "" || e.provider.match(Ei)) &&
          ((t && e.prefix === "") || e.prefix.match(Ei)) &&
          e.name.match(Ei)
        )
      : !1,
  Tp = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
  cl = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
  Lu = Object.freeze({ ...Tp, ...cl }),
  Sa = Object.freeze({ ...Lu, body: "", hidden: !1 });
function oy(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0),
    !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function yd(e, t) {
  const n = oy(e, t);
  for (const r in Sa)
    r in cl
      ? r in e && !(r in n) && (n[r] = cl[r])
      : r in t
      ? (n[r] = t[r])
      : r in e && (n[r] = e[r]);
  return n;
}
function ly(e, t) {
  const n = e.icons,
    r = e.aliases || Object.create(null),
    i = Object.create(null);
  function o(l) {
    if (n[l]) return (i[l] = []);
    if (!(l in i)) {
      i[l] = null;
      const s = r[l] && r[l].parent,
        a = s && o(s);
      a && (i[l] = [s].concat(a));
    }
    return i[l];
  }
  return (t || Object.keys(n).concat(Object.keys(r))).forEach(o), i;
}
function sy(e, t, n) {
  const r = e.icons,
    i = e.aliases || Object.create(null);
  let o = {};
  function l(s) {
    o = yd(r[s] || i[s], o);
  }
  return l(t), n.forEach(l), yd(e, o);
}
function Op(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object") return n;
  e.not_found instanceof Array &&
    e.not_found.forEach((i) => {
      t(i, null), n.push(i);
    });
  const r = ly(e);
  for (const i in r) {
    const o = r[i];
    o && (t(i, sy(e, i, o)), n.push(i));
  }
  return n;
}
const ay = { provider: "", aliases: {}, not_found: {}, ...Tp };
function Rs(e, t) {
  for (const n in t) if (n in e && typeof e[n] != typeof t[n]) return !1;
  return !0;
}
function Np(e) {
  if (typeof e != "object" || e === null) return null;
  const t = e;
  if (
    typeof t.prefix != "string" ||
    !e.icons ||
    typeof e.icons != "object" ||
    !Rs(e, ay)
  )
    return null;
  const n = t.icons;
  for (const i in n) {
    const o = n[i];
    if (!i.match(Ei) || typeof o.body != "string" || !Rs(o, Sa)) return null;
  }
  const r = t.aliases || Object.create(null);
  for (const i in r) {
    const o = r[i],
      l = o.parent;
    if (!i.match(Ei) || typeof l != "string" || (!n[l] && !r[l]) || !Rs(o, Sa))
      return null;
  }
  return t;
}
const wd = Object.create(null);
function uy(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: Object.create(null),
    missing: new Set(),
  };
}
function tr(e, t) {
  const n = wd[e] || (wd[e] = Object.create(null));
  return n[t] || (n[t] = uy(e, t));
}
function ju(e, t) {
  return Np(t)
    ? Op(t, (n, r) => {
        r ? (e.icons[n] = r) : e.missing.add(n);
      })
    : [];
}
function cy(e, t, n) {
  try {
    if (typeof n.body == "string") return (e.icons[t] = { ...n }), !0;
  } catch {}
  return !1;
}
let $i = !1;
function Lp(e) {
  return typeof e == "boolean" && ($i = e), $i;
}
function dy(e) {
  const t = typeof e == "string" ? Wl(e, !0, $i) : e;
  if (t) {
    const n = tr(t.provider, t.prefix),
      r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function fy(e, t) {
  const n = Wl(e, !0, $i);
  if (!n) return !1;
  const r = tr(n.provider, n.prefix);
  return cy(r, n.name, t);
}
function py(e, t) {
  if (typeof e != "object") return !1;
  if ((typeof t != "string" && (t = e.provider || ""), $i && !t && !e.prefix)) {
    let i = !1;
    return (
      Np(e) &&
        ((e.prefix = ""),
        Op(e, (o, l) => {
          l && fy(o, l) && (i = !0);
        })),
      i
    );
  }
  const n = e.prefix;
  if (!Qo({ provider: t, prefix: n, name: "a" })) return !1;
  const r = tr(t, n);
  return !!ju(r, e);
}
const jp = Object.freeze({ width: null, height: null }),
  Ip = Object.freeze({ ...jp, ...cl }),
  hy = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
  my = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function xd(e, t, n) {
  if (t === 1) return e;
  if (((n = n || 100), typeof e == "number")) return Math.ceil(e * t * n) / n;
  if (typeof e != "string") return e;
  const r = e.split(hy);
  if (r === null || !r.length) return e;
  const i = [];
  let o = r.shift(),
    l = my.test(o);
  for (;;) {
    if (l) {
      const s = parseFloat(o);
      isNaN(s) ? i.push(o) : i.push(Math.ceil(s * t * n) / n);
    } else i.push(o);
    if (((o = r.shift()), o === void 0)) return i.join("");
    l = !l;
  }
}
const gy = (e) => e === "unset" || e === "undefined" || e === "none";
function vy(e, t) {
  const n = { ...Lu, ...e },
    r = { ...Ip, ...t },
    i = { left: n.left, top: n.top, width: n.width, height: n.height };
  let o = n.body;
  [n, r].forEach((S) => {
    const k = [],
      D = S.hFlip,
      m = S.vFlip;
    let f = S.rotate;
    D
      ? m
        ? (f += 2)
        : (k.push(
            "translate(" +
              (i.width + i.left).toString() +
              " " +
              (0 - i.top).toString() +
              ")"
          ),
          k.push("scale(-1 1)"),
          (i.top = i.left = 0))
      : m &&
        (k.push(
          "translate(" +
            (0 - i.left).toString() +
            " " +
            (i.height + i.top).toString() +
            ")"
        ),
        k.push("scale(1 -1)"),
        (i.top = i.left = 0));
    let g;
    switch ((f < 0 && (f -= Math.floor(f / 4) * 4), (f = f % 4), f)) {
      case 1:
        (g = i.height / 2 + i.top),
          k.unshift("rotate(90 " + g.toString() + " " + g.toString() + ")");
        break;
      case 2:
        k.unshift(
          "rotate(180 " +
            (i.width / 2 + i.left).toString() +
            " " +
            (i.height / 2 + i.top).toString() +
            ")"
        );
        break;
      case 3:
        (g = i.width / 2 + i.left),
          k.unshift("rotate(-90 " + g.toString() + " " + g.toString() + ")");
        break;
    }
    f % 2 === 1 &&
      (i.left !== i.top && ((g = i.left), (i.left = i.top), (i.top = g)),
      i.width !== i.height &&
        ((g = i.width), (i.width = i.height), (i.height = g))),
      k.length && (o = '<g transform="' + k.join(" ") + '">' + o + "</g>");
  });
  const l = r.width,
    s = r.height,
    a = i.width,
    c = i.height;
  let p, v;
  l === null
    ? ((v = s === null ? "1em" : s === "auto" ? c : s), (p = xd(v, a / c)))
    : ((p = l === "auto" ? a : l),
      (v = s === null ? xd(p, c / a) : s === "auto" ? c : s));
  const w = {},
    E = (S, k) => {
      gy(k) || (w[S] = k.toString());
    };
  return (
    E("width", p),
    E("height", v),
    (w.viewBox =
      i.left.toString() +
      " " +
      i.top.toString() +
      " " +
      a.toString() +
      " " +
      c.toString()),
    { attributes: w, body: o }
  );
}
const yy = /\sid="(\S+)"/g,
  wy =
    "IconifyId" +
    Date.now().toString(16) +
    ((Math.random() * 16777216) | 0).toString(16);
let xy = 0;
function Sy(e, t = wy) {
  const n = [];
  let r;
  for (; (r = yy.exec(e)); ) n.push(r[1]);
  if (!n.length) return e;
  const i = "suffix" + ((Math.random() * 16777216) | Date.now()).toString(16);
  return (
    n.forEach((o) => {
      const l = typeof t == "function" ? t(o) : t + (xy++).toString(),
        s = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      e = e.replace(
        new RegExp('([#;"])(' + s + ')([")]|\\.[a-z])', "g"),
        "$1" + l + i + "$3"
      );
    }),
    (e = e.replace(new RegExp(i, "g"), "")),
    e
  );
}
const Ea = Object.create(null);
function Ey(e, t) {
  Ea[e] = t;
}
function ka(e) {
  return Ea[e] || Ea[""];
}
function Iu(e) {
  let t;
  if (typeof e.resources == "string") t = [e.resources];
  else if (((t = e.resources), !(t instanceof Array) || !t.length)) return null;
  return {
    resources: t,
    path: e.path || "/",
    maxURL: e.maxURL || 500,
    rotate: e.rotate || 750,
    timeout: e.timeout || 5e3,
    random: e.random === !0,
    index: e.index || 0,
    dataAfterTimeout: e.dataAfterTimeout !== !1,
  };
}
const Mu = Object.create(null),
  oi = ["https://api.simplesvg.com", "https://api.unisvg.com"],
  Ho = [];
for (; oi.length > 0; )
  oi.length === 1 || Math.random() > 0.5
    ? Ho.push(oi.shift())
    : Ho.push(oi.pop());
Mu[""] = Iu({ resources: ["https://api.iconify.design"].concat(Ho) });
function ky(e, t) {
  const n = Iu(t);
  return n === null ? !1 : ((Mu[e] = n), !0);
}
function Ru(e) {
  return Mu[e];
}
const Cy = () => {
  let e;
  try {
    if (((e = fetch), typeof e == "function")) return e;
  } catch {}
};
let Sd = Cy();
function _y(e, t) {
  const n = Ru(e);
  if (!n) return 0;
  let r;
  if (!n.maxURL) r = 0;
  else {
    let i = 0;
    n.resources.forEach((l) => {
      i = Math.max(i, l.length);
    });
    const o = t + ".json?icons=";
    r = n.maxURL - i - n.path.length - o.length;
  }
  return r;
}
function Py(e) {
  return e === 404;
}
const Ty = (e, t, n) => {
  const r = [],
    i = _y(e, t),
    o = "icons";
  let l = { type: o, provider: e, prefix: t, icons: [] },
    s = 0;
  return (
    n.forEach((a, c) => {
      (s += a.length + 1),
        s >= i &&
          c > 0 &&
          (r.push(l),
          (l = { type: o, provider: e, prefix: t, icons: [] }),
          (s = a.length)),
        l.icons.push(a);
    }),
    r.push(l),
    r
  );
};
function Oy(e) {
  if (typeof e == "string") {
    const t = Ru(e);
    if (t) return t.path;
  }
  return "/";
}
const Ny = (e, t, n) => {
    if (!Sd) {
      n("abort", 424);
      return;
    }
    let r = Oy(t.provider);
    switch (t.type) {
      case "icons": {
        const o = t.prefix,
          s = t.icons.join(","),
          a = new URLSearchParams({ icons: s });
        r += o + ".json?" + a.toString();
        break;
      }
      case "custom": {
        const o = t.uri;
        r += o.slice(0, 1) === "/" ? o.slice(1) : o;
        break;
      }
      default:
        n("abort", 400);
        return;
    }
    let i = 503;
    Sd(e + r)
      .then((o) => {
        const l = o.status;
        if (l !== 200) {
          setTimeout(() => {
            n(Py(l) ? "abort" : "next", l);
          });
          return;
        }
        return (i = 501), o.json();
      })
      .then((o) => {
        if (typeof o != "object" || o === null) {
          setTimeout(() => {
            o === 404 ? n("abort", o) : n("next", i);
          });
          return;
        }
        setTimeout(() => {
          n("success", o);
        });
      })
      .catch(() => {
        n("next", i);
      });
  },
  Ly = { prepare: Ty, send: Ny };
function jy(e) {
  const t = { loaded: [], missing: [], pending: [] },
    n = Object.create(null);
  e.sort((i, o) =>
    i.provider !== o.provider
      ? i.provider.localeCompare(o.provider)
      : i.prefix !== o.prefix
      ? i.prefix.localeCompare(o.prefix)
      : i.name.localeCompare(o.name)
  );
  let r = { provider: "", prefix: "", name: "" };
  return (
    e.forEach((i) => {
      if (
        r.name === i.name &&
        r.prefix === i.prefix &&
        r.provider === i.provider
      )
        return;
      r = i;
      const o = i.provider,
        l = i.prefix,
        s = i.name,
        a = n[o] || (n[o] = Object.create(null)),
        c = a[l] || (a[l] = tr(o, l));
      let p;
      s in c.icons
        ? (p = t.loaded)
        : l === "" || c.missing.has(s)
        ? (p = t.missing)
        : (p = t.pending);
      const v = { provider: o, prefix: l, name: s };
      p.push(v);
    }),
    t
  );
}
function Mp(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((i) => i.id !== t));
  });
}
function Iy(e) {
  e.pendingCallbacksFlag ||
    ((e.pendingCallbacksFlag = !0),
    setTimeout(() => {
      e.pendingCallbacksFlag = !1;
      const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
      if (!t.length) return;
      let n = !1;
      const r = e.provider,
        i = e.prefix;
      t.forEach((o) => {
        const l = o.icons,
          s = l.pending.length;
        (l.pending = l.pending.filter((a) => {
          if (a.prefix !== i) return !0;
          const c = a.name;
          if (e.icons[c]) l.loaded.push({ provider: r, prefix: i, name: c });
          else if (e.missing.has(c))
            l.missing.push({ provider: r, prefix: i, name: c });
          else return (n = !0), !0;
          return !1;
        })),
          l.pending.length !== s &&
            (n || Mp([e], o.id),
            o.callback(
              l.loaded.slice(0),
              l.missing.slice(0),
              l.pending.slice(0),
              o.abort
            ));
      });
    }));
}
let My = 0;
function Ry(e, t, n) {
  const r = My++,
    i = Mp.bind(null, n, r);
  if (!t.pending.length) return i;
  const o = { id: r, icons: t, callback: e, abort: i };
  return (
    n.forEach((l) => {
      (l.loaderCallbacks || (l.loaderCallbacks = [])).push(o);
    }),
    i
  );
}
function Ay(e, t = !0, n = !1) {
  const r = [];
  return (
    e.forEach((i) => {
      const o = typeof i == "string" ? Wl(i, t, n) : i;
      o && r.push(o);
    }),
    r
  );
}
var Fy = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1,
};
function $y(e, t, n, r) {
  const i = e.resources.length,
    o = e.random ? Math.floor(Math.random() * i) : e.index;
  let l;
  if (e.random) {
    let _ = e.resources.slice(0);
    for (l = []; _.length > 1; ) {
      const L = Math.floor(Math.random() * _.length);
      l.push(_[L]), (_ = _.slice(0, L).concat(_.slice(L + 1)));
    }
    l = l.concat(_);
  } else l = e.resources.slice(o).concat(e.resources.slice(0, o));
  const s = Date.now();
  let a = "pending",
    c = 0,
    p,
    v = null,
    w = [],
    E = [];
  typeof r == "function" && E.push(r);
  function S() {
    v && (clearTimeout(v), (v = null));
  }
  function k() {
    a === "pending" && (a = "aborted"),
      S(),
      w.forEach((_) => {
        _.status === "pending" && (_.status = "aborted");
      }),
      (w = []);
  }
  function D(_, L) {
    L && (E = []), typeof _ == "function" && E.push(_);
  }
  function m() {
    return {
      startTime: s,
      payload: t,
      status: a,
      queriesSent: c,
      queriesPending: w.length,
      subscribe: D,
      abort: k,
    };
  }
  function f() {
    (a = "failed"),
      E.forEach((_) => {
        _(void 0, p);
      });
  }
  function g() {
    w.forEach((_) => {
      _.status === "pending" && (_.status = "aborted");
    }),
      (w = []);
  }
  function P(_, L, R) {
    const J = L !== "success";
    switch (((w = w.filter((W) => W !== _)), a)) {
      case "pending":
        break;
      case "failed":
        if (J || !e.dataAfterTimeout) return;
        break;
      default:
        return;
    }
    if (L === "abort") {
      (p = R), f();
      return;
    }
    if (J) {
      (p = R), w.length || (l.length ? I() : f());
      return;
    }
    if ((S(), g(), !e.random)) {
      const W = e.resources.indexOf(_.resource);
      W !== -1 && W !== e.index && (e.index = W);
    }
    (a = "completed"),
      E.forEach((W) => {
        W(R);
      });
  }
  function I() {
    if (a !== "pending") return;
    S();
    const _ = l.shift();
    if (_ === void 0) {
      if (w.length) {
        v = setTimeout(() => {
          S(), a === "pending" && (g(), f());
        }, e.timeout);
        return;
      }
      f();
      return;
    }
    const L = {
      status: "pending",
      resource: _,
      callback: (R, J) => {
        P(L, R, J);
      },
    };
    w.push(L), c++, (v = setTimeout(I, e.rotate)), n(_, t, L.callback);
  }
  return setTimeout(I), m;
}
function Rp(e) {
  const t = { ...Fy, ...e };
  let n = [];
  function r() {
    n = n.filter((s) => s().status === "pending");
  }
  function i(s, a, c) {
    const p = $y(t, s, a, (v, w) => {
      r(), c && c(v, w);
    });
    return n.push(p), p;
  }
  function o(s) {
    return n.find((a) => s(a)) || null;
  }
  return {
    query: i,
    find: o,
    setIndex: (s) => {
      t.index = s;
    },
    getIndex: () => t.index,
    cleanup: r,
  };
}
function Ed() {}
const As = Object.create(null);
function Dy(e) {
  if (!As[e]) {
    const t = Ru(e);
    if (!t) return;
    const n = Rp(t),
      r = { config: t, redundancy: n };
    As[e] = r;
  }
  return As[e];
}
function zy(e, t, n) {
  let r, i;
  if (typeof e == "string") {
    const o = ka(e);
    if (!o) return n(void 0, 424), Ed;
    i = o.send;
    const l = Dy(e);
    l && (r = l.redundancy);
  } else {
    const o = Iu(e);
    if (o) {
      r = Rp(o);
      const l = e.resources ? e.resources[0] : "",
        s = ka(l);
      s && (i = s.send);
    }
  }
  return !r || !i ? (n(void 0, 424), Ed) : r.query(t, i, n)().abort;
}
const kd = "iconify2",
  Di = "iconify",
  Ap = Di + "-count",
  Cd = Di + "-version",
  Fp = 36e5,
  Vy = 168;
function Ca(e, t) {
  try {
    return e.getItem(t);
  } catch {}
}
function Au(e, t, n) {
  try {
    return e.setItem(t, n), !0;
  } catch {}
}
function _d(e, t) {
  try {
    e.removeItem(t);
  } catch {}
}
function _a(e, t) {
  return Au(e, Ap, t.toString());
}
function Pa(e) {
  return parseInt(Ca(e, Ap)) || 0;
}
const Ql = { local: !0, session: !0 },
  $p = { local: new Set(), session: new Set() };
let Fu = !1;
function Uy(e) {
  Fu = e;
}
let ko = typeof window > "u" ? {} : window;
function Dp(e) {
  const t = e + "Storage";
  try {
    if (ko && ko[t] && typeof ko[t].length == "number") return ko[t];
  } catch {}
  Ql[e] = !1;
}
function zp(e, t) {
  const n = Dp(e);
  if (!n) return;
  const r = Ca(n, Cd);
  if (r !== kd) {
    if (r) {
      const s = Pa(n);
      for (let a = 0; a < s; a++) _d(n, Di + a.toString());
    }
    Au(n, Cd, kd), _a(n, 0);
    return;
  }
  const i = Math.floor(Date.now() / Fp) - Vy,
    o = (s) => {
      const a = Di + s.toString(),
        c = Ca(n, a);
      if (typeof c == "string") {
        try {
          const p = JSON.parse(c);
          if (
            typeof p == "object" &&
            typeof p.cached == "number" &&
            p.cached > i &&
            typeof p.provider == "string" &&
            typeof p.data == "object" &&
            typeof p.data.prefix == "string" &&
            t(p, s)
          )
            return !0;
        } catch {}
        _d(n, a);
      }
    };
  let l = Pa(n);
  for (let s = l - 1; s >= 0; s--)
    o(s) || (s === l - 1 ? (l--, _a(n, l)) : $p[e].add(s));
}
function Vp() {
  if (!Fu) {
    Uy(!0);
    for (const e in Ql)
      zp(e, (t) => {
        const n = t.data,
          r = t.provider,
          i = n.prefix,
          o = tr(r, i);
        if (!ju(o, n).length) return !1;
        const l = n.lastModified || -1;
        return (
          (o.lastModifiedCached = o.lastModifiedCached
            ? Math.min(o.lastModifiedCached, l)
            : l),
          !0
        );
      });
  }
}
function by(e, t) {
  const n = e.lastModifiedCached;
  if (n && n >= t) return n === t;
  if (((e.lastModifiedCached = t), n))
    for (const r in Ql)
      zp(r, (i) => {
        const o = i.data;
        return (
          i.provider !== e.provider ||
          o.prefix !== e.prefix ||
          o.lastModified === t
        );
      });
  return !0;
}
function By(e, t) {
  Fu || Vp();
  function n(r) {
    let i;
    if (!Ql[r] || !(i = Dp(r))) return;
    const o = $p[r];
    let l;
    if (o.size) o.delete((l = Array.from(o).shift()));
    else if (((l = Pa(i)), !_a(i, l + 1))) return;
    const s = {
      cached: Math.floor(Date.now() / Fp),
      provider: e.provider,
      data: t,
    };
    return Au(i, Di + l.toString(), JSON.stringify(s));
  }
  (t.lastModified && !by(e, t.lastModified)) ||
    (Object.keys(t.icons).length &&
      (t.not_found && ((t = Object.assign({}, t)), delete t.not_found),
      n("local") || n("session")));
}
function Pd() {}
function Wy(e) {
  e.iconsLoaderFlag ||
    ((e.iconsLoaderFlag = !0),
    setTimeout(() => {
      (e.iconsLoaderFlag = !1), Iy(e);
    }));
}
function Qy(e, t) {
  e.iconsToLoad
    ? (e.iconsToLoad = e.iconsToLoad.concat(t).sort())
    : (e.iconsToLoad = t),
    e.iconsQueueFlag ||
      ((e.iconsQueueFlag = !0),
      setTimeout(() => {
        e.iconsQueueFlag = !1;
        const { provider: n, prefix: r } = e,
          i = e.iconsToLoad;
        delete e.iconsToLoad;
        let o;
        if (!i || !(o = ka(n))) return;
        o.prepare(n, r, i).forEach((s) => {
          zy(n, s, (a) => {
            if (typeof a != "object")
              s.icons.forEach((c) => {
                e.missing.add(c);
              });
            else
              try {
                const c = ju(e, a);
                if (!c.length) return;
                const p = e.pendingIcons;
                p &&
                  c.forEach((v) => {
                    p.delete(v);
                  }),
                  By(e, a);
              } catch (c) {
                console.error(c);
              }
            Wy(e);
          });
        });
      }));
}
const Hy = (e, t) => {
  const n = Ay(e, !0, Lp()),
    r = jy(n);
  if (!r.pending.length) {
    let a = !0;
    return (
      t &&
        setTimeout(() => {
          a && t(r.loaded, r.missing, r.pending, Pd);
        }),
      () => {
        a = !1;
      }
    );
  }
  const i = Object.create(null),
    o = [];
  let l, s;
  return (
    r.pending.forEach((a) => {
      const { provider: c, prefix: p } = a;
      if (p === s && c === l) return;
      (l = c), (s = p), o.push(tr(c, p));
      const v = i[c] || (i[c] = Object.create(null));
      v[p] || (v[p] = []);
    }),
    r.pending.forEach((a) => {
      const { provider: c, prefix: p, name: v } = a,
        w = tr(c, p),
        E = w.pendingIcons || (w.pendingIcons = new Set());
      E.has(v) || (E.add(v), i[c][p].push(v));
    }),
    o.forEach((a) => {
      const { provider: c, prefix: p } = a;
      i[c][p].length && Qy(a, i[c][p]);
    }),
    t ? Ry(t, r, o) : Pd
  );
};
function qy(e, t) {
  const n = { ...e };
  for (const r in t) {
    const i = t[r],
      o = typeof i;
    r in jp
      ? (i === null || (i && (o === "string" || o === "number"))) && (n[r] = i)
      : o === typeof n[r] && (n[r] = r === "rotate" ? i % 4 : i);
  }
  return n;
}
const Ky = /[\s,]+/;
function Gy(e, t) {
  t.split(Ky).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function Yy(e, t = 0) {
  const n = e.replace(/^-?[0-9.]*/, "");
  function r(i) {
    for (; i < 0; ) i += 4;
    return i % 4;
  }
  if (n === "") {
    const i = parseInt(e);
    return isNaN(i) ? 0 : r(i);
  } else if (n !== e) {
    let i = 0;
    switch (n) {
      case "%":
        i = 25;
        break;
      case "deg":
        i = 90;
    }
    if (i) {
      let o = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(o) ? 0 : ((o = o / i), o % 1 === 0 ? r(o) : 0);
    }
  }
  return t;
}
function Xy(e, t) {
  let n =
    e.indexOf("xlink:") === -1
      ? ""
      : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t) n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function Jy(e) {
  return e
    .replace(/"/g, "'")
    .replace(/%/g, "%25")
    .replace(/#/g, "%23")
    .replace(/</g, "%3C")
    .replace(/>/g, "%3E")
    .replace(/\s+/g, " ");
}
function Zy(e) {
  return "data:image/svg+xml," + Jy(e);
}
function e1(e) {
  return 'url("' + Zy(e) + '")';
}
let ki;
function t1() {
  try {
    ki = window.trustedTypes.createPolicy("iconify", { createHTML: (e) => e });
  } catch {
    ki = null;
  }
}
function n1(e) {
  return ki === void 0 && t1(), ki ? ki.createHTML(e) : e;
}
const Up = { ...Ip, inline: !1 },
  r1 = {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-hidden": !0,
    role: "img",
  },
  i1 = { display: "inline-block" },
  Ta = { backgroundColor: "currentColor" },
  bp = { backgroundColor: "transparent" },
  Td = { Image: "var(--svg)", Repeat: "no-repeat", Size: "100% 100%" },
  Od = { WebkitMask: Ta, mask: Ta, background: bp };
for (const e in Od) {
  const t = Od[e];
  for (const n in Td) t[e + n] = Td[n];
}
const o1 = { ...Up, inline: !0 };
function Nd(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const l1 = (e, t, n, r) => {
  const i = n ? o1 : Up,
    o = qy(i, t),
    l = t.mode || "svg",
    s = {},
    a = t.style || {},
    c = { ...(l === "svg" ? r1 : {}), ref: r };
  for (let m in t) {
    const f = t[m];
    if (f !== void 0)
      switch (m) {
        case "icon":
        case "style":
        case "children":
        case "onLoad":
        case "mode":
        case "_ref":
        case "_inline":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          o[m] = f === !0 || f === "true" || f === 1;
          break;
        case "flip":
          typeof f == "string" && Gy(o, f);
          break;
        case "color":
          s.color = f;
          break;
        case "rotate":
          typeof f == "string"
            ? (o[m] = Yy(f))
            : typeof f == "number" && (o[m] = f);
          break;
        case "ariaHidden":
        case "aria-hidden":
          f !== !0 && f !== "true" && delete c["aria-hidden"];
          break;
        default:
          i[m] === void 0 && (c[m] = f);
      }
  }
  const p = vy(e, o),
    v = p.attributes;
  if ((o.inline && (s.verticalAlign = "-0.125em"), l === "svg")) {
    (c.style = { ...s, ...a }), Object.assign(c, v);
    let m = 0,
      f = t.id;
    return (
      typeof f == "string" && (f = f.replace(/-/g, "_")),
      (c.dangerouslySetInnerHTML = {
        __html: n1(Sy(p.body, f ? () => f + "ID" + m++ : "iconifyReact")),
      }),
      H.createElement("svg", c)
    );
  }
  const { body: w, width: E, height: S } = e,
    k = l === "mask" || (l === "bg" ? !1 : w.indexOf("currentColor") !== -1),
    D = Xy(w, { ...v, width: E + "", height: S + "" });
  return (
    (c.style = {
      ...s,
      "--svg": e1(D),
      width: Nd(v.width),
      height: Nd(v.height),
      ...i1,
      ...(k ? Ta : bp),
      ...a,
    }),
    H.createElement("span", c)
  );
};
Lp(!0);
Ey("", Ly);
if (typeof document < "u" && typeof window < "u") {
  Vp();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload,
      n = "Invalid IconifyPreload syntax.";
    typeof t == "object" &&
      t !== null &&
      (t instanceof Array ? t : [t]).forEach((r) => {
        try {
          (typeof r != "object" ||
            r === null ||
            r instanceof Array ||
            typeof r.icons != "object" ||
            typeof r.prefix != "string" ||
            !py(r)) &&
            console.error(n);
        } catch {
          console.error(n);
        }
      });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == "object" && t !== null)
      for (let n in t) {
        const r = "IconifyProviders[" + n + "] is invalid.";
        try {
          const i = t[n];
          if (typeof i != "object" || !i || i.resources === void 0) continue;
          ky(n, i) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
class Bp extends H.Component {
  constructor(t) {
    super(t), (this.state = { icon: null });
  }
  _abortLoading() {
    this._loading && (this._loading.abort(), (this._loading = null));
  }
  _setData(t) {
    this.state.icon !== t && this.setState({ icon: t });
  }
  _checkIcon(t) {
    const n = this.state,
      r = this.props.icon;
    if (typeof r == "object" && r !== null && typeof r.body == "string") {
      (this._icon = ""),
        this._abortLoading(),
        (t || n.icon === null) && this._setData({ data: r });
      return;
    }
    let i;
    if (typeof r != "string" || (i = Wl(r, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const o = dy(i);
    if (!o) {
      (!this._loading || this._loading.name !== r) &&
        (this._abortLoading(),
        (this._icon = ""),
        this._setData(null),
        o !== null &&
          (this._loading = {
            name: r,
            abort: Hy([i], this._checkIcon.bind(this, !1)),
          }));
      return;
    }
    if (this._icon !== r || n.icon === null) {
      this._abortLoading(), (this._icon = r);
      const l = ["iconify"];
      i.prefix !== "" && l.push("iconify--" + i.prefix),
        i.provider !== "" && l.push("iconify--" + i.provider),
        this._setData({ data: o, classes: l }),
        this.props.onLoad && this.props.onLoad(r);
    }
  }
  componentDidMount() {
    this._checkIcon(!1);
  }
  componentDidUpdate(t) {
    t.icon !== this.props.icon && this._checkIcon(!0);
  }
  componentWillUnmount() {
    this._abortLoading();
  }
  render() {
    const t = this.props,
      n = this.state.icon;
    if (n === null)
      return t.children ? t.children : H.createElement("span", {});
    let r = t;
    return (
      n.classes &&
        (r = {
          ...t,
          className:
            (typeof t.className == "string" ? t.className + " " : "") +
            n.classes.join(" "),
        }),
      l1({ ...Lu, ...n.data }, r, t._inline, t._ref)
    );
  }
}
const Bt = H.forwardRef(function (t, n) {
  const r = { ...t, _ref: n, _inline: !1 };
  return H.createElement(Bp, r);
});
H.forwardRef(function (t, n) {
  const r = { ...t, _ref: n, _inline: !0 };
  return H.createElement(Bp, r);
});
function Oa() {
  return (
    (Oa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Oa.apply(this, arguments)
  );
}
const s1 = (e) => {
    switch (e) {
      case "stacked":
        return "rhap_stacked";
      case "stacked-reverse":
        return "rhap_stacked-reverse";
      case "horizontal":
        return "rhap_horizontal";
      case "horizontal-reverse":
        return "rhap_horizontal-reverse";
      default:
        return "rhap_stacked";
    }
  },
  Wp = (e) => (e instanceof MouseEvent ? e.clientX : e.touches[0].clientX),
  Fs = (e) => (e > 9 ? e.toString() : `0${e}`),
  Nr = (e, t, n) => {
    if (!isFinite(e)) return null;
    const r = Math.floor(e / 60),
      i = Fs(r),
      o = Fs(Math.floor(e % 60)),
      l = Fs(Math.floor(r % 60)),
      s = Math.floor(r / 60),
      a = `${i}:${o}`,
      c = `${s}:${l}:${o}`;
    if (n === "auto") return t >= 3600 ? c : a;
    if (n === "mm:ss") return a;
    if (n === "hh:mm:ss") return c;
  };
function Qp(e, t) {
  let n = !1;
  return (r) => {
    n || (e(r), (n = !0), setTimeout(() => (n = !1), t));
  };
}
class a1 extends N.Component {
  constructor() {
    super(...arguments),
      b(this, "audio", void 0),
      b(this, "timeOnMouseMove", 0),
      b(this, "hasAddedAudioEventListener", !1),
      b(this, "downloadProgressAnimationTimer", void 0),
      b(this, "state", {
        isDraggingProgress: !1,
        currentTimePos: "0%",
        hasDownloadProgressAnimation: !1,
        downloadProgressArr: [],
        waitingForSeekCallback: !1,
      }),
      b(this, "getCurrentProgress", (t) => {
        const { audio: n, progressBar: r } = this.props;
        if (
          n.src.indexOf("blob:") !== 0 &&
          typeof this.props.srcDuration > "u" &&
          (!n.src || !isFinite(n.currentTime) || !r.current)
        )
          return { currentTime: 0, currentTimePos: "0%" };
        const o = r.current.getBoundingClientRect(),
          l = o.width;
        let s = Wp(t) - o.left;
        return (
          s < 0 ? (s = 0) : s > l && (s = l),
          {
            currentTime: (this.getDuration() * s) / l,
            currentTimePos: `${((s / l) * 100).toFixed(2)}%`,
          }
        );
      }),
      b(this, "handleContextMenu", (t) => {
        t.preventDefault();
      }),
      b(this, "handleMouseDownOrTouchStartProgressBar", (t) => {
        t.stopPropagation();
        const { currentTime: n, currentTimePos: r } = this.getCurrentProgress(
          t.nativeEvent
        );
        isFinite(n) &&
          ((this.timeOnMouseMove = n),
          this.setState({ isDraggingProgress: !0, currentTimePos: r }),
          t.nativeEvent instanceof MouseEvent
            ? (window.addEventListener(
                "mousemove",
                this.handleWindowMouseOrTouchMove
              ),
              window.addEventListener(
                "mouseup",
                this.handleWindowMouseOrTouchUp
              ))
            : (window.addEventListener(
                "touchmove",
                this.handleWindowMouseOrTouchMove
              ),
              window.addEventListener(
                "touchend",
                this.handleWindowMouseOrTouchUp
              )));
      }),
      b(this, "handleWindowMouseOrTouchMove", (t) => {
        t instanceof MouseEvent && t.preventDefault(), t.stopPropagation();
        const n = window.getSelection();
        n && n.type === "Range" && n.empty();
        const { isDraggingProgress: r } = this.state;
        if (r) {
          const { currentTime: i, currentTimePos: o } =
            this.getCurrentProgress(t);
          (this.timeOnMouseMove = i), this.setState({ currentTimePos: o });
        }
      }),
      b(this, "handleWindowMouseOrTouchUp", (t) => {
        t.stopPropagation();
        const n = this.timeOnMouseMove,
          { audio: r, onChangeCurrentTimeError: i, onSeek: o } = this.props;
        if (o)
          this.setState(
            { isDraggingProgress: !1, waitingForSeekCallback: !0 },
            () => {
              o(r, n).then(
                () => this.setState({ waitingForSeekCallback: !1 }),
                (l) => {
                  throw new Error(l);
                }
              );
            }
          );
        else {
          const l = { isDraggingProgress: !1 };
          r.readyState === r.HAVE_NOTHING ||
          r.readyState === r.HAVE_METADATA ||
          !isFinite(n)
            ? ((l.currentTimePos = "0%"), i && i())
            : (r.currentTime = n),
            this.setState(l);
        }
        t instanceof MouseEvent
          ? (window.removeEventListener(
              "mousemove",
              this.handleWindowMouseOrTouchMove
            ),
            window.removeEventListener(
              "mouseup",
              this.handleWindowMouseOrTouchUp
            ))
          : (window.removeEventListener(
              "touchmove",
              this.handleWindowMouseOrTouchMove
            ),
            window.removeEventListener(
              "touchend",
              this.handleWindowMouseOrTouchUp
            ));
      }),
      b(
        this,
        "handleAudioTimeUpdate",
        Qp((t) => {
          const { isDraggingProgress: n } = this.state,
            r = t.target;
          if (n || this.state.waitingForSeekCallback === !0) return;
          const { currentTime: i } = r,
            o = this.getDuration();
          this.setState({
            currentTimePos: `${((i / o) * 100 || 0).toFixed(2)}%`,
          });
        }, this.props.progressUpdateInterval)
      ),
      b(this, "handleAudioDownloadProgressUpdate", (t) => {
        const n = t.target,
          r = this.getDuration(),
          i = [];
        for (let o = 0; o < n.buffered.length; o++) {
          const l = n.buffered.start(o),
            s = n.buffered.end(o);
          i.push({
            left: `${Math.round((100 / r) * l) || 0}%`,
            width: `${Math.round((100 / r) * (s - l)) || 0}%`,
          });
        }
        clearTimeout(this.downloadProgressAnimationTimer),
          this.setState({
            downloadProgressArr: i,
            hasDownloadProgressAnimation: !0,
          }),
          (this.downloadProgressAnimationTimer = setTimeout(() => {
            this.setState({ hasDownloadProgressAnimation: !1 });
          }, 200));
      });
  }
  getDuration() {
    const { audio: t, srcDuration: n } = this.props;
    return typeof n > "u" ? t.duration : n;
  }
  componentDidUpdate() {
    const { audio: t } = this.props;
    t &&
      !this.hasAddedAudioEventListener &&
      ((this.audio = t),
      (this.hasAddedAudioEventListener = !0),
      t.addEventListener("timeupdate", this.handleAudioTimeUpdate),
      t.addEventListener("progress", this.handleAudioDownloadProgressUpdate));
  }
  componentWillUnmount() {
    this.audio &&
      this.hasAddedAudioEventListener &&
      (this.audio.removeEventListener("timeupdate", this.handleAudioTimeUpdate),
      this.audio.removeEventListener(
        "progress",
        this.handleAudioDownloadProgressUpdate
      )),
      clearTimeout(this.downloadProgressAnimationTimer);
  }
  render() {
    const {
        showDownloadProgress: t,
        showFilledProgress: n,
        progressBar: r,
        i18nProgressBar: i,
      } = this.props,
      {
        currentTimePos: o,
        downloadProgressArr: l,
        hasDownloadProgressAnimation: s,
      } = this.state;
    return H.createElement(
      "div",
      {
        className: "rhap_progress-container",
        ref: r,
        "aria-label": i,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Number(o.split("%")[0]),
        tabIndex: 0,
        onMouseDown: this.handleMouseDownOrTouchStartProgressBar,
        onTouchStart: this.handleMouseDownOrTouchStartProgressBar,
        onContextMenu: this.handleContextMenu,
      },
      H.createElement(
        "div",
        {
          className: `rhap_progress-bar ${
            t ? "rhap_progress-bar-show-download" : ""
          }`,
        },
        H.createElement("div", {
          className: "rhap_progress-indicator",
          style: { left: o },
        }),
        n &&
          H.createElement("div", {
            className: "rhap_progress-filled",
            style: { width: o },
          }),
        t &&
          l.map((a, c) => {
            let { left: p, width: v } = a;
            return H.createElement("div", {
              key: c,
              className: "rhap_download-progress",
              style: {
                left: p,
                width: v,
                transitionDuration: s ? ".2s" : "0s",
              },
            });
          })
      )
    );
  }
}
const u1 = (e, t) => H.createElement(a1, Oa({}, e, { progressBar: t })),
  c1 = N.forwardRef(u1);
class Ld extends N.PureComponent {
  constructor(t) {
    super(t),
      b(this, "audio", void 0),
      b(this, "hasAddedAudioEventListener", !1),
      b(this, "state", { currentTime: this.props.defaultCurrentTime }),
      b(this, "handleAudioCurrentTimeChange", (s) => {
        const a = s.target,
          { isLeftTime: c, timeFormat: p, defaultCurrentTime: v } = this.props;
        this.setState({
          currentTime:
            Nr(c ? a.duration - a.currentTime : a.currentTime, a.duration, p) ||
            v,
        });
      }),
      b(this, "addAudioEventListeners", () => {
        const { audio: s } = this.props;
        s &&
          !this.hasAddedAudioEventListener &&
          ((this.audio = s),
          (this.hasAddedAudioEventListener = !0),
          s.addEventListener("timeupdate", this.handleAudioCurrentTimeChange),
          s.addEventListener(
            "loadedmetadata",
            this.handleAudioCurrentTimeChange
          ));
      });
    const { audio: n, defaultCurrentTime: r, isLeftTime: i, timeFormat: o } = t;
    let l = r;
    n &&
      (l = Nr(i ? n.duration - n.currentTime : n.currentTime, n.duration, o)),
      (this.state = { currentTime: l });
  }
  componentDidMount() {
    this.addAudioEventListeners();
  }
  componentDidUpdate() {
    this.addAudioEventListeners();
  }
  componentWillUnmount() {
    this.audio &&
      this.hasAddedAudioEventListener &&
      (this.audio.removeEventListener(
        "timeupdate",
        this.handleAudioCurrentTimeChange
      ),
      this.audio.removeEventListener(
        "loadedmetadata",
        this.handleAudioCurrentTimeChange
      ));
  }
  render() {
    return this.state.currentTime;
  }
}
class d1 extends N.PureComponent {
  constructor(t) {
    super(t),
      b(this, "audio", void 0),
      b(this, "hasAddedAudioEventListener", !1),
      b(this, "state", {
        duration: this.props.audio
          ? Nr(
              this.props.audio.duration,
              this.props.audio.duration,
              this.props.timeFormat
            )
          : this.props.defaultDuration,
      }),
      b(this, "handleAudioDurationChange", (o) => {
        const l = o.target,
          { timeFormat: s, defaultDuration: a } = this.props;
        this.setState({ duration: Nr(l.duration, l.duration, s) || a });
      }),
      b(this, "addAudioEventListeners", () => {
        const { audio: o } = this.props;
        o &&
          !this.hasAddedAudioEventListener &&
          ((this.audio = o),
          (this.hasAddedAudioEventListener = !0),
          o.addEventListener("durationchange", this.handleAudioDurationChange),
          o.addEventListener("abort", this.handleAudioDurationChange));
      });
    const { audio: n, timeFormat: r, defaultDuration: i } = t;
    this.state = { duration: n ? Nr(n.duration, n.duration, r) : i };
  }
  componentDidMount() {
    this.addAudioEventListeners();
  }
  componentDidUpdate() {
    this.addAudioEventListeners();
  }
  componentWillUnmount() {
    this.audio &&
      this.hasAddedAudioEventListener &&
      (this.audio.removeEventListener(
        "durationchange",
        this.handleAudioDurationChange
      ),
      this.audio.removeEventListener("abort", this.handleAudioDurationChange));
  }
  render() {
    return this.state.duration;
  }
}
class f1 extends N.Component {
  constructor() {
    super(...arguments),
      b(this, "audio", void 0),
      b(this, "hasAddedAudioEventListener", !1),
      b(this, "volumeBar", N.createRef()),
      b(this, "volumeAnimationTimer", 0),
      b(this, "lastVolume", this.props.volume),
      b(this, "state", {
        currentVolumePos: `${((this.lastVolume / 1) * 100 || 0).toFixed(2)}%`,
        hasVolumeAnimation: !1,
        isDraggingVolume: !1,
      }),
      b(this, "getCurrentVolume", (t) => {
        const { audio: n } = this.props;
        if (!this.volumeBar.current)
          return {
            currentVolume: n.volume,
            currentVolumePos: this.state.currentVolumePos,
          };
        const r = this.volumeBar.current.getBoundingClientRect(),
          i = r.width,
          o = Wp(t) - r.left;
        let l, s;
        return (
          o < 0
            ? ((l = 0), (s = "0%"))
            : o > r.width
            ? ((l = 1), (s = "100%"))
            : ((l = o / i), (s = `${(o / i) * 100}%`)),
          { currentVolume: l, currentVolumePos: s }
        );
      }),
      b(this, "handleContextMenu", (t) => {
        t.preventDefault();
      }),
      b(this, "handleClickVolumeButton", () => {
        const { audio: t } = this.props;
        t.volume > 0
          ? ((this.lastVolume = t.volume), (t.volume = 0))
          : (t.volume = this.lastVolume);
      }),
      b(this, "handleVolumnControlMouseOrTouchDown", (t) => {
        t.stopPropagation();
        const { audio: n } = this.props,
          { currentVolume: r, currentVolumePos: i } = this.getCurrentVolume(
            t.nativeEvent
          );
        (n.volume = r),
          this.setState({ isDraggingVolume: !0, currentVolumePos: i }),
          t.nativeEvent instanceof MouseEvent
            ? (window.addEventListener(
                "mousemove",
                this.handleWindowMouseOrTouchMove
              ),
              window.addEventListener(
                "mouseup",
                this.handleWindowMouseOrTouchUp
              ))
            : (window.addEventListener(
                "touchmove",
                this.handleWindowMouseOrTouchMove
              ),
              window.addEventListener(
                "touchend",
                this.handleWindowMouseOrTouchUp
              ));
      }),
      b(this, "handleWindowMouseOrTouchMove", (t) => {
        t instanceof MouseEvent && t.preventDefault(), t.stopPropagation();
        const { audio: n } = this.props,
          r = window.getSelection();
        r && r.type === "Range" && r.empty();
        const { isDraggingVolume: i } = this.state;
        if (i) {
          const { currentVolume: o, currentVolumePos: l } =
            this.getCurrentVolume(t);
          (n.volume = o), this.setState({ currentVolumePos: l });
        }
      }),
      b(this, "handleWindowMouseOrTouchUp", (t) => {
        t.stopPropagation(),
          this.setState({ isDraggingVolume: !1 }),
          t instanceof MouseEvent
            ? (window.removeEventListener(
                "mousemove",
                this.handleWindowMouseOrTouchMove
              ),
              window.removeEventListener(
                "mouseup",
                this.handleWindowMouseOrTouchUp
              ))
            : (window.removeEventListener(
                "touchmove",
                this.handleWindowMouseOrTouchMove
              ),
              window.removeEventListener(
                "touchend",
                this.handleWindowMouseOrTouchUp
              ));
      }),
      b(this, "handleAudioVolumeChange", (t) => {
        const { isDraggingVolume: n } = this.state,
          { volume: r } = t.target;
        ((this.lastVolume > 0 && r === 0) ||
          (this.lastVolume === 0 && r > 0)) &&
          this.props.onMuteChange(),
          (this.lastVolume = r),
          !n &&
            (this.setState({
              hasVolumeAnimation: !0,
              currentVolumePos: `${((r / 1) * 100 || 0).toFixed(2)}%`,
            }),
            clearTimeout(this.volumeAnimationTimer),
            (this.volumeAnimationTimer = setTimeout(() => {
              this.setState({ hasVolumeAnimation: !1 });
            }, 100)));
      });
  }
  componentDidUpdate() {
    const { audio: t } = this.props;
    t &&
      !this.hasAddedAudioEventListener &&
      ((this.audio = t),
      (this.hasAddedAudioEventListener = !0),
      t.addEventListener("volumechange", this.handleAudioVolumeChange));
  }
  componentWillUnmount() {
    this.audio &&
      this.hasAddedAudioEventListener &&
      this.audio.removeEventListener(
        "volumechange",
        this.handleAudioVolumeChange
      ),
      clearTimeout(this.volumeAnimationTimer);
  }
  render() {
    const { audio: t, showFilledVolume: n, i18nVolumeControl: r } = this.props,
      { currentVolumePos: i, hasVolumeAnimation: o } = this.state,
      { volume: l } = t || {};
    return H.createElement(
      "div",
      {
        ref: this.volumeBar,
        onMouseDown: this.handleVolumnControlMouseOrTouchDown,
        onTouchStart: this.handleVolumnControlMouseOrTouchDown,
        onContextMenu: this.handleContextMenu,
        role: "progressbar",
        "aria-label": r,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Number((l * 100).toFixed(0)),
        tabIndex: 0,
        className: "rhap_volume-bar-area",
      },
      H.createElement(
        "div",
        { className: "rhap_volume-bar" },
        H.createElement("div", {
          className: "rhap_volume-indicator",
          style: { left: i, transitionDuration: o ? ".1s" : "0s" },
        }),
        n &&
          H.createElement("div", {
            className: "rhap_volume-filled",
            style: { width: i },
          })
      )
    );
  }
}
let We = (function (e) {
  return (
    (e.CURRENT_TIME = "CURRENT_TIME"),
    (e.CURRENT_LEFT_TIME = "CURRENT_LEFT_TIME"),
    (e.PROGRESS_BAR = "PROGRESS_BAR"),
    (e.DURATION = "DURATION"),
    (e.ADDITIONAL_CONTROLS = "ADDITIONAL_CONTROLS"),
    (e.MAIN_CONTROLS = "MAIN_CONTROLS"),
    (e.VOLUME_CONTROLS = "VOLUME_CONTROLS"),
    (e.LOOP = "LOOP"),
    (e.VOLUME = "VOLUME"),
    e
  );
})({});
class Hp extends N.Component {
  constructor() {
    super(...arguments),
      b(this, "audio", N.createRef()),
      b(this, "progressBar", N.createRef()),
      b(this, "container", N.createRef()),
      b(this, "lastVolume", this.props.volume),
      b(this, "listenTracker", void 0),
      b(this, "volumeAnimationTimer", void 0),
      b(this, "downloadProgressAnimationTimer", void 0),
      b(this, "togglePlay", (t) => {
        t.stopPropagation();
        const n = this.audio.current;
        (n.paused || n.ended) && n.src
          ? this.playAudioPromise()
          : n.paused || n.pause();
      }),
      b(this, "playAudioPromise", () => {
        const t = this.audio.current.play();
        t
          ? t.then(null).catch((n) => {
              const { onPlayError: r } = this.props;
              r && r(new Error(n));
            })
          : this.forceUpdate();
      }),
      b(this, "isPlaying", () => {
        const t = this.audio.current;
        return t ? !t.paused && !t.ended : !1;
      }),
      b(this, "handlePlay", (t) => {
        this.forceUpdate(), this.props.onPlay && this.props.onPlay(t);
      }),
      b(this, "handlePause", (t) => {
        this.audio &&
          (this.forceUpdate(), this.props.onPause && this.props.onPause(t));
      }),
      b(this, "handleEnded", (t) => {
        this.audio &&
          (this.forceUpdate(), this.props.onEnded && this.props.onEnded(t));
      }),
      b(this, "handleAbort", (t) => {
        this.props.onAbort && this.props.onAbort(t);
      }),
      b(this, "handleClickVolumeButton", () => {
        const t = this.audio.current;
        t.volume > 0
          ? ((this.lastVolume = t.volume), (t.volume = 0))
          : (t.volume = this.lastVolume);
      }),
      b(this, "handleMuteChange", () => {
        this.forceUpdate();
      }),
      b(this, "handleClickLoopButton", () => {
        (this.audio.current.loop = !this.audio.current.loop),
          this.forceUpdate();
      }),
      b(this, "handleClickRewind", () => {
        const { progressJumpSteps: t, progressJumpStep: n } = this.props,
          r = t.backward || n;
        this.setJumpTime(-r);
      }),
      b(this, "handleClickForward", () => {
        const { progressJumpSteps: t, progressJumpStep: n } = this.props,
          r = t.forward || n;
        this.setJumpTime(r);
      }),
      b(this, "setJumpTime", (t) => {
        const n = this.audio.current,
          { duration: r, currentTime: i } = n;
        if (
          n.readyState === n.HAVE_NOTHING ||
          n.readyState === n.HAVE_METADATA ||
          !isFinite(r) ||
          !isFinite(i)
        )
          return (
            this.props.onChangeCurrentTimeError &&
            this.props.onChangeCurrentTimeError()
          );
        let o = i + t / 1e3;
        o < 0
          ? ((n.currentTime = 0), (o = 0))
          : o > r
          ? ((n.currentTime = r), (o = r))
          : (n.currentTime = o);
      }),
      b(this, "setJumpVolume", (t) => {
        let n = this.audio.current.volume + t;
        n < 0 ? (n = 0) : n > 1 && (n = 1), (this.audio.current.volume = n);
      }),
      b(this, "handleKeyDown", (t) => {
        if (this.props.hasDefaultKeyBindings)
          switch (t.key) {
            case " ":
              (t.target === this.container.current ||
                t.target === this.progressBar.current) &&
                (t.preventDefault(), this.togglePlay(t));
              break;
            case "ArrowLeft":
              this.handleClickRewind();
              break;
            case "ArrowRight":
              this.handleClickForward();
              break;
            case "ArrowUp":
              t.preventDefault(), this.setJumpVolume(this.props.volumeJumpStep);
              break;
            case "ArrowDown":
              t.preventDefault(),
                this.setJumpVolume(-this.props.volumeJumpStep);
              break;
            case "l":
              this.handleClickLoopButton();
              break;
            case "m":
              this.handleClickVolumeButton();
              break;
          }
      }),
      b(this, "renderUIModules", (t) =>
        t.map((n, r) => this.renderUIModule(n, r))
      ),
      b(this, "renderUIModule", (t, n) => {
        const {
          defaultCurrentTime: r,
          progressUpdateInterval: i,
          showDownloadProgress: o,
          showFilledProgress: l,
          showFilledVolume: s,
          defaultDuration: a,
          customIcons: c,
          showSkipControls: p,
          onClickPrevious: v,
          onClickNext: w,
          onChangeCurrentTimeError: E,
          showJumpControls: S,
          customAdditionalControls: k,
          customVolumeControls: D,
          muted: m,
          timeFormat: f,
          volume: g,
          loop: P,
          mse: I,
          i18nAriaLabels: _,
        } = this.props;
        switch (t) {
          case We.CURRENT_TIME:
            return H.createElement(
              "div",
              {
                key: n,
                id: "rhap_current-time",
                className: "rhap_time rhap_current-time",
              },
              H.createElement(Ld, {
                audio: this.audio.current,
                isLeftTime: !1,
                defaultCurrentTime: r,
                timeFormat: f,
              })
            );
          case We.CURRENT_LEFT_TIME:
            return H.createElement(
              "div",
              {
                key: n,
                id: "rhap_current-left-time",
                className: "rhap_time rhap_current-left-time",
              },
              H.createElement(Ld, {
                audio: this.audio.current,
                isLeftTime: !0,
                defaultCurrentTime: r,
                timeFormat: f,
              })
            );
          case We.PROGRESS_BAR:
            return H.createElement(c1, {
              key: n,
              ref: this.progressBar,
              audio: this.audio.current,
              progressUpdateInterval: i,
              showDownloadProgress: o,
              showFilledProgress: l,
              onSeek: I && I.onSeek,
              onChangeCurrentTimeError: E,
              srcDuration: I && I.srcDuration,
              i18nProgressBar: _.progressControl,
            });
          case We.DURATION:
            return H.createElement(
              "div",
              { key: n, className: "rhap_time rhap_total-time" },
              I && I.srcDuration
                ? Nr(I.srcDuration, I.srcDuration, this.props.timeFormat)
                : H.createElement(d1, {
                    audio: this.audio.current,
                    defaultDuration: a,
                    timeFormat: f,
                  })
            );
          case We.ADDITIONAL_CONTROLS:
            return H.createElement(
              "div",
              { key: n, className: "rhap_additional-controls" },
              this.renderUIModules(k)
            );
          case We.MAIN_CONTROLS: {
            const L = this.isPlaying();
            let R;
            return (
              L
                ? (R = c.pause
                    ? c.pause
                    : H.createElement(Bt, { icon: "mdi:pause-circle" }))
                : (R = c.play
                    ? c.play
                    : H.createElement(Bt, { icon: "mdi:play-circle" })),
              H.createElement(
                "div",
                { key: n, className: "rhap_main-controls" },
                p &&
                  H.createElement(
                    "button",
                    {
                      "aria-label": _.previous,
                      className:
                        "rhap_button-clear rhap_main-controls-button rhap_skip-button",
                      type: "button",
                      onClick: v,
                    },
                    c.previous
                      ? c.previous
                      : H.createElement(Bt, { icon: "mdi:skip-previous" })
                  ),
                S &&
                  H.createElement(
                    "button",
                    {
                      "aria-label": _.rewind,
                      className:
                        "rhap_button-clear rhap_main-controls-button rhap_rewind-button",
                      type: "button",
                      onClick: this.handleClickRewind,
                    },
                    c.rewind
                      ? c.rewind
                      : H.createElement(Bt, { icon: "mdi:rewind" })
                  ),
                H.createElement(
                  "button",
                  {
                    "aria-label": L ? _.pause : _.play,
                    className:
                      "rhap_button-clear rhap_main-controls-button rhap_play-pause-button",
                    type: "button",
                    onClick: this.togglePlay,
                  },
                  R
                ),
                S &&
                  H.createElement(
                    "button",
                    {
                      "aria-label": _.forward,
                      className:
                        "rhap_button-clear rhap_main-controls-button rhap_forward-button",
                      type: "button",
                      onClick: this.handleClickForward,
                    },
                    c.forward
                      ? c.forward
                      : H.createElement(Bt, { icon: "mdi:fast-forward" })
                  ),
                p &&
                  H.createElement(
                    "button",
                    {
                      "aria-label": _.next,
                      className:
                        "rhap_button-clear rhap_main-controls-button rhap_skip-button",
                      type: "button",
                      onClick: w,
                    },
                    c.next
                      ? c.next
                      : H.createElement(Bt, { icon: "mdi:skip-next" })
                  )
              )
            );
          }
          case We.VOLUME_CONTROLS:
            return H.createElement(
              "div",
              { key: n, className: "rhap_volume-controls" },
              this.renderUIModules(D)
            );
          case We.LOOP: {
            const L = this.audio.current ? this.audio.current.loop : P;
            let R;
            return (
              L
                ? (R = c.loop
                    ? c.loop
                    : H.createElement(Bt, { icon: "mdi:repeat" }))
                : (R = c.loopOff
                    ? c.loopOff
                    : H.createElement(Bt, { icon: "mdi:repeat-off" })),
              H.createElement(
                "button",
                {
                  key: n,
                  "aria-label": L ? _.loop : _.loopOff,
                  className: "rhap_button-clear rhap_repeat-button",
                  type: "button",
                  onClick: this.handleClickLoopButton,
                },
                R
              )
            );
          }
          case We.VOLUME: {
            const { volume: L = m ? 0 : g } = this.audio.current || {};
            let R;
            return (
              L
                ? (R = c.volume
                    ? c.volume
                    : H.createElement(Bt, { icon: "mdi:volume-high" }))
                : (R = c.volume
                    ? c.volumeMute
                    : H.createElement(Bt, { icon: "mdi:volume-mute" })),
              H.createElement(
                "div",
                { key: n, className: "rhap_volume-container" },
                H.createElement(
                  "button",
                  {
                    "aria-label": L ? _.volume : _.volumeMute,
                    onClick: this.handleClickVolumeButton,
                    type: "button",
                    className: "rhap_button-clear rhap_volume-button",
                  },
                  R
                ),
                H.createElement(f1, {
                  audio: this.audio.current,
                  volume: L,
                  onMuteChange: this.handleMuteChange,
                  showFilledVolume: s,
                  i18nVolumeControl: _.volumeControl,
                })
              )
            );
          }
          default:
            return N.isValidElement(t)
              ? t.key
                ? t
                : N.cloneElement(t, { key: n })
              : null;
        }
      });
  }
  componentDidMount() {
    this.forceUpdate();
    const t = this.audio.current;
    this.props.muted ? (t.volume = 0) : (t.volume = this.lastVolume),
      t.addEventListener("error", (n) => {
        this.props.onError && this.props.onError(n);
      }),
      t.addEventListener("canplay", (n) => {
        this.props.onCanPlay && this.props.onCanPlay(n);
      }),
      t.addEventListener("canplaythrough", (n) => {
        this.props.onCanPlayThrough && this.props.onCanPlayThrough(n);
      }),
      t.addEventListener("play", this.handlePlay),
      t.addEventListener("abort", this.handleAbort),
      t.addEventListener("ended", this.handleEnded),
      t.addEventListener("playing", (n) => {
        this.props.onPlaying && this.props.onPlaying(n);
      }),
      t.addEventListener("seeking", (n) => {
        this.props.onSeeking && this.props.onSeeking(n);
      }),
      t.addEventListener("seeked", (n) => {
        this.props.onSeeked && this.props.onSeeked(n);
      }),
      t.addEventListener("waiting", (n) => {
        this.props.onWaiting && this.props.onWaiting(n);
      }),
      t.addEventListener("emptied", (n) => {
        this.props.onEmptied && this.props.onEmptied(n);
      }),
      t.addEventListener("stalled", (n) => {
        this.props.onStalled && this.props.onStalled(n);
      }),
      t.addEventListener("suspend", (n) => {
        this.props.onSuspend && this.props.onSuspend(n);
      }),
      t.addEventListener("loadstart", (n) => {
        this.props.onLoadStart && this.props.onLoadStart(n);
      }),
      t.addEventListener("loadedmetadata", (n) => {
        this.props.onLoadedMetaData && this.props.onLoadedMetaData(n);
      }),
      t.addEventListener("loadeddata", (n) => {
        this.props.onLoadedData && this.props.onLoadedData(n);
      }),
      t.addEventListener("pause", this.handlePause),
      t.addEventListener(
        "timeupdate",
        Qp((n) => {
          this.props.onListen && this.props.onListen(n);
        }, this.props.listenInterval)
      ),
      t.addEventListener("volumechange", (n) => {
        this.props.onVolumeChange && this.props.onVolumeChange(n);
      }),
      t.addEventListener("encrypted", (n) => {
        const { mse: r } = this.props;
        r && r.onEcrypted && r.onEcrypted(n);
      });
  }
  componentDidUpdate(t) {
    const { src: n, autoPlayAfterSrcChange: r } = this.props;
    t.src !== n && (r ? this.playAudioPromise() : this.forceUpdate());
  }
  render() {
    const {
        className: t,
        src: n,
        loop: r,
        preload: i,
        autoPlay: o,
        crossOrigin: l,
        mediaGroup: s,
        header: a,
        footer: c,
        layout: p,
        customProgressBarSection: v,
        customControlsSection: w,
        children: E,
        style: S,
        i18nAriaLabels: k,
      } = this.props,
      D = this.audio.current ? this.audio.current.loop : r,
      m = D ? "rhap_loop--on" : "rhap_loop--off",
      f = this.isPlaying()
        ? "rhap_play-status--playing"
        : "rhap_play-status--paused";
    return H.createElement(
      "div",
      {
        role: "group",
        tabIndex: 0,
        "aria-label": k.player,
        className: `rhap_container ${m} ${f} ${t}`,
        onKeyDown: this.handleKeyDown,
        ref: this.container,
        style: S,
      },
      H.createElement(
        "audio",
        {
          src: n,
          controls: !1,
          loop: D,
          autoPlay: o,
          preload: i,
          crossOrigin: l,
          mediaGroup: s,
          ref: this.audio,
        },
        E
      ),
      a && H.createElement("div", { className: "rhap_header" }, a),
      H.createElement(
        "div",
        { className: `rhap_main ${s1(p)}` },
        H.createElement(
          "div",
          { className: "rhap_progress-section" },
          this.renderUIModules(v)
        ),
        H.createElement(
          "div",
          { className: "rhap_controls-section" },
          this.renderUIModules(w)
        )
      ),
      c && H.createElement("div", { className: "rhap_footer" }, c)
    );
  }
}
b(Hp, "defaultProps", {
  autoPlay: !1,
  autoPlayAfterSrcChange: !0,
  listenInterval: 1e3,
  progressJumpStep: 5e3,
  progressJumpSteps: {},
  volumeJumpStep: 0.1,
  loop: !1,
  muted: !1,
  preload: "auto",
  progressUpdateInterval: 20,
  defaultCurrentTime: "--:--",
  defaultDuration: "--:--",
  timeFormat: "auto",
  volume: 1,
  className: "",
  showJumpControls: !0,
  showSkipControls: !1,
  showDownloadProgress: !0,
  showFilledProgress: !0,
  showFilledVolume: !1,
  customIcons: {},
  customProgressBarSection: [We.CURRENT_TIME, We.PROGRESS_BAR, We.DURATION],
  customControlsSection: [
    We.ADDITIONAL_CONTROLS,
    We.MAIN_CONTROLS,
    We.VOLUME_CONTROLS,
  ],
  customAdditionalControls: [We.LOOP],
  customVolumeControls: [We.VOLUME],
  layout: "stacked",
  hasDefaultKeyBindings: !0,
  i18nAriaLabels: {
    player: "Audio player",
    progressControl: "Audio progress control",
    volumeControl: "Volume control",
    play: "Play",
    pause: "Pause",
    rewind: "Rewind",
    forward: "Forward",
    previous: "Previous",
    next: "Skip",
    loop: "Disable loop",
    loopOff: "Enable loop",
    volume: "Mute",
    volumeMute: "Unmute",
  },
});
const p1 = "/assets/cyco-59f3fbc4.mp3",
  h1 = "/assets/girl-4d3a9878.mp3",
  m1 = "/assets/gold-caafe68d.mp3",
  g1 = "/assets/ken-513571ba.mp3",
  Hn = [
    { src: m1, title: "$FELLAS", author: "ALL MY FELLAS", art: "superman.jpg" },
    {
      src: h1,
      title: "New Girl",
      author: "The Suicide Machines",
      art: "newgirl.jpg",
    },
    {
      src: g1,
      title: "Police Truck",
      author: "Dead Kennedys",
      art: "police.png",
    },
    {
      src: p1,
      title: "Cyco Vision",
      author: "Suicidal Tendencies",
      art: "freed.jpg",
    },
  ],
  v1 = () => {
    const [e, t] = N.useState(0),
      n = () => {
        console.log("click next"), t((o) => (o < Hn.length - 1 ? o + 1 : 0));
      },
      r = () => {
        console.log("click prev"), t((o) => (o > 0 ? o - 1 : Hn.length - 1));
      },
      i = () => {
        console.log("end"), t((o) => (o < Hn.length - 1 ? o + 1 : 0));
      };
    return T.jsxs("div", {
      className:
        "container absolute w-[500px] z-1000 bg-black border-yellow-300 border-2 rounded-xl p-2",
      style: {
        position: "absolute",
        bottom: "6%",
        right: "5%",
        width: "220px",
      },
      children: [
        T.jsx(Hp, {
          autoPlay: !0,
          src: Hn[e].src,
          header: T.jsx(T.Fragment, {
            children: T.jsxs("div", {
              className: "custom-header",
              style: { display: "flex", alignItems: "center" },
              children: [
                T.jsx("img", {
                  className: "w-[50px] rounded-full spin-animation -ml-2",
                  src: Hn[e].art,
                  alt: "goldfinger",
                }),
                T.jsxs("div", {
                  className: "ml-2",
                  style: { whiteSpace: "nowrap", overflow: "hidden" },
                  children: [
                    T.jsx("div", {
                      className:
                        "text-left text-yellow-300 text-xl custom-font",
                      children: Hn[e].title,
                    }),
                    T.jsxs(Pp, {
                      direction: "right",
                      className: "pl-4 text-left text-yellow-300 custom-font",
                      children: [Hn[e].author, "      "],
                    }),
                  ],
                }),
              ],
            }),
          }),
          showSkipControls: !0,
          onClickNext: n,
          onEnded: i,
          onClickPrevious: r,
          showJumpControls: !1,
          showDownloadProgress: !1,
          showFilledProgress: !1,
          customProgressBarSection: [],
          customAdditionalControls: [],
          customVolumeControls: [],
          className: "bg-black",
        }),
        T.jsx("p", {
          children: T.jsx("a", {
            href: "https://github.com/lhz516/react-h5-audio-player",
            target: "_blank",
          }),
        }),
        T.jsx("style", {
          children: `
            .spin-animation {
                animation: spin-counterclockwise 5s linear infinite; /* Adjust the duration (5s) as needed */
            }

            @keyframes spin-counterclockwise {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(-360deg);
                }
            }
            .custom-header {
                margin-bottom: -10px; /* Adjust the margin as needed to decrease the spacing */
            }

                .your-button-class {
                    color: #FF0000 !important;
                }
            `,
        }),
      ],
    });
  };
function y1({ showVideo: e }) {
  const [t, n] = N.useState(!1),
    [r, i] = N.useState(!1),
    [o, l] = N.useState(!1),
    [s, a] = N.useState(!1);
  return (
    N.useEffect(() => {
      const c = setTimeout(() => {
        n(!0);
      }, 500);
      return (
        setTimeout(() => {
          i(!0);
        }, 1200),
        setTimeout(() => {
          a(!0);
        }, 2e3),
        setTimeout(() => {
          l(!0);
        }, 1600),
        () => clearTimeout(c)
      );
    }, []),
    ey("0x00000000000000000000000", { successDuration: 2500 }),
    T.jsxs(T.Fragment, {
      children: [
        T.jsx("div", {
          "min-h-screen": !0,
          children: T.jsxs("div", {
            className: "bg-black bg-cover relative min-h-screen",
            children: [
              e &&
                T.jsxs("video", {
                  autoPlay: !0,
                  loop: !0,
                  playsInline: !0,
                  muted: !0,
                  className:
                    "absolute top-0 left-0 w-full h-full object-cover z-0",
                  style: { position: "fixed" },
                  children: [
                    T.jsx("source", { src: ny, type: "video/mp4" }),
                    "Your browser does not support the video tag.",
                  ],
                }),
              T.jsx(Pp, {
                autoFill: !0,
                className:
                  "py-1 text-xl text-white bg-black custom-font absolute",
                children: T.jsx("a", {
                  href: "https://app.uniswap.org/swap?outputCurrency=0x00000000000000000000000&chain=ethereum",
                  children: "ALL MY FELLAS      ",
                }),
              }),
              T.jsxs("div", {
                children: [
                  s &&
                    T.jsx("a", {
                      href: "https://app.uniswap.org/swap?outputCurrency=0x00000000000000000000000&chain=ethereum",
                      children: T.jsx("img", {
                        style: { animation: "jiggle1 6s ease-in-out infinite" },
                        className: "absolute right-10 top-20 w-1/4 z-10",
                        src: "uniswapwin.png",
                        alt: "uni",
                      }),
                    }),
                  r &&
                    T.jsx("a", {
                      href: "http://t.me/allmyfellaseth",
                      children: T.jsx("img", {
                        style: { animation: "jiggle1 5s ease-in-out infinite" },
                        className: "absolute left-32 top-48 top-20 w-1/4 z-10",
                        src: "tgwin.png",
                        alt: "tg",
                      }),
                    }),
                  o &&
                    T.jsx("a", {
                      href: "https://twitter.com/AllMyFellasErc",
                      children: T.jsx("img", {
                        style: { animation: "jiggle1 4s ease-in-out infinite" },
                        className:
                          "absolute right-[10%] bottom-[30%] w-1/4 z-10",
                        src: "twitterwin.png",
                        alt: "twitter",
                      }),
                    }),
                ],
              }),
              T.jsxs("div", {
                className: "flex flex-col items-center justify-center",
                children: [
                  t &&
                    T.jsx("div", {
                      className:
                        "flex items-center scale-[60%] justify-center z-10 absolute top-[79%] left-[-30%] pr-8 right-0",
                      children: T.jsx("img", {
                        style: { animation: "jiggle2 3s ease-in-out infinite" },
                        className: "w-1/2 z-3 absolute",
                        src: "win1.png",
                        alt: "win1",
                      }),
                    }),
                  T.jsxs("div", {
                    className:
                      "flex flex-col items-center justify-center absolute inset-0 z-0",
                    children: [
                      T.jsx("img", {
                        src: "art.png",
                        alt: "game",
                        className: "scale-[75%] z-1",
                      }),
                      T.jsx("h1", {
                        style: { whiteSpace: "nowrap" },
                        className:
                          "text-yellow-300 absolute top-10 lg:top-20 text-sm sm:text-xl custom-font text-center",
                        children:
                          "CA: 0x00000000000000000000000 ",
                      }),
                    ],
                  }),
                ],
              }),
              T.jsx("style", {
                children: `
            /* styles.css */
              @keyframes jiggle1 {
              0% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
              100% {
                transform: translateY(0);
              }
            }

            @keyframes jiggle2 {
              0% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-15px); /* Different from the first image */
              }
              100% {
                transform: translateY(0);
              }
            }

              .custom-font {
                font-family: 'Ritafurey-BoldItalic';
              }

            `,
              }),
            ],
          }),
        }),
        T.jsxs("div", {
          className:
            "absolute h-screen w-1/2 mx-auto flex justify-center items-center end-0 start-0 top-1/2 pt-[40px] md:pt-[1200px]",
          children: [" ", T.jsx("img", { src: "bird.jpg", alt: "" })],
        }),
        T.jsxs("div", {
          className: "h-screen flex items-center justify-center mb-[600px]",
          children: [
            T.jsx("h1", {
              className:
                "text-white absolute mb-[400px] text-center z-1 text-4xl sm:text-8xl custom-font",
              children: "Fellanomics",
            }),
            T.jsxs("ul", {
              className:
                "text-white absolute pb-10 px-10 md:text-6xl text-lg sm:text-3xl custom-font",
              children: [
                T.jsx("li", { children: "Total Supply: 888,888,888 $FELLAS" }),
                T.jsx("li", { children: "Locked & Renounced" }),
                T.jsx("li", { children: "Tax: None" }),
              ],
            }),
            T.jsxs("div", {
              className: "flex pt-[60%]",
              children: [
                T.jsx("img", {
                  style: { animation: "jiggle2 3s ease-in-out infinite" },
                  src: "bang.jpg",
                  alt: "Image 1",
                  className: "w-1/3 w-1/3 p-8 left-0 absolute",
                }),
                T.jsx("img", {
                  style: { animation: "jiggle1 5s ease-in-out infinite" },
                  src: "art.jpg",
                  alt: "Image 2",
                  className: "w-1/3  p-8 left-1/3 absolute",
                }),
                T.jsx("img", {
                  style: { animation: "jiggle2 2s ease-in-out infinite" },
                  src: "purp.jpg",
                  alt: "Image 3",
                  className: "w-1/3  p-8 left-2/3 absolute",
                }),
              ],
            }),
            T.jsxs("div", {
              className: "flex pt-[130%]",
              children: [
                T.jsx("img", {
                  style: { animation: "jiggle1 6s ease-in-out infinite" },
                  src: "tal.jpg",
                  alt: "Image 1",
                  className: "w-1/3 w-1/3 p-8 left-0 absolute",
                }),
                T.jsx("img", {
                  style: { animation: "jiggle2 4s ease-in-out infinite" },
                  src: "bathtub.jpg",
                  alt: "Image 2",
                  className: "w-1/3  p-8 left-1/3 absolute",
                }),
                T.jsx("img", {
                  style: { animation: "jiggle1 6s ease-in-out infinite" },
                  src: "cowboy.jpg",
                  alt: "Image 3",
                  className: "w-1/3  p-8 left-2/3 absolute",
                }),
              ],
            }),
            T.jsxs("div", {
              className: "flex pt-[200%]",
              children: [
                T.jsx("img", {
                  style: { animation: "jiggle1 4s ease-in-out infinite" },
                  src: "bike.jpg",
                  alt: "Image 1",
                  className: "w-1/3 w-1/3 p-8 left-0 absolute",
                }),
                T.jsx("img", {
                  style: { animation: "jiggle2 2s ease-in-out infinite" },
                  src: "harambe.jpg",
                  alt: "Image 2",
                  className: "w-1/3  p-8 left-1/3 absolute",
                }),
                T.jsx("img", {
                  style: { animation: "jiggle1 4s ease-in-out infinite" },
                  src: "gaz.jpg",
                  alt: "Image 3",
                  className: "w-1/3  p-8 left-2/3 absolute",
                }),
              ],
            }),
            T.jsxs("div", {
              className: "flex pt-[270%]",
              children: [
                T.jsx("img", {
                  style: {
                    animation: "jiggle1 7s ease-in-out infinite",
                    marginBottom: "100px",
                  },
                  src: "self.jpg",
                  alt: "Image 1",
                  className: "w-1/3 w-1/3 p-8 left-0 absolute",
                }),
                T.jsx("img", {
                  style: {
                    animation: "jiggle1 4s ease-in-out infinite",
                    marginBottom: "100px",
                  },
                  src: "cig.jpg",
                  alt: "Image 2",
                  className: "w-1/3  p-8 left-1/3 absolute",
                }),
                T.jsx("img", {
                  style: {
                    animation: "jiggle2 2s ease-in-out infinite",
                    marginBottom: "100px",
                  },
                  src: "bw.jpg",
                  alt: "Image 3",
                  className: "w-1/3  p-8 left-2/3 absolute",
                }),
              ],
            }),
          ],
        }),
        T.jsx("div", { className: "h-[100px]" }),
        T.jsx("div", {
          className:
            "absolute -bottom-20 left-0 right-0 text-center custom-font text-yellow-400",
          children: T.jsx("h1", {
            children: "GeorgeBushProSkater888@gmail.com",
          }),
        }),
        T.jsx("div", {
          className: "fixed bottom-0 left-0 w-full",
          children: T.jsx(ty, {}),
        }),
        T.jsx("div", {
          className: "fixed bottom-20 right-4 w-[200px] z-10",
          children: T.jsx(v1, {}),
        }),
      ],
    })
  );
}
var qo = {},
  qp = { exports: {} },
  Kp = { exports: {} },
  Gp = { exports: {} },
  Yp = { exports: {} },
  Xp = { exports: {} },
  Jp = { exports: {} },
  Zp = { exports: {} },
  $u = Object.defineProperty,
  w1 = Object.getOwnPropertyDescriptor,
  x1 = Object.getOwnPropertyNames,
  S1 = Object.prototype.hasOwnProperty,
  eh = (e, t) => {
    for (var n in t) $u(e, n, { get: t[n], enumerable: !0 });
  },
  E1 = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of x1(t))
        !S1.call(e, i) &&
          i !== n &&
          $u(e, i, {
            get: () => t[i],
            enumerable: !(r = w1(t, i)) || r.enumerable,
          });
    return e;
  },
  k1 = (e) => E1($u({}, "__esModule", { value: !0 }), e),
  th = {};
eh(th, {
  FluidValue: () => b1,
  Globals: () => nh,
  addFluidObserver: () => B1,
  callFluidObserver: () => Th,
  callFluidObservers: () => U1,
  clamp: () => vh,
  colorToRgba: () => ja,
  colors: () => M1,
  createInterpolator: () => Qu,
  createStringInterpolator: () => G1,
  defineHidden: () => P1,
  deprecateDirectCall: () => Z1,
  deprecateInterpolate: () => X1,
  each: () => uh,
  eachProp: () => O1,
  easings: () => D1,
  flush: () => ch,
  flushCalls: () => L1,
  frameLoop: () => hh,
  getFluidObservers: () => V1,
  getFluidValue: () => Ph,
  hasFluidValue: () => z1,
  hex3: () => Eh,
  hex4: () => kh,
  hex6: () => Ch,
  hex8: () => _h,
  hsl: () => xh,
  hsla: () => Sh,
  is: () => qt,
  isAnimatedString: () => ew,
  isEqual: () => T1,
  isSSR: () => ql,
  noop: () => ah,
  onResize: () => jh,
  onScroll: () => aw,
  once: () => Hu,
  prefix: () => Yl,
  raf: () => fe,
  removeFluidObserver: () => W1,
  rgb: () => yh,
  rgba: () => wh,
  setFluidGetter: () => Oh,
  toArray: () => N1,
  useConstant: () => cw,
  useForceUpdate: () => hw,
  useIsomorphicLayoutEffect: () => qu,
  useMemoOne: () => mw,
  useOnce: () => yw,
  usePrev: () => xw,
  useReducedMotion: () => Ew,
});
var C1 = k1(th),
  nh = {};
eh(nh, {
  assign: () => ph,
  colors: () => On,
  createStringInterpolator: () => Bu,
  skipAnimation: () => fh,
  to: () => dh,
  willAdvance: () => Wu,
});
var Du = so(),
  fe = (e) => lo(e, Du),
  zu = so();
fe.write = (e) => lo(e, zu);
var Hl = so();
fe.onStart = (e) => lo(e, Hl);
var Vu = so();
fe.onFrame = (e) => lo(e, Vu);
var Uu = so();
fe.onFinish = (e) => lo(e, Uu);
var Lr = [];
fe.setTimeout = (e, t) => {
  let n = fe.now() + t,
    r = () => {
      let o = Lr.findIndex((l) => l.cancel == r);
      ~o && Lr.splice(o, 1), (Cn -= ~o ? 1 : 0);
    },
    i = { time: n, handler: e, cancel: r };
  return Lr.splice(rh(n), 0, i), (Cn += 1), ih(), i;
};
var rh = (e) => ~(~Lr.findIndex((t) => t.time > e) || ~Lr.length);
fe.cancel = (e) => {
  Hl.delete(e), Vu.delete(e), Uu.delete(e), Du.delete(e), zu.delete(e);
};
fe.sync = (e) => {
  (Na = !0), fe.batchedUpdates(e), (Na = !1);
};
fe.throttle = (e) => {
  let t;
  function n() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function r(...i) {
    (t = i), fe.onStart(n);
  }
  return (
    (r.handler = e),
    (r.cancel = () => {
      Hl.delete(n), (t = null);
    }),
    r
  );
};
var bu = typeof window < "u" ? window.requestAnimationFrame : () => {};
fe.use = (e) => (bu = e);
fe.now = typeof performance < "u" ? () => performance.now() : Date.now;
fe.batchedUpdates = (e) => e();
fe.catch = console.error;
fe.frameLoop = "always";
fe.advance = () => {
  fe.frameLoop !== "demand"
    ? console.warn(
        "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
      )
    : lh();
};
var kn = -1,
  Cn = 0,
  Na = !1;
function lo(e, t) {
  Na ? (t.delete(e), e(0)) : (t.add(e), ih());
}
function ih() {
  kn < 0 && ((kn = 0), fe.frameLoop !== "demand" && bu(oh));
}
function _1() {
  kn = -1;
}
function oh() {
  ~kn && (bu(oh), fe.batchedUpdates(lh));
}
function lh() {
  let e = kn;
  kn = fe.now();
  let t = rh(kn);
  if ((t && (sh(Lr.splice(0, t), (n) => n.handler()), (Cn -= t)), !Cn)) {
    _1();
    return;
  }
  Hl.flush(),
    Du.flush(e ? Math.min(64, kn - e) : 16.667),
    Vu.flush(),
    zu.flush(),
    Uu.flush();
}
function so() {
  let e = new Set(),
    t = e;
  return {
    add(n) {
      (Cn += t == e && !e.has(n) ? 1 : 0), e.add(n);
    },
    delete(n) {
      return (Cn -= t == e && e.has(n) ? 1 : 0), e.delete(n);
    },
    flush(n) {
      t.size &&
        ((e = new Set()),
        (Cn -= t.size),
        sh(t, (r) => r(n) && e.add(r)),
        (Cn += e.size),
        (t = e));
    },
  };
}
function sh(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      fe.catch(r);
    }
  });
}
function ah() {}
var P1 = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  qt = {
    arr: Array.isArray,
    obj: (e) => !!e && e.constructor.name === "Object",
    fun: (e) => typeof e == "function",
    str: (e) => typeof e == "string",
    num: (e) => typeof e == "number",
    und: (e) => e === void 0,
  };
function T1(e, t) {
  if (qt.arr(e)) {
    if (!qt.arr(t) || e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  return e === t;
}
var uh = (e, t) => e.forEach(t);
function O1(e, t, n) {
  if (qt.arr(e)) {
    for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    return;
  }
  for (let r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var N1 = (e) => (qt.und(e) ? [] : qt.arr(e) ? e : [e]);
function ch(e, t) {
  if (e.size) {
    let n = Array.from(e);
    e.clear(), uh(n, t);
  }
}
var L1 = (e, ...t) => ch(e, (n) => n(...t)),
  ql = () =>
    typeof window > "u" ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  Bu,
  dh,
  On = null,
  fh = !1,
  Wu = ah,
  ph = (e) => {
    e.to && (dh = e.to),
      e.now && (fe.now = e.now),
      e.colors !== void 0 && (On = e.colors),
      e.skipAnimation != null && (fh = e.skipAnimation),
      e.createStringInterpolator && (Bu = e.createStringInterpolator),
      e.requestAnimationFrame && fe.use(e.requestAnimationFrame),
      e.batchedUpdates && (fe.batchedUpdates = e.batchedUpdates),
      e.willAdvance && (Wu = e.willAdvance),
      e.frameLoop && (fe.frameLoop = e.frameLoop);
  },
  Ci = new Set(),
  Ot = [],
  $s = [],
  dl = 0,
  hh = {
    get idle() {
      return !Ci.size && !Ot.length;
    },
    start(e) {
      dl > e.priority ? (Ci.add(e), fe.onStart(j1)) : (mh(e), fe(La));
    },
    advance: La,
    sort(e) {
      if (dl) fe.onFrame(() => hh.sort(e));
      else {
        let t = Ot.indexOf(e);
        ~t && (Ot.splice(t, 1), gh(e));
      }
    },
    clear() {
      (Ot = []), Ci.clear();
    },
  };
function j1() {
  Ci.forEach(mh), Ci.clear(), fe(La);
}
function mh(e) {
  Ot.includes(e) || gh(e);
}
function gh(e) {
  Ot.splice(
    I1(Ot, (t) => t.priority > e.priority),
    0,
    e
  );
}
function La(e) {
  let t = $s;
  for (let n = 0; n < Ot.length; n++) {
    let r = Ot[n];
    (dl = r.priority), r.idle || (Wu(r), r.advance(e), r.idle || t.push(r));
  }
  return (dl = 0), ($s = Ot), ($s.length = 0), (Ot = t), Ot.length > 0;
}
function I1(e, t) {
  let n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var vh = (e, t, n) => Math.min(Math.max(n, e), t),
  M1 = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199,
  },
  zt = "[-+]?\\d*\\.?\\d+",
  fl = zt + "%";
function Kl(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var yh = new RegExp("rgb" + Kl(zt, zt, zt)),
  wh = new RegExp("rgba" + Kl(zt, zt, zt, zt)),
  xh = new RegExp("hsl" + Kl(zt, fl, fl)),
  Sh = new RegExp("hsla" + Kl(zt, fl, fl, zt)),
  Eh = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  kh = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  Ch = /^#([0-9a-fA-F]{6})$/,
  _h = /^#([0-9a-fA-F]{8})$/;
function R1(e) {
  let t;
  return typeof e == "number"
    ? e >>> 0 === e && e >= 0 && e <= 4294967295
      ? e
      : null
    : (t = Ch.exec(e))
    ? parseInt(t[1] + "ff", 16) >>> 0
    : On && On[e] !== void 0
    ? On[e]
    : (t = yh.exec(e))
    ? ((pr(t[1]) << 24) | (pr(t[2]) << 16) | (pr(t[3]) << 8) | 255) >>> 0
    : (t = wh.exec(e))
    ? ((pr(t[1]) << 24) | (pr(t[2]) << 16) | (pr(t[3]) << 8) | Md(t[4])) >>> 0
    : (t = Eh.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
    : (t = _h.exec(e))
    ? parseInt(t[1], 16) >>> 0
    : (t = kh.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
    : (t = xh.exec(e))
    ? (jd(Id(t[1]), Co(t[2]), Co(t[3])) | 255) >>> 0
    : (t = Sh.exec(e))
    ? (jd(Id(t[1]), Co(t[2]), Co(t[3])) | Md(t[4])) >>> 0
    : null;
}
function Ds(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function jd(e, t, n) {
  let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
    i = 2 * n - r,
    o = Ds(i, r, e + 1 / 3),
    l = Ds(i, r, e),
    s = Ds(i, r, e - 1 / 3);
  return (
    (Math.round(o * 255) << 24) |
    (Math.round(l * 255) << 16) |
    (Math.round(s * 255) << 8)
  );
}
function pr(e) {
  let t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Id(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function Md(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Co(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function ja(e) {
  let t = R1(e);
  if (t === null) return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24,
    r = (t & 16711680) >>> 16,
    i = (t & 65280) >>> 8,
    o = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${i}, ${o})`;
}
var Qu = (e, t, n) => {
  if (qt.fun(e)) return e;
  if (qt.arr(e)) return Qu({ range: e, output: t, extrapolate: n });
  if (qt.str(e.output[0])) return Bu(e);
  let r = e,
    i = r.output,
    o = r.range || [0, 1],
    l = r.extrapolateLeft || r.extrapolate || "extend",
    s = r.extrapolateRight || r.extrapolate || "extend",
    a = r.easing || ((c) => c);
  return (c) => {
    let p = F1(c, o);
    return A1(c, o[p], o[p + 1], i[p], i[p + 1], a, l, s, r.map);
  };
};
function A1(e, t, n, r, i, o, l, s, a) {
  let c = a ? a(e) : e;
  if (c < t) {
    if (l === "identity") return c;
    l === "clamp" && (c = t);
  }
  if (c > n) {
    if (s === "identity") return c;
    s === "clamp" && (c = n);
  }
  return r === i
    ? r
    : t === n
    ? e <= t
      ? r
      : i
    : (t === -1 / 0
        ? (c = -c)
        : n === 1 / 0
        ? (c = c - t)
        : (c = (c - t) / (n - t)),
      (c = o(c)),
      r === -1 / 0
        ? (c = -c)
        : i === 1 / 0
        ? (c = c + r)
        : (c = c * (i - r) + r),
      c);
}
function F1(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
  return n - 1;
}
var $1 =
    (e, t = "end") =>
    (n) => {
      n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001);
      let r = n * e,
        i = t === "end" ? Math.floor(r) : Math.ceil(r);
      return vh(0, 1, i / e);
    },
  pl = 1.70158,
  _o = pl * 1.525,
  Rd = pl + 1,
  Ad = (2 * Math.PI) / 3,
  Fd = (2 * Math.PI) / 4.5,
  Po = (e) =>
    e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  D1 = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
    easeInOutQuad: (e) =>
      e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
    easeInOutCubic: (e) =>
      e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
    easeInOutQuart: (e) =>
      e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
    easeInOutQuint: (e) =>
      e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
    easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
    easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
    easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * e - 10)),
    easeOutExpo: (e) => (e === 1 ? 1 : 1 - Math.pow(2, -10 * e)),
    easeInOutExpo: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? Math.pow(2, 20 * e - 10) / 2
        : (2 - Math.pow(2, -20 * e + 10)) / 2,
    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
    easeInOutCirc: (e) =>
      e < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
    easeInBack: (e) => Rd * e * e * e - pl * e * e,
    easeOutBack: (e) => 1 + Rd * Math.pow(e - 1, 3) + pl * Math.pow(e - 1, 2),
    easeInOutBack: (e) =>
      e < 0.5
        ? (Math.pow(2 * e, 2) * ((_o + 1) * 2 * e - _o)) / 2
        : (Math.pow(2 * e - 2, 2) * ((_o + 1) * (e * 2 - 2) + _o) + 2) / 2,
    easeInElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * Ad),
    easeOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * Ad) + 1,
    easeInOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Fd)) / 2
        : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Fd)) / 2 +
          1,
    easeInBounce: (e) => 1 - Po(1 - e),
    easeOutBounce: Po,
    easeInOutBounce: (e) =>
      e < 0.5 ? (1 - Po(1 - 2 * e)) / 2 : (1 + Po(2 * e - 1)) / 2,
    steps: $1,
  },
  zi = Symbol.for("FluidValue.get"),
  Dr = Symbol.for("FluidValue.observers"),
  z1 = (e) => !!(e && e[zi]),
  Ph = (e) => (e && e[zi] ? e[zi]() : e),
  V1 = (e) => e[Dr] || null;
function Th(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function U1(e, t) {
  let n = e[Dr];
  n &&
    n.forEach((r) => {
      Th(r, t);
    });
}
var b1 = class {
    constructor(t) {
      if (!t && !(t = this.get)) throw Error("Unknown getter");
      Oh(this, t);
    }
  },
  Oh = (e, t) => Nh(e, zi, t);
function B1(e, t) {
  if (e[zi]) {
    let n = e[Dr];
    n || Nh(e, Dr, (n = new Set())),
      n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function W1(e, t) {
  let n = e[Dr];
  if (n && n.has(t)) {
    let r = n.size - 1;
    r ? n.delete(t) : (e[Dr] = null),
      e.observerRemoved && e.observerRemoved(r, t);
  }
}
var Nh = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  Ko = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  Q1 =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  $d = new RegExp(`(${Ko.source})(%|[a-z]+)`, "i"),
  H1 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  Gl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  Lh = (e) => {
    let [t, n] = q1(e);
    if (!t || ql()) return e;
    let r = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(t);
    return r
      ? r.trim()
      : n && n.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(n) ||
        e
      : n && Gl.test(n)
      ? Lh(n)
      : n || e;
  },
  q1 = (e) => {
    let t = Gl.exec(e);
    if (!t) return [,];
    let [, n, r] = t;
    return [n, r];
  },
  zs,
  K1 = (e, t, n, r, i) =>
    `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
  G1 = (e) => {
    zs ||
      (zs = On
        ? new RegExp(`(${Object.keys(On).join("|")})(?!\\w)`, "g")
        : /^\b$/);
    let t = e.output.map((i) =>
        Ph(i).replace(Gl, Lh).replace(Q1, ja).replace(zs, ja)
      ),
      n = t.map((i) => i.match(Ko).map(Number)),
      r = n[0]
        .map((i, o) =>
          n.map((l) => {
            if (!(o in l))
              throw Error('The arity of each "output" value must be equal');
            return l[o];
          })
        )
        .map((i) => Qu({ ...e, output: i }));
    return (i) => {
      var s;
      let o =
          !$d.test(t[0]) &&
          ((s = t.find((a) => $d.test(a))) == null
            ? void 0
            : s.replace(Ko, "")),
        l = 0;
      return t[0].replace(Ko, () => `${r[l++](i)}${o || ""}`).replace(H1, K1);
    };
  },
  Yl = "react-spring: ",
  Hu = (e) => {
    let t = e,
      n = !1;
    if (typeof t != "function")
      throw new TypeError(`${Yl}once requires a function parameter`);
    return (...r) => {
      n || (t(...r), (n = !0));
    };
  },
  Y1 = Hu(console.warn);
function X1() {
  Y1(`${Yl}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var J1 = Hu(console.warn);
function Z1() {
  J1(
    `${Yl}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function ew(e) {
  return (
    qt.str(e) &&
    (e[0] == "#" || /\d/.test(e) || (!ql() && Gl.test(e)) || e in (On || {}))
  );
}
var hr,
  Go = new WeakMap(),
  tw = (e) =>
    e.forEach(({ target: t, contentRect: n }) => {
      var r;
      return (r = Go.get(t)) == null ? void 0 : r.forEach((i) => i(n));
    });
function nw(e, t) {
  hr || (typeof ResizeObserver < "u" && (hr = new ResizeObserver(tw)));
  let n = Go.get(t);
  return (
    n || ((n = new Set()), Go.set(t, n)),
    n.add(e),
    hr && hr.observe(t),
    () => {
      let r = Go.get(t);
      r && (r.delete(e), !r.size && hr && hr.unobserve(t));
    }
  );
}
var Yo = new Set(),
  li,
  rw = () => {
    let e = () => {
      Yo.forEach((t) =>
        t({ width: window.innerWidth, height: window.innerHeight })
      );
    };
    return (
      window.addEventListener("resize", e),
      () => {
        window.removeEventListener("resize", e);
      }
    );
  },
  iw = (e) => (
    Yo.add(e),
    li || (li = rw()),
    () => {
      Yo.delete(e), !Yo.size && li && (li(), (li = void 0));
    }
  ),
  jh = (e, { container: t = document.documentElement } = {}) =>
    t === document.documentElement ? iw(e) : nw(e, t),
  ow = (e, t, n) => (t - e === 0 ? 1 : (n - e) / (t - e)),
  lw = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  },
  sw = class {
    constructor(t, n) {
      (this.createAxis = () => ({ current: 0, progress: 0, scrollLength: 0 })),
        (this.updateAxis = (r) => {
          let i = this.info[r],
            { length: o, position: l } = lw[r];
          (i.current = this.container[`scroll${l}`]),
            (i.scrollLength =
              this.container["scroll" + o] - this.container["client" + o]),
            (i.progress = ow(0, i.scrollLength, i.current));
        }),
        (this.update = () => {
          this.updateAxis("x"), this.updateAxis("y");
        }),
        (this.sendEvent = () => {
          this.callback(this.info);
        }),
        (this.advance = () => {
          this.update(), this.sendEvent();
        }),
        (this.callback = t),
        (this.container = n),
        (this.info = { time: 0, x: this.createAxis(), y: this.createAxis() });
    }
  },
  si = new WeakMap(),
  Dd = new WeakMap(),
  Vs = new WeakMap(),
  zd = (e) => (e === document.documentElement ? window : e),
  aw = (e, { container: t = document.documentElement } = {}) => {
    let n = Vs.get(t);
    n || ((n = new Set()), Vs.set(t, n));
    let r = new sw(e, t);
    if ((n.add(r), !si.has(t))) {
      let o = () => (n == null || n.forEach((s) => s.advance()), !0);
      si.set(t, o);
      let l = zd(t);
      window.addEventListener("resize", o, { passive: !0 }),
        t !== document.documentElement && Dd.set(t, jh(o, { container: t })),
        l.addEventListener("scroll", o, { passive: !0 });
    }
    let i = si.get(t);
    return (
      fe(i),
      () => {
        var s;
        fe.cancel(i);
        let o = Vs.get(t);
        if (!o || (o.delete(r), o.size)) return;
        let l = si.get(t);
        si.delete(t),
          l &&
            (zd(t).removeEventListener("scroll", l),
            window.removeEventListener("resize", l),
            (s = Dd.get(t)) == null || s());
      }
    );
  },
  uw = N;
function cw(e) {
  let t = (0, uw.useRef)(null);
  return t.current === null && (t.current = e()), t.current;
}
var dw = N,
  fw = N,
  Vd = N,
  qu = ql() ? Vd.useEffect : Vd.useLayoutEffect,
  pw = () => {
    let e = (0, fw.useRef)(!1);
    return (
      qu(
        () => (
          (e.current = !0),
          () => {
            e.current = !1;
          }
        ),
        []
      ),
      e
    );
  };
function hw() {
  let e = (0, dw.useState)()[1],
    t = pw();
  return () => {
    t.current && e(Math.random());
  };
}
var Us = N;
function mw(e, t) {
  let [n] = (0, Us.useState)(() => ({ inputs: t, result: e() })),
    r = (0, Us.useRef)(),
    i = r.current,
    o = i;
  return (
    o
      ? (t && o.inputs && gw(t, o.inputs)) || (o = { inputs: t, result: e() })
      : (o = n),
    (0, Us.useEffect)(() => {
      (r.current = o), i == n && (n.inputs = n.result = void 0);
    }, [o]),
    o.result
  );
}
function gw(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var vw = N,
  yw = (e) => (0, vw.useEffect)(e, ww),
  ww = [],
  Ud = N;
function xw(e) {
  let t = (0, Ud.useRef)();
  return (
    (0, Ud.useEffect)(() => {
      t.current = e;
    }),
    t.current
  );
}
var Sw = N,
  Ew = () => {
    let [e, t] = (0, Sw.useState)(null);
    return (
      qu(() => {
        let n = window.matchMedia("(prefers-reduced-motion)"),
          r = (i) => {
            t(i.matches), ph({ skipAnimation: i.matches });
          };
        return (
          r(n),
          n.addEventListener("change", r),
          () => {
            n.removeEventListener("change", r);
          }
        );
      }, []),
      e
    );
  };
Zp.exports = C1;
var ce = Zp.exports,
  Ih = { exports: {} },
  kw = Object.create,
  Xl = Object.defineProperty,
  Cw = Object.getOwnPropertyDescriptor,
  _w = Object.getOwnPropertyNames,
  Pw = Object.getPrototypeOf,
  Tw = Object.prototype.hasOwnProperty,
  Ow = (e, t) => {
    for (var n in t) Xl(e, n, { get: t[n], enumerable: !0 });
  },
  Mh = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of _w(t))
        !Tw.call(e, i) &&
          i !== n &&
          Xl(e, i, {
            get: () => t[i],
            enumerable: !(r = Cw(t, i)) || r.enumerable,
          });
    return e;
  },
  Nw = (e, t, n) => (
    (n = e != null ? kw(Pw(e)) : {}),
    Mh(
      t || !e || !e.__esModule
        ? Xl(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  Lw = (e) => Mh(Xl({}, "__esModule", { value: !0 }), e),
  Rh = {};
Ow(Rh, {
  Animated: () => Ku,
  AnimatedArray: () => Gu,
  AnimatedObject: () => Zl,
  AnimatedString: () => Jl,
  AnimatedValue: () => ao,
  createHost: () => Vw,
  getAnimated: () => Fh,
  getAnimatedType: () => Aw,
  getPayload: () => Dh,
  isAnimated: () => Ah,
  setAnimated: () => $h,
});
var jw = Lw(Rh),
  Iw = ce,
  Vi = Symbol.for("Animated:node"),
  Ah = (e) => !!e && e[Vi] === e,
  Fh = (e) => e && e[Vi],
  $h = (e, t) => (0, Iw.defineHidden)(e, Vi, t),
  Dh = (e) => e && e[Vi] && e[Vi].getPayload(),
  Ku = class {
    constructor() {
      $h(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  bs = ce,
  ao = class extends Ku {
    constructor(e) {
      super(),
        (this._value = e),
        (this.done = !0),
        (this.durationProgress = 0),
        bs.is.num(this._value) && (this.lastPosition = this._value);
    }
    static create(e) {
      return new ao(e);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(e, t) {
      return (
        bs.is.num(e) &&
          ((this.lastPosition = e),
          t &&
            ((e = Math.round(e / t) * t),
            this.done && (this.lastPosition = e))),
        this._value === e ? !1 : ((this._value = e), !0)
      );
    }
    reset() {
      let { done: e } = this;
      (this.done = !1),
        bs.is.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          e && (this.lastVelocity = null),
          (this.v0 = null));
    }
  },
  Bs = ce,
  Jl = class extends ao {
    constructor(t) {
      super(0),
        (this._string = null),
        (this._toString = (0, Bs.createInterpolator)({ output: [t, t] }));
    }
    static create(t) {
      return new Jl(t);
    }
    getValue() {
      return this._string ?? (this._string = this._toString(this._value));
    }
    setValue(t) {
      if (Bs.is.str(t)) {
        if (t == this._string) return !1;
        (this._string = t), (this._value = 1);
      } else if (super.setValue(t)) this._string = null;
      else return !1;
      return !0;
    }
    reset(t) {
      t &&
        (this._toString = (0, Bs.createInterpolator)({
          output: [this.getValue(), t],
        })),
        (this._value = 0),
        super.reset();
    }
  },
  Mw = ce,
  qn = ce,
  hl = { dependencies: null },
  Zl = class extends Ku {
    constructor(t) {
      super(), (this.source = t), this.setValue(t);
    }
    getValue(t) {
      let n = {};
      return (
        (0, qn.eachProp)(this.source, (r, i) => {
          Ah(r)
            ? (n[i] = r.getValue(t))
            : (0, qn.hasFluidValue)(r)
            ? (n[i] = (0, qn.getFluidValue)(r))
            : t || (n[i] = r);
        }),
        n
      );
    }
    setValue(t) {
      (this.source = t), (this.payload = this._makePayload(t));
    }
    reset() {
      this.payload && (0, qn.each)(this.payload, (t) => t.reset());
    }
    _makePayload(t) {
      if (t) {
        let n = new Set();
        return (0, qn.eachProp)(t, this._addToPayload, n), Array.from(n);
      }
    }
    _addToPayload(t) {
      hl.dependencies && (0, qn.hasFluidValue)(t) && hl.dependencies.add(t);
      let n = Dh(t);
      n && (0, qn.each)(n, (r) => this.add(r));
    }
  },
  Gu = class extends Zl {
    constructor(e) {
      super(e);
    }
    static create(e) {
      return new Gu(e);
    }
    getValue() {
      return this.source.map((e) => e.getValue());
    }
    setValue(e) {
      let t = this.getPayload();
      return e.length == t.length
        ? t.map((n, r) => n.setValue(e[r])).some(Boolean)
        : (super.setValue(e.map(Rw)), !0);
    }
  };
function Rw(e) {
  return ((0, Mw.isAnimatedString)(e) ? Jl : ao).create(e);
}
var bd = ce;
function Aw(e) {
  let t = Fh(e);
  return t
    ? t.constructor
    : bd.is.arr(e)
    ? Gu
    : (0, bd.isAnimatedString)(e)
    ? Jl
    : ao;
}
var jr = ce,
  Fw = Nw(N),
  ai = N,
  pt = ce,
  Bd = (e, t) => {
    let n = !pt.is.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return (0, ai.forwardRef)((r, i) => {
      let o = (0, ai.useRef)(null),
        l =
          n &&
          (0, ai.useCallback)(
            (S) => {
              o.current = zw(i, S);
            },
            [i]
          ),
        [s, a] = Dw(r, t),
        c = (0, pt.useForceUpdate)(),
        p = () => {
          let S = o.current;
          (n && !S) ||
            ((S ? t.applyAnimatedValues(S, s.getValue(!0)) : !1) === !1 && c());
        },
        v = new $w(p, a),
        w = (0, ai.useRef)();
      (0, pt.useIsomorphicLayoutEffect)(
        () => (
          (w.current = v),
          (0, pt.each)(a, (S) => (0, pt.addFluidObserver)(S, v)),
          () => {
            w.current &&
              ((0, pt.each)(w.current.deps, (S) =>
                (0, pt.removeFluidObserver)(S, w.current)
              ),
              pt.raf.cancel(w.current.update));
          }
        )
      ),
        (0, ai.useEffect)(p, []),
        (0, pt.useOnce)(() => () => {
          let S = w.current;
          (0, pt.each)(S.deps, (k) => (0, pt.removeFluidObserver)(k, S));
        });
      let E = t.getComponentProps(s.getValue());
      return Fw.createElement(e, { ...E, ref: l });
    });
  },
  $w = class {
    constructor(e, t) {
      (this.update = e), (this.deps = t);
    }
    eventObserved(e) {
      e.type == "change" && pt.raf.write(this.update);
    }
  };
function Dw(e, t) {
  let n = new Set();
  return (
    (hl.dependencies = n),
    e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }),
    (e = new Zl(e)),
    (hl.dependencies = null),
    [e, n]
  );
}
function zw(e, t) {
  return e && (pt.is.fun(e) ? e(t) : (e.current = t)), t;
}
var Wd = Symbol.for("AnimatedComponent"),
  Vw = (
    e,
    {
      applyAnimatedValues: t = () => !1,
      createAnimatedStyle: n = (i) => new Zl(i),
      getComponentProps: r = (i) => i,
    } = {}
  ) => {
    let i = {
        applyAnimatedValues: t,
        createAnimatedStyle: n,
        getComponentProps: r,
      },
      o = (l) => {
        let s = Qd(l) || "Anonymous";
        return (
          jr.is.str(l)
            ? (l = o[l] || (o[l] = Bd(l, i)))
            : (l = l[Wd] || (l[Wd] = Bd(l, i))),
          (l.displayName = `Animated(${s})`),
          l
        );
      };
    return (
      (0, jr.eachProp)(e, (l, s) => {
        jr.is.arr(e) && (s = Qd(l)), (o[s] = o(l));
      }),
      { animated: o }
    );
  },
  Qd = (e) =>
    jr.is.str(e)
      ? e
      : e && jr.is.str(e.displayName)
      ? e.displayName
      : (jr.is.fun(e) && e.name) || null;
Ih.exports = jw;
var _i = Ih.exports,
  Ws = { exports: {} },
  Qs,
  Hd;
function Uw() {
  if (Hd) return Qs;
  Hd = 1;
  var e = Object.defineProperty,
    t = Object.getOwnPropertyDescriptor,
    n = Object.getOwnPropertyNames,
    r = Object.prototype.hasOwnProperty,
    i = (c, p) => {
      for (var v in p) e(c, v, { get: p[v], enumerable: !0 });
    },
    o = (c, p, v, w) => {
      if ((p && typeof p == "object") || typeof p == "function")
        for (let E of n(p))
          !r.call(c, E) &&
            E !== v &&
            e(c, E, {
              get: () => p[E],
              enumerable: !(w = t(p, E)) || w.enumerable,
            });
      return c;
    },
    l = (c) => o(e({}, "__esModule", { value: !0 }), c),
    s = {};
  i(s, { Any: () => a }), (Qs = l(s));
  var a = class {};
  return Qs;
}
var qd;
function bw() {
  return qd || ((qd = 1), (Ws.exports = Uw())), Ws.exports;
}
(function (e) {
  var t = Object.create,
    n = Object.defineProperty,
    r = Object.getOwnPropertyDescriptor,
    i = Object.getOwnPropertyNames,
    o = Object.getPrototypeOf,
    l = Object.prototype.hasOwnProperty,
    s = (u, d) => {
      for (var h in d) n(u, h, { get: d[h], enumerable: !0 });
    },
    a = (u, d, h, y) => {
      if ((d && typeof d == "object") || typeof d == "function")
        for (let C of i(d))
          !l.call(u, C) &&
            C !== h &&
            n(u, C, {
              get: () => d[C],
              enumerable: !(y = r(d, C)) || y.enumerable,
            });
      return u;
    },
    c = (u, d, h) => (a(u, d, "default"), h && a(h, d, "default")),
    p = (u, d, h) => (
      (h = u != null ? t(o(u)) : {}),
      a(
        d || !u || !u.__esModule
          ? n(h, "default", { value: u, enumerable: !0 })
          : h,
        u
      )
    ),
    v = (u) => a(n({}, "__esModule", { value: !0 }), u),
    w = {};
  s(w, {
    BailSignal: () => gs,
    Controller: () => Es,
    FrameValue: () => ho,
    Globals: () => wo.Globals,
    Interpolation: () => yo,
    Spring: () => dg,
    SpringContext: () => fr,
    SpringRef: () => go,
    SpringValue: () => Ss,
    Trail: () => pg,
    Transition: () => hg,
    config: () => Q,
    createInterpolator: () => xo.createInterpolator,
    easings: () => xo.easings,
    inferTo: () => R,
    interpolate: () => yg,
    to: () => vg,
    update: () => wg,
    useChain: () => xt,
    useInView: () => cg,
    useIsomorphicLayoutEffect: () => xo.useIsomorphicLayoutEffect,
    useReducedMotion: () => xo.useReducedMotion,
    useResize: () => ag,
    useScroll: () => sg,
    useSpring: () => ti,
    useSpringRef: () => rg,
    useSpringValue: () => ig,
    useSprings: () => _s,
    useTrail: () => nd,
    useTransition: () => rd,
  }),
    (e.exports = v(w));
  var E = ce,
    S = ce;
  function k(u, ...d) {
    return S.is.fun(u) ? u(...d) : u;
  }
  var D = (u, d) =>
      u === !0 ||
      !!(d && u && (S.is.fun(u) ? u(d) : (0, S.toArray)(u).includes(d))),
    m = (u, d) => (S.is.obj(u) ? d && u[d] : u),
    f = (u, d) => (u.default === !0 ? u[d] : u.default ? u.default[d] : void 0),
    g = (u) => u,
    P = (u, d = g) => {
      let h = I;
      u.default && u.default !== !0 && ((u = u.default), (h = Object.keys(u)));
      let y = {};
      for (let C of h) {
        let O = d(u[C], C);
        S.is.und(O) || (y[C] = O);
      }
      return y;
    },
    I = [
      "config",
      "onProps",
      "onStart",
      "onChange",
      "onPause",
      "onResume",
      "onRest",
    ],
    _ = {
      config: 1,
      from: 1,
      to: 1,
      ref: 1,
      loop: 1,
      reset: 1,
      pause: 1,
      cancel: 1,
      reverse: 1,
      immediate: 1,
      default: 1,
      delay: 1,
      onProps: 1,
      onStart: 1,
      onChange: 1,
      onPause: 1,
      onResume: 1,
      onRest: 1,
      onResolve: 1,
      items: 1,
      trail: 1,
      sort: 1,
      expires: 1,
      initial: 1,
      enter: 1,
      update: 1,
      leave: 1,
      children: 1,
      onDestroyed: 1,
      keys: 1,
      callId: 1,
      parentId: 1,
    };
  function L(u) {
    let d = {},
      h = 0;
    if (
      ((0, S.eachProp)(u, (y, C) => {
        _[C] || ((d[C] = y), h++);
      }),
      h)
    )
      return d;
  }
  function R(u) {
    let d = L(u);
    if (d) {
      let h = { to: d };
      return (0, S.eachProp)(u, (y, C) => C in d || (h[C] = y)), h;
    }
    return { ...u };
  }
  function J(u) {
    return (
      (u = (0, S.getFluidValue)(u)),
      S.is.arr(u)
        ? u.map(J)
        : (0, S.isAnimatedString)(u)
        ? S.Globals.createStringInterpolator({ range: [0, 1], output: [u, u] })(
            1
          )
        : u
    );
  }
  function W(u) {
    for (let d in u) return !0;
    return !1;
  }
  function xe(u) {
    return S.is.fun(u) || (S.is.arr(u) && S.is.obj(u[0]));
  }
  function Pe(u, d) {
    var h;
    (h = u.ref) == null || h.delete(u), d == null || d.delete(u);
  }
  function Fe(u, d) {
    var h;
    d &&
      u.ref !== d &&
      ((h = u.ref) == null || h.delete(u), d.add(u), (u.ref = d));
  }
  function xt(u, d, h = 1e3) {
    (0, E.useIsomorphicLayoutEffect)(() => {
      if (d) {
        let y = 0;
        (0, E.each)(u, (C, O) => {
          let $ = C.current;
          if ($.length) {
            let A = h * d[O];
            isNaN(A) ? (A = y) : (y = A),
              (0, E.each)($, (B) => {
                (0, E.each)(B.queue, (z) => {
                  let te = z.delay;
                  z.delay = (q) => A + k(te || 0, q);
                });
              }),
              C.start();
          }
        });
      } else {
        let y = Promise.resolve();
        (0, E.each)(u, (C) => {
          let O = C.current;
          if (O.length) {
            let $ = O.map((A) => {
              let B = A.queue;
              return (A.queue = []), B;
            });
            y = y.then(
              () => (
                (0, E.each)(O, (A, B) =>
                  (0, E.each)($[B] || [], (z) => A.queue.push(z))
                ),
                Promise.all(C.start())
              )
            );
          }
        });
      }
    });
  }
  var pn = ce,
    qe = N,
    F = ce,
    x = ce,
    M = _i,
    U = ce,
    Q = {
      default: { tension: 170, friction: 26 },
      gentle: { tension: 120, friction: 14 },
      wobbly: { tension: 180, friction: 12 },
      stiff: { tension: 210, friction: 20 },
      slow: { tension: 280, friction: 60 },
      molasses: { tension: 280, friction: 120 },
    },
    oe = {
      ...Q.default,
      mass: 1,
      damping: 1,
      easing: U.easings.linear,
      clamp: !1,
    },
    ge = class {
      constructor() {
        (this.velocity = 0), Object.assign(this, oe);
      }
    };
  function pe(u, d, h) {
    h && ((h = { ...h }), Je(h, d), (d = { ...h, ...d })),
      Je(u, d),
      Object.assign(u, d);
    for (let $ in oe) u[$] == null && (u[$] = oe[$]);
    let { frequency: y, damping: C } = u,
      { mass: O } = u;
    return (
      U.is.und(y) ||
        (y < 0.01 && (y = 0.01),
        C < 0 && (C = 0),
        (u.tension = Math.pow((2 * Math.PI) / y, 2) * O),
        (u.friction = (4 * Math.PI * C * O) / y)),
      u
    );
  }
  function Je(u, d) {
    if (!U.is.und(d.decay)) u.duration = void 0;
    else {
      let h = !U.is.und(d.tension) || !U.is.und(d.friction);
      (h ||
        !U.is.und(d.frequency) ||
        !U.is.und(d.damping) ||
        !U.is.und(d.mass)) &&
        ((u.duration = void 0), (u.decay = void 0)),
        h && (u.frequency = void 0);
    }
  }
  var Ue = [],
    St = class {
      constructor() {
        (this.changed = !1),
          (this.values = Ue),
          (this.toValues = null),
          (this.fromValues = Ue),
          (this.config = new ge()),
          (this.immediate = !1);
      }
    },
    Ne = ce;
  function Et(u, { key: d, props: h, defaultProps: y, state: C, actions: O }) {
    return new Promise(($, A) => {
      let B,
        z,
        te = D(h.cancel ?? (y == null ? void 0 : y.cancel), d);
      if (te) ne();
      else {
        Ne.is.und(h.pause) || (C.paused = D(h.pause, d));
        let Z = y == null ? void 0 : y.pause;
        Z !== !0 && (Z = C.paused || D(Z, d)),
          (B = k(h.delay || 0, d)),
          Z ? (C.resumeQueue.add(ie), O.pause()) : (O.resume(), ie());
      }
      function q() {
        C.resumeQueue.add(ie),
          C.timeouts.delete(z),
          z.cancel(),
          (B = z.time - Ne.raf.now());
      }
      function ie() {
        B > 0 && !Ne.Globals.skipAnimation
          ? ((C.delayed = !0),
            (z = Ne.raf.setTimeout(ne, B)),
            C.pauseQueue.add(q),
            C.timeouts.add(z))
          : ne();
      }
      function ne() {
        C.delayed && (C.delayed = !1),
          C.pauseQueue.delete(q),
          C.timeouts.delete(z),
          u <= (C.cancelId || 0) && (te = !0);
        try {
          O.start({ ...h, callId: u, cancel: te }, $);
        } catch (Z) {
          A(Z);
        }
      }
    });
  }
  var Yt = ce,
    ms = (u, d) =>
      d.length == 1
        ? d[0]
        : d.some((h) => h.cancelled)
        ? dr(u.get())
        : d.every((h) => h.noop)
        ? Vc(u.get())
        : Mt(
            u.get(),
            d.every((h) => h.finished)
          ),
    Vc = (u) => ({ value: u, noop: !0, finished: !0, cancelled: !1 }),
    Mt = (u, d, h = !1) => ({ value: u, finished: d, cancelled: h }),
    dr = (u) => ({ value: u, cancelled: !0, finished: !1 });
  function Uc(u, d, h, y) {
    let { callId: C, parentId: O, onRest: $ } = d,
      { asyncTo: A, promise: B } = h;
    return !O && u === A && !d.reset
      ? B
      : (h.promise = (async () => {
          (h.asyncId = C), (h.asyncTo = u);
          let z = P(d, (G, K) => (K === "onRest" ? void 0 : G)),
            te,
            q,
            ie = new Promise((G, K) => ((te = G), (q = K))),
            ne = (G) => {
              let K =
                (C <= (h.cancelId || 0) && dr(y)) ||
                (C !== h.asyncId && Mt(y, !1));
              if (K) throw ((G.result = K), q(G), G);
            },
            Z = (G, K) => {
              let re = new gs(),
                X = new bc();
              return (async () => {
                if (Yt.Globals.skipAnimation)
                  throw (Yr(h), (X.result = Mt(y, !1)), q(X), X);
                ne(re);
                let ae = Yt.is.obj(G) ? { ...G } : { ...K, to: G };
                (ae.parentId = C),
                  (0, Yt.eachProp)(z, (Ct, Se) => {
                    Yt.is.und(ae[Se]) && (ae[Se] = Ct);
                  });
                let Ie = await y.start(ae);
                return (
                  ne(re),
                  h.paused &&
                    (await new Promise((Ct) => {
                      h.resumeQueue.add(Ct);
                    })),
                  Ie
                );
              })();
            },
            Y;
          if (Yt.Globals.skipAnimation) return Yr(h), Mt(y, !1);
          try {
            let G;
            Yt.is.arr(u)
              ? (G = (async (K) => {
                  for (let re of K) await Z(re);
                })(u))
              : (G = Promise.resolve(u(Z, y.stop.bind(y)))),
              await Promise.all([G.then(te), ie]),
              (Y = Mt(y.get(), !0, !1));
          } catch (G) {
            if (G instanceof gs) Y = G.result;
            else if (G instanceof bc) Y = G.result;
            else throw G;
          } finally {
            C == h.asyncId &&
              ((h.asyncId = O),
              (h.asyncTo = O ? A : void 0),
              (h.promise = O ? B : void 0));
          }
          return (
            Yt.is.fun($) &&
              Yt.raf.batchedUpdates(() => {
                $(Y, y, y.item);
              }),
            Y
          );
        })());
  }
  function Yr(u, d) {
    (0, Yt.flush)(u.timeouts, (h) => h.cancel()),
      u.pauseQueue.clear(),
      u.resumeQueue.clear(),
      (u.asyncId = u.asyncTo = u.promise = void 0),
      d && (u.cancelId = d);
  }
  var gs = class extends Error {
      constructor() {
        super(
          "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
        );
      }
    },
    bc = class extends Error {
      constructor() {
        super("SkipAnimationSignal");
      }
    },
    bn = ce,
    H0 = _i,
    vs = (u) => u instanceof ho,
    q0 = 1,
    ho = class extends bn.FluidValue {
      constructor() {
        super(...arguments), (this.id = q0++), (this._priority = 0);
      }
      get priority() {
        return this._priority;
      }
      set priority(u) {
        this._priority != u &&
          ((this._priority = u), this._onPriorityChange(u));
      }
      get() {
        let u = (0, H0.getAnimated)(this);
        return u && u.getValue();
      }
      to(...u) {
        return bn.Globals.to(this, u);
      }
      interpolate(...u) {
        return (0, bn.deprecateInterpolate)(), bn.Globals.to(this, u);
      }
      toJSON() {
        return this.get();
      }
      observerAdded(u) {
        u == 1 && this._attach();
      }
      observerRemoved(u) {
        u == 0 && this._detach();
      }
      _attach() {}
      _detach() {}
      _onChange(u, d = !1) {
        (0, bn.callFluidObservers)(this, {
          type: "change",
          parent: this,
          value: u,
          idle: d,
        });
      }
      _onPriorityChange(u) {
        this.idle || bn.frameLoop.sort(this),
          (0, bn.callFluidObservers)(this, {
            type: "priority",
            parent: this,
            priority: u,
          });
      }
    },
    Bn = Symbol.for("SpringPhase"),
    Bc = 1,
    ys = 2,
    ws = 4,
    xs = (u) => (u[Bn] & Bc) > 0,
    hn = (u) => (u[Bn] & ys) > 0,
    Xr = (u) => (u[Bn] & ws) > 0,
    Wc = (u, d) => (d ? (u[Bn] |= ys | Bc) : (u[Bn] &= ~ys)),
    Qc = (u, d) => (d ? (u[Bn] |= ws) : (u[Bn] &= ~ws)),
    Ss = class extends ho {
      constructor(u, d) {
        if (
          (super(),
          (this.animation = new St()),
          (this.defaultProps = {}),
          (this._state = {
            paused: !1,
            delayed: !1,
            pauseQueue: new Set(),
            resumeQueue: new Set(),
            timeouts: new Set(),
          }),
          (this._pendingCalls = new Set()),
          (this._lastCallId = 0),
          (this._lastToId = 0),
          (this._memoizedDuration = 0),
          !x.is.und(u) || !x.is.und(d))
        ) {
          let h = x.is.obj(u) ? { ...u } : { ...d, from: u };
          x.is.und(h.default) && (h.default = !0), this.start(h);
        }
      }
      get idle() {
        return !(hn(this) || this._state.asyncTo) || Xr(this);
      }
      get goal() {
        return (0, x.getFluidValue)(this.animation.to);
      }
      get velocity() {
        let u = (0, M.getAnimated)(this);
        return u instanceof M.AnimatedValue
          ? u.lastVelocity || 0
          : u.getPayload().map((d) => d.lastVelocity || 0);
      }
      get hasAnimated() {
        return xs(this);
      }
      get isAnimating() {
        return hn(this);
      }
      get isPaused() {
        return Xr(this);
      }
      get isDelayed() {
        return this._state.delayed;
      }
      advance(u) {
        let d = !0,
          h = !1,
          y = this.animation,
          { toValues: C } = y,
          { config: O } = y,
          $ = (0, M.getPayload)(y.to);
        !$ &&
          (0, x.hasFluidValue)(y.to) &&
          (C = (0, x.toArray)((0, x.getFluidValue)(y.to))),
          y.values.forEach((z, te) => {
            if (z.done) return;
            let q =
                z.constructor == M.AnimatedString
                  ? 1
                  : $
                  ? $[te].lastPosition
                  : C[te],
              ie = y.immediate,
              ne = q;
            if (!ie) {
              if (((ne = z.lastPosition), O.tension <= 0)) {
                z.done = !0;
                return;
              }
              let Z = (z.elapsedTime += u),
                Y = y.fromValues[te],
                G =
                  z.v0 != null
                    ? z.v0
                    : (z.v0 = x.is.arr(O.velocity)
                        ? O.velocity[te]
                        : O.velocity),
                K,
                re =
                  O.precision ||
                  (Y == q ? 0.005 : Math.min(1, Math.abs(q - Y) * 0.001));
              if (x.is.und(O.duration))
                if (O.decay) {
                  let X = O.decay === !0 ? 0.998 : O.decay,
                    ae = Math.exp(-(1 - X) * Z);
                  (ne = Y + (G / (1 - X)) * (1 - ae)),
                    (ie = Math.abs(z.lastPosition - ne) <= re),
                    (K = G * ae);
                } else {
                  K = z.lastVelocity == null ? G : z.lastVelocity;
                  let X = O.restVelocity || re / 10,
                    ae = O.clamp ? 0 : O.bounce,
                    Ie = !x.is.und(ae),
                    Ct = Y == q ? z.v0 > 0 : Y < q,
                    Se,
                    ot = !1,
                    Me = 1,
                    _t = Math.ceil(u / Me);
                  for (
                    let dt = 0;
                    dt < _t &&
                    ((Se = Math.abs(K) > X),
                    !(!Se && ((ie = Math.abs(q - ne) <= re), ie)));
                    ++dt
                  ) {
                    Ie &&
                      ((ot = ne == q || ne > q == Ct),
                      ot && ((K = -K * ae), (ne = q)));
                    let Xt = -O.tension * 1e-6 * (ne - q),
                      Jt = -O.friction * 0.001 * K,
                      ee = (Xt + Jt) / O.mass;
                    (K = K + ee * Me), (ne = ne + K * Me);
                  }
                }
              else {
                let X = 1;
                O.duration > 0 &&
                  (this._memoizedDuration !== O.duration &&
                    ((this._memoizedDuration = O.duration),
                    z.durationProgress > 0 &&
                      ((z.elapsedTime = O.duration * z.durationProgress),
                      (Z = z.elapsedTime += u))),
                  (X = (O.progress || 0) + Z / this._memoizedDuration),
                  (X = X > 1 ? 1 : X < 0 ? 0 : X),
                  (z.durationProgress = X)),
                  (ne = Y + O.easing(X) * (q - Y)),
                  (K = (ne - z.lastPosition) / u),
                  (ie = X == 1);
              }
              (z.lastVelocity = K),
                Number.isNaN(ne) &&
                  (console.warn("Got NaN while animating:", this), (ie = !0));
            }
            $ && !$[te].done && (ie = !1),
              ie ? (z.done = !0) : (d = !1),
              z.setValue(ne, O.round) && (h = !0);
          });
        let A = (0, M.getAnimated)(this),
          B = A.getValue();
        if (d) {
          let z = (0, x.getFluidValue)(y.to);
          (B !== z || h) && !O.decay
            ? (A.setValue(z), this._onChange(z))
            : h && O.decay && this._onChange(B),
            this._stop();
        } else h && this._onChange(B);
      }
      set(u) {
        return (
          x.raf.batchedUpdates(() => {
            this._stop(), this._focus(u), this._set(u);
          }),
          this
        );
      }
      pause() {
        this._update({ pause: !0 });
      }
      resume() {
        this._update({ pause: !1 });
      }
      finish() {
        if (hn(this)) {
          let { to: u, config: d } = this.animation;
          x.raf.batchedUpdates(() => {
            this._onStart(), d.decay || this._set(u, !1), this._stop();
          });
        }
        return this;
      }
      update(u) {
        return (this.queue || (this.queue = [])).push(u), this;
      }
      start(u, d) {
        let h;
        return (
          x.is.und(u)
            ? ((h = this.queue || []), (this.queue = []))
            : (h = [x.is.obj(u) ? u : { ...d, to: u }]),
          Promise.all(h.map((y) => this._update(y))).then((y) => ms(this, y))
        );
      }
      stop(u) {
        let { to: d } = this.animation;
        return (
          this._focus(this.get()),
          Yr(this._state, u && this._lastCallId),
          x.raf.batchedUpdates(() => this._stop(d, u)),
          this
        );
      }
      reset() {
        this._update({ reset: !0 });
      }
      eventObserved(u) {
        u.type == "change"
          ? this._start()
          : u.type == "priority" && (this.priority = u.priority + 1);
      }
      _prepareNode(u) {
        let d = this.key || "",
          { to: h, from: y } = u;
        (h = x.is.obj(h) ? h[d] : h),
          (h == null || xe(h)) && (h = void 0),
          (y = x.is.obj(y) ? y[d] : y),
          y == null && (y = void 0);
        let C = { to: h, from: y };
        return (
          xs(this) ||
            (u.reverse && ([h, y] = [y, h]),
            (y = (0, x.getFluidValue)(y)),
            x.is.und(y)
              ? (0, M.getAnimated)(this) || this._set(h)
              : this._set(y)),
          C
        );
      }
      _update({ ...u }, d) {
        let { key: h, defaultProps: y } = this;
        u.default &&
          Object.assign(
            y,
            P(u, ($, A) => (/^on/.test(A) ? m($, h) : $))
          ),
          Kc(this, u, "onProps"),
          ei(this, "onProps", u, this);
        let C = this._prepareNode(u);
        if (Object.isFrozen(this))
          throw Error(
            "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
          );
        let O = this._state;
        return Et(++this._lastCallId, {
          key: h,
          props: u,
          defaultProps: y,
          state: O,
          actions: {
            pause: () => {
              Xr(this) ||
                (Qc(this, !0),
                (0, x.flushCalls)(O.pauseQueue),
                ei(
                  this,
                  "onPause",
                  Mt(this, Jr(this, this.animation.to)),
                  this
                ));
            },
            resume: () => {
              Xr(this) &&
                (Qc(this, !1),
                hn(this) && this._resume(),
                (0, x.flushCalls)(O.resumeQueue),
                ei(
                  this,
                  "onResume",
                  Mt(this, Jr(this, this.animation.to)),
                  this
                ));
            },
            start: this._merge.bind(this, C),
          },
        }).then(($) => {
          if (u.loop && $.finished && !(d && $.noop)) {
            let A = Hc(u);
            if (A) return this._update(A, !0);
          }
          return $;
        });
      }
      _merge(u, d, h) {
        if (d.cancel) return this.stop(!0), h(dr(this));
        let y = !x.is.und(u.to),
          C = !x.is.und(u.from);
        if (y || C)
          if (d.callId > this._lastToId) this._lastToId = d.callId;
          else return h(dr(this));
        let { key: O, defaultProps: $, animation: A } = this,
          { to: B, from: z } = A,
          { to: te = B, from: q = z } = u;
        C && !y && (!d.default || x.is.und(te)) && (te = q),
          d.reverse && ([te, q] = [q, te]);
        let ie = !(0, x.isEqual)(q, z);
        ie && (A.from = q), (q = (0, x.getFluidValue)(q));
        let ne = !(0, x.isEqual)(te, B);
        ne && this._focus(te);
        let Z = xe(d.to),
          { config: Y } = A,
          { decay: G, velocity: K } = Y;
        (y || C) && (Y.velocity = 0),
          d.config &&
            !Z &&
            pe(
              Y,
              k(d.config, O),
              d.config !== $.config ? k($.config, O) : void 0
            );
        let re = (0, M.getAnimated)(this);
        if (!re || x.is.und(te)) return h(Mt(this, !0));
        let X = x.is.und(d.reset)
            ? C && !d.default
            : !x.is.und(q) && D(d.reset, O),
          ae = X ? q : this.get(),
          Ie = J(te),
          Ct = x.is.num(Ie) || x.is.arr(Ie) || (0, x.isAnimatedString)(Ie),
          Se = !Z && (!Ct || D($.immediate || d.immediate, O));
        if (ne) {
          let dt = (0, M.getAnimatedType)(te);
          if (dt !== re.constructor)
            if (Se) re = this._set(Ie);
            else
              throw Error(
                `Cannot animate between ${re.constructor.name} and ${dt.name}, as the "to" prop suggests`
              );
        }
        let ot = re.constructor,
          Me = (0, x.hasFluidValue)(te),
          _t = !1;
        if (!Me) {
          let dt = X || (!xs(this) && ie);
          (ne || dt) && ((_t = (0, x.isEqual)(J(ae), Ie)), (Me = !_t)),
            ((!(0, x.isEqual)(A.immediate, Se) && !Se) ||
              !(0, x.isEqual)(Y.decay, G) ||
              !(0, x.isEqual)(Y.velocity, K)) &&
              (Me = !0);
        }
        if (
          (_t &&
            hn(this) &&
            (A.changed && !X ? (Me = !0) : Me || this._stop(B)),
          !Z &&
            ((Me || (0, x.hasFluidValue)(B)) &&
              ((A.values = re.getPayload()),
              (A.toValues = (0, x.hasFluidValue)(te)
                ? null
                : ot == M.AnimatedString
                ? [1]
                : (0, x.toArray)(Ie))),
            A.immediate != Se &&
              ((A.immediate = Se), !Se && !X && this._set(B)),
            Me))
        ) {
          let { onRest: dt } = A;
          (0, x.each)(G0, (Jt) => Kc(this, d, Jt));
          let Xt = Mt(this, Jr(this, B));
          (0, x.flushCalls)(this._pendingCalls, Xt),
            this._pendingCalls.add(h),
            A.changed &&
              x.raf.batchedUpdates(() => {
                var Jt;
                (A.changed = !X),
                  dt == null || dt(Xt, this),
                  X
                    ? k($.onRest, Xt)
                    : (Jt = A.onStart) == null || Jt.call(A, Xt, this);
              });
        }
        X && this._set(ae),
          Z
            ? h(Uc(d.to, d, this._state, this))
            : Me
            ? this._start()
            : hn(this) && !ne
            ? this._pendingCalls.add(h)
            : h(Vc(ae));
      }
      _focus(u) {
        let d = this.animation;
        u !== d.to &&
          ((0, x.getFluidObservers)(this) && this._detach(),
          (d.to = u),
          (0, x.getFluidObservers)(this) && this._attach());
      }
      _attach() {
        let u = 0,
          { to: d } = this.animation;
        (0, x.hasFluidValue)(d) &&
          ((0, x.addFluidObserver)(d, this), vs(d) && (u = d.priority + 1)),
          (this.priority = u);
      }
      _detach() {
        let { to: u } = this.animation;
        (0, x.hasFluidValue)(u) && (0, x.removeFluidObserver)(u, this);
      }
      _set(u, d = !0) {
        let h = (0, x.getFluidValue)(u);
        if (!x.is.und(h)) {
          let y = (0, M.getAnimated)(this);
          if (!y || !(0, x.isEqual)(h, y.getValue())) {
            let C = (0, M.getAnimatedType)(h);
            !y || y.constructor != C
              ? (0, M.setAnimated)(this, C.create(h))
              : y.setValue(h),
              y &&
                x.raf.batchedUpdates(() => {
                  this._onChange(h, d);
                });
          }
        }
        return (0, M.getAnimated)(this);
      }
      _onStart() {
        let u = this.animation;
        u.changed ||
          ((u.changed = !0),
          ei(this, "onStart", Mt(this, Jr(this, u.to)), this));
      }
      _onChange(u, d) {
        d || (this._onStart(), k(this.animation.onChange, u, this)),
          k(this.defaultProps.onChange, u, this),
          super._onChange(u, d);
      }
      _start() {
        let u = this.animation;
        (0, M.getAnimated)(this).reset((0, x.getFluidValue)(u.to)),
          u.immediate || (u.fromValues = u.values.map((d) => d.lastPosition)),
          hn(this) || (Wc(this, !0), Xr(this) || this._resume());
      }
      _resume() {
        x.Globals.skipAnimation ? this.finish() : x.frameLoop.start(this);
      }
      _stop(u, d) {
        if (hn(this)) {
          Wc(this, !1);
          let h = this.animation;
          (0, x.each)(h.values, (C) => {
            C.done = !0;
          }),
            h.toValues && (h.onChange = h.onPause = h.onResume = void 0),
            (0, x.callFluidObservers)(this, { type: "idle", parent: this });
          let y = d ? dr(this.get()) : Mt(this.get(), Jr(this, u ?? h.to));
          (0, x.flushCalls)(this._pendingCalls, y),
            h.changed && ((h.changed = !1), ei(this, "onRest", y, this));
        }
      }
    };
  function Jr(u, d) {
    let h = J(d),
      y = J(u.get());
    return (0, x.isEqual)(y, h);
  }
  function Hc(u, d = u.loop, h = u.to) {
    let y = k(d);
    if (y) {
      let C = y !== !0 && R(y),
        O = (C || u).reverse,
        $ = !C || C.reset;
      return Zr({
        ...u,
        loop: d,
        default: !1,
        pause: void 0,
        to: !O || xe(h) ? h : void 0,
        from: $ ? u.from : void 0,
        reset: $,
        ...C,
      });
    }
  }
  function Zr(u) {
    let { to: d, from: h } = (u = R(u)),
      y = new Set();
    return (
      x.is.obj(d) && qc(d, y),
      x.is.obj(h) && qc(h, y),
      (u.keys = y.size ? Array.from(y) : null),
      u
    );
  }
  function K0(u) {
    let d = Zr(u);
    return x.is.und(d.default) && (d.default = P(d)), d;
  }
  function qc(u, d) {
    (0, x.eachProp)(u, (h, y) => h != null && d.add(y));
  }
  var G0 = ["onStart", "onRest", "onChange", "onPause", "onResume"];
  function Kc(u, d, h) {
    u.animation[h] = d[h] !== f(d, h) ? m(d[h], u.key) : void 0;
  }
  function ei(u, d, ...h) {
    var y, C, O, $;
    (C = (y = u.animation)[d]) == null || C.call(y, ...h),
      ($ = (O = u.defaultProps)[d]) == null || $.call(O, ...h);
  }
  var ue = ce,
    Y0 = ["onStart", "onChange", "onRest"],
    X0 = 1,
    Es = class {
      constructor(u, d) {
        (this.id = X0++),
          (this.springs = {}),
          (this.queue = []),
          (this._lastAsyncId = 0),
          (this._active = new Set()),
          (this._changed = new Set()),
          (this._started = !1),
          (this._state = {
            paused: !1,
            pauseQueue: new Set(),
            resumeQueue: new Set(),
            timeouts: new Set(),
          }),
          (this._events = {
            onStart: new Map(),
            onChange: new Map(),
            onRest: new Map(),
          }),
          (this._onFrame = this._onFrame.bind(this)),
          d && (this._flush = d),
          u && this.start({ default: !0, ...u });
      }
      get idle() {
        return (
          !this._state.asyncTo &&
          Object.values(this.springs).every(
            (u) => u.idle && !u.isDelayed && !u.isPaused
          )
        );
      }
      get item() {
        return this._item;
      }
      set item(u) {
        this._item = u;
      }
      get() {
        let u = {};
        return this.each((d, h) => (u[h] = d.get())), u;
      }
      set(u) {
        for (let d in u) {
          let h = u[d];
          ue.is.und(h) || this.springs[d].set(h);
        }
      }
      update(u) {
        return u && this.queue.push(Zr(u)), this;
      }
      start(u) {
        let { queue: d } = this;
        return (
          u ? (d = (0, ue.toArray)(u).map(Zr)) : (this.queue = []),
          this._flush ? this._flush(this, d) : (Zc(this, d), ks(this, d))
        );
      }
      stop(u, d) {
        if ((u !== !!u && (d = u), d)) {
          let h = this.springs;
          (0, ue.each)((0, ue.toArray)(d), (y) => h[y].stop(!!u));
        } else
          Yr(this._state, this._lastAsyncId), this.each((h) => h.stop(!!u));
        return this;
      }
      pause(u) {
        if (ue.is.und(u)) this.start({ pause: !0 });
        else {
          let d = this.springs;
          (0, ue.each)((0, ue.toArray)(u), (h) => d[h].pause());
        }
        return this;
      }
      resume(u) {
        if (ue.is.und(u)) this.start({ pause: !1 });
        else {
          let d = this.springs;
          (0, ue.each)((0, ue.toArray)(u), (h) => d[h].resume());
        }
        return this;
      }
      each(u) {
        (0, ue.eachProp)(this.springs, u);
      }
      _onFrame() {
        let { onStart: u, onChange: d, onRest: h } = this._events,
          y = this._active.size > 0,
          C = this._changed.size > 0;
        ((y && !this._started) || (C && !this._started)) &&
          ((this._started = !0),
          (0, ue.flush)(u, ([A, B]) => {
            (B.value = this.get()), A(B, this, this._item);
          }));
        let O = !y && this._started,
          $ = C || (O && h.size) ? this.get() : null;
        C &&
          d.size &&
          (0, ue.flush)(d, ([A, B]) => {
            (B.value = $), A(B, this, this._item);
          }),
          O &&
            ((this._started = !1),
            (0, ue.flush)(h, ([A, B]) => {
              (B.value = $), A(B, this, this._item);
            }));
      }
      eventObserved(u) {
        if (u.type == "change")
          this._changed.add(u.parent), u.idle || this._active.add(u.parent);
        else if (u.type == "idle") this._active.delete(u.parent);
        else return;
        ue.raf.onFrame(this._onFrame);
      }
    };
  function ks(u, d) {
    return Promise.all(d.map((h) => Gc(u, h))).then((h) => ms(u, h));
  }
  async function Gc(u, d, h) {
    let { keys: y, to: C, from: O, loop: $, onRest: A, onResolve: B } = d,
      z = ue.is.obj(d.default) && d.default;
    $ && (d.loop = !1), C === !1 && (d.to = null), O === !1 && (d.from = null);
    let te = ue.is.arr(C) || ue.is.fun(C) ? C : void 0;
    te
      ? ((d.to = void 0), (d.onRest = void 0), z && (z.onRest = void 0))
      : (0, ue.each)(Y0, (Y) => {
          let G = d[Y];
          if (ue.is.fun(G)) {
            let K = u._events[Y];
            (d[Y] = ({ finished: re, cancelled: X }) => {
              let ae = K.get(G);
              ae
                ? (re || (ae.finished = !1), X && (ae.cancelled = !0))
                : K.set(G, {
                    value: null,
                    finished: re || !1,
                    cancelled: X || !1,
                  });
            }),
              z && (z[Y] = d[Y]);
          }
        });
    let q = u._state;
    d.pause === !q.paused
      ? ((q.paused = d.pause),
        (0, ue.flushCalls)(d.pause ? q.pauseQueue : q.resumeQueue))
      : q.paused && (d.pause = !0);
    let ie = (y || Object.keys(u.springs)).map((Y) => u.springs[Y].start(d)),
      ne = d.cancel === !0 || f(d, "cancel") === !0;
    (te || (ne && q.asyncId)) &&
      ie.push(
        Et(++u._lastAsyncId, {
          props: d,
          state: q,
          actions: {
            pause: ue.noop,
            resume: ue.noop,
            start(Y, G) {
              ne
                ? (Yr(q, u._lastAsyncId), G(dr(u)))
                : ((Y.onRest = A), G(Uc(te, Y, q, u)));
            },
          },
        })
      ),
      q.paused &&
        (await new Promise((Y) => {
          q.resumeQueue.add(Y);
        }));
    let Z = ms(u, await Promise.all(ie));
    if ($ && Z.finished && !(h && Z.noop)) {
      let Y = Hc(d, $, C);
      if (Y) return Zc(u, [Y]), Gc(u, Y, !0);
    }
    return B && ue.raf.batchedUpdates(() => B(Z, u, u.item)), Z;
  }
  function Cs(u, d) {
    let h = { ...u.springs };
    return (
      d &&
        (0, ue.each)((0, ue.toArray)(d), (y) => {
          ue.is.und(y.keys) && (y = Zr(y)),
            ue.is.obj(y.to) || (y = { ...y, to: void 0 }),
            Jc(h, y, (C) => Xc(C));
        }),
      Yc(u, h),
      h
    );
  }
  function Yc(u, d) {
    (0, ue.eachProp)(d, (h, y) => {
      u.springs[y] || ((u.springs[y] = h), (0, ue.addFluidObserver)(h, u));
    });
  }
  function Xc(u, d) {
    let h = new Ss();
    return (h.key = u), d && (0, ue.addFluidObserver)(h, d), h;
  }
  function Jc(u, d, h) {
    d.keys &&
      (0, ue.each)(d.keys, (y) => {
        (u[y] || (u[y] = h(y)))._prepareNode(d);
      });
  }
  function Zc(u, d) {
    (0, ue.each)(d, (h) => {
      Jc(u.springs, h, (y) => Xc(y, u));
    });
  }
  var ed = p(N),
    J0 = N,
    Z0 = ce,
    fr = ({ children: u, ...d }) => {
      let h = (0, J0.useContext)(mo),
        y = d.pause || !!h.pause,
        C = d.immediate || !!h.immediate;
      d = (0, Z0.useMemoOne)(() => ({ pause: y, immediate: C }), [y, C]);
      let { Provider: O } = mo;
      return ed.createElement(O, { value: d }, u);
    },
    mo = eg(fr, {});
  (fr.Provider = mo.Provider), (fr.Consumer = mo.Consumer);
  function eg(u, d) {
    return (
      Object.assign(u, ed.createContext(d)),
      (u.Provider._context = u),
      (u.Consumer._context = u),
      u
    );
  }
  var kt = ce,
    go = () => {
      let u = [],
        d = function (y) {
          (0, kt.deprecateDirectCall)();
          let C = [];
          return (
            (0, kt.each)(u, (O, $) => {
              if (kt.is.und(y)) C.push(O.start());
              else {
                let A = h(y, O, $);
                A && C.push(O.start(A));
              }
            }),
            C
          );
        };
      (d.current = u),
        (d.add = function (y) {
          u.includes(y) || u.push(y);
        }),
        (d.delete = function (y) {
          let C = u.indexOf(y);
          ~C && u.splice(C, 1);
        }),
        (d.pause = function () {
          return (0, kt.each)(u, (y) => y.pause(...arguments)), this;
        }),
        (d.resume = function () {
          return (0, kt.each)(u, (y) => y.resume(...arguments)), this;
        }),
        (d.set = function (y) {
          (0, kt.each)(u, (C, O) => {
            let $ = kt.is.fun(y) ? y(O, C) : y;
            $ && C.set($);
          });
        }),
        (d.start = function (y) {
          let C = [];
          return (
            (0, kt.each)(u, (O, $) => {
              if (kt.is.und(y)) C.push(O.start());
              else {
                let A = this._getProps(y, O, $);
                A && C.push(O.start(A));
              }
            }),
            C
          );
        }),
        (d.stop = function () {
          return (0, kt.each)(u, (y) => y.stop(...arguments)), this;
        }),
        (d.update = function (y) {
          return (
            (0, kt.each)(u, (C, O) => C.update(this._getProps(y, C, O))), this
          );
        });
      let h = function (y, C, O) {
        return kt.is.fun(y) ? y(O, C) : y;
      };
      return (d._getProps = h), d;
    };
  function _s(u, d, h) {
    let y = F.is.fun(d) && d;
    y && !h && (h = []);
    let C = (0, qe.useMemo)(
        () => (y || arguments.length == 3 ? go() : void 0),
        []
      ),
      O = (0, qe.useRef)(0),
      $ = (0, F.useForceUpdate)(),
      A = (0, qe.useMemo)(
        () => ({
          ctrls: [],
          queue: [],
          flush(K, re) {
            let X = Cs(K, re);
            return O.current > 0 &&
              !A.queue.length &&
              !Object.keys(X).some((ae) => !K.springs[ae])
              ? ks(K, re)
              : new Promise((ae) => {
                  Yc(K, X),
                    A.queue.push(() => {
                      ae(ks(K, re));
                    }),
                    $();
                });
          },
        }),
        []
      ),
      B = (0, qe.useRef)([...A.ctrls]),
      z = [],
      te = (0, F.usePrev)(u) || 0;
    (0, qe.useMemo)(() => {
      (0, F.each)(B.current.slice(u, te), (K) => {
        Pe(K, C), K.stop(!0);
      }),
        (B.current.length = u),
        q(te, u);
    }, [u]),
      (0, qe.useMemo)(() => {
        q(0, Math.min(te, u));
      }, h);
    function q(K, re) {
      for (let X = K; X < re; X++) {
        let ae = B.current[X] || (B.current[X] = new Es(null, A.flush)),
          Ie = y ? y(X, ae) : d[X];
        Ie && (z[X] = K0(Ie));
      }
    }
    let ie = B.current.map((K, re) => Cs(K, z[re])),
      ne = (0, qe.useContext)(fr),
      Z = (0, F.usePrev)(ne),
      Y = ne !== Z && W(ne);
    (0, F.useIsomorphicLayoutEffect)(() => {
      O.current++, (A.ctrls = B.current);
      let { queue: K } = A;
      K.length && ((A.queue = []), (0, F.each)(K, (re) => re())),
        (0, F.each)(B.current, (re, X) => {
          C == null || C.add(re), Y && re.start({ default: ne });
          let ae = z[X];
          ae && (Fe(re, ae.ref), re.ref ? re.queue.push(ae) : re.start(ae));
        });
    }),
      (0, F.useOnce)(() => () => {
        (0, F.each)(A.ctrls, (K) => K.stop(!0));
      });
    let G = ie.map((K) => ({ ...K }));
    return C ? [G, C] : G;
  }
  function ti(u, d) {
    let h = pn.is.fun(u),
      [[y], C] = _s(1, h ? u : [u], h ? d || [] : d);
    return h || arguments.length == 2 ? [y, C] : y;
  }
  var tg = N,
    ng = () => go(),
    rg = () => (0, tg.useState)(ng)[0],
    td = ce,
    ig = (u, d) => {
      let h = (0, td.useConstant)(() => new Ss(u, d));
      return (
        (0, td.useOnce)(() => () => {
          h.stop();
        }),
        h
      );
    },
    vo = ce;
  function nd(u, d, h) {
    let y = vo.is.fun(d) && d;
    y && !h && (h = []);
    let C = !0,
      O,
      $ = _s(
        u,
        (A, B) => {
          let z = y ? y(A, B) : d;
          return (O = z.ref), (C = C && z.reverse), z;
        },
        h || [{}]
      );
    if (
      ((0, vo.useIsomorphicLayoutEffect)(() => {
        (0, vo.each)($[1].current, (A, B) => {
          let z = $[1].current[B + (C ? 1 : -1)];
          if ((Fe(A, O), A.ref)) {
            z && A.update({ to: z.springs });
            return;
          }
          z ? A.start({ to: z.springs }) : A.start();
        });
      }, h),
      y || arguments.length == 3)
    ) {
      let A = O ?? $[1];
      return (
        (A._getProps = (B, z, te) => {
          let q = vo.is.fun(B) ? B(te, z) : B;
          if (q) {
            let ie = A.current[te + (q.reverse ? 1 : -1)];
            return ie && (q.to = ie.springs), q;
          }
        }),
        $
      );
    }
    return $[0];
  }
  var Ps = p(N),
    ni = N,
    me = ce;
  function rd(u, d, h) {
    let y = me.is.fun(d) && d,
      {
        reset: C,
        sort: O,
        trail: $ = 0,
        expires: A = !0,
        exitBeforeEnter: B = !1,
        onDestroyed: z,
        ref: te,
        config: q,
      } = y ? y() : d,
      ie = (0, ni.useMemo)(
        () => (y || arguments.length == 3 ? go() : void 0),
        []
      ),
      ne = (0, me.toArray)(u),
      Z = [],
      Y = (0, ni.useRef)(null),
      G = C ? null : Y.current;
    (0, me.useIsomorphicLayoutEffect)(() => {
      Y.current = Z;
    }),
      (0, me.useOnce)(
        () => (
          (0, me.each)(Z, (ee) => {
            ie == null || ie.add(ee.ctrl), (ee.ctrl.ref = ie);
          }),
          () => {
            (0, me.each)(Y.current, (ee) => {
              ee.expired && clearTimeout(ee.expirationId),
                Pe(ee.ctrl, ie),
                ee.ctrl.stop(!0);
            });
          }
        )
      );
    let K = lg(ne, y ? y() : d, G),
      re = (C && Y.current) || [];
    (0, me.useIsomorphicLayoutEffect)(() =>
      (0, me.each)(re, ({ ctrl: ee, item: se, key: Ze }) => {
        Pe(ee, ie), k(z, se, Ze);
      })
    );
    let X = [];
    if (
      (G &&
        (0, me.each)(G, (ee, se) => {
          ee.expired
            ? (clearTimeout(ee.expirationId), re.push(ee))
            : ((se = X[se] = K.indexOf(ee.key)), ~se && (Z[se] = ee));
        }),
      (0, me.each)(ne, (ee, se) => {
        Z[se] ||
          ((Z[se] = { key: K[se], item: ee, phase: "mount", ctrl: new Es() }),
          (Z[se].ctrl.item = ee));
      }),
      X.length)
    ) {
      let ee = -1,
        { leave: se } = y ? y() : d;
      (0, me.each)(X, (Ze, et) => {
        let be = G[et];
        ~Ze
          ? ((ee = Z.indexOf(be)), (Z[ee] = { ...be, item: ne[Ze] }))
          : se && Z.splice(++ee, 0, be);
      });
    }
    me.is.fun(O) && Z.sort((ee, se) => O(ee.item, se.item));
    let ae = -$,
      Ie = (0, me.useForceUpdate)(),
      Ct = P(d),
      Se = new Map(),
      ot = (0, ni.useRef)(new Map()),
      Me = (0, ni.useRef)(!1);
    (0, me.each)(Z, (ee, se) => {
      let Ze = ee.key,
        et = ee.phase,
        be = y ? y() : d,
        ft,
        Zt,
        xg = k(be.delay || 0, Ze);
      if (et == "mount") (ft = be.enter), (Zt = "enter");
      else {
        let Rt = K.indexOf(Ze) < 0;
        if (et != "leave")
          if (Rt) (ft = be.leave), (Zt = "leave");
          else if ((ft = be.update)) Zt = "update";
          else return;
        else if (!Rt) (ft = be.enter), (Zt = "enter");
        else return;
      }
      if (
        ((ft = k(ft, ee.item, se)),
        (ft = me.is.obj(ft) ? R(ft) : { to: ft }),
        !ft.config)
      ) {
        let Rt = q || Ct.config;
        ft.config = k(Rt, ee.item, se, Zt);
      }
      ae += $;
      let Wn = {
        ...Ct,
        delay: xg + ae,
        ref: te,
        immediate: be.immediate,
        reset: !1,
        ...ft,
      };
      if (Zt == "enter" && me.is.und(Wn.from)) {
        let Rt = y ? y() : d,
          ii = me.is.und(Rt.initial) || G ? Rt.from : Rt.initial;
        Wn.from = k(ii, ee.item, se);
      }
      let { onResolve: Sg } = Wn;
      Wn.onResolve = (Rt) => {
        k(Sg, Rt);
        let ii = Y.current,
          mn = ii.find((So) => So.key === Ze);
        if (mn && !(Rt.cancelled && mn.phase != "update") && mn.ctrl.idle) {
          let So = ii.every((Qn) => Qn.ctrl.idle);
          if (mn.phase == "leave") {
            let Qn = k(A, mn.item);
            if (Qn !== !1) {
              let js = Qn === !0 ? 0 : Qn;
              if (((mn.expired = !0), !So && js > 0)) {
                js <= 2147483647 && (mn.expirationId = setTimeout(Ie, js));
                return;
              }
            }
          }
          So &&
            ii.some((Qn) => Qn.expired) &&
            (ot.current.delete(mn), B && (Me.current = !0), Ie());
        }
      };
      let ld = Cs(ee.ctrl, Wn);
      Zt === "leave" && B
        ? ot.current.set(ee, { phase: Zt, springs: ld, payload: Wn })
        : Se.set(ee, { phase: Zt, springs: ld, payload: Wn });
    });
    let _t = (0, ni.useContext)(fr),
      dt = (0, me.usePrev)(_t),
      Xt = _t !== dt && W(_t);
    (0, me.useIsomorphicLayoutEffect)(() => {
      Xt &&
        (0, me.each)(Z, (ee) => {
          ee.ctrl.start({ default: _t });
        });
    }, [_t]),
      (0, me.each)(Se, (ee, se) => {
        if (ot.current.size) {
          let Ze = Z.findIndex((et) => et.key === se.key);
          Z.splice(Ze, 1);
        }
      }),
      (0, me.useIsomorphicLayoutEffect)(
        () => {
          (0, me.each)(
            ot.current.size ? ot.current : Se,
            ({ phase: ee, payload: se }, Ze) => {
              let { ctrl: et } = Ze;
              (Ze.phase = ee),
                ie == null || ie.add(et),
                Xt && ee == "enter" && et.start({ default: _t }),
                se &&
                  (Fe(et, se.ref),
                  (et.ref || ie) && !Me.current
                    ? et.update(se)
                    : (et.start(se), Me.current && (Me.current = !1)));
            }
          );
        },
        C ? void 0 : h
      );
    let Jt = (ee) =>
      Ps.createElement(
        Ps.Fragment,
        null,
        Z.map((se, Ze) => {
          let { springs: et } = Se.get(se) || se.ctrl,
            be = ee({ ...et }, se.item, se, Ze);
          return be && be.type
            ? Ps.createElement(be.type, {
                ...be.props,
                key:
                  me.is.str(se.key) || me.is.num(se.key) ? se.key : se.ctrl.id,
                ref: be.ref,
              })
            : be;
        })
      );
    return ie ? [Jt, ie] : Jt;
  }
  var og = 1;
  function lg(u, { key: d, keys: h = d }, y) {
    if (h === null) {
      let C = new Set();
      return u.map((O) => {
        let $ =
          y && y.find((A) => A.item === O && A.phase !== "leave" && !C.has(A));
        return $ ? (C.add($), $.key) : og++;
      });
    }
    return me.is.und(h) ? u : me.is.fun(h) ? u.map(h) : (0, me.toArray)(h);
  }
  var Ts = ce,
    sg = ({ container: u, ...d } = {}) => {
      let [h, y] = ti(
        () => ({
          scrollX: 0,
          scrollY: 0,
          scrollXProgress: 0,
          scrollYProgress: 0,
          ...d,
        }),
        []
      );
      return (
        (0, Ts.useIsomorphicLayoutEffect)(() => {
          let C = (0, Ts.onScroll)(
            ({ x: O, y: $ }) => {
              y.start({
                scrollX: O.current,
                scrollXProgress: O.progress,
                scrollY: $.current,
                scrollYProgress: $.progress,
              });
            },
            { container: (u == null ? void 0 : u.current) || void 0 }
          );
          return () => {
            (0, Ts.each)(Object.values(h), (O) => O.stop()), C();
          };
        }, []),
        h
      );
    },
    Os = ce,
    ag = ({ container: u, ...d }) => {
      let [h, y] = ti(() => ({ width: 0, height: 0, ...d }), []);
      return (
        (0, Os.useIsomorphicLayoutEffect)(() => {
          let C = (0, Os.onResize)(
            ({ width: O, height: $ }) => {
              y.start({
                width: O,
                height: $,
                immediate: h.width.get() === 0 || h.height.get() === 0,
              });
            },
            { container: (u == null ? void 0 : u.current) || void 0 }
          );
          return () => {
            (0, Os.each)(Object.values(h), (O) => O.stop()), C();
          };
        }, []),
        h
      );
    },
    id = N,
    Ns = ce,
    ug = { any: 0, all: 1 };
  function cg(u, d) {
    let [h, y] = (0, id.useState)(!1),
      C = (0, id.useRef)(),
      O = Ns.is.fun(u) && u,
      $ = O ? O() : {},
      { to: A = {}, from: B = {}, ...z } = $,
      te = O ? d : u,
      [q, ie] = ti(() => ({ from: B, ...z }), []);
    return (
      (0, Ns.useIsomorphicLayoutEffect)(() => {
        let ne = C.current,
          { root: Z, once: Y, amount: G = "any", ...K } = te ?? {};
        if (!ne || (Y && h) || typeof IntersectionObserver > "u") return;
        let re = new WeakMap(),
          X = () => (
            A && ie.start(A),
            y(!0),
            Y
              ? void 0
              : () => {
                  B && ie.start(B), y(!1);
                }
          ),
          ae = (Ct) => {
            Ct.forEach((Se) => {
              let ot = re.get(Se.target);
              if (Se.isIntersecting !== !!ot)
                if (Se.isIntersecting) {
                  let Me = X();
                  Ns.is.fun(Me)
                    ? re.set(Se.target, Me)
                    : Ie.unobserve(Se.target);
                } else ot && (ot(), re.delete(Se.target));
            });
          },
          Ie = new IntersectionObserver(ae, {
            root: (Z && Z.current) || void 0,
            threshold: typeof G == "number" || Array.isArray(G) ? G : ug[G],
            ...K,
          });
        return Ie.observe(ne), () => Ie.unobserve(ne);
      }, [te]),
      O ? [C, q] : [C, h]
    );
  }
  function dg({ children: u, ...d }) {
    return u(ti(d));
  }
  var fg = ce;
  function pg({ items: u, children: d, ...h }) {
    let y = nd(u.length, h);
    return u.map((C, O) => {
      let $ = d(C, O);
      return fg.is.fun($) ? $(y[O]) : $;
    });
  }
  function hg({ items: u, children: d, ...h }) {
    return rd(u, h)(d);
  }
  var mg = ce,
    Le = ce,
    ri = _i,
    yo = class extends ho {
      constructor(u, d) {
        super(),
          (this.source = u),
          (this.idle = !0),
          (this._active = new Set()),
          (this.calc = (0, Le.createInterpolator)(...d));
        let h = this._get(),
          y = (0, ri.getAnimatedType)(h);
        (0, ri.setAnimated)(this, y.create(h));
      }
      advance(u) {
        let d = this._get(),
          h = this.get();
        (0, Le.isEqual)(d, h) ||
          ((0, ri.getAnimated)(this).setValue(d), this._onChange(d, this.idle)),
          !this.idle && od(this._active) && Ls(this);
      }
      _get() {
        let u = Le.is.arr(this.source)
          ? this.source.map(Le.getFluidValue)
          : (0, Le.toArray)((0, Le.getFluidValue)(this.source));
        return this.calc(...u);
      }
      _start() {
        this.idle &&
          !od(this._active) &&
          ((this.idle = !1),
          (0, Le.each)((0, ri.getPayload)(this), (u) => {
            u.done = !1;
          }),
          Le.Globals.skipAnimation
            ? (Le.raf.batchedUpdates(() => this.advance()), Ls(this))
            : Le.frameLoop.start(this));
      }
      _attach() {
        let u = 1;
        (0, Le.each)((0, Le.toArray)(this.source), (d) => {
          (0, Le.hasFluidValue)(d) && (0, Le.addFluidObserver)(d, this),
            vs(d) &&
              (d.idle || this._active.add(d),
              (u = Math.max(u, d.priority + 1)));
        }),
          (this.priority = u),
          this._start();
      }
      _detach() {
        (0, Le.each)((0, Le.toArray)(this.source), (u) => {
          (0, Le.hasFluidValue)(u) && (0, Le.removeFluidObserver)(u, this);
        }),
          this._active.clear(),
          Ls(this);
      }
      eventObserved(u) {
        u.type == "change"
          ? u.idle
            ? this.advance()
            : (this._active.add(u.parent), this._start())
          : u.type == "idle"
          ? this._active.delete(u.parent)
          : u.type == "priority" &&
            (this.priority = (0, Le.toArray)(this.source).reduce(
              (d, h) => Math.max(d, (vs(h) ? h.priority : 0) + 1),
              0
            ));
      }
    };
  function gg(u) {
    return u.idle !== !1;
  }
  function od(u) {
    return !u.size || Array.from(u).every(gg);
  }
  function Ls(u) {
    u.idle ||
      ((u.idle = !0),
      (0, Le.each)((0, ri.getPayload)(u), (d) => {
        d.done = !0;
      }),
      (0, Le.callFluidObservers)(u, { type: "idle", parent: u }));
  }
  var vg = (u, ...d) => new yo(u, d),
    yg = (u, ...d) => ((0, mg.deprecateInterpolate)(), new yo(u, d)),
    wo = ce;
  wo.Globals.assign({
    createStringInterpolator: wo.createStringInterpolator,
    to: (u, d) => new yo(u, d),
  });
  var wg = wo.frameLoop.advance,
    xo = ce;
  c(w, bw(), e.exports);
})(Jp);
var Bw = Jp.exports;
Xp.exports = Bw;
var Kd = Xp.exports,
  zh = { exports: {} },
  yt = {},
  Vh = { exports: {} },
  Uh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(x, M) {
    var U = x.length;
    x.push(M);
    e: for (; 0 < U; ) {
      var Q = (U - 1) >>> 1,
        oe = x[Q];
      if (0 < i(oe, M)) (x[Q] = M), (x[U] = oe), (U = Q);
      else break e;
    }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var M = x[0],
      U = x.pop();
    if (U !== M) {
      x[0] = U;
      e: for (var Q = 0, oe = x.length, ge = oe >>> 1; Q < ge; ) {
        var pe = 2 * (Q + 1) - 1,
          Je = x[pe],
          Ue = pe + 1,
          St = x[Ue];
        if (0 > i(Je, U))
          Ue < oe && 0 > i(St, Je)
            ? ((x[Q] = St), (x[Ue] = U), (Q = Ue))
            : ((x[Q] = Je), (x[pe] = U), (Q = pe));
        else if (Ue < oe && 0 > i(St, U)) (x[Q] = St), (x[Ue] = U), (Q = Ue);
        else break e;
      }
    }
    return M;
  }
  function i(x, M) {
    var U = x.sortIndex - M.sortIndex;
    return U !== 0 ? U : x.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    c = [],
    p = 1,
    v = null,
    w = 3,
    E = !1,
    S = !1,
    k = !1,
    D = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(x) {
    for (var M = n(c); M !== null; ) {
      if (M.callback === null) r(c);
      else if (M.startTime <= x)
        r(c), (M.sortIndex = M.expirationTime), t(a, M);
      else break;
      M = n(c);
    }
  }
  function P(x) {
    if (((k = !1), g(x), !S))
      if (n(a) !== null) (S = !0), qe(I);
      else {
        var M = n(c);
        M !== null && F(P, M.startTime - x);
      }
  }
  function I(x, M) {
    (S = !1), k && ((k = !1), m(R), (R = -1)), (E = !0);
    var U = w;
    try {
      for (
        g(M), v = n(a);
        v !== null && (!(v.expirationTime > M) || (x && !xe()));

      ) {
        var Q = v.callback;
        if (typeof Q == "function") {
          (v.callback = null), (w = v.priorityLevel);
          var oe = Q(v.expirationTime <= M);
          (M = e.unstable_now()),
            typeof oe == "function" ? (v.callback = oe) : v === n(a) && r(a),
            g(M);
        } else r(a);
        v = n(a);
      }
      if (v !== null) var ge = !0;
      else {
        var pe = n(c);
        pe !== null && F(P, pe.startTime - M), (ge = !1);
      }
      return ge;
    } finally {
      (v = null), (w = U), (E = !1);
    }
  }
  var _ = !1,
    L = null,
    R = -1,
    J = 5,
    W = -1;
  function xe() {
    return !(e.unstable_now() - W < J);
  }
  function Pe() {
    if (L !== null) {
      var x = e.unstable_now();
      W = x;
      var M = !0;
      try {
        M = L(!0, x);
      } finally {
        M ? Fe() : ((_ = !1), (L = null));
      }
    } else _ = !1;
  }
  var Fe;
  if (typeof f == "function")
    Fe = function () {
      f(Pe);
    };
  else if (typeof MessageChannel < "u") {
    var xt = new MessageChannel(),
      pn = xt.port2;
    (xt.port1.onmessage = Pe),
      (Fe = function () {
        pn.postMessage(null);
      });
  } else
    Fe = function () {
      D(Pe, 0);
    };
  function qe(x) {
    (L = x), _ || ((_ = !0), Fe());
  }
  function F(x, M) {
    R = D(function () {
      x(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || E || ((S = !0), qe(I));
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (J = 0 < x ? Math.floor(1e3 / x) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return w;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (x) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = w;
      }
      var U = w;
      w = M;
      try {
        return x();
      } finally {
        w = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, M) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var U = w;
      w = x;
      try {
        return M();
      } finally {
        w = U;
      }
    }),
    (e.unstable_scheduleCallback = function (x, M, U) {
      var Q = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? Q + U : Q))
          : (U = Q),
        x)
      ) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return (
        (oe = U + oe),
        (x = {
          id: p++,
          callback: M,
          priorityLevel: x,
          startTime: U,
          expirationTime: oe,
          sortIndex: -1,
        }),
        U > Q
          ? ((x.sortIndex = U),
            t(c, x),
            n(a) === null &&
              x === n(c) &&
              (k ? (m(R), (R = -1)) : (k = !0), F(P, U - Q)))
          : ((x.sortIndex = oe), t(a, x), S || E || ((S = !0), qe(I))),
        x
      );
    }),
    (e.unstable_shouldYield = xe),
    (e.unstable_wrapCallback = function (x) {
      var M = w;
      return function () {
        var U = w;
        w = M;
        try {
          return x.apply(this, arguments);
        } finally {
          w = U;
        }
      };
    });
})(Uh);
Vh.exports = Uh;
var Ww = Vh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bh = N,
  vt = Ww;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Bh = new Set(),
  Ui = {};
function ur(e, t) {
  zr(e, t), zr(e + "Capture", t);
}
function zr(e, t) {
  for (Ui[e] = t, e = 0; e < t.length; e++) Bh.add(t[e]);
}
var an = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ia = Object.prototype.hasOwnProperty,
  Qw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Gd = {},
  Yd = {};
function Hw(e) {
  return Ia.call(Yd, e)
    ? !0
    : Ia.call(Gd, e)
    ? !1
    : Qw.test(e)
    ? (Yd[e] = !0)
    : ((Gd[e] = !0), !1);
}
function qw(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Kw(e, t, n, r) {
  if (t === null || typeof t > "u" || qw(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function it(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var He = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    He[e] = new it(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  He[t] = new it(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  He[e] = new it(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  He[e] = new it(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    He[e] = new it(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  He[e] = new it(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  He[e] = new it(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  He[e] = new it(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  He[e] = new it(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yu = /[\-:]([a-z])/g;
function Xu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yu, Xu);
    He[t] = new it(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yu, Xu);
    He[t] = new it(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yu, Xu);
  He[t] = new it(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  He[e] = new it(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
He.xlinkHref = new it(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  He[e] = new it(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ju(e, t, n, r) {
  var i = He.hasOwnProperty(t) ? He[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Kw(t, n, i, r) && (n = null),
    r || i === null
      ? Hw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var fn = bh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  To = Symbol.for("react.element"),
  vr = Symbol.for("react.portal"),
  yr = Symbol.for("react.fragment"),
  Zu = Symbol.for("react.strict_mode"),
  Ma = Symbol.for("react.profiler"),
  Wh = Symbol.for("react.provider"),
  Qh = Symbol.for("react.context"),
  ec = Symbol.for("react.forward_ref"),
  Ra = Symbol.for("react.suspense"),
  Aa = Symbol.for("react.suspense_list"),
  tc = Symbol.for("react.memo"),
  yn = Symbol.for("react.lazy"),
  Hh = Symbol.for("react.offscreen"),
  Xd = Symbol.iterator;
function ui(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xd && e[Xd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _e = Object.assign,
  Hs;
function yi(e) {
  if (Hs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hs = (t && t[1]) || "";
    }
  return (
    `
` +
    Hs +
    e
  );
}
var qs = !1;
function Ks(e, t) {
  if (!e || qs) return "";
  qs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          s = o.length - 1;
        1 <= l && 0 <= s && i[l] !== o[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || i[l] !== o[s])) {
                var a =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (qs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? yi(e) : "";
}
function Gw(e) {
  switch (e.tag) {
    case 5:
      return yi(e.type);
    case 16:
      return yi("Lazy");
    case 13:
      return yi("Suspense");
    case 19:
      return yi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ks(e.type, !1)), e;
    case 11:
      return (e = Ks(e.type.render, !1)), e;
    case 1:
      return (e = Ks(e.type, !0)), e;
    default:
      return "";
  }
}
function Fa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case yr:
      return "Fragment";
    case vr:
      return "Portal";
    case Ma:
      return "Profiler";
    case Zu:
      return "StrictMode";
    case Ra:
      return "Suspense";
    case Aa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Qh:
        return (e.displayName || "Context") + ".Consumer";
      case Wh:
        return (e._context.displayName || "Context") + ".Provider";
      case ec:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case tc:
        return (
          (t = e.displayName || null), t !== null ? t : Fa(e.type) || "Memo"
        );
      case yn:
        (t = e._payload), (e = e._init);
        try {
          return Fa(e(t));
        } catch {}
    }
  return null;
}
function Yw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Fa(t);
    case 8:
      return t === Zu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function $n(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function qh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Xw(e) {
  var t = qh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Oo(e) {
  e._valueTracker || (e._valueTracker = Xw(e));
}
function Kh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = qh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ml(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function $a(e, t) {
  var n = t.checked;
  return _e({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Jd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = $n(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Gh(e, t) {
  (t = t.checked), t != null && Ju(e, "checked", t, !1);
}
function Da(e, t) {
  Gh(e, t);
  var n = $n(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? za(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && za(e, t.type, $n(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Zd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function za(e, t, n) {
  (t !== "number" || ml(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var wi = Array.isArray;
function Ir(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $n(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Va(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return _e({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ef(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (wi(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: $n(n) };
}
function Yh(e, t) {
  var n = $n(t.value),
    r = $n(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function tf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Xh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ua(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Xh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var No,
  Jh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        No = No || document.createElement("div"),
          No.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = No.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function bi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Pi = {
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
    strokeWidth: !0,
  },
  Jw = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pi).forEach(function (e) {
  Jw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pi[t] = Pi[e]);
  });
});
function Zh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Pi.hasOwnProperty(e) && Pi[e])
    ? ("" + t).trim()
    : t + "px";
}
function em(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Zh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Zw = _e(
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
    wbr: !0,
  }
);
function ba(e, t) {
  if (t) {
    if (Zw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function Ba(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Wa = null;
function nc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Qa = null,
  Mr = null,
  Rr = null;
function nf(e) {
  if ((e = fo(e))) {
    if (typeof Qa != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = is(t)), Qa(e.stateNode, e.type, t));
  }
}
function tm(e) {
  Mr ? (Rr ? Rr.push(e) : (Rr = [e])) : (Mr = e);
}
function nm() {
  if (Mr) {
    var e = Mr,
      t = Rr;
    if (((Rr = Mr = null), nf(e), t)) for (e = 0; e < t.length; e++) nf(t[e]);
  }
}
function rm(e, t) {
  return e(t);
}
function im() {}
var Gs = !1;
function om(e, t, n) {
  if (Gs) return e(t, n);
  Gs = !0;
  try {
    return rm(e, t, n);
  } finally {
    (Gs = !1), (Mr !== null || Rr !== null) && (im(), nm());
  }
}
function Bi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = is(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var Ha = !1;
if (an)
  try {
    var ci = {};
    Object.defineProperty(ci, "passive", {
      get: function () {
        Ha = !0;
      },
    }),
      window.addEventListener("test", ci, ci),
      window.removeEventListener("test", ci, ci);
  } catch {
    Ha = !1;
  }
function ex(e, t, n, r, i, o, l, s, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var Ti = !1,
  gl = null,
  vl = !1,
  qa = null,
  tx = {
    onError: function (e) {
      (Ti = !0), (gl = e);
    },
  };
function nx(e, t, n, r, i, o, l, s, a) {
  (Ti = !1), (gl = null), ex.apply(tx, arguments);
}
function rx(e, t, n, r, i, o, l, s, a) {
  if ((nx.apply(this, arguments), Ti)) {
    if (Ti) {
      var c = gl;
      (Ti = !1), (gl = null);
    } else throw Error(j(198));
    vl || ((vl = !0), (qa = c));
  }
}
function cr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function lm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function rf(e) {
  if (cr(e) !== e) throw Error(j(188));
}
function ix(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = cr(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return rf(i), e;
        if (o === r) return rf(i), t;
        o = o.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function sm(e) {
  return (e = ix(e)), e !== null ? am(e) : null;
}
function am(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = am(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var um = vt.unstable_scheduleCallback,
  of = vt.unstable_cancelCallback,
  ox = vt.unstable_shouldYield,
  lx = vt.unstable_requestPaint,
  je = vt.unstable_now,
  sx = vt.unstable_getCurrentPriorityLevel,
  rc = vt.unstable_ImmediatePriority,
  cm = vt.unstable_UserBlockingPriority,
  yl = vt.unstable_NormalPriority,
  ax = vt.unstable_LowPriority,
  dm = vt.unstable_IdlePriority,
  es = null,
  Kt = null;
function ux(e) {
  if (Kt && typeof Kt.onCommitFiberRoot == "function")
    try {
      Kt.onCommitFiberRoot(es, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Vt = Math.clz32 ? Math.clz32 : fx,
  cx = Math.log,
  dx = Math.LN2;
function fx(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((cx(e) / dx) | 0)) | 0;
}
var Lo = 64,
  jo = 4194304;
function xi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function wl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? (r = xi(s)) : ((o &= l), o !== 0 && (r = xi(o)));
  } else (l = n & ~i), l !== 0 ? (r = xi(l)) : o !== 0 && (r = xi(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Vt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function px(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function hx(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - Vt(o),
      s = 1 << l,
      a = i[l];
    a === -1
      ? (!(s & n) || s & r) && (i[l] = px(s, t))
      : a <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Ka(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function fm() {
  var e = Lo;
  return (Lo <<= 1), !(Lo & 4194240) && (Lo = 64), e;
}
function Ys(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function uo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Vt(t)),
    (e[t] = n);
}
function mx(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Vt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function ic(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Vt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var he = 0;
function pm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var hm,
  oc,
  mm,
  gm,
  vm,
  Ga = !1,
  Io = [],
  Nn = null,
  Ln = null,
  jn = null,
  Wi = new Map(),
  Qi = new Map(),
  xn = [],
  gx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function lf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nn = null;
      break;
    case "dragenter":
    case "dragleave":
      Ln = null;
      break;
    case "mouseover":
    case "mouseout":
      jn = null;
      break;
    case "pointerover":
    case "pointerout":
      Wi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qi.delete(t.pointerId);
  }
}
function di(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = fo(t)), t !== null && oc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function vx(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Nn = di(Nn, e, t, n, r, i)), !0;
    case "dragenter":
      return (Ln = di(Ln, e, t, n, r, i)), !0;
    case "mouseover":
      return (jn = di(jn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Wi.set(o, di(Wi.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Qi.set(o, di(Qi.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function ym(e) {
  var t = Yn(e.target);
  if (t !== null) {
    var n = cr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = lm(n)), t !== null)) {
          (e.blockedOn = t),
            vm(e.priority, function () {
              mm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Xo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ya(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Wa = r), n.target.dispatchEvent(r), (Wa = null);
    } else return (t = fo(n)), t !== null && oc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function sf(e, t, n) {
  Xo(e) && n.delete(t);
}
function yx() {
  (Ga = !1),
    Nn !== null && Xo(Nn) && (Nn = null),
    Ln !== null && Xo(Ln) && (Ln = null),
    jn !== null && Xo(jn) && (jn = null),
    Wi.forEach(sf),
    Qi.forEach(sf);
}
function fi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ga ||
      ((Ga = !0),
      vt.unstable_scheduleCallback(vt.unstable_NormalPriority, yx)));
}
function Hi(e) {
  function t(i) {
    return fi(i, e);
  }
  if (0 < Io.length) {
    fi(Io[0], e);
    for (var n = 1; n < Io.length; n++) {
      var r = Io[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Nn !== null && fi(Nn, e),
      Ln !== null && fi(Ln, e),
      jn !== null && fi(jn, e),
      Wi.forEach(t),
      Qi.forEach(t),
      n = 0;
    n < xn.length;
    n++
  )
    (r = xn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < xn.length && ((n = xn[0]), n.blockedOn === null); )
    ym(n), n.blockedOn === null && xn.shift();
}
var Ar = fn.ReactCurrentBatchConfig,
  xl = !0;
function wx(e, t, n, r) {
  var i = he,
    o = Ar.transition;
  Ar.transition = null;
  try {
    (he = 1), lc(e, t, n, r);
  } finally {
    (he = i), (Ar.transition = o);
  }
}
function xx(e, t, n, r) {
  var i = he,
    o = Ar.transition;
  Ar.transition = null;
  try {
    (he = 4), lc(e, t, n, r);
  } finally {
    (he = i), (Ar.transition = o);
  }
}
function lc(e, t, n, r) {
  if (xl) {
    var i = Ya(e, t, n, r);
    if (i === null) la(e, t, r, Sl, n), lf(e, r);
    else if (vx(i, e, t, n, r)) r.stopPropagation();
    else if ((lf(e, r), t & 4 && -1 < gx.indexOf(e))) {
      for (; i !== null; ) {
        var o = fo(i);
        if (
          (o !== null && hm(o),
          (o = Ya(e, t, n, r)),
          o === null && la(e, t, r, Sl, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else la(e, t, r, null, n);
  }
}
var Sl = null;
function Ya(e, t, n, r) {
  if (((Sl = null), (e = nc(r)), (e = Yn(e)), e !== null))
    if (((t = cr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = lm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Sl = e), null;
}
function wm(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (sx()) {
        case rc:
          return 1;
        case cm:
          return 4;
        case yl:
        case ax:
          return 16;
        case dm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var _n = null,
  sc = null,
  Jo = null;
function xm() {
  if (Jo) return Jo;
  var e,
    t = sc,
    n = t.length,
    r,
    i = "value" in _n ? _n.value : _n.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (Jo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Zo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Mo() {
  return !0;
}
function af() {
  return !1;
}
function wt(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Mo
        : af),
      (this.isPropagationStopped = af),
      this
    );
  }
  return (
    _e(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Mo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Mo));
      },
      persist: function () {},
      isPersistent: Mo,
    }),
    t
  );
}
var Kr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ac = wt(Kr),
  co = _e({}, Kr, { view: 0, detail: 0 }),
  Sx = wt(co),
  Xs,
  Js,
  pi,
  ts = _e({}, co, {
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
    getModifierState: uc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== pi &&
            (pi && e.type === "mousemove"
              ? ((Xs = e.screenX - pi.screenX), (Js = e.screenY - pi.screenY))
              : (Js = Xs = 0),
            (pi = e)),
          Xs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Js;
    },
  }),
  uf = wt(ts),
  Ex = _e({}, ts, { dataTransfer: 0 }),
  kx = wt(Ex),
  Cx = _e({}, co, { relatedTarget: 0 }),
  Zs = wt(Cx),
  _x = _e({}, Kr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Px = wt(_x),
  Tx = _e({}, Kr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ox = wt(Tx),
  Nx = _e({}, Kr, { data: 0 }),
  cf = wt(Nx),
  Lx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  jx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ix = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Mx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ix[e]) ? !!t[e] : !1;
}
function uc() {
  return Mx;
}
var Rx = _e({}, co, {
    key: function (e) {
      if (e.key) {
        var t = Lx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Zo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? jx[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: uc,
    charCode: function (e) {
      return e.type === "keypress" ? Zo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Zo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ax = wt(Rx),
  Fx = _e({}, ts, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  df = wt(Fx),
  $x = _e({}, co, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: uc,
  }),
  Dx = wt($x),
  zx = _e({}, Kr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vx = wt(zx),
  Ux = _e({}, ts, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  bx = wt(Ux),
  Bx = [9, 13, 27, 32],
  cc = an && "CompositionEvent" in window,
  Oi = null;
an && "documentMode" in document && (Oi = document.documentMode);
var Wx = an && "TextEvent" in window && !Oi,
  Sm = an && (!cc || (Oi && 8 < Oi && 11 >= Oi)),
  ff = String.fromCharCode(32),
  pf = !1;
function Em(e, t) {
  switch (e) {
    case "keyup":
      return Bx.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function km(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var wr = !1;
function Qx(e, t) {
  switch (e) {
    case "compositionend":
      return km(t);
    case "keypress":
      return t.which !== 32 ? null : ((pf = !0), ff);
    case "textInput":
      return (e = t.data), e === ff && pf ? null : e;
    default:
      return null;
  }
}
function Hx(e, t) {
  if (wr)
    return e === "compositionend" || (!cc && Em(e, t))
      ? ((e = xm()), (Jo = sc = _n = null), (wr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Sm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var qx = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
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
  week: !0,
};
function hf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!qx[e.type] : t === "textarea";
}
function Cm(e, t, n, r) {
  tm(r),
    (t = El(t, "onChange")),
    0 < t.length &&
      ((n = new ac("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ni = null,
  qi = null;
function Kx(e) {
  Am(e, 0);
}
function ns(e) {
  var t = Er(e);
  if (Kh(t)) return e;
}
function Gx(e, t) {
  if (e === "change") return t;
}
var _m = !1;
if (an) {
  var ea;
  if (an) {
    var ta = "oninput" in document;
    if (!ta) {
      var mf = document.createElement("div");
      mf.setAttribute("oninput", "return;"),
        (ta = typeof mf.oninput == "function");
    }
    ea = ta;
  } else ea = !1;
  _m = ea && (!document.documentMode || 9 < document.documentMode);
}
function gf() {
  Ni && (Ni.detachEvent("onpropertychange", Pm), (qi = Ni = null));
}
function Pm(e) {
  if (e.propertyName === "value" && ns(qi)) {
    var t = [];
    Cm(t, qi, e, nc(e)), om(Kx, t);
  }
}
function Yx(e, t, n) {
  e === "focusin"
    ? (gf(), (Ni = t), (qi = n), Ni.attachEvent("onpropertychange", Pm))
    : e === "focusout" && gf();
}
function Xx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ns(qi);
}
function Jx(e, t) {
  if (e === "click") return ns(t);
}
function Zx(e, t) {
  if (e === "input" || e === "change") return ns(t);
}
function eS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var bt = typeof Object.is == "function" ? Object.is : eS;
function Ki(e, t) {
  if (bt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ia.call(t, i) || !bt(e[i], t[i])) return !1;
  }
  return !0;
}
function vf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function yf(e, t) {
  var n = vf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = vf(n);
  }
}
function Tm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Tm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Om() {
  for (var e = window, t = ml(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ml(e.document);
  }
  return t;
}
function dc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function tS(e) {
  var t = Om(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Tm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && dc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = yf(n, o));
        var l = yf(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var nS = an && "documentMode" in document && 11 >= document.documentMode,
  xr = null,
  Xa = null,
  Li = null,
  Ja = !1;
function wf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ja ||
    xr == null ||
    xr !== ml(r) ||
    ((r = xr),
    "selectionStart" in r && dc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Li && Ki(Li, r)) ||
      ((Li = r),
      (r = El(Xa, "onSelect")),
      0 < r.length &&
        ((t = new ac("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = xr))));
}
function Ro(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Sr = {
    animationend: Ro("Animation", "AnimationEnd"),
    animationiteration: Ro("Animation", "AnimationIteration"),
    animationstart: Ro("Animation", "AnimationStart"),
    transitionend: Ro("Transition", "TransitionEnd"),
  },
  na = {},
  Nm = {};
an &&
  ((Nm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Sr.animationend.animation,
    delete Sr.animationiteration.animation,
    delete Sr.animationstart.animation),
  "TransitionEvent" in window || delete Sr.transitionend.transition);
function rs(e) {
  if (na[e]) return na[e];
  if (!Sr[e]) return e;
  var t = Sr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nm) return (na[e] = t[n]);
  return e;
}
var Lm = rs("animationend"),
  jm = rs("animationiteration"),
  Im = rs("animationstart"),
  Mm = rs("transitionend"),
  Rm = new Map(),
  xf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function zn(e, t) {
  Rm.set(e, t), ur(t, [e]);
}
for (var ra = 0; ra < xf.length; ra++) {
  var ia = xf[ra],
    rS = ia.toLowerCase(),
    iS = ia[0].toUpperCase() + ia.slice(1);
  zn(rS, "on" + iS);
}
zn(Lm, "onAnimationEnd");
zn(jm, "onAnimationIteration");
zn(Im, "onAnimationStart");
zn("dblclick", "onDoubleClick");
zn("focusin", "onFocus");
zn("focusout", "onBlur");
zn(Mm, "onTransitionEnd");
zr("onMouseEnter", ["mouseout", "mouseover"]);
zr("onMouseLeave", ["mouseout", "mouseover"]);
zr("onPointerEnter", ["pointerout", "pointerover"]);
zr("onPointerLeave", ["pointerout", "pointerover"]);
ur(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ur(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ur("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ur(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ur(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ur(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Si =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  oS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Si));
function Sf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), rx(r, t, void 0, e), (e.currentTarget = null);
}
function Am(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), a !== o && i.isPropagationStopped())) break e;
          Sf(i, s, c), (o = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          Sf(i, s, c), (o = a);
        }
    }
  }
  if (vl) throw ((e = qa), (vl = !1), (qa = null), e);
}
function ye(e, t) {
  var n = t[ru];
  n === void 0 && (n = t[ru] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Fm(t, e, 2, !1), n.add(r));
}
function oa(e, t, n) {
  var r = 0;
  t && (r |= 4), Fm(n, e, r, t);
}
var Ao = "_reactListening" + Math.random().toString(36).slice(2);
function Gi(e) {
  if (!e[Ao]) {
    (e[Ao] = !0),
      Bh.forEach(function (n) {
        n !== "selectionchange" && (oS.has(n) || oa(n, !1, e), oa(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ao] || ((t[Ao] = !0), oa("selectionchange", !1, t));
  }
}
function Fm(e, t, n, r) {
  switch (wm(t)) {
    case 1:
      var i = wx;
      break;
    case 4:
      i = xx;
      break;
    default:
      i = lc;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ha ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function la(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = Yn(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = o = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  om(function () {
    var c = o,
      p = nc(n),
      v = [];
    e: {
      var w = Rm.get(e);
      if (w !== void 0) {
        var E = ac,
          S = e;
        switch (e) {
          case "keypress":
            if (Zo(n) === 0) break e;
          case "keydown":
          case "keyup":
            E = Ax;
            break;
          case "focusin":
            (S = "focus"), (E = Zs);
            break;
          case "focusout":
            (S = "blur"), (E = Zs);
            break;
          case "beforeblur":
          case "afterblur":
            E = Zs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            E = uf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = kx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = Dx;
            break;
          case Lm:
          case jm:
          case Im:
            E = Px;
            break;
          case Mm:
            E = Vx;
            break;
          case "scroll":
            E = Sx;
            break;
          case "wheel":
            E = bx;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = Ox;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = df;
        }
        var k = (t & 4) !== 0,
          D = !k && e === "scroll",
          m = k ? (w !== null ? w + "Capture" : null) : w;
        k = [];
        for (var f = c, g; f !== null; ) {
          g = f;
          var P = g.stateNode;
          if (
            (g.tag === 5 &&
              P !== null &&
              ((g = P),
              m !== null && ((P = Bi(f, m)), P != null && k.push(Yi(f, P, g)))),
            D)
          )
            break;
          f = f.return;
        }
        0 < k.length &&
          ((w = new E(w, S, null, n, p)), v.push({ event: w, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((w = e === "mouseover" || e === "pointerover"),
          (E = e === "mouseout" || e === "pointerout"),
          w &&
            n !== Wa &&
            (S = n.relatedTarget || n.fromElement) &&
            (Yn(S) || S[un]))
        )
          break e;
        if (
          (E || w) &&
          ((w =
            p.window === p
              ? p
              : (w = p.ownerDocument)
              ? w.defaultView || w.parentWindow
              : window),
          E
            ? ((S = n.relatedTarget || n.toElement),
              (E = c),
              (S = S ? Yn(S) : null),
              S !== null &&
                ((D = cr(S)), S !== D || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((E = null), (S = c)),
          E !== S)
        ) {
          if (
            ((k = uf),
            (P = "onMouseLeave"),
            (m = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = df),
              (P = "onPointerLeave"),
              (m = "onPointerEnter"),
              (f = "pointer")),
            (D = E == null ? w : Er(E)),
            (g = S == null ? w : Er(S)),
            (w = new k(P, f + "leave", E, n, p)),
            (w.target = D),
            (w.relatedTarget = g),
            (P = null),
            Yn(p) === c &&
              ((k = new k(m, f + "enter", S, n, p)),
              (k.target = g),
              (k.relatedTarget = D),
              (P = k)),
            (D = P),
            E && S)
          )
            t: {
              for (k = E, m = S, f = 0, g = k; g; g = mr(g)) f++;
              for (g = 0, P = m; P; P = mr(P)) g++;
              for (; 0 < f - g; ) (k = mr(k)), f--;
              for (; 0 < g - f; ) (m = mr(m)), g--;
              for (; f--; ) {
                if (k === m || (m !== null && k === m.alternate)) break t;
                (k = mr(k)), (m = mr(m));
              }
              k = null;
            }
          else k = null;
          E !== null && Ef(v, w, E, k, !1),
            S !== null && D !== null && Ef(v, D, S, k, !0);
        }
      }
      e: {
        if (
          ((w = c ? Er(c) : window),
          (E = w.nodeName && w.nodeName.toLowerCase()),
          E === "select" || (E === "input" && w.type === "file"))
        )
          var I = Gx;
        else if (hf(w))
          if (_m) I = Zx;
          else {
            I = Xx;
            var _ = Yx;
          }
        else
          (E = w.nodeName) &&
            E.toLowerCase() === "input" &&
            (w.type === "checkbox" || w.type === "radio") &&
            (I = Jx);
        if (I && (I = I(e, c))) {
          Cm(v, I, n, p);
          break e;
        }
        _ && _(e, w, c),
          e === "focusout" &&
            (_ = w._wrapperState) &&
            _.controlled &&
            w.type === "number" &&
            za(w, "number", w.value);
      }
      switch (((_ = c ? Er(c) : window), e)) {
        case "focusin":
          (hf(_) || _.contentEditable === "true") &&
            ((xr = _), (Xa = c), (Li = null));
          break;
        case "focusout":
          Li = Xa = xr = null;
          break;
        case "mousedown":
          Ja = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ja = !1), wf(v, n, p);
          break;
        case "selectionchange":
          if (nS) break;
        case "keydown":
        case "keyup":
          wf(v, n, p);
      }
      var L;
      if (cc)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        wr
          ? Em(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (Sm &&
          n.locale !== "ko" &&
          (wr || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && wr && (L = xm())
            : ((_n = p),
              (sc = "value" in _n ? _n.value : _n.textContent),
              (wr = !0))),
        (_ = El(c, R)),
        0 < _.length &&
          ((R = new cf(R, e, null, n, p)),
          v.push({ event: R, listeners: _ }),
          L ? (R.data = L) : ((L = km(n)), L !== null && (R.data = L)))),
        (L = Wx ? Qx(e, n) : Hx(e, n)) &&
          ((c = El(c, "onBeforeInput")),
          0 < c.length &&
            ((p = new cf("onBeforeInput", "beforeinput", null, n, p)),
            v.push({ event: p, listeners: c }),
            (p.data = L)));
    }
    Am(v, t);
  });
}
function Yi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function El(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Bi(e, n)),
      o != null && r.unshift(Yi(e, o, i)),
      (o = Bi(e, t)),
      o != null && r.push(Yi(e, o, i))),
      (e = e.return);
  }
  return r;
}
function mr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ef(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      c = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      i
        ? ((a = Bi(n, o)), a != null && l.unshift(Yi(n, a, s)))
        : i || ((a = Bi(n, o)), a != null && l.push(Yi(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var lS = /\r\n?/g,
  sS = /\u0000|\uFFFD/g;
function kf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      lS,
      `
`
    )
    .replace(sS, "");
}
function Fo(e, t, n) {
  if (((t = kf(t)), kf(e) !== t && n)) throw Error(j(425));
}
function kl() {}
var Za = null,
  eu = null;
function tu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var nu = typeof setTimeout == "function" ? setTimeout : void 0,
  aS = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Cf = typeof Promise == "function" ? Promise : void 0,
  uS =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Cf < "u"
      ? function (e) {
          return Cf.resolve(null).then(e).catch(cS);
        }
      : nu;
function cS(e) {
  setTimeout(function () {
    throw e;
  });
}
function sa(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Hi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Hi(t);
}
function In(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function _f(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Gr = Math.random().toString(36).slice(2),
  Ht = "__reactFiber$" + Gr,
  Xi = "__reactProps$" + Gr,
  un = "__reactContainer$" + Gr,
  ru = "__reactEvents$" + Gr,
  dS = "__reactListeners$" + Gr,
  fS = "__reactHandles$" + Gr;
function Yn(e) {
  var t = e[Ht];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[un] || n[Ht])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = _f(e); e !== null; ) {
          if ((n = e[Ht])) return n;
          e = _f(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function fo(e) {
  return (
    (e = e[Ht] || e[un]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Er(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function is(e) {
  return e[Xi] || null;
}
var iu = [],
  kr = -1;
function Vn(e) {
  return { current: e };
}
function we(e) {
  0 > kr || ((e.current = iu[kr]), (iu[kr] = null), kr--);
}
function ve(e, t) {
  kr++, (iu[kr] = e.current), (e.current = t);
}
var Dn = {},
  Xe = Vn(Dn),
  at = Vn(!1),
  nr = Dn;
function Vr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ut(e) {
  return (e = e.childContextTypes), e != null;
}
function Cl() {
  we(at), we(Xe);
}
function Pf(e, t, n) {
  if (Xe.current !== Dn) throw Error(j(168));
  ve(Xe, t), ve(at, n);
}
function $m(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(j(108, Yw(e) || "Unknown", i));
  return _e({}, n, r);
}
function _l(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dn),
    (nr = Xe.current),
    ve(Xe, e),
    ve(at, at.current),
    !0
  );
}
function Tf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = $m(e, t, nr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      we(at),
      we(Xe),
      ve(Xe, e))
    : we(at),
    ve(at, n);
}
var nn = null,
  os = !1,
  aa = !1;
function Dm(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
function pS(e) {
  (os = !0), Dm(e);
}
function Un() {
  if (!aa && nn !== null) {
    aa = !0;
    var e = 0,
      t = he;
    try {
      var n = nn;
      for (he = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (nn = null), (os = !1);
    } catch (i) {
      throw (nn !== null && (nn = nn.slice(e + 1)), um(rc, Un), i);
    } finally {
      (he = t), (aa = !1);
    }
  }
  return null;
}
var Cr = [],
  _r = 0,
  Pl = null,
  Tl = 0,
  Pt = [],
  Tt = 0,
  rr = null,
  on = 1,
  ln = "";
function Kn(e, t) {
  (Cr[_r++] = Tl), (Cr[_r++] = Pl), (Pl = e), (Tl = t);
}
function zm(e, t, n) {
  (Pt[Tt++] = on), (Pt[Tt++] = ln), (Pt[Tt++] = rr), (rr = e);
  var r = on;
  e = ln;
  var i = 32 - Vt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Vt(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (on = (1 << (32 - Vt(t) + i)) | (n << i) | r),
      (ln = o + e);
  } else (on = (1 << o) | (n << i) | r), (ln = e);
}
function fc(e) {
  e.return !== null && (Kn(e, 1), zm(e, 1, 0));
}
function pc(e) {
  for (; e === Pl; )
    (Pl = Cr[--_r]), (Cr[_r] = null), (Tl = Cr[--_r]), (Cr[_r] = null);
  for (; e === rr; )
    (rr = Pt[--Tt]),
      (Pt[Tt] = null),
      (ln = Pt[--Tt]),
      (Pt[Tt] = null),
      (on = Pt[--Tt]),
      (Pt[Tt] = null);
}
var gt = null,
  mt = null,
  Ee = !1,
  Dt = null;
function Vm(e, t) {
  var n = Nt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Of(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (gt = e), (mt = In(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (gt = e), (mt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = rr !== null ? { id: on, overflow: ln } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Nt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (gt = e),
            (mt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ou(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function lu(e) {
  if (Ee) {
    var t = mt;
    if (t) {
      var n = t;
      if (!Of(e, t)) {
        if (ou(e)) throw Error(j(418));
        t = In(n.nextSibling);
        var r = gt;
        t && Of(e, t)
          ? Vm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ee = !1), (gt = e));
      }
    } else {
      if (ou(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (Ee = !1), (gt = e);
    }
  }
}
function Nf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  gt = e;
}
function $o(e) {
  if (e !== gt) return !1;
  if (!Ee) return Nf(e), (Ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !tu(e.type, e.memoizedProps))),
    t && (t = mt))
  ) {
    if (ou(e)) throw (Um(), Error(j(418)));
    for (; t; ) Vm(e, t), (t = In(t.nextSibling));
  }
  if ((Nf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              mt = In(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      mt = null;
    }
  } else mt = gt ? In(e.stateNode.nextSibling) : null;
  return !0;
}
function Um() {
  for (var e = mt; e; ) e = In(e.nextSibling);
}
function Ur() {
  (mt = gt = null), (Ee = !1);
}
function hc(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
var hS = fn.ReactCurrentBatchConfig;
function Ft(e, t) {
  if (e && e.defaultProps) {
    (t = _e({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ol = Vn(null),
  Nl = null,
  Pr = null,
  mc = null;
function gc() {
  mc = Pr = Nl = null;
}
function vc(e) {
  var t = Ol.current;
  we(Ol), (e._currentValue = t);
}
function su(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Fr(e, t) {
  (Nl = e),
    (mc = Pr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (st = !0), (e.firstContext = null));
}
function jt(e) {
  var t = e._currentValue;
  if (mc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Pr === null)) {
      if (Nl === null) throw Error(j(308));
      (Pr = e), (Nl.dependencies = { lanes: 0, firstContext: e });
    } else Pr = Pr.next = e;
  return t;
}
var Xn = null;
function yc(e) {
  Xn === null ? (Xn = [e]) : Xn.push(e);
}
function bm(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), yc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    cn(e, r)
  );
}
function cn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var wn = !1;
function wc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Bm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function sn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Mn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), de & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      cn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), yc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    cn(e, n)
  );
}
function el(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ic(e, n);
  }
}
function Lf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ll(e, t, n, r) {
  var i = e.updateQueue;
  wn = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var a = s,
      c = a.next;
    (a.next = null), l === null ? (o = c) : (l.next = c), (l = a);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (s = p.lastBaseUpdate),
      s !== l &&
        (s === null ? (p.firstBaseUpdate = c) : (s.next = c),
        (p.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var v = i.baseState;
    (l = 0), (p = c = a = null), (s = o);
    do {
      var w = s.lane,
        E = s.eventTime;
      if ((r & w) === w) {
        p !== null &&
          (p = p.next =
            {
              eventTime: E,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var S = e,
            k = s;
          switch (((w = t), (E = n), k.tag)) {
            case 1:
              if (((S = k.payload), typeof S == "function")) {
                v = S.call(E, v, w);
                break e;
              }
              v = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = k.payload),
                (w = typeof S == "function" ? S.call(E, v, w) : S),
                w == null)
              )
                break e;
              v = _e({}, v, w);
              break e;
            case 2:
              wn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (w = i.effects),
          w === null ? (i.effects = [s]) : w.push(s));
      } else
        (E = {
          eventTime: E,
          lane: w,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          p === null ? ((c = p = E), (a = v)) : (p = p.next = E),
          (l |= w);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (w = s),
          (s = w.next),
          (w.next = null),
          (i.lastBaseUpdate = w),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (a = v),
      (i.baseState = a),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = p),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (or |= l), (e.lanes = l), (e.memoizedState = v);
  }
}
function jf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(j(191, i));
        i.call(r);
      }
    }
}
var Wm = new bh.Component().refs;
function au(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : _e({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ls = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? cr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = nt(),
      i = An(e),
      o = sn(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Mn(e, o, i)),
      t !== null && (Ut(t, e, i, r), el(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = nt(),
      i = An(e),
      o = sn(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Mn(e, o, i)),
      t !== null && (Ut(t, e, i, r), el(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = nt(),
      r = An(e),
      i = sn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Mn(e, i, r)),
      t !== null && (Ut(t, e, r, n), el(t, e, r));
  },
};
function If(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ki(n, r) || !Ki(i, o)
      : !0
  );
}
function Qm(e, t, n) {
  var r = !1,
    i = Dn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = jt(o))
      : ((i = ut(t) ? nr : Xe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Vr(e, i) : Dn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ls),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Mf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ls.enqueueReplaceState(t, t.state, null);
}
function uu(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Wm), wc(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = jt(o))
    : ((o = ut(t) ? nr : Xe.current), (i.context = Vr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (au(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ls.enqueueReplaceState(i, i.state, null),
      Ll(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function hi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var s = i.refs;
            s === Wm && (s = i.refs = {}),
              l === null ? delete s[o] : (s[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function Do(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Rf(e) {
  var t = e._init;
  return t(e._payload);
}
function Hm(e) {
  function t(m, f) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [f]), (m.flags |= 16)) : g.push(f);
    }
  }
  function n(m, f) {
    if (!e) return null;
    for (; f !== null; ) t(m, f), (f = f.sibling);
    return null;
  }
  function r(m, f) {
    for (m = new Map(); f !== null; )
      f.key !== null ? m.set(f.key, f) : m.set(f.index, f), (f = f.sibling);
    return m;
  }
  function i(m, f) {
    return (m = Fn(m, f)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, f, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < f ? ((m.flags |= 2), f) : g)
            : ((m.flags |= 2), f))
        : ((m.flags |= 1048576), f)
    );
  }
  function l(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, f, g, P) {
    return f === null || f.tag !== 6
      ? ((f = ma(g, m.mode, P)), (f.return = m), f)
      : ((f = i(f, g)), (f.return = m), f);
  }
  function a(m, f, g, P) {
    var I = g.type;
    return I === yr
      ? p(m, f, g.props.children, P, g.key)
      : f !== null &&
        (f.elementType === I ||
          (typeof I == "object" &&
            I !== null &&
            I.$$typeof === yn &&
            Rf(I) === f.type))
      ? ((P = i(f, g.props)), (P.ref = hi(m, f, g)), (P.return = m), P)
      : ((P = ll(g.type, g.key, g.props, null, m.mode, P)),
        (P.ref = hi(m, f, g)),
        (P.return = m),
        P);
  }
  function c(m, f, g, P) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== g.containerInfo ||
      f.stateNode.implementation !== g.implementation
      ? ((f = ga(g, m.mode, P)), (f.return = m), f)
      : ((f = i(f, g.children || [])), (f.return = m), f);
  }
  function p(m, f, g, P, I) {
    return f === null || f.tag !== 7
      ? ((f = er(g, m.mode, P, I)), (f.return = m), f)
      : ((f = i(f, g)), (f.return = m), f);
  }
  function v(m, f, g) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = ma("" + f, m.mode, g)), (f.return = m), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case To:
          return (
            (g = ll(f.type, f.key, f.props, null, m.mode, g)),
            (g.ref = hi(m, null, f)),
            (g.return = m),
            g
          );
        case vr:
          return (f = ga(f, m.mode, g)), (f.return = m), f;
        case yn:
          var P = f._init;
          return v(m, P(f._payload), g);
      }
      if (wi(f) || ui(f))
        return (f = er(f, m.mode, g, null)), (f.return = m), f;
      Do(m, f);
    }
    return null;
  }
  function w(m, f, g, P) {
    var I = f !== null ? f.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return I !== null ? null : s(m, f, "" + g, P);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case To:
          return g.key === I ? a(m, f, g, P) : null;
        case vr:
          return g.key === I ? c(m, f, g, P) : null;
        case yn:
          return (I = g._init), w(m, f, I(g._payload), P);
      }
      if (wi(g) || ui(g)) return I !== null ? null : p(m, f, g, P, null);
      Do(m, g);
    }
    return null;
  }
  function E(m, f, g, P, I) {
    if ((typeof P == "string" && P !== "") || typeof P == "number")
      return (m = m.get(g) || null), s(f, m, "" + P, I);
    if (typeof P == "object" && P !== null) {
      switch (P.$$typeof) {
        case To:
          return (m = m.get(P.key === null ? g : P.key) || null), a(f, m, P, I);
        case vr:
          return (m = m.get(P.key === null ? g : P.key) || null), c(f, m, P, I);
        case yn:
          var _ = P._init;
          return E(m, f, g, _(P._payload), I);
      }
      if (wi(P) || ui(P)) return (m = m.get(g) || null), p(f, m, P, I, null);
      Do(f, P);
    }
    return null;
  }
  function S(m, f, g, P) {
    for (
      var I = null, _ = null, L = f, R = (f = 0), J = null;
      L !== null && R < g.length;
      R++
    ) {
      L.index > R ? ((J = L), (L = null)) : (J = L.sibling);
      var W = w(m, L, g[R], P);
      if (W === null) {
        L === null && (L = J);
        break;
      }
      e && L && W.alternate === null && t(m, L),
        (f = o(W, f, R)),
        _ === null ? (I = W) : (_.sibling = W),
        (_ = W),
        (L = J);
    }
    if (R === g.length) return n(m, L), Ee && Kn(m, R), I;
    if (L === null) {
      for (; R < g.length; R++)
        (L = v(m, g[R], P)),
          L !== null &&
            ((f = o(L, f, R)), _ === null ? (I = L) : (_.sibling = L), (_ = L));
      return Ee && Kn(m, R), I;
    }
    for (L = r(m, L); R < g.length; R++)
      (J = E(L, m, R, g[R], P)),
        J !== null &&
          (e && J.alternate !== null && L.delete(J.key === null ? R : J.key),
          (f = o(J, f, R)),
          _ === null ? (I = J) : (_.sibling = J),
          (_ = J));
    return (
      e &&
        L.forEach(function (xe) {
          return t(m, xe);
        }),
      Ee && Kn(m, R),
      I
    );
  }
  function k(m, f, g, P) {
    var I = ui(g);
    if (typeof I != "function") throw Error(j(150));
    if (((g = I.call(g)), g == null)) throw Error(j(151));
    for (
      var _ = (I = null), L = f, R = (f = 0), J = null, W = g.next();
      L !== null && !W.done;
      R++, W = g.next()
    ) {
      L.index > R ? ((J = L), (L = null)) : (J = L.sibling);
      var xe = w(m, L, W.value, P);
      if (xe === null) {
        L === null && (L = J);
        break;
      }
      e && L && xe.alternate === null && t(m, L),
        (f = o(xe, f, R)),
        _ === null ? (I = xe) : (_.sibling = xe),
        (_ = xe),
        (L = J);
    }
    if (W.done) return n(m, L), Ee && Kn(m, R), I;
    if (L === null) {
      for (; !W.done; R++, W = g.next())
        (W = v(m, W.value, P)),
          W !== null &&
            ((f = o(W, f, R)), _ === null ? (I = W) : (_.sibling = W), (_ = W));
      return Ee && Kn(m, R), I;
    }
    for (L = r(m, L); !W.done; R++, W = g.next())
      (W = E(L, m, R, W.value, P)),
        W !== null &&
          (e && W.alternate !== null && L.delete(W.key === null ? R : W.key),
          (f = o(W, f, R)),
          _ === null ? (I = W) : (_.sibling = W),
          (_ = W));
    return (
      e &&
        L.forEach(function (Pe) {
          return t(m, Pe);
        }),
      Ee && Kn(m, R),
      I
    );
  }
  function D(m, f, g, P) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === yr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case To:
          e: {
            for (var I = g.key, _ = f; _ !== null; ) {
              if (_.key === I) {
                if (((I = g.type), I === yr)) {
                  if (_.tag === 7) {
                    n(m, _.sibling),
                      (f = i(_, g.props.children)),
                      (f.return = m),
                      (m = f);
                    break e;
                  }
                } else if (
                  _.elementType === I ||
                  (typeof I == "object" &&
                    I !== null &&
                    I.$$typeof === yn &&
                    Rf(I) === _.type)
                ) {
                  n(m, _.sibling),
                    (f = i(_, g.props)),
                    (f.ref = hi(m, _, g)),
                    (f.return = m),
                    (m = f);
                  break e;
                }
                n(m, _);
                break;
              } else t(m, _);
              _ = _.sibling;
            }
            g.type === yr
              ? ((f = er(g.props.children, m.mode, P, g.key)),
                (f.return = m),
                (m = f))
              : ((P = ll(g.type, g.key, g.props, null, m.mode, P)),
                (P.ref = hi(m, f, g)),
                (P.return = m),
                (m = P));
          }
          return l(m);
        case vr:
          e: {
            for (_ = g.key; f !== null; ) {
              if (f.key === _)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === g.containerInfo &&
                  f.stateNode.implementation === g.implementation
                ) {
                  n(m, f.sibling),
                    (f = i(f, g.children || [])),
                    (f.return = m),
                    (m = f);
                  break e;
                } else {
                  n(m, f);
                  break;
                }
              else t(m, f);
              f = f.sibling;
            }
            (f = ga(g, m.mode, P)), (f.return = m), (m = f);
          }
          return l(m);
        case yn:
          return (_ = g._init), D(m, f, _(g._payload), P);
      }
      if (wi(g)) return S(m, f, g, P);
      if (ui(g)) return k(m, f, g, P);
      Do(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        f !== null && f.tag === 6
          ? (n(m, f.sibling), (f = i(f, g)), (f.return = m), (m = f))
          : (n(m, f), (f = ma(g, m.mode, P)), (f.return = m), (m = f)),
        l(m))
      : n(m, f);
  }
  return D;
}
var br = Hm(!0),
  qm = Hm(!1),
  po = {},
  Gt = Vn(po),
  Ji = Vn(po),
  Zi = Vn(po);
function Jn(e) {
  if (e === po) throw Error(j(174));
  return e;
}
function xc(e, t) {
  switch ((ve(Zi, t), ve(Ji, e), ve(Gt, po), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ua(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ua(t, e));
  }
  we(Gt), ve(Gt, t);
}
function Br() {
  we(Gt), we(Ji), we(Zi);
}
function Km(e) {
  Jn(Zi.current);
  var t = Jn(Gt.current),
    n = Ua(t, e.type);
  t !== n && (ve(Ji, e), ve(Gt, n));
}
function Sc(e) {
  Ji.current === e && (we(Gt), we(Ji));
}
var ke = Vn(0);
function jl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ua = [];
function Ec() {
  for (var e = 0; e < ua.length; e++)
    ua[e]._workInProgressVersionPrimary = null;
  ua.length = 0;
}
var tl = fn.ReactCurrentDispatcher,
  ca = fn.ReactCurrentBatchConfig,
  ir = 0,
  Ce = null,
  $e = null,
  ze = null,
  Il = !1,
  ji = !1,
  eo = 0,
  mS = 0;
function Ke() {
  throw Error(j(321));
}
function kc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!bt(e[n], t[n])) return !1;
  return !0;
}
function Cc(e, t, n, r, i, o) {
  if (
    ((ir = o),
    (Ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (tl.current = e === null || e.memoizedState === null ? wS : xS),
    (e = n(r, i)),
    ji)
  ) {
    o = 0;
    do {
      if (((ji = !1), (eo = 0), 25 <= o)) throw Error(j(301));
      (o += 1),
        (ze = $e = null),
        (t.updateQueue = null),
        (tl.current = SS),
        (e = n(r, i));
    } while (ji);
  }
  if (
    ((tl.current = Ml),
    (t = $e !== null && $e.next !== null),
    (ir = 0),
    (ze = $e = Ce = null),
    (Il = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function _c() {
  var e = eo !== 0;
  return (eo = 0), e;
}
function Qt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ze === null ? (Ce.memoizedState = ze = e) : (ze = ze.next = e), ze;
}
function It() {
  if ($e === null) {
    var e = Ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = $e.next;
  var t = ze === null ? Ce.memoizedState : ze.next;
  if (t !== null) (ze = t), ($e = e);
  else {
    if (e === null) throw Error(j(310));
    ($e = e),
      (e = {
        memoizedState: $e.memoizedState,
        baseState: $e.baseState,
        baseQueue: $e.baseQueue,
        queue: $e.queue,
        next: null,
      }),
      ze === null ? (Ce.memoizedState = ze = e) : (ze = ze.next = e);
  }
  return ze;
}
function to(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function da(e) {
  var t = It(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = $e,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      c = o;
    do {
      var p = c.lane;
      if ((ir & p) === p)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var v = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((s = a = v), (l = r)) : (a = a.next = v),
          (Ce.lanes |= p),
          (or |= p);
      }
      c = c.next;
    } while (c !== null && c !== o);
    a === null ? (l = r) : (a.next = s),
      bt(r, t.memoizedState) || (st = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Ce.lanes |= o), (or |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fa(e) {
  var t = It(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    bt(o, t.memoizedState) || (st = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Gm() {}
function Ym(e, t) {
  var n = Ce,
    r = It(),
    i = t(),
    o = !bt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (st = !0)),
    (r = r.queue),
    Pc(Zm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ze !== null && ze.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      no(9, Jm.bind(null, n, r, i, t), void 0, null),
      Ve === null)
    )
      throw Error(j(349));
    ir & 30 || Xm(n, t, i);
  }
  return i;
}
function Xm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ce.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Jm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), e0(t) && t0(e);
}
function Zm(e, t, n) {
  return n(function () {
    e0(t) && t0(e);
  });
}
function e0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !bt(e, n);
  } catch {
    return !0;
  }
}
function t0(e) {
  var t = cn(e, 1);
  t !== null && Ut(t, e, 1, -1);
}
function Af(e) {
  var t = Qt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: to,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = yS.bind(null, Ce, e)),
    [t.memoizedState, e]
  );
}
function no(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function n0() {
  return It().memoizedState;
}
function nl(e, t, n, r) {
  var i = Qt();
  (Ce.flags |= e),
    (i.memoizedState = no(1 | t, n, void 0, r === void 0 ? null : r));
}
function ss(e, t, n, r) {
  var i = It();
  r = r === void 0 ? null : r;
  var o = void 0;
  if ($e !== null) {
    var l = $e.memoizedState;
    if (((o = l.destroy), r !== null && kc(r, l.deps))) {
      i.memoizedState = no(t, n, o, r);
      return;
    }
  }
  (Ce.flags |= e), (i.memoizedState = no(1 | t, n, o, r));
}
function Ff(e, t) {
  return nl(8390656, 8, e, t);
}
function Pc(e, t) {
  return ss(2048, 8, e, t);
}
function r0(e, t) {
  return ss(4, 2, e, t);
}
function i0(e, t) {
  return ss(4, 4, e, t);
}
function o0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function l0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ss(4, 4, o0.bind(null, t, e), n)
  );
}
function Tc() {}
function s0(e, t) {
  var n = It();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function a0(e, t) {
  var n = It();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function u0(e, t, n) {
  return ir & 21
    ? (bt(n, t) || ((n = fm()), (Ce.lanes |= n), (or |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (st = !0)), (e.memoizedState = n));
}
function gS(e, t) {
  var n = he;
  (he = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ca.transition;
  ca.transition = {};
  try {
    e(!1), t();
  } finally {
    (he = n), (ca.transition = r);
  }
}
function c0() {
  return It().memoizedState;
}
function vS(e, t, n) {
  var r = An(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    d0(e))
  )
    f0(t, n);
  else if (((n = bm(e, t, n, r)), n !== null)) {
    var i = nt();
    Ut(n, e, r, i), p0(n, t, r);
  }
}
function yS(e, t, n) {
  var r = An(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (d0(e)) f0(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), bt(s, l))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), yc(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = bm(e, t, i, r)),
      n !== null && ((i = nt()), Ut(n, e, r, i), p0(n, t, r));
  }
}
function d0(e) {
  var t = e.alternate;
  return e === Ce || (t !== null && t === Ce);
}
function f0(e, t) {
  ji = Il = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function p0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ic(e, n);
  }
}
var Ml = {
    readContext: jt,
    useCallback: Ke,
    useContext: Ke,
    useEffect: Ke,
    useImperativeHandle: Ke,
    useInsertionEffect: Ke,
    useLayoutEffect: Ke,
    useMemo: Ke,
    useReducer: Ke,
    useRef: Ke,
    useState: Ke,
    useDebugValue: Ke,
    useDeferredValue: Ke,
    useTransition: Ke,
    useMutableSource: Ke,
    useSyncExternalStore: Ke,
    useId: Ke,
    unstable_isNewReconciler: !1,
  },
  wS = {
    readContext: jt,
    useCallback: function (e, t) {
      return (Qt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: jt,
    useEffect: Ff,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        nl(4194308, 4, o0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return nl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return nl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Qt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Qt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = vS.bind(null, Ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Qt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Af,
    useDebugValue: Tc,
    useDeferredValue: function (e) {
      return (Qt().memoizedState = e);
    },
    useTransition: function () {
      var e = Af(!1),
        t = e[0];
      return (e = gS.bind(null, e[1])), (Qt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ce,
        i = Qt();
      if (Ee) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), Ve === null)) throw Error(j(349));
        ir & 30 || Xm(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Ff(Zm.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        no(9, Jm.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Qt(),
        t = Ve.identifierPrefix;
      if (Ee) {
        var n = ln,
          r = on;
        (n = (r & ~(1 << (32 - Vt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = eo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = mS++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  xS = {
    readContext: jt,
    useCallback: s0,
    useContext: jt,
    useEffect: Pc,
    useImperativeHandle: l0,
    useInsertionEffect: r0,
    useLayoutEffect: i0,
    useMemo: a0,
    useReducer: da,
    useRef: n0,
    useState: function () {
      return da(to);
    },
    useDebugValue: Tc,
    useDeferredValue: function (e) {
      var t = It();
      return u0(t, $e.memoizedState, e);
    },
    useTransition: function () {
      var e = da(to)[0],
        t = It().memoizedState;
      return [e, t];
    },
    useMutableSource: Gm,
    useSyncExternalStore: Ym,
    useId: c0,
    unstable_isNewReconciler: !1,
  },
  SS = {
    readContext: jt,
    useCallback: s0,
    useContext: jt,
    useEffect: Pc,
    useImperativeHandle: l0,
    useInsertionEffect: r0,
    useLayoutEffect: i0,
    useMemo: a0,
    useReducer: fa,
    useRef: n0,
    useState: function () {
      return fa(to);
    },
    useDebugValue: Tc,
    useDeferredValue: function (e) {
      var t = It();
      return $e === null ? (t.memoizedState = e) : u0(t, $e.memoizedState, e);
    },
    useTransition: function () {
      var e = fa(to)[0],
        t = It().memoizedState;
      return [e, t];
    },
    useMutableSource: Gm,
    useSyncExternalStore: Ym,
    useId: c0,
    unstable_isNewReconciler: !1,
  };
function Wr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Gw(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function pa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function cu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ES = typeof WeakMap == "function" ? WeakMap : Map;
function h0(e, t, n) {
  (n = sn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Al || ((Al = !0), (xu = r)), cu(e, t);
    }),
    n
  );
}
function m0(e, t, n) {
  (n = sn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        cu(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        cu(e, t),
          typeof r != "function" &&
            (Rn === null ? (Rn = new Set([this])) : Rn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function $f(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ES();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = FS.bind(null, e, t, n)), t.then(e, e));
}
function Df(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = sn(-1, 1)), (t.tag = 2), Mn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var kS = fn.ReactCurrentOwner,
  st = !1;
function tt(e, t, n, r) {
  t.child = e === null ? qm(t, null, n, r) : br(t, e.child, n, r);
}
function Vf(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Fr(t, i),
    (r = Cc(e, t, n, r, o, i)),
    (n = _c()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        dn(e, t, i))
      : (Ee && n && fc(t), (t.flags |= 1), tt(e, t, r, i), t.child)
  );
}
function Uf(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ac(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), g0(e, t, o, r, i))
      : ((e = ll(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ki), n(l, r) && e.ref === t.ref)
    )
      return dn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Fn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function g0(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ki(o, r) && e.ref === t.ref)
      if (((st = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (st = !0);
      else return (t.lanes = e.lanes), dn(e, t, i);
  }
  return du(e, t, n, r, i);
}
function v0(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ve(Or, ht),
        (ht |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ve(Or, ht),
          (ht |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ve(Or, ht),
        (ht |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ve(Or, ht),
      (ht |= r);
  return tt(e, t, i, n), t.child;
}
function y0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function du(e, t, n, r, i) {
  var o = ut(n) ? nr : Xe.current;
  return (
    (o = Vr(t, o)),
    Fr(t, i),
    (n = Cc(e, t, n, r, o, i)),
    (r = _c()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        dn(e, t, i))
      : (Ee && r && fc(t), (t.flags |= 1), tt(e, t, n, i), t.child)
  );
}
function bf(e, t, n, r, i) {
  if (ut(n)) {
    var o = !0;
    _l(t);
  } else o = !1;
  if ((Fr(t, i), t.stateNode === null))
    rl(e, t), Qm(t, n, r), uu(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = jt(c))
      : ((c = ut(n) ? nr : Xe.current), (c = Vr(t, c)));
    var p = n.getDerivedStateFromProps,
      v =
        typeof p == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== c) && Mf(t, l, r, c)),
      (wn = !1);
    var w = t.memoizedState;
    (l.state = w),
      Ll(t, r, l, i),
      (a = t.memoizedState),
      s !== r || w !== a || at.current || wn
        ? (typeof p == "function" && (au(t, n, p, r), (a = t.memoizedState)),
          (s = wn || If(t, n, s, r, w, a, c))
            ? (v ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = c),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Bm(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : Ft(t.type, s)),
      (l.props = c),
      (v = t.pendingProps),
      (w = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = jt(a))
        : ((a = ut(n) ? nr : Xe.current), (a = Vr(t, a)));
    var E = n.getDerivedStateFromProps;
    (p =
      typeof E == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== v || w !== a) && Mf(t, l, r, a)),
      (wn = !1),
      (w = t.memoizedState),
      (l.state = w),
      Ll(t, r, l, i);
    var S = t.memoizedState;
    s !== v || w !== S || at.current || wn
      ? (typeof E == "function" && (au(t, n, E, r), (S = t.memoizedState)),
        (c = wn || If(t, n, c, r, w, S, a) || !1)
          ? (p ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, S, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, S, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && w === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && w === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (l.props = r),
        (l.state = S),
        (l.context = a),
        (r = c))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && w === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && w === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return fu(e, t, n, r, o, i);
}
function fu(e, t, n, r, i, o) {
  y0(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && Tf(t, n, !1), dn(e, t, o);
  (r = t.stateNode), (kS.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = br(t, e.child, null, o)), (t.child = br(t, null, s, o)))
      : tt(e, t, s, o),
    (t.memoizedState = r.state),
    i && Tf(t, n, !0),
    t.child
  );
}
function w0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Pf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Pf(e, t.context, !1),
    xc(e, t.containerInfo);
}
function Bf(e, t, n, r, i) {
  return Ur(), hc(i), (t.flags |= 256), tt(e, t, n, r), t.child;
}
var pu = { dehydrated: null, treeContext: null, retryLane: 0 };
function hu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function x0(e, t, n) {
  var r = t.pendingProps,
    i = ke.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ve(ke, i & 1),
    e === null)
  )
    return (
      lu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = cs(l, r, 0, null)),
              (e = er(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = hu(n)),
              (t.memoizedState = pu),
              e)
            : Oc(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return CS(e, t, l, r, s, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (s = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Fn(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = Fn(s, o)) : ((o = er(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? hu(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = pu),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Fn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Oc(e, t) {
  return (
    (t = cs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function zo(e, t, n, r) {
  return (
    r !== null && hc(r),
    br(t, e.child, null, n),
    (e = Oc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function CS(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = pa(Error(j(422)))), zo(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = cs({ mode: "visible", children: r.children }, i, 0, null)),
        (o = er(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && br(t, e.child, null, l),
        (t.child.memoizedState = hu(l)),
        (t.memoizedState = pu),
        o);
  if (!(t.mode & 1)) return zo(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(j(419))), (r = pa(o, r, void 0)), zo(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), st || s)) {
    if (((r = Ve), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), cn(e, i), Ut(r, e, i, -1));
    }
    return Rc(), (r = pa(Error(j(421)))), zo(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = $S.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (mt = In(i.nextSibling)),
      (gt = t),
      (Ee = !0),
      (Dt = null),
      e !== null &&
        ((Pt[Tt++] = on),
        (Pt[Tt++] = ln),
        (Pt[Tt++] = rr),
        (on = e.id),
        (ln = e.overflow),
        (rr = t)),
      (t = Oc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Wf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), su(e.return, t, n);
}
function ha(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function S0(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((tt(e, t, r.children, n), (r = ke.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Wf(e, n, t);
        else if (e.tag === 19) Wf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ve(ke, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && jl(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ha(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && jl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ha(t, !0, n, null, o);
        break;
      case "together":
        ha(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function rl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function dn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (or |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Fn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Fn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function _S(e, t, n) {
  switch (t.tag) {
    case 3:
      w0(t), Ur();
      break;
    case 5:
      Km(t);
      break;
    case 1:
      ut(t.type) && _l(t);
      break;
    case 4:
      xc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ve(Ol, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ve(ke, ke.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? x0(e, t, n)
          : (ve(ke, ke.current & 1),
            (e = dn(e, t, n)),
            e !== null ? e.sibling : null);
      ve(ke, ke.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return S0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ve(ke, ke.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), v0(e, t, n);
  }
  return dn(e, t, n);
}
var E0, mu, k0, C0;
E0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
mu = function () {};
k0 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Jn(Gt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = $a(e, i)), (r = $a(e, r)), (o = []);
        break;
      case "select":
        (i = _e({}, i, { value: void 0 })),
          (r = _e({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Va(e, i)), (r = Va(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = kl);
    }
    ba(n, r);
    var l;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var s = i[c];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Ui.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((s = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && a !== s && (a != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (o || (o = []), o.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (o = o || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Ui.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && ye("scroll", e),
                  o || s === a || (o = []))
                : (o = o || []).push(c, a));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
C0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function mi(e, t) {
  if (!Ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function PS(e, t, n) {
  var r = t.pendingProps;
  switch ((pc(t), t.tag)) {
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
      return Ge(t), null;
    case 1:
      return ut(t.type) && Cl(), Ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Br(),
        we(at),
        we(Xe),
        Ec(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          ($o(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Dt !== null && (ku(Dt), (Dt = null)))),
        mu(e, t),
        Ge(t),
        null
      );
    case 5:
      Sc(t);
      var i = Jn(Zi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        k0(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return Ge(t), null;
        }
        if (((e = Jn(Gt.current)), $o(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ht] = t), (r[Xi] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ye("cancel", r), ye("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ye("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Si.length; i++) ye(Si[i], r);
              break;
            case "source":
              ye("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ye("error", r), ye("load", r);
              break;
            case "details":
              ye("toggle", r);
              break;
            case "input":
              Jd(r, o), ye("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ye("invalid", r);
              break;
            case "textarea":
              ef(r, o), ye("invalid", r);
          }
          ba(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Fo(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Fo(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : Ui.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  ye("scroll", r);
            }
          switch (n) {
            case "input":
              Oo(r), Zd(r, o, !0);
              break;
            case "textarea":
              Oo(r), tf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = kl);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Xh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Ht] = t),
            (e[Xi] = r),
            E0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Ba(n, r)), n)) {
              case "dialog":
                ye("cancel", e), ye("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Si.length; i++) ye(Si[i], e);
                i = r;
                break;
              case "source":
                ye("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ye("error", e), ye("load", e), (i = r);
                break;
              case "details":
                ye("toggle", e), (i = r);
                break;
              case "input":
                Jd(e, r), (i = $a(e, r)), ye("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = _e({}, r, { value: void 0 })),
                  ye("invalid", e);
                break;
              case "textarea":
                ef(e, r), (i = Va(e, r)), ye("invalid", e);
                break;
              default:
                i = r;
            }
            ba(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style"
                  ? em(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Jh(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && bi(e, a)
                    : typeof a == "number" && bi(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Ui.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && ye("scroll", e)
                      : a != null && Ju(e, o, a, l));
              }
            switch (n) {
              case "input":
                Oo(e), Zd(e, r, !1);
                break;
              case "textarea":
                Oo(e), tf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $n(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Ir(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Ir(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = kl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ge(t), null;
    case 6:
      if (e && t.stateNode != null) C0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = Jn(Zi.current)), Jn(Gt.current), $o(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ht] = t),
            (o = r.nodeValue !== n) && ((e = gt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Fo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Fo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ht] = t),
            (t.stateNode = r);
      }
      return Ge(t), null;
    case 13:
      if (
        (we(ke),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ee && mt !== null && t.mode & 1 && !(t.flags & 128))
          Um(), Ur(), (t.flags |= 98560), (o = !1);
        else if (((o = $o(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(j(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(j(317));
            o[Ht] = t;
          } else
            Ur(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ge(t), (o = !1);
        } else Dt !== null && (ku(Dt), (Dt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ke.current & 1 ? De === 0 && (De = 3) : Rc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ge(t),
          null);
    case 4:
      return (
        Br(), mu(e, t), e === null && Gi(t.stateNode.containerInfo), Ge(t), null
      );
    case 10:
      return vc(t.type._context), Ge(t), null;
    case 17:
      return ut(t.type) && Cl(), Ge(t), null;
    case 19:
      if ((we(ke), (o = t.memoizedState), o === null)) return Ge(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) mi(o, !1);
        else {
          if (De !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = jl(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    mi(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ve(ke, (ke.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            je() > Qr &&
            ((t.flags |= 128), (r = !0), mi(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = jl(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              mi(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !Ee)
            )
              return Ge(t), null;
          } else
            2 * je() - o.renderingStartTime > Qr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), mi(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = je()),
          (t.sibling = null),
          (n = ke.current),
          ve(ke, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ge(t), null);
    case 22:
    case 23:
      return (
        Mc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ht & 1073741824 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function TS(e, t) {
  switch ((pc(t), t.tag)) {
    case 1:
      return (
        ut(t.type) && Cl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Br(),
        we(at),
        we(Xe),
        Ec(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Sc(t), null;
    case 13:
      if (
        (we(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        Ur();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return we(ke), null;
    case 4:
      return Br(), null;
    case 10:
      return vc(t.type._context), null;
    case 22:
    case 23:
      return Mc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Vo = !1,
  Ye = !1,
  OS = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function Tr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Oe(e, t, r);
      }
    else n.current = null;
}
function gu(e, t, n) {
  try {
    n();
  } catch (r) {
    Oe(e, t, r);
  }
}
var Qf = !1;
function NS(e, t) {
  if (((Za = xl), (e = Om()), dc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            c = 0,
            p = 0,
            v = e,
            w = null;
          t: for (;;) {
            for (
              var E;
              v !== n || (i !== 0 && v.nodeType !== 3) || (s = l + i),
                v !== o || (r !== 0 && v.nodeType !== 3) || (a = l + r),
                v.nodeType === 3 && (l += v.nodeValue.length),
                (E = v.firstChild) !== null;

            )
              (w = v), (v = E);
            for (;;) {
              if (v === e) break t;
              if (
                (w === n && ++c === i && (s = l),
                w === o && ++p === r && (a = l),
                (E = v.nextSibling) !== null)
              )
                break;
              (v = w), (w = v.parentNode);
            }
            v = E;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (eu = { focusedElem: e, selectionRange: n }, xl = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var k = S.memoizedProps,
                    D = S.memoizedState,
                    m = t.stateNode,
                    f = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Ft(t.type, k),
                      D
                    );
                  m.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (P) {
          Oe(t, t.return, P);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (S = Qf), (Qf = !1), S;
}
function Ii(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && gu(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function as(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function vu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function _0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), _0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ht], delete t[Xi], delete t[ru], delete t[dS], delete t[fS])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function P0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || P0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function yu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = kl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (yu(e, t, n), e = e.sibling; e !== null; ) yu(e, t, n), (e = e.sibling);
}
function wu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wu(e, t, n), e = e.sibling; e !== null; ) wu(e, t, n), (e = e.sibling);
}
var Be = null,
  $t = !1;
function vn(e, t, n) {
  for (n = n.child; n !== null; ) T0(e, t, n), (n = n.sibling);
}
function T0(e, t, n) {
  if (Kt && typeof Kt.onCommitFiberUnmount == "function")
    try {
      Kt.onCommitFiberUnmount(es, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ye || Tr(n, t);
    case 6:
      var r = Be,
        i = $t;
      (Be = null),
        vn(e, t, n),
        (Be = r),
        ($t = i),
        Be !== null &&
          ($t
            ? ((e = Be),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Be.removeChild(n.stateNode));
      break;
    case 18:
      Be !== null &&
        ($t
          ? ((e = Be),
            (n = n.stateNode),
            e.nodeType === 8
              ? sa(e.parentNode, n)
              : e.nodeType === 1 && sa(e, n),
            Hi(e))
          : sa(Be, n.stateNode));
      break;
    case 4:
      (r = Be),
        (i = $t),
        (Be = n.stateNode.containerInfo),
        ($t = !0),
        vn(e, t, n),
        (Be = r),
        ($t = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ye &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && gu(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      vn(e, t, n);
      break;
    case 1:
      if (
        !Ye &&
        (Tr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Oe(n, t, s);
        }
      vn(e, t, n);
      break;
    case 21:
      vn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ye = (r = Ye) || n.memoizedState !== null), vn(e, t, n), (Ye = r))
        : vn(e, t, n);
      break;
    default:
      vn(e, t, n);
  }
}
function qf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new OS()),
      t.forEach(function (r) {
        var i = DS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function At(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Be = s.stateNode), ($t = !1);
              break e;
            case 3:
              (Be = s.stateNode.containerInfo), ($t = !0);
              break e;
            case 4:
              (Be = s.stateNode.containerInfo), ($t = !0);
              break e;
          }
          s = s.return;
        }
        if (Be === null) throw Error(j(160));
        T0(o, l, i), (Be = null), ($t = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (c) {
        Oe(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) O0(t, e), (t = t.sibling);
}
function O0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((At(t, e), Wt(e), r & 4)) {
        try {
          Ii(3, e, e.return), as(3, e);
        } catch (k) {
          Oe(e, e.return, k);
        }
        try {
          Ii(5, e, e.return);
        } catch (k) {
          Oe(e, e.return, k);
        }
      }
      break;
    case 1:
      At(t, e), Wt(e), r & 512 && n !== null && Tr(n, n.return);
      break;
    case 5:
      if (
        (At(t, e),
        Wt(e),
        r & 512 && n !== null && Tr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          bi(i, "");
        } catch (k) {
          Oe(e, e.return, k);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && Gh(i, o),
              Ba(s, l);
            var c = Ba(s, o);
            for (l = 0; l < a.length; l += 2) {
              var p = a[l],
                v = a[l + 1];
              p === "style"
                ? em(i, v)
                : p === "dangerouslySetInnerHTML"
                ? Jh(i, v)
                : p === "children"
                ? bi(i, v)
                : Ju(i, p, v, c);
            }
            switch (s) {
              case "input":
                Da(i, o);
                break;
              case "textarea":
                Yh(i, o);
                break;
              case "select":
                var w = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var E = o.value;
                E != null
                  ? Ir(i, !!o.multiple, E, !1)
                  : w !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Ir(i, !!o.multiple, o.defaultValue, !0)
                      : Ir(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Xi] = o;
          } catch (k) {
            Oe(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((At(t, e), Wt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (k) {
          Oe(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (At(t, e), Wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Hi(t.containerInfo);
        } catch (k) {
          Oe(e, e.return, k);
        }
      break;
    case 4:
      At(t, e), Wt(e);
      break;
    case 13:
      At(t, e),
        Wt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (jc = je())),
        r & 4 && qf(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ye = (c = Ye) || p), At(t, e), (Ye = c)) : At(t, e),
        Wt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !p && e.mode & 1)
        )
          for (V = e, p = e.child; p !== null; ) {
            for (v = V = p; V !== null; ) {
              switch (((w = V), (E = w.child), w.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ii(4, w, w.return);
                  break;
                case 1:
                  Tr(w, w.return);
                  var S = w.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = w), (n = w.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (k) {
                      Oe(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Tr(w, w.return);
                  break;
                case 22:
                  if (w.memoizedState !== null) {
                    Gf(v);
                    continue;
                  }
              }
              E !== null ? ((E.return = w), (V = E)) : Gf(v);
            }
            p = p.sibling;
          }
        e: for (p = null, v = e; ; ) {
          if (v.tag === 5) {
            if (p === null) {
              p = v;
              try {
                (i = v.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = v.stateNode),
                      (a = v.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Zh("display", l)));
              } catch (k) {
                Oe(e, e.return, k);
              }
            }
          } else if (v.tag === 6) {
            if (p === null)
              try {
                v.stateNode.nodeValue = c ? "" : v.memoizedProps;
              } catch (k) {
                Oe(e, e.return, k);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            p === v && (p = null), (v = v.return);
          }
          p === v && (p = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      At(t, e), Wt(e), r & 4 && qf(e);
      break;
    case 21:
      break;
    default:
      At(t, e), Wt(e);
  }
}
function Wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (P0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (bi(i, ""), (r.flags &= -33));
          var o = Hf(e);
          wu(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Hf(e);
          yu(e, s, l);
          break;
        default:
          throw Error(j(161));
      }
    } catch (a) {
      Oe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function LS(e, t, n) {
  (V = e), N0(e);
}
function N0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Vo;
      if (!l) {
        var s = i.alternate,
          a = (s !== null && s.memoizedState !== null) || Ye;
        s = Vo;
        var c = Ye;
        if (((Vo = l), (Ye = a) && !c))
          for (V = i; V !== null; )
            (l = V),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Yf(i)
                : a !== null
                ? ((a.return = l), (V = a))
                : Yf(i);
        for (; o !== null; ) (V = o), N0(o), (o = o.sibling);
        (V = i), (Vo = s), (Ye = c);
      }
      Kf(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (V = o)) : Kf(e);
  }
}
function Kf(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ye || as(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ye)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ft(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && jf(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                jf(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var p = c.memoizedState;
                  if (p !== null) {
                    var v = p.dehydrated;
                    v !== null && Hi(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        Ye || (t.flags & 512 && vu(t));
      } catch (w) {
        Oe(t, t.return, w);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function Gf(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function Yf(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            as(4, t);
          } catch (a) {
            Oe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Oe(t, i, a);
            }
          }
          var o = t.return;
          try {
            vu(t);
          } catch (a) {
            Oe(t, o, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            vu(t);
          } catch (a) {
            Oe(t, l, a);
          }
      }
    } catch (a) {
      Oe(t, t.return, a);
    }
    if (t === e) {
      V = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (V = s);
      break;
    }
    V = t.return;
  }
}
var jS = Math.ceil,
  Rl = fn.ReactCurrentDispatcher,
  Nc = fn.ReactCurrentOwner,
  Lt = fn.ReactCurrentBatchConfig,
  de = 0,
  Ve = null,
  Re = null,
  Qe = 0,
  ht = 0,
  Or = Vn(0),
  De = 0,
  ro = null,
  or = 0,
  us = 0,
  Lc = 0,
  Mi = null,
  lt = null,
  jc = 0,
  Qr = 1 / 0,
  en = null,
  Al = !1,
  xu = null,
  Rn = null,
  Uo = !1,
  Pn = null,
  Fl = 0,
  Ri = 0,
  Su = null,
  il = -1,
  ol = 0;
function nt() {
  return de & 6 ? je() : il !== -1 ? il : (il = je());
}
function An(e) {
  return e.mode & 1
    ? de & 2 && Qe !== 0
      ? Qe & -Qe
      : hS.transition !== null
      ? (ol === 0 && (ol = fm()), ol)
      : ((e = he),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wm(e.type))),
        e)
    : 1;
}
function Ut(e, t, n, r) {
  if (50 < Ri) throw ((Ri = 0), (Su = null), Error(j(185)));
  uo(e, n, r),
    (!(de & 2) || e !== Ve) &&
      (e === Ve && (!(de & 2) && (us |= n), De === 4 && Sn(e, Qe)),
      ct(e, r),
      n === 1 && de === 0 && !(t.mode & 1) && ((Qr = je() + 500), os && Un()));
}
function ct(e, t) {
  var n = e.callbackNode;
  hx(e, t);
  var r = wl(e, e === Ve ? Qe : 0);
  if (r === 0)
    n !== null && of(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && of(n), t === 1))
      e.tag === 0 ? pS(Xf.bind(null, e)) : Dm(Xf.bind(null, e)),
        uS(function () {
          !(de & 6) && Un();
        }),
        (n = null);
    else {
      switch (pm(r)) {
        case 1:
          n = rc;
          break;
        case 4:
          n = cm;
          break;
        case 16:
          n = yl;
          break;
        case 536870912:
          n = dm;
          break;
        default:
          n = yl;
      }
      n = $0(n, L0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function L0(e, t) {
  if (((il = -1), (ol = 0), de & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if ($r() && e.callbackNode !== n) return null;
  var r = wl(e, e === Ve ? Qe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = $l(e, r);
  else {
    t = r;
    var i = de;
    de |= 2;
    var o = I0();
    (Ve !== e || Qe !== t) && ((en = null), (Qr = je() + 500), Zn(e, t));
    do
      try {
        RS();
        break;
      } catch (s) {
        j0(e, s);
      }
    while (1);
    gc(),
      (Rl.current = o),
      (de = i),
      Re !== null ? (t = 0) : ((Ve = null), (Qe = 0), (t = De));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ka(e)), i !== 0 && ((r = i), (t = Eu(e, i)))), t === 1)
    )
      throw ((n = ro), Zn(e, 0), Sn(e, r), ct(e, je()), n);
    if (t === 6) Sn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !IS(i) &&
          ((t = $l(e, r)),
          t === 2 && ((o = Ka(e)), o !== 0 && ((r = o), (t = Eu(e, o)))),
          t === 1))
      )
        throw ((n = ro), Zn(e, 0), Sn(e, r), ct(e, je()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Gn(e, lt, en);
          break;
        case 3:
          if (
            (Sn(e, r), (r & 130023424) === r && ((t = jc + 500 - je()), 10 < t))
          ) {
            if (wl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              nt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = nu(Gn.bind(null, e, lt, en), t);
            break;
          }
          Gn(e, lt, en);
          break;
        case 4:
          if ((Sn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Vt(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = je() - r),
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
                : 1960 * jS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = nu(Gn.bind(null, e, lt, en), r);
            break;
          }
          Gn(e, lt, en);
          break;
        case 5:
          Gn(e, lt, en);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return ct(e, je()), e.callbackNode === n ? L0.bind(null, e) : null;
}
function Eu(e, t) {
  var n = Mi;
  return (
    e.current.memoizedState.isDehydrated && (Zn(e, t).flags |= 256),
    (e = $l(e, t)),
    e !== 2 && ((t = lt), (lt = n), t !== null && ku(t)),
    e
  );
}
function ku(e) {
  lt === null ? (lt = e) : lt.push.apply(lt, e);
}
function IS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!bt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Sn(e, t) {
  for (
    t &= ~Lc,
      t &= ~us,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Vt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Xf(e) {
  if (de & 6) throw Error(j(327));
  $r();
  var t = wl(e, 0);
  if (!(t & 1)) return ct(e, je()), null;
  var n = $l(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ka(e);
    r !== 0 && ((t = r), (n = Eu(e, r)));
  }
  if (n === 1) throw ((n = ro), Zn(e, 0), Sn(e, t), ct(e, je()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Gn(e, lt, en),
    ct(e, je()),
    null
  );
}
function Ic(e, t) {
  var n = de;
  de |= 1;
  try {
    return e(t);
  } finally {
    (de = n), de === 0 && ((Qr = je() + 500), os && Un());
  }
}
function lr(e) {
  Pn !== null && Pn.tag === 0 && !(de & 6) && $r();
  var t = de;
  de |= 1;
  var n = Lt.transition,
    r = he;
  try {
    if (((Lt.transition = null), (he = 1), e)) return e();
  } finally {
    (he = r), (Lt.transition = n), (de = t), !(de & 6) && Un();
  }
}
function Mc() {
  (ht = Or.current), we(Or);
}
function Zn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), aS(n)), Re !== null))
    for (n = Re.return; n !== null; ) {
      var r = n;
      switch ((pc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Cl();
          break;
        case 3:
          Br(), we(at), we(Xe), Ec();
          break;
        case 5:
          Sc(r);
          break;
        case 4:
          Br();
          break;
        case 13:
          we(ke);
          break;
        case 19:
          we(ke);
          break;
        case 10:
          vc(r.type._context);
          break;
        case 22:
        case 23:
          Mc();
      }
      n = n.return;
    }
  if (
    ((Ve = e),
    (Re = e = Fn(e.current, null)),
    (Qe = ht = t),
    (De = 0),
    (ro = null),
    (Lc = us = or = 0),
    (lt = Mi = null),
    Xn !== null)
  ) {
    for (t = 0; t < Xn.length; t++)
      if (((n = Xn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    Xn = null;
  }
  return e;
}
function j0(e, t) {
  do {
    var n = Re;
    try {
      if ((gc(), (tl.current = Ml), Il)) {
        for (var r = Ce.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Il = !1;
      }
      if (
        ((ir = 0),
        (ze = $e = Ce = null),
        (ji = !1),
        (eo = 0),
        (Nc.current = null),
        n === null || n.return === null)
      ) {
        (De = 1), (ro = t), (Re = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = Qe),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            p = s,
            v = p.tag;
          if (!(p.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var w = p.alternate;
            w
              ? ((p.updateQueue = w.updateQueue),
                (p.memoizedState = w.memoizedState),
                (p.lanes = w.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var E = Df(l);
          if (E !== null) {
            (E.flags &= -257),
              zf(E, l, s, o, t),
              E.mode & 1 && $f(o, c, t),
              (t = E),
              (a = c);
            var S = t.updateQueue;
            if (S === null) {
              var k = new Set();
              k.add(a), (t.updateQueue = k);
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              $f(o, c, t), Rc();
              break e;
            }
            a = Error(j(426));
          }
        } else if (Ee && s.mode & 1) {
          var D = Df(l);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256),
              zf(D, l, s, o, t),
              hc(Wr(a, s));
            break e;
          }
        }
        (o = a = Wr(a, s)),
          De !== 4 && (De = 2),
          Mi === null ? (Mi = [o]) : Mi.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = h0(o, a, t);
              Lf(o, m);
              break e;
            case 1:
              s = a;
              var f = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Rn === null || !Rn.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var P = m0(o, s, t);
                Lf(o, P);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      R0(n);
    } catch (I) {
      (t = I), Re === n && n !== null && (Re = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function I0() {
  var e = Rl.current;
  return (Rl.current = Ml), e === null ? Ml : e;
}
function Rc() {
  (De === 0 || De === 3 || De === 2) && (De = 4),
    Ve === null || (!(or & 268435455) && !(us & 268435455)) || Sn(Ve, Qe);
}
function $l(e, t) {
  var n = de;
  de |= 2;
  var r = I0();
  (Ve !== e || Qe !== t) && ((en = null), Zn(e, t));
  do
    try {
      MS();
      break;
    } catch (i) {
      j0(e, i);
    }
  while (1);
  if ((gc(), (de = n), (Rl.current = r), Re !== null)) throw Error(j(261));
  return (Ve = null), (Qe = 0), De;
}
function MS() {
  for (; Re !== null; ) M0(Re);
}
function RS() {
  for (; Re !== null && !ox(); ) M0(Re);
}
function M0(e) {
  var t = F0(e.alternate, e, ht);
  (e.memoizedProps = e.pendingProps),
    t === null ? R0(e) : (Re = t),
    (Nc.current = null);
}
function R0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = TS(n, t)), n !== null)) {
        (n.flags &= 32767), (Re = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (De = 6), (Re = null);
        return;
      }
    } else if (((n = PS(n, t, ht)), n !== null)) {
      Re = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Re = t;
      return;
    }
    Re = t = e;
  } while (t !== null);
  De === 0 && (De = 5);
}
function Gn(e, t, n) {
  var r = he,
    i = Lt.transition;
  try {
    (Lt.transition = null), (he = 1), AS(e, t, n, r);
  } finally {
    (Lt.transition = i), (he = r);
  }
  return null;
}
function AS(e, t, n, r) {
  do $r();
  while (Pn !== null);
  if (de & 6) throw Error(j(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (mx(e, o),
    e === Ve && ((Re = Ve = null), (Qe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Uo ||
      ((Uo = !0),
      $0(yl, function () {
        return $r(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Lt.transition), (Lt.transition = null);
    var l = he;
    he = 1;
    var s = de;
    (de |= 4),
      (Nc.current = null),
      NS(e, n),
      O0(n, e),
      tS(eu),
      (xl = !!Za),
      (eu = Za = null),
      (e.current = n),
      LS(n),
      lx(),
      (de = s),
      (he = l),
      (Lt.transition = o);
  } else e.current = n;
  if (
    (Uo && ((Uo = !1), (Pn = e), (Fl = i)),
    (o = e.pendingLanes),
    o === 0 && (Rn = null),
    ux(n.stateNode),
    ct(e, je()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Al) throw ((Al = !1), (e = xu), (xu = null), e);
  return (
    Fl & 1 && e.tag !== 0 && $r(),
    (o = e.pendingLanes),
    o & 1 ? (e === Su ? Ri++ : ((Ri = 0), (Su = e))) : (Ri = 0),
    Un(),
    null
  );
}
function $r() {
  if (Pn !== null) {
    var e = pm(Fl),
      t = Lt.transition,
      n = he;
    try {
      if (((Lt.transition = null), (he = 16 > e ? 16 : e), Pn === null))
        var r = !1;
      else {
        if (((e = Pn), (Pn = null), (Fl = 0), de & 6)) throw Error(j(331));
        var i = de;
        for (de |= 4, V = e.current; V !== null; ) {
          var o = V,
            l = o.child;
          if (V.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var c = s[a];
                for (V = c; V !== null; ) {
                  var p = V;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ii(8, p, o);
                  }
                  var v = p.child;
                  if (v !== null) (v.return = p), (V = v);
                  else
                    for (; V !== null; ) {
                      p = V;
                      var w = p.sibling,
                        E = p.return;
                      if ((_0(p), p === c)) {
                        V = null;
                        break;
                      }
                      if (w !== null) {
                        (w.return = E), (V = w);
                        break;
                      }
                      V = E;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var k = S.child;
                if (k !== null) {
                  S.child = null;
                  do {
                    var D = k.sibling;
                    (k.sibling = null), (k = D);
                  } while (k !== null);
                }
              }
              V = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (V = l);
          else
            e: for (; V !== null; ) {
              if (((o = V), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ii(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (V = m);
                break e;
              }
              V = o.return;
            }
        }
        var f = e.current;
        for (V = f; V !== null; ) {
          l = V;
          var g = l.child;
          if (l.subtreeFlags & 2064 && g !== null) (g.return = l), (V = g);
          else
            e: for (l = f; V !== null; ) {
              if (((s = V), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      as(9, s);
                  }
                } catch (I) {
                  Oe(s, s.return, I);
                }
              if (s === l) {
                V = null;
                break e;
              }
              var P = s.sibling;
              if (P !== null) {
                (P.return = s.return), (V = P);
                break e;
              }
              V = s.return;
            }
        }
        if (
          ((de = i), Un(), Kt && typeof Kt.onPostCommitFiberRoot == "function")
        )
          try {
            Kt.onPostCommitFiberRoot(es, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (he = n), (Lt.transition = t);
    }
  }
  return !1;
}
function Jf(e, t, n) {
  (t = Wr(n, t)),
    (t = h0(e, t, 1)),
    (e = Mn(e, t, 1)),
    (t = nt()),
    e !== null && (uo(e, 1, t), ct(e, t));
}
function Oe(e, t, n) {
  if (e.tag === 3) Jf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Jf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Rn === null || !Rn.has(r)))
        ) {
          (e = Wr(n, e)),
            (e = m0(t, e, 1)),
            (t = Mn(t, e, 1)),
            (e = nt()),
            t !== null && (uo(t, 1, e), ct(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function FS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = nt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ve === e &&
      (Qe & n) === n &&
      (De === 4 || (De === 3 && (Qe & 130023424) === Qe && 500 > je() - jc)
        ? Zn(e, 0)
        : (Lc |= n)),
    ct(e, t);
}
function A0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = jo), (jo <<= 1), !(jo & 130023424) && (jo = 4194304))
      : (t = 1));
  var n = nt();
  (e = cn(e, t)), e !== null && (uo(e, t, n), ct(e, n));
}
function $S(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), A0(e, n);
}
function DS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), A0(e, n);
}
var F0;
F0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || at.current) st = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (st = !1), _S(e, t, n);
      st = !!(e.flags & 131072);
    }
  else (st = !1), Ee && t.flags & 1048576 && zm(t, Tl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      rl(e, t), (e = t.pendingProps);
      var i = Vr(t, Xe.current);
      Fr(t, n), (i = Cc(null, t, r, e, i, n));
      var o = _c();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ut(r) ? ((o = !0), _l(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            wc(t),
            (i.updater = ls),
            (t.stateNode = i),
            (i._reactInternals = t),
            uu(t, r, e, n),
            (t = fu(null, t, r, !0, o, n)))
          : ((t.tag = 0), Ee && o && fc(t), tt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (rl(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = VS(r)),
          (e = Ft(r, e)),
          i)
        ) {
          case 0:
            t = du(null, t, r, e, n);
            break e;
          case 1:
            t = bf(null, t, r, e, n);
            break e;
          case 11:
            t = Vf(null, t, r, e, n);
            break e;
          case 14:
            t = Uf(null, t, r, Ft(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ft(r, i)),
        du(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ft(r, i)),
        bf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((w0(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Bm(e, t),
          Ll(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Wr(Error(j(423)), t)), (t = Bf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Wr(Error(j(424)), t)), (t = Bf(e, t, r, n, i));
            break e;
          } else
            for (
              mt = In(t.stateNode.containerInfo.firstChild),
                gt = t,
                Ee = !0,
                Dt = null,
                n = qm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ur(), r === i)) {
            t = dn(e, t, n);
            break e;
          }
          tt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Km(t),
        e === null && lu(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        tu(r, i) ? (l = null) : o !== null && tu(r, o) && (t.flags |= 32),
        y0(e, t),
        tt(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && lu(t), null;
    case 13:
      return x0(e, t, n);
    case 4:
      return (
        xc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = br(t, null, r, n)) : tt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ft(r, i)),
        Vf(e, t, r, i, n)
      );
    case 7:
      return tt(e, t, t.pendingProps, n), t.child;
    case 8:
      return tt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return tt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          ve(Ol, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (bt(o.value, l)) {
            if (o.children === i.children && !at.current) {
              t = dn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                l = o.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = sn(-1, n & -n)), (a.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var p = c.pending;
                        p === null
                          ? (a.next = a)
                          : ((a.next = p.next), (p.next = a)),
                          (c.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      su(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(j(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  su(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        tt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Fr(t, n),
        (i = jt(i)),
        (r = r(i)),
        (t.flags |= 1),
        tt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ft(r, t.pendingProps)),
        (i = Ft(r.type, i)),
        Uf(e, t, r, i, n)
      );
    case 15:
      return g0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ft(r, i)),
        rl(e, t),
        (t.tag = 1),
        ut(r) ? ((e = !0), _l(t)) : (e = !1),
        Fr(t, n),
        Qm(t, r, i),
        uu(t, r, i, n),
        fu(null, t, r, !0, e, n)
      );
    case 19:
      return S0(e, t, n);
    case 22:
      return v0(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function $0(e, t) {
  return um(e, t);
}
function zS(e, t, n, r) {
  (this.tag = e),
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
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Nt(e, t, n, r) {
  return new zS(e, t, n, r);
}
function Ac(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function VS(e) {
  if (typeof e == "function") return Ac(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ec)) return 11;
    if (e === tc) return 14;
  }
  return 2;
}
function Fn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Nt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ll(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) Ac(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case yr:
        return er(n.children, i, o, t);
      case Zu:
        (l = 8), (i |= 8);
        break;
      case Ma:
        return (
          (e = Nt(12, n, t, i | 2)), (e.elementType = Ma), (e.lanes = o), e
        );
      case Ra:
        return (e = Nt(13, n, t, i)), (e.elementType = Ra), (e.lanes = o), e;
      case Aa:
        return (e = Nt(19, n, t, i)), (e.elementType = Aa), (e.lanes = o), e;
      case Hh:
        return cs(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Wh:
              l = 10;
              break e;
            case Qh:
              l = 9;
              break e;
            case ec:
              l = 11;
              break e;
            case tc:
              l = 14;
              break e;
            case yn:
              (l = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Nt(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function er(e, t, n, r) {
  return (e = Nt(7, e, r, t)), (e.lanes = n), e;
}
function cs(e, t, n, r) {
  return (
    (e = Nt(22, e, r, t)),
    (e.elementType = Hh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ma(e, t, n) {
  return (e = Nt(6, e, null, t)), (e.lanes = n), e;
}
function ga(e, t, n) {
  return (
    (t = Nt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function US(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ys(0)),
    (this.expirationTimes = Ys(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ys(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Fc(e, t, n, r, i, o, l, s, a) {
  return (
    (e = new US(e, t, n, s, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Nt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    wc(o),
    e
  );
}
function bS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: vr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function D0(e) {
  if (!e) return Dn;
  e = e._reactInternals;
  e: {
    if (cr(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ut(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ut(n)) return $m(e, n, t);
  }
  return t;
}
function z0(e, t, n, r, i, o, l, s, a) {
  return (
    (e = Fc(n, r, !0, e, i, o, l, s, a)),
    (e.context = D0(null)),
    (n = e.current),
    (r = nt()),
    (i = An(n)),
    (o = sn(r, i)),
    (o.callback = t ?? null),
    Mn(n, o, i),
    (e.current.lanes = i),
    uo(e, i, r),
    ct(e, r),
    e
  );
}
function ds(e, t, n, r) {
  var i = t.current,
    o = nt(),
    l = An(i);
  return (
    (n = D0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = sn(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Mn(i, t, l)),
    e !== null && (Ut(e, i, l, o), el(e, i, l)),
    l
  );
}
function Dl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $c(e, t) {
  Zf(e, t), (e = e.alternate) && Zf(e, t);
}
function BS() {
  return null;
}
var V0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Dc(e) {
  this._internalRoot = e;
}
fs.prototype.render = Dc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  ds(e, t, null, null);
};
fs.prototype.unmount = Dc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    lr(function () {
      ds(null, e, null, null);
    }),
      (t[un] = null);
  }
};
function fs(e) {
  this._internalRoot = e;
}
fs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < xn.length && t !== 0 && t < xn[n].priority; n++);
    xn.splice(n, 0, e), n === 0 && ym(e);
  }
};
function zc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ps(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ep() {}
function WS(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = Dl(l);
        o.call(c);
      };
    }
    var l = z0(t, r, e, 0, null, !1, !1, "", ep);
    return (
      (e._reactRootContainer = l),
      (e[un] = l.current),
      Gi(e.nodeType === 8 ? e.parentNode : e),
      lr(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = Dl(a);
      s.call(c);
    };
  }
  var a = Fc(e, 0, !1, null, null, !1, !1, "", ep);
  return (
    (e._reactRootContainer = a),
    (e[un] = a.current),
    Gi(e.nodeType === 8 ? e.parentNode : e),
    lr(function () {
      ds(t, a, n, r);
    }),
    a
  );
}
function hs(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var a = Dl(l);
        s.call(a);
      };
    }
    ds(t, l, e, i);
  } else l = WS(n, t, e, i, r);
  return Dl(l);
}
hm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xi(t.pendingLanes);
        n !== 0 &&
          (ic(t, n | 1), ct(t, je()), !(de & 6) && ((Qr = je() + 500), Un()));
      }
      break;
    case 13:
      lr(function () {
        var r = cn(e, 1);
        if (r !== null) {
          var i = nt();
          Ut(r, e, 1, i);
        }
      }),
        $c(e, 1);
  }
};
oc = function (e) {
  if (e.tag === 13) {
    var t = cn(e, 134217728);
    if (t !== null) {
      var n = nt();
      Ut(t, e, 134217728, n);
    }
    $c(e, 134217728);
  }
};
mm = function (e) {
  if (e.tag === 13) {
    var t = An(e),
      n = cn(e, t);
    if (n !== null) {
      var r = nt();
      Ut(n, e, t, r);
    }
    $c(e, t);
  }
};
gm = function () {
  return he;
};
vm = function (e, t) {
  var n = he;
  try {
    return (he = e), t();
  } finally {
    he = n;
  }
};
Qa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Da(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = is(r);
            if (!i) throw Error(j(90));
            Kh(r), Da(r, i);
          }
        }
      }
      break;
    case "textarea":
      Yh(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ir(e, !!n.multiple, t, !1);
  }
};
rm = Ic;
im = lr;
var QS = { usingClientEntryPoint: !1, Events: [fo, Er, is, tm, nm, Ic] },
  gi = {
    findFiberByHostInstance: Yn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  HS = {
    bundleType: gi.bundleType,
    version: gi.version,
    rendererPackageName: gi.rendererPackageName,
    rendererConfig: gi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: fn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = sm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gi.findFiberByHostInstance || BS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var bo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!bo.isDisabled && bo.supportsFiber)
    try {
      (es = bo.inject(HS)), (Kt = bo);
    } catch {}
}
yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = QS;
yt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!zc(t)) throw Error(j(200));
  return bS(e, t, null, n);
};
yt.createRoot = function (e, t) {
  if (!zc(e)) throw Error(j(299));
  var n = !1,
    r = "",
    i = V0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Fc(e, 1, !1, null, null, n, !1, r, i)),
    (e[un] = t.current),
    Gi(e.nodeType === 8 ? e.parentNode : e),
    new Dc(t)
  );
};
yt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = sm(t)), (e = e === null ? null : e.stateNode), e;
};
yt.flushSync = function (e) {
  return lr(e);
};
yt.hydrate = function (e, t, n) {
  if (!ps(t)) throw Error(j(200));
  return hs(null, e, t, !0, n);
};
yt.hydrateRoot = function (e, t, n) {
  if (!zc(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = V0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = z0(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[un] = t.current),
    Gi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new fs(t);
};
yt.render = function (e, t, n) {
  if (!ps(t)) throw Error(j(200));
  return hs(null, e, t, !1, n);
};
yt.unmountComponentAtNode = function (e) {
  if (!ps(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (lr(function () {
        hs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[un] = null);
        });
      }),
      !0)
    : !1;
};
yt.unstable_batchedUpdates = Ic;
yt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ps(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return hs(e, t, n, !1, r);
};
yt.version = "18.2.0-next-9e3b772b8-20220608";
function U0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U0);
    } catch (e) {
      console.error(e);
    }
}
U0(), (zh.exports = yt);
var b0 = zh.exports;
(function (e) {
  var t = Object.defineProperty,
    n = Object.getOwnPropertyDescriptor,
    r = Object.getOwnPropertyNames,
    i = Object.prototype.hasOwnProperty,
    o = (F, x) => {
      for (var M in x) t(F, M, { get: x[M], enumerable: !0 });
    },
    l = (F, x, M, U) => {
      if ((x && typeof x == "object") || typeof x == "function")
        for (let Q of r(x))
          !i.call(F, Q) &&
            Q !== M &&
            t(F, Q, {
              get: () => x[Q],
              enumerable: !(U = n(x, Q)) || U.enumerable,
            });
      return F;
    },
    s = (F, x, M) => (l(F, x, "default"), M && l(M, x, "default")),
    a = (F) => l(t({}, "__esModule", { value: !0 }), F),
    c = {};
  o(c, { a: () => qe, animated: () => qe }), (e.exports = a(c));
  var p = Kd,
    v = b0,
    w = ce,
    E = _i,
    S = /^--/;
  function k(F, x) {
    return x == null || typeof x == "boolean" || x === ""
      ? ""
      : typeof x == "number" &&
        x !== 0 &&
        !S.test(F) &&
        !(f.hasOwnProperty(F) && f[F])
      ? x + "px"
      : ("" + x).trim();
  }
  var D = {};
  function m(F, x) {
    if (!F.nodeType || !F.setAttribute) return !1;
    let M =
        F.nodeName === "filter" ||
        (F.parentNode && F.parentNode.nodeName === "filter"),
      {
        style: U,
        children: Q,
        scrollTop: oe,
        scrollLeft: ge,
        viewBox: pe,
        ...Je
      } = x,
      Ue = Object.values(Je),
      St = Object.keys(Je).map((Ne) =>
        M || F.hasAttribute(Ne)
          ? Ne
          : D[Ne] ||
            (D[Ne] = Ne.replace(/([A-Z])/g, (Et) => "-" + Et.toLowerCase()))
      );
    Q !== void 0 && (F.textContent = Q);
    for (let Ne in U)
      if (U.hasOwnProperty(Ne)) {
        let Et = k(Ne, U[Ne]);
        S.test(Ne) ? F.style.setProperty(Ne, Et) : (F.style[Ne] = Et);
      }
    St.forEach((Ne, Et) => {
      F.setAttribute(Ne, Ue[Et]);
    }),
      oe !== void 0 && (F.scrollTop = oe),
      ge !== void 0 && (F.scrollLeft = ge),
      pe !== void 0 && F.setAttribute("viewBox", pe);
  }
  var f = {
      animationIterationCount: !0,
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
      strokeWidth: !0,
    },
    g = (F, x) => F + x.charAt(0).toUpperCase() + x.substring(1),
    P = ["Webkit", "Ms", "Moz", "O"];
  f = Object.keys(f).reduce(
    (F, x) => (P.forEach((M) => (F[g(M, x)] = F[x])), F),
    f
  );
  var I = _i,
    _ = ce,
    L = /^(matrix|translate|scale|rotate|skew)/,
    R = /^(translate)/,
    J = /^(rotate|skew)/,
    W = (F, x) => (_.is.num(F) && F !== 0 ? F + x : F),
    xe = (F, x) =>
      _.is.arr(F)
        ? F.every((M) => xe(M, x))
        : _.is.num(F)
        ? F === x
        : parseFloat(F) === x,
    Pe = class extends I.AnimatedObject {
      constructor({ x: F, y: x, z: M, ...U }) {
        let Q = [],
          oe = [];
        (F || x || M) &&
          (Q.push([F || 0, x || 0, M || 0]),
          oe.push((ge) => [
            `translate3d(${ge.map((pe) => W(pe, "px")).join(",")})`,
            xe(ge, 0),
          ])),
          (0, _.eachProp)(U, (ge, pe) => {
            if (pe === "transform")
              Q.push([ge || ""]), oe.push((Je) => [Je, Je === ""]);
            else if (L.test(pe)) {
              if ((delete U[pe], _.is.und(ge))) return;
              let Je = R.test(pe) ? "px" : J.test(pe) ? "deg" : "";
              Q.push((0, _.toArray)(ge)),
                oe.push(
                  pe === "rotate3d"
                    ? ([Ue, St, Ne, Et]) => [
                        `rotate3d(${Ue},${St},${Ne},${W(Et, Je)})`,
                        xe(Et, 0),
                      ]
                    : (Ue) => [
                        `${pe}(${Ue.map((St) => W(St, Je)).join(",")})`,
                        xe(Ue, pe.startsWith("scale") ? 1 : 0),
                      ]
                );
            }
          }),
          Q.length && (U.transform = new Fe(Q, oe)),
          super(U);
      }
    },
    Fe = class extends _.FluidValue {
      constructor(F, x) {
        super(), (this.inputs = F), (this.transforms = x), (this._value = null);
      }
      get() {
        return this._value || (this._value = this._get());
      }
      _get() {
        let F = "",
          x = !0;
        return (
          (0, _.each)(this.inputs, (M, U) => {
            let Q = (0, _.getFluidValue)(M[0]),
              [oe, ge] = this.transforms[U](
                _.is.arr(Q) ? Q : M.map(_.getFluidValue)
              );
            (F += " " + oe), (x = x && ge);
          }),
          x ? "none" : F
        );
      }
      observerAdded(F) {
        F == 1 &&
          (0, _.each)(this.inputs, (x) =>
            (0, _.each)(
              x,
              (M) => (0, _.hasFluidValue)(M) && (0, _.addFluidObserver)(M, this)
            )
          );
      }
      observerRemoved(F) {
        F == 0 &&
          (0, _.each)(this.inputs, (x) =>
            (0, _.each)(
              x,
              (M) =>
                (0, _.hasFluidValue)(M) && (0, _.removeFluidObserver)(M, this)
            )
          );
      }
      eventObserved(F) {
        F.type == "change" && (this._value = null),
          (0, _.callFluidObservers)(this, F);
      }
    },
    xt = [
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      "circle",
      "clipPath",
      "defs",
      "ellipse",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "mask",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "svg",
      "text",
      "tspan",
    ];
  s(c, Kd, e.exports),
    p.Globals.assign({
      batchedUpdates: v.unstable_batchedUpdates,
      createStringInterpolator: w.createStringInterpolator,
      colors: w.colors,
    });
  var pn = (0, E.createHost)(xt, {
      applyAnimatedValues: m,
      createAnimatedStyle: (F) => new Pe(F),
      getComponentProps: ({ scrollTop: F, scrollLeft: x, ...M }) => M,
    }),
    qe = pn.animated;
})(Yp);
var qS = Yp.exports;
Gp.exports = qS;
var KS = Gp.exports;
(function (e) {
  var t = Object.defineProperty,
    n = Object.getOwnPropertyDescriptor,
    r = Object.getOwnPropertyNames,
    i = Object.prototype.hasOwnProperty,
    o = (c, p, v, w) => {
      if ((p && typeof p == "object") || typeof p == "function")
        for (let E of r(p))
          !i.call(c, E) &&
            E !== v &&
            t(c, E, {
              get: () => p[E],
              enumerable: !(w = n(p, E)) || w.enumerable,
            });
      return c;
    },
    l = (c, p, v) => (o(c, p, "default"), v && o(v, p, "default")),
    s = (c) => o(t({}, "__esModule", { value: !0 }), c),
    a = {};
  (e.exports = s(a)), l(a, KS, e.exports);
})(Kp);
var GS = Kp.exports;
qp.exports = GS;
var YS = qp.exports,
  B0,
  gr;
Object.defineProperty(qo, "__esModule", { value: !0 });
var rn = N,
  zl = YS;
function XS(e) {
  return e && typeof e == "object" && "default" in e ? e : { default: e };
}
var vi = XS(rn),
  tn = function () {
    return (
      (tn =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }),
      tn.apply(this, arguments)
    );
  },
  tp = { x: 0, y: 0 },
  JS = { x: new zl.SpringValue(0), y: new zl.SpringValue(0) },
  W0 = rn.createContext(JS),
  np = function () {
    return rn.useContext(W0);
  };
(gr = qo.MouseParallaxChild =
  function (e) {
    var t = e.factorX,
      n = t === void 0 ? 1 : t,
      r = e.factorY,
      i = r === void 0 ? 1 : r,
      o = e.inverted,
      l = o !== void 0 && o,
      s = e.className,
      a = e.style,
      c = e.children,
      p = np(),
      v = rn.useCallback(
        function (E) {
          return {
            x: E.x.to(function (S) {
              return S * n * (l ? -1 : 1);
            }),
            y: E.y.to(function (S) {
              return S * i * (l ? -1 : 1);
            }),
          };
        },
        [n, i]
      ),
      w = tn(tn({}, v(p)), a);
    return vi.default.createElement(
      vi.default.Fragment,
      null,
      vi.default.createElement(
        zl.animated.div,
        tn({}, { className: s }, { style: w }),
        c
      )
    );
  }),
  (B0 = qo.MouseParallaxContainer =
    function (e) {
      var t = e.globalFactorX,
        n = t === void 0 ? 1 : t,
        r = e.globalFactorY,
        i = r === void 0 ? 1 : r,
        o = e.resetOnLeave,
        l = e.useWindowMouseEvents,
        s = e.inverted,
        a = e.springConfig,
        c = e.enabled,
        p = c === void 0 || c,
        v = e.containerStyle,
        w = e.className,
        E = e.children,
        S = zl.useSpring(function () {
          return tn(tn({}, tp), a ? { config: a } : {});
        }),
        k = S[0],
        D = S[1],
        m = function () {
          return D.start(tp);
        },
        f = rn.useState({ current: null }),
        g = f[0],
        P = f[1],
        I = rn.useCallback(function (J) {
          J !== null && P({ current: J });
        }, []),
        _ = rn.useCallback(
          function (J) {
            var W = g.current
              ? g.current.getBoundingClientRect()
              : { left: 0, top: 0 };
            return { x: J.clientX - W.left, y: J.clientY - W.top };
          },
          [g]
        ),
        L = rn.useCallback(
          function (J) {
            if (g.current) {
              var W = g.current.clientHeight,
                xe = g.current.clientWidth,
                Pe = _(J),
                Fe = {
                  x: (xe / 2 - Pe.x) * n * (s ? -1 : 1),
                  y: (W / 2 - Pe.y) * i * (s ? -1 : 1),
                };
              D.start(Fe);
            }
          },
          [g, _, s]
        );
      rn.useEffect(
        function () {
          return (
            p &&
              l &&
              g.current &&
              (window.addEventListener("mousemove", L, !1),
              o && window.addEventListener("mouseout", m, !1)),
            function () {
              p &&
                l &&
                g.current &&
                (window.removeEventListener("mousemove", L, !1),
                o && window.removeEventListener("mouseout", m, !1));
            }
          );
        },
        [g, L, o, l, p]
      );
      var R = {
        onMouseMove: p && !l ? L : void 0,
        onMouseLeave: p && !l && o ? m : void 0,
      };
      return vi.default.createElement(
        W0.Provider,
        { value: k },
        vi.default.createElement(
          "div",
          tn(
            {
              id: "mouse-parallax-container",
              ref: I,
              style: tn({ overflow: "hidden", position: "relative" }, v),
            },
            { className: w },
            R
          ),
          E
        )
      );
    }),
  (qo.useParallaxOffset = np);
function ZS({ onClick: e }) {
  const [t, n] = N.useState(0),
    [r, i] = N.useState(!1);
  N.useEffect(() => {
    o();
  }, [t]);
  function o() {
    t >= 1 && (l(), e());
  }
  function l() {
    i((s) => !s);
  }
  return T.jsxs(T.Fragment, {
    children: [
      !r &&
        T.jsx(B0, {
          globalFactorX: 0.6,
          globalFactorY: 0.6,
          className:
            "h-screen w-screen bg-black bg-cover flex flex-col justify-center items-center",
          children: T.jsxs(gr, {
            factorX: 0.03,
            factorY: 0.03,
            className:
              "md:min-w-[853.25px] min-w-[400px] md:min-h-[480px] min-h-[500px] p-12 bg-[url('bg.jpg')] text-center z-10 relative",
            children: [
              T.jsx(gr, {
                factorX: 0.001,
                factorY: 0.001,
                className: "-mt-36 mr-24 md:ml-[360px]",
                children: T.jsx("img", {
                  src: "/ps2.png",
                  alt: "ps2",
                  style: {
                    position: "absolute",
                    left: "78%",
                    scale: "30%",
                    zIndex: 1,
                  },
                }),
              }),
              T.jsx(gr, {
                factorX: 0.04,
                factorY: 0.04,
                style: {
                  position: "absolute",
                  top: "-40%",
                  left: "20%",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                },
                children: T.jsx("img", {
                  src: "/bsh.png",
                  alt: "purberry",
                  style: { width: "100%", height: "100%", objectFit: "cover" },
                }),
              }),
              T.jsx(gr, {
                factorX: 0.02,
                factorY: 0.02,
                className:
                  "mt-32 absolute sm:w-1/2 top-[5%] left-[0%] md:top-[-10%] md:left-[45%] transform -translate-x-1/2 -translate-y-1/2 z-1",
                children: T.jsx("img", {
                  src: "/psl.png",
                  alt: "purberry",
                  style: { width: "100%", height: "100%", objectFit: "cover" },
                }),
              }),
              T.jsxs(gr, {
                factorX: 0.01,
                factorY: 0.01,
                className:
                  "mt-4 absolute bottom-0 right-20 md:mx-auto  transform z-10",
                children: [
                  T.jsx("a", {
                    className:
                      "custom-font my-2 rounded-xl text-5xl font-extrabold text-[#FDCA49] transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110",
                    href: "https://app.uniswap.org/swap?outputCurrency=0x00000000000000000000000&chain=ethereum",
                    style: {
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
                    },
                    children: "Buy $FELLAS",
                  }),
                  T.jsx("br", {}),
                  T.jsx("button", {
                    className:
                      "custom-font my-2 rounded-xl text-7xl font-extrabold text-orange-400 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 grow-shrink-animation",
                    onClick: () => n(t + 1),
                    style: {
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
                    },
                    children: "Enter Site",
                  }),
                ],
              }),
              T.jsx("p", {
                className: "mb-5 text-base text-[#ff084a] sm:text-lg",
              }),
            ],
          }),
        }),
      T.jsx("style", {
        children: `

          .animate-pan-background {
            animation: pan-background 20s linear infinite;
          }

          .custom-font {
            font-family: 'Ritafurey-BoldItalic';
          }

                      .grow-shrink-animation {
              animation: growShrink 2s ease-in-out infinite;
            }

                      @keyframes growShrink {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.2);
              }
              100% {
                transform: scale(1);
              }
            }
        `,
      }),
    ],
  });
}
function e2() {
  const [e, t] = N.useState(!1),
    [n, r] = N.useState(!1),
    i = () => {
      t(!0), r(!0);
    };
  return T.jsx(T.Fragment, {
    children: e ? T.jsx(y1, { showVideo: n }) : T.jsx(ZS, { onClick: i }),
  });
}
function t2() {
  return T.jsxs(T.Fragment, {
    children: [
      T.jsx("h1", { children: " What was you looking for " }),
      T.jsx(bv, { to: "/", children: " Go Home lil fella " }),
    ],
  });
}
function n2() {
  return T.jsx(zv, { children: T.jsx(r2, {}) });
}
function r2() {
  return T.jsxs(Mv, {
    children: [
      T.jsx(ya, { path: "/", element: T.jsx(e2, {}) }),
      T.jsx(ya, { path: "*", element: T.jsx(t2, {}) }),
    ],
  });
}
var Q0,
  rp = b0;
(Q0 = rp.createRoot), rp.hydrateRoot;
Q0(document.getElementById("root")).render(
  T.jsx(N.StrictMode, { children: T.jsx(n2, {}) })
);
