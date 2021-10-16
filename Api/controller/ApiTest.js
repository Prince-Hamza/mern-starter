
class ApiTest {
    welcome = (req, res) => {
        res.send(`Welcome Dear ${req.params.name}`)
    }
}

const ApiSet = new ApiTest

module.exports = {
    ApiSet
}