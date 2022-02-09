const getCmdByPrompt = (project) => { //拼接指令字符串
    return 'cd ' + project.local_path + " && " + project.build_cmd;//
}
module.exports = {
    getCmdByPrompt
}