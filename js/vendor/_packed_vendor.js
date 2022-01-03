/*!
0. jquery-migrate.min.js
1. core.min.js
2. widget.min.js
3. mouse.min.js
4. draggable.min.js
5. skip-link-focus-fix.js
6. superfish.js
7. jquery.slidemenu.js
8. skrollr.min.js
9. swiper.jquery.min.js
10. jquery.magnific-popup.min.js
11. mediaelement-and-player.min.js

----------------------------------------------------*/

/* 0. jquery-migrate.min.js */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function e(b, c, e, f) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(f), e
                    },
                    set: function(a) {
                        d(f), e = a
                    }
                })
            } catch (g) {}
            a._definePropertyBroken = !0, b[c] = e
        }
        a.migrateVersion = "1.4.1";
        var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
            f = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", {
                size: 1
            }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() {
                return null
            },
            j = a.attrHooks.value && a.attrHooks.value.set || function() {
                return c
            },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get: function(b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set: function(b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
        }, a.attrHooks.value = {
            get: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
            },
            set: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
            }
        };
        var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, e, f) {
            var g, h;
            return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
        }, a.fn.init.prototype = a.fn, a.find = function(a) {
            var b = Array.prototype.slice.call(arguments);
            if ("string" == typeof a && u.test(a)) try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function(a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
            return r.apply(this, b)
        };
        var x;
        for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function(a) {
            return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
        }, a.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
            function b(a, c) {
                return new b.fn.init(a, c)
            }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                var f = a.fn.init.call(this, d, e, c);
                return f instanceof b ? f : b(f)
            }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b
        }, a.fn.size = function() {
            return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
        };
        var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
            var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function() {
                var a;
                return y = !0, a = d.apply(this, arguments), y = !1, a
            })
        }), a.swap = function(a, b, c, e) {
            var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated");
            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []);
            for (g in b) a.style[g] = h[g];
            return f
        }, a.ajaxSetup({
            converters: {
                "text json": a.parseJSON
            }
        });
        var z = a.fn.data;
        a.fn.data = function(b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
        };
        var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function(b, c, e, f) {
            c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
            var g, h, i, j, k = [];
            if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function(a) {
                        return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                    }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
            return k
        });
        var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function(b) {
                return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
            };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
            a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
        }, a.event.remove = function(a, b, c, d, e) {
            C.call(this, a, L(b) || "", c, d, e)
        }, a.each(["load", "unload", "error"], function(b, c) {
            a.fn[c] = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
            }
        }), a.fn.toggle = function(b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                };
            for (h.guid = f; g < e.length;) e[g++].guid = f;
            return this.click(h)
        }, a.fn.live = function(b, c, e) {
            return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
        }, a.fn.die = function(b, c) {
            return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
        }, a.event.trigger = function(a, b, c, e) {
            return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
        }, a.each(I.split("|"), function(b, c) {
            a.event.special[c] = {
                setup: function() {
                    var b = this;
                    return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                        a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                    }), a._data(this, c, a.guid++)), !1
                },
                teardown: function() {
                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                }
            }
        }), a.event.special.ready = {
            setup: function() {
                this === document && d("'ready' event is deprecated")
            }
        };
        var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find;
        if (a.fn.andSelf = function() {
                return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
            }, a.fn.find = function(a) {
                var b = N.apply(this, arguments);
                return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
            }, a.Callbacks) {
            var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function(b) {
                var c = O(),
                    e = c.promise();
                return c.pipe = e.pipe = function() {
                    var b = arguments;
                    return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                        a.each(P, function(f, g) {
                            var h = a.isFunction(b[f]) && b[f];
                            c[g[1]](function() {
                                var b = h && h.apply(this, arguments);
                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                            })
                        }), b = null
                    }).promise()
                }, c.isResolved = function() {
                    return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                }, c.isRejected = function() {
                    return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                }, b && b.call(c, c), c
            }
        }
    }(jQuery, window);

/* 1. core.min.js */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    function b(b, d) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode, f = e.name, !(!b.href || !f || "map" !== e.nodeName.toLowerCase()) && (g = a("img[usemap='#" + f + "']")[0], !!g && c(g))) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
    }

    function c(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility")
        }).length
    }
    a.ui = a.ui || {}, a.extend(a.ui, {
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
    }), a.fn.extend({
        scrollParent: function(b) {
            var c = this.css("position"),
                d = "absolute" === c,
                e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                f = this.parents().filter(function() {
                    var b = a(this);
                    return (!d || "static" !== b.css("position")) && e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
                }).eq(0);
            return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
            })
        }
    }), a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
            return function(c) {
                return !!a.data(c, b)
            }
        }) : function(b, c, d) {
            return !!a.data(b, d[3])
        },
        focusable: function(c) {
            return b(c, !isNaN(a.attr(c, "tabindex")))
        },
        tabbable: function(c) {
            var d = a.attr(c, "tabindex"),
                e = isNaN(d);
            return (e || d >= 0) && b(c, !e)
        }
    }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
        function d(b, c, d, f) {
            return a.each(e, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }), c
        }
        var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
            f = c.toLowerCase(),
            g = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
        a.fn["inner" + c] = function(b) {
            return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
                a(this).css(f, d(this, b) + "px")
            })
        }, a.fn["outer" + c] = function(b, e) {
            return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
                a(this).css(f, d(this, b, !0, e) + "px")
            })
        }
    }), a.fn.addBack || (a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
        return function(c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
        }
    }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
        focus: function(b) {
            return function(c, d) {
                return "number" == typeof c ? this.each(function() {
                    var b = this;
                    setTimeout(function() {
                        a(b).focus(), d && d.call(b)
                    }, c)
                }) : b.apply(this, arguments)
            }
        }(a.fn.focus),
        disableSelection: function() {
            var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(a + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(b) {
            if (void 0 !== b) return this.css("zIndex", b);
            if (this.length)
                for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
                    if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
                    e = e.parent()
                }
            return 0
        }
    }), a.ui.plugin = {
        add: function(b, c, d) {
            var e, f = a.ui[b].prototype;
            for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
        },
        call: function(a, b, c, d) {
            var e, f = a.plugins[b];
            if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                for (e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
        }
    }
});

/* 2. widget.min.js */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    var b = 0,
        c = Array.prototype.slice;
    return a.cleanData = function(b) {
        return function(c) {
            var d, e, f;
            for (f = 0; null != (e = c[f]); f++) try {
                d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove")
            } catch (g) {}
            b(c)
        }
    }(a.cleanData), a.widget = function(b, c, d) {
        var e, f, g, h, i = {},
            j = b.split(".")[0];
        return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
            return !!a.data(b, e)
        }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
            return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
        }, a.extend(g, f, {
            version: d.version,
            _proto: a.extend({}, d),
            _childConstructors: []
        }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
            return a.isFunction(d) ? void(i[b] = function() {
                var a = function() {
                        return c.prototype[b].apply(this, arguments)
                    },
                    e = function(a) {
                        return c.prototype[b].apply(this, a)
                    };
                return function() {
                    var b, c = this._super,
                        f = this._superApply;
                    return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                }
            }()) : void(i[b] = d)
        }), g.prototype = a.widget.extend(h, {
            widgetEventPrefix: f ? h.widgetEventPrefix || b : b
        }, i, {
            constructor: g,
            namespace: j,
            widgetName: b,
            widgetFullName: e
        }), f ? (a.each(f._childConstructors, function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, g, c._proto)
        }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g
    }, a.widget.extend = function(b) {
        for (var d, e, f = c.call(arguments, 1), g = 0, h = f.length; g < h; g++)
            for (d in f[g]) e = f[g][d], f[g].hasOwnProperty(d) && void 0 !== e && (a.isPlainObject(e) ? b[d] = a.isPlainObject(b[d]) ? a.widget.extend({}, b[d], e) : a.widget.extend({}, e) : b[d] = e);
        return b
    }, a.widget.bridge = function(b, d) {
        var e = d.prototype.widgetFullName || b;
        a.fn[b] = function(f) {
            var g = "string" == typeof f,
                h = c.call(arguments, 1),
                i = this;
            return g ? this.each(function() {
                var c, d = a.data(this, e);
                return "instance" === f ? (i = d, !1) : d ? a.isFunction(d[f]) && "_" !== f.charAt(0) ? (c = d[f].apply(d, h), c !== d && void 0 !== c ? (i = c && c.jquery ? i.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
            }) : (h.length && (f = a.widget.extend.apply(null, [f].concat(h))), this.each(function() {
                var b = a.data(this, e);
                b ? (b.option(f || {}), b._init && b._init()) : a.data(this, e, new d(f, this))
            })), i
        }
    }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(c, d) {
            d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = b++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(a) {
                    a.target === d && this.destroy()
                }
            }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), c), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function() {
            return this.element
        },
        option: function(b, c) {
            var d, e, f, g = b;
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            if ("string" == typeof b)
                if (g = {}, d = b.split("."), b = d.shift(), d.length) {
                    for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; f < d.length - 1; f++) e[d[f]] = e[d[f]] || {}, e = e[d[f]];
                    if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
                    e[b] = c
                } else {
                    if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
                    g[b] = c
                }
            return this._setOptions(g), this
        },
        _setOptions: function(a) {
            var b;
            for (b in a) this._setOption(b, a[b]);
            return this
        },
        _setOption: function(a, b) {
            return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
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
        _on: function(b, c, d) {
            var e, f = this;
            "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
                function h() {
                    if (b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled")) return ("string" == typeof g ? f[g] : g).apply(f, arguments)
                }
                "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                var i = d.match(/^([\w:-]*)\s*(.*)$/),
                    j = i[1] + f.eventNamespace,
                    k = i[2];
                k ? e.delegate(k, j, h) : c.bind(j, h)
            })
        },
        _off: function(b, c) {
            c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.unbind(c).undelegate(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
        },
        _delay: function(a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments)
            }
            var d = this;
            return setTimeout(c, b || 0)
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b), this._on(b, {
                mouseenter: function(b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b), this._on(b, {
                focusin: function(b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                for (e in f) e in c || (c[e] = f[e]);
            return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
        }
    }, a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            "string" == typeof e && (e = {
                effect: e
            });
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {}, "number" == typeof e && (e = {
                duration: e
            }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                a(this)[b](), f && f.call(d[0]), c()
            })
        }
    }), a.widget
});

/* 3. mouse.min.js */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./widget"], a) : a(jQuery)
}(function(a) {
    var b = !1;
    return a(document).mouseup(function() {
        b = !1
    }), a.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function(a) {
                return b._mouseDown(a)
            }).bind("click." + this.widgetName, function(c) {
                if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) return a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(c) {
            if (!b) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
                var d = this,
                    e = 1 === c.which,
                    f = !("string" != typeof this.options.cancel || !c.target.nodeName) && a(c.target).closest(this.options.cancel).length;
                return !(e && !f && this._mouseCapture(c)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    d.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(c) !== !1, !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
                    return d._mouseMove(a)
                }, this._mouseUpDelegate = function(a) {
                    return d._mouseUp(a)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), c.preventDefault(), b = !0, !0))
            }
        },
        _mouseMove: function(b) {
            if (this._mouseMoved) {
                if (a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button) return this._mouseUp(b);
                if (!b.which) return this._mouseUp(b)
            }
            return (b.which || b.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
        },
        _mouseUp: function(c) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, c.target === this._mouseDownEvent.target && a.data(c.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(c)), b = !1, !1
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
});

/* 4. draggable.min.js */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.draggable", a.ui.mouse, {
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
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function(a, b) {
            this._super(a, b), "handle" === a && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
        },
        _mouseCapture: function(b) {
            var c = this.options;
            return this._blurActiveElement(b), !(this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(b), !!this.handle && (this._blockFrames(c.iframeFix === !0 ? "iframe" : c.iframeFix), !0))
        },
        _blockFrames: function(b) {
            this.iframeBlocks = this.document.find(b).map(function() {
                var b = a(this);
                return a("<div>").css("position", "absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function(b) {
            var c = this.document[0];
            if (this.handleElement.is(b.target)) try {
                c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() && a(c.activeElement).blur()
            } catch (d) {}
        },
        _mouseStart: function(b) {
            var c = this.options;
            return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                return "fixed" === a(this).css("position")
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(b), this.originalPosition = this.position = this._generatePosition(b, !1), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._normalizeRightBottom(), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
        },
        _refreshOffsets: function(a) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: a.pageX - this.offset.left,
                top: a.pageY - this.offset.top
            }
        },
        _mouseDrag: function(b, c) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b, !0), this.positionAbs = this._convertPositionTo("absolute"), !c) {
                var d = this._uiHash();
                if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
                this.position = d.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
        },
        _mouseStop: function(b) {
            var c = this,
                d = !1;
            return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), this.dropped && (d = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                c._trigger("stop", b) !== !1 && c._clear()
            }) : this._trigger("stop", b) !== !1 && this._clear(), !1
        },
        _mouseUp: function(b) {
            return this._unblockFrames(), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), this.handleElement.is(b.target) && this.element.focus(), a.ui.mouse.prototype._mouseUp.call(this, b)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(b) {
            return !this.options.handle || !!a(b.target).closest(this.element.find(this.options.handle)).length
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function(b) {
            var c = this.options,
                d = a.isFunction(c.helper),
                e = d ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
            return e.parents("body").length || e.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d && e[0] === this.element[0] && this._setPositionRelative(), e[0] === this.element[0] || /(fixed|absolute)/.test(e.css("position")) || e.css("position", "absolute"), e
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _isRootNode: function(a) {
            return /(html|body)/i.test(a.tagName) || a === this.document[0]
        },
        _getParentOffset: function() {
            var b = this.offsetParent.offset(),
                c = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== c && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var a = this.element.position(),
                b = this._isRootNode(this.scrollParent[0]);
            return {
                top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()),
                left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft())
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
            var b, c, d, e = this.options,
                f = this.document[0];
            return this.relativeContainer = null, e.containment ? "window" === e.containment ? void(this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === e.containment ? void(this.containment = [0, 0, a(f).width() - this.helperProportions.width - this.margins.left, (a(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : e.containment.constructor === Array ? void(this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), c = a(e.containment), d = c[0], void(d && (b = /(scroll|auto)/.test(c.css("overflow")), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = c))) : void(this.containment = null)
        },
        _convertPositionTo: function(a, b) {
            b || (b = this.position);
            var c = "absolute" === a ? 1 : -1,
                d = this._isRootNode(this.scrollParent[0]);
            return {
                top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * c,
                left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * c
            }
        },
        _generatePosition: function(a, b) {
            var c, d, e, f, g = this.options,
                h = this._isRootNode(this.scrollParent[0]),
                i = a.pageX,
                j = a.pageY;
            return h && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), b && (this.containment && (this.relativeContainer ? (d = this.relativeContainer.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, a.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), a.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), a.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), a.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f), "y" === g.axis && (i = this.originalPageX), "x" === g.axis && (j = this.originalPageY)), {
                top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
                left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _normalizeRightBottom: function() {
            "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
        },
        _trigger: function(b, c, d) {
            return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d, this], !0), /^(drag|start|stop)/.test(b) && (this.positionAbs = this._convertPositionTo("absolute"), d.offset = this.positionAbs), a.Widget.prototype._trigger.call(this, b, c, d)
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
    }), a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(b, c, d) {
            var e = a.extend({}, c, {
                item: d.element
            });
            d.sortables = [], a(d.options.connectToSortable).each(function() {
                var c = a(this).sortable("instance");
                c && !c.options.disabled && (d.sortables.push(c), c.refreshPositions(), c._trigger("activate", b, e))
            })
        },
        stop: function(b, c, d) {
            var e = a.extend({}, c, {
                item: d.element
            });
            d.cancelHelperRemoval = !1, a.each(d.sortables, function() {
                var a = this;
                a.isOver ? (a.isOver = 0, d.cancelHelperRemoval = !0, a.cancelHelperRemoval = !1, a._storedCSS = {
                    position: a.placeholder.css("position"),
                    top: a.placeholder.css("top"),
                    left: a.placeholder.css("left")
                }, a._mouseStop(b), a.options.helper = a.options._helper) : (a.cancelHelperRemoval = !0, a._trigger("deactivate", b, e))
            })
        },
        drag: function(b, c, d) {
            a.each(d.sortables, function() {
                var e = !1,
                    f = this;
                f.positionAbs = d.positionAbs, f.helperProportions = d.helperProportions, f.offset.click = d.offset.click, f._intersectsWith(f.containerCache) && (e = !0, a.each(d.sortables, function() {
                    return this.positionAbs = d.positionAbs, this.helperProportions = d.helperProportions, this.offset.click = d.offset.click, this !== f && this._intersectsWith(this.containerCache) && a.contains(f.element[0], this.element[0]) && (e = !1), e
                })), e ? (f.isOver || (f.isOver = 1, d._parent = c.helper.parent(), f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item", !0), f.options._helper = f.options.helper, f.options.helper = function() {
                    return c.helper[0]
                }, b.target = f.currentItem[0], f._mouseCapture(b, !0), f._mouseStart(b, !0, !0), f.offset.click.top = d.offset.click.top, f.offset.click.left = d.offset.click.left, f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left, f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top, d._trigger("toSortable", b), d.dropped = f.element, a.each(d.sortables, function() {
                    this.refreshPositions()
                }), d.currentItem = d.element, f.fromOutside = d), f.currentItem && (f._mouseDrag(b), c.position = f.position)) : f.isOver && (f.isOver = 0, f.cancelHelperRemoval = !0, f.options._revert = f.options.revert, f.options.revert = !1, f._trigger("out", b, f._uiHash(f)), f._mouseStop(b, !0), f.options.revert = f.options._revert, f.options.helper = f.options._helper, f.placeholder && f.placeholder.remove(), c.helper.appendTo(d._parent), d._refreshOffsets(b), c.position = d._generatePosition(b, !0), d._trigger("fromSortable", b), d.dropped = !1, a.each(d.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    }), a.ui.plugin.add("draggable", "cursor", {
        start: function(b, c, d) {
            var e = a("body"),
                f = d.options;
            e.css("cursor") && (f._cursor = e.css("cursor")), e.css("cursor", f.cursor)
        },
        stop: function(b, c, d) {
            var e = d.options;
            e._cursor && a("body").css("cursor", e._cursor)
        }
    }), a.ui.plugin.add("draggable", "opacity", {
        start: function(b, c, d) {
            var e = a(c.helper),
                f = d.options;
            e.css("opacity") && (f._opacity = e.css("opacity")), e.css("opacity", f.opacity)
        },
        stop: function(b, c, d) {
            var e = d.options;
            e._opacity && a(c.helper).css("opacity", e._opacity)
        }
    }), a.ui.plugin.add("draggable", "scroll", {
        start: function(a, b, c) {
            c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1)), c.scrollParentNotHidden[0] !== c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset())
        },
        drag: function(b, c, d) {
            var e = d.options,
                f = !1,
                g = d.scrollParentNotHidden[0],
                h = d.document[0];
            g !== h && "HTML" !== g.tagName ? (e.axis && "x" === e.axis || (d.overflowOffset.top + g.offsetHeight - b.pageY < e.scrollSensitivity ? g.scrollTop = f = g.scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (g.scrollTop = f = g.scrollTop - e.scrollSpeed)), e.axis && "y" === e.axis || (d.overflowOffset.left + g.offsetWidth - b.pageX < e.scrollSensitivity ? g.scrollLeft = f = g.scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (g.scrollLeft = f = g.scrollLeft - e.scrollSpeed))) : (e.axis && "x" === e.axis || (b.pageY - a(h).scrollTop() < e.scrollSensitivity ? f = a(h).scrollTop(a(h).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(h).scrollTop()) < e.scrollSensitivity && (f = a(h).scrollTop(a(h).scrollTop() + e.scrollSpeed))), e.axis && "y" === e.axis || (b.pageX - a(h).scrollLeft() < e.scrollSensitivity ? f = a(h).scrollLeft(a(h).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(h).scrollLeft()) < e.scrollSensitivity && (f = a(h).scrollLeft(a(h).scrollLeft() + e.scrollSpeed)))), f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b)
        }
    }), a.ui.plugin.add("draggable", "snap", {
        start: function(b, c, d) {
            var e = d.options;
            d.snapElements = [], a(e.snap.constructor !== String ? e.snap.items || ":data(ui-draggable)" : e.snap).each(function() {
                var b = a(this),
                    c = b.offset();
                this !== d.element[0] && d.snapElements.push({
                    item: this,
                    width: b.outerWidth(),
                    height: b.outerHeight(),
                    top: c.top,
                    left: c.left
                })
            })
        },
        drag: function(b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o = d.options,
                p = o.snapTolerance,
                q = c.offset.left,
                r = q + d.helperProportions.width,
                s = c.offset.top,
                t = s + d.helperProportions.height;
            for (m = d.snapElements.length - 1; m >= 0; m--) i = d.snapElements[m].left - d.margins.left, j = i + d.snapElements[m].width, k = d.snapElements[m].top - d.margins.top, l = k + d.snapElements[m].height, r < i - p || q > j + p || t < k - p || s > l + p || !a.contains(d.snapElements[m].item.ownerDocument, d.snapElements[m].item) ? (d.snapElements[m].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {
                snapItem: d.snapElements[m].item
            })), d.snapElements[m].snapping = !1) : ("inner" !== o.snapMode && (e = Math.abs(k - t) <= p, f = Math.abs(l - s) <= p, g = Math.abs(i - r) <= p, h = Math.abs(j - q) <= p, e && (c.position.top = d._convertPositionTo("relative", {
                top: k - d.helperProportions.height,
                left: 0
            }).top), f && (c.position.top = d._convertPositionTo("relative", {
                top: l,
                left: 0
            }).top), g && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: i - d.helperProportions.width
            }).left), h && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: j
            }).left)), n = e || f || g || h, "outer" !== o.snapMode && (e = Math.abs(k - s) <= p, f = Math.abs(l - t) <= p, g = Math.abs(i - q) <= p, h = Math.abs(j - r) <= p, e && (c.position.top = d._convertPositionTo("relative", {
                top: k,
                left: 0
            }).top), f && (c.position.top = d._convertPositionTo("relative", {
                top: l - d.helperProportions.height,
                left: 0
            }).top), g && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: i
            }).left), h && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: j - d.helperProportions.width
            }).left)), !d.snapElements[m].snapping && (e || f || g || h || n) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {
                snapItem: d.snapElements[m].item
            })), d.snapElements[m].snapping = e || f || g || h || n)
        }
    }), a.ui.plugin.add("draggable", "stack", {
        start: function(b, c, d) {
            var e, f = d.options,
                g = a.makeArray(a(f.stack)).sort(function(b, c) {
                    return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
                });
            g.length && (e = parseInt(a(g[0]).css("zIndex"), 10) || 0, a(g).each(function(b) {
                a(this).css("zIndex", e + b)
            }), this.css("zIndex", e + g.length))
        }
    }), a.ui.plugin.add("draggable", "zIndex", {
        start: function(b, c, d) {
            var e = a(c.helper),
                f = d.options;
            e.css("zIndex") && (f._zIndex = e.css("zIndex")), e.css("zIndex", f.zIndex)
        },
        stop: function(b, c, d) {
            var e = d.options;
            e._zIndex && a(c.helper).css("zIndex", e._zIndex)
        }
    }), a.ui.draggable
});

/* 5. skip-link-focus-fix.js */
(function() {
    var a = navigator.userAgent.toLowerCase();
    if ((a.indexOf("webkit") > -1 || a.indexOf("opera") > -1 || a.indexOf("msie") > -1) && document.getElementById && window.addEventListener) {
        window.addEventListener("hashchange", function() {
            var b = document.getElementById(location.hash.substring(1));
            if (b) {
                if (!/^(?:a|select|input|button|textarea)$/i.test(b.nodeName)) {
                    b.tabIndex = -1
                }
                b.focus()
            }
        }, false)
    }
})();

/* 6. superfish.js */
(function(b) {
    var a = (function() {
        var o = {
                bcClass: "sf-breadcrumb",
                menuClass: "sf-js-enabled",
                anchorClass: "sf-with-ul",
                menuArrowClass: "sf-arrows"
            },
            e = (function() {
                var c = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                if (c) {
                    b(window).load(function() {
                        b("body").children().on("click", b.noop)
                    })
                }
                return c
            })(),
            j = (function() {
                var c = document.documentElement.style;
                return ("behavior" in c && "fill" in c && /iemobile/i.test(navigator.userAgent))
            })(),
            l = function(r, s) {
                var c = o.menuClass;
                if (s.cssArrows) {
                    c += " " + o.menuArrowClass
                }
                r.toggleClass(c)
            },
            q = function(c, r) {
                return c.find("li." + r.pathClass).slice(0, r.pathLevels).addClass(r.hoverClass + " " + o.bcClass).filter(function() {
                    return (b(this).children(r.popUpSelector).hide().show().length)
                }).removeClass(r.pathClass)
            },
            m = function(c) {
                c.children("a").toggleClass(o.anchorClass)
            },
            f = function(c) {
                var r = c.css("ms-touch-action");
                r = (r === "pan-y") ? "auto" : "pan-y";
                c.css("ms-touch-action", r)
            },
            i = function(s, t) {
                var c = "li:has(" + t.popUpSelector + ")";
                if (b.fn.hoverIntent && !t.disableHI) {
                    s.hoverIntent(k, g, c)
                } else {
                    s.on("mouseenter.superfish", c, k).on("mouseleave.superfish", c, g)
                }
                var r = "MSPointerDown.superfish";
                if (!e) {
                    r += " touchend.superfish"
                }
                if (j) {
                    r += " mousedown.superfish"
                }
                s.on("focusin.superfish", "li", k).on("focusout.superfish", "li", g).on(r, "a", t, h)
            },
            h = function(s) {
                var r = b(this),
                    c = r.siblings(s.data.popUpSelector);
                if (c.length > 0 && c.is(":hidden")) {
                    r.one("click.superfish", false);
                    if (s.type === "MSPointerDown") {
                        r.trigger("focus")
                    } else {
                        b.proxy(k, r.parent("li"))()
                    }
                }
            },
            k = function() {
                var c = b(this),
                    r = n(c);
                clearTimeout(r.sfTimer);
                c.siblings().superfish("hide").end().superfish("show")
            },
            g = function() {
                var c = b(this),
                    r = n(c);
                if (e) {
                    b.proxy(p, c, r)()
                } else {
                    clearTimeout(r.sfTimer);
                    r.sfTimer = setTimeout(b.proxy(p, c, r), r.delay)
                }
            },
            p = function(c) {
                c.retainPath = (b.inArray(this[0], c.$path) > -1);
                this.superfish("hide");
                if (!this.parents("." + c.hoverClass).length) {
                    c.onIdle.call(d(this));
                    if (c.$path.length) {
                        b.proxy(k, c.$path)()
                    }
                }
            },
            d = function(c) {
                return c.closest("." + o.menuClass)
            },
            n = function(c) {
                return d(c).data("sf-options")
            };
        return {
            hide: function(r) {
                if (this.length) {
                    var u = this,
                        v = n(u);
                    if (!v) {
                        return this
                    }
                    var s = (v.retainPath === true) ? v.$path : "",
                        c = u.find("li." + v.hoverClass).add(this).not(s).removeClass(v.hoverClass).children(v.popUpSelector),
                        t = v.speedOut;
                    if (r) {
                        c.show();
                        t = 0
                    }
                    v.retainPath = false;
                    v.onBeforeHide.call(c);
                    c.stop(true, true).animate(v.animationOut, t, function() {
                        var w = b(this);
                        v.onHide.call(w)
                    })
                }
                return this
            },
            show: function() {
                var s = n(this);
                if (!s) {
                    return this
                }
                var r = this.addClass(s.hoverClass),
                    c = r.children(s.popUpSelector);
                s.onBeforeShow.call(c);
                c.stop(true, true).animate(s.animation, s.speed, function() {
                    s.onShow.call(c)
                });
                return this
            },
            destroy: function() {
                return this.each(function() {
                    var r = b(this),
                        s = r.data("sf-options"),
                        c;
                    if (!s) {
                        return false
                    }
                    c = r.find(s.popUpSelector).parent("li");
                    clearTimeout(s.sfTimer);
                    l(r, s);
                    m(c);
                    f(r);
                    r.off(".superfish").off(".hoverIntent");
                    c.children(s.popUpSelector).attr("style", function(t, u) {
                        return u.replace(/display[^;]+;?/g, "")
                    });
                    s.$path.removeClass(s.hoverClass + " " + o.bcClass).addClass(s.pathClass);
                    r.find("." + s.hoverClass).removeClass(s.hoverClass);
                    s.onDestroy.call(r);
                    r.removeData("sf-options")
                })
            },
            init: function(c) {
                return this.each(function() {
                    var s = b(this);
                    if (s.data("sf-options")) {
                        return false
                    }
                    var t = b.extend({}, b.fn.superfish.defaults, c),
                        r = s.find(t.popUpSelector).parent("li");
                    t.$path = q(s, t);
                    s.data("sf-options", t);
                    l(s, t);
                    m(r);
                    f(s);
                    i(s, t);
                    r.not("." + o.bcClass).superfish("hide", true);
                    t.onInit.call(this)
                })
            }
        }
    })();
    b.fn.superfish = function(d, c) {
        if (a[d]) {
            return a[d].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof d === "object" || !d) {
                return a.init.apply(this, arguments)
            } else {
                return b.error("Method " + d + " does not exist on jQuery.fn.superfish")
            }
        }
    };
    b.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: true,
        disableHI: false,
        onInit: b.noop,
        onBeforeShow: b.noop,
        onShow: b.noop,
        onBeforeHide: b.noop,
        onHide: b.noop,
        onIdle: b.noop,
        onDestroy: b.noop
    };
    b.fn.extend({
        hideSuperfishUl: a.hide,
        showSuperfishUl: a.show
    })
})(jQuery);

/* 7. jquery.slidemenu.js */
(function(a) {
    a.fn.spasticNav = function(b) {
        b = a.extend({
            overlap: 0,
            style: "box",
            reset: 50,
            color: "#00c6ff",
            colorOverride: true
        }, b);
        return this.each(function() {
            var h = a(this),
                i = h.find(">.current-menu-item,>.current-menu-parent,>.current-menu-ancestor"),
                g = false,
                d, f;
            if (i.length === 0) {
                i = h.find("li").eq(0);
                g = true
            }
            var c = i.find(">a");
            a('<li id="blob"></li>').css({
                width: b.style == "box" ? c.outerWidth() : c.width(),
                left: i.position().left,
                top: i.position().top - b.overlap / 2,
                opacity: g ? 0 : 1
            }).appendTo(this);
            d = a("#blob", h);
            if (b.style == "box") {
                d.css({
                    height: i.outerHeight() + b.overlap
                })
            }
            if (b.colorOverride) {
                var e = c.css("backgroundColor");
                d.css({
                    backgroundColor: g || e == "transparent" ? b.color : e
                })
            }
            h.find(">li:not(#blob)").hover(function() {
                clearTimeout(f);
                var j = a(this).find(">a");
                if (b.colorOverride) {
                    var k = j.css("backgroundColor");
                    if (k != "transparent") {
                        d.css({
                            backgroundColor: k
                        })
                    }
                }
                a(this).addClass("blob_over");
                d.css({
                    left: a(this).position().left,
                    top: a(this).position().top - b.overlap / 2,
                    width: b.style == "box" ? j.outerWidth() : j.width(),
                    opacity: 1
                })
            }, function() {
                f = setTimeout(function() {
                    var j = i.find(">a");
                    if (b.colorOverride) {
                        var k = j.css("backgroundColor");
                        if (k != "transparent") {
                            d.css({
                                backgroundColor: k
                            })
                        }
                    }
                    d.css({
                        width: b.style == "box" ? j.outerWidth() : j.width(),
                        left: i.position().left,
                        opacity: g ? 0 : 1
                    })
                }, b.reset);
                a(this).removeClass("blob_over")
            })
        })
    }
})(jQuery);

