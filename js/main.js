const {createApp} = Vue;

createApp({
    data(){
        return{
            activeChat: 0,
            newMessage: '',
            searchContact: '',                 //variabile per parola cercata
            actualData:'',          
            user:{
                name: 'Luighi',
                avatar: '.img/user.jpg'
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Pinni',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Qua sta piovendo di brutto',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Qua no',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Ok niente, ciao allora',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Renata',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Pronto salve, sono la Renata',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ascolta oggi in piazza c\'è una raccolta per raccogliere dei fondi, partecipa?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'EEEE vediamo dopo, ma a che ore?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Alle tre e mezza!',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Zaffa',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Oggi qua volano neve',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Omar!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Non c\'entro niente io',
                            status: 'received'
                        }
                    ],
                }
            ]
                   
        }
    },
    methods:{
        addMsg(){   //verifico se newTask non è vuota
            if(this.newMessage !== ''){

                this.addDataNow();      //funzione aggiungi data

                this.contacts[this.activeChat].messages.push(       //pusho oggetto messaggio
                    {date: this.actualData,
                    message: this.newMessage,
                    status : 'sent'});

                setTimeout(this.addBotMsg,1000)    //risposta automatica dopo 1 secondo
            }
            this.newMessage = '';    //ogni volta azzero variabile input
         },
         addBotMsg(){
            
            this.addDataNow();      //funzione aggiungi data

            this.contacts[this.activeChat].messages.push(      //messaggio Bot
            {date: this.actualData.toLocaleString(luxon.DateTime.DATETIME_MED),
            message: 'ok',
            status : 'received'})
        },
        deleteMsg(indice){      //elimina messaggio cliccato
            this.contacts[this.activeChat].messages.splice(indice,1);
        },
        searchContacts(){       //Ciclo contatti, se non includono la parola visible diventa false

            this.contacts.forEach(element => {
                if(element.name.toLowerCase().includes(this.searchContact.toLowerCase())){
                    element.visible = true
                }else{
                    element.visible = false;
                }
            });
            
            // (Opzione con impossibilità di selezionare chat corretta dopo ricerca)
            // Filtro in un nuovo array con valore di searchContact

            // return this.contacts.filter(item => item.name.toLowerCase().includes(this.searchContact));

        },
        addDataNow(){
             const d = luxon.DateTime.local();  //estraggo data da luxon local ed assegno a variabile

             this.actualData = d.toFormat('dd/LL/yyyy hh:mm:ss')    //converto a formato desiderato      
        }
        
    }
}).mount('#app_cont');