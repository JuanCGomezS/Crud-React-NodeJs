const router = require('express').Router();
const conection = require('./config/conection');
const debud = false;

// All routes
//get list users
router.get('/usuario', (req, res) => {
    let sql = 'SELECT * FROM usuario';
    conection.query(sql, (err, rows, fields) => {
        if (err) return err
        else {
            if (debud) console.log('List users', rows);
            res.json(rows);
        }
    })
})

//get a user
router.get('/usuario/:id', (req, res) => {
    const { id } = req.params;
    let sql = `SELECT * FROM usuario where id_u = ${id}`;
    conection.query(sql, [id], (err, row, fields) => {
        if (err) return err
        else {
            if (debud) console.log('User', row);
            res.json(row);
        }
    })
})

//add a user
router.post('/usuario', (req, res) => {
    const { nombre_u, apellido_u, correo_u, telefono_u } = req.body;

    let sql = `insert into usuario (nombre_u, apellido_u, correo_u, telefono_u) values('${nombre_u}', '${apellido_u}','${correo_u}', '${telefono_u}')`;
    conection.query(sql, (err, rows, fields) => {
        if (err) return err
        else {
            if (debud) console.log('Add user');
            res.json({status: 'Add user success'});
        }
    })
})

//delete a user
router.delete('/usuario/:id', (req, res) => {
    console.log('entra delete', req.params);
    const { id } = req.params;
    let sql = `delete FROM usuario where id_u = ${id}`;
    conection.query(sql, (err, row, fields) => {
        if (err) return err
        else {
            if (debud) console.log('Delete user');
            res.json({status: 'Delete user success'});
        }
    })
})

//update a user
router.put('/usuario/:id', (req, res) => {
    const { id } = req.params;
    const { nombre_u, apellido_u, correo_u, telefono_u } = req.body;
    let sql = `update usuario set nombre_u = '${nombre_u}', apellido_u = '${apellido_u}', correo_u = '${correo_u}', telefono_u = '${telefono_u}' where id_u = ${id}`;
    conection.query(sql, [id], (err, row, fields) => {
        if (err) return err
        else {
            if (debud) console.log('Update user');
            res.json({status: 'Update user success'});
        }
    })
})

module.exports = router;