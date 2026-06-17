const ItemRepository =
require('../../infrastructure/repositories/ItemRepository');

const CreateItemUseCase =
require('../../application/usecases/CreateItemUseCase');

const ListItemsUseCase =
require('../../application/usecases/ListItemsUseCase');

const FindItemUseCase =
require('../../application/usecases/FindItemUseCase');

const UpdateItemUseCase =
require('../../application/usecases/UpdateItemUseCase');

const DeleteItemUseCase =
require('../../application/usecases/DeleteItemUseCase');

class ItemController {

 async create(req,res){

  const repository =
  new ItemRepository();

  const useCase =
  new CreateItemUseCase(
   repository
  );

  await useCase.execute(
   req.body
  );

  return res.status(201)
  .json({
   message:'Item criado'
  });

 }

 async list(req,res){

  const repository =
  new ItemRepository();

  const useCase =
  new ListItemsUseCase(
   repository
  );

  const items =
  await useCase.execute();

  return res.json(items);

 }

 async findById(req,res){

  const repository =
  new ItemRepository();

  const useCase =
  new FindItemUseCase(
   repository
  );

  const item =
  await useCase.execute(
   req.params.id
  );

  return res.json(item);

 }

 async update(req,res){

  const repository =
  new ItemRepository();

  const useCase =
  new UpdateItemUseCase(
   repository
  );

  await useCase.execute(

   req.params.id,

   req.body

  );

  return res.json({

   message:'Atualizado'

  });

 }

 async delete(req,res){

  const repository =
  new ItemRepository();

  const useCase =
  new DeleteItemUseCase(
   repository
  );

  await useCase.execute(
   req.params.id
  );

  return res.json({

   message:'Removido'

  });

 }

}

module.exports =
new ItemController();