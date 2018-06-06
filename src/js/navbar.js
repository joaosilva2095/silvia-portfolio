/**
 * Slide collapse navigation bar
 */
function slideCollapse() {
    $navMenuCont = $($(this).data('target'));
    $navMenuCont.animate({'width': 'toggle'}, 350);
}
