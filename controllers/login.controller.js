import { connect } from "../database/connection.js";

const authController = {};

authController.showLogin = (req, res) => {
    const { error } = req.query;
    res.render('../views/login.ejs', { error });
};

authController.register = (req, res) => {
    const { personApeP, personApeM, personNom, personFecha, personEmail, user, password } = req.body;

    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
            console.log(err);
            res.redirect('../views/login.ejs');
        } 
        else {
        connect.query('INSERT INTO person (personApeP, personApeM, personNom, personFecha, personEmail) VALUES (?, ?, ?, ?, ?)', 
            [personApeP, personApeM, personNom, personFecha, personEmail], 
            (error, resultsPerson) => {
                if (error) {
                    console.log(error);
                    res.redirect('../views/login.ejs');
                } 
                else {
                    connect.query('INSERT INTO user (userUsu, userPas, userPerCod) VALUES (?, ?, ?)', 
                        [user, hashedPassword, resultsPerson.insertId], 
                        (error, resultsUsuario) => {
                            if (error) {
                                console.log(error);
                                res.redirect('../views/login.ejs');
                            } 
                            else {
                                res.redirect('/');
                            }
                            });
                    }
                });
        }
    });
};

authController.login = (req, res) => {
    const { user, password } = req.body;

    connect.query('SELECT * FROM user WHERE userUsu = ?', [user], (error, results) => {
        if (error) {
            console.log(error);
            res.redirect('../views/login.ejs');
        } else {
            if (results.length > 0) {
                bcrypt.compare(password, results[0].userPas, (err, result) => {
                    if (result) {
                        res.redirect('/');
                    } else {
                        res.redirect('/login?error=Contraseña incorrecta');
                    }
                });
            } else {
                res.redirect('/login?error=Usuario no existe');
            }
        }
    });
};

export { authController };