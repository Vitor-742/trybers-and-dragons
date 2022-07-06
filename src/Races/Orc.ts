import Race from './Race';

class Orc extends Race {
  maxHP: number;
  private static racesCount = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxHP = 74;
    Orc.addRace();
  }

  get maxLifePoints(): number {
    return this.maxHP;
  }

  private static addRace(): void {
    this.racesCount += 1;
  }

  static createdRacesInstances(): number {
    return this.racesCount;
  }
}

export default Orc;