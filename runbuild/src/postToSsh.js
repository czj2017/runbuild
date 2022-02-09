//将打包文件放到服务器对应的目录
const Client = require('ssh2-sftp-client');
const fs = require('fs');
const chalk = require('chalk')//文字颜色
const ora = require('ora');
const date = new Date();
const currentDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '-' +date.getHours() + '-' +date.getMinutes()+ '-' +date.getSeconds()

const postToSsh = function (buildProjectCell) {
    return new Promise((resolve, reject) => {
        const { connect } = buildProjectCell
        const serveClient = new Client();
        const connectConfig = {
            host: connect.host || 'localhost',
            port: connect.port || 22,
            user: connect.username || 'root',
            password: connect.password || ''
        }

        try {
            const local_path = buildProjectCell.local_path + buildProjectCell.project
            const ssh_path = buildProjectCell.ssh_path + '/' + buildProjectCell.project
            const rename_path = buildProjectCell.ssh_path + '/' + currentDate + buildProjectCell.project;
            serveClient.connect(connectConfig).then(async () =>{
                console.log(chalk.green(`连接${connectConfig.host}服务器了 \n`))
                let  spinner = new ora()
                let result = await serveClient.exists(ssh_path); //false 不存在 
                if(!result){
                    return Promise.resolve(true)
                }else{
                    spinner.info(`正在备份 ${chalk.green(buildProjectCell.project)} 文件夹\n`);
                    return serveClient.rename(ssh_path, rename_path);
                }
            }).then(() => {
                serveClient.on('upload', info => {
                    ora().info(`正在上传： ${info.source}`);
                });

                serveClient.uploadDir(local_path, ssh_path).then(res => {
                  if(res){
                    console.log(chalk.green(`${buildProjectCell.project} 上传成功！\n`))
                    serveClient.end();
                    resolve(true)
                  }
                })
    
            })
        } catch (error) {
            console.log("服务器报错", error)
        }finally {
           
        }
        // async function main() {
        //     const client = new SftpClient('upload-test');
        //     const src = path.join(__dirname, '..', 'test', 'testData', 'upload-src');
        //     const dst = '/home/tim/upload-test';

        //     try {
        //         await client.connect(config);
        //         client.on('upload', info => {
        //             console.log(`Listener: Uploaded ${info.source}`);
        //         });
        //         let rslt = await client.uploadDir(src, dst);
        //         return rslt;
        //     } finally {
        //         client.end();
        //     }
        // }
       
    })


}

module.exports = { postToSsh }