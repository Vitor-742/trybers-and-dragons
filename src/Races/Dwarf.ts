import Race from './Race';

class Dwarf extends Race {
  maxHP: number;
  private static racesCount = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxHP = 80;
    Dwarf.addRace();
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

export default Dwarf;