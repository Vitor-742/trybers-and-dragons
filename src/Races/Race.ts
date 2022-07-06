abstract class Race {
  readonly name: string;
  readonly dexterity: number;
  //   private static racesCount = 0;// lembrar do _dawda
    
  constructor(name: string, dexterity: number) {
    this.name = name;
    this.dexterity = dexterity;
    // Race.addRace();
  }

  //   private static addRace(): void {
  //     this.racesCount += 1;
  //   }

  static createdRacesInstances(): number {
    throw Error('Not implemented');
    // return this.racesCount;
  }

  abstract get maxLifePoints(): number;
}

export default Race;