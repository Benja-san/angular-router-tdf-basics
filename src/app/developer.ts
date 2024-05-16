import { Skill } from './skill';

export class Developer {
  constructor(
    readonly name: string,
    private _lastname: string,
    readonly gender: string,
    readonly age: number,
    readonly bio: string,
    readonly skills: Skill[]
  ) {}

  get lastname(): string {
    return this._lastname;
  }

  set lastname(lastname: string) {
    this._lastname = lastname;
  }
}
