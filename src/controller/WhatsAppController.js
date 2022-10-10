class WhatsAppController {

    constructor(){

        console.log('WhatsAppController ok')

        this.loadElements();

    }

    loadElements(){

        this.el = {};

        document.querySelectorAll('[id]').forEach(element=>{

            this.el[Format.getCamelCase(element.id)] = element;

        });

    }


}