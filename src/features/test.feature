Feature: Inicio Sesión en Octoperf

    Como usuario quiero poder iniciar sesión en Octoperf para usar sus servicios

    Scenario Outline: Inicio sesión <caso>
        Given el endpoint de iniciar sesion es <endpoint>
        When ingreso el usuario <usuario> y contraseña <contraseña>
        Then valido el inicio de sesión <caso>

        Examples:
            | endpoint                                    | caso       | usuario               | contraseña |
            | https://api.octoperf.com/public/users/login | correcto   | martinquimo@gmail.com | Peru2020.  |
            | https://api.octoperf.com/public/users/login | incorrecto | martinquimo@gmail.com | Peru2021.  |