function addBadge(menu) {
  var badge = document.createElement('img');
  badge.src = document.body.dataset['badge'];
  badge.alt = 'Badge';
  menu.appendChild(badge);
}

function create_singularity_universe_menu(menu) {
  if (menu == null) {
    var menu = document.createElement("nav");
    menu.id = "singularity_universe_menu";
    menu.classList.add('menu_space_digital');
  }

  addBadge(menu);

  var body = document.getElementById('singularity_body');
  body.appendChild(menu);

}
