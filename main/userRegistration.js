module.exports = {
    analyseName(name) {
        var pattern = /^[A-Z]{1}[a-z]{3,}/;
        return pattern.test(name);
    }
}