 $(document).ready(function(){
     $('.select-box select').selectpicker();
 })


 function Enabledd1(chkddl) {
    var ddl = document.getElementById("DDL");
    ddl.disabled = chkddl.checked ? false : true;
    if (!ddl.disabled) {
        ddl.focus()
    }
}