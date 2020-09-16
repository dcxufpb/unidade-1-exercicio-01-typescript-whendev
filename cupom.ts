function imprime_dados_loja() {
  // Implemente aqui
  let nome_loja: string = "Arcos Dourados Com. de Alimentos LTDA"
  let logradouro: string = "Av. Projetada Leste"
  let numero: number = 500
  let complemento: string = "EUC F32/33/34"
  let bairro: string = "Br. Sta Genebra"
  let municipio: string = "Campinas"
  let estado: string = "SP"
  let cep: string = "13080-395"
  let telefone: string = "(19) 3756-7408"
  let observacao: string = "Loja 1317 (PDP)"
  let cnpj: string = "42.591.651/0797-34"
  let inscricao_estadual: string = "244.898.500.113"
  return `${nome_loja}
${logradouro}, ${numero} ${complemento}
${bairro} - ${municipio} - ${estado}
CEP:${cep} Tel ${telefone}
${observacao}
CNPJ: ${cnpj}
IE: ${inscricao_estadual}
`;
}

module.exports = imprime_dados_loja;
