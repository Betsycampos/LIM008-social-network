export const objTemp = {
  home: `
  <div>
    <button id="btn-register" href="#/register">Regístrate</button>
    <button id="btn-enter" href="#/login">Ingresa</button>
  </div>`,

  register: `
    <div>
      <h2>REGÍSTRATE</h2>
      <img alt="image-tree" src="https://i.ibb.co/F0vckNw/img-tree.png" class="img-tree"/>
      <div> 
        <input id="email" type="text" placeholder="Correo">
        <p id="warning-em" class="warning"></p>
        <input id="password" type="password" placeholder="Contraseña">
        <p id="warning-pw" class="warning"></p>
        <input id="conf-password" type="password" placeholder="Confirmar Contraseña">
        <p id="warning-cf" class="warning"></p>
      </div>
      <button id="btn-submit" type="button" class="btn-registrar">Regístrate</button>
      <div>
        <label>O ingresa a través de:</label>
        <img id="auth-fb" alt="ico-fb" class="ico-fb" src="https://i.ibb.co/NmxyWjL/ico-fb.png" />
        <img id="auth-google" alt="ico-google" class="ico-google" src="https://i.ibb.co/xgLXQrr/ico-gg.png" />
      </div>
    </div>`,

  login: `
  <form id="frm-login">
    <div>
      <h2>INICIA SESIÓN</h2>
      <img alt="image-tree" src="https://i.ibb.co/F0vckNw/img-tree.png" class="img-tree"/>
      <div> 
        <input id="email" type="text" placeholder="Correo">
        <p id="warning-em" class="warning"></p>
        <input id="password" type="password" placeholder="Contraseña">
        <p id="warning-pw" class="warning"></p>
      </div>
      <button id="btn-login" type="button" class="btn-registrar">Ingresa</button>
      <div>
        <label>O ingresa a través de:</label>
        <img id="auth-fb" alt="ico-fb" class="ico-fb" src="https://i.ibb.co/NmxyWjL/ico-fb.png" />
        <img id="auth-google" alt="ico-google" class="ico-google" src="https://i.ibb.co/xgLXQrr/ico-gg.png" />
      </div>
    </div>
  </form>`,

  wall: `
  <p>MURO AQUÍ</p>
  `
}