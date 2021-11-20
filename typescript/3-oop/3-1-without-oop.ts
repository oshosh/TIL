{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    const BEANS_GRAMM_PER_SHOT: number = 7;
    let coffeeBeans: number = 0;
    function makeCoffee(shots: number): CoffeeCup {
        if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
        }
        coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
        console.log(coffeeBeans)
        return {
            shots,
            hasMilk: false,
        }
    }

    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffee(3);
    console.log(coffee)
}


