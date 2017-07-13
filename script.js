    var test = document.getElementById('form__TEST');
    test.addEventListener('submit', function (e) {
        var options = {
            "key": "rzp_test_6zxNZ54esWx2jX",
            "amount": "2000", // 2000 paise = INR 20
            "name": "Manipal Connect",
            "description": "Purchase Description",
            "image": "/your_logo.png",
            "handler": function (response){
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    document.getElementById("demo").innerHTML = xhttp.responseText;
                    }
                };
                xhttp.open("POST", "pots/", true);
                xhttp.send({
                    razor_id: response.razorpay_payment_id,

                });
                console.log(response);
            },
            "prefill": {
                "contact": document.getElementById('num').value + "",
                "name": document.getElementById('name').value + "",
                "email": document.getElementById('email').value + ""
            },
            "notes": {
                uuid: document.getElementById('uid').value + ""
            },
            "theme": {
                "color": "#F37254"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
        e.preventDefault();
    }, false);