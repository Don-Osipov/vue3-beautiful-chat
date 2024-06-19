import { reactive, openBlock, createElementBlock, createElementVNode, normalizeStyle, createVNode, createCommentVNode, toDisplayString, renderSlot, resolveComponent, withCtx, createTextVNode, pushScopeId, popScopeId, resolveDirective, normalizeClass, withDirectives, createBlock, Fragment, renderList, vShow, withModifiers, nextTick, withScopeId, withKeys, mergeProps, ref, createApp, h } from "vue";
const store = {
  state: reactive({
    editMessage: null
  }),
  setState(key, val) {
    this.state[key] = val;
  }
};
function mapState(keys) {
  const map = {};
  keys.forEach((key) => {
    map[key] = function() {
      return store.state[key];
    };
  });
  return map;
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$n = {};
const _hoisted_1$m = {
  width: "18",
  height: "19",
  viewBox: "0 0 18 19",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$d = /* @__PURE__ */ createElementVNode("path", {
  d: "M13.5 5L4.5 14M4.5 5L13.5 14",
  stroke: "#374151",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$b = [
  _hoisted_2$d
];
function _sfc_render$m(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_3$b);
}
var CloseIconSvg = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m]]);
var Header_vue_vue_type_style_index_0_scoped_true_lang = "";
const __default__ = {
  props: {
    icons: {
      type: Object,
      default: function() {
        return {
          close: {
            img: CloseIconSvg,
            name: "default"
          }
        };
      }
    },
    title: {
      type: String,
      required: true
    },
    colors: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      inUserList: false
    };
  },
  computed: {
    ...mapState(["disableUserListToggle", "titleImageUrl", "showCloseButton"])
  },
  methods: {
    toggleUserList() {
      this.inUserList = !this.inUserList;
      this.$emit("userList", this.inUserList);
    }
  }
};
const _sfc_main$m = Object.assign(__default__, {
  __name: "Header",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "sc-header",
        style: normalizeStyle({ background: __props.colors.header.bg, color: __props.colors.header.text })
      }, [
        _ctx.showCloseButton ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "sc-header--close-button",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        }, [
          createVNode(CloseIconSvg)
        ])) : createCommentVNode("", true)
      ], 4);
    };
  }
});
var Header = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-0f18a98a"]]);
var IconBase_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$l = {
  props: {
    iconName: {
      type: String,
      default: "box"
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: "currentColor"
    }
  }
};
const _hoisted_1$l = ["width", "height", "aria-labelledby"];
const _hoisted_2$c = ["id"];
const _hoisted_3$a = ["fill"];
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: $props.width,
    height: $props.height,
    viewBox: "0 0 18 18",
    "aria-labelledby": $props.iconName,
    role: "presentation"
  }, [
    createElementVNode("title", {
      id: $props.iconName,
      lang: "en"
    }, toDisplayString($props.iconName), 9, _hoisted_2$c),
    createElementVNode("g", { fill: $props.iconColor }, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 8, _hoisted_3$a)
  ], 8, _hoisted_1$l);
}
var IconBase = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l], ["__scopeId", "data-v-e63be5a6"]]);
const _sfc_main$k = {};
const _hoisted_1$k = { d: "M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z" };
function _sfc_render$k(_ctx, _cache) {
  return openBlock(), createElementBlock("path", _hoisted_1$k);
}
var IconEdit = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k]]);
const _sfc_main$j = {};
const _hoisted_1$j = { d: "M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z" };
function _sfc_render$j(_ctx, _cache) {
  return openBlock(), createElementBlock("path", _hoisted_1$j);
}
var IconCross = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j]]);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var escapeGoat = {};
(function(exports) {
  exports.escape = (input) => input.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  exports.unescape = (input) => input.replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
  exports.escapeTag = function(input) {
    let output = input[0];
    for (let i = 1; i < arguments.length; i++) {
      output = output + exports.escape(arguments[i]) + input[i];
    }
    return output;
  };
  exports.unescapeTag = function(input) {
    let output = input[0];
    for (let i = 1; i < arguments.length; i++) {
      output = output + exports.unescape(arguments[i]) + input[i];
    }
    return output;
  };
})(escapeGoat);
var Autolinker$1 = { exports: {} };
/*!
 * Autolinker.js
 * 1.8.3
 *
 * Copyright(c) 2018 Gregory Jacobs <greg@greg-jacobs.com>
 * MIT License
 *
 * https://github.com/gregjacobs/Autolinker.js
 */
(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    var Autolinker2 = function(cfg) {
      cfg = cfg || {};
      this.version = Autolinker2.version;
      this.urls = this.normalizeUrlsCfg(cfg.urls);
      this.email = typeof cfg.email === "boolean" ? cfg.email : true;
      this.phone = typeof cfg.phone === "boolean" ? cfg.phone : true;
      this.hashtag = cfg.hashtag || false;
      this.mention = cfg.mention || false;
      this.newWindow = typeof cfg.newWindow === "boolean" ? cfg.newWindow : true;
      this.stripPrefix = this.normalizeStripPrefixCfg(cfg.stripPrefix);
      this.stripTrailingSlash = typeof cfg.stripTrailingSlash === "boolean" ? cfg.stripTrailingSlash : true;
      this.decodePercentEncoding = typeof cfg.decodePercentEncoding === "boolean" ? cfg.decodePercentEncoding : true;
      var mention = this.mention;
      if (mention !== false && mention !== "twitter" && mention !== "instagram" && mention !== "soundcloud") {
        throw new Error("invalid `mention` cfg - see docs");
      }
      var hashtag = this.hashtag;
      if (hashtag !== false && hashtag !== "twitter" && hashtag !== "facebook" && hashtag !== "instagram") {
        throw new Error("invalid `hashtag` cfg - see docs");
      }
      this.truncate = this.normalizeTruncateCfg(cfg.truncate);
      this.className = cfg.className || "";
      this.replaceFn = cfg.replaceFn || null;
      this.context = cfg.context || this;
      this.htmlParser = null;
      this.matchers = null;
      this.tagBuilder = null;
    };
    Autolinker2.link = function(textOrHtml, options) {
      var autolinker = new Autolinker2(options);
      return autolinker.link(textOrHtml);
    };
    Autolinker2.parse = function(textOrHtml, options) {
      var autolinker = new Autolinker2(options);
      return autolinker.parse(textOrHtml);
    };
    Autolinker2.version = "1.8.3";
    Autolinker2.prototype = {
      constructor: Autolinker2,
      normalizeUrlsCfg: function(urls) {
        if (urls == null)
          urls = true;
        if (typeof urls === "boolean") {
          return { schemeMatches: urls, wwwMatches: urls, tldMatches: urls };
        } else {
          return {
            schemeMatches: typeof urls.schemeMatches === "boolean" ? urls.schemeMatches : true,
            wwwMatches: typeof urls.wwwMatches === "boolean" ? urls.wwwMatches : true,
            tldMatches: typeof urls.tldMatches === "boolean" ? urls.tldMatches : true
          };
        }
      },
      normalizeStripPrefixCfg: function(stripPrefix) {
        if (stripPrefix == null)
          stripPrefix = true;
        if (typeof stripPrefix === "boolean") {
          return { scheme: stripPrefix, www: stripPrefix };
        } else {
          return {
            scheme: typeof stripPrefix.scheme === "boolean" ? stripPrefix.scheme : true,
            www: typeof stripPrefix.www === "boolean" ? stripPrefix.www : true
          };
        }
      },
      normalizeTruncateCfg: function(truncate) {
        if (typeof truncate === "number") {
          return { length: truncate, location: "end" };
        } else {
          return Autolinker2.Util.defaults(truncate || {}, {
            length: Number.POSITIVE_INFINITY,
            location: "end"
          });
        }
      },
      parse: function(textOrHtml) {
        var htmlParser = this.getHtmlParser(), htmlNodes = htmlParser.parse(textOrHtml), anchorTagStackCount = 0, matches = [];
        for (var i = 0, len = htmlNodes.length; i < len; i++) {
          var node = htmlNodes[i], nodeType = node.getType();
          if (nodeType === "element" && ["a", "style", "script"].indexOf(node.getTagName()) !== -1) {
            if (!node.isClosing()) {
              anchorTagStackCount++;
            } else {
              anchorTagStackCount = Math.max(anchorTagStackCount - 1, 0);
            }
          } else if (nodeType === "text" && anchorTagStackCount === 0) {
            var textNodeMatches = this.parseText(node.getText(), node.getOffset());
            matches.push.apply(matches, textNodeMatches);
          }
        }
        matches = this.compactMatches(matches);
        matches = this.removeUnwantedMatches(matches);
        return matches;
      },
      compactMatches: function(matches) {
        matches.sort(function(a, b) {
          return a.getOffset() - b.getOffset();
        });
        for (var i = 0; i < matches.length - 1; i++) {
          var match = matches[i], offset2 = match.getOffset(), matchedTextLength = match.getMatchedText().length, endIdx = offset2 + matchedTextLength;
          if (i + 1 < matches.length) {
            if (matches[i + 1].getOffset() === offset2) {
              var removeIdx = matches[i + 1].getMatchedText().length > matchedTextLength ? i : i + 1;
              matches.splice(removeIdx, 1);
              continue;
            }
            if (matches[i + 1].getOffset() < endIdx) {
              matches.splice(i + 1, 1);
            }
          }
        }
        return matches;
      },
      removeUnwantedMatches: function(matches) {
        var remove = Autolinker2.Util.remove;
        if (!this.hashtag)
          remove(matches, function(match) {
            return match.getType() === "hashtag";
          });
        if (!this.email)
          remove(matches, function(match) {
            return match.getType() === "email";
          });
        if (!this.phone)
          remove(matches, function(match) {
            return match.getType() === "phone";
          });
        if (!this.mention)
          remove(matches, function(match) {
            return match.getType() === "mention";
          });
        if (!this.urls.schemeMatches) {
          remove(matches, function(m) {
            return m.getType() === "url" && m.getUrlMatchType() === "scheme";
          });
        }
        if (!this.urls.wwwMatches) {
          remove(matches, function(m) {
            return m.getType() === "url" && m.getUrlMatchType() === "www";
          });
        }
        if (!this.urls.tldMatches) {
          remove(matches, function(m) {
            return m.getType() === "url" && m.getUrlMatchType() === "tld";
          });
        }
        return matches;
      },
      parseText: function(text, offset2) {
        offset2 = offset2 || 0;
        var matchers = this.getMatchers(), matches = [];
        for (var i = 0, numMatchers = matchers.length; i < numMatchers; i++) {
          var textMatches = matchers[i].parseMatches(text);
          for (var j = 0, numTextMatches = textMatches.length; j < numTextMatches; j++) {
            textMatches[j].setOffset(offset2 + textMatches[j].getOffset());
          }
          matches.push.apply(matches, textMatches);
        }
        return matches;
      },
      link: function(textOrHtml) {
        if (!textOrHtml) {
          return "";
        }
        var matches = this.parse(textOrHtml), newHtml = [], lastIndex = 0;
        for (var i = 0, len = matches.length; i < len; i++) {
          var match = matches[i];
          newHtml.push(textOrHtml.substring(lastIndex, match.getOffset()));
          newHtml.push(this.createMatchReturnVal(match));
          lastIndex = match.getOffset() + match.getMatchedText().length;
        }
        newHtml.push(textOrHtml.substring(lastIndex));
        return newHtml.join("");
      },
      createMatchReturnVal: function(match) {
        var replaceFnResult;
        if (this.replaceFn) {
          replaceFnResult = this.replaceFn.call(this.context, match);
        }
        if (typeof replaceFnResult === "string") {
          return replaceFnResult;
        } else if (replaceFnResult === false) {
          return match.getMatchedText();
        } else if (replaceFnResult instanceof Autolinker2.HtmlTag) {
          return replaceFnResult.toAnchorString();
        } else {
          var anchorTag = match.buildTag();
          return anchorTag.toAnchorString();
        }
      },
      getHtmlParser: function() {
        var htmlParser = this.htmlParser;
        if (!htmlParser) {
          htmlParser = this.htmlParser = new Autolinker2.htmlParser.HtmlParser();
        }
        return htmlParser;
      },
      getMatchers: function() {
        if (!this.matchers) {
          var matchersNs = Autolinker2.matcher, tagBuilder = this.getTagBuilder();
          var matchers = [
            new matchersNs.Hashtag({ tagBuilder, serviceName: this.hashtag }),
            new matchersNs.Email({ tagBuilder }),
            new matchersNs.Phone({ tagBuilder }),
            new matchersNs.Mention({ tagBuilder, serviceName: this.mention }),
            new matchersNs.Url({ tagBuilder, stripPrefix: this.stripPrefix, stripTrailingSlash: this.stripTrailingSlash, decodePercentEncoding: this.decodePercentEncoding })
          ];
          return this.matchers = matchers;
        } else {
          return this.matchers;
        }
      },
      getTagBuilder: function() {
        var tagBuilder = this.tagBuilder;
        if (!tagBuilder) {
          tagBuilder = this.tagBuilder = new Autolinker2.AnchorTagBuilder({
            newWindow: this.newWindow,
            truncate: this.truncate,
            className: this.className
          });
        }
        return tagBuilder;
      }
    };
    Autolinker2.match = {};
    Autolinker2.matcher = {};
    Autolinker2.htmlParser = {};
    Autolinker2.truncate = {};
    Autolinker2.Util = {
      abstractMethod: function() {
        throw "abstract";
      },
      trimRegex: /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      assign: function(dest, src) {
        for (var prop in src) {
          if (src.hasOwnProperty(prop)) {
            dest[prop] = src[prop];
          }
        }
        return dest;
      },
      defaults: function(dest, src) {
        for (var prop in src) {
          if (src.hasOwnProperty(prop) && dest[prop] === void 0) {
            dest[prop] = src[prop];
          }
        }
        return dest;
      },
      extend: function(superclass, protoProps) {
        var superclassProto = superclass.prototype;
        var F = function() {
        };
        F.prototype = superclassProto;
        var subclass;
        if (protoProps.hasOwnProperty("constructor")) {
          subclass = protoProps.constructor;
        } else {
          subclass = function() {
            superclassProto.constructor.apply(this, arguments);
          };
        }
        var subclassProto = subclass.prototype = new F();
        subclassProto.constructor = subclass;
        subclassProto.superclass = superclassProto;
        delete protoProps.constructor;
        Autolinker2.Util.assign(subclassProto, protoProps);
        return subclass;
      },
      ellipsis: function(str, truncateLen, ellipsisChars) {
        var ellipsisLength;
        if (str.length > truncateLen) {
          if (ellipsisChars == null) {
            ellipsisChars = "&hellip;";
            ellipsisLength = 3;
          } else {
            ellipsisLength = ellipsisChars.length;
          }
          str = str.substring(0, truncateLen - ellipsisLength) + ellipsisChars;
        }
        return str;
      },
      indexOf: function(arr, element) {
        if (Array.prototype.indexOf) {
          return arr.indexOf(element);
        } else {
          for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === element)
              return i;
          }
          return -1;
        }
      },
      remove: function(arr, fn2) {
        for (var i = arr.length - 1; i >= 0; i--) {
          if (fn2(arr[i]) === true) {
            arr.splice(i, 1);
          }
        }
      },
      splitAndCapture: function(str, splitRegex) {
        if (!splitRegex.global)
          throw new Error("`splitRegex` must have the 'g' flag set");
        var result = [], lastIdx = 0, match;
        while (match = splitRegex.exec(str)) {
          result.push(str.substring(lastIdx, match.index));
          result.push(match[0]);
          lastIdx = match.index + match[0].length;
        }
        result.push(str.substring(lastIdx));
        return result;
      },
      trim: function(str) {
        return str.replace(this.trimRegex, "");
      }
    };
    Autolinker2.HtmlTag = Autolinker2.Util.extend(Object, {
      whitespaceRegex: /\s+/,
      constructor: function(cfg) {
        Autolinker2.Util.assign(this, cfg);
        this.innerHtml = this.innerHtml || this.innerHTML;
      },
      setTagName: function(tagName) {
        this.tagName = tagName;
        return this;
      },
      getTagName: function() {
        return this.tagName || "";
      },
      setAttr: function(attrName, attrValue) {
        var tagAttrs = this.getAttrs();
        tagAttrs[attrName] = attrValue;
        return this;
      },
      getAttr: function(attrName) {
        return this.getAttrs()[attrName];
      },
      setAttrs: function(attrs) {
        var tagAttrs = this.getAttrs();
        Autolinker2.Util.assign(tagAttrs, attrs);
        return this;
      },
      getAttrs: function() {
        return this.attrs || (this.attrs = {});
      },
      setClass: function(cssClass) {
        return this.setAttr("class", cssClass);
      },
      addClass: function(cssClass) {
        var classAttr = this.getClass(), whitespaceRegex = this.whitespaceRegex, indexOf = Autolinker2.Util.indexOf, classes = !classAttr ? [] : classAttr.split(whitespaceRegex), newClasses = cssClass.split(whitespaceRegex), newClass;
        while (newClass = newClasses.shift()) {
          if (indexOf(classes, newClass) === -1) {
            classes.push(newClass);
          }
        }
        this.getAttrs()["class"] = classes.join(" ");
        return this;
      },
      removeClass: function(cssClass) {
        var classAttr = this.getClass(), whitespaceRegex = this.whitespaceRegex, indexOf = Autolinker2.Util.indexOf, classes = !classAttr ? [] : classAttr.split(whitespaceRegex), removeClasses = cssClass.split(whitespaceRegex), removeClass;
        while (classes.length && (removeClass = removeClasses.shift())) {
          var idx = indexOf(classes, removeClass);
          if (idx !== -1) {
            classes.splice(idx, 1);
          }
        }
        this.getAttrs()["class"] = classes.join(" ");
        return this;
      },
      getClass: function() {
        return this.getAttrs()["class"] || "";
      },
      hasClass: function(cssClass) {
        return (" " + this.getClass() + " ").indexOf(" " + cssClass + " ") !== -1;
      },
      setInnerHtml: function(html) {
        this.innerHtml = html;
        return this;
      },
      getInnerHtml: function() {
        return this.innerHtml || "";
      },
      toAnchorString: function() {
        var tagName = this.getTagName(), attrsStr = this.buildAttrsStr();
        attrsStr = attrsStr ? " " + attrsStr : "";
        return ["<", tagName, attrsStr, ">", this.getInnerHtml(), "</", tagName, ">"].join("");
      },
      buildAttrsStr: function() {
        if (!this.attrs)
          return "";
        var attrs = this.getAttrs(), attrsArr = [];
        for (var prop in attrs) {
          if (attrs.hasOwnProperty(prop)) {
            attrsArr.push(prop + '="' + attrs[prop] + '"');
          }
        }
        return attrsArr.join(" ");
      }
    });
    Autolinker2.RegexLib = function() {
      var alphaCharsStr = "A-Za-z\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
      var decimalNumbersStr = "0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19";
      var alphaNumericCharsStr = alphaCharsStr + decimalNumbersStr;
      var ipStr = "(?:[" + decimalNumbersStr + "]{1,3}\\.){3}[" + decimalNumbersStr + "]{1,3}";
      var domainLabelStr = "[" + alphaNumericCharsStr + "](?:[" + alphaNumericCharsStr + "\\-]{0,61}[" + alphaNumericCharsStr + "])?";
      var getDomainLabelStr = function(group) {
        return "(?=(" + domainLabelStr + "))\\" + group;
      };
      var getDomainNameStr = function(group) {
        return "(?:" + getDomainLabelStr(group) + "(?:\\." + getDomainLabelStr(group + 1) + "){0,126}|" + ipStr + ")";
      };
      return {
        alphaNumericCharsStr,
        alphaCharsStr,
        getDomainNameStr
      };
    }();
    Autolinker2.AnchorTagBuilder = Autolinker2.Util.extend(Object, {
      constructor: function(cfg) {
        cfg = cfg || {};
        this.newWindow = cfg.newWindow;
        this.truncate = cfg.truncate;
        this.className = cfg.className;
      },
      build: function(match) {
        return new Autolinker2.HtmlTag({
          tagName: "a",
          attrs: this.createAttrs(match),
          innerHtml: this.processAnchorText(match.getAnchorText())
        });
      },
      createAttrs: function(match) {
        var attrs = {
          "href": match.getAnchorHref()
        };
        var cssClass = this.createCssClass(match);
        if (cssClass) {
          attrs["class"] = cssClass;
        }
        if (this.newWindow) {
          attrs["target"] = "_blank";
          attrs["rel"] = "noopener noreferrer";
        }
        if (this.truncate) {
          if (this.truncate.length && this.truncate.length < match.getAnchorText().length) {
            attrs["title"] = match.getAnchorHref();
          }
        }
        return attrs;
      },
      createCssClass: function(match) {
        var className = this.className;
        if (!className) {
          return "";
        } else {
          var returnClasses = [className], cssClassSuffixes = match.getCssClassSuffixes();
          for (var i = 0, len = cssClassSuffixes.length; i < len; i++) {
            returnClasses.push(className + "-" + cssClassSuffixes[i]);
          }
          return returnClasses.join(" ");
        }
      },
      processAnchorText: function(anchorText) {
        anchorText = this.doTruncate(anchorText);
        return anchorText;
      },
      doTruncate: function(anchorText) {
        var truncate = this.truncate;
        if (!truncate || !truncate.length)
          return anchorText;
        var truncateLength = truncate.length, truncateLocation = truncate.location;
        if (truncateLocation === "smart") {
          return Autolinker2.truncate.TruncateSmart(anchorText, truncateLength);
        } else if (truncateLocation === "middle") {
          return Autolinker2.truncate.TruncateMiddle(anchorText, truncateLength);
        } else {
          return Autolinker2.truncate.TruncateEnd(anchorText, truncateLength);
        }
      }
    });
    Autolinker2.htmlParser.HtmlParser = Autolinker2.Util.extend(Object, {
      htmlRegex: function() {
        var commentTagRegex = /!--([\s\S]+?)--/, tagNameRegex = /[0-9a-zA-Z][0-9a-zA-Z:]*/, attrNameRegex = /[^\s"'>\/=\x00-\x1F\x7F]+/, attrValueRegex = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/, optionalAttrValueRegex = "(?:\\s*?=\\s*?" + attrValueRegex.source + ")?";
        var getNameEqualsValueRegex = function(group) {
          return "(?=(" + attrNameRegex.source + "))\\" + group + optionalAttrValueRegex;
        };
        return new RegExp([
          "(?:",
          "<(!DOCTYPE)",
          "(?:",
          "\\s+",
          "(?:",
          getNameEqualsValueRegex(2),
          "|",
          attrValueRegex.source + ")",
          ")*",
          ">",
          ")",
          "|",
          "(?:",
          "<(/)?",
          "(?:",
          commentTagRegex.source,
          "|",
          "(?:",
          "(" + tagNameRegex.source + ")",
          "\\s*/?",
          ")",
          "|",
          "(?:",
          "(" + tagNameRegex.source + ")",
          "\\s+",
          "(?:",
          "(?:\\s+|\\b)",
          getNameEqualsValueRegex(7),
          ")*",
          "\\s*/?",
          ")",
          ")",
          ">",
          ")"
        ].join(""), "gi");
      }(),
      htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,
      parse: function(html) {
        var htmlRegex = this.htmlRegex, currentResult, lastIndex = 0, textAndEntityNodes, nodes = [];
        while ((currentResult = htmlRegex.exec(html)) !== null) {
          var tagText = currentResult[0], commentText = currentResult[4], tagName = currentResult[1] || currentResult[5] || currentResult[6], isClosingTag = !!currentResult[3], offset2 = currentResult.index, inBetweenTagsText = html.substring(lastIndex, offset2);
          if (inBetweenTagsText) {
            textAndEntityNodes = this.parseTextAndEntityNodes(lastIndex, inBetweenTagsText);
            nodes.push.apply(nodes, textAndEntityNodes);
          }
          if (commentText) {
            nodes.push(this.createCommentNode(offset2, tagText, commentText));
          } else {
            nodes.push(this.createElementNode(offset2, tagText, tagName, isClosingTag));
          }
          lastIndex = offset2 + tagText.length;
        }
        if (lastIndex < html.length) {
          var text = html.substring(lastIndex);
          if (text) {
            textAndEntityNodes = this.parseTextAndEntityNodes(lastIndex, text);
            textAndEntityNodes.forEach(function(node) {
              nodes.push(node);
            });
          }
        }
        return nodes;
      },
      parseTextAndEntityNodes: function(offset2, text) {
        var nodes = [], textAndEntityTokens = Autolinker2.Util.splitAndCapture(text, this.htmlCharacterEntitiesRegex);
        for (var i = 0, len = textAndEntityTokens.length; i < len; i += 2) {
          var textToken = textAndEntityTokens[i], entityToken = textAndEntityTokens[i + 1];
          if (textToken) {
            nodes.push(this.createTextNode(offset2, textToken));
            offset2 += textToken.length;
          }
          if (entityToken) {
            nodes.push(this.createEntityNode(offset2, entityToken));
            offset2 += entityToken.length;
          }
        }
        return nodes;
      },
      createCommentNode: function(offset2, tagText, commentText) {
        return new Autolinker2.htmlParser.CommentNode({
          offset: offset2,
          text: tagText,
          comment: Autolinker2.Util.trim(commentText)
        });
      },
      createElementNode: function(offset2, tagText, tagName, isClosingTag) {
        return new Autolinker2.htmlParser.ElementNode({
          offset: offset2,
          text: tagText,
          tagName: tagName.toLowerCase(),
          closing: isClosingTag
        });
      },
      createEntityNode: function(offset2, text) {
        return new Autolinker2.htmlParser.EntityNode({ offset: offset2, text });
      },
      createTextNode: function(offset2, text) {
        return new Autolinker2.htmlParser.TextNode({ offset: offset2, text });
      }
    });
    Autolinker2.htmlParser.HtmlNode = Autolinker2.Util.extend(Object, {
      offset: void 0,
      text: void 0,
      constructor: function(cfg) {
        Autolinker2.Util.assign(this, cfg);
        if (this.offset == null)
          throw new Error("`offset` cfg required");
        if (this.text == null)
          throw new Error("`text` cfg required");
      },
      getType: Autolinker2.Util.abstractMethod,
      getOffset: function() {
        return this.offset;
      },
      getText: function() {
        return this.text;
      }
    });
    Autolinker2.htmlParser.CommentNode = Autolinker2.Util.extend(Autolinker2.htmlParser.HtmlNode, {
      comment: "",
      getType: function() {
        return "comment";
      },
      getComment: function() {
        return this.comment;
      }
    });
    Autolinker2.htmlParser.ElementNode = Autolinker2.Util.extend(Autolinker2.htmlParser.HtmlNode, {
      tagName: "",
      closing: false,
      getType: function() {
        return "element";
      },
      getTagName: function() {
        return this.tagName;
      },
      isClosing: function() {
        return this.closing;
      }
    });
    Autolinker2.htmlParser.EntityNode = Autolinker2.Util.extend(Autolinker2.htmlParser.HtmlNode, {
      getType: function() {
        return "entity";
      }
    });
    Autolinker2.htmlParser.TextNode = Autolinker2.Util.extend(Autolinker2.htmlParser.HtmlNode, {
      getType: function() {
        return "text";
      }
    });
    Autolinker2.match.Match = Autolinker2.Util.extend(Object, {
      constructor: function(cfg) {
        if (cfg.tagBuilder == null)
          throw new Error("`tagBuilder` cfg required");
        if (cfg.matchedText == null)
          throw new Error("`matchedText` cfg required");
        if (cfg.offset == null)
          throw new Error("`offset` cfg required");
        this.tagBuilder = cfg.tagBuilder;
        this.matchedText = cfg.matchedText;
        this.offset = cfg.offset;
      },
      getType: Autolinker2.Util.abstractMethod,
      getMatchedText: function() {
        return this.matchedText;
      },
      setOffset: function(offset2) {
        this.offset = offset2;
      },
      getOffset: function() {
        return this.offset;
      },
      getAnchorHref: Autolinker2.Util.abstractMethod,
      getAnchorText: Autolinker2.Util.abstractMethod,
      getCssClassSuffixes: function() {
        return [this.getType()];
      },
      buildTag: function() {
        return this.tagBuilder.build(this);
      }
    });
    Autolinker2.match.Email = Autolinker2.Util.extend(Autolinker2.match.Match, {
      constructor: function(cfg) {
        Autolinker2.match.Match.prototype.constructor.call(this, cfg);
        if (!cfg.email)
          throw new Error("`email` cfg required");
        this.email = cfg.email;
      },
      getType: function() {
        return "email";
      },
      getEmail: function() {
        return this.email;
      },
      getAnchorHref: function() {
        return "mailto:" + this.email;
      },
      getAnchorText: function() {
        return this.email;
      }
    });
    Autolinker2.match.Hashtag = Autolinker2.Util.extend(Autolinker2.match.Match, {
      constructor: function(cfg) {
        Autolinker2.match.Match.prototype.constructor.call(this, cfg);
        if (!cfg.hashtag)
          throw new Error("`hashtag` cfg required");
        this.serviceName = cfg.serviceName;
        this.hashtag = cfg.hashtag;
      },
      getType: function() {
        return "hashtag";
      },
      getServiceName: function() {
        return this.serviceName;
      },
      getHashtag: function() {
        return this.hashtag;
      },
      getAnchorHref: function() {
        var serviceName = this.serviceName, hashtag = this.hashtag;
        switch (serviceName) {
          case "twitter":
            return "https://twitter.com/hashtag/" + hashtag;
          case "facebook":
            return "https://www.facebook.com/hashtag/" + hashtag;
          case "instagram":
            return "https://instagram.com/explore/tags/" + hashtag;
          default:
            throw new Error("Unknown service name to point hashtag to: ", serviceName);
        }
      },
      getAnchorText: function() {
        return "#" + this.hashtag;
      }
    });
    Autolinker2.match.Phone = Autolinker2.Util.extend(Autolinker2.match.Match, {
      constructor: function(cfg) {
        Autolinker2.match.Match.prototype.constructor.call(this, cfg);
        if (!cfg.number)
          throw new Error("`number` cfg required");
        if (cfg.plusSign == null)
          throw new Error("`plusSign` cfg required");
        this.number = cfg.number;
        this.plusSign = cfg.plusSign;
      },
      getType: function() {
        return "phone";
      },
      getNumber: function() {
        return this.number;
      },
      getAnchorHref: function() {
        return "tel:" + (this.plusSign ? "+" : "") + this.number;
      },
      getAnchorText: function() {
        return this.matchedText;
      }
    });
    Autolinker2.match.Mention = Autolinker2.Util.extend(Autolinker2.match.Match, {
      constructor: function(cfg) {
        Autolinker2.match.Match.prototype.constructor.call(this, cfg);
        if (!cfg.serviceName)
          throw new Error("`serviceName` cfg required");
        if (!cfg.mention)
          throw new Error("`mention` cfg required");
        this.mention = cfg.mention;
        this.serviceName = cfg.serviceName;
      },
      getType: function() {
        return "mention";
      },
      getMention: function() {
        return this.mention;
      },
      getServiceName: function() {
        return this.serviceName;
      },
      getAnchorHref: function() {
        switch (this.serviceName) {
          case "twitter":
            return "https://twitter.com/" + this.mention;
          case "instagram":
            return "https://instagram.com/" + this.mention;
          case "soundcloud":
            return "https://soundcloud.com/" + this.mention;
          default:
            throw new Error("Unknown service name to point mention to: ", this.serviceName);
        }
      },
      getAnchorText: function() {
        return "@" + this.mention;
      },
      getCssClassSuffixes: function() {
        var cssClassSuffixes = Autolinker2.match.Match.prototype.getCssClassSuffixes.call(this), serviceName = this.getServiceName();
        if (serviceName) {
          cssClassSuffixes.push(serviceName);
        }
        return cssClassSuffixes;
      }
    });
    Autolinker2.match.Url = Autolinker2.Util.extend(Autolinker2.match.Match, {
      constructor: function(cfg) {
        Autolinker2.match.Match.prototype.constructor.call(this, cfg);
        if (cfg.urlMatchType !== "scheme" && cfg.urlMatchType !== "www" && cfg.urlMatchType !== "tld")
          throw new Error('`urlMatchType` cfg must be one of: "scheme", "www", or "tld"');
        if (!cfg.url)
          throw new Error("`url` cfg required");
        if (cfg.protocolUrlMatch == null)
          throw new Error("`protocolUrlMatch` cfg required");
        if (cfg.protocolRelativeMatch == null)
          throw new Error("`protocolRelativeMatch` cfg required");
        if (cfg.stripPrefix == null)
          throw new Error("`stripPrefix` cfg required");
        if (cfg.stripTrailingSlash == null)
          throw new Error("`stripTrailingSlash` cfg required");
        if (cfg.decodePercentEncoding == null)
          throw new Error("`decodePercentEncoding` cfg required");
        this.urlMatchType = cfg.urlMatchType;
        this.url = cfg.url;
        this.protocolUrlMatch = cfg.protocolUrlMatch;
        this.protocolRelativeMatch = cfg.protocolRelativeMatch;
        this.stripPrefix = cfg.stripPrefix;
        this.stripTrailingSlash = cfg.stripTrailingSlash;
        this.decodePercentEncoding = cfg.decodePercentEncoding;
      },
      schemePrefixRegex: /^(https?:\/\/)?/i,
      wwwPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
      protocolRelativeRegex: /^\/\//,
      protocolPrepended: false,
      getType: function() {
        return "url";
      },
      getUrlMatchType: function() {
        return this.urlMatchType;
      },
      getUrl: function() {
        var url = this.url;
        if (!this.protocolRelativeMatch && !this.protocolUrlMatch && !this.protocolPrepended) {
          url = this.url = "http://" + url;
          this.protocolPrepended = true;
        }
        return url;
      },
      getAnchorHref: function() {
        var url = this.getUrl();
        return url.replace(/&amp;/g, "&");
      },
      getAnchorText: function() {
        var anchorText = this.getMatchedText();
        if (this.protocolRelativeMatch) {
          anchorText = this.stripProtocolRelativePrefix(anchorText);
        }
        if (this.stripPrefix.scheme) {
          anchorText = this.stripSchemePrefix(anchorText);
        }
        if (this.stripPrefix.www) {
          anchorText = this.stripWwwPrefix(anchorText);
        }
        if (this.stripTrailingSlash) {
          anchorText = this.removeTrailingSlash(anchorText);
        }
        if (this.decodePercentEncoding) {
          anchorText = this.removePercentEncoding(anchorText);
        }
        return anchorText;
      },
      stripSchemePrefix: function(url) {
        return url.replace(this.schemePrefixRegex, "");
      },
      stripWwwPrefix: function(url) {
        return url.replace(this.wwwPrefixRegex, "$1");
      },
      stripProtocolRelativePrefix: function(text) {
        return text.replace(this.protocolRelativeRegex, "");
      },
      removeTrailingSlash: function(anchorText) {
        if (anchorText.charAt(anchorText.length - 1) === "/") {
          anchorText = anchorText.slice(0, -1);
        }
        return anchorText;
      },
      removePercentEncoding: function(anchorText) {
        try {
          return decodeURIComponent(
            anchorText.replace(/%22/gi, "&quot;").replace(/%26/gi, "&amp;").replace(/%27/gi, "&#39;").replace(/%3C/gi, "&lt;").replace(/%3E/gi, "&gt;")
          );
        } catch (e) {
          return anchorText;
        }
      }
    });
    Autolinker2.tldRegex = /(?:xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|northwesternmutual|travelersinsurance|vermögensberatung|xn--3oq18vl8pn36a|xn--5su34j936bgsg|xn--bck1b9a5dre4c|xn--mgbai9azgqp6j|xn--mgberp4a5d4ar|xn--xkc2dl3a5ee0h|vermögensberater|xn--fzys8d69uvgm|xn--mgba7c0bbn0a|xn--xkc2al3hye2a|americanexpress|kerryproperties|sandvikcoromant|xn--i1b6b1a6a2e|xn--kcrx77d1x4a|xn--lgbbat1ad8j|xn--mgba3a4f16a|xn--mgbc0a9azcg|xn--nqv7fs00ema|afamilycompany|americanfamily|bananarepublic|cancerresearch|cookingchannel|kerrylogistics|weatherchannel|xn--54b7fta0cc|xn--6qq986b3xl|xn--80aqecdr1a|xn--b4w605ferd|xn--fiq228c5hs|xn--jlq61u9w7b|xn--mgba3a3ejt|xn--mgbaam7a8h|xn--mgbayh7gpa|xn--mgbb9fbpob|xn--mgbbh1a71e|xn--mgbca7dzdo|xn--mgbi4ecexp|xn--mgbx4cd0ab|international|lifeinsurance|orientexpress|spreadbetting|travelchannel|wolterskluwer|xn--eckvdtc9d|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--tiq49xqyj|xn--yfro4i67o|xn--ygbi2ammx|construction|lplfinancial|pamperedchef|scholarships|versicherung|xn--3e0b707e|xn--80adxhks|xn--80asehdb|xn--8y0a063a|xn--gckr3f0f|xn--mgb9awbf|xn--mgbab2bd|xn--mgbpl2fh|xn--mgbt3dhd|xn--mk1bu44c|xn--ngbc5azd|xn--ngbe9e0a|xn--ogbpf8fl|xn--qcka1pmc|accountants|barclaycard|blackfriday|blockbuster|bridgestone|calvinklein|contractors|creditunion|engineering|enterprises|foodnetwork|investments|kerryhotels|lamborghini|motorcycles|olayangroup|photography|playstation|productions|progressive|redumbrella|rightathome|williamhill|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--3bst00m|xn--3ds443g|xn--42c2d9a|xn--45brj9c|xn--55qw42g|xn--6frz82g|xn--80ao21a|xn--9krt00a|xn--cck2b3b|xn--czr694b|xn--d1acj3b|xn--efvy88h|xn--estv75g|xn--fct429k|xn--fjq720a|xn--flw351e|xn--g2xx48c|xn--gecrj9c|xn--gk3at1e|xn--h2brj9c|xn--hxt814e|xn--imr513n|xn--j6w193g|xn--jvr189m|xn--kprw13d|xn--kpry57d|xn--kpu716f|xn--mgbtx2b|xn--mix891f|xn--nyqy26a|xn--pbt977c|xn--pgbs0dh|xn--q9jyb4c|xn--rhqv96g|xn--rovu88b|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--vuq861b|xn--w4rs40l|xn--xhq521b|xn--zfr164b|சிங்கப்பூர்|accountant|apartments|associates|basketball|bnpparibas|boehringer|capitalone|consulting|creditcard|cuisinella|eurovision|extraspace|foundation|healthcare|immobilien|industries|management|mitsubishi|nationwide|newholland|nextdirect|onyourside|properties|protection|prudential|realestate|republican|restaurant|schaeffler|swiftcover|tatamotors|technology|telefonica|university|vistaprint|vlaanderen|volkswagen|xn--30rr7y|xn--3pxu8k|xn--45q11c|xn--4gbrim|xn--55qx5d|xn--5tzm5g|xn--80aswg|xn--90a3ac|xn--9dbq2a|xn--9et52u|xn--c2br7g|xn--cg4bki|xn--czrs0t|xn--czru2d|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--io0a7i|xn--kput3i|xn--mxtq1m|xn--o3cw4h|xn--pssy2u|xn--unup4y|xn--wgbh1c|xn--wgbl6a|xn--y9a3aq|accenture|alfaromeo|allfinanz|amsterdam|analytics|aquarelle|barcelona|bloomberg|christmas|community|directory|education|equipment|fairwinds|financial|firestone|fresenius|frontdoor|fujixerox|furniture|goldpoint|goodhands|hisamitsu|homedepot|homegoods|homesense|honeywell|institute|insurance|kuokgroup|ladbrokes|lancaster|landrover|lifestyle|marketing|marshalls|mcdonalds|melbourne|microsoft|montblanc|panasonic|passagens|pramerica|richardli|scjohnson|shangrila|solutions|statebank|statefarm|stockholm|travelers|vacations|xn--90ais|xn--c1avg|xn--d1alf|xn--e1a4c|xn--fhbei|xn--j1aef|xn--j1amh|xn--l1acc|xn--nqv7f|xn--p1acf|xn--tckwe|xn--vhquv|yodobashi|abudhabi|airforce|allstate|attorney|barclays|barefoot|bargains|baseball|boutique|bradesco|broadway|brussels|budapest|builders|business|capetown|catering|catholic|chrysler|cipriani|cityeats|cleaning|clinique|clothing|commbank|computer|delivery|deloitte|democrat|diamonds|discount|discover|download|engineer|ericsson|esurance|everbank|exchange|feedback|fidelity|firmdale|football|frontier|goodyear|grainger|graphics|guardian|hdfcbank|helsinki|holdings|hospital|infiniti|ipiranga|istanbul|jpmorgan|lighting|lundbeck|marriott|maserati|mckinsey|memorial|mortgage|movistar|observer|partners|pharmacy|pictures|plumbing|property|redstone|reliance|saarland|samsclub|security|services|shopping|showtime|softbank|software|stcgroup|supplies|symantec|telecity|training|uconnect|vanguard|ventures|verisign|woodside|xn--90ae|xn--node|xn--p1ai|xn--qxam|yokohama|السعودية|abogado|academy|agakhan|alibaba|android|athleta|auction|audible|auspost|avianca|banamex|bauhaus|bentley|bestbuy|booking|brother|bugatti|capital|caravan|careers|cartier|channel|chintai|citadel|clubmed|college|cologne|comcast|company|compare|contact|cooking|corsica|country|coupons|courses|cricket|cruises|dentist|digital|domains|exposed|express|farmers|fashion|ferrari|ferrero|finance|fishing|fitness|flights|florist|flowers|forsale|frogans|fujitsu|gallery|genting|godaddy|guitars|hamburg|hangout|hitachi|holiday|hosting|hoteles|hotmail|hyundai|iselect|ismaili|jewelry|juniper|kitchen|komatsu|lacaixa|lancome|lanxess|lasalle|latrobe|leclerc|liaison|limited|lincoln|markets|metlife|monster|netbank|netflix|network|neustar|okinawa|oldnavy|organic|origins|panerai|philips|pioneer|politie|realtor|recipes|rentals|reviews|rexroth|samsung|sandvik|schmidt|schwarz|science|shiksha|shriram|singles|spiegel|staples|starhub|statoil|storage|support|surgery|systems|temasek|theater|theatre|tickets|tiffany|toshiba|trading|walmart|wanggou|watches|weather|website|wedding|whoswho|windows|winners|xfinity|yamaxun|youtube|zuerich|католик|الجزائر|العليان|پاکستان|كاثوليك|موبايلي|இந்தியா|abarth|abbott|abbvie|active|africa|agency|airbus|airtel|alipay|alsace|alstom|anquan|aramco|author|bayern|beauty|berlin|bharti|blanco|bostik|boston|broker|camera|career|caseih|casino|center|chanel|chrome|church|circle|claims|clinic|coffee|comsec|condos|coupon|credit|cruise|dating|datsun|dealer|degree|dental|design|direct|doctor|dunlop|dupont|durban|emerck|energy|estate|events|expert|family|flickr|futbol|gallup|garden|george|giving|global|google|gratis|health|hermes|hiphop|hockey|hughes|imamat|insure|intuit|jaguar|joburg|juegos|kaufen|kinder|kindle|kosher|lancia|latino|lawyer|lefrak|living|locker|london|luxury|madrid|maison|makeup|market|mattel|mobile|mobily|monash|mormon|moscow|museum|mutual|nagoya|natura|nissan|nissay|norton|nowruz|office|olayan|online|oracle|orange|otsuka|pfizer|photos|physio|piaget|pictet|quebec|racing|realty|reisen|repair|report|review|rocher|rogers|ryukyu|safety|sakura|sanofi|school|schule|secure|select|shouji|soccer|social|stream|studio|supply|suzuki|swatch|sydney|taipei|taobao|target|tattoo|tennis|tienda|tjmaxx|tkmaxx|toyota|travel|unicom|viajes|viking|villas|virgin|vision|voting|voyage|vuelos|walter|warman|webcam|xihuan|xperia|yachts|yandex|zappos|москва|онлайн|ابوظبي|ارامكو|الاردن|المغرب|امارات|فلسطين|مليسيا|இலங்கை|ファッション|actor|adult|aetna|amfam|amica|apple|archi|audio|autos|azure|baidu|beats|bible|bingo|black|boats|boots|bosch|build|canon|cards|chase|cheap|chloe|cisco|citic|click|cloud|coach|codes|crown|cymru|dabur|dance|deals|delta|dodge|drive|dubai|earth|edeka|email|epost|epson|faith|fedex|final|forex|forum|gallo|games|gifts|gives|glade|glass|globo|gmail|green|gripe|group|gucci|guide|homes|honda|horse|house|hyatt|ikano|intel|irish|iveco|jetzt|koeln|kyoto|lamer|lease|legal|lexus|lilly|linde|lipsy|lixil|loans|locus|lotte|lotto|lupin|macys|mango|media|miami|money|mopar|movie|nadex|nexus|nikon|ninja|nokia|nowtv|omega|osaka|paris|parts|party|phone|photo|pizza|place|poker|praxi|press|prime|promo|quest|radio|rehab|reise|ricoh|rocks|rodeo|salon|sener|seven|sharp|shell|shoes|skype|sling|smart|smile|solar|space|stada|store|study|style|sucks|swiss|tatar|tires|tirol|tmall|today|tokyo|tools|toray|total|tours|trade|trust|tunes|tushu|ubank|vegas|video|vista|vodka|volvo|wales|watch|weber|weibo|works|world|xerox|yahoo|zippo|ایران|بازار|بھارت|سودان|سورية|همراه|संगठन|বাংলা|భారత్|嘉里大酒店|aarp|able|adac|aero|aigo|akdn|ally|amex|army|arpa|arte|asda|asia|audi|auto|baby|band|bank|bbva|beer|best|bike|bing|blog|blue|bofa|bond|book|buzz|cafe|call|camp|care|cars|casa|case|cash|cbre|cern|chat|citi|city|club|cool|coop|cyou|data|date|dclk|deal|dell|desi|diet|dish|docs|doha|duck|duns|dvag|erni|fage|fail|fans|farm|fast|fiat|fido|film|fire|fish|flir|food|ford|free|fund|game|gbiz|gent|ggee|gift|gmbh|gold|golf|goog|guge|guru|hair|haus|hdfc|help|here|hgtv|host|hsbc|icbc|ieee|imdb|immo|info|itau|java|jeep|jobs|jprs|kddi|kiwi|kpmg|kred|land|lego|lgbt|lidl|life|like|limo|link|live|loan|loft|love|ltda|luxe|maif|meet|meme|menu|mini|mint|mobi|moda|moto|mtpc|name|navy|news|next|nico|nike|ollo|open|page|pars|pccw|pics|ping|pink|play|plus|pohl|porn|post|prod|prof|qpon|raid|read|reit|rent|rest|rich|rmit|room|rsvp|ruhr|safe|sale|sapo|sarl|save|saxo|scor|scot|seat|seek|sexy|shaw|shia|shop|show|silk|sina|site|skin|sncf|sohu|song|sony|spot|star|surf|talk|taxi|team|tech|teva|tiaa|tips|town|toys|tube|vana|visa|viva|vivo|vote|voto|wang|weir|wien|wiki|wine|work|xbox|yoga|zara|zero|zone|дети|сайт|بيتك|تونس|شبكة|عراق|عمان|موقع|भारत|ভারত|ਭਾਰਤ|ભારત|ලංකා|グーグル|クラウド|ポイント|大众汽车|组织机构|電訊盈科|香格里拉|aaa|abb|abc|aco|ads|aeg|afl|aig|anz|aol|app|art|aws|axa|bar|bbc|bbt|bcg|bcn|bet|bid|bio|biz|bms|bmw|bnl|bom|boo|bot|box|buy|bzh|cab|cal|cam|car|cat|cba|cbn|cbs|ceb|ceo|cfa|cfd|com|crs|csc|dad|day|dds|dev|dhl|diy|dnp|dog|dot|dtv|dvr|eat|eco|edu|esq|eus|fan|fit|fly|foo|fox|frl|ftr|fun|fyi|gal|gap|gdn|gea|gle|gmo|gmx|goo|gop|got|gov|hbo|hiv|hkt|hot|how|htc|ibm|ice|icu|ifm|ing|ink|int|ist|itv|iwc|jcb|jcp|jio|jlc|jll|jmp|jnj|jot|joy|kfh|kia|kim|kpn|krd|lat|law|lds|lol|lpl|ltd|man|mba|mcd|med|men|meo|mil|mit|mlb|mls|mma|moe|moi|mom|mov|msd|mtn|mtr|nab|nba|nec|net|new|nfl|ngo|nhk|now|nra|nrw|ntt|nyc|obi|off|one|ong|onl|ooo|org|ott|ovh|pay|pet|pid|pin|pnc|pro|pru|pub|pwc|qvc|red|ren|ril|rio|rip|run|rwe|sap|sas|sbi|sbs|sca|scb|ses|sew|sex|sfr|ski|sky|soy|srl|srt|stc|tab|tax|tci|tdk|tel|thd|tjx|top|trv|tui|tvs|ubs|uno|uol|ups|vet|vig|vin|vip|wed|win|wme|wow|wtc|wtf|xin|xxx|xyz|you|yun|zip|бел|ком|қаз|мкд|мон|орг|рус|срб|укр|հայ|קום|قطر|كوم|مصر|कॉम|नेट|คอม|ไทย|ストア|セール|みんな|中文网|天主教|我爱你|新加坡|淡马锡|诺基亚|飞利浦|ac|ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|ελ|бг|ею|рф|გე|닷넷|닷컴|삼성|한국|コム|世界|中信|中国|中國|企业|佛山|信息|健康|八卦|公司|公益|台湾|台灣|商城|商店|商标|嘉里|在线|大拿|娱乐|家電|工行|广东|微博|慈善|手机|手表|政务|政府|新闻|时尚|書籍|机构|游戏|澳門|点看|珠宝|移动|网址|网店|网站|网络|联通|谷歌|购物|通販|集团|食品|餐厅|香港)/;
    Autolinker2.matcher.Matcher = Autolinker2.Util.extend(Object, {
      constructor: function(cfg) {
        if (!cfg.tagBuilder)
          throw new Error("`tagBuilder` cfg required");
        this.tagBuilder = cfg.tagBuilder;
      },
      parseMatches: Autolinker2.Util.abstractMethod
    });
    Autolinker2.matcher.Email = Autolinker2.Util.extend(Autolinker2.matcher.Matcher, {
      matcherRegex: function() {
        var alphaNumericChars = Autolinker2.RegexLib.alphaNumericCharsStr, specialCharacters = "!#$%&'*+\\-\\/=?^_`{|}~", restrictedSpecialCharacters = '\\s"(),:;<>@\\[\\]', validCharacters = alphaNumericChars + specialCharacters, validRestrictedCharacters = validCharacters + restrictedSpecialCharacters, emailRegex = new RegExp("(?:[" + validCharacters + "](?:[" + validCharacters + ']|\\.(?!\\.|@))*|\\"[' + validRestrictedCharacters + '.]+\\")@'), getDomainNameStr = Autolinker2.RegexLib.getDomainNameStr, tldRegex = Autolinker2.tldRegex;
        return new RegExp([
          emailRegex.source,
          getDomainNameStr(1),
          "\\.",
          tldRegex.source
        ].join(""), "gi");
      }(),
      parseMatches: function(text) {
        var matcherRegex = this.matcherRegex, tagBuilder = this.tagBuilder, matches = [], match;
        while ((match = matcherRegex.exec(text)) !== null) {
          var matchedText = match[0];
          matches.push(new Autolinker2.match.Email({
            tagBuilder,
            matchedText,
            offset: match.index,
            email: matchedText
          }));
        }
        return matches;
      }
    });
    Autolinker2.matcher.Hashtag = Autolinker2.Util.extend(Autolinker2.matcher.Matcher, {
      matcherRegex: new RegExp("#[_" + Autolinker2.RegexLib.alphaNumericCharsStr + "]{1,139}", "g"),
      nonWordCharRegex: new RegExp("[^" + Autolinker2.RegexLib.alphaNumericCharsStr + "]"),
      constructor: function(cfg) {
        Autolinker2.matcher.Matcher.prototype.constructor.call(this, cfg);
        this.serviceName = cfg.serviceName;
      },
      parseMatches: function(text) {
        var matcherRegex = this.matcherRegex, nonWordCharRegex = this.nonWordCharRegex, serviceName = this.serviceName, tagBuilder = this.tagBuilder, matches = [], match;
        while ((match = matcherRegex.exec(text)) !== null) {
          var offset2 = match.index, prevChar = text.charAt(offset2 - 1);
          if (offset2 === 0 || nonWordCharRegex.test(prevChar)) {
            var matchedText = match[0], hashtag = match[0].slice(1);
            matches.push(new Autolinker2.match.Hashtag({
              tagBuilder,
              matchedText,
              offset: offset2,
              serviceName,
              hashtag
            }));
          }
        }
        return matches;
      }
    });
    Autolinker2.matcher.Phone = Autolinker2.Util.extend(Autolinker2.matcher.Matcher, {
      matcherRegex: /(?:(?:(?:(\+)?\d{1,3}[-\040.]?)?\(?\d{3}\)?[-\040.]?\d{3}[-\040.]?\d{4})|(?:(\+)(?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)[-\040.]?(?:\d[-\040.]?){6,12}\d+))([,;]+[0-9]+#?)*/g,
      parseMatches: function(text) {
        var matcherRegex = this.matcherRegex, tagBuilder = this.tagBuilder, matches = [], match;
        while ((match = matcherRegex.exec(text)) !== null) {
          var matchedText = match[0], cleanNumber = matchedText.replace(/[^0-9,;#]/g, ""), plusSign = !!(match[1] || match[2]), before = match.index == 0 ? "" : text.substr(match.index - 1, 1), after = text.substr(match.index + matchedText.length, 1), contextClear = !before.match(/\d/) && !after.match(/\d/);
          if (this.testMatch(match[3]) && this.testMatch(matchedText) && contextClear) {
            matches.push(new Autolinker2.match.Phone({
              tagBuilder,
              matchedText,
              offset: match.index,
              number: cleanNumber,
              plusSign
            }));
          }
        }
        return matches;
      },
      testMatch: function(text) {
        return /\D/.test(text);
      }
    });
    Autolinker2.matcher.Mention = Autolinker2.Util.extend(Autolinker2.matcher.Matcher, {
      matcherRegexes: {
        "twitter": new RegExp("@[_" + Autolinker2.RegexLib.alphaNumericCharsStr + "]{1,20}", "g"),
        "instagram": new RegExp("@[_." + Autolinker2.RegexLib.alphaNumericCharsStr + "]{1,50}", "g"),
        "soundcloud": new RegExp("@[_." + Autolinker2.RegexLib.alphaNumericCharsStr + "-]{1,50}", "g")
      },
      nonWordCharRegex: new RegExp("[^" + Autolinker2.RegexLib.alphaNumericCharsStr + "]"),
      constructor: function(cfg) {
        Autolinker2.matcher.Matcher.prototype.constructor.call(this, cfg);
        this.serviceName = cfg.serviceName;
      },
      parseMatches: function(text) {
        var matcherRegex = this.matcherRegexes[this.serviceName], nonWordCharRegex = this.nonWordCharRegex, serviceName = this.serviceName, tagBuilder = this.tagBuilder, matches = [], match;
        if (!matcherRegex) {
          return matches;
        }
        while ((match = matcherRegex.exec(text)) !== null) {
          var offset2 = match.index, prevChar = text.charAt(offset2 - 1);
          if (offset2 === 0 || nonWordCharRegex.test(prevChar)) {
            var matchedText = match[0].replace(/\.+$/g, ""), mention = matchedText.slice(1);
            matches.push(new Autolinker2.match.Mention({
              tagBuilder,
              matchedText,
              offset: offset2,
              serviceName,
              mention
            }));
          }
        }
        return matches;
      }
    });
    Autolinker2.matcher.Url = Autolinker2.Util.extend(Autolinker2.matcher.Matcher, {
      matcherRegex: function() {
        var schemeRegex = /(?:[A-Za-z][-.+A-Za-z0-9]{0,63}:(?![A-Za-z][-.+A-Za-z0-9]{0,63}:\/\/)(?!\d+\/?)(?:\/\/)?)/, wwwRegex = /(?:www\.)/, getDomainNameStr = Autolinker2.RegexLib.getDomainNameStr, tldRegex = Autolinker2.tldRegex, alphaNumericCharsStr = Autolinker2.RegexLib.alphaNumericCharsStr, urlSuffixRegex = new RegExp("[/?#](?:[" + alphaNumericCharsStr + "\\-+&@#/%=~_()|'$*\\[\\]?!:,.;\u2713]*[" + alphaNumericCharsStr + "\\-+&@#/%=~_()|'$*\\[\\]\u2713])?");
        return new RegExp([
          "(?:",
          "(",
          schemeRegex.source,
          getDomainNameStr(2),
          ")",
          "|",
          "(",
          "(//)?",
          wwwRegex.source,
          getDomainNameStr(6),
          ")",
          "|",
          "(",
          "(//)?",
          getDomainNameStr(10) + "\\.",
          tldRegex.source,
          "(?![-" + alphaNumericCharsStr + "])",
          ")",
          ")",
          "(?::[0-9]+)?",
          "(?:" + urlSuffixRegex.source + ")?"
        ].join(""), "gi");
      }(),
      wordCharRegExp: new RegExp("[" + Autolinker2.RegexLib.alphaNumericCharsStr + "]"),
      openParensRe: /\(/g,
      closeParensRe: /\)/g,
      constructor: function(cfg) {
        Autolinker2.matcher.Matcher.prototype.constructor.call(this, cfg);
        if (cfg.stripPrefix == null)
          throw new Error("`stripPrefix` cfg required");
        if (cfg.stripTrailingSlash == null)
          throw new Error("`stripTrailingSlash` cfg required");
        this.stripPrefix = cfg.stripPrefix;
        this.stripTrailingSlash = cfg.stripTrailingSlash;
        this.decodePercentEncoding = cfg.decodePercentEncoding;
      },
      parseMatches: function(text) {
        var matcherRegex = this.matcherRegex, stripPrefix = this.stripPrefix, stripTrailingSlash = this.stripTrailingSlash, decodePercentEncoding = this.decodePercentEncoding, tagBuilder = this.tagBuilder, matches = [], match;
        while ((match = matcherRegex.exec(text)) !== null) {
          var matchStr = match[0], schemeUrlMatch = match[1], wwwUrlMatch = match[4], wwwProtocolRelativeMatch = match[5], tldProtocolRelativeMatch = match[9], offset2 = match.index, protocolRelativeMatch = wwwProtocolRelativeMatch || tldProtocolRelativeMatch, prevChar = text.charAt(offset2 - 1);
          if (!Autolinker2.matcher.UrlMatchValidator.isValid(matchStr, schemeUrlMatch)) {
            continue;
          }
          if (offset2 > 0 && prevChar === "@") {
            continue;
          }
          if (offset2 > 0 && protocolRelativeMatch && this.wordCharRegExp.test(prevChar)) {
            continue;
          }
          if (/\?$/.test(matchStr)) {
            matchStr = matchStr.substr(0, matchStr.length - 1);
          }
          if (this.matchHasUnbalancedClosingParen(matchStr)) {
            matchStr = matchStr.substr(0, matchStr.length - 1);
          } else {
            var pos = this.matchHasInvalidCharAfterTld(matchStr, schemeUrlMatch);
            if (pos > -1) {
              matchStr = matchStr.substr(0, pos);
            }
          }
          var urlMatchType = schemeUrlMatch ? "scheme" : wwwUrlMatch ? "www" : "tld", protocolUrlMatch = !!schemeUrlMatch;
          matches.push(new Autolinker2.match.Url({
            tagBuilder,
            matchedText: matchStr,
            offset: offset2,
            urlMatchType,
            url: matchStr,
            protocolUrlMatch,
            protocolRelativeMatch: !!protocolRelativeMatch,
            stripPrefix,
            stripTrailingSlash,
            decodePercentEncoding
          }));
        }
        return matches;
      },
      matchHasUnbalancedClosingParen: function(matchStr) {
        var lastChar = matchStr.charAt(matchStr.length - 1);
        if (lastChar === ")") {
          var openParensMatch = matchStr.match(this.openParensRe), closeParensMatch = matchStr.match(this.closeParensRe), numOpenParens = openParensMatch && openParensMatch.length || 0, numCloseParens = closeParensMatch && closeParensMatch.length || 0;
          if (numOpenParens < numCloseParens) {
            return true;
          }
        }
        return false;
      },
      matchHasInvalidCharAfterTld: function(urlMatch, schemeUrlMatch) {
        if (!urlMatch) {
          return -1;
        }
        var offset2 = 0;
        if (schemeUrlMatch) {
          offset2 = urlMatch.indexOf(":");
          urlMatch = urlMatch.slice(offset2);
        }
        var alphaNumeric = Autolinker2.RegexLib.alphaNumericCharsStr;
        var re = new RegExp("^((.?//)?[-." + alphaNumeric + "]*[-" + alphaNumeric + "]\\.[-" + alphaNumeric + "]+)");
        var res = re.exec(urlMatch);
        if (res === null) {
          return -1;
        }
        offset2 += res[1].length;
        urlMatch = urlMatch.slice(res[1].length);
        if (/^[^-.A-Za-z0-9:\/?#]/.test(urlMatch)) {
          return offset2;
        }
        return -1;
      }
    });
    Autolinker2.matcher.UrlMatchValidator = {
      hasFullProtocolRegex: /^[A-Za-z][-.+A-Za-z0-9]*:\/\//,
      uriSchemeRegex: /^[A-Za-z][-.+A-Za-z0-9]*:/,
      hasWordCharAfterProtocolRegex: new RegExp(":[^\\s]*?[" + Autolinker2.RegexLib.alphaCharsStr + "]"),
      ipRegex: /[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?(:[0-9]*)?\/?$/,
      isValid: function(urlMatch, protocolUrlMatch) {
        if (protocolUrlMatch && !this.isValidUriScheme(protocolUrlMatch) || this.urlMatchDoesNotHaveProtocolOrDot(urlMatch, protocolUrlMatch) || this.urlMatchDoesNotHaveAtLeastOneWordChar(urlMatch, protocolUrlMatch) && !this.isValidIpAddress(urlMatch) || this.containsMultipleDots(urlMatch)) {
          return false;
        }
        return true;
      },
      isValidIpAddress: function(uriSchemeMatch) {
        var newRegex = new RegExp(this.hasFullProtocolRegex.source + this.ipRegex.source);
        var uriScheme = uriSchemeMatch.match(newRegex);
        return uriScheme !== null;
      },
      containsMultipleDots: function(urlMatch) {
        var stringBeforeSlash = urlMatch;
        if (this.hasFullProtocolRegex.test(urlMatch)) {
          stringBeforeSlash = urlMatch.split("://")[1];
        }
        return stringBeforeSlash.split("/")[0].indexOf("..") > -1;
      },
      isValidUriScheme: function(uriSchemeMatch) {
        var uriScheme = uriSchemeMatch.match(this.uriSchemeRegex)[0].toLowerCase();
        return uriScheme !== "javascript:" && uriScheme !== "vbscript:";
      },
      urlMatchDoesNotHaveProtocolOrDot: function(urlMatch, protocolUrlMatch) {
        return !!urlMatch && (!protocolUrlMatch || !this.hasFullProtocolRegex.test(protocolUrlMatch)) && urlMatch.indexOf(".") === -1;
      },
      urlMatchDoesNotHaveAtLeastOneWordChar: function(urlMatch, protocolUrlMatch) {
        if (urlMatch && protocolUrlMatch) {
          return !this.hasWordCharAfterProtocolRegex.test(urlMatch);
        } else {
          return false;
        }
      }
    };
    Autolinker2.truncate.TruncateEnd = function(anchorText, truncateLen, ellipsisChars) {
      return Autolinker2.Util.ellipsis(anchorText, truncateLen, ellipsisChars);
    };
    Autolinker2.truncate.TruncateMiddle = function(url, truncateLen, ellipsisChars) {
      if (url.length <= truncateLen) {
        return url;
      }
      var ellipsisLengthBeforeParsing;
      var ellipsisLength;
      if (ellipsisChars == null) {
        ellipsisChars = "&hellip;";
        ellipsisLengthBeforeParsing = 8;
        ellipsisLength = 3;
      } else {
        ellipsisLengthBeforeParsing = ellipsisChars.length;
        ellipsisLength = ellipsisChars.length;
      }
      var availableLength = truncateLen - ellipsisLength;
      var end2 = "";
      if (availableLength > 0) {
        end2 = url.substr(-1 * Math.floor(availableLength / 2));
      }
      return (url.substr(0, Math.ceil(availableLength / 2)) + ellipsisChars + end2).substr(0, availableLength + ellipsisLengthBeforeParsing);
    };
    Autolinker2.truncate.TruncateSmart = function(url, truncateLen, ellipsisChars) {
      var ellipsisLengthBeforeParsing;
      var ellipsisLength;
      if (ellipsisChars == null) {
        ellipsisChars = "&hellip;";
        ellipsisLength = 3;
        ellipsisLengthBeforeParsing = 8;
      } else {
        ellipsisLength = ellipsisChars.length;
        ellipsisLengthBeforeParsing = ellipsisChars.length;
      }
      var parse_url = function(url2) {
        var urlObj2 = {};
        var urlSub = url2;
        var match = urlSub.match(/^([a-z]+):\/\//i);
        if (match) {
          urlObj2.scheme = match[1];
          urlSub = urlSub.substr(match[0].length);
        }
        match = urlSub.match(/^(.*?)(?=(\?|#|\/|$))/i);
        if (match) {
          urlObj2.host = match[1];
          urlSub = urlSub.substr(match[0].length);
        }
        match = urlSub.match(/^\/(.*?)(?=(\?|#|$))/i);
        if (match) {
          urlObj2.path = match[1];
          urlSub = urlSub.substr(match[0].length);
        }
        match = urlSub.match(/^\?(.*?)(?=(#|$))/i);
        if (match) {
          urlObj2.query = match[1];
          urlSub = urlSub.substr(match[0].length);
        }
        match = urlSub.match(/^#(.*?)$/i);
        if (match) {
          urlObj2.fragment = match[1];
        }
        return urlObj2;
      };
      var buildUrl = function(urlObj2) {
        var url2 = "";
        if (urlObj2.scheme && urlObj2.host) {
          url2 += urlObj2.scheme + "://";
        }
        if (urlObj2.host) {
          url2 += urlObj2.host;
        }
        if (urlObj2.path) {
          url2 += "/" + urlObj2.path;
        }
        if (urlObj2.query) {
          url2 += "?" + urlObj2.query;
        }
        if (urlObj2.fragment) {
          url2 += "#" + urlObj2.fragment;
        }
        return url2;
      };
      var buildSegment = function(segment, remainingAvailableLength3) {
        var remainingAvailableLengthHalf = remainingAvailableLength3 / 2, startOffset = Math.ceil(remainingAvailableLengthHalf), endOffset = -1 * Math.floor(remainingAvailableLengthHalf), end3 = "";
        if (endOffset < 0) {
          end3 = segment.substr(endOffset);
        }
        return segment.substr(0, startOffset) + ellipsisChars + end3;
      };
      if (url.length <= truncateLen) {
        return url;
      }
      var availableLength = truncateLen - ellipsisLength;
      var urlObj = parse_url(url);
      if (urlObj.query) {
        var matchQuery = urlObj.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i);
        if (matchQuery) {
          urlObj.query = urlObj.query.substr(0, matchQuery[1].length);
          url = buildUrl(urlObj);
        }
      }
      if (url.length <= truncateLen) {
        return url;
      }
      if (urlObj.host) {
        urlObj.host = urlObj.host.replace(/^www\./, "");
        url = buildUrl(urlObj);
      }
      if (url.length <= truncateLen) {
        return url;
      }
      var str = "";
      if (urlObj.host) {
        str += urlObj.host;
      }
      if (str.length >= availableLength) {
        if (urlObj.host.length == truncateLen) {
          return (urlObj.host.substr(0, truncateLen - ellipsisLength) + ellipsisChars).substr(0, availableLength + ellipsisLengthBeforeParsing);
        }
        return buildSegment(str, availableLength).substr(0, availableLength + ellipsisLengthBeforeParsing);
      }
      var pathAndQuery = "";
      if (urlObj.path) {
        pathAndQuery += "/" + urlObj.path;
      }
      if (urlObj.query) {
        pathAndQuery += "?" + urlObj.query;
      }
      if (pathAndQuery) {
        if ((str + pathAndQuery).length >= availableLength) {
          if ((str + pathAndQuery).length == truncateLen) {
            return (str + pathAndQuery).substr(0, truncateLen);
          }
          var remainingAvailableLength = availableLength - str.length;
          return (str + buildSegment(pathAndQuery, remainingAvailableLength)).substr(0, availableLength + ellipsisLengthBeforeParsing);
        } else {
          str += pathAndQuery;
        }
      }
      if (urlObj.fragment) {
        var fragment = "#" + urlObj.fragment;
        if ((str + fragment).length >= availableLength) {
          if ((str + fragment).length == truncateLen) {
            return (str + fragment).substr(0, truncateLen);
          }
          var remainingAvailableLength2 = availableLength - str.length;
          return (str + buildSegment(fragment, remainingAvailableLength2)).substr(0, availableLength + ellipsisLengthBeforeParsing);
        } else {
          str += fragment;
        }
      }
      if (urlObj.scheme && urlObj.host) {
        var scheme = urlObj.scheme + "://";
        if ((str + scheme).length < availableLength) {
          return (scheme + str).substr(0, truncateLen);
        }
      }
      if (str.length <= truncateLen) {
        return str;
      }
      var end2 = "";
      if (availableLength > 0) {
        end2 = str.substr(-1 * Math.floor(availableLength / 2));
      }
      return (str.substr(0, Math.ceil(availableLength / 2)) + ellipsisChars + end2).substr(0, availableLength + ellipsisLengthBeforeParsing);
    };
    return Autolinker2;
  });
})(Autolinker$1);
var Autolinker = Autolinker$1.exports;
const defaultTokens = {
  bold: { delimiter: "*", tag: "strong" },
  italic: { delimiter: "/", tag: "em" },
  underline: { delimiter: "_", tag: "u" },
  strike: { delimiter: "~", tag: "del" },
  code: { delimiter: "`", tag: "code" },
  sup: { delimiter: "^", tag: "sup" },
  sub: { delimiter: "\xA1", tag: "sub" }
};
const openTag = (tag) => `<${tag}>`;
const closeTag = (tag) => `</${tag}>`;
const encloseTag = (text, tag) => `${openTag(tag)}${text}${closeTag(tag)}`;
const parseToken = (text, stopDelimiter) => {
  let index = 0;
  let content = "";
  while (index < text.length && text[index] !== stopDelimiter) {
    content += text[index];
    index++;
  }
  if (index === text.length) {
    return "";
  } else {
    return content;
  }
};
var msgdown = (text, tokens = defaultTokens) => {
  tokens = Object.assign({}, defaultTokens, tokens);
  let html = "";
  let index = 0;
  const consumeChar = () => {
    html += text[index];
    index++;
  };
  const consumeAll = (textRemaining, delimiter) => {
    html += delimiter + textRemaining;
    index += textRemaining.length;
  };
  const consumeToken = (token) => {
    index++;
    if (text[index] === " ") {
      html += token.delimiter;
      consumeChar();
    } else {
      const textRemaining = text.substr(index);
      const tokenContent = parseToken(textRemaining, token.delimiter);
      if (tokenContent.length === 0) {
        consumeAll(textRemaining, token.delimiter);
      } else {
        html += encloseTag(tokenContent, token.tag);
        index += tokenContent.length + 1;
      }
    }
  };
  while (index < text.length) {
    const charCurrent = text[index];
    if (charCurrent === tokens.bold.delimiter) {
      consumeToken(tokens.bold);
    } else if (charCurrent === tokens.italic.delimiter) {
      consumeToken(tokens.italic);
    } else if (charCurrent === tokens.underline.delimiter) {
      consumeToken(tokens.underline);
    } else if (charCurrent === tokens.strike.delimiter) {
      consumeToken(tokens.strike);
    } else if (charCurrent === tokens.code.delimiter) {
      consumeToken(tokens.code);
    } else if (charCurrent === tokens.sup.delimiter) {
      consumeToken(tokens.sup);
    } else if (charCurrent === tokens.sub.delimiter) {
      consumeToken(tokens.sub);
    } else {
      consumeChar();
    }
  }
  return html;
};
var TextMessage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$i = {
  components: {
    IconBase,
    IconCross,
    IconEdit
  },
  props: {
    message: {
      type: Object,
      required: true
    },
    messageColors: {
      type: Object,
      required: true
    },
    messageStyling: {
      type: Boolean,
      required: true
    },
    showConfirmationDeletion: {
      type: Boolean,
      required: true
    },
    confirmationDeletionMessage: {
      type: String,
      required: true
    }
  },
  computed: {
    messageText() {
      const escaped = escapeGoat.escape(this.message.data.text);
      return Autolinker.link(this.messageStyling ? msgdown(escaped) : escaped, {
        className: "chatLink",
        truncate: { length: 50, location: "smart" }
      });
    },
    me() {
      return this.message.author === "me";
    },
    isEditing() {
      return (store.state.editMessage && store.state.editMessage.id) === this.message.id;
    },
    ...mapState(["showDeletion", "showEdition"])
  },
  methods: {
    edit() {
      store.setState("editMessage", this.message);
    },
    ifelse(cond, funcIf, funcElse) {
      return () => {
        if (funcIf && cond)
          funcIf();
        else if (funcElse)
          funcElse();
      };
    },
    withConfirm(msg, func) {
      return () => {
        if (confirm(msg))
          func();
      };
    }
  }
};
const _hoisted_1$i = ["disabled"];
const _hoisted_2$b = { key: 1 };
const _hoisted_3$9 = ["innerHTML"];
const _hoisted_4$3 = {
  key: 1,
  class: "sc-message--edited"
};
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconEdit = resolveComponent("IconEdit");
  const _component_IconBase = resolveComponent("IconBase");
  const _component_IconCross = resolveComponent("IconCross");
  return openBlock(), createElementBlock("div", {
    class: "sc-message--text",
    style: normalizeStyle($props.messageColors)
  }, [
    createElementVNode("div", {
      class: "sc-message--toolbox",
      style: normalizeStyle({ background: $props.messageColors.backgroundColor })
    }, [
      _ctx.showEdition && $options.me && $props.message.id ? (openBlock(), createElementBlock("button", {
        key: 0,
        disabled: $options.isEditing,
        onClick: _cache[0] || (_cache[0] = (...args) => $options.edit && $options.edit(...args))
      }, [
        createVNode(_component_IconBase, {
          color: $options.isEditing ? "black" : $props.messageColors.color,
          width: "10",
          "icon-name": "edit"
        }, {
          default: withCtx(() => [
            createVNode(_component_IconEdit)
          ]),
          _: 1
        }, 8, ["color"])
      ], 8, _hoisted_1$i)) : createCommentVNode("", true),
      _ctx.showDeletion ? (openBlock(), createElementBlock("div", _hoisted_2$b, [
        $options.me && $props.message.id != null && $props.message.id != void 0 ? (openBlock(), createElementBlock("button", {
          key: 0,
          onClick: _cache[1] || (_cache[1] = ($event) => $options.ifelse(
            $props.showConfirmationDeletion,
            $options.withConfirm($props.confirmationDeletionMessage, () => _ctx.$emit("remove")),
            () => _ctx.$emit("remove")
          )())
        }, [
          createVNode(_component_IconBase, {
            color: $props.messageColors.color,
            width: "10",
            "icon-name": "remove"
          }, {
            default: withCtx(() => [
              createVNode(_component_IconCross)
            ]),
            _: 1
          }, 8, ["color"])
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "text-message-toolbox", {
        message: $props.message,
        me: $options.me
      }, void 0, true)
    ], 4),
    renderSlot(_ctx.$slots, "default", {
      message: $props.message,
      messageText: $options.messageText,
      messageColors: $props.messageColors,
      me: $options.me
    }, () => [
      createElementVNode("p", {
        class: "sc-message--text-content",
        innerHTML: $options.messageText
      }, null, 8, _hoisted_3$9),
      $props.message.data.meta ? (openBlock(), createElementBlock("p", {
        key: 0,
        class: "sc-message--meta",
        style: normalizeStyle({ color: $props.messageColors.color })
      }, toDisplayString($props.message.data.meta), 5)) : createCommentVNode("", true),
      $props.message.isEdited ? (openBlock(), createElementBlock("p", _hoisted_4$3, [
        createVNode(_component_IconBase, {
          width: "10",
          "icon-name": "edited"
        }, {
          default: withCtx(() => [
            createVNode(_component_IconEdit)
          ]),
          _: 1
        }),
        createTextVNode(" edited ")
      ])) : createCommentVNode("", true)
    ], true)
  ], 4);
}
var TextMessage = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i], ["__scopeId", "data-v-784eb559"]]);
var FileMessage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$h = {
  props: {
    data: {
      type: Object,
      required: true
    },
    messageColors: {
      type: Object,
      required: true
    }
  }
};
const _hoisted_1$h = { class: "sc-message--file-icon" };
const _hoisted_2$a = ["src"];
const _hoisted_3$8 = ["href"];
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "sc-message--file",
    style: normalizeStyle($props.messageColors)
  }, [
    createElementVNode("div", _hoisted_1$h, [
      createElementVNode("img", {
        src: $props.data.file.url,
        class: "sc-image"
      }, null, 8, _hoisted_2$a)
    ]),
    createElementVNode("div", {
      class: "sc-message--file-name",
      style: normalizeStyle($props.messageColors)
    }, [
      createElementVNode("a", {
        href: $props.data.file.url ? $props.data.file.url : "#",
        target: "_blank"
      }, toDisplayString($props.data.file.name || ""), 9, _hoisted_3$8)
    ], 4),
    createElementVNode("div", {
      class: "sc-message--file-text",
      style: normalizeStyle($props.messageColors)
    }, [
      createTextVNode(toDisplayString($props.data.text) + " ", 1),
      $props.data.meta ? (openBlock(), createElementBlock("p", {
        key: 0,
        class: "sc-message--meta",
        style: normalizeStyle($props.messageColors)
      }, toDisplayString($props.data.meta), 5)) : createCommentVNode("", true)
    ], 4)
  ], 4);
}
var FileMessage = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h], ["__scopeId", "data-v-1351b099"]]);
var EmojiMessage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$g = {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
const _hoisted_1$g = { class: "sc-message--emoji" };
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$g, toDisplayString($props.data.emoji), 1);
}
var EmojiMessage = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g], ["__scopeId", "data-v-651be057"]]);
var TypingMessage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$f = {
  props: {
    messageColors: {
      type: Object,
      required: true
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-244d06fe"), n = n(), popScopeId(), n);
const _hoisted_1$f = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", null, null, -1));
const _hoisted_2$9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", null, null, -1));
const _hoisted_3$7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", null, null, -1));
const _hoisted_4$2 = [
  _hoisted_1$f,
  _hoisted_2$9,
  _hoisted_3$7
];
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "sc-typing-indicator",
    style: normalizeStyle($props.messageColors)
  }, _hoisted_4$2, 4);
}
var TypingMessage = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__scopeId", "data-v-244d06fe"]]);
var SystemMessage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$e = {
  props: {
    data: {
      type: Object,
      required: true
    },
    messageColors: {
      type: Object,
      required: true
    }
  }
};
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "sc-message--system",
    style: normalizeStyle($props.messageColors)
  }, [
    renderSlot(_ctx.$slots, "default", { message: $props.data }, () => [
      createTextVNode(toDisplayString($props.data.text) + " ", 1),
      $props.data.meta ? (openBlock(), createElementBlock("p", {
        key: 0,
        class: "sc-message--meta",
        style: normalizeStyle({ color: $props.messageColors.color })
      }, toDisplayString($props.data.meta), 5)) : createCommentVNode("", true)
    ], true)
  ], 4);
}
var SystemMessage = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__scopeId", "data-v-0c1d322a"]]);
var chatIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItNDc0OS40OCAtNTAyMCAzNS4wMzYgMzUuMDM2Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDpub25lO30uYntmaWxsOiM0ZThjZmY7fS5je2NsaXAtcGF0aDp1cmwoI2EpO30uZHtmaWxsOiNmZmY7fS5le2ZpbGw6I2VmZjRmOTt9PC9zdHlsZT48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGNsYXNzPSJhIiBkPSJNMC0zOTkuNDc5SDE3LjU1NXYxNy41NTVIMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMzk5LjQ3OSkiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDg4NiAtNTA3NSkiPjxjaXJjbGUgY2xhc3M9ImIiIGN4PSIxNy41MTgiIGN5PSIxNy41MTgiIHI9IjE3LjUxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM2LjUyIDU1KSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0NS4xMyA2NCkiPjxnIGNsYXNzPSJjIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj48cGF0aCBjbGFzcz0iZCIgZD0iTS0zODEuOTI0LTE5MC45NjJhOC43NzgsOC43NzgsMCwwLDAtOC43NzgtOC43NzgsOC43NzgsOC43NzgsMCwwLDAtOC43NzgsOC43NzgsOC43NDUsOC43NDUsMCwwLDAsMi4yNiw1Ljg3OXYxLjQ0MmMwLC44LjQ5MiwxLjQ1NywxLjEsMS40NTdoNS44M2EuODQzLjg0MywwLDAsMCwuMTgzLS4wMiw4Ljc3OCw4Ljc3OCwwLDAsMCw4LjE4NC04Ljc1NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzk5LjQ3OSAxOTkuNzQpIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPjxwYXRoIGNsYXNzPSJlIiBkPSJNLTY4Ljc2My0xOTQuMDc5YTkuMjkyLDkuMjkyLDAsMCwxLDYuMzgtOC44ODhjLS4yNTItLjAyMi0uNTA2LS4wMzMtLjc2My0uMDMzYTguNzc0LDguNzc0LDAsMCwwLTguNzc4LDguNzc4QTkuNTA4LDkuNTA4LDAsMCwwLTY5LjctMTg4LjNjLjAwNSwwLDAsLjAwOSwwLC4wMS0uMzExLjM1Mi0xLjkyNCwyLjg0OS4wMjEsMi44NDloMi4yNWMtMS4yMy0uMDIyLDEuMjYzLTIuMTA3LjI2OS0zLjQ5NGE4LjIyNSw4LjIyNSwwLDAsMS0xLjYtNS4xNDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcxLjkyNCAyMDMpIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==";
var Message_vue_vue_type_style_index_0_lang = "";
const _sfc_main$d = {
  components: {
    TextMessage,
    FileMessage,
    EmojiMessage,
    TypingMessage,
    SystemMessage
  },
  props: {
    message: {
      type: Object,
      required: true
    },
    colors: {
      type: Object,
      required: true
    },
    messageStyling: {
      type: Boolean,
      required: true
    },
    user: {
      type: Object,
      required: true
    },
    showConfirmationDeletion: {
      type: Boolean,
      required: true
    },
    confirmationDeletionMessage: {
      type: String,
      required: true
    }
  },
  computed: {
    authorName() {
      return this.user && this.user.name;
    },
    chatImageUrl() {
      return this.user && this.user.imageUrl || chatIcon;
    },
    messageColors() {
      return this.message.author === "me" ? this.sentColorsStyle : this.receivedColorsStyle;
    },
    receivedColorsStyle() {
      return {
        color: this.colors.receivedMessage.text,
        backgroundColor: this.colors.receivedMessage.bg
      };
    },
    sentColorsStyle() {
      return {
        color: this.colors.sentMessage.text,
        backgroundColor: this.colors.sentMessage.bg
      };
    }
  }
};
const _hoisted_1$e = ["id"];
const _hoisted_2$8 = ["title"];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TextMessage = resolveComponent("TextMessage");
  const _component_EmojiMessage = resolveComponent("EmojiMessage");
  const _component_FileMessage = resolveComponent("FileMessage");
  const _component_TypingMessage = resolveComponent("TypingMessage");
  const _component_SystemMessage = resolveComponent("SystemMessage");
  const _directive_tooltip = resolveDirective("tooltip");
  return openBlock(), createElementBlock("div", {
    id: $props.message.id,
    class: "sc-message"
  }, [
    createElementVNode("div", {
      class: normalizeClass(["sc-message--content", {
        sent: $props.message.author === "me",
        received: $props.message.author !== "me" && $props.message.type !== "system",
        system: $props.message.type === "system"
      }])
    }, [
      renderSlot(_ctx.$slots, "user-avatar", {
        message: $props.message,
        user: $props.user
      }, () => [
        $props.message.type !== "system" && $options.authorName && $options.authorName !== "me" ? withDirectives((openBlock(), createElementBlock("div", {
          key: 0,
          title: $options.authorName,
          class: "sc-message--avatar",
          style: normalizeStyle({
            backgroundImage: `url(${$options.chatImageUrl})`
          })
        }, null, 12, _hoisted_2$8)), [
          [_directive_tooltip, $options.authorName]
        ]) : createCommentVNode("", true)
      ]),
      $props.message.type === "text" ? (openBlock(), createBlock(_component_TextMessage, {
        key: 0,
        message: $props.message,
        "message-colors": $options.messageColors,
        "message-styling": $props.messageStyling,
        "show-confirmation-deletion": $props.showConfirmationDeletion,
        "confirmation-deletion-message": $props.confirmationDeletionMessage,
        onRemove: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("remove"))
      }, {
        default: withCtx((scopedProps) => [
          renderSlot(_ctx.$slots, "text-message-body", {
            message: scopedProps.message,
            messageText: scopedProps.messageText,
            messageColors: scopedProps.messageColors,
            me: scopedProps.me
          })
        ]),
        "text-message-toolbox": withCtx((scopedProps) => [
          renderSlot(_ctx.$slots, "text-message-toolbox", {
            message: scopedProps.message,
            me: scopedProps.me
          })
        ]),
        _: 3
      }, 8, ["message", "message-colors", "message-styling", "show-confirmation-deletion", "confirmation-deletion-message"])) : $props.message.type === "emoji" ? (openBlock(), createBlock(_component_EmojiMessage, {
        key: 1,
        data: $props.message.data
      }, null, 8, ["data"])) : $props.message.type === "file" ? (openBlock(), createBlock(_component_FileMessage, {
        key: 2,
        data: $props.message.data,
        "message-colors": $options.messageColors
      }, null, 8, ["data", "message-colors"])) : $props.message.type === "typing" ? (openBlock(), createBlock(_component_TypingMessage, {
        key: 3,
        "message-colors": $options.messageColors
      }, null, 8, ["message-colors"])) : $props.message.type === "system" ? (openBlock(), createBlock(_component_SystemMessage, {
        key: 4,
        data: $props.message.data,
        "message-colors": $options.messageColors
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "system-message-body", {
            message: $props.message.data
          })
        ]),
        _: 3
      }, 8, ["data", "message-colors"])) : createCommentVNode("", true)
    ], 2)
  ], 8, _hoisted_1$e);
}
var Message = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
var MessageList_vue_vue_type_style_index_0_scoped_true_lang = "";
let resizeObserver;
const _sfc_main$c = {
  components: {
    Message
  },
  props: {
    participants: {
      type: Array,
      required: true
    },
    messages: {
      type: Array,
      required: true
    },
    showTypingIndicator: {
      type: String,
      required: true
    },
    colors: {
      type: Object,
      required: true
    },
    alwaysScrollToBottom: {
      type: Boolean,
      required: true
    },
    messageStyling: {
      type: Boolean,
      required: true
    },
    showConfirmationDeletion: {
      type: Boolean,
      required: true
    },
    confirmationDeletionMessage: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      initialScrollTop: null
    };
  },
  computed: {
    defaultChatIcon() {
      return chatIcon;
    }
  },
  mounted() {
    this.watchScrollList();
    this.$nextTick(this._scrollDown());
  },
  beforeUnmount() {
    resizeObserver.unobserve(this.$refs.scrollList);
  },
  updated() {
    if (this.shouldScrollToBottom())
      this.$nextTick(this._scrollDown());
  },
  methods: {
    _scrollDown() {
      this.$refs.scrollList.scrollTop = this.$refs.scrollList.scrollHeight;
      !this.initialScrollTop ? this.initialScrollTop = this.$refs.scrollList.scrollTop : "";
    },
    handleScroll(e) {
      if (e.target.scrollTop === 0) {
        this.$emit("scrollToTop");
      }
    },
    shouldScrollToBottom() {
      const scrollTop = this.$refs.scrollList.scrollTop;
      const scrollable = scrollTop > this.$refs.scrollList.scrollHeight - 600;
      return this.alwaysScrollToBottom || scrollable;
    },
    profile(author) {
      const profile = this.participants.find((profile2) => profile2.id === author);
      return profile || { imageUrl: "", name: "" };
    },
    watchScrollList() {
      resizeObserver = new ResizeObserver(() => {
        const value = this.$refs.scrollList.scrollHeight - this.$refs.scrollList.scrollTop;
        if (this.initialScrollTop === this.$refs.scrollList.scrollTop || this.$refs.scrollList.scrollTop > this.initialScrollTop && value > this.$refs.scrollList.offsetHeight) {
          this._scrollDown();
        }
      });
      resizeObserver.observe(this.$refs.scrollList);
    }
  }
};
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Message = resolveComponent("Message");
  return openBlock(), createElementBlock("div", {
    ref: "scrollList",
    class: "sc-message-list",
    style: normalizeStyle({ backgroundColor: $props.colors.messageList.bg }),
    onScroll: _cache[0] || (_cache[0] = (...args) => $options.handleScroll && $options.handleScroll(...args))
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.messages, (message, idx) => {
      return openBlock(), createBlock(_component_Message, {
        key: idx,
        message,
        user: $options.profile(message.author),
        colors: $props.colors,
        "message-styling": $props.messageStyling,
        "show-confirmation-deletion": $props.showConfirmationDeletion,
        "confirmation-deletion-message": $props.confirmationDeletionMessage,
        onRemove: ($event) => _ctx.$emit("remove", message)
      }, {
        "user-avatar": withCtx((scopedProps) => [
          renderSlot(_ctx.$slots, "user-avatar", {
            user: scopedProps.user,
            message: scopedProps.message
          }, void 0, true)
        ]),
        "text-message-body": withCtx((scopedProps) => [
          renderSlot(_ctx.$slots, "text-message-body", {
            message: scopedProps.message,
            messageText: scopedProps.messageText,
            messageColors: scopedProps.messageColors,
            me: scopedProps.me
          }, void 0, true)
        ]),
        "system-message-body": withCtx((scopedProps) => [
          renderSlot(_ctx.$slots, "system-message-body", {
            message: scopedProps.message
          }, void 0, true)
        ]),
        "text-message-toolbox": withCtx((scopedProps) => [
          renderSlot(_ctx.$slots, "text-message-toolbox", {
            message: scopedProps.message,
            me: scopedProps.me
          }, void 0, true)
        ]),
        _: 2
      }, 1032, ["message", "user", "colors", "message-styling", "show-confirmation-deletion", "confirmation-deletion-message", "onRemove"]);
    }), 128)),
    withDirectives(createVNode(_component_Message, {
      message: { author: $props.showTypingIndicator, type: "typing" },
      user: $options.profile($props.showTypingIndicator),
      colors: $props.colors,
      "message-styling": $props.messageStyling,
      "show-confirmation-deletion": $props.showConfirmationDeletion,
      "confirmation-deletion-message": $props.confirmationDeletionMessage
    }, null, 8, ["message", "user", "colors", "message-styling", "show-confirmation-deletion", "confirmation-deletion-message"]), [
      [vShow, $props.showTypingIndicator !== ""]
    ])
  ], 36);
}
var MessageList = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__scopeId", "data-v-68b7c108"]]);
var emoji = { exports: {} };
(function(module, exports) {
  (function() {
    var root = this;
    var previous_emoji = root.EmojiConvertor;
    var emoji2 = function() {
      var self2 = this;
      self2.img_set = "apple";
      self2.img_sets = {
        "apple": { "path": "/emoji-data/img-apple-64/", "sheet": "/emoji-data/sheet_apple_64.png", "sheet_size": 64, "mask": 1 },
        "google": { "path": "/emoji-data/img-google-64/", "sheet": "/emoji-data/sheet_google_64.png", "sheet_size": 64, "mask": 2 },
        "twitter": { "path": "/emoji-data/img-twitter-64/", "sheet": "/emoji-data/sheet_twitter_64.png", "sheet_size": 64, "mask": 4 },
        "facebook": { "path": "/emoji-data/img-facebook-64/", "sheet": "/emoji-data/sheet_facebook_64.png", "sheet_size": 64, "mask": 8 }
      };
      self2.use_css_imgs = false;
      self2.colons_mode = false;
      self2.text_mode = false;
      self2.include_title = false;
      self2.include_text = false;
      self2.allow_native = true;
      self2.wrap_native = false;
      self2.use_sheet = false;
      self2.avoid_ms_emoji = true;
      self2.allow_caps = false;
      self2.img_suffix = "";
      self2.inits = {};
      self2.map = {};
      self2.init_env();
      return self2;
    };
    emoji2.prototype.noConflict = function() {
      root.EmojiConvertor = previous_emoji;
      return emoji2;
    };
    emoji2.prototype.replace_emoticons = function(str) {
      var self2 = this;
      var colonized = self2.replace_emoticons_with_colons(str);
      return self2.replace_colons(colonized);
    };
    emoji2.prototype.replace_emoticons_with_colons = function(str) {
      var self2 = this;
      self2.init_emoticons();
      var _prev_offset = 0;
      var emoticons_with_parens = [];
      var str_replaced = str.replace(self2.rx_emoticons, function(m, $1, emoticon, offset2) {
        var prev_offset = _prev_offset;
        _prev_offset = offset2 + m.length;
        var has_open_paren = emoticon.indexOf("(") !== -1;
        var has_close_paren = emoticon.indexOf(")") !== -1;
        if ((has_open_paren || has_close_paren) && emoticons_with_parens.indexOf(emoticon) == -1) {
          emoticons_with_parens.push(emoticon);
        }
        if (has_close_paren && !has_open_paren) {
          var piece = str.substring(prev_offset, offset2);
          if (piece.indexOf("(") !== -1 && piece.indexOf(")") === -1)
            return m;
        }
        if (m === "\n8)") {
          var before_match = str.substring(0, offset2);
          if (/\n?(6\)|7\))/.test(before_match))
            return m;
        }
        var val = self2.data[self2.map.emoticons[emoticon]][3][0];
        return val ? $1 + ":" + val + ":" : m;
      });
      if (emoticons_with_parens.length) {
        var escaped_emoticons = emoticons_with_parens.map(self2.escape_rx);
        var parenthetical_rx = new RegExp("(\\(.+)(" + escaped_emoticons.join("|") + ")(.+\\))", "g");
        str_replaced = str_replaced.replace(parenthetical_rx, function(m, $1, emoticon, $2) {
          var val = self2.data[self2.map.emoticons[emoticon]][3][0];
          return val ? $1 + ":" + val + ":" + $2 : m;
        });
      }
      return str_replaced;
    };
    emoji2.prototype.replace_colons = function(str) {
      var self2 = this;
      self2.init_colons();
      return str.replace(self2.rx_colons, function(m) {
        var idx = m.substr(1, m.length - 2);
        if (self2.allow_caps)
          idx = idx.toLowerCase();
        if (idx.indexOf("::skin-tone-") > -1) {
          var skin_tone = idx.substr(-1, 1);
          var skin_idx = "skin-tone-" + skin_tone;
          var skin_val = self2.map.colons[skin_idx];
          idx = idx.substr(0, idx.length - 13);
          var val = self2.map.colons[idx];
          if (val) {
            return self2.replacement(val, idx, ":", {
              "idx": skin_val,
              "actual": skin_idx,
              "wrapper": ":"
            });
          } else {
            return ":" + idx + ":" + self2.replacement(skin_val, skin_idx, ":");
          }
        } else {
          var val = self2.map.colons[idx];
          return val ? self2.replacement(val, idx, ":") : m;
        }
      });
    };
    emoji2.prototype.replace_unified = function(str) {
      var self2 = this;
      self2.init_unified();
      return str.replace(self2.rx_unified, function(m, p1, p2) {
        var val = self2.map.unified[p1];
        if (val) {
          var idx = null;
          if (p2 == "\u{1F3FB}")
            idx = "1f3fb";
          if (p2 == "\u{1F3FC}")
            idx = "1f3fc";
          if (p2 == "\u{1F3FD}")
            idx = "1f3fd";
          if (p2 == "\u{1F3FE}")
            idx = "1f3fe";
          if (p2 == "\u{1F3FF}")
            idx = "1f3ff";
          if (idx) {
            return self2.replacement(val, null, null, {
              idx,
              actual: p2,
              wrapper: ""
            });
          }
          return self2.replacement(val);
        }
        val = self2.map.unified_vars[p1];
        if (val) {
          return self2.replacement(val[0], null, null, {
            "idx": val[1],
            "actual": "",
            "wrapper": ""
          });
        }
        return m;
      });
    };
    emoji2.prototype.addAliases = function(map) {
      var self2 = this;
      self2.init_colons();
      for (var i in map) {
        self2.map.colons[i] = map[i];
      }
    };
    emoji2.prototype.removeAliases = function(list) {
      var self2 = this;
      for (var i = 0; i < list.length; i++) {
        var alias = list[i];
        delete self2.map.colons[alias];
        finder_block: {
          for (var j in self2.data) {
            for (var k = 0; k < self2.data[j][3].length; k++) {
              if (alias == self2.data[j][3][k]) {
                self2.map.colons[alias] = j;
                break finder_block;
              }
            }
          }
        }
      }
    };
    emoji2.prototype.replacement = function(idx, actual, wrapper, variation, is_extra) {
      var self2 = this;
      var extra = "";
      var var_idx = null;
      if (typeof variation === "object") {
        extra = self2.replacement(variation.idx, variation.actual, variation.wrapper, void 0, true);
        var_idx = variation.idx;
      }
      wrapper = wrapper || "";
      if (self2.colons_mode)
        return ":" + self2.data[idx][3][0] + ":" + extra;
      var text_name = actual ? wrapper + actual + wrapper : self2.data[idx][8] || wrapper + self2.data[idx][3][0] + wrapper;
      if (self2.text_mode)
        return text_name + extra;
      var img = self2.find_image(idx, var_idx);
      self2.init_env();
      if (self2.replace_mode == "softbank" && self2.allow_native && self2.data[idx][1])
        return self2.format_native(self2.data[idx][1] + extra, !is_extra);
      if (self2.replace_mode == "google" && self2.allow_native && self2.data[idx][2])
        return self2.format_native(self2.data[idx][2] + extra, !is_extra);
      if (img.is_var) {
        extra = "";
      }
      if (self2.replace_mode == "unified" && self2.allow_native)
        return self2.format_native(img.unified + extra, !is_extra);
      var title = self2.include_title ? ' title="' + (actual || self2.data[idx][3][0]) + '"' : "";
      var text = self2.include_text ? wrapper + (actual || self2.data[idx][3][0]) + wrapper : "";
      if (self2.data[idx][7]) {
        img.path = self2.data[idx][7];
        img.px = null;
        img.py = null;
        img.is_var = false;
      }
      if (img.is_var && self2.include_text && variation && variation.actual && variation.wrapper) {
        text += variation.wrapper + variation.actual + variation.wrapper;
      }
      if (self2.replace_mode == "css") {
        if (self2.use_sheet && img.px != null && img.py != null) {
          var sheet_x = 100 * img.px / (self2.sheet_size - 1);
          var sheet_y = 100 * img.py / (self2.sheet_size - 1);
          var sheet_sz = 100 * self2.sheet_size;
          var style = "background: url(" + img.sheet + ");background-position:" + sheet_x + "% " + sheet_y + "%;background-size:" + sheet_sz + "% " + sheet_sz + "%";
          return '<span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="' + style + '"' + title + ' data-codepoints="' + img.full_idx + '">' + text + "</span></span>" + extra;
        } else if (self2.use_css_imgs) {
          return '<span class="emoji emoji-' + idx + '"' + title + ' data-codepoints="' + img.full_idx + '">' + text + "</span>" + extra;
        } else {
          return '<span class="emoji emoji-sizer" style="background-image:url(' + img.path + ')"' + title + ' data-codepoints="' + img.full_idx + '">' + text + "</span>" + extra;
        }
      }
      return '<img src="' + img.path + '" class="emoji" data-codepoints="' + img.full_idx + '" ' + title + "/>" + extra;
    };
    emoji2.prototype.format_native = function(native, allow_wrap) {
      var self2 = this;
      if (self2.wrap_native && allow_wrap) {
        return '<span class="emoji-native">' + native + "</span>";
      }
      return native;
    };
    emoji2.prototype.find_image = function(idx, var_idx) {
      var self2 = this;
      var out = {
        "path": "",
        "sheet": "",
        "sheet_size": 0,
        "px": self2.data[idx][4],
        "py": self2.data[idx][5],
        "full_idx": idx,
        "is_var": false,
        "unified": self2.data[idx][0][0]
      };
      var use_mask = self2.data[idx][6];
      if (var_idx && self2.variations_data[idx] && self2.variations_data[idx][var_idx]) {
        var var_data = self2.variations_data[idx][var_idx];
        out.px = var_data[1];
        out.py = var_data[2];
        out.full_idx = var_data[0];
        out.is_var = true;
        out.unified = var_data[4][0];
        use_mask = var_data[3];
      }
      var try_order = [self2.img_set, "apple", "google", "twitter", "facebook", "messenger"];
      for (var j = 0; j < try_order.length; j++) {
        if (!self2.img_sets[try_order[j]]) {
          throw Error("Invalid value for img_set");
        }
        if (use_mask & self2.img_sets[try_order[j]].mask) {
          out.path = self2.img_sets[try_order[j]].path + out.full_idx + ".png" + self2.img_suffix;
          out.sheet = self2.img_sets[self2.img_set].sheet;
          out.sheet_size = self2.img_sets[self2.img_set].sheet_size;
          return out;
        }
        if (self2.obsoletes_data[out.full_idx]) {
          var ob_data = self2.obsoletes_data[out.full_idx];
          if (ob_data[3] & self2.img_sets[try_order[j]].mask) {
            out.path = self2.img_sets[try_order[j]].path + ob_data[0] + ".png" + self2.img_suffix;
            out.sheet = self2.img_sets[try_order[j]].sheet;
            out.sheet_size = self2.img_sets[try_order[j]].sheet_size;
            out.px = ob_data[1];
            out.py = ob_data[2];
            return out;
          }
        }
      }
      return out;
    };
    emoji2.prototype.init_emoticons = function() {
      var self2 = this;
      if (self2.inits.emoticons)
        return;
      self2.init_colons();
      self2.inits.emoticons = 1;
      var a = [];
      self2.map.emoticons = {};
      for (var i in self2.emoticons_data) {
        var emoticon = i.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
        if (!self2.map.colons[self2.emoticons_data[i]])
          continue;
        self2.map.emoticons[emoticon] = self2.map.colons[self2.emoticons_data[i]];
        a.push(self2.escape_rx(emoticon));
      }
      self2.rx_emoticons = new RegExp("(^|\\s)(" + a.join("|") + ")(?=$|[\\s|\\?\\.,!])", "g");
    };
    emoji2.prototype.init_colons = function() {
      var self2 = this;
      if (self2.inits.colons)
        return;
      self2.inits.colons = 1;
      self2.rx_colons = new RegExp(":[a-zA-Z0-9-_+]+:(:skin-tone-[2-6]:)?", "g");
      self2.map.colons = {};
      for (var i in self2.data) {
        for (var j = 0; j < self2.data[i][3].length; j++) {
          self2.map.colons[self2.data[i][3][j]] = i;
        }
      }
    };
    emoji2.prototype.init_unified = function() {
      var self2 = this;
      if (self2.inits.unified)
        return;
      self2.inits.unified = 1;
      var a = [];
      self2.map.unified = {};
      self2.map.unified_vars = {};
      for (var i in self2.data) {
        for (var j = 0; j < self2.data[i][0].length; j++) {
          a.push(self2.data[i][0][j].replace("*", "\\*"));
          self2.map.unified[self2.data[i][0][j]] = i;
        }
      }
      for (var i in self2.variations_data) {
        if (self2.variations_data[i]["1f3fb"]) {
          if (self2.variations_data[i]["1f3fb"][0] == i + "-1f3fb")
            continue;
        }
        for (var k in self2.variations_data[i]) {
          for (var j = 0; j < self2.variations_data[i][k][4].length; j++) {
            a.push(self2.variations_data[i][k][4][j].replace("*", "\\*"));
            self2.map.unified_vars[self2.variations_data[i][k][4][j]] = [i, k];
          }
        }
      }
      a = a.sort(function(a2, b) {
        return b.length - a2.length;
      });
      self2.rx_unified = new RegExp("(" + a.join("|") + ")(\uD83C[\uDFFB-\uDFFF])?", "g");
    };
    emoji2.prototype.init_env = function() {
      var self2 = this;
      if (self2.inits.env)
        return;
      self2.inits.env = 1;
      self2.replace_mode = "img";
      var supports_css = false;
      if (typeof navigator !== "undefined") {
        var ua = navigator.userAgent;
        if (typeof window !== "undefined" && window.getComputedStyle) {
          try {
            var st = window.getComputedStyle(document.body);
            if (st["background-size"] || st["backgroundSize"]) {
              supports_css = true;
            }
          } catch (e) {
            if (ua.match(/Firefox/i)) {
              supports_css = true;
            }
          }
        }
        if (navigator.product.match(/ReactNative/i)) {
          self2.replace_mode = "unified";
          return;
        }
        if (ua.match(/(iPhone|iPod|iPad|iPhone\s+Simulator)/i)) {
          if (ua.match(/OS\s+[12345]/i)) {
            self2.replace_mode = "softbank";
            return;
          }
          if (ua.match(/OS\s+[6789]/i)) {
            self2.replace_mode = "unified";
            return;
          }
        }
        if (ua.match(/Mac OS X (10[._ ](?:[789]|1)|11[._ ]\d)/i)) {
          self2.replace_mode = "unified";
          return;
        }
        if (!self2.avoid_ms_emoji) {
          if (ua.match(/Windows NT 6.[1-9]/i) || ua.match(/Windows NT 10.[0-9]/i)) {
            if (!ua.match(/Chrome/i) && !ua.match(/MSIE 8/i)) {
              self2.replace_mode = "unified";
              return;
            }
          }
        }
      }
      if (supports_css) {
        self2.replace_mode = "css";
        return;
      }
    };
    emoji2.prototype.escape_rx = function(text) {
      return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    };
    emoji2.prototype.sheet_size = 61;
    emoji2.prototype.data = {
      "0023-fe0f-20e3": [["#\uFE0F\u20E3", "#\u20E3"], "\uE210", "\u{FE82C}", ["hash"], 0, 0, 7, 0],
      "002a-fe0f-20e3": [["*\uFE0F\u20E3", "*\u20E3"], "", "", ["keycap_star"], 0, 1, 7, 0],
      "0030-fe0f-20e3": [["0\uFE0F\u20E3", "0\u20E3"], "\uE225", "\u{FE837}", ["zero"], 0, 2, 7, 0],
      "0031-fe0f-20e3": [["1\uFE0F\u20E3", "1\u20E3"], "\uE21C", "\u{FE82E}", ["one"], 0, 3, 7, 0],
      "0032-fe0f-20e3": [["2\uFE0F\u20E3", "2\u20E3"], "\uE21D", "\u{FE82F}", ["two"], 0, 4, 7, 0],
      "0033-fe0f-20e3": [["3\uFE0F\u20E3", "3\u20E3"], "\uE21E", "\u{FE830}", ["three"], 0, 5, 7, 0],
      "0034-fe0f-20e3": [["4\uFE0F\u20E3", "4\u20E3"], "\uE21F", "\u{FE831}", ["four"], 0, 6, 7, 0],
      "0035-fe0f-20e3": [["5\uFE0F\u20E3", "5\u20E3"], "\uE220", "\u{FE832}", ["five"], 0, 7, 7, 0],
      "0036-fe0f-20e3": [["6\uFE0F\u20E3", "6\u20E3"], "\uE221", "\u{FE833}", ["six"], 0, 8, 7, 0],
      "0037-fe0f-20e3": [["7\uFE0F\u20E3", "7\u20E3"], "\uE222", "\u{FE834}", ["seven"], 0, 9, 7, 0],
      "0038-fe0f-20e3": [["8\uFE0F\u20E3", "8\u20E3"], "\uE223", "\u{FE835}", ["eight"], 0, 10, 7, 0],
      "0039-fe0f-20e3": [["9\uFE0F\u20E3", "9\u20E3"], "\uE224", "\u{FE836}", ["nine"], 0, 11, 7, 0],
      "00a9-fe0f": [["\xA9\uFE0F", "\xA9"], "\uE24E", "\u{FEB29}", ["copyright"], 0, 12, 7, 0],
      "00ae-fe0f": [["\xAE\uFE0F", "\xAE"], "\uE24F", "\u{FEB2D}", ["registered"], 0, 13, 7, 0],
      "1f004": [["\u{1F004}"], "\uE12D", "\u{FE80B}", ["mahjong"], 0, 14, 15, 0],
      "1f0cf": [["\u{1F0CF}"], "", "\u{FE812}", ["black_joker"], 0, 15, 15, 0],
      "1f170-fe0f": [["\u{1F170}\uFE0F", "\u{1F170}"], "\uE532", "\u{FE50B}", ["a"], 0, 16, 15, 0],
      "1f171-fe0f": [["\u{1F171}\uFE0F", "\u{1F171}"], "\uE533", "\u{FE50C}", ["b"], 0, 17, 15, 0],
      "1f17e-fe0f": [["\u{1F17E}\uFE0F", "\u{1F17E}"], "\uE535", "\u{FE50E}", ["o2"], 0, 18, 15, 0],
      "1f17f-fe0f": [["\u{1F17F}\uFE0F", "\u{1F17F}"], "\uE14F", "\u{FE7F6}", ["parking"], 0, 19, 15, 0],
      "1f18e": [["\u{1F18E}"], "\uE534", "\u{FE50D}", ["ab"], 0, 20, 15, 0],
      "1f191": [["\u{1F191}"], "", "\u{FEB84}", ["cl"], 0, 21, 15, 0],
      "1f192": [["\u{1F192}"], "\uE214", "\u{FEB38}", ["cool"], 0, 22, 15, 0],
      "1f193": [["\u{1F193}"], "", "\u{FEB21}", ["free"], 0, 23, 15, 0],
      "1f194": [["\u{1F194}"], "\uE229", "\u{FEB81}", ["id"], 0, 24, 15, 0],
      "1f195": [["\u{1F195}"], "\uE212", "\u{FEB36}", ["new"], 0, 25, 15, 0],
      "1f196": [["\u{1F196}"], "", "\u{FEB28}", ["ng"], 0, 26, 15, 0],
      "1f197": [["\u{1F197}"], "\uE24D", "\u{FEB27}", ["ok"], 0, 27, 15, 0],
      "1f198": [["\u{1F198}"], "", "\u{FEB4F}", ["sos"], 0, 28, 15, 0],
      "1f199": [["\u{1F199}"], "\uE213", "\u{FEB37}", ["up"], 0, 29, 15, 0],
      "1f19a": [["\u{1F19A}"], "\uE12E", "\u{FEB32}", ["vs"], 0, 30, 15, 0],
      "1f1e6-1f1e8": [["\u{1F1E6}\u{1F1E8}"], "", "", ["flag-ac"], 0, 31, 15, 0],
      "1f1e6-1f1e9": [["\u{1F1E6}\u{1F1E9}"], "", "", ["flag-ad"], 0, 32, 15, 0],
      "1f1e6-1f1ea": [["\u{1F1E6}\u{1F1EA}"], "", "", ["flag-ae"], 0, 33, 15, 0],
      "1f1e6-1f1eb": [["\u{1F1E6}\u{1F1EB}"], "", "", ["flag-af"], 0, 34, 15, 0],
      "1f1e6-1f1ec": [["\u{1F1E6}\u{1F1EC}"], "", "", ["flag-ag"], 0, 35, 15, 0],
      "1f1e6-1f1ee": [["\u{1F1E6}\u{1F1EE}"], "", "", ["flag-ai"], 0, 36, 15, 0],
      "1f1e6-1f1f1": [["\u{1F1E6}\u{1F1F1}"], "", "", ["flag-al"], 0, 37, 15, 0],
      "1f1e6-1f1f2": [["\u{1F1E6}\u{1F1F2}"], "", "", ["flag-am"], 0, 38, 15, 0],
      "1f1e6-1f1f4": [["\u{1F1E6}\u{1F1F4}"], "", "", ["flag-ao"], 0, 39, 15, 0],
      "1f1e6-1f1f6": [["\u{1F1E6}\u{1F1F6}"], "", "", ["flag-aq"], 0, 40, 15, 0],
      "1f1e6-1f1f7": [["\u{1F1E6}\u{1F1F7}"], "", "", ["flag-ar"], 0, 41, 15, 0],
      "1f1e6-1f1f8": [["\u{1F1E6}\u{1F1F8}"], "", "", ["flag-as"], 0, 42, 15, 0],
      "1f1e6-1f1f9": [["\u{1F1E6}\u{1F1F9}"], "", "", ["flag-at"], 0, 43, 15, 0],
      "1f1e6-1f1fa": [["\u{1F1E6}\u{1F1FA}"], "", "", ["flag-au"], 0, 44, 15, 0],
      "1f1e6-1f1fc": [["\u{1F1E6}\u{1F1FC}"], "", "", ["flag-aw"], 0, 45, 15, 0],
      "1f1e6-1f1fd": [["\u{1F1E6}\u{1F1FD}"], "", "", ["flag-ax"], 0, 46, 15, 0],
      "1f1e6-1f1ff": [["\u{1F1E6}\u{1F1FF}"], "", "", ["flag-az"], 0, 47, 15, 0],
      "1f1e7-1f1e6": [["\u{1F1E7}\u{1F1E6}"], "", "", ["flag-ba"], 0, 48, 15, 0],
      "1f1e7-1f1e7": [["\u{1F1E7}\u{1F1E7}"], "", "", ["flag-bb"], 0, 49, 15, 0],
      "1f1e7-1f1e9": [["\u{1F1E7}\u{1F1E9}"], "", "", ["flag-bd"], 0, 50, 15, 0],
      "1f1e7-1f1ea": [["\u{1F1E7}\u{1F1EA}"], "", "", ["flag-be"], 0, 51, 15, 0],
      "1f1e7-1f1eb": [["\u{1F1E7}\u{1F1EB}"], "", "", ["flag-bf"], 0, 52, 15, 0],
      "1f1e7-1f1ec": [["\u{1F1E7}\u{1F1EC}"], "", "", ["flag-bg"], 0, 53, 15, 0],
      "1f1e7-1f1ed": [["\u{1F1E7}\u{1F1ED}"], "", "", ["flag-bh"], 0, 54, 15, 0],
      "1f1e7-1f1ee": [["\u{1F1E7}\u{1F1EE}"], "", "", ["flag-bi"], 0, 55, 15, 0],
      "1f1e7-1f1ef": [["\u{1F1E7}\u{1F1EF}"], "", "", ["flag-bj"], 0, 56, 15, 0],
      "1f1e7-1f1f1": [["\u{1F1E7}\u{1F1F1}"], "", "", ["flag-bl"], 0, 57, 15, 0],
      "1f1e7-1f1f2": [["\u{1F1E7}\u{1F1F2}"], "", "", ["flag-bm"], 0, 58, 15, 0],
      "1f1e7-1f1f3": [["\u{1F1E7}\u{1F1F3}"], "", "", ["flag-bn"], 0, 59, 15, 0],
      "1f1e7-1f1f4": [["\u{1F1E7}\u{1F1F4}"], "", "", ["flag-bo"], 0, 60, 15, 0],
      "1f1e7-1f1f6": [["\u{1F1E7}\u{1F1F6}"], "", "", ["flag-bq"], 1, 0, 15, 0],
      "1f1e7-1f1f7": [["\u{1F1E7}\u{1F1F7}"], "", "", ["flag-br"], 1, 1, 15, 0],
      "1f1e7-1f1f8": [["\u{1F1E7}\u{1F1F8}"], "", "", ["flag-bs"], 1, 2, 15, 0],
      "1f1e7-1f1f9": [["\u{1F1E7}\u{1F1F9}"], "", "", ["flag-bt"], 1, 3, 15, 0],
      "1f1e7-1f1fb": [["\u{1F1E7}\u{1F1FB}"], "", "", ["flag-bv"], 1, 4, 15, 0],
      "1f1e7-1f1fc": [["\u{1F1E7}\u{1F1FC}"], "", "", ["flag-bw"], 1, 5, 15, 0],
      "1f1e7-1f1fe": [["\u{1F1E7}\u{1F1FE}"], "", "", ["flag-by"], 1, 6, 15, 0],
      "1f1e7-1f1ff": [["\u{1F1E7}\u{1F1FF}"], "", "", ["flag-bz"], 1, 7, 15, 0],
      "1f1e8-1f1e6": [["\u{1F1E8}\u{1F1E6}"], "", "", ["flag-ca"], 1, 8, 15, 0],
      "1f1e8-1f1e8": [["\u{1F1E8}\u{1F1E8}"], "", "", ["flag-cc"], 1, 9, 15, 0],
      "1f1e8-1f1e9": [["\u{1F1E8}\u{1F1E9}"], "", "", ["flag-cd"], 1, 10, 15, 0],
      "1f1e8-1f1eb": [["\u{1F1E8}\u{1F1EB}"], "", "", ["flag-cf"], 1, 11, 15, 0],
      "1f1e8-1f1ec": [["\u{1F1E8}\u{1F1EC}"], "", "", ["flag-cg"], 1, 12, 15, 0],
      "1f1e8-1f1ed": [["\u{1F1E8}\u{1F1ED}"], "", "", ["flag-ch"], 1, 13, 15, 0],
      "1f1e8-1f1ee": [["\u{1F1E8}\u{1F1EE}"], "", "", ["flag-ci"], 1, 14, 15, 0],
      "1f1e8-1f1f0": [["\u{1F1E8}\u{1F1F0}"], "", "", ["flag-ck"], 1, 15, 15, 0],
      "1f1e8-1f1f1": [["\u{1F1E8}\u{1F1F1}"], "", "", ["flag-cl"], 1, 16, 15, 0],
      "1f1e8-1f1f2": [["\u{1F1E8}\u{1F1F2}"], "", "", ["flag-cm"], 1, 17, 15, 0],
      "1f1e8-1f1f3": [["\u{1F1E8}\u{1F1F3}"], "\uE513", "\u{FE4ED}", ["cn", "flag-cn"], 1, 18, 15, 0],
      "1f1e8-1f1f4": [["\u{1F1E8}\u{1F1F4}"], "", "", ["flag-co"], 1, 19, 15, 0],
      "1f1e8-1f1f5": [["\u{1F1E8}\u{1F1F5}"], "", "", ["flag-cp"], 1, 20, 15, 0],
      "1f1e8-1f1f7": [["\u{1F1E8}\u{1F1F7}"], "", "", ["flag-cr"], 1, 21, 15, 0],
      "1f1e8-1f1fa": [["\u{1F1E8}\u{1F1FA}"], "", "", ["flag-cu"], 1, 22, 15, 0],
      "1f1e8-1f1fb": [["\u{1F1E8}\u{1F1FB}"], "", "", ["flag-cv"], 1, 23, 15, 0],
      "1f1e8-1f1fc": [["\u{1F1E8}\u{1F1FC}"], "", "", ["flag-cw"], 1, 24, 15, 0],
      "1f1e8-1f1fd": [["\u{1F1E8}\u{1F1FD}"], "", "", ["flag-cx"], 1, 25, 15, 0],
      "1f1e8-1f1fe": [["\u{1F1E8}\u{1F1FE}"], "", "", ["flag-cy"], 1, 26, 15, 0],
      "1f1e8-1f1ff": [["\u{1F1E8}\u{1F1FF}"], "", "", ["flag-cz"], 1, 27, 15, 0],
      "1f1e9-1f1ea": [["\u{1F1E9}\u{1F1EA}"], "\uE50E", "\u{FE4E8}", ["de", "flag-de"], 1, 28, 15, 0],
      "1f1e9-1f1ec": [["\u{1F1E9}\u{1F1EC}"], "", "", ["flag-dg"], 1, 29, 15, 0],
      "1f1e9-1f1ef": [["\u{1F1E9}\u{1F1EF}"], "", "", ["flag-dj"], 1, 30, 15, 0],
      "1f1e9-1f1f0": [["\u{1F1E9}\u{1F1F0}"], "", "", ["flag-dk"], 1, 31, 15, 0],
      "1f1e9-1f1f2": [["\u{1F1E9}\u{1F1F2}"], "", "", ["flag-dm"], 1, 32, 15, 0],
      "1f1e9-1f1f4": [["\u{1F1E9}\u{1F1F4}"], "", "", ["flag-do"], 1, 33, 15, 0],
      "1f1e9-1f1ff": [["\u{1F1E9}\u{1F1FF}"], "", "", ["flag-dz"], 1, 34, 15, 0],
      "1f1ea-1f1e6": [["\u{1F1EA}\u{1F1E6}"], "", "", ["flag-ea"], 1, 35, 15, 0],
      "1f1ea-1f1e8": [["\u{1F1EA}\u{1F1E8}"], "", "", ["flag-ec"], 1, 36, 15, 0],
      "1f1ea-1f1ea": [["\u{1F1EA}\u{1F1EA}"], "", "", ["flag-ee"], 1, 37, 15, 0],
      "1f1ea-1f1ec": [["\u{1F1EA}\u{1F1EC}"], "", "", ["flag-eg"], 1, 38, 15, 0],
      "1f1ea-1f1ed": [["\u{1F1EA}\u{1F1ED}"], "", "", ["flag-eh"], 1, 39, 15, 0],
      "1f1ea-1f1f7": [["\u{1F1EA}\u{1F1F7}"], "", "", ["flag-er"], 1, 40, 15, 0],
      "1f1ea-1f1f8": [["\u{1F1EA}\u{1F1F8}"], "\uE511", "\u{FE4EB}", ["es", "flag-es"], 1, 41, 15, 0],
      "1f1ea-1f1f9": [["\u{1F1EA}\u{1F1F9}"], "", "", ["flag-et"], 1, 42, 15, 0],
      "1f1ea-1f1fa": [["\u{1F1EA}\u{1F1FA}"], "", "", ["flag-eu"], 1, 43, 15, 0],
      "1f1eb-1f1ee": [["\u{1F1EB}\u{1F1EE}"], "", "", ["flag-fi"], 1, 44, 15, 0],
      "1f1eb-1f1ef": [["\u{1F1EB}\u{1F1EF}"], "", "", ["flag-fj"], 1, 45, 15, 0],
      "1f1eb-1f1f0": [["\u{1F1EB}\u{1F1F0}"], "", "", ["flag-fk"], 1, 46, 15, 0],
      "1f1eb-1f1f2": [["\u{1F1EB}\u{1F1F2}"], "", "", ["flag-fm"], 1, 47, 15, 0],
      "1f1eb-1f1f4": [["\u{1F1EB}\u{1F1F4}"], "", "", ["flag-fo"], 1, 48, 15, 0],
      "1f1eb-1f1f7": [["\u{1F1EB}\u{1F1F7}"], "\uE50D", "\u{FE4E7}", ["fr", "flag-fr"], 1, 49, 15, 0],
      "1f1ec-1f1e6": [["\u{1F1EC}\u{1F1E6}"], "", "", ["flag-ga"], 1, 50, 15, 0],
      "1f1ec-1f1e7": [["\u{1F1EC}\u{1F1E7}"], "\uE510", "\u{FE4EA}", ["gb", "uk", "flag-gb"], 1, 51, 15, 0],
      "1f1ec-1f1e9": [["\u{1F1EC}\u{1F1E9}"], "", "", ["flag-gd"], 1, 52, 15, 0],
      "1f1ec-1f1ea": [["\u{1F1EC}\u{1F1EA}"], "", "", ["flag-ge"], 1, 53, 15, 0],
      "1f1ec-1f1eb": [["\u{1F1EC}\u{1F1EB}"], "", "", ["flag-gf"], 1, 54, 15, 0],
      "1f1ec-1f1ec": [["\u{1F1EC}\u{1F1EC}"], "", "", ["flag-gg"], 1, 55, 15, 0],
      "1f1ec-1f1ed": [["\u{1F1EC}\u{1F1ED}"], "", "", ["flag-gh"], 1, 56, 15, 0],
      "1f1ec-1f1ee": [["\u{1F1EC}\u{1F1EE}"], "", "", ["flag-gi"], 1, 57, 15, 0],
      "1f1ec-1f1f1": [["\u{1F1EC}\u{1F1F1}"], "", "", ["flag-gl"], 1, 58, 15, 0],
      "1f1ec-1f1f2": [["\u{1F1EC}\u{1F1F2}"], "", "", ["flag-gm"], 1, 59, 15, 0],
      "1f1ec-1f1f3": [["\u{1F1EC}\u{1F1F3}"], "", "", ["flag-gn"], 1, 60, 15, 0],
      "1f1ec-1f1f5": [["\u{1F1EC}\u{1F1F5}"], "", "", ["flag-gp"], 2, 0, 15, 0],
      "1f1ec-1f1f6": [["\u{1F1EC}\u{1F1F6}"], "", "", ["flag-gq"], 2, 1, 15, 0],
      "1f1ec-1f1f7": [["\u{1F1EC}\u{1F1F7}"], "", "", ["flag-gr"], 2, 2, 15, 0],
      "1f1ec-1f1f8": [["\u{1F1EC}\u{1F1F8}"], "", "", ["flag-gs"], 2, 3, 15, 0],
      "1f1ec-1f1f9": [["\u{1F1EC}\u{1F1F9}"], "", "", ["flag-gt"], 2, 4, 15, 0],
      "1f1ec-1f1fa": [["\u{1F1EC}\u{1F1FA}"], "", "", ["flag-gu"], 2, 5, 15, 0],
      "1f1ec-1f1fc": [["\u{1F1EC}\u{1F1FC}"], "", "", ["flag-gw"], 2, 6, 15, 0],
      "1f1ec-1f1fe": [["\u{1F1EC}\u{1F1FE}"], "", "", ["flag-gy"], 2, 7, 15, 0],
      "1f1ed-1f1f0": [["\u{1F1ED}\u{1F1F0}"], "", "", ["flag-hk"], 2, 8, 15, 0],
      "1f1ed-1f1f2": [["\u{1F1ED}\u{1F1F2}"], "", "", ["flag-hm"], 2, 9, 15, 0],
      "1f1ed-1f1f3": [["\u{1F1ED}\u{1F1F3}"], "", "", ["flag-hn"], 2, 10, 15, 0],
      "1f1ed-1f1f7": [["\u{1F1ED}\u{1F1F7}"], "", "", ["flag-hr"], 2, 11, 15, 0],
      "1f1ed-1f1f9": [["\u{1F1ED}\u{1F1F9}"], "", "", ["flag-ht"], 2, 12, 15, 0],
      "1f1ed-1f1fa": [["\u{1F1ED}\u{1F1FA}"], "", "", ["flag-hu"], 2, 13, 15, 0],
      "1f1ee-1f1e8": [["\u{1F1EE}\u{1F1E8}"], "", "", ["flag-ic"], 2, 14, 15, 0],
      "1f1ee-1f1e9": [["\u{1F1EE}\u{1F1E9}"], "", "", ["flag-id"], 2, 15, 15, 0],
      "1f1ee-1f1ea": [["\u{1F1EE}\u{1F1EA}"], "", "", ["flag-ie"], 2, 16, 15, 0],
      "1f1ee-1f1f1": [["\u{1F1EE}\u{1F1F1}"], "", "", ["flag-il"], 2, 17, 15, 0],
      "1f1ee-1f1f2": [["\u{1F1EE}\u{1F1F2}"], "", "", ["flag-im"], 2, 18, 15, 0],
      "1f1ee-1f1f3": [["\u{1F1EE}\u{1F1F3}"], "", "", ["flag-in"], 2, 19, 15, 0],
      "1f1ee-1f1f4": [["\u{1F1EE}\u{1F1F4}"], "", "", ["flag-io"], 2, 20, 15, 0],
      "1f1ee-1f1f6": [["\u{1F1EE}\u{1F1F6}"], "", "", ["flag-iq"], 2, 21, 15, 0],
      "1f1ee-1f1f7": [["\u{1F1EE}\u{1F1F7}"], "", "", ["flag-ir"], 2, 22, 15, 0],
      "1f1ee-1f1f8": [["\u{1F1EE}\u{1F1F8}"], "", "", ["flag-is"], 2, 23, 15, 0],
      "1f1ee-1f1f9": [["\u{1F1EE}\u{1F1F9}"], "\uE50F", "\u{FE4E9}", ["it", "flag-it"], 2, 24, 15, 0],
      "1f1ef-1f1ea": [["\u{1F1EF}\u{1F1EA}"], "", "", ["flag-je"], 2, 25, 15, 0],
      "1f1ef-1f1f2": [["\u{1F1EF}\u{1F1F2}"], "", "", ["flag-jm"], 2, 26, 15, 0],
      "1f1ef-1f1f4": [["\u{1F1EF}\u{1F1F4}"], "", "", ["flag-jo"], 2, 27, 15, 0],
      "1f1ef-1f1f5": [["\u{1F1EF}\u{1F1F5}"], "\uE50B", "\u{FE4E5}", ["jp", "flag-jp"], 2, 28, 15, 0],
      "1f1f0-1f1ea": [["\u{1F1F0}\u{1F1EA}"], "", "", ["flag-ke"], 2, 29, 15, 0],
      "1f1f0-1f1ec": [["\u{1F1F0}\u{1F1EC}"], "", "", ["flag-kg"], 2, 30, 15, 0],
      "1f1f0-1f1ed": [["\u{1F1F0}\u{1F1ED}"], "", "", ["flag-kh"], 2, 31, 15, 0],
      "1f1f0-1f1ee": [["\u{1F1F0}\u{1F1EE}"], "", "", ["flag-ki"], 2, 32, 15, 0],
      "1f1f0-1f1f2": [["\u{1F1F0}\u{1F1F2}"], "", "", ["flag-km"], 2, 33, 15, 0],
      "1f1f0-1f1f3": [["\u{1F1F0}\u{1F1F3}"], "", "", ["flag-kn"], 2, 34, 15, 0],
      "1f1f0-1f1f5": [["\u{1F1F0}\u{1F1F5}"], "", "", ["flag-kp"], 2, 35, 15, 0],
      "1f1f0-1f1f7": [["\u{1F1F0}\u{1F1F7}"], "\uE514", "\u{FE4EE}", ["kr", "flag-kr"], 2, 36, 15, 0],
      "1f1f0-1f1fc": [["\u{1F1F0}\u{1F1FC}"], "", "", ["flag-kw"], 2, 37, 15, 0],
      "1f1f0-1f1fe": [["\u{1F1F0}\u{1F1FE}"], "", "", ["flag-ky"], 2, 38, 15, 0],
      "1f1f0-1f1ff": [["\u{1F1F0}\u{1F1FF}"], "", "", ["flag-kz"], 2, 39, 15, 0],
      "1f1f1-1f1e6": [["\u{1F1F1}\u{1F1E6}"], "", "", ["flag-la"], 2, 40, 15, 0],
      "1f1f1-1f1e7": [["\u{1F1F1}\u{1F1E7}"], "", "", ["flag-lb"], 2, 41, 15, 0],
      "1f1f1-1f1e8": [["\u{1F1F1}\u{1F1E8}"], "", "", ["flag-lc"], 2, 42, 15, 0],
      "1f1f1-1f1ee": [["\u{1F1F1}\u{1F1EE}"], "", "", ["flag-li"], 2, 43, 15, 0],
      "1f1f1-1f1f0": [["\u{1F1F1}\u{1F1F0}"], "", "", ["flag-lk"], 2, 44, 15, 0],
      "1f1f1-1f1f7": [["\u{1F1F1}\u{1F1F7}"], "", "", ["flag-lr"], 2, 45, 15, 0],
      "1f1f1-1f1f8": [["\u{1F1F1}\u{1F1F8}"], "", "", ["flag-ls"], 2, 46, 15, 0],
      "1f1f1-1f1f9": [["\u{1F1F1}\u{1F1F9}"], "", "", ["flag-lt"], 2, 47, 15, 0],
      "1f1f1-1f1fa": [["\u{1F1F1}\u{1F1FA}"], "", "", ["flag-lu"], 2, 48, 15, 0],
      "1f1f1-1f1fb": [["\u{1F1F1}\u{1F1FB}"], "", "", ["flag-lv"], 2, 49, 15, 0],
      "1f1f1-1f1fe": [["\u{1F1F1}\u{1F1FE}"], "", "", ["flag-ly"], 2, 50, 15, 0],
      "1f1f2-1f1e6": [["\u{1F1F2}\u{1F1E6}"], "", "", ["flag-ma"], 2, 51, 15, 0],
      "1f1f2-1f1e8": [["\u{1F1F2}\u{1F1E8}"], "", "", ["flag-mc"], 2, 52, 15, 0],
      "1f1f2-1f1e9": [["\u{1F1F2}\u{1F1E9}"], "", "", ["flag-md"], 2, 53, 15, 0],
      "1f1f2-1f1ea": [["\u{1F1F2}\u{1F1EA}"], "", "", ["flag-me"], 2, 54, 15, 0],
      "1f1f2-1f1eb": [["\u{1F1F2}\u{1F1EB}"], "", "", ["flag-mf"], 2, 55, 15, 0],
      "1f1f2-1f1ec": [["\u{1F1F2}\u{1F1EC}"], "", "", ["flag-mg"], 2, 56, 15, 0],
      "1f1f2-1f1ed": [["\u{1F1F2}\u{1F1ED}"], "", "", ["flag-mh"], 2, 57, 15, 0],
      "1f1f2-1f1f0": [["\u{1F1F2}\u{1F1F0}"], "", "", ["flag-mk"], 2, 58, 15, 0],
      "1f1f2-1f1f1": [["\u{1F1F2}\u{1F1F1}"], "", "", ["flag-ml"], 2, 59, 15, 0],
      "1f1f2-1f1f2": [["\u{1F1F2}\u{1F1F2}"], "", "", ["flag-mm"], 2, 60, 15, 0],
      "1f1f2-1f1f3": [["\u{1F1F2}\u{1F1F3}"], "", "", ["flag-mn"], 3, 0, 15, 0],
      "1f1f2-1f1f4": [["\u{1F1F2}\u{1F1F4}"], "", "", ["flag-mo"], 3, 1, 15, 0],
      "1f1f2-1f1f5": [["\u{1F1F2}\u{1F1F5}"], "", "", ["flag-mp"], 3, 2, 15, 0],
      "1f1f2-1f1f6": [["\u{1F1F2}\u{1F1F6}"], "", "", ["flag-mq"], 3, 3, 15, 0],
      "1f1f2-1f1f7": [["\u{1F1F2}\u{1F1F7}"], "", "", ["flag-mr"], 3, 4, 15, 0],
      "1f1f2-1f1f8": [["\u{1F1F2}\u{1F1F8}"], "", "", ["flag-ms"], 3, 5, 15, 0],
      "1f1f2-1f1f9": [["\u{1F1F2}\u{1F1F9}"], "", "", ["flag-mt"], 3, 6, 15, 0],
      "1f1f2-1f1fa": [["\u{1F1F2}\u{1F1FA}"], "", "", ["flag-mu"], 3, 7, 15, 0],
      "1f1f2-1f1fb": [["\u{1F1F2}\u{1F1FB}"], "", "", ["flag-mv"], 3, 8, 15, 0],
      "1f1f2-1f1fc": [["\u{1F1F2}\u{1F1FC}"], "", "", ["flag-mw"], 3, 9, 15, 0],
      "1f1f2-1f1fd": [["\u{1F1F2}\u{1F1FD}"], "", "", ["flag-mx"], 3, 10, 15, 0],
      "1f1f2-1f1fe": [["\u{1F1F2}\u{1F1FE}"], "", "", ["flag-my"], 3, 11, 15, 0],
      "1f1f2-1f1ff": [["\u{1F1F2}\u{1F1FF}"], "", "", ["flag-mz"], 3, 12, 15, 0],
      "1f1f3-1f1e6": [["\u{1F1F3}\u{1F1E6}"], "", "", ["flag-na"], 3, 13, 15, 0],
      "1f1f3-1f1e8": [["\u{1F1F3}\u{1F1E8}"], "", "", ["flag-nc"], 3, 14, 15, 0],
      "1f1f3-1f1ea": [["\u{1F1F3}\u{1F1EA}"], "", "", ["flag-ne"], 3, 15, 15, 0],
      "1f1f3-1f1eb": [["\u{1F1F3}\u{1F1EB}"], "", "", ["flag-nf"], 3, 16, 15, 0],
      "1f1f3-1f1ec": [["\u{1F1F3}\u{1F1EC}"], "", "", ["flag-ng"], 3, 17, 15, 0],
      "1f1f3-1f1ee": [["\u{1F1F3}\u{1F1EE}"], "", "", ["flag-ni"], 3, 18, 15, 0],
      "1f1f3-1f1f1": [["\u{1F1F3}\u{1F1F1}"], "", "", ["flag-nl"], 3, 19, 15, 0],
      "1f1f3-1f1f4": [["\u{1F1F3}\u{1F1F4}"], "", "", ["flag-no"], 3, 20, 15, 0],
      "1f1f3-1f1f5": [["\u{1F1F3}\u{1F1F5}"], "", "", ["flag-np"], 3, 21, 15, 0],
      "1f1f3-1f1f7": [["\u{1F1F3}\u{1F1F7}"], "", "", ["flag-nr"], 3, 22, 15, 0],
      "1f1f3-1f1fa": [["\u{1F1F3}\u{1F1FA}"], "", "", ["flag-nu"], 3, 23, 15, 0],
      "1f1f3-1f1ff": [["\u{1F1F3}\u{1F1FF}"], "", "", ["flag-nz"], 3, 24, 15, 0],
      "1f1f4-1f1f2": [["\u{1F1F4}\u{1F1F2}"], "", "", ["flag-om"], 3, 25, 15, 0],
      "1f1f5-1f1e6": [["\u{1F1F5}\u{1F1E6}"], "", "", ["flag-pa"], 3, 26, 15, 0],
      "1f1f5-1f1ea": [["\u{1F1F5}\u{1F1EA}"], "", "", ["flag-pe"], 3, 27, 15, 0],
      "1f1f5-1f1eb": [["\u{1F1F5}\u{1F1EB}"], "", "", ["flag-pf"], 3, 28, 15, 0],
      "1f1f5-1f1ec": [["\u{1F1F5}\u{1F1EC}"], "", "", ["flag-pg"], 3, 29, 15, 0],
      "1f1f5-1f1ed": [["\u{1F1F5}\u{1F1ED}"], "", "", ["flag-ph"], 3, 30, 15, 0],
      "1f1f5-1f1f0": [["\u{1F1F5}\u{1F1F0}"], "", "", ["flag-pk"], 3, 31, 15, 0],
      "1f1f5-1f1f1": [["\u{1F1F5}\u{1F1F1}"], "", "", ["flag-pl"], 3, 32, 15, 0],
      "1f1f5-1f1f2": [["\u{1F1F5}\u{1F1F2}"], "", "", ["flag-pm"], 3, 33, 15, 0],
      "1f1f5-1f1f3": [["\u{1F1F5}\u{1F1F3}"], "", "", ["flag-pn"], 3, 34, 15, 0],
      "1f1f5-1f1f7": [["\u{1F1F5}\u{1F1F7}"], "", "", ["flag-pr"], 3, 35, 15, 0],
      "1f1f5-1f1f8": [["\u{1F1F5}\u{1F1F8}"], "", "", ["flag-ps"], 3, 36, 15, 0],
      "1f1f5-1f1f9": [["\u{1F1F5}\u{1F1F9}"], "", "", ["flag-pt"], 3, 37, 15, 0],
      "1f1f5-1f1fc": [["\u{1F1F5}\u{1F1FC}"], "", "", ["flag-pw"], 3, 38, 15, 0],
      "1f1f5-1f1fe": [["\u{1F1F5}\u{1F1FE}"], "", "", ["flag-py"], 3, 39, 15, 0],
      "1f1f6-1f1e6": [["\u{1F1F6}\u{1F1E6}"], "", "", ["flag-qa"], 3, 40, 15, 0],
      "1f1f7-1f1ea": [["\u{1F1F7}\u{1F1EA}"], "", "", ["flag-re"], 3, 41, 15, 0],
      "1f1f7-1f1f4": [["\u{1F1F7}\u{1F1F4}"], "", "", ["flag-ro"], 3, 42, 15, 0],
      "1f1f7-1f1f8": [["\u{1F1F7}\u{1F1F8}"], "", "", ["flag-rs"], 3, 43, 15, 0],
      "1f1f7-1f1fa": [["\u{1F1F7}\u{1F1FA}"], "\uE512", "\u{FE4EC}", ["ru", "flag-ru"], 3, 44, 15, 0],
      "1f1f7-1f1fc": [["\u{1F1F7}\u{1F1FC}"], "", "", ["flag-rw"], 3, 45, 15, 0],
      "1f1f8-1f1e6": [["\u{1F1F8}\u{1F1E6}"], "", "", ["flag-sa"], 3, 46, 15, 0],
      "1f1f8-1f1e7": [["\u{1F1F8}\u{1F1E7}"], "", "", ["flag-sb"], 3, 47, 15, 0],
      "1f1f8-1f1e8": [["\u{1F1F8}\u{1F1E8}"], "", "", ["flag-sc"], 3, 48, 15, 0],
      "1f1f8-1f1e9": [["\u{1F1F8}\u{1F1E9}"], "", "", ["flag-sd"], 3, 49, 15, 0],
      "1f1f8-1f1ea": [["\u{1F1F8}\u{1F1EA}"], "", "", ["flag-se"], 3, 50, 15, 0],
      "1f1f8-1f1ec": [["\u{1F1F8}\u{1F1EC}"], "", "", ["flag-sg"], 3, 51, 15, 0],
      "1f1f8-1f1ed": [["\u{1F1F8}\u{1F1ED}"], "", "", ["flag-sh"], 3, 52, 15, 0],
      "1f1f8-1f1ee": [["\u{1F1F8}\u{1F1EE}"], "", "", ["flag-si"], 3, 53, 15, 0],
      "1f1f8-1f1ef": [["\u{1F1F8}\u{1F1EF}"], "", "", ["flag-sj"], 3, 54, 15, 0],
      "1f1f8-1f1f0": [["\u{1F1F8}\u{1F1F0}"], "", "", ["flag-sk"], 3, 55, 15, 0],
      "1f1f8-1f1f1": [["\u{1F1F8}\u{1F1F1}"], "", "", ["flag-sl"], 3, 56, 15, 0],
      "1f1f8-1f1f2": [["\u{1F1F8}\u{1F1F2}"], "", "", ["flag-sm"], 3, 57, 15, 0],
      "1f1f8-1f1f3": [["\u{1F1F8}\u{1F1F3}"], "", "", ["flag-sn"], 3, 58, 15, 0],
      "1f1f8-1f1f4": [["\u{1F1F8}\u{1F1F4}"], "", "", ["flag-so"], 3, 59, 15, 0],
      "1f1f8-1f1f7": [["\u{1F1F8}\u{1F1F7}"], "", "", ["flag-sr"], 3, 60, 15, 0],
      "1f1f8-1f1f8": [["\u{1F1F8}\u{1F1F8}"], "", "", ["flag-ss"], 4, 0, 15, 0],
      "1f1f8-1f1f9": [["\u{1F1F8}\u{1F1F9}"], "", "", ["flag-st"], 4, 1, 15, 0],
      "1f1f8-1f1fb": [["\u{1F1F8}\u{1F1FB}"], "", "", ["flag-sv"], 4, 2, 15, 0],
      "1f1f8-1f1fd": [["\u{1F1F8}\u{1F1FD}"], "", "", ["flag-sx"], 4, 3, 15, 0],
      "1f1f8-1f1fe": [["\u{1F1F8}\u{1F1FE}"], "", "", ["flag-sy"], 4, 4, 15, 0],
      "1f1f8-1f1ff": [["\u{1F1F8}\u{1F1FF}"], "", "", ["flag-sz"], 4, 5, 15, 0],
      "1f1f9-1f1e6": [["\u{1F1F9}\u{1F1E6}"], "", "", ["flag-ta"], 4, 6, 15, 0],
      "1f1f9-1f1e8": [["\u{1F1F9}\u{1F1E8}"], "", "", ["flag-tc"], 4, 7, 15, 0],
      "1f1f9-1f1e9": [["\u{1F1F9}\u{1F1E9}"], "", "", ["flag-td"], 4, 8, 15, 0],
      "1f1f9-1f1eb": [["\u{1F1F9}\u{1F1EB}"], "", "", ["flag-tf"], 4, 9, 15, 0],
      "1f1f9-1f1ec": [["\u{1F1F9}\u{1F1EC}"], "", "", ["flag-tg"], 4, 10, 15, 0],
      "1f1f9-1f1ed": [["\u{1F1F9}\u{1F1ED}"], "", "", ["flag-th"], 4, 11, 15, 0],
      "1f1f9-1f1ef": [["\u{1F1F9}\u{1F1EF}"], "", "", ["flag-tj"], 4, 12, 15, 0],
      "1f1f9-1f1f0": [["\u{1F1F9}\u{1F1F0}"], "", "", ["flag-tk"], 4, 13, 15, 0],
      "1f1f9-1f1f1": [["\u{1F1F9}\u{1F1F1}"], "", "", ["flag-tl"], 4, 14, 15, 0],
      "1f1f9-1f1f2": [["\u{1F1F9}\u{1F1F2}"], "", "", ["flag-tm"], 4, 15, 15, 0],
      "1f1f9-1f1f3": [["\u{1F1F9}\u{1F1F3}"], "", "", ["flag-tn"], 4, 16, 15, 0],
      "1f1f9-1f1f4": [["\u{1F1F9}\u{1F1F4}"], "", "", ["flag-to"], 4, 17, 15, 0],
      "1f1f9-1f1f7": [["\u{1F1F9}\u{1F1F7}"], "", "", ["flag-tr"], 4, 18, 15, 0],
      "1f1f9-1f1f9": [["\u{1F1F9}\u{1F1F9}"], "", "", ["flag-tt"], 4, 19, 15, 0],
      "1f1f9-1f1fb": [["\u{1F1F9}\u{1F1FB}"], "", "", ["flag-tv"], 4, 20, 15, 0],
      "1f1f9-1f1fc": [["\u{1F1F9}\u{1F1FC}"], "", "", ["flag-tw"], 4, 21, 15, 0],
      "1f1f9-1f1ff": [["\u{1F1F9}\u{1F1FF}"], "", "", ["flag-tz"], 4, 22, 15, 0],
      "1f1fa-1f1e6": [["\u{1F1FA}\u{1F1E6}"], "", "", ["flag-ua"], 4, 23, 15, 0],
      "1f1fa-1f1ec": [["\u{1F1FA}\u{1F1EC}"], "", "", ["flag-ug"], 4, 24, 15, 0],
      "1f1fa-1f1f2": [["\u{1F1FA}\u{1F1F2}"], "", "", ["flag-um"], 4, 25, 15, 0],
      "1f1fa-1f1f3": [["\u{1F1FA}\u{1F1F3}"], "", "", ["flag-un"], 4, 26, 15, 0],
      "1f1fa-1f1f8": [["\u{1F1FA}\u{1F1F8}"], "\uE50C", "\u{FE4E6}", ["us", "flag-us"], 4, 27, 15, 0],
      "1f1fa-1f1fe": [["\u{1F1FA}\u{1F1FE}"], "", "", ["flag-uy"], 4, 28, 15, 0],
      "1f1fa-1f1ff": [["\u{1F1FA}\u{1F1FF}"], "", "", ["flag-uz"], 4, 29, 15, 0],
      "1f1fb-1f1e6": [["\u{1F1FB}\u{1F1E6}"], "", "", ["flag-va"], 4, 30, 15, 0],
      "1f1fb-1f1e8": [["\u{1F1FB}\u{1F1E8}"], "", "", ["flag-vc"], 4, 31, 15, 0],
      "1f1fb-1f1ea": [["\u{1F1FB}\u{1F1EA}"], "", "", ["flag-ve"], 4, 32, 15, 0],
      "1f1fb-1f1ec": [["\u{1F1FB}\u{1F1EC}"], "", "", ["flag-vg"], 4, 33, 15, 0],
      "1f1fb-1f1ee": [["\u{1F1FB}\u{1F1EE}"], "", "", ["flag-vi"], 4, 34, 15, 0],
      "1f1fb-1f1f3": [["\u{1F1FB}\u{1F1F3}"], "", "", ["flag-vn"], 4, 35, 15, 0],
      "1f1fb-1f1fa": [["\u{1F1FB}\u{1F1FA}"], "", "", ["flag-vu"], 4, 36, 15, 0],
      "1f1fc-1f1eb": [["\u{1F1FC}\u{1F1EB}"], "", "", ["flag-wf"], 4, 37, 15, 0],
      "1f1fc-1f1f8": [["\u{1F1FC}\u{1F1F8}"], "", "", ["flag-ws"], 4, 38, 15, 0],
      "1f1fd-1f1f0": [["\u{1F1FD}\u{1F1F0}"], "", "", ["flag-xk"], 4, 39, 15, 0],
      "1f1fe-1f1ea": [["\u{1F1FE}\u{1F1EA}"], "", "", ["flag-ye"], 4, 40, 15, 0],
      "1f1fe-1f1f9": [["\u{1F1FE}\u{1F1F9}"], "", "", ["flag-yt"], 4, 41, 15, 0],
      "1f1ff-1f1e6": [["\u{1F1FF}\u{1F1E6}"], "", "", ["flag-za"], 4, 42, 15, 0],
      "1f1ff-1f1f2": [["\u{1F1FF}\u{1F1F2}"], "", "", ["flag-zm"], 4, 43, 15, 0],
      "1f1ff-1f1fc": [["\u{1F1FF}\u{1F1FC}"], "", "", ["flag-zw"], 4, 44, 15, 0],
      "1f201": [["\u{1F201}"], "\uE203", "\u{FEB24}", ["koko"], 4, 45, 15, 0],
      "1f202-fe0f": [["\u{1F202}\uFE0F", "\u{1F202}"], "\uE228", "\u{FEB3F}", ["sa"], 4, 46, 15, 0],
      "1f21a": [["\u{1F21A}"], "\uE216", "\u{FEB3A}", ["u7121"], 4, 47, 15, 0],
      "1f22f": [["\u{1F22F}"], "\uE22C", "\u{FEB40}", ["u6307"], 4, 48, 15, 0],
      "1f232": [["\u{1F232}"], "", "\u{FEB2E}", ["u7981"], 4, 49, 15, 0],
      "1f233": [["\u{1F233}"], "\uE22B", "\u{FEB2F}", ["u7a7a"], 4, 50, 15, 0],
      "1f234": [["\u{1F234}"], "", "\u{FEB30}", ["u5408"], 4, 51, 15, 0],
      "1f235": [["\u{1F235}"], "\uE22A", "\u{FEB31}", ["u6e80"], 4, 52, 15, 0],
      "1f236": [["\u{1F236}"], "\uE215", "\u{FEB39}", ["u6709"], 4, 53, 15, 0],
      "1f237-fe0f": [["\u{1F237}\uFE0F", "\u{1F237}"], "\uE217", "\u{FEB3B}", ["u6708"], 4, 54, 15, 0],
      "1f238": [["\u{1F238}"], "\uE218", "\u{FEB3C}", ["u7533"], 4, 55, 15, 0],
      "1f239": [["\u{1F239}"], "\uE227", "\u{FEB3E}", ["u5272"], 4, 56, 15, 0],
      "1f23a": [["\u{1F23A}"], "\uE22D", "\u{FEB41}", ["u55b6"], 4, 57, 15, 0],
      "1f250": [["\u{1F250}"], "\uE226", "\u{FEB3D}", ["ideograph_advantage"], 4, 58, 15, 0],
      "1f251": [["\u{1F251}"], "", "\u{FEB50}", ["accept"], 4, 59, 15, 0],
      "1f300": [["\u{1F300}"], "\uE443", "\u{FE005}", ["cyclone"], 4, 60, 15, 0],
      "1f301": [["\u{1F301}"], "", "\u{FE006}", ["foggy"], 5, 0, 15, 0],
      "1f302": [["\u{1F302}"], "\uE43C", "\u{FE007}", ["closed_umbrella"], 5, 1, 15, 0],
      "1f303": [["\u{1F303}"], "\uE44B", "\u{FE008}", ["night_with_stars"], 5, 2, 15, 0],
      "1f304": [["\u{1F304}"], "\uE04D", "\u{FE009}", ["sunrise_over_mountains"], 5, 3, 15, 0],
      "1f305": [["\u{1F305}"], "\uE449", "\u{FE00A}", ["sunrise"], 5, 4, 15, 0],
      "1f306": [["\u{1F306}"], "\uE146", "\u{FE00B}", ["city_sunset"], 5, 5, 15, 0],
      "1f307": [["\u{1F307}"], "\uE44A", "\u{FE00C}", ["city_sunrise"], 5, 6, 15, 0],
      "1f308": [["\u{1F308}"], "\uE44C", "\u{FE00D}", ["rainbow"], 5, 7, 15, 0],
      "1f309": [["\u{1F309}"], "", "\u{FE010}", ["bridge_at_night"], 5, 8, 15, 0],
      "1f30a": [["\u{1F30A}"], "\uE43E", "\u{FE038}", ["ocean"], 5, 9, 15, 0],
      "1f30b": [["\u{1F30B}"], "", "\u{FE03A}", ["volcano"], 5, 10, 15, 0],
      "1f30c": [["\u{1F30C}"], "", "\u{FE03B}", ["milky_way"], 5, 11, 15, 0],
      "1f30d": [["\u{1F30D}"], "", "", ["earth_africa"], 5, 12, 15, 0],
      "1f30e": [["\u{1F30E}"], "", "", ["earth_americas"], 5, 13, 15, 0],
      "1f30f": [["\u{1F30F}"], "", "\u{FE039}", ["earth_asia"], 5, 14, 15, 0],
      "1f310": [["\u{1F310}"], "", "", ["globe_with_meridians"], 5, 15, 15, 0],
      "1f311": [["\u{1F311}"], "", "\u{FE011}", ["new_moon"], 5, 16, 15, 0],
      "1f312": [["\u{1F312}"], "", "", ["waxing_crescent_moon"], 5, 17, 15, 0],
      "1f313": [["\u{1F313}"], "", "\u{FE013}", ["first_quarter_moon"], 5, 18, 15, 0],
      "1f314": [["\u{1F314}"], "", "\u{FE012}", ["moon", "waxing_gibbous_moon"], 5, 19, 15, 0],
      "1f315": [["\u{1F315}"], "", "\u{FE015}", ["full_moon"], 5, 20, 15, 0],
      "1f316": [["\u{1F316}"], "", "", ["waning_gibbous_moon"], 5, 21, 15, 0],
      "1f317": [["\u{1F317}"], "", "", ["last_quarter_moon"], 5, 22, 15, 0],
      "1f318": [["\u{1F318}"], "", "", ["waning_crescent_moon"], 5, 23, 15, 0],
      "1f319": [["\u{1F319}"], "\uE04C", "\u{FE014}", ["crescent_moon"], 5, 24, 15, 0],
      "1f31a": [["\u{1F31A}"], "", "", ["new_moon_with_face"], 5, 25, 15, 0],
      "1f31b": [["\u{1F31B}"], "", "\u{FE016}", ["first_quarter_moon_with_face"], 5, 26, 15, 0],
      "1f31c": [["\u{1F31C}"], "", "", ["last_quarter_moon_with_face"], 5, 27, 15, 0],
      "1f31d": [["\u{1F31D}"], "", "", ["full_moon_with_face"], 5, 28, 15, 0],
      "1f31e": [["\u{1F31E}"], "", "", ["sun_with_face"], 5, 29, 15, 0],
      "1f31f": [["\u{1F31F}"], "\uE335", "\u{FEB69}", ["star2"], 5, 30, 15, 0],
      "1f320": [["\u{1F320}"], "", "\u{FEB6A}", ["stars"], 5, 31, 15, 0],
      "1f321-fe0f": [["\u{1F321}\uFE0F", "\u{1F321}"], "", "", ["thermometer"], 5, 32, 15, 0],
      "1f324-fe0f": [["\u{1F324}\uFE0F", "\u{1F324}"], "", "", ["mostly_sunny", "sun_small_cloud"], 5, 33, 15, 0],
      "1f325-fe0f": [["\u{1F325}\uFE0F", "\u{1F325}"], "", "", ["barely_sunny", "sun_behind_cloud"], 5, 34, 15, 0],
      "1f326-fe0f": [["\u{1F326}\uFE0F", "\u{1F326}"], "", "", ["partly_sunny_rain", "sun_behind_rain_cloud"], 5, 35, 15, 0],
      "1f327-fe0f": [["\u{1F327}\uFE0F", "\u{1F327}"], "", "", ["rain_cloud"], 5, 36, 15, 0],
      "1f328-fe0f": [["\u{1F328}\uFE0F", "\u{1F328}"], "", "", ["snow_cloud"], 5, 37, 15, 0],
      "1f329-fe0f": [["\u{1F329}\uFE0F", "\u{1F329}"], "", "", ["lightning", "lightning_cloud"], 5, 38, 15, 0],
      "1f32a-fe0f": [["\u{1F32A}\uFE0F", "\u{1F32A}"], "", "", ["tornado", "tornado_cloud"], 5, 39, 15, 0],
      "1f32b-fe0f": [["\u{1F32B}\uFE0F", "\u{1F32B}"], "", "", ["fog"], 5, 40, 15, 0],
      "1f32c-fe0f": [["\u{1F32C}\uFE0F", "\u{1F32C}"], "", "", ["wind_blowing_face"], 5, 41, 15, 0],
      "1f32d": [["\u{1F32D}"], "", "", ["hotdog"], 5, 42, 15, 0],
      "1f32e": [["\u{1F32E}"], "", "", ["taco"], 5, 43, 15, 0],
      "1f32f": [["\u{1F32F}"], "", "", ["burrito"], 5, 44, 15, 0],
      "1f330": [["\u{1F330}"], "", "\u{FE04C}", ["chestnut"], 5, 45, 15, 0],
      "1f331": [["\u{1F331}"], "", "\u{FE03E}", ["seedling"], 5, 46, 15, 0],
      "1f332": [["\u{1F332}"], "", "", ["evergreen_tree"], 5, 47, 15, 0],
      "1f333": [["\u{1F333}"], "", "", ["deciduous_tree"], 5, 48, 15, 0],
      "1f334": [["\u{1F334}"], "\uE307", "\u{FE047}", ["palm_tree"], 5, 49, 15, 0],
      "1f335": [["\u{1F335}"], "\uE308", "\u{FE048}", ["cactus"], 5, 50, 15, 0],
      "1f336-fe0f": [["\u{1F336}\uFE0F", "\u{1F336}"], "", "", ["hot_pepper"], 5, 51, 15, 0],
      "1f337": [["\u{1F337}"], "\uE304", "\u{FE03D}", ["tulip"], 5, 52, 15, 0],
      "1f338": [["\u{1F338}"], "\uE030", "\u{FE040}", ["cherry_blossom"], 5, 53, 15, 0],
      "1f339": [["\u{1F339}"], "\uE032", "\u{FE041}", ["rose"], 5, 54, 15, 0],
      "1f33a": [["\u{1F33A}"], "\uE303", "\u{FE045}", ["hibiscus"], 5, 55, 15, 0],
      "1f33b": [["\u{1F33B}"], "\uE305", "\u{FE046}", ["sunflower"], 5, 56, 15, 0],
      "1f33c": [["\u{1F33C}"], "", "\u{FE04D}", ["blossom"], 5, 57, 15, 0],
      "1f33d": [["\u{1F33D}"], "", "\u{FE04A}", ["corn"], 5, 58, 15, 0],
      "1f33e": [["\u{1F33E}"], "\uE444", "\u{FE049}", ["ear_of_rice"], 5, 59, 15, 0],
      "1f33f": [["\u{1F33F}"], "", "\u{FE04E}", ["herb"], 5, 60, 15, 0],
      "1f340": [["\u{1F340}"], "\uE110", "\u{FE03C}", ["four_leaf_clover"], 6, 0, 15, 0],
      "1f341": [["\u{1F341}"], "\uE118", "\u{FE03F}", ["maple_leaf"], 6, 1, 15, 0],
      "1f342": [["\u{1F342}"], "\uE119", "\u{FE042}", ["fallen_leaf"], 6, 2, 15, 0],
      "1f343": [["\u{1F343}"], "\uE447", "\u{FE043}", ["leaves"], 6, 3, 15, 0],
      "1f344": [["\u{1F344}"], "", "\u{FE04B}", ["mushroom"], 6, 4, 15, 0],
      "1f345": [["\u{1F345}"], "\uE349", "\u{FE055}", ["tomato"], 6, 5, 15, 0],
      "1f346": [["\u{1F346}"], "\uE34A", "\u{FE056}", ["eggplant"], 6, 6, 15, 0],
      "1f347": [["\u{1F347}"], "", "\u{FE059}", ["grapes"], 6, 7, 15, 0],
      "1f348": [["\u{1F348}"], "", "\u{FE057}", ["melon"], 6, 8, 15, 0],
      "1f349": [["\u{1F349}"], "\uE348", "\u{FE054}", ["watermelon"], 6, 9, 15, 0],
      "1f34a": [["\u{1F34A}"], "\uE346", "\u{FE052}", ["tangerine"], 6, 10, 15, 0],
      "1f34b": [["\u{1F34B}"], "", "", ["lemon"], 6, 11, 15, 0],
      "1f34c": [["\u{1F34C}"], "", "\u{FE050}", ["banana"], 6, 12, 15, 0],
      "1f34d": [["\u{1F34D}"], "", "\u{FE058}", ["pineapple"], 6, 13, 15, 0],
      "1f34e": [["\u{1F34E}"], "\uE345", "\u{FE051}", ["apple"], 6, 14, 15, 0],
      "1f34f": [["\u{1F34F}"], "", "\u{FE05B}", ["green_apple"], 6, 15, 15, 0],
      "1f350": [["\u{1F350}"], "", "", ["pear"], 6, 16, 15, 0],
      "1f351": [["\u{1F351}"], "", "\u{FE05A}", ["peach"], 6, 17, 15, 0],
      "1f352": [["\u{1F352}"], "", "\u{FE04F}", ["cherries"], 6, 18, 15, 0],
      "1f353": [["\u{1F353}"], "\uE347", "\u{FE053}", ["strawberry"], 6, 19, 15, 0],
      "1f354": [["\u{1F354}"], "\uE120", "\u{FE960}", ["hamburger"], 6, 20, 15, 0],
      "1f355": [["\u{1F355}"], "", "\u{FE975}", ["pizza"], 6, 21, 15, 0],
      "1f356": [["\u{1F356}"], "", "\u{FE972}", ["meat_on_bone"], 6, 22, 15, 0],
      "1f357": [["\u{1F357}"], "", "\u{FE976}", ["poultry_leg"], 6, 23, 15, 0],
      "1f358": [["\u{1F358}"], "\uE33D", "\u{FE969}", ["rice_cracker"], 6, 24, 15, 0],
      "1f359": [["\u{1F359}"], "\uE342", "\u{FE961}", ["rice_ball"], 6, 25, 15, 0],
      "1f35a": [["\u{1F35A}"], "\uE33E", "\u{FE96A}", ["rice"], 6, 26, 15, 0],
      "1f35b": [["\u{1F35B}"], "\uE341", "\u{FE96C}", ["curry"], 6, 27, 15, 0],
      "1f35c": [["\u{1F35C}"], "\uE340", "\u{FE963}", ["ramen"], 6, 28, 15, 0],
      "1f35d": [["\u{1F35D}"], "\uE33F", "\u{FE96B}", ["spaghetti"], 6, 29, 15, 0],
      "1f35e": [["\u{1F35E}"], "\uE339", "\u{FE964}", ["bread"], 6, 30, 15, 0],
      "1f35f": [["\u{1F35F}"], "\uE33B", "\u{FE967}", ["fries"], 6, 31, 15, 0],
      "1f360": [["\u{1F360}"], "", "\u{FE974}", ["sweet_potato"], 6, 32, 15, 0],
      "1f361": [["\u{1F361}"], "\uE33C", "\u{FE968}", ["dango"], 6, 33, 15, 0],
      "1f362": [["\u{1F362}"], "\uE343", "\u{FE96D}", ["oden"], 6, 34, 15, 0],
      "1f363": [["\u{1F363}"], "\uE344", "\u{FE96E}", ["sushi"], 6, 35, 15, 0],
      "1f364": [["\u{1F364}"], "", "\u{FE97F}", ["fried_shrimp"], 6, 36, 15, 0],
      "1f365": [["\u{1F365}"], "", "\u{FE973}", ["fish_cake"], 6, 37, 15, 0],
      "1f366": [["\u{1F366}"], "\uE33A", "\u{FE966}", ["icecream"], 6, 38, 15, 0],
      "1f367": [["\u{1F367}"], "\uE43F", "\u{FE971}", ["shaved_ice"], 6, 39, 15, 0],
      "1f368": [["\u{1F368}"], "", "\u{FE977}", ["ice_cream"], 6, 40, 15, 0],
      "1f369": [["\u{1F369}"], "", "\u{FE978}", ["doughnut"], 6, 41, 15, 0],
      "1f36a": [["\u{1F36A}"], "", "\u{FE979}", ["cookie"], 6, 42, 15, 0],
      "1f36b": [["\u{1F36B}"], "", "\u{FE97A}", ["chocolate_bar"], 6, 43, 15, 0],
      "1f36c": [["\u{1F36C}"], "", "\u{FE97B}", ["candy"], 6, 44, 15, 0],
      "1f36d": [["\u{1F36D}"], "", "\u{FE97C}", ["lollipop"], 6, 45, 15, 0],
      "1f36e": [["\u{1F36E}"], "", "\u{FE97D}", ["custard"], 6, 46, 15, 0],
      "1f36f": [["\u{1F36F}"], "", "\u{FE97E}", ["honey_pot"], 6, 47, 15, 0],
      "1f370": [["\u{1F370}"], "\uE046", "\u{FE962}", ["cake"], 6, 48, 15, 0],
      "1f371": [["\u{1F371}"], "\uE34C", "\u{FE96F}", ["bento"], 6, 49, 15, 0],
      "1f372": [["\u{1F372}"], "\uE34D", "\u{FE970}", ["stew"], 6, 50, 15, 0],
      "1f373": [["\u{1F373}"], "\uE147", "\u{FE965}", ["fried_egg", "cooking"], 6, 51, 15, 0],
      "1f374": [["\u{1F374}"], "\uE043", "\u{FE980}", ["fork_and_knife"], 6, 52, 15, 0],
      "1f375": [["\u{1F375}"], "\uE338", "\u{FE984}", ["tea"], 6, 53, 15, 0],
      "1f376": [["\u{1F376}"], "\uE30B", "\u{FE985}", ["sake"], 6, 54, 15, 0],
      "1f377": [["\u{1F377}"], "", "\u{FE986}", ["wine_glass"], 6, 55, 15, 0],
      "1f378": [["\u{1F378}"], "\uE044", "\u{FE982}", ["cocktail"], 6, 56, 15, 0],
      "1f379": [["\u{1F379}"], "", "\u{FE988}", ["tropical_drink"], 6, 57, 15, 0],
      "1f37a": [["\u{1F37A}"], "\uE047", "\u{FE983}", ["beer"], 6, 58, 15, 0],
      "1f37b": [["\u{1F37B}"], "\uE30C", "\u{FE987}", ["beers"], 6, 59, 15, 0],
      "1f37c": [["\u{1F37C}"], "", "", ["baby_bottle"], 6, 60, 15, 0],
      "1f37d-fe0f": [["\u{1F37D}\uFE0F", "\u{1F37D}"], "", "", ["knife_fork_plate"], 7, 0, 15, 0],
      "1f37e": [["\u{1F37E}"], "", "", ["champagne"], 7, 1, 15, 0],
      "1f37f": [["\u{1F37F}"], "", "", ["popcorn"], 7, 2, 15, 0],
      "1f380": [["\u{1F380}"], "\uE314", "\u{FE50F}", ["ribbon"], 7, 3, 15, 0],
      "1f381": [["\u{1F381}"], "\uE112", "\u{FE510}", ["gift"], 7, 4, 15, 0],
      "1f382": [["\u{1F382}"], "\uE34B", "\u{FE511}", ["birthday"], 7, 5, 15, 0],
      "1f383": [["\u{1F383}"], "\uE445", "\u{FE51F}", ["jack_o_lantern"], 7, 6, 15, 0],
      "1f384": [["\u{1F384}"], "\uE033", "\u{FE512}", ["christmas_tree"], 7, 7, 15, 0],
      "1f385": [["\u{1F385}"], "\uE448", "\u{FE513}", ["santa"], 7, 8, 15, 0],
      "1f386": [["\u{1F386}"], "\uE117", "\u{FE515}", ["fireworks"], 7, 14, 15, 0],
      "1f387": [["\u{1F387}"], "\uE440", "\u{FE51D}", ["sparkler"], 7, 15, 15, 0],
      "1f388": [["\u{1F388}"], "\uE310", "\u{FE516}", ["balloon"], 7, 16, 15, 0],
      "1f389": [["\u{1F389}"], "\uE312", "\u{FE517}", ["tada"], 7, 17, 15, 0],
      "1f38a": [["\u{1F38A}"], "", "\u{FE520}", ["confetti_ball"], 7, 18, 15, 0],
      "1f38b": [["\u{1F38B}"], "", "\u{FE521}", ["tanabata_tree"], 7, 19, 15, 0],
      "1f38c": [["\u{1F38C}"], "\uE143", "\u{FE514}", ["crossed_flags"], 7, 20, 15, 0],
      "1f38d": [["\u{1F38D}"], "\uE436", "\u{FE518}", ["bamboo"], 7, 21, 15, 0],
      "1f38e": [["\u{1F38E}"], "\uE438", "\u{FE519}", ["dolls"], 7, 22, 15, 0],
      "1f38f": [["\u{1F38F}"], "\uE43B", "\u{FE51C}", ["flags"], 7, 23, 15, 0],
      "1f390": [["\u{1F390}"], "\uE442", "\u{FE51E}", ["wind_chime"], 7, 24, 15, 0],
      "1f391": [["\u{1F391}"], "\uE446", "\u{FE017}", ["rice_scene"], 7, 25, 15, 0],
      "1f392": [["\u{1F392}"], "\uE43A", "\u{FE51B}", ["school_satchel"], 7, 26, 15, 0],
      "1f393": [["\u{1F393}"], "\uE439", "\u{FE51A}", ["mortar_board"], 7, 27, 15, 0],
      "1f396-fe0f": [["\u{1F396}\uFE0F", "\u{1F396}"], "", "", ["medal"], 7, 28, 15, 0],
      "1f397-fe0f": [["\u{1F397}\uFE0F", "\u{1F397}"], "", "", ["reminder_ribbon"], 7, 29, 15, 0],
      "1f399-fe0f": [["\u{1F399}\uFE0F", "\u{1F399}"], "", "", ["studio_microphone"], 7, 30, 15, 0],
      "1f39a-fe0f": [["\u{1F39A}\uFE0F", "\u{1F39A}"], "", "", ["level_slider"], 7, 31, 15, 0],
      "1f39b-fe0f": [["\u{1F39B}\uFE0F", "\u{1F39B}"], "", "", ["control_knobs"], 7, 32, 15, 0],
      "1f39e-fe0f": [["\u{1F39E}\uFE0F", "\u{1F39E}"], "", "", ["film_frames"], 7, 33, 15, 0],
      "1f39f-fe0f": [["\u{1F39F}\uFE0F", "\u{1F39F}"], "", "", ["admission_tickets"], 7, 34, 15, 0],
      "1f3a0": [["\u{1F3A0}"], "", "\u{FE7FC}", ["carousel_horse"], 7, 35, 15, 0],
      "1f3a1": [["\u{1F3A1}"], "\uE124", "\u{FE7FD}", ["ferris_wheel"], 7, 36, 15, 0],
      "1f3a2": [["\u{1F3A2}"], "\uE433", "\u{FE7FE}", ["roller_coaster"], 7, 37, 15, 0],
      "1f3a3": [["\u{1F3A3}"], "", "\u{FE7FF}", ["fishing_pole_and_fish"], 7, 38, 15, 0],
      "1f3a4": [["\u{1F3A4}"], "\uE03C", "\u{FE800}", ["microphone"], 7, 39, 15, 0],
      "1f3a5": [["\u{1F3A5}"], "\uE03D", "\u{FE801}", ["movie_camera"], 7, 40, 15, 0],
      "1f3a6": [["\u{1F3A6}"], "\uE507", "\u{FE802}", ["cinema"], 7, 41, 15, 0],
      "1f3a7": [["\u{1F3A7}"], "\uE30A", "\u{FE803}", ["headphones"], 7, 42, 15, 0],
      "1f3a8": [["\u{1F3A8}"], "\uE502", "\u{FE804}", ["art"], 7, 43, 15, 0],
      "1f3a9": [["\u{1F3A9}"], "\uE503", "\u{FE805}", ["tophat"], 7, 44, 15, 0],
      "1f3aa": [["\u{1F3AA}"], "", "\u{FE806}", ["circus_tent"], 7, 45, 15, 0],
      "1f3ab": [["\u{1F3AB}"], "\uE125", "\u{FE807}", ["ticket"], 7, 46, 15, 0],
      "1f3ac": [["\u{1F3AC}"], "\uE324", "\u{FE808}", ["clapper"], 7, 47, 15, 0],
      "1f3ad": [["\u{1F3AD}"], "", "\u{FE809}", ["performing_arts"], 7, 48, 15, 0],
      "1f3ae": [["\u{1F3AE}"], "", "\u{FE80A}", ["video_game"], 7, 49, 15, 0],
      "1f3af": [["\u{1F3AF}"], "\uE130", "\u{FE80C}", ["dart"], 7, 50, 15, 0],
      "1f3b0": [["\u{1F3B0}"], "\uE133", "\u{FE80D}", ["slot_machine"], 7, 51, 15, 0],
      "1f3b1": [["\u{1F3B1}"], "\uE42C", "\u{FE80E}", ["8ball"], 7, 52, 15, 0],
      "1f3b2": [["\u{1F3B2}"], "", "\u{FE80F}", ["game_die"], 7, 53, 15, 0],
      "1f3b3": [["\u{1F3B3}"], "", "\u{FE810}", ["bowling"], 7, 54, 15, 0],
      "1f3b4": [["\u{1F3B4}"], "", "\u{FE811}", ["flower_playing_cards"], 7, 55, 15, 0],
      "1f3b5": [["\u{1F3B5}"], "\uE03E", "\u{FE813}", ["musical_note"], 7, 56, 15, 0],
      "1f3b6": [["\u{1F3B6}"], "\uE326", "\u{FE814}", ["notes"], 7, 57, 15, 0],
      "1f3b7": [["\u{1F3B7}"], "\uE040", "\u{FE815}", ["saxophone"], 7, 58, 15, 0],
      "1f3b8": [["\u{1F3B8}"], "\uE041", "\u{FE816}", ["guitar"], 7, 59, 15, 0],
      "1f3b9": [["\u{1F3B9}"], "", "\u{FE817}", ["musical_keyboard"], 7, 60, 15, 0],
      "1f3ba": [["\u{1F3BA}"], "\uE042", "\u{FE818}", ["trumpet"], 8, 0, 15, 0],
      "1f3bb": [["\u{1F3BB}"], "", "\u{FE819}", ["violin"], 8, 1, 15, 0],
      "1f3bc": [["\u{1F3BC}"], "", "\u{FE81A}", ["musical_score"], 8, 2, 15, 0],
      "1f3bd": [["\u{1F3BD}"], "", "\u{FE7D0}", ["running_shirt_with_sash"], 8, 3, 15, 0],
      "1f3be": [["\u{1F3BE}"], "\uE015", "\u{FE7D3}", ["tennis"], 8, 4, 15, 0],
      "1f3bf": [["\u{1F3BF}"], "\uE013", "\u{FE7D5}", ["ski"], 8, 5, 15, 0],
      "1f3c0": [["\u{1F3C0}"], "\uE42A", "\u{FE7D6}", ["basketball"], 8, 6, 15, 0],
      "1f3c1": [["\u{1F3C1}"], "\uE132", "\u{FE7D7}", ["checkered_flag"], 8, 7, 15, 0],
      "1f3c2": [["\u{1F3C2}"], "", "\u{FE7D8}", ["snowboarder"], 8, 8, 15, 0],
      "1f3c3-200d-2640-fe0f": [["\u{1F3C3}\u200D\u2640\uFE0F", "\u{1F3C3}\u200D\u2640"], "", "", ["woman-running"], 8, 14, 15, 0],
      "1f3c3-200d-2642-fe0f": [["\u{1F3C3}\u200D\u2642\uFE0F", "\u{1F3C3}\u200D\u2642", "\u{1F3C3}"], "", "", ["man-running", "runner", "running"], 8, 20, 15, 0],
      "1f3c4-200d-2640-fe0f": [["\u{1F3C4}\u200D\u2640\uFE0F", "\u{1F3C4}\u200D\u2640"], "", "", ["woman-surfing"], 8, 32, 15, 0],
      "1f3c4-200d-2642-fe0f": [["\u{1F3C4}\u200D\u2642\uFE0F", "\u{1F3C4}\u200D\u2642", "\u{1F3C4}"], "", "", ["man-surfing", "surfer"], 8, 38, 15, 0],
      "1f3c5": [["\u{1F3C5}"], "", "", ["sports_medal"], 8, 50, 15, 0],
      "1f3c6": [["\u{1F3C6}"], "\uE131", "\u{FE7DB}", ["trophy"], 8, 51, 15, 0],
      "1f3c7": [["\u{1F3C7}"], "", "", ["horse_racing"], 8, 52, 15, 0],
      "1f3c8": [["\u{1F3C8}"], "\uE42B", "\u{FE7DD}", ["football"], 8, 58, 15, 0],
      "1f3c9": [["\u{1F3C9}"], "", "", ["rugby_football"], 8, 59, 15, 0],
      "1f3ca-200d-2640-fe0f": [["\u{1F3CA}\u200D\u2640\uFE0F", "\u{1F3CA}\u200D\u2640"], "", "", ["woman-swimming"], 8, 60, 15, 0],
      "1f3ca-200d-2642-fe0f": [["\u{1F3CA}\u200D\u2642\uFE0F", "\u{1F3CA}\u200D\u2642", "\u{1F3CA}"], "", "", ["man-swimming", "swimmer"], 9, 5, 15, 0],
      "1f3cb-fe0f-200d-2640-fe0f": [["\u{1F3CB}\uFE0F\u200D\u2640\uFE0F"], "", "", ["woman-lifting-weights"], 9, 17, 7, 0],
      "1f3cb-fe0f-200d-2642-fe0f": [["\u{1F3CB}\uFE0F\u200D\u2642\uFE0F", "\u{1F3CB}\uFE0F", "\u{1F3CB}"], "", "", ["man-lifting-weights", "weight_lifter"], 9, 23, 7, 0],
      "1f3cc-fe0f-200d-2640-fe0f": [["\u{1F3CC}\uFE0F\u200D\u2640\uFE0F"], "", "", ["woman-golfing"], 9, 35, 7, 0],
      "1f3cc-fe0f-200d-2642-fe0f": [["\u{1F3CC}\uFE0F\u200D\u2642\uFE0F", "\u{1F3CC}\uFE0F", "\u{1F3CC}"], "", "", ["man-golfing", "golfer"], 9, 41, 7, 0],
      "1f3cd-fe0f": [["\u{1F3CD}\uFE0F", "\u{1F3CD}"], "", "", ["racing_motorcycle"], 9, 53, 15, 0],
      "1f3ce-fe0f": [["\u{1F3CE}\uFE0F", "\u{1F3CE}"], "", "", ["racing_car"], 9, 54, 15, 0],
      "1f3cf": [["\u{1F3CF}"], "", "", ["cricket_bat_and_ball"], 9, 55, 15, 0],
      "1f3d0": [["\u{1F3D0}"], "", "", ["volleyball"], 9, 56, 15, 0],
      "1f3d1": [["\u{1F3D1}"], "", "", ["field_hockey_stick_and_ball"], 9, 57, 15, 0],
      "1f3d2": [["\u{1F3D2}"], "", "", ["ice_hockey_stick_and_puck"], 9, 58, 15, 0],
      "1f3d3": [["\u{1F3D3}"], "", "", ["table_tennis_paddle_and_ball"], 9, 59, 15, 0],
      "1f3d4-fe0f": [["\u{1F3D4}\uFE0F", "\u{1F3D4}"], "", "", ["snow_capped_mountain"], 9, 60, 15, 0],
      "1f3d5-fe0f": [["\u{1F3D5}\uFE0F", "\u{1F3D5}"], "", "", ["camping"], 10, 0, 15, 0],
      "1f3d6-fe0f": [["\u{1F3D6}\uFE0F", "\u{1F3D6}"], "", "", ["beach_with_umbrella"], 10, 1, 15, 0],
      "1f3d7-fe0f": [["\u{1F3D7}\uFE0F", "\u{1F3D7}"], "", "", ["building_construction"], 10, 2, 15, 0],
      "1f3d8-fe0f": [["\u{1F3D8}\uFE0F", "\u{1F3D8}"], "", "", ["house_buildings"], 10, 3, 15, 0],
      "1f3d9-fe0f": [["\u{1F3D9}\uFE0F", "\u{1F3D9}"], "", "", ["cityscape"], 10, 4, 15, 0],
      "1f3da-fe0f": [["\u{1F3DA}\uFE0F", "\u{1F3DA}"], "", "", ["derelict_house_building"], 10, 5, 15, 0],
      "1f3db-fe0f": [["\u{1F3DB}\uFE0F", "\u{1F3DB}"], "", "", ["classical_building"], 10, 6, 15, 0],
      "1f3dc-fe0f": [["\u{1F3DC}\uFE0F", "\u{1F3DC}"], "", "", ["desert"], 10, 7, 15, 0],
      "1f3dd-fe0f": [["\u{1F3DD}\uFE0F", "\u{1F3DD}"], "", "", ["desert_island"], 10, 8, 15, 0],
      "1f3de-fe0f": [["\u{1F3DE}\uFE0F", "\u{1F3DE}"], "", "", ["national_park"], 10, 9, 15, 0],
      "1f3df-fe0f": [["\u{1F3DF}\uFE0F", "\u{1F3DF}"], "", "", ["stadium"], 10, 10, 15, 0],
      "1f3e0": [["\u{1F3E0}"], "\uE036", "\u{FE4B0}", ["house"], 10, 11, 15, 0],
      "1f3e1": [["\u{1F3E1}"], "", "\u{FE4B1}", ["house_with_garden"], 10, 12, 15, 0],
      "1f3e2": [["\u{1F3E2}"], "\uE038", "\u{FE4B2}", ["office"], 10, 13, 15, 0],
      "1f3e3": [["\u{1F3E3}"], "\uE153", "\u{FE4B3}", ["post_office"], 10, 14, 15, 0],
      "1f3e4": [["\u{1F3E4}"], "", "", ["european_post_office"], 10, 15, 15, 0],
      "1f3e5": [["\u{1F3E5}"], "\uE155", "\u{FE4B4}", ["hospital"], 10, 16, 15, 0],
      "1f3e6": [["\u{1F3E6}"], "\uE14D", "\u{FE4B5}", ["bank"], 10, 17, 15, 0],
      "1f3e7": [["\u{1F3E7}"], "\uE154", "\u{FE4B6}", ["atm"], 10, 18, 15, 0],
      "1f3e8": [["\u{1F3E8}"], "\uE158", "\u{FE4B7}", ["hotel"], 10, 19, 15, 0],
      "1f3e9": [["\u{1F3E9}"], "\uE501", "\u{FE4B8}", ["love_hotel"], 10, 20, 15, 0],
      "1f3ea": [["\u{1F3EA}"], "\uE156", "\u{FE4B9}", ["convenience_store"], 10, 21, 15, 0],
      "1f3eb": [["\u{1F3EB}"], "\uE157", "\u{FE4BA}", ["school"], 10, 22, 15, 0],
      "1f3ec": [["\u{1F3EC}"], "\uE504", "\u{FE4BD}", ["department_store"], 10, 23, 15, 0],
      "1f3ed": [["\u{1F3ED}"], "\uE508", "\u{FE4C0}", ["factory"], 10, 24, 15, 0],
      "1f3ee": [["\u{1F3EE}"], "", "\u{FE4C2}", ["izakaya_lantern", "lantern"], 10, 25, 15, 0],
      "1f3ef": [["\u{1F3EF}"], "\uE505", "\u{FE4BE}", ["japanese_castle"], 10, 26, 15, 0],
      "1f3f0": [["\u{1F3F0}"], "\uE506", "\u{FE4BF}", ["european_castle"], 10, 27, 15, 0],
      "1f3f3-fe0f-200d-1f308": [["\u{1F3F3}\uFE0F\u200D\u{1F308}", "\u{1F3F3}\u200D\u{1F308}"], "", "", ["rainbow-flag"], 10, 28, 15, 0],
      "1f3f3-fe0f-200d-26a7-fe0f": [["\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F"], "", "", ["transgender_flag"], 10, 29, 7, 0],
      "1f3f3-fe0f": [["\u{1F3F3}\uFE0F", "\u{1F3F3}"], "", "", ["waving_white_flag"], 10, 30, 15, 0],
      "1f3f4-200d-2620-fe0f": [["\u{1F3F4}\u200D\u2620\uFE0F", "\u{1F3F4}\u200D\u2620"], "", "", ["pirate_flag"], 10, 31, 15, 0],
      "1f3f4-e0067-e0062-e0065-e006e-e0067-e007f": [["\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}"], "", "", ["flag-england"], 10, 32, 15, 0],
      "1f3f4-e0067-e0062-e0073-e0063-e0074-e007f": [["\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}"], "", "", ["flag-scotland"], 10, 33, 15, 0],
      "1f3f4-e0067-e0062-e0077-e006c-e0073-e007f": [["\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}"], "", "", ["flag-wales"], 10, 34, 15, 0],
      "1f3f4": [["\u{1F3F4}"], "", "", ["waving_black_flag"], 10, 35, 15, 0],
      "1f3f5-fe0f": [["\u{1F3F5}\uFE0F", "\u{1F3F5}"], "", "", ["rosette"], 10, 36, 15, 0],
      "1f3f7-fe0f": [["\u{1F3F7}\uFE0F", "\u{1F3F7}"], "", "", ["label"], 10, 37, 15, 0],
      "1f3f8": [["\u{1F3F8}"], "", "", ["badminton_racquet_and_shuttlecock"], 10, 38, 15, 0],
      "1f3f9": [["\u{1F3F9}"], "", "", ["bow_and_arrow"], 10, 39, 15, 0],
      "1f3fa": [["\u{1F3FA}"], "", "", ["amphora"], 10, 40, 15, 0],
      "1f3fb": [["\u{1F3FB}"], "", "", ["skin-tone-2"], 10, 41, 15, 0],
      "1f3fc": [["\u{1F3FC}"], "", "", ["skin-tone-3"], 10, 42, 15, 0],
      "1f3fd": [["\u{1F3FD}"], "", "", ["skin-tone-4"], 10, 43, 15, 0],
      "1f3fe": [["\u{1F3FE}"], "", "", ["skin-tone-5"], 10, 44, 15, 0],
      "1f3ff": [["\u{1F3FF}"], "", "", ["skin-tone-6"], 10, 45, 15, 0],
      "1f400": [["\u{1F400}"], "", "", ["rat"], 10, 46, 15, 0],
      "1f401": [["\u{1F401}"], "", "", ["mouse2"], 10, 47, 15, 0],
      "1f402": [["\u{1F402}"], "", "", ["ox"], 10, 48, 15, 0],
      "1f403": [["\u{1F403}"], "", "", ["water_buffalo"], 10, 49, 15, 0],
      "1f404": [["\u{1F404}"], "", "", ["cow2"], 10, 50, 15, 0],
      "1f405": [["\u{1F405}"], "", "", ["tiger2"], 10, 51, 15, 0],
      "1f406": [["\u{1F406}"], "", "", ["leopard"], 10, 52, 15, 0],
      "1f407": [["\u{1F407}"], "", "", ["rabbit2"], 10, 53, 15, 0],
      "1f408-200d-2b1b": [["\u{1F408}\u200D\u2B1B"], "", "", ["black_cat"], 10, 54, 15, 0],
      "1f408": [["\u{1F408}"], "", "", ["cat2"], 10, 55, 15, 0],
      "1f409": [["\u{1F409}"], "", "", ["dragon"], 10, 56, 15, 0],
      "1f40a": [["\u{1F40A}"], "", "", ["crocodile"], 10, 57, 15, 0],
      "1f40b": [["\u{1F40B}"], "", "", ["whale2"], 10, 58, 15, 0],
      "1f40c": [["\u{1F40C}"], "", "\u{FE1B9}", ["snail"], 10, 59, 15, 0],
      "1f40d": [["\u{1F40D}"], "\uE52D", "\u{FE1D3}", ["snake"], 10, 60, 15, 0],
      "1f40e": [["\u{1F40E}"], "\uE134", "\u{FE7DC}", ["racehorse"], 11, 0, 15, 0],
      "1f40f": [["\u{1F40F}"], "", "", ["ram"], 11, 1, 15, 0],
      "1f410": [["\u{1F410}"], "", "", ["goat"], 11, 2, 15, 0],
      "1f411": [["\u{1F411}"], "\uE529", "\u{FE1CF}", ["sheep"], 11, 3, 15, 0],
      "1f412": [["\u{1F412}"], "\uE528", "\u{FE1CE}", ["monkey"], 11, 4, 15, 0],
      "1f413": [["\u{1F413}"], "", "", ["rooster"], 11, 5, 15, 0],
      "1f414": [["\u{1F414}"], "\uE52E", "\u{FE1D4}", ["chicken"], 11, 6, 15, 0],
      "1f415-200d-1f9ba": [["\u{1F415}\u200D\u{1F9BA}"], "", "", ["service_dog"], 11, 7, 15, 0],
      "1f415": [["\u{1F415}"], "", "", ["dog2"], 11, 8, 15, 0],
      "1f416": [["\u{1F416}"], "", "", ["pig2"], 11, 9, 15, 0],
      "1f417": [["\u{1F417}"], "\uE52F", "\u{FE1D5}", ["boar"], 11, 10, 15, 0],
      "1f418": [["\u{1F418}"], "\uE526", "\u{FE1CC}", ["elephant"], 11, 11, 15, 0],
      "1f419": [["\u{1F419}"], "\uE10A", "\u{FE1C5}", ["octopus"], 11, 12, 15, 0],
      "1f41a": [["\u{1F41A}"], "\uE441", "\u{FE1C6}", ["shell"], 11, 13, 15, 0],
      "1f41b": [["\u{1F41B}"], "\uE525", "\u{FE1CB}", ["bug"], 11, 14, 15, 0],
      "1f41c": [["\u{1F41C}"], "", "\u{FE1DA}", ["ant"], 11, 15, 15, 0],
      "1f41d": [["\u{1F41D}"], "", "\u{FE1E1}", ["bee", "honeybee"], 11, 16, 15, 0],
      "1f41e": [["\u{1F41E}"], "", "\u{FE1E2}", ["ladybug", "lady_beetle"], 11, 17, 15, 0],
      "1f41f": [["\u{1F41F}"], "\uE019", "\u{FE1BD}", ["fish"], 11, 18, 15, 0],
      "1f420": [["\u{1F420}"], "\uE522", "\u{FE1C9}", ["tropical_fish"], 11, 19, 15, 0],
      "1f421": [["\u{1F421}"], "", "\u{FE1D9}", ["blowfish"], 11, 20, 15, 0],
      "1f422": [["\u{1F422}"], "", "\u{FE1DC}", ["turtle"], 11, 21, 15, 0],
      "1f423": [["\u{1F423}"], "", "\u{FE1DD}", ["hatching_chick"], 11, 22, 15, 0],
      "1f424": [["\u{1F424}"], "\uE523", "\u{FE1BA}", ["baby_chick"], 11, 23, 15, 0],
      "1f425": [["\u{1F425}"], "", "\u{FE1BB}", ["hatched_chick"], 11, 24, 15, 0],
      "1f426-200d-2b1b": [["\u{1F426}\u200D\u2B1B"], "", "", ["black_bird"], 11, 25, 3, 0],
      "1f426": [["\u{1F426}"], "\uE521", "\u{FE1C8}", ["bird"], 11, 26, 15, 0],
      "1f427": [["\u{1F427}"], "\uE055", "\u{FE1BC}", ["penguin"], 11, 27, 15, 0],
      "1f428": [["\u{1F428}"], "\uE527", "\u{FE1CD}", ["koala"], 11, 28, 15, 0],
      "1f429": [["\u{1F429}"], "", "\u{FE1D8}", ["poodle"], 11, 29, 15, 0],
      "1f42a": [["\u{1F42A}"], "", "", ["dromedary_camel"], 11, 30, 15, 0],
      "1f42b": [["\u{1F42B}"], "\uE530", "\u{FE1D6}", ["camel"], 11, 31, 15, 0],
      "1f42c": [["\u{1F42C}"], "\uE520", "\u{FE1C7}", ["dolphin", "flipper"], 11, 32, 15, 0],
      "1f42d": [["\u{1F42D}"], "\uE053", "\u{FE1C2}", ["mouse"], 11, 33, 15, 0],
      "1f42e": [["\u{1F42E}"], "\uE52B", "\u{FE1D1}", ["cow"], 11, 34, 15, 0],
      "1f42f": [["\u{1F42F}"], "\uE050", "\u{FE1C0}", ["tiger"], 11, 35, 15, 0],
      "1f430": [["\u{1F430}"], "\uE52C", "\u{FE1D2}", ["rabbit"], 11, 36, 15, 0],
      "1f431": [["\u{1F431}"], "\uE04F", "\u{FE1B8}", ["cat"], 11, 37, 15, 0],
      "1f432": [["\u{1F432}"], "", "\u{FE1DE}", ["dragon_face"], 11, 38, 15, 0],
      "1f433": [["\u{1F433}"], "\uE054", "\u{FE1C3}", ["whale"], 11, 39, 15, 0],
      "1f434": [["\u{1F434}"], "\uE01A", "\u{FE1BE}", ["horse"], 11, 40, 15, 0],
      "1f435": [["\u{1F435}"], "\uE109", "\u{FE1C4}", ["monkey_face"], 11, 41, 15, 0],
      "1f436": [["\u{1F436}"], "\uE052", "\u{FE1B7}", ["dog"], 11, 42, 15, 0],
      "1f437": [["\u{1F437}"], "\uE10B", "\u{FE1BF}", ["pig"], 11, 43, 15, 0],
      "1f438": [["\u{1F438}"], "\uE531", "\u{FE1D7}", ["frog"], 11, 44, 15, 0],
      "1f439": [["\u{1F439}"], "\uE524", "\u{FE1CA}", ["hamster"], 11, 45, 15, 0],
      "1f43a": [["\u{1F43A}"], "\uE52A", "\u{FE1D0}", ["wolf"], 11, 46, 15, 0],
      "1f43b-200d-2744-fe0f": [["\u{1F43B}\u200D\u2744\uFE0F", "\u{1F43B}\u200D\u2744"], "", "", ["polar_bear"], 11, 47, 15, 0],
      "1f43b": [["\u{1F43B}"], "\uE051", "\u{FE1C1}", ["bear"], 11, 48, 15, 0],
      "1f43c": [["\u{1F43C}"], "", "\u{FE1DF}", ["panda_face"], 11, 49, 15, 0],
      "1f43d": [["\u{1F43D}"], "", "\u{FE1E0}", ["pig_nose"], 11, 50, 15, 0],
      "1f43e": [["\u{1F43E}"], "", "\u{FE1DB}", ["feet", "paw_prints"], 11, 51, 15, 0],
      "1f43f-fe0f": [["\u{1F43F}\uFE0F", "\u{1F43F}"], "", "", ["chipmunk"], 11, 52, 15, 0],
      "1f440": [["\u{1F440}"], "\uE419", "\u{FE190}", ["eyes"], 11, 53, 15, 0],
      "1f441-fe0f-200d-1f5e8-fe0f": [["\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F"], "", "", ["eye-in-speech-bubble"], 11, 54, 7, 0],
      "1f441-fe0f": [["\u{1F441}\uFE0F", "\u{1F441}"], "", "", ["eye"], 11, 55, 15, 0],
      "1f442": [["\u{1F442}"], "\uE41B", "\u{FE191}", ["ear"], 11, 56, 15, 0],
      "1f443": [["\u{1F443}"], "\uE41A", "\u{FE192}", ["nose"], 12, 1, 15, 0],
      "1f444": [["\u{1F444}"], "\uE41C", "\u{FE193}", ["lips"], 12, 7, 15, 0],
      "1f445": [["\u{1F445}"], "", "\u{FE194}", ["tongue"], 12, 8, 15, 0],
      "1f446": [["\u{1F446}"], "\uE22E", "\u{FEB99}", ["point_up_2"], 12, 9, 15, 0],
      "1f447": [["\u{1F447}"], "\uE22F", "\u{FEB9A}", ["point_down"], 12, 15, 15, 0],
      "1f448": [["\u{1F448}"], "\uE230", "\u{FEB9B}", ["point_left"], 12, 21, 15, 0],
      "1f449": [["\u{1F449}"], "\uE231", "\u{FEB9C}", ["point_right"], 12, 27, 15, 0],
      "1f44a": [["\u{1F44A}"], "\uE00D", "\u{FEB96}", ["facepunch", "punch"], 12, 33, 15, 0],
      "1f44b": [["\u{1F44B}"], "\uE41E", "\u{FEB9D}", ["wave"], 12, 39, 15, 0],
      "1f44c": [["\u{1F44C}"], "\uE420", "\u{FEB9F}", ["ok_hand"], 12, 45, 15, 0],
      "1f44d": [["\u{1F44D}"], "\uE00E", "\u{FEB97}", ["+1", "thumbsup"], 12, 51, 15, 0],
      "1f44e": [["\u{1F44E}"], "\uE421", "\u{FEBA0}", ["-1", "thumbsdown"], 12, 57, 15, 0],
      "1f44f": [["\u{1F44F}"], "\uE41F", "\u{FEB9E}", ["clap"], 13, 2, 15, 0],
      "1f450": [["\u{1F450}"], "\uE422", "\u{FEBA1}", ["open_hands"], 13, 8, 15, 0],
      "1f451": [["\u{1F451}"], "\uE10E", "\u{FE4D1}", ["crown"], 13, 14, 15, 0],
      "1f452": [["\u{1F452}"], "\uE318", "\u{FE4D4}", ["womans_hat"], 13, 15, 15, 0],
      "1f453": [["\u{1F453}"], "", "\u{FE4CE}", ["eyeglasses"], 13, 16, 15, 0],
      "1f454": [["\u{1F454}"], "\uE302", "\u{FE4D3}", ["necktie"], 13, 17, 15, 0],
      "1f455": [["\u{1F455}"], "\uE006", "\u{FE4CF}", ["shirt", "tshirt"], 13, 18, 15, 0],
      "1f456": [["\u{1F456}"], "", "\u{FE4D0}", ["jeans"], 13, 19, 15, 0],
      "1f457": [["\u{1F457}"], "\uE319", "\u{FE4D5}", ["dress"], 13, 20, 15, 0],
      "1f458": [["\u{1F458}"], "\uE321", "\u{FE4D9}", ["kimono"], 13, 21, 15, 0],
      "1f459": [["\u{1F459}"], "\uE322", "\u{FE4DA}", ["bikini"], 13, 22, 15, 0],
      "1f45a": [["\u{1F45A}"], "", "\u{FE4DB}", ["womans_clothes"], 13, 23, 15, 0],
      "1f45b": [["\u{1F45B}"], "", "\u{FE4DC}", ["purse"], 13, 24, 15, 0],
      "1f45c": [["\u{1F45C}"], "\uE323", "\u{FE4F0}", ["handbag"], 13, 25, 15, 0],
      "1f45d": [["\u{1F45D}"], "", "\u{FE4F1}", ["pouch"], 13, 26, 15, 0],
      "1f45e": [["\u{1F45E}"], "", "\u{FE4CC}", ["mans_shoe", "shoe"], 13, 27, 15, 0],
      "1f45f": [["\u{1F45F}"], "\uE007", "\u{FE4CD}", ["athletic_shoe"], 13, 28, 15, 0],
      "1f460": [["\u{1F460}"], "\uE13E", "\u{FE4D6}", ["high_heel"], 13, 29, 15, 0],
      "1f461": [["\u{1F461}"], "\uE31A", "\u{FE4D7}", ["sandal"], 13, 30, 15, 0],
      "1f462": [["\u{1F462}"], "\uE31B", "\u{FE4D8}", ["boot"], 13, 31, 15, 0],
      "1f463": [["\u{1F463}"], "\uE536", "\u{FE553}", ["footprints"], 13, 32, 15, 0],
      "1f464": [["\u{1F464}"], "", "\u{FE19A}", ["bust_in_silhouette"], 13, 33, 15, 0],
      "1f465": [["\u{1F465}"], "", "", ["busts_in_silhouette"], 13, 34, 15, 0],
      "1f466": [["\u{1F466}"], "\uE001", "\u{FE19B}", ["boy"], 13, 35, 15, 0],
      "1f467": [["\u{1F467}"], "\uE002", "\u{FE19C}", ["girl"], 13, 41, 15, 0],
      "1f468-200d-1f33e": [["\u{1F468}\u200D\u{1F33E}"], "", "", ["male-farmer"], 13, 47, 15, 0],
      "1f468-200d-1f373": [["\u{1F468}\u200D\u{1F373}"], "", "", ["male-cook"], 13, 53, 15, 0],
      "1f468-200d-1f37c": [["\u{1F468}\u200D\u{1F37C}"], "", "", ["man_feeding_baby"], 13, 59, 15, 0],
      "1f468-200d-1f393": [["\u{1F468}\u200D\u{1F393}"], "", "", ["male-student"], 14, 4, 15, 0],
      "1f468-200d-1f3a4": [["\u{1F468}\u200D\u{1F3A4}"], "", "", ["male-singer"], 14, 10, 15, 0],
      "1f468-200d-1f3a8": [["\u{1F468}\u200D\u{1F3A8}"], "", "", ["male-artist"], 14, 16, 15, 0],
      "1f468-200d-1f3eb": [["\u{1F468}\u200D\u{1F3EB}"], "", "", ["male-teacher"], 14, 22, 15, 0],
      "1f468-200d-1f3ed": [["\u{1F468}\u200D\u{1F3ED}"], "", "", ["male-factory-worker"], 14, 28, 15, 0],
      "1f468-200d-1f466-200d-1f466": [["\u{1F468}\u200D\u{1F466}\u200D\u{1F466}"], "", "", ["man-boy-boy"], 14, 34, 15, 0],
      "1f468-200d-1f466": [["\u{1F468}\u200D\u{1F466}"], "", "", ["man-boy"], 14, 35, 15, 0],
      "1f468-200d-1f467-200d-1f466": [["\u{1F468}\u200D\u{1F467}\u200D\u{1F466}"], "", "", ["man-girl-boy"], 14, 36, 15, 0],
      "1f468-200d-1f467-200d-1f467": [["\u{1F468}\u200D\u{1F467}\u200D\u{1F467}"], "", "", ["man-girl-girl"], 14, 37, 15, 0],
      "1f468-200d-1f467": [["\u{1F468}\u200D\u{1F467}"], "", "", ["man-girl"], 14, 38, 15, 0],
      "1f468-200d-1f468-200d-1f466": [["\u{1F468}\u200D\u{1F468}\u200D\u{1F466}"], "", "", ["man-man-boy"], 14, 39, 15, 0],
      "1f468-200d-1f468-200d-1f466-200d-1f466": [["\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}"], "", "", ["man-man-boy-boy"], 14, 40, 15, 0],
      "1f468-200d-1f468-200d-1f467": [["\u{1F468}\u200D\u{1F468}\u200D\u{1F467}"], "", "", ["man-man-girl"], 14, 41, 15, 0],
      "1f468-200d-1f468-200d-1f467-200d-1f466": [["\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}"], "", "", ["man-man-girl-boy"], 14, 42, 15, 0],
      "1f468-200d-1f468-200d-1f467-200d-1f467": [["\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}"], "", "", ["man-man-girl-girl"], 14, 43, 15, 0],
      "1f468-200d-1f469-200d-1f466": [["\u{1F468}\u200D\u{1F469}\u200D\u{1F466}", "\u{1F46A}"], "", "", ["man-woman-boy", "family"], 14, 44, 15, 0],
      "1f468-200d-1f469-200d-1f466-200d-1f466": [["\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}"], "", "", ["man-woman-boy-boy"], 14, 45, 15, 0],
      "1f468-200d-1f469-200d-1f467": [["\u{1F468}\u200D\u{1F469}\u200D\u{1F467}"], "", "", ["man-woman-girl"], 14, 46, 15, 0],
      "1f468-200d-1f469-200d-1f467-200d-1f466": [["\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}"], "", "", ["man-woman-girl-boy"], 14, 47, 15, 0],
      "1f468-200d-1f469-200d-1f467-200d-1f467": [["\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}"], "", "", ["man-woman-girl-girl"], 14, 48, 15, 0],
      "1f468-200d-1f4bb": [["\u{1F468}\u200D\u{1F4BB}"], "", "", ["male-technologist"], 14, 49, 15, 0],
      "1f468-200d-1f4bc": [["\u{1F468}\u200D\u{1F4BC}"], "", "", ["male-office-worker"], 14, 55, 15, 0],
      "1f468-200d-1f527": [["\u{1F468}\u200D\u{1F527}"], "", "", ["male-mechanic"], 15, 0, 15, 0],
      "1f468-200d-1f52c": [["\u{1F468}\u200D\u{1F52C}"], "", "", ["male-scientist"], 15, 6, 15, 0],
      "1f468-200d-1f680": [["\u{1F468}\u200D\u{1F680}"], "", "", ["male-astronaut"], 15, 12, 15, 0],
      "1f468-200d-1f692": [["\u{1F468}\u200D\u{1F692}"], "", "", ["male-firefighter"], 15, 18, 15, 0],
      "1f468-200d-1f9af": [["\u{1F468}\u200D\u{1F9AF}"], "", "", ["man_with_probing_cane"], 15, 24, 15, 0],
      "1f468-200d-1f9b0": [["\u{1F468}\u200D\u{1F9B0}"], "", "", ["red_haired_man"], 15, 30, 15, 0],
      "1f468-200d-1f9b1": [["\u{1F468}\u200D\u{1F9B1}"], "", "", ["curly_haired_man"], 15, 36, 15, 0],
      "1f468-200d-1f9b2": [["\u{1F468}\u200D\u{1F9B2}"], "", "", ["bald_man"], 15, 42, 15, 0],
      "1f468-200d-1f9b3": [["\u{1F468}\u200D\u{1F9B3}"], "", "", ["white_haired_man"], 15, 48, 15, 0],
      "1f468-200d-1f9bc": [["\u{1F468}\u200D\u{1F9BC}"], "", "", ["man_in_motorized_wheelchair"], 15, 54, 15, 0],
      "1f468-200d-1f9bd": [["\u{1F468}\u200D\u{1F9BD}"], "", "", ["man_in_manual_wheelchair"], 15, 60, 15, 0],
      "1f468-200d-2695-fe0f": [["\u{1F468}\u200D\u2695\uFE0F", "\u{1F468}\u200D\u2695"], "", "", ["male-doctor"], 16, 5, 15, 0],
      "1f468-200d-2696-fe0f": [["\u{1F468}\u200D\u2696\uFE0F", "\u{1F468}\u200D\u2696"], "", "", ["male-judge"], 16, 11, 15, 0],
      "1f468-200d-2708-fe0f": [["\u{1F468}\u200D\u2708\uFE0F", "\u{1F468}\u200D\u2708"], "", "", ["male-pilot"], 16, 17, 15, 0],
      "1f468-200d-2764-fe0f-200d-1f468": [["\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}", "\u{1F468}\u200D\u2764\u200D\u{1F468}"], "", "", ["man-heart-man"], 16, 23, 15, 0],
      "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468": [["\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}", "\u{1F468}\u200D\u2764\u200D\u{1F48B}\u200D\u{1F468}"], "", "", ["man-kiss-man"], 16, 49, 15, 0],
      "1f468": [["\u{1F468}"], "\uE004", "\u{FE19D}", ["man"], 17, 14, 15, 0],
      "1f469-200d-1f33e": [["\u{1F469}\u200D\u{1F33E}"], "", "", ["female-farmer"], 17, 20, 15, 0],
      "1f469-200d-1f373": [["\u{1F469}\u200D\u{1F373}"], "", "", ["female-cook"], 17, 26, 15, 0],
      "1f469-200d-1f37c": [["\u{1F469}\u200D\u{1F37C}"], "", "", ["woman_feeding_baby"], 17, 32, 15, 0],
      "1f469-200d-1f393": [["\u{1F469}\u200D\u{1F393}"], "", "", ["female-student"], 17, 38, 15, 0],
      "1f469-200d-1f3a4": [["\u{1F469}\u200D\u{1F3A4}"], "", "", ["female-singer"], 17, 44, 15, 0],
      "1f469-200d-1f3a8": [["\u{1F469}\u200D\u{1F3A8}"], "", "", ["female-artist"], 17, 50, 15, 0],
      "1f469-200d-1f3eb": [["\u{1F469}\u200D\u{1F3EB}"], "", "", ["female-teacher"], 17, 56, 15, 0],
      "1f469-200d-1f3ed": [["\u{1F469}\u200D\u{1F3ED}"], "", "", ["female-factory-worker"], 18, 1, 15, 0],
      "1f469-200d-1f466-200d-1f466": [["\u{1F469}\u200D\u{1F466}\u200D\u{1F466}"], "", "", ["woman-boy-boy"], 18, 7, 15, 0],
      "1f469-200d-1f466": [["\u{1F469}\u200D\u{1F466}"], "", "", ["woman-boy"], 18, 8, 15, 0],
      "1f469-200d-1f467-200d-1f466": [["\u{1F469}\u200D\u{1F467}\u200D\u{1F466}"], "", "", ["woman-girl-boy"], 18, 9, 15, 0],
      "1f469-200d-1f467-200d-1f467": [["\u{1F469}\u200D\u{1F467}\u200D\u{1F467}"], "", "", ["woman-girl-girl"], 18, 10, 15, 0],
      "1f469-200d-1f467": [["\u{1F469}\u200D\u{1F467}"], "", "", ["woman-girl"], 18, 11, 15, 0],
      "1f469-200d-1f469-200d-1f466": [["\u{1F469}\u200D\u{1F469}\u200D\u{1F466}"], "", "", ["woman-woman-boy"], 18, 12, 15, 0],
      "1f469-200d-1f469-200d-1f466-200d-1f466": [["\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}"], "", "", ["woman-woman-boy-boy"], 18, 13, 15, 0],
      "1f469-200d-1f469-200d-1f467": [["\u{1F469}\u200D\u{1F469}\u200D\u{1F467}"], "", "", ["woman-woman-girl"], 18, 14, 15, 0],
      "1f469-200d-1f469-200d-1f467-200d-1f466": [["\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}"], "", "", ["woman-woman-girl-boy"], 18, 15, 15, 0],
      "1f469-200d-1f469-200d-1f467-200d-1f467": [["\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}"], "", "", ["woman-woman-girl-girl"], 18, 16, 15, 0],
      "1f469-200d-1f4bb": [["\u{1F469}\u200D\u{1F4BB}"], "", "", ["female-technologist"], 18, 17, 15, 0],
      "1f469-200d-1f4bc": [["\u{1F469}\u200D\u{1F4BC}"], "", "", ["female-office-worker"], 18, 23, 15, 0],
      "1f469-200d-1f527": [["\u{1F469}\u200D\u{1F527}"], "", "", ["female-mechanic"], 18, 29, 15, 0],
      "1f469-200d-1f52c": [["\u{1F469}\u200D\u{1F52C}"], "", "", ["female-scientist"], 18, 35, 15, 0],
      "1f469-200d-1f680": [["\u{1F469}\u200D\u{1F680}"], "", "", ["female-astronaut"], 18, 41, 15, 0],
      "1f469-200d-1f692": [["\u{1F469}\u200D\u{1F692}"], "", "", ["female-firefighter"], 18, 47, 15, 0],
      "1f469-200d-1f9af": [["\u{1F469}\u200D\u{1F9AF}"], "", "", ["woman_with_probing_cane"], 18, 53, 15, 0],
      "1f469-200d-1f9b0": [["\u{1F469}\u200D\u{1F9B0}"], "", "", ["red_haired_woman"], 18, 59, 15, 0],
      "1f469-200d-1f9b1": [["\u{1F469}\u200D\u{1F9B1}"], "", "", ["curly_haired_woman"], 19, 4, 15, 0],
      "1f469-200d-1f9b2": [["\u{1F469}\u200D\u{1F9B2}"], "", "", ["bald_woman"], 19, 10, 15, 0],
      "1f469-200d-1f9b3": [["\u{1F469}\u200D\u{1F9B3}"], "", "", ["white_haired_woman"], 19, 16, 15, 0],
      "1f469-200d-1f9bc": [["\u{1F469}\u200D\u{1F9BC}"], "", "", ["woman_in_motorized_wheelchair"], 19, 22, 15, 0],
      "1f469-200d-1f9bd": [["\u{1F469}\u200D\u{1F9BD}"], "", "", ["woman_in_manual_wheelchair"], 19, 28, 15, 0],
      "1f469-200d-2695-fe0f": [["\u{1F469}\u200D\u2695\uFE0F", "\u{1F469}\u200D\u2695"], "", "", ["female-doctor"], 19, 34, 15, 0],
      "1f469-200d-2696-fe0f": [["\u{1F469}\u200D\u2696\uFE0F", "\u{1F469}\u200D\u2696"], "", "", ["female-judge"], 19, 40, 15, 0],
      "1f469-200d-2708-fe0f": [["\u{1F469}\u200D\u2708\uFE0F", "\u{1F469}\u200D\u2708"], "", "", ["female-pilot"], 19, 46, 15, 0],
      "1f469-200d-2764-fe0f-200d-1f468": [["\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}", "\u{1F469}\u200D\u2764\u200D\u{1F468}"], "", "", ["woman-heart-man"], 19, 52, 15, 0],
      "1f469-200d-2764-fe0f-200d-1f469": [["\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}", "\u{1F469}\u200D\u2764\u200D\u{1F469}"], "", "", ["woman-heart-woman"], 20, 17, 15, 0],
      "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468": [["\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}", "\u{1F469}\u200D\u2764\u200D\u{1F48B}\u200D\u{1F468}"], "", "", ["woman-kiss-man"], 20, 43, 15, 0],
      "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469": [["\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}", "\u{1F469}\u200D\u2764\u200D\u{1F48B}\u200D\u{1F469}"], "", "", ["woman-kiss-woman"], 21, 8, 15, 0],
      "1f469": [["\u{1F469}"], "\uE005", "\u{FE19E}", ["woman"], 21, 34, 15, 0],
      "1f46b": [["\u{1F46B}"], "\uE428", "\u{FE1A0}", ["man_and_woman_holding_hands", "woman_and_man_holding_hands", "couple"], 21, 41, 15, 0],
      "1f46c": [["\u{1F46C}"], "", "", ["two_men_holding_hands", "men_holding_hands"], 22, 6, 15, 0],
      "1f46d": [["\u{1F46D}"], "", "", ["two_women_holding_hands", "women_holding_hands"], 22, 32, 15, 0],
      "1f46e-200d-2640-fe0f": [["\u{1F46E}\u200D\u2640\uFE0F", "\u{1F46E}\u200D\u2640"], "", "", ["female-police-officer"], 22, 58, 15, 0],
      "1f46e-200d-2642-fe0f": [["\u{1F46E}\u200D\u2642\uFE0F", "\u{1F46E}\u200D\u2642", "\u{1F46E}"], "", "", ["male-police-officer", "cop"], 23, 3, 15, 0],
      "1f46f-200d-2640-fe0f": [["\u{1F46F}\u200D\u2640\uFE0F", "\u{1F46F}\u200D\u2640", "\u{1F46F}"], "", "", ["women-with-bunny-ears-partying", "woman-with-bunny-ears-partying", "dancers"], 23, 15, 15, 0],
      "1f46f-200d-2642-fe0f": [["\u{1F46F}\u200D\u2642\uFE0F", "\u{1F46F}\u200D\u2642"], "", "", ["men-with-bunny-ears-partying", "man-with-bunny-ears-partying"], 23, 16, 15, 0],
      "1f470-200d-2640-fe0f": [["\u{1F470}\u200D\u2640\uFE0F", "\u{1F470}\u200D\u2640"], "", "", ["woman_with_veil"], 23, 18, 15, 0],
      "1f470-200d-2642-fe0f": [["\u{1F470}\u200D\u2642\uFE0F", "\u{1F470}\u200D\u2642"], "", "", ["man_with_veil"], 23, 24, 15, 0],
      "1f470": [["\u{1F470}"], "", "\u{FE1A3}", ["bride_with_veil"], 23, 30, 15, 0],
      "1f471-200d-2640-fe0f": [["\u{1F471}\u200D\u2640\uFE0F", "\u{1F471}\u200D\u2640"], "", "", ["blond-haired-woman"], 23, 36, 15, 0],
      "1f471-200d-2642-fe0f": [["\u{1F471}\u200D\u2642\uFE0F", "\u{1F471}\u200D\u2642", "\u{1F471}"], "", "", ["blond-haired-man", "person_with_blond_hair"], 23, 42, 15, 0],
      "1f472": [["\u{1F472}"], "\uE516", "\u{FE1A5}", ["man_with_gua_pi_mao"], 23, 54, 15, 0],
      "1f473-200d-2640-fe0f": [["\u{1F473}\u200D\u2640\uFE0F", "\u{1F473}\u200D\u2640"], "", "", ["woman-wearing-turban"], 23, 60, 15, 0],
      "1f473-200d-2642-fe0f": [["\u{1F473}\u200D\u2642\uFE0F", "\u{1F473}\u200D\u2642", "\u{1F473}"], "", "", ["man-wearing-turban", "man_with_turban"], 24, 5, 15, 0],
      "1f474": [["\u{1F474}"], "\uE518", "\u{FE1A7}", ["older_man"], 24, 17, 15, 0],
      "1f475": [["\u{1F475}"], "\uE519", "\u{FE1A8}", ["older_woman"], 24, 23, 15, 0],
      "1f476": [["\u{1F476}"], "\uE51A", "\u{FE1A9}", ["baby"], 24, 29, 15, 0],
      "1f477-200d-2640-fe0f": [["\u{1F477}\u200D\u2640\uFE0F", "\u{1F477}\u200D\u2640"], "", "", ["female-construction-worker"], 24, 35, 15, 0],
      "1f477-200d-2642-fe0f": [["\u{1F477}\u200D\u2642\uFE0F", "\u{1F477}\u200D\u2642", "\u{1F477}"], "", "", ["male-construction-worker", "construction_worker"], 24, 41, 15, 0],
      "1f478": [["\u{1F478}"], "\uE51C", "\u{FE1AB}", ["princess"], 24, 53, 15, 0],
      "1f479": [["\u{1F479}"], "", "\u{FE1AC}", ["japanese_ogre"], 24, 59, 15, 0],
      "1f47a": [["\u{1F47A}"], "", "\u{FE1AD}", ["japanese_goblin"], 24, 60, 15, 0],
      "1f47b": [["\u{1F47B}"], "\uE11B", "\u{FE1AE}", ["ghost"], 25, 0, 15, 0],
      "1f47c": [["\u{1F47C}"], "\uE04E", "\u{FE1AF}", ["angel"], 25, 1, 15, 0],
      "1f47d": [["\u{1F47D}"], "\uE10C", "\u{FE1B0}", ["alien"], 25, 7, 15, 0],
      "1f47e": [["\u{1F47E}"], "\uE12B", "\u{FE1B1}", ["space_invader"], 25, 8, 15, 0],
      "1f47f": [["\u{1F47F}"], "\uE11A", "\u{FE1B2}", ["imp"], 25, 9, 15, 0],
      "1f480": [["\u{1F480}"], "\uE11C", "\u{FE1B3}", ["skull"], 25, 10, 15, 0],
      "1f481-200d-2640-fe0f": [["\u{1F481}\u200D\u2640\uFE0F", "\u{1F481}\u200D\u2640", "\u{1F481}"], "", "", ["woman-tipping-hand", "information_desk_person"], 25, 11, 15, 0],
      "1f481-200d-2642-fe0f": [["\u{1F481}\u200D\u2642\uFE0F", "\u{1F481}\u200D\u2642"], "", "", ["man-tipping-hand"], 25, 17, 15, 0],
      "1f482-200d-2640-fe0f": [["\u{1F482}\u200D\u2640\uFE0F", "\u{1F482}\u200D\u2640"], "", "", ["female-guard"], 25, 29, 15, 0],
      "1f482-200d-2642-fe0f": [["\u{1F482}\u200D\u2642\uFE0F", "\u{1F482}\u200D\u2642", "\u{1F482}"], "", "", ["male-guard", "guardsman"], 25, 35, 15, 0],
      "1f483": [["\u{1F483}"], "\uE51F", "\u{FE1B6}", ["dancer"], 25, 47, 15, 0],
      "1f484": [["\u{1F484}"], "\uE31C", "\u{FE195}", ["lipstick"], 25, 53, 15, 0],
      "1f485": [["\u{1F485}"], "\uE31D", "\u{FE196}", ["nail_care"], 25, 54, 15, 0],
      "1f486-200d-2640-fe0f": [["\u{1F486}\u200D\u2640\uFE0F", "\u{1F486}\u200D\u2640", "\u{1F486}"], "", "", ["woman-getting-massage", "massage"], 25, 60, 15, 0],
      "1f486-200d-2642-fe0f": [["\u{1F486}\u200D\u2642\uFE0F", "\u{1F486}\u200D\u2642"], "", "", ["man-getting-massage"], 26, 5, 15, 0],
      "1f487-200d-2640-fe0f": [["\u{1F487}\u200D\u2640\uFE0F", "\u{1F487}\u200D\u2640", "\u{1F487}"], "", "", ["woman-getting-haircut", "haircut"], 26, 17, 15, 0],
      "1f487-200d-2642-fe0f": [["\u{1F487}\u200D\u2642\uFE0F", "\u{1F487}\u200D\u2642"], "", "", ["man-getting-haircut"], 26, 23, 15, 0],
      "1f488": [["\u{1F488}"], "\uE320", "\u{FE199}", ["barber"], 26, 35, 15, 0],
      "1f489": [["\u{1F489}"], "\uE13B", "\u{FE509}", ["syringe"], 26, 36, 15, 0],
      "1f48a": [["\u{1F48A}"], "\uE30F", "\u{FE50A}", ["pill"], 26, 37, 15, 0],
      "1f48b": [["\u{1F48B}"], "\uE003", "\u{FE823}", ["kiss"], 26, 38, 15, 0],
      "1f48c": [["\u{1F48C}"], "", "\u{FE824}", ["love_letter"], 26, 39, 15, 0],
      "1f48d": [["\u{1F48D}"], "\uE034", "\u{FE825}", ["ring"], 26, 40, 15, 0],
      "1f48e": [["\u{1F48E}"], "\uE035", "\u{FE826}", ["gem"], 26, 41, 15, 0],
      "1f48f": [["\u{1F48F}"], "\uE111", "\u{FE827}", ["couplekiss"], 26, 42, 15, 0],
      "1f490": [["\u{1F490}"], "\uE306", "\u{FE828}", ["bouquet"], 27, 7, 15, 0],
      "1f491": [["\u{1F491}"], "\uE425", "\u{FE829}", ["couple_with_heart"], 27, 8, 15, 0],
      "1f492": [["\u{1F492}"], "\uE43D", "\u{FE82A}", ["wedding"], 27, 34, 15, 0],
      "1f493": [["\u{1F493}"], "\uE327", "\u{FEB0D}", ["heartbeat"], 27, 35, 15, 0],
      "1f494": [["\u{1F494}"], "\uE023", "\u{FEB0E}", ["broken_heart"], 27, 36, 15, 0, "</3"],
      "1f495": [["\u{1F495}"], "", "\u{FEB0F}", ["two_hearts"], 27, 37, 15, 0],
      "1f496": [["\u{1F496}"], "", "\u{FEB10}", ["sparkling_heart"], 27, 38, 15, 0],
      "1f497": [["\u{1F497}"], "\uE328", "\u{FEB11}", ["heartpulse"], 27, 39, 15, 0],
      "1f498": [["\u{1F498}"], "\uE329", "\u{FEB12}", ["cupid"], 27, 40, 15, 0],
      "1f499": [["\u{1F499}"], "\uE32A", "\u{FEB13}", ["blue_heart"], 27, 41, 15, 0, "<3"],
      "1f49a": [["\u{1F49A}"], "\uE32B", "\u{FEB14}", ["green_heart"], 27, 42, 15, 0, "<3"],
      "1f49b": [["\u{1F49B}"], "\uE32C", "\u{FEB15}", ["yellow_heart"], 27, 43, 15, 0, "<3"],
      "1f49c": [["\u{1F49C}"], "\uE32D", "\u{FEB16}", ["purple_heart"], 27, 44, 15, 0, "<3"],
      "1f49d": [["\u{1F49D}"], "\uE437", "\u{FEB17}", ["gift_heart"], 27, 45, 15, 0],
      "1f49e": [["\u{1F49E}"], "", "\u{FEB18}", ["revolving_hearts"], 27, 46, 15, 0],
      "1f49f": [["\u{1F49F}"], "\uE204", "\u{FEB19}", ["heart_decoration"], 27, 47, 15, 0],
      "1f4a0": [["\u{1F4A0}"], "", "\u{FEB55}", ["diamond_shape_with_a_dot_inside"], 27, 48, 15, 0],
      "1f4a1": [["\u{1F4A1}"], "\uE10F", "\u{FEB56}", ["bulb"], 27, 49, 15, 0],
      "1f4a2": [["\u{1F4A2}"], "\uE334", "\u{FEB57}", ["anger"], 27, 50, 15, 0],
      "1f4a3": [["\u{1F4A3}"], "\uE311", "\u{FEB58}", ["bomb"], 27, 51, 15, 0],
      "1f4a4": [["\u{1F4A4}"], "\uE13C", "\u{FEB59}", ["zzz"], 27, 52, 15, 0],
      "1f4a5": [["\u{1F4A5}"], "", "\u{FEB5A}", ["boom", "collision"], 27, 53, 15, 0],
      "1f4a6": [["\u{1F4A6}"], "\uE331", "\u{FEB5B}", ["sweat_drops"], 27, 54, 15, 0],
      "1f4a7": [["\u{1F4A7}"], "", "\u{FEB5C}", ["droplet"], 27, 55, 15, 0],
      "1f4a8": [["\u{1F4A8}"], "\uE330", "\u{FEB5D}", ["dash"], 27, 56, 15, 0],
      "1f4a9": [["\u{1F4A9}"], "\uE05A", "\u{FE4F4}", ["hankey", "poop", "shit"], 27, 57, 15, 0],
      "1f4aa": [["\u{1F4AA}"], "\uE14C", "\u{FEB5E}", ["muscle"], 27, 58, 15, 0],
      "1f4ab": [["\u{1F4AB}"], "", "\u{FEB5F}", ["dizzy"], 28, 3, 15, 0],
      "1f4ac": [["\u{1F4AC}"], "", "\u{FE532}", ["speech_balloon"], 28, 4, 15, 0],
      "1f4ad": [["\u{1F4AD}"], "", "", ["thought_balloon"], 28, 5, 15, 0],
      "1f4ae": [["\u{1F4AE}"], "", "\u{FEB7A}", ["white_flower"], 28, 6, 15, 0],
      "1f4af": [["\u{1F4AF}"], "", "\u{FEB7B}", ["100"], 28, 7, 15, 0],
      "1f4b0": [["\u{1F4B0}"], "\uE12F", "\u{FE4DD}", ["moneybag"], 28, 8, 15, 0],
      "1f4b1": [["\u{1F4B1}"], "\uE149", "\u{FE4DE}", ["currency_exchange"], 28, 9, 15, 0],
      "1f4b2": [["\u{1F4B2}"], "", "\u{FE4E0}", ["heavy_dollar_sign"], 28, 10, 15, 0],
      "1f4b3": [["\u{1F4B3}"], "", "\u{FE4E1}", ["credit_card"], 28, 11, 15, 0],
      "1f4b4": [["\u{1F4B4}"], "", "\u{FE4E2}", ["yen"], 28, 12, 15, 0],
      "1f4b5": [["\u{1F4B5}"], "", "\u{FE4E3}", ["dollar"], 28, 13, 15, 0],
      "1f4b6": [["\u{1F4B6}"], "", "", ["euro"], 28, 14, 15, 0],
      "1f4b7": [["\u{1F4B7}"], "", "", ["pound"], 28, 15, 15, 0],
      "1f4b8": [["\u{1F4B8}"], "", "\u{FE4E4}", ["money_with_wings"], 28, 16, 15, 0],
      "1f4b9": [["\u{1F4B9}"], "\uE14A", "\u{FE4DF}", ["chart"], 28, 17, 15, 0],
      "1f4ba": [["\u{1F4BA}"], "\uE11F", "\u{FE537}", ["seat"], 28, 18, 15, 0],
      "1f4bb": [["\u{1F4BB}"], "\uE00C", "\u{FE538}", ["computer"], 28, 19, 15, 0],
      "1f4bc": [["\u{1F4BC}"], "\uE11E", "\u{FE53B}", ["briefcase"], 28, 20, 15, 0],
      "1f4bd": [["\u{1F4BD}"], "\uE316", "\u{FE53C}", ["minidisc"], 28, 21, 15, 0],
      "1f4be": [["\u{1F4BE}"], "", "\u{FE53D}", ["floppy_disk"], 28, 22, 15, 0],
      "1f4bf": [["\u{1F4BF}"], "\uE126", "\u{FE81D}", ["cd"], 28, 23, 15, 0],
      "1f4c0": [["\u{1F4C0}"], "\uE127", "\u{FE81E}", ["dvd"], 28, 24, 15, 0],
      "1f4c1": [["\u{1F4C1}"], "", "\u{FE543}", ["file_folder"], 28, 25, 15, 0],
      "1f4c2": [["\u{1F4C2}"], "", "\u{FE544}", ["open_file_folder"], 28, 26, 15, 0],
      "1f4c3": [["\u{1F4C3}"], "", "\u{FE540}", ["page_with_curl"], 28, 27, 15, 0],
      "1f4c4": [["\u{1F4C4}"], "", "\u{FE541}", ["page_facing_up"], 28, 28, 15, 0],
      "1f4c5": [["\u{1F4C5}"], "", "\u{FE542}", ["date"], 28, 29, 15, 0],
      "1f4c6": [["\u{1F4C6}"], "", "\u{FE549}", ["calendar"], 28, 30, 15, 0],
      "1f4c7": [["\u{1F4C7}"], "", "\u{FE54D}", ["card_index"], 28, 31, 15, 0],
      "1f4c8": [["\u{1F4C8}"], "", "\u{FE54B}", ["chart_with_upwards_trend"], 28, 32, 15, 0],
      "1f4c9": [["\u{1F4C9}"], "", "\u{FE54C}", ["chart_with_downwards_trend"], 28, 33, 15, 0],
      "1f4ca": [["\u{1F4CA}"], "", "\u{FE54A}", ["bar_chart"], 28, 34, 15, 0],
      "1f4cb": [["\u{1F4CB}"], "", "\u{FE548}", ["clipboard"], 28, 35, 15, 0],
      "1f4cc": [["\u{1F4CC}"], "", "\u{FE54E}", ["pushpin"], 28, 36, 15, 0],
      "1f4cd": [["\u{1F4CD}"], "", "\u{FE53F}", ["round_pushpin"], 28, 37, 15, 0],
      "1f4ce": [["\u{1F4CE}"], "", "\u{FE53A}", ["paperclip"], 28, 38, 15, 0],
      "1f4cf": [["\u{1F4CF}"], "", "\u{FE550}", ["straight_ruler"], 28, 39, 15, 0],
      "1f4d0": [["\u{1F4D0}"], "", "\u{FE551}", ["triangular_ruler"], 28, 40, 15, 0],
      "1f4d1": [["\u{1F4D1}"], "", "\u{FE552}", ["bookmark_tabs"], 28, 41, 15, 0],
      "1f4d2": [["\u{1F4D2}"], "", "\u{FE54F}", ["ledger"], 28, 42, 15, 0],
      "1f4d3": [["\u{1F4D3}"], "", "\u{FE545}", ["notebook"], 28, 43, 15, 0],
      "1f4d4": [["\u{1F4D4}"], "", "\u{FE547}", ["notebook_with_decorative_cover"], 28, 44, 15, 0],
      "1f4d5": [["\u{1F4D5}"], "", "\u{FE502}", ["closed_book"], 28, 45, 15, 0],
      "1f4d6": [["\u{1F4D6}"], "\uE148", "\u{FE546}", ["book", "open_book"], 28, 46, 15, 0],
      "1f4d7": [["\u{1F4D7}"], "", "\u{FE4FF}", ["green_book"], 28, 47, 15, 0],
      "1f4d8": [["\u{1F4D8}"], "", "\u{FE500}", ["blue_book"], 28, 48, 15, 0],
      "1f4d9": [["\u{1F4D9}"], "", "\u{FE501}", ["orange_book"], 28, 49, 15, 0],
      "1f4da": [["\u{1F4DA}"], "", "\u{FE503}", ["books"], 28, 50, 15, 0],
      "1f4db": [["\u{1F4DB}"], "", "\u{FE504}", ["name_badge"], 28, 51, 15, 0],
      "1f4dc": [["\u{1F4DC}"], "", "\u{FE4FD}", ["scroll"], 28, 52, 15, 0],
      "1f4dd": [["\u{1F4DD}"], "\uE301", "\u{FE527}", ["memo", "pencil"], 28, 53, 15, 0],
      "1f4de": [["\u{1F4DE}"], "", "\u{FE524}", ["telephone_receiver"], 28, 54, 15, 0],
      "1f4df": [["\u{1F4DF}"], "", "\u{FE522}", ["pager"], 28, 55, 15, 0],
      "1f4e0": [["\u{1F4E0}"], "\uE00B", "\u{FE528}", ["fax"], 28, 56, 15, 0],
      "1f4e1": [["\u{1F4E1}"], "\uE14B", "\u{FE531}", ["satellite_antenna"], 28, 57, 15, 0],
      "1f4e2": [["\u{1F4E2}"], "\uE142", "\u{FE52F}", ["loudspeaker"], 28, 58, 15, 0],
      "1f4e3": [["\u{1F4E3}"], "\uE317", "\u{FE530}", ["mega"], 28, 59, 15, 0],
      "1f4e4": [["\u{1F4E4}"], "", "\u{FE533}", ["outbox_tray"], 28, 60, 15, 0],
      "1f4e5": [["\u{1F4E5}"], "", "\u{FE534}", ["inbox_tray"], 29, 0, 15, 0],
      "1f4e6": [["\u{1F4E6}"], "", "\u{FE535}", ["package"], 29, 1, 15, 0],
      "1f4e7": [["\u{1F4E7}"], "", "\u{FEB92}", ["e-mail"], 29, 2, 15, 0],
      "1f4e8": [["\u{1F4E8}"], "", "\u{FE52A}", ["incoming_envelope"], 29, 3, 15, 0],
      "1f4e9": [["\u{1F4E9}"], "\uE103", "\u{FE52B}", ["envelope_with_arrow"], 29, 4, 15, 0],
      "1f4ea": [["\u{1F4EA}"], "", "\u{FE52C}", ["mailbox_closed"], 29, 5, 15, 0],
      "1f4eb": [["\u{1F4EB}"], "\uE101", "\u{FE52D}", ["mailbox"], 29, 6, 15, 0],
      "1f4ec": [["\u{1F4EC}"], "", "", ["mailbox_with_mail"], 29, 7, 15, 0],
      "1f4ed": [["\u{1F4ED}"], "", "", ["mailbox_with_no_mail"], 29, 8, 15, 0],
      "1f4ee": [["\u{1F4EE}"], "\uE102", "\u{FE52E}", ["postbox"], 29, 9, 15, 0],
      "1f4ef": [["\u{1F4EF}"], "", "", ["postal_horn"], 29, 10, 15, 0],
      "1f4f0": [["\u{1F4F0}"], "", "\u{FE822}", ["newspaper"], 29, 11, 15, 0],
      "1f4f1": [["\u{1F4F1}"], "\uE00A", "\u{FE525}", ["iphone"], 29, 12, 15, 0],
      "1f4f2": [["\u{1F4F2}"], "\uE104", "\u{FE526}", ["calling"], 29, 13, 15, 0],
      "1f4f3": [["\u{1F4F3}"], "\uE250", "\u{FE839}", ["vibration_mode"], 29, 14, 15, 0],
      "1f4f4": [["\u{1F4F4}"], "\uE251", "\u{FE83A}", ["mobile_phone_off"], 29, 15, 15, 0],
      "1f4f5": [["\u{1F4F5}"], "", "", ["no_mobile_phones"], 29, 16, 15, 0],
      "1f4f6": [["\u{1F4F6}"], "\uE20B", "\u{FE838}", ["signal_strength"], 29, 17, 15, 0],
      "1f4f7": [["\u{1F4F7}"], "\uE008", "\u{FE4EF}", ["camera"], 29, 18, 15, 0],
      "1f4f8": [["\u{1F4F8}"], "", "", ["camera_with_flash"], 29, 19, 15, 0],
      "1f4f9": [["\u{1F4F9}"], "", "\u{FE4F9}", ["video_camera"], 29, 20, 15, 0],
      "1f4fa": [["\u{1F4FA}"], "\uE12A", "\u{FE81C}", ["tv"], 29, 21, 15, 0],
      "1f4fb": [["\u{1F4FB}"], "\uE128", "\u{FE81F}", ["radio"], 29, 22, 15, 0],
      "1f4fc": [["\u{1F4FC}"], "\uE129", "\u{FE820}", ["vhs"], 29, 23, 15, 0],
      "1f4fd-fe0f": [["\u{1F4FD}\uFE0F", "\u{1F4FD}"], "", "", ["film_projector"], 29, 24, 15, 0],
      "1f4ff": [["\u{1F4FF}"], "", "", ["prayer_beads"], 29, 25, 15, 0],
      "1f500": [["\u{1F500}"], "", "", ["twisted_rightwards_arrows"], 29, 26, 15, 0],
      "1f501": [["\u{1F501}"], "", "", ["repeat"], 29, 27, 15, 0],
      "1f502": [["\u{1F502}"], "", "", ["repeat_one"], 29, 28, 15, 0],
      "1f503": [["\u{1F503}"], "", "\u{FEB91}", ["arrows_clockwise"], 29, 29, 15, 0],
      "1f504": [["\u{1F504}"], "", "", ["arrows_counterclockwise"], 29, 30, 15, 0],
      "1f505": [["\u{1F505}"], "", "", ["low_brightness"], 29, 31, 15, 0],
      "1f506": [["\u{1F506}"], "", "", ["high_brightness"], 29, 32, 15, 0],
      "1f507": [["\u{1F507}"], "", "", ["mute"], 29, 33, 15, 0],
      "1f508": [["\u{1F508}"], "", "", ["speaker"], 29, 34, 15, 0],
      "1f509": [["\u{1F509}"], "", "", ["sound"], 29, 35, 15, 0],
      "1f50a": [["\u{1F50A}"], "\uE141", "\u{FE821}", ["loud_sound"], 29, 36, 15, 0],
      "1f50b": [["\u{1F50B}"], "", "\u{FE4FC}", ["battery"], 29, 37, 15, 0],
      "1f50c": [["\u{1F50C}"], "", "\u{FE4FE}", ["electric_plug"], 29, 38, 15, 0],
      "1f50d": [["\u{1F50D}"], "\uE114", "\u{FEB85}", ["mag"], 29, 39, 15, 0],
      "1f50e": [["\u{1F50E}"], "", "\u{FEB8D}", ["mag_right"], 29, 40, 15, 0],
      "1f50f": [["\u{1F50F}"], "", "\u{FEB90}", ["lock_with_ink_pen"], 29, 41, 15, 0],
      "1f510": [["\u{1F510}"], "", "\u{FEB8A}", ["closed_lock_with_key"], 29, 42, 15, 0],
      "1f511": [["\u{1F511}"], "\uE03F", "\u{FEB82}", ["key"], 29, 43, 15, 0],
      "1f512": [["\u{1F512}"], "\uE144", "\u{FEB86}", ["lock"], 29, 44, 15, 0],
      "1f513": [["\u{1F513}"], "\uE145", "\u{FEB87}", ["unlock"], 29, 45, 15, 0],
      "1f514": [["\u{1F514}"], "\uE325", "\u{FE4F2}", ["bell"], 29, 46, 15, 0],
      "1f515": [["\u{1F515}"], "", "", ["no_bell"], 29, 47, 15, 0],
      "1f516": [["\u{1F516}"], "", "\u{FEB8F}", ["bookmark"], 29, 48, 15, 0],
      "1f517": [["\u{1F517}"], "", "\u{FEB4B}", ["link"], 29, 49, 15, 0],
      "1f518": [["\u{1F518}"], "", "\u{FEB8C}", ["radio_button"], 29, 50, 15, 0],
      "1f519": [["\u{1F519}"], "", "\u{FEB8E}", ["back"], 29, 51, 15, 0],
      "1f51a": [["\u{1F51A}"], "", "\u{FE01A}", ["end"], 29, 52, 15, 0],
      "1f51b": [["\u{1F51B}"], "", "\u{FE019}", ["on"], 29, 53, 15, 0],
      "1f51c": [["\u{1F51C}"], "", "\u{FE018}", ["soon"], 29, 54, 15, 0],
      "1f51d": [["\u{1F51D}"], "\uE24C", "\u{FEB42}", ["top"], 29, 55, 15, 0],
      "1f51e": [["\u{1F51E}"], "\uE207", "\u{FEB25}", ["underage"], 29, 56, 15, 0],
      "1f51f": [["\u{1F51F}"], "", "\u{FE83B}", ["keycap_ten"], 29, 57, 15, 0],
      "1f520": [["\u{1F520}"], "", "\u{FEB7C}", ["capital_abcd"], 29, 58, 15, 0],
      "1f521": [["\u{1F521}"], "", "\u{FEB7D}", ["abcd"], 29, 59, 15, 0],
      "1f522": [["\u{1F522}"], "", "\u{FEB7E}", ["1234"], 29, 60, 15, 0],
      "1f523": [["\u{1F523}"], "", "\u{FEB7F}", ["symbols"], 30, 0, 15, 0],
      "1f524": [["\u{1F524}"], "", "\u{FEB80}", ["abc"], 30, 1, 15, 0],
      "1f525": [["\u{1F525}"], "\uE11D", "\u{FE4F6}", ["fire"], 30, 2, 15, 0],
      "1f526": [["\u{1F526}"], "", "\u{FE4FB}", ["flashlight"], 30, 3, 15, 0],
      "1f527": [["\u{1F527}"], "", "\u{FE4C9}", ["wrench"], 30, 4, 15, 0],
      "1f528": [["\u{1F528}"], "\uE116", "\u{FE4CA}", ["hammer"], 30, 5, 15, 0],
      "1f529": [["\u{1F529}"], "", "\u{FE4CB}", ["nut_and_bolt"], 30, 6, 15, 0],
      "1f52a": [["\u{1F52A}"], "", "\u{FE4FA}", ["hocho", "knife"], 30, 7, 15, 0],
      "1f52b": [["\u{1F52B}"], "\uE113", "\u{FE4F5}", ["gun"], 30, 8, 15, 0],
      "1f52c": [["\u{1F52C}"], "", "", ["microscope"], 30, 9, 15, 0],
      "1f52d": [["\u{1F52D}"], "", "", ["telescope"], 30, 10, 15, 0],
      "1f52e": [["\u{1F52E}"], "", "\u{FE4F7}", ["crystal_ball"], 30, 11, 15, 0],
      "1f52f": [["\u{1F52F}"], "\uE23E", "\u{FE4F8}", ["six_pointed_star"], 30, 12, 15, 0],
      "1f530": [["\u{1F530}"], "\uE209", "\u{FE044}", ["beginner"], 30, 13, 15, 0],
      "1f531": [["\u{1F531}"], "\uE031", "\u{FE4D2}", ["trident"], 30, 14, 15, 0],
      "1f532": [["\u{1F532}"], "\uE21A", "\u{FEB64}", ["black_square_button"], 30, 15, 15, 0],
      "1f533": [["\u{1F533}"], "\uE21B", "\u{FEB67}", ["white_square_button"], 30, 16, 15, 0],
      "1f534": [["\u{1F534}"], "\uE219", "\u{FEB63}", ["red_circle"], 30, 17, 15, 0],
      "1f535": [["\u{1F535}"], "", "\u{FEB64}", ["large_blue_circle"], 30, 18, 15, 0],
      "1f536": [["\u{1F536}"], "", "\u{FEB73}", ["large_orange_diamond"], 30, 19, 15, 0],
      "1f537": [["\u{1F537}"], "", "\u{FEB74}", ["large_blue_diamond"], 30, 20, 15, 0],
      "1f538": [["\u{1F538}"], "", "\u{FEB75}", ["small_orange_diamond"], 30, 21, 15, 0],
      "1f539": [["\u{1F539}"], "", "\u{FEB76}", ["small_blue_diamond"], 30, 22, 15, 0],
      "1f53a": [["\u{1F53A}"], "", "\u{FEB78}", ["small_red_triangle"], 30, 23, 15, 0],
      "1f53b": [["\u{1F53B}"], "", "\u{FEB79}", ["small_red_triangle_down"], 30, 24, 15, 0],
      "1f53c": [["\u{1F53C}"], "", "\u{FEB01}", ["arrow_up_small"], 30, 25, 15, 0],
      "1f53d": [["\u{1F53D}"], "", "\u{FEB00}", ["arrow_down_small"], 30, 26, 15, 0],
      "1f549-fe0f": [["\u{1F549}\uFE0F", "\u{1F549}"], "", "", ["om_symbol"], 30, 27, 15, 0],
      "1f54a-fe0f": [["\u{1F54A}\uFE0F", "\u{1F54A}"], "", "", ["dove_of_peace"], 30, 28, 15, 0],
      "1f54b": [["\u{1F54B}"], "", "", ["kaaba"], 30, 29, 15, 0],
      "1f54c": [["\u{1F54C}"], "", "", ["mosque"], 30, 30, 15, 0],
      "1f54d": [["\u{1F54D}"], "", "", ["synagogue"], 30, 31, 15, 0],
      "1f54e": [["\u{1F54E}"], "", "", ["menorah_with_nine_branches"], 30, 32, 15, 0],
      "1f550": [["\u{1F550}"], "\uE024", "\u{FE01E}", ["clock1"], 30, 33, 15, 0],
      "1f551": [["\u{1F551}"], "\uE025", "\u{FE01F}", ["clock2"], 30, 34, 15, 0],
      "1f552": [["\u{1F552}"], "\uE026", "\u{FE020}", ["clock3"], 30, 35, 15, 0],
      "1f553": [["\u{1F553}"], "\uE027", "\u{FE021}", ["clock4"], 30, 36, 15, 0],
      "1f554": [["\u{1F554}"], "\uE028", "\u{FE022}", ["clock5"], 30, 37, 15, 0],
      "1f555": [["\u{1F555}"], "\uE029", "\u{FE023}", ["clock6"], 30, 38, 15, 0],
      "1f556": [["\u{1F556}"], "\uE02A", "\u{FE024}", ["clock7"], 30, 39, 15, 0],
      "1f557": [["\u{1F557}"], "\uE02B", "\u{FE025}", ["clock8"], 30, 40, 15, 0],
      "1f558": [["\u{1F558}"], "\uE02C", "\u{FE026}", ["clock9"], 30, 41, 15, 0],
      "1f559": [["\u{1F559}"], "\uE02D", "\u{FE027}", ["clock10"], 30, 42, 15, 0],
      "1f55a": [["\u{1F55A}"], "\uE02E", "\u{FE028}", ["clock11"], 30, 43, 15, 0],
      "1f55b": [["\u{1F55B}"], "\uE02F", "\u{FE029}", ["clock12"], 30, 44, 15, 0],
      "1f55c": [["\u{1F55C}"], "", "", ["clock130"], 30, 45, 15, 0],
      "1f55d": [["\u{1F55D}"], "", "", ["clock230"], 30, 46, 15, 0],
      "1f55e": [["\u{1F55E}"], "", "", ["clock330"], 30, 47, 15, 0],
      "1f55f": [["\u{1F55F}"], "", "", ["clock430"], 30, 48, 15, 0],
      "1f560": [["\u{1F560}"], "", "", ["clock530"], 30, 49, 15, 0],
      "1f561": [["\u{1F561}"], "", "", ["clock630"], 30, 50, 15, 0],
      "1f562": [["\u{1F562}"], "", "", ["clock730"], 30, 51, 15, 0],
      "1f563": [["\u{1F563}"], "", "", ["clock830"], 30, 52, 15, 0],
      "1f564": [["\u{1F564}"], "", "", ["clock930"], 30, 53, 15, 0],
      "1f565": [["\u{1F565}"], "", "", ["clock1030"], 30, 54, 15, 0],
      "1f566": [["\u{1F566}"], "", "", ["clock1130"], 30, 55, 15, 0],
      "1f567": [["\u{1F567}"], "", "", ["clock1230"], 30, 56, 15, 0],
      "1f56f-fe0f": [["\u{1F56F}\uFE0F", "\u{1F56F}"], "", "", ["candle"], 30, 57, 15, 0],
      "1f570-fe0f": [["\u{1F570}\uFE0F", "\u{1F570}"], "", "", ["mantelpiece_clock"], 30, 58, 15, 0],
      "1f573-fe0f": [["\u{1F573}\uFE0F", "\u{1F573}"], "", "", ["hole"], 30, 59, 15, 0],
      "1f574-fe0f": [["\u{1F574}\uFE0F", "\u{1F574}"], "", "", ["man_in_business_suit_levitating"], 30, 60, 15, 0],
      "1f575-fe0f-200d-2640-fe0f": [["\u{1F575}\uFE0F\u200D\u2640\uFE0F"], "", "", ["female-detective"], 31, 5, 7, 0],
      "1f575-fe0f-200d-2642-fe0f": [["\u{1F575}\uFE0F\u200D\u2642\uFE0F", "\u{1F575}\uFE0F", "\u{1F575}"], "", "", ["male-detective", "sleuth_or_spy"], 31, 11, 7, 0],
      "1f576-fe0f": [["\u{1F576}\uFE0F", "\u{1F576}"], "", "", ["dark_sunglasses"], 31, 23, 15, 0],
      "1f577-fe0f": [["\u{1F577}\uFE0F", "\u{1F577}"], "", "", ["spider"], 31, 24, 15, 0],
      "1f578-fe0f": [["\u{1F578}\uFE0F", "\u{1F578}"], "", "", ["spider_web"], 31, 25, 15, 0],
      "1f579-fe0f": [["\u{1F579}\uFE0F", "\u{1F579}"], "", "", ["joystick"], 31, 26, 15, 0],
      "1f57a": [["\u{1F57A}"], "", "", ["man_dancing"], 31, 27, 15, 0],
      "1f587-fe0f": [["\u{1F587}\uFE0F", "\u{1F587}"], "", "", ["linked_paperclips"], 31, 33, 15, 0],
      "1f58a-fe0f": [["\u{1F58A}\uFE0F", "\u{1F58A}"], "", "", ["lower_left_ballpoint_pen"], 31, 34, 15, 0],
      "1f58b-fe0f": [["\u{1F58B}\uFE0F", "\u{1F58B}"], "", "", ["lower_left_fountain_pen"], 31, 35, 15, 0],
      "1f58c-fe0f": [["\u{1F58C}\uFE0F", "\u{1F58C}"], "", "", ["lower_left_paintbrush"], 31, 36, 15, 0],
      "1f58d-fe0f": [["\u{1F58D}\uFE0F", "\u{1F58D}"], "", "", ["lower_left_crayon"], 31, 37, 15, 0],
      "1f590-fe0f": [["\u{1F590}\uFE0F", "\u{1F590}"], "", "", ["raised_hand_with_fingers_splayed"], 31, 38, 15, 0],
      "1f595": [["\u{1F595}"], "", "", ["middle_finger", "reversed_hand_with_middle_finger_extended"], 31, 44, 15, 0],
      "1f596": [["\u{1F596}"], "", "", ["spock-hand"], 31, 50, 15, 0],
      "1f5a4": [["\u{1F5A4}"], "", "", ["black_heart"], 31, 56, 15, 0],
      "1f5a5-fe0f": [["\u{1F5A5}\uFE0F", "\u{1F5A5}"], "", "", ["desktop_computer"], 31, 57, 15, 0],
      "1f5a8-fe0f": [["\u{1F5A8}\uFE0F", "\u{1F5A8}"], "", "", ["printer"], 31, 58, 15, 0],
      "1f5b1-fe0f": [["\u{1F5B1}\uFE0F", "\u{1F5B1}"], "", "", ["three_button_mouse"], 31, 59, 15, 0],
      "1f5b2-fe0f": [["\u{1F5B2}\uFE0F", "\u{1F5B2}"], "", "", ["trackball"], 31, 60, 15, 0],
      "1f5bc-fe0f": [["\u{1F5BC}\uFE0F", "\u{1F5BC}"], "", "", ["frame_with_picture"], 32, 0, 15, 0],
      "1f5c2-fe0f": [["\u{1F5C2}\uFE0F", "\u{1F5C2}"], "", "", ["card_index_dividers"], 32, 1, 15, 0],
      "1f5c3-fe0f": [["\u{1F5C3}\uFE0F", "\u{1F5C3}"], "", "", ["card_file_box"], 32, 2, 15, 0],
      "1f5c4-fe0f": [["\u{1F5C4}\uFE0F", "\u{1F5C4}"], "", "", ["file_cabinet"], 32, 3, 15, 0],
      "1f5d1-fe0f": [["\u{1F5D1}\uFE0F", "\u{1F5D1}"], "", "", ["wastebasket"], 32, 4, 15, 0],
      "1f5d2-fe0f": [["\u{1F5D2}\uFE0F", "\u{1F5D2}"], "", "", ["spiral_note_pad"], 32, 5, 15, 0],
      "1f5d3-fe0f": [["\u{1F5D3}\uFE0F", "\u{1F5D3}"], "", "", ["spiral_calendar_pad"], 32, 6, 15, 0],
      "1f5dc-fe0f": [["\u{1F5DC}\uFE0F", "\u{1F5DC}"], "", "", ["compression"], 32, 7, 15, 0],
      "1f5dd-fe0f": [["\u{1F5DD}\uFE0F", "\u{1F5DD}"], "", "", ["old_key"], 32, 8, 15, 0],
      "1f5de-fe0f": [["\u{1F5DE}\uFE0F", "\u{1F5DE}"], "", "", ["rolled_up_newspaper"], 32, 9, 15, 0],
      "1f5e1-fe0f": [["\u{1F5E1}\uFE0F", "\u{1F5E1}"], "", "", ["dagger_knife"], 32, 10, 15, 0],
      "1f5e3-fe0f": [["\u{1F5E3}\uFE0F", "\u{1F5E3}"], "", "", ["speaking_head_in_silhouette"], 32, 11, 15, 0],
      "1f5e8-fe0f": [["\u{1F5E8}\uFE0F", "\u{1F5E8}"], "", "", ["left_speech_bubble"], 32, 12, 15, 0],
      "1f5ef-fe0f": [["\u{1F5EF}\uFE0F", "\u{1F5EF}"], "", "", ["right_anger_bubble"], 32, 13, 15, 0],
      "1f5f3-fe0f": [["\u{1F5F3}\uFE0F", "\u{1F5F3}"], "", "", ["ballot_box_with_ballot"], 32, 14, 15, 0],
      "1f5fa-fe0f": [["\u{1F5FA}\uFE0F", "\u{1F5FA}"], "", "", ["world_map"], 32, 15, 15, 0],
      "1f5fb": [["\u{1F5FB}"], "\uE03B", "\u{FE4C3}", ["mount_fuji"], 32, 16, 15, 0],
      "1f5fc": [["\u{1F5FC}"], "\uE509", "\u{FE4C4}", ["tokyo_tower"], 32, 17, 15, 0],
      "1f5fd": [["\u{1F5FD}"], "\uE51D", "\u{FE4C6}", ["statue_of_liberty"], 32, 18, 15, 0],
      "1f5fe": [["\u{1F5FE}"], "", "\u{FE4C7}", ["japan"], 32, 19, 15, 0],
      "1f5ff": [["\u{1F5FF}"], "", "\u{FE4C8}", ["moyai"], 32, 20, 15, 0],
      "1f600": [["\u{1F600}"], "", "", ["grinning"], 32, 21, 15, 0, ":D"],
      "1f601": [["\u{1F601}"], "\uE404", "\u{FE333}", ["grin"], 32, 22, 15, 0],
      "1f602": [["\u{1F602}"], "\uE412", "\u{FE334}", ["joy"], 32, 23, 15, 0],
      "1f603": [["\u{1F603}"], "\uE057", "\u{FE330}", ["smiley"], 32, 24, 15, 0, ":)"],
      "1f604": [["\u{1F604}"], "\uE415", "\u{FE338}", ["smile"], 32, 25, 15, 0, ":)"],
      "1f605": [["\u{1F605}"], "", "\u{FE331}", ["sweat_smile"], 32, 26, 15, 0],
      "1f606": [["\u{1F606}"], "", "\u{FE332}", ["laughing", "satisfied"], 32, 27, 15, 0],
      "1f607": [["\u{1F607}"], "", "", ["innocent"], 32, 28, 15, 0],
      "1f608": [["\u{1F608}"], "", "", ["smiling_imp"], 32, 29, 15, 0],
      "1f609": [["\u{1F609}"], "\uE405", "\u{FE347}", ["wink"], 32, 30, 15, 0, ";)"],
      "1f60a": [["\u{1F60A}"], "\uE056", "\u{FE335}", ["blush"], 32, 31, 15, 0, ":)"],
      "1f60b": [["\u{1F60B}"], "", "\u{FE32B}", ["yum"], 32, 32, 15, 0],
      "1f60c": [["\u{1F60C}"], "\uE40A", "\u{FE33E}", ["relieved"], 32, 33, 15, 0],
      "1f60d": [["\u{1F60D}"], "\uE106", "\u{FE327}", ["heart_eyes"], 32, 34, 15, 0],
      "1f60e": [["\u{1F60E}"], "", "", ["sunglasses"], 32, 35, 15, 0],
      "1f60f": [["\u{1F60F}"], "\uE402", "\u{FE343}", ["smirk"], 32, 36, 15, 0],
      "1f610": [["\u{1F610}"], "", "", ["neutral_face"], 32, 37, 15, 0],
      "1f611": [["\u{1F611}"], "", "", ["expressionless"], 32, 38, 15, 0],
      "1f612": [["\u{1F612}"], "\uE40E", "\u{FE326}", ["unamused"], 32, 39, 15, 0, ":("],
      "1f613": [["\u{1F613}"], "\uE108", "\u{FE344}", ["sweat"], 32, 40, 15, 0],
      "1f614": [["\u{1F614}"], "\uE403", "\u{FE340}", ["pensive"], 32, 41, 15, 0],
      "1f615": [["\u{1F615}"], "", "", ["confused"], 32, 42, 15, 0],
      "1f616": [["\u{1F616}"], "\uE407", "\u{FE33F}", ["confounded"], 32, 43, 15, 0],
      "1f617": [["\u{1F617}"], "", "", ["kissing"], 32, 44, 15, 0],
      "1f618": [["\u{1F618}"], "\uE418", "\u{FE32C}", ["kissing_heart"], 32, 45, 15, 0],
      "1f619": [["\u{1F619}"], "", "", ["kissing_smiling_eyes"], 32, 46, 15, 0],
      "1f61a": [["\u{1F61A}"], "\uE417", "\u{FE32D}", ["kissing_closed_eyes"], 32, 47, 15, 0],
      "1f61b": [["\u{1F61B}"], "", "", ["stuck_out_tongue"], 32, 48, 15, 0, ":p"],
      "1f61c": [["\u{1F61C}"], "\uE105", "\u{FE329}", ["stuck_out_tongue_winking_eye"], 32, 49, 15, 0, ";p"],
      "1f61d": [["\u{1F61D}"], "\uE409", "\u{FE32A}", ["stuck_out_tongue_closed_eyes"], 32, 50, 15, 0],
      "1f61e": [["\u{1F61E}"], "\uE058", "\u{FE323}", ["disappointed"], 32, 51, 15, 0, ":("],
      "1f61f": [["\u{1F61F}"], "", "", ["worried"], 32, 52, 15, 0],
      "1f620": [["\u{1F620}"], "\uE059", "\u{FE320}", ["angry"], 32, 53, 15, 0],
      "1f621": [["\u{1F621}"], "\uE416", "\u{FE33D}", ["rage"], 32, 54, 15, 0],
      "1f622": [["\u{1F622}"], "\uE413", "\u{FE339}", ["cry"], 32, 55, 15, 0, ":'("],
      "1f623": [["\u{1F623}"], "\uE406", "\u{FE33C}", ["persevere"], 32, 56, 15, 0],
      "1f624": [["\u{1F624}"], "", "\u{FE328}", ["triumph"], 32, 57, 15, 0],
      "1f625": [["\u{1F625}"], "\uE401", "\u{FE345}", ["disappointed_relieved"], 32, 58, 15, 0],
      "1f626": [["\u{1F626}"], "", "", ["frowning"], 32, 59, 15, 0],
      "1f627": [["\u{1F627}"], "", "", ["anguished"], 32, 60, 15, 0],
      "1f628": [["\u{1F628}"], "\uE40B", "\u{FE33B}", ["fearful"], 33, 0, 15, 0],
      "1f629": [["\u{1F629}"], "", "\u{FE321}", ["weary"], 33, 1, 15, 0],
      "1f62a": [["\u{1F62A}"], "\uE408", "\u{FE342}", ["sleepy"], 33, 2, 15, 0],
      "1f62b": [["\u{1F62B}"], "", "\u{FE346}", ["tired_face"], 33, 3, 15, 0],
      "1f62c": [["\u{1F62C}"], "", "", ["grimacing"], 33, 4, 15, 0],
      "1f62d": [["\u{1F62D}"], "\uE411", "\u{FE33A}", ["sob"], 33, 5, 15, 0, ":'("],
      "1f62e-200d-1f4a8": [["\u{1F62E}\u200D\u{1F4A8}"], "", "", ["face_exhaling"], 33, 6, 15, 0],
      "1f62e": [["\u{1F62E}"], "", "", ["open_mouth"], 33, 7, 15, 0],
      "1f62f": [["\u{1F62F}"], "", "", ["hushed"], 33, 8, 15, 0],
      "1f630": [["\u{1F630}"], "\uE40F", "\u{FE325}", ["cold_sweat"], 33, 9, 15, 0],
      "1f631": [["\u{1F631}"], "\uE107", "\u{FE341}", ["scream"], 33, 10, 15, 0],
      "1f632": [["\u{1F632}"], "\uE410", "\u{FE322}", ["astonished"], 33, 11, 15, 0],
      "1f633": [["\u{1F633}"], "\uE40D", "\u{FE32F}", ["flushed"], 33, 12, 15, 0],
      "1f634": [["\u{1F634}"], "", "", ["sleeping"], 33, 13, 15, 0],
      "1f635-200d-1f4ab": [["\u{1F635}\u200D\u{1F4AB}"], "", "", ["face_with_spiral_eyes"], 33, 14, 15, 0],
      "1f635": [["\u{1F635}"], "", "\u{FE324}", ["dizzy_face"], 33, 15, 15, 0],
      "1f636-200d-1f32b-fe0f": [["\u{1F636}\u200D\u{1F32B}\uFE0F", "\u{1F636}\u200D\u{1F32B}"], "", "", ["face_in_clouds"], 33, 16, 15, 0],
      "1f636": [["\u{1F636}"], "", "", ["no_mouth"], 33, 17, 15, 0],
      "1f637": [["\u{1F637}"], "\uE40C", "\u{FE32E}", ["mask"], 33, 18, 15, 0],
      "1f638": [["\u{1F638}"], "", "\u{FE349}", ["smile_cat"], 33, 19, 15, 0],
      "1f639": [["\u{1F639}"], "", "\u{FE34A}", ["joy_cat"], 33, 20, 15, 0],
      "1f63a": [["\u{1F63A}"], "", "\u{FE348}", ["smiley_cat"], 33, 21, 15, 0],
      "1f63b": [["\u{1F63B}"], "", "\u{FE34C}", ["heart_eyes_cat"], 33, 22, 15, 0],
      "1f63c": [["\u{1F63C}"], "", "\u{FE34F}", ["smirk_cat"], 33, 23, 15, 0],
      "1f63d": [["\u{1F63D}"], "", "\u{FE34B}", ["kissing_cat"], 33, 24, 15, 0],
      "1f63e": [["\u{1F63E}"], "", "\u{FE34E}", ["pouting_cat"], 33, 25, 15, 0],
      "1f63f": [["\u{1F63F}"], "", "\u{FE34D}", ["crying_cat_face"], 33, 26, 15, 0],
      "1f640": [["\u{1F640}"], "", "\u{FE350}", ["scream_cat"], 33, 27, 15, 0],
      "1f641": [["\u{1F641}"], "", "", ["slightly_frowning_face"], 33, 28, 15, 0],
      "1f642": [["\u{1F642}"], "", "", ["slightly_smiling_face"], 33, 29, 15, 0],
      "1f643": [["\u{1F643}"], "", "", ["upside_down_face"], 33, 30, 15, 0],
      "1f644": [["\u{1F644}"], "", "", ["face_with_rolling_eyes"], 33, 31, 15, 0],
      "1f645-200d-2640-fe0f": [["\u{1F645}\u200D\u2640\uFE0F", "\u{1F645}\u200D\u2640", "\u{1F645}"], "", "", ["woman-gesturing-no", "no_good"], 33, 32, 15, 0],
      "1f645-200d-2642-fe0f": [["\u{1F645}\u200D\u2642\uFE0F", "\u{1F645}\u200D\u2642"], "", "", ["man-gesturing-no"], 33, 38, 15, 0],
      "1f646-200d-2640-fe0f": [["\u{1F646}\u200D\u2640\uFE0F", "\u{1F646}\u200D\u2640", "\u{1F646}"], "", "", ["woman-gesturing-ok", "ok_woman"], 33, 50, 15, 0],
      "1f646-200d-2642-fe0f": [["\u{1F646}\u200D\u2642\uFE0F", "\u{1F646}\u200D\u2642"], "", "", ["man-gesturing-ok"], 33, 56, 15, 0],
      "1f647-200d-2640-fe0f": [["\u{1F647}\u200D\u2640\uFE0F", "\u{1F647}\u200D\u2640"], "", "", ["woman-bowing"], 34, 7, 15, 0],
      "1f647-200d-2642-fe0f": [["\u{1F647}\u200D\u2642\uFE0F", "\u{1F647}\u200D\u2642"], "", "", ["man-bowing"], 34, 13, 15, 0],
      "1f647": [["\u{1F647}"], "\uE426", "\u{FE353}", ["bow"], 34, 19, 15, 0],
      "1f648": [["\u{1F648}"], "", "\u{FE354}", ["see_no_evil"], 34, 25, 15, 0],
      "1f649": [["\u{1F649}"], "", "\u{FE356}", ["hear_no_evil"], 34, 26, 15, 0],
      "1f64a": [["\u{1F64A}"], "", "\u{FE355}", ["speak_no_evil"], 34, 27, 15, 0],
      "1f64b-200d-2640-fe0f": [["\u{1F64B}\u200D\u2640\uFE0F", "\u{1F64B}\u200D\u2640", "\u{1F64B}"], "", "", ["woman-raising-hand", "raising_hand"], 34, 28, 15, 0],
      "1f64b-200d-2642-fe0f": [["\u{1F64B}\u200D\u2642\uFE0F", "\u{1F64B}\u200D\u2642"], "", "", ["man-raising-hand"], 34, 34, 15, 0],
      "1f64c": [["\u{1F64C}"], "\uE427", "\u{FE358}", ["raised_hands"], 34, 46, 15, 0],
      "1f64d-200d-2640-fe0f": [["\u{1F64D}\u200D\u2640\uFE0F", "\u{1F64D}\u200D\u2640", "\u{1F64D}"], "", "", ["woman-frowning", "person_frowning"], 34, 52, 15, 0],
      "1f64d-200d-2642-fe0f": [["\u{1F64D}\u200D\u2642\uFE0F", "\u{1F64D}\u200D\u2642"], "", "", ["man-frowning"], 34, 58, 15, 0],
      "1f64e-200d-2640-fe0f": [["\u{1F64E}\u200D\u2640\uFE0F", "\u{1F64E}\u200D\u2640", "\u{1F64E}"], "", "", ["woman-pouting", "person_with_pouting_face"], 35, 9, 15, 0],
      "1f64e-200d-2642-fe0f": [["\u{1F64E}\u200D\u2642\uFE0F", "\u{1F64E}\u200D\u2642"], "", "", ["man-pouting"], 35, 15, 15, 0],
      "1f64f": [["\u{1F64F}"], "\uE41D", "\u{FE35B}", ["pray"], 35, 27, 15, 0],
      "1f680": [["\u{1F680}"], "\uE10D", "\u{FE7ED}", ["rocket"], 35, 33, 15, 0],
      "1f681": [["\u{1F681}"], "", "", ["helicopter"], 35, 34, 15, 0],
      "1f682": [["\u{1F682}"], "", "", ["steam_locomotive"], 35, 35, 15, 0],
      "1f683": [["\u{1F683}"], "\uE01E", "\u{FE7DF}", ["railway_car"], 35, 36, 15, 0],
      "1f684": [["\u{1F684}"], "\uE435", "\u{FE7E2}", ["bullettrain_side"], 35, 37, 15, 0],
      "1f685": [["\u{1F685}"], "\uE01F", "\u{FE7E3}", ["bullettrain_front"], 35, 38, 15, 0],
      "1f686": [["\u{1F686}"], "", "", ["train2"], 35, 39, 15, 0],
      "1f687": [["\u{1F687}"], "\uE434", "\u{FE7E0}", ["metro"], 35, 40, 15, 0],
      "1f688": [["\u{1F688}"], "", "", ["light_rail"], 35, 41, 15, 0],
      "1f689": [["\u{1F689}"], "\uE039", "\u{FE7EC}", ["station"], 35, 42, 15, 0],
      "1f68a": [["\u{1F68A}"], "", "", ["tram"], 35, 43, 15, 0],
      "1f68b": [["\u{1F68B}"], "", "", ["train"], 35, 44, 15, 0],
      "1f68c": [["\u{1F68C}"], "\uE159", "\u{FE7E6}", ["bus"], 35, 45, 15, 0],
      "1f68d": [["\u{1F68D}"], "", "", ["oncoming_bus"], 35, 46, 15, 0],
      "1f68e": [["\u{1F68E}"], "", "", ["trolleybus"], 35, 47, 15, 0],
      "1f68f": [["\u{1F68F}"], "\uE150", "\u{FE7E7}", ["busstop"], 35, 48, 15, 0],
      "1f690": [["\u{1F690}"], "", "", ["minibus"], 35, 49, 15, 0],
      "1f691": [["\u{1F691}"], "\uE431", "\u{FE7F3}", ["ambulance"], 35, 50, 15, 0],
      "1f692": [["\u{1F692}"], "\uE430", "\u{FE7F2}", ["fire_engine"], 35, 51, 15, 0],
      "1f693": [["\u{1F693}"], "\uE432", "\u{FE7F4}", ["police_car"], 35, 52, 15, 0],
      "1f694": [["\u{1F694}"], "", "", ["oncoming_police_car"], 35, 53, 15, 0],
      "1f695": [["\u{1F695}"], "\uE15A", "\u{FE7EF}", ["taxi"], 35, 54, 15, 0],
      "1f696": [["\u{1F696}"], "", "", ["oncoming_taxi"], 35, 55, 15, 0],
      "1f697": [["\u{1F697}"], "\uE01B", "\u{FE7E4}", ["car", "red_car"], 35, 56, 15, 0],
      "1f698": [["\u{1F698}"], "", "", ["oncoming_automobile"], 35, 57, 15, 0],
      "1f699": [["\u{1F699}"], "\uE42E", "\u{FE7E5}", ["blue_car"], 35, 58, 15, 0],
      "1f69a": [["\u{1F69A}"], "\uE42F", "\u{FE7F1}", ["truck"], 35, 59, 15, 0],
      "1f69b": [["\u{1F69B}"], "", "", ["articulated_lorry"], 35, 60, 15, 0],
      "1f69c": [["\u{1F69C}"], "", "", ["tractor"], 36, 0, 15, 0],
      "1f69d": [["\u{1F69D}"], "", "", ["monorail"], 36, 1, 15, 0],
      "1f69e": [["\u{1F69E}"], "", "", ["mountain_railway"], 36, 2, 15, 0],
      "1f69f": [["\u{1F69F}"], "", "", ["suspension_railway"], 36, 3, 15, 0],
      "1f6a0": [["\u{1F6A0}"], "", "", ["mountain_cableway"], 36, 4, 15, 0],
      "1f6a1": [["\u{1F6A1}"], "", "", ["aerial_tramway"], 36, 5, 15, 0],
      "1f6a2": [["\u{1F6A2}"], "\uE202", "\u{FE7E8}", ["ship"], 36, 6, 15, 0],
      "1f6a3-200d-2640-fe0f": [["\u{1F6A3}\u200D\u2640\uFE0F", "\u{1F6A3}\u200D\u2640"], "", "", ["woman-rowing-boat"], 36, 7, 15, 0],
      "1f6a3-200d-2642-fe0f": [["\u{1F6A3}\u200D\u2642\uFE0F", "\u{1F6A3}\u200D\u2642", "\u{1F6A3}"], "", "", ["man-rowing-boat", "rowboat"], 36, 13, 15, 0],
      "1f6a4": [["\u{1F6A4}"], "\uE135", "\u{FE7EE}", ["speedboat"], 36, 25, 15, 0],
      "1f6a5": [["\u{1F6A5}"], "\uE14E", "\u{FE7F7}", ["traffic_light"], 36, 26, 15, 0],
      "1f6a6": [["\u{1F6A6}"], "", "", ["vertical_traffic_light"], 36, 27, 15, 0],
      "1f6a7": [["\u{1F6A7}"], "\uE137", "\u{FE7F8}", ["construction"], 36, 28, 15, 0],
      "1f6a8": [["\u{1F6A8}"], "", "\u{FE7F9}", ["rotating_light"], 36, 29, 15, 0],
      "1f6a9": [["\u{1F6A9}"], "", "\u{FEB22}", ["triangular_flag_on_post"], 36, 30, 15, 0],
      "1f6aa": [["\u{1F6AA}"], "", "\u{FE4F3}", ["door"], 36, 31, 15, 0],
      "1f6ab": [["\u{1F6AB}"], "", "\u{FEB48}", ["no_entry_sign"], 36, 32, 15, 0],
      "1f6ac": [["\u{1F6AC}"], "\uE30E", "\u{FEB1E}", ["smoking"], 36, 33, 15, 0],
      "1f6ad": [["\u{1F6AD}"], "\uE208", "\u{FEB1F}", ["no_smoking"], 36, 34, 15, 0],
      "1f6ae": [["\u{1F6AE}"], "", "", ["put_litter_in_its_place"], 36, 35, 15, 0],
      "1f6af": [["\u{1F6AF}"], "", "", ["do_not_litter"], 36, 36, 15, 0],
      "1f6b0": [["\u{1F6B0}"], "", "", ["potable_water"], 36, 37, 15, 0],
      "1f6b1": [["\u{1F6B1}"], "", "", ["non-potable_water"], 36, 38, 15, 0],
      "1f6b2": [["\u{1F6B2}"], "\uE136", "\u{FE7EB}", ["bike"], 36, 39, 15, 0],
      "1f6b3": [["\u{1F6B3}"], "", "", ["no_bicycles"], 36, 40, 15, 0],
      "1f6b4-200d-2640-fe0f": [["\u{1F6B4}\u200D\u2640\uFE0F", "\u{1F6B4}\u200D\u2640"], "", "", ["woman-biking"], 36, 41, 15, 0],
      "1f6b4-200d-2642-fe0f": [["\u{1F6B4}\u200D\u2642\uFE0F", "\u{1F6B4}\u200D\u2642", "\u{1F6B4}"], "", "", ["man-biking", "bicyclist"], 36, 47, 15, 0],
      "1f6b5-200d-2640-fe0f": [["\u{1F6B5}\u200D\u2640\uFE0F", "\u{1F6B5}\u200D\u2640"], "", "", ["woman-mountain-biking"], 36, 59, 15, 0],
      "1f6b5-200d-2642-fe0f": [["\u{1F6B5}\u200D\u2642\uFE0F", "\u{1F6B5}\u200D\u2642", "\u{1F6B5}"], "", "", ["man-mountain-biking", "mountain_bicyclist"], 37, 4, 15, 0],
      "1f6b6-200d-2640-fe0f": [["\u{1F6B6}\u200D\u2640\uFE0F", "\u{1F6B6}\u200D\u2640"], "", "", ["woman-walking"], 37, 16, 15, 0],
      "1f6b6-200d-2642-fe0f": [["\u{1F6B6}\u200D\u2642\uFE0F", "\u{1F6B6}\u200D\u2642", "\u{1F6B6}"], "", "", ["man-walking", "walking"], 37, 22, 15, 0],
      "1f6b7": [["\u{1F6B7}"], "", "", ["no_pedestrians"], 37, 34, 15, 0],
      "1f6b8": [["\u{1F6B8}"], "", "", ["children_crossing"], 37, 35, 15, 0],
      "1f6b9": [["\u{1F6B9}"], "\uE138", "\u{FEB33}", ["mens"], 37, 36, 15, 0],
      "1f6ba": [["\u{1F6BA}"], "\uE139", "\u{FEB34}", ["womens"], 37, 37, 15, 0],
      "1f6bb": [["\u{1F6BB}"], "\uE151", "\u{FE506}", ["restroom"], 37, 38, 15, 0],
      "1f6bc": [["\u{1F6BC}"], "\uE13A", "\u{FEB35}", ["baby_symbol"], 37, 39, 15, 0],
      "1f6bd": [["\u{1F6BD}"], "\uE140", "\u{FE507}", ["toilet"], 37, 40, 15, 0],
      "1f6be": [["\u{1F6BE}"], "\uE309", "\u{FE508}", ["wc"], 37, 41, 15, 0],
      "1f6bf": [["\u{1F6BF}"], "", "", ["shower"], 37, 42, 15, 0],
      "1f6c0": [["\u{1F6C0}"], "\uE13F", "\u{FE505}", ["bath"], 37, 43, 15, 0],
      "1f6c1": [["\u{1F6C1}"], "", "", ["bathtub"], 37, 49, 15, 0],
      "1f6c2": [["\u{1F6C2}"], "", "", ["passport_control"], 37, 50, 15, 0],
      "1f6c3": [["\u{1F6C3}"], "", "", ["customs"], 37, 51, 15, 0],
      "1f6c4": [["\u{1F6C4}"], "", "", ["baggage_claim"], 37, 52, 15, 0],
      "1f6c5": [["\u{1F6C5}"], "", "", ["left_luggage"], 37, 53, 15, 0],
      "1f6cb-fe0f": [["\u{1F6CB}\uFE0F", "\u{1F6CB}"], "", "", ["couch_and_lamp"], 37, 54, 15, 0],
      "1f6cc": [["\u{1F6CC}"], "", "", ["sleeping_accommodation"], 37, 55, 15, 0],
      "1f6cd-fe0f": [["\u{1F6CD}\uFE0F", "\u{1F6CD}"], "", "", ["shopping_bags"], 38, 0, 15, 0],
      "1f6ce-fe0f": [["\u{1F6CE}\uFE0F", "\u{1F6CE}"], "", "", ["bellhop_bell"], 38, 1, 15, 0],
      "1f6cf-fe0f": [["\u{1F6CF}\uFE0F", "\u{1F6CF}"], "", "", ["bed"], 38, 2, 15, 0],
      "1f6d0": [["\u{1F6D0}"], "", "", ["place_of_worship"], 38, 3, 15, 0],
      "1f6d1": [["\u{1F6D1}"], "", "", ["octagonal_sign"], 38, 4, 15, 0],
      "1f6d2": [["\u{1F6D2}"], "", "", ["shopping_trolley"], 38, 5, 15, 0],
      "1f6d5": [["\u{1F6D5}"], "", "", ["hindu_temple"], 38, 6, 15, 0],
      "1f6d6": [["\u{1F6D6}"], "", "", ["hut"], 38, 7, 15, 0],
      "1f6d7": [["\u{1F6D7}"], "", "", ["elevator"], 38, 8, 15, 0],
      "1f6dc": [["\u{1F6DC}"], "", "", ["wireless"], 38, 9, 3, 0],
      "1f6dd": [["\u{1F6DD}"], "", "", ["playground_slide"], 38, 10, 15, 0],
      "1f6de": [["\u{1F6DE}"], "", "", ["wheel"], 38, 11, 15, 0],
      "1f6df": [["\u{1F6DF}"], "", "", ["ring_buoy"], 38, 12, 15, 0],
      "1f6e0-fe0f": [["\u{1F6E0}\uFE0F", "\u{1F6E0}"], "", "", ["hammer_and_wrench"], 38, 13, 15, 0],
      "1f6e1-fe0f": [["\u{1F6E1}\uFE0F", "\u{1F6E1}"], "", "", ["shield"], 38, 14, 15, 0],
      "1f6e2-fe0f": [["\u{1F6E2}\uFE0F", "\u{1F6E2}"], "", "", ["oil_drum"], 38, 15, 15, 0],
      "1f6e3-fe0f": [["\u{1F6E3}\uFE0F", "\u{1F6E3}"], "", "", ["motorway"], 38, 16, 15, 0],
      "1f6e4-fe0f": [["\u{1F6E4}\uFE0F", "\u{1F6E4}"], "", "", ["railway_track"], 38, 17, 15, 0],
      "1f6e5-fe0f": [["\u{1F6E5}\uFE0F", "\u{1F6E5}"], "", "", ["motor_boat"], 38, 18, 15, 0],
      "1f6e9-fe0f": [["\u{1F6E9}\uFE0F", "\u{1F6E9}"], "", "", ["small_airplane"], 38, 19, 15, 0],
      "1f6eb": [["\u{1F6EB}"], "", "", ["airplane_departure"], 38, 20, 15, 0],
      "1f6ec": [["\u{1F6EC}"], "", "", ["airplane_arriving"], 38, 21, 15, 0],
      "1f6f0-fe0f": [["\u{1F6F0}\uFE0F", "\u{1F6F0}"], "", "", ["satellite"], 38, 22, 15, 0],
      "1f6f3-fe0f": [["\u{1F6F3}\uFE0F", "\u{1F6F3}"], "", "", ["passenger_ship"], 38, 23, 15, 0],
      "1f6f4": [["\u{1F6F4}"], "", "", ["scooter"], 38, 24, 15, 0],
      "1f6f5": [["\u{1F6F5}"], "", "", ["motor_scooter"], 38, 25, 15, 0],
      "1f6f6": [["\u{1F6F6}"], "", "", ["canoe"], 38, 26, 15, 0],
      "1f6f7": [["\u{1F6F7}"], "", "", ["sled"], 38, 27, 15, 0],
      "1f6f8": [["\u{1F6F8}"], "", "", ["flying_saucer"], 38, 28, 15, 0],
      "1f6f9": [["\u{1F6F9}"], "", "", ["skateboard"], 38, 29, 15, 0],
      "1f6fa": [["\u{1F6FA}"], "", "", ["auto_rickshaw"], 38, 30, 15, 0],
      "1f6fb": [["\u{1F6FB}"], "", "", ["pickup_truck"], 38, 31, 15, 0],
      "1f6fc": [["\u{1F6FC}"], "", "", ["roller_skate"], 38, 32, 15, 0],
      "1f7e0": [["\u{1F7E0}"], "", "", ["large_orange_circle"], 38, 33, 15, 0],
      "1f7e1": [["\u{1F7E1}"], "", "", ["large_yellow_circle"], 38, 34, 15, 0],
      "1f7e2": [["\u{1F7E2}"], "", "", ["large_green_circle"], 38, 35, 15, 0],
      "1f7e3": [["\u{1F7E3}"], "", "", ["large_purple_circle"], 38, 36, 15, 0],
      "1f7e4": [["\u{1F7E4}"], "", "", ["large_brown_circle"], 38, 37, 15, 0],
      "1f7e5": [["\u{1F7E5}"], "", "", ["large_red_square"], 38, 38, 15, 0],
      "1f7e6": [["\u{1F7E6}"], "", "", ["large_blue_square"], 38, 39, 15, 0],
      "1f7e7": [["\u{1F7E7}"], "", "", ["large_orange_square"], 38, 40, 15, 0],
      "1f7e8": [["\u{1F7E8}"], "", "", ["large_yellow_square"], 38, 41, 15, 0],
      "1f7e9": [["\u{1F7E9}"], "", "", ["large_green_square"], 38, 42, 15, 0],
      "1f7ea": [["\u{1F7EA}"], "", "", ["large_purple_square"], 38, 43, 15, 0],
      "1f7eb": [["\u{1F7EB}"], "", "", ["large_brown_square"], 38, 44, 15, 0],
      "1f7f0": [["\u{1F7F0}"], "", "", ["heavy_equals_sign"], 38, 45, 15, 0],
      "1f90c": [["\u{1F90C}"], "", "", ["pinched_fingers"], 38, 46, 15, 0],
      "1f90d": [["\u{1F90D}"], "", "", ["white_heart"], 38, 52, 15, 0],
      "1f90e": [["\u{1F90E}"], "", "", ["brown_heart"], 38, 53, 15, 0],
      "1f90f": [["\u{1F90F}"], "", "", ["pinching_hand"], 38, 54, 15, 0],
      "1f910": [["\u{1F910}"], "", "", ["zipper_mouth_face"], 38, 60, 15, 0],
      "1f911": [["\u{1F911}"], "", "", ["money_mouth_face"], 39, 0, 15, 0],
      "1f912": [["\u{1F912}"], "", "", ["face_with_thermometer"], 39, 1, 15, 0],
      "1f913": [["\u{1F913}"], "", "", ["nerd_face"], 39, 2, 15, 0],
      "1f914": [["\u{1F914}"], "", "", ["thinking_face"], 39, 3, 15, 0],
      "1f915": [["\u{1F915}"], "", "", ["face_with_head_bandage"], 39, 4, 15, 0],
      "1f916": [["\u{1F916}"], "", "", ["robot_face"], 39, 5, 15, 0],
      "1f917": [["\u{1F917}"], "", "", ["hugging_face"], 39, 6, 15, 0],
      "1f918": [["\u{1F918}"], "", "", ["the_horns", "sign_of_the_horns"], 39, 7, 15, 0],
      "1f919": [["\u{1F919}"], "", "", ["call_me_hand"], 39, 13, 15, 0],
      "1f91a": [["\u{1F91A}"], "", "", ["raised_back_of_hand"], 39, 19, 15, 0],
      "1f91b": [["\u{1F91B}"], "", "", ["left-facing_fist"], 39, 25, 15, 0],
      "1f91c": [["\u{1F91C}"], "", "", ["right-facing_fist"], 39, 31, 15, 0],
      "1f91d": [["\u{1F91D}"], "", "", ["handshake"], 39, 37, 15, 0],
      "1f91e": [["\u{1F91E}"], "", "", ["crossed_fingers", "hand_with_index_and_middle_fingers_crossed"], 40, 2, 15, 0],
      "1f91f": [["\u{1F91F}"], "", "", ["i_love_you_hand_sign"], 40, 8, 15, 0],
      "1f920": [["\u{1F920}"], "", "", ["face_with_cowboy_hat"], 40, 14, 15, 0],
      "1f921": [["\u{1F921}"], "", "", ["clown_face"], 40, 15, 15, 0],
      "1f922": [["\u{1F922}"], "", "", ["nauseated_face"], 40, 16, 15, 0],
      "1f923": [["\u{1F923}"], "", "", ["rolling_on_the_floor_laughing"], 40, 17, 15, 0],
      "1f924": [["\u{1F924}"], "", "", ["drooling_face"], 40, 18, 15, 0],
      "1f925": [["\u{1F925}"], "", "", ["lying_face"], 40, 19, 15, 0],
      "1f926-200d-2640-fe0f": [["\u{1F926}\u200D\u2640\uFE0F", "\u{1F926}\u200D\u2640"], "", "", ["woman-facepalming"], 40, 20, 15, 0],
      "1f926-200d-2642-fe0f": [["\u{1F926}\u200D\u2642\uFE0F", "\u{1F926}\u200D\u2642"], "", "", ["man-facepalming"], 40, 26, 15, 0],
      "1f926": [["\u{1F926}"], "", "", ["face_palm"], 40, 32, 15, 0],
      "1f927": [["\u{1F927}"], "", "", ["sneezing_face"], 40, 38, 15, 0],
      "1f928": [["\u{1F928}"], "", "", ["face_with_raised_eyebrow", "face_with_one_eyebrow_raised"], 40, 39, 15, 0],
      "1f929": [["\u{1F929}"], "", "", ["star-struck", "grinning_face_with_star_eyes"], 40, 40, 15, 0],
      "1f92a": [["\u{1F92A}"], "", "", ["zany_face", "grinning_face_with_one_large_and_one_small_eye"], 40, 41, 15, 0],
      "1f92b": [["\u{1F92B}"], "", "", ["shushing_face", "face_with_finger_covering_closed_lips"], 40, 42, 15, 0],
      "1f92c": [["\u{1F92C}"], "", "", ["face_with_symbols_on_mouth", "serious_face_with_symbols_covering_mouth"], 40, 43, 15, 0],
      "1f92d": [["\u{1F92D}"], "", "", ["face_with_hand_over_mouth", "smiling_face_with_smiling_eyes_and_hand_covering_mouth"], 40, 44, 15, 0],
      "1f92e": [["\u{1F92E}"], "", "", ["face_vomiting", "face_with_open_mouth_vomiting"], 40, 45, 15, 0],
      "1f92f": [["\u{1F92F}"], "", "", ["exploding_head", "shocked_face_with_exploding_head"], 40, 46, 15, 0],
      "1f930": [["\u{1F930}"], "", "", ["pregnant_woman"], 40, 47, 15, 0],
      "1f931": [["\u{1F931}"], "", "", ["breast-feeding"], 40, 53, 15, 0],
      "1f932": [["\u{1F932}"], "", "", ["palms_up_together"], 40, 59, 15, 0],
      "1f933": [["\u{1F933}"], "", "", ["selfie"], 41, 4, 15, 0],
      "1f934": [["\u{1F934}"], "", "", ["prince"], 41, 10, 15, 0],
      "1f935-200d-2640-fe0f": [["\u{1F935}\u200D\u2640\uFE0F", "\u{1F935}\u200D\u2640"], "", "", ["woman_in_tuxedo"], 41, 16, 15, 0],
      "1f935-200d-2642-fe0f": [["\u{1F935}\u200D\u2642\uFE0F", "\u{1F935}\u200D\u2642"], "", "", ["man_in_tuxedo"], 41, 22, 15, 0],
      "1f935": [["\u{1F935}"], "", "", ["person_in_tuxedo"], 41, 28, 15, 0],
      "1f936": [["\u{1F936}"], "", "", ["mrs_claus", "mother_christmas"], 41, 34, 15, 0],
      "1f937-200d-2640-fe0f": [["\u{1F937}\u200D\u2640\uFE0F", "\u{1F937}\u200D\u2640"], "", "", ["woman-shrugging"], 41, 40, 15, 0],
      "1f937-200d-2642-fe0f": [["\u{1F937}\u200D\u2642\uFE0F", "\u{1F937}\u200D\u2642"], "", "", ["man-shrugging"], 41, 46, 15, 0],
      "1f937": [["\u{1F937}"], "", "", ["shrug"], 41, 52, 15, 0],
      "1f938-200d-2640-fe0f": [["\u{1F938}\u200D\u2640\uFE0F", "\u{1F938}\u200D\u2640"], "", "", ["woman-cartwheeling"], 41, 58, 15, 0],
      "1f938-200d-2642-fe0f": [["\u{1F938}\u200D\u2642\uFE0F", "\u{1F938}\u200D\u2642"], "", "", ["man-cartwheeling"], 42, 3, 15, 0],
      "1f938": [["\u{1F938}"], "", "", ["person_doing_cartwheel"], 42, 9, 15, 0],
      "1f939-200d-2640-fe0f": [["\u{1F939}\u200D\u2640\uFE0F", "\u{1F939}\u200D\u2640"], "", "", ["woman-juggling"], 42, 15, 15, 0],
      "1f939-200d-2642-fe0f": [["\u{1F939}\u200D\u2642\uFE0F", "\u{1F939}\u200D\u2642"], "", "", ["man-juggling"], 42, 21, 15, 0],
      "1f939": [["\u{1F939}"], "", "", ["juggling"], 42, 27, 15, 0],
      "1f93a": [["\u{1F93A}"], "", "", ["fencer"], 42, 33, 15, 0],
      "1f93c-200d-2640-fe0f": [["\u{1F93C}\u200D\u2640\uFE0F", "\u{1F93C}\u200D\u2640"], "", "", ["woman-wrestling"], 42, 34, 15, 0],
      "1f93c-200d-2642-fe0f": [["\u{1F93C}\u200D\u2642\uFE0F", "\u{1F93C}\u200D\u2642"], "", "", ["man-wrestling"], 42, 35, 15, 0],
      "1f93c": [["\u{1F93C}"], "", "", ["wrestlers"], 42, 36, 15, 0],
      "1f93d-200d-2640-fe0f": [["\u{1F93D}\u200D\u2640\uFE0F", "\u{1F93D}\u200D\u2640"], "", "", ["woman-playing-water-polo"], 42, 37, 15, 0],
      "1f93d-200d-2642-fe0f": [["\u{1F93D}\u200D\u2642\uFE0F", "\u{1F93D}\u200D\u2642"], "", "", ["man-playing-water-polo"], 42, 43, 15, 0],
      "1f93d": [["\u{1F93D}"], "", "", ["water_polo"], 42, 49, 15, 0],
      "1f93e-200d-2640-fe0f": [["\u{1F93E}\u200D\u2640\uFE0F", "\u{1F93E}\u200D\u2640"], "", "", ["woman-playing-handball"], 42, 55, 15, 0],
      "1f93e-200d-2642-fe0f": [["\u{1F93E}\u200D\u2642\uFE0F", "\u{1F93E}\u200D\u2642"], "", "", ["man-playing-handball"], 43, 0, 15, 0],
      "1f93e": [["\u{1F93E}"], "", "", ["handball"], 43, 6, 15, 0],
      "1f93f": [["\u{1F93F}"], "", "", ["diving_mask"], 43, 12, 15, 0],
      "1f940": [["\u{1F940}"], "", "", ["wilted_flower"], 43, 13, 15, 0],
      "1f941": [["\u{1F941}"], "", "", ["drum_with_drumsticks"], 43, 14, 15, 0],
      "1f942": [["\u{1F942}"], "", "", ["clinking_glasses"], 43, 15, 15, 0],
      "1f943": [["\u{1F943}"], "", "", ["tumbler_glass"], 43, 16, 15, 0],
      "1f944": [["\u{1F944}"], "", "", ["spoon"], 43, 17, 15, 0],
      "1f945": [["\u{1F945}"], "", "", ["goal_net"], 43, 18, 15, 0],
      "1f947": [["\u{1F947}"], "", "", ["first_place_medal"], 43, 19, 15, 0],
      "1f948": [["\u{1F948}"], "", "", ["second_place_medal"], 43, 20, 15, 0],
      "1f949": [["\u{1F949}"], "", "", ["third_place_medal"], 43, 21, 15, 0],
      "1f94a": [["\u{1F94A}"], "", "", ["boxing_glove"], 43, 22, 15, 0],
      "1f94b": [["\u{1F94B}"], "", "", ["martial_arts_uniform"], 43, 23, 15, 0],
      "1f94c": [["\u{1F94C}"], "", "", ["curling_stone"], 43, 24, 15, 0],
      "1f94d": [["\u{1F94D}"], "", "", ["lacrosse"], 43, 25, 15, 0],
      "1f94e": [["\u{1F94E}"], "", "", ["softball"], 43, 26, 15, 0],
      "1f94f": [["\u{1F94F}"], "", "", ["flying_disc"], 43, 27, 15, 0],
      "1f950": [["\u{1F950}"], "", "", ["croissant"], 43, 28, 15, 0],
      "1f951": [["\u{1F951}"], "", "", ["avocado"], 43, 29, 15, 0],
      "1f952": [["\u{1F952}"], "", "", ["cucumber"], 43, 30, 15, 0],
      "1f953": [["\u{1F953}"], "", "", ["bacon"], 43, 31, 15, 0],
      "1f954": [["\u{1F954}"], "", "", ["potato"], 43, 32, 15, 0],
      "1f955": [["\u{1F955}"], "", "", ["carrot"], 43, 33, 15, 0],
      "1f956": [["\u{1F956}"], "", "", ["baguette_bread"], 43, 34, 15, 0],
      "1f957": [["\u{1F957}"], "", "", ["green_salad"], 43, 35, 15, 0],
      "1f958": [["\u{1F958}"], "", "", ["shallow_pan_of_food"], 43, 36, 15, 0],
      "1f959": [["\u{1F959}"], "", "", ["stuffed_flatbread"], 43, 37, 15, 0],
      "1f95a": [["\u{1F95A}"], "", "", ["egg"], 43, 38, 15, 0],
      "1f95b": [["\u{1F95B}"], "", "", ["glass_of_milk"], 43, 39, 15, 0],
      "1f95c": [["\u{1F95C}"], "", "", ["peanuts"], 43, 40, 15, 0],
      "1f95d": [["\u{1F95D}"], "", "", ["kiwifruit"], 43, 41, 15, 0],
      "1f95e": [["\u{1F95E}"], "", "", ["pancakes"], 43, 42, 15, 0],
      "1f95f": [["\u{1F95F}"], "", "", ["dumpling"], 43, 43, 15, 0],
      "1f960": [["\u{1F960}"], "", "", ["fortune_cookie"], 43, 44, 15, 0],
      "1f961": [["\u{1F961}"], "", "", ["takeout_box"], 43, 45, 15, 0],
      "1f962": [["\u{1F962}"], "", "", ["chopsticks"], 43, 46, 15, 0],
      "1f963": [["\u{1F963}"], "", "", ["bowl_with_spoon"], 43, 47, 15, 0],
      "1f964": [["\u{1F964}"], "", "", ["cup_with_straw"], 43, 48, 15, 0],
      "1f965": [["\u{1F965}"], "", "", ["coconut"], 43, 49, 15, 0],
      "1f966": [["\u{1F966}"], "", "", ["broccoli"], 43, 50, 15, 0],
      "1f967": [["\u{1F967}"], "", "", ["pie"], 43, 51, 15, 0],
      "1f968": [["\u{1F968}"], "", "", ["pretzel"], 43, 52, 15, 0],
      "1f969": [["\u{1F969}"], "", "", ["cut_of_meat"], 43, 53, 15, 0],
      "1f96a": [["\u{1F96A}"], "", "", ["sandwich"], 43, 54, 15, 0],
      "1f96b": [["\u{1F96B}"], "", "", ["canned_food"], 43, 55, 15, 0],
      "1f96c": [["\u{1F96C}"], "", "", ["leafy_green"], 43, 56, 15, 0],
      "1f96d": [["\u{1F96D}"], "", "", ["mango"], 43, 57, 15, 0],
      "1f96e": [["\u{1F96E}"], "", "", ["moon_cake"], 43, 58, 15, 0],
      "1f96f": [["\u{1F96F}"], "", "", ["bagel"], 43, 59, 15, 0],
      "1f970": [["\u{1F970}"], "", "", ["smiling_face_with_3_hearts"], 43, 60, 15, 0],
      "1f971": [["\u{1F971}"], "", "", ["yawning_face"], 44, 0, 15, 0],
      "1f972": [["\u{1F972}"], "", "", ["smiling_face_with_tear"], 44, 1, 15, 0],
      "1f973": [["\u{1F973}"], "", "", ["partying_face"], 44, 2, 15, 0],
      "1f974": [["\u{1F974}"], "", "", ["woozy_face"], 44, 3, 15, 0],
      "1f975": [["\u{1F975}"], "", "", ["hot_face"], 44, 4, 15, 0],
      "1f976": [["\u{1F976}"], "", "", ["cold_face"], 44, 5, 15, 0],
      "1f977": [["\u{1F977}"], "", "", ["ninja"], 44, 6, 15, 0],
      "1f978": [["\u{1F978}"], "", "", ["disguised_face"], 44, 12, 15, 0],
      "1f979": [["\u{1F979}"], "", "", ["face_holding_back_tears"], 44, 13, 15, 0],
      "1f97a": [["\u{1F97A}"], "", "", ["pleading_face"], 44, 14, 15, 0],
      "1f97b": [["\u{1F97B}"], "", "", ["sari"], 44, 15, 15, 0],
      "1f97c": [["\u{1F97C}"], "", "", ["lab_coat"], 44, 16, 15, 0],
      "1f97d": [["\u{1F97D}"], "", "", ["goggles"], 44, 17, 15, 0],
      "1f97e": [["\u{1F97E}"], "", "", ["hiking_boot"], 44, 18, 15, 0],
      "1f97f": [["\u{1F97F}"], "", "", ["womans_flat_shoe"], 44, 19, 15, 0],
      "1f980": [["\u{1F980}"], "", "", ["crab"], 44, 20, 15, 0],
      "1f981": [["\u{1F981}"], "", "", ["lion_face"], 44, 21, 15, 0],
      "1f982": [["\u{1F982}"], "", "", ["scorpion"], 44, 22, 15, 0],
      "1f983": [["\u{1F983}"], "", "", ["turkey"], 44, 23, 15, 0],
      "1f984": [["\u{1F984}"], "", "", ["unicorn_face"], 44, 24, 15, 0],
      "1f985": [["\u{1F985}"], "", "", ["eagle"], 44, 25, 15, 0],
      "1f986": [["\u{1F986}"], "", "", ["duck"], 44, 26, 15, 0],
      "1f987": [["\u{1F987}"], "", "", ["bat"], 44, 27, 15, 0],
      "1f988": [["\u{1F988}"], "", "", ["shark"], 44, 28, 15, 0],
      "1f989": [["\u{1F989}"], "", "", ["owl"], 44, 29, 15, 0],
      "1f98a": [["\u{1F98A}"], "", "", ["fox_face"], 44, 30, 15, 0],
      "1f98b": [["\u{1F98B}"], "", "", ["butterfly"], 44, 31, 15, 0],
      "1f98c": [["\u{1F98C}"], "", "", ["deer"], 44, 32, 15, 0],
      "1f98d": [["\u{1F98D}"], "", "", ["gorilla"], 44, 33, 15, 0],
      "1f98e": [["\u{1F98E}"], "", "", ["lizard"], 44, 34, 15, 0],
      "1f98f": [["\u{1F98F}"], "", "", ["rhinoceros"], 44, 35, 15, 0],
      "1f990": [["\u{1F990}"], "", "", ["shrimp"], 44, 36, 15, 0],
      "1f991": [["\u{1F991}"], "", "", ["squid"], 44, 37, 15, 0],
      "1f992": [["\u{1F992}"], "", "", ["giraffe_face"], 44, 38, 15, 0],
      "1f993": [["\u{1F993}"], "", "", ["zebra_face"], 44, 39, 15, 0],
      "1f994": [["\u{1F994}"], "", "", ["hedgehog"], 44, 40, 15, 0],
      "1f995": [["\u{1F995}"], "", "", ["sauropod"], 44, 41, 15, 0],
      "1f996": [["\u{1F996}"], "", "", ["t-rex"], 44, 42, 15, 0],
      "1f997": [["\u{1F997}"], "", "", ["cricket"], 44, 43, 15, 0],
      "1f998": [["\u{1F998}"], "", "", ["kangaroo"], 44, 44, 15, 0],
      "1f999": [["\u{1F999}"], "", "", ["llama"], 44, 45, 15, 0],
      "1f99a": [["\u{1F99A}"], "", "", ["peacock"], 44, 46, 15, 0],
      "1f99b": [["\u{1F99B}"], "", "", ["hippopotamus"], 44, 47, 15, 0],
      "1f99c": [["\u{1F99C}"], "", "", ["parrot"], 44, 48, 15, 0],
      "1f99d": [["\u{1F99D}"], "", "", ["raccoon"], 44, 49, 15, 0],
      "1f99e": [["\u{1F99E}"], "", "", ["lobster"], 44, 50, 15, 0],
      "1f99f": [["\u{1F99F}"], "", "", ["mosquito"], 44, 51, 15, 0],
      "1f9a0": [["\u{1F9A0}"], "", "", ["microbe"], 44, 52, 15, 0],
      "1f9a1": [["\u{1F9A1}"], "", "", ["badger"], 44, 53, 15, 0],
      "1f9a2": [["\u{1F9A2}"], "", "", ["swan"], 44, 54, 15, 0],
      "1f9a3": [["\u{1F9A3}"], "", "", ["mammoth"], 44, 55, 15, 0],
      "1f9a4": [["\u{1F9A4}"], "", "", ["dodo"], 44, 56, 15, 0],
      "1f9a5": [["\u{1F9A5}"], "", "", ["sloth"], 44, 57, 15, 0],
      "1f9a6": [["\u{1F9A6}"], "", "", ["otter"], 44, 58, 15, 0],
      "1f9a7": [["\u{1F9A7}"], "", "", ["orangutan"], 44, 59, 15, 0],
      "1f9a8": [["\u{1F9A8}"], "", "", ["skunk"], 44, 60, 15, 0],
      "1f9a9": [["\u{1F9A9}"], "", "", ["flamingo"], 45, 0, 15, 0],
      "1f9aa": [["\u{1F9AA}"], "", "", ["oyster"], 45, 1, 15, 0],
      "1f9ab": [["\u{1F9AB}"], "", "", ["beaver"], 45, 2, 15, 0],
      "1f9ac": [["\u{1F9AC}"], "", "", ["bison"], 45, 3, 15, 0],
      "1f9ad": [["\u{1F9AD}"], "", "", ["seal"], 45, 4, 15, 0],
      "1f9ae": [["\u{1F9AE}"], "", "", ["guide_dog"], 45, 5, 15, 0],
      "1f9af": [["\u{1F9AF}"], "", "", ["probing_cane"], 45, 6, 15, 0],
      "1f9b4": [["\u{1F9B4}"], "", "", ["bone"], 45, 7, 15, 0],
      "1f9b5": [["\u{1F9B5}"], "", "", ["leg"], 45, 8, 15, 0],
      "1f9b6": [["\u{1F9B6}"], "", "", ["foot"], 45, 14, 15, 0],
      "1f9b7": [["\u{1F9B7}"], "", "", ["tooth"], 45, 20, 15, 0],
      "1f9b8-200d-2640-fe0f": [["\u{1F9B8}\u200D\u2640\uFE0F", "\u{1F9B8}\u200D\u2640"], "", "", ["female_superhero"], 45, 21, 15, 0],
      "1f9b8-200d-2642-fe0f": [["\u{1F9B8}\u200D\u2642\uFE0F", "\u{1F9B8}\u200D\u2642"], "", "", ["male_superhero"], 45, 27, 15, 0],
      "1f9b8": [["\u{1F9B8}"], "", "", ["superhero"], 45, 33, 15, 0],
      "1f9b9-200d-2640-fe0f": [["\u{1F9B9}\u200D\u2640\uFE0F", "\u{1F9B9}\u200D\u2640"], "", "", ["female_supervillain"], 45, 39, 15, 0],
      "1f9b9-200d-2642-fe0f": [["\u{1F9B9}\u200D\u2642\uFE0F", "\u{1F9B9}\u200D\u2642"], "", "", ["male_supervillain"], 45, 45, 15, 0],
      "1f9b9": [["\u{1F9B9}"], "", "", ["supervillain"], 45, 51, 15, 0],
      "1f9ba": [["\u{1F9BA}"], "", "", ["safety_vest"], 45, 57, 15, 0],
      "1f9bb": [["\u{1F9BB}"], "", "", ["ear_with_hearing_aid"], 45, 58, 15, 0],
      "1f9bc": [["\u{1F9BC}"], "", "", ["motorized_wheelchair"], 46, 3, 15, 0],
      "1f9bd": [["\u{1F9BD}"], "", "", ["manual_wheelchair"], 46, 4, 15, 0],
      "1f9be": [["\u{1F9BE}"], "", "", ["mechanical_arm"], 46, 5, 15, 0],
      "1f9bf": [["\u{1F9BF}"], "", "", ["mechanical_leg"], 46, 6, 15, 0],
      "1f9c0": [["\u{1F9C0}"], "", "", ["cheese_wedge"], 46, 7, 15, 0],
      "1f9c1": [["\u{1F9C1}"], "", "", ["cupcake"], 46, 8, 15, 0],
      "1f9c2": [["\u{1F9C2}"], "", "", ["salt"], 46, 9, 15, 0],
      "1f9c3": [["\u{1F9C3}"], "", "", ["beverage_box"], 46, 10, 15, 0],
      "1f9c4": [["\u{1F9C4}"], "", "", ["garlic"], 46, 11, 15, 0],
      "1f9c5": [["\u{1F9C5}"], "", "", ["onion"], 46, 12, 15, 0],
      "1f9c6": [["\u{1F9C6}"], "", "", ["falafel"], 46, 13, 15, 0],
      "1f9c7": [["\u{1F9C7}"], "", "", ["waffle"], 46, 14, 15, 0],
      "1f9c8": [["\u{1F9C8}"], "", "", ["butter"], 46, 15, 15, 0],
      "1f9c9": [["\u{1F9C9}"], "", "", ["mate_drink"], 46, 16, 15, 0],
      "1f9ca": [["\u{1F9CA}"], "", "", ["ice_cube"], 46, 17, 15, 0],
      "1f9cb": [["\u{1F9CB}"], "", "", ["bubble_tea"], 46, 18, 15, 0],
      "1f9cc": [["\u{1F9CC}"], "", "", ["troll"], 46, 19, 15, 0],
      "1f9cd-200d-2640-fe0f": [["\u{1F9CD}\u200D\u2640\uFE0F", "\u{1F9CD}\u200D\u2640"], "", "", ["woman_standing"], 46, 20, 15, 0],
      "1f9cd-200d-2642-fe0f": [["\u{1F9CD}\u200D\u2642\uFE0F", "\u{1F9CD}\u200D\u2642"], "", "", ["man_standing"], 46, 26, 15, 0],
      "1f9cd": [["\u{1F9CD}"], "", "", ["standing_person"], 46, 32, 15, 0],
      "1f9ce-200d-2640-fe0f": [["\u{1F9CE}\u200D\u2640\uFE0F", "\u{1F9CE}\u200D\u2640"], "", "", ["woman_kneeling"], 46, 38, 15, 0],
      "1f9ce-200d-2642-fe0f": [["\u{1F9CE}\u200D\u2642\uFE0F", "\u{1F9CE}\u200D\u2642"], "", "", ["man_kneeling"], 46, 44, 15, 0],
      "1f9ce": [["\u{1F9CE}"], "", "", ["kneeling_person"], 46, 50, 15, 0],
      "1f9cf-200d-2640-fe0f": [["\u{1F9CF}\u200D\u2640\uFE0F", "\u{1F9CF}\u200D\u2640"], "", "", ["deaf_woman"], 46, 56, 15, 0],
      "1f9cf-200d-2642-fe0f": [["\u{1F9CF}\u200D\u2642\uFE0F", "\u{1F9CF}\u200D\u2642"], "", "", ["deaf_man"], 47, 1, 15, 0],
      "1f9cf": [["\u{1F9CF}"], "", "", ["deaf_person"], 47, 7, 15, 0],
      "1f9d0": [["\u{1F9D0}"], "", "", ["face_with_monocle"], 47, 13, 15, 0],
      "1f9d1-200d-1f33e": [["\u{1F9D1}\u200D\u{1F33E}"], "", "", ["farmer"], 47, 14, 15, 0],
      "1f9d1-200d-1f373": [["\u{1F9D1}\u200D\u{1F373}"], "", "", ["cook"], 47, 20, 15, 0],
      "1f9d1-200d-1f37c": [["\u{1F9D1}\u200D\u{1F37C}"], "", "", ["person_feeding_baby"], 47, 26, 15, 0],
      "1f9d1-200d-1f384": [["\u{1F9D1}\u200D\u{1F384}"], "", "", ["mx_claus"], 47, 32, 15, 0],
      "1f9d1-200d-1f393": [["\u{1F9D1}\u200D\u{1F393}"], "", "", ["student"], 47, 38, 15, 0],
      "1f9d1-200d-1f3a4": [["\u{1F9D1}\u200D\u{1F3A4}"], "", "", ["singer"], 47, 44, 15, 0],
      "1f9d1-200d-1f3a8": [["\u{1F9D1}\u200D\u{1F3A8}"], "", "", ["artist"], 47, 50, 15, 0],
      "1f9d1-200d-1f3eb": [["\u{1F9D1}\u200D\u{1F3EB}"], "", "", ["teacher"], 47, 56, 15, 0],
      "1f9d1-200d-1f3ed": [["\u{1F9D1}\u200D\u{1F3ED}"], "", "", ["factory_worker"], 48, 1, 15, 0],
      "1f9d1-200d-1f4bb": [["\u{1F9D1}\u200D\u{1F4BB}"], "", "", ["technologist"], 48, 7, 15, 0],
      "1f9d1-200d-1f4bc": [["\u{1F9D1}\u200D\u{1F4BC}"], "", "", ["office_worker"], 48, 13, 15, 0],
      "1f9d1-200d-1f527": [["\u{1F9D1}\u200D\u{1F527}"], "", "", ["mechanic"], 48, 19, 15, 0],
      "1f9d1-200d-1f52c": [["\u{1F9D1}\u200D\u{1F52C}"], "", "", ["scientist"], 48, 25, 15, 0],
      "1f9d1-200d-1f680": [["\u{1F9D1}\u200D\u{1F680}"], "", "", ["astronaut"], 48, 31, 15, 0],
      "1f9d1-200d-1f692": [["\u{1F9D1}\u200D\u{1F692}"], "", "", ["firefighter"], 48, 37, 15, 0],
      "1f9d1-200d-1f91d-200d-1f9d1": [["\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}"], "", "", ["people_holding_hands"], 48, 43, 15, 0],
      "1f9d1-200d-1f9af": [["\u{1F9D1}\u200D\u{1F9AF}"], "", "", ["person_with_probing_cane"], 49, 8, 15, 0],
      "1f9d1-200d-1f9b0": [["\u{1F9D1}\u200D\u{1F9B0}"], "", "", ["red_haired_person"], 49, 14, 15, 0],
      "1f9d1-200d-1f9b1": [["\u{1F9D1}\u200D\u{1F9B1}"], "", "", ["curly_haired_person"], 49, 20, 15, 0],
      "1f9d1-200d-1f9b2": [["\u{1F9D1}\u200D\u{1F9B2}"], "", "", ["bald_person"], 49, 26, 15, 0],
      "1f9d1-200d-1f9b3": [["\u{1F9D1}\u200D\u{1F9B3}"], "", "", ["white_haired_person"], 49, 32, 15, 0],
      "1f9d1-200d-1f9bc": [["\u{1F9D1}\u200D\u{1F9BC}"], "", "", ["person_in_motorized_wheelchair"], 49, 38, 15, 0],
      "1f9d1-200d-1f9bd": [["\u{1F9D1}\u200D\u{1F9BD}"], "", "", ["person_in_manual_wheelchair"], 49, 44, 15, 0],
      "1f9d1-200d-2695-fe0f": [["\u{1F9D1}\u200D\u2695\uFE0F", "\u{1F9D1}\u200D\u2695"], "", "", ["health_worker"], 49, 50, 15, 0],
      "1f9d1-200d-2696-fe0f": [["\u{1F9D1}\u200D\u2696\uFE0F", "\u{1F9D1}\u200D\u2696"], "", "", ["judge"], 49, 56, 15, 0],
      "1f9d1-200d-2708-fe0f": [["\u{1F9D1}\u200D\u2708\uFE0F", "\u{1F9D1}\u200D\u2708"], "", "", ["pilot"], 50, 1, 15, 0],
      "1f9d1": [["\u{1F9D1}"], "", "", ["adult"], 50, 7, 15, 0],
      "1f9d2": [["\u{1F9D2}"], "", "", ["child"], 50, 13, 15, 0],
      "1f9d3": [["\u{1F9D3}"], "", "", ["older_adult"], 50, 19, 15, 0],
      "1f9d4-200d-2640-fe0f": [["\u{1F9D4}\u200D\u2640\uFE0F", "\u{1F9D4}\u200D\u2640"], "", "", ["woman_with_beard"], 50, 25, 15, 0],
      "1f9d4-200d-2642-fe0f": [["\u{1F9D4}\u200D\u2642\uFE0F", "\u{1F9D4}\u200D\u2642"], "", "", ["man_with_beard"], 50, 31, 15, 0],
      "1f9d4": [["\u{1F9D4}"], "", "", ["bearded_person"], 50, 37, 15, 0],
      "1f9d5": [["\u{1F9D5}"], "", "", ["person_with_headscarf"], 50, 43, 15, 0],
      "1f9d6-200d-2640-fe0f": [["\u{1F9D6}\u200D\u2640\uFE0F", "\u{1F9D6}\u200D\u2640"], "", "", ["woman_in_steamy_room"], 50, 49, 15, 0],
      "1f9d6-200d-2642-fe0f": [["\u{1F9D6}\u200D\u2642\uFE0F", "\u{1F9D6}\u200D\u2642", "\u{1F9D6}"], "", "", ["man_in_steamy_room", "person_in_steamy_room"], 50, 55, 15, 0],
      "1f9d7-200d-2640-fe0f": [["\u{1F9D7}\u200D\u2640\uFE0F", "\u{1F9D7}\u200D\u2640", "\u{1F9D7}"], "", "", ["woman_climbing", "person_climbing"], 51, 6, 15, 0],
      "1f9d7-200d-2642-fe0f": [["\u{1F9D7}\u200D\u2642\uFE0F", "\u{1F9D7}\u200D\u2642"], "", "", ["man_climbing"], 51, 12, 15, 0],
      "1f9d8-200d-2640-fe0f": [["\u{1F9D8}\u200D\u2640\uFE0F", "\u{1F9D8}\u200D\u2640", "\u{1F9D8}"], "", "", ["woman_in_lotus_position", "person_in_lotus_position"], 51, 24, 15, 0],
      "1f9d8-200d-2642-fe0f": [["\u{1F9D8}\u200D\u2642\uFE0F", "\u{1F9D8}\u200D\u2642"], "", "", ["man_in_lotus_position"], 51, 30, 15, 0],
      "1f9d9-200d-2640-fe0f": [["\u{1F9D9}\u200D\u2640\uFE0F", "\u{1F9D9}\u200D\u2640", "\u{1F9D9}"], "", "", ["female_mage", "mage"], 51, 42, 15, 0],
      "1f9d9-200d-2642-fe0f": [["\u{1F9D9}\u200D\u2642\uFE0F", "\u{1F9D9}\u200D\u2642"], "", "", ["male_mage"], 51, 48, 15, 0],
      "1f9da-200d-2640-fe0f": [["\u{1F9DA}\u200D\u2640\uFE0F", "\u{1F9DA}\u200D\u2640", "\u{1F9DA}"], "", "", ["female_fairy", "fairy"], 51, 60, 15, 0],
      "1f9da-200d-2642-fe0f": [["\u{1F9DA}\u200D\u2642\uFE0F", "\u{1F9DA}\u200D\u2642"], "", "", ["male_fairy"], 52, 5, 15, 0],
      "1f9db-200d-2640-fe0f": [["\u{1F9DB}\u200D\u2640\uFE0F", "\u{1F9DB}\u200D\u2640", "\u{1F9DB}"], "", "", ["female_vampire", "vampire"], 52, 17, 15, 0],
      "1f9db-200d-2642-fe0f": [["\u{1F9DB}\u200D\u2642\uFE0F", "\u{1F9DB}\u200D\u2642"], "", "", ["male_vampire"], 52, 23, 15, 0],
      "1f9dc-200d-2640-fe0f": [["\u{1F9DC}\u200D\u2640\uFE0F", "\u{1F9DC}\u200D\u2640"], "", "", ["mermaid"], 52, 35, 15, 0],
      "1f9dc-200d-2642-fe0f": [["\u{1F9DC}\u200D\u2642\uFE0F", "\u{1F9DC}\u200D\u2642", "\u{1F9DC}"], "", "", ["merman", "merperson"], 52, 41, 15, 0],
      "1f9dd-200d-2640-fe0f": [["\u{1F9DD}\u200D\u2640\uFE0F", "\u{1F9DD}\u200D\u2640"], "", "", ["female_elf"], 52, 53, 15, 0],
      "1f9dd-200d-2642-fe0f": [["\u{1F9DD}\u200D\u2642\uFE0F", "\u{1F9DD}\u200D\u2642", "\u{1F9DD}"], "", "", ["male_elf", "elf"], 52, 59, 15, 0],
      "1f9de-200d-2640-fe0f": [["\u{1F9DE}\u200D\u2640\uFE0F", "\u{1F9DE}\u200D\u2640"], "", "", ["female_genie"], 53, 10, 15, 0],
      "1f9de-200d-2642-fe0f": [["\u{1F9DE}\u200D\u2642\uFE0F", "\u{1F9DE}\u200D\u2642", "\u{1F9DE}"], "", "", ["male_genie", "genie"], 53, 11, 15, 0],
      "1f9df-200d-2640-fe0f": [["\u{1F9DF}\u200D\u2640\uFE0F", "\u{1F9DF}\u200D\u2640"], "", "", ["female_zombie"], 53, 13, 15, 0],
      "1f9df-200d-2642-fe0f": [["\u{1F9DF}\u200D\u2642\uFE0F", "\u{1F9DF}\u200D\u2642", "\u{1F9DF}"], "", "", ["male_zombie", "zombie"], 53, 14, 15, 0],
      "1f9e0": [["\u{1F9E0}"], "", "", ["brain"], 53, 16, 15, 0],
      "1f9e1": [["\u{1F9E1}"], "", "", ["orange_heart"], 53, 17, 15, 0],
      "1f9e2": [["\u{1F9E2}"], "", "", ["billed_cap"], 53, 18, 15, 0],
      "1f9e3": [["\u{1F9E3}"], "", "", ["scarf"], 53, 19, 15, 0],
      "1f9e4": [["\u{1F9E4}"], "", "", ["gloves"], 53, 20, 15, 0],
      "1f9e5": [["\u{1F9E5}"], "", "", ["coat"], 53, 21, 15, 0],
      "1f9e6": [["\u{1F9E6}"], "", "", ["socks"], 53, 22, 15, 0],
      "1f9e7": [["\u{1F9E7}"], "", "", ["red_envelope"], 53, 23, 15, 0],
      "1f9e8": [["\u{1F9E8}"], "", "", ["firecracker"], 53, 24, 15, 0],
      "1f9e9": [["\u{1F9E9}"], "", "", ["jigsaw"], 53, 25, 15, 0],
      "1f9ea": [["\u{1F9EA}"], "", "", ["test_tube"], 53, 26, 15, 0],
      "1f9eb": [["\u{1F9EB}"], "", "", ["petri_dish"], 53, 27, 15, 0],
      "1f9ec": [["\u{1F9EC}"], "", "", ["dna"], 53, 28, 15, 0],
      "1f9ed": [["\u{1F9ED}"], "", "", ["compass"], 53, 29, 15, 0],
      "1f9ee": [["\u{1F9EE}"], "", "", ["abacus"], 53, 30, 15, 0],
      "1f9ef": [["\u{1F9EF}"], "", "", ["fire_extinguisher"], 53, 31, 15, 0],
      "1f9f0": [["\u{1F9F0}"], "", "", ["toolbox"], 53, 32, 15, 0],
      "1f9f1": [["\u{1F9F1}"], "", "", ["bricks"], 53, 33, 15, 0],
      "1f9f2": [["\u{1F9F2}"], "", "", ["magnet"], 53, 34, 15, 0],
      "1f9f3": [["\u{1F9F3}"], "", "", ["luggage"], 53, 35, 15, 0],
      "1f9f4": [["\u{1F9F4}"], "", "", ["lotion_bottle"], 53, 36, 15, 0],
      "1f9f5": [["\u{1F9F5}"], "", "", ["thread"], 53, 37, 15, 0],
      "1f9f6": [["\u{1F9F6}"], "", "", ["yarn"], 53, 38, 15, 0],
      "1f9f7": [["\u{1F9F7}"], "", "", ["safety_pin"], 53, 39, 15, 0],
      "1f9f8": [["\u{1F9F8}"], "", "", ["teddy_bear"], 53, 40, 15, 0],
      "1f9f9": [["\u{1F9F9}"], "", "", ["broom"], 53, 41, 15, 0],
      "1f9fa": [["\u{1F9FA}"], "", "", ["basket"], 53, 42, 15, 0],
      "1f9fb": [["\u{1F9FB}"], "", "", ["roll_of_paper"], 53, 43, 15, 0],
      "1f9fc": [["\u{1F9FC}"], "", "", ["soap"], 53, 44, 15, 0],
      "1f9fd": [["\u{1F9FD}"], "", "", ["sponge"], 53, 45, 15, 0],
      "1f9fe": [["\u{1F9FE}"], "", "", ["receipt"], 53, 46, 15, 0],
      "1f9ff": [["\u{1F9FF}"], "", "", ["nazar_amulet"], 53, 47, 15, 0],
      "1fa70": [["\u{1FA70}"], "", "", ["ballet_shoes"], 53, 48, 15, 0],
      "1fa71": [["\u{1FA71}"], "", "", ["one-piece_swimsuit"], 53, 49, 15, 0],
      "1fa72": [["\u{1FA72}"], "", "", ["briefs"], 53, 50, 15, 0],
      "1fa73": [["\u{1FA73}"], "", "", ["shorts"], 53, 51, 15, 0],
      "1fa74": [["\u{1FA74}"], "", "", ["thong_sandal"], 53, 52, 15, 0],
      "1fa75": [["\u{1FA75}"], "", "", ["light_blue_heart"], 53, 53, 3, 0],
      "1fa76": [["\u{1FA76}"], "", "", ["grey_heart"], 53, 54, 3, 0],
      "1fa77": [["\u{1FA77}"], "", "", ["pink_heart"], 53, 55, 3, 0],
      "1fa78": [["\u{1FA78}"], "", "", ["drop_of_blood"], 53, 56, 15, 0],
      "1fa79": [["\u{1FA79}"], "", "", ["adhesive_bandage"], 53, 57, 15, 0],
      "1fa7a": [["\u{1FA7A}"], "", "", ["stethoscope"], 53, 58, 15, 0],
      "1fa7b": [["\u{1FA7B}"], "", "", ["x-ray"], 53, 59, 15, 0],
      "1fa7c": [["\u{1FA7C}"], "", "", ["crutch"], 53, 60, 15, 0],
      "1fa80": [["\u{1FA80}"], "", "", ["yo-yo"], 54, 0, 15, 0],
      "1fa81": [["\u{1FA81}"], "", "", ["kite"], 54, 1, 15, 0],
      "1fa82": [["\u{1FA82}"], "", "", ["parachute"], 54, 2, 15, 0],
      "1fa83": [["\u{1FA83}"], "", "", ["boomerang"], 54, 3, 15, 0],
      "1fa84": [["\u{1FA84}"], "", "", ["magic_wand"], 54, 4, 15, 0],
      "1fa85": [["\u{1FA85}"], "", "", ["pinata"], 54, 5, 15, 0],
      "1fa86": [["\u{1FA86}"], "", "", ["nesting_dolls"], 54, 6, 15, 0],
      "1fa87": [["\u{1FA87}"], "", "", ["maracas"], 54, 7, 3, 0],
      "1fa88": [["\u{1FA88}"], "", "", ["flute"], 54, 8, 3, 0],
      "1fa90": [["\u{1FA90}"], "", "", ["ringed_planet"], 54, 9, 15, 0],
      "1fa91": [["\u{1FA91}"], "", "", ["chair"], 54, 10, 15, 0],
      "1fa92": [["\u{1FA92}"], "", "", ["razor"], 54, 11, 15, 0],
      "1fa93": [["\u{1FA93}"], "", "", ["axe"], 54, 12, 15, 0],
      "1fa94": [["\u{1FA94}"], "", "", ["diya_lamp"], 54, 13, 15, 0],
      "1fa95": [["\u{1FA95}"], "", "", ["banjo"], 54, 14, 15, 0],
      "1fa96": [["\u{1FA96}"], "", "", ["military_helmet"], 54, 15, 15, 0],
      "1fa97": [["\u{1FA97}"], "", "", ["accordion"], 54, 16, 15, 0],
      "1fa98": [["\u{1FA98}"], "", "", ["long_drum"], 54, 17, 15, 0],
      "1fa99": [["\u{1FA99}"], "", "", ["coin"], 54, 18, 15, 0],
      "1fa9a": [["\u{1FA9A}"], "", "", ["carpentry_saw"], 54, 19, 15, 0],
      "1fa9b": [["\u{1FA9B}"], "", "", ["screwdriver"], 54, 20, 15, 0],
      "1fa9c": [["\u{1FA9C}"], "", "", ["ladder"], 54, 21, 15, 0],
      "1fa9d": [["\u{1FA9D}"], "", "", ["hook"], 54, 22, 15, 0],
      "1fa9e": [["\u{1FA9E}"], "", "", ["mirror"], 54, 23, 15, 0],
      "1fa9f": [["\u{1FA9F}"], "", "", ["window"], 54, 24, 15, 0],
      "1faa0": [["\u{1FAA0}"], "", "", ["plunger"], 54, 25, 15, 0],
      "1faa1": [["\u{1FAA1}"], "", "", ["sewing_needle"], 54, 26, 15, 0],
      "1faa2": [["\u{1FAA2}"], "", "", ["knot"], 54, 27, 15, 0],
      "1faa3": [["\u{1FAA3}"], "", "", ["bucket"], 54, 28, 15, 0],
      "1faa4": [["\u{1FAA4}"], "", "", ["mouse_trap"], 54, 29, 15, 0],
      "1faa5": [["\u{1FAA5}"], "", "", ["toothbrush"], 54, 30, 15, 0],
      "1faa6": [["\u{1FAA6}"], "", "", ["headstone"], 54, 31, 15, 0],
      "1faa7": [["\u{1FAA7}"], "", "", ["placard"], 54, 32, 15, 0],
      "1faa8": [["\u{1FAA8}"], "", "", ["rock"], 54, 33, 15, 0],
      "1faa9": [["\u{1FAA9}"], "", "", ["mirror_ball"], 54, 34, 15, 0],
      "1faaa": [["\u{1FAAA}"], "", "", ["identification_card"], 54, 35, 15, 0],
      "1faab": [["\u{1FAAB}"], "", "", ["low_battery"], 54, 36, 15, 0],
      "1faac": [["\u{1FAAC}"], "", "", ["hamsa"], 54, 37, 15, 0],
      "1faad": [["\u{1FAAD}"], "", "", ["folding_hand_fan"], 54, 38, 3, 0],
      "1faae": [["\u{1FAAE}"], "", "", ["hair_pick"], 54, 39, 3, 0],
      "1faaf": [["\u{1FAAF}"], "", "", ["khanda"], 54, 40, 3, 0],
      "1fab0": [["\u{1FAB0}"], "", "", ["fly"], 54, 41, 15, 0],
      "1fab1": [["\u{1FAB1}"], "", "", ["worm"], 54, 42, 15, 0],
      "1fab2": [["\u{1FAB2}"], "", "", ["beetle"], 54, 43, 15, 0],
      "1fab3": [["\u{1FAB3}"], "", "", ["cockroach"], 54, 44, 15, 0],
      "1fab4": [["\u{1FAB4}"], "", "", ["potted_plant"], 54, 45, 15, 0],
      "1fab5": [["\u{1FAB5}"], "", "", ["wood"], 54, 46, 15, 0],
      "1fab6": [["\u{1FAB6}"], "", "", ["feather"], 54, 47, 15, 0],
      "1fab7": [["\u{1FAB7}"], "", "", ["lotus"], 54, 48, 15, 0],
      "1fab8": [["\u{1FAB8}"], "", "", ["coral"], 54, 49, 15, 0],
      "1fab9": [["\u{1FAB9}"], "", "", ["empty_nest"], 54, 50, 15, 0],
      "1faba": [["\u{1FABA}"], "", "", ["nest_with_eggs"], 54, 51, 15, 0],
      "1fabb": [["\u{1FABB}"], "", "", ["hyacinth"], 54, 52, 3, 0],
      "1fabc": [["\u{1FABC}"], "", "", ["jellyfish"], 54, 53, 3, 0],
      "1fabd": [["\u{1FABD}"], "", "", ["wing"], 54, 54, 3, 0],
      "1fabf": [["\u{1FABF}"], "", "", ["goose"], 54, 55, 3, 0],
      "1fac0": [["\u{1FAC0}"], "", "", ["anatomical_heart"], 54, 56, 15, 0],
      "1fac1": [["\u{1FAC1}"], "", "", ["lungs"], 54, 57, 15, 0],
      "1fac2": [["\u{1FAC2}"], "", "", ["people_hugging"], 54, 58, 15, 0],
      "1fac3": [["\u{1FAC3}"], "", "", ["pregnant_man"], 54, 59, 15, 0],
      "1fac4": [["\u{1FAC4}"], "", "", ["pregnant_person"], 55, 4, 15, 0],
      "1fac5": [["\u{1FAC5}"], "", "", ["person_with_crown"], 55, 10, 15, 0],
      "1face": [["\u{1FACE}"], "", "", ["moose"], 55, 16, 3, 0],
      "1facf": [["\u{1FACF}"], "", "", ["donkey"], 55, 17, 3, 0],
      "1fad0": [["\u{1FAD0}"], "", "", ["blueberries"], 55, 18, 15, 0],
      "1fad1": [["\u{1FAD1}"], "", "", ["bell_pepper"], 55, 19, 15, 0],
      "1fad2": [["\u{1FAD2}"], "", "", ["olive"], 55, 20, 15, 0],
      "1fad3": [["\u{1FAD3}"], "", "", ["flatbread"], 55, 21, 15, 0],
      "1fad4": [["\u{1FAD4}"], "", "", ["tamale"], 55, 22, 15, 0],
      "1fad5": [["\u{1FAD5}"], "", "", ["fondue"], 55, 23, 15, 0],
      "1fad6": [["\u{1FAD6}"], "", "", ["teapot"], 55, 24, 15, 0],
      "1fad7": [["\u{1FAD7}"], "", "", ["pouring_liquid"], 55, 25, 15, 0],
      "1fad8": [["\u{1FAD8}"], "", "", ["beans"], 55, 26, 15, 0],
      "1fad9": [["\u{1FAD9}"], "", "", ["jar"], 55, 27, 15, 0],
      "1fada": [["\u{1FADA}"], "", "", ["ginger_root"], 55, 28, 3, 0],
      "1fadb": [["\u{1FADB}"], "", "", ["pea_pod"], 55, 29, 3, 0],
      "1fae0": [["\u{1FAE0}"], "", "", ["melting_face"], 55, 30, 15, 0],
      "1fae1": [["\u{1FAE1}"], "", "", ["saluting_face"], 55, 31, 15, 0],
      "1fae2": [["\u{1FAE2}"], "", "", ["face_with_open_eyes_and_hand_over_mouth"], 55, 32, 15, 0],
      "1fae3": [["\u{1FAE3}"], "", "", ["face_with_peeking_eye"], 55, 33, 15, 0],
      "1fae4": [["\u{1FAE4}"], "", "", ["face_with_diagonal_mouth"], 55, 34, 15, 0],
      "1fae5": [["\u{1FAE5}"], "", "", ["dotted_line_face"], 55, 35, 15, 0],
      "1fae6": [["\u{1FAE6}"], "", "", ["biting_lip"], 55, 36, 15, 0],
      "1fae7": [["\u{1FAE7}"], "", "", ["bubbles"], 55, 37, 15, 0],
      "1fae8": [["\u{1FAE8}"], "", "", ["shaking_face"], 55, 38, 3, 0],
      "1faf0": [["\u{1FAF0}"], "", "", ["hand_with_index_finger_and_thumb_crossed"], 55, 39, 15, 0],
      "1faf1": [["\u{1FAF1}"], "", "", ["rightwards_hand"], 55, 45, 15, 0],
      "1faf2": [["\u{1FAF2}"], "", "", ["leftwards_hand"], 55, 51, 15, 0],
      "1faf3": [["\u{1FAF3}"], "", "", ["palm_down_hand"], 55, 57, 15, 0],
      "1faf4": [["\u{1FAF4}"], "", "", ["palm_up_hand"], 56, 2, 15, 0],
      "1faf5": [["\u{1FAF5}"], "", "", ["index_pointing_at_the_viewer"], 56, 8, 15, 0],
      "1faf6": [["\u{1FAF6}"], "", "", ["heart_hands"], 56, 14, 15, 0],
      "1faf7": [["\u{1FAF7}"], "", "", ["leftwards_pushing_hand"], 56, 20, 3, 0],
      "1faf8": [["\u{1FAF8}"], "", "", ["rightwards_pushing_hand"], 56, 26, 3, 0],
      "203c-fe0f": [["\u203C\uFE0F", "\u203C"], "", "\u{FEB06}", ["bangbang"], 56, 32, 15, 0],
      "2049-fe0f": [["\u2049\uFE0F", "\u2049"], "", "\u{FEB05}", ["interrobang"], 56, 33, 15, 0],
      "2122-fe0f": [["\u2122\uFE0F", "\u2122"], "\uE537", "\u{FEB2A}", ["tm"], 56, 34, 15, 0],
      "2139-fe0f": [["\u2139\uFE0F", "\u2139"], "", "\u{FEB47}", ["information_source"], 56, 35, 15, 0],
      "2194-fe0f": [["\u2194\uFE0F", "\u2194"], "", "\u{FEAF6}", ["left_right_arrow"], 56, 36, 15, 0],
      "2195-fe0f": [["\u2195\uFE0F", "\u2195"], "", "\u{FEAF7}", ["arrow_up_down"], 56, 37, 15, 0],
      "2196-fe0f": [["\u2196\uFE0F", "\u2196"], "\uE237", "\u{FEAF2}", ["arrow_upper_left"], 56, 38, 15, 0],
      "2197-fe0f": [["\u2197\uFE0F", "\u2197"], "\uE236", "\u{FEAF0}", ["arrow_upper_right"], 56, 39, 15, 0],
      "2198-fe0f": [["\u2198\uFE0F", "\u2198"], "\uE238", "\u{FEAF1}", ["arrow_lower_right"], 56, 40, 15, 0],
      "2199-fe0f": [["\u2199\uFE0F", "\u2199"], "\uE239", "\u{FEAF3}", ["arrow_lower_left"], 56, 41, 15, 0],
      "21a9-fe0f": [["\u21A9\uFE0F", "\u21A9"], "", "\u{FEB83}", ["leftwards_arrow_with_hook"], 56, 42, 15, 0],
      "21aa-fe0f": [["\u21AA\uFE0F", "\u21AA"], "", "\u{FEB88}", ["arrow_right_hook"], 56, 43, 15, 0],
      "231a": [["\u231A"], "", "\u{FE01D}", ["watch"], 56, 44, 15, 0],
      "231b": [["\u231B"], "", "\u{FE01C}", ["hourglass"], 56, 45, 15, 0],
      "2328-fe0f": [["\u2328\uFE0F", "\u2328"], "", "", ["keyboard"], 56, 46, 15, 0],
      "23cf-fe0f": [["\u23CF\uFE0F", "\u23CF"], "", "", ["eject"], 56, 47, 15, 0],
      "23e9": [["\u23E9"], "\uE23C", "\u{FEAFE}", ["fast_forward"], 56, 48, 15, 0],
      "23ea": [["\u23EA"], "\uE23D", "\u{FEAFF}", ["rewind"], 56, 49, 15, 0],
      "23eb": [["\u23EB"], "", "\u{FEB03}", ["arrow_double_up"], 56, 50, 15, 0],
      "23ec": [["\u23EC"], "", "\u{FEB02}", ["arrow_double_down"], 56, 51, 15, 0],
      "23ed-fe0f": [["\u23ED\uFE0F", "\u23ED"], "", "", ["black_right_pointing_double_triangle_with_vertical_bar"], 56, 52, 15, 0],
      "23ee-fe0f": [["\u23EE\uFE0F", "\u23EE"], "", "", ["black_left_pointing_double_triangle_with_vertical_bar"], 56, 53, 15, 0],
      "23ef-fe0f": [["\u23EF\uFE0F", "\u23EF"], "", "", ["black_right_pointing_triangle_with_double_vertical_bar"], 56, 54, 15, 0],
      "23f0": [["\u23F0"], "", "\u{FE02A}", ["alarm_clock"], 56, 55, 15, 0],
      "23f1-fe0f": [["\u23F1\uFE0F", "\u23F1"], "", "", ["stopwatch"], 56, 56, 15, 0],
      "23f2-fe0f": [["\u23F2\uFE0F", "\u23F2"], "", "", ["timer_clock"], 56, 57, 15, 0],
      "23f3": [["\u23F3"], "", "\u{FE01B}", ["hourglass_flowing_sand"], 56, 58, 15, 0],
      "23f8-fe0f": [["\u23F8\uFE0F", "\u23F8"], "", "", ["double_vertical_bar"], 56, 59, 15, 0],
      "23f9-fe0f": [["\u23F9\uFE0F", "\u23F9"], "", "", ["black_square_for_stop"], 56, 60, 15, 0],
      "23fa-fe0f": [["\u23FA\uFE0F", "\u23FA"], "", "", ["black_circle_for_record"], 57, 0, 15, 0],
      "24c2-fe0f": [["\u24C2\uFE0F", "\u24C2"], "", "\u{FE7E1}", ["m"], 57, 1, 15, 0],
      "25aa-fe0f": [["\u25AA\uFE0F", "\u25AA"], "", "\u{FEB6E}", ["black_small_square"], 57, 2, 15, 0],
      "25ab-fe0f": [["\u25AB\uFE0F", "\u25AB"], "", "\u{FEB6D}", ["white_small_square"], 57, 3, 15, 0],
      "25b6-fe0f": [["\u25B6\uFE0F", "\u25B6"], "\uE23A", "\u{FEAFC}", ["arrow_forward"], 57, 4, 15, 0],
      "25c0-fe0f": [["\u25C0\uFE0F", "\u25C0"], "\uE23B", "\u{FEAFD}", ["arrow_backward"], 57, 5, 15, 0],
      "25fb-fe0f": [["\u25FB\uFE0F", "\u25FB"], "", "\u{FEB71}", ["white_medium_square"], 57, 6, 15, 0],
      "25fc-fe0f": [["\u25FC\uFE0F", "\u25FC"], "", "\u{FEB72}", ["black_medium_square"], 57, 7, 15, 0],
      "25fd": [["\u25FD"], "", "\u{FEB6F}", ["white_medium_small_square"], 57, 8, 15, 0],
      "25fe": [["\u25FE"], "", "\u{FEB70}", ["black_medium_small_square"], 57, 9, 15, 0],
      "2600-fe0f": [["\u2600\uFE0F", "\u2600"], "\uE04A", "\u{FE000}", ["sunny"], 57, 10, 15, 0],
      "2601-fe0f": [["\u2601\uFE0F", "\u2601"], "\uE049", "\u{FE001}", ["cloud"], 57, 11, 15, 0],
      "2602-fe0f": [["\u2602\uFE0F", "\u2602"], "", "", ["umbrella"], 57, 12, 15, 0],
      "2603-fe0f": [["\u2603\uFE0F", "\u2603"], "", "", ["snowman"], 57, 13, 15, 0],
      "2604-fe0f": [["\u2604\uFE0F", "\u2604"], "", "", ["comet"], 57, 14, 15, 0],
      "260e-fe0f": [["\u260E\uFE0F", "\u260E"], "\uE009", "\u{FE523}", ["phone", "telephone"], 57, 15, 15, 0],
      "2611-fe0f": [["\u2611\uFE0F", "\u2611"], "", "\u{FEB8B}", ["ballot_box_with_check"], 57, 16, 15, 0],
      "2614": [["\u2614"], "\uE04B", "\u{FE002}", ["umbrella_with_rain_drops"], 57, 17, 15, 0],
      "2615": [["\u2615"], "\uE045", "\u{FE981}", ["coffee"], 57, 18, 15, 0],
      "2618-fe0f": [["\u2618\uFE0F", "\u2618"], "", "", ["shamrock"], 57, 19, 15, 0],
      "261d-fe0f": [["\u261D\uFE0F", "\u261D"], "\uE00F", "\u{FEB98}", ["point_up"], 57, 20, 15, 0],
      "2620-fe0f": [["\u2620\uFE0F", "\u2620"], "", "", ["skull_and_crossbones"], 57, 26, 15, 0],
      "2622-fe0f": [["\u2622\uFE0F", "\u2622"], "", "", ["radioactive_sign"], 57, 27, 15, 0],
      "2623-fe0f": [["\u2623\uFE0F", "\u2623"], "", "", ["biohazard_sign"], 57, 28, 15, 0],
      "2626-fe0f": [["\u2626\uFE0F", "\u2626"], "", "", ["orthodox_cross"], 57, 29, 15, 0],
      "262a-fe0f": [["\u262A\uFE0F", "\u262A"], "", "", ["star_and_crescent"], 57, 30, 15, 0],
      "262e-fe0f": [["\u262E\uFE0F", "\u262E"], "", "", ["peace_symbol"], 57, 31, 15, 0],
      "262f-fe0f": [["\u262F\uFE0F", "\u262F"], "", "", ["yin_yang"], 57, 32, 15, 0],
      "2638-fe0f": [["\u2638\uFE0F", "\u2638"], "", "", ["wheel_of_dharma"], 57, 33, 15, 0],
      "2639-fe0f": [["\u2639\uFE0F", "\u2639"], "", "", ["white_frowning_face"], 57, 34, 15, 0],
      "263a-fe0f": [["\u263A\uFE0F", "\u263A"], "\uE414", "\u{FE336}", ["relaxed"], 57, 35, 15, 0],
      "2640-fe0f": [["\u2640\uFE0F", "\u2640"], "", "", ["female_sign"], 57, 36, 14, 0],
      "2642-fe0f": [["\u2642\uFE0F", "\u2642"], "", "", ["male_sign"], 57, 37, 14, 0],
      "2648": [["\u2648"], "\uE23F", "\u{FE02B}", ["aries"], 57, 38, 15, 0],
      "2649": [["\u2649"], "\uE240", "\u{FE02C}", ["taurus"], 57, 39, 15, 0],
      "264a": [["\u264A"], "\uE241", "\u{FE02D}", ["gemini"], 57, 40, 15, 0],
      "264b": [["\u264B"], "\uE242", "\u{FE02E}", ["cancer"], 57, 41, 15, 0],
      "264c": [["\u264C"], "\uE243", "\u{FE02F}", ["leo"], 57, 42, 15, 0],
      "264d": [["\u264D"], "\uE244", "\u{FE030}", ["virgo"], 57, 43, 15, 0],
      "264e": [["\u264E"], "\uE245", "\u{FE031}", ["libra"], 57, 44, 15, 0],
      "264f": [["\u264F"], "\uE246", "\u{FE032}", ["scorpius"], 57, 45, 15, 0],
      "2650": [["\u2650"], "\uE247", "\u{FE033}", ["sagittarius"], 57, 46, 15, 0],
      "2651": [["\u2651"], "\uE248", "\u{FE034}", ["capricorn"], 57, 47, 15, 0],
      "2652": [["\u2652"], "\uE249", "\u{FE035}", ["aquarius"], 57, 48, 15, 0],
      "2653": [["\u2653"], "\uE24A", "\u{FE036}", ["pisces"], 57, 49, 15, 0],
      "265f-fe0f": [["\u265F\uFE0F", "\u265F"], "", "", ["chess_pawn"], 57, 50, 15, 0],
      "2660-fe0f": [["\u2660\uFE0F", "\u2660"], "\uE20E", "\u{FEB1B}", ["spades"], 57, 51, 15, 0],
      "2663-fe0f": [["\u2663\uFE0F", "\u2663"], "\uE20F", "\u{FEB1D}", ["clubs"], 57, 52, 15, 0],
      "2665-fe0f": [["\u2665\uFE0F", "\u2665"], "\uE20C", "\u{FEB1A}", ["hearts"], 57, 53, 15, 0],
      "2666-fe0f": [["\u2666\uFE0F", "\u2666"], "\uE20D", "\u{FEB1C}", ["diamonds"], 57, 54, 15, 0],
      "2668-fe0f": [["\u2668\uFE0F", "\u2668"], "\uE123", "\u{FE7FA}", ["hotsprings"], 57, 55, 15, 0],
      "267b-fe0f": [["\u267B\uFE0F", "\u267B"], "", "\u{FEB2C}", ["recycle"], 57, 56, 15, 0],
      "267e-fe0f": [["\u267E\uFE0F", "\u267E"], "", "", ["infinity"], 57, 57, 15, 0],
      "267f": [["\u267F"], "\uE20A", "\u{FEB20}", ["wheelchair"], 57, 58, 15, 0],
      "2692-fe0f": [["\u2692\uFE0F", "\u2692"], "", "", ["hammer_and_pick"], 57, 59, 15, 0],
      "2693": [["\u2693"], "", "\u{FE4C1}", ["anchor"], 57, 60, 15, 0],
      "2694-fe0f": [["\u2694\uFE0F", "\u2694"], "", "", ["crossed_swords"], 58, 0, 15, 0],
      "2695-fe0f": [["\u2695\uFE0F", "\u2695"], "", "", ["medical_symbol", "staff_of_aesculapius"], 58, 1, 14, 0],
      "2696-fe0f": [["\u2696\uFE0F", "\u2696"], "", "", ["scales"], 58, 2, 15, 0],
      "2697-fe0f": [["\u2697\uFE0F", "\u2697"], "", "", ["alembic"], 58, 3, 15, 0],
      "2699-fe0f": [["\u2699\uFE0F", "\u2699"], "", "", ["gear"], 58, 4, 15, 0],
      "269b-fe0f": [["\u269B\uFE0F", "\u269B"], "", "", ["atom_symbol"], 58, 5, 15, 0],
      "269c-fe0f": [["\u269C\uFE0F", "\u269C"], "", "", ["fleur_de_lis"], 58, 6, 15, 0],
      "26a0-fe0f": [["\u26A0\uFE0F", "\u26A0"], "\uE252", "\u{FEB23}", ["warning"], 58, 7, 15, 0],
      "26a1": [["\u26A1"], "\uE13D", "\u{FE004}", ["zap"], 58, 8, 15, 0],
      "26a7-fe0f": [["\u26A7\uFE0F", "\u26A7"], "", "", ["transgender_symbol"], 58, 9, 15, 0],
      "26aa": [["\u26AA"], "", "\u{FEB65}", ["white_circle"], 58, 10, 15, 0],
      "26ab": [["\u26AB"], "", "\u{FEB66}", ["black_circle"], 58, 11, 15, 0],
      "26b0-fe0f": [["\u26B0\uFE0F", "\u26B0"], "", "", ["coffin"], 58, 12, 15, 0],
      "26b1-fe0f": [["\u26B1\uFE0F", "\u26B1"], "", "", ["funeral_urn"], 58, 13, 15, 0],
      "26bd": [["\u26BD"], "\uE018", "\u{FE7D4}", ["soccer"], 58, 14, 15, 0],
      "26be": [["\u26BE"], "\uE016", "\u{FE7D1}", ["baseball"], 58, 15, 15, 0],
      "26c4": [["\u26C4"], "\uE048", "\u{FE003}", ["snowman_without_snow"], 58, 16, 15, 0],
      "26c5": [["\u26C5"], "", "\u{FE00F}", ["partly_sunny"], 58, 17, 15, 0],
      "26c8-fe0f": [["\u26C8\uFE0F", "\u26C8"], "", "", ["thunder_cloud_and_rain"], 58, 18, 15, 0],
      "26ce": [["\u26CE"], "\uE24B", "\u{FE037}", ["ophiuchus"], 58, 19, 15, 0],
      "26cf-fe0f": [["\u26CF\uFE0F", "\u26CF"], "", "", ["pick"], 58, 20, 15, 0],
      "26d1-fe0f": [["\u26D1\uFE0F", "\u26D1"], "", "", ["helmet_with_white_cross"], 58, 21, 15, 0],
      "26d3-fe0f": [["\u26D3\uFE0F", "\u26D3"], "", "", ["chains"], 58, 22, 15, 0],
      "26d4": [["\u26D4"], "", "\u{FEB26}", ["no_entry"], 58, 23, 15, 0],
      "26e9-fe0f": [["\u26E9\uFE0F", "\u26E9"], "", "", ["shinto_shrine"], 58, 24, 15, 0],
      "26ea": [["\u26EA"], "\uE037", "\u{FE4BB}", ["church"], 58, 25, 15, 0],
      "26f0-fe0f": [["\u26F0\uFE0F", "\u26F0"], "", "", ["mountain"], 58, 26, 15, 0],
      "26f1-fe0f": [["\u26F1\uFE0F", "\u26F1"], "", "", ["umbrella_on_ground"], 58, 27, 15, 0],
      "26f2": [["\u26F2"], "\uE121", "\u{FE4BC}", ["fountain"], 58, 28, 15, 0],
      "26f3": [["\u26F3"], "\uE014", "\u{FE7D2}", ["golf"], 58, 29, 15, 0],
      "26f4-fe0f": [["\u26F4\uFE0F", "\u26F4"], "", "", ["ferry"], 58, 30, 15, 0],
      "26f5": [["\u26F5"], "\uE01C", "\u{FE7EA}", ["boat", "sailboat"], 58, 31, 15, 0],
      "26f7-fe0f": [["\u26F7\uFE0F", "\u26F7"], "", "", ["skier"], 58, 32, 15, 0],
      "26f8-fe0f": [["\u26F8\uFE0F", "\u26F8"], "", "", ["ice_skate"], 58, 33, 15, 0],
      "26f9-fe0f-200d-2640-fe0f": [["\u26F9\uFE0F\u200D\u2640\uFE0F"], "", "", ["woman-bouncing-ball"], 58, 34, 7, 0],
      "26f9-fe0f-200d-2642-fe0f": [["\u26F9\uFE0F\u200D\u2642\uFE0F", "\u26F9\uFE0F", "\u26F9"], "", "", ["man-bouncing-ball", "person_with_ball"], 58, 40, 7, 0],
      "26fa": [["\u26FA"], "\uE122", "\u{FE7FB}", ["tent"], 58, 52, 15, 0],
      "26fd": [["\u26FD"], "\uE03A", "\u{FE7F5}", ["fuelpump"], 58, 53, 15, 0],
      "2702-fe0f": [["\u2702\uFE0F", "\u2702"], "\uE313", "\u{FE53E}", ["scissors"], 58, 54, 15, 0],
      "2705": [["\u2705"], "", "\u{FEB4A}", ["white_check_mark"], 58, 55, 15, 0],
      "2708-fe0f": [["\u2708\uFE0F", "\u2708"], "\uE01D", "\u{FE7E9}", ["airplane"], 58, 56, 15, 0],
      "2709-fe0f": [["\u2709\uFE0F", "\u2709"], "", "\u{FE529}", ["email", "envelope"], 58, 57, 15, 0],
      "270a": [["\u270A"], "\uE010", "\u{FEB93}", ["fist"], 58, 58, 15, 0],
      "270b": [["\u270B"], "\uE012", "\u{FEB95}", ["hand", "raised_hand"], 59, 3, 15, 0],
      "270c-fe0f": [["\u270C\uFE0F", "\u270C"], "\uE011", "\u{FEB94}", ["v"], 59, 9, 15, 0],
      "270d-fe0f": [["\u270D\uFE0F", "\u270D"], "", "", ["writing_hand"], 59, 15, 15, 0],
      "270f-fe0f": [["\u270F\uFE0F", "\u270F"], "", "\u{FE539}", ["pencil2"], 59, 21, 15, 0],
      "2712-fe0f": [["\u2712\uFE0F", "\u2712"], "", "\u{FE536}", ["black_nib"], 59, 22, 15, 0],
      "2714-fe0f": [["\u2714\uFE0F", "\u2714"], "", "\u{FEB49}", ["heavy_check_mark"], 59, 23, 15, 0],
      "2716-fe0f": [["\u2716\uFE0F", "\u2716"], "", "\u{FEB53}", ["heavy_multiplication_x"], 59, 24, 15, 0],
      "271d-fe0f": [["\u271D\uFE0F", "\u271D"], "", "", ["latin_cross"], 59, 25, 15, 0],
      "2721-fe0f": [["\u2721\uFE0F", "\u2721"], "", "", ["star_of_david"], 59, 26, 15, 0],
      "2728": [["\u2728"], "\uE32E", "\u{FEB60}", ["sparkles"], 59, 27, 15, 0],
      "2733-fe0f": [["\u2733\uFE0F", "\u2733"], "\uE206", "\u{FEB62}", ["eight_spoked_asterisk"], 59, 28, 15, 0],
      "2734-fe0f": [["\u2734\uFE0F", "\u2734"], "\uE205", "\u{FEB61}", ["eight_pointed_black_star"], 59, 29, 15, 0],
      "2744-fe0f": [["\u2744\uFE0F", "\u2744"], "", "\u{FE00E}", ["snowflake"], 59, 30, 15, 0],
      "2747-fe0f": [["\u2747\uFE0F", "\u2747"], "", "\u{FEB77}", ["sparkle"], 59, 31, 15, 0],
      "274c": [["\u274C"], "\uE333", "\u{FEB45}", ["x"], 59, 32, 15, 0],
      "274e": [["\u274E"], "", "\u{FEB46}", ["negative_squared_cross_mark"], 59, 33, 15, 0],
      "2753": [["\u2753"], "\uE020", "\u{FEB09}", ["question"], 59, 34, 15, 0],
      "2754": [["\u2754"], "\uE336", "\u{FEB0A}", ["grey_question"], 59, 35, 15, 0],
      "2755": [["\u2755"], "\uE337", "\u{FEB0B}", ["grey_exclamation"], 59, 36, 15, 0],
      "2757": [["\u2757"], "\uE021", "\u{FEB04}", ["exclamation", "heavy_exclamation_mark"], 59, 37, 15, 0],
      "2763-fe0f": [["\u2763\uFE0F", "\u2763"], "", "", ["heavy_heart_exclamation_mark_ornament"], 59, 38, 15, 0],
      "2764-fe0f-200d-1f525": [["\u2764\uFE0F\u200D\u{1F525}", "\u2764\u200D\u{1F525}"], "", "", ["heart_on_fire"], 59, 39, 15, 0],
      "2764-fe0f-200d-1fa79": [["\u2764\uFE0F\u200D\u{1FA79}", "\u2764\u200D\u{1FA79}"], "", "", ["mending_heart"], 59, 40, 15, 0],
      "2764-fe0f": [["\u2764\uFE0F", "\u2764"], "\uE022", "\u{FEB0C}", ["heart"], 59, 41, 15, 0, "<3"],
      "2795": [["\u2795"], "", "\u{FEB51}", ["heavy_plus_sign"], 59, 42, 15, 0],
      "2796": [["\u2796"], "", "\u{FEB52}", ["heavy_minus_sign"], 59, 43, 15, 0],
      "2797": [["\u2797"], "", "\u{FEB54}", ["heavy_division_sign"], 59, 44, 15, 0],
      "27a1-fe0f": [["\u27A1\uFE0F", "\u27A1"], "\uE234", "\u{FEAFA}", ["arrow_right"], 59, 45, 15, 0],
      "27b0": [["\u27B0"], "", "\u{FEB08}", ["curly_loop"], 59, 46, 15, 0],
      "27bf": [["\u27BF"], "\uE211", "\u{FE82B}", ["loop"], 59, 47, 15, 0],
      "2934-fe0f": [["\u2934\uFE0F", "\u2934"], "", "\u{FEAF4}", ["arrow_heading_up"], 59, 48, 15, 0],
      "2935-fe0f": [["\u2935\uFE0F", "\u2935"], "", "\u{FEAF5}", ["arrow_heading_down"], 59, 49, 15, 0],
      "2b05-fe0f": [["\u2B05\uFE0F", "\u2B05"], "\uE235", "\u{FEAFB}", ["arrow_left"], 59, 50, 15, 0],
      "2b06-fe0f": [["\u2B06\uFE0F", "\u2B06"], "\uE232", "\u{FEAF8}", ["arrow_up"], 59, 51, 15, 0],
      "2b07-fe0f": [["\u2B07\uFE0F", "\u2B07"], "\uE233", "\u{FEAF9}", ["arrow_down"], 59, 52, 15, 0],
      "2b1b": [["\u2B1B"], "", "\u{FEB6C}", ["black_large_square"], 59, 53, 15, 0],
      "2b1c": [["\u2B1C"], "", "\u{FEB6B}", ["white_large_square"], 59, 54, 15, 0],
      "2b50": [["\u2B50"], "\uE32F", "\u{FEB68}", ["star"], 59, 55, 15, 0],
      "2b55": [["\u2B55"], "\uE332", "\u{FEB44}", ["o"], 59, 56, 15, 0],
      "3030-fe0f": [["\u3030\uFE0F", "\u3030"], "", "\u{FEB07}", ["wavy_dash"], 59, 57, 15, 0],
      "303d-fe0f": [["\u303D\uFE0F", "\u303D"], "\uE12C", "\u{FE81B}", ["part_alternation_mark"], 59, 58, 15, 0],
      "3297-fe0f": [["\u3297\uFE0F", "\u3297"], "\uE30D", "\u{FEB43}", ["congratulations"], 59, 59, 15, 0],
      "3299-fe0f": [["\u3299\uFE0F", "\u3299"], "\uE315", "\u{FEB2B}", ["secret"], 59, 60, 15, 0]
    };
    emoji2.prototype.emoticons_data = {
      ":o)": "monkey_face",
      "</3": "broken_heart",
      "=)": "smiley",
      "=-)": "smiley",
      "C:": "smile",
      "c:": "smile",
      ":D": "smile",
      ":-D": "smile",
      ":>": "laughing",
      ":->": "laughing",
      ";)": "wink",
      ";-)": "wink",
      "8)": "sunglasses",
      ":|": "neutral_face",
      ":-|": "neutral_face",
      ":\\": "confused",
      ":-\\": "confused",
      ":/": "confused",
      ":-/": "confused",
      ":*": "kissing_heart",
      ":-*": "kissing_heart",
      ":p": "stuck_out_tongue",
      ":-p": "stuck_out_tongue",
      ":P": "stuck_out_tongue",
      ":-P": "stuck_out_tongue",
      ":b": "stuck_out_tongue",
      ":-b": "stuck_out_tongue",
      ";p": "stuck_out_tongue_winking_eye",
      ";-p": "stuck_out_tongue_winking_eye",
      ";b": "stuck_out_tongue_winking_eye",
      ";-b": "stuck_out_tongue_winking_eye",
      ";P": "stuck_out_tongue_winking_eye",
      ";-P": "stuck_out_tongue_winking_eye",
      "):": "disappointed",
      ":(": "disappointed",
      ":-(": "disappointed",
      ">:(": "angry",
      ">:-(": "angry",
      ":'(": "cry",
      "D:": "anguished",
      ":o": "open_mouth",
      ":-o": "open_mouth",
      ":O": "open_mouth",
      ":-O": "open_mouth",
      ":)": "slightly_smiling_face",
      "(:": "slightly_smiling_face",
      ":-)": "slightly_smiling_face",
      "<3": "heart"
    };
    emoji2.prototype.variations_data = {
      "1f385": { "1f3fb": ["1f385-1f3fb", 7, 9, 15, ["\u{1F385}\u{1F3FB}"]], "1f3fc": ["1f385-1f3fc", 7, 10, 15, ["\u{1F385}\u{1F3FC}"]], "1f3fd": ["1f385-1f3fd", 7, 11, 15, ["\u{1F385}\u{1F3FD}"]], "1f3fe": ["1f385-1f3fe", 7, 12, 15, ["\u{1F385}\u{1F3FE}"]], "1f3ff": ["1f385-1f3ff", 7, 13, 15, ["\u{1F385}\u{1F3FF}"]] },
      "1f3c2": { "1f3fb": ["1f3c2-1f3fb", 8, 9, 15, ["\u{1F3C2}\u{1F3FB}"]], "1f3fc": ["1f3c2-1f3fc", 8, 10, 15, ["\u{1F3C2}\u{1F3FC}"]], "1f3fd": ["1f3c2-1f3fd", 8, 11, 15, ["\u{1F3C2}\u{1F3FD}"]], "1f3fe": ["1f3c2-1f3fe", 8, 12, 15, ["\u{1F3C2}\u{1F3FE}"]], "1f3ff": ["1f3c2-1f3ff", 8, 13, 15, ["\u{1F3C2}\u{1F3FF}"]] },
      "1f3c3-200d-2640-fe0f": { "1f3fb": ["1f3c3-1f3fb-200d-2640-fe0f", 8, 15, 15, ["\u{1F3C3}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f3c3-1f3fc-200d-2640-fe0f", 8, 16, 15, ["\u{1F3C3}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f3c3-1f3fd-200d-2640-fe0f", 8, 17, 15, ["\u{1F3C3}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f3c3-1f3fe-200d-2640-fe0f", 8, 18, 15, ["\u{1F3C3}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f3c3-1f3ff-200d-2640-fe0f", 8, 19, 15, ["\u{1F3C3}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f3c3-200d-2642-fe0f": { "1f3fb": ["1f3c3-1f3fb-200d-2642-fe0f", 8, 21, 15, ["\u{1F3C3}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F3C3}\u{1F3FB}"]], "1f3fc": ["1f3c3-1f3fc-200d-2642-fe0f", 8, 22, 15, ["\u{1F3C3}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F3C3}\u{1F3FC}"]], "1f3fd": ["1f3c3-1f3fd-200d-2642-fe0f", 8, 23, 15, ["\u{1F3C3}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F3C3}\u{1F3FD}"]], "1f3fe": ["1f3c3-1f3fe-200d-2642-fe0f", 8, 24, 15, ["\u{1F3C3}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F3C3}\u{1F3FE}"]], "1f3ff": ["1f3c3-1f3ff-200d-2642-fe0f", 8, 25, 15, ["\u{1F3C3}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F3C3}\u{1F3FF}"]] },
      "1f3c4-200d-2640-fe0f": { "1f3fb": ["1f3c4-1f3fb-200d-2640-fe0f", 8, 33, 15, ["\u{1F3C4}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f3c4-1f3fc-200d-2640-fe0f", 8, 34, 15, ["\u{1F3C4}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f3c4-1f3fd-200d-2640-fe0f", 8, 35, 15, ["\u{1F3C4}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f3c4-1f3fe-200d-2640-fe0f", 8, 36, 15, ["\u{1F3C4}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f3c4-1f3ff-200d-2640-fe0f", 8, 37, 15, ["\u{1F3C4}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f3c4-200d-2642-fe0f": { "1f3fb": ["1f3c4-1f3fb-200d-2642-fe0f", 8, 39, 15, ["\u{1F3C4}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F3C4}\u{1F3FB}"]], "1f3fc": ["1f3c4-1f3fc-200d-2642-fe0f", 8, 40, 15, ["\u{1F3C4}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F3C4}\u{1F3FC}"]], "1f3fd": ["1f3c4-1f3fd-200d-2642-fe0f", 8, 41, 15, ["\u{1F3C4}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F3C4}\u{1F3FD}"]], "1f3fe": ["1f3c4-1f3fe-200d-2642-fe0f", 8, 42, 15, ["\u{1F3C4}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F3C4}\u{1F3FE}"]], "1f3ff": ["1f3c4-1f3ff-200d-2642-fe0f", 8, 43, 15, ["\u{1F3C4}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F3C4}\u{1F3FF}"]] },
      "1f3c7": { "1f3fb": ["1f3c7-1f3fb", 8, 53, 15, ["\u{1F3C7}\u{1F3FB}"]], "1f3fc": ["1f3c7-1f3fc", 8, 54, 15, ["\u{1F3C7}\u{1F3FC}"]], "1f3fd": ["1f3c7-1f3fd", 8, 55, 15, ["\u{1F3C7}\u{1F3FD}"]], "1f3fe": ["1f3c7-1f3fe", 8, 56, 15, ["\u{1F3C7}\u{1F3FE}"]], "1f3ff": ["1f3c7-1f3ff", 8, 57, 15, ["\u{1F3C7}\u{1F3FF}"]] },
      "1f3ca-200d-2640-fe0f": { "1f3fb": ["1f3ca-1f3fb-200d-2640-fe0f", 9, 0, 15, ["\u{1F3CA}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f3ca-1f3fc-200d-2640-fe0f", 9, 1, 15, ["\u{1F3CA}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f3ca-1f3fd-200d-2640-fe0f", 9, 2, 15, ["\u{1F3CA}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f3ca-1f3fe-200d-2640-fe0f", 9, 3, 15, ["\u{1F3CA}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f3ca-1f3ff-200d-2640-fe0f", 9, 4, 15, ["\u{1F3CA}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f3ca-200d-2642-fe0f": { "1f3fb": ["1f3ca-1f3fb-200d-2642-fe0f", 9, 6, 15, ["\u{1F3CA}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F3CA}\u{1F3FB}"]], "1f3fc": ["1f3ca-1f3fc-200d-2642-fe0f", 9, 7, 15, ["\u{1F3CA}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F3CA}\u{1F3FC}"]], "1f3fd": ["1f3ca-1f3fd-200d-2642-fe0f", 9, 8, 15, ["\u{1F3CA}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F3CA}\u{1F3FD}"]], "1f3fe": ["1f3ca-1f3fe-200d-2642-fe0f", 9, 9, 15, ["\u{1F3CA}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F3CA}\u{1F3FE}"]], "1f3ff": ["1f3ca-1f3ff-200d-2642-fe0f", 9, 10, 15, ["\u{1F3CA}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F3CA}\u{1F3FF}"]] },
      "1f3cb-fe0f-200d-2640-fe0f": { "1f3fb": ["1f3cb-1f3fb-200d-2640-fe0f", 9, 18, 15, ["\u{1F3CB}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f3cb-1f3fc-200d-2640-fe0f", 9, 19, 15, ["\u{1F3CB}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f3cb-1f3fd-200d-2640-fe0f", 9, 20, 15, ["\u{1F3CB}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f3cb-1f3fe-200d-2640-fe0f", 9, 21, 15, ["\u{1F3CB}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f3cb-1f3ff-200d-2640-fe0f", 9, 22, 15, ["\u{1F3CB}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f3cb-fe0f-200d-2642-fe0f": { "1f3fb": ["1f3cb-1f3fb-200d-2642-fe0f", 9, 24, 15, ["\u{1F3CB}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F3CB}\u{1F3FB}"]], "1f3fc": ["1f3cb-1f3fc-200d-2642-fe0f", 9, 25, 15, ["\u{1F3CB}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F3CB}\u{1F3FC}"]], "1f3fd": ["1f3cb-1f3fd-200d-2642-fe0f", 9, 26, 15, ["\u{1F3CB}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F3CB}\u{1F3FD}"]], "1f3fe": ["1f3cb-1f3fe-200d-2642-fe0f", 9, 27, 15, ["\u{1F3CB}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F3CB}\u{1F3FE}"]], "1f3ff": ["1f3cb-1f3ff-200d-2642-fe0f", 9, 28, 15, ["\u{1F3CB}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F3CB}\u{1F3FF}"]] },
      "1f3cc-fe0f-200d-2640-fe0f": { "1f3fb": ["1f3cc-1f3fb-200d-2640-fe0f", 9, 36, 15, ["\u{1F3CC}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f3cc-1f3fc-200d-2640-fe0f", 9, 37, 15, ["\u{1F3CC}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f3cc-1f3fd-200d-2640-fe0f", 9, 38, 15, ["\u{1F3CC}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f3cc-1f3fe-200d-2640-fe0f", 9, 39, 15, ["\u{1F3CC}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f3cc-1f3ff-200d-2640-fe0f", 9, 40, 15, ["\u{1F3CC}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f3cc-fe0f-200d-2642-fe0f": { "1f3fb": ["1f3cc-1f3fb-200d-2642-fe0f", 9, 42, 15, ["\u{1F3CC}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F3CC}\u{1F3FB}"]], "1f3fc": ["1f3cc-1f3fc-200d-2642-fe0f", 9, 43, 15, ["\u{1F3CC}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F3CC}\u{1F3FC}"]], "1f3fd": ["1f3cc-1f3fd-200d-2642-fe0f", 9, 44, 15, ["\u{1F3CC}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F3CC}\u{1F3FD}"]], "1f3fe": ["1f3cc-1f3fe-200d-2642-fe0f", 9, 45, 15, ["\u{1F3CC}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F3CC}\u{1F3FE}"]], "1f3ff": ["1f3cc-1f3ff-200d-2642-fe0f", 9, 46, 15, ["\u{1F3CC}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F3CC}\u{1F3FF}"]] },
      "1f442": { "1f3fb": ["1f442-1f3fb", 11, 57, 15, ["\u{1F442}\u{1F3FB}"]], "1f3fc": ["1f442-1f3fc", 11, 58, 15, ["\u{1F442}\u{1F3FC}"]], "1f3fd": ["1f442-1f3fd", 11, 59, 15, ["\u{1F442}\u{1F3FD}"]], "1f3fe": ["1f442-1f3fe", 11, 60, 15, ["\u{1F442}\u{1F3FE}"]], "1f3ff": ["1f442-1f3ff", 12, 0, 15, ["\u{1F442}\u{1F3FF}"]] },
      "1f443": { "1f3fb": ["1f443-1f3fb", 12, 2, 15, ["\u{1F443}\u{1F3FB}"]], "1f3fc": ["1f443-1f3fc", 12, 3, 15, ["\u{1F443}\u{1F3FC}"]], "1f3fd": ["1f443-1f3fd", 12, 4, 15, ["\u{1F443}\u{1F3FD}"]], "1f3fe": ["1f443-1f3fe", 12, 5, 15, ["\u{1F443}\u{1F3FE}"]], "1f3ff": ["1f443-1f3ff", 12, 6, 15, ["\u{1F443}\u{1F3FF}"]] },
      "1f446": { "1f3fb": ["1f446-1f3fb", 12, 10, 15, ["\u{1F446}\u{1F3FB}"]], "1f3fc": ["1f446-1f3fc", 12, 11, 15, ["\u{1F446}\u{1F3FC}"]], "1f3fd": ["1f446-1f3fd", 12, 12, 15, ["\u{1F446}\u{1F3FD}"]], "1f3fe": ["1f446-1f3fe", 12, 13, 15, ["\u{1F446}\u{1F3FE}"]], "1f3ff": ["1f446-1f3ff", 12, 14, 15, ["\u{1F446}\u{1F3FF}"]] },
      "1f447": { "1f3fb": ["1f447-1f3fb", 12, 16, 15, ["\u{1F447}\u{1F3FB}"]], "1f3fc": ["1f447-1f3fc", 12, 17, 15, ["\u{1F447}\u{1F3FC}"]], "1f3fd": ["1f447-1f3fd", 12, 18, 15, ["\u{1F447}\u{1F3FD}"]], "1f3fe": ["1f447-1f3fe", 12, 19, 15, ["\u{1F447}\u{1F3FE}"]], "1f3ff": ["1f447-1f3ff", 12, 20, 15, ["\u{1F447}\u{1F3FF}"]] },
      "1f448": { "1f3fb": ["1f448-1f3fb", 12, 22, 15, ["\u{1F448}\u{1F3FB}"]], "1f3fc": ["1f448-1f3fc", 12, 23, 15, ["\u{1F448}\u{1F3FC}"]], "1f3fd": ["1f448-1f3fd", 12, 24, 15, ["\u{1F448}\u{1F3FD}"]], "1f3fe": ["1f448-1f3fe", 12, 25, 15, ["\u{1F448}\u{1F3FE}"]], "1f3ff": ["1f448-1f3ff", 12, 26, 15, ["\u{1F448}\u{1F3FF}"]] },
      "1f449": { "1f3fb": ["1f449-1f3fb", 12, 28, 15, ["\u{1F449}\u{1F3FB}"]], "1f3fc": ["1f449-1f3fc", 12, 29, 15, ["\u{1F449}\u{1F3FC}"]], "1f3fd": ["1f449-1f3fd", 12, 30, 15, ["\u{1F449}\u{1F3FD}"]], "1f3fe": ["1f449-1f3fe", 12, 31, 15, ["\u{1F449}\u{1F3FE}"]], "1f3ff": ["1f449-1f3ff", 12, 32, 15, ["\u{1F449}\u{1F3FF}"]] },
      "1f44a": { "1f3fb": ["1f44a-1f3fb", 12, 34, 15, ["\u{1F44A}\u{1F3FB}"]], "1f3fc": ["1f44a-1f3fc", 12, 35, 15, ["\u{1F44A}\u{1F3FC}"]], "1f3fd": ["1f44a-1f3fd", 12, 36, 15, ["\u{1F44A}\u{1F3FD}"]], "1f3fe": ["1f44a-1f3fe", 12, 37, 15, ["\u{1F44A}\u{1F3FE}"]], "1f3ff": ["1f44a-1f3ff", 12, 38, 15, ["\u{1F44A}\u{1F3FF}"]] },
      "1f44b": { "1f3fb": ["1f44b-1f3fb", 12, 40, 15, ["\u{1F44B}\u{1F3FB}"]], "1f3fc": ["1f44b-1f3fc", 12, 41, 15, ["\u{1F44B}\u{1F3FC}"]], "1f3fd": ["1f44b-1f3fd", 12, 42, 15, ["\u{1F44B}\u{1F3FD}"]], "1f3fe": ["1f44b-1f3fe", 12, 43, 15, ["\u{1F44B}\u{1F3FE}"]], "1f3ff": ["1f44b-1f3ff", 12, 44, 15, ["\u{1F44B}\u{1F3FF}"]] },
      "1f44c": { "1f3fb": ["1f44c-1f3fb", 12, 46, 15, ["\u{1F44C}\u{1F3FB}"]], "1f3fc": ["1f44c-1f3fc", 12, 47, 15, ["\u{1F44C}\u{1F3FC}"]], "1f3fd": ["1f44c-1f3fd", 12, 48, 15, ["\u{1F44C}\u{1F3FD}"]], "1f3fe": ["1f44c-1f3fe", 12, 49, 15, ["\u{1F44C}\u{1F3FE}"]], "1f3ff": ["1f44c-1f3ff", 12, 50, 15, ["\u{1F44C}\u{1F3FF}"]] },
      "1f44d": { "1f3fb": ["1f44d-1f3fb", 12, 52, 15, ["\u{1F44D}\u{1F3FB}"]], "1f3fc": ["1f44d-1f3fc", 12, 53, 15, ["\u{1F44D}\u{1F3FC}"]], "1f3fd": ["1f44d-1f3fd", 12, 54, 15, ["\u{1F44D}\u{1F3FD}"]], "1f3fe": ["1f44d-1f3fe", 12, 55, 15, ["\u{1F44D}\u{1F3FE}"]], "1f3ff": ["1f44d-1f3ff", 12, 56, 15, ["\u{1F44D}\u{1F3FF}"]] },
      "1f44e": { "1f3fb": ["1f44e-1f3fb", 12, 58, 15, ["\u{1F44E}\u{1F3FB}"]], "1f3fc": ["1f44e-1f3fc", 12, 59, 15, ["\u{1F44E}\u{1F3FC}"]], "1f3fd": ["1f44e-1f3fd", 12, 60, 15, ["\u{1F44E}\u{1F3FD}"]], "1f3fe": ["1f44e-1f3fe", 13, 0, 15, ["\u{1F44E}\u{1F3FE}"]], "1f3ff": ["1f44e-1f3ff", 13, 1, 15, ["\u{1F44E}\u{1F3FF}"]] },
      "1f44f": { "1f3fb": ["1f44f-1f3fb", 13, 3, 15, ["\u{1F44F}\u{1F3FB}"]], "1f3fc": ["1f44f-1f3fc", 13, 4, 15, ["\u{1F44F}\u{1F3FC}"]], "1f3fd": ["1f44f-1f3fd", 13, 5, 15, ["\u{1F44F}\u{1F3FD}"]], "1f3fe": ["1f44f-1f3fe", 13, 6, 15, ["\u{1F44F}\u{1F3FE}"]], "1f3ff": ["1f44f-1f3ff", 13, 7, 15, ["\u{1F44F}\u{1F3FF}"]] },
      "1f450": { "1f3fb": ["1f450-1f3fb", 13, 9, 15, ["\u{1F450}\u{1F3FB}"]], "1f3fc": ["1f450-1f3fc", 13, 10, 15, ["\u{1F450}\u{1F3FC}"]], "1f3fd": ["1f450-1f3fd", 13, 11, 15, ["\u{1F450}\u{1F3FD}"]], "1f3fe": ["1f450-1f3fe", 13, 12, 15, ["\u{1F450}\u{1F3FE}"]], "1f3ff": ["1f450-1f3ff", 13, 13, 15, ["\u{1F450}\u{1F3FF}"]] },
      "1f466": { "1f3fb": ["1f466-1f3fb", 13, 36, 15, ["\u{1F466}\u{1F3FB}"]], "1f3fc": ["1f466-1f3fc", 13, 37, 15, ["\u{1F466}\u{1F3FC}"]], "1f3fd": ["1f466-1f3fd", 13, 38, 15, ["\u{1F466}\u{1F3FD}"]], "1f3fe": ["1f466-1f3fe", 13, 39, 15, ["\u{1F466}\u{1F3FE}"]], "1f3ff": ["1f466-1f3ff", 13, 40, 15, ["\u{1F466}\u{1F3FF}"]] },
      "1f467": { "1f3fb": ["1f467-1f3fb", 13, 42, 15, ["\u{1F467}\u{1F3FB}"]], "1f3fc": ["1f467-1f3fc", 13, 43, 15, ["\u{1F467}\u{1F3FC}"]], "1f3fd": ["1f467-1f3fd", 13, 44, 15, ["\u{1F467}\u{1F3FD}"]], "1f3fe": ["1f467-1f3fe", 13, 45, 15, ["\u{1F467}\u{1F3FE}"]], "1f3ff": ["1f467-1f3ff", 13, 46, 15, ["\u{1F467}\u{1F3FF}"]] },
      "1f468-200d-1f33e": { "1f3fb": ["1f468-1f3fb-200d-1f33e", 13, 48, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F33E}"]], "1f3fc": ["1f468-1f3fc-200d-1f33e", 13, 49, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F33E}"]], "1f3fd": ["1f468-1f3fd-200d-1f33e", 13, 50, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F33E}"]], "1f3fe": ["1f468-1f3fe-200d-1f33e", 13, 51, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F33E}"]], "1f3ff": ["1f468-1f3ff-200d-1f33e", 13, 52, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F33E}"]] },
      "1f468-200d-1f373": { "1f3fb": ["1f468-1f3fb-200d-1f373", 13, 54, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F373}"]], "1f3fc": ["1f468-1f3fc-200d-1f373", 13, 55, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F373}"]], "1f3fd": ["1f468-1f3fd-200d-1f373", 13, 56, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F373}"]], "1f3fe": ["1f468-1f3fe-200d-1f373", 13, 57, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F373}"]], "1f3ff": ["1f468-1f3ff-200d-1f373", 13, 58, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F373}"]] },
      "1f468-200d-1f37c": { "1f3fb": ["1f468-1f3fb-200d-1f37c", 13, 60, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F37C}"]], "1f3fc": ["1f468-1f3fc-200d-1f37c", 14, 0, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F37C}"]], "1f3fd": ["1f468-1f3fd-200d-1f37c", 14, 1, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F37C}"]], "1f3fe": ["1f468-1f3fe-200d-1f37c", 14, 2, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F37C}"]], "1f3ff": ["1f468-1f3ff-200d-1f37c", 14, 3, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F37C}"]] },
      "1f468-200d-1f393": { "1f3fb": ["1f468-1f3fb-200d-1f393", 14, 5, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F393}"]], "1f3fc": ["1f468-1f3fc-200d-1f393", 14, 6, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F393}"]], "1f3fd": ["1f468-1f3fd-200d-1f393", 14, 7, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F393}"]], "1f3fe": ["1f468-1f3fe-200d-1f393", 14, 8, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F393}"]], "1f3ff": ["1f468-1f3ff-200d-1f393", 14, 9, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F393}"]] },
      "1f468-200d-1f3a4": { "1f3fb": ["1f468-1f3fb-200d-1f3a4", 14, 11, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F3A4}"]], "1f3fc": ["1f468-1f3fc-200d-1f3a4", 14, 12, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F3A4}"]], "1f3fd": ["1f468-1f3fd-200d-1f3a4", 14, 13, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F3A4}"]], "1f3fe": ["1f468-1f3fe-200d-1f3a4", 14, 14, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F3A4}"]], "1f3ff": ["1f468-1f3ff-200d-1f3a4", 14, 15, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F3A4}"]] },
      "1f468-200d-1f3a8": { "1f3fb": ["1f468-1f3fb-200d-1f3a8", 14, 17, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F3A8}"]], "1f3fc": ["1f468-1f3fc-200d-1f3a8", 14, 18, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F3A8}"]], "1f3fd": ["1f468-1f3fd-200d-1f3a8", 14, 19, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F3A8}"]], "1f3fe": ["1f468-1f3fe-200d-1f3a8", 14, 20, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F3A8}"]], "1f3ff": ["1f468-1f3ff-200d-1f3a8", 14, 21, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F3A8}"]] },
      "1f468-200d-1f3eb": { "1f3fb": ["1f468-1f3fb-200d-1f3eb", 14, 23, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F3EB}"]], "1f3fc": ["1f468-1f3fc-200d-1f3eb", 14, 24, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F3EB}"]], "1f3fd": ["1f468-1f3fd-200d-1f3eb", 14, 25, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F3EB}"]], "1f3fe": ["1f468-1f3fe-200d-1f3eb", 14, 26, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F3EB}"]], "1f3ff": ["1f468-1f3ff-200d-1f3eb", 14, 27, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F3EB}"]] },
      "1f468-200d-1f3ed": { "1f3fb": ["1f468-1f3fb-200d-1f3ed", 14, 29, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F3ED}"]], "1f3fc": ["1f468-1f3fc-200d-1f3ed", 14, 30, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F3ED}"]], "1f3fd": ["1f468-1f3fd-200d-1f3ed", 14, 31, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F3ED}"]], "1f3fe": ["1f468-1f3fe-200d-1f3ed", 14, 32, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F3ED}"]], "1f3ff": ["1f468-1f3ff-200d-1f3ed", 14, 33, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F3ED}"]] },
      "1f468-200d-1f4bb": { "1f3fb": ["1f468-1f3fb-200d-1f4bb", 14, 50, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F4BB}"]], "1f3fc": ["1f468-1f3fc-200d-1f4bb", 14, 51, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F4BB}"]], "1f3fd": ["1f468-1f3fd-200d-1f4bb", 14, 52, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F4BB}"]], "1f3fe": ["1f468-1f3fe-200d-1f4bb", 14, 53, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F4BB}"]], "1f3ff": ["1f468-1f3ff-200d-1f4bb", 14, 54, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F4BB}"]] },
      "1f468-200d-1f4bc": { "1f3fb": ["1f468-1f3fb-200d-1f4bc", 14, 56, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F4BC}"]], "1f3fc": ["1f468-1f3fc-200d-1f4bc", 14, 57, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F4BC}"]], "1f3fd": ["1f468-1f3fd-200d-1f4bc", 14, 58, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F4BC}"]], "1f3fe": ["1f468-1f3fe-200d-1f4bc", 14, 59, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F4BC}"]], "1f3ff": ["1f468-1f3ff-200d-1f4bc", 14, 60, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F4BC}"]] },
      "1f468-200d-1f527": { "1f3fb": ["1f468-1f3fb-200d-1f527", 15, 1, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F527}"]], "1f3fc": ["1f468-1f3fc-200d-1f527", 15, 2, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F527}"]], "1f3fd": ["1f468-1f3fd-200d-1f527", 15, 3, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F527}"]], "1f3fe": ["1f468-1f3fe-200d-1f527", 15, 4, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F527}"]], "1f3ff": ["1f468-1f3ff-200d-1f527", 15, 5, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F527}"]] },
      "1f468-200d-1f52c": { "1f3fb": ["1f468-1f3fb-200d-1f52c", 15, 7, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F52C}"]], "1f3fc": ["1f468-1f3fc-200d-1f52c", 15, 8, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F52C}"]], "1f3fd": ["1f468-1f3fd-200d-1f52c", 15, 9, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F52C}"]], "1f3fe": ["1f468-1f3fe-200d-1f52c", 15, 10, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F52C}"]], "1f3ff": ["1f468-1f3ff-200d-1f52c", 15, 11, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F52C}"]] },
      "1f468-200d-1f680": { "1f3fb": ["1f468-1f3fb-200d-1f680", 15, 13, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F680}"]], "1f3fc": ["1f468-1f3fc-200d-1f680", 15, 14, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F680}"]], "1f3fd": ["1f468-1f3fd-200d-1f680", 15, 15, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F680}"]], "1f3fe": ["1f468-1f3fe-200d-1f680", 15, 16, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F680}"]], "1f3ff": ["1f468-1f3ff-200d-1f680", 15, 17, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F680}"]] },
      "1f468-200d-1f692": { "1f3fb": ["1f468-1f3fb-200d-1f692", 15, 19, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F692}"]], "1f3fc": ["1f468-1f3fc-200d-1f692", 15, 20, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F692}"]], "1f3fd": ["1f468-1f3fd-200d-1f692", 15, 21, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F692}"]], "1f3fe": ["1f468-1f3fe-200d-1f692", 15, 22, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F692}"]], "1f3ff": ["1f468-1f3ff-200d-1f692", 15, 23, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F692}"]] },
      "1f468-200d-1f9af": { "1f3fb": ["1f468-1f3fb-200d-1f9af", 15, 25, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F9AF}"]], "1f3fc": ["1f468-1f3fc-200d-1f9af", 15, 26, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F9AF}"]], "1f3fd": ["1f468-1f3fd-200d-1f9af", 15, 27, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F9AF}"]], "1f3fe": ["1f468-1f3fe-200d-1f9af", 15, 28, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F9AF}"]], "1f3ff": ["1f468-1f3ff-200d-1f9af", 15, 29, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F9AF}"]] },
      "1f468-200d-1f9b0": { "1f3fb": ["1f468-1f3fb-200d-1f9b0", 15, 31, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F9B0}"]], "1f3fc": ["1f468-1f3fc-200d-1f9b0", 15, 32, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F9B0}"]], "1f3fd": ["1f468-1f3fd-200d-1f9b0", 15, 33, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F9B0}"]], "1f3fe": ["1f468-1f3fe-200d-1f9b0", 15, 34, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F9B0}"]], "1f3ff": ["1f468-1f3ff-200d-1f9b0", 15, 35, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F9B0}"]] },
      "1f468-200d-1f9b1": { "1f3fb": ["1f468-1f3fb-200d-1f9b1", 15, 37, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F9B1}"]], "1f3fc": ["1f468-1f3fc-200d-1f9b1", 15, 38, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F9B1}"]], "1f3fd": ["1f468-1f3fd-200d-1f9b1", 15, 39, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F9B1}"]], "1f3fe": ["1f468-1f3fe-200d-1f9b1", 15, 40, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F9B1}"]], "1f3ff": ["1f468-1f3ff-200d-1f9b1", 15, 41, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F9B1}"]] },
      "1f468-200d-1f9b2": { "1f3fb": ["1f468-1f3fb-200d-1f9b2", 15, 43, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F9B2}"]], "1f3fc": ["1f468-1f3fc-200d-1f9b2", 15, 44, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F9B2}"]], "1f3fd": ["1f468-1f3fd-200d-1f9b2", 15, 45, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F9B2}"]], "1f3fe": ["1f468-1f3fe-200d-1f9b2", 15, 46, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F9B2}"]], "1f3ff": ["1f468-1f3ff-200d-1f9b2", 15, 47, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F9B2}"]] },
      "1f468-200d-1f9b3": { "1f3fb": ["1f468-1f3fb-200d-1f9b3", 15, 49, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F9B3}"]], "1f3fc": ["1f468-1f3fc-200d-1f9b3", 15, 50, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F9B3}"]], "1f3fd": ["1f468-1f3fd-200d-1f9b3", 15, 51, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F9B3}"]], "1f3fe": ["1f468-1f3fe-200d-1f9b3", 15, 52, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F9B3}"]], "1f3ff": ["1f468-1f3ff-200d-1f9b3", 15, 53, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F9B3}"]] },
      "1f468-200d-1f9bc": { "1f3fb": ["1f468-1f3fb-200d-1f9bc", 15, 55, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F9BC}"]], "1f3fc": ["1f468-1f3fc-200d-1f9bc", 15, 56, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F9BC}"]], "1f3fd": ["1f468-1f3fd-200d-1f9bc", 15, 57, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F9BC}"]], "1f3fe": ["1f468-1f3fe-200d-1f9bc", 15, 58, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F9BC}"]], "1f3ff": ["1f468-1f3ff-200d-1f9bc", 15, 59, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F9BC}"]] },
      "1f468-200d-1f9bd": { "1f3fb": ["1f468-1f3fb-200d-1f9bd", 16, 0, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F9BD}"]], "1f3fc": ["1f468-1f3fc-200d-1f9bd", 16, 1, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F9BD}"]], "1f3fd": ["1f468-1f3fd-200d-1f9bd", 16, 2, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F9BD}"]], "1f3fe": ["1f468-1f3fe-200d-1f9bd", 16, 3, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F9BD}"]], "1f3ff": ["1f468-1f3ff-200d-1f9bd", 16, 4, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F9BD}"]] },
      "1f468-200d-2695-fe0f": { "1f3fb": ["1f468-1f3fb-200d-2695-fe0f", 16, 6, 15, ["\u{1F468}\u{1F3FB}\u200D\u2695\uFE0F"]], "1f3fc": ["1f468-1f3fc-200d-2695-fe0f", 16, 7, 15, ["\u{1F468}\u{1F3FC}\u200D\u2695\uFE0F"]], "1f3fd": ["1f468-1f3fd-200d-2695-fe0f", 16, 8, 15, ["\u{1F468}\u{1F3FD}\u200D\u2695\uFE0F"]], "1f3fe": ["1f468-1f3fe-200d-2695-fe0f", 16, 9, 15, ["\u{1F468}\u{1F3FE}\u200D\u2695\uFE0F"]], "1f3ff": ["1f468-1f3ff-200d-2695-fe0f", 16, 10, 15, ["\u{1F468}\u{1F3FF}\u200D\u2695\uFE0F"]] },
      "1f468-200d-2696-fe0f": { "1f3fb": ["1f468-1f3fb-200d-2696-fe0f", 16, 12, 15, ["\u{1F468}\u{1F3FB}\u200D\u2696\uFE0F"]], "1f3fc": ["1f468-1f3fc-200d-2696-fe0f", 16, 13, 15, ["\u{1F468}\u{1F3FC}\u200D\u2696\uFE0F"]], "1f3fd": ["1f468-1f3fd-200d-2696-fe0f", 16, 14, 15, ["\u{1F468}\u{1F3FD}\u200D\u2696\uFE0F"]], "1f3fe": ["1f468-1f3fe-200d-2696-fe0f", 16, 15, 15, ["\u{1F468}\u{1F3FE}\u200D\u2696\uFE0F"]], "1f3ff": ["1f468-1f3ff-200d-2696-fe0f", 16, 16, 15, ["\u{1F468}\u{1F3FF}\u200D\u2696\uFE0F"]] },
      "1f468-200d-2708-fe0f": { "1f3fb": ["1f468-1f3fb-200d-2708-fe0f", 16, 18, 15, ["\u{1F468}\u{1F3FB}\u200D\u2708\uFE0F"]], "1f3fc": ["1f468-1f3fc-200d-2708-fe0f", 16, 19, 15, ["\u{1F468}\u{1F3FC}\u200D\u2708\uFE0F"]], "1f3fd": ["1f468-1f3fd-200d-2708-fe0f", 16, 20, 15, ["\u{1F468}\u{1F3FD}\u200D\u2708\uFE0F"]], "1f3fe": ["1f468-1f3fe-200d-2708-fe0f", 16, 21, 15, ["\u{1F468}\u{1F3FE}\u200D\u2708\uFE0F"]], "1f3ff": ["1f468-1f3ff-200d-2708-fe0f", 16, 22, 15, ["\u{1F468}\u{1F3FF}\u200D\u2708\uFE0F"]] },
      "1f468-200d-2764-fe0f-200d-1f468": { "1f3fb-1f3fb": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb", 16, 24, 15, ["\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}"]], "1f3fb-1f3fc": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc", 16, 25, 15, ["\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}"]], "1f3fb-1f3fd": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd", 16, 26, 15, ["\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}"]], "1f3fb-1f3fe": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe", 16, 27, 15, ["\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}"]], "1f3fb-1f3ff": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff", 16, 28, 15, ["\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}"]], "1f3fc-1f3fb": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb", 16, 29, 15, ["\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}"]], "1f3fc-1f3fc": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc", 16, 30, 15, ["\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}"]], "1f3fc-1f3fd": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd", 16, 31, 15, ["\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}"]], "1f3fc-1f3fe": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe", 16, 32, 15, ["\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}"]], "1f3fc-1f3ff": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff", 16, 33, 15, ["\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}"]], "1f3fd-1f3fb": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb", 16, 34, 15, ["\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}"]], "1f3fd-1f3fc": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc", 16, 35, 15, ["\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}"]], "1f3fd-1f3fd": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd", 16, 36, 15, ["\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}"]], "1f3fd-1f3fe": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe", 16, 37, 15, ["\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}"]], "1f3fd-1f3ff": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff", 16, 38, 15, ["\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}"]], "1f3fe-1f3fb": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb", 16, 39, 15, ["\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}"]], "1f3fe-1f3fc": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc", 16, 40, 15, ["\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}"]], "1f3fe-1f3fd": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd", 16, 41, 15, ["\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}"]], "1f3fe-1f3fe": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe", 16, 42, 15, ["\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}"]], "1f3fe-1f3ff": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff", 16, 43, 15, ["\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}"]], "1f3ff-1f3fb": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb", 16, 44, 15, ["\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}"]], "1f3ff-1f3fc": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc", 16, 45, 15, ["\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}"]], "1f3ff-1f3fd": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd", 16, 46, 15, ["\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}"]], "1f3ff-1f3fe": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe", 16, 47, 15, ["\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}"]], "1f3ff-1f3ff": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff", 16, 48, 15, ["\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}"]] },
      "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468": { "1f3fb-1f3fb": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 16, 50, 15, ["\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}"]], "1f3fb-1f3fc": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 16, 51, 15, ["\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}"]], "1f3fb-1f3fd": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 16, 52, 15, ["\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}"]], "1f3fb-1f3fe": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 16, 53, 15, ["\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}"]], "1f3fb-1f3ff": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 16, 54, 15, ["\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}"]], "1f3fc-1f3fb": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 16, 55, 15, ["\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}"]], "1f3fc-1f3fc": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 16, 56, 15, ["\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}"]], "1f3fc-1f3fd": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 16, 57, 15, ["\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}"]], "1f3fc-1f3fe": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 16, 58, 15, ["\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}"]], "1f3fc-1f3ff": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 16, 59, 15, ["\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}"]], "1f3fd-1f3fb": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 16, 60, 15, ["\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}"]], "1f3fd-1f3fc": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 17, 0, 15, ["\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}"]], "1f3fd-1f3fd": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 17, 1, 15, ["\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}"]], "1f3fd-1f3fe": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 17, 2, 15, ["\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}"]], "1f3fd-1f3ff": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 17, 3, 15, ["\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}"]], "1f3fe-1f3fb": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 17, 4, 15, ["\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}"]], "1f3fe-1f3fc": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 17, 5, 15, ["\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}"]], "1f3fe-1f3fd": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 17, 6, 15, ["\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}"]], "1f3fe-1f3fe": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 17, 7, 15, ["\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}"]], "1f3fe-1f3ff": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 17, 8, 15, ["\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}"]], "1f3ff-1f3fb": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 17, 9, 15, ["\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}"]], "1f3ff-1f3fc": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 17, 10, 15, ["\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}"]], "1f3ff-1f3fd": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 17, 11, 15, ["\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}"]], "1f3ff-1f3fe": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 17, 12, 15, ["\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}"]], "1f3ff-1f3ff": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 17, 13, 15, ["\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}"]] },
      "1f468": { "1f3fb": ["1f468-1f3fb", 17, 15, 15, ["\u{1F468}\u{1F3FB}"]], "1f3fc": ["1f468-1f3fc", 17, 16, 15, ["\u{1F468}\u{1F3FC}"]], "1f3fd": ["1f468-1f3fd", 17, 17, 15, ["\u{1F468}\u{1F3FD}"]], "1f3fe": ["1f468-1f3fe", 17, 18, 15, ["\u{1F468}\u{1F3FE}"]], "1f3ff": ["1f468-1f3ff", 17, 19, 15, ["\u{1F468}\u{1F3FF}"]] },
      "1f469-200d-1f33e": { "1f3fb": ["1f469-1f3fb-200d-1f33e", 17, 21, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F33E}"]], "1f3fc": ["1f469-1f3fc-200d-1f33e", 17, 22, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F33E}"]], "1f3fd": ["1f469-1f3fd-200d-1f33e", 17, 23, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F33E}"]], "1f3fe": ["1f469-1f3fe-200d-1f33e", 17, 24, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F33E}"]], "1f3ff": ["1f469-1f3ff-200d-1f33e", 17, 25, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F33E}"]] },
      "1f469-200d-1f373": { "1f3fb": ["1f469-1f3fb-200d-1f373", 17, 27, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F373}"]], "1f3fc": ["1f469-1f3fc-200d-1f373", 17, 28, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F373}"]], "1f3fd": ["1f469-1f3fd-200d-1f373", 17, 29, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F373}"]], "1f3fe": ["1f469-1f3fe-200d-1f373", 17, 30, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F373}"]], "1f3ff": ["1f469-1f3ff-200d-1f373", 17, 31, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F373}"]] },
      "1f469-200d-1f37c": { "1f3fb": ["1f469-1f3fb-200d-1f37c", 17, 33, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F37C}"]], "1f3fc": ["1f469-1f3fc-200d-1f37c", 17, 34, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F37C}"]], "1f3fd": ["1f469-1f3fd-200d-1f37c", 17, 35, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F37C}"]], "1f3fe": ["1f469-1f3fe-200d-1f37c", 17, 36, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F37C}"]], "1f3ff": ["1f469-1f3ff-200d-1f37c", 17, 37, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F37C}"]] },
      "1f469-200d-1f393": { "1f3fb": ["1f469-1f3fb-200d-1f393", 17, 39, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F393}"]], "1f3fc": ["1f469-1f3fc-200d-1f393", 17, 40, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F393}"]], "1f3fd": ["1f469-1f3fd-200d-1f393", 17, 41, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F393}"]], "1f3fe": ["1f469-1f3fe-200d-1f393", 17, 42, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F393}"]], "1f3ff": ["1f469-1f3ff-200d-1f393", 17, 43, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F393}"]] },
      "1f469-200d-1f3a4": { "1f3fb": ["1f469-1f3fb-200d-1f3a4", 17, 45, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F3A4}"]], "1f3fc": ["1f469-1f3fc-200d-1f3a4", 17, 46, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F3A4}"]], "1f3fd": ["1f469-1f3fd-200d-1f3a4", 17, 47, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F3A4}"]], "1f3fe": ["1f469-1f3fe-200d-1f3a4", 17, 48, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F3A4}"]], "1f3ff": ["1f469-1f3ff-200d-1f3a4", 17, 49, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F3A4}"]] },
      "1f469-200d-1f3a8": { "1f3fb": ["1f469-1f3fb-200d-1f3a8", 17, 51, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F3A8}"]], "1f3fc": ["1f469-1f3fc-200d-1f3a8", 17, 52, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F3A8}"]], "1f3fd": ["1f469-1f3fd-200d-1f3a8", 17, 53, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F3A8}"]], "1f3fe": ["1f469-1f3fe-200d-1f3a8", 17, 54, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F3A8}"]], "1f3ff": ["1f469-1f3ff-200d-1f3a8", 17, 55, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F3A8}"]] },
      "1f469-200d-1f3eb": { "1f3fb": ["1f469-1f3fb-200d-1f3eb", 17, 57, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F3EB}"]], "1f3fc": ["1f469-1f3fc-200d-1f3eb", 17, 58, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F3EB}"]], "1f3fd": ["1f469-1f3fd-200d-1f3eb", 17, 59, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F3EB}"]], "1f3fe": ["1f469-1f3fe-200d-1f3eb", 17, 60, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F3EB}"]], "1f3ff": ["1f469-1f3ff-200d-1f3eb", 18, 0, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F3EB}"]] },
      "1f469-200d-1f3ed": { "1f3fb": ["1f469-1f3fb-200d-1f3ed", 18, 2, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F3ED}"]], "1f3fc": ["1f469-1f3fc-200d-1f3ed", 18, 3, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F3ED}"]], "1f3fd": ["1f469-1f3fd-200d-1f3ed", 18, 4, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F3ED}"]], "1f3fe": ["1f469-1f3fe-200d-1f3ed", 18, 5, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F3ED}"]], "1f3ff": ["1f469-1f3ff-200d-1f3ed", 18, 6, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F3ED}"]] },
      "1f469-200d-1f4bb": { "1f3fb": ["1f469-1f3fb-200d-1f4bb", 18, 18, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F4BB}"]], "1f3fc": ["1f469-1f3fc-200d-1f4bb", 18, 19, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F4BB}"]], "1f3fd": ["1f469-1f3fd-200d-1f4bb", 18, 20, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F4BB}"]], "1f3fe": ["1f469-1f3fe-200d-1f4bb", 18, 21, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F4BB}"]], "1f3ff": ["1f469-1f3ff-200d-1f4bb", 18, 22, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F4BB}"]] },
      "1f469-200d-1f4bc": { "1f3fb": ["1f469-1f3fb-200d-1f4bc", 18, 24, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F4BC}"]], "1f3fc": ["1f469-1f3fc-200d-1f4bc", 18, 25, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F4BC}"]], "1f3fd": ["1f469-1f3fd-200d-1f4bc", 18, 26, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F4BC}"]], "1f3fe": ["1f469-1f3fe-200d-1f4bc", 18, 27, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F4BC}"]], "1f3ff": ["1f469-1f3ff-200d-1f4bc", 18, 28, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F4BC}"]] },
      "1f469-200d-1f527": { "1f3fb": ["1f469-1f3fb-200d-1f527", 18, 30, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F527}"]], "1f3fc": ["1f469-1f3fc-200d-1f527", 18, 31, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F527}"]], "1f3fd": ["1f469-1f3fd-200d-1f527", 18, 32, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F527}"]], "1f3fe": ["1f469-1f3fe-200d-1f527", 18, 33, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F527}"]], "1f3ff": ["1f469-1f3ff-200d-1f527", 18, 34, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F527}"]] },
      "1f469-200d-1f52c": { "1f3fb": ["1f469-1f3fb-200d-1f52c", 18, 36, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F52C}"]], "1f3fc": ["1f469-1f3fc-200d-1f52c", 18, 37, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F52C}"]], "1f3fd": ["1f469-1f3fd-200d-1f52c", 18, 38, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F52C}"]], "1f3fe": ["1f469-1f3fe-200d-1f52c", 18, 39, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F52C}"]], "1f3ff": ["1f469-1f3ff-200d-1f52c", 18, 40, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F52C}"]] },
      "1f469-200d-1f680": { "1f3fb": ["1f469-1f3fb-200d-1f680", 18, 42, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F680}"]], "1f3fc": ["1f469-1f3fc-200d-1f680", 18, 43, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F680}"]], "1f3fd": ["1f469-1f3fd-200d-1f680", 18, 44, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F680}"]], "1f3fe": ["1f469-1f3fe-200d-1f680", 18, 45, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F680}"]], "1f3ff": ["1f469-1f3ff-200d-1f680", 18, 46, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F680}"]] },
      "1f469-200d-1f692": { "1f3fb": ["1f469-1f3fb-200d-1f692", 18, 48, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F692}"]], "1f3fc": ["1f469-1f3fc-200d-1f692", 18, 49, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F692}"]], "1f3fd": ["1f469-1f3fd-200d-1f692", 18, 50, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F692}"]], "1f3fe": ["1f469-1f3fe-200d-1f692", 18, 51, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F692}"]], "1f3ff": ["1f469-1f3ff-200d-1f692", 18, 52, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F692}"]] },
      "1f469-200d-1f9af": { "1f3fb": ["1f469-1f3fb-200d-1f9af", 18, 54, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F9AF}"]], "1f3fc": ["1f469-1f3fc-200d-1f9af", 18, 55, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F9AF}"]], "1f3fd": ["1f469-1f3fd-200d-1f9af", 18, 56, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F9AF}"]], "1f3fe": ["1f469-1f3fe-200d-1f9af", 18, 57, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F9AF}"]], "1f3ff": ["1f469-1f3ff-200d-1f9af", 18, 58, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F9AF}"]] },
      "1f469-200d-1f9b0": { "1f3fb": ["1f469-1f3fb-200d-1f9b0", 18, 60, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F9B0}"]], "1f3fc": ["1f469-1f3fc-200d-1f9b0", 19, 0, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F9B0}"]], "1f3fd": ["1f469-1f3fd-200d-1f9b0", 19, 1, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F9B0}"]], "1f3fe": ["1f469-1f3fe-200d-1f9b0", 19, 2, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F9B0}"]], "1f3ff": ["1f469-1f3ff-200d-1f9b0", 19, 3, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F9B0}"]] },
      "1f469-200d-1f9b1": { "1f3fb": ["1f469-1f3fb-200d-1f9b1", 19, 5, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F9B1}"]], "1f3fc": ["1f469-1f3fc-200d-1f9b1", 19, 6, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F9B1}"]], "1f3fd": ["1f469-1f3fd-200d-1f9b1", 19, 7, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F9B1}"]], "1f3fe": ["1f469-1f3fe-200d-1f9b1", 19, 8, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F9B1}"]], "1f3ff": ["1f469-1f3ff-200d-1f9b1", 19, 9, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F9B1}"]] },
      "1f469-200d-1f9b2": { "1f3fb": ["1f469-1f3fb-200d-1f9b2", 19, 11, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F9B2}"]], "1f3fc": ["1f469-1f3fc-200d-1f9b2", 19, 12, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F9B2}"]], "1f3fd": ["1f469-1f3fd-200d-1f9b2", 19, 13, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F9B2}"]], "1f3fe": ["1f469-1f3fe-200d-1f9b2", 19, 14, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F9B2}"]], "1f3ff": ["1f469-1f3ff-200d-1f9b2", 19, 15, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F9B2}"]] },
      "1f469-200d-1f9b3": { "1f3fb": ["1f469-1f3fb-200d-1f9b3", 19, 17, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F9B3}"]], "1f3fc": ["1f469-1f3fc-200d-1f9b3", 19, 18, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F9B3}"]], "1f3fd": ["1f469-1f3fd-200d-1f9b3", 19, 19, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F9B3}"]], "1f3fe": ["1f469-1f3fe-200d-1f9b3", 19, 20, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F9B3}"]], "1f3ff": ["1f469-1f3ff-200d-1f9b3", 19, 21, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F9B3}"]] },
      "1f469-200d-1f9bc": { "1f3fb": ["1f469-1f3fb-200d-1f9bc", 19, 23, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F9BC}"]], "1f3fc": ["1f469-1f3fc-200d-1f9bc", 19, 24, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F9BC}"]], "1f3fd": ["1f469-1f3fd-200d-1f9bc", 19, 25, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F9BC}"]], "1f3fe": ["1f469-1f3fe-200d-1f9bc", 19, 26, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F9BC}"]], "1f3ff": ["1f469-1f3ff-200d-1f9bc", 19, 27, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F9BC}"]] },
      "1f469-200d-1f9bd": { "1f3fb": ["1f469-1f3fb-200d-1f9bd", 19, 29, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F9BD}"]], "1f3fc": ["1f469-1f3fc-200d-1f9bd", 19, 30, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F9BD}"]], "1f3fd": ["1f469-1f3fd-200d-1f9bd", 19, 31, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F9BD}"]], "1f3fe": ["1f469-1f3fe-200d-1f9bd", 19, 32, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F9BD}"]], "1f3ff": ["1f469-1f3ff-200d-1f9bd", 19, 33, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F9BD}"]] },
      "1f469-200d-2695-fe0f": { "1f3fb": ["1f469-1f3fb-200d-2695-fe0f", 19, 35, 15, ["\u{1F469}\u{1F3FB}\u200D\u2695\uFE0F"]], "1f3fc": ["1f469-1f3fc-200d-2695-fe0f", 19, 36, 15, ["\u{1F469}\u{1F3FC}\u200D\u2695\uFE0F"]], "1f3fd": ["1f469-1f3fd-200d-2695-fe0f", 19, 37, 15, ["\u{1F469}\u{1F3FD}\u200D\u2695\uFE0F"]], "1f3fe": ["1f469-1f3fe-200d-2695-fe0f", 19, 38, 15, ["\u{1F469}\u{1F3FE}\u200D\u2695\uFE0F"]], "1f3ff": ["1f469-1f3ff-200d-2695-fe0f", 19, 39, 15, ["\u{1F469}\u{1F3FF}\u200D\u2695\uFE0F"]] },
      "1f469-200d-2696-fe0f": { "1f3fb": ["1f469-1f3fb-200d-2696-fe0f", 19, 41, 15, ["\u{1F469}\u{1F3FB}\u200D\u2696\uFE0F"]], "1f3fc": ["1f469-1f3fc-200d-2696-fe0f", 19, 42, 15, ["\u{1F469}\u{1F3FC}\u200D\u2696\uFE0F"]], "1f3fd": ["1f469-1f3fd-200d-2696-fe0f", 19, 43, 15, ["\u{1F469}\u{1F3FD}\u200D\u2696\uFE0F"]], "1f3fe": ["1f469-1f3fe-200d-2696-fe0f", 19, 44, 15, ["\u{1F469}\u{1F3FE}\u200D\u2696\uFE0F"]], "1f3ff": ["1f469-1f3ff-200d-2696-fe0f", 19, 45, 15, ["\u{1F469}\u{1F3FF}\u200D\u2696\uFE0F"]] },
      "1f469-200d-2708-fe0f": { "1f3fb": ["1f469-1f3fb-200d-2708-fe0f", 19, 47, 15, ["\u{1F469}\u{1F3FB}\u200D\u2708\uFE0F"]], "1f3fc": ["1f469-1f3fc-200d-2708-fe0f", 19, 48, 15, ["\u{1F469}\u{1F3FC}\u200D\u2708\uFE0F"]], "1f3fd": ["1f469-1f3fd-200d-2708-fe0f", 19, 49, 15, ["\u{1F469}\u{1F3FD}\u200D\u2708\uFE0F"]], "1f3fe": ["1f469-1f3fe-200d-2708-fe0f", 19, 50, 15, ["\u{1F469}\u{1F3FE}\u200D\u2708\uFE0F"]], "1f3ff": ["1f469-1f3ff-200d-2708-fe0f", 19, 51, 15, ["\u{1F469}\u{1F3FF}\u200D\u2708\uFE0F"]] },
      "1f469-200d-2764-fe0f-200d-1f468": { "1f3fb-1f3fb": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb", 19, 53, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}"]], "1f3fb-1f3fc": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc", 19, 54, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}"]], "1f3fb-1f3fd": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd", 19, 55, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}"]], "1f3fb-1f3fe": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe", 19, 56, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}"]], "1f3fb-1f3ff": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff", 19, 57, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}"]], "1f3fc-1f3fb": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb", 19, 58, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}"]], "1f3fc-1f3fc": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc", 19, 59, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}"]], "1f3fc-1f3fd": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd", 19, 60, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}"]], "1f3fc-1f3fe": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe", 20, 0, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}"]], "1f3fc-1f3ff": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff", 20, 1, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}"]], "1f3fd-1f3fb": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb", 20, 2, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}"]], "1f3fd-1f3fc": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc", 20, 3, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}"]], "1f3fd-1f3fd": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd", 20, 4, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}"]], "1f3fd-1f3fe": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe", 20, 5, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}"]], "1f3fd-1f3ff": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff", 20, 6, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}"]], "1f3fe-1f3fb": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb", 20, 7, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}"]], "1f3fe-1f3fc": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc", 20, 8, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}"]], "1f3fe-1f3fd": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd", 20, 9, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}"]], "1f3fe-1f3fe": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe", 20, 10, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}"]], "1f3fe-1f3ff": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff", 20, 11, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}"]], "1f3ff-1f3fb": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb", 20, 12, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}"]], "1f3ff-1f3fc": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc", 20, 13, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}"]], "1f3ff-1f3fd": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd", 20, 14, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}"]], "1f3ff-1f3fe": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe", 20, 15, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}"]], "1f3ff-1f3ff": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff", 20, 16, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}"]] },
      "1f469-200d-2764-fe0f-200d-1f469": { "1f3fb-1f3fb": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb", 20, 18, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FB}"]], "1f3fb-1f3fc": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fc", 20, 19, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FC}"]], "1f3fb-1f3fd": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fd", 20, 20, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FD}"]], "1f3fb-1f3fe": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fe", 20, 21, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FE}"]], "1f3fb-1f3ff": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3ff", 20, 22, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FF}"]], "1f3fc-1f3fb": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fb", 20, 23, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FB}"]], "1f3fc-1f3fc": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc", 20, 24, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FC}"]], "1f3fc-1f3fd": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fd", 20, 25, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FD}"]], "1f3fc-1f3fe": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fe", 20, 26, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FE}"]], "1f3fc-1f3ff": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3ff", 20, 27, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FF}"]], "1f3fd-1f3fb": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fb", 20, 28, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FB}"]], "1f3fd-1f3fc": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fc", 20, 29, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FC}"]], "1f3fd-1f3fd": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd", 20, 30, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FD}"]], "1f3fd-1f3fe": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fe", 20, 31, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FE}"]], "1f3fd-1f3ff": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3ff", 20, 32, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FF}"]], "1f3fe-1f3fb": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fb", 20, 33, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FB}"]], "1f3fe-1f3fc": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fc", 20, 34, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FC}"]], "1f3fe-1f3fd": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fd", 20, 35, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FD}"]], "1f3fe-1f3fe": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe", 20, 36, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FE}"]], "1f3fe-1f3ff": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3ff", 20, 37, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FF}"]], "1f3ff-1f3fb": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fb", 20, 38, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FB}"]], "1f3ff-1f3fc": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fc", 20, 39, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FC}"]], "1f3ff-1f3fd": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fd", 20, 40, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FD}"]], "1f3ff-1f3fe": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fe", 20, 41, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FE}"]], "1f3ff-1f3ff": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff", 20, 42, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FF}"]] },
      "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468": { "1f3fb-1f3fb": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 20, 44, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}"]], "1f3fb-1f3fc": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 20, 45, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}"]], "1f3fb-1f3fd": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 20, 46, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}"]], "1f3fb-1f3fe": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 20, 47, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}"]], "1f3fb-1f3ff": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 20, 48, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}"]], "1f3fc-1f3fb": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 20, 49, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}"]], "1f3fc-1f3fc": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 20, 50, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}"]], "1f3fc-1f3fd": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 20, 51, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}"]], "1f3fc-1f3fe": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 20, 52, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}"]], "1f3fc-1f3ff": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 20, 53, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}"]], "1f3fd-1f3fb": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 20, 54, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}"]], "1f3fd-1f3fc": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 20, 55, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}"]], "1f3fd-1f3fd": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 20, 56, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}"]], "1f3fd-1f3fe": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 20, 57, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}"]], "1f3fd-1f3ff": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 20, 58, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}"]], "1f3fe-1f3fb": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 20, 59, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}"]], "1f3fe-1f3fc": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 20, 60, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}"]], "1f3fe-1f3fd": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 21, 0, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}"]], "1f3fe-1f3fe": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 21, 1, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}"]], "1f3fe-1f3ff": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 21, 2, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}"]], "1f3ff-1f3fb": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 21, 3, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}"]], "1f3ff-1f3fc": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 21, 4, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}"]], "1f3ff-1f3fd": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 21, 5, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}"]], "1f3ff-1f3fe": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 21, 6, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}"]], "1f3ff-1f3ff": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 21, 7, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}"]] },
      "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469": { "1f3fb-1f3fb": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 9, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FB}"]], "1f3fb-1f3fc": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 10, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FC}"]], "1f3fb-1f3fd": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 11, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FD}"]], "1f3fb-1f3fe": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 12, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FE}"]], "1f3fb-1f3ff": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 13, 15, ["\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FF}"]], "1f3fc-1f3fb": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 14, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FB}"]], "1f3fc-1f3fc": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 15, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FC}"]], "1f3fc-1f3fd": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 16, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FD}"]], "1f3fc-1f3fe": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 17, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FE}"]], "1f3fc-1f3ff": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 18, 15, ["\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FF}"]], "1f3fd-1f3fb": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 19, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FB}"]], "1f3fd-1f3fc": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 20, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FC}"]], "1f3fd-1f3fd": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 21, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FD}"]], "1f3fd-1f3fe": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 22, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FE}"]], "1f3fd-1f3ff": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 23, 15, ["\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FF}"]], "1f3fe-1f3fb": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 24, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FB}"]], "1f3fe-1f3fc": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 25, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FC}"]], "1f3fe-1f3fd": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 26, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FD}"]], "1f3fe-1f3fe": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 27, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FE}"]], "1f3fe-1f3ff": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 28, 15, ["\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FF}"]], "1f3ff-1f3fb": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 29, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FB}"]], "1f3ff-1f3fc": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 30, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FC}"]], "1f3ff-1f3fd": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 31, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FD}"]], "1f3ff-1f3fe": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 32, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FE}"]], "1f3ff-1f3ff": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 33, 15, ["\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FF}"]] },
      "1f469": { "1f3fb": ["1f469-1f3fb", 21, 35, 15, ["\u{1F469}\u{1F3FB}"]], "1f3fc": ["1f469-1f3fc", 21, 36, 15, ["\u{1F469}\u{1F3FC}"]], "1f3fd": ["1f469-1f3fd", 21, 37, 15, ["\u{1F469}\u{1F3FD}"]], "1f3fe": ["1f469-1f3fe", 21, 38, 15, ["\u{1F469}\u{1F3FE}"]], "1f3ff": ["1f469-1f3ff", 21, 39, 15, ["\u{1F469}\u{1F3FF}"]] },
      "1f46b": { "1f3fb": ["1f46b-1f3fb", 21, 42, 15, ["\u{1F46B}\u{1F3FB}"]], "1f3fc": ["1f46b-1f3fc", 21, 43, 15, ["\u{1F46B}\u{1F3FC}"]], "1f3fd": ["1f46b-1f3fd", 21, 44, 15, ["\u{1F46B}\u{1F3FD}"]], "1f3fe": ["1f46b-1f3fe", 21, 45, 15, ["\u{1F46B}\u{1F3FE}"]], "1f3ff": ["1f46b-1f3ff", 21, 46, 15, ["\u{1F46B}\u{1F3FF}"]], "1f3fb-1f3fc": ["1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc", 21, 47, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}"]], "1f3fb-1f3fd": ["1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd", 21, 48, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}"]], "1f3fb-1f3fe": ["1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe", 21, 49, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}"]], "1f3fb-1f3ff": ["1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff", 21, 50, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}"]], "1f3fc-1f3fb": ["1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb", 21, 51, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}"]], "1f3fc-1f3fd": ["1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd", 21, 52, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}"]], "1f3fc-1f3fe": ["1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe", 21, 53, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}"]], "1f3fc-1f3ff": ["1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff", 21, 54, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}"]], "1f3fd-1f3fb": ["1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb", 21, 55, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}"]], "1f3fd-1f3fc": ["1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc", 21, 56, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}"]], "1f3fd-1f3fe": ["1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe", 21, 57, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}"]], "1f3fd-1f3ff": ["1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff", 21, 58, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}"]], "1f3fe-1f3fb": ["1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb", 21, 59, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}"]], "1f3fe-1f3fc": ["1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc", 21, 60, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}"]], "1f3fe-1f3fd": ["1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd", 22, 0, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}"]], "1f3fe-1f3ff": ["1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff", 22, 1, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}"]], "1f3ff-1f3fb": ["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb", 22, 2, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}"]], "1f3ff-1f3fc": ["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc", 22, 3, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}"]], "1f3ff-1f3fd": ["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd", 22, 4, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}"]], "1f3ff-1f3fe": ["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe", 22, 5, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}"]] },
      "1f46c": { "1f3fb": ["1f46c-1f3fb", 22, 7, 15, ["\u{1F46C}\u{1F3FB}"]], "1f3fc": ["1f46c-1f3fc", 22, 8, 15, ["\u{1F46C}\u{1F3FC}"]], "1f3fd": ["1f46c-1f3fd", 22, 9, 15, ["\u{1F46C}\u{1F3FD}"]], "1f3fe": ["1f46c-1f3fe", 22, 10, 15, ["\u{1F46C}\u{1F3FE}"]], "1f3ff": ["1f46c-1f3ff", 22, 11, 15, ["\u{1F46C}\u{1F3FF}"]], "1f3fb-1f3fc": ["1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc", 22, 12, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}"]], "1f3fb-1f3fd": ["1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd", 22, 13, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}"]], "1f3fb-1f3fe": ["1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe", 22, 14, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}"]], "1f3fb-1f3ff": ["1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff", 22, 15, 15, ["\u{1F468}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}"]], "1f3fc-1f3fb": ["1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb", 22, 16, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}"]], "1f3fc-1f3fd": ["1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd", 22, 17, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}"]], "1f3fc-1f3fe": ["1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe", 22, 18, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}"]], "1f3fc-1f3ff": ["1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff", 22, 19, 15, ["\u{1F468}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}"]], "1f3fd-1f3fb": ["1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb", 22, 20, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}"]], "1f3fd-1f3fc": ["1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc", 22, 21, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}"]], "1f3fd-1f3fe": ["1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe", 22, 22, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}"]], "1f3fd-1f3ff": ["1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff", 22, 23, 15, ["\u{1F468}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}"]], "1f3fe-1f3fb": ["1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb", 22, 24, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}"]], "1f3fe-1f3fc": ["1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc", 22, 25, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}"]], "1f3fe-1f3fd": ["1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd", 22, 26, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}"]], "1f3fe-1f3ff": ["1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff", 22, 27, 15, ["\u{1F468}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}"]], "1f3ff-1f3fb": ["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb", 22, 28, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}"]], "1f3ff-1f3fc": ["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc", 22, 29, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}"]], "1f3ff-1f3fd": ["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd", 22, 30, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}"]], "1f3ff-1f3fe": ["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe", 22, 31, 15, ["\u{1F468}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}"]] },
      "1f46d": { "1f3fb": ["1f46d-1f3fb", 22, 33, 15, ["\u{1F46D}\u{1F3FB}"]], "1f3fc": ["1f46d-1f3fc", 22, 34, 15, ["\u{1F46D}\u{1F3FC}"]], "1f3fd": ["1f46d-1f3fd", 22, 35, 15, ["\u{1F46D}\u{1F3FD}"]], "1f3fe": ["1f46d-1f3fe", 22, 36, 15, ["\u{1F46D}\u{1F3FE}"]], "1f3ff": ["1f46d-1f3ff", 22, 37, 15, ["\u{1F46D}\u{1F3FF}"]], "1f3fb-1f3fc": ["1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc", 22, 38, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FC}"]], "1f3fb-1f3fd": ["1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd", 22, 39, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FD}"]], "1f3fb-1f3fe": ["1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe", 22, 40, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FE}"]], "1f3fb-1f3ff": ["1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff", 22, 41, 15, ["\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FF}"]], "1f3fc-1f3fb": ["1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb", 22, 42, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FB}"]], "1f3fc-1f3fd": ["1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd", 22, 43, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FD}"]], "1f3fc-1f3fe": ["1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe", 22, 44, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FE}"]], "1f3fc-1f3ff": ["1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff", 22, 45, 15, ["\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FF}"]], "1f3fd-1f3fb": ["1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb", 22, 46, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FB}"]], "1f3fd-1f3fc": ["1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc", 22, 47, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FC}"]], "1f3fd-1f3fe": ["1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe", 22, 48, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FE}"]], "1f3fd-1f3ff": ["1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff", 22, 49, 15, ["\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FF}"]], "1f3fe-1f3fb": ["1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb", 22, 50, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FB}"]], "1f3fe-1f3fc": ["1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc", 22, 51, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FC}"]], "1f3fe-1f3fd": ["1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd", 22, 52, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FD}"]], "1f3fe-1f3ff": ["1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff", 22, 53, 15, ["\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FF}"]], "1f3ff-1f3fb": ["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb", 22, 54, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FB}"]], "1f3ff-1f3fc": ["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc", 22, 55, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FC}"]], "1f3ff-1f3fd": ["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd", 22, 56, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FD}"]], "1f3ff-1f3fe": ["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe", 22, 57, 15, ["\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FE}"]] },
      "1f46e-200d-2640-fe0f": { "1f3fb": ["1f46e-1f3fb-200d-2640-fe0f", 22, 59, 15, ["\u{1F46E}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f46e-1f3fc-200d-2640-fe0f", 22, 60, 15, ["\u{1F46E}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f46e-1f3fd-200d-2640-fe0f", 23, 0, 15, ["\u{1F46E}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f46e-1f3fe-200d-2640-fe0f", 23, 1, 15, ["\u{1F46E}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f46e-1f3ff-200d-2640-fe0f", 23, 2, 15, ["\u{1F46E}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f46e-200d-2642-fe0f": { "1f3fb": ["1f46e-1f3fb-200d-2642-fe0f", 23, 4, 15, ["\u{1F46E}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F46E}\u{1F3FB}"]], "1f3fc": ["1f46e-1f3fc-200d-2642-fe0f", 23, 5, 15, ["\u{1F46E}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F46E}\u{1F3FC}"]], "1f3fd": ["1f46e-1f3fd-200d-2642-fe0f", 23, 6, 15, ["\u{1F46E}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F46E}\u{1F3FD}"]], "1f3fe": ["1f46e-1f3fe-200d-2642-fe0f", 23, 7, 15, ["\u{1F46E}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F46E}\u{1F3FE}"]], "1f3ff": ["1f46e-1f3ff-200d-2642-fe0f", 23, 8, 15, ["\u{1F46E}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F46E}\u{1F3FF}"]] },
      "1f470-200d-2640-fe0f": { "1f3fb": ["1f470-1f3fb-200d-2640-fe0f", 23, 19, 15, ["\u{1F470}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f470-1f3fc-200d-2640-fe0f", 23, 20, 15, ["\u{1F470}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f470-1f3fd-200d-2640-fe0f", 23, 21, 15, ["\u{1F470}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f470-1f3fe-200d-2640-fe0f", 23, 22, 15, ["\u{1F470}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f470-1f3ff-200d-2640-fe0f", 23, 23, 15, ["\u{1F470}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f470-200d-2642-fe0f": { "1f3fb": ["1f470-1f3fb-200d-2642-fe0f", 23, 25, 15, ["\u{1F470}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f470-1f3fc-200d-2642-fe0f", 23, 26, 15, ["\u{1F470}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f470-1f3fd-200d-2642-fe0f", 23, 27, 15, ["\u{1F470}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f470-1f3fe-200d-2642-fe0f", 23, 28, 15, ["\u{1F470}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f470-1f3ff-200d-2642-fe0f", 23, 29, 15, ["\u{1F470}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f470": { "1f3fb": ["1f470-1f3fb", 23, 31, 15, ["\u{1F470}\u{1F3FB}"]], "1f3fc": ["1f470-1f3fc", 23, 32, 15, ["\u{1F470}\u{1F3FC}"]], "1f3fd": ["1f470-1f3fd", 23, 33, 15, ["\u{1F470}\u{1F3FD}"]], "1f3fe": ["1f470-1f3fe", 23, 34, 15, ["\u{1F470}\u{1F3FE}"]], "1f3ff": ["1f470-1f3ff", 23, 35, 15, ["\u{1F470}\u{1F3FF}"]] },
      "1f471-200d-2640-fe0f": { "1f3fb": ["1f471-1f3fb-200d-2640-fe0f", 23, 37, 15, ["\u{1F471}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f471-1f3fc-200d-2640-fe0f", 23, 38, 15, ["\u{1F471}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f471-1f3fd-200d-2640-fe0f", 23, 39, 15, ["\u{1F471}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f471-1f3fe-200d-2640-fe0f", 23, 40, 15, ["\u{1F471}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f471-1f3ff-200d-2640-fe0f", 23, 41, 15, ["\u{1F471}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f471-200d-2642-fe0f": { "1f3fb": ["1f471-1f3fb-200d-2642-fe0f", 23, 43, 15, ["\u{1F471}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F471}\u{1F3FB}"]], "1f3fc": ["1f471-1f3fc-200d-2642-fe0f", 23, 44, 15, ["\u{1F471}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F471}\u{1F3FC}"]], "1f3fd": ["1f471-1f3fd-200d-2642-fe0f", 23, 45, 15, ["\u{1F471}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F471}\u{1F3FD}"]], "1f3fe": ["1f471-1f3fe-200d-2642-fe0f", 23, 46, 15, ["\u{1F471}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F471}\u{1F3FE}"]], "1f3ff": ["1f471-1f3ff-200d-2642-fe0f", 23, 47, 15, ["\u{1F471}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F471}\u{1F3FF}"]] },
      "1f472": { "1f3fb": ["1f472-1f3fb", 23, 55, 15, ["\u{1F472}\u{1F3FB}"]], "1f3fc": ["1f472-1f3fc", 23, 56, 15, ["\u{1F472}\u{1F3FC}"]], "1f3fd": ["1f472-1f3fd", 23, 57, 15, ["\u{1F472}\u{1F3FD}"]], "1f3fe": ["1f472-1f3fe", 23, 58, 15, ["\u{1F472}\u{1F3FE}"]], "1f3ff": ["1f472-1f3ff", 23, 59, 15, ["\u{1F472}\u{1F3FF}"]] },
      "1f473-200d-2640-fe0f": { "1f3fb": ["1f473-1f3fb-200d-2640-fe0f", 24, 0, 15, ["\u{1F473}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f473-1f3fc-200d-2640-fe0f", 24, 1, 15, ["\u{1F473}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f473-1f3fd-200d-2640-fe0f", 24, 2, 15, ["\u{1F473}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f473-1f3fe-200d-2640-fe0f", 24, 3, 15, ["\u{1F473}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f473-1f3ff-200d-2640-fe0f", 24, 4, 15, ["\u{1F473}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f473-200d-2642-fe0f": { "1f3fb": ["1f473-1f3fb-200d-2642-fe0f", 24, 6, 15, ["\u{1F473}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F473}\u{1F3FB}"]], "1f3fc": ["1f473-1f3fc-200d-2642-fe0f", 24, 7, 15, ["\u{1F473}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F473}\u{1F3FC}"]], "1f3fd": ["1f473-1f3fd-200d-2642-fe0f", 24, 8, 15, ["\u{1F473}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F473}\u{1F3FD}"]], "1f3fe": ["1f473-1f3fe-200d-2642-fe0f", 24, 9, 15, ["\u{1F473}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F473}\u{1F3FE}"]], "1f3ff": ["1f473-1f3ff-200d-2642-fe0f", 24, 10, 15, ["\u{1F473}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F473}\u{1F3FF}"]] },
      "1f474": { "1f3fb": ["1f474-1f3fb", 24, 18, 15, ["\u{1F474}\u{1F3FB}"]], "1f3fc": ["1f474-1f3fc", 24, 19, 15, ["\u{1F474}\u{1F3FC}"]], "1f3fd": ["1f474-1f3fd", 24, 20, 15, ["\u{1F474}\u{1F3FD}"]], "1f3fe": ["1f474-1f3fe", 24, 21, 15, ["\u{1F474}\u{1F3FE}"]], "1f3ff": ["1f474-1f3ff", 24, 22, 15, ["\u{1F474}\u{1F3FF}"]] },
      "1f475": { "1f3fb": ["1f475-1f3fb", 24, 24, 15, ["\u{1F475}\u{1F3FB}"]], "1f3fc": ["1f475-1f3fc", 24, 25, 15, ["\u{1F475}\u{1F3FC}"]], "1f3fd": ["1f475-1f3fd", 24, 26, 15, ["\u{1F475}\u{1F3FD}"]], "1f3fe": ["1f475-1f3fe", 24, 27, 15, ["\u{1F475}\u{1F3FE}"]], "1f3ff": ["1f475-1f3ff", 24, 28, 15, ["\u{1F475}\u{1F3FF}"]] },
      "1f476": { "1f3fb": ["1f476-1f3fb", 24, 30, 15, ["\u{1F476}\u{1F3FB}"]], "1f3fc": ["1f476-1f3fc", 24, 31, 15, ["\u{1F476}\u{1F3FC}"]], "1f3fd": ["1f476-1f3fd", 24, 32, 15, ["\u{1F476}\u{1F3FD}"]], "1f3fe": ["1f476-1f3fe", 24, 33, 15, ["\u{1F476}\u{1F3FE}"]], "1f3ff": ["1f476-1f3ff", 24, 34, 15, ["\u{1F476}\u{1F3FF}"]] },
      "1f477-200d-2640-fe0f": { "1f3fb": ["1f477-1f3fb-200d-2640-fe0f", 24, 36, 15, ["\u{1F477}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f477-1f3fc-200d-2640-fe0f", 24, 37, 15, ["\u{1F477}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f477-1f3fd-200d-2640-fe0f", 24, 38, 15, ["\u{1F477}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f477-1f3fe-200d-2640-fe0f", 24, 39, 15, ["\u{1F477}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f477-1f3ff-200d-2640-fe0f", 24, 40, 15, ["\u{1F477}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f477-200d-2642-fe0f": { "1f3fb": ["1f477-1f3fb-200d-2642-fe0f", 24, 42, 15, ["\u{1F477}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F477}\u{1F3FB}"]], "1f3fc": ["1f477-1f3fc-200d-2642-fe0f", 24, 43, 15, ["\u{1F477}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F477}\u{1F3FC}"]], "1f3fd": ["1f477-1f3fd-200d-2642-fe0f", 24, 44, 15, ["\u{1F477}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F477}\u{1F3FD}"]], "1f3fe": ["1f477-1f3fe-200d-2642-fe0f", 24, 45, 15, ["\u{1F477}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F477}\u{1F3FE}"]], "1f3ff": ["1f477-1f3ff-200d-2642-fe0f", 24, 46, 15, ["\u{1F477}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F477}\u{1F3FF}"]] },
      "1f478": { "1f3fb": ["1f478-1f3fb", 24, 54, 15, ["\u{1F478}\u{1F3FB}"]], "1f3fc": ["1f478-1f3fc", 24, 55, 15, ["\u{1F478}\u{1F3FC}"]], "1f3fd": ["1f478-1f3fd", 24, 56, 15, ["\u{1F478}\u{1F3FD}"]], "1f3fe": ["1f478-1f3fe", 24, 57, 15, ["\u{1F478}\u{1F3FE}"]], "1f3ff": ["1f478-1f3ff", 24, 58, 15, ["\u{1F478}\u{1F3FF}"]] },
      "1f47c": { "1f3fb": ["1f47c-1f3fb", 25, 2, 15, ["\u{1F47C}\u{1F3FB}"]], "1f3fc": ["1f47c-1f3fc", 25, 3, 15, ["\u{1F47C}\u{1F3FC}"]], "1f3fd": ["1f47c-1f3fd", 25, 4, 15, ["\u{1F47C}\u{1F3FD}"]], "1f3fe": ["1f47c-1f3fe", 25, 5, 15, ["\u{1F47C}\u{1F3FE}"]], "1f3ff": ["1f47c-1f3ff", 25, 6, 15, ["\u{1F47C}\u{1F3FF}"]] },
      "1f481-200d-2640-fe0f": { "1f3fb": ["1f481-1f3fb-200d-2640-fe0f", 25, 12, 15, ["\u{1F481}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F481}\u{1F3FB}"]], "1f3fc": ["1f481-1f3fc-200d-2640-fe0f", 25, 13, 15, ["\u{1F481}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F481}\u{1F3FC}"]], "1f3fd": ["1f481-1f3fd-200d-2640-fe0f", 25, 14, 15, ["\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F481}\u{1F3FD}"]], "1f3fe": ["1f481-1f3fe-200d-2640-fe0f", 25, 15, 15, ["\u{1F481}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F481}\u{1F3FE}"]], "1f3ff": ["1f481-1f3ff-200d-2640-fe0f", 25, 16, 15, ["\u{1F481}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F481}\u{1F3FF}"]] },
      "1f481-200d-2642-fe0f": { "1f3fb": ["1f481-1f3fb-200d-2642-fe0f", 25, 18, 15, ["\u{1F481}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f481-1f3fc-200d-2642-fe0f", 25, 19, 15, ["\u{1F481}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f481-1f3fd-200d-2642-fe0f", 25, 20, 15, ["\u{1F481}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f481-1f3fe-200d-2642-fe0f", 25, 21, 15, ["\u{1F481}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f481-1f3ff-200d-2642-fe0f", 25, 22, 15, ["\u{1F481}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f482-200d-2640-fe0f": { "1f3fb": ["1f482-1f3fb-200d-2640-fe0f", 25, 30, 15, ["\u{1F482}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f482-1f3fc-200d-2640-fe0f", 25, 31, 15, ["\u{1F482}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f482-1f3fd-200d-2640-fe0f", 25, 32, 15, ["\u{1F482}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f482-1f3fe-200d-2640-fe0f", 25, 33, 15, ["\u{1F482}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f482-1f3ff-200d-2640-fe0f", 25, 34, 15, ["\u{1F482}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f482-200d-2642-fe0f": { "1f3fb": ["1f482-1f3fb-200d-2642-fe0f", 25, 36, 15, ["\u{1F482}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F482}\u{1F3FB}"]], "1f3fc": ["1f482-1f3fc-200d-2642-fe0f", 25, 37, 15, ["\u{1F482}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F482}\u{1F3FC}"]], "1f3fd": ["1f482-1f3fd-200d-2642-fe0f", 25, 38, 15, ["\u{1F482}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F482}\u{1F3FD}"]], "1f3fe": ["1f482-1f3fe-200d-2642-fe0f", 25, 39, 15, ["\u{1F482}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F482}\u{1F3FE}"]], "1f3ff": ["1f482-1f3ff-200d-2642-fe0f", 25, 40, 15, ["\u{1F482}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F482}\u{1F3FF}"]] },
      "1f483": { "1f3fb": ["1f483-1f3fb", 25, 48, 15, ["\u{1F483}\u{1F3FB}"]], "1f3fc": ["1f483-1f3fc", 25, 49, 15, ["\u{1F483}\u{1F3FC}"]], "1f3fd": ["1f483-1f3fd", 25, 50, 15, ["\u{1F483}\u{1F3FD}"]], "1f3fe": ["1f483-1f3fe", 25, 51, 15, ["\u{1F483}\u{1F3FE}"]], "1f3ff": ["1f483-1f3ff", 25, 52, 15, ["\u{1F483}\u{1F3FF}"]] },
      "1f485": { "1f3fb": ["1f485-1f3fb", 25, 55, 15, ["\u{1F485}\u{1F3FB}"]], "1f3fc": ["1f485-1f3fc", 25, 56, 15, ["\u{1F485}\u{1F3FC}"]], "1f3fd": ["1f485-1f3fd", 25, 57, 15, ["\u{1F485}\u{1F3FD}"]], "1f3fe": ["1f485-1f3fe", 25, 58, 15, ["\u{1F485}\u{1F3FE}"]], "1f3ff": ["1f485-1f3ff", 25, 59, 15, ["\u{1F485}\u{1F3FF}"]] },
      "1f486-200d-2640-fe0f": { "1f3fb": ["1f486-1f3fb-200d-2640-fe0f", 26, 0, 15, ["\u{1F486}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F486}\u{1F3FB}"]], "1f3fc": ["1f486-1f3fc-200d-2640-fe0f", 26, 1, 15, ["\u{1F486}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F486}\u{1F3FC}"]], "1f3fd": ["1f486-1f3fd-200d-2640-fe0f", 26, 2, 15, ["\u{1F486}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F486}\u{1F3FD}"]], "1f3fe": ["1f486-1f3fe-200d-2640-fe0f", 26, 3, 15, ["\u{1F486}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F486}\u{1F3FE}"]], "1f3ff": ["1f486-1f3ff-200d-2640-fe0f", 26, 4, 15, ["\u{1F486}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F486}\u{1F3FF}"]] },
      "1f486-200d-2642-fe0f": { "1f3fb": ["1f486-1f3fb-200d-2642-fe0f", 26, 6, 15, ["\u{1F486}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f486-1f3fc-200d-2642-fe0f", 26, 7, 15, ["\u{1F486}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f486-1f3fd-200d-2642-fe0f", 26, 8, 15, ["\u{1F486}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f486-1f3fe-200d-2642-fe0f", 26, 9, 15, ["\u{1F486}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f486-1f3ff-200d-2642-fe0f", 26, 10, 15, ["\u{1F486}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f487-200d-2640-fe0f": { "1f3fb": ["1f487-1f3fb-200d-2640-fe0f", 26, 18, 15, ["\u{1F487}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F487}\u{1F3FB}"]], "1f3fc": ["1f487-1f3fc-200d-2640-fe0f", 26, 19, 15, ["\u{1F487}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F487}\u{1F3FC}"]], "1f3fd": ["1f487-1f3fd-200d-2640-fe0f", 26, 20, 15, ["\u{1F487}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F487}\u{1F3FD}"]], "1f3fe": ["1f487-1f3fe-200d-2640-fe0f", 26, 21, 15, ["\u{1F487}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F487}\u{1F3FE}"]], "1f3ff": ["1f487-1f3ff-200d-2640-fe0f", 26, 22, 15, ["\u{1F487}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F487}\u{1F3FF}"]] },
      "1f487-200d-2642-fe0f": { "1f3fb": ["1f487-1f3fb-200d-2642-fe0f", 26, 24, 15, ["\u{1F487}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f487-1f3fc-200d-2642-fe0f", 26, 25, 15, ["\u{1F487}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f487-1f3fd-200d-2642-fe0f", 26, 26, 15, ["\u{1F487}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f487-1f3fe-200d-2642-fe0f", 26, 27, 15, ["\u{1F487}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f487-1f3ff-200d-2642-fe0f", 26, 28, 15, ["\u{1F487}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f48f": { "1f3fb": ["1f48f-1f3fb", 26, 43, 15, ["\u{1F48F}\u{1F3FB}"]], "1f3fc": ["1f48f-1f3fc", 26, 44, 15, ["\u{1F48F}\u{1F3FC}"]], "1f3fd": ["1f48f-1f3fd", 26, 45, 15, ["\u{1F48F}\u{1F3FD}"]], "1f3fe": ["1f48f-1f3fe", 26, 46, 15, ["\u{1F48F}\u{1F3FE}"]], "1f3ff": ["1f48f-1f3ff", 26, 47, 15, ["\u{1F48F}\u{1F3FF}"]], "1f3fb-1f3fc": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc", 26, 48, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FC}"]], "1f3fb-1f3fd": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd", 26, 49, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FD}"]], "1f3fb-1f3fe": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe", 26, 50, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FE}"]], "1f3fb-1f3ff": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff", 26, 51, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FF}"]], "1f3fc-1f3fb": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb", 26, 52, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FB}"]], "1f3fc-1f3fd": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd", 26, 53, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FD}"]], "1f3fc-1f3fe": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe", 26, 54, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FE}"]], "1f3fc-1f3ff": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff", 26, 55, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FF}"]], "1f3fd-1f3fb": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb", 26, 56, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FB}"]], "1f3fd-1f3fc": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc", 26, 57, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FC}"]], "1f3fd-1f3fe": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe", 26, 58, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FE}"]], "1f3fd-1f3ff": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff", 26, 59, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FF}"]], "1f3fe-1f3fb": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb", 26, 60, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FB}"]], "1f3fe-1f3fc": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc", 27, 0, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FC}"]], "1f3fe-1f3fd": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd", 27, 1, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FD}"]], "1f3fe-1f3ff": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff", 27, 2, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FF}"]], "1f3ff-1f3fb": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb", 27, 3, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FB}"]], "1f3ff-1f3fc": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc", 27, 4, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FC}"]], "1f3ff-1f3fd": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd", 27, 5, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FD}"]], "1f3ff-1f3fe": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe", 27, 6, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FE}"]] },
      "1f491": { "1f3fb": ["1f491-1f3fb", 27, 9, 15, ["\u{1F491}\u{1F3FB}"]], "1f3fc": ["1f491-1f3fc", 27, 10, 15, ["\u{1F491}\u{1F3FC}"]], "1f3fd": ["1f491-1f3fd", 27, 11, 15, ["\u{1F491}\u{1F3FD}"]], "1f3fe": ["1f491-1f3fe", 27, 12, 15, ["\u{1F491}\u{1F3FE}"]], "1f3ff": ["1f491-1f3ff", 27, 13, 15, ["\u{1F491}\u{1F3FF}"]], "1f3fb-1f3fc": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fc", 27, 14, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FC}"]], "1f3fb-1f3fd": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fd", 27, 15, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FD}"]], "1f3fb-1f3fe": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fe", 27, 16, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FE}"]], "1f3fb-1f3ff": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3ff", 27, 17, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FF}"]], "1f3fc-1f3fb": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fb", 27, 18, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FB}"]], "1f3fc-1f3fd": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fd", 27, 19, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FD}"]], "1f3fc-1f3fe": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fe", 27, 20, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FE}"]], "1f3fc-1f3ff": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3ff", 27, 21, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FF}"]], "1f3fd-1f3fb": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fb", 27, 22, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FB}"]], "1f3fd-1f3fc": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fc", 27, 23, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FC}"]], "1f3fd-1f3fe": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fe", 27, 24, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FE}"]], "1f3fd-1f3ff": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3ff", 27, 25, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FF}"]], "1f3fe-1f3fb": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fb", 27, 26, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FB}"]], "1f3fe-1f3fc": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fc", 27, 27, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FC}"]], "1f3fe-1f3fd": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fd", 27, 28, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FD}"]], "1f3fe-1f3ff": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3ff", 27, 29, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FF}"]], "1f3ff-1f3fb": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fb", 27, 30, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FB}"]], "1f3ff-1f3fc": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fc", 27, 31, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FC}"]], "1f3ff-1f3fd": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fd", 27, 32, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FD}"]], "1f3ff-1f3fe": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fe", 27, 33, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FE}"]] },
      "1f4aa": { "1f3fb": ["1f4aa-1f3fb", 27, 59, 15, ["\u{1F4AA}\u{1F3FB}"]], "1f3fc": ["1f4aa-1f3fc", 27, 60, 15, ["\u{1F4AA}\u{1F3FC}"]], "1f3fd": ["1f4aa-1f3fd", 28, 0, 15, ["\u{1F4AA}\u{1F3FD}"]], "1f3fe": ["1f4aa-1f3fe", 28, 1, 15, ["\u{1F4AA}\u{1F3FE}"]], "1f3ff": ["1f4aa-1f3ff", 28, 2, 15, ["\u{1F4AA}\u{1F3FF}"]] },
      "1f574-fe0f": { "1f3fb": ["1f574-1f3fb", 31, 0, 15, ["\u{1F574}\u{1F3FB}"]], "1f3fc": ["1f574-1f3fc", 31, 1, 15, ["\u{1F574}\u{1F3FC}"]], "1f3fd": ["1f574-1f3fd", 31, 2, 15, ["\u{1F574}\u{1F3FD}"]], "1f3fe": ["1f574-1f3fe", 31, 3, 15, ["\u{1F574}\u{1F3FE}"]], "1f3ff": ["1f574-1f3ff", 31, 4, 15, ["\u{1F574}\u{1F3FF}"]] },
      "1f575-fe0f-200d-2640-fe0f": { "1f3fb": ["1f575-1f3fb-200d-2640-fe0f", 31, 6, 15, ["\u{1F575}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f575-1f3fc-200d-2640-fe0f", 31, 7, 15, ["\u{1F575}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f575-1f3fd-200d-2640-fe0f", 31, 8, 15, ["\u{1F575}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f575-1f3fe-200d-2640-fe0f", 31, 9, 15, ["\u{1F575}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f575-1f3ff-200d-2640-fe0f", 31, 10, 15, ["\u{1F575}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f575-fe0f-200d-2642-fe0f": { "1f3fb": ["1f575-1f3fb-200d-2642-fe0f", 31, 12, 15, ["\u{1F575}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F575}\u{1F3FB}"]], "1f3fc": ["1f575-1f3fc-200d-2642-fe0f", 31, 13, 15, ["\u{1F575}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F575}\u{1F3FC}"]], "1f3fd": ["1f575-1f3fd-200d-2642-fe0f", 31, 14, 15, ["\u{1F575}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F575}\u{1F3FD}"]], "1f3fe": ["1f575-1f3fe-200d-2642-fe0f", 31, 15, 15, ["\u{1F575}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F575}\u{1F3FE}"]], "1f3ff": ["1f575-1f3ff-200d-2642-fe0f", 31, 16, 15, ["\u{1F575}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F575}\u{1F3FF}"]] },
      "1f57a": { "1f3fb": ["1f57a-1f3fb", 31, 28, 15, ["\u{1F57A}\u{1F3FB}"]], "1f3fc": ["1f57a-1f3fc", 31, 29, 15, ["\u{1F57A}\u{1F3FC}"]], "1f3fd": ["1f57a-1f3fd", 31, 30, 15, ["\u{1F57A}\u{1F3FD}"]], "1f3fe": ["1f57a-1f3fe", 31, 31, 15, ["\u{1F57A}\u{1F3FE}"]], "1f3ff": ["1f57a-1f3ff", 31, 32, 15, ["\u{1F57A}\u{1F3FF}"]] },
      "1f590-fe0f": { "1f3fb": ["1f590-1f3fb", 31, 39, 15, ["\u{1F590}\u{1F3FB}"]], "1f3fc": ["1f590-1f3fc", 31, 40, 15, ["\u{1F590}\u{1F3FC}"]], "1f3fd": ["1f590-1f3fd", 31, 41, 15, ["\u{1F590}\u{1F3FD}"]], "1f3fe": ["1f590-1f3fe", 31, 42, 15, ["\u{1F590}\u{1F3FE}"]], "1f3ff": ["1f590-1f3ff", 31, 43, 15, ["\u{1F590}\u{1F3FF}"]] },
      "1f595": { "1f3fb": ["1f595-1f3fb", 31, 45, 15, ["\u{1F595}\u{1F3FB}"]], "1f3fc": ["1f595-1f3fc", 31, 46, 15, ["\u{1F595}\u{1F3FC}"]], "1f3fd": ["1f595-1f3fd", 31, 47, 15, ["\u{1F595}\u{1F3FD}"]], "1f3fe": ["1f595-1f3fe", 31, 48, 15, ["\u{1F595}\u{1F3FE}"]], "1f3ff": ["1f595-1f3ff", 31, 49, 15, ["\u{1F595}\u{1F3FF}"]] },
      "1f596": { "1f3fb": ["1f596-1f3fb", 31, 51, 15, ["\u{1F596}\u{1F3FB}"]], "1f3fc": ["1f596-1f3fc", 31, 52, 15, ["\u{1F596}\u{1F3FC}"]], "1f3fd": ["1f596-1f3fd", 31, 53, 15, ["\u{1F596}\u{1F3FD}"]], "1f3fe": ["1f596-1f3fe", 31, 54, 15, ["\u{1F596}\u{1F3FE}"]], "1f3ff": ["1f596-1f3ff", 31, 55, 15, ["\u{1F596}\u{1F3FF}"]] },
      "1f645-200d-2640-fe0f": { "1f3fb": ["1f645-1f3fb-200d-2640-fe0f", 33, 33, 15, ["\u{1F645}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F645}\u{1F3FB}"]], "1f3fc": ["1f645-1f3fc-200d-2640-fe0f", 33, 34, 15, ["\u{1F645}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F645}\u{1F3FC}"]], "1f3fd": ["1f645-1f3fd-200d-2640-fe0f", 33, 35, 15, ["\u{1F645}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F645}\u{1F3FD}"]], "1f3fe": ["1f645-1f3fe-200d-2640-fe0f", 33, 36, 15, ["\u{1F645}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F645}\u{1F3FE}"]], "1f3ff": ["1f645-1f3ff-200d-2640-fe0f", 33, 37, 15, ["\u{1F645}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F645}\u{1F3FF}"]] },
      "1f645-200d-2642-fe0f": { "1f3fb": ["1f645-1f3fb-200d-2642-fe0f", 33, 39, 15, ["\u{1F645}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f645-1f3fc-200d-2642-fe0f", 33, 40, 15, ["\u{1F645}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f645-1f3fd-200d-2642-fe0f", 33, 41, 15, ["\u{1F645}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f645-1f3fe-200d-2642-fe0f", 33, 42, 15, ["\u{1F645}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f645-1f3ff-200d-2642-fe0f", 33, 43, 15, ["\u{1F645}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f646-200d-2640-fe0f": { "1f3fb": ["1f646-1f3fb-200d-2640-fe0f", 33, 51, 15, ["\u{1F646}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F646}\u{1F3FB}"]], "1f3fc": ["1f646-1f3fc-200d-2640-fe0f", 33, 52, 15, ["\u{1F646}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F646}\u{1F3FC}"]], "1f3fd": ["1f646-1f3fd-200d-2640-fe0f", 33, 53, 15, ["\u{1F646}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F646}\u{1F3FD}"]], "1f3fe": ["1f646-1f3fe-200d-2640-fe0f", 33, 54, 15, ["\u{1F646}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F646}\u{1F3FE}"]], "1f3ff": ["1f646-1f3ff-200d-2640-fe0f", 33, 55, 15, ["\u{1F646}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F646}\u{1F3FF}"]] },
      "1f646-200d-2642-fe0f": { "1f3fb": ["1f646-1f3fb-200d-2642-fe0f", 33, 57, 15, ["\u{1F646}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f646-1f3fc-200d-2642-fe0f", 33, 58, 15, ["\u{1F646}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f646-1f3fd-200d-2642-fe0f", 33, 59, 15, ["\u{1F646}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f646-1f3fe-200d-2642-fe0f", 33, 60, 15, ["\u{1F646}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f646-1f3ff-200d-2642-fe0f", 34, 0, 15, ["\u{1F646}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f647-200d-2640-fe0f": { "1f3fb": ["1f647-1f3fb-200d-2640-fe0f", 34, 8, 15, ["\u{1F647}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f647-1f3fc-200d-2640-fe0f", 34, 9, 15, ["\u{1F647}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f647-1f3fd-200d-2640-fe0f", 34, 10, 15, ["\u{1F647}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f647-1f3fe-200d-2640-fe0f", 34, 11, 15, ["\u{1F647}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f647-1f3ff-200d-2640-fe0f", 34, 12, 15, ["\u{1F647}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f647-200d-2642-fe0f": { "1f3fb": ["1f647-1f3fb-200d-2642-fe0f", 34, 14, 15, ["\u{1F647}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f647-1f3fc-200d-2642-fe0f", 34, 15, 15, ["\u{1F647}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f647-1f3fd-200d-2642-fe0f", 34, 16, 15, ["\u{1F647}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f647-1f3fe-200d-2642-fe0f", 34, 17, 15, ["\u{1F647}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f647-1f3ff-200d-2642-fe0f", 34, 18, 15, ["\u{1F647}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f647": { "1f3fb": ["1f647-1f3fb", 34, 20, 15, ["\u{1F647}\u{1F3FB}"]], "1f3fc": ["1f647-1f3fc", 34, 21, 15, ["\u{1F647}\u{1F3FC}"]], "1f3fd": ["1f647-1f3fd", 34, 22, 15, ["\u{1F647}\u{1F3FD}"]], "1f3fe": ["1f647-1f3fe", 34, 23, 15, ["\u{1F647}\u{1F3FE}"]], "1f3ff": ["1f647-1f3ff", 34, 24, 15, ["\u{1F647}\u{1F3FF}"]] },
      "1f64b-200d-2640-fe0f": { "1f3fb": ["1f64b-1f3fb-200d-2640-fe0f", 34, 29, 15, ["\u{1F64B}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F64B}\u{1F3FB}"]], "1f3fc": ["1f64b-1f3fc-200d-2640-fe0f", 34, 30, 15, ["\u{1F64B}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F64B}\u{1F3FC}"]], "1f3fd": ["1f64b-1f3fd-200d-2640-fe0f", 34, 31, 15, ["\u{1F64B}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F64B}\u{1F3FD}"]], "1f3fe": ["1f64b-1f3fe-200d-2640-fe0f", 34, 32, 15, ["\u{1F64B}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F64B}\u{1F3FE}"]], "1f3ff": ["1f64b-1f3ff-200d-2640-fe0f", 34, 33, 15, ["\u{1F64B}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F64B}\u{1F3FF}"]] },
      "1f64b-200d-2642-fe0f": { "1f3fb": ["1f64b-1f3fb-200d-2642-fe0f", 34, 35, 15, ["\u{1F64B}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f64b-1f3fc-200d-2642-fe0f", 34, 36, 15, ["\u{1F64B}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f64b-1f3fd-200d-2642-fe0f", 34, 37, 15, ["\u{1F64B}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f64b-1f3fe-200d-2642-fe0f", 34, 38, 15, ["\u{1F64B}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f64b-1f3ff-200d-2642-fe0f", 34, 39, 15, ["\u{1F64B}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f64c": { "1f3fb": ["1f64c-1f3fb", 34, 47, 15, ["\u{1F64C}\u{1F3FB}"]], "1f3fc": ["1f64c-1f3fc", 34, 48, 15, ["\u{1F64C}\u{1F3FC}"]], "1f3fd": ["1f64c-1f3fd", 34, 49, 15, ["\u{1F64C}\u{1F3FD}"]], "1f3fe": ["1f64c-1f3fe", 34, 50, 15, ["\u{1F64C}\u{1F3FE}"]], "1f3ff": ["1f64c-1f3ff", 34, 51, 15, ["\u{1F64C}\u{1F3FF}"]] },
      "1f64d-200d-2640-fe0f": { "1f3fb": ["1f64d-1f3fb-200d-2640-fe0f", 34, 53, 15, ["\u{1F64D}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F64D}\u{1F3FB}"]], "1f3fc": ["1f64d-1f3fc-200d-2640-fe0f", 34, 54, 15, ["\u{1F64D}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F64D}\u{1F3FC}"]], "1f3fd": ["1f64d-1f3fd-200d-2640-fe0f", 34, 55, 15, ["\u{1F64D}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F64D}\u{1F3FD}"]], "1f3fe": ["1f64d-1f3fe-200d-2640-fe0f", 34, 56, 15, ["\u{1F64D}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F64D}\u{1F3FE}"]], "1f3ff": ["1f64d-1f3ff-200d-2640-fe0f", 34, 57, 15, ["\u{1F64D}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F64D}\u{1F3FF}"]] },
      "1f64d-200d-2642-fe0f": { "1f3fb": ["1f64d-1f3fb-200d-2642-fe0f", 34, 59, 15, ["\u{1F64D}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f64d-1f3fc-200d-2642-fe0f", 34, 60, 15, ["\u{1F64D}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f64d-1f3fd-200d-2642-fe0f", 35, 0, 15, ["\u{1F64D}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f64d-1f3fe-200d-2642-fe0f", 35, 1, 15, ["\u{1F64D}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f64d-1f3ff-200d-2642-fe0f", 35, 2, 15, ["\u{1F64D}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f64e-200d-2640-fe0f": { "1f3fb": ["1f64e-1f3fb-200d-2640-fe0f", 35, 10, 15, ["\u{1F64E}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F64E}\u{1F3FB}"]], "1f3fc": ["1f64e-1f3fc-200d-2640-fe0f", 35, 11, 15, ["\u{1F64E}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F64E}\u{1F3FC}"]], "1f3fd": ["1f64e-1f3fd-200d-2640-fe0f", 35, 12, 15, ["\u{1F64E}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F64E}\u{1F3FD}"]], "1f3fe": ["1f64e-1f3fe-200d-2640-fe0f", 35, 13, 15, ["\u{1F64E}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F64E}\u{1F3FE}"]], "1f3ff": ["1f64e-1f3ff-200d-2640-fe0f", 35, 14, 15, ["\u{1F64E}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F64E}\u{1F3FF}"]] },
      "1f64e-200d-2642-fe0f": { "1f3fb": ["1f64e-1f3fb-200d-2642-fe0f", 35, 16, 15, ["\u{1F64E}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f64e-1f3fc-200d-2642-fe0f", 35, 17, 15, ["\u{1F64E}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f64e-1f3fd-200d-2642-fe0f", 35, 18, 15, ["\u{1F64E}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f64e-1f3fe-200d-2642-fe0f", 35, 19, 15, ["\u{1F64E}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f64e-1f3ff-200d-2642-fe0f", 35, 20, 15, ["\u{1F64E}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f64f": { "1f3fb": ["1f64f-1f3fb", 35, 28, 15, ["\u{1F64F}\u{1F3FB}"]], "1f3fc": ["1f64f-1f3fc", 35, 29, 15, ["\u{1F64F}\u{1F3FC}"]], "1f3fd": ["1f64f-1f3fd", 35, 30, 15, ["\u{1F64F}\u{1F3FD}"]], "1f3fe": ["1f64f-1f3fe", 35, 31, 15, ["\u{1F64F}\u{1F3FE}"]], "1f3ff": ["1f64f-1f3ff", 35, 32, 15, ["\u{1F64F}\u{1F3FF}"]] },
      "1f6a3-200d-2640-fe0f": { "1f3fb": ["1f6a3-1f3fb-200d-2640-fe0f", 36, 8, 15, ["\u{1F6A3}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f6a3-1f3fc-200d-2640-fe0f", 36, 9, 15, ["\u{1F6A3}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f6a3-1f3fd-200d-2640-fe0f", 36, 10, 15, ["\u{1F6A3}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f6a3-1f3fe-200d-2640-fe0f", 36, 11, 15, ["\u{1F6A3}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f6a3-1f3ff-200d-2640-fe0f", 36, 12, 15, ["\u{1F6A3}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f6a3-200d-2642-fe0f": { "1f3fb": ["1f6a3-1f3fb-200d-2642-fe0f", 36, 14, 15, ["\u{1F6A3}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F6A3}\u{1F3FB}"]], "1f3fc": ["1f6a3-1f3fc-200d-2642-fe0f", 36, 15, 15, ["\u{1F6A3}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F6A3}\u{1F3FC}"]], "1f3fd": ["1f6a3-1f3fd-200d-2642-fe0f", 36, 16, 15, ["\u{1F6A3}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F6A3}\u{1F3FD}"]], "1f3fe": ["1f6a3-1f3fe-200d-2642-fe0f", 36, 17, 15, ["\u{1F6A3}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F6A3}\u{1F3FE}"]], "1f3ff": ["1f6a3-1f3ff-200d-2642-fe0f", 36, 18, 15, ["\u{1F6A3}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F6A3}\u{1F3FF}"]] },
      "1f6b4-200d-2640-fe0f": { "1f3fb": ["1f6b4-1f3fb-200d-2640-fe0f", 36, 42, 15, ["\u{1F6B4}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f6b4-1f3fc-200d-2640-fe0f", 36, 43, 15, ["\u{1F6B4}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f6b4-1f3fd-200d-2640-fe0f", 36, 44, 15, ["\u{1F6B4}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f6b4-1f3fe-200d-2640-fe0f", 36, 45, 15, ["\u{1F6B4}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f6b4-1f3ff-200d-2640-fe0f", 36, 46, 15, ["\u{1F6B4}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f6b4-200d-2642-fe0f": { "1f3fb": ["1f6b4-1f3fb-200d-2642-fe0f", 36, 48, 15, ["\u{1F6B4}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F6B4}\u{1F3FB}"]], "1f3fc": ["1f6b4-1f3fc-200d-2642-fe0f", 36, 49, 15, ["\u{1F6B4}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F6B4}\u{1F3FC}"]], "1f3fd": ["1f6b4-1f3fd-200d-2642-fe0f", 36, 50, 15, ["\u{1F6B4}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F6B4}\u{1F3FD}"]], "1f3fe": ["1f6b4-1f3fe-200d-2642-fe0f", 36, 51, 15, ["\u{1F6B4}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F6B4}\u{1F3FE}"]], "1f3ff": ["1f6b4-1f3ff-200d-2642-fe0f", 36, 52, 15, ["\u{1F6B4}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F6B4}\u{1F3FF}"]] },
      "1f6b5-200d-2640-fe0f": { "1f3fb": ["1f6b5-1f3fb-200d-2640-fe0f", 36, 60, 15, ["\u{1F6B5}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f6b5-1f3fc-200d-2640-fe0f", 37, 0, 15, ["\u{1F6B5}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f6b5-1f3fd-200d-2640-fe0f", 37, 1, 15, ["\u{1F6B5}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f6b5-1f3fe-200d-2640-fe0f", 37, 2, 15, ["\u{1F6B5}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f6b5-1f3ff-200d-2640-fe0f", 37, 3, 15, ["\u{1F6B5}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f6b5-200d-2642-fe0f": { "1f3fb": ["1f6b5-1f3fb-200d-2642-fe0f", 37, 5, 15, ["\u{1F6B5}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F6B5}\u{1F3FB}"]], "1f3fc": ["1f6b5-1f3fc-200d-2642-fe0f", 37, 6, 15, ["\u{1F6B5}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F6B5}\u{1F3FC}"]], "1f3fd": ["1f6b5-1f3fd-200d-2642-fe0f", 37, 7, 15, ["\u{1F6B5}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F6B5}\u{1F3FD}"]], "1f3fe": ["1f6b5-1f3fe-200d-2642-fe0f", 37, 8, 15, ["\u{1F6B5}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F6B5}\u{1F3FE}"]], "1f3ff": ["1f6b5-1f3ff-200d-2642-fe0f", 37, 9, 15, ["\u{1F6B5}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F6B5}\u{1F3FF}"]] },
      "1f6b6-200d-2640-fe0f": { "1f3fb": ["1f6b6-1f3fb-200d-2640-fe0f", 37, 17, 15, ["\u{1F6B6}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f6b6-1f3fc-200d-2640-fe0f", 37, 18, 15, ["\u{1F6B6}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f6b6-1f3fd-200d-2640-fe0f", 37, 19, 15, ["\u{1F6B6}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f6b6-1f3fe-200d-2640-fe0f", 37, 20, 15, ["\u{1F6B6}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f6b6-1f3ff-200d-2640-fe0f", 37, 21, 15, ["\u{1F6B6}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f6b6-200d-2642-fe0f": { "1f3fb": ["1f6b6-1f3fb-200d-2642-fe0f", 37, 23, 15, ["\u{1F6B6}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F6B6}\u{1F3FB}"]], "1f3fc": ["1f6b6-1f3fc-200d-2642-fe0f", 37, 24, 15, ["\u{1F6B6}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F6B6}\u{1F3FC}"]], "1f3fd": ["1f6b6-1f3fd-200d-2642-fe0f", 37, 25, 15, ["\u{1F6B6}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F6B6}\u{1F3FD}"]], "1f3fe": ["1f6b6-1f3fe-200d-2642-fe0f", 37, 26, 15, ["\u{1F6B6}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F6B6}\u{1F3FE}"]], "1f3ff": ["1f6b6-1f3ff-200d-2642-fe0f", 37, 27, 15, ["\u{1F6B6}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F6B6}\u{1F3FF}"]] },
      "1f6c0": { "1f3fb": ["1f6c0-1f3fb", 37, 44, 15, ["\u{1F6C0}\u{1F3FB}"]], "1f3fc": ["1f6c0-1f3fc", 37, 45, 15, ["\u{1F6C0}\u{1F3FC}"]], "1f3fd": ["1f6c0-1f3fd", 37, 46, 15, ["\u{1F6C0}\u{1F3FD}"]], "1f3fe": ["1f6c0-1f3fe", 37, 47, 15, ["\u{1F6C0}\u{1F3FE}"]], "1f3ff": ["1f6c0-1f3ff", 37, 48, 15, ["\u{1F6C0}\u{1F3FF}"]] },
      "1f6cc": { "1f3fb": ["1f6cc-1f3fb", 37, 56, 15, ["\u{1F6CC}\u{1F3FB}"]], "1f3fc": ["1f6cc-1f3fc", 37, 57, 15, ["\u{1F6CC}\u{1F3FC}"]], "1f3fd": ["1f6cc-1f3fd", 37, 58, 15, ["\u{1F6CC}\u{1F3FD}"]], "1f3fe": ["1f6cc-1f3fe", 37, 59, 15, ["\u{1F6CC}\u{1F3FE}"]], "1f3ff": ["1f6cc-1f3ff", 37, 60, 15, ["\u{1F6CC}\u{1F3FF}"]] },
      "1f90c": { "1f3fb": ["1f90c-1f3fb", 38, 47, 15, ["\u{1F90C}\u{1F3FB}"]], "1f3fc": ["1f90c-1f3fc", 38, 48, 15, ["\u{1F90C}\u{1F3FC}"]], "1f3fd": ["1f90c-1f3fd", 38, 49, 15, ["\u{1F90C}\u{1F3FD}"]], "1f3fe": ["1f90c-1f3fe", 38, 50, 15, ["\u{1F90C}\u{1F3FE}"]], "1f3ff": ["1f90c-1f3ff", 38, 51, 15, ["\u{1F90C}\u{1F3FF}"]] },
      "1f90f": { "1f3fb": ["1f90f-1f3fb", 38, 55, 15, ["\u{1F90F}\u{1F3FB}"]], "1f3fc": ["1f90f-1f3fc", 38, 56, 15, ["\u{1F90F}\u{1F3FC}"]], "1f3fd": ["1f90f-1f3fd", 38, 57, 15, ["\u{1F90F}\u{1F3FD}"]], "1f3fe": ["1f90f-1f3fe", 38, 58, 15, ["\u{1F90F}\u{1F3FE}"]], "1f3ff": ["1f90f-1f3ff", 38, 59, 15, ["\u{1F90F}\u{1F3FF}"]] },
      "1f918": { "1f3fb": ["1f918-1f3fb", 39, 8, 15, ["\u{1F918}\u{1F3FB}"]], "1f3fc": ["1f918-1f3fc", 39, 9, 15, ["\u{1F918}\u{1F3FC}"]], "1f3fd": ["1f918-1f3fd", 39, 10, 15, ["\u{1F918}\u{1F3FD}"]], "1f3fe": ["1f918-1f3fe", 39, 11, 15, ["\u{1F918}\u{1F3FE}"]], "1f3ff": ["1f918-1f3ff", 39, 12, 15, ["\u{1F918}\u{1F3FF}"]] },
      "1f919": { "1f3fb": ["1f919-1f3fb", 39, 14, 15, ["\u{1F919}\u{1F3FB}"]], "1f3fc": ["1f919-1f3fc", 39, 15, 15, ["\u{1F919}\u{1F3FC}"]], "1f3fd": ["1f919-1f3fd", 39, 16, 15, ["\u{1F919}\u{1F3FD}"]], "1f3fe": ["1f919-1f3fe", 39, 17, 15, ["\u{1F919}\u{1F3FE}"]], "1f3ff": ["1f919-1f3ff", 39, 18, 15, ["\u{1F919}\u{1F3FF}"]] },
      "1f91a": { "1f3fb": ["1f91a-1f3fb", 39, 20, 15, ["\u{1F91A}\u{1F3FB}"]], "1f3fc": ["1f91a-1f3fc", 39, 21, 15, ["\u{1F91A}\u{1F3FC}"]], "1f3fd": ["1f91a-1f3fd", 39, 22, 15, ["\u{1F91A}\u{1F3FD}"]], "1f3fe": ["1f91a-1f3fe", 39, 23, 15, ["\u{1F91A}\u{1F3FE}"]], "1f3ff": ["1f91a-1f3ff", 39, 24, 15, ["\u{1F91A}\u{1F3FF}"]] },
      "1f91b": { "1f3fb": ["1f91b-1f3fb", 39, 26, 15, ["\u{1F91B}\u{1F3FB}"]], "1f3fc": ["1f91b-1f3fc", 39, 27, 15, ["\u{1F91B}\u{1F3FC}"]], "1f3fd": ["1f91b-1f3fd", 39, 28, 15, ["\u{1F91B}\u{1F3FD}"]], "1f3fe": ["1f91b-1f3fe", 39, 29, 15, ["\u{1F91B}\u{1F3FE}"]], "1f3ff": ["1f91b-1f3ff", 39, 30, 15, ["\u{1F91B}\u{1F3FF}"]] },
      "1f91c": { "1f3fb": ["1f91c-1f3fb", 39, 32, 15, ["\u{1F91C}\u{1F3FB}"]], "1f3fc": ["1f91c-1f3fc", 39, 33, 15, ["\u{1F91C}\u{1F3FC}"]], "1f3fd": ["1f91c-1f3fd", 39, 34, 15, ["\u{1F91C}\u{1F3FD}"]], "1f3fe": ["1f91c-1f3fe", 39, 35, 15, ["\u{1F91C}\u{1F3FE}"]], "1f3ff": ["1f91c-1f3ff", 39, 36, 15, ["\u{1F91C}\u{1F3FF}"]] },
      "1f91d": { "1f3fb": ["1f91d-1f3fb", 39, 38, 15, ["\u{1F91D}\u{1F3FB}"]], "1f3fc": ["1f91d-1f3fc", 39, 39, 15, ["\u{1F91D}\u{1F3FC}"]], "1f3fd": ["1f91d-1f3fd", 39, 40, 15, ["\u{1F91D}\u{1F3FD}"]], "1f3fe": ["1f91d-1f3fe", 39, 41, 15, ["\u{1F91D}\u{1F3FE}"]], "1f3ff": ["1f91d-1f3ff", 39, 42, 15, ["\u{1F91D}\u{1F3FF}"]], "1f3fb-1f3fc": ["1faf1-1f3fb-200d-1faf2-1f3fc", 39, 43, 15, ["\u{1FAF1}\u{1F3FB}\u200D\u{1FAF2}\u{1F3FC}"]], "1f3fb-1f3fd": ["1faf1-1f3fb-200d-1faf2-1f3fd", 39, 44, 15, ["\u{1FAF1}\u{1F3FB}\u200D\u{1FAF2}\u{1F3FD}"]], "1f3fb-1f3fe": ["1faf1-1f3fb-200d-1faf2-1f3fe", 39, 45, 15, ["\u{1FAF1}\u{1F3FB}\u200D\u{1FAF2}\u{1F3FE}"]], "1f3fb-1f3ff": ["1faf1-1f3fb-200d-1faf2-1f3ff", 39, 46, 15, ["\u{1FAF1}\u{1F3FB}\u200D\u{1FAF2}\u{1F3FF}"]], "1f3fc-1f3fb": ["1faf1-1f3fc-200d-1faf2-1f3fb", 39, 47, 15, ["\u{1FAF1}\u{1F3FC}\u200D\u{1FAF2}\u{1F3FB}"]], "1f3fc-1f3fd": ["1faf1-1f3fc-200d-1faf2-1f3fd", 39, 48, 15, ["\u{1FAF1}\u{1F3FC}\u200D\u{1FAF2}\u{1F3FD}"]], "1f3fc-1f3fe": ["1faf1-1f3fc-200d-1faf2-1f3fe", 39, 49, 15, ["\u{1FAF1}\u{1F3FC}\u200D\u{1FAF2}\u{1F3FE}"]], "1f3fc-1f3ff": ["1faf1-1f3fc-200d-1faf2-1f3ff", 39, 50, 15, ["\u{1FAF1}\u{1F3FC}\u200D\u{1FAF2}\u{1F3FF}"]], "1f3fd-1f3fb": ["1faf1-1f3fd-200d-1faf2-1f3fb", 39, 51, 15, ["\u{1FAF1}\u{1F3FD}\u200D\u{1FAF2}\u{1F3FB}"]], "1f3fd-1f3fc": ["1faf1-1f3fd-200d-1faf2-1f3fc", 39, 52, 15, ["\u{1FAF1}\u{1F3FD}\u200D\u{1FAF2}\u{1F3FC}"]], "1f3fd-1f3fe": ["1faf1-1f3fd-200d-1faf2-1f3fe", 39, 53, 15, ["\u{1FAF1}\u{1F3FD}\u200D\u{1FAF2}\u{1F3FE}"]], "1f3fd-1f3ff": ["1faf1-1f3fd-200d-1faf2-1f3ff", 39, 54, 15, ["\u{1FAF1}\u{1F3FD}\u200D\u{1FAF2}\u{1F3FF}"]], "1f3fe-1f3fb": ["1faf1-1f3fe-200d-1faf2-1f3fb", 39, 55, 15, ["\u{1FAF1}\u{1F3FE}\u200D\u{1FAF2}\u{1F3FB}"]], "1f3fe-1f3fc": ["1faf1-1f3fe-200d-1faf2-1f3fc", 39, 56, 15, ["\u{1FAF1}\u{1F3FE}\u200D\u{1FAF2}\u{1F3FC}"]], "1f3fe-1f3fd": ["1faf1-1f3fe-200d-1faf2-1f3fd", 39, 57, 15, ["\u{1FAF1}\u{1F3FE}\u200D\u{1FAF2}\u{1F3FD}"]], "1f3fe-1f3ff": ["1faf1-1f3fe-200d-1faf2-1f3ff", 39, 58, 15, ["\u{1FAF1}\u{1F3FE}\u200D\u{1FAF2}\u{1F3FF}"]], "1f3ff-1f3fb": ["1faf1-1f3ff-200d-1faf2-1f3fb", 39, 59, 15, ["\u{1FAF1}\u{1F3FF}\u200D\u{1FAF2}\u{1F3FB}"]], "1f3ff-1f3fc": ["1faf1-1f3ff-200d-1faf2-1f3fc", 39, 60, 15, ["\u{1FAF1}\u{1F3FF}\u200D\u{1FAF2}\u{1F3FC}"]], "1f3ff-1f3fd": ["1faf1-1f3ff-200d-1faf2-1f3fd", 40, 0, 15, ["\u{1FAF1}\u{1F3FF}\u200D\u{1FAF2}\u{1F3FD}"]], "1f3ff-1f3fe": ["1faf1-1f3ff-200d-1faf2-1f3fe", 40, 1, 15, ["\u{1FAF1}\u{1F3FF}\u200D\u{1FAF2}\u{1F3FE}"]] },
      "1f91e": { "1f3fb": ["1f91e-1f3fb", 40, 3, 15, ["\u{1F91E}\u{1F3FB}"]], "1f3fc": ["1f91e-1f3fc", 40, 4, 15, ["\u{1F91E}\u{1F3FC}"]], "1f3fd": ["1f91e-1f3fd", 40, 5, 15, ["\u{1F91E}\u{1F3FD}"]], "1f3fe": ["1f91e-1f3fe", 40, 6, 15, ["\u{1F91E}\u{1F3FE}"]], "1f3ff": ["1f91e-1f3ff", 40, 7, 15, ["\u{1F91E}\u{1F3FF}"]] },
      "1f91f": { "1f3fb": ["1f91f-1f3fb", 40, 9, 15, ["\u{1F91F}\u{1F3FB}"]], "1f3fc": ["1f91f-1f3fc", 40, 10, 15, ["\u{1F91F}\u{1F3FC}"]], "1f3fd": ["1f91f-1f3fd", 40, 11, 15, ["\u{1F91F}\u{1F3FD}"]], "1f3fe": ["1f91f-1f3fe", 40, 12, 15, ["\u{1F91F}\u{1F3FE}"]], "1f3ff": ["1f91f-1f3ff", 40, 13, 15, ["\u{1F91F}\u{1F3FF}"]] },
      "1f926-200d-2640-fe0f": { "1f3fb": ["1f926-1f3fb-200d-2640-fe0f", 40, 21, 15, ["\u{1F926}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f926-1f3fc-200d-2640-fe0f", 40, 22, 15, ["\u{1F926}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f926-1f3fd-200d-2640-fe0f", 40, 23, 15, ["\u{1F926}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f926-1f3fe-200d-2640-fe0f", 40, 24, 15, ["\u{1F926}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f926-1f3ff-200d-2640-fe0f", 40, 25, 15, ["\u{1F926}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f926-200d-2642-fe0f": { "1f3fb": ["1f926-1f3fb-200d-2642-fe0f", 40, 27, 15, ["\u{1F926}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f926-1f3fc-200d-2642-fe0f", 40, 28, 15, ["\u{1F926}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f926-1f3fd-200d-2642-fe0f", 40, 29, 15, ["\u{1F926}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f926-1f3fe-200d-2642-fe0f", 40, 30, 15, ["\u{1F926}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f926-1f3ff-200d-2642-fe0f", 40, 31, 15, ["\u{1F926}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f926": { "1f3fb": ["1f926-1f3fb", 40, 33, 15, ["\u{1F926}\u{1F3FB}"]], "1f3fc": ["1f926-1f3fc", 40, 34, 15, ["\u{1F926}\u{1F3FC}"]], "1f3fd": ["1f926-1f3fd", 40, 35, 15, ["\u{1F926}\u{1F3FD}"]], "1f3fe": ["1f926-1f3fe", 40, 36, 15, ["\u{1F926}\u{1F3FE}"]], "1f3ff": ["1f926-1f3ff", 40, 37, 15, ["\u{1F926}\u{1F3FF}"]] },
      "1f930": { "1f3fb": ["1f930-1f3fb", 40, 48, 15, ["\u{1F930}\u{1F3FB}"]], "1f3fc": ["1f930-1f3fc", 40, 49, 15, ["\u{1F930}\u{1F3FC}"]], "1f3fd": ["1f930-1f3fd", 40, 50, 15, ["\u{1F930}\u{1F3FD}"]], "1f3fe": ["1f930-1f3fe", 40, 51, 15, ["\u{1F930}\u{1F3FE}"]], "1f3ff": ["1f930-1f3ff", 40, 52, 15, ["\u{1F930}\u{1F3FF}"]] },
      "1f931": { "1f3fb": ["1f931-1f3fb", 40, 54, 15, ["\u{1F931}\u{1F3FB}"]], "1f3fc": ["1f931-1f3fc", 40, 55, 15, ["\u{1F931}\u{1F3FC}"]], "1f3fd": ["1f931-1f3fd", 40, 56, 15, ["\u{1F931}\u{1F3FD}"]], "1f3fe": ["1f931-1f3fe", 40, 57, 15, ["\u{1F931}\u{1F3FE}"]], "1f3ff": ["1f931-1f3ff", 40, 58, 15, ["\u{1F931}\u{1F3FF}"]] },
      "1f932": { "1f3fb": ["1f932-1f3fb", 40, 60, 15, ["\u{1F932}\u{1F3FB}"]], "1f3fc": ["1f932-1f3fc", 41, 0, 15, ["\u{1F932}\u{1F3FC}"]], "1f3fd": ["1f932-1f3fd", 41, 1, 15, ["\u{1F932}\u{1F3FD}"]], "1f3fe": ["1f932-1f3fe", 41, 2, 15, ["\u{1F932}\u{1F3FE}"]], "1f3ff": ["1f932-1f3ff", 41, 3, 15, ["\u{1F932}\u{1F3FF}"]] },
      "1f933": { "1f3fb": ["1f933-1f3fb", 41, 5, 15, ["\u{1F933}\u{1F3FB}"]], "1f3fc": ["1f933-1f3fc", 41, 6, 15, ["\u{1F933}\u{1F3FC}"]], "1f3fd": ["1f933-1f3fd", 41, 7, 15, ["\u{1F933}\u{1F3FD}"]], "1f3fe": ["1f933-1f3fe", 41, 8, 15, ["\u{1F933}\u{1F3FE}"]], "1f3ff": ["1f933-1f3ff", 41, 9, 15, ["\u{1F933}\u{1F3FF}"]] },
      "1f934": { "1f3fb": ["1f934-1f3fb", 41, 11, 15, ["\u{1F934}\u{1F3FB}"]], "1f3fc": ["1f934-1f3fc", 41, 12, 15, ["\u{1F934}\u{1F3FC}"]], "1f3fd": ["1f934-1f3fd", 41, 13, 15, ["\u{1F934}\u{1F3FD}"]], "1f3fe": ["1f934-1f3fe", 41, 14, 15, ["\u{1F934}\u{1F3FE}"]], "1f3ff": ["1f934-1f3ff", 41, 15, 15, ["\u{1F934}\u{1F3FF}"]] },
      "1f935-200d-2640-fe0f": { "1f3fb": ["1f935-1f3fb-200d-2640-fe0f", 41, 17, 15, ["\u{1F935}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f935-1f3fc-200d-2640-fe0f", 41, 18, 15, ["\u{1F935}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f935-1f3fd-200d-2640-fe0f", 41, 19, 15, ["\u{1F935}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f935-1f3fe-200d-2640-fe0f", 41, 20, 15, ["\u{1F935}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f935-1f3ff-200d-2640-fe0f", 41, 21, 15, ["\u{1F935}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f935-200d-2642-fe0f": { "1f3fb": ["1f935-1f3fb-200d-2642-fe0f", 41, 23, 15, ["\u{1F935}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f935-1f3fc-200d-2642-fe0f", 41, 24, 15, ["\u{1F935}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f935-1f3fd-200d-2642-fe0f", 41, 25, 15, ["\u{1F935}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f935-1f3fe-200d-2642-fe0f", 41, 26, 15, ["\u{1F935}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f935-1f3ff-200d-2642-fe0f", 41, 27, 15, ["\u{1F935}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f935": { "1f3fb": ["1f935-1f3fb", 41, 29, 15, ["\u{1F935}\u{1F3FB}"]], "1f3fc": ["1f935-1f3fc", 41, 30, 15, ["\u{1F935}\u{1F3FC}"]], "1f3fd": ["1f935-1f3fd", 41, 31, 15, ["\u{1F935}\u{1F3FD}"]], "1f3fe": ["1f935-1f3fe", 41, 32, 15, ["\u{1F935}\u{1F3FE}"]], "1f3ff": ["1f935-1f3ff", 41, 33, 15, ["\u{1F935}\u{1F3FF}"]] },
      "1f936": { "1f3fb": ["1f936-1f3fb", 41, 35, 15, ["\u{1F936}\u{1F3FB}"]], "1f3fc": ["1f936-1f3fc", 41, 36, 15, ["\u{1F936}\u{1F3FC}"]], "1f3fd": ["1f936-1f3fd", 41, 37, 15, ["\u{1F936}\u{1F3FD}"]], "1f3fe": ["1f936-1f3fe", 41, 38, 15, ["\u{1F936}\u{1F3FE}"]], "1f3ff": ["1f936-1f3ff", 41, 39, 15, ["\u{1F936}\u{1F3FF}"]] },
      "1f937-200d-2640-fe0f": { "1f3fb": ["1f937-1f3fb-200d-2640-fe0f", 41, 41, 15, ["\u{1F937}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f937-1f3fc-200d-2640-fe0f", 41, 42, 15, ["\u{1F937}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f937-1f3fd-200d-2640-fe0f", 41, 43, 15, ["\u{1F937}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f937-1f3fe-200d-2640-fe0f", 41, 44, 15, ["\u{1F937}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f937-1f3ff-200d-2640-fe0f", 41, 45, 15, ["\u{1F937}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f937-200d-2642-fe0f": { "1f3fb": ["1f937-1f3fb-200d-2642-fe0f", 41, 47, 15, ["\u{1F937}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f937-1f3fc-200d-2642-fe0f", 41, 48, 15, ["\u{1F937}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f937-1f3fd-200d-2642-fe0f", 41, 49, 15, ["\u{1F937}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f937-1f3fe-200d-2642-fe0f", 41, 50, 15, ["\u{1F937}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f937-1f3ff-200d-2642-fe0f", 41, 51, 15, ["\u{1F937}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f937": { "1f3fb": ["1f937-1f3fb", 41, 53, 15, ["\u{1F937}\u{1F3FB}"]], "1f3fc": ["1f937-1f3fc", 41, 54, 15, ["\u{1F937}\u{1F3FC}"]], "1f3fd": ["1f937-1f3fd", 41, 55, 15, ["\u{1F937}\u{1F3FD}"]], "1f3fe": ["1f937-1f3fe", 41, 56, 15, ["\u{1F937}\u{1F3FE}"]], "1f3ff": ["1f937-1f3ff", 41, 57, 15, ["\u{1F937}\u{1F3FF}"]] },
      "1f938-200d-2640-fe0f": { "1f3fb": ["1f938-1f3fb-200d-2640-fe0f", 41, 59, 15, ["\u{1F938}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f938-1f3fc-200d-2640-fe0f", 41, 60, 15, ["\u{1F938}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f938-1f3fd-200d-2640-fe0f", 42, 0, 15, ["\u{1F938}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f938-1f3fe-200d-2640-fe0f", 42, 1, 15, ["\u{1F938}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f938-1f3ff-200d-2640-fe0f", 42, 2, 15, ["\u{1F938}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f938-200d-2642-fe0f": { "1f3fb": ["1f938-1f3fb-200d-2642-fe0f", 42, 4, 15, ["\u{1F938}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f938-1f3fc-200d-2642-fe0f", 42, 5, 15, ["\u{1F938}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f938-1f3fd-200d-2642-fe0f", 42, 6, 15, ["\u{1F938}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f938-1f3fe-200d-2642-fe0f", 42, 7, 15, ["\u{1F938}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f938-1f3ff-200d-2642-fe0f", 42, 8, 15, ["\u{1F938}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f938": { "1f3fb": ["1f938-1f3fb", 42, 10, 15, ["\u{1F938}\u{1F3FB}"]], "1f3fc": ["1f938-1f3fc", 42, 11, 15, ["\u{1F938}\u{1F3FC}"]], "1f3fd": ["1f938-1f3fd", 42, 12, 15, ["\u{1F938}\u{1F3FD}"]], "1f3fe": ["1f938-1f3fe", 42, 13, 15, ["\u{1F938}\u{1F3FE}"]], "1f3ff": ["1f938-1f3ff", 42, 14, 15, ["\u{1F938}\u{1F3FF}"]] },
      "1f939-200d-2640-fe0f": { "1f3fb": ["1f939-1f3fb-200d-2640-fe0f", 42, 16, 15, ["\u{1F939}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f939-1f3fc-200d-2640-fe0f", 42, 17, 15, ["\u{1F939}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f939-1f3fd-200d-2640-fe0f", 42, 18, 15, ["\u{1F939}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f939-1f3fe-200d-2640-fe0f", 42, 19, 15, ["\u{1F939}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f939-1f3ff-200d-2640-fe0f", 42, 20, 15, ["\u{1F939}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f939-200d-2642-fe0f": { "1f3fb": ["1f939-1f3fb-200d-2642-fe0f", 42, 22, 15, ["\u{1F939}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f939-1f3fc-200d-2642-fe0f", 42, 23, 15, ["\u{1F939}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f939-1f3fd-200d-2642-fe0f", 42, 24, 15, ["\u{1F939}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f939-1f3fe-200d-2642-fe0f", 42, 25, 15, ["\u{1F939}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f939-1f3ff-200d-2642-fe0f", 42, 26, 15, ["\u{1F939}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f939": { "1f3fb": ["1f939-1f3fb", 42, 28, 15, ["\u{1F939}\u{1F3FB}"]], "1f3fc": ["1f939-1f3fc", 42, 29, 15, ["\u{1F939}\u{1F3FC}"]], "1f3fd": ["1f939-1f3fd", 42, 30, 15, ["\u{1F939}\u{1F3FD}"]], "1f3fe": ["1f939-1f3fe", 42, 31, 15, ["\u{1F939}\u{1F3FE}"]], "1f3ff": ["1f939-1f3ff", 42, 32, 15, ["\u{1F939}\u{1F3FF}"]] },
      "1f93d-200d-2640-fe0f": { "1f3fb": ["1f93d-1f3fb-200d-2640-fe0f", 42, 38, 15, ["\u{1F93D}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f93d-1f3fc-200d-2640-fe0f", 42, 39, 15, ["\u{1F93D}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f93d-1f3fd-200d-2640-fe0f", 42, 40, 15, ["\u{1F93D}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f93d-1f3fe-200d-2640-fe0f", 42, 41, 15, ["\u{1F93D}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f93d-1f3ff-200d-2640-fe0f", 42, 42, 15, ["\u{1F93D}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f93d-200d-2642-fe0f": { "1f3fb": ["1f93d-1f3fb-200d-2642-fe0f", 42, 44, 15, ["\u{1F93D}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f93d-1f3fc-200d-2642-fe0f", 42, 45, 15, ["\u{1F93D}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f93d-1f3fd-200d-2642-fe0f", 42, 46, 15, ["\u{1F93D}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f93d-1f3fe-200d-2642-fe0f", 42, 47, 15, ["\u{1F93D}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f93d-1f3ff-200d-2642-fe0f", 42, 48, 15, ["\u{1F93D}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f93d": { "1f3fb": ["1f93d-1f3fb", 42, 50, 15, ["\u{1F93D}\u{1F3FB}"]], "1f3fc": ["1f93d-1f3fc", 42, 51, 15, ["\u{1F93D}\u{1F3FC}"]], "1f3fd": ["1f93d-1f3fd", 42, 52, 15, ["\u{1F93D}\u{1F3FD}"]], "1f3fe": ["1f93d-1f3fe", 42, 53, 15, ["\u{1F93D}\u{1F3FE}"]], "1f3ff": ["1f93d-1f3ff", 42, 54, 15, ["\u{1F93D}\u{1F3FF}"]] },
      "1f93e-200d-2640-fe0f": { "1f3fb": ["1f93e-1f3fb-200d-2640-fe0f", 42, 56, 15, ["\u{1F93E}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f93e-1f3fc-200d-2640-fe0f", 42, 57, 15, ["\u{1F93E}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f93e-1f3fd-200d-2640-fe0f", 42, 58, 15, ["\u{1F93E}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f93e-1f3fe-200d-2640-fe0f", 42, 59, 15, ["\u{1F93E}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f93e-1f3ff-200d-2640-fe0f", 42, 60, 15, ["\u{1F93E}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f93e-200d-2642-fe0f": { "1f3fb": ["1f93e-1f3fb-200d-2642-fe0f", 43, 1, 15, ["\u{1F93E}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f93e-1f3fc-200d-2642-fe0f", 43, 2, 15, ["\u{1F93E}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f93e-1f3fd-200d-2642-fe0f", 43, 3, 15, ["\u{1F93E}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f93e-1f3fe-200d-2642-fe0f", 43, 4, 15, ["\u{1F93E}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f93e-1f3ff-200d-2642-fe0f", 43, 5, 15, ["\u{1F93E}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f93e": { "1f3fb": ["1f93e-1f3fb", 43, 7, 15, ["\u{1F93E}\u{1F3FB}"]], "1f3fc": ["1f93e-1f3fc", 43, 8, 15, ["\u{1F93E}\u{1F3FC}"]], "1f3fd": ["1f93e-1f3fd", 43, 9, 15, ["\u{1F93E}\u{1F3FD}"]], "1f3fe": ["1f93e-1f3fe", 43, 10, 15, ["\u{1F93E}\u{1F3FE}"]], "1f3ff": ["1f93e-1f3ff", 43, 11, 15, ["\u{1F93E}\u{1F3FF}"]] },
      "1f977": { "1f3fb": ["1f977-1f3fb", 44, 7, 15, ["\u{1F977}\u{1F3FB}"]], "1f3fc": ["1f977-1f3fc", 44, 8, 15, ["\u{1F977}\u{1F3FC}"]], "1f3fd": ["1f977-1f3fd", 44, 9, 15, ["\u{1F977}\u{1F3FD}"]], "1f3fe": ["1f977-1f3fe", 44, 10, 15, ["\u{1F977}\u{1F3FE}"]], "1f3ff": ["1f977-1f3ff", 44, 11, 15, ["\u{1F977}\u{1F3FF}"]] },
      "1f9b5": { "1f3fb": ["1f9b5-1f3fb", 45, 9, 15, ["\u{1F9B5}\u{1F3FB}"]], "1f3fc": ["1f9b5-1f3fc", 45, 10, 15, ["\u{1F9B5}\u{1F3FC}"]], "1f3fd": ["1f9b5-1f3fd", 45, 11, 15, ["\u{1F9B5}\u{1F3FD}"]], "1f3fe": ["1f9b5-1f3fe", 45, 12, 15, ["\u{1F9B5}\u{1F3FE}"]], "1f3ff": ["1f9b5-1f3ff", 45, 13, 15, ["\u{1F9B5}\u{1F3FF}"]] },
      "1f9b6": { "1f3fb": ["1f9b6-1f3fb", 45, 15, 15, ["\u{1F9B6}\u{1F3FB}"]], "1f3fc": ["1f9b6-1f3fc", 45, 16, 15, ["\u{1F9B6}\u{1F3FC}"]], "1f3fd": ["1f9b6-1f3fd", 45, 17, 15, ["\u{1F9B6}\u{1F3FD}"]], "1f3fe": ["1f9b6-1f3fe", 45, 18, 15, ["\u{1F9B6}\u{1F3FE}"]], "1f3ff": ["1f9b6-1f3ff", 45, 19, 15, ["\u{1F9B6}\u{1F3FF}"]] },
      "1f9b8-200d-2640-fe0f": { "1f3fb": ["1f9b8-1f3fb-200d-2640-fe0f", 45, 22, 15, ["\u{1F9B8}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f9b8-1f3fc-200d-2640-fe0f", 45, 23, 15, ["\u{1F9B8}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f9b8-1f3fd-200d-2640-fe0f", 45, 24, 15, ["\u{1F9B8}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f9b8-1f3fe-200d-2640-fe0f", 45, 25, 15, ["\u{1F9B8}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f9b8-1f3ff-200d-2640-fe0f", 45, 26, 15, ["\u{1F9B8}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f9b8-200d-2642-fe0f": { "1f3fb": ["1f9b8-1f3fb-200d-2642-fe0f", 45, 28, 15, ["\u{1F9B8}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f9b8-1f3fc-200d-2642-fe0f", 45, 29, 15, ["\u{1F9B8}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f9b8-1f3fd-200d-2642-fe0f", 45, 30, 15, ["\u{1F9B8}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f9b8-1f3fe-200d-2642-fe0f", 45, 31, 15, ["\u{1F9B8}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f9b8-1f3ff-200d-2642-fe0f", 45, 32, 15, ["\u{1F9B8}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f9b8": { "1f3fb": ["1f9b8-1f3fb", 45, 34, 15, ["\u{1F9B8}\u{1F3FB}"]], "1f3fc": ["1f9b8-1f3fc", 45, 35, 15, ["\u{1F9B8}\u{1F3FC}"]], "1f3fd": ["1f9b8-1f3fd", 45, 36, 15, ["\u{1F9B8}\u{1F3FD}"]], "1f3fe": ["1f9b8-1f3fe", 45, 37, 15, ["\u{1F9B8}\u{1F3FE}"]], "1f3ff": ["1f9b8-1f3ff", 45, 38, 15, ["\u{1F9B8}\u{1F3FF}"]] },
      "1f9b9-200d-2640-fe0f": { "1f3fb": ["1f9b9-1f3fb-200d-2640-fe0f", 45, 40, 15, ["\u{1F9B9}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f9b9-1f3fc-200d-2640-fe0f", 45, 41, 15, ["\u{1F9B9}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f9b9-1f3fd-200d-2640-fe0f", 45, 42, 15, ["\u{1F9B9}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f9b9-1f3fe-200d-2640-fe0f", 45, 43, 15, ["\u{1F9B9}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f9b9-1f3ff-200d-2640-fe0f", 45, 44, 15, ["\u{1F9B9}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f9b9-200d-2642-fe0f": { "1f3fb": ["1f9b9-1f3fb-200d-2642-fe0f", 45, 46, 15, ["\u{1F9B9}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f9b9-1f3fc-200d-2642-fe0f", 45, 47, 15, ["\u{1F9B9}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f9b9-1f3fd-200d-2642-fe0f", 45, 48, 15, ["\u{1F9B9}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f9b9-1f3fe-200d-2642-fe0f", 45, 49, 15, ["\u{1F9B9}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f9b9-1f3ff-200d-2642-fe0f", 45, 50, 15, ["\u{1F9B9}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f9b9": { "1f3fb": ["1f9b9-1f3fb", 45, 52, 15, ["\u{1F9B9}\u{1F3FB}"]], "1f3fc": ["1f9b9-1f3fc", 45, 53, 15, ["\u{1F9B9}\u{1F3FC}"]], "1f3fd": ["1f9b9-1f3fd", 45, 54, 15, ["\u{1F9B9}\u{1F3FD}"]], "1f3fe": ["1f9b9-1f3fe", 45, 55, 15, ["\u{1F9B9}\u{1F3FE}"]], "1f3ff": ["1f9b9-1f3ff", 45, 56, 15, ["\u{1F9B9}\u{1F3FF}"]] },
      "1f9bb": { "1f3fb": ["1f9bb-1f3fb", 45, 59, 15, ["\u{1F9BB}\u{1F3FB}"]], "1f3fc": ["1f9bb-1f3fc", 45, 60, 15, ["\u{1F9BB}\u{1F3FC}"]], "1f3fd": ["1f9bb-1f3fd", 46, 0, 15, ["\u{1F9BB}\u{1F3FD}"]], "1f3fe": ["1f9bb-1f3fe", 46, 1, 15, ["\u{1F9BB}\u{1F3FE}"]], "1f3ff": ["1f9bb-1f3ff", 46, 2, 15, ["\u{1F9BB}\u{1F3FF}"]] },
      "1f9cd-200d-2640-fe0f": { "1f3fb": ["1f9cd-1f3fb-200d-2640-fe0f", 46, 21, 15, ["\u{1F9CD}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f9cd-1f3fc-200d-2640-fe0f", 46, 22, 15, ["\u{1F9CD}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f9cd-1f3fd-200d-2640-fe0f", 46, 23, 15, ["\u{1F9CD}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f9cd-1f3fe-200d-2640-fe0f", 46, 24, 15, ["\u{1F9CD}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f9cd-1f3ff-200d-2640-fe0f", 46, 25, 15, ["\u{1F9CD}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f9cd-200d-2642-fe0f": { "1f3fb": ["1f9cd-1f3fb-200d-2642-fe0f", 46, 27, 15, ["\u{1F9CD}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f9cd-1f3fc-200d-2642-fe0f", 46, 28, 15, ["\u{1F9CD}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f9cd-1f3fd-200d-2642-fe0f", 46, 29, 15, ["\u{1F9CD}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f9cd-1f3fe-200d-2642-fe0f", 46, 30, 15, ["\u{1F9CD}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f9cd-1f3ff-200d-2642-fe0f", 46, 31, 15, ["\u{1F9CD}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f9cd": { "1f3fb": ["1f9cd-1f3fb", 46, 33, 15, ["\u{1F9CD}\u{1F3FB}"]], "1f3fc": ["1f9cd-1f3fc", 46, 34, 15, ["\u{1F9CD}\u{1F3FC}"]], "1f3fd": ["1f9cd-1f3fd", 46, 35, 15, ["\u{1F9CD}\u{1F3FD}"]], "1f3fe": ["1f9cd-1f3fe", 46, 36, 15, ["\u{1F9CD}\u{1F3FE}"]], "1f3ff": ["1f9cd-1f3ff", 46, 37, 15, ["\u{1F9CD}\u{1F3FF}"]] },
      "1f9ce-200d-2640-fe0f": { "1f3fb": ["1f9ce-1f3fb-200d-2640-fe0f", 46, 39, 15, ["\u{1F9CE}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f9ce-1f3fc-200d-2640-fe0f", 46, 40, 15, ["\u{1F9CE}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f9ce-1f3fd-200d-2640-fe0f", 46, 41, 15, ["\u{1F9CE}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f9ce-1f3fe-200d-2640-fe0f", 46, 42, 15, ["\u{1F9CE}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f9ce-1f3ff-200d-2640-fe0f", 46, 43, 15, ["\u{1F9CE}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f9ce-200d-2642-fe0f": { "1f3fb": ["1f9ce-1f3fb-200d-2642-fe0f", 46, 45, 15, ["\u{1F9CE}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f9ce-1f3fc-200d-2642-fe0f", 46, 46, 15, ["\u{1F9CE}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f9ce-1f3fd-200d-2642-fe0f", 46, 47, 15, ["\u{1F9CE}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f9ce-1f3fe-200d-2642-fe0f", 46, 48, 15, ["\u{1F9CE}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f9ce-1f3ff-200d-2642-fe0f", 46, 49, 15, ["\u{1F9CE}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f9ce": { "1f3fb": ["1f9ce-1f3fb", 46, 51, 15, ["\u{1F9CE}\u{1F3FB}"]], "1f3fc": ["1f9ce-1f3fc", 46, 52, 15, ["\u{1F9CE}\u{1F3FC}"]], "1f3fd": ["1f9ce-1f3fd", 46, 53, 15, ["\u{1F9CE}\u{1F3FD}"]], "1f3fe": ["1f9ce-1f3fe", 46, 54, 15, ["\u{1F9CE}\u{1F3FE}"]], "1f3ff": ["1f9ce-1f3ff", 46, 55, 15, ["\u{1F9CE}\u{1F3FF}"]] },
      "1f9cf-200d-2640-fe0f": { "1f3fb": ["1f9cf-1f3fb-200d-2640-fe0f", 46, 57, 15, ["\u{1F9CF}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f9cf-1f3fc-200d-2640-fe0f", 46, 58, 15, ["\u{1F9CF}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f9cf-1f3fd-200d-2640-fe0f", 46, 59, 15, ["\u{1F9CF}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f9cf-1f3fe-200d-2640-fe0f", 46, 60, 15, ["\u{1F9CF}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f9cf-1f3ff-200d-2640-fe0f", 47, 0, 15, ["\u{1F9CF}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f9cf-200d-2642-fe0f": { "1f3fb": ["1f9cf-1f3fb-200d-2642-fe0f", 47, 2, 15, ["\u{1F9CF}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f9cf-1f3fc-200d-2642-fe0f", 47, 3, 15, ["\u{1F9CF}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f9cf-1f3fd-200d-2642-fe0f", 47, 4, 15, ["\u{1F9CF}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f9cf-1f3fe-200d-2642-fe0f", 47, 5, 15, ["\u{1F9CF}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f9cf-1f3ff-200d-2642-fe0f", 47, 6, 15, ["\u{1F9CF}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f9cf": { "1f3fb": ["1f9cf-1f3fb", 47, 8, 15, ["\u{1F9CF}\u{1F3FB}"]], "1f3fc": ["1f9cf-1f3fc", 47, 9, 15, ["\u{1F9CF}\u{1F3FC}"]], "1f3fd": ["1f9cf-1f3fd", 47, 10, 15, ["\u{1F9CF}\u{1F3FD}"]], "1f3fe": ["1f9cf-1f3fe", 47, 11, 15, ["\u{1F9CF}\u{1F3FE}"]], "1f3ff": ["1f9cf-1f3ff", 47, 12, 15, ["\u{1F9CF}\u{1F3FF}"]] },
      "1f9d1-200d-1f33e": { "1f3fb": ["1f9d1-1f3fb-200d-1f33e", 47, 15, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F33E}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f33e", 47, 16, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F33E}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f33e", 47, 17, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F33E}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f33e", 47, 18, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F33E}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f33e", 47, 19, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F33E}"]] },
      "1f9d1-200d-1f373": { "1f3fb": ["1f9d1-1f3fb-200d-1f373", 47, 21, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F373}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f373", 47, 22, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F373}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f373", 47, 23, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F373}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f373", 47, 24, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F373}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f373", 47, 25, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F373}"]] },
      "1f9d1-200d-1f37c": { "1f3fb": ["1f9d1-1f3fb-200d-1f37c", 47, 27, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F37C}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f37c", 47, 28, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F37C}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f37c", 47, 29, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F37C}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f37c", 47, 30, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F37C}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f37c", 47, 31, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F37C}"]] },
      "1f9d1-200d-1f384": { "1f3fb": ["1f9d1-1f3fb-200d-1f384", 47, 33, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F384}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f384", 47, 34, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F384}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f384", 47, 35, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F384}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f384", 47, 36, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F384}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f384", 47, 37, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F384}"]] },
      "1f9d1-200d-1f393": { "1f3fb": ["1f9d1-1f3fb-200d-1f393", 47, 39, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F393}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f393", 47, 40, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F393}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f393", 47, 41, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F393}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f393", 47, 42, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F393}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f393", 47, 43, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F393}"]] },
      "1f9d1-200d-1f3a4": { "1f3fb": ["1f9d1-1f3fb-200d-1f3a4", 47, 45, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F3A4}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f3a4", 47, 46, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F3A4}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f3a4", 47, 47, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F3A4}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f3a4", 47, 48, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F3A4}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f3a4", 47, 49, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F3A4}"]] },
      "1f9d1-200d-1f3a8": { "1f3fb": ["1f9d1-1f3fb-200d-1f3a8", 47, 51, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F3A8}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f3a8", 47, 52, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F3A8}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f3a8", 47, 53, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F3A8}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f3a8", 47, 54, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F3A8}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f3a8", 47, 55, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F3A8}"]] },
      "1f9d1-200d-1f3eb": { "1f3fb": ["1f9d1-1f3fb-200d-1f3eb", 47, 57, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F3EB}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f3eb", 47, 58, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F3EB}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f3eb", 47, 59, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F3EB}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f3eb", 47, 60, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F3EB}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f3eb", 48, 0, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F3EB}"]] },
      "1f9d1-200d-1f3ed": { "1f3fb": ["1f9d1-1f3fb-200d-1f3ed", 48, 2, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F3ED}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f3ed", 48, 3, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F3ED}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f3ed", 48, 4, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F3ED}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f3ed", 48, 5, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F3ED}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f3ed", 48, 6, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F3ED}"]] },
      "1f9d1-200d-1f4bb": { "1f3fb": ["1f9d1-1f3fb-200d-1f4bb", 48, 8, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F4BB}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f4bb", 48, 9, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F4BB}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f4bb", 48, 10, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F4BB}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f4bb", 48, 11, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F4BB}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f4bb", 48, 12, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F4BB}"]] },
      "1f9d1-200d-1f4bc": { "1f3fb": ["1f9d1-1f3fb-200d-1f4bc", 48, 14, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F4BC}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f4bc", 48, 15, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F4BC}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f4bc", 48, 16, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F4BC}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f4bc", 48, 17, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F4BC}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f4bc", 48, 18, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F4BC}"]] },
      "1f9d1-200d-1f527": { "1f3fb": ["1f9d1-1f3fb-200d-1f527", 48, 20, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F527}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f527", 48, 21, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F527}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f527", 48, 22, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F527}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f527", 48, 23, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F527}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f527", 48, 24, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F527}"]] },
      "1f9d1-200d-1f52c": { "1f3fb": ["1f9d1-1f3fb-200d-1f52c", 48, 26, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F52C}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f52c", 48, 27, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F52C}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f52c", 48, 28, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F52C}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f52c", 48, 29, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F52C}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f52c", 48, 30, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F52C}"]] },
      "1f9d1-200d-1f680": { "1f3fb": ["1f9d1-1f3fb-200d-1f680", 48, 32, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F680}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f680", 48, 33, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F680}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f680", 48, 34, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F680}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f680", 48, 35, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F680}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f680", 48, 36, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F680}"]] },
      "1f9d1-200d-1f692": { "1f3fb": ["1f9d1-1f3fb-200d-1f692", 48, 38, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F692}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f692", 48, 39, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F692}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f692", 48, 40, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F692}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f692", 48, 41, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F692}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f692", 48, 42, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F692}"]] },
      "1f9d1-200d-1f91d-200d-1f9d1": { "1f3fb-1f3fb": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb", 48, 44, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}"]], "1f3fb-1f3fc": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc", 48, 45, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}"]], "1f3fb-1f3fd": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd", 48, 46, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}"]], "1f3fb-1f3fe": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe", 48, 47, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}"]], "1f3fb-1f3ff": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff", 48, 48, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}"]], "1f3fc-1f3fb": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb", 48, 49, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}"]], "1f3fc-1f3fc": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc", 48, 50, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}"]], "1f3fc-1f3fd": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd", 48, 51, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}"]], "1f3fc-1f3fe": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe", 48, 52, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}"]], "1f3fc-1f3ff": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff", 48, 53, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}"]], "1f3fd-1f3fb": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb", 48, 54, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}"]], "1f3fd-1f3fc": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc", 48, 55, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}"]], "1f3fd-1f3fd": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd", 48, 56, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}"]], "1f3fd-1f3fe": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe", 48, 57, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}"]], "1f3fd-1f3ff": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff", 48, 58, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}"]], "1f3fe-1f3fb": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb", 48, 59, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}"]], "1f3fe-1f3fc": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc", 48, 60, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}"]], "1f3fe-1f3fd": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd", 49, 0, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}"]], "1f3fe-1f3fe": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe", 49, 1, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}"]], "1f3fe-1f3ff": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff", 49, 2, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}"]], "1f3ff-1f3fb": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb", 49, 3, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}"]], "1f3ff-1f3fc": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc", 49, 4, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}"]], "1f3ff-1f3fd": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd", 49, 5, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}"]], "1f3ff-1f3fe": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe", 49, 6, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}"]], "1f3ff-1f3ff": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff", 49, 7, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}"]] },
      "1f9d1-200d-1f9af": { "1f3fb": ["1f9d1-1f3fb-200d-1f9af", 49, 9, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F9AF}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9af", 49, 10, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F9AF}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9af", 49, 11, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F9AF}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9af", 49, 12, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F9AF}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9af", 49, 13, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F9AF}"]] },
      "1f9d1-200d-1f9b0": { "1f3fb": ["1f9d1-1f3fb-200d-1f9b0", 49, 15, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F9B0}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9b0", 49, 16, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F9B0}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9b0", 49, 17, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F9B0}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9b0", 49, 18, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F9B0}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9b0", 49, 19, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F9B0}"]] },
      "1f9d1-200d-1f9b1": { "1f3fb": ["1f9d1-1f3fb-200d-1f9b1", 49, 21, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F9B1}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9b1", 49, 22, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F9B1}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9b1", 49, 23, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F9B1}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9b1", 49, 24, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F9B1}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9b1", 49, 25, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F9B1}"]] },
      "1f9d1-200d-1f9b2": { "1f3fb": ["1f9d1-1f3fb-200d-1f9b2", 49, 27, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F9B2}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9b2", 49, 28, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F9B2}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9b2", 49, 29, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F9B2}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9b2", 49, 30, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F9B2}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9b2", 49, 31, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F9B2}"]] },
      "1f9d1-200d-1f9b3": { "1f3fb": ["1f9d1-1f3fb-200d-1f9b3", 49, 33, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F9B3}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9b3", 49, 34, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F9B3}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9b3", 49, 35, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F9B3}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9b3", 49, 36, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F9B3}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9b3", 49, 37, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F9B3}"]] },
      "1f9d1-200d-1f9bc": { "1f3fb": ["1f9d1-1f3fb-200d-1f9bc", 49, 39, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F9BC}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9bc", 49, 40, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F9BC}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9bc", 49, 41, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F9BC}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9bc", 49, 42, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F9BC}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9bc", 49, 43, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F9BC}"]] },
      "1f9d1-200d-1f9bd": { "1f3fb": ["1f9d1-1f3fb-200d-1f9bd", 49, 45, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u{1F9BD}"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9bd", 49, 46, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u{1F9BD}"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9bd", 49, 47, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u{1F9BD}"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9bd", 49, 48, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u{1F9BD}"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9bd", 49, 49, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u{1F9BD}"]] },
      "1f9d1-200d-2695-fe0f": { "1f3fb": ["1f9d1-1f3fb-200d-2695-fe0f", 49, 51, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u2695\uFE0F"]], "1f3fc": ["1f9d1-1f3fc-200d-2695-fe0f", 49, 52, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u2695\uFE0F"]], "1f3fd": ["1f9d1-1f3fd-200d-2695-fe0f", 49, 53, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u2695\uFE0F"]], "1f3fe": ["1f9d1-1f3fe-200d-2695-fe0f", 49, 54, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u2695\uFE0F"]], "1f3ff": ["1f9d1-1f3ff-200d-2695-fe0f", 49, 55, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u2695\uFE0F"]] },
      "1f9d1-200d-2696-fe0f": { "1f3fb": ["1f9d1-1f3fb-200d-2696-fe0f", 49, 57, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u2696\uFE0F"]], "1f3fc": ["1f9d1-1f3fc-200d-2696-fe0f", 49, 58, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u2696\uFE0F"]], "1f3fd": ["1f9d1-1f3fd-200d-2696-fe0f", 49, 59, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u2696\uFE0F"]], "1f3fe": ["1f9d1-1f3fe-200d-2696-fe0f", 49, 60, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u2696\uFE0F"]], "1f3ff": ["1f9d1-1f3ff-200d-2696-fe0f", 50, 0, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u2696\uFE0F"]] },
      "1f9d1-200d-2708-fe0f": { "1f3fb": ["1f9d1-1f3fb-200d-2708-fe0f", 50, 2, 15, ["\u{1F9D1}\u{1F3FB}\u200D\u2708\uFE0F"]], "1f3fc": ["1f9d1-1f3fc-200d-2708-fe0f", 50, 3, 15, ["\u{1F9D1}\u{1F3FC}\u200D\u2708\uFE0F"]], "1f3fd": ["1f9d1-1f3fd-200d-2708-fe0f", 50, 4, 15, ["\u{1F9D1}\u{1F3FD}\u200D\u2708\uFE0F"]], "1f3fe": ["1f9d1-1f3fe-200d-2708-fe0f", 50, 5, 15, ["\u{1F9D1}\u{1F3FE}\u200D\u2708\uFE0F"]], "1f3ff": ["1f9d1-1f3ff-200d-2708-fe0f", 50, 6, 15, ["\u{1F9D1}\u{1F3FF}\u200D\u2708\uFE0F"]] },
      "1f9d1": { "1f3fb": ["1f9d1-1f3fb", 50, 8, 15, ["\u{1F9D1}\u{1F3FB}"]], "1f3fc": ["1f9d1-1f3fc", 50, 9, 15, ["\u{1F9D1}\u{1F3FC}"]], "1f3fd": ["1f9d1-1f3fd", 50, 10, 15, ["\u{1F9D1}\u{1F3FD}"]], "1f3fe": ["1f9d1-1f3fe", 50, 11, 15, ["\u{1F9D1}\u{1F3FE}"]], "1f3ff": ["1f9d1-1f3ff", 50, 12, 15, ["\u{1F9D1}\u{1F3FF}"]] },
      "1f9d2": { "1f3fb": ["1f9d2-1f3fb", 50, 14, 15, ["\u{1F9D2}\u{1F3FB}"]], "1f3fc": ["1f9d2-1f3fc", 50, 15, 15, ["\u{1F9D2}\u{1F3FC}"]], "1f3fd": ["1f9d2-1f3fd", 50, 16, 15, ["\u{1F9D2}\u{1F3FD}"]], "1f3fe": ["1f9d2-1f3fe", 50, 17, 15, ["\u{1F9D2}\u{1F3FE}"]], "1f3ff": ["1f9d2-1f3ff", 50, 18, 15, ["\u{1F9D2}\u{1F3FF}"]] },
      "1f9d3": { "1f3fb": ["1f9d3-1f3fb", 50, 20, 15, ["\u{1F9D3}\u{1F3FB}"]], "1f3fc": ["1f9d3-1f3fc", 50, 21, 15, ["\u{1F9D3}\u{1F3FC}"]], "1f3fd": ["1f9d3-1f3fd", 50, 22, 15, ["\u{1F9D3}\u{1F3FD}"]], "1f3fe": ["1f9d3-1f3fe", 50, 23, 15, ["\u{1F9D3}\u{1F3FE}"]], "1f3ff": ["1f9d3-1f3ff", 50, 24, 15, ["\u{1F9D3}\u{1F3FF}"]] },
      "1f9d4-200d-2640-fe0f": { "1f3fb": ["1f9d4-1f3fb-200d-2640-fe0f", 50, 26, 15, ["\u{1F9D4}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f9d4-1f3fc-200d-2640-fe0f", 50, 27, 15, ["\u{1F9D4}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f9d4-1f3fd-200d-2640-fe0f", 50, 28, 15, ["\u{1F9D4}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f9d4-1f3fe-200d-2640-fe0f", 50, 29, 15, ["\u{1F9D4}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f9d4-1f3ff-200d-2640-fe0f", 50, 30, 15, ["\u{1F9D4}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f9d4-200d-2642-fe0f": { "1f3fb": ["1f9d4-1f3fb-200d-2642-fe0f", 50, 32, 15, ["\u{1F9D4}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f9d4-1f3fc-200d-2642-fe0f", 50, 33, 15, ["\u{1F9D4}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f9d4-1f3fd-200d-2642-fe0f", 50, 34, 15, ["\u{1F9D4}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f9d4-1f3fe-200d-2642-fe0f", 50, 35, 15, ["\u{1F9D4}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f9d4-1f3ff-200d-2642-fe0f", 50, 36, 15, ["\u{1F9D4}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f9d4": { "1f3fb": ["1f9d4-1f3fb", 50, 38, 15, ["\u{1F9D4}\u{1F3FB}"]], "1f3fc": ["1f9d4-1f3fc", 50, 39, 15, ["\u{1F9D4}\u{1F3FC}"]], "1f3fd": ["1f9d4-1f3fd", 50, 40, 15, ["\u{1F9D4}\u{1F3FD}"]], "1f3fe": ["1f9d4-1f3fe", 50, 41, 15, ["\u{1F9D4}\u{1F3FE}"]], "1f3ff": ["1f9d4-1f3ff", 50, 42, 15, ["\u{1F9D4}\u{1F3FF}"]] },
      "1f9d5": { "1f3fb": ["1f9d5-1f3fb", 50, 44, 15, ["\u{1F9D5}\u{1F3FB}"]], "1f3fc": ["1f9d5-1f3fc", 50, 45, 15, ["\u{1F9D5}\u{1F3FC}"]], "1f3fd": ["1f9d5-1f3fd", 50, 46, 15, ["\u{1F9D5}\u{1F3FD}"]], "1f3fe": ["1f9d5-1f3fe", 50, 47, 15, ["\u{1F9D5}\u{1F3FE}"]], "1f3ff": ["1f9d5-1f3ff", 50, 48, 15, ["\u{1F9D5}\u{1F3FF}"]] },
      "1f9d6-200d-2640-fe0f": { "1f3fb": ["1f9d6-1f3fb-200d-2640-fe0f", 50, 50, 15, ["\u{1F9D6}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f9d6-1f3fc-200d-2640-fe0f", 50, 51, 15, ["\u{1F9D6}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f9d6-1f3fd-200d-2640-fe0f", 50, 52, 15, ["\u{1F9D6}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f9d6-1f3fe-200d-2640-fe0f", 50, 53, 15, ["\u{1F9D6}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f9d6-1f3ff-200d-2640-fe0f", 50, 54, 15, ["\u{1F9D6}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f9d6-200d-2642-fe0f": { "1f3fb": ["1f9d6-1f3fb-200d-2642-fe0f", 50, 56, 15, ["\u{1F9D6}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F9D6}\u{1F3FB}"]], "1f3fc": ["1f9d6-1f3fc-200d-2642-fe0f", 50, 57, 15, ["\u{1F9D6}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F9D6}\u{1F3FC}"]], "1f3fd": ["1f9d6-1f3fd-200d-2642-fe0f", 50, 58, 15, ["\u{1F9D6}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F9D6}\u{1F3FD}"]], "1f3fe": ["1f9d6-1f3fe-200d-2642-fe0f", 50, 59, 15, ["\u{1F9D6}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F9D6}\u{1F3FE}"]], "1f3ff": ["1f9d6-1f3ff-200d-2642-fe0f", 50, 60, 15, ["\u{1F9D6}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F9D6}\u{1F3FF}"]] },
      "1f9d7-200d-2640-fe0f": { "1f3fb": ["1f9d7-1f3fb-200d-2640-fe0f", 51, 7, 15, ["\u{1F9D7}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F9D7}\u{1F3FB}"]], "1f3fc": ["1f9d7-1f3fc-200d-2640-fe0f", 51, 8, 15, ["\u{1F9D7}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F9D7}\u{1F3FC}"]], "1f3fd": ["1f9d7-1f3fd-200d-2640-fe0f", 51, 9, 15, ["\u{1F9D7}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F9D7}\u{1F3FD}"]], "1f3fe": ["1f9d7-1f3fe-200d-2640-fe0f", 51, 10, 15, ["\u{1F9D7}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F9D7}\u{1F3FE}"]], "1f3ff": ["1f9d7-1f3ff-200d-2640-fe0f", 51, 11, 15, ["\u{1F9D7}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F9D7}\u{1F3FF}"]] },
      "1f9d7-200d-2642-fe0f": { "1f3fb": ["1f9d7-1f3fb-200d-2642-fe0f", 51, 13, 15, ["\u{1F9D7}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f9d7-1f3fc-200d-2642-fe0f", 51, 14, 15, ["\u{1F9D7}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f9d7-1f3fd-200d-2642-fe0f", 51, 15, 15, ["\u{1F9D7}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f9d7-1f3fe-200d-2642-fe0f", 51, 16, 15, ["\u{1F9D7}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f9d7-1f3ff-200d-2642-fe0f", 51, 17, 15, ["\u{1F9D7}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f9d8-200d-2640-fe0f": { "1f3fb": ["1f9d8-1f3fb-200d-2640-fe0f", 51, 25, 15, ["\u{1F9D8}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F9D8}\u{1F3FB}"]], "1f3fc": ["1f9d8-1f3fc-200d-2640-fe0f", 51, 26, 15, ["\u{1F9D8}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F9D8}\u{1F3FC}"]], "1f3fd": ["1f9d8-1f3fd-200d-2640-fe0f", 51, 27, 15, ["\u{1F9D8}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F9D8}\u{1F3FD}"]], "1f3fe": ["1f9d8-1f3fe-200d-2640-fe0f", 51, 28, 15, ["\u{1F9D8}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F9D8}\u{1F3FE}"]], "1f3ff": ["1f9d8-1f3ff-200d-2640-fe0f", 51, 29, 15, ["\u{1F9D8}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F9D8}\u{1F3FF}"]] },
      "1f9d8-200d-2642-fe0f": { "1f3fb": ["1f9d8-1f3fb-200d-2642-fe0f", 51, 31, 15, ["\u{1F9D8}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f9d8-1f3fc-200d-2642-fe0f", 51, 32, 15, ["\u{1F9D8}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f9d8-1f3fd-200d-2642-fe0f", 51, 33, 15, ["\u{1F9D8}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f9d8-1f3fe-200d-2642-fe0f", 51, 34, 15, ["\u{1F9D8}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f9d8-1f3ff-200d-2642-fe0f", 51, 35, 15, ["\u{1F9D8}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f9d9-200d-2640-fe0f": { "1f3fb": ["1f9d9-1f3fb-200d-2640-fe0f", 51, 43, 15, ["\u{1F9D9}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F9D9}\u{1F3FB}"]], "1f3fc": ["1f9d9-1f3fc-200d-2640-fe0f", 51, 44, 15, ["\u{1F9D9}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F9D9}\u{1F3FC}"]], "1f3fd": ["1f9d9-1f3fd-200d-2640-fe0f", 51, 45, 15, ["\u{1F9D9}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F9D9}\u{1F3FD}"]], "1f3fe": ["1f9d9-1f3fe-200d-2640-fe0f", 51, 46, 15, ["\u{1F9D9}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F9D9}\u{1F3FE}"]], "1f3ff": ["1f9d9-1f3ff-200d-2640-fe0f", 51, 47, 15, ["\u{1F9D9}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F9D9}\u{1F3FF}"]] },
      "1f9d9-200d-2642-fe0f": { "1f3fb": ["1f9d9-1f3fb-200d-2642-fe0f", 51, 49, 15, ["\u{1F9D9}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f9d9-1f3fc-200d-2642-fe0f", 51, 50, 15, ["\u{1F9D9}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f9d9-1f3fd-200d-2642-fe0f", 51, 51, 15, ["\u{1F9D9}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f9d9-1f3fe-200d-2642-fe0f", 51, 52, 15, ["\u{1F9D9}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f9d9-1f3ff-200d-2642-fe0f", 51, 53, 15, ["\u{1F9D9}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f9da-200d-2640-fe0f": { "1f3fb": ["1f9da-1f3fb-200d-2640-fe0f", 52, 0, 15, ["\u{1F9DA}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F9DA}\u{1F3FB}"]], "1f3fc": ["1f9da-1f3fc-200d-2640-fe0f", 52, 1, 15, ["\u{1F9DA}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F9DA}\u{1F3FC}"]], "1f3fd": ["1f9da-1f3fd-200d-2640-fe0f", 52, 2, 15, ["\u{1F9DA}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F9DA}\u{1F3FD}"]], "1f3fe": ["1f9da-1f3fe-200d-2640-fe0f", 52, 3, 15, ["\u{1F9DA}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F9DA}\u{1F3FE}"]], "1f3ff": ["1f9da-1f3ff-200d-2640-fe0f", 52, 4, 15, ["\u{1F9DA}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F9DA}\u{1F3FF}"]] },
      "1f9da-200d-2642-fe0f": { "1f3fb": ["1f9da-1f3fb-200d-2642-fe0f", 52, 6, 15, ["\u{1F9DA}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f9da-1f3fc-200d-2642-fe0f", 52, 7, 15, ["\u{1F9DA}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f9da-1f3fd-200d-2642-fe0f", 52, 8, 15, ["\u{1F9DA}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f9da-1f3fe-200d-2642-fe0f", 52, 9, 15, ["\u{1F9DA}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f9da-1f3ff-200d-2642-fe0f", 52, 10, 15, ["\u{1F9DA}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f9db-200d-2640-fe0f": { "1f3fb": ["1f9db-1f3fb-200d-2640-fe0f", 52, 18, 15, ["\u{1F9DB}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F9DB}\u{1F3FB}"]], "1f3fc": ["1f9db-1f3fc-200d-2640-fe0f", 52, 19, 15, ["\u{1F9DB}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F9DB}\u{1F3FC}"]], "1f3fd": ["1f9db-1f3fd-200d-2640-fe0f", 52, 20, 15, ["\u{1F9DB}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F9DB}\u{1F3FD}"]], "1f3fe": ["1f9db-1f3fe-200d-2640-fe0f", 52, 21, 15, ["\u{1F9DB}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F9DB}\u{1F3FE}"]], "1f3ff": ["1f9db-1f3ff-200d-2640-fe0f", 52, 22, 15, ["\u{1F9DB}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F9DB}\u{1F3FF}"]] },
      "1f9db-200d-2642-fe0f": { "1f3fb": ["1f9db-1f3fb-200d-2642-fe0f", 52, 24, 15, ["\u{1F9DB}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f9db-1f3fc-200d-2642-fe0f", 52, 25, 15, ["\u{1F9DB}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f9db-1f3fd-200d-2642-fe0f", 52, 26, 15, ["\u{1F9DB}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f9db-1f3fe-200d-2642-fe0f", 52, 27, 15, ["\u{1F9DB}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f9db-1f3ff-200d-2642-fe0f", 52, 28, 15, ["\u{1F9DB}\u{1F3FF}\u200D\u2642\uFE0F"]] },
      "1f9dc-200d-2640-fe0f": { "1f3fb": ["1f9dc-1f3fb-200d-2640-fe0f", 52, 36, 15, ["\u{1F9DC}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f9dc-1f3fc-200d-2640-fe0f", 52, 37, 15, ["\u{1F9DC}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f9dc-1f3fd-200d-2640-fe0f", 52, 38, 15, ["\u{1F9DC}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f9dc-1f3fe-200d-2640-fe0f", 52, 39, 15, ["\u{1F9DC}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f9dc-1f3ff-200d-2640-fe0f", 52, 40, 15, ["\u{1F9DC}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f9dc-200d-2642-fe0f": { "1f3fb": ["1f9dc-1f3fb-200d-2642-fe0f", 52, 42, 15, ["\u{1F9DC}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F9DC}\u{1F3FB}"]], "1f3fc": ["1f9dc-1f3fc-200d-2642-fe0f", 52, 43, 15, ["\u{1F9DC}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F9DC}\u{1F3FC}"]], "1f3fd": ["1f9dc-1f3fd-200d-2642-fe0f", 52, 44, 15, ["\u{1F9DC}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F9DC}\u{1F3FD}"]], "1f3fe": ["1f9dc-1f3fe-200d-2642-fe0f", 52, 45, 15, ["\u{1F9DC}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F9DC}\u{1F3FE}"]], "1f3ff": ["1f9dc-1f3ff-200d-2642-fe0f", 52, 46, 15, ["\u{1F9DC}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F9DC}\u{1F3FF}"]] },
      "1f9dd-200d-2640-fe0f": { "1f3fb": ["1f9dd-1f3fb-200d-2640-fe0f", 52, 54, 15, ["\u{1F9DD}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f9dd-1f3fc-200d-2640-fe0f", 52, 55, 15, ["\u{1F9DD}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f9dd-1f3fd-200d-2640-fe0f", 52, 56, 15, ["\u{1F9DD}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f9dd-1f3fe-200d-2640-fe0f", 52, 57, 15, ["\u{1F9DD}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f9dd-1f3ff-200d-2640-fe0f", 52, 58, 15, ["\u{1F9DD}\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "1f9dd-200d-2642-fe0f": { "1f3fb": ["1f9dd-1f3fb-200d-2642-fe0f", 52, 60, 15, ["\u{1F9DD}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F9DD}\u{1F3FB}"]], "1f3fc": ["1f9dd-1f3fc-200d-2642-fe0f", 53, 0, 15, ["\u{1F9DD}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F9DD}\u{1F3FC}"]], "1f3fd": ["1f9dd-1f3fd-200d-2642-fe0f", 53, 1, 15, ["\u{1F9DD}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F9DD}\u{1F3FD}"]], "1f3fe": ["1f9dd-1f3fe-200d-2642-fe0f", 53, 2, 15, ["\u{1F9DD}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F9DD}\u{1F3FE}"]], "1f3ff": ["1f9dd-1f3ff-200d-2642-fe0f", 53, 3, 15, ["\u{1F9DD}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F9DD}\u{1F3FF}"]] },
      "1fac3": { "1f3fb": ["1fac3-1f3fb", 54, 60, 15, ["\u{1FAC3}\u{1F3FB}"]], "1f3fc": ["1fac3-1f3fc", 55, 0, 15, ["\u{1FAC3}\u{1F3FC}"]], "1f3fd": ["1fac3-1f3fd", 55, 1, 15, ["\u{1FAC3}\u{1F3FD}"]], "1f3fe": ["1fac3-1f3fe", 55, 2, 15, ["\u{1FAC3}\u{1F3FE}"]], "1f3ff": ["1fac3-1f3ff", 55, 3, 15, ["\u{1FAC3}\u{1F3FF}"]] },
      "1fac4": { "1f3fb": ["1fac4-1f3fb", 55, 5, 15, ["\u{1FAC4}\u{1F3FB}"]], "1f3fc": ["1fac4-1f3fc", 55, 6, 15, ["\u{1FAC4}\u{1F3FC}"]], "1f3fd": ["1fac4-1f3fd", 55, 7, 15, ["\u{1FAC4}\u{1F3FD}"]], "1f3fe": ["1fac4-1f3fe", 55, 8, 15, ["\u{1FAC4}\u{1F3FE}"]], "1f3ff": ["1fac4-1f3ff", 55, 9, 15, ["\u{1FAC4}\u{1F3FF}"]] },
      "1fac5": { "1f3fb": ["1fac5-1f3fb", 55, 11, 15, ["\u{1FAC5}\u{1F3FB}"]], "1f3fc": ["1fac5-1f3fc", 55, 12, 15, ["\u{1FAC5}\u{1F3FC}"]], "1f3fd": ["1fac5-1f3fd", 55, 13, 15, ["\u{1FAC5}\u{1F3FD}"]], "1f3fe": ["1fac5-1f3fe", 55, 14, 15, ["\u{1FAC5}\u{1F3FE}"]], "1f3ff": ["1fac5-1f3ff", 55, 15, 15, ["\u{1FAC5}\u{1F3FF}"]] },
      "1faf0": { "1f3fb": ["1faf0-1f3fb", 55, 40, 15, ["\u{1FAF0}\u{1F3FB}"]], "1f3fc": ["1faf0-1f3fc", 55, 41, 15, ["\u{1FAF0}\u{1F3FC}"]], "1f3fd": ["1faf0-1f3fd", 55, 42, 15, ["\u{1FAF0}\u{1F3FD}"]], "1f3fe": ["1faf0-1f3fe", 55, 43, 15, ["\u{1FAF0}\u{1F3FE}"]], "1f3ff": ["1faf0-1f3ff", 55, 44, 15, ["\u{1FAF0}\u{1F3FF}"]] },
      "1faf1": { "1f3fb": ["1faf1-1f3fb", 55, 46, 15, ["\u{1FAF1}\u{1F3FB}"]], "1f3fc": ["1faf1-1f3fc", 55, 47, 15, ["\u{1FAF1}\u{1F3FC}"]], "1f3fd": ["1faf1-1f3fd", 55, 48, 15, ["\u{1FAF1}\u{1F3FD}"]], "1f3fe": ["1faf1-1f3fe", 55, 49, 15, ["\u{1FAF1}\u{1F3FE}"]], "1f3ff": ["1faf1-1f3ff", 55, 50, 15, ["\u{1FAF1}\u{1F3FF}"]] },
      "1faf2": { "1f3fb": ["1faf2-1f3fb", 55, 52, 15, ["\u{1FAF2}\u{1F3FB}"]], "1f3fc": ["1faf2-1f3fc", 55, 53, 15, ["\u{1FAF2}\u{1F3FC}"]], "1f3fd": ["1faf2-1f3fd", 55, 54, 15, ["\u{1FAF2}\u{1F3FD}"]], "1f3fe": ["1faf2-1f3fe", 55, 55, 15, ["\u{1FAF2}\u{1F3FE}"]], "1f3ff": ["1faf2-1f3ff", 55, 56, 15, ["\u{1FAF2}\u{1F3FF}"]] },
      "1faf3": { "1f3fb": ["1faf3-1f3fb", 55, 58, 15, ["\u{1FAF3}\u{1F3FB}"]], "1f3fc": ["1faf3-1f3fc", 55, 59, 15, ["\u{1FAF3}\u{1F3FC}"]], "1f3fd": ["1faf3-1f3fd", 55, 60, 15, ["\u{1FAF3}\u{1F3FD}"]], "1f3fe": ["1faf3-1f3fe", 56, 0, 15, ["\u{1FAF3}\u{1F3FE}"]], "1f3ff": ["1faf3-1f3ff", 56, 1, 15, ["\u{1FAF3}\u{1F3FF}"]] },
      "1faf4": { "1f3fb": ["1faf4-1f3fb", 56, 3, 15, ["\u{1FAF4}\u{1F3FB}"]], "1f3fc": ["1faf4-1f3fc", 56, 4, 15, ["\u{1FAF4}\u{1F3FC}"]], "1f3fd": ["1faf4-1f3fd", 56, 5, 15, ["\u{1FAF4}\u{1F3FD}"]], "1f3fe": ["1faf4-1f3fe", 56, 6, 15, ["\u{1FAF4}\u{1F3FE}"]], "1f3ff": ["1faf4-1f3ff", 56, 7, 15, ["\u{1FAF4}\u{1F3FF}"]] },
      "1faf5": { "1f3fb": ["1faf5-1f3fb", 56, 9, 15, ["\u{1FAF5}\u{1F3FB}"]], "1f3fc": ["1faf5-1f3fc", 56, 10, 15, ["\u{1FAF5}\u{1F3FC}"]], "1f3fd": ["1faf5-1f3fd", 56, 11, 15, ["\u{1FAF5}\u{1F3FD}"]], "1f3fe": ["1faf5-1f3fe", 56, 12, 15, ["\u{1FAF5}\u{1F3FE}"]], "1f3ff": ["1faf5-1f3ff", 56, 13, 15, ["\u{1FAF5}\u{1F3FF}"]] },
      "1faf6": { "1f3fb": ["1faf6-1f3fb", 56, 15, 15, ["\u{1FAF6}\u{1F3FB}"]], "1f3fc": ["1faf6-1f3fc", 56, 16, 15, ["\u{1FAF6}\u{1F3FC}"]], "1f3fd": ["1faf6-1f3fd", 56, 17, 15, ["\u{1FAF6}\u{1F3FD}"]], "1f3fe": ["1faf6-1f3fe", 56, 18, 15, ["\u{1FAF6}\u{1F3FE}"]], "1f3ff": ["1faf6-1f3ff", 56, 19, 15, ["\u{1FAF6}\u{1F3FF}"]] },
      "1faf7": { "1f3fb": ["1faf7-1f3fb", 56, 21, 3, ["\u{1FAF7}\u{1F3FB}"]], "1f3fc": ["1faf7-1f3fc", 56, 22, 3, ["\u{1FAF7}\u{1F3FC}"]], "1f3fd": ["1faf7-1f3fd", 56, 23, 3, ["\u{1FAF7}\u{1F3FD}"]], "1f3fe": ["1faf7-1f3fe", 56, 24, 3, ["\u{1FAF7}\u{1F3FE}"]], "1f3ff": ["1faf7-1f3ff", 56, 25, 3, ["\u{1FAF7}\u{1F3FF}"]] },
      "1faf8": { "1f3fb": ["1faf8-1f3fb", 56, 27, 3, ["\u{1FAF8}\u{1F3FB}"]], "1f3fc": ["1faf8-1f3fc", 56, 28, 3, ["\u{1FAF8}\u{1F3FC}"]], "1f3fd": ["1faf8-1f3fd", 56, 29, 3, ["\u{1FAF8}\u{1F3FD}"]], "1f3fe": ["1faf8-1f3fe", 56, 30, 3, ["\u{1FAF8}\u{1F3FE}"]], "1f3ff": ["1faf8-1f3ff", 56, 31, 3, ["\u{1FAF8}\u{1F3FF}"]] },
      "261d-fe0f": { "1f3fb": ["261d-1f3fb", 57, 21, 15, ["\u261D\u{1F3FB}"]], "1f3fc": ["261d-1f3fc", 57, 22, 15, ["\u261D\u{1F3FC}"]], "1f3fd": ["261d-1f3fd", 57, 23, 15, ["\u261D\u{1F3FD}"]], "1f3fe": ["261d-1f3fe", 57, 24, 15, ["\u261D\u{1F3FE}"]], "1f3ff": ["261d-1f3ff", 57, 25, 15, ["\u261D\u{1F3FF}"]] },
      "26f9-fe0f-200d-2640-fe0f": { "1f3fb": ["26f9-1f3fb-200d-2640-fe0f", 58, 35, 15, ["\u26F9\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["26f9-1f3fc-200d-2640-fe0f", 58, 36, 15, ["\u26F9\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["26f9-1f3fd-200d-2640-fe0f", 58, 37, 15, ["\u26F9\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["26f9-1f3fe-200d-2640-fe0f", 58, 38, 15, ["\u26F9\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["26f9-1f3ff-200d-2640-fe0f", 58, 39, 15, ["\u26F9\u{1F3FF}\u200D\u2640\uFE0F"]] },
      "26f9-fe0f-200d-2642-fe0f": { "1f3fb": ["26f9-1f3fb-200d-2642-fe0f", 58, 41, 15, ["\u26F9\u{1F3FB}\u200D\u2642\uFE0F", "\u26F9\u{1F3FB}"]], "1f3fc": ["26f9-1f3fc-200d-2642-fe0f", 58, 42, 15, ["\u26F9\u{1F3FC}\u200D\u2642\uFE0F", "\u26F9\u{1F3FC}"]], "1f3fd": ["26f9-1f3fd-200d-2642-fe0f", 58, 43, 15, ["\u26F9\u{1F3FD}\u200D\u2642\uFE0F", "\u26F9\u{1F3FD}"]], "1f3fe": ["26f9-1f3fe-200d-2642-fe0f", 58, 44, 15, ["\u26F9\u{1F3FE}\u200D\u2642\uFE0F", "\u26F9\u{1F3FE}"]], "1f3ff": ["26f9-1f3ff-200d-2642-fe0f", 58, 45, 15, ["\u26F9\u{1F3FF}\u200D\u2642\uFE0F", "\u26F9\u{1F3FF}"]] },
      "270a": { "1f3fb": ["270a-1f3fb", 58, 59, 15, ["\u270A\u{1F3FB}"]], "1f3fc": ["270a-1f3fc", 58, 60, 15, ["\u270A\u{1F3FC}"]], "1f3fd": ["270a-1f3fd", 59, 0, 15, ["\u270A\u{1F3FD}"]], "1f3fe": ["270a-1f3fe", 59, 1, 15, ["\u270A\u{1F3FE}"]], "1f3ff": ["270a-1f3ff", 59, 2, 15, ["\u270A\u{1F3FF}"]] },
      "270b": { "1f3fb": ["270b-1f3fb", 59, 4, 15, ["\u270B\u{1F3FB}"]], "1f3fc": ["270b-1f3fc", 59, 5, 15, ["\u270B\u{1F3FC}"]], "1f3fd": ["270b-1f3fd", 59, 6, 15, ["\u270B\u{1F3FD}"]], "1f3fe": ["270b-1f3fe", 59, 7, 15, ["\u270B\u{1F3FE}"]], "1f3ff": ["270b-1f3ff", 59, 8, 15, ["\u270B\u{1F3FF}"]] },
      "270c-fe0f": { "1f3fb": ["270c-1f3fb", 59, 10, 15, ["\u270C\u{1F3FB}"]], "1f3fc": ["270c-1f3fc", 59, 11, 15, ["\u270C\u{1F3FC}"]], "1f3fd": ["270c-1f3fd", 59, 12, 15, ["\u270C\u{1F3FD}"]], "1f3fe": ["270c-1f3fe", 59, 13, 15, ["\u270C\u{1F3FE}"]], "1f3ff": ["270c-1f3ff", 59, 14, 15, ["\u270C\u{1F3FF}"]] },
      "270d-fe0f": { "1f3fb": ["270d-1f3fb", 59, 16, 15, ["\u270D\u{1F3FB}"]], "1f3fc": ["270d-1f3fc", 59, 17, 15, ["\u270D\u{1F3FC}"]], "1f3fd": ["270d-1f3fd", 59, 18, 15, ["\u270D\u{1F3FD}"]], "1f3fe": ["270d-1f3fe", 59, 19, 15, ["\u270D\u{1F3FE}"]], "1f3ff": ["270d-1f3ff", 59, 20, 15, ["\u270D\u{1F3FF}"]] }
    };
    emoji2.prototype.obsoletes_data = {
      "1f3c3-200d-2642-fe0f": ["1f3c3", 8, 26, 15],
      "1f3c3-1f3fb-200d-2642-fe0f": ["1f3c3-1f3fb", 8, 27, 15],
      "1f3c3-1f3fc-200d-2642-fe0f": ["1f3c3-1f3fc", 8, 28, 15],
      "1f3c3-1f3fd-200d-2642-fe0f": ["1f3c3-1f3fd", 8, 29, 15],
      "1f3c3-1f3fe-200d-2642-fe0f": ["1f3c3-1f3fe", 8, 30, 15],
      "1f3c3-1f3ff-200d-2642-fe0f": ["1f3c3-1f3ff", 8, 31, 15],
      "1f3c4-200d-2642-fe0f": ["1f3c4", 8, 44, 15],
      "1f3c4-1f3fb-200d-2642-fe0f": ["1f3c4-1f3fb", 8, 45, 15],
      "1f3c4-1f3fc-200d-2642-fe0f": ["1f3c4-1f3fc", 8, 46, 15],
      "1f3c4-1f3fd-200d-2642-fe0f": ["1f3c4-1f3fd", 8, 47, 15],
      "1f3c4-1f3fe-200d-2642-fe0f": ["1f3c4-1f3fe", 8, 48, 15],
      "1f3c4-1f3ff-200d-2642-fe0f": ["1f3c4-1f3ff", 8, 49, 15],
      "1f3ca-200d-2642-fe0f": ["1f3ca", 9, 11, 15],
      "1f3ca-1f3fb-200d-2642-fe0f": ["1f3ca-1f3fb", 9, 12, 15],
      "1f3ca-1f3fc-200d-2642-fe0f": ["1f3ca-1f3fc", 9, 13, 15],
      "1f3ca-1f3fd-200d-2642-fe0f": ["1f3ca-1f3fd", 9, 14, 15],
      "1f3ca-1f3fe-200d-2642-fe0f": ["1f3ca-1f3fe", 9, 15, 15],
      "1f3ca-1f3ff-200d-2642-fe0f": ["1f3ca-1f3ff", 9, 16, 15],
      "1f3cb-fe0f-200d-2642-fe0f": ["1f3cb-fe0f", 9, 29, 15],
      "1f3cb-1f3fb-200d-2642-fe0f": ["1f3cb-1f3fb", 9, 30, 15],
      "1f3cb-1f3fc-200d-2642-fe0f": ["1f3cb-1f3fc", 9, 31, 15],
      "1f3cb-1f3fd-200d-2642-fe0f": ["1f3cb-1f3fd", 9, 32, 15],
      "1f3cb-1f3fe-200d-2642-fe0f": ["1f3cb-1f3fe", 9, 33, 15],
      "1f3cb-1f3ff-200d-2642-fe0f": ["1f3cb-1f3ff", 9, 34, 15],
      "1f3cc-fe0f-200d-2642-fe0f": ["1f3cc-fe0f", 9, 47, 15],
      "1f3cc-1f3fb-200d-2642-fe0f": ["1f3cc-1f3fb", 9, 48, 15],
      "1f3cc-1f3fc-200d-2642-fe0f": ["1f3cc-1f3fc", 9, 49, 15],
      "1f3cc-1f3fd-200d-2642-fe0f": ["1f3cc-1f3fd", 9, 50, 15],
      "1f3cc-1f3fe-200d-2642-fe0f": ["1f3cc-1f3fe", 9, 51, 15],
      "1f3cc-1f3ff-200d-2642-fe0f": ["1f3cc-1f3ff", 9, 52, 15],
      "1f468-200d-1f469-200d-1f466": ["1f46a", 21, 40, 15],
      "1f46e-200d-2642-fe0f": ["1f46e", 23, 9, 15],
      "1f46e-1f3fb-200d-2642-fe0f": ["1f46e-1f3fb", 23, 10, 15],
      "1f46e-1f3fc-200d-2642-fe0f": ["1f46e-1f3fc", 23, 11, 15],
      "1f46e-1f3fd-200d-2642-fe0f": ["1f46e-1f3fd", 23, 12, 15],
      "1f46e-1f3fe-200d-2642-fe0f": ["1f46e-1f3fe", 23, 13, 15],
      "1f46e-1f3ff-200d-2642-fe0f": ["1f46e-1f3ff", 23, 14, 15],
      "1f46f-200d-2640-fe0f": ["1f46f", 23, 17, 15],
      "1f471-200d-2642-fe0f": ["1f471", 23, 48, 15],
      "1f471-1f3fb-200d-2642-fe0f": ["1f471-1f3fb", 23, 49, 15],
      "1f471-1f3fc-200d-2642-fe0f": ["1f471-1f3fc", 23, 50, 15],
      "1f471-1f3fd-200d-2642-fe0f": ["1f471-1f3fd", 23, 51, 15],
      "1f471-1f3fe-200d-2642-fe0f": ["1f471-1f3fe", 23, 52, 15],
      "1f471-1f3ff-200d-2642-fe0f": ["1f471-1f3ff", 23, 53, 15],
      "1f473-200d-2642-fe0f": ["1f473", 24, 11, 15],
      "1f473-1f3fb-200d-2642-fe0f": ["1f473-1f3fb", 24, 12, 15],
      "1f473-1f3fc-200d-2642-fe0f": ["1f473-1f3fc", 24, 13, 15],
      "1f473-1f3fd-200d-2642-fe0f": ["1f473-1f3fd", 24, 14, 15],
      "1f473-1f3fe-200d-2642-fe0f": ["1f473-1f3fe", 24, 15, 15],
      "1f473-1f3ff-200d-2642-fe0f": ["1f473-1f3ff", 24, 16, 15],
      "1f477-200d-2642-fe0f": ["1f477", 24, 47, 15],
      "1f477-1f3fb-200d-2642-fe0f": ["1f477-1f3fb", 24, 48, 15],
      "1f477-1f3fc-200d-2642-fe0f": ["1f477-1f3fc", 24, 49, 15],
      "1f477-1f3fd-200d-2642-fe0f": ["1f477-1f3fd", 24, 50, 15],
      "1f477-1f3fe-200d-2642-fe0f": ["1f477-1f3fe", 24, 51, 15],
      "1f477-1f3ff-200d-2642-fe0f": ["1f477-1f3ff", 24, 52, 15],
      "1f481-200d-2640-fe0f": ["1f481", 25, 23, 15],
      "1f481-1f3fb-200d-2640-fe0f": ["1f481-1f3fb", 25, 24, 15],
      "1f481-1f3fc-200d-2640-fe0f": ["1f481-1f3fc", 25, 25, 15],
      "1f481-1f3fd-200d-2640-fe0f": ["1f481-1f3fd", 25, 26, 15],
      "1f481-1f3fe-200d-2640-fe0f": ["1f481-1f3fe", 25, 27, 15],
      "1f481-1f3ff-200d-2640-fe0f": ["1f481-1f3ff", 25, 28, 15],
      "1f482-200d-2642-fe0f": ["1f482", 25, 41, 15],
      "1f482-1f3fb-200d-2642-fe0f": ["1f482-1f3fb", 25, 42, 15],
      "1f482-1f3fc-200d-2642-fe0f": ["1f482-1f3fc", 25, 43, 15],
      "1f482-1f3fd-200d-2642-fe0f": ["1f482-1f3fd", 25, 44, 15],
      "1f482-1f3fe-200d-2642-fe0f": ["1f482-1f3fe", 25, 45, 15],
      "1f482-1f3ff-200d-2642-fe0f": ["1f482-1f3ff", 25, 46, 15],
      "1f486-200d-2640-fe0f": ["1f486", 26, 11, 15],
      "1f486-1f3fb-200d-2640-fe0f": ["1f486-1f3fb", 26, 12, 15],
      "1f486-1f3fc-200d-2640-fe0f": ["1f486-1f3fc", 26, 13, 15],
      "1f486-1f3fd-200d-2640-fe0f": ["1f486-1f3fd", 26, 14, 15],
      "1f486-1f3fe-200d-2640-fe0f": ["1f486-1f3fe", 26, 15, 15],
      "1f486-1f3ff-200d-2640-fe0f": ["1f486-1f3ff", 26, 16, 15],
      "1f487-200d-2640-fe0f": ["1f487", 26, 29, 15],
      "1f487-1f3fb-200d-2640-fe0f": ["1f487-1f3fb", 26, 30, 15],
      "1f487-1f3fc-200d-2640-fe0f": ["1f487-1f3fc", 26, 31, 15],
      "1f487-1f3fd-200d-2640-fe0f": ["1f487-1f3fd", 26, 32, 15],
      "1f487-1f3fe-200d-2640-fe0f": ["1f487-1f3fe", 26, 33, 15],
      "1f487-1f3ff-200d-2640-fe0f": ["1f487-1f3ff", 26, 34, 15],
      "1f575-fe0f-200d-2642-fe0f": ["1f575-fe0f", 31, 17, 15],
      "1f575-1f3fb-200d-2642-fe0f": ["1f575-1f3fb", 31, 18, 15],
      "1f575-1f3fc-200d-2642-fe0f": ["1f575-1f3fc", 31, 19, 15],
      "1f575-1f3fd-200d-2642-fe0f": ["1f575-1f3fd", 31, 20, 15],
      "1f575-1f3fe-200d-2642-fe0f": ["1f575-1f3fe", 31, 21, 15],
      "1f575-1f3ff-200d-2642-fe0f": ["1f575-1f3ff", 31, 22, 15],
      "1f645-200d-2640-fe0f": ["1f645", 33, 44, 15],
      "1f645-1f3fb-200d-2640-fe0f": ["1f645-1f3fb", 33, 45, 15],
      "1f645-1f3fc-200d-2640-fe0f": ["1f645-1f3fc", 33, 46, 15],
      "1f645-1f3fd-200d-2640-fe0f": ["1f645-1f3fd", 33, 47, 15],
      "1f645-1f3fe-200d-2640-fe0f": ["1f645-1f3fe", 33, 48, 15],
      "1f645-1f3ff-200d-2640-fe0f": ["1f645-1f3ff", 33, 49, 15],
      "1f646-200d-2640-fe0f": ["1f646", 34, 1, 15],
      "1f646-1f3fb-200d-2640-fe0f": ["1f646-1f3fb", 34, 2, 15],
      "1f646-1f3fc-200d-2640-fe0f": ["1f646-1f3fc", 34, 3, 15],
      "1f646-1f3fd-200d-2640-fe0f": ["1f646-1f3fd", 34, 4, 15],
      "1f646-1f3fe-200d-2640-fe0f": ["1f646-1f3fe", 34, 5, 15],
      "1f646-1f3ff-200d-2640-fe0f": ["1f646-1f3ff", 34, 6, 15],
      "1f64b-200d-2640-fe0f": ["1f64b", 34, 40, 15],
      "1f64b-1f3fb-200d-2640-fe0f": ["1f64b-1f3fb", 34, 41, 15],
      "1f64b-1f3fc-200d-2640-fe0f": ["1f64b-1f3fc", 34, 42, 15],
      "1f64b-1f3fd-200d-2640-fe0f": ["1f64b-1f3fd", 34, 43, 15],
      "1f64b-1f3fe-200d-2640-fe0f": ["1f64b-1f3fe", 34, 44, 15],
      "1f64b-1f3ff-200d-2640-fe0f": ["1f64b-1f3ff", 34, 45, 15],
      "1f64d-200d-2640-fe0f": ["1f64d", 35, 3, 15],
      "1f64d-1f3fb-200d-2640-fe0f": ["1f64d-1f3fb", 35, 4, 15],
      "1f64d-1f3fc-200d-2640-fe0f": ["1f64d-1f3fc", 35, 5, 15],
      "1f64d-1f3fd-200d-2640-fe0f": ["1f64d-1f3fd", 35, 6, 15],
      "1f64d-1f3fe-200d-2640-fe0f": ["1f64d-1f3fe", 35, 7, 15],
      "1f64d-1f3ff-200d-2640-fe0f": ["1f64d-1f3ff", 35, 8, 15],
      "1f64e-200d-2640-fe0f": ["1f64e", 35, 21, 15],
      "1f64e-1f3fb-200d-2640-fe0f": ["1f64e-1f3fb", 35, 22, 15],
      "1f64e-1f3fc-200d-2640-fe0f": ["1f64e-1f3fc", 35, 23, 15],
      "1f64e-1f3fd-200d-2640-fe0f": ["1f64e-1f3fd", 35, 24, 15],
      "1f64e-1f3fe-200d-2640-fe0f": ["1f64e-1f3fe", 35, 25, 15],
      "1f64e-1f3ff-200d-2640-fe0f": ["1f64e-1f3ff", 35, 26, 15],
      "1f6a3-200d-2642-fe0f": ["1f6a3", 36, 19, 15],
      "1f6a3-1f3fb-200d-2642-fe0f": ["1f6a3-1f3fb", 36, 20, 15],
      "1f6a3-1f3fc-200d-2642-fe0f": ["1f6a3-1f3fc", 36, 21, 15],
      "1f6a3-1f3fd-200d-2642-fe0f": ["1f6a3-1f3fd", 36, 22, 15],
      "1f6a3-1f3fe-200d-2642-fe0f": ["1f6a3-1f3fe", 36, 23, 15],
      "1f6a3-1f3ff-200d-2642-fe0f": ["1f6a3-1f3ff", 36, 24, 15],
      "1f6b4-200d-2642-fe0f": ["1f6b4", 36, 53, 15],
      "1f6b4-1f3fb-200d-2642-fe0f": ["1f6b4-1f3fb", 36, 54, 15],
      "1f6b4-1f3fc-200d-2642-fe0f": ["1f6b4-1f3fc", 36, 55, 15],
      "1f6b4-1f3fd-200d-2642-fe0f": ["1f6b4-1f3fd", 36, 56, 15],
      "1f6b4-1f3fe-200d-2642-fe0f": ["1f6b4-1f3fe", 36, 57, 15],
      "1f6b4-1f3ff-200d-2642-fe0f": ["1f6b4-1f3ff", 36, 58, 15],
      "1f6b5-200d-2642-fe0f": ["1f6b5", 37, 10, 15],
      "1f6b5-1f3fb-200d-2642-fe0f": ["1f6b5-1f3fb", 37, 11, 15],
      "1f6b5-1f3fc-200d-2642-fe0f": ["1f6b5-1f3fc", 37, 12, 15],
      "1f6b5-1f3fd-200d-2642-fe0f": ["1f6b5-1f3fd", 37, 13, 15],
      "1f6b5-1f3fe-200d-2642-fe0f": ["1f6b5-1f3fe", 37, 14, 15],
      "1f6b5-1f3ff-200d-2642-fe0f": ["1f6b5-1f3ff", 37, 15, 15],
      "1f6b6-200d-2642-fe0f": ["1f6b6", 37, 28, 15],
      "1f6b6-1f3fb-200d-2642-fe0f": ["1f6b6-1f3fb", 37, 29, 15],
      "1f6b6-1f3fc-200d-2642-fe0f": ["1f6b6-1f3fc", 37, 30, 15],
      "1f6b6-1f3fd-200d-2642-fe0f": ["1f6b6-1f3fd", 37, 31, 15],
      "1f6b6-1f3fe-200d-2642-fe0f": ["1f6b6-1f3fe", 37, 32, 15],
      "1f6b6-1f3ff-200d-2642-fe0f": ["1f6b6-1f3ff", 37, 33, 15],
      "1f9d6-200d-2642-fe0f": ["1f9d6", 51, 0, 15],
      "1f9d6-1f3fb-200d-2642-fe0f": ["1f9d6-1f3fb", 51, 1, 15],
      "1f9d6-1f3fc-200d-2642-fe0f": ["1f9d6-1f3fc", 51, 2, 15],
      "1f9d6-1f3fd-200d-2642-fe0f": ["1f9d6-1f3fd", 51, 3, 15],
      "1f9d6-1f3fe-200d-2642-fe0f": ["1f9d6-1f3fe", 51, 4, 15],
      "1f9d6-1f3ff-200d-2642-fe0f": ["1f9d6-1f3ff", 51, 5, 15],
      "1f9d7-200d-2640-fe0f": ["1f9d7", 51, 18, 15],
      "1f9d7-1f3fb-200d-2640-fe0f": ["1f9d7-1f3fb", 51, 19, 15],
      "1f9d7-1f3fc-200d-2640-fe0f": ["1f9d7-1f3fc", 51, 20, 15],
      "1f9d7-1f3fd-200d-2640-fe0f": ["1f9d7-1f3fd", 51, 21, 15],
      "1f9d7-1f3fe-200d-2640-fe0f": ["1f9d7-1f3fe", 51, 22, 15],
      "1f9d7-1f3ff-200d-2640-fe0f": ["1f9d7-1f3ff", 51, 23, 15],
      "1f9d8-200d-2640-fe0f": ["1f9d8", 51, 36, 15],
      "1f9d8-1f3fb-200d-2640-fe0f": ["1f9d8-1f3fb", 51, 37, 15],
      "1f9d8-1f3fc-200d-2640-fe0f": ["1f9d8-1f3fc", 51, 38, 15],
      "1f9d8-1f3fd-200d-2640-fe0f": ["1f9d8-1f3fd", 51, 39, 15],
      "1f9d8-1f3fe-200d-2640-fe0f": ["1f9d8-1f3fe", 51, 40, 15],
      "1f9d8-1f3ff-200d-2640-fe0f": ["1f9d8-1f3ff", 51, 41, 15],
      "1f9d9-200d-2640-fe0f": ["1f9d9", 51, 54, 15],
      "1f9d9-1f3fb-200d-2640-fe0f": ["1f9d9-1f3fb", 51, 55, 15],
      "1f9d9-1f3fc-200d-2640-fe0f": ["1f9d9-1f3fc", 51, 56, 15],
      "1f9d9-1f3fd-200d-2640-fe0f": ["1f9d9-1f3fd", 51, 57, 15],
      "1f9d9-1f3fe-200d-2640-fe0f": ["1f9d9-1f3fe", 51, 58, 15],
      "1f9d9-1f3ff-200d-2640-fe0f": ["1f9d9-1f3ff", 51, 59, 15],
      "1f9da-200d-2640-fe0f": ["1f9da", 52, 11, 15],
      "1f9da-1f3fb-200d-2640-fe0f": ["1f9da-1f3fb", 52, 12, 15],
      "1f9da-1f3fc-200d-2640-fe0f": ["1f9da-1f3fc", 52, 13, 15],
      "1f9da-1f3fd-200d-2640-fe0f": ["1f9da-1f3fd", 52, 14, 15],
      "1f9da-1f3fe-200d-2640-fe0f": ["1f9da-1f3fe", 52, 15, 15],
      "1f9da-1f3ff-200d-2640-fe0f": ["1f9da-1f3ff", 52, 16, 15],
      "1f9db-200d-2640-fe0f": ["1f9db", 52, 29, 15],
      "1f9db-1f3fb-200d-2640-fe0f": ["1f9db-1f3fb", 52, 30, 15],
      "1f9db-1f3fc-200d-2640-fe0f": ["1f9db-1f3fc", 52, 31, 15],
      "1f9db-1f3fd-200d-2640-fe0f": ["1f9db-1f3fd", 52, 32, 15],
      "1f9db-1f3fe-200d-2640-fe0f": ["1f9db-1f3fe", 52, 33, 15],
      "1f9db-1f3ff-200d-2640-fe0f": ["1f9db-1f3ff", 52, 34, 15],
      "1f9dc-200d-2642-fe0f": ["1f9dc", 52, 47, 15],
      "1f9dc-1f3fb-200d-2642-fe0f": ["1f9dc-1f3fb", 52, 48, 15],
      "1f9dc-1f3fc-200d-2642-fe0f": ["1f9dc-1f3fc", 52, 49, 15],
      "1f9dc-1f3fd-200d-2642-fe0f": ["1f9dc-1f3fd", 52, 50, 15],
      "1f9dc-1f3fe-200d-2642-fe0f": ["1f9dc-1f3fe", 52, 51, 15],
      "1f9dc-1f3ff-200d-2642-fe0f": ["1f9dc-1f3ff", 52, 52, 15],
      "1f9dd-200d-2642-fe0f": ["1f9dd", 53, 4, 15],
      "1f9dd-1f3fb-200d-2642-fe0f": ["1f9dd-1f3fb", 53, 5, 15],
      "1f9dd-1f3fc-200d-2642-fe0f": ["1f9dd-1f3fc", 53, 6, 15],
      "1f9dd-1f3fd-200d-2642-fe0f": ["1f9dd-1f3fd", 53, 7, 15],
      "1f9dd-1f3fe-200d-2642-fe0f": ["1f9dd-1f3fe", 53, 8, 15],
      "1f9dd-1f3ff-200d-2642-fe0f": ["1f9dd-1f3ff", 53, 9, 15],
      "1f9de-200d-2642-fe0f": ["1f9de", 53, 12, 15],
      "1f9df-200d-2642-fe0f": ["1f9df", 53, 15, 15],
      "26f9-fe0f-200d-2642-fe0f": ["26f9-fe0f", 58, 46, 15],
      "26f9-1f3fb-200d-2642-fe0f": ["26f9-1f3fb", 58, 47, 15],
      "26f9-1f3fc-200d-2642-fe0f": ["26f9-1f3fc", 58, 48, 15],
      "26f9-1f3fd-200d-2642-fe0f": ["26f9-1f3fd", 58, 49, 15],
      "26f9-1f3fe-200d-2642-fe0f": ["26f9-1f3fe", 58, 50, 15],
      "26f9-1f3ff-200d-2642-fe0f": ["26f9-1f3ff", 58, 51, 15]
    };
    {
      if (module.exports) {
        exports = module.exports = emoji2;
      }
      exports.EmojiConvertor = emoji2;
    }
  }).call(function() {
    return this || (typeof window !== "undefined" ? window : commonjsGlobal);
  }());
})(emoji, emoji.exports);
var EmojiConvertor = emoji.exports;
var emojiData = [
  {
    name: "People",
    emojis: [
      "\u{1F604}",
      "\u{1F603}",
      "\u{1F600}",
      "\u{1F60A}",
      "\u{1F609}",
      "\u{1F60D}",
      "\u{1F618}",
      "\u{1F61A}",
      "\u{1F617}",
      "\u{1F619}",
      "\u{1F61C}",
      "\u{1F61D}",
      "\u{1F61B}",
      "\u{1F633}",
      "\u{1F601}",
      "\u{1F614}",
      "\u{1F60C}",
      "\u{1F612}",
      "\u{1F61E}",
      "\u{1F623}",
      "\u{1F622}",
      "\u{1F602}",
      "\u{1F62D}",
      "\u{1F62A}",
      "\u{1F625}",
      "\u{1F630}",
      "\u{1F605}",
      "\u{1F613}",
      "\u{1F629}",
      "\u{1F62B}",
      "\u{1F628}",
      "\u{1F631}",
      "\u{1F620}",
      "\u{1F621}",
      "\u{1F624}",
      "\u{1F616}",
      "\u{1F606}",
      "\u{1F60B}",
      "\u{1F637}",
      "\u{1F60E}",
      "\u{1F634}",
      "\u{1F635}",
      "\u{1F632}",
      "\u{1F61F}",
      "\u{1F626}",
      "\u{1F627}",
      "\u{1F47F}",
      "\u{1F62E}",
      "\u{1F62C}",
      "\u{1F610}",
      "\u{1F615}",
      "\u{1F62F}",
      "\u{1F60F}",
      "\u{1F611}",
      "\u{1F472}",
      "\u{1F473}",
      "\u{1F46E}",
      "\u{1F477}",
      "\u{1F482}",
      "\u{1F476}",
      "\u{1F466}",
      "\u{1F467}",
      "\u{1F468}",
      "\u{1F469}",
      "\u{1F474}",
      "\u{1F475}",
      "\u{1F471}",
      "\u{1F47C}",
      "\u{1F478}",
      "\u{1F63A}",
      "\u{1F638}",
      "\u{1F63B}",
      "\u{1F63D}",
      "\u{1F63C}",
      "\u{1F640}",
      "\u{1F63F}",
      "\u{1F639}",
      "\u{1F63E}",
      "\u{1F479}",
      "\u{1F47A}",
      "\u{1F648}",
      "\u{1F649}",
      "\u{1F64A}",
      "\u{1F480}",
      "\u{1F47D}",
      "\u{1F4A9}",
      "\u{1F525}",
      "\u2728",
      "\u{1F31F}",
      "\u{1F4AB}",
      "\u{1F4A5}",
      "\u{1F4A2}",
      "\u{1F4A6}",
      "\u{1F4A7}",
      "\u{1F4A4}",
      "\u{1F4A8}",
      "\u{1F442}",
      "\u{1F440}",
      "\u{1F443}",
      "\u{1F445}",
      "\u{1F444}",
      "\u{1F44D}",
      "\u{1F44E}",
      "\u{1F44C}",
      "\u{1F44A}",
      "\u270A",
      "\u{1F44B}",
      "\u270B",
      "\u{1F450}",
      "\u{1F446}",
      "\u{1F447}",
      "\u{1F449}",
      "\u{1F448}",
      "\u{1F64C}",
      "\u{1F64F}",
      "\u{1F44F}",
      "\u{1F4AA}",
      "\u{1F6B6}",
      "\u{1F3C3}",
      "\u{1F483}",
      "\u{1F46B}",
      "\u{1F46A}",
      "\u{1F48F}",
      "\u{1F491}",
      "\u{1F46F}",
      "\u{1F646}",
      "\u{1F645}",
      "\u{1F481}",
      "\u{1F64B}",
      "\u{1F486}",
      "\u{1F487}",
      "\u{1F485}",
      "\u{1F470}",
      "\u{1F64E}",
      "\u{1F64D}",
      "\u{1F647}",
      "\u{1F3A9}",
      "\u{1F451}",
      "\u{1F452}",
      "\u{1F45F}",
      "\u{1F45E}",
      "\u{1F461}",
      "\u{1F460}",
      "\u{1F462}",
      "\u{1F455}",
      "\u{1F454}",
      "\u{1F45A}",
      "\u{1F457}",
      "\u{1F3BD}",
      "\u{1F456}",
      "\u{1F458}",
      "\u{1F459}",
      "\u{1F4BC}",
      "\u{1F45C}",
      "\u{1F45D}",
      "\u{1F45B}",
      "\u{1F453}",
      "\u{1F380}",
      "\u{1F302}",
      "\u{1F484}",
      "\u{1F49B}",
      "\u{1F499}",
      "\u{1F49C}",
      "\u{1F49A}",
      "\u{1F494}",
      "\u{1F497}",
      "\u{1F493}",
      "\u{1F495}",
      "\u{1F496}",
      "\u{1F49E}",
      "\u{1F498}",
      "\u{1F48C}",
      "\u{1F48B}",
      "\u{1F48D}",
      "\u{1F48E}",
      "\u{1F464}",
      "\u{1F4AC}",
      "\u{1F463}"
    ]
  },
  {
    name: "Nature",
    emojis: [
      "\u{1F436}",
      "\u{1F43A}",
      "\u{1F431}",
      "\u{1F42D}",
      "\u{1F439}",
      "\u{1F430}",
      "\u{1F438}",
      "\u{1F42F}",
      "\u{1F428}",
      "\u{1F43B}",
      "\u{1F437}",
      "\u{1F43D}",
      "\u{1F42E}",
      "\u{1F417}",
      "\u{1F435}",
      "\u{1F412}",
      "\u{1F434}",
      "\u{1F411}",
      "\u{1F418}",
      "\u{1F43C}",
      "\u{1F427}",
      "\u{1F426}",
      "\u{1F424}",
      "\u{1F425}",
      "\u{1F423}",
      "\u{1F414}",
      "\u{1F40D}",
      "\u{1F422}",
      "\u{1F41B}",
      "\u{1F41D}",
      "\u{1F41C}",
      "\u{1F41E}",
      "\u{1F40C}",
      "\u{1F419}",
      "\u{1F41A}",
      "\u{1F420}",
      "\u{1F41F}",
      "\u{1F42C}",
      "\u{1F433}",
      "\u{1F40E}",
      "\u{1F432}",
      "\u{1F421}",
      "\u{1F42B}",
      "\u{1F429}",
      "\u{1F43E}",
      "\u{1F490}",
      "\u{1F338}",
      "\u{1F337}",
      "\u{1F340}",
      "\u{1F339}",
      "\u{1F33B}",
      "\u{1F33A}",
      "\u{1F341}",
      "\u{1F343}",
      "\u{1F342}",
      "\u{1F33F}",
      "\u{1F33E}",
      "\u{1F344}",
      "\u{1F335}",
      "\u{1F334}",
      "\u{1F330}",
      "\u{1F331}",
      "\u{1F33C}",
      "\u{1F311}",
      "\u{1F313}",
      "\u{1F314}",
      "\u{1F315}",
      "\u{1F31B}",
      "\u{1F319}",
      "\u{1F30F}",
      "\u{1F30B}",
      "\u{1F30C}",
      "\u{1F320}",
      "\u26C5",
      "\u26C4",
      "\u{1F300}",
      "\u{1F301}",
      "\u{1F308}",
      "\u{1F30A}"
    ]
  },
  {
    name: "Objects",
    emojis: [
      "\u{1F38D}",
      "\u{1F49D}",
      "\u{1F38E}",
      "\u{1F392}",
      "\u{1F393}",
      "\u{1F38F}",
      "\u{1F386}",
      "\u{1F387}",
      "\u{1F390}",
      "\u{1F391}",
      "\u{1F383}",
      "\u{1F47B}",
      "\u{1F385}",
      "\u{1F384}",
      "\u{1F381}",
      "\u{1F38B}",
      "\u{1F389}",
      "\u{1F38A}",
      "\u{1F388}",
      "\u{1F38C}",
      "\u{1F52E}",
      "\u{1F3A5}",
      "\u{1F4F7}",
      "\u{1F4F9}",
      "\u{1F4FC}",
      "\u{1F4BF}",
      "\u{1F4C0}",
      "\u{1F4BD}",
      "\u{1F4BE}",
      "\u{1F4BB}",
      "\u{1F4F1}",
      "\u{1F4DE}",
      "\u{1F4DF}",
      "\u{1F4E0}",
      "\u{1F4E1}",
      "\u{1F4FA}",
      "\u{1F4FB}",
      "\u{1F50A}",
      "\u{1F514}",
      "\u{1F4E2}",
      "\u{1F4E3}",
      "\u23F3",
      "\u231B",
      "\u23F0",
      "\u231A",
      "\u{1F513}",
      "\u{1F512}",
      "\u{1F50F}",
      "\u{1F510}",
      "\u{1F511}",
      "\u{1F50E}",
      "\u{1F4A1}",
      "\u{1F526}",
      "\u{1F50C}",
      "\u{1F50B}",
      "\u{1F50D}",
      "\u{1F6C0}",
      "\u{1F6BD}",
      "\u{1F527}",
      "\u{1F529}",
      "\u{1F528}",
      "\u{1F6AA}",
      "\u{1F6AC}",
      "\u{1F4A3}",
      "\u{1F52B}",
      "\u{1F52A}",
      "\u{1F48A}",
      "\u{1F489}",
      "\u{1F4B0}",
      "\u{1F4B4}",
      "\u{1F4B5}",
      "\u{1F4B3}",
      "\u{1F4B8}",
      "\u{1F4F2}",
      "\u{1F4E7}",
      "\u{1F4E5}",
      "\u{1F4E4}",
      "\u{1F4E9}",
      "\u{1F4E8}",
      "\u{1F4EB}",
      "\u{1F4EA}",
      "\u{1F4EE}",
      "\u{1F4E6}",
      "\u{1F4DD}",
      "\u{1F4C4}",
      "\u{1F4C3}",
      "\u{1F4D1}",
      "\u{1F4CA}",
      "\u{1F4C8}",
      "\u{1F4C9}",
      "\u{1F4DC}",
      "\u{1F4CB}",
      "\u{1F4C5}",
      "\u{1F4C6}",
      "\u{1F4C7}",
      "\u{1F4C1}",
      "\u{1F4C2}",
      "\u{1F4CC}",
      "\u{1F4CE}",
      "\u{1F4CF}",
      "\u{1F4D0}",
      "\u{1F4D5}",
      "\u{1F4D7}",
      "\u{1F4D8}",
      "\u{1F4D9}",
      "\u{1F4D3}",
      "\u{1F4D4}",
      "\u{1F4D2}",
      "\u{1F4DA}",
      "\u{1F4D6}",
      "\u{1F516}",
      "\u{1F4DB}",
      "\u{1F4F0}",
      "\u{1F3A8}",
      "\u{1F3AC}",
      "\u{1F3A4}",
      "\u{1F3A7}",
      "\u{1F3BC}",
      "\u{1F3B5}",
      "\u{1F3B6}",
      "\u{1F3B9}",
      "\u{1F3BB}",
      "\u{1F3BA}",
      "\u{1F3B7}",
      "\u{1F3B8}",
      "\u{1F47E}",
      "\u{1F3AE}",
      "\u{1F0CF}",
      "\u{1F3B4}",
      "\u{1F004}",
      "\u{1F3B2}",
      "\u{1F3AF}",
      "\u{1F3C8}",
      "\u{1F3C0}",
      "\u26BD",
      "\u26BE",
      "\u{1F3BE}",
      "\u{1F3B1}",
      "\u{1F3B3}",
      "\u26F3",
      "\u{1F3C1}",
      "\u{1F3C6}",
      "\u{1F3BF}",
      "\u{1F3C2}",
      "\u{1F3CA}",
      "\u{1F3C4}",
      "\u{1F3A3}",
      "\u{1F375}",
      "\u{1F376}",
      "\u{1F37A}",
      "\u{1F37B}",
      "\u{1F378}",
      "\u{1F379}",
      "\u{1F377}",
      "\u{1F374}",
      "\u{1F355}",
      "\u{1F354}",
      "\u{1F35F}",
      "\u{1F357}",
      "\u{1F356}",
      "\u{1F35D}",
      "\u{1F35B}",
      "\u{1F364}",
      "\u{1F371}",
      "\u{1F363}",
      "\u{1F365}",
      "\u{1F359}",
      "\u{1F358}",
      "\u{1F35A}",
      "\u{1F35C}",
      "\u{1F372}",
      "\u{1F362}",
      "\u{1F361}",
      "\u{1F373}",
      "\u{1F35E}",
      "\u{1F369}",
      "\u{1F36E}",
      "\u{1F366}",
      "\u{1F368}",
      "\u{1F367}",
      "\u{1F382}",
      "\u{1F370}",
      "\u{1F36A}",
      "\u{1F36B}",
      "\u{1F36C}",
      "\u{1F36D}",
      "\u{1F36F}",
      "\u{1F34E}",
      "\u{1F34F}",
      "\u{1F34A}",
      "\u{1F352}",
      "\u{1F347}",
      "\u{1F349}",
      "\u{1F353}",
      "\u{1F351}",
      "\u{1F348}",
      "\u{1F34C}",
      "\u{1F34D}",
      "\u{1F360}",
      "\u{1F346}",
      "\u{1F345}",
      "\u{1F33D}"
    ]
  },
  {
    name: "Places",
    emojis: [
      "\u{1F3E0}",
      "\u{1F3E1}",
      "\u{1F3EB}",
      "\u{1F3E2}",
      "\u{1F3E3}",
      "\u{1F3E5}",
      "\u{1F3E6}",
      "\u{1F3EA}",
      "\u{1F3E9}",
      "\u{1F3E8}",
      "\u{1F492}",
      "\u26EA",
      "\u{1F3EC}",
      "\u{1F307}",
      "\u{1F306}",
      "\u{1F3EF}",
      "\u{1F3F0}",
      "\u26FA",
      "\u{1F3ED}",
      "\u{1F5FC}",
      "\u{1F5FE}",
      "\u{1F5FB}",
      "\u{1F304}",
      "\u{1F305}",
      "\u{1F303}",
      "\u{1F5FD}",
      "\u{1F309}",
      "\u{1F3A0}",
      "\u{1F3A1}",
      "\u26F2",
      "\u{1F3A2}",
      "\u{1F6A2}",
      "\u26F5",
      "\u{1F6A4}",
      "\u{1F680}",
      "\u{1F4BA}",
      "\u{1F689}",
      "\u{1F684}",
      "\u{1F685}",
      "\u{1F687}",
      "\u{1F683}",
      "\u{1F68C}",
      "\u{1F699}",
      "\u{1F697}",
      "\u{1F695}",
      "\u{1F69A}",
      "\u{1F6A8}",
      "\u{1F693}",
      "\u{1F692}",
      "\u{1F691}",
      "\u{1F6B2}",
      "\u{1F488}",
      "\u{1F68F}",
      "\u{1F3AB}",
      "\u{1F6A5}",
      "\u{1F6A7}",
      "\u{1F530}",
      "\u26FD",
      "\u{1F3EE}",
      "\u{1F3B0}",
      "\u{1F5FF}",
      "\u{1F3AA}",
      "\u{1F3AD}",
      "\u{1F4CD}",
      "\u{1F6A9}"
    ]
  },
  {
    name: "Symbols",
    emojis: [
      "\u{1F51F}",
      "\u{1F522}",
      "\u{1F523}",
      "\u{1F520}",
      "\u{1F521}",
      "\u{1F524}",
      "\u{1F53C}",
      "\u{1F53D}",
      "\u23EA",
      "\u23E9",
      "\u23EB",
      "\u23EC",
      "\u{1F197}",
      "\u{1F195}",
      "\u{1F199}",
      "\u{1F192}",
      "\u{1F193}",
      "\u{1F196}",
      "\u{1F4F6}",
      "\u{1F3A6}",
      "\u{1F201}",
      "\u{1F22F}",
      "\u{1F233}",
      "\u{1F235}",
      "\u{1F234}",
      "\u{1F232}",
      "\u{1F250}",
      "\u{1F239}",
      "\u{1F23A}",
      "\u{1F236}",
      "\u{1F21A}",
      "\u{1F6BB}",
      "\u{1F6B9}",
      "\u{1F6BA}",
      "\u{1F6BC}",
      "\u{1F6BE}",
      "\u{1F6AD}",
      "\u{1F238}",
      "\u{1F251}",
      "\u{1F191}",
      "\u{1F198}",
      "\u{1F194}",
      "\u{1F6AB}",
      "\u{1F51E}",
      "\u26D4",
      "\u274E",
      "\u2705",
      "\u{1F49F}",
      "\u{1F19A}",
      "\u{1F4F3}",
      "\u{1F4F4}",
      "\u{1F18E}",
      "\u{1F4A0}",
      "\u26CE",
      "\u{1F52F}",
      "\u{1F3E7}",
      "\u{1F4B9}",
      "\u{1F4B2}",
      "\u{1F4B1}",
      "\u274C",
      "\u2757",
      "\u2753",
      "\u2755",
      "\u2754",
      "\u2B55",
      "\u{1F51D}",
      "\u{1F51A}",
      "\u{1F519}",
      "\u{1F51B}",
      "\u{1F51C}",
      "\u{1F503}",
      "\u{1F55B}",
      "\u{1F550}",
      "\u{1F551}",
      "\u{1F552}",
      "\u{1F553}",
      "\u{1F554}",
      "\u{1F555}",
      "\u{1F556}",
      "\u{1F557}",
      "\u{1F558}",
      "\u{1F559}",
      "\u{1F55A}",
      "\u2795",
      "\u2796",
      "\u2797",
      "\u{1F4AE}",
      "\u{1F4AF}",
      "\u{1F518}",
      "\u{1F517}",
      "\u27B0",
      "\u{1F531}",
      "\u{1F53A}",
      "\u{1F532}",
      "\u{1F533}",
      "\u{1F534}",
      "\u{1F535}",
      "\u{1F53B}",
      "\u2B1C",
      "\u2B1B",
      "\u{1F536}",
      "\u{1F537}",
      "\u{1F538}",
      "\u{1F539}"
    ]
  }
];
var EmojiPicker_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$b = {
  props: {
    onBlur: {
      type: Function,
      required: true
    },
    onEmojiPicked: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      emojiData,
      emojiConvertor: new EmojiConvertor()
    };
  },
  mounted() {
    const elem = this.$refs.domNode;
    elem.style.opacity = 0;
    window.requestAnimationFrame(() => {
      elem.style.transition = "opacity 350ms";
      elem.style.opacity = 1;
    });
    this.$refs.domNode.focus();
    this.emojiConvertor.init_env();
  },
  methods: {
    emojiClicked(emoji2) {
      this.onEmojiPicked(emoji2);
      this.$refs.domNode.blur();
    }
  }
};
const _hoisted_1$d = { class: "sc-emoji-picker--content" };
const _hoisted_2$7 = { class: "sc-emoji-picker--category-title" };
const _hoisted_3$6 = ["onClick"];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "domNode",
    tabIndex: "0",
    class: "sc-emoji-picker",
    onBlur: _cache[0] || (_cache[0] = (...args) => $props.onBlur && $props.onBlur(...args))
  }, [
    createElementVNode("div", _hoisted_1$d, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.emojiData, (category) => {
        return openBlock(), createElementBlock("div", {
          key: category.name,
          class: "sc-emoji-picker--category"
        }, [
          createElementVNode("div", _hoisted_2$7, toDisplayString(category.name), 1),
          (openBlock(true), createElementBlock(Fragment, null, renderList(category.emojis, (emoji2) => {
            return openBlock(), createElementBlock("span", {
              key: emoji2,
              class: "sc-emoji-picker--emoji",
              onClick: ($event) => $options.emojiClicked(emoji2)
            }, toDisplayString(emoji2), 9, _hoisted_3$6);
          }), 128))
        ]);
      }), 128))
    ])
  ], 544);
}
var EmojiPicker = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__scopeId", "data-v-b46a1b52"]]);
var EmojiIcon_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$a = {
  components: {
    EmojiPicker
  },
  props: {
    onEmojiPicked: {
      type: Function,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    _openPicker(e) {
      this.isActive = !this.isActive;
    },
    _handlePickerBlur() {
      this.isActive = false;
    }
  }
};
const _hoisted_1$c = { class: "sc-user-input--picker-wrapper" };
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_EmojiPicker = resolveComponent("EmojiPicker");
  return openBlock(), createElementBlock("div", _hoisted_1$c, [
    $data.isActive ? (openBlock(), createBlock(_component_EmojiPicker, {
      key: 0,
      "on-emoji-picked": $props.onEmojiPicked,
      "on-blur": $options._handlePickerBlur
    }, null, 8, ["on-emoji-picked", "on-blur"])) : createCommentVNode("", true),
    createElementVNode("button", {
      class: "sc-user-input--emoji-icon-wrapper",
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options._openPicker && $options._openPicker(...args), ["prevent"]))
    }, [
      (openBlock(), createElementBlock("svg", {
        id: "Layer_2",
        class: normalizeClass(["sc-user-input--emoji-icon", { active: $data.isActive }]),
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "37.393px",
        height: "37.393px",
        viewBox: "0 0 37.393 37.393",
        enableBackground: "new 0 0 37.393 37.393"
      }, [
        createElementVNode("g", null, [
          createElementVNode("path", {
            style: normalizeStyle({ fill: $props.color }),
            d: "M18.696,37.393C8.387,37.393,0,29.006,0,18.696C0,8.387,8.387,0,18.696,0c10.31,0,18.696,8.387,18.696,18.696\n              C37.393,29.006,29.006,37.393,18.696,37.393z M18.696,2C9.49,2,2,9.49,2,18.696c0,9.206,7.49,16.696,16.696,16.696\n              c9.206,0,16.696-7.49,16.696-16.696C35.393,9.49,27.902,2,18.696,2z"
          }, null, 4)
        ]),
        createElementVNode("g", null, [
          createElementVNode("circle", {
            cx: "12.379",
            cy: "14.359",
            r: "1.938",
            style: normalizeStyle({ fill: $props.color })
          }, null, 4)
        ]),
        createElementVNode("g", null, [
          createElementVNode("circle", {
            cx: "24.371",
            cy: "14.414",
            r: "1.992",
            style: normalizeStyle({ fill: $props.color })
          }, null, 4)
        ]),
        createElementVNode("g", null, [
          createElementVNode("path", {
            style: normalizeStyle({ fill: $props.color }),
            d: "M18.035,27.453c-5.748,0-8.342-4.18-8.449-4.357c-0.286-0.473-0.135-1.087,0.338-1.373\n              c0.471-0.286,1.084-0.136,1.372,0.335c0.094,0.151,2.161,3.396,6.74,3.396c4.713,0,7.518-3.462,7.545-3.497\n              c0.343-0.432,0.973-0.504,1.405-0.161c0.433,0.344,0.505,0.973,0.161,1.405C27.009,23.374,23.703,27.453,18.035,27.453z"
          }, null, 4)
        ])
      ], 2))
    ])
  ]);
}
var EmojiIcon = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__scopeId", "data-v-0268a584"]]);
var FileIcons_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$9 = {
  props: {
    onChange: {
      type: Function,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  methods: {
    _handleClick(e) {
      e.target.value = null;
    },
    _handleChange(e) {
      this.onChange(e.target.files[0]);
    }
  }
};
const _hoisted_1$b = { style: { "position": "relative" } };
const _hoisted_2$6 = {
  class: "sc-user-input--file-icon-wrapper",
  type: "button"
};
const _hoisted_3$5 = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  class: "sc-user-input--file-icon",
  x: "0px",
  y: "0px",
  width: "24px",
  height: "24px",
  viewBox: "0 0 37.393 37.393",
  enableBackground: "new 0 0 37.393 37.393"
};
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$b, [
    createElementVNode("button", _hoisted_2$6, [
      (openBlock(), createElementBlock("svg", _hoisted_3$5, [
        createElementVNode("path", {
          style: normalizeStyle({ fill: $props.color }),
          d: "M20.807 10.22l-2.030-2.029-10.15 10.148c-1.682 1.681-1.682 4.408 0 6.089s4.408 1.681 6.090 0l12.18-12.178c2.804-2.802 2.804-7.346 0-10.148-2.802-2.803-7.347-2.803-10.149 0l-12.788 12.787c-0.009 0.009-0.019 0.018-0.027 0.026-3.909 3.909-3.909 10.245 0 14.153 3.908 3.908 10.246 3.908 14.156 0 0.009-0.009 0.016-0.018 0.026-0.027l0.001 0.001 8.729-8.728-2.031-2.029-8.729 8.727c-0.009 0.008-0.018 0.018-0.026 0.026-2.784 2.783-7.312 2.783-10.096 0-2.783-2.783-2.783-7.31 0-10.093 0.010-0.009 0.019-0.018 0.028-0.026l-0.001-0.002 12.79-12.786c1.678-1.679 4.411-1.679 6.090 0s1.678 4.411 0 6.089l-12.18 12.178c-0.56 0.56-1.47 0.56-2.030 0-0.559-0.559-0.559-1.47 0-2.029l10.15-10.149z"
        }, null, 4)
      ])),
      createElementVNode("input", {
        id: "file-input",
        type: "file",
        onChange: _cache[0] || (_cache[0] = (...args) => $options._handleChange && $options._handleChange(...args)),
        onClick: _cache[1] || (_cache[1] = (...args) => $options._handleClick && $options._handleClick(...args))
      }, null, 32)
    ])
  ]);
}
var FileIcons = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-57681c9b"]]);
const _sfc_main$8 = {};
const _hoisted_1$a = {
  width: "22",
  height: "22",
  viewBox: "0 0 22 22",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("g", { id: "SVG" }, [
  /* @__PURE__ */ createElementVNode("path", {
    id: "Vector",
    d: "M6.66602 10.1334L10.9993 5.80005L15.3327 10.1334M10.9993 16.2V6.66672",
    stroke: "white",
    "stroke-width": "1.73333",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1);
const _hoisted_3$4 = [
  _hoisted_2$5
];
function _sfc_render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$4);
}
var IconUpload = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
var UserInputButton_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = {
  components: {
    IconUpload
  },
  props: {
    color: {
      type: String,
      required: true
    },
    tooltip: {
      type: String,
      default: ""
    }
  }
};
const _hoisted_1$9 = { class: "sc-user-input--button-icon-wrapper" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconUpload = resolveComponent("IconUpload");
  return openBlock(), createElementBlock("button", _hoisted_1$9, [
    createVNode(_component_IconUpload, {
      color: $props.color,
      class: "sc-user-input--button-icon",
      "icon-name": $props.tooltip
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]),
      _: 3
    }, 8, ["color", "icon-name"])
  ]);
}
var UserInputButton = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-354f06f4"]]);
var Suggestions_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = {
  props: {
    suggestions: {
      type: Array,
      default: () => []
    },
    colors: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  }
};
const _hoisted_1$8 = ["onClick"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "sc-suggestions-row",
    style: normalizeStyle({ background: $props.colors.messageList.bg })
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.suggestions, (suggestion, idx) => {
      return openBlock(), createElementBlock("button", {
        key: idx,
        class: "sc-suggestions-element",
        style: normalizeStyle({
          borderColor: $props.colors.sentMessage.bg,
          color: $props.colors.sentMessage.bg
        }),
        onClick: ($event) => _ctx.$emit("sendSuggestion", suggestion)
      }, toDisplayString(suggestion), 13, _hoisted_1$8);
    }), 128))
  ], 4);
}
var Suggestions = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
var FileIcon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNTYgNTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2IDU2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGlkPSJzdmdfMSI+CiAgIDxwYXRoIGlkPSJzdmdfMiIgZmlsbD0iI0U5RTlFMCIgZD0ibTM2Ljk4NSwwbC0yOS4wMjIsMGMtMC44MDgsMCAtMS40NjMsMC42NTUgLTEuNDYzLDEuOTI2bDAsNTMuMDc0YzAsMC4zNDUgMC42NTUsMSAxLjQ2MywxbDQwLjA3NCwwYzAuODA4LDAgMS40NjMsLTAuNjU1IDEuNDYzLC0xbDAsLTQyLjAyMmMwLC0wLjY5NiAtMC4wOTMsLTAuOTIgLTAuMjU3LC0xLjA4NWwtMTEuNjM2LC0xMS42MzZjLTAuMTY1LC0wLjE2NCAtMC4zODksLTAuMjU3IC0wLjYyMiwtMC4yNTd6Ii8+CiAgIDxwb2x5Z29uIGlkPSJzdmdfMyIgZmlsbD0iI0Q5RDdDQSIgcG9pbnRzPSIzNy41LDAuMTUxIDM3LjUsMTIgNDkuMzQ5LDEyICAiLz4KICAgPHBhdGggaWQ9InN2Z180IiBmaWxsPSIjOTVBNUE1IiBkPSJtNDguMDM3LDU2bC00MC4wNzQsMGMtMC44MDgsMCAtMS40NjMsLTAuNjU1IC0xLjQ2MywtMS40NjNsMCwtMTUuNTM3bDQzLDBsMCwxNS41MzdjMCwwLjgwOCAtMC42NTUsMS40NjMgLTEuNDYzLDEuNDYzeiIvPgogICA8cGF0aCBpZD0ic3ZnXzkiIGZpbGw9IiNDOEJEQjgiIGQ9Im0xOC41LDEzbC02LDBjLTAuNTUzLDAgLTEsLTAuNDQ4IC0xLC0xczAuNDQ3LC0xIDEsLTFsNiwwYzAuNTUzLDAgMSwwLjQ0OCAxLDFzLTAuNDQ3LDEgLTEsMXoiLz4KICAgPHBhdGggaWQ9InN2Z18xMCIgZmlsbD0iI0M4QkRCOCIgZD0ibTIxLjUsMThsLTksMGMtMC41NTMsMCAtMSwtMC40NDggLTEsLTFzMC40NDcsLTEgMSwtMWw5LDBjMC41NTMsMCAxLDAuNDQ4IDEsMXMtMC40NDcsMSAtMSwxeiIvPgogICA8cGF0aCBpZD0ic3ZnXzExIiBmaWxsPSIjQzhCREI4IiBkPSJtMjUuNSwxOGMtMC4yNiwwIC0wLjUyMSwtMC4xMSAtMC43MSwtMC4yOWMtMC4xODEsLTAuMTkgLTAuMjksLTAuNDQgLTAuMjksLTAuNzFzMC4xMDksLTAuNTIgMC4zLC0wLjcxYzAuMzYsLTAuMzcgMS4wNCwtMC4zNyAxLjQxLDBjMC4xOCwwLjE5IDAuMjksMC40NSAwLjI5LDAuNzFjMCwwLjI2IC0wLjExLDAuNTIgLTAuMjksMC43MWMtMC4xOSwwLjE4IC0wLjQ1LDAuMjkgLTAuNzEsMC4yOXoiLz4KICAgPHBhdGggaWQ9InN2Z18xMiIgZmlsbD0iI0M4QkRCOCIgZD0ibTM3LjUsMThsLTgsMGMtMC41NTMsMCAtMSwtMC40NDggLTEsLTFzMC40NDcsLTEgMSwtMWw4LDBjMC41NTMsMCAxLDAuNDQ4IDEsMXMtMC40NDcsMSAtMSwxeiIvPgogICA8cGF0aCBpZD0ic3ZnXzEzIiBmaWxsPSIjQzhCREI4IiBkPSJtMTIuNSwzM2MtMC4yNiwwIC0wLjUyMSwtMC4xMSAtMC43MSwtMC4yOWMtMC4xODEsLTAuMTkgLTAuMjksLTAuNDUgLTAuMjksLTAuNzFjMCwtMC4yNiAwLjEwOSwtMC41MiAwLjI5LC0wLjcxYzAuMzcsLTAuMzcgMS4wNSwtMC4zNyAxLjQyLDAuMDFjMC4xOCwwLjE4IDAuMjksMC40NCAwLjI5LDAuN2MwLDAuMjYgLTAuMTEsMC41MiAtMC4yOSwwLjcxYy0wLjE5LDAuMTggLTAuNDUsMC4yOSAtMC43MSwwLjI5eiIvPgogICA8cGF0aCBpZD0ic3ZnXzE0IiBmaWxsPSIjQzhCREI4IiBkPSJtMjQuNSwzM2wtOCwwYy0wLjU1MywwIC0xLC0wLjQ0OCAtMSwtMXMwLjQ0NywtMSAxLC0xbDgsMGMwLjU1MywwIDEsMC40NDggMSwxcy0wLjQ0NywxIC0xLDF6Ii8+CiAgIDxwYXRoIGlkPSJzdmdfMTUiIGZpbGw9IiNDOEJEQjgiIGQ9Im00My41LDE4bC0yLDBjLTAuNTUzLDAgLTEsLTAuNDQ4IC0xLC0xczAuNDQ3LC0xIDEsLTFsMiwwYzAuNTUzLDAgMSwwLjQ0OCAxLDFzLTAuNDQ3LDEgLTEsMXoiLz4KICAgPHBhdGggaWQ9InN2Z18xNiIgZmlsbD0iI0M4QkRCOCIgZD0ibTM0LjUsMjNsLTIyLDBjLTAuNTUzLDAgLTEsLTAuNDQ4IC0xLC0xczAuNDQ3LC0xIDEsLTFsMjIsMGMwLjU1MywwIDEsMC40NDggMSwxcy0wLjQ0NywxIC0xLDF6Ii8+CiAgIDxwYXRoIGlkPSJzdmdfMTciIGZpbGw9IiNDOEJEQjgiIGQ9Im00My41LDIzbC02LDBjLTAuNTUzLDAgLTEsLTAuNDQ4IC0xLC0xczAuNDQ3LC0xIDEsLTFsNiwwYzAuNTUzLDAgMSwwLjQ0OCAxLDFzLTAuNDQ3LDEgLTEsMXoiLz4KICAgPHBhdGggaWQ9InN2Z18xOCIgZmlsbD0iI0M4QkRCOCIgZD0ibTE2LjUsMjhsLTQsMGMtMC41NTMsMCAtMSwtMC40NDggLTEsLTFzMC40NDcsLTEgMSwtMWw0LDBjMC41NTMsMCAxLDAuNDQ4IDEsMXMtMC40NDcsMSAtMSwxeiIvPgogICA8cGF0aCBpZD0ic3ZnXzE5IiBmaWxsPSIjQzhCREI4IiBkPSJtMzAuNSwyOGwtMTAsMGMtMC41NTMsMCAtMSwtMC40NDggLTEsLTFzMC40NDcsLTEgMSwtMWwxMCwwYzAuNTUzLDAgMSwwLjQ0OCAxLDFzLTAuNDQ3LDEgLTEsMXoiLz4KICAgPHBhdGggaWQ9InN2Z18yMCIgZmlsbD0iI0M4QkRCOCIgZD0ibTQzLjUsMjhsLTksMGMtMC41NTMsMCAtMSwtMC40NDggLTEsLTFzMC40NDcsLTEgMSwtMWw5LDBjMC41NTMsMCAxLDAuNDQ4IDEsMXMtMC40NDcsMSAtMSwxeiIvPgogIDwvZz4KICA8ZyBpZD0ic3ZnXzIxIi8+CiAgPGcgaWQ9InN2Z18yMiIvPgogIDxnIGlkPSJzdmdfMjMiLz4KICA8ZyBpZD0ic3ZnXzI0Ii8+CiAgPGcgaWQ9InN2Z18yNSIvPgogIDxnIGlkPSJzdmdfMjYiLz4KICA8ZyBpZD0ic3ZnXzI3Ii8+CiAgPGcgaWQ9InN2Z18yOCIvPgogIDxnIGlkPSJzdmdfMjkiLz4KICA8ZyBpZD0ic3ZnXzMwIi8+CiAgPGcgaWQ9InN2Z18zMSIvPgogIDxnIGlkPSJzdmdfMzIiLz4KICA8ZyBpZD0ic3ZnXzMzIi8+CiAgPGcgaWQ9InN2Z18zNCIvPgogIDxnIGlkPSJzdmdfMzUiLz4KPC9zdmc+";
const _sfc_main$5 = {};
const _hoisted_1$7 = { d: "M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" };
function _sfc_render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("path", _hoisted_1$7);
}
var IconOk = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = {};
const _hoisted_1$6 = { d: "M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z" };
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("path", _hoisted_1$6);
}
var IconSend = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var UserInput_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  components: {
    EmojiIcon,
    FileIcons,
    UserInputButton,
    Suggestions,
    IconCross,
    IconOk,
    IconSend
  },
  props: {
    icons: {
      type: Object,
      default: function() {
        return {
          file: {
            img: FileIcon,
            name: "default"
          },
          closeSvg: {
            img: CloseIconSvg,
            name: "default"
          }
        };
      }
    },
    showEmoji: {
      type: Boolean,
      default: () => false
    },
    showEmojiInText: {
      type: Boolean,
      default: () => false
    },
    suggestions: {
      type: Array,
      default: () => []
    },
    showFile: {
      type: Boolean,
      default: () => false
    },
    onSubmit: {
      type: Function,
      required: true
    },
    placeholder: {
      type: String,
      default: "Write something..."
    },
    colors: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      file: null,
      inputActive: false,
      prevSelectionRange: null
    };
  },
  computed: {
    editMessageId() {
      return this.isEditing && store.state.editMessage.id;
    },
    isEditing() {
      return store.state.editMessage && store.state.editMessage.id;
    }
  },
  watch: {
    editMessageId(m) {
      if (store.state.editMessage != null && store.state.editMessage != void 0) {
        this.$refs.userInput.focus();
        this.$refs.userInput.textContent = store.state.editMessage.data.text;
      } else {
        this.$refs.userInput.textContent = "";
      }
    }
  },
  mounted() {
    this.$event.$on("focusUserInput", () => {
      if (this.$refs.userInput) {
        this.focusUserInput();
      }
    });
    document.addEventListener("selectionchange", () => {
      const selection = document.getSelection();
      if (!selection || !selection.anchorNode || selection.anchorNode != this.$refs.userInput && selection.anchorNode.parentNode != this.$refs.userInput) {
        return;
      }
      if (selection.rangeCount) {
        this.prevSelectionRange = selection.getRangeAt(0).cloneRange();
      } else {
        this.prevSelectionRange = null;
      }
    });
  },
  methods: {
    cancelFile() {
      this.file = null;
    },
    setInputActive(onoff) {
      this.inputActive = onoff;
    },
    handleKey(event) {
      if (event.keyCode === 13 && !event.shiftKey) {
        if (!this.isEditing) {
          this._submitText(event);
        } else {
          this._editText(event);
        }
        this._editFinish();
        event.preventDefault();
      } else if (event.keyCode === 27) {
        this._editFinish();
        event.preventDefault();
      }
    },
    handleInput(event) {
      this.$emit("onType", event.target.textContent);
    },
    focusUserInput() {
      this.$nextTick(() => {
        this.$refs.userInput.focus();
      });
    },
    _submitSuggestion(suggestion) {
      this.onSubmit({ author: "me", type: "text", data: { text: suggestion } });
    },
    _checkSubmitSuccess(success) {
      if (Promise !== void 0) {
        Promise.resolve(success).then(
          function(wasSuccessful) {
            if (wasSuccessful === void 0 || wasSuccessful) {
              this.file = null;
              this.$refs.userInput.innerHTML = "";
            }
          }.bind(this)
        );
      } else {
        this.file = null;
        this.$refs.userInput.innerHTML = "";
      }
    },
    _submitText(event) {
      const text = this.$refs.userInput.textContent;
      const file = this.file;
      if (file) {
        this._submitTextWhenFile(event, text, file);
      } else {
        if (text && text.length > 0) {
          this._checkSubmitSuccess(
            this.onSubmit({
              author: "me",
              type: "text",
              data: { text }
            })
          );
        }
      }
    },
    _submitTextWhenFile(event, text, file) {
      if (text && text.length > 0) {
        this._checkSubmitSuccess(
          this.onSubmit({
            author: "me",
            type: "file",
            data: { text, file }
          })
        );
      } else {
        this._checkSubmitSuccess(
          this.onSubmit({
            author: "me",
            type: "file",
            data: { file }
          })
        );
      }
    },
    _editText(event) {
      const text = this.$refs.userInput.textContent;
      if (text && text.length) {
        this.$emit("edit", {
          author: "me",
          type: "text",
          id: store.state.editMessage.id,
          data: { text }
        });
        this._editFinish();
      }
    },
    _handleEmojiPicked(emoji2) {
      if (this.showEmojiInText) {
        this._addToTextEmoji(emoji2);
      } else {
        this._submitEmoji(emoji2);
      }
    },
    _submitEmoji(emoji2) {
      this._checkSubmitSuccess(
        this.onSubmit({
          author: "me",
          type: "emoji",
          data: { emoji: emoji2 }
        })
      );
    },
    _addToTextEmoji(emoji2) {
      let range = this.prevSelectionRange;
      if (!range) {
        if (!this.$refs.userInput.firstChild) {
          this.$refs.userInput.append(document.createTextNode(""));
        }
        range = document.createRange();
        range.setStart(this.$refs.userInput.firstChild, this.$refs.userInput.textContent.length);
        range.collapse(true);
      }
      let selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      let textNode = document.createTextNode(emoji2);
      range.deleteContents();
      range.insertNode(textNode);
      range.collapse(false);
      this.$refs.userInput.focus();
    },
    _handleFileSubmit(file) {
      this.file = file;
    },
    _editFinish() {
      store.setState("editMessage", null);
    }
  }
};
const _hoisted_1$5 = { class: "sc-user-input-wrap" };
const _hoisted_2$4 = { class: "icon-file-message" };
const _hoisted_3$3 = ["src", "alt"];
const _hoisted_4$1 = ["src", "alt"];
const _hoisted_5$1 = ["placeholder"];
const _hoisted_6$1 = { class: "sc-user-input--buttons" };
const _hoisted_7$1 = {
  key: 0,
  class: "sc-user-input--button"
};
const _hoisted_8 = { class: "sc-user-input--button" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconCross = resolveComponent("IconCross");
  const _component_UserInputButton = resolveComponent("UserInputButton");
  const _component_IconOk = resolveComponent("IconOk");
  const _component_IconSend = resolveComponent("IconSend");
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    $data.file ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "file-container",
      style: normalizeStyle({
        backgroundColor: $props.colors.userInput.text,
        color: $props.colors.userInput.bg
      })
    }, [
      createElementVNode("span", _hoisted_2$4, [
        createElementVNode("img", {
          src: $props.icons.file.img,
          alt: $props.icons.file.name,
          height: "15"
        }, null, 8, _hoisted_3$3)
      ]),
      createTextVNode(" " + toDisplayString($data.file.name) + " ", 1),
      createElementVNode("span", {
        class: "delete-file-message",
        onClick: _cache[0] || (_cache[0] = ($event) => $options.cancelFile())
      }, [
        createElementVNode("img", {
          src: $props.icons.closeSvg.img,
          alt: $props.icons.closeSvg.name,
          height: "10",
          title: "Remove the file"
        }, null, 8, _hoisted_4$1)
      ])
    ], 4)) : createCommentVNode("", true),
    createElementVNode("form", {
      class: normalizeClass(["sc-user-input", { active: $data.inputActive }]),
      style: normalizeStyle({ background: $props.colors.userInput.bg })
    }, [
      createElementVNode("div", {
        ref: "userInput",
        role: "button",
        tabIndex: "0",
        contentEditable: "true",
        placeholder: $props.placeholder,
        class: "sc-user-input--text",
        style: normalizeStyle({ color: $props.colors.userInput.text }),
        onFocus: _cache[1] || (_cache[1] = ($event) => $options.setInputActive(true)),
        onBlur: _cache[2] || (_cache[2] = ($event) => $options.setInputActive(false)),
        onKeydown: _cache[3] || (_cache[3] = (...args) => $options.handleKey && $options.handleKey(...args)),
        onInput: _cache[4] || (_cache[4] = (...args) => $options.handleInput && $options.handleInput(...args)),
        "on:focusUserInput": _cache[5] || (_cache[5] = ($event) => $options.focusUserInput())
      }, null, 44, _hoisted_5$1),
      createElementVNode("div", _hoisted_6$1, [
        $options.isEditing ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
          createVNode(_component_UserInputButton, {
            color: $props.colors.userInput.text,
            tooltip: "cancel",
            onClick: withModifiers($options._editFinish, ["prevent"])
          }, {
            default: withCtx(() => [
              createVNode(_component_IconCross)
            ]),
            _: 1
          }, 8, ["color", "onClick"])
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_8, [
          $options.isEditing ? (openBlock(), createBlock(_component_UserInputButton, {
            key: 0,
            color: $props.colors.userInput.text,
            tooltip: "Edit",
            onClick: withModifiers($options._editText, ["prevent"])
          }, {
            default: withCtx(() => [
              createVNode(_component_IconOk)
            ]),
            _: 1
          }, 8, ["color", "onClick"])) : (openBlock(), createBlock(_component_UserInputButton, {
            key: 1,
            color: $props.colors.userInput.text,
            tooltip: "Send",
            onClick: withModifiers($options._submitText, ["prevent"])
          }, {
            default: withCtx(() => [
              createVNode(_component_IconSend)
            ]),
            _: 1
          }, 8, ["color", "onClick"]))
        ])
      ])
    ], 6)
  ]);
}
var UserInput = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var UserList_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = {
  props: {
    participants: {
      type: Array,
      required: true
    },
    colors: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    userListColor() {
      const defaultColors = {
        userList: {
          bg: "#FFFFFF",
          text: "#000000"
        }
      };
      return Object.assign(defaultColors, this.colors);
    }
  }
};
const _hoisted_1$4 = { style: { "padding-top": "5px" } };
const _hoisted_2$3 = { style: { "text-align": "center" } };
const _hoisted_3$2 = ["src"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "user-list",
    style: normalizeStyle({ background: $options.userListColor.userList.bg })
  }, [
    createElementVNode("table", _hoisted_1$4, [
      createElementVNode("tbody", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.participants, (user) => {
          return openBlock(), createElementBlock("tr", {
            key: user.id
          }, [
            createElementVNode("td", _hoisted_2$3, [
              createElementVNode("img", {
                src: user.imageUrl,
                class: "img-msg"
              }, null, 8, _hoisted_3$2)
            ]),
            createElementVNode("td", {
              class: "user-element",
              style: normalizeStyle({ color: $options.userListColor.userList.text })
            }, toDisplayString(user.name), 5)
          ]);
        }), 128))
      ])
    ])
  ], 4);
}
var UserList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-2d658214"]]);
var ChatWindow_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = {
  components: {
    Header,
    MessageList,
    UserInput,
    UserList
  },
  props: {
    showEmoji: {
      type: Boolean,
      default: false
    },
    showEmojiInText: {
      type: Boolean,
      default: false
    },
    showFile: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    participants: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    onUserInputSubmit: {
      type: Function,
      required: true
    },
    messageList: {
      type: Array,
      default: () => []
    },
    isOpen: {
      type: Boolean,
      default: () => false
    },
    placeholder: {
      type: String,
      required: true
    },
    showTypingIndicator: {
      type: String,
      required: true
    },
    colors: {
      type: Object,
      required: true
    },
    alwaysScrollToBottom: {
      type: Boolean,
      required: true
    },
    messageStyling: {
      type: Boolean,
      required: true
    },
    showConfirmationDeletion: {
      type: Boolean,
      required: true
    },
    confirmationDeletionMessage: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showUserList: false
    };
  },
  computed: {
    messages() {
      let messages = this.messageList;
      return messages;
    }
  },
  methods: {
    handleUserListToggle(showUserList) {
      this.showUserList = showUserList;
    },
    getSuggestions() {
      return this.messages.length > 0 ? this.messages[this.messages.length - 1].suggestions : [];
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Header = resolveComponent("Header");
  const _component_UserList = resolveComponent("UserList");
  const _component_MessageList = resolveComponent("MessageList");
  const _component_UserInput = resolveComponent("UserInput");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["sc-chat-window", { opened: $props.isOpen, closed: !$props.isOpen }])
  }, [
    $props.showHeader ? (openBlock(), createBlock(_component_Header, {
      key: 0,
      title: $props.title,
      colors: $props.colors,
      onClose: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
      onUserList: $options.handleUserListToggle
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "header", {}, void 0, true)
      ]),
      _: 3
    }, 8, ["title", "colors", "onUserList"])) : createCommentVNode("", true),
    $data.showUserList ? (openBlock(), createBlock(_component_UserList, {
      key: 1,
      colors: $props.colors,
      participants: $props.participants
    }, null, 8, ["colors", "participants"])) : createCommentVNode("", true),
    !$data.showUserList ? (openBlock(), createBlock(_component_MessageList, {
      key: 2,
      messages: $options.messages,
      participants: $props.participants,
      "show-typing-indicator": $props.showTypingIndicator,
      colors: $props.colors,
      "always-scroll-to-bottom": $props.alwaysScrollToBottom,
      "show-confirmation-deletion": $props.showConfirmationDeletion,
      "confirmation-deletion-message": $props.confirmationDeletionMessage,
      "message-styling": $props.messageStyling,
      onScrollToTop: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("scrollToTop")),
      onRemove: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("remove", $event))
    }, {
      "user-avatar": withCtx((scopedProps) => [
        renderSlot(_ctx.$slots, "user-avatar", {
          user: scopedProps.user,
          message: scopedProps.message
        }, void 0, true)
      ]),
      "text-message-body": withCtx((scopedProps) => [
        renderSlot(_ctx.$slots, "text-message-body", {
          message: scopedProps.message,
          messageText: scopedProps.messageText,
          messageColors: scopedProps.messageColors,
          me: scopedProps.me
        }, void 0, true)
      ]),
      "system-message-body": withCtx((scopedProps) => [
        renderSlot(_ctx.$slots, "system-message-body", {
          message: scopedProps.message
        }, void 0, true)
      ]),
      "text-message-toolbox": withCtx((scopedProps) => [
        renderSlot(_ctx.$slots, "text-message-toolbox", {
          message: scopedProps.message,
          me: scopedProps.me
        }, void 0, true)
      ]),
      _: 3
    }, 8, ["messages", "participants", "show-typing-indicator", "colors", "always-scroll-to-bottom", "show-confirmation-deletion", "confirmation-deletion-message", "message-styling"])) : createCommentVNode("", true),
    !$data.showUserList ? (openBlock(), createBlock(_component_UserInput, {
      key: 3,
      "show-emoji": $props.showEmoji,
      "show-emoji-in-text": $props.showEmojiInText,
      "on-submit": $props.onUserInputSubmit,
      suggestions: $options.getSuggestions(),
      "show-file": $props.showFile,
      placeholder: $props.placeholder,
      colors: $props.colors,
      onOnType: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("onType", $event)),
      onEdit: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("edit", $event))
    }, null, 8, ["show-emoji", "show-emoji-in-text", "on-submit", "suggestions", "show-file", "placeholder", "colors"])) : createCommentVNode("", true)
  ], 2);
}
var ChatWindow = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-89ac169e"]]);
var CloseIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAKVQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////uP3jVQAAADd0Uk5TAE9lCAXd9XA4y/9zDQJG7HYB8Hc3yHoPQ8fuezMSoYPrEcEugj0tqb6G+Lw5ifHcKk3SIAx/MjRpS8YAAADsSURBVHic7dDJDoIwEIDhQURwQNGiIBVkUQH3BfX9H00MEvHW9qj9L3RIvkxTAJlMJvu1lI7aHtWOwm67Wk9vz3pP67Jro4+m1QyWiX2D3cJgqNmjt7ZGtjYccGAYK8R26qNjE2XMY6smU3Q9AM/F6YSTVrtnPp173pz6M969Lx1Q6rqUBgK2KvAR/UCIAoQLxEUoiCMSxyQSokmE6XKZYpQI2BVJ1wDrlKz4dXXn7PXN+G8e5lhk9TErMOd6tXCz3e2bYb/bbnj04Xg6f6bz6Xhgtxe8lu25vOKFGd/uj+8fj/uNfbVMJpP9QU/STxAzeUFqVwAAAABJRU5ErkJggg==";
var OpenIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiPjxyZWN0IGlkPSJiYWNrZ3JvdW5kcmVjdCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgeD0iMCIgeT0iMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIi8+PGRlZnM+PHN0eWxlPi5he2ZpbGw6bm9uZTt9LmJ7ZmlsbDojNGU4Y2ZmO30uY3tjbGlwLXBhdGg6dXJsKCNhKTt9LmR7ZmlsbDojZmZmO30uZXtmaWxsOiNlZmY0Zjk7fTwvc3R5bGU+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBjbGFzcz0iYSIgZD0iTSAwIDAgSCAxNy41NTUgdiAxNy41NTUgSCAwIFoiIGlkPSJzdmdfMSIgdHJhbnNmb3JtPSIiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PGcgaWQ9InN2Z18yIiBjbGFzcz0ic2VsZWN0ZWQiIHRyYW5zZm9ybT0iIj48ZyBpZD0ic3ZnXzMiIHRyYW5zZm9ybT0iIj48ZyBjbGFzcz0iYyIgaWQ9InN2Z180IiB0cmFuc2Zvcm09IiI+PGcgaWQ9InN2Z181IiB0cmFuc2Zvcm09IiI+PHBhdGggY2xhc3M9ImQiIGQ9Ik0gMTcuNTU2IDguNzc4NDIgYSA4Ljc3OCA4Ljc3OCAwIDAgMCAtOC43NzggLTguNzc4IGEgOC43NzggOC43NzggMCAwIDAgLTguNzc4IDguNzc4IGEgOC43NDUgOC43NDUgMCAwIDAgMi4yNiA1Ljg3OSB2IDEuNDQyIGMgMCAwLjggMC40OTIgMS40NTcgMS4xIDEuNDU3IGggNS44MyBhIDAuODQzIDAuODQzIDAgMCAwIDAuMTgzIC0wLjAyIGEgOC43NzggOC43NzggMCAwIDAgOC4xODQgLTguNzU3IiBpZD0ic3ZnXzYiIHRyYW5zZm9ybT0iIi8+PC9nPjxnIGlkPSJzdmdfNyIgdHJhbnNmb3JtPSIiPjxwYXRoIGNsYXNzPSJlIiBkPSJNIDMuMTYxNDggOC45MjEgYSA5LjI5MiA5LjI5MiAwIDAgMSA2LjM4IC04Ljg4OCBjIC0wLjI1MiAtMC4wMjIgLTAuNTA2IC0wLjAzMyAtMC43NjMgLTAuMDMzIGEgOC43NzQgOC43NzQgMCAwIDAgLTguNzc4IDguNzc4IEEgOS41MDggOS41MDggMCAwIDAgMi4yMjQ0NyAxNC43MDAzIGMgMC4wMDUgMCAwIDAuMDA5IDAgMC4wMSBjIC0wLjMxMSAwLjM1MiAtMS45MjQgMi44NDkgMC4wMjEgMi44NDkgaCAyLjI1IGMgLTEuMjMgLTAuMDIyIDEuMjYzIC0yLjEwNyAwLjI2OSAtMy40OTQgYSA4LjIyNSA4LjIyNSAwIDAgMSAtMS42IC01LjE0MSIgaWQ9InN2Z184IiB0cmFuc2Zvcm09IiIvPjwvZz48L2c+PC9nPjwvZz48L2c+PC9zdmc+";
var Launcher_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  components: {
    ChatWindow
  },
  props: {
    icons: {
      type: Object,
      default: function() {
        return {
          open: {
            img: OpenIcon,
            name: "default"
          },
          close: {
            img: CloseIcon,
            name: "default"
          }
        };
      }
    },
    showEmoji: {
      type: Boolean,
      default: false
    },
    autoFocus: {
      type: Boolean,
      default: true
    },
    showEmojiInText: {
      type: Boolean,
      default: false
    },
    showEdition: {
      type: Boolean,
      default: false
    },
    showDeletion: {
      type: Boolean,
      default: false
    },
    showConfirmationDeletion: {
      type: Boolean,
      default: false
    },
    confirmationDeletionMessage: {
      type: String,
      default: "Do you really want to delete the message?"
    },
    isOpen: {
      type: Boolean,
      required: true
    },
    open: {
      type: Function,
      required: true
    },
    close: {
      type: Function,
      required: true
    },
    showFile: {
      type: Boolean,
      default: false
    },
    showLauncher: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    participants: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: () => ""
    },
    titleImageUrl: {
      type: String,
      default: () => ""
    },
    onMessageWasSent: {
      type: Function,
      required: true
    },
    messageList: {
      type: Array,
      default: () => []
    },
    newMessagesCount: {
      type: Number,
      default: () => 0
    },
    placeholder: {
      type: String,
      default: "Write a message..."
    },
    showTypingIndicator: {
      type: String,
      default: () => ""
    },
    colors: {
      type: Object,
      validator: (c) => "header" in c && "bg" in c.header && "text" in c.header && "launcher" in c && "bg" in c.launcher && "messageList" in c && "bg" in c.messageList && "sentMessage" in c && "bg" in c.sentMessage && "text" in c.sentMessage && "receivedMessage" in c && "bg" in c.receivedMessage && "text" in c.receivedMessage && "userInput" in c && "bg" in c.userInput && "text" in c.userInput,
      default: function() {
        return {
          header: {
            bg: "#4e8cff",
            text: "#ffffff"
          },
          launcher: {
            bg: "#4e8cff"
          },
          messageList: {
            bg: "#ffffff"
          },
          sentMessage: {
            bg: "#4e8cff",
            text: "#ffffff"
          },
          receivedMessage: {
            bg: "#f4f7f9",
            text: "#ffffff"
          },
          userInput: {
            bg: "#f4f7f9",
            text: "#565867"
          }
        };
      }
    },
    alwaysScrollToBottom: {
      type: Boolean,
      default: () => false
    },
    messageStyling: {
      type: Boolean,
      default: () => false
    },
    disableUserListToggle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    chatWindowTitle() {
      if (this.title !== "")
        return this.title;
      if (this.participants.length === 0)
        return "You";
      if (this.participants.length > 1)
        return "You, " + this.participants[0].name + " & others";
      return "You & " + this.participants[0].name;
    }
  },
  watch: {
    $props: {
      deep: true,
      immediate: true,
      handler(props) {
        for (const prop in props) {
          store.setState(prop, props[prop]);
        }
      }
    }
  },
  methods: {
    openAndFocus() {
      this.open();
      if (this.autoFocus) {
        this.$event.$emit("focusUserInput");
      }
    }
  }
};
const _hoisted_1$3 = {
  key: 0,
  class: "sc-new-messsages-count"
};
const _hoisted_2$2 = ["src", "alt"];
const _hoisted_3$1 = ["src", "alt"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChatWindow = resolveComponent("ChatWindow");
  return openBlock(), createElementBlock("div", null, [
    $props.showLauncher ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["sc-launcher", { opened: $props.isOpen }]),
      style: normalizeStyle({ backgroundColor: $props.colors.launcher.bg }),
      onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $props.isOpen ? $props.close() : $options.openAndFocus(), ["prevent"]))
    }, [
      $props.newMessagesCount > 0 && !$props.isOpen ? (openBlock(), createElementBlock("div", _hoisted_1$3, toDisplayString($props.newMessagesCount), 1)) : createCommentVNode("", true),
      $props.isOpen ? (openBlock(), createElementBlock("img", {
        key: 1,
        class: "sc-closed-icon",
        src: $props.icons.close.img,
        alt: $props.icons.close.name
      }, null, 8, _hoisted_2$2)) : (openBlock(), createElementBlock("img", {
        key: 2,
        class: "sc-open-icon",
        src: $props.icons.open.img,
        alt: $props.icons.open.name
      }, null, 8, _hoisted_3$1))
    ], 6)) : createCommentVNode("", true),
    createVNode(_component_ChatWindow, {
      "message-list": $props.messageList,
      "on-user-input-submit": $props.onMessageWasSent,
      participants: $props.participants,
      title: $options.chatWindowTitle,
      "is-open": $props.isOpen,
      "show-emoji": $props.showEmoji,
      "show-emoji-in-text": $props.showEmojiInText,
      "show-file": $props.showFile,
      "show-confirmation-deletion": $props.showConfirmationDeletion,
      "confirmation-deletion-message": $props.confirmationDeletionMessage,
      "show-header": $props.showHeader,
      placeholder: $props.placeholder,
      "show-typing-indicator": $props.showTypingIndicator,
      colors: $props.colors,
      "always-scroll-to-bottom": $props.alwaysScrollToBottom,
      "message-styling": $props.messageStyling,
      onClose: $props.close,
      onScrollToTop: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("scrollToTop")),
      onOnType: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("onType", $event)),
      onEdit: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("edit", $event)),
      onRemove: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("remove", $event))
    }, {
      header: withCtx(() => [
        renderSlot(_ctx.$slots, "header", {}, void 0, true)
      ]),
      "user-avatar": withCtx((scopedProps) => [
        renderSlot(_ctx.$slots, "user-avatar", {
          user: scopedProps.user,
          message: scopedProps.message
        }, void 0, true)
      ]),
      "text-message-body": withCtx((scopedProps) => [
        renderSlot(_ctx.$slots, "text-message-body", {
          message: scopedProps.message,
          messageText: scopedProps.messageText,
          messageColors: scopedProps.messageColors,
          me: scopedProps.me
        }, void 0, true)
      ]),
      "system-message-body": withCtx((scopedProps) => [
        renderSlot(_ctx.$slots, "system-message-body", {
          message: scopedProps.message
        }, void 0, true)
      ]),
      "text-message-toolbox": withCtx((scopedProps) => [
        renderSlot(_ctx.$slots, "text-message-toolbox", {
          message: scopedProps.message,
          me: scopedProps.me
        }, void 0, true)
      ]),
      _: 3
    }, 8, ["message-list", "on-user-input-submit", "participants", "title", "is-open", "show-emoji", "show-emoji-in-text", "show-file", "show-confirmation-deletion", "confirmation-deletion-message", "show-header", "placeholder", "show-typing-indicator", "colors", "always-scroll-to-bottom", "message-styling", "onClose"])
  ]);
}
var Launcher = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-13c85e18"]]);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE2 = /Trident/i.test(getUAString());
  if (isIE2 && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance2 = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance2.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance2.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance2.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance2.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data2 = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data2[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data2;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data2 = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data2[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data2[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data2;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance2 = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance2.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance: instance2
            }) || state;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance2.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance2;
    }
    instance2.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance: instance2,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance2;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
function getInternetExplorerVersion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }
  var trident = ua.indexOf("Trident/");
  if (trident > 0) {
    var rv = ua.indexOf("rv:");
    return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
  }
  var edge = ua.indexOf("Edge/");
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
  }
  return -1;
}
let isIE;
function initCompat() {
  if (!initCompat.init) {
    initCompat.init = true;
    isIE = getInternetExplorerVersion() !== -1;
  }
}
var script$6 = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: false
    },
    ignoreWidth: {
      type: Boolean,
      default: false
    },
    ignoreHeight: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    initCompat();
    nextTick(() => {
      this._w = this.$el.offsetWidth;
      this._h = this.$el.offsetHeight;
      if (this.emitOnMount) {
        this.emitSize();
      }
    });
    const object = document.createElement("object");
    this._resizeObject = object;
    object.setAttribute("aria-hidden", "true");
    object.setAttribute("tabindex", -1);
    object.onload = this.addResizeHandlers;
    object.type = "text/html";
    if (isIE) {
      this.$el.appendChild(object);
    }
    object.data = "about:blank";
    if (!isIE) {
      this.$el.appendChild(object);
    }
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      if (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) {
        this._w = this.$el.offsetWidth;
        this._h = this.$el.offsetHeight;
        this.emitSize();
      }
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify);
      this.compareAndNotify();
    },
    removeResizeHandlers() {
      if (this._resizeObject && this._resizeObject.onload) {
        if (!isIE && this._resizeObject.contentDocument) {
          this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify);
        }
        this.$el.removeChild(this._resizeObject);
        this._resizeObject.onload = null;
        this._resizeObject = null;
      }
    }
  }
};
const _withId = /* @__PURE__ */ withScopeId("data-v-b329ee4c");
pushScopeId("data-v-b329ee4c");
const _hoisted_1$2 = {
  class: "resize-observer",
  tabindex: "-1"
};
popScopeId();
const render$3 = /* @__PURE__ */ _withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$2);
});
script$6.render = render$3;
script$6.__scopeId = "data-v-b329ee4c";
script$6.__file = "src/components/ResizeObserver.vue";
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn2) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn2.apply(self2, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return {
        s: F,
        n: function() {
          if (i >= o.length)
            return {
              done: true
            };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function(e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return {
    s: function() {
      it = it.call(o);
    },
    n: function() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function(e) {
      didErr = true;
      err = e;
    },
    f: function() {
      try {
        if (!normalCompletion && it.return != null)
          it.return();
      } finally {
        if (didErr)
          throw err;
      }
    }
  };
}
function assign(to, from) {
  for (var key in from) {
    if (Object.prototype.hasOwnProperty.call(from, key)) {
      if (_typeof(from[key]) === "object" && to[key]) {
        assign(to[key], from[key]);
      } else {
        to[key] = from[key];
      }
    }
  }
}
var config = {
  disabled: false,
  offset: [0, 5],
  container: "body",
  boundary: void 0,
  instantMove: false,
  disposeTimeout: 5e3,
  popperTriggers: [],
  strategy: "absolute",
  modifiers: [],
  popperOptions: {},
  themes: {
    tooltip: {
      placement: "top",
      triggers: ["hover", "focus", "touch"],
      hideTriggers: function hideTriggers(events) {
        return [].concat(_toConsumableArray(events), ["click"]);
      },
      delay: {
        show: 200,
        hide: 0
      },
      handleResize: false,
      html: false,
      loadingContent: "..."
    },
    dropdown: {
      placement: "bottom",
      triggers: ["click"],
      delay: 0,
      handleResize: true,
      autoHide: true
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover", "focus"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function getDefaultConfig(theme, key) {
  var themeConfig = config.themes[theme] || {};
  var value;
  do {
    value = themeConfig[key];
    if (typeof value === "undefined") {
      if (themeConfig.$extend) {
        themeConfig = config.themes[themeConfig.$extend] || {};
      } else {
        themeConfig = null;
        value = config[key];
      }
    } else {
      themeConfig = null;
    }
  } while (themeConfig);
  return value;
}
function getThemeClasses(theme) {
  var result = [theme];
  var themeConfig = config.themes[theme] || {};
  do {
    if (themeConfig.$extend && !themeConfig.$resetCss) {
      result.push(themeConfig.$extend);
      themeConfig = config.themes[themeConfig.$extend] || {};
    } else {
      themeConfig = null;
    }
  } while (themeConfig);
  return result.map(function(c) {
    return "v-popper--theme-".concat(c);
  });
}
var supportsPassive = false;
if (typeof window !== "undefined") {
  supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, "passive", {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener("test", null, opts);
  } catch (e) {
  }
}
var isIOS = false;
if (typeof window !== "undefined" && typeof navigator !== "undefined") {
  isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}
function applyModifier(modifiers, name, data2) {
  var modifier = modifiers.find(function(m) {
    return m.name === name;
  });
  if (!modifier) {
    modifier = {
      name
    };
    modifiers.push(modifier);
  }
  for (var key in data2) {
    if (key === "options") {
      if (!modifier.options) {
        modifier.options = {};
      }
      Object.assign(modifier.options, data2.options);
    } else {
      modifier[key] = data2[key];
    }
  }
}
var SHOW_EVENT_MAP = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart"
};
var HIDE_EVENT_MAP = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend"
};
function removeFromArray(array, item) {
  var index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}
var shownPoppers = [];
var hidingPopper = null;
var Element$1 = function Element2() {
};
if (typeof window !== "undefined") {
  Element$1 = window.Element;
}
var PrivatePopper = function() {
  return {
    name: "VPopper",
    props: {
      theme: {
        type: String,
        required: true
      },
      targetNodes: {
        type: Function,
        required: true
      },
      referenceNode: {
        type: Function,
        required: true
      },
      popperNode: {
        type: Function,
        required: true
      },
      arrowNode: {
        type: Function,
        default: null
      },
      shown: {
        type: Boolean,
        default: false
      },
      showGroup: {
        type: String,
        default: null
      },
      ariaId: {
        default: null
      },
      disabled: {
        type: Boolean,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "disabled");
        }
      },
      placement: {
        type: String,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "placement");
        },
        validator: function validator(value) {
          return placements.includes(value);
        }
      },
      delay: {
        type: [String, Number, Object],
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "delay");
        }
      },
      offset: {
        type: [Array, Function],
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "offset");
        }
      },
      triggers: {
        type: Array,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "triggers");
        }
      },
      showTriggers: {
        type: [Array, Function],
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "showTriggers");
        }
      },
      hideTriggers: {
        type: [Array, Function],
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "hideTriggers");
        }
      },
      popperTriggers: {
        type: Array,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "popperTriggers");
        }
      },
      popperShowTriggers: {
        type: [Array, Function],
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "popperShowTriggers");
        }
      },
      popperHideTriggers: {
        type: [Array, Function],
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "popperHideTriggers");
        }
      },
      container: {
        type: [String, Object, Element$1, Boolean],
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "container");
        }
      },
      boundary: {
        type: [String, Element$1],
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "boundary");
        }
      },
      strategy: {
        type: String,
        validator: function validator(value) {
          return ["absolute", "fixed"].includes(value);
        },
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "strategy");
        }
      },
      modifiers: {
        type: Array,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "modifiers");
        }
      },
      popperOptions: {
        type: Object,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "popperOptions");
        }
      },
      autoHide: {
        type: Boolean,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "autoHide");
        }
      },
      handleResize: {
        type: Boolean,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "handleResize");
        }
      },
      instantMove: {
        type: Boolean,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "instantMove");
        }
      },
      eagerMount: {
        type: Boolean,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "eagerMount");
        }
      },
      popperClass: {
        type: [String, Array, Object],
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "popperClass");
        }
      },
      computeTransformOrigin: {
        type: Boolean,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "computeTransformOrigin");
        }
      },
      autoMinSize: {
        type: Boolean,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "autoMinSize");
        }
      }
    },
    emits: ["show", "hide", "update:shown", "apply-show", "apply-hide", "close-group", "close-directive", "auto-hide", "resize", "dispose"],
    data: function data2() {
      return {
        isShown: false,
        isMounted: false,
        skipTransition: false,
        classes: {
          showFrom: false,
          showTo: false,
          hideFrom: false,
          hideTo: true
        }
      };
    },
    computed: {
      popperId: function popperId() {
        return this.ariaId != null ? this.ariaId : this.randomId;
      },
      shouldMountContent: function shouldMountContent() {
        return this.eagerMount || this.isMounted;
      },
      slotData: function slotData() {
        return {
          popperId: this.popperId,
          isShown: this.isShown,
          shouldMountContent: this.shouldMountContent,
          skipTransition: this.skipTransition,
          autoHide: this.autoHide,
          show: this.show,
          hide: this.hide,
          handleResize: this.handleResize,
          onResize: this.onResize,
          classes: _objectSpread2(_objectSpread2({}, this.classes), {}, {
            popperClass: this.popperClass
          })
        };
      }
    },
    watch: {
      shown: "$_autoShowHide",
      disabled: function disabled(value) {
        if (value) {
          this.dispose();
        } else {
          this.init();
        }
      },
      container: function container() {
        var _this = this;
        return _asyncToGenerator(function* () {
          if (_this.isShown && _this.popperInstance) {
            _this.$_ensureContainer();
            yield _this.popperInstance.update();
          }
        })();
      },
      triggers: function triggers() {
        this.$_removeEventListeners();
        this.$_addEventListeners();
      },
      placement: "$_refreshPopperOptions",
      offset: "$_refreshPopperOptions",
      boundary: "$_refreshPopperOptions",
      strategy: "$_refreshPopperOptions",
      modifiers: "$_refreshPopperOptions",
      popperOptions: {
        handler: "$_refreshPopperOptions",
        deep: true
      }
    },
    created: function created2() {
      this.randomId = "popper_".concat([Math.random(), Date.now()].map(function(n) {
        return n.toString(36).substring(2, 10);
      }).join("_"));
    },
    mounted: function mounted() {
      this.init();
    },
    activated: function activated() {
      this.$_autoShowHide();
    },
    deactivated: function deactivated() {
      this.hide();
    },
    beforeUnmount: function beforeUnmount3() {
      this.dispose();
    },
    methods: {
      show: function show2() {
        var _this2 = this;
        var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, event = _ref.event, _ref$skipDelay = _ref.skipDelay, skipDelay = _ref$skipDelay === void 0 ? false : _ref$skipDelay, _ref$force = _ref.force, force = _ref$force === void 0 ? false : _ref$force;
        if (force || !this.disabled) {
          this.$_scheduleShow(event, skipDelay);
          this.$emit("show");
          this.$_showFrameLocked = true;
          requestAnimationFrame(function() {
            _this2.$_showFrameLocked = false;
          });
        }
        this.$emit("update:shown", true);
      },
      hide: function hide3() {
        var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, event = _ref2.event, _ref2$skipDelay = _ref2.skipDelay, skipDelay = _ref2$skipDelay === void 0 ? false : _ref2$skipDelay;
        this.$_scheduleHide(event, skipDelay);
        this.$emit("hide");
        this.$emit("update:shown", false);
      },
      init: function init() {
        this.$_isDisposed = false;
        this.isMounted = false;
        this.$_events = [];
        this.$_preventShow = false;
        this.$_targetNodes = this.targetNodes().filter(function(e) {
          return e.nodeType === e.ELEMENT_NODE;
        });
        this.$_popperNode = this.popperNode();
        this.$_swapTargetAttrs("title", "data-original-title");
        this.$_detachPopperNode();
        if (this.triggers.length) {
          this.$_addEventListeners();
        }
        if (this.shown) {
          this.show();
        }
      },
      dispose: function dispose2() {
        this.$_isDisposed = true;
        this.$_removeEventListeners();
        this.hide({
          skipDelay: true
        });
        if (this.popperInstance) {
          this.popperInstance.destroy();
          this.$_detachPopperNode();
        }
        this.isMounted = false;
        this.popperInstance = null;
        this.isShown = false;
        this.$_swapTargetAttrs("data-original-title", "title");
        this.$emit("dispose");
      },
      onResize: function onResize2() {
        var _this3 = this;
        return _asyncToGenerator(function* () {
          if (_this3.isShown && _this3.popperInstance) {
            yield _this3.popperInstance.update();
            _this3.$emit("resize");
          }
        })();
      },
      $_getPopperOptions: function $_getPopperOptions() {
        var _this4 = this;
        var popperOptions = _objectSpread2(_objectSpread2({}, this.popperOptions), {}, {
          placement: this.placement,
          strategy: this.strategy,
          modifiers: this.modifiers,
          onFirstUpdate: function() {
            var _onFirstUpdate = _asyncToGenerator(function* (state) {
              if (_this4.popperOptions.onFirstUpdate) {
                _this4.popperOptions.onFirstUpdate(state);
              }
              yield _this4.$_applyShowEffect();
            });
            function onFirstUpdate(_x) {
              return _onFirstUpdate.apply(this, arguments);
            }
            return onFirstUpdate;
          }()
        });
        if (!popperOptions.modifiers) {
          popperOptions.modifiers = [];
        }
        applyModifier(popperOptions.modifiers, "arrow", {
          options: {
            element: this.arrowNode && this.arrowNode() || "[data-popper-arrow]"
          }
        });
        if (this.offset) {
          applyModifier(popperOptions.modifiers, "offset", {
            options: {
              offset: this.offset
            }
          });
        }
        if (this.boundary) {
          applyModifier(popperOptions.modifiers, "preventOverflow", {
            options: {
              boundary: this.boundary
            }
          });
        }
        if (!this.isShown) {
          applyModifier(popperOptions.modifiers, "eventListeners", {
            enabled: false
          });
        }
        return popperOptions;
      },
      $_refreshPopperOptions: function $_refreshPopperOptions() {
        var _this5 = this;
        return _asyncToGenerator(function* () {
          if (_this5.popperInstance) {
            yield _this5.popperInstance.setOptions(_this5.$_getPopperOptions());
          }
        })();
      },
      $_scheduleShow: function $_scheduleShow() {
        var skipDelay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        this.$_hideInProgress = false;
        clearTimeout(this.$_scheduleTimer);
        if (hidingPopper && this.instantMove && hidingPopper.instantMove) {
          hidingPopper.$_applyHide(true);
          this.$_applyShow(true);
          return;
        }
        if (skipDelay) {
          this.$_applyShow();
        } else {
          this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
        }
      },
      $_scheduleHide: function $_scheduleHide() {
        var skipDelay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        this.$_hideInProgress = true;
        clearTimeout(this.$_scheduleTimer);
        if (this.isShown) {
          hidingPopper = this;
        }
        if (skipDelay) {
          this.$_applyHide();
        } else {
          this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
        }
      },
      $_computeDelay: function $_computeDelay(type) {
        var delay = this.delay;
        return parseInt(delay && delay[type] || delay || 0);
      },
      $_applyShow: function $_applyShow() {
        var _arguments = arguments, _this6 = this;
        return _asyncToGenerator(function* () {
          var skipTransition = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : false;
          clearTimeout(_this6.$_disposeTimer);
          clearTimeout(_this6.$_scheduleTimer);
          _this6.skipTransition = skipTransition;
          if (_this6.isShown) {
            return;
          }
          if (!_this6.isMounted) {
            _this6.$_ensureContainer();
            _this6.isMounted = true;
          }
          if (!_this6.popperInstance) {
            _this6.popperInstance = createPopper(_this6.referenceNode(), _this6.$_popperNode, _this6.$_getPopperOptions());
          } else {
            yield _this6.popperInstance.update();
            yield _this6.$_refreshPopperOptions();
            yield _this6.$_applyShowEffect();
          }
        })();
      },
      $_applyShowEffect: function $_applyShowEffect() {
        var _this7 = this;
        return _asyncToGenerator(function* () {
          if (_this7.$_hideInProgress)
            return;
          var _referenceBounds;
          var getReferenceBounds = function getReferenceBounds2() {
            return _referenceBounds || (_referenceBounds = _this7.referenceNode().getBoundingClientRect());
          };
          if (_this7.computeTransformOrigin) {
            var referenceBounds = getReferenceBounds();
            var popperWrapper = _this7.$_popperNode.querySelector(".v-popper__wrapper");
            var parentBounds = popperWrapper.parentNode.getBoundingClientRect();
            var x = referenceBounds.left + referenceBounds.width / 2 - (parentBounds.left + popperWrapper.offsetLeft);
            var y = referenceBounds.top + referenceBounds.height / 2 - (parentBounds.top + popperWrapper.offsetTop);
            popperWrapper.style.transformOrigin = "".concat(x, "px ").concat(y, "px");
          }
          if (_this7.autoMinSize) {
            var _referenceBounds2 = getReferenceBounds();
            var popperInner = _this7.$_popperNode.querySelector(".v-popper__inner");
            var _this7$$_popperNode$d = _this7.$_popperNode.dataset.popperPlacement.split("-"), _this7$$_popperNode$d2 = _slicedToArray(_this7$$_popperNode$d, 1), mainPosition = _this7$$_popperNode$d2[0];
            if (mainPosition === "left" || mainPosition === "right") {
              popperInner.style.minHeight = "".concat(_referenceBounds2.height, "px");
            } else {
              popperInner.style.minWidth = "".concat(_referenceBounds2.width, "px");
            }
          }
          _this7.isShown = true;
          _this7.$_applyAttrsToTarget({
            "aria-describedby": _this7.popperId,
            "data-popper-shown": ""
          });
          var showGroup = _this7.showGroup;
          if (showGroup) {
            var popover;
            for (var i = 0; i < shownPoppers.length; i++) {
              popover = shownPoppers[i];
              if (popover.showGroup !== showGroup) {
                popover.hide();
                popover.$emit("close-group");
              }
            }
          }
          shownPoppers.push(_this7);
          _this7.$emit("apply-show");
          _this7.$_popperNode.setAttribute("data-popper-placement", _this7.popperInstance.state.placement);
          _this7.classes.showFrom = true;
          _this7.classes.showTo = false;
          _this7.classes.hideFrom = false;
          _this7.classes.hideTo = false;
          yield nextFrame();
          _this7.classes.showFrom = false;
          _this7.classes.showTo = true;
        })();
      },
      $_applyHide: function $_applyHide() {
        var _arguments2 = arguments, _this8 = this;
        return _asyncToGenerator(function* () {
          var skipTransition = _arguments2.length > 0 && _arguments2[0] !== void 0 ? _arguments2[0] : false;
          clearTimeout(_this8.$_scheduleTimer);
          if (!_this8.isShown) {
            return;
          }
          _this8.skipTransition = skipTransition;
          removeFromArray(shownPoppers, _this8);
          if (hidingPopper === _this8) {
            hidingPopper = null;
          }
          _this8.isShown = false;
          if (_this8.popperInstance) {
            yield _this8.$_refreshPopperOptions();
          }
          _this8.$_applyAttrsToTarget({
            "aria-describedby": void 0,
            "data-popper-shown": void 0
          });
          clearTimeout(_this8.$_disposeTimer);
          var disposeTime = getDefaultConfig(_this8.theme, "disposeTimeout");
          if (disposeTime !== null) {
            _this8.$_disposeTimer = setTimeout(function() {
              if (_this8.$_popperNode) {
                _this8.$_detachPopperNode();
                _this8.isMounted = false;
              }
            }, disposeTime);
          }
          _this8.$emit("apply-hide");
          _this8.classes.showFrom = false;
          _this8.classes.showTo = false;
          _this8.classes.hideFrom = true;
          _this8.classes.hideTo = false;
          yield nextFrame();
          _this8.classes.hideFrom = false;
          _this8.classes.hideTo = true;
        })();
      },
      $_autoShowHide: function $_autoShowHide() {
        if (this.shown) {
          this.show();
        } else {
          this.hide();
        }
      },
      $_ensureContainer: function $_ensureContainer() {
        var container = this.container;
        if (typeof container === "string") {
          container = window.document.querySelector(container);
        } else if (container === false) {
          container = this.$_targetNodes[0].parentNode;
        }
        if (!container) {
          throw new Error("No container for popover: " + this.container);
        }
        container.appendChild(this.$_popperNode);
      },
      $_addEventListeners: function $_addEventListeners() {
        var _this9 = this;
        var addEvents = function addEvents2(targetNodes, eventMap, commonTriggers, customTrigger, handler2) {
          var triggers = commonTriggers;
          if (customTrigger != null) {
            triggers = typeof customTrigger === "function" ? customTrigger(triggers) : customTrigger;
          }
          triggers.forEach(function(trigger) {
            var eventType = eventMap[trigger];
            if (eventType) {
              _this9.$_events.push({
                targetNodes,
                eventType,
                handler: handler2
              });
              targetNodes.forEach(function(node) {
                return node.addEventListener(eventType, handler2, supportsPassive ? {
                  passive: true
                } : void 0);
              });
            }
          });
        };
        var handleShow = function handleShow2(event) {
          if (_this9.isShown && !_this9.$_hideInProgress) {
            return;
          }
          event.usedByTooltip = true;
          !_this9.$_preventShow && _this9.show({
            event
          });
        };
        addEvents(this.$_targetNodes, SHOW_EVENT_MAP, this.triggers, this.showTriggers, handleShow);
        addEvents([this.$_popperNode], SHOW_EVENT_MAP, this.popperTriggers, this.popperShowTriggers, handleShow);
        var handleHide = function handleHide2(event) {
          if (event.usedByTooltip) {
            return;
          }
          _this9.hide({
            event
          });
        };
        addEvents(this.$_targetNodes, HIDE_EVENT_MAP, this.triggers, this.hideTriggers, handleHide);
        addEvents([this.$_popperNode], HIDE_EVENT_MAP, this.popperTriggers, this.popperHideTriggers, handleHide);
      },
      $_removeEventListeners: function $_removeEventListeners() {
        this.$_events.forEach(function(_ref3) {
          var targetNodes = _ref3.targetNodes, eventType = _ref3.eventType, handler2 = _ref3.handler;
          targetNodes.forEach(function(node) {
            return node.removeEventListener(eventType, handler2);
          });
        });
        this.$_events = [];
      },
      $_handleGlobalClose: function $_handleGlobalClose(event) {
        var _this10 = this;
        var touch = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (this.$_showFrameLocked)
          return;
        this.hide({
          event
        });
        if (event.closePopover) {
          this.$emit("close-directive");
        } else {
          this.$emit("auto-hide");
        }
        if (touch) {
          this.$_preventShow = true;
          setTimeout(function() {
            _this10.$_preventShow = false;
          }, 300);
        }
      },
      $_handleGlobalResize: function $_handleGlobalResize(event) {
        var _this11 = this;
        return _asyncToGenerator(function* () {
          if (_this11.popperInstance) {
            yield _this11.popperInstance.update();
          }
        })();
      },
      $_detachPopperNode: function $_detachPopperNode() {
        this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
      },
      $_swapTargetAttrs: function $_swapTargetAttrs(attrFrom, attrTo) {
        var _iterator = _createForOfIteratorHelper(this.$_targetNodes), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var el = _step.value;
            var value = el.getAttribute(attrFrom);
            if (value) {
              el.removeAttribute(attrFrom);
              el.setAttribute(attrTo, value);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      $_applyAttrsToTarget: function $_applyAttrsToTarget(attrs) {
        var _iterator2 = _createForOfIteratorHelper(this.$_targetNodes), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var el = _step2.value;
            for (var n in attrs) {
              var value = attrs[n];
              if (value == null) {
                el.removeAttribute(n);
              } else {
                el.setAttribute(n, value);
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    },
    render: function render2() {
      return this.$slots.default(this.slotData);
    }
  };
};
if (typeof document !== "undefined" && typeof window !== "undefined") {
  if (isIOS) {
    document.addEventListener("touchstart", handleGlobalMousedown, supportsPassive ? {
      passive: true,
      capture: true
    } : true);
    document.addEventListener("touchend", handleGlobalTouchend, supportsPassive ? {
      passive: true,
      capture: true
    } : true);
  } else {
    window.addEventListener("mousedown", handleGlobalMousedown, true);
    window.addEventListener("click", handleGlobalClick, true);
  }
  window.addEventListener("resize", handleGlobalResize);
}
function handleGlobalMousedown(event) {
  for (var i = 0; i < shownPoppers.length; i++) {
    var popper2 = shownPoppers[i];
    var popperContent = popper2.popperNode();
    popper2.$_mouseDownContains = popperContent.contains(event.target);
  }
}
function handleGlobalClick(event) {
  handleGlobalClose(event);
}
function handleGlobalTouchend(event) {
  handleGlobalClose(event, true);
}
function handleGlobalClose(event) {
  var touch = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var _loop = function _loop2(i2) {
    var popper2 = shownPoppers[i2];
    var popperContent = popper2.popperNode();
    var contains2 = popper2.$_mouseDownContains || popperContent.contains(event.target);
    requestAnimationFrame(function() {
      if (event.closeAllPopover || event.closePopover && contains2 || popper2.autoHide && !contains2) {
        popper2.$_handleGlobalClose(event, touch);
      }
    });
  };
  for (var i = 0; i < shownPoppers.length; i++) {
    _loop(i);
  }
}
function handleGlobalResize(event) {
  for (var i = 0; i < shownPoppers.length; i++) {
    var popper2 = shownPoppers[i];
    popper2.$_handleGlobalResize(event);
  }
}
function nextFrame() {
  return new Promise(function(resolve) {
    return requestAnimationFrame(function() {
      requestAnimationFrame(resolve);
    });
  });
}
var PrivateThemeClass = {
  computed: {
    themeClass: function themeClass() {
      return getThemeClasses(this.theme);
    }
  }
};
var script$5 = {
  name: "VPopperContent",
  components: {
    ResizeObserver: script$6
  },
  mixins: [PrivateThemeClass],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object
  },
  emits: ["hide", "resize"]
};
var _hoisted_1$1 = ["id", "aria-hidden", "tabindex"];
var _hoisted_2$1 = {
  class: "v-popper__wrapper"
};
var _hoisted_3 = {
  ref: "inner",
  class: "v-popper__inner"
};
var _hoisted_4 = {
  ref: "arrow",
  class: "v-popper__arrow-container"
};
var _hoisted_5 = /* @__PURE__ */ createElementVNode(
  "div",
  {
    class: "v-popper__arrow-outer"
  },
  null,
  -1
);
var _hoisted_6 = /* @__PURE__ */ createElementVNode(
  "div",
  {
    class: "v-popper__arrow-inner"
  },
  null,
  -1
);
var _hoisted_7 = [_hoisted_5, _hoisted_6];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ResizeObserver = resolveComponent("ResizeObserver");
  return openBlock(), createElementBlock(
    "div",
    {
      id: $props.popperId,
      ref: "popover",
      class: normalizeClass(["v-popper__popper", [_ctx.themeClass, $props.classes.popperClass, {
        "v-popper__popper--shown": $props.shown,
        "v-popper__popper--hidden": !$props.shown,
        "v-popper__popper--show-from": $props.classes.showFrom,
        "v-popper__popper--show-to": $props.classes.showTo,
        "v-popper__popper--hide-from": $props.classes.hideFrom,
        "v-popper__popper--hide-to": $props.classes.hideTo,
        "v-popper__popper--skip-transition": $props.skipTransition
      }]]),
      "aria-hidden": $props.shown ? "false" : "true",
      tabindex: $props.autoHide ? 0 : void 0,
      onKeyup: _cache[1] || (_cache[1] = withKeys(function($event) {
        return $props.autoHide && _ctx.$emit("hide");
      }, ["esc"]))
    },
    [createElementVNode("div", _hoisted_2$1, [createElementVNode(
      "div",
      _hoisted_3,
      [$props.mounted ? (openBlock(), createElementBlock(
        Fragment,
        {
          key: 0
        },
        [createElementVNode("div", null, [renderSlot(_ctx.$slots, "default")]), $props.handleResize ? (openBlock(), createBlock(_component_ResizeObserver, {
          key: 0,
          onNotify: _cache[0] || (_cache[0] = function($event) {
            return _ctx.$emit("resize", $event);
          })
        })) : createCommentVNode("v-if", true)],
        64
      )) : createCommentVNode("v-if", true)],
      512
    ), createElementVNode(
      "div",
      _hoisted_4,
      _hoisted_7,
      512
    )])],
    42,
    _hoisted_1$1
  );
}
script$5.render = render$2;
script$5.__file = "src/components/PopperContent.vue";
var PrivatePopperMethods = {
  methods: {
    show: function show() {
      var _this$$refs$popper;
      return (_this$$refs$popper = this.$refs.popper).show.apply(_this$$refs$popper, arguments);
    },
    hide: function hide2() {
      var _this$$refs$popper2;
      return (_this$$refs$popper2 = this.$refs.popper).hide.apply(_this$$refs$popper2, arguments);
    },
    dispose: function dispose() {
      var _this$$refs$popper3;
      return (_this$$refs$popper3 = this.$refs.popper).dispose.apply(_this$$refs$popper3, arguments);
    },
    onResize: function onResize() {
      var _this$$refs$popper4;
      return (_this$$refs$popper4 = this.$refs.popper).onResize.apply(_this$$refs$popper4, arguments);
    }
  }
};
var script$4 = {
  name: "VPopperWrapper",
  components: {
    Popper: PrivatePopper(),
    PopperContent: script$5
  },
  mixins: [PrivatePopperMethods, PrivateThemeClass],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: null
    }
  },
  computed: {
    finalTheme: function finalTheme() {
      var _this$theme;
      return (_this$theme = this.theme) !== null && _this$theme !== void 0 ? _this$theme : this.$options.vPopperTheme;
    },
    popperAttrs: function popperAttrs() {
      var result = _objectSpread2({}, this.$attrs);
      delete result.class;
      delete result.style;
      return result;
    }
  },
  methods: {
    getTargetNodes: function getTargetNodes() {
      var children = _toConsumableArray(this.$refs.reference.children);
      return children.slice(0, children.length - 1).filter(Boolean);
    }
  }
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PopperContent = resolveComponent("PopperContent");
  var _component_Popper = resolveComponent("Popper");
  return openBlock(), createBlock(
    _component_Popper,
    mergeProps({
      ref: "popper"
    }, $options.popperAttrs, {
      theme: $options.finalTheme,
      "target-nodes": $options.getTargetNodes,
      "reference-node": function referenceNode() {
        return _ctx.$refs.reference;
      },
      "popper-node": function popperNode() {
        return _ctx.$refs.popperContent.$el;
      },
      "arrow-node": function arrowNode() {
        return _ctx.$refs.popperContent.$refs.arrow;
      }
    }),
    {
      default: withCtx(function(_ref) {
        var popperId = _ref.popperId, isShown = _ref.isShown, shouldMountContent = _ref.shouldMountContent, skipTransition = _ref.skipTransition, autoHide = _ref.autoHide, show2 = _ref.show, hide3 = _ref.hide, handleResize = _ref.handleResize, onResize2 = _ref.onResize, classes = _ref.classes;
        return [createElementVNode(
          "div",
          {
            ref: "reference",
            class: normalizeClass(["v-popper", [_ctx.$attrs.class, _ctx.themeClass, {
              "v-popper--shown": isShown
            }]]),
            style: normalizeStyle(_ctx.$attrs.style)
          },
          [renderSlot(_ctx.$slots, "default", {
            shown: isShown,
            show: show2,
            hide: hide3
          }), createVNode(
            _component_PopperContent,
            {
              ref: "popperContent",
              "popper-id": popperId,
              theme: $options.finalTheme,
              shown: isShown,
              mounted: shouldMountContent,
              "skip-transition": skipTransition,
              "auto-hide": autoHide,
              "handle-resize": handleResize,
              classes,
              onHide: hide3,
              onResize: onResize2
            },
            {
              default: withCtx(function() {
                return [renderSlot(_ctx.$slots, "popper", {
                  shown: isShown,
                  hide: hide3
                })];
              }),
              _: 2
            },
            1032,
            ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "onHide", "onResize"]
          )],
          6
        )];
      }),
      _: 3
    },
    16,
    ["theme", "target-nodes", "reference-node", "popper-node", "arrow-node"]
  );
}
script$4.render = render$1;
script$4.__file = "src/components/PopperWrapper.vue";
var script$3 = _objectSpread2(_objectSpread2({}, script$4), {}, {
  name: "VDropdown",
  vPopperTheme: "dropdown"
});
script$3.__file = "src/components/Dropdown.vue";
var script$2 = _objectSpread2(_objectSpread2({}, script$4), {}, {
  name: "VMenu",
  vPopperTheme: "menu"
});
script$2.__file = "src/components/Menu.vue";
var script$1 = _objectSpread2(_objectSpread2({}, script$4), {}, {
  name: "VTooltip",
  vPopperTheme: "tooltip"
});
script$1.__file = "src/components/Tooltip.vue";
var script = {
  name: "VTooltipDirective",
  components: {
    Popper: PrivatePopper(),
    PopperContent: script$5
  },
  mixins: [PrivatePopperMethods],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: function _default(props) {
        return getDefaultConfig(props.theme, "html");
      }
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: function _default2(props) {
        return getDefaultConfig(props.theme, "loadingContent");
      }
    }
  },
  data: function data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync: function isContentAsync() {
      return typeof this.content === "function";
    },
    loading: function loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent: function finalContent() {
      if (this.isContentAsync) {
        return this.loading ? this.loadingContent : this.asyncContent;
      }
      return this.content;
    }
  },
  watch: {
    content: {
      handler: function handler() {
        this.fetchContent(true);
      },
      immediate: true
    },
    finalContent: function finalContent2(value) {
      var _this = this;
      this.$nextTick(function() {
        _this.$refs.popper.onResize();
      });
    }
  },
  created: function created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent: function fetchContent(force) {
      var _this2 = this;
      if (typeof this.content === "function" && this.$_isShown && (force || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null;
        this.$_loading = true;
        var fetchId = ++this.$_fetchId;
        var result = this.content(this);
        if (result.then) {
          result.then(function(res) {
            return _this2.onResult(fetchId, res);
          });
        } else {
          this.onResult(fetchId, result);
        }
      }
    },
    onResult: function onResult(fetchId, result) {
      if (fetchId !== this.$_fetchId)
        return;
      this.$_loading = false;
      this.asyncContent = result;
    },
    onShow: function onShow() {
      this.$_isShown = true;
      this.fetchContent();
    },
    onHide: function onHide() {
      this.$_isShown = false;
    }
  }
};
var _hoisted_1 = ["innerHTML"];
var _hoisted_2 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PopperContent = resolveComponent("PopperContent");
  var _component_Popper = resolveComponent("Popper");
  return openBlock(), createBlock(
    _component_Popper,
    mergeProps({
      ref: "popper"
    }, _ctx.$attrs, {
      theme: $props.theme,
      "popper-node": function popperNode() {
        return _ctx.$refs.popperContent.$el;
      },
      "arrow-node": function arrowNode() {
        return _ctx.$refs.popperContent.$refs.arrow;
      },
      onApplyShow: $options.onShow,
      onApplyHide: $options.onHide
    }),
    {
      default: withCtx(function(_ref) {
        var popperId = _ref.popperId, isShown = _ref.isShown, shouldMountContent = _ref.shouldMountContent, skipTransition = _ref.skipTransition, autoHide = _ref.autoHide, hide3 = _ref.hide, handleResize = _ref.handleResize, onResize2 = _ref.onResize, classes = _ref.classes;
        return [createVNode(
          _component_PopperContent,
          {
            ref: "popperContent",
            class: normalizeClass({
              "v-popper--tooltip-loading": $options.loading
            }),
            "popper-id": popperId,
            theme: $props.theme,
            shown: isShown,
            mounted: shouldMountContent,
            "skip-transition": skipTransition,
            "auto-hide": autoHide,
            "handle-resize": handleResize,
            classes,
            onHide: hide3,
            onResize: onResize2
          },
          {
            default: withCtx(function() {
              return [$props.html ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 0,
                  innerHTML: $options.finalContent
                },
                null,
                8,
                _hoisted_1
              )) : (openBlock(), createElementBlock(
                "div",
                {
                  key: 1,
                  textContent: toDisplayString($options.finalContent)
                },
                null,
                8,
                _hoisted_2
              ))];
            }),
            _: 2
          },
          1032,
          ["class", "popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "onHide", "onResize"]
        )];
      }),
      _: 1
    },
    16,
    ["theme", "popper-node", "arrow-node", "onApplyShow", "onApplyHide"]
  );
}
script.render = render;
script.__file = "src/components/TooltipDirective.vue";
var TARGET_CLASS = "v-popper--has-tooltip";
function getPlacement(options, modifiers) {
  var result = options.placement;
  if (!result && modifiers) {
    var _iterator = _createForOfIteratorHelper(placements), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var pos = _step.value;
        if (modifiers[pos]) {
          result = pos;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  if (!result) {
    result = getDefaultConfig(options.theme || "tooltip", "placement");
  }
  return result;
}
function getOptions(el, value, modifiers) {
  var options;
  var type = _typeof(value);
  if (type === "string") {
    options = {
      content: value
    };
  } else if (value && type === "object") {
    options = value;
  } else {
    options = {
      content: false
    };
  }
  options.placement = getPlacement(options, modifiers);
  options.targetNodes = function() {
    return [el];
  };
  options.referenceNode = function() {
    return el;
  };
  return options;
}
function createTooltip(el, value, modifiers) {
  var options = ref(getOptions(el, value, modifiers));
  var component = ref();
  var tooltipApp = createApp({
    name: "VTooltipDirective",
    setup: function setup() {
      return {
        options,
        tooltip: component
      };
    },
    render: function render2() {
      return h(script, _objectSpread2(_objectSpread2({}, this.options), {}, {
        ref: "tooltip"
      }));
    },
    devtools: {
      hide: true
    }
  });
  var mountTarget = document.createElement("div");
  document.body.appendChild(mountTarget);
  tooltipApp.mount(mountTarget);
  el.$_popperMountTarget = mountTarget;
  if (el.classList) {
    el.classList.add(TARGET_CLASS);
  }
  var result = el.$_popper = {
    app: tooltipApp,
    options,
    component,
    show: function show2() {
      component.value.show();
    },
    hide: function hide3() {
      component.value.hide();
    }
  };
  return result;
}
function destroyTooltip(el) {
  if (el.$_popper) {
    el.$_popper.app.unmount();
    if (el.$_popperMountTarget.parentElement) {
      el.$_popperMountTarget.parentElement.removeChild(el.$_popperMountTarget);
    }
    delete el.$_popper;
    delete el.$_popperOldShown;
    delete el.$_popperMountTarget;
  }
  if (el.classList) {
    el.classList.remove(TARGET_CLASS);
  }
}
function bind(el, _ref) {
  var value = _ref.value, modifiers = _ref.modifiers;
  var options = getOptions(el, value, modifiers);
  if (!options.content || getDefaultConfig(options.theme || "tooltip", "disabled")) {
    destroyTooltip(el);
  } else {
    var tooltipApp;
    if (el.$_popper) {
      tooltipApp = el.$_popper;
      tooltipApp.options.value = options;
    } else {
      tooltipApp = createTooltip(el, value, modifiers);
    }
    if (typeof value.shown !== "undefined" && value.shown !== el.$_popperOldShown) {
      el.$_popperOldShown = value.shown;
      value.shown ? tooltipApp.show() : tooltipApp.hide();
    }
  }
}
var PrivateVTooltip = {
  beforeMount: bind,
  updated: bind,
  beforeUnmount: function beforeUnmount(el) {
    destroyTooltip(el);
  }
};
function addListeners(el) {
  el.addEventListener("click", onClick);
  el.addEventListener("touchstart", onTouchStart, supportsPassive ? {
    passive: true
  } : false);
}
function removeListeners(el) {
  el.removeEventListener("click", onClick);
  el.removeEventListener("touchstart", onTouchStart);
  el.removeEventListener("touchend", onTouchEnd);
  el.removeEventListener("touchcancel", onTouchCancel);
}
function onClick(event) {
  var el = event.currentTarget;
  event.closePopover = !el.$_vclosepopover_touch;
  event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
}
function onTouchStart(event) {
  if (event.changedTouches.length === 1) {
    var el = event.currentTarget;
    el.$_vclosepopover_touch = true;
    var touch = event.changedTouches[0];
    el.$_vclosepopover_touchPoint = touch;
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("touchcancel", onTouchCancel);
  }
}
function onTouchEnd(event) {
  var el = event.currentTarget;
  el.$_vclosepopover_touch = false;
  if (event.changedTouches.length === 1) {
    var touch = event.changedTouches[0];
    var firstTouch = el.$_vclosepopover_touchPoint;
    event.closePopover = Math.abs(touch.screenY - firstTouch.screenY) < 20 && Math.abs(touch.screenX - firstTouch.screenX) < 20;
    event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
  }
}
function onTouchCancel(event) {
  var el = event.currentTarget;
  el.$_vclosepopover_touch = false;
}
var PrivateVClosePopper = {
  beforeMount: function beforeMount(el, _ref) {
    var value = _ref.value, modifiers = _ref.modifiers;
    el.$_closePopoverModifiers = modifiers;
    if (typeof value === "undefined" || value) {
      addListeners(el);
    }
  },
  updated: function updated(el, _ref2) {
    var value = _ref2.value, oldValue = _ref2.oldValue, modifiers = _ref2.modifiers;
    el.$_closePopoverModifiers = modifiers;
    if (value !== oldValue) {
      if (typeof value === "undefined" || value) {
        addListeners(el);
      } else {
        removeListeners(el);
      }
    }
  },
  beforeUnmount: function beforeUnmount2(el) {
    removeListeners(el);
  }
};
function install(app) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (app.$_vTooltipInstalled)
    return;
  app.$_vTooltipInstalled = true;
  assign(config, options);
  app.directive("tooltip", PrivateVTooltip);
  app.directive("close-popper", PrivateVClosePopper);
  app.component("v-tooltip", script$1);
  app.component("VTooltip", script$1);
  app.component("v-dropdown", script$3);
  app.component("VDropdown", script$3);
  app.component("v-menu", script$2);
  app.component("VMenu", script$2);
}
var plugin = {
  version: "4.0.0-beta.17",
  install,
  options: config
};
var vTooltip = "";
var tinyEmitter = { exports: {} };
function E$1() {
}
E$1.prototype = {
  on: function(name, callback, ctx) {
    var e = this.e || (this.e = {});
    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx
    });
    return this;
  },
  once: function(name, callback, ctx) {
    var self2 = this;
    function listener() {
      self2.off(name, listener);
      callback.apply(ctx, arguments);
    }
    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function(name) {
    var data2 = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;
    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data2);
    }
    return this;
  },
  off: function(name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];
    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }
    liveEvents.length ? e[name] = liveEvents : delete e[name];
    return this;
  }
};
tinyEmitter.exports = E$1;
tinyEmitter.exports.TinyEmitter = E$1;
var E = tinyEmitter.exports;
var instance = new E();
var emitter = {
  $on: (...args) => instance.on(...args),
  $once: (...args) => instance.once(...args),
  $off: (...args) => instance.off(...args),
  $emit: (...args) => instance.emit(...args)
};
const defaultComponentName = "BeautifulChat";
const VueBeatifulChat = {
  install(app, options = {}) {
    if (this.installed || app.prototype && app.prototype.$isServer) {
      return;
    }
    this.installed = true;
    app.config.globalProperties.$event = emitter;
    this.componentName = options.componentName || defaultComponentName;
    app.component(this.componentName, Launcher);
    app.use(plugin);
  }
};
export { VueBeatifulChat as default };
