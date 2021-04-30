const timestampToTime= function(timestamp) {
    var date = new Date(timestamp ); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = this.change(date.getDate()) + ' ';
    let h = this.change(date.getHours()) + ':';
    let m = this.change(date.getMinutes()) + ':';
    let s = this.change(date.getSeconds());
    return Y + M + D + h + m + s;
}
const change= function(t) {
    if (t < 10) {
        return "0" + t;
    } else {
        return t;
    }
}

export default {
    timestampToTime,
    change
}
