import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="text-center text-white " >

        <div className="container pt-4">

          <section className="mb-4">
            <a className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark">
              <i className="fab fa-twitter"></i>
            </a>

            <a className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark">
              <i className="fab fa-google"></i>
            </a>

            <a className="btn btn-link btn-floating btn-lg text-dark m-1" target="_blank"
              href="https://www.instagram.com/ozmsydn/"
              role="button"
              data-mdb-ripple-color="dark">
              <i className="fab fa-instagram"></i>
            </a>

            <a className="btn btn-link btn-floating btn-lg text-dark m-1" target="_blank"
               href="https://www.linkedin.com/in/ozlemsoydan/"
              role="button"
              data-mdb-ripple-color="dark">
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="btn btn-link btn-floating btn-lg text-dark m-1" target="_blank"
               href="https://github.com/ozlemsoydan"
              role="button"
              data-mdb-ripple-color="dark">
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div className="text-center text-dark p-3" >
          © 2022 Copyright:
          <a className="text-dark" target="_blank" href="http://ozlemsoydan.com/">ozlemsoydan.com</a>
        </div>
      </footer>

    </>
  )
}
