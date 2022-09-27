let choice = true;
let Pessoas = [];
let Residencias = [];

class Person {
  Nome;
  CPF;
  DataNascimento;

  constructor(nome, cpf, data) {
    this.Nome = nome;
    this.CPF = cpf;
    this.DataNascimento = data;
  }
}

class Residence {
  Endereco;
  CEP;
  Metros;
  Banheiros;
  Quartos;
  Moradores = [];
  Valor;

  constructor(endereco, cep, metros, banheiros, quartos, valor) {
    this.Endereco = endereco;
    this.CEP = cep;
    this.Metros = metros;
    this.Banheiros = banheiros;
    this.Quartos = quartos;
    this.Valor = valor;
  }

  AdicionarMorador() {}

  RemoverMorador() {}
}

class House extends Residence {
  Quintal;

  constructor(
    endereco,
    cep,
    metros,
    banheiros,
    quartos,
    moradores,
    valor,
    quintal
  ) {
    super(endereco, cep, metros, banheiros, quartos, moradores, valor);

    if (quintal == true) {
      this.Quintal = true;
    } else {
      this.Quintal = false;
    }
  }

  TotalValueHouse(valor) {
    let valorTotal = Number(valor * 1.3);
    return alert(`O Valor total da casa: ${valorTotal}`);
  }
}

class Apartment extends Residence {
  Andar;
  ValorCondominio;

  constructor(
    endereco,
    cep,
    metros,
    banheiros,
    quartos,
    moradores,
    valor,
    andar,
    valorCondominio
  ) {
    super(endereco, cep, metros, banheiros, quartos, moradores, valor);
    this.Andar = andar;
    this.ValorCondominio = valorCondominio;
  }

  TotalValueApartment(valor, valorCondominio) {
    return alert(`Valor total do apartamento: ${valor + valorCondominio}`);
  }
}

class Kitnet extends Residence {}

while (choice) {
  choice = prompt(
    "1 Cadastrar Pessoa /// 2 Residências /// 3 Encerrar Programa"
  );
  switch (choice) {
    case "1":
      let name = prompt("Qual o seu nome ?");
      let cpf = prompt("Qual o seu CPF?");
      let dataNascimento = Number(prompt("Qual a sua data de nascimento ?"));

      if (name == "" || cpf.length < 11 || cpf == "" || dataNascimento == "") {
        alert("Valores inválidos");
      } else {
        let NewPerson = new Person(name, cpf, dataNascimento);
        Pessoas.push(NewPerson);
      }
      break;

    case "2":
      choice = prompt(
        "1 Cadastrar Casa /// 2 Cadastrar Apartamento /// 3 Cadastar Kitnet /// 4 Remover Morador /// 5 Adicionar Morador"
      );
      switch (choice) {
        case "1":
          CreateHouse();
          break;

        case "2":
          CreateApartament();
          break;

        case "3":
          CreateKitnet();
          break;

        case "4":
          RemoveMorador();
          break;

        case "5":
          AddMorador();
          break;

        default:
          alert("Opção inválida");
          break;
      }
      break;

    case "3":
      choice = false;
      break;

    default:
      alert("Opção Inválida");
      break;
  }
}

function CreateHouse() {
  let endereco = prompt("Qual o endereço da casa ?");
  let cep = Number(prompt("Qual o CEP da casa ?"));
  let metros = Number(prompt("Quantos metros tem a casa ?"));
  let banheiros = Number(prompt("Quantos banheiros tem a casa ? (Máximo 5)"));
  let quartos = Number(prompt("Quantos quartos tem a casa ?"));
  let valor = Number(prompt("Qual o valor total da casa ?"));
  let quintal = prompt("A casa possui quintal ?");

  if (banheiros == "" || banheiros > 5 || quintal == "" || valor == "") {
    alert("Algum valor foi preenchido de maneira incorreta");
  } else {
    if (quintal == "Sim") {
      quintal = true;
    } else {
      quintal = false;
    }

    let NewHouse = new House(
      endereco,
      cep,
      metros,
      banheiros,
      quartos,
      valor,
      quintal
    );

    let continuar = true;
    while (continuar) {
      let contador = 0;
      let moradores = prompt("Quem mora nessa casa ?");
      Pessoas.forEach(Verificate);
      if (contador == 0) {
        alert("Você não cadastrou nenhum nome válido");
        continuar = false;
      }

      function Verificate(item) {
        if (item.Nome == moradores) {
          contador++;
          NewHouse.Moradores.push(moradores);
          continuar = prompt("Cadastrar mais moradores ?");
          if (continuar == "Não") {
            continuar = false;
          }
        }
      }
    }
    if (NewHouse.Moradores.length == 0) {
      continuar = false;
    } else {
      Residencias.push(NewHouse);
      if (quintal == true) {
        NewHouse.TotalValueHouse(valor);
      } else {
        alert(`Valor total da casa: ${valor}`);
      }
    }
  }
}

