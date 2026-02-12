document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("camperForm");
    const tabla = document.querySelector("#tablaCampers tbody");

    renderCampers();

    form.addEventListener("submit", function(e){
        e.preventDefault();

        const campers = getData("campers");
        const editIndex = document.getElementById("editIndex").value;

        const camper = {
            id: document.getElementById("id").value,
            nombres: document.getElementById("nombres").value,
            apellidos: document.getElementById("apellidos").value,
            direccion: document.getElementById("direccion").value,
            acudiente: document.getElementById("acudiente").value,
            telefonoCel: document.getElementById("telefonoCel").value,
            telefonoFijo: document.getElementById("telefonoFijo").value,
            estado: document.getElementById("estado").value,
            riesgo: "Bajo"
        };

        if(editIndex === ""){
            campers.push(camper);
        } else {
            campers[editIndex] = camper;
        }

        saveData("campers", campers);
        form.reset();
        document.getElementById("editIndex").value = "";
        renderCampers();
    });

    function renderCampers(){
        const campers = getData("campers");
        tabla.innerHTML = "";

        campers.forEach((c, index) => {
            tabla.innerHTML += `
                <tr>
                    <td>${c.id}</td>
                    <td>${c.nombres} ${c.apellidos}</td>
                    <td>${c.estado}</td>
                    <td>${c.riesgo}</td>
                    <td>
                        <button onclick="editarCamper(${index})">Editar</button>
                        <button onclick="eliminarCamper(${index})">Eliminar</button>
                    </td>
                </tr>
            `;
        });
    }

    window.editarCamper = function(index){
        const campers = getData("campers");
        const camper = campers[index];

        document.getElementById("id").value = camper.id;
        document.getElementById("nombres").value = camper.nombres;
        document.getElementById("apellidos").value = camper.apellidos;
        document.getElementById("direccion").value = camper.direccion;
        document.getElementById("acudiente").value = camper.acudiente;
        document.getElementById("telefonoCel").value = camper.telefonoCel;
        document.getElementById("telefonoFijo").value = camper.telefonoFijo;
        document.getElementById("estado").value = camper.estado;
        document.getElementById("editIndex").value = index;
    }

    window.eliminarCamper = function(index){
        const campers = getData("campers");
        campers.splice(index, 1);
        saveData("campers", campers);
        renderCampers();
    }

});
