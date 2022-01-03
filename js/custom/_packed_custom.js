/*!
0. shortcodes.js
1. _utils.js
2. _init.js
----------------------------------------------------*/

/* 0. shortcodes.js */
jQuery(document).ready(function() {
    TRX_ADDONS_STORAGE.vc_init_counter = 0;
    trx_addons_init_actions();
    trx_addons_sc_fullheight_init();
    jQuery(".sc_recent_news_header_category_item_more").on("click", function() {
        jQuery(this).toggleClass("opened").find(".sc_recent_news_header_more_categories").slideToggle()
    })
});
jQuery(window).on("beforeunload", function() {
    if (jQuery.browser && !jQuery.browser.safari) {
        jQuery("#page_preloader").css({
            display: "block",
            opacity: 0
        }).animate({
            opacity: 0.8
        }, 300)
    }
});
jQuery(document).on("action.init_hidden_elements", trx_addons_sc_fullheight_init);
jQuery(document).on("action.init_shortcodes", trx_addons_sc_fullheight_init);
jQuery(window).on("resize", trx_addons_sc_fullheight_init);
jQuery(document).on("action.init_sliders", trx_addons_init_sliders);
jQuery(document).on("action.init_hidden_elements", trx_addons_init_hidden_sliders);
jQuery(document).on("action.init_hidden_elements", trx_addons_sc_skills_init);
jQuery(document).on("action.init_shortcodes", trx_addons_sc_skills_init);
jQuery(window).on("scroll", trx_addons_sc_skills_init);

function trx_addons_sc_fullheight_init(b, a) {
    if (arguments.length < 2) {
        var a = jQuery("body")
    }
    if (a === undefined || a.length === undefined || a.length == 0) {
        return
    }
    a.find(".sc_item_fullheight").each(function() {
        var h = jQuery(this);
        if (jQuery(this).parents("div:hidden,article:hidden").length > 0) {
            return
        }
        var c = 0;
        var e = jQuery(this).parents(".full-height-section");
        console.log(e);
        if (e.length > 0) {
            c = e.height()
        } else {
            var d = jQuery("#wpadminbar");
            c = jQuery(window).height() - (d.length > 0 ? d.height() : 0)
        }
        var g = h.height();
        var f = Math.ceil((c - g) / 2);
        h.css({})
    })
}

function trx_addons_init_actions() {
    if (TRX_ADDONS_STORAGE.vc_edit_mode > 0 && jQuery(".vc_empty-placeholder").length == 0 && TRX_ADDONS_STORAGE.vc_init_counter++ < 30) {
        setTimeout(trx_addons_init_actions, 200);
        return
    }
    jQuery("#page_preloader").animate({
        opacity: 0
    }, 800, function() {
        jQuery(this).css({
            display: "none"
        })
    });
    if (trx_addons_is_retina()) {
        trx_addons_set_cookie("trx_addons_is_retina", 1, 365)
    }
    jQuery(document).on("action.init_hidden_elements", trx_addons_ready_actions);
    trx_addons_ready_actions();
    trx_addons_resize_actions();
    trx_addons_scroll_actions();
    jQuery(window).resize(function() {
        trx_addons_resize_actions()
    });
    jQuery(window).scroll(function() {
        trx_addons_scroll_actions()
    })
}

function trx_addons_ready_actions(c, b) {
    if (arguments.length < 2) {
        var b = jQuery("body")
    }
    if (b.find(".trx_addons_tabs:not(.inited)").length > 0 && jQuery.ui && jQuery.ui.tabs) {
        b.find(".trx_addons_tabs:not(.inited)").each(function() {
            var e = jQuery(this).data("active");
            if (isNaN(e)) {
                e = 0;
                var d = jQuery(this).find('> ul > li[data-active="true"]').eq(0);
                if (d.length > 0) {
                    e = d.index();
                    if (isNaN(e) || e < 0) {
                        e = 0
                    }
                }
            } else {
                e = Math.max(0, e)
            }
            jQuery(this).addClass("inited").tabs({
                active: e,
                show: {
                    effect: "fadeIn",
                    duration: 300
                },
                hide: {
                    effect: "fadeOut",
                    duration: 300
                },
                create: function(f, g) {
                    if (g.panel.length > 0) {
                        jQuery(document).trigger("action.init_hidden_elements", [g.panel])
                    }
                },
                activate: function(f, g) {
                    if (g.newPanel.length > 0) {
                        jQuery(document).trigger("action.init_hidden_elements", [g.newPanel])
                    }
                }
            })
        })
    }
    if (b.find(".trx_addons_accordion:not(.inited)").length > 0 && jQuery.ui && jQuery.ui.accordion) {
        b.find(".trx_addons_accordion:not(.inited)").each(function() {
            var d = jQuery(this);
            var h = d.data("headers");
            if (h === undefined) {
                h = "h5"
            }
            var e = d.data("height-style");
            if (e === undefined) {
                e = "content"
            }
            var g = d.data("active");
            var f = false;
            if (isNaN(g)) {
                g = 0;
                var f = d.find(h + '[data-active="true"]').eq(0);
                if (f.length > 0) {
                    while (!f.parent().hasClass("trx_addons_accordion")) {
                        f = f.parent()
                    }
                    g = f.index();
                    if (isNaN(g) || g < 0) {
                        g = 0
                    }
                }
            } else {
                g = Math.max(0, g)
            }
            d.addClass("inited").accordion({
                active: g,
                header: h,
                heightStyle: e,
                create: function(i, j) {
                    if (j.panel.length > 0) {
                        jQuery(document).trigger("action.init_hidden_elements", [j.panel])
                    } else {
                        if (f !== false && f.length > 0) {
                            f.find(">" + h).trigger("click")
                        }
                    }
                },
                activate: function(i, j) {
                    if (j.newPanel.length > 0) {
                        jQuery(document).trigger("action.init_hidden_elements", [j.newPanel])
                    }
                }
            })
        })
    }
    jQuery(document).trigger("action.init_sliders", [b]);
    jQuery(document).trigger("action.init_shortcodes", [b]);
    if (b.find(".trx_addons_video_player.with_cover .video_hover:not(.inited)").length > 0) {
        b.find(".trx_addons_video_player.with_cover .video_hover:not(.inited)").addClass("inited").on("click", function(d) {
            jQuery(this).parents(".trx_addons_video_player").addClass("video_play").find(".video_embed").html(jQuery(this).data("video"));
            jQuery(window).trigger("resize");
            d.preventDefault();
            return false
        })
    }
    if (TRX_ADDONS_STORAGE.popup_engine == "pretty") {
        b.find("a[href$='jpg']:not(.inited),a[href$='jpeg']:not(.inited),a[href$='png']:not(.inited),a[href$='gif']:not(.inited)").attr("rel", "prettyPhoto[slideshow]");
        var a = b.find("a[rel*='prettyPhoto']:not(.inited):not(.esgbox):not([data-rel*='pretty']):not([rel*='magnific']):not([data-rel*='magnific'])").addClass("inited");
        try {
            a.prettyPhoto({
                social_tools: "",
                theme: "facebook",
                deeplinking: false
            })
        } catch (c) {}
    } else {
        if (TRX_ADDONS_STORAGE.popup_engine == "magnific") {
            b.find("a[href$='jpg']:not(.inited),a[href$='jpeg']:not(.inited),a[href$='png']:not(.inited),a[href$='gif']:not(.inited)").attr("rel", "magnific");
            var a = b.find("a[rel*='magnific']:not(.inited):not(.esgbox):not(.prettyphoto):not([rel*='pretty']):not([data-rel*='pretty'])").addClass("inited");
            try {
                a.magnificPopup({
                    type: "image",
                    mainClass: "mfp-img-mobile",
                    closeOnContentClick: true,
                    closeBtnInside: true,
                    fixedContentPos: true,
                    midClick: true,
                    preloader: true,
                    tLoading: TRX_ADDONS_STORAGE.msg_magnific_loading,
                    gallery: {
                        enabled: true
                    },
                    image: {
                        tError: TRX_ADDONS_STORAGE.msg_magnific_error,
                        verticalFit: true
                    },
                    zoom: {
                        enabled: true,
                        duration: 300,
                        easing: "ease-in-out",
                        opener: function(d) {
                            if (!d.is("img")) {
                                if (d.parents(".trx_addons_hover").find("img").length > 0) {
                                    d = d.parents(".trx_addons_hover").find("img")
                                } else {
                                    if (d.siblings("img").length > 0) {
                                        d = d.siblings("img")
                                    } else {
                                        if (d.parent().parent().find("img").length > 0) {
                                            d = d.parent().parent().find("img")
                                        }
                                    }
                                }
                            }
                            return d
                        }
                    },
                    callbacks: {
                        beforeClose: function() {
                            jQuery(".mfp-figure figcaption").hide();
                            jQuery(".mfp-figure .mfp-arrow").hide()
                        }
                    }
                })
            } catch (c) {}
        }
    }
    if (b.find(".post_counters_likes:not(.inited),.comment_counters_likes:not(.inited)").length > 0) {
        b.find(".post_counters_likes:not(.inited),.comment_counters_likes:not(.inited)").addClass("inited").on("click", function(d) {
            return false
        })
    }
    if (b.find(".socials_share .socials_caption:not(.inited)").length > 0) {
        b.find(".socials_share .socials_caption:not(.inited)").each(function() {
            jQuery(this).addClass("inited").on("click", function(d) {
                jQuery(this).siblings(".social_items").fadeToggle();
                d.preventDefault();
                return false
            })
        })
    }
    if (b.find(".socials_share .social_items:not(.inited)").length > 0) {
        b.find(".socials_share .social_items:not(.inited)").each(function() {
            jQuery(this).addClass("inited").on("click", ".social_item_popup > a.social_icons", function(f) {
                var d = jQuery(this).data("link");
                window.open(d, "_blank", "scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=480, height=400, toolbar=0, status=0");
                f.preventDefault();
                return false
            })
        })
    }
    b.find(".widget ul > li").each(function() {
        if (jQuery(this).find("ul").length > 0) {
            jQuery(this).addClass("has_children")
        }
    });
    b.find(".widget_archive a:not(.inited)").addClass("inited").each(function() {
        var d = jQuery(this).html().split(" ");
        if (d.length > 1) {
            d[d.length - 1] = "<span>" + d[d.length - 1] + "</span>";
            jQuery(this).html(d.join(" "))
        }
    });
    b.find(".trx_addons_scroll_to_top:not(.inited)").addClass("inited").on("click", function(d) {
        jQuery("html,body").animate({
            scrollTop: 0
        }, "slow");
        d.preventDefault();
        return false
    })
}

function trx_addons_scroll_actions() {
    var b = jQuery(window).scrollTop();
    var c = jQuery(".trx_addons_scroll_to_top");
    var a = Math.max(0, jQuery("#wpadminbar").height());
    if (c.length > 0) {
        if (b > 100) {
            c.addClass("show")
        } else {
            c.removeClass("show")
        }
    }
    jQuery('[data-animation^="animated"]:not(.animated)').each(function() {
        if (jQuery(this).offset().top < b + jQuery(window).height()) {
            jQuery(this).addClass(jQuery(this).data("animation"))
        }
    })
}

function trx_addons_resize_actions() {
    if (window.trx_addons_resize_sliders) {
        trx_addons_resize_sliders()
    }
    trx_addons_resize_video()
}

function trx_addons_resize_video() {
    jQuery("video").each(function() {
        var h = jQuery(this).eq(0);
        var d = (h.data("ratio") != undefined ? h.data("ratio").split(":") : [16, 9]);
        d = d.length != 2 || d[0] == 0 || d[1] == 0 ? 16 / 9 : d[0] / d[1];
        var g = h.parents(".mejs-video");
        var b = h.data("width");
        var f = h.data("height");
        if (!b || !f) {
            b = h.attr("width");
            f = h.attr("height");
            if (!b || !f) {
                return
            }
            h.data({
                width: b,
                height: f
            })
        }
        var e = ("" + b).substr(-1) == "%";
        b = parseInt(b, 0);
        f = parseInt(f, 0);
        var a = Math.round(g.length > 0 ? Math.min(e ? 10000 : b, g.parents("div,article").width()) : h.width()),
            c = Math.round(e ? a / d : a / b * f);
        if (parseInt(h.attr("data-last-width"), 0) == a) {
            return
        }
        if (g.length > 0 && mejs) {
            trx_addons_set_mejs_player_dimensions(h, a, c)
        }
        if (e) {
            h.height(c)
        } else {
            h.attr({
                width: a,
                height: c
            }).css({
                width: a + "px",
                height: c + "px"
            })
        }
        h.attr("data-last-width", a)
    });
    jQuery(".video_frame iframe").each(function() {
        var e = jQuery(this).eq(0);
        if (e.attr("src").indexOf("soundcloud") > 0) {
            return
        }
        var d = (e.data("ratio") != undefined ? e.data("ratio").split(":") : (e.parent().data("ratio") != undefined ? e.parent().data("ratio").split(":") : (e.find("[data-ratio]").length > 0 ? e.find("[data-ratio]").data("ratio").split(":") : [16, 9])));
        d = d.length != 2 || d[0] == 0 || d[1] == 0 ? 16 / 9 : d[0] / d[1];
        var b = e.attr("width");
        var g = e.attr("height");
        if (!b || !g) {
            return
        }
        var f = ("" + b).substr(-1) == "%";
        b = parseInt(b, 0);
        g = parseInt(g, 0);
        var a = e.parent().width(),
            c = Math.round(f ? a / d : a / b * g);
        if (parseInt(e.attr("data-last-width"), 0) == a) {
            return
        }
        e.css({
            width: a + "px",
            height: c + "px"
        });
        e.attr("data-last-width", a)
    })
}

