'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

exports.__esModule = true;

var _valueConverter = require('aurelia-binding');

var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

var SanitizeHtmlValueConverter = (function () {
  function SanitizeHtmlValueConverter() {
    _classCallCheck(this, _SanitizeHtmlValueConverter);

    this.sanitizer = SanitizeHtmlValueConverter.defaultSanitizer;
  }

  var _SanitizeHtmlValueConverter = SanitizeHtmlValueConverter;

  _SanitizeHtmlValueConverter.defaultSanitizer = function defaultSanitizer(untrustedMarkup) {
    return untrustedMarkup.replace(SCRIPT_REGEX, '');
  };

  _SanitizeHtmlValueConverter.prototype.toView = function toView(untrustedMarkup) {
    if (untrustedMarkup === null) {
      return null;
    }

    return this.sanitizer(untrustedMarkup);
  };

  SanitizeHtmlValueConverter = _valueConverter.valueConverter('sanitizeHtml')(SanitizeHtmlValueConverter) || SanitizeHtmlValueConverter;
  return SanitizeHtmlValueConverter;
})();

exports.SanitizeHtmlValueConverter = SanitizeHtmlValueConverter;