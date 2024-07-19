import { connect } from "../database/connection.js";

const   crudUser = {};

crudUser.read = (req, res) => {
    connect.query(`
        SELECT u.userCod, u.userUsu, p.personNom 
        FROM user u 
        JOIN person p ON u.userPerCod = p.personCod`, 
        (error, results) => {
            if (error) {
                throw error;
            } else {
                res.render('../views/crud_user.ejs', { result: results });
            }
        });
};

crudUser.cud = (req, res) => {
    const { btm_create, btm_update, btm_delete } = req.body;
    const userCod = req.body.txt_id;
    const userUsu = req.body.txt_usu;
    const userPerCod = req.body.txt_per;

    if (btm_create) {
        connect.query('INSERT INTO user SET ?', { userUsu: userUsu, userPerCod: userPerCod }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('../views/crud_user.ejs');
            }
        });
    }

    if (btm_update) {
        connect.query('UPDATE user SET ? WHERE userCod = ?', [{ userUsu: userUsu}, userCod], (error, results) => {
            if (error) {
                console.log(error);
            } 
            else {
                res.redirect('../views/crud_user.ejs');
            }
        });
    }

    if (btm_delete) {
        connect.query('DELETE FROM user WHERE userCod = ?', [userCod], (error, results) => {
            if (error) {
                console.log(error);
            } 
            else {
                res.redirect('../views/crud_user.ejs');
            }
        });
    }
};


export { crudUser };
