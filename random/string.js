module.exports = (length, chars) => {
    if (chars) {
        if (chars === true || chars == 'all')
            chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        let str = ''
        for (let i = 0; i < length; i++) {
            str += chars.substr(Math.floor(Math.random() * chars.length), 1)
        }
        return str
    } else
        return require('crypto-random-string')(length)
}