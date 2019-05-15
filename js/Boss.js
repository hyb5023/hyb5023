//BOSS类
function BOSS(_bossLve,role){
    this.bossLve = _bossLve;
    this.shootType = [];
    this.bullet = null;
    switch(this.bossLve){
        case 1:
            this.shootType = [-45,-15,15,45];
            for(var index = 0;index<this.shootType.length;index++){
                    //从对象池里边创建一个子弹
                    this.bullet = Laya.Pool.getItemByClass("role",Role);
                    //初始化子弹信息
                    this.bullet.init("bullet4",role.camp,1,6,1,1);
                    // //设置角色类型为子弹类型
                    this.bullet.isBullet = true;
                    //设置子弹发射初始化位置
                    this.bullet.pos(role.x+this.shootType[index],role.y);
                    //添加舞台上
                    this.roleBox.addChild(this.bullet);
                }
        break;
        case 2:
            if(role.hp >= 1000){
                this.shootType = [-75,-45,-15,15,45,75];
                for(var index = 0;index<this.shootType.length;index++){
                    //从对象池里边创建一个子弹
                    this.bullet = Laya.Pool.getItemByClass("role",Role);
                    //初始化子弹信息
                    this.bullet.init("bullet2",role.camp,1,6,1,1);
                    // //设置角色类型为子弹类型
                    this.bullet.isBullet = true;
                    //设置子弹发射初始化位置
                    this.bullet.pos(role.x+this.shootType[index],role.y);
                    if(index == 0){
                        this.bullet.skewX = -45;
                        this.bullet.skewY = 45;
                        this.bullet.heroType = 6;
                    }
                    else if(index == 1){
                        this.bullet.skewX = -30;
                        this.bullet.skewY = 30;
                        this.bullet.heroType = 6;
                    }
                    else if(index == 4){
                        this.bullet.skewX = 30;
                        this.bullet.skewY = -30;
                        this.bullet.heroType = 7;
                    }
                    else if(index == 5){
                        this.bullet.skewX = 45;
                        this.bullet.skewY = -45;
                        this.bullet.heroType = 7;
                    }
                    //添加舞台上
                    this.roleBox.addChild(this.bullet);
                }
            }
            else if(role.hp <1000){
                    if( Math.random() < 0.3){
                        this.shootType = [25,75,125,175,225,275,325,375];
                        for(var i = 0;i<8;i++){
                            //从对象池里边创建一个子弹
                            this.bullet = Laya.Pool.getItemByClass("role",Role);
                            //初始化子弹信息
                            this.bullet.init("bullet3",role.camp,2,6,40);
                            // //设置角色类型为子弹类型
                            this.bullet.isBullet = true;
                            //设置子弹发射初始化位置
                            this.bullet.pos(this.shootType[i],role.y+80);
                            //添加舞台上
                            this.roleBox.addChild(this.bullet);
                        }
                    }
                    else {
                        //从对象池里边创建一个子弹
                        this.bullet = Laya.Pool.getItemByClass("role",Role);
                        //初始化子弹信息
                        this.bullet.init("bullet3",role.camp,2,6,30);
                        // //设置角色类型为子弹类型
                        this.bullet.isBullet = true;
                        //设置子弹发射初始化位置
                        this.bullet.pos(role.x,role.y+80);
                        //添加舞台上
                        this.roleBox.addChild(this.bullet);
                    }
            }
    
            
                // Laya.timer.once(10000, this, this.anotherShoot);
        break;
    }
}

// var _proto = BOSS.prototype;

// _proto.anotherShoot = function(){

// }