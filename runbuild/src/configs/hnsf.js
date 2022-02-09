//测试
const hnsf = {
    name:'hnsf',
    // 需要打包的项目名字s
    zhxyName:'zhxy', 
    tableName:'workFlowForm',
    manageName:'rhptManage',
    formTableName:'oneTableData',    
    //需要打包的项目名字s  
    build_cmd : 'npm run hnsf',
    ssh_path: '',
    connect: {
        host : '8.142.1.117',
        port: 22,
        username:'root',
        password: 'Ahdx2011'
    }
}

module.exports = hnsf