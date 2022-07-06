import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private static ArchetypeCount = 0;
  typeEnergy: EnergyType;
  constructor(name: string) {
    super(name);
    this.typeEnergy = 'stamina';
    Warrior.addArchetype();
  }

  static addArchetype(): void {
    this.ArchetypeCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this.ArchetypeCount;
  }

  get energyType(): EnergyType {
    return this.typeEnergy;
  }
}

export default Warrior;