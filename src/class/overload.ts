class Greeter {

    message: string;

   

    constructor(message: string) {

      this.message = message;

    }

   

    // Overload signatures

    greet(person: string): string;

    greet(persons: string[]): string[];

   

    // Implementation signature

    greet(person: unknown): unknown {

      if (typeof person === 'string') {

        return `${this.message}, ${person}!`;

      } else if (Array.isArray(person)) {

        return person.map(name => `${this.message}, ${name}!`);

      }

      throw new Error('Unable to greet');

    }

  }

const hi = new Greeter('Hi');

console.log(hi.greet('Angela'));       // 'Hi, Angela!'

console.log(hi.greet(['Pam', 'Jim'])); // ['Hi, Pam!', 'Hi, Jim!']