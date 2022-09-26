// Um Apartamento deve ter os atributos: andar e o valor do condomínio;
// Um Imóvel deve ter dois comportamentos: adicionar uma pessoa como morador e remover
// uma pessoa como morador;
// Uma Kitnet pode ter até dois banheiros, um apartamento pode ter três banheiros e uma
// casa pode ter até cinco banheiros
// Cada tipo de Imóvel deve ter um método para calcular seu valor com base nas seguintes
// especificações:
// Uma casa com quintal tem um acréscimo de 30% no seu valor;
// Um apartamento deve ter o valor do seu condomínio somado ao valor base;
// Uma Kitnet não tem alterações no seu valor base;
class immobile {
  ZipCode;
  Address;
  SquareMeters;
  AmountOfRoom;
  AmountOfBathroom;
  Person;
  ValueImmobile;
  constructor(
    zipCode,
    address,
    squareMeters,
    amountOfRoom,
    amountOfBathroom,
    person,
    valueImmobile
  ) {
    this.ZipCode = zipCode;
    this.Address = address;
    this.SquareMeters = squareMeters;
    this.AmountOfRoom = amountOfRoom;
    this.AmountOfBathroom = amountOfBathroom;
    this.Person = person;
    this.ValueImmobile = valueImmobile;
  }
}
class person {
  Name;
  Cpf;
  DataNascimento;
}
class home extends immobile {
  Backyard;
  constructor(
    zipCode,
    address,
    squareMeters,
    amountOfRoom,
    amountOfBathroom,
    person,
    valueImmobile,
    backyard
  ) {
    super(
      zipCode,
      address,
      squareMeters,
      amountOfRoom,
      amountOfBathroom,
      person,
      valueImmobile
    );
    this.Backyard = backyard;
  }
}
class apartment extends immobile {
  Condominium;
  constructor(
    zipCode,
    address,
    squareMeters,
    amountOfRoom,
    amountOfBathroom,
    person,
    valueImmobile,
    condominium
  ) {
    super(
      zipCode,
      address,
      squareMeters,
      amountOfRoom,
      amountOfBathroom,
      person,
      valueImmobile
    );
    this.Condominium = condominium;
  }
}
class kitnet extends immobile {
  constructor(
    zipCode,
    address,
    squareMeters,
    amountOfRoom,
    amountOfBathroom,
    person,
    valueImmobile
  ) {
    super(
      zipCode,
      address,
      squareMeters,
      amountOfRoom,
      amountOfBathroom,
      person,
      valueImmobile
    );
  }
}