function trx_addons_set_mejs_player_dimensions(d, a, c) {
    if (mejs) {
        for (var b in mejs.players) {
            if (mejs.players[b].media.src == d.attr("src")) {
                if (mejs.players[b].media.setVideoSize) {
                    mejs.players[b].media.setVideoSize(a, c)
                }
                mejs.players[b].setPlayerSize(a, c);
                mejs.players[b].setControlsSize()
            }
        }
    }
}

function trx_addons_init_sliders(b, a) {
    if (a.find(".slider_swiper:not(.inited)").length > 0) {
        a.find(".slider_swiper:not(.inited)").each(function() {
            if (jQuery(this).parents("div:hidden,article:hidden").length > 0) {
                return
            }
            var g = jQuery(this).attr("id");
            if (g == undefined) {
                g = "swiper_" + Math.random();
                g = g.replace(".", "");
                jQuery(this).attr("id", g)
            }
            jQuery(this).css({
                display: "block",
                opacity: 0
            }).addClass(g).addClass("inited").data("settings", {
                mode: "horizontal"
            });
            var c = jQuery(this).data("slides-min-width");
            if (c == undefined) {
                c = 250;
                jQuery(this).attr("data-slides-min-width", c)
            }
            var d = jQuery(this).width();
            if (d == 0) {
                d = jQuery(this).parent().width()
            }
            var f = jQuery(this).data("slides-per-view");
            if (f == undefined) {
                f = 1;
                jQuery(this).attr("data-slides-per-view", f)
            }
            if (d / f < c) {
                f = Math.max(1, Math.floor(d / c))
            }
            var e = jQuery(this).data("slides-space");
            if (e == undefined) {
                e = 0
            }
            if (TRX_ADDONS_STORAGE.swipers === undefined) {
                TRX_ADDONS_STORAGE.swipers = {}
            }
            TRX_ADDONS_STORAGE.swipers[g] = new Swiper("." + g, {
                calculateHeight: !jQuery(this).hasClass("slider_height_fixed"),
                resizeReInit: true,
                autoResize: true,
                loop: true,
                grabCursor: true,
                pagination: jQuery(this).hasClass("slider_pagination") ? "#" + g + " .slider_pagination_wrap" : false,
                paginationClickable: jQuery(this).hasClass("slider_pagination") ? "#" + g + " .slider_pagination_wrap" : false,
                nextButton: jQuery(this).hasClass("slider_controls") ? "#" + g + " .slider_next" : false,
                prevButton: jQuery(this).hasClass("slider_controls") ? "#" + g + " .slider_prev" : false,
                autoplay: jQuery(this).hasClass("slider_noautoplay") ? false : (jQuery(this).data("interval") == "" || isNaN(jQuery(this).data("interval")) ? 7000 : parseInt(jQuery(this).data("interval"), 0)),
                autoplayDisableOnInteraction: false,
                initialSlide: 0,
                slidesPerView: f,
                loopedSlides: f,
                spaceBetween: e,
                speed: 600
            });
            jQuery(this).animate({
                opacity: 1
            }, "fast")
        })
    }
}

function trx_addons_init_hidden_sliders(b, a) {
    trx_addons_init_sliders(b, a);
    trx_addons_resize_sliders(a)
}

function trx_addons_resize_sliders(a) {
    if (a === undefined) {
        a = jQuery("body")
    }
    a.find(".slider_swiper.inited").each(function() {
        if (jQuery(this).parents("div:hidden,article:hidden").length > 0) {
            return
        }
        var b = jQuery(this).attr("id");
        var c = jQuery(this).width();
        var j = jQuery(this).data("last-width");
        if (isNaN(j)) {
            j = 0
        }
        var e = jQuery(this).data("ratio");
        if (e === undefined) {
            e = "16:9"
        }
        e = e.split(":");
        var k = !isNaN(e[0]) ? Number(e[0]) : 16;
        var i = !isNaN(e[1]) ? Number(e[1]) : 9;
        if (j == 0 || j != c) {
            var g = jQuery(this).data("slides-min-width");
            var f = jQuery(this).data("slides-per-view");
            if (c / f < g) {
                f = Math.max(1, Math.floor(c / g))
            }
            jQuery(this).data("last-width", c);
            if (TRX_ADDONS_STORAGE.swipers[b].params.slidesPerView != f) {
                TRX_ADDONS_STORAGE.swipers[b].params.slidesPerView = f;
                TRX_ADDONS_STORAGE.swipers[b].params.loopedSlides = f
            }
        }
        if (!jQuery(this).hasClass("slider_height_fixed")) {
            var d = 0;
            if (jQuery(this).find(".swiper-slide > img").length > 0) {
                jQuery(this).find(".swiper-slide > img").each(function() {
                    if (jQuery(this).height() > d) {
                        d = jQuery(this).height()
                    }
                });
                jQuery(this).height(d)
            } else {
                if (jQuery(this).find(".swiper-slide").text() == "" || jQuery(this).hasClass("slider_height_auto")) {
                    jQuery(this).height(Math.floor(c / k * i))
                }
            }
        }
    })
}

function trx_addons_get_cookie(c) {
    var d = arguments[1] != undefined ? arguments[1] : null;
    var e = document.cookie.indexOf(c + "=");
    var a = e + c.length + 1;
    if ((!e) && (c != document.cookie.substring(0, c.length))) {
        return d
    }
    if (e == -1) {
        return d
    }
    var b = document.cookie.indexOf(";", a);
    if (b == -1) {
        b = document.cookie.length
    }
    return unescape(document.cookie.substring(a, b))
}

function trx_addons_set_cookie(c, e, a, h, d, g) {
    var a = arguments[2] != undefined ? arguments[2] : 0;
    var h = arguments[3] != undefined ? arguments[3] : "/";
    var d = arguments[4] != undefined ? arguments[4] : "";
    var g = arguments[5] != undefined ? arguments[5] : "";
    var b = new Date();
    b.setTime(b.getTime());
    if (a) {
        a = a * 1000 * 60 * 60 * 24
    }
    var f = new Date(b.getTime() + (a));
    document.cookie = c + "=" + escape(e) + ((a) ? ";expires=" + f.toGMTString() : "") + ((h) ? ";path=" + h : "") + ((d) ? ";domain=" + d : "") + ((g) ? ";secure" : "")
}

function trx_addons_del_cookie(a, c, b) {
    var c = arguments[1] != undefined ? arguments[1] : "/";
    var b = arguments[2] != undefined ? arguments[2] : "";
    if (trx_addons_get_cookie(a)) {
        document.cookie = a + "=" + ((c) ? ";path=" + c : "") + ((b) ? ";domain=" + b : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT"
    }
}

function trx_addons_clear_listbox(b) {
    for (var a = b.options.length - 1; a >= 0; a--) {
        b.options[a] = null
    }
}

function trx_addons_add_listbox_item(b, d, c) {
    var a = new Option();
    a.value = d;
    a.text = c;
    b.options.add(a)
}

function trx_addons_del_listbox_item_by_value(b, c) {
    for (var a = 0; a < b.options.length; a++) {
        if (b.options[a].value == c) {
            b.options[a] = null;
            break
        }
    }
}

function trx_addons_del_listbox_item_by_text(c, a) {
    for (var b = 0; b < c.options.length; b++) {
        if (c.options[b].text == a) {
            c.options[b] = null;
            break
        }
    }
}

function trx_addons_find_listbox_item_by_value(c, d) {
    var a = -1;
    for (var b = 0; b < c.options.length; b++) {
        if (c.options[b].value == d) {
            a = b;
            break
        }
    }
    return a
}

function trx_addons_find_listbox_item_by_text(d, b) {
    var a = -1;
    for (var c = 0; c < d.options.length; c++) {
        if (d.options[c].text == b) {
            a = c;
            break
        }
    }
    return a
}

function trx_addons_select_listbox_item_by_value(b, c) {
    for (var a = 0; a < b.options.length; a++) {
        b.options[a].selected = (c == b.options[a].value)
    }
}

function trx_addons_select_listbox_item_by_text(c, a) {
    for (var b = 0; b < c.options.length; b++) {
        c.options[b].selected = (a == c.options[b].text)
    }
}

function trx_addons_get_listbox_values(b) {
    var d = arguments[1] ? arguments[1] : ",";
    var c = "";
    for (var a = 0; a < b.options.length; a++) {
        c += (c ? d : "") + b.options[a].value
    }
    return c
}

function trx_addons_get_listbox_texts(b) {
    var d = arguments[1] ? arguments[1] : ",";
    var c = "";
    for (var a = 0; a < b.options.length; a++) {
        c += (c ? d : "") + b.options[a].text
    }
    return c
}

function trx_addons_sort_listbox(d) {
    var e = new Array();
    var b = new Option();
    for (var c = 0; c < d.options.length; c++) {
        e[c] = d.options[c].clone()
    }
    for (var a = 0; a < e.length - 1; a++) {
        for (var f = (a + 1); f < e.length; f++) {
            if (e[a].text > e[f].text) {
                b = e[a];
                e[a] = e[f];
                e[f] = b
            }
        }
    }
    for (var c = 0; c < d.options.length; c++) {
        d.options[c] = e[c].clone()
    }
}

function trx_addons_get_listbox_selected_index(b) {
    for (var a = 0; a < b.options.length; a++) {
        if (b.options[a].selected) {
            return a
        }
    }
    return -1
}

function trx_addons_get_listbox_selected_value(b) {
    for (var a = 0; a < b.options.length; a++) {
        if (b.options[a].selected) {
            return b.options[a].value
        }
    }
    return null
}

function trx_addons_get_listbox_selected_text(b) {
    for (var a = 0; a < b.options.length; a++) {
        if (b.options[a].selected) {
            return b.options[a].text
        }
    }
    return null
}

function trx_addons_get_listbox_selected_option(b) {
    for (var a = 0; a < b.options.length; a++) {
        if (b.options[a].selected) {
            return b.options[a]
        }
    }
    return null
}

function trx_addons_get_radio_value(b) {
    for (var a = 0; a < b.length; a++) {
        if (b[a].checked) {
            return b[a].value
        }
    }
    return null
}

function trx_addons_set_radio_checked_by_num(c, a) {
    for (var b = 0; b < c.length; b++) {
        if (c[b].checked && b != a) {
            c[b].checked = false
        } else {
            if (b == a) {
                c[b].checked = true
            }
        }
    }
}

function trx_addons_set_radio_checked_by_value(b, c) {
    for (var a = 0; a < b.length; a++) {
        if (b[a].checked && b[a].value != c) {
            b[a].checked = false
        } else {
            if (b[a].value == c) {
                b[a].checked = true
            }
        }
    }
}

function trx_addons_form_validate(c, b) {
    if (typeof(b.error_message_show) == "undefined") {
        b.error_message_show = true
    }
    if (typeof(b.error_message_time) == "undefined") {
        b.error_message_time = 5000
    }
    if (typeof(b.error_message_class) == "undefined") {
        b.error_message_class = "trx_addons_message_box_error"
    }
    if (typeof(b.error_message_text) == "undefined") {
        b.error_message_text = "Incorrect data in the fields!"
    }
    if (typeof(b.error_fields_class) == "undefined") {
        b.error_fields_class = "trx_addons_field_error"
    }
    if (typeof(b.exit_after_first_error) == "undefined") {
        b.exit_after_first_error = false
    }
    var a = "";
    c.find(":input").each(function() {
        if (a != "" && b.exit_after_first_error) {
            return
        }
        for (var f = 0; f < b.rules.length; f++) {
            if (jQuery(this).attr("name") == b.rules[f].field) {
                var h = jQuery(this).val();
                var e = false;
                if (typeof(b.rules[f].min_length) == "object") {
                    if (b.rules[f].min_length.value > 0 && h.length < b.rules[f].min_length.value) {
                        if (a == "") {
                            jQuery(this).get(0).focus()
                        }
                        a += '<p class="trx_addons_error_item">' + (typeof(b.rules[f].min_length.message) != "undefined" ? b.rules[f].min_length.message : b.error_message_text) + "</p>";
                        e = true
                    }
                }
                if ((!e || !b.exit_after_first_error) && typeof(b.rules[f].max_length) == "object") {
                    if (b.rules[f].max_length.value > 0 && h.length > b.rules[f].max_length.value) {
                        if (a == "") {
                            jQuery(this).get(0).focus()
                        }
                        a += '<p class="trx_addons_error_item">' + (typeof(b.rules[f].max_length.message) != "undefined" ? b.rules[f].max_length.message : b.error_message_text) + "</p>";
                        e = true
                    }
                }
                if ((!e || !b.exit_after_first_error) && typeof(b.rules[f].mask) == "object") {
                    if (b.rules[f].mask.value != "") {
                        var g = new RegExp(b.rules[f].mask.value);
                        if (!g.test(h)) {
                            if (a == "") {
                                jQuery(this).get(0).focus()
                            }
                            a += '<p class="trx_addons_error_item">' + (typeof(b.rules[f].mask.message) != "undefined" ? b.rules[f].mask.message : b.error_message_text) + "</p>";
                            e = true
                        }
                    }
                }
                if ((!e || !b.exit_after_first_error) && typeof(b.rules[f].equal_to) == "object") {
                    if (b.rules[f].equal_to.value != "" && h != jQuery(jQuery(this).get(0).form[b.rules[f].equal_to.value]).val()) {
                        if (a == "") {
                            jQuery(this).get(0).focus()
                        }
                        a += '<p class="trx_addons_error_item">' + (typeof(b.rules[f].equal_to.message) != "undefined" ? b.rules[f].equal_to.message : b.error_message_text) + "</p>";
                        e = true
                    }
                }
                if (b.error_fields_class != "") {
                    jQuery(this).toggleClass(b.error_fields_class, e)
                }
            }
        }
    });
    if (a != "" && b.error_message_show) {
        var d = c.find(".trx_addons_message_box");
        if (d.length == 0) {
            d = c.parent().find(".trx_addons_message_box")
        }
        if (d.length == 0) {
            c.append('<div class="trx_addons_message_box"></div>');
            d = c.find(".trx_addons_message_box")
        }
        if (b.error_message_class) {
            d.toggleClass(b.error_message_class, true)
        }
        d.html(a).fadeIn();
        setTimeout(function() {
            d.fadeOut()
        }, b.error_message_time)
    }
    return a != ""
}

function trx_addons_document_animate_to(f, e) {
    var b = !isNaN(f) ? Number(f) : 0;
    if (isNaN(f)) {
        if (f.indexOf("#") == -1) {
            f = "#" + f
        }
        var d = jQuery(f).eq(0);
        if (d.length == 0) {
            return
        }
        b = d.offset().top
    }
    var a = jQuery(window).scrollTop();
    var c = Math.min(1200, Math.max(400, Math.round(Math.abs(b - a) / jQuery(window).height() * 100)));
    jQuery("body,html").stop(true).animate({
        scrollTop: b - jQuery("#wpadminbar").height() + 1
    }, c, "linear", e)
}

function trx_addons_document_set_location(a) {
    if (history.pushState === undefined || navigator.userAgent.match(/MSIE\s[6-9]/i) != null) {
        return
    }
    try {
        history.pushState(null, null, a);
        return
    } catch (b) {}
    location.href = a
}

function trx_addons_add_to_url(j) {
    var c = arguments[1] !== undefined ? arguments[1] : true;
    var f = location.href;
    var a = f.indexOf("?");
    var g = {};
    if (a > 0) {
        var h = f.substr(a + 1).split("&");
        var d = "";
        for (var e = 0; e < h.length; e++) {
            var d = h[e].split("=");
            g[d[0]] = d.length > 1 ? d[1] : ""
        }
    }
    for (var b in j) {
        g[b] = j[b]
    }
    f = (a > 0 ? f.substr(0, a) : f) + "?";
    var e = 0;
    for (b in g) {
        if (c && g[b] == "") {
            continue
        }
        f += (e++ > 0 ? "&" : "") + b + "=" + g[b]
    }
    return f
}

function trx_addons_browser_is_mobile() {
    var a = false;
    (function(b) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) {
            a = true
        }
    })(navigator.userAgent || navigator.vendor || window.opera);
    return a
}

