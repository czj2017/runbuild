const process = require('child_process');
const chalk = require('chalk')//文字颜色
const ora = require('ora');
const { copyFileToOtherPath } = require('./copyFileToOtherPath') //运行shell
const { getCmdByPrompt } = require('../utils/utils')
const { postToSsh } = require('../src/postToSsh')

const runCmd = (buildProjectCell,mode) => {
    const cmd = getCmdByPrompt(buildProjectCell)
    const projectName = buildProjectCell.project_name
    return new Promise(async (resolve, reject) => {
        // console.log(chalk.red(`tips:正在打包${projectName}项目！waiting---`))
        const spinner = ora(`tips:正在打包${projectName}项目`).start();//开始下载
        
        process.exec(cmd, async function (error, stdout, stderr) {
            if (!error) {
                spinner.succeed()
                console.log(chalk.green(`tips:${projectName} 项目打包成功！`))
                if(mode == 'local'){
                    await copyFileToOtherPath(buildProjectCell.local_path + buildProjectCell.project, buildProjectCell.to_local_path)
                }else{
                    await postToSsh(buildProjectCell)
                }
                resolve(true)
               
            } else {
                spinner.fail() 
                console.log(chalk.red(`error:${projectName} 项目打包失败！`))
                reject()
            }
        })
    })
}
module.exports = {
    runCmd
}