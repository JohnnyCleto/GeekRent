class UpdateItemUseCase {

 constructor(repository){

  this.repository=
  repository;

 }

 async execute(id,data){

  await this.repository
  .update(id,data);

 }

}

module.exports =
UpdateItemUseCase;