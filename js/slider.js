/*Function autoejecutable*/
    /*Algorithmes
            1. Acceder y stockear todos los elementos html a utilisar
            2. hacer que los slides se muevan automaticamente con un SETINTERVAL que ejecute una funcion CADA 3 SEGUNDOS)
                    2.1 mueve el blocke de slide hacia la izquierda (.marginLeft = '-100%')
                    2.2 que el slide tenga una transicion (ease de 1segundo)
            3. setear un SetTimeOut que se ejecute cada 1segundo por cada foto = 3000 segundo del setINTERVAL
                    3.1 coloca el primer slide de ultimo
                    3.2 reposicion el blocke del slide a un (marginLeft = 0)
                    3.3 desactiva la transicion momentaneamente
            4. Ejecuto la funcion inicio
    */
    
        var propSlider = {
            slider: document.getElementById('SliderCarrousel'),
            primerSlide: null
        }
    
        var metSlider = {
            inicio: function () {
                setInterval(metSlider.moverSlide, 3000);/*Se ejecuta cada 2segundo*/
            },
    
            moverSlide: function () {
                propSlider.slider.style.transition = 'all 1s ease';
                propSlider.slider.style.marginLeft = '-100%';
    
                setTimeout(function () {/*se va ejecutar despues de 1segundo*/
                    propSlider.primerSlide = propSlider.slider.firstElementChild;
                    propSlider.slider.appendChild(propSlider.primerSlide);
                    propSlider.slider.style.transition = 'unset';
                    propSlider.slider.style.marginLeft = 0;
                }, 1000);
            }
        }
    
        metSlider.inicio();
    
   
    