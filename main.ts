namespace SpriteKind {
    export const EnemyProjectile = SpriteKind.create()
    export const PlayerProjectile = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.EnemyProjectile, function (sprite, otherSprite) {
    thePlayer.say("OW!", 100)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.PlayerProjectile, function (sprite, otherSprite) {
    theEnemy.say("OW!", 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
6 6 6 6 
6 6 6 6 
6 6 6 6 
6 6 6 6 
`, thePlayer, 100, 0)
    projectile.setKind(SpriteKind.PlayerProjectile)
})
let projectile: Sprite = null
let theEnemy: Sprite = null
let thePlayer: Sprite = null
thePlayer = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . . . . . . . . . 
. . . f f f 2 2 f f f . . . . . . . . . . . . . 
. . f f f 2 2 2 2 f f f . . . . . . . . . . . . 
. f f f e e e e e e f f f . . . . . . . . . . . 
. f f e 2 2 2 2 2 2 e e f . . . . . . . . . . . 
. f e 2 f f f f f f 2 e f . . . . . . . . . . . 
. f f f f e e e e f f f f . . . . . . . . . . . 
f f e f b f 4 4 f b f e f f . . . . . . . . . . 
f e e 4 1 f d d f 1 4 e e f . . . . . . . . . . 
. f f f f d d d d d e e f . . . . . . . . . . . 
f d d d d f 4 4 4 e e f . . . . . . . . . . . . 
f b b b b f 2 2 2 2 f 4 e . . . . . . . . . . . 
f b b b b f 2 2 2 2 f d 4 . . . . . . . . . . . 
. f c c f 4 5 5 4 4 f 4 4 . . . . . . . . . . . 
. . f f f f f f f f . . . . . . . . . . . . . . 
. . . . f f . . f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
thePlayer.left = 10
controller.moveSprite(thePlayer, 0, 100)
theEnemy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . b 5 5 b . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. b b b b b 5 5 5 5 5 5 5 b . . 
. b d 5 b 5 5 5 5 5 5 5 5 b . . 
. . b 5 5 b 5 d 1 f 5 d 4 f . . 
. . b d 5 5 b 1 f f 5 4 4 c . . 
b b d b 5 5 5 d f b 4 4 4 4 b . 
b d d c d 5 5 b 5 4 4 4 4 4 4 b 
c d d d c c b 5 5 5 5 5 5 5 b . 
c b d d d d d 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Enemy)
theEnemy.right = 150
game.onUpdate(function () {
    theEnemy.y = 60 + Math.sin(game.runtime() / 1000) * 50
    theEnemy.x = 60 + Math.cos(game.runtime() / 500) * 50
})
game.onUpdateInterval(50, function () {
    projectile = sprites.createProjectileFromSprite(img`
4 4 4 4 
4 4 4 4 
4 4 4 4 
4 4 4 4 
`, theEnemy, -60, 0)
    projectile.setKind(SpriteKind.EnemyProjectile)
})
