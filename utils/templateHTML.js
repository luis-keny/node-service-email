const templateHTML = (name, lastName, phoneNumber, birthday) => {
  return `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Correo Electrónico Automatico</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f2f2f2;
        margin: 0;
        padding: 0;
      }
      .container {
        background-color: #ffffff;
        margin: 30px auto;
        padding: 20px;
        max-width: 600px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      }
      .header {
        text-align: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #dddddd;
      }
      .header h1 {
        color: #09d;
        margin: 0;
      }
      .content {
        padding: 20px 0;
      }
      .content .item {
        margin-bottom: 15px;
      }
      .content .item strong {
        display: block;
        color: #333333;
        margin-bottom: 5px;
      }
      .content .item p {
        margin: 0;
        color: #555555;
      }
      .footer {
        text-align: center;
        padding-top: 20px;
        border-top: 1px solid #dddddd;
        font-size: 12px;
        color: #888888;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Recopilación de registro</h1>
      </div>
      <div class="content">
        <div class="item">
          <strong>Nombre:</strong>
          <p>${name}</p>
        </div>
        <div class="item">
          <strong>Apellido:</strong>
          <p>${lastName}</p>
        </div>
        <div class="item">
          <strong>Número de Teléfono:</strong>
          <p>${phoneNumber}</p>
        </div>
        <div class="item">
          <strong>Fecha de Cumpleaños:</strong>
          <p>${birthday}</p>
        </div>
      </div>
      <div class="footer">
        <p>Este es un mensaje automático, por favor no responda a este correo.</p>
      </div>
    </div>
  </body>
  </html>
  `;
};


module.exports = templateHTML;
