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
  /**
   * graduation
   *
   * @method faker.education.graduation
   */
  self.graduation = function () {
    return faker.random.arrayElement(faker.definitions.education.graduation);
  };

  self.graduation.schema = {
    "description": "Generates a graduation name.",
    "sampleResults": ["Ford", "Jeep", "Tesla"]
  };
};

module["exports"] = Education;
