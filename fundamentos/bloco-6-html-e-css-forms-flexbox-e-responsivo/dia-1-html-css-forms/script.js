// 
const selector = document.querySelector('#input-estado');
const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'SãoPaulo', 'Sergipe', 'Tocantins'];

  estados.forEach((estado) => {
    option = new Option(estado, estado.toLowerCase());
    selector.options[selector.options.length] = option;
  });
  

