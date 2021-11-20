{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // public
    // private
    // protected : 외부에서 접근할 수 없지만 상속한 자식 클래스에서만 접근이 가능하도록 함
    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level : 새로운 객체를 생성해도 instance 처럼 계속 만들지 않음
        private coffeeBeans: number = 0; // instance (object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            }
        }
    }
    const maker = new CoffeeMaker(32);
    maker.fillCoffeeBeans(3);
    // maker.coffeeBeans = 3;
    // maker.coffeeBeans = -34 // invalid

    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            if (num < 0) throw new Error('value for age should be greater than 0')
            this.internalAge = num
        }

        constructor(public firstName: string, private lastName: string) { }
    }

    const user = new User('Steve', 'Jobs');
    user.age = 6
    user.firstName = 'OSH'
    console.log(user.fullName)
}

