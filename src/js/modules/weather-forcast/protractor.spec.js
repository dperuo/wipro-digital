describe("'weatherForcast' directive", function() {

  var $search = element(by.model('search'));
  var cities = ['New York', 'Boston', 'Portland'];

  beforeEach(function() {
    browser.get('http://localhost:8000');
  });

  cities.forEach(function(city, index, array) {
    var testText = ['returns', city, 'as target city.'].join(' ');
    var returnVal = ['for', city].join(' ');

    it(testText, function() {
      $search.sendKeys(city).sendKeys(protractor.Key.ENTER);
      var locale = element(by.binding('locale'));
      expect(locale.getText()).toEqual(returnVal);
    })
  })

  cities.forEach(function(city, index, array) {
    var testText = ['returns weather for ', city, '.'].join('');

    it(testText, function() {
      $search.sendKeys(city).sendKeys(protractor.Key.ENTER);
      var resultList = element.all(by.css('.media-list'));

      expect(resultList.count()).toBeGreaterThan(0);
    })
  })
})
