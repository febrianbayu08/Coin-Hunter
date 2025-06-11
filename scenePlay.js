var scenePlay = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize: function () {
        Phaser.Scene.call(this, { key: "scenePlay" });
    },

    preload: function () {
        this.load.setBaseURL('assets/');

        this.load.image("background", "images/BG.png");
        this.load.image("btn_play", "images/ButtonPlay.png");
        this.load.image("gameover", "images/GameOver.png");
        this.load.image("coin", "images/Koin.png");
        this.load.image("enemy1", "images/Musuh01.png");
        this.load.image("enemy2", "images/Musuh02.png");
        this.load.image("enemy3", "images/Musuh03.png");
        this.load.image("coin_panel", "images/PanelCoin.png");
        this.load.image("ground", "images/Tile50.png");

        this.load.audio("snd_coin", "audio/koin.mp3");
        this.load.audio("snd_lose", "audio/kalah.mp3");
        this.load.audio("snd_jump", "audio/lompat.mp3");
        this.load.audio("snd_leveling", "audio/ganti_level.mp3");
        this.load.audio("snd_walk", "audio/jalan.mp3");
        this.load.audio("snd_touch", "audio/touch.mp3");
        this.load.audio("music_play", "audio/music_play.mp3");

        this.load.spritesheet("char", "images/CharaSpriteAnim.png", { frameWidth: 45, frameHeight: 93 });
    },

    create: function () {
        //fungsi untuk menampilkan translasi jika sedang berganti level
this.newLevelTransition = () => {
    //menambahkan tampilan teks keterangan
    var levelTransitionText = this.add.text(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'Level ' + this.currentLevel, {
        fontFamily: 'Verdana, Arial',
        fontSize: '40px',
        color: '#ffffff'
    });

    levelTransitionText.setOrigin(0.5);
    levelTransitionText.setDepth(10);
    levelTransitionText.alpha = 0;

    //animasi teks level
    this.tweens.add({
        targets: levelTransitionText,
        duration: 1000,
        alpha: 1,
        yoyo: true,
        onComplete: () => {
            levelTransitionText.destroy();
        }
    });

    //transisi background
    this.tweens.add({
        delay: 2000,
        targets: this.darkenLayer,
        duration: 250,
        alpha: 0,
        onComplete: () => {
            this.gameStarted = true;
            this.physics.resume();
        }
    });
};


        this.physics.pause();

        var currentLevel = 4;
        this.gameStarted = false;


       this.enemies = this.physics.add.group();
this.physics.add.collider(this.enemies, this.platforms);

// Player harus dibuat dulu
this.player = this.physics.add.sprite(400, 400, 'char');
this.player.setBounce(0.2);
this.player.setCollideWorldBounds(true);
this.player.setGravityY(800);
this.physics.add.collider(this.player, this.platforms);

// Baru tambahkan collider player-enemies
this.hitEnemy = (player, enemy) => {
    this.physics.pause();             // Memberhentikan semua gerakan yang dipengaruhi physics
    player.setTint(0xff0000);        // Memberi efek warna merah pada player
    player.anims.play('front');      // Ganti animasi ke posisi diam/menghadap depan
    this.snd_lose.play();            // Mainkan suara kalah
    console.log("Game Over");

    // Tambahkan teks Game Over di tengah layar
    let gameOverText = this.add.text(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'Game Over', {
        fontFamily: 'Verdana, Arial',
        fontSize: '64px',
        color: '#ff0000',
        fontStyle: 'bold'
    }).setOrigin(0.5).setDepth(20);

    // Tambahkan efek muncul perlahan
    gameOverText.alpha = 0;
    this.tweens.add({
        targets: gameOverText,
        alpha: 1,
        duration: 1000,
        ease: 'Power2'
    });
};

this.physics.add.collider(this.player, this.enemies, this.hitEnemy, null, this);



        this.currentLevel = 1;
        let canvasWidth = this.sys.game.canvas.width;
        let canvasHeight = this.sys.game.canvas.height;

        let X_POSITION = {
            LEFT: 0,
            CENTER: canvasWidth / 2,
            RIGHT: canvasWidth
        };

        let Y_POSITION = {
            TOP: 0,
            CENTER: canvasHeight / 2,
            BOTTOM: canvasHeight
        };

        // Background
        this.add.image(X_POSITION.CENTER, Y_POSITION.CENTER, 'background');

        // Platform
        let groundTemp = this.add.image(0, 0, 'ground').setVisible(false);
        let groundSize = { width: groundTemp.width, height: groundTemp.height };
        let relativeSize = { w: 0, h: 0 };

        this.platforms = this.physics.add.staticGroup();

              this.coins = this.physics.add.group({
    key: 'coin',
    repeat: 9,
    setXY: { x: 100, y: 0, stepX: 100 }
});

    this.prepareWorld = (level) => {
        this.physics.add.collider(this.player, this.enemies, this.hitEnemy, null, this);

    this.platforms.clear(true, true); // Hapus semua platform lama

    // Fix: pakai this.coins
    this.coins.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.3));
        child.enableBody(true, child.x, -100, true, true);
    });

    for (let i = -4; i <= 4; i++) {
       this.platforms.create(X_POSITION.CENTER + groundSize.width * i, Y_POSITION.BOTTOM - groundSize.height / 2, 'ground');
    }

    if (level === 1) {
        this.platforms.create(groundTemp.width / 2, 384, 'ground');
        this.platforms.create(400, 424, 'ground');
        this.platforms.create(1024 - groundTemp.width / 2, 480, 'ground');
        this.platforms.create(600, 584, 'ground');
    } else if (level === 2) {
        this.platforms.create(80, 284, 'ground');
        this.platforms.create(230, 184, 'ground');
        this.platforms.create(390, 284, 'ground');
        this.platforms.create(990, 360, 'ground');
        this.platforms.create(620, 430, 'ground');
        this.platforms.create(900, 570, 'ground');
    } else {
        var x = Phaser.Math.Between(100, game.canvas.width - 100);
        var enemy = this.enemies.create(x, -100, 'enemy' + Phaser.Math.Between(1, 3));
        enemy.setBounce(1);
        enemy.setCollideWorldBounds(true);
        enemy.setVelocity(Phaser.Math.Between(-200, 200), 20);
        enemy.allowGravity = false;
        this.platforms.create(80, 230, 'ground');
        this.platforms.create(230, 230, 'ground');
        this.platforms.create(1040, 280, 'ground');
        this.platforms.create(600, 340, 'ground');
        this.platforms.create(400, 420, 'ground');
        this.platforms.create(930, 430, 'ground');
        this.platforms.create(820, 570, 'ground');
        this.platforms.create(512, 590, 'ground');
        this.platforms.create(0, 570, 'ground');
    }
};

