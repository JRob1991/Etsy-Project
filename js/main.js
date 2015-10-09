(function () {

  var results = etsyApi.results;

  // load template text
  var template = $('#rows-template').html();
  // complie template and bind context
  var compiled_html = _.template(template)({
    results: results
  });
  console.log('results', results);
  console.log('compiled_html', compiled_html);
  // appent to body
  $('.right').append(compiled_html);

}());