function trx_addons_browser_is_ios() {
    return navigator.userAgent.match(/iPad|iPhone|iPod/i) != null || navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false
}

function trx_addons_is_retina() {
    var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
    return (window.devicePixelRatio > 1) || (window.matchMedia && window.matchMedia(a).matches)
}

function trx_addons_get_file_name(a) {
    a = a.replace(/\\/g, "/");
    var b = a.lastIndexOf("/");
    if (b >= 0) {
        a = a.substr(b + 1)
    }
    return a
}

function trx_addons_get_file_ext(a) {
    var b = a.lastIndexOf(".");
    a = b >= 0 ? a.substr(b + 1) : "";
    return a
}

function trx_addons_check_images_complete(a) {
    var b = true;
    a.find("img").each(function() {
        if (!b) {
            return
        }
        if (!jQuery(this).get(0).complete) {
            b = false
        }
    });
    return b
}

function trx_addons_serialize(c) {
    var f = arguments.length == 1 || argument[1] === true;
    switch (typeof(c)) {
        case "number":
            if (isNaN(c) || !isFinite(c)) {
                return false
            } else {
                return (Math.floor(c) == c ? "i" : "d") + ":" + c + ";"
            }
        case "string":
            return "s:" + c.length + ':"' + c + '";';
        case "boolean":
            return "b:" + (c ? "1" : "0") + ";";
        case "object":
            if (c == null) {
                return "N;"
            } else {
                if (c instanceof Array) {
                    var g = {
                        idx: -1
                    };
                    var b = [];
                    for (var e = 0; e < c.length; e++) {
                        g.idx++;
                        var j = trx_addons_serialize(c[e]);
                        if (j) {
                            b.push(trx_addons_serialize(g.idx) + j)
                        }
                    }
                    return "a:" + c.length + ":{" + b.join("") + "}"
                } else {
                    var d = trx_addons_get_class(c);
                    if (d == undefined) {
                        return false
                    }
                    var h = new Array();
                    for (var a in c) {
                        var j = trx_addons_serialize(c[a]);
                        if (j) {
                            h.push(trx_addons_serialize(a) + j)
                        }
                    }
                    if (f) {
                        return "a:" + h.length + ":{" + h.join("") + "}"
                    } else {
                        return "O:" + d.length + ':"' + d + '":' + h.length + ":{" + h.join("") + "}"
                    }
                }
            }
        case "undefined":
            return "N;"
    }
    return false
}

function trx_addons_get_class(b) {
    if (b instanceof Object && !(b instanceof Array) && !(b instanceof Function) && b.constructor) {
        var a = b.constructor.toString().match(/function\s*(\w+)/);
        if (a && a.length == 2) {
            return a[1]
        }
    }
    return false
}
jQuery(document).on("action.ready", function(a) {
    if (PJ_STORAGE.menu_hover == "slide_line" || PJ_STORAGE.menu_hover == "slide_box") {
        setTimeout(function() {
            jQuery("#menu_main").spasticNav({
                style: PJ_STORAGE.menu_hover == "slide_line" ? "line" : "box",
                color: PJ_STORAGE.menu_hover_color,
                colorOverride: false
            })
        }, 500)
    }
});
jQuery(document).on("action.init_hidden_elements", function(b, a) {
    if (PJ_STORAGE.button_hover) {
        jQuery('button:not(.search_submit):not([class*="sc_button_hover_"]),				.theme_button:not([class*="sc_button_hover_"]),				.sc_tabs ul.sc_tabs_titles li a:not([class*="sc_button_hover_"]),				.sc_item_button > a:not([class*="sc_button_hover_"]),				.sc_form_field button:not([class*="sc_button_hover_"]),				.sc_price_link:not([class*="sc_button_hover_"]),				.more-link:not([class*="sc_button_hover_"]),				.trx_addons_hover_content .trx_addons_hover_links a:not([class*="sc_button_hover_"]),				.tribe-events-button:not([class*="sc_button_hover_"]),				.tribe-events-cal-links a:not([class*="sc_button_hover_"]),				.tribe-events-sub-nav li a:not([class*="sc_button_hover_"]),				.woocommerce .button:not([class*="sc_button_hover_"]),				.woocommerce-page .button:not([class*="sc_button_hover_"]),				#buddypress a.button:not([class*="sc_button_hover_"])').addClass("sc_button_hover_" + PJ_STORAGE.button_hover);
        if (PJ_STORAGE.button_hover != "arrow") {
            jQuery('input[type="submit"]:not([class*="sc_button_hover_"]),					input[type="button"]:not([class*="sc_button_hover_"]),					.vc_tta-accordion .vc_tta-panel-heading .vc_tta-controls-icon:not([class*="sc_button_hover_"]),					.vc_tta-color-grey.vc_tta-style-classic .vc_tta-tab > a:not([class*="sc_button_hover_"]),					.single-product div.product .trx-stretch-width .woocommerce-tabs .wc-tabs li a,					.isotope_filters_button:not([class*="sc_button_hover_"]),					.trx_addons_scroll_to_top:not([class*="sc_button_hover_"]),					.socials_wrap:not(.socials_type_drop) .social_icons:not([class*="sc_button_hover_"]),					.slider_prev:not([class*="sc_button_hover_"]), .slider_next:not([class*="sc_button_hover_"]),					.tagcloud > a:not([class*="sc_button_hover_"])').addClass("sc_button_hover_" + PJ_STORAGE.button_hover)
        }
    }
});
jQuery(document).on("action.init_shortcodes", function(f, c) {
    var h = jQuery("#toc_menu");
    if (h.length == 0) {
        trx_addons_build_page_toc()
    }
    h = jQuery("#toc_menu:not(.inited)");
    if (h.length == 0) {
        return
    }
    var d = h.addClass("inited").find(".toc_menu_item");
    i();
    var j = false,
        g = 0;
    h.on("click", "a", function(n) {
        var k = jQuery(this).attr("href");
        if (k === undefined) {
            return
        }
        var p = k.indexOf("#");
        if (p < 0 || k.length == 1) {
            return
        }
        if (jQuery(k.substr(p)).length > 0) {
            var o = window.location.href;
            var m = o.indexOf("#");
            if (m > 0) {
                o = o.substring(0, m)
            }
            var l = p == 0;
            if (!l) {
                l = o == k.substring(0, p)
            }
            if (l) {
                j = true;
                setTimeout(function() {
                    j = false
                }, 100);
                trx_addons_document_animate_to(k.substr(p), function() {
                    if (TRX_ADDONS_STORAGE.update_location_from_anchor == 1) {
                        trx_addons_document_set_location(p == 0 ? o + k : k)
                    }
                });
                n.preventDefault();
                return false
            }
        }
    });
    jQuery(window).on("scroll", function() {
        a()
    });
    a();
    if (TRX_ADDONS_STORAGE.scroll_to_anchor == 1) {
        setTimeout(function() {}, 300);
        var b = false;
        jQuery(document).on("action.stop_wheel_handlers", function(k) {
            b = true
        });
        jQuery(document).on("action.start_wheel_handlers", function(k) {
            b = false
        });
        jQuery(window).bind("mousewheel DOMMouseScroll", function(m) {
            if (screen.width < 960 || jQuery(window).width() < 960 || b) {
                return
            }
            if (j || g == m.timeStamp) {
                m.preventDefault();
                return false
            }
            g = m.timeStamp;
            var l = m.originalEvent.wheelDelta > 0 || m.originalEvent.detail < 0 ? -1 : 1;
            var k = i();
            var n = false;
            if (l == -1) {
                n = true;
                setTimeout(function() {
                    if (k.prev >= 0) {
                        d.eq(k.prev).find("a").trigger("click")
                    } else {
                        trx_addons_document_animate_to(0)
                    }
                }, 10)
            } else {
                if (k.next >= 0) {
                    n = true;
                    setTimeout(function() {
                        d.eq(k.next).find("a").trigger("click")
                    }, 10)
                }
            }
            if (n) {
                j = true;
                setTimeout(function() {
                    j = false
                }, 100);
                m.preventDefault();
                return false
            }
        })
    }

    function i() {
        var e = {
            loc: "",
            current: [],
            prev: -1,
            next: -1
        };
        d.each(function(s) {
            var k = jQuery(this).find("a").attr("href");
            var p = k.indexOf("#");
            if (p < 0 || k.length == 1) {
                return
            }
            var n = window.location.href;
            var q = n.indexOf("#");
            if (q > 0) {
                n = n.substring(0, q)
            }
            var l = p == 0;
            if (!l) {
                l = n == href.substring(0, p)
            }
            if (!l) {
                return
            }
            var m = jQuery(k).offset().top;
            var r = jQuery(this).next().find("a").attr("href");
            var t = r ? jQuery(r).offset().top : 1000000;
            var o = jQuery(window).scrollTop();
            if (m > o + 50) {
                if (e.next < 0) {
                    e.next = s
                }
            } else {
                if (m < o - 50) {
                    e.prev = s
                }
            }
            if (m < o + jQuery(window).height() * 0.8 && o < t - 50) {
                e.current.push(s);
                if (e.loc == "") {
                    e.loc = p == 0 ? n + k : k
                }
            }
        });
        return e
    }

    function a() {
        var e = i();
        d.removeClass("toc_menu_item_active");
        for (var k = 0; k < e.current.length; k++) {
            d.eq(e.current[k]).addClass("toc_menu_item_active");
            if (e.loc != "" && TRX_ADDONS_STORAGE.update_location_from_anchor == 1 && !trx_addons_browser_is_mobile() && !trx_addons_browser_is_ios() && !j) {
                trx_addons_document_set_location(e.loc)
            }
        }
    }
});

function trx_addons_build_page_toc() {
    var b = "",
        a = 0;
    jQuery('[id^="toc_menu_"],.sc_anchor').each(function(k) {
        var f = jQuery(this);
        var h = f.attr("id") || ("sc_anchor_" + Math.random()).replace(".", "");
        var m = f.parents(".wpb_row");
        if (m.length == 0) {
            m = f.parent()
        }
        var c = m.length > 0 && m.attr("id") != undefined && m.attr("id") != "" ? m.attr("id") : "";
        var e = c || h.substr(10);
        if (m.length > 0 && c == "") {
            m.attr("id", e)
        }
        var d = f.data("url");
        var i = f.data("icon") || "toc_menu_icon_default";
        var j = f.attr("title");
        var l = f.data("description");
        var g = f.data("separator");
        a++;
        b += '<div class="toc_menu_item' + (g == "yes" ? " toc_menu_separator" : "") + '">' + (j || l ? '<a href="' + (d ? d : "#" + e) + '" class="toc_menu_description">' + (j ? '<span class="toc_menu_description_title">' + j + "</span>" : "") + (l ? '<span class="toc_menu_description_text">' + l + "</span>" : "") + "</a>" : "") + '<a href="' + (d ? d : "#" + e) + '" class="toc_menu_icon ' + i + '"></a></div>'
    });
    if (a > 0) {
        jQuery("body").append('<div id="toc_menu" class="toc_menu"><div class="toc_menu_inner">' + b + "</div></div>")
    }
}
jQuery(document).on("action.init_shortcodes", function(b, a) {
    if (a.find(".sc_form_form:not(.inited):not(.contact_1)").length > 0) {
        a.find(".sc_form_form:not(.inited):not(.contact_1)").addClass("inited").submit(function(c) {
            sc_form_validate(jQuery(this));
            c.preventDefault();
            return false
        })
    }
    jQuery('[class*="sc_input_hover_"] input, [class*="sc_input_hover_"] textarea').each(function() {
        if (jQuery(this).val() != "") {
            jQuery(this).addClass("filled")
        } else {
            jQuery(this).removeClass("filled")
        }
    });
    jQuery('[class*="sc_input_hover_"] input, [class*="sc_input_hover_"] textarea').on("blur", function() {
        if (jQuery(this).val() != "") {
            jQuery(this).addClass("filled")
        } else {
            jQuery(this).removeClass("filled")
        }
    })
});

