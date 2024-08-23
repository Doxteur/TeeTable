// src/utils/queryBuilder.js

export const queryBuilder = {
  getCountQuery: (tableName) => {
    return `SELECT COUNT(*) as total_count FROM ${tableName}`;
  },

  getLimitedDataQuery: (tableName, limit = 20) => {
    return `SELECT * FROM ${tableName} LIMIT ${limit}`;
  },

  getCustomQuery: (sql) => {
    // Check if 'WHERE' exists in the SQL
    if (sql.includes('WHERE')) {
      const whereIndex = sql.indexOf('WHERE');
      const afterWhere = sql.slice(whereIndex + 5).trim();

      // If there's no condition after 'WHERE', remove it
      if (!afterWhere || afterWhere.startsWith('ORDER') || afterWhere.startsWith('GROUP') || afterWhere.startsWith('LIMIT')) {
        sql = sql.slice(0, whereIndex).trim();
      }
    }

    // Add default LIMIT if not present
    sql = queryBuilder.addDefaultLimit(sql);
    console.log(sql);

    // Log and return the modified SQL
    return sql;
  },

  addDefaultLimit: (sql, defaultLimit = 20) => {
    if (!sql.toLowerCase().includes('limit')) {
      sql += ` LIMIT ${defaultLimit}`;
    }
    return sql;
  }
};