/* 8. skrollr.min.js */
! function(a, b, c) {
    "use strict";

    function d(c) {
        if (e = b.documentElement, f = b.body, T(), ha = this, c = c || {}, ma = c.constants || {}, c.easing)
            for (var d in c.easing) W[d] = c.easing[d];
        ta = c.edgeStrategy || "set", ka = {
            beforerender: c.beforerender,
            render: c.render,
            keyframe: c.keyframe
        }, la = c.forceHeight !== !1, la && (Ka = c.scale || 1), na = c.mobileDeceleration || y, pa = c.smoothScrolling !== !1, qa = c.smoothScrollingDuration || A, ra = {
            targetTop: ha.getScrollTop()
        }, Sa = (c.mobileCheck || function() {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || a.opera)
        })(), Sa ? (ja = b.getElementById(c.skrollrBody || z), ja && ga(), X(), Ea(e, [s, v], [t])) : Ea(e, [s, u], [t]), ha.refresh(), wa(a, "resize orientationchange", function() {
            var a = e.clientWidth,
                b = e.clientHeight;
            (b !== Pa || a !== Oa) && (Pa = b, Oa = a, Qa = !0)
        });
        var g = U();
        return function h() {
            $(), va = g(h)
        }(), ha
    }
    var e, f, g = {
            get: function() {
                return ha
            },
            init: function(a) {
                return ha || new d(a)
            },
            VERSION: "0.6.29"
        },
        h = Object.prototype.hasOwnProperty,
        i = a.Math,
        j = a.getComputedStyle,
        k = "touchstart",
        l = "touchmove",
        m = "touchcancel",
        n = "touchend",
        o = "skrollable",
        p = o + "-before",
        q = o + "-between",
        r = o + "-after",
        s = "skrollr",
        t = "no-" + s,
        u = s + "-desktop",
        v = s + "-mobile",
        w = "linear",
        x = 1e3,
        y = .004,
        z = "skrollr-body",
        A = 200,
        B = "start",
        C = "end",
        D = "center",
        E = "bottom",
        F = "___skrollable_id",
        G = /^(?:input|textarea|button|select)$/i,
        H = /^\s+|\s+$/g,
        I = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        J = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
        K = /^(@?[a-z\-]+)\[(\w+)\]$/,
        L = /-([a-z0-9_])/g,
        M = function(a, b) {
            return b.toUpperCase()
        },
        N = /[\-+]?[\d]*\.?[\d]+/g,
        O = /\{\?\}/g,
        P = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        Q = /[a-z\-]+-gradient/g,
        R = "",
        S = "",
        T = function() {
            var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (j) {
                var b = j(f, null);
                for (var c in b)
                    if (R = c.match(a) || +c == c && b[c].match(a)) break;
                if (!R) return void(R = S = "");
                R = R[0], "-" === R.slice(0, 1) ? (S = R, R = {
                    "-webkit-": "webkit",
                    "-moz-": "Moz",
                    "-ms-": "ms",
                    "-o-": "O"
                }[R]) : S = "-" + R.toLowerCase() + "-"
            }
        },
        U = function() {
            var b = a.requestAnimationFrame || a[R.toLowerCase() + "RequestAnimationFrame"],
                c = Ha();
            return (Sa || !b) && (b = function(b) {
                var d = Ha() - c,
                    e = i.max(0, 1e3 / 60 - d);
                return a.setTimeout(function() {
                    c = Ha(), b()
                }, e)
            }), b
        },
        V = function() {
            var b = a.cancelAnimationFrame || a[R.toLowerCase() + "CancelAnimationFrame"];
            return (Sa || !b) && (b = function(b) {
                return a.clearTimeout(b)
            }), b
        },
        W = {
            begin: function() {
                return 0
            },
            end: function() {
                return 1
            },
            linear: function(a) {
                return a
            },
            quadratic: function(a) {
                return a * a
            },
            cubic: function(a) {
                return a * a * a
            },
            swing: function(a) {
                return -i.cos(a * i.PI) / 2 + .5
            },
            sqrt: function(a) {
                return i.sqrt(a)
            },
            outCubic: function(a) {
                return i.pow(a - 1, 3) + 1
            },
            bounce: function(a) {
                var b;
                if (.5083 >= a) b = 3;
                else if (.8489 >= a) b = 9;
                else if (.96208 >= a) b = 27;
                else {
                    if (!(.99981 >= a)) return 1;
                    b = 91
                }
                return 1 - i.abs(3 * i.cos(a * b * 1.028) / b)
            }
        };
    d.prototype.refresh = function(a) {
        var d, e, f = !1;
        for (a === c ? (f = !0, ia = [], Ra = 0, a = b.getElementsByTagName("*")) : a.length === c && (a = [a]), d = 0, e = a.length; e > d; d++) {
            var g = a[d],
                h = g,
                i = [],
                j = pa,
                k = ta,
                l = !1;
            if (f && F in g && delete g[F], g.attributes) {
                for (var m = 0, n = g.attributes.length; n > m; m++) {
                    var p = g.attributes[m];
                    if ("data-anchor-target" !== p.name)
                        if ("data-smooth-scrolling" !== p.name)
                            if ("data-edge-strategy" !== p.name)
                                if ("data-emit-events" !== p.name) {
                                    var q = p.name.match(I);
                                    if (null !== q) {
                                        var r = {
                                            props: p.value,
                                            element: g,
                                            eventType: p.name.replace(L, M)
                                        };
                                        i.push(r);
                                        var s = q[1];
                                        s && (r.constant = s.substr(1));
                                        var t = q[2];
                                        /p$/.test(t) ? (r.isPercentage = !0, r.offset = (0 | t.slice(0, -1)) / 100) : r.offset = 0 | t;
                                        var u = q[3],
                                            v = q[4] || u;
                                        u && u !== B && u !== C ? (r.mode = "relative", r.anchors = [u, v]) : (r.mode = "absolute", u === C ? r.isEnd = !0 : r.isPercentage || (r.offset = r.offset * Ka))
                                    }
                                } else l = !0;
                    else k = p.value;
                    else j = "off" !== p.value;
                    else if (h = b.querySelector(p.value), null === h) throw 'Unable to find anchor target "' + p.value + '"'
                }
                if (i.length) {
                    var w, x, y;
                    !f && F in g ? (y = g[F], w = ia[y].styleAttr, x = ia[y].classAttr) : (y = g[F] = Ra++, w = g.style.cssText, x = Da(g)), ia[y] = {
                        element: g,
                        styleAttr: w,
                        classAttr: x,
                        anchorTarget: h,
                        keyFrames: i,
                        smoothScrolling: j,
                        edgeStrategy: k,
                        emitEvents: l,
                        lastFrameIndex: -1
                    }, Ea(g, [o], [])
                }
            }
        }
        for (Aa(), d = 0, e = a.length; e > d; d++) {
            var z = ia[a[d][F]];
            z !== c && (_(z), ba(z))
        }
        return ha
    }, d.prototype.relativeToAbsolute = function(a, b, c) {
        var d = e.clientHeight,
            f = a.getBoundingClientRect(),
            g = f.top,
            h = f.bottom - f.top;
        return b === E ? g -= d : b === D && (g -= d / 2), c === E ? g += h : c === D && (g += h / 2), g += ha.getScrollTop(), g + .5 | 0
    }, d.prototype.animateTo = function(a, b) {
        b = b || {};
        var d = Ha(),
            e = ha.getScrollTop(),
            f = b.duration === c ? x : b.duration;
        return oa = {
            startTop: e,
            topDiff: a - e,
            targetTop: a,
            duration: f,
            startTime: d,
            endTime: d + f,
            easing: W[b.easing || w],
            done: b.done
        }, oa.topDiff || (oa.done && oa.done.call(ha, !1), oa = c), ha
    }, d.prototype.stopAnimateTo = function() {
        oa && oa.done && oa.done.call(ha, !0), oa = c
    }, d.prototype.isAnimatingTo = function() {
        return !!oa
    }, d.prototype.isMobile = function() {
        return Sa
    }, d.prototype.setScrollTop = function(b, c) {
        return sa = c === !0, Sa ? Ta = i.min(i.max(b, 0), Ja) : a.scrollTo(0, b), ha
    }, d.prototype.getScrollTop = function() {
        return Sa ? Ta : a.pageYOffset || e.scrollTop || f.scrollTop || 0
    }, d.prototype.getMaxScrollTop = function() {
        return Ja
    }, d.prototype.on = function(a, b) {
        return ka[a] = b, ha
    }, d.prototype.off = function(a) {
        return delete ka[a], ha
    }, d.prototype.destroy = function() {
        var a = V();
        a(va), ya(), Ea(e, [t], [s, u, v]);
        for (var b = 0, d = ia.length; d > b; b++) fa(ia[b].element);
        e.style.overflow = f.style.overflow = "", e.style.height = f.style.height = "", ja && g.setStyle(ja, "transform", "none"), ha = c, ja = c, ka = c, la = c, Ja = 0, Ka = 1, ma = c, na = c, La = "down", Ma = -1, Oa = 0, Pa = 0, Qa = !1, oa = c, pa = c, qa = c, ra = c, sa = c, Ra = 0, ta = c, Sa = !1, Ta = 0, ua = c
    };
    var X = function() {
            var d, g, h, j, o, p, q, r, s, t, u, v;
            wa(e, [k, l, m, n].join(" "), function(a) {
                var e = a.changedTouches[0];
                for (j = a.target; 3 === j.nodeType;) j = j.parentNode;
                switch (o = e.clientY, p = e.clientX, t = a.timeStamp, G.test(j.tagName) || a.preventDefault(), a.type) {
                    case k:
                        d && d.blur(), ha.stopAnimateTo(), d = j, g = q = o, h = p, s = t;
                        break;
                    case l:
                        G.test(j.tagName) && b.activeElement !== j && a.preventDefault(), r = o - q, v = t - u, ha.setScrollTop(Ta - r, !0), q = o, u = t;
                        break;
                    default:
                    case m:
                    case n:
                        var f = g - o,
                            w = h - p,
                            x = w * w + f * f;
                        if (49 > x) {
                            if (!G.test(d.tagName)) {
                                d.focus();
                                var y = b.createEvent("MouseEvents");
                                y.initMouseEvent("click", !0, !0, a.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), d.dispatchEvent(y)
                            }
                            return
                        }
                        d = c;
                        var z = r / v;
                        z = i.max(i.min(z, 3), -3);
                        var A = i.abs(z / na),
                            B = z * A + .5 * na * A * A,
                            C = ha.getScrollTop() - B,
                            D = 0;
                        C > Ja ? (D = (Ja - C) / B, C = Ja) : 0 > C && (D = -C / B, C = 0), A *= 1 - D, ha.animateTo(C + .5 | 0, {
                            easing: "outCubic",
                            duration: A
                        })
                }
            }), a.scrollTo(0, 0), e.style.overflow = f.style.overflow = "hidden"
        },
        Y = function() {
            var a, b, c, d, f, g, h, j, k, l, m, n = e.clientHeight,
                o = Ba();
            for (j = 0, k = ia.length; k > j; j++)
                for (a = ia[j], b = a.element, c = a.anchorTarget, d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], l = h.offset, m = o[h.constant] || 0, h.frame = l, h.isPercentage && (l *= n, h.frame = l), "relative" === h.mode && (fa(b), h.frame = ha.relativeToAbsolute(c, h.anchors[0], h.anchors[1]) - l, fa(b, !0)), h.frame += m, la && !h.isEnd && h.frame > Ja && (Ja = h.frame);
            for (Ja = i.max(Ja, Ca()), j = 0, k = ia.length; k > j; j++) {
                for (a = ia[j], d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], m = o[h.constant] || 0, h.isEnd && (h.frame = Ja - h.offset + m);
                a.keyFrames.sort(Ia)
            }
        },
        Z = function(a, b) {
            for (var c = 0, d = ia.length; d > c; c++) {
                var e, f, i = ia[c],
                    j = i.element,
                    k = i.smoothScrolling ? a : b,
                    l = i.keyFrames,
                    m = l.length,
                    n = l[0],
                    s = l[l.length - 1],
                    t = k < n.frame,
                    u = k > s.frame,
                    v = t ? n : s,
                    w = i.emitEvents,
                    x = i.lastFrameIndex;
                if (t || u) {
                    if (t && -1 === i.edge || u && 1 === i.edge) continue;
                    switch (t ? (Ea(j, [p], [r, q]), w && x > -1 && (za(j, n.eventType, La), i.lastFrameIndex = -1)) : (Ea(j, [r], [p, q]), w && m > x && (za(j, s.eventType, La), i.lastFrameIndex = m)), i.edge = t ? -1 : 1, i.edgeStrategy) {
                        case "reset":
                            fa(j);
                            continue;
                        case "ease":
                            k = v.frame;
                            break;
                        default:
                        case "set":
                            var y = v.props;
                            for (e in y) h.call(y, e) && (f = ea(y[e].value), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f));
                            continue
                    }
                } else 0 !== i.edge && (Ea(j, [o, q], [p, r]), i.edge = 0);
                for (var z = 0; m - 1 > z; z++)
                    if (k >= l[z].frame && k <= l[z + 1].frame) {
                        var A = l[z],
                            B = l[z + 1];
                        for (e in A.props)
                            if (h.call(A.props, e)) {
                                var C = (k - A.frame) / (B.frame - A.frame);
                                C = A.props[e].easing(C), f = da(A.props[e].value, B.props[e].value, C), f = ea(f), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f)
                            }
                        w && x !== z && ("down" === La ? za(j, A.eventType, La) : za(j, B.eventType, La), i.lastFrameIndex = z);
                        break
                    }
            }
        },
        $ = function() {
            Qa && (Qa = !1, Aa());
            var a, b, d = ha.getScrollTop(),
                e = Ha();
            if (oa) e >= oa.endTime ? (d = oa.targetTop, a = oa.done, oa = c) : (b = oa.easing((e - oa.startTime) / oa.duration), d = oa.startTop + b * oa.topDiff | 0), ha.setScrollTop(d, !0);
            else if (!sa) {
                var f = ra.targetTop - d;
                f && (ra = {
                    startTop: Ma,
                    topDiff: d - Ma,
                    targetTop: d,
                    startTime: Na,
                    endTime: Na + qa
                }), e <= ra.endTime && (b = W.sqrt((e - ra.startTime) / qa), d = ra.startTop + b * ra.topDiff | 0)
            }
            if (sa || Ma !== d) {
                La = d > Ma ? "down" : Ma > d ? "up" : La, sa = !1;
                var h = {
                        curTop: d,
                        lastTop: Ma,
                        maxTop: Ja,
                        direction: La
                    },
                    i = ka.beforerender && ka.beforerender.call(ha, h);
                i !== !1 && (Z(d, ha.getScrollTop()), Sa && ja && g.setStyle(ja, "transform", "translate(0, " + -Ta + "px) " + ua), Ma = d, ka.render && ka.render.call(ha, h)), a && a.call(ha, !1)
            }
            Na = e
        },
        _ = function(a) {
            for (var b = 0, c = a.keyFrames.length; c > b; b++) {
                for (var d, e, f, g, h = a.keyFrames[b], i = {}; null !== (g = J.exec(h.props));) f = g[1], e = g[2], d = f.match(K), null !== d ? (f = d[1], d = d[2]) : d = w, e = e.indexOf("!") ? aa(e) : [e.slice(1)], i[f] = {
                    value: e,
                    easing: W[d]
                };
                h.props = i
            }
        },
        aa = function(a) {
            var b = [];
            return P.lastIndex = 0, a = a.replace(P, function(a) {
                return a.replace(N, function(a) {
                    return a / 255 * 100 + "%"
                })
            }), S && (Q.lastIndex = 0, a = a.replace(Q, function(a) {
                return S + a
            })), a = a.replace(N, function(a) {
                return b.push(+a), "{?}"
            }), b.unshift(a), b
        },
        ba = function(a) {
            var b, c, d = {};
            for (b = 0, c = a.keyFrames.length; c > b; b++) ca(a.keyFrames[b], d);
            for (d = {}, b = a.keyFrames.length - 1; b >= 0; b--) ca(a.keyFrames[b], d)
        },
        ca = function(a, b) {
            var c;
            for (c in b) h.call(a.props, c) || (a.props[c] = b[c]);
            for (c in a.props) b[c] = a.props[c]
        },
        da = function(a, b, c) {
            var d, e = a.length;
            if (e !== b.length) throw "Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"';
            var f = [a[0]];
            for (d = 1; e > d; d++) f[d] = a[d] + (b[d] - a[d]) * c;
            return f
        },
        ea = function(a) {
            var b = 1;
            return O.lastIndex = 0, a[0].replace(O, function() {
                return a[b++]
            })
        },
        fa = function(a, b) {
            a = [].concat(a);
            for (var c, d, e = 0, f = a.length; f > e; e++) d = a[e], c = ia[d[F]], c && (b ? (d.style.cssText = c.dirtyStyleAttr, Ea(d, c.dirtyClassAttr)) : (c.dirtyStyleAttr = d.style.cssText, c.dirtyClassAttr = Da(d), d.style.cssText = c.styleAttr, Ea(d, c.classAttr)))
        },
        ga = function() {
            ua = "translateZ(0)", g.setStyle(ja, "transform", ua);
            var a = j(ja),
                b = a.getPropertyValue("transform"),
                c = a.getPropertyValue(S + "transform"),
                d = b && "none" !== b || c && "none" !== c;
            d || (ua = "")
        };
    g.setStyle = function(a, b, c) {
        var d = a.style;
        if (b = b.replace(L, M).replace("-", ""), "zIndex" === b) isNaN(c) ? d[b] = c : d[b] = "" + (0 | c);
        else if ("float" === b) d.styleFloat = d.cssFloat = c;
        else try {
            R && (d[R + b.slice(0, 1).toUpperCase() + b.slice(1)] = c), d[b] = c
        } catch (e) {}
    };
    var ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa = g.addEvent = function(b, c, d) {
            var e = function(b) {
                return b = b || a.event, b.target || (b.target = b.srcElement), b.preventDefault || (b.preventDefault = function() {
                    b.returnValue = !1, b.defaultPrevented = !0
                }), d.call(this, b)
            };
            c = c.split(" ");
            for (var f, g = 0, h = c.length; h > g; g++) f = c[g], b.addEventListener ? b.addEventListener(f, d, !1) : b.attachEvent("on" + f, e), Ua.push({
                element: b,
                name: f,
                listener: d
            })
        },
        xa = g.removeEvent = function(a, b, c) {
            b = b.split(" ");
            for (var d = 0, e = b.length; e > d; d++) a.removeEventListener ? a.removeEventListener(b[d], c, !1) : a.detachEvent("on" + b[d], c)
        },
        ya = function() {
            for (var a, b = 0, c = Ua.length; c > b; b++) a = Ua[b], xa(a.element, a.name, a.listener);
            Ua = []
        },
        za = function(a, b, c) {
            ka.keyframe && ka.keyframe.call(ha, a, b, c)
        },
        Aa = function() {
            var a = ha.getScrollTop();
            Ja = 0, la && !Sa && (f.style.height = ""), Y(), la && !Sa && (f.style.height = Ja + e.clientHeight + "px"), Sa ? ha.setScrollTop(i.min(ha.getScrollTop(), Ja)) : ha.setScrollTop(a, !0), sa = !0
        },
        Ba = function() {
            var a, b, c = e.clientHeight,
                d = {};
            for (a in ma) b = ma[a], "function" == typeof b ? b = b.call(ha) : /p$/.test(b) && (b = b.slice(0, -1) / 100 * c), d[a] = b;
            return d
        },
        Ca = function() {
            var a, b = 0;
            return ja && (b = i.max(ja.offsetHeight, ja.scrollHeight)), a = i.max(b, f.scrollHeight, f.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight), a - e.clientHeight
        },
        Da = function(b) {
            var c = "className";
            return a.SVGElement && b instanceof a.SVGElement && (b = b[c], c = "baseVal"), b[c]
        },
        Ea = function(b, d, e) {
            var f = "className";
            if (a.SVGElement && b instanceof a.SVGElement && (b = b[f], f = "baseVal"), e === c) return void(b[f] = d);
            for (var g = b[f], h = 0, i = e.length; i > h; h++) g = Ga(g).replace(Ga(e[h]), " ");
            g = Fa(g);
            for (var j = 0, k = d.length; k > j; j++) - 1 === Ga(g).indexOf(Ga(d[j])) && (g += " " + d[j]);
            b[f] = Fa(g)
        },
        Fa = function(a) {
            return a.replace(H, "")
        },
        Ga = function(a) {
            return " " + a + " "
        },
        Ha = Date.now || function() {
            return +new Date
        },
        Ia = function(a, b) {
            return a.frame - b.frame
        },
        Ja = 0,
        Ka = 1,
        La = "down",
        Ma = -1,
        Na = Ha(),
        Oa = 0,
        Pa = 0,
        Qa = !1,
        Ra = 0,
        Sa = !1,
        Ta = 0,
        Ua = [];
    "function" == typeof define && define.amd ? define([], function() {
        return g
    }) : "undefined" != typeof module && module.exports ? module.exports = g : a.skrollr = g
}(window, document);

