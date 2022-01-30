$(document).ready(function() {
    /*
    * Plugin intialization  bu kisim library'nin verdigi kod bizimle alakasi yok (navbar disinda)
    */
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4'],
        sectionsColor: ['white', '#ee005a', '#2C3E50', '#39C'],
        navigation: {
            'position': 'right',
               'tooltips': ['Home', 'Class A', 'Class B', 'Class C']
           },
        afterRender: function(){
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function(anchorLink, index){
            if(index>1){
                $('#pp-nav').removeClass('custom');
            }else{
                $('#pp-nav').addClass('custom');
            }
        }
    });
    /*
    * Internal use of the demo website
    */
    $('#showExamples').click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $('#examplesList').toggle();
    });
    $('html').click(function(){
        $('#examplesList').hide();
    });
});