class Chapter {
  constructor(left, right, story) {
    this.left = left;
    this.right = right;
    this.story = story;
  }

  addChapterLeft(chapter) {
    this.left.chapter = chapter;
  }

  addChapterRight(chapter) {
    this.right.chapter = chapter;
  }

  addStory(story) {
    this.story = story;
  }

}

class DontClickArtea {

  items = {
    mapple_sirup: {
      title: "sirop d'érable",
      fa_icon: "fas fa-canadian-maple-leaf",
    },
    warp_drive: {
      title: "Warp Drive",
      fa_icon: "fas fa-cannabis",
    },
    shat: {
      title: "shat",
      fa_icon: "fas fa-cat",
    },
    queen: {
      title: "Reine",
      fa_icon: "fas fa-chess-queen",
    },
    jukebox: {
      title: "jukebox",
      fa_icon: "fas fa-compact-disc",
    },
    discussion: {
      title: "discussion",
      fa_icon: "fas fa-comments",
    },
    battery: {
      title: "Batterie",
      fa_icon: "fas fa-battery-full",
    },
  };

  constructor(box) {
    this.box = box;
  }

  initGame() {
    this.game = this.box;
    this.game.score = 0;

    var buttons = this.game.getElementsByClassName('button-artea');
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      if (button.dataset['buttonartea'] == "1") {
        this.game.left = buttons[i];
      }
      else if (button.dataset['buttonartea'] == "2") {
        this.game.right = buttons[i];
      }
    }

    this.game.book = this.game.getElementsByClassName('book-artea')[0];

    this.initStory();
    this.timeTravel('init')
  }

  timeTravel(storyname) {
    var story = this.game.story[storyname];

    this.game.left.innerHTML = story.left;
    this.game.right.innerHTML = story.right;

    if (story.end_left == null) {
      if (story.next_left) {
        this.game.left.href = "javascript:arteaGame.timeTravel('" + story.next_left + "');";
      }
    }
    else {
      this.game.left.href = story.end_left;
    }

    if (story.end_right == null) {
      if (story.next_right) {
        this.game.right.href = "javascript:arteaGame.timeTravel('" + story.next_right + "');";
      }
    }
    else {
      this.game.right.href = story.end_right;
    }

    if (story.disabled_left) {
      this.game.left.href = "javascript:void(0);";
    }
    if (story.disabled_right) {
      this.game.right.href = "javascript:void(0);";
    }

    if (story.clean_book) {
      setTimeout(this.clearBook, story.clean_book, this.game.book);
    }

  }

  initStory() {
    this.game.story = {
      init: {
        left: "ne clique pas là",
        right: "tu peux cliquer",
        next_left: "noone",
        next_right: "clickone",
        clean_book: 77777,
      },
      noone: {
        left: "fallait pas cliquer là",
        right: "tu peux plus cliquer",
        //end_left: "this.badEnd()",
        end_left: "#QUOTE",
        disabled_right: true,
        clean_book: 7777,
      },
      clickone: {
        left: "tu peux cliquer mntnt",
        right: "tu peux plus cliquer",
        next_left: "clicktwo",
        next_right: "firsterror",
        clean_book: 7777,
      },
      clicktwo: {
        left: "Tu es humain !",
        right: "Clique ici mntnt",
        //end_left: "this.robotEnd()",
        //end_right: "this.backToEnd()",
        end_left: "javascript:arteaGame.youAreHuman();",
        end_right: "javascript:arteaGame.backToEnd();",
      },
      firsterror: {
        left: "Clique là",
        right: "Pas là",
        next_left: "congratulations",
        end_right: "javascript:arteaGame.tantPis();",
      },
      congratulations: {
        left: "Tu es humain !",
        right: "Clique ici mntnt",
        end_left: "javascript:arteaGame.youAreHuman();",
        end_right: "javascript:arteaGame.backToEnd();",
      },
    };
  }

  tantPis() {
    this.game.book.innerHTML = "Tant pis...";
    this.timeTravel('init');
  }

  backToEnd() {
    this.game.book.innerHTML = "Bien Joué !";
    this.timeTravel('init');
  }

  youAreHuman() {
    var humanParagraph = document.createElement('p')
    humanParagraph.innerHTML = "Bravo, tu as su prouver ta valeur au DonTClickArtea !";
    humanParagraph.classList.add('text-center');
    humanParagraph.classList.add('p-3');
    this.game.book.appendChild(humanParagraph)

    var githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/GoswaTech/';
    githubLink.innerHTML = "Visite mon Git ;)";
    githubLink.classList.add("btn");
    githubLink.classList.add("btn-primary");
    this.game.book.appendChild(githubLink);

    this.timeTravel('init');
  }

  clearBook(book) {
    book.innerHTML = "";
  }

}

var arteaGame = new DontClickArtea(document.getElementById('artea_game_dontclick'));
arteaGame.initGame();
