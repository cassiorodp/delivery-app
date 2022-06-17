<p align="center">
  <a href="https://github.com/cassiorodp/delivery-app" target="_blank">
    <img src="./front-end/src/images/beer.gif" alt="Logo" width="120" height="120">
  </a>

  <h2 align="center">Delivery App</h2>

  <p align="center">
    Online beer delivery store for your maximum confort!
    <br />
    <a href="https://jose-delivery-app.vercel.app/login" target="_blank">Source</a>
    ·
    <a href="https://github.com/cassiorodp/delivery-app/issues" target="_blank">Report Bug</a>
  </p>
</p>

---
<p align="center">
  <img src="./assets/readme/landing_page.png" alt="landingpage project"/>
</p>

---

<details open="open">
  <summary><h2">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#techs">Techs</a></li>
      </ul>
    </li>
    <li>
      <span>Running the App</span>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contribution">Contribution</a></li>
    <li><a href="#contacts">Contacts</a></li>
  </ol>
</details>

<h2 id="about">⚡ About</h2> 
<p align="center">
Delivery App is an educational app for you to emulate a real deliver store! Here you can act like a customer or a seller!
</p>
<p align="center">
This project was made with pair programming, so besides hard-skills, a lot of soft-skills where improved by making this app, eg: Communication, Colaboration and Creativity.
</p>

<h3 id="features">⚙ Features</h3>

- Complete consumer buying experience
- Seller page with order status info
- Real time update on order status

<h3 id="techs">💻 Techs</h3>
  
<div>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="node" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="mysql" width="40" height="40"/>


</div>

<h3>👨‍💻 Running the App</h3>

To execute the app, please follow this instructions.

<h3 id="prerequisites">Prerequisites</h3>

You need to have these tools: NPM & Git & MYSQL.
Besides, if you want to contribuite later, it's good to have some code editor like vsCode

<h3 id="installation">Installation</h3>

1. Clone the repository (HTTPS or SSH)
   ```sh
   git clone git@github.com:cassiorodp/delivery-app.git
   ```
    
   ```sh
   git@github.com:cassiorodp/delivery-app.git
   ```

2. Access both front-end & back end folders and install the dependencies

   ```sh
   cd front-end/
   npm install
   cd ..
   cd back-end/
   npm install
   ```

3. In the back-end folder, execute the following comand to migrate your database

   ```sh
   npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all

   ```

4. In the front-end folder, execute the following comand to run the app, by default it should run in `localhost:3000`, you can acess by your browser

   ```sh
   npm start
   ```
5. To simulate a seller person, please, use this login information

   ```
   email="fulana@deliveryapp.com"
   password="fulana@123"
   ```

<h2 id="contribution">🏗 Contribution</h2>

Feel free to add any contribution on our app! Here is some instructions:
    
1. Fork
2. Create your feature/fix branch (`git checkout -b feature/fix`)
3. Commit your alterations (`git commit -m 'Improving your app!'`)
4. Push to remote repository (`git push origin feature/fix`)
5. Open a PR(Pull Request)

---

<h2 id="contacts">📫 Contacts</h2>
    
<h3>This project was done by the developers:</h3>
<ul>
    <li>
      <a href="https://github.com/cassiorodp" target="_blank">
        <img src="https://img.shields.io/badge/-Cassio_Pereira-black?style=flat&logo=Github&logoColor=white">
      </a>
    </li>
    <li>
      <a href="https://github.com/HenriqueCursino" target="_blank">
        <img src="https://img.shields.io/badge/-Henrique_Cursino-black?style=flat&logo=Github&logoColor=white">
      </a>
    </li>
    <li>
      <a href="https://github.com/tomsantos07" target="_blank">
        <img src="https://img.shields.io/badge/-Tom_Santos-black?style=flat&logo=Github&logoColor=white">
      </a>
    </li>
    <li>
      <a href="https://github.com/felipedias1" target="_blank">
        <img src="https://img.shields.io/badge/-Felipe_Dias-black?style=flat&logo=Github&logoColor=white">
      </a>
    </li>
    <li>
      <a href="https://github.com/felipelouzeiro" target="_blank">
        <img src="https://img.shields.io/badge/-Felipe_Louzeiro-black?style=flat&logo=Github&logoColor=white">
      </a>
    </li>
</ul>

---

We are open for feedbacks.
