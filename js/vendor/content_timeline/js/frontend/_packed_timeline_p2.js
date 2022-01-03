/*
4. jquery.mCustomScrollbar.min.js
5. rollover.js
6. jquery.prettyPhoto.js
7. jquery.my_add_function.js

------------------------------------------------------------*/

/* 4. jquery.mCustomScrollbar.min.js */
(function(c) {
    var b = {
            init: function(e) {
                var f = {
                        set_width: false,
                        set_height: false,
                        horizontalScroll: false,
                        scrollInertia: 950,
                        mouseWheel: true,
                        mouseWheelPixels: "auto",
                        autoDraggerLength: true,
                        autoHideScrollbar: false,
                        alwaysShowScrollbar: false,
                        snapAmount: null,
                        snapOffset: 0,
                        scrollButtons: {
                            enable: false,
                            scrollType: "continuous",
                            scrollSpeed: "auto",
                            scrollAmount: 40
                        },
                        advanced: {
                            updateOnBrowserResize: true,
                            updateOnContentResize: false,
                            autoExpandHorizontalScroll: false,
                            autoScrollOnFocus: true,
                            normalizeMouseWheelDelta: false
                        },
                        contentTouchScroll: true,
                        callbacks: {
                            onScrollStart: function() {},
                            onScroll: function() {},
                            onTotalScroll: function() {},
                            onTotalScrollBack: function() {},
                            onTotalScrollOffset: 0,
                            onTotalScrollBackOffset: 0,
                            whileScrolling: function() {}
                        },
                        theme: "light"
                    },
                    e = c.extend(true, f, e);
                return this.each(function() {
                    var m = c(this);
                    if (e.set_width) {
                        m.css("width", e.set_width)
                    }
                    if (e.set_height) {
                        m.css("height", e.set_height)
                    }
                    if (!c(document).data("mCustomScrollbar-index")) {
                        c(document).data("mCustomScrollbar-index", "1")
                    } else {
                        var t = parseInt(c(document).data("mCustomScrollbar-index"));
                        c(document).data("mCustomScrollbar-index", t + 1)
                    }
                    m.wrapInner("<div class='mCustomScrollBox mCS-" + e.theme + "' id='mCSB_" + c(document).data("mCustomScrollbar-index") + "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_" + c(document).data("mCustomScrollbar-index"));
                    var g = m.children(".mCustomScrollBox");
                    if (e.horizontalScroll) {
                        g.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
                        var k = g.children(".mCSB_h_wrapper");
                        k.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({
                            width: k.children().outerWidth(),
                            position: "relative"
                        }).unwrap()
                    } else {
                        g.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")
                    }
                    var o = g.children(".mCSB_container");
                    if (c.support.touch) {
                        o.addClass("mCS_touch")
                    }
                    o.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
                    var l = g.children(".mCSB_scrollTools"),
                        h = l.children(".mCSB_draggerContainer"),
                        q = h.children(".mCSB_dragger");
                    if (e.horizontalScroll) {
                        q.data("minDraggerWidth", q.width())
                    } else {
                        q.data("minDraggerHeight", q.height())
                    }
                    if (e.scrollButtons.enable) {
                        if (e.horizontalScroll) {
                            l.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>")
                        } else {
                            l.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>")
                        }
                    }
                    g.bind("scroll", function() {
                        if (!m.is(".mCS_disabled")) {
                            g.scrollTop(0).scrollLeft(0)
                        }
                    });
                    m.data({
                        mCS_Init: true,
                        mCustomScrollbarIndex: c(document).data("mCustomScrollbar-index"),
                        horizontalScroll: e.horizontalScroll,
                        scrollInertia: e.scrollInertia,
                        scrollEasing: "mcsEaseOut",
                        mouseWheel: e.mouseWheel,
                        mouseWheelPixels: e.mouseWheelPixels,
                        autoDraggerLength: e.autoDraggerLength,
                        autoHideScrollbar: e.autoHideScrollbar,
                        alwaysShowScrollbar: e.alwaysShowScrollbar,
                        snapAmount: e.snapAmount,
                        snapOffset: e.snapOffset,
                        scrollButtons_enable: e.scrollButtons.enable,
                        scrollButtons_scrollType: e.scrollButtons.scrollType,
                        scrollButtons_scrollSpeed: e.scrollButtons.scrollSpeed,
                        scrollButtons_scrollAmount: e.scrollButtons.scrollAmount,
                        autoExpandHorizontalScroll: e.advanced.autoExpandHorizontalScroll,
                        autoScrollOnFocus: e.advanced.autoScrollOnFocus,
                        normalizeMouseWheelDelta: e.advanced.normalizeMouseWheelDelta,
                        contentTouchScroll: e.contentTouchScroll,
                        onScrollStart_Callback: e.callbacks.onScrollStart,
                        onScroll_Callback: e.callbacks.onScroll,
                        onTotalScroll_Callback: e.callbacks.onTotalScroll,
                        onTotalScrollBack_Callback: e.callbacks.onTotalScrollBack,
                        onTotalScroll_Offset: e.callbacks.onTotalScrollOffset,
                        onTotalScrollBack_Offset: e.callbacks.onTotalScrollBackOffset,
                        whileScrolling_Callback: e.callbacks.whileScrolling,
                        bindEvent_scrollbar_drag: false,
                        bindEvent_content_touch: false,
                        bindEvent_scrollbar_click: false,
                        bindEvent_mousewheel: false,
                        bindEvent_buttonsContinuous_y: false,
                        bindEvent_buttonsContinuous_x: false,
                        bindEvent_buttonsPixels_y: false,
                        bindEvent_buttonsPixels_x: false,
                        bindEvent_focusin: false,
                        bindEvent_autoHideScrollbar: false,
                        mCSB_buttonScrollRight: false,
                        mCSB_buttonScrollLeft: false,
                        mCSB_buttonScrollDown: false,
                        mCSB_buttonScrollUp: false
                    });
                    if (e.horizontalScroll) {
                        if (m.css("max-width") !== "none") {
                            if (!e.advanced.updateOnContentResize) {
                                e.advanced.updateOnContentResize = true
                            }
                        }
                    } else {
                        if (m.css("max-height") !== "none") {
                            var s = false,
                                r = parseInt(m.css("max-height"));
                            if (m.css("max-height").indexOf("%") >= 0) {
                                s = r, r = m.parent().height() * s / 100
                            }
                            m.css("overflow", "hidden");
                            g.css("max-height", r)
                        }
                    }
                    m.mCustomScrollbar("update");
                    if (e.advanced.updateOnBrowserResize) {
                        var i, j = c(window).width(),
                            u = c(window).height();
                        c(window).bind("resize." + m.data("mCustomScrollbarIndex"), function() {
                            if (i) {
                                clearTimeout(i)
                            }
                            i = setTimeout(function() {
                                if (!m.is(".mCS_disabled") && !m.is(".mCS_destroyed")) {
                                    var w = c(window).width(),
                                        v = c(window).height();
                                    if (j !== w || u !== v) {
                                        if (m.css("max-height") !== "none" && s) {
                                            g.css("max-height", m.parent().height() * s / 100)
                                        }
                                        m.mCustomScrollbar("update");
                                        j = w;
                                        u = v
                                    }
                                }
                            }, 150)
                        })
                    }
                    if (e.advanced.updateOnContentResize) {
                        var p;
                        if (e.horizontalScroll) {
                            var n = o.outerWidth()
                        } else {
                            var n = o.outerHeight()
                        }
                        p = setInterval(function() {
                            if (e.horizontalScroll) {
                                if (e.advanced.autoExpandHorizontalScroll) {
                                    o.css({
                                        position: "absolute",
                                        width: "auto"
                                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                        width: o.outerWidth(),
                                        position: "relative"
                                    }).unwrap()
                                }
                                var v = o.outerWidth()
                            } else {
                                var v = o.outerHeight()
                            }
                            if (v != n) {
                                m.mCustomScrollbar("update");
                                n = v
                            }
                        }, 300)
                    }
                })
            },
            update: function() {
                var n = c(this),
                    k = n.children(".mCustomScrollBox"),
                    q = k.children(".mCSB_container");
                q.removeClass("mCS_no_scrollbar");
                n.removeClass("mCS_disabled mCS_destroyed");
                k.scrollTop(0).scrollLeft(0);
                var y = k.children(".mCSB_scrollTools"),
                    o = y.children(".mCSB_draggerContainer"),
                    m = o.children(".mCSB_dragger");
                if (n.data("horizontalScroll")) {
                    var A = y.children(".mCSB_buttonLeft"),
                        t = y.children(".mCSB_buttonRight"),
                        f = k.width();
                    if (n.data("autoExpandHorizontalScroll")) {
                        q.css({
                            position: "absolute",
                            width: "auto"
                        }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                            width: q.outerWidth(),
                            position: "relative"
                        }).unwrap()
                    }
                    var z = q.outerWidth()
                } else {
                    var w = y.children(".mCSB_buttonUp"),
                        g = y.children(".mCSB_buttonDown"),
                        r = k.height(),
                        i = q.outerHeight()
                }
                if (i > r && !n.data("horizontalScroll")) {
                    y.css("display", "block");
                    var s = o.height();
                    if (n.data("autoDraggerLength")) {
                        var u = Math.round(r / i * s),
                            l = m.data("minDraggerHeight");
                        if (u <= l) {
                            m.css({
                                height: l
                            })
                        } else {
                            if (u >= s - 10) {
                                var p = s - 10;
                                m.css({
                                    height: p
                                })
                            } else {
                                m.css({
                                    height: u
                                })
                            }
                        }
                        m.children(".mCSB_dragger_bar").css({
                            "line-height": m.height() + "px"
                        })
                    }
                    var B = m.height(),
                        x = (i - r) / (s - B);
                    n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
                    var D = Math.abs(q.position().top);
                    n.mCustomScrollbar("scrollTo", D, {
                        scrollInertia: 0,
                        trigger: "internal"
                    })
                } else {
                    if (z > f && n.data("horizontalScroll")) {
                        y.css("display", "block");
                        var h = o.width();
                        if (n.data("autoDraggerLength")) {
                            var j = Math.round(f / z * h),
                                C = m.data("minDraggerWidth");
                            if (j <= C) {
                                m.css({
                                    width: C
                                })
                            } else {
                                if (j >= h - 10) {
                                    var e = h - 10;
                                    m.css({
                                        width: e
                                    })
                                } else {
                                    m.css({
                                        width: j
                                    })
                                }
                            }
                        }
                        var v = m.width(),
                            x = (z - f) / (h - v);
                        n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
                        var D = Math.abs(q.position().left);
                        n.mCustomScrollbar("scrollTo", D, {
                            scrollInertia: 0,
                            trigger: "internal"
                        })
                    } else {
                        k.unbind("mousewheel focusin");
                        if (n.data("horizontalScroll")) {
                            m.add(q).css("left", 0)
                        } else {
                            m.add(q).css("top", 0)
                        }
                        if (n.data("alwaysShowScrollbar")) {
                            if (!n.data("horizontalScroll")) {
                                m.css({
                                    height: o.height()
                                })
                            } else {
                                if (n.data("horizontalScroll")) {
                                    m.css({
                                        width: o.width()
                                    })
                                }
                            }
                        } else {
                            y.css("display", "none");
                            q.addClass("mCS_no_scrollbar")
                        }
                        n.data({
                            bindEvent_mousewheel: false,
                            bindEvent_focusin: false
                        })
                    }
                }
            },
            scrolling: function(i, q, n, k, A, f, D, w) {
                var l = c(this);
                if (!l.data("bindEvent_scrollbar_drag")) {
                    var o, p, C, z, e;
                    if (c.support.pointer) {
                        C = "pointerdown";
                        z = "pointermove";
                        e = "pointerup"
                    } else {
                        if (c.support.msPointer) {
                            C = "MSPointerDown";
                            z = "MSPointerMove";
                            e = "MSPointerUp"
                        }
                    }
                    if (c.support.pointer || c.support.msPointer) {
                        k.bind(C, function(K) {
                            K.preventDefault();
                            l.data({
                                on_drag: true
                            });
                            k.addClass("mCSB_dragger_onDrag");
                            var J = c(this),
                                M = J.offset(),
                                I = K.originalEvent.pageX - M.left,
                                L = K.originalEvent.pageY - M.top;
                            if (I < J.width() && I > 0 && L < J.height() && L > 0) {
                                o = L;
                                p = I
                            }
                        });
                        c(document).bind(z + "." + l.data("mCustomScrollbarIndex"), function(K) {
                            K.preventDefault();
                            if (l.data("on_drag")) {
                                var J = k,
                                    M = J.offset(),
                                    I = K.originalEvent.pageX - M.left,
                                    L = K.originalEvent.pageY - M.top;
                                G(o, p, L, I)
                            }
                        }).bind(e + "." + l.data("mCustomScrollbarIndex"), function(x) {
                            l.data({
                                on_drag: false
                            });
                            k.removeClass("mCSB_dragger_onDrag")
                        })
                    } else {
                        k.bind("mousedown touchstart", function(K) {
                            K.preventDefault();
                            K.stopImmediatePropagation();
                            var J = c(this),
                                N = J.offset(),
                                I, M;
                            if (K.type === "touchstart") {
                                var L = K.originalEvent.touches[0] || K.originalEvent.changedTouches[0];
                                I = L.pageX - N.left;
                                M = L.pageY - N.top
                            } else {
                                l.data({
                                    on_drag: true
                                });
                                k.addClass("mCSB_dragger_onDrag");
                                I = K.pageX - N.left;
                                M = K.pageY - N.top
                            }
                            if (I < J.width() && I > 0 && M < J.height() && M > 0) {
                                o = M;
                                p = I
                            }
                        }).bind("touchmove", function(K) {
                            K.preventDefault();
                            K.stopImmediatePropagation();
                            var N = K.originalEvent.touches[0] || K.originalEvent.changedTouches[0],
                                J = c(this),
                                M = J.offset(),
                                I = N.pageX - M.left,
                                L = N.pageY - M.top;
                            G(o, p, L, I)
                        });
                        c(document).bind("mousemove." + l.data("mCustomScrollbarIndex"), function(K) {
                            if (l.data("on_drag")) {
                                var J = k,
                                    M = J.offset(),
                                    I = K.pageX - M.left,
                                    L = K.pageY - M.top;
                                G(o, p, L, I)
                            }
                        }).bind("mouseup." + l.data("mCustomScrollbarIndex"), function(x) {
                            l.data({
                                on_drag: false
                            });
                            k.removeClass("mCSB_dragger_onDrag")
                        })
                    }
                    l.data({
                        bindEvent_scrollbar_drag: true
                    })
                }

                function G(J, K, L, I) {
                    if (l.data("horizontalScroll")) {
                        l.mCustomScrollbar("scrollTo", (k.position().left - (K)) + I, {
                            moveDragger: true,
                            trigger: "internal"
                        })
                    } else {
                        l.mCustomScrollbar("scrollTo", (k.position().top - (J)) + L, {
                            moveDragger: true,
                            trigger: "internal"
                        })
                    }
                }
                if (c.support.touch && l.data("contentTouchScroll")) {
                    if (!l.data("bindEvent_content_touch")) {
                        var m, E, s, t, v, F, H;
                        q.bind("touchstart", function(x) {
                            x.stopImmediatePropagation();
                            m = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                            E = c(this);
                            s = E.offset();
                            v = m.pageX - s.left;
                            t = m.pageY - s.top;
                            F = t;
                            H = v
                        });
                        q.bind("touchmove", function(x) {
                            x.preventDefault();
                            x.stopImmediatePropagation();
                            m = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                            E = c(this).parent();
                            s = E.offset();
                            v = m.pageX - s.left;
                            t = m.pageY - s.top;
                            if (l.data("horizontalScroll")) {
                                l.mCustomScrollbar("scrollTo", H - v, {
                                    trigger: "internal"
                                })
                            } else {
                                l.mCustomScrollbar("scrollTo", F - t, {
                                    trigger: "internal"
                                })
                            }
                        })
                    }
                }
                if (!l.data("bindEvent_scrollbar_click")) {
                    n.bind("click", function(I) {
                        var x = (I.pageY - n.offset().top) * l.data("scrollAmount"),
                            y = c(I.target);
                        if (l.data("horizontalScroll")) {
                            x = (I.pageX - n.offset().left) * l.data("scrollAmount")
                        }
                        if (y.hasClass("mCSB_draggerContainer") || y.hasClass("mCSB_draggerRail")) {
                            l.mCustomScrollbar("scrollTo", x, {
                                trigger: "internal",
                                scrollEasing: "draggerRailEase"
                            })
                        }
                    });
                    l.data({
                        bindEvent_scrollbar_click: true
                    })
                }
                if (l.data("mouseWheel")) {
                    if (!l.data("bindEvent_mousewheel")) {
                        i.bind("mousewheel", function(K, M) {
                            var J, I = l.data("mouseWheelPixels"),
                                x = Math.abs(q.position().top),
                                L = k.position().top,
                                y = n.height() - k.height();
                            if (l.data("normalizeMouseWheelDelta")) {
                                if (M < 0) {
                                    M = -1
                                } else {
                                    M = 1
                                }
                            }
                            if (I === "auto") {
                                I = 100 + Math.round(l.data("scrollAmount") / 2)
                            }
                            if (l.data("horizontalScroll")) {
                                L = k.position().left;
                                y = n.width() - k.width();
                                x = Math.abs(q.position().left)
                            }
                            if ((M > 0 && L !== 0) || (M < 0 && L !== y)) {
                                K.preventDefault();
                                K.stopImmediatePropagation()
                            }
                            J = x - (M * I);
                            l.mCustomScrollbar("scrollTo", J, {
                                trigger: "internal"
                            })
                        });
                        l.data({
                            bindEvent_mousewheel: true
                        })
                    }
                }
                if (l.data("scrollButtons_enable")) {
                    if (l.data("scrollButtons_scrollType") === "pixels") {
                        if (l.data("horizontalScroll")) {
                            w.add(D).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend", j, h);
                            l.data({
                                bindEvent_buttonsContinuous_x: false
                            });
                            if (!l.data("bindEvent_buttonsPixels_x")) {
                                w.bind("click", function(x) {
                                    x.preventDefault();
                                    r(Math.abs(q.position().left) + l.data("scrollButtons_scrollAmount"))
                                });
                                D.bind("click", function(x) {
                                    x.preventDefault();
                                    r(Math.abs(q.position().left) - l.data("scrollButtons_scrollAmount"))
                                });
                                l.data({
                                    bindEvent_buttonsPixels_x: true
                                })
                            }
                        } else {
                            f.add(A).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend", j, h);
                            l.data({
                                bindEvent_buttonsContinuous_y: false
                            });
                            if (!l.data("bindEvent_buttonsPixels_y")) {
                                f.bind("click", function(x) {
                                    x.preventDefault();
                                    r(Math.abs(q.position().top) + l.data("scrollButtons_scrollAmount"))
                                });
                                A.bind("click", function(x) {
                                    x.preventDefault();
                                    r(Math.abs(q.position().top) - l.data("scrollButtons_scrollAmount"))
                                });
                                l.data({
                                    bindEvent_buttonsPixels_y: true
                                })
                            }
                        }

                        function r(x) {
                            if (!k.data("preventAction")) {
                                k.data("preventAction", true);
                                l.mCustomScrollbar("scrollTo", x, {
                                    trigger: "internal"
                                })
                            }
                        }
                    } else {
                        if (l.data("horizontalScroll")) {
                            w.add(D).unbind("click");
                            l.data({
                                bindEvent_buttonsPixels_x: false
                            });
                            if (!l.data("bindEvent_buttonsContinuous_x")) {
                                w.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
                                    y.preventDefault();
                                    var x = B();
                                    l.data({
                                        mCSB_buttonScrollRight: setInterval(function() {
                                            l.mCustomScrollbar("scrollTo", Math.abs(q.position().left) + x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var j = function(x) {
                                    x.preventDefault();
                                    clearInterval(l.data("mCSB_buttonScrollRight"))
                                };
                                w.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", j);
                                D.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
                                    y.preventDefault();
                                    var x = B();
                                    l.data({
                                        mCSB_buttonScrollLeft: setInterval(function() {
                                            l.mCustomScrollbar("scrollTo", Math.abs(q.position().left) - x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var h = function(x) {
                                    x.preventDefault();
                                    clearInterval(l.data("mCSB_buttonScrollLeft"))
                                };
                                D.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", h);
                                l.data({
                                    bindEvent_buttonsContinuous_x: true
                                })
                            }
                        } else {
                            f.add(A).unbind("click");
                            l.data({
                                bindEvent_buttonsPixels_y: false
                            });
                            if (!l.data("bindEvent_buttonsContinuous_y")) {
                                f.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
                                    y.preventDefault();
                                    var x = B();
                                    l.data({
                                        mCSB_buttonScrollDown: setInterval(function() {
                                            l.mCustomScrollbar("scrollTo", Math.abs(q.position().top) + x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var u = function(x) {
                                    x.preventDefault();
                                    clearInterval(l.data("mCSB_buttonScrollDown"))
                                };
                                f.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", u);
                                A.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
                                    y.preventDefault();
                                    var x = B();
                                    l.data({
                                        mCSB_buttonScrollUp: setInterval(function() {
                                            l.mCustomScrollbar("scrollTo", Math.abs(q.position().top) - x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var g = function(x) {
                                    x.preventDefault();
                                    clearInterval(l.data("mCSB_buttonScrollUp"))
                                };
                                A.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", g);
                                l.data({
                                    bindEvent_buttonsContinuous_y: true
                                })
                            }
                        }

                        function B() {
                            var x = l.data("scrollButtons_scrollSpeed");
                            if (l.data("scrollButtons_scrollSpeed") === "auto") {
                                x = Math.round((l.data("scrollInertia") + 100) / 40)
                            }
                            return x
                        }
                    }
                }
                if (l.data("autoScrollOnFocus")) {
                    if (!l.data("bindEvent_focusin")) {
                        i.bind("focusin", function() {
                            i.scrollTop(0).scrollLeft(0);
                            var x = c(document.activeElement);
                            if (x.is("input,textarea,select,button,a[tabindex],area,object")) {
                                var J = q.position().top,
                                    y = x.position().top,
                                    I = i.height() - x.outerHeight();
                                if (l.data("horizontalScroll")) {
                                    J = q.position().left;
                                    y = x.position().left;
                                    I = i.width() - x.outerWidth()
                                }
                                if (J + y < 0 || J + y > I) {
                                    l.mCustomScrollbar("scrollTo", y, {
                                        trigger: "internal"
                                    })
                                }
                            }
                        });
                        l.data({
                            bindEvent_focusin: true
                        })
                    }
                }
                if (l.data("autoHideScrollbar") && !l.data("alwaysShowScrollbar")) {
                    if (!l.data("bindEvent_autoHideScrollbar")) {
                        i.bind("mouseenter", function(x) {
                            i.addClass("mCS-mouse-over");
                            d.showScrollbar.call(i.children(".mCSB_scrollTools"))
                        }).bind("mouseleave touchend", function(x) {
                            i.removeClass("mCS-mouse-over");
                            if (x.type === "mouseleave") {
                                d.hideScrollbar.call(i.children(".mCSB_scrollTools"))
                            }
                        });
                        l.data({
                            bindEvent_autoHideScrollbar: true
                        })
                    }
                }
            },
            scrollTo: function(e, f) {
                var i = c(this),
                    o = {
                        moveDragger: false,
                        trigger: "external",
                        callbacks: true,
                        scrollInertia: i.data("scrollInertia"),
                        scrollEasing: i.data("scrollEasing")
                    },
                    f = c.extend(o, f),
                    p, g = i.children(".mCustomScrollBox"),
                    k = g.children(".mCSB_container"),
                    r = g.children(".mCSB_scrollTools"),
                    j = r.children(".mCSB_draggerContainer"),
                    h = j.children(".mCSB_dragger"),
                    t = draggerSpeed = f.scrollInertia,
                    q, s, m, l;
                if (!k.hasClass("mCS_no_scrollbar")) {
                    i.data({
                        mCS_trigger: f.trigger
                    });
                    if (i.data("mCS_Init")) {
                        f.callbacks = false
                    }
                    if (e || e === 0) {
                        if (typeof(e) === "number") {
                            if (f.moveDragger) {
                                p = e;
                                if (i.data("horizontalScroll")) {
                                    e = h.position().left * i.data("scrollAmount")
                                } else {
                                    e = h.position().top * i.data("scrollAmount")
                                }
                                draggerSpeed = 0
                            } else {
                                p = e / i.data("scrollAmount")
                            }
                        } else {
                            if (typeof(e) === "string") {
                                var v;
                                if (e === "top") {
                                    v = 0
                                } else {
                                    if (e === "bottom" && !i.data("horizontalScroll")) {
                                        v = k.outerHeight() - g.height()
                                    } else {
                                        if (e === "left") {
                                            v = 0
                                        } else {
                                            if (e === "right" && i.data("horizontalScroll")) {
                                                v = k.outerWidth() - g.width()
                                            } else {
                                                if (e === "first") {
                                                    v = i.find(".mCSB_container").find(":first")
                                                } else {
                                                    if (e === "last") {
                                                        v = i.find(".mCSB_container").find(":last")
                                                    } else {
                                                        v = i.find(e)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (v.length === 1) {
                                    if (i.data("horizontalScroll")) {
                                        e = v.position().left
                                    } else {
                                        e = v.position().top
                                    }
                                    p = e / i.data("scrollAmount")
                                } else {
                                    p = e = v
                                }
                            }
                        }
                        if (i.data("horizontalScroll")) {
                            if (i.data("onTotalScrollBack_Offset")) {
                                s = -i.data("onTotalScrollBack_Offset")
                            }
                            if (i.data("onTotalScroll_Offset")) {
                                l = g.width() - k.outerWidth() + i.data("onTotalScroll_Offset")
                            }
                            if (p < 0) {
                                p = e = 0;
                                clearInterval(i.data("mCSB_buttonScrollLeft"));
                                if (!s) {
                                    q = true
                                }
                            } else {
                                if (p >= j.width() - h.width()) {
                                    p = j.width() - h.width();
                                    e = g.width() - k.outerWidth();
                                    clearInterval(i.data("mCSB_buttonScrollRight"));
                                    if (!l) {
                                        m = true
                                    }
                                } else {
                                    e = -e
                                }
                            }
                            var n = i.data("snapAmount");
                            if (n) {
                                e = Math.round(e / n) * n - i.data("snapOffset")
                            }
                            d.mTweenAxis.call(this, h[0], "left", Math.round(p), draggerSpeed, f.scrollEasing);
                            d.mTweenAxis.call(this, k[0], "left", Math.round(e), t, f.scrollEasing, {
                                onStart: function() {
                                    if (f.callbacks && !i.data("mCS_tweenRunning")) {
                                        u("onScrollStart")
                                    }
                                    if (i.data("autoHideScrollbar") && !i.data("alwaysShowScrollbar")) {
                                        d.showScrollbar.call(r)
                                    }
                                },
                                onUpdate: function() {
                                    if (f.callbacks) {
                                        u("whileScrolling")
                                    }
                                },
                                onComplete: function() {
                                    if (f.callbacks) {
                                        u("onScroll");
                                        if (q || (s && k.position().left >= s)) {
                                            u("onTotalScrollBack")
                                        }
                                        if (m || (l && k.position().left <= l)) {
                                            u("onTotalScroll")
                                        }
                                    }
                                    h.data("preventAction", false);
                                    i.data("mCS_tweenRunning", false);
                                    if (i.data("autoHideScrollbar") && !i.data("alwaysShowScrollbar")) {
                                        if (!g.hasClass("mCS-mouse-over")) {
                                            d.hideScrollbar.call(r)
                                        }
                                    }
                                }
                            })
                        } else {
                            if (i.data("onTotalScrollBack_Offset")) {
                                s = -i.data("onTotalScrollBack_Offset")
                            }
                            if (i.data("onTotalScroll_Offset")) {
                                l = g.height() - k.outerHeight() + i.data("onTotalScroll_Offset")
                            }
                            if (p < 0) {
                                p = e = 0;
                                clearInterval(i.data("mCSB_buttonScrollUp"));
                                if (!s) {
                                    q = true
                                }
                            } else {
                                if (p >= j.height() - h.height()) {
                                    p = j.height() - h.height();
                                    e = g.height() - k.outerHeight();
                                    clearInterval(i.data("mCSB_buttonScrollDown"));
                                    if (!l) {
                                        m = true
                                    }
                                } else {
                                    e = -e
                                }
                            }
                            var n = i.data("snapAmount");
                            if (n) {
                                e = Math.round(e / n) * n - i.data("snapOffset")
                            }
                            d.mTweenAxis.call(this, h[0], "top", Math.round(p), draggerSpeed, f.scrollEasing);
                            d.mTweenAxis.call(this, k[0], "top", Math.round(e), t, f.scrollEasing, {
                                onStart: function() {
                                    if (f.callbacks && !i.data("mCS_tweenRunning")) {
                                        u("onScrollStart")
                                    }
                                    if (i.data("autoHideScrollbar") && !i.data("alwaysShowScrollbar")) {
                                        d.showScrollbar.call(r)
                                    }
                                },
                                onUpdate: function() {
                                    if (f.callbacks) {
                                        u("whileScrolling")
                                    }
                                },
                                onComplete: function() {
                                    if (f.callbacks) {
                                        u("onScroll");
                                        if (q || (s && k.position().top >= s)) {
                                            u("onTotalScrollBack")
                                        }
                                        if (m || (l && k.position().top <= l)) {
                                            u("onTotalScroll")
                                        }
                                    }
                                    h.data("preventAction", false);
                                    i.data("mCS_tweenRunning", false);
                                    if (i.data("autoHideScrollbar") && !i.data("alwaysShowScrollbar")) {
                                        if (!g.hasClass("mCS-mouse-over")) {
                                            d.hideScrollbar.call(r)
                                        }
                                    }
                                }
                            })
                        }
                        if (i.data("mCS_Init")) {
                            i.data({
                                mCS_Init: false
                            })
                        }
                    }
                }

                function u(w) {
                    if (i.data("mCustomScrollbarIndex")) {
                        this.mcs = {
                            top: k.position().top,
                            left: k.position().left,
                            draggerTop: h.position().top,
                            draggerLeft: h.position().left,
                            topPct: Math.round((100 * Math.abs(k.position().top)) / Math.abs(k.outerHeight() - g.height())),
                            leftPct: Math.round((100 * Math.abs(k.position().left)) / Math.abs(k.outerWidth() - g.width()))
                        };
                        switch (w) {
                            case "onScrollStart":
                                i.data("mCS_tweenRunning", true).data("onScrollStart_Callback").call(i, this.mcs);
                                break;
                            case "whileScrolling":
                                i.data("whileScrolling_Callback").call(i, this.mcs);
                                break;
                            case "onScroll":
                                i.data("onScroll_Callback").call(i, this.mcs);
                                break;
                            case "onTotalScrollBack":
                                i.data("onTotalScrollBack_Callback").call(i, this.mcs);
                                break;
                            case "onTotalScroll":
                                i.data("onTotalScroll_Callback").call(i, this.mcs);
                                break
                        }
                    }
                }
            },
            stop: function() {
                var g = c(this),
                    e = g.children().children(".mCSB_container"),
                    f = g.children().children().children().children(".mCSB_dragger");
                d.mTweenAxisStop.call(this, e[0]);
                d.mTweenAxisStop.call(this, f[0])
            },
            disable: function(e) {
                var j = c(this),
                    f = j.children(".mCustomScrollBox"),
                    h = f.children(".mCSB_container"),
                    g = f.children(".mCSB_scrollTools"),
                    i = g.children().children(".mCSB_dragger");
                f.unbind("mousewheel focusin mouseenter mouseleave touchend");
                h.unbind("touchstart touchmove");
                if (e) {
                    if (j.data("horizontalScroll")) {
                        i.add(h).css("left", 0)
                    } else {
                        i.add(h).css("top", 0)
                    }
                }
                g.css("display", "none");
                h.addClass("mCS_no_scrollbar");
                j.data({
                    bindEvent_mousewheel: false,
                    bindEvent_focusin: false,
                    bindEvent_content_touch: false,
                    bindEvent_autoHideScrollbar: false
                }).addClass("mCS_disabled")
            },
            destroy: function() {
                var e = c(this);
                e.removeClass("mCustomScrollbar _mCS_" + e.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();
                c(document).unbind("mousemove." + e.data("mCustomScrollbarIndex") + " mouseup." + e.data("mCustomScrollbarIndex") + " MSPointerMove." + e.data("mCustomScrollbarIndex") + " MSPointerUp." + e.data("mCustomScrollbarIndex"));
                c(window).unbind("resize." + e.data("mCustomScrollbarIndex"))
            }
        },
        d = {
            showScrollbar: function() {
                this.stop().animate({
                    opacity: 1
                }, "fast")
            },
            hideScrollbar: function() {
                this.stop().animate({
                    opacity: 0
                }, "fast")
            },
            mTweenAxis: function(g, i, h, f, o, y) {
                var y = y || {},
                    v = y.onStart || function() {},
                    p = y.onUpdate || function() {},
                    w = y.onComplete || function() {};
                var n = t(),
                    l, j = 0,
                    r = g.offsetTop,
                    s = g.style;
                if (i === "left") {
                    r = g.offsetLeft
                }
                var m = h - r;
                q();
                e();

                function t() {
                    if (window.performance && window.performance.now) {
                        return window.performance.now()
                    } else {
                        if (window.performance && window.performance.webkitNow) {
                            return window.performance.webkitNow()
                        } else {
                            if (Date.now) {
                                return Date.now()
                            } else {
                                return new Date().getTime()
                            }
                        }
                    }
                }

                function x() {
                    if (!j) {
                        v.call()
                    }
                    j = t() - n;
                    u();
                    if (j >= g._time) {
                        g._time = (j > g._time) ? j + l - (j - g._time) : j + l - 1;
                        if (g._time < j + 1) {
                            g._time = j + 1
                        }
                    }
                    if (g._time < f) {
                        g._id = _request(x)
                    } else {
                        w.call()
                    }
                }

                function u() {
                    if (f > 0) {
                        g.currVal = k(g._time, r, m, f, o);
                        s[i] = Math.round(g.currVal) + "px"
                    } else {
                        s[i] = h + "px"
                    }
                    p.call()
                }

                function e() {
                    l = 1000 / 60;
                    g._time = j + l;
                    _request = (!window.requestAnimationFrame) ? function(z) {
                        u();
                        return setTimeout(z, 0.01)
                    } : window.requestAnimationFrame;
                    g._id = _request(x)
                }

                function q() {
                    if (g._id == null) {
                        return
                    }
                    if (!window.requestAnimationFrame) {
                        clearTimeout(g._id)
                    } else {
                        window.cancelAnimationFrame(g._id)
                    }
                    g._id = null
                }

                function k(B, A, F, E, C) {
                    switch (C) {
                        case "linear":
                            return F * B / E + A;
                            break;
                        case "easeOutQuad":
                            B /= E;
                            return -F * B * (B - 2) + A;
                            break;
                        case "easeInOutQuad":
                            B /= E / 2;
                            if (B < 1) {
                                return F / 2 * B * B + A
                            }
                            B--;
                            return -F / 2 * (B * (B - 2) - 1) + A;
                            break;
                        case "easeOutCubic":
                            B /= E;
                            B--;
                            return F * (B * B * B + 1) + A;
                            break;
                        case "easeOutQuart":
                            B /= E;
                            B--;
                            return -F * (B * B * B * B - 1) + A;
                            break;
                        case "easeOutQuint":
                            B /= E;
                            B--;
                            return F * (B * B * B * B * B + 1) + A;
                            break;
                        case "easeOutCirc":
                            B /= E;
                            B--;
                            return F * Math.sqrt(1 - B * B) + A;
                            break;
                        case "easeOutSine":
                            return F * Math.sin(B / E * (Math.PI / 2)) + A;
                            break;
                        case "easeOutExpo":
                            return F * (-Math.pow(2, -10 * B / E) + 1) + A;
                            break;
                        case "mcsEaseOut":
                            var D = (B /= E) * B,
                                z = D * B;
                            return A + F * (0.499999999999997 * z * D + -2.5 * D * D + 5.5 * z + -6.5 * D + 4 * B);
                            break;
                        case "draggerRailEase":
                            B /= E / 2;
                            if (B < 1) {
                                return F / 2 * B * B * B + A
                            }
                            B -= 2;
                            return F / 2 * (B * B * B + 2) + A;
                            break
                    }
                }
            },
            mTweenAxisStop: function(e) {
                if (e._id == null) {
                    return
                }
                if (!window.requestAnimationFrame) {
                    clearTimeout(e._id)
                } else {
                    window.cancelAnimationFrame(e._id)
                }
                e._id = null
            },
            rafPolyfill: function() {
                var f = ["ms", "moz", "webkit", "o"],
                    e = f.length;
                while (--e > -1 && !window.requestAnimationFrame) {
                    window.requestAnimationFrame = window[f[e] + "RequestAnimationFrame"];
                    window.cancelAnimationFrame = window[f[e] + "CancelAnimationFrame"] || window[f[e] + "CancelRequestAnimationFrame"]
                }
            }
        };
    d.rafPolyfill.call();
    c.support.touch = !!("ontouchstart" in window);
    c.support.pointer = window.navigator.pointerEnabled;
    c.support.msPointer = window.navigator.msPointerEnabled;
    var a = ("https:" == document.location.protocol) ? "https:" : "http:";
    c.event.special.mousewheel || document.write('<script src="' + a + '//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');
    c.fn.mCustomScrollbar = function(e) {
        if (b[e]) {
            return b[e].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof e === "object" || !e) {
                return b.init.apply(this, arguments)
            } else {
                c.error("Method " + e + " does not exist")
            }
        }
    }
})(jQuery);

/* 5. rollover.js */
! function(a) {
    function b() {
        a(".timeline_rollover_top").unbind("hover").timelineRollover("top"), a(".timeline_rollover_right").unbind("hover").timelineRollover("right"), a(".timeline_rollover_bottom").unbind("hover").timelineRollover("bottom"), a(".timeline_rollover_left").unbind("hover").timelineRollover("left")
    }
    a(document).ready(function() {
        "undefined" == typeof my_is_mobile_global || my_is_mobile_global || b()
    }), a.fn.timelineRollover = function(b) {
        var c, d, e, f;
        switch (a(this).append('\n<div class="image_roll_glass"></div><div class="image_roll_zoom"></div>'), b) {
            case "top":
                c = "0", d = "0", e = "-100%", f = "0";
                break;
            case "right":
                c = "100%", d = "0", e = "0", f = "0";
                break;
            case "bottom":
                c = "0", d = "0", e = "100%", f = "0";
                break;
            case "left":
                c = "-100%", d = "0", e = "0", f = "0"
        }
        a(this).find(".image_roll_zoom").css({
            left: c,
            top: e
        }), a(this).hover(function() {
            a(this).find(".image_roll_zoom").stop(!0, !0).animate({
                left: d,
                top: f
            }, 200), a(this).find(".image_roll_glass").stop(!0, !0).fadeIn(200)
        }, function() {
            a(this).find(".image_roll_zoom").stop(!0).animate({
                left: c,
                top: e
            }, 200), a(this).find(".image_roll_glass").stop(!0, !0).fadeOut(200)
        })
    }
}(jQuery);

/* 6. jquery.prettyPhoto.js */
! function(e) {
    function t() {
        var e = location.href;
        return hashtag = -1 !== e.indexOf("#prettyPhoto") ? decodeURI(e.substring(e.indexOf("#prettyPhoto") + 1, e.length)) : !1, hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
    }

    function i() {
        "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
    }

    function p() {
        -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
    }

    function o(e, t) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var i = "[\\?&]" + e + "=([^&#]*)",
            p = new RegExp(i),
            o = p.exec(t);
        return null == o ? "" : o[1]
    }
    e.prettyPhoto = {
        version: "3.1.6"
    }, e.fn.prettyPhoto = function(a) {
        function s() {
            e(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (I / 2 - f.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                height: f.contentHeight,
                width: f.contentWidth
            }, settings.animation_speed), $pp_pic_holder.animate({
                top: projectedTop,
                left: j / 2 - f.containerWidth / 2 < 0 ? 0 : j / 2 - f.containerWidth / 2,
                width: f.containerWidth
            }, settings.animation_speed, function() {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(f.height).width(f.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == h(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (f.resized ? e("a.pp_expand,a.pp_contract").show() : e("a.pp_expand").hide()), !settings.autoplay_slideshow || P || v || e.prettyPhoto.startSlideshow(), settings.changepicturecallback(), v = !0
            }), m(), a.ajaxcallback()
        }

        function n(t) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                e(".pp_loaderIcon").show(), t()
            })
        }

        function r(t) {
            t > 1 ? e(".pp_nav").show() : e(".pp_nav").hide()
        }

        function l(e, t) {
            if (resized = !1, d(e, t), imageWidth = e, imageHeight = t, (k > j || b > I) && doresize && settings.allow_resize && !$) {
                for (resized = !0, fitting = !1; !fitting;) k > j ? (imageWidth = j - 200, imageHeight = t / e * imageWidth) : b > I ? (imageHeight = I - 200, imageWidth = e / t * imageHeight) : fitting = !0, b = imageHeight, k = imageWidth;
                (k > j || b > I) && l(k, b), d(imageWidth, imageHeight)
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(b),
                containerWidth: Math.floor(k) + 2 * settings.horizontal_padding,
                contentHeight: Math.floor(y),
                contentWidth: Math.floor(w),
                resized: resized
            }
        }

        function d(t, i) {
            t = parseFloat(t), i = parseFloat(i), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(t), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({
                position: "absolute",
                top: -1e4
            }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(t), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(e("body")).css({
                position: "absolute",
                top: -1e4
            }), titleHeight += $pp_title.height(), $pp_title.remove(), y = i + detailsHeight, w = t, b = y + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), k = t
        }

        function h(e) {
            return e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i) ? "youtube" : e.match(/vimeo\.com/i) ? "vimeo" : e.match(/\b.mov\b/i) ? "quicktime" : e.match(/\b.swf\b/i) ? "flash" : e.match(/\biframe=true\b/i) ? "iframe" : e.match(/\bajax=true\b/i) ? "ajax" : e.match(/\bcustom=true\b/i) ? "custom" : "#" == e.substr(0, 1) ? "inline" : "image"
        }

        function c() {
            if (doresize && "undefined" != typeof $pp_pic_holder) {
                if (scroll_pos = _(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = I / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > I) return;
                $pp_pic_holder.css({
                    top: projectedTop,
                    left: j / 2 + scroll_pos.scrollLeft - contentwidth / 2
                })
            }
        }

        function _() {
            return self.pageYOffset ? {
                scrollTop: self.pageYOffset,
                scrollLeft: self.pageXOffset
            } : document.documentElement && document.documentElement.scrollTop ? {
                scrollTop: document.documentElement.scrollTop,
                scrollLeft: document.documentElement.scrollLeft
            } : document.body ? {
                scrollTop: document.body.scrollTop,
                scrollLeft: document.body.scrollLeft
            } : void 0
        }

        function g() {
            I = e(window).height(), j = e(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(e(document).height()).width(j)
        }

        function m() {
            isSet && settings.overlay_gallery && "image" == h(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((f.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, e.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
        }

        function u() {
            if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), e("body").append(settings.markup), $pp_pic_holder = e(".pp_pic_holder"), $ppt = e(".ppt"), $pp_overlay = e("div.pp_overlay"), isSet && settings.overlay_gallery) {
                currentGalleryPage = 0, toInject = "";
                for (var t = 0; t < pp_images.length; t++) pp_images[t].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[t]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = e(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function() {
                    return e.prettyPhoto.changeGalleryPage("next"), e.prettyPhoto.stopSlideshow(), !1
                }), $pp_gallery.find(".pp_arrow_previous").click(function() {
                    return e.prettyPhoto.changeGalleryPage("previous"), e.prettyPhoto.stopSlideshow(), !1
                }), $pp_pic_holder.find(".pp_content").hover(function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                }), itemWidth = 57, $pp_gallery_li.each(function(t) {
                    e(this).find("a").click(function() {
                        return e.prettyPhoto.changePage(t), e.prettyPhoto.stopSlideshow(), !1
                    })
                })
            }
            settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                return e.prettyPhoto.startSlideshow(), !1
            })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                opacity: 0,
                height: e(document).height(),
                width: e(window).width()
            }).bind("click", function() {
                settings.modal || e.prettyPhoto.close()
            }), e("a.pp_close").bind("click", function() {
                return e.prettyPhoto.close(), !1
            }), settings.allow_expand && e("a.pp_expand").bind("click", function() {
                return e(this).hasClass("pp_expand") ? (e(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (e(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), n(function() {
                    e.prettyPhoto.open()
                }), !1
            }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                return e.prettyPhoto.changePage("previous"), e.prettyPhoto.stopSlideshow(), !1
            }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                return e.prettyPhoto.changePage("next"), e.prettyPhoto.stopSlideshow(), !1
            }), c()
        }
        a = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function() {},
            slideshow: 5e3,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            allow_expand: !0,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            deeplinking: !0,
            overlay_gallery: !0,
            overlay_gallery_max: 30,
            keyboard_shortcuts: !0,
            changepicturecallback: function() {},
            callback: function() {},
            ie6_fallback: !0,
            markup: '<div class="pp_pic_holder"> 						<div class="ppt">&nbsp;</div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        }, a);
        var f, v, y, w, b, k, P, x = this,
            $ = !1,
            I = e(window).height(),
            j = e(window).width();
        return doresize = !0, scroll_pos = _(), e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
            c(), g()
        }), a.keyboard_shortcuts && e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(t) {
            if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (t.keyCode) {
                case 37:
                    e.prettyPhoto.changePage("previous"), t.preventDefault();
                    break;
                case 39:
                    e.prettyPhoto.changePage("next"), t.preventDefault();
                    break;
                case 27:
                    settings.modal || e.prettyPhoto.close(), t.preventDefault()
            }
        }), e.prettyPhoto.initialize = function() {
            return settings = a, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = e(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = galleryRegExp.exec(theRel) ? !0 : !1, pp_images = isSet ? jQuery.map(x, function(t) {
                return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).attr("href") : void 0
            }) : e.makeArray(e(this).attr("href")), pp_titles = isSet ? jQuery.map(x, function(t) {
                return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).find("img").attr("alt") ? e(t).find("img").attr("alt") : "" : void 0
            }) : e.makeArray(e(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(x, function(t) {
                return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).attr("title") ? e(t).attr("title") : "" : void 0
            }) : e.makeArray(e(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(e(this).attr("href"), pp_images), rel_index = isSet ? set_position : e("a[" + settings.hook + "^='" + theRel + "']").index(e(this)), u(this), settings.allow_resize && e(window).bind("scroll.prettyphoto", function() {
                c()
            }), e.prettyPhoto.open(), !1
        }, e.prettyPhoto.open = function(t) {
            return "undefined" == typeof settings && (settings = a, pp_images = e.makeArray(arguments[0]), pp_titles = e.makeArray(arguments[1] ? arguments[1] : ""), pp_descriptions = e.makeArray(arguments[2] ? arguments[2] : ""), isSet = pp_images.length > 1 ? !0 : !1, set_position = arguments[3] ? arguments[3] : 0, u(t.target)), settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), r(e(pp_images).size()), e(".pp_loaderIcon").show(), settings.deeplinking && i(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + e(pp_images).size()), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(), $ = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(e(window).height() * parseFloat(movie_height) / 100 - 150), $ = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(e(window).width() * parseFloat(movie_width) / 100 - 150), $ = !0), $pp_pic_holder.fadeIn(function() {
                switch ($ppt.html(settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? unescape(pp_titles[set_position]) : "&nbsp;"), imgPreloader = "", skipInjection = !1, h(pp_images[set_position])) {
                    case "image":
                        imgPreloader = new Image, nextImage = new Image, isSet && set_position < e(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function() {
                            f = l(imgPreloader.width, imgPreloader.height), s()
                        }, imgPreloader.onerror = function() {
                            alert("Image cannot be loaded. Make sure the path is correct and image exist."), e.prettyPhoto.close()
                        }, imgPreloader.src = pp_images[set_position];
                        break;
                    case "youtube":
                        f = l(movie_width, movie_height), movie_id = o("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, movie += o("rel", pp_images[set_position]) ? "?rel=" + o("rel", pp_images[set_position]) : "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case "vimeo":
                        f = l(movie_width, movie_height), movie_id = pp_images[set_position];
                        var t = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
                            i = movie_id.match(t);
                        movie = "http://player.vimeo.com/video/" + i[3] + "?title=0&byline=0&portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = f.width + "/embed/?moog_width=" + f.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, f.height).replace(/{path}/g, movie);
                        break;
                    case "quicktime":
                        f = l(movie_width, movie_height), f.height += 15, f.contentHeight += 15, f.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case "flash":
                        f = l(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                        break;
                    case "iframe":
                        f = l(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{path}/g, frame_url);
                        break;
                    case "ajax":
                        doresize = !1, f = l(movie_width, movie_height), doresize = !0, skipInjection = !0, e.get(pp_images[set_position], function(e) {
                            toInject = settings.inline_markup.replace(/{content}/g, e), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s()
                        });
                        break;
                    case "custom":
                        f = l(movie_width, movie_height), toInject = settings.custom_markup;
                        break;
                    case "inline":
                        myClone = e(pp_images[set_position]).clone().append('<br clear="all" />').css({
                            width: settings.default_width
                        }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show(), doresize = !1, f = l(e(myClone).width(), e(myClone).height()), doresize = !0, e(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, e(pp_images[set_position]).html())
                }
                imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s())
            }), !1
        }, e.prettyPhoto.changePage = function(t) {
            currentGalleryPage = 0, "previous" == t ? (set_position--, set_position < 0 && (set_position = e(pp_images).size() - 1)) : "next" == t ? (set_position++, set_position > e(pp_images).size() - 1 && (set_position = 0)) : set_position = t, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && e(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), n(function() {
                e.prettyPhoto.open()
            })
        }, e.prettyPhoto.changeGalleryPage = function(e) {
            "next" == e ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == e ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = e, slide_speed = "next" == e || "previous" == e ? settings.animation_speed : 0, slide_to = currentGalleryPage * itemsPerPage * itemWidth, $pp_gallery.find("ul").animate({
                left: -slide_to
            }, slide_speed)
        }, e.prettyPhoto.startSlideshow = function() {
            "undefined" == typeof P ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                return e.prettyPhoto.stopSlideshow(), !1
            }), P = setInterval(e.prettyPhoto.startSlideshow, settings.slideshow)) : e.prettyPhoto.changePage("next")
        }, e.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                return e.prettyPhoto.startSlideshow(), !1
            }), clearInterval(P), P = void 0
        }, e.prettyPhoto.close = function() {
            $pp_overlay.is(":animated") || (e.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                e(this).remove()
            }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), e(this).remove(), e(window).unbind("scroll.prettyphoto"), p(), settings.callback(), doresize = !0, v = !1, delete settings
            }))
        }, !pp_alreadyInitialized && t() && (pp_alreadyInitialized = !0, hashIndex = t(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
            e("a[" + a.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
        }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", e.prettyPhoto.initialize)
    }
}(jQuery);
var pp_alreadyInitialized = !1;

/* 7. jquery.my_add_function.js */
jQuery(document).ready(function(a) {
    my_debug = !1, debug = function(a, b) {
        my_debug && "undefined" != typeof window.console && console.log(a, b)
    };
    var b = !1;
    a("body").click(function(c) {
        b && (debug("Close Dialog"), a("#my_timeline_share_click").animate({
            opacity: 0
        }, function() {
            b = !1
        }))
    }), my_timeline_click_element = "", a(document).on("click", ".my_like_post", function(b) {
        var c = a(this).data("liked");
        if (1 != c) {
            var d = a(this).data("post-id"),
                e = a(this).data("var"),
                f = a(this).data("id"),
                g = {
                    action: "ctimeline_like_post",
                    val: e,
                    post_id: d,
                    nonce: my_timeline_front_ajax_nonce,
                    my_id: f
                };
            debug("Post data", g), a.ajax({
                url: my_timeline_front_ajax_url,
                dataType: "json",
                data: g,
                cache: !1,
                timeout: 3e4,
                type: "POST",
                success: function(b, c, d) {
                    debug("Return data", b), 0 == b.error ? (a(".my_like_post[data-id='" + b.id + "']").data("val", b.val), a(".my_like_post[data-id='" + b.id + "']").find("span").html("&nbsp;" + b.val), a(".my_like_post[data-id='" + b.id + "']").data("liked", 1)) : alert(b.msg)
                },
                error: function(a, b) {
                    alert("Error")
                }
            })
        }
    }), a(document).on("click", "#my_timeline_share_click li", function(b) {
        b.preventDefault();
        var c = window.outerWidth,
            d = window.outerHeight,
            e = 800,
            f = 400;
        e > c && (e = c), f > d && (f = d);
        var g = Math.floor((c - e) / 2),
            h = Math.floor((d - f) / 2),
            i = a(this).find("a").attr("href");
        debug("Open window", i);
        window.open(i, "my_social_share", "scrollbars=1,menubar=0,location=0,toolbar=0,status=0,width=" + e + ", height=" + f + ", top=" + h + ", left=" + g)
    }), a(document).on("click", ".my_open_dialog", function(c) {
        c.preventDefault(), c.stopPropagation();
        var d = a(this).find(".my_timeline_share div").html(),
            e = a(this).find(".my_timeline_share div ul").data("id"),
            f = a(this).offset(),
            g = f.top - 60,
            h = f.left;
        if (h = h - 80 + a(this).width() / 2 - 5, debug("Open toltip", {
                off: f,
                top: g,
                left: h,
                html: d,
                id: e
            }), b) {
            return
        } else 0 == a("#my_timeline_share_click").length ? a("body").append('<div data-id="' + e + '" id="my_timeline_share_click" style="opacity:0;">' + d + "</div>") : (a("#my_timeline_share_click").attr("data-id", e), a("#my_timeline_share_click").html(d)), a("#my_timeline_share_click").css("top", g + "px").css("left", h + "px").css("opacity", 0).animate({
            opacity: 1
        }, function() {
            b = !0
        })
    })
});