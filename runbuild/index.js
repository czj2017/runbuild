const chalk = require('chalk')//文字颜色

const { getPrompt } = require('./src/getPrompt') //询问
const { runCmd } = require('./src/runCmd') //运行shell
const config = require('./src/config')
const ALL_PROJECT_NAMES = Object.keys(config)
const START_TIME =  new Date().getTime();

const catenateFun = (buildProjectCell, mode) => {
    if (buildProjectCell) {
        return runCmd(buildProjectCell,mode)
    } else {
        const END_TIME = new Date().getTime();
        console.log(chalk.green(`一共消耗：${(END_TIME - START_TIME)/1000} s`))
    }
}
//询问打包项目
!(async function () {
    const project = await getPrompt();
    console.log(project)
    const PROJECT_NAME = project.name;
    let mode = project.env;
    if(!PROJECT_NAME){
        console.log(chalk.yellow(`tips: 真调皮，没有告诉我你想要构建的项目！`))
        return false
    }
    if (PROJECT_NAME && ALL_PROJECT_NAMES.includes(PROJECT_NAME)) { //名字属于项目集合
        let buildProject = config[PROJECT_NAME];
        if (buildProject.length == 0) return false;
        catenateFun(buildProject[0],mode).then(res => {
            return catenateFun(buildProject[1],mode)
        }).then(res => {
            return catenateFun(buildProject[2],mode)
        }).then(res => {
            return catenateFun(buildProject[3],mode)
        }).then(res => {
            const END_TIME = new Date().getTime();
            console.log(chalk.green(`一共消耗：${(END_TIME - START_TIME)/1000} s`))
        })
    } else{
        console.log(chalk.red(`error: 没有${PROJECT_NAME}该项目！`))
    } 
    

})()