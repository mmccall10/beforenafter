$(function(){
    var bfna = {
        divPos: {},
        init: function(){
            this.cacheDom();
            this.bindEvents();
        },
        cacheDom: function(){
            this.$el = $('.bfna-container');
            this.$offset =  this.$el.offset(),
            this.$containerOne = this.$el.find('.containerOne');
            this.$containerTwo = this.$el.find('.containerTwo');
            this.$divider = this.$el.find('.divider');
        },
        bindEvents: function(){
            var self = this;
            this.$el.on('mousemove',function(event){
                self.setOffset(event);
            });
        },
        render: function(){
            this.$containerTwo.css({'width':800 - this.divPos.left, 'background-position':  -this.divPos.left });
            this.$containerOne.css({'width':this.divPos.left});
            this.$divider.css({'left':this.divPos.left});
        },
        setOffset: function(e){
            this.divPos = {
                left: e.pageX - this.$offset.left,
                top: e.pageY - this.$offset.top
            };
            this.render();
        }
    }

    bfna.init();
});
