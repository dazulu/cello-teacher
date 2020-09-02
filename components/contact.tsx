const contact = () => {
  return (
    <>
      <div id="contact" className="padding__wrapper">
        <div className="content__wrapper contact">
          <h2 className="title">Contact</h2>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-recaptcha="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>
                Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Phone Number: <input type="tel" name="phone" />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            <div data-netlify-recaptcha="true"></div>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
      <style jsx>{`
        .title {
          text-align: center;
          margin-bottom: 40px;
        }
      `}</style>
    </>
  )
}

export default contact
