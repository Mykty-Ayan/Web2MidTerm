$(function(){
    $name = $('#full-name');
    $nameerror = $('#nameerror');

    $email = $('#email');
    $emailerror = $('#emailerror');

    $pass = $('#password');
    $passerror = $('#passerror');

    $('#submit_button').click(function(){

    $error = 0;
    $nameerror.hide();
    $emailerror.hide();

    if(($nameval = $.trim($name.val())).length == 0)
    {
        $error = 1;
        $nameerror.show();
    }

    if(($emailval = $.trim($email.val())).length == 0)
    {
        $error = 1;
        $emailerror.show();
    }
    else if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test($emailval)))
    {
        $error = 1;
        $emailerror.show();
    }

    if(($passval = $.trim($pass.val())).length == 0)
    {
        $error = 1;
        $passerror.show();
    }

    if(!$error)
    {
        Cookies.set('name', $nameval);

        location.href = 'index.html';
    }
});
});