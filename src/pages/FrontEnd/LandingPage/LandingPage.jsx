import React from 'react'

function LandingPage() {
  return (
    // <main>
    <div className='landingPage'>
      <div className="container">
        <div className="row">

          <div className="bonusOffer text-light container p-3 col-10 col-offset-1 mx-2 col-lg-6 col-offset-3 col-md-8 col-md-2">
            <h3>$200 bonus a la création du compte  </h3>
            <p>Ajoutez simplement des économies à un nouveau compte courant en ligne et maximisez <br /> ton bonus $250.</p>
            <button type="button" className='btn btn-light text-dark' >Voir l'offre</button>
          </div>
        </div>
      </div>
    </div>
    // {/* </main> */}
  )
}

export default LandingPage