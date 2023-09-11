"use strict";

document.getElementById('balloon-close').addEventListener('click', function (e) {
  document.getElementById('balloon').classList.add('balloon__show');
});
"use strict";

document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector(".nav__burger").classList.add("active");
});
document.querySelector(".nav__close").addEventListener("click", function () {
  document.querySelector(".nav__burger").classList.remove("active");
});
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var B = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var W = Object.prototype.hasOwnProperty,
  Y = Object.prototype.propertyIsEnumerable;
var L = function L(f, u, p) {
    return u in f ? B(f, u, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: p
    }) : f[u] = p;
  },
  x = function x(f, u) {
    for (var p in u || (u = {})) W.call(u, p) && L(f, p, u[p]);
    if (V) {
      var _iterator = _createForOfIteratorHelper(V(u)),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          Y.call(u, p) && L(f, p, u[p]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return f;
  };
var d = function d(f, u, p) {
  return L(f, _typeof(u) != "symbol" ? u + "" : u, p), p;
};
(function (f, u) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && typeof module != "undefined" ? module.exports = u() : typeof define == "function" && define.amd ? define(u) : (f = typeof globalThis != "undefined" ? globalThis : f || self, f.JustValidate = u());
})(void 0, function () {
  "use strict";

  var f = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    u = /^[0-9]+$/,
    p = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    M = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    P = function P(o) {
      var e = o;
      return typeof o == "string" && (e = o.trim()), !e;
    },
    N = function N(o) {
      return f.test(o);
    },
    G = function G(o, e) {
      return o.length > e;
    },
    A = function A(o, e) {
      return o.length < e;
    },
    j = function j(o) {
      return u.test(o);
    },
    q = function q(o) {
      return p.test(o);
    },
    O = function O(o) {
      return M.test(o);
    },
    z = function z(o, e) {
      return o > e;
    },
    D = function D(o, e) {
      return o < e;
    };
  var h;
  (function (o) {
    o.Required = "required", o.Email = "email", o.MinLength = "minLength", o.MaxLength = "maxLength", o.Password = "password", o.Number = "number", o.MaxNumber = "maxNumber", o.MinNumber = "minNumber", o.StrongPassword = "strongPassword", o.CustomRegexp = "customRegexp";
  })(h || (h = {}));
  var g;
  (function (o) {
    o.Required = "required";
  })(g || (g = {}));
  var C;
  (function (o) {
    o.Label = "label", o.LabelArrow = "labelArrow";
  })(C || (C = {}));
  var H = function H(o, e) {
      switch (o) {
        case h.Required:
          return "The field is required";
        case h.Email:
          return "Email has invalid format";
        case h.MaxLength:
          return "The field must contain a maximum of :value characters".replace(":value", String(e));
        case h.MinLength:
          return "The field must contain a minimum of :value characters".replace(":value", String(e));
        case h.Password:
          return "Password must contain minimum eight characters, at least one letter and one number";
        case h.Number:
          return "Value should be a number";
        case h.StrongPassword:
          return "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
        case h.MaxNumber:
          return "Number should be less or equal than :value".replace(":value", String(e));
        case h.MinNumber:
          return "Number should be more or equal than :value".replace(":value", String(e));
        default:
          return "Value is incorrect";
      }
    },
    _ = function _(o) {
      switch (o) {
        case g.Required:
          return "The field is required";
        default:
          return "Group is incorrect";
      }
    },
    v = function v(o) {
      return !!o && typeof o.then == "function";
    },
    X = ".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",
    E = 5,
    S = {
      errorFieldStyle: {
        color: "#b81111",
        border: "1px solid #B81111"
      },
      errorFieldCssClass: "just-validate-error-field",
      errorLabelStyle: {
        color: "#b81111"
      },
      errorLabelCssClass: "just-validate-error-label",
      focusInvalidField: !0,
      lockForm: !0,
      testingMode: !1
    };
  var Z = /*#__PURE__*/function () {
    function Z(e, r, t) {
      var _this = this;
      _classCallCheck(this, Z);
      d(this, "form", null);
      d(this, "fields", {});
      d(this, "groupFields", {});
      d(this, "errors", {});
      d(this, "isValid", !1);
      d(this, "isSubmitted", !1);
      d(this, "globalConfig", S);
      d(this, "errorLabels", []);
      d(this, "eventListeners", []);
      d(this, "dictLocale", []);
      d(this, "currentLocale");
      d(this, "customStyleTags", {});
      d(this, "onSuccessCallback");
      d(this, "onFailCallback");
      d(this, "tooltips", []);
      d(this, "lastScrollPosition");
      d(this, "isScrollTick");
      d(this, "refreshAllTooltips", function () {
        _this.tooltips.forEach(function (e) {
          e.refresh();
        });
      });
      d(this, "handleDocumentScroll", function () {
        _this.lastScrollPosition = window.scrollY, _this.isScrollTick || (window.requestAnimationFrame(function () {
          _this.refreshAllTooltips(), _this.isScrollTick = !1;
        }), _this.isScrollTick = !0);
      });
      d(this, "formSubmitHandler", function (e) {
        e.preventDefault(), _this.isSubmitted = !0, _this.globalConfig.lockForm && _this.lockForm(), _this.validate().then(function () {
          var r, t;
          _this.isValid ? (r = _this.onSuccessCallback) == null || r.call(_this, e) : (t = _this.onFailCallback) == null || t.call(_this, _this.fields), _this.globalConfig.lockForm && _this.unlockForm();
        });
      });
      d(this, "handleFieldChange", function (e) {
        var r, t;
        for (var i in _this.fields) {
          var s = _this.fields[i];
          if (s.elem === e) {
            r = s, t = i;
            break;
          }
        }
        !r || !t || _this.validateField(t, r, !0);
      });
      d(this, "handleGroupChange", function (e) {
        var r, t;
        for (var i in _this.groupFields) {
          var s = _this.groupFields[i];
          if (s.elems.find(function (a) {
            return a === e;
          })) {
            r = s, t = i;
            break;
          }
        }
        !r || !t || _this.validateGroup(t, r);
      });
      d(this, "handlerChange", function (e) {
        !e.target || (_this.handleFieldChange(e.target), _this.handleGroupChange(e.target), _this.renderErrors());
      });
      this.initialize(e, r, t);
    }
    _createClass(Z, [{
      key: "initialize",
      value: function initialize(e, r, t) {
        if (this.form = null, this.errors = {}, this.isValid = !1, this.isSubmitted = !1, this.globalConfig = S, this.errorLabels = [], this.eventListeners = [], this.customStyleTags = {}, this.tooltips = [], typeof e == "string") {
          var i = document.querySelector(e);
          if (!i) throw Error("Form with ".concat(e, " selector not found! Please check the form selector"));
          this.setForm(i);
        } else if (e instanceof HTMLFormElement) this.setForm(e);else throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");
        if (this.globalConfig = x(x({}, S), r), t && (this.dictLocale = t), this.isTooltip()) {
          var _i = document.createElement("style");
          _i.textContent = X, this.customStyleTags[C.Label] = document.head.appendChild(_i), this.addListener("scroll", document, this.handleDocumentScroll);
        }
      }
    }, {
      key: "getLocalisedString",
      value: function getLocalisedString(e) {
        var t;
        return !this.currentLocale || !this.dictLocale.length ? e : ((t = this.dictLocale.find(function (i) {
          return i.key === e;
        })) == null ? void 0 : t.dict[this.currentLocale]) || e;
      }
    }, {
      key: "getFieldErrorMessage",
      value: function getFieldErrorMessage(e) {
        return this.getLocalisedString(e.errorMessage) || H(e.rule, e.value);
      }
    }, {
      key: "getGroupErrorMessage",
      value: function getGroupErrorMessage(e) {
        return this.getLocalisedString(e.errorMessage) || _(e.rule);
      }
    }, {
      key: "setFieldInvalid",
      value: function setFieldInvalid(e, r) {
        this.fields[e].isValid = !1, this.fields[e].errorMessage = this.getFieldErrorMessage(r);
      }
    }, {
      key: "setGroupInvalid",
      value: function setGroupInvalid(e, r) {
        this.groupFields[e].isValid = !1, this.groupFields[e].errorMessage = this.getGroupErrorMessage(r);
      }
    }, {
      key: "setGroupValid",
      value: function setGroupValid(e) {
        this.groupFields[e].isValid = !0;
      }
    }, {
      key: "getElemValue",
      value: function getElemValue(e) {
        switch (e.type) {
          case "checkbox":
            return e.checked;
          default:
            return e.value;
        }
      }
    }, {
      key: "validateGroupRule",
      value: function validateGroupRule(e, r, t, i) {
        switch (i.rule) {
          case g.Required:
            (r === "radio" || r === "checkbox") && (t.every(function (s) {
              return !s.checked;
            }) ? this.setGroupInvalid(e, i) : this.setGroupValid(e));
        }
      }
    }, {
      key: "validateFieldRule",
      value: function validateFieldRule(e, r, t) {
        var _this2 = this;
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
        var s = t.value,
          a = this.getElemValue(r);
        switch (t.rule) {
          case h.Required:
            {
              P(a) && this.setFieldInvalid(e, t);
              break;
            }
          case h.Email:
            {
              if (typeof a != "string") {
                this.setFieldInvalid(e, t);
                break;
              }
              N(a) || this.setFieldInvalid(e, t);
              break;
            }
          case h.MaxLength:
            {
              if (!s) {
                console.error("Value for ".concat(t.rule, " rule for [").concat(e, "] field is not defined. The field will be always invalid.")), this.setFieldInvalid(e, t);
                return;
              }
              if (typeof s != "number") {
                console.error("Value for ".concat(t.rule, " rule for [").concat(e, "] should be a number. The field will be always invalid.")), this.setFieldInvalid(e, t);
                return;
              }
              if (typeof a != "string") {
                this.setFieldInvalid(e, t);
                break;
              }
              G(a, s) && this.setFieldInvalid(e, t);
              break;
            }
          case h.MinLength:
            {
              if (!s) {
                console.error("Value for ".concat(t.rule, " rule for [").concat(e, "] field is not defined. The field will be always invalid.")), this.setFieldInvalid(e, t);
                return;
              }
              if (typeof s != "number") {
                console.error("Value for ".concat(t.rule, " rule for [").concat(e, "] should be a number. The field will be always invalid.")), this.setFieldInvalid(e, t);
                return;
              }
              if (typeof a != "string") {
                this.setFieldInvalid(e, t);
                break;
              }
              A(a, s) && this.setFieldInvalid(e, t);
              break;
            }
          case h.Password:
            {
              if (typeof a != "string") {
                this.setFieldInvalid(e, t);
                break;
              }
              q(a) || this.setFieldInvalid(e, t);
              break;
            }
          case h.StrongPassword:
            {
              if (typeof a != "string") {
                this.setFieldInvalid(e, t);
                break;
              }
              O(a) || this.setFieldInvalid(e, t);
              break;
            }
          case h.Number:
            {
              if (typeof a != "string") {
                this.setFieldInvalid(e, t);
                break;
              }
              j(a) || this.setFieldInvalid(e, t);
              break;
            }
          case h.MaxNumber:
            {
              if (!s) {
                console.error("Value for ".concat(t.rule, " rule for [").concat(e, "] field is not defined. The field will be always invalid.")), this.setFieldInvalid(e, t);
                return;
              }
              if (typeof s != "number") {
                console.error("Value for ".concat(t.rule, " rule for [").concat(e, "] field should be a number. The field will be always invalid.")), this.setFieldInvalid(e, t);
                return;
              }
              if (typeof a != "string") {
                this.setFieldInvalid(e, t);
                break;
              }
              var l = +a;
              (Number.isNaN(l) || z(l, s)) && this.setFieldInvalid(e, t);
              break;
            }
          case h.MinNumber:
            {
              if (!s) {
                console.error("Value for ".concat(t.rule, " rule for [").concat(e, "] field is not defined. The field will be always invalid.")), this.setFieldInvalid(e, t);
                return;
              }
              if (typeof s != "number") {
                console.error("Value for ".concat(t.rule, " rule for [").concat(e, "] field should be a number. The field will be always invalid.")), this.setFieldInvalid(e, t);
                return;
              }
              if (typeof a != "string") {
                this.setFieldInvalid(e, t);
                break;
              }
              var _l = +a;
              (Number.isNaN(_l) || D(_l, s)) && this.setFieldInvalid(e, t);
              break;
            }
          case h.CustomRegexp:
            {
              if (!s) {
                console.error("Value for ".concat(t.rule, " rule for [").concat(e, "] field is not defined. This field will be always invalid.")), this.setFieldInvalid(e, t);
                return;
              }
              var _l2;
              try {
                _l2 = new RegExp(s);
              } catch (_unused) {
                console.error("Value for ".concat(t.rule, " rule for [").concat(e, "] should be a valid regexp. This field will be always invalid.")), this.setFieldInvalid(e, t);
                break;
              }
              _l2.test(String(a)) || this.setFieldInvalid(e, t);
              break;
            }
          default:
            {
              if (!t.validator) {
                console.error("Validator for custom rule for [".concat(e, "] field is not defined. This field will be always invalid.")), this.setFieldInvalid(e, t);
                return;
              }
              if (typeof t.validator != "function") {
                console.error("Validator for custom rule for [".concat(e, "] field should be a function. This field will be always invalid.")), this.setFieldInvalid(e, t);
                return;
              }
              var _l3 = t.validator(a, this.fields);
              if (typeof _l3 != "boolean" && typeof _l3 != "function" && console.error("Validator return value for [".concat(e, "] field should be boolean or function. It will be cast to boolean.")), typeof _l3 == "function" && !i) {
                var c = _l3();
                if (!v(c)) {
                  console.error("Validator function for custom rule for [".concat(e, "] field should return a Promise. This field will be always invalid.")), this.setFieldInvalid(e, t);
                  return;
                }
                return c.then(function (m) {
                  m || _this2.setFieldInvalid(e, t);
                })["catch"](function () {
                  _this2.setFieldInvalid(e, t);
                });
              }
              _l3 || this.setFieldInvalid(e, t);
            }
        }
      }
    }, {
      key: "validateField",
      value: function validateField(e, r) {
        var _this3 = this;
        var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        r.isValid = !0;
        var i = [];
        return _toConsumableArray(r.rules).reverse().forEach(function (s) {
          var a = _this3.validateFieldRule(e, r.elem, s, t);
          v(a) && i.push(a);
        }), Promise.allSettled(i);
      }
    }, {
      key: "validateGroup",
      value: function validateGroup(e, r) {
        var _this4 = this;
        var t = [];
        return _toConsumableArray(r.rules).reverse().forEach(function (i) {
          var s = _this4.validateGroupRule(e, r.type, r.elems, i);
          v(s) && t.push(s);
        }), Promise.allSettled(t);
      }
    }, {
      key: "focusInvalidField",
      value: function focusInvalidField() {
        var _this5 = this;
        var _loop = function _loop() {
          var r = _this5.fields[e];
          if (!r.isValid) {
            setTimeout(function () {
              return r.elem.focus();
            }, 0);
            return "break";
          }
        };
        for (var e in this.fields) {
          var _ret = _loop();
          if (_ret === "break") break;
        }
      }
    }, {
      key: "afterSubmitValidation",
      value: function afterSubmitValidation() {
        this.renderErrors(), this.globalConfig.focusInvalidField && this.focusInvalidField();
      }
    }, {
      key: "validate",
      value: function validate() {
        var _this6 = this;
        return new Promise(function (e) {
          var r = [];
          Object.keys(_this6.fields).forEach(function (t) {
            var i = _this6.fields[t],
              s = _this6.validateField(t, i);
            v(s) && r.push(s);
          }), Object.keys(_this6.groupFields).forEach(function (t) {
            var i = _this6.groupFields[t],
              s = _this6.validateGroup(t, i);
            v(s) && r.push(s);
          }), r.length ? Promise.allSettled(r).then(function () {
            _this6.afterSubmitValidation(), e(!0);
          }) : (_this6.afterSubmitValidation(), e(!1));
        });
      }
    }, {
      key: "setForm",
      value: function setForm(e) {
        this.form = e, this.form.setAttribute("novalidate", "novalidate"), this.removeListener("submit", this.form, this.formSubmitHandler), this.addListener("submit", this.form, this.formSubmitHandler);
      }
    }, {
      key: "addListener",
      value: function addListener(e, r, t) {
        r.addEventListener(e, t), this.eventListeners.push({
          type: e,
          elem: r,
          func: t
        });
      }
    }, {
      key: "removeListener",
      value: function removeListener(e, r, t) {
        r.removeEventListener(e, t);
      }
    }, {
      key: "addField",
      value: function addField(e, r, t) {
        if (typeof e != "string") throw Error("Field selector is not valid. Please specify a string selector.");
        var i = document.querySelector(e);
        if (!i) throw Error("Field with ".concat(e, " selector not found! Please check the field selector."));
        if (!Array.isArray(r) || !r.length) throw Error("Rules argument for the field [".concat(e, "] should be an array and should contain at least 1 element."));
        return r.forEach(function (s) {
          if (!("rule" in s || "validator" in s)) throw Error("Rules argument for the field [".concat(e, "] must contain at least one rule or validator property."));
          if (!s.validator && (!s.rule || !Object.values(h).includes(s.rule))) throw Error("Rule should be one of these types: ".concat(Object.values(h).join(", "), ". Provided value: ").concat(s.rule));
        }), this.fields[e] = {
          elem: i,
          rules: r,
          isValid: void 0,
          config: t
        }, this.setListeners(i), this.isSubmitted && this.validate(), this;
      }
    }, {
      key: "removeField",
      value: function removeField(e) {
        if (typeof e != "string") throw Error("Field selector is not valid. Please specify a string selector.");
        return this.fields[e] ? (this.destroy(), delete this.fields[e], this.refresh(), this) : (console.error("Field not found. Check the field selector."), this);
      }
    }, {
      key: "addRequiredGroup",
      value: function addRequiredGroup(e, r, t) {
        var _this7 = this;
        if (typeof e != "string") throw Error("Group selector is not valid. Please specify a string selector.");
        var i = document.querySelector(e);
        if (!i) throw Error("Group with ".concat(e, " selector not found! Please check the group selector."));
        var s = i.querySelectorAll("input"),
          a = Array.from(s).every(function (c) {
            return c.type === "radio";
          }),
          l = Array.from(s).every(function (c) {
            return c.type === "checkbox";
          });
        if (!a && !l) throw Error("Group should contain either or checkboxes or radio buttons");
        return this.groupFields[e] = {
          rules: [{
            rule: g.Required,
            errorMessage: r
          }],
          groupElem: i,
          elems: Array.from(s),
          type: a ? "radio" : "checkbox",
          isDirty: !1,
          isValid: void 0,
          config: t
        }, s.forEach(function (c) {
          _this7.setListeners(c);
        }), this;
      }
    }, {
      key: "getListenerType",
      value: function getListenerType(e) {
        switch (e) {
          case "checkbox":
          case "select-one":
          case "radio":
            return "change";
          default:
            return "keyup";
        }
      }
    }, {
      key: "setListeners",
      value: function setListeners(e) {
        var r = this.getListenerType(e.type);
        this.removeListener(r, e, this.handlerChange), this.addListener(r, e, this.handlerChange);
      }
    }, {
      key: "clearErrors",
      value: function clearErrors() {
        var _this8 = this;
        var e, r, t;
        this.errorLabels.forEach(function (i) {
          return i.remove();
        });
        var _loop2 = function _loop2() {
          var s = _this8.fields[i],
            a = ((e = s.config) == null ? void 0 : e.errorFieldStyle) || _this8.globalConfig.errorFieldStyle;
          Object.keys(a).forEach(function (l) {
            s.elem.style[l] = "";
          }), s.elem.classList.remove(((r = s.config) == null ? void 0 : r.errorFieldCssClass) || _this8.globalConfig.errorFieldCssClass);
        };
        for (var i in this.fields) {
          _loop2();
        }
        var _loop3 = function _loop3() {
          var s = _this8.groupFields[_i2],
            a = ((t = s.config) == null ? void 0 : t.errorFieldStyle) || _this8.globalConfig.errorFieldStyle;
          Object.keys(a).forEach(function (l) {
            s.elems.forEach(function (c) {
              var m;
              c.style[l] = "", c.classList.remove(((m = s.config) == null ? void 0 : m.errorFieldCssClass) || _this8.globalConfig.errorFieldCssClass);
            });
          });
        };
        for (var _i2 in this.groupFields) {
          _loop3();
        }
        this.tooltips = [];
      }
    }, {
      key: "isTooltip",
      value: function isTooltip() {
        return !!this.globalConfig.tooltip;
      }
    }, {
      key: "lockForm",
      value: function lockForm() {
        var e = this.form.querySelectorAll("input, textarea, button, select");
        for (var r = 0, t = e.length; r < t; ++r) e[r].setAttribute("disabled", "disabled"), e[r].style.pointerEvents = "none", e[r].style.webkitFilter = "grayscale(100%)", e[r].style.filter = "grayscale(100%)";
      }
    }, {
      key: "unlockForm",
      value: function unlockForm() {
        var e = this.form.querySelectorAll("input, textarea, button, select");
        for (var r = 0, t = e.length; r < t; ++r) e[r].removeAttribute("disabled"), e[r].style.pointerEvents = "", e[r].style.webkitFilter = "", e[r].style.filter = "";
      }
    }, {
      key: "renderTooltip",
      value: function renderTooltip(e, r, t) {
        var _this9 = this;
        var y;
        var _e$getBoundingClientR = e.getBoundingClientRect(),
          i = _e$getBoundingClientR.top,
          s = _e$getBoundingClientR.left,
          a = _e$getBoundingClientR.width,
          l = _e$getBoundingClientR.height,
          c = r.getBoundingClientRect(),
          m = t || ((y = this.globalConfig.tooltip) == null ? void 0 : y.position);
        switch (m) {
          case "left":
            {
              r.style.top = "".concat(i + l / 2 - c.height / 2, "px"), r.style.left = "".concat(s - c.width - E, "px");
              break;
            }
          case "top":
            {
              r.style.top = "".concat(i - c.height - E, "px"), r.style.left = "".concat(s + a / 2 - c.width / 2, "px");
              break;
            }
          case "right":
            {
              r.style.top = "".concat(i + l / 2 - c.height / 2, "px"), r.style.left = "".concat(s + a + E, "px");
              break;
            }
          case "bottom":
            {
              r.style.top = "".concat(i + l + E, "px"), r.style.left = "".concat(s + a / 2 - c.width / 2, "px");
              break;
            }
        }
        return r.dataset.direction = m, {
          refresh: function refresh() {
            _this9.renderTooltip(e, r, t);
          }
        };
      }
    }, {
      key: "createErrorLabelElem",
      value: function createErrorLabelElem(e, r, t) {
        var i = document.createElement("div");
        i.innerHTML = r;
        var s = this.isTooltip() ? t == null ? void 0 : t.errorLabelStyle : (t == null ? void 0 : t.errorLabelStyle) || this.globalConfig.errorLabelStyle;
        return Object.assign(i.style, s), i.classList.add((t == null ? void 0 : t.errorLabelCssClass) || this.globalConfig.errorLabelCssClass, "just-validate-error-label"), this.isTooltip() && (i.dataset.tooltip = "true"), this.globalConfig.testingMode && (i.dataset.testId = "error-label-".concat(e)), this.errorLabels.push(i), i;
      }
    }, {
      key: "renderErrors",
      value: function renderErrors() {
        var _this10 = this;
        var e, r, t, i, s, a, l, c, m, k, y, T;
        if (!!this.isSubmitted) {
          this.clearErrors(), this.isValid = !0;
          var _loop4 = function _loop4() {
            var n = _this10.groupFields[F];
            if (n.isValid) return "continue";
            _this10.isValid = !1, n.elems.forEach(function (w) {
              var $, I;
              Object.assign(w.style, (($ = n.config) == null ? void 0 : $.errorFieldStyle) || _this10.globalConfig.errorFieldStyle), w.classList.add(((I = n.config) == null ? void 0 : I.errorFieldCssClass) || _this10.globalConfig.errorFieldCssClass);
            });
            var b = _this10.createErrorLabelElem(F, n.errorMessage, n.config);
            n.groupElem.appendChild(b), _this10.isTooltip() && _this10.tooltips.push(_this10.renderTooltip(n.groupElem, b, (r = (e = n.config) == null ? void 0 : e.tooltip) == null ? void 0 : r.position));
          };
          for (var F in this.groupFields) {
            var _ret2 = _loop4();
            if (_ret2 === "continue") continue;
          }
          for (var _F in this.fields) {
            var n = this.fields[_F];
            if (n.isValid) continue;
            this.isValid = !1, n.elem.classList.add(((t = n.config) == null ? void 0 : t.errorFieldCssClass) || this.globalConfig.errorFieldCssClass);
            var b = this.createErrorLabelElem(_F, n.errorMessage, n.config);
            if (n.elem.type === "checkbox" || n.elem.type === "radio") {
              var w = document.querySelector("label[for=\"".concat(n.elem.getAttribute("id"), "\"]"));
              ((s = (i = n.elem.parentElement) == null ? void 0 : i.tagName) == null ? void 0 : s.toLowerCase()) === "label" ? (l = (a = n.elem.parentElement) == null ? void 0 : a.parentElement) == null || l.appendChild(b) : w ? (c = w.parentElement) == null || c.appendChild(b) : (m = n.elem.parentElement) == null || m.appendChild(b);
            } else (k = n.elem.parentElement) == null || k.appendChild(b);
            this.isTooltip() && this.tooltips.push(this.renderTooltip(n.elem, b, (T = (y = n.config) == null ? void 0 : y.tooltip) == null ? void 0 : T.position));
          }
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this11 = this;
        this.eventListeners.forEach(function (e) {
          _this11.removeListener(e.type, e.elem, e.func);
        }), Object.keys(this.customStyleTags).forEach(function (e) {
          _this11.customStyleTags[e].remove();
        }), this.clearErrors(), this.globalConfig.lockForm && this.unlockForm();
      }
    }, {
      key: "refresh",
      value: function refresh() {
        var _this12 = this;
        this.destroy(), this.form ? (this.initialize(this.form, this.globalConfig), Object.keys(this.fields).forEach(function (e) {
          _this12.addField(e, _toConsumableArray(_this12.fields[e].rules), _this12.fields[e].config);
        })) : console.error("Cannot initialize the library! Form is not defined");
      }
    }, {
      key: "setCurrentLocale",
      value: function setCurrentLocale(e) {
        if (typeof e != "string" && e !== void 0) {
          console.error("Current locale should be a string");
          return;
        }
        this.currentLocale = e, this.isSubmitted && this.validate();
      }
    }, {
      key: "onSuccess",
      value: function onSuccess(e) {
        return this.onSuccessCallback = e, this;
      }
    }, {
      key: "onFail",
      value: function onFail(e) {
        return this.onFailCallback = e, this;
      }
    }]);
    return Z;
  }();
  return Z;
});
"use strict";

var center = [55.76963601332982, 37.636710499999985];
function init() {
  var map = new ymaps.Map("myMap1", {
    center: center,
    zoom: 15
  });
  var placemark = new ymaps.Placemark(center, {
    balloonContentHeader: 'Студия «High pass»',
    balloonContentBody: '107045, Москва, Даев переулок, дом 41, бизнес-центр «Даев Плаза», этаж 8, офис № 82',
    balloonContentFooter: 'tel: +7 495 424-23-532'
  }, {
    iconLayout: 'default#image',
    iconImageHref: './img/svg/map.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [-18, -33]
  });
  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}
ymaps.ready(init);
"use strict";

document.addEventListener('DOMContentLoaded', function (e) {
  document.getElementById('form-btn__open').addEventListener('click', function (e) {
    document.getElementById('search-form').classList.add('search__form_show');
  });
  document.getElementById('header-btn-close').addEventListener('click', function (e) {
    document.getElementById('search-form').classList.remove('search__form_show');
  });
  document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
  });
});
"use strict";