/* 9. swiper.jquery.min.js */
! function() {
    "use strict";

    function e(e) {
        e.fn.swiper = function(a) {
            var s;
            return e(this).each(function() {
                var e = new t(this, a);
                s || (s = e)
            }), s
        }
    }
    var a, t = function(e, s) {
        function r() {
            return "horizontal" === v.params.direction
        }

        function i(e) {
            return Math.floor(e)
        }

        function n() {
            v.autoplayTimeoutId = setTimeout(function() {
                v.params.loop ? (v.fixLoop(), v._slideNext()) : v.isEnd ? s.autoplayStopOnLast ? v.stopAutoplay() : v._slideTo(0) : v._slideNext()
            }, v.params.autoplay)
        }

        function o(e, t) {
            var s = a(e.target);
            if (!s.is(t))
                if ("string" == typeof t) s = s.parents(t);
                else if (t.nodeType) {
                var r;
                return s.parents().each(function(e, a) {
                    a === t && (r = t)
                }), r ? t : void 0
            }
            return 0 === s.length ? void 0 : s[0]
        }

        function l(e, a) {
            a = a || {};
            var t = window.MutationObserver || window.WebkitMutationObserver,
                s = new t(function(e) {
                    e.forEach(function(e) {
                        v.onResize(!0), v.emit("onObserverUpdate", v, e)
                    })
                });
            s.observe(e, {
                attributes: "undefined" == typeof a.attributes ? !0 : a.attributes,
                childList: "undefined" == typeof a.childList ? !0 : a.childList,
                characterData: "undefined" == typeof a.characterData ? !0 : a.characterData
            }), v.observers.push(s)
        }

        function p(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = e.keyCode || e.charCode;
            if (!v.params.allowSwipeToNext && (r() && 39 === a || !r() && 40 === a)) return !1;
            if (!v.params.allowSwipeToPrev && (r() && 37 === a || !r() && 38 === a)) return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === a || 39 === a || 38 === a || 40 === a) {
                    var t = !1;
                    if (v.container.parents(".swiper-slide").length > 0 && 0 === v.container.parents(".swiper-slide-active").length) return;
                    var s = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        },
                        i = window.innerWidth,
                        n = window.innerHeight,
                        o = v.container.offset();
                    v.rtl && (o.left = o.left - v.container[0].scrollLeft);
                    for (var l = [
                            [o.left, o.top],
                            [o.left + v.width, o.top],
                            [o.left, o.top + v.height],
                            [o.left + v.width, o.top + v.height]
                        ], p = 0; p < l.length; p++) {
                        var d = l[p];
                        d[0] >= s.left && d[0] <= s.left + i && d[1] >= s.top && d[1] <= s.top + n && (t = !0)
                    }
                    if (!t) return
                }
                r() ? ((37 === a || 39 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !v.rtl || 37 === a && v.rtl) && v.slideNext(), (37 === a && !v.rtl || 39 === a && v.rtl) && v.slidePrev()) : ((38 === a || 40 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && v.slideNext(), 38 === a && v.slidePrev())
            }
        }

        function d(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = v.mousewheel.event,
                t = 0;
            if (e.detail) t = -e.detail;
            else if ("mousewheel" === a)
                if (v.params.mousewheelForceToAxis)
                    if (r()) {
                        if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
                        t = e.wheelDeltaX
                    } else {
                        if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
                        t = e.wheelDeltaY
                    }
            else t = e.wheelDelta;
            else if ("DOMMouseScroll" === a) t = -e.detail;
            else if ("wheel" === a)
                if (v.params.mousewheelForceToAxis)
                    if (r()) {
                        if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                        t = -e.deltaX
                    } else {
                        if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                        t = -e.deltaY
                    }
            else t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
            if (v.params.mousewheelInvert && (t = -t), v.params.freeMode) {
                var s = v.getWrapperTranslate() + t * v.params.mousewheelSensitivity;
                if (s > 0 && (s = 0), s < v.maxTranslate() && (s = v.maxTranslate()), v.setWrapperTransition(0), v.setWrapperTranslate(s), v.updateProgress(), v.updateActiveIndex(), v.params.freeModeSticky && (clearTimeout(v.mousewheel.timeout), v.mousewheel.timeout = setTimeout(function() {
                        v.slideReset()
                    }, 300)), 0 === s || s === v.maxTranslate()) return
            } else {
                if ((new window.Date).getTime() - v.mousewheel.lastScrollTime > 60)
                    if (0 > t)
                        if (v.isEnd && !v.params.loop || v.animating) {
                            if (v.params.mousewheelReleaseOnEdges) return !0
                        } else v.slideNext();
                else if (v.isBeginning && !v.params.loop || v.animating) {
                    if (v.params.mousewheelReleaseOnEdges) return !0
                } else v.slidePrev();
                v.mousewheel.lastScrollTime = (new window.Date).getTime()
            }
            return v.params.autoplay && v.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
        }

        function u(e, t) {
            e = a(e);
            var s, i, n;
            s = e.attr("data-swiper-parallax") || "0", i = e.attr("data-swiper-parallax-x"), n = e.attr("data-swiper-parallax-y"), i || n ? (i = i || "0", n = n || "0") : r() ? (i = s, n = "0") : (n = s, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t + "%" : i * t + "px", n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t + "%" : n * t + "px", e.transform("translate3d(" + i + ", " + n + ",0px)")
        }

        function c(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
        }
        if (!(this instanceof t)) return new t(e, s);
        var m = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeSticky: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                scrollbar: null,
                scrollbarHide: !0,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                mousewheelSensitivity: 1,
                hashnav: !1,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                pagination: null,
                paginationElement: "span",
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null,
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationHiddenClass: "swiper-pagination-hidden",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            },
            f = s && s.virtualTranslate;
        s = s || {};
        for (var h in m)
            if ("undefined" == typeof s[h]) s[h] = m[h];
            else if ("object" == typeof s[h])
            for (var g in m[h]) "undefined" == typeof s[h][g] && (s[h][g] = m[h][g]);
        var v = this;
        if (v.version = "3.1.0", v.params = s, v.classNames = [], "undefined" != typeof a && "undefined" != typeof Dom7 && (a = Dom7), ("undefined" != typeof a || (a = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (v.$ = a, v.container = a(e), 0 !== v.container.length)) {
            if (v.container.length > 1) return void v.container.each(function() {
                new t(this, s)
            });
            v.container[0].swiper = v, v.container.data("swiper", v), v.classNames.push("swiper-container-" + v.params.direction), v.params.freeMode && v.classNames.push("swiper-container-free-mode"), v.support.flexbox || (v.classNames.push("swiper-container-no-flexbox"), v.params.slidesPerColumn = 1), (v.params.parallax || v.params.watchSlidesVisibility) && (v.params.watchSlidesProgress = !0), ["cube", "coverflow"].indexOf(v.params.effect) >= 0 && (v.support.transforms3d ? (v.params.watchSlidesProgress = !0, v.classNames.push("swiper-container-3d")) : v.params.effect = "slide"), "slide" !== v.params.effect && v.classNames.push("swiper-container-" + v.params.effect), "cube" === v.params.effect && (v.params.resistanceRatio = 0, v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.centeredSlides = !1, v.params.spaceBetween = 0, v.params.virtualTranslate = !0, v.params.setWrapperSize = !1), "fade" === v.params.effect && (v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.watchSlidesProgress = !0, v.params.spaceBetween = 0, "undefined" == typeof f && (v.params.virtualTranslate = !0)), v.params.grabCursor && v.support.touch && (v.params.grabCursor = !1), v.wrapper = v.container.children("." + v.params.wrapperClass), v.params.pagination && (v.paginationContainer = a(v.params.pagination), v.params.paginationClickable && v.paginationContainer.addClass("swiper-pagination-clickable")), v.rtl = r() && ("rtl" === v.container[0].dir.toLowerCase() || "rtl" === v.container.css("direction")), v.rtl && v.classNames.push("swiper-container-rtl"), v.rtl && (v.wrongRTL = "-webkit-box" === v.wrapper.css("display")), v.params.slidesPerColumn > 1 && v.classNames.push("swiper-container-multirow"), v.device.android && v.classNames.push("swiper-container-android"), v.container.addClass(v.classNames.join(" ")), v.translate = 0, v.progress = 0, v.velocity = 0, v.lockSwipeToNext = function() {
                v.params.allowSwipeToNext = !1
            }, v.lockSwipeToPrev = function() {
                v.params.allowSwipeToPrev = !1
            }, v.lockSwipes = function() {
                v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !1
            }, v.unlockSwipeToNext = function() {
                v.params.allowSwipeToNext = !0
            }, v.unlockSwipeToPrev = function() {
                v.params.allowSwipeToPrev = !0
            }, v.unlockSwipes = function() {
                v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !0
            }, v.params.grabCursor && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grab", v.container[0].style.cursor = "-moz-grab", v.container[0].style.cursor = "grab"), v.imagesToLoad = [], v.imagesLoaded = 0, v.loadImage = function(e, a, t, s) {
                function r() {
                    s && s()
                }
                var i;
                e.complete && t ? r() : a ? (i = new window.Image, i.onload = r, i.onerror = r, i.src = a) : r()
            }, v.preloadImages = function() {
                function e() {
                    "undefined" != typeof v && null !== v && (void 0 !== v.imagesLoaded && v.imagesLoaded++, v.imagesLoaded === v.imagesToLoad.length && (v.params.updateOnImagesReady && v.update(), v.emit("onImagesReady", v)))
                }
                v.imagesToLoad = v.container.find("img");
                for (var a = 0; a < v.imagesToLoad.length; a++) v.loadImage(v.imagesToLoad[a], v.imagesToLoad[a].currentSrc || v.imagesToLoad[a].getAttribute("src"), !0, e)
            }, v.autoplayTimeoutId = void 0, v.autoplaying = !1, v.autoplayPaused = !1, v.startAutoplay = function() {
                return "undefined" != typeof v.autoplayTimeoutId ? !1 : v.params.autoplay ? v.autoplaying ? !1 : (v.autoplaying = !0, v.emit("onAutoplayStart", v), void n()) : !1
            }, v.stopAutoplay = function(e) {
                v.autoplayTimeoutId && (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplaying = !1, v.autoplayTimeoutId = void 0, v.emit("onAutoplayStop", v))
            }, v.pauseAutoplay = function(e) {
                v.autoplayPaused || (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplayPaused = !0, 0 === e ? (v.autoplayPaused = !1, n()) : v.wrapper.transitionEnd(function() {
                    v && (v.autoplayPaused = !1, v.autoplaying ? n() : v.stopAutoplay())
                }))
            }, v.minTranslate = function() {
                return -v.snapGrid[0]
            }, v.maxTranslate = function() {
                return -v.snapGrid[v.snapGrid.length - 1]
            }, v.updateContainerSize = function() {
                var e, a;
                e = "undefined" != typeof v.params.width ? v.params.width : v.container[0].clientWidth, a = "undefined" != typeof v.params.height ? v.params.height : v.container[0].clientHeight, 0 === e && r() || 0 === a && !r() || (e = e - parseInt(v.container.css("padding-left"), 10) - parseInt(v.container.css("padding-right"), 10), a = a - parseInt(v.container.css("padding-top"), 10) - parseInt(v.container.css("padding-bottom"), 10), v.width = e, v.height = a, v.size = r() ? v.width : v.height)
            }, v.updateSlidesSize = function() {
                v.slides = v.wrapper.children("." + v.params.slideClass), v.snapGrid = [], v.slidesGrid = [], v.slidesSizesGrid = [];
                var e, a = v.params.spaceBetween,
                    t = -v.params.slidesOffsetBefore,
                    s = 0,
                    n = 0;
                "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * v.size), v.virtualSize = -a, v.slides.css(v.rtl ? {
                    marginLeft: "",
                    marginTop: ""
                } : {
                    marginRight: "",
                    marginBottom: ""
                });
                var o;
                v.params.slidesPerColumn > 1 && (o = Math.floor(v.slides.length / v.params.slidesPerColumn) === v.slides.length / v.params.slidesPerColumn ? v.slides.length : Math.ceil(v.slides.length / v.params.slidesPerColumn) * v.params.slidesPerColumn);
                var l, p = v.params.slidesPerColumn,
                    d = o / p,
                    u = d - (v.params.slidesPerColumn * d - v.slides.length);
                for (e = 0; e < v.slides.length; e++) {
                    l = 0;
                    var c = v.slides.eq(e);
                    if (v.params.slidesPerColumn > 1) {
                        var m, f, h;
                        "column" === v.params.slidesPerColumnFill ? (f = Math.floor(e / p), h = e - f * p, (f > u || f === u && h === p - 1) && ++h >= p && (h = 0, f++), m = f + h * o / p, c.css({
                            "-webkit-box-ordinal-group": m,
                            "-moz-box-ordinal-group": m,
                            "-ms-flex-order": m,
                            "-webkit-order": m,
                            order: m
                        })) : (h = Math.floor(e / d), f = e - h * d), c.css({
                            "margin-top": 0 !== h && v.params.spaceBetween && v.params.spaceBetween + "px"
                        }).attr("data-swiper-column", f).attr("data-swiper-row", h)
                    }
                    "none" !== c.css("display") && ("auto" === v.params.slidesPerView ? (l = r() ? c.outerWidth(!0) : c.outerHeight(!0), v.params.roundLengths && (l = i(l))) : (l = (v.size - (v.params.slidesPerView - 1) * a) / v.params.slidesPerView, v.params.roundLengths && (l = i(l)), r() ? v.slides[e].style.width = l + "px" : v.slides[e].style.height = l + "px"), v.slides[e].swiperSlideSize = l, v.slidesSizesGrid.push(l), v.params.centeredSlides ? (t = t + l / 2 + s / 2 + a, 0 === e && (t = t - v.size / 2 - a), Math.abs(t) < .001 && (t = 0), n % v.params.slidesPerGroup === 0 && v.snapGrid.push(t), v.slidesGrid.push(t)) : (n % v.params.slidesPerGroup === 0 && v.snapGrid.push(t), v.slidesGrid.push(t), t = t + l + a), v.virtualSize += l + a, s = l, n++)
                }
                v.virtualSize = Math.max(v.virtualSize, v.size) + v.params.slidesOffsetAfter;
                var g;
                if (v.rtl && v.wrongRTL && ("slide" === v.params.effect || "coverflow" === v.params.effect) && v.wrapper.css({
                        width: v.virtualSize + v.params.spaceBetween + "px"
                    }), (!v.support.flexbox || v.params.setWrapperSize) && v.wrapper.css(r() ? {
                        width: v.virtualSize + v.params.spaceBetween + "px"
                    } : {
                        height: v.virtualSize + v.params.spaceBetween + "px"
                    }), v.params.slidesPerColumn > 1 && (v.virtualSize = (l + v.params.spaceBetween) * o, v.virtualSize = Math.ceil(v.virtualSize / v.params.slidesPerColumn) - v.params.spaceBetween, v.wrapper.css({
                        width: v.virtualSize + v.params.spaceBetween + "px"
                    }), v.params.centeredSlides)) {
                    for (g = [], e = 0; e < v.snapGrid.length; e++) v.snapGrid[e] < v.virtualSize + v.snapGrid[0] && g.push(v.snapGrid[e]);
                    v.snapGrid = g
                }
                if (!v.params.centeredSlides) {
                    for (g = [], e = 0; e < v.snapGrid.length; e++) v.snapGrid[e] <= v.virtualSize - v.size && g.push(v.snapGrid[e]);
                    v.snapGrid = g, Math.floor(v.virtualSize - v.size) > Math.floor(v.snapGrid[v.snapGrid.length - 1]) && v.snapGrid.push(v.virtualSize - v.size)
                }
                0 === v.snapGrid.length && (v.snapGrid = [0]), 0 !== v.params.spaceBetween && v.slides.css(r() ? v.rtl ? {
                    marginLeft: a + "px"
                } : {
                    marginRight: a + "px"
                } : {
                    marginBottom: a + "px"
                }), v.params.watchSlidesProgress && v.updateSlidesOffset()
            }, v.updateSlidesOffset = function() {
                for (var e = 0; e < v.slides.length; e++) v.slides[e].swiperSlideOffset = r() ? v.slides[e].offsetLeft : v.slides[e].offsetTop
            }, v.updateSlidesProgress = function(e) {
                if ("undefined" == typeof e && (e = v.translate || 0), 0 !== v.slides.length) {
                    "undefined" == typeof v.slides[0].swiperSlideOffset && v.updateSlidesOffset();
                    var a = -e;
                    v.rtl && (a = e); {
                        v.container[0].getBoundingClientRect(), r() ? "left" : "top", r() ? "right" : "bottom"
                    }
                    v.slides.removeClass(v.params.slideVisibleClass);
                    for (var t = 0; t < v.slides.length; t++) {
                        var s = v.slides[t],
                            i = (a - s.swiperSlideOffset) / (s.swiperSlideSize + v.params.spaceBetween);
                        if (v.params.watchSlidesVisibility) {
                            var n = -(a - s.swiperSlideOffset),
                                o = n + v.slidesSizesGrid[t],
                                l = n >= 0 && n < v.size || o > 0 && o <= v.size || 0 >= n && o >= v.size;
                            l && v.slides.eq(t).addClass(v.params.slideVisibleClass)
                        }
                        s.progress = v.rtl ? -i : i
                    }
                }
            }, v.updateProgress = function(e) {
                "undefined" == typeof e && (e = v.translate || 0);
                var a = v.maxTranslate() - v.minTranslate();
                0 === a ? (v.progress = 0, v.isBeginning = v.isEnd = !0) : (v.progress = (e - v.minTranslate()) / a, v.isBeginning = v.progress <= 0, v.isEnd = v.progress >= 1), v.isBeginning && v.emit("onReachBeginning", v), v.isEnd && v.emit("onReachEnd", v), v.params.watchSlidesProgress && v.updateSlidesProgress(e), v.emit("onProgress", v, v.progress)
            }, v.updateActiveIndex = function() {
                var e, a, t, s = v.rtl ? v.translate : -v.translate;
                for (a = 0; a < v.slidesGrid.length; a++) "undefined" != typeof v.slidesGrid[a + 1] ? s >= v.slidesGrid[a] && s < v.slidesGrid[a + 1] - (v.slidesGrid[a + 1] - v.slidesGrid[a]) / 2 ? e = a : s >= v.slidesGrid[a] && s < v.slidesGrid[a + 1] && (e = a + 1) : s >= v.slidesGrid[a] && (e = a);
                (0 > e || "undefined" == typeof e) && (e = 0), t = Math.floor(e / v.params.slidesPerGroup), t >= v.snapGrid.length && (t = v.snapGrid.length - 1), e !== v.activeIndex && (v.snapIndex = t, v.previousIndex = v.activeIndex, v.activeIndex = e, v.updateClasses())
            }, v.updateClasses = function() {
                v.slides.removeClass(v.params.slideActiveClass + " " + v.params.slideNextClass + " " + v.params.slidePrevClass);
                var e = v.slides.eq(v.activeIndex);
                if (e.addClass(v.params.slideActiveClass), e.next("." + v.params.slideClass).addClass(v.params.slideNextClass), e.prev("." + v.params.slideClass).addClass(v.params.slidePrevClass), v.bullets && v.bullets.length > 0) {
                    v.bullets.removeClass(v.params.bulletActiveClass);
                    var t;
                    v.params.loop ? (t = Math.ceil(v.activeIndex - v.loopedSlides) / v.params.slidesPerGroup, t > v.slides.length - 1 - 2 * v.loopedSlides && (t -= v.slides.length - 2 * v.loopedSlides), t > v.bullets.length - 1 && (t -= v.bullets.length)) : t = "undefined" != typeof v.snapIndex ? v.snapIndex : v.activeIndex || 0, v.paginationContainer.length > 1 ? v.bullets.each(function() {
                        a(this).index() === t && a(this).addClass(v.params.bulletActiveClass)
                    }) : v.bullets.eq(t).addClass(v.params.bulletActiveClass)
                }
                v.params.loop || (v.params.prevButton && (v.isBeginning ? (a(v.params.prevButton).addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(a(v.params.prevButton))) : (a(v.params.prevButton).removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(a(v.params.prevButton)))), v.params.nextButton && (v.isEnd ? (a(v.params.nextButton).addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(a(v.params.nextButton))) : (a(v.params.nextButton).removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(a(v.params.nextButton)))))
            }, v.updatePagination = function() {
                if (v.params.pagination && v.paginationContainer && v.paginationContainer.length > 0) {
                    for (var e = "", a = v.params.loop ? Math.ceil((v.slides.length - 2 * v.loopedSlides) / v.params.slidesPerGroup) : v.snapGrid.length, t = 0; a > t; t++) e += v.params.paginationBulletRender ? v.params.paginationBulletRender(t, v.params.bulletClass) : "<" + v.params.paginationElement + ' class="' + v.params.bulletClass + '"></' + v.params.paginationElement + ">";
                    v.paginationContainer.html(e), v.bullets = v.paginationContainer.find("." + v.params.bulletClass), v.params.paginationClickable && v.params.a11y && v.a11y && v.a11y.initPagination()
                }
            }, v.update = function(e) {
                function a() {
                    s = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate()), v.setWrapperTranslate(s), v.updateActiveIndex(), v.updateClasses()
                }
                if (v.updateContainerSize(), v.updateSlidesSize(), v.updateProgress(), v.updatePagination(), v.updateClasses(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), e) {
                    var t, s;
                    v.controller && v.controller.spline && (v.controller.spline = void 0), v.params.freeMode ? a() : (t = ("auto" === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0) : v.slideTo(v.activeIndex, 0, !1, !0), t || a())
                }
            }, v.onResize = function(e) {
                var a = v.params.allowSwipeToPrev,
                    t = v.params.allowSwipeToNext;
                if (v.params.allowSwipeToPrev = v.params.allowSwipeToNext = !0, v.updateContainerSize(), v.updateSlidesSize(), ("auto" === v.params.slidesPerView || v.params.freeMode || e) && v.updatePagination(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), v.controller && v.controller.spline && (v.controller.spline = void 0), v.params.freeMode) {
                    var s = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate());
                    v.setWrapperTranslate(s), v.updateActiveIndex(), v.updateClasses()
                } else v.updateClasses(), ("auto" === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0) : v.slideTo(v.activeIndex, 0, !1, !0);
                v.params.allowSwipeToPrev = a, v.params.allowSwipeToNext = t
            };
            var w = ["mousedown", "mousemove", "mouseup"];
            window.navigator.pointerEnabled ? w = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (w = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), v.touchEvents = {
                start: v.support.touch || !v.params.simulateTouch ? "touchstart" : w[0],
                move: v.support.touch || !v.params.simulateTouch ? "touchmove" : w[1],
                end: v.support.touch || !v.params.simulateTouch ? "touchend" : w[2]
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === v.params.touchEventsTarget ? v.container : v.wrapper).addClass("swiper-wp8-" + v.params.direction), v.initEvents = function(e) {
                var t = e ? "off" : "on",
                    r = e ? "removeEventListener" : "addEventListener",
                    i = "container" === v.params.touchEventsTarget ? v.container[0] : v.wrapper[0],
                    n = v.support.touch ? i : document,
                    o = v.params.nested ? !0 : !1;
                v.browser.ie ? (i[r](v.touchEvents.start, v.onTouchStart, !1), n[r](v.touchEvents.move, v.onTouchMove, o), n[r](v.touchEvents.end, v.onTouchEnd, !1)) : (v.support.touch && (i[r](v.touchEvents.start, v.onTouchStart, !1), i[r](v.touchEvents.move, v.onTouchMove, o), i[r](v.touchEvents.end, v.onTouchEnd, !1)), !s.simulateTouch || v.device.ios || v.device.android || (i[r]("mousedown", v.onTouchStart, !1), document[r]("mousemove", v.onTouchMove, o), document[r]("mouseup", v.onTouchEnd, !1))), window[r]("resize", v.onResize), v.params.nextButton && (a(v.params.nextButton)[t]("click", v.onClickNext), v.params.a11y && v.a11y && a(v.params.nextButton)[t]("keydown", v.a11y.onEnterKey)), v.params.prevButton && (a(v.params.prevButton)[t]("click", v.onClickPrev), v.params.a11y && v.a11y && a(v.params.prevButton)[t]("keydown", v.a11y.onEnterKey)), v.params.pagination && v.params.paginationClickable && (a(v.paginationContainer)[t]("click", "." + v.params.bulletClass, v.onClickIndex), v.params.a11y && v.a11y && a(v.paginationContainer)[t]("keydown", "." + v.params.bulletClass, v.a11y.onEnterKey)), (v.params.preventClicks || v.params.preventClicksPropagation) && i[r]("click", v.preventClicks, !0)
            }, v.attachEvents = function(e) {
                v.initEvents()
            }, v.detachEvents = function() {
                v.initEvents(!0)
            }, v.allowClick = !0, v.preventClicks = function(e) {
                v.allowClick || (v.params.preventClicks && e.preventDefault(), v.params.preventClicksPropagation && v.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }, v.onClickNext = function(e) {
                e.preventDefault(), (!v.isEnd || v.params.loop) && v.slideNext()
            }, v.onClickPrev = function(e) {
                e.preventDefault(), (!v.isBeginning || v.params.loop) && v.slidePrev()
            }, v.onClickIndex = function(e) {
                e.preventDefault();
                var t = a(this).index() * v.params.slidesPerGroup;
                v.params.loop && (t += v.loopedSlides), v.slideTo(t)
            }, v.updateClickedSlide = function(e) {
                var t = o(e, "." + v.params.slideClass),
                    s = !1;
                if (t)
                    for (var r = 0; r < v.slides.length; r++) v.slides[r] === t && (s = !0);
                if (!t || !s) return v.clickedSlide = void 0, void(v.clickedIndex = void 0);
                if (v.clickedSlide = t, v.clickedIndex = a(t).index(), v.params.slideToClickedSlide && void 0 !== v.clickedIndex && v.clickedIndex !== v.activeIndex) {
                    var i, n = v.clickedIndex;
                    if (v.params.loop)
                        if (i = a(v.clickedSlide).attr("data-swiper-slide-index"), n > v.slides.length - v.params.slidesPerView) v.fixLoop(), n = v.wrapper.children("." + v.params.slideClass + '[data-swiper-slide-index="' + i + '"]').eq(0).index(), setTimeout(function() {
                            v.slideTo(n)
                        }, 0);
                        else if (n < v.params.slidesPerView - 1) {
                        v.fixLoop();
                        var l = v.wrapper.children("." + v.params.slideClass + '[data-swiper-slide-index="' + i + '"]');
                        n = l.eq(l.length - 1).index(), setTimeout(function() {
                            v.slideTo(n)
                        }, 0)
                    } else v.slideTo(n);
                    else v.slideTo(n)
                }
            };
            var y, x, b, T, S, C, M, P, z, I = "input, select, textarea, button",
                E = Date.now(),
                k = [];
            v.animating = !1, v.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var D, G;
            if (v.onTouchStart = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), D = "touchstart" === e.type, D || !("which" in e) || 3 !== e.which) {
                        if (v.params.noSwiping && o(e, "." + v.params.noSwipingClass)) return void(v.allowClick = !0);
                        if (!v.params.swipeHandler || o(e, v.params.swipeHandler)) {
                            var t = v.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                s = v.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                            if (!(v.device.ios && v.params.iOSEdgeSwipeDetection && t <= v.params.iOSEdgeSwipeThreshold)) {
                                if (y = !0, x = !1, T = void 0, G = void 0, v.touches.startX = t, v.touches.startY = s, b = Date.now(), v.allowClick = !0, v.updateContainerSize(), v.swipeDirection = void 0, v.params.threshold > 0 && (M = !1), "touchstart" !== e.type) {
                                    var r = !0;
                                    a(e.target).is(I) && (r = !1), document.activeElement && a(document.activeElement).is(I) && document.activeElement.blur(), r && e.preventDefault()
                                }
                                v.emit("onTouchStart", v, e)
                            }
                        }
                    }
                }, v.onTouchMove = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), !(D && "mousemove" === e.type || e.preventedByNestedSwiper)) {
                        if (v.params.onlyExternal) return v.allowClick = !1, void(y && (v.touches.startX = v.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, v.touches.startY = v.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, b = Date.now()));
                        if (D && document.activeElement && e.target === document.activeElement && a(e.target).is(I)) return x = !0, void(v.allowClick = !1);
                        if (v.emit("onTouchMove", v, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                            if (v.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, v.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof T) {
                                var t = 180 * Math.atan2(Math.abs(v.touches.currentY - v.touches.startY), Math.abs(v.touches.currentX - v.touches.startX)) / Math.PI;
                                T = r() ? t > v.params.touchAngle : 90 - t > v.params.touchAngle
                            }
                            if (T && v.emit("onTouchMoveOpposite", v, e), "undefined" == typeof G && v.browser.ieTouch && (v.touches.currentX !== v.touches.startX || v.touches.currentY !== v.touches.startY) && (G = !0), y) {
                                if (T) return void(y = !1);
                                if (G || !v.browser.ieTouch) {
                                    v.allowClick = !1, v.emit("onSliderMove", v, e), e.preventDefault(), v.params.touchMoveStopPropagation && !v.params.nested && e.stopPropagation(), x || (s.loop && v.fixLoop(), C = v.getWrapperTranslate(), v.setWrapperTransition(0), v.animating && v.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), v.params.autoplay && v.autoplaying && (v.params.autoplayDisableOnInteraction ? v.stopAutoplay() : v.pauseAutoplay()), z = !1, v.params.grabCursor && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grabbing", v.container[0].style.cursor = "-moz-grabbin", v.container[0].style.cursor = "grabbing")), x = !0;
                                    var i = v.touches.diff = r() ? v.touches.currentX - v.touches.startX : v.touches.currentY - v.touches.startY;
                                    i *= v.params.touchRatio, v.rtl && (i = -i), v.swipeDirection = i > 0 ? "prev" : "next", S = i + C;
                                    var n = !0;
                                    if (i > 0 && S > v.minTranslate() ? (n = !1, v.params.resistance && (S = v.minTranslate() - 1 + Math.pow(-v.minTranslate() + C + i, v.params.resistanceRatio))) : 0 > i && S < v.maxTranslate() && (n = !1, v.params.resistance && (S = v.maxTranslate() + 1 - Math.pow(v.maxTranslate() - C - i, v.params.resistanceRatio))), n && (e.preventedByNestedSwiper = !0), !v.params.allowSwipeToNext && "next" === v.swipeDirection && C > S && (S = C), !v.params.allowSwipeToPrev && "prev" === v.swipeDirection && S > C && (S = C), v.params.followFinger) {
                                        if (v.params.threshold > 0) {
                                            if (!(Math.abs(i) > v.params.threshold || M)) return void(S = C);
                                            if (!M) return M = !0, v.touches.startX = v.touches.currentX, v.touches.startY = v.touches.currentY, S = C, void(v.touches.diff = r() ? v.touches.currentX - v.touches.startX : v.touches.currentY - v.touches.startY)
                                        }(v.params.freeMode || v.params.watchSlidesProgress) && v.updateActiveIndex(), v.params.freeMode && (0 === k.length && k.push({
                                            position: v.touches[r() ? "startX" : "startY"],
                                            time: b
                                        }), k.push({
                                            position: v.touches[r() ? "currentX" : "currentY"],
                                            time: (new window.Date).getTime()
                                        })), v.updateProgress(S), v.setWrapperTranslate(S)
                                    }
                                }
                            }
                        }
                    }
                }, v.onTouchEnd = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), v.emit("onTouchEnd", v, e), y) {
                        v.params.grabCursor && x && y && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grab", v.container[0].style.cursor = "-moz-grab", v.container[0].style.cursor = "grab");
                        var t = Date.now(),
                            s = t - b;
                        if (v.allowClick && (v.updateClickedSlide(e), v.emit("onTap", v, e), 300 > s && t - E > 300 && (P && clearTimeout(P), P = setTimeout(function() {
                                v && (v.params.paginationHide && v.paginationContainer.length > 0 && !a(e.target).hasClass(v.params.bulletClass) && v.paginationContainer.toggleClass(v.params.paginationHiddenClass), v.emit("onClick", v, e))
                            }, 300)), 300 > s && 300 > t - E && (P && clearTimeout(P), v.emit("onDoubleTap", v, e))), E = Date.now(), setTimeout(function() {
                                v && (v.allowClick = !0)
                            }, 0), !y || !x || !v.swipeDirection || 0 === v.touches.diff || S === C) return void(y = x = !1);
                        y = x = !1;
                        var r;
                        if (r = v.params.followFinger ? v.rtl ? v.translate : -v.translate : -S, v.params.freeMode) {
                            if (r < -v.minTranslate()) return void v.slideTo(v.activeIndex);
                            if (r > -v.maxTranslate()) return void v.slideTo(v.slides.length < v.snapGrid.length ? v.snapGrid.length - 1 : v.slides.length - 1);
                            if (v.params.freeModeMomentum) {
                                if (k.length > 1) {
                                    var i = k.pop(),
                                        n = k.pop(),
                                        o = i.position - n.position,
                                        l = i.time - n.time;
                                    v.velocity = o / l, v.velocity = v.velocity / 2, Math.abs(v.velocity) < .02 && (v.velocity = 0), (l > 150 || (new window.Date).getTime() - i.time > 300) && (v.velocity = 0)
                                } else v.velocity = 0;
                                k.length = 0;
                                var p = 1e3 * v.params.freeModeMomentumRatio,
                                    d = v.velocity * p,
                                    u = v.translate + d;
                                v.rtl && (u = -u);
                                var c, m = !1,
                                    f = 20 * Math.abs(v.velocity) * v.params.freeModeMomentumBounceRatio;
                                if (u < v.maxTranslate()) v.params.freeModeMomentumBounce ? (u + v.maxTranslate() < -f && (u = v.maxTranslate() - f), c = v.maxTranslate(), m = !0, z = !0) : u = v.maxTranslate();
                                else if (u > v.minTranslate()) v.params.freeModeMomentumBounce ? (u - v.minTranslate() > f && (u = v.minTranslate() + f), c = v.minTranslate(), m = !0, z = !0) : u = v.minTranslate();
                                else if (v.params.freeModeSticky) {
                                    var h, g = 0;
                                    for (g = 0; g < v.snapGrid.length; g += 1)
                                        if (v.snapGrid[g] > -u) {
                                            h = g;
                                            break
                                        }
                                    u = Math.abs(v.snapGrid[h] - u) < Math.abs(v.snapGrid[h - 1] - u) || "next" === v.swipeDirection ? v.snapGrid[h] : v.snapGrid[h - 1], v.rtl || (u = -u)
                                }
                                if (0 !== v.velocity) p = Math.abs(v.rtl ? (-u - v.translate) / v.velocity : (u - v.translate) / v.velocity);
                                else if (v.params.freeModeSticky) return void v.slideReset();
                                v.params.freeModeMomentumBounce && m ? (v.updateProgress(c), v.setWrapperTransition(p), v.setWrapperTranslate(u), v.onTransitionStart(), v.animating = !0, v.wrapper.transitionEnd(function() {
                                    v && z && (v.emit("onMomentumBounce", v), v.setWrapperTransition(v.params.speed), v.setWrapperTranslate(c), v.wrapper.transitionEnd(function() {
                                        v && v.onTransitionEnd()
                                    }))
                                })) : v.velocity ? (v.updateProgress(u), v.setWrapperTransition(p), v.setWrapperTranslate(u), v.onTransitionStart(), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function() {
                                    v && v.onTransitionEnd()
                                }))) : v.updateProgress(u), v.updateActiveIndex()
                            }
                            return void((!v.params.freeModeMomentum || s >= v.params.longSwipesMs) && (v.updateProgress(), v.updateActiveIndex()))
                        }
                        var w, T = 0,
                            M = v.slidesSizesGrid[0];
                        for (w = 0; w < v.slidesGrid.length; w += v.params.slidesPerGroup) "undefined" != typeof v.slidesGrid[w + v.params.slidesPerGroup] ? r >= v.slidesGrid[w] && r < v.slidesGrid[w + v.params.slidesPerGroup] && (T = w, M = v.slidesGrid[w + v.params.slidesPerGroup] - v.slidesGrid[w]) : r >= v.slidesGrid[w] && (T = w, M = v.slidesGrid[v.slidesGrid.length - 1] - v.slidesGrid[v.slidesGrid.length - 2]);
                        var I = (r - v.slidesGrid[T]) / M;
                        if (s > v.params.longSwipesMs) {
                            if (!v.params.longSwipes) return void v.slideTo(v.activeIndex);
                            "next" === v.swipeDirection && v.slideTo(I >= v.params.longSwipesRatio ? T + v.params.slidesPerGroup : T), "prev" === v.swipeDirection && v.slideTo(I > 1 - v.params.longSwipesRatio ? T + v.params.slidesPerGroup : T)
                        } else {
                            if (!v.params.shortSwipes) return void v.slideTo(v.activeIndex);
                            "next" === v.swipeDirection && v.slideTo(T + v.params.slidesPerGroup), "prev" === v.swipeDirection && v.slideTo(T)
                        }
                    }
                }, v._slideTo = function(e, a) {
                    return v.slideTo(e, a, !0, !0)
                }, v.slideTo = function(e, a, t, s) {
                    "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), v.snapIndex = Math.floor(e / v.params.slidesPerGroup), v.snapIndex >= v.snapGrid.length && (v.snapIndex = v.snapGrid.length - 1);
                    var i = -v.snapGrid[v.snapIndex];
                    v.params.autoplay && v.autoplaying && (s || !v.params.autoplayDisableOnInteraction ? v.pauseAutoplay(a) : v.stopAutoplay()), v.updateProgress(i);
                    for (var n = 0; n < v.slidesGrid.length; n++) - Math.floor(100 * i) >= Math.floor(100 * v.slidesGrid[n]) && (e = n);
                    if (!v.params.allowSwipeToNext && i < v.translate && i < v.minTranslate()) return !1;
                    if (!v.params.allowSwipeToPrev && i > v.translate && i > v.maxTranslate() && (v.activeIndex || 0) !== e) return !1;
                    if ("undefined" == typeof a && (a = v.params.speed), v.previousIndex = v.activeIndex || 0, v.activeIndex = e, i === v.translate) return v.updateClasses(), !1;
                    v.updateClasses(), v.onTransitionStart(t);
                    r() ? i : 0, r() ? 0 : i;
                    return 0 === a ? (v.setWrapperTransition(0), v.setWrapperTranslate(i), v.onTransitionEnd(t)) : (v.setWrapperTransition(a), v.setWrapperTranslate(i), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function() {
                        v && v.onTransitionEnd(t)
                    }))), !0
                }, v.onTransitionStart = function(e) {
                    "undefined" == typeof e && (e = !0),
                        v.lazy && v.lazy.onTransitionStart(), e && (v.emit("onTransitionStart", v), v.activeIndex !== v.previousIndex && v.emit("onSlideChangeStart", v))
                }, v.onTransitionEnd = function(e) {
                    v.animating = !1, v.setWrapperTransition(0), "undefined" == typeof e && (e = !0), v.lazy && v.lazy.onTransitionEnd(), e && (v.emit("onTransitionEnd", v), v.activeIndex !== v.previousIndex && v.emit("onSlideChangeEnd", v)), v.params.hashnav && v.hashnav && v.hashnav.setHash()
                }, v.slideNext = function(e, a, t) {
                    if (v.params.loop) {
                        if (v.animating) return !1;
                        v.fixLoop(); {
                            v.container[0].clientLeft
                        }
                        return v.slideTo(v.activeIndex + v.params.slidesPerGroup, a, e, t)
                    }
                    return v.slideTo(v.activeIndex + v.params.slidesPerGroup, a, e, t)
                }, v._slideNext = function(e) {
                    return v.slideNext(!0, e, !0)
                }, v.slidePrev = function(e, a, t) {
                    if (v.params.loop) {
                        if (v.animating) return !1;
                        v.fixLoop(); {
                            v.container[0].clientLeft
                        }
                        return v.slideTo(v.activeIndex - 1, a, e, t)
                    }
                    return v.slideTo(v.activeIndex - 1, a, e, t)
                }, v._slidePrev = function(e) {
                    return v.slidePrev(!0, e, !0)
                }, v.slideReset = function(e, a, t) {
                    return v.slideTo(v.activeIndex, a, e)
                }, v.setWrapperTransition = function(e, a) {
                    v.wrapper.transition(e), "slide" !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTransition(e), v.params.parallax && v.parallax && v.parallax.setTransition(e), v.params.scrollbar && v.scrollbar && v.scrollbar.setTransition(e), v.params.control && v.controller && v.controller.setTransition(e, a), v.emit("onSetTransition", v, e)
                }, v.setWrapperTranslate = function(e, a, t) {
                    var s = 0,
                        i = 0,
                        n = 0;
                    r() ? s = v.rtl ? -e : e : i = e, v.params.virtualTranslate || v.wrapper.transform(v.support.transforms3d ? "translate3d(" + s + "px, " + i + "px, " + n + "px)" : "translate(" + s + "px, " + i + "px)"), v.translate = r() ? s : i, a && v.updateActiveIndex(), "slide" !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTranslate(v.translate), v.params.parallax && v.parallax && v.parallax.setTranslate(v.translate), v.params.scrollbar && v.scrollbar && v.scrollbar.setTranslate(v.translate), v.params.control && v.controller && v.controller.setTranslate(v.translate, t), v.emit("onSetTranslate", v, v.translate)
                }, v.getTranslate = function(e, a) {
                    var t, s, r, i;
                    return "undefined" == typeof a && (a = "x"), v.params.virtualTranslate ? v.rtl ? -v.translate : v.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? i = new window.WebKitCSSMatrix("none" === r.webkitTransform ? "" : r.webkitTransform) : (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = i.toString().split(",")), "x" === a && (s = window.WebKitCSSMatrix ? i.m41 : parseFloat(16 === t.length ? t[12] : t[4])), "y" === a && (s = window.WebKitCSSMatrix ? i.m42 : parseFloat(16 === t.length ? t[13] : t[5])), v.rtl && s && (s = -s), s || 0)
                }, v.getWrapperTranslate = function(e) {
                    return "undefined" == typeof e && (e = r() ? "x" : "y"), v.getTranslate(v.wrapper[0], e)
                }, v.observers = [], v.initObservers = function() {
                    if (v.params.observeParents)
                        for (var e = v.container.parents(), a = 0; a < e.length; a++) l(e[a]);
                    l(v.container[0], {
                        childList: !1
                    }), l(v.wrapper[0], {
                        attributes: !1
                    })
                }, v.disconnectObservers = function() {
                    for (var e = 0; e < v.observers.length; e++) v.observers[e].disconnect();
                    v.observers = []
                }, v.createLoop = function() {
                    v.wrapper.children("." + v.params.slideClass + "." + v.params.slideDuplicateClass).remove();
                    var e = v.wrapper.children("." + v.params.slideClass);
                    "auto" !== v.params.slidesPerView || v.params.loopedSlides || (v.params.loopedSlides = e.length), v.loopedSlides = parseInt(v.params.loopedSlides || v.params.slidesPerView, 10), v.loopedSlides = v.loopedSlides + v.params.loopAdditionalSlides, v.loopedSlides > e.length && (v.loopedSlides = e.length);
                    var t, s = [],
                        r = [];
                    for (e.each(function(t, i) {
                            var n = a(this);
                            t < v.loopedSlides && r.push(i), t < e.length && t >= e.length - v.loopedSlides && s.push(i), n.attr("data-swiper-slide-index", t)
                        }), t = 0; t < r.length; t++) v.wrapper.append(a(r[t].cloneNode(!0)).addClass(v.params.slideDuplicateClass));
                    for (t = s.length - 1; t >= 0; t--) v.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(v.params.slideDuplicateClass))
                }, v.destroyLoop = function() {
                    v.wrapper.children("." + v.params.slideClass + "." + v.params.slideDuplicateClass).remove(), v.slides.removeAttr("data-swiper-slide-index")
                }, v.fixLoop = function() {
                    var e;
                    v.activeIndex < v.loopedSlides ? (e = v.slides.length - 3 * v.loopedSlides + v.activeIndex, e += v.loopedSlides, v.slideTo(e, 0, !1, !0)) : ("auto" === v.params.slidesPerView && v.activeIndex >= 2 * v.loopedSlides || v.activeIndex > v.slides.length - 2 * v.params.slidesPerView) && (e = -v.slides.length + v.activeIndex + v.loopedSlides, e += v.loopedSlides, v.slideTo(e, 0, !1, !0))
                }, v.appendSlide = function(e) {
                    if (v.params.loop && v.destroyLoop(), "object" == typeof e && e.length)
                        for (var a = 0; a < e.length; a++) e[a] && v.wrapper.append(e[a]);
                    else v.wrapper.append(e);
                    v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0)
                }, v.prependSlide = function(e) {
                    v.params.loop && v.destroyLoop();
                    var a = v.activeIndex + 1;
                    if ("object" == typeof e && e.length) {
                        for (var t = 0; t < e.length; t++) e[t] && v.wrapper.prepend(e[t]);
                        a = v.activeIndex + e.length
                    } else v.wrapper.prepend(e);
                    v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0), v.slideTo(a, 0, !1)
                }, v.removeSlide = function(e) {
                    v.params.loop && (v.destroyLoop(), v.slides = v.wrapper.children("." + v.params.slideClass));
                    var a, t = v.activeIndex;
                    if ("object" == typeof e && e.length) {
                        for (var s = 0; s < e.length; s++) a = e[s], v.slides[a] && v.slides.eq(a).remove(), t > a && t--;
                        t = Math.max(t, 0)
                    } else a = e, v.slides[a] && v.slides.eq(a).remove(), t > a && t--, t = Math.max(t, 0);
                    v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0), v.params.loop ? v.slideTo(t + v.loopedSlides, 0, !1) : v.slideTo(t, 0, !1)
                }, v.removeAllSlides = function() {
                    for (var e = [], a = 0; a < v.slides.length; a++) e.push(a);
                    v.removeSlide(e)
                }, v.effects = {
                    fade: {
                        setTranslate: function() {
                            for (var e = 0; e < v.slides.length; e++) {
                                var a = v.slides.eq(e),
                                    t = a[0].swiperSlideOffset,
                                    s = -t;
                                v.params.virtualTranslate || (s -= v.translate);
                                var i = 0;
                                r() || (i = s, s = 0);
                                var n = v.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                                a.css({
                                    opacity: n
                                }).transform("translate3d(" + s + "px, " + i + "px, 0px)")
                            }
                        },
                        setTransition: function(e) {
                            if (v.slides.transition(e), v.params.virtualTranslate && 0 !== e) {
                                var a = !1;
                                v.slides.transitionEnd(function() {
                                    if (!a && v) {
                                        a = !0, v.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) v.wrapper.trigger(e[t])
                                    }
                                })
                            }
                        }
                    },
                    cube: {
                        setTranslate: function() {
                            var e, t = 0;
                            v.params.cube.shadow && (r() ? (e = v.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), v.wrapper.append(e)), e.css({
                                height: v.width + "px"
                            })) : (e = v.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), v.container.append(e))));
                            for (var s = 0; s < v.slides.length; s++) {
                                var i = v.slides.eq(s),
                                    n = 90 * s,
                                    o = Math.floor(n / 360);
                                v.rtl && (n = -n, o = Math.floor(-n / 360));
                                var l = Math.max(Math.min(i[0].progress, 1), -1),
                                    p = 0,
                                    d = 0,
                                    u = 0;
                                s % 4 === 0 ? (p = 4 * -o * v.size, u = 0) : (s - 1) % 4 === 0 ? (p = 0, u = 4 * -o * v.size) : (s - 2) % 4 === 0 ? (p = v.size + 4 * o * v.size, u = v.size) : (s - 3) % 4 === 0 && (p = -v.size, u = 3 * v.size + 4 * v.size * o), v.rtl && (p = -p), r() || (d = p, p = 0);
                                var c = "rotateX(" + (r() ? 0 : -n) + "deg) rotateY(" + (r() ? n : 0) + "deg) translate3d(" + p + "px, " + d + "px, " + u + "px)";
                                if (1 >= l && l > -1 && (t = 90 * s + 90 * l, v.rtl && (t = 90 * -s - 90 * l)), i.transform(c), v.params.cube.slideShadows) {
                                    var m = i.find(r() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                                        f = i.find(r() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                    0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (r() ? "left" : "top") + '"></div>'), i.append(m)), 0 === f.length && (f = a('<div class="swiper-slide-shadow-' + (r() ? "right" : "bottom") + '"></div>'), i.append(f)); {
                                        i[0].progress
                                    }
                                    m.length && (m[0].style.opacity = -i[0].progress), f.length && (f[0].style.opacity = i[0].progress)
                                }
                            }
                            if (v.wrapper.css({
                                    "-webkit-transform-origin": "50% 50% -" + v.size / 2 + "px",
                                    "-moz-transform-origin": "50% 50% -" + v.size / 2 + "px",
                                    "-ms-transform-origin": "50% 50% -" + v.size / 2 + "px",
                                    "transform-origin": "50% 50% -" + v.size / 2 + "px"
                                }), v.params.cube.shadow)
                                if (r()) e.transform("translate3d(0px, " + (v.width / 2 + v.params.cube.shadowOffset) + "px, " + -v.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + v.params.cube.shadowScale + ")");
                                else {
                                    var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                                        g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                                        w = v.params.cube.shadowScale,
                                        y = v.params.cube.shadowScale / g,
                                        x = v.params.cube.shadowOffset;
                                    e.transform("scale3d(" + w + ", 1, " + y + ") translate3d(0px, " + (v.height / 2 + x) + "px, " + -v.height / 2 / y + "px) rotateX(-90deg)")
                                }
                            var b = v.isSafari || v.isUiWebView ? -v.size / 2 : 0;
                            v.wrapper.transform("translate3d(0px,0," + b + "px) rotateX(" + (r() ? 0 : t) + "deg) rotateY(" + (r() ? -t : 0) + "deg)")
                        },
                        setTransition: function(e) {
                            v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), v.params.cube.shadow && !r() && v.container.find(".swiper-cube-shadow").transition(e)
                        }
                    },
                    coverflow: {
                        setTranslate: function() {
                            for (var e = v.translate, t = r() ? -e + v.width / 2 : -e + v.height / 2, s = r() ? v.params.coverflow.rotate : -v.params.coverflow.rotate, i = v.params.coverflow.depth, n = 0, o = v.slides.length; o > n; n++) {
                                var l = v.slides.eq(n),
                                    p = v.slidesSizesGrid[n],
                                    d = l[0].swiperSlideOffset,
                                    u = (t - d - p / 2) / p * v.params.coverflow.modifier,
                                    c = r() ? s * u : 0,
                                    m = r() ? 0 : s * u,
                                    f = -i * Math.abs(u),
                                    h = r() ? 0 : v.params.coverflow.stretch * u,
                                    g = r() ? v.params.coverflow.stretch * u : 0;
                                Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(f) < .001 && (f = 0), Math.abs(c) < .001 && (c = 0), Math.abs(m) < .001 && (m = 0);
                                var w = "translate3d(" + g + "px," + h + "px," + f + "px)  rotateX(" + m + "deg) rotateY(" + c + "deg)";
                                if (l.transform(w), l[0].style.zIndex = -Math.abs(Math.round(u)) + 1, v.params.coverflow.slideShadows) {
                                    var y = l.find(r() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                                        x = l.find(r() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                    0 === y.length && (y = a('<div class="swiper-slide-shadow-' + (r() ? "left" : "top") + '"></div>'), l.append(y)), 0 === x.length && (x = a('<div class="swiper-slide-shadow-' + (r() ? "right" : "bottom") + '"></div>'), l.append(x)), y.length && (y[0].style.opacity = u > 0 ? u : 0), x.length && (x[0].style.opacity = -u > 0 ? -u : 0)
                                }
                            }
                            if (v.browser.ie) {
                                var b = v.wrapper[0].style;
                                b.perspectiveOrigin = t + "px 50%"
                            }
                        },
                        setTransition: function(e) {
                            v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                        }
                    }
                }, v.lazy = {
                    initialImageLoaded: !1,
                    loadImageInSlide: function(e, t) {
                        if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== v.slides.length)) {
                            var s = v.slides.eq(e),
                                r = s.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                            !s.hasClass("swiper-lazy") || s.hasClass("swiper-lazy-loaded") || s.hasClass("swiper-lazy-loading") || r.add(s[0]), 0 !== r.length && r.each(function() {
                                var e = a(this);
                                e.addClass("swiper-lazy-loading");
                                var r = e.attr("data-background"),
                                    i = e.attr("data-src");
                                v.loadImage(e[0], i || r, !1, function() {
                                    if (r ? (e.css("background-image", "url(" + r + ")"), e.removeAttr("data-background")) : (e.attr("src", i), e.removeAttr("data-src")), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), s.find(".swiper-lazy-preloader, .preloader").remove(), v.params.loop && t) {
                                        var a = s.attr("data-swiper-slide-index");
                                        if (s.hasClass(v.params.slideDuplicateClass)) {
                                            var n = v.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + v.params.slideDuplicateClass + ")");
                                            v.lazy.loadImageInSlide(n.index(), !1)
                                        } else {
                                            var o = v.wrapper.children("." + v.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');
                                            v.lazy.loadImageInSlide(o.index(), !1)
                                        }
                                    }
                                    v.emit("onLazyImageReady", v, s[0], e[0])
                                }), v.emit("onLazyImageLoad", v, s[0], e[0])
                            })
                        }
                    },
                    load: function() {
                        var e;
                        if (v.params.watchSlidesVisibility) v.wrapper.children("." + v.params.slideVisibleClass).each(function() {
                            v.lazy.loadImageInSlide(a(this).index())
                        });
                        else if (v.params.slidesPerView > 1)
                            for (e = v.activeIndex; e < v.activeIndex + v.params.slidesPerView; e++) v.slides[e] && v.lazy.loadImageInSlide(e);
                        else v.lazy.loadImageInSlide(v.activeIndex);
                        if (v.params.lazyLoadingInPrevNext)
                            if (v.params.slidesPerView > 1) {
                                for (e = v.activeIndex + v.params.slidesPerView; e < v.activeIndex + v.params.slidesPerView + v.params.slidesPerView; e++) v.slides[e] && v.lazy.loadImageInSlide(e);
                                for (e = v.activeIndex - v.params.slidesPerView; e < v.activeIndex; e++) v.slides[e] && v.lazy.loadImageInSlide(e)
                            } else {
                                var t = v.wrapper.children("." + v.params.slideNextClass);
                                t.length > 0 && v.lazy.loadImageInSlide(t.index());
                                var s = v.wrapper.children("." + v.params.slidePrevClass);
                                s.length > 0 && v.lazy.loadImageInSlide(s.index())
                            }
                    },
                    onTransitionStart: function() {
                        v.params.lazyLoading && (v.params.lazyLoadingOnTransitionStart || !v.params.lazyLoadingOnTransitionStart && !v.lazy.initialImageLoaded) && v.lazy.load()
                    },
                    onTransitionEnd: function() {
                        v.params.lazyLoading && !v.params.lazyLoadingOnTransitionStart && v.lazy.load()
                    }
                }, v.scrollbar = {
                    set: function() {
                        if (v.params.scrollbar) {
                            var e = v.scrollbar;
                            e.track = a(v.params.scrollbar), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = r() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = v.size / v.virtualSize, e.moveDivider = e.divider * (e.trackSize / v.size), e.dragSize = e.trackSize * e.divider, r() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.track[0].style.display = e.divider >= 1 ? "none" : "", v.params.scrollbarHide && (e.track[0].style.opacity = 0)
                        }
                    },
                    setTranslate: function() {
                        if (v.params.scrollbar) {
                            var e, a = v.scrollbar,
                                t = (v.translate || 0, a.dragSize);
                            e = (a.trackSize - a.dragSize) * v.progress, v.rtl && r() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : 0 > e ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), r() ? (a.drag.transform(v.support.transforms3d ? "translate3d(" + e + "px, 0, 0)" : "translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (a.drag.transform(v.support.transforms3d ? "translate3d(0px, " + e + "px, 0)" : "translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), v.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function() {
                                a.track[0].style.opacity = 0, a.track.transition(400)
                            }, 1e3))
                        }
                    },
                    setTransition: function(e) {
                        v.params.scrollbar && v.scrollbar.drag.transition(e)
                    }
                }, v.controller = {
                    LinearSpline: function(e, a) {
                        this.x = e, this.y = a, this.lastIndex = e.length - 1; {
                            var t, s;
                            this.x.length
                        }
                        this.interpolate = function(e) {
                            return e ? (s = r(this.x, e), t = s - 1, (e - this.x[t]) * (this.y[s] - this.y[t]) / (this.x[s] - this.x[t]) + this.y[t]) : 0
                        };
                        var r = function() {
                            var e, a, t;
                            return function(s, r) {
                                for (a = -1, e = s.length; e - a > 1;) s[t = e + a >> 1] <= r ? a = t : e = t;
                                return e
                            }
                        }()
                    },
                    getInterpolateFunction: function(e) {
                        v.controller.spline || (v.controller.spline = v.params.loop ? new v.controller.LinearSpline(v.slidesGrid, e.slidesGrid) : new v.controller.LinearSpline(v.snapGrid, e.snapGrid))
                    },
                    setTranslate: function(e, a) {
                        function s(a) {
                            e = a.rtl && "horizontal" === a.params.direction ? -v.translate : v.translate, "slide" === v.params.controlBy && (v.controller.getInterpolateFunction(a), i = -v.controller.spline.interpolate(-e)), i && "container" !== v.params.controlBy || (r = (a.maxTranslate() - a.minTranslate()) / (v.maxTranslate() - v.minTranslate()), i = (e - v.minTranslate()) * r + a.minTranslate()), v.params.controlInverse && (i = a.maxTranslate() - i), a.updateProgress(i), a.setWrapperTranslate(i, !1, v), a.updateActiveIndex()
                        }
                        var r, i, n = v.params.control;
                        if (v.isArray(n))
                            for (var o = 0; o < n.length; o++) n[o] !== a && n[o] instanceof t && s(n[o]);
                        else n instanceof t && a !== n && s(n)
                    },
                    setTransition: function(e, a) {
                        function s(a) {
                            a.setWrapperTransition(e, v), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function() {
                                i && (a.params.loop && "slide" === v.params.controlBy && a.fixLoop(), a.onTransitionEnd())
                            }))
                        }
                        var r, i = v.params.control;
                        if (v.isArray(i))
                            for (r = 0; r < i.length; r++) i[r] !== a && i[r] instanceof t && s(i[r]);
                        else i instanceof t && a !== i && s(i)
                    }
                }, v.hashnav = {
                    init: function() {
                        if (v.params.hashnav) {
                            v.hashnav.initialized = !0;
                            var e = document.location.hash.replace("#", "");
                            if (e)
                                for (var a = 0, t = 0, s = v.slides.length; s > t; t++) {
                                    var r = v.slides.eq(t),
                                        i = r.attr("data-hash");
                                    if (i === e && !r.hasClass(v.params.slideDuplicateClass)) {
                                        var n = r.index();
                                        v.slideTo(n, a, v.params.runCallbacksOnInit, !0)
                                    }
                                }
                        }
                    },
                    setHash: function() {
                        v.hashnav.initialized && v.params.hashnav && (document.location.hash = v.slides.eq(v.activeIndex).attr("data-hash") || "")
                    }
                }, v.disableKeyboardControl = function() {
                    a(document).off("keydown", p)
                }, v.enableKeyboardControl = function() {
                    a(document).on("keydown", p)
                }, v.mousewheel = {
                    event: !1,
                    lastScrollTime: (new window.Date).getTime()
                }, v.params.mousewheelControl) {
                try {
                    new window.WheelEvent("wheel"), v.mousewheel.event = "wheel"
                } catch (L) {}
                v.mousewheel.event || void 0 === document.onmousewheel || (v.mousewheel.event = "mousewheel"), v.mousewheel.event || (v.mousewheel.event = "DOMMouseScroll")
            }
            v.disableMousewheelControl = function() {
                return v.mousewheel.event ? (v.container.off(v.mousewheel.event, d), !0) : !1
            }, v.enableMousewheelControl = function() {
                return v.mousewheel.event ? (v.container.on(v.mousewheel.event, d), !0) : !1
            }, v.parallax = {
                setTranslate: function() {
                    v.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        u(this, v.progress)
                    }), v.slides.each(function() {
                        var e = a(this);
                        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var a = Math.min(Math.max(e[0].progress, -1), 1);
                            u(this, a)
                        })
                    })
                },
                setTransition: function(e) {
                    "undefined" == typeof e && (e = v.params.speed), v.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var t = a(this),
                            s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (s = 0), t.transition(s)
                    })
                }
            }, v._plugins = [];
            for (var B in v.plugins) {
                var O = v.plugins[B](v, v.params[B]);
                O && v._plugins.push(O)
            }
            return v.callPlugins = function(e) {
                for (var a = 0; a < v._plugins.length; a++) e in v._plugins[a] && v._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, v.emitterEventListeners = {}, v.emit = function(e) {
                v.params[e] && v.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var a;
                if (v.emitterEventListeners[e])
                    for (a = 0; a < v.emitterEventListeners[e].length; a++) v.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                v.callPlugins && v.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, v.on = function(e, a) {
                return e = c(e), v.emitterEventListeners[e] || (v.emitterEventListeners[e] = []), v.emitterEventListeners[e].push(a), v
            }, v.off = function(e, a) {
                var t;
                if (e = c(e), "undefined" == typeof a) return v.emitterEventListeners[e] = [], v;
                if (v.emitterEventListeners[e] && 0 !== v.emitterEventListeners[e].length) {
                    for (t = 0; t < v.emitterEventListeners[e].length; t++) v.emitterEventListeners[e][t] === a && v.emitterEventListeners[e].splice(t, 1);
                    return v
                }
            }, v.once = function(e, a) {
                e = c(e);
                var t = function() {
                    a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), v.off(e, t)
                };
                return v.on(e, t), v
            }, v.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"), e
                },
                addRole: function(e, a) {
                    return e.attr("role", a), e
                },
                addLabel: function(e, a) {
                    return e.attr("aria-label", a), e
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0), e
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function(e) {
                    13 === e.keyCode && (a(e.target).is(v.params.nextButton) ? (v.onClickNext(e), v.a11y.notify(v.isEnd ? v.params.lastSlideMessage : v.params.nextSlideMessage)) : a(e.target).is(v.params.prevButton) && (v.onClickPrev(e), v.a11y.notify(v.isBeginning ? v.params.firstSlideMessage : v.params.prevSlideMessage)), a(e.target).is("." + v.params.bulletClass) && a(e.target)[0].click())
                },
                liveRegion: a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var a = v.a11y.liveRegion;
                    0 !== a.length && (a.html(""), a.html(e))
                },
                init: function() {
                    if (v.params.nextButton) {
                        var e = a(v.params.nextButton);
                        v.a11y.makeFocusable(e), v.a11y.addRole(e, "button"), v.a11y.addLabel(e, v.params.nextSlideMessage)
                    }
                    if (v.params.prevButton) {
                        var t = a(v.params.prevButton);
                        v.a11y.makeFocusable(t), v.a11y.addRole(t, "button"), v.a11y.addLabel(t, v.params.prevSlideMessage)
                    }
                    a(v.container).append(v.a11y.liveRegion)
                },
                initPagination: function() {
                    v.params.pagination && v.params.paginationClickable && v.bullets && v.bullets.length && v.bullets.each(function() {
                        var e = a(this);
                        v.a11y.makeFocusable(e), v.a11y.addRole(e, "button"), v.a11y.addLabel(e, v.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                    })
                },
                destroy: function() {
                    v.a11y.liveRegion && v.a11y.liveRegion.length > 0 && v.a11y.liveRegion.remove()
                }
            }, v.init = function() {
                v.params.loop && v.createLoop(), v.updateContainerSize(), v.updateSlidesSize(), v.updatePagination(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), "slide" !== v.params.effect && v.effects[v.params.effect] && (v.params.loop || v.updateProgress(), v.effects[v.params.effect].setTranslate()), v.params.loop ? v.slideTo(v.params.initialSlide + v.loopedSlides, 0, v.params.runCallbacksOnInit) : (v.slideTo(v.params.initialSlide, 0, v.params.runCallbacksOnInit), 0 === v.params.initialSlide && (v.parallax && v.params.parallax && v.parallax.setTranslate(), v.lazy && v.params.lazyLoading && (v.lazy.load(), v.lazy.initialImageLoaded = !0))), v.attachEvents(), v.params.observer && v.support.observer && v.initObservers(), v.params.preloadImages && !v.params.lazyLoading && v.preloadImages(), v.params.autoplay && v.startAutoplay(), v.params.keyboardControl && v.enableKeyboardControl && v.enableKeyboardControl(), v.params.mousewheelControl && v.enableMousewheelControl && v.enableMousewheelControl(), v.params.hashnav && v.hashnav && v.hashnav.init(), v.params.a11y && v.a11y && v.a11y.init(), v.emit("onInit", v)
            }, v.cleanupStyles = function() {
                v.container.removeClass(v.classNames.join(" ")).removeAttr("style"), v.wrapper.removeAttr("style"), v.slides && v.slides.length && v.slides.removeClass([v.params.slideVisibleClass, v.params.slideActiveClass, v.params.slideNextClass, v.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), v.paginationContainer && v.paginationContainer.length && v.paginationContainer.removeClass(v.params.paginationHiddenClass), v.bullets && v.bullets.length && v.bullets.removeClass(v.params.bulletActiveClass), v.params.prevButton && a(v.params.prevButton).removeClass(v.params.buttonDisabledClass), v.params.nextButton && a(v.params.nextButton).removeClass(v.params.buttonDisabledClass), v.params.scrollbar && v.scrollbar && (v.scrollbar.track && v.scrollbar.track.length && v.scrollbar.track.removeAttr("style"), v.scrollbar.drag && v.scrollbar.drag.length && v.scrollbar.drag.removeAttr("style"))
            }, v.destroy = function(e, a) {
                v.detachEvents(), v.stopAutoplay(), v.params.loop && v.destroyLoop(), a && v.cleanupStyles(), v.disconnectObservers(), v.params.keyboardControl && v.disableKeyboardControl && v.disableKeyboardControl(), v.params.mousewheelControl && v.disableMousewheelControl && v.disableMousewheelControl(), v.params.a11y && v.a11y && v.a11y.destroy(), v.emit("onDestroy"), e !== !1 && (v = null)
            }, v.init(), v
        }
    };
    t.prototype = {
        isSafari: function() {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
        },
        device: function() {
            var e = navigator.userAgent,
                a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                t = e.match(/(iPad).*OS\s([\d_]+)/),
                s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                r = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: t || r || s,
                android: a
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
                    if (a[t] in e) return !0
            }(),
            observer: function() {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }()
        },
        plugins: {}
    };
    for (var s = ["jQuery", "Zepto", "Dom7"], r = 0; r < s.length; r++) window[s[r]] && e(window[s[r]]);
    var i;
    i = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, i && ("transitionEnd" in i.fn || (i.fn.transitionEnd = function(e) {
        function a(i) {
            if (i.target === this)
                for (e.call(this, i), t = 0; t < s.length; t++) r.off(s[t], a)
        }
        var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            r = this;
        if (e)
            for (t = 0; t < s.length; t++) r.on(s[t], a);
        return this
    }), "transform" in i.fn || (i.fn.transform = function(e) {
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
        }
        return this
    }), "transition" in i.fn || (i.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
        }
        return this
    })), window.Swiper = t
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
});

