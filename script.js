// script.js
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');


if (contactForm) {
    contactForm.addEventListener('submit', async function(event) {
      
        event.preventDefault(); 
        
     
        const formData = new FormData(contactForm);
        const actionUrl = contactForm.getAttribute('action');
        
   
        formStatus.style.display = 'block';
        formStatus.style.color = 'var(--text-muted)';
        formStatus.innerText = 'Sending message...';

        try {
        
            const response = await fetch(actionUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
             
                formStatus.style.color = 'var(--primary-cyan)'; 
                formStatus.innerText = 'Message sent successfully!';
                contactForm.reset();
                
             
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            } else {
           
                formStatus.style.color = '#ef4444';
                formStatus.innerText = 'Oops! There was a problem sending your message.';
            }
        } catch (error) {
           
            formStatus.style.color = '#ef4444';
            formStatus.innerText = 'Oops! Network error. Please try again later.';
        }
    });
}

// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        navbar.style.backgroundColor = 'rgba(7, 11, 20, 0.95)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.backgroundColor = 'rgba(7, 11, 20, 0.9)';
    }
});


