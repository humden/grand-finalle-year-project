let patientBtn = document.getElementsByClassName("patientBtn");
var useOnce = document.getElementsByClassName("useonce");
console.log(useOnce)

            window.onload = function (e) {
                fetch('/api/fetch_patient')
                    .then((resp) => resp.json())
                    .then((data) => {
                        console.log(data)
                        let uis = data.msg
                        patientBtn.innerText = uis
                        console.log(patientBtn)
                    }).catch(e => console.log(e + "    kldgkll"))
            }