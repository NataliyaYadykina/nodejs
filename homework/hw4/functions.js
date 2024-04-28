const fs = require('fs');

/**
 * Проверка существования файла.
 * @param {*} filePath Путь к файлу.
 * @returns Возвращает true - если файл существует, false - если файл не существует.
 */
function isFileExists(filePath) {
    try {
        fs.accessSync(filePath, fs.constants.R_OK)
        return true
    } catch (e) {
        return false
    }
}

/**
 * Создание файла JSON.
 * @param {*} filePath Путь к файлу JSON.
 */
function createJSON(filePath) {
    fs.closeSync(fs.openSync(filePath, 'w'));
    console.log(
        `${filePath} создан.`
    );
}

/**
 * Получение массива всех пользователей.
 * @param {*} filePath Путь к файлу JSON, содержащему данные о пользователях.
 * @returns Возвращает массив пользователей.
 */
function getUsers(filePath) {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (err) {
        return [];
    }
}

/**
 * Добавление информации о пользователе в файл JSON.
 * @param {*} filePath Путь к файлу JSON, содержащему данные о пользователях.
 * @param {*} users Записываемый в файл JSON массив пользователей.
 */
function writeUsers(filePath, users) {
    fs.writeFileSync(filePath, JSON.stringify(users), 'utf8');
}

/**
 * Поиск запрашиваемого пользователя по ID в массиве всех пользователей.
 * @param {*} users Массив всех пользователей.
 * @param {*} req Объект запроса.
 * @returns Возвращает найденного пользователя.
 */
function findUser(users, req) {
    return users.find((user) => user.id === Number(req.params.id));
}

module.exports = {
    isFileExists: isFileExists,
    createJSON: createJSON,
    getUsers: getUsers,
    writeUsers: writeUsers,
    findUser: findUser
}