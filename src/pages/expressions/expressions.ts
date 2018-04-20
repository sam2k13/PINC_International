import { Component } from '@angular/core';
import { PopoverController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-expressions',
  templateUrl: 'expressions.html'
})

export class ExpressionsPage {

  expressions = [{ name: 'A ver…', description : 'is a commonly used phrase that is also quite general and versatile. It literally means “let’s see”, but sometimes adults use it, for example, when rallying up a group of children. Basically, you can use this when someone asks you a question and you have to think before answering. Example: ¿Cuántas personas vienen a la cena esta noche? A ver…creo que van a venir José, Mariluz, Ángel, Miguel… Pues entonces cuatro.'},
  { name: '(Me) mola', description : 'means it’s really cool or you dig it. In other words, it’s an alternative to me gusta. Examples: Esa canción mola mucho, ¿eh? or Me mola mucho esa canción.'},
  { name: 'Hombre', description : 'in Spain is not just the opposite of a mujer, so don’t be offended if someone says to you, Hombre, claro. Its other use is as an intensifier, a way to express reactions like surprise, urgency, insistence, etc. In English we would use a variety of words, depending on the context. For the example stated previously, you might say, “Well, obviously.”'},
  { name: 'Vale, vale, vale', description : 'we understand that you’re a guiri (Peninsular Spanish for gringa), but you cannot leave Spain without this repetitive phrase reverberating in your head! And yes, the Spaniards really do say vale (“okay” or “alright”) three times in a row like that. Not every time, but…just about.'},
  { name: 'Pues…nada', description : 'the conversation is over so there’s nothing more to say. If you want to sound like a local, this is a perfect way to conclude your chats.'},
  { name: '¡Por favor!', description : 'If you think por favor just means “please”, think again! In Spain, we use this phrase as a reaction to anything fuerte. It’s similar to the sarcastic kind of “please” in English, but the Spanish use por favor much more frequently.'},
  { name: '¡Qué fuerte!', description : 'My gosh, that’s intense! Although the madrileños might not seem as bubbly as our Latino neighbors, they are still expressive in their own right. Something is fuerte when it’s very bad, good, shocking, or eerily coincidental, for example.'},
  { name: 'Me parto', description : 'I’m bursting with laughter! This cracks me up! (Literally, “I’m splitting in two”.) The full phrase is me parto de risa.'},
  { name: '¡Ostras!', description : 'Oysters! What? Well, ostras really are “oysters” in Spanish, but in this context it’s a term used to express surprise. Why oysters? It’s a less-harsh version of ¡Hostia! which is the Eucharist or Host. Basically, ostras is to hostia what “oh my gosh” is to “oh my God”.'},
  { name: '¡Vaya tela! ¡Madre mía!', description : '“Wow!” “Oh my gosh!” Another useful expression to react to something fuerte.'},
  { name: 'Qué guay', description : 'if you like it — it’s cool, or genial.'},
  { name: 'Tiene buena pinta', description : 'because it looks good, appealing, tasty, attractive, or fun (depends on the context).'},
  { name: 'Venga', description : 'you have to learn that this is more than just a command in usted form for “come”! In Spain, we commonly use venga for both tú and usted as a general animador. Actually, it’s kind of another way to say, “¡Anímate!” (Cheer up! Perk up!) We also typically use venga as an informal way to say goodbye, surprisingly enough. Adios and hasta luego are not your only options! Whether on the phone or on the street, as you and your friend are about to go separate ways, you can say, “Pues nada… ¡Venga!” Or, you could use venga when you’re in a hurry, for example, and the metro door won’t open: ¡Venga! Come on!'},
  { name: 'Jolines', description : 'it’s hot today! If you want to express something a little fuerte but not as fuerte as joder (in other words, lighter than the F-bomb), you can say jolines. Joder is more of a palabrota, which you definitely wouldn’t use in the workplace or formal situations, while jolines is a more suave version.'},
  { name: 'O sea', description : 'we’re not talking about the ocean here. “In other words,” this is a very madrileño way to correct or clarify yourself in speech. Some people are heavy on their o seas in regular conversation (like the a ver we highlighted in last week’s post about Spanish expressions) but others rarely use it.'},
  { name: 'Genial', description : 'you’ve made it to Spain and are on a great start to the summer! While the British translation of genial might be “brilliant”, we Americans would say “awesome,” “great,” “excellent,” etc. You can use this word to describe an idea or a person.'},
  { name: 'Mogollón', description : 'is a fun, typically Spanish word in that it’s another expressive descriptor (because the Spanish can’t use simple language to talk about their everyday experiences – they need good descriptors!). You can have a montón of patatas on your plate, or a mogollón if you want to exaggerate even more.'},
  { name: 'Flipo', description : 'when I’m having a really good time. Or that concert me flipó because it was a blast. In addition to pasarlo bien or gustar, flipar could be used to express surprise, enthusiasm, or excitement. An easy way to remember it is by thinking of the (somewhat dated) phrase “to flip out” in English.'},
  { name: '¿Te animas?', description : 'Do you feel like it? Are you up for it? Are you down? Vamos a la playa esta tarde. ¿Te animas?'},
  { name: 'Fatal', description : 'describes anything from a bad movie to the way you feel with a migraine or even when it’s just one of those days that you can’t seem to do anything right. Qué día más duro, ¡estoy fatal!'},
  { name: 'Qué rollo', description : 'what a bore (or a drag)! Or qué buen rollo if you had a great time or a good conversation. Depending on the context, rollo can be negative or positive.'},
  { name: 'Estar a tope', description : 'makes me think of being “at the top of the world”, and sometimes it can have this connotation; el concierto anoche fue genial; estábamos a tope (we enjoyed it to the max). More commonly, you can be a tope de trabajo, for example, if you’re overloaded or up to your eyeballs in work.'},
  { name: 'Fue una pasada', description : 'is usually positive, like “amazing” or a buen rollo: La fiesta fue una pasada. Along the same lines, it can express the notion of being “over the top” or going too far. Basically, it’s another form of exaggeration, characteristic of Spanish lenguaje coloquial!'}];
  hasInput;
  input;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {
    this.hasInput = false;
    this.input = "";
  }

  onInput(event){
    if(this.input == ""){
      this.hasInput = false;
    }
    else{
      this.hasInput = true;
    }
  }

  getItems(event){
    console.log(event);
  }

}
