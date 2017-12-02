/* 
	jQuery 自动切换插件 AutoSwitch 
	Copyright (c) 2017_Xiaxuening https://github.com/xiaxuening/jQuery-
	Date: 2017-05-23
    此插件将所有匹配的元素以固定的时间进行切换，实现幻灯片效果 
     
    用法： 
    1. $(' 选择符 ').autoSwitch(); 
    2. $(' 选择符 ').autoSwitch({ 
            speed: 'fast', 
            keeptime: 2000 
       }); 
*/  
;(function($) {  
    $.fn.autoSwitch = function(options) {  
        options = jQuery.extend({  
            speed: 'normal', // 切换速度，可选值: slow, normal, fast  
            keeptime: 5000  //每一个的停留时间，毫秒  
        }, options);  
        var self = this;  
        var _count = self.length;  
        var _currentIndex = 0;  
        if (_count > 1) {  
            self.hide();  
            self.eq(0).show();  
            window.setInterval(function() {  
                _currentIndex = ++_currentIndex % _count;  
                self.filter(':visible').hide();  
                self.eq(_currentIndex).fadeIn(options.speed);  
            }, options.keeptime);  
        }  
        return this;  
    }  
})(jQuery);  