/* 10. jquery.magnific-popup.min.js */
;
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof exports === "object") {
            a(require("jquery"))
        } else {
            a(window.jQuery || window.Zepto)
        }
    }
}(function(B) {
    var x = "Close",
        G = "BeforeClose",
        v = "AfterClose",
        M = "BeforeAppend",
        f = "MarkupParse",
        k = "Open",
        h = "Change",
        C = "mfp",
        d = "." + C,
        H = "mfp-ready",
        J = "mfp-removing",
        e = "mfp-prevent-close";
    var R, y = function() {},
        I = !!(window.jQuery),
        A, a = B(window),
        z, E, b, K;
    var i = function(V, W) {
            R.ev.on(C + V + d, W)
        },
        n = function(Z, W, X, V) {
            var Y = document.createElement("div");
            Y.className = "mfp-" + Z;
            if (X) {
                Y.innerHTML = X
            }
            if (!V) {
                Y = B(Y);
                if (W) {
                    Y.appendTo(W)
                }
            } else {
                if (W) {
                    W.appendChild(Y)
                }
            }
            return Y
        },
        O = function(W, V) {
            R.ev.triggerHandler(C + W, V);
            if (R.st.callbacks) {
                W = W.charAt(0).toLowerCase() + W.slice(1);
                if (R.st.callbacks[W]) {
                    R.st.callbacks[W].apply(R, B.isArray(V) ? V : [V])
                }
            }
        },
        D = function(V) {
            if (V !== K || !R.currTemplate.closeBtn) {
                R.currTemplate.closeBtn = B(R.st.closeMarkup.replace("%title%", R.st.tClose));
                K = V
            }
            return R.currTemplate.closeBtn
        },
        s = function() {
            if (!B.magnificPopup.instance) {
                R = new y();
                R.init();
                B.magnificPopup.instance = R
            }
        },
        U = function() {
            var W = document.createElement("p").style,
                V = ["ms", "O", "Moz", "Webkit"];
            if (W.transition !== undefined) {
                return true
            }
            while (V.length) {
                if (V.pop() + "Transition" in W) {
                    return true
                }
            }
            return false
        };
    y.prototype = {
        constructor: y,
        init: function() {
            var V = navigator.appVersion;
            R.isIE7 = V.indexOf("MSIE 7.") !== -1;
            R.isIE8 = V.indexOf("MSIE 8.") !== -1;
            R.isLowIE = R.isIE7 || R.isIE8;
            R.isAndroid = (/android/gi).test(V);
            R.isIOS = (/iphone|ipad|ipod/gi).test(V);
            R.supportsTransition = U();
            R.probablyMobile = (R.isAndroid || R.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
            z = B(document);
            R.popupsCache = {}
        },
        open: function(aa) {
            var ab;
            if (aa.isObj === false) {
                R.items = aa.items.toArray();
                R.index = 0;
                var ac = aa.items,
                    ad;
                for (ab = 0; ab < ac.length; ab++) {
                    ad = ac[ab];
                    if (ad.parsed) {
                        ad = ad.el[0]
                    }
                    if (ad === aa.el[0]) {
                        R.index = ab;
                        break
                    }
                }
            } else {
                R.items = B.isArray(aa.items) ? aa.items : [aa.items];
                R.index = aa.index || 0
            }
            if (R.isOpen) {
                R.updateItemHTML();
                return
            }
            R.types = [];
            b = "";
            if (aa.mainEl && aa.mainEl.length) {
                R.ev = aa.mainEl.eq(0)
            } else {
                R.ev = z
            }
            if (aa.key) {
                if (!R.popupsCache[aa.key]) {
                    R.popupsCache[aa.key] = {}
                }
                R.currTemplate = R.popupsCache[aa.key]
            } else {
                R.currTemplate = {}
            }
            R.st = B.extend(true, {}, B.magnificPopup.defaults, aa);
            R.fixedContentPos = R.st.fixedContentPos === "auto" ? !R.probablyMobile : R.st.fixedContentPos;
            if (R.st.modal) {
                R.st.closeOnContentClick = false;
                R.st.closeOnBgClick = false;
                R.st.showCloseBtn = false;
                R.st.enableEscapeKey = false
            }
            if (!R.bgOverlay) {
                R.bgOverlay = n("bg").on("click" + d, function() {
                    R.close()
                });
                R.wrap = n("wrap").attr("tabindex", -1).on("click" + d, function(af) {
                    if (R._checkIfClose(af.target)) {
                        R.close()
                    }
                });
                R.container = n("container", R.wrap)
            }
            R.contentContainer = n("content");
            if (R.st.preloader) {
                R.preloader = n("preloader", R.container, R.st.tLoading)
            }
            var Z = B.magnificPopup.modules;
            for (ab = 0; ab < Z.length; ab++) {
                var Y = Z[ab];
                Y = Y.charAt(0).toUpperCase() + Y.slice(1);
                R["init" + Y].call(R)
            }
            O("BeforeOpen");
            if (R.st.showCloseBtn) {
                if (!R.st.closeBtnInside) {
                    R.wrap.append(D())
                } else {
                    i(f, function(ai, ag, af, ah) {
                        af.close_replaceWith = D(ah.type)
                    });
                    b += " mfp-close-btn-in"
                }
            }
            if (R.st.alignTop) {
                b += " mfp-align-top"
            }
            if (R.fixedContentPos) {
                R.wrap.css({
                    overflow: R.st.overflowY,
                    overflowX: "hidden",
                    overflowY: R.st.overflowY
                })
            } else {
                R.wrap.css({
                    top: a.scrollTop(),
                    position: "absolute"
                })
            }
            if (R.st.fixedBgPos === false || (R.st.fixedBgPos === "auto" && !R.fixedContentPos)) {
                R.bgOverlay.css({
                    height: z.height(),
                    position: "absolute"
                })
            }
            if (R.st.enableEscapeKey) {
                z.on("keyup" + d, function(af) {
                    if (af.keyCode === 27) {
                        R.close()
                    }
                })
            }
            a.on("resize" + d, function() {
                R.updateSize()
            });
            if (!R.st.closeOnContentClick) {
                b += " mfp-auto-cursor"
            }
            if (b) {
                R.wrap.addClass(b)
            }
            var V = R.wH = a.height();
            var X = {};
            if (R.fixedContentPos) {
                if (R._hasScrollBar(V)) {
                    var ae = R._getScrollbarSize();
                    if (ae) {
                        X.marginRight = ae
                    }
                }
            }
            if (R.fixedContentPos) {
                if (!R.isIE7) {
                    X.overflow = "hidden"
                } else {
                    B("body, html").css("overflow", "hidden")
                }
            }
            var W = R.st.mainClass;
            if (R.isIE7) {
                W += " mfp-ie7"
            }
            if (W) {
                R._addClassToMFP(W)
            }
            R.updateItemHTML();
            O("BuildControls");
            B("html").css(X);
            R.bgOverlay.add(R.wrap).prependTo(R.st.prependTo || B(document.body));
            R._lastFocusedEl = document.activeElement;
            setTimeout(function() {
                if (R.content) {
                    R._addClassToMFP(H);
                    R._setFocus()
                } else {
                    R.bgOverlay.addClass(H)
                }
                z.on("focusin" + d, R._onFocusIn)
            }, 16);
            R.isOpen = true;
            R.updateSize(V);
            O(k);
            return aa
        },
        close: function() {
            if (!R.isOpen) {
                return
            }
            O(G);
            R.isOpen = false;
            if (R.st.removalDelay && !R.isLowIE && R.supportsTransition) {
                R._addClassToMFP(J);
                setTimeout(function() {
                    R._close()
                }, R.st.removalDelay)
            } else {
                R._close()
            }
        },
        _close: function() {
            O(x);
            var V = J + " " + H + " ";
            R.bgOverlay.detach();
            R.wrap.detach();
            R.container.empty();
            if (R.st.mainClass) {
                V += R.st.mainClass + " "
            }
            R._removeClassFromMFP(V);
            if (R.fixedContentPos) {
                var W = {
                    marginRight: ""
                };
                if (R.isIE7) {
                    B("body, html").css("overflow", "")
                } else {
                    W.overflow = ""
                }
                B("html").css(W)
            }
            z.off("keyup" + d + " focusin" + d);
            R.ev.off(d);
            R.wrap.attr("class", "mfp-wrap").removeAttr("style");
            R.bgOverlay.attr("class", "mfp-bg");
            R.container.attr("class", "mfp-container");
            if (R.st.showCloseBtn && (!R.st.closeBtnInside || R.currTemplate[R.currItem.type] === true)) {
                if (R.currTemplate.closeBtn) {
                    R.currTemplate.closeBtn.detach()
                }
            }
            if (R.st.autoFocusLast && R._lastFocusedEl) {
                B(R._lastFocusedEl).focus()
            }
            R.currItem = null;
            R.content = null;
            R.currTemplate = null;
            R.prevHeight = 0;
            O(v)
        },
        updateSize: function(W) {
            if (R.isIOS) {
                var X = document.documentElement.clientWidth / window.innerWidth;
                var V = window.innerHeight * X;
                R.wrap.css("height", V);
                R.wH = V
            } else {
                R.wH = W || a.height()
            }
            if (!R.fixedContentPos) {
                R.wrap.css("height", R.wH)
            }
            O("Resize")
        },
        updateItemHTML: function() {
            var Y = R.items[R.index];
            R.contentContainer.detach();
            if (R.content) {
                R.content.detach()
            }
            if (!Y.parsed) {
                Y = R.parseEl(R.index)
            }
            var X = Y.type;
            O("BeforeChange", [R.currItem ? R.currItem.type : "", X]);
            R.currItem = Y;
            if (!R.currTemplate[X]) {
                var W = R.st[X] ? R.st[X].markup : false;
                O("FirstMarkupParse", W);
                if (W) {
                    R.currTemplate[X] = B(W)
                } else {
                    R.currTemplate[X] = true
                }
            }
            if (E && E !== Y.type) {
                R.container.removeClass("mfp-" + E + "-holder")
            }
            var V = R["get" + X.charAt(0).toUpperCase() + X.slice(1)](Y, R.currTemplate[X]);
            R.appendContent(V, X);
            Y.preloaded = true;
            O(h, Y);
            E = Y.type;
            R.container.prepend(R.contentContainer);
            O("AfterChange")
        },
        appendContent: function(V, W) {
            R.content = V;
            if (V) {
                if (R.st.showCloseBtn && R.st.closeBtnInside && R.currTemplate[W] === true) {
                    if (!R.content.find(".mfp-close").length) {
                        R.content.append(D())
                    }
                } else {
                    R.content = V
                }
            } else {
                R.content = ""
            }
            O(M);
            R.container.addClass("mfp-" + W + "-holder");
            R.contentContainer.append(R.content)
        },
        parseEl: function(V) {
            var Z = R.items[V],
                Y;
            if (Z.tagName) {
                Z = {
                    el: B(Z)
                }
            } else {
                Y = Z.type;
                Z = {
                    data: Z,
                    src: Z.src
                }
            }
            if (Z.el) {
                var X = R.types;
                for (var W = 0; W < X.length; W++) {
                    if (Z.el.hasClass("mfp-" + X[W])) {
                        Y = X[W];
                        break
                    }
                }
                Z.src = Z.el.attr("data-mfp-src");
                if (!Z.src) {
                    Z.src = Z.el.attr("href")
                }
            }
            Z.type = Y || R.st.type || "inline";
            Z.index = V;
            Z.parsed = true;
            R.items[V] = Z;
            O("ElementParse", Z);
            return R.items[V]
        },
        addGroup: function(X, W) {
            var Y = function(Z) {
                Z.mfpEl = this;
                R._openClick(Z, X, W)
            };
            if (!W) {
                W = {}
            }
            var V = "click.magnificPopup";
            W.mainEl = X;
            if (W.items) {
                W.isObj = true;
                X.off(V).on(V, Y)
            } else {
                W.isObj = false;
                if (W.delegate) {
                    X.off(V).on(V, W.delegate, Y)
                } else {
                    W.items = X;
                    X.off(V).on(V, Y)
                }
            }
        },
        _openClick: function(Z, X, V) {
            var W = V.midClick !== undefined ? V.midClick : B.magnificPopup.defaults.midClick;
            if (!W && (Z.which === 2 || Z.ctrlKey || Z.metaKey || Z.altKey || Z.shiftKey)) {
                return
            }
            var Y = V.disableOn !== undefined ? V.disableOn : B.magnificPopup.defaults.disableOn;
            if (Y) {
                if (B.isFunction(Y)) {
                    if (!Y.call(R)) {
                        return true
                    }
                } else {
                    if (a.width() < Y) {
                        return true
                    }
                }
            }
            if (Z.type) {
                Z.preventDefault();
                if (R.isOpen) {
                    Z.stopPropagation()
                }
            }
            V.el = B(Z.mfpEl);
            if (V.delegate) {
                V.items = X.find(V.delegate)
            }
            R.open(V)
        },
        updateStatus: function(V, X) {
            if (R.preloader) {
                if (A !== V) {
                    R.container.removeClass("mfp-s-" + A)
                }
                if (!X && V === "loading") {
                    X = R.st.tLoading
                }
                var W = {
                    status: V,
                    text: X
                };
                O("UpdateStatus", W);
                V = W.status;
                X = W.text;
                R.preloader.html(X);
                R.preloader.find("a").on("click", function(Y) {
                    Y.stopImmediatePropagation()
                });
                R.container.addClass("mfp-s-" + V);
                A = V
            }
        },
        _checkIfClose: function(X) {
            if (B(X).hasClass(e)) {
                return
            }
            var V = R.st.closeOnContentClick;
            var W = R.st.closeOnBgClick;
            if (V && W) {
                return true
            } else {
                if (!R.content || B(X).hasClass("mfp-close") || (R.preloader && X === R.preloader[0])) {
                    return true
                }
                if ((X !== R.content[0] && !B.contains(R.content[0], X))) {
                    if (W) {
                        if (B.contains(document, X)) {
                            return true
                        }
                    }
                } else {
                    if (V) {
                        return true
                    }
                }
            }
            return false
        },
        _addClassToMFP: function(V) {
            R.bgOverlay.addClass(V);
            R.wrap.addClass(V)
        },
        _removeClassFromMFP: function(V) {
            this.bgOverlay.removeClass(V);
            R.wrap.removeClass(V)
        },
        _hasScrollBar: function(V) {
            return ((R.isIE7 ? z.height() : document.body.scrollHeight) > (V || a.height()))
        },
        _setFocus: function() {
            (R.st.focus ? R.content.find(R.st.focus).eq(0) : R.wrap).focus()
        },
        _onFocusIn: function(V) {
            if (V.target !== R.wrap[0] && !B.contains(R.wrap[0], V.target)) {
                R._setFocus();
                return false
            }
        },
        _parseMarkup: function(X, W, Y) {
            var V;
            if (Y.data) {
                W = B.extend(Y.data, W)
            }
            O(f, [X, W, Y]);
            B.each(W, function(aa, ac) {
                if (ac === undefined || ac === false) {
                    return true
                }
                V = aa.split("_");
                if (V.length > 1) {
                    var ab = X.find(d + "-" + V[0]);
                    if (ab.length > 0) {
                        var Z = V[1];
                        if (Z === "replaceWith") {
                            if (ab[0] !== ac[0]) {
                                ab.replaceWith(ac)
                            }
                        } else {
                            if (Z === "img") {
                                if (ab.is("img")) {
                                    ab.attr("src", ac)
                                } else {
                                    ab.replaceWith('<img src="' + ac + '" class="' + ab.attr("class") + '" />')
                                }
                            } else {
                                ab.attr(V[1], ac)
                            }
                        }
                    }
                } else {
                    X.find(d + "-" + aa).html(ac)
                }
            })
        },
        _getScrollbarSize: function() {
            if (R.scrollbarSize === undefined) {
                var V = document.createElement("div");
                V.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
                document.body.appendChild(V);
                R.scrollbarSize = V.offsetWidth - V.clientWidth;
                document.body.removeChild(V)
            }
            return R.scrollbarSize
        }
    };
    B.magnificPopup = {
        instance: null,
        proto: y.prototype,
        modules: [],
        open: function(W, V) {
            s();
            if (!W) {
                W = {}
            } else {
                W = B.extend(true, {}, W)
            }
            W.isObj = true;
            W.index = V || 0;
            return this.instance.open(W)
        },
        close: function() {
            return B.magnificPopup.instance && B.magnificPopup.instance.close()
        },
        registerModule: function(V, W) {
            if (W.options) {
                B.magnificPopup.defaults[V] = W.options
            }
            B.extend(this.proto, W.proto);
            this.modules.push(V)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: false,
            mainClass: "",
            preloader: true,
            focus: "",
            closeOnContentClick: false,
            closeOnBgClick: true,
            closeBtnInside: true,
            showCloseBtn: true,
            enableEscapeKey: true,
            modal: false,
            alignTop: false,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: true
        }
    };
    B.fn.magnificPopup = function(X) {
        s();
        var Y = B(this);
        if (typeof X === "string") {
            if (X === "open") {
                var V, Z = I ? Y.data("magnificPopup") : Y[0].magnificPopup,
                    W = parseInt(arguments[1], 10) || 0;
                if (Z.items) {
                    V = Z.items[W]
                } else {
                    V = Y;
                    if (Z.delegate) {
                        V = V.find(Z.delegate)
                    }
                    V = V.eq(W)
                }
                R._openClick({
                    mfpEl: V
                }, Y, Z)
            } else {
                if (R.isOpen) {
                    R[X].apply(R, Array.prototype.slice.call(arguments, 1))
                }
            }
        } else {
            X = B.extend(true, {}, X);
            if (I) {
                Y.data("magnificPopup", X)
            } else {
                Y[0].magnificPopup = X
            }
            R.addGroup(Y, X)
        }
        return Y
    };
    var F = "inline",
        Q, N, r, l = function() {
            if (r) {
                N.after(r.addClass(Q)).detach();
                r = null
            }
        };
    B.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                R.types.push(F);
                i(x + "." + F, function() {
                    l()
                })
            },
            getInline: function(Z, Y) {
                l();
                if (Z.src) {
                    var V = R.st.inline,
                        X = B(Z.src);
                    if (X.length) {
                        var W = X[0].parentNode;
                        if (W && W.tagName) {
                            if (!N) {
                                Q = V.hiddenClass;
                                N = n(Q);
                                Q = "mfp-" + Q
                            }
                            r = X.after(N).detach().removeClass(Q)
                        }
                        R.updateStatus("ready")
                    } else {
                        R.updateStatus("error", V.tNotFound);
                        X = B("<div>")
                    }
                    Z.inlineElement = X;
                    return X
                }
                R.updateStatus("ready");
                R._parseMarkup(Y, {}, Z);
                return Y
            }
        }
    });
    var t = "ajax",
        T, u = function() {
            if (T) {
                B(document.body).removeClass(T)
            }
        },
        S = function() {
            u();
            if (R.req) {
                R.req.abort()
            }
        };
    B.magnificPopup.registerModule(t, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                R.types.push(t);
                T = R.st.ajax.cursor;
                i(x + "." + t, S);
                i("BeforeChange." + t, S)
            },
            getAjax: function(W) {
                if (T) {
                    B(document.body).addClass(T)
                }
                R.updateStatus("loading");
                var V = B.extend({
                    url: W.src,
                    success: function(Z, aa, Y) {
                        var X = {
                            data: Z,
                            xhr: Y
                        };
                        O("ParseAjax", X);
                        R.appendContent(B(X.data), t);
                        W.finished = true;
                        u();
                        R._setFocus();
                        setTimeout(function() {
                            R.wrap.addClass(H)
                        }, 16);
                        R.updateStatus("ready");
                        O("AjaxContentAdded")
                    },
                    error: function() {
                        u();
                        W.finished = W.loadError = true;
                        R.updateStatus("error", R.st.ajax.tError.replace("%url%", W.src))
                    }
                }, R.st.ajax.settings);
                R.req = B.ajax(V);
                return ""
            }
        }
    });
    var g, c = function(V) {
        if (V.data && V.data.title !== undefined) {
            return V.data.title
        }
        var W = R.st.image.titleSrc;
        if (W) {
            if (B.isFunction(W)) {
                return W.call(R, V)
            } else {
                if (V.el) {
                    return V.el.attr(W) || ""
                }
            }
        }
        return ""
    };
    B.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: true,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var W = R.st.image,
                    V = ".image";
                R.types.push("image");
                i(k + V, function() {
                    if (R.currItem.type === "image" && W.cursor) {
                        B(document.body).addClass(W.cursor)
                    }
                });
                i(x + V, function() {
                    if (W.cursor) {
                        B(document.body).removeClass(W.cursor)
                    }
                    a.off("resize" + d)
                });
                i("Resize" + V, R.resizeImage);
                if (R.isLowIE) {
                    i("AfterChange", R.resizeImage)
                }
            },
            resizeImage: function() {
                var W = R.currItem;
                if (!W || !W.img) {
                    return
                }
                if (R.st.image.verticalFit) {
                    var V = 0;
                    if (R.isLowIE) {
                        V = parseInt(W.img.css("padding-top"), 10) + parseInt(W.img.css("padding-bottom"), 10)
                    }
                    W.img.css("max-height", R.wH - V)
                }
            },
            _onImageHasSize: function(V) {
                if (V.img) {
                    V.hasSize = true;
                    if (g) {
                        clearInterval(g)
                    }
                    V.isCheckingImgSize = false;
                    O("ImageHasSize", V);
                    if (V.imgHidden) {
                        if (R.content) {
                            R.content.removeClass("mfp-loading")
                        }
                        V.imgHidden = false
                    }
                }
            },
            findImageSize: function(Y) {
                var V = 0,
                    W = Y.img[0],
                    X = function(Z) {
                        if (g) {
                            clearInterval(g)
                        }
                        g = setInterval(function() {
                            if (W.naturalWidth > 0) {
                                R._onImageHasSize(Y);
                                return
                            }
                            if (V > 200) {
                                clearInterval(g)
                            }
                            V++;
                            if (V === 3) {
                                X(10)
                            } else {
                                if (V === 40) {
                                    X(50)
                                } else {
                                    if (V === 100) {
                                        X(500)
                                    }
                                }
                            }
                        }, Z)
                    };
                X(1)
            },
            getImage: function(ab, Y) {
                var aa = 0,
                    ac = function() {
                        if (ab) {
                            if (ab.img[0].complete) {
                                ab.img.off(".mfploader");
                                if (ab === R.currItem) {
                                    R._onImageHasSize(ab);
                                    R.updateStatus("ready")
                                }
                                ab.hasSize = true;
                                ab.loaded = true;
                                O("ImageLoadComplete")
                            } else {
                                aa++;
                                if (aa < 200) {
                                    setTimeout(ac, 100)
                                } else {
                                    V()
                                }
                            }
                        }
                    },
                    V = function() {
                        if (ab) {
                            ab.img.off(".mfploader");
                            if (ab === R.currItem) {
                                R._onImageHasSize(ab);
                                R.updateStatus("error", Z.tError.replace("%url%", ab.src))
                            }
                            ab.hasSize = true;
                            ab.loaded = true;
                            ab.loadError = true
                        }
                    },
                    Z = R.st.image;
                var X = Y.find(".mfp-img");
                if (X.length) {
                    var W = document.createElement("img");
                    W.className = "mfp-img";
                    if (ab.el && ab.el.find("img").length) {
                        W.alt = ab.el.find("img").attr("alt")
                    }
                    ab.img = B(W).on("load.mfploader", ac).on("error.mfploader", V);
                    W.src = ab.src;
                    if (X.is("img")) {
                        ab.img = ab.img.clone()
                    }
                    W = ab.img[0];
                    if (W.naturalWidth > 0) {
                        ab.hasSize = true
                    } else {
                        if (!W.width) {
                            ab.hasSize = false
                        }
                    }
                }
                R._parseMarkup(Y, {
                    title: c(ab),
                    img_replaceWith: ab.img
                }, ab);
                R.resizeImage();
                if (ab.hasSize) {
                    if (g) {
                        clearInterval(g)
                    }
                    if (ab.loadError) {
                        Y.addClass("mfp-loading");
                        R.updateStatus("error", Z.tError.replace("%url%", ab.src))
                    } else {
                        Y.removeClass("mfp-loading");
                        R.updateStatus("ready")
                    }
                    return Y
                }
                R.updateStatus("loading");
                ab.loading = true;
                if (!ab.hasSize) {
                    ab.imgHidden = true;
                    Y.addClass("mfp-loading");
                    R.findImageSize(ab)
                }
                return Y
            }
        }
    });
    var j, L = function() {
        if (j === undefined) {
            j = document.createElement("p").style.MozTransform !== undefined
        }
        return j
    };
    B.magnificPopup.registerModule("zoom", {
        options: {
            enabled: false,
            easing: "ease-in-out",
            duration: 300,
            opener: function(V) {
                return V.is("img") ? V : V.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var W = R.st.zoom,
                    Z = ".zoom",
                    ac;
                if (!W.enabled || !R.supportsTransition) {
                    return
                }
                var ab = W.duration,
                    aa = function(af) {
                        var ae = af.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            ag = "all " + (W.duration / 1000) + "s " + W.easing,
                            ah = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            },
                            ad = "transition";
                        ah["-webkit-" + ad] = ah["-moz-" + ad] = ah["-o-" + ad] = ah[ad] = ag;
                        ae.css(ah);
                        return ae
                    },
                    V = function() {
                        R.content.css("visibility", "visible")
                    },
                    X, Y;
                i("BuildControls" + Z, function() {
                    if (R._allowZoom()) {
                        clearTimeout(X);
                        R.content.css("visibility", "hidden");
                        ac = R._getItemToZoom();
                        if (!ac) {
                            V();
                            return
                        }
                        Y = aa(ac);
                        Y.css(R._getOffset());
                        R.wrap.append(Y);
                        X = setTimeout(function() {
                            Y.css(R._getOffset(true));
                            X = setTimeout(function() {
                                V();
                                setTimeout(function() {
                                    Y.remove();
                                    ac = Y = null;
                                    O("ZoomAnimationEnded")
                                }, 16)
                            }, ab)
                        }, 16)
                    }
                });
                i(G + Z, function() {
                    if (R._allowZoom()) {
                        clearTimeout(X);
                        R.st.removalDelay = ab;
                        if (!ac) {
                            ac = R._getItemToZoom();
                            if (!ac) {
                                return
                            }
                            Y = aa(ac)
                        }
                        Y.css(R._getOffset(true));
                        R.wrap.append(Y);
                        R.content.css("visibility", "hidden");
                        setTimeout(function() {
                            Y.css(R._getOffset())
                        }, 16)
                    }
                });
                i(x + Z, function() {
                    if (R._allowZoom()) {
                        V();
                        if (Y) {
                            Y.remove()
                        }
                        ac = null
                    }
                })
            },
            _allowZoom: function() {
                return R.currItem.type === "image"
            },
            _getItemToZoom: function() {
                if (R.currItem.hasSize) {
                    return R.currItem.img
                } else {
                    return false
                }
            },
            _getOffset: function(X) {
                var V;
                if (X) {
                    V = R.currItem.img
                } else {
                    V = R.st.zoom.opener(R.currItem.el || R.currItem)
                }
                var aa = V.offset();
                var W = parseInt(V.css("padding-top"), 10);
                var Z = parseInt(V.css("padding-bottom"), 10);
                aa.top -= (B(window).scrollTop() - W);
                var Y = {
                    width: V.width(),
                    height: (I ? V.innerHeight() : V[0].offsetHeight) - Z - W
                };
                if (L()) {
                    Y["-moz-transform"] = Y.transform = "translate(" + aa.left + "px," + aa.top + "px)"
                } else {
                    Y.left = aa.left;
                    Y.top = aa.top
                }
                return Y
            }
        }
    });
    var q = "iframe",
        p = "//about:blank",
        P = function(V) {
            if (R.currTemplate[q]) {
                var W = R.currTemplate[q].find("iframe");
                if (W.length) {
                    if (!V) {
                        W[0].src = p
                    }
                    if (R.isIE8) {
                        W.css("display", V ? "block" : "none")
                    }
                }
            }
        };
    B.magnificPopup.registerModule(q, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                R.types.push(q);
                i("BeforeChange", function(X, V, W) {
                    if (V !== W) {
                        if (V === q) {
                            P()
                        } else {
                            if (W === q) {
                                P(true)
                            }
                        }
                    }
                });
                i(x + "." + q, function() {
                    P()
                })
            },
            getIframe: function(Z, Y) {
                var V = Z.src;
                var X = R.st.iframe;
                B.each(X.patterns, function() {
                    if (V.indexOf(this.index) > -1) {
                        if (this.id) {
                            if (typeof this.id === "string") {
                                V = V.substr(V.lastIndexOf(this.id) + this.id.length, V.length)
                            } else {
                                V = this.id.call(this, V)
                            }
                        }
                        V = this.src.replace("%id%", V);
                        return false
                    }
                });
                var W = {};
                if (X.srcAction) {
                    W[X.srcAction] = V
                }
                R._parseMarkup(Y, W, Z);
                R.updateStatus("ready");
                return Y
            }
        }
    });
    var w = function(V) {
            var W = R.items.length;
            if (V > W - 1) {
                return V - W
            } else {
                if (V < 0) {
                    return W + V
                }
            }
            return V
        },
        o = function(X, W, V) {
            return X.replace(/%curr%/gi, W + 1).replace(/%total%/gi, V)
        };
    B.magnificPopup.registerModule("gallery", {
        options: {
            enabled: false,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: true,
            arrows: true,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var V = R.st.gallery,
                    X = ".mfp-gallery",
                    W = Boolean(B.fn.mfpFastClick);
                R.direction = true;
                if (!V || !V.enabled) {
                    return false
                }
                b += " mfp-gallery";
                i(k + X, function() {
                    if (V.navigateByImgClick) {
                        R.wrap.on("click" + X, ".mfp-img", function() {
                            if (R.items.length > 1) {
                                R.next();
                                return false
                            }
                        })
                    }
                    z.on("keydown" + X, function(Y) {
                        if (Y.keyCode === 37) {
                            R.prev()
                        } else {
                            if (Y.keyCode === 39) {
                                R.next()
                            }
                        }
                    })
                });
                i("UpdateStatus" + X, function(Z, Y) {
                    if (Y.text) {
                        Y.text = o(Y.text, R.currItem.index, R.items.length)
                    }
                });
                i(f + X, function(ac, aa, Z, ab) {
                    var Y = R.items.length;
                    Z.counter = Y > 1 ? o(V.tCounter, ab.index, Y) : ""
                });
                i("BuildControls" + X, function() {
                    if (R.items.length > 1 && V.arrows && !R.arrowLeft) {
                        var aa = V.arrowMarkup,
                            ab = R.arrowLeft = B(aa.replace(/%title%/gi, V.tPrev).replace(/%dir%/gi, "left")).addClass(e),
                            Z = R.arrowRight = B(aa.replace(/%title%/gi, V.tNext).replace(/%dir%/gi, "right")).addClass(e);
                        var Y = W ? "mfpFastClick" : "click";
                        ab[Y](function() {
                            R.prev()
                        });
                        Z[Y](function() {
                            R.next()
                        });
                        if (R.isIE7) {
                            n("b", ab[0], false, true);
                            n("a", ab[0], false, true);
                            n("b", Z[0], false, true);
                            n("a", Z[0], false, true)
                        }
                        R.content.append(ab.add(Z))
                    }
                });
                i(h + X, function() {
                    if (R._preloadTimeout) {
                        clearTimeout(R._preloadTimeout)
                    }
                    R._preloadTimeout = setTimeout(function() {
                        R.preloadNearbyImages();
                        R._preloadTimeout = null
                    }, 16)
                });
                i(x + X, function() {
                    z.off(X);
                    R.wrap.off("click" + X);
                    if (R.arrowLeft && W) {
                        R.arrowLeft.add(R.arrowRight).destroyMfpFastClick()
                    }
                    R.arrowRight = R.arrowLeft = null
                })
            },
            next: function() {
                R.direction = true;
                R.index = w(R.index + 1);
                R.updateItemHTML()
            },
            prev: function() {
                R.direction = false;
                R.index = w(R.index - 1);
                R.updateItemHTML()
            },
            goTo: function(V) {
                R.direction = (V >= R.index);
                R.index = V;
                R.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var Y = R.st.gallery.preload,
                    W = Math.min(Y[0], R.items.length),
                    X = Math.min(Y[1], R.items.length),
                    V;
                for (V = 1; V <= (R.direction ? X : W); V++) {
                    R._preloadItem(R.index + V)
                }
                for (V = 1; V <= (R.direction ? W : X); V++) {
                    R._preloadItem(R.index - V)
                }
            },
            _preloadItem: function(V) {
                V = w(V);
                if (R.items[V].preloaded) {
                    return
                }
                var W = R.items[V];
                if (!W.parsed) {
                    W = R.parseEl(V)
                }
                O("LazyLoad", W);
                if (W.type === "image") {
                    W.img = B('<img class="mfp-img" />').on("load.mfploader", function() {
                        W.hasSize = true
                    }).on("error.mfploader", function() {
                        W.hasSize = true;
                        W.loadError = true;
                        O("LazyLoadError", W)
                    }).attr("src", W.src)
                }
                W.preloaded = true
            }
        }
    });
    var m = "retina";
    B.magnificPopup.registerModule(m, {
        options: {
            replaceSrc: function(V) {
                return V.src.replace(/\.\w+$/, function(W) {
                    return "@2x" + W
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var V = R.st.retina,
                        W = V.ratio;
                    W = !isNaN(W) ? W : W();
                    if (W > 1) {
                        i("ImageHasSize." + m, function(Y, X) {
                            X.img.css({
                                "max-width": X.img[0].naturalWidth / W,
                                width: "100%"
                            })
                        });
                        i("ElementParse." + m, function(Y, X) {
                            X.src = V.replaceSrc(X, W)
                        })
                    }
                }
            }
        }
    });
    (function() {
        var W = 1000,
            Y = "ontouchstart" in window,
            Z = function() {
                a.off("touchmove" + X + " touchend" + X)
            },
            V = "mfpFastClick",
            X = "." + V;
        B.fn.mfpFastClick = function(aa) {
            return B(this).each(function() {
                var ah = B(this),
                    ag;
                if (Y) {
                    var ai, ad, ac, af, ab, ae;
                    ah.on("touchstart" + X, function(aj) {
                        af = false;
                        ae = 1;
                        ab = aj.originalEvent ? aj.originalEvent.touches[0] : aj.touches[0];
                        ad = ab.clientX;
                        ac = ab.clientY;
                        a.on("touchmove" + X, function(ak) {
                            ab = ak.originalEvent ? ak.originalEvent.touches : ak.touches;
                            ae = ab.length;
                            ab = ab[0];
                            if (Math.abs(ab.clientX - ad) > 10 || Math.abs(ab.clientY - ac) > 10) {
                                af = true;
                                Z()
                            }
                        }).on("touchend" + X, function(ak) {
                            Z();
                            if (af || ae > 1) {
                                return
                            }
                            ag = true;
                            ak.preventDefault();
                            clearTimeout(ai);
                            ai = setTimeout(function() {
                                ag = false
                            }, W);
                            aa()
                        })
                    })
                }
                ah.on("click" + X, function() {
                    if (!ag) {
                        aa()
                    }
                })
            })
        };
        B.fn.destroyMfpFastClick = function() {
            B(this).off("touchstart" + X + " click" + X);
            if (Y) {
                a.off("touchmove" + X + " touchend" + X)
            }
        }
    })();
    s()
}));

