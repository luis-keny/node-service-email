const templateHTML = (name, email, comment) => {
  return `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Correo electrónico</title>
        <style>
          * {
            margin: 0;
            box-sizing: border-box;
          }
          
          section {
            position: relative;
            padding: 2rem 1rem;
            display: grid;
            background: #09d;
          }
          
          section > div {
            margin: 0 auto;
          }
          
          article {
            background: white;
            border-radius: 0.4rem;
            padding: 0.8rem;
            display: grid;
            gap: 1rem;
            font-family: "Inter", sans-serif;
            box-shadow: 0 0 10px #00000072;
          }
          
          article > div {
            display: grid;
            gap: 0.2rem;
          }
          
          h1 {
            color: #09d;
            text-align: center;
            font-size: xx-large;
          }
          
          strong {
            font-size: large;
          }
        </style>
      </head>
      <body>
        <section>
          <div>
            <article>
              <h1>ADR LUCEROS</h1>
              <div>
                <strong>Me identifico como:</strong>
                <p>${name}</p>
              </div>
              <div>
                <strong>Correo electrónico:</strong>
                <p>${email}</p>
              </div>
              <div>
                <strong>Mi consulta es:</strong>
                <p>${comment}</p>
              </div>
            </article>
          </div>
        </section>
      </body>
      </html>
    `;
};

module.exports = templateHTML;
