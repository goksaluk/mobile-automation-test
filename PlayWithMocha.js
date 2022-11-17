describe('Account Feature', function (){


    before(function() {
        console.log("BEFORE");
    })

    after(function() {
        console.log('AFTER');
    })

    beforeEach(function(){
        console.log('before each test case');
    })

    afterEach(function() {
        console.log('after each test cases');
    })

    it('should not printout hello world', function(){
        console.log("Hello World");
    });
    it('should printout hello world Covea', function(){
        console.log("Hello World");
    });
});