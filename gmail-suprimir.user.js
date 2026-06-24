// ==UserScript==
// @name         Gmail - Borrar con Suprimir (Universal)
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Borra correos con Suprimir tanto en bandeja de entrada como en búsquedas/filtros
// @author       samcrugom
// @match        https://mail.google.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(e) {

        if (e.key === 'Delete' || e.keyCode === 46) {

            // Si estás escribiendo en la barra de búsqueda o redactando, no hagas nada
            const activeEl = document.activeElement;
            if (activeEl && (
                activeEl.tagName === 'INPUT' ||
                activeEl.tagName === 'TEXTAREA' ||
                activeEl.isContentEditable
            )) {
                return;
            }

            // Selector ampliado: busca el botón de eliminar normal, el de la vista de búsqueda y el código interno de Google (act="10")
            const botonEliminar = document.querySelector([
                '[aria-label*="Eliminar" i]',
                '[data-tooltip*="Eliminar" i]',
                'div[role="button"][act="10"]',
                '[role="main"] div[role="button"][data-tooltip*="Eliminar" i]',
                'div[data-tooltip*="Borrar" i]'
            ].join(','));

            if (botonEliminar && (botonEliminar.offsetWidth > 0 || botonEliminar.offsetHeight > 0)) {
                e.preventDefault();
                e.stopImmediatePropagation();
                e.stopPropagation();

                // Simulación de clic fulminante
                ['mousedown', 'mouseup', 'click'].forEach(eventType => {
                    botonEliminar.dispatchEvent(new MouseEvent(eventType, {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    }));
                });

                console.log('-> Correo eliminado en vista filtrada.');
            }
        }
    }, true); // Captura estricta activada
})();
