import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <header className='header-area'>
        <img src='/src/assets/BoominatiLogo.png' className="mb-logo"></img>
        <h1> Metro Boomin Discography</h1>
      </header>

      <section className="main-content">

        <aside className="navi">
          <ul className="unlist">
            <li className="item">Home</li>
            <li className="item">History</li>
            <li className="item">About</li>
          </ul>
        </aside>

        <div className="left-content">
          <div className="albums">
            <img id="image1" className='album-cover' src="/src/assets/WsDTyCover.jpg"></img>
            <img id="image2" className='album-cover' src="/src/assets/HaVCover.png"></img>
            <img id="image3" className='album-cover' src="/src/assets/SpiderCover.jpg"></img>
            <img id="image4" className='album-cover' src="/src/assets/NaHwCCover.jpg"></img>
            <img id="image5" className='album-cover' src="/src/assets/SavMCover.webp"></img>
            <img id="image6" className='album-cover' src="/src/assets/DoNCover.webp"></img>
          </div>
        </div>

        <div className="right-content">
          <div class="track-listing">
            {/* We Still dont trust ya */}
            <details>
              <summary className="album">We Still Don't Trust You</summary>
                <details>
                  <summary className="disc">Disc One</summary>
                    <div class="track">
                        <span class="track-title">1. "We Still Don't Trust You" (with the Weeknd)</span>
                        <span class="length">4:12</span>
                    </div>
                    <div class="track">
                        <span class="track-title">2. "Drink n Dance"</span>
                        <span class="length">3:40</span>
                    </div>
                    <div class="track">
                        <span class="track-title">3. "Out of My Hands"</span>
                        <span class="length">4:03</span>
                    </div>
                    <div class="track">
                        <span class="track-title">4. "Jealous"</span>
                        <span class="length">3:44</span>
                    </div>
                    <div class="track">
                        <span class="track-title">5. "This Sunday"</span>
                        <span class="length">3:18</span>
                    </div>
                    <div class="track">
                        <span class="track-title">6. "Luv Bad Bitches" (with Brownstone)</span>
                        <span class="length">3:16</span>
                    </div>
                    <div class="track">
                        <span class="track-title">7. "Amazing (Interlude)"</span>
                        <span class="length">2:24</span>
                    </div>
                    <div class="track">
                        <span class="track-title">8. "All to Myself" (with the Weeknd)</span>
                        <span class="length">4:14</span>
                    </div>
                    <div class="track">
                        <span class="track-title">9. "Nights Like This"</span>
                        <span class="length">3:52</span>
                    </div>
                    <div class="track">
                        <span class="track-title">10. "Came to the Party"</span>
                        <span class="length">3:18</span>
                    </div>
                    <div class="track">
                        <span class="track-title">11. "Right 4 You"</span>
                        <span class="length">3:56</span>
                    </div>
                    <div class="track">
                        <span class="track-title">12. "Mile High Memories"</span>
                        <span class="length">3:39</span>
                    </div>
                    <div class="track">
                        <span class="track-title">13. "Overload"</span>
                        <span class="length">3:44</span>
                    </div>
                    <div class="track">
                        <span class="track-title">14. "Gracious" (with Ty Dolla Sign)</span>
                        <span class="length">3:06</span>
                    </div>
                    <div class="track">
                        <span class="track-title">15. "Beat It"</span>
                        <span class="length">3:38</span>
                    </div>
                    <div class="track">
                        <span class="track-title">16. "Always Be My Fault" (with the Weeknd)</span>
                        <span class="length">4:06</span>
                    </div>
                    <div class="track">
                        <span class="track-title">17. "One Big Family"</span>
                        <span class="length">4:05</span>
                    </div>
                    <div class="track">
                        <span class="track-title">18. "Red Leather" (with J. Cole)</span>
                        <span class="length">6:54</span>
                    </div>
                </details>
                <details>
                  <summary className="disc">Disc Two</summary>
                    <div class="track">
                        <span class="track-title">1. "#1 (Intro)"</span>
                        <span class="length">0:41</span>
                    </div>
                    <div class="track">
                        <span class="track-title">2. "Nobody Knows My Struggle"</span>
                        <span class="length">3:25</span>
                    </div>
                    <div class="track">
                        <span class="track-title">3. "All My Life" (with Lil Baby)</span>
                        <span class="length">3:10</span>
                    </div>
                    <div class="track">
                        <span class="track-title">4. "Crossed Out"</span>
                        <span class="length">2:22</span>
                    </div>
                    <div class="track">
                        <span class="track-title">5. "Crazy Clientele"</span>
                        <span class="length">3:09</span>
                    </div>
                    <div class="track">
                        <span class="track-title">6. "Show of Hands" (with ASAP Rocky)</span>
                        <span class="length">3:33</span>
                    </div>
                    <div class="track">
                        <span class="track-title">7. "Streets Made Me a King"</span>
                        <span class="length">3:04</span>
                    </div>
                </details>
            </details>
            {/* Heros and Villans */}
            <details>
              <summary className="album">Heroes & Villains</summary>
                <div class="track">
                    <span class="track-title">1. "On Time" (with John Legend)</span>
                    <span class="length">2:49</span>
                </div>
                <div class="track">
                    <span class="track-title">2. "Superhero (Heroes & Villains)" (with Future and Chris Brown)</span>
                    <span class="length">3:03</span>
                </div>
                <div class="track">
                    <span class="track-title">3. "Too Many Nights" (featuring Don Toliver with Future)</span>
                    <span class="length">3:19</span>
                </div>
                <div class="track">
                    <span class="track-title">4. "Raindrops (Insane)" (with Travis Scott)</span>
                    <span class="length">3:08</span>
                </div>
                <div class="track">
                    <span class="track-title">5. "Umbrella" (with 21 Savage and Young Nudy)</span>
                    <span class="length">3:42</span>
                </div>
                <div class="track">
                    <span class="track-title">6. "Trance" (with Travis Scott and Young Thug)</span>
                    <span class="length">3:14</span>
                </div>
                <div class="track">
                    <span class="track-title">7. "Around Me" (featuring Don Toliver)</span>
                    <span class="length">3:12</span>
                </div>
                <div class="track">
                    <span class="track-title">8. "Metro Spider" (with Young Thug)</span>
                    <span class="length">2:55</span>
                </div>
                <div class="track">
                    <span class="track-title">9. "I Can't Save You (Interlude)" (with Future featuring Don Toliver)</span>
                    <span class="length">1:31</span>
                </div>
                <div class="track">
                    <span class="track-title">10. "Creepin'" (with the Weeknd and 21 Savage)</span>
                    <span class="length">3:42</span>
                </div>
                <div class="track">
                    <span class="track-title">11. "Niagara Falls (Foot or 2)" (with Travis Scott and 21 Savage)</span>
                    <span class="length">3:27</span>
                </div>
                <div class="track">
                    <span class="track-title">12. "Walk Em Down (Don't Kill Civilians)" (with 21 Savage featuring Mustafa)</span>
                    <span class="length">5:11</span>
                </div>
                <div class="track">
                    <span class="track-title">13. "Lock on Me" (with Travis Scott and Future)</span>
                    <span class="length">2:55</span>
                </div>
                <div class="track">
                    <span class="track-title">14. "Feel the Fiyaaaah" (with ASAP Rocky featuring Takeoff)</span>
                    <span class="length">3:09</span>
                </div>
                <div class="track">
                    <span class="track-title">15. "All the Money" (with Gunna) (bonus track)</span>
                    <span class="length">2:47</span>
                </div>
            </details>
            {/* Spidy man */}
            <details>
              <summary className="album">Spider-Man: Across the Spider-Verse </summary>
                <div class="track">
                    <span class="track-title">1. "Annihilate" (with Swae Lee, Lil Wayne and Offset)</span>
                    <span class="length">3:51</span>
                </div>
                <div class="track">
                    <span class="track-title">2. "Am I Dreaming" (with ASAP Rocky and Roisee)</span>
                    <span class="length">4:16</span>
                </div>
                <div class="track">
                    <span class="track-title">3. "All the Way Live" (with Future and Lil Uzi Vert)</span>
                    <span class="length">4:05</span>
                </div>
                <div class="track">
                    <span class="track-title">4. "Danger (Spider)" (Offset and JID)</span>
                    <span class="length">3:25</span>
                </div>
                <div class="track">
                    <span class="track-title">5. "Hummingbird" (with James Blake)</span>
                    <span class="length">5:19</span>
                </div>
                <div class="track">
                    <span class="track-title">6. "Calling" (with Swae Lee and Nav featuring A Boogie wit da Hoodie)</span>
                    <span class="length">3:39</span>
                </div>
                <div class="track">
                    <span class="track-title">7. "Silk & Cologne" (Ei8ht and Offset)</span>
                    <span class="length">2:42</span>
                </div>
                <div class="track">
                    <span class="track-title">8. "Link Up" (with Don Toliver and Wizkid featuring Beam and Toian)</span>
                    <span class="length">3:15</span>
                </div>
                <div class="track">
                    <span class="track-title">9. "Self Love" (with Coi Leray)</span>
                    <span class="length">3:09</span>
                </div>
                <div class="track">
                    <span class="track-title">10. "Home" (with Don Toliver and Lil Uzi Vert)</span>
                    <span class="length">3:15</span>
                </div>
                <div class="track">
                    <span class="track-title">11. "Nonviolent Communication" (with James Blake, ASAP Rocky and 21 Savage)</span>
                    <span class="length">3:29</span>
                </div>
                <div class="track">
                    <span class="track-title">12. "Givin' Up (Not the One)" (Don Toliver, 21 Savage and 2 Chainz)</span>
                    <span class="length">3:54</span>
                </div>
                <div class="track">
                    <span class="track-title">13. "Nas Morales" (with Nas)</span>
                    <span class="length">2:47</span>
                </div>
            </details>
            {/* Not all heros wear capes */}
            <details>
              <summary className="album">Not All Hero's Wear Capes</summary>
                <div class="track">
                    <span class="track-title">1. "10AM / Save the World" (featuring Gucci Mane)</span>
                    <span class="length">3:46</span>
                </div>
                <div class="track">
                    <span class="track-title">2. "Overdue" (featuring Travis Scott)</span>
                    <span class="length">2:46</span>
                </div>
                <div class="track">
                    <span class="track-title">3. "Don't Come Out the House" (featuring 21 Savage)</span>
                    <span class="length">2:48</span>
                </div>
                <div class="track">
                    <span class="track-title">4. "Dreamcatcher" (featuring Swae Lee and Travis Scott)</span>
                    <span class="length">3:31</span>
                </div>
                <div class="track">
                    <span class="track-title">5. "Space Cadet" (featuring Gunna)</span>
                    <span class="length">3:23</span>
                </div>
                <div class="track">
                    <span class="track-title">6. "10 Freaky Girls" (featuring 21 Savage)</span>
                    <span class="length">3:28</span>
                </div>
                <div class="track">
                    <span class="track-title">7. "Up to Something" (featuring Travis Scott and Young Thug)</span>
                    <span class="length">3:04</span>
                </div>
                <div class="track">
                    <span class="track-title">8. "Only 1 (Interlude)" (featuring Travis Scott)</span>
                    <span class="length">1:20</span>
                </div>
                <div class="track">
                    <span class="track-title">9. "Lesbian" (featuring Gunna and Young Thug)</span>
                    <span class="length">3:26</span>
                </div>
                <div class="track">
                    <span class="track-title">10. "Borrowed Love" (featuring Swae Lee and Wizkid)</span>
                    <span class="length">3:50</span>
                </div>
                <div class="track">
                    <span class="track-title">11. "Only You" (with J Balvin featuring Wizkid and Offset)</span>
                    <span class="length">3:38</span>
                </div>
                <div class="track">
                    <span class="track-title">12. "No More" (featuring Travis Scott, Kodak Black, and 21 Savage)</span>
                    <span class="length">4:25</span>
                </div>
                <div class="track">
                    <span class="track-title">13. "No Complaints" (featuring Offset and Drake) (bonus track)</span>
                    <span class="length">4:25</span>
                </div>
            </details>
            {/* Savage Mode II */}
            <details>
              <summary className="album">Savage Mode II</summary>
                <div class="track">
                    <span class="track-title">1. "Intro"</span>
                    <span class="length">1:10</span>
                </div>
                <div class="track">
                    <span class="track-title">2. "Runnin"</span>
                    <span class="length">3:16</span>
                </div>
                <div class="track">
                    <span class="track-title">3. "Glock in My Lap"</span>
                    <span class="length">3:14</span>
                </div>
                <div class="track">
                    <span class="track-title">4. "Mr. Right Now" (featuring Drake)</span>
                    <span class="length">3:14</span>
                </div>
                <div class="track">
                    <span class="track-title">5. "Rich Nigga Shit" (featuring Young Thug)</span>
                    <span class="length">3:10</span>
                </div>
                <div class="track">
                    <span class="track-title">6. "Slidin"</span>
                    <span class="length">3:05</span>
                </div>
                <div class="track">
                    <span class="track-title">7. "Many Men"</span>
                    <span class="length">3:22</span>
                </div>
                <div class="track">
                    <span class="track-title">8. "Snitches & Rats" (interlude)</span>
                    <span class="length">0:57</span>
                </div>
                <div class="track">
                    <span class="track-title">9. "Snitches & Rats" (featuring Young Nudy)</span>
                    <span class="length">3:08</span>
                </div>
                <div class="track">
                    <span class="track-title">10. "My Dawg"</span>
                    <span class="length">3:02</span>
                </div>
                <div class="track">
                    <span class="track-title">11. "Steppin on Niggas"</span>
                    <span class="length">2:21</span>
                </div>
                <div class="track">
                    <span class="track-title">12. "Brand New Draco"</span>
                    <span class="length">3:22</span>
                </div>
                <div class="track">
                    <span class="track-title">13. "No Opp Left Behind"</span>
                    <span class="length">3:14</span>
                </div>
                <div class="track">
                    <span class="track-title">14. "RIP Luv"</span>
                    <span class="length">3:34</span>
                </div>
                <div class="track">
                    <span class="track-title">15. "Said N Done"</span>
                    <span class="length">3:52</span>
                </div>
            </details>
            {/* Double or nothing */}
            <details>
              <summary className="album">Double or Nothing</summary>
                <div class="track">
                    <span class="track-title">1. "Go Legend" (featuring Travis Scott)</span>
                    <span class="length">4:28</span>
                </div>
                <div class="track">
                    <span class="track-title">2. "Big Bidness" (featuring 2 Chainz)</span>
                    <span class="length">4:33</span>
                </div>
                <div class="track">
                    <span class="track-title">3. "Who's Stopping Me"</span>
                    <span class="length">3:33</span>
                </div>
                <div class="track">
                    <span class="track-title">4. "Pull Up N Wreck" (featuring 21 Savage)</span>
                    <span class="length">3:47</span>
                </div>
                <div class="track">
                    <span class="track-title">5. "So Good" (featuring Kash Doll)</span>
                    <span class="length">4:28</span>
                </div>
                <div class="track">
                    <span class="track-title">6. "Savage Time"</span>
                    <span class="length">5:35</span>
                </div>
                <div class="track">
                    <span class="track-title">7. "Even the Odds" (featuring Young Thug)</span>
                    <span class="length">3:46</span>
                </div>
                <div class="track">
                    <span class="track-title">8. "In Tune"</span>
                    <span class="length">4:15</span>
                </div>
                <div class="track">
                    <span class="track-title">9. "Reason" (featuring Swae Lee)</span>
                    <span class="length">3:18</span>
                </div>
                <div class="track">
                    <span class="track-title">10. "No Hearts, No Love"</span>
                    <span class="length">3:45</span>
                </div>
            </details>
          </div>

        </div>
      </section>

      <footer>

      </footer>
    </>
  )
}

export default App
