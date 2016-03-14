$(function(){})
    var styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"lightness":40},{"color":"#333333"},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#e2e1e0"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":20},{"visibility":"on"},{"color":"#f4f2f0"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#fcfafa"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#fcfafa"},{"lightness":17}]}];


var markers = [];
function initMap(){
    var myOptions = {
        zoom: 3,
        center: new google.maps.LatLng(53.903897, 27.562357),
        disableDefaultUI: true,
        scrollwheel: false,
        zoomControl: true,
        zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
                position: google.maps.ControlPosition.LEFT_CENTER
            },
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
        }
    };
    var map = new google.maps.Map(document.getElementById('map-canvas-where'), myOptions);
    var mapType = new google.maps.StyledMapType(styles, { name:"Grayscale" });    
        map.mapTypes.set('tehgrayz', mapType);
        map.setMapTypeId('tehgrayz');

        setMarkers(map);
    
}
var beaches = [];
$('.maps').each(function(index){
    var cur_coords = [];
        cur_coords[0] = $(this).data('longitude');
        cur_coords[1] = $(this).data('latitude');
        cur_coords[2] = $(this).find('.marker-popup').html();
        //console.log(this);
        beaches[index] = cur_coords;
});
var contentString = beaches[2];

function setMarkers(map) {
    var image = {
        url: 'img/map-pointer/marker.png',
        size: new google.maps.Size(28, 38),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(14, 38)
    };
    var imageHover = {
        url: 'img/map-pointer/marker-hover.png',
        size: new google.maps.Size(31, 54),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(14, 38)
    };
    var infowindow = new google.maps.InfoWindow({
        content: '',
        //maxWidth: 300
        //maxHeight: 275,
    });
    
    var markersBounds = new google.maps.LatLngBounds();
    for (var i = 0; i < beaches.length; i++) {
        var beach = beaches[i];

        var markerPosition = new google.maps.LatLng(beach[0], beach[1]);
        markersBounds.extend(markerPosition);
        var marker = new google.maps.Marker({
          position: markerPosition,
          map: map,
          icon: image,
          animation: google.maps.Animation.DROP,
          info: '<div class="marker-popup">' + beach[2] + '</div>'
        });
        
        // устанавливает маркер по клику и возвращает остальные к первоначальному виду
        var markerCallback = function() {
            for (var i=0; i< markers.length; i++) {
                markers[i].setIcon(image);
            }
            this.setIcon(imageHover);
        }

google.maps.event.addListener(marker, 'click', markerCallback); 
        
        (function(marker, i) {  
            google.maps.event.addListener(marker, 'click', function() {               
                //infowindow.close();
                infowindow.setContent(this.info);
                infowindow.open(map, marker);
                //marker.setIcon(imageHover);
                //console.log(i);
                $('.marker-item-block > a').removeClass('marked');
                $('.marker-item-block > a[onclick="myClick('+i+');"]').addClass('marked');
             
                //$(this).addClass('marked');
                
//                if (marker.getAnimation() !== null) {
//                    marker.setAnimation(null);
//              } else {
//                    marker.setAnimation(google.maps.Animation.BOUNCE);
//              }
                
            });
            
                google.maps.event.addListener(infowindow,'closeclick',function(){
                    marker.setIcon(image);
                    $('.marker-item-block > a').removeClass('marked');
                });

            google.maps.event.addListener(infowindow, 'domready', function() {
                var iwOuter = $('.gm-style-iw');
                var iwBackground = iwOuter.prev();
                var iwParent = iwOuter.parent(':nth-child(2)');
                iwParent.addClass('box-bg');
                iwBackground.children(':nth-child(1)').css({'display' : 'none'});
                iwBackground.children(':nth-child(2)').css({'display' : 'none', height: '0'});
                iwBackground.children(':nth-child(2)').addClass('height-mod');
                iwBackground.children(':nth-child(3)').addClass('ololo');
                iwBackground.children(':nth-child(3)').children(':nth-child(1)').css({'display' : 'none'});
                iwBackground.children(':nth-child(3)').children(':nth-child(2)').css({'display' : 'none'});
                iwBackground.children(':nth-child(4)').css({'display' : 'none'});
                iwOuter.parent().parent().css({left: '15px'});
                iwOuter.parent().parent().css({top: '0'});
                iwOuter.parent().parent().css({bottom: '0'});
                iwBackground.children(':nth-child(2)').parent().parent().addClass('ololo2');
                //iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});
                //iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});
                //iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});
                var iwCloseBtn = iwOuter.next();
                iwCloseBtn.addClass('close-infobox');
                iwCloseBtn.find('img').css({'display' : 'none'})
//                if($('.iw-content').height() < 140){
//                    $('.iw-bottom-gradient').css({display: 'none'});
//                }
//                iwCloseBtn.mouseout(function(){
//                    $(this).css({opacity: '1'});
//                });
            });
            markers.push(marker);
            
        })(marker, i);

    }
    
    map.setCenter(markersBounds.getCenter(), map.fitBounds(markersBounds));
};

initMap();

//    $('.marker-item-block > a').click(function(e) {
//        e.preventDefault();
//    });
    function myClick(id){
        google.maps.event.trigger(markers[id], 'click');
        
        //console.log(id);
    }