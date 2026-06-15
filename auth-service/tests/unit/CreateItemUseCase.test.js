const CreateItemUseCase =
require('../../src/application/usecases/CreateItemUseCase');

describe('Create Item', () => {

    test('deve criar item', async () => {

        const repository = {
            create: jest.fn()
        };

        const useCase =
        new CreateItemUseCase(repository);

        await useCase.execute({
            title: 'Figure Goku'
        });

        expect(
            repository.create
        ).toHaveBeenCalled();

    });

});