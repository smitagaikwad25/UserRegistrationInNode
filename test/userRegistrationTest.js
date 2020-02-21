var assert = require('chai').assert
var userRegistration = require('../main/userRegistration')

describe('Test Case For validation of name', () =>{

    it('given first name when in proper format should return true',() =>{
        var name = userRegistration.analyseName('Smita')
        assert.isTrue(name)
    })

    it('given first name when not in proper format should return false',() =>{
        var name = userRegistration.analyseName('smita')
        assert.isFalse(name)
    })

    it('given first name when not in proper format should return false',() =>{
        var name = userRegistration.analyseName('Smi12')
        assert.isFalse(name)
    })

    it('given first name start with number should return false',() =>{
        var name = userRegistration.analyseName('12smi')
        assert.isFalse(name)
    })
})

describe('Test Case For validation of last name', () =>{

    it('given last name when in proper format should return true',() =>{
        var name = userRegistration.analyseName('Shinde')
        assert.isTrue(name)
    })

    it('given last name when not in proper format should return false',() =>{
        var name = userRegistration.analyseName('shinde')
        assert.isFalse(name)
    })

    it('given last name when not in proper format should return false',() =>{
        var name = userRegistration.analyseName('Shi12')
        assert.isFalse(name)
    })

    it('given last name start with number should return false',() =>{
        var name = userRegistration.analyseName('12shi')
        assert.isFalse(name)
    })
})

