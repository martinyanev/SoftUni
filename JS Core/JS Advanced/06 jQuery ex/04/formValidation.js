function validate() {
    let usernamePattern = /^([a-zA-Z0-9]{3,20})$/;
    let passPattern = /^([a-zA-Z0-9_]{5,15})$/;
    let mailPattern = /^((?:.*?)@(?:.*?)\.(?:.*?))$/;

    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPass = $('#confirm-password');
    let company = $('#company');
    let companyInfo = $('#companyInfo');
    let companyNumber = $('#companyNumber');

    company.on('click',function () {
        if ($('#company').is(":checked"))
        {
            companyInfo.css('display', 'table');
        } else {
            companyInfo.css('display', 'ao');
        }
    });

    // if (usernamePattern.test() && passPattern.test() && mailPattern.test()){
    // }

    // console.log(usernamePattern.test('as'));
    console.log('asa');

    let submitBtn = $('#submit');

    submitBtn.on('click', function (btn) {
        btn.preventDefault();

        let isOk = true;
        if (!usernamePattern.test(username.val())){
            username.css('border-color', 'red');
            isOk = false;
        } else{
            username.css('border', 'none');
        }

        if (!mailPattern.test(email.val())){
            email.css('border-color', 'red');
            isOk = false;
        } else{
            email.css('border', 'none');
        }

        if (!passPattern.test(password.val())){
            password.css('border-color', 'red');
            isOk = false;
        } else{
            password.css('border', 'none');
        }

        if (!passPattern.test(confirmPass.val())){
            confirmPass.css('border-color', 'red');
            isOk = false;
        } else{
            confirmPass.css('border', 'none');
        }

        if (password.val() !== confirmPass.val()){
            password.css('border-color', 'red');
            confirmPass.css('border-color', 'red');
            isOk = false;
        } else {
            // confirmPass.css('border', 'none');
            // password.css('border', 'none');
        }

        if ($('#company').is(":checked")){
            let num = Number(companyNumber.val());
            if (num < 1000 || num > 9999){
                companyNumber.css('border-color', 'red');
                isOk = false;
            } else {
                companyNumber.css('border', 'none');
            }
        }
        let valid = $('#valid');
        if (isOk){
            valid.css('display', 'block');
        } else {
            valid.css('display', 'none');
        }
    })
}
