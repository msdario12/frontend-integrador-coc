// Header

const headerComponent = `
		<nav class="navbar fixed-top navbar-expand-md bg-dark navbar-dark">
			<div class="container-lg">
				<a class="navbar-brand" href="index.html">
					<img src="assets/images/codoacodo.png" alt="Logo de codo a codo" style="width: 5rem" />
					<span>Conf Bs As</span>
				</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">La conferencia</a>
						</li>

						<li class="nav-item">
							<a class="nav-link" aria-current="page" href="#">El lugar y la fecha</a>
						</li>

						<li class="nav-item">
							<a class="nav-link" aria-current="page" href="#">Conviértete en orador</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="oradores.html">Los oradores</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-success" href="#">Comprar tickets</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
`;

// Footer component
const footerComponent = `
		<ul
			class="d-flex justify-content-center justify-content-md-between gap-2 container-lg footer-list h-100 align-items-center text-wrap text-center flex-column flex-md-row">
			<li><a href="#">Preguntas frecuentes</a></li>
			<li><a href="#">Contáctanos</a></li>
			<li><a href="#">Preguntas</a></li>
			<li><a href="#">Conferencias</a></li>
			<li><a href="#">Términos y condiciones</a></li>
			<li><a href="#">Privacidad</a></li>
			<li><a href="#">Estudiantes</a></li>
		</ul>
`;

const footerClasses = `text-light footer-container px-lg-4 py-4`;

const oradorFormHTML = `
				<form action="" id="oradorForm" class="mx-2 mx-md-3 mx-lg-5">
					<div class="d-flex gap-5 mb-3">
						<input type="text" name="firstName" id="firstName" class="form-control" placeholder="Nombre" />

						<input type="text" name="lastName" id="lastName" class="form-control" placeholder="Apellido" />
					</div>
					<div class="mb-3">
						<input type="text" name="mail" id="mail" class="form-control" placeholder="Email" />
					</div>
					<div class="form-floating mb-1">
						<textarea class="form-control form-control-lg" placeholder="Sobre qué quieres hablar?" name="theme"
							id="theme" cols="30" rows="4" style="height: 100px"></textarea>
						<label for="theme"> Sobre qúe quieres hablar? </label>
					</div>
					<div class="form-text text-start mb-3">
						Recuerda incluir un título para tu charlar
					</div>
					<!-- Resultado -->
					<div id="resultOradorContainer" class="alert alert-primary" role="alert">
						Asegurese de llenar todos los campos
					</div>
					<button type="submit" class="btn btn-success w-100 fs-5 mb-5">
						Enviar
					</button>
				</form>
`;

//Aplico en el DOM
document.getElementById("headerContainer").innerHTML = headerComponent;
document.getElementById("footerContainer").classList = footerClasses;
document.getElementById("footerContainer").innerHTML = footerComponent;
document.getElementById("oradorFormContainer").innerHTML = oradorFormHTML;
