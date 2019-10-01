export const filterItem = (itemArr, key, query) => {
  return itemArr.filter(item => item[key].indexOf(query) !== -1);
};

let angleStart = -360;

export const rotate = (li, d) => {
  $({ d: angleStart }).animate(
    { d: d },
    {
      step: function(now) {
        $(li)
          .css({ transform: 'rotate(' + now + 'deg)' })
          .find('label')
          .css({ transform: 'rotate(' + -now + 'deg)' });
      },
      duration: 0,
    }
  );
};

export const toggleOptions = s => {
  $(s).toggleClass('open');
  var li = $(s).find('li');
  var deg = $(s).hasClass('half') ? 180 / (li.length - 1) : 360 / li.length;
  for (var i = 0; i < li.length; i++) {
    var d = $(s).hasClass('half') ? i * deg - 90 : i * deg;
    $(s).hasClass('open') ? rotate(li[i], d) : rotate(li[i], angleStart);
  }
};
