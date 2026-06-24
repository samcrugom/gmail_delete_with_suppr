## 🛠️ Instalación y Configuración (Paso a Paso)

Para que el script funcione correctamente, es necesario configurar tanto Gmail como los permisos de extensiones del navegador:

### 1. Configurar el Navegador (Chrome / Edge / Brave)
Debido a las políticas de seguridad actuales de los navegadores, debes habilitar los permisos de desarrollador:
1. Abre tu navegador y ve a la sección de extensiones (escribe `chrome://extensions/` en la barra de direcciones).
2. En la esquina superior derecha, **activa el interruptor "Modo de desarrollador"**.
3. Haz clic derecho sobre el icono de la extensión Tampermonkey -> **Gestionar extensión**.
4. Baja hasta los permisos avanzados y **activa la opción "Permitir secuencias de comandos del usuario"**.

### 2. Instalar el Script
1. Asegúrate de tener la extensión **Tampermonkey** instalada.
2. Abre el panel de control de Tampermonkey y crea un nuevo script.
3. Copia el código de `gmail-suprimir.user.js` de este repositorio, pégalo allí y guarda (`Ctrl + S`).

### 3. Configurar Gmail
1. Entra en tu cuenta de Gmail.
2. Ve al icono de la rueda dentada **Ajustes** ⚙️ -> **Ver todos los ajustes**.
3. En la pestaña **General**, baja hasta la sección **Atajos de teclado** y marca **"Atajos de teclado activados"**.
4. Baja hasta el final de la página y haz clic en **Guardar cambios**.

### 4. Activar
Vuelve a tu pestaña de Gmail y realiza una recarga limpia pulsando **`Ctrl + F5`**. ¡Listo! Ya puedes seleccionar correos y borrarlos con la tecla **Suprimir**.
