//将打包文件放到本地对应的目录
var fs = require('fs-extra');

const copyFileToOtherPath = function (sourcePath, targetDir) {
    return new Promise(async (resolve, reject) => {
        try {
            fs.copy(sourcePath, targetDir, function (err) {
                console.log('sourcePath',err)
                if (!err) {
                    resolve(true)
                }
            })

        } catch (error) {
            console.log(error)
            reject()
        }

    })
}

module.exports = { copyFileToOtherPath }