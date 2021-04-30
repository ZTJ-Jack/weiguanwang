import instance from '@/utils/request.js'
let url = 'http://118.178.180.139:9007'

export function getexhibitionIn(params){ //展会
    return instance({
        url:`${url}/exhibitionInfo/list`,
        method: 'post',
        data:params,
    })
}