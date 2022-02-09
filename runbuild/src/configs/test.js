//测试
const test = {
    // 需要打包的项目名字s
    name:'test',
    zhxyName:'zsZhxy', 
    tableName:'workFlowForm',
    formTableName:'oneTableData',  
    manageName:'rhptManage',
    //需要打包的项目名字s  
    build_cmd : 'npm run test',
    ssh_path: '/home/zhxy/html',
    connect: {
        host : '192.168.10.124',
        port: 22,
        username:'root',
        password: 'xukehao@2017'
    }
}

module.exports = test