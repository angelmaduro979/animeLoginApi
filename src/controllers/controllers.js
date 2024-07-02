const bcryptjs = require('bcryptjs');
controllers = {};

controllers.register = (req, res) => {
    res.render('register')
}

//LOGIN AND SIGN UP FUNCTIONS
//SIGN UP

controllers.AddUsers = async (req, res) => {
    const { name, user, email, phone, password } = req.body;
    let hashPassword = await bcryptjs.hash(password, 8)
    req.getConnection((err, conn) => {
        if (err) {
            console.log(err);
            res.status(500).json(err)
        } else {
            let userInfo = { name, user, email, phone, password: hashPassword };
            conn.query('INSERT INTO usersregistered SET ?', userInfo, (err, results) => {
                if (err) {
                    console.log(err);
                    results.status(400).json(err)
                } else {
                    if (name, user, email, phone, password) {
                        const nameUser = name;
                        console.log(nameUser)
                        res.render('register.ejs', {
                            alert: true,
                            title: 'Successfull Registration',
                            icon: 'success',
                            text: `Welcome,${nameUser}! You have been successfully registered!`,
                            timer: 2000,
                            position: 'center',
                            rout: 'login'
                        })
                    } else {
                        res.render('register.ejs', {
                            alert: true,
                            title: 'Missing Information',
                            icon: 'error',
                            text: 'We are sorry! But we need you to fill every blank box',
                            timer: 2000,
                            position: 'center',
                            rout: 'login'
                        })
                    }
                }

            })
        }
    })
}

//LOGIN

controllers.loginGet = (req, res) => {
    res.render('login')
}

controllers.loginPost = (req, res) => {
    const { email, password } = req.body;
    req.getConnection((err, conn) => {
        if (err) {
            console.log(err);
            res.status(500).json(err)
        } else {
            conn.query('SELECT * FROM usersregistered WHERE email=?', [email], async (err, results) => {
                if (err) {
                    console.log(err);
                    res.status(400).json(err)
                } else {
                    if (email && password) {
                        if (results.length === 0 || await !(bcryptjs.compare(password, results[0].password))) {
                            res.render('login.ejs', {
                                alert: true,
                                title: 'Wrong password',
                                icon: 'error',
                                text: 'We are sorry! The information entered is incorrect',
                                timer: 2000,
                                position: 'center',
                                rout: 'login'
                            })
                        } else {
                            req.session.loggedSuccessfully = true;
                            req.session.user = results[0].user;
                            res.render('login.ejs', {
                                alert: true,
                                title: 'Welcome!',
                                icon: 'success',
                                text: 'You have successfully logged in!',
                                timer: 2000,
                                position: 'center',
                                rout: ''
                            })
                        }
                    } else {
                        res.render('login.ejs', {
                            alert: true,
                            title: 'Missing Informaiton',
                            icon: 'error',
                            text: 'We are sorry! But we need you to fill every blank box',
                            timer: 2000,
                            position: 'center',
                            rout: 'login'
                        })
                    }
                }
            })
        }
    })
}
//API CONNECTION

const axios = require('axios');

controllers.getAnimeList = async (req, res) => {
    try {

        const loginVerification = { logged: false, name: '' };

        if (req.session.loggedSuccessfully) {
            console.log('User is logged in, fetching anime list...');
            const animeUrl = 'https://api.jikan.moe/v4/anime'; // Endpoint para obtener la lista de anime en la versión 4 de Jikan
            const animeListInfo = await axios.get(animeUrl);

            // Asumiendo que los datos del anime están en animeListInfo.data.data
            var animeList = animeListInfo.data.data; // Asegurarse de que sea un arreglo

            console.log("Number of anime:", animeList.length); // Muestra la longitud del arreglo de anime

            // Establecer la verificación de inicio de sesión como exitosa
            loginVerification.logged = true;
            loginVerification.name = req.session.user;



        } else {
            // Si no se ha iniciado sesión, configurar el mensaje de error
            loginVerification.name = 'You must log in!';
        }



        // Renderizar la plantilla index.ejs con los datos obtenidos
        res.render('index', {
            animeList,
            loginVerification,

        });

    } catch (error) {
        console.error('Error fetching anime list:', error.response.data);
        res.status(500).send('Internal Server Error');
    }
};




controllers.getAnimeDetail = async (req, res) => {
    const animeId = req.params.id;
    console.log('Anime ID:', animeId);

    try {
        
        // Access to the Jikan api
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${animeId}`);
        const animeDetails = response.data.data;
        console.log(`The animeDetails Info is: ${animeDetails}`)

        // Renderizar la vista ejs con los detalles del anime
        res.render('animeDetails', {
            animeDetails,
            
        });
    } catch (error) {
        console.error('Error al obtener los detalles del anime:', error);
        res.status(500).send('Error interno del servidor');
    }
};



//DASHBOARD-INDEX

// controllers.index = (req, res) => {
//     if (req.session.loggedSuccessfully) {
//         res.render('index.ejs', {
//             logged: true,
//             name: req.session.name
//         })
//     } else {
//         let message = 'you must log in!'
//         res.render('index.ejs', {
//             logged: false,
//             name: message
//         })
//     }
// }



//LOGOUT

controllers.logout = (req, res) => {
    req.session.destroy(() => {
        res.render('login', {
            alert: true,
            title: 'See you later!',
            icon: 'success',
            text: 'You have been successfully logged out! We will miss you',
            timer: 2000,
            position: 'center',
            rout: 'login'
        })
    })
}
module.exports = controllers;