function createNovelScene(){
    var novel = new Scene();
    novel.backgroundColor = "#FFFFFF";
    var msg = new Label("novel");
    msg.x = 200;
    msg.y = 300;
    novel.addChild(msg);

    return novel;
}
