var socket = io.connect('http://localhost:4000');
// var text = "user is typing";
var message = document.getElementById('message');
    user = document.getElementById('user'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback')

    btn.addEventListener('click', function(){
            socket.emit('chat', {
                message: message.value,
                user: user.value,         
            }); 

        message.value = "";
    });

    message.addEventListener('keypress', function() {
        socket.emit('typing', user.value);

    
    });

    socket.on('chat', function(data) {
        feedback.innerHTML = "";
        output.innerHTML += '<p><strong>' + data.user + ': </strong>' + data.message + '</p>'
        
    });
        
    
        socket.on('typing', function (data) {
                feedback.innerHTML = '<p><em>' + data + ' წერს... </em></p>';  
        });
    
    

    