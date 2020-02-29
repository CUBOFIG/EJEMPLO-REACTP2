import React from 'react'

const Curso = () =>(
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="https://i.pinimg.com/originals/ef/63/f9/ef63f91d7ac356ba8bcc60c38f546d0a.jpg" alt="Poster de curso"></img>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
          Programación orientada a objetos con Go
        </h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src="https://observer.com/wp-content/uploads/sites/2/2020/01/elon-musk-twitter-advice.jpg?quality=80" alt="Profesor"></img>
              </div>
            </div>
            <span className="small">EL MANNY</span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="https://youtube.com">$ 20USD</a>
        </div>
      </div>
    </article>
    
)

export default Curso