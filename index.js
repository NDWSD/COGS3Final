document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const message = document.getElementById('message').value;

    if (message) {
        alert('Your message has been received! I will be in touch shortly.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
