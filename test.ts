// 在此处测试；当此软件包作为插件使用时，将不会编译此软件包。
serial.redirectToUSB()
basic.forever(function() {
    let dis = HC_SR04.Scan()
    basic.showNumber(dis)
    basic.pause(1000)
})