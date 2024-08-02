const listEl=document.getElementById("list")
        $(document).ready(function () {
            $('#input-el').change(function () {
                let task = $(this).val()
                $('#list').append(`<li>${task}<span><i class="fa-solid fa-check" style="color: #00ff00;"></i><i class="fa-solid fa-trash" style="color: #ff0000;"></i></span></li>`)
                $(this).val('')
                saveData()
            })
            $(document).on('click', '.fa-trash', function () {
                $(this).parent().parent().remove()
                saveData()
            })
            $(document).on('click', '.fa-check', function () {
                $(this).parent().parent().addClass("done")
                $(this).parent().parent().css("text-decoration","line-through");
                saveData()
            })
            $(document).on('click', '#clr', function () {
                $('.done').remove()
                saveData()
            })
        })

function saveData(){
    console.log("called")
    localStorage.setItem("DATA",listEl.innerHTML);
}
function displayData(){
    listEl.innerHTML=localStorage.getItem("DATA")
}
displayData()