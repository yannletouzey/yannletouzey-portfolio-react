const dataCarousel = [
    {
        id: 1,
        imgUrl: new URL("../../assets/img/screenshot-website/easy-mailing/accueil.png", import.meta.url),
        alt: "Image de la page d'accueil de easy-mailing",
        title: "easy-mailing",
        link: "#",
        page: "/easy-mailing",
        techno: {
            react: new URL('../../assets/icons/react.svg', import.meta.url),
            node: new URL('../../assets/icons/node.svg', import.meta.url),
            express: new URL('../../assets/icons/express.svg', import.meta.url),
            postgres: new URL('../../assets/icons/postgres.svg', import.meta.url),
            sass: new URL('../../assets/icons/sass.svg', import.meta.url)
        },
        stack: "full-stack",
        inline: false,
        descSmall: "Mon projet de fin de formation est une web-app innovante conçue pour simplifier l'envoi de campagnes par email. Elle a été developpée en node, express et react. La base de données est sous PostgreSQL. C'est une application simple d'utilisation.",
        descFull: "Mon projet de fin de formation est une web-app innovante conçue pour simplifier l'envoi de campagnes par email. Cette application offre une plateforme conviviale permettant aux utilisateurs de créer, personnaliser et lancer des campagnes d'emailing de manière efficace. Avec des fonctionnalités de gestion de listes de contacts, des modèles de courriel prédéfinis, et des outils d'analyse des performances, cette web-app offre une solution complète pour les professionnels du marketing digital. Elle vise à faciliter le processus d'interaction avec les utilisateurs par le biais d'emails ciblés, tout en offrant une expérience utilisateur fluide et intuitive. Mon objectif était de créer une solution pratique et moderne qui répond aux besoins croissants du marketing digital et simplifie la gestion des campagnes par email pour les utilisateurs de tous niveaux.",
        seriousProject: true
    },
    {
        id: 2,
        imgUrl: new URL("../../assets/img/screenshot-website/1440x900.png", import.meta.url),
        alt: "Image de la page d'accueil de easy-time-clock",
        title: "easy-time-clock",
        link: "#",
        page: "/easy-time-clock",
        techno: {
            css: new URL('../../assets/icons/css.svg', import.meta.url),
            js: new URL('../../assets/icons/js.svg', import.meta.url),
            php: new URL('../../assets/icons/php.svg', import.meta.url),
            mysql: new URL('../../assets/icons/mysql.svg', import.meta.url)
        },
        stack: "back-end",
        inline: false,
        descSmall: "EasyTimeClock est une application web qui permet de gérer les heures d'entrée et de sortie dans une entreprise, une crèche, ou tout autre lieu nécessitant une gestion du temps. C'est une solution simple, conçue pour une utilisation aussi intuitive et complète que possible. Pour plus d'informations sur le choix des différents modules afin d'être le plus adapté à vos besoins, ou sur l'utilisation, n'hésitez pas à visiter le site.",
        seriousProject: true
    },
    {
        id: 3,
        imgUrl: new URL("../../assets/img/screenshot-website/selim-dm.png", import.meta.url),
        alt: "Image de la page d'accueil du portfolio de selim-dm",
        title: "selim-dm.portfolio",
        link: "https://portfolio-selim.vercel.app/",
        page: "/portfolio-selim",
        techno: {
            sass: new URL('../../assets/icons/sass.svg', import.meta.url),
            js: new URL('../../assets/icons/js.svg', import.meta.url)
        },
        stack: "front-end",
        inline: true,
        desc: "Portfolio de Selim DM. Un potographe de qualité.",
        seriousProject: true
    },
    {
        id: 4,
        imgUrl: new URL("../../assets/img/screenshot-website/bounce-cube.png", import.meta.url),
        alt: "Image de la page d'accueil de bounce-cube",
        title: "bounce-cube",
        link: "https://bounce-cube.vercel.app",
        page: "/bounce-cube",
        techno: {
            html: new URL('../../assets/icons/html.svg', import.meta.url),
            css: new URL('../../assets/icons/css.svg', import.meta.url)
        },
        stack: "front-end",
        inline: true,
        desc: "Petite animation d'un cube créé en CSS3 et HTML5, sans JavaScript. En utilisant les keyframes CSS3.",
        seriousProject: true
    },
    {
        id: 5,
        imgUrl: new URL("../../assets/img/screenshot-website/wave-cube.png", import.meta.url),
        alt: "Image de la page d'accueil de wave-cube",
        title: "cube-wave",
        link: "https://cube-wave.vercel.app",
        page: "/cube-wave",
        techno: {
            css: new URL('../../assets/icons/css.svg', import.meta.url),
            js: new URL('../../assets/icons/js.svg', import.meta.url)
        },
        stack: "front-end",
        inline: true,
        desc: "Petite animation de plusieurs cubes créé en CSS3 et HTML5 et JavaScript. En utilisant les keyframes CSS3.",
        seriousProject: true
    },
    {
        id: 6,
        imgUrl: new URL("../../assets/img/screenshot-website/haunted-house.png", import.meta.url),
        alt: "Image de la page d'accueil de haunted-house",
        title: "haunted-house",
        link: "https://haunted-house-blond-xi.vercel.app/",
        page: "/haunted-house",
        techno: {
            css: new URL('../../assets/icons/css.svg', import.meta.url),
            js: new URL('../../assets/icons/js.svg', import.meta.url),
            three: new URL("../../assets/icons/three.png", import.meta.url)
        },
        stack: "front-end",
        inline: true,
        desc: "Petite animation créé en 3d avec Three.js. Exercice fait en formation sur three.js \"threejs journey\" de Bruno Simon.",
        seriousProject: true
    },
    {
        id: 7,
        imgUrl: new URL("../../assets/img/screenshot-website/home-large.png", import.meta.url),
        alt: "Image de la page d'accueil de statistiques-covid",
        title: "statistiques-covid",
        link: "https://www.statistiques-covid.com",
        page: "/statistiques-covid",
        techno: {
            css: new URL('../../assets/icons/css.svg', import.meta.url),
            js: new URL('../../assets/icons/js.svg', import.meta.url),
            php: new URL('../../assets/icons/php.svg', import.meta.url),
            mysql: new URL('../../assets/icons/mysql.svg', import.meta.url)
        },
        stack: "back-end",
        inline: false,
        desc: "Pas encore de description",
        seriousProject: true
    },
    {
        id: 8,
        imgUrl: new URL("../../assets/img/screenshot-website/cube-in-cube.png", import.meta.url),
        alt: "Image de la page d'accueil de cube-in-cube",
        title: "cube-in-cube",
        link: "https://cube-in-cube.vercel.app",
        page: "/cube-in-cube",
        techno: {
            css: new URL('../../assets/icons/css.svg', import.meta.url),
            js: new URL('../../assets/icons/js.svg', import.meta.url)
        },
        stack: "front-end",
        inline: true,
        desc: "Pas encore de description",
        seriousProject: true
    },
    {
        id: 9,
        imgUrl: new URL("../../assets/img/screenshot-website/visuel-padding-margin.png", import.meta.url),
        alt: "Image de la page d'accueil de visual-padding-margin-css",
        title: "padding-margin-css",
        link: "https://visual-padding-margin-css.vercel.app/",
        page: "/padding-margin-css",
        techno: {
            css: new URL('../../assets/icons/css.svg', import.meta.url),
            js: new URL('../../assets/icons/js.svg', import.meta.url)
        },
        stack: "front-end",
        inline: true,
        desc: "Pas encore de description",
        seriousProject: true
    },
    {
        id: 10,
        imgUrl: new URL("../../assets/img/screenshot-website/build-cube-css.png", import.meta.url),
        alt: "Image de la page d'accueil de build-cube-css",
        title: "build-cube-css",
        link: "https://build-cube-css.vercel.app/",
        page: "/build-cube-css",
        techno: {
            css: new URL('../../assets/icons/css.svg', import.meta.url),
            js: new URL('../../assets/icons/js.svg', import.meta.url)
        },
        stack: "front-end",
        inline: true,
        desc: "Petite animation d'un cube créé en CSS3, HTML5 et JavaScript, en utilisant les keyframes CSS. Ce projet existe pour montrer la possibilité de créer un cube 3D avec des propriétés CSS.",
        seriousProject: true
    },
    {
        id: 11,
        imgUrl: new URL("../../assets/img/screenshot-website/cardiac-cohesion.png", import.meta.url),
        alt: "Image de la page d'accueil de cardiac-cohesion",
        title: "cardiac-cohesion",
        link: "https://cardiac-cohesion.vercel.app/",
        page: "/cardiac-cohesion",
        techno: {
            css: new URL('../../assets/icons/css.svg', import.meta.url),
            js: new URL('../../assets/icons/js.svg', import.meta.url)
        },
        stack: "front-end",
        inline: true,
        desc: "Petit side project réalisé pendant la formation Oclock pour mettre en pratique les notions de JavaScript que je venais d'apprendre.",
        seriousProject: true
    },
    {
        id: 12,
        imgUrl: new URL("../../assets/img/screenshot-website/trouve-ta-ville.png", import.meta.url),
        alt: "Image de la page d'accueil de trouve-ta-ville",
        title: "trouve-ta-ville",
        link: "https://trouve-ta-ville-blond.vercel.app/",
        page: "/trouve-ta-ville",
        techno: {
            css: new URL('../../assets/icons/css.svg', import.meta.url),
            js: new URL('../../assets/icons/js.svg', import.meta.url),
            react: new URL('../../assets/icons/react.svg', import.meta.url),
        },
        stack: "front-end",
        inline: true,
        desc: "Petit project réalisé pendant la formation Oclock pour mettre en pratique les notions de REACT du jour.",
        seriousProject: true
    }
]
export default dataCarousel;