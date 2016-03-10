var Color = require('immutable-color');

exports['default'] = function(root, props) {
  return root.get(module.id, props, {
    primary: Color('blue'),
    black: Color('black'),
    white: Color('white')
  });
}
