

// Ajout d'un toggle pour le numero de telephonne
$(document).ready(function(){
    $('#flip').click(function() {
        $('#panel').slideToggle('slow');
    });
})

// Ajout d'une fleche retour vers le haut dans le index
$(function() {
    $('#divDuHaut').hide();

    $(window).scroll(function() {

        if($(this).scrollTop() > 300) {
            $('#divDuHaut').fadeIn(500);

            $('#sc1').on('mouseover', function() {
                $('#sc1').attr('src', 'img/sc2.png');
            });
            $('#sc1').on('mouseout', function() {
                $('#sc1').attr('src', 'img/sc1.png');
            });
        }
        else{
            $('#divDuHaut').fadeOut(500);     
        }
    });
});

// Ajout d'une fleche retour vers le haut dans les autres pages
$(function() {
    $('#divDuTop').hide();

    $(window).scroll(function() {

        if($(this).scrollTop() > 300) {
            $('#divDuTop').fadeIn(500);

            $('#sc').on('mouseover', function() {
                $('#sc').attr('src', '../img/sc2.png');
            });
            $('#sc').on('mouseout', function() {
                $('#sc').attr('src', '../img/sc1.png');
            });
        }
        else{
            $('#divDuTop').fadeOut(500);     
        }
    });
});
