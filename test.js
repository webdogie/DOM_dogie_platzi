(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  [
    ,
    ,
    function (e, t, n) {
      "use strict";
      e.exports = n(3);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        return function (t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t;
        };
      })();
      n(4);
      var a = n(5);
      var i = n(6).assign,
        r = {
          channel: "youtube",
          facebook: {},
          youtube: {
            autoplay: 1,
            cc_load_policy: 1,
            color: null,
            controls: 1,
            disablekb: 0,
            enablejsapi: 0,
            end: null,
            fs: 1,
            h1: null,
            iv_load_policy: 1,
            list: null,
            listType: null,
            loop: 0,
            modestbranding: null,
            origin: null,
            playlist: null,
            playsinline: null,
            rel: 0,
            showinfo: 1,
            start: 0,
            wmode: "transparent",
            theme: "dark",
            nocookie: !1,
          },
          ratio: "16:9",
          vimeo: {
            api: !1,
            autopause: !0,
            autoplay: !0,
            byline: !0,
            callback: null,
            color: null,
            height: null,
            loop: !1,
            maxheight: null,
            maxwidth: null,
            player_id: null,
            portrait: !0,
            title: !0,
            width: null,
            xhtml: !1,
          },
          allowFullScreen: !0,
          animationSpeed: 300,
          classNames: {
            modalVideo: "modal-video",
            modalVideoClose: "modal-video-close",
            modalVideoBody: "modal-video-body",
            modalVideoInner: "modal-video-inner",
            modalVideoIframeWrap: "modal-video-movie-wrap",
            modalVideoCloseBtn: "modal-video-close-btn",
          },
          aria: {
            openMessage: "You just openned the modal video",
            dismissBtnMessage: "Close the modal by clicking here",
          },
        },
        l = (function () {
          function e(t, n) {
            var o = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var l = i({}, r, n),
              s = "string" == typeof t ? document.querySelectorAll(t) : t,
              c = document.querySelector("body"),
              d = l.classNames,
              u = l.animationSpeed;
            [].forEach.call(s, function (e) {
              e.addEventListener("click", function (t) {
                "A" === e.tagName && t.preventDefault();
                var n = e.dataset.videoId,
                  i = e.dataset.channel || l.channel,
                  r = (0, a.getUniqId)(),
                  s = e.dataset.videoUrl || o.getVideoUrl(l, i, n),
                  f = o.getHtml(l, s, r);
                (0, a.append)(c, f);
                var m = document.getElementById(r),
                  v = m.querySelector(".js-modal-video-dismiss-btn");
                m.focus(),
                  m.addEventListener("click", function () {
                    (0, a.addClass)(m, d.modalVideoClose),
                      setTimeout(function () {
                        (0, a.remove)(m), e.focus();
                      }, u);
                  }),
                  m.addEventListener("keydown", function (e) {
                    9 === e.which &&
                      (e.preventDefault(),
                      document.activeElement === m
                        ? v.focus()
                        : (m.setAttribute("aria-label", ""), m.focus()));
                  }),
                  v.addEventListener("click", function () {
                    (0, a.triggerEvent)(m, "click");
                  });
              });
            });
          }
          return (
            o(e, [
              {
                key: "getPadding",
                value: function (e) {
                  var t = e.split(":"),
                    n = Number(t[0]);
                  return (100 * Number(t[1])) / n + "%";
                },
              },
              {
                key: "getQueryString",
                value: function (e) {
                  var t = "";
                  return (
                    Object.keys(e).forEach(function (n) {
                      t += n + "=" + e[n] + "&";
                    }),
                    t.substr(0, t.length - 1)
                  );
                },
              },
              {
                key: "getVideoUrl",
                value: function (e, t, n) {
                  return "youtube" === t
                    ? this.getYoutubeUrl(e.youtube, n)
                    : "vimeo" === t
                    ? this.getVimeoUrl(e.vimeo, n)
                    : "facebook" === t
                    ? this.getFacebookUrl(e.facebook, n)
                    : "";
                },
              },
              {
                key: "getVimeoUrl",
                value: function (e, t) {
                  return (
                    "//player.vimeo.com/video/" +
                    t +
                    "?" +
                    this.getQueryString(e)
                  );
                },
              },
              {
                key: "getYoutubeUrl",
                value: function (e, t) {
                  var n = this.getQueryString(e);
                  return !0 === e.nocookie
                    ? "//www.youtube-nocookie.com/embed/" + t + "?" + n
                    : "//www.youtube.com/embed/" + t + "?" + n;
                },
              },
              {
                key: "getFacebookUrl",
                value: function (e, t) {
                  return (
                    "//www.facebook.com/v2.10/plugins/video.php?href=https://www.facebook.com/facebook/videos/" +
                    t +
                    "&" +
                    this.getQueryString(e)
                  );
                },
              },
              {
                key: "getHtml",
                value: function (e, t, n) {
                  var o = this.getPadding(e.ratio),
                    a = e.classNames;
                  return (
                    '\n      <div class="' +
                    a.modalVideo +
                    '" tabindex="-1" role="dialog" aria-label="' +
                    e.aria.openMessage +
                    '" id="' +
                    n +
                    '">\n        <div class="' +
                    a.modalVideoBody +
                    '">\n          <div class="' +
                    a.modalVideoInner +
                    '">\n            <div class="' +
                    a.modalVideoIframeWrap +
                    '" style="padding-bottom:' +
                    o +
                    '">\n              <button class="' +
                    a.modalVideoCloseBtn +
                    ' js-modal-video-dismiss-btn" aria-label="' +
                    e.aria.dismissBtnMessage +
                    "\"></button>\n              <iframe width='460' height='230' src=\"" +
                    t +
                    "\" frameborder='0' allowfullscreen=" +
                    e.allowFullScreen +
                    ' tabindex="-1"/>\n            </div>\n          </div>\n        </div>\n      </div>\n    '
                  );
                },
              },
            ]),
            e
          );
        })();
      (t.default = l), (e.exports = t.default);
    },
    function (e, t) {
      try {
        var n = new window.CustomEvent("test");
        if ((n.preventDefault(), !0 !== n.defaultPrevented))
          throw new Error("Could not prevent default");
      } catch (e) {
        var o = function (e, t) {
          var n, o;
          return (
            (t = t || { bubbles: !1, cancelable: !1, detail: void 0 }),
            (n = document.createEvent("CustomEvent")).initCustomEvent(
              e,
              t.bubbles,
              t.cancelable,
              t.detail
            ),
            (o = n.preventDefault),
            (n.preventDefault = function () {
              o.call(this);
              try {
                Object.defineProperty(this, "defaultPrevented", {
                  get: function () {
                    return !0;
                  },
                });
              } catch (e) {
                this.defaultPrevented = !0;
              }
            }),
            n
          );
        };
        (o.prototype = window.Event.prototype), (window.CustomEvent = o);
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      (t.append = function (e, t) {
        var n = document.createElement("div");
        for (n.innerHTML = t; n.children.length > 0; )
          e.appendChild(n.children[0]);
      }),
        (t.getUniqId = function () {
          return (
            Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
          ).toUpperCase();
        }),
        (t.remove = function (e) {
          e && e.parentNode && e.parentNode.removeChild(e);
        }),
        (t.addClass = function (e, t) {
          e.classList ? e.classList.add(t) : (e.className += " " + t);
        }),
        (t.triggerEvent = function (e, t, n) {
          var o = void 0;
          window.CustomEvent
            ? (o = new CustomEvent(t, { cancelable: !0 }))
            : (o = document.createEvent("CustomEvent")).initCustomEvent(
                t,
                !1,
                !1,
                n
              ),
            e.dispatchEvent(o);
        });
    },
    function (e, t, n) {
      "use strict";
      function o(e, t) {
        if (null == e)
          throw new TypeError("Cannot convert first argument to object");
        for (var n = Object(e), o = 1; o < arguments.length; o++) {
          var a = arguments[o];
          if (null != a)
            for (
              var i = Object.keys(Object(a)), r = 0, l = i.length;
              r < l;
              r++
            ) {
              var s = i[r],
                c = Object.getOwnPropertyDescriptor(a, s);
              void 0 !== c && c.enumerable && (n[s] = a[s]);
            }
        }
        return n;
      }
      e.exports = {
        assign: o,
        polyfill: function () {
          Object.assign ||
            Object.defineProperty(Object, "assign", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: o,
            });
        },
      };
    },
    function (e, t, n) {
      var o = n(8),
        a = n(9);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, ""]]);
      var i = { insert: "head", singleton: !1 },
        r = (o(a, i), a.locals ? a.locals : {});
      e.exports = r;
    },
    function (e, t, n) {
      "use strict";
      var o,
        a = function () {
          return (
            void 0 === o &&
              (o = Boolean(window && document && document.all && !window.atob)),
            o
          );
        },
        i = (function () {
          var e = {};
          return function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          };
        })(),
        r = [];
      function l(e) {
        for (var t = -1, n = 0; n < r.length; n++)
          if (r[n].identifier === e) {
            t = n;
            break;
          }
        return t;
      }
      function s(e, t) {
        for (var n = {}, o = [], a = 0; a < e.length; a++) {
          var i = e[a],
            s = t.base ? i[0] + t.base : i[0],
            c = n[s] || 0,
            d = "".concat(s, " ").concat(c);
          n[s] = c + 1;
          var u = l(d),
            f = { css: i[1], media: i[2], sourceMap: i[3] };
          -1 !== u
            ? (r[u].references++, r[u].updater(f))
            : r.push({ identifier: d, updater: b(f, t), references: 1 }),
            o.push(d);
        }
        return o;
      }
      function c(e) {
        var t = document.createElement("style"),
          o = e.attributes || {};
        if (void 0 === o.nonce) {
          var a = n.nc;
          a && (o.nonce = a);
        }
        if (
          (Object.keys(o).forEach(function (e) {
            t.setAttribute(e, o[e]);
          }),
          "function" == typeof e.insert)
        )
          e.insert(t);
        else {
          var r = i(e.insert || "head");
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        }
        return t;
      }
      var d,
        u =
          ((d = []),
          function (e, t) {
            return (d[e] = t), d.filter(Boolean).join("\n");
          });
      function f(e, t, n, o) {
        var a = n
          ? ""
          : o.media
          ? "@media ".concat(o.media, " {").concat(o.css, "}")
          : o.css;
        if (e.styleSheet) e.styleSheet.cssText = u(t, a);
        else {
          var i = document.createTextNode(a),
            r = e.childNodes;
          r[t] && e.removeChild(r[t]),
            r.length ? e.insertBefore(i, r[t]) : e.appendChild(i);
        }
      }
      function m(e, t, n) {
        var o = n.css,
          a = n.media,
          i = n.sourceMap;
        if (
          (a ? e.setAttribute("media", a) : e.removeAttribute("media"),
          i &&
            btoa &&
            (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
              " */"
            )),
          e.styleSheet)
        )
          e.styleSheet.cssText = o;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(o));
        }
      }
      var v = null,
        p = 0;
      function b(e, t) {
        var n, o, a;
        if (t.singleton) {
          var i = p++;
          (n = v || (v = c(t))),
            (o = f.bind(null, n, i, !1)),
            (a = f.bind(null, n, i, !0));
        } else
          (n = c(t)),
            (o = m.bind(null, n, t)),
            (a = function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            });
        return (
          o(e),
          function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              o((e = t));
            } else a();
          }
        );
      }
      e.exports = function (e, t) {
        (t = t || {}).singleton ||
          "boolean" == typeof t.singleton ||
          (t.singleton = a());
        var n = s((e = e || []), t);
        return function (e) {
          if (
            ((e = e || []),
            "[object Array]" === Object.prototype.toString.call(e))
          ) {
            for (var o = 0; o < n.length; o++) {
              var a = l(n[o]);
              r[a].references--;
            }
            for (var i = s(e, t), c = 0; c < n.length; c++) {
              var d = l(n[c]);
              0 === r[d].references && (r[d].updater(), r.splice(d, 1));
            }
            n = i;
          }
        };
      };
    },
    function (e, t, n) {
      (t = n(10)(!1)).push([
        e.i,
        "@keyframes modal-video{from{opacity:0}to{opacity:1}}@keyframes modal-video-inner{from{transform:translate(0, 100px)}to{transform:translate(0, 0)}}.modal-video{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5);z-index:1000000;cursor:pointer;opacity:1;animation-timing-function:ease-out;animation-duration:.3s;animation-name:modal-video;-webkit-transition:opacity .3s ease-out;-moz-transition:opacity .3s ease-out;-ms-transition:opacity .3s ease-out;-o-transition:opacity .3s ease-out;transition:opacity .3s ease-out}.modal-video-close{opacity:0}.modal-video-close .modal-video-movie-wrap{-webkit-transform:translate(0, 100px);-moz-transform:translate(0, 100px);-ms-transform:translate(0, 100px);-o-transform:translate(0, 100px);transform:translate(0, 100px)}.modal-video-body{max-width:940px;width:100%;height:100%;margin:0 auto;display:table}.modal-video-inner{display:table-cell;vertical-align:middle;width:100%;height:100%}.modal-video-movie-wrap{width:100%;height:0;position:relative;padding-bottom:56.25%;background-color:#333;animation-timing-function:ease-out;animation-duration:.3s;animation-name:modal-video-inner;-webkit-transform:translate(0, 0);-moz-transform:translate(0, 0);-ms-transform:translate(0, 0);-o-transform:translate(0, 0);transform:translate(0, 0);-webkit-transition:-webkit-transform .3s ease-out;-moz-transition:-moz-transform .3s ease-out;-ms-transition:-ms-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:transform .3s ease-out}.modal-video-movie-wrap iframe{position:absolute;top:0;left:0;width:100%;height:100%}.modal-video-close-btn{position:absolute;z-index:2;top:-35px;right:-35px;display:inline-block;width:35px;height:35px;overflow:hidden;border:none;background:transparent}.modal-video-close-btn:before{transform:rotate(45deg)}.modal-video-close-btn:after{transform:rotate(-45deg)}.modal-video-close-btn:before,.modal-video-close-btn:after{content:'';position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background:#fff;border-radius:5px;margin-top:-6px}\n",
        "",
      ]),
        (e.exports = t);
    },
    function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var n = (function (e, t) {
                var n = e[1] || "",
                  o = e[3];
                if (!o) return n;
                if (t && "function" == typeof btoa) {
                  var a =
                      ((r = o),
                      (l = btoa(
                        unescape(encodeURIComponent(JSON.stringify(r)))
                      )),
                      (s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        l
                      )),
                      "/*# ".concat(s, " */")),
                    i = o.sources.map(function (e) {
                      return "/*# sourceURL="
                        .concat(o.sourceRoot || "")
                        .concat(e, " */");
                    });
                  return [n].concat(i).concat([a]).join("\n");
                }
                var r, l, s;
                return [n].join("\n");
              })(t, e);
              return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
            }).join("");
          }),
          (t.i = function (e, n, o) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var a = {};
            if (o)
              for (var i = 0; i < this.length; i++) {
                var r = this[i][0];
                null != r && (a[r] = !0);
              }
            for (var l = 0; l < e.length; l++) {
              var s = [].concat(e[l]);
              (o && a[s[0]]) ||
                (n &&
                  (s[2]
                    ? (s[2] = "".concat(n, " and ").concat(s[2]))
                    : (s[2] = n)),
                t.push(s));
            }
          }),
          t
        );
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(2),
        a = n.n(o);
      n(7);
      t.default = (e) => {
        let t = document.createElement("button");
        (t.dataset.videoId = e), new a.a([t]), t.click(), (t = null);
      };
    },
  ],
]);
