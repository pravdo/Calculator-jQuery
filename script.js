function insrt(num){
    $('.calc-display').val($('.calc-display').val()+num); // displays the chosen characters
}

function eql(){
    $('.calc-display').val(eval($('.calc-display').val())); // calculates
}

function c(){
    $('.calc-display').val(''); // erases num
}

function del(){
    value = $('.calc-display').val();
    $('.calc-display').val(value.substring(0, value.length - 1));
}
