class Character   {

   _life = 1;
   maxLife = 1;
   attack = 0;
   defense = 0;

   constructor(name) {
      this.name = name;
   }

   // ? Getter and Setter Utilizzato per farsì che la vita dei personaggi, non scendono sotto 0.
   get life()  {
      return this._life;
   }
   set life(newLife)  {
      this._life = newLife < 0 ? 0 : newLife;
   }
}

// Creazione Knight -----------------------------------------------
class Knight extends Character   {
   constructor(name) {
      super(name);
      this.life = 100;
      this.attack = 10;
      this.defense = 8;
      this.maxLife = this.life;
   }
}

// Creazione Wizard -----------------------------------------------
class Wizzard extends Character  {
   constructor(name) {
      super(name);
      this.life = 80;
      this.attack = 15;
      this.defense = 8;
      this.maxLife = this.life;
   }
}

// Creazione Spyder -----------------------------------------------
class Spyder extends Character   {
   constructor() {
      super('Spyder');
      this.life = 40;
      this.attack = 4;
      this.defense = 4;
      this.maxLife = this.life;
   }
}

// Creazione Dragon -----------------------------------------------

class Dragon extends Character   {
   constructor()  {
      super('Dragon');
      this.life = 120;
      this.attack = 16;
      this.defense = 6;
      this.maxLife = this.life;
   }
}

// Layout Stage --------------------------------------------------

class Stage {
   constructor(mainFighter, npcFighter, mainFighterElement, npcFighterElement)  {
      this.mainFighter = mainFighter;
      this.npcFighter = npcFighter;
      this.mainFighterElement = mainFighterElement;
      this.npcFighterElement = npcFighterElement;
   }

   start()  {
      this.update();

      // Attack Event ------------------------------------------
      this.mainFighterElement.querySelector('.attack-btn').addEventListener('click', () => this.doAttack(this.mainFighter, this.npcFighter));

      this.npcFighterElement.querySelector('.attack-btn').addEventListener('click', () => this.doAttack(this.npcFighter, this.mainFighter));
   }

   update() {
      // Player ------------------------------------------------
      this.mainFighterElement.querySelector('.name').innerHTML = `${this.mainFighter.name} - ${this.mainFighter.life} HP`;
      // Lifebar Player
      let playerPct = (this.mainFighter.life / this.mainFighter.maxLife) * 100;
      this.mainFighterElement.querySelector('.life').style.width = `${playerPct}%`;

      // NPC ---------------------------------------------------
      this.npcFighterElement.querySelector('.name').innerHTML = `${this.npcFighter.name} - ${this.npcFighter.life} HP`;
      // Lifebar NPC
      let npcPct = (this.npcFighter.life / this.npcFighter.maxLife) * 100;
      this.npcFighterElement.querySelector('.life').style.width = `${npcPct}%`;  
   }

   // Attack Event ---------------------------------------------
   doAttack(attacking, attacked) {
      console.log(`${attacking.name} Está atacando ${attacked.name}`);

      this.update();
   }
}