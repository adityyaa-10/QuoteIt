import React from 'react'
import Naruto from '../assets/Naruto.jpg'
import Sasuke from '../assets/Sasuke.jpg'
import Minato from '../assets/Minato.jpg'
import Itachi from '../assets/Itachi.jpg'
import Jiraiya from '../assets/Jiraiya.jpg'
import Orochimaru from '../assets/Orochimaru.jpg'
import Obito from '../assets/Obito.jpg'
import Madara from '../assets/Madara.jpg'
import Gaara from '../assets/Gaara.jpg'
import Shikamaru from '../assets/Shikamaru.jpg'
import Kakashi from '../assets/Kakashi.jpg'
import Pain from '../assets/Pain.jpg'

const Home = () => (
  <section className="text-gray-400 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="text-2xl font-medium title-font mb-4 text-white">ANIME CHARACTERS</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here are some of the main characters of the Manga Series NARUTO.</p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={Naruto} />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-white">Naruto Uzumaki</h2>
              <h3 className="text-gray-500 mb-3">Hidden Leaf Village</h3>
              <p className="mb-4">Naruto Uzumaki (うずまき ナルト, Uzumaki Naruto) is the title character and main protagonist of the franchise. He was the first character created by Kishimoto during the conception of the series and was designed with many traits from other shōnen characters.</p>
            </div>
            <a href="" className='text-indigo-500 '>SEE THEIR QUOTES</a>
          </div>

        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={Sasuke} />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-white">Sasuke Uchiha</h2>
              <h3 className="text-gray-500 mb-3">Hidden Leaf Village</h3>
              <p className="mb-4">Sasuke Uchiha (うちは サスケ, Uchiha Sasuke) is Naruto's rival. He was designed by Kishimoto as the "cool genius" since he felt this was an integral part of an ideal rivalry.</p>
              <br />
              <br />
            </div>
            <a href="" className='text-indigo-500 '>SEE THEIR QUOTES</a>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={Minato} />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-white">Minato Namikaze</h2>
              <h3 className="text-gray-500 mb-3">Hidden Leaf Village</h3>
              <p className="mb-4">Minato Namikaze (波風 ミナト, Namikaze Minato), the Fourth Hokage (四代目火影, Yondaime Hokage), is Naruto Uzumaki's father and Kushina's husband. Although Naruto and Minato are noted to have a number of similar physical traits throughout the series.</p>
            </div>
            <a href="" className='text-indigo-500 '>SEE THEIR QUOTES</a>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={Itachi} />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-white">Itachi Uchiha</h2>
              <h3 className="text-gray-500 mb-3">Hidden Leaf Village</h3>
              <p className="mb-4">tachi Uchiha (うちは イタチ, Uchiha Itachi) is a former ninja of Konohagakure and the partner of Kisame Hoshigaki. Though having spent his early youth as the prodigy of the Uchiha clan, Itachi is treated as a villain for much of the series.</p>
            </div>
            <a href="" className='text-indigo-500 '>SEE THEIR QUOTES</a>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={Jiraiya} />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-white">Jiraiya</h2>
              <h3 className="text-gray-500 mb-3">Hidden Leaf Village</h3>
              <p className="mb-4">Jiraiya (自来也) was a Konohagakure ninja, being not only Naruto's teacher but also his father's teacher. Kishimoto has commented that out of all master-pupil relationships he has created in the Naruto series, the bond between Naruto and Jiraiya is his favorite, noting that it makes drawing them "worthwhile"</p>
            </div>
            <a href="" className='text-indigo-500 '>SEE THEIR QUOTES</a>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={Orochimaru} />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-white">Orochimaru</h2>
              <h3 className="text-gray-500 mb-3">Hidden Leaf Village</h3>
              <p className="mb-4">Orochimaru (大蛇丸) is a criminal who served as the principal villain of Part I, having previously affiliated with the Akatsuki. He was a former Hidden Leaf ninja and Hiruzen's student alongside his teammates Jiraiya and Tsunade, who are revered as the Legendary Sannin.</p>
            <br />
            </div>
            <a href="" className='text-indigo-500 '>SEE THEIR QUOTES</a>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={Obito}/>
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-white">Obito Uchiha</h2>
              <h3 className="text-gray-500 mb-3">Hidden Leaf Village</h3>
              <p className="mb-4">Obito Uchiha (うちは オビト, Uchiha Obito), also known under his alias Tobi (トビ) is the true leader of the Akatsuki and the primary antagonist for most of Part II. As a child during the Third Great Ninja War, being Kakashi's teammate in Team Minato</p>
              <br />
            </div>
            <a href="" className='text-indigo-500 '>SEE THEIR QUOTES</a>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={Madara}/>
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-white">Madara Uchiha</h2>
              <h3 className="text-gray-500 mb-3">Hidden Leaf Village</h3>
              <p className="mb-4">Madara Uchiha (うちは マダラ, Uchiha Madara) is one of the co-founders of the Hidden Leaf Village along with Hashirama Senju, the two later revealed to be reincarnations of their clans' founding ancestors Indra and Asura prior to Sasuke and Naruto</p>
              <br />
            </div>
            <a href="" className='text-indigo-500 '>SEE THEIR QUOTES</a>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={Gaara} />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-white">Gaara Yuzawa</h2>
              <h3 className="text-gray-500 mb-3">Hidden Sand Village</h3>
              <p className="mb-4">Gaara (我愛羅) is the youngest of the three siblings, created as a foil to Naruto Uzumaki, with a similar background yet a highly divergent personality.[9] Before being born, Gaara was made into a weapon by his father by becoming the Jinchuriki of the Tailed Beast Shukaku the One-Tail (一尾の守鶴, Ichibi no Shukaku). </p>
            </div>
            <a href="" className='text-indigo-500 '>SEE THEIR QUOTES</a>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={Kakashi} />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-white">Kakashi Hatake</h2>
              <h3 className="text-gray-500 mb-3">Hidden Leaf Village</h3>
              <p className="mb-4">Kakashi Hatake is the easygoing, smart leader of team 7, consisting of Naruto Uzumaki, Sasuke Uchiha and Sakura Haruno. Kakashi had a dark past, but is unaffected by it as an adult. He was a very vital key for Naruto's success, training him to be a great ninja.</p>
              <br />
            </div>
            <a href="" className='text-indigo-500 '>SEE THEIR QUOTES</a>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={Shikamaru} />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-white">Shikamaru Nara</h2>
              <h3 className="text-gray-500 mb-3">Hidden Leaf Village</h3>
              <p className="mb-4">Shikamaru Nara (奈良 シカマル, Nara Shikamaru) is a member of Team 10. Creator Kishimoto has noted that he "likes" Shikamaru due to his easygoing nature despite being a genius, and contrasted him against Sasuke Uchiha's intelligent but abrasive personality.</p>
              <br />
            </div>
            <a href="" className='text-indigo-500 '>SEE THEIR QUOTES</a>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={Pain}/>
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-white">Pain</h2>
              <h3 className="text-gray-500 mb-3">Hidden Rain Village</h3>
              <p className="mb-4">Nagato (長門), primarily known under the alias of Pain (ペイン, Pein), is the recognized leader of the Akatsuki and partner of Konan, with Obito acting as his benefactor.[ch. 510] The "Pain" most often seen in the series is the Deva Path, which is actually Nagato's deceased friend, Yahiko (弥彦)</p>

            </div>
            <a href="" className='text-indigo-500 '>SEE THEIR QUOTES</a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Home