/* 11. mediaelement-and-player.min.js */
function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady()
}

function onYouTubePlayerReady(a) {
    mejs.YouTubeApi.flashReady(a)
}
var mejs = mejs || {};
mejs.version = "2.16.4", mejs.meIndex = 0, mejs.plugins = {
        silverlight: [{
            version: [3, 0],
            types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
        }],
        flash: [{
            version: [9, 0, 124],
            types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube", "application/x-mpegURL"]
        }],
        youtube: [{
            version: null,
            types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
        }],
        vimeo: [{
            version: null,
            types: ["video/vimeo", "video/x-vimeo"]
        }]
    }, mejs.Utility = {
        encodeUrl: function(a) {
            return encodeURIComponent(a)
        },
        escapeHTML: function(a) {
            return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
        },
        absolutizeUrl: function(a) {
            var b = document.createElement("div");
            return b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>', b.firstChild.href
        },
        getScriptPath: function(a) {
            for (var b, c, d, e, f, g, h = 0, i = "", j = "", k = document.getElementsByTagName("script"), l = k.length, m = a.length; l > h; h++) {
                for (e = k[h].src, c = e.lastIndexOf("/"), c > -1 ? (g = e.substring(c + 1), f = e.substring(0, c + 1)) : (g = e, f = ""), b = 0; m > b; b++)
                    if (j = a[b], d = g.indexOf(j), d > -1) {
                        i = f;
                        break
                    }
                if ("" !== i) break
            }
            return i
        },
        secondsToTimeCode: function(a, b, c, d) {
            "undefined" == typeof c ? c = !1 : "undefined" == typeof d && (d = 25);
            var e = Math.floor(a / 3600) % 24,
                f = Math.floor(a / 60) % 60,
                g = Math.floor(a % 60),
                h = Math.floor((a % 1 * d).toFixed(3)),
                i = (b || e > 0 ? (10 > e ? "0" + e : e) + ":" : "") + (10 > f ? "0" + f : f) + ":" + (10 > g ? "0" + g : g) + (c ? ":" + (10 > h ? "0" + h : h) : "");
            return i
        },
        timeCodeToSeconds: function(a, b, c, d) {
            "undefined" == typeof c ? c = !1 : "undefined" == typeof d && (d = 25);
            var e = a.split(":"),
                f = parseInt(e[0], 10),
                g = parseInt(e[1], 10),
                h = parseInt(e[2], 10),
                i = 0,
                j = 0;
            return c && (i = parseInt(e[3]) / d), j = 3600 * f + 60 * g + h + i
        },
        convertSMPTEtoSeconds: function(a) {
            if ("string" != typeof a) return !1;
            a = a.replace(",", ".");
            var b = 0,
                c = -1 != a.indexOf(".") ? a.split(".")[1].length : 0,
                d = 1;
            a = a.split(":").reverse();
            for (var e = 0; e < a.length; e++) d = 1, e > 0 && (d = Math.pow(60, e)), b += Number(a[e]) * d;
            return Number(b.toFixed(c))
        },
        removeSwf: function(a) {
            var b = document.getElementById(a);
            b && /object|embed/i.test(b.nodeName) && (mejs.MediaFeatures.isIE ? (b.style.display = "none", function() {
                4 == b.readyState ? mejs.Utility.removeObjectInIE(a) : setTimeout(arguments.callee, 10)
            }()) : b.parentNode.removeChild(b))
        },
        removeObjectInIE: function(a) {
            var b = document.getElementById(a);
            if (b) {
                for (var c in b) "function" == typeof b[c] && (b[c] = null);
                b.parentNode.removeChild(b)
            }
        }
    }, mejs.PluginDetector = {
        hasPluginVersion: function(a, b) {
            var c = this.plugins[a];
            return b[1] = b[1] || 0, b[2] = b[2] || 0, c[0] > b[0] || c[0] == b[0] && c[1] > b[1] || c[0] == b[0] && c[1] == b[1] && c[2] >= b[2] ? !0 : !1
        },
        nav: window.navigator,
        ua: window.navigator.userAgent.toLowerCase(),
        plugins: [],
        addPlugin: function(a, b, c, d, e) {
            this.plugins[a] = this.detectPlugin(b, c, d, e)
        },
        detectPlugin: function(a, b, c, d) {
            var e, f, g, h = [0, 0, 0];
            if ("undefined" != typeof this.nav.plugins && "object" == typeof this.nav.plugins[a]) {
                if (e = this.nav.plugins[a].description, e && ("undefined" == typeof this.nav.mimeTypes || !this.nav.mimeTypes[b] || this.nav.mimeTypes[b].enabledPlugin))
                    for (h = e.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."), f = 0; f < h.length; f++) h[f] = parseInt(h[f].match(/\d+/), 10)
            } else if ("undefined" != typeof window.ActiveXObject) try {
                g = new ActiveXObject(c), g && (h = d(g))
            } catch (i) {}
            return h
        }
    }, mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(a) {
        var b = [],
            c = a.GetVariable("$version");
        return c && (c = c.split(" ")[1].split(","), b = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)]), b
    }), mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(a) {
        var b = [0, 0, 0, 0],
            c = function(a, b, c, d) {
                for (; a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3]);) b[c] += d;
                b[c] -= d
            };
        return c(a, b, 0, 1), c(a, b, 1, 1), c(a, b, 2, 1e4), c(a, b, 2, 1e3), c(a, b, 2, 100), c(a, b, 2, 10), c(a, b, 2, 1), c(a, b, 3, 1), b
    }), mejs.MediaFeatures = {
        init: function() {
            var a, b, c = this,
                d = document,
                e = mejs.PluginDetector.nav,
                f = mejs.PluginDetector.ua.toLowerCase(),
                g = ["source", "track", "audio", "video"];
            c.isiPad = null !== f.match(/ipad/i), c.isiPhone = null !== f.match(/iphone/i), c.isiOS = c.isiPhone || c.isiPad, c.isAndroid = null !== f.match(/android/i), c.isBustedAndroid = null !== f.match(/android 2\.[12]/), c.isBustedNativeHTTPS = "https:" === location.protocol && (null !== f.match(/android [12]\./) || null !== f.match(/macintosh.* version.* safari/)), c.isIE = -1 != e.appName.toLowerCase().indexOf("microsoft") || null !== e.appName.toLowerCase().match(/trident/gi), c.isChrome = null !== f.match(/chrome/gi), c.isChromium = null !== f.match(/chromium/gi), c.isFirefox = null !== f.match(/firefox/gi), c.isWebkit = null !== f.match(/webkit/gi), c.isGecko = null !== f.match(/gecko/gi) && !c.isWebkit && !c.isIE, c.isOpera = null !== f.match(/opera/gi), c.hasTouch = "ontouchstart" in window, c.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
            for (a = 0; a < g.length; a++) b = document.createElement(g[a]);
            c.supportsMediaTag = "undefined" != typeof b.canPlayType || c.isBustedAndroid;
            try {
                b.canPlayType("video/mp4")
            } catch (h) {
                c.supportsMediaTag = !1
            }
            c.hasSemiNativeFullScreen = "undefined" != typeof b.webkitEnterFullscreen, c.hasNativeFullscreen = "undefined" != typeof b.requestFullscreen, c.hasWebkitNativeFullScreen = "undefined" != typeof b.webkitRequestFullScreen, c.hasMozNativeFullScreen = "undefined" != typeof b.mozRequestFullScreen, c.hasMsNativeFullScreen = "undefined" != typeof b.msRequestFullscreen, c.hasTrueNativeFullScreen = c.hasWebkitNativeFullScreen || c.hasMozNativeFullScreen || c.hasMsNativeFullScreen, c.nativeFullScreenEnabled = c.hasTrueNativeFullScreen, c.hasMozNativeFullScreen ? c.nativeFullScreenEnabled = document.mozFullScreenEnabled : c.hasMsNativeFullScreen && (c.nativeFullScreenEnabled = document.msFullscreenEnabled), c.isChrome && (c.hasSemiNativeFullScreen = !1), c.hasTrueNativeFullScreen && (c.fullScreenEventName = "", c.hasWebkitNativeFullScreen ? c.fullScreenEventName = "webkitfullscreenchange" : c.hasMozNativeFullScreen ? c.fullScreenEventName = "mozfullscreenchange" : c.hasMsNativeFullScreen && (c.fullScreenEventName = "MSFullscreenChange"), c.isFullScreen = function() {
                return c.hasMozNativeFullScreen ? d.mozFullScreen : c.hasWebkitNativeFullScreen ? d.webkitIsFullScreen : c.hasMsNativeFullScreen ? null !== d.msFullscreenElement : void 0
            }, c.requestFullScreen = function(a) {
                c.hasWebkitNativeFullScreen ? a.webkitRequestFullScreen() : c.hasMozNativeFullScreen ? a.mozRequestFullScreen() : c.hasMsNativeFullScreen && a.msRequestFullscreen()
            }, c.cancelFullScreen = function() {
                c.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : c.hasMozNativeFullScreen ? document.mozCancelFullScreen() : c.hasMsNativeFullScreen && document.msExitFullscreen()
            }), c.hasSemiNativeFullScreen && f.match(/mac os x 10_5/i) && (c.hasNativeFullScreen = !1, c.hasSemiNativeFullScreen = !1)
        }
    }, mejs.MediaFeatures.init(), mejs.HtmlMediaElement = {
        pluginType: "native",
        isFullScreen: !1,
        setCurrentTime: function(a) {
            this.currentTime = a
        },
        setMuted: function(a) {
            this.muted = a
        },
        setVolume: function(a) {
            this.volume = a
        },
        stop: function() {
            this.pause()
        },
        setSrc: function(a) {
            for (var b = this.getElementsByTagName("source"); b.length > 0;) this.removeChild(b[0]);
            if ("string" == typeof a) this.src = a;
            else {
                var c, d;
                for (c = 0; c < a.length; c++)
                    if (d = a[c], this.canPlayType(d.type)) {
                        this.src = d.src;
                        break
                    }
            }
        },
        setVideoSize: function(a, b) {
            this.width = a, this.height = b
        }
    }, mejs.PluginMediaElement = function(a, b, c) {
        this.id = a, this.pluginType = b, this.src = c, this.events = {}, this.attributes = {}
    }, mejs.PluginMediaElement.prototype = {
        pluginElement: null,
        pluginType: "",
        isFullScreen: !1,
        playbackRate: -1,
        defaultPlaybackRate: -1,
        seekable: [],
        played: [],
        paused: !0,
        ended: !1,
        seeking: !1,
        duration: 0,
        error: null,
        tagName: "",
        muted: !1,
        volume: 1,
        currentTime: 0,
        play: function() {
            null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(), this.paused = !1)
        },
        load: function() {
            null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType || this.pluginApi.loadMedia(), this.paused = !1)
        },
        pause: function() {
            null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(), this.paused = !0)
        },
        stop: function() {
            null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(), this.paused = !0)
        },
        canPlayType: function(a) {
            var b, c, d, e = mejs.plugins[this.pluginType];
            for (b = 0; b < e.length; b++)
                if (d = e[b], mejs.PluginDetector.hasPluginVersion(this.pluginType, d.version))
                    for (c = 0; c < d.types.length; c++)
                        if (a == d.types[c]) return "probably";
            return ""
        },
        positionFullscreenButton: function(a, b, c) {
            null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(a), Math.floor(b), c)
        },
        hideFullscreenButton: function() {
            null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
        },
        setSrc: function(a) {
            if ("string" == typeof a) this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a)), this.src = mejs.Utility.absolutizeUrl(a);
            else {
                var b, c;
                for (b = 0; b < a.length; b++)
                    if (c = a[b], this.canPlayType(c.type)) {
                        this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src)), this.src = mejs.Utility.absolutizeUrl(a);
                        break
                    }
            }
        },
        setCurrentTime: function(a) {
            null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.seekTo(a) : this.pluginApi.setCurrentTime(a), this.currentTime = a)
        },
        setVolume: function(a) {
            null != this.pluginApi && (this.pluginApi.setVolume("youtube" == this.pluginType ? 100 * a : a), this.volume = a)
        },
        setMuted: function(a) {
            null != this.pluginApi && ("youtube" == this.pluginType ? (a ? this.pluginApi.mute() : this.pluginApi.unMute(), this.muted = a, this.dispatchEvent("volumechange")) : this.pluginApi.setMuted(a), this.muted = a)
        },
        setVideoSize: function(a, b) {
            this.pluginElement && this.pluginElement.style && (this.pluginElement.style.width = a + "px", this.pluginElement.style.height = b + "px"), null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(a, b)
        },
        setFullscreen: function(a) {
            null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(a)
        },
        enterFullScreen: function() {
            null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0)
        },
        exitFullScreen: function() {
            null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1)
        },
        addEventListener: function(a, b) {
            this.events[a] = this.events[a] || [], this.events[a].push(b)
        },
        removeEventListener: function(a, b) {
            if (!a) return this.events = {}, !0;
            var c = this.events[a];
            if (!c) return !0;
            if (!b) return this.events[a] = [], !0;
            for (var d = 0; d < c.length; d++)
                if (c[d] === b) return this.events[a].splice(d, 1), !0;
            return !1
        },
        dispatchEvent: function(a) {
            var b, c, d = this.events[a];
            if (d)
                for (c = Array.prototype.slice.call(arguments, 1), b = 0; b < d.length; b++) d[b].apply(this, c)
        },
        hasAttribute: function(a) {
            return a in this.attributes
        },
        removeAttribute: function(a) {
            delete this.attributes[a]
        },
        getAttribute: function(a) {
            return this.hasAttribute(a) ? this.attributes[a] : ""
        },
        setAttribute: function(a, b) {
            this.attributes[a] = b
        },
        remove: function() {
            mejs.Utility.removeSwf(this.pluginElement.id), mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
        }
    }, mejs.MediaPluginBridge = {
        pluginMediaElements: {},
        htmlMediaElements: {},
        registerPluginElement: function(a, b, c) {
            this.pluginMediaElements[a] = b, this.htmlMediaElements[a] = c
        },
        unregisterPluginElement: function(a) {
            delete this.pluginMediaElements[a], delete this.htmlMediaElements[a]
        },
        initPlugin: function(a) {
            var b = this.pluginMediaElements[a],
                c = this.htmlMediaElements[a];
            if (b) {
                switch (b.pluginType) {
                    case "flash":
                        b.pluginElement = b.pluginApi = document.getElementById(a);
                        break;
                    case "silverlight":
                        b.pluginElement = document.getElementById(b.id), b.pluginApi = b.pluginElement.Content.MediaElementJS
                }
                null != b.pluginApi && b.success && b.success(b, c)
            }
        },
        fireEvent: function(a, b, c) {
            var d, e, f, g = this.pluginMediaElements[a];
            if (g) {
                d = {
                    type: b,
                    target: g
                };
                for (e in c) g[e] = c[e], d[e] = c[e];
                f = c.bufferedTime || 0, d.target.buffered = d.buffered = {
                    start: function() {
                        return 0
                    },
                    end: function() {
                        return f
                    },
                    length: 1
                }, g.dispatchEvent(d.type, d)
            }
        }
    }, mejs.MediaElementDefaults = {
        mode: "auto",
        plugins: ["flash", "silverlight", "youtube", "vimeo"],
        enablePluginDebug: !1,
        httpsBasicAuthSite: !1,
        type: "",
        pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
        flashName: "flashmediaelement.swf",
        flashStreamer: "",
        enablePluginSmoothing: !1,
        enablePseudoStreaming: !1,
        pseudoStreamingStartQueryParam: "start",
        silverlightName: "silverlightmediaelement.xap",
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        pluginWidth: -1,
        pluginHeight: -1,
        pluginVars: [],
        timerRate: 250,
        startVolume: .8,
        success: function() {},
        error: function() {}
    }, mejs.MediaElement = function(a, b) {
        return mejs.HtmlMediaElementShim.create(a, b)
    }, mejs.HtmlMediaElementShim = {
        create: function(a, b) {
            var c, d, e = mejs.MediaElementDefaults,
                f = "string" == typeof a ? document.getElementById(a) : a,
                g = f.tagName.toLowerCase(),
                h = "audio" === g || "video" === g,
                i = f.getAttribute(h ? "src" : "href"),
                j = f.getAttribute("poster"),
                k = f.getAttribute("autoplay"),
                l = f.getAttribute("preload"),
                m = f.getAttribute("controls");
            for (d in b) e[d] = b[d];
            return i = "undefined" == typeof i || null === i || "" == i ? null : i, j = "undefined" == typeof j || null === j ? "" : j, l = "undefined" == typeof l || null === l || "false" === l ? "none" : l, k = !("undefined" == typeof k || null === k || "false" === k), m = !("undefined" == typeof m || null === m || "false" === m), c = this.determinePlayback(f, e, mejs.MediaFeatures.supportsMediaTag, h, i), c.url = null !== c.url ? mejs.Utility.absolutizeUrl(c.url) : "", "native" == c.method ? (mejs.MediaFeatures.isBustedAndroid && (f.src = c.url, f.addEventListener("click", function() {
                f.play()
            }, !1)), this.updateNative(c, e, k, l)) : "" !== c.method ? this.createPlugin(c, e, j, k, l, m) : (this.createErrorMessage(c, e, j), this)
        },
        determinePlayback: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = [],
                r = {
                    method: "",
                    url: "",
                    htmlMediaElement: a,
                    isVideo: "audio" != a.tagName.toLowerCase()
                };
            if ("undefined" != typeof b.type && "" !== b.type)
                if ("string" == typeof b.type) q.push({
                    type: b.type,
                    url: e
                });
                else
                    for (f = 0; f < b.type.length; f++) q.push({
                        type: b.type[f],
                        url: e
                    });
            else if (null !== e) k = this.formatType(e, a.getAttribute("type")), q.push({
                type: k,
                url: e
            });
            else
                for (f = 0; f < a.childNodes.length; f++) j = a.childNodes[f], 1 == j.nodeType && "source" == j.tagName.toLowerCase() && (e = j.getAttribute("src"), k = this.formatType(e, j.getAttribute("type")), p = j.getAttribute("media"), (!p || !window.matchMedia || window.matchMedia && window.matchMedia(p).matches) && q.push({
                    type: k,
                    url: e
                }));
            if (!d && q.length > 0 && null !== q[0].url && this.getTypeFromFile(q[0].url).indexOf("audio") > -1 && (r.isVideo = !1), mejs.MediaFeatures.isBustedAndroid && (a.canPlayType = function(a) {
                    return null !== a.match(/video\/(mp4|m4v)/gi) ? "maybe" : ""
                }), mejs.MediaFeatures.isChromium && (a.canPlayType = function(a) {
                    return null !== a.match(/video\/(webm|ogv|ogg)/gi) ? "maybe" : ""
                }), !(!c || "auto" !== b.mode && "auto_plugin" !== b.mode && "native" !== b.mode || mejs.MediaFeatures.isBustedNativeHTTPS && b.httpsBasicAuthSite === !0)) {
                for (d || (o = document.createElement(r.isVideo ? "video" : "audio"), a.parentNode.insertBefore(o, a), a.style.display = "none", r.htmlMediaElement = a = o), f = 0; f < q.length; f++)
                    if ("video/m3u8" == q[f].type || "" !== a.canPlayType(q[f].type).replace(/no/, "") || "" !== a.canPlayType(q[f].type.replace(/mp3/, "mpeg")).replace(/no/, "") || "" !== a.canPlayType(q[f].type.replace(/m4a/, "mp4")).replace(/no/, "")) {
                        r.method = "native", r.url = q[f].url;
                        break
                    }
                if ("native" === r.method && (null !== r.url && (a.src = r.url), "auto_plugin" !== b.mode)) return r
            }
            if ("auto" === b.mode || "auto_plugin" === b.mode || "shim" === b.mode)
                for (f = 0; f < q.length; f++)
                    for (k = q[f].type, g = 0; g < b.plugins.length; g++)
                        for (l = b.plugins[g], m = mejs.plugins[l], h = 0; h < m.length; h++)
                            if (n = m[h], null == n.version || mejs.PluginDetector.hasPluginVersion(l, n.version))
                                for (i = 0; i < n.types.length; i++)
                                    if (k == n.types[i]) return r.method = l, r.url = q[f].url, r;
            return "auto_plugin" === b.mode && "native" === r.method ? r : ("" === r.method && q.length > 0 && (r.url = q[0].url), r)
        },
        formatType: function(a, b) {
            return a && !b ? this.getTypeFromFile(a) : b && ~b.indexOf(";") ? b.substr(0, b.indexOf(";")) : b
        },
        getTypeFromFile: function(a) {
            a = a.split("?")[0];
            var b = a.substring(a.lastIndexOf(".") + 1).toLowerCase();
            return (/(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(b) ? "video" : "audio") + "/" + this.getTypeFromExtension(b)
        },
        getTypeFromExtension: function(a) {
            switch (a) {
                case "mp4":
                case "m4v":
                case "m4a":
                    return "mp4";
                case "webm":
                case "webma":
                case "webmv":
                    return "webm";
                case "ogg":
                case "oga":
                case "ogv":
                    return "ogg";
                default:
                    return a
            }
        },
        createErrorMessage: function(a, b, c) {
            var d = a.htmlMediaElement,
                e = document.createElement("div");
            e.className = "me-cannotplay";
            try {
                e.style.width = d.width + "px", e.style.height = d.height + "px"
            } catch (f) {}
            e.innerHTML = b.customError ? b.customError : "" !== c ? '<a href="' + a.url + '"><img src="' + c + '" width="100%" height="100%" /></a>' : '<a href="' + a.url + '"><span>' + mejs.i18n.t("Download File") + "</span></a>", d.parentNode.insertBefore(e, d), d.style.display = "none", b.error(d)
        },
        createPlugin: function(a, b, c, d, e, f) {
            var g, h, i, j = a.htmlMediaElement,
                k = 1,
                l = 1,
                m = "me_" + a.method + "_" + mejs.meIndex++,
                n = new mejs.PluginMediaElement(m, a.method, a.url),
                o = document.createElement("div");
            n.tagName = j.tagName;
            for (var p = 0; p < j.attributes.length; p++) {
                var q = j.attributes[p];
                1 == q.specified && n.setAttribute(q.name, q.value)
            }
            for (h = j.parentNode; null !== h && "body" !== h.tagName.toLowerCase() && null != h.parentNode;) {
                if ("p" === h.parentNode.tagName.toLowerCase()) {
                    h.parentNode.parentNode.insertBefore(h, h.parentNode);
                    break
                }
                h = h.parentNode
            }
            switch (a.isVideo ? (k = b.pluginWidth > 0 ? b.pluginWidth : b.videoWidth > 0 ? b.videoWidth : null !== j.getAttribute("width") ? j.getAttribute("width") : b.defaultVideoWidth, l = b.pluginHeight > 0 ? b.pluginHeight : b.videoHeight > 0 ? b.videoHeight : null !== j.getAttribute("height") ? j.getAttribute("height") : b.defaultVideoHeight, k = mejs.Utility.encodeUrl(k), l = mejs.Utility.encodeUrl(l)) : b.enablePluginDebug && (k = 320, l = 240), n.success = b.success, mejs.MediaPluginBridge.registerPluginElement(m, n, j), o.className = "me-plugin", o.id = m + "_container", a.isVideo ? j.parentNode.insertBefore(o, j) : document.body.insertBefore(o, document.body.childNodes[0]), i = ["id=" + m, "jsinitfunction=mejs.MediaPluginBridge.initPlugin", "jscallbackfunction=mejs.MediaPluginBridge.fireEvent", "isvideo=" + (a.isVideo ? "true" : "false"), "autoplay=" + (d ? "true" : "false"), "preload=" + e, "width=" + k, "startvolume=" + b.startVolume, "timerrate=" + b.timerRate, "flashstreamer=" + b.flashStreamer, "height=" + l, "pseudostreamstart=" + b.pseudoStreamingStartQueryParam], null !== a.url && i.push("flash" == a.method ? "file=" + mejs.Utility.encodeUrl(a.url) : "file=" + a.url), b.enablePluginDebug && i.push("debug=true"), b.enablePluginSmoothing && i.push("smoothing=true"), b.enablePseudoStreaming && i.push("pseudostreaming=true"), f && i.push("controls=true"), b.pluginVars && (i = i.concat(b.pluginVars)), a.method) {
                case "silverlight":
                    o.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + m + '" name="' + m + '" width="' + k + '" height="' + l + '" class="mejs-shim"><param name="initParams" value="' + i.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + b.pluginPath + b.silverlightName + '" /></object>';
                    break;
                case "flash":
                    mejs.MediaFeatures.isIE ? (g = document.createElement("div"), o.appendChild(g), g.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + m + '" width="' + k + '" height="' + l + '" class="mejs-shim"><param name="movie" value="' + b.pluginPath + b.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + i.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>') : o.innerHTML = '<embed id="' + m + '" name="' + m + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + b.pluginPath + b.flashName + '" flashvars="' + i.join("&") + '" width="' + k + '" height="' + l + '" scale="default"class="mejs-shim"></embed>';
                    break;
                case "youtube":
                    var r; - 1 != a.url.lastIndexOf("youtu.be") ? (r = a.url.substr(a.url.lastIndexOf("/") + 1), -1 != r.indexOf("?") && (r = r.substr(0, r.indexOf("?")))) : r = a.url.substr(a.url.lastIndexOf("=") + 1), youtubeSettings = {
                        container: o,
                        containerId: o.id,
                        pluginMediaElement: n,
                        pluginId: m,
                        videoId: r,
                        height: l,
                        width: k
                    }, mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
                    break;
                case "vimeo":
                    var s = m + "_player";
                    if (n.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1), o.innerHTML = '<iframe src="//player.vimeo.com/video/' + n.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" + s + '" width="' + k + '" height="' + l + '" frameborder="0" class="mejs-shim" id="' + s + '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', "function" == typeof $f) {
                        var t = $f(o.childNodes[0]);
                        t.addEvent("ready", function() {
                            function a(a, b, c, d) {
                                var e = {
                                    type: c,
                                    target: b
                                };
                                "timeupdate" == c && (b.currentTime = e.currentTime = d.seconds, b.duration = e.duration = d.duration), b.dispatchEvent(e.type, e)
                            }
                            t.playVideo = function() {
                                t.api("play")
                            }, t.stopVideo = function() {
                                t.api("unload")
                            }, t.pauseVideo = function() {
                                t.api("pause")
                            }, t.seekTo = function(a) {
                                t.api("seekTo", a)
                            }, t.setVolume = function(a) {
                                t.api("setVolume", a)
                            }, t.setMuted = function(a) {
                                a ? (t.lastVolume = t.api("getVolume"), t.api("setVolume", 0)) : (t.api("setVolume", t.lastVolume), delete t.lastVolume)
                            }, t.addEvent("play", function() {
                                a(t, n, "play"), a(t, n, "playing")
                            }), t.addEvent("pause", function() {
                                a(t, n, "pause")
                            }), t.addEvent("finish", function() {
                                a(t, n, "ended")
                            }), t.addEvent("playProgress", function(b) {
                                a(t, n, "timeupdate", b)
                            }), n.pluginElement = o, n.pluginApi = t, mejs.MediaPluginBridge.initPlugin(m)
                        })
                    } else console.warn("You need to include froogaloop for vimeo to work")
            }
            return j.style.display = "none", j.removeAttribute("autoplay"), n
        },
        updateNative: function(a, b) {
            var c, d = a.htmlMediaElement;
            for (c in mejs.HtmlMediaElement) d[c] = mejs.HtmlMediaElement[c];
            return b.success(d, d), d
        }
    }, mejs.YouTubeApi = {
        isIframeStarted: !1,
        isIframeLoaded: !1,
        loadIframeApi: function() {
            if (!this.isIframeStarted) {
                var a = document.createElement("script");
                a.src = "//www.youtube.com/player_api";
                var b = document.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b), this.isIframeStarted = !0
            }
        },
        iframeQueue: [],
        enqueueIframe: function(a) {
            this.isLoaded ? this.createIframe(a) : (this.loadIframeApi(), this.iframeQueue.push(a))
        },
        createIframe: function(a) {
            var b = a.pluginMediaElement,
                c = new YT.Player(a.containerId, {
                    height: a.height,
                    width: a.width,
                    videoId: a.videoId,
                    playerVars: {
                        controls: 0
                    },
                    events: {
                        onReady: function() {
                            a.pluginMediaElement.pluginApi = c, mejs.MediaPluginBridge.initPlugin(a.pluginId), setInterval(function() {
                                mejs.YouTubeApi.createEvent(c, b, "timeupdate")
                            }, 250)
                        },
                        onStateChange: function(a) {
                            mejs.YouTubeApi.handleStateChange(a.data, c, b)
                        }
                    }
                })
        },
        createEvent: function(a, b, c) {
            var d = {
                type: c,
                target: b
            };
            if (a && a.getDuration) {
                b.currentTime = d.currentTime = a.getCurrentTime(), b.duration = d.duration = a.getDuration(), d.paused = b.paused, d.ended = b.ended, d.muted = a.isMuted(), d.volume = a.getVolume() / 100, d.bytesTotal = a.getVideoBytesTotal(), d.bufferedBytes = a.getVideoBytesLoaded();
                var e = d.bufferedBytes / d.bytesTotal * d.duration;
                d.target.buffered = d.buffered = {
                    start: function() {
                        return 0
                    },
                    end: function() {
                        return e
                    },
                    length: 1
                }
            }
            b.dispatchEvent(d.type, d)
        },
        iFrameReady: function() {
            for (this.isLoaded = !0, this.isIframeLoaded = !0; this.iframeQueue.length > 0;) {
                var a = this.iframeQueue.pop();
                this.createIframe(a)
            }
        },
        flashPlayers: {},
        createFlash: function(a) {
            this.flashPlayers[a.pluginId] = a;
            var b, c = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + a.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
            mejs.MediaFeatures.isIE ? (b = document.createElement("div"), a.container.appendChild(b), b.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + a.pluginId + '" width="' + a.width + '" height="' + a.height + '" class="mejs-shim"><param name="movie" value="' + c + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>') : a.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + a.pluginId + '" data="' + c + '" width="' + a.width + '" height="' + a.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
        },
        flashReady: function(a) {
            var b = this.flashPlayers[a],
                c = document.getElementById(a),
                d = b.pluginMediaElement;
            d.pluginApi = d.pluginElement = c, mejs.MediaPluginBridge.initPlugin(a), c.cueVideoById(b.videoId);
            var e = b.containerId + "_callback";
            window[e] = function(a) {
                mejs.YouTubeApi.handleStateChange(a, c, d)
            }, c.addEventListener("onStateChange", e), setInterval(function() {
                mejs.YouTubeApi.createEvent(c, d, "timeupdate")
            }, 250), mejs.YouTubeApi.createEvent(c, d, "canplay")
        },
        handleStateChange: function(a, b, c) {
            switch (a) {
                case -1:
                    c.paused = !0, c.ended = !0, mejs.YouTubeApi.createEvent(b, c, "loadedmetadata");
                    break;
                case 0:
                    c.paused = !1, c.ended = !0, mejs.YouTubeApi.createEvent(b, c, "ended");
                    break;
                case 1:
                    c.paused = !1, c.ended = !1, mejs.YouTubeApi.createEvent(b, c, "play"), mejs.YouTubeApi.createEvent(b, c, "playing");
                    break;
                case 2:
                    c.paused = !0, c.ended = !1, mejs.YouTubeApi.createEvent(b, c, "pause");
                    break;
                case 3:
                    mejs.YouTubeApi.createEvent(b, c, "progress");
                    break;
                case 5:
            }
        }
    }, window.mejs = mejs, window.MediaElement = mejs.MediaElement,
    function(a, b) {
        "use strict";
        var c = {
            locale: {
                language: b.i18n && b.i18n.locale.language || "",
                strings: b.i18n && b.i18n.locale.strings || {}
            },
            ietf_lang_regex: /^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/,
            methods: {}
        };
        c.getLanguage = function() {
            var a = c.locale.language || window.navigator.userLanguage || window.navigator.language;
            return c.ietf_lang_regex.exec(a) ? a : null
        }, "undefined" != typeof mejsL10n && (c.locale.language = mejsL10n.language), c.methods.checkPlain = function(a) {
            var b, c, d = {
                "&": "&amp;",
                '"': "&quot;",
                "<": "&lt;",
                ">": "&gt;"
            };
            a = String(a);
            for (b in d) d.hasOwnProperty(b) && (c = new RegExp(b, "g"), a = a.replace(c, d[b]));
            return a
        }, c.methods.t = function(a, b) {
            return c.locale.strings && c.locale.strings[b.context] && c.locale.strings[b.context][a] && (a = c.locale.strings[b.context][a]), c.methods.checkPlain(a)
        }, c.t = function(a, b) {
            if ("string" == typeof a && a.length > 0) {
                var d = c.getLanguage();
                return b = b || {
                    context: d
                }, c.methods.t(a, b)
            }
            throw {
                name: "InvalidArgumentException",
                message: "First argument is either not a string or empty."
            }
        }, b.i18n = c
    }(document, mejs),
    function(a) {
        "use strict";
        "undefined" != typeof mejsL10n && (a[mejsL10n.language] = mejsL10n.strings)
    }(mejs.i18n.locale.strings),
    "undefined" != typeof jQuery ? mejs.$ = jQuery : "undefined" != typeof ender && (mejs.$ = ender),
    function(a) {
        mejs.MepDefaults = {
                poster: "",
                showPosterWhenEnded: !1,
                defaultVideoWidth: 480,
                defaultVideoHeight: 270,
                videoWidth: -1,
                videoHeight: -1,
                defaultAudioWidth: 400,
                defaultAudioHeight: 30,
                defaultSeekBackwardInterval: function(a) {
                    return .05 * a.duration
                },
                defaultSeekForwardInterval: function(a) {
                    return .05 * a.duration
                },
                setDimensions: !0,
                audioWidth: -1,
                audioHeight: -1,
                startVolume: .8,
                loop: !1,
                autoRewind: !0,
                enableAutosize: !0,
                alwaysShowHours: !1,
                showTimecodeFrameCount: !1,
                framesPerSecond: 25,
                autosizeProgress: !0,
                alwaysShowControls: !1,
                hideVideoControlsOnLoad: !1,
                clickToPlayPause: !0,
                iPadUseNativeControls: !1,
                iPhoneUseNativeControls: !1,
                AndroidUseNativeControls: !1,
                features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
                isVideo: !0,
                enableKeyboard: !0,
                pauseOtherPlayers: !0,
                keyActions: [{
                    keys: [32, 179],
                    action: function(a, b) {
                        b.paused || b.ended ? a.play() : a.pause()
                    }
                }, {
                    keys: [38],
                    action: function(a, b) {
                        a.container.find(".mejs-volume-slider").css("display", "block"), a.isVideo && (a.showControls(), a.startControlsTimer());
                        var c = Math.min(b.volume + .1, 1);
                        b.setVolume(c)
                    }
                }, {
                    keys: [40],
                    action: function(a, b) {
                        a.container.find(".mejs-volume-slider").css("display", "block"), a.isVideo && (a.showControls(), a.startControlsTimer());
                        var c = Math.max(b.volume - .1, 0);
                        b.setVolume(c)
                    }
                }, {
                    keys: [37, 227],
                    action: function(a, b) {
                        if (!isNaN(b.duration) && b.duration > 0) {
                            a.isVideo && (a.showControls(), a.startControlsTimer());
                            var c = Math.max(b.currentTime - a.options.defaultSeekBackwardInterval(b), 0);
                            b.setCurrentTime(c)
                        }
                    }
                }, {
                    keys: [39, 228],
                    action: function(a, b) {
                        if (!isNaN(b.duration) && b.duration > 0) {
                            a.isVideo && (a.showControls(), a.startControlsTimer());
                            var c = Math.min(b.currentTime + a.options.defaultSeekForwardInterval(b), b.duration);
                            b.setCurrentTime(c)
                        }
                    }
                }, {
                    keys: [70],
                    action: function(a) {
                        "undefined" != typeof a.enterFullScreen && (a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen())
                    }
                }, {
                    keys: [77],
                    action: function(a) {
                        a.container.find(".mejs-volume-slider").css("display", "block"), a.isVideo && (a.showControls(), a.startControlsTimer()), a.setMuted(a.media.muted ? !1 : !0)
                    }
                }]
            }, mejs.mepIndex = 0, mejs.players = {}, mejs.MediaElementPlayer = function(b, c) {
                if (!(this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(b, c);
                var d = this;
                return d.$media = d.$node = a(b), d.node = d.media = d.$media[0], "undefined" != typeof d.node.player ? d.node.player : (d.node.player = d, "undefined" == typeof c && (c = d.$node.data("mejsoptions")), d.options = a.extend({}, mejs.MepDefaults, c), d.id = "mep_" + mejs.mepIndex++, mejs.players[d.id] = d, d.init(), d)
            }, mejs.MediaElementPlayer.prototype = {
                hasFocus: !1,
                controlsAreVisible: !0,
                init: function() {
                    var b = this,
                        c = mejs.MediaFeatures,
                        d = a.extend(!0, {}, b.options, {
                            success: function(a, c) {
                                b.meReady(a, c)
                            },
                            error: function(a) {
                                b.handleError(a)
                            }
                        }),
                        e = b.media.tagName.toLowerCase();
                    if (b.isDynamic = "audio" !== e && "video" !== e, b.isVideo = b.isDynamic ? b.options.isVideo : "audio" !== e && b.options.isVideo, c.isiPad && b.options.iPadUseNativeControls || c.isiPhone && b.options.iPhoneUseNativeControls) b.$media.attr("controls", "controls"), c.isiPad && null !== b.media.getAttribute("autoplay") && b.play();
                    else if (c.isAndroid && b.options.AndroidUseNativeControls);
                    else {
                        b.$media.removeAttr("controls");
                        var f = mejs.i18n.t(b.isVideo ? "Video Player" : "Audio Player");
                        if (a('<span class="mejs-offscreen">' + f + "</span>").insertBefore(b.$media), b.container = a('<div id="' + b.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? "svg" : "no-svg") + '" tabindex="0" role="application" aria-label="' + f + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(b.$media[0].className).insertBefore(b.$media).focus(function() {
                                if (!b.controlsAreVisible) {
                                    b.showControls(!0);
                                    var a = b.container.find(".mejs-playpause-button > button");
                                    a.focus()
                                }
                            }), b.container.addClass((c.isAndroid ? "mejs-android " : "") + (c.isiOS ? "mejs-ios " : "") + (c.isiPad ? "mejs-ipad " : "") + (c.isiPhone ? "mejs-iphone " : "") + (b.isVideo ? "mejs-video " : "mejs-audio ")), c.isiOS) {
                            var g = b.$media.clone();
                            b.container.find(".mejs-mediaelement").append(g), b.$media.remove(), b.$node = b.$media = g, b.node = b.media = g[0]
                        } else b.container.find(".mejs-mediaelement").append(b.$media);
                        b.controls = b.container.find(".mejs-controls"), b.layers = b.container.find(".mejs-layers");
                        var h = b.isVideo ? "video" : "audio",
                            i = h.substring(0, 1).toUpperCase() + h.substring(1);
                        b.width = b.options[h + "Width"] > 0 || b.options[h + "Width"].toString().indexOf("%") > -1 ? b.options[h + "Width"] : "" !== b.media.style.width && null !== b.media.style.width ? b.media.style.width : null !== b.media.getAttribute("width") ? b.$media.attr("width") : b.options["default" + i + "Width"], b.height = b.options[h + "Height"] > 0 || b.options[h + "Height"].toString().indexOf("%") > -1 ? b.options[h + "Height"] : "" !== b.media.style.height && null !== b.media.style.height ? b.media.style.height : null !== b.$media[0].getAttribute("height") ? b.$media.attr("height") : b.options["default" + i + "Height"], b.setPlayerSize(b.width, b.height), d.pluginWidth = b.width, d.pluginHeight = b.height
                    }
                    mejs.MediaElement(b.$media[0], d), "undefined" != typeof b.container && b.controlsAreVisible && b.container.trigger("controlsshown")
                },
                showControls: function(a) {
                    var b = this;
                    a = "undefined" == typeof a || a, b.controlsAreVisible || (a ? (b.controls.css("visibility", "visible").stop(!0, !0).fadeIn(200, function() {
                        b.controlsAreVisible = !0, b.container.trigger("controlsshown")
                    }), b.container.find(".mejs-control").css("visibility", "visible").stop(!0, !0).fadeIn(200, function() {
                        b.controlsAreVisible = !0
                    })) : (b.controls.css("visibility", "visible").css("display", "block"), b.container.find(".mejs-control").css("visibility", "visible").css("display", "block"), b.controlsAreVisible = !0, b.container.trigger("controlsshown")), b.setControlsSize())
                },
                hideControls: function(b) {
                    var c = this;
                    b = "undefined" == typeof b || b, !c.controlsAreVisible || c.options.alwaysShowControls || c.keyboardAction || (b ? (c.controls.stop(!0, !0).fadeOut(200, function() {
                        a(this).css("visibility", "hidden").css("display", "block"), c.controlsAreVisible = !1, c.container.trigger("controlshidden")
                    }), c.container.find(".mejs-control").stop(!0, !0).fadeOut(200, function() {
                        a(this).css("visibility", "hidden").css("display", "block")
                    })) : (c.controls.css("visibility", "hidden").css("display", "block"), c.container.find(".mejs-control").css("visibility", "hidden").css("display", "block"), c.controlsAreVisible = !1, c.container.trigger("controlshidden")))
                },
                controlsTimer: null,
                startControlsTimer: function(a) {
                    var b = this;
                    a = "undefined" != typeof a ? a : 1500, b.killControlsTimer("start"), b.controlsTimer = setTimeout(function() {
                        b.hideControls(), b.killControlsTimer("hide")
                    }, a)
                },
                killControlsTimer: function() {
                    var a = this;
                    null !== a.controlsTimer && (clearTimeout(a.controlsTimer), delete a.controlsTimer, a.controlsTimer = null)
                },
                controlsEnabled: !0,
                disableControls: function() {
                    var a = this;
                    a.killControlsTimer(), a.hideControls(!1), this.controlsEnabled = !1
                },
                enableControls: function() {
                    var a = this;
                    a.showControls(!1), a.controlsEnabled = !0
                },
                meReady: function(b, c) {
                    var d, e, f = this,
                        g = mejs.MediaFeatures,
                        h = c.getAttribute("autoplay"),
                        i = !("undefined" == typeof h || null === h || "false" === h);
                    if (!f.created) {
                        if (f.created = !0, f.media = b, f.domNode = c, !(g.isAndroid && f.options.AndroidUseNativeControls || g.isiPad && f.options.iPadUseNativeControls || g.isiPhone && f.options.iPhoneUseNativeControls)) {
                            f.buildposter(f, f.controls, f.layers, f.media), f.buildkeyboard(f, f.controls, f.layers, f.media), f.buildoverlays(f, f.controls, f.layers, f.media), f.findTracks();
                            for (d in f.options.features)
                                if (e = f.options.features[d], f["build" + e]) try {
                                    f["build" + e](f, f.controls, f.layers, f.media)
                                } catch (j) {}
                            f.container.trigger("controlsready"), f.setPlayerSize(f.width, f.height), f.setControlsSize(), f.isVideo && (mejs.MediaFeatures.hasTouch ? f.$media.bind("touchstart", function() {
                                f.controlsAreVisible ? f.hideControls(!1) : f.controlsEnabled && f.showControls(!1)
                            }) : (f.clickToPlayPauseCallback = function() {
                                f.options.clickToPlayPause && (f.media.paused ? f.play() : f.pause())
                            }, f.media.addEventListener("click", f.clickToPlayPauseCallback, !1), f.container.bind("mouseenter mouseover", function() {
                                f.controlsEnabled && (f.options.alwaysShowControls || (f.killControlsTimer("enter"), f.showControls(), f.startControlsTimer(2500)))
                            }).bind("mousemove", function() {
                                f.controlsEnabled && (f.controlsAreVisible || f.showControls(), f.options.alwaysShowControls || f.startControlsTimer(2500))
                            }).bind("mouseleave", function() {
                                f.controlsEnabled && (f.media.paused || f.options.alwaysShowControls || f.startControlsTimer(1e3))
                            })), f.options.hideVideoControlsOnLoad && f.hideControls(!1), i && !f.options.alwaysShowControls && f.hideControls(), f.options.enableAutosize && f.media.addEventListener("loadedmetadata", function(a) {
                                f.options.videoHeight <= 0 && null === f.domNode.getAttribute("height") && !isNaN(a.target.videoHeight) && (f.setPlayerSize(a.target.videoWidth, a.target.videoHeight), f.setControlsSize(), f.media.setVideoSize(a.target.videoWidth, a.target.videoHeight))
                            }, !1)), b.addEventListener("play", function() {
                                var a;
                                for (a in mejs.players) {
                                    var b = mejs.players[a];
                                    b.id == f.id || !f.options.pauseOtherPlayers || b.paused || b.ended || b.pause(), b.hasFocus = !1
                                }
                                f.hasFocus = !0
                            }, !1), f.media.addEventListener("ended", function() {
                                if (f.options.autoRewind) try {
                                    f.media.setCurrentTime(0), window.setTimeout(function() {
                                        a(f.container).find(".mejs-overlay-loading").parent().hide()
                                    }, 20)
                                } catch (b) {}
                                f.media.pause(), f.setProgressRail && f.setProgressRail(), f.setCurrentRail && f.setCurrentRail(), f.options.loop ? f.play() : !f.options.alwaysShowControls && f.controlsEnabled && f.showControls()
                            }, !1), f.media.addEventListener("loadedmetadata", function() {
                                f.updateDuration && f.updateDuration(), f.updateCurrent && f.updateCurrent(), f.isFullScreen || (f.setPlayerSize(f.width, f.height), f.setControlsSize())
                            }, !1), f.container.focusout(function(b) {
                                if (b.relatedTarget) {
                                    var c = a(b.relatedTarget);
                                    f.keyboardAction && 0 === c.parents(".mejs-container").length && (f.keyboardAction = !1, f.hideControls(!0))
                                }
                            }), setTimeout(function() {
                                f.setPlayerSize(f.width, f.height), f.setControlsSize()
                            }, 50), f.globalBind("resize", function() {
                                f.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || f.setPlayerSize(f.width, f.height), f.setControlsSize()
                            }), "youtube" == f.media.pluginType && (g.isiOS || g.isAndroid) && f.container.find(".mejs-overlay-play").hide()
                        }
                        i && "native" == b.pluginType && f.play(), f.options.success && ("string" == typeof f.options.success ? window[f.options.success](f.media, f.domNode, f) : f.options.success(f.media, f.domNode, f))
                    }
                },
                handleError: function(a) {
                    var b = this;
                    b.controls.hide(), b.options.error && b.options.error(a)
                },
                setPlayerSize: function(b, c) {
                    var d = this;
                    if (!d.options.setDimensions) return !1;
                    if ("undefined" != typeof b && (d.width = b), "undefined" != typeof c && (d.height = c), d.height.toString().indexOf("%") > 0 || "100%" === d.$node.css("max-width") || d.$node[0].currentStyle && "100%" === d.$node[0].currentStyle.maxWidth) {
                        var e = function() {
                                return d.isVideo ? d.media.videoWidth && d.media.videoWidth > 0 ? d.media.videoWidth : null !== d.media.getAttribute("width") ? d.media.getAttribute("width") : d.options.defaultVideoWidth : d.options.defaultAudioWidth
                            }(),
                            f = function() {
                                return d.isVideo ? d.media.videoHeight && d.media.videoHeight > 0 ? d.media.videoHeight : null !== d.media.getAttribute("height") ? d.media.getAttribute("height") : d.options.defaultVideoHeight : d.options.defaultAudioHeight
                            }(),
                            g = d.container.parent().closest(":visible").width(),
                            h = d.container.parent().closest(":visible").height(),
                            i = d.isVideo || !d.options.autosizeProgress ? parseInt(g * f / e, 10) : f;
                        isNaN(i) && (i = h), "body" === d.container.parent()[0].tagName.toLowerCase() && (g = a(window).width(), i = a(window).height()), i && g && (d.container.width(g).height(i), d.$media.add(d.container.find(".mejs-shim")).width("100%").height("100%"), d.isVideo && d.media.setVideoSize && d.media.setVideoSize(g, i), d.layers.children(".mejs-layer").width("100%").height("100%"))
                    } else d.container.width(d.width).height(d.height), d.layers.children(".mejs-layer").width(d.width).height(d.height);
                    var j = d.layers.find(".mejs-overlay-play"),
                        k = j.find(".mejs-overlay-button");
                    j.height(d.container.height() - d.controls.height()), k.css("margin-top", "-" + (k.height() / 2 - d.controls.height() / 2).toString() + "px")
                },
                setControlsSize: function() {
                    var b = this,
                        c = 0,
                        d = 0,
                        e = b.controls.find(".mejs-time-rail"),
                        f = b.controls.find(".mejs-time-total"),
                        g = (b.controls.find(".mejs-time-current"), b.controls.find(".mejs-time-loaded"), e.siblings()),
                        h = g.last(),
                        i = null;
                    if (b.container.is(":visible") && e.length && e.is(":visible")) {
                        b.options && !b.options.autosizeProgress && (d = parseInt(e.css("width"), 10)), 0 !== d && d || (g.each(function() {
                            var b = a(this);
                            "absolute" != b.css("position") && b.is(":visible") && (c += a(this).outerWidth(!0))
                        }), d = b.controls.width() - c - (e.outerWidth(!0) - e.width()));
                        do e.width(d), f.width(d - (f.outerWidth(!0) - f.width())), "absolute" != h.css("position") && (i = h.position(), d--); while (null !== i && i.top > 0 && d > 0);
                        b.setProgressRail && b.setProgressRail(), b.setCurrentRail && b.setCurrentRail()
                    }
                },
                buildposter: function(b, c, d, e) {
                    var f = this,
                        g = a('<div class="mejs-poster mejs-layer"></div>').appendTo(d),
                        h = b.$media.attr("poster");
                    "" !== b.options.poster && (h = b.options.poster), h ? f.setPoster(h) : g.hide(), e.addEventListener("play", function() {
                        g.hide()
                    }, !1), b.options.showPosterWhenEnded && b.options.autoRewind && e.addEventListener("ended", function() {
                        g.show()
                    }, !1)
                },
                setPoster: function(b) {
                    var c = this,
                        d = c.container.find(".mejs-poster"),
                        e = d.find("img");
                    0 === e.length && (e = a('<img width="100%" height="100%" />').appendTo(d)), e.attr("src", b), d.css({
                        "background-image": "url(" + b + ")"
                    })
                },
                buildoverlays: function(b, c, d, e) {
                    var f = this;
                    if (b.isVideo) {
                        var g = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(d),
                            h = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(d),
                            i = a('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(d).bind("click", function() {
                                f.options.clickToPlayPause && e.paused && e.play()
                            });
                        e.addEventListener("play", function() {
                            i.hide(), g.hide(), c.find(".mejs-time-buffering").hide(), h.hide()
                        }, !1), e.addEventListener("playing", function() {
                            i.hide(), g.hide(), c.find(".mejs-time-buffering").hide(), h.hide()
                        }, !1), e.addEventListener("seeking", function() {
                            g.show(), c.find(".mejs-time-buffering").show()
                        }, !1), e.addEventListener("seeked", function() {
                            g.hide(), c.find(".mejs-time-buffering").hide()
                        }, !1), e.addEventListener("pause", function() {
                            mejs.MediaFeatures.isiPhone || i.show()
                        }, !1), e.addEventListener("waiting", function() {
                            g.show(), c.find(".mejs-time-buffering").show()
                        }, !1), e.addEventListener("loadeddata", function() {
                            g.show(), c.find(".mejs-time-buffering").show(), mejs.MediaFeatures.isAndroid && (e.canplayTimeout = window.setTimeout(function() {
                                if (document.createEvent) {
                                    var a = document.createEvent("HTMLEvents");
                                    return a.initEvent("canplay", !0, !0), e.dispatchEvent(a)
                                }
                            }, 300))
                        }, !1), e.addEventListener("canplay", function() {
                            g.hide(), c.find(".mejs-time-buffering").hide(), clearTimeout(e.canplayTimeout)
                        }, !1), e.addEventListener("error", function() {
                            g.hide(), c.find(".mejs-time-buffering").hide(), h.show(), h.find("mejs-overlay-error").html("Error loading this resource")
                        }, !1), e.addEventListener("keydown", function(a) {
                            f.onkeydown(b, e, a)
                        }, !1)
                    }
                },
                buildkeyboard: function(b, c, d, e) {
                    var f = this;
                    f.container.keydown(function() {
                        f.keyboardAction = !0
                    }), f.globalBind("keydown", function(a) {
                        return f.onkeydown(b, e, a)
                    }), f.globalBind("click", function(c) {
                        b.hasFocus = 0 !== a(c.target).closest(".mejs-container").length
                    })
                },
                onkeydown: function(a, b, c) {
                    if (a.hasFocus && a.options.enableKeyboard)
                        for (var d = 0, e = a.options.keyActions.length; e > d; d++)
                            for (var f = a.options.keyActions[d], g = 0, h = f.keys.length; h > g; g++)
                                if (c.keyCode == f.keys[g]) return "function" == typeof c.preventDefault && c.preventDefault(), f.action(a, b, c.keyCode), !1;
                    return !0
                },
                findTracks: function() {
                    var b = this,
                        c = b.$media.find("track");
                    b.tracks = [], c.each(function(c, d) {
                        d = a(d), b.tracks.push({
                            srclang: d.attr("srclang") ? d.attr("srclang").toLowerCase() : "",
                            src: d.attr("src"),
                            kind: d.attr("kind"),
                            label: d.attr("label") || "",
                            entries: [],
                            isLoaded: !1
                        })
                    })
                },
                changeSkin: function(a) {
                    this.container[0].className = "mejs-container " + a, this.setPlayerSize(this.width, this.height), this.setControlsSize()
                },
                play: function() {
                    this.load(), this.media.play()
                },
                pause: function() {
                    try {
                        this.media.pause()
                    } catch (a) {}
                },
                load: function() {
                    this.isLoaded || this.media.load(), this.isLoaded = !0
                },
                setMuted: function(a) {
                    this.media.setMuted(a)
                },
                setCurrentTime: function(a) {
                    this.media.setCurrentTime(a)
                },
                getCurrentTime: function() {
                    return this.media.currentTime
                },
                setVolume: function(a) {
                    this.media.setVolume(a)
                },
                getVolume: function() {
                    return this.media.volume
                },
                setSrc: function(a) {
                    this.media.setSrc(a)
                },
                remove: function() {
                    var a, b, c = this;
                    for (a in c.options.features)
                        if (b = c.options.features[a], c["clean" + b]) try {
                            c["clean" + b](c)
                        } catch (d) {}
                    c.isDynamic ? c.$node.insertBefore(c.container) : (c.$media.prop("controls", !0), c.$node.clone().insertBefore(c.container).show(), c.$node.remove()), "native" !== c.media.pluginType && c.media.remove(), delete mejs.players[c.id], "object" == typeof c.container && c.container.remove(), c.globalUnbind(), delete c.node.player
                },
                rebuildtracks: function() {
                    var a = this;
                    a.findTracks(), a.buildtracks(a, a.controls, a.layers, a.media)
                }
            },
            function() {
                function b(b, d) {
                    var e = {
                        d: [],
                        w: []
                    };
                    return a.each((b || "").split(" "), function(a, b) {
                        var f = b + "." + d;
                        0 === f.indexOf(".") ? (e.d.push(f), e.w.push(f)) : e[c.test(b) ? "w" : "d"].push(f)
                    }), e.d = e.d.join(" "), e.w = e.w.join(" "), e
                }
                var c = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
                mejs.MediaElementPlayer.prototype.globalBind = function(c, d, e) {
                    var f = this;
                    c = b(c, f.id), c.d && a(document).bind(c.d, d, e), c.w && a(window).bind(c.w, d, e)
                }, mejs.MediaElementPlayer.prototype.globalUnbind = function(c, d) {
                    var e = this;
                    c = b(c, e.id), c.d && a(document).unbind(c.d, d), c.w && a(window).unbind(c.w, d)
                }
            }(), "undefined" != typeof a && (a.fn.mediaelementplayer = function(b) {
                return this.each(b === !1 ? function() {
                    var b = a(this).data("mediaelementplayer");
                    b && b.remove(), a(this).removeData("mediaelementplayer")
                } : function() {
                    a(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, b))
                }), this
            }, a(document).ready(function() {
                a(".mejs-player").mediaelementplayer()
            })), window.MediaElementPlayer = mejs.MediaElementPlayer
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            playText: mejs.i18n.t("Play"),
            pauseText: mejs.i18n.t("Pause")
        }), a.extend(MediaElementPlayer.prototype, {
            buildplaypause: function(b, c, d, e) {
                function f(a) {
                    "play" === a ? (i.removeClass("mejs-play").addClass("mejs-pause"), j.attr({
                        title: h.pauseText,
                        "aria-label": h.pauseText
                    })) : (i.removeClass("mejs-pause").addClass("mejs-play"), j.attr({
                        title: h.playText,
                        "aria-label": h.playText
                    }))
                }
                var g = this,
                    h = g.options,
                    i = a('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + g.id + '" title="' + h.playText + '" aria-label="' + h.playText + '"></button></div>').appendTo(c).click(function(a) {
                        return a.preventDefault(), e.paused ? e.play() : e.pause(), !1
                    }),
                    j = i.find("button");
                f("pse"), e.addEventListener("play", function() {
                    f("play")
                }, !1), e.addEventListener("playing", function() {
                    f("play")
                }, !1), e.addEventListener("pause", function() {
                    f("pse")
                }, !1), e.addEventListener("paused", function() {
                    f("pse")
                }, !1)
            }
        })
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            stopText: "Stop"
        }), a.extend(MediaElementPlayer.prototype, {
            buildstop: function(b, c, d, e) {
                {
                    var f = this;
                    a('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + f.id + '" title="' + f.options.stopText + '" aria-label="' + f.options.stopText + '"></button></div>').appendTo(c).click(function() {
                        e.paused || e.pause(), e.currentTime > 0 && (e.setCurrentTime(0), e.pause(), c.find(".mejs-time-current").width("0px"), c.find(".mejs-time-handle").css("left", "0px"), c.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0)), c.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0)), d.find(".mejs-poster").show())
                    })
                }
            }
        })
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            progessHelpText: mejs.i18n.t("Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.")
        }), a.extend(MediaElementPlayer.prototype, {
            buildprogress: function(b, c, d, e) {
                a('<div class="mejs-time-rail"><span  class="mejs-time-total mejs-time-slider"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></div>').appendTo(c), c.find(".mejs-time-buffering").hide();
                var f = this,
                    g = c.find(".mejs-time-total"),
                    h = c.find(".mejs-time-loaded"),
                    i = c.find(".mejs-time-current"),
                    j = c.find(".mejs-time-handle"),
                    k = c.find(".mejs-time-float"),
                    l = c.find(".mejs-time-float-current"),
                    m = c.find(".mejs-time-slider"),
                    n = function(a) {
                        var b, c = g.offset(),
                            d = g.outerWidth(!0),
                            f = 0,
                            h = 0,
                            i = 0;
                        b = a.originalEvent.changedTouches ? a.originalEvent.changedTouches[0].pageX : a.pageX, e.duration && (b < c.left ? b = c.left : b > d + c.left && (b = d + c.left), i = b - c.left, f = i / d, h = .02 >= f ? 0 : f * e.duration, o && h !== e.currentTime && e.setCurrentTime(h), mejs.MediaFeatures.hasTouch || (k.css("left", i), l.html(mejs.Utility.secondsToTimeCode(h)), k.show()))
                    },
                    o = !1,
                    p = !1,
                    q = 0,
                    r = !1,
                    s = b.options.autoRewind,
                    t = function() {
                        var a = e.currentTime,
                            b = mejs.i18n.t("Time Slider"),
                            c = mejs.Utility.secondsToTimeCode(a),
                            d = e.duration;
                        m.attr({
                            "aria-label": b,
                            "aria-valuemin": 0,
                            "aria-valuemax": d,
                            "aria-valuenow": a,
                            "aria-valuetext": c,
                            role: "slider",
                            tabindex: 0
                        })
                    },
                    u = function() {
                        var a = new Date;
                        a - q >= 1e3 && e.play()
                    };
                m.bind("focus", function() {
                    b.options.autoRewind = !1
                }), m.bind("blur", function() {
                    b.options.autoRewind = s
                }), m.bind("keydown", function(a) {
                    new Date - q >= 1e3 && (r = e.paused);
                    var b = a.keyCode,
                        c = e.duration,
                        d = e.currentTime;
                    switch (b) {
                        case 37:
                            d -= 1;
                            break;
                        case 39:
                            d += 1;
                            break;
                        case 38:
                            d += Math.floor(.1 * c);
                            break;
                        case 40:
                            d -= Math.floor(.1 * c);
                            break;
                        case 36:
                            d = 0;
                            break;
                        case 35:
                            d = c;
                            break;
                        case 10:
                            return void(e.paused ? e.play() : e.pause());
                        case 13:
                            return void(e.paused ? e.play() : e.pause());
                        default:
                            return
                    }
                    return d = 0 > d ? 0 : d >= c ? c : Math.floor(d), q = new Date, r || e.pause(), d < e.duration && !r && setTimeout(u, 1100), e.setCurrentTime(d), a.preventDefault(), a.stopPropagation(), !1
                }), g.bind("mousedown touchstart", function(a) {
                    (1 === a.which || 0 === a.which) && (o = !0, n(a), f.globalBind("mousemove.dur touchmove.dur", function(a) {
                        n(a)
                    }), f.globalBind("mouseup.dur touchend.dur", function() {
                        o = !1, k.hide(), f.globalUnbind(".dur")
                    }))
                }).bind("mouseenter", function() {
                    p = !0, f.globalBind("mousemove.dur", function(a) {
                        n(a)
                    }), mejs.MediaFeatures.hasTouch || k.show()
                }).bind("mouseleave", function() {
                    p = !1, o || (f.globalUnbind(".dur"), k.hide())
                }), e.addEventListener("progress", function(a) {
                    b.setProgressRail(a), b.setCurrentRail(a)
                }, !1), e.addEventListener("timeupdate", function(a) {
                    b.setProgressRail(a), b.setCurrentRail(a), t(a)
                }, !1), f.loaded = h, f.total = g, f.current = i, f.handle = j
            },
            setProgressRail: function(a) {
                var b = this,
                    c = void 0 !== a ? a.target : b.media,
                    d = null;
                c && c.buffered && c.buffered.length > 0 && c.buffered.end && c.duration ? d = c.buffered.end(0) / c.duration : c && void 0 !== c.bytesTotal && c.bytesTotal > 0 && void 0 !== c.bufferedBytes ? d = c.bufferedBytes / c.bytesTotal : a && a.lengthComputable && 0 !== a.total && (d = a.loaded / a.total), null !== d && (d = Math.min(1, Math.max(0, d)), b.loaded && b.total && b.loaded.width(b.total.width() * d))
            },
            setCurrentRail: function() {
                var a = this;
                if (void 0 !== a.media.currentTime && a.media.duration && a.total && a.handle) {
                    var b = Math.round(a.total.width() * a.media.currentTime / a.media.duration),
                        c = b - Math.round(a.handle.outerWidth(!0) / 2);
                    a.current.width(b), a.handle.css("left", c)
                }
            }
        })
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            duration: -1,
            timeAndDurationSeparator: "<span> | </span>"
        }), a.extend(MediaElementPlayer.prototype, {
            buildcurrent: function(b, c, d, e) {
                var f = this;
                a('<div class="mejs-time" role="timer" aria-live="off"><span class="mejs-currenttime">' + (b.options.alwaysShowHours ? "00:" : "") + (b.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span></div>").appendTo(c), f.currenttime = f.controls.find(".mejs-currenttime"), e.addEventListener("timeupdate", function() {
                    b.updateCurrent()
                }, !1)
            },
            buildduration: function(b, c, d, e) {
                var f = this;
                c.children().last().find(".mejs-currenttime").length > 0 ? a(f.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (f.options.duration > 0 ? mejs.Utility.secondsToTimeCode(f.options.duration, f.options.alwaysShowHours || f.media.duration > 3600, f.options.showTimecodeFrameCount, f.options.framesPerSecond || 25) : (b.options.alwaysShowHours ? "00:" : "") + (b.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(c.find(".mejs-time")) : (c.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"), a('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (f.options.duration > 0 ? mejs.Utility.secondsToTimeCode(f.options.duration, f.options.alwaysShowHours || f.media.duration > 3600, f.options.showTimecodeFrameCount, f.options.framesPerSecond || 25) : (b.options.alwaysShowHours ? "00:" : "") + (b.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span></div>").appendTo(c)), f.durationD = f.controls.find(".mejs-duration"), e.addEventListener("timeupdate", function() {
                    b.updateDuration()
                }, !1)
            },
            updateCurrent: function() {
                var a = this;
                a.currenttime && a.currenttime.html(mejs.Utility.secondsToTimeCode(a.media.currentTime, a.options.alwaysShowHours || a.media.duration > 3600, a.options.showTimecodeFrameCount, a.options.framesPerSecond || 25))
            },
            updateDuration: function() {
                var a = this;
                a.container.toggleClass("mejs-long-video", a.media.duration > 3600), a.durationD && (a.options.duration > 0 || a.media.duration) && a.durationD.html(mejs.Utility.secondsToTimeCode(a.options.duration > 0 ? a.options.duration : a.media.duration, a.options.alwaysShowHours, a.options.showTimecodeFrameCount, a.options.framesPerSecond || 25))
            }
        })
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            muteText: mejs.i18n.t("Mute Toggle"),
            allyVolumeControlText: mejs.i18n.t("Use Up/Down Arrow keys to increase or decrease volume."),
            hideVolumeOnTouchDevices: !0,
            audioVolume: "horizontal",
            videoVolume: "vertical"
        }), a.extend(MediaElementPlayer.prototype, {
            buildvolume: function(b, c, d, e) {
                if (!mejs.MediaFeatures.isAndroid && !mejs.MediaFeatures.isiOS || !this.options.hideVolumeOnTouchDevices) {
                    var f = this,
                        g = f.isVideo ? f.options.videoVolume : f.options.audioVolume,
                        h = "horizontal" == g ? a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + f.id + '" title="' + f.options.muteText + '" aria-label="' + f.options.muteText + '"></button></div><a href="javascript:void(0);" class="mejs-horizontal-volume-slider"><span class="mejs-offscreen">' + f.options.allyVolumeControlText + '</span><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></a>').appendTo(c) : a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + f.id + '" title="' + f.options.muteText + '" aria-label="' + f.options.muteText + '"></button><a href="javascript:void(0);" class="mejs-volume-slider"><span class="mejs-offscreen">' + f.options.allyVolumeControlText + '</span><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></a></div>').appendTo(c),
                        i = f.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                        j = f.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                        k = f.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                        l = f.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
                        m = function(a, b) {
                            if (!i.is(":visible") && "undefined" == typeof b) return i.show(), m(a, !0), void i.hide();
                            a = Math.max(0, a), a = Math.min(a, 1), 0 === a ? h.removeClass("mejs-mute").addClass("mejs-unmute") : h.removeClass("mejs-unmute").addClass("mejs-mute");
                            var c = j.position();
                            if ("vertical" == g) {
                                var d = j.height(),
                                    e = d - d * a;
                                l.css("top", Math.round(c.top + e - l.height() / 2)), k.height(d - e), k.css("top", c.top + e)
                            } else {
                                var f = j.width(),
                                    n = f * a;
                                l.css("left", Math.round(c.left + n - l.width() / 2)), k.width(Math.round(n))
                            }
                        },
                        n = function(a) {
                            var b = null,
                                c = j.offset();
                            if ("vertical" === g) {
                                var d = j.height(),
                                    f = (parseInt(j.css("top").replace(/px/, ""), 10), a.pageY - c.top);
                                if (b = (d - f) / d, 0 === c.top || 0 === c.left) return
                            } else {
                                var h = j.width(),
                                    i = a.pageX - c.left;
                                b = i / h
                            }
                            b = Math.max(0, b), b = Math.min(b, 1), m(b), e.setMuted(0 === b ? !0 : !1), e.setVolume(b)
                        },
                        o = !1,
                        p = !1;
                    h.hover(function() {
                        i.show(), p = !0
                    }, function() {
                        p = !1, o || "vertical" != g || i.hide()
                    });
                    var q = function() {
                        var a = Math.floor(100 * e.volume);
                        i.attr({
                            "aria-label": mejs.i18n.t("volumeSlider"),
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-valuenow": a,
                            "aria-valuetext": a + "%",
                            role: "slider",
                            tabindex: 0
                        })
                    };
                    i.bind("mouseover", function() {
                        p = !0
                    }).bind("mousedown", function(a) {
                        return n(a), f.globalBind("mousemove.vol", function(a) {
                            n(a)
                        }), f.globalBind("mouseup.vol", function() {
                            o = !1, f.globalUnbind(".vol"), p || "vertical" != g || i.hide()
                        }), o = !0, !1
                    }).bind("keydown", function(a) {
                        var b = a.keyCode,
                            c = e.volume;
                        switch (b) {
                            case 38:
                                c += .1;
                                break;
                            case 40:
                                c -= .1;
                                break;
                            default:
                                return !0
                        }
                        return o = !1, m(c), e.setVolume(c), !1
                    }).bind("blur", function() {
                        i.hide()
                    }), h.find("button").click(function() {
                        e.setMuted(!e.muted)
                    }), h.find("button").bind("focus", function() {
                        i.show()
                    }), e.addEventListener("volumechange", function(a) {
                        o || (e.muted ? (m(0), h.removeClass("mejs-mute").addClass("mejs-unmute")) : (m(e.volume), h.removeClass("mejs-unmute").addClass("mejs-mute"))), q(a)
                    }, !1), f.container.is(":visible") && (m(b.options.startVolume), 0 === b.options.startVolume && e.setMuted(!0), "native" === e.pluginType && e.setVolume(b.options.startVolume))
                }
            }
        })
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            usePluginFullScreen: !0,
            newWindowCallback: function() {
                return ""
            },
            fullscreenText: mejs.i18n.t("Fullscreen")
        }), a.extend(MediaElementPlayer.prototype, {
            isFullScreen: !1,
            isNativeFullScreen: !1,
            isInIframe: !1,
            buildfullscreen: function(b, c, d, e) {
                if (b.isVideo) {
                    if (b.isInIframe = window.location != window.parent.location, mejs.MediaFeatures.hasTrueNativeFullScreen) {
                        var f = function() {
                            b.isFullScreen && (mejs.MediaFeatures.isFullScreen() ? (b.isNativeFullScreen = !0, b.setControlsSize()) : (b.isNativeFullScreen = !1, b.exitFullScreen()))
                        };
                        b.globalBind(mejs.MediaFeatures.fullScreenEventName, f)
                    }
                    var g = this,
                        h = (b.container, a('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + g.id + '" title="' + g.options.fullscreenText + '" aria-label="' + g.options.fullscreenText + '"></button></div>').appendTo(c));
                    if ("native" === g.media.pluginType || !g.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox) h.click(function() {
                        var a = mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || b.isFullScreen;
                        a ? b.exitFullScreen() : b.enterFullScreen()
                    });
                    else {
                        var i = null,
                            j = function() {
                                var a, b = document.createElement("x"),
                                    c = document.documentElement,
                                    d = window.getComputedStyle;
                                return "pointerEvents" in b.style ? (b.style.pointerEvents = "auto", b.style.pointerEvents = "x", c.appendChild(b), a = d && "auto" === d(b, "").pointerEvents, c.removeChild(b), !!a) : !1
                            }();
                        if (j && !mejs.MediaFeatures.isOpera) {
                            var k, l, m = !1,
                                n = function() {
                                    if (m) {
                                        for (var a in o) o[a].hide();
                                        h.css("pointer-events", ""), g.controls.css("pointer-events", ""), g.media.removeEventListener("click", g.clickToPlayPauseCallback), m = !1
                                    }
                                },
                                o = {},
                                p = ["top", "left", "right", "bottom"],
                                q = function() {
                                    var a = h.offset().left - g.container.offset().left,
                                        b = h.offset().top - g.container.offset().top,
                                        c = h.outerWidth(!0),
                                        d = h.outerHeight(!0),
                                        e = g.container.width(),
                                        f = g.container.height();
                                    for (k in o) o[k].css({
                                        position: "absolute",
                                        top: 0,
                                        left: 0
                                    });
                                    o.top.width(e).height(b), o.left.width(a).height(d).css({
                                        top: b
                                    }), o.right.width(e - a - c).height(d).css({
                                        top: b,
                                        left: a + c
                                    }), o.bottom.width(e).height(f - d - b).css({
                                        top: b + d
                                    })
                                };
                            for (g.globalBind("resize", function() {
                                    q()
                                }), k = 0, l = p.length; l > k; k++) o[p[k]] = a('<div class="mejs-fullscreen-hover" />').appendTo(g.container).mouseover(n).hide();
                            h.on("mouseover", function() {
                                if (!g.isFullScreen) {
                                    var a = h.offset(),
                                        c = b.container.offset();
                                    e.positionFullscreenButton(a.left - c.left, a.top - c.top, !1), h.css("pointer-events", "none"), g.controls.css("pointer-events", "none"), g.media.addEventListener("click", g.clickToPlayPauseCallback);
                                    for (k in o) o[k].show();
                                    q(), m = !0
                                }
                            }), e.addEventListener("fullscreenchange", function() {
                                g.isFullScreen = !g.isFullScreen, g.isFullScreen ? g.media.removeEventListener("click", g.clickToPlayPauseCallback) : g.media.addEventListener("click", g.clickToPlayPauseCallback), n()
                            }), g.globalBind("mousemove", function(a) {
                                if (m) {
                                    var b = h.offset();
                                    (a.pageY < b.top || a.pageY > b.top + h.outerHeight(!0) || a.pageX < b.left || a.pageX > b.left + h.outerWidth(!0)) && (h.css("pointer-events", ""), g.controls.css("pointer-events", ""), m = !1)
                                }
                            })
                        } else h.on("mouseover", function() {
                            null !== i && (clearTimeout(i), delete i);
                            var a = h.offset(),
                                c = b.container.offset();
                            e.positionFullscreenButton(a.left - c.left, a.top - c.top, !0)
                        }).on("mouseout", function() {
                            null !== i && (clearTimeout(i), delete i), i = setTimeout(function() {
                                e.hideFullscreenButton()
                            }, 1500)
                        })
                    }
                    b.fullscreenBtn = h, g.globalBind("keydown", function(a) {
                        (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || g.isFullScreen) && 27 == a.keyCode && b.exitFullScreen()
                    })
                }
            },
            cleanfullscreen: function(a) {
                a.exitFullScreen()
            },
            containerSizeTimeout: null,
            enterFullScreen: function() {
                var b = this;
                if ("native" === b.media.pluginType || !mejs.MediaFeatures.isFirefox && !b.options.usePluginFullScreen) {
                    if (a(document.documentElement).addClass("mejs-fullscreen"), normalHeight = b.container.height(), normalWidth = b.container.width(), "native" === b.media.pluginType)
                        if (mejs.MediaFeatures.hasTrueNativeFullScreen) mejs.MediaFeatures.requestFullScreen(b.container[0]), b.isInIframe && setTimeout(function d() {
                            if (b.isNativeFullScreen) {
                                var c = window.devicePixelRatio || 1,
                                    e = .002,
                                    f = c * a(window).width(),
                                    g = screen.width,
                                    h = Math.abs(g - f),
                                    i = g * e;
                                h > i ? b.exitFullScreen() : setTimeout(d, 500)
                            }
                        }, 500);
                        else if (mejs.MediaFeatures.hasSemiNativeFullScreen) return void b.media.webkitEnterFullscreen();
                    if (b.isInIframe) {
                        var c = b.options.newWindowCallback(this);
                        if ("" !== c) {
                            if (!mejs.MediaFeatures.hasTrueNativeFullScreen) return b.pause(), void window.open(c, b.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                            setTimeout(function() {
                                b.isNativeFullScreen || (b.pause(), window.open(c, b.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no"))
                            }, 250)
                        }
                    }
                    b.container.addClass("mejs-container-fullscreen").width("100%").height("100%"), b.containerSizeTimeout = setTimeout(function() {
                        b.container.css({
                            width: "100%",
                            height: "100%"
                        }), b.setControlsSize()
                    }, 500), "native" === b.media.pluginType ? b.$media.width("100%").height("100%") : (b.container.find(".mejs-shim").width("100%").height("100%"), b.media.setVideoSize(a(window).width(), a(window).height())), b.layers.children("div").width("100%").height("100%"), b.fullscreenBtn && b.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"), b.setControlsSize(), b.isFullScreen = !0, b.container.find(".mejs-captions-text").css("font-size", screen.width / b.width * 1 * 100 + "%"), b.container.find(".mejs-captions-position").css("bottom", "45px")
                }
            },
            exitFullScreen: function() {
                var b = this;
                return clearTimeout(b.containerSizeTimeout), "native" !== b.media.pluginType && mejs.MediaFeatures.isFirefox ? void b.media.setFullscreen(!1) : (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || b.isFullScreen) && mejs.MediaFeatures.cancelFullScreen(), a(document.documentElement).removeClass("mejs-fullscreen"), b.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight), "native" === b.media.pluginType ? b.$media.width(normalWidth).height(normalHeight) : (b.container.find(".mejs-shim").width(normalWidth).height(normalHeight), b.media.setVideoSize(normalWidth, normalHeight)), b.layers.children("div").width(normalWidth).height(normalHeight), b.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"), b.setControlsSize(), b.isFullScreen = !1, b.container.find(".mejs-captions-text").css("font-size", ""), void b.container.find(".mejs-captions-position").css("bottom", ""))
            }
        })
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            speeds: ["2.00", "1.50", "1.25", "1.00", "0.75"],
            defaultSpeed: "1.00",
            speedChar: "x"
        }), a.extend(MediaElementPlayer.prototype, {
            buildspeed: function(b, c, d, e) {
                var f = this;
                if ("native" == f.media.pluginType) {
                    var g = null,
                        h = null,
                        i = '<div class="mejs-button mejs-speed-button"><button type="button">' + f.options.defaultSpeed + f.options.speedChar + '</button><div class="mejs-speed-selector"><ul>'; - 1 === a.inArray(f.options.defaultSpeed, f.options.speeds) && f.options.speeds.push(f.options.defaultSpeed), f.options.speeds.sort(function(a, b) {
                        return parseFloat(b) - parseFloat(a)
                    });
                    for (var j = 0, k = f.options.speeds.length; k > j; j++) i += '<li><input type="radio" name="speed" value="' + f.options.speeds[j] + '" id="' + f.options.speeds[j] + '" ' + (f.options.speeds[j] == f.options.defaultSpeed ? " checked" : "") + ' /><label for="' + f.options.speeds[j] + '" ' + (f.options.speeds[j] == f.options.defaultSpeed ? ' class="mejs-speed-selected"' : "") + ">" + f.options.speeds[j] + f.options.speedChar + "</label></li>";
                    i += "</ul></div></div>", g = a(i).appendTo(c), h = g.find(".mejs-speed-selector"), playbackspeed = f.options.defaultSpeed, h.on("click", 'input[type="radio"]', function() {
                        var b = a(this).attr("value");
                        playbackspeed = b, e.playbackRate = parseFloat(b), g.find("button").html(b + f.options.speedChar), g.find(".mejs-speed-selected").removeClass("mejs-speed-selected"), g.find('input[type="radio"]:checked').next().addClass("mejs-speed-selected")
                    }), h.height(g.find(".mejs-speed-selector ul").outerHeight(!0) + g.find(".mejs-speed-translations").outerHeight(!0)).css("top", -1 * h.height() + "px")
                }
            }
        })
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            startLanguage: "",
            tracksText: mejs.i18n.t("Captions/Subtitles"),
            hideCaptionsButtonWhenEmpty: !0,
            toggleCaptionsButtonWhenOnlyOne: !1,
            slidesSelector: ""
        }), a.extend(MediaElementPlayer.prototype, {
            hasChapters: !1,
            cleartracks: function(a) {
                a && (a.captions && a.captions.remove(), a.chapters && a.chapters.remove(), a.captionsText && a.captionsText.remove(), a.captionsButton && a.captionsButton.remove())
            },
            buildtracks: function(b, c, d, e) {
                if (0 !== b.tracks.length) {
                    var f, g = this;
                    if (g.domNode.textTracks)
                        for (f = g.domNode.textTracks.length - 1; f >= 0; f--) g.domNode.textTracks[f].mode = "hidden";
                    g.cleartracks(b, c, d, e), b.chapters = a('<div class="mejs-chapters mejs-layer"></div>').prependTo(d).hide(), b.captions = a('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" role="log" aria-live="assertive" aria-atomic="false"><span class="mejs-captions-text"></span></div></div>').prependTo(d).hide(), b.captionsText = b.captions.find(".mejs-captions-text"), b.captionsButton = a('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + g.id + '" title="' + g.options.tracksText + '" aria-label="' + g.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + b.id + '_captions" id="' + b.id + '_captions_none" value="none" checked="checked" /><label for="' + b.id + '_captions_none">' + mejs.i18n.t("None") + "</label></li></ul></div></div>").appendTo(c);
                    var h = 0;
                    for (f = 0; f < b.tracks.length; f++) "subtitles" == b.tracks[f].kind && h++;
                    for (g.options.toggleCaptionsButtonWhenOnlyOne && 1 == h ? b.captionsButton.on("click", function() {
                            lang = null === b.selectedTrack ? b.tracks[0].srclang : "none", b.setTrack(lang)
                        }) : (b.captionsButton.on("mouseenter focusin", function() {
                            a(this).find(".mejs-captions-selector").css("visibility", "visible")
                        }).on("click", "input[type=radio]", function() {
                            lang = this.value, b.setTrack(lang)
                        }), b.captionsButton.on("mouseleave focusout", function() {
                            a(this).find(".mejs-captions-selector").css("visibility", "hidden")
                        })), b.options.alwaysShowControls ? b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : b.container.bind("controlsshown", function() {
                            b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                        }).bind("controlshidden", function() {
                            e.paused || b.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                        }), b.trackToLoad = -1, b.selectedTrack = null, b.isLoadingTrack = !1, f = 0; f < b.tracks.length; f++) "subtitles" == b.tracks[f].kind && b.addTrackButton(b.tracks[f].srclang, b.tracks[f].label);
                    b.loadNextTrack(), e.addEventListener("timeupdate", function() {
                        b.displayCaptions()
                    }, !1), "" !== b.options.slidesSelector && (b.slidesContainer = a(b.options.slidesSelector), e.addEventListener("timeupdate", function() {
                        b.displaySlides()
                    }, !1)), e.addEventListener("loadedmetadata", function() {
                        b.displayChapters()
                    }, !1), b.container.hover(function() {
                        b.hasChapters && (b.chapters.css("visibility", "visible"), b.chapters.fadeIn(200).height(b.chapters.find(".mejs-chapter").outerHeight()))
                    }, function() {
                        b.hasChapters && !e.paused && b.chapters.fadeOut(200, function() {
                            a(this).css("visibility", "hidden"), a(this).css("display", "block")
                        })
                    }), null !== b.node.getAttribute("autoplay") && b.chapters.css("visibility", "hidden")
                }
            },
            setTrack: function(a) {
                var b, c = this;
                if ("none" == a) c.selectedTrack = null, c.captionsButton.removeClass("mejs-captions-enabled");
                else
                    for (b = 0; b < c.tracks.length; b++)
                        if (c.tracks[b].srclang == a) {
                            null === c.selectedTrack && c.captionsButton.addClass("mejs-captions-enabled"), c.selectedTrack = c.tracks[b], c.captions.attr("lang", c.selectedTrack.srclang), c.displayCaptions();
                            break
                        }
            },
            loadNextTrack: function() {
                var a = this;
                a.trackToLoad++, a.trackToLoad < a.tracks.length ? (a.isLoadingTrack = !0, a.loadTrack(a.trackToLoad)) : (a.isLoadingTrack = !1, a.checkForTracks())
            },
            loadTrack: function(b) {
                var c = this,
                    d = c.tracks[b],
                    e = function() {
                        d.isLoaded = !0, c.enableTrackButton(d.srclang, d.label), c.loadNextTrack()
                    };
                a.ajax({
                    url: d.src,
                    dataType: "text",
                    success: function(a) {
                        d.entries = "string" == typeof a && /<tt\s+xml/gi.exec(a) ? mejs.TrackFormatParser.dfxp.parse(a) : mejs.TrackFormatParser.webvtt.parse(a), e(), "chapters" == d.kind && c.media.addEventListener("play", function() {
                            c.media.duration > 0 && c.displayChapters(d)
                        }, !1), "slides" == d.kind && c.setupSlides(d)
                    },
                    error: function() {
                        c.loadNextTrack()
                    }
                })
            },
            enableTrackButton: function(b, c) {
                var d = this;
                "" === c && (c = mejs.language.codes[b] || b), d.captionsButton.find("input[value=" + b + "]").prop("disabled", !1).siblings("label").html(c), d.options.startLanguage == b && a("#" + d.id + "_captions_" + b).prop("checked", !0).trigger("click"), d.adjustLanguageBox()
            },
            addTrackButton: function(b, c) {
                var d = this;
                "" === c && (c = mejs.language.codes[b] || b), d.captionsButton.find("ul").append(a('<li><input type="radio" name="' + d.id + '_captions" id="' + d.id + "_captions_" + b + '" value="' + b + '" disabled="disabled" /><label for="' + d.id + "_captions_" + b + '">' + c + " (loading)</label></li>")), d.adjustLanguageBox(), d.container.find(".mejs-captions-translations option[value=" + b + "]").remove()
            },
            adjustLanguageBox: function() {
                var a = this;
                a.captionsButton.find(".mejs-captions-selector").height(a.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0) + a.captionsButton.find(".mejs-captions-translations").outerHeight(!0))
            },
            checkForTracks: function() {
                var a = this,
                    b = !1;
                if (a.options.hideCaptionsButtonWhenEmpty) {
                    for (i = 0; i < a.tracks.length; i++)
                        if ("subtitles" == a.tracks[i].kind) {
                            b = !0;
                            break
                        }
                    b || (a.captionsButton.hide(), a.setControlsSize())
                }
            },
            displayCaptions: function() {
                if ("undefined" != typeof this.tracks) {
                    var a, b = this,
                        c = b.selectedTrack;
                    if (null !== c && c.isLoaded) {
                        for (a = 0; a < c.entries.times.length; a++)
                            if (b.media.currentTime >= c.entries.times[a].start && b.media.currentTime <= c.entries.times[a].stop) return b.captionsText.html(c.entries.text[a]).attr("class", "mejs-captions-text " + (c.entries.times[a].identifier || "")), void b.captions.show().height(0);
                        b.captions.hide()
                    } else b.captions.hide()
                }
            },
            setupSlides: function(a) {
                var b = this;
                b.slides = a, b.slides.entries.imgs = [b.slides.entries.text.length], b.showSlide(0)
            },
            showSlide: function(b) {
                if ("undefined" != typeof this.tracks && "undefined" != typeof this.slidesContainer) {
                    var c = this,
                        d = c.slides.entries.text[b],
                        e = c.slides.entries.imgs[b];
                    "undefined" == typeof e || "undefined" == typeof e.fadeIn ? c.slides.entries.imgs[b] = e = a('<img src="' + d + '">').on("load", function() {
                        e.appendTo(c.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
                    }) : e.is(":visible") || e.is(":animated") || e.fadeIn().siblings(":visible").fadeOut()
                }
            },
            displaySlides: function() {
                if ("undefined" != typeof this.slides) {
                    var a, b = this,
                        c = b.slides;
                    for (a = 0; a < c.entries.times.length; a++)
                        if (b.media.currentTime >= c.entries.times[a].start && b.media.currentTime <= c.entries.times[a].stop) return void b.showSlide(a)
                }
            },
            displayChapters: function() {
                var a, b = this;
                for (a = 0; a < b.tracks.length; a++)
                    if ("chapters" == b.tracks[a].kind && b.tracks[a].isLoaded) {
                        b.drawChapters(b.tracks[a]), b.hasChapters = !0;
                        break
                    }
            },
            drawChapters: function(b) {
                var c, d, e = this,
                    f = 0,
                    g = 0;
                for (e.chapters.empty(), c = 0; c < b.entries.times.length; c++) d = b.entries.times[c].stop - b.entries.times[c].start, f = Math.floor(d / e.media.duration * 100), (f + g > 100 || c == b.entries.times.length - 1 && 100 > f + g) && (f = 100 - g), e.chapters.append(a('<div class="mejs-chapter" rel="' + b.entries.times[c].start + '" style="left: ' + g.toString() + "%;width: " + f.toString() + '%;"><div class="mejs-chapter-block' + (c == b.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + b.entries.text[c] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(b.entries.times[c].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(b.entries.times[c].stop) + "</span></div></div>")), g += f;
                e.chapters.find("div.mejs-chapter").click(function() {
                    e.media.setCurrentTime(parseFloat(a(this).attr("rel"))), e.media.paused && e.media.play()
                }), e.chapters.show()
            }
        }), mejs.language = {
            codes: {
                af: "Afrikaans",
                sq: "Albanian",
                ar: "Arabic",
                be: "Belarusian",
                bg: "Bulgarian",
                ca: "Catalan",
                zh: "Chinese",
                "zh-cn": "Chinese Simplified",
                "zh-tw": "Chinese Traditional",
                hr: "Croatian",
                cs: "Czech",
                da: "Danish",
                nl: "Dutch",
                en: "English",
                et: "Estonian",
                fl: "Filipino",
                fi: "Finnish",
                fr: "French",
                gl: "Galician",
                de: "German",
                el: "Greek",
                ht: "Haitian Creole",
                iw: "Hebrew",
                hi: "Hindi",
                hu: "Hungarian",
                is: "Icelandic",
                id: "Indonesian",
                ga: "Irish",
                it: "Italian",
                ja: "Japanese",
                ko: "Korean",
                lv: "Latvian",
                lt: "Lithuanian",
                mk: "Macedonian",
                ms: "Malay",
                mt: "Maltese",
                no: "Norwegian",
                fa: "Persian",
                pl: "Polish",
                pt: "Portuguese",
                ro: "Romanian",
                ru: "Russian",
                sr: "Serbian",
                sk: "Slovak",
                sl: "Slovenian",
                es: "Spanish",
                sw: "Swahili",
                sv: "Swedish",
                tl: "Tagalog",
                th: "Thai",
                tr: "Turkish",
                uk: "Ukrainian",
                vi: "Vietnamese",
                cy: "Welsh",
                yi: "Yiddish"
            }
        }, mejs.TrackFormatParser = {
            webvtt: {
                pattern_timecode: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
                parse: function(b) {
                    for (var c, d, e, f = 0, g = mejs.TrackFormatParser.split2(b, /\r?\n/), h = {
                            text: [],
                            times: []
                        }; f < g.length; f++) {
                        if (c = this.pattern_timecode.exec(g[f]), c && f < g.length) {
                            for (f - 1 >= 0 && "" !== g[f - 1] && (e = g[f - 1]), f++, d = g[f], f++;
                                "" !== g[f] && f < g.length;) d = d + "\n" + g[f], f++;
                            d = a.trim(d).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), h.text.push(d), h.times.push({
                                identifier: e,
                                start: 0 === mejs.Utility.convertSMPTEtoSeconds(c[1]) ? .2 : mejs.Utility.convertSMPTEtoSeconds(c[1]),
                                stop: mejs.Utility.convertSMPTEtoSeconds(c[3]),
                                settings: c[5]
                            })
                        }
                        e = ""
                    }
                    return h
                }
            },
            dfxp: {
                parse: function(b) {
                    b = a(b).filter("tt");
                    var c, d, e = 0,
                        f = b.children("div").eq(0),
                        g = f.find("p"),
                        h = b.find("#" + f.attr("style")),
                        i = {
                            text: [],
                            times: []
                        };
                    if (h.length) {
                        var j = h.removeAttr("id").get(0).attributes;
                        if (j.length)
                            for (c = {}, e = 0; e < j.length; e++) c[j[e].name.split(":")[1]] = j[e].value
                    }
                    for (e = 0; e < g.length; e++) {
                        var k, l = {
                            start: null,
                            stop: null,
                            style: null
                        };
                        if (g.eq(e).attr("begin") && (l.start = mejs.Utility.convertSMPTEtoSeconds(g.eq(e).attr("begin"))), !l.start && g.eq(e - 1).attr("end") && (l.start = mejs.Utility.convertSMPTEtoSeconds(g.eq(e - 1).attr("end"))), g.eq(e).attr("end") && (l.stop = mejs.Utility.convertSMPTEtoSeconds(g.eq(e).attr("end"))), !l.stop && g.eq(e + 1).attr("begin") && (l.stop = mejs.Utility.convertSMPTEtoSeconds(g.eq(e + 1).attr("begin"))), c) {
                            k = "";
                            for (var m in c) k += m + ":" + c[m] + ";"
                        }
                        k && (l.style = k), 0 === l.start && (l.start = .2), i.times.push(l), d = a.trim(g.eq(e).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), i.text.push(d), 0 === i.times.start && (i.times.start = 2)
                    }
                    return i
                }
            },
            split2: function(a, b) {
                return a.split(b)
            }
        }, 3 != "x\n\ny".split(/\n/gi).length && (mejs.TrackFormatParser.split2 = function(a, b) {
            var c, d = [],
                e = "";
            for (c = 0; c < a.length; c++) e += a.substring(c, c + 1), b.test(e) && (d.push(e.replace(b, "")), e = "");
            return d.push(e), d
        })
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            contextMenuItems: [{
                render: function(a) {
                    return "undefined" == typeof a.enterFullScreen ? null : mejs.i18n.t(a.isFullScreen ? "Turn off Fullscreen" : "Go Fullscreen")
                },
                click: function(a) {
                    a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
                }
            }, {
                render: function(a) {
                    return mejs.i18n.t(a.media.muted ? "Unmute" : "Mute")
                },
                click: function(a) {
                    a.setMuted(a.media.muted ? !1 : !0)
                }
            }, {
                isSeparator: !0
            }, {
                render: function() {
                    return mejs.i18n.t("Download Video")
                },
                click: function(a) {
                    window.location.href = a.media.currentSrc
                }
            }]
        }), a.extend(MediaElementPlayer.prototype, {
            buildcontextmenu: function(b) {
                b.contextMenu = a('<div class="mejs-contextmenu"></div>').appendTo(a("body")).hide(), b.container.bind("contextmenu", function(a) {
                    return b.isContextMenuEnabled ? (a.preventDefault(), b.renderContextMenu(a.clientX - 1, a.clientY - 1), !1) : void 0
                }), b.container.bind("click", function() {
                    b.contextMenu.hide()
                }), b.contextMenu.bind("mouseleave", function() {
                    b.startContextMenuTimer()
                })
            },
            cleancontextmenu: function(a) {
                a.contextMenu.remove()
            },
            isContextMenuEnabled: !0,
            enableContextMenu: function() {
                this.isContextMenuEnabled = !0
            },
            disableContextMenu: function() {
                this.isContextMenuEnabled = !1
            },
            contextMenuTimeout: null,
            startContextMenuTimer: function() {
                var a = this;
                a.killContextMenuTimer(), a.contextMenuTimer = setTimeout(function() {
                    a.hideContextMenu(), a.killContextMenuTimer()
                }, 750)
            },
            killContextMenuTimer: function() {
                var a = this.contextMenuTimer;
                null != a && (clearTimeout(a), delete a, a = null)
            },
            hideContextMenu: function() {
                this.contextMenu.hide()
            },
            renderContextMenu: function(b, c) {
                for (var d = this, e = "", f = d.options.contextMenuItems, g = 0, h = f.length; h > g; g++)
                    if (f[g].isSeparator) e += '<div class="mejs-contextmenu-separator"></div>';
                    else {
                        var i = f[g].render(d);
                        null != i && (e += '<div class="mejs-contextmenu-item" data-itemindex="' + g + '" id="element-' + 1e6 * Math.random() + '">' + i + "</div>")
                    }
                d.contextMenu.empty().append(a(e)).css({
                    top: c,
                    left: b
                }).show(), d.contextMenu.find(".mejs-contextmenu-item").each(function() {
                    var b = a(this),
                        c = parseInt(b.data("itemindex"), 10),
                        e = d.options.contextMenuItems[c];
                    "undefined" != typeof e.show && e.show(b, d), b.click(function() {
                        "undefined" != typeof e.click && e.click(d), d.contextMenu.hide()
                    })
                }), setTimeout(function() {
                    d.killControlsTimer("rev3")
                }, 100)
            }
        })
    }(mejs.$),
    function(a) {
        a.extend(mejs.MepDefaults, {
            postrollCloseText: mejs.i18n.t("Close")
        }), a.extend(MediaElementPlayer.prototype, {
            buildpostroll: function(b, c, d) {
                var e = this,
                    f = e.container.find('link[rel="postroll"]').attr("href");
                "undefined" != typeof f && (b.postroll = a('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + e.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(d).hide(), e.media.addEventListener("ended", function() {
                    a.ajax({
                        dataType: "html",
                        url: f,
                        success: function(a) {
                            d.find(".mejs-postroll-layer-content").html(a)
                        }
                    }), b.postroll.show()
                }, !1))
            }
        })
    }(mejs.$);