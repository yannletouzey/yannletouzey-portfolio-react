const dataDetailPage = [
  {
    name: 'circle-portfolio',
    data: [
      {
        img: new URL('../../assets/img/screenshot-website/circle-portfolio.jpeg', import.meta.url),
        desc: 'Page d\'acceuil du portfolio regroupant toutes les photos. Dans ce projet les photos proviennet du site https://picsum.photos'
      }
    ]
  },
  {
    name: 'easy-mailing',
    data: [
      {
        img: new URL('../../assets/img/easy-mailing/connection.png', import.meta.url),
        desc: "Page de connexion. Il suffit d'entrer votre email et mot de passe. Une fois connecté, vous allez etre redirigé vers la page d'accueil. Cette connexion est obligatoire pour pouvoir acceder à toutes les fonctionnalités."
      },
      {
        img: new URL('../../assets/img/easy-mailing/home.png', import.meta.url),
        desc: "Page d'accueil. Elle indique un calendrier de toutes les campagnes. En cliquand sur l'une d'elles, vous allez etre redirigé vers la page de detail de la campagne et donc toutes les fonctionnalité comme par exemple modifier un mailing ou ajouter des contacts seront accessibles depuis le détail si elle n'est pas encore envoyée."
      },
      {
        img: new URL('../../assets/img/easy-mailing/detail_campaign.png', import.meta.url),
        desc: "Page de detail d'une campagne"
      },
      {
        img: new URL('../../assets/img/easy-mailing/create_mailing.png', import.meta.url),
        desc: "Page de creation d'un mailing"
      },
      {
        img: new URL('../../assets/img/easy-mailing/create_campaign.png', import.meta.url),
        desc: "Page de creation d'une campagne"
      },
      {
        img: new URL('../../assets/img/easy-mailing/contact_handle.png', import.meta.url),
        desc: "Page permettant l'ajout de contact. Il suffit d'importer un simple fichier au format csv avec un minimum de 5 colonnes. La civilité, le nom le prénom, l'email et l'entreprise. Cette dernière n'est pas obligatoire mais tous les autres champs le sont."
      },
      {
        img: new URL('../../assets/img/easy-mailing/contact_handle_error.png', import.meta.url),
        desc: "Page permettant l'ajout de contact avec une erreur dans l'importation de celle-ci. Cette erreur est aussi bien gerer dans le front-end que le back-end."
      },
      {
        img: new URL('../../assets/img/easy-mailing/campaign_list.png', import.meta.url),
        desc: "Page affichant la liste des campagnes"
      }
    ]
  },
  {
    name: 'easy-time-clock',
    data: [
      {
        img: new URL('../../assets/img/easy-time-clock/home.jpeg', import.meta.url),
        desc: "Page d'acceuil. Pous pouvoir acceder au reste du site il faut etre connecté. Une fois connecté, vous allez etre redirigé vers la page d'accueil."
      },
      {
        img: new URL('../../assets/img/easy-time-clock/home-connected.jpeg', import.meta.url),
        desc: "Page d'accueil connecté. Cette page est obtenu une fois connecté. Le menu est adapté en fonction du statut."
      },
      {
        img: new URL('../../assets/img/easy-time-clock/admin-list.jpeg', import.meta.url),
        desc: "Dans cette page se trouve tous les administrateurs du site avec toutes les informations concernant les administrateurs comme email, role, etc. Elle ne sera accessible seulement par un super administrateur."
      },
      {
        img: new URL('../../assets/img/easy-time-clock/family-list.jpeg', import.meta.url),
        desc: "Dans cette page se trouve la liste de toutes les familles du site avec toutes les informations les concernant comme email, nom, etc."
      },
      {
        img: new URL('../../assets/img/easy-time-clock/new-admin.jpeg', import.meta.url),
        desc: "Cette page permet d'ajouter un nouvel administrateur. Elle ne sera accessible seulement par un super administrateur."
      }
    ]
  }
]
export default dataDetailPage;