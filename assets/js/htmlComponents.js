// Header

const headerComponent = `
		<nav class="navbar fixed-top navbar-expand-md bg-dark navbar-dark">
			<div class="container-lg">
				<a class="navbar-brand" href="#">
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

//Aplico en el DOM
document.getElementById("headerContainer").innerHTML = headerComponent;
document.getElementById("footerContainer").classList = footerClasses;
document.getElementById("footerContainer").innerHTML = footerComponent;
