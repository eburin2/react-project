import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}


class App extends Component {
  state = {
    cards: [
      {
        id: 1, title: 'Free Tarot Reading', description: 'Based on the classic Celtic Cross spread, this Free Tarot Reading is designed to help you move through whatever issues you\'re facing with greater clarity and confidence. From personal matters to questions about love, career, finances, or a major decision you need to make, this versatile spread has advice for any area of your life.', img:'https://gfx.tarot.com/images/feeds/165x165/tarot-hand-165x165.jpg', productUrl: 'https://www.tarot.com/readings-reports/tarot-readings/free'
      },
      {
        id: 2, title: 'Free Love Tarot Reading', description: 'When you have a problem in your love life -- no matter how simple or complex it is -- it has a way of taking over everything! You can\'t think straight, everything about your circumstances feels frustrating, and you\'re confused about your next steps.', img:'https://gfx.tarot.com/images/feeds/165x165/tarot-lovers-aquarian-sample-165x165.jpg', productUrl: 'https://www.tarot.com/readings-reports/tarot-readings/free/love'
      },
      {
        id: 3, title: 'Daily Reflection Tarot', description: 'Tarot is made to handle the situations of the present moment ... and there’s no moment more pressing than today. This classic Daily Tarot Reading delivers the rich guidance you need to make the most of your day.', img:'https://gfx.tarot.com/images/feeds/165x165/new-celtic-cross-free-165x165.jpg', productUrl: 'https://www.tarot.com/readings-reports/tarot-readings/daily-reflection'
      },
      {
        id: 4, title: 'Free Tarot Reading', description: 'Based on the classic Celtic Cross spread, this Free Tarot Reading is designed to help you move through whatever issues you\'re facing with greater clarity and confidence. From personal matters to questions about love, career, finances, or a major decision you need to make, this versatile spread has advice for any area of your life.', img:'https://gfx.tarot.com/images/feeds/165x165/new-celtic-cross-free-165x165.jpg', productUrl: 'https://www.tarot.com/readings-reports/tarot-readings/celtic-cross'
      },
      {
        id: 5, title: 'Love Celtic Cross Tarot', description: 'Love is unpredictable, even on the best of days. This can often leave you feeling confused, indecisive, or unfulfilled in matters of the heart -- but that doesn\'t mean it has to stay that way! The Love Celtic Cross Tarot Reading provides personalized love advice to help you overcome your romantic obstacles so you can experience the happiness and fulfillment you deserve.', img: 'https://gfx.tarot.com/images/feeds/165x165/cosmic-twocups-165x165.jpg', productUrl: 'https://www.tarot.com/readings-reports/tarot-readings/mandala'
      },
      {
        id: 6, title: 'Mandala Tarot', description: 'The 12-card Mandala Tarot spread is a one-of-a-kind reading that integrates classical Tarot with the ancient principles of Astrology. Though mystical in its approach, this reading is ideal for solving complex problems and delivering a rare, in-depth analysis that is rich in perspective.', img: 'https://gfx.tarot.com/images/feeds/165x165/mandala-tarot-color-165x165.jpg', productUrl: 'https://www.tarot.com/readings-reports/tarot-readings/mandala'
      },
      {
        id: 7, title: 'Soulmate Tarot Reading', description: 'The Soulmate Tarot Reading reveals your love potential, guiding you toward the sacred connection your heart was intended for! According to Plato\'s "split-apart" theory, every human being is part of one soul that has been separated. The two halves will search tirelessly for one another in hopes of coming back together as a whole. So how can you be sure that you find your other half?.', img: 'https://gfx.tarot.com/images/feeds/165x165/lovers-kiss-165x165.jpg', productUrl: 'https://www.tarot.com/readings-reports/tarot-readings/soulmate'
      },
      {
        id: 8, title: 'Star of David Tarot', description: 'The Star of David Tarot Reading was designed to provide conflict resolution for any polarizing situation. This spread is a powerful problem-solving tool as it examines the influential energies affecting your circumstances. Whether you are struggling with relationship issues, career choices, or just the exhaustion of your own mental back-and-forth, this Tarot reading provides the information needed to move forward with confidence when making a decision.', img: 'https://gfx.tarot.com/images/feeds/165x165/woman-star-light-165x165.jpg', productUrl: 'https://www.tarot.com/readings-reports/tarot-readings/star-of-david'
      },
      {
        id: 9, title: 'Karmic Lessons Tarot', description: 'The Karmic Lesson spread gets straight to the point, including three key positions that will help you clearly see the karma you are dealing with, how it came about and what lessons you need to learn in order to move forward.', img: 'https://gfx.tarot.com/images/feeds/165x165/woman-red-sun-horizon-165x165.jpg', productUrl: 'https://www.tarot.com/readings-reports/tarot-readings/karmic-lessons'
      },
      {
        id: 10, title: 'Burning Question Tarot', description: 'Tarot for two! This reading helps you and your lover pull the curtain on issues that are coming up in your relationship now.', img: 'https://gfx.tarot.com/images/feeds/165x165/burning-love-165x165.jpg', productUrl: 'https://product.tarot.com/tarot/getreport.php?deck_ID=&state=ENTRY&stup_id=63600&TF_question='
      },
      {
        id: 11, title: 'Tree of Life Tarot Reading', description: 'The Tree of Life Tarot spread channels the sacred wisdom within you, restoring balance to your mind, body, and spirit. This mystical 10-card Tarot reading is derived from the Hebrew Kabbalah and uses ancient symbolism to illustrate the dynamic connection between your internal energy centers and the external forces of nature.', img: 'https://gfx.tarot.com/images/feeds/165x165/kabbalah-tree-165x165.jpg', productUrl: 'https://www.tarot.com/readings-reports/tarot-readings/tree-of-life'
      }
    ],
    // isLoggedIn ? return 'productUrl' : null;
  }


      render() {
          const cards = getRandom(this.state.cards, 6)

          return (
              cards.map((card, index) => {
                  return (

                          <Card
                              image={card.img}
                              title={card.title}
                              description={card.description}
                              product={card.productUrl}
                              key={card.id}
                          />

                  );
              })
          );
      }
  }


//     return (
//       <div className="App">
//         {cards}
//       </div>
//     );
//   }
// }

export default App;
