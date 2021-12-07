$(function() {

    $(".services-nav").mouseover(function() {
        $(".drop-down-menu").attr("style", "display: block")
    })

    $(".drop-down-menu").mouseout(function() {
        $(".drop-down-menu").attr("style", "display: none")
    })

    $(".bar").click(function(){
        $(".header-container .navbar").animate({
            height: "toggle"
        })
    })

    $(".send-form").unbind('click').click(function(){
        let data = {
            name: $("#name").val(),
            address: $("#Address").val(),
            email: $("#email-address").val(),
            phone_number: $("#phone-number").val(),
            subject: $("#subject").val(),
            message: $("#message").val()
        }

        async function sendData(){
            let response = await util.http.post("https://wspoints.com/admin/new/workWithUs", data)
        }

        setTimeout(() => {
            alert("Message sent successfully");
            $(".form-container").trigger("reset");
        }, 1000);

        sendData()
    })

    $(".send-question-from-contacts").click(function(){
        let data = {
            name: $("#name").val(),
            address: $("#Address").val(),
            email: $("#email-address").val(),
            phone_number: $("#phone-number").val(),
            subject: $("#subject").val(),
            message: $("#message").val()
        }

        async function sendContactData(){
            let response = await util.http.post("https://wspoints.com/admin/new/workWithUs", data)
            console.log(response)
        }

        setTimeout(() => {
            alert("Message sent successfully");
            $(".form-container").trigger("reset")
        }, 1000);

        sendContactData()
    })

    $(".send-question").click(function(){
        let data = {
            name: $("#name").val(),
            email: $("#email").val(),
            subject: $("#subject").val(),
            message: $("#message").val()
        }

        async function sendQuestion(){
            let response = await util.http.post("https://wspoints.com/admin/new/question", data)
            console.log(response)
        }

        setTimeout(() => {
            alert("Message sent successfully");
            $(".form-container").trigger("reset")
        }, 1000);

        sendQuestion()
    })

    $(".send-registration-request").click(function() {
        let data = {
            name: $("#company-name").val(),
            toolName: $("#wsp-tool-name").val(),
            countryCode: $("#country-code").val(),
            countryName: $("#country-name").val(),
            stateName: $("#state-name").val(),
            cityName: $("#city-name").val(),
            zipCode: $("#zip-code").val(),
            latitude: $("#latitude").val(),
            longitude: $("#longitude").val(),
            companyEmail: $("#company-email").val()
        }

        async function requireRegistration(){
            let response = await util.http.post("https://wspoints.com/admin/new/requireRegistration", data)
            console.log(response)
        }

        setTimeout(() => {
            alert("Message sent successfully");
            $(".form-container").trigger("reset")
        }, 1000);

        requireRegistration()
    })
})