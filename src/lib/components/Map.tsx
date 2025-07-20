const Map = () => {
  return (
    <div className="w-full h-[800px] pt-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.628100298217!2d-0.140645!3d50.8380522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875851c2361bad9%3A0xce787842de5faf54!2sZen%20Healing!5e0!3m2!1sen!2suk!4v1752875583315!5m2!1sen!2suk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
