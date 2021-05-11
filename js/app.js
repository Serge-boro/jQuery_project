$(document).ready(function () {
  const small = $('.small img')
  const big = $('.big img')
  small.click(function (e) {
    e.preventDefault()
    if (big.attr('src') !== $(this).attr('src')) {
      big
        .hide()
        .attr('src', $(this).attr('src'))
        .fadeIn(1000)
        .css({ width: '100%' })
    }
  })
  $('#btn-open').click(() => $('.sidebar').addClass('show-slider'))
  $('#close-btn').click(() => $('.sidebar').removeClass('show-slider'))

  small.click(function () {
    small.fadeTo(500, 1).css('border', 'none')
    $(this).fadeTo(500, 0.6).css({
      border: '1px dotted rgb(226, 105, 57)',
    })
  })
})
