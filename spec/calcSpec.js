define(['../calc'], function(calc){

    describe('sum', function(){
        it('sould be 5', function(){
            expect(calc.sum(2, 3)).toBe(5);
        })
    })

});