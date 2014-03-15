jQuery ->
  $('#parcel_size_slider').slider()
  $('#parcel_size_slider').slider().on "slide", (val) ->
    $('#parcel_size_slider_val1').text(val.value)
    
  
  $('#parcel_height_slider').slider()
  $('#parcel_dencity_slider').slider()
  $('#parcel_transit_distance_slider').slider()




  $('#map_view_btn').click ->
    $('.map-view').show();
    $('.list-view').hide()
    $('.flagged-view').hide()

  $('#list_view_btn').click ->
    $('.map-view').hide();
    $('.list-view').show()
    $('.flagged-view').hide()

  $('#flagged_view_btn').click ->
    $('.map-view').hide();
    $('.list-view').hide()
    $('.flagged-view').show()