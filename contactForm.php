<?php

    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    //Datos de a quien se le envía y que se le envía
    $mailTo = "mattiassalicru@gmail.com";
    $headers = "From: ".$email;
    $txt = "You have received an email from ".$email. ".\n\n" . "El mensaje es el siguiente: \n".$mensaje;

    //Enviar el mensaje
    mail($mailTo, $headers, $txt);
    header("Location: index.html");


?>