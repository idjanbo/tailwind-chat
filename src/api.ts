import request from '/@/utils/request'
//实名
export function validate(data: any) {
  return request({
    url: '/tp/certificate',
    method: 'post',
    data,
  })
}
//查询订单状态
export function checkDeposit(params: any) {
  return request({
    url: '/tp/check',
    method: 'get',
    params,
  })
}
//获取客服配置
export function supporter(params: any) {
  return request({
    url: '/tp/supporter',
    method: 'get',
    params,
  })
}

//上传文件
export function uploadFile(fooId: any, data: any) {
  return request({
    url: `/api/v1/files/upload/${fooId}`,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    timeout: 20000,
    data,
  })
}
