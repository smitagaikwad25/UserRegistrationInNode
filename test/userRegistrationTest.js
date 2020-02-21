var assert = require('chai').assert
var userRegistration = require('../main/userRegistration')

describe('Test Case For validation of first name', () => {

    it('given first name when in proper format should return true', () => {
        var name = userRegistration.analyseFirstName('Smita')
        assert.isTrue(name)
    })

    it('given first name when not in proper format should return false', () => {
        var name = userRegistration.analyseFirstName('smita')
        assert.isFalse(name)
    })

    it('given first name when not in proper format should return false', () => {
        var name = userRegistration.analyseFirstName('Smi12')
        assert.isFalse(name)
    })

    it('given first name start with number should return false', () => {
        var name = userRegistration.analyseFirstName('12smi')
        assert.isFalse(name)
    })
})

describe('Test Case For validation of last name', () => {

    it('given last name when in proper format should return true', () => {
        var name = userRegistration.analyseLastName('Shinde')
        assert.isTrue(name)
    })

    it('given last name when not in proper format should return false', () => {
        var name = userRegistration.analyseLastName('shinde')
        assert.isFalse(name)
    })

    it('given last name when not in proper format should return false', () => {
        var name = userRegistration.analyseLastName('Shi12')
        assert.isFalse(name)
    })

    it('given last name start with number should return false', () => {
        var name = userRegistration.analyseLastName('12shi')
        assert.isFalse(name)
    })
})

describe('Test Case to validate mail id', () => {

    it('given mail id when in proper format should return true', () => {
        var mailId = userRegistration.analyseEmailId('smita.shinde123@gmail.com.in')
        assert.isTrue(mailId)
    })

    it('given mail id when not in proper format should return false', () => {
        var mailId = userRegistration.analyseEmailId('122.shinde123@.gmail.com.in')
        assert.isFalse(mailId)
    })

    it('given mail id when not in proper format should return false', () => {
        var mailId = userRegistration.analyseEmailId('122.shinde123@..com.in')
        assert.isFalse(mailId)
    })
})

describe('Test case to validate mobile number', () => {
    
    it('given mobile number when in proper format should return true',() =>{
        var mobileNumber =userRegistration.analyseMobileNumber('91 9999999999')
        assert.isTrue(mobileNumber)
    })

    it('given mobile number when not start with country code should return false',() =>{
        var mobileNumber =userRegistration.analyseMobileNumber('9999999999')
        assert.isFalse(mobileNumber)
    })

    it('given mobile number when start with string should return false',() =>{
        var mobileNumber =userRegistration.analyseMobileNumber('ab 9999999999')
        assert.isFalse(mobileNumber)
    })

    it('given mobile number when end with string should return false',() =>{
        var mobileNumber =userRegistration.analyseMobileNumber('91 9999999ab')
        assert.isFalse(mobileNumber)
    })

    it('given mobile number when not in Proper return false',() =>{
        var mobileNumber =userRegistration.analyseMobileNumber('9999gbhd6576')
        assert.isFalse(mobileNumber)
    })

})

