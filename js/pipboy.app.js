$(document).ready(function () {
  var weapons = [
    {
      "name": "44_pistol",
      "damage": 56,
      "fire_rate": 32,
      "range": 112,
      "accuracy": 52,
      "weight": "200gm",
      "value": "50 $"
    },
    {
        "name": "10mm_pistol",
        "damage": 32,
        "fire_rate": 64,
        "range": 85,
        "accuracy": 77,
        "weight": "100gm",
        "value": "25 $"
    },
    {
        "name": "assault_rifle",
      "damage": 43,
      "fire_rate": 28,
      "range": 150,
      "accuracy": 42,
      "weight": "600gm",
      "value": "90 $"
    }
  ];
  $('.item-list a').on('mouseenter',function(e){
      var current_item = $(e.currentTarget).attr('class');
    //   console.log(current_item)
      weapons.forEach( item =>{
          if(item.name == current_item){
              var container = $('.item-stats');
              container.find('.damage').html(item.damage);
              container.find('.fire-rate').html(item.fire_rate);
              container.find('.range').html(item.range);
              container.find('.accuracy').html(item.accuracy);
              container.find('.weight').html(item.weight);
              container.find('.value').html(item.value);
          }

      })
  })
});
;