function sc_form_validate(c) {
    var b = c.attr("action");
    if (b == "") {
        return false
    }
    c.find("input").removeClass("trx_addons_error_field");
    var a = trx_addons_form_validate(c, {
        rules: [{
            field: "name",
            min_length: {
                value: 1,
                message: TRX_ADDONS_STORAGE.msg_field_name_empty
            }
        }, {
            field: "email",
            min_length: {
                value: 7,
                message: TRX_ADDONS_STORAGE.msg_field_email_empty
            },
            mask: {
                value: TRX_ADDONS_STORAGE.email_mask,
                message: TRX_ADDONS_STORAGE.msg_field_email_not_valid
            }
        }, {
            field: "message",
            min_length: {
                value: 3,
                message: TRX_ADDONS_STORAGE.msg_field_text_empty
            }
        }]
    });
    if (!a && b != "#") {}
    return !a
}

function trx_addons_sc_skills_init(c, a) {
    if (arguments.length < 2) {
        var a = jQuery("body")
    }
    var b = jQuery(window).scrollTop() + jQuery(window).height();
    a.find(".sc_skills_item:not(.inited)").each(function() {
        var v = jQuery(this);
        if (jQuery(this).parents("div:hidden,article:hidden").length > 0) {
            return
        }
        var e = v.offset().top;
        if (b > e) {
            v.addClass("inited");
            var x = v.parents(".sc_skills").eq(0);
            var i = x.data("type");
            var A = (i == "pie" && x.hasClass("sc_skills_compact_on")) ? v.find(".sc_skills_data .pie") : v.find(".sc_skills_total").eq(0);
            var j = parseInt(A.data("start"), 0);
            var s = parseInt(A.data("stop"), 0);
            var w = parseInt(A.data("max"), 0);
            var z = Math.round(j / w * 100);
            var y = Math.round(s / w * 100);
            var k = A.data("ed");
            var t = parseInt(A.data("speed"), 0);
            var m = parseInt(A.data("step"), 0);
            var d = parseInt(A.data("duration"), 0);
            if (isNaN(d)) {
                d = Math.ceil(w / m) * t
            }
            if (i == "bar") {
                var q = x.data("dir");
                var o = v.find(".sc_skills_count").eq(0);
                if (q == "horizontal") {
                    o.css("width", z + "%").animate({
                        width: y + "%"
                    }, d)
                } else {
                    if (q == "vertical") {
                        o.css("height", z + "%").animate({
                            height: y + "%"
                        }, d)
                    }
                }
                trx_addons_sc_skills_animate_counter(j, s, t, m, k, A)
            } else {
                if (i == "counter") {
                    trx_addons_sc_skills_animate_counter(j, s, t, m, k, A)
                } else {
                    if (i == "pie") {
                        var u = parseInt(A.data("steps"), 0);
                        var p = A.data("bg_color");
                        var l = A.data("border_color");
                        var n = parseInt(A.data("cutout"), 0);
                        var r = A.data("easing");
                        var h = {
                            segmentShowStroke: l != "",
                            segmentStrokeColor: l,
                            segmentStrokeWidth: l != "" ? 1 : 0,
                            percentageInnerCutout: n,
                            animationSteps: u,
                            animationEasing: r,
                            animateRotate: true,
                            animateScale: false
                        };
                        var g = [];
                        A.each(function() {
                            var C = jQuery(this).data("color");
                            var D = parseInt(jQuery(this).data("stop"), 0);
                            var B = Math.round(D / w * 100);
                            g.push({
                                value: B,
                                color: C
                            })
                        });
                        if (A.length == 1) {
                            trx_addons_sc_skills_animate_counter(j, s, Math.round(1500 / u), m, k, A);
                            g.push({
                                value: 100 - y,
                                color: p
                            })
                        }
                        var f = v.find("canvas");
                        f.attr({
                            width: v.width(),
                            height: v.width()
                        }).css({
                            width: v.width(),
                            height: v.height()
                        });
                        new Chart(f.get(0).getContext("2d")).Doughnut(g, h)
                    }
                }
            }
        }
    })
}

function trx_addons_sc_skills_animate_counter(f, b, e, d, a, c) {
    f = Math.min(b, f + d);
    c.text(f + a);
    if (f < b) {
        setTimeout(function() {
            trx_addons_sc_skills_animate_counter(f, b, e, d, a, c)
        }, e)
    }
};

/* 1. _utils.js */
if (typeof PJ_STORAGE == "undefined") {
    var PJ_STORAGE = {}
}

function pj_storage_get(a) {
    return pj_isset(PJ_STORAGE[a]) ? PJ_STORAGE[a] : ""
}

function pj_storage_set(b, a) {
    PJ_STORAGE[b] = a
}

function pj_storage_inc(b) {
    var a = arguments[1] == undefined ? 1 : arguments[1];
    PJ_STORAGE[b] += a
}

function pj_storage_concat(b, a) {
    PJ_STORAGE[b] += "" + a
}

function pj_storage_get_array(b, a) {
    return pj_isset(PJ_STORAGE[b][a]) ? PJ_STORAGE[b][a] : ""
}

function pj_storage_set_array(c, a, b) {
    if (!pj_isset(PJ_STORAGE[c])) {
        PJ_STORAGE[c] = {}
    }
    PJ_STORAGE[c][a] = b
}

function pj_storage_inc_array(c, a) {
    var b = arguments[2] == undefined ? 1 : arguments[2];
    PJ_STORAGE[c][a] += b
}

function pj_storage_concat_array(c, a, b) {
    PJ_STORAGE[c][a] += "" + b
}

function pj_isset(a) {
    return typeof(a) != "undefined"
}

function pj_empty(a) {
    return typeof(a) == "undefined" || (typeof(a) == "object" && a == null) || (typeof(a) == "array" && a.length == 0) || (typeof(a) == "string" && pj_alltrim(a) == "") || a === 0
}

function pj_is_array(a) {
    return typeof(a) == "array"
}

function pj_is_object(a) {
    return typeof(a) == "object"
}

function pj_clone_object(c) {
    if (c == null || typeof(c) != "object") {
        return c
    }
    var a = {};
    for (var b in c) {
        a[b] = pj_clone_object(c[b])
    }
    return a
}

function pj_merge_objects(c, b) {
    for (var a in b) {
        c[a] = b[a]
    }
    return c
}

function pj_serialize(c) {
    var f = arguments.length == 1 || argument[1] === true;
    switch (typeof(c)) {
        case "number":
            if (isNaN(c) || !isFinite(c)) {
                return false
            } else {
                return (Math.floor(c) == c ? "i" : "d") + ":" + c + ";"
            }
        case "string":
            return "s:" + c.length + ':"' + c + '";';
        case "boolean":
            return "b:" + (c ? "1" : "0") + ";";
        case "object":
            if (c == null) {
                return "N;"
            } else {
                if (c instanceof Array) {
                    var g = {
                        idx: -1
                    };
                    var b = [];
                    for (var e = 0; e < c.length; e++) {
                        g.idx++;
                        var j = pj_serialize(c[e]);
                        if (j) {
                            b.push(pj_serialize(g.idx) + j)
                        }
                    }
                    return "a:" + c.length + ":{" + b.join("") + "}"
                } else {
                    var d = pj_get_class(c);
                    if (d == undefined) {
                        return false
                    }
                    var h = new Array();
                    for (var a in c) {
                        var j = pj_serialize(c[a]);
                        if (j) {
                            h.push(pj_serialize(a) + j)
                        }
                    }
                    if (f) {
                        return "a:" + h.length + ":{" + h.join("") + "}"
                    } else {
                        return "O:" + d.length + ':"' + d + '":' + h.length + ":{" + h.join("") + "}"
                    }
                }
            }
        case "undefined":
            return "N;"
    }
    return false
}

function pj_get_class(b) {
    if (b instanceof Object && !(b instanceof Array) && !(b instanceof Function) && b.constructor) {
        var a = b.constructor.toString().match(/function\s*(\w+)/);
        if (a && a.length == 2) {
            return a[1]
        }
    }
    return false
}

function pj_in_list(g, d) {
    var f = arguments[2] ? arguments[2] : "|";
    var c = arguments[3] ? arguments[3] : true;
    var a = false;
    if (c) {
        if (typeof(g) == "string") {
            g = g.toLowerCase()
        }
        d = d.toLowerCase()
    }
    var e = d.split(f);
    for (var b = 0; b < e.length; b++) {
        if (e[b] == g) {
            a = true;
            break
        }
    }
    return a
}

function pj_alltrim(e) {
    var b = arguments[1] ? arguments[1] : "a";
    var d = "";
    var c, f = 0,
        a = e.length - 1;
    if (b == "a" || b == "l") {
        for (c = 0; c < e.length; c++) {
            if (e.substr(c, 1) != " ") {
                f = c;
                break
            }
        }
    }
    if (b == "a" || b == "r") {
        for (c = e.length - 1; c >= 0; c--) {
            if (e.substr(c, 1) != " ") {
                a = c;
                break
            }
        }
    }
    return e.substring(f, a + 1)
}

function pj_ltrim(a) {
    return pj_alltrim(a, "l")
}

function pj_rtrim(a) {
    return pj_alltrim(a, "r")
}

function pj_padl(e, a) {
    var c = arguments[2] ? arguments[2] : " ";
    var d = e.substr(0, a);
    if (d.length < a) {
        for (var b = 0; b < a - e.length; b++) {
            d += c
        }
    }
    return d
}

function pj_padr(e, a) {
    var c = arguments[2] ? arguments[2] : " ";
    var d = e.substr(0, a);
    if (d.length < a) {
        for (var b = 0; b < a - e.length; b++) {
            d = c + d
        }
    }
    return d
}

function pj_padc(e, a) {
    var c = arguments[2] ? arguments[2] : " ";
    var d = e.substr(0, a);
    if (d.length < a) {
        for (var b = 0; b < Math.floor((a - e.length) / 2); b++) {
            d = c + d + c
        }
    }
    return d + (d.length < a ? c : "")
}

function pj_replicate(d, a) {
    var c = "";
    for (var b = 0; b < a; b++) {
        c += d
    }
    return c
}

function pj_prepare_macros(a) {
    return a.replace(/\{\{/g, "<i>").replace(/\}\}/g, "</i>").replace(/\[\[/g, "<b>").replace(/\]\]/g, "</b>").replace(/\|\|/g, "<br>")
}

function pj_round_number(b) {
    var a = arguments[1] ? arguments[1] : 0;
    var c = Math.pow(10, a);
    return Math.round(b * c) / c
}

function pj_clear_number(c) {
    var b = arguments[1] ? arguments[1] : 0;
    var g = arguments[2] ? arguments[2] : 0;
    var e = "";
    var a = -1;
    c = "" + c;
    if (c == "") {
        c = "" + g
    }
    for (var d = 0; d < c.length; d++) {
        if (a == 0) {
            break
        } else {
            if (a > 0) {
                a--
            }
        }
        var f = c.substr(d, 1);
        if (f == ".") {
            if (b > 0) {
                e += f
            }
            a = b
        } else {
            if ((f >= 0 && f <= 9) || (f == "-" && d == 0)) {
                e += f
            }
        }
    }
    if (b > 0 && a != 0) {
        if (a == -1) {
            e += ".";
            a = b
        }
        for (d = a; d > 0; d--) {
            e += "0"
        }
    }
    return e
}

function pj_dec2hex(a) {
    return Number(a).toString(16)
}

function pj_hex2dec(a) {
    return parseInt(a, 16)
}

function pj_in_array(d, b) {
    var c = false;
    for (var a = 0; a < b.length - 1; a++) {
        if (b[a] == d) {
            c = true;
            break
        }
    }
    return c
}

function pj_sort_array(c) {
    var b = arguments[1] ? arguments[1] : false;
    for (var a = 0; a < c.length - 1; a++) {
        for (var d = (a + 1); d < c.length; d++) {
            if (b) {
                if (c[a] > c[d]) {
                    tmp = c[a];
                    c[a] = c[d];
                    c[d] = tmp
                }
            } else {
                if (c[a].toLowerCase() > c[d].toLowerCase()) {
                    tmp = c[a];
                    c[a] = c[d];
                    c[d] = tmp
                }
            }
        }
    }
    return c
}

