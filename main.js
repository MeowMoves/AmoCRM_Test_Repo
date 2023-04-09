define(['jquery', 'lib/components/base/modal'], function($, Modal){

	var CustomWidget = function(){
		var self = this,
		amo_pipes = [],
		system = self.system(),
		version = '0.0.1',
		LEAD_CF = false;;

        this.callbacks = {
        	render: function(){
                // Подключаем стили
                return true;
            },
            init: function(){

                return true;
            },
            bind_actions: function(){
            	return true;
            },
            settings: function(){
            	return true;
            },
            advancedSettings:function(){

                return true;
            },
            onSave: function(settings){


                return true;
            },
            destroy: function(){},
            contacts: {
            	selected: function(){}
            },
            leads: {
            	selected: function(){}
            },
            tasks: {
            	selected: function(){}
            },
            loadPreloadedData: function () {
                return new Promise(_.bind(function (resolve, reject) {
                    resolve([]);
                }), this);
            },
            loadElements: function (type, id) {

                setTimeout(function(){
                    var htmlRender = '<div>Нужно сохранить Сделку...</div>';
                    $('#' + self.params.widget_code).html(htmlRender);
                    console.log("Привет с гугл Диска!");
                },500)
                
                return new Promise(_.bind(function (resolve, reject) {
                    resolve([]);
                }), this);
            },
            linkCard: function (links) {
                return new Promise(_.bind(function (resolve, reject) {
                    resolve([]);
                }), this);
            },
            searchDataInCard: function (query, type, id) {
                return new Promise(_.bind(function (resolve, reject) {
                    resolve([]);
                }), this);
            }
        };
        return this;
    };

    return CustomWidget;
});