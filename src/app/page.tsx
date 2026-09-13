import CircuitBackground from "./CircuitBackground";
import AvatarRing from "./AvatarRing";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-brand">
            <span className="nav-mark">AV</span>
            <span className="nav-name">
              ANDRÉS
              <b>VERBEL PACHECO</b>
            </span>
          </div>
          <div className="nav-links">
            <a href="#historia">HISTORIA</a>
            <a href="#formacion">FORMACIÓN</a>
            <a href="#intereses">INTERESES</a>
            <a href="#actualidad">ACTUALIDAD</a>
            <a href="#futuro">FUTURO</a>
            <a href="#contacto">CONTACTO</a>
          </div>
        </div>
      </nav>

      {/* QUIÉN SOY */}
      <header
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(6, 10, 19, 0.85) 0%, rgba(6, 10, 19, 0.3) 50%, rgba(6, 10, 19, 1) 100%), url(${basePath}/hero-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <CircuitBackground />
        <div className="wrap hero-grid">
          <AvatarRing />
          <div>
            <p className="hero-kicker">
              ESTUDIANTE DE INGENIERÍA · DESARROLLADOR FULL STACK
            </p>
            <h1 className="hero-name">
              Holá, soy
              <br />
              Andrés
            </h1>
            <p className="hero-role">
              Nací en Barranquilla, Colombia. Estudio Ingeniería de Sistemas
              en la CUC y trabajo como desarrollador full stack, combinando
              código, inteligencia artificial y automatización para construir
              cosas que funcionan de verdad.
            </p>
            <div className="hero-cta">
              <a className="btn btn-solid" href="#actualidad">
                VER PROYECTOS
              </a>
              <a className="btn btn-ghost" href="#contacto">
                CONTÁCTAME
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* MI HISTORIA */}
      <section className="section" id="historia">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <p className="eyebrow">Mi historia</p>
            <h2 className="section-title">De dónde vengo</h2>
            <p className="section-lede">
              Nací y crecí en Barranquilla, una ciudad que me enseñó a moverme
              rápido, adaptarme y disfrutar el camino tanto como la meta.
            </p>
          </div>

          <ul className="timeline">
            <li className="timeline-item" data-reveal style={{ transitionDelay: "0.00s" }}>
              <span className="timeline-tag">Infancia</span>
              <p className="timeline-body">
                Crecí en Barranquilla en un entorno que despertó desde
                temprano mi curiosidad por entender cómo funcionan las cosas,
                una inquietud que después definiría mi camino hacia la
                tecnología.
              </p>
            </li>
            <li className="timeline-item" data-reveal style={{ transitionDelay: "0.12s" }}>
              <span className="timeline-tag">Familia</span>
              <p className="timeline-body">
                Mi familia ha sido mi apoyo constante en cada etapa: en las
                decisiones de estudio, en los proyectos que emprendo y en las
                metas que me sigo trazando.
              </p>
            </li>
            <li className="timeline-item" data-reveal style={{ transitionDelay: "0.24s" }}>
              <span className="timeline-tag">Momentos importantes</span>
              <p className="timeline-body">
                Iniciar Ingeniería de Sistemas en la CUC y dar mis primeros
                pasos profesionales como desarrollador —incluyendo mi paso por
                Globant— marcaron el inicio real de mi carrera en tecnología.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* MI FORMACIÓN */}
      <section className="section section-alt" id="formacion">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <p className="eyebrow">Mi formación</p>
            <h2 className="section-title">Lo que he estudiado y aprendido</h2>
          </div>

          <div className="formacion-grid">
            <div className="formacion-col" data-reveal>
              <h3>Estudios</h3>
              <ul className="formacion-list">
                <li>Ingeniería de Sistemas — Universidad de la Costa (CUC)</li>
                <li>Séptimo semestre, en curso</li>
                <li>Experiencia profesional previa en Globant</li>
              </ul>
            </div>
            <div className="formacion-col" data-reveal style={{ transitionDelay: "0.1s" }}>
              <h3>Cursos y materias</h3>
              <ul className="formacion-list">
                <li>Lenguajes y Autómatas (AFD, expresiones regulares)</li>
                <li>Arquitectura Cloud (AWS, Azure, GCP)</li>
                <li>Power BI y modelado de datos (DAX)</li>
                <li>Inglés técnico — nivel B1</li>
              </ul>
            </div>
          </div>

          <div className="section-head" data-reveal style={{ marginTop: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--cyan)" }}>
              Aprendizajes clave
            </h3>
          </div>
          <div className="badge-grid">
            <div className="badge" data-reveal style={{ ["--badge-color" as string]: "#e34c26" }}>
              <span className="badge-mark">JS</span>
              <span className="badge-name">React</span>
            </div>
            <div className="badge" data-reveal style={{ transitionDelay: "0.05s", ["--badge-color" as string]: "#68a063" }}>
              <span className="badge-mark">N</span>
              <span className="badge-name">Node.js</span>
            </div>
            <div className="badge" data-reveal style={{ transitionDelay: "0.1s", ["--badge-color" as string]: "#e0234e" }}>
              <span className="badge-mark">Ne</span>
              <span className="badge-name">NestJS</span>
            </div>
            <div className="badge" data-reveal style={{ transitionDelay: "0.15s", ["--badge-color" as string]: "#f2a93b" }}>
              <span className="badge-mark">Jv</span>
              <span className="badge-name">Java</span>
            </div>
            <div className="badge" data-reveal style={{ transitionDelay: "0.2s", ["--badge-color" as string]: "#6db33f" }}>
              <span className="badge-mark">Sb</span>
              <span className="badge-name">Spring Boot</span>
            </div>
            <div className="badge" data-reveal style={{ transitionDelay: "0.25s", ["--badge-color" as string]: "#8b7bf0" }}>
              <span className="badge-mark">n8</span>
              <span className="badge-name">n8n</span>
            </div>
            <div className="badge" data-reveal style={{ transitionDelay: "0.3s", ["--badge-color" as string]: "#37e2ea" }}>
              <span className="badge-mark">Pw</span>
              <span className="badge-name">Playwright</span>
            </div>
            <div className="badge" data-reveal style={{ transitionDelay: "0.35s", ["--badge-color" as string]: "#a370f0" }}>
              <span className="badge-mark">AI</span>
              <span className="badge-name">OpenAI · Gemini</span>
            </div>
          </div>
        </div>
      </section>

      {/* MIS INTERESES */}
      <section className="section" id="intereses">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <p className="eyebrow">Mis intereses</p>
            <h2 className="section-title">Lo que me mueve fuera del código</h2>
          </div>

          <div className="intereses-list">
            <div className="interes-row" data-reveal>
              <span className="interes-name">Negocios</span>
              <p className="interes-desc">
                Me atrae entender cómo se construye y hace crecer un negocio.
                Es una de las razones por las que combino desarrollo de
                software con automatización de procesos empresariales.
              </p>
            </div>
            <div className="interes-row" data-reveal style={{ transitionDelay: "0.1s" }}>
              <span className="interes-name">Motos</span>
              <p className="interes-desc">
                Las motos son una de mis pasiones: la sensación de velocidad y
                libertad que ofrecen es algo que disfruto genuinamente.
              </p>
            </div>
            <div className="interes-row" data-reveal style={{ transitionDelay: "0.2s" }}>
              <span className="interes-name">Fútbol</span>
              <p className="interes-desc">
                Ver y jugar fútbol es parte de mi rutina; es mi forma favorita
                de desconectar y competir al mismo tiempo.
              </p>
            </div>
            <div className="interes-row" data-reveal style={{ transitionDelay: "0.3s" }}>
              <span className="interes-name">Tecnología</span>
              <p className="interes-desc">
                Full stack development, inteligencia artificial y
                automatización son el terreno donde convierto ideas en
                productos funcionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MI VIDA ACTUAL */}
      <section className="section section-alt" id="actualidad">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <p className="eyebrow">Mi vida actual</p>
            <h2 className="section-title">Proyectos destacados</h2>
            <p className="section-lede">
              Actualmente combino mis estudios de Ingeniería de Sistemas con
              proyectos de desarrollo full stack y automatización de procesos
              con inteligencia artificial.
            </p>
          </div>

          <div className="proyectos">
            <div className="proyecto" data-reveal>
              <div className="proyecto-mock" />
              <div className="proyecto-body">
                <span className="proyecto-tag">PROYECTO EN CURSO</span>
                <h3>Automatización de tiquetes — Avianca</h3>
                <p>
                  Sistema que automatiza la compra de tiquetes aéreos
                  corporativos con n8n y Playwright, integrando búsqueda de
                  vuelos, scoring de opciones con IA y un flujo de aprobación
                  antes del pago.
                </p>
              </div>
            </div>
            <div className="proyecto" data-reveal style={{ transitionDelay: "0.1s" }}>
              <div className="proyecto-mock" />
              <div className="proyecto-body">
                <span className="proyecto-tag">PROYECTO EN CURSO</span>
                <h3>Automatizaciones — Qna Medical</h3>
                <p>
                  Desarrollo de automatizaciones de procesos para el sector
                  salud, orientadas a reducir tareas manuales y mejorar la
                  eficiencia operativa.
                </p>
              </div>
            </div>
          </div>

          <div className="vida-meta">
            <div className="chip-row">
              <span className="chip">Full Stack Developer</span>
              <span className="chip">React · Node.js · NestJS</span>
              <span className="chip">Java · Spring Boot</span>
              <span className="chip">Abierto a remoto e internacional</span>
            </div>
          </div>
        </div>
      </section>

      {/* MI FUTURO */}
      <section className="section" id="futuro">
        <div className="wrap">
          <p className="eyebrow" data-reveal>Mi futuro</p>
          <p className="futuro-quote" data-reveal>
            Quiero seguir progresando hasta construir{" "}
            <span>mi propio negocio</span>.
          </p>

          <div className="futuro-goals">
            <div className="futuro-goal" data-reveal>
              <h3>Objetivo personal</h3>
              <p>
                Tener mi propio negocio, construido sobre lo que aprendo cada
                día en tecnología y automatización.
              </p>
            </div>
            <div className="futuro-goal" data-reveal style={{ transitionDelay: "0.1s" }}>
              <h3>Objetivo profesional</h3>
              <p>
                Seguir creciendo como desarrollador full stack, con
                oportunidades remotas e internacionales que me permitan
                seguir aprendiendo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="section section-alt contacto" id="contacto">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <p className="eyebrow">Contacto</p>
            <h2 className="section-title">Hablemos</h2>
            <p className="section-lede">
              Abierto a oportunidades remotas e internacionales, colaboraciones
              y nuevos proyectos.
            </p>
          </div>
          <div className="contacto-links" data-reveal>
            <a className="contacto-link" href="mailto:tu-correo@ejemplo.com" aria-label="Correo">
              @
            </a>
            <a className="contacto-link" href="#" aria-label="LinkedIn">
              in
            </a>
            <a className="contacto-link" href="#" aria-label="GitHub">
              gh
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer" style={{ borderTop: "none", padding: 0 }}>
          <span>Andrés Felipe Verbel Pacheco</span>
          <span>Barranquilla, Colombia</span>
        </div>
      </footer>
    </>
  );
}
