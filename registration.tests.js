describe('Registration', function(){
    
            


    it('Should be able to return "invalid registration number" when user enter a registration number with wrong format ', function(){

        let regis = registrationNumbersFactory();

   
    
    assert.equal("Invalid registration number", regis.regi("cy21252"));

         

})
it('Should be able to take in registration number with two specified letters containing 5 numbers with space between numbers and letters', function(){

    let regis = registrationNumbersFactory();



assert.equal("CW 21252", regis.regi("cw 21252"));

     

})
it('Should be able to take in registration number with two first letters written in small letters and must be able to return them in Capital letters', function(){

    let regis = registrationNumbersFactory();



assert.equal("CY 84562", regis.regi("cy 84562"));

     

})
it('Should not return same registration number', function(){

    let regis = registrationNumbersFactory();
  
    regis.regi("cw 12345")
    regis.regi("cw 12045")



assert.equal("registration number already exist", regis.regi("cw 12345"));

     

})

it('Should be able to return stored tems', function(){

    let regis = registrationNumbersFactory();
   let stores = ["CW 12345","CW 12045","CW 12845"]
    regis.regi("cw 12345")
    regis.regi("cw 12045")
    regis.regi("cw 12845")



assert.deepEqual(stores, regis.getRegi());

     

})

});
