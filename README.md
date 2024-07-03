<img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Crunchyroll_Logo.png" alt="Crunchyroll Logo" width="200" height="178">

# CrunchyRoll Replica

## What is it about?

This API project mimics the style of the Crunchyroll website, allowing you to access information on several anime series. It was built using Node.js, MySQL, CSS, and JavaScript, along with several dependencies such as:

- nodemon
- path
- mysql
- morgan
- express-session
- express-myconnection
- express
- ejs
- dotenv
- bcryptjs
- axios

The API I connected to was [the Jikan API](https://docs.api.jikan.moe/).

## How to open this project:

1. Download the project files.
2. Open the project in your preferred code editor.
3. Open the terminal (cmd) and navigate to the project directory.
4. Install dependencies by running:

```npm install```

5. Download [here](https://www.apachefriends.org/index.html) and install XAMPP to connect to the database.

- Start XAMPP and ensure both Apache and MySQL services are running.
- 
![XAMPP Control Panel](https://static.javatpoint.com/tutorial/xampp/images/xampp-control-panel12.png "XAMPP Control Panel")

6. Access phpMyAdmin:
- Open [phpMyAdmin](http://localhost/phpmyadmin/) or through XAMPP control panel.

7. Set up the MySQL database:
- Open MySQL console in XAMPP and execute the following commands:
  
  ```
  CREATE DATABASE databaseusers;
  USE databaseusers;
  CREATE TABLE usersregistered (
      id INT(6) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(50) NOT NULL,
      user VARCHAR(50) NOT NULL,
      email VARCHAR(50) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      password VARCHAR(255) NOT NULL
  ) AUTO_INCREMENT=1;
  ```

8. Verify and adjust `.env` file:
- Ensure the `.env` file in your project root matches your MySQL configuration.

9. Start the project:
- Run the following command in your terminal:
  
  ```
  npm run dev
  ```

10. View the project:
 - Open your browser and go to [http://localhost:3312/](http://localhost:3312/) to view the project.

This should guide you through setting up and running the project successfully.

## ¿De qué se trata?

Este proyecto de API imita el estilo del sitio web de Crunchyroll, permitiéndote acceder a información sobre varias series de anime. Fue construido utilizando Node.js, MySQL, CSS y JavaScript, junto con varias dependencias como:

- nodemon
- path
- mysql
- morgan
- express-session
- express-myconnection
- express
- ejs
- dotenv
- bcryptjs
- axios

La API a la que me conecté fue [la API de Jikan](https://docs.api.jikan.moe/).

## Cómo abrir este proyecto:

1. Descarga los archivos del proyecto.
2. Abre el proyecto en tu editor de código preferido.
3. Abre la terminal (cmd) y navega al directorio del proyecto.
4. Instala las dependencias ejecutando:

```npm install```


5. Descarga e instala XAMPP [aquí](https://www.apachefriends.org/index.html) para conectarte a la base de datos.

- Inicia XAMPP y asegúrate de que los servicios de Apache y MySQL estén en ejecución.
![Panel de control de XAMPP](https://static.javatpoint.com/tutorial/xampp/images/xampp-control-panel12.png "Panel de control de XAMPP")

6. Accede a phpMyAdmin:
- Abre [phpMyAdmin](http://localhost/phpmyadmin/) o a través del panel de control de XAMPP.

7. Configura la base de datos MySQL:
- Abre la consola de MySQL en XAMPP y ejecuta los siguientes comandos:

  ```sql
  CREATE DATABASE databaseusers;
  USE databaseusers;
  CREATE TABLE usersregistered (
      id INT(6) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(50) NOT NULL,
      user VARCHAR(50) NOT NULL,
      email VARCHAR(50) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      password VARCHAR(255) NOT NULL
  ) AUTO_INCREMENT=1;
  ```

8. Verifica y ajusta el archivo `.env`:
- Asegúrate de que el archivo `.env` en la raíz de tu proyecto coincida con la configuración de MySQL.

9. Inicia el proyecto:
- Ejecuta el siguiente comando en tu terminal:

  ```
  npm run dev
  ```

10. Visualiza el proyecto:
 - Abre tu navegador y visita [http://localhost:3312/](http://localhost:3312/) para ver el proyecto.

Esto debería guiarte a través de la configuración y ejecución exitosa del proyecto.


</div>

