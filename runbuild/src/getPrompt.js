const inquirer = require('inquirer'); //询问

const getPrompt = () => { //询问要打包的项目 不写默认所有，
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: '请输入要打包的平台，如:hnzy \n'
    },
    {
        type: 'list',
        name: 'env',
        message: '是打包到本地，还是打包到指定服务器？',
        choices:[new inquirer.Separator("===请选择==="),'local','serve']
    }])
}

module.exports = {
    getPrompt
}