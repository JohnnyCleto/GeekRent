const DefaultFineStrategy =
require('../../src/application/strategies/DefaultFineStrategy');

describe(
'Default Fine Strategy',
() => {

    test(
    'deve calcular multa',
    () => {

        const strategy =
        new DefaultFineStrategy();

        expect(
            strategy.calculate(2)
        ).toBe(20);

    });

});