/**
 * Валидация параметров пользователя, передаваемых в URL запроса.
 * @param {*} schema Схема валидации параметров объекта пользователя.
 * @returns Возвращает результат валидации.
 */
function checkParams(schema) {
    return (req, res, next) => {
        const validationResult = schema.validate(req.params);
        if (validationResult.error) {
            return res.status(400).send(validationResult.error.details);
        }
        next();
    }
}

/**
 * Валидация параметров пользователя, передаваемых в теле запроса.
 * @param {*} schema Схема валидации параметров объекта пользователя.
 * @returns Возвращает результат валидации.
 */
function checkBody(schema) {
    return (req, res, next) => {
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).send(validationResult.error.details);
        }
        next();
    }
}

module.exports = {
    checkParams,
    checkBody,
}