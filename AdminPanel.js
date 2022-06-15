let button = document.getElementById("but_edit")
button.addEventListener("click", (e)=>{
    Swal.fire({
        title: 'ID_var',
        html: '<input type="text" id="uname" class="swal2-input" placeholder="Benutzername" value="">' +
            '<input type="checkbox" class="swal2-input" placeholder="Aktiviert" value="True">',
        confirmButtonText: 'Speichern',
        denyButtonText: 'Löschen',
        cancelButtonText: 'Abbrechen',
        showConfirmButton: true,
        showDenyButton: true,
        showCancelButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        focusConfirm: false,
        preConfirm: () => {
            const username = Swal.getPopup().querySelector('#uname').value
            if (!username) {
                Swal.showValidationMessage('Bitte alle Felder ausfüllen')
            }
        },
    })
})