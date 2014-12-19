 $(document).ready(function () {
        $('.progress .progress-bar').progressbar({
            update: function (current_percentage, $this) {
                $this.parent().parent().css('background-color', 'rgb(' + Math.round(current_percentage / 100 * 255) + ', 0, 0)');
            }
        });
    });
