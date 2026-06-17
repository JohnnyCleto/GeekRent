const FineStrategyFactory =
require(
'../../infrastructure/strategies/FineStrategyFactory'
);

class ReturnRentalUseCase {

    constructor(repository){

        this.repository =
        repository;

    }

    async execute(
        rental,
        userType
    ){

        const today =
        new Date();

        const endDate =
        new Date(
            rental.endDate
        );

        let fine = 0;

        if(today > endDate){

            const daysLate =
            Math.ceil(

                (
                    today -
                    endDate

                )

                /

                (
                    1000 *

                    60 *

                    60 *

                    24

                )

            );

            const strategy =

            FineStrategyFactory
            .create(
                userType
            );

            fine =
            strategy.calculate(
                daysLate
            );

        }

        await this.repository
        .returnRental(

            rental.id,

            fine

        );

    }

}

module.exports =
ReturnRentalUseCase;