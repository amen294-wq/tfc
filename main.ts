// 绘制云朵
function drawCloud (x: number, y: number, w: number, h: number) {
    bgImage.fillRect(x, y, w, h, 1)
    bgImage.fillRect(x + 3, y - 3, w - 6, h + 6, 1)
}
// 绘制黄色大太阳
function drawSun (x: number, y: number) {
    bgImage.fillCircle(x, y, 16, 4)
bgImage.fillCircle(x, y, 11, 5)
bgImage.fillCircle(x - 2, y - 2, 3, 1)
}
let cloudX1 = 0
let bgImage: Image = null
// 1. 初始化动态背景变量
bgImage = image.create(160, 120)
let cloudX2 = 60
let cloudX3 = 110
let cloudX4 = 30
tiles.setCurrentTilemap(tilemap`1`)
// 2. 帧更新背景
game.onUpdate(function () {
    bgImage.fill(9)
    drawSun(130, 25)
    cloudX1 += 0.3
    cloudX2 += 0.6
    cloudX3 += 0.4
    cloudX4 += 0.8
    if (cloudX1 > 170) {
        cloudX1 = -30
    }
    if (cloudX2 > 170) {
        cloudX2 = -40
    }
    if (cloudX3 > 170) {
        cloudX3 = -35
    }
    if (cloudX4 > 170) {
        cloudX4 = -25
    }
    drawCloud(cloudX1, 12, 18, 6)
    drawCloud(cloudX2, 28, 28, 8)
    drawCloud(cloudX3, 18, 24, 7)
    drawCloud(cloudX4, 45, 16, 5)
    scene.setBackgroundImage(bgImage)
})
