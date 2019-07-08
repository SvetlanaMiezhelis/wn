import 'expose-loader?$!expose-loader?jQuery!jquery';
import moment from 'moment';

$(function () {
    $('.age').change(function () {
        $('.sign__button').prop('disabled',!isAgeValid());
    });

    $('.sign__button').click(function () {

            $('.page-wrapper').removeClass('page-wrapper--blured');
            $('.page-overlay').hide();
            $('.modal-block').hide();
    });

    $('.order__add-link').click(function (e) {
        e.preventDefault();
        $('.order__add').hide();
            $('.order__other-guest').fadeIn();
        $('.confirmation-block').addClass('confirmation-block--modified');
    })
})

function isAgeValid() {
    var birthDate = moment($('#year').val() + '-' + $('#month').val() + '-' + $('#day').val());
    return  moment().diff(birthDate,'years') >= 18;
}