function add(number) {
    var element = document.getElementById('number')
    var value = parseInt(element.value)
    element.value = value + number;    
}