import "./style.css"
export default function HomePage()
{
  return (
    <div>
      <section className="spacing">
                <div className="container-fluid">
                  <div className="row">
                    <div class="col-lg-6 col-md-12 px-5">
                      <div class="business-item-info">
                        <h3>Your Best Value <br/>Proposition</h3>
                        <p>Loremp ipsum sit met, connecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a liqua</p>    
                        <a className="btn btn-common" href="/">Discover</a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 pt-70">
                      <div className="business-item-img">
                        <img src="https://user-images.githubusercontent.com/54095539/105851989-d76ab980-6009-11eb-9a3d-c7f6a3f00a21.png" className="img-fluid" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

        <div className="section2 container-fluid spacing">
            <h1><b>HOW IT WORKS</b></h1>
        <div className="row">
          <div className="col-md-3 px-5">
          <div className="content text-center">
            <i className="icon fal fa-user-plus mb-5"></i>
            <h6><b>CREATE ACCOUNT</b></h6>
            <p>Vestibulum at viverra velit. Mauris consectetur ante lectusVestibulum at viverra velit. Mauris consectetur ante lectus,</p>
          </div>
          </div>
          <div className="col-md-3 px-5">
          <div className="content text-center">
          <i className="icon fal fa-image mb-5"></i>
            <h6><b>UPLOADER UNE OEUVRE</b></h6>
            <p>Vestibulum at viverra velit. Mauris consectetur ante lectusVestibulum at viverra velit. Mauris consectetur ante lectus,</p>
            </div>
          </div>
          <div className="col-md-3 px-5">
          <div className="content text-center">
          <i className="icon fal fa-gem mb-5"></i>
            <h6><b>SAVE IN BLOCKCHAIN</b></h6>
            <p>Vestibulum at viverra velit. Mauris consectetur ante lectusVestibulum at viverra velit. Mauris consectetur ante lectus,</p>
          </div>
          </div>
          <div className="col-md-3 px-5">
          <div className="content text-center">
          <i className="icon fal fa-file-signature mb-5"></i>
            <h6><b>RECEVOIR LE CERTIFICAT </b></h6>
            <p>Vestibulum at viverra velit. Mauris consectetur ante lectusVestibulum at viverra velit. Mauris consectetur ante lectus,</p>
          </div>
          </div>
          </div>
        </div>

    <section className="section3 spacing">
    <div className="container-fluid">

      <div className="row">
        <div className="col-lg-6 col-md-12 px-5">
          <div className="business-item-info">
            <h3>LE CERTIFICAT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus lacus quis tincidunt maximus. Cras posuere lorem sed sapien fringilla cursus. Suspendisse facilisis semper dolor at fringilla. </p>
            <p> Sed tincidunt semper sem nec mollis. Vestibulum at viverra velit. Mauris consectetur ante lectus, ac pretium mi laoreet sed. </p>    
            <a className="btn btn-common" href="/">Discover</a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 pt-70">
          <div className="business-item-img">
            <img src="https://user-images.githubusercontent.com/54095539/106382409-76662b80-63e5-11eb-81cc-6f8d9a5ac760.png" className="img-fluid" alt=""/>
          </div>
        </div>
      </div>
    </div>
    </section>
    <section className="section4 spacing">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-12 pt-70">
          <div className="business-item-img">
            <img src="https://user-images.githubusercontent.com/54095539/106425969-c3500d80-648a-11eb-9fb7-4731278d4cf1.png" className="img-fluid" alt=""/>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 px-5">
          <div className="business-item-info">
            <h3>About</h3>
            <p>Quisque id tellus et dui pretium varius. Suspendisse vel justo non mi condimentum egestas semper vel est. Nulla ante magna, iaculis blandit dictum ac, vestibulum a eros. Quisque at cursus orci. <br/> <br/>Vestibulum imperdiet ut nisl vel pretium. Proin ac volutpat urna. Maecenas facilisis elit ut rhoncus rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section5 contact spacing">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <h2 className="business-item-info">
            <h3>Get In Touch</h3>
          </h2>
          <form id="contactForm">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input type="text" className="form-control" id="name" name="name" placeholder="Name" required data-error="Please enter your name" />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input type="text" className="form-control" id="email" name="email" placeholder="Email" required data-error="Please enter your Email" />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea className="form-control" type="message" id="message"  name="message" placeholder="Write Message" rows="6" data-error="Please enter your subject" required></textarea>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="submit-button">
                  <button className="btn btn-common" id="submit" type="submit">Submit</button>
                  <div id="msgSubmit" className="h3 hidden"></div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6 col-md-12 pt-70">
          <div className="business-item-img">
            <img src="https://user-images.githubusercontent.com/54095539/106425720-53418780-648a-11eb-929b-41a766f962a9.png" className="img-fluid" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  );
}