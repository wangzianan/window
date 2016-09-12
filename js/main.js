require.config({
    paths:{
        jquery: 'jquery-3.1.0'
    }
});

require(['jquery','window'], function($, w){
    $("#test").on("click", function(){
        var win  = new w.Window();
        win.alert({
            content : 'hello',
            // handler4AlertBtn : function(){
            //     console.log("0000");
            // },
            // handler4CloseBtn : function(){
            //     console.log("closeBtn");
            // },
            width : 300,
            height : 150,
            y : 50,
            title : "友情提示",
            hasCloseBtn : true,
            text4AlertBtn : "OK",
            dragHandle : ".window_header"
        }).on("close", function(){
            console.log("you clicked close 1");
        }).on("close", function(){
            console.log("you clicked close 2");
        }).on("close", function(){
            console.log("you clicked close 3");
        }).on("alert", function(){
            console.log("you clicked close 1");
        }).on("alert", function(){
            console.log("you clicked close 2");
        }).on("alert", function(){
            console.log("you clicked close 3");
        });
        // win.on("close", function(){
        //     console.log("you clicked close 1");
        // });
        // win.on("close", function(){
        //     console.log("you clicked close 2");
        // });
        // win.on("close", function(){
        //     console.log("you clicked close 3");
        // });
        // win.on("alert", function(){
        //     console.log("you clicked close 1");
        // });
        // win.on("alert", function(){
        //     console.log("you clicked close 2");
        // });
        // win.on("alert", function(){
        //     console.log("you clicked close 3");
        // });
    });
    
   
})