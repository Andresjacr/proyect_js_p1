document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const rol = document.getElementById("rol").value;

    if(!rol){
        alert("Debe seleccionar un rol");
        return;
    }

    localStorage.setItem("rolActivo", rol);

    switch(rol){
        case "coordinador":
            window.location.href = "pages/campers.html";
            break;
        case "trainer":
            window.location.href = "pages/trainers.html";
            break;
        case "camper":
            window.location.href = "pages/reportes.html";
            break;
    }
});


