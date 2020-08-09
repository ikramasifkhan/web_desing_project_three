
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function () {
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

// filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match( /ium$/ );
        }
    };

// bind filter button click
    $('#filters').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
    });

// change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });

    $('.filter_button').click(function (){
        $(this).css({
            "background": "#ffffff",
            "color": "#6d6e71",
            "border":"none",
            'outline':'0px'
        });
    });

    // =====================smoth scroll starts here==================
    $(document).SmoothScroll({
        target  : 'a[href^="#"]',
        duration: 3000
    });
    $('.my_button').click(function () {
        $(this).css({
            border: null,
            outline: null
        })
    });
    // =====================smoth scroll ends here==================

    // scroll to top starts here
    $('body').materialScrollTop();
});