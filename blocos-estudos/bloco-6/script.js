// Gerar UF
const estado = document.querySelector('#estado');

let uf = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

for (let index = 0; index < uf.length; index += 1) {
  estado.appendChild(document.createElement('option')).innerText = uf[index];
}
