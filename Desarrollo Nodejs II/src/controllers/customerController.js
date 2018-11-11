
const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer', (err, customer) => {
     if (err) {
      res.json(err);
     }
     res.render('customers', {
        data: customer
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO propietario set ?', [data], (err, owner) => {
      console.log(query)
      res.redirect('/nuevo');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM propietario WHERE id_propietario = ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE propietario set ? where id_propietario = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/nuevo');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM propietario WHERE id_propietario = ?', [id], (err, rows) => {
      res.redirect('/nuevo');
    });
  });
}


controller.nuevos = (req, res) => {
req.getConnection((err, conn) => {
    conn.query('SELECT * FROM propietario', (err, owner) => {
     if (err) {
      res.json(err);
     }
     res.render('owner', {
        data: owner
     });
    });
  });
};


controller.prueba = (req, res) => {
  
  var valor = req.body.id
  
  req.getConnection((err, conn) => {
    conn.query("SELECT propietario.name, propietario.id_propietario, vehiculo.id_placa, vehiculo.modelo, multa.fecha_multa, multa.desc_multa, multa.valor_multa FROM propietario, vehiculo, multa WHERE propietario.id_propietario = vehiculo.id_propietario_v and vehiculo.id_placa=multa.id_placa_m and propietario.id_propietario = ?", [valor], (err, rows) => {
      if (err) {
      res.json(err);
     }
     res.render('buscar_edit', {
        data: rows
     });
    });
  });
};


module.exports = controller;