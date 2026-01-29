const COS = require('cos-nodejs-sdk-v5');

// 初始化 COS 实例
// 依赖环境变量：COS_SECRET_ID, COS_SECRET_KEY
const cos = new COS({
    SecretId: process.env.COS_SECRET_ID,
    SecretKey: process.env.COS_SECRET_KEY,
});

/**
 * 上传文章内容到轻量对象存储
 * @param {string} id 文章的唯一ID (MD5)
 * @param {object} content 文章完整内容对象
 * @returns {Promise<string>} 返回文件的 CDN 访问链接
 */
async function uploadToCOS(id, content) {
    if (!process.env.COS_BUCKET || !process.env.COS_REGION) {
        console.warn('⚠️ COS 配置缺失，跳过云端存储');
        return null;
    }

    const bucket = process.env.COS_BUCKET;
    const region = process.env.COS_REGION;
    const key = `archives/${id}.json`; // 存储路径：archives/md5.json

    return new Promise((resolve, reject) => {
        cos.putObject({
            Bucket: bucket,
            Region: region,
            Key: key,
            Body: JSON.stringify(content), // 内容转为 JSON 字符串
            ContentType: 'application/json; charset=utf-8',
            StorageClass: 'DEFAULT', // 轻量版 COS 必须设为 DEFAULT 或不设
        }, (err, data) => {
            if (err) {
                console.error('❌ COS 上传失败:', err);
                // 即使上传失败，也不要阻断整个流程，返回 null
                resolve(null);
            } else {
                // 构建访问链接
                // 格式: https://<Bucket>.cos.<Region>.myqcloud.com/<Key>
                const url = `https://${bucket}.cos.${region}.myqcloud.com/${key}`;
                console.log('✅ COS 上传成功:', url);
                resolve(url);
            }
        });
    });
}

module.exports = uploadToCOS;
