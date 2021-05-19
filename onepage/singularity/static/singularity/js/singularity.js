class Singularity {

  constructor(body_id) {
    this.body = document.getElementById(body_id);
    this.menu = null;
  }

  createMenu(id, classes) {
    this.menu = document.createElement("nav");
    this.menu.id = id;
    for (var i = 0; i < classes.length; i++) {

      this.menu.classList.add(classes[i]);
    }
  }

  createSingularityUniverseMenu(universes, galaxies, solaris, terrae) {
    if (this.menu == null) {
      this.createMenu("singularity_universe_menu", ['menu-space-digital']);
    }

    if (this.badge == null) {
      this.addBadgeTo(this.menu);
    }

    if (this.contentBox == null) {
      this.addContentBoxTo(this.menu);
    }

    this.createUniverses(universes);
    this.createGalaxies(galaxies);
    this.createSolaris(solaris);
    this.createTerrae(terrae);

    this.body.appendChild(this.menu);

  }

  addBadgeTo(element) {
    this.badge = document.createElement('img');
    this.badge.classList.add('menu-badge');
    this.badge.src = this.body.dataset['badge'];
    this.badge.alt = 'Badge';
    element.appendChild(this.badge);
  }

  addContentBoxTo(element) {
    this.contentBox = document.createElement('div');
    this.contentBox.classList.add('menu-content');
    element.appendChild(this.contentBox);
  }

  addLinkTo(element, data) {
    var link = document.createElement('a');
    link.href = data.url;
    link.innerHTML = data.label;
    for (var i = 0; i < data.classes.length; i++) {
      link.classList.add(data.classes[i]);
    }
    element.appendChild(link);
  }

  createUniverses(universes) {
    // Création des Univers
    var universNav = document.createElement('div');
    universNav.classList.add('univers-nav');

    var universesTitle = document.createElement('h2');
    universesTitle.innerHTML = "Univers Localisé";
    universNav.appendChild(universesTitle);

    var linkListUniverses = document.createElement('div');
    linkListUniverses.classList.add('link-list');
    universNav.appendChild(linkListUniverses);

    this.contentBox.appendChild(universNav);

    for (var i = 0; i < universes.length; i++) {
      if (universes[i].current) {
        this.current_univers = universes[i];
        universes[i].classes.push('ms-2');
        universes[i].classes.push('current');
      }
      if (universes[i].disabled) {
        universes[i].classes.push('disabled');
      }
      singularity.addLinkTo(linkListUniverses, universes[i]);
    }
  }

  createGalaxies(galaxies) {
    // Création des Galaxies
    var galaxyNav = document.createElement('div');
    galaxyNav.classList.add('galaxy-nav');

    var galaxiesTitle = document.createElement('h2');
    galaxiesTitle.innerHTML = "Galaxie Unique";
    galaxyNav.appendChild(galaxiesTitle);

    var linkListGalaxies = document.createElement('div');
    linkListGalaxies.classList.add('link-list');
    galaxyNav.appendChild(linkListGalaxies);

    this.contentBox.appendChild(galaxyNav);

    for (var i = 0; i < galaxies.length; i++) {
      if (galaxies[i].current) {
        this.current_galaxy = galaxies[i];
        galaxies[i].classes.push('ms-2');
        galaxies[i].classes.push('current');
        //galaxies[i].classes.push('disabled');
        //singularity.addLinkTo(linkListGalaxies, galaxies[i]);
      }
      if (galaxies[i].disabled) {
        galaxies[i].classes.push('disabled');
      }
      singularity.addLinkTo(linkListGalaxies, galaxies[i]);
    }
  }

  createSolaris(solaris) {
    // Création des Solaris
    var solarisNav = document.createElement('div');
    solarisNav.classList.add('solaris-nav');

    var solarisTitle = document.createElement('h2');
    solarisTitle.innerHTML = "Explorez un Système Solaris";
    solarisNav.appendChild(solarisTitle);

    var linkListSolaris = document.createElement('div');
    linkListSolaris.classList.add('link-list');
    solarisNav.appendChild(linkListSolaris);

    this.contentBox.appendChild(solarisNav);

    for (var i = 0; i < solaris.length; i++) {
      if (solaris[i].current) {
        this.current_solaris = solaris[i];
        solaris[i].classes.push('ms-2');
        solaris[i].classes.push('current');
      }
      if (solaris[i].disabled) {
        solaris[i].classes.push('disabled');
      }
      singularity.addLinkTo(linkListSolaris, solaris[i]);
    }
  }

  createTerrae(terrae) {
    // Création des Terrae
    var terraNav = document.createElement('div');
    terraNav.classList.add('terra-nav');

    var terraeTitle = document.createElement('h2');
    terraeTitle.innerHTML = "Aucune Planète...";
    terraNav.appendChild(terraeTitle);

    this.contentBox.appendChild(terraNav);
  }

}

var singularity = null;

function initSingularity() {
  singularity = new Singularity('singularity_body');

  var universes = [
    {
      url: "https://arthurneyer.xyz/",
      label: "Arthur Neyer",
      description: '',
      classes: ['btn', 'text-capitalize', 'btn-primary', 'btn-space'],
      current: true,
    },
    {
      url: "https://wavetwoo.adenblack.fr/",
      label: "Wave Twoo",
      description: '',
      classes: ['btn', 'text-capitalize', 'btn-primary', 'btn-space'],
    },
  ];

  var galaxies = [
    {
      url: "/identy-tea/",
      label: "IdentyTea",
      description: '',
      classes: ['btn', 'text-capitalize', 'btn-primary', 'btn-space'],
      current: true,
    },
    {
      url: "/green-tea/",
      label: "GreenTea",
      description: '',
      classes: ['btn', 'text-capitalize', 'btn-primary', 'btn-space'],
      disabled: true,
    },
  ];

  var solaris = [
    {
      url: "#WORLDS",
      label: "Mes Mondes",
      description: '',
      classes: ['btn', 'text-capitalize', 'btn-primary', 'btn-space'],
    },
    {
      url: "#ABOUT",
      label: "Qui Suis-Je ?",
      description: '',
      classes: ['btn', 'text-capitalize', 'btn-primary', 'btn-space'],
    },
    {
      url: "#QUOTE",
      label: "Citations",
      description: '',
      classes: ['btn', 'text-capitalize', 'btn-primary', 'btn-space'],
    },
    {
      url: "#STATS",
      label: "Mes Stats",
      description: '',
      classes: ['btn', 'text-capitalize', 'btn-primary', 'btn-space'],
    },
    {
      url: "#PORTFOLIO",
      label: "Mes Oeuvres d'Art",
      description: '',
      classes: ['btn', 'text-capitalize', 'btn-primary', 'btn-space'],
    },
    {
      url: "#CALL_TO_ACTION",
      label: "La Matrice",
      description: '',
      classes: ['btn', 'text-capitalize', 'btn-primary', 'btn-space'],
    },
    {
      url: "#CONTACT",
      label: "Contact",
      description: '',
      classes: ['btn', 'text-capitalize', 'btn-primary', 'btn-space'],
    },
  ];

  var terras = [
    {
      null: null,
      null: null,
      null: null,
    },
    {
      null: null,
      null: null,
      null: null,
    },
    {
      null: null,
      null: null,
      null: null,
    },
  ];

  singularity.createSingularityUniverseMenu(universes, galaxies, solaris);

}
