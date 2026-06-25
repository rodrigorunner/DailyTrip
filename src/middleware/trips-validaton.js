const ExpressError = require('../utils/ExpressError')
const { tripsDailySchema, idValidation } = require('../validation-schema')

module.exports.tripsDailyValidation = async (req, res, next) => {
    const result = await tripsDailySchema.safeParseAsync(req.body)

    if (!result.success) {
        throw new ExpressError('All fields are required.', 400)
    }

    req.body = result.data
    next()
}

