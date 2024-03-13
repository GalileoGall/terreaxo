namespace SpriteKind {
    export const Desintegrar = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Axo`,
    200,
    true
    )
})
info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let My_food: Sprite = null
let El_malo: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
scene.setBackgroundImage(assets.image`ocean1`)
music.play(music.stringPlayable("C5 B A G F E G F ", 120), music.PlaybackMode.LoopingInBackground)
mySprite = sprites.create(assets.image`axo`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.startCountdown(40)
animation.runImageAnimation(
mySprite,
assets.animation`Axo`,
200,
true
)
game.onUpdateInterval(2000, function () {
    El_malo = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
    El_malo.setPosition(scene.screenWidth(), randint(5, 100))
    El_malo.vx = -60
})
game.onUpdateInterval(2100, function () {
    My_food = sprites.create(img`
        . . . . . . . e e e e . . . . . 
        . . . . . e e 4 5 5 5 e e . . . 
        . . . . e 4 5 6 2 2 7 6 6 e . . 
        . . . e 5 6 6 7 2 2 6 4 4 4 e . 
        . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
        . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
        . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
        e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
        e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
        e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
        e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
        e 5 e c 5 4 5 4 5 5 5 e e . . . 
        e 5 e e 5 5 5 5 5 4 e . . . . . 
        4 5 4 e 5 5 5 5 e e . . . . . . 
        . 4 5 4 5 5 4 e . . . . . . . . 
        . . 4 4 e e e . . . . . . . . . 
        `, SpriteKind.Food)
    My_food.setPosition(scene.screenWidth(), randint(5, 115))
    My_food.vx = -75
})
