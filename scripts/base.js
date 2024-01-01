document.addEventListener("DOMContentLoaded", function () {
    var layers = document.querySelectorAll('.parallax-layer');

    window.addEventListener('scroll', function () {
        var yOffset = window.pageYOffset;

        layers.forEach(function (layer) {
            var speed = layer.getAttribute('data-speed');
            var yPos = -(yOffset * speed / 100);
            layer.style.transform = 'translate3d(0, ' + yPos + 'px, 0)';
        });
    });
});
