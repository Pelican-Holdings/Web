const GoogleMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31681.41046677953!2d80.073761!3d6.988503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2559bf774ba19%3A0xa59cc60a8aac1fd3!2sDelgoda%20-%20Kirindiwela%20Rd%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1699711886902!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
