/**
 *
 * @namespace faker.education
 */
var Education = function (faker) {
  var self = this;
  var fake = faker.fake;


  /**
   * postgraduation
   *
   * @method faker.education.postgraduation
   */
  self.postgraduation = function () {
    return faker.random.arrayElement(faker.definitions.education.postgraduation);
  };

  self.postgraduation.schema = {
    "description": "Generates a postgraduation name.",
    "sampleResults": ["Ford", "Jeep", "Tesla"]
  };
};

module["exports"] = Education;
