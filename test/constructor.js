module('constructor');

var LocalTimeElement = window.customElements.get('local-time');
var RelativeTimeElement = window.customElements.get('relative-time');

test('create local-time from document.createElement', function() {
  var time = document.createElement('local-time');
  equal('LOCAL-TIME', time.nodeName);
});

test('create local-time from constructor', function() {
  var time = new LocalTimeElement();
  equal('LOCAL-TIME', time.nodeName);
});

test('create relative-time from document.createElement', function() {
  var time = document.createElement('relative-time');
  equal('RELATIVE-TIME', time.nodeName);
});

test('create relative-time from constructor', function() {
  var time = new RelativeTimeElement();
  equal('RELATIVE-TIME', time.nodeName);
});

test('ignores elements without a datetime attr', function() {
  var time = document.createElement('local-time');
  equal(time.textContent, '');
});

test('leaves contents alone if only datetime is set', function() {
  var time = document.createElement('local-time');
  time.setAttribute('datetime', '1970-01-01T00:00:00.000Z');
  equal(time.textContent, '');
});
