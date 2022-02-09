//测试
const zstest = {
    // 需要打包的项目名字s
    name:'zstest',
    zhxyName:'zhxyTest', 
    tableName:'workFlowFormTest',
    formTableName:'oneTableDataTest',  
    manageName:'rhptManageTest',
    //需要打包的项目名字s  
    build_cmd : 'npm run zstest',
    ssh_path: '/home/zhxy/html',
    connect: {
        host : '192.168.10.118',
        port: 22,
        username:'root',
        password: '*zsxc123456'
    }
}

module.exports = zstest