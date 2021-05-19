// Vous êtes chez {{ shape.user.username }}

var bootstrap_head = document.createElement('link');

// HTML Shape
//<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

bootstrap_head.href = "https://cdn.jsdelivr.net/npm/bootstrap@{{ shape.token_or_version }}/dist/css/bootstrap.min.css";
bootstrap_head.rel = "stylesheet"
bootstrap_head.integrity = "{{ shape.integrity.0|safe }}";
bootstrap_head.crossorigin="anonymous";


// HTML Shape
//<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous">

var bootstrap_body = document.createElement('script');
bootstrap_body.src = "https://cdn.jsdelivr.net/npm/bootstrap@{{ shape.token_or_version }}/dist/js/bootstrap.bundle.min.js";
bootstrap_body.integrity = "{{ shape.integrity.1|safe }}";
bootstrap_body.crossorigin = "anonymous";

document.head.appendChild(bootstrap_head);
document.body.appendChild(bootstrap_body);
