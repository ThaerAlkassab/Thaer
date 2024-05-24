import React from "react";
import "./css/Galery.css";
import PaperImage from "./PaperImage.js";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "@material-ui/core/Modal";
import Rooms from "./Rooms.js";

AOS.init({
  // Global settings:
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
});

function Galery({
  name,
  images1,
  images2,
  images3,
  titlesName1,
  titlesName2,
  titlesName3,
  booleanText1,
  classSlide,
  classAnimation,
}) {
  // getModalStyle is not a pure function, we roll the style only on the first render

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div data-aos="fade-up" className="galery">
      <div className={classSlide}>
        <h2>{name}</h2>
      </div>
      <div data-aos="fade-up" className={classAnimation}>
        <PaperImage
          onhandle={handleOpen}
          key={0}
          image={images1}
          textboolean={booleanText1}
          textlist1="DOUBLE/TWIN"
          textlist2="TRIPLE/QUADRUPLE"
          textlist3="FAMILY ROOM"
          textlist4="APARMENTS"
          title={titlesName1}
        />

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className="modal-galery"
        >
          <Rooms handleClose={handleClose} />
        </Modal>

        <PaperImage
          key={1}
          image={images2}
          textboolean={false}
          title={titlesName2}
        />
        <PaperImage
          key={2}
          image={images3}
          textboolean={false}
          title={titlesName3}
        />
      </div>
    </div>
  );
}

export default Galery;
