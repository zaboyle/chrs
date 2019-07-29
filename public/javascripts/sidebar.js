// toggle sidebar on click
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

// default sidebar to closed on mobile
if(Number($(window).width()) < 576) { console.log('hello'); document.getElementById('sidebar').classList.add('active'); }