{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level : 새로운 객체를 생성해도 instance 처럼 계속 만들지 않음
        private coffeeBeans: number = 0; // instance (object) level

        public constructor(coffeeBeans: number) {
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

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(coffeeBeans: number, public readonly serialNumber: string) {
            super(coffeeBeans);
        }
        private steamMilk(): void {
            console.log('Steaming some milk ...');
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true
            }
        }
    }

    const machine = new CoffeeMachine(23);
    const latteeMachine = new CaffeLatteMachine(23, '라떼 머신 ㅋ');
    const coffee = latteeMachine.makeCoffee(1)
    console.log(coffee)
    console.log(latteeMachine.serialNumber)
}