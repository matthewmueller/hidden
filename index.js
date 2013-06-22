/**
 * Module dependencies.
 */

var Observer = require('mutation-observer');

/**
 * Expose `hidden`.
 */

module.exports = Hidden;

/**
 * Initialize `Hidden`
 *
 * @param {Element} el
 * @param {Function} fn
 */

function Hidden(el, fn) {
  if (!(this instanceof Hidden)) return new Hidden(el, fn);
  var observer = new Observer(this.onchange.bind(this));

  observer.observe(el, {
    attributes: true
  });

  this.fn = fn;
}

/**
 * On Change
 */

Hidden.prototype.onchange = function(changes) {
  for (var i = 0, el; el = changes[i]; i++) {
    if ('attributes' !== el.type) break;
    var target = el.target;
    if (target.offsetWidth <= 0 && target.offsetHeight <= 0) return this.fn();
    break;
  }
};