function CreateApartament() {
  let endereco = prompt("Qual o endereço da apartamento ?");
  let cep = Number(prompt("Qual o CEP da apartamento ?"));
  let metros = Number(prompt("Quantos metros tem a apartamento ?"));
  let banheiros = Number(
    prompt("Quantos banheiros tem a apartamento ? (Máximo 3)")
  );
  let quartos = Number(prompt("Quantos quartos tem a apartamento ?"));
  let valor = Number(prompt("Qual o valor total da apartamento ?"));
  let andar = prompt("Qual o andar do apartamento ?");
  let valorCondominio = Number(
    prompt("Qual o valor do condominio do apartamento ?")
  );

  if (
    banheiros == "" ||
    banheiros > 3 ||
    valor == "" ||
    valorCondominio == ""
  ) {
    return alert("Algum valor foi preenchido de maneira incorreta");
  }

  let NewApartament = new Apartment(
    endereco,
    cep,
    metros,
    banheiros,
    quartos,
    valor,
    andar,
    valorCondominio
  );

  let continuar = true;
  while (continuar) {
    let contador = 0;
    let moradores = prompt("Quem mora nessa casa ?");

    Residencias.forEach(VerificateTwo);
    Pessoas.forEach(Verificate);

    if (contador == 0) {
      alert("Você não cadastrou nenhum nome válido");
      continuar = false;
    }

    function Verificate(item) {
      if (item.Nome == moradores) {
        contador++;
        NewApartament.Moradores.push(moradores);
        continuar = prompt("Cadastrar mais moradores ?");
        if (continuar == "Não") {
          continuar = false;
        }
      }
    }

    function VerificateTwo(item) {
      if (item.Moradores == moradores) {
        alert(`${moradores} já mora em algum lugar`);
        return (continuar = false);
      }
    }
    if (NewApartament.Moradores.length == 0) {
      return (continuar = false);
    }
    Residencias.push(NewApartament);
    NewApartament.TotalValueApartment(valor, valorCondominio);
    return;
  }
}

function CreateKitnet() {
  let endereco = prompt("Qual o endereço da kitnet ?");
  let cep = Number(prompt("Qual o CEP da kitnet ?"));
  let metros = Number(prompt("Quantos metros tem a kitnet ?"));
  let banheiros = Number(prompt("Quantos banheiros tem a kitnet ? (Máximo 2)"));
  let quartos = Number(prompt("Quantos quartos tem a kitnet ?"));
  let valor = Number(prompt("Qual o valor total da kitnet ?"));

  if (banheiros == "" || banheiros > 2 || valor == "") {
    return alert("Algum valor foi preenchido de maneira incorreta");
  }

  let NewKitnet = new Kitnet(endereco, cep, metros, banheiros, quartos, valor);

  let continuar = true;
  while (continuar) {
    let contador = 0;
    let moradores = prompt("Quem mora nessa casa ?");

    Residencias.forEach(VerificateTwo);
    Pessoas.forEach(Verificate);

    if (contador == 0) {
      alert("Você não cadastrou nenhum nome válido");
      continuar = false;
    }

    function Verificate(item) {
      if (item.Nome == moradores) {
        contador++;
        NewKitnet.Moradores.push(moradores);
        continuar = prompt("Cadastrar mais moradores ?");
        if (continuar == "Não") {
          continuar = false;
        }
      }
    }

    function VerificateTwo(item) {
      if (item.Moradores == moradores) {
        return alert(`${moradores} já mora em algum lugar`);
      }
    }
    if (NewKitnet.Moradores.length == 0) {
      return (continuar = false);
    }
    Residencias.push(NewKitnet);
    return alert(`Valor do Kitnet ${valor}`);
  }
}

function RemoveMorador() {
  let contador = 0;
  let nomeMorador = prompt("Qual o nome do morador ?");

  Residencias.forEach(VerificateMorador);

  if (contador == 0 || Residencias.length == 0) {
    return alert("Morador não encontrado");
  }

  function VerificateMorador(item, index) {
    if (item.Moradores == nomeMorador) {
      contador++;
      item.Moradores.splice(index, 1);
      return alert("Morador removido com sucesso");
    }
  }
}

function AddMorador() {
  let contador = 0;
  let nomeMorador = prompt("Qual o nome do morador ?");

  Pessoas.forEach(VerificateMorador);

  if (contador == 0 || Residencias.length == 0) {
    return alert("Morador não encontrado");
  }

  function VerificateMorador(item) {
    if (item.Nome == nomeMorador) {
      Residencias[contador].Moradores.push(nomeMorador);
      contador++;
      return alert("Morador adicionado com sucesso");
    }
  }
}