//import JustValidate from 'just-validate';

document.addEventListener("DOMContentLoaded", function () {
  var validation = new JustValidate('.order__form');
  validation.addField('.input-name', [{
    rule: 'minLength',
    value: 3,
    errorMessage: "Не достаточное количество символов!"
  }, {
    rule: 'required',
    value: true,
    errorMessage: 'Заполните имя!'
  }, {
    rule: 'customRegexp',
    value: /^[a-zA-Zа-яёА-ЯЁ\s\-]+$/,
    errorMessage: 'Недопустимый формат!'
  }]).addField('.input-email', [{
    rule: 'required',
    errorMessage: 'Введите Email!'
  }, {
    rule: 'email',
    errorMessage: 'Недопустимый формат!'
  }]).addField('.contacts__comment', [{
    rule: 'required',
    errorMessage: "Поле нужно заполнить!"
  }]);
  document.getElementById('order-form').addEventListener('submit', function (event) {
    event.preventDefault();
    event.target.reset();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var validation = new JustValidate('.about-as__form');
  validation.addField('.email', [{
    rule: 'required',
    errorMessage: 'Введите Email!'
  }, {
    rule: 'email',
    errorMessage: 'Недопустимый формат!'
  }]);
  document.getElementById('form-email').addEventListener('submit', function (event) {
    event.preventDefault();
    event.target.reset();
  });
});
"use strict";

require("./components/balloon");
require("./components/burger");
require("./components/map");
require("./components/search");
require("./components/validate-forms");
require("./components/just-validate.min");
//# sourceMappingURL=app.js.map
