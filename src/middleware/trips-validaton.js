const ExpressError = require('../utils/ExpressError')
const { tripsDailySchema, idValidation } = require('../validation-schema')

module.exports.tripsDailyValidation = async (req, res, next) => {
    const result = await tripsDailySchema.safeParseAsync(req.body)

    if (!result.success) {
        throw new ExpressError(result.error.issues[0].message, 400)
    }

    req.body = result.data
    next()
}

