export function cors() {
  var slice = [].slice;
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function () {
    var args = slice.call(arguments);
    return open.apply(this, args);
  };
}
