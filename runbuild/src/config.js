const orgin_path = '/Users/chuzhaojie/Desktop/zsxc-project/智慧校园v0' // 原始路径
const target_path = '/Users/chuzhaojie/Desktop/build-project' // 目标路径
const base_path_name = ""
const base_version = ""
//上面两个变量的应用
// const base_path_name = "hsxy-"
// const base_version = "-v1.0.0"
//local_path = "hsxy-rhpt-web-v1.0.0"
const zsxc = require('./configs/zsxc')
const hnzy = require('./configs/hnzy')
const hsxy = require('./configs/hsxy')
const hszy = require('./configs/hszy')
const whjs = require('./configs/whjs')
const build = require('./configs/build')
const hnsf = require('./configs/hnsf')
const hbsf = require('./configs/hbsf')
const zstest = require('./configs/zstest')
const test = require('./configs/test')
const projectArray = [zsxc, hnzy, zstest, test, hnsf, hsxy,hszy,whjs,build,hbsf]
let config = {};
const setConfig = function () {
    projectArray.forEach(school => {
        const name = school.name
        config[name] = []
        if (school.hasOwnProperty('zhxyName')) {
            config[name].push({
                'project_name': '智慧校园门户',
                'project': school.zhxyName,
                'local_path': `${orgin_path}/${base_path_name}rhpt-web${base_version}/`,
                'to_local_path': `${target_path}/${school.name}/${school.zhxyName}`,
                'ssh_path': school.ssh_path,
                'build_cmd': school.build_cmd,
                'connect': school.connect
            })
        }
        if (school.hasOwnProperty('tableName')) {
            config[name].push({
                'project_name': '智慧校园表单引擎',
                'project': school.tableName,
                'local_path': `${orgin_path}/table-web/`,
                'to_local_path': `${target_path}/${school.name}/${school.tableName}`,
                'ssh_path': school.ssh_path,
                'build_cmd': school.build_cmd,
                'connect': school.connect
            })
        }
        if (school.hasOwnProperty('formTableName')) {
            config[name].push({
                'project_name': '智慧校园一表通',
                'project': school.formTableName,
                'local_path': `${orgin_path}/rhpt-form-table/`,
                'to_local_path': `${target_path}/${school.name}/${school.formTableName}`,
                'ssh_path': school.ssh_path,
                'build_cmd': school.build_cmd,
                'connect': school.connect
            })
        }
        if (school.hasOwnProperty('manageName')) {
            config[name].push({
                'project_name': '智慧校园管理后台',
                'project': school.manageName,
                'local_path': `${orgin_path}/rhpt-manage-ui/`,
                'to_local_path': `${target_path}/${school.name}/${school.manageName}`,
                'ssh_path': school.ssh_path,
                'build_cmd': school.build_cmd,
                'connect': school.connect
            })
        }
    })
}
setConfig();
module.exports = config