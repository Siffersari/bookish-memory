export const handleSelect = () => {
  [].slice
    .call(document.querySelectorAll('select.cs-select'))
    .forEach(function(el) {
      new SelectFx(el, {
        stickyPlaceholder: false,
        onChange: function(val) {
          var img = document.createElement('img');
          img.src = 'img/' + val + '.png';
          img.onload = function() {
            document.querySelector(
              'span.cs-placeholder'
            ).style.backgroundImage = 'url(img/' + val + '.png)';
          };
        },
      });
    });
};
