const common = {}

const base64url = require('base64-url')


/* 环境变量设置开关 */
common.log = function() {
    (1 * process.env.SIMPLE_LOG) && console.log(...arguments)
}

/* 当前时间 eg: 2017-1-1 11:11:11 */
common.now = function(type = 'time') {
    if (type === 'date')
        return new Date().format('yyyy-MM-dd')
    return new Date().format('yyyy-MM-dd hh:mm:ss')
}

/* 当前时间 时间戳 */
common.nowTimestamp = function() {
    let now = new Date()
    return Math.round(now / 1000)
}

/* 随机字符串 */
common.randomStr = function(length = 16) {

    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

    var str = ''
    for (var i = 0; i < length; i++) {
        str += chars.substr(Math.floor(Math.random() * chars.length), 1)
    }
    return str
}

/* 把id变成可逆字符串 */
common.encodeId = function(str, len = 5) {

    str += ""

    let dis = len - str.length

    if (dis > 0) {
        str = common.fillChar(str, dis)
    }

    return base64url.encode(str)
}

/* 把字符串解析出id */
common.decodeId = function(str) {

    str = base64url.decode(str)

    return 1 * str
}

/* 填补id   1  => 00001 */
common.fillChar = function(num, count = 2) {

    num += ""

    if (num.length < count) {
        let _0count = count - num.length
        for (let i = 0; i < _0count; i++) {
            num = "0" + num
        }
    }

    return num
}


// 统一处理开始结束时间
common.startEnd = function(year, month = 1, date) {

    let start, end

    if (date == undefined) {

        date = 1

        // 跨度是月

        start = new Date(`${year}-${month}-${date}`)
        end = new Date(`${year}-${month}-${date}`)
        end.setMonth(end.getMonth() + 1)
        end.setDate(end.getDate() - 1)

    } else {

        // 跨度是天

        start = new Date(`${year}-${month}-${date}`)
        end = new Date(`${year}-${month}-${date}`)
        end.setDate(end.getDate() + 1)
        end.setHours(end.getHours() - 1)
    }

    start = start.format('yyyy-MM-dd')
    end = end.format('yyyy-MM-dd')

    return { start, end }

}

module.exports = common