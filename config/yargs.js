const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption:true,
                describe:'La base de la tabla de multiplicar'
            })
            .option('l',{
                alias:'listar',
                type: 'boolean',
                default: false,
                describe:'Lista la tabla en consola'
            })
            .option('h',{
                alias:'hasta',
                type: 'number',
                default: 5,
                describe:'limite de nuestra tabla'
            })
            .check((argv, options) => {
                if(isNaN(argv.b)){
                    throw 'la base tiene  que ser un número'
                }
                return true;
            })
            .argv;

module.exports= argv;