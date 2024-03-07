export class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  bark(){
    console.log(`${this.name} is barking`)
  }
}


export class Dog extends Animal {
  catchThief: number = 0

  constructor(name: string) {
    super(name)
  }

  killThief(){
    this.catchThief = this.catchThief + 1
  }
}

export class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }
}