function setCookie(key, value, day) {
    // key 表示 cookie的键
    // value 表示 cookie的值
    // day 表示多少天过期，不传默认回话时效
    if (day) {
        var time = new Date();//当前时间
        time.setTime(time.getTime() - 8 * 60 * 60 * 1000 + day * 24 * 60 * 60 * 1000);//day天以后
        document.cookie = key + "=" + value + ";expires=" + time;
    } else {
        document.cookie = key + "=" + value;
    }
}

function removeCookie(key) {
    // key 表示 cookie的键
    setCookie(key, 1, -1)
}

function getCookie(key) {
    // key 表示 cookie的键
    var str = document.cookie;
    // 把str变成一个数组，数组的每个元素都是一个“key=value”
    var arr = str.split("; ");
    // 我想获取key对应的值
    for (var i = 0; i < arr.length; i++) {
        // 遍历到的每一个元素arr[i] = "key=value"
        // 把这个"key=value"变成[key,value]
        var temp = arr[i].split('=');
        if (temp[0] == key) {
            return temp[1];
        }
    }

}