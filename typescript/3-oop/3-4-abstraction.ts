{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level : 새로운 객체를 생성해도 instance 처럼 계속 만들지 않음
        private coffeeBeans: number = 0; // instance (object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }


        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans)
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`)
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up... 🔥')
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots... ☕`)
            return {
                shots,
                hasMilk: false,
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }

        clean(): void {
            console.log("cleaning the machine...")
        }
    }

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    // maker.fillCoffeeBeans(3);
    // maker.makeCoffee(3);

    // const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
    // // maker2.fillCoffeeBeans(3); error (CoffeeMaker에 지정된 interface를 허용하기 때문)
    // maker2.makeCoffee(3);

    // const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
    // maker3.fillCoffeeBeans(3);
    // maker3.makeCoffee(3);
    // maker3.clean()

    class AmateurUser {
        constructor(private machine: CoffeeMaker) { }

        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee)
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) { }

        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    pro.makeCoffee();
}

