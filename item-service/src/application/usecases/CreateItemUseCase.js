// item-service/src/application/usecases/CreateItemUseCase.js

class CreateItemUseCase {

    constructor(repository) {

        this.repository = repository;

    }

    async execute(data) {

        if (!data.title) {
            throw new Error('Título é obrigatório');
        }

        if (!data.description) {
            throw new Error('Descrição é obrigatória');
        }

        if (!data.category) {
            throw new Error('Categoria é obrigatória');
        }

        if (!data.rentalPrice || data.rentalPrice <= 0) {
            throw new Error('Preço inválido');
        }

        if (!data.city) {
            throw new Error('Cidade é obrigatória');
        }

        if (!data.state) {
            throw new Error('Estado é obrigatório');
        }

        const item = {

            ownerId: data.ownerId,

            title: data.title,

            description: data.description,

            category: data.category,

            rentalPrice: data.rentalPrice,

            imageUrl: data.imageUrl || null,

            city: data.city,

            state: data.state,

            available: true

        };

        return await this.repository.create(item);

    }
}

module.exports = CreateItemUseCase;