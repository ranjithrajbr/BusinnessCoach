/*
1. jquery.easing.1.3.js
2. jquery.timeline.js

------------------------------------------------------------*/

/* 1. jquery.easing.1.3.js */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});

/* 2. jquery.timeline.js */
(function(e) {
    var t = {
        init: function(t) {
            var n = e.extend({
                itemClass: ".item",
                itemOpenClass: ".item_open",
                openTriggerClass: ".item",
                closeText: "Close",
                itemMargin: 10,
                scrollSpeed: 500,
                startItem: "last",
                easing: "easeOutSine",
                categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                nuberOfSegments: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                yearsOn: true,
                swipeOn: true,
                hideTimeline: false,
                hideControles: false,
                closeItemOnTransition: false
            }, t);
            var r = this,
                i = e("body"),
                s = r.find(n.itemClass),
                o = r.find(n.itemOpenClass),
                u = s.first().width(),
                a = o.first().width(),
                f = n.closeItemOnTransition;
            r.trigger("init.Timeline");
            var l = s.length - 1;
            if (n.startItem == "first") {
                l = 0
            } else if (n.startItem == "last") {
                l = s.length - 1
            } else {
                s.each(function(t) {
                    if (n.startItem == e(this).attr("data-id")) {
                        l = t;
                        return true
                    }
                })
            }
            s.each(function(t) {
                e(this).attr("data-count", t);
                e(this).next(n.itemOpenClass).attr("data-count", t);
                if (!e(this).hasClass(n.openTriggerClass)) {
                    e(this).find(n.openTriggerClass).attr("data-count", t)
                }
            });
            r.append('<div style="clear:both"></div>');
            r.css({
                width: "100%",
                overflow: "hidden",
                marginLeft: "auto",
                marginRight: "auto",
                "text-align": "center",
                height: 0
            });
            r.wrapInner('<div class="timeline_items" />');
            r.find(".timeline_items").css("text-align", "left");
            if ("ontouchstart" in window) {
                r.addClass("timelineTouch")
            }
            r.wrapInner('<div class="timeline_items_holder" />');
            if (!n.hideControles) {
                r.append('<div class="t_controles"><div class="t_left"></div><div class="t_right"></div></div>')
            }
            r.wrapInner('<div class="timeline_items_wrapper" />');
            r.find(".timeline_items_holder").css({
                width: "300px",
                marginLeft: "auto",
                marginRight: "auto"
            });
            s.css({
                paddingLeft: 0,
                paddingRight: 0,
                marginLeft: n.itemMargin / 2,
                marginRight: n.itemMargin / 2,
                "float": "left",
                position: "relative"
            });
            o.each(function() {
                e(this).prepend('<div class="t_close" data-count="' + e(this).attr("data-count") + '" data-id="' + e(this).attr("data-id") + '">' + n.closeText + "</div>");
                e(this).wrapInner('<div class="' + n.itemOpenClass.substr(1) + '_cwrapper"  />').find("div:first").css({
                    position: "relative"
                });
                e(this).css({
                    width: 0,
                    padding: 0,
                    margin: 0,
                    "float": "left",
                    display: "none",
                    position: "relative",
                    overflow: "hidden"
                })
            });
            var c = r.find(".timeline_items:first"),
                h = r.find(".t_line_wrapper:first"),
                p = 300 / 2 - (u + n.itemMargin) * (1 / 2 + l),
                d = (u + n.itemMargin) * s.length + (a + n.itemMargin) + 660,
                v = r.data("timeline");
            c.css({
                width: d,
                marginLeft: p
            });
            if (!v) {
                r.data("timeline", {
                    currentIndex: l,
                    itemCount: s.length,
                    margin: p,
                    itemWidth: u,
                    itemOpenWidth: a,
                    lineMargin: 0,
                    lineViewCount: 0,
                    options: n,
                    items: s,
                    iholder: c,
                    open: false,
                    noAnimation: false,
                    marginResponse: false,
                    mousedown: false,
                    mousestartpos: 0
                })
            }
            if (!n.hideTimeline) {
                r.timeline("createElements");
                if (r.hasClass("timelineClean")) {}
            }
            e(document).keydown(function(e) {
                if (e.keyCode == 37) {
                    r.timeline("left");
                    return false
                }
                if (e.keyCode == 39) {
                    r.timeline("right");
                    return false
                }
            });
            e(window).resize(function() {
                var t = r.data("timeline");
                if (typeof t != "undefined") {
                    var i = s.eq(t.currentIndex).attr("data-id");
                    u = s.first().width(), a = o.first().find("div:first").width();
                    t.margin += t.itemCount * (t.itemWidth - u);
                    t.itemWidth = u;
                    if (t.open) t.margin += (t.itemOpenWidth - a) / 2;
                    t.itemOpenWidth = a;
                    if (e("body").width() < 767 && t.open && !t.marginResponse) {
                        t.margin -= (u + n.itemMargin) / 2;
                        t.marginResponse = true
                    } else if (e("body").width() >= 767 && t.marginResponse && t.open) {
                        t.margin += (u + n.itemMargin) / 2;
                        t.marginResponse = false
                    }
                    t.noAnimation = true;
                    r.timeline("goTo", i)
                }
            });
            e(document).ready(function() {
                e(".timeline_items .item img").on("dragstart", function(t) {
                    if (!e(this).hasClass("timeline_rollover_bottom")) t.preventDefault()
                });
                e(".timeline_items .timeline_rollover_bottom").on("dragstart", function(t) {
                    e(this).addClass("disableClick");
                    t.preventDefault()
                });
                e(".timeline_items .timeline_rollover_bottom").on("mousedown", function(t) {
                    if (!e(this).is("hover")) {
                        e(this).removeClass("disableClick")
                    }
                });
                e(".timeline_items .timeline_rollover_bottom").on("click", function(t) {
                    if (e(this).hasClass("disableClick")) {
                        t.preventDefault();
                        t.stopPropagation()
                    }
                    e(this).removeClass("disableClick")
                })
            });
            r.find(".t_left").click(function() {
                r.timeline("left")
            });
            r.find(".t_right").click(function() {
                r.timeline("right")
            });
            if (n.swipeOn) {
                s.find("*").each(function() {
                    e(this).css({
                        "-webkit-touch-callout": "none",
                        "-webkit-user-select": "none",
                        "-khtml-user-select": "none",
                        "-moz-user-select": "none",
                        "-ms-user-select": "none",
                        "user-select": "none"
                    })
                });
                r.bind("touchstart", function(e) {
                    r.timeline("touchStart", e)
                });
                r.find(n.itemClass).mousedown(function(e) {
                    r.timeline("mouseDown", e.pageX)
                });
                e(document).bind("touchend", function(e) {
                    v = r.data("timeline");
                    r.timeline("touchEnd", v.touchpos)
                });
                e(document).mouseup(function(e) {
                    var t = r.data("timeline");
                    if (typeof t != "undefined" && t.mousedown) {
                        r.timeline("mouseUp", e.pageX)
                    }
                })
            }
            r.find(n.openTriggerClass).click(function() {
                r.timeline("goTo", e(this).attr("data-id"), e(this).attr("data-count"), true)
            });
            r.find(".t_close").click(function() {
                r.timeline("close", e(this).attr("data-id"), e(this).attr("data-count"))
            });
            r.css({
                height: "auto"
            }).show();
            r.prev(".timelineLoader").hide();
            r.find(".t_line_node").each(function() {
                if (e(this).width() < 10) e(this).width(12);
                e(this).css({
                    marginLeft: -e(this).width() / 2
                })
            });
            return r
        },
        destroy: function() {
            e(document).unbind("mouseup");
            e(window).unbind("resize");
            var t = this,
                n = t.data("timeline");
            t.removeData("timeline")
        },
        touchStart: function(e) {
            var t = this,
                n = t.data("timeline"),
                r = 0;
            n.xpos = e.originalEvent.touches[0].pageX, n.ypos = e.originalEvent.touches[0].pageY;
            n.mousedown = true;
            n.touchHorizontal = false;
            n.mousestartpos = n.xpos;
            t.unbind("touchmove");
            t.bind("touchmove", function(e) {
                var t = e.originalEvent.touches[0].pageX,
                    i = e.originalEvent.touches[0].pageY;
                if (n.mousedown && !n.touchHorizontal) {
                    if (Math.abs(t - n.xpos) > Math.abs(i - n.ypos)) {
                        n.touchHorizontal = true
                    }
                } else if (n.touchHorizontal) {
                    e.preventDefault();
                    n.touchpos = e.originalEvent.touches[0].pageX;
                    r = n.margin - n.xpos + e.originalEvent.touches[0].pageX;
                    n.iholder.css("marginLeft", r + "px")
                }
                n.mousedown = false
            })
        },
        mouseDown: function(t) {
            var n = this,
                r = n.data("timeline"),
                i = 0;
            r.mousedown = true;
            r.mousestartpos = t;
            e("body").css("cursor", "move");
            e(document).mousemove(function(e) {
                i = r.margin - t + e.pageX;
                r.iholder.css("marginLeft", i + "px")
            })
        },
        touchEnd: function(e) {
            var t = this,
                n = t.data("timeline"),
                r = n.itemWidth + n.options.itemMargin,
                i = n.currentIndex,
                s = 0,
                o = e - n.mousestartpos;
            if (typeof n.touchHorizontal != "undefined" && n.touchHorizontal) {
                n.touchHorizontal = false;
                i -= parseInt(o / r);
                s = o % r;
                if (o < 0 && s < -r / 2) {
                    i++
                }
                if (o > 0 && s > r / 2) {
                    i--
                }
                if (i < 0) {
                    i = 0
                }
                if (i >= n.itemCount) {
                    i = n.itemCount - 1
                }
                t.timeline("goTo", n.items.eq(i).attr("data-id"), n.items.eq(i).attr("data-count"));
                if (n.options.closeItemOnTransition) t.timeline("close", n.items.eq(i).attr("data-id"))
            }
        },
        mouseUp: function(t) {
            var n = this,
                r = n.data("timeline"),
                i = r.itemWidth + r.options.itemMargin,
                s = r.currentIndex,
                o = 0,
                u = t - r.mousestartpos;
            r.mousedown = false;
            e(document).unbind("mousemove");
            e("body").css("cursor", "auto");
            s -= parseInt(u / i);
            o = u % i;
            if (u < 0 && o < -i / 2) {
                s++
            }
            if (u > 0 && o > i / 2) {
                s--
            }
            if (s < 0) {
                s = 0
            }
            if (s >= r.itemCount) {
                s = r.itemCount - 1
            }
            n.timeline("goTo", r.items.eq(s).attr("data-id"), r.items.eq(s).attr("data-count"));
            if (r.options.closeItemOnTransition) n.timeline("close", r.items.eq(s).attr("data-id"))
        },
        open: function(t, n) {
            var r = this,
                i = r.data("timeline"),
                s = r.find(i.options.itemOpenClass),
                o = i.options.scrollSpeed,
                u = i.itemOpenWidth,
                a = i.options.easin,
                f = i.options.itemMargin;
            s.each(function() {
                if (e(this).attr("data-id") == t) {
                    if (!n || n == e(this).attr("data-count")) {
                        var s = e(this);
                        var l = e(this).attr("data-count");
                        if (e(i.options.itemClass + '[data-count="' + l + '"] > .read_more[href="#"]').length == 0) {
                            r.trigger("itemOpen.Timeline");
                            e(this).stop(true).show().animate({
                                width: u,
                                marginLeft: f / 2,
                                marginRight: f / 2
                            }, o, a);
                            if (typeof e(this).attr("data-access") != "undefined" && e(this).attr("data-access") != "") {
                                var c = e(this).attr("data-access");
                                e.post(c, function(t) {
                                    e("body").append('<div class="ajax_preloading_holder" style="display:none"></div>');
                                    e(".ajax_preloading_holder").html(t);
                                    if (e(".ajax_preloading_holder img").length > 0) {
                                        e(".ajax_preloading_holder img").load(function() {
                                            s.find(".item_open_content").html(t);
                                            e(".ajax_preloading_holder").remove();
                                            e(this).attr("data-access", "");
                                            var n = jQuery.Event("ajaxLoaded.timeline");
                                            n.element = s.find(".item_open_content");
                                            e("body").trigger(n);
                                            r.trigger(n)
                                        })
                                    } else {
                                        s.find(".item_open_content").html(t);
                                        e(".ajax_preloading_holder").remove();
                                        e(this).attr("data-access", "");
                                        var n = jQuery.Event("ajaxLoaded.timeline");
                                        n.element = s.find(".item_open_content");
                                        e("body").trigger(n);
                                        r.trigger(n)
                                    }
                                })
                            }
                            if (e("body").width() < 767) {
                                i.margin -= (i.itemWidth + i.options.itemMargin) / 2;
                                i.marginResponse = true
                            } else {
                                i.marginResponse = false
                            }
                            i.margin -= (u + i.options.itemMargin + i.itemWidth) / 2 - i.itemWidth / 2;
                            if (false) i.iholder.stop(true).animate({
                                marginLeft: i.margin
                            }, o, a);
                            i.open = t
                        }
                    }
                }
            });
            return r
        },
        close: function(t, n, r) {
            var i = this,
                s = i.data("timeline"),
                o = i.find(s.options.itemOpenClass),
                u = s.options.scrollSpeed,
                a = s.itemOpenWidth,
                f = s.options.easing;
            o.each(function() {
                if (e(this).attr("data-id") == t && e(this).is(":visible")) {
                    i.trigger("itemClose.Timeline");
                    e(this).stop(true).animate({
                        width: 0,
                        margin: 0
                    }, u, f, function() {
                        e(this).hide()
                    });
                    if (s.marginResponse) {
                        s.margin += (s.itemWidth + s.options.itemMargin) / 2
                    }
                    s.margin += (a + s.options.itemMargin) / 2;
                    s.iholder.stop(true).animate({
                        marginLeft: s.margin
                    }, u, f);
                    s.open = false
                }
            });
            if (n) {
                if (e(this).find('.item[data-count="' + r + '"] a.read_more[href="#"]').length == 0) i.timeline("open", n, r)
            }
            return i
        },
        right: function() {
            var e = this,
                t = e.data("timeline"),
                n = t.options.scrollSpeed,
                r = t.options.easing;
            if (t.currentIndex < t.itemCount - 1) {
                var i = t.items.eq(t.currentIndex + 1).attr("data-id");
                var s = t.items.eq(t.currentIndex + 1).attr("data-count");
                e.timeline("goTo", i, s);
                if (t.options.closeItemOnTransition) e.timeline("close", i)
            } else {
                t.iholder.stop(true).animate({
                    marginLeft: t.margin - 50
                }, n / 2, r).animate({
                    marginLeft: t.margin
                }, n / 2, r)
            }
            return e
        },
        left: function() {
            var e = this,
                t = e.data("timeline"),
                n = t.options.scrollSpeed,
                r = t.options.easing;
            if (t.currentIndex > 0) {
                var i = t.items.eq(t.currentIndex - 1).attr("data-id");
                var s = t.items.eq(t.currentIndex - 1).attr("data-count");
                e.timeline("goTo", i, s);
                if (t.options.closeItemOnTransition) e.timeline("close", i)
            } else {
                t.iholder.stop(true).animate({
                    marginLeft: t.margin + 50
                }, n / 2, r).animate({
                    marginLeft: t.margin
                }, n / 2, r)
            }
            return e
        },
        goTo: function(t, n, r) {
            var i = this,
                s = i.data("timeline"),
                o = s.options.scrollSpeed,
                u = s.options.easing,
                a = s.items,
                f = i.find(".timeline_line").width(),
                l = -1,
                c = false;
            a.each(function(r) {
                if (t == e(this).attr("data-id")) {
                    if (!n || n == e(this).attr("data-count")) {
                        c = true;
                        l = r;
                        return false
                    }
                }
            });
            if (c) {
                var h = i.find(".t_line_node");
                h.removeClass("active");
                var p = h.parent().parent().find('[href="#' + t + '"]').addClass("active");
                s.lineMargin = -parseInt(p.parent().parent().attr("data-id"), 10) * 100;
                if (i.find(".t_line_view:first").width() > i.find(".timeline_line").width()) {
                    s.lineMargin *= 2;
                    if (p.parent().hasClass("right")) s.lineMargin -= 100
                }
                if (s.noAnimation) {
                    s.noAnimation = false;
                    i.find(".t_line_wrapper").stop(true).css({
                        marginLeft: s.lineMargin + "%"
                    })
                } else {
                    i.find(".t_line_wrapper").stop(true).animate({
                        marginLeft: s.lineMargin + "%"
                    }, o, u)
                }
                if (s.open) {
                    i.timeline("close", s.open, t, n)
                } else if (r) {
                    i.timeline("open", t, n)
                }
                i.trigger("scrollStart.Timeline");
                s.margin += (s.itemWidth + s.options.itemMargin) * (s.currentIndex - l);
                s.currentIndex = l;
                var d = (parseInt(s.iholder.css("margin-left")) - s.margin) / s.itemWidth;
                s.iholder.stop(true).animate({
                    marginLeft: s.margin
                }, o + o / 5 * (Math.abs(d) - 1), u, function() {
                    i.trigger("scrollStop.Timeline")
                })
            }
            return i
        },
        lineLeft: function() {
            var e = this,
                t = e.data("timeline"),
                n = t.options.scrollSpeed,
                r = t.options.easing;
            if (t.lineMargin != 0 && t.options.categories) {
                t.lineMargin += 100;
                e.find(".t_line_wrapper").stop(true).animate({
                    marginLeft: t.lineMargin + "%"
                }, n, r)
            }
        },
        lineRight: function() {
            var e = this,
                t = e.data("timeline"),
                n = t.options.scrollSpeed,
                r = t.options.easing;
            if (e.find(".t_line_view:first").width() > e.find(".timeline_line").width()) var i = t.lineViewCount * 2;
            else var i = t.lineViewCount;
            if (t.lineMargin != -(i - 1) * 100 && t.options.categories) {
                t.lineMargin -= 100;
                e.find(".t_line_wrapper").stop(true).animate({
                    marginLeft: t.lineMargin + "%"
                }, n, r)
            }
        },
        createElements: function() {
            var t = this,
                n = t.data("timeline"),
                r = n.items;
            var i = "\n" + '    <div class="timeline_line" style="text-align: left; position:relative; margin-left:auto; margin-right:auto;">\n' + "	 </div>\n";
            t.prepend(i);
            var s = t.find(".timeline_line").width(),
                o = new Array,
                u = [""].concat(n.options.categories);
            monthsDays = [0].concat(n.options.nuberOfSegments), minM = u.length, minY = 99999, maxM = 0, maxY = 0;
            if (!n.options.yearsOn) maxY = 99999;
            var a = {};
            if (!n.options.categories) {
                r.each(function() {
                    var t = e(this).attr("data-id"),
                        n = t.split("/"),
                        r = parseInt(n[0], 10),
                        i = e.inArray(n[1], u) != -1 ? e.inArray(n[1], u) : parseInt(n[1], 10),
                        s = parseInt(n[2], 10);
                    if (r < minY) minY = r;
                    if (r > maxY) maxY = r
                });
                minY -= 10;
                maxY += 10
            }
            r.each(function(t) {
                var r = e(this).attr("data-id"),
                    i = e(this).attr("data-name"),
                    s = e(this).attr("data-description"),
                    f = r.split("/"),
                    l = parseInt(f[0], 10),
                    c = e.inArray(f[1], u) != -1 ? e.inArray(f[1], u) : parseInt(f[1], 10),
                    h = parseInt(f[2], 10);
                if (typeof a[h] == "undefined") a[h] = {};
                if (typeof a[h][c] == "undefined") a[h][c] = {};
                a[h][c][l] = r;
                var p = t == n.currentIndex ? " active" : "";
                if (n.options.categories) {
                    var d = 100 / monthsDays[c] * l
                } else {
                    var d = 100 / (maxY - minY) * (l - minY)
                }
                var v = typeof i != "undefined" ? i : l;
                o[r] = '<a href="#' + r + '" class="t_line_node' + p + '" style="left: ' + d + '%; position:absolute; text-align:center;">' + v;
                if (typeof s != "undefined") o[r] += '<span class="t_node_desc ' + (s ? "" : "t_node_desc_empty") + '" style="white-space:nowrap; position:absolute; z-index: 1;" ><span>' + s + "</span></span>";
                o[r] += "</a>\n"
            });
            i = "\n" + '		<div id="t_line_left" style="position: absolute;"></div><div id="t_line_right" style="position: absolute;"></div>\n' + '		<div class="t_line_holder" style="position:relative; overflow: hidden; width:100%;">\n' + '			<div class="t_line_wrapper" style="white-space:nowrap;">\n';
            if (!n.options.categories) {
                i += '<div class="t_line_view" data-id="' + c + '" style="position:relative; display:inline-block; width:100%;">\n' + '					<div class="t_line_m" style="width:100%; border:0; position:absolute; top:0;">\n';
                for (var f in o) {
                    i += o[f]
                }
                i += "</div>\n" + "</div>"
            } else {
                var l = true;
                var c = 0;
                for (var h in a) {
                    for (var p in a[h]) {
                        if (l) {
                            l = !l;
                            i += '<div class="t_line_view" data-id="' + c + '" style="position:relative; display:inline-block;">\n' + '					<div class="t_line_m" style="position:absolute; top:0;">\n' + '						<h4 class="t_line_month" style="position:abolute; width:100% top:0; text-align:center;">' + u[p] + (n.options.yearsOn ? '<span class="t_line_month_year"> ' + (h < 0 ? -h + " B.C." : h) + "</span>" : "") + "</h4>\n";
                            for (dy in a[h][p]) {
                                i += o[a[h][p][dy]]
                            }
                            i += "					</div> <!-- KRAJ PRVOG -->\n"
                        } else {
                            l = !l;
                            i += '					<div class="t_line_m right" style="position:absolute; top:0;">\n' + '						<h4 class="t_line_month" style="position:abolute; width:100% top:0; text-align:center;">' + (typeof u[p] !== "undefined" ? u[p] : "") + (n.options.yearsOn ? '<span class="t_line_month_year"> ' + h + "</span>" : "") + "</h4>\n";
                            for (dy in a[h][p]) {
                                i += o[a[h][p][dy]]
                            }
                            i += "					</div><!-- KRAJ DRUGOG -->\n" + '					<div style="clear:both"></div>\n' + "				</div>";
                            c++
                        }
                    }
                }
                if (!l) {
                    i += '					<div class="t_line_m right" style="position:absolute; top:0;">\n' + '						<h4 class="t_line_month" style="position:abolute; width:100% top:0; text-align:center;"></h4>\n' + "					</div>\n" + '					<div style="clear:both"></div>\n' + "				</div>";
                    c++
                }
            }
            i += "\n" + '				<div style="clear:both"></div>\n' + "			</div>\n" + "		</div>\n";
            n.lineViewCount = c;
            t.find(".timeline_line:first").html(i);
            t.find(".t_line_node").each(function() {
                var i = e(this);
                e(this).find("span").hide();
                e(this).hover(function() {
                    r.each(function() {
                        if (e(this).attr("data-id") == i.attr("href").substr(1)) {
                            e(this).addClass("item_node_hover")
                        }
                    });
                    e(this).find("span").css("display", "block")
                }, function() {
                    e(this).find("span").css("display", "none");
                    e(".item_node_hover").removeClass("item_node_hover")
                });
                if (e(this).hasClass("active")) {
                    n.lineMargin = -parseInt(e(this).parent().parent(".t_line_view").attr("data-id"), 10) * 100;
                    t.find(".t_line_wrapper").css("margin-left", n.lineMargin + "%")
                }
                e(this).click(function(r) {
                    r.preventDefault();
                    t.find(".t_line_node").removeClass("active");
                    e(this).addClass("active");
                    t.timeline("goTo", e(this).attr("href").substr(1));
                    if (n.options.closeItemOnTransition) t.timeline("close", e(this).attr("href").substr(1))
                })
            });
            t.find("#t_line_left").click(function() {
                t.timeline("lineLeft")
            });
            t.find("#t_line_right").click(function() {
                t.timeline("lineRight")
            })
        }
    };
    e.fn.timeline = function(n) {
        if (t[n]) {
            return t[n].apply(this, Array.prototype.slice.call(arguments, 1))
        } else if (typeof n === "object" || !n) {
            return t.init.apply(this, arguments)
        } else {
            e.error("Method " + n + " does not exist on jQuery.timeline")
        }
    }
})(jQuery)

/* 3. */
!(function(a) {
    function d(b) {
        var c = b || window.event,
            d = [].slice.call(arguments, 1),
            e = 0,
            f = !0,
            g = 0,
            h = 0;
        return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), h = e, c.axis !== undefined && c.axis === c.HORIZONTAL_AXIS && (h = 0, g = -1 * e), c.wheelDeltaY !== undefined && (h = c.wheelDeltaY / 120), c.wheelDeltaX !== undefined && (g = -1 * c.wheelDeltaX / 120), d.unshift(b, e, g, h), (a.event.dispatch || a.event.handle).apply(this, d)
    }
    var b = ["DOMMouseScroll", "mousewheel"];
    if (a.event.fixHooks)
        for (var c = b.length; c;) a.event.fixHooks[b[--c]] = a.event.mouseHooks;
    a.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var a = b.length; a;) this.addEventListener(b[--a], d, !1);
            else this.onmousewheel = d
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var a = b.length; a;) this.removeEventListener(b[--a], d, !1);
            else this.onmousewheel = null
        }
    }, a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
})(jQuery)