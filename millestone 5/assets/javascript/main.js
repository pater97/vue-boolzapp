//CONSEGNA 
/*
Milestone 1
● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto.

Milestone 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato
*/
const app = new Vue({
    el:`#app`,
    data:{
        c:0,
        ricerca: ``,
        finestra: document.getElementsByClassName("infoWindow"),
        chatMessage: document.getElementsByClassName("chatMessage"),
        arrayDiRicerca: [],
        message:{
            date: new Date() .toLocaleString(),
            text:``,
            status: `sent`
        },
        contacts: [
            {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
               {
                 date: '10/01/2020 15:30:55',
                 text: 'Hai portato a spasso il cane?',
                 status: 'sent'
                 },
                 {
                 date: '10/01/2020 15:50:00',
                 text: 'Ricordati di dargli da mangiare',
                 status: 'sent'
                 },
                 {
                 date: '10/01/2020 16:15:22',
                 text: 'Tutto fatto!',
                 status: 'received'
                 }
                 ],
                 },
               {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
               {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?', 
                status: 'sent'
                },
                {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
                },
                {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
                }
                ],
                },
              {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
              {
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
                },
                {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
                },
                {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
                }
                ],
                },
              {
            name: 'Luisa',
            avatar: '_4',
            visible: true,
            messages: [
              {
               date: '10/01/2020 15:30:55',
               text: 'Lo sai che ha aperto una nuova pizzeria?',
               status: 'sent'
               },
               {
               date: '10/01/2020 15:50:00',
               text: 'Si, ma preferirei andare al cinema',
               status: 'received'
               }
               ],
               },
               ]
        },
    methods:{
        //cambia chat al click
        contatore:function contatore(index){
            this.c = index
        },
        //comparsa di messaggi 
        addMessage: function addMessage(){
            if(this.message.text != ``){
                this.contacts[this.c].messages.push(this.message);
            }
            this.message = {
                date: new Date() .toLocaleString(),
                text:``,
                status: `sent`
            }
            let self = this
            setTimeout(function(){
                self.message = {
                    date: new Date() .toLocaleString(),
                    text:`ok`,
                    status: `received`
                };
                if(self.message.text != ``){
                    self.contacts[self.c].messages.push(self.message);
                }
                self.message = {
                    date: new Date() .toLocaleString(),
                    text:``,
                    status: `sent`
                }
            },1000)
        },
        //genera data
        accessDate:function accessDate(){
            return new Date() .toLocaleString()
        },
        //premere tasto destro mouse per aprire menu e sinistro per chiuderlo
        infoWindowOpen:function infoWindow(index){
            for(let i = 0; i < this.finestra.length;i++){
                this.finestra[index].style.display="block"
            }
        },
        infoWindowClose:function infoWindow(index){
            for(let i = 0; i < this.finestra.length;i++){
                this.finestra[index].style.display="none"
            }
        },
        //eliminare messaggio corrente
        deleteMessage: function deleteMessage(index){
            for(let i = 0; i < this.chatMessage.length;i++){
                this.chatMessage[index].style.display="none"
            }
        }
    },
})