const DefaultFineStrategy =
require('./DefaultFineStrategy');

const PremiumFineStrategy =
require('./PremiumFineStrategy');

class FineStrategyFactory {

    static create(type){

        if(type === 'premium'){
            return new PremiumFineStrategy();
        }

        return new DefaultFineStrategy();
    }

}

module.exports =
FineStrategyFactory;