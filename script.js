const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .step').forEach(el => {
    observer.observe(el);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


document.getElementById('image-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = document.createElement('img');
            img.src = event.target.result;
            img.classList.add('interface-image');
            img.style.marginTop = '15px';

            const uploadedContainer = document.getElementById('uploaded-images');
            uploadedContainer.appendChild(img);

            const message = document.createElement('p');
            message.textContent = 'Зображення успішно завантажено!';
            message.style.color = '#3cb371';
            message.style.marginTop = '10px';
            uploadedContainer.appendChild(message);

            setTimeout(() => {
                message.style.display = 'none';
            }, 3000);
        };
        reader.readAsDataURL(file);
    }
});