document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const direccion = document.getElementById('direccion').value;
            const mensaje = document.getElementById('mensaje').value;

            const userData = {
                nombre: nombre,
                email: email,
                telefono: telefono,
                direccion: direccion,
                mensaje: mensaje,
                fechaEnvio: new Date().toLocaleString()
            };

            localStorage.setItem('melissas_cleaning_bins_request', JSON.stringify(userData));
            
            const emailAddress = "melissascleaningbins@example.com"; 
            const subject = `Nueva solicitud de limpieza de botes de basura de ${nombre}`;
            const body = `
            Hola Melissa's Cleaning Bins,
            
            Hay una nueva solicitud de servicio. Aquí están los detalles:

            Nombre: ${nombre}
            Correo Electrónico: ${email}
            Teléfono: ${telefono}
            Dirección: ${direccion}
            Mensaje: ${mensaje}

            ¡Gracias!
            `;
            const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
        });

        // Carrusel de la sección de servicios
        const slider = document.getElementById('image-slider');
        let slideIndex = 0;
        const totalSlides = slider.children.length;
        const intervalTime = 1100;

        setInterval(() => {
            slideIndex = (slideIndex + 1) % totalSlides;
            const offset = -slideIndex * 100 / totalSlides;
            slider.style.transform = `translateX(${offset}%)`;
        }, intervalTime);

        // Nuevo carrusel de la sección "Por qué Elegirnos"
        const whyUsSlider = document.getElementById('why-us-slider');
        let whyUsSlideIndex = 0;
        const whyUsTotalSlides = whyUsSlider.children.length;
        const whyUsIntervalTime = 4000; // 4 segundos

        setInterval(() => {
            whyUsSlideIndex = (whyUsSlideIndex + 1) % whyUsTotalSlides;
            const offset = -whyUsSlideIndex * 100 / whyUsTotalSlides;
            whyUsSlider.style.transform = `translateX(${offset}%)`;
        }, whyUsIntervalTime);