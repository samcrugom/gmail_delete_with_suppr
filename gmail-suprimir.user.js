// ==UserScript==
// @name         Gmail - Borrar con Suprimir (Fase Captura Total)
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Intercepta la tecla Suprimir en las capas internas de Gmail
// @author       samcrugom
// @match        https://mail.google.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Escuchamos en el 'document' en lugar de 'window' para estar un paso más cerca del DOM
    document.addEventListener('keydown', function(e) {

        if (e.key === 'Delete' || e.keyCode === 46) {

            // Si estás redactando o buscando, respetamos la tecla
            const activeEl = document.activeElement;
            if (activeEl && (
                activeEl.tagName === 'INPUT' ||
                activeEl.tagName === 'TEXTAREA' ||
                activeEl.isContentEditable
            )) {
                return;
            }

            // Buscamos el botón de eliminar por el atributo "aria-label" que Gmail mete a piñón fijo
            // Buscamos tanto en minúsculas, mayúsculas o selectores comunes de la barra de herramientas
            const botonEliminar = document.querySelector('[aria-label*="Eliminar" i], [data-tooltip*="Eliminar" i], div[role="button"][act="10"]');

            if (botonEliminar && (botonEliminar.offsetWidth > 0 || botonEliminar.offsetHeight > 0)) {
                // Frenamos en seco que Gmail procese la tecla a su manera
                e.preventDefault();
                e.stopImmediatePropagation();
                e.stopPropagation();

                // Simulación de clic completa para saltar protecciones
                ['mousedown', 'mouseup', 'click'].forEach(eventType => {
                    botonEliminar.dispatchEvent(new MouseEvent(eventType, {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    }));
                });

                console.log('-> Script Tampermonkey: Botón eliminar pulsado con éxito.');
            }
        }
    }, true); // TRUE crítico para adelantarse a los scripts de Google
})();