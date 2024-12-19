window.onload = function() {
    var logoDiv = document.querySelector('.logo');
    
    var imgElement = document.createElement('img');
    
    imgElement.src = '../images/logo/logo.png';
    
    imgElement.width = 50;
    imgElement.height = 50; 
    
    logoDiv.appendChild(imgElement);
};
