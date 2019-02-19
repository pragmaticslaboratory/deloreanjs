module.exports = {
    check(filename, expected, describeTitle, testType){
        const assert = require('assert');
        const { dependeciesVisitor, initConfigVisitor } = require('../src/staticAnalysis');

        describe(describeTitle, function(){
            switch(testType){
                case 'dependencies':
                    it('Captures Dependencies', function() {
                        let { dependencies } = require('../index')(filename, [dependeciesVisitor]);
                        assert.deepEqual(dependencies,  expected);
                    });
                break;

                case 'addRequire':
                    it('Adds Require', function() {
                        let { code } = require('../index')(filename, [ dependeciesVisitor, initConfigVisitor ]);
                        assert.equal(code, expected);
                    });
                break;
            }
        })
    }
}