const controller = {};
const data = {};

controller.multa = (req, res) => {
  
  req.getConnection((err, conn) => { 
    conn.query('SELECT * FROM multa', (err, multas) => {
     if (err) {
      res.json(err);
     }
     res.render('multas', {
        data: multas
     });
    });
  });    
};

controller.editar_multa = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM multa WHERE id_multa= ?", [id], (err, rows) => {
      res.render('multa_edit', {
        data: rows[0]
      })
    });
  });
};

controller.actualizar_multa = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
      req.getConnection((err, conn) => {
          conn.query('UPDATE multa set ? where id_multa = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/multa');
  });
  });
};

controller.delete_multa = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM multa WHERE id_multa = ?', [id], (err, rows) => {
      res.redirect('/multa');
    });
  });
}


controller.guardarmulta = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO multa set ?', [data], (err, multas) => {
      console.log(multas)
      res.redirect('/multa');
    })
  })
};


module.exports = controller;