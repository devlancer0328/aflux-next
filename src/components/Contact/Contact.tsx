import React from "react";

const Contact = () => {
  return (
    <div className="flex bg-green-50 w-full justify-center" id="contact">
      <div className="flex flex-col container mx-xl py-24 justify-center items-center">
        <h1 className="text-5xl mb-16">Kontakt</h1>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col border-2 border-green-200 w-1/2 me-8 h-full rounded-2xl p-6 items-center justify-center">
            <p className="mb-2">
              <strong className="me-4">E-mail:</strong>
              <a
                className="hover:text-green-600"
                href="mailto:kontakt@aflux.pl"
              >
                kontakt@aflux.pl
              </a>
            </p>
            <p className="mb-2">
              <strong className="me-4">Tel.:</strong>
              <a className="hover:text-green-600" href="tel:+48 777 999 999">
                +48 777 999 999
              </a>
            </p>
          </div>
          <div className="flex flex-col">
            <iframe
              className="w-full lg:w-[720px] relative rounded-2xl border-2 border-green-200"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35438479282!2d20.92111239761172!3d52.23306532094908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1668164739561!5m2!1spl!2spl"
              width="800"
              height="200"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
