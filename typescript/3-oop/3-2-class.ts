{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT: number = 7; // class level : 새로운 객체를 생성해도 instance 처럼 계속 만들지 않음
        coffeeBeans: number = 0; // instance (object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
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

    // const maker = new CoffeeMaker(32)
    // console.log(maker) // CoffeeMaker { coffeeBeans: 32 }
    // console.log(maker.makeCoffee(3))
    // const maker2 = new CoffeeMaker(14)
    // console.log(maker2) // CoffeeMaker { coffeeBeans: 14 }
    // console.log(maker2.makeCoffee(2))

    const maker3 = CoffeeMaker.makeMachine(3)
    console.log(maker3)
}

