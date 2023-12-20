import {
    _ as b
} from "./index.d12402ed.js"; /* empty css              */ /* empty css              */ /* empty css               */ /* empty css               */
import {
    e as w,
    j as L,
    g as B,
    i as E,
    t as N,
    v as f,
    x,
    M as V,
    c as i,
    a,
    w as e,
    o as u,
    h as g,
    y as A,
    d as c,
    F as l,
    z as k,
    q as y,
    A as p,
    C as T,
    D as R,
    S as j,
    E as D,
    r as q,
    b as M
} from "./index.16ec0bdc.js";
import {
    _ as S
} from "./plugin-vue_export-helper.21dcd24c.js";
const z = {
        class: "nav"
    },
    J = w({
        __name: "startnav",
        setup($) {
            const _ = L(),
                d = B([{
                    name: "Commonly Used",
                    path: "/start/commuse"
                }, {
                    name: "Custom Relics",
                    path: "/start/holyrelic"
                }, {
                    name: "Recommended Relics",
                    path: "/start/holyrelic2"
                }, {
                    name: "Monster",
                    path: "/start/monster"
                }, {
                    name: "Shortcut commands",
                    path: "/start/other"
                }, {
                    name: "Light Cone",
                    path: "/start/weapon"
                }, {
                    name: "Items",
                    path: "/start/thing"
                }, {
                    name: "Characters",
                    path: "/start/avatar"
                }, {
                    name: "Foods",
                    path: "/start/food"
                }, {
                    name: "Give Character",
                    path: "/start/page1"
                }, {
                    name: "Scenes",
                    path: "/start/scene"
                }]),
                m = B([{
                    name: "登录获取Tocken",
                    path: "/start/login"
                }, {
                    name: "注册",
                    path: "/start/register"
                }, {
                    name: "修改密码",
                    path: "/start/changepassword"
                }]),
                s = E("GM控制面板-暂不可用");

            function o(r) {
                f.push({
                    path: r
                })
            }
            const n = E([""]);
            return N(() => {
                n.value = [f.currentRoute.value.fullPath]
            }), x(() => _.isLogin, () => {
                _.isLogin ? s.value = "GM控制面板-已登录" : s.value = "GM控制面板-暂不可用"
            }, {
                immediate: !0
            }), x(() => f.currentRoute.value.path, (r, G) => {
                n.value = [r]
            }, {
                immediate: !0
            }), (r, G) => {
                const v = R,
                    h = j,
                    I = V;
                return u(), i("div", z, [a(I, {
                    showCollapseButton: "",
                    "default-open-keys": ["0", "1", "2"],
                    "selected-keys": n.value
                }, {
                    default: e(() => [a(h, {
                        key: "0"
                    }, {
                        icon: e(() => [a(g(A))]),
                        title: e(() => [c("控制台代码生成 ")]),
                        default: e(() => [(u(!0), i(l, null, k(d, (t, F) => (u(), y(v, {
                            key: t.path,
                            onClick: C => o(t.path)
                        }, {
                            default: e(() => [c(p(t.name), 1)]),
                            _: 2
                        }, 1032, ["onClick"]))), 128))]),
                        _: 1
                    }), a(h, {
                        key: "1"
                    }, {
                        icon: e(() => [a(g(T))]),
                        title: e(() => [c(p(s.value), 1)]),
                        default: e(() => [(u(!0), i(l, null, k(r.datav2, (t, F) => (u(), y(v, {
                            key: t.path,
                            onClick: C => o(t.path)
                        }, {
                            default: e(() => [c(p(t.name), 1)]),
                            _: 2
                        }, 1032, ["onClick"]))), 128))]),
                        _: 1
                    }), a(h, {
                        key: "2"
                    }, {
                        icon: e(() => [a(g(A))]),
                        title: e(() => [c("GCAuth-暂未实现功能")]),
                        default: e(() => [(u(!0), i(l, null, k(m, (t, F) => (u(), y(v, {
                            key: t.path,
                            onClick: C => o(t.path)
                        }, {
                            default: e(() => [c(p(t.name), 1)]),
                            _: 2
                        }, 1032, ["onClick"]))), 128))]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["selected-keys"])])
            }
        }
    });
var K = S(J, [
    ["__scopeId", "data-v-728b2d94"]
]);
const O = {
        class: "cont"
    },
    P = {
        class: "selectcom"
    },
    H = w({
        __name: "index",
        setup($) {
            const _ = L();

            function d(s) {
                const o = {
                        type: "CMD",
                        data: s
                    },
                    n = JSON.stringify(o);
                _.socketSend(n)
            }
            const m = E(_.isLogin);
            return D("send", d), D("isLogin", !m), (s, o) => {
                const n = q("router-view");
                return u(), i(l, null, [a(b), M("div", O, [a(K), M("div", P, [a(n)])])], 64)
            }
        }
    });
var te = S(H, [
    ["__scopeId", "data-v-2c889f98"]
]);
export {
    te as
    default
};
