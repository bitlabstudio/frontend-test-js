(function () {
  // Filters
  var container = document.getElementById('filters'),
    filters = container.getElementsByClassName('badge');
  for (var filter of filters) {
    filter.onclick = function(e) {
      var input = e.srcElement,
        items = document.getElementsByClassName(
          'grid-item filter-' + input.value);
      for (var item of items) {
        item.style.display = input.checked ? 'block' : 'none';
      }
    }
  };
})();
