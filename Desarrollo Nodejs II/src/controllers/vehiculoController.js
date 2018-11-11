const controller = {};
const data = {};

controller.vehiculo = (req, res) => {
  
  req.getConnection((err, conn) => { 
    conn.query('SELECT * FROM vehiculo', (err, vehiculos) => {
     if (err) {
      res.json(err);
     }
     res.render('vehiculos', {
        data: vehiculos
     });
    });
  });    
};

controller.editar = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM vehiculo WHERE id_placa= ?", [id], (err, rows) => {
      res.render('vehiculo_edit', {
        data: rows[0]
      })
    });
  });
};

controller.actualizar = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
      req.getConnection((err, conn) => {
          conn.query('UPDATE vehiculo set ? where id_placa = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/vehiculo');
  });
  });
};

controller.delete_vehiculo = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM vehiculo WHERE id_placa = ?', [id], (err, rows) => {
      res.redirect('/vehiculo');
    });
  });
}


controller.guardarvehiculo = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO vehiculo set ?', [data], (err, vehiculos) => {
      console.log(vehiculos)
      res.redirect('/vehiculo');
    })
  })
};

controller.llenar_p = (req, res) => {
  
  req.getConnection((err, conn) => { 
    conn.query('SELECT id_propietario FROM propietario', (err, vehiculos) => {
     if (err) {
      res.json(err);
     }
     res.render('vehiculos', {
        data: vehiculos
     });
    });
  });    
};

//function llenarcombobox(){

  //$mysqli = new mysqli('localhost', 'root', '', 'crudnodejsmysql');
  //$query = $mysqli -> query ("SELECT id_propietario FROM propietario");
    //while ($valores = mysqli_fetch_array($query)) {
                        
  //echo '<option value="'.$valores[id].'">'.$valores[id_propietario].'</option>';
//}

//}
module.exports = controller;