#!/usr/bin/env node

const meow = require('meow');
const chalk = require('chalk');
const multasgt = require('multasgt');

const cli = meow(`
	Example
	  $ multas P012ABC
`);
const regex = /^([a-z])(\d{3}[a-z]{3})$/i;
if (!regex.test(cli.input[0])) {
  console.log(`${cli.input[0]} is invalid`);
  process.exit(1);
}

const match = cli.input[0].match(regex);
console.log(chalk.blue(`Placa ${match[1]}-${match[2]}`));
multasgt.emixtra(match[2], match[1]).then(multas => {
  multas.forEach(multa => {
    console.log(chalk.red(`Emixtra Desc: ${multa.place} , Ammount : ${multa.ammount} , Photo : ${multa.photo}\n`));
  });
});

multasgt.emetra(match[2], match[1]).then(multas => {
  multas.forEach(multa => {
    console.log(chalk.red(`Emetra Desc: ${multa.desc} , Ammount : ${multa.ammount} , Photo : ${multa.photo}\n`));
  });
});