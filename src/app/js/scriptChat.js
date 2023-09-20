////////////////////
//Send msg
$(document).ready(function() {
    $('#chat-form').submit(function(e) {
        e.preventDefault();
        var message = $('#message').val();
        if (message) {
            $('.chat-message:last').after('<div class="col-12 col-lg-4"></div><div class="chat-message col-12 col-lg-8"><i class="bi bi-person-fill" style="color: #09B425;"></i> <b>Usuario: </b>' + message + '</div>')
            $('#message').val('');
        }
    });
});


const toggleChatButton = document.getElementById('toggle-chat-button');
const chatContainer = document.getElementById('chat-container');

toggleChatButton.addEventListener('click', () => {
    if (chatContainer.style.display === 'none') {
        chatContainer.style.display = 'block';
    } else {
        chatContainer.style.display = 'none';
    }
});