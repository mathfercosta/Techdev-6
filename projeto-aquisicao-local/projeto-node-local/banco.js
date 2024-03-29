var desenvolvimento = false;

var configuracoes = {
    producao: {
        server: 'srvtechdev.database.windows.net',
        user: 'usertechdev',
        password: "#Gfgrupo3",
        database: 'bdtechdev6',
        options: {
            encrypt: true
        },
        pool: {
            max: 4,
            min: 1,
            idleTimeoutMillis: 30000,
            connectionTimeout: 5000
        }
    },
    desenvolvimento: {
        server: "BASETESTE.database.windows.net",
        user: "usuariotestes",
        password: "senhatestes",
        database: "BASETESTE",
        options: {
            encrypt: true
        }
    }
}
 
var sql = require('mssql');
sql.on('error', err => {
    console.error(`Erro de Conexão: ${err}`);
});

var perfil = desenvolvimento ? 'desenvolvimento' : 'producao';

function conectar() {
  sql.close();
  return sql.connect(configuracoes[perfil])
} 

module.exports = {
    conectar: conectar,
    sql: sql
}
