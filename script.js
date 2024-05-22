  document.getElementById('git-first').addEventListener('click', function() {
    openInNewTab("https://github.com/CheckedAppTeam/CheckedApp")
  });
  document.getElementById('git-second').addEventListener('click', function() {
    openInNewTab("https://github.com/michalbieniek02/Frontend-task")
  });
  document.getElementById('git-third').addEventListener('click', function() {
    openInNewTab("https://github.com/michalbieniek02/ZazaShop")
  });

  document.getElementById('live-button').addEventListener("click",function () {
    openInNewTab('https://www.twitch.tv/')
  })

  function openInNewTab(url) {
    window.open(url, '_blank');
  }

  document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("th5VDHQMgKUYPJFZD"); 

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        emailjs.send('service_hw8s3la', 'template_mggthw5', templateParams)
            .then(function(response) {
                alert('Message has been sent');
            }, function(error) {
                alert('Error sending message');
            });
    });
});