function pj_parse_date(c) {
    c = c.replace(/\//g, "-").replace(/\./g, "-").replace(/T/g, " ").split("+")[0];
    var a = c.split(" ");
    var e = a[0].split("-");
    var b = a[1].split(":");
    e.push(b[0], b[1], b[2]);
    return e
}

function pj_get_date_difference(d) {
    var c = arguments[1] !== undefined ? arguments[1] : "";
    var g = arguments[2] !== undefined ? arguments[2] : true;
    var f = arguments[3] !== undefined ? arguments[3] : false;
    var b = pj_parse_date(d);
    d = Date.UTC(b[0], b[1], b[2], b[3], b[4], b[5]);
    if (c == "") {
        c = new Date();
        var a = [c.getFullYear(), c.getMonth() + 1, c.getDate(), c.getHours(), c.getMinutes(), c.getSeconds()]
    } else {
        var a = pj_parse_date(c)
    }
    c = Date.UTC(a[0], a[1], a[2], a[3], a[4], a[5]);
    var i = Math.round((c - d) / 1000);
    var j = Math.floor(i / (24 * 3600));
    i -= j * 24 * 3600;
    var h = Math.floor(i / 3600);
    i -= h * 3600;
    var e = Math.floor(i / 60);
    i -= e * 60;
    rez = "";
    if (j > 0) {
        rez += (rez != "" ? " " : "") + j + " day" + (j > 1 ? "s" : "")
    }
    if ((!g || rez == "") && h > 0) {
        rez += (rez != "" ? " " : "") + h + " hour" + (h > 1 ? "s" : "")
    }
    if ((!g || rez == "") && e > 0) {
        rez += (rez != "" ? " " : "") + e + " minute" + (e > 1 ? "s" : "")
    }
    if (f || rez == "") {
        rez += rez != "" || f ? (" " + i + " second" + (i > 1 ? "s" : "")) : "less then minute"
    }
    return rez
}

function pj_hex2rgb(a) {
    a = parseInt(((a.indexOf("#") > -1) ? a.substring(1) : a), 16);
    return {
        r: a >> 16,
        g: (a & 65280) >> 8,
        b: (a & 255)
    }
}

function pj_rgb2hex(a) {
    var c;
    a = a.replace(/\s/g, "").toLowerCase();
    if (a == "rgba(0,0,0,0)" || a == "rgba(0%,0%,0%,0%)") {
        a = "transparent"
    }
    if (a.indexOf("rgba(") == 0) {
        c = a.match(/^rgba\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i)
    } else {
        c = a.match(/^rgb\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i)
    }
    if (c) {
        a = "";
        for (var b = 1; b <= 3; b++) {
            a += Math.round((c[b][c[b].length - 1] == "%" ? 2.55 : 1) * parseInt(c[b])).toString(16).replace(/^(.)$/, "0$1")
        }
    } else {
        a = a.replace(/^#?([\da-f])([\da-f])([\da-f])$/i, "$1$1$2$2$3$3")
    }
    return (a.substr(0, 1) != "#" ? "#" : "") + a
}

function pj_components2hex(d, c, a) {
    return "#" + Number(d).toString(16).toUpperCase().replace(/^(.)$/, "0$1") + Number(c).toString(16).toUpperCase().replace(/^(.)$/, "0$1") + Number(a).toString(16).toUpperCase().replace(/^(.)$/, "0$1")
}

function pj_rgb2components(a) {
    a = pj_rgb2hex(a);
    var d = a.match(/^#?([\dabcdef]{2})([\dabcdef]{2})([\dabcdef]{2})$/i);
    if (!d) {
        return false
    }
    for (var c = 1, b = new Array(3); c <= 3; c++) {
        b[c - 1] = parseInt(d[c], 16)
    }
    return b
}

function pj_hex2hsb(a) {
    return pj_rgb2hsb(pj_hex2rgb(a))
}

function pj_hsb2hex(a) {
    var b = pj_hsb2rgb(a);
    return pj_components2hex(b.r, b.g, b.b)
}

function pj_rgb2hsb(b) {
    var a = {};
    a.b = Math.max(Math.max(b.r, b.g), b.b);
    a.s = (a.b <= 0) ? 0 : Math.round(100 * (a.b - Math.min(Math.min(b.r, b.g), b.b)) / a.b);
    a.b = Math.round((a.b / 255) * 100);
    if ((b.r == b.g) && (b.g == b.b)) {
        a.h = 0
    } else {
        if (b.r >= b.g && b.g >= b.b) {
            a.h = 60 * (b.g - b.b) / (b.r - b.b)
        } else {
            if (b.g >= b.r && b.r >= b.b) {
                a.h = 60 + 60 * (b.g - b.r) / (b.g - b.b)
            } else {
                if (b.g >= b.b && b.b >= b.r) {
                    a.h = 120 + 60 * (b.b - b.r) / (b.g - b.r)
                } else {
                    if (b.b >= b.g && b.g >= b.r) {
                        a.h = 180 + 60 * (b.b - b.g) / (b.b - b.r)
                    } else {
                        if (b.b >= b.r && b.r >= b.g) {
                            a.h = 240 + 60 * (b.r - b.g) / (b.b - b.g)
                        } else {
                            if (b.r >= b.b && b.b >= b.g) {
                                a.h = 300 + 60 * (b.r - b.b) / (b.r - b.g)
                            } else {
                                a.h = 0
                            }
                        }
                    }
                }
            }
        }
    }
    a.h = Math.round(a.h);
    return a
}

function pj_hsb2rgb(a) {
    var c = {};
    var g = Math.round(a.h);
    var f = Math.round(a.s * 255 / 100);
    var b = Math.round(a.b * 255 / 100);
    if (f == 0) {
        c.r = c.g = c.b = b
    } else {
        var i = b;
        var e = (255 - f) * b / 255;
        var d = (i - e) * (g % 60) / 60;
        if (g == 360) {
            g = 0
        }
        if (g < 60) {
            c.r = i;
            c.b = e;
            c.g = e + d
        } else {
            if (g < 120) {
                c.g = i;
                c.b = e;
                c.r = i - d
            } else {
                if (g < 180) {
                    c.g = i;
                    c.r = e;
                    c.b = e + d
                } else {
                    if (g < 240) {
                        c.b = i;
                        c.r = e;
                        c.g = i - d
                    } else {
                        if (g < 300) {
                            c.b = i;
                            c.g = e;
                            c.r = e + d
                        } else {
                            if (g < 360) {
                                c.r = i;
                                c.g = e;
                                c.b = i - d
                            } else {
                                c.r = 0;
                                c.g = 0;
                                c.b = 0
                            }
                        }
                    }
                }
            }
        }
    }
    return {
        r: Math.round(c.r),
        g: Math.round(c.g),
        b: Math.round(c.b)
    }
}

function pj_color_picker() {
    var e = arguments[0] ? arguments[0] : "iColorPicker" + Math.round(Math.random() * 1000);
    var a = arguments[1] ? arguments[1] : "#f00,#ff0,#0f0,#0ff,#00f,#f0f,#fff,#ebebeb,#e1e1e1,#d7d7d7,#cccccc,#c2c2c2,#b7b7b7,#acacac,#a0a0a0,#959595,#ee1d24,#fff100,#00a650,#00aeef,#2f3192,#ed008c,#898989,#7d7d7d,#707070,#626262,#555,#464646,#363636,#262626,#111,#000,#f7977a,#fbad82,#fdc68c,#fff799,#c6df9c,#a4d49d,#81ca9d,#7bcdc9,#6ccff7,#7ca6d8,#8293ca,#8881be,#a286bd,#bc8cbf,#f49bc1,#f5999d,#f16c4d,#f68e54,#fbaf5a,#fff467,#acd372,#7dc473,#39b778,#16bcb4,#00bff3,#438ccb,#5573b7,#5e5ca7,#855fa8,#a763a9,#ef6ea8,#f16d7e,#ee1d24,#f16522,#f7941d,#fff100,#8fc63d,#37b44a,#00a650,#00a99e,#00aeef,#0072bc,#0054a5,#2f3192,#652c91,#91278f,#ed008c,#ee105a,#9d0a0f,#a1410d,#a36209,#aba000,#588528,#197b30,#007236,#00736a,#0076a4,#004a80,#003370,#1d1363,#450e61,#62055f,#9e005c,#9d0039,#790000,#7b3000,#7c4900,#827a00,#3e6617,#045f20,#005824,#005951,#005b7e,#003562,#002056,#0c004b,#30004a,#4b0048,#7a0045,#7a0026";
    var b = a.split(",");
    var d = '<table class="colorPickerTable"><thead>';
    for (var c = 0; c < b.length; c++) {
        if (c % 16 == 0) {
            d += (c > 0 ? "</tr>" : "") + "<tr>"
        }
        d += '<td style="background-color:' + b[c] + '">&nbsp;</td>'
    }
    d += '</tr></thead><tbody><tr style="height:60px;"><td colspan="8" id="' + e + '_colorPreview" style="vertical-align:middle;text-align:center;border:1px solid #000;background:#fff;"><input style="width:55px;color:#000;border:1px solid rgb(0, 0, 0);padding:5px;background-color:#fff;font:11px Arial, Helvetica, sans-serif;" maxlength="7" /><a href="#" id="' + e + '_moreColors" class="iColorPicker_moreColors"></a></td><td colspan="8" id="' + e + '_colorOriginal" style="vertical-align:middle;text-align:center;border:1px solid #000;background:#fff;"><input style="width:55px;color:#000;border:1px solid rgb(0, 0, 0);padding:5px;background-color:#fff;font:11px Arial, Helvetica, sans-serif;" readonly="readonly" /></td></tr></tbody></table>';
    jQuery(document.createElement("div")).attr("id", e).css("display", "none").html(d).appendTo("body").addClass("iColorPickerTable").on("mouseover", "thead td", function() {
        var f = pj_rgb2hex(jQuery(this).css("background-color"));
        jQuery("#" + e + "_colorPreview").css("background", f);
        jQuery("#" + e + "_colorPreview input").val(f)
    }).on("keypress", "#" + e + "_colorPreview input", function(g) {
        var h = jQuery(this).val();
        if (h.length < 7 && ((g.which >= 48 && g.which <= 57) || (g.which >= 97 && g.which <= 102) || (g.which === 35 || h.length === 0))) {
            h += String.fromCharCode(g.which)
        } else {
            if (g.which == 8 && h.length > 0) {
                h = h.substring(0, h.length - 1)
            } else {
                if (g.which === 13 && (h.length === 4 || h.length === 7)) {
                    var f = jQuery("#" + e).data("field");
                    var i = jQuery("#" + e).data("func");
                    if (i != null && i != "undefined") {
                        i(f, h)
                    } else {
                        f.val(h).css("backgroundColor", h).trigger("change")
                    }
                    jQuery("#" + e + "_Bg").fadeOut(500);
                    jQuery("#" + e).fadeOut(500)
                } else {
                    g.preventDefault();
                    return false
                }
            }
        }
        if (h.substr(0, 1) === "#" && (h.length === 4 || h.length === 7)) {
            jQuery("#" + e + "_colorPreview").css("background", h)
        }
    }).on("click", "thead td", function(i) {
        var f = jQuery("#" + e).data("field");
        var h = jQuery("#" + e).data("func");
        var g = pj_rgb2hex(jQuery(this).css("background-color"));
        if (h != null && h != "undefined") {
            h(f, g)
        } else {
            f.val(g).css("backgroundColor", g).trigger("change")
        }
        jQuery("#" + e + "_Bg").fadeOut(500);
        jQuery("#" + e).fadeOut(500);
        i.preventDefault();
        return false
    }).on("click", "tbody .iColorPicker_moreColors", function(m) {
        var l = jQuery(this).parents("table").find("thead");
        var h = "";
        if (l.hasClass("more_colors")) {
            for (var k = 0; k < b.length; k++) {
                if (k % 16 == 0) {
                    h += (k > 0 ? "</tr>" : "") + "<tr>"
                }
                h += '<td style="background-color:' + b[k] + '">&nbsp;</td>'
            }
            l.removeClass("more_colors").empty().html(h + "</tr>");
            jQuery("#" + e + "_colorPreview").attr("colspan", 8);
            jQuery("#" + e + "_colorOriginal").attr("colspan", 8)
        } else {
            var g = [0, 0, 0],
                k = 0,
                f = -1;
            while (g[0] < 15 || g[1] < 15 || g[2] < 15) {
                if (k % 18 == 0) {
                    h += (k > 0 ? "</tr>" : "") + "<tr>"
                }
                k++;
                h += '<td style="background-color:' + pj_components2hex(g[0] * 16 + g[0], g[1] * 16 + g[1], g[2] * 16 + g[2]) + '">&nbsp;</td>';
                g[2] += 3;
                if (g[2] > 15) {
                    g[1] += 3;
                    if (g[1] > (f === 0 ? 6 : 15)) {
                        g[0] += 3;
                        if (g[0] > 15) {
                            if (f === 0) {
                                f = 1;
                                g[0] = 0;
                                g[1] = 9;
                                g[2] = 0
                            } else {
                                break
                            }
                        } else {
                            g[1] = (f < 1 ? 0 : 9);
                            g[2] = 0
                        }
                    } else {
                        g[2] = 0
                    }
                }
            }
            l.addClass("more_colors").empty().html(h + '<td  style="background-color:#ffffff" colspan="8">&nbsp;</td></tr>');
            jQuery("#" + e + "_colorPreview").attr("colspan", 9);
            jQuery("#" + e + "_colorOriginal").attr("colspan", 9)
        }
        jQuery("#" + e + " table.colorPickerTable thead td").css({
            width: "12px",
            height: "14px",
            border: "1px solid #000",
            cursor: "pointer"
        });
        m.preventDefault();
        return false
    });
    jQuery(document.createElement("div")).attr("id", e + "_Bg").on("click", function(f) {
        jQuery("#" + e + "_Bg").fadeOut(500);
        jQuery("#" + e).fadeOut(500);
        f.preventDefault();
        return false
    }).appendTo("body");
    jQuery("#" + e + " table.colorPickerTable thead td").css({
        width: "12px",
        height: "14px",
        border: "1px solid #000",
        cursor: "pointer"
    });
    jQuery("#" + e + " table.colorPickerTable").css({
        "border-collapse": "collapse"
    });
    jQuery("#" + e).css({
        border: "1px solid #ccc",
        background: "#333",
        padding: "5px",
        color: "#fff",
        "z-index": 999999
    });
    jQuery("#" + e + "_colorPreview").css({
        height: "50px"
    });
    return e
}

function pj_color_picker_show(a, d, c) {
    if (a === null || a === "") {
        a = jQuery(".iColorPickerTable").attr("id")
    }
    var g = d.offset();
    var i = jQuery("#" + a).width();
    var f = jQuery("#" + a).height();
    var e = g.left + i < jQuery(window).width() - 10 ? g.left : jQuery(window).width() - 10 - i;
    var j = g.top + d.outerHeight() + f < jQuery(document).scrollTop() + jQuery(window).height() - 10 ? g.top + d.outerHeight() : g.top - f - 13;
    jQuery("#" + a).data({
        field: d,
        func: c
    }).css({
        top: j + "px",
        left: e + "px",
        position: "absolute",
        "z-index": 100001
    }).fadeIn(500);
    jQuery("#" + a + "_Bg").css({
        position: "fixed",
        "z-index": 100000,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    }).fadeIn(500);
    var b = d.val().substr(0, 1) == "#" ? d.val() : pj_rgb2hex(d.css("backgroundColor"));
    jQuery("#" + a + "_colorPreview input,#" + a + "_colorOriginal input").val(b);
    jQuery("#" + a + "_colorPreview,#" + a + "_colorOriginal").css("background", b)
}

function pj_get_cookie(c) {
    var d = arguments[1] != undefined ? arguments[1] : null;
    var e = document.cookie.indexOf(c + "=");
    var a = e + c.length + 1;
    if ((!e) && (c != document.cookie.substring(0, c.length))) {
        return d
    }
    if (e == -1) {
        return d
    }
    var b = document.cookie.indexOf(";", a);
    if (b == -1) {
        b = document.cookie.length
    }
    return unescape(document.cookie.substring(a, b))
}

function pj_set_cookie(c, e, a, h, d, g) {
    var a = arguments[2] != undefined ? arguments[2] : 0;
    var h = arguments[3] != undefined ? arguments[3] : "/";
    var d = arguments[4] != undefined ? arguments[4] : "";
    var g = arguments[5] != undefined ? arguments[5] : "";
    var b = new Date();
    b.setTime(b.getTime());
    if (a) {
        a = a * 1000 * 60 * 60 * 24
    }
    var f = new Date(b.getTime() + (a));
    document.cookie = c + "=" + escape(e) + ((a) ? ";expires=" + f.toGMTString() : "") + ((h) ? ";path=" + h : "") + ((d) ? ";domain=" + d : "") + ((g) ? ";secure" : "")
}

function pj_del_cookie(a, c, b) {
    var c = arguments[1] != undefined ? arguments[1] : "/";
    var b = arguments[2] != undefined ? arguments[2] : "";
    if (pj_get_cookie(a)) {
        document.cookie = a + "=" + ((c) ? ";path=" + c : "") + ((b) ? ";domain=" + b : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT"
    }
}

function pj_clear_listbox(b) {
    for (var a = b.options.length - 1; a >= 0; a--) {
        b.options[a] = null
    }
}

function pj_add_listbox_item(b, d, c) {
    var a = new Option();
    a.value = d;
    a.text = c;
    b.options.add(a)
}

function pj_del_listbox_item_by_value(b, c) {
    for (var a = 0; a < b.options.length; a++) {
        if (b.options[a].value == c) {
            b.options[a] = null;
            break
        }
    }
}

function pj_del_listbox_item_by_text(c, a) {
    for (var b = 0; b < c.options.length; b++) {
        if (c.options[b].text == a) {
            c.options[b] = null;
            break
        }
    }
}

function pj_find_listbox_item_by_value(c, d) {
    var a = -1;
    for (var b = 0; b < c.options.length; b++) {
        if (c.options[b].value == d) {
            a = b;
            break
        }
    }
    return a
}

function pj_find_listbox_item_by_text(d, b) {
    var a = -1;
    for (var c = 0; c < d.options.length; c++) {
        if (d.options[c].text == b) {
            a = c;
            break
        }
    }
    return a
}

function pj_select_listbox_item_by_value(b, c) {
    for (var a = 0; a < b.options.length; a++) {
        b.options[a].selected = (c == b.options[a].value)
    }
}

function pj_select_listbox_item_by_text(c, a) {
    for (var b = 0; b < c.options.length; b++) {
        c.options[b].selected = (a == c.options[b].text)
    }
}

function pj_get_listbox_values(b) {
    var d = arguments[1] ? arguments[1] : ",";
    var c = "";
    for (var a = 0; a < b.options.length; a++) {
        c += (c ? d : "") + b.options[a].value
    }
    return c
}

function pj_get_listbox_texts(b) {
    var d = arguments[1] ? arguments[1] : ",";
    var c = "";
    for (var a = 0; a < b.options.length; a++) {
        c += (c ? d : "") + b.options[a].text
    }
    return c
}

function pj_sort_listbox(d) {
    var e = new Array();
    var b = new Option();
    for (var c = 0; c < d.options.length; c++) {
        e[c] = d.options[c].clone()
    }
    for (var a = 0; a < e.length - 1; a++) {
        for (var f = (a + 1); f < e.length; f++) {
            if (e[a].text > e[f].text) {
                b = e[a];
                e[a] = e[f];
                e[f] = b
            }
        }
    }
    for (var c = 0; c < d.options.length; c++) {
        d.options[c] = e[c].clone()
    }
}

function pj_get_listbox_selected_index(b) {
    for (var a = 0; a < b.options.length; a++) {
        if (b.options[a].selected) {
            return a
        }
    }
    return -1
}

function pj_get_listbox_selected_value(b) {
    for (var a = 0; a < b.options.length; a++) {
        if (b.options[a].selected) {
            return b.options[a].value
        }
    }
    return null
}

function pj_get_listbox_selected_text(b) {
    for (var a = 0; a < b.options.length; a++) {
        if (b.options[a].selected) {
            return b.options[a].text
        }
    }
    return null
}

function pj_get_listbox_selected_option(b) {
    for (var a = 0; a < b.options.length; a++) {
        if (b.options[a].selected) {
            return b.options[a]
        }
    }
    return null
}

function pj_get_radio_value(b) {
    for (var a = 0; a < b.length; a++) {
        if (b[a].checked) {
            return b[a].value
        }
    }
    return null
}

function pj_set_radio_checked_by_num(c, a) {
    for (var b = 0; b < c.length; b++) {
        if (c[b].checked && b != a) {
            c[b].checked = false
        } else {
            if (b == a) {
                c[b].checked = true
            }
        }
    }
}

function pj_set_radio_checked_by_value(b, c) {
    for (var a = 0; a < b.length; a++) {
        if (b[a].checked && b[a].value != c) {
            b[a].checked = false
        } else {
            if (b[a].value == c) {
                b[a].checked = true
            }
        }
    }
}

function pj_form_validate(c, b) {
    var a = "";
    c.find(":input").each(function() {
        if (a != "" && b.exit_after_first_error) {
            return
        }
        for (var f = 0; f < b.rules.length; f++) {
            if (jQuery(this).attr("name") == b.rules[f].field) {
                var h = jQuery(this).val();
                var e = false;
                if (typeof(b.rules[f].min_length) == "object") {
                    if (b.rules[f].min_length.value > 0 && h.length < b.rules[f].min_length.value) {
                        if (a == "") {
                            jQuery(this).get(0).focus()
                        }
                        a += '<p class="error_item">' + (typeof(b.rules[f].min_length.message) != "undefined" ? b.rules[f].min_length.message : b.error_message_text) + "</p>";
                        e = true
                    }
                }
                if ((!e || !b.exit_after_first_error) && typeof(b.rules[f].max_length) == "object") {
                    if (b.rules[f].max_length.value > 0 && h.length > b.rules[f].max_length.value) {
                        if (a == "") {
                            jQuery(this).get(0).focus()
                        }
                        a += '<p class="error_item">' + (typeof(b.rules[f].max_length.message) != "undefined" ? b.rules[f].max_length.message : b.error_message_text) + "</p>";
                        e = true
                    }
                }
                if ((!e || !b.exit_after_first_error) && typeof(b.rules[f].mask) == "object") {
                    if (b.rules[f].mask.value != "") {
                        var g = new RegExp(b.rules[f].mask.value);
                        if (!g.test(h)) {
                            if (a == "") {
                                jQuery(this).get(0).focus()
                            }
                            a += '<p class="error_item">' + (typeof(b.rules[f].mask.message) != "undefined" ? b.rules[f].mask.message : b.error_message_text) + "</p>";
                            e = true
                        }
                    }
                }
                if ((!e || !b.exit_after_first_error) && typeof(b.rules[f].equal_to) == "object") {
                    if (b.rules[f].equal_to.value != "" && h != jQuery(jQuery(this).get(0).form[b.rules[f].equal_to.value]).val()) {
                        if (a == "") {
                            jQuery(this).get(0).focus()
                        }
                        a += '<p class="error_item">' + (typeof(b.rules[f].equal_to.message) != "undefined" ? b.rules[f].equal_to.message : b.error_message_text) + "</p>";
                        e = true
                    }
                }
                if (b.error_fields_class != "") {
                    jQuery(this).toggleClass(b.error_fields_class, e)
                }
            }
        }
    });
    if (a != "" && b.error_message_show) {
        var d = c.find(".result");
        if (d.length == 0) {
            d = c.parent().find(".result")
        }
        if (d.length == 0) {
            c.append('<div class="result"></div>');
            d = c.find(".result")
        }
        if (b.error_message_class) {
            d.toggleClass(b.error_message_class, true)
        }
        d.html(a).fadeIn();
        setTimeout(function() {
            d.fadeOut()
        }, b.error_message_time)
    }
    return a != ""
}

function pj_document_animate_to(e) {
    if (e.indexOf("#") == -1) {
        e = "#" + e
    }
    var d = jQuery(e).eq(0);
    if (d.length == 0) {
        return
    }
    var b = jQuery(e).offset().top;
    var a = jQuery(window).scrollTop();
    var c = Math.min(1600, Math.max(400, Math.round(Math.abs(b - a) / jQuery(window).height() * 100)));
    jQuery("body,html").animate({
        scrollTop: b - jQuery("#wpadminbar").height() - jQuery("header.fixedTopMenu .topWrap").height()
    }, c, "swing")
}

function pj_document_set_location(a) {
    try {
        history.pushState(null, null, a);
        return
    } catch (b) {}
    location.href = a
}

function pj_add_to_url(j) {
    var c = arguments[1] !== undefined ? arguments[1] : true;
    var f = location.href;
    var a = f.indexOf("?");
    var g = {};
    if (a > 0) {
        var h = f.substr(a + 1).split("&");
        var d = "";
        for (var e = 0; e < h.length; e++) {
            var d = h[e].split("=");
            g[d[0]] = d.length > 1 ? d[1] : ""
        }
    }
    for (var b in j) {
        g[b] = j[b]
    }
    f = (a > 0 ? f.substr(0, a) : f) + "?";
    var e = 0;
    for (b in g) {
        if (c && g[b] == "") {
            continue
        }
        f += (e++ > 0 ? "&" : "") + b + "=" + g[b]
    }
    return f
}

function pj_browser_is_mobile() {
    var a = false;
    (function(b) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) {
            a = true
        }
    })(navigator.userAgent || navigator.vendor || window.opera);
    return a
}

function pj_browser_is_ios() {
    return navigator.userAgent.match(/iPad|iPhone|iPod/i) != null
}

function pj_is_retina() {
    var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
    return (window.devicePixelRatio > 1) || (window.matchMedia && window.matchMedia(a).matches)
}

function pj_get_file_name(a) {
    a = a.replace(/\\/g, "/");
    var b = a.lastIndexOf("/");
    if (b >= 0) {
        a = a.substr(b + 1)
    }
    return a
}

function pj_get_file_ext(a) {
    var b = a.lastIndexOf(".");
    a = b >= 0 ? a.substr(b + 1) : "";
    return a
}

function pj_check_images_complete(a) {
    var b = true;
    a.find("img").each(function() {
        if (!b) {
            return
        }
        if (!jQuery(this).get(0).complete) {
            b = false
        }
    });
    return b
}

function pj_debug_object(f) {
    var h = arguments[1] ? arguments[1] : false;
    var d = arguments[2] ? arguments[2] : false;
    var c = arguments[3] ? arguments[3] : false;
    var b = arguments[4] ? arguments[4] : 0;
    var l = "";
    var k = "";
    if (b > 0) {
        l += (f === null ? "null" : typeof(f)) + (h ? "\n<br />" : "\n");
        k = pj_replicate(h ? "&nbsp;" : " ", b * 2)
    }
    if (f !== null) {
        var g = 0;
        for (var a in f) {
            g++;
            if (g > 100) {
                break
            }
            try {
                if (!c && typeof(f[a]) == "function") {
                    continue
                }
                if (d && b <= 3 && (typeof(f[a]) == "object" || typeof(f[a]) == "array") && f[a] != f) {
                    l += k + (h ? "<b>" : "") + a + (h ? "</b>" : "") + "=" + pj_debug_object(f[a], h, d, c, b + 1)
                } else {
                    l += k + (h ? "<b>" : "") + a + (h ? "</b>" : "") + "=" + (typeof(f[a]) == "string" ? '"' : "") + f[a] + (typeof(f[a]) == "string" ? '"' : "") + (h ? "\n<br />" : "\n")
                }
            } catch (j) {
                l += (h ? "<br><br>" : "\n\n") + "Error parsing on property '" + a + "'. Recursion cancelled!";
                break
            }
        }
    }
    return l
}

function pj_debug_log(a) {
    if (PJ_STORAGE.user_logged_in) {
        if (jQuery("#debug_log").length == 0) {
            jQuery("body").append('<div id="debug_log"><span id="debug_log_close" onclick="jQuery(\'#debug_log\').hide();">x</span><div id="debug_log_content"></div></div>')
        }
        jQuery("#debug_log_content").append("<br>" + a);
        jQuery("#debug_log").show()
    }
}
if (window.dcl === undefined) {
    function dcl(a) {
        console.log(a)
    }
}
if (window.dco === undefined) {
    function dco(b, a, c) {
        console.log(pj_debug_object(b, a, c))
    }
}
if (window.dal === undefined) {
    function dal(a) {
        if (PJ_STORAGE.user_logged_in) {
            alert(a)
        }
    }
}
if (window.dao === undefined) {
    function dao(b, a, c) {
        if (PJ_STORAGE.user_logged_in) {
            alert(pj_debug_object(b, a, c))
        }
    }
}
if (window.ddl === undefined) {
    function ddl(a) {
        pj_debug_log(a)
    }
}
if (window.ddo === undefined) {
    function ddo(b, a, c) {
        pj_debug_log(pj_debug_object(b, a, c))
    }
};

/* 2. _init.js */
jQuery(document).ready(function() {
    PJ_STORAGE.theme_init_counter = 0;
    pj_init_actions()
});

function pj_init_actions() {
    if (PJ_STORAGE.vc_edit_mode && jQuery(".vc_empty-placeholder").length == 0 && PJ_STORAGE.theme_init_counter++ < 30) {
        setTimeout(pj_init_actions, 200);
        return
    }
    pj_ready_actions();
    pj_resize_actions();
    pj_scroll_actions();
    jQuery(window).resize(function() {
        pj_resize_actions()
    });
    jQuery(window).scroll(function() {
        pj_scroll_actions()
    })
}

function pj_ready_actions() {
    document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/, "js");
    if (document.documentElement.className.indexOf(PJ_STORAGE.site_scheme) == -1) {
        document.documentElement.className += " " + PJ_STORAGE.site_scheme
    }
    if (jQuery(".pj_tabs:not(.inited)").length > 0 && jQuery.ui && jQuery.ui.tabs) {
        jQuery(".pj_tabs:not(.inited)").each(function() {
            var c = jQuery(this).data("active");
            if (isNaN(c)) {
                c = 0;
                var b = jQuery(this).find('> ul > li[data-active="true"]').eq(0);
                if (b.length > 0) {
                    c = b.index();
                    if (isNaN(c) || c < 0) {
                        c = 0
                    }
                }
            } else {
                c = Math.max(0, c)
            }
            jQuery(this).addClass("inited").tabs({
                active: c,
                show: {
                    effect: "fadeIn",
                    duration: 300
                },
                hide: {
                    effect: "fadeOut",
                    duration: 300
                },
                create: function(d, e) {
                    if (e.panel.length > 0) {
                        jQuery(document).trigger("action.init_hidden_elements", [e.panel])
                    }
                },
                activate: function(d, e) {
                    if (e.newPanel.length > 0) {
                        jQuery(document).trigger("action.init_hidden_elements", [e.newPanel])
                    }
                }
            })
        })
    }
    jQuery(".pj_tabs_ajax").on("tabsbeforeactivate", function(b, c) {
        if (c.newPanel.data("need-content")) {
            pj_tabs_ajax_content_loader(c.newPanel, 1, c.oldPanel)
        }
    });
    jQuery(".pj_tabs_ajax").on("click", ".nav-links a", function(f) {
        var b = jQuery(this).parents(".pj_tabs_content");
        var d = 1;
        var c = jQuery(this).attr("href");
        var g = -1;
        if ((g = c.lastIndexOf("/page/")) != -1) {
            d = Number(c.substr(g + 6).replace("/", ""));
            if (!isNaN(d)) {
                d = Math.max(1, d)
            }
        }
        pj_tabs_ajax_content_loader(b, d);
        f.preventDefault();
        return false
    });
    if (PJ_STORAGE.menu_cache) {
        pj_prepare_cached_menus()
    }
    if (jQuery(".menu_side_inner").length > 0 && jQuery("#toc_menu").length > 0) {
        jQuery("#toc_menu").appendTo(".menu_side_inner")
    }
    jQuery(".menu_mobile .menu-item-has-children > a, body:not(.woocommerce) .widget_area:not(.footer_wrap) .widget_product_categories ul.product-categories .has_children > a").prepend('<span class="open_child_menu"></span>');
    jQuery(".menu_mobile_button").on("click", function(b) {
        jQuery(".menu_mobile_overlay").fadeIn();
        jQuery(".menu_mobile").addClass("opened");
        b.preventDefault();
        return false
    });
    jQuery(".menu_mobile_close, .menu_mobile_overlay").on("click", function(b) {
        jQuery(".menu_mobile_overlay").fadeOut();
        jQuery(".menu_mobile").removeClass("opened");
        b.preventDefault();
        return false
    });
    jQuery(".menu_mobile, body:not(.woocommerce) .widget_area:not(.footer_wrap) .widget_product_categories").on("click", "li a,li a .open_child_menu, ul.product-categories.plain li a .open_child_menu", function(c) {
        var b = jQuery(this).hasClass("open_child_menu") ? jQuery(this).parent() : jQuery(this);
        if (b.parent().hasClass("menu-item-has-children") || b.parent().hasClass("has_children")) {
            if (b.attr("href") == "#" || jQuery(this).hasClass("open_child_menu")) {
                if (b.siblings("ul:visible").length > 0) {
                    b.siblings("ul").slideUp().parent().removeClass("opened")
                } else {
                    jQuery(this).parents("li").siblings("li").find("ul:visible").slideUp().parent().removeClass("opened");
                    b.siblings("ul").slideDown().parent().addClass("opened")
                }
            }
        }
        if (jQuery(this).hasClass("open_child_menu") || b.attr("href") == "#") {
            c.preventDefault();
            return false
        }
    });
    pj_init_sfmenu("ul#menu_main");
    if (jQuery("ul#menu_main").hasClass("inited")) {
        jQuery(".menu_main_nav_area").addClass("menu_show")
    }
    PJ_STORAGE.top_panel_height = 0;
    if (jQuery(".search_wrap:not(.inited)").length > 0) {
        jQuery(".search_wrap:not(.inited)").each(function() {
            var b = null;
            jQuery(this).addClass("inited");
            jQuery(this).find(".search_field").on("keyup", function(g) {
                if (jQuery(this).parents(".top_panel_navi").length > 0) {
                    var c = jQuery(this);
                    var f = c.parents(".search_wrap");
                    if (g.keyCode == 27) {
                        a(f);
                        g.preventDefault();
                        return
                    }
                    if (!f.hasClass("search_style_fullscreen")) {
                        if (c.val() != "") {
                            if (!c.siblings(".search_submit").hasClass("icon-search")) {
                                c.siblings(".search_submit").removeClass("icon-cancel").addClass("icon-search")
                            }
                        } else {
                            if (!c.siblings(".search_submit").hasClass("icon-cancel")) {
                                c.siblings(".search_submit").removeClass("icon-search").addClass("icon-cancel")
                            }
                        }
                    }
                    if (f.hasClass("search_ajax")) {
                        var d = c.val();
                        if (b) {
                            clearTimeout(b);
                            b = null
                        }
                        if (d.length >= 4) {
                            b = setTimeout(function() {
                                jQuery.post(PJ_STORAGE.ajax_url, {
                                    action: "ajax_search",
                                    nonce: PJ_STORAGE.ajax_nonce,
                                    text: d
                                }).done(function(h) {
                                    clearTimeout(b);
                                    b = null;
                                    var j = {};
                                    try {
                                        j = JSON.parse(h)
                                    } catch (i) {
                                        j = {
                                            error: PJ_STORAGE.search_error
                                        };
                                        console.log(h)
                                    }
                                    var k = j.error === "" ? j.data : j.error;
                                    c.parents(".search_ajax").find(".search_results_content").empty().append(j.data);
                                    c.parents(".search_ajax").find(".search_results").fadeIn()
                                })
                            }, 500)
                        }
                    }
                }
            });
            jQuery(this).find(".search_submit").on("click", function(d) {
                var c = jQuery(this).parents(".search_wrap");
                if (c.find(".search_field").val() != "" && (jQuery(this).parents(".top_panel_navi").length == 0 || c.hasClass("search_opened"))) {
                    c.find("form").get(0).submit()
                } else {
                    if (jQuery(this).parents(".top_panel_navi").length > 0) {
                        if (c.hasClass("search_opened")) {
                            a(c)
                        } else {
                            c.addClass("search_opened");
                            if (c.find(".search_field").val() == "" && !c.hasClass("search_style_fullscreen")) {
                                c.find(".search_submit").removeClass("icon-search").addClass("icon-cancel")
                            }
                            setTimeout(function() {
                                c.find(".search_field").get(0).focus()
                            }, 500)
                        }
                    }
                }
                d.preventDefault();
                return false
            });
            jQuery(this).find(".search_close").on("click", function(c) {
                a(jQuery(this).parents(".search_wrap"));
                c.preventDefault();
                return false
            });
            jQuery(this).find(".search_results_close").on("click", function(c) {
                jQuery(this).parent().fadeOut();
                c.preventDefault();
                return false
            });
            jQuery(this).on("click", ".search_more", function(c) {
                if (jQuery(this).parents(".search_wrap").find(".search_field").val() != "") {
                    jQuery(this).parents(".search_wrap").find("form").get(0).submit()
                }
                c.preventDefault();
                return false
            })
        })
    }

    function a(b) {
        if (b.parents(".top_panel_navi").length > 0) {
            b.removeClass("search_opened");
            if (b.find(".search_submit").hasClass("icon-cancel")) {
                b.find(".search_submit").removeClass("icon-cancel").addClass("icon-search")
            }
            b.find(".search_results").fadeOut()
        }
    }
    jQuery(".widget ul > li").each(function() {
        if (jQuery(this).find("ul").length > 0) {
            jQuery(this).addClass("has_children")
        }
    });
    jQuery(".widget_archive a").each(function() {
        var b = jQuery(this).html().split(" ");
        if (b.length > 1) {
            b[b.length - 1] = "<span>" + b[b.length - 1] + "</span>";
            jQuery(this).html(b.join(" "))
        }
    });
    jQuery("select:visible:not(.esg-sorting-select)").wrap('<div class="select_container"></div>');
    jQuery("form#commentform").submit(function(c) {
        var b = pj_comments_validate(jQuery(this));
        if (!b) {
            c.preventDefault()
        }
        return b
    });
    jQuery("form").on("keypress", ".error_field", function() {
        if (jQuery(this).val() != "") {
            jQuery(this).removeClass("error_field")
        }
    });
    jQuery(".woocommerce,.woocommerce-page").on("click", ".pj_shop_mode_buttons a", function(b) {
        var c = jQuery(this).hasClass("woocommerce_thumbs") ? "thumbs" : "list";
        jQuery.cookie("pj_shop_mode", c, {
            expires: 365,
            path: "/"
        });
        jQuery(this).siblings("input").val(c).parents("form").get(0).submit();
        b.preventDefault();
        return false
    });
    jQuery(".woocommerce div.quantity,.woocommerce-page div.quantity").append('<span class="q_inc"></span><span class="q_dec"></span>');
    jQuery(".woocommerce div.quantity").on("click", ">span", function(c) {
        var b = jQuery(this).siblings("input");
        if (jQuery(this).hasClass("q_inc")) {
            b.val(Math.max(0, parseInt(b.val()), 0) + 1)
        } else {
            b.val(Math.max(1, Math.max(0, parseInt(b.val()), 0) - 1))
        }
        c.preventDefault();
        return false
    });
    jQuery(".single-product .woocommerce-tabs").wrap('<div class="trx-stretch-width"></div>');
    jQuery(".trx-stretch-width").wrap('<div class="trx-stretch-width-wrap scheme_light"></div>');
    jQuery(".trx-stretch-width").after('<div class="trx-stretch-width-original"></div>');
    pj_stretch_width();
    jQuery(".nav-links-more a").on("click", function(f) {
        if (PJ_STORAGE.load_more_link_busy) {
            return
        }
        PJ_STORAGE.load_more_link_busy = true;
        var c = jQuery(this);
        var d = Number(c.data("page"));
        var b = Number(c.data("max-page"));
        if (d >= b) {
            c.parent().hide();
            return
        }
        c.parent().addClass("loading");
        jQuery.get(location.href, {
            page: d + 1
        }).done(function(g) {
            var e = jQuery(".content > .posts_container").eq(0);
            var h = jQuery(g).find(".content > .posts_container");
            if (h.length > 0 && e.length > 0) {
                e.append(h.html());
                c.data("page", d + 1).parent().removeClass("loading");
                PJ_STORAGE.init_all_mediaelements = true;
                jQuery(document).trigger("action.init_shortcodes", [e]);
                jQuery(document).trigger("action.init_hidden_elements", [e])
            }
            if (d + 1 >= b) {
                c.parent().hide()
            } else {
                PJ_STORAGE.load_more_link_busy = false
            }
            jQuery(window).trigger("scroll")
        });
        f.preventDefault();
        return false
    });
    jQuery(document).on("action.scroll_actions", function(d) {
        if (PJ_STORAGE.load_more_link_busy) {
            return
        }
        var b = jQuery(".content > .posts_container").eq(0);
        var c = jQuery(".nav-links-infinite");
        if (c.length == 0) {
            return
        }
        if (b.offset().top + b.height() < jQuery(window).scrollTop() + jQuery(window).height()) {
            c.find("a").trigger("click")
        }
    });
    jQuery(document).trigger("action.ready");
    jQuery(document).on("action.init_hidden_elements", pj_init_post_formats);
    jQuery(document).trigger("action.init_hidden_elements", [jQuery("body").eq(0)])
}

function pj_scroll_actions() {
    var b = jQuery(window).scrollTop();
    var a = Math.max(0, jQuery("#wpadminbar").height());
    if (PJ_STORAGE.top_panel_height == 0) {
        PJ_STORAGE.top_panel_height = jQuery(".top_panel_navi").outerHeight()
    }
    jQuery(document).trigger("action.scroll_actions");
    if (!jQuery("body").hasClass("mobile_layout") && !jQuery("body").hasClass("menu_style_side")) {
        var c = 0;
        if (b <= c + PJ_STORAGE.top_panel_height) {
            if (jQuery("body").hasClass("top_panel_fixed")) {
                jQuery("body").removeClass("top_panel_fixed");
                jQuery(".top_panel_navi").removeClass("state_fixed")
            }
        } else {
            if (b > c + PJ_STORAGE.top_panel_height) {
                if (!jQuery("body").hasClass("top_panel_fixed") && jQuery(document).height() > jQuery(window).height() * 1.5) {
                    jQuery(".top_panel_fixed_wrap").height(PJ_STORAGE.top_panel_height);
                    jQuery(".top_panel_navi").css("marginTop", "-150px").animate({
                        marginTop: 0
                    }, 500);
                    jQuery(".top_panel_navi").addClass("state_fixed");
                    jQuery("body").addClass("top_panel_fixed")
                }
            }
        }
    }
    jQuery('[data-animation^="animated"]:not(.animated)').each(function() {
        if (jQuery(this).offset().top < jQuery(window).scrollTop() + jQuery(window).height()) {
            jQuery(this).addClass(jQuery(this).data("animation"))
        }
    })
}

function pj_resize_actions() {
    pj_check_layout();
    pj_stretch_width();
    pj_vc_row_fullwidth_to_boxed()
}

function pj_check_layout() {
    if (jQuery("body").hasClass("no_layout")) {
        jQuery("body").removeClass("no_layout")
    }
    var a = window.innerWidth;
    if (a == undefined) {
        a = jQuery(window).width() + (jQuery(window).height() < jQuery(document).height() || jQuery(window).scrollTop() > 0 ? 16 : 0)
    }
    if (PJ_STORAGE.mobile_layout_width >= a) {
        if (!jQuery("body").hasClass("mobile_layout")) {
            jQuery("body").removeClass("top_panel_fixed desktop_layout").addClass("mobile_layout");
            jQuery(".top_panel_navi").removeClass("state_fixed")
        }
    } else {
        if (!jQuery("body").hasClass("desktop_layout")) {
            jQuery("body").removeClass("mobile_layout").addClass("desktop_layout");
            jQuery(".menu_mobile").removeClass("opened");
            jQuery(".menu_mobile_overlay").hide()
        }
    }
    var c = jQuery("body:not(.woocommerce) .widget_area:not(.footer_wrap) .widget_product_categories ul.product-categories");
    var b = c.parents(".widget_area");
    if (b.length > 0 && c.length > 0) {
        if (b.width() == b.parents(".content_wrap").width()) {
            if (c.hasClass("inited")) {
                c.removeClass("inited").addClass("plain").superfish("destroy");
                c.find("ul.animated").removeClass("animated").addClass("no_animated")
            }
        } else {
            if (!c.hasClass("inited")) {
                c.removeClass("plain").addClass("inited");
                c.find("ul.no_animated").removeClass("no_animated").addClass("animated");
                pj_init_sfmenu("body:not(.woocommerce) .widget_area:not(.footer_wrap) .widget_product_categories ul.product-categories")
            }
        }
    }
}

function pj_stretch_width() {
    jQuery(".trx-stretch-width").each(function() {
        var j = jQuery(this);
        var c = j.parents(".page_wrap");
        var i = 0;
        if (c.length == 0) {
            c = jQuery(window)
        } else {
            i = c.offset().left
        }
        var h = j.next(".trx-stretch-width-original");
        var f = parseInt(j.css("margin-left"), 10);
        var d = parseInt(j.css("margin-right"), 10);
        var e = i - h.offset().left - f;
        var a = c.width();
        if (!j.hasClass("inited")) {
            j.addClass("inited invisible");
            j.css({
                position: "relative",
                "box-sizing": "border-box"
            })
        }
        j.css({
            left: e,
            width: c.width()
        });
        if (!j.hasClass("trx-stretch-content")) {
            var g = Math.max(0, -1 * e);
            var b = Math.max(0, a - g - h.width() + f + d);
            j.css({
                "padding-left": g + "px",
                "padding-right": b + "px"
            })
        }
        j.removeClass("invisible")
    })
}

function pj_vc_row_fullwidth_to_boxed() {
    if (jQuery("body").hasClass("body_style_boxed")) {
        var b = jQuery("body").width();
        var d = jQuery(".page_wrap").width();
        var c = jQuery(".page_content_wrap  .content_wrap").width();
        var a = (d - c) / 2;
        if (b > d) {
            jQuery('.vc_row[data-vc-full-width="true"]').each(function() {
                var e = parseInt(jQuery(this).css("marginLeft"), 0);
                jQuery(this).css({
                    width: d,
                    left: -a - e,
                    "padding-left": a + e,
                    "padding-right": a + e
                });
                if (jQuery(this).attr("data-vc-stretch-content")) {
                    jQuery(this).css({
                        "padding-left": 0,
                        "padding-right": 0
                    })
                }
            })
        }
    }
}

function pj_fix_sidebar() {
    var h = jQuery(".sidebar");
    if (h.length > 0) {
        if (jQuery(".page_content_wrap .content_wrap .content").css("float") == "none") {
            if (h.css("position") == "fixed") {
                h.css({
                    "float": h.hasClass("right") ? "right" : "left",
                    position: "static"
                })
            }
        } else {
            var e = h.outerHeight();
            var b = h.siblings(".content").outerHeight();
            var g = jQuery(window).scrollTop();
            var l = jQuery(".top_panel").length > 0 ? jQuery(".top_panel").outerHeight() : 0;
            var f = jQuery(".widgets_above_page_wrap").length > 0 ? jQuery(".widgets_above_page_wrap").height() : 0;
            var c = parseInt(jQuery(".page_content_wrap").css("paddingTop"), 0);
            if (isNaN(c)) {
                c = 0
            }
            if (e < b && (e >= jQuery(window).height() && g + jQuery(window).height() > e + l + f + c || e < jQuery(window).height() && g > l + f + c)) {
                if (h.css("position") !== "fixed") {
                    h.css({
                        "float": "none",
                        position: "fixed",
                        top: Math.min(0, jQuery(window).height() - e) + "px"
                    })
                }
                var i = jQuery(".page_content_wrap .content_wrap").position();
                i = i.left + Math.max(0, parseInt(jQuery(".page_content_wrap .content_wrap").css("paddingLeft")), 0) + Math.max(0, parseInt(jQuery(".page_content_wrap .content_wrap").css("marginLeft")), 0);
                if (h.hasClass("right")) {
                    h.css({
                        right: i
                    })
                } else {
                    h.css({
                        left: i
                    })
                }
                var k = 0;
                var j = jQuery(".footer_wrap").position();
                var a = jQuery(".widgets_below_page_wrap").position();
                var d = jQuery(".copyright_wrap").position();
                if (a) {
                    k = a.top
                } else {
                    if (j) {
                        k = j.top
                    } else {
                        if (d) {
                            k = d.top
                        }
                    }
                }
                if (k > 0 && g + jQuery(window).height() > k) {
                    h.css({
                        top: Math.min(l + c, jQuery(window).height() - e - (g + jQuery(window).height() - k + 30)) + "px"
                    })
                } else {
                    h.css({
                        top: Math.min(l + c, jQuery(window).height() - e) + "px"
                    })
                }
            } else {
                if (h.css("position") == "fixed") {
                    h.css({
                        "float": h.hasClass("right") ? "right" : "left",
                        position: "static",
                        top: "auto",
                        left: "auto",
                        right: "auto"
                    })
                }
            }
        }
    }
}

function pj_init_sfmenu(a) {
    jQuery(a).show().each(function() {
        jQuery(this).addClass("inited").superfish({
            delay: 500,
            animation: {
                opacity: "show"
            },
            animationOut: {
                opacity: "hide"
            },
            speed: PJ_STORAGE.menu_animation_in != "none" ? 500 : 200,
            speedOut: PJ_STORAGE.menu_animation_out != "none" ? 500 : 200,
            autoArrows: false,
            dropShadows: false,
            onBeforeShow: function(c) {
                if (jQuery(this).parents("ul").length > 1) {
                    var b = jQuery(window).width();
                    var e = jQuery(this).parents("ul").offset().left;
                    var f = jQuery(this).parents("ul").outerWidth();
                    var d = jQuery(this).outerWidth();
                    if (e + f + d > b - 20 && e - d > 0) {
                        jQuery(this).addClass("submenu_left")
                    } else {
                        jQuery(this).removeClass("submenu_left")
                    }
                }
                if (PJ_STORAGE.menu_animation_in != "none") {
                    jQuery(this).removeClass("animated fast " + PJ_STORAGE.menu_animation_out);
                    jQuery(this).addClass("animated fast " + PJ_STORAGE.menu_animation_in)
                }
            },
            onBeforeHide: function(b) {
                if (PJ_STORAGE.menu_animation_out != "none") {
                    jQuery(this).removeClass("animated fast " + PJ_STORAGE.menu_animation_in);
                    jQuery(this).addClass("animated fast " + PJ_STORAGE.menu_animation_out)
                }
            }
        })
    })
}

function pj_prepare_cached_menus() {
    var c = [jQuery("ul#menu_main"), jQuery("ul#menu_mobile")];
    var b = window.location.href;
    for (var a in c) {
        if (c[a].length == 0) {
            continue
        }
        c[a].find("li").removeClass("current-menu-ancestor current-menu-parent current-menu-item current_page_item");
        c[a].find('a[href="' + b + '"]').each(function(e) {
            var d = jQuery(this).parent();
            d.addClass("current-menu-item");
            if (d.hasClass("menu-item-object-page")) {
                d.addClass("current_page_item")
            }
            var f = 0;
            while ((d = d.parents("li")).length > 0) {
                f++;
                d.addClass("current-menu-ancestor" + (f == 1 ? " current-menu-parent" : ""))
            }
        })
    }
}

function pj_init_post_formats(b, a) {
    pj_init_media_elements(a);
    a.find(".format-video .post_featured.with_thumb .post_video_hover:not(.inited)").addClass("inited").on("click", function(c) {
        jQuery(this).parents(".post_featured").addClass("post_video_play").find(".post_video").html(jQuery(this).data("video"));
        jQuery(window).trigger("resize");
        c.preventDefault();
        return false
    })
}

function pj_init_media_elements(a) {
    if (PJ_STORAGE.use_mediaelements && a.find("audio,video").length > 0) {
        if (window.mejs) {
            window.mejs.MepDefaults.enableAutosize = true;
            window.mejs.MediaElementDefaults.enableAutosize = true;
            a.find("audio,video").each(function() {
                if (jQuery(this).parents(".mejs-mediaelement").length == 0 && (PJ_STORAGE.init_all_mediaelements || (!jQuery(this).hasClass("wp-audio-shortcode") && !jQuery(this).hasClass("wp-video-shortcode") && !jQuery(this).parent().hasClass("wp-playlist")))) {
                    var b = jQuery(this);
                    var c = {
                        enableAutosize: true,
                        videoWidth: -1,
                        videoHeight: -1,
                        audioWidth: "100%",
                        audioHeight: 30,
                        success: function(e) {
                            var f, d;
                            if ("flash" === e.pluginType) {
                                f = e.attributes.autoplay && "false" !== e.attributes.autoplay;
                                d = e.attributes.loop && "false" !== e.attributes.loop;
                                f && e.addEventListener("canplay", function() {
                                    e.play()
                                }, false);
                                d && e.addEventListener("ended", function() {
                                    e.play()
                                }, false)
                            }
                        }
                    };
                    jQuery(this).mediaelementplayer(c)
                }
            })
        } else {
            setTimeout(function() {
                pj_init_media_elements(a)
            }, 400)
        }
    }
}

function pj_tabs_ajax_content_loader(b, c, d) {
    if (b.html().replace(/\s/g, "") == "") {
        var a = d === undefined ? b.height() : d.height();
        if (isNaN(a) || a < 100) {
            a = 100
        }
        b.html('<div class="pj_tab_holder" style="min-height:' + a + 'px;"></div>')
    } else {
        b.find("> *").css("opacity", 0)
    }
    b.data("need-content", false).addClass("pj_loading");
    jQuery.post(PJ_STORAGE.ajax_url, {
        nonce: PJ_STORAGE.ajax_nonce,
        action: "pj_ajax_get_posts",
        blog_template: b.data("blog-template"),
        blog_style: b.data("blog-style"),
        posts_per_page: b.data("posts-per-page"),
        cat: b.data("cat"),
        parent_cat: b.data("parent-cat"),
        page: c
    }).done(function(f) {
        b.removeClass("pj_loading");
        var h = {};
        try {
            h = JSON.parse(f)
        } catch (g) {
            h = {
                error: PJ_STORAGE.strings["ajax_error"]
            };
            console.log(f)
        }
        if (h.error !== "") {
            b.html('<div class="pj_error">' + h.error + "</div>")
        } else {
            b.prepend(h.data).fadeIn(function() {
                jQuery(document).trigger("action.init_shortcodes", [b]);
                jQuery(document).trigger("action.init_hidden_elements", [b]);
                setTimeout(function() {
                    b.find(".pj_tab_holder").remove()
                }, 1000)
            })
        }
    })
}

function pj_comments_validate(b) {
    b.find("input").removeClass("error_field");
    var c = {
        error_message_text: PJ_STORAGE.strings["error_global"],
        error_message_show: true,
        error_message_time: 4000,
        error_message_class: "pj_messagebox pj_messagebox_style_error",
        error_fields_class: "error_field",
        exit_after_first_error: false,
        rules: [{
            field: "comment",
            min_length: {
                value: 1,
                message: PJ_STORAGE.strings["text_empty"]
            },
            max_length: {
                value: PJ_STORAGE.message_maxlength,
                message: PJ_STORAGE.strings["text_long"]
            }
        }]
    };
    if (b.find('.comments_author input[aria-required="true"]').length > 0) {
        c.rules.push({
            field: "author",
            min_length: {
                value: 1,
                message: PJ_STORAGE.strings["name_empty"]
            },
            max_length: {
                value: 60,
                message: PJ_STORAGE.strings["name_long"]
            }
        })
    }
    if (b.find('.comments_email input[aria-required="true"]').length > 0) {
        c.rules.push({
            field: "email",
            min_length: {
                value: 7,
                message: PJ_STORAGE.strings["email_empty"]
            },
            max_length: {
                value: 60,
                message: PJ_STORAGE.strings["email_long"]
            },
            mask: {
                value: PJ_STORAGE.email_mask,
                message: PJ_STORAGE.strings["email_not_valid"]
            }
        })
    }
    var a = pj_form_validate(b, c);
    return !a
};