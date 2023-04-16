import Database from './DbServices';

const DB_EXEC = Database.getConnection();

export const getGastos = async () => {
  let results = await DB_EXEC(`select * from gastos`);
  return results.rows._array;
}

export const insertGasto = async (param) => {
  let results = await DB_EXEC(`insert into gastos(tipo, data, preco, valor, hodometro)
  values(?, ?, ?, ?, ?)`, [param.tipo, param.data, param.preco, param.valor, param.hodometro]);
  return results.rowsAffected;
}

export const updateGasto = async (param) => {
  let results = await DB_EXEC(`update gastos set tipo=?, data=?, preco=?, valor=?, hodometro=?
  where id=?`, [param.tipo, param.data, param.preco, param.valor, param.hodometro, param.id]);
  return results.rowsAffected;
}

export const deleteGasto = async (id) => {
  let results = await DB_EXEC(`delete from gastos where id=?`, [id]);
  return results.rowsAffected;
}