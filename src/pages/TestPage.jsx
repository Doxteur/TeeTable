import React, { useEffect, useState } from 'react'
import Database from '@tauri-apps/plugin-sql';
import { useSelector } from 'react-redux';

function TestPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const connection = useSelector((state) => state.connection);
  console.log(connection);

  useEffect(() => {
    async function connectToDatabase() {
      try {
        const db = await Database.load('mysql://root:password@localhost:3306/sdf_infoexcl144');
        const newConnection = {
          id: connection.connections.length + 1,
          name: 'New Connection',
          type: 'MySQL',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'password',
          database: 'sdf_infoexcl144',
          ssl: false,
        }
        connection.connections.push(newConnection);
        console.log('Database connection successful:', db);

        // Get database table
        const result = await db.select("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_SCHEMA='sdf_infoexcl144'");
        console.log('Query result:', result);

        if (Array.isArray(result) && result.length > 0) {
          setUsers(result);
        } else {
          setError("La table 'utilisateur' est vide ou n'existe pas.");
        }
      } catch (error) {
        console.error('Error connecting to database or executing query:', error);
        setError(`Erreur: ${error.message}`);
      }
    }

    connectToDatabase();
  }, []);

  return (
    <main id='content' className='lg:ps-[20.5rem] pt-[59px] lg:pt-0'>
      <div className='p-2 sm:p-5 sm:py-0 sm:py-5 space-y-5'>
        <div className='p-4 flex flex-col justify-center h-72 md:h-96 min-h-[calc(100vh-115px)] sm:min-h-[calc(100vh-40px)] bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-primary dark:border-neutral-700'>
          {error ? (
            <p>Erreur: {error}</p>
          ) : users.length > 0 ? (
            <ul>
              {users.map((user, index) => (
                <li key={index}>{JSON.stringify(user)}</li>
              ))}
            </ul>
          ) : (
            <p>Chargement des utilisateurs...</p>
          )}
        </div>
      </div>
    </main>
  )
}

export default TestPage
