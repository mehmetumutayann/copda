document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engeller
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    var body = "Ad: " + name + "\nE-posta: " + email + "\n\n" + message;
  
    // E-posta adresini belirler
    var recipient = "infocopda@gmail.com";
    var subject = "Yeni İletişim Mesajı";
  
    var mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  
    window.location.href = mailtoLink;
  });