let patientBtn = document.getElementsByClassName("patientBtn")

            window.onload = function (e) {
                fetch('/api/fetch_patient')
                    .then((resp) => resp.json())
                    .then((data) => {
                        console.log(data)
                        console.log(data.msg)
                        patientBtn.innerText = data.msg
                        console.log(patientBtn)
                    }).catch(e => console.log(e + "    kldgkll"))
            }