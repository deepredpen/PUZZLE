enchant();

window.onload = function(){
    var game = new Game(800, 600);
    game.fps = 60;

    game.onload = function(){
        var msg = new Label("root Scene");
        msg.x = 400;
        msg.y = 200;

        game.rootScene.backgroundColor = "#FFFFFF";
        game.rootScene.addChild(msg);

        novel = createNovelScene();

        game.rootScene.addEventListener('touchstart', function() {
            game.pushScene(novel);
        });
    };
    game.start();
};

/*
Core
- rootScene
-- Sprite (cube)
*/

/*
var Coordinate = function(x, y){
    this.x = x;
    this.y = y;
};

var Cube = function(name, x, y){
    this.name = name;
    this.coord = new Coordinate(x, y);
};

var Space = function(width, height){
    this.width = width;
    this.height = height;
};

//x, yはspaceのどこに配置するか
var Board = function(x, y, width, height, block){
    var _this = this;
    _this.x = x;
    _this.y = y;
    _this.width = width;
    _this.height = height;
    _this.block = block;
    _this.getRealCoordinate = function(vx, vy) {
        return new Coordinate((vx - _this.x) / _this.block, (vy - _this.y) / _this.block);
    };
    _this.getVirtualCoordinate = function(rx, ry) {
        return new Coordinate((rx * _this.block) + _this.x, (ry * _this.block) + _this.y);
    };
};



window.onload = function(){
    //console.log("hello world\n");
    var core = new Core(1000, 600);
    //core.fps = n でフレームレートを調整する
    core.fps = 30;
    core.preload('cell.png');
    core.preload('cube-c.png');
    core.onload = function(){
        var cell = new Sprite(210,300);
        cell.x = 0;
        cell.y = 0;cell.image = core.assets['cell.png'];

        var cube = new Sprite(30, 30);
        cube.image = core.assets['cube-c.png'];
        cube.x = 0;
        cube.y = 0;
        cube.frame = 1;

        var fps = new Label();
        fps.x = 300;
        fps.y = 5;
        fps.color = 'red';
        fps.font = '14px "Arial"';
        fps.text = '0';
        fps.on('enterframe', function() {
            fps.text = "fps: " + core.fps;
        });

        cube.addEventListener('enterframe', function(){
            //this.frame = this.age % 6 + 1;
            if (this.y >= 300 - 30) {
                //this.y = 0;
            } else {
                if(this.age % 6 == 0){
                    //5フレーム走ったら落とす
                    this.y += 30;
                }
                if ( core.input.left) {
                    this.x -= 30;
                    if(this.x < 0){
                        this.x = 0;
                    }
                }
                if ( core.input.right) {
                    this.x += 30;
                    if(this.x > 210 - 30){
                        this.x = 210 - 30;
                    }
                }
            }
        });

        core.rootScene.addChild(cell);
        core.rootScene.addChild(cube);
        core.rootScene.addChild(fps);
    }
    core.start();
};
*/
