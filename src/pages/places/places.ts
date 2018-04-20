import { Component } from '@angular/core';
import { PopoverController, NavController } from 'ionic-angular';
import { PlaceItemsPage } from '../placeItems/placeItems';

@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})

export class PlacesPage {

  places = [{ name : 'Reina Sofia Museum', img : 'assets/images/reina_sofia.jpg', items : [ { name : 'Pablo Picasso: Guernica', source : 'Galerie Magazine', img : 'assets/images/reina_sofia/guernica.jpg', content : `
  <blockquote>
<p>&ldquo;Did you do this?&rdquo; &ndash; Nazi Officer referring to the photo of Guernica that Picasso had in his studio while living in Nazi occupied France</p>
<p>&ldquo;No, you did.&rdquo; &ndash; Pablo Picasso</p>
</blockquote>
<p>So I am going to give you a little&nbsp;<a href="https://www.theguardian.com/books/2005/jan/08/highereducation.news" target="_blank" rel="noopener noreferrer">Spanish history</a>&nbsp;to help you understand why exactly this is considered one of the most famous pieces of Spanish art. No worries if you don&rsquo;t like it&hellip; but take a step back and try to see it from the perspective of a Spaniard during the Civil War.</p>
<p>The piece is named for the small Northern Spanish town, Gernika, in Basque Country that was bombed by the Germans during the Spanish Civil War (1936-1939). Picasso saw photographs in newspapers while living in Paris, and was inspired to complete this particular work when a poet friend begged him to take on the cause. According to the Reina Sofia&rsquo;s website, it is considered to be:</p>
<blockquote>
<p>&rdquo; a giant poster, (a) testimony to the horror that the Spanish Civil War was causing and a forewarning of what was to come in the Second World War.&rdquo;</p>
</blockquote>
<p>When it was first displayed at the International World Fair in Paris in 1937, it was used to raise money for awareness and aid for Spanish citizens. After a brief period in France, the painting was housed in New York&rsquo;s MOMA until after Franco&rsquo;s rule ended and it came to Spain for the first time in 1981. Since its completion, it has become a symbol of Spanish Democracy.</p>
<p>Make a beeline for this piece, which is located on the second floor. When you get there, stop and really try to take it in.</p>
<p>It&rsquo;s discombobulated and broken up. There is a frantic energy, but you can still divide the figures into two groups: animals and humans. It is easy to make out a horse in the center of the canvas, a bull on the left side (a common symbol of Spain), and various women crying out. The painting is characterized by muted colors, including a bluish-gray, white, and black. The sheer size of the canvas (just about 11 ft. x&nbsp;25 ft.) impresses on the viewer the terror, pain, and confusion felt in that moment when the bomb fell in Guernica, and that extended throughout the country as a result of the Civil War.</p>
<p>Americans frequently are not taught about the Spanish Civil War, but for anyone who plans on spending some time in Spain, it is worth reading about. After the war, Spain had a dictator, Francisco Franco, for forty years (1939-1975).</p>
  `
},
{ name : 'Alexander Calder: Carmen', source : 'Revista de Patrimonio', img : 'assets/images/reina_sofia/revista.jpg' , content : `
<p>This super cool statue is in the middle of a garden when you enter into the museum and is hard to miss. The courtyard is the center of the older galleries in the Reina Sofia, which recently built a new addition in the early 2000s. This original building, however, was an old hospital.</p>
<p>So who was this guy? Well&hellip; Calder was an American sculpture who invented mobiles as we know them today in 1931. And yes, he inspired the super cute baby mobile that you saw online and thought about buying for your sister-in-law or your cousin&rsquo;s upcoming baby shower. He is also well-known for his influence on 20th Century Abstract Expressionism.</p>
<p>You might recognize some of his other mobiles if you google his name. But you definitely will recognize the very American colors&hellip; RED and Yellow! In other words the colors making up one of the most iconic American symbols&hellip; the American flag! Just kidding. McDonald&rsquo;s.</p>
<p>His interest in mobiles grew out of an enthusiasm for mechanical engineering. It makes sense if you look at this sculpture. As specified in a&nbsp;<a href="http://artstory.org/" target="_blank" rel="noopener noreferrer">Calder&rsquo;s biography</a>, he started making mobiles in an attempt to make colors and shapes move. He was completely captivated by the idea of chance encounters and freedom of movement. Hence, the birth of the modern mobile, a term coined by another artist, Marcel Duchamp.</p>
`},
{ name : 'Salvador Dali: The Great Masturbator', source : 'Wikipedia', img : 'assets/images/reina_sofia/great.jpg' , content : `
<p>You saw the name and were curious&hellip; admit it. I don&rsquo;t blame you. This Surrealist painting resembles one of Dali&rsquo;s most famous pieces,&nbsp;<em>The Persistence of Memory</em>, but it is more overtly sexual in nature. And it is pretty weird.</p>
<p>It is actually a very explicit illustration of his own fears and anxieties that were deeply related to personal problems with intimacy and vulnerability. As you can probably guess, these are not your typical first date jitters or nervous upset stomach flip-flops that we are talking about. They were anxieties rooted in childhood trauma and experiences. More generally, this painting and these feelings are common throughout the Surrealist era and tapped into the zeitgeist of the post WW I/ pre-WWII era, where many people felt unsure and lived in a state of &nbsp;anxiety.</p>
<p>This painting is actually a possible self-portrait and the woman portrayal is thought to be Gala, one of his muses. The background is similar to the one in&nbsp;<em>The Persistence of Memory</em>&nbsp;and actually shows a famous rock at Cullero, Cape Creus in Catalonia, Spain. The less obvious symbols to keep an eye out for are: an egg, a symbol of fertility, as well as ants, representations of anxiety for Dali. The grasshopper, which can also be seen here, was alluded to often in Dali&rsquo;s writings, as well as in other paintings. He had a huge fear of grasshoppers from the time he was young.</p>
`},
{ name : 'General Info', source : '', img : '' , content : `
<p>The PINC International Immersion girls always hit up the Reina Sofia during orientation week, have you been yet? Now, I know a ton of people never set foot in a museum unless they are dragged there, but the Reina Sofia is really must-see cultural center in Madrid and in Spain, in general. The building and courtyard are awesome and there is a nice, slightly&nbsp;fancier&nbsp;<a href="http://arzabal.com/" target="_blank" rel="noopener noreferrer">museum restaurant</a>, as well. Plus, we can all use some free Wifi and&nbsp;a dose of AC during the hot Spanish summer.</p>
<p><strong>The Reina Sofia is THE modern art museum in Madrid. Some of the art can be a little abstract and difficult to interpret- but that&rsquo;s all part of the challenge!</strong></p>
<p>This list describes only 3 of the many eye-catching pieces in the Reina Sofia. Our goal is to make it interesting and fun, so you can get cool-tured faster.</p>
<blockquote>
<p>Insider Tip: Look up the&nbsp;<a href="https://www.meetup.com/es-ES/afterbrunchmadrid/" target="_blank" rel="noopener noreferrer">AfterBrunch Sunday events</a>&nbsp;that sometimes happen at the Reina Sofia and are super fun daytime dance parties. Disfruta!</p>
</blockquote>
`},
{ name : 'Visiting the Reina Sofia Museum', source : '', img : '' , content : `
<p><strong>Normal Hours</strong>: Monday, Wednesday- Saturday 10 am- 9 pm //&nbsp;<strong>CLOSED on Tuesdays</strong></p>
<p>When to get in&nbsp;<strong>free</strong>: Monday, Wednesday- Saturday 7-9 pm // Sunday 2:30-7 pm</p>
<p><strong>Price?</strong>&nbsp;General Admission = 10 Euros</p>
<p>The museum also has tons of cool temporary shows and hosts temporary modern art exhibits as well in El Palacio de Cristal and the Velazquez Palace in&nbsp;<a href="http://pincinternational.com/not-your-grandmas-guide-retiro-park-madrid/" target="_blank" rel="noopener noreferrer">Retiro Park</a>.</p>
<blockquote>
<p>Bonus:&nbsp;Check out Juan Miro&rsquo;s work, Salvador Dali&rsquo;s&nbsp;<em>The Enigma of Hitler</em>, and the first movie ever made called&nbsp;<em>Employees Leaving the Lumi&egrave;re Factory.&nbsp;</em></p>
</blockquote>
`}] },
  { name : 'Prado Museum', img : 'assets/images/prado.jpg', items : [ { name : 'Bosch: Garden of Earthly Delights', source : 'The Garden of Earthly Delights// Wikipedia', img : 'assets/images/prado/bosco.jpg' , content : `
<p>This painting is a triptych &ndash; meaning its a 3 in 1 &ndash; think shampoo/conditioner/body wash combo, except this painting is anything but simple! It&rsquo;s super over the top and insanely modern for the time it was painted (1500-1505). Look at it from left to right. The left is the Garden of Eden&nbsp;&ndash; see Adam and Eve and their little enemy the snake in the corner? The middle panel is Earth, which Bosch thinks of basically as an old-school play boy mansion, so lots of naked people and fertility symbols. The last panel is what Bosch imagined as Hell. On the top you can see fire and below you can see specific &ldquo;sinners&rdquo;- like a pig dressed as a clergyman and gamblers. See how many you can find!</p>
  `},
  { name : 'Velazquez: Las Meninas', source : 'Las Meninas // Wikipedia', img : 'assets/images/prado/meninas.jpg' , content : `
<p>Velazquez&rsquo;s painting is possibly the most famous painting in the whole museum.&nbsp;<em>Meninas</em>&nbsp;means maids of honor in Spanish. No, not for your wedding though. These were the&nbsp;women who helped the princess. In the middle is the Princess Margarita, surrounded by her two meninas, a midget, a dwarf, and a dog. On the left, Velazquez painted himself into the painting. This kind of selfie was a pretty ballsy thing to do at the time. Its an assertion of his own status as a royal painter and of painting as an intellectual activity, rather than a manual one (that&rsquo;s why he is thinking, not painting). This idea is further emphasized by the reproduction of famous paintings on the back wall that celebrate painting and art. Oh, one last thing, that red cross on his chest is of the the Order of Santiago. Yes, like that big city in Northern Spain with the cathedral that hundreds of people walk to every year. Who else is in this painting? See that teeny, tiny mirror back there with two people? They are the King and Queen.</p>
  `},
  { name : 'Goya: The 3rd of May and the The 2nd of May', source : 'The Third of May // Khan Academy', img : 'assets/images/prado/may.jpg' , content : `
  <p>Like Velazquez, Goya is one of those Spanish painters whose names are practically synonomous with Spanish art. He has tons of fantastic paintings in the Prado Museum, and there is actually a statue of him outside, as well. So, in an attempt to narrow it down to his most well known, check out: The&nbsp;3rd of May (1814) and the The&nbsp;2nd of May &nbsp;(1814), which celebrate Spain&rsquo;s&nbsp;efforts against Napoleon in 1808.</p>
  <p>As a sidenote, Malasa&ntilde;a is where a big battle happened on the 2nd of May in Madrid and is named after a young woman, Manuela Malasa&ntilde;a, who fought against Napoleon. Check out PINC International&rsquo;s&nbsp;<a href="http://pincinternational.com/madrid-by-barrios-malasana/">guide to Malasa&ntilde;a</a>.</p>
  `},
  { name : 'El Greco: The Annunciation', source : 'The Annunciation // artbible.info', img : 'assets/images/prado/elgreco.jpg' , content : `
<p>We understand that sometimes religious art is not exactly at the top of your list on a Saturday, but El Greco really should not be missed. Although he was not Spanish, he was a huge influence in European art and culture, more generally. El Greco, which means The Greek, is known for his eery colors, elongated bodies, ability to convey movement,&nbsp;and vertical compositions. This piece speaks to all of these.</p>
  `},
  { name : 'The Family of Charles IV (1800)', source : 'The Family of Charles IV // Franciscogoya.com', img : 'assets/images/prado/charles.jpg' , content : `
<p>This is another one of Goya&rsquo;s most famous works. It is a family portrait, however it&rsquo;s not exactly flattering.</p>
  `},
  { name : 'Black Paintings', source : 'Saturn Devouring His Son// Wikipedia', img : 'assets/images/prado/saturno.jpg' , content : `
<p>These were Goya&rsquo;s last paintings and they are universally dark. In general, they are a bit scary. Check out&nbsp;<strong>Saturn Devouring His Son</strong>&nbsp;&hellip; that name gives you a pretty big hint as to the kind of art that Goya was doing at this time.</p>
  `},
  { name : 'The Clothed Maja// The Naked Maja', source : 'The Clothed Maja // Wikimedia Commons', img : 'assets/images/prado/maja.jpg' , content : `
<p>These paintings are beautiful! But, the reason we&nbsp;like them is actually because of their history. They were actually confiscated during the Inquisition, but before that, the patron, Godoy, used to display the nude Maja in a separate room along with other famous nudes. He only invited select guests in an attempt to protect the painting.</p>
  `},
  { name : 'How to Get In and Out in No Time!', source : '', img : '' , content : `
  <p>When it comes to museums and traveling, sometimes they start to look the same.&nbsp;So before you keel over from exhaustion or blisters or boredom, check out this sneaky road map, featuring some of the top paintings at the Prado. Then let us know how you feel about art history&hellip;</p>
<p>The Prado is one of the most recognized art museums in the entire world. In addition to the list about the permanent collection below, definitely be sure to check out the&nbsp;<a href="https://www.museodelprado.es/en" target="_blank">Prado website</a>&nbsp;before you go, in case there is a special exhibition up that might interest you. Depending on the popularity of the special exhibit, you might have to buy tickets ahead of time. Keep reading for information&nbsp;hours, ticket prices, and for the inside scoop on when to get in free.</p>
  `},
  { name : 'Hours', source : '', img : '', content : `
  <p>Monday &ndash; Saturday&nbsp;10:00 am &ndash; 8:00 pm and Sunday 10:00 am &ndash; 7:00 pm</p>
  `},
  { name : 'Tickets', source : '', img : '', content : `
  <p>General ticket price = 15 euros</p>
<p>Reduced prices are 7.50 euros</p>
<p>When is it&nbsp;<strong>free</strong>? In the evenings the general collection is free, but with a student ID, the general collection is always free &ndash; So take advantage!</p>
  `}
] },
  { name : 'Retiro Park', img : 'assets/images/retiro_puerta.jpg', items : [ { name : 'Retiro: The Basics', source : 'Retiro Map // Tamblón Cultural' , img : 'assets/images/retiro/map.png', content : `
  <p>Retiro Park is one of the biggest in Madrid, but it didn&rsquo;t become a public park until the 19th century. Before that, it was VIP only AKA only the royal family and their guests. Now, its open to everyone- democracy woohoo! When it was reserved for royals only, there were sometimes royal balls and parties and sometimes even bullfights. There even used to be a zoo where exotic birds were kept. One famous animal was a little elephant named Ner&oacute;n who lived at the zoo and fought in one of those bullfights- lets just say Dumbo isn&rsquo;t the only sad elephant story.</p>
<p>Here is a map to help you get oriented. We recommend entering through either the entrance by Puerta de Alcal&aacute; or through the gardens off of Calle de Alfonso XII.</p>
  ` },
  { name : 'Puerta de Alcalá', source : 'Puerta de Alcalá // Fotos de Antonio Banus Blog' , img : 'assets/images/retiro_puerta.jpg', content : `
  <p>If you enter through here, be sure to take a couple pics of the big arch that was once the entryway to the city. Remind you of anything? See the Brandenburg Gate in Berlin or the Arc de Triomphe in Paris. If you were to leave the city through this gate, you would be heading in the direction of the small town, Alcal&aacute; de Henares. If this name sounds familiar, it might be because it is the birthplace of the Spanish literary giant, Miguel de Cervantes who wrote&nbsp;<em>Don Quixote</em>, or because of the famous university there. Anyway back to the &ldquo;Puerta,&rdquo; the gate has 4 statues of children on it, which represent Justice, Temprance, Fortitue, and Prudence. Ok, now you have your facts, take a pic, and head across the street to the park.</p>
` },
{ name : 'Palacio de Cristal (#Instaheaven)', source : 'Crystal Palace// Places to See In Your Lifetime' , img : 'assets/images/retiro/crystal.jpg', content : `
<p>The Crystal Palace, designed by Ricardo Vel&aacute;zques Bosco, is made out metal and glass. It looks like something out of Alice in Wonderland. Outside there are intricate tiles with floral and animal designs in bright blues and greens. Some of the tiles are red, which creates a nice contrast. Sometimes there are art exhibits inside that are organized by the&nbsp;<a href="http://www.museoreinasofia.es/en" target="_blank" rel="noopener noreferrer">Reina Sofia</a>&nbsp;and outside, there is a small pond with swans and ducks. The building was actually designed in 1887 to hold exotic flowers during the winter from the Philippines.</p>
<p>Right nearby is the&nbsp;<a href="https://www.esmadrid.com/en/tourist-information/palacio-de-velazquez" target="_blank" rel="noopener noreferrer">Velazquez Palace</a>&nbsp;that is also used for temporary art exhibits from the Reina Sofia. It features similar tiling and was also designed by Bosco.</p>
` },
{ name : 'Gardens', source : 'Retiro Gardens// The Culture Map' , img : 'assets/images/retiro/garden.jpg', content : `
<p>Retiro is like what your dinner plate should look like: very green with lots of variety.&nbsp;In comparison to other parks, like Central Park, Retiro is very well-groomed. There are numerous&nbsp;<a href="http://pincinternational.com/gardens-and-green-spaces-in-madrid/" target="_blank" rel="noopener noreferrer">gardens</a>&nbsp;and open spaces that are divided by small hedges where you can sit and relax. Take advantage of the wide expanses&nbsp;to play frisbee, have lunch, or just hang out. There are also some more hidden enclaves that are slightly more wild. Below, are some of the special green places that we recommend exploring (on your own, with friends, or *cough* on a Tinder date &mdash; no shame!.</p>
<ul>
<li>The entrance from Alfonso XII on the way to the&nbsp;<a href="http://pincinternational.com/cracking-the-prado-museum-madrid-guide/" target="_blank" rel="noopener noreferrer">Prado Museum</a>&nbsp;has an incredible garden, which has an amazing view of the city. There are big cypress trees that look like they were taken out of a Dr. Seuss story.</li>
<li><strong>Jardines de Cecilio Rodriguez&nbsp;</strong>is an awesome garden off to one side of the park that has beautiful gardens with big fountains in the middle. Why bother making the trip? Um, because there are peacocks!?!? What more do I need to say? Oh, and FYI, peacocks are called royal turkeys, or&nbsp;<em>pavos reales,</em>&nbsp;in Spanish.</li>
<li>There is a&nbsp;<strong>Rose Garden</strong>, which has more than 4,000 roses, beautiful arches, and a small, bubbling fountain in the middle. It is best to go in early summer when the flowers are blooming.</li>
<li>There is also a&nbsp;<strong>Forest of Remembrance</strong>&nbsp;that was designed in commemoration of the 191 victims who were killed in 2004 during the terrorist attacks at Atocha. The Forest is full of olive trees, a universal symbol of peace, as well as cypress trees.</li>
</ul>
` },
{ name : 'Lake and Alfonso XII’s Monument', source : 'PINC Goes Boating in Retiro' , img : 'assets/images/retiro/boating.jpg', content : `
<p>Hit up the lake first, its usually crowded, but its a must see. The lake was actually used for water games (think old school wet t-shirt contests) and sometimes used to do re-creations of famous Spanish naval battles. Now at night, there is a male only rowing team that&nbsp;practices there.</p>
<p>There are ducklings in the spring and otherwise, there are just huge weird fish swimming around. On one side of the lake, there are tons of people selling ice cream and jewelry, and sometimes there are&nbsp;salsa dancers, magicians, and other performers. The rowboats are actually kind of a steal, if you feel like taking one for a spin like our PINC students&nbsp;love to do!</p>
<p>On the other side of the lake is a marble monument to one of the Spanish kings. The monument, designed by Jos&eacute; Grases Riera and later Teodoro Anasagas, has a statue of King&nbsp;Alfonso XII, and as well as Peace, Freedom, and Progress, mermaids, and lions. The project was so big that it took more than 20 sculptors!</p>
<p>If you have time, walk down to see the nearby Egyptian Fountain that was rumored to be the location of buried treasure!</p>
` },
{ name : 'El Angel Caído', source : 'Fallen Angel Statue // Wikipedia' , img : 'assets/images/retiro/angel.jpg', content : `
<p>Last but not least is the famous statue of El Angel Caido or&nbsp;<em>The Fallen Angel</em>. This statue is one of very few in the world that actually depicts the Devil and, weirdly, is located exactly 666 meters above sea level- so definitely not an accident!</p>
<p>Have fun exploring Retiro with this guide to our favorite spots, but we&rsquo;re sure you&rsquo;ll find your own as you wander this massive green space of Madrid!</p>
` } ] },
  { name : 'Plaza Mayor', img : 'assets/images/plaza_mayor.jpg', items : [ { name : 'What Actually Happened in Plaza Mayor?', source : 'Plaza Mayor Facades// Dreamstime.com' , img : 'assets/images/plaza_mayor/happened.jpg', content : `
  <p>Plaza Mayor is right in the center of Madrid. Its on all the &ldquo;must-see lists&rdquo; and someone probably told you that you have to go see it. But here&rsquo;s the thing- why go to these places if you don&rsquo;t know what&rsquo;s there? So thats where we come in&hellip;.</p>
  <p>The Plaza was inaugurated in 1619 and was designed by Juan Gomez de Mora. It used to have gardens, but those were removed just before the Spanish Civil War in 1936. What else has changed? The statue of King Philip III in the center of the plaza wasn&rsquo;t actually put there until the early 20th century either. The frescoes covering the outside of the now Information Center, once a royal bakery called La Casa Real de la Panaderia, were also added in the 20th century (1992). The frescoes represent different mythological figures, including gods and goddesses, as well as zodiac symbols.</p>
  <p>If you look carefully, you can also see Carlos II&rsquo;s coat of arms. Carlos II is famous for being the last Habsburg king in Spain. He suffered from numerous mental and physical deformities, which were probably consequences of inbreeding. The Habsburgs were a SUPER important family in European history and you will see traces of them all over Spain and the rest of Europe.</p>
  <p>If you want to see a visual history of Plaza Mayor, look around the base of the lampposts around the Plaza. They are like grown-up picture books</p>
  ` },
  { name : 'Black Legends…', source : 'Auto de Fé Painting // Secretos de Madrid' , img : 'assets/images/plaza_mayor/auto.jpg', content : `
  <p>Anyway, the Plaza was used for all sorts of bullfights, royal celebrations- birthdays, weddings, etc.- religious celebrations for Madrid&rsquo;s Patron Saint (San Isidro), and during Christmas, it has a open market with lots of food vendors, a tradition that continues today. So basically like every other plaza in Europe, right? Nope.</p>
  <p>Plaza Mayor was famous for executions and the autos-da-f&eacute; that took place there during the Spanish Inquisition. Basically autos-da-f&eacute; were public ceremonies, where people had to confess to religious crimes, and depending on the severity of said crime, they were sentenced to burnings, hangings, or other forms of execution. So basically, not where you want to spend your weekend in the seventeenth century if you were not going to celebrate the Queen&rsquo;s birthday, San Isidro, or Christmas.</p>
  ` },
  { name : 'Exploring Beyond', source : 'Chubby Spiderman from Plaza Mayor// Youtube: Littlebush Griffin' , img : 'assets/images/plaza_mayor/spiderman.jpg', content : `
So we recommend exploring a little. Check out our guide to the nearby area of Sol and discover the labyrinth of medieval streets in La Latina and Lavapiés. You are also right near the Royal Palace and the yummy Mercado de San Miguel. Down the block from the Mercado de San Miguel is another famous foodie mecca, Restaurant Botín. Restaurant Botín is the oldest restaurant in the world. The famous painter Goya worked in the restaurant as a waiter when he was young- meaning the stereotype of the struggling artist has been around for a while.
  ` } ] }]

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  view(place) {
    this.navCtrl.push(PlaceItemsPage, { place : place });
  }

}
