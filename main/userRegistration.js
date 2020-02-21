module.exports = {
    analyseFirstName(name) {
        var pattern = /^[A-Z]{1}[a-z]{3,}/;
        return pattern.test(name);
    },

    analyseLastName(Lastname) {
        var pattern = /^[A-Z]{1}[a-z]{3,}/;
        return pattern.test(Lastname);
    },

    analyseEmailId(mailId) {
        var pattern = /^[a-zA-Z]{1,}([.]{1})?[0-9a-zA-Z]*[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,4}([.]{1})?([a-zA-Z]{2,3})?$/;
        return pattern.test(mailId)
    }
}