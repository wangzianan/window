define(['widget','jquery', 'jqueryUI'], function(widget, $, $UI){

    function Window(){
        this.cfg={
            width:500,
            height:300,
            content : '',
            text4AlertBtn : '确定',
            // handler4AlertBtn : null,
            // handler4CloseBtn :null,
            title :'系统提示',
            hasCloseBtn : false,
            skinClassName : null,
            hasMask : true,
            isDraggable : true,
            dragHandle : null,
            _mask:null
        }
        this.handlers = {}
    };

    Window.prototype=$.extend({}, new widget.Widget(),{
        renderUI : function(){
            if(this.cfg.hasMask){
                this._mask = $('<div class="window_mask"></div>');
                this._mask.appendTo("body");
            }
            this.boundingBox = $(
                '<div class="window_boundingBox">'+
                    '<div class="window_header">'+this.cfg.title+'</div>'+
                    '<div class="window_body">'+this.cfg.content+'</div>'+
                    '<div class="window_footer"><input type="button" value="'+this.cfg.text4AlertBtn+'" class="window_alertBtn"></input></div>'+
                '</div>'
            );
            this.boundingBox.appendTo("body");
            if(this.cfg.hasCloseBtn){
                var closeBtn = $('<span class="window_closeBtn">X</span>');
                closeBtn.appendTo(this.boundingBox);
            }
        },
        bindUI: function(){
            var that = this;
            this.boundingBox.delegate(".window_alertBtn", "click", function(){
                that.fire("alert");
                that.destroy();
            });
            this.boundingBox.delegate(".window_closeBtn", "click", function(){
                that.fire("close");
                that.destroy();
            });
            if(this.cfg.handler4AlertBtn){
                this.on("alert", this.cfg.handler4AlertBtn);
            }
            if(this.cfg.hanler4CloseBtn){
                this.on("close", this.cfg.hanler4CloseBtn);
            }
        },
        syncUI : function(){
            this.boundingBox.css({
                height : this.cfg.height + 'px',
                width : this.cfg.width + 'px',
                left : (this.cfg.x || window.innerWidth - this.cfg.width)/2 + 'px',
                top : (this.cfg.y || window.innerHeight - this.cfg.height)/2 + 'px'
            });
            if(this.cfg.skinClassName){
                this.boundingBox.addClass(this.cfg.skinClassName);
            }
            if(this.cfg.isDraggable){
                if(this.cfg.dragHandle){
                    this.boundingBox.draggable({ handle : this.cfg.dragHandle});
                } else{
                    this.boundingBox.draggable();
                }
            }
        },
        destructor : function(){
            this._mask && this._mask.remove();
        },
        alert: function(cfg){
            $.extend(this.cfg, cfg);
            this.render();
            return this;
            // var that = this;
            // var CFG = $.extend(this.cfg, cfg);
            // var boundingBox = $('<div class="window_boundingBox"></div>');
            // boundingBox.appendTo("body");
            // boundingBox.html(CFG.content);

            // var btn = $('<input type="button" value="确定"></input>');
            // btn.appendTo(boundingBox);
            // btn.click(function(){
            //     CFG.handler && CFG.handler();
            //     boundingBox.remove();
            // });
            // var mask = null;
            // if(CFG.hasMask){
            //     mask = $('<div class="window_mask"></div>');
            //     mask.appendTo("body");
            // }
            // var boundingBox = $(
            //     '<div class="window_boundingBox">'+
            //         '<div class="window_header">'+CFG.title+'</div>'+
            //         '<div class="window_body">'+CFG.content+'</div>'+
            //         '<div class="window_footer"><input type="button" value="'+CFG.text4AlertBtn+'" class="window_alertBtn"></input></div>'+
            //     '</div>'
            // );
            // boundingBox.appendTo("body");

            // var btn = boundingBox.find(".window_alertBtn");
            // btn.click(function(){
            //     // CFG.handler4AlertBtn && CFG.handler4AlertBtn();
            //     that.fire("alert");
            //     boundingBox.remove();
            //     mask && mask.remove();
            // });
            // boundingBox.css({
            //     height : CFG.height + 'px',
            //     width : CFG.width + 'px',
            //     left : (CFG.x || window.innerWidth - CFG.width)/2 + 'px',
            //     top : (CFG.y || window.innerHeight - CFG.height)/2 + 'px'
            // });
            // if(CFG.hasCloseBtn){
            //     var closeBtn = $('<span class="window_closeBtn">X</span>');
            //     closeBtn.appendTo(boundingBox);
            //     closeBtn.click(function(){
            //         // CFG.handler4CloseBtn && CFG.handler4CloseBtn();
            //         that.fire("close");
            //         boundingBox.remove();
            //         mask && mask.remove();
            //     });
            // }
            // if(CFG.skinClassName){
            //     boundingBox.addClass(CFG.skinClassName);
            // }
            // if(CFG.isDraggable){
            //     if(CFG.dragHandle){
            //         boundingBox.draggable({ handle : CFG.dragHandle});
            //     } else{
            //         boundingBox.draggable();
            //     }
            // }
            // return this;
            // if(CFG.handler4AlertBtn){
            //     that.on("alert", CFG.handler4AlertBtn);
            // }
            // if(CFG.handler4CloseBtn){
            //     that.on("close", CFG.handler4CloseBtn);
            // }
        },
        confirm: function(){},
        prompt: function(){},
        // on : function(type, handler){
        //     if(typeof this.handlers[type]=='undefined'){
        //         this.handlers[type] = [];
        //     }
        //     this.handlers[type].push(handler);
        //     return this;
        // },
        // fire : function(type, data){
        //     if(this.handlers[type] instanceof Array){
        //         var handlers = this.handlers[type];
        //         for(var i=0, len = handlers.length; i< len ; i++){
        //             handlers[i](data);
        //         }
        //     }
        // }
    });
    return {
        Window: Window
    }
});