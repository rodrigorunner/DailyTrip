const { z } = require('zod')

module.exports.tripsDailySchema = z.object({
    user_id: z.number(),
    destination: z.string().trim().min(1),
    description: z.string().trim().min(1),
    travel_date: z.coerce.date()
})

module.exports.idValidation = z.object({
    id: z.coerce.number(),
})