this.prepareWorld(this.currentLevel);

        // Koin Particle
        this.particlesCoin = this.add.particles('coin', {
            x: -100,
            y: -100,
            speed: { min: 150, max: 250 },
            gravityY: 200,
            scale: { start: 1, end: 0 },
            lifespan: { min: 200, max: 300 },
            quantity: 10,
            on: false
        });

        // Sound
        this.snd_coin = this.sound.add('snd_coin');
        this.snd_jump = this.sound.add('snd_jump');
        this.snd_leveling = this.sound.add('snd_leveling');
        this.snd_lose = this.sound.add('snd_lose');
        this.snd_touch = this.sound.add("snd_touch");
        this.snd_walk = this.sound.add("snd_walk");
        this.snd_walk.loop = true;
        this.snd_walk.setVolume(0);
        this.snd_walk.play();

        this.music_play = this.sound.add('music_play');
        this.music_play.loop = true;

        // Overlay
        var darkenLayer = this.add.rectangle(
            X_POSITION.CENTER, Y_POSITION.CENTER,
            canvasWidth, canvasHeight, 0x000000
        );
        darkenLayer.setDepth(10);
        darkenLayer.alpha = 0.25;

        // Tombol Play
        var activeScene = this;
        var buttonPlay = this.add.image(X_POSITION.CENTER, Y_POSITION.CENTER, 'btn_play');
        buttonPlay.setDepth(11);
        buttonPlay.setInteractive();

        buttonPlay.on('pointerdown', function () {
            this.setTint(0x5a5a5a);
        });

        buttonPlay.on('pointerout', function () {
            this.clearTint();
        });

        buttonPlay.on('pointerup', function () {
            this.clearTint();
            activeScene.snd_touch.play();
            activeScene.music_play.play();

            activeScene.tweens.add({
                delay: 150,
                targets: darkenLayer,
                duration: 250,
                alpha: 0,
            });

            activeScene.tweens.add({
                targets: buttonPlay,
                ease: 'Back.In',
                duration: 250,
                scaleX: 0,
                scaleY: 0,
                onComplete: function () {
                    activeScene.gameStarted = true;
                    activeScene.physics.resume();
                    buttonPlay.destroy();
                    darkenLayer.destroy();
                    console.log('Game dimulai!');
                }
            });
        });

        // Panel koin
        var coinPanel = this.add.image(X_POSITION.CENTER, 30, 'coin_panel').setDepth(20);
        var coinText = this.add.text(X_POSITION.CENTER, 30, '0', {
            fontFamily: 'Verdana, Arial',
            fontSize: '37px',
            color: '#adadad'
        }).setOrigin(0.5).setDepth(20);
        this.coinText = coinText;

        // Player
        this.player = this.physics.add.sprite(400, 400, 'char');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.player.setGravityY(800);
        this.physics.add.collider(this.player, this.platforms);

        // Input keyboard
        this.cursors = this.input.keyboard.createCursorKeys();

        // Animasi player
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('char', { start: 0, end: 3 }),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('char', { start: 5, end: 8 }),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'front',
            frames: [{ key: 'char', frame: 4 }],
            frameRate: 1,
            repeat: -1
        });

        this.cameras.main.setBounds(0, 0, canvasWidth, canvasHeight);
