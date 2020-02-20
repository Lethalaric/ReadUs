var chai = require('chai');
var expect = chai.expect;
var calculationUtilities = require('../utilities/calculationUtilities');

describe('calculationUtilities', () => {

    it(
        'test to make sure the percentage calculation is ok', () => {
            var percentage = calculationUtilities.calculatePercentage(100, 10);
            expect(percentage).equal(10);
        }
    );
});