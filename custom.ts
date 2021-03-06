let HC_SR04_Address = 0X57;

//% weight=20 color=#3333ff icon="\uf11b"
namespace HC_SR04 {

    //% blockID==HC_SR04
    //% block="Scan"
    //% weight=90 
    export function Scan(): number {
        let buf = pins.createBuffer(1);
        buf[0] = 0x01;
        pins.i2cWriteBuffer(HC_SR04_Address, buf);
        basic.pause(120)
        let d = [0, 0, 0];
        d[0] = pins.i2cReadNumber(HC_SR04_Address, NumberFormat.UInt8LE, true);
        d[1] = pins.i2cReadNumber(HC_SR04_Address, NumberFormat.UInt8LE, true);
        d[2] = pins.i2cReadNumber(HC_SR04_Address, NumberFormat.UInt8LE, false);
        let dis = (d[0]<<16 + d[1] << 8 + d[2]) / 10000;
        serial.writeNumbers(d)
        return dis;
    }
}