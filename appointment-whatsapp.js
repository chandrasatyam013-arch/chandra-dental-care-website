// Chandra Dental Clinic - Appointment Form Handler
// This file handles WhatsApp integration for appointment bookings

document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById('appointmentForm');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            
            // Simple validation
            if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.date || !formData.time || !formData.service) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Create WhatsApp message with all appointment details
            const whatsappMessage = encodeURIComponent(
                '*NEW APPOINTMENT REQUEST* 🦷\n\n' +
                '*Patient Details:*\n' +
                'Name: ' + formData.firstName + ' ' + formData.lastName + '\n' +
                'Phone: ' + formData.phone + '\n' +
                'Email: ' + formData.email + '\n\n' +
                '*Appointment Details:*\n' +
                'Preferred Date: ' + formData.date + '\n' +
                'Preferred Time: ' + formData.time + '\n' +
                'Service: ' + formData.service + '\n\n' +
                '*Message:*\n' +
                (formData.message || 'No additional message')
            );
            
            // Doctor's WhatsApp number
            const phoneNumber = '+917903882800';
            
            // Open WhatsApp with pre-filled message
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
            window.open(whatsappUrl, '_blank');
            
            // Show confirmation
            alert('Redirecting to WhatsApp... Your appointment details will be sent to Dr. Chandra!');
            
            // Reset form
            appointmentForm.reset();
        });
    }
    
    console.log('WhatsApp appointment handler loaded successfully!');
});
