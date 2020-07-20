(this.webpackJsonptimer = this.webpackJsonptimer || []).push([
    [0], {
        28: function (e, t, a) {
            e.exports = a.p + "static/media/banner-img.293a4c7b.png"
        },
        29: function (e, t, a) {
            e.exports = a.p + "static/media/demo.8fe5331d.png"
        },
        30: function (e, t, a) {
            e.exports = a(42)
        },
        35: function (e, t, a) {},
        41: function (e, t, a) {
            e.exports = a.p + "static/media/banner-completed.95a5ac28.png"
        },
        42: function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                s = a(17),
                i = a.n(s),
                o = (a(35), a(26)),
                l = a(11),
                c = a(12),
                u = a(14),
                m = a(13),
                h = a(7),
                d = a(10),
                v = a(8),
                p = function (e) {
                    Object(u.a)(a, e);
                    var t = Object(m.a)(a);

                    function a(e) {
                        var n;
                        return Object(l.a)(this, a), (n = t.call(this, e)).state = {
                            seconds: null,
                            showResult: !1,
                            resultMinutes: "",
                            resultSeconds: "",
                            minutes: null,
                            hours: null,
                            interval: null
                        }, n.handleResult = n.handleResult.bind(Object(h.a)(n)), n.timer = n.timer.bind(Object(h.a)(n)), n.pad = n.pad.bind(Object(h.a)(n)), n.goHome = n.goHome.bind(Object(h.a)(n)), console.log(n.props.timerValue), n
                    }
                    return Object(c.a)(a, [{
                        key: "componentDidMount",
                        value: function () {
                            var e, t, a, n, r, s, i, o, l = this;
                            (e = this.props.timerValue) > 0 && (n = 60 * ((t = e / 60) - (a = Math.floor(t) <= 0 ? 0 : Math.floor(t) - 1)), (r = Math.round(n) <= 0 ? 0 : Math.round(n) - 1) > 59 && (o = 60 * ((s = r / 60) - (i = Math.floor(s))), a += i, r = Math.round(o)), this.setState({
                                hours: this.pad(a),
                                minutes: this.pad(r),
                                seconds: this.pad(59)
                            }));
                            var c = localStorage.getItem("currentTime");
                            c && this.setState({
                                hours: isNaN(c.split(" ")[0]) ? "00" : c.split(" ")[0],
                                minutes: isNaN(c.split(" ")[1]) ? "00" : c.split(" ")[1],
                                seconds: c.split(" ")[2]
                            });
                            var u = setInterval((function () {
                                l.setState((function (e) {
                                    var t = e.seconds;
                                    return {
                                        seconds: l.pad(t - 1)
                                    }
                                })), l.timer(), localStorage.setItem("currentTime", l.state.hours + " " + l.state.minutes + " " + l.state.seconds), "/" === window.location.pathname && clearInterval(u)
                            }), 1e3);
                            this.setState({
                                interval: u
                            })
                        }
                    }, {
                        key: "goHome",
                        value: function () {
                            localStorage.removeItem("currentTime"), this.props.setImage({
                                setImage: !1
                            })
                        }
                    }, {
                        key: "timer",
                        value: function () {
                            "00" == this.state.seconds && (this.state.minutes > 0 ? this.setState({
                                minutes: this.pad(this.state.minutes - 1),
                                seconds: this.pad(59)
                            }) : "00" === this.state.hours && "00" === this.state.minutes && "00" === this.state.seconds ? (clearInterval(this.state.interval), this.handleResult()) : this.setState({
                                hours: this.pad(this.state.hours - 1),
                                minutes: this.pad(59),
                                seconds: this.pad(59)
                            }))
                        }
                    }, {
                        key: "pad",
                        value: function (e) {
                            return e < 10 ? "0" + e.toString() : e.toString()
                        }
                    }, {
                        key: "handleResult",
                        value: function (e) {
                            var t, a, n, r, s, i;
                            clearInterval(this.state.interval), n = 60 * ((t = this.props.timerValue / 60) - (a = Math.floor(t) <= 0 ? 0 : Math.floor(t))), r = 0 === (r = Math.round(n) <= 0 ? 0 : Math.round(n)) ? 60 : r;
                            JSON.parse(localStorage.getItem("questions"));
                            if (this.state.hours && this.state.minutes) {
                                var o = "00" === this.state.seconds ? 0 : 60 - this.state.seconds;
                                "0.0" === 60 * parseInt(this.state.hours) + parseInt(this.state.minutes) + "." + o ? (s = a + r, i = 0) : (s = this.pad(r - (parseInt(this.state.minutes) + 1)), i = this.pad(o)), this.setState({
                                    showResult: !0,
                                    resultMinutes: s,
                                    resultSeconds: i
                                })
                            }
                            this.props.setImage({
                                setImage: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this.state,
                                t = e.hours,
                                a = e.minutes,
                                n = e.seconds,
                                s = e.showResult,
                                i = e.resultMinutes,
                                o = e.resultSeconds;
                            return r.a.createElement("div", {
                                className: "nav-wrapper"
                            }, !s && r.a.createElement("div", {
                                className: "navbar__timer"
                            }, r.a.createElement("span", null, t + ":" + a + ":" + n), r.a.createElement("button", {
                                className: "start-timer",
                                onClick: this.handleResult
                            }, "STOP TIMER")), s && r.a.createElement("div", {
                                className: "timer-result"
                            }, r.a.createElement("h4", null, "Your Time Summary"), r.a.createElement("div", {
                                className: "timer-result__detail"
                            }, r.a.createElement("span", null, r.a.createElement("b", null, i), " Minutes"), r.a.createElement("span", null, r.a.createElement("b", null, o), " Seconds")), r.a.createElement(d.b, {
                                onClick: this.goHome,
                                to: "/sathish-timer",
                                className: "start-timer"
                            }, "RESET TIMER")))
                        }
                    }]), a
                }(n.Component);
            var f = Object(v.b)((function (e) {
                    return {
                        timerValue: e.timerValue
                    }
                }), (function (e) {
                    return {
                        setImage: function (t) {
                            return e({
                                type: "SET_IMAGE",
                                value: t
                            })
                        }
                    }
                }))(p),
                b = a(2),
                g = function (e) {
                    Object(u.a)(a, e);
                    var t = Object(m.a)(a);

                    function a(e) {
                        var n;
                        return Object(l.a)(this, a), (n = t.call(this, e)).state = {
                            timerValue: "",
                            validator: !1,
                            validatorMessge: "",
                            redirectTimer: !1
                        }, n.setCurrentVal = n.setCurrentVal.bind(Object(h.a)(n)), n.startTimer = n.startTimer.bind(Object(h.a)(n)), console.log(n.props.timerValue), n
                    }
                    return Object(c.a)(a, [{
                        key: "setCurrentVal",
                        value: function (e) {
                            "" != e.target.value && this.state.validator && this.setState({
                                validator: !1
                            }), e.target.value.length <= 6 && this.setState({
                                timerValue: e.target.value
                            })
                        }
                    }, {
                        key: "startTimer",
                        value: function () {
                            "" != this.state.timerValue ? (this.props.setTimerValue({
                                timerValue: this.state.timerValue
                            }), this.setState({
                                redirectTimer: !0
                            })) : this.setState({
                                validator: !0,
                                validatorMessage: "*Timer value required"
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this,
                                t = this.state,
                                a = t.validatorMessage,
                                n = t.validator,
                                s = t.timerValue;
                            return t.redirectTimer ? r.a.createElement(b.a, {
                                to: "/sathish-timer/timer"
                            }) : r.a.createElement("div", {
                                className: "timer-content__input"
                            }, r.a.createElement("div", {
                                className: "form__group field"
                            }, r.a.createElement("input", {
                                type: "number",
                                maxLength: "6",
                                className: "form__field",
                                placeholder: "Name",
                                name: "name",
                                id: "name",
                                required: !0,
                                onChange: function (t) {
                                    return e.setCurrentVal(t)
                                },
                                value: s
                            }), r.a.createElement("label", {
                                htmlFor: "name",
                                className: "form__label"
                            }, "Enter some minutes")), n && r.a.createElement("span", {
                                className: "error-msg"
                            }, a), r.a.createElement("button", {
                                className: "start-timer",
                                onClick: this.startTimer
                            }, "START TIMER"))
                        }
                    }]), a
                }(n.Component);
            var E = Object(v.b)((function (e) {
                    return {
                        timerValue: e.timerValue
                    }
                }), (function (e) {
                    return {
                        setTimerValue: function (t) {
                            return e({
                                type: "SET_TIMER_VALUE",
                                value: t
                            })
                        }
                    }
                }))(g),
                S = a(28),
                T = a.n(S),
                I = a(29),
                w = a.n(I),
                V = (a(41), function (e) {
                    Object(u.a)(a, e);
                    var t = Object(m.a)(a);

                    function a(e) {
                        var n;
                        return Object(l.a)(this, a), (n = t.call(this, e)).state = {}, console.log(n.props.timerValue), n
                    }
                    return Object(c.a)(a, [{
                        key: "render",
                        value: function () {
                            return Object(o.a)(this.state), r.a.createElement("div", {
                                className: "timer fadein"
                            }, r.a.createElement("a", {
                                href: "https://github.com/Sathishvasi/sathish-timer-dev",
                                className: "corner-ribbon",
                                target: "_blank"
                            }, "Github"), r.a.createElement("div", {
                                className: "timer-header"
                            }, r.a.createElement("img", {
                                src: w.a,
                                alt: "Logo img"
                            }), r.a.createElement("h5", null, "SATHISH TIMER")), r.a.createElement("div", {
                                className: "timer-card"
                            }, r.a.createElement("div", {
                                className: "timer-banner"
                            }, r.a.createElement("img", {
                                src: T.a,
                                className: "fadein",
                                alt: "Banner"
                            })), r.a.createElement("div", {
                                className: "timer-content"
                            }, r.a.createElement(d.a, null, r.a.createElement(b.d, null, r.a.createElement(b.b, {
                                name: "Layout",
                                exact: !0,
                                path: "/sathish-timer",
                                render: function (e) {
                                    return r.a.createElement(E, e)
                                }
                            }), r.a.createElement(b.b, {
                                name: "Timer Page",
                                path: "/sathish-timer/timer",
                                render: function (e) {
                                    return r.a.createElement(f, e)
                                }
                            })), r.a.createElement(b.a, {
                                exact: !0,
                                from: "/",
                                to: "/sathish-timer"
                            })))))
                        }
                    }]), a
                }(n.Component));
            var O = Object(v.b)((function (e) {
                    return {
                        timerValue: e.timerValue,
                        bannerImageFinal: e.bannerImageFinal
                    }
                }), (function (e) {
                    return {
                        setTimerValue: function (t) {
                            return e({
                                type: "SET_TIMER_VALUE",
                                value: t
                            })
                        }
                    }
                }))(V),
                j = a(19),
                M = a(16),
                N = {
                    demoVal: "sathish",
                    timerValue: "",
                    bannerImageFinal: !1
                };
            var k = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "SET_TIMER_VALUE":
                            return Object(M.a)(Object(M.a)({}, e), {}, {
                                timerValue: t.value.timerValue
                            });
                        case "SET_IMAGE":
                            return Object(M.a)(Object(M.a)({}, e), {}, {
                                bannerImageFinal: t.value.setImage
                            });
                        default:
                            return e
                    }
                },
                y = Object(j.b)(k);
            var _ = function () {
                    return r.a.createElement(v.a, {
                        store: y
                    }, r.a.createElement(O, null))
                },
                R = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function C(e, t) {
                navigator.serviceWorker.register(e).then((function (e) {
                    e.onupdatefound = function () {
                        var a = e.installing;
                        null !== a && (a.onstatechange = function () {
                            "installed" === a.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."), t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(e)))
                        })
                    }
                })).catch((function (e) {
                    console.error("Error during service worker registration:", e)
                }))
            }
            i.a.render(r.a.createElement(_, null), document.getElementById("root")),
                function (e) {
                    if ("serviceWorker" in navigator) {
                        if (new URL("", window.location.href).origin !== window.location.origin) return;
                        window.addEventListener("load", (function () {
                            var t = "".concat("", "/service-worker.js");
                            R ? (! function (e, t) {
                                fetch(e).then((function (a) {
                                    var n = a.headers.get("content-type");
                                    404 === a.status || null !== n && -1 === n.indexOf("javascript") ? navigator.serviceWorker.ready.then((function (e) {
                                        e.unregister().then((function () {
                                            window.location.reload()
                                        }))
                                    })) : C(e, t)
                                })).catch((function () {
                                    console.log("No internet connection found. App is running in offline mode.")
                                }))
                            }(t, e), navigator.serviceWorker.ready.then((function () {
                                console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")
                            }))) : C(t, e)
                        }))
                    }
                }()
        }
    },
    [
        [30, 1, 2]
    ]
]);
//# sourceMappingURL=main.105ad6a8.chunk.js.map