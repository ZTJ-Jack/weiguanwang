import instance from '@/utils/request.js'
let url = 'http://118.178.180.139:9007'

export function getexhibitionIn(params){ //展会
    return instance({
        url:`${url}/exhibitionInfo/list`,
        method: 'post',
        data:params,
    })
}

export function getmaterialCategory(params){ //资料列表
    return instance({
        url:`${url}/materialCategory/list`,
        method: 'post',
        data:params,
    })
}
export function getmaterial(params){ //资料下载
    return instance({
        url:`${url}/material/list`,
        method: 'post',
        data:params,
    })
}
export function getpositionInfo(params){ //职位列表
    return instance({
        url:`${url}/positionInfo/list`,
        method: 'post',
        data:params,
    })
}
export function getproductCategory(params){ //产品分类
    return instance({
        url:`${url}/productCategory/list`,
        method: 'post',
        data:params,
    })
}
export function getproductInfo(params){ //产品列表
    return instance({
        url:`${url}/productInfo/list`,
        method: 'post',
        data:params,
    })
}