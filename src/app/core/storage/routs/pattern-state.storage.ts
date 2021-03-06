import {UserStorage} from '../user-storage';

import {EStorageType} from '../../../shared/enums/storage/srorage-type.enum';
import {ECreatePatternStorage} from "../../../shared/enums/storage/settings/create-pattern-storage.enum";
import {EStructurePatternStorage} from "../../../shared/enums/storage/settings/structure-pattern-storage.enum";


export class PatternStateStorage extends UserStorage {

  static storageType: EStorageType = EStorageType.LOCAL;

  constructor() {
    super();
  }

  static setState(pattern: ECreatePatternStorage | EStructurePatternStorage, state: boolean): void {
    this.type(this.storageType).setItem(pattern, JSON.stringify(state));
  }

  static getState(pattern: ECreatePatternStorage | EStructurePatternStorage, defaultState = false): boolean {
    return this.type(this.storageType).getItem(pattern) ?
      JSON.parse(this.type(this.storageType).getItem(pattern)) :
      defaultState;
  }

  static remove(pattern: ECreatePatternStorage | EStructurePatternStorage): void {
    this.type(this.storageType).removeItem(pattern);
  }

}
