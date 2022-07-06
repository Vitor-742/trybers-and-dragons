import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private static ArchetypeCount = 0;
  typeEnergy: EnergyType;
  constructor(name: string) {
    super(name);
    this.typeEnergy = 'stamina';
    Ranger.addArchetype();
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

export default Ranger;