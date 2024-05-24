import { Box, makeStyles, Modal } from "@material-ui/core";
import PhotosRoot from "../viewGalery/photosRoot.js";
import Instructions from "../../components/instructions";
import Support from "../../components/support.js";
import { UserContext } from "../../App";
import SliderPhoto from "../../components/SliderPhoto.js";
import house1 from "../../images/view-gallery/houses/1.jpg";
import house2 from "../../images/view-gallery/houses/Greenhouse Outsidecut.jpg";
import house3 from "../../images/view-gallery/houses/3.jpg";
import SURROUNDINGS1 from "../../images/view-gallery/SURROUNDINGS/1.jpg";
import SURROUNDINGS2 from "../../images/view-gallery/SURROUNDINGS/2.jpg";
import SURROUNDINGS3 from "../../images/view-gallery/SURROUNDINGS/3.jpg";
import {
  doubleRoom,
  tripleRoom,
  familyRoom,
  apartmentRoom,
  blueHouse,
  greenHouse,
  grottaNorthernLights,
  northernLights,
  neighborhood,
  activities,
} from "../../views/viewGalery/data";
import { useContext } from "react";

const HOUSES_BAKCGROUND_IMAGES_AND_TITLES = [
  {
    background: house1,
    title: "Blue House",
  },
  {
    background: house2,
    title: "Green House",
  },
  {
    background: house3,
    title: "Grótta Northern Lights",
  },
];

const SURROUNDINGS_BAKCGROUND_IMAGES_AND_TITLES = [
  {
    background: SURROUNDINGS1,
    title: "Northern Lights",
  },
  {
    background: SURROUNDINGS2,
    title: "Neighborhood",
  },
  {
    background: SURROUNDINGS3,
    title: "Activities",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "0px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      marginTop: "66%",
      width: "100%",
    },
  },
  paper: {
    position: "absolute",
    width: 400,
    height: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  btn: {
    border: "none !important",
    background: "none !important",
    width: "fit-content",
    height: "fit-content",
  },
}));

export default function ViewGallery() {
  // eslint-disable-next-line no-unused-vars
  const [modalState, setModal, room, setRoom] = useContext(UserContext);
  const { root } = useStyles();

  const handleClose = () => setRoom(false);

  const rooms = [doubleRoom[0], tripleRoom[0], familyRoom[0], apartmentRoom[0]];

  return (
    <Box className={root}>
      {/* ROOMS SECTION */}
      <Box>
        <Modal
          open={room.double}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <SliderPhoto
            handleClose={handleClose}
            mobileViewData={doubleRoom}
            data={doubleRoom}
            title="Double/Twin"
          />
        </Modal>
        <Modal
          open={room.triple}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <SliderPhoto
            handleClose={handleClose}
            mobileViewData={tripleRoom}
            data={tripleRoom}
            title="Triple/Quadruple"
          />
        </Modal>
        <Modal
          open={room.family}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <SliderPhoto
            handleClose={handleClose}
            mobileViewData={familyRoom}
            data={familyRoom}
            title="Family Room"
          />
        </Modal>
        <Modal
          open={room.apartments}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <SliderPhoto
            handleClose={handleClose}
            mobileViewData={apartmentRoom}
            data={apartmentRoom}
            title="Apartments"
          />
        </Modal>
      </Box>
      {/* HOUSES SECTION */}
      <Box className={root}>
        <Box>
          <Modal
            open={room.blueHouse}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <SliderPhoto
              handleClose={handleClose}
              data={blueHouse}
              title="Blue House"
            />
          </Modal>
          <Modal
            open={room.greenHouse}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <SliderPhoto
              handleClose={handleClose}
              data={greenHouse}
              title="Green House"
            />
          </Modal>
          <Modal
            open={room.gNorthernLights}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <SliderPhoto
              handleClose={handleClose}
              data={grottaNorthernLights}
              title="Grótta Northern Lights Apartment"
            />
          </Modal>
        </Box>
      </Box>
      {/* SURROUNDINGS SECTION */}
      <Box className={root}>
        <Box>
          <Modal
            open={room.northernLights}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <SliderPhoto
              handleClose={handleClose}
              mobileViewData={SURROUNDINGS_BAKCGROUND_IMAGES_AND_TITLES}
              data={northernLights}
              title="Northern Lights"
            />
          </Modal>
          <Modal
            open={room.neighborhood}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <SliderPhoto
              handleClose={handleClose}
              mobileViewData={SURROUNDINGS_BAKCGROUND_IMAGES_AND_TITLES}
              data={neighborhood}
              title="Neighborhood"
            />
          </Modal>
          <Modal
            open={room.activities}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <SliderPhoto
              handleClose={handleClose}
              mobileViewData={SURROUNDINGS_BAKCGROUND_IMAGES_AND_TITLES}
              data={activities}
              title="Activities"
            />
          </Modal>
        </Box>
      </Box>
      <PhotosRoot
        isClickable
        id="rooms"
        title="ROOMS"
        backgroundImagesUrlAndTitles={rooms}
        customTitleStyle={{
          marginTop: "72px",
        }}
        mobileTitle={{
          mobileMarginTop: "33.5px",
        }}
      />
      <PhotosRoot
        isClickable
        id="houses"
        title="HOUSES"
        backgroundImagesUrlAndTitles={HOUSES_BAKCGROUND_IMAGES_AND_TITLES}
        customTitleStyle={{
          marginTop: "85px",
        }}
        mobileTitle={{
          mobileMarginTop: "42px",
        }}
      />
      <PhotosRoot
        isClickable
        id="surroundings"
        title="SURROUNDINGS"
        backgroundImagesUrlAndTitles={SURROUNDINGS_BAKCGROUND_IMAGES_AND_TITLES}
        customTitleStyle={{
          marginTop: "200px",
        }}
        mobileTitle={{
          mobileMarginTop: "128px",
        }}
      />
      <Instructions />
      <Support />
    </Box>
  );
}