this.cameras.main.startFollow(this.player);


        // Koin
        this.countCoin = 0;



        this.coins.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));
            child.body.setGravityY(300);
        });

        this.physics.add.collider(this.coins, this.platforms);
        this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);
    },

collectCoin: function (player, coin) {
    coin.disableBody(true, true);
    this.countCoin += 10;
    this.coinText.setText(this.countCoin);
    this.snd_coin.play();

    // Efek partikel
    for (let i = 0; i < 10; i++) {
        let part = this.add.image(coin.x, coin.y, 'coin');
        part.setScale(Phaser.Math.FloatBetween(0.3, 0.6));
        part.setAlpha(1);

        let offsetX = Phaser.Math.Between(-30, 30);
        let offsetY = Phaser.Math.Between(-30, 30);

        this.tweens.add({
            targets: part,
            x: coin.x + offsetX,
            y: coin.y + offsetY,
            alpha: 0,
            scale: 0,
            duration: 500,
            ease: 'Cubic.easeOut',
            onComplete: () => part.destroy()
        });
    }

    // Ganti level saat semua koin diambil
    if (this.coins.countActive(true) === 0) {
        this.currentLevel++;
        this.snd_leveling.play();

        // Reset player ke atas
        this.player.setPosition(400, 200);

        // Buat ulang koin lebih dulu
        this.coins.clear(true, true);
        this.coins = this.physics.add.group({
            key: 'coin',
            repeat: 9,
            setXY: { x: 100, y: 0, stepX: 100 }
        });

        this.coins.children.iterate(child => {
            child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));
            child.body.setGravityY(300);
        });

        // Buat ulang platform
        this.prepareWorld(this.currentLevel);

        this.physics.add.collider(this.coins, this.platforms);
        this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);

        // Efek transisi level
        this.gameStarted = false;
        this.physics.pause();
        this.player.anims.play('front');
        
        this.tweens.add({
            targets: this.darkenLayer,
            duration: 250,
            alpha: 0.25,
            onComplete: () => {
                this.newLevelTransition();
            }
        });
    }
},


    update: function () {
        if(!this.gameStarted){
            return;
        }
        if (this.cursors.right.isDown) {
            this.player.setVelocityX(200);
            this.player.anims.play('right', true);
            this.snd_walk.setVolume(1);
        } else if (this.cursors.left.isDown) {
            this.player.setVelocityX(-200);
            this.player.anims.play('left', true);
            this.snd_walk.setVolume(1);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('front', true);
            this.snd_walk.setVolume(0);
        }

        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-650);
            this.snd_jump.play();
        }
    }
});
