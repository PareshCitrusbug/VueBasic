new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        monsterLifecolor:'green',
        playerLifecolor:'green',
        PlayerName:'Paresh',
        turns: []
    },
    methods: {
        startGame: function () {
            var person = prompt("Please enter your name:", "Harry Potter");
            if (person == null || person == "") {
                return false;
            }
            this.PlayerName = person;
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
            this.monsterLifecolor = 'green';
            this.playerLifecolor = 'green';
        },
        attack: function () {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });
            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();
        },
        specialAttack: function () {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + damage
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            });
            this.monsterAttacks();
        },
        giveUp: function () {
            if (confirm(this.PlayerName+ ' stop game?')) {
                this.gameIsRunning = false;
            }
        },
        monsterAttacks: function() {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            });
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            this.playerLifecolor = 'green';
            this.monsterLifecolor = 'green';
            if(this.monsterHealth <= 35){
                this.monsterLifecolor = 'orange';
            }
            if(this.playerHealth <= 35){
                this.playerLifecolor = 'red';
            }
            if (this.monsterHealth <= 0) {
                if (confirm(this.PlayerName+ ' won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm(this.PlayerName+' lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});